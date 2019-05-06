import Vue from "vue";
import Router from "vue-router";
import edpList from "./components/edp-list.vue";
import edpColorPicker from "./components/edp-colorPicker.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "edpList",
      component: edpList
    },
    {
      path: "/edpColorPicker",
      name: "edpColorPicker",
      component: edpColorPicker
    }
  ]
});
