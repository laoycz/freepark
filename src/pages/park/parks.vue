<template>
    <view v-for="park in limitedParks" :key="park.id" class="border"
        @click="openLocation({ latitude: park.lat, longitude: park.lng })">
        <view style="display:grid; grid-template-columns: auto auto; justify-content: space-between;">
            <view>
                <view class="black">{{ park.name }}</view>
                <view class="grey">{{ park.address }}</view>
            </view>
            <view style="display: grid;  justify-items: center;padding: 0 0 0 50rpx;">
                <image class="pic" src="/static/home/路径.png"></image>
                <view v-if="park.distance >= 1" class="blee">{{ park.distance }}km</view>
                <view v-else class="blee">{{ park.distance * 1000 }}m</view>
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
</template>
<script>
export default {
    props:["limit"],
    data() {
        return { parks: [] }
    },
    computed: {
        limitedParks() {
            return this.parks.slice(0, this.limit)
        }
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
<style scoped>
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
</style>