<template>
    <view style="background-color: #F3F6FA; width: 750rpx; height: 1624rpx;">
        <view class="blue">
            <view class="aa">
                <navigator url="/pages/my/index" open-type="redirect">
                    <image src="/static/activity/返回.png"></image>
                </navigator>
                <view>订单管理</view>
            </view>
            <view class="order title">
                <navigator url="/pages/whole/index" open-type="redirect">
                    <view>全部订单</view>
                </navigator>
                <view>进行中</view>
                <navigator url="/pages/completed/index" open-type="redirect">
                    <view>已完成</view>
                </navigator>
            </view>
        </view>
        <view>
            <view class="border" style="margin-top: -80rpx;">
                <view style="margin-left: 32rpx;">
                    <view>
                        <text class="text">天山体育馆停车场</text>
                        <text class="one in">进行中</text>
                    </view>
                    <view class="grey" style="margin-top: 24rpx;">小时计费 | 京A89887</view>
                    <view style="display: flex;align-items: center;margin-top: 48rpx;">
                        <view class="circular aaa"></view>
                        <view class="grey">进场时间</view>
                        <view class="date">2022-03-28 08:23:16</view>
                    </view>
                    <view style="display: flex;align-items: center;margin-top: 26rpx;">
                        <view class="circular orange"></view>
                        <view class="grey">出场时间</view>
                        <view class="date">计费中...</view>
                    </view>
                    <view class="line"></view>
                    <view style="display:flex; margin: 32rpx 0 0 5rpx;">
                        <view class="grey">预估金额</view>
                        <view class="bb" style="margin-left: 425rpx;">
                            <view>￥</view>
                            <text>5.00</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="border" style="margin-top: 32rpx;">
                <view style="margin-left: 32rpx;">
                    <view>
                        <text class="text">百货大楼停车场</text>
                        <text class="in black" style="margin-left: 326rpx;">已完成</text>
                    </view>
                    <view class="grey" style="margin-top: 24rpx;">小时计费 | 京A89887</view>
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
                    <view style="display:flex; margin: 32rpx 0 0 5rpx;">
                        <view class="date" style="margin-left: -16rpx;">停车1天8小时07分</view>
                        <view class="bb" style="margin-left: 318rpx;">
                            <view>￥</view>
                            <text>28.00</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="border" style="margin-top: 32rpx;">
                <view style="margin-left: 32rpx;">
                    <view>
                        <text class="text">国家游泳中心停车场</text>
                        <text class="in black" style="margin-left: 262rpx;">已完成</text>
                    </view>
                    <view class="grey" style="margin-top: 24rpx;">小时计费 | 京A89887</view>
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
                    <view style="display:flex; margin: 32rpx 0 0 5rpx;">
                        <view class="date" style="margin-left: -16rpx;">停车5小时40分</view>
                        <view class="bb" style="margin-left: 356rpx;">
                            <view>￥</view>
                            <text>15.00</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<style>
.blue {
    width: 750rpx;
    height: 318rpx;
    background: linear-gradient(76deg, #0E52E6 0%, #0E6FF3 100%);
    border-radius: 0 0 48rpx 48rpx;
}

.aa {
    display: flex;
    padding-top: 50rpx;
}

.aa image {
    width: 31rpx;
    height: 31rpx;
    margin-left: 42rpx;
}

.aa view {
    color: #FFFFFF;
    font-weight: 400;
    font-size: 40rpx;
    margin-left: 222rpx;
}

.order {
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto auto;
    margin-left: 110rpx;
    margin-right: 144rpx;
    margin-top: 64rpx;
}

.title {
    color: #FFFFFF;
    font-size: 28rpx;
    font-weight: bold;
}

.border {
    width: 686rpx;
    height: 386rpx;
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

.bb {
    display: flex;
    align-items: center;
    color: #282828;
   
}

.bb view {
    font-size: 24rpx;
    font-weight: 400;
}

.bb text {
    font-size: 36rpx;
    font-weight: bold;
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
</style>