"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_PreviewData_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PreviewData.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PreviewData.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_MainSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MainSection */ "./resources/js/components/MainSection.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PreviewData',
  components: {
    MainSection: _components_MainSection__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.useRoute)();
    var id = 1;
    var loadingData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false); // todo: pass parameters to server

    var previewData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      header: null,
      content: []
    });

    try {
      previewData.value.header = kalepa.appData.datasource.selectedPreviewDataHeader;
      previewData.value.content = kalepa.appData.datasource.selectedPreviewData;
    } catch (e) {
      console.log('exception', e);
      _router__WEBPACK_IMPORTED_MODULE_2__["default"].push({
        path: "/insight/datasource/select_data"
      });
    }

    var confirmData = function confirmData() {};

    return {
      previewData: previewData,
      confirmData: confirmData,
      loadingData: loadingData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PreviewData.vue?vue&type=template&id=16c1ab7a":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PreviewData.vue?vue&type=template&id=16c1ab7a ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "font-bold mb-2"
}, "Preview Data")], -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "relative"
};
var _hoisted_3 = {
  cellspacing: "0",
  cellpadding: "1",
  border: "1",
  width: "300"
};
var _hoisted_4 = {
  style: {
    "color": "white",
    "background-color": "grey"
  }
};
var _hoisted_5 = {
  "class": ""
};
var _hoisted_6 = {
  style: {
    "width": "100%",
    "height": "380px",
    "overflow": "auto"
  }
};
var _hoisted_7 = {
  cellspacing: "0",
  cellpadding: "1",
  border: "1",
  width: "100%"
};
var _hoisted_8 = {
  "class": "mt-5 inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3",
  type: "submit"
};
var _hoisted_9 = {
  key: 0,
  "class": "w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center justify-center relative top-1/2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"
})], -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_10];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_main_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("main-section");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_main_section, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.previewData.header, function (header, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(header), 1
        /* TEXT */
        );
      }), 256
      /* UNKEYED_FRAGMENT */
      ))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.previewData.content, function (row) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(row, function (column) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(column), 1
          /* TEXT */
          );
        }), 256
        /* UNKEYED_FRAGMENT */
        ))]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "px-2",
        onClick: _cache[0] || (_cache[0] = function () {
          return $setup.confirmData && $setup.confirmData.apply($setup, arguments);
        })
      }, "Confirm")]), $setup.loadingData ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./resources/js/views/PreviewData.vue":
/*!********************************************!*\
  !*** ./resources/js/views/PreviewData.vue ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreviewData_vue_vue_type_template_id_16c1ab7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreviewData.vue?vue&type=template&id=16c1ab7a */ "./resources/js/views/PreviewData.vue?vue&type=template&id=16c1ab7a");
/* harmony import */ var _PreviewData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviewData.vue?vue&type=script&lang=js */ "./resources/js/views/PreviewData.vue?vue&type=script&lang=js");
/* harmony import */ var _mnt_c_Users_hengr_Lab_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_mnt_c_Users_hengr_Lab_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PreviewData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PreviewData_vue_vue_type_template_id_16c1ab7a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/PreviewData.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/views/PreviewData.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/views/PreviewData.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviewData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviewData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreviewData.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PreviewData.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/PreviewData.vue?vue&type=template&id=16c1ab7a":
/*!**************************************************************************!*\
  !*** ./resources/js/views/PreviewData.vue?vue&type=template&id=16c1ab7a ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviewData_vue_vue_type_template_id_16c1ab7a__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviewData_vue_vue_type_template_id_16c1ab7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreviewData.vue?vue&type=template&id=16c1ab7a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PreviewData.vue?vue&type=template&id=16c1ab7a");


/***/ })

}]);