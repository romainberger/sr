!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./build/",n(n.s=5)}([,,,,,function(e,t,n){"use strict";n.r(t);n(7);n(6);var r=function(e,t){var n=document.querySelector(e);n&&t(n)};r(".download-link",(function(e){e.addEventListener("click",(function(e){var t=e.target.dataset.platform;trackEvent("download",{event_category:"download",event_label:t})}))})),r(".link",(function(e){e.addEventListener("click",(function(e){var t=e.target.dataset.link;trackEvent("link",{event_category:"click",event_label:t})}))}));var o=document.querySelector("#video-feature-1"),u=document.querySelector("#video-feature-3"),a=0,c=0,i=["assets/feature-1-0.mp4","assets/feature-1-1.mp4","assets/feature-1-2.mp4"],l=["assets/feature-3-0.mp4","assets/feature-3-1.mp4"];o&&u&&(o.addEventListener("ended",(function(){a+1>i.length-1?a=0:a++,o.src=i[a]})),u.addEventListener("ended",(function(){c+1>l.length-1?c=0:c++,u.src=l[c]})))},function(e,t,n){},function(e,t){document.querySelectorAll(".js-icon").forEach((function(e){var t=String.fromCharCode(e.dataset.icon);e.innerHTML=t}))}]);