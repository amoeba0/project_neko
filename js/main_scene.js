/*
 * メインシーン
 */
phina.define('MainScene', {
  // 継承
  superClass: 'DisplayScene',

  // 初期化
  init: function() {
    // super init
    this.superInit();

    // 背景色
    this.backgroundColor = '#444';

    // ラベルを生成
    var label = Label('Hello, phina.js!').addChildTo(this);
    label.x = this.gridX.center(); // x 軸
    label.y = this.gridY.center(); // y 軸
    label.fill = '#eee';  // 塗りつぶし色
  },
});