import Vue from 'vue'
import App from './App.vue'

// ** IMPORTANT !! LEAFLET IS NOW A PEER DEPENDECY, AND SHOULD BE INSTALLED SEPARATELY TO WORK! **
// Be sure to install leaflet together with vue2-leaflet (npm install leaflet vue2-leaflet --save)
// https://vue2-leaflet.netlify.app/quickstart/#npm
// To install Leaflet separately, try the following: 
// npm install --save-dev leaflet
// Or this one:
// npm install -D @types/leaflet
// ** IF AFTER THIS YOU STILL GOT AN ERROR SAYING THAT IT CANNOT FIND LEAFLET, BRING DOWN APP & CLOSE AND RE-OPEN YOUR FILES! **

import { Icon } from 'leaflet' // L-1. Import the Icon in main entry point - this is needed for resolving the marker issue
import 'leaflet/dist/leaflet.css' // L-2 Import the Leaflet CSS.

import './scss/main.scss'; // B-3. The modified CSS file is imported into the app here.


// L-3. Resolving an issue where markers don't appear. Without this, the map will be on top of all your other elements.
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
