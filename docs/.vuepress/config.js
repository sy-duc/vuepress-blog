import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import blogPostDataPlugin from '../../plugins/postData.js';
import projectPostDataPlugin from '../../plugins/projectData.js';

const scriptFiles = [
  "jquery.1.8.3.min.js",
  "wow.min.js",
  "featherlight.min.js",
  "featherlight.gallery.min.js",
  "jquery.enllax.min.js",
  "jquery.scrollUp.min.js",
  "jquery.easing.min.js",
  "jquery.stickyNavbar.min.js",
  "jquery.waypoints.min.js",
  "images-loaded.min.js",
  "lightbox.min.js",
  "site.js"
];

export default defineUserConfig({
  base: '/vuepress-blog/',
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap",
      },
    ],
    [
    "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,500,600,700&subset=latin,latin-ext",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
      },
    ],
    // ...scriptFiles.map(file => [
    //   "script",
    //   { src: `/js/${file}`, defer: true }
    // ])
  ],
  bundler: viteBundler(),
  plugins: [
    blogPostDataPlugin(),
    projectPostDataPlugin(),
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "Experience Breeds Wisdom",
      description: "A blog powered by VuePress",
    },
    "/vi/": {
      lang: "vi-VN",
      title: "Kiến Thức Từ Trải Nghiệm",
      description: "Một blog được tạo bằng VuePress",
    },
  },
  theme: defaultTheme({
    logo: "/images/logo.png",
    locales: {
      "/": {
        selectLanguageName: "English", // Tên ngôn ngữ hiển thị trong menu
        selectLanguageText: "Language", // Tên hiển thị ngôn ngữ hiện tại trên navbar
        navbar: [
          { text: "Home", link: "/" },
          { text: "Project", link: "/project/" },
          { text: "Blog", link: "/blog/" },
          { text: "About", link: "/about/" },
        ],
        sidebar: 'false',
      },
      "/vi/": {
        selectLanguageName: "Tiếng Việt",
        selectLanguageText: "Ngôn Ngữ",
        navbar: [
          { text: "Trang Chủ", link: "/vi/" },
          { text: "Dự Án", link: "/vi/project/" },
          { text: "Blog", link: "/vi/blog/" },
          { text: "Về Tôi", link: "/vi/about/" },
        ],
        sidebar: 'false',
      },
    },
    lastUpdated: false, // Tắt "Last Updated"
    contributors: false, // Tắt "Contributors"
  }),
});
