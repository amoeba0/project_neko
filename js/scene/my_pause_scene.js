/*
 * ポーズシーン
 */
phina.define("MyPauseScene", {
  // 継承
  superClass: 'DisplayScene',
  // コンストラクタ
  init: function() {
    // 親クラス初期化
    this.superInit();
    // 背景を半透明化
    this.backgroundColor = 'rgba(0, 0, 0, 0.7)';

    var self = this;
    // ポーズ解除ボタン
    Button({
      text: 'Resume',
    }).addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center(-3))
      .onpush = function() {
        // 自身を取り除く
        self.exit();
      };
  },
});
