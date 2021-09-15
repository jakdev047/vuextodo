import axios from "axios";

const state = {
  title: "Todos",
  todos: [],
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
  async getTodos({ commit }) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    commit("setTodos", res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      title,
      complete: false,
    });
    commit("newTodo", res.data);
  },
};
const mutations = {
  // The only way to actually change state in a Vuex store is by committing a mutation
  setTodos: (state, payload) => (state.todos = payload),
  newTodo: (state, payload) => state.todos.unshift(payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
