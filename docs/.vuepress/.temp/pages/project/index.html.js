import comp from "C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/project/index.html.vue"
const data = JSON.parse("{\"path\":\"/project/\",\"title\":\"Project\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Project\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"project/README.md\"}")
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
