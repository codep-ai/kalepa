"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Dataflow_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataflowTable.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataflowTable.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ModalBox */ "./resources/js/components/ModalBox.vue");
/* harmony import */ var _components_CheckboxCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CheckboxCell */ "./resources/js/components/CheckboxCell.vue");
/* harmony import */ var _components_Level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Level */ "./resources/js/components/Level.vue");
/* harmony import */ var _components_JbButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/JbButtons */ "./resources/js/components/JbButtons.vue");
/* harmony import */ var _components_JbButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/JbButton */ "./resources/js/components/JbButton.vue");
/* harmony import */ var _components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/UserAvatar */ "./resources/js/components/UserAvatar.vue");









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DataflowTable',
  components: {
    ModalBox: _components_ModalBox__WEBPACK_IMPORTED_MODULE_1__["default"],
    CheckboxCell: _components_CheckboxCell__WEBPACK_IMPORTED_MODULE_2__["default"],
    Level: _components_Level__WEBPACK_IMPORTED_MODULE_3__["default"],
    JbButtons: _components_JbButtons__WEBPACK_IMPORTED_MODULE_4__["default"],
    JbButton: _components_JbButton__WEBPACK_IMPORTED_MODULE_5__["default"],
    UserAvatar: _components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    checkable: Boolean,
    dataflowCollection: Array
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_7__.useStore)();
    var darkMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.darkMode;
    });
    var isModalActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isModalDangerActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    return {
      darkMode: darkMode,
      isModalActive: isModalActive,
      isModalDangerActive: isModalDangerActive,
      mdiEye: _mdi_js__WEBPACK_IMPORTED_MODULE_8__.mdiEye,
      mdiTrashCan: _mdi_js__WEBPACK_IMPORTED_MODULE_8__.mdiTrashCan
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Field.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Field.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Field',
  props: {
    label: String,
    help: String
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var wrapperClass = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var base = [];
      var slotsLength = slots["default"]().length;
      if (slotsLength > 1) {
        base.push('grid grid-cols-1 gap-3');
      }
      if (slotsLength === 2) {
        base.push('md:grid-cols-2');
      }
      return base;
    });
    return {
      wrapperClass: wrapperClass
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Dataflow.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Dataflow.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _components_Charts_chart_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/chart.config */ "./resources/js/components/Charts/chart.config.js");
/* harmony import */ var _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Charts/LineChart */ "./resources/js/components/Charts/LineChart.vue");
/* harmony import */ var _components_MainSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MainSection */ "./resources/js/components/MainSection.vue");
/* harmony import */ var _components_TitleBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TitleBar */ "./resources/js/components/TitleBar.vue");
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");
/* harmony import */ var _components_CardWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/CardWidget */ "./resources/js/components/CardWidget.vue");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_DataflowTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/DataflowTable */ "./resources/js/components/DataflowTable.vue");
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Notification */ "./resources/js/components/Notification.vue");
/* harmony import */ var _components_JbButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/JbButtons */ "./resources/js/components/JbButtons.vue");
/* harmony import */ var _components_JbButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/JbButton */ "./resources/js/components/JbButton.vue");
/* harmony import */ var _components_CardTransactionBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/CardTransactionBar */ "./resources/js/components/CardTransactionBar.vue");
/* harmony import */ var _components_CardClientBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/CardClientBar */ "./resources/js/components/CardClientBar.vue");
/* harmony import */ var _components_TitleSubBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/TitleSubBar */ "./resources/js/components/TitleSubBar.vue");
/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/ModalBox */ "./resources/js/components/ModalBox.vue");
/* harmony import */ var _components_Field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/Field */ "./resources/js/components/Field.vue");
/* harmony import */ var _components_Control__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/Control */ "./resources/js/components/Control.vue");
/* harmony import */ var _components_Divider_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/Divider.vue */ "./resources/js/components/Divider.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
// @ is an alias to /src






















