(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-editor-stage-left"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-stage-left/stageleft.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-stage-left/stageleft.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir=\"ltr\"] [class^=\"stage-header_stage-size-toggle-group\"] [class^=\"stage-header_stage-button-icon\"] {\n  transform: scaleX(-1);\n}\n[dir=\"rtl\"] [class^=\"stage-header_stage-size-toggle-group\"] [class^=\"stage-header_stage-button-icon\"] {\n  transform: none;\n}\n[class^=\"target-pane_target-pane\"] {\n  flex-direction: row-reverse;\n}\n[dir=\"ltr\"] [class^=\"target-pane_stage-selector-wrapper\"] {\n  margin-left: 0;\n  margin-right: calc(0.5rem / 2);\n}\n[dir=\"ltr\"] [class^=\"sprite-selector_sprite-selector\"] {\n  margin-left: calc(0.5rem / 2);\n  margin-right: 0;\n}\n[dir=\"rtl\"] [class^=\"target-pane_stage-selector-wrapper\"] {\n  margin-right: 0;\n  margin-left: calc(0.5rem / 2);\n}\n[dir=\"rtl\"] [class^=\"sprite-selector_sprite-selector\"] {\n  margin-right: calc(0.5rem / 2);\n  margin-left: 0;\n}\n[class^=\"gui_flex-wrapper\"] {\n  flex-direction: row-reverse;\n  overflow-x: hidden;\n}\n\n[dir=\"ltr\"] [class^=\"backpack_backpack-header\"] {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0.5rem;\n}\n[dir=\"ltr\"] [class^=\"blocks_blocks_C530M\"] .injectionDiv,\n[dir=\"ltr\"] [class^=\"asset-panel_wrapper\"] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=\"ltr\"] [class^=\"gui_extension-button-container\"] {\n  border-bottom-left-radius: 0.5rem;\n}\n\n[dir=\"rtl\"] [class^=\"backpack_backpack-header\"] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0.5rem;\n}\n[dir=\"rtl\"] [class^=\"blocks_blocks_C530M\"] .injectionDiv,\n[dir=\"rtl\"] [class^=\"asset-panel_wrapper\"] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=\"rtl\"] [class^=\"gui_extension-button-container\"] {\n  border-bottom-right-radius: 0.5rem;\n}\n\n.Popover {\n  /* See hide-flyout */\n  z-index: 51;\n}\n\n/* hide-stage compatibility */\n\n.sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\n  right: auto;\n  left: 0.5rem;\n  width: calc(240px + 0.125rem);\n  justify-content: flex-end;\n}\n\n[dir=\"rtl\"] .sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\n  left: auto;\n  right: 0.5rem;\n}\n\n.sa-stage-hidden [class*=\"gui_tab-list_\"] {\n  padding-inline-start: calc(240px + 1.125rem);\n}\n\n/* related to TW changes to headers */\n[dir=\"ltr\"] [class^=\"stage-header_stage-header-wrapper_\"] {\n  right: initial;\n  left: 0;\n}\n[dir=\"rtl\"] [class^=\"stage-header_stage-header-wrapper_\"] {\n  right: 0;\n  left: initial;\n}\n[class*=\"stage-wrapper_offset-controls_\"] {\n  z-index: 10;\n}\n[dir=\"rtl\"] [class^=\"stage-header_stage-header-wrapper_\"] {\n  right: 0 !important;\n}\n[dir=\"rtl\"] .sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\n  right: 0.5rem !important;\n  left: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/editor-stage-left/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/editor-stage-left/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _fix_share_the_love_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fix-share-the-love.js */ "./src/addons/addons/editor-stage-left/fix-share-the-love.js");
/* harmony import */ var _css_loader_stageleft_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./stageleft.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-stage-left/stageleft.css");
/* harmony import */ var _css_loader_stageleft_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_stageleft_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "fix-share-the-love.js": _fix_share_the_love_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "stageleft.css": _css_loader_stageleft_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-stage-left/fix-share-the-love.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/editor-stage-left/fix-share-the-love.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  const ScratchBlocks = await addon.tab.traps.getBlockly();
  const resize = () => {
    const workspace = Blockly.getMainWorkspace();
    if (workspace) window.dispatchEvent(new Event("resize"));
  };
  addon.self.addEventListener("disabled", resize);
  addon.self.addEventListener("reenabled", resize);
  const originalGetClientRect = ScratchBlocks.VerticalFlyout.prototype.getClientRect;
  ScratchBlocks.VerticalFlyout.prototype.getClientRect = function () {
    const rect = originalGetClientRect.call(this);
    if (!rect || addon.self.disabled) return rect;
    // undo the effect of BIG_NUM in https://github.com/scratchfoundation/scratch-blocks/blob/ab26fa2960643fa38fbc7b91ca2956be66055070/core/flyout_vertical.js#L739
    if (this.toolboxPosition_ === ScratchBlocks.TOOLBOX_AT_LEFT) {
      rect.left += 1000000000;
    }
    rect.width -= 1000000000;
    return rect;
  };
  resize();
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-editor-stage-left.js.map