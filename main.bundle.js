/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/categoriesList/appliancesList.js":
/*!*************************************************!*\
  !*** ./src/js/categoriesList/appliancesList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleApplianceTagsList": () => (/* binding */ handleApplianceTagsList),
/* harmony export */   "updateAppliancesList": () => (/* binding */ updateAppliancesList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/createElementFactory */ "./src/js/utils/createElementFactory.js");
/* harmony import */ var _handleTags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../handleTags */ "./src/js/handleTags.js");
/* harmony import */ var _utils_normalize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/normalize */ "./src/js/utils/normalize.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



















/**
 * Remove duplicates from the appliances list
 * @param {object} recipes
 * @returns {Array} appliances list
 */

var createUniqueTagsAppliancesArr = function createUniqueTagsAppliancesArr(recipes) {
  var tagsAppliances = new Set();

  var _iterator = _createForOfIteratorHelper(recipes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var recipe = _step.value;
      recipe.appliance = recipe.appliance.toLowerCase();
      tagsAppliances.add(recipe.appliance);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
  return _toConsumableArray(tagsAppliances);
};
/**
 * Sort appliances
 * @param {*} recipes
 * @returns {Array} appliances list
 */


var collectSortedTagsAppliances = function collectSortedTagsAppliances(recipes) {
  var tagsAppliances = createUniqueTagsAppliancesArr(recipes);
  return tagsAppliances.sort();
};
/**
 * Creation appliance list in select and appliance selected tags
 * @param {object} recipes
 * @returns {HTMLElement}
 */


var handleApplianceTagsList = function handleApplianceTagsList(recipes) {
  var appliancesTagsList = document.querySelector(".select__tags-list--appliances");
  var tagsSelectedContainer = document.querySelector(".tags-selected-container");
  collectSortedTagsAppliances(recipes).forEach(function (appliance) {
    var liElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__.createElementFactory)("li", {
      class: "tag block",
      "data-cat": "appliances",
      "tab-index": "0"
    }, "".concat(appliance));
    appliancesTagsList.appendChild(liElt);
    (0,_handleTags__WEBPACK_IMPORTED_MODULE_16__.hideTagClickedInList)(liElt);
    liElt.addEventListener("click", function () {
      var tagElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__.createElementFactory)("button", {
        class: "tag-selected flex",
        "data-cat": "appliances"
      }, "".concat(appliance));
      var iconCloseElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__.createElementFactory)("span", {
        class: "icon-close"
      });
      tagElt.appendChild(iconCloseElt);
      tagsSelectedContainer.appendChild(tagElt);
      (0,_handleTags__WEBPACK_IMPORTED_MODULE_16__.filteredRecipesByTags)(recipes);
    });
  });
  (0,_handleTags__WEBPACK_IMPORTED_MODULE_16__.addMessageIfTagsListIsEmpty)(appliancesTagsList);
};
/**
 * Update appliances list input search
 * @param {object} recipes
 */


var updateAppliancesList = function updateAppliancesList(recipes) {
  var searchInput = document.querySelector("#appliances-research");
  var appliancesTagsList = document.querySelector(".select__tags-list--appliances");
  searchInput.addEventListener("keyup", function (e) {
    var userInputValue = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_17__.normString)(e.target.value);

    if (userInputValue.length) {
      var filteredAppliances = recipes.filter(function (recipe) {
        var appliance = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_17__.normString)(recipe.appliance);
        return appliance.includes(userInputValue);
      });
      appliancesTagsList.innerHTML = "";
      handleApplianceTagsList(filteredAppliances);
    } else {
      appliancesTagsList.innerHTML = "";
      handleApplianceTagsList(recipes);
    }
  });
};



/***/ }),

/***/ "./src/js/categoriesList/ingredientsList.js":
/*!**************************************************!*\
  !*** ./src/js/categoriesList/ingredientsList.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleIngredientTagsList": () => (/* binding */ handleIngredientTagsList),
/* harmony export */   "updateIngredientsList": () => (/* binding */ updateIngredientsList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/createElementFactory */ "./src/js/utils/createElementFactory.js");
/* harmony import */ var _handleTags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../handleTags */ "./src/js/handleTags.js");
/* harmony import */ var _utils_normalize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/normalize */ "./src/js/utils/normalize.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



















/**
 * Remove duplicates from the ingredients list
 * @param {*} recipes
 * @returns {Array} ingredients list
 */

var createUniqueTagsIngredientsArr = function createUniqueTagsIngredientsArr(recipes) {
  var tagsIngredients = new Set();

  var _iterator = _createForOfIteratorHelper(recipes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var recipe = _step.value;

      var _iterator2 = _createForOfIteratorHelper(recipe.ingredients),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var elt = _step2.value;
          elt.ingredient = elt.ingredient.toLowerCase();
          tagsIngredients.add(elt.ingredient);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      ;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
  return _toConsumableArray(tagsIngredients);
};
/**
 * Sort ingredients
 * @param {*} recipes
 * @returns {Array} ingredients list
 */


var collectSortedTagsIngredients = function collectSortedTagsIngredients(recipes) {
  var tagsIngredients = createUniqueTagsIngredientsArr(recipes);
  return tagsIngredients.sort();
};
/**
 * Creation ingredients list in select and ingredient selected tags
 * @param {object} recipes
 * @returns {HTMLElement}
 */


var handleIngredientTagsList = function handleIngredientTagsList(recipes) {
  var ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
  var btnsTagSelected = document.querySelector(".tags-selected-container");
  collectSortedTagsIngredients(recipes).forEach(function (ingredient) {
    var liElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__.createElementFactory)("li", {
      class: "tag block",
      "data-cat": "ingredients",
      "tab-index": "0"
    }, "".concat(ingredient));
    ingredientsTagsList.appendChild(liElt);
    (0,_handleTags__WEBPACK_IMPORTED_MODULE_16__.hideTagClickedInList)(liElt);
    liElt.addEventListener("click", function () {
      var btnElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__.createElementFactory)("button", {
        class: "tag-selected flex",
        "data-cat": "ingredients"
      }, "".concat(ingredient));
      var iconCloseElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__.createElementFactory)("span", {
        class: "icon-close"
      });
      btnElt.appendChild(iconCloseElt);
      btnsTagSelected.appendChild(btnElt);
      (0,_handleTags__WEBPACK_IMPORTED_MODULE_16__.filteredRecipesByTags)(recipes);
    });
  });
  (0,_handleTags__WEBPACK_IMPORTED_MODULE_16__.addMessageIfTagsListIsEmpty)(ingredientsTagsList);
};
/**
 * Update ingredients list input search
 * @param {object} recipes
 */


var updateIngredientsList = function updateIngredientsList(recipes) {
  var searchInput = document.querySelector("#ingredients-research");
  var ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
  searchInput.addEventListener("keyup", function (e) {
    var userInputValue = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_17__.normString)(e.target.value);

    if (userInputValue.length) {
      var filteredIngredients = recipes.filter(function (recipe) {
        return recipe.ingredients.some(function (i) {
          return (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_17__.normString)(i.ingredient).includes(userInputValue);
        });
      });
      ingredientsTagsList.innerHTML = "";
      handleIngredientTagsList(filteredIngredients);
    } else {
      ingredientsTagsList.innerHTML = "";
      handleIngredientTagsList(recipes);
    }
  });
};



/***/ }),

/***/ "./src/js/categoriesList/ustensilsList.js":
/*!************************************************!*\
  !*** ./src/js/categoriesList/ustensilsList.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleUstensilTagsList": () => (/* binding */ handleUstensilTagsList),
/* harmony export */   "updateUstensilsList": () => (/* binding */ updateUstensilsList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/createElementFactory */ "./src/js/utils/createElementFactory.js");
/* harmony import */ var _handleTags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../handleTags */ "./src/js/handleTags.js");
/* harmony import */ var _utils_normalize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/normalize */ "./src/js/utils/normalize.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



















/**
 * Remove duplicates from the ustensils list
 * @param {*} recipes
 * @returns {Array} ustensils list
 */

var createUniqueTagsUstensilsArr = function createUniqueTagsUstensilsArr(recipes) {
  var tagsUstensils = new Set();

  var _iterator = _createForOfIteratorHelper(recipes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var recipe = _step.value;

      var _iterator2 = _createForOfIteratorHelper(recipe.ustensils),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ustensil = _step2.value;
          ustensil = ustensil.toLowerCase();
          tagsUstensils.add(ustensil);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      ;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
  return _toConsumableArray(tagsUstensils);
};
/**
 * Sort ustensils
 * @param {*} recipes
 * @returns {Array} ustensils list
 */


var collectSortedTagsUstensils = function collectSortedTagsUstensils(recipes) {
  var tagsUstensils = createUniqueTagsUstensilsArr(recipes);
  return tagsUstensils.sort();
};
/**
 * Creation ustensils list and ustensil selected tags
 * @param {object} recipes
 * @returns {HTMLElement}
 */


var handleUstensilTagsList = function handleUstensilTagsList(recipes) {
  var ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");
  var btnsTagSelected = document.querySelector(".tags-selected-container");
  collectSortedTagsUstensils(recipes).forEach(function (ustensil) {
    var liElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__.createElementFactory)("li", {
      class: "tag block",
      "data-cat": "ustensils",
      "tab-index": "0"
    }, "".concat(ustensil));
    ustensilsTagsList.appendChild(liElt);
    (0,_handleTags__WEBPACK_IMPORTED_MODULE_16__.hideTagClickedInList)(liElt);
    liElt.addEventListener("click", function () {
      var btnElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__.createElementFactory)("button", {
        class: "tag-selected flex",
        "data-cat": "ustensils"
      }, "".concat(ustensil));
      var iconCloseElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_15__.createElementFactory)("span", {
        class: "icon-close"
      });
      btnElt.appendChild(iconCloseElt);
      btnsTagSelected.appendChild(btnElt);
      (0,_handleTags__WEBPACK_IMPORTED_MODULE_16__.filteredRecipesByTags)(recipes);
    });
  });
  (0,_handleTags__WEBPACK_IMPORTED_MODULE_16__.addMessageIfTagsListIsEmpty)(ustensilsTagsList);
};
/**
 * Update ustensils list input search
 * @param {object} recipes
 */


var updateUstensilsList = function updateUstensilsList(recipes) {
  var searchInput = document.querySelector("#ustensils-research");
  var ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");
  searchInput.addEventListener("keyup", function (e) {
    var userInputValue = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_17__.normString)(e.target.value);

    if (userInputValue.length) {
      var filteredUstensils = recipes.filter(function (recipe) {
        return recipe.ustensils.some(function (i) {
          return (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_17__.normString)(i).includes(userInputValue);
        });
      });
      ustensilsTagsList.innerHTML = "";
      handleUstensilTagsList(filteredUstensils);
    } else {
      ustensilsTagsList.innerHTML = "";
      handleUstensilTagsList(recipes);
    }
  });
};



