var SPEED = 4;

phina.define('Tomapiko', {
  superClass: 'Sprite',

  init: function() {
    this.superInit('tomapiko', 64, 64);
		this.setPosition(500, 800);
		this.frameIndex = 0;
  },

	update: function(app) {
    var p = app.pointer;

    if (p.getPointing()) {
      var diff = this.x - p.x;
      if (Math.abs(diff) > SPEED) {
        // 右に移動
        if (diff < 0) {
          this.x += SPEED;
          this.scaleX = -1;
        }
        // 左に移動
        else {
          this.x -= SPEED;
          this.scaleX = 1;
        }

        // フレームアニメーション
        if (app.frame % 4 === 0) {
          this.frameIndex = (this.frameIndex === 12) ? 13:12;
        }
      }
    }
    else {
      // 待機
      this.frameIndex = 0;
    }
  }

});
