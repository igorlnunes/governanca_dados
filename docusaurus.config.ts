import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Governança de Dados',
  tagline: 'Base de conhecimento estruturada para estudos e referências práticas',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://example.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Governança de Dados',
      logo: {
        alt: 'Logo Governança de Dados',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'governancaSidebar',
          position: 'left',
          label: 'Base de Conhecimento',
        },
        {
          to: '/docs/modelo-de-nota',
          label: 'Template de Nota',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Módulos Principais',
          items: [
            {
              label: 'Introdução',
              to: '/docs/intro',
            },
            {
              label: 'Fundamentos',
              to: '/docs/category/01-fundamentos',
            },
            {
              label: 'Qualidade de Dados',
              to: '/docs/category/03-qualidade-de-dados',
            },
          ],
        },
        {
          title: 'Prática e Referência',
          items: [
            {
              label: 'Segurança e LGPD',
              to: '/docs/category/05-seguranca-e-privacidade',
            },
            {
              label: 'Ferramentas e Ecossistema',
              to: '/docs/category/07-ferramentas-e-ecossistema',
            },
            {
              label: 'Template de Nota',
              to: '/docs/modelo-de-nota',
            },
          ],
        },
      ],
      copyright: `Base de Estudos em Governança de Dados • ${new Date().getFullYear()} • Feito com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
