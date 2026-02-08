export interface Project {
    title: string;
    stack: string;
    tag: string;
    description: string;
    year?: number;
    gradient: string;
    link?: string;
    slug?: string;
}

export const projects: Project[] = [
    {
        title: 'DataSystemAI - API Gateway',
        stack: 'Python, FastAPI, Docker, Redis, Celery, LangChain',
        tag: 'API Gateway',
        description: 'API Gateway de Inteligencia Artificial Assincrono Muilti-Agente, capaz de processar requisições de forma assíncrona e distribuída, com suporte a múltiplos modelos de IA.',
        year: 2026,
        gradient: 'from-violet-500 to-indigo-600',
        slug: 'data-system-ai',
    },
    {
        title: 'Chatbot Text-To-SQL',
        stack: 'Python, SQL Server',
        tag: 'AI / SQL',
        description: 'Chatbot que transforma linguagem natural em queries SQL.',
        year: 2026,
        gradient: 'from-violet-500 to-indigo-600',
    },
    {
        title: 'BBBResumeAI',
        stack: 'Python, Generative AI',
        tag: 'AI Agent',
        description: 'Bot que usa IA para monitorar e resumir notícias do Big Brother Brasil em tempo real.',
        year: 2026,
        gradient: 'from-pink-500 to-rose-600',
        link: 'https://bbbresumeai.com.br',
    },
    {
        title: 'Insights com IA em Relatórios',
        stack: 'Python, Generative AI',
        tag: 'AI Agent',
        description: 'Robô que usa IA para gerar insights em relatórios internos.',
        year: 2026,
        gradient: 'from-green-500 to-emerald-600',
    },
    {
        title: 'Code Judge - API de Avaliação de Código',
        stack: 'Python, Docker',
        tag: 'API',
        description: 'API para avaliação de código em Python usando os compiladores nativos de cada linguagem.',
        year: 2025,
        gradient: 'from-blue-500 to-indigo-600',
    },
    {
        title: 'Smart BBQ Controller (App)',
        stack: 'React Native',
        tag: 'Mobile / IoT',
        description: 'Aplicativo para controle de grill giratórios, levantamento de grelha e acendimento de churrasqueiras automatizadas.',
        year: 2024,
        gradient: 'from-indigo-500 to-purple-600',
        link: 'https://play.google.com/store/apps/details?id=com.poligrill&hl=ln&pli=1',
    },
    {
        title: 'Smart BBQ Server (IoT)',
        stack: 'C++, Arduino, ESP32',
        tag: 'Embedded / Bluetooth',
        description: 'Servidor BLE no ESP32. Gerencia a comunicação em tempo real entre hardware e app mobile.',
        year: 2024,
        gradient: 'from-cyan-500 to-blue-600',
    },
    {
        title: 'Calculadora de Magnitude Richter',
        stack: 'JavaScript, HTML',
        tag: 'Web Tool',
        description: 'Ferramenta para cálculo preciso de magnitude de terremotos (Escala Richter).',
        gradient: 'from-orange-500 to-red-600',
        link: 'https://calcularmagnitude.com.br',
    },
];
