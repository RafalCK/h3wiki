import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Towns from "../views/Towns.vue";
import Units from "../views/Units.vue";
import frame from "../layouts/Frame.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			layout: frame
		}
	},
	{
		path: "/towns",
		name: "Towns",
		component: Towns,
		meta: {
			layout: frame
		}
	},
	{
		path: "/units/:name",
		name: "Units",
		component: Units,
	}
  ]
})

export default router
