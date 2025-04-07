<template>
  <div class="wraper">
    <div class="container">
      <div class="left-content p-30">
        <div class="logo">
          <a href="index.html">
            <span>My</span>
            <span>Resume</span>
          </a>
        </div>
        <div class="nav">
          <ul>
            <li><a>Profile</a></li>
            <li><a>Career Timeline</a></li> <!-- Hành trình phát triển -->
            <li><a>Project Experience</a></li> <!-- Kinh nghiệm dự án -->
            <li><a>Skills</a></li>
          </ul>
        </div>
        <div class="left-footer">
          <div class="social-icons">
            <ul>
              <li>
                <a href=""><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-twitch" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
          <div class="foot-contact">
            <ul>
              <li>duc.hosy97@gmail.com</li>
              <li>+84 989944664</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="main-content">
        <!-- Title -->
        <div class="p-30" id="Home">
          <div class="sec-title">
            <div class="pg-sub-title">Profile</div>
            <div class="pg-title">Personal Information</div>
          </div>
        </div>
        <!-- Thông tin cá nhân -->
        <!-- <Profile /> -->
        <!-- Hành trình phát triển -->
        <CareerTimeline />
        <!-- Kinh nghiệm dự án -->
        <!-- <ProjectExperience /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import Profile from './Profile.vue';
import CareerTimeline from './CareerTimeline.vue';
import ProjectExperience from './ProjectExperience.vue';

</script>

<style scoped>
.wraper {
  width: 100%;
  height: 100%;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: row;
}

.left-content {
  width: 300px;
  overflow-y: auto;
  height: 100%;
  background: #fff;
  /* border-right: 1px solid rgba(221, 221, 221, 0.38); */
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  /* overflow-y: auto; */
  margin-left: 10px;
  background: #fff;
  /* border-left: 1px solid rgba(221, 221, 221, 0.38); */
}

.logo {
  display: flex;
  justify-content: flex-end;
}

.logo a {
  color: #fff;
  text-align: right;
  background: #000;
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 30px;
  font-weight: 500;
}

.nav {
  flex: 1;
  /* display: flex; */
  justify-content: flex-end;
  margin: 50px 0px;
}

.nav ul li,
.nav ul li a {
  display: flex;
  justify-content: flex-end;
}

.nav ul li a {
  padding: 8px 0px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
  letter-spacing: 1px;
  font-weight: 500;
  position: relative;
}

.nav ul li a:hover {
  color: #000;
}
.nav ul li a:after {
  content: "";
  width: 0;
  height: 1px;
  background: #000;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -ms-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav ul li a:hover:after {
  width: 100%;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}

.left-footer {
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.foot-contact,
.social-icons ul,
.copy-rights {
  display: flex;
  justify-content: flex-end;
}

.social-icons ul li {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.foot-contact ul {
  display: flex;
  flex-direction: column;
}

.foot-contact ul li {
  justify-content: flex-end;
  display: flex;
  margin: 2px 0px;
}

.foot-contact {
  margin: 5px 0px;
}

.social-icons ul li a {
  padding: 5px 8px;
  font-size: 16px;
}

.social-icons ul li a:hover {
  color: #000;
  transform: scale(1.2) translateY(-5px);
}

.sec-title {
  margin-bottom: 50px;
}

.pg-sub-title {
  margin-bottom: 10px;
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  color: #999999;
  font-weight: 500;
  letter-spacing: 5px;
}

.pg-title {
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.8;
  color: #000;
}
</style>
