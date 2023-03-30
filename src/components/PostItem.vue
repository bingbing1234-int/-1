<template>
    <div class="postItem">
        <img src="" alt="" width="100%" height="100%" style="background: #eee;" />

        <div class="postInfo">
            <div class="postMeta">
                <!-- 用户头像 -->
                <TheAvatar :width="20" :height="20" style="cursor: pointer;"></TheAvatar>
                <!-- <img src="" alt="1" class="avatar"> -->
                <!-- 用户名称 -->
                <span>张三</span>
                <!-- 发布时间 -->
                <span class="postPubDate">12小时前发布</span>
                <!-- 发布后的行为,点赞\收藏\ -->
                <PostActions />
            </div>
            <div class="postDesc">
                <p>
                    我是描述我是描述我是描述我是
                    #话题 #话题 #111
                </p>
            </div>

        </div>

    </div>
</template>

<script>
import PostActions from './PostActions.vue';
    export default {
        components:{
            PostActions
        }

    }
</script>

<style scoped>


.postItem {
        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
        border-radius: 8px;

    }

    .postInfo {
        padding: 24px;
    }

    .postItem>img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        background: #eee;
        cursor: pointer;
    }

    .postMeta {
        display: grid;
        grid-template-areas:
            "avatar name actions"
            "pubDate pubDate actions";
        grid-template-columns: 42px 1fr 3fr;
        row-gap: 6px;
    }

    .postMeta .avatar {
        grid-area: avatar;
        width: 34x;
        height: 34px;
        background: #eee;
        border-radius: 50%;
    }

    .postMeta .postPubDate {
        grid-area: pubDate;
        color: #9f9f9f;
        font-size: 14px;
    }

    .postActions {
        grid-area: actions;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;

        justify-self: end;
        justify-items: center;
        column-gap: 16px;
        row-gap: 4px;
    }

    .postActions> :deep(svg) {
        width: 32px;
        height: 32px;
        grid-row: 1/2;
    }

    .postDesc {
        margin-top: 28px;
        white-space: pre-line;
    }
</style>