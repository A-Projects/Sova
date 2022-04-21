const { path } = require('@vuepress/utils')

const pluginOrTheme = {
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'),
}

module.exports = {
  // site config
  lang: 'ru-RU',
  title: 'Сови',
  description: 'Компоненты Vue.js на основе стилей Bootstrap',
  
  // https://v2.vuepress.vuejs.org/reference/default-theme/config.html
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/owl.png',
    sidebar: [
      {
        text: 'Компоненты',
        collapsable: true,
        children: [
          '/components/s-accordion.md',
          '/components/s-link.md',
          '/components/s-button.md',
          '/components/s-button-group.md',
        ]
      },
      {
        text: 'Ссылки',
        collapsable: true,
        children: [
          {
            text: 'Bootstrap',
            link: 'https://getbootstrap.com/'
          }
        ]
      }
    ],
    contributorsText: 'Участники',
    lastUpdatedText: 'Последнее обновление'
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        components: {
          SAccordion: path.resolve(__dirname, '../../src/components/SAccordion.vue'),
          SAccordionBody: path.resolve(__dirname, '../../src/components/SAccordionBody.vue'),
          SAccordionButton: path.resolve(__dirname, '../../src/components/SAccordionButton.vue'),
          SAccordionCollapse: path.resolve(__dirname, '../../src/components/SAccordionCollapse.vue'),
          SAccordionHeader: path.resolve(__dirname, '../../src/components/SAccordionHeader.vue'),
          SAccordionItem: path.resolve(__dirname, '../../src/components/SAccordionItem.vue'),
          SLink: path.resolve(__dirname, '../../src/components/SLink.vue'),
          SButton: path.resolve(__dirname, '../../src/components/SButton.vue'),
          SButtonGroup: path.resolve(__dirname, '../../src/components/SButtonGroup.vue'),
        },
      },
    ],
  ],   
}