/*
 * addNewIcon plugin
 *
 * Editor Poundhound
 *
 */

$.fn.addNewIcon = function(options) {
	
	var o = $.extend({
		distance: 3,  //NEWアイコンをつける期間
		targetClass: '.box__info' //クラス
	}, options);

	$('dt', o.targetClass).each(function() {

		//期間を経過ミリ秒数に変換
		var dt = o.distance * 86400000;

		//今日の日付を取得
		var today = new Date();
		var y = today.getFullYear();
		var m = today.getMonth() + 1;
		var d = today.getDate();
		//今日を経過ミリ秒数に変換
		var ct = convertDate(y, m, d);

		//dtに記述された日付を取得
		var textVal = $(this).text();
		//-で分割し、配列にセット
		var dateArr = textVal.split('-');
		//dtに記述された日付を経過ミリ秒数に変換
		var td = convertDate(dateArr[0], dateArr[1], dateArr[2]);
		
		//dtに記述された日付が今日から何日前か求める
		var dist = ct - td;
		//distanceで設定した期間内であればNEWアイコンを付加
		if(dist <= dt) {
		 	$(this).next('dd').append('<span class="new">NEW</span>');
		}

		//年月日を経過ミリ秒に変換
		function convertDate(year, month, day) {
			var sd = new Date(year, month - 1, day);
			var cd = sd.getTime(); //経過ミリ秒数に変換
			return cd; //日付を返す
		}



	});
	return this;
};
