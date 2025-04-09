<template>
  <Banner />

  <main id="content">
    <!--Introduce Page-->
    <div id="services" class="scrollto clearfix">
      <div class="row no-padding-bottom clearfix">
        <!--Content Left Side-->
        <div class="col-3">
          <!--User Testimonial-->
          <blockquote class="testimonial text-right bigtest">
            <q
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua</q
            >
            <footer>— John Doe, Happy Customer</footer>
          </blockquote>
          <!-- End of Testimonial-->
        </div>
        <!--End Content Left Side-->

        <!--Content of the Right Side-->
        <div class="col-3">
          <div class="section-heading">
            <h3>BELIEVING</h3>
            <h2 class="section-title">Focusing On What Matters Most</h2>
            <p class="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam!
            </p>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet!
          </p>
        </div>
        <!--End Content Right Side-->

        <div class="col-3">
          <img src="/images/dancer.jpg" alt="Dancer" />
        </div>
      </div>
    </div>
    <!--End of Introduce Page-->

    <!--Blog-->
    <section id="clients" class="scrollto clearfix">
      <div class="row clearfix">
        <div class="col-3">
          <div class="section-heading">
            <h3>BLOG</h3>
            <h2 class="section-title">Companies who use our services</h2>
            <p class="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam!
            </p>
          </div>
        </div>

        <div class="col-2-3">
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo1.png"
              alt="Company"
            />
            <div class="client-overlay"><span>Tree</span></div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo2.png"
              alt="Company"
            />
            <div class="client-overlay"><span>Fingerprint</span></div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo3.png"
              alt="Company"
            />
            <div class="client-overlay"><span>The Man</span></div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo4.png"
              alt="Company"
            />
            <div class="client-overlay"><span>Mustache</span></div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo5.png"
              alt="Company"
            />
            <div class="client-overlay"><span>Goat</span></div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo6.png"
              alt="Company"
            />
            <div class="client-overlay"><span>Justice</span></div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo7.png"
              alt="Company"
            />
            <div class="client-overlay"><span>Ball</span></div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo8.png"
              alt="Company"
            />
            <div class="client-overlay"><span>Cold</span></div>
          </a>

          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo9.png"
              alt="Company"
            />
            <div class="client-overlay"><span>Cold</span></div>
          </a>
        </div>
      </div>
    </section>
    <!--End of Blog-->
  </main>
</template>

<script setup>
import Banner from "./Banner.vue";
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
</style>
