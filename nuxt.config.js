export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Deputy Code Challenge",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/reset.css", "~/assets/css/base.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/i18n"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          good_company: "You're in good company",
          filter_by: "Filter By",
          close: "Close",
          industries: "Industries",
          location: "Location",
          company_size: "Company Size",
          use_case: "Use Case",
          read_more: "Read More",
          min_read: "{count} Min Read",
        },
      },
    },
  },
  router: {
    extendRoutes: (routes, resolve) => {
      routes.push({
        name: "page",
        path: "/page/:id",
        component: resolve(__dirname, "pages/index.vue"),
      });
    },
  },
};
