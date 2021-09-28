<template>
    <div class="profile">
        <div class="container">
            <h1>{{title}}</h1>
            <h4>{{profileId}}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'profile',
        components: {},
        data:()=>({
            title: 'Profile Page',
            profile_id: '',
        }),
        methods:{},
        async created () {},
        mounted () {},
        computed : {
            profileId(){
                return this.$route.params.profile_id
            }
        }
    }
</script>
