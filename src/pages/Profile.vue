<template>
    <div class="profile">
        <div class="container">
            <h1>{{title}}</h1>
            <h4>{{profile_id}}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'profile',
        components: {},
        data(){
            return {
                title: 'Profile Page',
                profile_id: this.$route.params.id,
            }
        },
        methods:{
            profileId(){
                this.profile_id = this.$route.params.id
            }
        },
         watch: {
            $route: 'profileId'
        },
        async created () {},
        mounted () {},
        computed : {},
    }
</script>
