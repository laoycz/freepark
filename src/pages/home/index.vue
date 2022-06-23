<template>
    <view class="reletive" style="background-color: #F3F6FA;">
        <view class="reletive">
            <image class="back" src="/static/home/组319.png"></image>
            <view class="absolute inset-0">
                <view class="flex mt-8 leading-3">
                    <image class="ml-4 w-3 h-4" src="/static/home/定位.png"></image>
                    <text style="margin-left:9rpx;color: #F8FAF9;">北京</text>
                    <view class="search ml-3 h-8 w-60 rounded-2xl opacity-25"></view>
                    <image class="ml-4 h-5 w-4" src="/static/home/icon-n.png"></image>
                </view>
            </view>
            <view class="left-7 top-64  bg-white absolute rounded-xl">
                <view class="center grid grid-flow-col grid-rows-2 text-sm gap-x-6 gap-y-3">
                    <image class="Administration" src="/static/home/组320.png"></image>
                    <view>停车管理</view>
                    <image class="Administration" src="/static/home/组28.png"></image>
                    <view>活动管理</view>
                    <image class="Administration" src="/static/home/组280.png"></image>
                    <view>停车记录</view>
                    <image class="Administration" src="/static/home/组2800.png"></image>
                    <view>自助停车</view>
                </view>
            </view>
        </view>
        <view class="pt-24 pb-28">
            <view class="text-black pl-4 text-lg font-bold">车位租聘推荐</view>
            <view class="blue rounded-lg h-2 w-24 ml-4"></view>
            <Parks :limit="2"></Parks>
        </view>
        <Nav page="home"></Nav>
    </view>
</template>
<script>
import Parks from "../park/parks.vue"
import Nav from "./nav.vue"
export default {
    components: { Parks, Nav }
}
</script>
<style scoped>
.back {
    width: 750rpx;
    height: 576rpx;
    background-size: cover;

}

.search {
    background: #F8FAF9;
    margin-top: -10rpx;
}

.center {
    padding: 40rpx 44rpx 0 40rpx;
}

.Administration {
    width: 92rpx;
    height: 92rpx;
}
.blue {
    background: linear-gradient(90deg, #3366FD 0%, rgba(51, 102, 253, 0) 100%);
    margin-top: -15rpx;
}
</style>