<template>
    <view class="end">
        <NavLink to="home" label="首页" :page="page"></NavLink>
        <NavLink to="park" label="停车场" :page="page"></NavLink>
        <NavLink to="activity" label="活动" :page="page"></NavLink>
        <NavLink to="my" label="我的" :page="page"></NavLink>
    </view>
</template>

<script>
import NavLink from './nav-link.vue';
export default {
    props: ["page"],
    components: { NavLink }
}
</script>

<style scoped>
.end {
    width: 750rpx;
    height: 166rpx;
    margin-top: 28rpx;
    background-color: #FFFFFF;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

</style>