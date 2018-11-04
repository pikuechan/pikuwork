/******************************************************
              ハンバーガーメニューの切り替え処理
******************************************************/

$(function() {
    $(".navmenu").click(function() {
        $("nav").toggleClass("nav-open");
        $(".navmenu").toggleClass("icon-menu");
        $(".navmenu").toggleClass("icon-cross");
    });
    $(".navlink").click(function() {
        $("nav").toggleClass("nav-open");
        $(".navmenu").toggleClass("icon-menu");
        $(".navmenu").toggleClass("icon-cross");
    });
});


//memo  クラスを一つにして処理をまとめないと、どうしても段階ができてカクカクしちゃうっぽい。

/*****************************************************
              メニューのscroll処理
******************************************************/
$(function() {
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

/******************************************************
               　　画像の拡大処理プラグイン
******************************************************/

$(function() {
    jQuery(document).ready(function($) {
        $('a[data-rel^=lightcase]').lightcase();
    });
});