import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
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
		path: "/units",
		name: "Units",
		component: Units,
		meta: {
			layout: frame
		}
	}
  ]
})

export default router
