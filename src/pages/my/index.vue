<template>
    <view style="background-color:#F3F6FA; width: 750rpx; height: 1724rpx; position: relative;">
        <view style="position:relative;">
            <view>
                <image class="header" src="/static/slices/bg.png"></image>
                <view style="position:absolute; display: flex; left: 32rpx; top:136rpx;">
                    <image class="portrait" src="/static/slices/img.png"></image>
                    <view>
                        <view style="display:flex; margin-left: 48rpx;margin-top: 18rpx;">
                            <view style="color:#FFFFFF;font-size:40rpx;font-weight:bold;">秋名山车神</view>
                            <image style="width:25rpx; height:30rpx; margin-left: 8rpx;" src="/static/slices/icon5.png">
                            </image>
                        </view>
                        <view
                            style="color:#FFFFFF;font-size:26rpx; font-weight:400; margin-top: 20rpx; margin-left: 48rpx;">
                            账号:153003289702</view>
                    </view>
                    <image style="  width: 40rpx; height: 38rpx; margin-left: 218rpx; margin-top: 18rpx;"
                        src="/static/slices/icon9.png"></image>
                </view>
                <view style="position:absolute;top: 325rpx;left: 32rpx;">
                    <image style="width:686rpx; height: 368rpx; position: relative;" src="/static/slices/bg1.png">
                    </image>
                    <view style="position:absolute;top:50rpx; left: 32rpx;">
                        <view style="font-size:24rpx;color:#FFFFFF;font-weight:400;">可用余额(元)</view>
                        <view style="display:flex;">
                            <view style="font-size:56rpx; font-weight:400;color:#FFFFFF;margin-top:16rpx;">1,392.80
                            </view>
                            <view class="bottom">充值</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="part">
                <view style="display: flex;">
                    <navigator url="/pages/whole/index" open-type="redirect">  
                        <view>
                            <image class="pic" style="margin-left:82rpx;" src="/static/slices/icon.png"></image>
                            <view class="text" style="margin-left:64rpx;">全部订单</view>
                        </view>
                    </navigator>
                    <view>
                        <image class="pic" style="margin-left:100rpx;" src="/static/slices/icon1.png"></image>
                        <view class="text" style="margin-left:92rpx;">进行中</view>
                    </view>
                    <view>
                        <image class="pic" style="margin-left:110rpx;" src="/static/slices/icon3.png"></image>
                        <view class="text" style="margin-left:102rpx;">已完成</view>
                    </view>

                    <view>
                        <image class="pic" style="margin-left:110rpx;" src="/static/slices/icon2.png"></image>
                        <view class="text" style="margin-left:104rpx;">待评价</view>
                    </view>
                </view>
                <view style="margin-left:32rpx; ">
                    <view style="font-size:36rpx; font-weight:bold;color:#121820;margin-top:64rpx;">服务管理</view>
                    <view
                        style="width:144rpx; height:16rpx;background: linear-gradient(90deg, #3366FD 0%, rgba(51, 102, 253, 0) 100%);border-radius:10rpx;">
                    </view>
                    <view
                        style="width:686rpx;height:156rpx;background-color:#FFFFFF;border-radius:24rpx;margin-top: 32rpx;">
                        <view style="display:flex;">
                            <view>
                                <image class="zzz" style="margin-left:54rpx;" src="/static/slices/地址管理.png"></image>
                                <view class="ooo" style="margin-left:32rpx;">地址管理</view>
                            </view>
                            <view>
                                <image class="zzz" style="margin-left:108rpx;" src="/static/slices/团队收益.png"></image>
                                <view class="ooo" style="margin-left:80rpx;">支付管理</view>
                            </view>
                            <view>
                                <image class="zzz" style="margin-left:99rpx;" src="/static/slices/活动中心.png"></image>
                                <view class="ooo" style="margin-left:78rpx;">活动中心</view>
                            </view>
                            <view>
                                <image class="zzz" style="margin-left:105rpx;" src="/static/slices/证照信息.png"></image>
                                <view class="ooo" style="margin-left:80rpx;">证照信息</view>
                            </view>
                        </view>
                    </view>
                    <view
                        style="width:686rpx;height: 480rpx;background-color: #FFFFFF;border-radius: 24rpx;margin-top: 40rpx;padding-top: 48rpx;">
                        <view style="display: flex;">
                            <image class="small" src="/static/slices/客服.png"></image>
                            <view class="eee">我的客服</view>
                            <image style="width:21rpx; height:21rpx; margin-left:422rpx;" src="/static/slices/联合.png">
                            </image>
                        </view>
                        <view class="six"></view>
                        <view style="display: flex;margin-top: 40rpx;">
                            <image class="small" src="/static/slices/icon6.png"></image>
                            <view class="eee">账号管理</view>
                            <image style="width:21rpx; height:21rpx; margin-left:422rpx;" src="/static/slices/联合.png">
                            </image>
                        </view>
                        <view class="six"></view>
                        <view style="display: flex;margin-top: 40rpx;">
                            <image class="small" src="/static/slices/icon7.png"></image>
                            <view class="eee">投诉建议</view>
                            <image style="width:21rpx; height:21rpx; margin-left:422rpx;" src="/static/slices/联合.png">
                            </image>
                        </view>
                        <view class="six"></view>
                        <view style="display: flex;margin-top: 40rpx;">
                            <image class="small" src="/static/slices/版本更新.png"></image>
                            <view class="eee">版本更新</view>
                            <view style="font-size: 28rpx; font-weight: 400;color: #B4BBC6;margin-left: 360rpx;">v1.0.2
                            </view>
                        </view>
                        <view class="six"></view>
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
    </view>
</template>
<style>
.header {
    width: 100%;
    height: 552rpx;
    position: relative;
}

.portrait {
    width: 128rpx;
    height: 128rpx;
}

.bottom {
    border-radius: 32rpx;
    width: 144rpx;
    height: 52rpx;
    background-color: #FFFFFF;
    color: #3366FD;
    font-size: 24rpx;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 256rpx;
    margin-top: 22rpx;
}

.part {
    position: absolute;
    width: 750rpx;
    height: 1202rpx;
    border-radius: 40rpx 40rpx 0 0;
    background-color: #F3F6FA;
    top: 520rpx;
}

.pic {
    width: 58rpx;
    height: 66rpx;
    margin-top: 78rpx;
}

.text {
    font-size: 24rpx;
    font-weight: 400;
    color: #282828;
    margin-top: 22rpx;
}

.zzz {
    width: 53rpx;
    height: 48rpx;
    margin-top: 28rpx;
}

.ooo {
    font-size: 24rpx;
    color: #282828;
    font-weight: 400;
    margin-top: 24rpx;
}

.small {
    width: 26rpx;
    height: 28rpx;
    margin-left: 38rpx;
    /* margin-top: 40rpx; */
}

.eee {
    font-size: 28rpx;
    font-weight: 400;
    color: #121820;
    margin-left: 24rpx;
}

.six {
    border: 2rpx solid #F2F3F6;
    width: 622RPX;
    height: 0;
    margin-left: 32rpx;
    margin-top: 40rpx;
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