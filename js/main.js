var Main=function() {
    var pages=[];               //�󂯎����pages�ɂ����main�̕\����ς���
    var pageHistory = [];			// �ŋ߂̗����i�V�[����ID���X�g�j
	var pageHistoryMax = 16;		// �����̍ő�ۑ���
    var $ = function( id ){ return document.getElementById( id ); };
    //ID�Ăяo��

    function callTemplate(){
        $('#header').load('header.html #header-conte');
        $('sidebar').load('sidebar.html');
        $('footer').load('footer.html');  

    };
}
var main=new Main();
main.callTemplate();