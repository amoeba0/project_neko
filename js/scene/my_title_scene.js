/*
 * タイトルシーン
 */
phina.define('MyTitleScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();

		var label = Label({
			text: 'ほげほげ',
			fill: '#ffffff',
			stroke: false,
			fontSize: 64,
		}).addChildTo(this);
		this.backgroundColor = '#000';
    label.x = this.gridX.center();
    label.y = this.gridY.center();

  },
	onclick:function(){
    //次のシーンへ移動
    this.exit();
  }
});
