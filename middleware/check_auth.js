export default (context) => {
  if (!context.store.getters.isLoggedIn) {
    context.redirect("/login");
  }
};
