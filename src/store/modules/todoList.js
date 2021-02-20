const state = {
  data: [
    {
      id: 0,
      user: "diedara@mail.ru",
      name: "Buy milk",
      description: "I should go to local grocery today and buy some milk",
      done: false,
    },
    {
      id: 1,
      user: "Guest",
      name: "Do exercises",
      description:
        "Been a while since I've done some exercises. Better to do some today.",
      done: false,
    },
    {
      id: 2,
      user: "opakyl@mail.ru",
      name: "Brush my teeth",
      description:
        "I alway forget to brush my teeth at mornings. Probably this app will help me with this.",
      done: true,
    },
    {
      id: 3,
      user: "diedara@mail.ru",
      name: "Do something",
      description: "Should do something. Probably don't want to forget.",
      done: true,
    },
    {
      id: 4,
      user: "opakyl@mail.ru",
      name: "Make a funny joke",
      description: "Yep.",
      done: false,
    },
  ],
};

export const mutationTypes = {
  addNewTodoSuccess: "[todoList] Add New Todo Success",
  doTodoSuccess: "[todoList] Do Todo Success",
  deleteTodoSuccess: "[todoList] Delete Todo Success",
};

const mutations = {
  [mutationTypes.addNewTodoSuccess](state, payload) {
    state.data.push(payload);
  },
  [mutationTypes.doTodoSuccess](state, payload) {
    const index = state.data.findIndex((el) => el.id === payload);
    state.data[index].done = !state.data[index].done;
  },
  [mutationTypes.deleteTodoSuccess](state, payload) {
    state.data = state.data.filter((el) => el.id !== payload);
  },
};

export const actionTypes = {
  addNewTodo: "[todoList] Add New Todo",
  doTodo: "[todoList] Do Todo",
  deleteTodo: "[todoList] Delete Todo",
};

const actions = {
  [actionTypes.addNewTodo](context, newTodo) {
    context.commit(mutationTypes.addNewTodoSuccess, newTodo);
  },
  [actionTypes.doTodo](context, id) {
    context.commit(mutationTypes.doTodoSuccess, id);
  },
  [actionTypes.deleteTodo](context, id) {
    context.commit(mutationTypes.deleteTodoSuccess, id);
  },
};

export const getterTypes = {
  lastId: "[todoList] Get Last Id",
};

const getters = {
  [getterTypes.lastId]: (state) => {
    return state.data[state.data.length - 1].id + 1;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
