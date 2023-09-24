// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.0-esm/index.mjs";import{factory as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-lognormal@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function v(c,g,b){var x,y,w,G,P;if(!o(c)||d(c))throw new TypeError(u("0q36v,NI",c));if(!j(g))throw new TypeError(u("0q372,Go",g));if(arguments.length>2){if(!m(b))throw new TypeError(u("0q32V,FD",b));if(x=i({},b),h(x,"iter")){if(!l(x.iter))throw new TypeError(u("0q32t,G9","iter",x.iter))}else x.iter=p;w=a(c,g,x),void 0===x.prng&&!1!==x.copy&&(x.state=w.state)}else w=a(c,g),x={iter:p,state:w.state};return P=0,e(y={},"next",L),e(y,"return",N),x&&x.prng?(e(y,"seed",null),e(y,"seedLength",null),s(y,"state",n(null),r),e(y,"stateLength",null),e(y,"byteLength",null)):(t(y,"seed",q),t(y,"seedLength",E),s(y,"state",F,I),t(y,"stateLength",T),t(y,"byteLength",D)),e(y,"PRNG",w.PRNG),f&&e(y,f,R),y;function L(){return P+=1,G||P>x.iter?{done:!0}:{value:w(),done:!1}}function N(e){return G=!0,arguments.length?{value:e,done:!0}:{done:!0}}function R(){return v(c,g,x)}function q(){return w.PRNG.seed}function E(){return w.PRNG.seedLength}function T(){return w.PRNG.stateLength}function D(){return w.PRNG.byteLength}function F(){return w.PRNG.state}function I(e){w.PRNG.state=e}}export{v as default};
//# sourceMappingURL=index.mjs.map
