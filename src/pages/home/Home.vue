<template>
	<section class="home">
		<!-- 头部start -->
		<header>
			<My-header title="首页">
				<span class="iconfont icon-sousuo1" slot="h-left"></span>
				<span slot="title" @click="showPopUp()" v-model="searchPlace">
					<span>{{searchPlace}}</span>
					<span class="iconfont icon-xiala"></span>
				</span>
				<router-link slot="h-right" to="/account">
					<span class="iconfont icon-wode_"></span>
				</router-link>
			</My-header>
			<mt-popup v-model="popupVisible" position="top" >
				<mt-picker  :slots="addressSlots" class="picker" @change="onAddressChange" :visible-item-count="5" :itemHeight="72"></mt-picker>
				<span>请选择您所在的城市</span>
				<mt-button type="default" :plain="false" @click="popupVisible = !popupVisible">确定</mt-button>
			</mt-popup>
		</header>
		<!-- 头部end -->

		<!-- banner轮播图start -->
		<div class="home-banner">
			<Banner :autoplay="5000"  paginationPositon="center">
				<div slot="swiper-con" class="swiper-slide">
					<a href="#">
						<img src="../../assets/images/banner/banner1.jpg" alt="" />
					</a>
				</div>
				<div slot="swiper-con" class="swiper-slide">
					<a href="#">
						<img src="../../assets/images/banner/banner2.jpg" alt="" />
					</a>
				</div>
				<div slot="swiper-con" class="swiper-slide">
					<a href="#">
						<img src="../../assets/images/banner/banner3.jpg" alt="" />
					</a>
				</div>
				<div slot="swiper-con" class="swiper-slide">
					<a href="#">
						<img src="../../assets/images/banner/banner4.jpg" alt="" />
					</a>
				</div>
				<div slot="swiper-con" class="swiper-slide">
					<a href="#">
						<img src="../../assets/images/banner/banner5.jpg" alt="" />
					</a>
				</div>
				<div slot="swiper-con" class="swiper-slide">
					<a href="#">
						<img src="../../assets/images/banner/banner6.jpg" alt="" />
					</a>
				</div>
			</Banner>
		</div>
		<!-- banner轮播图end -->

		<!-- 主页面按钮start -->
		<section class="primary-item-bar clearfix">
			<PriItem icon-txt="美食" title="美食" bg-style="grad-red">
				<span class="iconfont icon-haofangtuo400iconfont2meishi" slot="icon-inner"></span>
			</PriItem>
			<PriItem icon-txt="超市" title="饕超市" bg-style="grad-blue">
				<span class="iconfont icon-fuwuchaoshi" slot="icon-inner"></span>
			</PriItem>
			<PriItem icon-txt="生鲜" title="生鲜果蔬" bg-style="grad-green">
				<span class="iconfont icon-xigua" slot="icon-inner"></span>
			</PriItem>
			<PriItem icon-txt="专送" title="饕专送" bg-style="grad-orange">
				<span class="iconfont icon-waimai-" slot="icon-inner"></span>
			</PriItem>
			<PriItem title="午餐优选" bg-style="grad-yellow">
				<span class="iconfont icon-youxuan" slot="icon-inner"></span>
			</PriItem>
			<PriItem title="甜点饮品" bg-style="grad-pink">
				<span class="iconfont icon-yinpin" slot="icon-inner"></span>
			</PriItem>
			<PriItem title="小吃馆" bg-style="grad-skyblue">
				<span class="iconfont icon-xiaochi" slot="icon-inner"></span>
			</PriItem>
			<PriItem title="家常菜" bg-style="grad-purple">
				<span class="iconfont icon--xiaochao" slot="icon-inner"></span>
			</PriItem>
		</section>
		<!-- 主页面按钮end -->

		<!-- 优惠专区start -->
		<section class="discount">
			<h3>优惠专区</h3>
			<div class="d-row1 clearfix">
				<div class="dday-discount fl">
					<Discount-box :bg="ddiscountBg" :title="day" flag="天天特价" flagBg="#f85858" des="必吃好店"></Discount-box>
				</div>
				<div class="mmeal-discount fl">
					<Discount-box :bg="mdiscountBg" title="冰爽下午茶" flag="餐餐优惠" flagBg="#f7954a"  des="茶饮小吃5折"></Discount-box>
				</div>
			</div>
			<div class="d-row2 clearfix">
				<div class="musteat fl">
					<SmallDiscountBox title="必吃" des="招牌6折享">
						<img src="../../assets/images/youhui1.jpg" height="170" width="170" alt="" slot="img">
					</SmallDiscountBox>
				</div>
				<div class="quality fl">
					<SmallDiscountBox title="品质" des="配送费减免">
						<img src="../../assets/images/youhui2.jpg" height="170" width="170" alt="" slot="img">
					</SmallDiscountBox>
				</div>
				<div class="fresh fl">
					<SmallDiscountBox title="鲜食" des="低至4.9元">
						<img src="../../assets/images/fresh.jpg" height="170" width="170" alt="" slot="img">
					</SmallDiscountBox>
				</div>
				<div class="supermarket fl">
					<SmallDiscountBox title="超市" des="五折生鲜日">
						<img src="../../assets/images/supermarket1.jpg" height="170" width="170" alt="" slot="img">
					</SmallDiscountBox>
				</div>
			</div>
		</section>
		<!-- 优惠专区end -->

		<p>深圳</p>
		<!-- 店铺列表start -->
		<div class="shops">
			<Shops :key="item.shop_id" v-for="(item, index) in shops" v-if="index<loadIndex" v-show="index<showIndex" :shop-name="item.name" :shop-score="item.evaluation_score" :shop-sold="item.sold_count" :start-price="item.initial_price" :d-fee="item.delivery_fee" :d-time="item.delivery_time">
				<img slot="smallImg" :src="item.cover_url" width="100%" height="100%">
			</Shops>
		</div>
		<!-- 店铺列表end -->

	</section>
