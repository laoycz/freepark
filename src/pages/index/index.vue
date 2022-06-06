<template>
  <navigator url="/pages/sign/index" open-type="redirect">
    <view style="font-size:28rpx; font-weight:400;margin-left: 630rpx;margin-top: 25rpx;color: #8f8f94;">登录</view>
  </navigator>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <navigator url="/pages/welcome/index" open-type="redirect" style="margin-top:200rpx">
        <button class="aaa">跳转自由停页面</button>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() { },
  methods: {},
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.aaa {
  color: #8f8f94;
  font-size: 28rpx;
}
</style>
