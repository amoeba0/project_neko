phina.define('Circle', {
  superClass: 'CircleShape',

  init: function(options) {
    options = (options || {}).$safe({
      fill: 'red',  // 塗りつぶし色
      stroke: null, // ストローク色
      radius: 32, // 半径
    });
    this.superInit(options);

    this.blendMode = 'lighter';
    // 下への移動値
    this.vy = 0;
  },

  update: function() {
    // 下に移動
    this.vy += 0.98;
    this.y += this.vy;

    // 地面に着いたら反発する
    if (this.bottom > SCREEN_HEIGHT) {
      this.bottom = SCREEN_HEIGHT;
      this.vy *= -1;
    }
  },
});
