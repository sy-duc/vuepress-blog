import { defineClientConfig } from "@vuepress/client";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import "./styles/index.css";
import "./styles/style.css";
import "./styles/animate.css";
import "./styles/namari-color.css";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as CustomComponents from "./components";

export default defineClientConfig({
  enhance({ app }) {
    const vuetify = createVuetify({
      components,
      directives,
    });

    // Sử dụng Vuetify cho ứng dụng
    app.use(vuetify);

    // Đăng ký tất cả các component từ CustomComponents
    Object.keys(CustomComponents).forEach((componentName) => {
      app.component(componentName, CustomComponents[componentName]);
    });
  },
});
