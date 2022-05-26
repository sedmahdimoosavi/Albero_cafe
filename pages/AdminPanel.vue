<template>
  <section>
    <admin-content></admin-content>
  </section>
</template>

<script>
import AdminContent from "../components/AdminContent.vue";
export default {
  components: { AdminContent },
  middleware: "check_auth",
};
</script>

<style></style>
