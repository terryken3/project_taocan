<template>
	<div class="mine" >
		<kefu-header></kefu-header>		
		<kefu-body></kefu-body>		
		<kefu-footer></kefu-footer>		
	</div>
</template>

<script>
// 引入行政区划数据
	import s from "@/data/address.json"
	import list from "@/pages/mine/me/list"
	import hezuo from "@/pages/mine/me/hezuo"
	import MyTop from "@/pages/mine/me/MyTop"
	import Subtn from "@/pages/mine/me/Subtn"
	import kefuFooter from "@/pages/mine/me/kefuFooter"
	import kefuHeader from "@/pages/mine/me/kefuHeader"
	import kefuBody from "@/pages/mine/me/kefuBody"
	import ress from "@/pages/mine/me/ress"
	import ImportContent from "@/pages/mine/me/ImportContent"
	import ZhExit from "@/pages/mine/me/ZhExit"
	import dianxuan from "@/pages/mine/me/dianxuan"
	import peisong from "@/pages/mine/me/peisong"
	import MyHeader from "@/components/MyHeader";
	
	
	
	
	import { mapGetters } from 'vuex'
	export default{
		components:{
			MyHeader,
			list,
			peisong,
			hezuo,
			MyTop,
			ZhExit,ImportContent,
			Subtn,dianxuan,ress,
			kefuBody,kefuHeader,kefuFooter
		},
		data() {
			return {
				shops:[],
				loadIndex:10,
				showIndex:10,
				popupVisible: false,
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
		methods:{
			
			// 控制popup的显示隐藏
	        showPopUp() {
	            this.popupVisible = true;
	        },
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
	        }
		}
	};
</script>

<style scoped>
</style>