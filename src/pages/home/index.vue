<template>
    <view style="position: relative;background-color: #F3F6FA;">
        <view style="position:relative">
            <image class="back" src="/static/home/组319.png"></image>
            <view style="position: absolute;left: 0;right: 0; top: 0; bottom: 0;">
                <view style="display: flex; margin-top: 66rpx;    line-height: 33rpx;">
                    <image class="location" src="/static/home/定位.png"></image>
                    <text style="margin-left:9rpx;color: #F8FAF9;">北京</text>
                    <view class="search"></view>
                    <image class="small" src="/static/home/icon-n.png"></image>
                </view>
            </view>
            <view class="column">
                <view class="center" style="display: grid; grid-auto-flow: column; grid-template-rows: auto auto;">
                    <image class="Administration" src="/static/home/组320.png"></image>
                    <view class="text">停车管理</view>
                    <image class="Administration" src="/static/home/组28.png"></image>
                    <view class="text">活动管理</view>
                    <image class="Administration" src="/static/home/组280.png"></image>
                    <view class="text">停车记录</view>
                    <image class="Administration" src="/static/home/组2800.png"></image>
                    <view class="text">自助停车</view>
                </view>
            </view>
        </view>
        <view style="margin-left:32rpx; padding-bottom: 200rpx;">
            <view class="recommend">车位租聘推荐</view>
            <view class="blue"></view>
            <view v-for="park in parks" :key="park.id"
                @click="openLocation({ latitude: park.lat, longitude: park.lng })" class="border">
                <view style="display:grid; grid-template-columns: auto auto; justify-content: space-between;">
                    <view>
                        <view class="black">{{ park.name }}</view>
                        <view class="grey">{{ park.address }}</view>
                    </view>
                    <view style="display: grid; justify-items: center;padding: 0 0 0 25rpx;">
                        <image class="pic" src="/static/home/路径.png"></image>
                        <view class="blee">{{ park.distance }}km</view>
                    </view>
                </view>
                <view class="line"></view>
                <view style="display: grid; grid-template-columns: auto auto auto; justify-content: space-between;">
                    <view>
                        <text class="number">{{ park.opening_hours }}</text>
                        <text class="aaa ccc">营业</text>
                    </view>
                    <view>
                        <text class="number">{{ park.price }}</text>
                        <text class="aaa ccc">元/小时</text>
                    </view>
                    <view>
                        <text class="number">{{ park.spots_count }}</text>
                        <text class="aaa ccc">空位</text>
                    </view>
                </view>
            </view>
        </view>
        <view class="end">
            <view class="endd" style="margin-left: 48rpx;">
                <navigator url="/pages/home/index" open-type="redirect">
                    <image src="/static/home/组321.png"></image>
                    <view style="color: #3366FD;">首页</view>
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
                    <image src="/static/home/我的.png"></image>
                    <view>我的</view>
                </navigator>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return { parks: [] }
    },
    mounted() {
        wx.getLocation({
            type: "gcj02",
            isHighAccuracy: true,
            success: ({ latitude, longitude }) => {
                wx.request({
                    url: "https://freepark.ntmkinc.cn/parks/near",
                    header: {
                        Accept: "application/json"
                    },
                    data: {
                        lat: latitude,
                        lng: longitude
                    },
                    success: ({ statusCode, data }) => {
                        if (statusCode == 200) {
                            this.parks = data
                        }
                    }
                })
            }
        })
    },
    methods: {
        openLocation({ latitude, longitude }) {
            wx.openLocation({
                latitude: Number(latitude),
                longitude: Number(longitude)
            })
        }
    }
}
</script>
<style>
.back {
    width: 750rpx;
    height: 576rpx;
    background-size: cover;

}

.location {
    width: 27rpx;
    height: 33rpx;
    margin-left: 32rpx;
    opacity: 1;

}

.search {
    width: 486rpx;
    height: 64rpx;
    background: #F8FAF9;
    opacity: 0.25;
    border-radius: 32rpx;
    margin-left: 24rpx;
    margin-top: -10rpx;
}

.small {
    width: 34rpx;
    height: 40rpx;
    margin-left: 28rpx;
}

.column {
    width: 686rpx;
    height: 228rpx;
    background: #FFFFFF;
    border-radius: 24rpx;
    margin-top: -100rpx;
    opacity: 1;
    margin-left: 32rpx;
    position: absolute;
    top: 603rpx;
}

.center {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    column-gap: 50rpx;
    row-gap: 25rpx;
    margin: 40rpx 44rpx 0 40rpx;
    justify-items: center;
}

.Administration {
    width: 92rpx;
    height: 92rpx;
}

.text {
    font-size: 28rpx;
    color: #121820;
}

.recommend {
    width: 216rpx;
    height: 36rpx;
    font-size: 36rpx;
    font-weight: bold;
    color: #121820;
    opacity: 1;
    margin-top: 210rpx;
}

.blue {
    width: 216rpx;
    height: 16rpx;
    background: linear-gradient(90deg, #3366FD 0%, rgba(51, 102, 253, 0) 100%);
    border-radius: 10rpx;
    opacity: 1;
}

.border {
    background-color: #FFFFFF;
    border-radius: 8rpx;
    margin: 24rpx 32rpx 0 0;
    padding: 45rpx 32rpx;
}

.end {
    width: 750rpx;
    height: 166rpx;
    margin-top: 28rpx;
    background-color: #FFFFFF;
    display: flex;
}

.endd {
    width: 112rpx;
    height: 67rpx;
    margin-top: 26rpx;
}

.black {
    font-size: 32rpx;
    font-weight: bold;
    color: #121820;
}

.grey {
    font-size: 24rpx;
    color: #B4BBC6;
    margin-top: 24rpx;
}

.pic {
    width: 44rpx;
    height: 44rpx;
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
    margin: 44rpx 0 15rpx 0;
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

.ccc {
    margin-left: 4rpx;
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
</style>