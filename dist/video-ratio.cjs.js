"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,n,o){return new(n||(n=Promise))((function(r,i){function u(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}a((o=o.apply(e,t||[])).next())}))}function t(e,t){var n,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(r=u.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function n(e,t){return 0==t?e:n(t,e%t)}function o(e){var t=e.videoWidth,o=e.videoHeight,r=n(t,o);return"".concat(t/r,":").concat(o/r)}function r(e){var t=e.videoWidth,n=e.videoHeight;return{detail:"".concat(t,"x").concat(n),width:t,height:n}}function i(e,t){return new Promise((function(n){setTimeout((function(){n("get video info timeout")}),t),e.onloadedmetadata=function(){n({resolution:r(e),ratio:o(e)})},e.onerror=function(){var t;n((null===(t=e.error)||void 0===t?void 0:t.message)||"")},e.style.display="none",document.body.appendChild(e)}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.info=function(n,o){return void 0===o&&(o=2e3),e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return(e=document.createElement("video")).src=n,[4,i(e,o)];case 1:return r=t.sent(),document.body.removeChild(e),[2,r]}}))}))};
//# sourceMappingURL=video-ratio.cjs.js.map
