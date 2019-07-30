module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/rFS":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function ArrowMenu (props) {
    return React.createElement("svg",props,React.createElement("path",{"stroke":"#fff","d":"M1 1l4 4 4-4"}));
}

ArrowMenu.defaultProps = {"fill":"none","viewBox":"0 0 10 6"};

module.exports = ArrowMenu;

ArrowMenu.default = ArrowMenu;


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KI7k");


/***/ }),

/***/ "7WB+":
/***/ (function(module, exports) {

module.exports = {
	"header": "header___1CIS",
	"_transparent": "_transparent___1jvK",
	"logo": "logo___2wBy",
	"nav": "nav___15vk",
	"nav__list": "nav__list___A7Zh",
	"nav__elem": "nav__elem___1ryT",
	"_dropdown": "_dropdown___OEq9"
};

/***/ }),

/***/ "HPR7":
/***/ (function(module, exports) {

module.exports = {
	"banner": "banner___2h2i",
	"description": "description___3opJ",
	"title": "title___DR8c",
	"text": "text___3-7m"
};

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KI7k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./frontend/components/header/header.tsx



var ArrowMenu = __webpack_require__("/rFS");

var s = __webpack_require__("7WB+");

var btn = __webpack_require__("v7rW");

var header_Header = function Header() {
  return external_react_default.a.createElement("header", {
    className: external_classnames_default()(s.header)
  }, external_react_default.a.createElement("a", {
    className: s.logo,
    href: "/"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u0433\u043E\u0440\u043E\u0434\u0430"), external_react_default.a.createElement("nav", {
    className: s.nav
  }, external_react_default.a.createElement("ul", {
    className: external_classnames_default()(s['nav__list'])
  }, external_react_default.a.createElement("li", {
    className: external_classnames_default()(s['nav__elem'], s['_dropdown'])
  }, "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435"), external_react_default.a.createElement("li", {
    className: external_classnames_default()(s['nav__elem'], s['_dropdown'])
  }, "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F"), external_react_default.a.createElement("li", {
    className: external_classnames_default()(s['nav__elem'], s['_dropdown'])
  }, "\u0413\u043E\u0440\u043E\u0434\u0430 ", external_react_default.a.createElement(ArrowMenu, null))), external_react_default.a.createElement("button", {
    className: external_classnames_default()(btn.button, btn['_success']),
    type: "button"
  }, "\u0412\u043E\u0439\u0442\u0438")));
};
// EXTERNAL MODULE: ./utils/_ssr.ts
var _ssr = __webpack_require__("e2Ci");

// CONCATENATED MODULE: ./frontend/components/banner/banner.tsx



var css = __webpack_require__("HPR7");

var banner_Banner = function Banner() {
  return external_react_default.a.createElement("section", {
    className: external_classnames_default()(css.banner)
  }, external_react_default.a.createElement("div", {
    className: css.description
  }, external_react_default.a.createElement("h1", {
    className: css.title
  }, "\u041F\u0440\u0430\u0432\u0434\u0438\u0432\u0430\u044F \u0438 \u0433\u043B\u0443\u043F\u043E\u0432\u0430\u0442\u0430\u044F \u0444\u0440\u0430\u0437\u0430"), external_react_default.a.createElement("p", {
    className: css.text
  }, "\u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E \u0440\u043E\u0434\u0435 \u0438 \u0432\u0438\u0434\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0439 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E. \u0418 \u043D\u0438\u0436\u0435 \u043F\u0440\u0438\u0437\u044B\u0432 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0438\u0441\u0442\u0435\u043C\u0435, \u0432\u0441\u0435 \u043F\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u0443")));
};
// CONCATENATED MODULE: ./pages/home.tsx





__webpack_require__("oikv");

var home_HomeScreen = function HomeScreen(props) {
  return external_react_default.a.createElement("div", props, external_react_default.a.createElement(header_Header, null), external_react_default.a.createElement("main", null, external_react_default.a.createElement(banner_Banner, null)));
};

/* harmony default export */ var home = __webpack_exports__["default"] = (Object(_ssr["a" /* withSSR */])()(home_HomeScreen));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "e2Ci":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withSSR; });
function withSSR() {
  return function adapter(ScreenComponent) {
    // eslint-disable-next-line no-param-reassign
    ScreenComponent.getInitialProps = function getInitialProps(_ref) {
      var query = _ref.query;
      return query;
    };

    return ScreenComponent;
  };
}

/***/ }),

/***/ "oikv":
/***/ (function(module, exports) {



/***/ }),

/***/ "v7rW":
/***/ (function(module, exports) {

module.exports = {
	"button": "button___264Q",
	"_success": "_success___3lX4"
};

/***/ })

/******/ });