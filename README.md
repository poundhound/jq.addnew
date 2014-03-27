#jq.addNewIcon
現在の日付からn日前までの記事にNEWアイコンをつけるjQueryのプラグインです。

##使い方
jQueryを呼び出した後に$.fn.addNewIcon()を呼び出してください。  
HTMLのマークアップはdl>dt+ddの形式になります。 (サンプルコードindex.htmlをご覧ください) 
dtの日付(YYYY-MM-DD)を参照して初期値3日前の記事にNewアイコンをつけます。  

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
	<script src="js/jq.addnew.js"></script>
	<script>
		$(function () {
			$.fn.addNewIcon();
		});
	</script>

##オプション
distanceは何日前の記事までNEWアイコンをつけるか(初期値:3)、targetClassはdlのクラス名をそれぞれ変更出来ます(初期値:.box__info)。

	$(function() {
		$.fn.addNewIcon({
			distance: 5, //5日前の記事までアイコン付加
			targetClass: '.whats-new' //クラス名は.whats-new
		});
	});

日付の形式を変更する場合は31行目を変更。