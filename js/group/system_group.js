/*
 * システムグループ
 */
phina.define('SystemGroup', {
  // 継承
  superClass: 'DisplayElement',
	label :null,
	count :null,
	pause_button:null,
	init: function() {
    // super init
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
		this.setLabel();
		this.setPauseButton();
	},
	// ラベルを生成
	setLabel: function() {
    this.label = HelloLabel().addChildTo(this);
    this.label.x = this.width / 2 - (this.label.width / 2); // x 軸
    this.label.y = this.height / 2 - (this.label.height / 2); // y 軸

		this.count = CountLabel().addChildTo(this);
	},

	setPauseButton: function() {
		this.pause_button = PauseButton().addChildTo(this);
	}

});
