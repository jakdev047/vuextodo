<template>
    <div class="filter-todo-page">
        <div class="container my-2">
            <h5 class="text-left">Filter Todos</h5>
            <div class="row">
                <div class="col-lg-2">
                    <select @change="filterTodos($event)" class="form-control">
                        <option value="200">200</option>
                        <option value="100">100</option>
                        <option value="50">50</option>
                        <option value="20">20</option>
                        <option value="10">10</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "filter-todo-page",
        methods:{
            ...mapActions({
                filterTodos: 'filterTodos'
            }),
        },
    }
</script>

<style scoped>

</style>