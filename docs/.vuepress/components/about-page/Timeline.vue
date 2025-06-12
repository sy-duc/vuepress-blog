<template>
  <div class="resume-timeline position-relative">
    <article
      v-for="(item, index) in items"
      :key="index"
      class="resume-timeline-item position-relative d-flex-align-center pb-3"
    >
      <div class="timeline-item__left flex-1">
        <div class="resume-timeline-item-header">
          <div class="d-flex">
            <h3 class="resume-position-title">
              {{ item.organization }}
              <span>{{ `(${item.role})` }}</span>
            </h3>
          </div>
          <div class="resume-position-time">{{ item.period }}</div>
        </div>
        <div class="resume-timeline-item-desc">
          <p>{{ item.summary }}</p>
          <ul>
            <li v-for="(el, index) in item.details" :key="index">
              <span>
                {{ el.action }}
                <a v-if="el.reference" :href="el.reference" target="_blank">
                  (Xem thêm)
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="timeline-item__right flex-1">
        <!-- Ảnh mô tả tại từng quá trình phát triển -->
        <img
          class="img-career-timeline"
          v-if="type === NAV.CAREER_TIMELINE && item.image"
          :src="item.image"
        />
        <!-- Các công nghệ sử dụng trong Dự án -->
        <div v-else-if="type === NAV.PROJECT_EXPERIENCE" id="clients">
          <a href="#" class="col-3">
            <img src="/images/skills/python.png" alt="Company" />
            <div class="client-overlay"><span>Tree</span></div>
          </a>
          <a href="#" class="col-3">
            <img src="/images/skills/python.png" alt="Company" />
            <div class="client-overlay"><span>Fingerprint</span></div>
          </a>
          <a href="#" class="col-3">
            <img src="/images/skills/python.png" alt="Company" />
            <div class="client-overlay"><span>Fingerprint</span></div>
          </a>
          <a href="#" class="col-3">
            <img src="/images/skills/python.png" alt="Company" />
            <div class="client-overlay"><span>Tree</span></div>
          </a>
          <a href="#" class="col-3">
            <img src="/images/skills/python.png" alt="Company" />
            <div class="client-overlay"><span>Fingerprint</span></div>
          </a>
          <a href="#" class="col-3">
            <img src="/images/skills/python.png" alt="Company" />
            <div class="client-overlay"><span>Fingerprint</span></div>
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { NAV } from "../../utils/constants";

const props = defineProps({
  type: { type: String, required: true },
  items: { type: Array, required: true },
});
</script>

<style scoped>
.theme-default-content h3:first-child {
  margin-bottom: unset;
}

.theme-default-content h3 {
  margin-top: unset;
  padding-top: 2px;
}

.pb-3 {
  padding-bottom: 3rem;
}

.resume-timeline-item-desc p {
  color: rgba(0, 0, 0, 0.6);
}

.resume-timeline-item-desc ul {
  margin-left: 3rem;
  font-weight: 300;
  list-style: disc;
}

.position-relative {
  position: relative !important;
}

.resume-timeline {
  padding-left: 2rem;
}

.resume-timeline:before {
  content: "";
  display: inline-block;
  width: 3px;
  height: 100%;
  background: #aab4c3;
  left: 6px;
  top: 4px;
  position: absolute;
}

.resume-timeline-item:before {
  content: "";
  display: inline-block;
  position: absolute;
  left: -32px;
  top: 3px;
  width: 15px;
  height: 15px;
  border: 4px solid #58677c;
  background: white;
  border-radius: 50%;
}

.resume-position-time {
  font-size: 0.875rem;
  color: #aab4c3;
}

.resume-position-title {
  font-size: 1.125rem;
  color: #434e5e;
}

.resume-position-title span {
  color: #58677c;
  font-size: 0.875rem;
  font-weight: 500;
}

a[target="_blank"]::after {
  content: none !important;
}

.timeline-item__right {
  padding-left: 50px;
}

.timeline-item__right .img-career-timeline {
  max-width: 85%;
}

.col-3 {
  padding: 0;
}

#clients img {
  padding: 0;
}
</style>
