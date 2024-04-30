"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_BI_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/BI.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/BI.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BI",
  components: {},
  setup: function setup() {
    var biLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var loadingData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var biSamples = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      'name': 'postgres_rds_test',
      'link': 'http://pbie.150.230.12.8.nip.io/Reports/ShowReport?userName=User1&reportId=b17cd858-cdb5-4f68-8dec-67715d20be11&workspaceId=a9b29c9f-dbdb-41ba-89cf-5573957878c2'
    }, {
      'name': 'Sales Analyst',
      'link': 'http://pbie.150.230.12.8.nip.io/Reports/ShowReport?userName=User1&reportId=d4cc6fb8-53bb-482e-a42d-d29c1f7b5cf2&workspaceId=a9b29c9f-dbdb-41ba-89cf-5573957878c2'
    }, {
      'name': 'Customer Profitability Sample',
      'link': 'http://pbie.150.230.12.8.nip.io/Reports/ShowReport?userName=User1&reportId=49eecdea-5f5a-4f40-84b7-4af96febf097&workspaceId=2275c1e3-c0ba-4ecb-a201-32f65f282c4f'
    }]);

    var selectSample = function selectSample(link, e) {
      e.preventDefault();
      loadingData.value = true;
      biLink.value = link;
    };

    var biLoaded = function biLoaded(e) {
      loadingData.value = false;
    };

    return {
      biSamples: biSamples,
      biLink: biLink,
      selectSample: selectSample,
      biLoaded: biLoaded,
      loadingData: loadingData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/BI.vue?vue&type=template&id=1e211606":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/BI.vue?vue&type=template&id=1e211606 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



var _hoisted_1 = {
  "class": "list-disc ml-9"
};
var _hoisted_2 = ["onClick"];
var _hoisted_3 = {
  key: 0,
  "class": "w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", {
  "class": "flex items-center justify-center relative top-1/2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", {
  "class": "w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"
})], -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  key: 2,
  "class": "mb-9"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("ul", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)($setup.biSamples, function (biSample) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
      "class": "underline",
      href: "#",
      onClick: function onClick($event) {
        return $setup.selectSample(biSample.link, $event);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(biSample.name), 9
    /* TEXT, PROPS */
    , _hoisted_2)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), $setup.loadingData ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", _hoisted_3, _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true), $setup.biLink ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("iframe", {
    key: 1,
    width: "100%",
    height: "700px",
    src: $setup.biLink,
    onLoad: _cache[0] || (_cache[0] = function () {
      return $setup.biLoaded && $setup.biLoaded.apply($setup, arguments);
    })
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_6)) : ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", _hoisted_7))], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "./resources/js/views/BI.vue":
/*!***********************************!*\
  !*** ./resources/js/views/BI.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BI_vue_vue_type_template_id_1e211606__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BI.vue?vue&type=template&id=1e211606 */ "./resources/js/views/BI.vue?vue&type=template&id=1e211606");
/* harmony import */ var _BI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BI.vue?vue&type=script&lang=js */ "./resources/js/views/BI.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_linlin_git_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_linlin_git_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BI_vue_vue_type_template_id_1e211606__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/BI.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/views/BI.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./resources/js/views/BI.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BI.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/BI.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/BI.vue?vue&type=template&id=1e211606":
/*!*****************************************************************!*\
  !*** ./resources/js/views/BI.vue?vue&type=template&id=1e211606 ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BI_vue_vue_type_template_id_1e211606__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BI_vue_vue_type_template_id_1e211606__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BI.vue?vue&type=template&id=1e211606 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/BI.vue?vue&type=template&id=1e211606");


/***/ })

}]);