import Vuex from "vuex";
import { supabase } from "~/plugins/supabase";
import auth from "./modules/auth";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth: auth,
    },
    state() {
      return {
        menu: {},
        drinkTitles: [
          "قهوه",
          "سردنوش",
          "کیک و دسر",
          "شیک",
          "چای و دمنوش",
          "موکتل و اسموتی",
          "نوشیدنی گرم",
        ],
        foodTitles: ["سالاد و پیش غذا", "غذای اصلی", "صبحانه"],
      };
    },

    mutations: {
      INIT_MENU(state, payload) {
        state.menu = payload;
      },
    },

    actions: {
      async getMenu(context) {
        try {
          let { data, error } = await supabase.from("CafeMenu").select("*");
          if (error) throw error;
          context.commit("INIT_MENU", data);
        } catch (error) {
          console.log(error);
        }
      },

      async getSpecificMenu(context, payload) {
        try {
          let { data, error } = await supabase
            .from("CafeMenu")
            .select("*")
            .eq(payload, true);
          if (error) throw error;
          return data;
        } catch (error) {
          console.log(error);
        }
      },

      async addNew(_, payload) {
        // payload:{col_name:'',itemName:'', itemPrice:''}
        try {
          const { data, error } = await supabase.from("CafeMenu").insert([
            {
              [payload.col_name]: true,
              name: payload.itemName,
              price: payload.itemPrice,
            },
          ]);
          // if there's an error
          if (error) throw error;
        } catch (error) {
          console.log(error);
        }
      },

      async removeItem(_, payload) {
        // paylaod:{col_name: '', itemName: ''}
        try {
          const { data, error } = await supabase
            .from("CafeMenu")
            .delete()
            .eq([payload.col_name], true)
            .eq("id", payload.id);
          if (error) throw error;
        } catch (error) {
          console.log(error);
        }
      },

      async editItem(context, payload) {
        try {
          const { data, error } = await supabase
            .from("CafeMenu")
            .update({ name: payload.newName, price: payload.newPrice })
            .eq("id", payload.id);

          if (error) throw error;
        } catch (error) {
          console.log(error.message);
        }
      },
    },
    getters: {},
  });
};
export default createStore;
