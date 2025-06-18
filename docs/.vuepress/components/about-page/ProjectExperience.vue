<template>
  <Timeline
    :items="messages[currentLang].timeline"
    :type="NAV.PROJECT_EXPERIENCE"
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
    period: "10/2024 - 06/2025",
    organization: "IT Asset Management System (ITAM)",
    summary: "Detailed Design, Product, Test UT & IT",
    details: [
      { action: "Analyzed requirements (REQ), deploy detailed treatment plan" },
      { action: "Designed the database schema for the system" },
      { action: "Created detailed design documentation" },
      {
        action:
          "Implemented new feature development based on design specifications",
      },
      { action: "Testing UT based on Test Cases" },
    ],
    technologies: [
      {
        name: "TypeScript",
        image: "/vuepress-blog/images/skills/typescript.png",
      },
      { name: "Vue", image: "/vuepress-blog/images/skills/vue.png" },
      { name: "Python", image: "/vuepress-blog/images/skills/python.png" },
      { name: "FastAPI", image: "/vuepress-blog/images/skills/fastapi.png" },
      {
        name: "PostgreSQL",
        image: "/vuepress-blog/images/skills/postgreSQL.png",
      },
      {
        name: "AWS Cognito",
        image: "/vuepress-blog/images/skills/aws_cognito.png",
      },
      {
        name: "AWS S3",
        image: "/vuepress-blog/images/skills/aws_s3.png",
      },
    ],
  },
  {
    period: "05/2024 - 09/2024",
    organization: "Health Risk Assessment System",
    summary: "Product, Test UT & IT",
    details: [
      {
        action:
          "Implemented new feature development based on design specifications",
      },
      { action: "Create Test Cases UT & Code UT" },
      { action: "Create Test Cases IT" },
    ],
    technologies: [
      {
        name: "TypeScript",
        image: "/vuepress-blog/images/skills/typescript.png",
      },
      { name: "React", image: "/vuepress-blog/images/skills/react.png" },
      { name: "Jest", image: "/vuepress-blog/images/skills/jest.png" },
    ],
  },
  {
    period: "04/2024 - 05/2024",
    organization: "NA",
    summary: "Test UT",
    details: [
      { action: "Create Test Cases & Testing SQL (query, stored procedures)" },
    ],
    technologies: [
      { name: "Oracle", image: "/vuepress-blog/images/skills/oracle.png" },
    ],
  },
  {
    period: "12/2021 - 03/2024",
    organization: "Engineer Dispatch Management System",
    summary: "Basic Design, Detailed Design, Test UT, Maintenance",
    details: [
      {
        action:
          "Analyze, define REQ from Customer, deploy detailed treatment plan",
      },
      {
        action:
          "Maintain and operate system functions, optimize system (SQL tuning)",
      },
      { action: "Implemented new feature development" },
      { action: "Create SQL export data according to Customer's request" },
      {
        action:
          "Investigate and create system business investigation results documents based on source code",
      },
      {
        action:
          "Create Test Cases & Testing new feature development, change require",
      },
    ],
    technologies: [
      {
        name: "JSP/Servlet",
        image: "/vuepress-blog/images/skills/jsp_servlet.png",
      },
      { name: "VB", image: "/vuepress-blog/images/skills/vb.png" },
      { name: "ASP.NET", image: "/vuepress-blog/images/skills/asp_net.png" },
      {
        name: "Batch Script",
        image: "/vuepress-blog/images/skills/batch_script.png",
      },
      {
        name: "SQL Server",
        image: "/vuepress-blog/images/skills/sql_server.png",
      },
    ],
  },
  {
    period: "10/2021 - 12/2021",
    organization:
      "Student information management, academic performance, examinations, and aspirations",
    summary: "Product, Test UT & IT",
    details: [
      {
        action:
          "Implemented new feature development based on design specifications",
      },
      {
        action:
          "Create Test Cases UT & IT and Testing, created Evidence Testing",
      },
    ],
    technologies: [
      {
        name: "TypeScript",
        image: "/vuepress-blog/images/skills/typescript.png",
      },
      { name: "Vue", image: "/vuepress-blog/images/skills/vue.png" },
    ],
  },
];

