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
function n(n,e,t,o){return new(t||(t=Promise))((function(r,i){function u(n){try{a(o.next(n))}catch(n){i(n)}}function c(n){try{a(o.throw(n))}catch(n){i(n)}}function a(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(u,c)}a((o=o.apply(n,e||[])).next())}))}function e(n,e){var t,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(r=u.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(n,u)}catch(n){i=[6,n],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function t(n,e){return 0==e?n:t(e,n%e)}function o(n){var e=n.videoWidth,o=n.videoHeight,r=t(e,o);return"".concat(e/r,":").concat(o/r)}function r(n){var e=n.videoWidth,t=n.videoHeight;return{detail:"".concat(e,"x").concat(t),width:e,height:t}}function i(n,e){return new Promise((function(t){setTimeout((function(){t("get video info timeout")}),e),n.onloadedmetadata=function(){t({resolution:r(n),ratio:o(n)})},n.onerror=function(){var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")},n.style.display="none",document.body.appendChild(n)}))}function u(t,o){return void 0===o&&(o=2e3),n(this,void 0,void 0,(function(){var n,r;return e(this,(function(e){switch(e.label){case 0:return(n=document.createElement("video")).src=t,[4,i(n,o)];case 1:return r=e.sent(),document.body.removeChild(n),[2,r]}}))}))}export{u as info};
//# sourceMappingURL=video-ratio.esm.js.map
