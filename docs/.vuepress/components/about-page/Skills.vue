<template>
  <section>
    <header>
      <h1>Experience</h1>
    </header>

    <div class="qual full-qual">
      <div class="data">
        <div
          v-for="(item, index) in skillItems"
          :key="index"
          class="data-item"
          :class="`item-${index + 1}`"
          :style="{ borderBottomWidth: animatedWidths[index] + 'px' }"
        >
          <h5 v-html="item.title" />
          <span>&nbsp;</span>
        </div>
      </div>
      <hr />
    </div>

    <header>
      <h1>Expertise</h1>
    </header>

    <div class="sknex">
      <div class="skills-vis">
        <div id="skill1">
          <h3>Role</h3>
          <hr />
          <br />
          <div class="skill-breakdown">
            <div class="pie-container">
              <div class="center"></div>
              <div class="pie-back"></div>
              <div class="hold" id="puters"><div class="pie"></div></div>
              <div class="hold" id="puters4"><div class="pie"></div></div>
              <div class="hold" id="movies"><div class="pie"></div></div>
              <div class="hold" id="games"><div class="pie"></div></div>
              <div class="hold" id="music"><div class="pie"></div></div>
              <div class="hold" id="music2"><div class="pie"></div></div>
              <div class="hold" id="tv"><div class="pie"></div></div>
            </div>
            <div class="pie-legend">
              <ul>
                <li>
                  <span
                    class="color-box"
                    style="background-color: #b4dad7"
                  ></span
                  >Testing
                </li>
                <li>
                  <span
                    class="color-box"
                    style="background-color: #2196a7"
                  ></span
                  >Coding
                </li>
                <li>
                  <span
                    class="color-box"
                    style="background-color: #215961"
                  ></span
                  >Design
                </li>
                <li>
                  <span
                    class="color-box"
                    style="background-color: #1f2426"
                  ></span
                  >Điều tra, tạo tài liệu
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="skill1">
          <h3>AI</h3>
          <hr />
          <br />

          <div class="skill-breakdown">
            <div class="pie-container">
              <div class="center"></div>
              <div class="pie-back"></div>
              <div class="hold" id="puters"><div class="pie"></div></div>
              <div class="hold" id="puters4"><div class="pie"></div></div>
              <div class="hold" id="movies"><div class="pie"></div></div>
              <div class="hold" id="games"><div class="pie"></div></div>
              <div class="hold" id="music"><div class="pie"></div></div>
              <div class="hold" id="music2"><div class="pie"></div></div>
              <div class="hold" id="tv"><div class="pie"></div></div>
            </div>
            <div class="pie-legend">
              <ul>
                <li>
                  <span
                    class="color-box"
                    style="background-color: #b4dad7"
                  ></span
                  >ChatGPT
                </li>
                <li>
                  <span
                    class="color-box"
                    style="background-color: #2196a7"
                  ></span
                  >GitHub Copilot
                </li>
                <li>
                  <span
                    class="color-box"
                    style="background-color: #215961"
                  ></span
                  >Cursor
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const skillItems = [
  { title: "Microsoft SQL", width: 213.75 },
  { title: "Fast API", width: 50 },
  { title: "Laravel", width: 15 },
  { title: "Oracle", width: 37.5 },
  { title: ".NET", width: 37.5 },
  { title: "Vue", width: 110 },
  { title: "Spring Boot", width: 62.5 },
  { title: "React", width: 100 },
];

const animatedWidths = ref(skillItems.map(() => 0));

onMounted(() => {
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      animatedWidths.value[index] = item.width;
    }, 0);
  });
});
</script>

<style scoped>
section {
  margin: 0 auto;
}

h1 {
  border: 2px solid #b4dad7;
  padding: 0.15em;
  display: inline-block;
  margin-top: 0;
}
header {
  overflow: hidden;
}

hr {
  border: 1px solid #b4dad7;
}

.full-qual {
  width: 100%;
  margin: 0 auto;
}

.qual {
  margin-bottom: 40px;
}

.qual hr {
  margin: 0 auto;
  width: 100%;
}

.data {
  height: 200px;
  position: relative;
  width: 100%;
  margin-bottom: 10px;
}

.data .data-item {
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  transition: border-bottom-width 1s ease-in-out;
}

.data-item h5 {
  position: absolute;
  bottom: 10px;
  white-space: nowrap;
  border-bottom: 2px solid #b4dad7;
}

.data-item span {
  position: absolute;
  bottom: 13px;
  border-left: 2px solid #b4dad7;
}

.item-1 {
  z-index: 1;
  right: 0;
  border-left: 427.5px solid transparent;
  border-right: 427.5px solid transparent;
  border-bottom: 0px solid #2196a7;
}

.item-1 h5 {
  position: absolute;
  bottom: 20px;
}

