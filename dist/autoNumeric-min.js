"use strict";var _slicedToArray=function(){function e(e,t){var a=[],n=!0,i=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){i=!0,r=e}finally{try{!n&&o.return&&o.return()}finally{if(i)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=e(require("jquery")):e(window.jQuery)}(function(e){function t(e){return void 0===e}function a(e){var a={};if(t(e.selectionStart)){e.focus();var n=document.selection.createRange();a.length=n.text.length,n.moveStart("character",-e.value.length),a.end=n.text.length,a.start=a.end-a.length}else a.start=e.selectionStart,a.end=e.selectionEnd,a.length=a.end-a.start;return a}function n(e,a,n){if(t(e.selectionStart)){e.focus();var i=e.createTextRange();i.collapse(!0),i.moveEnd("character",n),i.moveStart("character",a),i.select()}else e.selectionStart=a,e.selectionEnd=n}function i(e,t){if(t)throw new Error(e)}function r(t,a){e.each(a,function(e,n){"function"==typeof n?a[e]=n(t,a,e):"function"==typeof t.autoNumeric[n]&&(a[e]=t.autoNumeric[n](t,a,e))})}function s(e,t){var a=0,n=0;return t[1]&&(a=t[1].length),e[1]&&(n=e[1].length),Math.max(a,n)}function o(e,t){r(e,t);var a=t.vMax.toString().split("."),n=t.vMin||0===t.vMin?t.vMin.toString().split("."):[];t.aNeg=t.vMin<0?"-":"",a[0]=a[0].replace("-",""),n[0]=n[0].replace("-",""),t.mIntPos=Math.max(a[0].length,1),t.mIntNeg=Math.max(n[0].length,1),null===t.mDec?(t.mDec=s(n,a),t.oDec=t.mDec):t.mDec=Number(t.mDec),t.scaleDecimal&&(t.mDec=t.scaleDecimal),null===t.altDec&&t.mDec>0&&("."===t.aDec&&","!==t.aSep?t.altDec=",":","===t.aDec&&"."!==t.aSep&&(t.altDec="."));var i=t.aNeg?"([-\\"+t.aNeg+"]?)":"(-?)";t.aNegRegAutoStrip=i,t.skipFirstAutoStrip=new RegExp(i+"[^-"+(t.aNeg?"\\"+t.aNeg:"")+"\\"+t.aDec+"\\d].*?(\\d|\\"+t.aDec+"\\d)"),t.skipLastAutoStrip=new RegExp("(\\d\\"+t.aDec+"?)[^\\"+t.aDec+"\\d]\\D*$");var o="-0123456789\\"+t.aDec;return t.allowedAutoStrip=new RegExp("[^"+o+"]","gi"),t.numRegAutoStrip=new RegExp(i+"(?:\\"+t.aDec+"?(\\d+\\"+t.aDec+"\\d+)|(\\d*(?:\\"+t.aDec+"\\d*)?))"),t}function u(e,a){if(""!==a.aSign&&(e=e.replace(a.aSign,"")),a.aSuffix)for(;e.indexOf(a.aSuffix)>-1;)e=e.replace(a.aSuffix,"");e=e.replace(a.skipFirstAutoStrip,"$1$2"),("s"===a.pNeg||"s"===a.pSign&&"p"!==a.pNeg)&&e.indexOf("-")>-1&&""!==e&&(a.trailingNegative=!0),e=e.replace(a.skipLastAutoStrip,"$1"),e=e.replace(a.allowedAutoStrip,""),a.altDec&&(e=e.replace(a.altDec,a.aDec));var n=e.match(a.numRegAutoStrip);if(e=n?[n[1],n[2],n[3]].join(""):"","allow"===a.lZero||"keep"===a.lZero){var i="",r=e.split(a.aDec),s=_slicedToArray(r,2),o=s[0],u=s[1],l=o;l.indexOf(a.aNeg)!==-1&&(i=a.aNeg,l=l.replace(a.aNeg,"")),""===i&&l.length>a.mIntPos&&"0"===l.charAt(0)&&(l=l.slice(1)),""!==i&&l.length>a.mIntNeg&&"0"===l.charAt(0)&&(l=l.slice(1)),e=""+i+l+(t(u)?"":a.aDec+u)}if(a.onOff&&"deny"===a.lZero||"allow"===a.lZero&&a.onOff===!1){var c="^"+a.aNegRegAutoStrip+"0*(\\d)";c=new RegExp(c),e=e.replace(c,"$1$2")}return e}function l(e,t){if("p"===t.pSign&&"l"===t.pNeg||"s"===t.pSign&&"p"===t.pNeg){var a=t.nBracket.split(","),n=_slicedToArray(a,2),i=n[0],r=n[1];t.onOff?t.onOff&&e.charAt(0)===i&&(e=e.replace(i,t.aNeg),e=e.replace(r,"")):(e=e.replace(t.aNeg,""),e=i+e+r)}return e}function c(e){return e=e.replace(",","."),e.lastIndexOf("-")!==-1&&e.lastIndexOf("-")===e.length-1&&(e=e.replace("-",""),e="-"+e),e}function g(e,t){return".-"===t&&(e=e.indexOf("-")>-1?e.replace("-","")+"-":e),","!==t&&"-,"!==t||(e=e.replace(".",",")),",-"===t&&(e=e.replace(".",","),e=e.indexOf("-")>-1?e.replace("-","")+"-":e),e}function h(e,t,a){return t&&"."!==t&&(e=e.replace(t,".")),a&&"-"!==a&&(e=e.replace(a,"-")),e.match(/\d/)||(e+="0"),e}function f(e,t){return t.aNeg&&"-"!==t.aNeg&&(e=e.replace("-",t.aNeg)),t.aDec&&"."!==t.aDec&&(e=e.replace(".",t.aDec)),e}function p(e,t,a){return""===e||e===t.aNeg?"always"===t.wEmpty||a?"l"===t.pNeg?e+t.aSign+t.aSuffix:t.aSign+e+t.aSuffix:e:null}function d(e,a){a.strip&&(e=u(e,a)),a.trailingNegative&&e.indexOf("-")===-1&&(e="-"+e);var n=p(e,a,!0),i=e.indexOf("-")>-1;if(i&&(e=e.replace("-","")),null!==n)return n;var r="";a.dGroup=a.dGroup.toString(),r="2"===a.dGroup?/(\d)((\d)(\d{2}?)+)$/:"2s"===a.dGroup?/(\d)((?:\d{2}){0,2}\d{3}(?:(?:\d{2}){2}\d{3})*?)$/:"4"===a.dGroup?/(\d)((\d{4}?)+)$/:/(\d)((\d{3}?)+)$/;var s=e.split(a.aDec),o=_slicedToArray(s,2),c=o[0],g=o[1];if(a.altDec&&t(g)){var h=e.split(a.altDec),f=_slicedToArray(h,2);c=f[0],g=f[1]}if(""!==a.aSep)for(;r.test(c);)c=c.replace(r,"$1"+a.aSep+"$2");return 0===a.mDec||t(g)?e=c:(g.length>a.mDec&&(g=g.substring(0,a.mDec)),e=c+a.aDec+g),"p"===a.pSign&&(i&&"l"===a.pNeg&&(e=a.aNeg+a.aSign+e),i&&"r"===a.pNeg&&(e=a.aSign+a.aNeg+e),i&&"s"===a.pNeg&&(e=a.aSign+e+a.aNeg),i||(e=a.aSign+e)),"s"===a.pSign&&(i&&"r"===a.pNeg&&(e=e+a.aSign+a.aNeg),i&&"l"===a.pNeg&&(e=e+a.aNeg+a.aSign),i&&"p"===a.pNeg&&(e=a.aNeg+e+a.aSign),i||(e+=a.aSign)),null!==a.nBracket&&(a.rawValue<0||"-"===e.charAt(0))&&(e=l(e,a)),a.trailingNegative=!1,e+a.aSuffix}function m(e,t){var a=void 0;switch(t){case 0:a=/(\.(?:\d*[1-9])?)0*$/;break;case 1:a=/(\.\d(?:\d*[1-9])?)0*$/;break;default:a=new RegExp("(\\.\\d{"+t+"}(?:\\d*[1-9])?)0*")}return e=e.replace(a,"$1"),0===t&&(e=e.replace(/\.$/,"")),e}function v(e,t){if(e=""===e?"0":e.toString(),"N05"===t.mRound||"CHF"===t.mRound||"U05"===t.mRound||"D05"===t.mRound){switch(t.mRound){case"N05":e=(Math.round(20*e)/20).toString();break;case"U05":e=(Math.ceil(20*e)/20).toString();break;default:e=(Math.floor(20*e)/20).toString()}var a=void 0;return a=e.indexOf(".")===-1?e+".00":e.length-e.indexOf(".")<3?e+"0":e}var n="",i=0,r="",s=void 0;s="boolean"==typeof t.aPad||null===t.aPad?t.aPad?t.mDec:0:Number(t.aPad),"-"===e.charAt(0)&&(r="-",e=e.replace("-","")),e.match(/^\d/)||(e="0"+e),"-"===r&&0===Number(e)&&(r=""),(Number(e)>0&&"keep"!==t.lZero||e.length>0&&"allow"===t.lZero)&&(e=e.replace(/^0*(\d)/,"$1"));var o=e.lastIndexOf("."),u=o===-1?e.length-1:o,l=e.length-1-u;if(l<=t.mDec){if(n=e,l<s){o===-1&&(n+=t.aDec);for(var c="000000";l<s;)c=c.substring(0,s-l),n+=c,l+=c.length}else l>s?n=m(n,s):0===l&&0===s&&(n=n.replace(/\.$/,""));return 0===Number(n)?n:r+n}var g=o+t.mDec,h=Number(e.charAt(g+1)),f="."===e.charAt(g)?e.charAt(g-1)%2:e.charAt(g)%2,p=e.substring(0,g+1).split("");if(h>4&&"s"===t.mRound||h>4&&"A"===t.mRound&&""===r||h>5&&"A"===t.mRound&&"-"===r||h>5&&"s"===t.mRound||h>5&&"A"===t.mRound&&""===r||h>4&&"A"===t.mRound&&"-"===r||h>5&&"B"===t.mRound||5===h&&"B"===t.mRound&&1===f||h>0&&"C"===t.mRound&&""===r||h>0&&"F"===t.mRound&&"-"===r||h>0&&"U"===t.mRound)for(i=p.length-1;i>=0;i-=1)if("."!==p[i]){if(p[i]=+p[i]+1,p[i]<10)break;i>0&&(p[i]="0")}return p=p.slice(0,g+1),n=m(p.join(""),s),0===Number(n)?n:r+n}function S(e,t,a){var n=t.aDec,i=t.mDec;if(e="paste"===a?v(e,t):e,n&&i){var r=e.split(n),s=_slicedToArray(r,2),o=s[0],u=s[1];if(u&&u.length>i)if(i>0){var l=u.substring(0,i);e=""+o+n+l}else e=o}return e}function N(e){var t={},a=void 0,n=void 0,i=void 0,r=void 0;if(0===e&&1/e<0&&(e="-0"),e=e.toString(),"-"===e.charAt(0)?(e=e.slice(1),t.s=-1):t.s=1,a=e.indexOf("."),a>-1&&(e=e.replace(".","")),a<0&&(a=e.length),n=e.search(/[1-9]/i)===-1?e.length:e.search(/[1-9]/i),i=e.length,n===i)t.e=0,t.c=[0];else{for(r=i-1;"0"===e.charAt(r);r-=1)i-=1;for(i-=1,t.e=a-n-1,t.c=[],a=0;n<=i;n+=1)t.c[a]=+e.charAt(n),a+=1}return t}function y(e,t){var a=t.c,n=e.c,i=t.s,r=e.s,s=t.e,o=e.e;if(!a[0]||!n[0]){var u=void 0;return u=a[0]?i:n[0]?-r:0}if(i!==r)return i;var l=i<0;if(s!==o)return s>o^l?1:-1;for(i=-1,s=a.length,o=n.length,r=s<o?s:o,i+=1;i<r;i+=1)if(a[i]!==n[i])return a[i]>n[i]^l?1:-1;var c=void 0;return c=s===o?0:s>o^l?1:-1}function w(e,t){e=e.toString(),e=e.replace(",",".");var a=N(t.vMin),n=N(t.vMax),i=N(e),r=void 0;switch(t.oLimits){case"floor":r=[y(a,i)>-1,!0];break;case"ceiling":r=[!0,y(n,i)<1];break;case"ignore":r=[!0,!0];break;default:r=[y(a,i)>-1,y(n,i)<1]}return r}function x(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/\[/g,"\\[").replace(/]/g,"\\]"),t="#"+t.replace(/(:|\.)/g,"\\$1")),e(t)}function b(e,a,n){var i=e.data("autoNumeric");i||(i={},e.data("autoNumeric",i));var r=i.holder;return(t(r)&&a||n)&&(r=new C(e.get(0),a),i.holder=r),r}function D(e){return e.oDec=e.mDec,e.oPad=e.aPad,e.oBracket=e.nBracket,e.oSep=e.aSep,e.oSign=e.aSign,e}function k(e){for(var t=e+"=",a=document.cookie.split(";"),n="",i=0;i<a.length;i+=1){for(n=a[i];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null}function A(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}function O(e,a,n){if(a.aStor){var i=""===e[0].name||t(e[0].name)?"AUTO_"+e[0].id:"AUTO_"+decodeURIComponent(e[0].name),r=void 0,s=void 0;if(A()===!1)switch(n){case"set":document.cookie=i+"="+a.rawValue+"; expires= ; path=/";break;case"wipe":r=new Date,r.setTime(r.getTime()+-864e5),s="; expires="+r.toUTCString(),document.cookie=i+"='' ;"+s+"; path=/";break;case"get":return k(i)}else switch(n){case"set":sessionStorage.setItem(i,a.rawValue);break;case"wipe":sessionStorage.removeItem(i);break;case"get":return sessionStorage.getItem(i)}}}function C(t,a){this.settings=a,this.that=t,this.$that=e(t),this.formatted=!1,this.settingsClone=o(this.$that,this.settings),this.value=t.value}function B(e,t){return new CustomEvent(e,{detail:t,bubbles:!1,cancelable:!1})}function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return document.dispatchEvent(B(e,t))}var P={Backspace:8,Tab:9,Enter:13,Shift:16,Ctrl:17,Alt:18,PauseBreak:19,CapsLock:20,Esc:27,Space:32,PageUp:33,PageDown:34,End:35,Home:36,LeftArrow:37,UpArrow:38,RightArrow:39,DownArrow:40,Insert:45,Delete:46,num0:48,num1:49,num2:50,num3:51,num4:52,num5:53,num6:54,num7:55,num8:56,num9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,Windows:91,RightClick:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,MultiplyNumpad:106,PlusNumpad:107,MinusNumpad:109,DotNumpad:110,SlashNumpad:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NumLock:144,ScrollLock:145,MyComputer:182,MyCalculator:183,Semicolon:186,Equal:187,Comma:188,Hyphen:189,Dot:190,Slash:191,Backquote:192,LeftBracket:219,Backslash:220,RightBracket:221,Quote:222,Command:224};C.prototype={init:function(e){this.value=this.that.value,this.settingsClone=o(this.$that,this.settings),this.ctrlKey=e.ctrlKey,this.cmdKey=e.metaKey,this.shiftKey=e.shiftKey,this.selection=a(this.that),"keydown"!==e.type&&"keyup"!==e.type||(this.kdCode=e.keyCode),this.which=e.which,this.processed=!1,this.formatted=!1},setSelection:function(e,a,i){e=Math.max(e,0),a=Math.min(a,this.that.value.length),this.selection={start:e,end:a,length:a-e},(t(i)||i)&&n(this.that,e,a)},setPosition:function(e,t){this.setSelection(e,e,t)},getBeforeAfter:function(){var e=this.value,t=e.substring(0,this.selection.start),a=e.substring(this.selection.end,e.length);return[t,a]},getBeforeAfterStriped:function(){var e=this.settingsClone,t=this.getBeforeAfter(),a=_slicedToArray(t,2),n=a[0],i=a[1];return n=u(n,this.settingsClone),i=u(i,this.settingsClone),e.trailingNegative&&n.indexOf("-")===-1&&(n="-"+n,i="-"===i?"":i),e.trailingNegative=!1,[n,i]},normalizeParts:function(e,t){var a=this.settingsClone;if(e=u(e,a),t=u(t,a),a.trailingNegative&&e.indexOf("-")===-1&&(e="-"+e,a.trailingNegative=!1),""!==e&&e!==a.aNeg||"deny"!==a.lZero||t>""&&(t=t.replace(/^0*(\d)/,"$1")),this.newValue=e+t,a.aDec){var n=this.newValue.match(new RegExp("^"+a.aNegRegAutoStrip+"\\"+a.aDec));n&&(e=e.replace(n[1],n[1]+"0"),this.newValue=e+t)}return[e,t]},setValueParts:function(e,t,a){var n=this.settingsClone,i=this.normalizeParts(e,t),r=w(this.newValue,n),s=_slicedToArray(r,2),o=s[0],u=s[1],l=i[0].length;if(this.newValue=i.join(""),o&&u){this.newValue=S(this.newValue,n,a);var c=this.newValue.indexOf(",")!==-1?this.newValue.replace(",","."):this.newValue;return""===c||c===n.aNeg?n.rawValue="":n.rawValue=c,l>this.newValue.length&&(l=this.newValue.length),this.value=this.newValue,this.setPosition(l,!1),!0}return o?u||this.$that.trigger("autoNumeric:maxExceeded"):this.$that.trigger("autoNumeric:minExceeded"),!1},signPosition:function(){var e=this.settingsClone,t=e.aSign,a=this.that;if(t){var n=t.length;if("p"===e.pSign){var i=e.aNeg&&a.value&&a.value.charAt(0)===e.aNeg;return i?[1,n+1]:[0,n]}var r=a.value.length;return[r-n,r]}return[1e3,-1]},expandSelectionOnSign:function(e){var t=this.signPosition(),a=this.selection;a.start<t[1]&&a.end>t[0]&&((a.start<t[0]||a.end>t[1])&&this.value.substring(Math.max(a.start,t[0]),Math.min(a.end,t[1])).match(/^\s*$/)?a.start<t[0]?this.setSelection(a.start,t[0],e):this.setSelection(t[1],a.end,e):this.setSelection(Math.min(a.start,t[0]),Math.max(a.end,t[1]),e))},checkPaste:function(){if(!t(this.valuePartsBeforePaste)){var e=this.valuePartsBeforePaste,a=this.getBeforeAfter(),n=_slicedToArray(a,2),i=n[0],r=n[1];delete this.valuePartsBeforePaste;var s=i.substr(0,e[0].length)+u(i.substr(e[0].length),this.settingsClone);this.setValueParts(s,r,"paste")||(this.value=e.join(""),this.setPosition(e[0].length,!1))}},skipAlways:function(e){var a=this.kdCode,i=this.which,r=this.ctrlKey,s=this.cmdKey,o=this.shiftKey;if((r||s)&&"keyup"===e.type&&!t(this.valuePartsBeforePaste)||o&&a===P.Insert)return this.checkPaste(),!1;if(a>=P.F1&&a<=P.F12||a>=P.Windows&&a<=P.RightClick||a>=P.Tab&&a<P.Space||a<P.Backspace&&(0===i||i===a)||a===P.NumLock||a===P.ScrollLock||a===P.Insert||a===P.Command)return!0;if((r||s)&&a===P.a){if(this.settings.sNumber){e.preventDefault();var u=this.that.value.length,l=this.settings.aSign.length,c=this.that.value.indexOf("-")===-1?0:1,g=this.settings.aSuffix.length,h=this.settings.pSign,f=this.settings.pNeg,p=void 0;p="s"===h?0:"l"===f&&1===c&&l>0?l+1:l;var d=void 0;if("p"===h)d=u-g;else switch(f){case"l":d=u-(g+l);break;case"r":d=l>0?u-(l+c+g):u-(l+g);break;default:d=u-(l+g)}n(this.that,p,d)}return!0}if((r||s)&&(a===P.c||a===P.v||a===P.x))return"keydown"===e.type&&this.expandSelectionOnSign(),a!==P.v&&a!==P.Insert||("keydown"===e.type||"keypress"===e.type?t(this.valuePartsBeforePaste)&&(this.valuePartsBeforePaste=this.getBeforeAfter()):this.checkPaste()),"keydown"===e.type||"keypress"===e.type||a===P.c;if(r||s)return!0;if(a===P.LeftArrow||a===P.RightArrow){var m=this.settingsClone.aSep,v=this.settingsClone.aDec,S=this.selection.start,N=this.that.value;return"keydown"!==e.type||this.shiftKey||(a!==P.LeftArrow||N.charAt(S-2)!==m&&N.charAt(S-2)!==v?a!==P.RightArrow||N.charAt(S+1)!==m&&N.charAt(S+1)!==v||this.setPosition(S+1):this.setPosition(S-1)),!0}return a>=P.PageDown&&a<=P.DownArrow},processTrailing:function(e){var t=_slicedToArray(e,2),a=t[0],n=t[1],i=this.settingsClone;return"p"===i.pSign&&"s"===i.pNeg&&(8===this.kdCode?(i.caretFix=Boolean(this.selection.start>=this.value.indexOf(i.aSuffix)&&""!==i.aSuffix),"-"===this.value.charAt(this.selection.start-1)?a=a.substring(1):this.selection.start<=this.value.length-i.aSuffix.length&&(a=a.substring(0,a.length-1))):(i.caretFix=Boolean(this.selection.start>=this.value.indexOf(i.aSuffix)&&""!==i.aSuffix),this.selection.start>=this.value.indexOf(i.aSign)+i.aSign.length&&(n=n.substring(1,n.length)),a.indexOf("-")>-1&&"-"===this.value.charAt(this.selection.start)&&(a=a.substring(1)))),"s"===i.pSign&&"l"===i.pNeg&&(i.caretFix=Boolean(this.selection.start>=this.value.indexOf(i.aNeg)+i.aNeg.length),8===this.kdCode?this.selection.start===this.value.indexOf(i.aNeg)+i.aNeg.length&&this.value.indexOf(i.aNeg)!==-1?a=a.substring(1):"-"!==a&&(this.selection.start<=this.value.indexOf(i.aNeg)||this.value.indexOf(i.aNeg)===-1)&&(a=a.substring(0,a.length-1)):("-"===a[0]&&(n=n.substring(1)),this.selection.start===this.value.indexOf(i.aNeg)&&this.value.indexOf(i.aNeg)!==-1&&(a=a.substring(1)))),"s"===i.pSign&&"r"===i.pNeg&&(i.caretFix=Boolean(this.selection.start>=this.value.indexOf(i.aNeg)+i.aNeg.length),8===this.kdCode?this.selection.start===this.value.indexOf(i.aNeg)+i.aNeg.length?a=a.substring(1):"-"!==a&&this.selection.start<=this.value.indexOf(i.aNeg)-i.aSign.length?a=a.substring(0,a.length-1):""!==a&&this.value.indexOf(i.aNeg)===-1&&(a=a.substring(0,a.length-1)):(i.caretFix=Boolean(this.selection.start>=this.value.indexOf(i.aSign)&&""!==i.aSign),this.selection.start===this.value.indexOf(i.aNeg)&&(a=a.substring(1)),n=n.substring(1))),[a,n]},processAlways:function(){var e=this.settingsClone;if(this.kdCode===P.Backspace||this.kdCode===P.Delete){var t=void 0,a=void 0;if(this.selection.length){this.expandSelectionOnSign(!1);var n=this.getBeforeAfterStriped(),i=_slicedToArray(n,2);t=i[0],a=i[1],this.setValueParts(t,a)}else{var r=this.getBeforeAfterStriped(),s=_slicedToArray(r,2);if(t=s[0],a=s[1],""===t&&""===a&&(e.throwInput=!1),("p"===e.pSign&&"s"===e.pNeg||"s"===e.pSign&&("l"===e.pNeg||"r"===e.pNeg))&&this.value.indexOf("-")!==-1){var o=this.processTrailing([t,a]),u=_slicedToArray(o,2);t=u[0],a=u[1]}else 8===this.kdCode?t=t.substring(0,t.length-1):a=a.substring(1,a.length);this.setValueParts(t,a)}return!0}return!1},processKeypress:function(){var e=this.settingsClone,t=String.fromCharCode(this.which),a=this.getBeforeAfterStriped(),n=_slicedToArray(a,2),i=n[0],r=n[1];return e.throwInput=!0,t===e.aDec||e.altDec&&t===e.altDec||("."===t||","===t)&&this.kdCode===P.DotNumpad?!e.mDec||!e.aDec||(!!(e.aNeg&&r.indexOf(e.aNeg)>-1)||(i.indexOf(e.aDec)>-1||(r.indexOf(e.aDec)>0||(0===r.indexOf(e.aDec)&&(r=r.substr(1)),this.setValueParts(i+e.aDec,r,null),!0)))):"-"!==t&&"+"!==t||"-"!==e.aNeg?t>="0"&&t<="9"?(e.aNeg&&""===i&&r.indexOf(e.aNeg)>-1&&(i=e.aNeg,r=r.substring(1,r.length)),e.vMax<=0&&e.vMin<e.vMax&&this.value.indexOf(e.aNeg)===-1&&"0"!==t&&(i=e.aNeg+i),this.setValueParts(i+t,r,null),!0):(e.throwInput=!1,!0):!e||("p"===e.pSign&&"s"===e.pNeg||"s"===e.pSign&&"p"!==e.pNeg?(""===i&&r.indexOf(e.aNeg)>-1&&(i=e.aNeg,r=r.substring(1,r.length)),i="-"===i.charAt(0)||i.indexOf(e.aNeg)!==-1?i.substring(1,i.length):"-"===t?e.aNeg+i:i):(""===i&&r.indexOf(e.aNeg)>-1&&(i=e.aNeg,r=r.substring(1,r.length)),i=i.charAt(0)===e.aNeg?i.substring(1,i.length):"-"===t?e.aNeg+i:i),this.setValueParts(i,r,null),!0)},formatQuick:function(t){var a=this,n=this.settingsClone,i=this.value,r=t.keyCode,s=this.getBeforeAfterStriped(),o=_slicedToArray(s,1),u=o[0];if((""===n.aSep||""!==n.aSep&&i.indexOf(n.aSep)===-1)&&(""===n.aSign||""!==n.aSign&&i.indexOf(n.aSign)===-1)){var l=i.split(n.aDec),c="";l[0].indexOf("-")>-1&&(c="-",l[0]=l[0].replace("-",""),u=u.replace("-","")),""===c&&l[0].length>n.mIntPos&&"0"===u.charAt(0)&&(u=u.slice(1)),"-"===c&&l[0].length>n.mIntNeg&&"0"===u.charAt(0)&&(u=u.slice(1)),u=c+u}var g=d(this.value,this.settingsClone),h=g.length;if(g){var f=u.split("");("s"===n.pNeg||"s"===n.pSign&&"p"!==n.pNeg)&&"-"===f[0]&&""!==n.aNeg&&(f.shift(),"s"!==n.pSign||"l"!==n.pNeg||r!==P.Backspace&&this.kdCode!==P.Backspace&&r!==P.Delete&&this.kdCode!==P.Delete||!n.caretFix||(f.push("-"),n.caretFix=Boolean("keydown"===t.type)),"p"!==n.pSign||"s"!==n.pNeg||r!==P.Backspace&&this.kdCode!==P.Backspace&&r!==P.Delete&&this.kdCode!==P.Delete||!n.caretFix||(f.push("-"),n.caretFix=Boolean("keydown"===t.type)),"s"!==n.pSign||"r"!==n.pNeg||r!==P.Backspace&&this.kdCode!==P.Backspace&&r!==P.Delete&&this.kdCode!==P.Delete||!n.caretFix||!function(){var i=n.aSign.split(""),s=["\\","^","$",".","|","?","*","+","(",")","["],o=[];e.each(i,function(t,a){a=i[t],e.inArray(a,s)!==-1?o.push("\\"+a):o.push(a)}),r!==P.Backspace&&a.kdCode!==P.Backspace||o.push("-"),f.push(o.join("")),n.caretFix=Boolean("keydown"===t.type)}());for(var p=0;p<f.length;p++)f[p].match("\\d")||(f[p]="\\"+f[p]);var m=new RegExp("^.*?"+f.join(".*?")),v=g.match(m);v?(h=v[0].length,(0===h&&g.charAt(0)!==n.aNeg||1===h&&g.charAt(0)===n.aNeg)&&n.aSign&&"p"===n.pSign&&(h=this.settingsClone.aSign.length+("-"===g.charAt(0)?1:0))):(n.aSign&&"s"===n.pSign&&(h-=n.aSign.length),n.aSuffix&&(h-=n.aSuffix.length))}this.that.value=g,this.setPosition(h),this.formatted=!0}};var M={init:function(t){return this.each(function(){var a=e(this),r=a.data(),s=a.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])"),o=a.data("autoNumeric");if("object"===("undefined"==typeof o?"undefined":_typeof(o)))return this;o=e.extend({},e.fn.autoNumeric.defaults,r,t,{onOff:!1,runOnce:!1,rawValue:"",trailingNegative:!1,caretFix:!1,throwInput:!0,strip:!0,tagList:["b","caption","cite","code","dd","del","div","dfn","dt","em","h1","h2","h3","h4","h5","h6","ins","kdb","label","li","option","output","p","q","s","sample","span","strong","td","th","u","const"]}),o.aDec===o.aSep&&i("autoNumeric will not function properly when the decimal character aDec ["+o.aDec+"] and the thousand separator aSep ["+o.aSep+"] are the same character",o.debug),e.each(o,function(e,t){"true"!==t&&"false"!==t||(o[e]=Boolean("true"===t)),"number"==typeof t&&"aScale"!==e&&(o[e]=t.toString())}),null!==o.aScale&&(o.scaleFactor=+o.aScale[0],o.scaleDecimal=o.aScale[1]?+o.aScale[1]:null,o.scaleSuffix=o.aScale[2]?o.aScale[2]:""),a.data("autoNumeric",o),o=D(o);var c=b(a,o);if(s||"input"!==a.prop("tagName").toLowerCase()||i('The input type "'+a.prop("type")+'" is not supported by autoNumeric',o.debug),e.inArray(a.prop("tagName").toLowerCase(),o.tagList)===-1&&"input"!==a.prop("tagName").toLowerCase()&&i("The <"+a.prop("tagName").toLowerCase()+"> tag is not supported by autoNumeric",o.debug),o.aDec===o.aSep&&i("autoNumeric will not function properly when the decimal character aDec ["+o.aDec+"] and the thousand separator aSep ["+o.aSep+"] are the same character",o.debug),o.eDec<o.mDec&&null!==o.eDec&&i("autoNumeric will not function properly when the extended decimal places eDec ["+o.eDec+"] is greater than the mDec ["+o.mDec+"] value",o.debug),o.runOnce===!1&&o.aForm){var g=!0;if(s){if(o.anDefault&&o.anDefault.toString()!==a.val()||null===o.anDefault&&""!==a.val()&&a.val()!==a.attr("value")||""!==a.val()&&"hidden"===a.attr("type")&&!e.isNumeric(a.val().replace(",","."))){if(o.eDec&&o.aStor&&(o.rawValue=O(a,o,"get")),o.aScale&&o.aStor&&(o.rawValue=O(a,o,"get")),!o.aStor){var m=void 0;null!==o.nBracket&&""!==o.aNeg?(o.onOff=!0,m=l(a.val(),o)):m=a.val(),o.rawValue=("s"===o.pNeg||"s"===o.pSign&&"p"!==o.pNeg)&&""!==o.aNeg&&a.val().indexOf("-")>-1?"-"+u(m,o):u(m,o)}g=!1}var S=a.val();if(""===S)switch(o.wEmpty){case"focus":g=!1;break;case"always":a.val(o.aSign),g=!1;break;case"zero":a.autoNumeric("set","0"),g=!1}else g&&S===a.attr("value")&&a.autoNumeric("set",S)}e.inArray(a.prop("tagName").toLowerCase(),o.tagList)!==-1&&""!==a.text()&&(null!==o.anDefault?o.anDefault===a.text()&&a.autoNumeric("set",a.text()):a.autoNumeric("set",a.text()))}o.runOnce=!0,s&&(a.on("focusin.autoNumeric",function(){c=b(a);var e=c.settingsClone;e.onOff=!0,null!==e.nBracket&&""!==e.aNeg&&a.val(l(a.val(),e)),e.nSep===!0&&(e.aSep="",e.aSign=""),e.eDec?(e.mDec=e.eDec,a.autoNumeric("set",e.rawValue)):e.aScale?(e.mDec=e.oDec,a.autoNumeric("set",e.rawValue)):u(a.val(),e)!==e.rawValue&&a.autoNumeric("set",u(a.val(),e)),c.inVal=a.val(),c.lastVal=a.val();var t=p(c.inVal,e,!0);null!==t&&""!==t&&"focus"===e.wEmpty&&a.val(t)}),a.on("keydown.autoNumeric",function(e){return c=b(a),c.that.readOnly?(c.processed=!0,!0):(c.init(e),c.skipAlways(e)?(c.processed=!0,!0):c.processAlways()?(c.processed=!0,c.formatQuick(e),a.val()!==c.lastVal&&c.settingsClone.throwInput&&a.trigger("input"),c.lastVal=a.val(),c.settingsClone.throwInput=!0,e.preventDefault(),!1):(c.formatted=!1,!0))}),a.on("keypress.autoNumeric",function(e){if(!e.shiftKey||e.keyCode!==P.Insert){c=b(a);var t=c.processed;return c.init(e),!!c.skipAlways(e)||(t?(e.preventDefault(),!1):c.processAlways()||c.processKeypress()?(c.formatQuick(e),a.val()!==c.lastVal&&c.settingsClone.throwInput&&a.trigger("input"),c.lastVal=a.val(),c.settingsClone.throwInput=!0,void e.preventDefault()):void(c.formatted=!1))}}),a.on("keyup.autoNumeric",function(e){c=b(a),c.init(e);var t=c.skipAlways(e),i=c.kdCode;return c.kdCode=0,delete c.valuePartsBeforePaste,a[0].value===c.settingsClone.aSign?"s"===c.settingsClone.pSign?n(this,0,0):n(this,c.settingsClone.aSign.length,c.settingsClone.aSign.length):i===P.Tab&&n(this,0,a.val().length),a[0].value===c.settingsClone.aSuffix&&n(this,0,0),""===c.settingsClone.rawValue&&""!==c.settingsClone.aSign&&""!==c.settingsClone.aSuffix&&n(this,0,0),null!==c.settingsClone.eDec&&c.settingsClone.aStor&&O(a,o,"set"),!!t||(""===this.value||void(c.formatted||c.formatQuick(e)))}),a.on("focusout.autoNumeric",function(){c=b(a);var e=a.val(),t=e,n=c.settingsClone;if(n.onOff=!1,n.aStor&&O(a,n,"set"),n.nSep===!0&&(n.aSep=n.oSep,n.aSign=n.oSign),null!==n.eDec&&(n.mDec=n.oDec,n.aPad=n.oPad,n.nBracket=n.oBracket),e=u(e,n),""!==e){n.trailingNegative&&(e="-"+e,n.trailingNegative=!1);var i=w(e,n),r=_slicedToArray(i,2),s=r[0],o=r[1];null===p(e,n)&&s&&o?(e=h(e,n.aDec,n.aNeg),n.rawValue=e,n.aScale&&(e/=n.scaleFactor,e=e.toString()),n.mDec=n.aScale&&n.aScale[1]?+n.scaleDecimal:n.mDec,e=v(e,n),e=f(e,n)):(s||a.trigger("autoNumeric:minExceeded"),o||a.trigger("autoNumeric:maxExceeded"),e=n.rawValue)}else"zero"===n.wEmpty?(n.rawValue="0",e=v("0",n)):n.rawValue="";var l=p(e,n,!1);null===l&&(l=d(e,n)),l!==t&&(l=n.scaleSuffix?l+n.scaleSuffix:l,a.val(l)),l!==c.inVal&&(a.change(),delete c.inVal)}),a.on("paste",function(e){function t(e){return u(e,c.settingsClone).replace(c.settingsClone.aDec,".")}function n(e){return""!==e&&!isNaN(e)}e.preventDefault(),c=b(a);var i=a.autoNumeric("get"),r=this.value||"",s=this.selectionStart||0,o=this.selectionEnd||0,l=r.substring(0,s),g=r.substring(o,r.length),h=t(e.originalEvent.clipboardData.getData("text/plain"));if(n(h)){var f=t(l+Number(h).valueOf()+g);n(f)&&Number(i).valueOf()!==Number(f).valueOf()&&(a.autoNumeric("set",f),a.trigger("input"))}else this.selectionStart=o}),a.closest("form").on("submit.autoNumeric",function(){if(c=b(a)){var e=c.settingsClone;e.unSetOnSubmit&&a.val(e.rawValue)}}))})},destroy:function(){return e(this).each(function(){var t=x(e(this)),a=t.data("autoNumeric");"object"===("undefined"==typeof a?"undefined":_typeof(a))&&(t.val(""),O(t,a,"wipe"),t.removeData("autoNumeric"),t.off(".autoNumeric"))})},wipe:function(){return e(this).each(function(){var t=x(e(this)),a=t.data("autoNumeric");"object"===("undefined"==typeof a?"undefined":_typeof(a))&&(t.val(""),a.rawValue="",O(t,a,"wipe"))})},update:function(t){return e(this).each(function(){var a=x(e(this)),n=a.data("autoNumeric");"object"!==("undefined"==typeof n?"undefined":_typeof(n))&&i('Initializing autoNumeric is required prior to calling the "update" method',!0);var r=a.autoNumeric("get");if(n=e.extend(n,t),null!==n.aScale&&(n.scaleFactor=+n.aScale[0],n.scaleDecimal=n.aScale[1]?+n.aScale[1]:null,n.scaleSuffix=n.aScale[2]?n.aScale[2]:""),n=D(n),b(a,n,!0),n.aDec===n.aSep&&i('autoNumeric will not function properly when the decimal character aDec: "'+n.aDec+'" and thousand separator aSep: "'+n.aSep+'" are the same character',n.debug),a.data("autoNumeric",n),""!==a.val()||""!==a.text())return a.autoNumeric("set",r)})},set:function(a){return e(this).each(function(){if(null!==a&&!t(a)){var n=x(e(this)),r=n.data("autoNumeric"),s=n.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])"),o=a.toString();if("object"!==("undefined"==typeof r?"undefined":_typeof(r))&&i('Initializing autoNumeric is required prior to calling the "set" method',!0),o=c(o),!e.isNumeric(Number(o)))return i('The value "'+o+'" being "set" is not numeric and has caused a error to be thrown',r.debug),n.val("");if(""===o)return n.val("");var u=w(o,r),l=_slicedToArray(u,2),g=l[0],h=l[1];if(!g||!h){r.rawValue="",O(n,r,"wipe");var p=o;return o="",g||n.trigger("autoNumeric:minExceeded"),h||n.trigger("autoNumeric:maxExceeded"),i("The value ["+p+"] being set falls outside the vMin ["+r.vMin+"] and vMax ["+r.vMax+"] settings for this element",r.debug),n.val("")}return!s||r.eDec&&r.aScale||(r.rawValue=o),(s||e.inArray(n.prop("tagName").toLowerCase(),r.tagList)!==-1)&&(r.aScale&&!r.onOff&&(o/=r.scaleFactor,o=o.toString(),r.mDec=r.scaleDecimal),o=v(o,r),null===r.eDec&&null===r.aScale&&(r.rawValue=o),o=f(o,r),o=d(o,r)),!r.aStor||null===r.eDec&&null===r.aScale||O(n,r,"set"),!r.onOff&&r.scaleSuffix&&(o+=r.scaleSuffix),s?n.val(o):e.inArray(n.prop("tagName").toLowerCase(),r.tagList)!==-1&&n.text(o)}})},unSet:function(){return e(this).each(function(){var t=x(e(this)),a=t.data("autoNumeric");"object"===("undefined"==typeof a?"undefined":_typeof(a))&&(a.onOff=!0,t.val(t.autoNumeric("get")))})},reSet:function(){return e(this).each(function(){var t=x(e(this)),a=t.data("autoNumeric");"object"===("undefined"==typeof a?"undefined":_typeof(a))&&t.autoNumeric("set",t.val())})},get:function(){var t=x(e(this)),a=t.data("autoNumeric"),n=t.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])"),r="";if("object"!==("undefined"==typeof a?"undefined":_typeof(a))&&i('Initializing autoNumeric is required prior to calling the "get" method',!0),n?r=t.eq(0).val():e.inArray(t.prop("tagName").toLowerCase(),a.tagList)!==-1?r=t.eq(0).text():i('The "<'+t.prop("tagName").toLowerCase()+'>" tag is not supported by autoNumeric',a.debug),a.eDec||a.aScale)r=a.rawValue;else{if(!/\d/.test(r)&&0!==Number(r)&&"focus"===a.wEmpty)return"";""!==r&&null!==a.nBracket&&(a.onOff=!0,r=l(r,a)),(a.runOnce||a.aForm===!1)&&(r=u(r,a)),r=h(r,a.aDec,a.aNeg)}return 0===Number(r)&&"keep"!==a.lZero&&(r="0"),a.localeOutput&&(r=g(r,a.localeOutput)),r},_getStringOrArray:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=x(e(this)),n=e("form").index(a),i=e("form:eq("+n+")")[0],r=[],s=[],o=/^(?:submit|button|image|reset|file)$/i,u=/^(?:input|select|textarea|keygen)/i,l=/^(?:checkbox|radio)$/i,c=/^(?:button|checkbox|color|date|datetime|datetime-local|email|file|image|month|number|password|radio|range|reset|search|submit|time|url|week)/i,g=0;if(e.each(i,function(e,t){""===t.name||!u.test(t.localName)||o.test(t.type)||t.disabled||!t.checked&&l.test(t.type)?s.push(-1):(s.push(g),g++)}),g=0,e.each(i,function(e,t){"input"!==t.localName||""!==t.type&&"text"!==t.type&&"hidden"!==t.type&&"tel"!==t.type?(r.push(-1),"input"===t.localName&&c.test(t.type)&&g++):(r.push(g),g++)}),t){var h=a.serializeArray();return e.each(h,function(t,a){var i=e.inArray(t,s);if(i>-1&&r[i]>-1){var o=e("form:eq("+n+") input:eq("+r[i]+")"),u=o.data("autoNumeric");"object"===("undefined"==typeof u?"undefined":_typeof(u))&&(a.value=o.autoNumeric("get",u.localeOutput).toString())}}),h}var f=function(){var t=a.serialize(),i=t.split("&");return e.each(i,function(t,a){a=i[t].split("=");var o=e.inArray(t,s);if(o>-1&&r[o]>-1){var u=e("form:eq("+n+") input:eq("+r[o]+")"),l=u.data("autoNumeric");"object"===("undefined"==typeof l?"undefined":_typeof(l))&&null!==a[1]&&(a[1]=u.autoNumeric("get",l.localeOutput).toString(),i[t]=a.join("="))}}),{v:i.join("&")}}();if("object"===("undefined"==typeof f?"undefined":_typeof(f)))return f.v},getString:function(){this._getStringOrArray(!1)},getArray:function(){this._getStringOrArray(!0)},getSettings:function(){var t=x(e(this));return t.eq(0).data("autoNumeric")}};e.fn.autoNumeric=function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return M[e]?M[e].apply(this,a):"object"!==("undefined"==typeof e?"undefined":_typeof(e))&&e?void i('Method "'+e+'" is not supported by autoNumeric',!0):M.init.apply(this,a)},e.fn.autoNumeric.defaults={aSep:",",nSep:!1,dGroup:"3",
aDec:".",altDec:null,aSign:"",pSign:"p",pNeg:"l",aSuffix:"",oLimits:null,vMax:"9999999999999.99",vMin:"-9999999999999.99",mDec:null,eDec:null,aScale:null,aStor:!1,mRound:"s",aPad:!0,nBracket:null,wEmpty:"focus",lZero:"allow",aForm:!0,sNumber:!1,anDefault:null,unSetOnSubmit:!1,localeOutput:null,debug:!1},e.fn.autoFormat=function(t,a){var n=e.extend({},e.fn.autoNumeric.defaults,{strip:!1},a);if(t=t.toString(),t=c(t),Number(t)<0&&(n.aNeg="-"),null===n.mDec){var r=n.vMax.toString().split("."),o=n.vMin||0===n.vMin?n.vMin.toString().split("."):[];n.mDec=s(o,r)}var u=w(t,n),l=_slicedToArray(u,2),g=l[0],h=l[1];return g&&h||(V("autoFormat.autoNumeric","Range test failed"),i("The value ["+t+"] being set falls outside the vMin ["+n.vMin+"] and vMax ["+n.vMax+"] settings",n.debug)),t=v(t,n),t=f(t,n),t=d(t,n)},e.fn.autoUnformat=function(t,a){var n=e.extend({},e.fn.autoNumeric.defaults,{strip:!1},a),i="-0123456789\\"+n.aDec,r=new RegExp("[^"+i+"]","gi");return t=t.toString(),"-"===t.charAt(0)?n.aNeg="-":n.nBracket&&n.nBracket.split(",")[0]===t.charAt(0)&&(n.aNeg="-",n.onOff=!0,t=l(t,n)),t=t.replace(r,""),t=t.replace(",","."),n.localeOutput&&(t=g(t,n.localeOutput)),t},function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}return"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,void(window.CustomEvent=e))}()});