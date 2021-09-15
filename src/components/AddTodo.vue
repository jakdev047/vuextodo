<template>
    <div class="add-todo-page">
        <div class="container my-5">
            <h3>Add Todo</h3>
            <div class="add">
               <form @submit="onSubmit">
                   <input type="text" v-model="title" placeholder="Add Todo..."/>
                   <input type="submit" value="Submit"/>
                </form> 
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: 'add-todo-page',
        components: {},
        data:()=>({
            title: ''
        }),
        computed: {},
        methods:{
            ...mapActions({
                addTodo: 'addTodo'
            }),
            onSubmit(e) {
                e.preventDefault();
                this.addTodo(this.title);
            }
        },
        async created () {},
        mounted () {}, 
    }
</script>

<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883;
        outline: 0;
    }
    input[type="submit"] {
        flex: 2;
        background: #41b883;
        color: #fff;
        border: 1px solid #41b883;
        cursor: pointer;
    }
</style>
