/**
 * Duyệt qua tất cả các bài viết để lấy thông tin cần thiết
 * và lưu vào file posts.js trong thư mục temp
 */
export default (options, app) => ({
  name: "post-data-plugin",
  async onPrepared(app) {
    // Biến lưu danh sách bài viết theo category
    const grouped = {};
    // Lọc danh sách các trang (pages) có trong VuePress
    app.pages
      .filter((page) => page.path.startsWith("/posts/")) // Chỉ lấy bài viết trong thư mục /posts/
      .forEach(({ title, frontmatter, path }) => {
        const category = frontmatter.category || "Uncategorized";
        const post = {
          title: title || "Untitled",
          summary: frontmatter.summary || "",
          path: path,
          date: frontmatter.date || "1970-01-01",
          image: frontmatter.image,
        };
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push(post);
      });
    
    // Sắp xếp bài viết trong từng category theo ngày từ mới đến cũ
    Object.keys(grouped).forEach((category) => {
      grouped[category].sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    // Chuyển object thành mảng
    const posts = Object.keys(grouped).map((category) => ({
      category,
      posts: grouped[category],
    }));

    // Ghi danh sách bài viết vào file tạm @temp/posts.js
    const content = `export const categorizedPosts = ${JSON.stringify(posts, null, 2)}`;
    await app.writeTemp("posts.js", content);
  },
});
