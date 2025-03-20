import comp from "C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/blog.html.vue"
const data = JSON.parse("{\"path\":\"/blog.html\",\"title\":\"Blog\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Blog\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog.md\"}")
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
