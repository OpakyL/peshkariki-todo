import { createStore, createLogger } from "vuex";
import todoList from "@/store/modules/todoList";
import user from "@/store/modules/user";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { todoList, user },
  plugins: [createLogger()],
});
