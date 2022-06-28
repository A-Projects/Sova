//import 'bootstrap/dist/css/bootstrap.css'
//import './styles/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {SPlaceholder} from '../../src/directives/SPlaceholder.js'
import {SPopover} from '../../src/directives/SPopover';
import {STooltip} from '../../src/directives/STooltip.js'

import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, router, siteData }){
        app.config.unwrapInjectedRef = true
        app.directive('s-placeholder', SPlaceholder)
        app.directive('s-popover', SPopover)
        app.directive('s-tooltip', STooltip)
    },
    setup(){},
    rootComponents: [],
})