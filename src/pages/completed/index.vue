<template>
    <view style="background-color: #F3F6FA; width: 750rpx;height: 1363rpx;">
        <view class="header">
            <view style="display:flex;padding-top: 50rpx;">
                <navigator url="/pages/my/index" open-type="redirect">
                    <image style="width:31rpx; height:31rpx;margin-left:42rpx;" src="/static/activity/返回.png"></image>
                </navigator>
                <view class="white" style="font-size:40rpx; margin-left: 222rpx;">停车记录</view>
            </view>
        </view>
        <view>
            <view style="margin-top: -80rpx;">
                <view class="border" v-for="order in orders" :key="order.id" style="margin-bottom: 50rpx;">
                    <view style="display: grid; grid-template-columns: auto auto; justify-content: space-between;">
                        <text class="text">{{ order.park.name }}</text>
                        <view style="display: flex;align-items: center;">
                            <view class="bbb">{{ order.total }}</view>
                            <view class="ccc">元</view>
                        </view>
                    </view>
                    <view class="grey" style="margin-top: 24rpx;">{{ order.park.address }}</view>
                    <view style="display: flex;align-items: center;margin-top: 48rpx;">
                        <view class="circular aaa"></view>
                        <view class="grey">进场时间</view>
                        <view class="date">{{ new Date(order.in_at).toLocaleString([], { hour12: false }) }}</view>
                    </view>
                    <view style="display: flex;align-items: center;margin-top: 48rpx;">
                        <view class="circular orange"></view>
                        <view class="grey">出场时间</view>
                        <view class="date">{{ new Date(order.out_at).toLocaleString([], { hour12: false }) }}</view>
                    </view>
                    <view class="line"></view>
                    <view class="money">
                        <view class="date">停车{{ calcDuration(order.in_at, order.out_at) }}
                        </view>
                        <text v-if="order.score" class="text-xl text-green-500">{{order.score}}</text>
                        <navigator v-else :url="`rate?id=${order.id}`">
                            <view class="ddd">评分</view>
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
        return { orders: [] }
    },
    mounted() {
        this.listOrders()
    },
    methods: {
        listOrders() {
            wx.request({
                url: 'https://freepark.ntmkinc.cn/user/orders',
                header: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${wx.getStorageSync('token')}`,
                },
                success: ({ statusCode, data }) => {
                    if (statusCode == 200) {
                        this.orders = data
                    } else if (statusCode == 401) {
                        wx.redirectTo({
                            url: '/pages/sign/index'
                        })
                    }
                }
            })
        },
        calcDuration(inAt, outAt) {

            const duration = (new Date(outAt) - new Date(inAt)) / 1000

            const days = Math.floor(duration / 86400)

            const hours = Math.floor(duration % 86400 / 3600)

            const minutes = Math.ceil(duration % 3600 / 60)
            return `${days}天${hours}小时${minutes}分`
        }
    }


}
</script>
<style scoped>
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
    background-color: #FFFFFF;
    border-radius: 24rpx;
    padding: 48rpx 32rpx;
    margin: 0 32rpx;
}

.text {
    font-size: 32rpx;
    font-weight: bold;
    color: #121820;
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
    padding: 45rpx 0 0 0;
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