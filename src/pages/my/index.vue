<template>
    <view style="background-color:#F3F6FA; width: 750rpx; height: 1724rpx; position: relative;">
        <view style="position:relative;">
            <view>
                <image class="header" src="/static/slices/bg.png"></image>
                <view class="ddd">
                    <image class="portrait" src="/static/slices/img.png"></image>
                    <view>
                        <view class="aa">
                            <view>{{ name }}</view>
                            <image src="/static/slices/icon5.png"></image>
                        </view>
                        <view class="bb">账号:{{ phone }}</view>
                    </view>
                    <image class="cc" src="/static/slices/icon9.png"></image>
                </view>
                <view class="dd">
                    <image src="/static/slices/bg1.png"></image>
                    <view class="ee">
                        <view class="ff">可用余额(元)</view>
                        <view style="display:flex;">
                            <view class="gg">1,392.80</view>
                            <view class="bottom">充值</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="part">
                <view class="hh">
                    <navigator url="/pages/whole/index" open-type="redirect">
                        <view>
                            <image class="pic" src="/static/slices/icon.png"></image>
                            <text>全部订单</text>
                        </view>
                    </navigator>
                    <view>
                        <image class="pic" src="/static/slices/icon1.png"></image>
                        <text>进行中</text>
                    </view>
                    <navigator url="/pages/completed/index" open-type="redirect">
                        <view>
                            <image class="pic" src="/static/slices/icon3.png"></image>
                            <text>已完成</text>
                        </view>
                    </navigator>
                    <view>
                        <image class="pic" src="/static/slices/icon2.png"></image>
                        <text>待评价</text>
                    </view>
                </view>
                <view style="margin-left:32rpx; ">
                    <view class="ii">服务管理</view>
                    <view class="jj"></view>
                    <view class="kk">
                        <view class="ll">
                            <view>
                                <image class="zzz" src="/static/slices/地址管理.png"></image>
                                <text>地址管理</text>
                            </view>
                            <view>
                                <image class="zzz" src="/static/slices/团队收益.png"></image>
                                <text>支付管理</text>
                            </view>
                            <view>
                                <image class="zzz" src="/static/slices/活动中心.png"></image>
                                <text>活动中心</text>
                            </view>
                            <view>
                                <image class="zzz" src="/static/slices/证照信息.png"></image>
                                <text>证照信息</text>
                            </view>
                        </view>
                    </view>
                    <view class="mm">
                        <view style="display: flex;">
                            <image class="small" src="/static/slices/客服.png"></image>
                            <view class="eee">我的客服</view>
                            <image class="nn" src="/static/slices/联合.png"></image>
                        </view>
                        <view class="six"></view>
                        <view style="display: flex;margin-top: 40rpx;">
                            <image class="small" src="/static/slices/icon6.png"></image>
                            <view class="eee">账号管理</view>
                            <image class="nn" src="/static/slices/联合.png"></image>
                        </view>
                        <view class="six"></view>
                        <view style="display: flex;margin-top: 40rpx;">
                            <image class="small" src="/static/slices/icon7.png"></image>
                            <view class="eee">投诉建议</view>
                            <image class="nn" src="/static/slices/联合.png"></image>
                        </view>
                        <view class="six"></view>
                        <view style="display: flex;margin-top: 40rpx;">
                            <image class="small" src="/static/slices/版本更新.png"></image>
                            <view class="eee">版本更新</view>
                            <view class="oo">v1.0.2</view>
                        </view>
                        <view class="six"></view>
                    </view>
                </view>
                <view class="end">
            <view class="endd" style="margin-left: 48rpx;">
                <navigator url="/pages/home/index" open-type="redirect">
                    <image src="/static/组3180.png"></image>
                    <view>首页</view>
                </navigator>
            </view>
            <view class="endd" style="margin-left: 62rpx;">
                <navigator url="/pages/park/index" open-type="redirect">
                    <image src="/static/home/停车管理.png"></image>
                    <view>停车场</view>
                </navigator>
            </view>
            <view class="endd" style="margin-left: 62rpx;">
                <navigator url="/pages/activity/index" open-type="redirect">
                    <image src="/static/home/活动.png"></image>
                    <view>活动</view>
                </navigator>
            </view>
            <view class="endd" style="margin-left: 82rpx;">
                <navigator url="/pages/my/index" open-type="redirect">
                    <image src="/static/我的.png"></image>
                    <view style="color: #3366FD;">我的</view>
                </navigator>
            </view>
        </view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return { phone:"", name:""}
    },
    mounted() {
        this.getUserInfo()
    },
    methods: {
        getUserInfo() {
            wx.request({
                url:"https://freepark.ntmkinc.cn/user",
                header: {
                    Accept:"application/json",
                    Authorization:`Bearer ${wx.getStorageSync('token')}`
                },
                success:({data:{phone, name}}) => {
                    this.phone = phone
                    this.name = name
                }
            })
        }
    }
}
</script>
<style>

