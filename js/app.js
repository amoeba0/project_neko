// グローバルに展開
phina.globalize();

/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = MyGame();
  app.enableStats();
  // 実行
  app.run();
});
