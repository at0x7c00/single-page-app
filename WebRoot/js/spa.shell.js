spa.shell = (function(){
	
	var configMap = {
			
			main_html : new String()
		+   '<div class="spa-shell-head" >'
		+	'	<div class="spa-shell-head-logo"></div>'
		+	'		<div class="spa-shell-head-acct"></div>'
		+	'		<div class="spa-shell-head-search"></div>'
		+	'	</div>'
		+	'	<div class="spa-shell-main">'
		+	'		<div class="spa-shell-main-nav"></div>'
		+	'		<div class="spa-shell-main-content"></div>'
		+	'	</div>'
		+	'	<div class="spa-shell-foot"></div>'
		+	'	<div class="spa-shell-chat"></div>'
		+	'	<div class="spa-shell-modal" ></div>',
		
		chat_extend_time:400,
		chat_retract_time:300,
		chat_extend_height:450,
		chat_retract_height:15,
		chat_extend_title:'Click to Retract',
		chat_retract_title:'Click to Extend'
			
	},
	stateMap = {$container:null,is_chat_retracted:false},
	jqueryMap = {},
	setJqueryMap,toggleChat,onClickChat,initModule;
	
	setJqueryMap = function(){
		var $container = stateMap.$container;
		jqueryMap = {
				$container:$container,
				$chat:$container.find(".spa-shell-chat")
		};
	};
	
	toggleChat = function(do_extend,callback){
		var height = jqueryMap.$chat.height();
		var is_open = height == configMap.chat_extend_height;
		var is_closed = height == configMap.chat_retract_height;
		var is_sliding = !is_open && !is_closed;
		
		if(is_sliding){
			return false;
		}
		
		if(do_extend){
			jqueryMap.$chat.animate({height:configMap.chat_extend_height},
					configMap.chat_extend_time,
					function(){
						jqueryMap.$chat.attr("title",configMap.chat_extend_title);
						stateMap.is_chat_retracted = false;
						if(callback){
							callBack(jqueryMap.$chat);
						}
					});
		}else{
			jqueryMap.$chat.animate({height:configMap.chat_retract_height},
					configMap.chat_retract_time,
					function(){
						jqueryMap.$chat.attr("title",configMap.chat_retract_title);
						stateMap.is_chat_retracted = true;
						if(callback){
							callBack(jqueryMap.$chat);
						}
					});
		}
		
		return true;
	};
	
	onClickChat = function(){
		toggleChat(stateMap.is_chat_retracted);
		return false;
	};
	
	
	initModule = function($container){
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();
		stateMap.is_chat_retracted = true;
		jqueryMap.$chat.attr("title",configMap.chat_retract_title).click(onClickChat);
	};
	
	return {initModule : initModule,toggleChat:toggleChat};
})();