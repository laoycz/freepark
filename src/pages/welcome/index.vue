<template>
    <view class="logo" style="background-image:url(/static/蒙版组-12.png)">
        <view style="display:flex">
            <view class="line" style="margin-left:172rpx;">自由停</view>
            <view class="line" style="margin-left:16rpx;">随我行</view>
        </view>
        <view class="color"></view>
        <view class="text">给你停车自由</view>
        <view class="border">
            <navigator url="/pages/home/index" open-type="redirect">
                <button>立即开启</button>
            </navigator>
        </view>
    </view>
</template>
<style>
.logo {
    width: 750rpx;
    height: 1624rpx;
    background-size: cover;
}

.line {
    margin-top: 1054rpx;
    height: 76rpx;
    font-size: 58rpx;
    font-weight: bold;
    color: #121820;
    letter-spacing: 18rpx;
    opacity: 1;
}

.color {
    width: 408rpx;
    height: 22rpx;
    margin-left: 172rpx;
    border-radius: 12rpx;
    background: linear-gradient(90deg, #3366FD 0%, rgba(51, 102, 253, 0) 100%);
    margin-top: -13rpx;
}

.text {
    font-size: 40rpx;
    width: 400rpx;
    height: 40rpx;
    font-weight: 400;
    line-height: 34rpx;
    color: #B4BBC6;
    letter-spacing: 25rpx;
    margin-top: 40rpx;
    margin-left: 200rpx;
}

.border {
    width: 336rpx;
    height: 84rpx;
    background: linear-gradient(180deg, #3366FD 0%, #5DAAFE 100%);
    box-shadow: 0px 12px 24px rgba(51, 102, 253, 0.3);
    border-radius: 42rpx;
    margin-left: 208rpx;
    margin-top: 132rpx;
}
</style>