/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "recipes": () => (/* binding */ recipes)
/* harmony export */ });
var recipes = [{
  id: 1,
  name: "Limonade de Coco",
  servings: 1,
  ingredients: [{
    ingredient: "Lait de coco",
    quantity: 400,
    unit: "ml"
  }, {
    ingredient: "Jus de citron",
    quantity: 2
  }, {
    ingredient: "Crème de coco",
    quantity: 2,
    unit: "cuillères à soupe"
  }, {
    ingredient: "Sucre",
    quantite: 30,
    unit: "grammes"
  }, {
    ingredient: "Glaçons"
  }],
  time: 10,
  description: "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
  appliance: "Blender",
  ustensils: ["cuillère à Soupe", "verres", "presse citron"]
}, {
  id: 2,
  name: "Poisson Cru à la tahitienne",
  servings: 2,
  ingredients: [{
    ingredient: "Thon Rouge (ou blanc)",
    quantity: 200,
    unit: "grammes"
  }, {
    ingredient: "Concombre",
    quantity: 1
  }, {
    ingredient: "Tomate",
    quantity: 2
  }, {
    ingredient: "Carotte",
    quantite: 1
  }, {
    ingredient: "Citron Vert",
    quantity: 5
  }, {
    ingredient: "Lait de Coco",
    quantity: 100,
    unit: "ml"
  }],
  time: 60,
  description: "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco",
  appliance: "Saladier",
  ustensils: ["presse citron"]
}, {
  id: 3,
  name: "Poulet coco réunionnais",
  servings: 4,
  ingredients: [{
    ingredient: "Poulet",
    quantity: 1
  }, {
    ingredient: "Lait de coco",
    quantity: 400,
    unit: "ml"
  }, {
    ingredient: "Coulis de tomates",
    quantity: 25,
    unit: "cl"
  }, {
    ingredient: "Oignon",
    quantity: 1
  }, {
    ingredient: "Poivron rouge",
    quantity: 1
  }, {
    ingredient: "Huile d'olive"
  }],
  time: 80,
  description: "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomates, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
  appliance: "Cocotte",
  ustensils: ["couteau"]
}, {
  id: 4,
  name: "Salade de riz",
  servings: 4,
  ingredients: [{
    ingredient: "Riz blanc",
    quantity: 500,
    unit: "grammes"
  }, {
    ingredient: "Thon en miettes",
    quantity: 200,
    unit: "grammes"
  }, {
    ingredient: "Tomate",
    quantity: 2
  }, {
    ingredient: "Oeuf dur",
    quantity: 2
  }, {
    ingredient: "Maïs",
    quantity: 300,
    unit: "grammes"
  }, {
    ingredient: "Vinaigrette",
    quantity: 5,
    unit: "cl"
  }],
  time: 50,
  description: "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..",
  appliance: "Cuiseur de riz",
  ustensils: ["saladier", "passoire"]
}, {
  id: 5,
  name: "Tarte au thon",
  servings: 4,
  ingredients: [{
    ingredient: "Pâte feuilletée",
    quantity: 1
  }, {
    ingredient: "Thon en miettes",
    quantity: 130,
    unit: "grammes"
  }, {
    ingredient: "Tomate",
    quantity: 2
  }, {
    ingredient: "Crème fraîche",
    quantity: 2,
    unit: "cuillères à soupe"
  }, {
    ingredient: "gruyère râpé",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Moutarde de Dijon",
    quantity: 1,
    unite: "cuillères à soupe"
  }],
  time: 45,
  description: "Etaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraîche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes",
  appliance: "Four",
  ustensils: ["moule à tarte", "râpe à fromage", "couteau"]
}, {
  id: 6,
  name: "Tarte aux pomme",
  servings: 6,
  ingredients: [{
    ingredient: "Pâte brisée",
    quantity: 1
  }, {
    ingredient: "Pomme",
    quantity: 3
  }, {
    ingredient: "Oeuf",
    quantity: "2"
  }, {
    ingredient: "Crème fraîche",
    quantity: 25,
    unit: "cl"
  }, {
    ingredient: "Sucre en Poudre",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Sucre vanillé",
    quantity: 1,
    unit: "sachets"
  }],
  time: 50,
  description: "Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraîche aux oeufs. Une fois que tout est pret, étalez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. Finallement verser la préparation à base d'oeufs et de crème fraîche. Laisser cuire au four pendant 30 minutes",
  appliance: "Four",
  ustensils: ["moule à tarte", "saladier", "fourchette"]
}, {
  id: 7,
  name: "Tartelettes au chocolat et aux fraises",
  servings: 6,
  ingredients: [{
    ingredient: "Pâte sablée",
    quantity: 1
  }, {
    ingredient: "Chocolat au lait",
    quantity: 300,
    unit: "grammes"
  }, {
    ingredient: "Crème liquide",
    quantity: 80,
    unit: "cl"
  }, {
    ingredient: "Beurre",
    quantity: "30",
    unit: "grammes"
  }, {
    ingredient: "Fraise",
    quantity: 6
  }],
  time: 50,
  description: "Etaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crème liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
  appliance: "Four",
  ustensils: ["moule à tartelettes (6)", "casserole"]
}, {
  id: 8,
  name: "Brownie",
  servings: 10,
  ingredients: [{
    ingredient: "Noix",
    quantity: "180",
    unit: "grammes"
  }, {
    ingredient: "Chocolat noir",
    quantity: 150,
    unit: "grammes"
  }, {
    ingredient: "Beurre",
    quantity: 120,
    unit: "grammes"
  }, {
    ingredient: "Oeuf",
    quantity: 2
  }, {
    ingredient: "Sucre en Poudre",
    quantity: "110",
    unit: "grammes"
  }, {
    ingredient: "farine",
    quantity: 90,
    unit: "grammes"
  }],
  time: 60,
  description: "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeuf et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.",
  appliance: "Four",
  ustensils: ["moule à gateaux", "casserole"]
}, {
  id: 9,
  name: "Salade Méditerannéene fraîche au chèvre",
  servings: 4,
  ingredients: [{
    ingredient: "Concombre",
    quantity: 1
  }, {
    ingredient: "Olives"
  }, {
    ingredient: "Fromage de chèvre",
    quantity: 150,
    unit: "grammes"
  }, {
    ingredient: "Vinaigre Balsamic"
  }, {
    ingredient: "Huile d'olive"
  }, {
    ingredient: "Basilic"
  }],
  time: 15,
  description: "Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout.",
  appliance: "Saladier",
  ustensils: ["cuillère en bois", "couteau"]
}, {
  id: 10,
  name: "Tartiflette",
  servings: 4,
  ingredients: [{
    ingredient: "Roblochon",
    quantity: "1"
  }, {
    ingredient: "Pommes de terre",
    quantity: 4.5,
    unit: "kg"
  }, {
    ingredient: "Jambon fumé",
    quantity: 2,
    unit: "tranches"
  }, {
    ingredient: "Oignon",
    quantity: 300,
    unit: "grammes"
  }, {
    ingredient: "Vin blanc sec",
    quantity: 30,
    unit: "cl"
  }],
  time: 60,
  description: "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis epluchez les et coupez les en rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !",
  appliance: "Four",
  ustensils: ["plat à gratin", "couteau", "Économe"]
}, {
  id: 11,
  name: "Salade tomate, mozzarella et pommes",
  servings: 4,
  ingredients: [{
    ingredient: "Tomates cerises",
    quantity: 250,
    unit: "grammes"
  }, {
    ingredient: "Mozzarella",
    quantity: 150,
    unit: "grammes"
  }, {
    ingredient: "Jambon de parme",
    quantity: 4,
    unit: "tranches"
  }, {
    ingredient: "Pomme",
    quantity: 1
  }, {
    ingredient: "Salade Verte",
    quantity: 1
  }, {
    ingredient: "Vinaigrette",
    quantity: 5,
    unit: "cl"
  }],
  time: 10,
  description: "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre gout. ",
  appliance: "Saladier",
  ustensils: ["couteau", "cuillère à melon"]
}, {
  id: 12,
  name: "Compote pomme rhubarbe",
  servings: 4,
  ingredients: [{
    ingredient: "Rhubarbe",
    quantity: 160,
    unit: "grammes"
  }, {
    ingredient: "Pomme",
    quantity: 8
  }, {
    ingredient: "Sucre vanillé",
    quantity: 6,
    unit: "sachets"
  }, {
    ingredient: "Eau",
    quantity: "0.5",
    unit: "tasses"
  }],
  time: 40,
  description: "Éplucher les fruits et les couper en morceaux, les mettre dans une casserole en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
  appliance: "Casserole",
  ustensils: ["couteau", "économe"]
}, {
  id: 13,
  name: "Salade mâchée de patates",
  servings: 2,
  ingredients: [{
    ingredient: "Mâche",
    quantity: 60,
    unit: "grammes"
  }, {
    ingredient: "Pommes de terre",
    quantity: 200,
    unit: "grammes"
  }, {
    ingredient: "Échalote",
    quantity: 2
  }, {
    ingredient: "Vinaigre de cidre",
    quantity: 1,
    unit: "cuillère à soupe"
  }, {
    ingredient: "huile d'olive",
    quantity: 2,
    unit: "cuillère à soupe"
  }],
  time: 40,
  description: "Cuire les pommes de terre environ 30 minutes. Découper les échalottes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre le mâche. Ajouter",
  appliance: "Casserole",
  ustensils: ["couteau", "saladier", "cuillère en bois"]
}, {
  id: 14,
  name: "Galette Bretonne Saucisse et Fromage à raclette",
  servings: 2,
  ingredients: [{
    ingredient: "Saucisse bretonne ou de toulouse",
    quantity: 2
  }, {
    ingredient: "Farine de blé noir",
    quantity: 130,
    unit: "grammes"
  }, {
    ingredient: "Oeuf",
    quantity: 1
  }, {
    ingredient: "Fromage à raclette",
    quantity: 300,
    unit: "grammes"
  }, {
    ingredient: "Oignon",
    quantity: 1
  }, {
    ingredient: "Beurre",
    quantity: 75,
    unit: "grammes"
  }],
  time: 100,
  description: "Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidire. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes",
  appliance: "Four",
  ustensils: ["poêle à frire", "couteau"]
}, {
  id: 15,
  name: "Crêpes Chocolat Banane",
  servings: 10,
  ingredients: [{
    ingredient: "Oeuf",
    quantity: 3
  }, {
    ingredient: "Farine",
    quantity: 250,
    unit: "grammes"
  }, {
    ingredient: "Lait",
    quantity: 600,
    unit: "ml"
  }, {
    ingredient: "Beurre salé",
    quantity: 30,
    unit: "grammes"
  }, {
    ingredient: "Chocolat au lait",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Banane",
    quantity: 4
  }],
  time: 60,
  description: "Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands",
  appliance: "Poêle à crêpe",
  ustensils: ["saladier", "louche", "cuillère en bois"]
}, {
  id: 16,
  name: "Gratin de pâtes à la tomate",
  servings: 2,
  ingredients: [{
    ingredient: "Tomate",
    quantity: 500,
    unit: "grammes"
  }, {
    ingredient: "Mozzarella",
    quantity: 250,
    unit: "grammes"
  }, {
    ingredient: "Pennes",
    quantity: 500,
    unit: "grammes"
  }, {
    ingredient: "Basilic",
    quantity: 1,
    unit: "tiges"
  }, {
    ingredient: "huile d'olive",
    quantity: 2,
    unit: "cuillère à soupe"
  }],
  time: 45,
  description: "Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
  appliance: "Four",
  ustensils: ["plat à gratin", "couteau", "râpe à fromage"]
}, {
  id: 17,
  name: "Smoothie à la fraise",
  servings: 6,
  ingredients: [{
    ingredient: "Fraise",
    quantity: 500,
    unit: "grammes"
  }, {
    ingredient: "Pastèque",
    quantity: 0.5
  }, {
    ingredient: "Jus de citron",
    quantity: 1,
    unit: "cuillères à soupe"
  }, {
    ingredient: "Glaçons",
    quantity: 8
  }, {
    ingredient: "Menthe"
  }],
  time: 15,
  description: "Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillière à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques fueilles de menthe pour plus de fraicheur. Mixez le tout. Servir et déguster.",
  appliance: "Blender",
  ustensils: ["verres", "couteau", "presse citron"]
}, {
  id: 18,
  name: "Smoothie ananas et vanille",
  servings: 5,
  ingredients: [{
    ingredient: "Ananas",
    quantity: 1
  }, {
    ingredient: "Glace à la vanille",
    quantity: 500,
    unit: "ml"
  }, {
    ingredient: "Lait",
    quantity: 50,
    unit: "cl"
  }],
  time: 10,
  description: "Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt",
  appliance: "Blender",
  ustensils: ["verres", "couteau"]
}, {
  id: 19,
  name: "Shake Banane Kiwis",
  servings: 4,
  ingredients: [{
    ingredient: "Kiwi",
    quantity: 4
  }, {
    ingredient: "Citron",
    quantity: 1
  }, {
    ingredient: "Lait",
    quantity: 1,
    unit: "litres"
  }, {
    ingredient: "Sucre glace",
    quantity: 30,
    unit: "grammes"
  }, {
    ingredient: "Banane",
    quantity: 1
  }],
  time: 0,
  description: "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais.",
  appliance: "Blender",
  ustensils: ["couteau", "verres", "presse citron"]
}, {
  id: 20,
  name: "Pates Carbonara",
  servings: 5,
  ingredients: [{
    ingredient: "Tagliatelles",
    quantity: 500,
    unit: "grammes"
  }, {
    ingredient: "Lardons",
    quantity: 150,
    unit: "grammes"
  }, {
    ingredient: "Crème fraîche",
    quantity: 200,
    unit: "grammes"
  }, {
    ingredient: "Parmesan",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "huile d'olive",
    quantity: 1,
    unit: "cuillères à soupe"
  }],
  time: 30,
  description: "Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crème fraîche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
  appliance: "Sauteuse",
  ustensils: ["râpe à fromage", "cuillère en bois"]
}, {
  id: 21,
  name: "Spaghettis à la bolognaise",
  servings: 4,
  ingredients: [{
    ingredient: "Spaghettis",
    quantity: 400,
    unit: "grammes"
  }, {
    ingredient: "Oignon",
    quantity: 2
  }, {
    ingredient: "Coulis de tomates",
    quantity: 300,
    unit: "grammes"
  }, {
    ingredient: "Viande hachée 1% de matière grasse",
    quantity: 400,
    unit: "grammes"
  }, {
    ingredient: "Vin rouge",
    quantity: 20,
    unit: "cl"
  }, {
    ingredient: "Crème Fraîche",
    quantity: 1,
    unit: "cuillères à soupe"
  }],
  time: 30,
  description: "Cuisiner la viande hachée dans une poêle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oigons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraîche à la viande hachée. Serivir.",
  appliance: "Casserole",
  ustensils: ["Cuillère en bois", "louche", "couteau"]
}, {
  id: 22,
  name: "Fondant au chocolat",
  servings: 4,
  ingredients: [{
    ingredient: "Beurre",
    quantity: 160,
    unit: "grammes"
  }, {
    ingredient: "Chocolat noir",
    quantity: 200,
    unit: "grammes"
  }, {
    ingredient: "Farine",
    quantity: 50,
    unit: "grammes"
  }, {
    ingredient: "Oeuf",
    quantity: 4
  }, {
    ingredient: "Sucre",
    quantity: 150,
    unit: "grammes"
  }],
  time: 30,
  description: "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crème dessert.",
  appliance: "Four",
  ustensils: ["moule à gateaux", "fouet", "casserole"]
}, {
  id: 23,
  name: "Quiche lorraine",
  servings: 4,
  ingredients: [{
    ingredient: "Pâte brisée",
    quantity: 200,
    unit: "grammes"
  }, {
    ingredient: "Lardons",
    quantity: 200,
    unit: "grammes"
  }, {
    ingredient: "Beurre",
    quantity: 30,
    unit: "grammes"
  }, {
    ingredient: "Oeuf",
    quantity: 3
  }, {
    ingredient: "Crème Fraîche",
    quantity: 20,
    unit: "cl"
  }, {
    ingredient: "Lait",
    quantity: 20,
    unit: "cl"
  }],
  time: 60,
  description: "Etaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
  appliance: "Four",
  ustensils: ["moule à gateaux", "rouleau à patisserie", "fouet"]
}, {
  id: 24,
  name: "Salade de pâtes",
  servings: 4,
  ingredients: [{
    ingredient: "Thon en miettes",
    quantity: 160,
    unit: "grammes"
  }, {
    ingredient: "Maïs",
    quantity: 60,
    unit: "grammes"
  }, {
    ingredient: "Tomate",
    quantity: 1
  }, {
    ingredient: "Concombre",
    quantity: 0.5
  }, {
    ingredient: "Macaronis",
    quantity: 300,
    unit: "grammes"
  }, {
    ingredient: "Mayonnaise",
    quantity: 2,
    unit: "cuillères à soupe"
  }],
  time: 40,
  description: "Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.",
  appliance: "Saladier",
  ustensils: ["couteau", "cuillère en bois"]
}, {
  id: 25,
  name: "Cookies",
  servings: 4,
  ingredients: [{
    ingredient: "Sucre",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Beurre",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Farine",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Chocolat noir en pepites",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Oeuf",
    quantity: 1
  }],
  time: 30,
  description: "Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.",
  appliance: "Four",
  ustensils: ["fouet", "saladier", "plaque de cuisson"]
}, {
  id: 26,
  name: "Soupe de tomates",
  servings: 2,
  ingredients: [{
    ingredient: "Tomate",
    quantity: 6
  }, {
    ingredient: "Pommes de terre",
    quantity: 1
  }, {
    ingredient: "Huile d'olive"
  }, {
    ingredient: "Oignon",
    quantity: 1
  }, {
    ingredient: "Ail",
    quantity: 1,
    unit: "gousses"
  }],
  time: 25,
  description: "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
  appliance: "Mixer",
  ustensils: ["cocotte minute", "couteau"]
}, {
  id: 27,
  name: "Soupe à l'oseille",
  servings: 4,
  ingredients: [{
    ingredient: "Oseille",
    quantity: 2
  }, {
    ingredient: "Oeuf",
    quantity: 1
  }, {
    ingredient: "Crème fraîche",
    quantity: 4,
    unit: "cuillère à soupe"
  }, {
    ingredient: "Vermicelles",
    quantity: 1,
    unit: "verres"
  }, {
    ingredient: "Beurre salé",
    quantity: 50,
    unit: "grammes"
  }],
  time: 15,
  description: "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une foit prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crème fraîche",
  appliance: "Casserole",
  ustensils: ["couteau", "cuillère en bois"]
}, {
  id: 28,
  name: "Soupe de poireaux",
  servings: 4,
  ingredients: [{
    ingredient: "Poireau",
    quantity: 3
  }, {
    ingredient: "Pommes de terre",
    quantity: 400,
    unit: "grammes"
  }, {
    ingredient: "Oseille",
    quantity: 75,
    unit: "grammes"
  }, {
    ingredient: "Beurre",
    quantity: 50,
    unit: "grammes"
  }, {
    ingredient: "Crème fraîche",
    quantity: 10,
    unit: "cl"
  }],
  time: 80,
  description: "Emincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pomme de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.",
  appliance: "Mixer",
  ustensils: ["casserole", "couteau"]
}, {
  id: 29,
  name: "Houmous Express",
  servings: 2,
  ingredients: [{
    ingredient: "Pois chiches",
    quantity: 1,
    unit: "boites"
  }, {
    ingredient: "Ail",
    quantity: 1,
    unit: "gousses"
  }, {
    ingredient: "Citron",
    quantity: 2
  }, {
    ingredient: "Huile d'olive"
  }, {
    ingredient: "Paprika"
  }],
  time: 30,
  description: "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
  appliance: "Mixer",
  ustensils: ["cuillère en bois", "presse citron"]
}, {
  id: 30,
  name: "Purée de pois cassés",
  servings: 4,
  ingredients: [{
    ingredient: "Pois Cassé",
    quantity: 500,
    unit: "grammes"
  }, {
    ingredient: "Oignon",
    quantity: 1
  }, {
    ingredient: "Ail",
    quantity: 2,
    unit: "gousses"
  }],
  time: 60,
  description: "Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuirre à petit feur pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt",
  appliance: "Mixer",
  ustensils: ["casserole", "cuillère en bois"]
}, {
  id: 31,
  name: "Jardinière de légumes",
  servings: 4,
  ingredients: [{
    ingredient: "Carotte",
    quantity: 2
  }, {
    ingredient: "Pommes de terre",
    quantity: 2
  }, {
    ingredient: "Haricots verts",
    quantity: 150,
    unit: "grammes"
  }, {
    ingredient: "Petits poids",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Lardons",
    quantity: 150,
    unit: "grammes"
  }],
  time: 60,
  description: "Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pré cuits ). Ajouter Sel, poivre, thyms et laurier",
  appliance: "Poêle",
  ustensils: ["Couteau", "économe"]
}, {
  id: 32,
  name: "Croque Monsieur à la dinde",
  servings: 4,
  ingredients: [{
    ingredient: "Pain de mie",
    quantity: 8,
    unit: "tranches"
  }, {
    ingredient: "Blanc de dinde",
    quantity: 4,
    unit: "tranches"
  }, {
    ingredient: "Emmental",
    quantity: 8,
    unit: "tranches"
  }, {
    ingredient: "Gruyère",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Lait",
    quantity: 5,
    unit: "cl"
  }, {
    ingredient: "Noix de muscade",
    quantity: 1,
    unit: "pincées"
  }],
  time: 20,
  description: "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'émental, une de blanc de dinde, et une autre d'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieux. Placer au four durnat 10 minutes.",
  appliance: "Four",
  ustensils: ["râpe à fromage", "cuillère à Soupe", "couteau"]
}, {
  id: 33,
  name: "Sandwich au saumon fumé",
  servings: 4,
  ingredients: [{
    ingredient: "Pain de mie",
    quantity: 8,
    unit: "tranches"
  }, {
    ingredient: "Saumon Fumé",
    quantity: 4,
    unit: "tranches"
  }, {
    ingredient: "Feuilles de laitue",
    quantity: 4
  }, {
    ingredient: "Fromage blanc",
    quantity: 4,
    unit: "cuillères à soupe"
  }, {
    ingredient: "Jus de citron",
    quantity: 1,
    unit: "cuillères à soupe"
  }],
  time: 5,
  description: "Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre gout. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt.",
  appliance: "Four",
  ustensils: ["couteau", "cuillère en bois"]
}, {
  id: 34,
  name: "Purée de patate douce",
  servings: 4,
  ingredients: [{
    ingredient: "Patate douce",
    quantity: 800,
    unit: "grammes"
  }, {
    ingredient: "Crème fraîche",
    quantity: 20,
    unit: "cl"
  }, {
    ingredient: "Huile d'olive"
  }, {
    ingredient: "Orange",
    quantity: 1
  }],
  time: 25,
  description: "Eplucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserole d'eau bouillante. Passer au mixer en ajoutant la crème et l'huile d'olive à son gout. Salez, poivrez. Pressez l'orange et ajouter le jus à l'ensemble. Servir.",
  appliance: "Mixer",
  ustensils: ["couteau", "économe", "cuillère en bois"]
}, {
  id: 35,
  name: "Purée de carottes",
  servings: 2,
  ingredients: [{
    ingredient: "Carotte",
    quantity: 6
  }, {
    ingredient: "Pommes de terre",
    quantity: 1
  }, {
    ingredient: "Beurre",
    quantity: 20,
    unit: "grammes"
  }, {
    ingredient: "Crème fraîche",
    quantity: 2,
    unit: "cuillères à soupe"
  }, {
    ingredient: "Cumin",
    quantity: 1,
    unit: "cuillères à café"
  }, {
    ingredient: "Noix de muscade",
    quantity: 1,
    unit: "pincées"
  }],
  time: 25,
  description: "Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumun et la noix de muscade.",
  appliance: "Mixer",
  ustensils: ["cocotte minute", "couteau", "cuillère en bois"]
}, {
  id: 36,
  name: "Lasagne Courgettes et Chèvre",
  servings: 2,
  ingredients: [{
    ingredient: "Courgette",
    quantity: 2
  }, {
    ingredient: "Fromage de chèvre",
    quantity: 4
  }, {
    ingredient: "Lait",
    quantity: 25,
    unit: "cl"
  }, {
    ingredient: "Lasagnes",
    quantity: 5,
    unit: "feuilles"
  }, {
    ingredient: "Gruyère",
    quantity: 40,
    unit: "grammes"
  }, {
    ingredient: "Maïzena",
    quantity: 1,
    unit: "cuillères à soupe"
  }],
  time: 35,
  description: "Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamelle avec le lait et la maizena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiyère. Passer au four à 180° durant 20 à 25 minutes.",
  appliance: "Four",
  ustensils: ["plat à gratin", "râpe à fromage", "fouet"]
}, {
  id: 37,
  name: "Courgettes farcies au boeuf",
  servings: 2,
  ingredients: [{
    ingredient: "Courgette",
    quantity: 2
  }, {
    ingredient: "Viande hachée",
    quantity: 600,
    unit: "grammes"
  }, {
    ingredient: "Huile d'olive",
    quantity: 25,
    unit: "cl"
  }, {
    ingredient: "Oignon",
    quantity: 1
  }, {
    ingredient: "Coulis de tomates",
    quantity: 20,
    unit: "cl"
  }, {
    ingredient: "Gruyère",
    quantity: 50,
    unit: "grammes"
  }],
  time: 60,
  description: "Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. Réserver.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rapé",
  appliance: "Four",
  ustensils: ["couteau", "cuillère en bois", "poêle à frire"]
}, {
  id: 38,
  name: "Pain Perdu",
  servings: 4,
  ingredients: [{
    ingredient: "Pain",
    quantity: 6,
    unit: "tranches"
  }, {
    ingredient: "Lait",
    quantity: 25,
    unit: "cl"
  }, {
    ingredient: "Oeuf",
    quantity: 3
  }, {
    ingredient: "Sucre roux",
    quantity: 75,
    unit: "grammes"
  }],
  time: 20,
  description: "Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir",
  appliance: "Four",
  ustensils: ["fouet", "bol", "Cuillère à Soupe"]
}, {
  id: 39,
  name: "Crumble aux pommes",
  servings: 40,
  ingredients: [{
    ingredient: "Pomme",
    quantity: 2
  }, {
    ingredient: "Farine",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Beurre",
    quantity: 50,
    unit: "grammes"
  }, {
    ingredient: "Sucre roux",
    quantity: 80,
    unit: "grammes"
  }],
  time: 40,
  description: "Découper les pommes en dé. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four",
  appliance: "Four",
  ustensils: ["saladier", "couteau", "fouet"]
}, {
  id: 40,
  name: "Limonade",
  servings: 4,
  ingredients: [{
    ingredient: "Eau",
    quantity: 1,
    unit: "Litres"
  }, {
    ingredient: "Citron Vert",
    quantity: 3
  }, {
    ingredient: "Sucre en poudre",
    quantity: 4,
    unit: "cuillères à café"
  }, {
    ingredient: "Bicarbonate",
    quantity: 1,
    unit: "cuillères à café"
  }],
  time: 10,
  description: "Dans un saladier mettre l'eau, le jus des citrons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçon et une feuille de menthe pour la déco.",
  appliance: "Saladier",
  ustensils: ["cuillère en bois"]
}, {
  id: 41,
  name: "Mousse au chocolat",
  servings: 4,
  ingredients: [{
    ingredient: "Oeuf",
    quantity: 3
  }, {
    ingredient: "Chocolat noir",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Sucre vanillé",
    quantity: 1,
    unit: "sachets"
  }],
  time: 20,
  description: "Séparer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélangez délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais",
  appliance: "Casserole",
  ustensils: ["fouet", "spatule", "verres"]
}, {
  id: 42,
  name: "Charlotte au poires",
  servings: 3,
  ingredients: [{
    ingredient: "Chocolat",
    quantity: 200,
    unit: "grammes"
  }, {
    ingredient: "Oeuf",
    quantity: 3
  }, {
    ingredient: "Poires au jus",
    quantity: 0.5,
    unit: "boites"
  }, {
    ingredient: "Boudoirs",
    quantity: 15
  }],
  time: 60,
  description: "Commencez par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposée. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.",
  appliance: "Moule à charlotte",
  ustensils: ["saladier", "couteau", "fouet"]
}, {
  id: 43,
  name: "Tarte au citron",
  servings: 6,
  ingredients: [{
    ingredient: "Pâte brisée",
    quantity: 200,
    unit: "grammes"
  }, {
    ingredient: "Sucre",
    quantity: 150,
    unit: "grammes"
  }, {
    ingredient: "Beurre fondu",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Oeuf",
    quantity: 3
  }, {
    ingredient: "Citron"
  }],
  time: 50,
  description: "Préchauffez le fours à 200°. Etaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit ",
  appliance: "Four",
  ustensils: ["rouleau à patisserie", "moule à tarte", "presse citron"]
}, {
  id: 44,
  name: "Crème déssert au chocolat",
  servings: 6,
  ingredients: [{
    ingredient: "Lait",
    quantity: 1,
    unit: "litres"
  }, {
    ingredient: "Chocolat",
    quantity: 200,
    unit: "grammes"
  }, {
    ingredient: "Sucre",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Beurre",
    quantity: 50,
    unit: "grammes"
  }, {
    ingredient: "farine",
    quantity: 40,
    unit: "grammes"
  }],
  time: 15,
  description: "Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres",
  appliance: "Casserole",
  ustensils: ["cuillère en bois"]
}, {
  id: 45,
  name: "Crème patissière",
  servings: 8,
  ingredients: [{
    ingredient: "Lait",
    quantity: 50,
    unit: "cl"
  }, {
    ingredient: "Oeuf",
    quantity: 2
  }, {
    ingredient: "Farine",
    quantity: 30,
    unit: "grammes"
  }, {
    ingredient: "Sucre",
    quantity: 80,
    unit: "grammes"
  }],
  time: 30,
  description: "Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.",
  appliance: "Casserole",
  ustensils: ["fouet", "saladier"]
}, {
  id: 46,
  name: "Far breton",
  servings: 6,
  ingredients: [{
    ingredient: "Farine",
    quantity: 250,
    unit: "grammes"
  }, {
    ingredient: "Sucre",
    quantity: 150,
    unit: "grammes"
  }, {
    ingredient: "Sucre vanillé",
    quantity: 1,
    unit: "sachets"
  }, {
    ingredient: "Oeuf",
    quantity: 4
  }, {
    ingredient: "Lait",
    quantity: 1,
    unit: "litre"
  }, {
    ingredient: "Pruneaux",
    quantity: 100,
    unit: "grammes"
  }],
  time: 60,
  description: "Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200° pendant 45 minutes",
  appliance: "Four",
  ustensils: ["fouet", "moule", "verres"]
}, {
  id: 47,
  name: "Mousse au citron",
  servings: 6,
  ingredients: [{
    ingredient: "Jus de citron",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Mascarpone",
    quantity: 250,
    unit: "grammes"
  }, {
    ingredient: "Sucre",
    quantity: 100,
    unit: "grammes"
  }, {
    ingredient: "Crème Fraîche",
    quantity: 20,
    unit: "cl"
  }],
  time: 5,
  description: "Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraîche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir",
  appliance: "Saladier",
  ustensils: ["fouet", "verres", "cuillère en bois"]
}, {
  id: 48,
  name: "Pizza",
  servings: 4,
  ingredients: [{
    ingredient: "Pâte à pizza",
    quantity: 1
  }, {
    ingredient: "Tomates pelées",
    quantity: 1,
    unit: "boites"
  }, {
    ingredient: "Lardons",
    quantity: 1,
    unit: "barquettes"
  }, {
    ingredient: "Champignons de paris",
    quantity: 1,
    unit: "boites"
  }, {
    ingredient: "Gruyère",
    quantity: 200,
    unit: "grammes"
  }],
  time: 40,
  description: "Étaler la pate a pizza. Ecraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère eet passer au four à 220° durant 20 minutes",
  appliance: "Four",
  ustensils: ["rouleau à patisserie", "râpe à fromage", "couteau"]
}, {
  id: 49,
  name: "Smoothie tropical",
  servings: 4,
  ingredients: [{
    ingredient: "Banane",
    quantity: 2
  }, {
    ingredient: "Kiwi",
    quantity: 3
  }, {
    ingredient: "Mangue",
    quantity: 1
  }, {
    ingredient: "Ananas",
    quantity: 4,
    unit: "tranches"
  }, {
    ingredient: "Miel",
    quantity: 2,
    unit: "cuillères à soupe"
  }],
  time: 0,
  description: "Découper les fruits. Le passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir",
  appliance: "Blender",
  ustensils: ["couteau", "verres"]
}, {
  id: 50,
  name: "Frangipane",
  servings: 2,
  ingredients: [{
    ingredient: "Pâte feuilletée",
    quantity: 400,
    unit: "grammes"
  }, {
    ingredient: "Oeuf",
    quantity: 6
  }, {
    ingredient: "Poudre d'amendes",
    quantity: 500,
    unit: "grammes"
  }, {
    ingredient: "Beurre",
    quantity: 500,
    unit: "grammes"
  }, {
    ingredient: "Sucre glace",
    quantity: 500,
    unit: "grammes"
  }],
  time: 60,
  description: "Préparer la frangipane : Mélanger le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes",
  appliance: "Four",
  ustensils: ["rouleau à patisserie", "fouet"]
}];


