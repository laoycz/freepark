<template>
    <view>
        <view class="body">
            <view class="header" style="padding: 46rpx 32rpx 122rpx 0">
                <navigator url="/pages/index/index" open-type="redirect">
                    <image style="width: 34rpx; height: 34rpx;" src="/static/sign/close.png "></image>
                </navigator>
            </view>
            <view>
                <view class="welcome">早上好，</view>
                <view class="welcome" style="margin: 36rpx 0 120rpx 0;">欢迎登录自由停</view>
                <view class="uni-form-item uni-column">
                    <view>手机号码</view>
                    <input v-model="phone" class="uni-input" focus placeholder="请输入您的手机号码" />
                </view>
                <view class="uni-form-item uni-column">
                    <view>昵称</view>
                    <input v-model="name" type="nickname" class="uni-input" placeholder="请输入您的昵称" />
                </view>

            </view>
            <button @click="onRegister" class="sign">注册</button>
            <view class="center">
                <image class="picture" src="/static/sign/qq.png"></image>
                <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
                    <image class="picture" src="/static/sign/wechat.png"></image>
                </button>
                <image class="picture" src="/static/sign/micro.png"></image>
            </view>
            <view class="end">注册代表你已阅读并同意《用户协议》和《隐私协议》</view>
        </view>
        <uni-popup ref="message" type="message">
            <uni-popup-message type="success" message="登录成功" :duration="2000"></uni-popup-message>
        </uni-popup>
    </view>

</template>

<script>
import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue'
import uniPopupMessage from '@dcloudio/uni-ui/lib/uni-popup-message/uni-popup-message.vue'

export default {
    data() {
        return { phone: "", name: "" }
    },
    methods: {
        onRegister() {
            wx.login({
                success: ({ code }) => {
                    wx.request({
                        url: "https://freepark.ntmkinc.cn/users/register",
                        data: {
                            user: {
                                phone: this.phone,
                                name: this.name
                            },
                            code: code
                        },
                        method: "POST",
                        success: ({ data: { token } }) => {
                            wx.setStorageSync("token", token)
                            this.$refs.message.open()
                            setTimeout(
                                () => {
                                    wx.redirectTo({
                                        url: "/pages/my/index"
                                    })
                                }, 1000
                            )

                        }
                    })
                }
            })
        },
        getUserInfo() {
            wx.request({
                url: "https://freepark.ntmkinc.cn/user",
                header: {
                    Accept: "application/json",
                    Authorization: `Bearer ${wx.getStorageSync('token')}`
                },
                success: ({ statusCode }) => {
                    if (statusCode == 200) {
                        wx.redirectTo({
                            url: "/pages/my/index"
                        })
                    }
                }
            })
        }
    },
    mounted() {
        this.getUserInfo()
    },
    components: { uniPopup, uniPopupMessage }

}
</script>

<style>
.uni-popup-message {
    width: 750rpx;
}

.body {
    background-color: #F3F6FA;
    position: relative;
    padding: 0 84rpx;
}

.uni-input {
    background-color: #FFFFFF;
    padding: 15rpx 30rpx;
    margin: 20rpx 0;
    border-radius: 15rpx;
    font-size: 24rpx;
}

.header {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
}

.welcome {
    font-size: 56rpx;
    font-weight: bold;
    color: #121820;
    font-size: 56rpx;
}

.phine {
    font-size: 32rpx;
    font-weight: bold;
    color: #121820;
}

input {
    font-size: 24rpx;
    font-weight: 400;
    color: #B4BBC6;
    margin-top: 44rpx;
}

.line {
    width: 576rpx;
    height: 0;
    border: 2rpx solid #E3E8EE;
    margin-top: 32rpx;
}

.obtain {
    font-size: 24rpx;
    font-weight: 400;
    color: #121820;
    margin-top: 44rpx;
}

.sign {
    width: 576rpx;
    height: 100rpx;
    background: linear-gradient(180deg, #3366FD 0%, #5DAAFE 100%);
    box-shadow: 0px 12rpx 24rpx rgba(51, 102, 253, 0.3);
    border-radius: 50rpx;
    margin-top: 100rpx;
    line-height: 100rpx;
    text-align: center;
    font-size: 36rpx;
    font-weight: 400;
    color: #B4BBC6;
}

.picture {
    width: 96rpx;
    height: 96rpx;
}

.center {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    padding: 150rpx 60rpx;
}

.end {
    font-size: 22rpx;
    font-weight: 400;
    color: #B4BBC6;
    margin-left: 70rpx;
}
</style>
