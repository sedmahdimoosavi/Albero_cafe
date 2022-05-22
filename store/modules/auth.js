import { supabase } from "~/plugins/supabase";

export default {
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    setUser(context, payload) {
      if (!payload) return;
      context.commit("SET_USER", payload);
    },
    async autoLogin(vuexContext) {
      const user = await supabase.auth.user();
      if (user) {
        vuexContext.commit("SET_USER", user);
      } else {
        await supabase.auth.onAuthStateChange((event, session) => {
          if (session) {
            vuexContext.dispatch("setUser", session.user);
          }
        });
      }
    },

    async logout(context) {
      let { error } = await supabase.auth.signOut();
      context.commit("CLEAR_USER");
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    },
  },
};
