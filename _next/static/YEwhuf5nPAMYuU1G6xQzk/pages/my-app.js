(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),u=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,u=e.hasQuery;return n||a&&(void 0!==u&&u)}t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(u.AmpStateContext))}},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),u=r(n("Xuae")),o=n("lwAK"),i=n("FYa8"),l=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var s=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var u=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?u=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?u=!1:t.add(a.type);break;case"meta":for(var i=0,l=s.length;i<l;i++){var c=s[i];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?u=!1:n.add(c);else{var f=a.props[c],d=r[c]||new Set;d.has(f)?u=!1:(d.add(f),r[c]=d)}}}return u}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var p=u.default();function h(e){var t=e.children;return a.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}h.rewind=p.rewind,t.default=h},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.HeadManagerContext=a.createContext(null)},QRzk:function(e,t,n){"use strict";n.r(t);var r=n("8Kt/"),a=n.n(r),u=n("q1tI"),o=n.n(u),i=n("bT+T"),l=n("BWMX"),c=n("pbrG"),f=n("R9SF"),s=n("JumW"),d=n("+dxP"),p=n("1GHy"),h=n("CCUd"),v=n("3vKy"),m=o.a.createElement;t.default=function(){return m(i.a,{restrictWidth:!0},m(a.a,null,m("title",null,"My App - Next.js EUI Starter")),m(l.a,null,m(c.a,null,m(f.a,null,m(s.a,{size:"l"},m("h1",null,"My App's index page")))),m(d.a,null,m(p.a,null,m(h.a,null,m(s.a,null,m("h2",null,"Content title")))),m(v.a,null,"This is just an index page. Nothing special."))))}},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),a=n("qXWd"),u=n("i2R6"),o=n("tCBg"),i=n("T0f4"),l=n("48fX"),c=n("mPvQ");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){l(h,c);var s,p=(s=h,function(){var e,t=i(s);if(f()){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return o(this,e)});function h(e){var u;return r(this,h),u=p.call(this,e),d&&(t.add(a(u)),n(a(u))),u}return u(h,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(h,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(s.Component)}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},keiL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-app",function(){return n("QRzk")}])},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),u=n("kG2m");e.exports=function(e){return r(e)||a(e)||u()}},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}}},[["keiL",0,2,1,3,4]]]);