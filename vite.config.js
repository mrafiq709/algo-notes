import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	base: "/algo-notes/", // change to your repo name
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"), // Alias @ → src
		},
	},
	server: {
		port: 3020,
	},
});
