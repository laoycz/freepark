<template>
    <view class="relative">

        <image class="logo bg-cover" src="/static/蒙版组-12.png"></image>
        <view class="absolute inset-0">
            <navigator url="/pages/sign/index" open-type="redirect">
                <view class="bbb text-sm font-normal mt-3 ml-80">登录</view>
            </navigator>
            <view class="line grid grid-cols-2 ml-16">
                <view>自由停</view>
                <view>随我行</view>
            </view>
            <view class="color"></view>
            <view class="text">给你停车自由</view>
            <view class="border">
                <navigator url="/pages/home/index" open-type="redirect" style="border-radius: 42rpx;">
                    <button class="start">立即开启</button>
                </navigator>
            </view>
        </view>
    </view>
</template>
<style>
.logo {
    width: 750rpx;
    height: 1624rpx;
}

.bbb {
    color: #8f8f94;
}

.line {
    margin-top: 1054rpx;
    font-size: 58rpx;
    font-weight: bold;
    letter-spacing: 18rpx;
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
    margin: 40rpx 0 0 200rpx;
}

.border {
    width: 336rpx;
    height: 84rpx;
    background: linear-gradient(180deg, #3366FD 0%, #5DAAFE 100%);
    box-shadow: 0px 12px 24px rgba(51, 102, 253, 0.3);
    border-radius: 42rpx;
    margin: 132rpx 0 0 208rpx;
}

.start {
    background-color: transparent;
    width: 336rpx;
    height: 84rpx;
    border-radius: 42rpx;
    color: #FFFFFF;
    line-height: 84rpx;
    font-size: 36rpx;
}
</style>