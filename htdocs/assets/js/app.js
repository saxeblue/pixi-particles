/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/ts/app.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/ts/display/index.ts\");\n\nvar stage = new _display__WEBPACK_IMPORTED_MODULE_0__[\"Stage\"]();\nwindow.addEventListener('unload', function () {});\n\n//# sourceURL=webpack:///./src/ts/app.ts?");

/***/ }),

/***/ "./src/ts/display/index.ts":
/*!*********************************!*\
  !*** ./src/ts/display/index.ts ***!
  \*********************************/
/*! exports provided: Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Stage\", function() { return Stage; });\n/* harmony import */ var _pixipage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pixipage */ \"./src/ts/display/pixipage/index.ts\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ \"./src/ts/events/index.ts\");\n\n\n\nvar Stage = function () {\n  function Stage() {\n    this.BREAK_POINT_PC = 'only screen and (min-width: 769px)';\n    this.setEvent();\n    this.createPage();\n  }\n\n  Stage.prototype.createPage = function () {\n    var $body = document.body || document.documentElement;\n    var pageID = $body.getAttribute('id');\n    if (pageID == 'pixipage') this.page = new _pixipage__WEBPACK_IMPORTED_MODULE_0__[\"PixiPage\"]();\n  };\n\n  Stage.prototype.setEvent = function () {\n    this.onResize();\n    window.addEventListener('resize', this.onResize.bind(this));\n    this.onScroll();\n    window.addEventListener('scroll', this.onScroll.bind(this));\n\n    if (window.matchMedia) {\n      this.onResponsive();\n      window.matchMedia(this.BREAK_POINT_PC).addListener(this.onResponsive.bind(this));\n    }\n  };\n\n  Stage.prototype.onResize = function () {\n    var datas = {\n      width: window.innerWidth,\n      height: window.innerHeight\n    };\n    _events__WEBPACK_IMPORTED_MODULE_1__[\"rxResize\"].next(datas);\n  };\n\n  Stage.prototype.onScroll = function () {\n    var datas = {\n      x: window.pageXOffset,\n      y: window.pageYOffset\n    };\n    _events__WEBPACK_IMPORTED_MODULE_1__[\"rxScroll\"].next(datas);\n  };\n\n  Stage.prototype.onResponsive = function () {\n    if (window.matchMedia(this.BREAK_POINT_PC).matches) {\n      var datas = {\n        bp: 'pc'\n      };\n      _events__WEBPACK_IMPORTED_MODULE_1__[\"rxBreakpoint\"].next(datas);\n    } else {\n      var datas = {\n        bp: 'mobile'\n      };\n      _events__WEBPACK_IMPORTED_MODULE_1__[\"rxBreakpoint\"].next(datas);\n    }\n  };\n\n  return Stage;\n}();\n\n\n\n//# sourceURL=webpack:///./src/ts/display/index.ts?");

/***/ }),

/***/ "./src/ts/display/kyparticle/index.ts":
/*!********************************************!*\
  !*** ./src/ts/display/kyparticle/index.ts ***!
  \********************************************/
