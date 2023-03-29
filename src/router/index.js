import { createRouter, createWebHistory } from "vue-router";
import frame from "../layouts/Frame.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	linkActiveClass: "menu__item-active",
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("../views/Home.vue"),
			meta: {
				layout: frame,
			},
		},
		{
			path: "/towns",
			name: "Towns",
			component: () => import("../views/Towns.vue"),
			meta: {
				layout: frame,
			},
		},
		{
			path: "/units/:name",
			name: "Units",
			component: () => import("../views/Units.vue"),
		},
		{
			path: "/magics",
			name: "Magics",
			component: () => import("../views/Magics.vue"),
			meta: {
				layout: frame,
			},
		},
		{
			path: "/spells/:name",
			name: "Spells",
			component: () => import("../views/Spells.vue"),
		},
		{
			path: "/locations",
			name: "Locations",
			component: () => import("../views/Locations.vue"),
			meta: {
				layout: frame,
			},
		},
		{
			path: "/locations/:name",
			name: "bank",
			component: () => import("../views/Bank.vue"),
			meta: {
				layout: frame,
			},
		},
		{
			path: "/artifacts",
			name: "Equipment",
			component: () => import("../views/Equipment.vue"),
			meta: {
				layout: frame,
			},
		},
		{
			path: "/artifacts/:type",
			name: "Artifacts",
			component: () => import("../views/Artifacts.vue"),
		},
	],
});

export default router;
