var joinState = location.search.getParam('joinState');//0没参加过 else参加过
var shareOpenId = location.search.getParam('shareOpenId');//分享人的
var openid = location.search.getParam('openid');//当前用户的
localStorage.setItem("openid",openid);
var teamid = location.search.getParam('teamid');//当前团的标识
var initiator = false;
var page = 0;
var zys = 1;

var ff = ['3','1','0'];
var msgg = '';
function sendMessage1(){
	WeixinJSBridge.call('showOptionMenu'); 
	$.ajax({
		url:'/wechat/getShareUrl.go',
		type:'get',
		dataType:"text",
        success:function(msg){
        	msgg = msg.replace('SHAREOPENID',teamid+'__9188__'+openid);
        	if(teamid == '' || teamid == undefined){
				
			}else{
				$.ajax({
					url:'/wechat/queryDatas.go',
					type:'POST',
					dataType:'xml',
					data:{
						func: 'teamglobal',
						teamid: teamid//27826cb788cf4a3daa0a5d9d70d3f186
					},
					success:function(xml){
						var R = $(xml).find('Resp');
						var code = R.attr('code');
						var desc = R.attr('desc');
						if(code == "0"){//查询成功
							$('#jdt').show();
							
							var r = R.find('row');
							r.each(function(aa){
								var iteamid = $(this).attr('iteamid');//团队id
								var cname = $(this).attr('cname');//发起人昵称
								var icorrectnum = $(this).attr('icorrectnum');//中奖人数
								var iactive = $(this).attr('iactive');//状态 0召集中 1已成团可参加 2已满员3已结束组团失败 4已结束组团成功
								var itcmoney = $(this).attr('itcmoney');//发起人提成奖金
								
								var itype = $(this).attr('itype');//类型  0 9188是土豪 1 我是土豪
								var imostmoney = $(this).attr('imostmoney');//最多送出奖金
								var ijoinnum = $(this).attr('ijoinnum');//总参与人数
								var cguessscale = $(this).attr('cguessscale');//竞猜比例
								var copenid = $(this).attr('copenid');//发起人微信号
								var iselect = $(this).attr('iselect');//发起人投注选
								var imatchid = $(this).attr('imatchid');//比赛对阵id
								var imatchtype = $(this).attr('imatchtype');//场次类型
								var cleftteam = $(this).attr('cleftteam');//主队
								var crightteam = $(this).attr('crightteam');//客队
								var cdesc = $(this).attr('cdesc');//场次描述
								var cleftimg = $(this).attr('cleftimg');//主队图标
								var crgihtimg = $(this).attr('crgihtimg');//客队图标
								var cadddate = $(this).attr('cadddate');//发起时间
								var cbegindate = $(this).attr('cbegindate');//比赛时间
								var copendate = $(this).attr('copendate');//开启时间
								var iminnum = $(this).attr('iminnum');//最少参与人数
								var imostnum = $(this).attr('imostnum');//最多参与人数
								var imostteam = $(this).attr('imostteam');//最多团数（不包括土豪）
								var ipermoney = $(this).attr('ipermoney');//每人送奖金
								var iteammost_money = $(this).attr('iteammost_money');//每团最多派送奖金
								var istate = $(this).attr('istate');//开启状态  0未开启 1已开启 2团数已满 3已结束
								var cscore = $(this).attr('cscore');//最终比分
								var iresult = $(this).attr('iresult');//比赛结果
								var ireturn = $(this).attr('ireturn');//派奖状态0未派奖 1已派奖
								var ibossteam_num = $(this).attr('ibossteam_num');//土豪团数
								var ibossteam_join_num = $(this).attr('ibossteam_join_num');//土豪团参与人数
								var iourteam_num = $(this).attr('iourteam_num');//9188团数
								var iourteam_join_snum = $(this).attr('iourteam_join_snum');//9188团参与人数
								var ifailteam_num = $(this).attr('ifailteam_num');//失败团数
								var ifaiperson_num = $(this).attr('ifaiperson_num');//失败人数
								var iourmoney = $(this).attr('iourmoney');//9188总派送奖金
								var ibossmoney = $(this).attr('ibossmoney');//土豪总派送奖金
								var coperator = $(this).attr('coperator');//操作人
								var successteam = $(this).attr('successteam');//已成功参与该场次的竞猜团数
								var csharetitle = $(this).attr('csharetitle');
								var csharecontent = $(this).attr('csharecontent');//分享内容介绍
								var cshareimg = $(this).attr('cshareimg');
								var ideuce = $(this).attr('ideuce');//0  无平局  1有平局
								
								//发起人提成
								var tc_ = '';
								if(icorrectnum >0){
									tc_ = itcmoney?itcmoney:'';
								}
								
								var gg = [cleftteam+'胜','打平',crightteam+'胜'];
								
								
								if(iactive == 2 || iactive == 3 || iactive == 4){
									$('#nowtime').hide();
									$('#option').hide();
								}else{
									$('#option').show();
									if(ideuce == 0){
										$('#option span').eq(1).hide();
									}
								}
								
								if(itype == 1){
									$('#tuhao').html('土豪');
									$('#tmoney').html(imostmoney);
									$('#nowtime').hide();
								}else{
									var zong_ = parseFloat(ipermoney) * parseFloat(ijoinnum);
	        						zong_ = zong_>parseFloat(iteammost_money)?iteammost_money:zong_;
									$('#tmoney').html(zong_);
								}
								$('#cname').html(cname);
								var html = '';
								html += '<div class="flagLeft left"><div class="flagBg">';
								html += '<img alt="主队" src="/word_weixin/img/flag_ys/'+cleftimg+'"></div><span>'+cleftteam+'</span></div>';
								if(cscore != ''){
									if(cscore.indexOf(':')>0){
										html += '<span class="left score"><b>'+cscore.split(':')[0]+'</b><cite>:</cite><strong>'+cscore.split(':')[1]+'</strong></span>';
									}else{
										html += '<span class="left flagVs">VS</span>';
									}
								}else{
									html += '<span class="left flagVs">VS</span>';
								}
								html += '<div class="flagLeft right"><div class="flagBg">';
								html +=	'<img src="/word_weixin/img/flag_ys/'+crgihtimg+'" alt="客队"></div><span>'+crightteam+'</span></div>';
								$('#duizhen').html(html);
								M = parseInt(cbegindate.substr(5,2),10);//月
								D = parseInt(cbegindate.substr(8,2),10);//日
								hm = cbegindate.substr(11,5);//时分
								$('#cdesc_cbegindate').html(cdesc+'&nbsp;'+M+'月'+D+'日'+hm);
								$('#option_one').html(cleftteam);
								$('#option_two').html(crightteam);
								cguessscale = cguessscale.split(':');
								var sheng = parseInt(cguessscale[0]);
								var ping = parseInt(cguessscale[1]);
								var fu = parseInt(cguessscale[2]);
								
								var zong = sheng+ping+fu;
								var rate_1,rate_2,rate_3;
								rate_1 = Math.floor(sheng/zong*100);
								if(fu == 0){
									rate_2 = 100-rate_1;
									rate_3 = 0;
								}else{
									rate_2 = Math.floor(ping/zong*100);
									rate_3 = 100 - (rate_2+rate_1);
								}
								$('#scale div:eq(1)').css('width',rate_1+'%');
								$('#scale div:eq(0)').css('width',(rate_1+rate_2)+'%');
								
								if(sheng == 0){
									$('#renshu strong').eq(0).hide();
								}else{
									$('#renshu strong:eq(0)').css('left',rate_1/2-6+'%');
									$('#renshu strong').eq(0).html(sheng+'人');
								}
								if(ping == 0){
									$('#renshu strong').eq(1).hide();
								}else{
									$('#renshu strong:eq(1)').css('left',(rate_1+rate_2/2)-6+'%');
									$('#renshu strong').eq(1).html(ping+'人');
								}
								
								if(fu == 0){
									$('#renshu strong').eq(2).hide();
								}else{
									$('#renshu strong:eq(2)').css('left',(rate_1+rate_2+rate_3/2)-6+'%');
									$('#renshu strong').eq(2).html(fu+'人');
								}
								
								if(copenid == openid){//当前用户就是发起人
									initiator = true;
									if(itype == 1){
										if(iactive ==2){
											$('#div_1 p').eq(5).show();
										}else if(iactive ==3 || iactive == 4){
											$('#div_1 p').eq(6).show();
										}else{
											$('#div_1 p').eq(3).show();
										}
										
										$('#cname2').html(cname);
										$('#smoney').html(imostmoney);
									}else{
										if(iactive ==2){
											$('#div_1 p').eq(5).show();
										}else if(iactive ==3){
											$('#div_1 p').eq(6).show();
										}else{
										}
										
										$('#div_1 p:eq(0) em').html(gg[ff.indexOf(iselect)]);
										$('#div_1 p:eq(0)').show();
									}
									if(iactive == 0 || iactive == 1){
										$('#invite_friend').show();
									}
									
									$('#option').attr('class','flagSelect2 clearfix');
									
									
									iselect = iselect.replace('0','2').replace('3','0');
									$('#option span').eq(iselect).attr('class','cur');
									
								}else{//当前用户不是发起人
									if(joinState == '0'){//没参加过
										if(iactive ==2){
											$('#div_1 p').eq(5).show();
										}else if(iactive ==3 || iactive == 4){
											$('#div_1 p').eq(6).show();
										}else{
											if(itype == 1){
												$('#div_1 p').eq(4).show();
											}else{
												$('#div_1 p').eq(1).show();
											}
										}
										$('#join_m ,#join_y').html(ipermoney);
										
										if(iactive == 0 || iactive == 1){
											$('#join').show();
										}else{
											$('#my_free').show();
										}
										
										$('#option').attr('class','flagSelect clearfix');
										$('#option span').Touch(function(){
											if($(this).hasClass('cur')){
												$('#join').attr('class','payment payment2');
												$(this).removeClass('cur');
												return;
											}
											$(this).addClass('cur').siblings().removeClass('cur');
											$('#join').attr('class','payment');
										});
										//参与按钮		
										$('#join').bind('click',function(){
											WX.canyu(gg,ipermoney);
										});
									}else{//已经参加过
										if(iactive ==2){
											$('#div_1 p').eq(5).show();
										}else if(iactive ==3 || iactive == 4){
											$('#div_1 p').eq(6).show();
										}else{
											$('#div_1 p').eq(2).show();
										}
										
										if(itype == 1){//土豪送
											if(iactive == 0 || iactive == 1){
												$('#my_tyrant').show();
											}
											$('#my_tyrant').click(function(){
												$.ajax({
													url:'/wechat/isBind.go',
													dataType:'xml',
													data:{
														openid:openid
													},
													type:'POST',
													success:function(xml){
														var R = $(xml).find('Resp');
														var code = R.attr('code');
														var desc = R.attr('desc');
														if(code == 0){
															var r= R.find('row');
															var bindstate = r.attr('bindstate');//0未绑定1已绑定
															if(bindstate == '0'){
																$('#dbind').css({left:'50%',top:'50%',marginLeft:'-10rem',marginTop:'-'+$('#dbind').height()/2+'px'});
																$('#dbind').show();
																$('#invite3').show();
															}else{
																window.location.href='/word_weixin/tyrant/';
															}
														}else{
															WW.tx(desc);
														}
													}
												});
											});
										}else{//9188送
											if(iactive == 0 || iactive == 1){
												$('#invite_friend').show();
											}
										}
										
										$('#option').attr('class','flagSelect2 clearfix');
									}
								}
								
								
								if(parseInt(ijoinnum)>=parseInt(iminnum) || itype == 1){
									$('#join_detail').html('已参与<em class="yellow">'+ijoinnum+'</em>人,发起人提成<em class="yellow">10%</em><a href="/word_weixin/myrecord/" class="right blue fontsize075">我的奖金</a>');
								}else{
									$('#join_detail').html('已参与<em class="yellow">'+ijoinnum+'</em>人,还差<em class="yellow">'+(parseInt(iminnum)-parseInt(ijoinnum))+'</em>人参与才能成功获得奖金<a href="/word_weixin/myrecord/" class="right blue fontsize075">我的奖金</a>');
								}
								WX.step2(teamid,gg,msgg,csharecontent,csharetitle,cleftteam,crightteam,cscore,cshareimg,tc_);
								$('#click_more').click(function(){
									$("#click_more").hide();
									$(".loading").show();
									WX.step2(teamid,gg);
								});
								if(aa == 0)return false;
							});
						}
					}
				});
				
				
			}
        	
        }
		
	});
}

