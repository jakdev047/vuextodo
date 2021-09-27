<template>
  <div class="vue-learning">
    <div class="container">
      <!-- <h1>{{title}}</h1> -->
      <h1 :class="classes">{{ welcomeMethod("Welcome") }}</h1>
      <p><a :href="profileLink" target="_blank">Profile</a></p>
      <div class="form-group">
        <input type="text" :value="title" class="form-control" />
      </div>
      <h3>{{ twData }}</h3>
      <div class="form-group">
        <input type="text" v-model="twData" class="form-control" />
      </div>
      <div>
        <h3>{{ number }}</h3>
        <div class="form-group">
          <button @click="incrementMethod(5)" class="btn btn-primary mr-2">
            +5
          </button>
          <button v-on:click="number--" class="btn btn-primary">-1</button>
        </div>
      </div>
      <div class="form-group">
        <button @click.alt="modifier" class="btn btn-primary">Modifier</button>
      </div>
      <p v-if="show">Show</p>
      <demo :propsTitle="propsTitle" @titleChange="titleChange"/>
      <div class="form-group">
        <div v-for="user in users" :key="user.id">
          <span>{{ user.id }}. </span>
          <span>{{ user.name | nameSnippet }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Demo from '../components/Demo.vue';
import axios from 'axios';
export default {
  name: "vue-learning",
  components: {
    Demo,
  },
  data: () => ({
    title: "Vue",
    profileLink: "https://jakdev047.github.io",
    classes: ["title", "title-style"],
    number: 50,
    twData: "Two Way Data Binding",
    show: false,
    propsTitle: 'Props Title',
    users: [],
  }),
  methods: {
    welcomeMethod(greetings) {
      return `${greetings} ${this?.title}`;
    },
    incrementMethod(increment) {
      this.number += increment;
    },
    modifier(){
      console.log("Modifier");
    },
    titleChange(payload) {
      console.log("payload",payload)
    },
    async getUsers(){
      const res  = await axios.get('https://jsonplaceholder.typicode.com/users');
      return res?.data;
    }
  },
  async created() {
    this.users = await this.getUsers();
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped>
    .title {
        font-size: 34px;
    }
    .title-style {
        font-style: italic;
    }
</style>
