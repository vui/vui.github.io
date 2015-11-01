webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	__webpack_require__(105);
	__webpack_require__(107);
	__webpack_require__(109);
	module.exports = __webpack_require__(111);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(7)
	Vue.use(__webpack_require__(75))
	window.Vue = Vue


/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	
	var Avatar = __webpack_require__(76)
	var Toggle = __webpack_require__(85)
	var MenuButton = __webpack_require__(90)
	var ProgressButton = __webpack_require__(95)
	var RangeSlider = __webpack_require__(100)
	
	exports.install = function(Vue) {
	  // register ui components
	  Vue.component('vui-avatar', Avatar)
	  Vue.component('vui-toggle', Toggle)
	  Vue.component('vui-menu-button', MenuButton)
	  Vue.component('vui-progress-button', ProgressButton)
	  Vue.component('vui-range-slider', RangeSlider)
	}


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(77)
	module.exports = __webpack_require__(81)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(84)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Avatar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Avatar.vue","-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Avatar.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Avatar.vue")
	var newTemplate = require("-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Avatar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 77 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(82)['default'];
	
	exports.__esModule = true;
	
	var _wordColor = __webpack_require__(83);
	
	var _wordColor2 = _interopRequireDefault(_wordColor);
	
	var failed = {};
	
	exports['default'] = {
	  props: {
	    alt: {
	      type: String
	    },
	    src: {
	      type: String
	    },
	    size: {
	      type: String
	    }
	  },
	  data: function data() {
	    return { image: false };
	  },
	  computed: {
	    bg: function bg() {
	      if (!this.alt) {
	        return 'black';
	      }
	      return _wordColor2['default'](this.alt);
	    },
	    fg: function fg() {
	      if (!this.alt) {
	        return 'black';
	      }
	      var bg = _wordColor2['default'].rgb(this.alt);
	      if (bg[0] * 299 + bg[1] * 587 + bg[2] * 144 > 200000) {
	        return 'black';
	      }
	      return 'white';
	    },
	    name: function name() {
	      if (!this.alt) {
	        return '';
	      }
	      return this.alt.charAt(0).toUpperCase();
	    },
	    styleSize: function styleSize() {
	      if (!this.size) return;
	
	      var px = this.size + 'px';
	      return {
	        'width': px,
	        'height': px,
	        'line-height': px,
	        'font-size': this.size / 2 + 'px'
	      };
	    }
	  },
	  ready: function ready() {
	    if (!this.src) return;
	
	    // load failed
	    var key = 'v-avatar:' + this.src;
	    if (failed[key]) return;
	
	    var img = new Image();
	    img.src = this.src;
	    img.alt = this.alt;
	
	    var me = this;
	    img.onload = function () {
	      me.image = true;
	      me.$el.appendChild(img);
	    };
	    img.onerror = function () {
	      failed[key] = 1;
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 82 */,
/* 83 */
/***/ function(module, exports) {

	var MAGIC_NUMBER = 5;
	var COLOR_LIMITE = 242;
	
	function getRGB(word) {
	  word = word.replace(/^\s+(.*)\s+$/g, '$1');
	  var rgb = [0, 0, 0];
	  for (var i = 0; i < word.length; i++) {
	    var level = parseInt(i / rgb.length);
	    rgb[i % 3] += parseInt(getAHashNum(word[i]) / getRatio(level));
	  }
	  for (var j = 0; j < rgb.length; j++) {
	    if (rgb[j] > 255) {
	      rgb[j] = 255;
	    }
	  }
	  return rgb;
	}
	
	function wordColor(word) {
	  var rgb = getRGB(word);
	  return 'rgb(' + rgb.join(',') + ')';
	}
	
	function getRatio(level) {
	  return Math.pow(MAGIC_NUMBER, level);
	}
	
	function getAHashNum(char) {
	  return parseInt((char.charCodeAt() << MAGIC_NUMBER) % COLOR_LIMITE);
	}
	
	// export pure numbers color method
	wordColor.rgb = getRGB;
	module.exports = wordColor;


/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<span class=\"v-avatar\" :style=\"styleSize\" :class=\"{'v-avatar--image': image}\" :aria-label=\"alt\">\n    <span class=\"v-avatar__text\" v-text=\"name\" :style=\"{background: bg, color: fg}\"></span>\n  </span>";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86)
	module.exports = __webpack_require__(88)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(89)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Toggle.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Toggle.vue","-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Toggle.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Toggle.vue")
	var newTemplate = require("-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Toggle.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 86 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 87 */,
/* 88 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  props: {
	    checked: {
	      type: Boolean,
	      "default": false
	    },
	    name: {
	      type: String
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "<label class=\"v-toggle\" :class=\"{'v-toggle--checked': checked}\">\n<input type=\"checkbox\" v-model=\"checked\" :name=\"name\">\n<div class=\"v-toggle__wrap\">\n  <span class=\"v-toggle__handle\"></span>\n  <div class=\"v-toggle__mask\"></div>\n</div>\n</label>";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91)
	module.exports = __webpack_require__(93)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(94)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./MenuButton.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./MenuButton.vue","-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./MenuButton.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./MenuButton.vue")
	var newTemplate = require("-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./MenuButton.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 92 */,
/* 93 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  props: {
	    checked: {
	      type: Boolean,
	      "default": false
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "<button class=\"v-menu-button\" :class=\"{'v-menu-button--checked':checked}\" v-on:click.prevent=\"checked=!checked\">\n  <span><slot>Menu</slot></span>\n</button>";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(96)
	module.exports = __webpack_require__(98)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(99)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./ProgressButton.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./ProgressButton.vue","-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./ProgressButton.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./ProgressButton.vue")
	var newTemplate = require("-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./ProgressButton.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 96 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 97 */,
/* 98 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  props: {
	    progress: {
	      type: String
	    }
	  },
	  computed: {
	    disabled: function disabled() {
	      if (this.width) {
	        return true;
	      }
	      return false;
	    },
	    width: function width() {
	      var s = this.progress;
	      if (!s || s === '0%' || s === '0') {
	        return;
	      }
	      if (s[s.length - 1] === '%') {
	        return s;
	      }
	      return parseInt(s, 10) + '%';
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "<button class=\"v-progress-button v-button\" :disabled=\"disabled\">\n    <span class=\"v-progress-button__progress\" :style=\"{width: width}\"></span>\n    <span class=\"v-progress-button__text\"><slot></slot></span>\n  </button>";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(101)
	module.exports = __webpack_require__(103)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(104)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./RangeSlider.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./RangeSlider.vue","-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./RangeSlider.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./RangeSlider.vue")
	var newTemplate = require("-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./RangeSlider.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 101 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 102 */,
/* 103 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  props: {
	    min: {
	      type: Number
	    },
	    max: {
	      type: Number
	    },
	    step: {
	      type: Number
	    },
	    name: {
	      type: String
	    },
	    value: {
	      type: Number
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-range-slider\">\n  <slot name=\"left\"></slot>\n  <input type=\"range\" v-model=\"value\" :min=\"min\" :max=\"max\" :step=\"step\" :name=\"name\">\n  <slot name=\"right\"></slot>\n</div>";

/***/ },
/* 105 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 106 */,
/* 107 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 108 */,
/* 109 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 110 */,
/* 111 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=app.js.map