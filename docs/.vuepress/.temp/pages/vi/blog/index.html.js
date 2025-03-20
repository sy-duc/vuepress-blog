import comp from "C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/vi/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/vi/blog/\",\"title\":\"Blog\",\"lang\":\"vi-VN\",\"frontmatter\":{\"title\":\"Blog\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"vi/blog/README.md\"}")
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
