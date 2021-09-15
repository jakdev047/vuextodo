<template>
    <div class="todos">
        <div class="container">
            <h1>{{pageTitle}}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todos-page',
        components: {},
        data:()=>({
            title: 'Todos Page'
        }),
        methods:{},
        async created () {},
        mounted () {},
        computed : {
            // to get data from store 
            pageTitle() { return this.$store.state.todos.title }
        }
    }
</script>
