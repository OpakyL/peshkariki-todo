const state = {
  data: "Guest",
  isLoggedIn: false,
};

export const mutationTypes = {
  loginSuccess: "[user] Login Success",
  logoutSuccess: "[user] Logout Success",
};

const mutations = {
  [mutationTypes.loginSuccess](state, payload) {
    state.data = payload;
    state.isLoggedIn = true;
  },
  [mutationTypes.logoutSuccess](state) {
    state.data = "Guest";
    state.isLoggedIn = false;
  },
};

export const actionTypes = {
  login: "[user] Login",
  logout: "[user] Logout",
};

const actions = {
  [actionTypes.login](context, user) {
    context.commit(mutationTypes.loginSuccess, user);
  },
  [actionTypes.logout](context) {
    context.commit(mutationTypes.logoutSuccess);
  },
};

export const getterTypes = {
  isLoggedIn: "[user] isLoggedIn",
  user: "[user] user",
};

const getters = {
  [getterTypes.isLoggedIn]: (state) => {
    return state.isLoggedIn;
  },
  [getterTypes.user]: (state) => {
    return state.data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
