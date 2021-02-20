<template>
  <div class="todoItem" :class="{ done: todo.done }">
    <div @click="doTodo" :class="{ clickable: isCurrentUser }">
      <strong> {{ todo.name }}</strong> <span>by {{ todo.user }}</span>
      <p>{{ todo.description }}</p>
    </div>
    <img
      v-if="isCurrentUser"
      @click="deleteTodo"
      src="@/assets/delete.png"
      alt="delete icon"
    />
  </div>
</template>

<script>
import { actionTypes as todoActionTypes } from "@/store/modules/todoList";
import { getterTypes as userGetterTypes } from "@/store/modules/user";
import { mapGetters } from "vuex";
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      currentUser: userGetterTypes.user,
    }),
    id: function() {
      return this.todo.id;
    },
    isCurrentUser: function() {
      return this.todo.user === this.currentUser;
    },
  },
  methods: {
    doTodo() {
      if (this.isCurrentUser) {
        this.$store.dispatch(todoActionTypes.doTodo, this.id);
      }
    },
    deleteTodo() {
      if (this.isCurrentUser) {
        this.$store.dispatch(todoActionTypes.deleteTodo, this.id);
      }
    },
  },
};
</script>

<style scoped>
.todoItem {
  position: relative;
  width: 100%;
  background: white;
  box-sizing: border-box;
  padding: 10px;
  padding-right: 75px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px gray;
  overflow-wrap: break-word;
  margin-bottom: 15px;
}
.done {
  color: green;
  text-decoration: line-through;
}
.clickable {
  cursor: pointer;
}
.todoItem img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width: 40px;
  cursor: pointer;
}
.todoItem span {
  font-size: 20px;
}
.todoItem p {
  margin: 0;
  font-size: 22px;
}
.todoItem:last-of-type {
  margin-bottom: 0;
}
</style>
