import comp from "C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/posts/frontend/post2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/frontend/post2.html\",\"title\":\"My Second Post\",\"lang\":\"en\",\"frontmatter\":{\"title\":\"My Second Post\",\"date\":\"2024-11-10T00:00:00.000Z\",\"lang\":\"en\"},\"headers\":[{\"level\":2,\"title\":\"Section 1\",\"slug\":\"section-1\",\"link\":\"#section-1\",\"children\":[]},{\"level\":2,\"title\":\"Section 2\",\"slug\":\"section-2\",\"link\":\"#section-2\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/frontend/post2.md\"}")
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