.item-1 span {
  line-height: 25px;
}

.item-2 {
  z-index: 5;
  right: 50px;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  opacity: 0.5;
  border-bottom: 0px solid #b4dad7;
}

.item-2 h5 {
  position: absolute;
  bottom: 30px;
}

.item-2 span {
  line-height: 35px;
}

.item-3 {
  z-index: 5;
  left: 45px;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  opacity: 0.5;
  border-bottom: 0px solid #b4dad7;
}

.item-3 h5 {
  position: absolute;
  left: -55px;
}

.item-3 span {
  line-height: 15px;
}

.item-4 {
  z-index: 5;
  left: 150px;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-bottom: 0px solid #b4dad7;
}

.item-4 h5 {
  position: absolute;
  left: -47px;
}

.item-4 span {
  line-height: 15px;
}

.item-5 {
  z-index: 5;
  left: 300px;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-bottom: 0px solid #b4dad7;
}

.item-5 h5 {
  text-align: right;
  position: absolute;
  left: -35px;
  bottom: 50px;
}

.item-5 span {
  line-height: 55px;
}

.item-6 {
  z-index: 8;
  left: 400px;
  border-left: 220px solid transparent;
  border-right: 220px solid transparent;
  opacity: 0.5;
  border-bottom: 0px solid #b4dad7;
}

.item-6 h5 {
  position: absolute;
  bottom: 70px;
}

.item-6 span {
  line-height: 75px;
}

.item-7 {
  z-index: 10;
  left: 450px;
  border-left: 125px solid transparent;
  border-right: 125px solid transparent;
  border-bottom: 0px solid #b4dad7;
}

.item-7 h5 {
  text-align: right;
  position: absolute;
  left: -85px;
  bottom: 30px;
}

.item-7 span {
  line-height: 35px;
}

.item-8 {
  z-index: 5;
  left: 100px;
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  opacity: 0.5;
  border-bottom: 0px solid #b4dad7;
}

.item-8 h5 {
  text-align: right;
  position: absolute;
  left: -40px;
  bottom: 80px;
}

.item-8 span {
  line-height: 85px;
}

.sknex {
  clear: both;
  margin-bottom: 2em;
  overflow: hidden;
}

.skills-vis {
  float: left;
  width: 100%;
}

#skill1 {
  width: 45%;
  margin-right: 5%;
  float: left;
}

#skill1 #puters .pie {
  background-color: #b4dad7;
  -webkit-transform: rotate(80deg);
  -moz-transform: rotate(80deg);
  -o-transform: rotate(80deg);
  transform: rotate(80deg);
}

#skill1 #puters4 {
  background-color: #215961;
  -webkit-transform: rotate(210deg);
  -moz-transform: rotate(210deg);
  -o-transform: rotate(210deg);
  transform: rotate(210deg);
}

#skill1 #movies {
  background-color: #307982;
  -webkit-transform: rotate(170deg);
  -moz-transform: rotate(170deg);
  -o-transform: rotate(170deg);
  transform: rotate(170deg);
}

#skill1 #games {
  background-color: #2196a7;
  -webkit-transform: rotate(160deg);
  -moz-transform: rotate(160deg);
  -o-transform: rotate(160deg);
  transform: rotate(160deg);
}

#skill1 #music {
  background-color: #519ca4;
  -webkit-transform: rotate(110deg);
  -moz-transform: rotate(110deg);
  -o-transform: rotate(110deg);
  transform: rotate(110deg);
}

#skill1 #music2 {
  background-color: #519ca4;
  -webkit-transform: rotate(80deg);
  -moz-transform: rotate(80deg);
  -o-transform: rotate(80deg);
  transform: rotate(80deg);
}

#skill1 h3 {
  margin-bottom: 0;
  padding-bottom: 0;
}

.skill-breakdown {
  overflow: hidden;
}

.skill-breakdown .pie-container {
  position: relative;
  height: 150px;
  width: 150px;
  margin-right: 10px;
  float: left;
}

.skill-breakdown .pie-container .center {
  position: absolute;
  z-index: 50;
  width: 75px;
  height: 75px;
  top: 25%;
  left: 25%;
  background-color: #fff;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}

.skill-breakdown .pie-container .pie-back {
  background-color: #1f2426;
  position: absolute;
  width: 150px;
  height: 150px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}

.skill-breakdown .pie-container .pie {
  position: absolute;
  width: 150px;
  height: 150px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  clip: rect(0px, 75px, 150px, 0px);
}

.skill-breakdown .pie-container .hold {
  position: absolute;
  width: 150px;
  height: 150px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  clip: rect(0px, 150px, 75px, 75px);
}

.skill-breakdown ul {
  margin-left: 150px;
}

.pie-legend .color-box {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 0.5em;
  border-radius: 2px;
}
</style>
