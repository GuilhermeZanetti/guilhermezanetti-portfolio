# Guilherme Zanetti - Portfolio

Portfolio pessoal construído com **Astro 4** e **Tailwind CSS**, focado em performance máxima e SEO otimizado.

## 🚀 Stack Tecnológica

- **Framework:** Astro 4+
- **Estilização:** Tailwind CSS
- **Fonte:** Inter (via @fontsource/inter)
- **Ícones:** Lucide React
- **Otimizações:** View Transitions, Image Optimization

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🎨 Características

- ✅ **100% SEO Otimizado** - Meta tags completas (Open Graph, Twitter Cards)
- ✅ **Performance Máxima** - Otimização automática de imagens via astro:assets
- ✅ **Dark Mode Profissional** - Tema escuro com paleta slate
- ✅ **Bento Grid Layout** - Design moderno para exibição de projetos
- ✅ **View Transitions** - Navegação suave entre páginas
- ✅ **Animações CSS Nativas** - Sem dependências de JavaScript pesadas
- ✅ **Responsivo** - Mobile-first design

## 📂 Estrutura do Projeto

```
/
├── src/
│   ├── components/
│   │   └── ProjectCard.astro
│   ├── data/
│   │   └── projects.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── public/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Customização

### Adicionar Novos Projetos

Edite o arquivo `src/data/projects.ts` para adicionar, remover ou modificar projetos:

```typescript
export const projects: Project[] = [
  {
    title: 'Nome do Projeto',
    stack: 'Tecnologias usadas',
    tag: 'Categoria',
    description: 'Descrição breve',
    year: 2024,
    gradient: 'from-color-500 to-color-600',
  },
  // ...
];
```

### Modificar Cores do Tema

Edite `tailwind.config.mjs` para personalizar a paleta de cores.

## 📄 Licença

© 2026 Guilherme Zanetti. Todos os direitos reservados.
