/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    startLabel: 'main', // MainScene から開始
  });

  app.enableStats();

  // 実行
  app.run();
});