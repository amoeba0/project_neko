/*
 * サンプルグループ
 */
phina.define('SampleGroup', {
  // 継承
  superClass: 'DisplayElement',

	player:null,
	circle:null,
	label :null,

  // 初期化
  init: function() {
    // super init
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

		this.setLabel();
		this.addCircleRandom();
		this.addTomapiko();

  },

	// ラベルを生成
	setLabel: function() {
    this.label = HelloLabel().addChildTo(this);
    this.label.x = this.width / 2 - (this.label.width / 2); // x 軸
    this.label.y = this.height / 2 - (this.label.height / 2); // y 軸
	},

	// デフォルトでいくつか生成
	addCircleRandom: function() {
		(12).times(function() {
      var x = Math.randint(0, this.width);
      var y = Math.randint(0, this.height);
      this.addCircle(x, y);
    }, this);
	},

	addCircle: function(x, y) {
    var color = "hsla({0}, 75%, 50%, 0.75)".format(Math.randint(0, 360));
    // サークルを生成
    this.circle = Circle({
      fill: color,
      x: x,
      y: y,
    }).addChildTo(this);
  },

	addTomapiko: function() {
		this.player = Tomapiko().addChildTo(this);
	}
});
