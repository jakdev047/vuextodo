<template>
    <div class="home">
        <div class="container">
            <h1>{{title}}</h1>
            <h2>{{homeState}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home-page',
        components: {},
        data:()=>({
            title: 'Home Page'
        }),
        methods:{},
        async created () {},
        mounted () {},
        computed : {
            homeState() { return this.$store.state.homeModule.homeState }
        }
    }
</script>
