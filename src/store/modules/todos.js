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
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo", id);
  },
  async filterTodos({commit},e) {
    // get selected number
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    commit("setTodos", res.data);
  },
  async updateTodo({commit},payload) {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${payload.id}`,payload);
    commit("updateTodo", res.data);
  },
};
const mutations = {
  // The only way to actually change state in a Vuex store is by committing a mutation
  setTodos: (state, payload) => (state.todos = payload),
  newTodo: (state, payload) => state.todos.unshift(payload),
  removeTodo: (state, payload) => state.todos = state.todos.filter(todo=> todo.id !== payload),
  updateTodo: (state, payload) => {
    const index = state.todos.findIndex(todo => todo.id === payload.id);
    if(index !== -1) {
      state.todos.splice(index, 1,payload);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
