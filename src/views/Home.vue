<template>
  <div class="page home">
    <new-todo-form />
    <todo-list />
  </div>
</template>

<script>
import NewTodoForm from "@/components/NewTodoForm";
import TodoList from "@/components/TodoList";

export default {
  name: "TodoHome",
  components: { NewTodoForm, TodoList },
};
</script>
