<template>
  <div class="todoList">
    <div class="sort">
      <select @change="changeSort($event)">
        <option selected value="none">No sort</option>
        <option value="userAsc">By user ↑</option>
        <option value="userDesc">By user ↓</option>
        <option value="nameAsc">By name ↑</option>
        <option value="nameDesc">By name ↓</option>
        <option value="statusAsc">By status ↑</option>
        <option value="statusDesc">By status ↓</option>
      </select>
    </div>
    <todo-item
      v-for="todo in pagedTodo[currentPage]"
      :key="todo"
      :todo="todo"
    />
    <todo-pagination :currentPage="currentPage + 1" :pagesCount="pagesCount" @changePage="changePage" />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import TodoPagination from "@/components/Pagination";
import { mapState } from "vuex";
export default {
  name: "TodoList",
  data() {
    return {
      sort: "none",
      currentPage: 0,
    };
  },
  computed: {
    ...mapState({
      todoList(state) {
        const list = [...state.todoList.data];

        switch (this.sort) {
          case "userAsc":
            return list.sort((a, b) => {
              return this.compare(a.user, b.user);
            });
          case "userDesc":
            return list.sort((a, b) => {
              return this.compare(b.user, a.user);
            });
          case "nameAsc":
            return list.sort((a, b) => {
              return this.compare(a.name, b.name);
            });
          case "nameDesc":
            return list.sort((a, b) => {
              return this.compare(b.name, a.name);
            });
          case "statusAsc":
            return list.sort((a, b) => {
              return this.compare(a.done, b.done);
            });
          case "statusDesc":
            return list.sort((a, b) => {
              return this.compare(b.done, a.done);
            });
          default:
            return state.todoList.data;
        }
      },
    }),
    pagedTodo() {
      const itemsPerPage = 3;
      let i,
        j,
        newArr = [];
      for (i = 0, j = this.todoList.length; i < j; i += itemsPerPage) {
        newArr.push(this.todoList.slice(i, i + itemsPerPage));
      }

      return newArr;
    },
    pagesCount() {
      return Math.ceil(this.todoList.length / 3);
    },
  },
  methods: {
    compare(a, b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    },
    changeSort(e) {
      this.sort = e.target.value;
    },
    changePage(e) {
      this.currentPage = e.target.innerText - 1;
    },
  },
  components: {
    TodoItem,
    TodoPagination,
  },
};
</script>

<style scoped>
.todoList {
  margin-top: 15px;
}
.sort {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}
.sort select {
  width: 150px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid gray;
}
.sort select:focus {
  outline: none;
}
</style>
