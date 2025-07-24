import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/algo-notes/", // change to your repo name
	plugins: [react()],
});
