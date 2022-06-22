<template>
    <view v-if="order" class="p-4 grid gap-4">
        <view>{{ order.park.name }}</view>
        <uni-rate v-model="score" allow-half></uni-rate>
        <view>
            <button type="primary" @click="rate">提交</button>
        </view>
        <navigator open-type="navigateBack">
            <button>返回</button>
        </navigator>
    </view>
</template>

<script>
export default {
    onLoad({ id }) {
        this.getOrder(id)
    },
    data() {
        return { order: null, score: null }
    },
    methods: {
        getOrder(id) {
            wx.request({
                url: `https://freepark.ntmkinc.cn/orders/${id}`,
                header: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${wx.getStorageSync('token')}`,
                },
                success: ({ statusCode, data }) => {
                    if (statusCode == 200) {
                        this.order = data
                        this.score = data.score
                    }
                }
            })
        },
        rate() {
            wx.request({
                url: `https://freepark.ntmkinc.cn/orders/${this.order.id}/rate`,
                header: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${wx.getStorageSync('token')}`,
                },
                data: {
                    score: this.score
                },
                method: "PUT",
                success: ({ statusCode, data }) => {
                    if (statusCode == 200) {
                        wx.navigateBack({
                            success: () => wx.redirectTo({ url: "index" })
                        })
                    }
                }
            })
        }
    }
}
</script>
