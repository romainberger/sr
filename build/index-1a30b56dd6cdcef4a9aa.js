!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="./build/",t(t.s=5)}({5:function(e,n,t){t(6);var r=location.origin,o=function(e,n){var t=document.querySelector(e);t&&n(t)};fetch("".concat(r,"/update-mac.json?t=").concat(+new Date)).then((function(e){return e.json()})).then((function(e){o("#version",(function(n){n.innerHTML="version ".concat(e.version)})),o("#download-mac",(function(n){n.href=e.url}))})),fetch("".concat(r,"/update-win.json?t=").concat(+new Date)).then((function(e){return e.json()})).then((function(e){o("#download-windows",(function(n){n.href=e.url}))})),o(".download-link",(function(e){e.addEventListener("click",(function(e){var n=e.target.dataset.platform;trackEvent("download",{event_category:"download",event_label:n})}))})),o(".link",(function(e){e.addEventListener("click",(function(e){var n=e.target.dataset.link;trackEvent("link",{event_category:"click",event_label:n})}))}));var a=document.querySelector("#video-feature-1"),c=document.querySelector("#video-feature-3"),u=0,i=0,f=["assets/feature-1-0.mp4","assets/feature-1-1.mp4","assets/feature-1-2.mp4"],l=["assets/feature-3-0.mp4","assets/feature-3-1.mp4"];a&&c&&(a.addEventListener("ended",(function(){u+1>f.length-1?u=0:u++,a.src=f[u]})),c.addEventListener("ended",(function(){i+1>l.length-1?i=0:i++,c.src=l[i]})))},6:function(e,n,t){}});