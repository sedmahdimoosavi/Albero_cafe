<template>
  <div class="admin-content container">
    <div class="admin-title">
      <p>پنل مدیریت</p>
      <button class="btn btn-outline-danger" @click="logout">
        <span> خروج </span>
        <i class="ri-logout-box-r-line"></i>
      </button>
    </div>
    <h3 id="title">بار سرد و گرم</h3>
    <div class="row main-row">
      <div
        class="col col-md-4 col-6"
        v-for="drink of $store.state.drinkTitles"
        :key="drink"
      >
        <admin-modal :name="drink"></admin-modal>
      </div>
    </div>

    <h3 id="title">غذا</h3>
    <div class="row main-row">
      <div
        class="col col-md-4 col-6"
        v-for="food of $store.state.foodTitles"
        :key="food"
      >
        <admin-modal :name="food"></admin-modal>
      </div>
    </div>
  </div>
</template>

<script>
import AdminModal from "./AdminModal.vue";

export default {
  components: { AdminModal },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.admin-content {
  height: 970px;
}

.admin-title {
  width: 70%;
  text-align: center;
  margin: 1rem auto;
  position: relative;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
}
.admin-title p {
  width: 100%;
  min-width: 230px;
  border-radius: 11px;
  color: white;
  background-color: #296931;
  font-size: 2.2rem;
  padding: 1rem 0;
  margin: 0.5rem auto;
}
.admin-title button {
  width: 50%;
  max-width: 150px;
  margin: 0 auto;
}

.add {
  width: 100%;
  height: 10vh;
  /* border: 1px solid red; */
  padding: 1rem;
}
.addnew-btn {
  width: 30%;
  height: 75px;
  display: block;
  margin: 0 auto 1.5rem;
  background-color: #cff27e;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  z-index: 2;
  border: none;
  outline: none;
  transition: all 0.3s ease;
  font-family: "demo";
  font-size: 20pt;
}

.addnew-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}

.add form {
  direction: rtl;
}

select {
  width: 400px;
  font-family: "demo";
  font-size: 20pt;
  text-align: right;
  direction: rtl;
  padding: 1rem 4rem;
}

#title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23pt;
  margin: 2rem auto 0;
  /* clip-path: circle(50% at 50% 50%); */
  background-color: #b87d4b;
  color: white;
  width: 180px;
  height: 120px;
  max-width: 180px;
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

/* ---------------------------------------------------------------- */

/* -------------------------------- Media Queries -------------------------------- */
@media screen and (max-width: 767px) {
  .admin-content {
    height: 1150px;
  }
  .admin-title {
    width: 100%;
  }
}
/* ---------------------------------------------------------------- */
</style>
