<template>
    <view>
        <view style="padding: 25rpx; background-color: #eee; display: grid; gap: 15rpx;">
            <view>
                <view>手机号</view>
                <input v-model="phone" type="text" placeholder="phone" />
            </view>
            <view>
                <view>名称</view>
                <input v-model="name" type="text" placeholder="name" />
            </view>
            <view>
                <view>车牌号</view>
                <input v-model="plate" type="text" placeholder="plate" />
            </view>
            <button style="width: 100%;" @click="updateUserInfo">提交</button>
            <navigator url="/pages/my/index" open-type="redirect">
                <button>返回</button>
            </navigator>
        </view>
        <view>
             <uni-popup ref="message" type="message">
                <uni-popup-message style="width: 100%;" type="success" message="更新成功" :duration="2000"></uni-popup-message>
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
                            url: "/pages/sign/inndex"
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
                // 提交的数据
                data: {
                    user: {
                        phone: this.phone,
                        name: this.name,
                        plate: this.plate
                    }
                },
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
input {
    padding: 15rpx 25rpx;
    background-color: #fff;
}
</style>