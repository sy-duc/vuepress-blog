import comp from "C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/posts/front-end/post2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/front-end/post2.html\",\"title\":\"My Second Post\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"My Second Post\",\"summary\":\"This is the content of my second post. It's going to be a long article, so I can use markdown syntax to structure it neatly.\",\"date\":\"2024-11-11\",\"image\":\"/images/user-images/user-2.jpg\",\"category\":\"FRONT-END\"},\"headers\":[{\"level\":2,\"title\":\"Section 1\",\"slug\":\"section-1\",\"link\":\"#section-1\",\"children\":[]},{\"level\":2,\"title\":\"Section 2\",\"slug\":\"section-2\",\"link\":\"#section-2\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/front-end/post2.md\"}")
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
