const state = {
  title: "Todos",
  todos: [
    { id: 1, title: "Todo One" },
    { id: 2, title: "Todo Two" },
    { id: 3, title: "Todo Three" },
  ],
};

const getters = {
  // data store in state
  pageTitle: (state) => {
    return state.title;
  },
  allTodos: (state) => {
    return state.todos;
  },
};

const actions = {
  // get data source method
};
const mutations = {
  // The only way to actually change state in a Vuex store is by committing a mutation
};

export default {
  state,
  getters,
  actions,
  mutations,
};
