phina.define('PauseButton', {
  superClass: 'Button',
  init: function() {
    this.superInit({
			text:'Pause',
		});
		this.x = SCREEN_WIDTH - this.width/2 - 10;
		this.y = this.height/2 + 10;
  },

	onpush: function() {
		main_scene.app.pushScene(MyPauseScene());
	}

});
