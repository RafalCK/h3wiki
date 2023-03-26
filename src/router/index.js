import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Towns from "../views/Towns.vue";
import Units from "../views/Units.vue";
import Magics from "../views/Magics.vue";
import Spells from "../views/Spells.vue";
import Locations from "../views/Locations.vue";
import Artifacts from "../views/Artifacts.vue";
import Equipment from "../views/Equipment.vue";
import Bank from "../views/Bank.vue";

import frame from "../layouts/Frame.vue";

const router = createRouter({
	history: createWebHistory("/h3wiki/"),
	base: "/h3wiki/",
	linkActiveClass: "menu__item-active",
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
			meta: {
				layout: frame,
			},
		},
		{
			path: "/towns",
			name: "Towns",
			component: Towns,
			meta: {
				layout: frame,
			},
		},
		{
			path: "/units/:name",
			name: "Units",
			component: Units,
		},
		{
			path: "/magics",
			name: "Magics",
			component: Magics,
			meta: {
				layout: frame,
			},
		},
		{
			path: "/spells/:name",
			name: "Spells",
			component: Spells,
		},
		{
			path: "/locations",
			name: "Locations",
			component: Locations,
			meta: {
				layout: frame,
			},
		},
		{
			path: "/locations/:name",
			name: "bank",
			component: Bank,
			meta: {
				layout: frame,
			},
		},
		{
			path: "/artifacts",
			name: "Equipment",
			component: Equipment,
			meta: {
				layout: frame,
			},
		},
		{
			path: "/artifacts/:type",
			name: "Artifacts",
			component: Artifacts,
		},
	],
});

export default router;
