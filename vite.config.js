import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// xz
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
});
