<template>
  <div class="page login">
    <form>
      <input v-model="email" type="email" placeholder="Your email" />
      <button @click.prevent="login">Login</button>
    </form>
    <div v-if="error">Please write correct email!</div>
  </div>
</template>

<script>
import { actionTypes } from "@/store/modules/user";
import router from "@/router";
export default {
  name: "TodoLogin",
  data() {
    return {
      email: "",
      error: false,
    };
  },
  methods: {
    validateEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email.toLowerCase());
    },
    login() {
      if (this.validateEmail()) {
        this.$store.dispatch(actionTypes.login, this.email.trim());
        router.push({ name: "home" });
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.login div {
  text-align: center;
  color: red;
  margin-top: 15px;
}
.login form {
  display: flex;
  justify-content: center;
}
.login input {
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-right: 15px;
  border: 2px solid gray;
}
.login input:focus {
  outline: none;
}
.login button {
  background: white;
  padding: 10px;
  width: 100px;
  border: 2px solid gray;
  border-radius: 10px;
}
.login button:focus {
  outline: none;
}
</style>
