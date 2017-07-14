<template>
	<div class="list_nav">
		<ul>
			<li><a href="javascript:void(0)" target="_blank">全部</a></li>
			<li><a href="javascript:void(0)" target="_blank">男上装</a></li>
			<li><a href="javascript:void(0)" target="_blank">男下装</a></li>
			<li><a href="javascript:void(0)" target="_blank">裙装</a></li>
			<li><a href="javascript:void(0)" target="_blank">女套装</a></li>
			<li><a href="javascript:void(0)" target="_blank">女上装</a></li>
			<li><a href="javascript:void(0)" target="_blank">女下装</a></li>
			<li><a href="javascript:void(0)" target="_blank">裙装</a></li>
			<li><a href="javascript:void(0)" target="_blank">女套装</a></li>
			<li><a href="javascript:void(0)" target="_blank">女上装</a></li>
			<li><a href="javascript:void(0)" target="_blank">女下装</a></li>
		</ul>
	</div>
</template>
<style scoped>
a{
	text-decoration: none;

}
	.list_nav{
		height: 40px;
		overflow: hidden;
		background-color: #0aa082;
	}
	.list_nav ul{
		width: auto;
		height: 60px;
		white-space: nowrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}
	.list_nav ul li{
		display: inline-block;
		padding: 0 15px;
		line-height: 40px;
	}
	.list_nav ul li a{
		font-family: 黑体;
		color: #333;
		font-size: 14px;
	}
	.list_nav ul li a:hover{
		color: #fff;
	}
</style>