<template>
    <div class="page">
        <van-tabs animated v-model="active">
            <van-tab v-for="tab in tabs" :title="tab" :key="tab">
                <custom-list>
                    <template v-slot:default="{ items: list }">
                        <list-item
                            v-for="(item, index) in list"
                            :item="item"
                            :key="index"
                            @click="handleClick(index)"
                        />
                    </template>
                </custom-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomList from './components/CustomList/custom-list.vue';
import ListItem from './components/list-item.vue';

const active = ref('0');

const handleClick = (index) => {
    console.log('this.$router.push' + index);
};

const tabs = ref(['穿搭', '旅行', '摄影']);
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.page {
    min-height: 100vh;
    background-color: #d5e9fb;
    padding: 12px;
}
</style>
