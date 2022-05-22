<template>
  <section class="whole-thing">
    <div class="base-button">
      <button class="button shutter-horizontal" @click="toggle">
        <p>{{ name }}</p>
      </button>
    </div>
    <transition name="fade">
      <div class="backdrop" @click="close" v-if="modalIsShown"></div>
    </transition>
    <transition name="tilt">
      <div class="modal-content" v-if="modalIsShown">
        <div class="modal-top">
          <h3>{{ name }}</h3>
          <i class="ri-add-line" @click="close"></i>
        </div>

        <div class="row items" v-for="drink in menu" :key="drink.name">
          <div class="col col-10 item-name">
            <p>{{ drink.name }}</p>
          </div>
          <div class="col col-2 item-price">
            <p>{{ drink.price }}</p>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      menu: {},
      modalIsShown: false,
    };
  },
  methods: {
    toggle() {
      this.modalIsShown = !this.modalIsShown;
    },
    close() {
      this.modalIsShown = false;
    },
  },
  async mounted() {
    this.menu = await this.$store.dispatch("getSpecificMenu", this.name);
  },
};
</script>

<style scoped>
/* -------------------------------- The Button -------------------------------- */
.button {
  width: 100%;
  height: 75px;
  background-color: #cff27e;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  z-index: 2;
  border: none;
  outline: none;
  transition: all 0.3s ease;
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}

.button p {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 17pt;
  margin: 0;
}
/* ---------------------------------------------------------------- */

/* -------------------------------- The Modal -------------------------------- */
.modal-top {
  width: 100%;
  height: auto;
  padding: 0.75rem 0;
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #cff27e;
}
.modal-top h3 {
  text-align: center;
  color: rgb(71, 71, 71);
  margin: 0;
}
.modal-top i {
  position: absolute;
  top: 5px;
  right: 12px;
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  transform: rotateZ(45deg);
}
.modal-content {
  width: 90%;
  max-width: 500px;
  height: 75vh;
  /* background-color: #a5adf5; */
  position: fixed;
  top: 5%;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  overflow: auto;
  border: none;
  border-radius: 10px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("~/assets/Images/bg4.jpg");
}
.backdrop {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  background-color: rgba(0, 0, 0, 0.575);
}

.row {
  margin: 0;
}
.items {
  width: 90%;
  height: auto;
  direction: rtl;
  padding: 1rem;
  margin: 0 auto 2rem;
  /* border: 1px solid #0c0457; */
  border-radius: 4px;
  background-color: #ffffff;
  /* box-shadow: -4px 7px 18px 2px #7e7e7e2d; */
  transition: all 0.4s ease;
  cursor: pointer;
}
::-webkit-scrollbar {
  /* display: none; */
}
.row .col {
  padding: 0;
}
.item-price p {
  text-align: left;
}
.items p {
  margin: 0;
  font-size: 15pt;
  font-weight: 600;
  -webkit-user-select: none;
}
.item-name p {
  word-wrap: break-word;
}

/* ---------------------------------------------------------------- */
</style>
