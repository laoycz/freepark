<template>
    <view>
        <button @click="chooseLocation">选取位置</button>
        <view>{{ name }}</view>
        <view>{{ address }}</view>
        <input v-model="price" type="nickname" class="uni-input" placeholder="价格" />
        <input v-model="opening_hours" type="nickname" class="uni-input" placeholder="营业时间" />
        <input v-model="spots_count" type="nickname" class="uni-input" placeholder="空位" />
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
                success:(res)=>{
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