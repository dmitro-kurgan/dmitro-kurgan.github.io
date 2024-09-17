/*! For license information please see main.a9f0acf7.bundle.js.LICENSE.txt */
(()=>{var t={525:function(){(function(){var t,e,n,o=function(t,e){return function(){return t.apply(e,arguments)}},r=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,o;for(n in t)null!=(o=t[n])&&(e[n]=o);return e},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,o,r;for(e=n=0,o=(r=this.keys).length;o>n;e=++n)if(r[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,o,r,i;for(n=o=0,r=(i=this.keys).length;r>o;n=++o)if(i[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),this.WOW=function(){function i(t){null==t&&(t={}),this.scrollCallback=o(this.scrollCallback,this),this.scrollHandler=o(this.scrollHandler,this),this.start=o(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n}return i.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},i.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},i.prototype.start=function(){var e,n,o,r;if(this.stopped=!1,this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.all=function(){var t,n,o,r;for(r=[],t=0,n=(o=this.boxes).length;n>t;t++)e=o[t],r.push(e);return r}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(n=0,o=(r=this.boxes).length;o>n;n++)e=r[n],this.applyStyle(e,!0);window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new t(function(t){return function(e){var n,o,r,i,s;for(s=[],r=0,i=e.length;i>r;r++)o=e[r],s.push(function(){var t,e,r,i;for(i=[],t=0,e=(r=o.addedNodes||[]).length;e>t;t++)n=r[t],i.push(this.doSync(n));return i}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},i.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},i.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},i.prototype.doSync=function(t){var e,n,o,i,s;if(!this.stopped){for(t||(t=this.element),s=[],n=0,o=(i=(t=t.parentNode||t).getElementsByClassName(this.config.boxClass)).length;o>n;n++)e=i[n],r.call(this.all,e)<0?(this.applyStyle(e,!0),this.boxes.push(e),this.all.push(e),s.push(this.scrolled=!0)):s.push(void 0);return s}},i.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass},i.prototype.applyStyle=function(t,e){var n,o,r;return o=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),r=t.getAttribute("data-wow-iteration"),this.animate(function(i){return function(){return i.customStyle(t,e,o,n,r)}}(this))},i.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},i.prototype.resetStyle=function(){var t,e,n,o,r;for(r=[],e=0,n=(o=this.boxes).length;n>e;e++)t=o[e],r.push(t.setAttribute("style","visibility: visible;"));return r},i.prototype.customStyle=function(t,e,n,o,r){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),o&&this.vendorSet(t.style,{animationDelay:o}),r&&this.vendorSet(t.style,{animationIterationCount:r}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},i.prototype.vendors=["moz","webkit"],i.prototype.vendorSet=function(t,e){var n,o,r,i;for(n in i=[],e)o=e[n],t[""+n]=o,i.push(function(){var e,i,s,a;for(a=[],e=0,i=(s=this.vendors).length;i>e;e++)r=s[e],a.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return a}.call(this));return i},i.prototype.vendorCSS=function(t,e){var n,o,r,i,s,a;for(n=(o=window.getComputedStyle(t)).getPropertyCSSValue(e),i=0,s=(a=this.vendors).length;s>i;i++)r=a[i],n=n||o.getPropertyCSSValue("-"+r+"-"+e);return n},i.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=window.getComputedStyle(t).getPropertyValue("animation-name")}return"none"===e?"":e},i.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},i.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},i.prototype.scrollHandler=function(){return this.scrolled=!0},i.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,o,r;for(r=[],e=0,n=(o=this.boxes).length;n>e;e++)(t=o[e])&&(this.isVisible(t)?this.show(t):r.push(t));return r}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},i.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},i.prototype.isVisible=function(t){var e,n,o,r,i;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=(i=window.pageYOffset)+this.element.clientHeight-n,e=(o=this.offsetTop(t))+t.clientHeight,r>=o&&e>=i},i.prototype.util=function(){return this._util||(this._util=new e)},i.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},i}()}).call(this)}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";var t,e,o,r,i,s,a,l,c,u,d,h,f,m=function(){var t=getComputedStyle(document.documentElement);return parseInt(t.getPropertyValue("--header-height").trim())};function p(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}document.addEventListener("DOMContentLoaded",(function(){var t,e=document.querySelector("body"),n=document.querySelector(".header"),o=document.querySelector("#write-us"),r=document.querySelector("#open-menu"),i=document.querySelector("#language-trigger"),s=document.querySelectorAll("._nav-link"),a=document.querySelectorAll("._section"),l=-1*m();e.classList.contains("page-index")&&window.addEventListener("scroll",(function(){var e,c=window.scrollY,u=a.length-p(a).reverse().findIndex((function(t){return c>=t.offsetTop-l}))-1;window.scrollY>0?(n.classList.add("_scrolled"),i.classList.add("_scrolled"),[o,r].forEach((function(t){t.classList.remove("_subtle"),t.classList.add("_secondary")}))):(n.classList.remove("_scrolled"),i.classList.remove("_scrolled"),[o,r].forEach((function(t){t.classList.remove("_secondary"),t.classList.add("_subtle")}))),u!==t&&(p(Array(a.length).keys()).forEach((function(e){!function(e){t<s.length&&s[e].classList.remove("_active")}(e)})),e=u,(t=u)<s.length&&s[e].classList.add("_active"))}))}),!1),t=document.querySelector("body"),e=document.querySelector("#header"),o=document.querySelector("#navigation"),r=document.querySelectorAll(".logo"),i=document.querySelectorAll("._anchor-link[href^='#']"),s=document.querySelector("#language-trigger"),a=document.querySelector("#open-menu"),l=m(),console.log(l),r.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))})),i.forEach((function(n){n.addEventListener("click",(function(n){n.preventDefault(),[t,e,o,a,s].forEach((function(t){t.classList.remove("_menu-opened")}));var r=document.querySelector(this.getAttribute("href")).offsetTop-l;window.scroll({top:r,behavior:"smooth"})}))})),function(){var t=document.querySelector("body"),e=document.querySelector("#header"),n=document.querySelector("#navigation"),o=document.querySelector("#open-menu"),r=document.querySelector("#language-trigger"),i=[t,e,n,o,r],s="_menu-opened",a=function(t){t&&!e.classList.contains("_scrolled")&&(o.classList.add("_secondary"),o.classList.remove("_subtle")),t||e.classList.contains("_scrolled")||(o.classList.add("_subtle"),o.classList.remove("_secondary"))};o.addEventListener("click",(function(){o.classList.contains(s)?(i.forEach((function(t){t.classList.remove(s)})),a(!1)):(i.forEach((function(t){t.classList.add(s)})),a(!0))}))}(),h=document.querySelector(".dropdown"),(f=document.querySelector(".dropdown__btn")).addEventListener("click",(function(){h.classList.toggle("_showed"),f.classList.toggle("_active")})),document.addEventListener("click",(function(t){h.contains(t.target)||(h.classList.remove("_showed"),f.classList.remove("_active"))})),c=document.querySelectorAll(".accordion__trigger"),u="_active",c&&c.forEach((function(t){t.addEventListener("click",(function(){var e=t.nextElementSibling;c.forEach((function(e){e!==t&&(e.classList.remove(u),e.nextElementSibling.style.maxHeight=null)})),t.classList.toggle(u),e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))})),d=n(525),window.wow=new d.WOW({mobile:!1,live:!1}),window.wow.init(),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".sign");if(t){var e={root:null,rootMargin:"0px",threshold:.1};setTimeout((function(){var n=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("_animated"),e.unobserve(t.target))}))}),e);t.forEach((function(t){n.observe(t)}))}),1e3)}})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("._animated-text").forEach((function(t){var e=t.textContent.split(" ");t.innerHTML="",e.forEach((function(n,o){var r,i=document.createElement("span");t.classList.contains("_inline-flex")?i.style.display="inline-flex":i.style.display="inline-block",(r=n,function(t){if(Array.isArray(t))return y(t)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t,e){var n=document.createElement("span");n.textContent=t,i.appendChild(n),setTimeout((function(){n.classList.add("visible")}),300*o+50*e)})),t.appendChild(i),o<e.length-1&&t.appendChild(document.createTextNode(" "))}))}))})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".about-us__photo"),e=document.querySelector(".about-us__values");t&&e&&window.innerWidth>=768&&window.addEventListener("scroll",(function(){var n=e.clientHeight,o=e.getBoundingClientRect(),r=Math.min(Math.max(0,m()-o.top),n),i=.47+r/n*.53;t.style.scale="".concat(i),t.style.translate="0 ".concat(r,"px")}))})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".about-us__values-list");if(t){var e={root:null,rootMargin:"0px",threshold:.1};setTimeout((function(){new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&(g(".counter"),e.unobserve(t.target))}))}),e).observe(t)}),1e3)}}));var g=function(t){document.querySelectorAll(t).forEach((function(t){var e,n,o,r,i=parseInt(t.getAttribute("data-target"),10);e=t,n=i,o=null,r=function(t){o||(o=t);var i=Math.min((t-o)/2e3,1),s=Math.floor(i*(n-0)+0);e.textContent=s.toLocaleString(),i<1&&requestAnimationFrame(r)},requestAnimationFrame(r)}))}})()})();