/***/ }),

/***/ "./src/js/handleSelects.js":
/*!*********************************!*\
  !*** ./src/js/handleSelects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleAllSelects": () => (/* binding */ handleAllSelects)
/* harmony export */ });
/**
 * DOM Elements
 */
// All custom selects
var ingredientsSelect = document.querySelector(".select--ingredients");
var appliancesSelect = document.querySelector(".select--appliances");
var ustensilsSelect = document.querySelector(".select--ustensils"); // All btns select

var ingredientsBtn = document.querySelector(".select__tag--ingredients");
var appliancesBtn = document.querySelector(".select__tag--appliances");
var ustensilsBtn = document.querySelector(".select__tag--ustensils"); // All tag lists

var ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
var appliancesTagsList = document.querySelector(".select__tags-list--appliances");
var ustensilsTagsList = document.querySelector(".select__tags-list--ustensils"); // All placeholder inputs

var ingredientsPlaceholderElt = document.getElementsByName("ingredients")[0];
var appliancesPlaceholderElt = document.getElementsByName("appliances")[0];
var ustensilsPlaceholderElt = document.getElementsByName("ustensils")[0];
/**
 * Handle of custom DOM select categories
 * @param {HTMLElement} btnElt
 * @param {HTMLElement} tagsListElt
 */

