import comp from "C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/vi/project/index.html.vue"
const data = JSON.parse("{\"path\":\"/vi/project/\",\"title\":\"Dự án\",\"lang\":\"vi-VN\",\"frontmatter\":{\"title\":\"Dự án\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"vi/project/README.md\"}")
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
