<template>
  <Timeline
    :items="messages[currentLang].timeline"
    :type="NAV.CAREER_TIMELINE"
  />
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
    period: "08/2015 - 06/2020",
    organization: "Hanoi University of Science and Technology",
    role: "Student",
    summary: "Mechanical Engnieering",
    details: [
      { action: "Participated in Student Scientific Research Competitions" },
      {
        action:
          "Participated in a research project presented at IEEE 11th International Conference.",
        reference: "https://ieeexplore.ieee.org/document/10582947",
      },
      { action: "Degree Classification: Good" },
    ],
    image: "/vuepress-blog/images/about/dhbkhn.jpg",
  },
  {
    period: "06/2020 - 12/2020",
    organization: "LILAMA 10 Joint Stock Company",
    role: "Mechanical Engineer",
    summary: "Economics - Technique Department Staff",
    details: [
      {
        action:
          "Participate in research on technical solutions in installation and construction of works",
      },
      {
        action:
          "Design and manufacture installation drawings and equipment structures for construction projects",
      },
    ],
  },
  {
    period: "12/2020 - 07/2021",
    organization: "Luvina Academy",
    role: "Trainee",
    summary: "Programmer course for non-professionals",
    details: [
      {
        action:
          "Java Core, HTML & CSS, Database, NET, Security, Woking Method, Test Basic",
      },
      { action: "JSP/Servlet Project: Student Management" },
      { action: "Graduation Results: 94/100" },
    ],
  },
  {
    period: "07/2021 - Present",
    organization: "Luvina Software Joint Stock Company",
    role: "Web Developer",
    summary: "Software Engineer",
    details: [
      { action: "Participate in outsourcing for Japanese customer projects" },
    ],
  },
];

const timelineVNItems = [
  {
    period: "08/2015 - 06/2020",
    organization: "Đại học Bách Khoa",
    role: "Sinh Viên",
    summary: "Sinh viên chuyên ngành Kỹ sư Cơ khí Chế tạo máy",
    details: [
      { action: "Tham gia các cuộc thi Sinh viên nghiên cứu khoa học" },
      {
        action: "Tham gia đề tài nghiên cứu tại Hội nghị quốc tế IEEEICCC2024",
        reference: "https://ieeexplore.ieee.org/document/10582947",
      },
      { action: "Hạng tốt nghiệp: Khá" },
    ],
    image: "/vuepress-blog/images/about/dhbkhn.jpg",
  },
  {
    period: "06/2020 - 12/2020",
    organization: "Công ty Cổ phần LILAMA 10",
    role: "Kỹ Sư Cơ Khí",
    summary: "Nhân viên phòng Kinh tế Kỹ thuật",
    details: [
      {
        action:
          "Tham gia nghiên cứu giải pháp kỹ thuật trong lắp đặt, thi công công trình",
      },
      {
        action: "Thiết kế bản vẽ lắp đặt, chế tạo kết cấu thiết bị công trình",
      },
    ],
  },
  {
    period: "12/2020 - 07/2021",
    organization: "Luvina Academy",
    role: "Học Viên",
    summary: "Tham gia khóa học lập trình viên cho người trái ngành",
    details: [
      {
        action:
          "Java Core, HTML & CSS, Database, NET, Bảo mật, Phương pháp làm việc, Test Basic",
      },
      { action: "Thực hành với Dự án JSP/Servlet: Quản lý học sinh" },
      { action: "Kết quả tốt nghiệp: 94/100" },
    ],
  },
  {
    period: "07/2021 - hiện tại",
    organization: "Công ty Cổ phần Phần mềm Luvina",
    role: "Kỹ Sư Phần Mềm",
    summary: "Nhân viên chính thức tại Luvina Software",
    details: [
      { action: "Tham gia outsource cho các Dự án khách hàng Nhật Bản" },
    ],
  },
];

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
