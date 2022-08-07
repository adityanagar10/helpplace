// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/shadesOfPurple');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HelpPlace',
  tagline: 'Start learning today!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'content-docs',
      ({
        id:'features',
        path:'features',
        routeBasePath:'/features',
        sidebarPath:require.resolve('./emptly-sidebar.js')
      })
    ],
    [
      'content-docs',
      ({
        id:'learn',
        path:'learn',
        routeBasePath:'/learn',
        sidebarPath:require.resolve('./sidebars.js')
      })
    ],
    [
      'content-docs',
      ({
        id:'me',
        path:'me',
        routeBasePath:'/',
        sidebarPath:require.resolve('./emptly-sidebar.js')
      })
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'support_us',
        content:
          'TESTING',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to:'/learn/intro',
            position: 'right',
            label: 'Learn',
          },
          {
            to:'/features/coming-soon',
            position: 'right',
            label: 'Roadmap',
          },
          // {
          //   to:'/about-me',
          //   position: 'right',
          //   label: 'About Us',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Start Learning',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: '/',
              },
            ],
          },
          {
            title: 'My Socials',
            items: [
              {
                label: 'My Twitter',
                href: 'https://twitter.com/adityanagar_',
              },
              {
                label: 'My GitHub',
                href: 'https://github.com/adityanagar10',
              },
            ],
          },
        ],
        copyright: `Made with 💖 by Aditya Nagar!`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