</template>

<script>
	// 引入行政区划数据
	import s from "@/data/address.json"

	// 引入mint-ui插件中的组件
	// import { Picker, Popup, Button } from "mint-ui"
	
	// 引入自定义组件
	import Shops from "@/components/Shops"
	import MyHeader from "@/components/MyHeader"
	import Banner from "@/components/Banner"
	import PriItem from "@/components/PriItem"
	import DiscountBox from "@/components/DiscountBox"
	import SmallDiscountBox from "@/components/SmallDiscountBox"

	// 全局函数getpos(obj),获取传入对象距离页面顶端的距离
	function getPos(obj){
		var sTop = obj.offsetTop;
		while(obj=obj.offsetParent){
			sTop += obj.offsetTop;
		}
		return sTop;
	}
	export default {
		components:{
			Shops,
			MyHeader,
			PriItem,
			Banner,
			DiscountBox,
			SmallDiscountBox
			// Picker,
			// Popup,
			// Button
		},
		data() {
			return {
				ddiscountBg:require("../../assets/images/youhui.jpg"),
				mdiscountBg:require("../../assets/images/xiawucha.jpg"),
				day:"周二美食榜",
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
			weekday() {
				var date = new Date();
				switch(date.getDay()) {
					case 1:
						this.day = "周一美食榜";
						this.ddiscountBg = require("../../assets/images/youhui.jpg");
						break;
					case 2:
						this.day = "周二美食榜";
						this.ddiscountBg = require("../../assets/images/youhui.jpg");
						break;
					case 3:
						this.day = "周三半价日";
						this.ddiscountBg = require("../../assets/images/youhui.jpg");
						break;
					case 4:
						this.day = "周四美食榜";
						this.ddiscountBg = require("../../assets/images/youhui.jpg");
						break;
					case 5:
						this.day = "周五半价日";
						this.ddiscountBg = require("../../assets/images/youhui.jpg");
						break;
					default:
						this.day = "周末狂欢节";
						this.ddiscountBg = require("../../assets/images/youhui.jpg");
						break;
				}
			},
			// 店铺加载函数,全屏滚动scroll事件中触发
			shopLoad(e) {
				var e = e||window.event,
					shopDom = document.querySelector(".shops"),
					sItemDom = document.querySelector(".shopItem");
				
				if( !shopDom || !sItemDom) {
					return false;
				}
				var itemMargin = parseInt(window.getComputedStyle(sItemDom, null).marginBottom) + parseInt(window.getComputedStyle(sItemDom, null).marginTop),
					clientHeight = document.documentElement.clientHeight||document.body.clientHeight,
					scrollTop = document.documentElement.scrollTop||document.body.scrollTop,
					row = (clientHeight + scrollTop - getPos(shopDom))/(sItemDom.offsetHeight+itemMargin);

				row = Math.ceil(row);
				
				// 设置懒加载显示的下标，若已加载则不隐藏
				if(row+8 > this.loadIndex) {
					this.loadIndex = row+8;
				}
				// 动态瀑布流显示/隐藏内容的下标
				this.showIndex = row+4;
			},
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
		},
		beforeCreate() {
			var that = this;
			// 通过axios插件获取接口返回数据
			this.axios.get("/api/shopData").then(function(res) {
				that.shops = res.data.data.shop_datas;
			});
		},
		mounted() {
			var vu = this;
			window.addEventListener("scroll",vu.shopLoad);
			this.weekday();
		},
	};
</script>

<style lang="less" scoped>
.header .icon-xiala{
	font-size:26px;
}
.picker{
	width:750px;
	z-index:9999;
	left:0;
}
.primary-item-bar{
	overflow:hidden;
	position:relative;
	width:750px;
	padding-bottom:60px;
	.iconfont{
		font-size:50px;
	}
}
.discount{
	text-align:left;
	padding-left:20px;
	padding-right:20px;
	h3{
		font-size:40px;
		font-weight:bold;
		margin-bottom:16px;
	}
	.dday-discount{
		margin-right:10px;
		margin-bottom:16px;
	}
	.d-row2{
		&>div{
			margin-right:10px;
			margin-bottom:16px;
		}
		&>div:last-child{
			margin-right:0;
		}
	}
}
</style>