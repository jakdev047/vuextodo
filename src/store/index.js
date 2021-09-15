import Vue from "vue";
import Vuex from "vuex";

// all modules import
import HomePageModule from "./modules/home";
import TodosModule from "./modules/todos";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    homeModule: HomePageModule,
    todos: TodosModule,
  },
  state: {
    // data initialize
  },
  actions: {
    // get data source method
  },
  mutations: {
    // The only way to actually change state in a Vuex store is by committing a mutation
  },
  getters: {
    // data store in state
  },
});

export default store;
