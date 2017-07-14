<template>
	<div class="my">
		<HeaderBar></HeaderBar>
		<NavBar></NavBar>
		<div class="ODscIpLc">
			<a href="https://www.douban.com/people/163278877/"><img src="https://img3.doubanio.com/icon/user_large.jpg"></a><span>你爸爸啊</span>
		</div>
		<ul class="_1Scu7QCl">
			<li class="first">
				<a href="/people/orders/">
					<i class="mui-icon arrow-right">></i>
					<span class="uyir7PuK">查看全部订单</span>
				</a>
			</li>
			<li class="_1mHYT3Qs">
				<div>
					<a href="/people/orders/?status=NOT_PAID">
						<span><!-- react-text: 36 -->待付款<!-- /react-text --></span>
					</a>
					|
					<a href="/people/orders/?status=NOT_SEND">
						<span><!-- react-text: 39 -->待发货<!-- /react-text --></span>
					</a>
					|
					<a href="/people/orders/?status=SEND">
						<span><!-- react-text: 42 -->待收货<!-- /react-text --></span>
					</a>
					|
					<a href="/people/refunds/">
						<span><!-- react-text: 45 -->退换货<!-- /react-text --></span>
					</a>
				</div>
			</li>
			<li class="three">
				<a href="/people/coupons/">
					<i class="mui-icon arrow-right">></i>
					<span class="uyir7PuK">我的优惠券</span>
				</a>
			</li>
			<li class="four">
				<a href="/people/address/">
					<i class="mui-icon arrow-right">></i>
					<span class="uyir7PuK">收货地址管理</span>
				</a>
			</li>
		</ul>
		<div class="_1xQuOUZg"><a href="https://accounts.douban.com/logout?ck=hHwf&amp;amp;redir=https%3A%2F%2Fshiji.douban.com%2Fpeople%2F"><span>退出登录</span></a></div>
	</div>
</template>

<script type="text/javascript">
	import HeaderBar from '../../components/header.vue'
	import NavBar from '../../components/nav.vue'

	
	export default {
		data() {
			return {
				
			}
		},
	
		components: {
			HeaderBar,
			NavBar
		}
	}
</script>
<style scoped>

body{
	font-size:36px;
	background-color: #f7f7f7;
}
	.html{
		font-family:黑体;
		background-color: #f7f7f7;
	}
	.loading{
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 10000;
		width: 16px;
		height: 16px;
		margin: -16px 0 0 -16px;
		background: url(../../assets/images/loading.gif);
	}
	.none{
		text-align: center;
		padding: 10px 0;
		color: #999;
		font-size: 12px;
	}
	.ODscIpLc {
    	font-size: 45px;
    	padding-bottom: 45px;
    	padding-top: 40.5px;
    	background-color: #f7f7f7;
	}
	.ODscIpLc a {
   		height: 2rem;
   		width: 2rem;
   		margin: 0 auto;
    display: block;
    vertical-align: middle;
    color: #fff;
    text-align: center;
    background-color: transparent;
    text-decoration: none;
    a:-webkit-any-link {
    color: -webkit-link;
    text-decoration: underline;
    cursor: auto;
}
}
.ODscIpLc a img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.ODscIpLc span {
    margin-top: 12px;
    display: block;
    text-align: center;
    color: #000;
    font-size: 0.35rem;
    font-family: 黑体;
}
._1Scu7QCl{
	display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 1rem;
    list-style: none;
    font-weight: 400;		

}
._1Scu7QCl li{
	box-shadow:1px 0 10px rgba(0, 0, 0, .1); 
}
._1Scu7QCl .first a(){
display: list-item;
    text-align: -webkit-match-parent;
    background-color: transparent;
}

._1Scu7QCl li a{
	color: #b9b9b9;
	font-family: 黑体;
}
._1Scu7QCl li a .mui-icon {
    color: #cbcbcb;
    margin-right: 0rem;
    float: right;
    font-size: 20px;
}
.mui-icon {
    font-family: "market-ui-iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke-width: 0.2px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
}
._1Scu7QCl{
	margin-right: 1rem;
	
	
}
._1Scu7QCl div{
	width: 100%;
	
}
._1mHYT3Qs div{
	color: #b9b9b9;
}
._1Scu7QCl ._1mHYT3Qs div{
	display: flex;
	justify-content:space-between;
	align-items:center;
	margin-right: 1rem;
}
._1Scu7QCl ._1mHYT3Qs{
	
	box-shadow:1px 0 10px rgba(0, 0, 0, .1); 
}
.four{

    border-bottom-style: solid;
    border-bottom-color: #f7f7f7;
    background-color: #fff;
}
._1xQuOUZg {
    font-size: 16px;
        text-align: center;

}
._1xQuOUZg a span{
	color: #b9b9b9;
	font-family: 黑体;
}
</style>