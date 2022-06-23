<template>
    <view class="body pb-24" style="background-color:#F3F6FA;">
        <view>
            <view class="header">
                <view class="flex pt-12">
                    <navigator url="/pages/home/index" open-type="redirect" class="pl-6 w-8 h-8">
                        <image class="pl-4 w-4 h-4" src="/static/activity/返回.png"></image>
                    </navigator>
                    <view class="pl-24 text-xl font-normal text-white">活动管理</view>
                </view>
                <view class="eng pt-6">
                    <text>最新上线</text>
                    <text>新户专享</text>
                    <text>天天神券</text>
                </view>
            </view>
            <view class=" flex justify-center">
                <view class=" text-l font-bold text-black leading-7">
                    <view class="border" style="margin-top:-112rpx;">
                        <image class="pic" src="/static/activity/蒙版组12.png"></image>
                        <view class="black">新户专享|新用户专享 首单免费停</view>
                    </view>
                    <view class="border">
                        <image class="pic" src="/static/activity/蒙版组11.png"></image>
                        <view class="black">热门奖券|注册有好礼 加油有优惠</view>
                    </view>
                    <view class="border">
                        <image class="pic" src="/static/activity/蒙版组.png"></image>
                        <view class="black">新户专享|停车优惠 好礼享不停</view>
                    </view>
                </view>
            </view>
            <Nav page="activity"></Nav>
        </view>
    </view>
</template>
<script>
import Nav from "../home/nav.vue";
export default {
    components: { Nav }
}
</script>
<style scoped>
.body {
    font-size: 28rpx;
    font-weight: bold;
}

.header {
    width: 100%;
    height: 380rpx;
    background: linear-gradient(76deg, #0E52E6 0%, #0E6FF3 100%);
    border-radius: 0 0 48rpx 48rpx;
}

.eng {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
}

.border {
    width: 686rpx;
    height: 356rpx;
    background-color: #FFFFFF;
    border: 1rpx solid #F3F6FA;
    border-radius: 24rpx;
    margin-top: 32rpx;
}

.pic {
    width: 684rpx;
    height: 260rpx;
    border-radius: 24rpx 24rpx 0 0;
}

.black {
    padding-left: 32rpx;
}
</style>