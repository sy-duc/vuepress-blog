export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Language\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Project\",\"link\":\"/project/\"},{\"text\":\"Blog\",\"link\":\"/blog/\"},{\"text\":\"About\",\"link\":\"/about/\"}],\"sidebar\":\"false\"},\"/vi/\":{\"selectLanguageName\":\"Tiếng Việt\",\"selectLanguageText\":\"Ngôn Ngữ\",\"navbar\":[{\"text\":\"Trang Chủ\",\"link\":\"/vi/\"},{\"text\":\"Dự Án\",\"link\":\"/vi/project/\"},{\"text\":\"Blog\",\"link\":\"/vi/blog/\"},{\"text\":\"Về Tôi\",\"link\":\"/vi/about/\"}],\"sidebar\":\"false\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
