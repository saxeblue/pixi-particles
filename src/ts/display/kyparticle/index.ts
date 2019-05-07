/**
 * Class: KyParticle
 * @classdesc - pixi-particle ベースのパーティクルを生成する
 * 
 * [pixi-particles モーションエディタ]
 * https://pixijs.io/pixi-particles-editor/#pixieDust
 */

import * as PIXI from 'pixi.js';
import {Emitter} from 'pixi-particles';

import {rxResize, RxResize_Data} from '../../events';


export interface KyParticleAssets{
	json:string;
	textures:string[];
}


export class KyParticle{

	private app:PIXI.Application;
	private container:PIXI.Container;
	private emitter:Emitter;


	/**
	 * Windowサイズ
	 */
	private ww:number = 0;
	private wh:number = 0;

	/**
	 * canvasを埋め込むHTMLElement
	 */
	$target:HTMLElement;

	/**
	 * RequestAnimationFrame
	 */
	private req:number;

	private elapsed:number;

	/**
	 * Resize Subscription
	 */
	private subscription:any;

	/**
	 * パーティクルの発生位置('top' or 'bottom')
	 */
	private spawnPos:string = 'top';


	/**
	 * パーティクルの発生位置を数値分ずらす
	 */
	private spawnAdjustValue:number = 0;



	/**
	 * 描画する
	 */
	render($target:HTMLElement, assets:KyParticleAssets):void{
		this.$target = $target;

		// アセットの読み込み
		PIXI.loader.add('json', assets.json);

		const texturesNum:number = assets.textures.length;
		for(let i:number=0; i<texturesNum; i++){
			PIXI.loader.add(`t${i}`, assets.textures[i]);
		}

		PIXI.loader.load((loader, assets) => {
			this.createPixi(assets, texturesNum);
		});


		// リサイズ処理
		this.subscription = rxResize.source.subscribe((res:RxResize_Data) => {
			this.ww = res.width;
			this.wh = res.height;
			if(this.app != undefined) this.resize();
		});
	}


	/**
	 * 消去する
	 */
	clear():void{
		cancelAnimationFrame(this.req);
		this.subscription.unsubscribe();
		this.$target.innerHTML = '';
	}


	/**
	 * パーティクルを下から上にする
	 */
	setSpawnBottom(spawnAdjustValue:number=0):void{
		this.spawnAdjustValue = spawnAdjustValue;
		this.spawnPos = 'bottom';
	}



	/**
	 * PIXIの作成
	 */
	private createPixi(assets:any, texturesNum:number):void{
		const textures:PIXI.Texture[] = [];
		for(let i:number=0; i<texturesNum; i++){
			textures.push(assets[`t${i}`].texture);
		}

		this.app = new PIXI.Application(this.ww, this.wh, {transparent: true});
		this.$target.appendChild(this.app.view);

		this.container = new PIXI.Container();
		this.emitter = new Emitter(this.container, textures, assets.json.data);
		this.emitter.emit = true;
		this.emitter.spawnRect.width = this.ww;

		if(this.spawnPos == 'bottom') this.emitter.updateSpawnPos(0, this.wh+this.spawnAdjustValue);
		else this.emitter.updateSpawnPos(0, 0);
		
		this.elapsed = Date.now();

		this.update();
	}


	/**
	 * 描画更新処理
	 */
	private update():void{
		if(this.app == undefined) return;
		const now:number = Date.now();
        this.emitter.update((now - this.elapsed) * 0.001);
        this.elapsed = now;
        this.app.renderer.render(this.container);
		this.req = requestAnimationFrame(this.update.bind(this));
	}


	/**
	 * リサイズ処理
	 */
	private resize():void{
		if(this.app == undefined) return;
		const $canvas = this.$target.querySelector('canvas');
        $canvas.width = this.ww;
        $canvas.height = this.wh;
        this.app.renderer.resize(this.ww, this.wh);
        this.emitter.spawnRect.width = this.ww;
        
        if(this.spawnPos == 'bottom') this.emitter.updateSpawnPos(0, this.wh+this.spawnAdjustValue);
		else this.emitter.updateSpawnPos(0, 0);
	}
}
