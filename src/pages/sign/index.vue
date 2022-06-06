<template>
    <view class="body">
        <view class="header" style="margin: 46rpx 32rpx 122rpx 32rpx;">
            <image style="width: 34rpx; height: 34rpx;" src="/static/sign/close.png "></image>
            <view style="font-size: 28rpx; font-weight: 400; color: #121820;">去注册</view>
        </view>
        <view style="margin-left: 78rpx;">
            <view class="welcome">早上好，</view>
            <view class="welcome" style="margin: 36rpx 0 120rpx 0;">欢迎登录自由停</view>
            <view class="phine">手机号码</view>
            <view class="input">请输入您的手机号码</view>
            <view class="line"></view>
            <view class="phine" style="margin-top: 62rpx;">验证码</view>
            <view class="header" style="margin-right: 90rpx;">
                <view class="input">请输入您收到的短信验证码</view>
                <view class="obtain">获取验证码</view>
            </view>
            <view class="line"></view>
        </view>
        <view class="sign">登录</view>
        <view class="center">
            <image class="picture" src="/static/sign/qq.png"></image>
            <image class="picture" src="/static/sign/wechat.png"></image>
            <image class="picture" src="/static/sign/micro.png"></image>
        </view>
        <view class="end">注册代表你已阅读并同意《用户协议》和《隐私协议》</view>
    </view>
</template>
<style>
.body {
    width: 750rpx;
    height: 1562rpx;
    background-color: #FFFFFF;
}

.header {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
}

.welcome {
    font-size: 56rpx;
    font-weight: bold;
    color: #121820;
    font-size: 56rpx;
}

.phine {
    font-size: 28rpx;
    font-weight: bold;
    color: #121820;
}

.input {
    font-size: 24rpx;
    font-weight: 400;
    color: #B4BBC6;
    margin-top: 44rpx;
}

.line {
    width: 576rpx;
    height: 0;
    border: 2rpx solid #E3E8EE;
    margin-top: 32rpx;
}

.obtain {
    font-size: 24rpx;
    font-weight: 400;
    color: #121820;
    margin-top: 44rpx;
}

.sign {
    width: 576rpx;
    height: 100rpx;
    background: linear-gradient(180deg, #3366FD 0%, #5DAAFE 100%);
    box-shadow: 0px 12rpx 24rpx rgba(51, 102, 253, 0.3);
    border-radius: 50rpx;
    margin-top: 100rpx;
    margin-left: 86rpx;
    line-height: 100rpx;
    text-align: center;
    font-size: 36rpx;
    font-weight: 400;
    color: #B4BBC6;
}

.picture {
    width: 96rpx;
    height: 96rpx;
}

.center {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    margin: 268rpx 166rpx 50rpx 168rpx;
}

.end {
    font-size: 22rpx;
    font-weight: 400;
    color: #B4BBC6;
    margin-left: 110rpx;
}
</style>
