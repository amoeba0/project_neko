//シーン制御
//http://github.dev7.jp/b/2015/12/01/phinaadvcal20151202/

//ポーズ
//https://qiita.com/alkn203/items/6ad692218c93b8cb7e01

phina.define('SceneSequence', {
	superClass: 'phina.game.ManagerScene',
	init:function(){
		this.superInit({
			scenes:[
				{
					label:'my_title',
					className:'MyTitleScene',
					nextLabel:'main'
				},
				{
					label:'main',
					className:'MainScene',
					nextLabel:'my_title'
				},

			]
		});
	}
});
