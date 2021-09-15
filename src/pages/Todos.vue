<template>
    <div class="todos-page">
        <div class="container">
            <h1>{{pageTitle}}</h1>
            <add-todo />
            <filter-todo />
            <div class="legend">
                <span>Double click to mark as complete</span>
                <span>
                    <span class="incomplete-box"></span> = Incomplete
                </span>
                <span>
                    <span class="complete-box"></span> = Complete
                </span>
            </div>
            <div class="todos">
                <div 
                    v-for="todo in allTodos" :key="todo.id" 
                    class="todo" 
                    @click="onClick(todo)" 
                    v-bind:class="{'is-complete':todo.completed}"
                >
                    {{todo.title}}
                    <i class="fa fa-trash" @click="deleteTodo(todo.id)"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AddTodo from '../components/AddTodo.vue';
    import FilterTodo from '../components/FilterTodo.vue';
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'todos-page',
        components: {
            AddTodo,
            FilterTodo
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
                deleteTodo: 'deleteTodo',
                updateTodo: 'updateTodo'
            }),
            onClick(todo){
                const payload = {
                    id: todo.id,
                    title: todo.title,
                    completed: !todo.completed
                }
                this.updateTodo(payload);
            }
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

    .legend {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }

    .incomplete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
    }

    .complete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #35495e;
    }

    .is-complete {
        background: #35495e;
    }

    @media (max-width: 500px) {
        .todos {
            grid-template-columns: 1fr;
        }
    }

</style>
