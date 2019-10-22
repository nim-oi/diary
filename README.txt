プロトタイプになるJSPページを元に<div id=main></div>コンテンツを入れ替えて表示する。
<%@ include file="test3.jsp" %>で埋め込める？
コンテンツとしてはログイン、日記入力画面、日記一覧画面、日記詳細画面
ログインは後からフィルタで導入。
まあ、掲示板とあんま変わんないかな。
日記入力　WriterServlet
日記一覧　ListServlet
日記詳細　ViewServlet

まずListServletにアクセス
DBから１０（listSize）件取得。次の１０件取得ボタン（fetch?句で取り出す）。日付、タイトル、コメント数表示、タグ
それぞれdivにつめるiterator使って。foreachだっけ

そこのリンクからViewServlet呼び出す。get.全文表示。

