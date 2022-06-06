<template>
    <view style="background-color: #F3F6FA; width: 750rpx; height: 1624rpx;">
        <view class="header">
            <view style="display:flex;padding-top: 50rpx;">
                <navigator url="/pages/my/index" open-type="redirect">
                    <image style="width:31rpx; height:31rpx;margin-left:42rpx;" src="/static/activity/返回.png"></image>
                </navigator>
                <view class="white" style="font-size:40rpx; margin-left: 222rpx;">停车记录</view>
            </view>
        </view>
        <view>
            <view class="border" style="margin-top: -80rpx;">
                <view style="margin-left: 32rpx;">
                    <view style="display:flex;align-items:center;">
                        <text class="text">天山体育馆停车场</text>
                        <view class="bbb" style="margin-left: 256rpx;">5.00</view>
                        <view class="ccc">元</view>
                    </view>
                    <view class="grey" style="margin-top: 24rpx;">北京市朝阳区天山大街387号天山体育馆</view>
                    <view style="display: flex;align-items: center;margin-top: 48rpx;">
                        <view class="circular aaa"></view>
                        <view class="grey">进场时间</view>
                        <view class="date">2022-03-28 08:23:16</view>
                    </view>
                    <view style="display: flex;align-items: center;margin-top: 26rpx;">
                        <view class="circular orange"></view>
                        <view class="grey">出场时间</view>
                        <view class="date">2022-03-28 11:02:57</view>
                    </view>
                    <view class="line"></view>
                    <view class="money">
                        <view class="date" style="margin-left: -10rpx;">停车2小时48分</view>
                        <view class="ddd">评分</view>
                    </view>
                </view>
            </view>
            <view class="border" style="margin-top: 32rpx;">
                <view style="margin-left: 32rpx;">
                    <view style="display:flex;align-items:flex-end;">
                        <text class="text">百货大楼停车场</text>
                        <view class="bbb" style=" margin-left: 266rpx;">28.00</view>
                        <view class="ccc">元</view>
                    </view>
                    <view class="grey" style="margin-top: 24rpx;">北京市东城区王府井大街255号百货大楼B2</view>
                    <view style="display: flex;align-items: center;margin-top: 48rpx;">
                        <view class="circular aaa"></view>
                        <view class="grey">进场时间</view>
                        <view class="date">2022-03-25 07:35:08</view>
                    </view>
                    <view style="display: flex;align-items: center;margin-top: 26rpx;">
                        <view class="circular orange"></view>
                        <view class="grey">出场时间</view>
                        <view class="date">2022-03-26 15:42:26</view>
                    </view>
                    <view class="line"></view>
                    <view class="money">
                        <view class="date" style="margin-left: -10rpx;">停车1天8小时07分</view>
                        <view class="ddd">评分</view>
                    </view>
                </view>
            </view>
            <view class="border" style="margin-top: 32rpx;">
                <view style="margin-left: 32rpx;">
                    <view style="display:flex;align-items:flex-end;">
                        <text class="text">国家游泳中心停车场</text>
                        <view class="bbb" style="margin-left: 202rpx;">15.00</view>
                        <view class="ccc">元</view>
                    </view>
                    <view class="grey" style="margin-top: 24rpx;">北京市朝阳区天辰东路11号国家游泳中心</view>
                    <view style="display: flex;align-items: center;margin-top: 48rpx;">
                        <view class="circular aaa"></view>
                        <view class="grey">进场时间</view>
                        <view class="date">2022-03-19 12:14:30</view>
                    </view>
                    <view style="display: flex;align-items: center;margin-top: 26rpx;">
                        <view class="circular orange"></view>
                        <view class="grey">出场时间</view>
                        <view class="date">2022-03-19 17:58:41</view>
                    </view>
                    <view class="line"></view>
                    <view class="money">
                        <view class="date" style="margin-left: -10rpx;">停车5小时40分</view>
                        <view class="ddd">评分</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<style>
.header {
    width: 750rpx;
    height: 238rpx;
    border-radius: 0px 0px 48px 48px;
    background: linear-gradient(76deg, #0E52E6 0%, #0E6FF3 100%);
}

.white {
    color: #FFFFFF;
    font-weight: 400;
}

.border {
    width: 686rpx;
    height: 396rpx;
    background-color: #FFFFFF;
    border-radius: 24rpx;
    padding-top: 48rpx;
    margin-left: 32rpx;
}

text {
    font-size: 32rpx;
    font-weight: bold;
    color: #121820;
}

.in {
    font-size: 24rpx;
    font-weight: bold;
}

.black {
    color: #121820;
}

.one {
    color: #3366FD;
    margin-left: 294rpx;
}

.grey {
    font-size: 24rpx;
    font-weight: 400;
    color: #B4BBC6;
}

.circular {
    width: 12rpx;
    height: 12rpx;
    border-radius: 50%;
    display: flex;
    margin-right: 16rpx;

}

.aaa {
    background-color: #3366FD;
}

.orange {
    background-color: #FF6A55;
}

.date {
    font-size: 24rpx;
    font-weight: 400;
    color: #121820;
    margin-left: 16rpx;
}

.line {
    width: 622rpx;
    height: 0;
    border: 2rpx solid #F3F4F9;
    margin-top: 38rpx;
}

.money {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    margin-top: 36rpx;
    margin-right: 32rpx;
}

.bbb {
    font-size: 44rpx;
    font-weight: bold;
    color: #3366FD;
}

.ccc {
    font-size: 24rpx;
    font-weight: 400;
    color: #3366FD;
    margin-left: 4rpx;
    margin-top: -5rpx;
}

.ddd {
    width: 160rpx;
    height: 56rpx;
    background: linear-gradient(180deg, #3366FD 0%, #5DAAFE 100%);
    box-shadow: 0px 8rpx 16rpx rgba(51, 102, 253, 0.3);
    border-radius: 32rpx;
    margin-top: -15rpx;
    font-size: 24rpx;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 56rpx;
    text-align: center;
}
</style>