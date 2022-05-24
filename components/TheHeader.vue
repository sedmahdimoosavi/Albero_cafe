<template>
  <div class="main">
    <nav>
      <ul>
        <nuxt-link to="/adminPanel">
          <li class="nav-item">پنل مدیریت</li>
        </nuxt-link>
        <Nuxt-Link to="/">
          <li class="nav-item">خانه</li>
        </Nuxt-Link>
      </ul>
    </nav>
    <img src="~/assets/Images/logo13.png" alt="logo" id="logo" />
    <h2 id="title">کافه آلبرو</h2>
    <div class="custom-shape-divider-bottom-1621413959">
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  width: 100%;
  height: 24rem;
  background-image: linear-gradient(#ffffffbd, #ffffffbd),
    url(~/assets/Images/log.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 1rem 0;
  position: relative;
}

#logo {
  display: block;
  width: 170px;
  height: 170px;
  margin: 0 auto;
}

nav {
  width: 300px;
  position: absolute;
  top: 0;
  right: 0;
}
nav ul {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 0;
  margin: 0;
}
.nav-item {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 2px solid #cff27e;
  list-style: none;
  text-align: center;
  cursor: pointer;
  border-radius: 11px;
  transition: all 0.2s ease;
}
ul a {
  width: 40%;
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.1s ease;
}
ul a:hover {
  color: #000;
}
ul a:hover .nav-item {
  background-color: #cff27e;
}
a.nuxt-link-exact-active {
  color: #000;
  transition: all 0.2s ease;
}
a.nuxt-link-exact-active .nav-item {
  background-color: #cff27e;
  transition: all 0.2s ease;
}

#title {
  text-align: center;
  margin: 3rem auto 0;
  font-family: "nastaliq";
  font-size: 35pt;
}

/* -------------------------------- custom tilt -------------------------------- */
.custom-shape-divider-bottom-1621413959 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1621413959 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 104px;
}

.custom-shape-divider-bottom-1621413959 .shape-fill {
  fill: #ffffff;
}
/* ---------------------------------------------------------------- */

/* -------------------------------- Media Queries -------------------------------- */
@media screen and (min-width: 620px) {
  .main {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url("~/assets/Images/bg2.jpg");
    background-size: cover;
    background-attachment: fixed;
  }
  #title {
    color: #fff;
    font-size: 45pt;
  }
}

@media screen and (max-width: 620px) {
  nav {
    width: 100%;
    height: auto;
  }
  nav ul {
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 0.5rem;
  }
  .nav-item {
    margin: 0.75rem 0;
    border: 1px solid #173b1c;
  }
  ul a {
    width: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #173b1c;
  }
  ul a.nuxt-link-exact-active {
    color: #173b1c;
  }
  ul a.nuxt-link-exact-active .nav-item {
    border: 1px solid transparent;
  }
}

/* ---------------------------------------------------------------- */
</style>
