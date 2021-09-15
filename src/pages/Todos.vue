<template>
    <div class="todos-page">
        <div class="container">
            <h1>{{pageTitle}}</h1>
            <add-todo />
            <div class="todos">
                <div v-for="todo in allTodos" :key="todo.id" class="todo">
                    {{todo.title}}
                    <i class="fa fa-trash" @click="deleteTodo(todo.id)"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AddTodo from '../components/AddTodo.vue';
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'todos-page',
        components: {
            AddTodo,
        },
        data:()=>({
            title: 'Todos Page'
        }),
        computed: {
            ...mapGetters({
                pageTitle: 'pageTitle',
                allTodos: 'allTodos'
            })
        },
        methods:{
            ...mapActions({
                getTodos: 'getTodos',
                deleteTodo: 'deleteTodo'
            })
        },
        async created () {
            this.getTodos();
        },
        mounted () {}, 
    }
</script>

<style scoped>
    .todos-page {
        margin: 0 0 30px;
    }
    .todos {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1rem;
    }
    .todo {
        border: 1px solid #ccc;
        background: #41b883;
        color: #fff;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }

    .todo i {
        position: absolute;
        right: 10px;
        bottom: 10px;
        cursor: pointer;
    }

</style>
