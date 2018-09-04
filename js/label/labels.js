/*
 * ラベル
 */
phina.define('HelloLabel', {
  // 継承
  superClass: 'Label',

  // 初期化
  init: function() {
    // super init
    this.superInit({
			text:'Hello, phina.js!'
		});
    this.fill = '#eee';  // 塗りつぶし色
  }
});

phina.define('CountLabel', {
  // 継承
  superClass: 'Label',

  // 初期化
  init: function() {
    // super init
    this.superInit({
			text:'0',
			x:20,
			y:20
		});
    this.fill = '#eee';  // 塗りつぶし色
  },
	changeText: function(text) {
		this.text = text;
	}
});
