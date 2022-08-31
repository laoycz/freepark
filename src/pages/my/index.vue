<template>
    <view class="relative" style="background-color:#F3F6FA;">
        <view class="relative">
            <view>
                <image class="header relative" src="/static/slices/bg.png"></image>
                <view class="absolute flex left-4 top-16">
                    <image class="w-16 h-16" src="/static/slices/img.png"></image>
                    <view>
                        <view class="aa flex ml-6">
                            <view>{{ name }}</view>
                            <image src="/static/slices/icon5.png"></image>
                        </view>
                        <view class="text-white ml-6 mt-3 font-normal text-sm">账号:{{ phone }}</view>
                    </view>
                    <navigator url="/pages/my/plate" open-type="redirect">
                        <image class="cc w-5 h-5" src="/static/slices/icon9.png"></image>
                    </navigator>
                </view>
                <view class="dd absolute">
                    <image src="/static/slices/bg1.png"></image>
                    <view class="ee absolute font-normal text-white ">
                        <view class="text-sm">可用余额(元)</view>
                        <view class="flex">
                            <view class="text-2xl mt-2">1,392.80</view>
                            <view class="bottom flex text-sm justify-center items-center rounded-xl">充值</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="part absolute">
                <view class="hh grid justify-around grid-cols-4 px-4 py-6 text-sm">
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
                    <navigator url="/pages/completed/index">
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
                    <view class="mm eee pt-6 mt-5">
                        <view class="flex">

                            <image class="small" src="/static/slices/客服.png"></image>

                            <view>我的客服</view>

                            <image class="nn" src="/static/slices/联合.png"></image>

                        </view>
                        <view class="six"></view>
                        <view style="display: flex;margin-top: 40rpx;">
                            <image class="small" src="/static/slices/icon6.png"></image>
                            <view>账号管理</view>
                            <image class="nn" src="/static/slices/联合.png"></image>
                        </view>
                        <view class="six"></view>
                        <view style="display: flex;margin-top: 40rpx;">
                            <image class="small" src="/static/slices/icon7.png"></image>
                            <view>投诉建议</view>
                            <image class="nn" src="/static/slices/联合.png"></image>
                        </view>
                        <view class="six"></view>
                        <view style="display: flex;margin-top: 40rpx;">
                            <image class="small" src="/static/slices/版本更新.png"></image>
                            <view>版本更新</view>
                            <view class="oo">v1.0.2</view>
                        </view>
                        <view class="six"></view>
                    </view>
                </view>
                <Nav page="my"></Nav>
            </view>
        </view>
    </view>
</template>
<script>
import Nav from '../home/nav.vue'
export default {
    data() {
        return { phone: "", name: "" };
    },
    mounted() {
        this.getUserInfo();
    },
    methods: {
        getUserInfo() {
            wx.request({
                url: "https://freepark.ntmkinc.cn/user",
                header: {
                    Accept: "application/json",
                    Authorization: `Bearer ${wx.getStorageSync("token")}`
                },
                success: ({ statusCode, data }) => {
                    if (statusCode == 200) {
                        this.phone = data.phone;
                        this.name = data.name;
                    }
                    else if (statusCode == 401) {
                        wx.redirectTo({
                            url: "/pages/sign/index"
                        });
                    }
                }
            });
        }
    },
    components: { Nav }
}
</script>
<style scoped>
.header {
    width: 100%;
    height: 552rpx;
}

.aa {
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

.cc {
    margin-left: 218rpx;
    margin-top: 18rpx;
}

.dd {
    top: 325rpx;
    left: 32rpx;
}

.dd image {
    width: 686rpx;
    height: 368rpx;
    position: relative;
}

.ee {
    top: 50rpx;
    left: 32rpx;
}

.bottom {
    width: 144rpx;
    height: 52rpx;
    background-color: #FFFFFF;
    color: #3366FD;
    margin-left: 256rpx;
    margin-top: 22rpx;
}

.part {
    width: 750rpx;
    height: 1202rpx;
    border-radius: 40rpx 40rpx 0 0;
    background-color: #F3F6FA;
    top: 520rpx;
}

.hh view {
    display: grid;
    justify-content: center;
    font-size: 24rpx;
    font-weight: 400;
    color: #282828;
}

.pic {
    width: 58rpx;
    height: 66rpx;
    margin: 0 0 22rpx 10rpx;
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
    font-size: 24rpx;
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
    padding-right: 24rpx;
}

.eee {
    font-size: 28rpx;
    font-weight: 400;
    color: #121820;

}

.six {
    border: 2rpx solid #F2F3F6;
    width: 622rpx;
    height: 0;
    margin-left: 32rpx;
    margin-top: 40rpx;
}
</style>