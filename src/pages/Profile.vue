<template>
    <div class="profile">
        <div class="container">
            <h1>{{title}}</h1>
            <h4>{{profile_id}}</h4>
            <div class="my-2">
                <button type="button" class="btn btn-primary ml-2" @click="aboutPage">
                    About
                </button>
                <button type="button" class="btn btn-warning ml-2" @click="previousPage">
                    Previous Page
                </button>
                <button type="button" class="btn btn-success ml-2" @click="nextPage">
                    Next
                </button>
            </div>
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
            },
            aboutPage() {
                this.$router.push({name: 'about-page'})
            },
            nextPage() {
                this.$router.go(-1)
            },
            previousPage() {
                this.$router.go(1)
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
