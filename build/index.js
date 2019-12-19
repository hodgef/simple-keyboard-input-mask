/*!
 * 
 *   simple-keyboard-input-mask v2.1.24
 *   https://github.com/hodgef/simple-keyboard-input-mask
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleKeyboardInputMask=e():t.SimpleKeyboardInputMask=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e);e.default=function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(this,"init",(function(t){t.registerModule("inputMask",(function(e){return t.options.inputMask?(!t.options.disableCaretPositioning&&(console.warn("SimpleKeyboardInputMask: Caret placement is not supported in this release. Option disableCaretPositioning will be enabled. To disable this warning, set option disableCaretPositioning to true."),t.options.disableCaretPositioning=!0),e.getMaskedInput=function(n,i,r,u){var s=t.options.inputMask,a="";if(!s||"object"!==o(s)&&"string"!=typeof s||e.isBksp(n)||!u)a=e.fn.getUpdatedInput(n,i,r,u);else{var p="object"===o(s)?t.options.inputMask[t.options.inputName]:s,l=e.autoAddSymbol(r,i,p,n);i=l.input||i,r=l.caretPos||r;var c=e.fn.getUpdatedInput(n,i,r,!1);a=e.validateInputProposal(c,p,r)?e.fn.getUpdatedInput(n,i,r,u):t.getInput()}return a},e.inputClass=t.options.inputMaskTargetClass||"input",e.currentButton="",e.fn={},e.fn.getUpdatedInput=t.utilities.getUpdatedInput,t.utilities.getUpdatedInput=function(t,n,o,i){return e.getMaskedInput(t,n,o,i)},e.onKeyPressed=function(n){var o=n.target.classList.contains(e.inputClass);if(!o)return!1;t.options.debug&&console.log("isInputTarget",o),t.options.debug&&console.log("input",n);var i=t.physicalKeyboard.getSimpleKeyboardLayoutKey(n);i&&i.includes("numpad")&&(i=i.replace("numpad",""));var r=t.getButtonElement(i)||t.getButtonElement("{".concat(i,"}"));if(r){var u=r.classList.contains("hg-functionBtn"),s=u?"{".concat(i,"}"):i;if(u&&(i.includes("shift")||i.includes("caps")))return!1;t.options.debug&&console.log("layoutKeyFormatted",s),t.handleButtonClicked(s),n.target.value="",n.target.value=t.getInput()}t.options.debug&&console.log(i,r)},e.initInputHandling=function(){document.addEventListener("keyup",e.onKeyPressed)},e.destroy=function(){document.removeEventListener("keyup",e.onKeyPressed)},e.validateInputProposal=function(t,n,o){if(t&&"string"==typeof t&&n&&"string"==typeof t){var i=t.split(""),r=!0,u=o||0;for(u=0;u<i.length;u++)r=e.isCharAllowed(i[u],n[u]);return r}return!1},e.isCharAllowed=function(t,n){if(!(t&&n||"0"===t))return!1;var o=e.isNumber(t)&&e.isNumber(n),i=e.isLetter(t)&&e.isLetter(n);return o||i||!o&&!i&&t===n},e.isBksp=function(t){return"{bksp}"===t||"{backspace}"===t},e.isNumber=function(t){return"0"===t||!isNaN(+t)&&null===t.match(/^\s$/)},e.isLetter=function(e){var n,i=/[a-z]/i;return n="object"===o(t.options.letterCheckPattern)?t.options.letterCheckPattern[t.options.inputName]||i:t.options.letterCheckPattern||i,e.match(n)},e.isSymbol=function(){},e.autoAddSymbol=function(n,o,i,r){n=o.trim()||n?o.length:0;for(var u=i.split(""),s=n;s<u.length&&u[s]&&!e.isNumber(u[s])&&!e.isLetter(u[s])&&(+r||0==+r);s++)o=t.utilities.addStringAt(o,u[s],s,!1),t.options.disableCaretPositioning||(t.caretPosition=t.caretPosition?t.caretPosition+1:1);return{input:o,caretPos:t.caretPosition}},void(t.options.inputMaskPhysicalKeyboardHandling&&e.initInputHandling())):(console.warn("SimpleKeyboardInputMask: You must provide the inputMask option with your input mask"),!1)}))}))}}])}));