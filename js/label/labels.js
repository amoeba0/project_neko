/*
 * ラベル
 */
phina.define('HelloLabel', {
  // 継承
  superClass: 'Label',

  // 初期化
  init: function() {
    // super init
    this.superInit('Hello, phina.js!');
    this.fill = '#eee';  // 塗りつぶし色
  }
});
