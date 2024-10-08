"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_SelectData_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SelectData.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SelectData.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_MainSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MainSection */ "./resources/js/components/MainSection.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SelectData',
  components: {
    MainSection: _components_MainSection__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRoute)();
    var id = 1;
    var loadingData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    // todo: pass parameters to server
    kalepa.appData.datasource = {};
    var sourceData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      header: [],
      content: []
    });
    if (!kalepa.appData.datasource.preview) {
      loadingData.value = true;
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(kalepa.appData.routes.datasource.preview, {
        params: {}
      }).then(function (response) {
        kalepa.appData.datasource.preview = response.data;
        response.data.header.forEach(function (element, index) {
          var headerObject = {
            'name': element,
            'checked': true,
            'index': index
          };
          console.log('push ', headerObject);
          sourceData.value.header.push(headerObject);
        });
        sourceData.value.content = response.data.content;
        loadingData.value = false;
      });
      //console.log('store', store.state.connections);
    }
    var searchQuery = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var resultQuery = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (searchQuery.value) {
        return sourceData.value.header.filter(function (item) {
          return searchQuery.value.toLowerCase().split(" ").every(function (v) {
            return item.name.toLowerCase().includes(v);
          });
        });
      } else {
        return sourceData.value.header;
      }
    });
    var confirmSelectedHeader = function confirmSelectedHeader() {
      var selectedHeaderIndex = [];
      var selectedHeader = [];
      sourceData.value.header.forEach(function (header) {
        if (header.checked) {
          selectedHeaderIndex.push(header.index);
          selectedHeader.push(header.name);
        }
      });
      var previewData = [];
      sourceData.value.content.forEach(function (row) {
        var rowData = [];
        row.forEach(function (column, index) {
          if (selectedHeaderIndex.includes(index)) {
            rowData.push(column);
          }
        });
        previewData.push(rowData);
      });
      kalepa.appData.insight.selectedPreviewData = previewData;
      kalepa.appData.insight.selectedPreviewDataHeader = selectedHeader;
      _router__WEBPACK_IMPORTED_MODULE_2__["default"].push({
        path: "/insight/datasource/preview_data"
      });
    };
    return {
      sourceData: sourceData,
      loadingData: loadingData,
      searchQuery: searchQuery,
      resultQuery: resultQuery,
      confirmSelectedHeader: confirmSelectedHeader
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SelectData.vue?vue&type=template&id=6d20b3b6":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SelectData.vue?vue&type=template&id=6d20b3b6 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "w-full md:w-2/3 p-5 bg-white"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "my-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Select data")], -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "relative"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "absolute flex items-center ml-2 h-full"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-4 h-4 fill-current text-primary-gray-dark",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"
})])], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "bg-white shadow-xl h-96 overflow-y-scroll"
};
var _hoisted_6 = {
  "class": "divide-y divide-gray-300"
};
var _hoisted_7 = {
  "class": "p-4 hover:bg-gray-50 cursor-pointer"
};
var _hoisted_8 = ["id", "value", "onUpdate:modelValue"];
var _hoisted_9 = ["for"];
var _hoisted_10 = {
  "class": "mt-5 inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3",
  type: "submit"
};
var _hoisted_11 = {
  key: 1,
  "class": "w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center justify-center relative top-1/2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"
})], -1 /* HOISTED */);
var _hoisted_13 = [_hoisted_12];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_main_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("main-section");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_main_section, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$setup.sourceData.header.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.searchQuery = $event;
        }),
        type: "text",
        placeholder: "Search by name...",
        "class": "px-8 py-3 w-full bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchQuery]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.resultQuery, function (header, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "checkbox",
          id: 'header-' + index,
          "class": "form-checkbox",
          value: header.name,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return header.checked = $event;
          }
        }, null, 8 /* PROPS */, _hoisted_8), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, header.checked]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          "class": "inline-block pl-2 w-10/12",
          "for": 'header-' + index
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(header.name), 9 /* TEXT, PROPS */, _hoisted_9)]);
      }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "px-2",
        onClick: _cache[1] || (_cache[1] = function () {
          return $setup.confirmSelectedHeader && $setup.confirmSelectedHeader.apply($setup, arguments);
        })
      }, "Confirm")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.loadingData ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/views/SelectData.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/SelectData.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectData_vue_vue_type_template_id_6d20b3b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectData.vue?vue&type=template&id=6d20b3b6 */ "./resources/js/views/SelectData.vue?vue&type=template&id=6d20b3b6");
/* harmony import */ var _SelectData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectData.vue?vue&type=script&lang=js */ "./resources/js/views/SelectData.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SelectData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SelectData_vue_vue_type_template_id_6d20b3b6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/SelectData.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/views/SelectData.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/views/SelectData.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SelectData.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SelectData.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/SelectData.vue?vue&type=template&id=6d20b3b6":
/*!*************************************************************************!*\
  !*** ./resources/js/views/SelectData.vue?vue&type=template&id=6d20b3b6 ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectData_vue_vue_type_template_id_6d20b3b6__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectData_vue_vue_type_template_id_6d20b3b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SelectData.vue?vue&type=template&id=6d20b3b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SelectData.vue?vue&type=template&id=6d20b3b6");


/***/ })

}]);