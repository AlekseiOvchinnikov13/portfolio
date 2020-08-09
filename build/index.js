var e,t,n;$(function(){new WOW({animateClass:"animate__animated"}).init()}),e=this,t=function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e};function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t){return 0<=t.indexOf(e)}function a(e,t,n){null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n}function l(e,t,n){null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]}var r=window.WeakMap||window.MozWeakMap||(i(c,[{key:"get",value:function(e){for(var t=0;t<this.keys.length;t++){if(this.keys[t]===e)return this.values[t]}}},{key:"set",value:function(e,t){for(var n=0;n<this.keys.length;n++){if(this.keys[n]===e)return this.values[n]=t,this}return this.keys.push(e),this.values.push(t),this}}]),c);function c(){n(this,c),this.keys=[],this.values=[]}var u=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(i(h,[{key:"observe",value:function(){}}]),h.notSupported=!0,h);function h(){n(this,h),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}var d=window.getComputedStyle||function(n){var i=/(\-([a-z]){1})/g;return{getPropertyValue:function(e){"float"===e&&(e="styleFloat"),i.test(e)&&e.replace(i,function(e,t){return t.toUpperCase()});var t=n.currentStyle;return(null!=t?t[e]:void 0)||null}}},f=(i(v,[{key:"init",value:function(){this.element=window.document.documentElement,s(document.readyState,["interactive","complete"])?this.start():a(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var s=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var e=0;e<this.boxes.length;e++){var t=this.boxes[e];this.applyStyle(t,!0)}this.disabled()||(a(this.config.scrollContainer||window,"scroll",this.scrollHandler),a(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live&&new u(function(e){for(var t=0;t<e.length;t++)for(var n=e[t],i=0;i<n.addedNodes.length;i++){var o=n.addedNodes[i];s.doSync(o)}}).observe(document.body,{childList:!0,subtree:!0})}},{key:"stop",value:function(){this.stopped=!0,l(this.config.scrollContainer||window,"scroll",this.scrollHandler),l(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){u.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(e){if(null==e&&(e=this.element),1===e.nodeType)for(var t=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass),n=0;n<t.length;n++){var i=t[n];s(i,this.all)||(this.boxes.push(i),this.all.push(i),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(i,!0),this.scrolled=!0)}}},{key:"show",value:function(e){var t,n;return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),t=e,n=this.wowEvent,null!=t.dispatchEvent?t.dispatchEvent(n):n in(null!=t)?t[n]():"on"+n in(null!=t)&&t["on"+n](),a(e,"animationend",this.resetAnimation),a(e,"oanimationend",this.resetAnimation),a(e,"webkitAnimationEnd",this.resetAnimation),a(e,"MSAnimationEnd",this.resetAnimation),e}},{key:"applyStyle",value:function(e,t){var n=this,i=e.getAttribute("data-wow-duration"),o=e.getAttribute("data-wow-delay"),s=e.getAttribute("data-wow-iteration");return this.animate(function(){return n.customStyle(e,t,i,o,s)})}},{key:"resetStyle",value:function(){for(var e=0;e<this.boxes.length;e++){this.boxes[e].style.visibility="visible"}}},{key:"resetAnimation",value:function(e){var t;0<=e.type.toLowerCase().indexOf("animationend")&&((t=e.target||e.srcElement).className=t.className.replace(this.config.animateClass,"").trim())}},{key:"customStyle",value:function(e,t,n,i,o){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),i&&this.vendorSet(e.style,{animationDelay:i}),o&&this.vendorSet(e.style,{animationIterationCount:o}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e}},{key:"vendorSet",value:function(e,t){for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];e[""+n]=i;for(var o=0;o<this.vendors.length;o++){e[""+this.vendors[o]+n.charAt(0).toUpperCase()+n.substr(1)]=i}}}},{key:"vendorCSS",value:function(e,t){for(var n=d(e),i=n.getPropertyCSSValue(t),o=0;o<this.vendors.length;o++)var s=this.vendors[o],i=i||n.getPropertyCSSValue("-"+s+"-"+t);return i}},{key:"animationName",value:function(t){var n=void 0;try{n=this.vendorCSS(t,"animation-name").cssText}catch(e){n=d(t).getPropertyValue("animation-name")}return"none"===n?"":n}},{key:"cacheAnimationName",value:function(e){return this.animationNameCache.set(e,this.animationName(e))}},{key:"cachedAnimationName",value:function(e){return this.animationNameCache.get(e)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var e=[],t=0;t<this.boxes.length;t++){var n=this.boxes[t];if(n){if(this.isVisible(n)){this.show(n);continue}e.push(n)}}this.boxes=e,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;)t+=(e=e.offsetParent).offsetTop;return t}},{key:"isVisible",value:function(e){var t=e.getAttribute("data-wow-offset")||this.config.offset,n=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,i=n+Math.min(this.element.clientHeight,"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight)-t,o=this.offsetTop(e),s=o+e.clientHeight;return o<=i&&n<=s}},{key:"disabled",value:function(){return!this.config.mobile&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}]),v);function v(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];n(this,v),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate="requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()},this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=function(e,t){for(var n in t){var i;null==e[n]&&(i=t[n],e[n]=i)}return e}(e,this.defaults),null!=e.scrollContainer&&(this.config.scrollContainer=document.querySelector(e.scrollContainer)),this.animationNameCache=new r,this.wowEvent=function(e,t,n,i){var o=!(arguments.length<=1||void 0===t)&&t,s=!(arguments.length<=2||void 0===n)&&n,a=arguments.length<=3||void 0===i?null:i,l=void 0;return null!=document.createEvent?(l=document.createEvent("CustomEvent")).initCustomEvent(e,o,s,a):null!=document.createEventObject?(l=document.createEventObject()).eventType=e:l.eventName=e,l}(this.config.boxClass)}t.default=f,e.exports=t.default},"function"==typeof define&&define.amd?define(["module","exports"],t):"undefined"!=typeof exports?t(module,exports):(t(n={exports:{}},n.exports),e.WOW=n.exports);