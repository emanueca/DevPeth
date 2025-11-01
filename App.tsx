import React, { useState, useEffect, useRef } from 'react';
import { GithubIcon } from './components/GithubIcon';
import { UserIcon } from './components/UserIcon';
import { FolderIcon } from './components/FolderIcon';
import { LinkIcon } from './components/LinkIcon';
import { DevPethLogoIcon } from './components/DevPethLogoIcon';

// --- TRANSLATIONS & CONSTANTS ---
const PROMPT_TEXT = 'C:\\DevPeth>';
const translations = {
    en: {
        CMD_HEADER_TEXT: 'C:\\Users\\Developer> DevPeth Login',
        WELCOME_MESSAGES: [
            'Initializing DevPeth Interface...',
            'https://github.com/emanueca/DevPeth/tree/main',
            'Connection established.',
            ' ',
            'Welcome to DevPeth.',
            'A community dedicated to open tasks from open source projects.',
            'The goal is to turn ticket queues into deliverables:',
            'bugfixes, features, documentation, and performance improvements.',
            'Contribute, learn from other developers, and strengthen your portfolio.',
            ' ',
            'To join, please authenticate below. Select a login method.',
        ],
        loginGithub: 'Login with GitHub',
        loginGuest: 'Continue as Guest',
        skip: 'Skip Animation >>',
    },
    'pt-br': {
        CMD_HEADER_TEXT: 'C:\\Usuarios\\Desenvolvedor> Login DevPeth',
        WELCOME_MESSAGES: [
            'Inicializando interface DevPeth...',
            'https://github.com/emanueca/DevPeth/tree/main',
            'Conexão estabelecida.',
            ' ',
            'Bem-vindo(a) ao DevPeth.',
            'Uma comunidade voltada a tarefas abertas',
            'de projetos open source. O foco é transformar filas de tickets em entregas:',
            'bugfixes, features, documentação e melhorias de desempenho.',
            'Contribua, aprenda com outras pessoas desenvolvedoras e fortaleça seu portfólio.',
            ' ',
            'Para participar, autentique-se abaixo. Selecione um método de login',
        ],
        loginGithub: 'Login com GitHub',
        loginGuest: 'Continuar como Convidado',
        skip: 'Pular Animação >>',
    }
};
type Language = 'en' | 'pt-br';
const TYPING_SPEED_MS = 50;
const LINE_DELAY_MS = 200;

// --- NOVO COMPONENTE PRINCIPAL (O "ROTEADOR") ---
const App: React.FC = () => {
    // NOVO: Estado para controlar se o usuário está logado
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // NOVO: Função para "logar" o usuário, passada para a LoginScreen
    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    // NOVO: Renderização condicional
    if (!isAuthenticated) {
        // Se não estiver logado, mostra a tela de login
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
    }

    // Se estiver logado, mostra a área de trabalho
    return <DesktopScreen />;
};


// --- TELA DA ÁREA DE TRABALHO (Antigo 'App') ---

interface DesktopIconProps {
    icon: React.ReactElement<{ className?: string }>;
    label: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label }) => (
     <div className="flex flex-col items-center justify-start text-center gap-2 p-2 w-28 h-28">
        <div className="w-16 h-16 flex items-center justify-center text-green-400">
             {React.cloneElement(icon, { className: "w-12 h-12" })}
        </div>
        <span className="text-sm text-gray-200 break-words w-full">{label}</span>
    </div>
);

