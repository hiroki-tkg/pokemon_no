// tweetを取得
var elements = document.getElementsByClassName("js-tweet-text");

for (i = 0; i < elements.length; i++) {
    result = elements[i].innerHTML;

	// 取得した要素に"ポケモン"が入っているかチェック
    if ( result.indexOf('ポケモン') != -1) {
		var tweet = $(elements[i]).parents('li');
		$(tweet).css('display', 'none');
		console.log(tweet);
    }
}

window.addEventListener( "scroll", function() {
	// スクロール量を取得
	var y = window.pageYOffset ;	// Y方向 (縦)
	if (y > 50){
		var elements = document.getElementsByClassName("js-tweet-text");
		for (i = 0; i < elements.length; i++) {
		    result = elements[i].innerHTML;

			// 取得した要素に"ポケモン"が入っているかチェック
		    if ( result.indexOf('ポケモン') != -1) {
				var tweet = $(elements[i]).parents('li');
				$(tweet).css('display', 'none');
				console.log(tweet);
		    }
		}

	}

} ) ;


