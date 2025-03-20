export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://fonts.googleapis.com/css?family=Josefin+Sans&subset=latin,latin-ext\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Experience Breeds Wisdom\",\"description\":\"A blog powered by VuePress\"},\"/vi/\":{\"lang\":\"vi-VN\",\"title\":\"Kiến Thức Từ Trải Nghiệm\",\"description\":\"Một blog được tạo bằng VuePress\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