/*! exports provided: KyParticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KyParticle\", function() { return KyParticle; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/index.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pixi_particles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pixi-particles */ \"./node_modules/pixi-particles/lib/pixi-particles.es.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events */ \"./src/ts/events/index.ts\");\n\n\n\n\nvar KyParticle = function () {\n  function KyParticle() {\n    this.ww = 0;\n    this.wh = 0;\n    this.spawnPos = 'top';\n    this.spawnAdjustValue = 0;\n  }\n\n  KyParticle.prototype.render = function ($target, assets) {\n    var _this = this;\n\n    this.$target = $target;\n    pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"loader\"].add('json', assets.json);\n    var texturesNum = assets.textures.length;\n\n    for (var i = 0; i < texturesNum; i++) {\n      pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"loader\"].add(\"t\" + i, assets.textures[i]);\n    }\n\n    pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"loader\"].load(function (loader, assets) {\n      _this.createPixi(assets, texturesNum);\n    });\n    this.subscription = _events__WEBPACK_IMPORTED_MODULE_2__[\"rxResize\"].source.subscribe(function (res) {\n      _this.ww = res.width;\n      _this.wh = res.height;\n      if (_this.app != undefined) _this.resize();\n    });\n  };\n\n  KyParticle.prototype.clear = function () {\n    cancelAnimationFrame(this.req);\n    this.subscription.unsubscribe();\n    this.$target.innerHTML = '';\n  };\n\n  KyParticle.prototype.setSpawnBottom = function (spawnAdjustValue) {\n    if (spawnAdjustValue === void 0) {\n      spawnAdjustValue = 0;\n    }\n\n    this.spawnAdjustValue = spawnAdjustValue;\n    this.spawnPos = 'bottom';\n  };\n\n  KyParticle.prototype.createPixi = function (assets, texturesNum) {\n    var textures = [];\n\n    for (var i = 0; i < texturesNum; i++) {\n      textures.push(assets[\"t\" + i].texture);\n    }\n\n    this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Application\"](this.ww, this.wh, {\n      transparent: true\n    });\n    this.$target.appendChild(this.app.view);\n    this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"]();\n    this.emitter = new pixi_particles__WEBPACK_IMPORTED_MODULE_1__[\"Emitter\"](this.container, textures, assets.json.data);\n    this.emitter.emit = true;\n    this.emitter.spawnRect.width = this.ww;\n    if (this.spawnPos == 'bottom') this.emitter.updateSpawnPos(0, this.wh + this.spawnAdjustValue);else this.emitter.updateSpawnPos(0, 0);\n    this.elapsed = Date.now();\n    this.update();\n  };\n\n  KyParticle.prototype.update = function () {\n    if (this.app == undefined) return;\n    var now = Date.now();\n    this.emitter.update((now - this.elapsed) * 0.001);\n    this.elapsed = now;\n    this.app.renderer.render(this.container);\n    this.req = requestAnimationFrame(this.update.bind(this));\n  };\n\n  KyParticle.prototype.resize = function () {\n    if (this.app == undefined) return;\n    var $canvas = this.$target.querySelector('canvas');\n    $canvas.width = this.ww;\n    $canvas.height = this.wh;\n    this.app.renderer.resize(this.ww, this.wh);\n    this.emitter.spawnRect.width = this.ww;\n    if (this.spawnPos == 'bottom') this.emitter.updateSpawnPos(0, this.wh + this.spawnAdjustValue);else this.emitter.updateSpawnPos(0, 0);\n  };\n\n  return KyParticle;\n}();\n\n\n\n//# sourceURL=webpack:///./src/ts/display/kyparticle/index.ts?");

/***/ }),

/***/ "./src/ts/display/pixipage/index.ts":
/*!******************************************!*\
  !*** ./src/ts/display/pixipage/index.ts ***!
  \******************************************/
