export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"About"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/project/", { loader: () => import(/* webpackChunkName: "project_index.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/project/index.html.js"), meta: {"title":"Project"} }],
  ["/vi/", { loader: () => import(/* webpackChunkName: "vi_index.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/vi/index.html.js"), meta: {"title":"Trang chủ"} }],
  ["/posts/devops/post1.html", { loader: () => import(/* webpackChunkName: "posts_devops_post1.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/posts/devops/post1.html.js"), meta: {"title":"My 4 Post"} }],
  ["/posts/back-end/post1.html", { loader: () => import(/* webpackChunkName: "posts_back-end_post1.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/posts/back-end/post1.html.js"), meta: {"title":"My Third Post"} }],
  ["/posts/front-end/post1.html", { loader: () => import(/* webpackChunkName: "posts_front-end_post1.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/posts/front-end/post1.html.js"), meta: {"title":"My First Post"} }],
  ["/posts/front-end/post2.html", { loader: () => import(/* webpackChunkName: "posts_front-end_post2.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/posts/front-end/post2.html.js"), meta: {"title":"My Second Post"} }],
  ["/vi/about/", { loader: () => import(/* webpackChunkName: "vi_about_index.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/vi/about/index.html.js"), meta: {"title":"Về tôi"} }],
  ["/vi/blog/", { loader: () => import(/* webpackChunkName: "vi_blog_index.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/vi/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/vi/project/", { loader: () => import(/* webpackChunkName: "vi_project_index.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/vi/project/index.html.js"), meta: {"title":"Dự án"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Project/github-page/vuepress-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
