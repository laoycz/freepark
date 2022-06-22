<template>
    <navigator style="height:100%;" :url="`/pages/${to}/index`" open-type="redirect">
        <view class="endd">
            <image class="icon" v-if="page == to" :src="`/static/nav/${to}-1.png`"></image>
            <image class="icon" v-else :src="`/static/nav/${to}.png`"></image>
            <view class="label" v-if="page == to" style="color: #3366FD;">{{label}}</view>
            <view class="label" v-else>{{label}}</view>
        </view>
    </navigator>
</template>

<script>
export default {
    props:["to","label","page"]
}
</script>
<style scoped>
.endd {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.icon {
    width: 35rpx;
    height: 34rpx;
}

.label {
    font-size: 20rpx;
    color: #121820;
    margin-top: 16rpx;
}
</style>