var handleCategoriesBtnClick = function handleCategoriesBtnClick(btnElt, tagsListElt) {
  btnElt.addEventListener("click", function () {
    tagsListElt.classList.toggle("grid");
    tagsListElt.setAttribute("aria-expanded", true);
    btnElt.classList.toggle("select__tag--selected");
    handlerForCurrentBtn(btnElt);
  });
  btnElt.previousElementSibling.addEventListener("click", function () {
    tagsListElt.classList.toggle("grid");
    tagsListElt.setAttribute("aria-expanded", true);
    btnElt.classList.toggle("select__tag--selected");
    handlerForCurrentBtn(btnElt);
  });
};
/**
 * Handle all DOM btns select
 * @param {HTMLElement} btnElt
 */


var handlerForCurrentBtn = function handlerForCurrentBtn(btnElt) {
  if (btnElt === ingredientsBtn) {
    ingredientsSelect.classList.toggle("select--ingredients--open");
    appliancesSelect.classList.remove("select--appliances--open");
    ustensilsSelect.classList.remove("select--ustensils--open");
    appliancesTagsList.classList.remove("grid");
    ustensilsTagsList.classList.remove("grid");
    ingredientsPlaceholderElt.placeholder = "Recherchez des ingredients";
    ingredientsPlaceholderElt.classList.toggle("opacity-50");
  } else if (btnElt === appliancesBtn) {
    appliancesSelect.classList.toggle("select--appliances--open");
    ingredientsSelect.classList.remove("select--ingredients--open");
    ustensilsSelect.classList.remove("select--ustensils--open");
    ingredientsTagsList.classList.remove("grid");
    ustensilsTagsList.classList.remove("grid");
    appliancesPlaceholderElt.placeholder = "Recherchez des appareils";
    appliancesPlaceholderElt.classList.toggle("opacity-50");
  } else {
    ustensilsSelect.classList.toggle("select--ustensils--open");
    ingredientsSelect.classList.remove("select--ingredients--open");
    appliancesSelect.classList.remove("select--appliances--open");
    ingredientsTagsList.classList.remove("grid");
    appliancesTagsList.classList.remove("grid");
    ustensilsPlaceholderElt.placeholder = "Recherchez des ustensiles";
    ustensilsPlaceholderElt.classList.toggle("opacity-50");
  }
};
/**
 * Closing the list of ingredients when we click outside
 */


var listeningDocumentForIngredients = function listeningDocumentForIngredients() {
  document.addEventListener("click", function (e) {
    var ingredientsElt = document.querySelector(".select--ingredients--open");
    var targetElt = e.target; // clicked elt

    do {
      if (targetElt === ingredientsElt) {
        // Click inside
        return;
      } // Go up the DOM


      targetElt = targetElt.parentNode;
    } while (targetElt); // Click outside


    ingredientsTagsList.classList.remove("grid");
    ingredientsSelect.classList.remove("select--ingredients--open");
    ingredientsBtn.classList.remove("select__tag--selected");
    ingredientsPlaceholderElt.placeholder = "Ingredients";
    ingredientsPlaceholderElt.classList.remove("opacity-50");
  });
};
/**
 * Closing the list of appliances when we click outside
 */


var listeningDocumentForAppliances = function listeningDocumentForAppliances() {
  document.addEventListener("click", function (e) {
    var appliancesElt = document.querySelector(".select--appliances--open");
    var targetElt = e.target; // clicked elt

    do {
      if (targetElt === appliancesElt) {
        return;
      }

      targetElt = targetElt.parentNode;
    } while (targetElt);

    appliancesTagsList.classList.remove("grid");
    appliancesSelect.classList.remove("select--appliances--open");
    appliancesBtn.classList.remove("select__tag--selected");
    appliancesPlaceholderElt.placeholder = "Appareils";
    appliancesPlaceholderElt.classList.remove("opacity-50");
  });
};
/**
 * Closing the list of ustensils when we click outside
 */


var listeningDocumentForUstensils = function listeningDocumentForUstensils() {
  document.addEventListener("click", function (e) {
    var ustensilsElt = document.querySelector(".select--ustensils--open");
    var targetElt = e.target; // clicked elt

    do {
      if (targetElt === ustensilsElt) {
        return;
      }

      targetElt = targetElt.parentNode;
    } while (targetElt);

    ustensilsTagsList.classList.remove("grid");
    ustensilsSelect.classList.remove("select--ustensils--open");
    ustensilsBtn.classList.remove("select__tag--selected");
    ustensilsPlaceholderElt.placeholder = "Ustensiles";
    ustensilsPlaceholderElt.classList.remove("opacity-50");
  });
};

var listeningToDocument = function listeningToDocument() {
  listeningDocumentForIngredients();
  listeningDocumentForAppliances();
  listeningDocumentForUstensils();
};
/**
 * Handle all selects and lists
 */


var handleAllSelects = function handleAllSelects() {
  handleCategoriesBtnClick(ingredientsBtn, ingredientsTagsList);
  handleCategoriesBtnClick(appliancesBtn, appliancesTagsList);
  handleCategoriesBtnClick(ustensilsBtn, ustensilsTagsList);
  listeningToDocument();
};



/***/ }),

/***/ "./src/js/handleTags.js":
/*!******************************!*\
  !*** ./src/js/handleTags.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeSelectedTags": () => (/* binding */ removeSelectedTags),
/* harmony export */   "filteredRecipesByTags": () => (/* binding */ filteredRecipesByTags),
/* harmony export */   "hideTagClickedInList": () => (/* binding */ hideTagClickedInList),
/* harmony export */   "addMessageIfTagsListIsEmpty": () => (/* binding */ addMessageIfTagsListIsEmpty)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _recipesList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipesList */ "./src/js/recipesList.js");
/* harmony import */ var _utils_createElementFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/createElementFactory */ "./src/js/utils/createElementFactory.js");
/* harmony import */ var _categoriesList_ingredientsList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categoriesList/ingredientsList */ "./src/js/categoriesList/ingredientsList.js");
/* harmony import */ var _categoriesList_appliancesList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categoriesList/appliancesList */ "./src/js/categoriesList/appliancesList.js");
/* harmony import */ var _categoriesList_ustensilsList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categoriesList/ustensilsList */ "./src/js/categoriesList/ustensilsList.js");
/* harmony import */ var _utils_normalize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/normalize */ "./src/js/utils/normalize.js");















/**
 * DOM Elements
 */

var tagsSelectedContainer = document.querySelector(".tags-selected-container");
var searchInput = document.querySelector("#search-bar");
var allTags = document.getElementsByClassName("tag");
var recipesDOMList = document.querySelector(".recipes-list");
var ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
var appliancesTagsList = document.querySelector(".select__tags-list--appliances");
var ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");
/**
 * Remove DOM recipes elements
 */

var removeDataDOMRecipes = function removeDataDOMRecipes() {
  recipesDOMList.innerHTML = "";
  ingredientsTagsList.innerHTML = "";
  appliancesTagsList.innerHTML = "";
  ustensilsTagsList.innerHTML = "";
};
/**
 * Creation all DOM recipes elements
 * @param {object}
 */


var createDataDOMRecipes = function createDataDOMRecipes(elt) {
  (0,_recipesList__WEBPACK_IMPORTED_MODULE_9__.createDOMRecipesList)(elt);
  (0,_categoriesList_ingredientsList__WEBPACK_IMPORTED_MODULE_11__.handleIngredientTagsList)(elt);
  (0,_categoriesList_appliancesList__WEBPACK_IMPORTED_MODULE_12__.handleApplianceTagsList)(elt);
  (0,_categoriesList_ustensilsList__WEBPACK_IMPORTED_MODULE_13__.handleUstensilTagsList)(elt);
};
/**
 * Detects if a tag is selected, if so, update recipes
 * @param {object} recipes
 */


var filteredRecipesByTags = function filteredRecipesByTags(recipes) {
  if (tagsSelectedContainer.hasChildNodes()) {
    var tagsChildren = tagsSelectedContainer.childNodes;
    tagsChildren.forEach(function (tagChild) {
      var tagSelectedValue = tagChild.textContent;
      var tagSelectedNormalizeValue = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(tagSelectedValue); // Filtered ricipes by selected ingredient

      if (tagChild.dataset.cat === "ingredients") {
        var filteredRecipesByIngredients = recipes.filter(function (recipe) {
          return recipe.ingredients.some(function (i) {
            return (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(i.ingredient).includes(tagSelectedNormalizeValue);
          });
        });
        removeDataDOMRecipes();
        createDataDOMRecipes(filteredRecipesByIngredients);
      } // Filtered ricipes by selected appliances


      if (tagChild.dataset.cat === "appliances") {
        var filteredRecipesByAppliance = recipes.filter(function (recipe) {
          var appliance = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(recipe.appliance);
          return appliance.includes(tagSelectedNormalizeValue);
        });
        removeDataDOMRecipes();
        createDataDOMRecipes(filteredRecipesByAppliance);
      } // Filtered ricipes by selected ustensil


      if (tagChild.dataset.cat === "ustensils") {
        var filteredRecipesByUstensils = recipes.filter(function (recipe) {
          return recipe.ustensils.some(function (u) {
            return (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(u).includes(tagSelectedNormalizeValue);
          });
        });
        removeDataDOMRecipes();
        createDataDOMRecipes(filteredRecipesByUstensils);
      }
    });
  } else if (!tagsSelectedContainer.hasChildNodes() && searchInput.value.length) {
    var userInputValue = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(searchInput.value);
    var filteredRecipes = recipes.filter(function (recipe) {
      var name = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(recipe.name);
      var description = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(recipe.description);
      return name.includes(userInputValue) || description.includes(userInputValue) || recipe.ingredients.some(function (i) {
        return (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(i.ingredient).includes(userInputValue);
      });
    }); // Filtered recipes and update tags list with input value if user delete all selected tags

    removeDataDOMRecipes();
    createDataDOMRecipes(filteredRecipes);
  } else {
    // Filtered recipes and update tags list
    removeDataDOMRecipes();
    createDataDOMRecipes(recipes);
  }
};
/**
 * Hide tag clicked in a category list
 * @param {object} tagClicked
 */


var hideTagClickedInList = function hideTagClickedInList(tagClicked) {
  var tagsSelectedContainer = document.querySelector(".tags-selected-container");
  var tagsChildren = tagsSelectedContainer.childNodes;

  for (var i = 0; i < tagsChildren.length; i++) {
    var tagSelectedValue = tagsChildren[i].textContent;
    var tagSelectedNormalizeValue = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(tagSelectedValue);
    var currentLiElt = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(tagClicked.textContent);

    if (tagSelectedNormalizeValue === currentLiElt) {
      tagClicked.classList.replace("block", "none");
    }
  }

  ;
};
/**
 * Creation and add message when tags list is empty
 * @param {HTMLElement}
 */


var addMessageIfTagsListIsEmpty = function addMessageIfTagsListIsEmpty(tagsList) {
  if (tagsList.querySelectorAll(".block").length < 1) {
    var liElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_10__.createElementFactory)("li", {
      class: "tag tag--message-empty block"
    }, "Aucun tag disponible");
    tagsList.appendChild(liElt);
  }
};
/**
 * Remove selected tag on click and update recipes
 * @param {object} recipes
 */


var removeSelectedTags = function removeSelectedTags(recipes) {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("icon-close") || e.target.classList.contains("tag-selected")) {
      allTags.forEach(function (tag) {
        if (e.target.textContent === tag.textContent || e.target.parentNode.textContent === tag.textContent) {
          tag.classList.replace("none", "block");
        }
      });

      if (e.target.classList.contains("icon-close")) {
        e.target.parentNode.remove();
        e.target.remove();
      } else if (e.target.classList.contains("tag-selected")) {
        e.target.parentNode.removeChild(e.target);
      } // updateRecipesList(recipes);


      filteredRecipesByTags(recipes);
    }
  });
};



/***/ }),

/***/ "./src/js/mainSearch.js":
/*!******************************!*\
  !*** ./src/js/mainSearch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateRecipesList": () => (/* binding */ updateRecipesList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _recipesList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipesList */ "./src/js/recipesList.js");
/* harmony import */ var _categoriesList_ingredientsList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categoriesList/ingredientsList */ "./src/js/categoriesList/ingredientsList.js");
/* harmony import */ var _categoriesList_appliancesList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categoriesList/appliancesList */ "./src/js/categoriesList/appliancesList.js");
/* harmony import */ var _categoriesList_ustensilsList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categoriesList/ustensilsList */ "./src/js/categoriesList/ustensilsList.js");
/* harmony import */ var _utils_createElementFactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/createElementFactory */ "./src/js/utils/createElementFactory.js");
/* harmony import */ var _utils_normalize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/normalize */ "./src/js/utils/normalize.js");















/**
 * DOM Elements
 */

var searchInput = document.querySelector("#search-bar");
var recipesDOMList = document.querySelector(".recipes-list");
var tagsSelectedContainer = document.querySelector(".tags-selected-container");
var ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
var appliancesTagsList = document.querySelector(".select__tags-list--appliances");
var ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");
/**
 * Remove DOM recipes elements
 */

var removeDataDOMRecipes = function removeDataDOMRecipes() {
  recipesDOMList.innerHTML = "";
  ingredientsTagsList.innerHTML = "";
  appliancesTagsList.innerHTML = "";
  ustensilsTagsList.innerHTML = "";
};
/**
 * Creation all DOM recipes elements
 * @param {object}
 */


var createDataDOMRecipes = function createDataDOMRecipes(elt) {
  (0,_recipesList__WEBPACK_IMPORTED_MODULE_9__.createDOMRecipesList)(elt);
  (0,_categoriesList_ingredientsList__WEBPACK_IMPORTED_MODULE_10__.handleIngredientTagsList)(elt);
  (0,_categoriesList_appliancesList__WEBPACK_IMPORTED_MODULE_11__.handleApplianceTagsList)(elt);
  (0,_categoriesList_ustensilsList__WEBPACK_IMPORTED_MODULE_12__.handleUstensilTagsList)(elt);
};
/**
 * Main search
 * Listen and update recipes
 * @param {object} data recipes
 * @returns {HTMLElement}
 */


