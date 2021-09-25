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
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-learning",
  components: {},
  data: () => ({
    title: "Vue",
    profileLink: "https://jakdev047.github.io",
    classes: ["title", "title-style"],
    number: 50,
    twData: "Two Way Data Binding",
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
    }
  },
  async created() {},
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
