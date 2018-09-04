var SCREEN_WIDTH  = 640;
var SCREEN_HEIGHT = 960;
var FPS = 24;
var ASSETS = {
	image: {
		tomapiko:'assets/images/tomapiko_ss.png'
	}
};

phina.define('MyGame', {
  superClass: 'GameApp',
  init: function() {
    this.superInit({
			startLabel: 'main', // MainScene から開始
			width: SCREEN_WIDTH,
	    height: SCREEN_HEIGHT,
			fps: FPS,
			assets: ASSETS
		});
  },
});