var updateRecipesList = function updateRecipesList(recipes) {
  searchInput.addEventListener("keyup", function (e) {
    var userInputValue = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(e.target.value);

    if (userInputValue.length > 2) {
      var filteredRecipes = recipes.filter(function (recipe) {
        var name = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(recipe.name);
        var description = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(recipe.description);
        return name.includes(userInputValue) || description.includes(userInputValue) || recipe.ingredients.some(function (i) {
          return (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_14__.normString)(i.ingredient).includes(userInputValue);
        });
      }); // Filtered recipes and update tags list

      removeDataDOMRecipes();
      createDataDOMRecipes(filteredRecipes);
      displayInfoMessage(filteredRecipes);
    } else {
      // Create full recipes and all tags
      removeDataDOMRecipes();
      createDataDOMRecipes(recipes);
      displayInfoMessage(recipes); // Delete selected tags if user restart a research

      var tagsChildren = tagsSelectedContainer.childNodes;
      tagsChildren.forEach(function (tagChild) {
        tagChild.remove();
      });
    }
  });
};

var displayInfoMessage = function displayInfoMessage(filteredElt) {
  var infoMessageContainer = document.querySelector(".info-message-container");

  if (!filteredElt.length) {
    var messageElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_13__.createElementFactory)("p", {
      class: "info-message"
    });
    infoMessageContainer.innerHTML = "";
    infoMessageContainer.classList.replace("none", "block");
    messageElt.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.";
    infoMessageContainer.append(messageElt);
  } else {
    infoMessageContainer.innerHTML = "";
    infoMessageContainer.classList.replace("block", "none");
    recipesDOMList.innerHTML = "";
    (0,_recipesList__WEBPACK_IMPORTED_MODULE_9__.createDOMRecipesList)(filteredElt);
  }
};



/***/ }),

/***/ "./src/js/recipesList.js":
/*!*******************************!*\
  !*** ./src/js/recipesList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMRecipesList": () => (/* binding */ createDOMRecipesList)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/createElementFactory */ "./src/js/utils/createElementFactory.js");





/**
 * Creation DOM list of recipes
 * @param {object} data recipes
 * @returns {HTMLElement} recipes list
 */

var createDOMRecipesList = function createDOMRecipesList(recipes) {
  recipes.forEach(function (recipe) {
    var recipesListDOMElt = document.querySelector(".recipes-list");
    var articleElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__.createElementFactory)("article", {
      class: "recipe-card"
    });
    var articleLink = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__.createElementFactory)("a", {
      href: "#",
      "aria-label": "Lien vers la recette ".concat(recipe.name)
    });
    var imgElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__.createElementFactory)("div", {
      class: "recipe-card__img"
    });
    var cardContentElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__.createElementFactory)("div", {
      class: "recipe-card__content"
    });
    var h2Elt = document.createElement("h2");
    var titleElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__.createElementFactory)("span", {
      class: "recipe-card__content__title"
    }, "".concat(recipe.name));
    var timeContainerElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__.createElementFactory)("span", {}, " ".concat(recipe.time, " min"));
    var timeIconElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__.createElementFactory)("span", {
      class: "timer-icon"
    });
    var descriptionElts = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__.createElementFactory)("div", {
      class: "recipe-card__content__description"
    });
    var ingredientsElt = document.createElement("ul");
    recipe.ingredients.forEach(function (elt) {
      var quantity = elt.quantity ? ": ".concat(elt.quantity) : "";
      var unit = elt.unit ? " ".concat(elt.unit) : "";
      var liElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__.createElementFactory)("li", {}, "".concat(quantity) + "".concat(unit));
      var strongElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__.createElementFactory)("strong", {}, "".concat(elt.ingredient));
      liElt.insertAdjacentElement("afterbegin", strongElt);
      ingredientsElt.appendChild(liElt);
    });
    var descriptionElt = (0,_utils_createElementFactory__WEBPACK_IMPORTED_MODULE_4__.createElementFactory)("p", {}, "".concat(recipe.description));
    h2Elt.appendChild(titleElt);
    timeContainerElt.insertAdjacentElement("afterbegin", timeIconElt);
    h2Elt.appendChild(timeContainerElt);
    articleLink.appendChild(imgElt);
    cardContentElt.appendChild(h2Elt);
    descriptionElts.appendChild(ingredientsElt);
    descriptionElts.appendChild(descriptionElt);
    cardContentElt.appendChild(descriptionElts);
    articleLink.appendChild(cardContentElt);
    articleElt.appendChild(articleLink);
    recipesListDOMElt.appendChild(articleElt);
  });
};



/***/ }),

/***/ "./src/js/utils/createElementFactory.js":
/*!**********************************************!*\
  !*** ./src/js/utils/createElementFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElementFactory": () => (/* binding */ createElementFactory)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Function allowing the creation of DOM elements
 * @param {*} type
 * @param {*} attributes
 * @param  {...any} children
 * @returns {HTMLElement}
 */
var createElementFactory = function createElementFactory(type, attributes) {
  var elt = document.createElement(type);
  var key = "";

  for (key in attributes) {
    elt.setAttribute(key, attributes[key]);
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  children.forEach(function (child) {
    if (typeof child === "string") {
      elt.appendChild(document.createTextNode(child));
    } else {
      elt.appendChild(child);
    }
  });
  return elt;
};



/***/ }),

/***/ "./src/js/utils/normalize.js":
/*!***********************************!*\
  !*** ./src/js/utils/normalize.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normString": () => (/* binding */ normString)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);



