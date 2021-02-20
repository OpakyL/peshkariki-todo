<template>
  <div class="page header">
    <router-link class="header__link" :to="{ name: 'home' }">Home</router-link>
    <span v-if="isLoggedIn" @click="logout" class="header__link">Logout</span>
    <router-link v-else class="header__link" :to="{ name: 'login' }"
      >Login</router-link
    >
  </div>
</template>

<script>
import {
  getterTypes as userGetterTypes,
  actionTypes,
} from "@/store/modules/user";
import { mapGetters } from "vuex";
export default {
  name: "TodoHeader",
  computed: {
    ...mapGetters({
      isLoggedIn: userGetterTypes.isLoggedIn,
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch(actionTypes.logout);
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 25px;
}

.header__link {
  color: black;
  text-decoration: none;
  padding: 15px 0;
}
.header__link:first-of-type {
margin-right: 20px;
}

.router-link-active {
  text-decoration: underline;
}
.header__link:hover {
  color: gray;
}
</style>
