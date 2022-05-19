const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

module.exports = {
  // site config
  lang: 'ru-RU',
  title: 'Сови',
  description: 'Компоненты Vue.js на основе Bootstrap',

  // https://v2.vuepress.vuejs.org/reference/default-theme/config.html
  theme: defaultTheme({
    logo: '/sovi.png',
    sidebar: [
      {
        text: 'Компоненты',
        collapsable: true,
        children: [
          '/components/s-accordion.md',
          '/components/s-alert.md',
          '/components/s-badge.md',
          '/components/s-breadcrumb.md',
          '/components/s-card.md',
          '/components/s-list-group.md',
          '/components/s-dropdown.md',
          '/components/s-link.md',
          '/components/s-button.md',
          '/components/s-button-group.md',
          '/components/s-close-button.md',
          '/components/s-progress.md',
          '/components/s-spinner.md'
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
  }),

  clientConfigFile: path.resolve(__dirname, './clientConfig.js'),

  plugins: [
    registerComponentsPlugin({
      components: {
        SCloseButton: path.resolve(__dirname, '../../src/components/SCloseButton.vue'),
        SAccordion: path.resolve(__dirname, '../../src/components/SAccordion.vue'),
        SAccordionBody: path.resolve(__dirname, '../../src/components/SAccordionBody.vue'),
        SAccordionButton: path.resolve(__dirname, '../../src/components/SAccordionButton.vue'),
        SAccordionCollapse: path.resolve(__dirname, '../../src/components/SAccordionCollapse.vue'),
        SAccordionHeader: path.resolve(__dirname, '../../src/components/SAccordionHeader.vue'),
        SAccordionItem: path.resolve(__dirname, '../../src/components/SAccordionItem.vue'),
        SAlert: path.resolve(__dirname, '../../src/components/SAlert.vue'),
        SAlertHeading: path.resolve(__dirname, '../../src/components/SAlertHeading.vue'),
        SAlertLink: path.resolve(__dirname, '../../src/components/SAlertLink.vue'),
        SBadge: path.resolve(__dirname, '../../src/components/SBadge.vue'),
        SBreadcrumb: path.resolve(__dirname, '../../src/components/SBreadcrumb.vue'),
        SBreadcrumbItem: path.resolve(__dirname, '../../src/components/SBreadcrumbItem.vue'),
        SCard: path.resolve(__dirname, '../../src/components/SCard.vue'),
        SCardBody: path.resolve(__dirname, '../../src/components/SCardBody.vue'),
        SCardFooter: path.resolve(__dirname, '../../src/components/SCardFooter.vue'),
        SCardGroup: path.resolve(__dirname, '../../src/components/SCardGroup.vue'),
        SCardHeader: path.resolve(__dirname, '../../src/components/SCardHeader.vue'),
        SCardImage: path.resolve(__dirname, '../../src/components/SCardImage.vue'),
        SCardImageOverlay: path.resolve(__dirname, '../../src/components/SCardImageOverlay.vue'),
        SCardLink: path.resolve(__dirname, '../../src/components/SCardLink.vue'),
        SCardSubtitle: path.resolve(__dirname, '../../src/components/SCardSubtitle.vue'),
        SCardText: path.resolve(__dirname, '../../src/components/SCardText.vue'),
        SCardTitle: path.resolve(__dirname, '../../src/components/SCardTitle.vue'),
        SListGroup: path.resolve(__dirname, '../../src/components/SListGroup.vue'),
        SListGroupItem: path.resolve(__dirname, '../../src/components/SListGroupItem.vue'),
        SDropdown: path.resolve(__dirname, '../../src/components/SDropdown.vue'),
        SDropdownDivider: path.resolve(__dirname, '../../src/components/SDropdownDivider.vue'),
        SDropdownHeader: path.resolve(__dirname, '../../src/components/SDropdownHeader.vue'),
        SDropdownItem: path.resolve(__dirname, '../../src/components/SDropdownItem.vue'),
        SDropdownMenu: path.resolve(__dirname, '../../src/components/SDropdownMenu.vue'),
        SDropdownText: path.resolve(__dirname, '../../src/components/SDropdownText.vue'),
        SDropdownToggle: path.resolve(__dirname, '../../src/components/SDropdownButton.vue'),
        SIcon: path.resolve(__dirname, '../../src/components/SIcon.vue'),
        SLink: path.resolve(__dirname, '../../src/components/SLink.vue'),
        SButton: path.resolve(__dirname, '../../src/components/SButton.vue'),
        SButtonGroup: path.resolve(__dirname, '../../src/components/SButtonGroup.vue'),
        SCloseButton: path.resolve(__dirname, '../../src/components/SCloseButton.vue'),
        SSpinner: path.resolve(__dirname, '../../src/components/SSpinner.vue'),
        SProgressBar: path.resolve(__dirname, '../../src/components/SProgressBar.vue'),
        SProgress: path.resolve(__dirname, '../../src/components/SProgress.vue'),
      },
    }),
  ],
}