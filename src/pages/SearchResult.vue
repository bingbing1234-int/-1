<template>
    <div>
        <h2 class="title">搜索的关键字为：关键字</h2>
        <PostList>
            <PostItem v-for=" n in 10"/>
        </PostList>
        <!-- <PostDetails /> -->
        <!-- <postUpload /> -->


    </div>
</template>

<script>
    import PostItem from '../components/PostItem.vue';
    import PostList from '../components/PostList.vue'

    export default {
        components: {
            PostItem,
            PostList
        }
    }
</script>

<style scoped>
.title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 44px;
}
</style>