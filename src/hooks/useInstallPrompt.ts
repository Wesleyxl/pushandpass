import { useState, useEffect, useCallback } from 'react';

// Interface para o evento não padrão do Chrome
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

function isIOS(): boolean {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
}

function isInStandaloneMode(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator && (navigator as unknown as { standalone: boolean }).standalone)
  );
}

export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  // Derived at initialization — no effect needed
  const isIOSDevice = isIOS();

  const shouldShowByDefault = () => {
    if (isInStandaloneMode()) return false;
    if (localStorage.getItem('pwa-install-dismissed')) return false;
    return isIOSDevice; // show immediately only for iOS
  };

  const [showInstallModal, setShowInstallModal] = useState(shouldShowByDefault);

  useEffect(() => {
    // Already running as installed app or dismissed — nothing to do
    if (isInStandaloneMode()) return;
    if (localStorage.getItem('pwa-install-dismissed')) return;
    // iOS is handled via initial state above, no event subscription needed
    if (isIOS()) return;

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallModal(true); // ✅ This is fine — it's inside a callback
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallModal(false);
      localStorage.setItem('pwa-install-dismissed', '1');
    }

    setDeferredPrompt(null);
  }, [deferredPrompt]);

  const dismissInstallModal = useCallback(() => {
    setShowInstallModal(false);
    localStorage.setItem('pwa-install-dismissed', '1');
  }, []);

  return { showInstallModal, isIOSDevice, promptInstall, dismissInstallModal };
}