const timelineVNItems = [
  {
    period: "10/2024 - 06/2025",
    organization: "Hệ thống Quản lý tài sản IT (ITAM)",
    summary: "Thiết kế chi tiết, Code phát triển, Test UT & IT",
    details: [
      { action: "Phân tích REQ, triển khai phương án xử lý" },
      { action: "Thiết kế Database sử dụng trong hệ thống" },
      { action: "Tạo tài liệu thiết kế chi tiết" },
      { action: "Coding phát triển mới dự án dựa trên tài liệu thiết kế" },
      { action: "Testing UT theo Test Case" },
    ],
    technologies: [
      {
        name: "TypeScript",
        image: "/vuepress-blog/images/skills/typescript.png",
      },
      { name: "Vue", image: "/vuepress-blog/images/skills/vue.png" },
      { name: "Python", image: "/vuepress-blog/images/skills/python.png" },
      { name: "FastAPI", image: "/vuepress-blog/images/skills/fastapi.png" },
      {
        name: "PostgreSQL",
        image: "/vuepress-blog/images/skills/postgreSQL.png",
      },
      {
        name: "AWS Cognito",
        image: "/vuepress-blog/images/skills/aws_cognito.png",
      },
      {
        name: "AWS S3",
        image: "/vuepress-blog/images/skills/aws_s3.png",
      },
    ],
  },
  {
    period: "05/2024 - 09/2024",
    organization: "Hệ thống đánh giá rủi ro sức khỏe",
    summary: "Code phát triển, Test UT & IT",
    details: [
      { action: "Coding phát triển mới dự án dựa trên tài liệu thiết kế" },
      { action: "Tạo Test Case UT & Code UT" },
      { action: "Tạo Test Case IT" },
    ],
    technologies: [
      {
        name: "TypeScript",
        image: "/vuepress-blog/images/skills/typescript.png",
      },
      { name: "React", image: "/vuepress-blog/images/skills/react.png" },
      { name: "Jest", image: "/vuepress-blog/images/skills/jest.png" },
    ],
  },
  {
    period: "04/2024 - 05/2024",
    organization: "NA",
    summary: "Test UT",
    details: [
      { action: "Tạo Test Case & Testing SQL (query, stored procedures)" },
    ],
    technologies: [
      { name: "Oracle", image: "/vuepress-blog/images/skills/oracle.png" },
    ],
  },
  {
    period: "12/2021 - 03/2024",
    organization: "Hệ thống quản lý nguồn nhân lực phái cử",
    summary: "Thiết kế cơ bản & chi tiết, Test UT, Maintenance",
    details: [
      {
        action:
          "Phân tích, định nghĩa REQ từ phía Khách hàng, triển khai Phương án xử lý chi tiết",
      },
      {
        action:
          "Bảo trì vận hành các chức năng trong hệ thống, tối ưu hóa hệ thống (SQL tuning)",
      },
      { action: "Coding phát triển bổ sung các chức năng mới" },
      { action: "Tạo SQL export data theo yêu cầu của Khách hàng" },
      {
        action:
          "Điều tra, tạo tài liệu kết quả điều tra nghiệp vụ hệ thống dựa trên source code",
      },
      {
        action:
          "Tạo Test Case & Testing các chức năng phát triển mới, thay đổi require",
      },
    ],
    technologies: [
      {
        name: "JSP/Servlet",
        image: "/vuepress-blog/images/skills/jsp_servlet.png",
      },
      { name: "VB", image: "/vuepress-blog/images/skills/vb.png" },
      { name: "ASP.NET", image: "/vuepress-blog/images/skills/asp_net.png" },
      {
        name: "Batch Script",
        image: "/vuepress-blog/images/skills/batch_script.png",
      },
      {
        name: "SQL Server",
        image: "/vuepress-blog/images/skills/sql_server.png",
      },
    ],
  },
  {
    period: "10/2021 - 12/2021",
    organization: "Quản lý thông tin học sinh, thành tích, thi cử, nguyện vọng",
    summary: "Code phát triển, Test UT & IT",
    details: [
      {
        action: "Coding phát triển mới dự án dựa trên tài liệu thiết kế có sẵn",
      },
      { action: "Tạo Test Case UT & IT và Testing, tạo Evidence Testing" },
    ],
    technologies: [
      {
        name: "TypeScript",
        image: "/vuepress-blog/images/skills/typescript.png",
      },
      { name: "Vue", image: "/vuepress-blog/images/skills/vue.png" },
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
