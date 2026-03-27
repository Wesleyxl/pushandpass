import { useInstallPrompt } from '@/hooks/useInstallPrompt';

function App() {
  const { showInstallModal, isIOSDevice, promptInstall, dismissInstallModal } = useInstallPrompt();

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-red-600">Push & Pass</h1>
      </header>

      {/* Modal de instalação PWA — aparece automaticamente */}
      {showInstallModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-sm mx-4 mb-4 sm:mb-0 bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden animate-[slideUp_0.3s_ease-out]">
            {/* Ícone do app */}
            <div className="flex flex-col items-center pt-8 pb-4 px-6">
              <img
                src="/pwa-192x192.png"
                alt="Push & Pass"
                className="w-20 h-20 rounded-2xl shadow-lg mb-4"
              />
              <h2 className="text-xl font-bold text-white">Push & Pass</h2>
              <p className="text-zinc-400 text-sm mt-1 text-center">
                Instale o app para uma experiência completa, sem barra de navegação.
              </p>
            </div>

            {isIOSDevice ? (
              /* Instruções para iOS */
              <div className="px-6 pb-2">
                <div className="flex items-center gap-3 py-3 border-t border-zinc-800">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-sm font-bold text-white shrink-0">
                    1
                  </span>
                  <p className="text-sm text-zinc-300">
                    Toque no ícone{' '}
                    <svg
                      className="inline-block w-5 h-5 align-text-bottom text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M12 1.5v13.5m0-13.5 3 3m-3-3-3 3"
                      />
                    </svg>{' '}
                    de compartilhar na barra do Safari
                  </p>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-zinc-800">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-sm font-bold text-white shrink-0">
                    2
                  </span>
                  <p className="text-sm text-zinc-300">
                    Role e toque em <strong>&quot;Adicionar à Tela de Início&quot;</strong>
                  </p>
                </div>
              </div>
            ) : (
              /* Botão direto para Android/Chrome */
              <div className="px-6 pb-2">
                <button
                  onClick={promptInstall}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-semibold rounded-xl transition-all"
                >
                  Instalar App
                </button>
              </div>
            )}

            {/* Botão de fechar */}
            <div className="px-6 pb-6 pt-2">
              <button
                onClick={dismissInstallModal}
                className="w-full py-2.5 text-zinc-500 hover:text-zinc-300 text-sm font-medium transition-colors"
              >
                Agora não
              </button>
            </div>
          </div>
        </div>
      )}

      <main>
        <p>Bem-vindo ao hub central de automobilismo.</p>
        <p>
          Aqui você encontrará as últimas novidades, eventos e recursos para aprimorar sua
          experiência no mundo do automobilismo e Sim Racing.
        </p>
      </main>
    </div>
  );
}

export default App;
