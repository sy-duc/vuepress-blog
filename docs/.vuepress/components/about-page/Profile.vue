<template>
  <div class="section1 p-30" id="Home">
    <div class="sec-title">
      <div class="pg-sub-title">Profile</div>
      <div class="pg-title">Personal Information</div>
    </div>
    <div class="d-flex-align-center">
      <div class="user-img flex-1">
        <img src="https://colorlib.com/preview/theme/meetme/img/personal.jpg" />
      </div>
      <div class="user-profile flex-1">
        <div class="pro-details">
          <div class="sm-text">HELLO EVERYBODY, I AM</div>
          <div class="name">Duc Ho Sy</div>
          <div class="role">Web Developer</div>
        </div>
        <div class="text">
          You will begin to realise why this exercise is called the Dickens
          Pattern (with reference to the ghost showing Scrooge some different
          futures)
        </div>
        <div class="pr-list">
          <ul>
            <li>
              <i class="fa fa-calendar" aria-hidden="true"></i>
              06th Jan, 1997
            </li>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i>
              +84 989944664
            </li>
            <li>
              <i class="fa fa-envelope" aria-hidden="true"></i>
              duc.hosy97@gmail.com
            </li>
            <li>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              Hanoi, Vietnam
            </li>
          </ul>
        </div>
        <div class="social-icons-head">
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
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.user-profile {
  padding-left: 50px;
}

.sm-text {
  letter-spacing: 2.1px;
  font-weight: normal;
  color: #222222;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
}

.name {
  font-size: 40px;
  text-transform: uppercase;
  margin: 15px 0px;
  color: #222222;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
}

.role {
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #222222;
}

ul, .text {
  font-size: 17px;
  color: rgba(0, 0, 0, 0.6);
}

.pr-list {
  margin: 30px 0px;
}

.pr-list ul li {
  margin-bottom: 8px;
}

.pr-list ul li i {
  width: 18px;
}
.social-icons-head ul {
  display: flex;
}

.social-icons-head ul li a {
  padding: 5px 10px;
  font-size: 22px;
  transition: all 0.3s;
  display: flex;
}

.social-icons-head ul li:nth-child(1) a {
  padding-left: 0;
}

.social-icons-head ul li a:hover {
  color: #000;
  transform: scale(1.2) translateY(-5px);
}
.sec-title {
  margin-bottom: 50px;
}

.pg-title {
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.8;
  color: #000;
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
</style>
