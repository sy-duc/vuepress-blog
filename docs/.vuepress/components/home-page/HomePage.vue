<template>
  <Banner />

  <main id="content">
    <!--Introduce Page-->
    <div id="services" class="scrollto clearfix">
      <div class="row no-padding-bottom clearfix">
        <!--Content Left Side-->
        <div class="col-3">
          <blockquote class="testimonial text-right bigtest">
            <q>{{ messagesLocal.goal.slogan }}</q>
            <footer>{{ messagesLocal.goal.sloganAuthor }}</footer>
          </blockquote>
        </div>
        <!--End Content Left Side-->

        <!--Content of the Right Side-->
        <div class="col-3">
          <div class="section-heading">
            <h3>{{ messagesLocal.goal.title }}</h3>
            <h2 class="section-title">{{ messagesLocal.goal.subtitle }}</h2>
            <p class="section-subtitle">{{ messagesLocal.goal.summary }}</p>
          </div>
          <p>{{ messagesLocal.goal.description1 }}</p>
          <p>{{ messagesLocal.goal.description2 }}</p>
        </div>
        <!--End Content Right Side-->

        <div class="col-3">
          <img src="/images/goal.png" alt="Dancer" />
        </div>
      </div>
    </div>
    <!--End of Introduce Page-->

    <!--Blog-->
    <section id="clients" class="scrollto clearfix">
      <div class="row clearfix">
        <div class="col-3">
          <div class="section-heading">
            <h3>{{ messagesLocal.blog.title }}</h3>
            <h2 class="section-title">{{ messagesLocal.blog.subtitle }}</h2>
            <p class="section-subtitle pb-none">
              {{ messagesLocal.blog.summary }}
            </p>
          </div>
          <p class="pt-none">{{ messagesLocal.blog.description1 }}</p>
          <p class="pt-none">{{ messagesLocal.blog.description2 }}</p>
        </div>

        <div class="col-2-3">
          <a
            v-for="item in topics"
            :key="item.title"
            :href="item.to"
            class="col-3"
          >
            <img :href="item.to" :src="item.img" :alt="item.title" />
            <div class="client-overlay">
              <span>{{ item.title }}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
    <!--End of Blog-->
  </main>
</template>

<script setup>
import { computed } from "vue";
import Banner from "./Banner.vue";
import { useRoute } from "vue-router";
import { getLangFromPath } from "../../utils/helpers";
import { LANGUAGE } from "../../utils/constants";

const route = useRoute();

// Xác định ngôn ngữ hiện tại dựa vào đường dẫn
const currentLang = getLangFromPath(route.path);

const topics = [
  {
    img: "/vuepress-blog/images/skills/react.png",
    title: "React",
    to: "#",
  },
  {
    img: "/vuepress-blog/images/skills/vue.png",
    title: "VueJS",
    to: "#",
  },
  {
    img: "/vuepress-blog/images/skills/javascript.png",
    title: "JavaScript",
    to: "#",
  },
  {
    img: "/vuepress-blog/images/skills/java.png",
    title: "Java",
    to: "#",
  },
  {
    img: "/vuepress-blog/images/skills/python.png",
    title: "Python",
    to: "#",
  },
  {
    img: "/vuepress-blog/images/skills/fastapi.png",
    title: "FastAPI",
    to: "#",
  },
  {
    img: "/vuepress-blog/images/skills/spring-boot.png",
    title: "Spring Boot",
    to: "#",
  },
  {
    img: "/vuepress-blog/images/skills/aws.png",
    title: "Cloud",
    to: "#",
  },
  {
    img: "/vuepress-blog/images/skills/linux.png",
    title: "Linux",
    to: `/vuepress-blog${currentLang === LANGUAGE.EN ? '/en/' : '/'}blog/?tag=linux`,
  },
  {
    img: "/vuepress-blog/images/skills/docker.png",
    title: "Docker",
    to: "#",
  },
  {
    img: '/vuepress-blog/images/skills/oracle.png',
    title: "Oracle",
    to: `/vuepress-blog${currentLang === LANGUAGE.EN ? '/en/' : '/'}blog/?tag=oracle`,
  },
];

