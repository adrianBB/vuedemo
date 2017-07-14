<template>
	<div class="db_nav" :class="{fixed:isFixedHeader}">
		<ul>
			<li v-for="item in navItem"><router-link :to="item.url">{{item.text}}</router-link></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
import {mapState, mapActions} from 'vuex'
	export default{
		data(){
			return{
				navItem: [
					{text:"首页",url:"/home"},
					{text:"分类",url:"/category"},
					{text:"购物车",url:"/cart"},
					{text:"我的",url:"/my"},
				]
			}
		},
		computed: {
			//映射State
            ...mapState([
                'isFixedHeader'
            ])
        },
        mounted() {
        	// 监听滚动条
        	window.addEventListener('scroll',this.handlerScroll);		    
        },
        methods: {
        	// 映射Actions中的handlerScroll方法
        	...mapActions([
			    'handlerScroll'
			])
        }
	}
</script>
<style type="text/css">
html {
    font-family:黑体;
    color: #000;
    line-height: 1.5;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
}
	.db_nav{
	font-family:黑体;
		height: 43px;
		line-height: 43px;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
	}
	.db_nav ul {
		white-space: nowrap;
	    overflow-x: auto;
	    -webkit-overflow-scrolling: touch;
	    display: -o-box;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    width: 100%;
	}
	.db_nav ul li{
	    display: inline-block;
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    flex: 1;
	    vertical-align: middle;
	    text-align: center;
	}
	.db_nav ul li a.active{
		color:#3ba94d;
		text-decoration: none;
	}
	.db_nav ul li a{
		color: #4a4a4a;
		font-size: 15px;
	}
	.db_nav.fixed{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
</style>