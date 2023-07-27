<template>
    <van-pull-refresh class="wrap" v-model="refreshing" @refresh="onRefresh">
        <van-list
            class="list"
            v-model="loading"
            :finished="finished"
            offset="10"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <slot :items="list"></slot>
        </van-list>
    </van-pull-refresh>
</template>

<script>
import { PullRefresh, List } from 'vant';

export default {
    components: {
        PullRefresh,
        List,
    },
    data() {
        return {
            list: [], // 要渲染数据的列表
            loading: false, // van-list 加载状态
            finished: false, // van-list 是否已加载完成，加载完成后不再触发load事件
            refreshing: false, // van-pull-refresh 下拉加载中状态
            // 查询参数
            listQuery: {
                page: 1, // 当前页码数
                limit: 10, // 一页显示10条
            },
        };
    },
    methods: {
        // 上拉加载
        onLoad() {
            this.getList();
        },
        // 下拉刷新
        async onRefresh() {
            // 先将 finished 状态设为 true 防止触发上拉加载
            this.finished = true;
            // 初始化查询参数
            this.listQuery.page = 1;
            await this.getList();
            // 刷新结束
            this.refreshing = false;
        },
        mockRequest(params) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const list = [];
                    for (let i = 0; i < 3; i++) {
                        list.push(this.list.length + 1);
                    }

                    const items = list.map(() => ({
                        avatar: 'https://img01.yzcdn.cn/vant/cat.jpeg',
                        title: 'Lorem',
                        content:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci quisquam recusandae atque sequi fugit, dicta aliquid aperiam vel ipsa qui exercitationem fuga voluptatibus sit, sint eligendi eum quas natus!',
                    }));
                    resolve({
                        data: {
                            data: {
                                items,
                                page: 1,
                                total: 3,
                            },
                        },
                    });
                }, 1000);
            });
        },
        // 获取列表
        async getList() {
            // 请求得到会议列表，并传参传递请求页码和单页列表数量limit
            const res = await this.mockRequest(this.listQuery);

            if (this.listQuery.page === 1) {
                // 第一次进入页面
                this.list = res.data.data.items;
            } else {
                // 如果不是则在后面追加数据
                res.data.data.items.forEach((item) => {
                    this.list.push(item);
                });
            }

            // 如果数据没有加载完毕
            if (this.list.length < res.data.data.total) {
                this.listQuery.page++;
                this.finished = false;
            } else {
                this.finished = true;
            }

            // 请求完成后关闭loading
            this.loading = false;
        },
    },
};
</script>

<style lang="scss">
.list {
    height: 80vh;
}
</style>
