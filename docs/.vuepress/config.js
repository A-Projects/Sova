const { path } = require('@vuepress/utils')

module.exports = {
  // site config
  lang: 'ru-RU',
  title: 'Сови',
  description: 'Компоненты Vue.js на основе стилей Bootstrap',
  
  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/owl.png',
    sidebar: [
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/input-text.md',
          '/components/input-textarea.md'
        ]
      }
    ]
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        components: {
          InputText: path.resolve(__dirname, '../../src/components/InputText.vue'),
        },
      },
    ],
  ],   
}