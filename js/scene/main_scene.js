/*
 * メインシーン
 */
phina.define('MainScene', {
  // 継承
  superClass: 'DisplayScene',

  // 初期化
  init: function() {
    // super init
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    // 背景色
    this.backgroundColor = '#2196F3';

		//thisは付けずにグローバルとして扱う
		main_group = MainGroup().addChildTo(this);
		system_group = SystemGroup().addChildTo(this);
  },
});
