<template>
  <section>
    <admin-content></admin-content>
  </section>
</template>

<script>
import AdminContent from "../components/AdminContent.vue";
export default {
  components: { AdminContent },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.$store.getters.isLoggedIn) {
        next(true);
      } else {
        vm.$router.push("/login");
      }
    });
  },
};
</script>

<style></style>
