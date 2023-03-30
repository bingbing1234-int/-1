<template>
    <div>
        <PostList>
            <PostItem v-for=" n in 10"/>
        </PostList>
        <!-- <PostDetails /> -->
        <PostUpload />


    </div>
</template>

<script>

    import PostItem from '../components/PostItem.vue';
    import PostList from '../components/PostList.vue'
    import PostUpload from '../components/PostUpload.vue';

    export default {
        components: {

            PostItem,
            PostList,
            PostUpload
        }
    }
</script>

<style scoped>
</style>