import SButton from './components/SButton.vue';

//import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Sovi = {
  install (Vue) {
    Vue.component('SButton', SButton);
  }
}

export default Sovi