$(function(){
	if(document.addEventListener){
		document.addEventListener('WeixinJSBridgeReady', sendMessage1, false);  
	}else if(document.attachEvent){
		document.attachEvent('WeixinJSBridgeReady'   , sendMessage1);	
		document.attachEvent('onWeixinJSBridgeReady' , sendMessage1);  
	}
	WX.initial();
});

var WX = {
		initial:function(){
			
			$('#invite_friend').bind('click',function(){//邀请小伙伴
				WW.zhezhao();
			});
			$('#invite3').click(function(){
				$('#jiang').hide();
				$('#invite3').hide();
				$('#dbind').hide();
				$('#invite_friend_xy').hide();
			});
			$('#invite_friend_xy').click(function(){
				$('#invite3 ,#invite_friend_xy').hide();
			});
			$('#dbind a:eq(1)').click(function(){
				$('#invite3').hide();
				$('#dbind').hide();
			});
			$('#xuanyao').click(function(){
				var bonus = $('#bonus').html();
				$('#jj_'+openid).parent().html('  <em class="yellow">'+bonus+'</em>元');
				
				$('#jiang').hide();
				$('#invite_friend_xy').show();
			});
			$('#my_share').click(function(){
				$('#invite3').show();
				$('#invite_friend_xy').show();
			});
		},
		canyu:function(gg,ipermoney){
			
			var codes = $('#option .cur').attr('tz');
			if(openid == '' || openid == undefined){//
				WW.tx('网络不给力,请刷新页面');//openid获取失败
			}else if(shareOpenId == '' || shareOpenId == undefined){//
				WW.tx('网络不给力,请刷新页面');//shareOpenId获取失败
			}else if(codes == '' || codes == undefined){
				WW.tx('请选择一个比赛结果');
			}else{
				var data = {
						openid: openid,
						codes: codes,
						shareOpenId : shareOpenId,
						teamid : teamid
				};
				$.ajax({
					url:'/wechat/joinMatch.go',
					type:'POST',
					dataType:'xml',
					data:data,
					success:function(xml){
						var R = $(xml).find('Resp');
						var code = R.attr('code');
						var desc = R.attr('desc');
						if(code == '0'){
							var r = R.find('row');
							var teamid = r.attr('teamid');
							var openid_ = r.attr('openid');
//							var cguessscale = r.attr('cguessscale');
							
							$.ajax({
								url:'/wechat/getShareUrl.go',
								type:'get',
								dataType:"text",
						        success:function(msg){
						        	msg = msg.replace('SHAREOPENID',teamid+'__9188__'+openid_);
						        	window.location.href=msg;
						        }
								
							});
						}else if(code == '-2000'){
							window.location.href = 'http://mp.weixin.qq.com/s?__biz=MjM5NjE1NDM2MA==&mid=200264506&idx=1&sn=f6304eba3bc7cfe2782e9231a10b0bd1#rd';
						}else{
							
							WW.tx(desc);
						}
					}
				});
			}
		},
		step2:function(teamid,gg,msgg,csharecontent,csharetitle,cleftteam,crightteam,cscore,cshareimg,tc_){
			
			page++;
			var data = {
					openid:openid,
					func:'teamjoin_detail',
					teamid:teamid,
					pn: page,
					ps:'5'
			};
			$.ajax({
				url:'/wechat/queryDatas.go',
				dataTpye:'xml',
				type:'POST',
				data:data,
				success:function(xml){
					$(".loading").hide();
					var R  = $(xml).find('Resp');
					var code = R.attr('code');
					var desc = R.attr('desc');
					if(code == '0'){
						
						var rr = R.find('rows');
						zys = rr.attr('tp');
						if(page>=zys){
							$("#click_more").hide();
						}else{
							$("#click_more").show();
						}
						var r = R.find('row');
						var html = '';
						var vv = '';
						var tt = false;
						var xy = false;
						var cc_name = '';
						var cc_iselect = '';
						var iswin_ = '';
						r.each(function(aa){
							 var rec = $(this).attr('rec');//编号
							 var copenid = $(this).attr('copenid');//参与人微信号
							 var cname = $(this).attr('cname');//微信昵称
							 var iteamid = $(this).attr('iteamid');//团队编号
							 var iselect = $(this).attr('iselect');//竞猜内容
							 var cadddate = $(this).attr('cadddate');//参与时间
							 var ccountdate = $(this).attr('ccountdate');//算奖时间
							 var cawarddate = $(this).attr('cawarddate');//领奖时间
							 var iwin = $(this).attr('iwin');//获得奖金
							 var ireturn = $(this).attr('ireturn');//领奖状态（0未算奖 1已算奖待领 2已领奖）
							 var headimg = $(this).attr('headimg');//用户头像
							 var iswin = $(this).attr('iswin');//0未计奖 1未中奖 2已中奖 3组团失败
							 if(headimg == ''){
								 headimg = '/word_weixin/img/username.png';
							 }
							 
							 var M = cadddate.substr(5,2)+'月';
							 var D = cadddate.substr(8,2)+'日';
							 var hms = cadddate.substr(11,5);
							 
							 var iswins = '等待开奖';
							 if(iswin == '3'){
								 iswins = '组团失败';
							 }else{
								 if(ireturn == 0){
									 iswins = '等待开奖';
								 }else if(ireturn == 1){
									 if(parseFloat(iwin)>0){
										 if(openid == copenid){
											 iswins = '<em id=\"jj_'+copenid+'\" class="bonus" onclick="receive(\''+copenid+'\')">领取奖金</em>';
										 }else{
											 iswins = '等待领奖';
										 }
									 }else{
										 iswins = '未中奖';
									 }
								 }else if(ireturn == 2 ||ireturn == 3){
									 iswins = (iwin==0?"未中奖":"奖金<em class=\"yellow\">"+iwin+"</em>元");
								 } 
							 }
							 var sg = gg[ff.indexOf(iselect)];
							 if(page == 1 && aa==0 && !initiator && joinState != 0){//当前用户不是发起人
								 $('#div_1 p:eq(2) em').html(sg);
								 
								 
								 vv+='<dl><dt><span class="left admiIco"><img src="'+headimg+'" /></span><div class="left admiText">';
								 vv+='<h3 class="yellow">您自己</h3>';
								 vv+='<p>'+M+D+hms+'</p></div></dt><dd>'+sg+'</dd>';
								 
								 vv+='<dd>'+iswins+'</dd>';
								 vv += '</dl>';
								 iselect = iselect.replace('0','2').replace('3','0');
								 $('#option span').attr('class','');
								 $('#option span').eq(iselect).attr('class','cur');
								 tt = true;
								 if(parseFloat(iwin)>0){
									 xy = iwin;
									 cc_name = cname+':';
									 cc_iselect = sg;
								 }
								 iswin_ = iswin;
							 }else{
								 html+='<dl><dt><span class="left admiIco"><img src="'+headimg+'" /></span><div class="left admiText">';
								 if(page == 1 && aa==0 && initiator && joinState != 0){//当前用户就是发起人
									 html+='<h3 class="yellow">您自己</h3>';
									 if(parseFloat(iwin)>0){
										 xy = iwin;
										 cc_name = cname+':';
										 cc_iselect = sg;
									 }
									 html+='<p>'+M+D+hms+'</p></div></dt><dd>'+sg+'</dd>';
									 
									 
									 if(tc_ && (ireturn == 2 ||ireturn == 3)){
										 html+='<dd class="admitc"><p>'+iswins+'</p><p>提成<em class="red">'+tc_+'</em>元</p></dd>';
									 }else{
										 html+='<dd>'+iswins+'</dd>';
									 }
									 html += '</dl>';
									 iswin_ = iswin;
								 }else{
									 if((page == 1 && aa==1 && tt) || (page == 1 && aa==0 && !tt)){
										 html+='<h3>发起人</h3>';
										 html+='<p>'+M+D+hms+'</p></div></dt><dd>'+sg+'</dd>';
										 
										 if(tc_){
											 html+='<dd class="admitc"><p>'+iswins+'</p><p>提成<em class="red">'+tc_+'</em>元</p></dd>';
										 }else{
											 html+='<dd>'+iswins+'</dd>';
										 }
										 iswin_ = iswin;
									 }else{
										 html+='<h3>'+cname+'</h3>';
										 html+='<p>'+M+D+hms+'</p></div></dt><dd>'+sg+'</dd>';
										 html+='<dd>'+iswins+'</dd>';
									 }
								 }
								 html +='</dl>';
							 }	
							 if(page == 1 && aa==1 && tt){
								 html += vv;
							 }
						});
						var cacheHTML = '';
						if($("#detail").html()!=""){
							cacheHTML = $("#detail").html();
						}
						
						 cacheHTML += html;
						$('#detail').html(cacheHTML);
						
						var cc_img = 'http://4g.9188.com/word_weixin/img/tuxiang_ys/'+cshareimg;
						if(page == '1'){
							if(xy){
								$('#my_share').show();
								
								csharetitle = cc_name+cleftteam +cscore+ crightteam+'，我猜中'+cc_iselect+'并抢到'+xy+'元，你也一起来吧！'
								cc_img = 'http://4g.9188.com/word_weixin/img/share.jpg';
							}else{
								if(iswin_ != 0){
									$('#my_free').show();
								}
							}
						}
						
						if(page == '1'){
							// 发送给好友
							WeixinJSBridge.on('menu:share:appmessage', function(argv){
				        		 
				                WeixinJSBridge.invoke('sendAppMessage',{
				         
				        				"appid":"",                                              //appid 设置空就好了。
				        				"img_url":	 cc_img,                                   //分享时所带的图片路径
				        				"img_width":	"120",                            //图片宽度
				        				"img_height":	"120",                            //图片高度
				        				"link": msgg,                                               //分享附带链接地址
				        				"desc":csharecontent,                            //分享内容介绍
				        				"title":csharetitle
				        			}, function(res){/*** 回调函数，最好设置为空 ***/});
				           });
							// 分享到朋友圈
							WeixinJSBridge.on('menu:share:timeline', function(argv){
				        		 
				                WeixinJSBridge.invoke('shareTimeline',{
				         
				        				"appid":"",                                              //appid 设置空就好了。
				        				"img_url":	 cc_img,                                   //分享时所带的图片路径
				        				"img_width":	"120",                            //图片宽度
				        				"img_height":	"120",                            //图片高度
				        				"link": msgg,                                               //分享附带链接地址
				        				"desc":csharecontent,                            //分享内容介绍
				        				"title":csharetitle
				        			}, function(res){/*** 回调函数，最好设置为空 ***/});
				           });
						}
						
					}else{
						WW.tx(desc);
					}
				}
			});
		}

}

function receive(copenid){
	$.ajax({
		url:'/wechat/drawBonus.go',
		dataType:'xml',
		data:{
			openid:copenid,
			teamid:teamid
		},
		type:'POST',
		success:function(xml){
			var R = $(xml).find('Resp');
			var code = R.attr('code');
			var desc = R.attr('desc');
			
			if(code == 0){
				var r = R.find('row');
				var bonus = r.attr('bonus');//奖金
				var bscale = r.attr('bscale');//比例
				
				$('#bonus').html(bonus);
				$('#bscale').html(bscale + '%');
				
				$('#jiang').css({left:parseFloat(document.documentElement.clientWidth/2-$('#jiang').width()/2),top:parseFloat(document.documentElement.clientHeight/2-$('#jiang').height())});
				$('#jiang').show();
				$('#invite3').show();
			}else{
				WW.tx(desc);
			}
		}
	});
}
