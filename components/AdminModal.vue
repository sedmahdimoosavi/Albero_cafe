<template>
  <section class="whole-thing">
    <!-- --------------- The Button --------------- -->
    <div class="base-button">
      <button class="button radial" @click="toggle">
        <p>{{ name }}</p>
      </button>
    </div>
    <!-- ------------------------------ -->

    <!-- --------------- Backdrop --------------- -->
    <transition name="fade">
      <div class="backdrop" @click="closeModal" v-if="modalIsShown"></div>
    </transition>
    <!-- ------------------------------ -->

    <!-- --------------- The Modal --------------- -->
    <transition name="tilt">
      <div class="modal-content" v-if="modalIsShown" ref="modal">
        <div class="modal-top">
          <h3>{{ name }}</h3>
          <i class="ri-add-line" @click="closeModal" ref="top"></i>
        </div>
        <div class="add-new">
          <div class="add-sign" @click="formNewIsVisible = !formNewIsVisible">
            <i
              class="ri-close-line"
              @click="formNewIsVisible = !formNewIsVisible"
              :class="{ active: formNewIsVisible }"
            ></i>
          </div>

          <transition name="tilt">
            <form
              @submit.prevent="addNew(enteredName, enteredPrice)"
              id="form-new"
              v-if="formNewIsVisible"
            >
              <input
                type="text"
                class="form-control"
                placeholder="اسم مورد جدید؟"
                v-model="enteredName"
                required
              />
              <input
                type="text"
                placeholder="قیمتش چقدره؟"
                class="form-control"
                v-model="enteredPrice"
                required
              />
              <button class="button radial" style="width: 40%" type=" submit">
                ثبت
              </button>
            </form>
          </transition>
        </div>
        <div style="position: relative">
          <transition-group name="user-list">
            <div class="row items" v-for="drink in menu" :key="drink.name">
              <div class="col col-10 item-name">
                <p>{{ drink.name }}</p>
              </div>
              <div class="col col-2 item-price">
                <p>{{ drink.price }}</p>
              </div>
              <div class="edit-panel">
                <button
                  class="btn btn-outline-success"
                  @click="edit(drink.name, drink.price, drink.id)"
                >
                  قیمت رو ببر بالا!
                </button>
                <button
                  class="btn btn-outline-danger"
                  @click="remove(drink.name, drink.id)"
                >
                  پاکش کن!
                </button>
              </div>
              <!-- <div class="edit-form" v-if="editFormIsShown">

              </div> -->
            </div>
          </transition-group>
        </div>
      </div>
    </transition>
    <!-- ------------------------------ -->
  </section>
</template>

<script>
export default {
  props: ["name", "prodId"],

  data() {
    return {
      modalIsShown: false,
      formNewIsVisible: false,
      enteredName: "",
      enteredPrice: "",
      editFormIsShown: false,
      editedItem: "",
      menu: {},
    };
  },

  async mounted() {
    this.menu = await this.$store.dispatch("getSpecificMenu", this.name);
  },

  methods: {
    toggle() {
      this.modalIsShown = !this.modalIsShown;
    },
    closeModal() {
      this.modalIsShown = false;
    },

    async addNew(name, price) {
      if (!this.enteredName && !this.enteredPrice) return;

      // if it is new item
      if (!this.editedItem) {
        await this.$store.dispatch("addNew", {
          col_name: this.name,
          itemName: this.enteredName,
          itemPrice: this.enteredPrice,
        });
        this.enteredName = "";
        this.enteredPrice = "";
        this.formNewIsVisible = false;
      }

      // if it is in edit mode
      else {
        this.enteredName = "";
        this.enteredPrice = "";
        this.formNewIsVisible = false;
        await this.$store.dispatch("editItem", {
          col_name: this.name,
          id: this.editedItem,
          newName: name,
          newPrice: price,
        });
      }
      this.menu = await this.$store.dispatch("getSpecificMenu", this.name);

      this.editedItem = "";
    },

    async remove(itemName, id) {
      await this.$store.dispatch("removeItem", {
        col_name: this.name,
        itemName: itemName,
        id: id,
      });
      this.menu = await this.$store.dispatch("getSpecificMenu", this.name);
    },

    edit(name, price, id) {
      this.formNewIsVisible = true;
      this.enteredName = name;
      this.enteredPrice = price;
      this.editedItem = id;

      // for scrolling to top
      let element = this.$refs["top"];
      let top = element.offsetTop;
      let modal = this.$refs["modal"];
      modal.scrollTo(0, top);
    },
  },
};
</script>

