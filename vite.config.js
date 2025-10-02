import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Components-Playground/", // ضع هنا اسم الريبو بالظبط
  plugins: [tailwindcss()],
});
