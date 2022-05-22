<template>
  <div class="main-footer container-fluid">
    <div class="custom-shape-divider-top-1621499840">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="contact-info">
      <div class="insta">
        <a href="https://www.instagram.com/cafe_alberoo/" target="_blank">
          <i class="ri-instagram-line"></i>
        </a>
      </div>
      <div class="address">
        <p>میدان رسالت، خیابان طاهرخانی، روبروی پارک ولیعصر، پلاک 79</p>
        <i class="ri-map-pin-line"></i>
      </div>
      <div class="phone-number">
        <a href="tel:+982177272518"> (021) 77 27 25 18</a>
        <a href="tel:+982177272519"> (021) 77 27 25 19 </a>
        <div id="#footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-footer {
  height: 27.5rem;
  /* background-color: #fecb00a8; */
  background-image: url("~/assets/Images/bg5.png");
  background-attachment: fixed;
  /* #FECB00 */
  position: relative;
  margin: -12rem auto;
}
.contact-info {
  width: 70%;
  height: 60%;
  margin: 0 auto;
  /* border: 1px solid red; */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 1rem;
  flex-direction: column;
}
.contact-info a {
  text-decoration: none;
}

/* insta */
.insta {
  text-align: center;
  margin-bottom: 2rem;
}
.insta i {
  color: rgb(230, 24, 219);
  font-size: 33pt;
  padding: 1rem;
  border-radius: 58px;
  background: linear-gradient(145deg, #c9d0d4, #eff7fd);
  box-shadow: 5px 5px 10px #bec4c9, -5px -5px 10px #ffffff;
}

/* address */
.address {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.address p {
  margin: 0 0.5rem;
  text-align: center;
  direction: rtl;
  font-size: 15pt;
  font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
}
.address i {
  font-size: 1.2rem;
}

.phone-number {
  display: flex;
  flex-direction: column;
}
.phone-number a {
  display: inline-block;
  text-align: center;
  color: #000;
  font-size: 15pt;
}

/* -------------------------------- Shape divider -------------------------------- */
.custom-shape-divider-top-1621499840 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1621499840 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.custom-shape-divider-top-1621499840 .shape-fill {
  fill: #ffffff;
}
/* ---------------------------------------------------------------- */

/* -------------------------------- Media Queries -------------------------------- */
@media screen and (max-width: 768px) {
  .contact-info {
    width: 100%;
  }
}
@media screen and (max-width: 390px) {
  .main-footer {
    height: 31rem;
  }
}
/* ---------------------------------------------------------------- */
</style>
