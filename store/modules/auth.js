import { supabase } from "~/plugins/supabase";
import jsCookie from "js-cookie";

export default {
  state() {
    return {
      token: null,
    };
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    CLEAR_TOKEN(state) {
      state.token = null;
    },
  },
  actions: {
    setToken(context, payload) {
      if (!payload) return;
      context.commit("SET_TOKEN", payload);
      jsCookie.set("token", payload.id);
    },
    async autoLogin(vuexContext, req) {
      // req => on client side is null
      // if (server side){}?
      if (req) {
        const jwt = req.headers.cookie.substring(6);
        if (jwt) {
          console.log(jwt);
          vuexContext.commit("SET_TOKEN", jwt);
        }
      } else {
        const user = await supabase.auth.user();
        if (user) {
          vuexContext.commit("SET_TOKEN", user.id);
        } else {
          await supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
              vuexContext.dispatch("setToken", session.user.id);
            }
          });
        }
        console.log("in else");
      }
    },

    async logout(context) {
      let { error } = await supabase.auth.signOut();
      context.commit("CLEAR_TOKEN");
      jsCookie.remove("token");
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
};
