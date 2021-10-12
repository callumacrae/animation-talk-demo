import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const vueCodePlugin = {
  name: "code-plugin",
  transform(code, id) {
    if (!/vue&type=code/.test(id)) {
      return;
    }

    return `export default Comp => {
      Comp.code = \`${code}\`;
    }`;
  },
};

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          whitespace: "preserve",
        },
      },
    }),
    vueCodePlugin,
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
  },
});
