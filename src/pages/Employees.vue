<template>
    <div class="employees-page">
        <div class="container">
            <h1>{{employeesTitle}}</h1>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'employees-page',
        components: {},
        data:()=>({
            title: 'Employees Page'
        }),
        computed: {
            ...mapGetters({
                employeesTitle: 'employeesTitle',
            })
        },
        methods:{},
        async created () {},
        mounted () {}, 
    }
</script>

<style scoped></style>
