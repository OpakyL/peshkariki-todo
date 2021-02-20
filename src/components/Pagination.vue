<template>
  <div class="pagination">
    <span
      @click="onClick($event)"
      :class="{ active: currentPage === page }"
      v-for="page in pagesArr"
      :key="page"
      >{{ page }}</span
    >
  </div>
</template>

<script>
export default {
  name: "TodoPagination",
  props: {
    pagesCount: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pagesArr() {
      let newArr = [];
      for (let i = 0; i < this.pagesCount; i++) {
        newArr.push(i + 1);
      }

      return newArr;
    },
  },
  methods: {
    onClick(e) {
      this.$emit("changePage", e);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pagination span {
  margin-bottom: 15px;
  padding: 5px 15px;
  cursor: pointer;
  background: white;
  margin-right: 10px;
  border: 2px solid gray;
  border-radius: 10px;
}
.pagination span:last-of-type {
  margin-right: 0;
}
.active {
  text-decoration: underline;
}
</style>