.header {
    width: 100%;
    height: 552rpx;
    position: relative;
}

.ddd {
    position: absolute;
    display: flex;
    left: 32rpx;
    top: 136rpx;
}

.aa {
    display: flex;
    margin-left: 48rpx;
    margin-top: 18rpx;
}

.aa view {
    color: #FFFFFF;
    font-size: 40rpx;
    font-weight: bold;
}

.aa image {
    width: 25rpx;
    height: 30rpx;
    margin-left: 8rpx;
}

.bb {
    color: #FFFFFF;
    font-size: 26rpx;
    font-weight: 400;
    margin-top: 20rpx;
    margin-left: 48rpx;
}

.cc {
    width: 40rpx;
    height: 38rpx;
    margin-left: 218rpx;
    margin-top: 18rpx;
}

.dd {
    position: absolute;
    top: 325rpx;
    left: 32rpx;
}

.dd image {
    width: 686rpx;
    height: 368rpx;
    position: relative;
}

.ee {
    position: absolute;
    top: 50rpx;
    left: 32rpx;
}

.ff {
    font-size: 24rpx;
    color: #FFFFFF;
    font-weight: 400;
}

.gg {
    font-size: 56rpx;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 16rpx;
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

.hh {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    margin: 48rpx 78rpx 0 82rpx;
    gap: 90rpx;
}

.hh view {
    display: grid;
}

.pic {
    width: 58rpx;
    height: 66rpx;
    margin: 0 0 22rpx 10rpx;
}

text {
    font-size: 24rpx;
    font-weight: 400;
    color: #282828;
}

.ii {
    font-size: 36rpx;
    font-weight: bold;
    color: #121820;
    margin-top: 64rpx;
}

.jj {
    width: 144rpx;
    height: 16rpx;
    background: linear-gradient(90deg, #3366FD 0%, rgba(51, 102, 253, 0) 100%);
    border-radius: 10rpx;
    margin-top: -15rpx;
}

.kk {
    width: 686rpx;
    height: 156rpx;
    background-color: #FFFFFF;
    border-radius: 24rpx;
    margin-top: 32rpx;
    padding-top: 35rpx;
}

.ll {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    margin: 0 32rpx 0 32rpx;
    gap: 80rpx;
}

.ll view {
    display: grid;
}

.zzz {
    width: 53rpx;
    height: 48rpx;
    margin: 0 0 28rpx 23rpx;
}

.mm {
    width: 686rpx;
    height: 480rpx;
    background-color: #FFFFFF;
    border-radius: 24rpx;
    margin-top: 40rpx;
    padding-top: 48rpx;
}

.nn {
    width: 21rpx;
    height: 21rpx;
    margin-left: 422rpx;
}

.oo {
    font-size: 28rpx;
    font-weight: 400;
    color: #B4BBC6;
    margin-left: 360rpx;
}

.small {
    width: 26rpx;
    height: 28rpx;
    margin-left: 38rpx;
}

.eee {
    font-size: 28rpx;
    font-weight: 400;
    color: #121820;
    margin-left: 24rpx;
}

.six {
    border: 2rpx solid #F2F3F6;
    width: 622rpx;
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

.endd image {
    width: 35rpx;
    height: 34rpx;
    margin-left: 39rpx;
}

.endd view {
    font-size: 20rpx;
    color: #121820;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16rpx;
}

.endd {
    width: 112rpx;
    height: 67rpx;
    margin-top: 26rpx;
}
</style>