<template>
    <view style="position: relative;background-color: #F3F6FA;">
        <view style="position:relative">
            <image class="back" src="/static/home/组319.png"></image>
            <view style="position: absolute;left: 0;right: 0; top: 0; bottom: 0;">
                <view style="display: flex; margin-top: 66rpx;    line-height: 33rpx;">
                    <image class="location" src="/static/home/定位.png"></image>
                    <text style="margin-left:9rpx;color: #F8FAF9;">北京</text>
                    <view class="search"></view>
                    <image class="small" src="/static/home/icon-n.png"></image>
                </view>
            </view>
            <view class="column">
                <view class="center" style="display: grid; grid-auto-flow: column; grid-template-rows: auto auto;">
                    <image class="Administration" src="/static/home/组320.png"></image>
                    <view class="text">停车管理</view>
                    <image class="Administration" src="/static/home/组28.png"></image>
                    <view class="text">活动管理</view>
                    <image class="Administration" src="/static/home/组280.png"></image>
                    <view class="text">停车记录</view>
                    <image class="Administration" src="/static/home/组2800.png"></image>
                    <view class="text">自助停车</view>
                </view>
            </view>
        </view>
        <view style="padding-bottom: 200rpx;">
            <view class="recommend">车位租聘推荐</view>
            <view class="blue"></view>
            <Parks></Parks>
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

.location {
    width: 27rpx;
    height: 33rpx;
    margin-left: 32rpx;
    opacity: 1;

}

.search {
    width: 486rpx;
    height: 64rpx;
    background: #F8FAF9;
    opacity: 0.25;
    border-radius: 32rpx;
    margin-left: 24rpx;
    margin-top: -10rpx;
}

.small {
    width: 34rpx;
    height: 40rpx;
    margin-left: 28rpx;
}

.column {
    width: 686rpx;
    height: 228rpx;
    background: #FFFFFF;
    border-radius: 24rpx;
    margin-top: -100rpx;
    opacity: 1;
    margin-left: 32rpx;
    position: absolute;
    top: 603rpx;
}

.center {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    column-gap: 50rpx;
    row-gap: 25rpx;
    margin: 40rpx 44rpx 0 40rpx;
    justify-items: center;
}

.Administration {
    width: 92rpx;
    height: 92rpx;
}

.text {
    font-size: 28rpx;
    color: #121820;
}

.recommend {
    width: 216rpx;
    height: 36rpx;
    font-size: 36rpx;
    font-weight: bold;
    color: #121820;
    opacity: 1;
    margin-top: 210rpx;
    margin-left: 32rpx;
}

.blue {
    width: 216rpx;
    height: 16rpx;
    background: linear-gradient(90deg, #3366FD 0%, rgba(51, 102, 253, 0) 100%);
    border-radius: 10rpx;
    opacity: 1;
    margin-left: 32rpx;
}
</style>