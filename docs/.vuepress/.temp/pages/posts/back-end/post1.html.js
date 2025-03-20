import comp from "C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/posts/back-end/post1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/back-end/post1.html\",\"title\":\"My Third Post\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"My Third Post\",\"summary\":\"This is the content of my third post. It's going to be a long article, so I can use markdown syntax to structure it neatly.\",\"date\":\"2024-11-13\",\"image\":\"/images/user-images/user-3.jpg\",\"category\":\"BACK-END\"},\"headers\":[{\"level\":2,\"title\":\"Section 1\",\"slug\":\"section-1\",\"link\":\"#section-1\",\"children\":[]},{\"level\":2,\"title\":\"Section 2\",\"slug\":\"section-2\",\"link\":\"#section-2\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/back-end/post1.md\"}")
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
