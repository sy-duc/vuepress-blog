<template>
  <Timeline :items="messages[currentLang].timeline" :type="NAV.PROJECT_EXPERIENCE" />
</template>

<script setup>
import { NAV } from "../../utils/constants";
import Timeline from "./Timeline.vue";
import { useRoute } from "vue-router";
import { getLangFromPath } from "../../utils/helpers";
import { LANGUAGE } from "../../utils/constants";

const route = useRoute();

const timelineENItems = [
  {
    period: '08/2015 - 06/2020',
    organization: 'Đại học Bách Khoa',
    role: 'Sinh Viên',
    summary: 'Sinh viên chuyên ngành Kỹ sư Cơ khí Chế tạo máy',
    details: [
      { action: 'Học tập và nghiên cứu', reference: "https://google.com"},
      { action: 'Tham gia các hoạt động ngoại khóa' },
      { action: 'Kết quả học tập: 3.2/4.0' },
    ],
    technologies: [
      { name: 'Java', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'Python', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'JavaScript', image: '/vuepress-blog/images/skills/react.png' },
    ],
  },
  {
    period: '06/2020 - 12/2020',
    organization: 'Công ty Cổ phần LILAMA 10',
    role: 'Kỹ Sư',
    summary: 'Sinh viên chuyên ngành Kỹ sư Cơ khí Chế tạo máy',
    details: [
      { action: 'Học tập và nghiên cứu' },
      { action: 'Tham gia các hoạt động ngoại khóa' },
      { action: 'Kết quả học tập: 3.2/4.0' },
    ],
    technologies: [
      { name: 'Java', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'Python', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'JavaScript', image: '/vuepress-blog/images/skills/react.png' },
    ],
  },
  {
    period: '12/2020 - 12/2021',
    organization: 'Luvina Academy',
    role: 'Học Viên',
    summary: 'Tham gia khóa học lập trình viên cho người trái ngành',
    details: [
      { action: 'Java Core, HTML & CSS, ' },
      { action: 'Thực hành với Dự án JSP/Servlet: Quản lý nhân viên' },
      { action: 'Thủ khoa khóa học với kết quả: 9.2/10.0' },
    ],
    technologies: [
      { name: 'Java', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'Python', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'JavaScript', image: '/vuepress-blog/images/skills/react.png' },
    ],
  },
  {
    period: '12/2021 - hiện tại',
    organization: 'Công ty Cổ phần Phần mềm Luvina Software',
    role: 'Kỹ Sư Phần Mềm',
    summary: 'Nhân viên chính thức tại Luvina Software',
    details: [
      { action: 'Tham gia phát triển dự án cho khách hàng Nhật Bản' },
      { action: 'Tham gia các hoạt động ngoại khóa' },
      { action: 'Kết quả học tập: 3.2/4.0' },
    ],
    technologies: [
      { name: 'Java', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'Python', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'JavaScript', image: '/vuepress-blog/images/skills/react.png' },
    ],
  },
]

const timelineVNItems = [
  {
    period: '08/2015 - 06/2020',
    organization: 'Đại học Bách Khoa',
    role: 'Sinh Viên',
    summary: 'Sinh viên chuyên ngành Kỹ sư Cơ khí Chế tạo máy',
    details: [
      { action: 'Học tập và nghiên cứu', reference: "https://google.com"},
      { action: 'Tham gia các hoạt động ngoại khóa' },
      { action: 'Kết quả học tập: 3.2/4.0' },
    ],
    technologies: [
      { name: 'Java', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'Python', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'JavaScript', image: '/vuepress-blog/images/skills/react.png' },
    ],
  },
  {
    period: '06/2020 - 12/2020',
    organization: 'Công ty Cổ phần LILAMA 10',
    role: 'Kỹ Sư',
    summary: 'Sinh viên chuyên ngành Kỹ sư Cơ khí Chế tạo máy',
    details: [
      { action: 'Học tập và nghiên cứu' },
      { action: 'Tham gia các hoạt động ngoại khóa' },
      { action: 'Kết quả học tập: 3.2/4.0' },
    ],
    technologies: [
      { name: 'Java', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'Python', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'JavaScript', image: '/vuepress-blog/images/skills/react.png' },
    ],
  },
  {
    period: '12/2020 - 12/2021',
    organization: 'Luvina Academy',
    role: 'Học Viên',
    summary: 'Tham gia khóa học lập trình viên cho người trái ngành',
    details: [
      { action: 'Java Core, HTML & CSS, ' },
      { action: 'Thực hành với Dự án JSP/Servlet: Quản lý nhân viên' },
      { action: 'Thủ khoa khóa học với kết quả: 9.2/10.0' },
    ],
    technologies: [
      { name: 'Java', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'Python', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'JavaScript', image: '/vuepress-blog/images/skills/react.png' },
    ],
  },
  {
    period: '12/2021 - hiện tại',
    organization: 'Công ty Cổ phần Phần mềm Luvina Software',
    role: 'Kỹ Sư Phần Mềm',
    summary: 'Nhân viên chính thức tại Luvina Software',
    details: [
      { action: 'Tham gia phát triển dự án cho khách hàng Nhật Bản' },
      { action: 'Tham gia các hoạt động ngoại khóa' },
      { action: 'Kết quả học tập: 3.2/4.0' },
    ],
    technologies: [
      { name: 'Java', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'Python', image: '/vuepress-blog/images/skills/react.png' },
      { name: 'JavaScript', image: '/vuepress-blog/images/skills/react.png' },
    ],
  },
]

// Xác định ngôn ngữ hiện tại dựa vào đường dẫn
const currentLang = getLangFromPath(route.path);

const messages = {
  [LANGUAGE.EN]: {
    timeline: timelineENItems,
  },
  [LANGUAGE.VI]: {
    timeline: timelineVNItems,
  },
};
</script>

<style scoped></style>
