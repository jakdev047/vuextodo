<template>
    <div class="vue-learning">
        <div class="container">
            <!-- <h1>{{title}}</h1> -->
            <h1>{{welcomeMethod('Welcome')}}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vue-learning',
        components: {},
        data:()=>({
            title: 'Vue'
        }),
        methods:{
            welcomeMethod(greetings) {
                return `${greetings} ${this?.title}`;
            }
        },
        async created () {},
        mounted () {},
        computed : {}
    }
</script>
