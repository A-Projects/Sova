import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-icons/font/bootstrap-icons.css';
import SLink from "./components/SLink";
import SBtn from "./components/SBtn.vue";
import SBtnGroup from "./components/SBtnGroup";

const Sovi = {
  install (Vue) {
    Vue.component('SLink', SLink);
    Vue.component('SBtn', SBtn);
    Vue.component('SBtnGroup', SBtnGroup);
  }
}

export default Sovi