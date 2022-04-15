import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-icons/font/bootstrap-icons.css';
import SLink from "./components/SLink";
import SButton from "./components/SButton.vue";
import SButtonGroup from "./components/SButtonGroup";

const Sovi = {
  install (Vue) {
    Vue.component('SLink', SLink);
    Vue.component('SButton', SButton);
    Vue.component('SButtonGroup', SButtonGroup);
  }
}

export default Sovi