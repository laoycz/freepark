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
            <Parks></Parks>
            <Nav page="park"></Nav>
        </view>
    </view>
</template>
<script>
import Parks from "./parks.vue"
import Nav from "../home/nav.vue";
export default {
    components: { Parks, Nav }
}
</script>
<style scoped>
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
</style>