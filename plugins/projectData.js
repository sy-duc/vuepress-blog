/**
 * Duyệt qua tất cả các bài viết về project để lấy thông tin cần thiết
 * và lưu vào file projectPosts.js trong thư mục temp
 */
export default (options, app) => ({
  name: "project-post-data-plugin",
  async onPrepared(app) {
    const projects = [];
    // Lọc danh sách các trang (pages) có trong VuePress
    app.pages
      .filter((page) => page.path.startsWith("/project-posts/")) // Chỉ lấy bài viết trong thư mục /project-posts/
      .forEach((page) => {
        const { title, summary, technologies, date, image, link } = page.frontmatter;

        const projectData = {
          title: title || "Untitled",
          summary: summary || "",
          technologies: technologies || [],
          date: date || "1970-01-01",
          image: image,
          link: link,
        };
        projects.push(projectData);
      });

    // Sắp xếp projects theo ngày từ mới đến cũ
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Ghi danh sách projects vào file tạm @temp/projectPosts.js
    const content = `export const projectPosts = ${JSON.stringify(
      projects,
      null,
      2
    )}`;
    await app.writeTemp("projectPosts.js", content);
  },
});
