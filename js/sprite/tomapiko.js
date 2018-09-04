phina.define('Tomapiko', {
  superClass: 'Sprite',
	speed: 4,
	apf:4, //animation per frame
	move: {'wait':true,'left':false, 'right':true},
	halfx: SCREEN_WIDTH / 2, //画面中央

  init: function() {
    this.superInit('tomapiko', 64, 64);
		this.setPosition(500, 800);
		this.frameIndex = 0;
  },

	update: function(app) {
		this._control(app);
		this._move(app);
  },

	_control: function(app) {
		var keyboard = app.keyboard;
		var p = app.pointer;
		this.move.left  = false;
		this.move.right = false;
		this.move.wait  = false;
		if (keyboard.getKey('left')) {
			this.move.left  = true;
		} else if (keyboard.getKey('right')) {
			this.move.right = true;
		} else {
			if (p.getPointing()) {
				if (p.x < this.halfx) {
					this.move.left  = true;
				} else {
					this.move.right = true;
				}
			} else {
				this.move.wait  = true;
			}
		}
	},

	_move: function(app) {
		if (this.move.left) {
			this.x -= this.speed;
			this.scaleX = 1;
			this._animation(app);
		} else if (this.move.right) {
			this.x += this.speed;
			this.scaleX = -1;
			this._animation(app);
		} else {
			this.frameIndex = 0;
		}
	},

	_animation: function(app) {
		if (app.frame % this.apf === 0) {
			this.frameIndex = (this.frameIndex === 12) ? 13:12;
		}
	}

});
