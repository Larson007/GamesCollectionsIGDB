(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastr/toastr.scss */ "./node_modules/toastr/toastr.scss");
/* harmony import */ var _styles_bootstrap_min_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/bootstrap.min.scss */ "./assets/styles/bootstrap.min.scss");
/* harmony import */ var _js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/bootstrap.bundle.min.js */ "./assets/js/bootstrap.bundle.min.js");
/* harmony import */ var _js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _slick_slick_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slick/slick.scss */ "./assets/slick/slick.scss");
/* harmony import */ var _slick_slick_theme_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slick/slick-theme.scss */ "./assets/slick/slick-theme.scss");
/* harmony import */ var _slick_slick_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slick/slick.min.js */ "./assets/slick/slick.min.js");
/* harmony import */ var _slick_slick_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_burgerMenu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/burgerMenu.js */ "./assets/js/burgerMenu.js");
/* harmony import */ var _js_notifications_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/notifications.js */ "./assets/js/notifications.js");
/* harmony import */ var _js_pages_gameDetails_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/pages/gameDetails.js */ "./assets/js/pages/gameDetails.js");
/* harmony import */ var _js_pages_searchGames_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/pages/searchGames.js */ "./assets/js/pages/searchGames.js");
/* harmony import */ var _js_pages_searchFriends_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/pages/searchFriends.js */ "./assets/js/pages/searchFriends.js");
/* harmony import */ var _js_pages_dashboard_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/pages/dashboard.js */ "./assets/js/pages/dashboard.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// Import JQuery
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;

// Import Toastr


window.toastr = (toastr__WEBPACK_IMPORTED_MODULE_0___default());

// Import Bootstrap



// Import Slick




// CSS


// BurgerMenu

(0,_js_burgerMenu_js__WEBPACK_IMPORTED_MODULE_8__["default"])();

// Import Js







// Start the application
console.log('Hello from app.js');

// Notifications
(0,_js_notifications_js__WEBPACK_IMPORTED_MODULE_9__.notifications)();
if (document.querySelector('.game-detail')) {
  (0,_js_pages_gameDetails_js__WEBPACK_IMPORTED_MODULE_10__.initGameDetails)();
}
if (document.querySelector('.recherche')) {
  (0,_js_pages_searchGames_js__WEBPACK_IMPORTED_MODULE_11__.initSearchGames)();
}
if (document.querySelector('.recherche-amis')) {
  (0,_js_pages_searchFriends_js__WEBPACK_IMPORTED_MODULE_12__.initSearchFriends)();
}
if (document.querySelector('.dashboard')) {
  (0,_js_pages_dashboard_js__WEBPACK_IMPORTED_MODULE_13__.initDashboard)();
}

/***/ }),

/***/ "./assets/js/bootstrap.bundle.min.js":
/*!*******************************************!*\
  !*** ./assets/js/bootstrap.bundle.min.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e18) { throw _e18; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e19) { didErr = true; err = _e19; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(/*! core-js/modules/es.global-this.js */ "./node_modules/core-js/modules/es.global-this.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.number.parse-float.js */ "./node_modules/core-js/modules/es.number.parse-float.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
__webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-names.js */ "./node_modules/core-js/modules/es.object.get-own-property-names.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");
__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var t = new Map(),
    e = {
      set: function set(e, i, n) {
        t.has(e) || t.set(e, new Map());
        var s = t.get(e);
        s.has(i) || 0 === s.size ? s.set(i, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(s.keys())[0], "."));
      },
      get: function get(e, i) {
        return t.has(e) && t.get(e).get(i) || null;
      },
      remove: function remove(e, i) {
        if (!t.has(e)) return;
        var n = t.get(e);
        n["delete"](i), 0 === n.size && t["delete"](e);
      }
    },
    i = "transitionend",
    n = function n(t) {
      return t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, function (t, e) {
        return "#".concat(CSS.escape(e));
      })), t;
    },
    s = function s(t) {
      t.dispatchEvent(new Event(i));
    },
    o = function o(t) {
      return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
    },
    r = function r(t) {
      return o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null;
    },
    a = function a(t) {
      if (!o(t) || 0 === t.getClientRects().length) return !1;
      var e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        var _e2 = t.closest("summary");
        if (_e2 && _e2.parentNode !== i) return !1;
        if (null === _e2) return !1;
      }
      return e;
    },
    l = function l(t) {
      return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
    },
    c = function c(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var _e3 = t.getRootNode();
        return _e3 instanceof ShadowRoot ? _e3 : null;
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
    },
    h = function h() {},
    d = function d(t) {
      t.offsetHeight;
    },
    u = function u() {
      return __webpack_provided_window_dot_jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? __webpack_provided_window_dot_jQuery : null;
    },
    f = [],
    p = function p() {
      return "rtl" === document.documentElement.dir;
    },
    m = function m(t) {
      var e;
      e = function e() {
        var e = u();
        if (e) {
          var _i2 = t.NAME,
            _n2 = e.fn[_i2];
          e.fn[_i2] = t.jQueryInterface, e.fn[_i2].Constructor = t, e.fn[_i2].noConflict = function () {
            return e.fn[_i2] = _n2, t.jQueryInterface;
          };
        }
      }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", function () {
        for (var _i3 = 0, _f = f; _i3 < _f.length; _i3++) {
          var _t2 = _f[_i3];
          _t2();
        }
      }), f.push(e)) : e();
    },
    g = function g(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
      return "function" == typeof t ? t.apply(void 0, _toConsumableArray(e)) : i;
    },
    _ = function _(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      if (!n) return void g(t);
      var o = function (t) {
        if (!t) return 0;
        var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;
        var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
        return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
      }(e) + 5;
      var r = !1;
      var a = function a(_ref) {
        var n = _ref.target;
        n === e && (r = !0, e.removeEventListener(i, a), g(t));
      };
      e.addEventListener(i, a), setTimeout(function () {
        r || s(e);
      }, o);
    },
    b = function b(t, e, i, n) {
      var s = t.length;
      var o = t.indexOf(e);
      return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
    },
    v = /[^.]*(?=\..*)\.|.*/,
    y = /\..*/,
    w = /::\d+$/,
    A = {};
  var E = 1;
  var T = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
    C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function O(t, e) {
    return e && "".concat(e, "::").concat(E++) || t.uidEvent || E++;
  }
  function x(t) {
    var e = O(t);
    return t.uidEvent = e, A[e] = A[e] || {}, A[e];
  }
  function k(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(t).find(function (t) {
      return t.callable === e && t.delegationSelector === i;
    });
  }
  function L(t, e, i) {
    var n = "string" == typeof e,
      s = n ? i : e || i;
    var o = I(t);
    return C.has(o) || (o = t), [n, s, o];
  }
  function S(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    var _L = L(e, i, n),
      _L2 = _slicedToArray(_L, 3),
      o = _L2[0],
      r = _L2[1],
      a = _L2[2];
    if (e in T) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };
      r = _t3(r);
    }
    var l = x(t),
      c = l[a] || (l[a] = {}),
      h = k(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    var d = O(r, e.replace(v, "")),
      u = o ? function (t, e, i) {
        return function n(s) {
          var o = t.querySelectorAll(e);
          for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
            var _iterator = _createForOfIteratorHelper(o),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _a = _step.value;
                if (_a === _r) return P(s, {
                  delegateTarget: _r
                }), n.oneOff && N.off(t, s.type, e, i), i.apply(_r, [s]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        };
      }(t, i, r) : function (t, e) {
        return function i(n) {
          return P(n, {
            delegateTarget: t
          }), i.oneOff && N.off(t, n.type, e), e.apply(t, [n]);
        };
      }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }
  function D(t, e, i, n, s) {
    var o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function $(t, e, i, n) {
    var s = e[i] || {};
    for (var _i4 = 0, _Object$entries = Object.entries(s); _i4 < _Object$entries.length; _i4++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
        _o = _Object$entries$_i[0],
        _r2 = _Object$entries$_i[1];
      _o.includes(n) && D(t, e, i, _r2.callable, _r2.delegationSelector);
    }
  }
  function I(t) {
    return t = t.replace(y, ""), T[t] || t;
  }
  var N = {
    on: function on(t, e, i, n) {
      S(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      S(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      var _L3 = L(e, i, n),
        _L4 = _slicedToArray(_L3, 3),
        s = _L4[0],
        o = _L4[1],
        r = _L4[2],
        a = r !== e,
        l = x(t),
        c = l[r] || {},
        h = e.startsWith(".");
      if (void 0 === o) {
        if (h) for (var _i5 = 0, _Object$keys = Object.keys(l); _i5 < _Object$keys.length; _i5++) {
          var _i6 = _Object$keys[_i5];
          $(t, l, _i6, e.slice(1));
        }
        for (var _i7 = 0, _Object$entries2 = Object.entries(c); _i7 < _Object$entries2.length; _i7++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i7], 2),
            _i8 = _Object$entries2$_i[0],
            _n3 = _Object$entries2$_i[1];
          var _s2 = _i8.replace(w, "");
          a && !e.includes(_s2) || D(t, l, r, _n3.callable, _n3.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        D(t, l, r, o, s ? i : null);
      }
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = u();
      var s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
      var l = P(new Event(e, {
        bubbles: o,
        cancelable: !0
      }), i);
      return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
    }
  };
  function P(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _loop = function _loop() {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i9], 2),
        i = _Object$entries3$_i[0],
        n = _Object$entries3$_i[1];
      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, {
          configurable: !0,
          get: function get() {
            return n;
          }
        });
      }
    };
    for (var _i9 = 0, _Object$entries3 = Object.entries(e); _i9 < _Object$entries3.length; _i9++) {
      _loop();
    }
    return t;
  }
  function M(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function j(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }
  var F = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(j(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(j(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {},
        i = Object.keys(t.dataset).filter(function (t) {
          return t.startsWith("bs") && !t.startsWith("bsConfig");
        });
      var _iterator2 = _createForOfIteratorHelper(i),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _n4 = _step2.value;
          var _i10 = _n4.replace(/^bs/, "");
          _i10 = _i10.charAt(0).toLowerCase() + _i10.slice(1, _i10.length), e[_i10] = M(t.dataset[_n4]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return M(t.getAttribute("data-bs-".concat(j(e))));
    }
  };
  var H = /*#__PURE__*/function () {
    function H() {
      _classCallCheck(this, H);
    }
    _createClass(H, [{
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t;
      }
    }, {
      key: "_mergeConfigObj",
      value: function _mergeConfigObj(t, e) {
        var i = o(e) ? F.getDataAttribute(e, "config") : {};
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), "object" == _typeof(i) ? i : {}), o(e) ? F.getDataAttributes(e) : {}), "object" == _typeof(t) ? t : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;
        for (var _i11 = 0, _Object$entries4 = Object.entries(e); _i11 < _Object$entries4.length; _i11++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i11], 2),
            _n5 = _Object$entries4$_i[0],
            _s3 = _Object$entries4$_i[1];
          var _e4 = t[_n5],
            _r3 = o(_e4) ? "element" : null == (i = _e4) ? "".concat(i) : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(_s3).test(_r3)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_n5, "\" provided type \"").concat(_r3, "\" but expected type \"").concat(_s3, "\"."));
        }
        var i;
      }
    }], [{
      key: "Default",
      get: function get() {
        return {};
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return {};
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }]);
    return H;
  }();
  var W = /*#__PURE__*/function (_H) {
    _inherits(W, _H);
    var _super = _createSuper(W);
    function W(t, i) {
      var _this;
      _classCallCheck(this, W);
      _this = _super.call(this), (t = r(t)) && (_this._element = t, _this._config = _this._getConfig(i), e.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
      return _this;
    }
    _createClass(W, [{
      key: "dispose",
      value: function dispose() {
        e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
        var _iterator3 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _t4 = _step3.value;
            this[_t4] = null;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        _(t, e, i);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return e.get(r(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.3.2";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }, {
      key: "eventName",
      value: function eventName(t) {
        return "".concat(t).concat(this.EVENT_KEY);
      }
    }]);
    return W;
  }(H);
  var B = function B(t) {
      var e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        var _i12 = t.getAttribute("href");
        if (!_i12 || !_i12.includes("#") && !_i12.startsWith(".")) return null;
        _i12.includes("#") && !_i12.startsWith("#") && (_i12 = "#".concat(_i12.split("#")[1])), e = _i12 && "#" !== _i12 ? n(_i12.trim()) : null;
      }
      return e;
    },
    z = {
      find: function find(t) {
        var _ref2;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
        return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
      },
      findOne: function findOne(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
        return Element.prototype.querySelector.call(e, t);
      },
      children: function children(t, e) {
        var _ref3;
        return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
          return t.matches(e);
        });
      },
      parents: function parents(t, e) {
        var i = [];
        var n = t.parentNode.closest(e);
        for (; n;) i.push(n), n = n.parentNode.closest(e);
        return i;
      },
      prev: function prev(t, e) {
        var i = t.previousElementSibling;
        for (; i;) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next: function next(t, e) {
        var i = t.nextElementSibling;
        for (; i;) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren: function focusableChildren(t) {
        var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
          return "".concat(t, ":not([tabindex^=\"-\"])");
        }).join(",");
        return this.find(e, t).filter(function (t) {
          return !l(t) && a(t);
        });
      },
      getSelectorFromElement: function getSelectorFromElement(t) {
        var e = B(t);
        return e && z.findOne(e) ? e : null;
      },
      getElementFromSelector: function getElementFromSelector(t) {
        var e = B(t);
        return e ? z.findOne(e) : null;
      },
      getMultipleElementsFromSelector: function getMultipleElementsFromSelector(t) {
        var e = B(t);
        return e ? z.find(e) : [];
      }
    },
    R = function R(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
      var i = "click.dismiss".concat(t.EVENT_KEY),
        n = t.NAME;
      N.on(document, i, "[data-bs-dismiss=\"".concat(n, "\"]"), function (i) {
        if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
        var s = z.getElementFromSelector(this) || this.closest(".".concat(n));
        t.getOrCreateInstance(s)[e]();
      });
    },
    q = ".bs.alert",
    V = "close".concat(q),
    K = "closed".concat(q);
  var Q = /*#__PURE__*/function (_W) {
    _inherits(Q, _W);
    var _super2 = _createSuper(Q);
    function Q() {
      _classCallCheck(this, Q);
      return _super2.apply(this, arguments);
    }
    _createClass(Q, [{
      key: "close",
      value: function close() {
        var _this2 = this;
        if (N.trigger(this._element, V).defaultPrevented) return;
        this._element.classList.remove("show");
        var t = this._element.classList.contains("fade");
        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), N.trigger(this._element, K), this.dispose();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Q.getOrCreateInstance(this);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return Q;
  }(W);
  R(Q, "close"), m(Q);
  var X = '[data-bs-toggle="button"]';
  var Y = /*#__PURE__*/function (_W2) {
    _inherits(Y, _W2);
    var _super3 = _createSuper(Y);
    function Y() {
      _classCallCheck(this, Y);
      return _super3.apply(this, arguments);
    }
    _createClass(Y, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Y.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);
    return Y;
  }(W);
  N.on(document, "click.bs.button.data-api", X, function (t) {
    t.preventDefault();
    var e = t.target.closest(X);
    Y.getOrCreateInstance(e).toggle();
  }), m(Y);
  var U = ".bs.swipe",
    G = "touchstart".concat(U),
    J = "touchmove".concat(U),
    Z = "touchend".concat(U),
    tt = "pointerdown".concat(U),
    et = "pointerup".concat(U),
    it = {
      endCallback: null,
      leftCallback: null,
      rightCallback: null
    },
    nt = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)"
    };
  var st = /*#__PURE__*/function (_H2) {
    _inherits(st, _H2);
    var _super4 = _createSuper(st);
    function st(t, e) {
      var _this3;
      _classCallCheck(this, st);
      _this3 = _super4.call(this), _this3._element = t, t && st.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
      return _this3;
    }
    _createClass(st, [{
      key: "dispose",
      value: function dispose() {
        N.off(this._element, U);
      }
    }, {
      key: "_start",
      value: function _start(t) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
      }
    }, {
      key: "_end",
      value: function _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
      }
    }, {
      key: "_move",
      value: function _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this._deltaX);
        if (t <= 40) return;
        var e = t / this._deltaX;
        this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this4 = this;
        this._supportPointerEvents ? (N.on(this._element, tt, function (t) {
          return _this4._start(t);
        }), N.on(this._element, et, function (t) {
          return _this4._end(t);
        }), this._element.classList.add("pointer-event")) : (N.on(this._element, G, function (t) {
          return _this4._start(t);
        }), N.on(this._element, J, function (t) {
          return _this4._move(t);
        }), N.on(this._element, Z, function (t) {
          return _this4._end(t);
        }));
      }
    }, {
      key: "_eventIsPointerPenTouch",
      value: function _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
      }
    }], [{
      key: "Default",
      get: function get() {
        return it;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return nt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "swipe";
      }
    }, {
      key: "isSupported",
      value: function isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }]);
    return st;
  }(H);
  var ot = ".bs.carousel",
    rt = ".data-api",
    at = "next",
    lt = "prev",
    ct = "left",
    ht = "right",
    dt = "slide".concat(ot),
    ut = "slid".concat(ot),
    ft = "keydown".concat(ot),
    pt = "mouseenter".concat(ot),
    mt = "mouseleave".concat(ot),
    gt = "dragstart".concat(ot),
    _t = "load".concat(ot).concat(rt),
    bt = "click".concat(ot).concat(rt),
    vt = "carousel",
    yt = "active",
    wt = ".active",
    At = ".carousel-item",
    Et = wt + At,
    Tt = {
      ArrowLeft: ht,
      ArrowRight: ct
    },
    Ct = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0
    },
    Ot = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean"
    };
  var xt = /*#__PURE__*/function (_W3) {
    _inherits(xt, _W3);
    var _super5 = _createSuper(xt);
    function xt(t, e) {
      var _this5;
      _classCallCheck(this, xt);
      _this5 = _super5.call(this, t, e), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = z.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === vt && _this5.cycle();
      return _this5;
    }
    _createClass(xt, [{
      key: "next",
      value: function next() {
        this._slide(at);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && a(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(lt);
      }
    }, {
      key: "pause",
      value: function pause() {
        this._isSliding && s(this._element), this._clearInterval();
      }
    }, {
      key: "cycle",
      value: function cycle() {
        var _this6 = this;
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(function () {
          return _this6.nextWhenVisible();
        }, this._config.interval);
      }
    }, {
      key: "_maybeEnableCycle",
      value: function _maybeEnableCycle() {
        var _this7 = this;
        this._config.ride && (this._isSliding ? N.one(this._element, ut, function () {
          return _this7.cycle();
        }) : this.cycle());
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this8 = this;
        var e = this._getItems();
        if (t > e.length - 1 || t < 0) return;
        if (this._isSliding) return void N.one(this._element, ut, function () {
          return _this8.to(t);
        });
        var i = this._getItemIndex(this._getActive());
        if (i === t) return;
        var n = t > i ? at : lt;
        this._slide(n, e[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(xt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.defaultInterval = t.interval, t;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this9 = this;
        this._config.keyboard && N.on(this._element, ft, function (t) {
          return _this9._keydown(t);
        }), "hover" === this._config.pause && (N.on(this._element, pt, function () {
          return _this9.pause();
        }), N.on(this._element, mt, function () {
          return _this9._maybeEnableCycle();
        })), this._config.touch && st.isSupported() && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;
        var _iterator4 = _createForOfIteratorHelper(z.find(".carousel-item img", this._element)),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t5 = _step4.value;
            N.on(_t5, gt, function (t) {
              return t.preventDefault();
            });
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var t = {
          leftCallback: function leftCallback() {
            return _this10._slide(_this10._directionToOrder(ct));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(ht));
          },
          endCallback: function endCallback() {
            "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
              return _this10._maybeEnableCycle();
            }, 500 + _this10._config.interval));
          }
        };
        this._swipeHelper = new st(this._element, t);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = Tt[t.key];
        e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._getItems().indexOf(t);
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement) return;
        var e = z.findOne(wt, this._indicatorsElement);
        e.classList.remove(yt), e.removeAttribute("aria-current");
        var i = z.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
        i && (i.classList.add(yt), i.setAttribute("aria-current", "true"));
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || this._getActive();
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = e || this._config.defaultInterval;
      }
    }, {
      key: "_slide",
      value: function _slide(t) {
        var _this11 = this;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this._isSliding) return;
        var i = this._getActive(),
          n = t === at,
          s = e || b(this._getItems(), i, n, this._config.wrap);
        if (s === i) return;
        var o = this._getItemIndex(s),
          r = function r(e) {
            return N.trigger(_this11._element, e, {
              relatedTarget: s,
              direction: _this11._orderToDirection(t),
              from: _this11._getItemIndex(i),
              to: o
            });
          };
        if (r(dt).defaultPrevented) return;
        if (!i || !s) return;
        var a = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
        var l = n ? "carousel-item-start" : "carousel-item-end",
          c = n ? "carousel-item-next" : "carousel-item-prev";
        s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(function () {
          s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), _this11._isSliding = !1, r(ut);
        }, i, this._isAnimated()), a && this.cycle();
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("slide");
      }
    }, {
      key: "_getActive",
      value: function _getActive() {
        return z.findOne(Et, this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return z.find(At, this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return p() ? t === ct ? lt : at : t === ct ? at : lt;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return p() ? t === lt ? ct : ht : t === lt ? ht : ct;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ct;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ot;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = xt.getOrCreateInstance(this, t);
          if ("number" != typeof t) {
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
              e[t]();
            }
          } else e.to(t);
        });
      }
    }]);
    return xt;
  }(W);
  N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function (t) {
    var e = z.getElementFromSelector(this);
    if (!e || !e.classList.contains(vt)) return;
    t.preventDefault();
    var i = xt.getOrCreateInstance(e),
      n = this.getAttribute("data-bs-slide-to");
    return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }), N.on(window, _t, function () {
    var t = z.find('[data-bs-ride="carousel"]');
    var _iterator5 = _createForOfIteratorHelper(t),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _e5 = _step5.value;
        xt.getOrCreateInstance(_e5);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }), m(xt);
  var kt = ".bs.collapse",
    Lt = "show".concat(kt),
    St = "shown".concat(kt),
    Dt = "hide".concat(kt),
    $t = "hidden".concat(kt),
    It = "click".concat(kt, ".data-api"),
    Nt = "show",
    Pt = "collapse",
    Mt = "collapsing",
    jt = ":scope .".concat(Pt, " .").concat(Pt),
    Ft = '[data-bs-toggle="collapse"]',
    Ht = {
      parent: null,
      toggle: !0
    },
    Wt = {
      parent: "(null|element)",
      toggle: "boolean"
    };
  var Bt = /*#__PURE__*/function (_W4) {
    _inherits(Bt, _W4);
    var _super6 = _createSuper(Bt);
    function Bt(t, e) {
      var _this12;
      _classCallCheck(this, Bt);
      _this12 = _super6.call(this, t, e), _this12._isTransitioning = !1, _this12._triggerArray = [];
      var i = z.find(Ft);
      var _iterator6 = _createForOfIteratorHelper(i),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _t6 = _step6.value;
          var _e6 = z.getSelectorFromElement(_t6),
            _i13 = z.find(_e6).filter(function (t) {
              return t === _this12._element;
            });
          null !== _e6 && _i13.length && _this12._triggerArray.push(_t6);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      _this12._initializeChildren(), _this12._config.parent || _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown()), _this12._config.toggle && _this12.toggle();
      return _this12;
    }
    _createClass(Bt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this13 = this;
        if (this._isTransitioning || this._isShown()) return;
        var t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(function (t) {
          return t !== _this13._element;
        }).map(function (t) {
          return Bt.getOrCreateInstance(t, {
            toggle: !1
          });
        })), t.length && t[0]._isTransitioning) return;
        if (N.trigger(this._element, Lt).defaultPrevented) return;
        var _iterator7 = _createForOfIteratorHelper(t),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _e7 = _step7.value;
            _e7.hide();
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        var e = this._getDimension();
        this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var i = "scroll".concat(e[0].toUpperCase() + e.slice(1));
        this._queueCallback(function () {
          _this13._isTransitioning = !1, _this13._element.classList.remove(Mt), _this13._element.classList.add(Pt, Nt), _this13._element.style[e] = "", N.trigger(_this13._element, St);
        }, this._element, !0), this._element.style[e] = "".concat(this._element[i], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;
        if (this._isTransitioning || !this._isShown()) return;
        if (N.trigger(this._element, Dt).defaultPrevented) return;
        var t = this._getDimension();
        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), d(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);
        var _iterator8 = _createForOfIteratorHelper(this._triggerArray),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _t7 = _step8.value;
            var _e8 = z.getElementFromSelector(_t7);
            _e8 && !this._isShown(_e8) && this._addAriaAndCollapsedClass([_t7], !1);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this14._isTransitioning = !1, _this14._element.classList.remove(Mt), _this14._element.classList.add(Pt), N.trigger(_this14._element, $t);
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(Nt);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        if (!this._config.parent) return;
        var t = this._getFirstLevelChildren(Ft);
        var _iterator9 = _createForOfIteratorHelper(t),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _e9 = _step9.value;
            var _t8 = z.getElementFromSelector(_e9);
            _t8 && this._addAriaAndCollapsedClass([_e9], this._isShown(_t8));
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(t) {
        var e = z.find(jt, this._config.parent);
        return z.find(t, this._config.parent).filter(function (t) {
          return !e.includes(t);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (t.length) {
          var _iterator10 = _createForOfIteratorHelper(t),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _i14 = _step10.value;
              _i14.classList.toggle("collapsed", !e), _i14.setAttribute("aria-expanded", e);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ht;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Wt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        var e = {};
        return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
          var i = Bt.getOrCreateInstance(this, e);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }]);
    return Bt;
  }(W);
  N.on(document, It, Ft, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var _iterator11 = _createForOfIteratorHelper(z.getMultipleElementsFromSelector(this)),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _t9 = _step11.value;
        Bt.getOrCreateInstance(_t9, {
          toggle: !1
        }).toggle();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }), m(Bt);
  var zt = "top",
    Rt = "bottom",
    qt = "right",
    Vt = "left",
    Kt = "auto",
    Qt = [zt, Rt, qt, Vt],
    Xt = "start",
    Yt = "end",
    Ut = "clippingParents",
    Gt = "viewport",
    Jt = "popper",
    Zt = "reference",
    te = Qt.reduce(function (t, e) {
      return t.concat([e + "-" + Xt, e + "-" + Yt]);
    }, []),
    ee = [].concat(Qt, [Kt]).reduce(function (t, e) {
      return t.concat([e, e + "-" + Xt, e + "-" + Yt]);
    }, []),
    ie = "beforeRead",
    ne = "read",
    se = "afterRead",
    oe = "beforeMain",
    re = "main",
    ae = "afterMain",
    le = "beforeWrite",
    ce = "write",
    he = "afterWrite",
    de = [ie, ne, se, oe, re, ae, le, ce, he];
  function ue(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function fe(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }
    return t;
  }
  function pe(t) {
    return t instanceof fe(t).Element || t instanceof Element;
  }
  function me(t) {
    return t instanceof fe(t).HTMLElement || t instanceof HTMLElement;
  }
  function ge(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot);
  }
  var _e = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        me(s) && ue(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
            s = e.attributes[t] || {},
            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
              return t[e] = "", t;
            }, {});
          me(n) && ue(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };
  function be(t) {
    return t.split("-")[0];
  }
  var ve = Math.max,
    ye = Math.min,
    we = Math.round;
  function Ae() {
    var t = navigator.userAgentData;
    return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function (t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Ee() {
    return !/^((?!chrome|android).)*safari/i.test(Ae());
  }
  function Te(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
    var r = (pe(t) ? fe(t) : window).visualViewport,
      a = !Ee() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c
    };
  }
  function Ce(t) {
    var e = Te(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }
  function Oe(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && ge(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function xe(t) {
    return fe(t).getComputedStyle(t);
  }
  function ke(t) {
    return ["table", "td", "th"].indexOf(ue(t)) >= 0;
  }
  function Le(t) {
    return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }
  function Se(t) {
    return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t);
  }
  function De(t) {
    return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null;
  }
  function $e(t) {
    for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;) i = De(i);
    return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function (t) {
      var e = /firefox/i.test(Ae());
      if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
      var i = Se(t);
      for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0;) {
        var n = xe(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }
      return null;
    }(t) || e;
  }
  function Ie(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function Ne(t, e, i) {
    return ve(t, ye(e, i));
  }
  function Pe(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }
  function Me(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }
  var je = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = be(i.placement),
        l = Ie(a),
        c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = function (t, e) {
            return Pe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
              placement: e.placement
            })) : t) ? t : Me(t, Qt));
          }(s.padding, i),
          d = Ce(o),
          u = "y" === l ? zt : Vt,
          f = "y" === l ? Rt : qt,
          p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
          m = r[l] - i.rects.reference[l],
          g = $e(o),
          _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
          b = p / 2 - m / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          A = Ne(v, w, y),
          E = l;
        i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function Fe(t) {
    return t.split("-")[1];
  }
  var He = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function We(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d = t.isFixed,
      u = r.x,
      f = void 0 === u ? 0 : u,
      p = r.y,
      m = void 0 === p ? 0 : p,
      g = "function" == typeof h ? h({
        x: f,
        y: m
      }) : {
        x: f,
        y: m
      };
    f = g.x, m = g.y;
    var _ = r.hasOwnProperty("x"),
      b = r.hasOwnProperty("y"),
      v = Vt,
      y = zt,
      w = window;
    if (c) {
      var A = $e(i),
        E = "clientHeight",
        T = "clientWidth";
      A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
    }
    var C,
      O = Object.assign({
        position: a
      }, c && He),
      x = !0 === h ? function (t, e) {
        var i = t.x,
          n = t.y,
          s = e.devicePixelRatio || 1;
        return {
          x: we(i * s) / s || 0,
          y: we(n * s) / s || 0
        };
      }({
        x: f,
        y: m
      }, fe(i)) : {
        x: f,
        y: m
      };
    return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
  }
  var Be = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: be(e.placement),
          variation: Fe(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy
        };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  };
  var ze = {
    passive: !0
  };
  var Re = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = fe(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, ze);
      }), a && l.addEventListener("resize", i.update, ze), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, ze);
        }), a && l.removeEventListener("resize", i.update, ze);
      };
    },
    data: {}
  };
  var qe = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Ve(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return qe[t];
    });
  }
  var Ke = {
    start: "end",
    end: "start"
  };
  function Qe(t) {
    return t.replace(/start|end/g, function (t) {
      return Ke[t];
    });
  }
  function Xe(t) {
    var e = fe(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }
  function Ye(t) {
    return Te(Le(t)).left + Xe(t).scrollLeft;
  }
  function Ue(t) {
    var e = xe(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Ge(t) {
    return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t));
  }
  function Je(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ge(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = fe(n),
      r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Je(Se(r)));
  }
  function Ze(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }
  function ti(t, e, i) {
    return e === Gt ? Ze(function (t, e) {
      var i = fe(t),
        n = Le(t),
        s = i.visualViewport,
        o = n.clientWidth,
        r = n.clientHeight,
        a = 0,
        l = 0;
      if (s) {
        o = s.width, r = s.height;
        var c = Ee();
        (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
      }
      return {
        width: o,
        height: r,
        x: a + Ye(t),
        y: l
      };
    }(t, i)) : pe(e) ? function (t, e) {
      var i = Te(t, !1, "fixed" === e);
      return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
    }(e, i) : Ze(function (t) {
      var e,
        i = Le(t),
        n = Xe(t),
        s = null == (e = t.ownerDocument) ? void 0 : e.body,
        o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
        r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
        a = -n.scrollLeft + Ye(t),
        l = -n.scrollTop;
      return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(Le(t)));
  }
  function ei(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? be(s) : null,
      r = s ? Fe(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case zt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;
      case Rt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;
      case qt:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;
      case Vt:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;
      default:
        e = {
          x: i.x,
          y: i.y
        };
    }
    var c = o ? Ie(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case Xt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case Yt:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function ii(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.strategy,
      r = void 0 === o ? t.strategy : o,
      a = i.boundary,
      l = void 0 === a ? Ut : a,
      c = i.rootBoundary,
      h = void 0 === c ? Gt : c,
      d = i.elementContext,
      u = void 0 === d ? Jt : d,
      f = i.altBoundary,
      p = void 0 !== f && f,
      m = i.padding,
      g = void 0 === m ? 0 : m,
      _ = Pe("number" != typeof g ? g : Me(g, Qt)),
      b = u === Jt ? Zt : Jt,
      v = t.rects.popper,
      y = t.elements[p ? b : u],
      w = function (t, e, i, n) {
        var s = "clippingParents" === e ? function (t) {
            var e = Je(Se(t)),
              i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
            return pe(i) ? e.filter(function (t) {
              return pe(t) && Oe(t, i) && "body" !== ue(t);
            }) : [];
          }(t) : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
            var s = ti(t, i, n);
            return e.top = ve(s.top, e.top), e.right = ye(s.right, e.right), e.bottom = ye(s.bottom, e.bottom), e.left = ve(s.left, e.left), e;
          }, ti(t, r, n));
        return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
      }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r),
      A = Te(t.elements.reference),
      E = ei({
        reference: A,
        element: v,
        strategy: "absolute",
        placement: s
      }),
      T = Ze(Object.assign({}, v, E)),
      C = u === Jt ? T : A,
      O = {
        top: w.top - C.top + _.top,
        bottom: C.bottom - w.bottom + _.bottom,
        left: w.left - C.left + _.left,
        right: C.right - w.right + _.right
      },
      x = t.modifiersData.offset;
    if (u === Jt && x) {
      var k = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1,
          i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }
    return O;
  }
  function ni(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? ee : l,
      h = Fe(n),
      d = h ? a ? te : te.filter(function (t) {
        return Fe(t) === h;
      }) : Qt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = ii(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[be(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  var si = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function (t) {
            if (be(t) === Kt) return [];
            var e = Ve(t);
            return [Qe(t), e, Qe(e)];
          }(g) : [Ve(g)]), v = [g].concat(b).reduce(function (t, i) {
            return t.concat(be(i) === Kt ? ni(e, {
              placement: i,
              boundary: h,
              rootBoundary: d,
              padding: c,
              flipVariations: p,
              allowedAutoPlacements: m
            }) : i);
          }, []), y = e.rects.reference, w = e.rects.popper, A = new Map(), E = !0, T = v[0], C = 0; C < v.length; C++) {
          var O = v[C],
            x = be(O),
            k = Fe(O) === Xt,
            L = [zt, Rt].indexOf(x) >= 0,
            S = L ? "width" : "height",
            D = ii(e, {
              placement: O,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c
            }),
            $ = L ? k ? qt : Vt : k ? Rt : zt;
          y[S] > w[S] && ($ = Ve($));
          var I = Ve($),
            N = [];
          if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every(function (t) {
            return t;
          })) {
            T = O, E = !1;
            break;
          }
          A.set(O, N);
        }
        if (E) for (var P = function P(t) {
            var e = v.find(function (e) {
              var i = A.get(e);
              if (i) return i.slice(0, t).every(function (t) {
                return t;
              });
            });
            if (e) return T = e, "break";
          }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--);
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };
  function oi(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }
  function ri(t) {
    return [zt, qt, Rt, Vt].some(function (e) {
      return t[e] >= 0;
    });
  }
  var ai = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function fn(t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = ii(e, {
            elementContext: "reference"
          }),
          a = ii(e, {
            altBoundary: !0
          }),
          l = oi(r, n),
          c = oi(a, s, o),
          h = ri(l),
          d = ri(c);
        e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d
        }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": h,
          "data-popper-escaped": d
        });
      }
    },
    li = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function fn(t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = ee.reduce(function (t, i) {
            return t[i] = function (t, e, i) {
              var n = be(t),
                s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
                o = "function" == typeof i ? i(Object.assign({}, e, {
                  placement: t
                })) : i,
                r = o[0],
                a = o[1];
              return r = r || 0, a = (a || 0) * s, [Vt, qt].indexOf(n) >= 0 ? {
                x: a,
                y: r
              } : {
                x: r,
                y: a
              };
            }(i, e.rects, o), t;
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
      }
    },
    ci = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function fn(t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = ei({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement
        });
      },
      data: {}
    },
    hi = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function fn(t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = ii(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h
          }),
          _ = be(e.placement),
          b = Fe(e.placement),
          v = !b,
          y = Ie(_),
          w = "x" === y ? "y" : "x",
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C = "function" == typeof m ? m(Object.assign({}, e.rects, {
            placement: e.placement
          })) : m,
          O = "number" == typeof C ? {
            mainAxis: C,
            altAxis: C
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, C),
          x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
          k = {
            x: 0,
            y: 0
          };
        if (A) {
          if (o) {
            var L,
              S = "y" === y ? zt : Vt,
              D = "y" === y ? Rt : qt,
              $ = "y" === y ? "height" : "width",
              I = A[y],
              N = I + g[S],
              P = I - g[D],
              M = f ? -T[$] / 2 : 0,
              j = b === Xt ? E[$] : T[$],
              F = b === Xt ? -T[$] : -E[$],
              H = e.elements.arrow,
              W = f && H ? Ce(H) : {
                width: 0,
                height: 0
              },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },
              z = B[S],
              R = B[D],
              q = Ne(0, E[$], W[$]),
              V = v ? E[$] / 2 - M - q - z - O.mainAxis : j - q - z - O.mainAxis,
              K = v ? -E[$] / 2 + M + q + R + O.mainAxis : F + q + R + O.mainAxis,
              Q = e.elements.arrow && $e(e.elements.arrow),
              X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = I + K - Y,
              G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
            A[y] = G, k[y] = G - I;
          }
          if (a) {
            var J,
              Z = "x" === y ? zt : Vt,
              tt = "x" === y ? Rt : qt,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + g[Z],
              st = et - g[tt],
              ot = -1 !== [zt, Vt].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct = f && ot ? function (t, e, i) {
                var n = Ne(t, e, i);
                return n > i ? i : n;
              }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
            A[w] = ct, k[w] = ct - et;
          }
          e.modifiersData[n] = k;
        }
      },
      requiresIfExists: ["offset"]
    };
  function di(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = me(e),
      r = me(e) && function (t) {
        var e = t.getBoundingClientRect(),
          i = we(e.width) / t.offsetWidth || 1,
          n = we(e.height) / t.offsetHeight || 1;
        return 1 !== i || 1 !== n;
      }(e),
      a = Le(e),
      l = Te(t, r, i),
      c = {
        scrollLeft: 0,
        scrollTop: 0
      },
      h = {
        x: 0,
        y: 0
      };
    return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : Xe(n)), me(e) ? ((h = Te(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ye(a))), {
      x: l.left + c.scrollLeft - h.x,
      y: l.top + c.scrollTop - h.y,
      width: l.width,
      height: l.height
    };
  }
  function ui(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
        if (!i.has(t)) {
          var n = e.get(t);
          n && s(n);
        }
      }), n.push(t);
    }
    return t.forEach(function (t) {
      e.set(t.name, t);
    }), t.forEach(function (t) {
      i.has(t.name) || s(t);
    }), n;
  }
  var fi = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function pi() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function mi(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? fi : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, fi, o),
          modifiersData: {},
          elements: {
            reference: t,
            popper: e
          },
          attributes: {},
          styles: {}
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function setOptions(i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
              reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
              popper: Je(e)
            };
            var r,
              c,
              u = function (t) {
                var e = ui(t);
                return de.reduce(function (t, i) {
                  return t.concat(e.filter(function (t) {
                    return t.phase === i;
                  }));
                }, []);
              }((r = [].concat(n, a.options.modifiers), c = r.reduce(function (t, e) {
                var i = t[e.name];
                return t[e.name] = i ? Object.assign({}, i, e, {
                  options: Object.assign({}, i.options, e.options),
                  data: Object.assign({}, i.data, e.data)
                }) : e, t;
              }, {}), Object.keys(c).map(function (t) {
                return c[t];
              })));
            return a.orderedModifiers = u.filter(function (t) {
              return t.enabled;
            }), a.orderedModifiers.forEach(function (t) {
              var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;
              if ("function" == typeof s) {
                var o = s({
                  state: a,
                  name: e,
                  instance: h,
                  options: n
                });
                l.push(o || function () {});
              }
            }), h.update();
          },
          forceUpdate: function forceUpdate() {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (pi(e, i)) {
                a.rects = {
                  reference: di(e, $e(i), "fixed" === a.options.strategy),
                  popper: Ce(i)
                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                  return a.modifiersData[t.name] = Object.assign({}, t.data);
                });
                for (var n = 0; n < a.orderedModifiers.length; n++) if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                    o = s.fn,
                    r = s.options,
                    l = void 0 === r ? {} : r,
                    d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          },
          update: (s = function s() {
            return new Promise(function (t) {
              h.forceUpdate(), t(a);
            });
          }, function () {
            return r || (r = new Promise(function (t) {
              Promise.resolve().then(function () {
                r = void 0, t(s());
              });
            })), r;
          }),
          destroy: function destroy() {
            d(), c = !0;
          }
        };
      if (!pi(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }
      return h.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), h;
    };
  }
  var gi = mi(),
    _i = mi({
      defaultModifiers: [Re, ci, Be, _e]
    }),
    bi = mi({
      defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai]
    });
  var vi = Object.freeze(Object.defineProperty({
      __proto__: null,
      afterMain: ae,
      afterRead: se,
      afterWrite: he,
      applyStyles: _e,
      arrow: je,
      auto: Kt,
      basePlacements: Qt,
      beforeMain: oe,
      beforeRead: ie,
      beforeWrite: le,
      bottom: Rt,
      clippingParents: Ut,
      computeStyles: Be,
      createPopper: bi,
      createPopperBase: gi,
      createPopperLite: _i,
      detectOverflow: ii,
      end: Yt,
      eventListeners: Re,
      flip: si,
      hide: ai,
      left: Vt,
      main: re,
      modifierPhases: de,
      offset: li,
      placements: ee,
      popper: Jt,
      popperGenerator: mi,
      popperOffsets: ci,
      preventOverflow: hi,
      read: ne,
      reference: Zt,
      right: qt,
      start: Xt,
      top: zt,
      variationPlacements: te,
      viewport: Gt,
      write: ce
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    yi = "dropdown",
    wi = ".bs.dropdown",
    Ai = ".data-api",
    Ei = "ArrowUp",
    Ti = "ArrowDown",
    Ci = "hide".concat(wi),
    Oi = "hidden".concat(wi),
    xi = "show".concat(wi),
    ki = "shown".concat(wi),
    Li = "click".concat(wi).concat(Ai),
    Si = "keydown".concat(wi).concat(Ai),
    Di = "keyup".concat(wi).concat(Ai),
    $i = "show",
    Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    Ni = "".concat(Ii, ".").concat($i),
    Pi = ".dropdown-menu",
    Mi = p() ? "top-end" : "top-start",
    ji = p() ? "top-start" : "top-end",
    Fi = p() ? "bottom-end" : "bottom-start",
    Hi = p() ? "bottom-start" : "bottom-end",
    Wi = p() ? "left-start" : "right-start",
    Bi = p() ? "right-start" : "left-start",
    zi = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    },
    Ri = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };
  var qi = /*#__PURE__*/function (_W5) {
    _inherits(qi, _W5);
    var _super7 = _createSuper(qi);
    function qi(t, e) {
      var _this15;
      _classCallCheck(this, qi);
      _this15 = _super7.call(this, t, e), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = z.next(_this15._element, Pi)[0] || z.prev(_this15._element, Pi)[0] || z.findOne(Pi, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }
    _createClass(qi, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (l(this._element) || this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };
        if (!N.trigger(this._element, xi, t).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            var _ref4;
            var _iterator12 = _createForOfIteratorHelper((_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))),
              _step12;
            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _t10 = _step12.value;
                N.on(_t10, "mouseover", h);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (l(this._element) || !this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };
        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(qi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        if (!N.trigger(this._element, Ci, t).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) {
            var _ref5;
            var _iterator13 = _createForOfIteratorHelper((_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))),
              _step13;
            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _t11 = _step13.value;
                N.off(_t11, "mouseover", h);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
          this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t);
        }
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("object" == _typeof((t = _get(_getPrototypeOf(qi.prototype), "_getConfig", this).call(this, t)).reference) && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(yi.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var t = this._element;
        "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);
        var e = this._getPopperConfig();
        this._popper = bi(t, this._menu, e);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains($i);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._parent;
        if (t.classList.contains("dropend")) return Wi;
        if (t.classList.contains("dropstart")) return Bi;
        if (t.classList.contains("dropup-center")) return "top";
        if (t.classList.contains("dropdown-center")) return "bottom";
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ji : Mi : e ? Hi : Fi;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this16 = this;
        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this16._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), g(this._config.popperConfig, [t]));
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
          e = _ref6.target;
        var i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function (t) {
          return a(t);
        });
        i.length && b(i, e, t === Ti, !i.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return zi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ri;
      }
    }, {
      key: "NAME",
      get: function get() {
        return yi;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = qi.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
        var e = z.find(Ni);
        var _iterator14 = _createForOfIteratorHelper(e),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _i15 = _step14.value;
            var _e10 = qi.getInstance(_i15);
            if (!_e10 || !1 === _e10._config.autoClose) continue;
            var _n6 = t.composedPath(),
              _s4 = _n6.includes(_e10._menu);
            if (_n6.includes(_e10._element) || "inside" === _e10._config.autoClose && !_s4 || "outside" === _e10._config.autoClose && _s4) continue;
            if (_e10._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            var _o2 = {
              relatedTarget: _e10._element
            };
            "click" === t.type && (_o2.clickEvent = t), _e10._completeHide(_o2);
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var e = /input|textarea/i.test(t.target.tagName),
          i = "Escape" === t.key,
          n = [Ei, Ti].includes(t.key);
        if (!n && !i) return;
        if (e && !i) return;
        t.preventDefault();
        var s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode),
          o = qi.getOrCreateInstance(s);
        if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
        o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
      }
    }]);
    return qi;
  }(W);
  N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function (t) {
    t.preventDefault(), qi.getOrCreateInstance(this).toggle();
  }), m(qi);
  var Vi = "backdrop",
    Ki = "show",
    Qi = "mousedown.bs.".concat(Vi),
    Xi = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body"
    },
    Yi = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)"
    };
  var Ui = /*#__PURE__*/function (_H3) {
    _inherits(Ui, _H3);
    var _super8 = _createSuper(Ui);
    function Ui(t) {
      var _this17;
      _classCallCheck(this, Ui);
      _this17 = _super8.call(this), _this17._config = _this17._getConfig(t), _this17._isAppended = !1, _this17._element = null;
      return _this17;
    }
    _createClass(Ui, [{
      key: "show",
      value: function show(t) {
        if (!this._config.isVisible) return void g(t);
        this._append();
        var e = this._getElement();
        this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation(function () {
          g(t);
        });
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this18 = this;
        this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(function () {
          _this18.dispose(), g(t);
        })) : g(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t12 = document.createElement("div");
          _t12.className = this._config.className, this._config.isAnimated && _t12.classList.add("fade"), this._element = _t12;
        }
        return this._element;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.rootElement = r(t.rootElement), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this19 = this;
        if (this._isAppended) return;
        var t = this._getElement();
        this._config.rootElement.append(t), N.on(t, Qi, function () {
          g(_this19._config.clickCallback);
        }), this._isAppended = !0;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        _(t, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Xi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Yi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Vi;
      }
    }]);
    return Ui;
  }(H);
  var Gi = ".bs.focustrap",
    Ji = "focusin".concat(Gi),
    Zi = "keydown.tab".concat(Gi),
    tn = "backward",
    en = {
      autofocus: !0,
      trapElement: null
    },
    nn = {
      autofocus: "boolean",
      trapElement: "element"
    };
  var sn = /*#__PURE__*/function (_H4) {
    _inherits(sn, _H4);
    var _super9 = _createSuper(sn);
    function sn(t) {
      var _this20;
      _classCallCheck(this, sn);
      _this20 = _super9.call(this), _this20._config = _this20._getConfig(t), _this20._isActive = !1, _this20._lastTabNavDirection = null;
      return _this20;
    }
    _createClass(sn, [{
      key: "activate",
      value: function activate() {
        var _this21 = this;
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, function (t) {
          return _this21._handleFocusin(t);
        }), N.on(document, Zi, function (t) {
          return _this21._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, N.off(document, Gi));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = this._config.trapElement;
        if (t.target === document || t.target === e || e.contains(t.target)) return;
        var i = z.focusableChildren(e);
        0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward");
      }
    }], [{
      key: "Default",
      get: function get() {
        return en;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return nn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "focustrap";
      }
    }]);
    return sn;
  }(H);
  var on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    rn = ".sticky-top",
    an = "padding-right",
    ln = "margin-right";
  var cn = /*#__PURE__*/function () {
    function cn() {
      _classCallCheck(this, cn);
      this._element = document.body;
    }
    _createClass(cn, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, an, function (e) {
          return e + t;
        }), this._setElementAttributes(on, an, function (e) {
          return e + t;
        }), this._setElementAttributes(rn, ln, function (e) {
          return e - t;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this22 = this;
        var n = this.getWidth();
        this._applyManipulationCallback(t, function (t) {
          if (t !== _this22._element && window.innerWidth > t.clientWidth + n) return;
          _this22._saveInitialAttribute(t, e);
          var s = window.getComputedStyle(t).getPropertyValue(e);
          t.style.setProperty(e, "".concat(i(Number.parseFloat(s)), "px"));
        });
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style.getPropertyValue(e);
        i && F.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = F.getDataAttribute(t, e);
          null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        if (o(t)) e(t);else {
          var _iterator15 = _createForOfIteratorHelper(z.find(t, this._element)),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var _i16 = _step15.value;
              e(_i16);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        }
      }
    }]);
    return cn;
  }();
  var hn = ".bs.modal",
    dn = "hide".concat(hn),
    un = "hidePrevented".concat(hn),
    fn = "hidden".concat(hn),
    pn = "show".concat(hn),
    mn = "shown".concat(hn),
    gn = "resize".concat(hn),
    _n = "click.dismiss".concat(hn),
    bn = "mousedown.dismiss".concat(hn),
    vn = "keydown.dismiss".concat(hn),
    yn = "click".concat(hn, ".data-api"),
    wn = "modal-open",
    An = "show",
    En = "modal-static",
    Tn = {
      backdrop: !0,
      focus: !0,
      keyboard: !0
    },
    Cn = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
  var On = /*#__PURE__*/function (_W6) {
    _inherits(On, _W6);
    var _super10 = _createSuper(On);
    function On(t, e) {
      var _this23;
      _classCallCheck(this, On);
      _this23 = _super10.call(this, t, e), _this23._dialog = z.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new cn(), _this23._addEventListeners();
      return _this23;
    }
    _createClass(On, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;
        this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(function () {
          return _this24._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;
        this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated())));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(On.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Ui({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new sn({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this26 = this;
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        var e = z.findOne(".modal-body", this._dialog);
        e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(function () {
          _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, N.trigger(_this26._element, mn, {
            relatedTarget: t
          });
        }, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;
        N.on(this._element, vn, function (t) {
          "Escape" === t.key && (_this27._config.keyboard ? _this27.hide() : _this27._triggerBackdropTransition());
        }), N.on(window, gn, function () {
          _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
        }), N.on(this._element, bn, function (t) {
          N.one(_this27._element, _n, function (e) {
            _this27._element === t.target && _this27._element === e.target && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
          });
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(wn), _this28._resetAdjustments(), _this28._scrollBar.reset(), N.trigger(_this28._element, fn);
        });
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this29 = this;
        if (N.trigger(this._element, un).defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
          e = this._element.style.overflowY;
        "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(function () {
          _this29._element.classList.remove(En), _this29._queueCallback(function () {
            _this29._element.style.overflowY = e;
          }, _this29._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
          e = this._scrollBar.getWidth(),
          i = e > 0;
        if (i && !t) {
          var _t13 = p() ? "paddingLeft" : "paddingRight";
          this._element.style[_t13] = "".concat(e, "px");
        }
        if (!i && t) {
          var _t14 = p() ? "paddingRight" : "paddingLeft";
          this._element.style[_t14] = "".concat(e, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Tn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Cn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = On.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);
    return On;
  }(W);
  N.on(document, yn, '[data-bs-toggle="modal"]', function (t) {
    var _this30 = this;
    var e = z.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), N.one(e, pn, function (t) {
      t.defaultPrevented || N.one(e, fn, function () {
        a(_this30) && _this30.focus();
      });
    });
    var i = z.findOne(".modal.show");
    i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
  }), R(On), m(On);
  var xn = ".bs.offcanvas",
    kn = ".data-api",
    Ln = "load".concat(xn).concat(kn),
    Sn = "show",
    Dn = "showing",
    $n = "hiding",
    In = ".offcanvas.show",
    Nn = "show".concat(xn),
    Pn = "shown".concat(xn),
    Mn = "hide".concat(xn),
    jn = "hidePrevented".concat(xn),
    Fn = "hidden".concat(xn),
    Hn = "resize".concat(xn),
    Wn = "click".concat(xn).concat(kn),
    Bn = "keydown.dismiss".concat(xn),
    zn = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    },
    Rn = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean"
    };
  var qn = /*#__PURE__*/function (_W7) {
    _inherits(qn, _W7);
    var _super11 = _createSuper(qn);
    function qn(t, e) {
      var _this31;
      _classCallCheck(this, qn);
      _this31 = _super11.call(this, t, e), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
      return _this31;
    }
    _createClass(qn, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this32 = this;
        this._isShown || N.trigger(this._element, Nn, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new cn().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(function () {
          _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add(Sn), _this32._element.classList.remove(Dn), N.trigger(_this32._element, Pn, {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;
        this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(function () {
          _this33._element.classList.remove(Sn, $n), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new cn().reset(), N.trigger(_this33._element, Fn);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(qn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;
        var t = Boolean(this._config.backdrop);
        return new Ui({
          className: "offcanvas-backdrop",
          isVisible: t,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: t ? function () {
            "static" !== _this34._config.backdrop ? _this34.hide() : N.trigger(_this34._element, jn);
          } : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new sn({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;
        N.on(this._element, Bn, function (t) {
          "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : N.trigger(_this35._element, jn));
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return zn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Rn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = qn.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return qn;
  }(W);
  N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function (t) {
    var _this36 = this;
    var e = z.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
    N.one(e, Fn, function () {
      a(_this36) && _this36.focus();
    });
    var i = z.findOne(In);
    i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this);
  }), N.on(window, Ln, function () {
    var _iterator16 = _createForOfIteratorHelper(z.find(In)),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var _t15 = _step16.value;
        qn.getOrCreateInstance(_t15).show();
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
  }), N.on(window, Hn, function () {
    var _iterator17 = _createForOfIteratorHelper(z.find("[aria-modal][class*=show][class*=offcanvas-]")),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _t16 = _step17.value;
        "fixed" !== getComputedStyle(_t16).position && qn.getOrCreateInstance(_t16).hide();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }), R(qn), m(qn);
  var Vn = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    Xn = function Xn(t, e) {
      var i = t.nodeName.toLowerCase();
      return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter(function (t) {
        return t instanceof RegExp;
      }).some(function (t) {
        return t.test(i);
      });
    },
    Yn = {
      allowList: Vn,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>"
    },
    Un = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string"
    },
    Gn = {
      entry: "(string|element|function|null)",
      selector: "(string|element)"
    };
  var Jn = /*#__PURE__*/function (_H5) {
    _inherits(Jn, _H5);
    var _super12 = _createSuper(Jn);
    function Jn(t) {
      var _this37;
      _classCallCheck(this, Jn);
      _this37 = _super12.call(this), _this37._config = _this37._getConfig(t);
      return _this37;
    }
    _createClass(Jn, [{
      key: "getContent",
      value: function getContent() {
        var _this38 = this;
        return Object.values(this._config.content).map(function (t) {
          return _this38._resolvePossibleFunction(t);
        }).filter(Boolean);
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.getContent().length > 0;
      }
    }, {
      key: "changeContent",
      value: function changeContent(t) {
        return this._checkContent(t), this._config.content = _objectSpread(_objectSpread({}, this._config.content), t), this;
      }
    }, {
      key: "toHtml",
      value: function toHtml() {
        var _e$classList;
        var t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);
        for (var _i17 = 0, _Object$entries5 = Object.entries(this._config.content); _i17 < _Object$entries5.length; _i17++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i17], 2),
            _e11 = _Object$entries5$_i[0],
            _i18 = _Object$entries5$_i[1];
          this._setContent(t, _i18, _e11);
        }
        var e = t.children[0],
          i = this._resolvePossibleFunction(this._config.extraClass);
        return i && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e;
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        _get(_getPrototypeOf(Jn.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(t) {
        for (var _i19 = 0, _Object$entries6 = Object.entries(t); _i19 < _Object$entries6.length; _i19++) {
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i19], 2),
            _e12 = _Object$entries6$_i[0],
            _i20 = _Object$entries6$_i[1];
          _get(_getPrototypeOf(Jn.prototype), "_typeCheckConfig", this).call(this, {
            selector: _e12,
            entry: _i20
          }, Gn);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(t, e, i) {
        var n = z.findOne(i, t);
        n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(t) {
        return this._config.sanitize ? function (t, e, i, _ref7) {
          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);
          var n = new window.DOMParser().parseFromString(t, "text/html"),
            s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));
          var _iterator18 = _createForOfIteratorHelper(s),
            _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var _ref8;
              var _t17 = _step18.value;
              var _i21 = _t17.nodeName.toLowerCase();
              if (!Object.keys(e).includes(_i21)) {
                _t17.remove();
                continue;
              }
              var _n7 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t17.attributes)),
                _s5 = [].concat(e["*"] || [], e[_i21] || []);
              var _iterator19 = _createForOfIteratorHelper(_n7),
                _step19;
              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var _e13 = _step19.value;
                  Xn(_e13, _s5) || _t17.removeAttribute(_e13.nodeName);
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
          return n.body.innerHTML;
        }(t, this._config.allowList, this._config.sanitizeFn) : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return g(t, [this]);
      }
    }, {
      key: "_putElementInTemplate",
      value: function _putElementInTemplate(t, e) {
        if (this._config.html) return e.innerHTML = "", void e.append(t);
        e.textContent = t.textContent;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Yn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Un;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "TemplateFactory";
      }
    }]);
    return Jn;
  }(H);
  var Zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
    ts = "fade",
    es = "show",
    is = ".modal",
    ns = "hide.bs.modal",
    ss = "hover",
    os = "focus",
    rs = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: p() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: p() ? "right" : "left"
    },
    as = {
      allowList: Vn,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus"
    },
    ls = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string"
    };
  var cs = /*#__PURE__*/function (_W8) {
    _inherits(cs, _W8);
    var _super13 = _createSuper(cs);
    function cs(t, e) {
      var _this39;
      _classCallCheck(this, cs);
      if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this39 = _super13.call(this, t, e), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = null, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners(), _this39._config.selector || _this39._fixTitle();
      return _this39;
    }
    _createClass(cs, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), _get(_getPrototypeOf(cs.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;
        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        var t = N.trigger(this._element, this.constructor.eventName("show")),
          e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (t.defaultPrevented || !e) return;
        this._disposePopper();
        var i = this._getTipElement();
        this._element.setAttribute("aria-describedby", i.getAttribute("id"));
        var n = this._config.container;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement) {
          var _ref9;
          var _iterator20 = _createForOfIteratorHelper((_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var _t18 = _step20.value;
              N.on(_t18, "mouseover", h);
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
        }
        this._queueCallback(function () {
          N.trigger(_this40._element, _this40.constructor.eventName("shown")), !1 === _this40._isHovered && _this40._leave(), _this40._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;
        if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement) {
            var _ref10;
            var _iterator21 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
              _step21;
            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var _t19 = _step21.value;
                N.off(_t19, "mouseover", h);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }
          this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback(function () {
            _this41._isWithActiveTrigger() || (_this41._isHovered || _this41._disposePopper(), _this41._element.removeAttribute("aria-describedby"), N.trigger(_this41._element, _this41.constructor.eventName("hidden")));
          }, this.tip, this._isAnimated());
        }
      }
    }, {
      key: "update",
      value: function update() {
        this._popper && this._popper.update();
      }
    }, {
      key: "_isWithContent",
      value: function _isWithContent() {
        return Boolean(this._getTitle());
      }
    }, {
      key: "_getTipElement",
      value: function _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
    }, {
      key: "_createTipElement",
      value: function _createTipElement(t) {
        var e = this._getTemplateFactory(t).toHtml();
        if (!e) return null;
        e.classList.remove(ts, es), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
        var i = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        }(this.constructor.NAME).toString();
        return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn(_objectSpread(_objectSpread({}, this._config), {}, {
          content: t,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        })), this._templateFactory;
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".tooltip-inner": this._getTitle()
        };
      }
    }, {
      key: "_getTitle",
      value: function _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(ts);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(es);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        var e = g(this._config.placement, [this, t, this._element]),
          i = rs[e.toUpperCase()];
        return bi(this._element, t, this._getPopperConfig(i));
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this42 = this;
        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this42._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return g(t, [this._element]);
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this43 = this;
        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: function fn(t) {
              _this43._getTipElement().setAttribute("data-popper-placement", t.state.placement);
            }
          }]
        };
        return _objectSpread(_objectSpread({}, e), g(this._config.popperConfig, [e]));
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this44 = this;
        var t = this._config.trigger.split(" ");
        var _iterator22 = _createForOfIteratorHelper(t),
          _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var _e14 = _step22.value;
            if ("click" === _e14) N.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
              _this44._initializeOnDelegatedTarget(t).toggle();
            });else if ("manual" !== _e14) {
              var _t20 = _e14 === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                _i22 = _e14 === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
              N.on(this._element, _t20, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);
                e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter();
              }), N.on(this._element, _i22, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);
                e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave();
              });
            }
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
        this._hideModalHandler = function () {
          _this44._element && _this44.hide();
        }, N.on(this._element.closest(is), ns, this._hideModalHandler);
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title");
        t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
      }
    }, {
      key: "_enter",
      value: function _enter() {
        var _this45 = this;
        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(function () {
          _this45._isHovered && _this45.show();
        }, this._config.delay.show));
      }
    }, {
      key: "_leave",
      value: function _leave() {
        var _this46 = this;
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(function () {
          _this46._isHovered || _this46.hide();
        }, this._config.delay.hide));
      }
    }, {
      key: "_setTimeout",
      value: function _setTimeout(t, e) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = F.getDataAttributes(this._element);
        for (var _i23 = 0, _Object$keys2 = Object.keys(e); _i23 < _Object$keys2.length; _i23++) {
          var _t21 = _Object$keys2[_i23];
          Zn.has(_t21) && delete e[_t21];
        }
        return t = _objectSpread(_objectSpread({}, e), "object" == _typeof(t) && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        for (var _i24 = 0, _Object$entries7 = Object.entries(this._config); _i24 < _Object$entries7.length; _i24++) {
          var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i24], 2),
            _e15 = _Object$entries7$_i[0],
            _i25 = _Object$entries7$_i[1];
          this.constructor.Default[_e15] !== _i25 && (t[_e15] = _i25);
        }
        return t.selector = !1, t.trigger = "manual", t;
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
    }], [{
      key: "Default",
      get: function get() {
        return as;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ls;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = cs.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return cs;
  }(W);
  m(cs);
  var hs = _objectSpread(_objectSpread({}, cs.Default), {}, {
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    }),
    ds = _objectSpread(_objectSpread({}, cs.DefaultType), {}, {
      content: "(null|string|element|function)"
    });
  var us = /*#__PURE__*/function (_cs) {
    _inherits(us, _cs);
    var _super14 = _createSuper(us);
    function us() {
      _classCallCheck(this, us);
      return _super14.apply(this, arguments);
    }
    _createClass(us, [{
      key: "_isWithContent",
      value: function _isWithContent() {
        return this._getTitle() || this._getContent();
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent()
        };
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }], [{
      key: "Default",
      get: function get() {
        return hs;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ds;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = us.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return us;
  }(cs);
  m(us);
  var fs = ".bs.scrollspy",
    ps = "activate".concat(fs),
    ms = "click".concat(fs),
    gs = "load".concat(fs, ".data-api"),
    _s = "active",
    bs = "[href]",
    vs = ".nav-link",
    ys = "".concat(vs, ", .nav-item > ").concat(vs, ", .list-group-item"),
    ws = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [.1, .5, 1]
    },
    As = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array"
    };
  var Es = /*#__PURE__*/function (_W9) {
    _inherits(Es, _W9);
    var _super15 = _createSuper(Es);
    function Es(t, e) {
      var _this47;
      _classCallCheck(this, Es);
      _this47 = _super15.call(this, t, e), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, _this47.refresh();
      return _this47;
    }
    _createClass(Es, [{
      key: "refresh",
      value: function refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        var _iterator23 = _createForOfIteratorHelper(this._observableSections.values()),
          _step23;
        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _t22 = _step23.value;
            this._observer.observe(_t22);
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._observer.disconnect(), _get(_getPrototypeOf(Es.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? "".concat(t.offset, "px 0px -30%") : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(function (t) {
          return Number.parseFloat(t);
        })), t;
      }
    }, {
      key: "_maybeEnableSmoothScroll",
      value: function _maybeEnableSmoothScroll() {
        var _this48 = this;
        this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, function (t) {
          var e = _this48._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            var _i26 = _this48._rootElement || window,
              _n8 = e.offsetTop - _this48._element.offsetTop;
            if (_i26.scrollTo) return void _i26.scrollTo({
              top: _n8,
              behavior: "smooth"
            });
            _i26.scrollTop = _n8;
          }
        }));
      }
    }, {
      key: "_getNewObserver",
      value: function _getNewObserver() {
        var _this49 = this;
        var t = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver(function (t) {
          return _this49._observerCallback(t);
        }, t);
      }
    }, {
      key: "_observerCallback",
      value: function _observerCallback(t) {
        var _this50 = this;
        var e = function e(t) {
            return _this50._targetLinks.get("#".concat(t.target.id));
          },
          i = function i(t) {
            _this50._previousScrollData.visibleEntryTop = t.target.offsetTop, _this50._process(e(t));
          },
          n = (this._rootElement || document.documentElement).scrollTop,
          s = n >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = n;
        var _iterator24 = _createForOfIteratorHelper(t),
          _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _o3 = _step24.value;
            if (!_o3.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(e(_o3));
              continue;
            }
            var _t23 = _o3.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (s && _t23) {
              if (i(_o3), !n) return;
            } else s || _t23 || i(_o3);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    }, {
      key: "_initializeTargetsAndObservables",
      value: function _initializeTargetsAndObservables() {
        this._targetLinks = new Map(), this._observableSections = new Map();
        var t = z.find(bs, this._config.target);
        var _iterator25 = _createForOfIteratorHelper(t),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _e16 = _step25.value;
            if (!_e16.hash || l(_e16)) continue;
            var _t24 = z.findOne(decodeURI(_e16.hash), this._element);
            a(_t24) && (this._targetLinks.set(decodeURI(_e16.hash), _e16), this._observableSections.set(_e16.hash, _t24));
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "_process",
      value: function _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {
          relatedTarget: t
        }));
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(t) {
        if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);else {
          var _iterator26 = _createForOfIteratorHelper(z.parents(t, ".nav, .list-group")),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var _e17 = _step26.value;
              var _iterator27 = _createForOfIteratorHelper(z.prev(_e17, ys)),
                _step27;
              try {
                for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                  var _t25 = _step27.value;
                  _t25.classList.add(_s);
                }
              } catch (err) {
                _iterator27.e(err);
              } finally {
                _iterator27.f();
              }
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
        }
      }
    }, {
      key: "_clearActiveClass",
      value: function _clearActiveClass(t) {
        t.classList.remove(_s);
        var e = z.find("".concat(bs, ".").concat(_s), t);
        var _iterator28 = _createForOfIteratorHelper(e),
          _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _t26 = _step28.value;
            _t26.classList.remove(_s);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return ws;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return As;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Es.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return Es;
  }(W);
  N.on(window, gs, function () {
    var _iterator29 = _createForOfIteratorHelper(z.find('[data-bs-spy="scroll"]')),
      _step29;
    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var _t27 = _step29.value;
        Es.getOrCreateInstance(_t27);
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }
  }), m(Es);
  var Ts = ".bs.tab",
    Cs = "hide".concat(Ts),
    Os = "hidden".concat(Ts),
    xs = "show".concat(Ts),
    ks = "shown".concat(Ts),
    Ls = "click".concat(Ts),
    Ss = "keydown".concat(Ts),
    Ds = "load".concat(Ts),
    $s = "ArrowLeft",
    Is = "ArrowRight",
    Ns = "ArrowUp",
    Ps = "ArrowDown",
    Ms = "Home",
    js = "End",
    Fs = "active",
    Hs = "fade",
    Ws = "show",
    Bs = ".dropdown-toggle",
    zs = ":not(".concat(Bs, ")"),
    Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    qs = ".nav-link".concat(zs, ", .list-group-item").concat(zs, ", [role=\"tab\"]").concat(zs, ", ").concat(Rs),
    Vs = ".".concat(Fs, "[data-bs-toggle=\"tab\"], .").concat(Fs, "[data-bs-toggle=\"pill\"], .").concat(Fs, "[data-bs-toggle=\"list\"]");
  var Ks = /*#__PURE__*/function (_W10) {
    _inherits(Ks, _W10);
    var _super16 = _createSuper(Ks);
    function Ks(t) {
      var _this51;
      _classCallCheck(this, Ks);
      _this51 = _super16.call(this, t), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), N.on(_this51._element, Ss, function (t) {
        return _this51._keydown(t);
      }));
      return _this51;
    }
    _createClass(Ks, [{
      key: "show",
      value: function show() {
        var t = this._element;
        if (this._elemIsActive(t)) return;
        var e = this._getActiveElem(),
          i = e ? N.trigger(e, Cs, {
            relatedTarget: t
          }) : null;
        N.trigger(t, xs, {
          relatedTarget: e
        }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
      }
    }, {
      key: "_activate",
      value: function _activate(t, e) {
        var _this52 = this;
        t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), N.trigger(t, ks, {
            relatedTarget: e
          })) : t.classList.add(Ws);
        }, t, t.classList.contains(Hs)));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(t, e) {
        var _this53 = this;
        t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), N.trigger(t, Os, {
            relatedTarget: e
          })) : t.classList.remove(Ws);
        }, t, t.classList.contains(Hs)));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (![$s, Is, Ns, Ps, Ms, js].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();
        var e = this._getChildren().filter(function (t) {
          return !l(t);
        });
        var i;
        if ([Ms, js].includes(t.key)) i = e[t.key === Ms ? 0 : e.length - 1];else {
          var _n9 = [Is, Ps].includes(t.key);
          i = b(e, t.target, _n9, !0);
        }
        i && (i.focus({
          preventScroll: !0
        }), Ks.getOrCreateInstance(i).show());
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        return z.find(qs, this._parent);
      }
    }, {
      key: "_getActiveElem",
      value: function _getActiveElem() {
        var _this54 = this;
        return this._getChildren().find(function (t) {
          return _this54._elemIsActive(t);
        }) || null;
      }
    }, {
      key: "_setInitialAttributes",
      value: function _setInitialAttributes(t, e) {
        this._setAttributeIfNotExists(t, "role", "tablist");
        var _iterator30 = _createForOfIteratorHelper(e),
          _step30;
        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var _t28 = _step30.value;
            this._setInitialAttributesOnChild(_t28);
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }
      }
    }, {
      key: "_setInitialAttributesOnChild",
      value: function _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);
        var e = this._elemIsActive(t),
          i = this._getOuterElement(t);
        t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
      }
    }, {
      key: "_setInitialAttributesOnTargetPanel",
      value: function _setInitialAttributesOnTargetPanel(t) {
        var e = z.getElementFromSelector(t);
        e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", "".concat(t.id)));
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(t, e) {
        var i = this._getOuterElement(t);
        if (!i.classList.contains("dropdown")) return;
        var n = function n(t, _n10) {
          var s = z.findOne(t, i);
          s && s.classList.toggle(_n10, e);
        };
        n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i);
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(t) {
        return t.classList.contains(Fs);
      }
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(t) {
        return t.matches(qs) ? t : z.findOne(qs, t);
      }
    }, {
      key: "_getOuterElement",
      value: function _getOuterElement(t) {
        return t.closest(".nav-item, .list-group-item") || t;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ks.getOrCreateInstance(this);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return Ks;
  }(W);
  N.on(document, Ls, Rs, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show();
  }), N.on(window, Ds, function () {
    var _iterator31 = _createForOfIteratorHelper(z.find(Vs)),
      _step31;
    try {
      for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
        var _t29 = _step31.value;
        Ks.getOrCreateInstance(_t29);
      }
    } catch (err) {
      _iterator31.e(err);
    } finally {
      _iterator31.f();
    }
  }), m(Ks);
  var Qs = ".bs.toast",
    Xs = "mouseover".concat(Qs),
    Ys = "mouseout".concat(Qs),
    Us = "focusin".concat(Qs),
    Gs = "focusout".concat(Qs),
    Js = "hide".concat(Qs),
    Zs = "hidden".concat(Qs),
    to = "show".concat(Qs),
    eo = "shown".concat(Qs),
    io = "hide",
    no = "show",
    so = "showing",
    oo = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    ro = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
  var ao = /*#__PURE__*/function (_W11) {
    _inherits(ao, _W11);
    var _super17 = _createSuper(ao);
    function ao(t, e) {
      var _this55;
      _classCallCheck(this, ao);
      _this55 = _super17.call(this, t, e), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
      return _this55;
    }
    _createClass(ao, [{
      key: "show",
      value: function show() {
        var _this56 = this;
        N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(function () {
          _this56._element.classList.remove(so), N.trigger(_this56._element, eo), _this56._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;
        this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(function () {
          _this57._element.classList.add(io), _this57._element.classList.remove(so, no), N.trigger(_this57._element, Zs);
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(no), _get(_getPrototypeOf(ao.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains(no);
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this58 = this;
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this58.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }
        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this59 = this;
        N.on(this._element, Xs, function (t) {
          return _this59._onInteraction(t, !0);
        }), N.on(this._element, Ys, function (t) {
          return _this59._onInteraction(t, !1);
        }), N.on(this._element, Us, function (t) {
          return _this59._onInteraction(t, !0);
        }), N.on(this._element, Gs, function (t) {
          return _this59._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "Default",
      get: function get() {
        return ro;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return oo;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ao.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return ao;
  }(W);
  return R(ao), m(ao), {
    Alert: Q,
    Button: Y,
    Carousel: xt,
    Collapse: Bt,
    Dropdown: qi,
    Modal: On,
    Offcanvas: qn,
    Popover: us,
    ScrollSpy: Es,
    Tab: Ks,
    Toast: ao,
    Tooltip: cs
  };
});

/***/ }),

/***/ "./assets/js/burgerMenu.js":
/*!*********************************!*\
  !*** ./assets/js/burgerMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);



var burgerMenu = function burgerMenu() {
  document.addEventListener('DOMContentLoaded', function () {
    var burgerMenu = document.getElementById('burger-menu');
    var overlay = document.getElementById('navbar');
    var links = document.querySelectorAll('.navbar__menu__item--link');
    burgerMenu.addEventListener('click', function (event) {
      event.stopPropagation();
      this.classList.toggle("close");
      overlay.classList.toggle("overlay");
    });
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        burgerMenu.classList.remove("close");
        overlay.classList.remove("overlay");
      });
    });
    document.addEventListener('click', function (event) {
      if (!overlay.contains(event.target) && !burgerMenu.contains(event.target)) {
        burgerMenu.classList.remove("close");
        overlay.classList.remove("overlay");
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);

/***/ }),

/***/ "./assets/js/notifications.js":
/*!************************************!*\
  !*** ./assets/js/notifications.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notifications: () => (/* binding */ notifications)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);



function notifications() {
  console.log('Hello from notifications.js');
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };
  window.addEventListener('DOMContentLoaded', function (event) {
    document.querySelectorAll('.flash-message').forEach(function (flashMessage) {
      var message = flashMessage.textContent;
      if (flashMessage.classList.contains('success')) {
        toastr.success(message);
      } else if (flashMessage.classList.contains('error')) {
        toastr.error(message);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/pages/dashboard.js":
/*!**************************************!*\
  !*** ./assets/js/pages/dashboard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDashboard: () => (/* binding */ initDashboard)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function initDashboard() {
  console.log('Hello from dashboard.js');
  $(document).ready(function () {
    // Form User Info Update
    var changePseudoButton = document.getElementById('changePseudo');
    var changeEmailButton = document.getElementById('changeEmail');
    //const changePasswordButton = document.getElementById('changePassword');

    var toggleInput = function toggleInput(button, inputId) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        var input = document.getElementById(inputId);
        if (input.readOnly) {
          input.readOnly = false;
          this.style.backgroundColor = '#ee727a';
          input.style.backgroundColor = '#fff';
        } else {
          input.readOnly = true;
          this.style.backgroundColor = '';
          input.style.backgroundColor = '#868686';
        }
      });
    };
    toggleInput(changePseudoButton, 'user_update_pseudo');
    toggleInput(changeEmailButton, 'user_update_email');
    // toggleInput(changePasswordButton, 'user_update_password');
    // toggleInput(changePasswordButton, 'confirmPassword');
  });

  // Form User Avatar Update
  document.getElementById('changeAvatar').addEventListener('change', function () {
    var file = this.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('avatarImage').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

/***/ }),

/***/ "./assets/js/pages/gameDetails.js":
/*!****************************************!*\
  !*** ./assets/js/pages/gameDetails.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initGameDetails: () => (/* binding */ initGameDetails)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

function initGameDetails() {
  console.log('Game details page loaded');
  // Loader
  // window.onload = function () {
  //     const loader = document.querySelector('.loader');
  //     loader.className += ' hidden'; // class "loader hidden"
  // };

  // Carousel
  $(document).ready(function () {
    $('.carousel-image').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      variableWidth: true,
      arrows: true,
      // lazyLoad: 'ondemand',
      prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
      nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>'
    });
    $('.carousel-video').slick({
      autoplay: false,
      autoplaySpeed: 3000,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      variableWidth: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
      nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>'
    });

    // Gestion des jeux dans la collection
    if ($('#toggleCollection').data('action') === 'add-to-collection') {
      $('#toggleAchieved, #togglePlatined').hide();
    } else {
      $('#toggleAchieved, #togglePlatined').show();
    }
    $("#toggleCollection").on("click", function () {
      var gameId = $(this).data('game-id');
      var action = $(this).data('action');
      $.ajax({
        url: '/' + action,
        type: 'POST',
        data: {
          'gameId': gameId
        },
        success: function success(data) {
          if (data.success) {
            // Toggle the action data attribute
            var newAction = action === 'add-to-collection' ? 'remove-from-collection' : 'add-to-collection';
            $('#toggleCollection').data('action', newAction);
            // Toggle the button text
            var newText = action === 'add-to-collection' ? 'Collection' : 'Collection';
            // Toggle the button icon
            $('#toggleCollection').text(newText);
            var newIcon = action === 'add-to-collection' ? '<ion-icon name="remove-circle-outline" class="button-icon"></ion-icon>' : '<ion-icon name="add-circle-outline" class="button-icon"></ion-icon>';
            $('#toggleCollection').html(newText + ' ' + newIcon);
            // Toggle the button class
            var newClass = action === 'add-to-collection' ? 'btn-warning' : 'btn-primary';
            $('#toggleCollection').removeClass('btn-primary btn-warning').addClass(newClass);
            // Toggle the achieved and platined buttons
            if (newAction === 'add-to-collection') {
              $('#toggleAchieved, #togglePlatined').hide();
            } else {
              $('#toggleAchieved, #togglePlatined').show();
            }
          }
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          var message;
          switch (errorThrown) {
            case 'Forbidden':
              message = 'Vous devez être connecté pour ajouter un jeu à votre collection.';
              break;
            case 'Internal Server Error':
              message = 'Une erreur interne du serveur s\'est produite.';
              break;
            // Ajoutez d'autres cas au besoin
            default:
              message = 'Une erreur s\'est produite : ' + errorThrown;
          }
          $('#message').html('<div class="alert alert-danger">' + message + '</div>');
        }
      });
    });
    $("#toggleAchieved").on("click", function () {
      var gameId = $(this).data('game-id');
      var action = $(this).data('action');
      var newAction = action === 'achieved' ? 'unachieved' : 'achieved';
      var newText = action === 'achieved' ? 'Terminer' : 'Terminer';
      var newClass = action === 'achieved' ? 'btn-danger' : 'btn-success';
      console.log('Game ID: ' + gameId);
      console.log('Current action: ' + action);
      console.log('New action: ' + newAction);
      console.log('New text: ' + newText);
      console.log('New class: ' + newClass);
      $.ajax({
        url: '/' + action,
        type: 'POST',
        data: {
          'gameId': gameId
        },
        success: function success(data) {
          if (data.success) {
            // Toggle the action data attribute
            $('#toggleAchieved').data('action', newAction);
            // Toggle the button text
            $('#toggleAchieved').text(newText);
            // Toggle the button class
            $('#toggleAchieved').removeClass('btn-success btn-danger').addClass(newClass);
            // Toggle the button icon
            $('#toggleAchieved').text(newText);
            var newIcon = action === 'achieved' ? '<ion-icon name="remove-circle-outline" class="button-icon"></ion-icon>' : '<ion-icon name="add-circle-outline" class="button-icon"></ion-icon>';
            $('#toggleAchieved').html(newText + ' ' + newIcon);
          }
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          $('#message').html('<div class="alert alert-danger">An error occurred: ' + errorThrown + '</div>');
        }
      });
    });
    $("#togglePlatined").on("click", function () {
      var gameId = $(this).data('game-id');
      var action = $(this).data('action');
      var newAction = action === 'platined' ? 'unplatined' : 'platined';
      var newText = action === 'platined' ? 'Platine' : 'Platine';
      var newClass = action === 'platined' ? 'btn-danger' : 'btn-success';
      console.log('Game ID: ' + gameId);
      console.log('Current action: ' + action);
      console.log('New action: ' + newAction);
      console.log('New text: ' + newText);
      console.log('New class: ' + newClass);
      $.ajax({
        url: '/' + action,
        type: 'POST',
        data: {
          'gameId': gameId
        },
        success: function success(data) {
          if (data.success) {
            // Toggle the action data attribute
            $('#togglePlatined').data('action', newAction);
            // Toggle the button text
            $('#togglePlatined').text(newText);
            // Toggle the button class
            $('#togglePlatined').removeClass('btn-success btn-danger').addClass(newClass);
            // Toggle the button icon
            $('#togglePlatined').text(newText);
            var newIcon = action === 'platined' ? '<ion-icon name="remove-circle-outline" class="button-icon"></ion-icon>' : '<ion-icon name="add-circle-outline" class="button-icon"></ion-icon>';
            $('#togglePlatined').html(newText + ' ' + newIcon);
          }
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          $('#message').html('<div class="alert alert-danger">An error occurred: ' + errorThrown + '</div>');
        }
      });
    });

    // Graphique de notation MetaCritic
    function ratingChart(gameRating, x, y) {
      var width = x / 2;
      var height = y / 2;
      var rayon = width / 2;
      var ratingColor;
      if (gameRating >= 75) {
        ratingColor = '#c4e791'; // Vert pour 100% à 75%
      } else if (gameRating >= 50) {
        ratingColor = '#84acfc'; // Bleu pour 74% à 50%
      } else if (gameRating >= 25) {
        ratingColor = '#feca72'; // Jaune pour 49% à 25%
      } else {
        ratingColor = '#ee727a'; // Rouge pour 24% à 0%
      }

      var rating = gameRating;
      var remaining = 100 - gameRating;
      var ratings = [rating, remaining];
      var colors = [ratingColor, 'rgba(0, 0, 0, 0)']; // Couleurs de fond pour chaque section

      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
      var startAngle = -Math.PI / 2;
      for (var i = 0; i < ratings.length; i++) {
        var sliceAngle = 2 * Math.PI * ratings[i] / 100;
        ctx.beginPath();
        ctx.fillStyle = colors[i];
        ctx.moveTo(rayon, rayon);
        ctx.arc(rayon, rayon, rayon, startAngle, startAngle + sliceAngle);
        ctx.lineTo(rayon, rayon);
        ctx.fill();
        startAngle += sliceAngle;
      }

      // Dessiner un cercle blanc au centre pour créer l'effet de donut
      ctx.beginPath();
      ctx.fillStyle = '#3a3a3a'; // Changez ceci à la couleur de votre fond
      // taille du cercle blanc : rayon * 0.5
      ctx.arc(rayon, rayon, rayon * 0.8, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Appel de la fonction dans game/show.html.twig
    var canvas = $('#myCanvas');
    console.log(canvas);
    var rating = canvas.data('rating');
    ratingChart(rating, 300, 300);
  });

  // Afficher / Masquer les jeux
}

/***/ }),

/***/ "./assets/js/pages/searchFriends.js":
/*!******************************************!*\
  !*** ./assets/js/pages/searchFriends.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSearchFriends: () => (/* binding */ initSearchFriends)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);








function initSearchFriends() {
  console.log('Hello from searchFriends.js');

  // Formulaire de recherche dynamique des amis
  document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var pseudo = document.querySelector('input[name="form[pseudo]"]').value;
    fetch('/user/friends', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'form[pseudo]': pseudo
      })
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    }).then(function (html) {
      document.getElementById('friend-search-results').innerHTML = html;
    })["catch"](function (error) {
      console.error('There has been a problem with your fetch operation:', error);
    });
  });
}

/***/ }),

/***/ "./assets/js/pages/searchGames.js":
/*!****************************************!*\
  !*** ./assets/js/pages/searchGames.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSearchGames: () => (/* binding */ initSearchGames)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);






function initSearchGames() {
  console.log('Hello from searchGames.js');

  // Formulaire de recherche dynamique des jeux
  var searchTimeout;
  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var query = document.getElementById('search-input').value;
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(function () {
      fetch('/search?query=' + query).then(function (response) {
        return response.json();
      }).then(function (data) {
        var resultsDiv = document.getElementById('search-results');
        resultsDiv.innerHTML = '';
        var overlayDiv = document.createElement('div');
        overlayDiv.className = 'overlay';
        data.forEach(function (game) {
          var gameLink = document.createElement('a');
          gameLink.href = '/game/' + game.id;
          gameLink.textContent = game.name;
          var gameImage = document.createElement('img');
          gameImage.src = game.cover ? game.cover.url : 'build/images/placeholder.jpg';
          gameImage.alt = game.name;
          var searchGameDiv = document.createElement('div');
          searchGameDiv.className = 'search-game';
          searchGameDiv.appendChild(gameImage);
          searchGameDiv.appendChild(gameLink);
          overlayDiv.appendChild(searchGameDiv);
        });
        resultsDiv.appendChild(overlayDiv);
      });
    }, 1000);
  });
}

/***/ }),

/***/ "./assets/slick/slick.min.js":
/*!***********************************!*\
  !*** ./assets/slick/slick.min.js ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
!function (i) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
      s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
      t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
      t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
      e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
      t,
      o = this;
    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
      e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");
        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");
          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }
          d.appendChild(a);
        }
        o.appendChild(d);
      }
      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = !1,
      d = r.$slider.width(),
      a = window.innerWidth || i(window).width();
    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = i(e.currentTarget);
    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;
      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;
      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;
      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }
      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
      e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
      t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
      e = 0,
      t = 0,
      o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
      t,
      o,
      s,
      n = this,
      r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
      e = this,
      t = 0,
      o = 0,
      s = [];
    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
      t,
      o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
      t = Math.ceil(e.slideCount / e.options.slidesToShow),
      o = e.getNavigableIndexes().filter(function (i) {
        return i >= 0 && i < e.slideCount;
      });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());
    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
          t = i(this).attr("data-lazy"),
          o = i(this).attr("data-srcset"),
          s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
          r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }
    var t,
      o,
      s,
      n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
      o,
      s,
      n,
      r,
      l = this,
      d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
      o,
      s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
      t,
      o,
      s = this,
      n = s.options.responsive || null;
    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";
      for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
      }
      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
      t,
      o = this,
      s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
      t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
      t,
      o,
      s,
      n,
      r = this,
      l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
      for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
      r.options.responsive.push(s[t]);
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
      e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
      t,
      o,
      s,
      n = this;
    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
      t,
      o,
      s = this;
    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
      o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
      s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
      s,
      n,
      r,
      l,
      d = null,
      a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
      e,
      t,
      o,
      s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
      t,
      o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;
        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }
      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;
      case "move":
        e.swipeMove(i);
        break;
      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
      t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
      t,
      o = this,
      s = arguments[0],
      n = Array.prototype.slice.call(arguments, 1),
      r = o.length;
    for (i = 0; i < r; i++) if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    return o;
  };
});

/***/ }),

/***/ "./assets/slick/slick-theme.scss":
/*!***************************************!*\
  !*** ./assets/slick/slick-theme.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/slick/slick.scss":
/*!*********************************!*\
  !*** ./assets/slick/slick.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/bootstrap.min.scss":
/*!******************************************!*\
  !*** ./assets/styles/bootstrap.min.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_toastr_toastr_scss-node_modules_toastr_toastr_js-node_modules_core-js_mo-d7e23d"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUNvQixDQUFDLEVBQUNwQixDQUFDLEVBQUUsRUFBQyxJQUFHLFFBQVEsSUFBQVQsT0FBQSxDQUFTWSxDQUFDLEtBQUUsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQ2MsQ0FBQyxDQUFDakIsQ0FBQyxDQUFDLENBQUM0bkMsS0FBSyxHQUFDLElBQUl2b0MsQ0FBQyxDQUFDNEIsQ0FBQyxDQUFDakIsQ0FBQyxDQUFDLEVBQUNHLENBQUMsQ0FBQyxHQUFDZixDQUFDLEdBQUM2QixDQUFDLENBQUNqQixDQUFDLENBQUMsQ0FBQzRuQyxLQUFLLENBQUN6bkMsQ0FBQyxDQUFDLENBQUM0RCxLQUFLLENBQUM5QyxDQUFDLENBQUNqQixDQUFDLENBQUMsQ0FBQzRuQyxLQUFLLEVBQUMzbkMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUdiLENBQUMsRUFBQyxPQUFPQSxDQUFDO0lBQUMsT0FBTzZCLENBQUM7RUFBQSxDQUFDO0FBQUEsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNBNzJ6Qzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9idXJnZXJNZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL2dhbWVEZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9zZWFyY2hGcmllbmRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9zZWFyY2hHYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2xpY2svc2xpY2subWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zbGljay9zbGljay10aGVtZS5zY3NzP2FlOGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NsaWNrL3NsaWNrLnNjc3M/NGY4NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9ib290c3RyYXAubWluLnNjc3M/ZTAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gSW1wb3J0IEpRdWVyeVxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5cbi8vIEltcG9ydCBUb2FzdHJcbmltcG9ydCB0b2FzdHIgZnJvbSAndG9hc3RyJztcbmltcG9ydCAndG9hc3RyL3RvYXN0ci5zY3NzJztcbndpbmRvdy50b2FzdHIgPSB0b2FzdHI7XG5cblxuLy8gSW1wb3J0IEJvb3RzdHJhcFxuaW1wb3J0ICcuL3N0eWxlcy9ib290c3RyYXAubWluLnNjc3MnO1xuaW1wb3J0ICcuL2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzJztcblxuLy8gSW1wb3J0IFNsaWNrXG5pbXBvcnQgJy4vc2xpY2svc2xpY2suc2Nzcyc7XG5pbXBvcnQgJy4vc2xpY2svc2xpY2stdGhlbWUuc2Nzcyc7XG5pbXBvcnQgJy4vc2xpY2svc2xpY2subWluLmpzJztcblxuLy8gQ1NTXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gQnVyZ2VyTWVudVxuaW1wb3J0ICcuL2pzL2J1cmdlck1lbnUuanMnO1xuYnVyZ2VyTWVudSgpO1xuXG4vLyBJbXBvcnQgSnNcbmltcG9ydCB7IG5vdGlmaWNhdGlvbnMgfSBmcm9tICcuL2pzL25vdGlmaWNhdGlvbnMuanMnO1xuaW1wb3J0IHsgaW5pdEdhbWVEZXRhaWxzIH0gZnJvbSAnLi9qcy9wYWdlcy9nYW1lRGV0YWlscy5qcyc7XG5pbXBvcnQgeyBpbml0U2VhcmNoR2FtZXMgfSBmcm9tICcuL2pzL3BhZ2VzL3NlYXJjaEdhbWVzLmpzJztcbmltcG9ydCB7IGluaXRTZWFyY2hGcmllbmRzIH0gZnJvbSAnLi9qcy9wYWdlcy9zZWFyY2hGcmllbmRzLmpzJztcbmltcG9ydCB7IGluaXREYXNoYm9hcmQgfSBmcm9tICcuL2pzL3BhZ2VzL2Rhc2hib2FyZC5qcyc7XG5pbXBvcnQgYnVyZ2VyTWVudSBmcm9tICcuL2pzL2J1cmdlck1lbnUuanMnO1xuXG4vLyBTdGFydCB0aGUgYXBwbGljYXRpb25cbmNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGFwcC5qcycpO1xuXG4vLyBOb3RpZmljYXRpb25zXG5ub3RpZmljYXRpb25zKCk7XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1kZXRhaWwnKSkge1xuICAgIGluaXRHYW1lRGV0YWlscygpO1xufSBcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaGVyY2hlJykpIHtcbiAgICBpbml0U2VhcmNoR2FtZXMoKTtcbn1cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaGVyY2hlLWFtaXMnKSkge1xuICAgIGluaXRTZWFyY2hGcmllbmRzKCk7XG59XG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZCcpKSB7XG4gICAgaW5pdERhc2hib2FyZCgpO1xufVxuXG5cblxuXG5cblxuIiwiLyohXG4gICogQm9vdHN0cmFwIHY1LjMuMiAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAgKiBDb3B5cmlnaHQgMjAxMS0yMDIzIFRoZSBCb290c3RyYXAgQXV0aG9ycyAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2dyYXBocy9jb250cmlidXRvcnMpXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICovXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmJvb3RzdHJhcD1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7Y29uc3QgdD1uZXcgTWFwLGU9e3NldChlLGksbil7dC5oYXMoZSl8fHQuc2V0KGUsbmV3IE1hcCk7Y29uc3Qgcz10LmdldChlKTtzLmhhcyhpKXx8MD09PXMuc2l6ZT9zLnNldChpLG4pOmNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20ocy5rZXlzKCkpWzBdfS5gKX0sZ2V0OihlLGkpPT50LmhhcyhlKSYmdC5nZXQoZSkuZ2V0KGkpfHxudWxsLHJlbW92ZShlLGkpe2lmKCF0LmhhcyhlKSlyZXR1cm47Y29uc3Qgbj10LmdldChlKTtuLmRlbGV0ZShpKSwwPT09bi5zaXplJiZ0LmRlbGV0ZShlKX19LGk9XCJ0cmFuc2l0aW9uZW5kXCIsbj10PT4odCYmd2luZG93LkNTUyYmd2luZG93LkNTUy5lc2NhcGUmJih0PXQucmVwbGFjZSgvIyhbXlxcc1wiIyddKykvZywoKHQsZSk9PmAjJHtDU1MuZXNjYXBlKGUpfWApKSksdCkscz10PT57dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChpKSl9LG89dD0+ISghdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQpJiYodm9pZCAwIT09dC5qcXVlcnkmJih0PXRbMF0pLHZvaWQgMCE9PXQubm9kZVR5cGUpLHI9dD0+byh0KT90LmpxdWVyeT90WzBdOnQ6XCJzdHJpbmdcIj09dHlwZW9mIHQmJnQubGVuZ3RoPjA/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuKHQpKTpudWxsLGE9dD0+e2lmKCFvKHQpfHwwPT09dC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aClyZXR1cm4hMTtjb25zdCBlPVwidmlzaWJsZVwiPT09Z2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKFwidmlzaWJpbGl0eVwiKSxpPXQuY2xvc2VzdChcImRldGFpbHM6bm90KFtvcGVuXSlcIik7aWYoIWkpcmV0dXJuIGU7aWYoaSE9PXQpe2NvbnN0IGU9dC5jbG9zZXN0KFwic3VtbWFyeVwiKTtpZihlJiZlLnBhcmVudE5vZGUhPT1pKXJldHVybiExO2lmKG51bGw9PT1lKXJldHVybiExfXJldHVybiBlfSxsPXQ9PiF0fHx0Lm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREV8fCEhdC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKXx8KHZvaWQgMCE9PXQuZGlzYWJsZWQ/dC5kaXNhYmxlZDp0Lmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpJiZcImZhbHNlXCIhPT10LmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKSxjPXQ9PntpZighZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdylyZXR1cm4gbnVsbDtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmdldFJvb3ROb2RlKXtjb25zdCBlPXQuZ2V0Um9vdE5vZGUoKTtyZXR1cm4gZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/ZTpudWxsfXJldHVybiB0IGluc3RhbmNlb2YgU2hhZG93Um9vdD90OnQucGFyZW50Tm9kZT9jKHQucGFyZW50Tm9kZSk6bnVsbH0saD0oKT0+e30sZD10PT57dC5vZmZzZXRIZWlnaHR9LHU9KCk9PndpbmRvdy5qUXVlcnkmJiFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZShcImRhdGEtYnMtbm8tanF1ZXJ5XCIpP3dpbmRvdy5qUXVlcnk6bnVsbCxmPVtdLHA9KCk9PlwicnRsXCI9PT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyLG09dD0+e3ZhciBlO2U9KCk9Pntjb25zdCBlPXUoKTtpZihlKXtjb25zdCBpPXQuTkFNRSxuPWUuZm5baV07ZS5mbltpXT10LmpRdWVyeUludGVyZmFjZSxlLmZuW2ldLkNvbnN0cnVjdG9yPXQsZS5mbltpXS5ub0NvbmZsaWN0PSgpPT4oZS5mbltpXT1uLHQualF1ZXJ5SW50ZXJmYWNlKX19LFwibG9hZGluZ1wiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZT8oZi5sZW5ndGh8fGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCgpPT57Zm9yKGNvbnN0IHQgb2YgZil0KCl9KSksZi5wdXNoKGUpKTplKCl9LGc9KHQsZT1bXSxpPXQpPT5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoLi4uZSk6aSxfPSh0LGUsbj0hMCk9PntpZighbilyZXR1cm4gdm9pZCBnKHQpO2NvbnN0IG89KHQ9PntpZighdClyZXR1cm4gMDtsZXR7dHJhbnNpdGlvbkR1cmF0aW9uOmUsdHJhbnNpdGlvbkRlbGF5Oml9PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpO2NvbnN0IG49TnVtYmVyLnBhcnNlRmxvYXQoZSkscz1OdW1iZXIucGFyc2VGbG9hdChpKTtyZXR1cm4gbnx8cz8oZT1lLnNwbGl0KFwiLFwiKVswXSxpPWkuc3BsaXQoXCIsXCIpWzBdLDFlMyooTnVtYmVyLnBhcnNlRmxvYXQoZSkrTnVtYmVyLnBhcnNlRmxvYXQoaSkpKTowfSkoZSkrNTtsZXQgcj0hMTtjb25zdCBhPSh7dGFyZ2V0Om59KT0+e249PT1lJiYocj0hMCxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoaSxhKSxnKHQpKX07ZS5hZGRFdmVudExpc3RlbmVyKGksYSksc2V0VGltZW91dCgoKCk9PntyfHxzKGUpfSksbyl9LGI9KHQsZSxpLG4pPT57Y29uc3Qgcz10Lmxlbmd0aDtsZXQgbz10LmluZGV4T2YoZSk7cmV0dXJuLTE9PT1vPyFpJiZuP3Rbcy0xXTp0WzBdOihvKz1pPzE6LTEsbiYmKG89KG8rcyklcyksdFtNYXRoLm1heCgwLE1hdGgubWluKG8scy0xKSldKX0sdj0vW14uXSooPz1cXC4uKilcXC58LiovLHk9L1xcLi4qLyx3PS86OlxcZCskLyxBPXt9O2xldCBFPTE7Y29uc3QgVD17bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwifSxDPW5ldyBTZXQoW1wiY2xpY2tcIixcImRibGNsaWNrXCIsXCJtb3VzZXVwXCIsXCJtb3VzZWRvd25cIixcImNvbnRleHRtZW51XCIsXCJtb3VzZXdoZWVsXCIsXCJET01Nb3VzZVNjcm9sbFwiLFwibW91c2VvdmVyXCIsXCJtb3VzZW91dFwiLFwibW91c2Vtb3ZlXCIsXCJzZWxlY3RzdGFydFwiLFwic2VsZWN0ZW5kXCIsXCJrZXlkb3duXCIsXCJrZXlwcmVzc1wiLFwia2V5dXBcIixcIm9yaWVudGF0aW9uY2hhbmdlXCIsXCJ0b3VjaHN0YXJ0XCIsXCJ0b3VjaG1vdmVcIixcInRvdWNoZW5kXCIsXCJ0b3VjaGNhbmNlbFwiLFwicG9pbnRlcmRvd25cIixcInBvaW50ZXJtb3ZlXCIsXCJwb2ludGVydXBcIixcInBvaW50ZXJsZWF2ZVwiLFwicG9pbnRlcmNhbmNlbFwiLFwiZ2VzdHVyZXN0YXJ0XCIsXCJnZXN0dXJlY2hhbmdlXCIsXCJnZXN0dXJlZW5kXCIsXCJmb2N1c1wiLFwiYmx1clwiLFwiY2hhbmdlXCIsXCJyZXNldFwiLFwic2VsZWN0XCIsXCJzdWJtaXRcIixcImZvY3VzaW5cIixcImZvY3Vzb3V0XCIsXCJsb2FkXCIsXCJ1bmxvYWRcIixcImJlZm9yZXVubG9hZFwiLFwicmVzaXplXCIsXCJtb3ZlXCIsXCJET01Db250ZW50TG9hZGVkXCIsXCJyZWFkeXN0YXRlY2hhbmdlXCIsXCJlcnJvclwiLFwiYWJvcnRcIixcInNjcm9sbFwiXSk7ZnVuY3Rpb24gTyh0LGUpe3JldHVybiBlJiZgJHtlfTo6JHtFKyt9YHx8dC51aWRFdmVudHx8RSsrfWZ1bmN0aW9uIHgodCl7Y29uc3QgZT1PKHQpO3JldHVybiB0LnVpZEV2ZW50PWUsQVtlXT1BW2VdfHx7fSxBW2VdfWZ1bmN0aW9uIGsodCxlLGk9bnVsbCl7cmV0dXJuIE9iamVjdC52YWx1ZXModCkuZmluZCgodD0+dC5jYWxsYWJsZT09PWUmJnQuZGVsZWdhdGlvblNlbGVjdG9yPT09aSkpfWZ1bmN0aW9uIEwodCxlLGkpe2NvbnN0IG49XCJzdHJpbmdcIj09dHlwZW9mIGUscz1uP2k6ZXx8aTtsZXQgbz1JKHQpO3JldHVybiBDLmhhcyhvKXx8KG89dCksW24scyxvXX1mdW5jdGlvbiBTKHQsZSxpLG4scyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGV8fCF0KXJldHVybjtsZXRbbyxyLGFdPUwoZSxpLG4pO2lmKGUgaW4gVCl7Y29uc3QgdD10PT5mdW5jdGlvbihlKXtpZighZS5yZWxhdGVkVGFyZ2V0fHxlLnJlbGF0ZWRUYXJnZXQhPT1lLmRlbGVnYXRlVGFyZ2V0JiYhZS5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKXJldHVybiB0LmNhbGwodGhpcyxlKX07cj10KHIpfWNvbnN0IGw9eCh0KSxjPWxbYV18fChsW2FdPXt9KSxoPWsoYyxyLG8/aTpudWxsKTtpZihoKXJldHVybiB2b2lkKGgub25lT2ZmPWgub25lT2ZmJiZzKTtjb25zdCBkPU8ocixlLnJlcGxhY2UodixcIlwiKSksdT1vP2Z1bmN0aW9uKHQsZSxpKXtyZXR1cm4gZnVuY3Rpb24gbihzKXtjb25zdCBvPXQucXVlcnlTZWxlY3RvckFsbChlKTtmb3IobGV0e3RhcmdldDpyfT1zO3ImJnIhPT10aGlzO3I9ci5wYXJlbnROb2RlKWZvcihjb25zdCBhIG9mIG8paWYoYT09PXIpcmV0dXJuIFAocyx7ZGVsZWdhdGVUYXJnZXQ6cn0pLG4ub25lT2ZmJiZOLm9mZih0LHMudHlwZSxlLGkpLGkuYXBwbHkocixbc10pfX0odCxpLHIpOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uIGkobil7cmV0dXJuIFAobix7ZGVsZWdhdGVUYXJnZXQ6dH0pLGkub25lT2ZmJiZOLm9mZih0LG4udHlwZSxlKSxlLmFwcGx5KHQsW25dKX19KHQscik7dS5kZWxlZ2F0aW9uU2VsZWN0b3I9bz9pOm51bGwsdS5jYWxsYWJsZT1yLHUub25lT2ZmPXMsdS51aWRFdmVudD1kLGNbZF09dSx0LmFkZEV2ZW50TGlzdGVuZXIoYSx1LG8pfWZ1bmN0aW9uIEQodCxlLGksbixzKXtjb25zdCBvPWsoZVtpXSxuLHMpO28mJih0LnJlbW92ZUV2ZW50TGlzdGVuZXIoaSxvLEJvb2xlYW4ocykpLGRlbGV0ZSBlW2ldW28udWlkRXZlbnRdKX1mdW5jdGlvbiAkKHQsZSxpLG4pe2NvbnN0IHM9ZVtpXXx8e307Zm9yKGNvbnN0W28scl1vZiBPYmplY3QuZW50cmllcyhzKSlvLmluY2x1ZGVzKG4pJiZEKHQsZSxpLHIuY2FsbGFibGUsci5kZWxlZ2F0aW9uU2VsZWN0b3IpfWZ1bmN0aW9uIEkodCl7cmV0dXJuIHQ9dC5yZXBsYWNlKHksXCJcIiksVFt0XXx8dH1jb25zdCBOPXtvbih0LGUsaSxuKXtTKHQsZSxpLG4sITEpfSxvbmUodCxlLGksbil7Uyh0LGUsaSxuLCEwKX0sb2ZmKHQsZSxpLG4pe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlfHwhdClyZXR1cm47Y29uc3RbcyxvLHJdPUwoZSxpLG4pLGE9ciE9PWUsbD14KHQpLGM9bFtyXXx8e30saD1lLnN0YXJ0c1dpdGgoXCIuXCIpO2lmKHZvaWQgMD09PW8pe2lmKGgpZm9yKGNvbnN0IGkgb2YgT2JqZWN0LmtleXMobCkpJCh0LGwsaSxlLnNsaWNlKDEpKTtmb3IoY29uc3RbaSxuXW9mIE9iamVjdC5lbnRyaWVzKGMpKXtjb25zdCBzPWkucmVwbGFjZSh3LFwiXCIpO2EmJiFlLmluY2x1ZGVzKHMpfHxEKHQsbCxyLG4uY2FsbGFibGUsbi5kZWxlZ2F0aW9uU2VsZWN0b3IpfX1lbHNle2lmKCFPYmplY3Qua2V5cyhjKS5sZW5ndGgpcmV0dXJuO0QodCxsLHIsbyxzP2k6bnVsbCl9fSx0cmlnZ2VyKHQsZSxpKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZXx8IXQpcmV0dXJuIG51bGw7Y29uc3Qgbj11KCk7bGV0IHM9bnVsbCxvPSEwLHI9ITAsYT0hMTtlIT09SShlKSYmbiYmKHM9bi5FdmVudChlLGkpLG4odCkudHJpZ2dlcihzKSxvPSFzLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkscj0hcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpLGE9cy5pc0RlZmF1bHRQcmV2ZW50ZWQoKSk7Y29uc3QgbD1QKG5ldyBFdmVudChlLHtidWJibGVzOm8sY2FuY2VsYWJsZTohMH0pLGkpO3JldHVybiBhJiZsLnByZXZlbnREZWZhdWx0KCksciYmdC5kaXNwYXRjaEV2ZW50KGwpLGwuZGVmYXVsdFByZXZlbnRlZCYmcyYmcy5wcmV2ZW50RGVmYXVsdCgpLGx9fTtmdW5jdGlvbiBQKHQsZT17fSl7Zm9yKGNvbnN0W2ksbl1vZiBPYmplY3QuZW50cmllcyhlKSl0cnl7dFtpXT1ufWNhdGNoKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse2NvbmZpZ3VyYWJsZTohMCxnZXQ6KCk9Pm59KX1yZXR1cm4gdH1mdW5jdGlvbiBNKHQpe2lmKFwidHJ1ZVwiPT09dClyZXR1cm4hMDtpZihcImZhbHNlXCI9PT10KXJldHVybiExO2lmKHQ9PT1OdW1iZXIodCkudG9TdHJpbmcoKSlyZXR1cm4gTnVtYmVyKHQpO2lmKFwiXCI9PT10fHxcIm51bGxcIj09PXQpcmV0dXJuIG51bGw7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIHQ7dHJ5e3JldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCh0KSl9Y2F0Y2goZSl7cmV0dXJuIHR9fWZ1bmN0aW9uIGoodCl7cmV0dXJuIHQucmVwbGFjZSgvW0EtWl0vZywodD0+YC0ke3QudG9Mb3dlckNhc2UoKX1gKSl9Y29uc3QgRj17c2V0RGF0YUF0dHJpYnV0ZSh0LGUsaSl7dC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtqKGUpfWAsaSl9LHJlbW92ZURhdGFBdHRyaWJ1dGUodCxlKXt0LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke2ooZSl9YCl9LGdldERhdGFBdHRyaWJ1dGVzKHQpe2lmKCF0KXJldHVybnt9O2NvbnN0IGU9e30saT1PYmplY3Qua2V5cyh0LmRhdGFzZXQpLmZpbHRlcigodD0+dC5zdGFydHNXaXRoKFwiYnNcIikmJiF0LnN0YXJ0c1dpdGgoXCJic0NvbmZpZ1wiKSkpO2Zvcihjb25zdCBuIG9mIGkpe2xldCBpPW4ucmVwbGFjZSgvXmJzLyxcIlwiKTtpPWkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkraS5zbGljZSgxLGkubGVuZ3RoKSxlW2ldPU0odC5kYXRhc2V0W25dKX1yZXR1cm4gZX0sZ2V0RGF0YUF0dHJpYnV0ZToodCxlKT0+TSh0LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke2ooZSl9YCkpfTtjbGFzcyBIe3N0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybnt9fXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm57fX1zdGF0aWMgZ2V0IE5BTUUoKXt0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpfV9nZXRDb25maWcodCl7cmV0dXJuIHQ9dGhpcy5fbWVyZ2VDb25maWdPYmoodCksdD10aGlzLl9jb25maWdBZnRlck1lcmdlKHQpLHRoaXMuX3R5cGVDaGVja0NvbmZpZyh0KSx0fV9jb25maWdBZnRlck1lcmdlKHQpe3JldHVybiB0fV9tZXJnZUNvbmZpZ09iaih0LGUpe2NvbnN0IGk9byhlKT9GLmdldERhdGFBdHRyaWJ1dGUoZSxcImNvbmZpZ1wiKTp7fTtyZXR1cm57Li4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LC4uLlwib2JqZWN0XCI9PXR5cGVvZiBpP2k6e30sLi4ubyhlKT9GLmdldERhdGFBdHRyaWJ1dGVzKGUpOnt9LC4uLlwib2JqZWN0XCI9PXR5cGVvZiB0P3Q6e319fV90eXBlQ2hlY2tDb25maWcodCxlPXRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpe2Zvcihjb25zdFtuLHNdb2YgT2JqZWN0LmVudHJpZXMoZSkpe2NvbnN0IGU9dFtuXSxyPW8oZSk/XCJlbGVtZW50XCI6bnVsbD09KGk9ZSk/YCR7aX1gOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKTtpZighbmV3IFJlZ0V4cChzKS50ZXN0KHIpKXRocm93IG5ldyBUeXBlRXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke259XCIgcHJvdmlkZWQgdHlwZSBcIiR7cn1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7c31cIi5gKX12YXIgaX19Y2xhc3MgVyBleHRlbmRzIEh7Y29uc3RydWN0b3IodCxpKXtzdXBlcigpLCh0PXIodCkpJiYodGhpcy5fZWxlbWVudD10LHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcoaSksZS5zZXQodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLHRoaXMpKX1kaXNwb3NlKCl7ZS5yZW1vdmUodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKSxOLm9mZih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtmb3IoY29uc3QgdCBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSl0aGlzW3RdPW51bGx9X3F1ZXVlQ2FsbGJhY2sodCxlLGk9ITApe18odCxlLGkpfV9nZXRDb25maWcodCl7cmV0dXJuIHQ9dGhpcy5fbWVyZ2VDb25maWdPYmoodCx0aGlzLl9lbGVtZW50KSx0PXRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UodCksdGhpcy5fdHlwZUNoZWNrQ29uZmlnKHQpLHR9c3RhdGljIGdldEluc3RhbmNlKHQpe3JldHVybiBlLmdldChyKHQpLHRoaXMuREFUQV9LRVkpfXN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKHQsZT17fSl7cmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UodCl8fG5ldyB0aGlzKHQsXCJvYmplY3RcIj09dHlwZW9mIGU/ZTpudWxsKX1zdGF0aWMgZ2V0IFZFUlNJT04oKXtyZXR1cm5cIjUuMy4yXCJ9c3RhdGljIGdldCBEQVRBX0tFWSgpe3JldHVybmBicy4ke3RoaXMuTkFNRX1gfXN0YXRpYyBnZXQgRVZFTlRfS0VZKCl7cmV0dXJuYC4ke3RoaXMuREFUQV9LRVl9YH1zdGF0aWMgZXZlbnROYW1lKHQpe3JldHVybmAke3R9JHt0aGlzLkVWRU5UX0tFWX1gfX1jb25zdCBCPXQ9PntsZXQgZT10LmdldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIpO2lmKCFlfHxcIiNcIj09PWUpe2xldCBpPXQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtpZighaXx8IWkuaW5jbHVkZXMoXCIjXCIpJiYhaS5zdGFydHNXaXRoKFwiLlwiKSlyZXR1cm4gbnVsbDtpLmluY2x1ZGVzKFwiI1wiKSYmIWkuc3RhcnRzV2l0aChcIiNcIikmJihpPWAjJHtpLnNwbGl0KFwiI1wiKVsxXX1gKSxlPWkmJlwiI1wiIT09aT9uKGkudHJpbSgpKTpudWxsfXJldHVybiBlfSx6PXtmaW5kOih0LGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KT0+W10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlLHQpKSxmaW5kT25lOih0LGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KT0+RWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGUsdCksY2hpbGRyZW46KHQsZSk9PltdLmNvbmNhdCguLi50LmNoaWxkcmVuKS5maWx0ZXIoKHQ9PnQubWF0Y2hlcyhlKSkpLHBhcmVudHModCxlKXtjb25zdCBpPVtdO2xldCBuPXQucGFyZW50Tm9kZS5jbG9zZXN0KGUpO2Zvcig7bjspaS5wdXNoKG4pLG49bi5wYXJlbnROb2RlLmNsb3Nlc3QoZSk7cmV0dXJuIGl9LHByZXYodCxlKXtsZXQgaT10LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7Zm9yKDtpOyl7aWYoaS5tYXRjaGVzKGUpKXJldHVybltpXTtpPWkucHJldmlvdXNFbGVtZW50U2libGluZ31yZXR1cm5bXX0sbmV4dCh0LGUpe2xldCBpPXQubmV4dEVsZW1lbnRTaWJsaW5nO2Zvcig7aTspe2lmKGkubWF0Y2hlcyhlKSlyZXR1cm5baV07aT1pLm5leHRFbGVtZW50U2libGluZ31yZXR1cm5bXX0sZm9jdXNhYmxlQ2hpbGRyZW4odCl7Y29uc3QgZT1bXCJhXCIsXCJidXR0b25cIixcImlucHV0XCIsXCJ0ZXh0YXJlYVwiLFwic2VsZWN0XCIsXCJkZXRhaWxzXCIsXCJbdGFiaW5kZXhdXCIsJ1tjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJ10ubWFwKCh0PT5gJHt0fTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pYCkpLmpvaW4oXCIsXCIpO3JldHVybiB0aGlzLmZpbmQoZSx0KS5maWx0ZXIoKHQ9PiFsKHQpJiZhKHQpKSl9LGdldFNlbGVjdG9yRnJvbUVsZW1lbnQodCl7Y29uc3QgZT1CKHQpO3JldHVybiBlJiZ6LmZpbmRPbmUoZSk/ZTpudWxsfSxnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHQpe2NvbnN0IGU9Qih0KTtyZXR1cm4gZT96LmZpbmRPbmUoZSk6bnVsbH0sZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3Rvcih0KXtjb25zdCBlPUIodCk7cmV0dXJuIGU/ei5maW5kKGUpOltdfX0sUj0odCxlPVwiaGlkZVwiKT0+e2NvbnN0IGk9YGNsaWNrLmRpc21pc3Mke3QuRVZFTlRfS0VZfWAsbj10Lk5BTUU7Ti5vbihkb2N1bWVudCxpLGBbZGF0YS1icy1kaXNtaXNzPVwiJHtufVwiXWAsKGZ1bmN0aW9uKGkpe2lmKFtcIkFcIixcIkFSRUFcIl0uaW5jbHVkZXModGhpcy50YWdOYW1lKSYmaS5wcmV2ZW50RGVmYXVsdCgpLGwodGhpcykpcmV0dXJuO2NvbnN0IHM9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpfHx0aGlzLmNsb3Nlc3QoYC4ke259YCk7dC5nZXRPckNyZWF0ZUluc3RhbmNlKHMpW2VdKCl9KSl9LHE9XCIuYnMuYWxlcnRcIixWPWBjbG9zZSR7cX1gLEs9YGNsb3NlZCR7cX1gO2NsYXNzIFEgZXh0ZW5kcyBXe3N0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwiYWxlcnRcIn1jbG9zZSgpe2lmKE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LFYpLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7Y29uc3QgdD10aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZhZGVcIik7dGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PnRoaXMuX2Rlc3Ryb3lFbGVtZW50KCkpLHRoaXMuX2VsZW1lbnQsdCl9X2Rlc3Ryb3lFbGVtZW50KCl7dGhpcy5fZWxlbWVudC5yZW1vdmUoKSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxLKSx0aGlzLmRpc3Bvc2UoKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1RLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aChcIl9cIil8fFwiY29uc3RydWN0b3JcIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSh0aGlzKX19KSl9fVIoUSxcImNsb3NlXCIpLG0oUSk7Y29uc3QgWD0nW2RhdGEtYnMtdG9nZ2xlPVwiYnV0dG9uXCJdJztjbGFzcyBZIGV4dGVuZHMgV3tzdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cImJ1dHRvblwifXRvZ2dsZSgpe3RoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1wcmVzc2VkXCIsdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1ZLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XCJ0b2dnbGVcIj09PXQmJmVbdF0oKX0pKX19Ti5vbihkb2N1bWVudCxcImNsaWNrLmJzLmJ1dHRvbi5kYXRhLWFwaVwiLFgsKHQ9Pnt0LnByZXZlbnREZWZhdWx0KCk7Y29uc3QgZT10LnRhcmdldC5jbG9zZXN0KFgpO1kuZ2V0T3JDcmVhdGVJbnN0YW5jZShlKS50b2dnbGUoKX0pKSxtKFkpO2NvbnN0IFU9XCIuYnMuc3dpcGVcIixHPWB0b3VjaHN0YXJ0JHtVfWAsSj1gdG91Y2htb3ZlJHtVfWAsWj1gdG91Y2hlbmQke1V9YCx0dD1gcG9pbnRlcmRvd24ke1V9YCxldD1gcG9pbnRlcnVwJHtVfWAsaXQ9e2VuZENhbGxiYWNrOm51bGwsbGVmdENhbGxiYWNrOm51bGwscmlnaHRDYWxsYmFjazpudWxsfSxudD17ZW5kQ2FsbGJhY2s6XCIoZnVuY3Rpb258bnVsbClcIixsZWZ0Q2FsbGJhY2s6XCIoZnVuY3Rpb258bnVsbClcIixyaWdodENhbGxiYWNrOlwiKGZ1bmN0aW9ufG51bGwpXCJ9O2NsYXNzIHN0IGV4dGVuZHMgSHtjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKCksdGhpcy5fZWxlbWVudD10LHQmJnN0LmlzU3VwcG9ydGVkKCkmJih0aGlzLl9jb25maWc9dGhpcy5fZ2V0Q29uZmlnKGUpLHRoaXMuX2RlbHRhWD0wLHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzPUJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudCksdGhpcy5faW5pdEV2ZW50cygpKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gaXR9c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBudH1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cInN3aXBlXCJ9ZGlzcG9zZSgpe04ub2ZmKHRoaXMuX2VsZW1lbnQsVSl9X3N0YXJ0KHQpe3RoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzP3RoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2godCkmJih0aGlzLl9kZWx0YVg9dC5jbGllbnRYKTp0aGlzLl9kZWx0YVg9dC50b3VjaGVzWzBdLmNsaWVudFh9X2VuZCh0KXt0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKHQpJiYodGhpcy5fZGVsdGFYPXQuY2xpZW50WC10aGlzLl9kZWx0YVgpLHRoaXMuX2hhbmRsZVN3aXBlKCksZyh0aGlzLl9jb25maWcuZW5kQ2FsbGJhY2spfV9tb3ZlKHQpe3RoaXMuX2RlbHRhWD10LnRvdWNoZXMmJnQudG91Y2hlcy5sZW5ndGg+MT8wOnQudG91Y2hlc1swXS5jbGllbnRYLXRoaXMuX2RlbHRhWH1faGFuZGxlU3dpcGUoKXtjb25zdCB0PU1hdGguYWJzKHRoaXMuX2RlbHRhWCk7aWYodDw9NDApcmV0dXJuO2NvbnN0IGU9dC90aGlzLl9kZWx0YVg7dGhpcy5fZGVsdGFYPTAsZSYmZyhlPjA/dGhpcy5fY29uZmlnLnJpZ2h0Q2FsbGJhY2s6dGhpcy5fY29uZmlnLmxlZnRDYWxsYmFjayl9X2luaXRFdmVudHMoKXt0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cz8oTi5vbih0aGlzLl9lbGVtZW50LHR0LCh0PT50aGlzLl9zdGFydCh0KSkpLE4ub24odGhpcy5fZWxlbWVudCxldCwodD0+dGhpcy5fZW5kKHQpKSksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9pbnRlci1ldmVudFwiKSk6KE4ub24odGhpcy5fZWxlbWVudCxHLCh0PT50aGlzLl9zdGFydCh0KSkpLE4ub24odGhpcy5fZWxlbWVudCxKLCh0PT50aGlzLl9tb3ZlKHQpKSksTi5vbih0aGlzLl9lbGVtZW50LFosKHQ9PnRoaXMuX2VuZCh0KSkpKX1fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaCh0KXtyZXR1cm4gdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMmJihcInBlblwiPT09dC5wb2ludGVyVHlwZXx8XCJ0b3VjaFwiPT09dC5wb2ludGVyVHlwZSl9c3RhdGljIGlzU3VwcG9ydGVkKCl7cmV0dXJuXCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudHx8bmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzPjB9fWNvbnN0IG90PVwiLmJzLmNhcm91c2VsXCIscnQ9XCIuZGF0YS1hcGlcIixhdD1cIm5leHRcIixsdD1cInByZXZcIixjdD1cImxlZnRcIixodD1cInJpZ2h0XCIsZHQ9YHNsaWRlJHtvdH1gLHV0PWBzbGlkJHtvdH1gLGZ0PWBrZXlkb3duJHtvdH1gLHB0PWBtb3VzZWVudGVyJHtvdH1gLG10PWBtb3VzZWxlYXZlJHtvdH1gLGd0PWBkcmFnc3RhcnQke290fWAsX3Q9YGxvYWQke290fSR7cnR9YCxidD1gY2xpY2ske290fSR7cnR9YCx2dD1cImNhcm91c2VsXCIseXQ9XCJhY3RpdmVcIix3dD1cIi5hY3RpdmVcIixBdD1cIi5jYXJvdXNlbC1pdGVtXCIsRXQ9d3QrQXQsVHQ9e0Fycm93TGVmdDpodCxBcnJvd1JpZ2h0OmN0fSxDdD17aW50ZXJ2YWw6NWUzLGtleWJvYXJkOiEwLHBhdXNlOlwiaG92ZXJcIixyaWRlOiExLHRvdWNoOiEwLHdyYXA6ITB9LE90PXtpbnRlcnZhbDpcIihudW1iZXJ8Ym9vbGVhbilcIixrZXlib2FyZDpcImJvb2xlYW5cIixwYXVzZTpcIihzdHJpbmd8Ym9vbGVhbilcIixyaWRlOlwiKGJvb2xlYW58c3RyaW5nKVwiLHRvdWNoOlwiYm9vbGVhblwiLHdyYXA6XCJib29sZWFuXCJ9O2NsYXNzIHh0IGV4dGVuZHMgV3tjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSksdGhpcy5faW50ZXJ2YWw9bnVsbCx0aGlzLl9hY3RpdmVFbGVtZW50PW51bGwsdGhpcy5faXNTbGlkaW5nPSExLHRoaXMudG91Y2hUaW1lb3V0PW51bGwsdGhpcy5fc3dpcGVIZWxwZXI9bnVsbCx0aGlzLl9pbmRpY2F0b3JzRWxlbWVudD16LmZpbmRPbmUoXCIuY2Fyb3VzZWwtaW5kaWNhdG9yc1wiLHRoaXMuX2VsZW1lbnQpLHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCksdGhpcy5fY29uZmlnLnJpZGU9PT12dCYmdGhpcy5jeWNsZSgpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBDdH1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIE90fXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwiY2Fyb3VzZWxcIn1uZXh0KCl7dGhpcy5fc2xpZGUoYXQpfW5leHRXaGVuVmlzaWJsZSgpeyFkb2N1bWVudC5oaWRkZW4mJmEodGhpcy5fZWxlbWVudCkmJnRoaXMubmV4dCgpfXByZXYoKXt0aGlzLl9zbGlkZShsdCl9cGF1c2UoKXt0aGlzLl9pc1NsaWRpbmcmJnModGhpcy5fZWxlbWVudCksdGhpcy5fY2xlYXJJbnRlcnZhbCgpfWN5Y2xlKCl7dGhpcy5fY2xlYXJJbnRlcnZhbCgpLHRoaXMuX3VwZGF0ZUludGVydmFsKCksdGhpcy5faW50ZXJ2YWw9c2V0SW50ZXJ2YWwoKCgpPT50aGlzLm5leHRXaGVuVmlzaWJsZSgpKSx0aGlzLl9jb25maWcuaW50ZXJ2YWwpfV9tYXliZUVuYWJsZUN5Y2xlKCl7dGhpcy5fY29uZmlnLnJpZGUmJih0aGlzLl9pc1NsaWRpbmc/Ti5vbmUodGhpcy5fZWxlbWVudCx1dCwoKCk9PnRoaXMuY3ljbGUoKSkpOnRoaXMuY3ljbGUoKSl9dG8odCl7Y29uc3QgZT10aGlzLl9nZXRJdGVtcygpO2lmKHQ+ZS5sZW5ndGgtMXx8dDwwKXJldHVybjtpZih0aGlzLl9pc1NsaWRpbmcpcmV0dXJuIHZvaWQgTi5vbmUodGhpcy5fZWxlbWVudCx1dCwoKCk9PnRoaXMudG8odCkpKTtjb25zdCBpPXRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9nZXRBY3RpdmUoKSk7aWYoaT09PXQpcmV0dXJuO2NvbnN0IG49dD5pP2F0Omx0O3RoaXMuX3NsaWRlKG4sZVt0XSl9ZGlzcG9zZSgpe3RoaXMuX3N3aXBlSGVscGVyJiZ0aGlzLl9zd2lwZUhlbHBlci5kaXNwb3NlKCksc3VwZXIuZGlzcG9zZSgpfV9jb25maWdBZnRlck1lcmdlKHQpe3JldHVybiB0LmRlZmF1bHRJbnRlcnZhbD10LmludGVydmFsLHR9X2FkZEV2ZW50TGlzdGVuZXJzKCl7dGhpcy5fY29uZmlnLmtleWJvYXJkJiZOLm9uKHRoaXMuX2VsZW1lbnQsZnQsKHQ9PnRoaXMuX2tleWRvd24odCkpKSxcImhvdmVyXCI9PT10aGlzLl9jb25maWcucGF1c2UmJihOLm9uKHRoaXMuX2VsZW1lbnQscHQsKCgpPT50aGlzLnBhdXNlKCkpKSxOLm9uKHRoaXMuX2VsZW1lbnQsbXQsKCgpPT50aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpKSksdGhpcy5fY29uZmlnLnRvdWNoJiZzdC5pc1N1cHBvcnRlZCgpJiZ0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCl9X2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKXtmb3IoY29uc3QgdCBvZiB6LmZpbmQoXCIuY2Fyb3VzZWwtaXRlbSBpbWdcIix0aGlzLl9lbGVtZW50KSlOLm9uKHQsZ3QsKHQ9PnQucHJldmVudERlZmF1bHQoKSkpO2NvbnN0IHQ9e2xlZnRDYWxsYmFjazooKT0+dGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihjdCkpLHJpZ2h0Q2FsbGJhY2s6KCk9PnRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoaHQpKSxlbmRDYWxsYmFjazooKT0+e1wiaG92ZXJcIj09PXRoaXMuX2NvbmZpZy5wYXVzZSYmKHRoaXMucGF1c2UoKSx0aGlzLnRvdWNoVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KSx0aGlzLnRvdWNoVGltZW91dD1zZXRUaW1lb3V0KCgoKT0+dGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKSw1MDArdGhpcy5fY29uZmlnLmludGVydmFsKSl9fTt0aGlzLl9zd2lwZUhlbHBlcj1uZXcgc3QodGhpcy5fZWxlbWVudCx0KX1fa2V5ZG93bih0KXtpZigvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KHQudGFyZ2V0LnRhZ05hbWUpKXJldHVybjtjb25zdCBlPVR0W3Qua2V5XTtlJiYodC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZSkpKX1fZ2V0SXRlbUluZGV4KHQpe3JldHVybiB0aGlzLl9nZXRJdGVtcygpLmluZGV4T2YodCl9X3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQodCl7aWYoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KXJldHVybjtjb25zdCBlPXouZmluZE9uZSh3dCx0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7ZS5jbGFzc0xpc3QucmVtb3ZlKHl0KSxlLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtjb25zdCBpPXouZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke3R9XCJdYCx0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7aSYmKGkuY2xhc3NMaXN0LmFkZCh5dCksaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIixcInRydWVcIikpfV91cGRhdGVJbnRlcnZhbCgpe2NvbnN0IHQ9dGhpcy5fYWN0aXZlRWxlbWVudHx8dGhpcy5fZ2V0QWN0aXZlKCk7aWYoIXQpcmV0dXJuO2NvbnN0IGU9TnVtYmVyLnBhcnNlSW50KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1pbnRlcnZhbFwiKSwxMCk7dGhpcy5fY29uZmlnLmludGVydmFsPWV8fHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWx9X3NsaWRlKHQsZT1udWxsKXtpZih0aGlzLl9pc1NsaWRpbmcpcmV0dXJuO2NvbnN0IGk9dGhpcy5fZ2V0QWN0aXZlKCksbj10PT09YXQscz1lfHxiKHRoaXMuX2dldEl0ZW1zKCksaSxuLHRoaXMuX2NvbmZpZy53cmFwKTtpZihzPT09aSlyZXR1cm47Y29uc3Qgbz10aGlzLl9nZXRJdGVtSW5kZXgocykscj1lPT5OLnRyaWdnZXIodGhpcy5fZWxlbWVudCxlLHtyZWxhdGVkVGFyZ2V0OnMsZGlyZWN0aW9uOnRoaXMuX29yZGVyVG9EaXJlY3Rpb24odCksZnJvbTp0aGlzLl9nZXRJdGVtSW5kZXgoaSksdG86b30pO2lmKHIoZHQpLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO2lmKCFpfHwhcylyZXR1cm47Y29uc3QgYT1Cb29sZWFuKHRoaXMuX2ludGVydmFsKTt0aGlzLnBhdXNlKCksdGhpcy5faXNTbGlkaW5nPSEwLHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobyksdGhpcy5fYWN0aXZlRWxlbWVudD1zO2NvbnN0IGw9bj9cImNhcm91c2VsLWl0ZW0tc3RhcnRcIjpcImNhcm91c2VsLWl0ZW0tZW5kXCIsYz1uP1wiY2Fyb3VzZWwtaXRlbS1uZXh0XCI6XCJjYXJvdXNlbC1pdGVtLXByZXZcIjtzLmNsYXNzTGlzdC5hZGQoYyksZChzKSxpLmNsYXNzTGlzdC5hZGQobCkscy5jbGFzc0xpc3QuYWRkKGwpLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57cy5jbGFzc0xpc3QucmVtb3ZlKGwsYykscy5jbGFzc0xpc3QuYWRkKHl0KSxpLmNsYXNzTGlzdC5yZW1vdmUoeXQsYyxsKSx0aGlzLl9pc1NsaWRpbmc9ITEscih1dCl9KSxpLHRoaXMuX2lzQW5pbWF0ZWQoKSksYSYmdGhpcy5jeWNsZSgpfV9pc0FuaW1hdGVkKCl7cmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xpZGVcIil9X2dldEFjdGl2ZSgpe3JldHVybiB6LmZpbmRPbmUoRXQsdGhpcy5fZWxlbWVudCl9X2dldEl0ZW1zKCl7cmV0dXJuIHouZmluZChBdCx0aGlzLl9lbGVtZW50KX1fY2xlYXJJbnRlcnZhbCgpe3RoaXMuX2ludGVydmFsJiYoY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCksdGhpcy5faW50ZXJ2YWw9bnVsbCl9X2RpcmVjdGlvblRvT3JkZXIodCl7cmV0dXJuIHAoKT90PT09Y3Q/bHQ6YXQ6dD09PWN0P2F0Omx0fV9vcmRlclRvRGlyZWN0aW9uKHQpe3JldHVybiBwKCk/dD09PWx0P2N0Omh0OnQ9PT1sdD9odDpjdH1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT14dC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJudW1iZXJcIiE9dHlwZW9mIHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdfHx0LnN0YXJ0c1dpdGgoXCJfXCIpfHxcImNvbnN0cnVjdG9yXCI9PT10KXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0oKX19ZWxzZSBlLnRvKHQpfSkpfX1OLm9uKGRvY3VtZW50LGJ0LFwiW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b11cIiwoZnVuY3Rpb24odCl7Y29uc3QgZT16LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7aWYoIWV8fCFlLmNsYXNzTGlzdC5jb250YWlucyh2dCkpcmV0dXJuO3QucHJldmVudERlZmF1bHQoKTtjb25zdCBpPXh0LmdldE9yQ3JlYXRlSW5zdGFuY2UoZSksbj10aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtYnMtc2xpZGUtdG9cIik7cmV0dXJuIG4/KGkudG8obiksdm9pZCBpLl9tYXliZUVuYWJsZUN5Y2xlKCkpOlwibmV4dFwiPT09Ri5nZXREYXRhQXR0cmlidXRlKHRoaXMsXCJzbGlkZVwiKT8oaS5uZXh0KCksdm9pZCBpLl9tYXliZUVuYWJsZUN5Y2xlKCkpOihpLnByZXYoKSx2b2lkIGkuX21heWJlRW5hYmxlQ3ljbGUoKSl9KSksTi5vbih3aW5kb3csX3QsKCgpPT57Y29uc3QgdD16LmZpbmQoJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXScpO2Zvcihjb25zdCBlIG9mIHQpeHQuZ2V0T3JDcmVhdGVJbnN0YW5jZShlKX0pKSxtKHh0KTtjb25zdCBrdD1cIi5icy5jb2xsYXBzZVwiLEx0PWBzaG93JHtrdH1gLFN0PWBzaG93biR7a3R9YCxEdD1gaGlkZSR7a3R9YCwkdD1gaGlkZGVuJHtrdH1gLEl0PWBjbGljayR7a3R9LmRhdGEtYXBpYCxOdD1cInNob3dcIixQdD1cImNvbGxhcHNlXCIsTXQ9XCJjb2xsYXBzaW5nXCIsanQ9YDpzY29wZSAuJHtQdH0gLiR7UHR9YCxGdD0nW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nLEh0PXtwYXJlbnQ6bnVsbCx0b2dnbGU6ITB9LFd0PXtwYXJlbnQ6XCIobnVsbHxlbGVtZW50KVwiLHRvZ2dsZTpcImJvb2xlYW5cIn07Y2xhc3MgQnQgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITEsdGhpcy5fdHJpZ2dlckFycmF5PVtdO2NvbnN0IGk9ei5maW5kKEZ0KTtmb3IoY29uc3QgdCBvZiBpKXtjb25zdCBlPXouZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0KSxpPXouZmluZChlKS5maWx0ZXIoKHQ9PnQ9PT10aGlzLl9lbGVtZW50KSk7bnVsbCE9PWUmJmkubGVuZ3RoJiZ0aGlzLl90cmlnZ2VyQXJyYXkucHVzaCh0KX10aGlzLl9pbml0aWFsaXplQ2hpbGRyZW4oKSx0aGlzLl9jb25maWcucGFyZW50fHx0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LHRoaXMuX2lzU2hvd24oKSksdGhpcy5fY29uZmlnLnRvZ2dsZSYmdGhpcy50b2dnbGUoKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gSHR9c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBXdH1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cImNvbGxhcHNlXCJ9dG9nZ2xlKCl7dGhpcy5faXNTaG93bigpP3RoaXMuaGlkZSgpOnRoaXMuc2hvdygpfXNob3coKXtpZih0aGlzLl9pc1RyYW5zaXRpb25pbmd8fHRoaXMuX2lzU2hvd24oKSlyZXR1cm47bGV0IHQ9W107aWYodGhpcy5fY29uZmlnLnBhcmVudCYmKHQ9dGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFwiLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nXCIpLmZpbHRlcigodD0+dCE9PXRoaXMuX2VsZW1lbnQpKS5tYXAoKHQ9PkJ0LmdldE9yQ3JlYXRlSW5zdGFuY2UodCx7dG9nZ2xlOiExfSkpKSksdC5sZW5ndGgmJnRbMF0uX2lzVHJhbnNpdGlvbmluZylyZXR1cm47aWYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsTHQpLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO2Zvcihjb25zdCBlIG9mIHQpZS5oaWRlKCk7Y29uc3QgZT10aGlzLl9nZXREaW1lbnNpb24oKTt0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoUHQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChNdCksdGhpcy5fZWxlbWVudC5zdHlsZVtlXT0wLHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksITApLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMDtjb25zdCBpPWBzY3JvbGwke2VbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpfWA7dGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITEsdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKE10KSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoUHQsTnQpLHRoaXMuX2VsZW1lbnQuc3R5bGVbZV09XCJcIixOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxTdCl9KSx0aGlzLl9lbGVtZW50LCEwKSx0aGlzLl9lbGVtZW50LnN0eWxlW2VdPWAke3RoaXMuX2VsZW1lbnRbaV19cHhgfWhpZGUoKXtpZih0aGlzLl9pc1RyYW5zaXRpb25pbmd8fCF0aGlzLl9pc1Nob3duKCkpcmV0dXJuO2lmKE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LER0KS5kZWZhdWx0UHJldmVudGVkKXJldHVybjtjb25zdCB0PXRoaXMuX2dldERpbWVuc2lvbigpO3RoaXMuX2VsZW1lbnQuc3R5bGVbdF09YCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVt0XX1weGAsZCh0aGlzLl9lbGVtZW50KSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoTXQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShQdCxOdCk7Zm9yKGNvbnN0IHQgb2YgdGhpcy5fdHJpZ2dlckFycmF5KXtjb25zdCBlPXouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KTtlJiYhdGhpcy5faXNTaG93bihlKSYmdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0XSwhMSl9dGhpcy5faXNUcmFuc2l0aW9uaW5nPSEwLHRoaXMuX2VsZW1lbnQuc3R5bGVbdF09XCJcIix0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoTXQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChQdCksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsJHQpfSksdGhpcy5fZWxlbWVudCwhMCl9X2lzU2hvd24odD10aGlzLl9lbGVtZW50KXtyZXR1cm4gdC5jbGFzc0xpc3QuY29udGFpbnMoTnQpfV9jb25maWdBZnRlck1lcmdlKHQpe3JldHVybiB0LnRvZ2dsZT1Cb29sZWFuKHQudG9nZ2xlKSx0LnBhcmVudD1yKHQucGFyZW50KSx0fV9nZXREaW1lbnNpb24oKXtyZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb2xsYXBzZS1ob3Jpem9udGFsXCIpP1wid2lkdGhcIjpcImhlaWdodFwifV9pbml0aWFsaXplQ2hpbGRyZW4oKXtpZighdGhpcy5fY29uZmlnLnBhcmVudClyZXR1cm47Y29uc3QgdD10aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oRnQpO2Zvcihjb25zdCBlIG9mIHQpe2NvbnN0IHQ9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGUpO3QmJnRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbZV0sdGhpcy5faXNTaG93bih0KSl9fV9nZXRGaXJzdExldmVsQ2hpbGRyZW4odCl7Y29uc3QgZT16LmZpbmQoanQsdGhpcy5fY29uZmlnLnBhcmVudCk7cmV0dXJuIHouZmluZCh0LHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcigodD0+IWUuaW5jbHVkZXModCkpKX1fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHQsZSl7aWYodC5sZW5ndGgpZm9yKGNvbnN0IGkgb2YgdClpLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIiwhZSksaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsZSl9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtjb25zdCBlPXt9O3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0JiYvc2hvd3xoaWRlLy50ZXN0KHQpJiYoZS50b2dnbGU9ITEpLHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBpPUJ0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyxlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09aVt0XSl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtpW3RdKCl9fSkpfX1OLm9uKGRvY3VtZW50LEl0LEZ0LChmdW5jdGlvbih0KXsoXCJBXCI9PT10LnRhcmdldC50YWdOYW1lfHx0LmRlbGVnYXRlVGFyZ2V0JiZcIkFcIj09PXQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSkmJnQucHJldmVudERlZmF1bHQoKTtmb3IoY29uc3QgdCBvZiB6LmdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IodGhpcykpQnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0LHt0b2dnbGU6ITF9KS50b2dnbGUoKX0pKSxtKEJ0KTt2YXIgenQ9XCJ0b3BcIixSdD1cImJvdHRvbVwiLHF0PVwicmlnaHRcIixWdD1cImxlZnRcIixLdD1cImF1dG9cIixRdD1benQsUnQscXQsVnRdLFh0PVwic3RhcnRcIixZdD1cImVuZFwiLFV0PVwiY2xpcHBpbmdQYXJlbnRzXCIsR3Q9XCJ2aWV3cG9ydFwiLEp0PVwicG9wcGVyXCIsWnQ9XCJyZWZlcmVuY2VcIix0ZT1RdC5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuY29uY2F0KFtlK1wiLVwiK1h0LGUrXCItXCIrWXRdKX0pLFtdKSxlZT1bXS5jb25jYXQoUXQsW0t0XSkucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiB0LmNvbmNhdChbZSxlK1wiLVwiK1h0LGUrXCItXCIrWXRdKX0pLFtdKSxpZT1cImJlZm9yZVJlYWRcIixuZT1cInJlYWRcIixzZT1cImFmdGVyUmVhZFwiLG9lPVwiYmVmb3JlTWFpblwiLHJlPVwibWFpblwiLGFlPVwiYWZ0ZXJNYWluXCIsbGU9XCJiZWZvcmVXcml0ZVwiLGNlPVwid3JpdGVcIixoZT1cImFmdGVyV3JpdGVcIixkZT1baWUsbmUsc2Usb2UscmUsYWUsbGUsY2UsaGVdO2Z1bmN0aW9uIHVlKHQpe3JldHVybiB0Pyh0Lm5vZGVOYW1lfHxcIlwiKS50b0xvd2VyQ2FzZSgpOm51bGx9ZnVuY3Rpb24gZmUodCl7aWYobnVsbD09dClyZXR1cm4gd2luZG93O2lmKFwiW29iamVjdCBXaW5kb3ddXCIhPT10LnRvU3RyaW5nKCkpe3ZhciBlPXQub3duZXJEb2N1bWVudDtyZXR1cm4gZSYmZS5kZWZhdWx0Vmlld3x8d2luZG93fXJldHVybiB0fWZ1bmN0aW9uIHBlKHQpe3JldHVybiB0IGluc3RhbmNlb2YgZmUodCkuRWxlbWVudHx8dCBpbnN0YW5jZW9mIEVsZW1lbnR9ZnVuY3Rpb24gbWUodCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBmZSh0KS5IVE1MRWxlbWVudHx8dCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50fWZ1bmN0aW9uIGdlKHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBTaGFkb3dSb290JiYodCBpbnN0YW5jZW9mIGZlKHQpLlNoYWRvd1Jvb3R8fHQgaW5zdGFuY2VvZiBTaGFkb3dSb290KX1jb25zdCBfZT17bmFtZTpcImFwcGx5U3R5bGVzXCIsZW5hYmxlZDohMCxwaGFzZTpcIndyaXRlXCIsZm46ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZTtPYmplY3Qua2V5cyhlLmVsZW1lbnRzKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgaT1lLnN0eWxlc1t0XXx8e30sbj1lLmF0dHJpYnV0ZXNbdF18fHt9LHM9ZS5lbGVtZW50c1t0XTttZShzKSYmdWUocykmJihPYmplY3QuYXNzaWduKHMuc3R5bGUsaSksT2JqZWN0LmtleXMobikuZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIGU9blt0XTshMT09PWU/cy5yZW1vdmVBdHRyaWJ1dGUodCk6cy5zZXRBdHRyaWJ1dGUodCwhMD09PWU/XCJcIjplKX0pKSl9KSl9LGVmZmVjdDpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9e3BvcHBlcjp7cG9zaXRpb246ZS5vcHRpb25zLnN0cmF0ZWd5LGxlZnQ6XCIwXCIsdG9wOlwiMFwiLG1hcmdpbjpcIjBcIn0sYXJyb3c6e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIn0scmVmZXJlbmNlOnt9fTtyZXR1cm4gT2JqZWN0LmFzc2lnbihlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSxpLnBvcHBlciksZS5zdHlsZXM9aSxlLmVsZW1lbnRzLmFycm93JiZPYmplY3QuYXNzaWduKGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsaS5hcnJvdyksZnVuY3Rpb24oKXtPYmplY3Qua2V5cyhlLmVsZW1lbnRzKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgbj1lLmVsZW1lbnRzW3RdLHM9ZS5hdHRyaWJ1dGVzW3RdfHx7fSxvPU9iamVjdC5rZXlzKGUuc3R5bGVzLmhhc093blByb3BlcnR5KHQpP2Uuc3R5bGVzW3RdOmlbdF0pLnJlZHVjZSgoZnVuY3Rpb24odCxlKXtyZXR1cm4gdFtlXT1cIlwiLHR9KSx7fSk7bWUobikmJnVlKG4pJiYoT2JqZWN0LmFzc2lnbihuLnN0eWxlLG8pLE9iamVjdC5rZXlzKHMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe24ucmVtb3ZlQXR0cmlidXRlKHQpfSkpKX0pKX19LHJlcXVpcmVzOltcImNvbXB1dGVTdHlsZXNcIl19O2Z1bmN0aW9uIGJlKHQpe3JldHVybiB0LnNwbGl0KFwiLVwiKVswXX12YXIgdmU9TWF0aC5tYXgseWU9TWF0aC5taW4sd2U9TWF0aC5yb3VuZDtmdW5jdGlvbiBBZSgpe3ZhciB0PW5hdmlnYXRvci51c2VyQWdlbnREYXRhO3JldHVybiBudWxsIT10JiZ0LmJyYW5kcyYmQXJyYXkuaXNBcnJheSh0LmJyYW5kcyk/dC5icmFuZHMubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gdC5icmFuZCtcIi9cIit0LnZlcnNpb259KSkuam9pbihcIiBcIik6bmF2aWdhdG9yLnVzZXJBZ2VudH1mdW5jdGlvbiBFZSgpe3JldHVybiEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KEFlKCkpfWZ1bmN0aW9uIFRlKHQsZSxpKXt2b2lkIDA9PT1lJiYoZT0hMSksdm9pZCAwPT09aSYmKGk9ITEpO3ZhciBuPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkscz0xLG89MTtlJiZtZSh0KSYmKHM9dC5vZmZzZXRXaWR0aD4wJiZ3ZShuLndpZHRoKS90Lm9mZnNldFdpZHRofHwxLG89dC5vZmZzZXRIZWlnaHQ+MCYmd2Uobi5oZWlnaHQpL3Qub2Zmc2V0SGVpZ2h0fHwxKTt2YXIgcj0ocGUodCk/ZmUodCk6d2luZG93KS52aXN1YWxWaWV3cG9ydCxhPSFFZSgpJiZpLGw9KG4ubGVmdCsoYSYmcj9yLm9mZnNldExlZnQ6MCkpL3MsYz0obi50b3ArKGEmJnI/ci5vZmZzZXRUb3A6MCkpL28saD1uLndpZHRoL3MsZD1uLmhlaWdodC9vO3JldHVybnt3aWR0aDpoLGhlaWdodDpkLHRvcDpjLHJpZ2h0OmwraCxib3R0b206YytkLGxlZnQ6bCx4OmwseTpjfX1mdW5jdGlvbiBDZSh0KXt2YXIgZT1UZSh0KSxpPXQub2Zmc2V0V2lkdGgsbj10Lm9mZnNldEhlaWdodDtyZXR1cm4gTWF0aC5hYnMoZS53aWR0aC1pKTw9MSYmKGk9ZS53aWR0aCksTWF0aC5hYnMoZS5oZWlnaHQtbik8PTEmJihuPWUuaGVpZ2h0KSx7eDp0Lm9mZnNldExlZnQseTp0Lm9mZnNldFRvcCx3aWR0aDppLGhlaWdodDpufX1mdW5jdGlvbiBPZSh0LGUpe3ZhciBpPWUuZ2V0Um9vdE5vZGUmJmUuZ2V0Um9vdE5vZGUoKTtpZih0LmNvbnRhaW5zKGUpKXJldHVybiEwO2lmKGkmJmdlKGkpKXt2YXIgbj1lO2Rve2lmKG4mJnQuaXNTYW1lTm9kZShuKSlyZXR1cm4hMDtuPW4ucGFyZW50Tm9kZXx8bi5ob3N0fXdoaWxlKG4pfXJldHVybiExfWZ1bmN0aW9uIHhlKHQpe3JldHVybiBmZSh0KS5nZXRDb21wdXRlZFN0eWxlKHQpfWZ1bmN0aW9uIGtlKHQpe3JldHVybltcInRhYmxlXCIsXCJ0ZFwiLFwidGhcIl0uaW5kZXhPZih1ZSh0KSk+PTB9ZnVuY3Rpb24gTGUodCl7cmV0dXJuKChwZSh0KT90Lm93bmVyRG9jdW1lbnQ6dC5kb2N1bWVudCl8fHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50fWZ1bmN0aW9uIFNlKHQpe3JldHVyblwiaHRtbFwiPT09dWUodCk/dDp0LmFzc2lnbmVkU2xvdHx8dC5wYXJlbnROb2RlfHwoZ2UodCk/dC5ob3N0Om51bGwpfHxMZSh0KX1mdW5jdGlvbiBEZSh0KXtyZXR1cm4gbWUodCkmJlwiZml4ZWRcIiE9PXhlKHQpLnBvc2l0aW9uP3Qub2Zmc2V0UGFyZW50Om51bGx9ZnVuY3Rpb24gJGUodCl7Zm9yKHZhciBlPWZlKHQpLGk9RGUodCk7aSYma2UoaSkmJlwic3RhdGljXCI9PT14ZShpKS5wb3NpdGlvbjspaT1EZShpKTtyZXR1cm4gaSYmKFwiaHRtbFwiPT09dWUoaSl8fFwiYm9keVwiPT09dWUoaSkmJlwic3RhdGljXCI9PT14ZShpKS5wb3NpdGlvbik/ZTppfHxmdW5jdGlvbih0KXt2YXIgZT0vZmlyZWZveC9pLnRlc3QoQWUoKSk7aWYoL1RyaWRlbnQvaS50ZXN0KEFlKCkpJiZtZSh0KSYmXCJmaXhlZFwiPT09eGUodCkucG9zaXRpb24pcmV0dXJuIG51bGw7dmFyIGk9U2UodCk7Zm9yKGdlKGkpJiYoaT1pLmhvc3QpO21lKGkpJiZbXCJodG1sXCIsXCJib2R5XCJdLmluZGV4T2YodWUoaSkpPDA7KXt2YXIgbj14ZShpKTtpZihcIm5vbmVcIiE9PW4udHJhbnNmb3JtfHxcIm5vbmVcIiE9PW4ucGVyc3BlY3RpdmV8fFwicGFpbnRcIj09PW4uY29udGFpbnx8LTEhPT1bXCJ0cmFuc2Zvcm1cIixcInBlcnNwZWN0aXZlXCJdLmluZGV4T2Yobi53aWxsQ2hhbmdlKXx8ZSYmXCJmaWx0ZXJcIj09PW4ud2lsbENoYW5nZXx8ZSYmbi5maWx0ZXImJlwibm9uZVwiIT09bi5maWx0ZXIpcmV0dXJuIGk7aT1pLnBhcmVudE5vZGV9cmV0dXJuIG51bGx9KHQpfHxlfWZ1bmN0aW9uIEllKHQpe3JldHVybltcInRvcFwiLFwiYm90dG9tXCJdLmluZGV4T2YodCk+PTA/XCJ4XCI6XCJ5XCJ9ZnVuY3Rpb24gTmUodCxlLGkpe3JldHVybiB2ZSh0LHllKGUsaSkpfWZ1bmN0aW9uIFBlKHQpe3JldHVybiBPYmplY3QuYXNzaWduKHt9LHt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MH0sdCl9ZnVuY3Rpb24gTWUodCxlKXtyZXR1cm4gZS5yZWR1Y2UoKGZ1bmN0aW9uKGUsaSl7cmV0dXJuIGVbaV09dCxlfSkse30pfWNvbnN0IGplPXtuYW1lOlwiYXJyb3dcIixlbmFibGVkOiEwLHBoYXNlOlwibWFpblwiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlLGk9dC5zdGF0ZSxuPXQubmFtZSxzPXQub3B0aW9ucyxvPWkuZWxlbWVudHMuYXJyb3cscj1pLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxhPWJlKGkucGxhY2VtZW50KSxsPUllKGEpLGM9W1Z0LHF0XS5pbmRleE9mKGEpPj0wP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiO2lmKG8mJnIpe3ZhciBoPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIFBlKFwibnVtYmVyXCIhPXR5cGVvZih0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChPYmplY3QuYXNzaWduKHt9LGUucmVjdHMse3BsYWNlbWVudDplLnBsYWNlbWVudH0pKTp0KT90Ok1lKHQsUXQpKX0ocy5wYWRkaW5nLGkpLGQ9Q2UobyksdT1cInlcIj09PWw/enQ6VnQsZj1cInlcIj09PWw/UnQ6cXQscD1pLnJlY3RzLnJlZmVyZW5jZVtjXStpLnJlY3RzLnJlZmVyZW5jZVtsXS1yW2xdLWkucmVjdHMucG9wcGVyW2NdLG09cltsXS1pLnJlY3RzLnJlZmVyZW5jZVtsXSxnPSRlKG8pLF89Zz9cInlcIj09PWw/Zy5jbGllbnRIZWlnaHR8fDA6Zy5jbGllbnRXaWR0aHx8MDowLGI9cC8yLW0vMix2PWhbdV0seT1fLWRbY10taFtmXSx3PV8vMi1kW2NdLzIrYixBPU5lKHYsdyx5KSxFPWw7aS5tb2RpZmllcnNEYXRhW25dPSgoZT17fSlbRV09QSxlLmNlbnRlck9mZnNldD1BLXcsZSl9fSxlZmZlY3Q6ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQub3B0aW9ucy5lbGVtZW50LG49dm9pZCAwPT09aT9cIltkYXRhLXBvcHBlci1hcnJvd11cIjppO251bGwhPW4mJihcInN0cmluZ1wiIT10eXBlb2Ygbnx8KG49ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihuKSkpJiZPZShlLmVsZW1lbnRzLnBvcHBlcixuKSYmKGUuZWxlbWVudHMuYXJyb3c9bil9LHJlcXVpcmVzOltcInBvcHBlck9mZnNldHNcIl0scmVxdWlyZXNJZkV4aXN0czpbXCJwcmV2ZW50T3ZlcmZsb3dcIl19O2Z1bmN0aW9uIEZlKHQpe3JldHVybiB0LnNwbGl0KFwiLVwiKVsxXX12YXIgSGU9e3RvcDpcImF1dG9cIixyaWdodDpcImF1dG9cIixib3R0b206XCJhdXRvXCIsbGVmdDpcImF1dG9cIn07ZnVuY3Rpb24gV2UodCl7dmFyIGUsaT10LnBvcHBlcixuPXQucG9wcGVyUmVjdCxzPXQucGxhY2VtZW50LG89dC52YXJpYXRpb24scj10Lm9mZnNldHMsYT10LnBvc2l0aW9uLGw9dC5ncHVBY2NlbGVyYXRpb24sYz10LmFkYXB0aXZlLGg9dC5yb3VuZE9mZnNldHMsZD10LmlzRml4ZWQsdT1yLngsZj12b2lkIDA9PT11PzA6dSxwPXIueSxtPXZvaWQgMD09PXA/MDpwLGc9XCJmdW5jdGlvblwiPT10eXBlb2YgaD9oKHt4OmYseTptfSk6e3g6Zix5Om19O2Y9Zy54LG09Zy55O3ZhciBfPXIuaGFzT3duUHJvcGVydHkoXCJ4XCIpLGI9ci5oYXNPd25Qcm9wZXJ0eShcInlcIiksdj1WdCx5PXp0LHc9d2luZG93O2lmKGMpe3ZhciBBPSRlKGkpLEU9XCJjbGllbnRIZWlnaHRcIixUPVwiY2xpZW50V2lkdGhcIjtBPT09ZmUoaSkmJlwic3RhdGljXCIhPT14ZShBPUxlKGkpKS5wb3NpdGlvbiYmXCJhYnNvbHV0ZVwiPT09YSYmKEU9XCJzY3JvbGxIZWlnaHRcIixUPVwic2Nyb2xsV2lkdGhcIiksKHM9PT16dHx8KHM9PT1WdHx8cz09PXF0KSYmbz09PVl0KSYmKHk9UnQsbS09KGQmJkE9PT13JiZ3LnZpc3VhbFZpZXdwb3J0P3cudmlzdWFsVmlld3BvcnQuaGVpZ2h0OkFbRV0pLW4uaGVpZ2h0LG0qPWw/MTotMSkscyE9PVZ0JiYocyE9PXp0JiZzIT09UnR8fG8hPT1ZdCl8fCh2PXF0LGYtPShkJiZBPT09dyYmdy52aXN1YWxWaWV3cG9ydD93LnZpc3VhbFZpZXdwb3J0LndpZHRoOkFbVF0pLW4ud2lkdGgsZio9bD8xOi0xKX12YXIgQyxPPU9iamVjdC5hc3NpZ24oe3Bvc2l0aW9uOmF9LGMmJkhlKSx4PSEwPT09aD9mdW5jdGlvbih0LGUpe3ZhciBpPXQueCxuPXQueSxzPWUuZGV2aWNlUGl4ZWxSYXRpb3x8MTtyZXR1cm57eDp3ZShpKnMpL3N8fDAseTp3ZShuKnMpL3N8fDB9fSh7eDpmLHk6bX0sZmUoaSkpOnt4OmYseTptfTtyZXR1cm4gZj14LngsbT14LnksbD9PYmplY3QuYXNzaWduKHt9LE8sKChDPXt9KVt5XT1iP1wiMFwiOlwiXCIsQ1t2XT1fP1wiMFwiOlwiXCIsQy50cmFuc2Zvcm09KHcuZGV2aWNlUGl4ZWxSYXRpb3x8MSk8PTE/XCJ0cmFuc2xhdGUoXCIrZitcInB4LCBcIittK1wicHgpXCI6XCJ0cmFuc2xhdGUzZChcIitmK1wicHgsIFwiK20rXCJweCwgMClcIixDKSk6T2JqZWN0LmFzc2lnbih7fSxPLCgoZT17fSlbeV09Yj9tK1wicHhcIjpcIlwiLGVbdl09Xz9mK1wicHhcIjpcIlwiLGUudHJhbnNmb3JtPVwiXCIsZSkpfWNvbnN0IEJlPXtuYW1lOlwiY29tcHV0ZVN0eWxlc1wiLGVuYWJsZWQ6ITAscGhhc2U6XCJiZWZvcmVXcml0ZVwiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm9wdGlvbnMsbj1pLmdwdUFjY2VsZXJhdGlvbixzPXZvaWQgMD09PW58fG4sbz1pLmFkYXB0aXZlLHI9dm9pZCAwPT09b3x8byxhPWkucm91bmRPZmZzZXRzLGw9dm9pZCAwPT09YXx8YSxjPXtwbGFjZW1lbnQ6YmUoZS5wbGFjZW1lbnQpLHZhcmlhdGlvbjpGZShlLnBsYWNlbWVudCkscG9wcGVyOmUuZWxlbWVudHMucG9wcGVyLHBvcHBlclJlY3Q6ZS5yZWN0cy5wb3BwZXIsZ3B1QWNjZWxlcmF0aW9uOnMsaXNGaXhlZDpcImZpeGVkXCI9PT1lLm9wdGlvbnMuc3RyYXRlZ3l9O251bGwhPWUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzJiYoZS5zdHlsZXMucG9wcGVyPU9iamVjdC5hc3NpZ24oe30sZS5zdHlsZXMucG9wcGVyLFdlKE9iamVjdC5hc3NpZ24oe30sYyx7b2Zmc2V0czplLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxwb3NpdGlvbjplLm9wdGlvbnMuc3RyYXRlZ3ksYWRhcHRpdmU6cixyb3VuZE9mZnNldHM6bH0pKSkpLG51bGwhPWUubW9kaWZpZXJzRGF0YS5hcnJvdyYmKGUuc3R5bGVzLmFycm93PU9iamVjdC5hc3NpZ24oe30sZS5zdHlsZXMuYXJyb3csV2UoT2JqZWN0LmFzc2lnbih7fSxjLHtvZmZzZXRzOmUubW9kaWZpZXJzRGF0YS5hcnJvdyxwb3NpdGlvbjpcImFic29sdXRlXCIsYWRhcHRpdmU6ITEscm91bmRPZmZzZXRzOmx9KSkpKSxlLmF0dHJpYnV0ZXMucG9wcGVyPU9iamVjdC5hc3NpZ24oe30sZS5hdHRyaWJ1dGVzLnBvcHBlcix7XCJkYXRhLXBvcHBlci1wbGFjZW1lbnRcIjplLnBsYWNlbWVudH0pfSxkYXRhOnt9fTt2YXIgemU9e3Bhc3NpdmU6ITB9O2NvbnN0IFJlPXtuYW1lOlwiZXZlbnRMaXN0ZW5lcnNcIixlbmFibGVkOiEwLHBoYXNlOlwid3JpdGVcIixmbjpmdW5jdGlvbigpe30sZWZmZWN0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lmluc3RhbmNlLG49dC5vcHRpb25zLHM9bi5zY3JvbGwsbz12b2lkIDA9PT1zfHxzLHI9bi5yZXNpemUsYT12b2lkIDA9PT1yfHxyLGw9ZmUoZS5lbGVtZW50cy5wb3BwZXIpLGM9W10uY29uY2F0KGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7cmV0dXJuIG8mJmMuZm9yRWFjaCgoZnVuY3Rpb24odCl7dC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsaS51cGRhdGUsemUpfSkpLGEmJmwuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGkudXBkYXRlLHplKSxmdW5jdGlvbigpe28mJmMuZm9yRWFjaCgoZnVuY3Rpb24odCl7dC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsaS51cGRhdGUsemUpfSkpLGEmJmwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGkudXBkYXRlLHplKX19LGRhdGE6e319O3ZhciBxZT17bGVmdDpcInJpZ2h0XCIscmlnaHQ6XCJsZWZ0XCIsYm90dG9tOlwidG9wXCIsdG9wOlwiYm90dG9tXCJ9O2Z1bmN0aW9uIFZlKHQpe3JldHVybiB0LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLChmdW5jdGlvbih0KXtyZXR1cm4gcWVbdF19KSl9dmFyIEtlPXtzdGFydDpcImVuZFwiLGVuZDpcInN0YXJ0XCJ9O2Z1bmN0aW9uIFFlKHQpe3JldHVybiB0LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLChmdW5jdGlvbih0KXtyZXR1cm4gS2VbdF19KSl9ZnVuY3Rpb24gWGUodCl7dmFyIGU9ZmUodCk7cmV0dXJue3Njcm9sbExlZnQ6ZS5wYWdlWE9mZnNldCxzY3JvbGxUb3A6ZS5wYWdlWU9mZnNldH19ZnVuY3Rpb24gWWUodCl7cmV0dXJuIFRlKExlKHQpKS5sZWZ0K1hlKHQpLnNjcm9sbExlZnR9ZnVuY3Rpb24gVWUodCl7dmFyIGU9eGUodCksaT1lLm92ZXJmbG93LG49ZS5vdmVyZmxvd1gscz1lLm92ZXJmbG93WTtyZXR1cm4vYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3QoaStzK24pfWZ1bmN0aW9uIEdlKHQpe3JldHVybltcImh0bWxcIixcImJvZHlcIixcIiNkb2N1bWVudFwiXS5pbmRleE9mKHVlKHQpKT49MD90Lm93bmVyRG9jdW1lbnQuYm9keTptZSh0KSYmVWUodCk/dDpHZShTZSh0KSl9ZnVuY3Rpb24gSmUodCxlKXt2YXIgaTt2b2lkIDA9PT1lJiYoZT1bXSk7dmFyIG49R2UodCkscz1uPT09KG51bGw9PShpPXQub3duZXJEb2N1bWVudCk/dm9pZCAwOmkuYm9keSksbz1mZShuKSxyPXM/W29dLmNvbmNhdChvLnZpc3VhbFZpZXdwb3J0fHxbXSxVZShuKT9uOltdKTpuLGE9ZS5jb25jYXQocik7cmV0dXJuIHM/YTphLmNvbmNhdChKZShTZShyKSkpfWZ1bmN0aW9uIFplKHQpe3JldHVybiBPYmplY3QuYXNzaWduKHt9LHQse2xlZnQ6dC54LHRvcDp0LnkscmlnaHQ6dC54K3Qud2lkdGgsYm90dG9tOnQueSt0LmhlaWdodH0pfWZ1bmN0aW9uIHRpKHQsZSxpKXtyZXR1cm4gZT09PUd0P1plKGZ1bmN0aW9uKHQsZSl7dmFyIGk9ZmUodCksbj1MZSh0KSxzPWkudmlzdWFsVmlld3BvcnQsbz1uLmNsaWVudFdpZHRoLHI9bi5jbGllbnRIZWlnaHQsYT0wLGw9MDtpZihzKXtvPXMud2lkdGgscj1zLmhlaWdodDt2YXIgYz1FZSgpOyhjfHwhYyYmXCJmaXhlZFwiPT09ZSkmJihhPXMub2Zmc2V0TGVmdCxsPXMub2Zmc2V0VG9wKX1yZXR1cm57d2lkdGg6byxoZWlnaHQ6cix4OmErWWUodCkseTpsfX0odCxpKSk6cGUoZSk/ZnVuY3Rpb24odCxlKXt2YXIgaT1UZSh0LCExLFwiZml4ZWRcIj09PWUpO3JldHVybiBpLnRvcD1pLnRvcCt0LmNsaWVudFRvcCxpLmxlZnQ9aS5sZWZ0K3QuY2xpZW50TGVmdCxpLmJvdHRvbT1pLnRvcCt0LmNsaWVudEhlaWdodCxpLnJpZ2h0PWkubGVmdCt0LmNsaWVudFdpZHRoLGkud2lkdGg9dC5jbGllbnRXaWR0aCxpLmhlaWdodD10LmNsaWVudEhlaWdodCxpLng9aS5sZWZ0LGkueT1pLnRvcCxpfShlLGkpOlplKGZ1bmN0aW9uKHQpe3ZhciBlLGk9TGUodCksbj1YZSh0KSxzPW51bGw9PShlPXQub3duZXJEb2N1bWVudCk/dm9pZCAwOmUuYm9keSxvPXZlKGkuc2Nyb2xsV2lkdGgsaS5jbGllbnRXaWR0aCxzP3Muc2Nyb2xsV2lkdGg6MCxzP3MuY2xpZW50V2lkdGg6MCkscj12ZShpLnNjcm9sbEhlaWdodCxpLmNsaWVudEhlaWdodCxzP3Muc2Nyb2xsSGVpZ2h0OjAscz9zLmNsaWVudEhlaWdodDowKSxhPS1uLnNjcm9sbExlZnQrWWUodCksbD0tbi5zY3JvbGxUb3A7cmV0dXJuXCJydGxcIj09PXhlKHN8fGkpLmRpcmVjdGlvbiYmKGErPXZlKGkuY2xpZW50V2lkdGgscz9zLmNsaWVudFdpZHRoOjApLW8pLHt3aWR0aDpvLGhlaWdodDpyLHg6YSx5Omx9fShMZSh0KSkpfWZ1bmN0aW9uIGVpKHQpe3ZhciBlLGk9dC5yZWZlcmVuY2Usbj10LmVsZW1lbnQscz10LnBsYWNlbWVudCxvPXM/YmUocyk6bnVsbCxyPXM/RmUocyk6bnVsbCxhPWkueCtpLndpZHRoLzItbi53aWR0aC8yLGw9aS55K2kuaGVpZ2h0LzItbi5oZWlnaHQvMjtzd2l0Y2gobyl7Y2FzZSB6dDplPXt4OmEseTppLnktbi5oZWlnaHR9O2JyZWFrO2Nhc2UgUnQ6ZT17eDphLHk6aS55K2kuaGVpZ2h0fTticmVhaztjYXNlIHF0OmU9e3g6aS54K2kud2lkdGgseTpsfTticmVhaztjYXNlIFZ0OmU9e3g6aS54LW4ud2lkdGgseTpsfTticmVhaztkZWZhdWx0OmU9e3g6aS54LHk6aS55fX12YXIgYz1vP0llKG8pOm51bGw7aWYobnVsbCE9Yyl7dmFyIGg9XCJ5XCI9PT1jP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiO3N3aXRjaChyKXtjYXNlIFh0OmVbY109ZVtjXS0oaVtoXS8yLW5baF0vMik7YnJlYWs7Y2FzZSBZdDplW2NdPWVbY10rKGlbaF0vMi1uW2hdLzIpfX1yZXR1cm4gZX1mdW5jdGlvbiBpaSh0LGUpe3ZvaWQgMD09PWUmJihlPXt9KTt2YXIgaT1lLG49aS5wbGFjZW1lbnQscz12b2lkIDA9PT1uP3QucGxhY2VtZW50Om4sbz1pLnN0cmF0ZWd5LHI9dm9pZCAwPT09bz90LnN0cmF0ZWd5Om8sYT1pLmJvdW5kYXJ5LGw9dm9pZCAwPT09YT9VdDphLGM9aS5yb290Qm91bmRhcnksaD12b2lkIDA9PT1jP0d0OmMsZD1pLmVsZW1lbnRDb250ZXh0LHU9dm9pZCAwPT09ZD9KdDpkLGY9aS5hbHRCb3VuZGFyeSxwPXZvaWQgMCE9PWYmJmYsbT1pLnBhZGRpbmcsZz12b2lkIDA9PT1tPzA6bSxfPVBlKFwibnVtYmVyXCIhPXR5cGVvZiBnP2c6TWUoZyxRdCkpLGI9dT09PUp0P1p0Okp0LHY9dC5yZWN0cy5wb3BwZXIseT10LmVsZW1lbnRzW3A/Yjp1XSx3PWZ1bmN0aW9uKHQsZSxpLG4pe3ZhciBzPVwiY2xpcHBpbmdQYXJlbnRzXCI9PT1lP2Z1bmN0aW9uKHQpe3ZhciBlPUplKFNlKHQpKSxpPVtcImFic29sdXRlXCIsXCJmaXhlZFwiXS5pbmRleE9mKHhlKHQpLnBvc2l0aW9uKT49MCYmbWUodCk/JGUodCk6dDtyZXR1cm4gcGUoaSk/ZS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBwZSh0KSYmT2UodCxpKSYmXCJib2R5XCIhPT11ZSh0KX0pKTpbXX0odCk6W10uY29uY2F0KGUpLG89W10uY29uY2F0KHMsW2ldKSxyPW9bMF0sYT1vLnJlZHVjZSgoZnVuY3Rpb24oZSxpKXt2YXIgcz10aSh0LGksbik7cmV0dXJuIGUudG9wPXZlKHMudG9wLGUudG9wKSxlLnJpZ2h0PXllKHMucmlnaHQsZS5yaWdodCksZS5ib3R0b209eWUocy5ib3R0b20sZS5ib3R0b20pLGUubGVmdD12ZShzLmxlZnQsZS5sZWZ0KSxlfSksdGkodCxyLG4pKTtyZXR1cm4gYS53aWR0aD1hLnJpZ2h0LWEubGVmdCxhLmhlaWdodD1hLmJvdHRvbS1hLnRvcCxhLng9YS5sZWZ0LGEueT1hLnRvcCxhfShwZSh5KT95OnkuY29udGV4dEVsZW1lbnR8fExlKHQuZWxlbWVudHMucG9wcGVyKSxsLGgsciksQT1UZSh0LmVsZW1lbnRzLnJlZmVyZW5jZSksRT1laSh7cmVmZXJlbmNlOkEsZWxlbWVudDp2LHN0cmF0ZWd5OlwiYWJzb2x1dGVcIixwbGFjZW1lbnQ6c30pLFQ9WmUoT2JqZWN0LmFzc2lnbih7fSx2LEUpKSxDPXU9PT1KdD9UOkEsTz17dG9wOncudG9wLUMudG9wK18udG9wLGJvdHRvbTpDLmJvdHRvbS13LmJvdHRvbStfLmJvdHRvbSxsZWZ0OncubGVmdC1DLmxlZnQrXy5sZWZ0LHJpZ2h0OkMucmlnaHQtdy5yaWdodCtfLnJpZ2h0fSx4PXQubW9kaWZpZXJzRGF0YS5vZmZzZXQ7aWYodT09PUp0JiZ4KXt2YXIgaz14W3NdO09iamVjdC5rZXlzKE8pLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBlPVtxdCxSdF0uaW5kZXhPZih0KT49MD8xOi0xLGk9W3p0LFJ0XS5pbmRleE9mKHQpPj0wP1wieVwiOlwieFwiO09bdF0rPWtbaV0qZX0pKX1yZXR1cm4gT31mdW5jdGlvbiBuaSh0LGUpe3ZvaWQgMD09PWUmJihlPXt9KTt2YXIgaT1lLG49aS5wbGFjZW1lbnQscz1pLmJvdW5kYXJ5LG89aS5yb290Qm91bmRhcnkscj1pLnBhZGRpbmcsYT1pLmZsaXBWYXJpYXRpb25zLGw9aS5hbGxvd2VkQXV0b1BsYWNlbWVudHMsYz12b2lkIDA9PT1sP2VlOmwsaD1GZShuKSxkPWg/YT90ZTp0ZS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBGZSh0KT09PWh9KSk6UXQsdT1kLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIGMuaW5kZXhPZih0KT49MH0pKTswPT09dS5sZW5ndGgmJih1PWQpO3ZhciBmPXUucmVkdWNlKChmdW5jdGlvbihlLGkpe3JldHVybiBlW2ldPWlpKHQse3BsYWNlbWVudDppLGJvdW5kYXJ5OnMscm9vdEJvdW5kYXJ5Om8scGFkZGluZzpyfSlbYmUoaSldLGV9KSx7fSk7cmV0dXJuIE9iamVjdC5rZXlzKGYpLnNvcnQoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZbdF0tZltlXX0pKX1jb25zdCBzaT17bmFtZTpcImZsaXBcIixlbmFibGVkOiEwLHBoYXNlOlwibWFpblwiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm9wdGlvbnMsbj10Lm5hbWU7aWYoIWUubW9kaWZpZXJzRGF0YVtuXS5fc2tpcCl7Zm9yKHZhciBzPWkubWFpbkF4aXMsbz12b2lkIDA9PT1zfHxzLHI9aS5hbHRBeGlzLGE9dm9pZCAwPT09cnx8cixsPWkuZmFsbGJhY2tQbGFjZW1lbnRzLGM9aS5wYWRkaW5nLGg9aS5ib3VuZGFyeSxkPWkucm9vdEJvdW5kYXJ5LHU9aS5hbHRCb3VuZGFyeSxmPWkuZmxpcFZhcmlhdGlvbnMscD12b2lkIDA9PT1mfHxmLG09aS5hbGxvd2VkQXV0b1BsYWNlbWVudHMsZz1lLm9wdGlvbnMucGxhY2VtZW50LF89YmUoZyksYj1sfHwoXyE9PWcmJnA/ZnVuY3Rpb24odCl7aWYoYmUodCk9PT1LdClyZXR1cm5bXTt2YXIgZT1WZSh0KTtyZXR1cm5bUWUodCksZSxRZShlKV19KGcpOltWZShnKV0pLHY9W2ddLmNvbmNhdChiKS5yZWR1Y2UoKGZ1bmN0aW9uKHQsaSl7cmV0dXJuIHQuY29uY2F0KGJlKGkpPT09S3Q/bmkoZSx7cGxhY2VtZW50OmksYm91bmRhcnk6aCxyb290Qm91bmRhcnk6ZCxwYWRkaW5nOmMsZmxpcFZhcmlhdGlvbnM6cCxhbGxvd2VkQXV0b1BsYWNlbWVudHM6bX0pOmkpfSksW10pLHk9ZS5yZWN0cy5yZWZlcmVuY2Usdz1lLnJlY3RzLnBvcHBlcixBPW5ldyBNYXAsRT0hMCxUPXZbMF0sQz0wO0M8di5sZW5ndGg7QysrKXt2YXIgTz12W0NdLHg9YmUoTyksaz1GZShPKT09PVh0LEw9W3p0LFJ0XS5pbmRleE9mKHgpPj0wLFM9TD9cIndpZHRoXCI6XCJoZWlnaHRcIixEPWlpKGUse3BsYWNlbWVudDpPLGJvdW5kYXJ5Omgscm9vdEJvdW5kYXJ5OmQsYWx0Qm91bmRhcnk6dSxwYWRkaW5nOmN9KSwkPUw/az9xdDpWdDprP1J0Onp0O3lbU10+d1tTXSYmKCQ9VmUoJCkpO3ZhciBJPVZlKCQpLE49W107aWYobyYmTi5wdXNoKERbeF08PTApLGEmJk4ucHVzaChEWyRdPD0wLERbSV08PTApLE4uZXZlcnkoKGZ1bmN0aW9uKHQpe3JldHVybiB0fSkpKXtUPU8sRT0hMTticmVha31BLnNldChPLE4pfWlmKEUpZm9yKHZhciBQPWZ1bmN0aW9uKHQpe3ZhciBlPXYuZmluZCgoZnVuY3Rpb24oZSl7dmFyIGk9QS5nZXQoZSk7aWYoaSlyZXR1cm4gaS5zbGljZSgwLHQpLmV2ZXJ5KChmdW5jdGlvbih0KXtyZXR1cm4gdH0pKX0pKTtpZihlKXJldHVybiBUPWUsXCJicmVha1wifSxNPXA/MzoxO00+MCYmXCJicmVha1wiIT09UChNKTtNLS0pO2UucGxhY2VtZW50IT09VCYmKGUubW9kaWZpZXJzRGF0YVtuXS5fc2tpcD0hMCxlLnBsYWNlbWVudD1ULGUucmVzZXQ9ITApfX0scmVxdWlyZXNJZkV4aXN0czpbXCJvZmZzZXRcIl0sZGF0YTp7X3NraXA6ITF9fTtmdW5jdGlvbiBvaSh0LGUsaSl7cmV0dXJuIHZvaWQgMD09PWkmJihpPXt4OjAseTowfSkse3RvcDp0LnRvcC1lLmhlaWdodC1pLnkscmlnaHQ6dC5yaWdodC1lLndpZHRoK2kueCxib3R0b206dC5ib3R0b20tZS5oZWlnaHQraS55LGxlZnQ6dC5sZWZ0LWUud2lkdGgtaS54fX1mdW5jdGlvbiByaSh0KXtyZXR1cm5benQscXQsUnQsVnRdLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdPj0wfSkpfWNvbnN0IGFpPXtuYW1lOlwiaGlkZVwiLGVuYWJsZWQ6ITAscGhhc2U6XCJtYWluXCIscmVxdWlyZXNJZkV4aXN0czpbXCJwcmV2ZW50T3ZlcmZsb3dcIl0sZm46ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQubmFtZSxuPWUucmVjdHMucmVmZXJlbmNlLHM9ZS5yZWN0cy5wb3BwZXIsbz1lLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93LHI9aWkoZSx7ZWxlbWVudENvbnRleHQ6XCJyZWZlcmVuY2VcIn0pLGE9aWkoZSx7YWx0Qm91bmRhcnk6ITB9KSxsPW9pKHIsbiksYz1vaShhLHMsbyksaD1yaShsKSxkPXJpKGMpO2UubW9kaWZpZXJzRGF0YVtpXT17cmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOmwscG9wcGVyRXNjYXBlT2Zmc2V0czpjLGlzUmVmZXJlbmNlSGlkZGVuOmgsaGFzUG9wcGVyRXNjYXBlZDpkfSxlLmF0dHJpYnV0ZXMucG9wcGVyPU9iamVjdC5hc3NpZ24oe30sZS5hdHRyaWJ1dGVzLnBvcHBlcix7XCJkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuXCI6aCxcImRhdGEtcG9wcGVyLWVzY2FwZWRcIjpkfSl9fSxsaT17bmFtZTpcIm9mZnNldFwiLGVuYWJsZWQ6ITAscGhhc2U6XCJtYWluXCIscmVxdWlyZXM6W1wicG9wcGVyT2Zmc2V0c1wiXSxmbjpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9dC5vcHRpb25zLG49dC5uYW1lLHM9aS5vZmZzZXQsbz12b2lkIDA9PT1zP1swLDBdOnMscj1lZS5yZWR1Y2UoKGZ1bmN0aW9uKHQsaSl7cmV0dXJuIHRbaV09ZnVuY3Rpb24odCxlLGkpe3ZhciBuPWJlKHQpLHM9W1Z0LHp0XS5pbmRleE9mKG4pPj0wPy0xOjEsbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2koT2JqZWN0LmFzc2lnbih7fSxlLHtwbGFjZW1lbnQ6dH0pKTppLHI9b1swXSxhPW9bMV07cmV0dXJuIHI9cnx8MCxhPShhfHwwKSpzLFtWdCxxdF0uaW5kZXhPZihuKT49MD97eDphLHk6cn06e3g6cix5OmF9fShpLGUucmVjdHMsbyksdH0pLHt9KSxhPXJbZS5wbGFjZW1lbnRdLGw9YS54LGM9YS55O251bGwhPWUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzJiYoZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCs9bCxlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55Kz1jKSxlLm1vZGlmaWVyc0RhdGFbbl09cn19LGNpPXtuYW1lOlwicG9wcGVyT2Zmc2V0c1wiLGVuYWJsZWQ6ITAscGhhc2U6XCJyZWFkXCIsZm46ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQubmFtZTtlLm1vZGlmaWVyc0RhdGFbaV09ZWkoe3JlZmVyZW5jZTplLnJlY3RzLnJlZmVyZW5jZSxlbGVtZW50OmUucmVjdHMucG9wcGVyLHN0cmF0ZWd5OlwiYWJzb2x1dGVcIixwbGFjZW1lbnQ6ZS5wbGFjZW1lbnR9KX0sZGF0YTp7fX0saGk9e25hbWU6XCJwcmV2ZW50T3ZlcmZsb3dcIixlbmFibGVkOiEwLHBoYXNlOlwibWFpblwiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm9wdGlvbnMsbj10Lm5hbWUscz1pLm1haW5BeGlzLG89dm9pZCAwPT09c3x8cyxyPWkuYWx0QXhpcyxhPXZvaWQgMCE9PXImJnIsbD1pLmJvdW5kYXJ5LGM9aS5yb290Qm91bmRhcnksaD1pLmFsdEJvdW5kYXJ5LGQ9aS5wYWRkaW5nLHU9aS50ZXRoZXIsZj12b2lkIDA9PT11fHx1LHA9aS50ZXRoZXJPZmZzZXQsbT12b2lkIDA9PT1wPzA6cCxnPWlpKGUse2JvdW5kYXJ5Omwscm9vdEJvdW5kYXJ5OmMscGFkZGluZzpkLGFsdEJvdW5kYXJ5Omh9KSxfPWJlKGUucGxhY2VtZW50KSxiPUZlKGUucGxhY2VtZW50KSx2PSFiLHk9SWUoXyksdz1cInhcIj09PXk/XCJ5XCI6XCJ4XCIsQT1lLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxFPWUucmVjdHMucmVmZXJlbmNlLFQ9ZS5yZWN0cy5wb3BwZXIsQz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBtP20oT2JqZWN0LmFzc2lnbih7fSxlLnJlY3RzLHtwbGFjZW1lbnQ6ZS5wbGFjZW1lbnR9KSk6bSxPPVwibnVtYmVyXCI9PXR5cGVvZiBDP3ttYWluQXhpczpDLGFsdEF4aXM6Q306T2JqZWN0LmFzc2lnbih7bWFpbkF4aXM6MCxhbHRBeGlzOjB9LEMpLHg9ZS5tb2RpZmllcnNEYXRhLm9mZnNldD9lLm1vZGlmaWVyc0RhdGEub2Zmc2V0W2UucGxhY2VtZW50XTpudWxsLGs9e3g6MCx5OjB9O2lmKEEpe2lmKG8pe3ZhciBMLFM9XCJ5XCI9PT15P3p0OlZ0LEQ9XCJ5XCI9PT15P1J0OnF0LCQ9XCJ5XCI9PT15P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLEk9QVt5XSxOPUkrZ1tTXSxQPUktZ1tEXSxNPWY/LVRbJF0vMjowLGo9Yj09PVh0P0VbJF06VFskXSxGPWI9PT1YdD8tVFskXTotRVskXSxIPWUuZWxlbWVudHMuYXJyb3csVz1mJiZIP0NlKEgpOnt3aWR0aDowLGhlaWdodDowfSxCPWUubW9kaWZpZXJzRGF0YVtcImFycm93I3BlcnNpc3RlbnRcIl0/ZS5tb2RpZmllcnNEYXRhW1wiYXJyb3cjcGVyc2lzdGVudFwiXS5wYWRkaW5nOnt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MH0sej1CW1NdLFI9QltEXSxxPU5lKDAsRVskXSxXWyRdKSxWPXY/RVskXS8yLU0tcS16LU8ubWFpbkF4aXM6ai1xLXotTy5tYWluQXhpcyxLPXY/LUVbJF0vMitNK3ErUitPLm1haW5BeGlzOkYrcStSK08ubWFpbkF4aXMsUT1lLmVsZW1lbnRzLmFycm93JiYkZShlLmVsZW1lbnRzLmFycm93KSxYPVE/XCJ5XCI9PT15P1EuY2xpZW50VG9wfHwwOlEuY2xpZW50TGVmdHx8MDowLFk9bnVsbCE9KEw9bnVsbD09eD92b2lkIDA6eFt5XSk/TDowLFU9SStLLVksRz1OZShmP3llKE4sSStWLVktWCk6TixJLGY/dmUoUCxVKTpQKTtBW3ldPUcsa1t5XT1HLUl9aWYoYSl7dmFyIEosWj1cInhcIj09PXk/enQ6VnQsdHQ9XCJ4XCI9PT15P1J0OnF0LGV0PUFbd10saXQ9XCJ5XCI9PT13P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLG50PWV0K2dbWl0sc3Q9ZXQtZ1t0dF0sb3Q9LTEhPT1benQsVnRdLmluZGV4T2YoXykscnQ9bnVsbCE9KEo9bnVsbD09eD92b2lkIDA6eFt3XSk/SjowLGF0PW90P250OmV0LUVbaXRdLVRbaXRdLXJ0K08uYWx0QXhpcyxsdD1vdD9ldCtFW2l0XStUW2l0XS1ydC1PLmFsdEF4aXM6c3QsY3Q9ZiYmb3Q/ZnVuY3Rpb24odCxlLGkpe3ZhciBuPU5lKHQsZSxpKTtyZXR1cm4gbj5pP2k6bn0oYXQsZXQsbHQpOk5lKGY/YXQ6bnQsZXQsZj9sdDpzdCk7QVt3XT1jdCxrW3ddPWN0LWV0fWUubW9kaWZpZXJzRGF0YVtuXT1rfX0scmVxdWlyZXNJZkV4aXN0czpbXCJvZmZzZXRcIl19O2Z1bmN0aW9uIGRpKHQsZSxpKXt2b2lkIDA9PT1pJiYoaT0hMSk7dmFyIG4scyxvPW1lKGUpLHI9bWUoZSkmJmZ1bmN0aW9uKHQpe3ZhciBlPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT13ZShlLndpZHRoKS90Lm9mZnNldFdpZHRofHwxLG49d2UoZS5oZWlnaHQpL3Qub2Zmc2V0SGVpZ2h0fHwxO3JldHVybiAxIT09aXx8MSE9PW59KGUpLGE9TGUoZSksbD1UZSh0LHIsaSksYz17c2Nyb2xsTGVmdDowLHNjcm9sbFRvcDowfSxoPXt4OjAseTowfTtyZXR1cm4ob3x8IW8mJiFpKSYmKChcImJvZHlcIiE9PXVlKGUpfHxVZShhKSkmJihjPShuPWUpIT09ZmUobikmJm1lKG4pP3tzY3JvbGxMZWZ0OihzPW4pLnNjcm9sbExlZnQsc2Nyb2xsVG9wOnMuc2Nyb2xsVG9wfTpYZShuKSksbWUoZSk/KChoPVRlKGUsITApKS54Kz1lLmNsaWVudExlZnQsaC55Kz1lLmNsaWVudFRvcCk6YSYmKGgueD1ZZShhKSkpLHt4OmwubGVmdCtjLnNjcm9sbExlZnQtaC54LHk6bC50b3ArYy5zY3JvbGxUb3AtaC55LHdpZHRoOmwud2lkdGgsaGVpZ2h0OmwuaGVpZ2h0fX1mdW5jdGlvbiB1aSh0KXt2YXIgZT1uZXcgTWFwLGk9bmV3IFNldCxuPVtdO2Z1bmN0aW9uIHModCl7aS5hZGQodC5uYW1lKSxbXS5jb25jYXQodC5yZXF1aXJlc3x8W10sdC5yZXF1aXJlc0lmRXhpc3RzfHxbXSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7aWYoIWkuaGFzKHQpKXt2YXIgbj1lLmdldCh0KTtuJiZzKG4pfX0pKSxuLnB1c2godCl9cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZS5zZXQodC5uYW1lLHQpfSkpLHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7aS5oYXModC5uYW1lKXx8cyh0KX0pKSxufXZhciBmaT17cGxhY2VtZW50OlwiYm90dG9tXCIsbW9kaWZpZXJzOltdLHN0cmF0ZWd5OlwiYWJzb2x1dGVcIn07ZnVuY3Rpb24gcGkoKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheSh0KSxpPTA7aTx0O2krKyllW2ldPWFyZ3VtZW50c1tpXTtyZXR1cm4hZS5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4hKHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KX0pKX1mdW5jdGlvbiBtaSh0KXt2b2lkIDA9PT10JiYodD17fSk7dmFyIGU9dCxpPWUuZGVmYXVsdE1vZGlmaWVycyxuPXZvaWQgMD09PWk/W106aSxzPWUuZGVmYXVsdE9wdGlvbnMsbz12b2lkIDA9PT1zP2ZpOnM7cmV0dXJuIGZ1bmN0aW9uKHQsZSxpKXt2b2lkIDA9PT1pJiYoaT1vKTt2YXIgcyxyLGE9e3BsYWNlbWVudDpcImJvdHRvbVwiLG9yZGVyZWRNb2RpZmllcnM6W10sb3B0aW9uczpPYmplY3QuYXNzaWduKHt9LGZpLG8pLG1vZGlmaWVyc0RhdGE6e30sZWxlbWVudHM6e3JlZmVyZW5jZTp0LHBvcHBlcjplfSxhdHRyaWJ1dGVzOnt9LHN0eWxlczp7fX0sbD1bXSxjPSExLGg9e3N0YXRlOmEsc2V0T3B0aW9uczpmdW5jdGlvbihpKXt2YXIgcz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2koYS5vcHRpb25zKTppO2QoKSxhLm9wdGlvbnM9T2JqZWN0LmFzc2lnbih7fSxvLGEub3B0aW9ucyxzKSxhLnNjcm9sbFBhcmVudHM9e3JlZmVyZW5jZTpwZSh0KT9KZSh0KTp0LmNvbnRleHRFbGVtZW50P0plKHQuY29udGV4dEVsZW1lbnQpOltdLHBvcHBlcjpKZShlKX07dmFyIHIsYyx1PWZ1bmN0aW9uKHQpe3ZhciBlPXVpKHQpO3JldHVybiBkZS5yZWR1Y2UoKGZ1bmN0aW9uKHQsaSl7cmV0dXJuIHQuY29uY2F0KGUuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5waGFzZT09PWl9KSkpfSksW10pfSgocj1bXS5jb25jYXQobixhLm9wdGlvbnMubW9kaWZpZXJzKSxjPXIucmVkdWNlKChmdW5jdGlvbih0LGUpe3ZhciBpPXRbZS5uYW1lXTtyZXR1cm4gdFtlLm5hbWVdPWk/T2JqZWN0LmFzc2lnbih7fSxpLGUse29wdGlvbnM6T2JqZWN0LmFzc2lnbih7fSxpLm9wdGlvbnMsZS5vcHRpb25zKSxkYXRhOk9iamVjdC5hc3NpZ24oe30saS5kYXRhLGUuZGF0YSl9KTplLHR9KSx7fSksT2JqZWN0LmtleXMoYykubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gY1t0XX0pKSkpO3JldHVybiBhLm9yZGVyZWRNb2RpZmllcnM9dS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmVuYWJsZWR9KSksYS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBlPXQubmFtZSxpPXQub3B0aW9ucyxuPXZvaWQgMD09PWk/e306aSxzPXQuZWZmZWN0O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHMpe3ZhciBvPXMoe3N0YXRlOmEsbmFtZTplLGluc3RhbmNlOmgsb3B0aW9uczpufSk7bC5wdXNoKG98fGZ1bmN0aW9uKCl7fSl9fSkpLGgudXBkYXRlKCl9LGZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7aWYoIWMpe3ZhciB0PWEuZWxlbWVudHMsZT10LnJlZmVyZW5jZSxpPXQucG9wcGVyO2lmKHBpKGUsaSkpe2EucmVjdHM9e3JlZmVyZW5jZTpkaShlLCRlKGkpLFwiZml4ZWRcIj09PWEub3B0aW9ucy5zdHJhdGVneSkscG9wcGVyOkNlKGkpfSxhLnJlc2V0PSExLGEucGxhY2VtZW50PWEub3B0aW9ucy5wbGFjZW1lbnQsYS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBhLm1vZGlmaWVyc0RhdGFbdC5uYW1lXT1PYmplY3QuYXNzaWduKHt9LHQuZGF0YSl9KSk7Zm9yKHZhciBuPTA7bjxhLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoO24rKylpZighMCE9PWEucmVzZXQpe3ZhciBzPWEub3JkZXJlZE1vZGlmaWVyc1tuXSxvPXMuZm4scj1zLm9wdGlvbnMsbD12b2lkIDA9PT1yP3t9OnIsZD1zLm5hbWU7XCJmdW5jdGlvblwiPT10eXBlb2YgbyYmKGE9byh7c3RhdGU6YSxvcHRpb25zOmwsbmFtZTpkLGluc3RhbmNlOmh9KXx8YSl9ZWxzZSBhLnJlc2V0PSExLG49LTF9fX0sdXBkYXRlOihzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbih0KXtoLmZvcmNlVXBkYXRlKCksdChhKX0pKX0sZnVuY3Rpb24oKXtyZXR1cm4gcnx8KHI9bmV3IFByb21pc2UoKGZ1bmN0aW9uKHQpe1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7cj12b2lkIDAsdChzKCkpfSkpfSkpKSxyfSksZGVzdHJveTpmdW5jdGlvbigpe2QoKSxjPSEwfX07aWYoIXBpKHQsZSkpcmV0dXJuIGg7ZnVuY3Rpb24gZCgpe2wuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQoKX0pKSxsPVtdfXJldHVybiBoLnNldE9wdGlvbnMoaSkudGhlbigoZnVuY3Rpb24odCl7IWMmJmkub25GaXJzdFVwZGF0ZSYmaS5vbkZpcnN0VXBkYXRlKHQpfSkpLGh9fXZhciBnaT1taSgpLF9pPW1pKHtkZWZhdWx0TW9kaWZpZXJzOltSZSxjaSxCZSxfZV19KSxiaT1taSh7ZGVmYXVsdE1vZGlmaWVyczpbUmUsY2ksQmUsX2UsbGksc2ksaGksamUsYWldfSk7Y29uc3Qgdmk9T2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydHkoe19fcHJvdG9fXzpudWxsLGFmdGVyTWFpbjphZSxhZnRlclJlYWQ6c2UsYWZ0ZXJXcml0ZTpoZSxhcHBseVN0eWxlczpfZSxhcnJvdzpqZSxhdXRvOkt0LGJhc2VQbGFjZW1lbnRzOlF0LGJlZm9yZU1haW46b2UsYmVmb3JlUmVhZDppZSxiZWZvcmVXcml0ZTpsZSxib3R0b206UnQsY2xpcHBpbmdQYXJlbnRzOlV0LGNvbXB1dGVTdHlsZXM6QmUsY3JlYXRlUG9wcGVyOmJpLGNyZWF0ZVBvcHBlckJhc2U6Z2ksY3JlYXRlUG9wcGVyTGl0ZTpfaSxkZXRlY3RPdmVyZmxvdzppaSxlbmQ6WXQsZXZlbnRMaXN0ZW5lcnM6UmUsZmxpcDpzaSxoaWRlOmFpLGxlZnQ6VnQsbWFpbjpyZSxtb2RpZmllclBoYXNlczpkZSxvZmZzZXQ6bGkscGxhY2VtZW50czplZSxwb3BwZXI6SnQscG9wcGVyR2VuZXJhdG9yOm1pLHBvcHBlck9mZnNldHM6Y2kscHJldmVudE92ZXJmbG93OmhpLHJlYWQ6bmUscmVmZXJlbmNlOlp0LHJpZ2h0OnF0LHN0YXJ0Olh0LHRvcDp6dCx2YXJpYXRpb25QbGFjZW1lbnRzOnRlLHZpZXdwb3J0Okd0LHdyaXRlOmNlfSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSkseWk9XCJkcm9wZG93blwiLHdpPVwiLmJzLmRyb3Bkb3duXCIsQWk9XCIuZGF0YS1hcGlcIixFaT1cIkFycm93VXBcIixUaT1cIkFycm93RG93blwiLENpPWBoaWRlJHt3aX1gLE9pPWBoaWRkZW4ke3dpfWAseGk9YHNob3cke3dpfWAsa2k9YHNob3duJHt3aX1gLExpPWBjbGljayR7d2l9JHtBaX1gLFNpPWBrZXlkb3duJHt3aX0ke0FpfWAsRGk9YGtleXVwJHt3aX0ke0FpfWAsJGk9XCJzaG93XCIsSWk9J1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJyxOaT1gJHtJaX0uJHskaX1gLFBpPVwiLmRyb3Bkb3duLW1lbnVcIixNaT1wKCk/XCJ0b3AtZW5kXCI6XCJ0b3Atc3RhcnRcIixqaT1wKCk/XCJ0b3Atc3RhcnRcIjpcInRvcC1lbmRcIixGaT1wKCk/XCJib3R0b20tZW5kXCI6XCJib3R0b20tc3RhcnRcIixIaT1wKCk/XCJib3R0b20tc3RhcnRcIjpcImJvdHRvbS1lbmRcIixXaT1wKCk/XCJsZWZ0LXN0YXJ0XCI6XCJyaWdodC1zdGFydFwiLEJpPXAoKT9cInJpZ2h0LXN0YXJ0XCI6XCJsZWZ0LXN0YXJ0XCIsemk9e2F1dG9DbG9zZTohMCxib3VuZGFyeTpcImNsaXBwaW5nUGFyZW50c1wiLGRpc3BsYXk6XCJkeW5hbWljXCIsb2Zmc2V0OlswLDJdLHBvcHBlckNvbmZpZzpudWxsLHJlZmVyZW5jZTpcInRvZ2dsZVwifSxSaT17YXV0b0Nsb3NlOlwiKGJvb2xlYW58c3RyaW5nKVwiLGJvdW5kYXJ5OlwiKHN0cmluZ3xlbGVtZW50KVwiLGRpc3BsYXk6XCJzdHJpbmdcIixvZmZzZXQ6XCIoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKVwiLHBvcHBlckNvbmZpZzpcIihudWxsfG9iamVjdHxmdW5jdGlvbilcIixyZWZlcmVuY2U6XCIoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KVwifTtjbGFzcyBxaSBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX3BvcHBlcj1udWxsLHRoaXMuX3BhcmVudD10aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsdGhpcy5fbWVudT16Lm5leHQodGhpcy5fZWxlbWVudCxQaSlbMF18fHoucHJldih0aGlzLl9lbGVtZW50LFBpKVswXXx8ei5maW5kT25lKFBpLHRoaXMuX3BhcmVudCksdGhpcy5faW5OYXZiYXI9dGhpcy5fZGV0ZWN0TmF2YmFyKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIHppfXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gUml9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuIHlpfXRvZ2dsZSgpe3JldHVybiB0aGlzLl9pc1Nob3duKCk/dGhpcy5oaWRlKCk6dGhpcy5zaG93KCl9c2hvdygpe2lmKGwodGhpcy5fZWxlbWVudCl8fHRoaXMuX2lzU2hvd24oKSlyZXR1cm47Y29uc3QgdD17cmVsYXRlZFRhcmdldDp0aGlzLl9lbGVtZW50fTtpZighTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQseGksdCkuZGVmYXVsdFByZXZlbnRlZCl7aWYodGhpcy5fY3JlYXRlUG9wcGVyKCksXCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmIXRoaXMuX3BhcmVudC5jbG9zZXN0KFwiLm5hdmJhci1uYXZcIikpZm9yKGNvbnN0IHQgb2ZbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpTi5vbih0LFwibW91c2VvdmVyXCIsaCk7dGhpcy5fZWxlbWVudC5mb2N1cygpLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCEwKSx0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoJGkpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgkaSksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsa2ksdCl9fWhpZGUoKXtpZihsKHRoaXMuX2VsZW1lbnQpfHwhdGhpcy5faXNTaG93bigpKXJldHVybjtjb25zdCB0PXtyZWxhdGVkVGFyZ2V0OnRoaXMuX2VsZW1lbnR9O3RoaXMuX2NvbXBsZXRlSGlkZSh0KX1kaXNwb3NlKCl7dGhpcy5fcG9wcGVyJiZ0aGlzLl9wb3BwZXIuZGVzdHJveSgpLHN1cGVyLmRpc3Bvc2UoKX11cGRhdGUoKXt0aGlzLl9pbk5hdmJhcj10aGlzLl9kZXRlY3ROYXZiYXIoKSx0aGlzLl9wb3BwZXImJnRoaXMuX3BvcHBlci51cGRhdGUoKX1fY29tcGxldGVIaWRlKHQpe2lmKCFOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxDaSx0KS5kZWZhdWx0UHJldmVudGVkKXtpZihcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KWZvcihjb25zdCB0IG9mW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKU4ub2ZmKHQsXCJtb3VzZW92ZXJcIixoKTt0aGlzLl9wb3BwZXImJnRoaXMuX3BvcHBlci5kZXN0cm95KCksdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKCRpKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJGkpLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksRi5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsXCJwb3BwZXJcIiksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsT2ksdCl9fV9nZXRDb25maWcodCl7aWYoXCJvYmplY3RcIj09dHlwZW9mKHQ9c3VwZXIuX2dldENvbmZpZyh0KSkucmVmZXJlbmNlJiYhbyh0LnJlZmVyZW5jZSkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCl0aHJvdyBuZXcgVHlwZUVycm9yKGAke3lpLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApO3JldHVybiB0fV9jcmVhdGVQb3BwZXIoKXtpZih2b2lkIDA9PT12aSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQm9vdHN0cmFwJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpXCIpO2xldCB0PXRoaXMuX2VsZW1lbnQ7XCJwYXJlbnRcIj09PXRoaXMuX2NvbmZpZy5yZWZlcmVuY2U/dD10aGlzLl9wYXJlbnQ6byh0aGlzLl9jb25maWcucmVmZXJlbmNlKT90PXIodGhpcy5fY29uZmlnLnJlZmVyZW5jZSk6XCJvYmplY3RcIj09dHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UmJih0PXRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpO2NvbnN0IGU9dGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCk7dGhpcy5fcG9wcGVyPWJpKHQsdGhpcy5fbWVudSxlKX1faXNTaG93bigpe3JldHVybiB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucygkaSl9X2dldFBsYWNlbWVudCgpe2NvbnN0IHQ9dGhpcy5fcGFyZW50O2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGVuZFwiKSlyZXR1cm4gV2k7aWYodC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wc3RhcnRcIikpcmV0dXJuIEJpO2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcHVwLWNlbnRlclwiKSlyZXR1cm5cInRvcFwiO2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tY2VudGVyXCIpKXJldHVyblwiYm90dG9tXCI7Y29uc3QgZT1cImVuZFwiPT09Z2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9tZW51KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1icy1wb3NpdGlvblwiKS50cmltKCk7cmV0dXJuIHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcHVwXCIpP2U/amk6TWk6ZT9IaTpGaX1fZGV0ZWN0TmF2YmFyKCl7cmV0dXJuIG51bGwhPT10aGlzLl9lbGVtZW50LmNsb3Nlc3QoXCIubmF2YmFyXCIpfV9nZXRPZmZzZXQoKXtjb25zdHtvZmZzZXQ6dH09dGhpcy5fY29uZmlnO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P3Quc3BsaXQoXCIsXCIpLm1hcCgodD0+TnVtYmVyLnBhcnNlSW50KHQsMTApKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgdD9lPT50KGUsdGhpcy5fZWxlbWVudCk6dH1fZ2V0UG9wcGVyQ29uZmlnKCl7Y29uc3QgdD17cGxhY2VtZW50OnRoaXMuX2dldFBsYWNlbWVudCgpLG1vZGlmaWVyczpbe25hbWU6XCJwcmV2ZW50T3ZlcmZsb3dcIixvcHRpb25zOntib3VuZGFyeTp0aGlzLl9jb25maWcuYm91bmRhcnl9fSx7bmFtZTpcIm9mZnNldFwiLG9wdGlvbnM6e29mZnNldDp0aGlzLl9nZXRPZmZzZXQoKX19XX07cmV0dXJuKHRoaXMuX2luTmF2YmFyfHxcInN0YXRpY1wiPT09dGhpcy5fY29uZmlnLmRpc3BsYXkpJiYoRi5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsXCJwb3BwZXJcIixcInN0YXRpY1wiKSx0Lm1vZGlmaWVycz1be25hbWU6XCJhcHBseVN0eWxlc1wiLGVuYWJsZWQ6ITF9XSksey4uLnQsLi4uZyh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLFt0XSl9fV9zZWxlY3RNZW51SXRlbSh7a2V5OnQsdGFyZ2V0OmV9KXtjb25zdCBpPXouZmluZChcIi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpXCIsdGhpcy5fbWVudSkuZmlsdGVyKCh0PT5hKHQpKSk7aS5sZW5ndGgmJmIoaSxlLHQ9PT1UaSwhaS5pbmNsdWRlcyhlKSkuZm9jdXMoKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1xaS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF0pdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSgpfX0pKX1zdGF0aWMgY2xlYXJNZW51cyh0KXtpZigyPT09dC5idXR0b258fFwia2V5dXBcIj09PXQudHlwZSYmXCJUYWJcIiE9PXQua2V5KXJldHVybjtjb25zdCBlPXouZmluZChOaSk7Zm9yKGNvbnN0IGkgb2YgZSl7Y29uc3QgZT1xaS5nZXRJbnN0YW5jZShpKTtpZighZXx8ITE9PT1lLl9jb25maWcuYXV0b0Nsb3NlKWNvbnRpbnVlO2NvbnN0IG49dC5jb21wb3NlZFBhdGgoKSxzPW4uaW5jbHVkZXMoZS5fbWVudSk7aWYobi5pbmNsdWRlcyhlLl9lbGVtZW50KXx8XCJpbnNpZGVcIj09PWUuX2NvbmZpZy5hdXRvQ2xvc2UmJiFzfHxcIm91dHNpZGVcIj09PWUuX2NvbmZpZy5hdXRvQ2xvc2UmJnMpY29udGludWU7aWYoZS5fbWVudS5jb250YWlucyh0LnRhcmdldCkmJihcImtleXVwXCI9PT10LnR5cGUmJlwiVGFiXCI9PT10LmtleXx8L2lucHV0fHNlbGVjdHxvcHRpb258dGV4dGFyZWF8Zm9ybS9pLnRlc3QodC50YXJnZXQudGFnTmFtZSkpKWNvbnRpbnVlO2NvbnN0IG89e3JlbGF0ZWRUYXJnZXQ6ZS5fZWxlbWVudH07XCJjbGlja1wiPT09dC50eXBlJiYoby5jbGlja0V2ZW50PXQpLGUuX2NvbXBsZXRlSGlkZShvKX19c3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcih0KXtjb25zdCBlPS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QodC50YXJnZXQudGFnTmFtZSksaT1cIkVzY2FwZVwiPT09dC5rZXksbj1bRWksVGldLmluY2x1ZGVzKHQua2V5KTtpZighbiYmIWkpcmV0dXJuO2lmKGUmJiFpKXJldHVybjt0LnByZXZlbnREZWZhdWx0KCk7Y29uc3Qgcz10aGlzLm1hdGNoZXMoSWkpP3RoaXM6ei5wcmV2KHRoaXMsSWkpWzBdfHx6Lm5leHQodGhpcyxJaSlbMF18fHouZmluZE9uZShJaSx0LmRlbGVnYXRlVGFyZ2V0LnBhcmVudE5vZGUpLG89cWkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzKTtpZihuKXJldHVybiB0LnN0b3BQcm9wYWdhdGlvbigpLG8uc2hvdygpLHZvaWQgby5fc2VsZWN0TWVudUl0ZW0odCk7by5faXNTaG93bigpJiYodC5zdG9wUHJvcGFnYXRpb24oKSxvLmhpZGUoKSxzLmZvY3VzKCkpfX1OLm9uKGRvY3VtZW50LFNpLElpLHFpLmRhdGFBcGlLZXlkb3duSGFuZGxlciksTi5vbihkb2N1bWVudCxTaSxQaSxxaS5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpLE4ub24oZG9jdW1lbnQsTGkscWkuY2xlYXJNZW51cyksTi5vbihkb2N1bWVudCxEaSxxaS5jbGVhck1lbnVzKSxOLm9uKGRvY3VtZW50LExpLElpLChmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCkscWkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS50b2dnbGUoKX0pKSxtKHFpKTtjb25zdCBWaT1cImJhY2tkcm9wXCIsS2k9XCJzaG93XCIsUWk9YG1vdXNlZG93bi5icy4ke1ZpfWAsWGk9e2NsYXNzTmFtZTpcIm1vZGFsLWJhY2tkcm9wXCIsY2xpY2tDYWxsYmFjazpudWxsLGlzQW5pbWF0ZWQ6ITEsaXNWaXNpYmxlOiEwLHJvb3RFbGVtZW50OlwiYm9keVwifSxZaT17Y2xhc3NOYW1lOlwic3RyaW5nXCIsY2xpY2tDYWxsYmFjazpcIihmdW5jdGlvbnxudWxsKVwiLGlzQW5pbWF0ZWQ6XCJib29sZWFuXCIsaXNWaXNpYmxlOlwiYm9vbGVhblwiLHJvb3RFbGVtZW50OlwiKGVsZW1lbnR8c3RyaW5nKVwifTtjbGFzcyBVaSBleHRlbmRzIEh7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLl9jb25maWc9dGhpcy5fZ2V0Q29uZmlnKHQpLHRoaXMuX2lzQXBwZW5kZWQ9ITEsdGhpcy5fZWxlbWVudD1udWxsfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBYaX1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIFlpfXN0YXRpYyBnZXQgTkFNRSgpe3JldHVybiBWaX1zaG93KHQpe2lmKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKXJldHVybiB2b2lkIGcodCk7dGhpcy5fYXBwZW5kKCk7Y29uc3QgZT10aGlzLl9nZXRFbGVtZW50KCk7dGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQmJmQoZSksZS5jbGFzc0xpc3QuYWRkKEtpKSx0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgoKT0+e2codCl9KSl9aGlkZSh0KXt0aGlzLl9jb25maWcuaXNWaXNpYmxlPyh0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShLaSksdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKCk9Pnt0aGlzLmRpc3Bvc2UoKSxnKHQpfSkpKTpnKHQpfWRpc3Bvc2UoKXt0aGlzLl9pc0FwcGVuZGVkJiYoTi5vZmYodGhpcy5fZWxlbWVudCxRaSksdGhpcy5fZWxlbWVudC5yZW1vdmUoKSx0aGlzLl9pc0FwcGVuZGVkPSExKX1fZ2V0RWxlbWVudCgpe2lmKCF0aGlzLl9lbGVtZW50KXtjb25zdCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc05hbWU9dGhpcy5fY29uZmlnLmNsYXNzTmFtZSx0aGlzLl9jb25maWcuaXNBbmltYXRlZCYmdC5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKSx0aGlzLl9lbGVtZW50PXR9cmV0dXJuIHRoaXMuX2VsZW1lbnR9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQucm9vdEVsZW1lbnQ9cih0LnJvb3RFbGVtZW50KSx0fV9hcHBlbmQoKXtpZih0aGlzLl9pc0FwcGVuZGVkKXJldHVybjtjb25zdCB0PXRoaXMuX2dldEVsZW1lbnQoKTt0aGlzLl9jb25maWcucm9vdEVsZW1lbnQuYXBwZW5kKHQpLE4ub24odCxRaSwoKCk9PntnKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKX0pKSx0aGlzLl9pc0FwcGVuZGVkPSEwfV9lbXVsYXRlQW5pbWF0aW9uKHQpe18odCx0aGlzLl9nZXRFbGVtZW50KCksdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpfX1jb25zdCBHaT1cIi5icy5mb2N1c3RyYXBcIixKaT1gZm9jdXNpbiR7R2l9YCxaaT1ga2V5ZG93bi50YWIke0dpfWAsdG49XCJiYWNrd2FyZFwiLGVuPXthdXRvZm9jdXM6ITAsdHJhcEVsZW1lbnQ6bnVsbH0sbm49e2F1dG9mb2N1czpcImJvb2xlYW5cIix0cmFwRWxlbWVudDpcImVsZW1lbnRcIn07Y2xhc3Mgc24gZXh0ZW5kcyBIe2NvbnN0cnVjdG9yKHQpe3N1cGVyKCksdGhpcy5fY29uZmlnPXRoaXMuX2dldENvbmZpZyh0KSx0aGlzLl9pc0FjdGl2ZT0hMSx0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uPW51bGx9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIGVufXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gbm59c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJmb2N1c3RyYXBcIn1hY3RpdmF0ZSgpe3RoaXMuX2lzQWN0aXZlfHwodGhpcy5fY29uZmlnLmF1dG9mb2N1cyYmdGhpcy5fY29uZmlnLnRyYXBFbGVtZW50LmZvY3VzKCksTi5vZmYoZG9jdW1lbnQsR2kpLE4ub24oZG9jdW1lbnQsSmksKHQ9PnRoaXMuX2hhbmRsZUZvY3VzaW4odCkpKSxOLm9uKGRvY3VtZW50LFppLCh0PT50aGlzLl9oYW5kbGVLZXlkb3duKHQpKSksdGhpcy5faXNBY3RpdmU9ITApfWRlYWN0aXZhdGUoKXt0aGlzLl9pc0FjdGl2ZSYmKHRoaXMuX2lzQWN0aXZlPSExLE4ub2ZmKGRvY3VtZW50LEdpKSl9X2hhbmRsZUZvY3VzaW4odCl7Y29uc3R7dHJhcEVsZW1lbnQ6ZX09dGhpcy5fY29uZmlnO2lmKHQudGFyZ2V0PT09ZG9jdW1lbnR8fHQudGFyZ2V0PT09ZXx8ZS5jb250YWlucyh0LnRhcmdldCkpcmV0dXJuO2NvbnN0IGk9ei5mb2N1c2FibGVDaGlsZHJlbihlKTswPT09aS5sZW5ndGg/ZS5mb2N1cygpOnRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb249PT10bj9pW2kubGVuZ3RoLTFdLmZvY3VzKCk6aVswXS5mb2N1cygpfV9oYW5kbGVLZXlkb3duKHQpe1wiVGFiXCI9PT10LmtleSYmKHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb249dC5zaGlmdEtleT90bjpcImZvcndhcmRcIil9fWNvbnN0IG9uPVwiLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcFwiLHJuPVwiLnN0aWNreS10b3BcIixhbj1cInBhZGRpbmctcmlnaHRcIixsbj1cIm1hcmdpbi1yaWdodFwiO2NsYXNzIGNue2NvbnN0cnVjdG9yKCl7dGhpcy5fZWxlbWVudD1kb2N1bWVudC5ib2R5fWdldFdpZHRoKCl7Y29uc3QgdD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7cmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoLXQpfWhpZGUoKXtjb25zdCB0PXRoaXMuZ2V0V2lkdGgoKTt0aGlzLl9kaXNhYmxlT3ZlckZsb3coKSx0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LGFuLChlPT5lK3QpKSx0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhvbixhbiwoZT0+ZSt0KSksdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMocm4sbG4sKGU9PmUtdCkpfXJlc2V0KCl7dGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LFwib3ZlcmZsb3dcIiksdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LGFuKSx0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKG9uLGFuKSx0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHJuLGxuKX1pc092ZXJmbG93aW5nKCl7cmV0dXJuIHRoaXMuZ2V0V2lkdGgoKT4wfV9kaXNhYmxlT3ZlckZsb3coKXt0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50LFwib3ZlcmZsb3dcIiksdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwifV9zZXRFbGVtZW50QXR0cmlidXRlcyh0LGUsaSl7Y29uc3Qgbj10aGlzLmdldFdpZHRoKCk7dGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayh0LCh0PT57aWYodCE9PXRoaXMuX2VsZW1lbnQmJndpbmRvdy5pbm5lcldpZHRoPnQuY2xpZW50V2lkdGgrbilyZXR1cm47dGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodCxlKTtjb25zdCBzPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLmdldFByb3BlcnR5VmFsdWUoZSk7dC5zdHlsZS5zZXRQcm9wZXJ0eShlLGAke2koTnVtYmVyLnBhcnNlRmxvYXQocykpfXB4YCl9KSl9X3NhdmVJbml0aWFsQXR0cmlidXRlKHQsZSl7Y29uc3QgaT10LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoZSk7aSYmRi5zZXREYXRhQXR0cmlidXRlKHQsZSxpKX1fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0LGUpe3RoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2sodCwodD0+e2NvbnN0IGk9Ri5nZXREYXRhQXR0cmlidXRlKHQsZSk7bnVsbCE9PWk/KEYucmVtb3ZlRGF0YUF0dHJpYnV0ZSh0LGUpLHQuc3R5bGUuc2V0UHJvcGVydHkoZSxpKSk6dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShlKX0pKX1fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayh0LGUpe2lmKG8odCkpZSh0KTtlbHNlIGZvcihjb25zdCBpIG9mIHouZmluZCh0LHRoaXMuX2VsZW1lbnQpKWUoaSl9fWNvbnN0IGhuPVwiLmJzLm1vZGFsXCIsZG49YGhpZGUke2hufWAsdW49YGhpZGVQcmV2ZW50ZWQke2hufWAsZm49YGhpZGRlbiR7aG59YCxwbj1gc2hvdyR7aG59YCxtbj1gc2hvd24ke2hufWAsZ249YHJlc2l6ZSR7aG59YCxfbj1gY2xpY2suZGlzbWlzcyR7aG59YCxibj1gbW91c2Vkb3duLmRpc21pc3Mke2hufWAsdm49YGtleWRvd24uZGlzbWlzcyR7aG59YCx5bj1gY2xpY2ske2hufS5kYXRhLWFwaWAsd249XCJtb2RhbC1vcGVuXCIsQW49XCJzaG93XCIsRW49XCJtb2RhbC1zdGF0aWNcIixUbj17YmFja2Ryb3A6ITAsZm9jdXM6ITAsa2V5Ym9hcmQ6ITB9LENuPXtiYWNrZHJvcDpcIihib29sZWFufHN0cmluZylcIixmb2N1czpcImJvb2xlYW5cIixrZXlib2FyZDpcImJvb2xlYW5cIn07Y2xhc3MgT24gZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl9kaWFsb2c9ei5maW5kT25lKFwiLm1vZGFsLWRpYWxvZ1wiLHRoaXMuX2VsZW1lbnQpLHRoaXMuX2JhY2tkcm9wPXRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpLHRoaXMuX2ZvY3VzdHJhcD10aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKCksdGhpcy5faXNTaG93bj0hMSx0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITEsdGhpcy5fc2Nyb2xsQmFyPW5ldyBjbix0aGlzLl9hZGRFdmVudExpc3RlbmVycygpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBUbn1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIENufXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwibW9kYWxcIn10b2dnbGUodCl7cmV0dXJuIHRoaXMuX2lzU2hvd24/dGhpcy5oaWRlKCk6dGhpcy5zaG93KHQpfXNob3codCl7dGhpcy5faXNTaG93bnx8dGhpcy5faXNUcmFuc2l0aW9uaW5nfHxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxwbix7cmVsYXRlZFRhcmdldDp0fSkuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2lzU2hvd249ITAsdGhpcy5faXNUcmFuc2l0aW9uaW5nPSEwLHRoaXMuX3Njcm9sbEJhci5oaWRlKCksZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHduKSx0aGlzLl9hZGp1c3REaWFsb2coKSx0aGlzLl9iYWNrZHJvcC5zaG93KCgoKT0+dGhpcy5fc2hvd0VsZW1lbnQodCkpKSl9aGlkZSgpe3RoaXMuX2lzU2hvd24mJiF0aGlzLl9pc1RyYW5zaXRpb25pbmcmJihOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxkbikuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2lzU2hvd249ITEsdGhpcy5faXNUcmFuc2l0aW9uaW5nPSEwLHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEFuKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+dGhpcy5faGlkZU1vZGFsKCkpLHRoaXMuX2VsZW1lbnQsdGhpcy5faXNBbmltYXRlZCgpKSkpfWRpc3Bvc2UoKXtOLm9mZih3aW5kb3csaG4pLE4ub2ZmKHRoaXMuX2RpYWxvZyxobiksdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpLHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCksc3VwZXIuZGlzcG9zZSgpfWhhbmRsZVVwZGF0ZSgpe3RoaXMuX2FkanVzdERpYWxvZygpfV9pbml0aWFsaXplQmFja0Ryb3AoKXtyZXR1cm4gbmV3IFVpKHtpc1Zpc2libGU6Qm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApLGlzQW5pbWF0ZWQ6dGhpcy5faXNBbmltYXRlZCgpfSl9X2luaXRpYWxpemVGb2N1c1RyYXAoKXtyZXR1cm4gbmV3IHNuKHt0cmFwRWxlbWVudDp0aGlzLl9lbGVtZW50fSl9X3Nob3dFbGVtZW50KHQpe2RvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5fZWxlbWVudCl8fGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuX2VsZW1lbnQpLHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbW9kYWxcIiwhMCksdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkaWFsb2dcIiksdGhpcy5fZWxlbWVudC5zY3JvbGxUb3A9MDtjb25zdCBlPXouZmluZE9uZShcIi5tb2RhbC1ib2R5XCIsdGhpcy5fZGlhbG9nKTtlJiYoZS5zY3JvbGxUb3A9MCksZCh0aGlzLl9lbGVtZW50KSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQW4pLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57dGhpcy5fY29uZmlnLmZvY3VzJiZ0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKSx0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITEsTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsbW4se3JlbGF0ZWRUYXJnZXQ6dH0pfSksdGhpcy5fZGlhbG9nLHRoaXMuX2lzQW5pbWF0ZWQoKSl9X2FkZEV2ZW50TGlzdGVuZXJzKCl7Ti5vbih0aGlzLl9lbGVtZW50LHZuLCh0PT57XCJFc2NhcGVcIj09PXQua2V5JiYodGhpcy5fY29uZmlnLmtleWJvYXJkP3RoaXMuaGlkZSgpOnRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSl9KSksTi5vbih3aW5kb3csZ24sKCgpPT57dGhpcy5faXNTaG93biYmIXRoaXMuX2lzVHJhbnNpdGlvbmluZyYmdGhpcy5fYWRqdXN0RGlhbG9nKCl9KSksTi5vbih0aGlzLl9lbGVtZW50LGJuLCh0PT57Ti5vbmUodGhpcy5fZWxlbWVudCxfbiwoZT0+e3RoaXMuX2VsZW1lbnQ9PT10LnRhcmdldCYmdGhpcy5fZWxlbWVudD09PWUudGFyZ2V0JiYoXCJzdGF0aWNcIiE9PXRoaXMuX2NvbmZpZy5iYWNrZHJvcD90aGlzLl9jb25maWcuYmFja2Ryb3AmJnRoaXMuaGlkZSgpOnRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSl9KSl9KSl9X2hpZGVNb2RhbCgpe3RoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsITApLHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1tb2RhbFwiKSx0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInJvbGVcIiksdGhpcy5faXNUcmFuc2l0aW9uaW5nPSExLHRoaXMuX2JhY2tkcm9wLmhpZGUoKCgpPT57ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHduKSx0aGlzLl9yZXNldEFkanVzdG1lbnRzKCksdGhpcy5fc2Nyb2xsQmFyLnJlc2V0KCksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsZm4pfSkpfV9pc0FuaW1hdGVkKCl7cmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFkZVwiKX1fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpe2lmKE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LHVuKS5kZWZhdWx0UHJldmVudGVkKXJldHVybjtjb25zdCB0PXRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsZT10aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WTtcImhpZGRlblwiPT09ZXx8dGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoRW4pfHwodHx8KHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZPVwiaGlkZGVuXCIpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChFbiksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoRW4pLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57dGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9ZX0pLHRoaXMuX2RpYWxvZyl9KSx0aGlzLl9kaWFsb2cpLHRoaXMuX2VsZW1lbnQuZm9jdXMoKSl9X2FkanVzdERpYWxvZygpe2NvbnN0IHQ9dGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQ+ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxlPXRoaXMuX3Njcm9sbEJhci5nZXRXaWR0aCgpLGk9ZT4wO2lmKGkmJiF0KXtjb25zdCB0PXAoKT9cInBhZGRpbmdMZWZ0XCI6XCJwYWRkaW5nUmlnaHRcIjt0aGlzLl9lbGVtZW50LnN0eWxlW3RdPWAke2V9cHhgfWlmKCFpJiZ0KXtjb25zdCB0PXAoKT9cInBhZGRpbmdSaWdodFwiOlwicGFkZGluZ0xlZnRcIjt0aGlzLl9lbGVtZW50LnN0eWxlW3RdPWAke2V9cHhgfX1fcmVzZXRBZGp1c3RtZW50cygpe3RoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQ9XCJcIix0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodD1cIlwifXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCxlKXtyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGk9T24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLHQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1pW3RdKXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2lbdF0oZSl9fSkpfX1OLm9uKGRvY3VtZW50LHluLCdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXScsKGZ1bmN0aW9uKHQpe2NvbnN0IGU9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpO1tcIkFcIixcIkFSRUFcIl0uaW5jbHVkZXModGhpcy50YWdOYW1lKSYmdC5wcmV2ZW50RGVmYXVsdCgpLE4ub25lKGUscG4sKHQ9Pnt0LmRlZmF1bHRQcmV2ZW50ZWR8fE4ub25lKGUsZm4sKCgpPT57YSh0aGlzKSYmdGhpcy5mb2N1cygpfSkpfSkpO2NvbnN0IGk9ei5maW5kT25lKFwiLm1vZGFsLnNob3dcIik7aSYmT24uZ2V0SW5zdGFuY2UoaSkuaGlkZSgpLE9uLmdldE9yQ3JlYXRlSW5zdGFuY2UoZSkudG9nZ2xlKHRoaXMpfSkpLFIoT24pLG0oT24pO2NvbnN0IHhuPVwiLmJzLm9mZmNhbnZhc1wiLGtuPVwiLmRhdGEtYXBpXCIsTG49YGxvYWQke3hufSR7a259YCxTbj1cInNob3dcIixEbj1cInNob3dpbmdcIiwkbj1cImhpZGluZ1wiLEluPVwiLm9mZmNhbnZhcy5zaG93XCIsTm49YHNob3cke3hufWAsUG49YHNob3duJHt4bn1gLE1uPWBoaWRlJHt4bn1gLGpuPWBoaWRlUHJldmVudGVkJHt4bn1gLEZuPWBoaWRkZW4ke3hufWAsSG49YHJlc2l6ZSR7eG59YCxXbj1gY2xpY2ske3hufSR7a259YCxCbj1ga2V5ZG93bi5kaXNtaXNzJHt4bn1gLHpuPXtiYWNrZHJvcDohMCxrZXlib2FyZDohMCxzY3JvbGw6ITF9LFJuPXtiYWNrZHJvcDpcIihib29sZWFufHN0cmluZylcIixrZXlib2FyZDpcImJvb2xlYW5cIixzY3JvbGw6XCJib29sZWFuXCJ9O2NsYXNzIHFuIGV4dGVuZHMgV3tjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSksdGhpcy5faXNTaG93bj0hMSx0aGlzLl9iYWNrZHJvcD10aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKSx0aGlzLl9mb2N1c3RyYXA9dGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpLHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIHpufXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gUm59c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJvZmZjYW52YXNcIn10b2dnbGUodCl7cmV0dXJuIHRoaXMuX2lzU2hvd24/dGhpcy5oaWRlKCk6dGhpcy5zaG93KHQpfXNob3codCl7dGhpcy5faXNTaG93bnx8Ti50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsTm4se3JlbGF0ZWRUYXJnZXQ6dH0pLmRlZmF1bHRQcmV2ZW50ZWR8fCh0aGlzLl9pc1Nob3duPSEwLHRoaXMuX2JhY2tkcm9wLnNob3coKSx0aGlzLl9jb25maWcuc2Nyb2xsfHwobmV3IGNuKS5oaWRlKCksdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLW1vZGFsXCIsITApLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwiZGlhbG9nXCIpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChEbiksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9jb25maWcuc2Nyb2xsJiYhdGhpcy5fY29uZmlnLmJhY2tkcm9wfHx0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoU24pLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShEbiksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsUG4se3JlbGF0ZWRUYXJnZXQ6dH0pfSksdGhpcy5fZWxlbWVudCwhMCkpfWhpZGUoKXt0aGlzLl9pc1Nob3duJiYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsTW4pLmRlZmF1bHRQcmV2ZW50ZWR8fCh0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpLHRoaXMuX2VsZW1lbnQuYmx1cigpLHRoaXMuX2lzU2hvd249ITEsdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKCRuKSx0aGlzLl9iYWNrZHJvcC5oaWRlKCksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoU24sJG4pLHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1tb2RhbFwiKSx0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInJvbGVcIiksdGhpcy5fY29uZmlnLnNjcm9sbHx8KG5ldyBjbikucmVzZXQoKSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxGbil9KSx0aGlzLl9lbGVtZW50LCEwKSkpfWRpc3Bvc2UoKXt0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKCksdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKSxzdXBlci5kaXNwb3NlKCl9X2luaXRpYWxpemVCYWNrRHJvcCgpe2NvbnN0IHQ9Qm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApO3JldHVybiBuZXcgVWkoe2NsYXNzTmFtZTpcIm9mZmNhbnZhcy1iYWNrZHJvcFwiLGlzVmlzaWJsZTp0LGlzQW5pbWF0ZWQ6ITAscm9vdEVsZW1lbnQ6dGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLGNsaWNrQ2FsbGJhY2s6dD8oKT0+e1wic3RhdGljXCIhPT10aGlzLl9jb25maWcuYmFja2Ryb3A/dGhpcy5oaWRlKCk6Ti50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsam4pfTpudWxsfSl9X2luaXRpYWxpemVGb2N1c1RyYXAoKXtyZXR1cm4gbmV3IHNuKHt0cmFwRWxlbWVudDp0aGlzLl9lbGVtZW50fSl9X2FkZEV2ZW50TGlzdGVuZXJzKCl7Ti5vbih0aGlzLl9lbGVtZW50LEJuLCh0PT57XCJFc2NhcGVcIj09PXQua2V5JiYodGhpcy5fY29uZmlnLmtleWJvYXJkP3RoaXMuaGlkZSgpOk4udHJpZ2dlcih0aGlzLl9lbGVtZW50LGpuKSl9KSl9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGU9cW4uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLHQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdfHx0LnN0YXJ0c1dpdGgoXCJfXCIpfHxcImNvbnN0cnVjdG9yXCI9PT10KXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0odGhpcyl9fSkpfX1OLm9uKGRvY3VtZW50LFduLCdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nLChmdW5jdGlvbih0KXtjb25zdCBlPXouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtpZihbXCJBXCIsXCJBUkVBXCJdLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkmJnQucHJldmVudERlZmF1bHQoKSxsKHRoaXMpKXJldHVybjtOLm9uZShlLEZuLCgoKT0+e2EodGhpcykmJnRoaXMuZm9jdXMoKX0pKTtjb25zdCBpPXouZmluZE9uZShJbik7aSYmaSE9PWUmJnFuLmdldEluc3RhbmNlKGkpLmhpZGUoKSxxbi5nZXRPckNyZWF0ZUluc3RhbmNlKGUpLnRvZ2dsZSh0aGlzKX0pKSxOLm9uKHdpbmRvdyxMbiwoKCk9Pntmb3IoY29uc3QgdCBvZiB6LmZpbmQoSW4pKXFuLmdldE9yQ3JlYXRlSW5zdGFuY2UodCkuc2hvdygpfSkpLE4ub24od2luZG93LEhuLCgoKT0+e2Zvcihjb25zdCB0IG9mIHouZmluZChcIlthcmlhLW1vZGFsXVtjbGFzcyo9c2hvd11bY2xhc3MqPW9mZmNhbnZhcy1dXCIpKVwiZml4ZWRcIiE9PWdldENvbXB1dGVkU3R5bGUodCkucG9zaXRpb24mJnFuLmdldE9yQ3JlYXRlSW5zdGFuY2UodCkuaGlkZSgpfSkpLFIocW4pLG0ocW4pO2NvbnN0IFZuPXtcIipcIjpbXCJjbGFzc1wiLFwiZGlyXCIsXCJpZFwiLFwibGFuZ1wiLFwicm9sZVwiLC9eYXJpYS1bXFx3LV0qJC9pXSxhOltcInRhcmdldFwiLFwiaHJlZlwiLFwidGl0bGVcIixcInJlbFwiXSxhcmVhOltdLGI6W10sYnI6W10sY29sOltdLGNvZGU6W10sZGl2OltdLGVtOltdLGhyOltdLGgxOltdLGgyOltdLGgzOltdLGg0OltdLGg1OltdLGg2OltdLGk6W10saW1nOltcInNyY1wiLFwic3Jjc2V0XCIsXCJhbHRcIixcInRpdGxlXCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGxpOltdLG9sOltdLHA6W10scHJlOltdLHM6W10sc21hbGw6W10sc3BhbjpbXSxzdWI6W10sc3VwOltdLHN0cm9uZzpbXSx1OltdLHVsOltdfSxLbj1uZXcgU2V0KFtcImJhY2tncm91bmRcIixcImNpdGVcIixcImhyZWZcIixcIml0ZW10eXBlXCIsXCJsb25nZGVzY1wiLFwicG9zdGVyXCIsXCJzcmNcIixcInhsaW5rOmhyZWZcIl0pLFFuPS9eKD8hamF2YXNjcmlwdDopKD86W2EtejAtOSsuLV0rOnxbXiY6Lz8jXSooPzpbLz8jXXwkKSkvaSxYbj0odCxlKT0+e2NvbnN0IGk9dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBlLmluY2x1ZGVzKGkpPyFLbi5oYXMoaSl8fEJvb2xlYW4oUW4udGVzdCh0Lm5vZGVWYWx1ZSkpOmUuZmlsdGVyKCh0PT50IGluc3RhbmNlb2YgUmVnRXhwKSkuc29tZSgodD0+dC50ZXN0KGkpKSl9LFluPXthbGxvd0xpc3Q6Vm4sY29udGVudDp7fSxleHRyYUNsYXNzOlwiXCIsaHRtbDohMSxzYW5pdGl6ZTohMCxzYW5pdGl6ZUZuOm51bGwsdGVtcGxhdGU6XCI8ZGl2PjwvZGl2PlwifSxVbj17YWxsb3dMaXN0Olwib2JqZWN0XCIsY29udGVudDpcIm9iamVjdFwiLGV4dHJhQ2xhc3M6XCIoc3RyaW5nfGZ1bmN0aW9uKVwiLGh0bWw6XCJib29sZWFuXCIsc2FuaXRpemU6XCJib29sZWFuXCIsc2FuaXRpemVGbjpcIihudWxsfGZ1bmN0aW9uKVwiLHRlbXBsYXRlOlwic3RyaW5nXCJ9LEduPXtlbnRyeTpcIihzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbnxudWxsKVwiLHNlbGVjdG9yOlwiKHN0cmluZ3xlbGVtZW50KVwifTtjbGFzcyBKbiBleHRlbmRzIEh7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLl9jb25maWc9dGhpcy5fZ2V0Q29uZmlnKHQpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBZbn1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIFVufXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwiVGVtcGxhdGVGYWN0b3J5XCJ9Z2V0Q29udGVudCgpe3JldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KS5tYXAoKHQ9PnRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHQpKSkuZmlsdGVyKEJvb2xlYW4pfWhhc0NvbnRlbnQoKXtyZXR1cm4gdGhpcy5nZXRDb250ZW50KCkubGVuZ3RoPjB9Y2hhbmdlQ29udGVudCh0KXtyZXR1cm4gdGhpcy5fY2hlY2tDb250ZW50KHQpLHRoaXMuX2NvbmZpZy5jb250ZW50PXsuLi50aGlzLl9jb25maWcuY29udGVudCwuLi50fSx0aGlzfXRvSHRtbCgpe2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmlubmVySFRNTD10aGlzLl9tYXliZVNhbml0aXplKHRoaXMuX2NvbmZpZy50ZW1wbGF0ZSk7Zm9yKGNvbnN0W2UsaV1vZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcuY29udGVudCkpdGhpcy5fc2V0Q29udGVudCh0LGksZSk7Y29uc3QgZT10LmNoaWxkcmVuWzBdLGk9dGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmV4dHJhQ2xhc3MpO3JldHVybiBpJiZlLmNsYXNzTGlzdC5hZGQoLi4uaS5zcGxpdChcIiBcIikpLGV9X3R5cGVDaGVja0NvbmZpZyh0KXtzdXBlci5fdHlwZUNoZWNrQ29uZmlnKHQpLHRoaXMuX2NoZWNrQ29udGVudCh0LmNvbnRlbnQpfV9jaGVja0NvbnRlbnQodCl7Zm9yKGNvbnN0W2UsaV1vZiBPYmplY3QuZW50cmllcyh0KSlzdXBlci5fdHlwZUNoZWNrQ29uZmlnKHtzZWxlY3RvcjplLGVudHJ5Oml9LEduKX1fc2V0Q29udGVudCh0LGUsaSl7Y29uc3Qgbj16LmZpbmRPbmUoaSx0KTtuJiYoKGU9dGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oZSkpP28oZSk/dGhpcy5fcHV0RWxlbWVudEluVGVtcGxhdGUocihlKSxuKTp0aGlzLl9jb25maWcuaHRtbD9uLmlubmVySFRNTD10aGlzLl9tYXliZVNhbml0aXplKGUpOm4udGV4dENvbnRlbnQ9ZTpuLnJlbW92ZSgpKX1fbWF5YmVTYW5pdGl6ZSh0KXtyZXR1cm4gdGhpcy5fY29uZmlnLnNhbml0aXplP2Z1bmN0aW9uKHQsZSxpKXtpZighdC5sZW5ndGgpcmV0dXJuIHQ7aWYoaSYmXCJmdW5jdGlvblwiPT10eXBlb2YgaSlyZXR1cm4gaSh0KTtjb25zdCBuPShuZXcgd2luZG93LkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHQsXCJ0ZXh0L2h0bWxcIikscz1bXS5jb25jYXQoLi4ubi5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKTtmb3IoY29uc3QgdCBvZiBzKXtjb25zdCBpPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtpZighT2JqZWN0LmtleXMoZSkuaW5jbHVkZXMoaSkpe3QucmVtb3ZlKCk7Y29udGludWV9Y29uc3Qgbj1bXS5jb25jYXQoLi4udC5hdHRyaWJ1dGVzKSxzPVtdLmNvbmNhdChlW1wiKlwiXXx8W10sZVtpXXx8W10pO2Zvcihjb25zdCBlIG9mIG4pWG4oZSxzKXx8dC5yZW1vdmVBdHRyaWJ1dGUoZS5ub2RlTmFtZSl9cmV0dXJuIG4uYm9keS5pbm5lckhUTUx9KHQsdGhpcy5fY29uZmlnLmFsbG93TGlzdCx0aGlzLl9jb25maWcuc2FuaXRpemVGbik6dH1fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odCl7cmV0dXJuIGcodCxbdGhpc10pfV9wdXRFbGVtZW50SW5UZW1wbGF0ZSh0LGUpe2lmKHRoaXMuX2NvbmZpZy5odG1sKXJldHVybiBlLmlubmVySFRNTD1cIlwiLHZvaWQgZS5hcHBlbmQodCk7ZS50ZXh0Q29udGVudD10LnRleHRDb250ZW50fX1jb25zdCBabj1uZXcgU2V0KFtcInNhbml0aXplXCIsXCJhbGxvd0xpc3RcIixcInNhbml0aXplRm5cIl0pLHRzPVwiZmFkZVwiLGVzPVwic2hvd1wiLGlzPVwiLm1vZGFsXCIsbnM9XCJoaWRlLmJzLm1vZGFsXCIsc3M9XCJob3ZlclwiLG9zPVwiZm9jdXNcIixycz17QVVUTzpcImF1dG9cIixUT1A6XCJ0b3BcIixSSUdIVDpwKCk/XCJsZWZ0XCI6XCJyaWdodFwiLEJPVFRPTTpcImJvdHRvbVwiLExFRlQ6cCgpP1wicmlnaHRcIjpcImxlZnRcIn0sYXM9e2FsbG93TGlzdDpWbixhbmltYXRpb246ITAsYm91bmRhcnk6XCJjbGlwcGluZ1BhcmVudHNcIixjb250YWluZXI6ITEsY3VzdG9tQ2xhc3M6XCJcIixkZWxheTowLGZhbGxiYWNrUGxhY2VtZW50czpbXCJ0b3BcIixcInJpZ2h0XCIsXCJib3R0b21cIixcImxlZnRcIl0saHRtbDohMSxvZmZzZXQ6WzAsNl0scGxhY2VtZW50OlwidG9wXCIscG9wcGVyQ29uZmlnOm51bGwsc2FuaXRpemU6ITAsc2FuaXRpemVGbjpudWxsLHNlbGVjdG9yOiExLHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsdGl0bGU6XCJcIix0cmlnZ2VyOlwiaG92ZXIgZm9jdXNcIn0sbHM9e2FsbG93TGlzdDpcIm9iamVjdFwiLGFuaW1hdGlvbjpcImJvb2xlYW5cIixib3VuZGFyeTpcIihzdHJpbmd8ZWxlbWVudClcIixjb250YWluZXI6XCIoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbilcIixjdXN0b21DbGFzczpcIihzdHJpbmd8ZnVuY3Rpb24pXCIsZGVsYXk6XCIobnVtYmVyfG9iamVjdClcIixmYWxsYmFja1BsYWNlbWVudHM6XCJhcnJheVwiLGh0bWw6XCJib29sZWFuXCIsb2Zmc2V0OlwiKGFycmF5fHN0cmluZ3xmdW5jdGlvbilcIixwbGFjZW1lbnQ6XCIoc3RyaW5nfGZ1bmN0aW9uKVwiLHBvcHBlckNvbmZpZzpcIihudWxsfG9iamVjdHxmdW5jdGlvbilcIixzYW5pdGl6ZTpcImJvb2xlYW5cIixzYW5pdGl6ZUZuOlwiKG51bGx8ZnVuY3Rpb24pXCIsc2VsZWN0b3I6XCIoc3RyaW5nfGJvb2xlYW4pXCIsdGVtcGxhdGU6XCJzdHJpbmdcIix0aXRsZTpcIihzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbilcIix0cmlnZ2VyOlwic3RyaW5nXCJ9O2NsYXNzIGNzIGV4dGVuZHMgV3tjb25zdHJ1Y3Rvcih0LGUpe2lmKHZvaWQgMD09PXZpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJCb290c3RyYXAncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKVwiKTtzdXBlcih0LGUpLHRoaXMuX2lzRW5hYmxlZD0hMCx0aGlzLl90aW1lb3V0PTAsdGhpcy5faXNIb3ZlcmVkPW51bGwsdGhpcy5fYWN0aXZlVHJpZ2dlcj17fSx0aGlzLl9wb3BwZXI9bnVsbCx0aGlzLl90ZW1wbGF0ZUZhY3Rvcnk9bnVsbCx0aGlzLl9uZXdDb250ZW50PW51bGwsdGhpcy50aXA9bnVsbCx0aGlzLl9zZXRMaXN0ZW5lcnMoKSx0aGlzLl9jb25maWcuc2VsZWN0b3J8fHRoaXMuX2ZpeFRpdGxlKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIGFzfXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gbHN9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJ0b29sdGlwXCJ9ZW5hYmxlKCl7dGhpcy5faXNFbmFibGVkPSEwfWRpc2FibGUoKXt0aGlzLl9pc0VuYWJsZWQ9ITF9dG9nZ2xlRW5hYmxlZCgpe3RoaXMuX2lzRW5hYmxlZD0hdGhpcy5faXNFbmFibGVkfXRvZ2dsZSgpe3RoaXMuX2lzRW5hYmxlZCYmKHRoaXMuX2FjdGl2ZVRyaWdnZXIuY2xpY2s9IXRoaXMuX2FjdGl2ZVRyaWdnZXIuY2xpY2ssdGhpcy5faXNTaG93bigpP3RoaXMuX2xlYXZlKCk6dGhpcy5fZW50ZXIoKSl9ZGlzcG9zZSgpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KSxOLm9mZih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoaXMpLG5zLHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpLHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1vcmlnaW5hbC10aXRsZVwiKSYmdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1vcmlnaW5hbC10aXRsZVwiKSksdGhpcy5fZGlzcG9zZVBvcHBlcigpLHN1cGVyLmRpc3Bvc2UoKX1zaG93KCl7aWYoXCJub25lXCI9PT10aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkpdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHNcIik7aWYoIXRoaXMuX2lzV2l0aENvbnRlbnQoKXx8IXRoaXMuX2lzRW5hYmxlZClyZXR1cm47Y29uc3QgdD1OLnRyaWdnZXIodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcInNob3dcIikpLGU9KGModGhpcy5fZWxlbWVudCl8fHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpO2lmKHQuZGVmYXVsdFByZXZlbnRlZHx8IWUpcmV0dXJuO3RoaXMuX2Rpc3Bvc2VQb3BwZXIoKTtjb25zdCBpPXRoaXMuX2dldFRpcEVsZW1lbnQoKTt0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIixpLmdldEF0dHJpYnV0ZShcImlkXCIpKTtjb25zdHtjb250YWluZXI6bn09dGhpcy5fY29uZmlnO2lmKHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApfHwobi5hcHBlbmQoaSksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJpbnNlcnRlZFwiKSkpLHRoaXMuX3BvcHBlcj10aGlzLl9jcmVhdGVQb3BwZXIoaSksaS5jbGFzc0xpc3QuYWRkKGVzKSxcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KWZvcihjb25zdCB0IG9mW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKU4ub24odCxcIm1vdXNlb3ZlclwiLGgpO3RoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57Ti50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJzaG93blwiKSksITE9PT10aGlzLl9pc0hvdmVyZWQmJnRoaXMuX2xlYXZlKCksdGhpcy5faXNIb3ZlcmVkPSExfSksdGhpcy50aXAsdGhpcy5faXNBbmltYXRlZCgpKX1oaWRlKCl7aWYodGhpcy5faXNTaG93bigpJiYhTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJoaWRlXCIpKS5kZWZhdWx0UHJldmVudGVkKXtpZih0aGlzLl9nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShlcyksXCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClmb3IoY29uc3QgdCBvZltdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSlOLm9mZih0LFwibW91c2VvdmVyXCIsaCk7dGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljaz0hMSx0aGlzLl9hY3RpdmVUcmlnZ2VyW29zXT0hMSx0aGlzLl9hY3RpdmVUcmlnZ2VyW3NzXT0hMSx0aGlzLl9pc0hvdmVyZWQ9bnVsbCx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKXx8KHRoaXMuX2lzSG92ZXJlZHx8dGhpcy5fZGlzcG9zZVBvcHBlcigpLHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiKSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcImhpZGRlblwiKSkpfSksdGhpcy50aXAsdGhpcy5faXNBbmltYXRlZCgpKX19dXBkYXRlKCl7dGhpcy5fcG9wcGVyJiZ0aGlzLl9wb3BwZXIudXBkYXRlKCl9X2lzV2l0aENvbnRlbnQoKXtyZXR1cm4gQm9vbGVhbih0aGlzLl9nZXRUaXRsZSgpKX1fZ2V0VGlwRWxlbWVudCgpe3JldHVybiB0aGlzLnRpcHx8KHRoaXMudGlwPXRoaXMuX2NyZWF0ZVRpcEVsZW1lbnQodGhpcy5fbmV3Q29udGVudHx8dGhpcy5fZ2V0Q29udGVudEZvclRlbXBsYXRlKCkpKSx0aGlzLnRpcH1fY3JlYXRlVGlwRWxlbWVudCh0KXtjb25zdCBlPXRoaXMuX2dldFRlbXBsYXRlRmFjdG9yeSh0KS50b0h0bWwoKTtpZighZSlyZXR1cm4gbnVsbDtlLmNsYXNzTGlzdC5yZW1vdmUodHMsZXMpLGUuY2xhc3NMaXN0LmFkZChgYnMtJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWF1dG9gKTtjb25zdCBpPSh0PT57ZG97dCs9TWF0aC5mbG9vcigxZTYqTWF0aC5yYW5kb20oKSl9d2hpbGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCkpO3JldHVybiB0fSkodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKS50b1N0cmluZygpO3JldHVybiBlLnNldEF0dHJpYnV0ZShcImlkXCIsaSksdGhpcy5faXNBbmltYXRlZCgpJiZlLmNsYXNzTGlzdC5hZGQodHMpLGV9c2V0Q29udGVudCh0KXt0aGlzLl9uZXdDb250ZW50PXQsdGhpcy5faXNTaG93bigpJiYodGhpcy5fZGlzcG9zZVBvcHBlcigpLHRoaXMuc2hvdygpKX1fZ2V0VGVtcGxhdGVGYWN0b3J5KHQpe3JldHVybiB0aGlzLl90ZW1wbGF0ZUZhY3Rvcnk/dGhpcy5fdGVtcGxhdGVGYWN0b3J5LmNoYW5nZUNvbnRlbnQodCk6dGhpcy5fdGVtcGxhdGVGYWN0b3J5PW5ldyBKbih7Li4udGhpcy5fY29uZmlnLGNvbnRlbnQ6dCxleHRyYUNsYXNzOnRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcyl9KSx0aGlzLl90ZW1wbGF0ZUZhY3Rvcnl9X2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpe3JldHVybntcIi50b29sdGlwLWlubmVyXCI6dGhpcy5fZ2V0VGl0bGUoKX19X2dldFRpdGxlKCl7cmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy50aXRsZSl8fHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1vcmlnaW5hbC10aXRsZVwiKX1faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KHQpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UodC5kZWxlZ2F0ZVRhcmdldCx0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKX1faXNBbmltYXRlZCgpe3JldHVybiB0aGlzLl9jb25maWcuYW5pbWF0aW9ufHx0aGlzLnRpcCYmdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKHRzKX1faXNTaG93bigpe3JldHVybiB0aGlzLnRpcCYmdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKGVzKX1fY3JlYXRlUG9wcGVyKHQpe2NvbnN0IGU9Zyh0aGlzLl9jb25maWcucGxhY2VtZW50LFt0aGlzLHQsdGhpcy5fZWxlbWVudF0pLGk9cnNbZS50b1VwcGVyQ2FzZSgpXTtyZXR1cm4gYmkodGhpcy5fZWxlbWVudCx0LHRoaXMuX2dldFBvcHBlckNvbmZpZyhpKSl9X2dldE9mZnNldCgpe2NvbnN0e29mZnNldDp0fT10aGlzLl9jb25maWc7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/dC5zcGxpdChcIixcIikubWFwKCh0PT5OdW1iZXIucGFyc2VJbnQodCwxMCkpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P2U9PnQoZSx0aGlzLl9lbGVtZW50KTp0fV9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0KXtyZXR1cm4gZyh0LFt0aGlzLl9lbGVtZW50XSl9X2dldFBvcHBlckNvbmZpZyh0KXtjb25zdCBlPXtwbGFjZW1lbnQ6dCxtb2RpZmllcnM6W3tuYW1lOlwiZmxpcFwiLG9wdGlvbnM6e2ZhbGxiYWNrUGxhY2VtZW50czp0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzfX0se25hbWU6XCJvZmZzZXRcIixvcHRpb25zOntvZmZzZXQ6dGhpcy5fZ2V0T2Zmc2V0KCl9fSx7bmFtZTpcInByZXZlbnRPdmVyZmxvd1wiLG9wdGlvbnM6e2JvdW5kYXJ5OnRoaXMuX2NvbmZpZy5ib3VuZGFyeX19LHtuYW1lOlwiYXJyb3dcIixvcHRpb25zOntlbGVtZW50OmAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YH19LHtuYW1lOlwicHJlU2V0UGxhY2VtZW50XCIsZW5hYmxlZDohMCxwaGFzZTpcImJlZm9yZU1haW5cIixmbjp0PT57dGhpcy5fZ2V0VGlwRWxlbWVudCgpLnNldEF0dHJpYnV0ZShcImRhdGEtcG9wcGVyLXBsYWNlbWVudFwiLHQuc3RhdGUucGxhY2VtZW50KX19XX07cmV0dXJuey4uLmUsLi4uZyh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLFtlXSl9fV9zZXRMaXN0ZW5lcnMoKXtjb25zdCB0PXRoaXMuX2NvbmZpZy50cmlnZ2VyLnNwbGl0KFwiIFwiKTtmb3IoY29uc3QgZSBvZiB0KWlmKFwiY2xpY2tcIj09PWUpTi5vbih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwiY2xpY2tcIiksdGhpcy5fY29uZmlnLnNlbGVjdG9yLCh0PT57dGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KHQpLnRvZ2dsZSgpfSkpO2Vsc2UgaWYoXCJtYW51YWxcIiE9PWUpe2NvbnN0IHQ9ZT09PXNzP3RoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwibW91c2VlbnRlclwiKTp0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcImZvY3VzaW5cIiksaT1lPT09c3M/dGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJtb3VzZWxlYXZlXCIpOnRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwiZm9jdXNvdXRcIik7Ti5vbih0aGlzLl9lbGVtZW50LHQsdGhpcy5fY29uZmlnLnNlbGVjdG9yLCh0PT57Y29uc3QgZT10aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQodCk7ZS5fYWN0aXZlVHJpZ2dlcltcImZvY3VzaW5cIj09PXQudHlwZT9vczpzc109ITAsZS5fZW50ZXIoKX0pKSxOLm9uKHRoaXMuX2VsZW1lbnQsaSx0aGlzLl9jb25maWcuc2VsZWN0b3IsKHQ9Pntjb25zdCBlPXRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCh0KTtlLl9hY3RpdmVUcmlnZ2VyW1wiZm9jdXNvdXRcIj09PXQudHlwZT9vczpzc109ZS5fZWxlbWVudC5jb250YWlucyh0LnJlbGF0ZWRUYXJnZXQpLGUuX2xlYXZlKCl9KSl9dGhpcy5faGlkZU1vZGFsSGFuZGxlcj0oKT0+e3RoaXMuX2VsZW1lbnQmJnRoaXMuaGlkZSgpfSxOLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChpcyksbnMsdGhpcy5faGlkZU1vZGFsSGFuZGxlcil9X2ZpeFRpdGxlKCl7Y29uc3QgdD10aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO3QmJih0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fHRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpfHx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix0KSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtYnMtb3JpZ2luYWwtdGl0bGVcIix0KSx0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInRpdGxlXCIpKX1fZW50ZXIoKXt0aGlzLl9pc1Nob3duKCl8fHRoaXMuX2lzSG92ZXJlZD90aGlzLl9pc0hvdmVyZWQ9ITA6KHRoaXMuX2lzSG92ZXJlZD0hMCx0aGlzLl9zZXRUaW1lb3V0KCgoKT0+e3RoaXMuX2lzSG92ZXJlZCYmdGhpcy5zaG93KCl9KSx0aGlzLl9jb25maWcuZGVsYXkuc2hvdykpfV9sZWF2ZSgpe3RoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKXx8KHRoaXMuX2lzSG92ZXJlZD0hMSx0aGlzLl9zZXRUaW1lb3V0KCgoKT0+e3RoaXMuX2lzSG92ZXJlZHx8dGhpcy5oaWRlKCl9KSx0aGlzLl9jb25maWcuZGVsYXkuaGlkZSkpfV9zZXRUaW1lb3V0KHQsZSl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpLHRoaXMuX3RpbWVvdXQ9c2V0VGltZW91dCh0LGUpfV9pc1dpdGhBY3RpdmVUcmlnZ2VyKCl7cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fYWN0aXZlVHJpZ2dlcikuaW5jbHVkZXMoITApfV9nZXRDb25maWcodCl7Y29uc3QgZT1GLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpO2Zvcihjb25zdCB0IG9mIE9iamVjdC5rZXlzKGUpKVpuLmhhcyh0KSYmZGVsZXRlIGVbdF07cmV0dXJuIHQ9ey4uLmUsLi4uXCJvYmplY3RcIj09dHlwZW9mIHQmJnQ/dDp7fX0sdD10aGlzLl9tZXJnZUNvbmZpZ09iaih0KSx0PXRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UodCksdGhpcy5fdHlwZUNoZWNrQ29uZmlnKHQpLHR9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQuY29udGFpbmVyPSExPT09dC5jb250YWluZXI/ZG9jdW1lbnQuYm9keTpyKHQuY29udGFpbmVyKSxcIm51bWJlclwiPT10eXBlb2YgdC5kZWxheSYmKHQuZGVsYXk9e3Nob3c6dC5kZWxheSxoaWRlOnQuZGVsYXl9KSxcIm51bWJlclwiPT10eXBlb2YgdC50aXRsZSYmKHQudGl0bGU9dC50aXRsZS50b1N0cmluZygpKSxcIm51bWJlclwiPT10eXBlb2YgdC5jb250ZW50JiYodC5jb250ZW50PXQuY29udGVudC50b1N0cmluZygpKSx0fV9nZXREZWxlZ2F0ZUNvbmZpZygpe2NvbnN0IHQ9e307Zm9yKGNvbnN0W2UsaV1vZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcpKXRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlXSE9PWkmJih0W2VdPWkpO3JldHVybiB0LnNlbGVjdG9yPSExLHQudHJpZ2dlcj1cIm1hbnVhbFwiLHR9X2Rpc3Bvc2VQb3BwZXIoKXt0aGlzLl9wb3BwZXImJih0aGlzLl9wb3BwZXIuZGVzdHJveSgpLHRoaXMuX3BvcHBlcj1udWxsKSx0aGlzLnRpcCYmKHRoaXMudGlwLnJlbW92ZSgpLHRoaXMudGlwPW51bGwpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPWNzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09ZVt0XSl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtlW3RdKCl9fSkpfX1tKGNzKTtjb25zdCBocz17Li4uY3MuRGVmYXVsdCxjb250ZW50OlwiXCIsb2Zmc2V0OlswLDhdLHBsYWNlbWVudDpcInJpZ2h0XCIsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+PC9kaXY+Jyx0cmlnZ2VyOlwiY2xpY2tcIn0sZHM9ey4uLmNzLkRlZmF1bHRUeXBlLGNvbnRlbnQ6XCIobnVsbHxzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbilcIn07Y2xhc3MgdXMgZXh0ZW5kcyBjc3tzdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gaHN9c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBkc31zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cInBvcG92ZXJcIn1faXNXaXRoQ29udGVudCgpe3JldHVybiB0aGlzLl9nZXRUaXRsZSgpfHx0aGlzLl9nZXRDb250ZW50KCl9X2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpe3JldHVybntcIi5wb3BvdmVyLWhlYWRlclwiOnRoaXMuX2dldFRpdGxlKCksXCIucG9wb3Zlci1ib2R5XCI6dGhpcy5fZ2V0Q29udGVudCgpfX1fZ2V0Q29udGVudCgpe3JldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudCl9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGU9dXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLHQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdKXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0oKX19KSl9fW0odXMpO2NvbnN0IGZzPVwiLmJzLnNjcm9sbHNweVwiLHBzPWBhY3RpdmF0ZSR7ZnN9YCxtcz1gY2xpY2ske2ZzfWAsZ3M9YGxvYWQke2ZzfS5kYXRhLWFwaWAsX3M9XCJhY3RpdmVcIixicz1cIltocmVmXVwiLHZzPVwiLm5hdi1saW5rXCIseXM9YCR7dnN9LCAubmF2LWl0ZW0gPiAke3ZzfSwgLmxpc3QtZ3JvdXAtaXRlbWAsd3M9e29mZnNldDpudWxsLHJvb3RNYXJnaW46XCIwcHggMHB4IC0yNSVcIixzbW9vdGhTY3JvbGw6ITEsdGFyZ2V0Om51bGwsdGhyZXNob2xkOlsuMSwuNSwxXX0sQXM9e29mZnNldDpcIihudW1iZXJ8bnVsbClcIixyb290TWFyZ2luOlwic3RyaW5nXCIsc21vb3RoU2Nyb2xsOlwiYm9vbGVhblwiLHRhcmdldDpcImVsZW1lbnRcIix0aHJlc2hvbGQ6XCJhcnJheVwifTtjbGFzcyBFcyBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX3RhcmdldExpbmtzPW5ldyBNYXAsdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zPW5ldyBNYXAsdGhpcy5fcm9vdEVsZW1lbnQ9XCJ2aXNpYmxlXCI9PT1nZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnQpLm92ZXJmbG93WT9udWxsOnRoaXMuX2VsZW1lbnQsdGhpcy5fYWN0aXZlVGFyZ2V0PW51bGwsdGhpcy5fb2JzZXJ2ZXI9bnVsbCx0aGlzLl9wcmV2aW91c1Njcm9sbERhdGE9e3Zpc2libGVFbnRyeVRvcDowLHBhcmVudFNjcm9sbFRvcDowfSx0aGlzLnJlZnJlc2goKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gd3N9c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBBc31zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cInNjcm9sbHNweVwifXJlZnJlc2goKXt0aGlzLl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCksdGhpcy5fbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKSx0aGlzLl9vYnNlcnZlcj90aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk6dGhpcy5fb2JzZXJ2ZXI9dGhpcy5fZ2V0TmV3T2JzZXJ2ZXIoKTtmb3IoY29uc3QgdCBvZiB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMudmFsdWVzKCkpdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0KX1kaXNwb3NlKCl7dGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpLHN1cGVyLmRpc3Bvc2UoKX1fY29uZmlnQWZ0ZXJNZXJnZSh0KXtyZXR1cm4gdC50YXJnZXQ9cih0LnRhcmdldCl8fGRvY3VtZW50LmJvZHksdC5yb290TWFyZ2luPXQub2Zmc2V0P2Ake3Qub2Zmc2V0fXB4IDBweCAtMzAlYDp0LnJvb3RNYXJnaW4sXCJzdHJpbmdcIj09dHlwZW9mIHQudGhyZXNob2xkJiYodC50aHJlc2hvbGQ9dC50aHJlc2hvbGQuc3BsaXQoXCIsXCIpLm1hcCgodD0+TnVtYmVyLnBhcnNlRmxvYXQodCkpKSksdH1fbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKXt0aGlzLl9jb25maWcuc21vb3RoU2Nyb2xsJiYoTi5vZmYodGhpcy5fY29uZmlnLnRhcmdldCxtcyksTi5vbih0aGlzLl9jb25maWcudGFyZ2V0LG1zLGJzLCh0PT57Y29uc3QgZT10aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuZ2V0KHQudGFyZ2V0Lmhhc2gpO2lmKGUpe3QucHJldmVudERlZmF1bHQoKTtjb25zdCBpPXRoaXMuX3Jvb3RFbGVtZW50fHx3aW5kb3csbj1lLm9mZnNldFRvcC10aGlzLl9lbGVtZW50Lm9mZnNldFRvcDtpZihpLnNjcm9sbFRvKXJldHVybiB2b2lkIGkuc2Nyb2xsVG8oe3RvcDpuLGJlaGF2aW9yOlwic21vb3RoXCJ9KTtpLnNjcm9sbFRvcD1ufX0pKSl9X2dldE5ld09ic2VydmVyKCl7Y29uc3QgdD17cm9vdDp0aGlzLl9yb290RWxlbWVudCx0aHJlc2hvbGQ6dGhpcy5fY29uZmlnLnRocmVzaG9sZCxyb290TWFyZ2luOnRoaXMuX2NvbmZpZy5yb290TWFyZ2lufTtyZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKCh0PT50aGlzLl9vYnNlcnZlckNhbGxiYWNrKHQpKSx0KX1fb2JzZXJ2ZXJDYWxsYmFjayh0KXtjb25zdCBlPXQ9PnRoaXMuX3RhcmdldExpbmtzLmdldChgIyR7dC50YXJnZXQuaWR9YCksaT10PT57dGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcD10LnRhcmdldC5vZmZzZXRUb3AsdGhpcy5fcHJvY2VzcyhlKHQpKX0sbj0odGhpcy5fcm9vdEVsZW1lbnR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wLHM9bj49dGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcDt0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wPW47Zm9yKGNvbnN0IG8gb2YgdCl7aWYoIW8uaXNJbnRlcnNlY3Rpbmcpe3RoaXMuX2FjdGl2ZVRhcmdldD1udWxsLHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3MoZShvKSk7Y29udGludWV9Y29uc3QgdD1vLnRhcmdldC5vZmZzZXRUb3A+PXRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3A7aWYocyYmdCl7aWYoaShvKSwhbilyZXR1cm59ZWxzZSBzfHx0fHxpKG8pfX1faW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpe3RoaXMuX3RhcmdldExpbmtzPW5ldyBNYXAsdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zPW5ldyBNYXA7Y29uc3QgdD16LmZpbmQoYnMsdGhpcy5fY29uZmlnLnRhcmdldCk7Zm9yKGNvbnN0IGUgb2YgdCl7aWYoIWUuaGFzaHx8bChlKSljb250aW51ZTtjb25zdCB0PXouZmluZE9uZShkZWNvZGVVUkkoZS5oYXNoKSx0aGlzLl9lbGVtZW50KTthKHQpJiYodGhpcy5fdGFyZ2V0TGlua3Muc2V0KGRlY29kZVVSSShlLmhhc2gpLGUpLHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5zZXQoZS5oYXNoLHQpKX19X3Byb2Nlc3ModCl7dGhpcy5fYWN0aXZlVGFyZ2V0IT09dCYmKHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGhpcy5fY29uZmlnLnRhcmdldCksdGhpcy5fYWN0aXZlVGFyZ2V0PXQsdC5jbGFzc0xpc3QuYWRkKF9zKSx0aGlzLl9hY3RpdmF0ZVBhcmVudHModCksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQscHMse3JlbGF0ZWRUYXJnZXQ6dH0pKX1fYWN0aXZhdGVQYXJlbnRzKHQpe2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24taXRlbVwiKSl6LmZpbmRPbmUoXCIuZHJvcGRvd24tdG9nZ2xlXCIsdC5jbG9zZXN0KFwiLmRyb3Bkb3duXCIpKS5jbGFzc0xpc3QuYWRkKF9zKTtlbHNlIGZvcihjb25zdCBlIG9mIHoucGFyZW50cyh0LFwiLm5hdiwgLmxpc3QtZ3JvdXBcIikpZm9yKGNvbnN0IHQgb2Ygei5wcmV2KGUseXMpKXQuY2xhc3NMaXN0LmFkZChfcyl9X2NsZWFyQWN0aXZlQ2xhc3ModCl7dC5jbGFzc0xpc3QucmVtb3ZlKF9zKTtjb25zdCBlPXouZmluZChgJHtic30uJHtfc31gLHQpO2Zvcihjb25zdCB0IG9mIGUpdC5jbGFzc0xpc3QucmVtb3ZlKF9zKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1Fcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aChcIl9cIil8fFwiY29uc3RydWN0b3JcIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSgpfX0pKX19Ti5vbih3aW5kb3csZ3MsKCgpPT57Zm9yKGNvbnN0IHQgb2Ygei5maW5kKCdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nKSlFcy5nZXRPckNyZWF0ZUluc3RhbmNlKHQpfSkpLG0oRXMpO2NvbnN0IFRzPVwiLmJzLnRhYlwiLENzPWBoaWRlJHtUc31gLE9zPWBoaWRkZW4ke1RzfWAseHM9YHNob3cke1RzfWAsa3M9YHNob3duJHtUc31gLExzPWBjbGljayR7VHN9YCxTcz1ga2V5ZG93biR7VHN9YCxEcz1gbG9hZCR7VHN9YCwkcz1cIkFycm93TGVmdFwiLElzPVwiQXJyb3dSaWdodFwiLE5zPVwiQXJyb3dVcFwiLFBzPVwiQXJyb3dEb3duXCIsTXM9XCJIb21lXCIsanM9XCJFbmRcIixGcz1cImFjdGl2ZVwiLEhzPVwiZmFkZVwiLFdzPVwic2hvd1wiLEJzPVwiLmRyb3Bkb3duLXRvZ2dsZVwiLHpzPWA6bm90KCR7QnN9KWAsUnM9J1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXScscXM9YC5uYXYtbGluayR7enN9LCAubGlzdC1ncm91cC1pdGVtJHt6c30sIFtyb2xlPVwidGFiXCJdJHt6c30sICR7UnN9YCxWcz1gLiR7RnN9W2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCAuJHtGc31bZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCAuJHtGc31bZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdYDtjbGFzcyBLcyBleHRlbmRzIFd7Y29uc3RydWN0b3IodCl7c3VwZXIodCksdGhpcy5fcGFyZW50PXRoaXMuX2VsZW1lbnQuY2xvc2VzdCgnLmxpc3QtZ3JvdXAsIC5uYXYsIFtyb2xlPVwidGFibGlzdFwiXScpLHRoaXMuX3BhcmVudCYmKHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzKHRoaXMuX3BhcmVudCx0aGlzLl9nZXRDaGlsZHJlbigpKSxOLm9uKHRoaXMuX2VsZW1lbnQsU3MsKHQ9PnRoaXMuX2tleWRvd24odCkpKSl9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJ0YWJcIn1zaG93KCl7Y29uc3QgdD10aGlzLl9lbGVtZW50O2lmKHRoaXMuX2VsZW1Jc0FjdGl2ZSh0KSlyZXR1cm47Y29uc3QgZT10aGlzLl9nZXRBY3RpdmVFbGVtKCksaT1lP04udHJpZ2dlcihlLENzLHtyZWxhdGVkVGFyZ2V0OnR9KTpudWxsO04udHJpZ2dlcih0LHhzLHtyZWxhdGVkVGFyZ2V0OmV9KS5kZWZhdWx0UHJldmVudGVkfHxpJiZpLmRlZmF1bHRQcmV2ZW50ZWR8fCh0aGlzLl9kZWFjdGl2YXRlKGUsdCksdGhpcy5fYWN0aXZhdGUodCxlKSl9X2FjdGl2YXRlKHQsZSl7dCYmKHQuY2xhc3NMaXN0LmFkZChGcyksdGhpcy5fYWN0aXZhdGUoei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHQpKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e1widGFiXCI9PT10LmdldEF0dHJpYnV0ZShcInJvbGVcIik/KHQucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIiksdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsITApLHRoaXMuX3RvZ2dsZURyb3BEb3duKHQsITApLE4udHJpZ2dlcih0LGtzLHtyZWxhdGVkVGFyZ2V0OmV9KSk6dC5jbGFzc0xpc3QuYWRkKFdzKX0pLHQsdC5jbGFzc0xpc3QuY29udGFpbnMoSHMpKSl9X2RlYWN0aXZhdGUodCxlKXt0JiYodC5jbGFzc0xpc3QucmVtb3ZlKEZzKSx0LmJsdXIoKSx0aGlzLl9kZWFjdGl2YXRlKHouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KSksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PntcInRhYlwiPT09dC5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpPyh0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwhMSksdC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIiksdGhpcy5fdG9nZ2xlRHJvcERvd24odCwhMSksTi50cmlnZ2VyKHQsT3Mse3JlbGF0ZWRUYXJnZXQ6ZX0pKTp0LmNsYXNzTGlzdC5yZW1vdmUoV3MpfSksdCx0LmNsYXNzTGlzdC5jb250YWlucyhIcykpKX1fa2V5ZG93bih0KXtpZighWyRzLElzLE5zLFBzLE1zLGpzXS5pbmNsdWRlcyh0LmtleSkpcmV0dXJuO3Quc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IGU9dGhpcy5fZ2V0Q2hpbGRyZW4oKS5maWx0ZXIoKHQ9PiFsKHQpKSk7bGV0IGk7aWYoW01zLGpzXS5pbmNsdWRlcyh0LmtleSkpaT1lW3Qua2V5PT09TXM/MDplLmxlbmd0aC0xXTtlbHNle2NvbnN0IG49W0lzLFBzXS5pbmNsdWRlcyh0LmtleSk7aT1iKGUsdC50YXJnZXQsbiwhMCl9aSYmKGkuZm9jdXMoe3ByZXZlbnRTY3JvbGw6ITB9KSxLcy5nZXRPckNyZWF0ZUluc3RhbmNlKGkpLnNob3coKSl9X2dldENoaWxkcmVuKCl7cmV0dXJuIHouZmluZChxcyx0aGlzLl9wYXJlbnQpfV9nZXRBY3RpdmVFbGVtKCl7cmV0dXJuIHRoaXMuX2dldENoaWxkcmVuKCkuZmluZCgodD0+dGhpcy5fZWxlbUlzQWN0aXZlKHQpKSl8fG51bGx9X3NldEluaXRpYWxBdHRyaWJ1dGVzKHQsZSl7dGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModCxcInJvbGVcIixcInRhYmxpc3RcIik7Zm9yKGNvbnN0IHQgb2YgZSl0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQodCl9X3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZCh0KXt0PXRoaXMuX2dldElubmVyRWxlbWVudCh0KTtjb25zdCBlPXRoaXMuX2VsZW1Jc0FjdGl2ZSh0KSxpPXRoaXMuX2dldE91dGVyRWxlbWVudCh0KTt0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIixlKSxpIT09dCYmdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoaSxcInJvbGVcIixcInByZXNlbnRhdGlvblwiKSxlfHx0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSx0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0LFwicm9sZVwiLFwidGFiXCIpLHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbCh0KX1fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKHQpe2NvbnN0IGU9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHQpO2UmJih0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlLFwicm9sZVwiLFwidGFicGFuZWxcIiksdC5pZCYmdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoZSxcImFyaWEtbGFiZWxsZWRieVwiLGAke3QuaWR9YCkpfV90b2dnbGVEcm9wRG93bih0LGUpe2NvbnN0IGk9dGhpcy5fZ2V0T3V0ZXJFbGVtZW50KHQpO2lmKCFpLmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duXCIpKXJldHVybjtjb25zdCBuPSh0LG4pPT57Y29uc3Qgcz16LmZpbmRPbmUodCxpKTtzJiZzLmNsYXNzTGlzdC50b2dnbGUobixlKX07bihCcyxGcyksbihcIi5kcm9wZG93bi1tZW51XCIsV3MpLGkuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLGUpfV9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0LGUsaSl7dC5oYXNBdHRyaWJ1dGUoZSl8fHQuc2V0QXR0cmlidXRlKGUsaSl9X2VsZW1Jc0FjdGl2ZSh0KXtyZXR1cm4gdC5jbGFzc0xpc3QuY29udGFpbnMoRnMpfV9nZXRJbm5lckVsZW1lbnQodCl7cmV0dXJuIHQubWF0Y2hlcyhxcyk/dDp6LmZpbmRPbmUocXMsdCl9X2dldE91dGVyRWxlbWVudCh0KXtyZXR1cm4gdC5jbG9zZXN0KFwiLm5hdi1pdGVtLCAubGlzdC1ncm91cC1pdGVtXCIpfHx0fXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPUtzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aChcIl9cIil8fFwiY29uc3RydWN0b3JcIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSgpfX0pKX19Ti5vbihkb2N1bWVudCxMcyxScywoZnVuY3Rpb24odCl7W1wiQVwiLFwiQVJFQVwiXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpJiZ0LnByZXZlbnREZWZhdWx0KCksbCh0aGlzKXx8S3MuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS5zaG93KCl9KSksTi5vbih3aW5kb3csRHMsKCgpPT57Zm9yKGNvbnN0IHQgb2Ygei5maW5kKFZzKSlLcy5nZXRPckNyZWF0ZUluc3RhbmNlKHQpfSkpLG0oS3MpO2NvbnN0IFFzPVwiLmJzLnRvYXN0XCIsWHM9YG1vdXNlb3ZlciR7UXN9YCxZcz1gbW91c2VvdXQke1FzfWAsVXM9YGZvY3VzaW4ke1FzfWAsR3M9YGZvY3Vzb3V0JHtRc31gLEpzPWBoaWRlJHtRc31gLFpzPWBoaWRkZW4ke1FzfWAsdG89YHNob3cke1FzfWAsZW89YHNob3duJHtRc31gLGlvPVwiaGlkZVwiLG5vPVwic2hvd1wiLHNvPVwic2hvd2luZ1wiLG9vPXthbmltYXRpb246XCJib29sZWFuXCIsYXV0b2hpZGU6XCJib29sZWFuXCIsZGVsYXk6XCJudW1iZXJcIn0scm89e2FuaW1hdGlvbjohMCxhdXRvaGlkZTohMCxkZWxheTo1ZTN9O2NsYXNzIGFvIGV4dGVuZHMgV3tjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSksdGhpcy5fdGltZW91dD1udWxsLHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb249ITEsdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbj0hMSx0aGlzLl9zZXRMaXN0ZW5lcnMoKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gcm99c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBvb31zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cInRvYXN0XCJ9c2hvdygpe04udHJpZ2dlcih0aGlzLl9lbGVtZW50LHRvKS5kZWZhdWx0UHJldmVudGVkfHwodGhpcy5fY2xlYXJUaW1lb3V0KCksdGhpcy5fY29uZmlnLmFuaW1hdGlvbiYmdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaW8pLGQodGhpcy5fZWxlbWVudCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5vLHNvKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShzbyksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsZW8pLHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKCl9KSx0aGlzLl9lbGVtZW50LHRoaXMuX2NvbmZpZy5hbmltYXRpb24pKX1oaWRlKCl7dGhpcy5pc1Nob3duKCkmJihOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxKcykuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChzbyksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoaW8pLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShzbyxubyksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsWnMpfSksdGhpcy5fZWxlbWVudCx0aGlzLl9jb25maWcuYW5pbWF0aW9uKSkpfWRpc3Bvc2UoKXt0aGlzLl9jbGVhclRpbWVvdXQoKSx0aGlzLmlzU2hvd24oKSYmdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKG5vKSxzdXBlci5kaXNwb3NlKCl9aXNTaG93bigpe3JldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhubyl9X21heWJlU2NoZWR1bGVIaWRlKCl7dGhpcy5fY29uZmlnLmF1dG9oaWRlJiYodGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbnx8dGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbnx8KHRoaXMuX3RpbWVvdXQ9c2V0VGltZW91dCgoKCk9Pnt0aGlzLmhpZGUoKX0pLHRoaXMuX2NvbmZpZy5kZWxheSkpKX1fb25JbnRlcmFjdGlvbih0LGUpe3N3aXRjaCh0LnR5cGUpe2Nhc2VcIm1vdXNlb3ZlclwiOmNhc2VcIm1vdXNlb3V0XCI6dGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbj1lO2JyZWFrO2Nhc2VcImZvY3VzaW5cIjpjYXNlXCJmb2N1c291dFwiOnRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb249ZX1pZihlKXJldHVybiB2b2lkIHRoaXMuX2NsZWFyVGltZW91dCgpO2NvbnN0IGk9dC5yZWxhdGVkVGFyZ2V0O3RoaXMuX2VsZW1lbnQ9PT1pfHx0aGlzLl9lbGVtZW50LmNvbnRhaW5zKGkpfHx0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpfV9zZXRMaXN0ZW5lcnMoKXtOLm9uKHRoaXMuX2VsZW1lbnQsWHMsKHQ9PnRoaXMuX29uSW50ZXJhY3Rpb24odCwhMCkpKSxOLm9uKHRoaXMuX2VsZW1lbnQsWXMsKHQ9PnRoaXMuX29uSW50ZXJhY3Rpb24odCwhMSkpKSxOLm9uKHRoaXMuX2VsZW1lbnQsVXMsKHQ9PnRoaXMuX29uSW50ZXJhY3Rpb24odCwhMCkpKSxOLm9uKHRoaXMuX2VsZW1lbnQsR3MsKHQ9PnRoaXMuX29uSW50ZXJhY3Rpb24odCwhMSkpKX1fY2xlYXJUaW1lb3V0KCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpLHRoaXMuX3RpbWVvdXQ9bnVsbH1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1hby5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF0pdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSh0aGlzKX19KSl9fXJldHVybiBSKGFvKSxtKGFvKSx7QWxlcnQ6USxCdXR0b246WSxDYXJvdXNlbDp4dCxDb2xsYXBzZTpCdCxEcm9wZG93bjpxaSxNb2RhbDpPbixPZmZjYW52YXM6cW4sUG9wb3Zlcjp1cyxTY3JvbGxTcHk6RXMsVGFiOktzLFRvYXN0OmFvLFRvb2x0aXA6Y3N9fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLmJ1bmRsZS5taW4uanMubWFwIiwiY29uc3QgYnVyZ2VyTWVudSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXItbWVudScpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyX19tZW51X19pdGVtLS1saW5rJyk7XHJcbiAgICAgICAgYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VcIik7XHJcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcIm92ZXJsYXlcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlXCIpO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmxheVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKCFvdmVybGF5LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWJ1cmdlck1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VcIik7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVybGF5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1cmdlck1lbnU7IiwiZXhwb3J0IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbnMoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0hlbGxvIGZyb20gbm90aWZpY2F0aW9ucy5qcycpO1xyXG5cclxuICAgIHRvYXN0ci5vcHRpb25zID0ge1xyXG4gICAgICAgIFwiY2xvc2VCdXR0b25cIjogdHJ1ZSxcclxuICAgICAgICBcImRlYnVnXCI6IGZhbHNlLFxyXG4gICAgICAgIFwibmV3ZXN0T25Ub3BcIjogZmFsc2UsXHJcbiAgICAgICAgXCJwcm9ncmVzc0JhclwiOiB0cnVlLFxyXG4gICAgICAgIFwicG9zaXRpb25DbGFzc1wiOiBcInRvYXN0LXRvcC1yaWdodFwiLFxyXG4gICAgICAgIFwicHJldmVudER1cGxpY2F0ZXNcIjogdHJ1ZSxcclxuICAgICAgICBcIm9uY2xpY2tcIjogbnVsbCxcclxuICAgICAgICBcInNob3dEdXJhdGlvblwiOiBcIjMwMFwiLFxyXG4gICAgICAgIFwiaGlkZUR1cmF0aW9uXCI6IFwiMTAwMFwiLFxyXG4gICAgICAgIFwidGltZU91dFwiOiBcIjUwMDBcIixcclxuICAgICAgICBcImV4dGVuZGVkVGltZU91dFwiOiBcIjEwMDBcIixcclxuICAgICAgICBcInNob3dFYXNpbmdcIjogXCJzd2luZ1wiLFxyXG4gICAgICAgIFwiaGlkZUVhc2luZ1wiOiBcImxpbmVhclwiLFxyXG4gICAgICAgIFwic2hvd01ldGhvZFwiOiBcImZhZGVJblwiLFxyXG4gICAgICAgIFwiaGlkZU1ldGhvZFwiOiBcImZhZGVPdXRcIlxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsYXNoLW1lc3NhZ2UnKS5mb3JFYWNoKGZsYXNoTWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmbGFzaE1lc3NhZ2UudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmIChmbGFzaE1lc3NhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWNjZXNzJykpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZsYXNoTWVzc2FnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Vycm9yJykpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGluaXREYXNoYm9hcmQoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0hlbGxvIGZyb20gZGFzaGJvYXJkLmpzJyk7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gRm9ybSBVc2VyIEluZm8gVXBkYXRlXHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZVBzZXVkb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VQc2V1ZG8nKTtcclxuICAgICAgICAgICAgY29uc3QgY2hhbmdlRW1haWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlRW1haWwnKTtcclxuICAgICAgICAgICAgLy9jb25zdCBjaGFuZ2VQYXNzd29yZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VQYXNzd29yZCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlSW5wdXQgPSAoYnV0dG9uLCBpbnB1dElkKSA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuICAgICAgICAgICAgaWYgKGlucHV0LnJlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgIGlucHV0LnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZTcyN2EnO1xyXG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgICAgICAgaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4Njg2ODYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdG9nZ2xlSW5wdXQoY2hhbmdlUHNldWRvQnV0dG9uLCAndXNlcl91cGRhdGVfcHNldWRvJyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZUlucHV0KGNoYW5nZUVtYWlsQnV0dG9uLCAndXNlcl91cGRhdGVfZW1haWwnKTtcclxuICAgICAgICAgICAgLy8gdG9nZ2xlSW5wdXQoY2hhbmdlUGFzc3dvcmRCdXR0b24sICd1c2VyX3VwZGF0ZV9wYXNzd29yZCcpO1xyXG4gICAgICAgICAgICAvLyB0b2dnbGVJbnB1dChjaGFuZ2VQYXNzd29yZEJ1dHRvbiwgJ2NvbmZpcm1QYXNzd29yZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEZvcm0gVXNlciBBdmF0YXIgVXBkYXRlXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VBdmF0YXInKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyXG4gICAgICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhckltYWdlJykuc3JjID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gaW5pdEdhbWVEZXRhaWxzKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0dhbWUgZGV0YWlscyBwYWdlIGxvYWRlZCcpXHJcbiAgICAvLyBMb2FkZXJcclxuICAgIC8vIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xyXG4gICAgLy8gICAgIGxvYWRlci5jbGFzc05hbWUgKz0gJyBoaWRkZW4nOyAvLyBjbGFzcyBcImxvYWRlciBoaWRkZW5cIlxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBDYXJvdXNlbFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5jYXJvdXNlbC1pbWFnZScpLnNsaWNrKHtcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBsYXp5TG9hZDogJ29uZGVtYW5kJyxcclxuICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWJhY2stb3V0bGluZVwiPjwvaW9uLWljb24+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWZvcndhcmQtb3V0bGluZVwiPjwvaW9uLWljb24+PC9idXR0b24+JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuY2Fyb3VzZWwtdmlkZW8nKS5zbGljayh7XHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1iYWNrLW91dGxpbmVcIj48L2lvbi1pY29uPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1mb3J3YXJkLW91dGxpbmVcIj48L2lvbi1pY29uPjwvYnV0dG9uPicsXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gR2VzdGlvbiBkZXMgamV1eCBkYW5zIGxhIGNvbGxlY3Rpb25cclxuICAgICAgICBpZiAoJCgnI3RvZ2dsZUNvbGxlY3Rpb24nKS5kYXRhKCdhY3Rpb24nKSA9PT0gJ2FkZC10by1jb2xsZWN0aW9uJykge1xyXG4gICAgICAgICAgICAkKCcjdG9nZ2xlQWNoaWV2ZWQsICN0b2dnbGVQbGF0aW5lZCcpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjdG9nZ2xlQWNoaWV2ZWQsICN0b2dnbGVQbGF0aW5lZCcpLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAkKFwiI3RvZ2dsZUNvbGxlY3Rpb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBnYW1lSWQgPSAkKHRoaXMpLmRhdGEoJ2dhbWUtaWQnKTtcclxuICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICQodGhpcykuZGF0YSgnYWN0aW9uJyk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnLycgKyBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2dhbWVJZCc6IGdhbWVJZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGFjdGlvbiBkYXRhIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QWN0aW9uID0gKGFjdGlvbiA9PT0gJ2FkZC10by1jb2xsZWN0aW9uJykgPyAncmVtb3ZlLWZyb20tY29sbGVjdGlvbicgOiAnYWRkLXRvLWNvbGxlY3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjdG9nZ2xlQ29sbGVjdGlvbicpLmRhdGEoJ2FjdGlvbicsIG5ld0FjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgYnV0dG9uIHRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1RleHQgPSAoYWN0aW9uID09PSAnYWRkLXRvLWNvbGxlY3Rpb24nKSA/ICdDb2xsZWN0aW9uJyA6ICdDb2xsZWN0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIHRoZSBidXR0b24gaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjdG9nZ2xlQ29sbGVjdGlvbicpLnRleHQobmV3VGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdJY29uID0gKGFjdGlvbiA9PT0gJ2FkZC10by1jb2xsZWN0aW9uJykgPyAnPGlvbi1pY29uIG5hbWU9XCJyZW1vdmUtY2lyY2xlLW91dGxpbmVcIiBjbGFzcz1cImJ1dHRvbi1pY29uXCI+PC9pb24taWNvbj4nIDogJzxpb24taWNvbiBuYW1lPVwiYWRkLWNpcmNsZS1vdXRsaW5lXCIgY2xhc3M9XCJidXR0b24taWNvblwiPjwvaW9uLWljb24+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3RvZ2dsZUNvbGxlY3Rpb24nKS5odG1sKG5ld1RleHQgKyAnICcgKyBuZXdJY29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIHRoZSBidXR0b24gY2xhc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0NsYXNzID0gKGFjdGlvbiA9PT0gJ2FkZC10by1jb2xsZWN0aW9uJykgPyAnYnRuLXdhcm5pbmcnIDogJ2J0bi1wcmltYXJ5JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3RvZ2dsZUNvbGxlY3Rpb24nKS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnkgYnRuLXdhcm5pbmcnKS5hZGRDbGFzcyhuZXdDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgYWNoaWV2ZWQgYW5kIHBsYXRpbmVkIGJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0FjdGlvbiA9PT0gJ2FkZC10by1jb2xsZWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3RvZ2dsZUFjaGlldmVkLCAjdG9nZ2xlUGxhdGluZWQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjdG9nZ2xlQWNoaWV2ZWQsICN0b2dnbGVQbGF0aW5lZCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRm9yYmlkZGVuJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnVm91cyBkZXZleiDDqnRyZSBjb25uZWN0w6kgcG91ciBham91dGVyIHVuIGpldSDDoCB2b3RyZSBjb2xsZWN0aW9uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnSW50ZXJuYWwgU2VydmVyIEVycm9yJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnVW5lIGVycmV1ciBpbnRlcm5lIGR1IHNlcnZldXIgc1xcJ2VzdCBwcm9kdWl0ZS4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFqb3V0ZXogZCdhdXRyZXMgY2FzIGF1IGJlc29pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdVbmUgZXJyZXVyIHNcXCdlc3QgcHJvZHVpdGUgOiAnICsgZXJyb3JUaHJvd247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNtZXNzYWdlJykuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPicgKyBtZXNzYWdlICsgJzwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcIiN0b2dnbGVBY2hpZXZlZFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGdhbWVJZCA9ICQodGhpcykuZGF0YSgnZ2FtZS1pZCcpO1xyXG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gJCh0aGlzKS5kYXRhKCdhY3Rpb24nKTtcclxuICAgICAgICAgICAgdmFyIG5ld0FjdGlvbiA9IChhY3Rpb24gPT09ICdhY2hpZXZlZCcpID8gJ3VuYWNoaWV2ZWQnIDogJ2FjaGlldmVkJztcclxuICAgICAgICAgICAgdmFyIG5ld1RleHQgPSAoYWN0aW9uID09PSAnYWNoaWV2ZWQnKSA/ICdUZXJtaW5lcicgOiAnVGVybWluZXInO1xyXG4gICAgICAgICAgICB2YXIgbmV3Q2xhc3MgPSAoYWN0aW9uID09PSAnYWNoaWV2ZWQnKSA/ICdidG4tZGFuZ2VyJyA6ICdidG4tc3VjY2Vzcyc7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBJRDogJyArIGdhbWVJZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IGFjdGlvbjogJyArIGFjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXcgYWN0aW9uOiAnICsgbmV3QWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05ldyB0ZXh0OiAnICsgbmV3VGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXcgY2xhc3M6ICcgKyBuZXdDbGFzcyk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnLycgKyBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2dhbWVJZCc6IGdhbWVJZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGFjdGlvbiBkYXRhIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjdG9nZ2xlQWNoaWV2ZWQnKS5kYXRhKCdhY3Rpb24nLCBuZXdBY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGJ1dHRvbiB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyN0b2dnbGVBY2hpZXZlZCcpLnRleHQobmV3VGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgYnV0dG9uIGNsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyN0b2dnbGVBY2hpZXZlZCcpLnJlbW92ZUNsYXNzKCdidG4tc3VjY2VzcyBidG4tZGFuZ2VyJykuYWRkQ2xhc3MobmV3Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGJ1dHRvbiBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyN0b2dnbGVBY2hpZXZlZCcpLnRleHQobmV3VGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdJY29uID0gKGFjdGlvbiA9PT0gJ2FjaGlldmVkJykgPyAnPGlvbi1pY29uIG5hbWU9XCJyZW1vdmUtY2lyY2xlLW91dGxpbmVcIiBjbGFzcz1cImJ1dHRvbi1pY29uXCI+PC9pb24taWNvbj4nIDogJzxpb24taWNvbiBuYW1lPVwiYWRkLWNpcmNsZS1vdXRsaW5lXCIgY2xhc3M9XCJidXR0b24taWNvblwiPjwvaW9uLWljb24+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3RvZ2dsZUFjaGlldmVkJykuaHRtbChuZXdUZXh0ICsgJyAnICsgbmV3SWNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI21lc3NhZ2UnKS5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+QW4gZXJyb3Igb2NjdXJyZWQ6ICcgKyBlcnJvclRocm93biArICc8L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIjdG9nZ2xlUGxhdGluZWRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBnYW1lSWQgPSAkKHRoaXMpLmRhdGEoJ2dhbWUtaWQnKTtcclxuICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICQodGhpcykuZGF0YSgnYWN0aW9uJyk7XHJcbiAgICAgICAgICAgIHZhciBuZXdBY3Rpb24gPSAoYWN0aW9uID09PSAncGxhdGluZWQnKSA/ICd1bnBsYXRpbmVkJyA6ICdwbGF0aW5lZCc7XHJcbiAgICAgICAgICAgIHZhciBuZXdUZXh0ID0gKGFjdGlvbiA9PT0gJ3BsYXRpbmVkJykgPyAnUGxhdGluZScgOiAnUGxhdGluZSc7XHJcbiAgICAgICAgICAgIHZhciBuZXdDbGFzcyA9IChhY3Rpb24gPT09ICdwbGF0aW5lZCcpID8gJ2J0bi1kYW5nZXInIDogJ2J0bi1zdWNjZXNzJztcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIElEOiAnICsgZ2FtZUlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0N1cnJlbnQgYWN0aW9uOiAnICsgYWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05ldyBhY3Rpb246ICcgKyBuZXdBY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTmV3IHRleHQ6ICcgKyBuZXdUZXh0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05ldyBjbGFzczogJyArIG5ld0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvJyArIGFjdGlvbixcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAnZ2FtZUlkJzogZ2FtZUlkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgYWN0aW9uIGRhdGEgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyN0b2dnbGVQbGF0aW5lZCcpLmRhdGEoJ2FjdGlvbicsIG5ld0FjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgYnV0dG9uIHRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3RvZ2dsZVBsYXRpbmVkJykudGV4dChuZXdUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIHRoZSBidXR0b24gY2xhc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3RvZ2dsZVBsYXRpbmVkJykucmVtb3ZlQ2xhc3MoJ2J0bi1zdWNjZXNzIGJ0bi1kYW5nZXInKS5hZGRDbGFzcyhuZXdDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgYnV0dG9uIGljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3RvZ2dsZVBsYXRpbmVkJykudGV4dChuZXdUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0ljb24gPSAoYWN0aW9uID09PSAncGxhdGluZWQnKSA/ICc8aW9uLWljb24gbmFtZT1cInJlbW92ZS1jaXJjbGUtb3V0bGluZVwiIGNsYXNzPVwiYnV0dG9uLWljb25cIj48L2lvbi1pY29uPicgOiAnPGlvbi1pY29uIG5hbWU9XCJhZGQtY2lyY2xlLW91dGxpbmVcIiBjbGFzcz1cImJ1dHRvbi1pY29uXCI+PC9pb24taWNvbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjdG9nZ2xlUGxhdGluZWQnKS5odG1sKG5ld1RleHQgKyAnICcgKyBuZXdJY29uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjbWVzc2FnZScpLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5BbiBlcnJvciBvY2N1cnJlZDogJyArIGVycm9yVGhyb3duICsgJzwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyBHcmFwaGlxdWUgZGUgbm90YXRpb24gTWV0YUNyaXRpY1xyXG4gICAgICAgIGZ1bmN0aW9uIHJhdGluZ0NoYXJ0KGdhbWVSYXRpbmcsIHgsIHkpIHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0geCAvIDI7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB5IC8gMjtcclxuICAgICAgICAgICAgbGV0IHJheW9uID0gd2lkdGggLyAyO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJhdGluZ0NvbG9yO1xyXG4gICAgICAgICAgICBpZiAoZ2FtZVJhdGluZyA+PSA3NSkge1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nQ29sb3IgPSAnI2M0ZTc5MSc7IC8vIFZlcnQgcG91ciAxMDAlIMOgIDc1JVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVSYXRpbmcgPj0gNTApIHtcclxuICAgICAgICAgICAgICAgIHJhdGluZ0NvbG9yID0gJyM4NGFjZmMnOyAvLyBCbGV1IHBvdXIgNzQlIMOgIDUwJVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVSYXRpbmcgPj0gMjUpIHtcclxuICAgICAgICAgICAgICAgIHJhdGluZ0NvbG9yID0gJyNmZWNhNzInOyAvLyBKYXVuZSBwb3VyIDQ5JSDDoCAyNSVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJhdGluZ0NvbG9yID0gJyNlZTcyN2EnOyAvLyBSb3VnZSBwb3VyIDI0JSDDoCAwJVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcmF0aW5nID0gZ2FtZVJhdGluZztcclxuICAgICAgICAgICAgbGV0IHJlbWFpbmluZyA9IDEwMCAtIGdhbWVSYXRpbmc7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmF0aW5ncyA9IFtyYXRpbmcsIHJlbWFpbmluZ107XHJcbiAgICAgICAgICAgIGxldCBjb2xvcnMgPSBbcmF0aW5nQ29sb3IsICdyZ2JhKDAsIDAsIDAsIDApJ107IC8vIENvdWxldXJzIGRlIGZvbmQgcG91ciBjaGFxdWUgc2VjdGlvblxyXG5cclxuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpO1xyXG4gICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IC1NYXRoLlBJIC8gMjtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF0aW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNsaWNlQW5nbGUgPSAyICogTWF0aC5QSSAqIHJhdGluZ3NbaV0gLyAxMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tpXTtcclxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocmF5b24sIHJheW9uKTtcclxuICAgICAgICAgICAgICAgIGN0eC5hcmMocmF5b24sIHJheW9uLCByYXlvbiwgc3RhcnRBbmdsZSwgc3RhcnRBbmdsZSArIHNsaWNlQW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhyYXlvbiwgcmF5b24pO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydEFuZ2xlICs9IHNsaWNlQW5nbGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIERlc3NpbmVyIHVuIGNlcmNsZSBibGFuYyBhdSBjZW50cmUgcG91ciBjcsOpZXIgbCdlZmZldCBkZSBkb251dFxyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzNhM2EzYSc7IC8vIENoYW5nZXogY2VjaSDDoCBsYSBjb3VsZXVyIGRlIHZvdHJlIGZvbmRcclxuICAgICAgICAgICAgLy8gdGFpbGxlIGR1IGNlcmNsZSBibGFuYyA6IHJheW9uICogMC41XHJcbiAgICAgICAgICAgIGN0eC5hcmMocmF5b24sIHJheW9uLCByYXlvbiAqIDAuOCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwZWwgZGUgbGEgZm9uY3Rpb24gZGFucyBnYW1lL3Nob3cuaHRtbC50d2lnXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9ICQoJyNteUNhbnZhcycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XHJcbiAgICAgICAgbGV0IHJhdGluZyA9IGNhbnZhcy5kYXRhKCdyYXRpbmcnKTtcclxuICAgICAgICByYXRpbmdDaGFydChyYXRpbmcsIDMwMCwgMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFmZmljaGVyIC8gTWFzcXVlciBsZXMgamV1eFxyXG5cclxuXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gaW5pdFNlYXJjaEZyaWVuZHMoKSB7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIHNlYXJjaEZyaWVuZHMuanMnKTtcclxuXHJcbiAgICAvLyBGb3JtdWxhaXJlIGRlIHJlY2hlcmNoZSBkeW5hbWlxdWUgZGVzIGFtaXNcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBwc2V1ZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZm9ybVtwc2V1ZG9dXCJdJykudmFsdWU7XHJcblxyXG4gICAgICAgIGZldGNoKCcvdXNlci9mcmllbmRzJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgICAgICAgICAgICdmb3JtW3BzZXVkb10nOiBwc2V1ZG9cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmllbmQtc2VhcmNoLXJlc3VsdHMnKS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW0gd2l0aCB5b3VyIGZldGNoIG9wZXJhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gaW5pdFNlYXJjaEdhbWVzKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIHNlYXJjaEdhbWVzLmpzJyk7XHJcblxyXG4gICAgLy8gRm9ybXVsYWlyZSBkZSByZWNoZXJjaGUgZHluYW1pcXVlIGRlcyBqZXV4XHJcbiAgICBsZXQgc2VhcmNoVGltZW91dDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgcXVlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0JykudmFsdWU7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChzZWFyY2hUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgc2VhcmNoVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmZXRjaCgnL3NlYXJjaD9xdWVyeT0nICsgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNEaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvdmVybGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheURpdi5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChnYW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTGluay5ocmVmID0gJy9nYW1lLycgKyBnYW1lLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTGluay50ZXh0Q29udGVudCA9IGdhbWUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUltYWdlLnNyYyA9IGdhbWUuY292ZXIgPyBnYW1lLmNvdmVyLnVybCA6ICdidWlsZC9pbWFnZXMvcGxhY2Vob2xkZXIuanBnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUltYWdlLmFsdCA9IGdhbWUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWFyY2hHYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEdhbWVEaXYuY2xhc3NOYW1lID0gJ3NlYXJjaC1nYW1lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoR2FtZURpdi5hcHBlbmRDaGlsZChnYW1lSW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hHYW1lRGl2LmFwcGVuZENoaWxkKGdhbWVMaW5rKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXlEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoR2FtZURpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNEaXYuYXBwZW5kQ2hpbGQob3ZlcmxheURpdik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG59IiwiIWZ1bmN0aW9uKGkpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGkpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWkocmVxdWlyZShcImpxdWVyeVwiKSk6aShqUXVlcnkpfShmdW5jdGlvbihpKXtcInVzZSBzdHJpY3RcIjt2YXIgZT13aW5kb3cuU2xpY2t8fHt9OyhlPWZ1bmN0aW9uKCl7dmFyIGU9MDtyZXR1cm4gZnVuY3Rpb24odCxvKXt2YXIgcyxuPXRoaXM7bi5kZWZhdWx0cz17YWNjZXNzaWJpbGl0eTohMCxhZGFwdGl2ZUhlaWdodDohMSxhcHBlbmRBcnJvd3M6aSh0KSxhcHBlbmREb3RzOmkodCksYXJyb3dzOiEwLGFzTmF2Rm9yOm51bGwscHJldkFycm93Oic8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj5QcmV2aW91czwvYnV0dG9uPicsbmV4dEFycm93Oic8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPk5leHQ8L2J1dHRvbj4nLGF1dG9wbGF5OiExLGF1dG9wbGF5U3BlZWQ6M2UzLGNlbnRlck1vZGU6ITEsY2VudGVyUGFkZGluZzpcIjUwcHhcIixjc3NFYXNlOlwiZWFzZVwiLGN1c3RvbVBhZ2luZzpmdW5jdGlvbihlLHQpe3JldHVybiBpKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAvPicpLnRleHQodCsxKX0sZG90czohMSxkb3RzQ2xhc3M6XCJzbGljay1kb3RzXCIsZHJhZ2dhYmxlOiEwLGVhc2luZzpcImxpbmVhclwiLGVkZ2VGcmljdGlvbjouMzUsZmFkZTohMSxmb2N1c09uU2VsZWN0OiExLGZvY3VzT25DaGFuZ2U6ITEsaW5maW5pdGU6ITAsaW5pdGlhbFNsaWRlOjAsbGF6eUxvYWQ6XCJvbmRlbWFuZFwiLG1vYmlsZUZpcnN0OiExLHBhdXNlT25Ib3ZlcjohMCxwYXVzZU9uRm9jdXM6ITAscGF1c2VPbkRvdHNIb3ZlcjohMSxyZXNwb25kVG86XCJ3aW5kb3dcIixyZXNwb25zaXZlOm51bGwscm93czoxLHJ0bDohMSxzbGlkZTpcIlwiLHNsaWRlc1BlclJvdzoxLHNsaWRlc1RvU2hvdzoxLHNsaWRlc1RvU2Nyb2xsOjEsc3BlZWQ6NTAwLHN3aXBlOiEwLHN3aXBlVG9TbGlkZTohMSx0b3VjaE1vdmU6ITAsdG91Y2hUaHJlc2hvbGQ6NSx1c2VDU1M6ITAsdXNlVHJhbnNmb3JtOiEwLHZhcmlhYmxlV2lkdGg6ITEsdmVydGljYWw6ITEsdmVydGljYWxTd2lwaW5nOiExLHdhaXRGb3JBbmltYXRlOiEwLHpJbmRleDoxZTN9LG4uaW5pdGlhbHM9e2FuaW1hdGluZzohMSxkcmFnZ2luZzohMSxhdXRvUGxheVRpbWVyOm51bGwsY3VycmVudERpcmVjdGlvbjowLGN1cnJlbnRMZWZ0Om51bGwsY3VycmVudFNsaWRlOjAsZGlyZWN0aW9uOjEsJGRvdHM6bnVsbCxsaXN0V2lkdGg6bnVsbCxsaXN0SGVpZ2h0Om51bGwsbG9hZEluZGV4OjAsJG5leHRBcnJvdzpudWxsLCRwcmV2QXJyb3c6bnVsbCxzY3JvbGxpbmc6ITEsc2xpZGVDb3VudDpudWxsLHNsaWRlV2lkdGg6bnVsbCwkc2xpZGVUcmFjazpudWxsLCRzbGlkZXM6bnVsbCxzbGlkaW5nOiExLHNsaWRlT2Zmc2V0OjAsc3dpcGVMZWZ0Om51bGwsc3dpcGluZzohMSwkbGlzdDpudWxsLHRvdWNoT2JqZWN0Ont9LHRyYW5zZm9ybXNFbmFibGVkOiExLHVuc2xpY2tlZDohMX0saS5leHRlbmQobixuLmluaXRpYWxzKSxuLmFjdGl2ZUJyZWFrcG9pbnQ9bnVsbCxuLmFuaW1UeXBlPW51bGwsbi5hbmltUHJvcD1udWxsLG4uYnJlYWtwb2ludHM9W10sbi5icmVha3BvaW50U2V0dGluZ3M9W10sbi5jc3NUcmFuc2l0aW9ucz0hMSxuLmZvY3Vzc2VkPSExLG4uaW50ZXJydXB0ZWQ9ITEsbi5oaWRkZW49XCJoaWRkZW5cIixuLnBhdXNlZD0hMCxuLnBvc2l0aW9uUHJvcD1udWxsLG4ucmVzcG9uZFRvPW51bGwsbi5yb3dDb3VudD0xLG4uc2hvdWxkQ2xpY2s9ITAsbi4kc2xpZGVyPWkodCksbi4kc2xpZGVzQ2FjaGU9bnVsbCxuLnRyYW5zZm9ybVR5cGU9bnVsbCxuLnRyYW5zaXRpb25UeXBlPW51bGwsbi52aXNpYmlsaXR5Q2hhbmdlPVwidmlzaWJpbGl0eWNoYW5nZVwiLG4ud2luZG93V2lkdGg9MCxuLndpbmRvd1RpbWVyPW51bGwscz1pKHQpLmRhdGEoXCJzbGlja1wiKXx8e30sbi5vcHRpb25zPWkuZXh0ZW5kKHt9LG4uZGVmYXVsdHMsbyxzKSxuLmN1cnJlbnRTbGlkZT1uLm9wdGlvbnMuaW5pdGlhbFNsaWRlLG4ub3JpZ2luYWxTZXR0aW5ncz1uLm9wdGlvbnMsdm9pZCAwIT09ZG9jdW1lbnQubW96SGlkZGVuPyhuLmhpZGRlbj1cIm1vekhpZGRlblwiLG4udmlzaWJpbGl0eUNoYW5nZT1cIm1venZpc2liaWxpdHljaGFuZ2VcIik6dm9pZCAwIT09ZG9jdW1lbnQud2Via2l0SGlkZGVuJiYobi5oaWRkZW49XCJ3ZWJraXRIaWRkZW5cIixuLnZpc2liaWxpdHlDaGFuZ2U9XCJ3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlXCIpLG4uYXV0b1BsYXk9aS5wcm94eShuLmF1dG9QbGF5LG4pLG4uYXV0b1BsYXlDbGVhcj1pLnByb3h5KG4uYXV0b1BsYXlDbGVhcixuKSxuLmF1dG9QbGF5SXRlcmF0b3I9aS5wcm94eShuLmF1dG9QbGF5SXRlcmF0b3Isbiksbi5jaGFuZ2VTbGlkZT1pLnByb3h5KG4uY2hhbmdlU2xpZGUsbiksbi5jbGlja0hhbmRsZXI9aS5wcm94eShuLmNsaWNrSGFuZGxlcixuKSxuLnNlbGVjdEhhbmRsZXI9aS5wcm94eShuLnNlbGVjdEhhbmRsZXIsbiksbi5zZXRQb3NpdGlvbj1pLnByb3h5KG4uc2V0UG9zaXRpb24sbiksbi5zd2lwZUhhbmRsZXI9aS5wcm94eShuLnN3aXBlSGFuZGxlcixuKSxuLmRyYWdIYW5kbGVyPWkucHJveHkobi5kcmFnSGFuZGxlcixuKSxuLmtleUhhbmRsZXI9aS5wcm94eShuLmtleUhhbmRsZXIsbiksbi5pbnN0YW5jZVVpZD1lKyssbi5odG1sRXhwcj0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC8sbi5yZWdpc3RlckJyZWFrcG9pbnRzKCksbi5pbml0KCEwKX19KCkpLnByb3RvdHlwZS5hY3RpdmF0ZUFEQT1mdW5jdGlvbigpe3RoaXMuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1hY3RpdmVcIikuYXR0cih7XCJhcmlhLWhpZGRlblwiOlwiZmFsc2VcIn0pLmZpbmQoXCJhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3RcIikuYXR0cih7dGFiaW5kZXg6XCIwXCJ9KX0sZS5wcm90b3R5cGUuYWRkU2xpZGU9ZS5wcm90b3R5cGUuc2xpY2tBZGQ9ZnVuY3Rpb24oZSx0LG8pe3ZhciBzPXRoaXM7aWYoXCJib29sZWFuXCI9PXR5cGVvZiB0KW89dCx0PW51bGw7ZWxzZSBpZih0PDB8fHQ+PXMuc2xpZGVDb3VudClyZXR1cm4hMTtzLnVubG9hZCgpLFwibnVtYmVyXCI9PXR5cGVvZiB0PzA9PT10JiYwPT09cy4kc2xpZGVzLmxlbmd0aD9pKGUpLmFwcGVuZFRvKHMuJHNsaWRlVHJhY2spOm8/aShlKS5pbnNlcnRCZWZvcmUocy4kc2xpZGVzLmVxKHQpKTppKGUpLmluc2VydEFmdGVyKHMuJHNsaWRlcy5lcSh0KSk6ITA9PT1vP2koZSkucHJlcGVuZFRvKHMuJHNsaWRlVHJhY2spOmkoZSkuYXBwZW5kVG8ocy4kc2xpZGVUcmFjaykscy4kc2xpZGVzPXMuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKSxzLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCkscy4kc2xpZGVUcmFjay5hcHBlbmQocy4kc2xpZGVzKSxzLiRzbGlkZXMuZWFjaChmdW5jdGlvbihlLHQpe2kodCkuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIixlKX0pLHMuJHNsaWRlc0NhY2hlPXMuJHNsaWRlcyxzLnJlaW5pdCgpfSxlLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpZigxPT09aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmITA9PT1pLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQmJiExPT09aS5vcHRpb25zLnZlcnRpY2FsKXt2YXIgZT1pLiRzbGlkZXMuZXEoaS5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KCEwKTtpLiRsaXN0LmFuaW1hdGUoe2hlaWdodDplfSxpLm9wdGlvbnMuc3BlZWQpfX0sZS5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlPWZ1bmN0aW9uKGUsdCl7dmFyIG89e30scz10aGlzO3MuYW5pbWF0ZUhlaWdodCgpLCEwPT09cy5vcHRpb25zLnJ0bCYmITE9PT1zLm9wdGlvbnMudmVydGljYWwmJihlPS1lKSwhMT09PXMudHJhbnNmb3Jtc0VuYWJsZWQ/ITE9PT1zLm9wdGlvbnMudmVydGljYWw/cy4kc2xpZGVUcmFjay5hbmltYXRlKHtsZWZ0OmV9LHMub3B0aW9ucy5zcGVlZCxzLm9wdGlvbnMuZWFzaW5nLHQpOnMuJHNsaWRlVHJhY2suYW5pbWF0ZSh7dG9wOmV9LHMub3B0aW9ucy5zcGVlZCxzLm9wdGlvbnMuZWFzaW5nLHQpOiExPT09cy5jc3NUcmFuc2l0aW9ucz8oITA9PT1zLm9wdGlvbnMucnRsJiYocy5jdXJyZW50TGVmdD0tcy5jdXJyZW50TGVmdCksaSh7YW5pbVN0YXJ0OnMuY3VycmVudExlZnR9KS5hbmltYXRlKHthbmltU3RhcnQ6ZX0se2R1cmF0aW9uOnMub3B0aW9ucy5zcGVlZCxlYXNpbmc6cy5vcHRpb25zLmVhc2luZyxzdGVwOmZ1bmN0aW9uKGkpe2k9TWF0aC5jZWlsKGkpLCExPT09cy5vcHRpb25zLnZlcnRpY2FsPyhvW3MuYW5pbVR5cGVdPVwidHJhbnNsYXRlKFwiK2krXCJweCwgMHB4KVwiLHMuJHNsaWRlVHJhY2suY3NzKG8pKToob1tzLmFuaW1UeXBlXT1cInRyYW5zbGF0ZSgwcHgsXCIraStcInB4KVwiLHMuJHNsaWRlVHJhY2suY3NzKG8pKX0sY29tcGxldGU6ZnVuY3Rpb24oKXt0JiZ0LmNhbGwoKX19KSk6KHMuYXBwbHlUcmFuc2l0aW9uKCksZT1NYXRoLmNlaWwoZSksITE9PT1zLm9wdGlvbnMudmVydGljYWw/b1tzLmFuaW1UeXBlXT1cInRyYW5zbGF0ZTNkKFwiK2UrXCJweCwgMHB4LCAwcHgpXCI6b1tzLmFuaW1UeXBlXT1cInRyYW5zbGF0ZTNkKDBweCxcIitlK1wicHgsIDBweClcIixzLiRzbGlkZVRyYWNrLmNzcyhvKSx0JiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cy5kaXNhYmxlVHJhbnNpdGlvbigpLHQuY2FsbCgpfSxzLm9wdGlvbnMuc3BlZWQpKX0sZS5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUub3B0aW9ucy5hc05hdkZvcjtyZXR1cm4gdCYmbnVsbCE9PXQmJih0PWkodCkubm90KGUuJHNsaWRlcikpLHR9LGUucHJvdG90eXBlLmFzTmF2Rm9yPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuZ2V0TmF2VGFyZ2V0KCk7bnVsbCE9PXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0LmVhY2goZnVuY3Rpb24oKXt2YXIgdD1pKHRoaXMpLnNsaWNrKFwiZ2V0U2xpY2tcIik7dC51bnNsaWNrZWR8fHQuc2xpZGVIYW5kbGVyKGUsITApfSl9LGUucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbj1mdW5jdGlvbihpKXt2YXIgZT10aGlzLHQ9e307ITE9PT1lLm9wdGlvbnMuZmFkZT90W2UudHJhbnNpdGlvblR5cGVdPWUudHJhbnNmb3JtVHlwZStcIiBcIitlLm9wdGlvbnMuc3BlZWQrXCJtcyBcIitlLm9wdGlvbnMuY3NzRWFzZTp0W2UudHJhbnNpdGlvblR5cGVdPVwib3BhY2l0eSBcIitlLm9wdGlvbnMuc3BlZWQrXCJtcyBcIitlLm9wdGlvbnMuY3NzRWFzZSwhMT09PWUub3B0aW9ucy5mYWRlP2UuJHNsaWRlVHJhY2suY3NzKHQpOmUuJHNsaWRlcy5lcShpKS5jc3ModCl9LGUucHJvdG90eXBlLmF1dG9QbGF5PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLmF1dG9QbGF5Q2xlYXIoKSxpLnNsaWRlQ291bnQ+aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGkuYXV0b1BsYXlUaW1lcj1zZXRJbnRlcnZhbChpLmF1dG9QbGF5SXRlcmF0b3IsaS5vcHRpb25zLmF1dG9wbGF5U3BlZWQpKX0sZS5wcm90b3R5cGUuYXV0b1BsYXlDbGVhcj1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5hdXRvUGxheVRpbWVyJiZjbGVhckludGVydmFsKGkuYXV0b1BsYXlUaW1lcil9LGUucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3I9ZnVuY3Rpb24oKXt2YXIgaT10aGlzLGU9aS5jdXJyZW50U2xpZGUraS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO2kucGF1c2VkfHxpLmludGVycnVwdGVkfHxpLmZvY3Vzc2VkfHwoITE9PT1pLm9wdGlvbnMuaW5maW5pdGUmJigxPT09aS5kaXJlY3Rpb24mJmkuY3VycmVudFNsaWRlKzE9PT1pLnNsaWRlQ291bnQtMT9pLmRpcmVjdGlvbj0wOjA9PT1pLmRpcmVjdGlvbiYmKGU9aS5jdXJyZW50U2xpZGUtaS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLGkuY3VycmVudFNsaWRlLTE9PTAmJihpLmRpcmVjdGlvbj0xKSkpLGkuc2xpZGVIYW5kbGVyKGUpKX0sZS5wcm90b3R5cGUuYnVpbGRBcnJvd3M9ZnVuY3Rpb24oKXt2YXIgZT10aGlzOyEwPT09ZS5vcHRpb25zLmFycm93cyYmKGUuJHByZXZBcnJvdz1pKGUub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKFwic2xpY2stYXJyb3dcIiksZS4kbmV4dEFycm93PWkoZS5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoXCJzbGljay1hcnJvd1wiKSxlLnNsaWRlQ291bnQ+ZS5vcHRpb25zLnNsaWRlc1RvU2hvdz8oZS4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2staGlkZGVuXCIpLnJlbW92ZUF0dHIoXCJhcmlhLWhpZGRlbiB0YWJpbmRleFwiKSxlLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIHRhYmluZGV4XCIpLGUuaHRtbEV4cHIudGVzdChlLm9wdGlvbnMucHJldkFycm93KSYmZS4kcHJldkFycm93LnByZXBlbmRUbyhlLm9wdGlvbnMuYXBwZW5kQXJyb3dzKSxlLmh0bWxFeHByLnRlc3QoZS5vcHRpb25zLm5leHRBcnJvdykmJmUuJG5leHRBcnJvdy5hcHBlbmRUbyhlLm9wdGlvbnMuYXBwZW5kQXJyb3dzKSwhMCE9PWUub3B0aW9ucy5pbmZpbml0ZSYmZS4kcHJldkFycm93LmFkZENsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIikpOmUuJHByZXZBcnJvdy5hZGQoZS4kbmV4dEFycm93KS5hZGRDbGFzcyhcInNsaWNrLWhpZGRlblwiKS5hdHRyKHtcImFyaWEtZGlzYWJsZWRcIjpcInRydWVcIix0YWJpbmRleDpcIi0xXCJ9KSl9LGUucHJvdG90eXBlLmJ1aWxkRG90cz1mdW5jdGlvbigpe3ZhciBlLHQsbz10aGlzO2lmKCEwPT09by5vcHRpb25zLmRvdHMpe2ZvcihvLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay1kb3R0ZWRcIiksdD1pKFwiPHVsIC8+XCIpLmFkZENsYXNzKG8ub3B0aW9ucy5kb3RzQ2xhc3MpLGU9MDtlPD1vLmdldERvdENvdW50KCk7ZSs9MSl0LmFwcGVuZChpKFwiPGxpIC8+XCIpLmFwcGVuZChvLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcyxvLGUpKSk7by4kZG90cz10LmFwcGVuZFRvKG8ub3B0aW9ucy5hcHBlbmREb3RzKSxvLiRkb3RzLmZpbmQoXCJsaVwiKS5maXJzdCgpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpfX0sZS5wcm90b3R5cGUuYnVpbGRPdXQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuJHNsaWRlcz1lLiRzbGlkZXIuY2hpbGRyZW4oZS5vcHRpb25zLnNsaWRlK1wiOm5vdCguc2xpY2stY2xvbmVkKVwiKS5hZGRDbGFzcyhcInNsaWNrLXNsaWRlXCIpLGUuc2xpZGVDb3VudD1lLiRzbGlkZXMubGVuZ3RoLGUuJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGUsdCl7aSh0KS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiLGUpLmRhdGEoXCJvcmlnaW5hbFN0eWxpbmdcIixpKHQpLmF0dHIoXCJzdHlsZVwiKXx8XCJcIil9KSxlLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay1zbGlkZXJcIiksZS4kc2xpZGVUcmFjaz0wPT09ZS5zbGlkZUNvdW50P2koJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhlLiRzbGlkZXIpOmUuJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCksZS4kbGlzdD1lLiRzbGlkZVRyYWNrLndyYXAoJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpLGUuJHNsaWRlVHJhY2suY3NzKFwib3BhY2l0eVwiLDApLCEwIT09ZS5vcHRpb25zLmNlbnRlck1vZGUmJiEwIT09ZS5vcHRpb25zLnN3aXBlVG9TbGlkZXx8KGUub3B0aW9ucy5zbGlkZXNUb1Njcm9sbD0xKSxpKFwiaW1nW2RhdGEtbGF6eV1cIixlLiRzbGlkZXIpLm5vdChcIltzcmNdXCIpLmFkZENsYXNzKFwic2xpY2stbG9hZGluZ1wiKSxlLnNldHVwSW5maW5pdGUoKSxlLmJ1aWxkQXJyb3dzKCksZS5idWlsZERvdHMoKSxlLnVwZGF0ZURvdHMoKSxlLnNldFNsaWRlQ2xhc3NlcyhcIm51bWJlclwiPT10eXBlb2YgZS5jdXJyZW50U2xpZGU/ZS5jdXJyZW50U2xpZGU6MCksITA9PT1lLm9wdGlvbnMuZHJhZ2dhYmxlJiZlLiRsaXN0LmFkZENsYXNzKFwiZHJhZ2dhYmxlXCIpfSxlLnByb3RvdHlwZS5idWlsZFJvd3M9ZnVuY3Rpb24oKXt2YXIgaSxlLHQsbyxzLG4scixsPXRoaXM7aWYobz1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbj1sLiRzbGlkZXIuY2hpbGRyZW4oKSxsLm9wdGlvbnMucm93cz4xKXtmb3Iocj1sLm9wdGlvbnMuc2xpZGVzUGVyUm93Kmwub3B0aW9ucy5yb3dzLHM9TWF0aC5jZWlsKG4ubGVuZ3RoL3IpLGk9MDtpPHM7aSsrKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2ZvcihlPTA7ZTxsLm9wdGlvbnMucm93cztlKyspe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKHQ9MDt0PGwub3B0aW9ucy5zbGlkZXNQZXJSb3c7dCsrKXt2YXIgYz1pKnIrKGUqbC5vcHRpb25zLnNsaWRlc1BlclJvdyt0KTtuLmdldChjKSYmYS5hcHBlbmRDaGlsZChuLmdldChjKSl9ZC5hcHBlbmRDaGlsZChhKX1vLmFwcGVuZENoaWxkKGQpfWwuJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvKSxsLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY3NzKHt3aWR0aDoxMDAvbC5vcHRpb25zLnNsaWRlc1BlclJvdytcIiVcIixkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9KX19LGUucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZT1mdW5jdGlvbihlLHQpe3ZhciBvLHMsbixyPXRoaXMsbD0hMSxkPXIuJHNsaWRlci53aWR0aCgpLGE9d2luZG93LmlubmVyV2lkdGh8fGkod2luZG93KS53aWR0aCgpO2lmKFwid2luZG93XCI9PT1yLnJlc3BvbmRUbz9uPWE6XCJzbGlkZXJcIj09PXIucmVzcG9uZFRvP249ZDpcIm1pblwiPT09ci5yZXNwb25kVG8mJihuPU1hdGgubWluKGEsZCkpLHIub3B0aW9ucy5yZXNwb25zaXZlJiZyLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgmJm51bGwhPT1yLm9wdGlvbnMucmVzcG9uc2l2ZSl7cz1udWxsO2ZvcihvIGluIHIuYnJlYWtwb2ludHMpci5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShvKSYmKCExPT09ci5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0P248ci5icmVha3BvaW50c1tvXSYmKHM9ci5icmVha3BvaW50c1tvXSk6bj5yLmJyZWFrcG9pbnRzW29dJiYocz1yLmJyZWFrcG9pbnRzW29dKSk7bnVsbCE9PXM/bnVsbCE9PXIuYWN0aXZlQnJlYWtwb2ludD8ocyE9PXIuYWN0aXZlQnJlYWtwb2ludHx8dCkmJihyLmFjdGl2ZUJyZWFrcG9pbnQ9cyxcInVuc2xpY2tcIj09PXIuYnJlYWtwb2ludFNldHRpbmdzW3NdP3IudW5zbGljayhzKTooci5vcHRpb25zPWkuZXh0ZW5kKHt9LHIub3JpZ2luYWxTZXR0aW5ncyxyLmJyZWFrcG9pbnRTZXR0aW5nc1tzXSksITA9PT1lJiYoci5jdXJyZW50U2xpZGU9ci5vcHRpb25zLmluaXRpYWxTbGlkZSksci5yZWZyZXNoKGUpKSxsPXMpOihyLmFjdGl2ZUJyZWFrcG9pbnQ9cyxcInVuc2xpY2tcIj09PXIuYnJlYWtwb2ludFNldHRpbmdzW3NdP3IudW5zbGljayhzKTooci5vcHRpb25zPWkuZXh0ZW5kKHt9LHIub3JpZ2luYWxTZXR0aW5ncyxyLmJyZWFrcG9pbnRTZXR0aW5nc1tzXSksITA9PT1lJiYoci5jdXJyZW50U2xpZGU9ci5vcHRpb25zLmluaXRpYWxTbGlkZSksci5yZWZyZXNoKGUpKSxsPXMpOm51bGwhPT1yLmFjdGl2ZUJyZWFrcG9pbnQmJihyLmFjdGl2ZUJyZWFrcG9pbnQ9bnVsbCxyLm9wdGlvbnM9ci5vcmlnaW5hbFNldHRpbmdzLCEwPT09ZSYmKHIuY3VycmVudFNsaWRlPXIub3B0aW9ucy5pbml0aWFsU2xpZGUpLHIucmVmcmVzaChlKSxsPXMpLGV8fCExPT09bHx8ci4kc2xpZGVyLnRyaWdnZXIoXCJicmVha3BvaW50XCIsW3IsbF0pfX0sZS5wcm90b3R5cGUuY2hhbmdlU2xpZGU9ZnVuY3Rpb24oZSx0KXt2YXIgbyxzLG4scj10aGlzLGw9aShlLmN1cnJlbnRUYXJnZXQpO3N3aXRjaChsLmlzKFwiYVwiKSYmZS5wcmV2ZW50RGVmYXVsdCgpLGwuaXMoXCJsaVwiKXx8KGw9bC5jbG9zZXN0KFwibGlcIikpLG49ci5zbGlkZUNvdW50JXIub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCE9MCxvPW4/MDooci5zbGlkZUNvdW50LXIuY3VycmVudFNsaWRlKSVyLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsZS5kYXRhLm1lc3NhZ2Upe2Nhc2VcInByZXZpb3VzXCI6cz0wPT09bz9yLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6ci5vcHRpb25zLnNsaWRlc1RvU2hvdy1vLHIuc2xpZGVDb3VudD5yLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZyLnNsaWRlSGFuZGxlcihyLmN1cnJlbnRTbGlkZS1zLCExLHQpO2JyZWFrO2Nhc2VcIm5leHRcIjpzPTA9PT1vP3Iub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDpvLHIuc2xpZGVDb3VudD5yLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZyLnNsaWRlSGFuZGxlcihyLmN1cnJlbnRTbGlkZStzLCExLHQpO2JyZWFrO2Nhc2VcImluZGV4XCI6dmFyIGQ9MD09PWUuZGF0YS5pbmRleD8wOmUuZGF0YS5pbmRleHx8bC5pbmRleCgpKnIub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtyLnNsaWRlSGFuZGxlcihyLmNoZWNrTmF2aWdhYmxlKGQpLCExLHQpLGwuY2hpbGRyZW4oKS50cmlnZ2VyKFwiZm9jdXNcIik7YnJlYWs7ZGVmYXVsdDpyZXR1cm59fSxlLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZT1mdW5jdGlvbihpKXt2YXIgZSx0O2lmKGU9dGhpcy5nZXROYXZpZ2FibGVJbmRleGVzKCksdD0wLGk+ZVtlLmxlbmd0aC0xXSlpPWVbZS5sZW5ndGgtMV07ZWxzZSBmb3IodmFyIG8gaW4gZSl7aWYoaTxlW29dKXtpPXQ7YnJlYWt9dD1lW29dfXJldHVybiBpfSxlLnByb3RvdHlwZS5jbGVhblVwRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLm9wdGlvbnMuZG90cyYmbnVsbCE9PWUuJGRvdHMmJihpKFwibGlcIixlLiRkb3RzKS5vZmYoXCJjbGljay5zbGlja1wiLGUuY2hhbmdlU2xpZGUpLm9mZihcIm1vdXNlZW50ZXIuc2xpY2tcIixpLnByb3h5KGUuaW50ZXJydXB0LGUsITApKS5vZmYoXCJtb3VzZWxlYXZlLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCExKSksITA9PT1lLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSYmZS4kZG90cy5vZmYoXCJrZXlkb3duLnNsaWNrXCIsZS5rZXlIYW5kbGVyKSksZS4kc2xpZGVyLm9mZihcImZvY3VzLnNsaWNrIGJsdXIuc2xpY2tcIiksITA9PT1lLm9wdGlvbnMuYXJyb3dzJiZlLnNsaWRlQ291bnQ+ZS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGUuJHByZXZBcnJvdyYmZS4kcHJldkFycm93Lm9mZihcImNsaWNrLnNsaWNrXCIsZS5jaGFuZ2VTbGlkZSksZS4kbmV4dEFycm93JiZlLiRuZXh0QXJyb3cub2ZmKFwiY2xpY2suc2xpY2tcIixlLmNoYW5nZVNsaWRlKSwhMD09PWUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5JiYoZS4kcHJldkFycm93JiZlLiRwcmV2QXJyb3cub2ZmKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlciksZS4kbmV4dEFycm93JiZlLiRuZXh0QXJyb3cub2ZmKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlcikpKSxlLiRsaXN0Lm9mZihcInRvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrXCIsZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub2ZmKFwidG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGlja1wiLGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9mZihcInRvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2tcIixlLnN3aXBlSGFuZGxlciksZS4kbGlzdC5vZmYoXCJ0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrXCIsZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub2ZmKFwiY2xpY2suc2xpY2tcIixlLmNsaWNrSGFuZGxlciksaShkb2N1bWVudCkub2ZmKGUudmlzaWJpbGl0eUNoYW5nZSxlLnZpc2liaWxpdHkpLGUuY2xlYW5VcFNsaWRlRXZlbnRzKCksITA9PT1lLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSYmZS4kbGlzdC5vZmYoXCJrZXlkb3duLnNsaWNrXCIsZS5rZXlIYW5kbGVyKSwhMD09PWUub3B0aW9ucy5mb2N1c09uU2VsZWN0JiZpKGUuJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub2ZmKFwiY2xpY2suc2xpY2tcIixlLnNlbGVjdEhhbmRsZXIpLGkod2luZG93KS5vZmYoXCJvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay1cIitlLmluc3RhbmNlVWlkLGUub3JpZW50YXRpb25DaGFuZ2UpLGkod2luZG93KS5vZmYoXCJyZXNpemUuc2xpY2suc2xpY2stXCIrZS5pbnN0YW5jZVVpZCxlLnJlc2l6ZSksaShcIltkcmFnZ2FibGUhPXRydWVdXCIsZS4kc2xpZGVUcmFjaykub2ZmKFwiZHJhZ3N0YXJ0XCIsZS5wcmV2ZW50RGVmYXVsdCksaSh3aW5kb3cpLm9mZihcImxvYWQuc2xpY2suc2xpY2stXCIrZS5pbnN0YW5jZVVpZCxlLnNldFBvc2l0aW9uKX0sZS5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLiRsaXN0Lm9mZihcIm1vdXNlZW50ZXIuc2xpY2tcIixpLnByb3h5KGUuaW50ZXJydXB0LGUsITApKSxlLiRsaXN0Lm9mZihcIm1vdXNlbGVhdmUuc2xpY2tcIixpLnByb3h5KGUuaW50ZXJydXB0LGUsITEpKX0sZS5wcm90b3R5cGUuY2xlYW5VcFJvd3M9ZnVuY3Rpb24oKXt2YXIgaSxlPXRoaXM7ZS5vcHRpb25zLnJvd3M+MSYmKChpPWUuJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCkpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxlLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQoaSkpfSxlLnByb3RvdHlwZS5jbGlja0hhbmRsZXI9ZnVuY3Rpb24oaSl7ITE9PT10aGlzLnNob3VsZENsaWNrJiYoaS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKSl9LGUucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0LmF1dG9QbGF5Q2xlYXIoKSx0LnRvdWNoT2JqZWN0PXt9LHQuY2xlYW5VcEV2ZW50cygpLGkoXCIuc2xpY2stY2xvbmVkXCIsdC4kc2xpZGVyKS5kZXRhY2goKSx0LiRkb3RzJiZ0LiRkb3RzLnJlbW92ZSgpLHQuJHByZXZBcnJvdyYmdC4kcHJldkFycm93Lmxlbmd0aCYmKHQuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlblwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleFwiKS5jc3MoXCJkaXNwbGF5XCIsXCJcIiksdC5odG1sRXhwci50ZXN0KHQub3B0aW9ucy5wcmV2QXJyb3cpJiZ0LiRwcmV2QXJyb3cucmVtb3ZlKCkpLHQuJG5leHRBcnJvdyYmdC4kbmV4dEFycm93Lmxlbmd0aCYmKHQuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlblwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleFwiKS5jc3MoXCJkaXNwbGF5XCIsXCJcIiksdC5odG1sRXhwci50ZXN0KHQub3B0aW9ucy5uZXh0QXJyb3cpJiZ0LiRuZXh0QXJyb3cucmVtb3ZlKCkpLHQuJHNsaWRlcyYmKHQuJHNsaWRlcy5yZW1vdmVDbGFzcyhcInNsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50XCIpLnJlbW92ZUF0dHIoXCJhcmlhLWhpZGRlblwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zbGljay1pbmRleFwiKS5lYWNoKGZ1bmN0aW9uKCl7aSh0aGlzKS5hdHRyKFwic3R5bGVcIixpKHRoaXMpLmRhdGEoXCJvcmlnaW5hbFN0eWxpbmdcIikpfSksdC4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLHQuJHNsaWRlVHJhY2suZGV0YWNoKCksdC4kbGlzdC5kZXRhY2goKSx0LiRzbGlkZXIuYXBwZW5kKHQuJHNsaWRlcykpLHQuY2xlYW5VcFJvd3MoKSx0LiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay1zbGlkZXJcIiksdC4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIiksdC4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2stZG90dGVkXCIpLHQudW5zbGlja2VkPSEwLGV8fHQuJHNsaWRlci50cmlnZ2VyKFwiZGVzdHJveVwiLFt0XSl9LGUucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uPWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMsdD17fTt0W2UudHJhbnNpdGlvblR5cGVdPVwiXCIsITE9PT1lLm9wdGlvbnMuZmFkZT9lLiRzbGlkZVRyYWNrLmNzcyh0KTplLiRzbGlkZXMuZXEoaSkuY3NzKHQpfSxlLnByb3RvdHlwZS5mYWRlU2xpZGU9ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzOyExPT09dC5jc3NUcmFuc2l0aW9ucz8odC4kc2xpZGVzLmVxKGkpLmNzcyh7ekluZGV4OnQub3B0aW9ucy56SW5kZXh9KSx0LiRzbGlkZXMuZXEoaSkuYW5pbWF0ZSh7b3BhY2l0eToxfSx0Lm9wdGlvbnMuc3BlZWQsdC5vcHRpb25zLmVhc2luZyxlKSk6KHQuYXBwbHlUcmFuc2l0aW9uKGkpLHQuJHNsaWRlcy5lcShpKS5jc3Moe29wYWNpdHk6MSx6SW5kZXg6dC5vcHRpb25zLnpJbmRleH0pLGUmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LmRpc2FibGVUcmFuc2l0aW9uKGkpLGUuY2FsbCgpfSx0Lm9wdGlvbnMuc3BlZWQpKX0sZS5wcm90b3R5cGUuZmFkZVNsaWRlT3V0PWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7ITE9PT1lLmNzc1RyYW5zaXRpb25zP2UuJHNsaWRlcy5lcShpKS5hbmltYXRlKHtvcGFjaXR5OjAsekluZGV4OmUub3B0aW9ucy56SW5kZXgtMn0sZS5vcHRpb25zLnNwZWVkLGUub3B0aW9ucy5lYXNpbmcpOihlLmFwcGx5VHJhbnNpdGlvbihpKSxlLiRzbGlkZXMuZXEoaSkuY3NzKHtvcGFjaXR5OjAsekluZGV4OmUub3B0aW9ucy56SW5kZXgtMn0pKX0sZS5wcm90b3R5cGUuZmlsdGVyU2xpZGVzPWUucHJvdG90eXBlLnNsaWNrRmlsdGVyPWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7bnVsbCE9PWkmJihlLiRzbGlkZXNDYWNoZT1lLiRzbGlkZXMsZS51bmxvYWQoKSxlLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCksZS4kc2xpZGVzQ2FjaGUuZmlsdGVyKGkpLmFwcGVuZFRvKGUuJHNsaWRlVHJhY2spLGUucmVpbml0KCkpfSxlLnByb3RvdHlwZS5mb2N1c0hhbmRsZXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuJHNsaWRlci5vZmYoXCJmb2N1cy5zbGljayBibHVyLnNsaWNrXCIpLm9uKFwiZm9jdXMuc2xpY2sgYmx1ci5zbGlja1wiLFwiKlwiLGZ1bmN0aW9uKHQpe3Quc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7dmFyIG89aSh0aGlzKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5vcHRpb25zLnBhdXNlT25Gb2N1cyYmKGUuZm9jdXNzZWQ9by5pcyhcIjpmb2N1c1wiKSxlLmF1dG9QbGF5KCkpfSwwKX0pfSxlLnByb3RvdHlwZS5nZXRDdXJyZW50PWUucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY3VycmVudFNsaWRlfSxlLnByb3RvdHlwZS5nZXREb3RDb3VudD1mdW5jdGlvbigpe3ZhciBpPXRoaXMsZT0wLHQ9MCxvPTA7aWYoITA9PT1pLm9wdGlvbnMuaW5maW5pdGUpaWYoaS5zbGlkZUNvdW50PD1pLm9wdGlvbnMuc2xpZGVzVG9TaG93KSsrbztlbHNlIGZvcig7ZTxpLnNsaWRlQ291bnQ7KSsrbyxlPXQraS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLHQrPWkub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDw9aS5vcHRpb25zLnNsaWRlc1RvU2hvdz9pLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6aS5vcHRpb25zLnNsaWRlc1RvU2hvdztlbHNlIGlmKCEwPT09aS5vcHRpb25zLmNlbnRlck1vZGUpbz1pLnNsaWRlQ291bnQ7ZWxzZSBpZihpLm9wdGlvbnMuYXNOYXZGb3IpZm9yKDtlPGkuc2xpZGVDb3VudDspKytvLGU9dCtpLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsdCs9aS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPD1pLm9wdGlvbnMuc2xpZGVzVG9TaG93P2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDppLm9wdGlvbnMuc2xpZGVzVG9TaG93O2Vsc2Ugbz0xK01hdGguY2VpbCgoaS5zbGlkZUNvdW50LWkub3B0aW9ucy5zbGlkZXNUb1Nob3cpL2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7cmV0dXJuIG8tMX0sZS5wcm90b3R5cGUuZ2V0TGVmdD1mdW5jdGlvbihpKXt2YXIgZSx0LG8scyxuPXRoaXMscj0wO3JldHVybiBuLnNsaWRlT2Zmc2V0PTAsdD1uLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCghMCksITA9PT1uLm9wdGlvbnMuaW5maW5pdGU/KG4uc2xpZGVDb3VudD5uLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYobi5zbGlkZU9mZnNldD1uLnNsaWRlV2lkdGgqbi5vcHRpb25zLnNsaWRlc1RvU2hvdyotMSxzPS0xLCEwPT09bi5vcHRpb25zLnZlcnRpY2FsJiYhMD09PW4ub3B0aW9ucy5jZW50ZXJNb2RlJiYoMj09PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3c/cz0tMS41OjE9PT1uLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYocz0tMikpLHI9dCpuLm9wdGlvbnMuc2xpZGVzVG9TaG93KnMpLG4uc2xpZGVDb3VudCVuLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwhPTAmJmkrbi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPm4uc2xpZGVDb3VudCYmbi5zbGlkZUNvdW50Pm4ub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpPm4uc2xpZGVDb3VudD8obi5zbGlkZU9mZnNldD0obi5vcHRpb25zLnNsaWRlc1RvU2hvdy0oaS1uLnNsaWRlQ291bnQpKSpuLnNsaWRlV2lkdGgqLTEscj0obi5vcHRpb25zLnNsaWRlc1RvU2hvdy0oaS1uLnNsaWRlQ291bnQpKSp0Ki0xKToobi5zbGlkZU9mZnNldD1uLnNsaWRlQ291bnQlbi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKm4uc2xpZGVXaWR0aCotMSxyPW4uc2xpZGVDb3VudCVuLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwqdCotMSkpKTppK24ub3B0aW9ucy5zbGlkZXNUb1Nob3c+bi5zbGlkZUNvdW50JiYobi5zbGlkZU9mZnNldD0oaStuLm9wdGlvbnMuc2xpZGVzVG9TaG93LW4uc2xpZGVDb3VudCkqbi5zbGlkZVdpZHRoLHI9KGkrbi5vcHRpb25zLnNsaWRlc1RvU2hvdy1uLnNsaWRlQ291bnQpKnQpLG4uc2xpZGVDb3VudDw9bi5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKG4uc2xpZGVPZmZzZXQ9MCxyPTApLCEwPT09bi5vcHRpb25zLmNlbnRlck1vZGUmJm4uc2xpZGVDb3VudDw9bi5vcHRpb25zLnNsaWRlc1RvU2hvdz9uLnNsaWRlT2Zmc2V0PW4uc2xpZGVXaWR0aCpNYXRoLmZsb29yKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLzItbi5zbGlkZVdpZHRoKm4uc2xpZGVDb3VudC8yOiEwPT09bi5vcHRpb25zLmNlbnRlck1vZGUmJiEwPT09bi5vcHRpb25zLmluZmluaXRlP24uc2xpZGVPZmZzZXQrPW4uc2xpZGVXaWR0aCpNYXRoLmZsb29yKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMiktbi5zbGlkZVdpZHRoOiEwPT09bi5vcHRpb25zLmNlbnRlck1vZGUmJihuLnNsaWRlT2Zmc2V0PTAsbi5zbGlkZU9mZnNldCs9bi5zbGlkZVdpZHRoKk1hdGguZmxvb3Iobi5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKSksZT0hMT09PW4ub3B0aW9ucy52ZXJ0aWNhbD9pKm4uc2xpZGVXaWR0aCotMStuLnNsaWRlT2Zmc2V0OmkqdCotMStyLCEwPT09bi5vcHRpb25zLnZhcmlhYmxlV2lkdGgmJihvPW4uc2xpZGVDb3VudDw9bi5vcHRpb25zLnNsaWRlc1RvU2hvd3x8ITE9PT1uLm9wdGlvbnMuaW5maW5pdGU/bi4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5lcShpKTpuLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmVxKGkrbi5vcHRpb25zLnNsaWRlc1RvU2hvdyksZT0hMD09PW4ub3B0aW9ucy5ydGw/b1swXT8tMSoobi4kc2xpZGVUcmFjay53aWR0aCgpLW9bMF0ub2Zmc2V0TGVmdC1vLndpZHRoKCkpOjA6b1swXT8tMSpvWzBdLm9mZnNldExlZnQ6MCwhMD09PW4ub3B0aW9ucy5jZW50ZXJNb2RlJiYobz1uLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3d8fCExPT09bi5vcHRpb25zLmluZmluaXRlP24uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoaSk6bi4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5lcShpK24ub3B0aW9ucy5zbGlkZXNUb1Nob3crMSksZT0hMD09PW4ub3B0aW9ucy5ydGw/b1swXT8tMSoobi4kc2xpZGVUcmFjay53aWR0aCgpLW9bMF0ub2Zmc2V0TGVmdC1vLndpZHRoKCkpOjA6b1swXT8tMSpvWzBdLm9mZnNldExlZnQ6MCxlKz0obi4kbGlzdC53aWR0aCgpLW8ub3V0ZXJXaWR0aCgpKS8yKSksZX0sZS5wcm90b3R5cGUuZ2V0T3B0aW9uPWUucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uPWZ1bmN0aW9uKGkpe3JldHVybiB0aGlzLm9wdGlvbnNbaV19LGUucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXM9ZnVuY3Rpb24oKXt2YXIgaSxlPXRoaXMsdD0wLG89MCxzPVtdO2ZvcighMT09PWUub3B0aW9ucy5pbmZpbml0ZT9pPWUuc2xpZGVDb3VudDoodD0tMSplLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsbz0tMSplLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsaT0yKmUuc2xpZGVDb3VudCk7dDxpOylzLnB1c2godCksdD1vK2Uub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCxvKz1lLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw8PWUub3B0aW9ucy5zbGlkZXNUb1Nob3c/ZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOmUub3B0aW9ucy5zbGlkZXNUb1Nob3c7cmV0dXJuIHN9LGUucHJvdG90eXBlLmdldFNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGUucHJvdG90eXBlLmdldFNsaWRlQ291bnQ9ZnVuY3Rpb24oKXt2YXIgZSx0LG89dGhpcztyZXR1cm4gdD0hMD09PW8ub3B0aW9ucy5jZW50ZXJNb2RlP28uc2xpZGVXaWR0aCpNYXRoLmZsb29yKG8ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMik6MCwhMD09PW8ub3B0aW9ucy5zd2lwZVRvU2xpZGU/KG8uJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1zbGlkZVwiKS5lYWNoKGZ1bmN0aW9uKHMsbil7aWYobi5vZmZzZXRMZWZ0LXQraShuKS5vdXRlcldpZHRoKCkvMj4tMSpvLnN3aXBlTGVmdClyZXR1cm4gZT1uLCExfSksTWF0aC5hYnMoaShlKS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiKS1vLmN1cnJlbnRTbGlkZSl8fDEpOm8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbH0sZS5wcm90b3R5cGUuZ29Ubz1lLnByb3RvdHlwZS5zbGlja0dvVG89ZnVuY3Rpb24oaSxlKXt0aGlzLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOlwiaW5kZXhcIixpbmRleDpwYXJzZUludChpKX19LGUpfSxlLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aSh0LiRzbGlkZXIpLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIil8fChpKHQuJHNsaWRlcikuYWRkQ2xhc3MoXCJzbGljay1pbml0aWFsaXplZFwiKSx0LmJ1aWxkUm93cygpLHQuYnVpbGRPdXQoKSx0LnNldFByb3BzKCksdC5zdGFydExvYWQoKSx0LmxvYWRTbGlkZXIoKSx0LmluaXRpYWxpemVFdmVudHMoKSx0LnVwZGF0ZUFycm93cygpLHQudXBkYXRlRG90cygpLHQuY2hlY2tSZXNwb25zaXZlKCEwKSx0LmZvY3VzSGFuZGxlcigpKSxlJiZ0LiRzbGlkZXIudHJpZ2dlcihcImluaXRcIixbdF0pLCEwPT09dC5vcHRpb25zLmFjY2Vzc2liaWxpdHkmJnQuaW5pdEFEQSgpLHQub3B0aW9ucy5hdXRvcGxheSYmKHQucGF1c2VkPSExLHQuYXV0b1BsYXkoKSl9LGUucHJvdG90eXBlLmluaXRBREE9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9TWF0aC5jZWlsKGUuc2xpZGVDb3VudC9lLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxvPWUuZ2V0TmF2aWdhYmxlSW5kZXhlcygpLmZpbHRlcihmdW5jdGlvbihpKXtyZXR1cm4gaT49MCYmaTxlLnNsaWRlQ291bnR9KTtlLiRzbGlkZXMuYWRkKGUuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1jbG9uZWRcIikpLmF0dHIoe1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIix0YWJpbmRleDpcIi0xXCJ9KS5maW5kKFwiYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0XCIpLmF0dHIoe3RhYmluZGV4OlwiLTFcIn0pLG51bGwhPT1lLiRkb3RzJiYoZS4kc2xpZGVzLm5vdChlLiRzbGlkZVRyYWNrLmZpbmQoXCIuc2xpY2stY2xvbmVkXCIpKS5lYWNoKGZ1bmN0aW9uKHQpe3ZhciBzPW8uaW5kZXhPZih0KTtpKHRoaXMpLmF0dHIoe3JvbGU6XCJ0YWJwYW5lbFwiLGlkOlwic2xpY2stc2xpZGVcIitlLmluc3RhbmNlVWlkK3QsdGFiaW5kZXg6LTF9KSwtMSE9PXMmJmkodGhpcykuYXR0cih7XCJhcmlhLWRlc2NyaWJlZGJ5XCI6XCJzbGljay1zbGlkZS1jb250cm9sXCIrZS5pbnN0YW5jZVVpZCtzfSl9KSxlLiRkb3RzLmF0dHIoXCJyb2xlXCIsXCJ0YWJsaXN0XCIpLmZpbmQoXCJsaVwiKS5lYWNoKGZ1bmN0aW9uKHMpe3ZhciBuPW9bc107aSh0aGlzKS5hdHRyKHtyb2xlOlwicHJlc2VudGF0aW9uXCJ9KSxpKHRoaXMpLmZpbmQoXCJidXR0b25cIikuZmlyc3QoKS5hdHRyKHtyb2xlOlwidGFiXCIsaWQ6XCJzbGljay1zbGlkZS1jb250cm9sXCIrZS5pbnN0YW5jZVVpZCtzLFwiYXJpYS1jb250cm9sc1wiOlwic2xpY2stc2xpZGVcIitlLmluc3RhbmNlVWlkK24sXCJhcmlhLWxhYmVsXCI6cysxK1wiIG9mIFwiK3QsXCJhcmlhLXNlbGVjdGVkXCI6bnVsbCx0YWJpbmRleDpcIi0xXCJ9KX0pLmVxKGUuY3VycmVudFNsaWRlKS5maW5kKFwiYnV0dG9uXCIpLmF0dHIoe1wiYXJpYS1zZWxlY3RlZFwiOlwidHJ1ZVwiLHRhYmluZGV4OlwiMFwifSkuZW5kKCkpO2Zvcih2YXIgcz1lLmN1cnJlbnRTbGlkZSxuPXMrZS5vcHRpb25zLnNsaWRlc1RvU2hvdztzPG47cysrKWUuJHNsaWRlcy5lcShzKS5hdHRyKFwidGFiaW5kZXhcIiwwKTtlLmFjdGl2YXRlQURBKCl9LGUucHJvdG90eXBlLmluaXRBcnJvd0V2ZW50cz1mdW5jdGlvbigpe3ZhciBpPXRoaXM7ITA9PT1pLm9wdGlvbnMuYXJyb3dzJiZpLnNsaWRlQ291bnQ+aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGkuJHByZXZBcnJvdy5vZmYoXCJjbGljay5zbGlja1wiKS5vbihcImNsaWNrLnNsaWNrXCIse21lc3NhZ2U6XCJwcmV2aW91c1wifSxpLmNoYW5nZVNsaWRlKSxpLiRuZXh0QXJyb3cub2ZmKFwiY2xpY2suc2xpY2tcIikub24oXCJjbGljay5zbGlja1wiLHttZXNzYWdlOlwibmV4dFwifSxpLmNoYW5nZVNsaWRlKSwhMD09PWkub3B0aW9ucy5hY2Nlc3NpYmlsaXR5JiYoaS4kcHJldkFycm93Lm9uKFwia2V5ZG93bi5zbGlja1wiLGkua2V5SGFuZGxlciksaS4kbmV4dEFycm93Lm9uKFwia2V5ZG93bi5zbGlja1wiLGkua2V5SGFuZGxlcikpKX0sZS5wcm90b3R5cGUuaW5pdERvdEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ITA9PT1lLm9wdGlvbnMuZG90cyYmKGkoXCJsaVwiLGUuJGRvdHMpLm9uKFwiY2xpY2suc2xpY2tcIix7bWVzc2FnZTpcImluZGV4XCJ9LGUuY2hhbmdlU2xpZGUpLCEwPT09ZS5vcHRpb25zLmFjY2Vzc2liaWxpdHkmJmUuJGRvdHMub24oXCJrZXlkb3duLnNsaWNrXCIsZS5rZXlIYW5kbGVyKSksITA9PT1lLm9wdGlvbnMuZG90cyYmITA9PT1lLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciYmaShcImxpXCIsZS4kZG90cykub24oXCJtb3VzZWVudGVyLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCEwKSkub24oXCJtb3VzZWxlYXZlLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCExKSl9LGUucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5vcHRpb25zLnBhdXNlT25Ib3ZlciYmKGUuJGxpc3Qub24oXCJtb3VzZWVudGVyLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCEwKSksZS4kbGlzdC5vbihcIm1vdXNlbGVhdmUuc2xpY2tcIixpLnByb3h5KGUuaW50ZXJydXB0LGUsITEpKSl9LGUucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuaW5pdEFycm93RXZlbnRzKCksZS5pbml0RG90RXZlbnRzKCksZS5pbml0U2xpZGVFdmVudHMoKSxlLiRsaXN0Lm9uKFwidG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2tcIix7YWN0aW9uOlwic3RhcnRcIn0sZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub24oXCJ0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrXCIse2FjdGlvbjpcIm1vdmVcIn0sZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub24oXCJ0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrXCIse2FjdGlvbjpcImVuZFwifSxlLnN3aXBlSGFuZGxlciksZS4kbGlzdC5vbihcInRvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2tcIix7YWN0aW9uOlwiZW5kXCJ9LGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9uKFwiY2xpY2suc2xpY2tcIixlLmNsaWNrSGFuZGxlciksaShkb2N1bWVudCkub24oZS52aXNpYmlsaXR5Q2hhbmdlLGkucHJveHkoZS52aXNpYmlsaXR5LGUpKSwhMD09PWUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5JiZlLiRsaXN0Lm9uKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlciksITA9PT1lLm9wdGlvbnMuZm9jdXNPblNlbGVjdCYmaShlLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKFwiY2xpY2suc2xpY2tcIixlLnNlbGVjdEhhbmRsZXIpLGkod2luZG93KS5vbihcIm9yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsaS5wcm94eShlLm9yaWVudGF0aW9uQ2hhbmdlLGUpKSxpKHdpbmRvdykub24oXCJyZXNpemUuc2xpY2suc2xpY2stXCIrZS5pbnN0YW5jZVVpZCxpLnByb3h5KGUucmVzaXplLGUpKSxpKFwiW2RyYWdnYWJsZSE9dHJ1ZV1cIixlLiRzbGlkZVRyYWNrKS5vbihcImRyYWdzdGFydFwiLGUucHJldmVudERlZmF1bHQpLGkod2luZG93KS5vbihcImxvYWQuc2xpY2suc2xpY2stXCIrZS5pbnN0YW5jZVVpZCxlLnNldFBvc2l0aW9uKSxpKGUuc2V0UG9zaXRpb24pfSxlLnByb3RvdHlwZS5pbml0VUk9ZnVuY3Rpb24oKXt2YXIgaT10aGlzOyEwPT09aS5vcHRpb25zLmFycm93cyYmaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpLiRwcmV2QXJyb3cuc2hvdygpLGkuJG5leHRBcnJvdy5zaG93KCkpLCEwPT09aS5vcHRpb25zLmRvdHMmJmkuc2xpZGVDb3VudD5pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZpLiRkb3RzLnNob3coKX0sZS5wcm90b3R5cGUua2V5SGFuZGxlcj1mdW5jdGlvbihpKXt2YXIgZT10aGlzO2kudGFyZ2V0LnRhZ05hbWUubWF0Y2goXCJURVhUQVJFQXxJTlBVVHxTRUxFQ1RcIil8fCgzNz09PWkua2V5Q29kZSYmITA9PT1lLm9wdGlvbnMuYWNjZXNzaWJpbGl0eT9lLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOiEwPT09ZS5vcHRpb25zLnJ0bD9cIm5leHRcIjpcInByZXZpb3VzXCJ9fSk6Mzk9PT1pLmtleUNvZGUmJiEwPT09ZS5vcHRpb25zLmFjY2Vzc2liaWxpdHkmJmUuY2hhbmdlU2xpZGUoe2RhdGE6e21lc3NhZ2U6ITA9PT1lLm9wdGlvbnMucnRsP1wicHJldmlvdXNcIjpcIm5leHRcIn19KSl9LGUucHJvdG90eXBlLmxhenlMb2FkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXtpKFwiaW1nW2RhdGEtbGF6eV1cIixlKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9aSh0aGlzKSx0PWkodGhpcykuYXR0cihcImRhdGEtbGF6eVwiKSxvPWkodGhpcykuYXR0cihcImRhdGEtc3Jjc2V0XCIpLHM9aSh0aGlzKS5hdHRyKFwiZGF0YS1zaXplc1wiKXx8bi4kc2xpZGVyLmF0dHIoXCJkYXRhLXNpemVzXCIpLHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtyLm9ubG9hZD1mdW5jdGlvbigpe2UuYW5pbWF0ZSh7b3BhY2l0eTowfSwxMDAsZnVuY3Rpb24oKXtvJiYoZS5hdHRyKFwic3Jjc2V0XCIsbykscyYmZS5hdHRyKFwic2l6ZXNcIixzKSksZS5hdHRyKFwic3JjXCIsdCkuYW5pbWF0ZSh7b3BhY2l0eToxfSwyMDAsZnVuY3Rpb24oKXtlLnJlbW92ZUF0dHIoXCJkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplc1wiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIil9KSxuLiRzbGlkZXIudHJpZ2dlcihcImxhenlMb2FkZWRcIixbbixlLHRdKX0pfSxyLm9uZXJyb3I9ZnVuY3Rpb24oKXtlLnJlbW92ZUF0dHIoXCJkYXRhLWxhenlcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpLmFkZENsYXNzKFwic2xpY2stbGF6eWxvYWQtZXJyb3JcIiksbi4kc2xpZGVyLnRyaWdnZXIoXCJsYXp5TG9hZEVycm9yXCIsW24sZSx0XSl9LHIuc3JjPXR9KX12YXIgdCxvLHMsbj10aGlzO2lmKCEwPT09bi5vcHRpb25zLmNlbnRlck1vZGU/ITA9PT1uLm9wdGlvbnMuaW5maW5pdGU/cz0obz1uLmN1cnJlbnRTbGlkZSsobi5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKzEpKStuLm9wdGlvbnMuc2xpZGVzVG9TaG93KzI6KG89TWF0aC5tYXgoMCxuLmN1cnJlbnRTbGlkZS0obi5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKzEpKSxzPW4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMisxKzIrbi5jdXJyZW50U2xpZGUpOihvPW4ub3B0aW9ucy5pbmZpbml0ZT9uLm9wdGlvbnMuc2xpZGVzVG9TaG93K24uY3VycmVudFNsaWRlOm4uY3VycmVudFNsaWRlLHM9TWF0aC5jZWlsKG8rbi5vcHRpb25zLnNsaWRlc1RvU2hvdyksITA9PT1uLm9wdGlvbnMuZmFkZSYmKG8+MCYmby0tLHM8PW4uc2xpZGVDb3VudCYmcysrKSksdD1uLiRzbGlkZXIuZmluZChcIi5zbGljay1zbGlkZVwiKS5zbGljZShvLHMpLFwiYW50aWNpcGF0ZWRcIj09PW4ub3B0aW9ucy5sYXp5TG9hZClmb3IodmFyIHI9by0xLGw9cyxkPW4uJHNsaWRlci5maW5kKFwiLnNsaWNrLXNsaWRlXCIpLGE9MDthPG4ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDthKyspcjwwJiYocj1uLnNsaWRlQ291bnQtMSksdD0odD10LmFkZChkLmVxKHIpKSkuYWRkKGQuZXEobCkpLHItLSxsKys7ZSh0KSxuLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3c/ZShuLiRzbGlkZXIuZmluZChcIi5zbGljay1zbGlkZVwiKSk6bi5jdXJyZW50U2xpZGU+PW4uc2xpZGVDb3VudC1uLm9wdGlvbnMuc2xpZGVzVG9TaG93P2Uobi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stY2xvbmVkXCIpLnNsaWNlKDAsbi5vcHRpb25zLnNsaWRlc1RvU2hvdykpOjA9PT1uLmN1cnJlbnRTbGlkZSYmZShuLiRzbGlkZXIuZmluZChcIi5zbGljay1jbG9uZWRcIikuc2xpY2UoLTEqbi5vcHRpb25zLnNsaWRlc1RvU2hvdykpfSxlLnByb3RvdHlwZS5sb2FkU2xpZGVyPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLnNldFBvc2l0aW9uKCksaS4kc2xpZGVUcmFjay5jc3Moe29wYWNpdHk6MX0pLGkuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIiksaS5pbml0VUkoKSxcInByb2dyZXNzaXZlXCI9PT1pLm9wdGlvbnMubGF6eUxvYWQmJmkucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpfSxlLnByb3RvdHlwZS5uZXh0PWUucHJvdG90eXBlLnNsaWNrTmV4dD1mdW5jdGlvbigpe3RoaXMuY2hhbmdlU2xpZGUoe2RhdGE6e21lc3NhZ2U6XCJuZXh0XCJ9fSl9LGUucHJvdG90eXBlLm9yaWVudGF0aW9uQ2hhbmdlPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLmNoZWNrUmVzcG9uc2l2ZSgpLGkuc2V0UG9zaXRpb24oKX0sZS5wcm90b3R5cGUucGF1c2U9ZS5wcm90b3R5cGUuc2xpY2tQYXVzZT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5hdXRvUGxheUNsZWFyKCksaS5wYXVzZWQ9ITB9LGUucHJvdG90eXBlLnBsYXk9ZS5wcm90b3R5cGUuc2xpY2tQbGF5PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLmF1dG9QbGF5KCksaS5vcHRpb25zLmF1dG9wbGF5PSEwLGkucGF1c2VkPSExLGkuZm9jdXNzZWQ9ITEsaS5pbnRlcnJ1cHRlZD0hMX0sZS5wcm90b3R5cGUucG9zdFNsaWRlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dC51bnNsaWNrZWR8fCh0LiRzbGlkZXIudHJpZ2dlcihcImFmdGVyQ2hhbmdlXCIsW3QsZV0pLHQuYW5pbWF0aW5nPSExLHQuc2xpZGVDb3VudD50Lm9wdGlvbnMuc2xpZGVzVG9TaG93JiZ0LnNldFBvc2l0aW9uKCksdC5zd2lwZUxlZnQ9bnVsbCx0Lm9wdGlvbnMuYXV0b3BsYXkmJnQuYXV0b1BsYXkoKSwhMD09PXQub3B0aW9ucy5hY2Nlc3NpYmlsaXR5JiYodC5pbml0QURBKCksdC5vcHRpb25zLmZvY3VzT25DaGFuZ2UmJmkodC4kc2xpZGVzLmdldCh0LmN1cnJlbnRTbGlkZSkpLmF0dHIoXCJ0YWJpbmRleFwiLDApLmZvY3VzKCkpKX0sZS5wcm90b3R5cGUucHJldj1lLnByb3RvdHlwZS5zbGlja1ByZXY9ZnVuY3Rpb24oKXt0aGlzLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOlwicHJldmlvdXNcIn19KX0sZS5wcm90b3R5cGUucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSxlLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkPWZ1bmN0aW9uKGUpe2U9ZXx8MTt2YXIgdCxvLHMsbixyLGw9dGhpcyxkPWkoXCJpbWdbZGF0YS1sYXp5XVwiLGwuJHNsaWRlcik7ZC5sZW5ndGg/KHQ9ZC5maXJzdCgpLG89dC5hdHRyKFwiZGF0YS1sYXp5XCIpLHM9dC5hdHRyKFwiZGF0YS1zcmNzZXRcIiksbj10LmF0dHIoXCJkYXRhLXNpemVzXCIpfHxsLiRzbGlkZXIuYXR0cihcImRhdGEtc2l6ZXNcIiksKHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSkub25sb2FkPWZ1bmN0aW9uKCl7cyYmKHQuYXR0cihcInNyY3NldFwiLHMpLG4mJnQuYXR0cihcInNpemVzXCIsbikpLHQuYXR0cihcInNyY1wiLG8pLnJlbW92ZUF0dHIoXCJkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplc1wiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIiksITA9PT1sLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQmJmwuc2V0UG9zaXRpb24oKSxsLiRzbGlkZXIudHJpZ2dlcihcImxhenlMb2FkZWRcIixbbCx0LG9dKSxsLnByb2dyZXNzaXZlTGF6eUxvYWQoKX0sci5vbmVycm9yPWZ1bmN0aW9uKCl7ZTwzP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtsLnByb2dyZXNzaXZlTGF6eUxvYWQoZSsxKX0sNTAwKToodC5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5XCIpLnJlbW92ZUNsYXNzKFwic2xpY2stbG9hZGluZ1wiKS5hZGRDbGFzcyhcInNsaWNrLWxhenlsb2FkLWVycm9yXCIpLGwuJHNsaWRlci50cmlnZ2VyKFwibGF6eUxvYWRFcnJvclwiLFtsLHQsb10pLGwucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpKX0sci5zcmM9byk6bC4kc2xpZGVyLnRyaWdnZXIoXCJhbGxJbWFnZXNMb2FkZWRcIixbbF0pfSxlLnByb3RvdHlwZS5yZWZyZXNoPWZ1bmN0aW9uKGUpe3ZhciB0LG8scz10aGlzO289cy5zbGlkZUNvdW50LXMub3B0aW9ucy5zbGlkZXNUb1Nob3csIXMub3B0aW9ucy5pbmZpbml0ZSYmcy5jdXJyZW50U2xpZGU+byYmKHMuY3VycmVudFNsaWRlPW8pLHMuc2xpZGVDb3VudDw9cy5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKHMuY3VycmVudFNsaWRlPTApLHQ9cy5jdXJyZW50U2xpZGUscy5kZXN0cm95KCEwKSxpLmV4dGVuZChzLHMuaW5pdGlhbHMse2N1cnJlbnRTbGlkZTp0fSkscy5pbml0KCksZXx8cy5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcImluZGV4XCIsaW5kZXg6dH19LCExKX0sZS5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cz1mdW5jdGlvbigpe3ZhciBlLHQsbyxzPXRoaXMsbj1zLm9wdGlvbnMucmVzcG9uc2l2ZXx8bnVsbDtpZihcImFycmF5XCI9PT1pLnR5cGUobikmJm4ubGVuZ3RoKXtzLnJlc3BvbmRUbz1zLm9wdGlvbnMucmVzcG9uZFRvfHxcIndpbmRvd1wiO2ZvcihlIGluIG4paWYobz1zLmJyZWFrcG9pbnRzLmxlbmd0aC0xLG4uaGFzT3duUHJvcGVydHkoZSkpe2Zvcih0PW5bZV0uYnJlYWtwb2ludDtvPj0wOylzLmJyZWFrcG9pbnRzW29dJiZzLmJyZWFrcG9pbnRzW29dPT09dCYmcy5icmVha3BvaW50cy5zcGxpY2UobywxKSxvLS07cy5icmVha3BvaW50cy5wdXNoKHQpLHMuYnJlYWtwb2ludFNldHRpbmdzW3RdPW5bZV0uc2V0dGluZ3N9cy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKGksZSl7cmV0dXJuIHMub3B0aW9ucy5tb2JpbGVGaXJzdD9pLWU6ZS1pfSl9fSxlLnByb3RvdHlwZS5yZWluaXQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuJHNsaWRlcz1lLiRzbGlkZVRyYWNrLmNoaWxkcmVuKGUub3B0aW9ucy5zbGlkZSkuYWRkQ2xhc3MoXCJzbGljay1zbGlkZVwiKSxlLnNsaWRlQ291bnQ9ZS4kc2xpZGVzLmxlbmd0aCxlLmN1cnJlbnRTbGlkZT49ZS5zbGlkZUNvdW50JiYwIT09ZS5jdXJyZW50U2xpZGUmJihlLmN1cnJlbnRTbGlkZT1lLmN1cnJlbnRTbGlkZS1lLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpLGUuc2xpZGVDb3VudDw9ZS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGUuY3VycmVudFNsaWRlPTApLGUucmVnaXN0ZXJCcmVha3BvaW50cygpLGUuc2V0UHJvcHMoKSxlLnNldHVwSW5maW5pdGUoKSxlLmJ1aWxkQXJyb3dzKCksZS51cGRhdGVBcnJvd3MoKSxlLmluaXRBcnJvd0V2ZW50cygpLGUuYnVpbGREb3RzKCksZS51cGRhdGVEb3RzKCksZS5pbml0RG90RXZlbnRzKCksZS5jbGVhblVwU2xpZGVFdmVudHMoKSxlLmluaXRTbGlkZUV2ZW50cygpLGUuY2hlY2tSZXNwb25zaXZlKCExLCEwKSwhMD09PWUub3B0aW9ucy5mb2N1c09uU2VsZWN0JiZpKGUuJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oXCJjbGljay5zbGlja1wiLGUuc2VsZWN0SGFuZGxlciksZS5zZXRTbGlkZUNsYXNzZXMoXCJudW1iZXJcIj09dHlwZW9mIGUuY3VycmVudFNsaWRlP2UuY3VycmVudFNsaWRlOjApLGUuc2V0UG9zaXRpb24oKSxlLmZvY3VzSGFuZGxlcigpLGUucGF1c2VkPSFlLm9wdGlvbnMuYXV0b3BsYXksZS5hdXRvUGxheSgpLGUuJHNsaWRlci50cmlnZ2VyKFwicmVJbml0XCIsW2VdKX0sZS5wcm90b3R5cGUucmVzaXplPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpKHdpbmRvdykud2lkdGgoKSE9PWUud2luZG93V2lkdGgmJihjbGVhclRpbWVvdXQoZS53aW5kb3dEZWxheSksZS53aW5kb3dEZWxheT13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2Uud2luZG93V2lkdGg9aSh3aW5kb3cpLndpZHRoKCksZS5jaGVja1Jlc3BvbnNpdmUoKSxlLnVuc2xpY2tlZHx8ZS5zZXRQb3NpdGlvbigpfSw1MCkpfSxlLnByb3RvdHlwZS5yZW1vdmVTbGlkZT1lLnByb3RvdHlwZS5zbGlja1JlbW92ZT1mdW5jdGlvbihpLGUsdCl7dmFyIG89dGhpcztpZihpPVwiYm9vbGVhblwiPT10eXBlb2YgaT8hMD09PShlPWkpPzA6by5zbGlkZUNvdW50LTE6ITA9PT1lPy0taTppLG8uc2xpZGVDb3VudDwxfHxpPDB8fGk+by5zbGlkZUNvdW50LTEpcmV0dXJuITE7by51bmxvYWQoKSwhMD09PXQ/by4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpOm8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpKS5yZW1vdmUoKSxvLiRzbGlkZXM9by4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLG8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKSxvLiRzbGlkZVRyYWNrLmFwcGVuZChvLiRzbGlkZXMpLG8uJHNsaWRlc0NhY2hlPW8uJHNsaWRlcyxvLnJlaW5pdCgpfSxlLnByb3RvdHlwZS5zZXRDU1M9ZnVuY3Rpb24oaSl7dmFyIGUsdCxvPXRoaXMscz17fTshMD09PW8ub3B0aW9ucy5ydGwmJihpPS1pKSxlPVwibGVmdFwiPT1vLnBvc2l0aW9uUHJvcD9NYXRoLmNlaWwoaSkrXCJweFwiOlwiMHB4XCIsdD1cInRvcFwiPT1vLnBvc2l0aW9uUHJvcD9NYXRoLmNlaWwoaSkrXCJweFwiOlwiMHB4XCIsc1tvLnBvc2l0aW9uUHJvcF09aSwhMT09PW8udHJhbnNmb3Jtc0VuYWJsZWQ/by4kc2xpZGVUcmFjay5jc3Mocyk6KHM9e30sITE9PT1vLmNzc1RyYW5zaXRpb25zPyhzW28uYW5pbVR5cGVdPVwidHJhbnNsYXRlKFwiK2UrXCIsIFwiK3QrXCIpXCIsby4kc2xpZGVUcmFjay5jc3MocykpOihzW28uYW5pbVR5cGVdPVwidHJhbnNsYXRlM2QoXCIrZStcIiwgXCIrdCtcIiwgMHB4KVwiLG8uJHNsaWRlVHJhY2suY3NzKHMpKSl9LGUucHJvdG90eXBlLnNldERpbWVuc2lvbnM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzOyExPT09aS5vcHRpb25zLnZlcnRpY2FsPyEwPT09aS5vcHRpb25zLmNlbnRlck1vZGUmJmkuJGxpc3QuY3NzKHtwYWRkaW5nOlwiMHB4IFwiK2kub3B0aW9ucy5jZW50ZXJQYWRkaW5nfSk6KGkuJGxpc3QuaGVpZ2h0KGkuJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KCEwKSppLm9wdGlvbnMuc2xpZGVzVG9TaG93KSwhMD09PWkub3B0aW9ucy5jZW50ZXJNb2RlJiZpLiRsaXN0LmNzcyh7cGFkZGluZzppLm9wdGlvbnMuY2VudGVyUGFkZGluZytcIiAwcHhcIn0pKSxpLmxpc3RXaWR0aD1pLiRsaXN0LndpZHRoKCksaS5saXN0SGVpZ2h0PWkuJGxpc3QuaGVpZ2h0KCksITE9PT1pLm9wdGlvbnMudmVydGljYWwmJiExPT09aS5vcHRpb25zLnZhcmlhYmxlV2lkdGg/KGkuc2xpZGVXaWR0aD1NYXRoLmNlaWwoaS5saXN0V2lkdGgvaS5vcHRpb25zLnNsaWRlc1RvU2hvdyksaS4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoaS5zbGlkZVdpZHRoKmkuJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikubGVuZ3RoKSkpOiEwPT09aS5vcHRpb25zLnZhcmlhYmxlV2lkdGg/aS4kc2xpZGVUcmFjay53aWR0aCg1ZTMqaS5zbGlkZUNvdW50KTooaS5zbGlkZVdpZHRoPU1hdGguY2VpbChpLmxpc3RXaWR0aCksaS4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKGkuJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KCEwKSppLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmxlbmd0aCkpKTt2YXIgZT1pLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKCEwKS1pLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpOyExPT09aS5vcHRpb25zLnZhcmlhYmxlV2lkdGgmJmkuJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikud2lkdGgoaS5zbGlkZVdpZHRoLWUpfSxlLnByb3RvdHlwZS5zZXRGYWRlPWZ1bmN0aW9uKCl7dmFyIGUsdD10aGlzO3QuJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKG8scyl7ZT10LnNsaWRlV2lkdGgqbyotMSwhMD09PXQub3B0aW9ucy5ydGw/aShzKS5jc3Moe3Bvc2l0aW9uOlwicmVsYXRpdmVcIixyaWdodDplLHRvcDowLHpJbmRleDp0Lm9wdGlvbnMuekluZGV4LTIsb3BhY2l0eTowfSk6aShzKS5jc3Moe3Bvc2l0aW9uOlwicmVsYXRpdmVcIixsZWZ0OmUsdG9wOjAsekluZGV4OnQub3B0aW9ucy56SW5kZXgtMixvcGFjaXR5OjB9KX0pLHQuJHNsaWRlcy5lcSh0LmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6dC5vcHRpb25zLnpJbmRleC0xLG9wYWNpdHk6MX0pfSxlLnByb3RvdHlwZS5zZXRIZWlnaHQ9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2lmKDE9PT1pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYhMD09PWkub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCYmITE9PT1pLm9wdGlvbnMudmVydGljYWwpe3ZhciBlPWkuJHNsaWRlcy5lcShpLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQoITApO2kuJGxpc3QuY3NzKFwiaGVpZ2h0XCIsZSl9fSxlLnByb3RvdHlwZS5zZXRPcHRpb249ZS5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb249ZnVuY3Rpb24oKXt2YXIgZSx0LG8scyxuLHI9dGhpcyxsPSExO2lmKFwib2JqZWN0XCI9PT1pLnR5cGUoYXJndW1lbnRzWzBdKT8obz1hcmd1bWVudHNbMF0sbD1hcmd1bWVudHNbMV0sbj1cIm11bHRpcGxlXCIpOlwic3RyaW5nXCI9PT1pLnR5cGUoYXJndW1lbnRzWzBdKSYmKG89YXJndW1lbnRzWzBdLHM9YXJndW1lbnRzWzFdLGw9YXJndW1lbnRzWzJdLFwicmVzcG9uc2l2ZVwiPT09YXJndW1lbnRzWzBdJiZcImFycmF5XCI9PT1pLnR5cGUoYXJndW1lbnRzWzFdKT9uPVwicmVzcG9uc2l2ZVwiOnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmKG49XCJzaW5nbGVcIikpLFwic2luZ2xlXCI9PT1uKXIub3B0aW9uc1tvXT1zO2Vsc2UgaWYoXCJtdWx0aXBsZVwiPT09bilpLmVhY2gobyxmdW5jdGlvbihpLGUpe3Iub3B0aW9uc1tpXT1lfSk7ZWxzZSBpZihcInJlc3BvbnNpdmVcIj09PW4pZm9yKHQgaW4gcylpZihcImFycmF5XCIhPT1pLnR5cGUoci5vcHRpb25zLnJlc3BvbnNpdmUpKXIub3B0aW9ucy5yZXNwb25zaXZlPVtzW3RdXTtlbHNle2ZvcihlPXIub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO2U+PTA7KXIub3B0aW9ucy5yZXNwb25zaXZlW2VdLmJyZWFrcG9pbnQ9PT1zW3RdLmJyZWFrcG9pbnQmJnIub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShlLDEpLGUtLTtyLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKHNbdF0pfWwmJihyLnVubG9hZCgpLHIucmVpbml0KCkpfSxlLnByb3RvdHlwZS5zZXRQb3NpdGlvbj1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5zZXREaW1lbnNpb25zKCksaS5zZXRIZWlnaHQoKSwhMT09PWkub3B0aW9ucy5mYWRlP2kuc2V0Q1NTKGkuZ2V0TGVmdChpLmN1cnJlbnRTbGlkZSkpOmkuc2V0RmFkZSgpLGkuJHNsaWRlci50cmlnZ2VyKFwic2V0UG9zaXRpb25cIixbaV0pfSxlLnByb3RvdHlwZS5zZXRQcm9wcz1mdW5jdGlvbigpe3ZhciBpPXRoaXMsZT1kb2N1bWVudC5ib2R5LnN0eWxlO2kucG9zaXRpb25Qcm9wPSEwPT09aS5vcHRpb25zLnZlcnRpY2FsP1widG9wXCI6XCJsZWZ0XCIsXCJ0b3BcIj09PWkucG9zaXRpb25Qcm9wP2kuJHNsaWRlci5hZGRDbGFzcyhcInNsaWNrLXZlcnRpY2FsXCIpOmkuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLXZlcnRpY2FsXCIpLHZvaWQgMD09PWUuV2Via2l0VHJhbnNpdGlvbiYmdm9pZCAwPT09ZS5Nb3pUcmFuc2l0aW9uJiZ2b2lkIDA9PT1lLm1zVHJhbnNpdGlvbnx8ITA9PT1pLm9wdGlvbnMudXNlQ1NTJiYoaS5jc3NUcmFuc2l0aW9ucz0hMCksaS5vcHRpb25zLmZhZGUmJihcIm51bWJlclwiPT10eXBlb2YgaS5vcHRpb25zLnpJbmRleD9pLm9wdGlvbnMuekluZGV4PDMmJihpLm9wdGlvbnMuekluZGV4PTMpOmkub3B0aW9ucy56SW5kZXg9aS5kZWZhdWx0cy56SW5kZXgpLHZvaWQgMCE9PWUuT1RyYW5zZm9ybSYmKGkuYW5pbVR5cGU9XCJPVHJhbnNmb3JtXCIsaS50cmFuc2Zvcm1UeXBlPVwiLW8tdHJhbnNmb3JtXCIsaS50cmFuc2l0aW9uVHlwZT1cIk9UcmFuc2l0aW9uXCIsdm9pZCAwPT09ZS5wZXJzcGVjdGl2ZVByb3BlcnR5JiZ2b2lkIDA9PT1lLndlYmtpdFBlcnNwZWN0aXZlJiYoaS5hbmltVHlwZT0hMSkpLHZvaWQgMCE9PWUuTW96VHJhbnNmb3JtJiYoaS5hbmltVHlwZT1cIk1velRyYW5zZm9ybVwiLGkudHJhbnNmb3JtVHlwZT1cIi1tb3otdHJhbnNmb3JtXCIsaS50cmFuc2l0aW9uVHlwZT1cIk1velRyYW5zaXRpb25cIix2b2lkIDA9PT1lLnBlcnNwZWN0aXZlUHJvcGVydHkmJnZvaWQgMD09PWUuTW96UGVyc3BlY3RpdmUmJihpLmFuaW1UeXBlPSExKSksdm9pZCAwIT09ZS53ZWJraXRUcmFuc2Zvcm0mJihpLmFuaW1UeXBlPVwid2Via2l0VHJhbnNmb3JtXCIsaS50cmFuc2Zvcm1UeXBlPVwiLXdlYmtpdC10cmFuc2Zvcm1cIixpLnRyYW5zaXRpb25UeXBlPVwid2Via2l0VHJhbnNpdGlvblwiLHZvaWQgMD09PWUucGVyc3BlY3RpdmVQcm9wZXJ0eSYmdm9pZCAwPT09ZS53ZWJraXRQZXJzcGVjdGl2ZSYmKGkuYW5pbVR5cGU9ITEpKSx2b2lkIDAhPT1lLm1zVHJhbnNmb3JtJiYoaS5hbmltVHlwZT1cIm1zVHJhbnNmb3JtXCIsaS50cmFuc2Zvcm1UeXBlPVwiLW1zLXRyYW5zZm9ybVwiLGkudHJhbnNpdGlvblR5cGU9XCJtc1RyYW5zaXRpb25cIix2b2lkIDA9PT1lLm1zVHJhbnNmb3JtJiYoaS5hbmltVHlwZT0hMSkpLHZvaWQgMCE9PWUudHJhbnNmb3JtJiYhMSE9PWkuYW5pbVR5cGUmJihpLmFuaW1UeXBlPVwidHJhbnNmb3JtXCIsaS50cmFuc2Zvcm1UeXBlPVwidHJhbnNmb3JtXCIsaS50cmFuc2l0aW9uVHlwZT1cInRyYW5zaXRpb25cIiksaS50cmFuc2Zvcm1zRW5hYmxlZD1pLm9wdGlvbnMudXNlVHJhbnNmb3JtJiZudWxsIT09aS5hbmltVHlwZSYmITEhPT1pLmFuaW1UeXBlfSxlLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXM9ZnVuY3Rpb24oaSl7dmFyIGUsdCxvLHMsbj10aGlzO2lmKHQ9bi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnRcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLG4uJHNsaWRlcy5lcShpKS5hZGRDbGFzcyhcInNsaWNrLWN1cnJlbnRcIiksITA9PT1uLm9wdGlvbnMuY2VudGVyTW9kZSl7dmFyIHI9bi5vcHRpb25zLnNsaWRlc1RvU2hvdyUyPT0wPzE6MDtlPU1hdGguZmxvb3Iobi5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKSwhMD09PW4ub3B0aW9ucy5pbmZpbml0ZSYmKGk+PWUmJmk8PW4uc2xpZGVDb3VudC0xLWU/bi4kc2xpZGVzLnNsaWNlKGktZStyLGkrZSsxKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpOihvPW4ub3B0aW9ucy5zbGlkZXNUb1Nob3craSx0LnNsaWNlKG8tZSsxK3IsbytlKzIpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIikpLDA9PT1pP3QuZXEodC5sZW5ndGgtMS1uLm9wdGlvbnMuc2xpZGVzVG9TaG93KS5hZGRDbGFzcyhcInNsaWNrLWNlbnRlclwiKTppPT09bi5zbGlkZUNvdW50LTEmJnQuZXEobi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1jZW50ZXJcIikpLG4uJHNsaWRlcy5lcShpKS5hZGRDbGFzcyhcInNsaWNrLWNlbnRlclwiKX1lbHNlIGk+PTAmJmk8PW4uc2xpZGVDb3VudC1uLm9wdGlvbnMuc2xpZGVzVG9TaG93P24uJHNsaWRlcy5zbGljZShpLGkrbi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKTp0Lmxlbmd0aDw9bi5vcHRpb25zLnNsaWRlc1RvU2hvdz90LmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6KHM9bi5zbGlkZUNvdW50JW4ub3B0aW9ucy5zbGlkZXNUb1Nob3csbz0hMD09PW4ub3B0aW9ucy5pbmZpbml0ZT9uLm9wdGlvbnMuc2xpZGVzVG9TaG93K2k6aSxuLm9wdGlvbnMuc2xpZGVzVG9TaG93PT1uLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwmJm4uc2xpZGVDb3VudC1pPG4ub3B0aW9ucy5zbGlkZXNUb1Nob3c/dC5zbGljZShvLShuLm9wdGlvbnMuc2xpZGVzVG9TaG93LXMpLG8rcykuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKTp0LnNsaWNlKG8sbytuLm9wdGlvbnMuc2xpZGVzVG9TaG93KS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpKTtcIm9uZGVtYW5kXCIhPT1uLm9wdGlvbnMubGF6eUxvYWQmJlwiYW50aWNpcGF0ZWRcIiE9PW4ub3B0aW9ucy5sYXp5TG9hZHx8bi5sYXp5TG9hZCgpfSxlLnByb3RvdHlwZS5zZXR1cEluZmluaXRlPWZ1bmN0aW9uKCl7dmFyIGUsdCxvLHM9dGhpcztpZighMD09PXMub3B0aW9ucy5mYWRlJiYocy5vcHRpb25zLmNlbnRlck1vZGU9ITEpLCEwPT09cy5vcHRpb25zLmluZmluaXRlJiYhMT09PXMub3B0aW9ucy5mYWRlJiYodD1udWxsLHMuc2xpZGVDb3VudD5zLm9wdGlvbnMuc2xpZGVzVG9TaG93KSl7Zm9yKG89ITA9PT1zLm9wdGlvbnMuY2VudGVyTW9kZT9zLm9wdGlvbnMuc2xpZGVzVG9TaG93KzE6cy5vcHRpb25zLnNsaWRlc1RvU2hvdyxlPXMuc2xpZGVDb3VudDtlPnMuc2xpZGVDb3VudC1vO2UtPTEpdD1lLTEsaShzLiRzbGlkZXNbdF0pLmNsb25lKCEwKS5hdHRyKFwiaWRcIixcIlwiKS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiLHQtcy5zbGlkZUNvdW50KS5wcmVwZW5kVG8ocy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoXCJzbGljay1jbG9uZWRcIik7Zm9yKGU9MDtlPG8rcy5zbGlkZUNvdW50O2UrPTEpdD1lLGkocy4kc2xpZGVzW3RdKS5jbG9uZSghMCkuYXR0cihcImlkXCIsXCJcIikuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIix0K3Muc2xpZGVDb3VudCkuYXBwZW5kVG8ocy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoXCJzbGljay1jbG9uZWRcIik7cy4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLWNsb25lZFwiKS5maW5kKFwiW2lkXVwiKS5lYWNoKGZ1bmN0aW9uKCl7aSh0aGlzKS5hdHRyKFwiaWRcIixcIlwiKX0pfX0sZS5wcm90b3R5cGUuaW50ZXJydXB0PWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7aXx8ZS5hdXRvUGxheSgpLGUuaW50ZXJydXB0ZWQ9aX0sZS5wcm90b3R5cGUuc2VsZWN0SGFuZGxlcj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLG89aShlLnRhcmdldCkuaXMoXCIuc2xpY2stc2xpZGVcIik/aShlLnRhcmdldCk6aShlLnRhcmdldCkucGFyZW50cyhcIi5zbGljay1zbGlkZVwiKSxzPXBhcnNlSW50KG8uYXR0cihcImRhdGEtc2xpY2staW5kZXhcIikpO3N8fChzPTApLHQuc2xpZGVDb3VudDw9dC5vcHRpb25zLnNsaWRlc1RvU2hvdz90LnNsaWRlSGFuZGxlcihzLCExLCEwKTp0LnNsaWRlSGFuZGxlcihzKX0sZS5wcm90b3R5cGUuc2xpZGVIYW5kbGVyPWZ1bmN0aW9uKGksZSx0KXt2YXIgbyxzLG4scixsLGQ9bnVsbCxhPXRoaXM7aWYoZT1lfHwhMSwhKCEwPT09YS5hbmltYXRpbmcmJiEwPT09YS5vcHRpb25zLndhaXRGb3JBbmltYXRlfHwhMD09PWEub3B0aW9ucy5mYWRlJiZhLmN1cnJlbnRTbGlkZT09PWkpKWlmKCExPT09ZSYmYS5hc05hdkZvcihpKSxvPWksZD1hLmdldExlZnQobykscj1hLmdldExlZnQoYS5jdXJyZW50U2xpZGUpLGEuY3VycmVudExlZnQ9bnVsbD09PWEuc3dpcGVMZWZ0P3I6YS5zd2lwZUxlZnQsITE9PT1hLm9wdGlvbnMuaW5maW5pdGUmJiExPT09YS5vcHRpb25zLmNlbnRlck1vZGUmJihpPDB8fGk+YS5nZXREb3RDb3VudCgpKmEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpITE9PT1hLm9wdGlvbnMuZmFkZSYmKG89YS5jdXJyZW50U2xpZGUsITAhPT10P2EuYW5pbWF0ZVNsaWRlKHIsZnVuY3Rpb24oKXthLnBvc3RTbGlkZShvKX0pOmEucG9zdFNsaWRlKG8pKTtlbHNlIGlmKCExPT09YS5vcHRpb25zLmluZmluaXRlJiYhMD09PWEub3B0aW9ucy5jZW50ZXJNb2RlJiYoaTwwfHxpPmEuc2xpZGVDb3VudC1hLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSExPT09YS5vcHRpb25zLmZhZGUmJihvPWEuY3VycmVudFNsaWRlLCEwIT09dD9hLmFuaW1hdGVTbGlkZShyLGZ1bmN0aW9uKCl7YS5wb3N0U2xpZGUobyl9KTphLnBvc3RTbGlkZShvKSk7ZWxzZXtpZihhLm9wdGlvbnMuYXV0b3BsYXkmJmNsZWFySW50ZXJ2YWwoYS5hdXRvUGxheVRpbWVyKSxzPW88MD9hLnNsaWRlQ291bnQlYS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIT0wP2Euc2xpZGVDb3VudC1hLnNsaWRlQ291bnQlYS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOmEuc2xpZGVDb3VudCtvOm8+PWEuc2xpZGVDb3VudD9hLnNsaWRlQ291bnQlYS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIT0wPzA6by1hLnNsaWRlQ291bnQ6byxhLmFuaW1hdGluZz0hMCxhLiRzbGlkZXIudHJpZ2dlcihcImJlZm9yZUNoYW5nZVwiLFthLGEuY3VycmVudFNsaWRlLHNdKSxuPWEuY3VycmVudFNsaWRlLGEuY3VycmVudFNsaWRlPXMsYS5zZXRTbGlkZUNsYXNzZXMoYS5jdXJyZW50U2xpZGUpLGEub3B0aW9ucy5hc05hdkZvciYmKGw9KGw9YS5nZXROYXZUYXJnZXQoKSkuc2xpY2soXCJnZXRTbGlja1wiKSkuc2xpZGVDb3VudDw9bC5vcHRpb25zLnNsaWRlc1RvU2hvdyYmbC5zZXRTbGlkZUNsYXNzZXMoYS5jdXJyZW50U2xpZGUpLGEudXBkYXRlRG90cygpLGEudXBkYXRlQXJyb3dzKCksITA9PT1hLm9wdGlvbnMuZmFkZSlyZXR1cm4hMCE9PXQ/KGEuZmFkZVNsaWRlT3V0KG4pLGEuZmFkZVNsaWRlKHMsZnVuY3Rpb24oKXthLnBvc3RTbGlkZShzKX0pKTphLnBvc3RTbGlkZShzKSx2b2lkIGEuYW5pbWF0ZUhlaWdodCgpOyEwIT09dD9hLmFuaW1hdGVTbGlkZShkLGZ1bmN0aW9uKCl7YS5wb3N0U2xpZGUocyl9KTphLnBvc3RTbGlkZShzKX19LGUucHJvdG90eXBlLnN0YXJ0TG9hZD1mdW5jdGlvbigpe3ZhciBpPXRoaXM7ITA9PT1pLm9wdGlvbnMuYXJyb3dzJiZpLnNsaWRlQ291bnQ+aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGkuJHByZXZBcnJvdy5oaWRlKCksaS4kbmV4dEFycm93LmhpZGUoKSksITA9PT1pLm9wdGlvbnMuZG90cyYmaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmkuJGRvdHMuaGlkZSgpLGkuJHNsaWRlci5hZGRDbGFzcyhcInNsaWNrLWxvYWRpbmdcIil9LGUucHJvdG90eXBlLnN3aXBlRGlyZWN0aW9uPWZ1bmN0aW9uKCl7dmFyIGksZSx0LG8scz10aGlzO3JldHVybiBpPXMudG91Y2hPYmplY3Quc3RhcnRYLXMudG91Y2hPYmplY3QuY3VyWCxlPXMudG91Y2hPYmplY3Quc3RhcnRZLXMudG91Y2hPYmplY3QuY3VyWSx0PU1hdGguYXRhbjIoZSxpKSwobz1NYXRoLnJvdW5kKDE4MCp0L01hdGguUEkpKTwwJiYobz0zNjAtTWF0aC5hYnMobykpLG88PTQ1JiZvPj0wPyExPT09cy5vcHRpb25zLnJ0bD9cImxlZnRcIjpcInJpZ2h0XCI6bzw9MzYwJiZvPj0zMTU/ITE9PT1zLm9wdGlvbnMucnRsP1wibGVmdFwiOlwicmlnaHRcIjpvPj0xMzUmJm88PTIyNT8hMT09PXMub3B0aW9ucy5ydGw/XCJyaWdodFwiOlwibGVmdFwiOiEwPT09cy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZz9vPj0zNSYmbzw9MTM1P1wiZG93blwiOlwidXBcIjpcInZlcnRpY2FsXCJ9LGUucHJvdG90eXBlLnN3aXBlRW5kPWZ1bmN0aW9uKGkpe3ZhciBlLHQsbz10aGlzO2lmKG8uZHJhZ2dpbmc9ITEsby5zd2lwaW5nPSExLG8uc2Nyb2xsaW5nKXJldHVybiBvLnNjcm9sbGluZz0hMSwhMTtpZihvLmludGVycnVwdGVkPSExLG8uc2hvdWxkQ2xpY2s9IShvLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPjEwKSx2b2lkIDA9PT1vLnRvdWNoT2JqZWN0LmN1clgpcmV0dXJuITE7aWYoITA9PT1vLnRvdWNoT2JqZWN0LmVkZ2VIaXQmJm8uJHNsaWRlci50cmlnZ2VyKFwiZWRnZVwiLFtvLG8uc3dpcGVEaXJlY3Rpb24oKV0pLG8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGg+PW8udG91Y2hPYmplY3QubWluU3dpcGUpe3N3aXRjaCh0PW8uc3dpcGVEaXJlY3Rpb24oKSl7Y2FzZVwibGVmdFwiOmNhc2VcImRvd25cIjplPW8ub3B0aW9ucy5zd2lwZVRvU2xpZGU/by5jaGVja05hdmlnYWJsZShvLmN1cnJlbnRTbGlkZStvLmdldFNsaWRlQ291bnQoKSk6by5jdXJyZW50U2xpZGUrby5nZXRTbGlkZUNvdW50KCksby5jdXJyZW50RGlyZWN0aW9uPTA7YnJlYWs7Y2FzZVwicmlnaHRcIjpjYXNlXCJ1cFwiOmU9by5vcHRpb25zLnN3aXBlVG9TbGlkZT9vLmNoZWNrTmF2aWdhYmxlKG8uY3VycmVudFNsaWRlLW8uZ2V0U2xpZGVDb3VudCgpKTpvLmN1cnJlbnRTbGlkZS1vLmdldFNsaWRlQ291bnQoKSxvLmN1cnJlbnREaXJlY3Rpb249MX1cInZlcnRpY2FsXCIhPXQmJihvLnNsaWRlSGFuZGxlcihlKSxvLnRvdWNoT2JqZWN0PXt9LG8uJHNsaWRlci50cmlnZ2VyKFwic3dpcGVcIixbbyx0XSkpfWVsc2Ugby50b3VjaE9iamVjdC5zdGFydFghPT1vLnRvdWNoT2JqZWN0LmN1clgmJihvLnNsaWRlSGFuZGxlcihvLmN1cnJlbnRTbGlkZSksby50b3VjaE9iamVjdD17fSl9LGUucHJvdG90eXBlLnN3aXBlSGFuZGxlcj1mdW5jdGlvbihpKXt2YXIgZT10aGlzO2lmKCEoITE9PT1lLm9wdGlvbnMuc3dpcGV8fFwib250b3VjaGVuZFwiaW4gZG9jdW1lbnQmJiExPT09ZS5vcHRpb25zLnN3aXBlfHwhMT09PWUub3B0aW9ucy5kcmFnZ2FibGUmJi0xIT09aS50eXBlLmluZGV4T2YoXCJtb3VzZVwiKSkpc3dpdGNoKGUudG91Y2hPYmplY3QuZmluZ2VyQ291bnQ9aS5vcmlnaW5hbEV2ZW50JiZ2b2lkIDAhPT1pLm9yaWdpbmFsRXZlbnQudG91Y2hlcz9pLm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGg6MSxlLnRvdWNoT2JqZWN0Lm1pblN3aXBlPWUubGlzdFdpZHRoL2Uub3B0aW9ucy50b3VjaFRocmVzaG9sZCwhMD09PWUub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcmJihlLnRvdWNoT2JqZWN0Lm1pblN3aXBlPWUubGlzdEhlaWdodC9lLm9wdGlvbnMudG91Y2hUaHJlc2hvbGQpLGkuZGF0YS5hY3Rpb24pe2Nhc2VcInN0YXJ0XCI6ZS5zd2lwZVN0YXJ0KGkpO2JyZWFrO2Nhc2VcIm1vdmVcIjplLnN3aXBlTW92ZShpKTticmVhaztjYXNlXCJlbmRcIjplLnN3aXBlRW5kKGkpfX0sZS5wcm90b3R5cGUuc3dpcGVNb3ZlPWZ1bmN0aW9uKGkpe3ZhciBlLHQsbyxzLG4scixsPXRoaXM7cmV0dXJuIG49dm9pZCAwIT09aS5vcmlnaW5hbEV2ZW50P2kub3JpZ2luYWxFdmVudC50b3VjaGVzOm51bGwsISghbC5kcmFnZ2luZ3x8bC5zY3JvbGxpbmd8fG4mJjEhPT1uLmxlbmd0aCkmJihlPWwuZ2V0TGVmdChsLmN1cnJlbnRTbGlkZSksbC50b3VjaE9iamVjdC5jdXJYPXZvaWQgMCE9PW4/blswXS5wYWdlWDppLmNsaWVudFgsbC50b3VjaE9iamVjdC5jdXJZPXZvaWQgMCE9PW4/blswXS5wYWdlWTppLmNsaWVudFksbC50b3VjaE9iamVjdC5zd2lwZUxlbmd0aD1NYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyhsLnRvdWNoT2JqZWN0LmN1clgtbC50b3VjaE9iamVjdC5zdGFydFgsMikpKSxyPU1hdGgucm91bmQoTWF0aC5zcXJ0KE1hdGgucG93KGwudG91Y2hPYmplY3QuY3VyWS1sLnRvdWNoT2JqZWN0LnN0YXJ0WSwyKSkpLCFsLm9wdGlvbnMudmVydGljYWxTd2lwaW5nJiYhbC5zd2lwaW5nJiZyPjQ/KGwuc2Nyb2xsaW5nPSEwLCExKTooITA9PT1sLm9wdGlvbnMudmVydGljYWxTd2lwaW5nJiYobC50b3VjaE9iamVjdC5zd2lwZUxlbmd0aD1yKSx0PWwuc3dpcGVEaXJlY3Rpb24oKSx2b2lkIDAhPT1pLm9yaWdpbmFsRXZlbnQmJmwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGg+NCYmKGwuc3dpcGluZz0hMCxpLnByZXZlbnREZWZhdWx0KCkpLHM9KCExPT09bC5vcHRpb25zLnJ0bD8xOi0xKSoobC50b3VjaE9iamVjdC5jdXJYPmwudG91Y2hPYmplY3Quc3RhcnRYPzE6LTEpLCEwPT09bC5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyYmKHM9bC50b3VjaE9iamVjdC5jdXJZPmwudG91Y2hPYmplY3Quc3RhcnRZPzE6LTEpLG89bC50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCxsLnRvdWNoT2JqZWN0LmVkZ2VIaXQ9ITEsITE9PT1sLm9wdGlvbnMuaW5maW5pdGUmJigwPT09bC5jdXJyZW50U2xpZGUmJlwicmlnaHRcIj09PXR8fGwuY3VycmVudFNsaWRlPj1sLmdldERvdENvdW50KCkmJlwibGVmdFwiPT09dCkmJihvPWwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGgqbC5vcHRpb25zLmVkZ2VGcmljdGlvbixsLnRvdWNoT2JqZWN0LmVkZ2VIaXQ9ITApLCExPT09bC5vcHRpb25zLnZlcnRpY2FsP2wuc3dpcGVMZWZ0PWUrbypzOmwuc3dpcGVMZWZ0PWUrbyoobC4kbGlzdC5oZWlnaHQoKS9sLmxpc3RXaWR0aCkqcywhMD09PWwub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcmJihsLnN3aXBlTGVmdD1lK28qcyksITAhPT1sLm9wdGlvbnMuZmFkZSYmITEhPT1sLm9wdGlvbnMudG91Y2hNb3ZlJiYoITA9PT1sLmFuaW1hdGluZz8obC5zd2lwZUxlZnQ9bnVsbCwhMSk6dm9pZCBsLnNldENTUyhsLnN3aXBlTGVmdCkpKSl9LGUucHJvdG90eXBlLnN3aXBlU3RhcnQ9ZnVuY3Rpb24oaSl7dmFyIGUsdD10aGlzO2lmKHQuaW50ZXJydXB0ZWQ9ITAsMSE9PXQudG91Y2hPYmplY3QuZmluZ2VyQ291bnR8fHQuc2xpZGVDb3VudDw9dC5vcHRpb25zLnNsaWRlc1RvU2hvdylyZXR1cm4gdC50b3VjaE9iamVjdD17fSwhMTt2b2lkIDAhPT1pLm9yaWdpbmFsRXZlbnQmJnZvaWQgMCE9PWkub3JpZ2luYWxFdmVudC50b3VjaGVzJiYoZT1pLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXSksdC50b3VjaE9iamVjdC5zdGFydFg9dC50b3VjaE9iamVjdC5jdXJYPXZvaWQgMCE9PWU/ZS5wYWdlWDppLmNsaWVudFgsdC50b3VjaE9iamVjdC5zdGFydFk9dC50b3VjaE9iamVjdC5jdXJZPXZvaWQgMCE9PWU/ZS5wYWdlWTppLmNsaWVudFksdC5kcmFnZ2luZz0hMH0sZS5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXM9ZS5wcm90b3R5cGUuc2xpY2tVbmZpbHRlcj1mdW5jdGlvbigpe3ZhciBpPXRoaXM7bnVsbCE9PWkuJHNsaWRlc0NhY2hlJiYoaS51bmxvYWQoKSxpLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCksaS4kc2xpZGVzQ2FjaGUuYXBwZW5kVG8oaS4kc2xpZGVUcmFjayksaS5yZWluaXQoKSl9LGUucHJvdG90eXBlLnVubG9hZD1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aShcIi5zbGljay1jbG9uZWRcIixlLiRzbGlkZXIpLnJlbW92ZSgpLGUuJGRvdHMmJmUuJGRvdHMucmVtb3ZlKCksZS4kcHJldkFycm93JiZlLmh0bWxFeHByLnRlc3QoZS5vcHRpb25zLnByZXZBcnJvdykmJmUuJHByZXZBcnJvdy5yZW1vdmUoKSxlLiRuZXh0QXJyb3cmJmUuaHRtbEV4cHIudGVzdChlLm9wdGlvbnMubmV4dEFycm93KSYmZS4kbmV4dEFycm93LnJlbW92ZSgpLGUuJHNsaWRlcy5yZW1vdmVDbGFzcyhcInNsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnRcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLmNzcyhcIndpZHRoXCIsXCJcIil9LGUucHJvdG90eXBlLnVuc2xpY2s9ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcztlLiRzbGlkZXIudHJpZ2dlcihcInVuc2xpY2tcIixbZSxpXSksZS5kZXN0cm95KCl9LGUucHJvdG90eXBlLnVwZGF0ZUFycm93cz1mdW5jdGlvbigpe3ZhciBpPXRoaXM7TWF0aC5mbG9vcihpLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIpLCEwPT09aS5vcHRpb25zLmFycm93cyYmaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJiFpLm9wdGlvbnMuaW5maW5pdGUmJihpLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIiksaS4kbmV4dEFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpLDA9PT1pLmN1cnJlbnRTbGlkZT8oaS4kcHJldkFycm93LmFkZENsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIiksaS4kbmV4dEFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpKTppLmN1cnJlbnRTbGlkZT49aS5zbGlkZUNvdW50LWkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJiExPT09aS5vcHRpb25zLmNlbnRlck1vZGU/KGkuJG5leHRBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpLGkuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSk6aS5jdXJyZW50U2xpZGU+PWkuc2xpZGVDb3VudC0xJiYhMD09PWkub3B0aW9ucy5jZW50ZXJNb2RlJiYoaS4kbmV4dEFycm93LmFkZENsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIiksaS4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpKSl9LGUucHJvdG90eXBlLnVwZGF0ZURvdHM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO251bGwhPT1pLiRkb3RzJiYoaS4kZG90cy5maW5kKFwibGlcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuZW5kKCksaS4kZG90cy5maW5kKFwibGlcIikuZXEoTWF0aC5mbG9vcihpLmN1cnJlbnRTbGlkZS9pLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKSl9LGUucHJvdG90eXBlLnZpc2liaWxpdHk9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kub3B0aW9ucy5hdXRvcGxheSYmKGRvY3VtZW50W2kuaGlkZGVuXT9pLmludGVycnVwdGVkPSEwOmkuaW50ZXJydXB0ZWQ9ITEpfSxpLmZuLnNsaWNrPWZ1bmN0aW9uKCl7dmFyIGksdCxvPXRoaXMscz1hcmd1bWVudHNbMF0sbj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkscj1vLmxlbmd0aDtmb3IoaT0wO2k8cjtpKyspaWYoXCJvYmplY3RcIj09dHlwZW9mIHN8fHZvaWQgMD09PXM/b1tpXS5zbGljaz1uZXcgZShvW2ldLHMpOnQ9b1tpXS5zbGlja1tzXS5hcHBseShvW2ldLnNsaWNrLG4pLHZvaWQgMCE9PXQpcmV0dXJuIHQ7cmV0dXJuIG99fSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiLCJ0b2FzdHIiLCJ3aW5kb3ciLCJidXJnZXJNZW51Iiwibm90aWZpY2F0aW9ucyIsImluaXRHYW1lRGV0YWlscyIsImluaXRTZWFyY2hHYW1lcyIsImluaXRTZWFyY2hGcmllbmRzIiwiaW5pdERhc2hib2FyZCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0IiwiZSIsImV4cG9ydHMiLCJfdHlwZW9mIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiZ2xvYmFsVGhpcyIsInNlbGYiLCJib290c3RyYXAiLCJNYXAiLCJzZXQiLCJpIiwibiIsImhhcyIsInMiLCJnZXQiLCJzaXplIiwiZXJyb3IiLCJjb25jYXQiLCJBcnJheSIsImZyb20iLCJrZXlzIiwicmVtb3ZlIiwiQ1NTIiwiZXNjYXBlIiwicmVwbGFjZSIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIm8iLCJqcXVlcnkiLCJub2RlVHlwZSIsInIiLCJsZW5ndGgiLCJhIiwiZ2V0Q2xpZW50UmVjdHMiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImNsb3Nlc3QiLCJwYXJlbnROb2RlIiwibCIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImRpc2FibGVkIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiYyIsImRvY3VtZW50RWxlbWVudCIsImF0dGFjaFNoYWRvdyIsImdldFJvb3ROb2RlIiwiU2hhZG93Um9vdCIsImgiLCJkIiwib2Zmc2V0SGVpZ2h0IiwidSIsImJvZHkiLCJmIiwicCIsImRpciIsIm0iLCJOQU1FIiwiZm4iLCJqUXVlcnlJbnRlcmZhY2UiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9pMyIsIl9mIiwicHVzaCIsImciLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl8iLCJfd2luZG93JGdldENvbXB1dGVkU3QiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJOdW1iZXIiLCJwYXJzZUZsb2F0Iiwic3BsaXQiLCJfcmVmIiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJiIiwiaW5kZXhPZiIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ2IiwieSIsInciLCJBIiwiRSIsIlQiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIkMiLCJTZXQiLCJPIiwidWlkRXZlbnQiLCJ4IiwiayIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJjYWxsYWJsZSIsImRlbGVnYXRpb25TZWxlY3RvciIsIkwiLCJJIiwiUyIsIl9MIiwiX0wyIiwiX3NsaWNlZFRvQXJyYXkiLCJyZWxhdGVkVGFyZ2V0IiwiZGVsZWdhdGVUYXJnZXQiLCJjYWxsIiwib25lT2ZmIiwicXVlcnlTZWxlY3RvckFsbCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJkb25lIiwidmFsdWUiLCJQIiwiTiIsIm9mZiIsInR5cGUiLCJlcnIiLCJEIiwiQm9vbGVhbiIsIl9pNCIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJpbmNsdWRlcyIsIm9uIiwib25lIiwiX0wzIiwiX0w0Iiwic3RhcnRzV2l0aCIsIl9pNSIsIl9PYmplY3Qka2V5cyIsInNsaWNlIiwiX2k3IiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJ0cmlnZ2VyIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwicHJldmVudERlZmF1bHQiLCJkZWZhdWx0UHJldmVudGVkIiwiX2xvb3AiLCJfT2JqZWN0JGVudHJpZXMzJF9pIiwiX09iamVjdCRlbnRyaWVzMyIsIl9pOSIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiTSIsInRvU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaiIsInRvTG93ZXJDYXNlIiwiRiIsInNldERhdGFBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVEYXRhQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJkYXRhc2V0IiwiZmlsdGVyIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsImNoYXJBdCIsImdldERhdGFBdHRyaWJ1dGUiLCJIIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiX2dldENvbmZpZyIsIl9tZXJnZUNvbmZpZ09iaiIsIl9jb25maWdBZnRlck1lcmdlIiwiX3R5cGVDaGVja0NvbmZpZyIsIl9vYmplY3RTcHJlYWQiLCJjb25zdHJ1Y3RvciIsIkRlZmF1bHQiLCJEZWZhdWx0VHlwZSIsIl9pMTEiLCJfT2JqZWN0JGVudHJpZXM0IiwiX09iamVjdCRlbnRyaWVzNCRfaSIsInByb3RvdHlwZSIsIm1hdGNoIiwiUmVnRXhwIiwidGVzdCIsIlR5cGVFcnJvciIsInRvVXBwZXJDYXNlIiwiRXJyb3IiLCJXIiwiX0giLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9lbGVtZW50IiwiX2NvbmZpZyIsIkRBVEFfS0VZIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImRpc3Bvc2UiLCJFVkVOVF9LRVkiLCJfaXRlcmF0b3IzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIl9zdGVwMyIsIl9xdWV1ZUNhbGxiYWNrIiwiZ2V0SW5zdGFuY2UiLCJnZXRPckNyZWF0ZUluc3RhbmNlIiwiZXZlbnROYW1lIiwiQiIsInRyaW0iLCJ6IiwiX3JlZjIiLCJFbGVtZW50IiwiZmluZE9uZSIsImNoaWxkcmVuIiwiX3JlZjMiLCJtYXRjaGVzIiwicGFyZW50cyIsInByZXYiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImZvY3VzYWJsZUNoaWxkcmVuIiwibWFwIiwiam9pbiIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwiZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3RvciIsIlIiLCJ0YWdOYW1lIiwicSIsIlYiLCJLIiwiUSIsIl9XIiwiX3N1cGVyMiIsImNsb3NlIiwiX3RoaXMyIiwiX2Rlc3Ryb3lFbGVtZW50IiwiZWFjaCIsIlgiLCJZIiwiX1cyIiwiX3N1cGVyMyIsInRvZ2dsZSIsIlUiLCJHIiwiSiIsIloiLCJ0dCIsImV0IiwiaXQiLCJlbmRDYWxsYmFjayIsImxlZnRDYWxsYmFjayIsInJpZ2h0Q2FsbGJhY2siLCJudCIsInN0IiwiX0gyIiwiX3N1cGVyNCIsIl90aGlzMyIsImlzU3VwcG9ydGVkIiwiX2RlbHRhWCIsIl9zdXBwb3J0UG9pbnRlckV2ZW50cyIsIlBvaW50ZXJFdmVudCIsIl9pbml0RXZlbnRzIiwiX3N0YXJ0IiwiX2V2ZW50SXNQb2ludGVyUGVuVG91Y2giLCJjbGllbnRYIiwidG91Y2hlcyIsIl9lbmQiLCJfaGFuZGxlU3dpcGUiLCJfbW92ZSIsImFicyIsIl90aGlzNCIsImFkZCIsInBvaW50ZXJUeXBlIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJvdCIsInJ0IiwiYXQiLCJsdCIsImN0IiwiaHQiLCJkdCIsInV0IiwiZnQiLCJwdCIsIm10IiwiZ3QiLCJfdCIsImJ0IiwidnQiLCJ5dCIsInd0IiwiQXQiLCJFdCIsIlR0IiwiQXJyb3dMZWZ0IiwiQXJyb3dSaWdodCIsIkN0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInBhdXNlIiwicmlkZSIsInRvdWNoIiwid3JhcCIsIk90IiwieHQiLCJfVzMiLCJfc3VwZXI1IiwiX3RoaXM1IiwiX2ludGVydmFsIiwiX2FjdGl2ZUVsZW1lbnQiLCJfaXNTbGlkaW5nIiwidG91Y2hUaW1lb3V0IiwiX3N3aXBlSGVscGVyIiwiX2luZGljYXRvcnNFbGVtZW50IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiY3ljbGUiLCJfc2xpZGUiLCJuZXh0V2hlblZpc2libGUiLCJoaWRkZW4iLCJfY2xlYXJJbnRlcnZhbCIsIl90aGlzNiIsIl91cGRhdGVJbnRlcnZhbCIsInNldEludGVydmFsIiwiX21heWJlRW5hYmxlQ3ljbGUiLCJfdGhpczciLCJ0byIsIl90aGlzOCIsIl9nZXRJdGVtcyIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0QWN0aXZlIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsImRlZmF1bHRJbnRlcnZhbCIsIl90aGlzOSIsIl9rZXlkb3duIiwiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCJfdGhpczEwIiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsIl9kaXJlY3Rpb25Ub09yZGVyIiwiY2xlYXJUaW1lb3V0IiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJwYXJzZUludCIsIl90aGlzMTEiLCJkaXJlY3Rpb24iLCJfb3JkZXJUb0RpcmVjdGlvbiIsIl9pc0FuaW1hdGVkIiwiY2xlYXJJbnRlcnZhbCIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJrdCIsIkx0IiwiU3QiLCJEdCIsIiR0IiwiSXQiLCJOdCIsIlB0IiwiTXQiLCJqdCIsIkZ0IiwiSHQiLCJwYXJlbnQiLCJXdCIsIkJ0IiwiX1c0IiwiX3N1cGVyNiIsIl90aGlzMTIiLCJfaXNUcmFuc2l0aW9uaW5nIiwiX3RyaWdnZXJBcnJheSIsIl9pdGVyYXRvcjYiLCJfc3RlcDYiLCJfaW5pdGlhbGl6ZUNoaWxkcmVuIiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsIl9pc1Nob3duIiwiaGlkZSIsInNob3ciLCJfdGhpczEzIiwiX2dldEZpcnN0TGV2ZWxDaGlsZHJlbiIsIl9pdGVyYXRvcjciLCJfc3RlcDciLCJfZ2V0RGltZW5zaW9uIiwic3R5bGUiLCJfdGhpczE0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiX2l0ZXJhdG9yOCIsIl9zdGVwOCIsIl9pdGVyYXRvcjkiLCJfc3RlcDkiLCJfaXRlcmF0b3IxMCIsIl9zdGVwMTAiLCJfaXRlcmF0b3IxMSIsIl9zdGVwMTEiLCJ6dCIsIlJ0IiwicXQiLCJWdCIsIkt0IiwiUXQiLCJYdCIsIll0IiwiVXQiLCJHdCIsIkp0IiwiWnQiLCJ0ZSIsInJlZHVjZSIsImVlIiwiaWUiLCJuZSIsInNlIiwib2UiLCJyZSIsImFlIiwibGUiLCJjZSIsImhlIiwiZGUiLCJ1ZSIsIm5vZGVOYW1lIiwiZmUiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJwZSIsIm1lIiwiSFRNTEVsZW1lbnQiLCJnZSIsIl9lIiwibmFtZSIsImVuYWJsZWQiLCJwaGFzZSIsInN0YXRlIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwic3R5bGVzIiwiYXR0cmlidXRlcyIsImFzc2lnbiIsImVmZmVjdCIsInBvcHBlciIsInBvc2l0aW9uIiwib3B0aW9ucyIsInN0cmF0ZWd5IiwibGVmdCIsInRvcCIsIm1hcmdpbiIsImFycm93IiwicmVmZXJlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJyZXF1aXJlcyIsImJlIiwidmUiLCJ5ZSIsIndlIiwicm91bmQiLCJBZSIsInVzZXJBZ2VudERhdGEiLCJicmFuZHMiLCJpc0FycmF5IiwiYnJhbmQiLCJ2ZXJzaW9uIiwidXNlckFnZW50IiwiRWUiLCJUZSIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJ2aXN1YWxWaWV3cG9ydCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJyaWdodCIsImJvdHRvbSIsIkNlIiwiT2UiLCJpc1NhbWVOb2RlIiwiaG9zdCIsInhlIiwia2UiLCJMZSIsIlNlIiwiYXNzaWduZWRTbG90IiwiRGUiLCJvZmZzZXRQYXJlbnQiLCIkZSIsInRyYW5zZm9ybSIsInBlcnNwZWN0aXZlIiwiY29udGFpbiIsIndpbGxDaGFuZ2UiLCJJZSIsIk5lIiwiUGUiLCJNZSIsImplIiwibW9kaWZpZXJzRGF0YSIsInBvcHBlck9mZnNldHMiLCJwbGFjZW1lbnQiLCJyZWN0cyIsInBhZGRpbmciLCJjbGllbnRIZWlnaHQiLCJjbGllbnRXaWR0aCIsImNlbnRlck9mZnNldCIsImVsZW1lbnQiLCJyZXF1aXJlc0lmRXhpc3RzIiwiRmUiLCJIZSIsIldlIiwicG9wcGVyUmVjdCIsInZhcmlhdGlvbiIsIm9mZnNldHMiLCJncHVBY2NlbGVyYXRpb24iLCJhZGFwdGl2ZSIsInJvdW5kT2Zmc2V0cyIsImlzRml4ZWQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiQmUiLCJkYXRhIiwiemUiLCJwYXNzaXZlIiwiUmUiLCJpbnN0YW5jZSIsInNjcm9sbCIsInJlc2l6ZSIsInNjcm9sbFBhcmVudHMiLCJ1cGRhdGUiLCJxZSIsIlZlIiwiS2UiLCJzdGFydCIsImVuZCIsIlFlIiwiWGUiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsIlllIiwiVWUiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsIkdlIiwiSmUiLCJaZSIsInRpIiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwiZWkiLCJpaSIsImJvdW5kYXJ5Iiwicm9vdEJvdW5kYXJ5IiwiZWxlbWVudENvbnRleHQiLCJhbHRCb3VuZGFyeSIsImNvbnRleHRFbGVtZW50Iiwib2Zmc2V0IiwibmkiLCJmbGlwVmFyaWF0aW9ucyIsImFsbG93ZWRBdXRvUGxhY2VtZW50cyIsInNvcnQiLCJzaSIsIl9za2lwIiwibWFpbkF4aXMiLCJhbHRBeGlzIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwiZXZlcnkiLCJyZXNldCIsIm9pIiwicmkiLCJzb21lIiwiYWkiLCJwcmV2ZW50T3ZlcmZsb3ciLCJyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMiLCJwb3BwZXJFc2NhcGVPZmZzZXRzIiwiaXNSZWZlcmVuY2VIaWRkZW4iLCJoYXNQb3BwZXJFc2NhcGVkIiwibGkiLCJjaSIsImhpIiwidGV0aGVyIiwidGV0aGVyT2Zmc2V0IiwiZGkiLCJ1aSIsImZpIiwibW9kaWZpZXJzIiwicGkiLCJtaSIsImRlZmF1bHRNb2RpZmllcnMiLCJkZWZhdWx0T3B0aW9ucyIsIm9yZGVyZWRNb2RpZmllcnMiLCJzZXRPcHRpb25zIiwiZm9yY2VVcGRhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJkZXN0cm95Iiwib25GaXJzdFVwZGF0ZSIsImdpIiwiX2kiLCJiaSIsInZpIiwiZnJlZXplIiwiX19wcm90b19fIiwiYWZ0ZXJNYWluIiwiYWZ0ZXJSZWFkIiwiYWZ0ZXJXcml0ZSIsImFwcGx5U3R5bGVzIiwiYXV0byIsImJhc2VQbGFjZW1lbnRzIiwiYmVmb3JlTWFpbiIsImJlZm9yZVJlYWQiLCJiZWZvcmVXcml0ZSIsImNsaXBwaW5nUGFyZW50cyIsImNvbXB1dGVTdHlsZXMiLCJjcmVhdGVQb3BwZXIiLCJjcmVhdGVQb3BwZXJCYXNlIiwiY3JlYXRlUG9wcGVyTGl0ZSIsImRldGVjdE92ZXJmbG93IiwiZXZlbnRMaXN0ZW5lcnMiLCJmbGlwIiwibWFpbiIsIm1vZGlmaWVyUGhhc2VzIiwicGxhY2VtZW50cyIsInBvcHBlckdlbmVyYXRvciIsInJlYWQiLCJ2YXJpYXRpb25QbGFjZW1lbnRzIiwidmlld3BvcnQiLCJ3cml0ZSIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwieWkiLCJ3aSIsIkFpIiwiRWkiLCJUaSIsIkNpIiwiT2kiLCJ4aSIsImtpIiwiTGkiLCJTaSIsIkRpIiwiJGkiLCJJaSIsIk5pIiwiUGkiLCJNaSIsImppIiwiRmkiLCJIaSIsIldpIiwiQmkiLCJ6aSIsImF1dG9DbG9zZSIsImRpc3BsYXkiLCJwb3BwZXJDb25maWciLCJSaSIsInFpIiwiX1c1IiwiX3N1cGVyNyIsIl90aGlzMTUiLCJfcG9wcGVyIiwiX3BhcmVudCIsIl9tZW51IiwiX2luTmF2YmFyIiwiX2RldGVjdE5hdmJhciIsIl9jcmVhdGVQb3BwZXIiLCJfcmVmNCIsIl9pdGVyYXRvcjEyIiwiX3N0ZXAxMiIsImZvY3VzIiwiX2NvbXBsZXRlSGlkZSIsIl9yZWY1IiwiX2l0ZXJhdG9yMTMiLCJfc3RlcDEzIiwiX2dldFBvcHBlckNvbmZpZyIsIl9nZXRQbGFjZW1lbnQiLCJfZ2V0T2Zmc2V0IiwiX3RoaXMxNiIsIl9zZWxlY3RNZW51SXRlbSIsIl9yZWY2IiwiY2xlYXJNZW51cyIsImJ1dHRvbiIsIl9pdGVyYXRvcjE0IiwiX3N0ZXAxNCIsImNvbXBvc2VkUGF0aCIsImNsaWNrRXZlbnQiLCJkYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJWaSIsIktpIiwiUWkiLCJYaSIsImNsYXNzTmFtZSIsImNsaWNrQ2FsbGJhY2siLCJpc0FuaW1hdGVkIiwiaXNWaXNpYmxlIiwicm9vdEVsZW1lbnQiLCJZaSIsIlVpIiwiX0gzIiwiX3N1cGVyOCIsIl90aGlzMTciLCJfaXNBcHBlbmRlZCIsIl9hcHBlbmQiLCJfZ2V0RWxlbWVudCIsIl9lbXVsYXRlQW5pbWF0aW9uIiwiX3RoaXMxOCIsImNyZWF0ZUVsZW1lbnQiLCJfdGhpczE5IiwiYXBwZW5kIiwiR2kiLCJKaSIsIlppIiwidG4iLCJlbiIsImF1dG9mb2N1cyIsInRyYXBFbGVtZW50Iiwibm4iLCJzbiIsIl9INCIsIl9zdXBlcjkiLCJfdGhpczIwIiwiX2lzQWN0aXZlIiwiX2xhc3RUYWJOYXZEaXJlY3Rpb24iLCJhY3RpdmF0ZSIsIl90aGlzMjEiLCJfaGFuZGxlRm9jdXNpbiIsIl9oYW5kbGVLZXlkb3duIiwiZGVhY3RpdmF0ZSIsInNoaWZ0S2V5Iiwicm4iLCJhbiIsImxuIiwiY24iLCJnZXRXaWR0aCIsImlubmVyV2lkdGgiLCJfZGlzYWJsZU92ZXJGbG93IiwiX3NldEVsZW1lbnRBdHRyaWJ1dGVzIiwiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJpc092ZXJmbG93aW5nIiwiX3NhdmVJbml0aWFsQXR0cmlidXRlIiwiX3RoaXMyMiIsIl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrIiwic2V0UHJvcGVydHkiLCJyZW1vdmVQcm9wZXJ0eSIsIl9pdGVyYXRvcjE1IiwiX3N0ZXAxNSIsImhuIiwiZG4iLCJ1biIsInBuIiwibW4iLCJnbiIsIl9uIiwiYm4iLCJ2biIsInluIiwid24iLCJBbiIsIkVuIiwiVG4iLCJiYWNrZHJvcCIsIkNuIiwiT24iLCJfVzYiLCJfc3VwZXIxMCIsIl90aGlzMjMiLCJfZGlhbG9nIiwiX2JhY2tkcm9wIiwiX2luaXRpYWxpemVCYWNrRHJvcCIsIl9mb2N1c3RyYXAiLCJfaW5pdGlhbGl6ZUZvY3VzVHJhcCIsIl9zY3JvbGxCYXIiLCJfdGhpczI0IiwiX2FkanVzdERpYWxvZyIsIl9zaG93RWxlbWVudCIsIl90aGlzMjUiLCJfaGlkZU1vZGFsIiwiaGFuZGxlVXBkYXRlIiwiX3RoaXMyNiIsIl90aGlzMjciLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsIl90aGlzMjgiLCJfcmVzZXRBZGp1c3RtZW50cyIsIl90aGlzMjkiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIl90aGlzMzAiLCJ4biIsImtuIiwiTG4iLCJTbiIsIkRuIiwiJG4iLCJJbiIsIk5uIiwiUG4iLCJNbiIsImpuIiwiRm4iLCJIbiIsIlduIiwiQm4iLCJ6biIsIlJuIiwicW4iLCJfVzciLCJfc3VwZXIxMSIsIl90aGlzMzEiLCJfdGhpczMyIiwiX3RoaXMzMyIsImJsdXIiLCJfdGhpczM0IiwiX3RoaXMzNSIsIl90aGlzMzYiLCJfaXRlcmF0b3IxNiIsIl9zdGVwMTYiLCJfaXRlcmF0b3IxNyIsIl9zdGVwMTciLCJWbiIsImFyZWEiLCJiciIsImNvbCIsImNvZGUiLCJkaXYiLCJlbSIsImhyIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaW1nIiwib2wiLCJwcmUiLCJzbWFsbCIsInNwYW4iLCJzdWIiLCJzdXAiLCJzdHJvbmciLCJ1bCIsIktuIiwiUW4iLCJYbiIsIm5vZGVWYWx1ZSIsIlluIiwiYWxsb3dMaXN0IiwiY29udGVudCIsImV4dHJhQ2xhc3MiLCJodG1sIiwic2FuaXRpemUiLCJzYW5pdGl6ZUZuIiwidGVtcGxhdGUiLCJVbiIsIkduIiwiZW50cnkiLCJzZWxlY3RvciIsIkpuIiwiX0g1IiwiX3N1cGVyMTIiLCJfdGhpczM3IiwiZ2V0Q29udGVudCIsIl90aGlzMzgiLCJfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24iLCJoYXNDb250ZW50IiwiY2hhbmdlQ29udGVudCIsIl9jaGVja0NvbnRlbnQiLCJ0b0h0bWwiLCJfZSRjbGFzc0xpc3QiLCJpbm5lckhUTUwiLCJfbWF5YmVTYW5pdGl6ZSIsIl9pMTciLCJfT2JqZWN0JGVudHJpZXM1IiwiX09iamVjdCRlbnRyaWVzNSRfaSIsIl9zZXRDb250ZW50IiwiX2kxOSIsIl9PYmplY3QkZW50cmllczYiLCJfT2JqZWN0JGVudHJpZXM2JF9pIiwiX3B1dEVsZW1lbnRJblRlbXBsYXRlIiwidGV4dENvbnRlbnQiLCJfcmVmNyIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsIl9pdGVyYXRvcjE4IiwiX3N0ZXAxOCIsIl9yZWY4IiwiX2l0ZXJhdG9yMTkiLCJfc3RlcDE5IiwiWm4iLCJ0cyIsImVzIiwiaXMiLCJucyIsInNzIiwib3MiLCJycyIsIkFVVE8iLCJUT1AiLCJSSUdIVCIsIkJPVFRPTSIsIkxFRlQiLCJhcyIsImFuaW1hdGlvbiIsImNvbnRhaW5lciIsImN1c3RvbUNsYXNzIiwiZGVsYXkiLCJ0aXRsZSIsImxzIiwiY3MiLCJfVzgiLCJfc3VwZXIxMyIsIl90aGlzMzkiLCJfaXNFbmFibGVkIiwiX3RpbWVvdXQiLCJfaXNIb3ZlcmVkIiwiX2FjdGl2ZVRyaWdnZXIiLCJfdGVtcGxhdGVGYWN0b3J5IiwiX25ld0NvbnRlbnQiLCJ0aXAiLCJfc2V0TGlzdGVuZXJzIiwiX2ZpeFRpdGxlIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJjbGljayIsIl9sZWF2ZSIsIl9lbnRlciIsIl9oaWRlTW9kYWxIYW5kbGVyIiwiX2Rpc3Bvc2VQb3BwZXIiLCJfdGhpczQwIiwiX2lzV2l0aENvbnRlbnQiLCJfZ2V0VGlwRWxlbWVudCIsIl9yZWY5IiwiX2l0ZXJhdG9yMjAiLCJfc3RlcDIwIiwiX3RoaXM0MSIsIl9yZWYxMCIsIl9pdGVyYXRvcjIxIiwiX3N0ZXAyMSIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiX2dldFRpdGxlIiwiX2NyZWF0ZVRpcEVsZW1lbnQiLCJfZ2V0Q29udGVudEZvclRlbXBsYXRlIiwiX2dldFRlbXBsYXRlRmFjdG9yeSIsImZsb29yIiwicmFuZG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRDb250ZW50IiwiX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCIsIl9nZXREZWxlZ2F0ZUNvbmZpZyIsIl90aGlzNDIiLCJfdGhpczQzIiwiX3RoaXM0NCIsIl9pdGVyYXRvcjIyIiwiX3N0ZXAyMiIsIl90aGlzNDUiLCJfc2V0VGltZW91dCIsIl90aGlzNDYiLCJfaTIzIiwiX09iamVjdCRrZXlzMiIsIl9pMjQiLCJfT2JqZWN0JGVudHJpZXM3IiwiX09iamVjdCRlbnRyaWVzNyRfaSIsImhzIiwiZHMiLCJ1cyIsIl9jcyIsIl9zdXBlcjE0IiwiX2dldENvbnRlbnQiLCJmcyIsInBzIiwibXMiLCJncyIsIl9zIiwiYnMiLCJ2cyIsInlzIiwid3MiLCJyb290TWFyZ2luIiwic21vb3RoU2Nyb2xsIiwidGhyZXNob2xkIiwiQXMiLCJFcyIsIl9XOSIsIl9zdXBlcjE1IiwiX3RoaXM0NyIsIl90YXJnZXRMaW5rcyIsIl9vYnNlcnZhYmxlU2VjdGlvbnMiLCJfcm9vdEVsZW1lbnQiLCJfYWN0aXZlVGFyZ2V0IiwiX29ic2VydmVyIiwiX3ByZXZpb3VzU2Nyb2xsRGF0YSIsInZpc2libGVFbnRyeVRvcCIsInBhcmVudFNjcm9sbFRvcCIsInJlZnJlc2giLCJfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcyIsIl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCIsImRpc2Nvbm5lY3QiLCJfZ2V0TmV3T2JzZXJ2ZXIiLCJfaXRlcmF0b3IyMyIsIl9zdGVwMjMiLCJvYnNlcnZlIiwiX3RoaXM0OCIsImhhc2giLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiX3RoaXM0OSIsInJvb3QiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9vYnNlcnZlckNhbGxiYWNrIiwiX3RoaXM1MCIsImlkIiwiX3Byb2Nlc3MiLCJfaXRlcmF0b3IyNCIsIl9zdGVwMjQiLCJpc0ludGVyc2VjdGluZyIsIl9jbGVhckFjdGl2ZUNsYXNzIiwiX2l0ZXJhdG9yMjUiLCJfc3RlcDI1IiwiZGVjb2RlVVJJIiwiX2FjdGl2YXRlUGFyZW50cyIsIl9pdGVyYXRvcjI2IiwiX3N0ZXAyNiIsIl9pdGVyYXRvcjI3IiwiX3N0ZXAyNyIsIl9pdGVyYXRvcjI4IiwiX3N0ZXAyOCIsIl9pdGVyYXRvcjI5IiwiX3N0ZXAyOSIsIlRzIiwiQ3MiLCJPcyIsInhzIiwia3MiLCJMcyIsIlNzIiwiRHMiLCIkcyIsIklzIiwiTnMiLCJQcyIsIk1zIiwianMiLCJGcyIsIkhzIiwiV3MiLCJCcyIsInpzIiwiUnMiLCJxcyIsIlZzIiwiS3MiLCJfVzEwIiwiX3N1cGVyMTYiLCJfdGhpczUxIiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzIiwiX2dldENoaWxkcmVuIiwiX2VsZW1Jc0FjdGl2ZSIsIl9nZXRBY3RpdmVFbGVtIiwiX2RlYWN0aXZhdGUiLCJfYWN0aXZhdGUiLCJfdGhpczUyIiwiX3RvZ2dsZURyb3BEb3duIiwiX3RoaXM1MyIsInByZXZlbnRTY3JvbGwiLCJfdGhpczU0IiwiX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzIiwiX2l0ZXJhdG9yMzAiLCJfc3RlcDMwIiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZCIsIl9nZXRJbm5lckVsZW1lbnQiLCJfZ2V0T3V0ZXJFbGVtZW50IiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbCIsIl9pdGVyYXRvcjMxIiwiX3N0ZXAzMSIsIlFzIiwiWHMiLCJZcyIsIlVzIiwiR3MiLCJKcyIsIlpzIiwiZW8iLCJpbyIsIm5vIiwic28iLCJvbyIsImF1dG9oaWRlIiwicm8iLCJhbyIsIl9XMTEiLCJfc3VwZXIxNyIsIl90aGlzNTUiLCJfaGFzTW91c2VJbnRlcmFjdGlvbiIsIl9oYXNLZXlib2FyZEludGVyYWN0aW9uIiwiX3RoaXM1NiIsIl9jbGVhclRpbWVvdXQiLCJfbWF5YmVTY2hlZHVsZUhpZGUiLCJfdGhpczU3IiwiaXNTaG93biIsIl90aGlzNTgiLCJfb25JbnRlcmFjdGlvbiIsIl90aGlzNTkiLCJBbGVydCIsIkJ1dHRvbiIsIkNhcm91c2VsIiwiQ29sbGFwc2UiLCJEcm9wZG93biIsIk1vZGFsIiwiT2ZmY2FudmFzIiwiUG9wb3ZlciIsIlNjcm9sbFNweSIsIlRhYiIsIlRvYXN0IiwiVG9vbHRpcCIsIm92ZXJsYXkiLCJsaW5rcyIsImV2ZW50IiwibGluayIsImZsYXNoTWVzc2FnZSIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwicmVhZHkiLCJjaGFuZ2VQc2V1ZG9CdXR0b24iLCJjaGFuZ2VFbWFpbEJ1dHRvbiIsInRvZ2dsZUlucHV0IiwiaW5wdXRJZCIsImlucHV0IiwicmVhZE9ubHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwic3JjIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInNsaWNrIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImNlbnRlck1vZGUiLCJ2YXJpYWJsZVdpZHRoIiwiYXJyb3dzIiwicHJldkFycm93IiwibmV4dEFycm93IiwiZ2FtZUlkIiwiYWN0aW9uIiwiYWpheCIsInVybCIsIm5ld0FjdGlvbiIsIm5ld1RleHQiLCJ0ZXh0IiwibmV3SWNvbiIsIm5ld0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwicmF0aW5nQ2hhcnQiLCJnYW1lUmF0aW5nIiwicmF5b24iLCJyYXRpbmdDb2xvciIsInJhdGluZyIsInJlbWFpbmluZyIsInJhdGluZ3MiLCJjb2xvcnMiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3RhcnRBbmdsZSIsIlBJIiwic2xpY2VBbmdsZSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsIm1vdmVUbyIsImFyYyIsImxpbmVUbyIsImZpbGwiLCJwc2V1ZG8iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJyZXNwb25zZSIsIm9rIiwic2VhcmNoVGltZW91dCIsInF1ZXJ5IiwianNvbiIsInJlc3VsdHNEaXYiLCJvdmVybGF5RGl2IiwiZ2FtZSIsImdhbWVMaW5rIiwiaHJlZiIsImdhbWVJbWFnZSIsImNvdmVyIiwiYWx0Iiwic2VhcmNoR2FtZURpdiIsImFwcGVuZENoaWxkIiwiU2xpY2siLCJkZWZhdWx0cyIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhc05hdkZvciIsImNlbnRlclBhZGRpbmciLCJjc3NFYXNlIiwiY3VzdG9tUGFnaW5nIiwiZG90c0NsYXNzIiwiZHJhZ2dhYmxlIiwiZWFzaW5nIiwiZWRnZUZyaWN0aW9uIiwiZmFkZSIsImZvY3VzT25TZWxlY3QiLCJmb2N1c09uQ2hhbmdlIiwiaW5pdGlhbFNsaWRlIiwibGF6eUxvYWQiLCJtb2JpbGVGaXJzdCIsInBhdXNlT25Ib3ZlciIsInBhdXNlT25Gb2N1cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJyZXNwb25kVG8iLCJyZXNwb25zaXZlIiwicm93cyIsInJ0bCIsInNsaWRlIiwic2xpZGVzUGVyUm93Iiwic3dpcGUiLCJzd2lwZVRvU2xpZGUiLCJ0b3VjaE1vdmUiLCJ0b3VjaFRocmVzaG9sZCIsInVzZUNTUyIsInVzZVRyYW5zZm9ybSIsInZlcnRpY2FsIiwidmVydGljYWxTd2lwaW5nIiwid2FpdEZvckFuaW1hdGUiLCJ6SW5kZXgiLCJpbml0aWFscyIsImFuaW1hdGluZyIsImRyYWdnaW5nIiwiYXV0b1BsYXlUaW1lciIsImN1cnJlbnREaXJlY3Rpb24iLCJjdXJyZW50TGVmdCIsImN1cnJlbnRTbGlkZSIsIiRkb3RzIiwibGlzdFdpZHRoIiwibGlzdEhlaWdodCIsImxvYWRJbmRleCIsIiRuZXh0QXJyb3ciLCIkcHJldkFycm93Iiwic2Nyb2xsaW5nIiwic2xpZGVDb3VudCIsInNsaWRlV2lkdGgiLCIkc2xpZGVUcmFjayIsIiRzbGlkZXMiLCJzbGlkaW5nIiwic2xpZGVPZmZzZXQiLCJzd2lwZUxlZnQiLCJzd2lwaW5nIiwiJGxpc3QiLCJ0b3VjaE9iamVjdCIsInRyYW5zZm9ybXNFbmFibGVkIiwidW5zbGlja2VkIiwiZXh0ZW5kIiwiYWN0aXZlQnJlYWtwb2ludCIsImFuaW1UeXBlIiwiYW5pbVByb3AiLCJicmVha3BvaW50cyIsImJyZWFrcG9pbnRTZXR0aW5ncyIsImNzc1RyYW5zaXRpb25zIiwiZm9jdXNzZWQiLCJpbnRlcnJ1cHRlZCIsInBhdXNlZCIsInBvc2l0aW9uUHJvcCIsInJvd0NvdW50Iiwic2hvdWxkQ2xpY2siLCIkc2xpZGVyIiwiJHNsaWRlc0NhY2hlIiwidHJhbnNmb3JtVHlwZSIsInRyYW5zaXRpb25UeXBlIiwidmlzaWJpbGl0eUNoYW5nZSIsIndpbmRvd1dpZHRoIiwid2luZG93VGltZXIiLCJvcmlnaW5hbFNldHRpbmdzIiwibW96SGlkZGVuIiwid2Via2l0SGlkZGVuIiwiYXV0b1BsYXkiLCJwcm94eSIsImF1dG9QbGF5Q2xlYXIiLCJhdXRvUGxheUl0ZXJhdG9yIiwiY2hhbmdlU2xpZGUiLCJjbGlja0hhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwic2V0UG9zaXRpb24iLCJzd2lwZUhhbmRsZXIiLCJkcmFnSGFuZGxlciIsImtleUhhbmRsZXIiLCJpbnN0YW5jZVVpZCIsImh0bWxFeHByIiwicmVnaXN0ZXJCcmVha3BvaW50cyIsImluaXQiLCJhY3RpdmF0ZUFEQSIsImF0dHIiLCJ0YWJpbmRleCIsImFkZFNsaWRlIiwic2xpY2tBZGQiLCJ1bmxvYWQiLCJhcHBlbmRUbyIsImluc2VydEJlZm9yZSIsImVxIiwiaW5zZXJ0QWZ0ZXIiLCJwcmVwZW5kVG8iLCJkZXRhY2giLCJyZWluaXQiLCJhbmltYXRlSGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJhbmltYXRlIiwiYW5pbWF0ZVNsaWRlIiwiYW5pbVN0YXJ0IiwiZHVyYXRpb24iLCJzdGVwIiwiY2VpbCIsImNzcyIsImNvbXBsZXRlIiwiYXBwbHlUcmFuc2l0aW9uIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJnZXROYXZUYXJnZXQiLCJub3QiLCJzbGlkZUhhbmRsZXIiLCJidWlsZEFycm93cyIsInJlbW92ZUF0dHIiLCJidWlsZERvdHMiLCJnZXREb3RDb3VudCIsImZpcnN0IiwiYnVpbGRPdXQiLCJ3cmFwQWxsIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZW1wdHkiLCJjaGVja1Jlc3BvbnNpdmUiLCJ1bnNsaWNrIiwiY3VycmVudFRhcmdldCIsImluZGV4IiwiY2hlY2tOYXZpZ2FibGUiLCJnZXROYXZpZ2FibGVJbmRleGVzIiwiY2xlYW5VcEV2ZW50cyIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZmFkZVNsaWRlIiwib3BhY2l0eSIsImZhZGVTbGlkZU91dCIsImZpbHRlclNsaWRlcyIsInNsaWNrRmlsdGVyIiwiZm9jdXNIYW5kbGVyIiwiZ2V0Q3VycmVudCIsInNsaWNrQ3VycmVudFNsaWRlIiwiZ2V0TGVmdCIsIm91dGVyV2lkdGgiLCJnZXRPcHRpb24iLCJzbGlja0dldE9wdGlvbiIsImdldFNsaWNrIiwiZ2V0U2xpZGVDb3VudCIsImdvVG8iLCJzbGlja0dvVG8iLCJoYXNDbGFzcyIsInNldFByb3BzIiwic3RhcnRMb2FkIiwibG9hZFNsaWRlciIsImluaXRpYWxpemVFdmVudHMiLCJ1cGRhdGVBcnJvd3MiLCJpbml0QURBIiwicm9sZSIsImluaXRBcnJvd0V2ZW50cyIsImluaXREb3RFdmVudHMiLCJpbml0U2xpZGVFdmVudHMiLCJpbml0VUkiLCJrZXlDb2RlIiwib25lcnJvciIsInByb2dyZXNzaXZlTGF6eUxvYWQiLCJzbGlja05leHQiLCJzbGlja1BhdXNlIiwicGxheSIsInNsaWNrUGxheSIsInBvc3RTbGlkZSIsInNsaWNrUHJldiIsImJyZWFrcG9pbnQiLCJzcGxpY2UiLCJzZXR0aW5ncyIsIndpbmRvd0RlbGF5IiwicmVtb3ZlU2xpZGUiLCJzbGlja1JlbW92ZSIsInNldENTUyIsInNldERpbWVuc2lvbnMiLCJzZXRGYWRlIiwic2V0SGVpZ2h0Iiwic2V0T3B0aW9uIiwic2xpY2tTZXRPcHRpb24iLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsIk9UcmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZVByb3BlcnR5Iiwid2Via2l0UGVyc3BlY3RpdmUiLCJNb3pUcmFuc2Zvcm0iLCJNb3pQZXJzcGVjdGl2ZSIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwiY2xvbmUiLCJzd2lwZURpcmVjdGlvbiIsInN0YXJ0WCIsImN1clgiLCJzdGFydFkiLCJjdXJZIiwiYXRhbjIiLCJzd2lwZUVuZCIsInN3aXBlTGVuZ3RoIiwiZWRnZUhpdCIsIm1pblN3aXBlIiwiZmluZ2VyQ291bnQiLCJvcmlnaW5hbEV2ZW50Iiwic3dpcGVTdGFydCIsInN3aXBlTW92ZSIsInBhZ2VYIiwicGFnZVkiLCJjbGllbnRZIiwic3FydCIsInBvdyIsInVuZmlsdGVyU2xpZGVzIiwic2xpY2tVbmZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=