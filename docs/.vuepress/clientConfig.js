import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, router, siteData }){
        app.config.unwrapInjectedRef = true
    },
    setup(){},
    rootComponents: [],
})