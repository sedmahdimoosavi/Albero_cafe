<template>
  <div class="container-fluid">
    <the-header></the-header>
    <nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {
  middleware: "init_token",
};
</script>

<style>
/*
  -------------------------------- Color Template --------------------------------
  #ede0d4 fade
  #e6ccb2
  #ddb892
  #b08968
  #7f5539
  #9c6644
  ------------------------
  #cff27e
  #134611
  #3e8914
  #b87d4b
#523a34
#

  */
@font-face {
  font-family: "demo";
  src: url("./assets/Fonts/Far_DastNevis.otf");
}
@font-face {
  font-family: "nastaliq";
  src: url("./assets/Fonts/IranNastaliq.ttf");
}
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.1/css/all.min.css");
h1,
h2,
h3,
h4,
h5,
p,
span,
button,
a,
option,
select,
label,
input::placeholder {
  font-family: demo;
}

.container-fluid {
  padding: 0 !important;
}

/* -------------------------------- Keyframes -------------------------------- */

@-webkit-keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fade-in {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/* ---------------------------------------------------------------- */

/* -------------------------------- Button Hover -------------------------------- */
.shutter-horizontal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: #e1e1e1;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

.shutter-horizontal:before {
  content: "";
  position: absolute;
  z-index: -1;
  border-radius: 10px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #3e8914;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.shutter-horizontal:hover,
.shutter-horizontal:focus,
.shutter-horizontal:active {
  color: white;
}

.shutter-horizontal:hover:before,
.shutter-horizontal:focus:before,
.shutter-horizontal:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

/* ---------------------------------------------------------------- */
.radial {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  background: #e1e1e1;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.radial:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #19922d;
  border-radius: 100%;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.radial:hover,
.radial:active {
  color: white;
}

.radial:hover:before,
.radial:active:before {
  -webkit-transform: scale(2);
  transform: scale(2);
}

/* ---------------------------------------------------------------- */

/* -------------------------------- Vue Animations -------------------------------- */
.tilt-enter-active {
  animation: fade-in 0.4s ease-in-out;
}
.tilt-leave-active {
  animation: fade-in 0.4s ease-in-out reverse;
}

.fade-enter-active {
  animation: fade 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.fade-leave-active {
  animation: fade 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) reverse;
}

.slide-enter-active {
  animation: slide-in 0.4s ease-in-out;
}
.slide-leave-active {
  animation: slide-in 0.4s ease-in-out reverse;
  display: none;
}
/* ---------------------------------------------------------------- */
</style>
