import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { STooltip } from '../../src/directives/STooltip.js';


import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, router, siteData }){
        app.config.unwrapInjectedRef = true;
        app.directive('s-tooltip', STooltip);
    },
    setup(){},
    rootComponents: [],
})