const messages = {
  [LANGUAGE.EN]: {
    goal: {
      title: "OPERATIONAL GOALS",
      subtitle: "Learn, Note & Share",
      slogan: "The palest ink is better than the best memor",
      sloganAuthor: "— Foreign Proverbs",
      summary:
        "The faintest ink is more reliable than the sharpest memory, for memories fade with time, but written words stand as a permanent guide throughout the journey!",
      description1:
        "As a developer, I've realized that learning never truly stops. Every project will bring new lessons. But knowledge, if not captured, is easily forgotten.",
      description2:
        "This page is where I document what I've learned and experienced — a way to organize my thoughts, and also a way to share with anyone on a similar journey. These notes not only help me remember better and recall knowledge faster when needed, but hopefully, they can also help someone.",
    },
    blog: {
      title: "BLOG",
      subtitle: "Write to understand, not just to store",
      summary:
        "In my journey as a Web Developer, I've come to believe that knowledge only truly becomes our own when we understand it deeply enough to express it in our own words.",
      description1:
        "Each post, each note is a slice of experience — the result of a multi-faceted exploration, a synthesis of perspectives, and a re-articulation shaped to align with my own way of thinking.",
      description2:
        "For I’ve come to realize that, amidst the vast sea of information on the Internet, the most valuable thing is not always the answer itself, but the approach that leads to true understanding. Over time, these notes have also become an indispensable companion on my journey of self-learning and growth.",
    },
  },
  [LANGUAGE.VI]: {
    goal: {
      title: "MỤC TIÊU HOẠT ĐỘNG",
      subtitle: "Học, Ghi & Chia sẻ",
      slogan: "Mực nhạt nhất còn hơn trí nhớ tốt nhất",
      sloganAuthor: "— Tục Ngữ Nước Ngoài",
      summary:
        "Mực nhạt nhất còn đáng tin cậy hơn trí nhớ sắc bén nhất, bởi trí nhớ sẽ phai mờ theo thời gian, trong khi những lời viết ra sẽ luôn là một hướng dẫn vững chắc cho cả hành trình!",
      description1:
        "Là một lập trình viên, tôi nhận ra rằng việc học không bao giờ dừng lại. Mỗi dự án đều sẽ mang lại những bài học mới. Nhưng kiến thức nếu không được lưu lại thì cũng dễ dàng bị lãng quên.",
      description2:
        "Page này là nơi tôi ghi lại những gì đã học, đã trải nghiệm – như một cách hệ thống lại tư duy, và cũng là cách để chia sẻ với bất kỳ ai. Những ghi chép này không chỉ giúp tôi nhớ lâu hơn, hệ thống lại kiến thức nhanh hơn khi cần, mà hy vọng còn có thể giúp ai đó.",
    },
    blog: {
      title: "BLOG",
      subtitle: "Viết để hiểu, không chỉ để lưu",
      summary:
        "Trong hành trình theo đuổi sự nghiệp lập trình, tôi tin rằng: kiến thức chỉ thực sự thuộc về mình khi ta đủ hiểu để viết lại nó bằng lời của chính mình.",
      description1:
        "Mỗi bài viết, mỗi ghi chú là một lát cắt của trải nghiệm, là kết quả của quá trình tìm hiểu đa chiều, đối chiếu giữa nhiều góc nhìn, và diễn giải lại sao cho phù hợp với chính cách tư duy của bản thân.",
      description2:
        "Bởi tôi hiểu rằng, giữa vô vàn thông tin trên Internet, điều giá trị nhất đôi khi không phải là câu trả lời, mà là cách tiếp cận khiến ta thực sự hiểu. Những ghi chép này cũng đã dần trở thành một người bạn đồng hành không thể thiếu của tôi trên hành trình tự học và phát triển.",
    },
  },
};

const messagesLocal = computed(() => messages[currentLang]);
</script>

<style scoped>
h2 {
  border-bottom: unset;
  margin-top: unset;
  margin-bottom: unset;
  padding-top: unset;
}

p {
  margin-block-start: 1em;
  margin-block-end: 1em;
}

.theme-default-content h3:first-child,
.theme-default-content h4:first-child + p {
  margin-top: unset;
}

.theme-default-content h3 {
  padding-top: unset;
}

blockquote {
  border-inline-start: unset;
}

.pt-none {
  margin-block-start: 0;
}

.pb-none {
  margin-block-end: 0;
}
</style>
