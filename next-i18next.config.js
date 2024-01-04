module.exports = {
  // debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    // defaultNS: "default",
    // localePath: "./public/locales",
    // localeExtension: "json",
    // localeStructure: "{{lng}}/{{ns}}",
    // /** To avoid issues when deploying to some paas (vercel...) */
    // localePath:
    //   typeof window === "undefined"
    //     ? require("path").resolve("./public/locales")
    //     : "/locales",
  },
};
