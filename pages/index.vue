<template>
  <section>
    <main-content></main-content>
  </section>
</template>

<script>
import MainContent from "~/components/MainContent.vue";
export default {
  components: { MainContent },
  created() {
    // this.$store.dispatch("getMenu");
  },
  transition: "fade",
};
</script>

<style></style>
