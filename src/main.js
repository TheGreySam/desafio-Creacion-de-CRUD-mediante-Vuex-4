import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.js";

import Firebase from 'firebase';
//import { initializeApp } from 'firebase/app';
//import { firebaseConfig } from "../firebase-config";


Firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FIREBASE_APPID
});

//process.env.FIREBASE_APIKEY;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  
  render: (h) => h(App),
}).$mount("#app");
