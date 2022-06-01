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
          '/components/s-button.md',
          '/components/s-button-group.md',
          '/components/s-card.md',
          '/components/s-close-button.md',
          '/components/s-collapse.md',
          '/components/s-dropdown.md',
          '/components/s-list-group.md',
          '/components/s-link.md',
          '/components/s-modal.md',
          '/components/s-nav-tabs.md',
          '/components/s-navbar.md',
          '/components/s-offcanvas.md',
          '/components/s-pagination.md',
          '/components/s-placeholder.md',
          '/components/s-popover.md',
          '/components/s-progress.md',
          '/components/s-spinner.md',
          '/components/s-toast.md',
          '/components/s-tooltip.md',
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
        SCollapse: path.resolve(__dirname, '../../src/components/SCollapse.vue'),
        SListGroup: path.resolve(__dirname, '../../src/components/SListGroup.vue'),
        SListGroupItem: path.resolve(__dirname, '../../src/components/SListGroupItem.vue'),
        SDropdown: path.resolve(__dirname, '../../src/components/SDropdown.vue'),
        SDropdownDivider: path.resolve(__dirname, '../../src/components/SDropdownDivider.vue'),
        SDropdownHeader: path.resolve(__dirname, '../../src/components/SDropdownHeader.vue'),
        SDropdownItem: path.resolve(__dirname, '../../src/components/SDropdownItem.vue'),
        SDropdownMenu: path.resolve(__dirname, '../../src/components/SDropdownMenu.vue'),
        SDropdownText: path.resolve(__dirname, '../../src/components/SDropdownText.vue'),
        SDropdownToggle: path.resolve(__dirname, '../../src/components/SDropdownToggle.vue'),
        SIcon: path.resolve(__dirname, '../../src/components/SIcon.vue'),
        SLink: path.resolve(__dirname, '../../src/components/SLink.vue'),
        SButton: path.resolve(__dirname, '../../src/components/SButton.vue'),
        SButtonGroup: path.resolve(__dirname, '../../src/components/SButtonGroup.vue'),
        SCloseButton: path.resolve(__dirname, '../../src/components/SCloseButton.vue'),
        SModal: path.resolve(__dirname, '../../src/components/SModal/SModal.vue'),
        SModalBody: path.resolve(__dirname, '../../src/components/SModal/SModalBody.vue'),
        SModalFooter: path.resolve(__dirname, '../../src/components/SModal/SModalFooter.vue'),
        SModalHeader: path.resolve(__dirname, '../../src/components/SModal/SModalHeader.vue'),
        SModalTitle: path.resolve(__dirname, '../../src/components/SModal/SModalTitle.vue'),
        SNav: path.resolve(__dirname, '../../src/components/SNav/SNav.vue'),
        SNavItem: path.resolve(__dirname, '../../src/components/SNav/SNavItem.vue'),
        SNavLink: path.resolve(__dirname, '../../src/components/SNav/SNavLink.vue'),
        SNavTitle: path.resolve(__dirname, '../../src/components/SNav/SNavTitle.vue'),
        STabContent: path.resolve(__dirname, '../../src/components/STab/STabContent.vue'),
        STabPane: path.resolve(__dirname, '../../src/components/STab/STabPane.vue'),
        SNavbar: path.resolve(__dirname, '../../src/components/SNavbar/SNavbar.vue'),
        SNavbarBrand: path.resolve(__dirname, '../../src/components/SNavbar/SNavbarBrand.vue'),
        SNavbarNav: path.resolve(__dirname, '../../src/components/SNavbar/SNavbarNav.vue'),
        SNavbarText: path.resolve(__dirname, '../../src/components/SNavbar/SNavbarText.vue'),
        SNavbarToggler: path.resolve(__dirname, '../../src/components/SNavbar/SNavbarToggler.vue'),
        SOffcanvas: path.resolve(__dirname, '../../src/components/SOffcanvas/SOffcanvas.vue'),
        SOffcanvasBody: path.resolve(__dirname, '../../src/components/SOffcanvas/SOffcanvasBody.vue'),
        SOffcanvasHeader: path.resolve(__dirname, '../../src/components/SOffcanvas/SOffcanvasHeader.vue'),
        SOffcanvasTitle: path.resolve(__dirname, '../../src/components/SOffcanvas/SOffcanvasTitle.vue'),
        SPagination: path.resolve(__dirname, '../../src/components/SPagination/SPagination.vue'),
        SPaginationItem: path.resolve(__dirname, '../../src/components/SPagination/SPaginationItem.vue'),
        SPaginationLink: path.resolve(__dirname, '../../src/components/SPagination/SPaginationLink.vue'),
        SProgressBar: path.resolve(__dirname, '../../src/components/SProgressBar.vue'),
        SProgress: path.resolve(__dirname, '../../src/components/SProgress.vue'),
        SSpinner: path.resolve(__dirname, '../../src/components/SSpinner.vue'),
        SContainer: path.resolve(__dirname, '../../src/layouts/SContainer.vue'),
        SToast: path.resolve(__dirname, '../../src/components/Toast/SToast.vue'),
        SToastBody: path.resolve(__dirname, '../../src/components/Toast/SToastBody.vue'),
        SToastClose: path.resolve(__dirname, '../../src/components/Toast/SToastClose.vue'),
        SToastContainer: path.resolve(__dirname, '../../src/components/Toast/SToastContainer.vue'),
        SToastHeader: path.resolve(__dirname, '../../src/components/Toast/SToastHeader.vue'),
      }
    }),
  ],
}