<template>
    <div class="my-3">
        <p @click="childEvent(propsTitle)">{{propsTitle}}</p>
    </div>
</template>

<script>
    export default {
        name: "demo",
        props: ['propsTitle'],
        methods:{
            childEvent(title) {
                this.$emit("titleChange",{title})
            }
        }
    }
</script>