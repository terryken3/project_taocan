<template>
	<mt-popup v-if="popupVisible" position="top" >
		<mt-picker  :slots="addressSlots" class="picker" @change="onAddressChange" :visible-item-count="5" :itemHeight="72"></mt-picker>
		<span>请选择您所在的城市</span>
		<mt-button type="default" :plain="false" @click="popupVisible = !popupVisible">确定</mt-button>
	</mt-popup>
</template>

<script>
// 引入行政区划数据
import s from "@/data/address.json";
export default{
	data() {
		return {
            // picker中行政区查询条件数据start
            addressSlots: [{
                flex: 1,
                defaultIndex: 19,
                values: Object.keys(s), // 把省的集合赋给第1个slot
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                defaultIndex: 3,
                values:Object.keys(s["广东省"]), // 市的集合赋值给第3个slot
                className: 'slot3',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot4'
            }, {
                flex: 1,
                defaultIndex: 2,
                values: s["广东省"]["深圳市"], // 数组区赋值给第5个slot
                className: 'slot5',
                textAlign: 'center'
            }],
            addressProvince: '省',
            addressCity: '市',
            addressDistrist: '区',
            searchPlace: '', // 地区
            // picker中行政区查询条件数据start
		}
	},
	computed:{
		popupVisible() {
			return false
		}
	},
	methods:{
		
        // 地区选择改变时触发
        onAddressChange(picker, values) {
            let province = Object.keys(s);
            let city = Object.keys(s[values[0]]) || [""];
            picker.setSlotValues(1, city); // 把市的集合赋给第二个value
            let district = s[values[0]][values[1]] || [""];
            picker.setSlotValues(2, district); // 把县的集合赋给第三个value
            if (values[0] === '省') {
                this.addressProvince = '';
            } else {
                this.addressProvince = values[0] || "";
            }
            if (values[1] === '市') {
                this.addressCity = '';
            } else {
                this.addressCity = values[1] || "";
            }
            if (values[2] === '县' || values[2] === '区') {
                this.addressDistrist = '';
            } else {
                this.addressDistrist = values[2] || "";
            }
            // 最终选择的地址
            this.searchPlace = this.addressProvince + this.addressCity + this.addressDistrist;
            this.$emit("addressChange",this.searchPlace);
        }
	}
};
</script>

<style lang="less">
.picker{
	width:750px;
	z-index:9999;
	left:0;
}
</style>