const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
//const { webpackBundler } = require('@vuepress/bundler-webpack')

module.exports = {
    // site config
    lang: 'ru-RU',
    title: 'Сова',
    description: 'Компоненты Vue.js на основе Bootstrap',
    /*
      bundler: webpackBundler({
        chainWebpack: config => {
          config.resolve.extensions.add('.js')
          config.resolve.extensions.add('.vue')
          config.resolve.extensions.add('.json')
        },
        postcss: {},
        vue: {},
      }),
    */
    // https://v2.vuepress.vuejs.org/reference/default-theme/config.html
    theme: defaultTheme({
        logo: '/sovi.png',
        sidebar: [
            {
                text: 'Разметка',
                collapsable: true,
                children: [
                    '/layout/grid.md',
                ]
            },
            {
                text: 'Компоненты',
                collapsable: true,
                children: [
                    '/components/s-accordion.md',
                    '/components/s-alert.md',
                    '/components/s-badge.md',
                    '/components/s-breadcrumb.md',
                    '/components/s-btn.md',
                    '/components/s-btn-group.md',
                    '/components/s-card.md',
                    '/components/s-btn-close.md',
                    '/components/s-collapse.md',
                    '/components/s-callout.md',
                    '/components/s-dropdown.md',
                    '/components/s-figure.md',
                    '/components/s-icon.md',
                    '/components/s-img.md',
                    '/components/s-list-group.md',
                    '/components/s-link.md',
                    '/components/s-modal.md',
                    '/components/s-nav-tabs.md',
                    '/components/s-navbar.md',
                    '/components/s-offcanvas.md',
                    '/components/s-pagination.md',
                    '/components/s-progress.md',
                    '/components/s-spinner.md',
                    '/components/s-table.md',
                    '/components/s-toast.md',
                ]
            },
            {
                text: 'Формы',
                collapsable: true,
                children: [
                    '/forms/s-check.md',
                    '/forms/s-input.md',
                    '/forms/s-range.md',
                    '/forms/s-select.md',
                    '/forms/s-input-group.md'
                ]
            },
            {
                text: 'Директивы',
                collapsable: true,
                children: [
                    '/components/s-placeholder.md',
                    '/components/s-popover.md',
                    '/components/s-tooltip.md',
                ]
            },
            {
                text: 'Фрагменты',
                collapsable: true,
                children: [
                    '/fragments/header.md',
                    '/fragments/footer.md',
                    //'/fragments/sidebar.md',
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
        backToTopPlugin(),
        registerComponentsPlugin({
            components: {
                // Разметка
                SCol: path.resolve(__dirname, '../../src/components/Grid/SCol.vue'),
                SRow: path.resolve(__dirname, '../../src/components/Grid/SRow.vue'),
                SContainer: path.resolve(__dirname, '../../src/components/Grid/SContainer.vue'),
                // Компоненты
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
                SDivider: path.resolve(__dirname, '../../src/components/Divider/SDivider.vue'),
                SDropdown: path.resolve(__dirname, '../../src/components/SDropdown.vue'),
                SDropdownDivider: path.resolve(__dirname, '../../src/components/SDropdownDivider.vue'),
                SDropdownHeader: path.resolve(__dirname, '../../src/components/SDropdownHeader.vue'),
                SDropdownItem: path.resolve(__dirname, '../../src/components/SDropdownItem.vue'),
                SDropdownMenu: path.resolve(__dirname, '../../src/components/SDropdownMenu.vue'),
                SDropdownText: path.resolve(__dirname, '../../src/components/SDropdownText.vue'),
                SDropdownToggle: path.resolve(__dirname, '../../src/components/SDropdownToggle.vue'),
                SFigure: path.resolve(__dirname, '../../src/components/Figure/SFigure.vue'),
                SFigureCaption: path.resolve(__dirname, '../../src/components/Figure/SFigureCaption.vue'),
                SFigureImg: path.resolve(__dirname, '../../src/components/Figure/SFigureImg.vue'),
                SIcon: path.resolve(__dirname, '../../src/components/SIcon.vue'),
                SImg: path.resolve(__dirname, '../../src/components/Img/SImg.vue'),
                SLink: path.resolve(__dirname, '../../src/components/SLink.vue'),
                SBtn: path.resolve(__dirname, '../../src/components/SBtn.vue'),
                SBtnGroup: path.resolve(__dirname, '../../src/components/SBtnGroup.vue'),
                SBtnClose: path.resolve(__dirname, '../../src/components/SBtnClose.vue'),
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
                SCallout: path.resolve(__dirname, '../../src/components/Callout/SCallout.vue'),
                STable: path.resolve(__dirname, '../../src/components/Table/STable.vue'),
                STableBody: path.resolve(__dirname, '../../src/components/Table/STableBody.vue'),
                STableCaption: path.resolve(__dirname, '../../src/components/Table/STableCaption.vue'),
                STableDataCell: path.resolve(__dirname, '../../src/components/Table/STableDataCell.vue'),
                STableFoot: path.resolve(__dirname, '../../src/components/Table/STableFoot.vue'),
                STableHead: path.resolve(__dirname, '../../src/components/Table/STableHead.vue'),
                STableHeaderCell: path.resolve(__dirname, '../../src/components/Table/STableHeaderCell.vue'),
                STableRow: path.resolve(__dirname, '../../src/components/Table/STableRow.vue'),
                SToast: path.resolve(__dirname, '../../src/components/Toast/SToast.vue'),
                SToastBody: path.resolve(__dirname, '../../src/components/Toast/SToastBody.vue'),
                SToastClose: path.resolve(__dirname, '../../src/components/Toast/SToastClose.vue'),
                SToastContainer: path.resolve(__dirname, '../../src/components/Toast/SToastContainer.vue'),
                SToastHeader: path.resolve(__dirname, '../../src/components/Toast/SToastHeader.vue'),
                // Формы
                SForm: path.resolve(__dirname, '../../src/components/Form/SForm.vue'),
                SFormBtnCheck: path.resolve(__dirname, '../../src/components/Form/SFormBtnCheck.vue'),
                SFormCheck: path.resolve(__dirname, '../../src/components/Form/SFormCheck.vue'),
                SFormFeedback: path.resolve(__dirname, '../../src/components/Form/SFormFeedback.vue'),
                SFormFloating: path.resolve(__dirname, '../../src/components/Form/SFormFloating.vue'),
                SFormLabel: path.resolve(__dirname, '../../src/components/Form/SFormLabel.vue'),
                SFormRange: path.resolve(__dirname, '../../src/components/Form/SFormRange.vue'),
                SFormSwitch: path.resolve(__dirname, '../../src/components/Form/SFormSwitch.vue'),
                SFormText: path.resolve(__dirname, '../../src/components/Form/SFormText.vue'),
                SFormColor: path.resolve(__dirname, '../../src/components/Form/SFormColor.vue'),
                SFormInput: path.resolve(__dirname, '../../src/components/Form/SFormInput.vue'),
                SFormFile: path.resolve(__dirname, '../../src/components/Form/SFormFile.vue'),
                SFormNumber: path.resolve(__dirname, '../../src/components/Form/SFormNumber.vue'),
                SFormTextarea: path.resolve(__dirname, '../../src/components/Form/SFormTextarea.vue'),
                SFormSelect: path.resolve(__dirname, '../../src/components/Form/SFormSelect.vue'),
                SInputGroup: path.resolve(__dirname, '../../src/components/Form/SInputGroup.vue'),
                SInputGroupText: path.resolve(__dirname, '../../src/components/Form/SInputGroupText.vue'),
                // Фрагменты
                SHeader: path.resolve(__dirname, '../../src/fragments/Header/SHeader.vue'),
                SHeaderBrand: path.resolve(__dirname, '../../src/fragments/Header/SHeaderBrand.vue'),
                SHeaderTitle: path.resolve(__dirname, '../../src/fragments/Header/SHeaderTitle.vue'),
                SHeaderToggler: path.resolve(__dirname, '../../src/fragments/Header/SHeaderToggler.vue'),
                SFooter: path.resolve(__dirname, '../../src/fragments/Footer/SFooter.vue'),
                SFooterBrand: path.resolve(__dirname, '../../src/fragments/Footer/SFooterBrand.vue')
            }
        }),
    ],
}