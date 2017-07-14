<template>
	<div class="db_swiper">
		<swiper :options="swiperOption">
			<swiperSlide v-for="slide in sliders">
				<a :href="slide.url" target="_blank"><img :src="slide.img"></a>
			</swiperSlide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>		
	</div>
</template>

<script type="text/javascript">
	import {mapState, mapActions} from 'vuex'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default{
		 name: 'carrousel',
		 data(){
		 	return{
		 		swiperOption:{
		 			initialSlide:1,
		 			autoplay:3000,
		 			loop:true,
		 			setWrapperSize:true,
		 			pagination:'.swiper-pagination',
		 			paginationClickable:true,
		 			observeParents:true
		 		}
		 	}
		 },
		 computed:{
		 	...mapState([
		 		'sliders'
		 	])
		 },
		 mounted() {
		    //获取图片列表
			this.getSliders();
		},
		methods: {
        	...mapActions([
			    'getSliders'
			])
        },
		components: {
		   	swiper,
		    swiperSlide
		}
	}
</script>
<style scoped>
	.db_swiper{
		margin: 2px 0 5px;
	}
	.db_swiper .swiper-slide{
		height: 100px;
		background-color: #e0e0e0;
	}
	.db_swiper .swiper-slide img{
		width: 100%;
		height: 100%;
	}
	.swiper-pagination-bullet-active{
		background-color:#000;
	}
</style>

