<template>
  <div class="resume-timeline position-relative">
    <article v-for="(item, index) in timelineItems" :key="index" class="resume-timeline-item position-relative pb-3">
      <div class="resume-timeline-item-header">
        <div class="d-flex">
          <h3 class="resume-position-title">
            {{ item.organization }}
          </h3>
          <div class="resume-company-name ml-auto">
            {{ item.role }}
          </div>
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
    </article>
  </div>
</template>

<script setup>
const timelineItems = [
  {
    period: '08/2015 - 06/2020',
    organization: 'Đại học Bách Khoa',
    role: 'Sinh Viên',
    summary: 'Sinh viên chuyên ngành Cơ khí Chế tạo máy',
    details: [
      { action: 'Học tập và nghiên cứu', reference: "https://google.com"},
      { action: 'Tham gia các hoạt động ngoại khóa', reference: ""},
      { action: 'Kết quả học tập: 3.2/4.0', reference: ""},
    ],
  },
  {
    period: '06/2020 - 12/2020',
    organization: 'LILAMA 10',
    role: 'Kỹ Sư',
    summary: 'Sinh viên chuyên ngành Cơ khí Chế tạo máy',
    details: [
      { action: 'Học tập và nghiên cứu', reference: ""},
      { action: 'Tham gia các hoạt động ngoại khóa', reference: ""},
      { action: 'Kết quả học tập: 3.2/4.0', reference: ""},
    ],
  },
  {
    period: '12/2020 - 12/2021',
    organization: 'Luvina Acacdemy',
    role: 'Học Viên',
    summary: 'Sinh viên chuyên ngành Cơ khí Chế tạo máy',
    details: [
      { action: 'Học tập và nghiên cứu', reference: ""},
      { action: 'Tham gia các hoạt động ngoại khóa', reference: ""},
      { action: 'Kết quả học tập: 3.2/4.0', reference: ""},
    ],
  },
  {
    period: '12/2021 - hiện tại',
    organization: 'Luvina Software',
    role: 'Kỹ Sư Phần Mềm',
    summary: 'Sinh viên chuyên ngành Cơ khí Chế tạo máy',
    details: [
      { action: 'Học tập và nghiên cứu', reference: ""},
      { action: 'Tham gia các hoạt động ngoại khóa', reference: ""},
      { action: 'Kết quả học tập: 3.2/4.0', reference: ""},
    ],
  },
]
</script>

<style scoped>
.theme-default-content h3:first-child {
  margin-bottom: unset;
}

.theme-default-content h3 {
  margin-top: unset;
  padding-top: unset;
}

.pb-3 {
  padding-bottom: 3rem;
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

.resume-company-name {
  color: #58677c;
  font-size: 0.875rem;
  font-weight: 500;
}

.ml-auto {
  margin-left: auto;
}

a[target="_blank"]::after {
  content: none !important;
}
</style>
