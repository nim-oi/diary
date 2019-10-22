var Main=function() {
    var pages=[];               //受け取ったpagesによってmainの表示を変える
    var pageHistory = [];			// 最近の履歴（シーンのIDリスト）
	var pageHistoryMax = 16;		// 履歴の最大保存数
    var $ = function( id ){ return document.getElementById( id ); };
    //ID呼び出し

    function callTemplate(){
        $('#header').load('header.html #header-conte');
        $('sidebar').load('sidebar.html');
        $('footer').load('footer.html');  

    };
}
var main=new Main();
main.callTemplate();