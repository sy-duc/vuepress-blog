import comp from "C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/vi/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/vi/about/\",\"title\":\"Về tôi\",\"lang\":\"vi-VN\",\"frontmatter\":{\"title\":\"Về tôi\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"vi/about/README.md\"}")
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
