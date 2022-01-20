"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Project_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Project.vue?vue&type=template&id=39c6aa6c":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Project.vue?vue&type=template&id=39c6aa6c ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Tables");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Responsive table.", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Collapses on mobile ");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Tightly wrapped", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" — table header becomes card header ");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Empty table.", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" When there's nothing to show ");

function render(_ctx, _cache) {
  var _component_title_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("title-bar");

  var _component_hero_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hero-bar");

  var _component_notification = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("notification");

  var _component_clients_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("clients-table");

  var _component_card_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card-component");

  var _component_title_sub_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("title-sub-bar");

  var _component_main_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("main-section");

  var _component_bottom_other_pages_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("bottom-other-pages-section");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_title_bar, {
    "title-stack": _ctx.titleStack
  }, null, 8
  /* PROPS */
  , ["title-stack"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hero_bar, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_main_section, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_notification, {
        color: "info",
        icon: _ctx.mdiMonitorCellphone
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_2, _hoisted_3];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card_component, {
        "class": "mb-6",
        title: "Clients",
        icon: _ctx.mdiAccountMultiple,
        "has-table": ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_clients_table, {
            checkable: ""
          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_title_sub_bar, {
        icon: _ctx.mdiTableBorder,
        title: "Wrapped variation"
      }, null, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_notification, {
        color: "success",
        icon: _ctx.mdiTableBorder
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_4, _hoisted_5];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card_component, {
        "class": "mb-6",
        "has-table": ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_clients_table, {
            checkable: ""
          })];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_title_sub_bar, {
        icon: _ctx.mdiTableOff,
        title: "Empty variation"
      }, null, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_notification, {
        color: "danger",
        icon: _ctx.mdiTableOff
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_6, _hoisted_7];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card_component, {
        empty: ""
      })];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_bottom_other_pages_section)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/views/Project.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Project.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project_vue_vue_type_template_id_39c6aa6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.vue?vue&type=template&id=39c6aa6c */ "./resources/js/views/Project.vue?vue&type=template&id=39c6aa6c");
/* harmony import */ var _mnt_c_Users_hengr_Lab_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_mnt_c_Users_hengr_Lab_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Project_vue_vue_type_template_id_39c6aa6c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Project.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/views/Project.vue?vue&type=template&id=39c6aa6c":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Project.vue?vue&type=template&id=39c6aa6c ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Project_vue_vue_type_template_id_39c6aa6c__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Project_vue_vue_type_template_id_39c6aa6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Project.vue?vue&type=template&id=39c6aa6c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Project.vue?vue&type=template&id=39c6aa6c");


/***/ })

}]);