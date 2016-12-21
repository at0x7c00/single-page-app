<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
	<head>
		<title>SPA Starter</title>
		<link rel="stylesheet" href="css/spa.css" type="text/css"/>
		<link rel="stylesheet" href="css/spa.shell.css" type="text/css"/>
		
		<script type="text/javascript" src="js/spa.js"></script>
		<script type="text/javascript" src="js/spa.shell.js"></script>
		<script type="text/javascript" src="js/jq/jquery-3.1.1.min.js"></script>
		<script type="text/javascript">
			$(function(){
				spa.initModule($("#spa"));				
			});
		</script>
	</head>

	<body>
		
		<div id="spa"></div>
	
	</body>
</html>