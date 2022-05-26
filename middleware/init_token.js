export default (context) => {
  context.store.dispatch("autoLogin", context.req);
};
