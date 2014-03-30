/*
 * addNewIcon plugin
 *
 * Editor Poundhound
 *
 */

$.fn.addNewIcon = function(options) {

	var o = $.extend({
		distance: 3,  // NEWアイコンをつける期間
		targetClass: '.box__info', // ターゲットのクラス名
		iconClass: 'icon__new', // アイコンのクラス名
		elem: 'i'
	}, options);

	$('dt', o.targetClass).each(function() {
		//期間を経過ミリ秒数に変換
		var distanceTime = o.distance * 86400000;

		// 今日のDateオブジェクトを生成
		var today = new Date();
		// 今日を経過ミリ秒数で求める
		var baseTime = today.getTime();

		// dtに記述された日付を取得
		var textVal = $(this).text();
		// -で分割し、配列にセット
		var dateArr = textVal.split('-');
		// dtに記述された日付でDateオブジェクトを生成
		var entryDay = new Date(dateArr[0], dateArr[1]-1, dateArr[2]);
		// 経過ミリ秒数に変換
		var entryTime = entryDay.getTime();

		// dtに記述された日付(経過ミリ秒数)が今日から何日前(経過ミリ秒数)かを求める
		var dist = baseTime - entryTime;
		// distanceで設定した期間内であればNEWアイコンを付加
		if(dist <= distanceTime) {
		 	$(this).next('dd').append('<' + o.elem + ' class="' + o.iconClass + '">NEW</' + o.elem + '>');
		}

	});
	return this;
};
