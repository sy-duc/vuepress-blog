import comp from "C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/vi/index.html.vue"
const data = JSON.parse("{\"path\":\"/vi/\",\"title\":\"Trang chủ\",\"lang\":\"vi-VN\",\"frontmatter\":{\"home\":true,\"title\":\"Trang chủ\",\"footer\":\"Made with VuePress ❤️ by Duc. Ho Sy\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"vi/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
