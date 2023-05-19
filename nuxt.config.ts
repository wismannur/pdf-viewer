import { projectEnv, hostAPI } from "./config/index";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // START === setup environment variable https://nuxt.com/docs/guide/going-further/runtime-config
  runtimeConfig: ((): any => {
    return {
      // The private keys which are only available within server-side
      // apiSecret: "123",
      // Keys within public, will be also exposed to the client-side
      public: {
        projectEnv,
        hostAPI,
      },
    };
  })(),
  // END ===

  css: [
    "~/assets/css/tailwind.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
