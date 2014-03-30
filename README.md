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
distanceは何日前の記事までNEWアイコンをつけるか(初期値:3)、targetClassはdlのクラス名(初期値:.box\__info)、iconClassはアイコンのクラス名(初期値:icon__new)、elemは追加する要素(初期値:i)を指定。

	$(function() {
		$.fn.addNewIcon({
			distance: 5, //5日前の記事までアイコン付加
			targetClass: '.whats-new', //クラス名は.whats-new
			iconClass: 'icon-new', //クラス名は.icon-new
			elem: 'span' //span要素を追加する
		});
	});

日付の形式を変更する場合は28行目を変更。（YYYY/MM/DDなら('/'))