/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dataflow",
  components: {
    TitleSubBar: _components_TitleSubBar__WEBPACK_IMPORTED_MODULE_14__["default"],
    MainSection: _components_MainSection__WEBPACK_IMPORTED_MODULE_3__["default"],
    DataflowTable: _components_DataflowTable__WEBPACK_IMPORTED_MODULE_8__["default"],
    LineChart: _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_7__["default"],
    CardWidget: _components_CardWidget__WEBPACK_IMPORTED_MODULE_6__["default"],
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_5__["default"],
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_4__["default"],
    Notification: _components_Notification__WEBPACK_IMPORTED_MODULE_9__["default"],
    JbButtons: _components_JbButtons__WEBPACK_IMPORTED_MODULE_10__["default"],
    JbButton: _components_JbButton__WEBPACK_IMPORTED_MODULE_11__["default"],
    CardTransactionBar: _components_CardTransactionBar__WEBPACK_IMPORTED_MODULE_12__["default"],
    CardClientBar: _components_CardClientBar__WEBPACK_IMPORTED_MODULE_13__["default"],
    ModalBox: _components_ModalBox__WEBPACK_IMPORTED_MODULE_15__["default"],
    Field: _components_Field__WEBPACK_IMPORTED_MODULE_16__["default"],
    Control: _components_Control__WEBPACK_IMPORTED_MODULE_17__["default"],
    Divider: _components_Divider_vue__WEBPACK_IMPORTED_MODULE_18__["default"]
  },
  setup: function setup() {
    var titleStack = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(["Admin", "Dataflow"]);
    var chartData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var fillChartData = function fillChartData() {
      chartData.value = _components_Charts_chart_config__WEBPACK_IMPORTED_MODULE_1__.sampleChartData();
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      fillChartData();
    });
    var nameHelp = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_19__.useStore)();
    var clientBarItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.clients.slice(0, 3);
    });
    var transactionBarItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.history.slice(0, 3);
    });
    var darkMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.darkMode;
    });
    var modalOneActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var showAlert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var dataflow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      name: "",
      description: ""
    });
    if (store.state.dataflows.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_20__["default"].get(kalepa.appData.routes.dataflow.list).then(function (response) {
        // handle success
        if (response.data.dataflows) {
          store.commit('basic', {
            key: 'dataflows',
            value: response.data.dataflows
          });
        }
      })["catch"](function (error) {
        // handle error
        console.log(error);
      });
    }
    var dataflowCollection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.dataflows;
    });
    var createDataflow = function createDataflow(e) {
      // sample code
      if (!dataflow.value.name || dataflow.value.name.trim().length === 0) {
        modalOneActive.value = true;
        showAlert.value = true;
        return;
      }
      showAlert.value = false;
      axios__WEBPACK_IMPORTED_MODULE_20__["default"].post(kalepa.appData.routes.dataflow.create, {
        name: dataflow.value.name,
        description: dataflow.value.description
      }).then(function (response) {
        if (response.data && response.data.dataflow) {
          store.commit('push', {
            key: 'dataflows',
            value: response.data.dataflow
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
      dataflow.value.name = "";
      dataflow.value.description = "";
    };
    return {
      showAlert: showAlert,
      nameHelp: nameHelp,
      dataflow: dataflow,
      dataflowCollection: dataflowCollection,
      createDataflow: createDataflow,
      modalOneActive: modalOneActive,
      titleStack: titleStack,
      chartData: chartData,
      fillChartData: fillChartData,
      clientBarItems: clientBarItems,
      transactionBarItems: transactionBarItems,
      darkMode: darkMode,
      mdiAccountMultiple: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiAccountMultiple,
      mdiCartOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiCartOutline,
      mdiChartTimelineVariant: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiChartTimelineVariant,
      mdiFinance: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiFinance,
      mdiMonitorCellphone: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiMonitorCellphone,
      mdiTransitConnection: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiTransitConnection,
      mdiTransitConnectionVariant: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiTransitConnectionVariant,
      mdiTransitConnectionHorizontal: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiTransitConnectionHorizontal,
      mdiReload: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiReload,
      mdiChartPie: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiChartPie,
      mdiPlusBoxOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiPlusBoxOutline,
      mdiPlus: _mdi_js__WEBPACK_IMPORTED_MODULE_21__.mdiPlus
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataflowTable.vue?vue&type=template&id=c5c2b10a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataflowTable.vue?vue&type=template&id=c5c2b10a ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Dataflow Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Created At"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th")])], -1 /* HOISTED */);
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* HOISTED */);
var _hoisted_3 = {
  "data-label": "DataflowName"
};
var _hoisted_4 = {
  "data-label": "Created"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.dataflowCollection, function (dataflow) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: /project/ + dataflow.id
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dataflow.name), 1 /* TEXT */)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: /project/ + dataflow.id
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dataflow.created_at), 1 /* TEXT */)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]), _hoisted_5]);
  }), 256 /* UNKEYED_FRAGMENT */))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mb-6 last:mb-0"
};
var _hoisted_2 = {
  key: 0,
  "class": "block font-bold mb-2"
};
var _hoisted_3 = {
  key: 1,
  "class": "text-xs text-gray-500 dark:text-gray-400 mt-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$props.label ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.wrapperClass)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2 /* CLASS */), $props.help ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.help), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Dataflow.vue?vue&type=template&id=0f5163f7":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Dataflow.vue?vue&type=template&id=0f5163f7 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
  role: "alert"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "block sm:inline"
}, "Name is required", -1 /* HOISTED */);
var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = {
  "class": "px-0 md:px-6 py-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_control = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("control");
  var _component_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("field");
  var _component_modal_box = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modal-box");
  var _component_title_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("title-bar");
  var _component_jb_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jb-button");
  var _component_jb_buttons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jb-buttons");
  var _component_dataflow_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("dataflow-table");
  var _component_card_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card-component");
  var _component_main_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("main-section");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_modal_box, {
    modelValue: $setup.modalOneActive,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.modalOneActive = $event;
    }),
    title: "New Dataflow",
    "button-label": "Confirm",
    "has-cancel": "",
    onConfirm: $setup.createDataflow
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_field, {
        label: "Name*"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_control, {
            type: "text",
            placeholder: "Dataflow name",
            modelValue: $setup.dataflow.name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $setup.dataflow.name = $event;
            })
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, _hoisted_3, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.showAlert]])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_field, {
        label: "Description"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_control, {
            type: "textarea",
            placeholder: "Describe this dataflow",
            modelValue: $setup.dataflow.description,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $setup.dataflow.description = $event;
            })
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      })];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "onConfirm"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_title_bar, {
    "title-stack": $setup.titleStack
  }, null, 8 /* PROPS */, ["title-stack"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jb_buttons, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jb_button, {
        color: "white",
        label: "New Dataflow",
        icon: $setup.mdiPlus,
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return $setup.modalOneActive = true;
        })
      }, null, 8 /* PROPS */, ["icon"])];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_main_section, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card_component, {
        icon: $setup.mdiTransitConnection,
        title: "Dataflows",
        "has-table": ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dataflow_table, {
            dataflowCollection: $setup.dataflowCollection
          }, null, 8 /* PROPS */, ["dataflowCollection"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["icon"])];
    }),
    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/components/DataflowTable.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/DataflowTable.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataflowTable_vue_vue_type_template_id_c5c2b10a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataflowTable.vue?vue&type=template&id=c5c2b10a */ "./resources/js/components/DataflowTable.vue?vue&type=template&id=c5c2b10a");
