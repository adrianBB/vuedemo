<template>
	<div class="home">
		<HeaderBar></HeaderBar>
		<NavBar></NavBar>
		<Swiper></Swiper>
		<HotProducts :hotProducts="hotProducts"></HotProducts>
		<HotShops></HotShops>
	</div>
</template>

<script type="text/javascript">
	import {mapState, mapActions} from 'vuex'
	import HeaderBar from '../../components/header.vue'
	import NavBar from '../../components/nav.vue'
	import Swiper from './swiper.vue'
	import HotProducts from './hot_products.vue'
	import HotShops from './hot_shop.vue'
	export default{
		name:"Home",
		computed:{
			//映射state
			...mapState([
				'hotProducts'
			])
		},
		mounted(){
			//获取热门商品列表
			this.getHotProducts();
		},
		methods: {
			...mapActions(['getHotProducts'])
		},
		components:{
			HeaderBar,
			NavBar,
			Swiper,
			HotProducts,
			HotShops
		}
	}
</script>
<style type="text/css">
	.home{
		padding-bottom: 30px;
		background-color: #f8f8fe;
		font-family:黑体;
	}
	.swiper-pagination .swiper-pagination-bullet{
		opacity: 1;
		background: #fff;
	}
	.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{
		background: #0aa082 !important;
	}
	.db_products{
	padding: 5px;
	}
	.db_products ul:after{
		display: block;
		content: "";
		clear: both;
		height: 0;
	}
	.db_products ul li{
		width: 50%;
		float: left;
		padding: 0 5px;
		margin-bottom: 10px;
		box-sizing: border-box;
	}
	.db_products .pdt_item{
		background-color: #fff;
		box-shadow: 0 0 2px #ccc;
	}
	.db_products .pdt_img{
		display: block;
		width: 100%;
		height: 5rem;
	}
	.db_products .pdt_img img{
		max-width: 100%;
		max-height: 100%;
	}
	.db_products .pdt_detail{
		padding: 0 5px;
		box-sizing: border-box;
	}
	.db_products .pdt_title a{
		display: block;
		padding: 5px 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #0aa082;
		font-size: 14px;
	}
	.db_products .pdt_price{
		padding: 5px 0;
	}
	.db_products .pdt_new_price{
		color: red;
		font-weight: 600;
	}
	.db_products .pdt_old_price{
		color: #000;
	}
</style>

