// グローバルに展開
phina.globalize();

var SCREEN_WIDTH    = 640;
var SCREEN_HEIGHT   = 960;
var FPS = 24;
var ASSETS = {
	image: {
		tomapiko:'assets/images/tomapiko_ss.png'
	}
};

/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    startLabel: 'main', // MainScene から開始
		width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
		fps: FPS,
		assets: ASSETS
  });

  app.enableStats();

  // 実行
  app.run();
});
