/*
 * メインシーン
 */
phina.define('MainScene', {
  // 継承
  superClass: 'DisplayScene',

	// サンプル、phinajsの動作確認用
	sample_group: null,

  // 初期化
  init: function() {
    // super init
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    // 背景色
    this.backgroundColor = '#2196F3';

		this.sample_group = SampleGroup().addChildTo(this);
  }
});
