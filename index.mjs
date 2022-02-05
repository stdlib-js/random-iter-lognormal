/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-lognormal@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";var g=e,c=t,f=n,b=s,v=i,x=r,y=o.isPrimitive,P=m,w=d,N=l.isPrimitive,L=a.isPrimitive,G=u,R=p,E=h.factory,T=j;var V=function e(t,n,s){var i,r,o,m,d;if(!y(t)||P(t))throw new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+t+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+n+"`.");if(arguments.length>2){if(!w(s))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+s+"`.");if(i=x(s,1),G(i,"iter")){if(!N(i.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+i.iter+"`.")}else i.iter=R;o=E(t,n,i),void 0===i.prng&&!1!==i.copy&&(i.state=o.state)}else o=E(t,n),i={iter:R,state:o.state};return d=0,g(r={},"next",l),g(r,"return",a),i&&i.prng?(g(r,"seed",null),g(r,"seedLength",null),f(r,"state",b(null),v),g(r,"stateLength",null),g(r,"byteLength",null)):(c(r,"seed",p),c(r,"seedLength",h),f(r,"state",O,F),c(r,"stateLength",j),c(r,"byteLength",V)),g(r,"PRNG",o.PRNG),T&&g(r,T,u),r;function l(){return d+=1,m||d>i.iter?{done:!0}:{value:o(),done:!1}}function a(e){return m=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return e(t,n,i)}function p(){return o.PRNG.seed}function h(){return o.PRNG.seedLength}function j(){return o.PRNG.stateLength}function V(){return o.PRNG.byteLength}function O(){return o.PRNG.state}function F(e){o.PRNG.state=e}},O=V;export{O as default};
//# sourceMappingURL=index.mjs.map
