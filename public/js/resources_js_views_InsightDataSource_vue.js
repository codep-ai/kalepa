"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_InsightDataSource_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/InsightDataSource.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/InsightDataSource.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_MainSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MainSection */ "./resources/js/components/MainSection.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InsightDataSource',
  components: {
    MainSection: _components_MainSection__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    console.log(_router__WEBPACK_IMPORTED_MODULE_2__["default"].params);
    var dataSources = [{
      id: 1,
      label: 'kc_house_data.csv',
      description: 'House data description'
    }];
    var selectedDataSource = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    selectedDataSource.value = '';
    var showNotice = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var changeOption = function changeOption() {
      if (selectedDataSource.value) {
        showNotice.value = false;
      }
    };
    var nextStep = function nextStep(e) {
      e.preventDefault();
      console.log('testing', selectedDataSource.value);
      if (!selectedDataSource.value) {
        showNotice.value = true;
      } else {
        showNotice.value = false;
        kalepa.appData.selectedDataSource = selectedDataSource.value;
        _router__WEBPACK_IMPORTED_MODULE_2__["default"].push({
          path: "/insight/datasource/select_data"
        });
      }
    };
    return {
      dataSources: dataSources,
      selectedDataSource: selectedDataSource,
      showNotice: showNotice,
      nextStep: nextStep,
      changeOption: changeOption
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/InsightDataSource.vue?vue&type=template&id=4160a88e":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/InsightDataSource.vue?vue&type=template&id=4160a88e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "relative"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Please select a data source"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("source")], -1 /* HOISTED */);
var _hoisted_3 = ["value"];
var _hoisted_4 = {
  "class": "h-12 px-3"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "px-2"
}, "Continue", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_main_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("main-section");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_main_section, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["block font-bold mb-2", {
          'text-red-500': $setup.showNotice
        }])
      }, "Select Data Source", 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "class": "px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-gray-800",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.selectedDataSource = $event;
        }),
        onChange: _cache[1] || (_cache[1] = function () {
          return $setup.changeOption && $setup.changeOption.apply($setup, arguments);
        })
      }, [_hoisted_2, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.dataSources, function (option) {
        var _option$id, _option$label;
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: (_option$id = option.id) !== null && _option$id !== void 0 ? _option$id : option,
          value: option
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_option$label = option.label) !== null && _option$label !== void 0 ? _option$label : option), 9 /* TEXT, PROPS */, _hoisted_3);
      }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selectedDataSource]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.selectedDataSource.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3",
        type: "submit",
        onClick: _cache[2] || (_cache[2] = function () {
          return $setup.nextStep && $setup.nextStep.apply($setup, arguments);
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if"), _hoisted_5])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/views/InsightDataSource.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/InsightDataSource.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InsightDataSource_vue_vue_type_template_id_4160a88e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightDataSource.vue?vue&type=template&id=4160a88e */ "./resources/js/views/InsightDataSource.vue?vue&type=template&id=4160a88e");
/* harmony import */ var _InsightDataSource_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsightDataSource.vue?vue&type=script&lang=js */ "./resources/js/views/InsightDataSource.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InsightDataSource_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InsightDataSource_vue_vue_type_template_id_4160a88e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/InsightDataSource.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/views/InsightDataSource.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/views/InsightDataSource.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InsightDataSource_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InsightDataSource_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InsightDataSource.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/InsightDataSource.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/InsightDataSource.vue?vue&type=template&id=4160a88e":
/*!********************************************************************************!*\
  !*** ./resources/js/views/InsightDataSource.vue?vue&type=template&id=4160a88e ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InsightDataSource_vue_vue_type_template_id_4160a88e__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InsightDataSource_vue_vue_type_template_id_4160a88e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InsightDataSource.vue?vue&type=template&id=4160a88e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/InsightDataSource.vue?vue&type=template&id=4160a88e");


/***/ })

}]);