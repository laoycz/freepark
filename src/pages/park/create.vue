<template>
    <view>
        <button @click="chooseLocation">选取位置</button>
        <view>{{ name }}</view>
        <view>{{ address }}</view>
        <view style="padding: 25rpx; background-color: #eee; display: grid; gap: 15rpx; ">
            <view>
                <view>价格</view>
                <input v-model="price" type="text" placeholder="price" />
            </view>
            <view>
                <view>营业时间</view>
                <input v-model="opening_hours" type="text" placeholder="opening_hours" />
            </view>
            <view>
                <view>空位</view>
                <input v-model="spots_count" type="text" placeholder="spots_count" />
            </view>
        </view>
        <button @click="createPark">创建</button>
    </view>
</template>

<script>
export default {
    data() {
        return { name: "", address: "", latitude: "", longitude: "", price: "", opening_hours: "", spots_count: "" }
    },
    methods: {
        createPark() {
            wx.request({
                url: "https://freepark.ntmkinc.cn/parks",
                header: {
                    Accept: "application/json"
                },
                data: {
                    name: this.name,
                    address: this.address,
                    lat: this.latitude,
                    lng: this.longitude,
                    price: this.price,
                    opening_hours: this.opening_hours,
                    spots_count: this.spots_count
                },
                method: "POST",
                success: (res) => {
                    console.log(res)
                }
            })

        },
        chooseLocation() {
            wx.chooseLocation({
                success: ({ name, address, latitude, longitude }) => {
                    this.name = name
                    this.address = address
                    this.latitude = latitude
                    this.longitude = longitude
                }
            })
        }
    }


}
</script>
<style>
input {
    background-color: #fff;
    padding: 15rpx 25rpx;
}
</style>