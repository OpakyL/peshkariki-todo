<template>
  <div class="newTodoForm">
    <form>
      <input v-model="name" type="text" placeholder="Name of task" />
      <input
        v-model="description"
        type="text"
        placeholder="Task's description"
      />
      <button type="submit" @click.prevent="addNewTodo">Add</button>
    </form>
    <div v-if="validationErrors">{{ validationErrors }}</div>
  </div>
</template>

<script>
import {
  actionTypes as todoActionTypes,
  getterTypes as todoGetterTypes,
} from "@/store/modules/todoList";
import { getterTypes as userGetterTypes } from "@/store/modules/user";
import { mapGetters } from "vuex";
export default {
  name: "NewTodoForm",
  computed: {
    ...mapGetters({
      user: userGetterTypes.user,
      id: todoGetterTypes.lastId,
    }),
  },
  data() {
    return {
      name: "",
      description: "",
      validationErrors: null,
    };
  },
  methods: {
    validate() {
      if (!this.name.trim() || !this.description.trim()) {
        this.validationErrors = "Fields can't be blank!";
        return false;
      }
      if (this.name.trim().length > 20) {
        this.validationErrors = "Name can't be more than 20 letters";
        return false;
      }
      this.validationErrors = null;
      return true;
    },
    addNewTodo() {
      if (this.validate()) {
        const newTodo = {
          id: this.id,
          user: this.user,
          name: this.name.trim(),
          description: this.description.trim(),
          done: false,
        };
        this.$store.dispatch(todoActionTypes.addNewTodo, newTodo);
        this.name = "";
        this.description = "";
      }
    },
  },
};
</script>

<style scoped>
.newTodoForm div {
  text-align: center;
  color: red;
  margin-top: 15px;
}
.newTodoForm form {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 680px) {
  .newTodoForm form {
    flex-direction: column;
  }
  .newTodoForm input {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .newTodoForm button {
    width: 100%;
  }
}
</style>
