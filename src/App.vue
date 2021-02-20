<template>
  <div class="container">
    <todo-header />
    <router-view />
  </div>
</template>

<script>
import TodoHeader from "@/components/Header.vue";
export default {
  name: "TodoApp",
  components: {
    TodoHeader,
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}
@media screen and (max-width: 1280px) {
  .container {
    width: 900px;
  }
}
@media screen and (max-width: 980px) {
  .container {
    width: 600px;
  }
}
@media screen and (max-width: 680px) {
  .container {
    width: 500px;
  }
}
@media screen and (max-width: 550px) {
  .container {
    width: 350px;
  }
}
@media screen and (max-width: 380px) {
  .container {
    width: 300px;
  }
}
</style>
