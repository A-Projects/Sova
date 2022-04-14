import MyButton from './components/MyButton.vue';
import InputText from './components/InputText.vue'
import InputTextarea from './components/InputTextarea.vue'

//import 'bootstrap-icons/font/bootstrap-icons.css';
//import 'bootstrap/dist/css/bootstrap.min.css'

const SilkShip = {
  install (Vue) {
    Vue.component('MyButton', MyButton);
    Vue.component('InputText', InputText);
    Vue.component('InputTextarea', InputTextarea);
  }
}

export default SilkShip