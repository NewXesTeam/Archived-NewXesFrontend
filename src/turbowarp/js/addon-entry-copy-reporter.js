(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-copy-reporter"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/copy-reporter/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/copy-reporter/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-copy-reporter-icon {\n  cursor: pointer;\n  float: right;\n  display: block;\n  user-select: none;\n  filter: var(--editorDarkMode-accent-filter, none);\n  width: 14px;\n  height: 14px;\n}\n\n.valueReportBox {\n  user-select: text;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/copy-reporter/copy.svg":
/*!****************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/copy-reporter/copy.svg ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDguOTRhMS4zMSwxLjMxLDAsMCwwLS4wNi0uMjdsMC0uMDlhMS4wNywxLjA3LDAsMCwwLS4xOS0uMjhoMGwtNi02aDBhMS4wNywxLjA3LDAsMCwwLS4yOC0uMTkuMzIuMzIsMCwwLDAtLjA5LDBBLjg4Ljg4LDAsMCwwLDE0LjA1LDJIMTBBMywzLDAsMCwwLDcsNVY2SDZBMywzLDAsMCwwLDMsOVYxOWEzLDMsMCwwLDAsMywzaDhhMywzLDAsMCwwLDMtM1YxOGgxYTMsMywwLDAsMCwzLTNWOVMyMSw5LDIxLDguOTRaTTE1LDUuNDEsMTcuNTksOEgxNmExLDEsMCwwLDEtMS0xWk0xNSwxOWExLDEsMCwwLDEtMSwxSDZhMSwxLDAsMCwxLTEtMVY5QTEsMSwwLDAsMSw2LDhIN3Y3YTMsMywwLDAsMCwzLDNoNVptNC00YTEsMSwwLDAsMS0xLDFIMTBhMSwxLDAsMCwxLTEtMVY1YTEsMSwwLDAsMSwxLTFoM1Y3YTMsMywwLDAsMCwzLDNoM1oiIGZpbGw9IiM1NzVlNzUiLz48L3N2Zz4K");

/***/ }),

/***/ "./src/addons/addons/copy-reporter/_runtime_entry.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/copy-reporter/_runtime_entry.js ***!
  \***********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/copy-reporter/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/copy-reporter/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_copy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./copy.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/copy-reporter/copy.svg");
/* generated by pull.js */



const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "copy.svg": _url_loader_copy_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/addons/addons/copy-reporter/userscript.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/copy-reporter/userscript.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg
  } = _ref;
  addon.tab.createEditorContextMenu(ctx => {
    const className = ctx.type === "monitor_large" ? "monitor_large-value" : "monitor_value";
    const element = ctx.target.querySelector("[class*='".concat(className, "_']"));
    if (element.innerText.length !== 0) {
      navigator.clipboard.writeText(element.innerText);
    }
  }, {
    className: "copy",
    types: ["monitor_default", "monitor_large", "monitor_slider"],
    position: "monitor",
    order: 0,
    label: msg("copy-value")
  });

  // add button to reporter bubble
  const ScratchBlocks = await addon.tab.traps.getBlockly();

  // https://github.com/scratchfoundation/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/workspace_svg.js#L979
  ScratchBlocks.WorkspaceSvg.prototype.reportValue = function (id, value) {
    let block = this.getBlockById(id);
    if (!block) {
      throw "Tried to report value on block that does not exist.";
    }
    ScratchBlocks.DropDownDiv.hideWithoutAnimation();
    ScratchBlocks.DropDownDiv.clearContent();
    let contentDiv = ScratchBlocks.DropDownDiv.getContentDiv();
    let valueReportBox = document.createElement("div");
    valueReportBox.setAttribute("class", "valueReportBox");
    valueReportBox.innerText = value;
    if (!addon.self.disabled) {
      // use to get focus and event priority
      valueReportBox.setAttribute("tabindex", "0");
      // if the user pressed Ctrl+C, prevent propagation to Blockly
      valueReportBox.onkeydown = event => {
        if ((event.altKey || event.ctrlKey || event.metaKey) && event.code === "KeyC") {
          event.stopPropagation();
        }
      };
      if (value.length !== 0) {
        const copyButton = document.createElement("img");
        copyButton.setAttribute("role", "button");
        copyButton.setAttribute("tabindex", "0");
        copyButton.setAttribute("alt", msg("copy-to-clipboard"));
        copyButton.setAttribute("src", addon.self.getResource("/copy.svg")) /* rewritten by pull.js */;
        copyButton.classList.add("sa-copy-reporter-icon");
        addon.tab.displayNoneWhileDisabled(copyButton);
        copyButton.onclick = () => navigator.clipboard.writeText(value);
        valueReportBox.appendChild(copyButton);
      }
    }
    contentDiv.appendChild(valueReportBox);
    ScratchBlocks.DropDownDiv.setColour(ScratchBlocks.Colours.valueReportBackground, ScratchBlocks.Colours.valueReportBorder);
    ScratchBlocks.DropDownDiv.showPositionedByBlock(this, block);
  };
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-copy-reporter.js.map