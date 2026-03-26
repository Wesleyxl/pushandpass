import React from 'react';
import { useInstallPrompt } from '@/hooks/useInstallPrompt';

export default function App() {
  const { isInstallable, promptInstall } = useInstallPrompt();

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-red-600">Push & Pass</h1>

        {/* Botão só aparece se o app puder ser instalado */}
        {isInstallable && (
          <button
            onClick={promptInstall}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold"
          >
            Instalar App
          </button>
        )}
      </header>

      <main>
        <p>Bem-vindo ao hub central de automobilismo.</p>
      </main>
    </div>
  );
}
