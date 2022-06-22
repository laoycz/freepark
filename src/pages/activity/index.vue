<template>
    <view class="body" style="background-color:#F3F6FA; width: 750rpx; height: 1562rpx;">
        <view>
            <view class="header">
                <view style="display:flex; padding-top: 66rpx;">
                    <navigator url="/pages/home/index" open-type="redirect"
                        style="width: 31rpx; height: 31rpx; padding-left: 42rpx;">
                        <image class="return" src="/static/activity/返回.png"></image>
                    </navigator>
                    <view class="title">活动管理</view>
                </view>
                <view class="eng">
                    <text>最新上线</text>
                    <text>新户专享</text>
                    <text>天天神券</text>
                </view>
            </view>
            <view style="margin-left:32rpx;">
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
.header {
    width: 750rpx;
    height: 380rpx;
    background: linear-gradient(76deg, #0E52E6 0%, #0E6FF3 100%);
    border-radius: 0 0 48rpx 48rpx;
}

.return {
    width: 31rpx;
    height: 31rpx;
    margin-left: 42rpx;
}

.title {
    font-size: 40rpx;
    color: #FFFFFF;
    font-weight: 400;
    margin-left: 222rpx;
}

.eng {
    margin: 64rpx 102rpx 0 104rpx;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
}
.body {
    font-size: 28rpx;
    font-weight: bold;
    color: #FFFFFF;
}

.border {
    width: 686rpx;
    height: 356rpx;
    background-color: #FFFFFF;
    border-radius: 24rpx;
    box-shadow: 0px 4px 16px rgba(16, 146, 82, 0.08);
    margin-top: 32rpx;
}

.pic {
    width: 686rpx;
    height: 260rpx;
    border-radius: 24rpx 24rpx 0 0;
}

.black {
    font-size: 28rpx;
    font-weight: bold;
    color: #121820;
    margin-left: 32rpx;
    line-height: 80rpx;
}

</style>