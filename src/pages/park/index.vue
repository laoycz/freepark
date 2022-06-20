<template>
    <view class="body">
        <view>
            <view class="header">
                <navigator url="/pages/home/index" open-type="redirect"
                    style="width: 31rpx; height: 31rpx; padding-left: 42rpx;">
                    <image class="arrow" src="/static/activity/返回.png"></image>
                </navigator>
                <text class="title">停车场</text>
            </view>
            <view v-for="park in parks" :key="park.id" class="border" 
                @click="openLocation({ latitude: park.lat, longitude: park.lng })">
                <view
                    style="display:grid; grid-template-columns: auto auto; justify-content: space-between;">
                    <view>
                        <view class="black">{{ park.name }}</view>
                        <view class="grey">{{ park.address }}</view>
                    </view>
                    <view style="display: grid;  justify-items: center;padding: 0 0 0 50rpx;">
                        <image class="pic" src="/static/home/路径.png"></image>
                        <view class="blee">{{ park.distance }}km</view>
                    </view>
                </view>
                <view class="line"></view>
                <view style="display: grid; grid-template-columns: auto auto auto; justify-content: space-between; ">
                    <view>
                        <text class="number">{{ park.opening_hours }}</text>
                        <text class="aaa">营业</text>
                    </view>
                    <view>
                        <text class="number">{{ park.price }}</text>
                        <text class="aaa">元/小时</text>
                    </view>
                    <view>
                        <text class="number">{{ park.spots_count }}</text>
                        <text class="aaa">空位</text>
                    </view>
                </view>

            </view>

            <view class="end">
                <view class="ddd" style="margin-left: 48rpx;">
                    <navigator url="/pages/home/index" open-type="redirect">
                        <image src="/static/组3180.png"></image>
                        <view>首页</view>
                    </navigator>
                </view>


                <view class="ddd" style="margin-left: 62rpx;">
                    <navigator url="/pages/park/index" open-type="redirect">
                        <image src="/static/p.png"></image>
                        <view style="color: #3366FD;">停车场</view>
                    </navigator>
                </view>

                <view class="ddd" style="margin-left: 62rpx;">
                    <navigator url="/pages/activity/index" open-type="redirect">
                        <image src="/static/home/活动.png"></image>
                        <view>活动</view>
                    </navigator>
                </view>
                <view class="ddd" style="margin-left: 82rpx;">
                    <navigator url="/pages/my/index" open-type="redirect">
                        <image src="/static/home/我的.png"></image>
                        <view>我的</view>
                    </navigator>
                </view>
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
.body {
    background-color: #F3F6FA;
    width: 750rpx;
    padding-bottom: 200rpx;
}

.header {
    width: 750rpx;
    height: 150rpx;
    border-radius: 0rpx 0rpx 48rpx 48rpx;
    background: linear-gradient(76deg, #0E52E6 0%, #0E6FF3 100%);
    padding-top: 86rpx;
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
    background-color: #FFFFFF;
    border-radius: 8rpx;
    margin: 40rpx 32rpx 0 32rpx;
    opacity: 1;
    padding: 35rpx 32rpx;
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
    margin-left: 4rpx;
}


.end {
    width: 750rpx;
    height: 166rpx;
    margin-top: 82rpx;
    background-color: #FFFFFF;
    display: flex;
}

.ddd {
    width: 112rpx;
    height: 67rpx;
    margin-top: 26rpx;
}

.ddd image {
    width: 35rpx;
    height: 34rpx;
    margin-left: 39rpx;
}

.ddd view {
    font-size: 20rpx;
    color: #121820;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16rpx;
}
</style>