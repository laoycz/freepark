<template>
    <view style="background-color:#F3F6FA; width: 750rpx; height: 1624rpx;">
        <view>
            <image class="header" src="/static/activity/top.png" >
                <view style="position: absolute; top: 86rpx; left: 22rpx;">
                    <view style="display:flex;">
                         <navigator url="/pages/home/index" open-type="redirect" style="width: 31rpx; height: 31rpx; padding-left: 42rpx;">
                        <image class="return" src="/static/activity/返回.png"></image>
                        </navigator>
                        <view class="title">活动管理</view>
                    </view>
                    <view style="margin-top: 64rpx;">
                        <text class="text" style="margin-left: 62rpx;">最新上线</text>
                        <text class="text" style="margin-left: 104rpx;">新户专享</text>
                        <text class="text" style="margin-left: 104rpx;">天天神券</text>
                    </view>
                </view>
            </image>
            <view style="margin-left:32rpx;">
                <view class="border" style="position: absolute; top: 306rpx;">
                <image class="pic" src="/static/activity/蒙版组12.png"></image>
                <view class="black">新户专享|新用户专享 首单免费停</view>
                </view>
                <view class="border" style="margin-top: 308rpx;">
                <image class="pic" src="/static/activity/蒙版组11.png"></image>
                <view class="black">热门奖券|注册有好礼 加油有优惠</view>
                </view>
                <view class="border" style="margin-top: 32rpx;">
                <image class="pic" src="/static/activity/蒙版组.png"></image>
                <view class="black">新户专享|停车优惠 好礼享不停</view>
                </view>
            </view>
            <view class="end">
                <view style="width:112rpx; height:67rpx; margin-top: 26rpx; margin-left: 48rpx;">
                    <navigator url="/pages/home/index" open-type="redirect">
                        <image class="bbb" src="/static/home/组321.png"></image>
                        <view class="ccc">首页</view>
                    </navigator>
                </view>
                <view style="width:112rpx; height:67rpx; margin-top: 26rpx; margin-left: 62rpx;">
                    <navigator url="/pages/park/index" open-type="redirect">
                        <image class="bbb" src="/static/home/停车管理.png"></image>
                        <view class="ccc">停车场</view>
                    </navigator>
                </view>
                <view style="width:112rpx; height:67rpx; margin-top: 26rpx; margin-left: 62rpx;">
                    <navigator url="/pages/activity/index" open-type="redirect">
                        <image class="bbb" src="/static/home/活动.png"></image>
                        <view class="ccc">活动</view>
                    </navigator>
                </view>
                <view style="width:112rpx; height:67rpx; margin-top: 26rpx; margin-left: 82rpx;">
                <navigator url="/pages/my/index" open-type="redirect">
                    <image class="bbb" src="/static/home/我的.png"></image>
                    <view class="ccc">我的</view>
                    </navigator>
                </view>
            </view>
        </view>
    </view>
</template>
<style>
.header {
    width: 100%;
    height: 380rpx;
    position: relative;
}

.return {
    width: 31rpx;
    height: 31rpx;
}

.title {
    font-size: 40rpx;
    color: #FFFFFF;
    font-weight: 400;
    margin-left: 188rpx;
}

.text {
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

.end {
    width: 750rpx;
    height: 166rpx;
    margin-top: 26rpx;
    background-color: #FFFFFF;
    display: flex;
}

.bbb {
    width: 35rpx;
    height: 34rpx;
    margin-left: 39rpx;
}

.ccc {
    font-size: 20rpx;
    color: #121820;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16rpx;
}
</style>