<style scoped>
.button {
  width: 100%;
  height: 75px;
  background-color: #cff27e;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  z-index: 2;
  border: none;
  outline: none;
  transition: all 0.3s ease;
  font-family: "demo";
  font-size: 16pt;
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}

.button p {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 17pt;
  margin: 0;
}
/* ---------------------------------------------------------------- */

/* -------------------------------- The Modal -------------------------------- */
.modal-top {
  width: 100%;
  height: auto;
  padding: 0.75rem 0;
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #cff27e;
  z-index: 3;
}
.modal-top h3 {
  text-align: center;
  color: rgb(71, 71, 71);
  margin: 0;
}
.modal-top i {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  transform: rotateZ(45deg);
}
.add-new {
  width: 90%;
  margin: 1rem auto 2rem;
}
.add-sign {
  width: 60px;
  height: 60px;
  text-align: right;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;

  position: relative;
}

.add-sign i {
  color: rgb(0, 0, 0);
  font-size: 25pt;
  transition: all 0.2s ease;
  z-index: 1;
  display: block;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-49%, -49%) rotateZ(45deg);
}
.add-sign i.active {
  transform: translate(-50%, -50%);
  transition: all 0.2s ease;
}

#form-new {
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin-top: 1rem;
}

#form-new input {
  margin: 2rem auto;
  text-align: right;
  border: 1px dashed #b87d4b;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  font-size: 16pt;
  transition: all 0.2s ease;
  font-family: "demo";
}
#form-new input:focus {
  border: 1px solid #3e8914;
  box-shadow: none;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 4px 5px 20px 0px #d9d9d9, -4px -5px 20px #ffffff;
}

#form-new input::placeholder {
  text-align: right;
}

.modal-content {
  width: 90%;
  max-width: 500px;
  height: 75vh;
  /* background-color: #a5adf5; */
  position: fixed;
  top: 5%;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  overflow: auto;
  border: none;
  border-radius: 10px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("~/assets/Images/bg4.jpg");
}
.backdrop {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  background-color: rgba(0, 0, 0, 0.575);
}

.row {
  margin: 0;
}
.items {
  width: 90%;
  height: auto;
  direction: rtl;
  padding: 1rem;
  margin: 0 auto 2rem;
  border-radius: 4px;
  background-color: #ffffff;
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
}
.items:hover .edit-panel {
  height: 5rem;
  padding-top: 2rem;
}
.edit-panel {
  width: 100%;
  height: 0rem;
  overflow: hidden;
  position: relative;
  text-align: left;
  transition: all 0.4s ease;
}
.edit-panel button {
  height: 40px;
  font-family: "demo";
  margin: 0 5px;
}

::-webkit-scrollbar {
  display: none;
}
.row .col {
  padding: 0;
}
.item-price p {
  text-align: left;
}
.items p {
  margin: 0;
  font-size: 15pt;
  font-weight: 600;
  -webkit-user-select: none;
}
.item-name p {
  word-wrap: break-word;
}

/* ---------------------------------------------------------------- */

.user-list-enter-from {
  opacity: 0.5;
  transform: scale(1.6);
}

.user-list-enter-active {
  transition: all 0.5s cubic-bezier(0.65, 1.95, 0.03, 0.32);
}

.user-list-enter-to {
  opacity: 1;
  transform: scale(1);
}

.user-list-leave-from {
  opacity: 1;
}

.user-list-leave-active {
  transition: all 0.3s ease-in;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
}
.user-list-move {
  transition: all 0.8s ease;
}
</style>
