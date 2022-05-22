<template>
  <div class="main-form container">
    <div class="sign-in-container">
      <div class="row main-row">
        <div class="col col-12 col-md-6" id="img-side"></div>
        <div class="col col-12 col-md-6" id="form-side">
          <div class="login-container" @submit.prevent>
            <div class="logo">
              <img src="~/assets/Images/logo.png" alt="" />
            </div>
            <h3>ورود به پنل مدیریت</h3>
            <form class="input-container" @submit.prevent="">
              <div style="position: relative">
                <label for="email" v-if="errors.email" class="error-msg">
                  {{ errors.email }}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="ایمیل"
                  v-model="email"
                  :class="{ invalid: errors.email }"
                />
              </div>
              <div style="position: relative">
                <label for="password" v-if="errors.password" class="error-msg">
                  {{ errors.password }}
                </label>

                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="رمز عبور"
                  v-model="password"
                  :class="{ invalid: errors.password }"
                />
              </div>
              <p v-if="!validInput" class="error-msg2">
                نام کاربری یا گذرواژه اشتباه است
              </p>
              <button
                class="shutter-horizontal sign-in"
                type="submit"
                @click="checkValidation"
              >
                ورود
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from "~/plugins/supabase";

export default {
  data() {
    return {
      email: "",
      password: "",
      validInput: true,

      errors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async checkValidation() {
      // Check If It's Empty
      if (!this.email || !this.password) {
        if (!this.email) {
          this.errors.email = "این فیلد ضروری است";
        }
        if (!this.password) {
          this.errors.password = "این فیلد ضروری است";
        }
        return false;
      }
      // It's not empty
      try {
        let { user, error } = await supabase.auth.signIn({
          email: this.email,
          password: this.password,
        });

        if (error) throw error;
        this.$store.dispatch("setUser", user);

        this.$router.replace("/adminPanel");
      } catch (error) {
        this.validInput = false;
      }
    },
  },
};
</script>

<style scoped>
.main-form {
  height: 1000px;
}
.sign-in-container {
  width: 80%;
  height: 700px;
  margin: 2rem auto;
}
.main-row {
  width: 100%;
  height: 100%;
  margin: 0;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  border-radius: 10px;
}

.main-row > .col {
  padding: 0;
}

#img-side {
  background-image: url("~/assets/Images/bg1.jpg");
  background-size: cover;
  border-radius: 10px 0 0 10px;
}

#form-side {
  padding: 1rem;
  border-radius: 0 10px 10px 0;
}

.logo {
  width: 100%;
  height: 150px;
}
.logo img {
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 auto;
}
.login-container {
  width: 70%;
  height: 39rem;
  border: 1px solid #b4b4b4;
  margin: 1rem auto;
  text-align: center;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
}
.login-container h3 {
  margin: 2rem auto;
  font-size: 25pt;
  color: #3e8914;
}
.input-container {
  margin-top: 6rem;
}

.input-container input {
  margin: 2rem auto;
  text-align: right;
  border: 1px dashed #b87d4b;
  padding: 1rem;
  font-size: 13pt;
  transition: all 0.2s ease;
}
.input-container input:focus {
  border: 1px solid #3e8914;
  box-shadow: none;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
}

.input-container input::placeholder {
  text-align: right;
}

.invalid {
  border: 1px solid red !important;
  /* margin: 0 auto !important; */
}

.error-msg {
  width: 100%;
  color: red;
  font-size: 12pt;
  position: absolute;
  top: -23px;
  left: 0;
  text-align: right;
}

.error-msg2 {
  color: red;
}

.sign-in {
  width: 50%;
  height: 60px;
  background-color: #cff27e;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  z-index: 2;
  border: none;
  outline: none;
  transition: all 0.3s ease;
  font-family: "demo";
  font-size: 21pt;
}

.sign-in:hover {
  transform: scale(1.05);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}

.sign-in p {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}
/* -------------------------------- Media Queries -------------------------------- */
@media screen and (max-width: 1200px) {
  .login-container {
    width: 100%;
  }
}
@media screen and (max-width: 776px) {
  .sign-in-container {
    width: 100%;
  }
  #img-side {
    display: none;
  }
  .login-container h3 {
    font-size: 18pt;
  }
}
/* ---------------------------------------------------------------- */
</style>
