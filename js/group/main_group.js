/*
 * サンプルグループ
 */
phina.define('MainGroup', {
  // 継承
  superClass: 'DisplayElement',

	player:null,
	circle:null,

  // 初期化
  init: function() {
    // super init
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

		this.addCircleRandom();
		this.addTomapiko();

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