/*! exports provided: PixiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PixiPage\", function() { return PixiPage; });\n/* harmony import */ var _kyparticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kyparticle */ \"./src/ts/display/kyparticle/index.ts\");\n\n\nvar PixiPage = function () {\n  function PixiPage() {\n    this.sakuraAssets = {\n      json: '/assets/img/sakura/config.json',\n      textures: ['/assets/img/sakura/particle1.png', '/assets/img/sakura/particle2.png', '/assets/img/sakura/particle3.png', '/assets/img/sakura/particle4.png']\n    };\n    this.rainAssets = {\n      json: '/assets/img/rain/config.json',\n      textures: ['/assets/img/rain/particle1.png']\n    };\n    this.smokeAssets = {\n      json: '/assets/img/smoke/config.json',\n      textures: ['/assets/img/smoke/particle1.png']\n    };\n    this.awaAssets = {\n      json: '/assets/img/awa/config.json',\n      textures: ['/assets/img/awa/particle1.png']\n    };\n    this.sparkAssets = {\n      json: '/assets/img/spark/config.json',\n      textures: ['/assets/img/spark/particle1.png']\n    };\n    this.$target = document.querySelector('.particle');\n    this.init();\n  }\n\n  PixiPage.prototype.init = function () {\n    var bgImage;\n    var assets;\n    this.particle = new _kyparticle__WEBPACK_IMPORTED_MODULE_0__[\"KyParticle\"]();\n    var mode = this.getMode();\n\n    if (mode == 'sakura') {\n      assets = this.sakuraAssets;\n      bgImage = '/assets/img/sakura/bg.jpg';\n    } else if (mode == 'rain') {\n      assets = this.rainAssets;\n      bgImage = '/assets/img/rain/bg.jpg';\n    } else if (mode == 'smoke') {\n      this.particle.setSpawnBottom(100);\n      assets = this.smokeAssets;\n      bgImage = '/assets/img/smoke/bg.jpg';\n    } else if (mode == 'awa') {\n      this.particle.setSpawnBottom();\n      assets = this.awaAssets;\n      bgImage = '/assets/img/awa/bg.jpg';\n    } else if (mode == 'spark') {\n      this.particle.setSpawnBottom();\n      assets = this.sparkAssets;\n      bgImage = '/assets/img/spark/bg.jpg';\n    } else {\n      assets = this.sakuraAssets;\n      bgImage = '/assets/img/sakura/bg.jpg';\n    }\n\n    this.particle.render(this.$target, assets);\n    var $stage = document.querySelector('#stage');\n    $stage.style.backgroundImage = \"url(\" + bgImage + \")\";\n  };\n\n  PixiPage.prototype.getMode = function () {\n    if (1 < window.location.search.length) {\n      var parameters = window.location.search.substring(1).split('&');\n\n      for (var i = 0; i < parameters.length; i++) {\n        var val = parameters[i].split('=');\n        if (val[0] == 'mode') return val[1];\n      }\n    } else {\n      return 'sakura';\n    }\n  };\n\n  return PixiPage;\n}();\n\n\n\n//# sourceURL=webpack:///./src/ts/display/pixipage/index.ts?");

/***/ }),

/***/ "./src/ts/events/RxEvent.ts":
/*!**********************************!*\
  !*** ./src/ts/events/RxEvent.ts ***!
  \**********************************/
/*! exports provided: RxEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RxEvent\", function() { return RxEvent; });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/index.js\");\n\n\nvar RxEvent = function () {\n  function RxEvent() {\n    this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__[\"BehaviorSubject\"](null);\n    this._source = this._subject.asObservable();\n  }\n\n  RxEvent.prototype.next = function (datas) {\n    this._subject.next(datas);\n  };\n\n  Object.defineProperty(RxEvent.prototype, \"source\", {\n    get: function get() {\n      return this._source;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  return RxEvent;\n}();\n\n\n\n//# sourceURL=webpack:///./src/ts/events/RxEvent.ts?");

/***/ }),

/***/ "./src/ts/events/index.ts":
/*!********************************!*\
  !*** ./src/ts/events/index.ts ***!
  \********************************/
/*! exports provided: rxResize, rxScroll, rxBreakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rxResize\", function() { return rxResize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rxScroll\", function() { return rxScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rxBreakpoint\", function() { return rxBreakpoint; });\n/* harmony import */ var _RxEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RxEvent */ \"./src/ts/events/RxEvent.ts\");\n\nvar rxResize = new _RxEvent__WEBPACK_IMPORTED_MODULE_0__[\"RxEvent\"]();\nvar rxScroll = new _RxEvent__WEBPACK_IMPORTED_MODULE_0__[\"RxEvent\"]();\nvar rxBreakpoint = new _RxEvent__WEBPACK_IMPORTED_MODULE_0__[\"RxEvent\"]();\n\n//# sourceURL=webpack:///./src/ts/events/index.ts?");

/***/ })

/******/ });