// MODIFICADO: Renomeado de 'App' para 'DesktopScreen'
// REMOVIDO: O estado 'isLoginWindowOpen' não é mais necessário aqui
const DesktopScreen: React.FC = () => {
    return (
        <main className="min-h-screen bg-transparent text-white font-mono overflow-hidden relative">
             <div className="p-4 flex flex-wrap items-start gap-4">
                 <button 
                    // REMOVIDO: onDoubleClick
                    className="focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    aria-label="DevPeth"
                    // NOVO: Adicionado um alerta simples, já que não abre mais um modal
                    onClick={() => alert("DevPeth já está aberto.")}
                 >
                    <DesktopIcon icon={<DevPethLogoIcon />} label="DevPeth" />
                </button>

                <a 
                    href="https://github.com/emanueca/DevPeth/tree/main" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                     <DesktopIcon icon={<GithubIcon />} label="Repository" />
                </a>

                 <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); alert("Redirecting to resources..."); }}
                    className="focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded-lg hover:bg-white/10 transition-colors duration-200"
                 >
                     <DesktopIcon icon={<LinkIcon />} label="Resources" />
                </a>
                 <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); alert("Redirecting to docs..."); }}
                    className="focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded-lg hover:bg-white/10 transition-colors duration-200"
                 >
                     <DesktopIcon icon={<FolderIcon />} label="Docs" />
                </a>
             </div>
            
            {/* REMOVIDO: A renderização condicional do LoginWindow foi movida para o 'App' */}

            <p className="fixed bottom-2 right-4 text-gray-600 text-xs select-none">
                https://github.com/emanueca
            </p>
        </main>
    );
};


// --- TELA DE LOGIN (Antiga 'LoginWindow') ---

// MODIFICADO: A prop 'onClose' foi removida e 'onLoginSuccess' foi adicionada
interface LoginScreenProps {
    onLoginSuccess: () => void;
}

