<template>
    <view style="background-color:#F3F6FA; width: 750rpx; height: 1624rpx;">
        <view>
            <view class="header">
                <navigator url="/pages/home/index" open-type="redirect"
                    style="width: 31rpx; height: 31rpx; padding-left: 42rpx;">
                    <image class="arrow" src="/static/activity/返回.png"></image>
                </navigator>
                <text class="title">停车场</text>
            </view>
            <view class="border" style="margin-top: -100rpx;">
                <view style="display:flex;">
                    <view>
                        <view class="black">天山体育馆停车场</view>
                        <view class="grey">北京市朝阳区天山大街387号天山体育馆</view>
                    </view>
                    <view>
                        <image class="pic" style="margin-left: 124rpx;" src="/static/home/路径.png"></image>
                        <view class="blee" style="margin-left: 112rpx;">1.8km</view>
                    </view>
                </view>
                <view class="line"></view>
                <view>
                    <text class="number" style="margin-left:32rpx;">7:00-22:00</text>
                    <text class="aaa" style="margin-left:4rpx;">营业</text>
                    <text class="number" style="margin-left:100rpx;">5.0</text>
                    <text class="aaa" style="margin-left:4 rpx;">元/小时</text>
                    <text class="number" style="margin-left:98rpx;">1274</text>
                    <text class="aaa" style="margin-left:4rpx;">空位</text>
                </view>
            </view>
            <view class="border" style="margin-top: 24rpx;">
                <view style="display:flex;">
                    <view>
                        <view class="black">百货大楼停车场</view>
                        <view class="grey">北京市东城区王府井大街255号百货大楼B2</view>
                    </view>
                    <view>
                        <image class="pic" style="margin-left: 94rpx;" src="/static/home/路径.png"></image>
                        <view class="blee" style="margin-left:82rpx;">4.6km</view>
                    </view>
                </view>
                <view class="line"></view>
                <view>
                    <text class="number" style="margin-left:32rpx;">7:00-24:00</text>
                    <text class="aaa" style="margin-left:4rpx;">营业</text>
                    <text class="number" style="margin-left:100rpx;">8.0</text>
                    <text class="aaa" style="margin-left:4rpx;">元/小时</text>
                    <text class="number" style="margin-left:114rpx;">152</text>
                    <text class="aaa" style="margin-left:4rpx;">空位</text>
                </view>
            </view>
            <view class="border" style="margin-top: 24rpx;">
                <view style="display:flex;">
                    <view>
                        <view class="black">国家游泳中心停车场</view>
                        <view class="grey">北京市朝阳区天辰东路11号国家游泳中心</view>
                    </view>
                    <view>
                        <image class="pic" style="margin-left: 114rpx;" src="/static/home/路径.png"></image>
                        <view class="blee" style="margin-left:102rpx;">8.7km</view>
                    </view>
                </view>
                <view class="line"></view>
                <view>
                    <text class="number" style="margin-left:32rpx;">7:00-21:00</text>
                    <text class="aaa" style="margin-left:4rpx;">营业</text>
                    <text class="number" style="margin-left:100rpx;">3.0</text>
                    <text class="aaa" style="margin-left:4rpx;">元/小时</text>
                    <text class="number" style="margin-left:114rpx;">76</text>
                    <text class="aaa" style="margin-left:4rpx;">空位</text>
                </view>
            </view>
            <view class="border" style="margin-top: 24rpx;">
                <view style="display:flex;">
                    <view>
                        <view class="black">北京奥林匹克公园P1停车场</view>
                        <view class="grey">北京市朝阳区北辰东路15号</view>
                    </view>
                    <view>
                        <image class="pic" style="margin-left: 156rpx;" src="/static/home/路径.png"></image>
                        <view class="blee" style="margin-left:144rpx;">12.9km</view>
                    </view>
                </view>
                <view class="line"></view>
                <view>
                    <text class="number" style="margin-left:32rpx;">0:00-24:00</text>
                    <text class="aaa" style="margin-left:4rpx;">营业</text>
                    <text class="number" style="margin-left:100rpx;">4.0</text>
                    <text class="aaa" style="margin-left:4rpx;">元/小时</text>
                    <text class="number" style="margin-left:114rpx;">839</text>
                    <text class="aaa" style="margin-left:4rpx;">空位</text>
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
    width: 750rpx;
    height: 200rpx;
    border-radius: 0rpx 0rpx 48rpx 48rpx;
    background: linear-gradient(76deg, #0E52E6 0%, #0E6FF3 100%);
    padding-top: 116rpx;
    display: flex;
}

.arrow {
    width: 31rpx;
    height: 31rpx;
    opacity: 1;
    margin-left: 42rpx;
}

.title {
    font-size: 40rpx;
    color: #FFFFFF;
    font-weight: 400;
    margin-left: 242rpx;
}

.border {
    width: 686rpx;
    height: 276rpx;
    background-color: #FFFFFF;
    border-radius: 8rpx;
    margin-left: 32rpx;
    opacity: 1;
}

.black {
    font-size: 32rpx;
    font-weight: bold;
    color: #121820;
    padding-top: 50rpx;
    padding-left: 32rpx;
}

.grey {
    font-size: 24rpx;
    color: #B4BBC6;
    margin-left: 32rpx;
    margin-top: 24rpx;
}

.pic {
    width: 44rpx;
    height: 44rpx;
    margin-top: 44rpx;
}

.blee {
    font-size: 24rpx;
    color: #3366FD;
    margin-top: 18rpx;
}

.line {
    width: 622rpx;
    border: 2rpx solid #465A88;
    opacity: 0.06;
    margin-top: 44rpx;
    margin-left: 34rpx;
}

.number {
    font-size: 26rpx;
    font-weight: bold;
    color: #121820;

}

.aaa {
    font-size: 24rpx;
    color: #B4BBC6;
}


.end {
    width: 750rpx;
    height: 166rpx;
    margin-top: 82rpx;
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