<template>
  <div class="main container">
    <img src="~/assets/Images/tree.png" alt="log" class="log" />
    <h3 id="title">بار سرد و گرم</h3>
    <div class="row main-row">
      <div
        class="col col-md-4 col-6"
        v-for="drink of $store.state.drinkTitles"
        :key="drink"
      >
        <base-modal :name="drink"></base-modal>
      </div>
    </div>

    <h3 id="title">غذا</h3>
    <div class="row main-row">
      <div
        class="col col-md-4 col-6"
        v-for="food of $store.state.foodTitles"
        :key="food"
      >
        <base-modal :name="food"></base-modal>
      </div>
    </div>
  </div>
</template>

<script>
import BaseModal from "./BaseModal.vue";
export default {
  components: { BaseModal },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 840px;
  position: relative;
  padding-bottom: 3rem;
}
.log {
  width: 540px;
  height: 540px;
  position: absolute;
  top: 40%;
  left: -80%;
  transform: translate(0%, -50%);
  z-index: -1;
}

#title {
  text-align: center;
  font-size: 23pt;
  margin: 2rem auto 0;
  /* clip-path: circle(50% at 50% 50%); */
  background-color: #b87d4b;
  color: white;
  width: 70%;
  max-width: 180px;
  padding: 3rem 0;
  border-radius: 50%;
  -webkit-user-select: none;
  cursor: pointer;
  box-shadow: -6px 5px 16px 0px #ccc;
}
.row {
  margin: 0;
  height: auto;
}
.col {
  padding: 7px;
  margin: 0.5rem auto;
}

/* -------------------------------- Media Queries -------------------------------- */
@media screen and (min-width: 768px) {
  .log {
    left: -45%;
  }
}
@media screen and (max-width: 768px) {
  .main {
    height: 940px;
  }
}
/* ---------------------------------------------------------------- */
</style>
