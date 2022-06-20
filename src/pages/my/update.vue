<template>
    <view>
        <view style="padding: 25rpx; background-color: #eee; display: grid; gap: 15rpx;">
            <view>
                <view>手机号</view>
                <input type="text" v-model="phone">
            </view>
            <view>
                <view>名称</view>
                <input type="text" v-model="name">
            </view>
            <view>
                <view>车牌号</view>
                <input type="text" v-model="plate">
            </view>
            <view>
                <button @click="updateUserInfo">提交</button>
            </view>
            <view>
                <navigator url="/pages/my/index" open-type="redirect">
                    <button>返回</button>
                </navigator>
            </view>
        </view>
        <view>
            <uni-popup ref="message" type="message">
                <uni-popup-message type="success" message="更新成功" :duration="2000"></uni-popup-message>
            </uni-popup>
        </view>
    </view>
</template>

<script>
import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue'
import uniPopupMessage from '@dcloudio/uni-ui/lib/uni-popup-message/uni-popup-message.vue'

export default {
    data() {
        return { phone: "", name: "", plate: "" }
    },
    mounted() {
        this.getUserInfo()
    },
    methods: {
        getUserInfo() {
            wx.request({
                url: "https://freepark.ntmkinc.cn/user",
                header: {
                    Accept: "application/json",
                    Authorization: `Bearer ${wx.getStorageSync('token')}`
                },
                success: ({ statusCode, data }) => {
                    if (statusCode == 200) {
                        this.phone = data.phone
                        this.name = data.name
                        this.plate = data.plate
                    } else if (statusCode == 401) {
                        wx.redirectTo({
                            url: "/pages/sign/index"
                        })
                    }
                }
            })
        },
        updateUserInfo() {
            wx.request({
                url: "https://freepark.ntmkinc.cn/user",
                header: {
                    Accept: "application/json",
                    Authorization: `Bearer ${wx.getStorageSync('token')}`,
                },
                // 要提交的数据
                data: {
                    user: {
                        phone: this.phone,
                        name: this.name,
                        plate: this.plate
                    }
                },
                // 更新时 method 用 PUT
                method: "PUT",
                success: ({ statusCode }) => {
                    if (statusCode == 200) {
                        this.$refs.message.open()
                        this.getUserInfo()
                    }
                }
            })
        }
    },
    components: { uniPopup, uniPopupMessage }
}
</script>

<style>
.uni-popup {
    width: 100%;
}
</style>

<style scoped>
input {
    padding: 15rpx 25rpx;
    background: #fff;
}
</style>
