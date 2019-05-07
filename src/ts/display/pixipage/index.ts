/**
 * Class: FrontPage
 */

import {KyParticle, KyParticleAssets} from '../kyparticle';



export class PixiPage{

	/**
	 * サクラのアセット
	 */
	private sakuraAssets:KyParticleAssets = {
		json: '/assets/img/sakura/config.json',
		textures: [
			'/assets/img/sakura/particle1.png', 
			'/assets/img/sakura/particle2.png', 
			'/assets/img/sakura/particle3.png', 
			'/assets/img/sakura/particle4.png'
		]
	}

	/**
	 * 雨のアセット
	 */
	private rainAssets:KyParticleAssets = {
		json: '/assets/img/rain/config.json',
		textures: [
			'/assets/img/rain/particle1.png'
		]
	}

	/**
	 * 煙のアセット
	 */
	private smokeAssets:KyParticleAssets = {
		json: '/assets/img/smoke/config.json',
		textures: [
			'/assets/img/smoke/particle1.png'
		]
	}

	/**
	 * 泡のアセット
	 */
	private awaAssets:KyParticleAssets = {
		json: '/assets/img/awa/config.json',
		textures: [
			'/assets/img/awa/particle1.png'
		]
	}

	/**
	 * 火花のアセット
	 */
	private sparkAssets:KyParticleAssets = {
		json: '/assets/img/spark/config.json',
		textures: [
			'/assets/img/spark/particle1.png'
		]
	}


	/**
	 * Pixiを格納するHTMLタグ
	 */
	private $target:HTMLElement = document.querySelector('.particle');

	/**
	 * パーティクル インスタンス
	 */
	private particle:KyParticle;



	constructor(){
		this.init();
	}



	/**
	 * 初期化処理
	 */
	private init():void{
		let bgImage:string;
		let assets:KyParticleAssets;
		
		this.particle = new KyParticle();

		const mode:string = this.getMode();

		// サクラ
		if(mode == 'sakura'){
			assets = this.sakuraAssets;
			bgImage = '/assets/img/sakura/bg.jpg';
		}
		// 雨
		else if(mode == 'rain'){
			assets = this.rainAssets;
			bgImage = '/assets/img/rain/bg.jpg';
		}
		// 湯気
		else if(mode == 'smoke'){
			this.particle.setSpawnBottom(100);
			assets = this.smokeAssets;
			bgImage = '/assets/img/smoke/bg.jpg';
		}
		// 泡
		else if(mode == 'awa'){
			this.particle.setSpawnBottom();
			assets = this.awaAssets;
			bgImage = '/assets/img/awa/bg.jpg';
		}
		// 火花
		else if(mode == 'spark'){
			this.particle.setSpawnBottom();
			assets = this.sparkAssets;
			bgImage = '/assets/img/spark/bg.jpg';
		}
		// その他無効な値はサクラにする
		else{
			assets = this.sakuraAssets;
			bgImage = '/assets/img/sakura/bg.jpg';
		}

		// パーティクルの描画開始
		this.particle.render(this.$target, assets);

		// 背景の設定
		const $stage:HTMLElement = document.querySelector('#stage');
		$stage.style.backgroundImage = `url(${bgImage})`;
	}


	/**
	 * Getパラメーターで、描画するパーティクルのモードを取得
	 */
	private getMode():string{

		if(1 < window.location.search.length){
			const parameters:string[] = window.location.search.substring(1).split('&');
			
			for(let i:number=0; i<parameters.length; i++){
				const val:string[] = parameters[i].split('=');
				if(val[0] == 'mode') return val[1];
			}
		}
		else{
			return 'sakura';
		}
	}
}
