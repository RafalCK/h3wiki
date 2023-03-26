import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
	base: "/h3wiki/",
	plugins: [vue()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/assets/scss/global.scss" as *;`,
			},
		},
	},
	build: {
		chunkSizeWarningLimit: 1600,
	},
});
