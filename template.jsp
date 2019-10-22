<%@ page contentType="text/html; charset=windows-31j"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML>
<html>
	<head>
		<%@ include file="headTemp.html" %>
		<title>diary</title>
	</head>


	<body>
		<div id="wrapper">

			<div id="header">
				<c:import url="/header.html" />
			</div>
			<!-- header end-->
			<div id="sidebar">
				<c:import url="/sidebar.html" />
			</div>
			<!-- sidebar end-->
			<div id="main">
				
				<c:import url="/${mainFile}" />
				<%-- ページコンテキストの。Attributeにセットしておく。 --%>
			</div>
			<!-- main end -->
			<div id="footer">
				<c:import url="/footer.html" />
			</div>
			<!-- footer end-->
		</div>
		<!--wrapper end-->
		<script type="text/javascript" src="js/main.js"></script>
	</body>
</html>