// MODIFICADO: Renomeado de 'LoginWindow' para 'LoginScreen'
const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
    const [language, setLanguage] = useState<Language>('en');
    const [lines, setLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [showButtons, setShowButtons] = useState(false);
    const [isSkipped, setIsSkipped] = useState(false);
    
    // REMOVIDO: Toda a lógica de arrastar a janela (position, isDragging, dragOffset, windowRef, handleMouseDown, etc.)

    const welcomeMessages = translations[language].WELCOME_MESSAGES;

    useEffect(() => {
        setLines([]);
        setCurrentLineIndex(0);
        setCurrentText('');
        setShowButtons(false);
        setIsSkipped(false);
    }, [language]);
    
    // REMOVIDO: useEffect para centralizar a janela
    
    const handleSkip = () => {
        setIsSkipped(true);
        setLines(welcomeMessages);
        setCurrentLineIndex(welcomeMessages.length);
        setCurrentText('');
        setShowButtons(true);
    };

    useEffect(() => {
        if (isSkipped || currentLineIndex >= welcomeMessages.length) {
            if (currentLineIndex >= welcomeMessages.length) {
                 setShowButtons(true);
            }
            return;
        }

        const currentLine = welcomeMessages[currentLineIndex];
        if (currentText.length < currentLine.length) {
            const timeoutId = setTimeout(() => {
                setCurrentText(currentLine.substring(0, currentText.length + 1));
            }, TYPING_SPEED_MS);
            return () => clearTimeout(timeoutId);
        } else {
             const timeoutId = setTimeout(() => {
                setLines(prev => [...prev, currentText]);
                setCurrentText('');
                setCurrentLineIndex(prev => prev + 1);
            }, LINE_DELAY_MS);
            return () => clearTimeout(timeoutId);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentLineIndex, currentText, welcomeMessages, isSkipped]);
    
    // REMOVIDO: handleMouseDown e o useEffect de mousemove/mouseup

    return (
        // REMOVIDO: O backdrop (fundo embaçado) não é mais necessário
        // MODIFICADO: O 'div' principal agora é a tela inteira, não um modal.
        // Classes de 'fixed', 'z-20', 'top', 'left' e 'shadow' removidas.
        // Adicionado 'min-h-screen' para ocupar a tela inteira.
        <div
            // ref={windowRef} // Removido
            className="w-full min-h-screen bg-[#010409] border-2 border-gray-700 flex flex-col overflow-hidden"
        >
            <Header 
                language={language}
                onLanguageChange={setLanguage}
                headerText={translations[language].CMD_HEADER_TEXT}
                // REMOVIDO: onMouseDown e onClose
            />
            <div className="flex-grow p-4 md:p-6 overflow-y-auto relative">
                {lines.map((line, index) => (
                    <p key={index} className="text-green-400"><span className="text-gray-500 mr-2">{'>'}</span>{line}</p>
                ))}
                {currentLineIndex < welcomeMessages.length && !isSkipped && (
                     <p className="text-green-400"><span className="text-gray-500 mr-2">{'>'}</span>{currentText}<Cursor /></p>
                )}
                
                 {!showButtons && !isSkipped && (
                    <button
                        onClick={handleSkip}
                        className="absolute bottom-4 right-4 text-green-400 bg-gray-900/80 px-3 py-1 rounded border border-green-700/50 hover:bg-green-500 hover:text-black transition-colors text-xs font-bold"
                        aria-label={translations[language].skip}
                    >
                        {translations[language].skip}
                    </button>
                )}

                {showButtons && (
                    <div className="mt-4">
                        <p className="text-green-400"><span className="text-gray-500 mr-2">{PROMPT_TEXT}</span><Cursor /></p>
                        <div className="mt-6 animate-fade-in flex flex-col sm:flex-row gap-4">
                            <LoginButton
                                icon={<GithubIcon />}
                                text={translations[language].loginGithub}
                                // MODIFICADO: Chama onLoginSuccess em vez de alert
                                onClick={onLoginSuccess}
                            />
                            <LoginButton
                                icon={<UserIcon />}
                                text={translations[language].loginGuest}
                                // MODIFICADO: Chama onLoginSuccess em vez de alert
                                onClick={onLoginSuccess}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// MODIFICADO: Props do Header atualizadas
interface HeaderProps {
    language: Language;
    onLanguageChange: (lang: Language) => void;
    headerText: string;
    // REMOVIDO: onMouseDown e onClose
}

// MODIFICADO: Componente Header simplificado
const Header: React.FC<HeaderProps> = ({ language, onLanguageChange, headerText }) => (
    <div 
        className="bg-gray-800/50 border-b-2 border-gray-700 p-2 flex items-center text-gray-300 relative"
        // REMOVIDO: onMouseDown e cursor-move
    >
        {/* REMOVIDO: Botões de fechar/minimizar/maximizar */}
        
        <div className="text-sm flex-grow text-center flex items-center justify-center pointer-events-none">
            <DevPethLogoIcon className="w-5 h-5 mr-2 text-green-400" />
            <span>{headerText}</span>
        </div>
        <div className="ml-auto text-sm z-10">
            <button 
                onClick={() => onLanguageChange('en')} 
                className={`px-2 py-1 rounded ${language === 'en' ? 'text-green-400 font-bold' : 'text-gray-500 hover:text-green-400'}`}
                aria-pressed={language === 'en'}
            >
                EN
            </button>
            <span className="text-gray-600">/</span>
            <button 
                onClick={() => onLanguageChange('pt-br')} 
                className={`px-2 py-1 rounded ${language === 'pt-br' ? 'text-green-400 font-bold' : 'text-gray-500 hover:text-green-400'}`}
                aria-pressed={language === 'pt-br'}
            >
                PT-BR
            </button>
        </div>
    </div>
);

const Cursor: React.FC = () => (
    <span className="bg-green-400 w-2.5 h-5 inline-block animate-blink ml-1"></span>
);

interface LoginButtonProps {
    icon: React.ReactNode;
    text: string;
    onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ icon, text, onClick }) => (
    <button
        onClick={onClick}
        className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 bg-gray-900/50 border-2 border-green-500 text-green-400 rounded-md hover:bg-green-500 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-400"
    >
        {icon}
        <span className="font-bold">{text}</span>
    </button>
);


// --- STYLES & EXPORT ---

const StyleInjector: React.FC = () => (
  <style>{`
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .animate-blink {
      animation: blink 1s step-end infinite;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `}</style>
);

// MODIFICADO: Agora 'AppWithStyles' renderiza o novo componente 'App'
const AppWithStyles: React.FC = () => (
    <>
        <StyleInjector />
        <App />
    </>
);

export default AppWithStyles;
