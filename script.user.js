// ==UserScript== 
// @name crunchyscan-bypass
// @namespace https://github.com/axoroll7
// @version 1.4
// @description ~ 
// @author axoroll7
// @match *://*.crunchyscan.fr/* 
// @downloadURL https://raw.githubusercontent.com/axoroll7/crunchyscan-bypass/main/script.user.js
// @updateURL https://raw.githubusercontent.com/axoroll7/crunchyscan-bypass/main/script.user.js
// @run-at document-start
// @grant none
// ==/UserScript== 
(function() {
  'use strict';
  var alrtScope;
  if (typeof unsafeWindow === "undefined") {
    alrtScope = window;
  } else {
    alrtScope = unsafeWindow;
  }
  alrtScope.alert = function(p){};
  alert("test");
})();
