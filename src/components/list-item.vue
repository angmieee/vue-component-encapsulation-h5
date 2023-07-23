<template>
    <div v-on="$listeners" class="demo-item">
        <van-image class="img" fit="cover" round :src="item.avatar" />
        <div class="demo-item-right">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
        },
    },
    created() {
        console.log(this.$listeners);
    },
};
</script>
<style lang="scss">
.demo-item {
    background-color: #fff;
    display: flex;
    padding: 12px;

    .img {
        flex: 0 0 auto; /* 不可伸缩，不可压缩，基础大小由内容决定 */
        width: 50px;
        height: 50px;
        margin-right: 12px;
    }
    .demo-item-right {
        .title {
            margin-bottom: 12px;
        }
        .content {
            flex: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2; /* 显示两行 */
            /* 兼容 Firefox */
            display: -moz-box;
            -moz-box-orient: vertical;
        }
    }
}
</style>