// STRING Normalize
var normString = function normString(string) {
  string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  string = string.toLowerCase();
  string = string.replace(/œ/g, "oe").replace(/æ/g, "ae").replace(/[']/g, " ");
  return string;
};



/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_timer_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/timer.svg */ "./src/img/timer.svg");
/* harmony import */ var _img_search_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/search.svg */ "./src/img/search.svg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_timer_svg__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_search_svg__WEBPACK_IMPORTED_MODULE_4__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\r\n   ========================================================================== */\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\r\n   ========================================================================== */\n/**\r\n * Remove the margin in all browsers.\r\n */\nbody {\n  margin: 0; }\n\n/**\r\n * Render the `main` element consistently in IE.\r\n */\nmain {\n  display: block; }\n\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\nimg {\n  border-style: none; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\r\n * Correct the padding in Firefox.\r\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\r\n   ========================================================================== */\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\ndetails {\n  display: block; }\n\n/*\r\n * Add the correct display in all browsers.\r\n */\nsummary {\n  display: list-item; }\n\n/* Misc\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 10+.\r\n */\ntemplate {\n  display: none; }\n\n/**\r\n * Add the correct display in IE 10.\r\n */\n[hidden] {\n  display: none; }\n\n/**************************************/\n/************* Custom css *************/\n/**************************************/\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  line-height: 1.6rem;\n  font-family: 'Lato', sans-serif;\n  font-size: 1.6rem;\n  color: black;\n  scroll-behavior: smooth; }\n\nh1,\nh2,\nh3 {\n  font-weight: 400;\n  line-height: 4.6rem; }\n\nul {\n  padding: 0;\n  list-style: none; }\n\na {\n  text-decoration: none; }\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n  object-fit: cover; }\n\nbutton {\n  cursor: pointer; }\n\n[data-cat=ingredients] {\n  background-color: #3180f6;\n  color: white; }\n\n[data-cat=appliances] {\n  background-color: #68d9a4;\n  color: white; }\n\n[data-cat=ustensils] {\n  background-color: #ed6454;\n  color: white; }\n\n.none {\n  display: none; }\n\n.block {\n  display: block; }\n\n.flex {\n  display: flex !important; }\n\n.grid {\n  display: grid !important; }\n\n.opacity-50 {\n  opacity: .5; }\n\n.sr-only {\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  -webkit-clip-path: inset(50%) !important;\n  clip-path: inset(50%) !important;\n  height: 1px !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important; }\n\n.wrapper {\n  width: 100%;\n  margin: 0 auto; }\n\n@media (min-width: 576px) {\n  .wrapper {\n    max-width: 540px; } }\n\n@media (min-width: 768px) {\n  .wrapper {\n    max-width: 740px; } }\n\n@media (min-width: 991px) {\n  .wrapper {\n    max-width: 960px; } }\n\n@media (min-width: 1200px) {\n  .wrapper {\n    max-width: 1140px; } }\n\n@media (min-width: 1440px) {\n  .wrapper {\n    max-width: 1400px; } }\n\n.tag-selected {\n  align-items: center;\n  margin: 0 15px 0 0;\n  padding: 0 10px;\n  min-width: fit-content;\n  height: 35px;\n  border-radius: 0.5rem;\n  border: none; }\n  .tag-selected .icon-close {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0 0 0 15px;\n    padding: 0 10px 0 0;\n    transition: all .15s ease-in; }\n    .tag-selected .icon-close::before {\n      position: absolute;\n      content: \"\";\n      width: 12px;\n      height: 12px;\n      border-radius: 35px;\n      background-color: transparent;\n      border: solid 2px white; }\n      @media (min-width: 991px) {\n        .tag-selected .icon-close::before {\n          border: solid 3px white; } }\n    .tag-selected .icon-close::after {\n      position: absolute;\n      content: \"\\002716\";\n      font-size: 9px;\n      color: white; }\n      @media (min-width: 991px) {\n        .tag-selected .icon-close::after {\n          font-weight: 700; } }\n  .tag-selected:hover .icon-close:before {\n    background-color: white; }\n  .tag-selected:hover .icon-close:after {\n    color: black; }\n  .tag-selected[data-cat=ingredients]:hover {\n    background-color: #2459a8; }\n  .tag-selected[data-cat=appliances]:hover {\n    background-color: #2eb877; }\n  .tag-selected[data-cat=ustensils]:hover {\n    background-color: #d02816; }\n\n.recipe-card {\n  margin: 1.5rem;\n  border-radius: 0.5rem;\n  background-color: #e8e8e8; }\n  .recipe-card a {\n    color: black; }\n  .recipe-card__img {\n    height: 15rem;\n    border-radius: 0.5rem 0.5rem 0 0;\n    background-color: #c6bebe; }\n  .recipe-card__content {\n    display: flex;\n    flex-direction: column;\n    padding: 15px; }\n    .recipe-card__content h2 {\n      display: flex;\n      flex-direction: column;\n      margin: 0;\n      font-size: 2.2rem;\n      font-weight: 700; }\n      @media (min-width: 400px) {\n        .recipe-card__content h2 {\n          flex-direction: row;\n          justify-content: space-between; } }\n      @media (min-width: 1200px) {\n        .recipe-card__content h2 {\n          font-size: 1.8rem; } }\n      @media (min-width: 1440px) {\n        .recipe-card__content h2 {\n          font-size: 2.2rem; } }\n      .recipe-card__content h2 .recipe-card__content__title {\n        max-width: 255px;\n        font-weight: 400;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap; }\n        @media (min-width: 1200px) {\n          .recipe-card__content h2 .recipe-card__content__title {\n            max-width: 230px; } }\n        @media (min-width: 1440px) {\n          .recipe-card__content h2 .recipe-card__content__title {\n            max-width: 255px; } }\n      .recipe-card__content h2 .timer-icon {\n        display: inline-block;\n        position: relative;\n        top: 9px;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: 25px 25px;\n        width: 35px;\n        height: 35px; }\n    .recipe-card__content__description {\n      display: flex;\n      flex-direction: column; }\n      @media (min-width: 400px) {\n        .recipe-card__content__description {\n          flex-direction: row;\n          justify-content: space-between;\n          gap: 25px; } }\n    .recipe-card__content ul {\n      width: 50%;\n      line-height: 2.2rem; }\n    .recipe-card__content p {\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 10;\n      overflow: hidden;\n      width: 100%;\n      line-height: 2rem; }\n      @media (min-width: 400px) {\n        .recipe-card__content p {\n          width: 50%; } }\n\n.form-search-bar {\n  position: relative;\n  margin: 15px 0 0 0;\n  padding: 0 15px; }\n  .form-search-bar input[type=text] {\n    width: 100%;\n    padding: 20px;\n    margin: 0 0 15px 0;\n    display: inline-block;\n    font-size: 1.2rem;\n    border: 1px solid #e8e8e8;\n    background-color: #e8e8e8;\n    border-radius: 0.5rem;\n    box-sizing: border-box; }\n    @media (min-width: 991px) {\n      .form-search-bar input[type=text] {\n        font-size: 1.4rem; } }\n    @media (min-width: 1200px) {\n      .form-search-bar input[type=text] {\n        font-size: 1.6rem; } }\n    .form-search-bar input[type=text]::placeholder {\n      opacity: .6; }\n  .form-search-bar .search-icon {\n    position: absolute;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 28px 28px;\n    width: 35px;\n    height: 67%;\n    top: 5px;\n    right: 35px;\n    opacity: 0.7; }\n\n.select {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin: 20px 0 0 0;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: width .1s ease-in; }\n  .select:first-child {\n    margin: 0; }\n    @media (min-width: 576px) {\n      .select:first-child {\n        margin: 0 20px 0 0; } }\n  @media (min-width: 576px) {\n    .select:last-child {\n      margin: 0; } }\n  @media (min-width: 576px) {\n    .select {\n      margin: 0 20px 0 0;\n      width: 170px; } }\n  .select input[type=text] {\n    padding: 18px 10px 18px 15px;\n    width: 85%;\n    font-size: 12px;\n    font-weight: 700;\n    color: white;\n    outline: none;\n    border-radius: 0.5rem;\n    cursor: pointer; }\n    @media (min-width: 576px) {\n      .select input[type=text] {\n        width: 60%; } }\n    @media (min-width: 991px) {\n      .select input[type=text] {\n        font-size: 14px; } }\n    @media (min-width: 1200px) {\n      .select input[type=text] {\n        font-size: 16px; } }\n    .select input[type=text]::placeholder {\n      font-weight: 700;\n      color: white; }\n      .select input[type=text]::placeholder:focus, .select input[type=text]::placeholder:active {\n        opacity: 0.5; }\n  .select__tag {\n    position: relative;\n    margin: 0 4px 0 0;\n    height: 50px;\n    width: 30px;\n    border: none;\n    background-color: transparent; }\n    @media (min-width: 576px) {\n      .select__tag {\n        height: 100%; } }\n    .select__tag:before {\n      position: absolute;\n      content: \"\";\n      right: 14px;\n      width: 12px;\n      height: 3px;\n      transform: rotate(-130deg);\n      border-radius: 0.5rem;\n      background-color: white;\n      transition: transform .2s ease-in; }\n    .select__tag:after {\n      position: absolute;\n      content: \"\";\n      right: 7px;\n      width: 12px;\n      height: 3px;\n      transform: rotate(130deg);\n      border-radius: 0.5rem;\n      background-color: white;\n      transition: transform .2s ease-in-out; }\n    .select__tag--selected:before {\n      position: absolute;\n      content: \"\";\n      right: 14px;\n      width: 12px;\n      height: 3px;\n      transform: rotate(-45deg);\n      border-radius: 0.5rem;\n      background-color: white;\n      transition: transform .2s ease-in; }\n    .select__tag--selected:after {\n      position: absolute;\n      content: \"\";\n      right: 7px;\n      width: 12px;\n      height: 3px;\n      transform: rotate(45deg);\n      border-radius: 0.5rem;\n      background-color: white;\n      transition: transform .2s ease-in; }\n  .select .fas {\n    color: white; }\n  .select--ingredients {\n    background-color: #3180f6; }\n    .select--ingredients input[type=text] {\n      border: 1px solid #3180f6;\n      background-color: #3180f6;\n      color: white; }\n      .select--ingredients input[type=text]:hover {\n        background-color: #2459a8; }\n    .select--ingredients--open {\n      flex: 1;\n      transition: flex .06s ease-in-out; }\n      @media (min-width: 576px) {\n        .select--ingredients--open {\n          flex: auto; } }\n      .select--ingredients--open:hover {\n        background-color: #3180f6 !important; }\n        .select--ingredients--open:hover input[type=text] {\n          background-color: #3180f6 !important;\n          border-color: #3180f6 !important; }\n    .select--ingredients:hover {\n      background-color: #2459a8; }\n      .select--ingredients:hover input[type=text] {\n        background-color: #2459a8;\n        border-color: #2459a8; }\n  .select--appliances {\n    background-color: #68d9a4; }\n    .select--appliances input[type=text] {\n      border: 1px solid #68d9a4;\n      background-color: #68d9a4;\n      color: white; }\n      .select--appliances input[type=text]:hover {\n        background-color: #2eb877; }\n    .select--appliances--open {\n      flex: 0.5;\n      transition: flex .06s ease-in-out; }\n      @media (min-width: 576px) {\n        .select--appliances--open {\n          flex: auto; } }\n      @media (min-width: 991px) {\n        .select--appliances--open {\n          flex: 0.5; } }\n      .select--appliances--open:hover {\n        background-color: #68d9a4 !important; }\n        .select--appliances--open:hover input[type=text] {\n          background-color: #68d9a4 !important;\n          border-color: #68d9a4 !important; }\n    .select--appliances:hover {\n      background-color: #2eb877; }\n      .select--appliances:hover input[type=text] {\n        background-color: #2eb877;\n        border-color: #2eb877; }\n  .select--ustensils {\n    background-color: #ed6454; }\n    .select--ustensils input[type=text] {\n      border: 1px solid #ed6454;\n      background-color: #ed6454;\n      color: white; }\n      .select--ustensils input[type=text]:hover {\n        background-color: #d02816; }\n    .select--ustensils--open {\n      flex: 1;\n      transition: flex .06s ease-in-out; }\n      @media (min-width: 576px) {\n        .select--ustensils--open {\n          flex: auto; } }\n      .select--ustensils--open:hover {\n        background-color: #ed6454 !important; }\n        .select--ustensils--open:hover input[type=text] {\n          background-color: #ed6454 !important;\n          border-color: #ed6454 !important; }\n    .select--ustensils:hover {\n      background-color: #d02816; }\n      .select--ustensils:hover input[type=text] {\n        background-color: #d02816;\n        border-color: #d02816; }\n\nheader {\n  text-align: center;\n  padding: 15px; }\n  header .lpp_logo {\n    width: 200px; }\n    @media (min-width: 1200px) {\n      header .lpp_logo {\n        width: 320px; } }\n\n.tags-selection-container {\n  display: flex;\n  flex-direction: column;\n  padding: 15px; }\n  @media (min-width: 576px) {\n    .tags-selection-container {\n      flex-direction: row; } }\n\n.select__tags-list {\n  position: absolute;\n  display: none;\n  z-index: 10;\n  padding: 5px 0;\n  top: 27px;\n  max-height: 348px;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 0.5rem; }\n  @media (min-width: 768px) {\n    .select__tags-list {\n      grid-template-columns: repeat(2, 1fr); } }\n  @media (min-width: 991px) {\n    .select__tags-list {\n      column-gap: 10px;\n      max-height: 284px; } }\n  .select__tags-list .tag {\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding: 8px 8px 8px 15px;\n    font-weight: 700;\n    cursor: pointer; }\n    .select__tags-list .tag::first-letter {\n      text-transform: uppercase; }\n    .select__tags-list .tag--message-empty {\n      font-weight: 400;\n      opacity: .5;\n      cursor: default; }\n      .select__tags-list .tag--message-empty:hover {\n        background-color: transparent; }\n\n@media (min-width: 991px) {\n  .select__tags-list--ingredients {\n    grid-template-columns: repeat(3, 1fr); } }\n\n@media (min-width: 1200px) {\n  .select__tags-list--ingredients {\n    grid-template-columns: repeat(5, 1fr);\n    max-height: 187px; } }\n\n@media (min-width: 576px) {\n  .select__tags-list--ingredients li {\n    max-width: 86%; } }\n\n@media (min-width: 991px) {\n  .select__tags-list--ingredients li {\n    max-width: 87%; } }\n\n.select__tags-list--ingredients li:hover {\n  background-color: #2459a8;\n  color: white; }\n\n@media (min-width: 768px) {\n  .select__tags-list--appliances {\n    max-height: 188px; } }\n\n@media (min-width: 576px) {\n  .select__tags-list--appliances li {\n    max-width: 86%; } }\n\n@media (min-width: 991px) {\n  .select__tags-list--appliances li {\n    max-width: 100%; } }\n\n.select__tags-list--appliances li:hover {\n  background-color: #2eb877;\n  color: white; }\n\n@media (min-width: 991px) {\n  .select__tags-list--ustensils {\n    grid-template-columns: repeat(3, 1fr); } }\n\n@media (min-width: 1200px) {\n  .select__tags-list--ustensils {\n    grid-template-columns: repeat(4, 1fr);\n    max-height: 187px; } }\n\n@media (min-width: 576px) {\n  .select__tags-list--ustensils li {\n    max-width: 86%; } }\n\n@media (min-width: 991px) {\n  .select__tags-list--ustensils li {\n    max-width: 87%; } }\n\n@media (min-width: 991px) {\n  .select__tags-list--ustensils li {\n    max-width: 90%; } }\n\n.select__tags-list--ustensils li:hover {\n  background-color: #d02816;\n  color: white; }\n\n.tags-selected-container {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 15px;\n  padding: 0 15px; }\n\n.info-message-container {\n  padding: 15px; }\n\n.recipes-list {\n  display: flex;\n  flex-direction: column; }\n  @media (min-width: 991px) {\n    .recipes-list {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      grid-template-rows: auto; } }\n  @media (min-width: 1200px) {\n    .recipes-list {\n      grid-template-columns: repeat(3, 1fr); } }\n", "",{"version":3,"sources":["webpack://./src/styles/_base/_base.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_utils/_variables.scss","webpack://./src/styles/_utils/_classes.scss","webpack://./src/styles/_utils/_mixins.scss","webpack://./src/styles/_components/_tag-selected.scss","webpack://./src/styles/_components/_recipe-card.scss","webpack://./src/styles/_components/_search-bar.scss","webpack://./src/styles/_components/_select.scss","webpack://./src/styles/_layout/_header.scss","webpack://./src/styles/_layout/_tags-selection-container.scss","webpack://./src/styles/_layout/_tags-selected-container.scss","webpack://./src/styles/_pages/_index.scss"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+ECA+E;ADG/E;;;ECCE;ADID;EACC,iBAAiB;EAAE,MAAA;EACnB,8BAA8B;EAAE,MAAA,EAAO;;AAGzC;+ECD+E;ADI/E;;ECDE;ADKF;EACE,SAAS,EAAA;;AAGX;;ECHE;ADOF;EACE,cAAc,EAAA;;AAGhB;;;ECJE;ADSF;EACE,cAAc;EACd,gBAAgB,EAAA;;AAGlB;+ECR+E;ADW/E;;;ECPE;ADYF;EACE,uBAAuB;EAAE,MAAA;EACzB,SAAS;EAAE,MAAA;EACX,iBAAiB;EAAE,MAAA,EAAO;;AAG5B;;;ECNE;ADWF;EACE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;+ECR+E;ADW/E;;ECRE;ADYF;EACE,6BAA6B,EAAA;;AAG/B;;;ECTE;ADcF;EACE,mBAAmB;EAAE,MAAA;EACrB,0BAA0B;EAAE,MAAA;EAC5B,iCAAiC;EAAE,MAAA,EAAO;;AAG5C;;ECTE;ADaF;;EAEE,mBAAmB,EAAA;;AAGrB;;;ECVE;ADeF;;;EAGE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;;ECXE;ADeF;EACE,cAAc,EAAA;;AAGhB;;;ECZE;ADiBF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB,EAAA;;AAG1B;EACE,eAAe,EAAA;;AAGjB;EACE,WAAW,EAAA;;AAGb;+EClB+E;ADqB/E;;EClBE;ADsBF;EACE,kBAAkB,EAAA;;AAGpB;+ECrB+E;ADwB/E;;;ECpBE;ADyBF;;;;;EAKE,oBAAoB;EAAE,MAAA;EACtB,eAAe;EAAE,MAAA;EACjB,iBAAiB;EAAE,MAAA;EACnB,SAAS;EAAE,MAAA,EAAO;;AAGpB;;;EClBE;ADuBF;;EACQ,MAAA;EACN,iBAAiB,EAAA;;AAGnB;;;ECnBE;ADwBF;;EACS,MAAA;EACP,oBAAoB,EAAA;;AAGtB;;ECrBE;ADyBF;;;;EAIE,0BAA0B,EAAA;;AAG5B;;ECvBE;AD2BF;;;;EAIE,kBAAkB;EAClB,UAAU,EAAA;;AAGZ;;ECzBE;AD6BF;;;;EAIE,8BAA8B,EAAA;;AAGhC;;EC3BE;AD+BF;EACE,8BAA8B,EAAA;;AAGhC;;;;;EC1BE;ADiCF;EACE,sBAAsB;EAAE,MAAA;EACxB,cAAc;EAAE,MAAA;EAChB,cAAc;EAAE,MAAA;EAChB,eAAe;EAAE,MAAA;EACjB,UAAU;EAAE,MAAA;EACZ,mBAAmB;EAAE,MAAA,EAAO;;AAG9B;;ECzBE;AD6BF;EACE,wBAAwB,EAAA;;AAG1B;;EC3BE;AD+BF;EACE,cAAc,EAAA;;AAGhB;;;EC5BE;AACF;;EDkCE,sBAAsB;EAAE,MAAA;EACxB,UAAU;EAAE,MAAA,EAAO;;AAGrB;;EC7BE;AACF;;EDkCE,YAAY,EAAA;;AAGd;;;EC9BE;AACF;EDmCE,6BAA6B;EAAE,MAAA;EAC/B,oBAAoB;EAAE,MAAA,EAAO;;AAG/B;;EC/BE;AACF;EDmCE,wBAAwB,EAAA;;AAG1B;;;EChCE;ADqCF;EACE,0BAA0B;EAAE,MAAA;EAC5B,aAAa;EAAE,MAAA,EAAO;;AAGxB;+EClC+E;ADqC/E;;EClCE;ADsCF;EACE,cAAc,EAAA;;AAGhB;;ECpCE;ADwCF;EACE,kBAAkB,EAAA;;AAGpB;+ECvC+E;AD0C/E;;ECvCE;AD2CF;EACE,aAAa,EAAA;;AAGf;;ECzCE;AACF;ED6CE,aAAa,EAAA;;AAGf,uCAAA;AACA,uCAAA;AACA,uCAAA;AAEA;EACE,sBAAsB;EACtB,gBAAgB,EAAA;;AAGlB;EACE,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,+BAA+B;EAC/B,iBAAiB;EACjB,YElWiC;EFmWjC,uBAAuB,EAAA;;AAGzB;;;EAGE,gBAAgB;EAChB,mBAAmB,EAAA;;AAGrB;EACE,UAAU;EACV,gBAAgB,EAAA;;AAGlB;EACE,qBAAqB,EAAA;;AAGvB;;EAEE,eAAe;EACf,YAAY;EACZ,iBAAiB,EAAA;;AAGnB;EACE,eAAe,EAAA;;AClDjB;EDuDE,yBE5YgC;EF6YhC,YAAY,EAAA;;ACpDd;EDwDE,yBEhZkC;EFiZlC,YAAY,EAAA;;ACrDd;EDyDE,yBEpZ+B;EFqZ/B,YAAY,EAAA;;AGzZd;EACE,aAAa,EAAA;;AAGf;EACE,cAAc,EAAA;;AAGhB;EACE,wBAAuB,EAAA;;AAGzB;EACE,wBAAuB,EAAA;;AAGzB;EACE,WAAW,EAAA;;AAIb;EACE,oBAAoB;EACpB,yCAAyC;EACzC,wCAAwC;EAChC,gCAAgC;EACxC,sBAAsB;EACtB,uBAAuB;EACvB,2BAA2B;EAC3B,qBAAqB;EACrB,6BAA6B;EAC7B,qBAAqB;EACrB,8BAA8B,EAAA;;AAIhC;EACE,WAAW;EACX,cAAc,EAAA;;ACzBd;ED6BA;IACE,gBAAgB,EAAA,EACjB;;AC/BD;EDmCA;IACE,gBAAgB,EAAA,EACjB;;ACrCD;EDyCA;IACE,gBAAgB,EAAA,EACjB;;AC3CD;ED+CA;IACE,iBAAiB,EAAA,EAClB;;ACjDD;EDqDA;IACE,iBAAiB,EAAA,EAClB;;AEpEH;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,YAAY;EACZ,qBHMY;EGLZ,YAAY,EAAA;EAPd;IAUI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,4BAA4B,EAAA;IAhBhC;MAmBM,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,YAAY;MACZ,mBAAmB;MACnB,6BAA6B;MAC7B,uBAAuB,EAAA;MDZ3B;QCbF;UA4BQ,uBAAuB,EAAA,EAE1B;IA9BL;MAiCM,kBAAkB;MAClB,kBAAkB;MAClB,cAAc;MACd,YH1BuB,EAAA;MEG3B;QCbF;UAuCQ,gBAAgB,EAAA,EAEnB;EAzCL;IA+CQ,uBHrCqB,EAAA;EGV7B;IAmDQ,YHxC2B,EAAA;EGXnC;IAyDI,yBHpDmC,EAAA;EGLvC;IA6DI,yBHvDqC,EAAA;EGNzC;IAiEI,yBH1DkC,EAAA;;AIPtC;EACE,cAAc;EACd,qBJUY;EITZ,yBJMgC,EAAA;EITlC;IAMI,YJK+B,EAAA;EIFjC;IACE,aAAa;IACb,gCAAkC;IAClC,yBJJwB,EAAA;EIO1B;IACE,aAAa;IACb,sBAAsB;IACtB,aAAa,EAAA;IAHd;MAMG,aAAa;MACb,sBAAsB;MACtB,SAAS;MACT,iBAAiB;MACjB,gBAAgB,EAAA;MFZpB;QEEC;UAaK,mBAAmB;UACnB,8BAA8B,EAAA,EAoCjC;MFpDH;QEEC;UAkBK,iBAAiB,EAAA,EAgCpB;MFpDH;QEEC;UAsBK,iBAAiB,EAAA,EA4BpB;MAlDF;QA0BK,gBAAgB;QAChB,gBAAgB;QFvBtB,gBAAgB;QAChB,uBAAuB;QACvB,mBAAmB,EAAA;QARnB;UEEC;YA+BO,gBAAgB,EAAA,EAMnB;QFvCL;UEEC;YAmCO,gBAAgB,EAAA,EAEnB;MArCJ;QAwCK,qBAAqB;QACrB,kBAAkB;QAClB,QAAQ;QACR,yDAAyC;QACzC,2BAA2B;QAC3B,4BAA4B;QAC5B,0BAA0B;QAC1B,WAAW;QACX,YAAY,EAAA;IAIhB;MACE,aAAa;MACb,sBAAsB,EAAA;MFxD1B;QEsDE;UAKI,mBAAmB;UACnB,8BAA8B;UAC9B,SAAS,EAAA,EAEZ;IA7DF;MAgEG,UAAU;MACV,mBAAmB,EAAA;IAjEtB;MAqEG,oBAAoB;MACpB,4BAA4B;MAC5B,sBAAsB;MACtB,gBAAgB;MAChB,WAAW;MACX,iBAAiB,EAAA;MF5ErB;QEEC;UA6EK,UAAU,EAAA,EAEb;;AC9FL;EACE,kBAAkB;EAClB,kBAAkB;EAClB,eAAe,EAAA;EAHjB;IAMI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,yBLF8B;IKG9B,yBLH8B;IKI9B,qBLDU;IKEV,sBAAsB,EAAA;IHDxB;MGbF;QAiBM,iBAAiB,EAAA,EAUpB;IHdD;MGbF;QAqBM,iBAAiB,EAAA,EAMpB;IA3BH;MAyBM,WAAW,EAAA;EAzBjB;IA8BI,kBAAkB;IAClB,yDAA0C;IAC1C,2BAA2B;IAC3B,4BAA4B;IAC5B,0BAA0B;IAC1B,WAAW;IACX,WAAW;IACX,QAAQ;IACR,WAAW;IACX,YAAY,EAAA;;ACvChB;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,qBNKY;EMJZ,eAAe;EACf,6BAA6B,EAAA;EAT/B;IAYI,SAAS,EAAA;IJCX;MIbF;QAeM,kBAAkB,EAAA,EAErB;EJJD;IIbF;MAsBM,SAAS,EAAA,EAEZ;EJXD;IIbF;MA2BI,kBAAkB;MAClB,YAAY,EAAA,EAqOf;EAjQD;IAgCI,4BAA4B;IAC5B,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,YN1ByB;IM2BzB,aAAa;IACb,qBN1BU;IM2BV,eAAe,EAAA;IJ1BjB;MIbF;QA0CM,UAAU,EAAA,EAoBb;IJjDD;MIbF;QA8CM,eAAe,EAAA,EAgBlB;IJjDD;MIbF;QAkDM,eAAe,EAAA,EAYlB;IA9DH;MAsDM,gBAAgB;MAChB,YN7CuB,EAAA;MMV7B;QA2DQ,YAAY,EAAA;EAKlB;IACE,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,6BAA6B,EAAA;IJzD/B;MImDA;QASI,YAAY,EAAA,EAoDf;IA7DA;MAaG,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,WAAW;MACX,WAAW;MACX,0BAA0B;MAC1B,qBNvEQ;MMwER,uBN1EuB;MM2EvB,iCAAiC,EAAA;IArBpC;MAyBG,kBAAkB;MAClB,WAAW;MACX,UAAU;MACV,WAAW;MACX,WAAW;MACX,yBAAyB;MACzB,qBNnFQ;MMoFR,uBNtFuB;MMuFvB,qCAAqC,EAAA;IAGtC;MAEG,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,WAAW;MACX,WAAW;MACX,yBAAyB;MACzB,qBNhGM;MMiGN,uBNnGqB;MMoGrB,iCAAiC,EAAA;IAVpC;MAcG,kBAAkB;MAClB,WAAW;MACX,UAAU;MACV,WAAW;MACX,WAAW;MACX,wBAAwB;MACxB,qBN5GM;MM6GN,uBN/GqB;MMgHrB,iCAAiC,EAAA;EA1HzC;IAgII,YNtHyB,EAAA;EMyH3B;IACE,yBNlI8B,EAAA;IMiI/B;MAIG,yBNrI4B;MMsI5B,yBNtI4B;MMuI5B,YN/HuB,EAAA;MMyH1B;QASK,yBNvI+B,EAAA;IM2InC;MACE,OAAO;MACP,iCAAiC,EAAA;MJrIrC;QImIE;UAKI,UAAU,EAAA,EAWb;MAhBA;QASG,oCAA0C,EAAA;QAT7C;UAYK,oCAA0C;UAC1C,gCAAsC,EAAA;IA1B7C;MAgCG,yBN9JiC,EAAA;MM8HpC;QAmCK,yBNjK+B;QMkK/B,qBNlK+B,EAAA;EMuKrC;IACE,yBN1KgC,EAAA;IMyKjC;MAIG,yBN7K8B;MM8K9B,yBN9K8B;MM+K9B,YNxKuB,EAAA;MMkK1B;QASK,yBN/KiC,EAAA;IMmLrC;MACE,SAAS;MACT,iCAAiC,EAAA;MJ9KrC;QI4KE;UAKI,UAAU,EAAA,EAeb;MJhMH;QI4KE;UASI,SAAS,EAAA,EAWZ;MApBA;QAaG,oCAA4C,EAAA;QAb/C;UAgBK,oCAA4C;UAC5C,gCAAwC,EAAA;IA9B/C;MAoCG,yBN1MmC,EAAA;MMsKtC;QAuCK,yBN7MiC;QM8MjC,qBN9MiC,EAAA;EMmNvC;IACE,yBNtN6B,EAAA;IMqN9B;MAIG,yBNzN2B;MM0N3B,yBN1N2B;MM2N3B,YNrNuB,EAAA;MM+M1B;QASK,yBN3N8B,EAAA;IM+NlC;MACE,OAAO;MACP,iCAAiC,EAAA;MJ3NrC;QIyNE;UAKI,UAAU,EAAA,EAWb;MAhBA;QASG,oCAA2C,EAAA;QAT9C;UAYK,oCAA2C;UAC3C,gCAAuC,EAAA;IA1B9C;MAgCG,yBNlPgC,EAAA;MMkNnC;QAmCK,yBNrP8B;QMsP9B,qBNtP8B,EAAA;;AOPtC;EACE,kBAAkB;EAClB,aAAa,EAAA;EAFf;IAKI,YAAY,EAAA;ILQd;MKbF;QAQM,YAAY,EAAA,EAEf;;ACVH;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa,EAAA;ENUb;IMbF;MAMI,mBAAmB,EAAA,EAEtB;;AAED;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,cAAc;EACd,SAAS;EACT,iBAAiB;EACjB,WAAW;EACX,gBAAgB;EAChB,qBRPY,EAAA;EECZ;IMHF;MAYI,qCAAqC,EAAA,EA+BxC;ENxCC;IMHF;MAgBI,gBAAgB;MAChB,iBAAiB,EAAA,EA0BpB;EA3CD;IAqBI,WAAW;IACX,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;IAChB,eAAe,EAAA;IA3BnB;MA8BM,yBAAyB,EAAA;IA9B/B;MAkCM,gBAAgB;MAChB,WAAW;MACX,eAAe,EAAA;MApCrB;QAuCQ,6BAA6B,EAAA;;ANpCnC;EM0CF;IAGI,qCAAqC,EAAA,EAuBxC;;ANpEC;EM0CF;IAOI,qCAAqC;IACrC,iBAAiB,EAAA,EAkBpB;;ANpEC;EM0CF;IAcM,cAAc,EAAA,EAMjB;;AN9DD;EM0CF;IAkBM,cAAc,EAAA,EAEjB;;AApBH;EAuBI,yBRzEmC;EQ0EnC,YRrEyB,EAAA;;AEG3B;EMsEF;IAGI,iBAAiB,EAAA,EAkBpB;;AN3FC;EMsEF;IASM,cAAc,EAAA,EAMjB;;ANrFD;EMsEF;IAaM,eAAe,EAAA,EAElB;;AAfH;EAkBI,yBR/FqC;EQgGrC,YR5FyB,EAAA;;AEG3B;EM6FF;IAGI,qCAAqC,EAAA,EA2BxC;;AN3HC;EM6FF;IAOI,qCAAqC;IACrC,iBAAiB,EAAA,EAsBpB;;AN3HC;EM6FF;IAcM,cAAc,EAAA,EAUjB;;ANrHD;EM6FF;IAkBM,cAAc,EAAA,EAMjB;;ANrHD;EM6FF;IAsBM,cAAc,EAAA,EAEjB;;AAxBH;EA2BI,yBR9HkC;EQ+HlC,YR5HyB,EAAA;;ASV7B;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,eAAe,EAAA;;ACJjB;EACE,aAAa,EAAA;;AAGf;EACE,aAAa;EACb,sBAAsB,EAAA;EROtB;IQTF;MAKI,aAAa;MACb,qCAAqC;MACrC,wBAAwB,EAAA,EAM3B;ERJC;IQTF;MAWI,qCAAqC,EAAA,EAExC","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n/**************************************/\r\n/************* Custom css *************/\r\n/**************************************/\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  line-height: 1.6rem;\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 1.6rem;\r\n  color: $primary-color-text;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  font-weight: 400;\r\n  line-height: 4.6rem;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nimg,\r\nvideo {\r\n  max-width: 100%;\r\n  height: auto;\r\n  object-fit: cover;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n// Data attribute for different categories\r\n[data-cat=ingredients] {\r\n  background-color: $primary-color;\r\n  color: white;\r\n}\r\n\r\n[data-cat=appliances] {\r\n  background-color: $secondary-color;\r\n  color: white;\r\n}\r\n\r\n[data-cat=ustensils] {\r\n  background-color: $tertiary-color;\r\n  color: white;\r\n}\r\n","@import \"./_utils/variables\";\r\n@import \"./_base/base\";\r\n@import \"./_utils/mixins\";\r\n@import \"./_utils/classes\";\r\n@import \"./_components/tag-selected\";\r\n@import \"./_components/recipe-card\";\r\n@import \"./_components/search-bar\";\r\n@import \"./_components/select\";\r\n@import \"./_layout/header\";\r\n@import \"./_layout/tags-selection-container\";\r\n@import \"./_layout/tags-selected-container\";\r\n@import \"./_pages/index\";","// Color variables\r\n\r\n$primary-color: hsl(216, 92%, 58%);\r\n$secondary-color: hsl(152, 60%, 63%);\r\n$tertiary-color: hsl(6, 81%, 63%);\r\n$primary-dark-color: hsl(216, 65%, 40%);\r\n$secondary-dark-color: hsl(152, 60%, 45%);\r\n$tertiary-dark-color: hsl(6, 81%, 45%);\r\n$grey-color: hsl(0, 7%, 76%);\r\n$grey-light-color: hsl(0, 0%, 91%);\r\n$body-color: hsl(0, 0%, 100%);\r\n$primary-color-text: hsl(0, 0%, 0%);\r\n$radius: .5rem;",".none {\r\n  display: none;\r\n}\r\n\r\n.block {\r\n  display: block;\r\n}\r\n\r\n.flex {\r\n  display: flex!important;\r\n}\r\n\r\n.grid {\r\n  display: grid!important;\r\n}\r\n\r\n.opacity-50 {\r\n  opacity: .5;\r\n}\r\n\r\n//Class for text screen readers\r\n.sr-only {\r\n  border: 0 !important;\r\n  clip: rect(1px, 1px, 1px, 1px) !important;\r\n  -webkit-clip-path: inset(50%) !important;\r\n          clip-path: inset(50%) !important;\r\n  height: 1px !important;\r\n  margin: -1px !important;\r\n  overflow: hidden !important;\r\n  padding: 0 !important;\r\n  position: absolute !important;\r\n  width: 1px !important;\r\n  white-space: nowrap !important;\r\n}\r\n\r\n// Custom wrapper for control data in selects\r\n.wrapper {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n@include breakpoint(sm) {\r\n  .wrapper {\r\n    max-width: 540px;\r\n  }\r\n}\r\n\r\n@include breakpoint(md) {\r\n  .wrapper {\r\n    max-width: 740px;\r\n  }\r\n}\r\n\r\n@include breakpoint(lg) {\r\n  .wrapper {\r\n    max-width: 960px;\r\n  }\r\n}\r\n\r\n@include breakpoint(xl) {\r\n  .wrapper {\r\n    max-width: 1140px;\r\n  }\r\n}\r\n\r\n@include breakpoint(xxl) {\r\n  .wrapper {\r\n    max-width: 1400px;\r\n  }\r\n}\r\n\r\n\r\n","// Breakpoints\r\n\r\n$breakpoints: (\r\n  'xs': 400px,\r\n  'sm': 576px,\r\n  'md': 768px,\r\n  'lg': 991px,\r\n  'xl': 1200px,\r\n  'xxl': 1440px\r\n);\r\n\r\n// Use ex: @include breakpoint(md) { ... }\r\n@mixin breakpoint($breakpoint) {\r\n  @media (min-width: map-get($breakpoints, $breakpoint)) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin hide-text {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}",".tag-selected {\r\n  align-items: center;\r\n  margin: 0 15px 0 0;\r\n  padding: 0 10px;\r\n  min-width: fit-content;\r\n  height: 35px;\r\n  border-radius: $radius;\r\n  border: none;\r\n\r\n  .icon-close {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    margin: 0 0 0 15px;\r\n    padding: 0 10px 0 0;\r\n    transition: all .15s ease-in;\r\n\r\n    &::before {\r\n      position: absolute;\r\n      content: \"\";\r\n      width: 12px;\r\n      height: 12px;\r\n      border-radius: 35px;\r\n      background-color: transparent;\r\n      border: solid 2px white;\r\n  \r\n      @include breakpoint(lg) {\r\n        border: solid 3px white;\r\n      }\r\n    }\r\n  \r\n    &::after {\r\n      position: absolute;\r\n      content: \"\\002716\";\r\n      font-size: 9px;\r\n      color: $body-color;\r\n  \r\n      @include breakpoint(lg) {\r\n        font-weight: 700;\r\n      }\r\n    }\r\n  }\r\n\r\n  &:hover {\r\n    .icon-close {\r\n      &:before {\r\n        background-color: $body-color;\r\n      }\r\n\r\n      &:after {\r\n        color: $primary-color-text;\r\n      }\r\n    }\r\n  }\r\n\r\n  &[data-cat=ingredients]:hover {\r\n    background-color: $primary-dark-color;\r\n  }\r\n  \r\n  &[data-cat=appliances]:hover {\r\n    background-color: $secondary-dark-color;\r\n  }\r\n  \r\n  &[data-cat=ustensils]:hover {\r\n    background-color: $tertiary-dark-color;\r\n  }\r\n}",".recipe-card {\r\n  margin: 1.5rem;\r\n  border-radius: $radius;\r\n  background-color: $grey-light-color;\r\n\r\n  a {\r\n    color: $primary-color-text;\r\n  }\r\n\r\n  &__img {\r\n    height: 15rem;\r\n    border-radius: $radius $radius 0 0;\r\n    background-color: $grey-color;\r\n  }\r\n\r\n  &__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 15px;\r\n  \r\n    h2 {\r\n      display: flex;\r\n      flex-direction: column;\r\n      margin: 0;\r\n      font-size: 2.2rem;\r\n      font-weight: 700;\r\n\r\n      @include breakpoint(xs) {\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n      }\r\n\r\n      @include breakpoint(xl) {\r\n        font-size: 1.8rem;\r\n      }\r\n\r\n      @include breakpoint(xxl) {\r\n        font-size: 2.2rem;\r\n      }\r\n\r\n      .recipe-card__content__title {\r\n        max-width: 255px;\r\n        font-weight: 400;\r\n        @include hide-text;\r\n\r\n        @include breakpoint(xl) {\r\n          max-width: 230px;\r\n        }\r\n  \r\n        @include breakpoint(xxl) {\r\n          max-width: 255px;\r\n        }\r\n      }\r\n\r\n      .timer-icon {\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 9px;\r\n        background-image: url(\"../img/timer.svg\");\r\n        background-position: center;\r\n        background-repeat: no-repeat;\r\n        background-size: 25px 25px;\r\n        width: 35px;\r\n        height: 35px;\r\n      }\r\n    }\r\n  \r\n    &__description {\r\n      display: flex;\r\n      flex-direction: column;\r\n\r\n      @include breakpoint(xs) {\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        gap: 25px;\r\n      }\r\n    }\r\n  \r\n    ul {\r\n      width: 50%;\r\n      line-height: 2.2rem;\r\n    }\r\n  \r\n    p {\r\n      display: -webkit-box;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-line-clamp: 10;\r\n      overflow: hidden;\r\n      width: 100%;\r\n      line-height: 2rem;\r\n\r\n      @include breakpoint(xs) {\r\n        width: 50%;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".form-search-bar {\r\n  position: relative;\r\n  margin: 15px 0 0 0;\r\n  padding: 0 15px;\r\n\r\n  input[type=text] {\r\n    width: 100%;\r\n    padding: 20px;\r\n    margin: 0 0 15px 0;\r\n    display: inline-block;\r\n    font-size: 1.2rem;\r\n    border: 1px solid $grey-light-color;\r\n    background-color: $grey-light-color;\r\n    border-radius: $radius;\r\n    box-sizing: border-box;\r\n\r\n    @include breakpoint(lg) {\r\n      font-size: 1.4rem;\r\n    }\r\n\r\n    @include breakpoint(xl) {\r\n      font-size: 1.6rem;\r\n    }\r\n\r\n    &::placeholder {\r\n      opacity: .6;\r\n    }\r\n  }\r\n\r\n  .search-icon {\r\n    position: absolute;\r\n    background-image: url(\"../img/search.svg\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 28px 28px;\r\n    width: 35px;\r\n    height: 67%;\r\n    top: 5px;\r\n    right: 35px;\r\n    opacity: 0.7;\r\n  }\r\n}",".select {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin: 20px 0 0 0;\r\n  border-radius: $radius;\r\n  cursor: pointer;\r\n  transition: width .1s ease-in;\r\n\r\n  &:first-child {\r\n    margin: 0;\r\n\r\n    @include breakpoint(sm) {\r\n      margin: 0 20px 0 0;\r\n    }\r\n  }\r\n\r\n  &:last-child {\r\n\r\n    @include breakpoint(sm) {\r\n      margin: 0;\r\n    }\r\n  }\r\n\r\n  @include breakpoint(sm) {\r\n    margin: 0 20px 0 0;\r\n    width: 170px;\r\n  }\r\n\r\n  input[type=text] {\r\n    padding: 18px 10px 18px 15px;\r\n    width: 85%;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    color: $body-color;\r\n    outline: none;\r\n    border-radius: $radius;\r\n    cursor: pointer;\r\n\r\n    @include breakpoint(sm) {\r\n      width: 60%;\r\n    }\r\n\r\n    @include breakpoint(lg) {\r\n      font-size: 14px;\r\n    }\r\n\r\n    @include breakpoint(xl) {\r\n      font-size: 16px;\r\n    }\r\n\r\n    &::placeholder {\r\n      font-weight: 700;\r\n      color: $body-color;\r\n      \r\n      &:focus,\r\n      &:active {\r\n        opacity: 0.5;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__tag {\r\n    position: relative;\r\n    margin: 0 4px 0 0;\r\n    height: 50px;\r\n    width: 30px;\r\n    border: none;\r\n    background-color: transparent;\r\n\r\n    @include breakpoint(sm) {\r\n      height: 100%;\r\n    }\r\n\r\n    &:before {\r\n      position: absolute;\r\n      content: \"\";\r\n      right: 14px;\r\n      width: 12px;\r\n      height: 3px;\r\n      transform: rotate(-130deg);\r\n      border-radius: $radius;\r\n      background-color: $body-color;\r\n      transition: transform .2s ease-in;\r\n    }\r\n\r\n    &:after {\r\n      position: absolute;\r\n      content: \"\";\r\n      right: 7px;\r\n      width: 12px;\r\n      height: 3px;\r\n      transform: rotate(130deg);\r\n      border-radius: $radius;\r\n      background-color: $body-color;\r\n      transition: transform .2s ease-in-out;\r\n    }\r\n\r\n    &--selected {\r\n      &:before {\r\n        position: absolute;\r\n        content: \"\";\r\n        right: 14px;\r\n        width: 12px;\r\n        height: 3px;\r\n        transform: rotate(-45deg);\r\n        border-radius: $radius;\r\n        background-color: $body-color;\r\n        transition: transform .2s ease-in;\r\n      }\r\n  \r\n      &:after {\r\n        position: absolute;\r\n        content: \"\";\r\n        right: 7px;\r\n        width: 12px;\r\n        height: 3px;\r\n        transform: rotate(45deg);\r\n        border-radius: $radius;\r\n        background-color: $body-color;\r\n        transition: transform .2s ease-in;\r\n      }\r\n    }\r\n  }\r\n\r\n  .fas {\r\n    color: $body-color;\r\n  }\r\n\r\n  &--ingredients {\r\n    background-color: $primary-color;\r\n\r\n    input[type=text] {\r\n      border: 1px solid $primary-color;\r\n      background-color: $primary-color;\r\n      color: $body-color;\r\n\r\n      &:hover {\r\n        background-color: $primary-dark-color;\r\n      }\r\n    }\r\n\r\n    &--open {\r\n      flex: 1;\r\n      transition: flex .06s ease-in-out;\r\n\r\n      @include breakpoint(sm) {\r\n        flex: auto;\r\n      }\r\n\r\n      &:hover {\r\n        background-color: $primary-color!important;\r\n\r\n        input[type=text] {\r\n          background-color: $primary-color!important;\r\n          border-color: $primary-color!important;\r\n        }\r\n      }\r\n    }\r\n\r\n    &:hover {\r\n      background-color: $primary-dark-color;\r\n\r\n      input[type=text] {\r\n        background-color: $primary-dark-color;\r\n        border-color: $primary-dark-color;\r\n      }\r\n    }\r\n  }\r\n\r\n  &--appliances {\r\n    background-color: $secondary-color;\r\n\r\n    input[type=text] {\r\n      border: 1px solid $secondary-color;\r\n      background-color: $secondary-color;\r\n      color: $body-color;\r\n\r\n      &:hover {\r\n        background-color: $secondary-dark-color;\r\n      }\r\n    }\r\n\r\n    &--open {\r\n      flex: 0.5;\r\n      transition: flex .06s ease-in-out;\r\n\r\n      @include breakpoint(sm) {\r\n        flex: auto;\r\n      }\r\n\r\n      @include breakpoint(lg) {\r\n        flex: 0.5;\r\n      }\r\n\r\n      &:hover {\r\n        background-color: $secondary-color!important;\r\n\r\n        input[type=text] {\r\n          background-color: $secondary-color!important;\r\n          border-color: $secondary-color!important;\r\n        }\r\n      }\r\n    }\r\n\r\n    &:hover {\r\n      background-color: $secondary-dark-color;\r\n\r\n      input[type=text] {\r\n        background-color: $secondary-dark-color;\r\n        border-color: $secondary-dark-color;\r\n      }\r\n    }\r\n  }\r\n\r\n  &--ustensils {\r\n    background-color: $tertiary-color;\r\n\r\n    input[type=text] {\r\n      border: 1px solid $tertiary-color;\r\n      background-color: $tertiary-color;\r\n      color: $body-color;\r\n\r\n      &:hover {\r\n        background-color: $tertiary-dark-color;\r\n      }\r\n    }\r\n\r\n    &--open {\r\n      flex: 1;\r\n      transition: flex .06s ease-in-out;\r\n\r\n      @include breakpoint(sm) {\r\n        flex: auto;\r\n      }\r\n\r\n      &:hover {\r\n        background-color: $tertiary-color!important;\r\n        \r\n        input[type=text] {\r\n          background-color: $tertiary-color!important;\r\n          border-color: $tertiary-color!important;\r\n        }\r\n      }\r\n    }\r\n\r\n    &:hover {\r\n      background-color: $tertiary-dark-color;\r\n\r\n      input[type=text] {\r\n        background-color: $tertiary-dark-color;\r\n        border-color: $tertiary-dark-color;\r\n      }\r\n    }\r\n  }\r\n}","header {\r\n  text-align: center;\r\n  padding: 15px;\r\n\r\n  .lpp_logo {\r\n    width: 200px;\r\n\r\n    @include breakpoint(xl) {\r\n      width: 320px;\r\n    }\r\n  }\r\n}",".tags-selection-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 15px;\r\n\r\n  @include breakpoint(sm) {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n.select__tags-list {\r\n  position: absolute;\r\n  display: none;\r\n  z-index: 10;\r\n  padding: 5px 0;\r\n  top: 27px;\r\n  max-height: 348px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  border-radius: $radius;\r\n\r\n  @include breakpoint(md) {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  @include breakpoint(lg) {\r\n    column-gap: 10px;\r\n    max-height: 284px;\r\n  }\r\n\r\n  .tag {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    padding: 8px 8px 8px 15px;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n\r\n    &::first-letter {\r\n      text-transform: uppercase;\r\n    }\r\n\r\n    &--message-empty {\r\n      font-weight: 400;\r\n      opacity: .5;\r\n      cursor: default;\r\n\r\n      &:hover {\r\n        background-color: transparent;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.select__tags-list--ingredients {\r\n\r\n  @include breakpoint(lg) {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  @include breakpoint(xl) {\r\n    grid-template-columns: repeat(5, 1fr);\r\n    max-height: 187px;\r\n  }\r\n\r\n  li {\r\n\r\n    @include breakpoint(sm) {\r\n      max-width: 86%;\r\n    }\r\n\r\n    @include breakpoint(lg) {\r\n      max-width: 87%;\r\n    }\r\n  }\r\n\r\n  li:hover {\r\n    background-color: $primary-dark-color;\r\n    color: $body-color;\r\n  }\r\n}\r\n\r\n.select__tags-list--appliances {\r\n\r\n  @include breakpoint(md) {\r\n    max-height: 188px;\r\n  }\r\n\r\n  li {\r\n\r\n    @include breakpoint(sm) {\r\n      max-width: 86%;\r\n    }\r\n\r\n    @include breakpoint(lg) {\r\n      max-width: 100%;\r\n    }\r\n  }\r\n\r\n  li:hover {\r\n    background-color: $secondary-dark-color;\r\n    color: $body-color;\r\n  }\r\n}\r\n\r\n.select__tags-list--ustensils {\r\n\r\n  @include breakpoint(lg) {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  @include breakpoint(xl) {\r\n    grid-template-columns: repeat(4, 1fr);\r\n    max-height: 187px;\r\n  }\r\n\r\n  li {\r\n\r\n    @include breakpoint(sm) {\r\n      max-width: 86%;\r\n    }\r\n\r\n    @include breakpoint(lg) {\r\n      max-width: 87%;\r\n    }\r\n\r\n    @include breakpoint(lg) {\r\n      max-width: 90%;\r\n    }\r\n  }\r\n\r\n  li:hover {\r\n    background-color: $tertiary-dark-color;\r\n    color: $body-color;\r\n  }\r\n}",".tags-selected-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  row-gap: 15px;\r\n  padding: 0 15px;\r\n}",".info-message-container {\r\n  padding: 15px;\r\n}\r\n\r\n.recipes-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  @include breakpoint(lg) {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  @include breakpoint(xl) {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/img/search.svg":
/*!****************************!*\
  !*** ./src/img/search.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("../img/search.svg");

/***/ }),

/***/ "./src/img/timer.svg":
/*!***************************!*\
  !*** ./src/img/timer.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("../img/timer.svg");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _recipesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipesList */ "./src/js/recipesList.js");
/* harmony import */ var _mainSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainSearch */ "./src/js/mainSearch.js");
/* harmony import */ var _handleSelects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleSelects */ "./src/js/handleSelects.js");
/* harmony import */ var _categoriesList_ingredientsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoriesList/ingredientsList */ "./src/js/categoriesList/ingredientsList.js");
/* harmony import */ var _categoriesList_appliancesList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoriesList/appliancesList */ "./src/js/categoriesList/appliancesList.js");
/* harmony import */ var _categoriesList_ustensilsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categoriesList/ustensilsList */ "./src/js/categoriesList/ustensilsList.js");
/* harmony import */ var _handleTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./handleTags */ "./src/js/handleTags.js");









