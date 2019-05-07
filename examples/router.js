import Vue from "vue";
import Router from "vue-router";
import edpColorPicker from "./components/edp-colorPicker.vue";
import edpList from "./components/edp-list.vue";
import edpSwitch from "./components/edp-switch.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "edpColorPicker",
      component: edpColorPicker
    },
    {
      path: "/edpList",
      name: "edpList",
      component: edpList
    },
    {
      path: "/edpSwitch",
      name: "edpSwitch",
      component: edpSwitch
    }
  ]
});
