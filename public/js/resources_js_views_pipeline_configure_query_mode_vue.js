"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pipeline_configure_query_mode_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pipeline/configure_query_mode.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pipeline/configure_query_mode.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Charts_chart_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/chart.config */ "./resources/js/components/Charts/chart.config.js");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ModalBox */ "./resources/js/components/ModalBox.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/router */ "./resources/js/router/index.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _vue_compiler_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/compiler-core */ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js");
// @ is an alias to /src










/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Query Mode",
  components: {
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_2__["default"],
    ModalBox: _components_ModalBox__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  setup: function setup() {
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.useRoute)();
    // source = mssql
    var source = route.query.source;
    // mode = table
    var mode = route.query.mode;
    var queryModes = [{
      'label': 'Full Load',
      'name': 'full_load',
      'description': 'Attempts to replicate the full table in a single run.'
    }, {
      'label': 'Delta - timestamp',
      'name': 'delta',
      'description': 'Maintains the job position using a Timestamp column. The column should not have nulls and must be updated every time a row is added or updated'
    }, {
      'label': 'Change Data Capture',
      'name': 'change_data_capture',
      'description': 'Maintains the job position using a Timestamp & incrementing column. The timestamp column can have nulls but, must be updated every time a row is updated'
    }, {
      'label': 'Unique Incrementing Append Only',
      'name': 'increment_append_only',
      'description': 'Maintains the job position using an incrementing column value. Does not capture row updates. The columns must not contain any null values'
    }, {
      'label': 'Change Tracking',
      'name': 'change_tracking',
      'description': 'Uses the Change Tracking information to replicate all row additions and updates'
    }];
    try {
      var dbObjects = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
      kalepa.appData.pipeline.dbObjects.forEach(function (dbObject) {
        if (dbObject.checked) {
          dbObjects.value.push(dbObject);
        }
      });
      var getRowClass = function getRowClass(index) {
        if ((index + 1) % 2 == 1) {
          return 'bg-blue-100';
        }
        return '';
      };
      return {
        queryModes: queryModes,
        dbObjects: dbObjects,
        getRowClass: getRowClass
      };
    } catch (e) {
      _router__WEBPACK_IMPORTED_MODULE_4__["default"].push({
        path: "/pipeline/configure",
        query: {
          'source': source,
          'mode': mode
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pipeline/configure_query_mode.vue?vue&type=template&id=4b918a91":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pipeline/configure_query_mode.vue?vue&type=template&id=4b918a91 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "justify-center items-center pt-16",
  style: {
    "max-width": "1200px",
    "margin": "auto"
  }
};
var _hoisted_2 = {
  "class": "grid grid-cols-5 gap-3"
};
var _hoisted_3 = {
  "class": "col-span-3"
};
var _hoisted_4 = {
  "class": "col-span-2 pt-1"
};
var _hoisted_5 = {
  "class": "w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
};
var _hoisted_6 = ["value"];
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-4 h-4 fill-current",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd",
  "fill-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "bg-gray-100 col-span-2 pb-5"
};
var _hoisted_9 = {
  "class": "mt-5 pl-3 pr-3"
};
var _hoisted_10 = {
  "class": "mt-5 inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3",
  type: "submit"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.dbObjects, function (dbObject, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["grid grid-cols-3", _ctx.getRowClass(index)]),
      style: {
        "padding": "25px 15px 25px 15px"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dbObject.TABLE_NAME), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.queryModes, function (queryMode) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
        value: queryMode.name
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(queryMode.label), 9 /* TEXT, PROPS */, _hoisted_6);
    }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_7])], 2 /* CLASS */);
  }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.queryModes, function (queryMode) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(queryMode.label), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(queryMode.description), 1 /* TEXT */)]);
  }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "px-2",
    onClick: _cache[0] || (_cache[0] = function () {})
  }, "Continue")])]);
}

/***/ }),

/***/ "./resources/js/views/pipeline/configure_query_mode.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/pipeline/configure_query_mode.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configure_query_mode_vue_vue_type_template_id_4b918a91__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configure_query_mode.vue?vue&type=template&id=4b918a91 */ "./resources/js/views/pipeline/configure_query_mode.vue?vue&type=template&id=4b918a91");
/* harmony import */ var _configure_query_mode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configure_query_mode.vue?vue&type=script&lang=js */ "./resources/js/views/pipeline/configure_query_mode.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_configure_query_mode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_configure_query_mode_vue_vue_type_template_id_4b918a91__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/pipeline/configure_query_mode.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/views/pipeline/configure_query_mode.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pipeline/configure_query_mode.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_configure_query_mode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_configure_query_mode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./configure_query_mode.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pipeline/configure_query_mode.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/pipeline/configure_query_mode.vue?vue&type=template&id=4b918a91":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/pipeline/configure_query_mode.vue?vue&type=template&id=4b918a91 ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_configure_query_mode_vue_vue_type_template_id_4b918a91__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_configure_query_mode_vue_vue_type_template_id_4b918a91__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./configure_query_mode.vue?vue&type=template&id=4b918a91 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pipeline/configure_query_mode.vue?vue&type=template&id=4b918a91");


/***/ })

}]);