(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="151",jh=0,Ta=1,Yh=2,Oc=1,$h=2,ds=3,Vn=0,Me=1,je=2,Bn=0,Wi=1,Er=2,Ca=3,Pa=4,Zh=5,Ui=100,Jh=101,Kh=102,La=103,Ra=104,Qh=200,tu=201,eu=202,nu=203,Bc=204,kc=205,iu=206,su=207,ru=208,ou=209,au=210,lu=0,cu=1,hu=2,Bo=3,uu=4,du=5,fu=6,pu=7,sa=0,mu=1,gu=2,Rn=0,vu=1,_u=2,xu=3,yu=4,wu=5,Vc=300,ji=301,Yi=302,ko=303,Vo=304,Ir=306,Go=1e3,en=1001,Ho=1002,Le=1003,Ia=1004,jr=1005,We=1006,bu=1007,As=1008,hi=1009,Mu=1010,Su=1011,Gc=1012,Eu=1013,oi=1014,ai=1015,Ts=1016,Au=1017,Tu=1018,qi=1020,Cu=1021,nn=1023,Pu=1024,Lu=1025,ci=1026,$i=1027,Ru=1028,Iu=1029,Du=1030,Nu=1031,Fu=1033,Yr=33776,$r=33777,Zr=33778,Jr=33779,Da=35840,Na=35841,Fa=35842,za=35843,zu=36196,Ua=37492,Oa=37496,Ba=37808,ka=37809,Va=37810,Ga=37811,Ha=37812,Wa=37813,qa=37814,Xa=37815,ja=37816,Ya=37817,$a=37818,Za=37819,Ja=37820,Ka=37821,Kr=36492,Uu=36283,Qa=36284,tl=36285,el=36286,ui=3e3,ie=3001,Ou=3200,Bu=3201,Hc=0,ku=1,mn="srgb",Cs="srgb-linear",Wc="display-p3",Qr=7680,Vu=519,nl=35044,il="300 es",Wo=1035;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sl=1234567;const _s=Math.PI/180,Zi=180/Math.PI;function pi(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[o&255]+Ee[o>>8&255]+Ee[o>>16&255]+Ee[o>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function ge(o,t,e){return Math.max(t,Math.min(e,o))}function ra(o,t){return(o%t+t)%t}function Gu(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function Hu(o,t,e){return o!==t?(e-o)/(t-o):0}function xs(o,t,e){return(1-e)*o+e*t}function Wu(o,t,e,n){return xs(o,t,1-Math.exp(-e*n))}function qu(o,t=1){return t-Math.abs(ra(o,t*2)-t)}function Xu(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function ju(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function Yu(o,t){return o+Math.floor(Math.random()*(t-o+1))}function $u(o,t){return o+Math.random()*(t-o)}function Zu(o){return o*(.5-Math.random())}function Ju(o){o!==void 0&&(sl=o);let t=sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ku(o){return o*_s}function Qu(o){return o*Zi}function qo(o){return(o&o-1)===0&&o!==0}function td(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function qc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ed(o,t,e,n,i){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+n)/2),h=r((t+n)/2),d=s((t-n)/2),u=r((t-n)/2),f=s((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":o.set(a*h,l*d,l*u,a*c);break;case"YZY":o.set(l*u,a*h,l*d,a*c);break;case"ZXZ":o.set(l*d,l*u,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fs(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ie(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const rl={DEG2RAD:_s,RAD2DEG:Zi,generateUUID:pi,clamp:ge,euclideanModulo:ra,mapLinear:Gu,inverseLerp:Hu,lerp:xs,damp:Wu,pingpong:qu,smoothstep:Xu,smootherstep:ju,randInt:Yu,randFloat:$u,randFloatSpread:Zu,seededRandom:Ju,degToRad:Ku,radToDeg:Qu,isPowerOfTwo:qo,ceilPowerOfTwo:td,floorPowerOfTwo:qc,setQuaternionFromProperEuler:ed,normalize:Ie,denormalize:fs};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],y=i[4],x=i[7],M=i[2],E=i[5],R=i[8];return s[0]=r*v+a*_+l*M,s[3]=r*m+a*y+l*E,s[6]=r*p+a*x+l*R,s[1]=c*v+h*_+d*M,s[4]=c*m+h*y+d*E,s[7]=c*p+h*x+d*R,s[2]=u*v+f*_+g*M,s[5]=u*m+f*y+g*E,s[8]=u*p+f*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*s,f=c*s-r*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*r)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(to.makeScale(t,e)),this}rotate(t){return this.premultiply(to.makeRotation(-t)),this}translate(t,e){return this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const to=new Ht;function Xc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ps(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Xi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function eo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const nd=new Ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),id=new Ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function sd(o){return o.convertSRGBToLinear().applyMatrix3(id)}function rd(o){return o.applyMatrix3(nd).convertLinearToSRGB()}const od={[Cs]:o=>o,[mn]:o=>o.convertSRGBToLinear(),[Wc]:sd},ad={[Cs]:o=>o,[mn]:o=>o.convertLinearToSRGB(),[Wc]:rd},Fe={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Cs},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=od[t],i=ad[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}};let _i;class jc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Ps("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ps("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Xi(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xi(e[n]/255)*255):e[n]=Xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Yc{constructor(t=null){this.isSource=!0,this.uuid=pi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(no(i[r].image)):s.push(no(i[r]))}else s=no(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function no(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?jc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ld=0;class De extends Ki{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=en,i=en,s=We,r=As,a=nn,l=hi,c=De.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=pi(),this.name="",this.source=new Yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Go:t.x=t.x-Math.floor(t.x);break;case en:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Go:t.y=t.y-Math.floor(t.y);break;case en:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Vc;De.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,i=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(f+1)/2,M=(p+1)/2,E=(h+u)/4,R=(d+v)/4,T=(g+m)/4;return y>x&&y>M?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=R/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=T/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=R/s,i=T/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class di extends Ki{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:We,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $c extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cd extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let mi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],f=s[r+1],g=s[r+2],v=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let m=1-a;const p=l*u+c*f+h*g+d*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),E=Math.atan2(M,p*_);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const x=a*_;if(l=l*m+u*x,c=c*m+f*x,h=h*m+g*x,d=d*m+v*x,m===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],f=s[r+2],g=s[r+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=l*e+r*i-a*n,h=l*n+a*e-s*i,d=l*i+s*n-r*e,u=-s*e-r*n-a*i;return this.x=c*l+u*-s+h*-a-d*-r,this.y=h*l+u*-r+d*-s-c*-a,this.z=d*l+u*-a+c*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new D,ol=new mi;class Fs{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),xi.copy(t.boundingBox),xi.applyMatrix4(t.matrixWorld),this.union(xi);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,a=s.count;r<a;r++)yn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(yn)}else i.boundingBox===null&&i.computeBoundingBox(),xi.copy(i.boundingBox),xi.applyMatrix4(t.matrixWorld),this.union(xi)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),ks.subVectors(this.max,es),yi.subVectors(t.a,es),wi.subVectors(t.b,es),bi.subVectors(t.c,es),Dn.subVectors(wi,yi),Nn.subVectors(bi,wi),Zn.subVectors(yi,bi);let e=[0,-Dn.z,Dn.y,0,-Nn.z,Nn.y,0,-Zn.z,Zn.y,Dn.z,0,-Dn.x,Nn.z,0,-Nn.x,Zn.z,0,-Zn.x,-Dn.y,Dn.x,0,-Nn.y,Nn.x,0,-Zn.y,Zn.x,0];return!so(e,yi,wi,bi,ks)||(e=[1,0,0,0,1,0,0,0,1],!so(e,yi,wi,bi,ks))?!1:(Vs.crossVectors(Dn,Nn),e=[Vs.x,Vs.y,Vs.z],so(e,yi,wi,bi,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new D,new D,new D,new D,new D,new D,new D,new D],yn=new D,xi=new Fs,yi=new D,wi=new D,bi=new D,Dn=new D,Nn=new D,Zn=new D,es=new D,ks=new D,Vs=new D,Jn=new D;function so(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Jn.fromArray(o,s);const a=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const hd=new Fs,ns=new D,ro=new D;let zs=class{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);const e=ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(ro)),this.expandByPoint(ns.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const wn=new D,oo=new D,Gs=new D,Fn=new D,ao=new D,Hs=new D,lo=new D;let oa=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){oo.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(oo);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Gs),a=Fn.dot(this.direction),l=-Fn.dot(Gs),c=Fn.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*l-a,u=r*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(r*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(oo).addScaledVector(Gs,u),f}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,i,s){ao.subVectors(e,t),Hs.subVectors(n,t),lo.crossVectors(ao,Hs);let r=this.direction.dot(lo),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Fn.subVectors(this.origin,t);const l=a*this.direction.dot(Hs.crossVectors(Fn,Hs));if(l<0)return null;const c=a*this.direction.dot(ao.cross(Fn));if(c<0||l+c>r)return null;const h=-a*Fn.dot(lo);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class oe{constructor(){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,a,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Mi.setFromMatrixColumn(t,0).length(),s=1/Mi.setFromMatrixColumn(t,1).length(),r=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,f=r*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-r*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=v-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,f=r*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=r*l,f=r*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ud,t,dd)}lookAt(t,e,n){const i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),zn.crossVectors(n,ze),zn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),zn.crossVectors(n,ze)),zn.normalize(),Ws.crossVectors(ze,zn),i[0]=zn.x,i[4]=Ws.x,i[8]=ze.x,i[1]=zn.y,i[5]=Ws.y,i[9]=ze.y,i[2]=zn.z,i[6]=Ws.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],M=n[15],E=i[0],R=i[4],T=i[8],w=i[12],S=i[1],U=i[5],z=i[9],C=i[13],I=i[2],N=i[6],F=i[10],W=i[14],V=i[3],Y=i[7],tt=i[11],gt=i[15];return s[0]=r*E+a*S+l*I+c*V,s[4]=r*R+a*U+l*N+c*Y,s[8]=r*T+a*z+l*F+c*tt,s[12]=r*w+a*C+l*W+c*gt,s[1]=h*E+d*S+u*I+f*V,s[5]=h*R+d*U+u*N+f*Y,s[9]=h*T+d*z+u*F+f*tt,s[13]=h*w+d*C+u*W+f*gt,s[2]=g*E+v*S+m*I+p*V,s[6]=g*R+v*U+m*N+p*Y,s[10]=g*T+v*z+m*F+p*tt,s[14]=g*w+v*C+m*W+p*gt,s[3]=_*E+y*S+x*I+M*V,s[7]=_*R+y*U+x*N+M*Y,s[11]=_*T+y*z+x*F+M*tt,s[15]=_*w+y*C+x*W+M*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+v*(+e*l*f-e*c*u+s*r*u-i*r*f+i*c*h-s*l*h)+m*(+e*c*d-e*a*f-s*r*d+n*r*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=d*m*c-v*u*c+v*l*f-a*m*f-d*l*p+a*u*p,y=g*u*c-h*m*c-g*l*f+r*m*f+h*l*p-r*u*p,x=h*v*c-g*d*c+g*a*f-r*v*f-h*a*p+r*d*p,M=g*d*l-h*v*l-g*a*u+r*v*u+h*a*m-r*d*m,E=e*_+n*y+i*x+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=_*R,t[1]=(v*u*s-d*m*s-v*i*f+n*m*f+d*i*p-n*u*p)*R,t[2]=(a*m*s-v*l*s+v*i*c-n*m*c-a*i*p+n*l*p)*R,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*R,t[4]=y*R,t[5]=(h*m*s-g*u*s+g*i*f-e*m*f-h*i*p+e*u*p)*R,t[6]=(g*l*s-r*m*s-g*i*c+e*m*c+r*i*p-e*l*p)*R,t[7]=(r*u*s-h*l*s+h*i*c-e*u*c-r*i*f+e*l*f)*R,t[8]=x*R,t[9]=(g*d*s-h*v*s-g*n*f+e*v*f+h*n*p-e*d*p)*R,t[10]=(r*v*s-g*a*s+g*n*c-e*v*c-r*n*p+e*a*p)*R,t[11]=(h*a*s-r*d*s-h*n*c+e*d*c+r*n*f-e*a*f)*R,t[12]=M*R,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*m+e*d*m)*R,t[14]=(g*a*i-r*v*i-g*n*l+e*v*l+r*n*m-e*a*m)*R,t[15]=(r*d*i-h*a*i+h*n*l-e*d*l-r*n*u+e*a*u)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,h=r+r,d=a+a,u=s*c,f=s*h,g=s*d,v=r*h,m=r*d,p=a*d,_=l*c,y=l*h,x=l*d,M=n.x,E=n.y,R=n.z;return i[0]=(1-(v+p))*M,i[1]=(f+x)*M,i[2]=(g-y)*M,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(u+p))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(g+y)*R,i[9]=(m-_)*R,i[10]=(1-(u+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Mi.set(i[0],i[1],i[2]).length();const r=Mi.set(i[4],i[5],i[6]).length(),a=Mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],$e.copy(this);const c=1/s,h=1/r,d=1/a;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=d,$e.elements[9]*=d,$e.elements[10]*=d,e.setFromRotationMatrix($e),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r){const a=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(r+s)/(r-s),f=-2*r*s/(r-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,r){const a=this.elements,l=1/(e-t),c=1/(n-i),h=1/(r-s),d=(e+t)*l,u=(n+i)*c,f=(r+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new D,$e=new oe,ud=new D(0,0,0),dd=new D(1,1,1),zn=new D,Ws=new D,ze=new D,al=new oe,ll=new mi;class Dr{constructor(t=0,e=0,n=0,i=Dr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ge(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dr.DEFAULT_ORDER="XYZ";class Zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fd=0;const cl=new D,Si=new mi,bn=new oe,qs=new D,is=new D,pd=new D,md=new mi,hl=new D(1,0,0),ul=new D(0,1,0),dl=new D(0,0,1),gd={type:"added"},fl={type:"removed"};class Qt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const t=new D,e=new Dr,n=new mi,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ht}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(ul,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(ul,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(is,qs,this.up):bn.lookAt(qs,is,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(bn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(gd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(fl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Qt.DEFAULT_UP=new D(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new D,Mn=new D,co=new D,Sn=new D,Ei=new D,Ai=new D,pl=new D,ho=new D,uo=new D,fo=new D;let Xs=!1;class qe{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ze.subVectors(t,e),i.cross(Ze);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ze.subVectors(i,e),Mn.subVectors(n,e),co.subVectors(t,e);const r=Ze.dot(Ze),a=Ze.dot(Mn),l=Ze.dot(co),c=Mn.dot(Mn),h=Mn.dot(co),d=r*c-a*a;if(d===0)return s.set(-2,-1,-1);const u=1/d,f=(c*l-a*h)*u,g=(r*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,n,i,s,r,a,l){return Xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xs=!0),this.getInterpolation(t,e,n,i,s,r,a,l)}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,Sn),l.setScalar(0),l.addScaledVector(s,Sn.x),l.addScaledVector(r,Sn.y),l.addScaledVector(a,Sn.z),l}static isFrontFacing(t,e,n,i){return Ze.subVectors(n,e),Mn.subVectors(t,e),Ze.cross(Mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Ze.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xs=!0),qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;Ei.subVectors(i,n),Ai.subVectors(s,n),ho.subVectors(t,n);const l=Ei.dot(ho),c=Ai.dot(ho);if(l<=0&&c<=0)return e.copy(n);uo.subVectors(t,i);const h=Ei.dot(uo),d=Ai.dot(uo);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Ei,r);fo.subVectors(t,s);const f=Ei.dot(fo),g=Ai.dot(fo);if(g>=0&&f<=g)return e.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ai,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return pl.subVectors(s,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(pl,a);const p=1/(m+v+u);return r=v*p,a=u*p,e.copy(n).addScaledVector(Ei,r).addScaledVector(Ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let vd=0,gi=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Wi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Bc,this.blendDst=kc,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Je={h:0,s:0,l:0},js={h:0,s:0,l:0};function po(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}let Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Fe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Fe.workingColorSpace){if(t=ra(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=po(r,s,t+1/3),this.g=po(r,s,t),this.b=po(r,s,t-1/3)}return Fe.toWorkingColorSpace(this,i),this}setStyle(t,e=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Fe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Fe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=Jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=eo(t.r),this.g=eo(t.g),this.b=eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return Fe.fromWorkingColorSpace(Ae.copy(this),t),ge(Ae.r*255,0,255)<<16^ge(Ae.g*255,0,255)<<8^ge(Ae.b*255,0,255)<<0}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Fe.workingColorSpace){Fe.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,s=Ae.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Fe.workingColorSpace){return Fe.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=mn){Fe.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(Je),Je.h+=t,Je.s+=e,Je.l+=n,this.setHSL(Je.h,Je.s,Je.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Je),t.getHSL(js);const n=xs(Je.h,js.h,e),i=xs(Je.s,js.s,e),s=xs(Je.l,js.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ae=new Yt;Yt.NAMES=Jc;class Nr extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new D,Ys=new ct;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Kc extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qc extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _d=0;const He=new oe,mo=new Qt,Ti=new D,Ue=new Fs,ss=new Fs,ye=new D;class he extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xc(t)?Qc:Kc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Ue.min,ss.min),Ue.expandByPoint(ye),ye.addVectors(Ue.max,ss.max),Ue.expandByPoint(ye)):(Ue.expandByPoint(ss.min),Ue.expandByPoint(ss.max))}Ue.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ye.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(t,c),ye.add(Ti)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new D,h[S]=new D;const d=new D,u=new D,f=new D,g=new ct,v=new ct,m=new ct,p=new D,_=new D;function y(S,U,z){d.fromArray(i,S*3),u.fromArray(i,U*3),f.fromArray(i,z*3),g.fromArray(r,S*2),v.fromArray(r,U*2),m.fromArray(r,z*2),u.sub(d),f.sub(d),v.sub(g),m.sub(g);const C=1/(v.x*m.y-m.x*v.y);isFinite(C)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(C),_.copy(f).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(C),c[S].add(p),c[U].add(p),c[z].add(p),h[S].add(_),h[U].add(_),h[z].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let S=0,U=x.length;S<U;++S){const z=x[S],C=z.start,I=z.count;for(let N=C,F=C+I;N<F;N+=3)y(n[N+0],n[N+1],n[N+2])}const M=new D,E=new D,R=new D,T=new D;function w(S){R.fromArray(s,S*3),T.copy(R);const U=c[S];M.copy(U),M.sub(R.multiplyScalar(R.dot(U))).normalize(),E.crossVectors(T,U);const C=E.dot(h[S])<0?-1:1;l[S*4]=M.x,l[S*4+1]=M.y,l[S*4+2]=M.z,l[S*4+3]=C}for(let S=0,U=x.length;S<U;++S){const z=x[S],C=z.start,I=z.count;for(let N=C,F=C+I;N<F;N+=3)w(n[N+0]),w(n[N+1]),w(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,r=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new on(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new he,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new oe,hn=new oa,$s=new zs,gl=new D,Ci=new D,Pi=new D,Li=new D,go=new D,Zs=new D,Js=new ct,Ks=new ct,Qs=new ct,vl=new D,_l=new D,xl=new D,tr=new D,er=new D;class Xt extends Qt{constructor(t=new he,e=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(go.fromBufferAttribute(d,t),r?Zs.addScaledVector(go,h):Zs.addScaledVector(go.sub(e),h))}e.add(Zs)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),hn.copy(t.ray).recast(t.near),$s.containsPoint(hn.origin)===!1&&(hn.intersectSphere($s,gl)===null||hn.origin.distanceToSquared(gl)>(t.far-t.near)**2))||(ml.copy(s).invert(),hn.copy(t.ray).applyMatrix4(ml),n.boundingBox!==null&&hn.intersectsBox(n.boundingBox)===!1))return;let r;const a=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.attributes.normal,u=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=i[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,M=y;x<M;x+=3){const E=a.getX(x),R=a.getX(x+1),T=a.getX(x+2);r=nr(this,p,t,hn,c,h,d,E,R,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=nr(this,i,t,hn,c,h,d,_,y,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=i[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,M=y;x<M;x+=3){const E=x,R=x+1,T=x+2;r=nr(this,p,t,hn,c,h,d,E,R,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;r=nr(this,i,t,hn,c,h,d,_,y,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function xd(o,t,e,n,i,s,r,a){let l;if(t.side===Me?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===Vn,a),l===null)return null;er.copy(a),er.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(er);return c<e.near||c>e.far?null:{distance:c,point:er.clone(),object:o}}function nr(o,t,e,n,i,s,r,a,l,c){o.getVertexPosition(a,Ci),o.getVertexPosition(l,Pi),o.getVertexPosition(c,Li);const h=xd(o,t,e,n,Ci,Pi,Li,tr);if(h){i&&(Js.fromBufferAttribute(i,a),Ks.fromBufferAttribute(i,l),Qs.fromBufferAttribute(i,c),h.uv=qe.getInterpolation(tr,Ci,Pi,Li,Js,Ks,Qs,new ct)),s&&(Js.fromBufferAttribute(s,a),Ks.fromBufferAttribute(s,l),Qs.fromBufferAttribute(s,c),h.uv2=qe.getInterpolation(tr,Ci,Pi,Li,Js,Ks,Qs,new ct)),r&&(vl.fromBufferAttribute(r,a),_l.fromBufferAttribute(r,l),xl.fromBufferAttribute(r,c),h.normal=qe.getInterpolation(tr,Ci,Pi,Li,vl,_l,xl,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};qe.getNormal(Ci,Pi,Li,d.normal),h.face=d}return h}class Gn extends he{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function g(v,m,p,_,y,x,M,E,R,T,w){const S=x/R,U=M/T,z=x/2,C=M/2,I=E/2,N=R+1,F=T+1;let W=0,V=0;const Y=new D;for(let tt=0;tt<F;tt++){const gt=tt*U-C;for(let X=0;X<N;X++){const j=X*S-z;Y[v]=j*_,Y[m]=gt*y,Y[p]=I,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[p]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(X/R),d.push(1-tt/T),W+=1}}for(let tt=0;tt<T;tt++)for(let gt=0;gt<R;gt++){const X=u+gt+N*tt,j=u+gt+N*(tt+1),et=u+(gt+1)+N*(tt+1),ht=u+(gt+1)+N*tt;l.push(X,j,ht),l.push(j,et,ht),V+=6}a.addGroup(f,V,w),f+=V,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(o){const t={};for(let e=0;e<o.length;e++){const n=Ji(o[e]);for(const i in n)t[i]=n[i]}return t}function yd(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function th(o){return o.getRenderTarget()===null&&o.outputEncoding===ie?mn:Cs}const eh={clone:Ji,merge:Pe};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nh extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ke extends nh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Ii=1;class Md extends Qt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new ke(Ri,Ii,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new ke(Ri,Ii,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new ke(Ri,Ii,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const a=new ke(Ri,Ii,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new ke(Ri,Ii,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ke(Ri,Ii,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,a,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=Rn,t.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=f,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class ih extends De{constructor(t,e,n,i,s,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sd extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ih(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gn(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:Bn});s.uniforms.tEquirect.value=e;const r=new Xt(i,s),a=e.minFilter;return e.minFilter===As&&(e.minFilter=We),new Md(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const vo=new D,Ed=new D,Ad=new Ht;class Ln{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=vo.subVectors(n,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ad.getNormalMatrix(t),i=this.coplanarPoint(vo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new zs,ir=new D;class aa{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,s=new Ln,r=new Ln){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],f=n[9],g=n[10],v=n[11],m=n[12],p=n[13],_=n[14],y=n[15];return e[0].setComponents(a-i,d-l,v-u,y-m).normalize(),e[1].setComponents(a+i,d+l,v+u,y+m).normalize(),e[2].setComponents(a+s,d+c,v+f,y+p).normalize(),e[3].setComponents(a-s,d-c,v-f,y-p).normalize(),e[4].setComponents(a-r,d-h,v-g,y-_).normalize(),e[5].setComponents(a+r,d+h,v+g,y+_).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ir.x=i.normal.x>0?t.max.x:t.min.x,ir.y=i.normal.y>0?t.max.y:t.min.y,ir.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sh(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function Td(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=o.createBuffer();o.bindBuffer(h,f),o.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,f=h.updateRange;o.bindBuffer(d,c),f.count===-1?o.bufferSubData(d,0,u):(e?o.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):o.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:r,remove:a,update:l}}class Ls extends he{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*u-r;for(let y=0;y<c;y++){const x=y*d-s;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const y=_+c*p,x=_+c*(p+1),M=_+1+c*(p+1),E=_+1+c*p;f.push(y,x,E),f.push(x,M,E)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.widthSegments,t.heightSegments)}}var Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd="vec3 transformed = vec3( position );",Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Od=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$d=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ff=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_f=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Sf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ef=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$f=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ep=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Op=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$p=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ot={alphamap_fragment:Cd,alphamap_pars_fragment:Pd,alphatest_fragment:Ld,alphatest_pars_fragment:Rd,aomap_fragment:Id,aomap_pars_fragment:Dd,begin_vertex:Nd,beginnormal_vertex:Fd,bsdfs:zd,iridescence_fragment:Ud,bumpmap_pars_fragment:Od,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Gd,color_fragment:Hd,color_pars_fragment:Wd,color_pars_vertex:qd,color_vertex:Xd,common:jd,cube_uv_reflection_fragment:Yd,defaultnormal_vertex:$d,displacementmap_pars_vertex:Zd,displacementmap_vertex:Jd,emissivemap_fragment:Kd,emissivemap_pars_fragment:Qd,encodings_fragment:tf,encodings_pars_fragment:ef,envmap_fragment:nf,envmap_common_pars_fragment:sf,envmap_pars_fragment:rf,envmap_pars_vertex:of,envmap_physical_pars_fragment:_f,envmap_vertex:af,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:hf,fog_pars_fragment:uf,gradientmap_pars_fragment:df,lightmap_fragment:ff,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:vf,lights_toon_fragment:xf,lights_toon_pars_fragment:yf,lights_phong_fragment:wf,lights_phong_pars_fragment:bf,lights_physical_fragment:Mf,lights_physical_pars_fragment:Sf,lights_fragment_begin:Ef,lights_fragment_maps:Af,lights_fragment_end:Tf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Pf,logdepthbuf_pars_vertex:Lf,logdepthbuf_vertex:Rf,map_fragment:If,map_pars_fragment:Df,map_particle_fragment:Nf,map_particle_pars_fragment:Ff,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Uf,morphcolor_vertex:Of,morphnormal_vertex:Bf,morphtarget_pars_vertex:kf,morphtarget_vertex:Vf,normal_fragment_begin:Gf,normal_fragment_maps:Hf,normal_pars_fragment:Wf,normal_pars_vertex:qf,normal_vertex:Xf,normalmap_pars_fragment:jf,clearcoat_normal_fragment_begin:Yf,clearcoat_normal_fragment_maps:$f,clearcoat_pars_fragment:Zf,iridescence_pars_fragment:Jf,output_fragment:Kf,packing:Qf,premultiplied_alpha_fragment:tp,project_vertex:ep,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:op,shadowmap_pars_vertex:ap,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:hp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:vp,transmission_fragment:_p,transmission_pars_fragment:xp,uv_pars_fragment:yp,uv_pars_vertex:wp,uv_vertex:bp,worldpos_vertex:Mp,background_vert:Sp,background_frag:Ep,backgroundCube_vert:Ap,backgroundCube_frag:Tp,cube_vert:Cp,cube_frag:Pp,depth_vert:Lp,depth_frag:Rp,distanceRGBA_vert:Ip,distanceRGBA_frag:Dp,equirect_vert:Np,equirect_frag:Fp,linedashed_vert:zp,linedashed_frag:Up,meshbasic_vert:Op,meshbasic_frag:Bp,meshlambert_vert:kp,meshlambert_frag:Vp,meshmatcap_vert:Gp,meshmatcap_frag:Hp,meshnormal_vert:Wp,meshnormal_frag:qp,meshphong_vert:Xp,meshphong_frag:jp,meshphysical_vert:Yp,meshphysical_frag:$p,meshtoon_vert:Zp,meshtoon_frag:Jp,points_vert:Kp,points_frag:Qp,shadow_vert:tm,shadow_frag:em,sprite_vert:nm,sprite_frag:im},ut={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaTest:{value:0}}},gn={basic:{uniforms:Pe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Pe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Pe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Pe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Pe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Pe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Pe([ut.points,ut.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Pe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Pe([ut.common,ut.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Pe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Pe([ut.sprite,ut.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Pe([ut.common,ut.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Pe([ut.lights,ut.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};gn.physical={uniforms:Pe([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const sr={r:0,b:0,g:0};function sm(o,t,e,n,i,s,r){const a=new Yt(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(m,p){let _=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y));const x=o.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?v(a,l):y&&y.isColor&&(v(y,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ir)?(h===void 0&&(h=new Xt(new Gn(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Ji(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=y.encoding!==ie,(d!==y||u!==y.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=o.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Xt(new Ls(2,2),new vn({name:"BackgroundMaterial",uniforms:Ji(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.encoding!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(sr,th(o)),n.buffers.color.setClear(sr.r,sr.g,sr.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function rm(o,t,e,n){const i=o.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function d(I,N,F,W,V){let Y=!1;if(r){const tt=v(W,F,N);c!==tt&&(c=tt,f(c.object)),Y=p(I,W,F,V),Y&&_(I,W,F,V)}else{const tt=N.wireframe===!0;(c.geometry!==W.id||c.program!==F.id||c.wireframe!==tt)&&(c.geometry=W.id,c.program=F.id,c.wireframe=tt,Y=!0)}V!==null&&e.update(V,34963),(Y||h)&&(h=!1,T(I,N,F,W),V!==null&&o.bindBuffer(34963,e.get(V).buffer))}function u(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?o.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?o.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function v(I,N,F){const W=F.wireframe===!0;let V=a[I.id];V===void 0&&(V={},a[I.id]=V);let Y=V[N.id];Y===void 0&&(Y={},V[N.id]=Y);let tt=Y[W];return tt===void 0&&(tt=m(u()),Y[W]=tt),tt}function m(I){const N=[],F=[],W=[];for(let V=0;V<i;V++)N[V]=0,F[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:W,object:I,attributes:{},index:null}}function p(I,N,F,W){const V=c.attributes,Y=N.attributes;let tt=0;const gt=F.getAttributes();for(const X in gt)if(gt[X].location>=0){const et=V[X];let ht=Y[X];if(ht===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(ht=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(ht=I.instanceColor)),et===void 0||et.attribute!==ht||ht&&et.data!==ht.data)return!0;tt++}return c.attributesNum!==tt||c.index!==W}function _(I,N,F,W){const V={},Y=N.attributes;let tt=0;const gt=F.getAttributes();for(const X in gt)if(gt[X].location>=0){let et=Y[X];et===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));const ht={};ht.attribute=et,et&&et.data&&(ht.data=et.data),V[X]=ht,tt++}c.attributes=V,c.attributesNum=tt,c.index=W}function y(){const I=c.newAttributes;for(let N=0,F=I.length;N<F;N++)I[N]=0}function x(I){M(I,0)}function M(I,N){const F=c.newAttributes,W=c.enabledAttributes,V=c.attributeDivisors;F[I]=1,W[I]===0&&(o.enableVertexAttribArray(I),W[I]=1),V[I]!==N&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,N),V[I]=N)}function E(){const I=c.newAttributes,N=c.enabledAttributes;for(let F=0,W=N.length;F<W;F++)N[F]!==I[F]&&(o.disableVertexAttribArray(F),N[F]=0)}function R(I,N,F,W,V,Y){n.isWebGL2===!0&&(F===5124||F===5125)?o.vertexAttribIPointer(I,N,F,V,Y):o.vertexAttribPointer(I,N,F,W,V,Y)}function T(I,N,F,W){if(n.isWebGL2===!1&&(I.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const V=W.attributes,Y=F.getAttributes(),tt=N.defaultAttributeValues;for(const gt in Y){const X=Y[gt];if(X.location>=0){let j=V[gt];if(j===void 0&&(gt==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),gt==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const et=j.normalized,ht=j.itemSize,ft=e.get(j);if(ft===void 0)continue;const H=ft.buffer,Dt=ft.type,Nt=ft.bytesPerElement;if(j.isInterleavedBufferAttribute){const lt=j.data,Mt=lt.stride,it=j.offset;if(lt.isInstancedInterleavedBuffer){for(let K=0;K<X.locationSize;K++)M(X.location+K,lt.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let K=0;K<X.locationSize;K++)x(X.location+K);o.bindBuffer(34962,H);for(let K=0;K<X.locationSize;K++)R(X.location+K,ht/X.locationSize,Dt,et,Mt*Nt,(it+ht/X.locationSize*K)*Nt)}else{if(j.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)M(X.location+lt,j.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let lt=0;lt<X.locationSize;lt++)x(X.location+lt);o.bindBuffer(34962,H);for(let lt=0;lt<X.locationSize;lt++)R(X.location+lt,ht/X.locationSize,Dt,et,ht*Nt,ht/X.locationSize*lt*Nt)}}else if(tt!==void 0){const et=tt[gt];if(et!==void 0)switch(et.length){case 2:o.vertexAttrib2fv(X.location,et);break;case 3:o.vertexAttrib3fv(X.location,et);break;case 4:o.vertexAttrib4fv(X.location,et);break;default:o.vertexAttrib1fv(X.location,et)}}}}E()}function w(){z();for(const I in a){const N=a[I];for(const F in N){const W=N[F];for(const V in W)g(W[V].object),delete W[V];delete N[F]}delete a[I]}}function S(I){if(a[I.id]===void 0)return;const N=a[I.id];for(const F in N){const W=N[F];for(const V in W)g(W[V].object),delete W[V];delete N[F]}delete a[I.id]}function U(I){for(const N in a){const F=a[N];if(F[I.id]===void 0)continue;const W=F[I.id];for(const V in W)g(W[V].object),delete W[V];delete F[I.id]}}function z(){C(),h=!0,c!==l&&(c=l,f(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:x,disableUnusedAttributes:E}}function om(o,t,e,n){const i=n.isWebGL2;let s;function r(c){s=c}function a(c,h){o.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,f;if(i)u=o,f="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,c,h,d),e.update(h,s,d)}this.setMode=r,this.render=a,this.renderInstances=l}function am(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=o.getParameter(34930),u=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),v=o.getParameter(34921),m=o.getParameter(36347),p=o.getParameter(36348),_=o.getParameter(36349),y=u>0,x=r||t.has("OES_texture_float"),M=y&&x,E=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:E}}function lm(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Ln,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=o.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const _=s?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=h(g,u,y,f);for(let M=0;M!==y;++M)x[M]=e[M];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)r.copy(d[y]).applyMatrix4(_,a),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function cm(o){let t=new WeakMap;function e(r,a){return a===ko?r.mapping=ji:a===Vo&&(r.mapping=Yi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===ko||a===Vo)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Sd(l.height/2);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class hm extends nh{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,yl=[.125,.215,.35,.446,.526,.582],si=20,_o=new hm,wl=new Yt;let xo=null;const ii=(1+Math.sqrt(5))/2,Di=1/ii,bl=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,ii,Di),new D(0,ii,-Di),new D(Di,0,ii),new D(-Di,0,ii),new D(ii,Di,0),new D(-ii,Di,0)];class Ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){xo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xo),t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Ts,format:nn,encoding:ui,depthBuffer:!1},i=Sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=um(s)),this._blurMaterial=dm(s,t,e)}return i}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,n,i){const a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(wl),h.toneMapping=Rn,h.autoClear=!1;const f=new Nr({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),g=new Xt(new Gn,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(wl),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;rr(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ji||t.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,_o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=bl[(i-1)%bl.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Xt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*si-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):si;m>si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const p=[];let _=0;for(let R=0;R<si;++R){const T=R/v,w=Math.exp(-T*T/2);p.push(w),R===0?_+=w:R<m&&(_+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const x=this._sizeLods[i],M=3*x*(i>y-ki?i-y+ki:0),E=4*(this._cubeSize-x);rr(e,M,E,3*x,2*x),l.setRenderTarget(e),l.render(d,_o)}}function um(o){const t=[],e=[],n=[];let i=o;const s=o-ki+1+yl.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>o-ki?l=yl[r-o+ki-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,T=E>2?0:-1,w=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];_.set(w,v*g*E),y.set(u,m*g*E);const S=[E,E,E,E,E,E];x.set(S,p*g*E)}const M=new he;M.setAttribute("position",new on(_,v)),M.setAttribute("uv",new on(y,m)),M.setAttribute("faceIndex",new on(x,p)),t.push(M),i>ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sl(o,t,e){const n=new di(o,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function dm(o,t,e){const n=new Float32Array(si),i=new D(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function El(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Al(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fm(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ko||l===Vo,h=l===ji||l===Yi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Ml(o)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Ml(o));const u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function pm(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mm(o,t,e,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],34962)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const M=_[y+0],E=_[y+1],R=_[y+2];u.push(M,E,E,R,R,M)}}else{const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const M=y+0,E=y+1,R=y+2;u.push(M,E,E,R,R,M)}}const m=new(Xc(u)?Qc:Kc)(u,1);m.version=v;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function gm(o,t,e,n){const i=n.isWebGL2;let s;function r(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,f){o.drawElements(s,f,a,u*l),e.update(f,s,1)}function d(u,f,g){if(g===0)return;let v,m;if(i)v=o,m="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,f,a,u*l,g),e.update(f,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=d}function vm(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function _m(o,t){return o[0]-t[0]}function xm(o,t){return Math.abs(t[1])-Math.abs(o[1])}function ym(o,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new we,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==v){let N=function(){C.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var f=N;m!==void 0&&m.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let w=0;y===!0&&(w=1),x===!0&&(w=2),M===!0&&(w=3);let S=h.attributes.position.count*w,U=1;S>t.maxTextureSize&&(U=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const z=new Float32Array(S*U*4*v),C=new $c(z,S,U,v);C.type=ai,C.needsUpdate=!0;const I=w*4;for(let F=0;F<v;F++){const W=E[F],V=R[F],Y=T[F],tt=S*U*4*F;for(let gt=0;gt<W.count;gt++){const X=gt*I;y===!0&&(r.fromBufferAttribute(W,gt),z[tt+X+0]=r.x,z[tt+X+1]=r.y,z[tt+X+2]=r.z,z[tt+X+3]=0),x===!0&&(r.fromBufferAttribute(V,gt),z[tt+X+4]=r.x,z[tt+X+5]=r.y,z[tt+X+6]=r.z,z[tt+X+7]=0),M===!0&&(r.fromBufferAttribute(Y,gt),z[tt+X+8]=r.x,z[tt+X+9]=r.y,z[tt+X+10]=r.z,z[tt+X+11]=Y.itemSize===4?r.w:1)}}m={count:v,texture:C,size:new ct(S,U)},s.set(h,m),h.addEventListener("dispose",N)}let p=0;for(let y=0;y<u.length;y++)p+=u[y];const _=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(o,"morphTargetBaseInfluence",_),d.getUniforms().setValue(o,"morphTargetInfluences",u),d.getUniforms().setValue(o,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];n[h.id]=v}for(let x=0;x<g;x++){const M=v[x];M[0]=x,M[1]=u[x]}v.sort(xm);for(let x=0;x<8;x++)x<g&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(_m);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const M=a[x],E=M[0],R=M[1];E!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+x)!==m[E]&&h.setAttribute("morphTarget"+x,m[E]),p&&h.getAttribute("morphNormal"+x)!==p[E]&&h.setAttribute("morphNormal"+x,p[E]),i[x]=R,_+=R):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const y=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(o,"morphTargetBaseInfluence",y),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function wm(o,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const rh=new De,oh=new $c,ah=new cd,lh=new ih,Tl=[],Cl=[],Pl=new Float32Array(16),Ll=new Float32Array(9),Rl=new Float32Array(4);function Qi(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=Tl[i];if(s===void 0&&(s=new Float32Array(i),Tl[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function ve(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function _e(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Fr(o,t){let e=Cl[t];e===void 0&&(e=new Int32Array(t),Cl[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function bm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Mm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;o.uniform2fv(this.addr,t),_e(e,t)}}function Sm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;o.uniform3fv(this.addr,t),_e(e,t)}}function Em(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;o.uniform4fv(this.addr,t),_e(e,t)}}function Am(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Rl.set(n),o.uniformMatrix2fv(this.addr,!1,Rl),_e(e,n)}}function Tm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Ll.set(n),o.uniformMatrix3fv(this.addr,!1,Ll),_e(e,n)}}function Cm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Pl.set(n),o.uniformMatrix4fv(this.addr,!1,Pl),_e(e,n)}}function Pm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Lm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;o.uniform2iv(this.addr,t),_e(e,t)}}function Rm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;o.uniform3iv(this.addr,t),_e(e,t)}}function Im(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;o.uniform4iv(this.addr,t),_e(e,t)}}function Dm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Nm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;o.uniform2uiv(this.addr,t),_e(e,t)}}function Fm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;o.uniform3uiv(this.addr,t),_e(e,t)}}function zm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;o.uniform4uiv(this.addr,t),_e(e,t)}}function Um(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||rh,i)}function Om(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ah,i)}function Bm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lh,i)}function km(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||oh,i)}function Vm(o){switch(o){case 5126:return bm;case 35664:return Mm;case 35665:return Sm;case 35666:return Em;case 35674:return Am;case 35675:return Tm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Rm;case 35669:case 35673:return Im;case 5125:return Dm;case 36294:return Nm;case 36295:return Fm;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return km}}function Gm(o,t){o.uniform1fv(this.addr,t)}function Hm(o,t){const e=Qi(t,this.size,2);o.uniform2fv(this.addr,e)}function Wm(o,t){const e=Qi(t,this.size,3);o.uniform3fv(this.addr,e)}function qm(o,t){const e=Qi(t,this.size,4);o.uniform4fv(this.addr,e)}function Xm(o,t){const e=Qi(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function jm(o,t){const e=Qi(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Ym(o,t){const e=Qi(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function $m(o,t){o.uniform1iv(this.addr,t)}function Zm(o,t){o.uniform2iv(this.addr,t)}function Jm(o,t){o.uniform3iv(this.addr,t)}function Km(o,t){o.uniform4iv(this.addr,t)}function Qm(o,t){o.uniform1uiv(this.addr,t)}function tg(o,t){o.uniform2uiv(this.addr,t)}function eg(o,t){o.uniform3uiv(this.addr,t)}function ng(o,t){o.uniform4uiv(this.addr,t)}function ig(o,t,e){const n=this.cache,i=t.length,s=Fr(e,i);ve(n,s)||(o.uniform1iv(this.addr,s),_e(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||rh,s[r])}function sg(o,t,e){const n=this.cache,i=t.length,s=Fr(e,i);ve(n,s)||(o.uniform1iv(this.addr,s),_e(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||ah,s[r])}function rg(o,t,e){const n=this.cache,i=t.length,s=Fr(e,i);ve(n,s)||(o.uniform1iv(this.addr,s),_e(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||lh,s[r])}function og(o,t,e){const n=this.cache,i=t.length,s=Fr(e,i);ve(n,s)||(o.uniform1iv(this.addr,s),_e(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||oh,s[r])}function ag(o){switch(o){case 5126:return Gm;case 35664:return Hm;case 35665:return Wm;case 35666:return qm;case 35674:return Xm;case 35675:return jm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Km;case 5125:return Qm;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}class lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Vm(e.type)}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=ag(e.type)}}class hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function Il(o,t){o.seq.push(t),o.map[t.id]=t}function ug(o,t,e){const n=o.name,i=n.length;for(yo.lastIndex=0;;){const s=yo.exec(n),r=yo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Il(e,c===void 0?new lg(a,o,t):new cg(a,o,t));break}else{let d=e.map[a];d===void 0&&(d=new hg(a),Il(e,d)),e=d}}}class Mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);ug(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Dl(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let dg=0;function fg(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function pg(o){switch(o){case ui:return["Linear","( value )"];case ie:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Nl(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+fg(o.getShaderSource(t),r)}else return i}function mg(o,t){const e=pg(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function gg(o,t){let e;switch(t){case vu:e="Linear";break;case _u:e="Reinhard";break;case xu:e="OptimizedCineon";break;case yu:e="ACESFilmic";break;case wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function vg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function _g(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function ps(o){return o!==""}function Fl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(o){return o.replace(yg,wg)}function wg(o,t){const e=Ot[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Xo(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(o){return o.replace(bg,Mg)}function Mg(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ol(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===$h?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ds&&(t="SHADOWMAP_TYPE_VSM"),t}function Eg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ji:case Yi:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ag(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Tg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case sa:t="ENVMAP_BLENDING_MULTIPLY";break;case mu:t="ENVMAP_BLENDING_MIX";break;case gu:t="ENVMAP_BLENDING_ADD";break}return t}function Cg(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Pg(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Sg(e),c=Eg(e),h=Ag(e),d=Tg(e),u=Cg(e),f=e.isWebGL2?"":vg(e),g=_g(s),v=i.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[g].filter(ps).join(`
`),m.length>0&&(m+=`
`),p=[f,g].filter(ps).join(`
`),p.length>0&&(p+=`
`)):(m=[Ol(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[f,Ol(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Rn?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.encodings_pars_fragment,mg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),r=Xo(r),r=Fl(r,e),r=zl(r,e),a=Xo(a),a=Fl(a,e),a=zl(a,e),r=Ul(r),a=Ul(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+r,x=_+p+a,M=Dl(i,35633,y),E=Dl(i,35632,x);if(i.attachShader(v,M),i.attachShader(v,E),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(v).trim(),S=i.getShaderInfoLog(M).trim(),U=i.getShaderInfoLog(E).trim();let z=!0,C=!0;if(i.getProgramParameter(v,35714)===!1)if(z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,v,M,E);else{const I=Nl(i,M,"vertex"),N=Nl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+w+`
`+I+`
`+N)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(S===""||U==="")&&(C=!1);C&&(this.diagnostics={runnable:z,programLog:w,vertexShader:{log:S,prefix:m},fragmentShader:{log:U,prefix:p}})}i.deleteShader(M),i.deleteShader(E);let R;this.getUniforms=function(){return R===void 0&&(R=new Mr(i,v)),R};let T;return this.getAttributes=function(){return T===void 0&&(T=xg(i,v)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=E,this}let Lg=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ig(t),e.set(t,n)),n}}class Ig{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}}function Dg(o,t,e,n,i,s,r){const a=new Zc,l=new Rg,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===1?"uv2":"uv"}function m(w,S,U,z,C){const I=z.fog,N=C.geometry,F=w.isMeshStandardMaterial?z.environment:null,W=(w.isMeshStandardMaterial?e:t).get(w.envMap||F),V=W&&W.mapping===Ir?W.image.height:null,Y=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,gt=tt!==void 0?tt.length:0;let X=0;N.morphAttributes.position!==void 0&&(X=1),N.morphAttributes.normal!==void 0&&(X=2),N.morphAttributes.color!==void 0&&(X=3);let j,et,ht,ft;if(Y){const _t=gn[Y];j=_t.vertexShader,et=_t.fragmentShader}else j=w.vertexShader,et=w.fragmentShader,l.update(w),ht=l.getVertexShaderID(w),ft=l.getFragmentShaderID(w);const H=o.getRenderTarget(),Dt=C.isInstancedMesh===!0,Nt=!!w.map,lt=!!w.matcap,Mt=!!W,it=!!w.aoMap,K=!!w.lightMap,st=!!w.bumpMap,yt=!!w.normalMap,dt=!!w.displacementMap,Pt=!!w.emissiveMap,Lt=!!w.metalnessMap,At=!!w.roughnessMap,Bt=w.clearcoat>0,jt=w.iridescence>0,L=w.sheen>0,A=w.transmission>0,q=Bt&&!!w.clearcoatMap,rt=Bt&&!!w.clearcoatNormalMap,at=Bt&&!!w.clearcoatRoughnessMap,pt=jt&&!!w.iridescenceMap,It=jt&&!!w.iridescenceThicknessMap,xt=L&&!!w.sheenColorMap,J=L&&!!w.sheenRoughnessMap,bt=!!w.specularMap,Tt=!!w.specularColorMap,Rt=!!w.specularIntensityMap,wt=A&&!!w.transmissionMap,St=A&&!!w.thicknessMap,Wt=!!w.gradientMap,Jt=!!w.alphaMap,ae=w.alphaTest>0,O=!!w.extensions,Z=!!N.attributes.uv2;return{isWebGL2:h,shaderID:Y,shaderName:w.type,vertexShader:j,fragmentShader:et,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:ft,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,instancing:Dt,instancingColor:Dt&&C.instanceColor!==null,supportsVertexTextures:u,outputEncoding:H===null?o.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:ui,map:Nt,matcap:lt,envMap:Mt,envMapMode:Mt&&W.mapping,envMapCubeUVHeight:V,aoMap:it,lightMap:K,bumpMap:st,normalMap:yt,displacementMap:u&&dt,emissiveMap:Pt,normalMapObjectSpace:yt&&w.normalMapType===ku,normalMapTangentSpace:yt&&w.normalMapType===Hc,decodeVideoTexture:Nt&&w.map.isVideoTexture===!0&&w.map.encoding===ie,metalnessMap:Lt,roughnessMap:At,clearcoat:Bt,clearcoatMap:q,clearcoatNormalMap:rt,clearcoatRoughnessMap:at,iridescence:jt,iridescenceMap:pt,iridescenceThicknessMap:It,sheen:L,sheenColorMap:xt,sheenRoughnessMap:J,specularMap:bt,specularColorMap:Tt,specularIntensityMap:Rt,transmission:A,transmissionMap:wt,thicknessMap:St,gradientMap:Wt,opaque:w.transparent===!1&&w.blending===Wi,alphaMap:Jt,alphaTest:ae,combine:w.combine,mapUv:Nt&&v(w.map.channel),aoMapUv:it&&v(w.aoMap.channel),lightMapUv:K&&v(w.lightMap.channel),bumpMapUv:st&&v(w.bumpMap.channel),normalMapUv:yt&&v(w.normalMap.channel),displacementMapUv:dt&&v(w.displacementMap.channel),emissiveMapUv:Pt&&v(w.emissiveMap.channel),metalnessMapUv:Lt&&v(w.metalnessMap.channel),roughnessMapUv:At&&v(w.roughnessMap.channel),clearcoatMapUv:q&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:rt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:It&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:J&&v(w.sheenRoughnessMap.channel),specularMapUv:bt&&v(w.specularMap.channel),specularColorMapUv:Tt&&v(w.specularColorMap.channel),specularIntensityMapUv:Rt&&v(w.specularIntensityMap.channel),transmissionMapUv:wt&&v(w.transmissionMap.channel),thicknessMapUv:St&&v(w.thicknessMap.channel),alphaMapUv:Jt&&v(w.alphaMap.channel),vertexTangents:yt&&!!N.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs2:Z,pointsUvs:C.isPoints===!0&&!!N.attributes.uv&&(Nt||Jt),fog:!!I,useFog:w.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:X,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&U.length>0,shadowMapType:o.shadowMap.type,toneMapping:w.toneMapped?o.toneMapping:Rn,useLegacyLights:o.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===je,flipSided:w.side===Me,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:O&&w.extensions.derivatives===!0,extensionFragDepth:O&&w.extensions.fragDepth===!0,extensionDrawBuffers:O&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)S.push(U),S.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(_(S,w),y(S,w),S.push(o.outputEncoding)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputEncoding),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function y(w,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUvs2&&a.enable(13),S.vertexTangents&&a.enable(14),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.decodeVideoTexture&&a.enable(17),S.opaque&&a.enable(18),S.pointsUvs&&a.enable(19),w.push(a.mask)}function x(w){const S=g[w.type];let U;if(S){const z=gn[S];U=eh.clone(z.uniforms)}else U=w.uniforms;return U}function M(w,S){let U;for(let z=0,C=c.length;z<C;z++){const I=c[z];if(I.cacheKey===S){U=I,++U.usedTimes;break}}return U===void 0&&(U=new Pg(o,S,w,s),c.push(U)),U}function E(w){if(--w.usedTimes===0){const S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function R(w){l.remove(w)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:T}}function Ng(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Fg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Bl(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function kl(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,f,g,v,m){let p=o[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},o[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,u,f,g,v,m){const p=r(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,v,m){const p=r(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||Fg),n.length>1&&n.sort(u||Bl),i.length>1&&i.sort(u||Bl)}function h(){for(let d=t,u=o.length;d<u;d++){const f=o[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function zg(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new kl,o.set(n,[r])):i>=s.length?(r=new kl,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function Ug(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Yt};break;case"SpotLight":e={position:new D,direction:new D,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new D,halfWidth:new D,halfHeight:new D};break}return o[t.id]=e,e}}}function Og(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Bg=0;function kg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Vg(o,t){const e=new Ug,n=Og(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,r=new oe,a=new oe;function l(h,d){let u=0,f=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let v=0,m=0,p=0,_=0,y=0,x=0,M=0,E=0,R=0,T=0;h.sort(kg);const w=d===!0?Math.PI:1;for(let U=0,z=h.length;U<z;U++){const C=h[U],I=C.color,N=C.intensity,F=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*N*w,f+=I.g*N*w,g+=I.b*N*w;else if(C.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],N);else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){const Y=C.shadow,tt=n.get(C);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,i.directionalShadow[v]=tt,i.directionalShadowMap[v]=W,i.directionalShadowMatrix[v]=C.shadow.matrix,x++}i.directional[v]=V,v++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(I).multiplyScalar(N*w),V.distance=F,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[p]=V;const Y=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,Y.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[p]=Y.matrix,C.castShadow){const tt=n.get(C);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,i.spotShadow[p]=tt,i.spotShadowMap[p]=W,E++}p++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(I).multiplyScalar(N),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[_]=V,_++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*w),V.distance=C.distance,V.decay=C.decay,C.castShadow){const Y=C.shadow,tt=n.get(C);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,tt.shadowCameraNear=Y.camera.near,tt.shadowCameraFar=Y.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=C.shadow.matrix,M++}i.point[m]=V,m++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(N*w),V.groundColor.copy(C.groundColor).multiplyScalar(N*w),i.hemi[y]=V,y++}}_>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const S=i.hash;(S.directionalLength!==v||S.pointLength!==m||S.spotLength!==p||S.rectAreaLength!==_||S.hemiLength!==y||S.numDirectionalShadows!==x||S.numPointShadows!==M||S.numSpotShadows!==E||S.numSpotMaps!==R)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=_,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,S.directionalLength=v,S.pointLength=m,S.spotLength=p,S.rectAreaLength=_,S.hemiLength=y,S.numDirectionalShadows=x,S.numPointShadows=M,S.numSpotShadows=E,S.numSpotMaps=R,i.version=Bg++)}function c(h,d){let u=0,f=0,g=0,v=0,m=0;const p=d.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){const x=h[_];if(x.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(x.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Vl(o,t){const e=new Vg(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function a(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function Gg(o,t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new Vl(o,t),e.set(s,[l])):r>=a.length?(l=new Vl(o,t),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Hg extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wg extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jg(o,t,e){let n=new aa;const i=new ct,s=new ct,r=new we,a=new Hg({depthPacking:Bu}),l=new Wg,c={},h=e.maxTextureSize,d={[Vn]:Me,[Me]:Vn,[je]:je},u=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:qg,fragmentShader:Xg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new he;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc,this.render=function(x,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const R=o.getRenderTarget(),T=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),S=o.state;S.setBlending(Bn),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);for(let U=0,z=x.length;U<z;U++){const C=x[U],I=C.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const N=I.getFrameExtents();if(i.multiply(N),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/N.x),i.x=s.x*N.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/N.y),i.y=s.y*N.y,I.mapSize.y=s.y)),I.map===null){const W=this.type!==ds?{minFilter:Le,magFilter:Le}:{};I.map=new di(i.x,i.y,W),I.map.texture.name=C.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const F=I.getViewportCount();for(let W=0;W<F;W++){const V=I.getViewport(W);r.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),S.viewport(r),I.updateMatrices(C,W),n=I.getFrustum(),y(M,E,I.camera,C,this.type)}I.isPointLightShadow!==!0&&this.type===ds&&p(I,E),I.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(R,T,w)};function p(x,M){const E=t.update(v);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new di(i.x,i.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,o.setRenderTarget(x.mapPass),o.clear(),o.renderBufferDirect(M,null,E,u,v,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,o.setRenderTarget(x.map),o.clear(),o.renderBufferDirect(M,null,E,f,v,null)}function _(x,M,E,R){let T=null;const w=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(w!==void 0)T=w;else if(T=E.isPointLight===!0?l:a,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const S=T.uuid,U=M.uuid;let z=c[S];z===void 0&&(z={},c[S]=z);let C=z[U];C===void 0&&(C=T.clone(),z[U]=C),T=C}if(T.visible=M.visible,T.wireframe=M.wireframe,R===ds?T.side=M.shadowSide!==null?M.shadowSide:M.side:T.side=M.shadowSide!==null?M.shadowSide:d[M.side],T.alphaMap=M.alphaMap,T.alphaTest=M.alphaTest,T.map=M.map,T.clipShadows=M.clipShadows,T.clippingPlanes=M.clippingPlanes,T.clipIntersection=M.clipIntersection,T.displacementMap=M.displacementMap,T.displacementScale=M.displacementScale,T.displacementBias=M.displacementBias,T.wireframeLinewidth=M.wireframeLinewidth,T.linewidth=M.linewidth,E.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const S=o.properties.get(T);S.light=E}return T}function y(x,M,E,R,T){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&T===ds)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const U=t.update(x),z=x.material;if(Array.isArray(z)){const C=U.groups;for(let I=0,N=C.length;I<N;I++){const F=C[I],W=z[F.materialIndex];if(W&&W.visible){const V=_(x,W,R,T);o.renderBufferDirect(E,null,U,V,x,F)}}}else if(z.visible){const C=_(x,z,R,T);o.renderBufferDirect(E,null,U,C,x,null)}}const S=x.children;for(let U=0,z=S.length;U<z;U++)y(S[U],M,E,R,T)}}function Yg(o,t,e){const n=e.isWebGL2;function i(){let O=!1;const Z=new we;let ot=null;const _t=new we(0,0,0,0);return{setMask:function(Et){ot!==Et&&!O&&(o.colorMask(Et,Et,Et,Et),ot=Et)},setLocked:function(Et){O=Et},setClear:function(Et,ee,se,Se,In){In===!0&&(Et*=Se,ee*=Se,se*=Se),Z.set(Et,ee,se,Se),_t.equals(Z)===!1&&(o.clearColor(Et,ee,se,Se),_t.copy(Z))},reset:function(){O=!1,ot=null,_t.set(-1,0,0,0)}}}function s(){let O=!1,Z=null,ot=null,_t=null;return{setTest:function(Et){Et?H(2929):Dt(2929)},setMask:function(Et){Z!==Et&&!O&&(o.depthMask(Et),Z=Et)},setFunc:function(Et){if(ot!==Et){switch(Et){case lu:o.depthFunc(512);break;case cu:o.depthFunc(519);break;case hu:o.depthFunc(513);break;case Bo:o.depthFunc(515);break;case uu:o.depthFunc(514);break;case du:o.depthFunc(518);break;case fu:o.depthFunc(516);break;case pu:o.depthFunc(517);break;default:o.depthFunc(515)}ot=Et}},setLocked:function(Et){O=Et},setClear:function(Et){_t!==Et&&(o.clearDepth(Et),_t=Et)},reset:function(){O=!1,Z=null,ot=null,_t=null}}}function r(){let O=!1,Z=null,ot=null,_t=null,Et=null,ee=null,se=null,Se=null,In=null;return{setTest:function(le){O||(le?H(2960):Dt(2960))},setMask:function(le){Z!==le&&!O&&(o.stencilMask(le),Z=le)},setFunc:function(le,Ge,cn){(ot!==le||_t!==Ge||Et!==cn)&&(o.stencilFunc(le,Ge,cn),ot=le,_t=Ge,Et=cn)},setOp:function(le,Ge,cn){(ee!==le||se!==Ge||Se!==cn)&&(o.stencilOp(le,Ge,cn),ee=le,se=Ge,Se=cn)},setLocked:function(le){O=le},setClear:function(le){In!==le&&(o.clearStencil(le),In=le)},reset:function(){O=!1,Z=null,ot=null,_t=null,Et=null,ee=null,se=null,Se=null,In=null}}}const a=new i,l=new s,c=new r,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,v=[],m=null,p=!1,_=null,y=null,x=null,M=null,E=null,R=null,T=null,w=!1,S=null,U=null,z=null,C=null,I=null;const N=o.getParameter(35661);let F=!1,W=0;const V=o.getParameter(7938);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=W>=2);let Y=null,tt={};const gt=o.getParameter(3088),X=o.getParameter(2978),j=new we().fromArray(gt),et=new we().fromArray(X);function ht(O,Z,ot){const _t=new Uint8Array(4),Et=o.createTexture();o.bindTexture(O,Et),o.texParameteri(O,10241,9728),o.texParameteri(O,10240,9728);for(let ee=0;ee<ot;ee++)o.texImage2D(Z+ee,0,6408,1,1,0,6408,5121,_t);return Et}const ft={};ft[3553]=ht(3553,3553,1),ft[34067]=ht(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),H(2929),l.setFunc(Bo),dt(!1),Pt(Ta),H(2884),st(Bn);function H(O){u[O]!==!0&&(o.enable(O),u[O]=!0)}function Dt(O){u[O]!==!1&&(o.disable(O),u[O]=!1)}function Nt(O,Z){return f[O]!==Z?(o.bindFramebuffer(O,Z),f[O]=Z,n&&(O===36009&&(f[36160]=Z),O===36160&&(f[36009]=Z)),!0):!1}function lt(O,Z){let ot=v,_t=!1;if(O)if(ot=g.get(Z),ot===void 0&&(ot=[],g.set(Z,ot)),O.isWebGLMultipleRenderTargets){const Et=O.texture;if(ot.length!==Et.length||ot[0]!==36064){for(let ee=0,se=Et.length;ee<se;ee++)ot[ee]=36064+ee;ot.length=Et.length,_t=!0}}else ot[0]!==36064&&(ot[0]=36064,_t=!0);else ot[0]!==1029&&(ot[0]=1029,_t=!0);_t&&(e.isWebGL2?o.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function Mt(O){return m!==O?(o.useProgram(O),m=O,!0):!1}const it={[Ui]:32774,[Jh]:32778,[Kh]:32779};if(n)it[La]=32775,it[Ra]=32776;else{const O=t.get("EXT_blend_minmax");O!==null&&(it[La]=O.MIN_EXT,it[Ra]=O.MAX_EXT)}const K={[Qh]:0,[tu]:1,[eu]:768,[Bc]:770,[au]:776,[ru]:774,[iu]:772,[nu]:769,[kc]:771,[ou]:775,[su]:773};function st(O,Z,ot,_t,Et,ee,se,Se){if(O===Bn){p===!0&&(Dt(3042),p=!1);return}if(p===!1&&(H(3042),p=!0),O!==Zh){if(O!==_||Se!==w){if((y!==Ui||E!==Ui)&&(o.blendEquation(32774),y=Ui,E=Ui),Se)switch(O){case Wi:o.blendFuncSeparate(1,771,1,771);break;case Er:o.blendFunc(1,1);break;case Ca:o.blendFuncSeparate(0,769,0,1);break;case Pa:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Wi:o.blendFuncSeparate(770,771,1,771);break;case Er:o.blendFunc(770,1);break;case Ca:o.blendFuncSeparate(0,769,0,1);break;case Pa:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,M=null,R=null,T=null,_=O,w=Se}return}Et=Et||Z,ee=ee||ot,se=se||_t,(Z!==y||Et!==E)&&(o.blendEquationSeparate(it[Z],it[Et]),y=Z,E=Et),(ot!==x||_t!==M||ee!==R||se!==T)&&(o.blendFuncSeparate(K[ot],K[_t],K[ee],K[se]),x=ot,M=_t,R=ee,T=se),_=O,w=!1}function yt(O,Z){O.side===je?Dt(2884):H(2884);let ot=O.side===Me;Z&&(ot=!ot),dt(ot),O.blending===Wi&&O.transparent===!1?st(Bn):st(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const _t=O.stencilWrite;c.setTest(_t),_t&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),At(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?H(32926):Dt(32926)}function dt(O){S!==O&&(O?o.frontFace(2304):o.frontFace(2305),S=O)}function Pt(O){O!==jh?(H(2884),O!==U&&(O===Ta?o.cullFace(1029):O===Yh?o.cullFace(1028):o.cullFace(1032))):Dt(2884),U=O}function Lt(O){O!==z&&(F&&o.lineWidth(O),z=O)}function At(O,Z,ot){O?(H(32823),(C!==Z||I!==ot)&&(o.polygonOffset(Z,ot),C=Z,I=ot)):Dt(32823)}function Bt(O){O?H(3089):Dt(3089)}function jt(O){O===void 0&&(O=33984+N-1),Y!==O&&(o.activeTexture(O),Y=O)}function L(O,Z,ot){ot===void 0&&(Y===null?ot=33984+N-1:ot=Y);let _t=tt[ot];_t===void 0&&(_t={type:void 0,texture:void 0},tt[ot]=_t),(_t.type!==O||_t.texture!==Z)&&(Y!==ot&&(o.activeTexture(ot),Y=ot),o.bindTexture(O,Z||ft[O]),_t.type=O,_t.texture=Z)}function A(){const O=tt[Y];O!==void 0&&O.type!==void 0&&(o.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function q(){try{o.compressedTexImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{o.texSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{o.texSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function It(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{o.texStorage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{o.texStorage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{o.texImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{o.texImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(O){j.equals(O)===!1&&(o.scissor(O.x,O.y,O.z,O.w),j.copy(O))}function St(O){et.equals(O)===!1&&(o.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function Wt(O,Z){let ot=d.get(Z);ot===void 0&&(ot=new WeakMap,d.set(Z,ot));let _t=ot.get(O);_t===void 0&&(_t=o.getUniformBlockIndex(Z,O.name),ot.set(O,_t))}function Jt(O,Z){const _t=d.get(Z).get(O);h.get(Z)!==_t&&(o.uniformBlockBinding(Z,_t,O.__bindingPointIndex),h.set(Z,_t))}function ae(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},Y=null,tt={},f={},g=new WeakMap,v=[],m=null,p=!1,_=null,y=null,x=null,M=null,E=null,R=null,T=null,w=!1,S=null,U=null,z=null,C=null,I=null,j.set(0,0,o.canvas.width,o.canvas.height),et.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:H,disable:Dt,bindFramebuffer:Nt,drawBuffers:lt,useProgram:Mt,setBlending:st,setMaterial:yt,setFlipSided:dt,setCullFace:Pt,setLineWidth:Lt,setPolygonOffset:At,setScissorTest:Bt,activeTexture:jt,bindTexture:L,unbindTexture:A,compressedTexImage2D:q,compressedTexImage3D:rt,texImage2D:Tt,texImage3D:Rt,updateUBOMapping:Wt,uniformBlockBinding:Jt,texStorage2D:J,texStorage3D:bt,texSubImage2D:at,texSubImage3D:pt,compressedTexSubImage2D:It,compressedTexSubImage3D:xt,scissor:wt,viewport:St,reset:ae}}function $g(o,t,e,n,i,s,r){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,A){return p?new OffscreenCanvas(L,A):Ps("canvas")}function y(L,A,q,rt){let at=1;if((L.width>rt||L.height>rt)&&(at=rt/Math.max(L.width,L.height)),at<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const pt=A?qc:Math.floor,It=pt(at*L.width),xt=pt(at*L.height);v===void 0&&(v=_(It,xt));const J=q?_(It,xt):v;return J.width=It,J.height=xt,J.getContext("2d").drawImage(L,0,0,It,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+It+"x"+xt+")."),J}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return qo(L.width)&&qo(L.height)}function M(L){return a?!1:L.wrapS!==en||L.wrapT!==en||L.minFilter!==Le&&L.minFilter!==We}function E(L,A){return L.generateMipmaps&&A&&L.minFilter!==Le&&L.minFilter!==We}function R(L){o.generateMipmap(L)}function T(L,A,q,rt,at=!1){if(a===!1)return A;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pt=A;return A===6403&&(q===5126&&(pt=33326),q===5131&&(pt=33325),q===5121&&(pt=33321)),A===33319&&(q===5126&&(pt=33328),q===5131&&(pt=33327),q===5121&&(pt=33323)),A===6408&&(q===5126&&(pt=34836),q===5131&&(pt=34842),q===5121&&(pt=rt===ie&&at===!1?35907:32856),q===32819&&(pt=32854),q===32820&&(pt=32855)),(pt===33325||pt===33326||pt===33327||pt===33328||pt===34842||pt===34836)&&t.get("EXT_color_buffer_float"),pt}function w(L,A,q){return E(L,q)===!0||L.isFramebufferTexture&&L.minFilter!==Le&&L.minFilter!==We?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function S(L){return L===Le||L===Ia||L===jr?9728:9729}function U(L){const A=L.target;A.removeEventListener("dispose",U),C(A),A.isVideoTexture&&g.delete(A)}function z(L){const A=L.target;A.removeEventListener("dispose",z),N(A)}function C(L){const A=n.get(L);if(A.__webglInit===void 0)return;const q=L.source,rt=m.get(q);if(rt){const at=rt[A.__cacheKey];at.usedTimes--,at.usedTimes===0&&I(L),Object.keys(rt).length===0&&m.delete(q)}n.remove(L)}function I(L){const A=n.get(L);o.deleteTexture(A.__webglTexture);const q=L.source,rt=m.get(q);delete rt[A.__cacheKey],r.memory.textures--}function N(L){const A=L.texture,q=n.get(L),rt=n.get(A);if(rt.__webglTexture!==void 0&&(o.deleteTexture(rt.__webglTexture),r.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let at=0;at<6;at++)o.deleteFramebuffer(q.__webglFramebuffer[at]),q.__webglDepthbuffer&&o.deleteRenderbuffer(q.__webglDepthbuffer[at]);else{if(o.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&o.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&o.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let at=0;at<q.__webglColorRenderbuffer.length;at++)q.__webglColorRenderbuffer[at]&&o.deleteRenderbuffer(q.__webglColorRenderbuffer[at]);q.__webglDepthRenderbuffer&&o.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let at=0,pt=A.length;at<pt;at++){const It=n.get(A[at]);It.__webglTexture&&(o.deleteTexture(It.__webglTexture),r.memory.textures--),n.remove(A[at])}n.remove(A),n.remove(L)}let F=0;function W(){F=0}function V(){const L=F;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),F+=1,L}function Y(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.encoding),A.join()}function tt(L,A){const q=n.get(L);if(L.isVideoTexture&&Bt(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const rt=L.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(q,L,A);return}}e.bindTexture(3553,q.__webglTexture,33984+A)}function gt(L,A){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Dt(q,L,A);return}e.bindTexture(35866,q.__webglTexture,33984+A)}function X(L,A){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Dt(q,L,A);return}e.bindTexture(32879,q.__webglTexture,33984+A)}function j(L,A){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Nt(q,L,A);return}e.bindTexture(34067,q.__webglTexture,33984+A)}const et={[Go]:10497,[en]:33071,[Ho]:33648},ht={[Le]:9728,[Ia]:9984,[jr]:9986,[We]:9729,[bu]:9985,[As]:9987};function ft(L,A,q){if(q?(o.texParameteri(L,10242,et[A.wrapS]),o.texParameteri(L,10243,et[A.wrapT]),(L===32879||L===35866)&&o.texParameteri(L,32882,et[A.wrapR]),o.texParameteri(L,10240,ht[A.magFilter]),o.texParameteri(L,10241,ht[A.minFilter])):(o.texParameteri(L,10242,33071),o.texParameteri(L,10243,33071),(L===32879||L===35866)&&o.texParameteri(L,32882,33071),(A.wrapS!==en||A.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,10240,S(A.magFilter)),o.texParameteri(L,10241,S(A.minFilter)),A.minFilter!==Le&&A.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const rt=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Le||A.minFilter!==jr&&A.minFilter!==As||A.type===ai&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ts&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(o.texParameterf(L,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function H(L,A){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",U));const rt=A.source;let at=m.get(rt);at===void 0&&(at={},m.set(rt,at));const pt=Y(A);if(pt!==L.__cacheKey){at[pt]===void 0&&(at[pt]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,q=!0),at[pt].usedTimes++;const It=at[L.__cacheKey];It!==void 0&&(at[L.__cacheKey].usedTimes--,It.usedTimes===0&&I(A)),L.__cacheKey=pt,L.__webglTexture=at[pt].texture}return q}function Dt(L,A,q){let rt=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(rt=35866),A.isData3DTexture&&(rt=32879);const at=H(L,A),pt=A.source;e.bindTexture(rt,L.__webglTexture,33984+q);const It=n.get(pt);if(pt.version!==It.__version||at===!0){e.activeTexture(33984+q),o.pixelStorei(37440,A.flipY),o.pixelStorei(37441,A.premultiplyAlpha),o.pixelStorei(3317,A.unpackAlignment),o.pixelStorei(37443,0);const xt=M(A)&&x(A.image)===!1;let J=y(A.image,xt,!1,h);J=jt(A,J);const bt=x(J)||a,Tt=s.convert(A.format,A.encoding);let Rt=s.convert(A.type),wt=T(A.internalFormat,Tt,Rt,A.encoding,A.isVideoTexture);ft(rt,A,bt);let St;const Wt=A.mipmaps,Jt=a&&A.isVideoTexture!==!0,ae=It.__version===void 0||at===!0,O=w(A,J,bt);if(A.isDepthTexture)wt=6402,a?A.type===ai?wt=36012:A.type===oi?wt=33190:A.type===qi?wt=35056:wt=33189:A.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ci&&wt===6402&&A.type!==Gc&&A.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=oi,Rt=s.convert(A.type)),A.format===$i&&wt===6402&&(wt=34041,A.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=qi,Rt=s.convert(A.type))),ae&&(Jt?e.texStorage2D(3553,1,wt,J.width,J.height):e.texImage2D(3553,0,wt,J.width,J.height,0,Tt,Rt,null));else if(A.isDataTexture)if(Wt.length>0&&bt){Jt&&ae&&e.texStorage2D(3553,O,wt,Wt[0].width,Wt[0].height);for(let Z=0,ot=Wt.length;Z<ot;Z++)St=Wt[Z],Jt?e.texSubImage2D(3553,Z,0,0,St.width,St.height,Tt,Rt,St.data):e.texImage2D(3553,Z,wt,St.width,St.height,0,Tt,Rt,St.data);A.generateMipmaps=!1}else Jt?(ae&&e.texStorage2D(3553,O,wt,J.width,J.height),e.texSubImage2D(3553,0,0,0,J.width,J.height,Tt,Rt,J.data)):e.texImage2D(3553,0,wt,J.width,J.height,0,Tt,Rt,J.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Jt&&ae&&e.texStorage3D(35866,O,wt,Wt[0].width,Wt[0].height,J.depth);for(let Z=0,ot=Wt.length;Z<ot;Z++)St=Wt[Z],A.format!==nn?Tt!==null?Jt?e.compressedTexSubImage3D(35866,Z,0,0,0,St.width,St.height,J.depth,Tt,St.data,0,0):e.compressedTexImage3D(35866,Z,wt,St.width,St.height,J.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(35866,Z,0,0,0,St.width,St.height,J.depth,Tt,Rt,St.data):e.texImage3D(35866,Z,wt,St.width,St.height,J.depth,0,Tt,Rt,St.data)}else{Jt&&ae&&e.texStorage2D(3553,O,wt,Wt[0].width,Wt[0].height);for(let Z=0,ot=Wt.length;Z<ot;Z++)St=Wt[Z],A.format!==nn?Tt!==null?Jt?e.compressedTexSubImage2D(3553,Z,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(3553,Z,wt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(3553,Z,0,0,St.width,St.height,Tt,Rt,St.data):e.texImage2D(3553,Z,wt,St.width,St.height,0,Tt,Rt,St.data)}else if(A.isDataArrayTexture)Jt?(ae&&e.texStorage3D(35866,O,wt,J.width,J.height,J.depth),e.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,Tt,Rt,J.data)):e.texImage3D(35866,0,wt,J.width,J.height,J.depth,0,Tt,Rt,J.data);else if(A.isData3DTexture)Jt?(ae&&e.texStorage3D(32879,O,wt,J.width,J.height,J.depth),e.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,Tt,Rt,J.data)):e.texImage3D(32879,0,wt,J.width,J.height,J.depth,0,Tt,Rt,J.data);else if(A.isFramebufferTexture){if(ae)if(Jt)e.texStorage2D(3553,O,wt,J.width,J.height);else{let Z=J.width,ot=J.height;for(let _t=0;_t<O;_t++)e.texImage2D(3553,_t,wt,Z,ot,0,Tt,Rt,null),Z>>=1,ot>>=1}}else if(Wt.length>0&&bt){Jt&&ae&&e.texStorage2D(3553,O,wt,Wt[0].width,Wt[0].height);for(let Z=0,ot=Wt.length;Z<ot;Z++)St=Wt[Z],Jt?e.texSubImage2D(3553,Z,0,0,Tt,Rt,St):e.texImage2D(3553,Z,wt,Tt,Rt,St);A.generateMipmaps=!1}else Jt?(ae&&e.texStorage2D(3553,O,wt,J.width,J.height),e.texSubImage2D(3553,0,0,0,Tt,Rt,J)):e.texImage2D(3553,0,wt,Tt,Rt,J);E(A,bt)&&R(rt),It.__version=pt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Nt(L,A,q){if(A.image.length!==6)return;const rt=H(L,A),at=A.source;e.bindTexture(34067,L.__webglTexture,33984+q);const pt=n.get(at);if(at.version!==pt.__version||rt===!0){e.activeTexture(33984+q),o.pixelStorei(37440,A.flipY),o.pixelStorei(37441,A.premultiplyAlpha),o.pixelStorei(3317,A.unpackAlignment),o.pixelStorei(37443,0);const It=A.isCompressedTexture||A.image[0].isCompressedTexture,xt=A.image[0]&&A.image[0].isDataTexture,J=[];for(let Z=0;Z<6;Z++)!It&&!xt?J[Z]=y(A.image[Z],!1,!0,c):J[Z]=xt?A.image[Z].image:A.image[Z],J[Z]=jt(A,J[Z]);const bt=J[0],Tt=x(bt)||a,Rt=s.convert(A.format,A.encoding),wt=s.convert(A.type),St=T(A.internalFormat,Rt,wt,A.encoding),Wt=a&&A.isVideoTexture!==!0,Jt=pt.__version===void 0||rt===!0;let ae=w(A,bt,Tt);ft(34067,A,Tt);let O;if(It){Wt&&Jt&&e.texStorage2D(34067,ae,St,bt.width,bt.height);for(let Z=0;Z<6;Z++){O=J[Z].mipmaps;for(let ot=0;ot<O.length;ot++){const _t=O[ot];A.format!==nn?Rt!==null?Wt?e.compressedTexSubImage2D(34069+Z,ot,0,0,_t.width,_t.height,Rt,_t.data):e.compressedTexImage2D(34069+Z,ot,St,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?e.texSubImage2D(34069+Z,ot,0,0,_t.width,_t.height,Rt,wt,_t.data):e.texImage2D(34069+Z,ot,St,_t.width,_t.height,0,Rt,wt,_t.data)}}}else{O=A.mipmaps,Wt&&Jt&&(O.length>0&&ae++,e.texStorage2D(34067,ae,St,J[0].width,J[0].height));for(let Z=0;Z<6;Z++)if(xt){Wt?e.texSubImage2D(34069+Z,0,0,0,J[Z].width,J[Z].height,Rt,wt,J[Z].data):e.texImage2D(34069+Z,0,St,J[Z].width,J[Z].height,0,Rt,wt,J[Z].data);for(let ot=0;ot<O.length;ot++){const Et=O[ot].image[Z].image;Wt?e.texSubImage2D(34069+Z,ot+1,0,0,Et.width,Et.height,Rt,wt,Et.data):e.texImage2D(34069+Z,ot+1,St,Et.width,Et.height,0,Rt,wt,Et.data)}}else{Wt?e.texSubImage2D(34069+Z,0,0,0,Rt,wt,J[Z]):e.texImage2D(34069+Z,0,St,Rt,wt,J[Z]);for(let ot=0;ot<O.length;ot++){const _t=O[ot];Wt?e.texSubImage2D(34069+Z,ot+1,0,0,Rt,wt,_t.image[Z]):e.texImage2D(34069+Z,ot+1,St,Rt,wt,_t.image[Z])}}}E(A,Tt)&&R(34067),pt.__version=at.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function lt(L,A,q,rt,at){const pt=s.convert(q.format,q.encoding),It=s.convert(q.type),xt=T(q.internalFormat,pt,It,q.encoding);n.get(A).__hasExternalTextures||(at===32879||at===35866?e.texImage3D(at,0,xt,A.width,A.height,A.depth,0,pt,It,null):e.texImage2D(at,0,xt,A.width,A.height,0,pt,It,null)),e.bindFramebuffer(36160,L),At(A)?u.framebufferTexture2DMultisampleEXT(36160,rt,at,n.get(q).__webglTexture,0,Lt(A)):(at===3553||at>=34069&&at<=34074)&&o.framebufferTexture2D(36160,rt,at,n.get(q).__webglTexture,0),e.bindFramebuffer(36160,null)}function Mt(L,A,q){if(o.bindRenderbuffer(36161,L),A.depthBuffer&&!A.stencilBuffer){let rt=33189;if(q||At(A)){const at=A.depthTexture;at&&at.isDepthTexture&&(at.type===ai?rt=36012:at.type===oi&&(rt=33190));const pt=Lt(A);At(A)?u.renderbufferStorageMultisampleEXT(36161,pt,rt,A.width,A.height):o.renderbufferStorageMultisample(36161,pt,rt,A.width,A.height)}else o.renderbufferStorage(36161,rt,A.width,A.height);o.framebufferRenderbuffer(36160,36096,36161,L)}else if(A.depthBuffer&&A.stencilBuffer){const rt=Lt(A);q&&At(A)===!1?o.renderbufferStorageMultisample(36161,rt,35056,A.width,A.height):At(A)?u.renderbufferStorageMultisampleEXT(36161,rt,35056,A.width,A.height):o.renderbufferStorage(36161,34041,A.width,A.height),o.framebufferRenderbuffer(36160,33306,36161,L)}else{const rt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let at=0;at<rt.length;at++){const pt=rt[at],It=s.convert(pt.format,pt.encoding),xt=s.convert(pt.type),J=T(pt.internalFormat,It,xt,pt.encoding),bt=Lt(A);q&&At(A)===!1?o.renderbufferStorageMultisample(36161,bt,J,A.width,A.height):At(A)?u.renderbufferStorageMultisampleEXT(36161,bt,J,A.width,A.height):o.renderbufferStorage(36161,J,A.width,A.height)}}o.bindRenderbuffer(36161,null)}function it(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),tt(A.depthTexture,0);const rt=n.get(A.depthTexture).__webglTexture,at=Lt(A);if(A.depthTexture.format===ci)At(A)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,rt,0,at):o.framebufferTexture2D(36160,36096,3553,rt,0);else if(A.depthTexture.format===$i)At(A)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,rt,0,at):o.framebufferTexture2D(36160,33306,3553,rt,0);else throw new Error("Unknown depthTexture format")}function K(L){const A=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");it(A.__webglFramebuffer,L)}else if(q){A.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(36160,A.__webglFramebuffer[rt]),A.__webglDepthbuffer[rt]=o.createRenderbuffer(),Mt(A.__webglDepthbuffer[rt],L,!1)}else e.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),Mt(A.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function st(L,A,q){const rt=n.get(L);A!==void 0&&lt(rt.__webglFramebuffer,L,L.texture,36064,3553),q!==void 0&&K(L)}function yt(L){const A=L.texture,q=n.get(L),rt=n.get(A);L.addEventListener("dispose",z),L.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=o.createTexture()),rt.__version=A.version,r.memory.textures++);const at=L.isWebGLCubeRenderTarget===!0,pt=L.isWebGLMultipleRenderTargets===!0,It=x(L)||a;if(at){q.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)q.__webglFramebuffer[xt]=o.createFramebuffer()}else{if(q.__webglFramebuffer=o.createFramebuffer(),pt)if(i.drawBuffers){const xt=L.texture;for(let J=0,bt=xt.length;J<bt;J++){const Tt=n.get(xt[J]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&At(L)===!1){const xt=pt?A:[A];q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let J=0;J<xt.length;J++){const bt=xt[J];q.__webglColorRenderbuffer[J]=o.createRenderbuffer(),o.bindRenderbuffer(36161,q.__webglColorRenderbuffer[J]);const Tt=s.convert(bt.format,bt.encoding),Rt=s.convert(bt.type),wt=T(bt.internalFormat,Tt,Rt,bt.encoding,L.isXRRenderTarget===!0),St=Lt(L);o.renderbufferStorageMultisample(36161,St,wt,L.width,L.height),o.framebufferRenderbuffer(36160,36064+J,36161,q.__webglColorRenderbuffer[J])}o.bindRenderbuffer(36161,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Mt(q.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(at){e.bindTexture(34067,rt.__webglTexture),ft(34067,A,It);for(let xt=0;xt<6;xt++)lt(q.__webglFramebuffer[xt],L,A,36064,34069+xt);E(A,It)&&R(34067),e.unbindTexture()}else if(pt){const xt=L.texture;for(let J=0,bt=xt.length;J<bt;J++){const Tt=xt[J],Rt=n.get(Tt);e.bindTexture(3553,Rt.__webglTexture),ft(3553,Tt,It),lt(q.__webglFramebuffer,L,Tt,36064+J,3553),E(Tt,It)&&R(3553)}e.unbindTexture()}else{let xt=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?xt=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,rt.__webglTexture),ft(xt,A,It),lt(q.__webglFramebuffer,L,A,36064,xt),E(A,It)&&R(xt),e.unbindTexture()}L.depthBuffer&&K(L)}function dt(L){const A=x(L)||a,q=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let rt=0,at=q.length;rt<at;rt++){const pt=q[rt];if(E(pt,A)){const It=L.isWebGLCubeRenderTarget?34067:3553,xt=n.get(pt).__webglTexture;e.bindTexture(It,xt),R(It),e.unbindTexture()}}}function Pt(L){if(a&&L.samples>0&&At(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],q=L.width,rt=L.height;let at=16384;const pt=[],It=L.stencilBuffer?33306:36096,xt=n.get(L),J=L.isWebGLMultipleRenderTargets===!0;if(J)for(let bt=0;bt<A.length;bt++)e.bindFramebuffer(36160,xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+bt,36161,null),e.bindFramebuffer(36160,xt.__webglFramebuffer),o.framebufferTexture2D(36009,36064+bt,3553,null,0);e.bindFramebuffer(36008,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,xt.__webglFramebuffer);for(let bt=0;bt<A.length;bt++){pt.push(36064+bt),L.depthBuffer&&pt.push(It);const Tt=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Tt===!1&&(L.depthBuffer&&(at|=256),L.stencilBuffer&&(at|=1024)),J&&o.framebufferRenderbuffer(36008,36064,36161,xt.__webglColorRenderbuffer[bt]),Tt===!0&&(o.invalidateFramebuffer(36008,[It]),o.invalidateFramebuffer(36009,[It])),J){const Rt=n.get(A[bt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,Rt,0)}o.blitFramebuffer(0,0,q,rt,0,0,q,rt,at,9728),f&&o.invalidateFramebuffer(36008,pt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),J)for(let bt=0;bt<A.length;bt++){e.bindFramebuffer(36160,xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+bt,36161,xt.__webglColorRenderbuffer[bt]);const Tt=n.get(A[bt]).__webglTexture;e.bindFramebuffer(36160,xt.__webglFramebuffer),o.framebufferTexture2D(36009,36064+bt,3553,Tt,0)}e.bindFramebuffer(36009,xt.__webglMultisampledFramebuffer)}}function Lt(L){return Math.min(d,L.samples)}function At(L){const A=n.get(L);return a&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Bt(L){const A=r.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function jt(L,A){const q=L.encoding,rt=L.format,at=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Wo||q!==ui&&(q===ie?a===!1?t.has("EXT_sRGB")===!0&&rt===nn?(L.format=Wo,L.minFilter=We,L.generateMipmaps=!1):A=jc.sRGBToLinear(A):(rt!==nn||at!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),A}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=tt,this.setTexture2DArray=gt,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=st,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=At}function Zg(o,t,e){const n=e.isWebGL2;function i(s,r=null){let a;if(s===hi)return 5121;if(s===Au)return 32819;if(s===Tu)return 32820;if(s===Mu)return 5120;if(s===Su)return 5122;if(s===Gc)return 5123;if(s===Eu)return 5124;if(s===oi)return 5125;if(s===ai)return 5126;if(s===Ts)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Cu)return 6406;if(s===nn)return 6408;if(s===Pu)return 6409;if(s===Lu)return 6410;if(s===ci)return 6402;if(s===$i)return 34041;if(s===Wo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ru)return 6403;if(s===Iu)return 36244;if(s===Du)return 33319;if(s===Nu)return 33320;if(s===Fu)return 36249;if(s===Yr||s===$r||s===Zr||s===Jr)if(r===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$r)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Da||s===Na||s===Fa||s===za)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Da)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Na)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===za)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ua||s===Oa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ua)return r===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Oa)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ba||s===ka||s===Va||s===Ga||s===Ha||s===Wa||s===qa||s===Xa||s===ja||s===Ya||s===$a||s===Za||s===Ja||s===Ka)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ba)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ka)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Va)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ga)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ha)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wa)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qa)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xa)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ja)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ya)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$a)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Za)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ja)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ka)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Kr)return r===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Uu||s===Qa||s===tl||s===el)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Kr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Qa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===el)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qi?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class Jg extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ms extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kg={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Qg extends De{constructor(t,e,n,i,s,r,a,l,c,h){if(h=h!==void 0?h:ci,h!==ci&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ci&&(n=oi),n===void 0&&h===$i&&(n=qi),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1}}class t0 extends Ki{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=e.getContextAttributes();let m=null,p=null;const _=[],y=[],x=new Set,M=new Map,E=new ke;E.layers.enable(1),E.viewport=new we;const R=new ke;R.layers.enable(2),R.viewport=new we;const T=[E,R],w=new Jg;w.layers.enable(1),w.layers.enable(2);let S=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=_[j];return et===void 0&&(et=new wo,_[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=_[j];return et===void 0&&(et=new wo,_[j]=et),et.getGripSpace()},this.getHand=function(j){let et=_[j];return et===void 0&&(et=new wo,_[j]=et),et.getHandSpace()};function z(j){const et=y.indexOf(j.inputSource);if(et===-1)return;const ht=_[et];ht!==void 0&&ht.dispatchEvent({type:j.type,data:j.inputSource})}function C(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",I);for(let j=0;j<_.length;j++){const et=y[j];et!==null&&(y[j]=null,_[j].disconnect(et))}S=null,U=null,t.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",C),i.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),p=new di(f.framebufferWidth,f.framebufferHeight,{format:nn,type:hi,encoding:t.outputEncoding,stencilBuffer:v.stencil})}else{let et=null,ht=null,ft=null;v.depth&&(ft=v.stencil?35056:33190,et=v.stencil?$i:ci,ht=v.stencil?qi:oi);const H={colorFormat:32856,depthFormat:ft,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(H),i.updateRenderState({layers:[u]}),p=new di(u.textureWidth,u.textureHeight,{format:nn,type:hi,depthTexture:new Qg(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:v.stencil,encoding:t.outputEncoding,samples:v.antialias?4:0});const Dt=t.properties.get(p);Dt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(j){for(let et=0;et<j.removed.length;et++){const ht=j.removed[et],ft=y.indexOf(ht);ft>=0&&(y[ft]=null,_[ft].disconnect(ht))}for(let et=0;et<j.added.length;et++){const ht=j.added[et];let ft=y.indexOf(ht);if(ft===-1){for(let Dt=0;Dt<_.length;Dt++)if(Dt>=y.length){y.push(ht),ft=Dt;break}else if(y[Dt]===null){y[Dt]=ht,ft=Dt;break}if(ft===-1)break}const H=_[ft];H&&H.connect(ht)}}const N=new D,F=new D;function W(j,et,ht){N.setFromMatrixPosition(et.matrixWorld),F.setFromMatrixPosition(ht.matrixWorld);const ft=N.distanceTo(F),H=et.projectionMatrix.elements,Dt=ht.projectionMatrix.elements,Nt=H[14]/(H[10]-1),lt=H[14]/(H[10]+1),Mt=(H[9]+1)/H[5],it=(H[9]-1)/H[5],K=(H[8]-1)/H[0],st=(Dt[8]+1)/Dt[0],yt=Nt*K,dt=Nt*st,Pt=ft/(-K+st),Lt=Pt*-K;et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Lt),j.translateZ(Pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const At=Nt+Pt,Bt=lt+Pt,jt=yt-Lt,L=dt+(ft-Lt),A=Mt*lt/Bt*At,q=it*lt/Bt*At;j.projectionMatrix.makePerspective(jt,L,A,q,At,Bt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function V(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;w.near=R.near=E.near=j.near,w.far=R.far=E.far=j.far,(S!==w.near||U!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,U=w.far);const et=j.parent,ht=w.cameras;V(w,et);for(let ft=0;ft<ht.length;ft++)V(ht[ft],et);ht.length===2?W(w,E,R):w.projectionMatrix.copy(E.projectionMatrix),Y(j,w,et)};function Y(j,et,ht){ht===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(ht.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const ft=j.children;for(let H=0,Dt=ft.length;H<Dt;H++)ft[H].updateMatrixWorld(!0);j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.getPlanes=function(){return x};let tt=null;function gt(j,et){if(h=et.getViewerPose(c||r),g=et,h!==null){const ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let ft=!1;ht.length!==w.cameras.length&&(w.cameras.length=0,ft=!0);for(let H=0;H<ht.length;H++){const Dt=ht[H];let Nt=null;if(f!==null)Nt=f.getViewport(Dt);else{const Mt=d.getViewSubImage(u,Dt);Nt=Mt.viewport,H===0&&(t.setRenderTargetTextures(p,Mt.colorTexture,u.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(p))}let lt=T[H];lt===void 0&&(lt=new ke,lt.layers.enable(H),lt.viewport=new we,T[H]=lt),lt.matrix.fromArray(Dt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Dt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),H===0&&(w.matrix.copy(lt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ft===!0&&w.cameras.push(lt)}}for(let ht=0;ht<_.length;ht++){const ft=y[ht],H=_[ht];ft!==null&&H!==void 0&&H.update(ft,et,c||r)}if(tt&&tt(j,et),et.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:et.detectedPlanes});let ht=null;for(const ft of x)et.detectedPlanes.has(ft)||(ht===null&&(ht=[]),ht.push(ft));if(ht!==null)for(const ft of ht)x.delete(ft),M.delete(ft),n.dispatchEvent({type:"planeremoved",data:ft});for(const ft of et.detectedPlanes)if(!x.has(ft))x.add(ft),M.set(ft,et.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ft});else{const H=M.get(ft);ft.lastChangedTime>H&&(M.set(ft,ft.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ft}))}}g=null}const X=new sh;X.setAnimationLoop(gt),this.setAnimationLoop=function(j){tt=j},this.dispose=function(){}}}function e0(o,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,th(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Me&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Me&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=o.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Me&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function n0(o,t,e,n){let i={},s={},r=[];const a=e.isWebGL2?o.getParameter(35375):0;function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(_,M);const E=t.render.frame;s[_.id]!==E&&(u(_),s[_.id]=E)}function h(_){const y=d();_.__bindingPointIndex=y;const x=o.createBuffer(),M=_.__size,E=_.usage;return o.bindBuffer(35345,x),o.bufferData(35345,M,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,y,x),x}function d(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const y=i[_.id],x=_.uniforms,M=_.__cache;o.bindBuffer(35345,y);for(let E=0,R=x.length;E<R;E++){const T=x[E];if(f(T,E,M)===!0){const w=T.__offset,S=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let z=0;z<S.length;z++){const C=S[z],I=v(C);typeof C=="number"?(T.__data[0]=C,o.bufferSubData(35345,w+U,T.__data)):C.isMatrix3?(T.__data[0]=C.elements[0],T.__data[1]=C.elements[1],T.__data[2]=C.elements[2],T.__data[3]=C.elements[0],T.__data[4]=C.elements[3],T.__data[5]=C.elements[4],T.__data[6]=C.elements[5],T.__data[7]=C.elements[0],T.__data[8]=C.elements[6],T.__data[9]=C.elements[7],T.__data[10]=C.elements[8],T.__data[11]=C.elements[0]):(C.toArray(T.__data,U),U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,T.__data)}}o.bindBuffer(35345,null)}function f(_,y,x){const M=_.value;if(x[y]===void 0){if(typeof M=="number")x[y]=M;else{const E=Array.isArray(M)?M:[M],R=[];for(let T=0;T<E.length;T++)R.push(E[T].clone());x[y]=R}return!0}else if(typeof M=="number"){if(x[y]!==M)return x[y]=M,!0}else{const E=Array.isArray(x[y])?x[y]:[x[y]],R=Array.isArray(M)?M:[M];for(let T=0;T<E.length;T++){const w=E[T];if(w.equals(R[T])===!1)return w.copy(R[T]),!0}}return!1}function g(_){const y=_.uniforms;let x=0;const M=16;let E=0;for(let R=0,T=y.length;R<T;R++){const w=y[R],S={boundary:0,storage:0},U=Array.isArray(w.value)?w.value:[w.value];for(let z=0,C=U.length;z<C;z++){const I=U[z],N=v(I);S.boundary+=N.boundary,S.storage+=N.storage}if(w.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=x,R>0){E=x%M;const z=M-E;E!==0&&z-S.boundary<0&&(x+=M-E,w.__offset=x)}x+=S.storage}return E=x%M,E>0&&(x+=M-E),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const _ in i)o.deleteBuffer(i[_]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}function i0(){const o=Ps("canvas");return o.style.display="block",o}class ch{constructor(t={}){const{canvas:e=i0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=r;let f=null,g=null;const v=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ui,this.useLegacyLights=!0,this.toneMapping=Rn,this.toneMappingExposure=1;const p=this;let _=!1,y=0,x=0,M=null,E=-1,R=null;const T=new we,w=new we;let S=null,U=e.width,z=e.height,C=1,I=null,N=null;const F=new we(0,0,U,z),W=new we(0,0,U,z);let V=!1;const Y=new aa;let tt=!1,gt=!1,X=null;const j=new oe,et=new D,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return M===null?C:1}let H=n;function Dt(P,k){for(let $=0;$<P.length;$++){const B=P[$],Q=e.getContext(B,k);if(Q!==null)return Q}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ia}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",Jt,!1),H===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),H=Dt(k,P),H===null)throw Dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Nt,lt,Mt,it,K,st,yt,dt,Pt,Lt,At,Bt,jt,L,A,q,rt,at,pt,It,xt,J,bt,Tt;function Rt(){Nt=new pm(H),lt=new am(H,Nt,t),Nt.init(lt),J=new Zg(H,Nt,lt),Mt=new Yg(H,Nt,lt),it=new vm,K=new Ng,st=new $g(H,Nt,Mt,K,lt,J,it),yt=new cm(p),dt=new fm(p),Pt=new Td(H,lt),bt=new rm(H,Nt,Pt,lt),Lt=new mm(H,Pt,it,bt),At=new wm(H,Lt,Pt,it),pt=new ym(H,lt,st),q=new lm(K),Bt=new Dg(p,yt,dt,Nt,lt,bt,q),jt=new e0(p,K),L=new zg,A=new Gg(Nt,lt),at=new sm(p,yt,dt,Mt,At,u,l),rt=new jg(p,At,lt),Tt=new n0(H,it,lt,Mt),It=new om(H,Nt,it,lt),xt=new gm(H,Nt,it,lt),it.programs=Bt.programs,p.capabilities=lt,p.extensions=Nt,p.properties=K,p.renderLists=L,p.shadowMap=rt,p.state=Mt,p.info=it}Rt();const wt=new t0(p,H);this.xr=wt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=Nt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Nt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(P){P!==void 0&&(C=P,this.setSize(U,z,!1))},this.getSize=function(P){return P.set(U,z)},this.setSize=function(P,k,$=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,z=k,e.width=Math.floor(P*C),e.height=Math.floor(k*C),$===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(U*C,z*C).floor()},this.setDrawingBufferSize=function(P,k,$){U=P,z=k,C=$,e.width=Math.floor(P*$),e.height=Math.floor(k*$),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(F)},this.setViewport=function(P,k,$,B){P.isVector4?F.set(P.x,P.y,P.z,P.w):F.set(P,k,$,B),Mt.viewport(T.copy(F).multiplyScalar(C).floor())},this.getScissor=function(P){return P.copy(W)},this.setScissor=function(P,k,$,B){P.isVector4?W.set(P.x,P.y,P.z,P.w):W.set(P,k,$,B),Mt.scissor(w.copy(W).multiplyScalar(C).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(P){Mt.setScissorTest(V=P)},this.setOpaqueSort=function(P){I=P},this.setTransparentSort=function(P){N=P},this.getClearColor=function(P){return P.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(P=!0,k=!0,$=!0){let B=0;P&&(B|=16384),k&&(B|=256),$&&(B|=1024),H.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",Jt,!1),L.dispose(),A.dispose(),K.dispose(),yt.dispose(),dt.dispose(),At.dispose(),bt.dispose(),Tt.dispose(),Bt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Et),wt.removeEventListener("sessionend",ee),X&&(X.dispose(),X=null),se.stop()};function St(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Wt(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const P=it.autoReset,k=rt.enabled,$=rt.autoUpdate,B=rt.needsUpdate,Q=rt.type;Rt(),it.autoReset=P,rt.enabled=k,rt.autoUpdate=$,rt.needsUpdate=B,rt.type=Q}function Jt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ae(P){const k=P.target;k.removeEventListener("dispose",ae),O(k)}function O(P){Z(P),K.remove(P)}function Z(P){const k=K.get(P).programs;k!==void 0&&(k.forEach(function($){Bt.releaseProgram($)}),P.isShaderMaterial&&Bt.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,$,B,Q,Ct){k===null&&(k=ht);const Ft=Q.isMesh&&Q.matrixWorld.determinant()<0,zt=Hh(P,k,$,B,Q);Mt.setMaterial(B,Ft);let Ut=$.index,kt=1;B.wireframe===!0&&(Ut=Lt.getWireframeAttribute($),kt=2);const Vt=$.drawRange,Gt=$.attributes.position;let Kt=Vt.start*kt,Te=(Vt.start+Vt.count)*kt;Ct!==null&&(Kt=Math.max(Kt,Ct.start*kt),Te=Math.min(Te,(Ct.start+Ct.count)*kt)),Ut!==null?(Kt=Math.max(Kt,0),Te=Math.min(Te,Ut.count)):Gt!=null&&(Kt=Math.max(Kt,0),Te=Math.min(Te,Gt.count));const Ye=Te-Kt;if(Ye<0||Ye===1/0)return;bt.setup(Q,B,zt,$,Ut);let jn,ue=It;if(Ut!==null&&(jn=Pt.get(Ut),ue=xt,ue.setIndex(jn)),Q.isMesh)B.wireframe===!0?(Mt.setLineWidth(B.wireframeLinewidth*ft()),ue.setMode(1)):ue.setMode(4);else if(Q.isLine){let qt=B.linewidth;qt===void 0&&(qt=1),Mt.setLineWidth(qt*ft()),Q.isLineSegments?ue.setMode(1):Q.isLineLoop?ue.setMode(2):ue.setMode(3)}else Q.isPoints?ue.setMode(0):Q.isSprite&&ue.setMode(4);if(Q.isInstancedMesh)ue.renderInstances(Kt,Ye,Q.count);else if($.isInstancedBufferGeometry){const qt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Hr=Math.min($.instanceCount,qt);ue.renderInstances(Kt,Ye,Hr)}else ue.render(Kt,Ye)},this.compile=function(P,k){function $(B,Q,Ct){B.transparent===!0&&B.side===je&&B.forceSinglePass===!1?(B.side=Me,B.needsUpdate=!0,Bs(B,Q,Ct),B.side=Vn,B.needsUpdate=!0,Bs(B,Q,Ct),B.side=je):Bs(B,Q,Ct)}g=A.get(P),g.init(),m.push(g),P.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights(p.useLegacyLights),P.traverse(function(B){const Q=B.material;if(Q)if(Array.isArray(Q))for(let Ct=0;Ct<Q.length;Ct++){const Ft=Q[Ct];$(Ft,P,B)}else $(Q,P,B)}),m.pop(),g=null};let ot=null;function _t(P){ot&&ot(P)}function Et(){se.stop()}function ee(){se.start()}const se=new sh;se.setAnimationLoop(_t),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(P){ot=P,wt.setAnimationLoop(P),P===null?se.stop():se.start()},wt.addEventListener("sessionstart",Et),wt.addEventListener("sessionend",ee),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(k),k=wt.getCamera()),P.isScene===!0&&P.onBeforeRender(p,P,k,M),g=A.get(P,m.length),g.init(),m.push(g),j.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(j),gt=this.localClippingEnabled,tt=q.init(this.clippingPlanes,gt),f=L.get(P,v.length),f.init(),v.push(f),Se(P,k,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(I,N),tt===!0&&q.beginShadows();const $=g.state.shadowsArray;if(rt.render($,P,k),tt===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(f,P),g.setupLights(p.useLegacyLights),k.isArrayCamera){const B=k.cameras;for(let Q=0,Ct=B.length;Q<Ct;Q++){const Ft=B[Q];In(f,P,Ft,Ft.viewport)}}else In(f,P,k);M!==null&&(st.updateMultisampleRenderTarget(M),st.updateRenderTargetMipmap(M)),P.isScene===!0&&P.onAfterRender(p,P,k),bt.resetDefaultState(),E=-1,R=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?f=v[v.length-1]:f=null};function Se(P,k,$,B){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){B&&et.setFromMatrixPosition(P.matrixWorld).applyMatrix4(j);const Ft=At.update(P),zt=P.material;zt.visible&&f.push(P,Ft,zt,$,et.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==it.render.frame&&(P.skeleton.update(),P.skeleton.frame=it.render.frame),!P.frustumCulled||Y.intersectsObject(P))){B&&et.setFromMatrixPosition(P.matrixWorld).applyMatrix4(j);const Ft=At.update(P),zt=P.material;if(Array.isArray(zt)){const Ut=Ft.groups;for(let kt=0,Vt=Ut.length;kt<Vt;kt++){const Gt=Ut[kt],Kt=zt[Gt.materialIndex];Kt&&Kt.visible&&f.push(P,Ft,Kt,$,et.z,Gt)}}else zt.visible&&f.push(P,Ft,zt,$,et.z,null)}}const Ct=P.children;for(let Ft=0,zt=Ct.length;Ft<zt;Ft++)Se(Ct[Ft],k,$,B)}function In(P,k,$,B){const Q=P.opaque,Ct=P.transmissive,Ft=P.transparent;g.setupLightsView($),tt===!0&&q.setGlobalState(p.clippingPlanes,$),Ct.length>0&&le(Q,Ct,k,$),B&&Mt.viewport(T.copy(B)),Q.length>0&&Ge(Q,k,$),Ct.length>0&&Ge(Ct,k,$),Ft.length>0&&Ge(Ft,k,$),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function le(P,k,$,B){if(X===null){const zt=lt.isWebGL2;X=new di(1024,1024,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")?Ts:hi,minFilter:As,samples:zt&&a===!0?4:0})}const Q=p.getRenderTarget();p.setRenderTarget(X),p.clear();const Ct=p.toneMapping;p.toneMapping=Rn,Ge(P,$,B),st.updateMultisampleRenderTarget(X),st.updateRenderTargetMipmap(X);let Ft=!1;for(let zt=0,Ut=k.length;zt<Ut;zt++){const kt=k[zt],Vt=kt.object,Gt=kt.geometry,Kt=kt.material,Te=kt.group;if(Kt.side===je&&Vt.layers.test(B.layers)){const Ye=Kt.side;Kt.side=Me,Kt.needsUpdate=!0,cn(Vt,$,B,Gt,Kt,Te),Kt.side=Ye,Kt.needsUpdate=!0,Ft=!0}}Ft===!0&&(st.updateMultisampleRenderTarget(X),st.updateRenderTargetMipmap(X)),p.setRenderTarget(Q),p.toneMapping=Ct}function Ge(P,k,$){const B=k.isScene===!0?k.overrideMaterial:null;for(let Q=0,Ct=P.length;Q<Ct;Q++){const Ft=P[Q],zt=Ft.object,Ut=Ft.geometry,kt=B===null?Ft.material:B,Vt=Ft.group;zt.layers.test($.layers)&&cn(zt,k,$,Ut,kt,Vt)}}function cn(P,k,$,B,Q,Ct){P.onBeforeRender(p,k,$,B,Q,Ct),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(p,k,$,B,P,Ct),Q.transparent===!0&&Q.side===je&&Q.forceSinglePass===!1?(Q.side=Me,Q.needsUpdate=!0,p.renderBufferDirect($,k,B,Q,P,Ct),Q.side=Vn,Q.needsUpdate=!0,p.renderBufferDirect($,k,B,Q,P,Ct),Q.side=je):p.renderBufferDirect($,k,B,Q,P,Ct),P.onAfterRender(p,k,$,B,Q,Ct)}function Bs(P,k,$){k.isScene!==!0&&(k=ht);const B=K.get(P),Q=g.state.lights,Ct=g.state.shadowsArray,Ft=Q.state.version,zt=Bt.getParameters(P,Q.state,Ct,k,$),Ut=Bt.getProgramCacheKey(zt);let kt=B.programs;B.environment=P.isMeshStandardMaterial?k.environment:null,B.fog=k.fog,B.envMap=(P.isMeshStandardMaterial?dt:yt).get(P.envMap||B.environment),kt===void 0&&(P.addEventListener("dispose",ae),kt=new Map,B.programs=kt);let Vt=kt.get(Ut);if(Vt!==void 0){if(B.currentProgram===Vt&&B.lightsStateVersion===Ft)return Sa(P,zt),Vt}else zt.uniforms=Bt.getUniforms(P),P.onBuild($,zt,p),P.onBeforeCompile(zt,p),Vt=Bt.acquireProgram(zt,Ut),kt.set(Ut,Vt),B.uniforms=zt.uniforms;const Gt=B.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Gt.clippingPlanes=q.uniform),Sa(P,zt),B.needsLights=qh(P),B.lightsStateVersion=Ft,B.needsLights&&(Gt.ambientLightColor.value=Q.state.ambient,Gt.lightProbe.value=Q.state.probe,Gt.directionalLights.value=Q.state.directional,Gt.directionalLightShadows.value=Q.state.directionalShadow,Gt.spotLights.value=Q.state.spot,Gt.spotLightShadows.value=Q.state.spotShadow,Gt.rectAreaLights.value=Q.state.rectArea,Gt.ltc_1.value=Q.state.rectAreaLTC1,Gt.ltc_2.value=Q.state.rectAreaLTC2,Gt.pointLights.value=Q.state.point,Gt.pointLightShadows.value=Q.state.pointShadow,Gt.hemisphereLights.value=Q.state.hemi,Gt.directionalShadowMap.value=Q.state.directionalShadowMap,Gt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Gt.spotShadowMap.value=Q.state.spotShadowMap,Gt.spotLightMatrix.value=Q.state.spotLightMatrix,Gt.spotLightMap.value=Q.state.spotLightMap,Gt.pointShadowMap.value=Q.state.pointShadowMap,Gt.pointShadowMatrix.value=Q.state.pointShadowMatrix);const Kt=Vt.getUniforms(),Te=Mr.seqWithValue(Kt.seq,Gt);return B.currentProgram=Vt,B.uniformsList=Te,Vt}function Sa(P,k){const $=K.get(P);$.outputEncoding=k.outputEncoding,$.instancing=k.instancing,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Hh(P,k,$,B,Q){k.isScene!==!0&&(k=ht),st.resetTextureUnits();const Ct=k.fog,Ft=B.isMeshStandardMaterial?k.environment:null,zt=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:ui,Ut=(B.isMeshStandardMaterial?dt:yt).get(B.envMap||Ft),kt=B.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Vt=!!B.normalMap&&!!$.attributes.tangent,Gt=!!$.morphAttributes.position,Kt=!!$.morphAttributes.normal,Te=!!$.morphAttributes.color,Ye=B.toneMapped?p.toneMapping:Rn,jn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=jn!==void 0?jn.length:0,qt=K.get(B),Hr=g.state.lights;if(tt===!0&&(gt===!0||P!==R)){const Ne=P===R&&B.id===E;q.setState(B,P,Ne)}let xe=!1;B.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Hr.state.version||qt.outputEncoding!==zt||Q.isInstancedMesh&&qt.instancing===!1||!Q.isInstancedMesh&&qt.instancing===!0||Q.isSkinnedMesh&&qt.skinning===!1||!Q.isSkinnedMesh&&qt.skinning===!0||qt.envMap!==Ut||B.fog===!0&&qt.fog!==Ct||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==q.numPlanes||qt.numIntersection!==q.numIntersection)||qt.vertexAlphas!==kt||qt.vertexTangents!==Vt||qt.morphTargets!==Gt||qt.morphNormals!==Kt||qt.morphColors!==Te||qt.toneMapping!==Ye||lt.isWebGL2===!0&&qt.morphTargetsCount!==ue)&&(xe=!0):(xe=!0,qt.__version=B.version);let Yn=qt.currentProgram;xe===!0&&(Yn=Bs(B,k,Q));let Ea=!1,ts=!1,Wr=!1;const Ce=Yn.getUniforms(),$n=qt.uniforms;if(Mt.useProgram(Yn.program)&&(Ea=!0,ts=!0,Wr=!0),B.id!==E&&(E=B.id,ts=!0),Ea||R!==P){if(Ce.setValue(H,"projectionMatrix",P.projectionMatrix),lt.logarithmicDepthBuffer&&Ce.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),R!==P&&(R=P,ts=!0,Wr=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Ne=Ce.map.cameraPosition;Ne!==void 0&&Ne.setValue(H,et.setFromMatrixPosition(P.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ce.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Q.isSkinnedMesh)&&Ce.setValue(H,"viewMatrix",P.matrixWorldInverse)}if(Q.isSkinnedMesh){Ce.setOptional(H,Q,"bindMatrix"),Ce.setOptional(H,Q,"bindMatrixInverse");const Ne=Q.skeleton;Ne&&(lt.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ce.setValue(H,"boneTexture",Ne.boneTexture,st),Ce.setValue(H,"boneTextureSize",Ne.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qr=$.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0&&lt.isWebGL2===!0)&&pt.update(Q,$,Yn),(ts||qt.receiveShadow!==Q.receiveShadow)&&(qt.receiveShadow=Q.receiveShadow,Ce.setValue(H,"receiveShadow",Q.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&($n.envMap.value=Ut,$n.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),ts&&(Ce.setValue(H,"toneMappingExposure",p.toneMappingExposure),qt.needsLights&&Wh($n,Wr),Ct&&B.fog===!0&&jt.refreshFogUniforms($n,Ct),jt.refreshMaterialUniforms($n,B,C,z,X),Mr.upload(H,qt.uniformsList,$n,st)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Mr.upload(H,qt.uniformsList,$n,st),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ce.setValue(H,"center",Q.center),Ce.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ce.setValue(H,"normalMatrix",Q.normalMatrix),Ce.setValue(H,"modelMatrix",Q.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ne=B.uniformsGroups;for(let Xr=0,Xh=Ne.length;Xr<Xh;Xr++)if(lt.isWebGL2){const Aa=Ne[Xr];Tt.update(Aa,Yn),Tt.bind(Aa,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function Wh(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function qh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(P,k,$){K.get(P.texture).__webglTexture=k,K.get(P.depthTexture).__webglTexture=$;const B=K.get(P);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=$===void 0,B.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,k){const $=K.get(P);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(P,k=0,$=0){M=P,y=k,x=$;let B=!0,Q=null,Ct=!1,Ft=!1;if(P){const Ut=K.get(P);Ut.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(36160,null),B=!1):Ut.__webglFramebuffer===void 0?st.setupRenderTarget(P):Ut.__hasExternalTextures&&st.rebindTextures(P,K.get(P.texture).__webglTexture,K.get(P.depthTexture).__webglTexture);const kt=P.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ft=!0);const Vt=K.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Q=Vt[k],Ct=!0):lt.isWebGL2&&P.samples>0&&st.useMultisampledRTT(P)===!1?Q=K.get(P).__webglMultisampledFramebuffer:Q=Vt,T.copy(P.viewport),w.copy(P.scissor),S=P.scissorTest}else T.copy(F).multiplyScalar(C).floor(),w.copy(W).multiplyScalar(C).floor(),S=V;if(Mt.bindFramebuffer(36160,Q)&&lt.drawBuffers&&B&&Mt.drawBuffers(P,Q),Mt.viewport(T),Mt.scissor(w),Mt.setScissorTest(S),Ct){const Ut=K.get(P.texture);H.framebufferTexture2D(36160,36064,34069+k,Ut.__webglTexture,$)}else if(Ft){const Ut=K.get(P.texture),kt=k||0;H.framebufferTextureLayer(36160,36064,Ut.__webglTexture,$||0,kt)}E=-1},this.readRenderTargetPixels=function(P,k,$,B,Q,Ct,Ft){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=K.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt){Mt.bindFramebuffer(36160,zt);try{const Ut=P.texture,kt=Ut.format,Vt=Ut.type;if(kt!==nn&&J.convert(kt)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Vt===Ts&&(Nt.has("EXT_color_buffer_half_float")||lt.isWebGL2&&Nt.has("EXT_color_buffer_float"));if(Vt!==hi&&J.convert(Vt)!==H.getParameter(35738)&&!(Vt===ai&&(lt.isWebGL2||Nt.has("OES_texture_float")||Nt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-B&&$>=0&&$<=P.height-Q&&H.readPixels(k,$,B,Q,J.convert(kt),J.convert(Vt),Ct)}finally{const Ut=M!==null?K.get(M).__webglFramebuffer:null;Mt.bindFramebuffer(36160,Ut)}}},this.copyFramebufferToTexture=function(P,k,$=0){const B=Math.pow(2,-$),Q=Math.floor(k.image.width*B),Ct=Math.floor(k.image.height*B);st.setTexture2D(k,0),H.copyTexSubImage2D(3553,$,0,0,P.x,P.y,Q,Ct),Mt.unbindTexture()},this.copyTextureToTexture=function(P,k,$,B=0){const Q=k.image.width,Ct=k.image.height,Ft=J.convert($.format),zt=J.convert($.type);st.setTexture2D($,0),H.pixelStorei(37440,$.flipY),H.pixelStorei(37441,$.premultiplyAlpha),H.pixelStorei(3317,$.unpackAlignment),k.isDataTexture?H.texSubImage2D(3553,B,P.x,P.y,Q,Ct,Ft,zt,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(3553,B,P.x,P.y,k.mipmaps[0].width,k.mipmaps[0].height,Ft,k.mipmaps[0].data):H.texSubImage2D(3553,B,P.x,P.y,Ft,zt,k.image),B===0&&$.generateMipmaps&&H.generateMipmap(3553),Mt.unbindTexture()},this.copyTextureToTexture3D=function(P,k,$,B,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=P.max.x-P.min.x+1,Ft=P.max.y-P.min.y+1,zt=P.max.z-P.min.z+1,Ut=J.convert(B.format),kt=J.convert(B.type);let Vt;if(B.isData3DTexture)st.setTexture3D(B,0),Vt=32879;else if(B.isDataArrayTexture)st.setTexture2DArray(B,0),Vt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,B.flipY),H.pixelStorei(37441,B.premultiplyAlpha),H.pixelStorei(3317,B.unpackAlignment);const Gt=H.getParameter(3314),Kt=H.getParameter(32878),Te=H.getParameter(3316),Ye=H.getParameter(3315),jn=H.getParameter(32877),ue=$.isCompressedTexture?$.mipmaps[0]:$.image;H.pixelStorei(3314,ue.width),H.pixelStorei(32878,ue.height),H.pixelStorei(3316,P.min.x),H.pixelStorei(3315,P.min.y),H.pixelStorei(32877,P.min.z),$.isDataTexture||$.isData3DTexture?H.texSubImage3D(Vt,Q,k.x,k.y,k.z,Ct,Ft,zt,Ut,kt,ue.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Vt,Q,k.x,k.y,k.z,Ct,Ft,zt,Ut,ue.data)):H.texSubImage3D(Vt,Q,k.x,k.y,k.z,Ct,Ft,zt,Ut,kt,ue),H.pixelStorei(3314,Gt),H.pixelStorei(32878,Kt),H.pixelStorei(3316,Te),H.pixelStorei(3315,Ye),H.pixelStorei(32877,jn),Q===0&&B.generateMipmaps&&H.generateMipmap(Vt),Mt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?st.setTextureCube(P,0):P.isData3DTexture?st.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?st.setTexture2DArray(P,0):st.setTexture2D(P,0),Mt.unbindTexture()},this.resetState=function(){y=0,x=0,M=null,Mt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}class s0 extends ch{}s0.prototype.isWebGL1Renderer=!0;class r0 extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class hh extends gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gl=new D,Hl=new D,Wl=new oe,bo=new oa,or=new zs;class o0 extends Qt{constructor(t=new he,e=new hh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Gl.fromBufferAttribute(e,i-1),Hl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Gl.distanceTo(Hl);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=s,t.ray.intersectsSphere(or)===!1)return;Wl.copy(i).invert(),bo.copy(t.ray).applyMatrix4(Wl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,h=new D,d=new D,u=new D,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,r.start),_=Math.min(g.count,r.start+r.count);for(let y=p,x=_-1;y<x;y+=f){const M=g.getX(y),E=g.getX(y+1);if(c.fromBufferAttribute(m,M),h.fromBufferAttribute(m,E),bo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(u);T<t.near||T>t.far||e.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),_=Math.min(m.count,r.start+r.count);for(let y=p,x=_-1;y<x;y+=f){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),bo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(u);E<t.near||E>t.far||e.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ql=new D,Xl=new D;class a0 extends o0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)ql.fromBufferAttribute(e,i),Xl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ql.distanceTo(Xl);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ca extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jl=new oe,jo=new oa,ar=new zs,lr=new D;class uh extends Qt{constructor(t=new he,e=new ca){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(i),ar.radius+=s,t.ray.intersectsSphere(ar)===!1)return;jl.copy(i).invert(),jo.copy(t.ray).applyMatrix4(jl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,v=f;g<v;g++){const m=c.getX(g);lr.fromBufferAttribute(d,m),Yl(lr,m,l,i,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,v=f;g<v;g++)lr.fromBufferAttribute(d,g),Yl(lr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yl(o,t,e,n,i,s,r){const a=jo.distanceSqToPoint(o);if(a<e){const l=new D;jo.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(r-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=e||(r.isVector2?new ct:new D);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],s=[],r=[],a=new D,l=new oe;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new D)}s[0]=new D,r[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ge(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(ge(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ha extends _n{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new ct,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class l0 extends ha{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ua(){let o=0,t=0,e=0,n=0;function i(s,r,a,l){o=s,t=a,e=-3*s+3*r-2*a-l,n=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,h,d){let u=(r-s)/c-(a-s)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+d)+(l-a)/d;u*=h,f*=h,i(r,a,u,f)},calc:function(s){const r=s*s,a=r*s;return o+t*s+e*r+n*a}}}const cr=new D,Mo=new ua,So=new ua,Eo=new ua;class c0 extends _n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(cr.subVectors(i[0],i[1]).add(i[0]),c=cr);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(cr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=cr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Mo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),So.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),Eo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),So.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Eo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Mo.calc(l),So.calc(l),Eo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $l(o,t,e,n,i){const s=(n-t)*.5,r=(i-e)*.5,a=o*o,l=o*a;return(2*e-2*n+s+r)*l+(-3*e+3*n-2*s-r)*a+s*o+e}function h0(o,t){const e=1-o;return e*e*t}function u0(o,t){return 2*(1-o)*o*t}function d0(o,t){return o*o*t}function ys(o,t,e,n){return h0(o,t)+u0(o,e)+d0(o,n)}function f0(o,t){const e=1-o;return e*e*e*t}function p0(o,t){const e=1-o;return 3*e*e*o*t}function m0(o,t){return 3*(1-o)*o*o*t}function g0(o,t){return o*o*o*t}function ws(o,t,e,n,i){return f0(o,t)+p0(o,e)+m0(o,n)+g0(o,i)}class dh extends _n{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ws(t,i.x,s.x,r.x,a.x),ws(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class v0 extends _n{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ws(t,i.x,s.x,r.x,a.x),ws(t,i.y,s.y,r.y,a.y),ws(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class da extends _n{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _0 extends _n{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fh extends _n{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ys(t,i.x,s.x,r.x),ys(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class x0 extends _n{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ys(t,i.x,s.x,r.x),ys(t,i.y,s.y,r.y),ys(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ph extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set($l(a,l.x,c.x,h.x,d.x),$l(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var mh=Object.freeze({__proto__:null,ArcCurve:l0,CatmullRomCurve3:c0,CubicBezierCurve:dh,CubicBezierCurve3:v0,EllipseCurve:ha,LineCurve:da,LineCurve3:_0,QuadraticBezierCurve:fh,QuadraticBezierCurve3:x0,SplineCurve:ph});class y0 extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new da(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new mh[i.type]().fromJSON(i))}return this}}class Yo extends y0{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new da(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new fh(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){const a=new dh(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ph(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,r,a,l),this}absellipse(t,e,n,i,s,r,a,l){const c=new ha(t,e,n,i,s,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fa extends he{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ge(i,0,Math.PI*2);const s=[],r=[],a=[],l=[],c=[],h=1/e,d=new D,u=new ct,f=new D,g=new D,v=new D;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=e;_++){const y=n+_*h*i,x=Math.sin(y),M=Math.cos(y);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*x,d.y=t[E].y,d.z=t[E].x*M,r.push(d.x,d.y,d.z),u.x=_/e,u.y=E/(t.length-1),a.push(u.x,u.y);const R=l[3*E+0]*x,T=l[3*E+1],w=l[3*E+0]*M;c.push(R,T,w)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){const x=y+_*t.length,M=x,E=x+t.length,R=x+t.length+1,T=x+1;s.push(M,E,T),s.push(R,T,E)}this.setIndex(s),this.setAttribute("position",new Zt(r,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.points,t.segments,t.phiStart,t.phiLength)}}class pa extends fa{constructor(t=1,e=1,n=4,i=8){const s=new Yo;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new pa(t.radius,t.length,t.capSegments,t.radialSegments)}}class ma extends he{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function _(){const x=new D,M=new D;let E=0;const R=(e-t)/n;for(let T=0;T<=s;T++){const w=[],S=T/s,U=S*(e-t)+t;for(let z=0;z<=i;z++){const C=z/i,I=C*l+a,N=Math.sin(I),F=Math.cos(I);M.x=U*N,M.y=-S*n+m,M.z=U*F,d.push(M.x,M.y,M.z),x.set(N,R,F).normalize(),u.push(x.x,x.y,x.z),f.push(C,1-S),w.push(g++)}v.push(w)}for(let T=0;T<i;T++)for(let w=0;w<s;w++){const S=v[w][T],U=v[w+1][T],z=v[w+1][T+1],C=v[w][T+1];h.push(S,U,C),h.push(U,z,C),E+=6}c.addGroup(p,E,0),p+=E}function y(x){const M=g,E=new ct,R=new D;let T=0;const w=x===!0?t:e,S=x===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,m*S,0),u.push(0,S,0),f.push(.5,.5),g++;const U=g;for(let z=0;z<=i;z++){const I=z/i*l+a,N=Math.cos(I),F=Math.sin(I);R.x=w*F,R.y=m*S,R.z=w*N,d.push(R.x,R.y,R.z),u.push(0,S,0),E.x=N*.5+.5,E.y=F*.5*S+.5,f.push(E.x,E.y),g++}for(let z=0;z<i;z++){const C=M+z,I=U+z;x===!0?h.push(I,I+1,C):h.push(I+1,I,C),T+=3}c.addGroup(p,T,x===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ga extends he{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],r=[];a(i),c(n),h(),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(s.slice(),3)),this.setAttribute("uv",new Zt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new D,x=new D,M=new D;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],x),f(e[E+2],M),l(y,x,M,_)}function l(_,y,x,M){const E=M+1,R=[];for(let T=0;T<=E;T++){R[T]=[];const w=_.clone().lerp(x,T/E),S=y.clone().lerp(x,T/E),U=E-T;for(let z=0;z<=U;z++)z===0&&T===E?R[T][z]=w:R[T][z]=w.clone().lerp(S,z/U)}for(let T=0;T<E;T++)for(let w=0;w<2*(E-T)-1;w++){const S=Math.floor(w/2);w%2===0?(u(R[T][S+1]),u(R[T+1][S]),u(R[T][S])):(u(R[T][S+1]),u(R[T+1][S+1]),u(R[T+1][S]))}}function c(_){const y=new D;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(_),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function h(){const _=new D;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const x=m(_)/2/Math.PI+.5,M=p(_)/Math.PI+.5;r.push(x,1-M)}g(),d()}function d(){for(let _=0;_<r.length;_+=6){const y=r[_+0],x=r[_+2],M=r[_+4],E=Math.max(y,x,M),R=Math.min(y,x,M);E>.9&&R<.1&&(y<.2&&(r[_+0]+=1),x<.2&&(r[_+2]+=1),M<.2&&(r[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function f(_,y){const x=_*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const _=new D,y=new D,x=new D,M=new D,E=new ct,R=new ct,T=new ct;for(let w=0,S=0;w<s.length;w+=9,S+=6){_.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),E.set(r[S+0],r[S+1]),R.set(r[S+2],r[S+3]),T.set(r[S+4],r[S+5]),M.copy(_).add(y).add(x).divideScalar(3);const U=m(M);v(E,S+0,_,U),v(R,S+2,y,U),v(T,S+4,x,U)}}function v(_,y,x,M){M<0&&_.x===1&&(r[y]=_.x-1),x.x===0&&x.z===0&&(r[y]=M/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.vertices,t.indices,t.radius,t.details)}}let gs=class extends Yo{constructor(t){super(t),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Yo().fromJSON(i))}return this}};const w0={triangulate:function(o,t,e=2){const n=t&&t.length,i=n?t[0]*e:o.length;let s=gh(o,0,i,e,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c,h,d,u,f;if(n&&(s=A0(o,t,s,e)),o.length>80*e){a=c=o[0],l=h=o[1];for(let g=e;g<i;g+=e)d=o[g],u=o[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Rs(s,r,e,a,l,f,0),r}};function gh(o,t,e,n,i){let s,r;if(i===U0(o,t,e,n)>0)for(s=t;s<e;s+=n)r=Zl(s,o[s],o[s+1],r);else for(s=e-n;s>=t;s-=n)r=Zl(s,o[s],o[s+1],r);return r&&zr(r,r.next)&&(Ds(r),r=r.next),r}function fi(o,t){if(!o)return o;t||(t=o);let e=o,n;do if(n=!1,!e.steiner&&(zr(e,e.next)||re(e.prev,e,e.next)===0)){if(Ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rs(o,t,e,n,i,s,r){if(!o)return;!r&&s&&R0(o,n,i,s);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,s?M0(o,n,i,s):b0(o)){t.push(l.i/e|0),t.push(o.i/e|0),t.push(c.i/e|0),Ds(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=S0(fi(o),t,e),Rs(o,t,e,n,i,s,2)):r===2&&E0(o,t,e,n,i,s):Rs(fi(o),t,e,n,i,s,1);break}}}function b0(o){const t=o.prev,e=o,n=o.next;if(re(t,e,n)>=0)return!1;const i=t.x,s=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<r?i:r:s<r?s:r,d=a<l?a<c?a:c:l<c?l:c,u=i>s?i>r?i:r:s>r?s:r,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Vi(i,a,s,l,r,c,g.x,g.y)&&re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function M0(o,t,e,n){const i=o.prev,s=o,r=o.next;if(re(i,s,r)>=0)return!1;const a=i.x,l=s.x,c=r.x,h=i.y,d=s.y,u=r.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,v=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=$o(f,g,t,e,n),_=$o(v,m,t,e,n);let y=o.prevZ,x=o.nextZ;for(;y&&y.z>=p&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==r&&Vi(a,h,l,d,c,u,y.x,y.y)&&re(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&Vi(a,h,l,d,c,u,x.x,x.y)&&re(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==r&&Vi(a,h,l,d,c,u,y.x,y.y)&&re(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&Vi(a,h,l,d,c,u,x.x,x.y)&&re(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function S0(o,t,e){let n=o;do{const i=n.prev,s=n.next.next;!zr(i,s)&&vh(i,n,n.next,s)&&Is(i,s)&&Is(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ds(n),Ds(n.next),n=o=s),n=n.next}while(n!==o);return fi(n)}function E0(o,t,e,n,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&N0(r,a)){let l=_h(r,a);r=fi(r,r.next),l=fi(l,l.next),Rs(r,t,e,n,i,s,0),Rs(l,t,e,n,i,s,0);return}a=a.next}r=r.next}while(r!==o)}function A0(o,t,e,n){const i=[];let s,r,a,l,c;for(s=0,r=t.length;s<r;s++)a=t[s]*n,l=s<r-1?t[s+1]*n:o.length,c=gh(o,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(D0(c));for(i.sort(T0),s=0;s<i.length;s++)e=C0(i[s],e);return e}function T0(o,t){return o.x-t.x}function C0(o,t){const e=P0(o,t);if(!e)return t;const n=_h(e,o);return fi(n,n.next),fi(e,e.next)}function P0(o,t){let e=t,n=-1/0,i;const s=o.x,r=o.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Vi(r<c?s:n,r,l,c,r<c?n:s,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(s-e.x),Is(e,o)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&L0(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function L0(o,t){return re(o.prev,o,t.prev)<0&&re(t.next,o,o.next)<0}function R0(o,t,e,n){let i=o;do i.z===0&&(i.z=$o(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,I0(i)}function I0(o){let t,e,n,i,s,r,a,l,c=1;do{for(e=o,o=null,s=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(r>1);return o}function $o(o,t,e,n,i){return o=(o-e)*i|0,t=(t-n)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function D0(o){let t=o,e=o;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==o);return e}function Vi(o,t,e,n,i,s,r,a){return(i-r)*(t-a)>=(o-r)*(s-a)&&(o-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(i-r)*(n-a)}function N0(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!F0(o,t)&&(Is(o,t)&&Is(t,o)&&z0(o,t)&&(re(o.prev,o,t.prev)||re(o,t.prev,t))||zr(o,t)&&re(o.prev,o,o.next)>0&&re(t.prev,t,t.next)>0)}function re(o,t,e){return(t.y-o.y)*(e.x-t.x)-(t.x-o.x)*(e.y-t.y)}function zr(o,t){return o.x===t.x&&o.y===t.y}function vh(o,t,e,n){const i=ur(re(o,t,e)),s=ur(re(o,t,n)),r=ur(re(e,n,o)),a=ur(re(e,n,t));return!!(i!==s&&r!==a||i===0&&hr(o,e,t)||s===0&&hr(o,n,t)||r===0&&hr(e,o,n)||a===0&&hr(e,t,n))}function hr(o,t,e){return t.x<=Math.max(o.x,e.x)&&t.x>=Math.min(o.x,e.x)&&t.y<=Math.max(o.y,e.y)&&t.y>=Math.min(o.y,e.y)}function ur(o){return o>0?1:o<0?-1:0}function F0(o,t){let e=o;do{if(e.i!==o.i&&e.next.i!==o.i&&e.i!==t.i&&e.next.i!==t.i&&vh(e,e.next,o,t))return!0;e=e.next}while(e!==o);return!1}function Is(o,t){return re(o.prev,o,o.next)<0?re(o,t,o.next)>=0&&re(o,o.prev,t)>=0:re(o,t,o.prev)<0||re(o,o.next,t)<0}function z0(o,t){let e=o,n=!1;const i=(o.x+t.x)/2,s=(o.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==o);return n}function _h(o,t){const e=new Zo(o.i,o.x,o.y),n=new Zo(t.i,t.x,t.y),i=o.next,s=t.prev;return o.next=t,t.prev=o,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Zl(o,t,e,n){const i=new Zo(o,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ds(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Zo(o,t,e){this.i=o,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function U0(o,t,e,n){let i=0;for(let s=t,r=e-n;s<e;s+=n)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class bs{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return bs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Jl(t),Kl(n,t);let r=t.length;e.forEach(Jl);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,Kl(n,e[l]);const a=w0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Jl(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Kl(o,t){for(let e=0;e<t.length;e++)o.push(t[e].x),o.push(t[e].y)}class Gi extends he{constructor(t=new gs([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Zt(i,3)),this.setAttribute("uv",new Zt(s,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:O0;let y,x=!1,M,E,R,T;p&&(y=p.getSpacedPoints(h),x=!0,u=!1,M=p.computeFrenetFrames(h,!1),E=new D,R=new D,T=new D),u||(m=0,f=0,g=0,v=0);const w=a.extractPoints(c);let S=w.shape;const U=w.holes;if(!bs.isClockWise(S)){S=S.reverse();for(let it=0,K=U.length;it<K;it++){const st=U[it];bs.isClockWise(st)&&(U[it]=st.reverse())}}const C=bs.triangulateShape(S,U),I=S;for(let it=0,K=U.length;it<K;it++){const st=U[it];S=S.concat(st)}function N(it,K,st){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(K,st)}const F=S.length,W=C.length;function V(it,K,st){let yt,dt,Pt;const Lt=it.x-K.x,At=it.y-K.y,Bt=st.x-it.x,jt=st.y-it.y,L=Lt*Lt+At*At,A=Lt*jt-At*Bt;if(Math.abs(A)>Number.EPSILON){const q=Math.sqrt(L),rt=Math.sqrt(Bt*Bt+jt*jt),at=K.x-At/q,pt=K.y+Lt/q,It=st.x-jt/rt,xt=st.y+Bt/rt,J=((It-at)*jt-(xt-pt)*Bt)/(Lt*jt-At*Bt);yt=at+Lt*J-it.x,dt=pt+At*J-it.y;const bt=yt*yt+dt*dt;if(bt<=2)return new ct(yt,dt);Pt=Math.sqrt(bt/2)}else{let q=!1;Lt>Number.EPSILON?Bt>Number.EPSILON&&(q=!0):Lt<-Number.EPSILON?Bt<-Number.EPSILON&&(q=!0):Math.sign(At)===Math.sign(jt)&&(q=!0),q?(yt=-At,dt=Lt,Pt=Math.sqrt(L)):(yt=Lt,dt=At,Pt=Math.sqrt(L/2))}return new ct(yt/Pt,dt/Pt)}const Y=[];for(let it=0,K=I.length,st=K-1,yt=it+1;it<K;it++,st++,yt++)st===K&&(st=0),yt===K&&(yt=0),Y[it]=V(I[it],I[st],I[yt]);const tt=[];let gt,X=Y.concat();for(let it=0,K=U.length;it<K;it++){const st=U[it];gt=[];for(let yt=0,dt=st.length,Pt=dt-1,Lt=yt+1;yt<dt;yt++,Pt++,Lt++)Pt===dt&&(Pt=0),Lt===dt&&(Lt=0),gt[yt]=V(st[yt],st[Pt],st[Lt]);tt.push(gt),X=X.concat(gt)}for(let it=0;it<m;it++){const K=it/m,st=f*Math.cos(K*Math.PI/2),yt=g*Math.sin(K*Math.PI/2)+v;for(let dt=0,Pt=I.length;dt<Pt;dt++){const Lt=N(I[dt],Y[dt],yt);H(Lt.x,Lt.y,-st)}for(let dt=0,Pt=U.length;dt<Pt;dt++){const Lt=U[dt];gt=tt[dt];for(let At=0,Bt=Lt.length;At<Bt;At++){const jt=N(Lt[At],gt[At],yt);H(jt.x,jt.y,-st)}}}const j=g+v;for(let it=0;it<F;it++){const K=u?N(S[it],X[it],j):S[it];x?(R.copy(M.normals[0]).multiplyScalar(K.x),E.copy(M.binormals[0]).multiplyScalar(K.y),T.copy(y[0]).add(R).add(E),H(T.x,T.y,T.z)):H(K.x,K.y,0)}for(let it=1;it<=h;it++)for(let K=0;K<F;K++){const st=u?N(S[K],X[K],j):S[K];x?(R.copy(M.normals[it]).multiplyScalar(st.x),E.copy(M.binormals[it]).multiplyScalar(st.y),T.copy(y[it]).add(R).add(E),H(T.x,T.y,T.z)):H(st.x,st.y,d/h*it)}for(let it=m-1;it>=0;it--){const K=it/m,st=f*Math.cos(K*Math.PI/2),yt=g*Math.sin(K*Math.PI/2)+v;for(let dt=0,Pt=I.length;dt<Pt;dt++){const Lt=N(I[dt],Y[dt],yt);H(Lt.x,Lt.y,d+st)}for(let dt=0,Pt=U.length;dt<Pt;dt++){const Lt=U[dt];gt=tt[dt];for(let At=0,Bt=Lt.length;At<Bt;At++){const jt=N(Lt[At],gt[At],yt);x?H(jt.x,jt.y+y[h-1].y,y[h-1].x+st):H(jt.x,jt.y,d+st)}}}et(),ht();function et(){const it=i.length/3;if(u){let K=0,st=F*K;for(let yt=0;yt<W;yt++){const dt=C[yt];Dt(dt[2]+st,dt[1]+st,dt[0]+st)}K=h+m*2,st=F*K;for(let yt=0;yt<W;yt++){const dt=C[yt];Dt(dt[0]+st,dt[1]+st,dt[2]+st)}}else{for(let K=0;K<W;K++){const st=C[K];Dt(st[2],st[1],st[0])}for(let K=0;K<W;K++){const st=C[K];Dt(st[0]+F*h,st[1]+F*h,st[2]+F*h)}}n.addGroup(it,i.length/3-it,0)}function ht(){const it=i.length/3;let K=0;ft(I,K),K+=I.length;for(let st=0,yt=U.length;st<yt;st++){const dt=U[st];ft(dt,K),K+=dt.length}n.addGroup(it,i.length/3-it,1)}function ft(it,K){let st=it.length;for(;--st>=0;){const yt=st;let dt=st-1;dt<0&&(dt=it.length-1);for(let Pt=0,Lt=h+m*2;Pt<Lt;Pt++){const At=F*Pt,Bt=F*(Pt+1),jt=K+yt+At,L=K+dt+At,A=K+dt+Bt,q=K+yt+Bt;Nt(jt,L,A,q)}}}function H(it,K,st){l.push(it),l.push(K),l.push(st)}function Dt(it,K,st){lt(it),lt(K),lt(st);const yt=i.length/3,dt=_.generateTopUV(n,i,yt-3,yt-2,yt-1);Mt(dt[0]),Mt(dt[1]),Mt(dt[2])}function Nt(it,K,st,yt){lt(it),lt(K),lt(yt),lt(K),lt(st),lt(yt);const dt=i.length/3,Pt=_.generateSideWallUV(n,i,dt-6,dt-3,dt-2,dt-1);Mt(Pt[0]),Mt(Pt[1]),Mt(Pt[3]),Mt(Pt[1]),Mt(Pt[2]),Mt(Pt[3])}function lt(it){i.push(l[it*3+0]),i.push(l[it*3+1]),i.push(l[it*3+2])}function Mt(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return B0(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new mh[i.type]().fromJSON(i)),new Gi(n,t.options)}}const O0={generateTopUV:function(o,t,e,n,i){const s=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ct(s,r),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(o,t,e,n,i,s){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],g=t[i*3+2],v=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new ct(r,1-l),new ct(c,1-d),new ct(u,1-g),new ct(v,1-p)]:[new ct(a,1-l),new ct(h,1-d),new ct(f,1-g),new ct(m,1-p)]}};function B0(o,t,e){if(e.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const s=o[n];e.shapes.push(s.uuid)}else e.shapes.push(o.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ur extends ga{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ur(t.radius,t.detail)}}class Hn extends he{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&r===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){const E=M/e;d.x=-t*Math.cos(i+E*s)*Math.sin(r+y*a),d.y=t*Math.cos(r+y*a),d.z=t*Math.sin(i+E*s)*Math.sin(r+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(E+x,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const y=h[p][_+1],x=h[p][_],M=h[p+1][_],E=h[p+1][_+1];(p!==0||r>0)&&f.push(y,x,E),(p!==n-1||l<Math.PI)&&f.push(x,M,E)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oe extends gi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Yt(16777215),this.specular=new Yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ar={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class k0{constructor(t,e,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const V0=new k0;class Or{constructor(t){this.manager=t!==void 0?t:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const En={};class G0 extends Error{constructor(t,e){super(t),this.response=e}}class H0 extends Or{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Ar.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(En[t]!==void 0){En[t].push({onLoad:e,onProgress:n,onError:i});return}En[t]=[],En[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=En[t],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){_();function _(){d.read().then(({done:y,value:x})=>{if(y)p.close();else{v+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,R=h.length;E<R;E++){const T=h[E];T.onProgress&&T.onProgress(M)}p.enqueue(x),_()}})}}});return new Response(m)}else throw new G0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ar.add(t,c);const h=En[t];delete En[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=En[t];if(h===void 0)throw this.manager.itemError(t),c;delete En[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class W0 extends Or{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Ar.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=Ps("img");function l(){h(),Ar.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class xh extends Or{constructor(t){super(t)}load(t,e,n,i){const s=new De,r=new W0(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class yh extends Qt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ao=new oe,Ql=new D,tc=new D;class q0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new aa,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ql),tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tc),e.updateMatrixWorld(),Ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class X0 extends q0{constructor(){super(new ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Zi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class j0 extends yh{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new X0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Y0 extends yh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let dr;class wh{static getContext(){return dr===void 0&&(dr=new(window.AudioContext||window.webkitAudioContext)),dr}static setContext(t){dr=t}}class $0 extends Or{constructor(t){super(t)}load(t,e,n,i){const s=this,r=new H0(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){try{const l=a.slice(0);wh.getContext().decodeAudioData(l,function(h){e(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}}class Z0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ec();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ec(){return(typeof performance>"u"?Date:performance).now()}const Qn=new D,nc=new mi,J0=new D,ti=new D;class K0 extends Qt{constructor(){super(),this.type="AudioListener",this.context=wh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Z0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Qn,nc,J0),ti.set(0,0,-1).applyQuaternion(nc),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Qn.x,i),e.positionY.linearRampToValueAtTime(Qn.y,i),e.positionZ.linearRampToValueAtTime(Qn.z,i),e.forwardX.linearRampToValueAtTime(ti.x,i),e.forwardY.linearRampToValueAtTime(ti.y,i),e.forwardZ.linearRampToValueAtTime(ti.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(Qn.x,Qn.y,Qn.z),e.setOrientation(ti.x,ti.y,ti.z,n.x,n.y,n.z)}}class Q0 extends Qt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const ic=new D,fr=new D;class tv{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ic.subVectors(t,this.start),fr.subVectors(this.end,this.start);const n=fr.dot(fr);let s=fr.dot(ic)/n;return e&&(s=ge(s,0,1)),s}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class ev extends a0{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new he;i.setAttribute("position",new Zt(e,3)),i.setAttribute("color",new Zt(n,3));const s=new hh({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){const i=new Yt,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);class rn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new rn);const n=this.elements,i=t.elements,s=e.elements,r=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],v=i[0],m=i[1],p=i[2],_=i[3],y=i[4],x=i[5],M=i[6],E=i[7],R=i[8];return s[0]=r*v+a*_+l*M,s[1]=r*m+a*y+l*E,s[2]=r*p+a*x+l*R,s[3]=c*v+h*_+d*M,s[4]=c*m+h*y+d*E,s[5]=c*p+h*x+d*R,s[6]=u*v+f*_+g*M,s[7]=u*m+f*y+g*E,s[8]=u*p+f*x+g*R,e}scale(t,e){e===void 0&&(e=new rn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new b);const n=3,i=4,s=[];let r,a;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+i*a]=this.elements[r+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(r=c-l,s[r+i*r]===0){for(a=r+1;a<c;a++)if(s[r+i*a]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*a];while(--h);break}}if(s[r+i*r]!==0)for(a=r+1;a<c;a++){const f=s[r+i*a]/s[r+i*r];h=d;do u=d-h,s[u+i*a]=u<=r?0:s[u+i*a]-s[u+i*r]*f;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new rn);const e=3,n=6,i=nv;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(s=l-a,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const u=i[s+n*r]/i[s+n*s];c=h;do d=h-c,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--c)}}while(--a);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--c)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[e+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,d)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,a=n+n,l=i+i,c=e*r,h=e*a,d=e*l,u=n*a,f=n*l,g=i*l,v=s*r,m=s*a,p=s*l,_=this.elements;return _[3*0+0]=1-(u+g),_[3*0+1]=h-p,_[3*0+2]=d+m,_[3*1+0]=h+p,_[3*1+1]=1-(c+g),_[3*1+2]=f-v,_[3*2+0]=d-m,_[3*2+1]=f+v,_[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new rn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const nv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-r*s,e.z=r*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new b(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new b(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new rn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new b);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new b);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new b),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new b),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new b),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=iv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=sv;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(sc),sc.almostEquals(t,e)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const iv=new b,sv=new b,sc=new b;class Ve{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,rc),c=rc),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ve().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=oc,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=oc,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}}const rc=new b,oc=[new b,new b,new b,new b,new b,new b,new b,new b];class ac{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class bh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class ce{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=rv,i=ov;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ce);const n=this.x,i=this.y,s=this.z,r=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+r*a+i*c-s*l,e.y=i*h+r*l+s*a-n*c,e.z=s*h+r*c+n*l-i*a,e.w=r*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new ce);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new ce),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-r*s,u=c*s+r*i-a*n,f=-r*n-a*i-l*s;return e.x=h*c+f*-r+d*-l-u*-a,e.y=d*c+f*-a+u*-r-h*-l,e.z=u*c+f*-l+h*-a-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=r*a+l*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*r*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):i==="YXZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):i==="ZXY"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):i==="ZYX"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):i==="YZX"?(this.x=l*r*a+s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a-l*c*h):i==="XZY"&&(this.x=l*r*a-s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a+l*c*h),this}clone(){return new ce(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new ce);const i=this.x,s=this.y,r=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,g,v,m;return f=i*l+s*c+r*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),v=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(v=1-e,m=e),n.x=v*i+m*l,n.y=v*s+m*c,n.z=v*r+m*h,n.w=v*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new ce);const s=t.x*n.x,r=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+r*h-a*c),i.y+=u*(r*d+a*l-s*h),i.z+=u*(a*d+s*c-r*l),i.w+=u*(-s*l-r*c-a*h),i}}const rv=new b,ov=new b,av={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class mt{constructor(t){t===void 0&&(t={}),this.id=mt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}mt.idCounter=0;mt.types=av;class $t{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new ce,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return $t.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return $t.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),n.vsub(t,i),e.conjugate(lc),lc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new b),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const lc=new ce;class Ms extends mt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:mt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let s=0;s!==t.length;s++){const r=t[s],a=r.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[r[l]].vsub(e[r[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Ms.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new b,r=new b;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,a,l,c){const h=new b;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const v=h.dot(r);v>u&&(u=v,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const v=n.vertices[n.faces[d][g]],m=new b;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(r,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,r,a,l){const c=new b,h=new b,d=new b,u=new b,f=new b,g=new b;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const _=m.testSepAxis(c,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,r.copy(c))}else{const p=a?a.length:m.faces.length;for(let _=0;_<p;_++){const y=a?a[_]:_;c.copy(m.faceNormals[y]),n.vmult(c,c);const x=m.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,r.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const _=m.testSepAxis(h,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,r.copy(h))}else{const p=l?l.length:t.faces.length;for(let _=0;_<p;_++){const y=l?l[_]:_;h.copy(t.faceNormals[y]),s.vmult(h,h);const x=m.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,r.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],f),u.cross(f,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,r.copy(g))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const a=this;Ms.project(a,t,n,i,To),Ms.project(e,t,s,r,Co);const l=To[0],c=To[1],h=Co[0],d=Co[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new b,i=new b;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,a){const l=new b,c=new b,h=new b,d=new b,u=new b,f=new b,g=new b,v=new b,m=this,p=[],_=i,y=p;let x=-1,M=Number.MAX_VALUE;for(let S=0;S<m.faces.length;S++){l.copy(m.faceNormals[S]),n.vmult(l,l);const U=l.dot(t);U<M&&(M=U,x=S)}if(x<0)return;const E=m.faces[x];E.connectedFaces=[];for(let S=0;S<m.faces.length;S++)for(let U=0;U<m.faces[S].length;U++)E.indexOf(m.faces[S][U])!==-1&&S!==x&&E.connectedFaces.indexOf(S)===-1&&E.connectedFaces.push(S);const R=E.length;for(let S=0;S<R;S++){const U=m.vertices[E[S]],z=m.vertices[E[(S+1)%R]];U.vsub(z,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[x]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(U),n.vmult(f,f),e.vadd(f,f);const C=E.connectedFaces[S];g.copy(this.faceNormals[C]);const I=this.getPlaneConstantOfFace(C);v.copy(g),n.vmult(v,v);const N=I-v.dot(e);for(this.clipFaceAgainstPlane(_,y,v,N);_.length;)_.shift();for(;y.length;)_.push(y.shift())}g.copy(this.faceNormals[x]);const T=this.getPlaneConstantOfFace(x);v.copy(g),n.vmult(v,v);const w=T-v.dot(e);for(let S=0;S<_.length;S++){let U=v.dot(_[S])+w;if(U<=s&&(console.log(`clamped: depth=${U} to minDist=${s}`),U=s),U<=r){const z=_[S];if(U<=1e-6){const C={point:z,normal:v,depth:U};a.push(C)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],r=n.dot(c)+i,s<0)if(r<0){const d=new b;d.copy(c),e.push(d)}else{const d=new b;l.lerp(c,s/(s-r),d),e.push(d)}else if(r<0){const d=new b;l.lerp(c,s/(s-r),d),e.push(d),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,a,l,c,h,d,u=new b;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new b;this.getAveragePointLocal(r);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=e[n[a][0]],h=new b;t.vsub(c,h);const d=l.dot(h),u=new b;r.vsub(c,u);const f=l.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return s?1:-1}static project(t,e,n,i,s){const r=t.vertices.length,a=lv;let l=0,c=0;const h=cv,d=t.vertices;h.setZero(),$t.vectorToLocalFrame(n,i,e,a),$t.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<r;f++){const g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const To=[],Co=[];new b;const lv=new b,cv=new b;class Us extends mt{constructor(t){super({type:mt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=b,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Ms({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),Us.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)Un.set(s[r][0],s[r][1],s[r][2]),e.vmult(Un,Un),t.vadd(Un,Un),n(Un.x,Un.y,Un.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;un[0].set(s.x,s.y,s.z),un[1].set(-s.x,s.y,s.z),un[2].set(-s.x,-s.y,s.z),un[3].set(-s.x,-s.y,-s.z),un[4].set(s.x,-s.y,-s.z),un[5].set(s.x,s.y,-s.z),un[6].set(-s.x,s.y,-s.z),un[7].set(s.x,-s.y,s.z);const r=un[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const l=un[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Un=new b,un=[new b,new b,new b,new b,new b,new b,new b,new b],va={DYNAMIC:1,STATIC:2,KINEMATIC:4},_a={AWAKE:0,SLEEPY:1,SLEEPING:2};class vt extends bh{constructor(t){t===void 0&&(t={}),super(),this.id=vt.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?vt.STATIC:vt.DYNAMIC,typeof t.type==typeof vt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=vt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new ce,this.initQuaternion=new ce,this.previousQuaternion=new ce,this.interpolatedQuaternion=new ce,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new rn,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new rn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ve,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=vt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===vt.SLEEPING&&this.dispatchEvent(vt.wakeupEvent)}sleep(){this.sleepState=vt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===vt.AWAKE&&n<i?(this.sleepState=vt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(vt.sleepyEvent)):e===vt.SLEEPY&&n>i?this.wakeUp():e===vt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(vt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===vt.SLEEPING||this.type===vt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new b,s=new ce;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const a=e[s].length(),l=r.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=hv,r=uv,a=this.quaternion,l=this.aabb,c=dv;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=fv,i=pv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==vt.DYNAMIC)return;this.sleepState===vt.SLEEPING&&this.wakeUp();const n=gv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==vt.DYNAMIC)return;const n=vv,i=_v;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===vt.DYNAMIC&&(this.sleepState===vt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==vt.DYNAMIC)return;this.sleepState===vt.SLEEPING&&this.wakeUp();const n=e,i=xv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=yv;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==vt.DYNAMIC)return;const n=wv,i=bv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Mv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Us.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===vt.DYNAMIC||this.type===vt.KINEMATIC)||this.sleepState===vt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const g=d.elements,v=this.angularFactor,m=l.x*v.x,p=l.y*v.y,_=l.z*v.z;s.x+=t*(g[0]*m+g[1]*p+g[2]*_),s.y+=t*(g[3]*m+g[4]*p+g[5]*_),s.z+=t*(g[6]*m+g[7]*p+g[8]*_),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}vt.idCounter=0;vt.COLLIDE_EVENT_NAME="collide";vt.DYNAMIC=va.DYNAMIC;vt.STATIC=va.STATIC;vt.KINEMATIC=va.KINEMATIC;vt.AWAKE=_a.AWAKE;vt.SLEEPY=_a.SLEEPY;vt.SLEEPING=_a.SLEEPING;vt.wakeupEvent={type:"wakeup"};vt.sleepyEvent={type:"sleepy"};vt.sleepEvent={type:"sleep"};const hv=new b,uv=new ce,dv=new Ve,fv=new rn,pv=new rn,mv=new rn,gv=new b,vv=new b,_v=new b,xv=new b,yv=new b,wv=new b,bv=new b,Mv=new b;class Sv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&vt.STATIC||t.sleepState===vt.SLEEPING)&&(e.type&vt.STATIC||e.sleepState===vt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Ev;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Av,i=Tv,s=Cv,r=t.length;for(let a=0;a!==r;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new b;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Ev=new b;new b;new ce;new b;const Av={keys:[]},Tv=[],Cv=[];new b;new b;new b;class Pv extends Sv{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],a=i[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Tr{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}let Mh,Sh,Eh,Ah,Th,Ch,Ph;const xa={CLOSEST:1,ANY:2,ALL:4};Mh=mt.types.SPHERE;Sh=mt.types.PLANE;Eh=mt.types.BOX;Ah=mt.types.CYLINDER;Th=mt.types.CONVEXPOLYHEDRON;Ch=mt.types.HEIGHTFIELD;Ph=mt.types.TRIMESH;class fe{get[Mh](){return this._intersectSphere}get[Sh](){return this._intersectPlane}get[Eh](){return this._intersectBox}get[Ah](){return this._intersectConvex}get[Th](){return this._intersectConvex}get[Ch](){return this._intersectHeightfield}get[Ph](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=fe.ANY,this.result=new Tr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||fe.ANY,this.result=e.result||new Tr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(cc),Po.length=0,t.broadphase.aabbQuery(t,cc,Po),this.intersectBodies(Po),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Lv,s=Rv;for(let r=0,a=t.shapes.length;r<a;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(qv(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,a=this.to,l=this.direction,c=new b(0,0,1);e.vmult(c,c);const h=new b;r.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||r.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new b,v=new b,m=new b;r.vsub(n,g);const p=-c.dot(g)/f;l.scale(p,v),r.vadd(v,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=Iv;r.from.copy(this.from),r.to.copy(this.to),$t.pointToLocalFrame(n,e,r.from,r.from),$t.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const a=Dv;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Ve;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(f,g,!1),$t.pointToWorldFrame(n,e,t.pillarOffset,pr),this._intersectConvex(t.pillarConvex,e,pr,i,s,hc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),$t.pointToWorldFrame(n,e,t.pillarOffset,pr),this._intersectConvex(t.pillarConvex,e,pr,i,s,hc)}}}_intersectSphere(t,e,n,i,s){const r=this.from,a=this.to,l=t.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*d,f=Nv,g=Fv;if(!(u<0))if(u===0)r.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const v=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(r.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(r.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const a=zv,l=uc,c=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=c?c.length:h.length,_=this.result;for(let y=0;!_.shouldStop&&y<p;y++){const x=c?c[y]:y,M=h[x],E=u[x],R=e,T=n;l.copy(d[M[0]]),R.vmult(l,l),l.vadd(T,l),l.vsub(g,l),R.vmult(E,a);const w=f.dot(a);if(Math.abs(w)<this.precision)continue;const S=a.dot(l)/w;if(!(S<0)){f.scale(S,Re),Re.vadd(g,Re),Ke.copy(d[M[0]]),R.vmult(Ke,Ke),T.vadd(Ke,Ke);for(let U=1;!_.shouldStop&&U<M.length-1;U++){dn.copy(d[M[U]]),fn.copy(d[M[U+1]]),R.vmult(dn,dn),R.vmult(fn,fn),T.vadd(dn,dn),T.vadd(fn,fn);const z=Re.distanceTo(g);!(fe.pointInTriangle(Re,Ke,dn,fn)||fe.pointInTriangle(Re,dn,Ke,fn))||z>m||this.reportIntersection(a,Re,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,r){const a=Uv,l=Hv,c=Wv,h=uc,d=Ov,u=Bv,f=kv,g=Gv,v=Vv,m=t.indices;t.vertices;const p=this.from,_=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),$t.vectorToLocalFrame(n,e,y,d),$t.pointToLocalFrame(n,e,p,u),$t.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const x=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let M=0,E=l.length;!this.result.shouldStop&&M!==E;M++){const R=l[M];t.getNormal(R,a),t.getVertex(m[R*3],Ke),Ke.vsub(u,h);const T=d.dot(a),w=a.dot(h)/T;if(w<0)continue;d.scale(w,Re),Re.vadd(u,Re),t.getVertex(m[R*3+1],dn),t.getVertex(m[R*3+2],fn);const S=Re.distanceSquared(u);!(fe.pointInTriangle(Re,dn,Ke,fn)||fe.pointInTriangle(Re,Ke,dn,fn))||S>x||($t.vectorToWorldFrame(e,a,v),$t.pointToWorldFrame(n,e,Re,g),this.reportIntersection(v,g,s,i,R))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,a=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case fe.ALL:this.hasHit=!0,c.set(r,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case fe.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l));break;case fe.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ri),n.vsub(e,rs),t.vsub(e,Lo);const s=ri.dot(ri),r=ri.dot(rs),a=ri.dot(Lo),l=rs.dot(rs),c=rs.dot(Lo);let h,d;return(h=l*a-r*c)>=0&&(d=s*c-r*a)>=0&&h+d<s*l-r*r}}fe.CLOSEST=xa.CLOSEST;fe.ANY=xa.ANY;fe.ALL=xa.ALL;const cc=new Ve,Po=[],rs=new b,Lo=new b,Lv=new b,Rv=new ce,Re=new b,Ke=new b,dn=new b,fn=new b;new b;new Tr;const hc={faceList:[0]},pr=new b,Iv=new fe,Dv=[],Nv=new b,Fv=new b,zv=new b;new b;new b;const uc=new b,Uv=new b,Ov=new b,Bv=new b,kv=new b,Vv=new b,Gv=new b;new Ve;const Hv=[],Wv=new $t,ri=new b,mr=new b;function qv(o,t,e){e.vsub(o,ri);const n=ri.dot(t);return t.scale(n,mr),mr.vadd(o,mr),e.distanceTo(mr)}class Xv{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class dc{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Os{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Os.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new dc,this.jacobianElementB=new dc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,fc),a.scale(h,pc),n.invInertiaWorldSolve.vmult(r,mc),i.invInertiaWorldSolve.vmult(l,gc),t.multiplyVectors(fc,mc)+e.multiplyVectors(pc,gc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return a.vmult(t.rotational,gr),c+=gr.dot(t.rotational),l.vmult(e.rotational,gr),c+=gr.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=jv;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Os.idCounter=0;const fc=new b,pc=new b,mc=new b,gc=new b,gr=new b,jv=new b;class Yv extends Os{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,l=$v,c=Zv,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=Jv,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;r.cross(p,l),a.cross(p,c),p.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(r,g);const _=p.dot(g),y=this.restitution+1,x=y*u.dot(p)-y*h.dot(p)+f.dot(c)-d.dot(l),M=this.computeGiMf();return-_*e-x*n-t*M}getImpactVelocityAlongNormal(){const t=Kv,e=Qv,n=t_,i=e_,s=n_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const $v=new b,Zv=new b,Jv=new b,Kv=new b,Qv=new b,t_=new b,e_=new b,n_=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class vc extends Os{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=i_,r=s_,a=this.t;n.cross(a,s),i.cross(a,r);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const i_=new b,s_=new b;class Br{constructor(t,e,n){n=Xv.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Br.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Br.idCounter=0;class kr{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=kr.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}kr.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new fe;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Vr extends mt{constructor(t){if(super({type:mt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new b);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const l=r[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Ve;new b;new Ve;new b;new b;new b;new b;new b;new b;new b;new Ve;new b;new $t;new Ve;class r_{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class o_ extends r_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=e.bodies,c=l.length,h=t;let d,u,f,g,v,m;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const p=l_,_=c_,y=a_;p.length=a,_.length=a,y.length=a;for(let x=0;x!==a;x++){const M=r[x];y[x]=0,_[x]=M.computeB(h),p[x]=1/M.computeC()}if(a!==0){for(let E=0;E!==c;E++){const R=l[E],T=R.vlambda,w=R.wlambda;T.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let E=0;E!==a;E++){const R=r[E];d=_[E],u=p[E],m=y[E],v=R.computeGWlambda(),f=u*(d-v-R.eps*m),m+f<R.minForce?f=R.minForce-m:m+f>R.maxForce&&(f=R.maxForce-m),y[E]+=f,g+=f>0?f:-f,R.addToWlambda(f)}if(g*g<s)break}for(let E=0;E!==c;E++){const R=l[E],T=R.velocity,w=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),T.vadd(R.vlambda,T),R.wlambda.vmul(R.angularFactor,R.wlambda),w.vadd(R.wlambda,w)}let x=r.length;const M=1/h;for(;x--;)r[x].multiplier=y[x]*M}return n}}const a_=[],l_=[],c_=[];vt.STATIC;class h_{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class u_ extends h_{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const ne={sphereSphere:mt.types.SPHERE,spherePlane:mt.types.SPHERE|mt.types.PLANE,boxBox:mt.types.BOX|mt.types.BOX,sphereBox:mt.types.SPHERE|mt.types.BOX,planeBox:mt.types.PLANE|mt.types.BOX,convexConvex:mt.types.CONVEXPOLYHEDRON,sphereConvex:mt.types.SPHERE|mt.types.CONVEXPOLYHEDRON,planeConvex:mt.types.PLANE|mt.types.CONVEXPOLYHEDRON,boxConvex:mt.types.BOX|mt.types.CONVEXPOLYHEDRON,sphereHeightfield:mt.types.SPHERE|mt.types.HEIGHTFIELD,boxHeightfield:mt.types.BOX|mt.types.HEIGHTFIELD,convexHeightfield:mt.types.CONVEXPOLYHEDRON|mt.types.HEIGHTFIELD,sphereParticle:mt.types.PARTICLE|mt.types.SPHERE,planeParticle:mt.types.PLANE|mt.types.PARTICLE,boxParticle:mt.types.BOX|mt.types.PARTICLE,convexParticle:mt.types.PARTICLE|mt.types.CONVEXPOLYHEDRON,cylinderCylinder:mt.types.CYLINDER,sphereCylinder:mt.types.SPHERE|mt.types.CYLINDER,planeCylinder:mt.types.PLANE|mt.types.CYLINDER,boxCylinder:mt.types.BOX|mt.types.CYLINDER,convexCylinder:mt.types.CONVEXPOLYHEDRON|mt.types.CYLINDER,heightfieldCylinder:mt.types.HEIGHTFIELD|mt.types.CYLINDER,particleCylinder:mt.types.PARTICLE|mt.types.CYLINDER,sphereTrimesh:mt.types.SPHERE|mt.types.TRIMESH,planeTrimesh:mt.types.PLANE|mt.types.TRIMESH};class d_{get[ne.sphereSphere](){return this.sphereSphere}get[ne.spherePlane](){return this.spherePlane}get[ne.boxBox](){return this.boxBox}get[ne.sphereBox](){return this.sphereBox}get[ne.planeBox](){return this.planeBox}get[ne.convexConvex](){return this.convexConvex}get[ne.sphereConvex](){return this.sphereConvex}get[ne.planeConvex](){return this.planeConvex}get[ne.boxConvex](){return this.boxConvex}get[ne.sphereHeightfield](){return this.sphereHeightfield}get[ne.boxHeightfield](){return this.boxHeightfield}get[ne.convexHeightfield](){return this.convexHeightfield}get[ne.sphereParticle](){return this.sphereParticle}get[ne.planeParticle](){return this.planeParticle}get[ne.boxParticle](){return this.boxParticle}get[ne.convexParticle](){return this.convexParticle}get[ne.cylinderCylinder](){return this.convexConvex}get[ne.sphereCylinder](){return this.sphereConvex}get[ne.planeCylinder](){return this.planeConvex}get[ne.boxCylinder](){return this.boxConvex}get[ne.convexCylinder](){return this.convexConvex}get[ne.heightfieldCylinder](){return this.heightfieldCylinder}get[ne.particleCylinder](){return this.particleCylinder}get[ne.sphereTrimesh](){return this.sphereTrimesh}get[ne.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new u_,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Yv(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new vc(n,i,u*f),m=g.length?g.pop():new vc(n,i,u*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-u*f,v.maxForce=m.maxForce=u*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ei.setZero(),Ni.setZero(),Fi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(ei.vadd(e.ni,ei),Ni.vadd(e.ri,Ni),Fi.vadd(e.rj,Fi)):(ei.vsub(e.ni,ei),Ni.vadd(e.rj,Ni),Fi.vadd(e.ri,Fi));const r=1/t;Ni.scale(r,n.ri),Fi.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ei.normalize(),ei.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const l=m_,c=g_,h=f_,d=p_;for(let u=0,f=t.length;u!==f;u++){const g=t[u],v=e[u];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const p=g.type&vt.KINEMATIC&&v.type&vt.STATIC||g.type&vt.STATIC&&v.type&vt.KINEMATIC||g.type&vt.KINEMATIC&&v.type&vt.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],l),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const y=g.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],c),v.quaternion.vmult(v.shapeOffsets[x],d),d.vadd(v.position,d);const M=v.shapes[x];if(!(y.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+M.boundingSphereRadius)continue;let E=null;y.material&&M.material&&(E=n.getContactMaterial(y.material,M.material)||null),this.currentContactMaterial=E||m||n.defaultContactMaterial;const R=y.type|M.type,T=this[R];if(T){let w=!1;y.type<M.type?w=T.call(this,y,M,h,d,l,c,g,v,y,M,p):w=T.call(this,M,y,d,h,c,l,v,g,y,M,p),w&&p&&(n.shapeOverlapKeeper.set(y.id,M.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,r,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,r,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,vr),u.ni.scale(u.ni.dot(vr),_c),vr.vsub(_c,u.rj),-vr.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,a,l,t,e,d)}sphereBox(t,e,n,i,s,r,a,l,c,h,d){const u=this.v3pool,f=G_;n.vsub(i,_r),e.getSideNormals(f,r);const g=t.radius;let v=!1;const m=W_,p=q_,_=X_;let y=null,x=0,M=0,E=0,R=null;for(let F=0,W=f.length;F!==W&&v===!1;F++){const V=B_;V.copy(f[F]);const Y=V.length();V.normalize();const tt=_r.dot(V);if(tt<Y+g&&tt>0){const gt=k_,X=V_;gt.copy(f[(F+1)%3]),X.copy(f[(F+2)%3]);const j=gt.length(),et=X.length();gt.normalize(),X.normalize();const ht=_r.dot(gt),ft=_r.dot(X);if(ht<j&&ht>-j&&ft<et&&ft>-et){const H=Math.abs(tt-Y-g);if((R===null||H<R)&&(R=H,M=ht,E=ft,y=Y,m.copy(V),p.copy(gt),_.copy(X),x++,d))return!0}}}if(x){v=!0;const F=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,F.ri),F.ni.copy(m),F.ni.negate(F.ni),m.scale(y,m),p.scale(M,p),m.vadd(p,m),_.scale(E,_),m.vadd(_,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let T=u.get();const w=H_;for(let F=0;F!==2&&!v;F++)for(let W=0;W!==2&&!v;W++)for(let V=0;V!==2&&!v;V++)if(T.set(0,0,0),F?T.vadd(f[0],T):T.vsub(f[0],T),W?T.vadd(f[1],T):T.vsub(f[1],T),V?T.vadd(f[2],T):T.vsub(f[2],T),i.vadd(T,w),w.vsub(n,w),w.lengthSquared()<g*g){if(d)return!0;v=!0;const Y=this.createContactEquation(a,l,t,e,c,h);Y.ri.copy(w),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(g,Y.ri),Y.rj.copy(T),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(l.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}u.release(T),T=null;const S=u.get(),U=u.get(),z=u.get(),C=u.get(),I=u.get(),N=f.length;for(let F=0;F!==N&&!v;F++)for(let W=0;W!==N&&!v;W++)if(F%3!==W%3){f[W].cross(f[F],S),S.normalize(),f[F].vadd(f[W],U),z.copy(n),z.vsub(U,z),z.vsub(i,z);const V=z.dot(S);S.scale(V,C);let Y=0;for(;Y===F%3||Y===W%3;)Y++;I.copy(n),I.vsub(C,I),I.vsub(U,I),I.vsub(i,I);const tt=Math.abs(V),gt=I.length();if(tt<f[Y].length()&&gt<g){if(d)return!0;v=!0;const X=this.createContactEquation(a,l,t,e,c,h);U.vadd(C,X.rj),X.rj.copy(X.rj),I.negate(X.ni),X.ni.normalize(),X.ri.copy(X.rj),X.ri.vadd(i,X.ri),X.ri.vsub(n,X.ri),X.ri.normalize(),X.ri.scale(g,X.ri),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(l.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}}u.release(S,U,z,C,I)}planeBox(t,e,n,i,s,r,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,a,l,t,e,d)}convexConvex(t,e,n,i,s,r,a,l,c,h,d,u,f){const g=ax;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,g,u,f)){const v=[],m=lx;t.clipAgainstHull(n,s,e,i,r,g,-100,100,v);let p=0;for(let _=0;_!==v.length;_++){if(d)return!0;const y=this.createContactEquation(a,l,t,e,c,h),x=y.ri,M=y.rj;g.negate(y.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,x),M.copy(v[_].point),x.vsub(n,x),M.vsub(i,M),x.vadd(n,x),x.vsub(a.position,x),M.vadd(i,M),M.vsub(l.position,M),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,r,a,l,c,h,d){const u=this.v3pool;n.vsub(i,j_);const f=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius;let p=!1;for(let _=0;_!==v.length;_++){const y=v[_],x=J_;r.vmult(y,x),i.vadd(x,x);const M=Z_;if(x.vsub(n,M),M.lengthSquared()<m*m){if(d)return!0;p=!0;const E=this.createContactEquation(a,l,t,e,c,h);E.ri.copy(M),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(m,E.ri),x.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let _=0,y=g.length;_!==y&&p===!1;_++){const x=f[_],M=g[_],E=K_;r.vmult(x,E);const R=Q_;r.vmult(v[M[0]],R),R.vadd(i,R);const T=tx;E.scale(-m,T),n.vadd(T,T);const w=ex;T.vsub(R,w);const S=w.dot(E),U=nx;if(n.vsub(R,U),S<0&&U.dot(E)>0){const z=[];for(let C=0,I=M.length;C!==I;C++){const N=u.get();r.vmult(v[M[C]],N),i.vadd(N,N),z.push(N)}if(O_(z,E,n)){if(d)return!0;p=!0;const C=this.createContactEquation(a,l,t,e,c,h);E.scale(-m,C.ri),E.negate(C.ni);const I=u.get();E.scale(-S,I);const N=u.get();E.scale(-m,N),n.vsub(i,C.rj),C.rj.vadd(N,C.rj),C.rj.vadd(I,C.rj),C.rj.vadd(i,C.rj),C.rj.vsub(l.position,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),u.release(I),u.release(N),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);for(let F=0,W=z.length;F!==W;F++)u.release(z[F]);return}else for(let C=0;C!==M.length;C++){const I=u.get(),N=u.get();r.vmult(v[M[(C+1)%M.length]],I),r.vmult(v[M[(C+2)%M.length]],N),i.vadd(I,I),i.vadd(N,N);const F=Y_;N.vsub(I,F);const W=$_;F.unit(W);const V=u.get(),Y=u.get();n.vsub(I,Y);const tt=Y.dot(W);W.scale(tt,V),V.vadd(I,V);const gt=u.get();if(V.vsub(n,gt),tt>0&&tt*tt<F.lengthSquared()&&gt.lengthSquared()<m*m){if(d)return!0;const X=this.createContactEquation(a,l,t,e,c,h);V.vsub(i,X.rj),V.vsub(n,X.ni),X.ni.normalize(),X.ni.scale(m,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(l.position,X.rj),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult);for(let j=0,et=z.length;j!==et;j++)u.release(z[j]);u.release(I),u.release(N),u.release(V),u.release(gt),u.release(Y);return}u.release(I),u.release(N),u.release(V),u.release(gt),u.release(Y)}for(let C=0,I=z.length;C!==I;C++)u.release(z[C])}}}planeConvex(t,e,n,i,s,r,a,l,c,h,d){const u=ix,f=sx;f.set(0,0,1),s.vmult(f,f);let g=0;const v=rx;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,v),f.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h),y=ox;f.scale(f.dot(v),y),u.vsub(y,y),y.vsub(n,_.ri),_.ni.copy(f),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,r,a,l,c,h,d){const u=e.data,f=t.radius,g=e.elementSize,v=yx,m=xx;$t.pointToLocalFrame(i,r,n,m);let p=Math.floor((m.x-f)/g)-1,_=Math.ceil((m.x+f)/g)+1,y=Math.floor((m.y-f)/g)-1,x=Math.ceil((m.y+f)/g)+1;if(_<0||x<0||p>u.length||y>u[0].length)return;p<0&&(p=0),_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),p>=u.length&&(p=u.length-1),_>=u.length&&(_=u.length-1),x>=u[0].length&&(x=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const M=[];e.getRectMinMax(p,y,_,x,M);const E=M[0],R=M[1];if(m.z-f>R||m.z+f<E)return;const T=this.result;for(let w=p;w<_;w++)for(let S=y;S<x;S++){const U=T.length;let z=!1;if(e.getConvexTrianglePillar(w,S,!1),$t.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,s,r,a,l,t,e,d)),d&&z||(e.getConvexTrianglePillar(w,S,!0),$t.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,s,r,a,l,t,e,d)),d&&z))return!0;if(T.length-U>2)return}}boxHeightfield(t,e,n,i,s,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,r,a,l,c,h,d){const u=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=vx,m=_x,p=gx;$t.pointToLocalFrame(i,r,n,p);let _=Math.floor((p.x-g)/f)-1,y=Math.ceil((p.x+g)/f)+1,x=Math.floor((p.y-g)/f)-1,M=Math.ceil((p.y+g)/f)+1;if(y<0||M<0||_>u.length||x>u[0].length)return;_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),M<0&&(M=0),_>=u.length&&(_=u.length-1),y>=u.length&&(y=u.length-1),M>=u[0].length&&(M=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const E=[];e.getRectMinMax(_,x,y,M,E);const R=E[0],T=E[1];if(!(p.z-g>T||p.z+g<R))for(let w=_;w<y;w++)for(let S=x;S<M;S++){let U=!1;if(e.getConvexTrianglePillar(w,S,!1),$t.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,v,s,r,a,l,null,null,d,m,null)),d&&U||(e.getConvexTrianglePillar(w,S,!0),$t.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,v,s,r,a,l,null,null,d,m,null)),d&&U))return!0}}sphereParticle(t,e,n,i,s,r,a,l,c,h,d){const u=dx;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,r,a,l,c,h,d){const u=cx;u.set(0,0,1),a.quaternion.vmult(u,u);const f=hx;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=ux;u.scale(u.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,d)}convexParticle(t,e,n,i,s,r,a,l,c,h,d){let u=-1;const f=px,g=mx;let v=null;const m=fx;if(m.copy(i),m.vsub(n,m),s.conjugate(xc),xc.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,_=t.faces.length;p!==_;p++){const y=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];i.vsub(y[0],yc);const M=-x.dot(yc);if(v===null||Math.abs(M)<Math.abs(v)){if(d)return!0;v=M,u=p,f.copy(x)}}if(u!==-1){const p=this.createContactEquation(l,a,e,t,c,h);f.scale(v,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const _=p.ri,y=p.rj;_.vadd(i,_),_.vsub(l.position,_),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,r,s,l,a,c,h,d)}particleCylinder(t,e,n,i,s,r,a,l,c,h,d){return this.convexParticle(e,t,i,n,r,s,l,a,c,h,d)}sphereTrimesh(t,e,n,i,s,r,a,l,c,h,d){const u=S_,f=E_,g=A_,v=T_,m=C_,p=P_,_=D_,y=M_,x=w_,M=N_;$t.pointToLocalFrame(i,r,n,m);const E=t.radius;_.lowerBound.set(m.x-E,m.y-E,m.z-E),_.upperBound.set(m.x+E,m.y+E,m.z+E),e.getTrianglesInAABB(_,M);const R=b_,T=t.radius*t.radius;for(let C=0;C<M.length;C++)for(let I=0;I<3;I++)if(e.getVertex(e.indices[M[C]*3+I],R),R.vsub(m,x),x.lengthSquared()<=T){if(y.copy(R),$t.pointToWorldFrame(i,r,y,R),R.vsub(n,x),d)return!0;let N=this.createContactEquation(a,l,t,e,c,h);N.ni.copy(x),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.copy(R),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let C=0;C<M.length;C++)for(let I=0;I<3;I++){e.getVertex(e.indices[M[C]*3+I],u),e.getVertex(e.indices[M[C]*3+(I+1)%3],f),f.vsub(u,g),m.vsub(f,p);const N=p.dot(g);m.vsub(u,p);let F=p.dot(g);if(F>0&&N<0&&(m.vsub(u,p),v.copy(g),v.normalize(),F=p.dot(v),v.scale(F,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;const V=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),$t.pointToWorldFrame(i,r,p,p),p.vsub(l.position,V.rj),$t.vectorToWorldFrame(r,V.ni,V.ni),$t.vectorToWorldFrame(r,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const w=L_,S=R_,U=I_,z=y_;for(let C=0,I=M.length;C!==I;C++){e.getTriangleVertices(M[C],w,S,U),e.getNormal(M[C],z),m.vsub(w,p);let N=p.dot(z);if(z.scale(N,p),m.vsub(p,p),N=p.distanceTo(m),fe.pointInTriangle(p,w,S,U)&&N<t.radius){if(d)return!0;let F=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),$t.pointToWorldFrame(i,r,p,p),p.vsub(l.position,F.rj),$t.vectorToWorldFrame(r,F.ni,F.ni),$t.vectorToWorldFrame(r,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}M.length=0}planeTrimesh(t,e,n,i,s,r,a,l,c,h,d){const u=new b,f=v_;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const v=new b;v.copy(u),$t.pointToWorldFrame(i,r,v,u);const m=__;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h);_.ni.copy(f);const y=x_;f.scale(m.dot(f),y),u.vsub(y,y),_.ri.copy(y),_.ri.vsub(a.position,_.ri),_.rj.copy(u),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const ei=new b,Ni=new b,Fi=new b,f_=new b,p_=new b,m_=new ce,g_=new ce,v_=new b,__=new b,x_=new b,y_=new b,w_=new b;new b;const b_=new b,M_=new b,S_=new b,E_=new b,A_=new b,T_=new b,C_=new b,P_=new b,L_=new b,R_=new b,I_=new b,D_=new Ve,N_=[],vr=new b,_c=new b,F_=new b,z_=new b,U_=new b;function O_(o,t,e){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=F_;o[(s+1)%i].vsub(r,a);const l=z_;a.cross(t,l);const c=U_;e.vsub(r,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const _r=new b,B_=new b,k_=new b,V_=new b,G_=[new b,new b,new b,new b,new b,new b],H_=new b,W_=new b,q_=new b,X_=new b,j_=new b,Y_=new b,$_=new b,Z_=new b,J_=new b,K_=new b,Q_=new b,tx=new b,ex=new b,nx=new b;new b;new b;const ix=new b,sx=new b,rx=new b,ox=new b,ax=new b,lx=new b,cx=new b,hx=new b,ux=new b,dx=new b,xc=new ce,fx=new b;new b;const px=new b,yc=new b,mx=new b,gx=new b,vx=new b,_x=[0],xx=new b,yx=new b;class wc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||bc(t,h)}a=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||bc(e,h)}}}function bc(o,t){o.push((t&4294901760)>>16,t&65535)}const Ro=(o,t)=>o<t?`${o}-${t}`:`${t}-${o}`;class wx{constructor(){this.data={keys:[]}}get(t,e){const n=Ro(t,e);return this.data[n]}set(t,e,n){const i=Ro(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Ro(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class bx extends bh{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Pv,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new o_,this.constraints=[],this.narrowphase=new d_(this),this.collisionMatrix=new ac,this.collisionMatrixPrevious=new ac,this.bodyOverlapKeeper=new wc,this.shapeOverlapKeeper=new wc,this.contactmaterials=[],this.contactMaterialTable=new wx,this.defaultMaterial=new kr("default"),this.defaultContactMaterial=new Br(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Tr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.ALL,n.from=t,n.to=e,n.callback=i,Io.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.ANY,n.from=t,n.to=e,n.result=i,Io.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.CLOSEST,n.from=t,n.to=e,n.result=i,Io.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof vt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=me.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=me.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(me.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Tx,i=Cx,s=this.bodies.length,r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=vt.DYNAMIC;let u=-1/0;const f=this.constraints,g=Ax;l.length();const v=l.x,m=l.y,p=l.z;let _=0;for(c&&(u=me.now()),_=0;_!==s;_++){const C=r[_];if(C.type===d){const I=C.force,N=C.mass;I.x+=N*v,I.y+=N*m,I.z+=N*p}}for(let C=0,I=this.subsystems.length;C!==I;C++)this.subsystems[C].update();c&&(u=me.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=me.now()-u);let y=f.length;for(_=0;_!==y;_++){const C=f[_];if(!C.collideConnected)for(let I=n.length-1;I>=0;I-=1)(C.bodyA===n[I]&&C.bodyB===i[I]||C.bodyB===n[I]&&C.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),c&&(u=me.now());const x=Ex,M=e.length;for(_=0;_!==M;_++)x.push(e[_]);e.length=0;const E=this.frictionEquations.length;for(_=0;_!==E;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),c&&(h.narrowphase=me.now()-u),c&&(u=me.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const R=e.length;for(let C=0;C!==R;C++){const I=e[C],N=I.bi,F=I.bj,W=I.si,V=I.sj;let Y;if(N.material&&F.material?Y=this.getContactMaterial(N.material,F.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,N.material&&F.material&&(N.material.friction>=0&&F.material.friction>=0&&N.material.friction*F.material.friction,N.material.restitution>=0&&F.material.restitution>=0&&(I.restitution=N.material.restitution*F.material.restitution)),a.addEquation(I),N.allowSleep&&N.type===vt.DYNAMIC&&N.sleepState===vt.SLEEPING&&F.sleepState===vt.AWAKE&&F.type!==vt.STATIC){const tt=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),gt=F.sleepSpeedLimit**2;tt>=gt*2&&(N.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===vt.DYNAMIC&&F.sleepState===vt.SLEEPING&&N.sleepState===vt.AWAKE&&N.type!==vt.STATIC){const tt=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),gt=N.sleepSpeedLimit**2;tt>=gt*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,F,!0),this.collisionMatrixPrevious.get(N,F)||(os.body=F,os.contact=I,N.dispatchEvent(os),os.body=N,F.dispatchEvent(os)),this.bodyOverlapKeeper.set(N.id,F.id),this.shapeOverlapKeeper.set(W.id,V.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=me.now()-u,u=me.now()),_=0;_!==s;_++){const C=r[_];C.wakeUpAfterNarrowphase&&(C.wakeUp(),C.wakeUpAfterNarrowphase=!1)}for(y=f.length,_=0;_!==y;_++){const C=f[_];C.update();for(let I=0,N=C.equations.length;I!==N;I++){const F=C.equations[I];a.addEquation(F)}}a.solve(t,this),c&&(h.solve=me.now()-u),a.removeAllEquations();const T=Math.pow;for(_=0;_!==s;_++){const C=r[_];if(C.type&d){const I=T(1-C.linearDamping,t),N=C.velocity;N.scale(I,N);const F=C.angularVelocity;if(F){const W=T(1-C.angularDamping,t);F.scale(W,F)}}}this.dispatchEvent(Sx),c&&(u=me.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,U=this.quatNormalizeFast;for(_=0;_!==s;_++)r[_].integrate(t,S,U);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=me.now()-u),this.stepnumber+=1,this.dispatchEvent(Mx);let z=!0;if(this.allowSleep)for(z=!1,_=0;_!==s;_++){const C=r[_];C.sleepTick(this.time),C.sleepState!==vt.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(An,Tn),t){for(let s=0,r=An.length;s<r;s+=2)as.bodyA=this.getBodyById(An[s]),as.bodyB=this.getBodyById(An[s+1]),this.dispatchEvent(as);as.bodyA=as.bodyB=null}if(e){for(let s=0,r=Tn.length;s<r;s+=2)ls.bodyA=this.getBodyById(Tn[s]),ls.bodyB=this.getBodyById(Tn[s+1]),this.dispatchEvent(ls);ls.bodyA=ls.bodyB=null}An.length=Tn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(An,Tn),n){for(let s=0,r=An.length;s<r;s+=2){const a=this.getShapeById(An[s]),l=this.getShapeById(An[s+1]);Cn.shapeA=a,Cn.shapeB=l,a&&(Cn.bodyA=a.body),l&&(Cn.bodyB=l.body),this.dispatchEvent(Cn)}Cn.bodyA=Cn.bodyB=Cn.shapeA=Cn.shapeB=null}if(i){for(let s=0,r=Tn.length;s<r;s+=2){const a=this.getShapeById(Tn[s]),l=this.getShapeById(Tn[s+1]);Pn.shapeA=a,Pn.shapeB=l,a&&(Pn.bodyA=a.body),l&&(Pn.bodyB=l.body),this.dispatchEvent(Pn)}Pn.bodyA=Pn.bodyB=Pn.shapeA=Pn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ve;const Io=new fe,me=globalThis.performance||{};if(!me.now){let o=Date.now();me.timing&&me.timing.navigationStart&&(o=me.timing.navigationStart),me.now=()=>Date.now()-o}new b;const Mx={type:"postStep"},Sx={type:"preStep"},os={type:vt.COLLIDE_EVENT_NAME,body:null,contact:null},Ex=[],Ax=[],Tx=[],Cx=[],An=[],Tn=[],as={type:"beginContact",bodyA:null,bodyB:null},ls={type:"endContact",bodyA:null,bodyB:null},Cn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Pn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function Px(o){if(o&&!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=o,document.head.appendChild(t),o}}function Hi(o,t){var e=o.__state.conversionName.toString(),n=Math.round(o.r),i=Math.round(o.g),s=Math.round(o.b),r=o.a,a=Math.round(o.h),l=o.s.toFixed(1),c=o.v.toFixed(1);if(t||e==="THREE_CHAR_HEX"||e==="SIX_CHAR_HEX"){for(var h=o.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(e==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(e==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+r+")";if(e==="HEX")return"0x"+o.hex.toString(16);if(e==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(e==="RGBA_ARRAY")return"["+n+","+i+","+s+","+r+"]";if(e==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(e==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+r+"}";if(e==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(e==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+r+"}"}return"unknown format"}var Mc=Array.prototype.forEach,cs=Array.prototype.slice,nt={BREAK:{},extend:function(t){return this.each(cs.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach(function(i){this.isUndefined(e[i])||(t[i]=e[i])}.bind(this))},this),t},defaults:function(t){return this.each(cs.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach(function(i){this.isUndefined(t[i])&&(t[i]=e[i])}.bind(this))},this),t},compose:function(){var t=cs.call(arguments);return function(){for(var e=cs.call(arguments),n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},each:function(t,e,n){if(t){if(Mc&&t.forEach&&t.forEach===Mc)t.forEach(e,n);else if(t.length===t.length+0){var i=void 0,s=void 0;for(i=0,s=t.length;i<s;i++)if(i in t&&e.call(n,t[i],i)===this.BREAK)return}else for(var r in t)if(e.call(n,t[r],r)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,n){var i=void 0;return function(){var s=this,r=arguments;function a(){i=null,n||t.apply(s,r)}var l=n||!i;clearTimeout(i),i=setTimeout(a,e),l&&t.apply(s,r)}},toArray:function(t){return t.toArray?t.toArray():cs.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(o){function t(e){return o.apply(this,arguments)}return t.toString=function(){return o.toString()},t}(function(o){return isNaN(o)}),isArray:Array.isArray||function(o){return o.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},Lx=[{litmus:nt.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:Hi},SIX_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:Hi},CSS_RGB:{read:function(t){var e=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:Hi},CSS_RGBA:{read:function(t){var e=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:Hi}}},{litmus:nt.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:nt.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:nt.isObject,conversions:{RGBA_OBJ:{read:function(t){return nt.isNumber(t.r)&&nt.isNumber(t.g)&&nt.isNumber(t.b)&&nt.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return nt.isNumber(t.r)&&nt.isNumber(t.g)&&nt.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return nt.isNumber(t.h)&&nt.isNumber(t.s)&&nt.isNumber(t.v)&&nt.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return nt.isNumber(t.h)&&nt.isNumber(t.s)&&nt.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],hs=void 0,xr=void 0,Jo=function(){xr=!1;var t=arguments.length>1?nt.toArray(arguments):arguments[0];return nt.each(Lx,function(e){if(e.litmus(t))return nt.each(e.conversions,function(n,i){if(hs=n.read(t),xr===!1&&hs!==!1)return xr=hs,hs.conversionName=i,hs.conversion=n,nt.BREAK}),nt.BREAK}),xr},Sc=void 0,Cr={hsv_to_rgb:function(t,e,n){var i=Math.floor(t/60)%6,s=t/60-Math.floor(t/60),r=n*(1-e),a=n*(1-s*e),l=n*(1-(1-s)*e),c=[[n,l,r],[a,n,r],[r,n,l],[r,a,n],[l,r,n],[n,r,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(t,e,n){var i=Math.min(t,e,n),s=Math.max(t,e,n),r=s-i,a=void 0,l=void 0;if(s!==0)l=r/s;else return{h:NaN,s:0,v:0};return t===s?a=(e-n)/r:e===s?a=2+(n-t)/r:a=4+(t-e)/r,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(t,e,n){var i=this.hex_with_component(0,2,t);return i=this.hex_with_component(i,1,e),i=this.hex_with_component(i,0,n),i},component_from_hex:function(t,e){return t>>e*8&255},hex_with_component:function(t,e,n){return n<<(Sc=e*8)|t&~(255<<Sc)}},Rx=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},an=function(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")},ln=function(){function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),Wn=function o(t,e,n){t===null&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,e);if(i===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:o(s,e,n)}else{if("value"in i)return i.value;var r=i.get;return r===void 0?void 0:r.call(n)}},qn=function(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(o,t):o.__proto__=t)},Xn=function(o,t){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:o},be=function(){function o(){if(an(this,o),this.__state=Jo.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return ln(o,[{key:"toString",value:function(){return Hi(this)}},{key:"toHexString",value:function(){return Hi(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),o}();function ya(o,t,e){Object.defineProperty(o,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(be.recalculateRGB(this,t,e),this.__state[t])},set:function(i){this.__state.space!=="RGB"&&(be.recalculateRGB(this,t,e),this.__state.space="RGB"),this.__state[t]=i}})}function wa(o,t){Object.defineProperty(o,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(be.recalculateHSV(this),this.__state[t])},set:function(n){this.__state.space!=="HSV"&&(be.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=n}})}be.recalculateRGB=function(o,t,e){if(o.__state.space==="HEX")o.__state[t]=Cr.component_from_hex(o.__state.hex,e);else if(o.__state.space==="HSV")nt.extend(o.__state,Cr.hsv_to_rgb(o.__state.h,o.__state.s,o.__state.v));else throw new Error("Corrupted color state")};be.recalculateHSV=function(o){var t=Cr.rgb_to_hsv(o.r,o.g,o.b);nt.extend(o.__state,{s:t.s,v:t.v}),nt.isNaN(t.h)?nt.isUndefined(o.__state.h)&&(o.__state.h=0):o.__state.h=t.h};be.COMPONENTS=["r","g","b","h","s","v","hex","a"];ya(be.prototype,"r",2);ya(be.prototype,"g",1);ya(be.prototype,"b",0);wa(be.prototype,"h");wa(be.prototype,"s");wa(be.prototype,"v");Object.defineProperty(be.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(be.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Cr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var vi=function(){function o(t,e){an(this,o),this.initialValue=t[e],this.domElement=document.createElement("div"),this.object=t,this.property=e,this.__onChange=void 0,this.__onFinishChange=void 0}return ln(o,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),o}(),Ix={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Lh={};nt.each(Ix,function(o,t){nt.each(o,function(e){Lh[e]=t})});var Dx=/(\d+(\.\d+)?)px/;function pn(o){if(o==="0"||nt.isUndefined(o))return 0;var t=o.match(Dx);return nt.isNull(t)?0:parseFloat(t[1])}var G={makeSelectable:function(t,e){t===void 0||t.style===void 0||(t.onselectstart=e?function(){return!1}:function(){},t.style.MozUserSelect=e?"auto":"none",t.style.KhtmlUserSelect=e?"auto":"none",t.unselectable=e?"on":"off")},makeFullscreen:function(t,e,n){var i=n,s=e;nt.isUndefined(s)&&(s=!0),nt.isUndefined(i)&&(i=!0),t.style.position="absolute",s&&(t.style.left=0,t.style.right=0),i&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,e,n,i){var s=n||{},r=Lh[e];if(!r)throw new Error("Event type "+e+" not supported.");var a=document.createEvent(r);switch(r){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(e,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=a.initKeyboardEvent||a.initKeyEvent;nt.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(e,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(e,s.bubbles||!1,s.cancelable||!0);break}}nt.defaults(a,i),t.dispatchEvent(a)},bind:function(t,e,n,i){var s=i||!1;return t.addEventListener?t.addEventListener(e,n,s):t.attachEvent&&t.attachEvent("on"+e,n),G},unbind:function(t,e,n,i){var s=i||!1;return t.removeEventListener?t.removeEventListener(e,n,s):t.detachEvent&&t.detachEvent("on"+e,n),G},addClass:function(t,e){if(t.className===void 0)t.className=e;else if(t.className!==e){var n=t.className.split(/ +/);n.indexOf(e)===-1&&(n.push(e),t.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return G},removeClass:function(t,e){if(e)if(t.className===e)t.removeAttribute("class");else{var n=t.className.split(/ +/),i=n.indexOf(e);i!==-1&&(n.splice(i,1),t.className=n.join(" "))}else t.className=void 0;return G},hasClass:function(t,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var e=getComputedStyle(t);return pn(e["border-left-width"])+pn(e["border-right-width"])+pn(e["padding-left"])+pn(e["padding-right"])+pn(e.width)},getHeight:function(t){var e=getComputedStyle(t);return pn(e["border-top-width"])+pn(e["border-bottom-width"])+pn(e["padding-top"])+pn(e["padding-bottom"])+pn(e.height)},getOffset:function(t){var e=t,n={left:0,top:0};if(e.offsetParent)do n.left+=e.offsetLeft,n.top+=e.offsetTop,e=e.offsetParent;while(e);return n},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},Rh=function(o){qn(t,o);function t(e,n){an(this,t);var i=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function r(){s.setValue(!s.__prev)}return G.bind(i.__checkbox,"change",r,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return ln(t,[{key:"setValue",value:function(n){var i=Wn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Wn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(vi),Nx=function(o){qn(t,o);function t(e,n,i){an(this,t);var s=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),r=i,a=s;if(s.__select=document.createElement("select"),nt.isArray(r)){var l={};nt.each(r,function(c){l[c]=c}),r=l}return nt.each(r,function(c,h){var d=document.createElement("option");d.innerHTML=h,d.setAttribute("value",c),a.__select.appendChild(d)}),s.updateDisplay(),G.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return ln(t,[{key:"setValue",value:function(n){var i=Wn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return G.isActive(this.__select)?this:(this.__select.value=this.getValue(),Wn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(vi),Fx=function(o){qn(t,o);function t(e,n){an(this,t);var i=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=i;function r(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),G.bind(i.__input,"keyup",r),G.bind(i.__input,"change",r),G.bind(i.__input,"blur",a),G.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return ln(t,[{key:"updateDisplay",value:function(){return G.isActive(this.__input)||(this.__input.value=this.getValue()),Wn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(vi);function Ec(o){var t=o.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var Ih=function(o){qn(t,o);function t(e,n,i){an(this,t);var s=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),r=i||{};return s.__min=r.min,s.__max=r.max,s.__step=r.step,nt.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Ec(s.__impliedStep),s}return ln(t,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Wn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Ec(n),this}}]),t}(vi);function zx(o,t){var e=Math.pow(10,t);return Math.round(o*e)/e}var Pr=function(o){qn(t,o);function t(e,n,i){an(this,t);var s=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,i));s.__truncationSuspended=!1;var r=s,a=void 0;function l(){var g=parseFloat(r.__input.value);nt.isNaN(g)||r.setValue(g)}function c(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}function h(){c()}function d(g){var v=a-g.clientY;r.setValue(r.getValue()+v*r.__impliedStep),a=g.clientY}function u(){G.unbind(window,"mousemove",d),G.unbind(window,"mouseup",u),c()}function f(g){G.bind(window,"mousemove",d),G.bind(window,"mouseup",u),a=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),G.bind(s.__input,"change",l),G.bind(s.__input,"blur",h),G.bind(s.__input,"mousedown",f),G.bind(s.__input,"keydown",function(g){g.keyCode===13&&(r.__truncationSuspended=!0,this.blur(),r.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return ln(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():zx(this.getValue(),this.__precision),Wn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Ih);function Ac(o,t,e,n,i){return n+(i-n)*((o-t)/(e-t))}var Ko=function(o){qn(t,o);function t(e,n,i,s,r){an(this,t);var a=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,{min:i,max:s,step:r})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),G.bind(a.__background,"mousedown",c),G.bind(a.__background,"touchstart",u),G.addClass(a.__background,"slider"),G.addClass(a.__foreground,"slider-fg");function c(v){document.activeElement.blur(),G.bind(window,"mousemove",h),G.bind(window,"mouseup",d),h(v)}function h(v){v.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(Ac(v.clientX,m.left,m.right,l.__min,l.__max)),!1}function d(){G.unbind(window,"mousemove",h),G.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function u(v){v.touches.length===1&&(G.bind(window,"touchmove",f),G.bind(window,"touchend",g),f(v))}function f(v){var m=v.touches[0].clientX,p=l.__background.getBoundingClientRect();l.setValue(Ac(m,p.left,p.right,l.__min,l.__max))}function g(){G.unbind(window,"touchmove",f),G.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return ln(t,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Wn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Ih),Dh=function(o){qn(t,o);function t(e,n,i){an(this,t);var s=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),r=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,G.bind(s.__button,"click",function(a){return a.preventDefault(),r.fire(),!1}),G.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return ln(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(vi),Qo=function(o){qn(t,o);function t(e,n){an(this,t);var i=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));i.__color=new be(i.getValue()),i.__temp=new be(0);var s=i;i.domElement=document.createElement("div"),G.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",G.bind(i.__input,"keydown",function(v){v.keyCode===13&&d.call(this)}),G.bind(i.__input,"blur",d),G.bind(i.__selector,"mousedown",function(){G.addClass(this,"drag").bind(window,"mouseup",function(){G.removeClass(s.__selector,"drag")})}),G.bind(i.__selector,"touchstart",function(){G.addClass(this,"drag").bind(window,"touchend",function(){G.removeClass(s.__selector,"drag")})});var r=document.createElement("div");nt.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),nt.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),nt.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),nt.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),nt.extend(r.style,{width:"100%",height:"100%",background:"none"}),Tc(r,"top","rgba(0,0,0,0)","#000"),nt.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Ox(i.__hue_field),nt.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),G.bind(i.__saturation_field,"mousedown",a),G.bind(i.__saturation_field,"touchstart",a),G.bind(i.__field_knob,"mousedown",a),G.bind(i.__field_knob,"touchstart",a),G.bind(i.__hue_field,"mousedown",l),G.bind(i.__hue_field,"touchstart",l);function a(v){f(v),G.bind(window,"mousemove",f),G.bind(window,"touchmove",f),G.bind(window,"mouseup",c),G.bind(window,"touchend",c)}function l(v){g(v),G.bind(window,"mousemove",g),G.bind(window,"touchmove",g),G.bind(window,"mouseup",h),G.bind(window,"touchend",h)}function c(){G.unbind(window,"mousemove",f),G.unbind(window,"touchmove",f),G.unbind(window,"mouseup",c),G.unbind(window,"touchend",c),u()}function h(){G.unbind(window,"mousemove",g),G.unbind(window,"touchmove",g),G.unbind(window,"mouseup",h),G.unbind(window,"touchend",h),u()}function d(){var v=Jo(this.value);v!==!1?(s.__color.__state=v,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function u(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(r),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function f(v){v.type.indexOf("touch")===-1&&v.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),p=v.touches&&v.touches[0]||v,_=p.clientX,y=p.clientY,x=(_-m.left)/(m.right-m.left),M=1-(y-m.top)/(m.bottom-m.top);return M>1?M=1:M<0&&(M=0),x>1?x=1:x<0&&(x=0),s.__color.v=M,s.__color.s=x,s.setValue(s.__color.toOriginal()),!1}function g(v){v.type.indexOf("touch")===-1&&v.preventDefault();var m=s.__hue_field.getBoundingClientRect(),p=v.touches&&v.touches[0]||v,_=p.clientY,y=1-(_-m.top)/(m.bottom-m.top);return y>1?y=1:y<0&&(y=0),s.__color.h=y*360,s.setValue(s.__color.toOriginal()),!1}return i}return ln(t,[{key:"updateDisplay",value:function(){var n=Jo(this.getValue());if(n!==!1){var i=!1;nt.each(be.COMPONENTS,function(a){if(!nt.isUndefined(n[a])&&!nt.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&nt.extend(this.__color.__state,n)}nt.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,r=255-s;nt.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Tc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),nt.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+r+","+r+","+r+",.7)"})}}]),t}(vi),Ux=["-moz-","-o-","-webkit-","-ms-",""];function Tc(o,t,e,n){o.style.background="",nt.each(Ux,function(i){o.style.cssText+="background: "+i+"linear-gradient("+t+", "+e+" 0%, "+n+" 100%); "})}function Ox(o){o.style.background="",o.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",o.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",o.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",o.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",o.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Bx={load:function(t,e){var n=e||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=t,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(t,e){var n=e||document,i=document.createElement("style");i.type="text/css",i.innerHTML=t;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},kx=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Vx=function(t,e){var n=t[e];return nt.isArray(arguments[2])||nt.isObject(arguments[2])?new Nx(t,e,arguments[2]):nt.isNumber(n)?nt.isNumber(arguments[2])&&nt.isNumber(arguments[3])?nt.isNumber(arguments[4])?new Ko(t,e,arguments[2],arguments[3],arguments[4]):new Ko(t,e,arguments[2],arguments[3]):nt.isNumber(arguments[4])?new Pr(t,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Pr(t,e,{min:arguments[2],max:arguments[3]}):nt.isString(n)?new Fx(t,e):nt.isFunction(n)?new Dh(t,e,""):nt.isBoolean(n)?new Rh(t,e):null};function Gx(o){setTimeout(o,1e3/60)}var Hx=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Gx,Wx=function(){function o(){an(this,o),this.backgroundElement=document.createElement("div"),nt.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),G.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),nt.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;G.bind(this.backgroundElement,"click",function(){t.hide()})}return ln(o,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),nt.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,n=function i(){e.domElement.style.display="none",e.backgroundElement.style.display="none",G.unbind(e.domElement,"webkitTransitionEnd",i),G.unbind(e.domElement,"transitionend",i),G.unbind(e.domElement,"oTransitionEnd",i)};G.bind(this.domElement,"webkitTransitionEnd",n),G.bind(this.domElement,"transitionend",n),G.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-G.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-G.getHeight(this.domElement)/2+"px"}}]),o}(),qx=Px(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Bx.inject(qx);var Cc="dg",Pc=72,Lc=20,Ns="Default",vs=function(){try{return!!window.localStorage}catch{return!1}}(),Ss=void 0,Rc=!0,Oi=void 0,Do=!1,Nh=[],te=function o(t){var e=this,n=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),G.addClass(this.domElement,Cc),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=nt.defaults(n,{closeOnTop:!1,autoPlace:!0,width:o.DEFAULT_WIDTH}),n=nt.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),nt.isUndefined(n.load)?n.load={preset:Ns}:n.preset&&(n.load.preset=n.preset),nt.isUndefined(n.parent)&&n.hideable&&Nh.push(this),n.resizable=nt.isUndefined(n.parent)&&n.resizable,n.autoPlace&&nt.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=vs&&localStorage.getItem(Bi(this,"isLocal"))==="true",s=void 0,r=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return e.parent?e.getRoot().preset:n.load.preset},set:function(u){e.parent?e.getRoot().preset=u:n.load.preset=u,$x(this),e.revert()}},width:{get:function(){return n.width},set:function(u){n.width=u,na(e,u)}},name:{get:function(){return n.name},set:function(u){n.name=u,r&&(r.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(u){n.closed=u,n.closed?G.addClass(e.__ul,o.CLASS_CLOSED):G.removeClass(e.__ul,o.CLASS_CLOSED),this.onResize(),e.__closeButton&&(e.__closeButton.innerHTML=u?o.TEXT_OPEN:o.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(u){vs&&(i=u,u?G.bind(window,"unload",s):G.unbind(window,"unload",s),localStorage.setItem(Bi(e,"isLocal"),u))}}}),nt.isUndefined(n.parent)){if(this.closed=n.closed||!1,G.addClass(this.domElement,o.CLASS_MAIN),G.makeSelectable(this.domElement,!1),vs&&i){e.useLocalStorage=!0;var a=localStorage.getItem(Bi(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=o.TEXT_CLOSED,G.addClass(this.__closeButton,o.CLASS_CLOSE_BUTTON),n.closeOnTop?(G.addClass(this.__closeButton,o.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(G.addClass(this.__closeButton,o.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),G.bind(this.__closeButton,"click",function(){e.closed=!e.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);G.addClass(l,"controller-name"),r=ba(e,l);var c=function(u){return u.preventDefault(),e.closed=!e.closed,!1};G.addClass(this.__ul,o.CLASS_CLOSED),G.addClass(r,"title"),G.bind(r,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(nt.isUndefined(n.parent)&&(Rc&&(Oi=document.createElement("div"),G.addClass(Oi,Cc),G.addClass(Oi,o.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Oi),Rc=!1),Oi.appendChild(this.domElement),G.addClass(this.domElement,o.CLASS_AUTO_PLACE)),this.parent||na(e,n.width)),this.__resizeHandler=function(){e.onResizeDebounced()},G.bind(window,"resize",this.__resizeHandler),G.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),G.bind(this.__ul,"transitionend",this.__resizeHandler),G.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Yx(this),s=function(){vs&&localStorage.getItem(Bi(e,"isLocal"))==="true"&&localStorage.setItem(Bi(e,"gui"),JSON.stringify(e.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function h(){var d=e.getRoot();d.width+=1,nt.defer(function(){d.width-=1})}n.parent||h()};te.toggleHide=function(){Do=!Do,nt.each(Nh,function(o){o.domElement.style.display=Do?"none":""})};te.CLASS_AUTO_PLACE="a";te.CLASS_AUTO_PLACE_CONTAINER="ac";te.CLASS_MAIN="main";te.CLASS_CONTROLLER_ROW="cr";te.CLASS_TOO_TALL="taller-than-window";te.CLASS_CLOSED="closed";te.CLASS_CLOSE_BUTTON="close-button";te.CLASS_CLOSE_TOP="close-top";te.CLASS_CLOSE_BOTTOM="close-bottom";te.CLASS_DRAG="drag";te.DEFAULT_WIDTH=245;te.TEXT_CLOSED="Close Controls";te.TEXT_OPEN="Open Controls";te._keydownHandler=function(o){document.activeElement.type!=="text"&&(o.which===Pc||o.keyCode===Pc)&&te.toggleHide()};G.bind(window,"keydown",te._keydownHandler,!1);nt.extend(te.prototype,{add:function(t,e){return Es(this,t,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,e){return Es(this,t,e,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var e=this;nt.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Oi.removeChild(this.domElement);var t=this;nt.each(this.__folders,function(e){t.removeFolder(e)}),G.unbind(window,"keydown",te._keydownHandler,!1),Ic(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var e={name:t,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(e.closed=this.load.folders[t].closed,e.load=this.load.folders[t]);var n=new te(e);this.__folders[t]=n;var i=ba(this,n.domElement);return G.addClass(i,"folder"),n},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],Ic(t);var e=this;nt.each(t.__folders,function(n){t.removeFolder(n)}),nt.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var e=G.getOffset(t.__ul).top,n=0;nt.each(t.__ul.childNodes,function(i){t.autoPlace&&i===t.__save_row||(n+=G.getHeight(i))}),window.innerHeight-e-Lc<n?(G.addClass(t.domElement,te.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-e-Lc+"px"):(G.removeClass(t.domElement,te.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&nt.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:nt.debounce(function(){this.onResize()},50),remember:function(){if(nt.isUndefined(Ss)&&(Ss=new Wx,Ss.domElement.innerHTML=kx),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;nt.each(Array.prototype.slice.call(arguments),function(e){t.__rememberedObjects.length===0&&jx(t),t.__rememberedObjects.indexOf(e)===-1&&t.__rememberedObjects.push(e)}),this.autoPlace&&na(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=yr(this)),t.folders={},nt.each(this.__folders,function(e,n){t.folders[n]=e.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=yr(this),ta(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[Ns]=yr(this,!0)),this.load.remembered[t]=yr(this),this.preset=t,ea(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){nt.each(this.__controllers,function(e){this.getRoot().load.remembered?Fh(t||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),nt.each(this.__folders,function(e){e.revert(e)}),t||ta(this.getRoot(),!1)},listen:function(t){var e=this.__listening.length===0;this.__listening.push(t),e&&zh(this.__listening)},updateDisplay:function(){nt.each(this.__controllers,function(t){t.updateDisplay()}),nt.each(this.__folders,function(t){t.updateDisplay()})}});function ba(o,t,e){var n=document.createElement("li");return t&&n.appendChild(t),e?o.__ul.insertBefore(n,e):o.__ul.appendChild(n),o.onResize(),n}function Ic(o){G.unbind(window,"resize",o.__resizeHandler),o.saveToLocalStorageIfPossible&&G.unbind(window,"unload",o.saveToLocalStorageIfPossible)}function ta(o,t){var e=o.__preset_select[o.__preset_select.selectedIndex];t?e.innerHTML=e.value+"*":e.innerHTML=e.value}function Xx(o,t,e){if(e.__li=t,e.__gui=o,nt.extend(e,{options:function(r){if(arguments.length>1){var a=e.__li.nextElementSibling;return e.remove(),Es(o,e.object,e.property,{before:a,factoryArgs:[nt.toArray(arguments)]})}if(nt.isArray(r)||nt.isObject(r)){var l=e.__li.nextElementSibling;return e.remove(),Es(o,e.object,e.property,{before:l,factoryArgs:[r]})}},name:function(r){return e.__li.firstElementChild.firstElementChild.innerHTML=r,e},listen:function(){return e.__gui.listen(e),e},remove:function(){return e.__gui.remove(e),e}}),e instanceof Ko){var n=new Pr(e.object,e.property,{min:e.__min,max:e.__max,step:e.__step});nt.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var r=e[s],a=n[s];e[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),r.apply(e,l)}}),G.addClass(t,"has-slider"),e.domElement.insertBefore(n.domElement,e.domElement.firstElementChild)}else if(e instanceof Pr){var i=function(r){if(nt.isNumber(e.__min)&&nt.isNumber(e.__max)){var a=e.__li.firstElementChild.firstElementChild.innerHTML,l=e.__gui.__listening.indexOf(e)>-1;e.remove();var c=Es(o,e.object,e.property,{before:e.__li.nextElementSibling,factoryArgs:[e.__min,e.__max,e.__step]});return c.name(a),l&&c.listen(),c}return r};e.min=nt.compose(i,e.min),e.max=nt.compose(i,e.max)}else e instanceof Rh?(G.bind(t,"click",function(){G.fakeEvent(e.__checkbox,"click")}),G.bind(e.__checkbox,"click",function(s){s.stopPropagation()})):e instanceof Dh?(G.bind(t,"click",function(){G.fakeEvent(e.__button,"click")}),G.bind(t,"mouseover",function(){G.addClass(e.__button,"hover")}),G.bind(t,"mouseout",function(){G.removeClass(e.__button,"hover")})):e instanceof Qo&&(G.addClass(t,"color"),e.updateDisplay=nt.compose(function(s){return t.style.borderLeftColor=e.__color.toString(),s},e.updateDisplay),e.updateDisplay());e.setValue=nt.compose(function(s){return o.getRoot().__preset_select&&e.isModified()&&ta(o.getRoot(),!0),s},e.setValue)}function Fh(o,t){var e=o.getRoot(),n=e.__rememberedObjects.indexOf(t.object);if(n!==-1){var i=e.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},e.__rememberedObjectIndecesToControllers[n]=i),i[t.property]=t,e.load&&e.load.remembered){var s=e.load.remembered,r=void 0;if(s[o.preset])r=s[o.preset];else if(s[Ns])r=s[Ns];else return;if(r[n]&&r[n][t.property]!==void 0){var a=r[n][t.property];t.initialValue=a,t.setValue(a)}}}}function Es(o,t,e,n){if(t[e]===void 0)throw new Error('Object "'+t+'" has no property "'+e+'"');var i=void 0;if(n.color)i=new Qo(t,e);else{var s=[t,e].concat(n.factoryArgs);i=Vx.apply(o,s)}n.before instanceof vi&&(n.before=n.before.__li),Fh(o,i),G.addClass(i.domElement,"c");var r=document.createElement("span");G.addClass(r,"property-name"),r.innerHTML=i.property;var a=document.createElement("div");a.appendChild(r),a.appendChild(i.domElement);var l=ba(o,a,n.before);return G.addClass(l,te.CLASS_CONTROLLER_ROW),i instanceof Qo?G.addClass(l,"color"):G.addClass(l,Rx(i.getValue())),Xx(o,l,i),o.__controllers.push(i),i}function Bi(o,t){return document.location.href+"."+t}function ea(o,t,e){var n=document.createElement("option");n.innerHTML=t,n.value=t,o.__preset_select.appendChild(n),e&&(o.__preset_select.selectedIndex=o.__preset_select.length-1)}function Dc(o,t){t.style.display=o.useLocalStorage?"block":"none"}function jx(o){var t=o.__save_row=document.createElement("li");G.addClass(o.domElement,"has-save"),o.__ul.insertBefore(t,o.__ul.firstChild),G.addClass(t,"save-row");var e=document.createElement("span");e.innerHTML="&nbsp;",G.addClass(e,"button gears");var n=document.createElement("span");n.innerHTML="Save",G.addClass(n,"button"),G.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",G.addClass(i,"button"),G.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",G.addClass(s,"button"),G.addClass(s,"revert");var r=o.__preset_select=document.createElement("select");if(o.load&&o.load.remembered?nt.each(o.load.remembered,function(d,u){ea(o,u,u===o.preset)}):ea(o,Ns,!1),G.bind(r,"change",function(){for(var d=0;d<o.__preset_select.length;d++)o.__preset_select[d].innerHTML=o.__preset_select[d].value;o.preset=this.value}),t.appendChild(r),t.appendChild(e),t.appendChild(n),t.appendChild(i),t.appendChild(s),vs){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Bi(o,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Dc(o,a),G.bind(l,"change",function(){o.useLocalStorage=!o.useLocalStorage,Dc(o,a)})}var h=document.getElementById("dg-new-constructor");G.bind(h,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Ss.hide()}),G.bind(e,"click",function(){h.innerHTML=JSON.stringify(o.getSaveObject(),void 0,2),Ss.show(),h.focus(),h.select()}),G.bind(n,"click",function(){o.save()}),G.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&o.saveAs(d)}),G.bind(s,"click",function(){o.revert()})}function Yx(o){var t=void 0;o.__resize_handle=document.createElement("div"),nt.extend(o.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function e(s){return s.preventDefault(),o.width+=t-s.clientX,o.onResize(),t=s.clientX,!1}function n(){G.removeClass(o.__closeButton,te.CLASS_DRAG),G.unbind(window,"mousemove",e),G.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),t=s.clientX,G.addClass(o.__closeButton,te.CLASS_DRAG),G.bind(window,"mousemove",e),G.bind(window,"mouseup",n),!1}G.bind(o.__resize_handle,"mousedown",i),G.bind(o.__closeButton,"mousedown",i),o.domElement.insertBefore(o.__resize_handle,o.domElement.firstElementChild)}function na(o,t){o.domElement.style.width=t+"px",o.__save_row&&o.autoPlace&&(o.__save_row.style.width=t+"px"),o.__closeButton&&(o.__closeButton.style.width=t+"px")}function yr(o,t){var e={};return nt.each(o.__rememberedObjects,function(n,i){var s={},r=o.__rememberedObjectIndecesToControllers[i];nt.each(r,function(a,l){s[l]=t?a.initialValue:a.getValue()}),e[i]=s}),e}function $x(o){for(var t=0;t<o.__preset_select.length;t++)o.__preset_select[t].value===o.preset&&(o.__preset_select.selectedIndex=t)}function zh(o){o.length!==0&&Hx.call(window,function(){zh(o)}),nt.each(o,function(t){t.updateDisplay()})}var Zx=te;class Gr extends Xt{constructor(){const t=Gr.SkyShader,e=new vn({name:"SkyShader",fragmentShader:t.fragmentShader,vertexShader:t.vertexShader,uniforms:eh.clone(t.uniforms),side:Me,depthWrite:!1});super(new Gn(1,1,1),e),this.isSky=!0}}Gr.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPos );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};const Sr=0,Jx=1,Kx=new D,Nc=new tv,No=new Ln,Fc=new D,wr=new qe;class Qx{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new zc,this.unassigned=new zc,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.vertices.push(new ty(t[e]));this.compute()}return this}setFromObject(t){const e=[];return t.updateMatrixWorld(!0),t.traverse(function(n){const i=n.geometry;if(i!==void 0){const s=i.attributes.position;if(s!==void 0)for(let r=0,a=s.count;r<a;r++){const l=new D;l.fromBufferAttribute(s,r).applyMatrix4(n.matrixWorld),e.push(l)}}}),this.setFromPoints(e)}containsPoint(t){const e=this.faces;for(let n=0,i=e.length;n<i;n++)if(e[n].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,e){const n=this.faces;let i=-1/0,s=1/0;for(let r=0,a=n.length;r<a;r++){const l=n[r],c=l.distanceToPoint(t.origin),h=l.normal.dot(t.direction);if(c>0&&h>=0)return null;const d=h!==0?-c/h:0;if(!(d<=0)&&(h>0?s=Math.min(d,s):i=Math.max(d,i),i>s))return null}return i!==-1/0?t.at(i,e):t.at(s,e),e}intersectsRay(t){return this.intersectRay(t,Kx)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(t,e){return t.face=e,e.outside===null?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this}removeVertexFromFace(t,e){return t===e.outside&&(t.next!==null&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this}removeAllVerticesFromFace(t){if(t.outside!==null){const e=t.outside;let n=t.outside;for(;n.next!==null&&n.next.face===t;)n=n.next;return this.assigned.removeSubList(e,n),e.prev=n.next=null,t.outside=null,e}}deleteFaceVertices(t,e){const n=this.removeAllVerticesFromFace(t);if(n!==void 0)if(e===void 0)this.unassigned.appendChain(n);else{let i=n;do{const s=i.next;e.distanceToPoint(i.point)>this.tolerance?this.addVertexToFace(i,e):this.unassigned.append(i),i=s}while(i!==null)}return this}resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let e=this.unassigned.first();do{const n=e.next;let i=this.tolerance,s=null;for(let r=0;r<t.length;r++){const a=t[r];if(a.mark===Sr){const l=a.distanceToPoint(e.point);if(l>i&&(i=l,s=a),i>1e3*this.tolerance)break}}s!==null&&this.addVertexToFace(e,s),e=n}while(e!==null)}return this}computeExtremes(){const t=new D,e=new D,n=[],i=[];for(let s=0;s<3;s++)n[s]=i[s]=this.vertices[0];t.copy(this.vertices[0].point),e.copy(this.vertices[0].point);for(let s=0,r=this.vertices.length;s<r;s++){const a=this.vertices[s],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(e.x))+Math.max(Math.abs(t.y),Math.abs(e.y))+Math.max(Math.abs(t.z),Math.abs(e.z))),{min:n,max:i}}computeInitialHull(){const t=this.vertices,e=this.computeExtremes(),n=e.min,i=e.max;let s=0,r=0;for(let u=0;u<3;u++){const f=i[u].point.getComponent(u)-n[u].point.getComponent(u);f>s&&(s=f,r=u)}const a=n[r],l=i[r];let c,h;s=0,Nc.set(a.point,l.point);for(let u=0,f=this.vertices.length;u<f;u++){const g=t[u];if(g!==a&&g!==l){Nc.closestPointToPoint(g.point,!0,Fc);const v=Fc.distanceToSquared(g.point);v>s&&(s=v,c=g)}}s=-1,No.setFromCoplanarPoints(a.point,l.point,c.point);for(let u=0,f=this.vertices.length;u<f;u++){const g=t[u];if(g!==a&&g!==l&&g!==c){const v=Math.abs(No.distanceToPoint(g.point));v>s&&(s=v,h=g)}}const d=[];if(No.distanceToPoint(h.point)<0){d.push(Qe.create(a,l,c),Qe.create(h,l,a),Qe.create(h,c,l),Qe.create(h,a,c));for(let u=0;u<3;u++){const f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge(f)),d[u+1].getEdge(1).setTwin(d[f+1].getEdge(0))}}else{d.push(Qe.create(a,c,l),Qe.create(h,a,l),Qe.create(h,l,c),Qe.create(h,c,a));for(let u=0;u<3;u++){const f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge((3-u)%3)),d[u+1].getEdge(0).setTwin(d[f+1].getEdge(1))}}for(let u=0;u<4;u++)this.faces.push(d[u]);for(let u=0,f=t.length;u<f;u++){const g=t[u];if(g!==a&&g!==l&&g!==c&&g!==h){s=this.tolerance;let v=null;for(let m=0;m<4;m++){const p=this.faces[m].distanceToPoint(g.point);p>s&&(s=p,v=this.faces[m])}v!==null&&this.addVertexToFace(g,v)}}return this}reindexFaces(){const t=[];for(let e=0;e<this.faces.length;e++){const n=this.faces[e];n.mark===Sr&&t.push(n)}return this.faces=t,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,e=0;const n=this.assigned.first().face;let i=n.outside;do{const s=n.distanceToPoint(i.point);s>e&&(e=s,t=i),i=i.next}while(i!==null&&i.face===n);return t}}computeHorizon(t,e,n,i){this.deleteFaceVertices(n),n.mark=Jx;let s;e===null?s=e=n.getEdge(0):s=e.next;do{const r=s.twin,a=r.face;a.mark===Sr&&(a.distanceToPoint(t)>this.tolerance?this.computeHorizon(t,r,a,i):i.push(s)),s=s.next}while(s!==e);return this}addAdjoiningFace(t,e){const n=Qe.create(t,e.tail(),e.head());return this.faces.push(n),n.getEdge(-1).setTwin(e.twin),n.getEdge(0)}addNewFaces(t,e){this.newFaces=[];let n=null,i=null;for(let s=0;s<e.length;s++){const r=e[s],a=this.addAdjoiningFace(t,r);n===null?n=a:a.next.setTwin(i),this.newFaces.push(a.face),i=a}return n.next.setTwin(i),this}addVertexToHull(t){const e=[];return this.unassigned.clear(),this.removeVertexFromFace(t,t.face),this.computeHorizon(t.point,null,t.face,e),this.addNewFaces(t,e),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let t;for(this.computeInitialHull();(t=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(t);return this.reindexFaces(),this.cleanup(),this}}class Qe{constructor(){this.normal=new D,this.midpoint=new D,this.area=0,this.constant=0,this.outside=null,this.mark=Sr,this.edge=null}static create(t,e,n){const i=new Qe,s=new Fo(t,i),r=new Fo(e,i),a=new Fo(n,i);return s.next=a.prev=r,r.next=s.prev=a,a.next=r.prev=s,i.edge=s,i.compute()}getEdge(t){let e=this.edge;for(;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e}compute(){const t=this.edge.tail(),e=this.edge.head(),n=this.edge.next.head();return wr.set(t.point,e.point,n.point),wr.getNormal(this.normal),wr.getMidpoint(this.midpoint),this.area=wr.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}}class Fo{constructor(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const t=this.head(),e=this.tail();return e!==null?e.point.distanceTo(t.point):-1}lengthSquared(){const t=this.head(),e=this.tail();return e!==null?e.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}}class ty{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}}class zc{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,e){return e.prev=t.prev,e.next=t,e.prev===null?this.head=e:e.prev.next=e,t.prev=e,this}insertAfter(t,e){return e.prev=t,e.next=t.next,e.next===null?this.tail=e:e.next.prev=e,t.next=e,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,e){return t.prev===null?this.head=e.next:t.prev.next=e.next,e.next===null?this.tail=t.prev:e.next.prev=t.prev,this}isEmpty(){return this.head===null}}class zo extends he{constructor(t=[]){super();const e=[],n=[],s=new Qx().setFromPoints(t).faces;for(let r=0;r<s.length;r++){const a=s[r];let l=a.edge;do{const c=l.head().point;e.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Zt(e,3)),this.setAttribute("normal",new Zt(n,3))}}var ni={W:87,A:65,S:83,D:68,SPACE:32,SHIFT:16,CTRL:17};class ey{constructor(){this.body=this.makeBody(),this.mesh=this.makeMesh(),this.shootDelay=10,this.maxSpeed=100,this.speed=5,this.health=10,this.points=0,this.lastShot=0}hit(){this.health--}point(){this.points++}makeMesh(){const t=new Qt;var e,n,i,s,r;new Ln().setFromCoplanarPoints(new D(0,.1,4),new D(2,-1,-3),new D(-2,-1,-3)),i=new pa(1,2,5,24),s=new Oe({color:6488047}),r=new Xt(i,s),r.rotateX(1.3+Math.PI/4),r.position.set(0,.2,-.5),t.add(r),e=new Qt;var a=[new D(-3.5,0,-3),new D(-2,-1,-3),new D(0,1,-3),new D(-1.8,2.2,-2.6),new D(-.65,-.5,3)];i=new zo(a),s=new Oe({color:16777215,side:je}),r=new Xt(i,s),e.add(r),a=[new D(2,-1,-3),new D(3.5,0,-3),new D(1.8,2.2,-2.6),new D(.65,-.5,3),new D(0,1,-3)],i=new zo(a),s=new Oe({color:16777215,side:je}),r=new Xt(i,s),e.add(r),a=[new D(0,0,4),new D(0,1,-3),new D(2,-1,-3),new D(-2,-1,-3)],i=new zo(a),s=new Oe({color:16777215,side:je}),r=new Xt(i,s),e.add(r),t.add(e),e=new Qt,a=[new ct(-2.9,.2),new ct(-2,-.2),new ct(-.8,-.2),new ct(-.5,.6),new ct(-1.8,1.6)],n=new gs,n.moveTo(a[0].x,a[0].y),n.lineTo(a[1].x,a[1].y),n.lineTo(a[2].x,a[2].y),n.lineTo(a[3].x,a[3].y),n.lineTo(a[4].x,a[4].y);var l,c,h,d,u;l=.3,c=57,h=163,d=255;for(var f=0;f<4;f++){var g=.2;i=new Gi(n,{depth:g,bevelEnabled:!1}),l+=.1,c+=48,h+=48,d+=48,u="rgb("+c+","+h+","+d+")",s=new Oe({color:u,emissive:u,emissiveIntensity:l}),r=new Xt(i,s);const m=1-f/10;r.scale.set(m,m,1),r.translateX(-f/10),r.translateY(f/20),r.translateZ(-f/18),e.add(r)}e.translateZ(-3.1),e.rotateX(.1),t.add(e),e=e.clone(),e.scale.x=-1,t.add(e),e=new Qt,n=new gs,n.moveTo(-1.8,-.8),n.lineTo(-2,-.5),n.lineTo(2,-.5),n.lineTo(1.8,-.8),n.lineTo(-1.8,-.8);var g=.2;i=new Gi(n,{depth:g,bevelEnabled:!1}),s=new Oe({color:16724896,emissive:16716626,emissiveIntensity:.3}),r=new Xt(i,s),r.translateZ(-3.05),e.add(r),s=new Oe({color:16777215,emissive:16777215,emissiveIntensity:.5}),r=new Xt(i,s),r.scale.set(.8,.5,1),r.translateZ(-3.1),r.translateY(-.3),e.add(r),t.add(e),n=new gs,n.moveTo(2.9,.5),n.lineTo(3,2.3),n.lineTo(3.5,3.1),n.lineTo(2,2.7),n.lineTo(1,0),n.lineTo(2.9,.5);var g=.2;return i=new Gi(n,{depth:g,bevelEnabled:!1}),s=new Oe({color:7688191}),r=new Xt(i,s),r.rotateX(Math.PI/2),r.rotateZ(-Math.PI/2),r.translateY(1.5),r.translateX(-1),t.add(r),r=r.clone(),r.rotateX(Math.PI),r.translateY(3),t.add(r),n=new gs,n.moveTo(-2.9,.5),n.lineTo(-3,2.3),n.lineTo(-3.5,3.1),n.lineTo(-2,2.7),n.lineTo(0,.8),n.lineTo(-2.9,.5),g=.2,i=new Gi(n,{depth:g,bevelEnabled:!1}),s=new Oe({color:7688191}),r=new Xt(i,s),r.rotateY(-Math.PI/2),r.position.set(g/2,0,0),t.add(r),t.position.copy(this.body.position),t.quaternion.copy(this.body.quaternion),t.name="spaceship",t}makeBody(){const t=new Vr(3.5),e=new vt({mass:5,linearDamping:.4,angularDamping:.5});return e.collisionFilterGroup=2,e.linearFactor.set(1,0,1),e.angularFactor.set(0,1,0),e.addShape(t),e}makeTrail(){let t=new he;for(var e=new Float32Array(1e3*3),n=0;n<1e3;n++){var i=0,s=0,r=0;e[n*3+0]=i,e[n*3+1]=s,e[n*3+2]=r}t.setAttribute("position",new on(e,3));var a=new ca({color:16777215,size:.1}),l=new uh(t,a);return l}update(t,e){return this.move(t,e)}animateTrail(){for(var t=this.trail.geometry.attributes.position.array,e=0;e<1e3;e++){var n=Math.random()*.5;t[e*3+2]-=n,t[e*3+2]<this.mesh.position.z-10&&(t[e*3+0]=this.mesh.position.x,t[e*3+1]=this.mesh.position.y,t[e*3+2]=this.mesh.position.z-3)}this.trail.geometry.attributes.position.newedsUpdate=!0}move(t,e){var l,c,h;return t[ni.W]&&this.body.velocity.length()<this.maxSpeed&&(l=new b(0,0,this.speed),c=1,h=new b(0,0,-3),this.body.applyLocalImpulse(l,h,c)),t[ni.S]?(this.body.linearDamping=.7,this.body.angularDamping=.9):(this.body.linearDamping=.4,this.body.angularDamping=.5),t[ni.W]&&t[ni.SHIFT]&&this.body.velocity.length()<this.maxSpeed&&(l=new b(0,0,this.speed*3),c=1,h=new b(0,0,-3),l.scale(c),this.body.applyLocalImpulse(l,h)),t[ni.D]&&(l=new b(0,0,.8),c=.5,h=new b(2,0,-3),this.body.applyLocalImpulse(l,h,c),l=new b(0,0,.8*.7),c=.5,h=new b(2,0,0),this.body.applyLocalImpulse(l,h,c)),t[ni.A]&&(l=new b(0,0,.8),c=.5,h=new b(-2,0,-3),this.body.applyLocalImpulse(l,h,c),l=new b(0,0,.8*.7),c=.5,h=new b(-2,0,0),this.body.applyLocalImpulse(l,h,c)),this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),t[ni.SPACE]&&e>this.lastShot+this.shootDelay?(this.lastShot=e,!0):!1}}class us{constructor(t,e,n,i,s){this.body=this.makeBody(t,e),this.mesh=this.makeMesh(t,n,s),this.system=this.makeSystem(),this.rings=[],this.moons=[],this.speed=i}update(){for(let t=0;t<this.rings.length;t++)this.rings[t].rotateY(-4e-4);for(let t=0;t<this.moons.length;t++)this.moons[t].update();this.system.rotateY(this.speed),this.body.position.copy(this.mesh.localToWorld(new D(0,0,0))),this.body.quaternion.copy(this.mesh.quaternion)}makeSystem(){const t=new Qt;return t.add(this.mesh),t}makeBody(t,e){const n=new Vr(t),i=new vt({mass:0});return i.addShape(n),i.position.copy(e),i}makeMesh(t,e,n){const i=new Qt;var s,r,a,l;return s=new Hn(t,32,32),l=new xh().load(n),r=new Oe({map:l}),a=new Xt(s,r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),i.position.copy(this.body.position),i.quaternion.copy(this.body.quaternion),i}addParticleRing(t,e,n,i,s){var r,a,l;r=new he;const c=[];for(let h=0;h<i;h++){const d=h/i*Math.PI*2,u=Math.cos(d)*(t+(Math.random()-.5)*(e-t)),f=-2+Math.random()*4,g=Math.sin(d)*(t+(Math.random()-.5)*(e-t));c.push(u,f,g)}r.setAttribute("position",new Zt(c,3)),a=new ca({color:s,size:.4}),l=new uh(r,a),l.rotateZ(n),this.rings.push(l),this.mesh.add(l)}addMoon(t){const e=t;this.moons.push(e),this.mesh.add(t.system)}}function ny(o,t,e){let{color:n=65280,scale:i=1,onInit:s,onUpdate:r}=e===void 0?{}:e;const a=[],l=new Nr({color:n??65280,wireframe:!0}),c=new b,h=new b,d=new b,u=new ce,f=new Hn(1),g=new Gn(1,1,1),v=new Ls(10,10,10,10);v.translate(0,0,1e-4);function m(T){const w=new he,S=[];for(let z=0;z<T.vertices.length;z++){const C=T.vertices[z];S.push(C.x,C.y,C.z)}w.setAttribute("position",new Zt(S,3));const U=[];for(let z=0;z<T.faces.length;z++){const C=T.faces[z],I=C[0];for(let N=1;N<C.length-1;N++){const F=C[N],W=C[N+1];U.push(I,F,W)}}return w.setIndex(U),w.computeBoundingSphere(),w.computeVertexNormals(),w}function p(T){const w=new he,S=[],U=c,z=h,C=d;for(let I=0;I<T.indices.length/3;I++)T.getTriangleVertices(I,U,z,C),S.push(U.x,U.y,U.z),S.push(z.x,z.y,z.z),S.push(C.x,C.y,C.z);return w.setAttribute("position",new Zt(S,3)),w.computeBoundingSphere(),w.computeVertexNormals(),w}function _(T){const w=new he,S=T.elementSize||1,U=T.data.flatMap((C,I)=>C.flatMap((N,F)=>[I*S,F*S,N])),z=[];for(let C=0;C<T.data.length-1;C++)for(let I=0;I<T.data[C].length-1;I++){const N=T.data[C].length,F=C*N+I;z.push(F+1,F+N,F+N+1),z.push(F+N,F+1,F)}return w.setIndex(z),w.setAttribute("position",new Zt(U,3)),w.computeBoundingSphere(),w.computeVertexNormals(),w}function y(T){let w=new Xt;const{SPHERE:S,BOX:U,PLANE:z,CYLINDER:C,CONVEXPOLYHEDRON:I,TRIMESH:N,HEIGHTFIELD:F}=mt.types;switch(T.type){case S:{w=new Xt(f,l);break}case U:{w=new Xt(g,l);break}case z:{w=new Xt(v,l);break}case C:{const W=new ma(T.radiusTop,T.radiusBottom,T.height,T.numSegments);w=new Xt(W,l),T.geometryId=W.id;break}case I:{const W=m(T);w=new Xt(W,l),T.geometryId=W.id;break}case N:{const W=p(T);w=new Xt(W,l),T.geometryId=W.id;break}case F:{const W=_(T);w=new Xt(W,l),T.geometryId=W.id;break}}return o.add(w),w}function x(T,w){const{SPHERE:S,BOX:U,PLANE:z,CYLINDER:C,CONVEXPOLYHEDRON:I,TRIMESH:N,HEIGHTFIELD:F}=mt.types;switch(w.type){case S:{const{radius:W}=w;T.scale.set(W*i,W*i,W*i);break}case U:{T.scale.copy(w.halfExtents),T.scale.multiplyScalar(2*i);break}case z:break;case C:{T.scale.set(1*i,1*i,1*i);break}case I:{T.scale.set(1*i,1*i,1*i);break}case N:{T.scale.copy(w.scale).multiplyScalar(i);break}case F:{T.scale.set(1*i,1*i,1*i);break}}}function M(T,w){if(!T)return!1;const{geometry:S}=T;return S instanceof Hn&&w.type===mt.types.SPHERE||S instanceof Gn&&w.type===mt.types.BOX||S instanceof Ls&&w.type===mt.types.PLANE||S.id===w.geometryId&&w.type===mt.types.CYLINDER||S.id===w.geometryId&&w.type===mt.types.CONVEXPOLYHEDRON||S.id===w.geometryId&&w.type===mt.types.TRIMESH||S.id===w.geometryId&&w.type===mt.types.HEIGHTFIELD}function E(T,w){let S=a[T],U=!1;return M(S,w)||(S&&o.remove(S),a[T]=S=y(w),U=!0),x(S,w),U}function R(){const T=a,w=c,S=u;let U=0;for(const z of t.bodies)for(let C=0;C!==z.shapes.length;C++){const I=z.shapes[C],N=E(U,I),F=T[U];F&&(z.quaternion.vmult(z.shapeOffsets[C],w),z.position.vadd(w,w),z.quaternion.mult(z.shapeOrientations[C],S),F.position.copy(w),F.quaternion.copy(S),N&&s instanceof Function&&s(z,F,I),!N&&r instanceof Function&&r(z,F,I)),U++}for(let z=U;z<T.length;z++){const C=T[z];C&&o.remove(C)}T.length=U}return{update:R}}class iy{constructor(t,e,n){this.mesh=this.makeMesh(t,e,n),this.body=this.makeBody(t,e)}update(){}makeMesh(t,e,n){var i=new Qt,s,r,a;return s=new Hn(e,32,32),r=new vn({vertexShader:document.getElementById("blackHoleVertexShader").textContent,fragmentShader:document.getElementById("blackHoleFragmentShader").textContent,blending:Er,side:Me}),a=new Xt(s,r),a.scale.set(1.1,1.1,1.1),a.position.copy(t),i.add(a),s=new Hn(e,32,32),r=new Nr({color:n}),a=new Xt(s,r),i.add(a),a.position.copy(t),i}makeBody(t,e){const n=new Vr(e),i=new vt({mass:0});return i.addShape(n),i.position.copy(t),i.collisionFilterGroup=4,i}}class sy{constructor(t,e){this.mesh=this.makeMesh(t,e),this.body=this.makeBody(t)}update(){this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion)}makeMesh(t,e){const i=new Qt,s=new Xt(new Ur(10,0),new Oe({color:e}));s.scale.set(.4,.4,.4),i.add(s);const r=new Xt(s.geometry,new vn({vertexShader:document.getElementById("blackHoleVertexShader").textContent,fragmentShader:document.getElementById("blackHoleFragmentShader").textContent,blending:Er,side:Me}));return r.scale.set(.9,.9,.9),i.add(r),i.position.copy(t),i}makeBody(t){const e=new vt({mass:1,position:t,shape:new Us(new b(5,5,5))});return e.collisionFilterGroup=3,e.angularFactor.set(.1,.1,.1),e.linearFactor.set(.5,0,.5),e.position.copy(t),e}}class ry{constructor(){this.mesh=this.makeMesh(),this.body=this.makeBody()}update(){this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion)}makeMesh(){return new Xt(new Hn(.7,32,32),new Oe({color:10354680}))}makeBody(){const t=new vt({mass:1,shape:new Vr(.7)});return t.collisionFilterGroup=6,t.collisionFilterMask=7,t.position.set(0,9e3,0),t}}var Ma={};document.addEventListener("keydown",oy,!1);document.addEventListener("keyup",ay,!1);function oy(o){Ma[o.keyCode]=!0}function ay(o){Ma[o.keyCode]=!1}window.addEventListener("resize",Uh);function Uh(){kn.aspect=window.innerWidth/window.innerHeight,kn.updateProjectionMatrix(),On.setSize(window.innerWidth,window.innerHeight)}let On,kn,Be,Oh,li,tn={},pe,sn,Bh=50;const ly=800,Lr=[],kh=100;var cy=0;const Rr=[],Vh=50;var hy=0,Uo=0;const Xe={sound:!1,soundVolume:.5,spawnCooldown:50,playerSpeed:5,playerMaxSpeed:50,playerShootCooldown:5};function br(o,t){t&&(tn[t]=o),Be.add(o.system),sn.addBody(o.body)}function uy(){const o=window.innerWidth,t=window.innerHeight;Be=new r0;const e=new xh().load("./background.jpg");Be.background=e,On=new ch({antialias:!0}),On.setPixelRatio(window.devicePixelRatio),On.setSize(o,t),On.localClippingEnabled=!0,document.querySelector("#manquisse").appendChild(On.domElement);let i=70;kn=new ke(i,o/t,1,5e3),kn.position.set(0,20,0);const s=new Y0("rgb(255, 255, 255)",.25);Be.add(s);const r=new j0("rgb(255, 255, 255)",.8);r.position.set(0,1e3,1e4),Be.add(r),new ev(1e3),sn=new bx({gravity:new b(0,0,0)}),sn.addEventListener("collide",Uc),new ny(Be,sn);const a=new K0;kn.add(a),li=new Q0(a),new $0().load("./around_the_world.mp3",function(c){li.setBuffer(c),li.setLoop(!0),li.setVolume(.5)});for(let c=0;c<kh;c++){const h=new sy(new D(5*c,-1e4,0),11739776);Lr.push(h),Be.add(h.mesh),sn.addBody(h.body),h.body.addEventListener("collide",Uc),h.body.sleep()}for(let c=0;c<Vh;c++){const h=new ry(new D(5*c,-9e4,0),11739776);Rr.push(h),Be.add(h.mesh),sn.addBody(h.body),h.body.addEventListener("collide",by),h.body.sleep()}window.addEventListener("resize",()=>Uh(),!1)}function dy(){let o,t;o=new Gr,o.scale.setScalar(45e4),t=new D;const e={turbidity:7,rayleigh:3.5,mieCoefficient:.035,mieDirectionalG:.84,elevation:0,azimuth:0,exposure:.0536},n=o.material.uniforms;n.turbidity.value=e.turbidity,n.rayleigh.value=e.rayleigh,n.mieCoefficient.value=e.mieCoefficient,n.mieDirectionalG.value=e.mieDirectionalG;const i=rl.degToRad(90-e.elevation),s=rl.degToRad(e.azimuth);t.setFromSphericalCoords(1,i,s),n.sunPosition.value.copy(t),On.toneMappingExposure=e.exposure,Be.add(o)}function Oo(o,t,e,n){const i=new ms;for(let d=0;d<o;d++){const u=t,f=e,g=Math.random()*2*Math.PI,v=Math.sqrt(Math.random()*(f*f-u*u)+u*u),m=Math.floor(Math.random()*6)+6,p=Math.cos(g)*v,_=Math.random()*8-4,y=Math.sin(g)*v;var s=Math.floor(Math.random()*256),r=s.toString(16);r.length<2&&(r="0"+r);var a="#"+r+r+r,l,c,h;l=new Ur(m,0),c=new Oe({color:new Yt(a)}),h=new Xt(l,c),h.receiveShadow=!0,h.position.set(p,_,y),h.rotation.set(Math.random(),Math.random(),Math.random()),i.add(h)}return i.position.set(n.x,n.y,n.z),Be.add(i),i}function fy(o){const t=new b(0,0,0),e=o,n=50,i=2*Math.PI/n;for(let h=0;h<n;h++){var s=h*i,r=t.x+e*Math.cos(s),a=t.z+e*Math.sin(s),l=new vt({mass:0,position:new b(r,0,a),shape:new Us(new b(50,4,4))}),c=t.vsub(l.position);l.quaternion.setFromVectors(new b(0,0,1),c),l.collisionFilterGroup=4,sn.addBody(l)}}function py(){var o=Oo(1e3,810,910,new D(0,0,0));tn.ring1=o;var t=Oo(500,420,550,new D(0,-50,0));tn.ring2=t;var e=Oo(300,140,260,new D(0,-70,0));tn.ring3=e;var n=new us(50,new D(475,0,475),11184895,4e-4,"./texture/jup0vss1.jpg");n.system.rotateX(-Math.PI/16),n.addParticleRing(70,100,Math.PI/6,1500,16777215),n.addParticleRing(80,90,Math.PI/6,3200,16777215);var i=new us(10,new D(-20,0,-80),16773120,.002,"./texture/earth.jpg");i.system.rotateZ(-.2),sn.addBody(i.body),n.addMoon(i),br(n,"demeter");var s=new us(900,new D(-3333,0,3333),8912896,-3e-4,"./texture/jup3vss2.jpg");s.system.rotateX(-Math.PI/13),s.system.rotateZ(-Math.PI/8),br(s,"presi");var r=new us(1200,new D(-3e3,0,-3e3),1122867,-4e-4,"./texture/plu0rss1.jpg");r.system.rotateX(3*Math.PI/13),r.system.rotateZ(-2*Math.PI/10),br(r,"zaza");var a=new us(70,new D(480,0,-480),4095,-6e-4,"./texture/orange.jpg");a.addParticleRing(115,125,Math.PI/6,1500,6710886),a.addParticleRing(100,140,Math.PI/6,4e3,11154244),a.addParticleRing(100,140,Math.PI/6,4e3,16777215),a.system.rotateX(-Math.PI/6),a.system.rotateY(2*Math.PI/6),br(a,"pailance");var l=new iy(new D(0,0,0),80,11739776);Be.add(l.mesh),sn.addBody(l.body)}function my(){pe=new ey,Be.add(pe.mesh),sn.addBody(pe.body),pe.body.position.set(30,0,-200),pe.body.addEventListener("collide",wy)}function gy(){const o=new mi,t=new D(0,10,-25);t.applyQuaternion(pe.mesh.getWorldQuaternion(o)),t.add(pe.mesh.position);const e=new D(0,5,10);e.applyQuaternion(pe.mesh.getWorldQuaternion(o)),e.add(pe.mesh.position);const n=.17;kn.position.lerp(t,n),kn.lookAt(e)}function zi(){Xe.sound?li.play():li.pause(),li.setVolume(Xe.soundVolume),Bh=Xe.spawnCooldown,pe.speed=Xe.playerSpeed,pe.maxSpeed=Xe.playerMaxSpeed,pe.shootDelay=Xe.playerShootCooldown}function vy(){const o=new Zx,t=o.addFolder("Configuration");t.add(Xe,"sound",!1).onChange(zi),t.add(Xe,"soundVolume",0,1).onChange(zi),t.add(Xe,"spawnCooldown",10,1e4).onChange(zi);const e=o.addFolder("Player");e.add(Xe,"playerSpeed",0,20).onChange(zi),e.add(Xe,"playerMaxSpeed",30,690).onChange(zi),e.add(Xe,"playerShootCooldown",2,100).onChange(zi),t.open(),e.open();const n=document.createElement("div");n.className="guiElement info";const i=document.createElement("p");i.className="txt",n.appendChild(i),document.body.appendChild(n),Oh=n;const s=document.createElement("div");s.className="controlsInfo info";const r=document.createElement("p");r.className="txt",r.textContent="WASD - move",s.appendChild(r);const a=document.createElement("p");a.className="txt",a.textContent="Space - shoot",s.appendChild(a);const l=document.createElement("p");l.className="txt",l.textContent="Shift - boost",s.appendChild(l),document.body.appendChild(s)}function _y(){Oh.children[0].textContent="Points "+pe.points.toString()+" - "+pe.health.toString()+" Health"}const xy=1/60;function Gh(){tn.demeter.update(),tn.presi.update(),tn.zaza.update(),tn.pailance.update(),tn.ring1.rotateY(-3e-4),tn.ring2.rotateY(3e-5),tn.ring3.rotateY(-3e-4);for(let o=0;o<Lr.length;o++)Lr[o].update();for(let o=0;o<Rr.length;o++)Rr[o].update();sn.step(xy),On.render(Be,kn),_y(),gy(),yy(),window.requestAnimationFrame(Gh)}function yy(){if(pe.update(Ma,Uo)==!0){const s=Rr[hy++%Vh];s.body.wakeUp(),s.body.force.set(0,0,0),s.body.torque.set(0,0,0);const r=5,a=new D(0,0,1);a.applyQuaternion(pe.mesh.quaternion);const l=pe.mesh.position.clone().add(a.multiplyScalar(r));s.body.position.copy(l);const c=pe.body.velocity.length(),h=c>50?c*1.2:60;var o=a.multiplyScalar(h);s.body.applyLocalImpulse(o)}if(Uo%Bh==0){var t=Math.random()*2*Math.PI,e=Math.random()*1+79,n=e*Math.cos(t),i=e*Math.sin(t);const s=Lr[cy++%kh];s.body.position.set(n,0,i),s.body.wakeUp()}Uo++}function wy(o){var t=o.body,e=o.target;(t.collisionFilterGroup==2&&e.collisionFilterGroup==3||e.collisionFilterGroup==2&&t.collisionFilterGroup==3)&&pe.hit()}function Uc(o){var t=o.body,e=o.target;if(t.collisionFilterGroup==3&&e.collisionFilterGroup!=4||e.collisionFilterGroup==3&&t.collisionFilterGroup!=4){var n,i;t.collisionFilterGroup==3?(n=t,i=e):(i=t,n=e),i.collisionFilterGroup!=2&&(n.sleep(),n.position.set(0,1e4,0),i.collisionFilterGroup==6&&pe.points++)}}function by(o){var t;if(!(o.body.collisionFilterGroup==2||o.target.collisionFilterGroup==2)){if(o.body.collisionFilterGroup==6)t=o.body;else if(o.target.collisionFilterGroup==6)t=o.target;else return;t.sleep(),t.position.set(0,1e4,0)}}uy();dy();py();fy(ly);my();vy();Gh();