(0,_recipesList__WEBPACK_IMPORTED_MODULE_2__.createDOMRecipesList)(_data__WEBPACK_IMPORTED_MODULE_1__.recipes);
(0,_mainSearch__WEBPACK_IMPORTED_MODULE_3__.updateRecipesList)(_data__WEBPACK_IMPORTED_MODULE_1__.recipes);
(0,_categoriesList_ingredientsList__WEBPACK_IMPORTED_MODULE_5__.handleIngredientTagsList)(_data__WEBPACK_IMPORTED_MODULE_1__.recipes);
(0,_categoriesList_appliancesList__WEBPACK_IMPORTED_MODULE_6__.handleApplianceTagsList)(_data__WEBPACK_IMPORTED_MODULE_1__.recipes);
(0,_categoriesList_ustensilsList__WEBPACK_IMPORTED_MODULE_7__.handleUstensilTagsList)(_data__WEBPACK_IMPORTED_MODULE_1__.recipes);
(0,_categoriesList_ingredientsList__WEBPACK_IMPORTED_MODULE_5__.updateIngredientsList)(_data__WEBPACK_IMPORTED_MODULE_1__.recipes);
(0,_categoriesList_appliancesList__WEBPACK_IMPORTED_MODULE_6__.updateAppliancesList)(_data__WEBPACK_IMPORTED_MODULE_1__.recipes);
(0,_categoriesList_ustensilsList__WEBPACK_IMPORTED_MODULE_7__.updateUstensilsList)(_data__WEBPACK_IMPORTED_MODULE_1__.recipes);
(0,_handleTags__WEBPACK_IMPORTED_MODULE_8__.removeSelectedTags)(_data__WEBPACK_IMPORTED_MODULE_1__.recipes);
(0,_handleSelects__WEBPACK_IMPORTED_MODULE_4__.handleAllSelects)();
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map