/* harmony import */ var _DataflowTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataflowTable.vue?vue&type=script&lang=js */ "./resources/js/components/DataflowTable.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DataflowTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DataflowTable_vue_vue_type_template_id_c5c2b10a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/DataflowTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/components/Field.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Field.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_1dc00c9f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=1dc00c9f */ "./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f");
/* harmony import */ var _Field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js */ "./resources/js/components/Field.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Field_vue_vue_type_template_id_1dc00c9f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Field.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/views/Dataflow.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Dataflow.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dataflow_vue_vue_type_template_id_0f5163f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dataflow.vue?vue&type=template&id=0f5163f7 */ "./resources/js/views/Dataflow.vue?vue&type=template&id=0f5163f7");
/* harmony import */ var _Dataflow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dataflow.vue?vue&type=script&lang=js */ "./resources/js/views/Dataflow.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_jimmycai_USYD_Datap_kalepa_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Dataflow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dataflow_vue_vue_type_template_id_0f5163f7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Dataflow.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/components/DataflowTable.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/DataflowTable.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataflowTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataflowTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DataflowTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataflowTable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Field.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Field.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Field.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Field.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Dataflow.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Dataflow.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dataflow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dataflow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dataflow.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Dataflow.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/DataflowTable.vue?vue&type=template&id=c5c2b10a":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/DataflowTable.vue?vue&type=template&id=c5c2b10a ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataflowTable_vue_vue_type_template_id_c5c2b10a__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataflowTable_vue_vue_type_template_id_c5c2b10a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DataflowTable.vue?vue&type=template&id=c5c2b10a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataflowTable.vue?vue&type=template&id=c5c2b10a");


/***/ }),

/***/ "./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Field_vue_vue_type_template_id_1dc00c9f__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Field_vue_vue_type_template_id_1dc00c9f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Field.vue?vue&type=template&id=1dc00c9f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f");


/***/ }),

/***/ "./resources/js/views/Dataflow.vue?vue&type=template&id=0f5163f7":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Dataflow.vue?vue&type=template&id=0f5163f7 ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dataflow_vue_vue_type_template_id_0f5163f7__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dataflow_vue_vue_type_template_id_0f5163f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dataflow.vue?vue&type=template&id=0f5163f7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Dataflow.vue?vue&type=template&id=0f5163f7");


/***/ })

}]);