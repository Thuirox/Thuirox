var id=Object.defineProperty;var sd=(i,e,t)=>e in i?id(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var k=(i,e,t)=>(sd(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const so="154",rd=0,ea=1,od=2,Il=1,Dl=2,pn=3,Kt=0,Rt=1,Ft=2,Cn=0,Ti=1,ta=2,na=3,ia=4,ad=5,bi=100,ld=101,cd=102,sa=103,ra=104,ud=200,dd=201,hd=202,fd=203,Ul=204,Ol=205,pd=206,md=207,gd=208,_d=209,vd=210,xd=0,wd=1,Md=2,jr=3,yd=4,Sd=5,bd=6,Ed=7,ro=0,Td=1,Ad=2,vn=0,Cd=1,Rd=2,Pd=3,Ld=4,Id=5,Nl=300,Pi=301,Li=302,Yr=303,$r=304,Zs=306,Kr=1e3,Yt=1001,Zr=1002,At=1003,oa=1004,hr=1005,Ct=1006,Dd=1007,ss=1008,Rn=1009,Ud=1010,Od=1011,oo=1012,Fl=1013,En=1014,Tn=1015,rs=1016,Bl=1017,zl=1018,Vn=1020,Nd=1021,$t=1023,Fd=1024,Bd=1025,Wn=1026,Ii=1027,zd=1028,kl=1029,kd=1030,Hl=1031,Gl=1033,fr=33776,pr=33777,mr=33778,gr=33779,aa=35840,la=35841,ca=35842,ua=35843,Hd=36196,da=37492,ha=37496,fa=37808,pa=37809,ma=37810,ga=37811,_a=37812,va=37813,xa=37814,wa=37815,Ma=37816,ya=37817,Sa=37818,ba=37819,Ea=37820,Ta=37821,_r=36492,Gd=36283,Aa=36284,Ca=36285,Ra=36286,Vl=3e3,Xn=3001,Vd=3200,Wd=3201,Wl=0,Xd=1,qn="",He="srgb",Zt="srgb-linear",Xl="display-p3",vr=7680,qd=519,jd=512,Yd=513,$d=514,Kd=515,Zd=516,Jd=517,Qd=518,eh=519,Pa=35044,La="300 es",Jr=1035,_n=2e3,Ys=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ia=1234567;const Ai=Math.PI/180,os=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function ao(i,e){return(i%e+e)%e}function th(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function nh(i,e,t){return i!==e?(t-i)/(e-i):0}function ns(i,e,t){return(1-t)*i+t*e}function ih(i,e,t,n){return ns(i,e,1-Math.exp(-t*n))}function sh(i,e=1){return e-Math.abs(ao(i,e*2)-e)}function rh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function oh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ah(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lh(i,e){return i+Math.random()*(e-i)}function ch(i){return i*(.5-Math.random())}function uh(i){i!==void 0&&(Ia=i);let e=Ia+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dh(i){return i*Ai}function hh(i){return i*os}function Qr(i){return(i&i-1)===0&&i!==0}function fh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $s(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ph(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),d=a(t/2),u=r((e+n)/2),h=a((e+n)/2),p=r((e-n)/2),m=a((e-n)/2),x=r((n-e)/2),w=a((n-e)/2);switch(s){case"XYX":i.set(o*h,d*p,d*m,o*u);break;case"YZY":i.set(d*m,o*h,d*p,o*u);break;case"ZXZ":i.set(d*p,d*m,o*h,o*u);break;case"XZX":i.set(o*h,d*w,d*x,o*u);break;case"YXY":i.set(d*x,o*h,d*w,o*u);break;case"ZYZ":i.set(d*w,d*x,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ms={DEG2RAD:Ai,RAD2DEG:os,generateUUID:Ni,clamp:bt,euclideanModulo:ao,mapLinear:th,inverseLerp:nh,lerp:ns,damp:ih,pingpong:sh,smoothstep:rh,smootherstep:oh,randInt:ah,randFloat:lh,randFloatSpread:ch,seededRandom:uh,degToRad:dh,radToDeg:hh,isPowerOfTwo:Qr,ceilPowerOfTwo:fh,floorPowerOfTwo:$s,setQuaternionFromProperEuler:ph,normalize:Lt,denormalize:es};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,s,r,a,o,d,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,d,u)}set(e,t,n,s,r,a,o,d,u){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=d,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],d=n[6],u=n[1],h=n[4],p=n[7],m=n[2],x=n[5],w=n[8],g=s[0],_=s[3],f=s[6],R=s[1],M=s[4],E=s[7],P=s[2],D=s[5],U=s[8];return r[0]=a*g+o*R+d*P,r[3]=a*_+o*M+d*D,r[6]=a*f+o*E+d*U,r[1]=u*g+h*R+p*P,r[4]=u*_+h*M+p*D,r[7]=u*f+h*E+p*U,r[2]=m*g+x*R+w*P,r[5]=m*_+x*M+w*D,r[8]=m*f+x*E+w*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],d=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*r*h+n*o*d+s*r*u-s*a*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],d=e[6],u=e[7],h=e[8],p=h*a-o*u,m=o*d-h*r,x=u*r-a*d,w=t*p+n*m+s*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/w;return e[0]=p*g,e[1]=(s*u-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=m*g,e[4]=(h*t-s*d)*g,e[5]=(s*r-o*t)*g,e[6]=x*g,e[7]=(n*d-u*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const d=Math.cos(r),u=Math.sin(r);return this.set(n*d,n*u,-n*(d*a+u*o)+a+e,-s*u,s*d,-s*(-u*a+d*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xr.makeScale(e,t)),this}rotate(e){return this.premultiply(xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new Ge;function ql(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Da={};function is(i){i in Da||(Da[i]=!0,console.warn(i))}function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const mh=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gh=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function _h(i){return i.convertSRGBToLinear().applyMatrix3(gh)}function vh(i){return i.applyMatrix3(mh).convertLinearToSRGB()}const xh={[Zt]:i=>i,[He]:i=>i.convertSRGBToLinear(),[Xl]:_h},wh={[Zt]:i=>i,[He]:i=>i.convertLinearToSRGB(),[Xl]:vh},Vt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Zt},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=xh[e],s=wh[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let oi;class jl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=as("canvas")),oi.width=e.width,oi.height=e.height;const n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mh=0;class Yl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mr(s[a].image)):r.push(Mr(s[a]))}else r=Mr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Mr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class Pt extends Oi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Yt,s=Yt,r=Ct,a=ss,o=$t,d=Rn,u=Pt.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Ni(),this.name="",this.source=new Yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=d,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Xn?He:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===He?Xn:Vl}set encoding(e){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xn?He:qn}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Nl;Pt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const d=e.elements,u=d[0],h=d[4],p=d[8],m=d[1],x=d[5],w=d[9],g=d[2],_=d[6],f=d[10];if(Math.abs(h-m)<.01&&Math.abs(p-g)<.01&&Math.abs(w-_)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+g)<.1&&Math.abs(w+_)<.1&&Math.abs(u+x+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,E=(x+1)/2,P=(f+1)/2,D=(h+m)/4,U=(p+g)/4,J=(w+_)/4;return M>E&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=D/n,r=U/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=D/s,r=J/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=U/r,s=J/r),this.set(n,s,r,t),this}let R=Math.sqrt((_-w)*(_-w)+(p-g)*(p-g)+(m-h)*(m-h));return Math.abs(R)<.001&&(R=1),this.x=(_-w)/R,this.y=(p-g)/R,this.z=(m-h)/R,this.w=Math.acos((u+x+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $n extends Oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xn?He:qn),this.texture=new Pt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $l extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sh extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let d=n[s+0],u=n[s+1],h=n[s+2],p=n[s+3];const m=r[a+0],x=r[a+1],w=r[a+2],g=r[a+3];if(o===0){e[t+0]=d,e[t+1]=u,e[t+2]=h,e[t+3]=p;return}if(o===1){e[t+0]=m,e[t+1]=x,e[t+2]=w,e[t+3]=g;return}if(p!==g||d!==m||u!==x||h!==w){let _=1-o;const f=d*m+u*x+h*w+p*g,R=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const P=Math.sqrt(M),D=Math.atan2(P,f*R);_=Math.sin(_*D)/P,o=Math.sin(o*D)/P}const E=o*R;if(d=d*_+m*E,u=u*_+x*E,h=h*_+w*E,p=p*_+g*E,_===1-o){const P=1/Math.sqrt(d*d+u*u+h*h+p*p);d*=P,u*=P,h*=P,p*=P}}e[t]=d,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],d=n[s+1],u=n[s+2],h=n[s+3],p=r[a],m=r[a+1],x=r[a+2],w=r[a+3];return e[t]=o*w+h*p+d*x-u*m,e[t+1]=d*w+h*m+u*p-o*x,e[t+2]=u*w+h*x+o*m-d*p,e[t+3]=h*w-o*p-d*m-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,d=Math.sin,u=o(n/2),h=o(s/2),p=o(r/2),m=d(n/2),x=d(s/2),w=d(r/2);switch(a){case"XYZ":this._x=m*h*p+u*x*w,this._y=u*x*p-m*h*w,this._z=u*h*w+m*x*p,this._w=u*h*p-m*x*w;break;case"YXZ":this._x=m*h*p+u*x*w,this._y=u*x*p-m*h*w,this._z=u*h*w-m*x*p,this._w=u*h*p+m*x*w;break;case"ZXY":this._x=m*h*p-u*x*w,this._y=u*x*p+m*h*w,this._z=u*h*w+m*x*p,this._w=u*h*p-m*x*w;break;case"ZYX":this._x=m*h*p-u*x*w,this._y=u*x*p+m*h*w,this._z=u*h*w-m*x*p,this._w=u*h*p+m*x*w;break;case"YZX":this._x=m*h*p+u*x*w,this._y=u*x*p+m*h*w,this._z=u*h*w-m*x*p,this._w=u*h*p-m*x*w;break;case"XZY":this._x=m*h*p-u*x*w,this._y=u*x*p-m*h*w,this._z=u*h*w+m*x*p,this._w=u*h*p+m*x*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],d=t[9],u=t[2],h=t[6],p=t[10],m=n+o+p;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(h-d)*x,this._y=(r-u)*x,this._z=(a-s)*x}else if(n>o&&n>p){const x=2*Math.sqrt(1+n-o-p);this._w=(h-d)/x,this._x=.25*x,this._y=(s+a)/x,this._z=(r+u)/x}else if(o>p){const x=2*Math.sqrt(1+o-n-p);this._w=(r-u)/x,this._x=(s+a)/x,this._y=.25*x,this._z=(d+h)/x}else{const x=2*Math.sqrt(1+p-n-o);this._w=(a-s)/x,this._x=(r+u)/x,this._y=(d+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,d=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-r*d,this._y=s*h+a*d+r*o-n*u,this._z=r*h+a*u+n*d-s*o,this._w=a*h-n*o-s*d-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const d=1-o*o;if(d<=Number.EPSILON){const x=1-t;return this._w=x*a+t*this._w,this._x=x*n+t*this._x,this._y=x*s+t*this._y,this._z=x*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(d),h=Math.atan2(u,o),p=Math.sin((1-t)*h)/u,m=Math.sin(t*h)/u;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=s*p+this._y*m,this._z=r*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ua.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,d=e.w,u=d*t+a*s-o*n,h=d*n+o*t-r*s,p=d*s+r*n-a*t,m=-r*t-a*n-o*s;return this.x=u*d+m*-r+h*-o-p*-a,this.y=h*d+m*-a+p*-r-u*-o,this.z=p*d+m*-o+u*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,d=t.z;return this.x=s*d-r*o,this.y=r*a-n*d,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yr.copy(this).projectOnVector(e),this.sub(yr)}reflect(e){return this.sub(yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new C,Ua=new sn;class us{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ai.copy(e.boundingBox),ai.applyMatrix4(e.matrixWorld),this.union(ai);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let a=0,o=r.count;a<o;a++)cn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(cn)}else s.boundingBox===null&&s.computeBoundingBox(),ai.copy(s.boundingBox),ai.applyMatrix4(e.matrixWorld),this.union(ai)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),ys.subVectors(this.max,qi),li.subVectors(e.a,qi),ci.subVectors(e.b,qi),ui.subVectors(e.c,qi),Mn.subVectors(ci,li),yn.subVectors(ui,ci),In.subVectors(li,ui);let t=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-In.z,In.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,In.z,0,-In.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-In.y,In.x,0];return!Sr(t,li,ci,ui,ys)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,li,ci,ui,ys))?!1:(Ss.crossVectors(Mn,yn),t=[Ss.x,Ss.y,Ss.z],Sr(t,li,ci,ui,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new C,new C,new C,new C,new C,new C,new C,new C],cn=new C,ai=new us,li=new C,ci=new C,ui=new C,Mn=new C,yn=new C,In=new C,qi=new C,ys=new C,Ss=new C,Dn=new C;function Sr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Dn.fromArray(i,r);const o=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),d=e.dot(Dn),u=t.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(d,u,h),Math.min(d,u,h))>o)return!1}return!0}const bh=new us,ji=new C,br=new C;class Js{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(br)),this.expandByPoint(ji.copy(e.center).sub(br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new C,Er=new C,bs=new C,Sn=new C,Tr=new C,Es=new C,Ar=new C;class lo{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Er.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Er);const r=e.distanceTo(t)*.5,a=-this.direction.dot(bs),o=Sn.dot(this.direction),d=-Sn.dot(bs),u=Sn.lengthSq(),h=Math.abs(1-a*a);let p,m,x,w;if(h>0)if(p=a*d-o,m=a*o-d,w=r*h,p>=0)if(m>=-w)if(m<=w){const g=1/h;p*=g,m*=g,x=p*(p+a*m+2*o)+m*(a*p+m+2*d)+u}else m=r,p=Math.max(0,-(a*m+o)),x=-p*p+m*(m+2*d)+u;else m=-r,p=Math.max(0,-(a*m+o)),x=-p*p+m*(m+2*d)+u;else m<=-w?(p=Math.max(0,-(-a*r+o)),m=p>0?-r:Math.min(Math.max(-r,-d),r),x=-p*p+m*(m+2*d)+u):m<=w?(p=0,m=Math.min(Math.max(-r,-d),r),x=m*(m+2*d)+u):(p=Math.max(0,-(a*r+o)),m=p>0?r:Math.min(Math.max(-r,-d),r),x=-p*p+m*(m+2*d)+u);else m=a>0?-r:r,p=Math.max(0,-(a*m+o)),x=-p*p+m*(m+2*d)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Er).addScaledVector(bs,m),x}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),s=un.dot(un)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,d=n+a;return d<0?null:o<0?this.at(d,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,d;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),h>=0?(r=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-m.z)*p,d=(e.max.z-m.z)*p):(o=(e.max.z-m.z)*p,d=(e.min.z-m.z)*p),n>d||o>s)||((o>n||n!==n)&&(n=o),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,s,r){Tr.subVectors(t,e),Es.subVectors(n,e),Ar.crossVectors(Tr,Es);let a=this.direction.dot(Ar),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const d=o*this.direction.dot(Es.crossVectors(Sn,Es));if(d<0)return null;const u=o*this.direction.dot(Tr.cross(Sn));if(u<0||d+u>a)return null;const h=-o*Sn.dot(Ar);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,a,o,d,u,h,p,m,x,w,g,_){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,d,u,h,p,m,x,w,g,_)}set(e,t,n,s,r,a,o,d,u,h,p,m,x,w,g,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=d,f[2]=u,f[6]=h,f[10]=p,f[14]=m,f[3]=x,f[7]=w,f[11]=g,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/di.setFromMatrixColumn(e,0).length(),r=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),d=Math.cos(s),u=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const m=a*h,x=a*p,w=o*h,g=o*p;t[0]=d*h,t[4]=-d*p,t[8]=u,t[1]=x+w*u,t[5]=m-g*u,t[9]=-o*d,t[2]=g-m*u,t[6]=w+x*u,t[10]=a*d}else if(e.order==="YXZ"){const m=d*h,x=d*p,w=u*h,g=u*p;t[0]=m+g*o,t[4]=w*o-x,t[8]=a*u,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=x*o-w,t[6]=g+m*o,t[10]=a*d}else if(e.order==="ZXY"){const m=d*h,x=d*p,w=u*h,g=u*p;t[0]=m-g*o,t[4]=-a*p,t[8]=w+x*o,t[1]=x+w*o,t[5]=a*h,t[9]=g-m*o,t[2]=-a*u,t[6]=o,t[10]=a*d}else if(e.order==="ZYX"){const m=a*h,x=a*p,w=o*h,g=o*p;t[0]=d*h,t[4]=w*u-x,t[8]=m*u+g,t[1]=d*p,t[5]=g*u+m,t[9]=x*u-w,t[2]=-u,t[6]=o*d,t[10]=a*d}else if(e.order==="YZX"){const m=a*d,x=a*u,w=o*d,g=o*u;t[0]=d*h,t[4]=g-m*p,t[8]=w*p+x,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=x*p+w,t[10]=m-g*p}else if(e.order==="XZY"){const m=a*d,x=a*u,w=o*d,g=o*u;t[0]=d*h,t[4]=-p,t[8]=u*h,t[1]=m*p+g,t[5]=a*h,t[9]=x*p-w,t[2]=w*p-x,t[6]=o*h,t[10]=g*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eh,e,Th)}lookAt(e,t,n){const s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),bn.crossVectors(n,Ut),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),bn.crossVectors(n,Ut)),bn.normalize(),Ts.crossVectors(Ut,bn),s[0]=bn.x,s[4]=Ts.x,s[8]=Ut.x,s[1]=bn.y,s[5]=Ts.y,s[9]=Ut.y,s[2]=bn.z,s[6]=Ts.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],d=n[8],u=n[12],h=n[1],p=n[5],m=n[9],x=n[13],w=n[2],g=n[6],_=n[10],f=n[14],R=n[3],M=n[7],E=n[11],P=n[15],D=s[0],U=s[4],J=s[8],b=s[12],L=s[1],te=s[5],se=s[9],B=s[13],X=s[2],V=s[6],$=s[10],K=s[14],Q=s[3],oe=s[7],ee=s[11],H=s[15];return r[0]=a*D+o*L+d*X+u*Q,r[4]=a*U+o*te+d*V+u*oe,r[8]=a*J+o*se+d*$+u*ee,r[12]=a*b+o*B+d*K+u*H,r[1]=h*D+p*L+m*X+x*Q,r[5]=h*U+p*te+m*V+x*oe,r[9]=h*J+p*se+m*$+x*ee,r[13]=h*b+p*B+m*K+x*H,r[2]=w*D+g*L+_*X+f*Q,r[6]=w*U+g*te+_*V+f*oe,r[10]=w*J+g*se+_*$+f*ee,r[14]=w*b+g*B+_*K+f*H,r[3]=R*D+M*L+E*X+P*Q,r[7]=R*U+M*te+E*V+P*oe,r[11]=R*J+M*se+E*$+P*ee,r[15]=R*b+M*B+E*K+P*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],d=e[9],u=e[13],h=e[2],p=e[6],m=e[10],x=e[14],w=e[3],g=e[7],_=e[11],f=e[15];return w*(+r*d*p-s*u*p-r*o*m+n*u*m+s*o*x-n*d*x)+g*(+t*d*x-t*u*m+r*a*m-s*a*x+s*u*h-r*d*h)+_*(+t*u*p-t*o*x-r*a*p+n*a*x+r*o*h-n*u*h)+f*(-s*o*h-t*d*p+t*o*m+s*a*p-n*a*m+n*d*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],d=e[6],u=e[7],h=e[8],p=e[9],m=e[10],x=e[11],w=e[12],g=e[13],_=e[14],f=e[15],R=p*_*u-g*m*u+g*d*x-o*_*x-p*d*f+o*m*f,M=w*m*u-h*_*u-w*d*x+a*_*x+h*d*f-a*m*f,E=h*g*u-w*p*u+w*o*x-a*g*x-h*o*f+a*p*f,P=w*p*d-h*g*d-w*o*m+a*g*m+h*o*_-a*p*_,D=t*R+n*M+s*E+r*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/D;return e[0]=R*U,e[1]=(g*m*r-p*_*r-g*s*x+n*_*x+p*s*f-n*m*f)*U,e[2]=(o*_*r-g*d*r+g*s*u-n*_*u-o*s*f+n*d*f)*U,e[3]=(p*d*r-o*m*r-p*s*u+n*m*u+o*s*x-n*d*x)*U,e[4]=M*U,e[5]=(h*_*r-w*m*r+w*s*x-t*_*x-h*s*f+t*m*f)*U,e[6]=(w*d*r-a*_*r-w*s*u+t*_*u+a*s*f-t*d*f)*U,e[7]=(a*m*r-h*d*r+h*s*u-t*m*u-a*s*x+t*d*x)*U,e[8]=E*U,e[9]=(w*p*r-h*g*r-w*n*x+t*g*x+h*n*f-t*p*f)*U,e[10]=(a*g*r-w*o*r+w*n*u-t*g*u-a*n*f+t*o*f)*U,e[11]=(h*o*r-a*p*r-h*n*u+t*p*u+a*n*x-t*o*x)*U,e[12]=P*U,e[13]=(h*g*s-w*p*s+w*n*m-t*g*m-h*n*_+t*p*_)*U,e[14]=(w*o*s-a*g*s-w*n*d+t*g*d+a*n*_-t*o*_)*U,e[15]=(a*p*s-h*o*s+h*n*d-t*p*d-a*n*m+t*o*m)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,d=e.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*d,u*d+s*o,0,u*o+s*d,h*o+n,h*d-s*a,0,u*d-s*o,h*d+s*a,r*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,d=t._w,u=r+r,h=a+a,p=o+o,m=r*u,x=r*h,w=r*p,g=a*h,_=a*p,f=o*p,R=d*u,M=d*h,E=d*p,P=n.x,D=n.y,U=n.z;return s[0]=(1-(g+f))*P,s[1]=(x+E)*P,s[2]=(w-M)*P,s[3]=0,s[4]=(x-E)*D,s[5]=(1-(m+f))*D,s[6]=(_+R)*D,s[7]=0,s[8]=(w+M)*U,s[9]=(_-R)*U,s[10]=(1-(m+g))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=di.set(s[0],s[1],s[2]).length();const a=di.set(s[4],s[5],s[6]).length(),o=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xt.copy(this);const u=1/r,h=1/a,p=1/o;return Xt.elements[0]*=u,Xt.elements[1]*=u,Xt.elements[2]*=u,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=p,Xt.elements[9]*=p,Xt.elements[10]*=p,t.setFromRotationMatrix(Xt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=_n){const d=this.elements,u=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s);let x,w;if(o===_n)x=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===Ys)x=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return d[0]=u,d[4]=0,d[8]=p,d[12]=0,d[1]=0,d[5]=h,d[9]=m,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_n){const d=this.elements,u=1/(t-e),h=1/(n-s),p=1/(a-r),m=(t+e)*u,x=(n+s)*h;let w,g;if(o===_n)w=(a+r)*p,g=-2*p;else if(o===Ys)w=r*p,g=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return d[0]=2*u,d[4]=0,d[8]=0,d[12]=-m,d[1]=0,d[5]=2*h,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=g,d[14]=-w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new C,Xt=new ht,Eh=new C(0,0,0),Th=new C(1,1,1),bn=new C,Ts=new C,Ut=new C,Oa=new ht,Na=new sn;class ds{constructor(e=0,t=0,n=0,s=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],d=s[1],u=s[5],h=s[9],p=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(d,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(d,r));break;case"ZYX":this._y=Math.asin(-bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(d,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Na.setFromEuler(this),this.setFromQuaternion(Na,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ah=0;const Fa=new C,hi=new sn,dn=new ht,As=new C,Yi=new C,Ch=new C,Rh=new sn,Ba=new C(1,0,0),za=new C(0,1,0),ka=new C(0,0,1),Ph={type:"added"},Ha={type:"removed"};class ot extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new C,t=new ds,n=new sn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ge}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Ba,e)}rotateY(e){return this.rotateOnAxis(za,e)}rotateZ(e){return this.rotateOnAxis(ka,e)}translateOnAxis(e,t){return Fa.copy(e).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ba,e)}translateY(e){return this.translateOnAxis(za,e)}translateZ(e){return this.translateOnAxis(ka,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Yi,As,this.up):dn.lookAt(As,Yi,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(dn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ha)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ha)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,Ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,d){return o[d.uuid]===void 0&&(o[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const d=o.shapes;if(Array.isArray(d))for(let u=0,h=d.length;u<h;u++){const p=d[u];r(e.shapes,p)}else r(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let d=0,u=this.material.length;d<u;d++)o.push(r(e.materials,this.material[d]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const d=this.animations[o];s.animations.push(r(e.animations,d))}}if(t){const o=a(e.geometries),d=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),m=a(e.skeletons),x=a(e.animations),w=a(e.nodes);o.length>0&&(n.geometries=o),d.length>0&&(n.materials=d),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),w.length>0&&(n.nodes=w)}return n.object=s,n;function a(o){const d=[];for(const u in o){const h=o[u];delete h.metadata,d.push(h)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ot.DEFAULT_UP=new C(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new C,hn=new C,Cr=new C,fn=new C,fi=new C,pi=new C,Ga=new C,Rr=new C,Pr=new C,Lr=new C;let Cs=!1;class Wt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qt.subVectors(e,t),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qt.subVectors(s,t),hn.subVectors(n,t),Cr.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(hn),d=qt.dot(Cr),u=hn.dot(hn),h=hn.dot(Cr),p=a*u-o*o;if(p===0)return r.set(-2,-1,-1);const m=1/p,x=(u*d-o*h)*m,w=(a*h-o*d)*m;return r.set(1-x-w,w,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,s,r,a,o,d){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),this.getInterpolation(e,t,n,s,r,a,o,d)}static getInterpolation(e,t,n,s,r,a,o,d){return this.getBarycoord(e,t,n,s,fn),d.setScalar(0),d.addScaledVector(r,fn.x),d.addScaledVector(a,fn.y),d.addScaledVector(o,fn.z),d}static isFrontFacing(e,t,n,s){return qt.subVectors(n,t),hn.subVectors(e,t),qt.cross(hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),qt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;fi.subVectors(s,n),pi.subVectors(r,n),Rr.subVectors(e,n);const d=fi.dot(Rr),u=pi.dot(Rr);if(d<=0&&u<=0)return t.copy(n);Pr.subVectors(e,s);const h=fi.dot(Pr),p=pi.dot(Pr);if(h>=0&&p<=h)return t.copy(s);const m=d*p-h*u;if(m<=0&&d>=0&&h<=0)return a=d/(d-h),t.copy(n).addScaledVector(fi,a);Lr.subVectors(e,r);const x=fi.dot(Lr),w=pi.dot(Lr);if(w>=0&&x<=w)return t.copy(r);const g=x*u-d*w;if(g<=0&&u>=0&&w<=0)return o=u/(u-w),t.copy(n).addScaledVector(pi,o);const _=h*w-x*p;if(_<=0&&p-h>=0&&x-w>=0)return Ga.subVectors(r,s),o=(p-h)/(p-h+(x-w)),t.copy(s).addScaledVector(Ga,o);const f=1/(_+g+m);return a=g*f,o=m*f,t.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Lh=0;class Fi extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Ti,this.side=Kt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Ol,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Kt&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const d=r[o];delete d.metadata,a.push(d)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Ir(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Vt.workingColorSpace){if(e=ao(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ir(a,r,e+1/3),this.g=Ir(a,r,e),this.b=Ir(a,r,e-1/3)}return Vt.toWorkingColorSpace(this,s),this}setStyle(e,t=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){const n=Kl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Vt.fromWorkingColorSpace(St.copy(this),e),Math.round(bt(St.r*255,0,255))*65536+Math.round(bt(St.g*255,0,255))*256+Math.round(bt(St.b*255,0,255))}getHexString(e=He){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(St.copy(this),t);const n=St.r,s=St.g,r=St.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let d,u;const h=(o+a)/2;if(o===a)d=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case n:d=(s-r)/p+(s<r?6:0);break;case s:d=(r-n)/p+2;break;case r:d=(n-s)/p+4;break}d/=6}return e.h=d,e.s=u,e.l=h,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=He){Vt.fromWorkingColorSpace(St.copy(this),e);const t=St.r,n=St.g,s=St.b;return e!==He?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(Rs);const n=ns(jt.h,Rs.h,t),s=ns(jt.s,Rs.s,t),r=ns(jt.l,Rs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new $e;$e.NAMES=Kl;class Qs extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new C,Ps=new Xe;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pa,this.updateRange={offset:0,count:-1},this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Zl extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jl extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ih=0;const Gt=new ht,Dr=new ot,mi=new C,Ot=new us,$i=new us,vt=new C;class rn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ql(e)?Jl:Zl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Dr.lookAt(e),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ot.min,$i.min),Ot.expandByPoint(vt),vt.addVectors(Ot.max,$i.max),Ot.expandByPoint(vt)):(Ot.expandByPoint($i.min),Ot.expandByPoint($i.max))}Ot.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],d=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)vt.fromBufferAttribute(o,u),d&&(mi.fromBufferAttribute(e,u),vt.add(mi)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));const d=this.getAttribute("tangent").array,u=[],h=[];for(let L=0;L<o;L++)u[L]=new C,h[L]=new C;const p=new C,m=new C,x=new C,w=new Xe,g=new Xe,_=new Xe,f=new C,R=new C;function M(L,te,se){p.fromArray(s,L*3),m.fromArray(s,te*3),x.fromArray(s,se*3),w.fromArray(a,L*2),g.fromArray(a,te*2),_.fromArray(a,se*2),m.sub(p),x.sub(p),g.sub(w),_.sub(w);const B=1/(g.x*_.y-_.x*g.y);isFinite(B)&&(f.copy(m).multiplyScalar(_.y).addScaledVector(x,-g.y).multiplyScalar(B),R.copy(x).multiplyScalar(g.x).addScaledVector(m,-_.x).multiplyScalar(B),u[L].add(f),u[te].add(f),u[se].add(f),h[L].add(R),h[te].add(R),h[se].add(R))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let L=0,te=E.length;L<te;++L){const se=E[L],B=se.start,X=se.count;for(let V=B,$=B+X;V<$;V+=3)M(n[V+0],n[V+1],n[V+2])}const P=new C,D=new C,U=new C,J=new C;function b(L){U.fromArray(r,L*3),J.copy(U);const te=u[L];P.copy(te),P.sub(U.multiplyScalar(U.dot(te))).normalize(),D.crossVectors(J,te);const B=D.dot(h[L])<0?-1:1;d[L*4]=P.x,d[L*4+1]=P.y,d[L*4+2]=P.z,d[L*4+3]=B}for(let L=0,te=E.length;L<te;++L){const se=E[L],B=se.start,X=se.count;for(let V=B,$=B+X;V<$;V+=3)b(n[V+0]),b(n[V+1]),b(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);const s=new C,r=new C,a=new C,o=new C,d=new C,u=new C,h=new C,p=new C;if(e)for(let m=0,x=e.count;m<x;m+=3){const w=e.getX(m+0),g=e.getX(m+1),_=e.getX(m+2);s.fromBufferAttribute(t,w),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,w),d.fromBufferAttribute(n,g),u.fromBufferAttribute(n,_),o.add(h),d.add(h),u.add(h),n.setXYZ(w,o.x,o.y,o.z),n.setXYZ(g,d.x,d.y,d.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,d){const u=o.array,h=o.itemSize,p=o.normalized,m=new u.constructor(d.length*h);let x=0,w=0;for(let g=0,_=d.length;g<_;g++){o.isInterleavedBufferAttribute?x=d[g]*o.data.stride+o.offset:x=d[g]*h;for(let f=0;f<h;f++)m[w++]=u[x++]}return new nn(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,s=this.attributes;for(const o in s){const d=s[o],u=e(d,n);t.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const d=[],u=r[o];for(let h=0,p=u.length;h<p;h++){const m=u[h],x=e(m,n);d.push(x)}t.morphAttributes[o]=d}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,d=a.length;o<d;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const u in d)d[u]!==void 0&&(e[u]=d[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const u=n[d];e.data.attributes[d]=u.toJSON(e.data)}const s={};let r=!1;for(const d in this.morphAttributes){const u=this.morphAttributes[d],h=[];for(let p=0,m=u.length;p<m;p++){const x=u[p];h.push(x.toJSON(e.data))}h.length>0&&(s[d]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],p=r[u];for(let m=0,x=p.length;m<x;m++)h.push(p[m].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new ht,Un=new lo,Ls=new Js,Wa=new C,gi=new C,_i=new C,vi=new C,Ur=new C,Is=new C,Ds=new Xe,Us=new Xe,Os=new Xe,Xa=new C,qa=new C,ja=new C,Ns=new C,Fs=new C;class It extends ot{constructor(e=new rn,t=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Is.set(0,0,0);for(let d=0,u=r.length;d<u;d++){const h=o[d],p=r[d];h!==0&&(Ur.fromBufferAttribute(p,e),a?Is.addScaledVector(Ur,h):Is.addScaledVector(Ur.sub(t),h))}t.add(Is)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),Un.copy(e.ray).recast(e.near),!(Ls.containsPoint(Un.origin)===!1&&(Un.intersectSphere(Ls,Wa)===null||Un.origin.distanceToSquared(Wa)>(e.far-e.near)**2))&&(Va.copy(r).invert(),Un.copy(e.ray).applyMatrix4(Va),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,d=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,m=r.groups,x=r.drawRange;if(o!==null)if(Array.isArray(a))for(let w=0,g=m.length;w<g;w++){const _=m[w],f=a[_.materialIndex],R=Math.max(_.start,x.start),M=Math.min(o.count,Math.min(_.start+_.count,x.start+x.count));for(let E=R,P=M;E<P;E+=3){const D=o.getX(E),U=o.getX(E+1),J=o.getX(E+2);s=Bs(this,f,e,n,u,h,p,D,U,J),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const w=Math.max(0,x.start),g=Math.min(o.count,x.start+x.count);for(let _=w,f=g;_<f;_+=3){const R=o.getX(_),M=o.getX(_+1),E=o.getX(_+2);s=Bs(this,a,e,n,u,h,p,R,M,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(a))for(let w=0,g=m.length;w<g;w++){const _=m[w],f=a[_.materialIndex],R=Math.max(_.start,x.start),M=Math.min(d.count,Math.min(_.start+_.count,x.start+x.count));for(let E=R,P=M;E<P;E+=3){const D=E,U=E+1,J=E+2;s=Bs(this,f,e,n,u,h,p,D,U,J),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const w=Math.max(0,x.start),g=Math.min(d.count,x.start+x.count);for(let _=w,f=g;_<f;_+=3){const R=_,M=_+1,E=_+2;s=Bs(this,a,e,n,u,h,p,R,M,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function Dh(i,e,t,n,s,r,a,o){let d;if(e.side===Rt?d=n.intersectTriangle(a,r,s,!0,o):d=n.intersectTriangle(s,r,a,e.side===Kt,o),d===null)return null;Fs.copy(o),Fs.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Fs);return u<t.near||u>t.far?null:{distance:u,point:Fs.clone(),object:i}}function Bs(i,e,t,n,s,r,a,o,d,u){i.getVertexPosition(o,gi),i.getVertexPosition(d,_i),i.getVertexPosition(u,vi);const h=Dh(i,e,t,n,gi,_i,vi,Ns);if(h){s&&(Ds.fromBufferAttribute(s,o),Us.fromBufferAttribute(s,d),Os.fromBufferAttribute(s,u),h.uv=Wt.getInterpolation(Ns,gi,_i,vi,Ds,Us,Os,new Xe)),r&&(Ds.fromBufferAttribute(r,o),Us.fromBufferAttribute(r,d),Os.fromBufferAttribute(r,u),h.uv1=Wt.getInterpolation(Ns,gi,_i,vi,Ds,Us,Os,new Xe),h.uv2=h.uv1),a&&(Xa.fromBufferAttribute(a,o),qa.fromBufferAttribute(a,d),ja.fromBufferAttribute(a,u),h.normal=Wt.getInterpolation(Ns,gi,_i,vi,Xa,qa,ja,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:d,c:u,normal:new C,materialIndex:0};Wt.getNormal(gi,_i,vi,p.normal),h.face=p}return h}class Zn extends rn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const d=[],u=[],h=[],p=[];let m=0,x=0;w("z","y","x",-1,-1,n,t,e,a,r,0),w("z","y","x",1,-1,n,t,-e,a,r,1),w("x","z","y",1,1,e,n,t,s,a,2),w("x","z","y",1,-1,e,n,-t,s,a,3),w("x","y","z",1,-1,e,t,n,s,r,4),w("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(d),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(p,2));function w(g,_,f,R,M,E,P,D,U,J,b){const L=E/U,te=P/J,se=E/2,B=P/2,X=D/2,V=U+1,$=J+1;let K=0,Q=0;const oe=new C;for(let ee=0;ee<$;ee++){const H=ee*te-B;for(let q=0;q<V;q++){const de=q*L-se;oe[g]=de*R,oe[_]=H*M,oe[f]=X,u.push(oe.x,oe.y,oe.z),oe[g]=0,oe[_]=0,oe[f]=D>0?1:-1,h.push(oe.x,oe.y,oe.z),p.push(q/U),p.push(1-ee/J),K+=1}}for(let ee=0;ee<J;ee++)for(let H=0;H<U;H++){const q=m+H+V*ee,de=m+H+V*(ee+1),le=m+(H+1)+V*(ee+1),fe=m+(H+1)+V*ee;d.push(q,de,fe),d.push(de,le,fe),Q+=6}o.addGroup(x,Q,b),x+=Q,m+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=Di(i[t]);for(const s in n)e[s]=n[s]}return e}function Uh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ql(i){return i.getRenderTarget()===null?i.outputColorSpace:Zt}const Oh={clone:Di,merge:Tt};var Nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nh,this.fragmentShader=Fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let ec=class extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Nt extends ec{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ai*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Ai*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ai*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const d=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/d,t-=a.offsetY*n/u,s*=a.width/d,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,wi=1;class Bh extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const s=new Nt(xi,wi,e,t);s.layers=this.layers,this.add(s);const r=new Nt(xi,wi,e,t);r.layers=this.layers,this.add(r);const a=new Nt(xi,wi,e,t);a.layers=this.layers,this.add(a);const o=new Nt(xi,wi,e,t);o.layers=this.layers,this.add(o);const d=new Nt(xi,wi,e,t);d.layers=this.layers,this.add(d);const u=new Nt(xi,wi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,d]=t;for(const u of t)this.remove(u);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,o,d,u]=this.children,h=e.getRenderTarget(),p=e.toneMapping,m=e.xr.enabled;e.toneMapping=vn,e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,d),n.texture.generateMipmaps=x,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(h),e.toneMapping=p,e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class tc extends Pt{constructor(e,t,n,s,r,a,o,d,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,n,s,r,a,o,d,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zh extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xn?He:qn),this.texture=new tc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zn(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Cn});r.uniforms.tEquirect.value=t;const a=new It(s,r),o=t.minFilter;return t.minFilter===ss&&(t.minFilter=Ct),new Bh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Or=new C,kh=new C,Hh=new Ge;class Nn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Or.subVectors(n,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Or),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hh.getNormalMatrix(e),s=this.coplanarPoint(Or).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Js,zs=new C;class uo{constructor(e=new Nn,t=new Nn,n=new Nn,s=new Nn,r=new Nn,a=new Nn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],d=s[3],u=s[4],h=s[5],p=s[6],m=s[7],x=s[8],w=s[9],g=s[10],_=s[11],f=s[12],R=s[13],M=s[14],E=s[15];if(n[0].setComponents(d-r,m-u,_-x,E-f).normalize(),n[1].setComponents(d+r,m+u,_+x,E+f).normalize(),n[2].setComponents(d+a,m+h,_+w,E+R).normalize(),n[3].setComponents(d-a,m-h,_-w,E-R).normalize(),n[4].setComponents(d-o,m-p,_-g,E-M).normalize(),t===_n)n[5].setComponents(d+o,m+p,_+g,E+M).normalize();else if(t===Ys)n[5].setComponents(o,p,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zs.x=s.normal.x>0?e.max.x:e.min.x,zs.y=s.normal.y>0?e.max.y:e.min.y,zs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gh(i,e){const t=e.isWebGL2,n=new WeakMap;function s(u,h){const p=u.array,m=u.usage,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,p,m),u.onUploadCallback();let w;if(p instanceof Float32Array)w=i.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)w=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)w=i.SHORT;else if(p instanceof Uint32Array)w=i.UNSIGNED_INT;else if(p instanceof Int32Array)w=i.INT;else if(p instanceof Int8Array)w=i.BYTE;else if(p instanceof Uint8Array)w=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)w=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:w,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version}}function r(u,h,p){const m=h.array,x=h.updateRange;i.bindBuffer(p,u),x.count===-1?i.bufferSubData(p,0,m):(t?i.bufferSubData(p,x.offset*m.BYTES_PER_ELEMENT,m,x.offset,x.count):i.bufferSubData(p,x.offset*m.BYTES_PER_ELEMENT,m.subarray(x.offset,x.offset+x.count)),x.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function d(u,h){if(u.isGLBufferAttribute){const m=n.get(u);(!m||m.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=n.get(u);p===void 0?n.set(u,s(u,h)):p.version<u.version&&(r(p.buffer,u,h),p.version=u.version)}return{get:a,remove:o,update:d}}class er extends rn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),d=Math.floor(s),u=o+1,h=d+1,p=e/o,m=t/d,x=[],w=[],g=[],_=[];for(let f=0;f<h;f++){const R=f*m-a;for(let M=0;M<u;M++){const E=M*p-r;w.push(E,-R,0),g.push(0,0,1),_.push(M/o),_.push(1-f/d)}}for(let f=0;f<d;f++)for(let R=0;R<o;R++){const M=R+u*f,E=R+u*(f+1),P=R+1+u*(f+1),D=R+1+u*f;x.push(M,E,D),x.push(E,P,D)}this.setIndex(x),this.setAttribute("position",new Bt(w,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$h=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ef=`#ifdef USE_IRIDESCENCE
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
#endif`,tf=`#ifdef USE_BUMPMAP
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,df=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ff=`vec3 transformedNormal = objectNormal;
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
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
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
}`,Pf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
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
#endif`,Of=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Hf=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
}`,Gf=`
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
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
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$f=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jf=`#if defined( USE_POINTS_UV )
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
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
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
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 geometryNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tp=`float getShadowMask() {
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Np=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
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
}`,Yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$p=`#define DISTANCE
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
}`,Kp=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
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
}`,em=`uniform vec3 diffuse;
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
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
}`,nm=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define MATCAP
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
}`,om=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define NORMAL
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
}`,lm=`#define NORMAL
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
}`,cm=`#define PHONG
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
}`,um=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define STANDARD
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
}`,hm=`#define STANDARD
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define TOON
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
}`,pm=`#define TOON
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`uniform float size;
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
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
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
}`,vm=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xm=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Vh,alphahash_pars_fragment:Wh,alphamap_fragment:Xh,alphamap_pars_fragment:qh,alphatest_fragment:jh,alphatest_pars_fragment:Yh,aomap_fragment:$h,aomap_pars_fragment:Kh,begin_vertex:Zh,beginnormal_vertex:Jh,bsdfs:Qh,iridescence_fragment:ef,bumpmap_pars_fragment:tf,clipping_planes_fragment:nf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:rf,clipping_planes_vertex:of,color_fragment:af,color_pars_fragment:lf,color_pars_vertex:cf,color_vertex:uf,common:df,cube_uv_reflection_fragment:hf,defaultnormal_vertex:ff,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:_f,colorspace_fragment:vf,colorspace_pars_fragment:xf,envmap_fragment:wf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:yf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Of,envmap_vertex:bf,fog_vertex:Ef,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:Cf,gradientmap_pars_fragment:Rf,lightmap_fragment:Pf,lightmap_pars_fragment:Lf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Df,lights_pars_begin:Uf,lights_toon_fragment:Nf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Bf,lights_phong_pars_fragment:zf,lights_physical_fragment:kf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Gf,lights_fragment_maps:Vf,lights_fragment_end:Wf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Yf,map_fragment:$f,map_pars_fragment:Kf,map_particle_fragment:Zf,map_particle_pars_fragment:Jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:ep,morphcolor_vertex:tp,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:op,normal_pars_fragment:ap,normal_pars_vertex:lp,normal_vertex:cp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:_p,project_vertex:vp,dithering_fragment:xp,dithering_pars_fragment:wp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:bp,shadowmap_vertex:Ep,shadowmask_pars_fragment:Tp,skinbase_vertex:Ap,skinning_pars_vertex:Cp,skinning_vertex:Rp,skinnormal_vertex:Pp,specularmap_fragment:Lp,specularmap_pars_fragment:Ip,tonemapping_fragment:Dp,tonemapping_pars_fragment:Up,transmission_fragment:Op,transmission_pars_fragment:Np,uv_pars_fragment:Fp,uv_pars_vertex:Bp,uv_vertex:zp,worldpos_vertex:kp,background_vert:Hp,background_frag:Gp,backgroundCube_vert:Vp,backgroundCube_frag:Wp,cube_vert:Xp,cube_frag:qp,depth_vert:jp,depth_frag:Yp,distanceRGBA_vert:$p,distanceRGBA_frag:Kp,equirect_vert:Zp,equirect_frag:Jp,linedashed_vert:Qp,linedashed_frag:em,meshbasic_vert:tm,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:om,meshnormal_vert:am,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:um,meshphysical_vert:dm,meshphysical_frag:hm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:_m,shadow_frag:vm,sprite_vert:xm,sprite_frag:wm},ue={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},en={basic:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Tt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Tt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Tt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Tt([ue.points,ue.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Tt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Tt([ue.common,ue.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Tt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Tt([ue.sprite,ue.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Tt([ue.common,ue.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Tt([ue.lights,ue.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};en.physical={uniforms:Tt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ks={r:0,b:0,g:0};function Mm(i,e,t,n,s,r,a){const o=new $e(0);let d=r===!0?0:1,u,h,p=null,m=0,x=null;function w(_,f){let R=!1,M=f.isScene===!0?f.background:null;switch(M&&M.isTexture&&(M=(f.backgroundBlurriness>0?t:e).get(M)),M===null?g(o,d):M&&M.isColor&&(g(M,1),R=!0),i.xr.getEnvironmentBlendMode()){case"opaque":R=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),R=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),R=!0;break}(i.autoClear||R)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Zs)?(h===void 0&&(h=new It(new Zn(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Di(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,U,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=M.colorSpace!==He,(p!==M||m!==M.version||x!==i.toneMapping)&&(h.material.needsUpdate=!0,p=M,m=M.version,x=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new It(new er(2,2),new Kn({name:"BackgroundMaterial",uniforms:Di(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=M.colorSpace!==He,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||m!==M.version||x!==i.toneMapping)&&(u.material.needsUpdate=!0,p=M,m=M.version,x=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function g(_,f){_.getRGB(ks,Ql(i)),n.buffers.color.setClear(ks.r,ks.g,ks.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(_,f=1){o.set(_),d=f,g(o,d)},getClearAlpha:function(){return d},setClearAlpha:function(_){d=_,g(o,d)},render:w}}function ym(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},d=_(null);let u=d,h=!1;function p(X,V,$,K,Q){let oe=!1;if(a){const ee=g(K,$,V);u!==ee&&(u=ee,x(u.object)),oe=f(X,K,$,Q),oe&&R(X,K,$,Q)}else{const ee=V.wireframe===!0;(u.geometry!==K.id||u.program!==$.id||u.wireframe!==ee)&&(u.geometry=K.id,u.program=$.id,u.wireframe=ee,oe=!0)}Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(oe||h)&&(h=!1,J(X,V,$,K),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function x(X){return n.isWebGL2?i.bindVertexArray(X):r.bindVertexArrayOES(X)}function w(X){return n.isWebGL2?i.deleteVertexArray(X):r.deleteVertexArrayOES(X)}function g(X,V,$){const K=$.wireframe===!0;let Q=o[X.id];Q===void 0&&(Q={},o[X.id]=Q);let oe=Q[V.id];oe===void 0&&(oe={},Q[V.id]=oe);let ee=oe[K];return ee===void 0&&(ee=_(m()),oe[K]=ee),ee}function _(X){const V=[],$=[],K=[];for(let Q=0;Q<s;Q++)V[Q]=0,$[Q]=0,K[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:K,object:X,attributes:{},index:null}}function f(X,V,$,K){const Q=u.attributes,oe=V.attributes;let ee=0;const H=$.getAttributes();for(const q in H)if(H[q].location>=0){const le=Q[q];let fe=oe[q];if(fe===void 0&&(q==="instanceMatrix"&&X.instanceMatrix&&(fe=X.instanceMatrix),q==="instanceColor"&&X.instanceColor&&(fe=X.instanceColor)),le===void 0||le.attribute!==fe||fe&&le.data!==fe.data)return!0;ee++}return u.attributesNum!==ee||u.index!==K}function R(X,V,$,K){const Q={},oe=V.attributes;let ee=0;const H=$.getAttributes();for(const q in H)if(H[q].location>=0){let le=oe[q];le===void 0&&(q==="instanceMatrix"&&X.instanceMatrix&&(le=X.instanceMatrix),q==="instanceColor"&&X.instanceColor&&(le=X.instanceColor));const fe={};fe.attribute=le,le&&le.data&&(fe.data=le.data),Q[q]=fe,ee++}u.attributes=Q,u.attributesNum=ee,u.index=K}function M(){const X=u.newAttributes;for(let V=0,$=X.length;V<$;V++)X[V]=0}function E(X){P(X,0)}function P(X,V){const $=u.newAttributes,K=u.enabledAttributes,Q=u.attributeDivisors;$[X]=1,K[X]===0&&(i.enableVertexAttribArray(X),K[X]=1),Q[X]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,V),Q[X]=V)}function D(){const X=u.newAttributes,V=u.enabledAttributes;for(let $=0,K=V.length;$<K;$++)V[$]!==X[$]&&(i.disableVertexAttribArray($),V[$]=0)}function U(X,V,$,K,Q,oe,ee){ee===!0?i.vertexAttribIPointer(X,V,$,Q,oe):i.vertexAttribPointer(X,V,$,K,Q,oe)}function J(X,V,$,K){if(n.isWebGL2===!1&&(X.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Q=K.attributes,oe=$.getAttributes(),ee=V.defaultAttributeValues;for(const H in oe){const q=oe[H];if(q.location>=0){let de=Q[H];if(de===void 0&&(H==="instanceMatrix"&&X.instanceMatrix&&(de=X.instanceMatrix),H==="instanceColor"&&X.instanceColor&&(de=X.instanceColor)),de!==void 0){const le=de.normalized,fe=de.itemSize,Me=t.get(de);if(Me===void 0)continue;const Ne=Me.buffer,be=Me.type,We=Me.bytesPerElement,xt=n.isWebGL2===!0&&(be===i.INT||be===i.UNSIGNED_INT||de.gpuType===Fl);if(de.isInterleavedBufferAttribute){const Fe=de.data,F=Fe.stride,_t=de.offset;if(Fe.isInstancedInterleavedBuffer){for(let Te=0;Te<q.locationSize;Te++)P(q.location+Te,Fe.meshPerAttribute);X.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Te=0;Te<q.locationSize;Te++)E(q.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Te=0;Te<q.locationSize;Te++)U(q.location+Te,fe/q.locationSize,be,le,F*We,(_t+fe/q.locationSize*Te)*We,xt)}else{if(de.isInstancedBufferAttribute){for(let Fe=0;Fe<q.locationSize;Fe++)P(q.location+Fe,de.meshPerAttribute);X.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<q.locationSize;Fe++)E(q.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Fe=0;Fe<q.locationSize;Fe++)U(q.location+Fe,fe/q.locationSize,be,le,fe*We,fe/q.locationSize*Fe*We,xt)}}else if(ee!==void 0){const le=ee[H];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(q.location,le);break;case 3:i.vertexAttrib3fv(q.location,le);break;case 4:i.vertexAttrib4fv(q.location,le);break;default:i.vertexAttrib1fv(q.location,le)}}}}D()}function b(){se();for(const X in o){const V=o[X];for(const $ in V){const K=V[$];for(const Q in K)w(K[Q].object),delete K[Q];delete V[$]}delete o[X]}}function L(X){if(o[X.id]===void 0)return;const V=o[X.id];for(const $ in V){const K=V[$];for(const Q in K)w(K[Q].object),delete K[Q];delete V[$]}delete o[X.id]}function te(X){for(const V in o){const $=o[V];if($[X.id]===void 0)continue;const K=$[X.id];for(const Q in K)w(K[Q].object),delete K[Q];delete $[X.id]}}function se(){B(),h=!0,u!==d&&(u=d,x(u.object))}function B(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:p,reset:se,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:te,initAttributes:M,enableAttribute:E,disableUnusedAttributes:D}}function Sm(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function d(u,h,p){if(p===0)return;let m,x;if(s)m=i,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](r,u,h,p),t.update(h,r,p)}this.setMode=a,this.render=o,this.renderInstances=d}function bm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const d=r(o);d!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",d,"instead."),o=d);const u=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),w=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,E=a||e.has("OES_texture_float"),P=M&&E,D=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:w,maxAttributes:g,maxVertexUniforms:_,maxVaryings:f,maxFragmentUniforms:R,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:D}}function Em(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Nn,o=new Ge,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const x=p.length!==0||m||n!==0||s;return s=m,n=p.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,x){const w=p.clippingPlanes,g=p.clipIntersection,_=p.clipShadows,f=i.get(p);if(!s||w===null||w.length===0||r&&!_)r?h(null):u();else{const R=r?0:n,M=R*4;let E=f.clippingState||null;d.value=E,E=h(w,m,M,x);for(let P=0;P!==M;++P)E[P]=t[P];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=R}};function u(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,x,w){const g=p!==null?p.length:0;let _=null;if(g!==0){if(_=d.value,w!==!0||_===null){const f=x+g*4,R=m.matrixWorldInverse;o.getNormalMatrix(R),(_===null||_.length<f)&&(_=new Float32Array(f));for(let M=0,E=x;M!==g;++M,E+=4)a.copy(p[M]).applyMatrix4(R,o),a.normal.toArray(_,E),_[E+3]=a.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function Tm(i){let e=new WeakMap;function t(a,o){return o===Yr?a.mapping=Pi:o===$r&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Yr||o===$r)if(e.has(a)){const d=e.get(a).texture;return t(d,a.mapping)}else{const d=a.image;if(d&&d.height>0){const u=new zh(d.height/2);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",s),t(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const d=e.get(o);d!==void 0&&(e.delete(o),d.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Am extends ec{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,d=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ei=4,Ya=[.125,.215,.35,.446,.526,.582],zn=20,Nr=new Am,$a=new $e;let Fr=null;const Fn=(1+Math.sqrt(5))/2,Mi=1/Fn,Ka=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Fn,Mi),new C(0,Fn,-Mi),new C(Mi,0,Fn),new C(-Mi,0,Fn),new C(Fn,Mi,0),new C(-Fn,Mi,0)];class Za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Fr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr),e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:rs,format:$t,colorSpace:Zt,depthBuffer:!1},s=Ja(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ja(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cm(r)),this._blurMaterial=Rm(r,e,t)}return s}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,s){const o=new Nt(90,1,t,n),d=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor($a),h.toneMapping=vn,h.autoClear=!1;const x=new Qs({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),w=new It(new Zn,x);let g=!1;const _=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,g=!0):(x.color.copy($a),g=!0);for(let f=0;f<6;f++){const R=f%3;R===0?(o.up.set(0,d[f],0),o.lookAt(u[f],0,0)):R===1?(o.up.set(0,0,d[f]),o.lookAt(0,u[f],0)):(o.up.set(0,d[f],0),o.lookAt(0,0,u[f]));const M=this._cubeSize;Hs(s,R*M,f>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(w,o),h.render(e,o)}w.geometry.dispose(),w.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Pi||e.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qa());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const d=this._cubeSize;Hs(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(a,Nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ka[(s-1)%Ka.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const d=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new It(this._lodPlanes[s],u),m=u.uniforms,x=this._sizeLods[n]-1,w=isFinite(r)?Math.PI/(2*x):2*Math.PI/(2*zn-1),g=r/w,_=isFinite(r)?1+Math.floor(h*g):zn;_>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${zn}`);const f=[];let R=0;for(let U=0;U<zn;++U){const J=U/g,b=Math.exp(-J*J/2);f.push(b),U===0?R+=b:U<_&&(R+=2*b)}for(let U=0;U<f.length;U++)f[U]=f[U]/R;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=f,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:M}=this;m.dTheta.value=w,m.mipInt.value=M-n;const E=this._sizeLods[s],P=3*E*(s>M-Ei?s-M+Ei:0),D=4*(this._cubeSize-E);Hs(t,P,D,3*E,2*E),d.setRenderTarget(t),d.render(p,Nr)}}function Cm(i){const e=[],t=[],n=[];let s=i;const r=i-Ei+1+Ya.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let d=1/o;a>i-Ei?d=Ya[a-i+Ei-1]:a===0&&(d=0),n.push(d);const u=1/(o-2),h=-u,p=1+u,m=[h,h,p,h,p,p,h,h,p,p,h,p],x=6,w=6,g=3,_=2,f=1,R=new Float32Array(g*w*x),M=new Float32Array(_*w*x),E=new Float32Array(f*w*x);for(let D=0;D<x;D++){const U=D%3*2/3-1,J=D>2?0:-1,b=[U,J,0,U+2/3,J,0,U+2/3,J+1,0,U,J,0,U+2/3,J+1,0,U,J+1,0];R.set(b,g*w*D),M.set(m,_*w*D);const L=[D,D,D,D,D,D];E.set(L,f*w*D)}const P=new rn;P.setAttribute("position",new nn(R,g)),P.setAttribute("uv",new nn(M,_)),P.setAttribute("faceIndex",new nn(E,f)),e.push(P),s>Ei&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ja(i,e,t){const n=new $n(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Rm(i,e,t){const n=new Float32Array(zn),s=new C(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Qa(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function el(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ho(){return`

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
	`}function Pm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const d=o.mapping,u=d===Yr||d===$r,h=d===Pi||d===Li;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new Za(i)),p=u?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(u&&p&&p.height>0||h&&p&&s(p)){t===null&&(t=new Za(i));const m=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,m),o.addEventListener("dispose",r),m.texture}else return null}}}return o}function s(o){let d=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&d++;return d===u}function r(o){const d=o.target;d.removeEventListener("dispose",r);const u=e.get(d);u!==void 0&&(e.delete(d),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Lm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Im(i,e,t,n){const s={},r=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const w in m.attributes)e.remove(m.attributes[w]);for(const w in m.morphAttributes){const g=m.morphAttributes[w];for(let _=0,f=g.length;_<f;_++)e.remove(g[_])}m.removeEventListener("dispose",a),delete s[m.id];const x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(p,m){return s[m.id]===!0||(m.addEventListener("dispose",a),s[m.id]=!0,t.memory.geometries++),m}function d(p){const m=p.attributes;for(const w in m)e.update(m[w],i.ARRAY_BUFFER);const x=p.morphAttributes;for(const w in x){const g=x[w];for(let _=0,f=g.length;_<f;_++)e.update(g[_],i.ARRAY_BUFFER)}}function u(p){const m=[],x=p.index,w=p.attributes.position;let g=0;if(x!==null){const R=x.array;g=x.version;for(let M=0,E=R.length;M<E;M+=3){const P=R[M+0],D=R[M+1],U=R[M+2];m.push(P,D,D,U,U,P)}}else{const R=w.array;g=w.version;for(let M=0,E=R.length/3-1;M<E;M+=3){const P=M+0,D=M+1,U=M+2;m.push(P,D,D,U,U,P)}}const _=new(ql(m)?Jl:Zl)(m,1);_.version=g;const f=r.get(p);f&&e.remove(f),r.set(p,_)}function h(p){const m=r.get(p);if(m){const x=p.index;x!==null&&m.version<x.version&&u(p)}else u(p);return r.get(p)}return{get:o,update:d,getWireframeAttribute:h}}function Dm(i,e,t,n){const s=n.isWebGL2;let r;function a(m){r=m}let o,d;function u(m){o=m.type,d=m.bytesPerElement}function h(m,x){i.drawElements(r,x,o,m*d),t.update(x,r,1)}function p(m,x,w){if(w===0)return;let g,_;if(s)g=i,_="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](r,x,o,m*d,w),t.update(x,r,w)}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=p}function Um(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Om(i,e){return i[0]-e[0]}function Nm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Fm(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new it,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function d(u,h,p){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const w=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=w!==void 0?w.length:0;let _=r.get(h);if(_===void 0||_.count!==g){let V=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",V)};var x=V;_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],J=h.morphAttributes.color||[];let b=0;M===!0&&(b=1),E===!0&&(b=2),P===!0&&(b=3);let L=h.attributes.position.count*b,te=1;L>e.maxTextureSize&&(te=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const se=new Float32Array(L*te*4*g),B=new $l(se,L,te,g);B.type=Tn,B.needsUpdate=!0;const X=b*4;for(let $=0;$<g;$++){const K=D[$],Q=U[$],oe=J[$],ee=L*te*4*$;for(let H=0;H<K.count;H++){const q=H*X;M===!0&&(a.fromBufferAttribute(K,H),se[ee+q+0]=a.x,se[ee+q+1]=a.y,se[ee+q+2]=a.z,se[ee+q+3]=0),E===!0&&(a.fromBufferAttribute(Q,H),se[ee+q+4]=a.x,se[ee+q+5]=a.y,se[ee+q+6]=a.z,se[ee+q+7]=0),P===!0&&(a.fromBufferAttribute(oe,H),se[ee+q+8]=a.x,se[ee+q+9]=a.y,se[ee+q+10]=a.z,se[ee+q+11]=oe.itemSize===4?a.w:1)}}_={count:g,texture:B,size:new Xe(L,te)},r.set(h,_),h.addEventListener("dispose",V)}let f=0;for(let M=0;M<m.length;M++)f+=m[M];const R=h.morphTargetsRelative?1:1-f;p.getUniforms().setValue(i,"morphTargetBaseInfluence",R),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const w=m===void 0?0:m.length;let g=n[h.id];if(g===void 0||g.length!==w){g=[];for(let E=0;E<w;E++)g[E]=[E,0];n[h.id]=g}for(let E=0;E<w;E++){const P=g[E];P[0]=E,P[1]=m[E]}g.sort(Nm);for(let E=0;E<8;E++)E<w&&g[E][1]?(o[E][0]=g[E][0],o[E][1]=g[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Om);const _=h.morphAttributes.position,f=h.morphAttributes.normal;let R=0;for(let E=0;E<8;E++){const P=o[E],D=P[0],U=P[1];D!==Number.MAX_SAFE_INTEGER&&U?(_&&h.getAttribute("morphTarget"+E)!==_[D]&&h.setAttribute("morphTarget"+E,_[D]),f&&h.getAttribute("morphNormal"+E)!==f[D]&&h.setAttribute("morphNormal"+E,f[D]),s[E]=U,R+=U):(_&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),f&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),s[E]=0)}const M=h.morphTargetsRelative?1:1-R;p.getUniforms().setValue(i,"morphTargetBaseInfluence",M),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:d}}function Bm(i,e,t,n){let s=new WeakMap;function r(d){const u=n.render.frame,h=d.geometry,p=e.get(d,h);if(s.get(p)!==u&&(e.update(p),s.set(p,u)),d.isInstancedMesh&&(d.hasEventListener("dispose",o)===!1&&d.addEventListener("dispose",o),s.get(d)!==u&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,u))),d.isSkinnedMesh){const m=d.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return p}function a(){s=new WeakMap}function o(d){const u=d.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}const ic=new Pt,sc=new $l,rc=new Sh,oc=new tc,tl=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=tl[s];if(r===void 0&&(r=new Float32Array(s),tl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tr(i,e){let t=nl[e];t===void 0&&(t=new Int32Array(e),nl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function Vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;rl.set(n),i.uniformMatrix2fv(this.addr,!1,rl),gt(t,n)}}function Wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;sl.set(n),i.uniformMatrix3fv(this.addr,!1,sl),gt(t,n)}}function Xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;il.set(n),i.uniformMatrix4fv(this.addr,!1,il),gt(t,n)}}function qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Km(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function eg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||ic,s)}function tg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rc,s)}function ng(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||oc,s)}function ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sc,s)}function sg(i){switch(i){case 5126:return zm;case 35664:return km;case 35665:return Hm;case 35666:return Gm;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return jm;case 35668:case 35672:return Ym;case 35669:case 35673:return $m;case 5125:return Km;case 36294:return Zm;case 36295:return Jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(i,e){i.uniform1fv(this.addr,e)}function og(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function ag(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function lg(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function cg(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ug(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dg(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hg(i,e){i.uniform1iv(this.addr,e)}function fg(i,e){i.uniform2iv(this.addr,e)}function pg(i,e){i.uniform3iv(this.addr,e)}function mg(i,e){i.uniform4iv(this.addr,e)}function gg(i,e){i.uniform1uiv(this.addr,e)}function _g(i,e){i.uniform2uiv(this.addr,e)}function vg(i,e){i.uniform3uiv(this.addr,e)}function xg(i,e){i.uniform4uiv(this.addr,e)}function wg(i,e,t){const n=this.cache,s=e.length,r=tr(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ic,r[a])}function Mg(i,e,t){const n=this.cache,s=e.length,r=tr(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||rc,r[a])}function yg(i,e,t){const n=this.cache,s=e.length,r=tr(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||oc,r[a])}function Sg(i,e,t){const n=this.cache,s=e.length,r=tr(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||sc,r[a])}function bg(i){switch(i){case 5126:return rg;case 35664:return og;case 35665:return ag;case 35666:return lg;case 35674:return cg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return vg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Sg}}class Eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=sg(t.type)}}class Tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=bg(t.type)}}class Ag{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function ol(i,e){i.seq.push(e),i.map[e.id]=e}function Cg(i,e,t){const n=i.name,s=n.length;for(Br.lastIndex=0;;){const r=Br.exec(n),a=Br.lastIndex;let o=r[1];const d=r[2]==="]",u=r[3];if(d&&(o=o|0),u===void 0||u==="["&&a+2===s){ol(t,u===void 0?new Eg(o,i,e):new Tg(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Ag(o),ol(t,p)),t=p}}}class js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Cg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],d=n[o.id];d.needsUpdate!==!1&&o.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function al(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Rg=0;function Pg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Lg(i){switch(i){case Zt:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function ll(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Pg(i.getShaderSource(e),a)}else return s}function Ig(i,e){const t=Lg(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Dg(i,e){let t;switch(e){case Cd:t="Linear";break;case Rd:t="Reinhard";break;case Pd:t="OptimizedCineon";break;case Ld:t="ACESFilmic";break;case Id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ug(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ts).join(`
`)}function Og(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ng(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ts(i){return i!==""}function cl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ul(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(Fg,zg)}const Bg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zg(i,e){let t=ke[e];if(t===void 0){const n=Bg.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eo(t)}const kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(i){return i.replace(kg,Hg)}function Hg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Il?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function Xg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ro:e="ENVMAP_BLENDING_MULTIPLY";break;case Td:e="ENVMAP_BLENDING_MIX";break;case Ad:e="ENVMAP_BLENDING_ADD";break}return e}function qg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const d=Gg(t),u=Vg(t),h=Wg(t),p=Xg(t),m=qg(t),x=t.isWebGL2?"":Ug(t),w=Og(r),g=s.createProgram();let _,f,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ts).join(`
`),_.length>0&&(_+=`
`),f=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ts).join(`
`),f.length>0&&(f+=`
`)):(_=[hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),f=[x,hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?ke.tonemapping_pars_fragment:"",t.toneMapping!==vn?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Ig("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),a=eo(a),a=cl(a,t),a=ul(a,t),o=eo(o),o=cl(o,t),o=ul(o,t),a=dl(a),o=dl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",t.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=R+_+a,E=R+f+o,P=al(s,s.VERTEX_SHADER,M),D=al(s,s.FRAGMENT_SHADER,E);if(s.attachShader(g,P),s.attachShader(g,D),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),i.debug.checkShaderErrors){const b=s.getProgramInfoLog(g).trim(),L=s.getShaderInfoLog(P).trim(),te=s.getShaderInfoLog(D).trim();let se=!0,B=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,D);else{const X=ll(s,P,"vertex"),V=ll(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+X+`
`+V)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(L===""||te==="")&&(B=!1);B&&(this.diagnostics={runnable:se,programLog:b,vertexShader:{log:L,prefix:_},fragmentShader:{log:te,prefix:f}})}s.deleteShader(P),s.deleteShader(D);let U;this.getUniforms=function(){return U===void 0&&(U=new js(s,g)),U};let J;return this.getAttributes=function(){return J===void 0&&(J=Ng(s,g)),J},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=D,this}let Yg=0;class $g{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kg(e),t.set(e,n)),n}}class Kg{constructor(e){this.id=Yg++,this.code=e,this.usedTimes=0}}function Zg(i,e,t,n,s,r,a){const o=new co,d=new $g,u=[],h=s.isWebGL2,p=s.logarithmicDepthBuffer,m=s.vertexTextures;let x=s.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function _(b,L,te,se,B){const X=se.fog,V=B.geometry,$=b.isMeshStandardMaterial?se.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),Q=K&&K.mapping===Zs?K.image.height:null,oe=w[b.type];b.precision!==null&&(x=s.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,H=ee!==void 0?ee.length:0;let q=0;V.morphAttributes.position!==void 0&&(q=1),V.morphAttributes.normal!==void 0&&(q=2),V.morphAttributes.color!==void 0&&(q=3);let de,le,fe,Me;if(oe){const zt=en[oe];de=zt.vertexShader,le=zt.fragmentShader}else de=b.vertexShader,le=b.fragmentShader,d.update(b),fe=d.getVertexShaderID(b),Me=d.getFragmentShaderID(b);const Ne=i.getRenderTarget(),be=B.isInstancedMesh===!0,We=!!b.map,xt=!!b.matcap,Fe=!!K,F=!!b.aoMap,_t=!!b.lightMap,Te=!!b.bumpMap,Oe=!!b.normalMap,Le=!!b.displacementMap,Qe=!!b.emissiveMap,Re=!!b.metalnessMap,Ie=!!b.roughnessMap,Ke=b.anisotropy>0,Ye=b.clearcoat>0,ct=b.iridescence>0,A=b.sheen>0,y=b.transmission>0,N=Ke&&!!b.anisotropyMap,ne=Ye&&!!b.clearcoatMap,ie=Ye&&!!b.clearcoatNormalMap,ce=Ye&&!!b.clearcoatRoughnessMap,me=ct&&!!b.iridescenceMap,ae=ct&&!!b.iridescenceThicknessMap,Z=A&&!!b.sheenColorMap,ye=A&&!!b.sheenRoughnessMap,_e=!!b.specularMap,Ae=!!b.specularColorMap,ve=!!b.specularIntensityMap,xe=y&&!!b.transmissionMap,Be=y&&!!b.thicknessMap,Ze=!!b.gradientMap,I=!!b.alphaMap,he=b.alphaTest>0,G=!!b.alphaHash,re=!!b.extensions,pe=!!V.attributes.uv1,qe=!!V.attributes.uv2,et=!!V.attributes.uv3;return{isWebGL2:h,shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:de,fragmentShader:le,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,instancing:be,instancingColor:be&&B.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Ne===null?i.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Zt,map:We,matcap:xt,envMap:Fe,envMapMode:Fe&&K.mapping,envMapCubeUVHeight:Q,aoMap:F,lightMap:_t,bumpMap:Te,normalMap:Oe,displacementMap:m&&Le,emissiveMap:Qe,normalMapObjectSpace:Oe&&b.normalMapType===Xd,normalMapTangentSpace:Oe&&b.normalMapType===Wl,metalnessMap:Re,roughnessMap:Ie,anisotropy:Ke,anisotropyMap:N,clearcoat:Ye,clearcoatMap:ne,clearcoatNormalMap:ie,clearcoatRoughnessMap:ce,iridescence:ct,iridescenceMap:me,iridescenceThicknessMap:ae,sheen:A,sheenColorMap:Z,sheenRoughnessMap:ye,specularMap:_e,specularColorMap:Ae,specularIntensityMap:ve,transmission:y,transmissionMap:xe,thicknessMap:Be,gradientMap:Ze,opaque:b.transparent===!1&&b.blending===Ti,alphaMap:I,alphaTest:he,alphaHash:G,combine:b.combine,mapUv:We&&g(b.map.channel),aoMapUv:F&&g(b.aoMap.channel),lightMapUv:_t&&g(b.lightMap.channel),bumpMapUv:Te&&g(b.bumpMap.channel),normalMapUv:Oe&&g(b.normalMap.channel),displacementMapUv:Le&&g(b.displacementMap.channel),emissiveMapUv:Qe&&g(b.emissiveMap.channel),metalnessMapUv:Re&&g(b.metalnessMap.channel),roughnessMapUv:Ie&&g(b.roughnessMap.channel),anisotropyMapUv:N&&g(b.anisotropyMap.channel),clearcoatMapUv:ne&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(b.sheenRoughnessMap.channel),specularMapUv:_e&&g(b.specularMap.channel),specularColorMapUv:Ae&&g(b.specularColorMap.channel),specularIntensityMapUv:ve&&g(b.specularIntensityMap.channel),transmissionMapUv:xe&&g(b.transmissionMap.channel),thicknessMapUv:Be&&g(b.thicknessMap.channel),alphaMapUv:I&&g(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Oe||Ke),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:pe,vertexUv2s:qe,vertexUv3s:et,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(We||I),fog:!!X,useFog:b.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:q,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&te.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:vn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ft,flipSided:b.side===Rt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:re&&b.extensions.derivatives===!0,extensionFragDepth:re&&b.extensions.fragDepth===!0,extensionDrawBuffers:re&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const te in b.defines)L.push(te),L.push(b.defines[te]);return b.isRawShaderMaterial===!1&&(R(L,b),M(L,b),L.push(i.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function R(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function M(b,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.matcap&&o.enable(4),L.envMap&&o.enable(5),L.normalMapObjectSpace&&o.enable(6),L.normalMapTangentSpace&&o.enable(7),L.clearcoat&&o.enable(8),L.iridescence&&o.enable(9),L.alphaTest&&o.enable(10),L.vertexColors&&o.enable(11),L.vertexAlphas&&o.enable(12),L.vertexUv1s&&o.enable(13),L.vertexUv2s&&o.enable(14),L.vertexUv3s&&o.enable(15),L.vertexTangents&&o.enable(16),L.anisotropy&&o.enable(17),b.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.useLegacyLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),b.push(o.mask)}function E(b){const L=w[b.type];let te;if(L){const se=en[L];te=Oh.clone(se.uniforms)}else te=b.uniforms;return te}function P(b,L){let te;for(let se=0,B=u.length;se<B;se++){const X=u[se];if(X.cacheKey===L){te=X,++te.usedTimes;break}}return te===void 0&&(te=new jg(i,L,b,r),u.push(te)),te}function D(b){if(--b.usedTimes===0){const L=u.indexOf(b);u[L]=u[u.length-1],u.pop(),b.destroy()}}function U(b){d.remove(b)}function J(){d.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:E,acquireProgram:P,releaseProgram:D,releaseShaderCache:U,programs:u,dispose:J}}function Jg(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p,m,x,w,g,_){let f=i[e];return f===void 0?(f={id:p.id,object:p,geometry:m,material:x,groupOrder:w,renderOrder:p.renderOrder,z:g,group:_},i[e]=f):(f.id=p.id,f.object=p,f.geometry=m,f.material=x,f.groupOrder=w,f.renderOrder=p.renderOrder,f.z=g,f.group=_),e++,f}function o(p,m,x,w,g,_){const f=a(p,m,x,w,g,_);x.transmission>0?n.push(f):x.transparent===!0?s.push(f):t.push(f)}function d(p,m,x,w,g,_){const f=a(p,m,x,w,g,_);x.transmission>0?n.unshift(f):x.transparent===!0?s.unshift(f):t.unshift(f)}function u(p,m){t.length>1&&t.sort(p||Qg),n.length>1&&n.sort(m||fl),s.length>1&&s.sort(m||fl)}function h(){for(let p=e,m=i.length;p<m;p++){const x=i[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:d,finish:h,sort:u}}function e_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new pl,i.set(n,[a])):s>=r.length?(a=new pl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function t_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new $e};break;case"SpotLight":t={position:new C,direction:new C,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function n_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let i_=0;function s_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function r_(i,e){const t=new t_,n=n_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new C);const r=new C,a=new ht,o=new ht;function d(h,p){let m=0,x=0,w=0;for(let te=0;te<9;te++)s.probe[te].set(0,0,0);let g=0,_=0,f=0,R=0,M=0,E=0,P=0,D=0,U=0,J=0;h.sort(s_);const b=p===!0?Math.PI:1;for(let te=0,se=h.length;te<se;te++){const B=h[te],X=B.color,V=B.intensity,$=B.distance,K=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=X.r*V*b,x+=X.g*V*b,w+=X.b*V*b;else if(B.isLightProbe)for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(B.sh.coefficients[Q],V);else if(B.isDirectionalLight){const Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*b),B.castShadow){const oe=B.shadow,ee=n.get(B);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,s.directionalShadow[g]=ee,s.directionalShadowMap[g]=K,s.directionalShadowMatrix[g]=B.shadow.matrix,E++}s.directional[g]=Q,g++}else if(B.isSpotLight){const Q=t.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(X).multiplyScalar(V*b),Q.distance=$,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,s.spot[f]=Q;const oe=B.shadow;if(B.map&&(s.spotLightMap[U]=B.map,U++,oe.updateMatrices(B),B.castShadow&&J++),s.spotLightMatrix[f]=oe.matrix,B.castShadow){const ee=n.get(B);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,s.spotShadow[f]=ee,s.spotShadowMap[f]=K,D++}f++}else if(B.isRectAreaLight){const Q=t.get(B);Q.color.copy(X).multiplyScalar(V),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),s.rectArea[R]=Q,R++}else if(B.isPointLight){const Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*b),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const oe=B.shadow,ee=n.get(B);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,ee.shadowCameraNear=oe.camera.near,ee.shadowCameraFar=oe.camera.far,s.pointShadow[_]=ee,s.pointShadowMap[_]=K,s.pointShadowMatrix[_]=B.shadow.matrix,P++}s.point[_]=Q,_++}else if(B.isHemisphereLight){const Q=t.get(B);Q.skyColor.copy(B.color).multiplyScalar(V*b),Q.groundColor.copy(B.groundColor).multiplyScalar(V*b),s.hemi[M]=Q,M++}}R>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=m,s.ambient[1]=x,s.ambient[2]=w;const L=s.hash;(L.directionalLength!==g||L.pointLength!==_||L.spotLength!==f||L.rectAreaLength!==R||L.hemiLength!==M||L.numDirectionalShadows!==E||L.numPointShadows!==P||L.numSpotShadows!==D||L.numSpotMaps!==U)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=R,s.point.length=_,s.hemi.length=M,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=D+U-J,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=J,L.directionalLength=g,L.pointLength=_,L.spotLength=f,L.rectAreaLength=R,L.hemiLength=M,L.numDirectionalShadows=E,L.numPointShadows=P,L.numSpotShadows=D,L.numSpotMaps=U,s.version=i_++)}function u(h,p){let m=0,x=0,w=0,g=0,_=0;const f=p.matrixWorldInverse;for(let R=0,M=h.length;R<M;R++){const E=h[R];if(E.isDirectionalLight){const P=s.directional[m];P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),m++}else if(E.isSpotLight){const P=s.spot[w];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),w++}else if(E.isRectAreaLight){const P=s.rectArea[g];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(E.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const P=s.point[x];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),x++}else if(E.isHemisphereLight){const P=s.hemi[_];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(f),_++}}}return{setup:d,setupView:u,state:s}}function ml(i,e){const t=new r_(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(p){n.push(p)}function o(p){s.push(p)}function d(p){t.setup(n,p)}function u(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:d,setupLightsView:u,pushLight:a,pushShadow:o}}function o_(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let d;return o===void 0?(d=new ml(i,e),t.set(r,[d])):a>=o.length?(d=new ml(i,e),o.push(d)):d=o[a],d}function s(){t=new WeakMap}return{get:n,dispose:s}}class a_ extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l_ extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
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
}`;function d_(i,e,t){let n=new uo;const s=new Xe,r=new Xe,a=new it,o=new a_({depthPacking:Wd}),d=new l_,u={},h=t.maxTextureSize,p={[Kt]:Rt,[Rt]:Kt,[Ft]:Ft},m=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:c_,fragmentShader:u_}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const w=new rn;w.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new It(w,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let f=this.type;this.render=function(P,D,U){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const J=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),te=i.state;te.setBlending(Cn),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const se=f!==pn&&this.type===pn,B=f===pn&&this.type!==pn;for(let X=0,V=P.length;X<V;X++){const $=P[X],K=$.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const Q=K.getFrameExtents();if(s.multiply(Q),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,K.mapSize.y=r.y)),K.map===null||se===!0||B===!0){const ee=this.type!==pn?{minFilter:At,magFilter:At}:{};K.map!==null&&K.map.dispose(),K.map=new $n(s.x,s.y,ee),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const oe=K.getViewportCount();for(let ee=0;ee<oe;ee++){const H=K.getViewport(ee);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),te.viewport(a),K.updateMatrices($,ee),n=K.getFrustum(),E(D,U,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===pn&&R(K,U),K.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(J,b,L)};function R(P,D){const U=e.update(g);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new $n(s.x,s.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,U,m,g,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,U,x,g,null)}function M(P,D,U,J){let b=null;const L=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)b=L;else if(b=U.isPointLight===!0?d:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const te=b.uuid,se=D.uuid;let B=u[te];B===void 0&&(B={},u[te]=B);let X=B[se];X===void 0&&(X=b.clone(),B[se]=X),b=X}if(b.visible=D.visible,b.wireframe=D.wireframe,J===pn?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:p[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const te=i.properties.get(b);te.light=U}return b}function E(P,D,U,J,b){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===pn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const se=e.update(P),B=P.material;if(Array.isArray(B)){const X=se.groups;for(let V=0,$=X.length;V<$;V++){const K=X[V],Q=B[K.materialIndex];if(Q&&Q.visible){const oe=M(P,Q,J,b);i.renderBufferDirect(U,null,se,oe,P,K)}}}else if(B.visible){const X=M(P,B,J,b);i.renderBufferDirect(U,null,se,X,P,null)}}const te=P.children;for(let se=0,B=te.length;se<B;se++)E(te[se],D,U,J,b)}}function h_(i,e,t){const n=t.isWebGL2;function s(){let I=!1;const he=new it;let G=null;const re=new it(0,0,0,0);return{setMask:function(pe){G!==pe&&!I&&(i.colorMask(pe,pe,pe,pe),G=pe)},setLocked:function(pe){I=pe},setClear:function(pe,qe,et,ft,zt){zt===!0&&(pe*=ft,qe*=ft,et*=ft),he.set(pe,qe,et,ft),re.equals(he)===!1&&(i.clearColor(pe,qe,et,ft),re.copy(he))},reset:function(){I=!1,G=null,re.set(-1,0,0,0)}}}function r(){let I=!1,he=null,G=null,re=null;return{setTest:function(pe){pe?Ne(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(pe){he!==pe&&!I&&(i.depthMask(pe),he=pe)},setFunc:function(pe){if(G!==pe){switch(pe){case xd:i.depthFunc(i.NEVER);break;case wd:i.depthFunc(i.ALWAYS);break;case Md:i.depthFunc(i.LESS);break;case jr:i.depthFunc(i.LEQUAL);break;case yd:i.depthFunc(i.EQUAL);break;case Sd:i.depthFunc(i.GEQUAL);break;case bd:i.depthFunc(i.GREATER);break;case Ed:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=pe}},setLocked:function(pe){I=pe},setClear:function(pe){re!==pe&&(i.clearDepth(pe),re=pe)},reset:function(){I=!1,he=null,G=null,re=null}}}function a(){let I=!1,he=null,G=null,re=null,pe=null,qe=null,et=null,ft=null,zt=null;return{setTest:function(Je){I||(Je?Ne(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Je){he!==Je&&!I&&(i.stencilMask(Je),he=Je)},setFunc:function(Je,kt,wt){(G!==Je||re!==kt||pe!==wt)&&(i.stencilFunc(Je,kt,wt),G=Je,re=kt,pe=wt)},setOp:function(Je,kt,wt){(qe!==Je||et!==kt||ft!==wt)&&(i.stencilOp(Je,kt,wt),qe=Je,et=kt,ft=wt)},setLocked:function(Je){I=Je},setClear:function(Je){zt!==Je&&(i.clearStencil(Je),zt=Je)},reset:function(){I=!1,he=null,G=null,re=null,pe=null,qe=null,et=null,ft=null,zt=null}}}const o=new s,d=new r,u=new a,h=new WeakMap,p=new WeakMap;let m={},x={},w=new WeakMap,g=[],_=null,f=!1,R=null,M=null,E=null,P=null,D=null,U=null,J=null,b=!1,L=null,te=null,se=null,B=null,X=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=K>=2);let oe=null,ee={};const H=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),de=new it().fromArray(H),le=new it().fromArray(q);function fe(I,he,G,re){const pe=new Uint8Array(4),qe=i.createTexture();i.bindTexture(I,qe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<G;et++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(he,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(he+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return qe}const Me={};Me[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),d.setClear(1),u.setClear(0),Ne(i.DEPTH_TEST),d.setFunc(jr),Le(!1),Qe(ea),Ne(i.CULL_FACE),Te(Cn);function Ne(I){m[I]!==!0&&(i.enable(I),m[I]=!0)}function be(I){m[I]!==!1&&(i.disable(I),m[I]=!1)}function We(I,he){return x[I]!==he?(i.bindFramebuffer(I,he),x[I]=he,n&&(I===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=he),I===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=he)),!0):!1}function xt(I,he){let G=g,re=!1;if(I)if(G=w.get(he),G===void 0&&(G=[],w.set(he,G)),I.isWebGLMultipleRenderTargets){const pe=I.texture;if(G.length!==pe.length||G[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,et=pe.length;qe<et;qe++)G[qe]=i.COLOR_ATTACHMENT0+qe;G.length=pe.length,re=!0}}else G[0]!==i.COLOR_ATTACHMENT0&&(G[0]=i.COLOR_ATTACHMENT0,re=!0);else G[0]!==i.BACK&&(G[0]=i.BACK,re=!0);re&&(t.isWebGL2?i.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function Fe(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const F={[bi]:i.FUNC_ADD,[ld]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};if(n)F[sa]=i.MIN,F[ra]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(F[sa]=I.MIN_EXT,F[ra]=I.MAX_EXT)}const _t={[ud]:i.ZERO,[dd]:i.ONE,[hd]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[gd]:i.DST_COLOR,[pd]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[_d]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA};function Te(I,he,G,re,pe,qe,et,ft){if(I===Cn){f===!0&&(be(i.BLEND),f=!1);return}if(f===!1&&(Ne(i.BLEND),f=!0),I!==ad){if(I!==R||ft!==b){if((M!==bi||D!==bi)&&(i.blendEquation(i.FUNC_ADD),M=bi,D=bi),ft)switch(I){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFunc(i.ONE,i.ONE);break;case na:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ia:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case na:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ia:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,P=null,U=null,J=null,R=I,b=ft}return}pe=pe||he,qe=qe||G,et=et||re,(he!==M||pe!==D)&&(i.blendEquationSeparate(F[he],F[pe]),M=he,D=pe),(G!==E||re!==P||qe!==U||et!==J)&&(i.blendFuncSeparate(_t[G],_t[re],_t[qe],_t[et]),E=G,P=re,U=qe,J=et),R=I,b=!1}function Oe(I,he){I.side===Ft?be(i.CULL_FACE):Ne(i.CULL_FACE);let G=I.side===Rt;he&&(G=!G),Le(G),I.blending===Ti&&I.transparent===!1?Te(Cn):Te(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),d.setFunc(I.depthFunc),d.setTest(I.depthTest),d.setMask(I.depthWrite),o.setMask(I.colorWrite);const re=I.stencilWrite;u.setTest(re),re&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function Qe(I){I!==rd?(Ne(i.CULL_FACE),I!==te&&(I===ea?i.cullFace(i.BACK):I===od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),te=I}function Re(I){I!==se&&($&&i.lineWidth(I),se=I)}function Ie(I,he,G){I?(Ne(i.POLYGON_OFFSET_FILL),(B!==he||X!==G)&&(i.polygonOffset(he,G),B=he,X=G)):be(i.POLYGON_OFFSET_FILL)}function Ke(I){I?Ne(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Ye(I){I===void 0&&(I=i.TEXTURE0+V-1),oe!==I&&(i.activeTexture(I),oe=I)}function ct(I,he,G){G===void 0&&(oe===null?G=i.TEXTURE0+V-1:G=oe);let re=ee[G];re===void 0&&(re={type:void 0,texture:void 0},ee[G]=re),(re.type!==I||re.texture!==he)&&(oe!==G&&(i.activeTexture(G),oe=G),i.bindTexture(I,he||Me[I]),re.type=I,re.texture=he)}function A(){const I=ee[oe];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){de.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),de.copy(I))}function ve(I){le.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),le.copy(I))}function xe(I,he){let G=p.get(he);G===void 0&&(G=new WeakMap,p.set(he,G));let re=G.get(I);re===void 0&&(re=i.getUniformBlockIndex(he,I.name),G.set(I,re))}function Be(I,he){const re=p.get(he).get(I);h.get(he)!==re&&(i.uniformBlockBinding(he,re,I.__bindingPointIndex),h.set(he,re))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},oe=null,ee={},x={},w=new WeakMap,g=[],_=null,f=!1,R=null,M=null,E=null,P=null,D=null,U=null,J=null,b=!1,L=null,te=null,se=null,B=null,X=null,de.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),o.reset(),d.reset(),u.reset()}return{buffers:{color:o,depth:d,stencil:u},enable:Ne,disable:be,bindFramebuffer:We,drawBuffers:xt,useProgram:Fe,setBlending:Te,setMaterial:Oe,setFlipSided:Le,setCullFace:Qe,setLineWidth:Re,setPolygonOffset:Ie,setScissorTest:Ke,activeTexture:Ye,bindTexture:ct,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:N,texImage2D:ye,texImage3D:_e,updateUBOMapping:xe,uniformBlockBinding:Be,texStorage2D:ae,texStorage3D:Z,texSubImage2D:ne,texSubImage3D:ie,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Ae,viewport:ve,reset:Ze}}function f_(i,e,t,n,s,r,a){const o=s.isWebGL2,d=s.maxTextures,u=s.maxCubemapSize,h=s.maxTextureSize,p=s.maxSamples,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let g;const _=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(A,y){return f?new OffscreenCanvas(A,y):as("canvas")}function M(A,y,N,ne){let ie=1;if((A.width>ne||A.height>ne)&&(ie=ne/Math.max(A.width,A.height)),ie<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ce=y?$s:Math.floor,me=ce(ie*A.width),ae=ce(ie*A.height);g===void 0&&(g=R(me,ae));const Z=N?R(me,ae):g;return Z.width=me,Z.height=ae,Z.getContext("2d").drawImage(A,0,0,me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+me+"x"+ae+")."),Z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function E(A){return Qr(A.width)&&Qr(A.height)}function P(A){return o?!1:A.wrapS!==Yt||A.wrapT!==Yt||A.minFilter!==At&&A.minFilter!==Ct}function D(A,y){return A.generateMipmaps&&y&&A.minFilter!==At&&A.minFilter!==Ct}function U(A){i.generateMipmap(A)}function J(A,y,N,ne,ie=!1){if(o===!1)return y;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=y;return y===i.RED&&(N===i.FLOAT&&(ce=i.R32F),N===i.HALF_FLOAT&&(ce=i.R16F),N===i.UNSIGNED_BYTE&&(ce=i.R8)),y===i.RG&&(N===i.FLOAT&&(ce=i.RG32F),N===i.HALF_FLOAT&&(ce=i.RG16F),N===i.UNSIGNED_BYTE&&(ce=i.RG8)),y===i.RGBA&&(N===i.FLOAT&&(ce=i.RGBA32F),N===i.HALF_FLOAT&&(ce=i.RGBA16F),N===i.UNSIGNED_BYTE&&(ce=ne===He&&ie===!1?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)),(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function b(A,y,N){return D(A,N)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Ct?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function L(A){return A===At||A===oa||A===hr?i.NEAREST:i.LINEAR}function te(A){const y=A.target;y.removeEventListener("dispose",te),B(y),y.isVideoTexture&&w.delete(y)}function se(A){const y=A.target;y.removeEventListener("dispose",se),V(y)}function B(A){const y=n.get(A);if(y.__webglInit===void 0)return;const N=A.source,ne=_.get(N);if(ne){const ie=ne[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&X(A),Object.keys(ne).length===0&&_.delete(N)}n.remove(A)}function X(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const N=A.source,ne=_.get(N);delete ne[y.__cacheKey],a.memory.textures--}function V(A){const y=A.texture,N=n.get(A),ne=n.get(y);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)i.deleteFramebuffer(N.__webglFramebuffer[ie]),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[ie]);else{if(i.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ie=0;ie<N.__webglColorRenderbuffer.length;ie++)N.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[ie]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,ce=y.length;ie<ce;ie++){const me=n.get(y[ie]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(y[ie])}n.remove(y),n.remove(A)}let $=0;function K(){$=0}function Q(){const A=$;return A>=d&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+d),$+=1,A}function oe(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function ee(A,y){const N=n.get(A);if(A.isVideoTexture&&Ye(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(N,A,y);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+y)}function H(A,y){const N=n.get(A);if(A.version>0&&N.__version!==A.version){We(N,A,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+y)}function q(A,y){const N=n.get(A);if(A.version>0&&N.__version!==A.version){We(N,A,y);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+y)}function de(A,y){const N=n.get(A);if(A.version>0&&N.__version!==A.version){xt(N,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+y)}const le={[Kr]:i.REPEAT,[Yt]:i.CLAMP_TO_EDGE,[Zr]:i.MIRRORED_REPEAT},fe={[At]:i.NEAREST,[oa]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[Dd]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},Me={[jd]:i.NEVER,[eh]:i.ALWAYS,[Yd]:i.LESS,[Kd]:i.LEQUAL,[$d]:i.EQUAL,[Qd]:i.GEQUAL,[Zd]:i.GREATER,[Jd]:i.NOTEQUAL};function Ne(A,y,N){if(N?(i.texParameteri(A,i.TEXTURE_WRAP_S,le[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,le[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,le[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,fe[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,fe[y.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==Yt||y.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,L(y.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,L(y.minFilter)),y.minFilter!==At&&y.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===At||y.minFilter!==hr&&y.minFilter!==ss||y.type===Tn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===rs&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function be(A,y){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",te));const ne=y.source;let ie=_.get(ne);ie===void 0&&(ie={},_.set(ne,ie));const ce=oe(y);if(ce!==A.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),ie[ce].usedTimes++;const me=ie[A.__cacheKey];me!==void 0&&(ie[A.__cacheKey].usedTimes--,me.usedTimes===0&&X(y)),A.__cacheKey=ce,A.__webglTexture=ie[ce].texture}return N}function We(A,y,N){let ne=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ne=i.TEXTURE_3D);const ie=be(A,y),ce=y.source;t.bindTexture(ne,A.__webglTexture,i.TEXTURE0+N);const me=n.get(ce);if(ce.version!==me.__version||ie===!0){t.activeTexture(i.TEXTURE0+N),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ae=P(y)&&E(y.image)===!1;let Z=M(y.image,ae,!1,h);Z=ct(y,Z);const ye=E(Z)||o,_e=r.convert(y.format,y.colorSpace);let Ae=r.convert(y.type),ve=J(y.internalFormat,_e,Ae,y.colorSpace);Ne(ne,y,ye);let xe;const Be=y.mipmaps,Ze=o&&y.isVideoTexture!==!0,I=me.__version===void 0||ie===!0,he=b(y,Z,ye);if(y.isDepthTexture)ve=i.DEPTH_COMPONENT,o?y.type===Tn?ve=i.DEPTH_COMPONENT32F:y.type===En?ve=i.DEPTH_COMPONENT24:y.type===Vn?ve=i.DEPTH24_STENCIL8:ve=i.DEPTH_COMPONENT16:y.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Wn&&ve===i.DEPTH_COMPONENT&&y.type!==oo&&y.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=En,Ae=r.convert(y.type)),y.format===Ii&&ve===i.DEPTH_COMPONENT&&(ve=i.DEPTH_STENCIL,y.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Vn,Ae=r.convert(y.type))),I&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,ve,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,_e,Ae,null));else if(y.isDataTexture)if(Be.length>0&&ye){Ze&&I&&t.texStorage2D(i.TEXTURE_2D,he,ve,Be[0].width,Be[0].height);for(let G=0,re=Be.length;G<re;G++)xe=Be[G],Ze?t.texSubImage2D(i.TEXTURE_2D,G,0,0,xe.width,xe.height,_e,Ae,xe.data):t.texImage2D(i.TEXTURE_2D,G,ve,xe.width,xe.height,0,_e,Ae,xe.data);y.generateMipmaps=!1}else Ze?(I&&t.texStorage2D(i.TEXTURE_2D,he,ve,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,_e,Ae,Z.data)):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,_e,Ae,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ze&&I&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,ve,Be[0].width,Be[0].height,Z.depth);for(let G=0,re=Be.length;G<re;G++)xe=Be[G],y.format!==$t?_e!==null?Ze?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,xe.width,xe.height,Z.depth,_e,xe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,ve,xe.width,xe.height,Z.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,xe.width,xe.height,Z.depth,_e,Ae,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,ve,xe.width,xe.height,Z.depth,0,_e,Ae,xe.data)}else{Ze&&I&&t.texStorage2D(i.TEXTURE_2D,he,ve,Be[0].width,Be[0].height);for(let G=0,re=Be.length;G<re;G++)xe=Be[G],y.format!==$t?_e!==null?Ze?t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,xe.width,xe.height,_e,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,G,ve,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(i.TEXTURE_2D,G,0,0,xe.width,xe.height,_e,Ae,xe.data):t.texImage2D(i.TEXTURE_2D,G,ve,xe.width,xe.height,0,_e,Ae,xe.data)}else if(y.isDataArrayTexture)Ze?(I&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,ve,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,_e,Ae,Z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,Z.width,Z.height,Z.depth,0,_e,Ae,Z.data);else if(y.isData3DTexture)Ze?(I&&t.texStorage3D(i.TEXTURE_3D,he,ve,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,_e,Ae,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ve,Z.width,Z.height,Z.depth,0,_e,Ae,Z.data);else if(y.isFramebufferTexture){if(I)if(Ze)t.texStorage2D(i.TEXTURE_2D,he,ve,Z.width,Z.height);else{let G=Z.width,re=Z.height;for(let pe=0;pe<he;pe++)t.texImage2D(i.TEXTURE_2D,pe,ve,G,re,0,_e,Ae,null),G>>=1,re>>=1}}else if(Be.length>0&&ye){Ze&&I&&t.texStorage2D(i.TEXTURE_2D,he,ve,Be[0].width,Be[0].height);for(let G=0,re=Be.length;G<re;G++)xe=Be[G],Ze?t.texSubImage2D(i.TEXTURE_2D,G,0,0,_e,Ae,xe):t.texImage2D(i.TEXTURE_2D,G,ve,_e,Ae,xe);y.generateMipmaps=!1}else Ze?(I&&t.texStorage2D(i.TEXTURE_2D,he,ve,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Ae,Z)):t.texImage2D(i.TEXTURE_2D,0,ve,_e,Ae,Z);D(y,ye)&&U(ne),me.__version=ce.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function xt(A,y,N){if(y.image.length!==6)return;const ne=be(A,y),ie=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const ce=n.get(ie);if(ie.version!==ce.__version||ne===!0){t.activeTexture(i.TEXTURE0+N),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const me=y.isCompressedTexture||y.image[0].isCompressedTexture,ae=y.image[0]&&y.image[0].isDataTexture,Z=[];for(let G=0;G<6;G++)!me&&!ae?Z[G]=M(y.image[G],!1,!0,u):Z[G]=ae?y.image[G].image:y.image[G],Z[G]=ct(y,Z[G]);const ye=Z[0],_e=E(ye)||o,Ae=r.convert(y.format,y.colorSpace),ve=r.convert(y.type),xe=J(y.internalFormat,Ae,ve,y.colorSpace),Be=o&&y.isVideoTexture!==!0,Ze=ce.__version===void 0||ne===!0;let I=b(y,ye,_e);Ne(i.TEXTURE_CUBE_MAP,y,_e);let he;if(me){Be&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,I,xe,ye.width,ye.height);for(let G=0;G<6;G++){he=Z[G].mipmaps;for(let re=0;re<he.length;re++){const pe=he[re];y.format!==$t?Ae!==null?Be?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,0,0,pe.width,pe.height,Ae,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,0,0,pe.width,pe.height,Ae,ve,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,xe,pe.width,pe.height,0,Ae,ve,pe.data)}}}else{he=y.mipmaps,Be&&Ze&&(he.length>0&&I++,t.texStorage2D(i.TEXTURE_CUBE_MAP,I,xe,Z[0].width,Z[0].height));for(let G=0;G<6;G++)if(ae){Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Z[G].width,Z[G].height,Ae,ve,Z[G].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,xe,Z[G].width,Z[G].height,0,Ae,ve,Z[G].data);for(let re=0;re<he.length;re++){const qe=he[re].image[G].image;Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,0,0,qe.width,qe.height,Ae,ve,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,xe,qe.width,qe.height,0,Ae,ve,qe.data)}}else{Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ae,ve,Z[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,xe,Ae,ve,Z[G]);for(let re=0;re<he.length;re++){const pe=he[re];Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,0,0,Ae,ve,pe.image[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,xe,Ae,ve,pe.image[G])}}}D(y,_e)&&U(i.TEXTURE_CUBE_MAP),ce.__version=ie.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Fe(A,y,N,ne,ie){const ce=r.convert(N.format,N.colorSpace),me=r.convert(N.type),ae=J(N.internalFormat,ce,me,N.colorSpace);n.get(y).__hasExternalTextures||(ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,ae,y.width,y.height,y.depth,0,ce,me,null):t.texImage2D(ie,0,ae,y.width,y.height,0,ce,me,null)),t.bindFramebuffer(i.FRAMEBUFFER,A),Ke(y)?m.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ie,n.get(N).__webglTexture,0,Ie(y)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ie,n.get(N).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(A,y,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let ne=i.DEPTH_COMPONENT16;if(N||Ke(y)){const ie=y.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Tn?ne=i.DEPTH_COMPONENT32F:ie.type===En&&(ne=i.DEPTH_COMPONENT24));const ce=Ie(y);Ke(y)?m.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ne,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ne,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const ne=Ie(y);N&&Ke(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,y.width,y.height):Ke(y)?m.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const ne=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0;ie<ne.length;ie++){const ce=ne[ie],me=r.convert(ce.format,ce.colorSpace),ae=r.convert(ce.type),Z=J(ce.internalFormat,me,ae,ce.colorSpace),ye=Ie(y);N&&Ke(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Z,y.width,y.height):Ke(y)?m.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ee(y.depthTexture,0);const ne=n.get(y.depthTexture).__webglTexture,ie=Ie(y);if(y.depthTexture.format===Wn)Ke(y)?m.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(y.depthTexture.format===Ii)Ke(y)?m.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Te(A){const y=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");_t(y.__webglFramebuffer,A)}else if(N){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]=i.createRenderbuffer(),F(y.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),F(y.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(A,y,N){const ne=n.get(A);y!==void 0&&Fe(ne.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),N!==void 0&&Te(A)}function Le(A){const y=A.texture,N=n.get(A),ne=n.get(y);A.addEventListener("dispose",se),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=y.version,a.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,ce=A.isWebGLMultipleRenderTargets===!0,me=E(A)||o;if(ie){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)N.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(N.__webglFramebuffer=i.createFramebuffer(),ce)if(s.drawBuffers){const ae=A.texture;for(let Z=0,ye=ae.length;Z<ye;Z++){const _e=n.get(ae[Z]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Ke(A)===!1){const ae=ce?y:[y];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Z=0;Z<ae.length;Z++){const ye=ae[Z];N.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Z]);const _e=r.convert(ye.format,ye.colorSpace),Ae=r.convert(ye.type),ve=J(ye.internalFormat,_e,Ae,ye.colorSpace,A.isXRRenderTarget===!0),xe=Ie(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,N.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),F(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,y,me);for(let ae=0;ae<6;ae++)Fe(N.__webglFramebuffer[ae],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae);D(y,me)&&U(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ae=A.texture;for(let Z=0,ye=ae.length;Z<ye;Z++){const _e=ae[Z],Ae=n.get(_e);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),Ne(i.TEXTURE_2D,_e,me),Fe(N.__webglFramebuffer,A,_e,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D),D(_e,me)&&U(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ae=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ne.__webglTexture),Ne(ae,y,me),Fe(N.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,ae),D(y,me)&&U(ae),t.unbindTexture()}A.depthBuffer&&Te(A)}function Qe(A){const y=E(A)||o,N=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,ie=N.length;ne<ie;ne++){const ce=N[ne];if(D(ce,y)){const me=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(ce).__webglTexture;t.bindTexture(me,ae),U(me),t.unbindTexture()}}}function Re(A){if(o&&A.samples>0&&Ke(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],N=A.width,ne=A.height;let ie=i.COLOR_BUFFER_BIT;const ce=[],me=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(A),Z=A.isWebGLMultipleRenderTargets===!0;if(Z)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){ce.push(i.COLOR_ATTACHMENT0+ye),A.depthBuffer&&ce.push(me);const _e=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(_e===!1&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),Z&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ye]),_e===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),Z){const Ae=n.get(y[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,N,ne,0,0,N,ne,ie,i.NEAREST),x&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ye]);const _e=n.get(y[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ie(A){return Math.min(p,A.samples)}function Ke(A){const y=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ye(A){const y=a.render.frame;w.get(A)!==y&&(w.set(A,y),A.update())}function ct(A,y){const N=A.colorSpace,ne=A.format,ie=A.type;return A.isCompressedTexture===!0||A.format===Jr||N!==Zt&&N!==qn&&(N===He?o===!1?e.has("EXT_sRGB")===!0&&ne===$t?(A.format=Jr,A.minFilter=Ct,A.generateMipmaps=!1):y=jl.sRGBToLinear(y):(ne!==$t||ie!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}this.allocateTextureUnit=Q,this.resetTextureUnits=K,this.setTexture2D=ee,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=de,this.rebindTextures=Oe,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Ke}function p_(i,e,t){const n=t.isWebGL2;function s(r,a=qn){let o;if(r===Rn)return i.UNSIGNED_BYTE;if(r===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===zl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Ud)return i.BYTE;if(r===Od)return i.SHORT;if(r===oo)return i.UNSIGNED_SHORT;if(r===Fl)return i.INT;if(r===En)return i.UNSIGNED_INT;if(r===Tn)return i.FLOAT;if(r===rs)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Nd)return i.ALPHA;if(r===$t)return i.RGBA;if(r===Fd)return i.LUMINANCE;if(r===Bd)return i.LUMINANCE_ALPHA;if(r===Wn)return i.DEPTH_COMPONENT;if(r===Ii)return i.DEPTH_STENCIL;if(r===Jr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===zd)return i.RED;if(r===kl)return i.RED_INTEGER;if(r===kd)return i.RG;if(r===Hl)return i.RG_INTEGER;if(r===Gl)return i.RGBA_INTEGER;if(r===fr||r===pr||r===mr||r===gr)if(a===He)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===fr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===fr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===aa||r===la||r===ca||r===ua)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===aa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===la)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ca)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ua)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===da||r===ha)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===da)return a===He?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ha)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fa||r===pa||r===ma||r===ga||r===_a||r===va||r===xa||r===wa||r===Ma||r===ya||r===Sa||r===ba||r===Ea||r===Ta)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===fa)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pa)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ma)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ga)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_a)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===va)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xa)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wa)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ma)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ya)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sa)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ba)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ea)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ta)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_r)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===_r)return a===He?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Gd||r===Aa||r===Ca||r===Ra)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===_r)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Aa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ca)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ra)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class m_ extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gs extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g_={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,d=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),f=this._getHandJoint(u,g);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=h.position.distanceTo(p.position),x=.02,w=.005;u.inputState.pinching&&m>x+w?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=x-w&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(d.matrix.fromArray(r.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,r.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(r.linearVelocity)):d.hasLinearVelocity=!1,r.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(r.angularVelocity)):d.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g_)))}return o!==null&&(o.visible=s!==null),d!==null&&(d.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class __ extends Pt{constructor(e,t,n,s,r,a,o,d,u,h){if(h=h!==void 0?h:Wn,h!==Wn&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wn&&(n=En),n===void 0&&h===Ii&&(n=Vn),super(null,s,r,a,o,d,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=d!==void 0?d:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class v_ extends Oi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",d=1,u=null,h=null,p=null,m=null,x=null,w=null;const g=t.getContextAttributes();let _=null,f=null;const R=[],M=[],E=new Nt;E.layers.enable(1),E.viewport=new it;const P=new Nt;P.layers.enable(2),P.viewport=new it;const D=[E,P],U=new m_;U.layers.enable(1),U.layers.enable(2);let J=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let q=R[H];return q===void 0&&(q=new zr,R[H]=q),q.getTargetRaySpace()},this.getControllerGrip=function(H){let q=R[H];return q===void 0&&(q=new zr,R[H]=q),q.getGripSpace()},this.getHand=function(H){let q=R[H];return q===void 0&&(q=new zr,R[H]=q),q.getHandSpace()};function L(H){const q=M.indexOf(H.inputSource);if(q===-1)return;const de=R[q];de!==void 0&&(de.update(H.inputSource,H.frame,u||a),de.dispatchEvent({type:H.type,data:H.inputSource}))}function te(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",se);for(let H=0;H<R.length;H++){const q=M[H];q!==null&&(M[H]=null,R[H].disconnect(q))}J=null,b=null,e.setRenderTarget(_),x=null,m=null,p=null,s=null,f=null,ee.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return p},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",te),s.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:x}),f=new $n(x.framebufferWidth,x.framebufferHeight,{format:$t,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let q=null,de=null,le=null;g.depth&&(le=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=g.stencil?Ii:Wn,de=g.stencil?Vn:En);const fe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};p=new XRWebGLBinding(s,t),m=p.createProjectionLayer(fe),s.updateRenderState({layers:[m]}),f=new $n(m.textureWidth,m.textureHeight,{format:$t,type:Rn,depthTexture:new __(m.textureWidth,m.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Me=e.properties.get(f);Me.__ignoreDepthValues=m.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(d),u=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function se(H){for(let q=0;q<H.removed.length;q++){const de=H.removed[q],le=M.indexOf(de);le>=0&&(M[le]=null,R[le].disconnect(de))}for(let q=0;q<H.added.length;q++){const de=H.added[q];let le=M.indexOf(de);if(le===-1){for(let Me=0;Me<R.length;Me++)if(Me>=M.length){M.push(de),le=Me;break}else if(M[Me]===null){M[Me]=de,le=Me;break}if(le===-1)break}const fe=R[le];fe&&fe.connect(de)}}const B=new C,X=new C;function V(H,q,de){B.setFromMatrixPosition(q.matrixWorld),X.setFromMatrixPosition(de.matrixWorld);const le=B.distanceTo(X),fe=q.projectionMatrix.elements,Me=de.projectionMatrix.elements,Ne=fe[14]/(fe[10]-1),be=fe[14]/(fe[10]+1),We=(fe[9]+1)/fe[5],xt=(fe[9]-1)/fe[5],Fe=(fe[8]-1)/fe[0],F=(Me[8]+1)/Me[0],_t=Ne*Fe,Te=Ne*F,Oe=le/(-Fe+F),Le=Oe*-Fe;q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Le),H.translateZ(Oe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Qe=Ne+Oe,Re=be+Oe,Ie=_t-Le,Ke=Te+(le-Le),Ye=We*be/Re*Qe,ct=xt*be/Re*Qe;H.projectionMatrix.makePerspective(Ie,Ke,Ye,ct,Qe,Re),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function $(H,q){q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;U.near=P.near=E.near=H.near,U.far=P.far=E.far=H.far,(J!==U.near||b!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),J=U.near,b=U.far);const q=H.parent,de=U.cameras;$(U,q);for(let le=0;le<de.length;le++)$(de[le],q);de.length===2?V(U,E,P):U.projectionMatrix.copy(E.projectionMatrix),K(H,U,q)};function K(H,q,de){de===null?H.matrix.copy(q.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const le=H.children;for(let fe=0,Me=le.length;fe<Me;fe++)le[fe].updateMatrixWorld(!0);H.projectionMatrix.copy(q.projectionMatrix),H.projectionMatrixInverse.copy(q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=os*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(m===null&&x===null))return d},this.setFoveation=function(H){d=H,m!==null&&(m.fixedFoveation=H),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=H)};let Q=null;function oe(H,q){if(h=q.getViewerPose(u||a),w=q,h!==null){const de=h.views;x!==null&&(e.setRenderTargetFramebuffer(f,x.framebuffer),e.setRenderTarget(f));let le=!1;de.length!==U.cameras.length&&(U.cameras.length=0,le=!0);for(let fe=0;fe<de.length;fe++){const Me=de[fe];let Ne=null;if(x!==null)Ne=x.getViewport(Me);else{const We=p.getViewSubImage(m,Me);Ne=We.viewport,fe===0&&(e.setRenderTargetTextures(f,We.colorTexture,m.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let be=D[fe];be===void 0&&(be=new Nt,be.layers.enable(fe),be.viewport=new it,D[fe]=be),be.matrix.fromArray(Me.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Me.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),fe===0&&(U.matrix.copy(be.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),le===!0&&U.cameras.push(be)}}for(let de=0;de<R.length;de++){const le=M[de],fe=R[de];le!==null&&fe!==void 0&&fe.update(le,q,u||a)}Q&&Q(H,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),w=null}const ee=new nc;ee.setAnimationLoop(oe),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}}function x_(i,e){function t(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,Ql(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,R,M,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(_,f):f.isMeshToonMaterial?(r(_,f),p(_,f)):f.isMeshPhongMaterial?(r(_,f),h(_,f)):f.isMeshStandardMaterial?(r(_,f),m(_,f),f.isMeshPhysicalMaterial&&x(_,f,E)):f.isMeshMatcapMaterial?(r(_,f),w(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),g(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(a(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?d(_,f,R,M):f.isSpriteMaterial?u(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,t(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===Rt&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,t(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===Rt&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,t(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,t(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const R=e.get(f).envMap;if(R&&(_.envMap.value=R,_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap){_.lightMap.value=f.lightMap;const M=i.useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=f.lightMapIntensity*M,t(f.lightMap,_.lightMapTransform)}f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,_.aoMapTransform))}function a(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function d(_,f,R,M){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*R,_.scale.value=M*.5,f.map&&(_.map.value=f.map,t(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function h(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function p(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function m(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,_.roughnessMapTransform)),e.get(f).envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function x(_,f,R){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&_.clearcoatNormalScale.value.negate())),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,f){f.matcap&&(_.matcap.value=f.matcap)}function g(_,f){const R=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w_(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(R,M){const E=M.program;n.uniformBlockBinding(R,E)}function u(R,M){let E=s[R.id];E===void 0&&(w(R),E=h(R),s[R.id]=E,R.addEventListener("dispose",_));const P=M.program;n.updateUBOMapping(R,P);const D=e.render.frame;r[R.id]!==D&&(m(R),r[R.id]=D)}function h(R){const M=p();R.__bindingPointIndex=M;const E=i.createBuffer(),P=R.__size,D=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function p(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const M=s[R.id],E=R.uniforms,P=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let D=0,U=E.length;D<U;D++){const J=E[D];if(x(J,D,P)===!0){const b=J.__offset,L=Array.isArray(J.value)?J.value:[J.value];let te=0;for(let se=0;se<L.length;se++){const B=L[se],X=g(B);typeof B=="number"?(J.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,b+te,J.__data)):B.isMatrix3?(J.__data[0]=B.elements[0],J.__data[1]=B.elements[1],J.__data[2]=B.elements[2],J.__data[3]=B.elements[0],J.__data[4]=B.elements[3],J.__data[5]=B.elements[4],J.__data[6]=B.elements[5],J.__data[7]=B.elements[0],J.__data[8]=B.elements[6],J.__data[9]=B.elements[7],J.__data[10]=B.elements[8],J.__data[11]=B.elements[0]):(B.toArray(J.__data,te),te+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,b,J.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(R,M,E){const P=R.value;if(E[M]===void 0){if(typeof P=="number")E[M]=P;else{const D=Array.isArray(P)?P:[P],U=[];for(let J=0;J<D.length;J++)U.push(D[J].clone());E[M]=U}return!0}else if(typeof P=="number"){if(E[M]!==P)return E[M]=P,!0}else{const D=Array.isArray(E[M])?E[M]:[E[M]],U=Array.isArray(P)?P:[P];for(let J=0;J<D.length;J++){const b=D[J];if(b.equals(U[J])===!1)return b.copy(U[J]),!0}}return!1}function w(R){const M=R.uniforms;let E=0;const P=16;let D=0;for(let U=0,J=M.length;U<J;U++){const b=M[U],L={boundary:0,storage:0},te=Array.isArray(b.value)?b.value:[b.value];for(let se=0,B=te.length;se<B;se++){const X=te[se],V=g(X);L.boundary+=V.boundary,L.storage+=V.storage}if(b.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=E,U>0){D=E%P;const se=P-D;D!==0&&se-L.boundary<0&&(E+=P-D,b.__offset=E)}E+=L.storage}return D=E%P,D>0&&(E+=P-D),R.__size=E,R.__cache={},this}function g(R){const M={boundary:0,storage:0};return typeof R=="number"?(M.boundary=4,M.storage=4):R.isVector2?(M.boundary=8,M.storage=8):R.isVector3||R.isColor?(M.boundary=16,M.storage=12):R.isVector4?(M.boundary=16,M.storage=16):R.isMatrix3?(M.boundary=48,M.storage=48):R.isMatrix4?(M.boundary=64,M.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),M}function _(R){const M=R.target;M.removeEventListener("dispose",_);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:d,update:u,dispose:f}}function M_(){const i=as("canvas");return i.style.display="block",i}class ac{constructor(e={}){const{canvas:t=M_(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=a;const x=new Uint32Array(4),w=new Int32Array(4);let g=null,_=null;const f=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=He,this.useLegacyLights=!0,this.toneMapping=vn,this.toneMappingExposure=1;const M=this;let E=!1,P=0,D=0,U=null,J=-1,b=null;const L=new it,te=new it;let se=null;const B=new $e(0);let X=0,V=t.width,$=t.height,K=1,Q=null,oe=null;const ee=new it(0,0,V,$),H=new it(0,0,V,$);let q=!1;const de=new uo;let le=!1,fe=!1,Me=null;const Ne=new ht,be=new Xe,We=new C,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return U===null?K:1}let F=n;function _t(S,z){for(let j=0;j<S.length;j++){const O=S[j],Y=t.getContext(O,z);if(Y!==null)return Y}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:d,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${so}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",re,!1),F===null){const z=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&z.shift(),F=_t(z,S),F===null)throw _t(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Te,Oe,Le,Qe,Re,Ie,Ke,Ye,ct,A,y,N,ne,ie,ce,me,ae,Z,ye,_e,Ae,ve,xe,Be;function Ze(){Te=new Lm(F),Oe=new bm(F,Te,e),Te.init(Oe),ve=new p_(F,Te,Oe),Le=new h_(F,Te,Oe),Qe=new Um(F),Re=new Jg,Ie=new f_(F,Te,Le,Re,Oe,ve,Qe),Ke=new Tm(M),Ye=new Pm(M),ct=new Gh(F,Oe),xe=new ym(F,Te,ct,Oe),A=new Im(F,ct,Qe,xe),y=new Bm(F,A,ct,Qe),ye=new Fm(F,Oe,Ie),me=new Em(Re),N=new Zg(M,Ke,Ye,Te,Oe,xe,me),ne=new x_(M,Re),ie=new e_,ce=new o_(Te,Oe),Z=new Mm(M,Ke,Ye,Le,y,m,d),ae=new d_(M,y,Oe),Be=new w_(F,Qe,Oe,Le),_e=new Sm(F,Te,Qe,Oe),Ae=new Dm(F,Te,Qe,Oe),Qe.programs=N.programs,M.capabilities=Oe,M.extensions=Te,M.properties=Re,M.renderLists=ie,M.shadowMap=ae,M.state=Le,M.info=Qe}Ze();const I=new v_(M,F);this.xr=I,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(V,$,!1))},this.getSize=function(S){return S.set(V,$)},this.setSize=function(S,z,j=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,$=z,t.width=Math.floor(S*K),t.height=Math.floor(z*K),j===!0&&(t.style.width=S+"px",t.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(V*K,$*K).floor()},this.setDrawingBufferSize=function(S,z,j){V=S,$=z,K=j,t.width=Math.floor(S*j),t.height=Math.floor(z*j),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(ee)},this.setViewport=function(S,z,j,O){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,z,j,O),Le.viewport(L.copy(ee).multiplyScalar(K).floor())},this.getScissor=function(S){return S.copy(H)},this.setScissor=function(S,z,j,O){S.isVector4?H.set(S.x,S.y,S.z,S.w):H.set(S,z,j,O),Le.scissor(te.copy(H).multiplyScalar(K).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(S){Le.setScissorTest(q=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){oe=S},this.getClearColor=function(S){return S.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(S=!0,z=!0,j=!0){let O=0;if(S){let Y=!1;if(U!==null){const ge=U.texture.format;Y=ge===Gl||ge===Hl||ge===kl}if(Y){const ge=U.texture.type,Ee=ge===Rn||ge===En||ge===oo||ge===Vn||ge===Bl||ge===zl,Pe=Z.getClearColor(),Ce=Z.getClearAlpha(),ze=Pe.r,De=Pe.g,Se=Pe.b;Ee?(x[0]=ze,x[1]=De,x[2]=Se,x[3]=Ce,F.clearBufferuiv(F.COLOR,0,x)):(w[0]=ze,w[1]=De,w[2]=Se,w[3]=Ce,F.clearBufferiv(F.COLOR,0,w))}else O|=F.COLOR_BUFFER_BIT}z&&(O|=F.DEPTH_BUFFER_BIT),j&&(O|=F.STENCIL_BUFFER_BIT),F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ie.dispose(),ce.dispose(),Re.dispose(),Ke.dispose(),Ye.dispose(),y.dispose(),xe.dispose(),Be.dispose(),N.dispose(),I.dispose(),I.removeEventListener("sessionstart",Je),I.removeEventListener("sessionend",kt),Me&&(Me.dispose(),Me=null),wt.stop()};function he(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=Qe.autoReset,z=ae.enabled,j=ae.autoUpdate,O=ae.needsUpdate,Y=ae.type;Ze(),Qe.autoReset=S,ae.enabled=z,ae.autoUpdate=j,ae.needsUpdate=O,ae.type=Y}function re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pe(S){const z=S.target;z.removeEventListener("dispose",pe),qe(z)}function qe(S){et(S),Re.remove(S)}function et(S){const z=Re.get(S).programs;z!==void 0&&(z.forEach(function(j){N.releaseProgram(j)}),S.isShaderMaterial&&N.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,j,O,Y,ge){z===null&&(z=xt);const Ee=Y.isMesh&&Y.matrixWorld.determinant()<0,Pe=ir(S,z,j,O,Y);Le.setMaterial(O,Ee);let Ce=j.index,ze=1;O.wireframe===!0&&(Ce=A.getWireframeAttribute(j),ze=2);const De=j.drawRange,Se=j.attributes.position;let nt=De.start*ze,st=(De.start+De.count)*ze;ge!==null&&(nt=Math.max(nt,ge.start*ze),st=Math.min(st,(ge.start+ge.count)*ze)),Ce!==null?(nt=Math.max(nt,0),st=Math.min(st,Ce.count)):Se!=null&&(nt=Math.max(nt,0),st=Math.min(st,Se.count));const Dt=st-nt;if(Dt<0||Dt===1/0)return;xe.setup(Y,O,Pe,j,Ce);let Ht,at=_e;if(Ce!==null&&(Ht=ct.get(Ce),at=Ae,at.setIndex(Ht)),Y.isMesh)O.wireframe===!0?(Le.setLineWidth(O.wireframeLinewidth*Fe()),at.setMode(F.LINES)):at.setMode(F.TRIANGLES);else if(Y.isLine){let Ve=O.linewidth;Ve===void 0&&(Ve=1),Le.setLineWidth(Ve*Fe()),Y.isLineSegments?at.setMode(F.LINES):Y.isLineLoop?at.setMode(F.LINE_LOOP):at.setMode(F.LINE_STRIP)}else Y.isPoints?at.setMode(F.POINTS):Y.isSprite&&at.setMode(F.TRIANGLES);if(Y.isInstancedMesh)at.renderInstances(nt,Dt,Y.count);else if(j.isInstancedBufferGeometry){const Ve=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,zi=Math.min(j.instanceCount,Ve);at.renderInstances(nt,Dt,zi)}else at.render(nt,Dt)},this.compile=function(S,z){function j(O,Y,ge){O.transparent===!0&&O.side===Ft&&O.forceSinglePass===!1?(O.side=Rt,O.needsUpdate=!0,ei(O,Y,ge),O.side=Kt,O.needsUpdate=!0,ei(O,Y,ge),O.side=Ft):ei(O,Y,ge)}_=ce.get(S),_.init(),R.push(_),S.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights(M.useLegacyLights),S.traverse(function(O){const Y=O.material;if(Y)if(Array.isArray(Y))for(let ge=0;ge<Y.length;ge++){const Ee=Y[ge];j(Ee,S,O)}else j(Y,S,O)}),R.pop(),_=null};let ft=null;function zt(S){ft&&ft(S)}function Je(){wt.stop()}function kt(){wt.start()}const wt=new nc;wt.setAnimationLoop(zt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(S){ft=S,I.setAnimationLoop(S),S===null?wt.stop():wt.start()},I.addEventListener("sessionstart",Je),I.addEventListener("sessionend",kt),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(z),z=I.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,z,U),_=ce.get(S,R.length),_.init(),R.push(_),Ne.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),de.setFromProjectionMatrix(Ne),fe=this.localClippingEnabled,le=me.init(this.clippingPlanes,fe),g=ie.get(S,f.length),g.init(),f.push(g),Jt(S,z,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(Q,oe),this.info.render.frame++,le===!0&&me.beginShadows();const j=_.state.shadowsArray;if(ae.render(j,S,z),le===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(g,S),_.setupLights(M.useLegacyLights),z.isArrayCamera){const O=z.cameras;for(let Y=0,ge=O.length;Y<ge;Y++){const Ee=O[Y];hs(g,S,Ee,Ee.viewport)}}else hs(g,S,z);U!==null&&(Ie.updateMultisampleRenderTarget(U),Ie.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(M,S,z),xe.resetDefaultState(),J=-1,b=null,R.pop(),R.length>0?_=R[R.length-1]:_=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Jt(S,z,j,O){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)_.pushLight(S),S.castShadow&&_.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||de.intersectsSprite(S)){O&&We.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);const Ee=y.update(S),Pe=S.material;Pe.visible&&g.push(S,Ee,Pe,j,We.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||de.intersectsObject(S))){const Ee=y.update(S),Pe=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),We.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),We.copy(Ee.boundingSphere.center)),We.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(Pe)){const Ce=Ee.groups;for(let ze=0,De=Ce.length;ze<De;ze++){const Se=Ce[ze],nt=Pe[Se.materialIndex];nt&&nt.visible&&g.push(S,Ee,nt,j,We.z,Se)}}else Pe.visible&&g.push(S,Ee,Pe,j,We.z,null)}}const ge=S.children;for(let Ee=0,Pe=ge.length;Ee<Pe;Ee++)Jt(ge[Ee],z,j,O)}function hs(S,z,j,O){const Y=S.opaque,ge=S.transmissive,Ee=S.transparent;_.setupLightsView(j),le===!0&&me.setGlobalState(M.clippingPlanes,j),ge.length>0&&nr(Y,ge,z,j),O&&Le.viewport(L.copy(O)),Y.length>0&&Jn(Y,z,j),ge.length>0&&Jn(ge,z,j),Ee.length>0&&Jn(Ee,z,j),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function nr(S,z,j,O){const Y=Oe.isWebGL2;Me===null&&(Me=new $n(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?rs:Rn,minFilter:ss,samples:Y?4:0})),M.getDrawingBufferSize(be),Y?Me.setSize(be.x,be.y):Me.setSize($s(be.x),$s(be.y));const ge=M.getRenderTarget();M.setRenderTarget(Me),M.getClearColor(B),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear();const Ee=M.toneMapping;M.toneMapping=vn,Jn(S,j,O),Ie.updateMultisampleRenderTarget(Me),Ie.updateRenderTargetMipmap(Me);let Pe=!1;for(let Ce=0,ze=z.length;Ce<ze;Ce++){const De=z[Ce],Se=De.object,nt=De.geometry,st=De.material,Dt=De.group;if(st.side===Ft&&Se.layers.test(O.layers)){const Ht=st.side;st.side=Rt,st.needsUpdate=!0,Qn(Se,j,O,nt,st,Dt),st.side=Ht,st.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ie.updateMultisampleRenderTarget(Me),Ie.updateRenderTargetMipmap(Me)),M.setRenderTarget(ge),M.setClearColor(B,X),M.toneMapping=Ee}function Jn(S,z,j){const O=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,ge=S.length;Y<ge;Y++){const Ee=S[Y],Pe=Ee.object,Ce=Ee.geometry,ze=O===null?Ee.material:O,De=Ee.group;Pe.layers.test(j.layers)&&Qn(Pe,z,j,Ce,ze,De)}}function Qn(S,z,j,O,Y,ge){S.onBeforeRender(M,z,j,O,Y,ge),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(M,z,j,O,S,ge),Y.transparent===!0&&Y.side===Ft&&Y.forceSinglePass===!1?(Y.side=Rt,Y.needsUpdate=!0,M.renderBufferDirect(j,z,O,Y,S,ge),Y.side=Kt,Y.needsUpdate=!0,M.renderBufferDirect(j,z,O,Y,S,ge),Y.side=Ft):M.renderBufferDirect(j,z,O,Y,S,ge),S.onAfterRender(M,z,j,O,Y,ge)}function ei(S,z,j){z.isScene!==!0&&(z=xt);const O=Re.get(S),Y=_.state.lights,ge=_.state.shadowsArray,Ee=Y.state.version,Pe=N.getParameters(S,Y.state,ge,z,j),Ce=N.getProgramCacheKey(Pe);let ze=O.programs;O.environment=S.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(S.isMeshStandardMaterial?Ye:Ke).get(S.envMap||O.environment),ze===void 0&&(S.addEventListener("dispose",pe),ze=new Map,O.programs=ze);let De=ze.get(Ce);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===Ee)return fs(S,Pe),De}else Pe.uniforms=N.getUniforms(S),S.onBuild(j,Pe,M),S.onBeforeCompile(Pe,M),De=N.acquireProgram(Pe,Ce),ze.set(Ce,De),O.uniforms=Pe.uniforms;const Se=O.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=me.uniform),fs(S,Pe),O.needsLights=rr(S),O.lightsStateVersion=Ee,O.needsLights&&(Se.ambientLightColor.value=Y.state.ambient,Se.lightProbe.value=Y.state.probe,Se.directionalLights.value=Y.state.directional,Se.directionalLightShadows.value=Y.state.directionalShadow,Se.spotLights.value=Y.state.spot,Se.spotLightShadows.value=Y.state.spotShadow,Se.rectAreaLights.value=Y.state.rectArea,Se.ltc_1.value=Y.state.rectAreaLTC1,Se.ltc_2.value=Y.state.rectAreaLTC2,Se.pointLights.value=Y.state.point,Se.pointLightShadows.value=Y.state.pointShadow,Se.hemisphereLights.value=Y.state.hemi,Se.directionalShadowMap.value=Y.state.directionalShadowMap,Se.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Se.spotShadowMap.value=Y.state.spotShadowMap,Se.spotLightMatrix.value=Y.state.spotLightMatrix,Se.spotLightMap.value=Y.state.spotLightMap,Se.pointShadowMap.value=Y.state.pointShadowMap,Se.pointShadowMatrix.value=Y.state.pointShadowMatrix);const nt=De.getUniforms(),st=js.seqWithValue(nt.seq,Se);return O.currentProgram=De,O.uniformsList=st,De}function fs(S,z){const j=Re.get(S);j.outputColorSpace=z.outputColorSpace,j.instancing=z.instancing,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function ir(S,z,j,O,Y){z.isScene!==!0&&(z=xt),Ie.resetTextureUnits();const ge=z.fog,Ee=O.isMeshStandardMaterial?z.environment:null,Pe=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Zt,Ce=(O.isMeshStandardMaterial?Ye:Ke).get(O.envMap||Ee),ze=O.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,De=!!j.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!j.morphAttributes.position,nt=!!j.morphAttributes.normal,st=!!j.morphAttributes.color,Dt=O.toneMapped?M.toneMapping:vn,Ht=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,at=Ht!==void 0?Ht.length:0,Ve=Re.get(O),zi=_.state.lights;if(le===!0&&(fe===!0||S!==b)){const Et=S===b&&O.id===J;me.setState(O,S,Et)}let ut=!1;O.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==zi.state.version||Ve.outputColorSpace!==Pe||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Ce||O.fog===!0&&Ve.fog!==ge||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==me.numPlanes||Ve.numIntersection!==me.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==De||Ve.morphTargets!==Se||Ve.morphNormals!==nt||Ve.morphColors!==st||Ve.toneMapping!==Dt||Oe.isWebGL2===!0&&Ve.morphTargetsCount!==at)&&(ut=!0):(ut=!0,Ve.__version=O.version);let on=Ve.currentProgram;ut===!0&&(on=ei(O,z,Y));let ki=!1,Pn=!1,Hi=!1;const Mt=on.getUniforms(),an=Ve.uniforms;if(Le.useProgram(on.program)&&(ki=!0,Pn=!0,Hi=!0),O.id!==J&&(J=O.id,Pn=!0),ki||b!==S){if(Mt.setValue(F,"projectionMatrix",S.projectionMatrix),Oe.logarithmicDepthBuffer&&Mt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),b!==S&&(b=S,Pn=!0,Hi=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Et=Mt.map.cameraPosition;Et!==void 0&&Et.setValue(F,We.setFromMatrixPosition(S.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Mt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Y.isSkinnedMesh)&&Mt.setValue(F,"viewMatrix",S.matrixWorldInverse)}if(Y.isSkinnedMesh){Mt.setOptional(F,Y,"bindMatrix"),Mt.setOptional(F,Y,"bindMatrixInverse");const Et=Y.skeleton;Et&&(Oe.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),Mt.setValue(F,"boneTexture",Et.boneTexture,Ie),Mt.setValue(F,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gi=j.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0&&Oe.isWebGL2===!0)&&ye.update(Y,j,on),(Pn||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,Mt.setValue(F,"receiveShadow",Y.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(an.envMap.value=Ce,an.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Pn&&(Mt.setValue(F,"toneMappingExposure",M.toneMappingExposure),Ve.needsLights&&sr(an,Hi),ge&&O.fog===!0&&ne.refreshFogUniforms(an,ge),ne.refreshMaterialUniforms(an,O,K,$,Me),js.upload(F,Ve.uniformsList,an,Ie)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(js.upload(F,Ve.uniformsList,an,Ie),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Mt.setValue(F,"center",Y.center),Mt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Mt.setValue(F,"normalMatrix",Y.normalMatrix),Mt.setValue(F,"modelMatrix",Y.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Et=O.uniformsGroups;for(let Vi=0,ps=Et.length;Vi<ps;Vi++)if(Oe.isWebGL2){const ms=Et[Vi];Be.update(ms,on),Be.bind(ms,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function sr(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function rr(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,z,j){Re.get(S.texture).__webglTexture=z,Re.get(S.depthTexture).__webglTexture=j;const O=Re.get(S);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=j===void 0,O.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,z){const j=Re.get(S);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,j=0){U=S,P=z,D=j;let O=!0,Y=null,ge=!1,Ee=!1;if(S){const Ce=Re.get(S);Ce.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(F.FRAMEBUFFER,null),O=!1):Ce.__webglFramebuffer===void 0?Ie.setupRenderTarget(S):Ce.__hasExternalTextures&&Ie.rebindTextures(S,Re.get(S.texture).__webglTexture,Re.get(S.depthTexture).__webglTexture);const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const De=Re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Y=De[z],ge=!0):Oe.isWebGL2&&S.samples>0&&Ie.useMultisampledRTT(S)===!1?Y=Re.get(S).__webglMultisampledFramebuffer:Y=De,L.copy(S.viewport),te.copy(S.scissor),se=S.scissorTest}else L.copy(ee).multiplyScalar(K).floor(),te.copy(H).multiplyScalar(K).floor(),se=q;if(Le.bindFramebuffer(F.FRAMEBUFFER,Y)&&Oe.drawBuffers&&O&&Le.drawBuffers(S,Y),Le.viewport(L),Le.scissor(te),Le.setScissorTest(se),ge){const Ce=Re.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ce.__webglTexture,j)}else if(Ee){const Ce=Re.get(S.texture),ze=z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.__webglTexture,j||0,ze)}J=-1},this.readRenderTargetPixels=function(S,z,j,O,Y,ge,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){Le.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const Ce=S.texture,ze=Ce.format,De=Ce.type;if(ze!==$t&&ve.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Se=De===rs&&(Te.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Te.has("EXT_color_buffer_float"));if(De!==Rn&&ve.convert(De)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Tn&&(Oe.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Se){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-O&&j>=0&&j<=S.height-Y&&F.readPixels(z,j,O,Y,ve.convert(ze),ve.convert(De),ge)}finally{const Ce=U!==null?Re.get(U).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(S,z,j=0){const O=Math.pow(2,-j),Y=Math.floor(z.image.width*O),ge=Math.floor(z.image.height*O);Ie.setTexture2D(z,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,S.x,S.y,Y,ge),Le.unbindTexture()},this.copyTextureToTexture=function(S,z,j,O=0){const Y=z.image.width,ge=z.image.height,Ee=ve.convert(j.format),Pe=ve.convert(j.type);Ie.setTexture2D(j,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment),z.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,S.x,S.y,Y,ge,Ee,Pe,z.image.data):z.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,S.x,S.y,z.mipmaps[0].width,z.mipmaps[0].height,Ee,z.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,O,S.x,S.y,Ee,Pe,z.image),O===0&&j.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(S,z,j,O,Y=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=S.max.x-S.min.x+1,Ee=S.max.y-S.min.y+1,Pe=S.max.z-S.min.z+1,Ce=ve.convert(O.format),ze=ve.convert(O.type);let De;if(O.isData3DTexture)Ie.setTexture3D(O,0),De=F.TEXTURE_3D;else if(O.isDataArrayTexture)Ie.setTexture2DArray(O,0),De=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const Se=F.getParameter(F.UNPACK_ROW_LENGTH),nt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),st=F.getParameter(F.UNPACK_SKIP_PIXELS),Dt=F.getParameter(F.UNPACK_SKIP_ROWS),Ht=F.getParameter(F.UNPACK_SKIP_IMAGES),at=j.isCompressedTexture?j.mipmaps[0]:j.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,at.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,S.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,S.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,S.min.z),j.isDataTexture||j.isData3DTexture?F.texSubImage3D(De,Y,z.x,z.y,z.z,ge,Ee,Pe,Ce,ze,at.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(De,Y,z.x,z.y,z.z,ge,Ee,Pe,Ce,at.data)):F.texSubImage3D(De,Y,z.x,z.y,z.z,ge,Ee,Pe,Ce,ze,at),F.pixelStorei(F.UNPACK_ROW_LENGTH,Se),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,st),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ht),Y===0&&O.generateMipmaps&&F.generateMipmap(De),Le.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ie.setTextureCube(S,0):S.isData3DTexture?Ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ie.setTexture2DArray(S,0):Ie.setTexture2D(S,0),Le.unbindTexture()},this.resetState=function(){P=0,D=0,U=null,Le.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===He?Xn:Vl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xn?He:Zt}}class y_ extends ac{}y_.prototype.isWebGL1Renderer=!0;class S_ extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class lc extends Fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gl=new C,_l=new C,vl=new ht,kr=new lo,Vs=new Js;class b_ extends ot{constructor(e=new rn,t=new lc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)gl.fromBufferAttribute(t,s-1),_l.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=gl.distanceTo(_l);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Vs.radius+=r,e.ray.intersectsSphere(Vs)===!1)return;vl.copy(s).invert(),kr.copy(e.ray).applyMatrix4(vl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),d=o*o,u=new C,h=new C,p=new C,m=new C,x=this.isLineSegments?2:1,w=n.index,_=n.attributes.position;if(w!==null){const f=Math.max(0,a.start),R=Math.min(w.count,a.start+a.count);for(let M=f,E=R-1;M<E;M+=x){const P=w.getX(M),D=w.getX(M+1);if(u.fromBufferAttribute(_,P),h.fromBufferAttribute(_,D),kr.distanceSqToSegment(u,h,m,p)>d)continue;m.applyMatrix4(this.matrixWorld);const J=e.ray.origin.distanceTo(m);J<e.near||J>e.far||t.push({distance:J,point:p.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),R=Math.min(_.count,a.start+a.count);for(let M=f,E=R-1;M<E;M+=x){if(u.fromBufferAttribute(_,M),h.fromBufferAttribute(_,M+1),kr.distanceSqToSegment(u,h,m,p)>d)continue;m.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(m);D<e.near||D>e.far||t.push({distance:D,point:p.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const xl=new C,wl=new C;class cc extends b_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)xl.fromBufferAttribute(t,s),wl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xl.distanceTo(wl);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class E_ extends Pt{constructor(e,t,n,s,r,a,o,d,u){super(e,t,n,s,r,a,o,d,u),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Ct,this.magFilter=r!==void 0?r:Ct,this.generateMipmaps=!1;const h=this;function p(){h.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const Ws=new C,Xs=new C,Hr=new C,qs=new Wt;class uc extends rn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ai*t),a=e.getIndex(),o=e.getAttribute("position"),d=a?a.count:o.count,u=[0,0,0],h=["a","b","c"],p=new Array(3),m={},x=[];for(let w=0;w<d;w+=3){a?(u[0]=a.getX(w),u[1]=a.getX(w+1),u[2]=a.getX(w+2)):(u[0]=w,u[1]=w+1,u[2]=w+2);const{a:g,b:_,c:f}=qs;if(g.fromBufferAttribute(o,u[0]),_.fromBufferAttribute(o,u[1]),f.fromBufferAttribute(o,u[2]),qs.getNormal(Hr),p[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,p[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,p[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let R=0;R<3;R++){const M=(R+1)%3,E=p[R],P=p[M],D=qs[h[R]],U=qs[h[M]],J=`${E}_${P}`,b=`${P}_${E}`;b in m&&m[b]?(Hr.dot(m[b].normal)<=r&&(x.push(D.x,D.y,D.z),x.push(U.x,U.y,U.z)),m[b]=null):J in m||(m[J]={index0:u[R],index1:u[M],normal:Hr.clone()})}}for(const w in m)if(m[w]){const{index0:g,index1:_}=m[w];Ws.fromBufferAttribute(o,g),Xs.fromBufferAttribute(o,_),x.push(Ws.x,Ws.y,Ws.z),x.push(Xs.x,Xs.y,Xs.z)}this.setAttribute("position",new Bt(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class kn extends rn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(a+o,Math.PI);let u=0;const h=[],p=new C,m=new C,x=[],w=[],g=[],_=[];for(let f=0;f<=n;f++){const R=[],M=f/n;let E=0;f===0&&a===0?E=.5/t:f===n&&d===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){const D=P/t;p.x=-e*Math.cos(s+D*r)*Math.sin(a+M*o),p.y=e*Math.cos(a+M*o),p.z=e*Math.sin(s+D*r)*Math.sin(a+M*o),w.push(p.x,p.y,p.z),m.copy(p).normalize(),g.push(m.x,m.y,m.z),_.push(D+E,1-M),R.push(u++)}h.push(R)}for(let f=0;f<n;f++)for(let R=0;R<t;R++){const M=h[f][R+1],E=h[f][R],P=h[f+1][R],D=h[f+1][R+1];(f!==0||a>0)&&x.push(M,E,D),(f!==n-1||d<Math.PI)&&x.push(E,P,D)}this.setIndex(x),this.setAttribute("position",new Bt(w,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dc extends Fi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const to={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class T_{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,d;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return d?d(h):h},this.setURLModifier=function(h){return d=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){const p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=u.length;p<m;p+=2){const x=u[p],w=u[p+1];if(x.global&&(x.lastIndex=0),x.test(h))return w}return null}}}const A_=new T_;class fo{constructor(e){this.manager=e!==void 0?e:A_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fo.DEFAULT_MATERIAL_NAME="__DEFAULT";class C_ extends fo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=to.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=as("img");function d(){h(),to.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(p){h(),s&&s(p),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",d,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",d,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class R_ extends fo{constructor(e){super(e)}load(e,t,n,s){const r=new Pt,a=new C_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class hc extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Gr=new ht,Ml=new C,yl=new C;class P_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ml),yl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yl),t.updateMatrixWorld(),Gr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sl=new ht,Ki=new C,Vr=new C;class L_ extends P_{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ki.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ki),Vr.copy(n.position),Vr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vr),n.updateMatrixWorld(),s.makeTranslation(-Ki.x,-Ki.y,-Ki.z),Sl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl)}}class bl extends hc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new L_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class I_ extends hc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class El{constructor(e,t,n=0,s=1/0){this.ray=new lo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return no(e,this,n,t),n.sort(Tl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)no(e[s],this,n,t);return n.sort(Tl),n}}function Tl(i,e){return i.distance-e.distance}function no(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)no(s[r],e,t,!0)}}class Wr{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);document.getElementById("gyro-button");const fc=new C(0,0,0),Bn=.1*Math.PI,D_=new R_,Ri=document.getElementById("image-container");Ri.addEventListener("pointerup",i=>{Ri.style.opacity="0",Ri.style.pointerEvents="none",i.stopPropagation()});const U_=document.getElementById("contact-button"),O_=document.getElementById("contact-modal-cross"),N_=document.getElementById("contact-modal"),jn=document.getElementById("contact-modal-container");function F_(i){jn.style.opacity="1",jn.style.pointerEvents="auto",jn.classList.add("active"),i.stopPropagation()}function pc(i){jn.style.opacity="0",jn.style.pointerEvents="none",jn.classList.remove("active"),i.stopPropagation()}U_.addEventListener("pointerup",F_);jn.addEventListener("pointerup",pc);O_.addEventListener("pointerup",pc);N_.addEventListener("pointerup",i=>{i.stopPropagation()});const Yn=document.getElementById("redirect-modal-container"),B_=document.getElementById("redirect-modal-text"),z_=document.getElementById("redirect-modal-cross"),k_=document.getElementById("redirect-modal"),H_=document.getElementById("redirect-modal-confirm-button"),G_=document.getElementById("redirect-modal-cancel-button");k_.addEventListener("pointerup",i=>{i.stopPropagation()});Yn.addEventListener("pointerup",po);z_.addEventListener("pointerup",po);G_.addEventListener("pointerup",po);function V_(){Yn.style.opacity="1",Yn.style.pointerEvents="auto",Yn.classList.add("active")}function po(i){Yn.style.opacity="0",Yn.style.pointerEvents="none",Yn.classList.remove("active"),i.stopPropagation()}function W_(i,e=.1){const t=i*e,n=t/2;return i-n+t*Math.random()}const Al=document.getElementById("debug-text");var Si;let Ui=(Si=class{static screenDebug(e){Al&&(Al.textContent=e)}static debug(e,t){console.log(e,t)}static error(e,t){console.error(e,t)}static debugAnimation(e,t){}static debugInteraction(e,t){}},k(Si,"shouldDebugAnimation",!1),k(Si,"shouldDebugInteraction",!1),k(Si,"showDebug",!0),k(Si,"showError",!0),Si);const Hn=class Hn{static add(e){typeof e.startTime>"u",Hn.animations.push(e)}static update(){const e=Date.now();Hn.animations.forEach(t=>{const n=e-t.startTime;n>t.duration?t.animationEnd(n):t.update(n)}),Hn.animations=Hn.animations.filter(t=>!t.ended)}};k(Hn,"animations",[]);let ls=Hn;class xn{constructor(e,t,n,s,r,a){k(this,"startTime",0);k(this,"duration");k(this,"ended");k(this,"start");k(this,"end");k(this,"updateFct");k(this,"endFct");k(this,"args");k(this,"isLooping");this.start=e,this.end=t,this.duration=n,this.updateFct=s,this.endFct=r,typeof this.endFct>"u",this.ended=!0,this.args=a,this.isLooping=!1}animationStop(){this.ended=!0}isOver(){return this.ended}setIsLooping(e){this.isLooping=e}setParams(e,t,n){this.setStart(e),this.setEnd(t),this.setArgs(n)}setStart(e){this.start=e}setEnd(e){this.end=e}setArgs(e){this.args=e}init(e=!0){this.startTime=Date.now(),this.ended=!1,e&&ls.add(this)}animationEnd(e){this.ended=!0,typeof this.endFct<"u"?this.endFct(this):this.update(e),this.isLooping&&this.init(!1)}update(e){const t=e/this.duration;this.updateFct(t,this)}}class X_ extends xn{constructor(e,t){super(0,0,t,()=>{},()=>{e.init(),ls.add(e)},void 0)}}const Ue=class Ue{static Instanciate(e,t){Ue.camera=e,Ue.canvas=t,Ue.setupMove(),Ue.setupUp(),Ue.setupDown()}static setupMove(){function e(){const s=new El;s.setFromCamera(Ue.pointer,Ue.camera),s.intersectObjects(Ue.clickableElements).length>0?document.body.style.cursor="pointer":document.body.style.cursor="default"}function t(s){const r={x:s.screenX,y:s.screenY};if(typeof Ue.startPosition<"u"){const a=Ue.startPosition.x-r.x,o=Ue.startPosition.y-r.y;Math.sqrt(a*a+o*o)>20&&!Ue.isMoving&&Ue.setIsMoving(!0)}else Ue.startPosition={...r}}function n(s){Ue.updatePointer(s),t(s),e()}Ue.canvas.addEventListener("pointermove",n,!1)}static setupUp(){const e=t=>{document.body.style.cursor="default",typeof Ue.target<"u"&&(Ue.isMoving||Ue.target.onInteraction(t),Ue.setTarget(void 0))};Ue.canvas.addEventListener("pointerup",e,!1)}static setupDown(){const e=t=>{Ue.updatePointer(t);const n=Ue.getPointedElement();n&&(Ue.startPosition={x:t.screenX,y:t.screenY},Ue.setIsMoving(!1),Ue.setTarget(n))};Ue.canvas.addEventListener("pointerdown",e,!1)}static updatePointer(e){Ue.pointer.x=e.clientX/window.innerWidth*2-1,Ue.pointer.y=-(e.clientY/window.innerHeight)*2+1}static getPointedElement(){const e=new El;e.setFromCamera(Ue.pointer,Ue.camera);const t=e.intersectObjects(Ue.clickableElements,!1);return t.length===0?void 0:t[0].object}static setTarget(e){Ue.target=e}static addClickable(e){Ue.clickableElements.push(e)}static removeClickable(e){Ue.clickableElements=Ue.clickableElements.filter(t=>t!==e)}static setIsMoving(e){Ue.isMoving=e}};k(Ue,"target"),k(Ue,"camera"),k(Ue,"canvas"),k(Ue,"isMoving",!1),k(Ue,"clickableElements",[]),k(Ue,"startPosition"),k(Ue,"pointer",new Xe),k(Ue,"targetFunction");let cs=Ue;class mc extends It{load(){}unload(){}}class mo extends mc{constructor(t=()=>{},n,s){super(n,s);k(this,"isInteractive",!1);k(this,"onInteraction");this.onInteraction=t,this.turnOnInteraction()}turnOffInteraction(){this.isInteractive&&(cs.removeClickable(this),this.isInteractive=!1)}turnOnInteraction(){this.isInteractive||(cs.addClickable(this),this.isInteractive=!0)}load(){this.turnOnInteraction()}unload(){this.turnOffInteraction()}}function q_(i,e){cs.Instanciate(i,e)}const j_=document.getElementById("loading-screen-progress-bar"),Xr=document.getElementById("loading-screen");function Y_(){const i=document.getElementById("loading-screen-text-start"),e=document.getElementById("loading-screen-text-start-container");i.style.opacity="0.8";const t=setTimeout(()=>{i.classList.add("start-button-animation")},2e3);setTimeout(()=>{i.style.cursor="pointer",Xr.onclick=()=>{clearTimeout(t);const n=getComputedStyle(i).opacity;i.style.opacity=n,i.classList.remove("start-button-animation"),e.style.opacity="0",document.getElementById("loading-screen-break-strip__top").style.height="100%",document.getElementById("loading-screen-break-strip__bottom").style.height="100%",setTimeout(()=>{document.getElementById("loading-screen-left-panel").style.left="-100%",document.getElementById("loading-screen-right-panel").style.left="calc(100% + 5px)",document.getElementById("loading-screen-text").style.bottom="150%",Xr.style.pointerEvents="none",Xr.classList.remove("active")},1e3)}},300)}const Cl=36;let qr=0;function $_(){qr+=1,j_.style.width=(qr/Cl*100).toString()+"%",qr===Cl&&Y_()}class go{constructor(e,t,n=5,s=1,r=!1,a=()=>{}){k(this,"path");k(this,"position");k(this,"size");k(this,"opacity");k(this,"isVideo");k(this,"mesh");this.path=e,this.position=t,this.size=n,this.opacity=s,this.isVideo=r,this.mesh=this.createMesh(t),this.loadTexture().then(o=>{this.mesh.material.map=o.texture,this.mesh.scale.set(1,o.height/o.width,1)}),a()}createMesh(e){const t=new Qs({transparent:!0,opacity:this.opacity,side:Ft,alphaTest:.5}),n=new er(this.size,this.size),s=new mo(void 0,n,t);return s.position.set(e.x,e.y,e.z),s.lookAt(0,0,0),s}async loadTexture(){let e;return this.isVideo?e=this.loadVideo():e=this.loadImage(),$_(),await e}async loadVideo(){const e=document.getElementById(this.path);if(!e)throw Ui.error(`Video note found: ${this.path}`),new Error(`Video note found: ${this.path}`);e.muted=!0,e.play();const t=new E_(e);t.minFilter=Ct;const n=t.image.videoWidth,s=t.image.videoHeight;return{texture:t,width:n,height:s}}async loadImage(){const e=await D_.loadAsync(this.path),t=e.image.width,n=e.image.height;return{texture:e,width:t,height:n}}addAnimation(){let t=.2;t=W_(t,.5);const n=5e3,s=new xn(1,0,n,(r,a)=>{if(r<.5){const o=r/.5,d={x:this.position.x+0*o,y:this.position.y+t*o,z:this.position.z};this.mesh.position.set(d.x,d.y,d.z)}else{const o=(r-.5)/.5,d={x:this.position.x+0*(1-o),y:this.position.y+t*(1-o),z:this.position.z};this.mesh.position.set(d.x,d.y,d.z)}},void 0,void 0);s.init(),s.setIsLooping(!0)}}class lt extends go{constructor(e,t,n=5,s=1,r=!1,a=()=>{},o=!0){super(e,t,n,s,r,a),this.mesh.onInteraction=()=>{Ri.style.backgroundImage="url("+e+")",Ri.style.opacity="1",Ri.style.pointerEvents="auto"},o&&this.addAnimation()}}class Zi extends go{constructor(e,t,n=5,s=1){super(e,t,n,s,!1,void 0)}}const K_=()=>new xn({position:new C,rotation:new C},{position:new C,rotation:new C},1e3,(i,e)=>{if(e.args==null)return;const t=(o,d,u)=>o+(d-o)*u,n={x:t(e.start.position.x,e.end.position.x,i),y:t(e.start.position.y,e.end.position.y,i),z:t(e.start.position.z,e.end.position.z,i)},{camera:s,controlManager:r}=e.args;s.position.set(n.x,n.y,n.z);const a=e.start.rotation.clone().lerp(e.end.rotation,i);r.updateInitialRotation(a)},i=>{if(i.args==null)return;const{camera:e,controlManager:t}=i.args;e.position.copy(i.end.position),t.updateInitialRotation(i.end.rotation)},null),Rl=K_(),Gn=class Gn{static initiate(e,t){Gn.camera=e,Gn.controlManager=t}static setCurrentRoom(e){var t,n,s,r,a,o,d;this.currentRoom!==e&&(this.goToRoom(e),e.showChidlren(),(t=e.transporter)==null||t.removeLines(),(s=(n=e.previous)==null?void 0:n.previous)==null||s.unload(),(r=e.previous)==null||r.load(),e.load(),(a=e.next)==null||a.load(),(d=(o=e.next)==null?void 0:o.next)==null||d.unload(),this.currentRoom&&(this.currentRoom.hideChildren(),new xn(null,null,500,()=>{},h=>{const{room:p}=h.args;p!=null&&p.transporter&&p.transporter.addLines()},{room:this.currentRoom}).init()),this.currentRoom=e)}static goToRoom(e){if(!e.mesh){Ui.error(`Room mesh null: ${JSON.stringify(e)}`);return}const t=new C(0,0,8),n=e.mesh.localToWorld(t),s=new C;e.mesh.getWorldPosition(s);const r=this.controlManager.getInitialRotation(),a=new C().copy(s).sub(n);Rl.setParams({position:new C().copy(this.camera.position),rotation:r},{position:new C().copy(s),rotation:a},{camera:this.camera,controlManager:this.controlManager}),Rl.init()}};k(Gn,"currentRoom",null),k(Gn,"camera"),k(Gn,"controlManager");let An=Gn;class Ji{constructor(e,t,n,s=6.5){k(this,"room");k(this,"center");k(this,"color");k(this,"isDoubleSided",!0);k(this,"squareSideLength");k(this,"mesh");k(this,"lines");k(this,"animation");k(this,"cubeMaterial");this.room=e,this.center=t,this.color=n,this.squareSideLength=s;const r=this.squareSideLength,a=r,o=r,d=r,u=new Zn(a,o,d);this.cubeMaterial=new dc({color:this.color,side:this.isDoubleSided?Ft:Kt}),this.mesh=new mo(()=>{An.setCurrentRoom(this.room)},u,this.cubeMaterial),this.mesh.rotateZ(Math.PI/4),this.mesh.rotateY(Math.PI/4),this.mesh.position.x=this.center.x,this.mesh.position.y=this.center.y;const h=new uc(u);this.lines=new cc(h),this.lines.material.transparent=!0,this.lines.material.opacity=.3,this.lines.material.side=Kt,this.mesh.add(this.lines),this.animation=new xn(0,Math.PI*.001,1e3,(p,m)=>{const x=new C(1,1,1);x.normalize(),this.mesh.rotateOnAxis(x,m.end)},void 0,void 0),this.animation.setIsLooping(!0),this.animation.init()}setIsDoubleSided(e){this.isDoubleSided=e,this.cubeMaterial.side=this.isDoubleSided?Ft:Kt,this.cubeMaterial.needsUpdate=!0}init(){}addLines(){this.mesh.add(this.lines)}removeLines(){this.mesh.remove(this.lines)}}class Z_{constructor(e,t){k(this,"parent");k(this,"position");k(this,"turnOffAnimation");k(this,"turnOnAnimation");k(this,"topLight");k(this,"bottomLight");this.position=t,this.parent=e;const n=16777215,s=1;this.topLight=new bl(n,s,30),this.topLight.position.set(this.position.x,this.position.y+10,this.position.z),this.bottomLight=new bl(n,s,20),this.bottomLight.position.set(this.position.x,this.position.y-10,this.position.z),this.parent.add(this.topLight),this.parent.add(this.bottomLight),this.turnOffAnimation=new xn(1,0,1500,r=>{this.topLight!==void 0&&(this.topLight.intensity=1-r),this.bottomLight!==void 0&&(this.bottomLight.intensity=1-r)},void 0,void 0),this.turnOnAnimation=new xn(1,0,1500,r=>{this.topLight!==void 0&&(this.topLight.intensity=r),this.bottomLight!==void 0&&(this.bottomLight.intensity=r)},void 0,void 0)}turnOffLights(){this.turnOffAnimation===void 0?Ui.debug("Light turn off animation not initialized yet"):this.turnOffAnimation.init(this.turnOffAnimation.isOver())}turnOnLights(){this.turnOnAnimation===void 0?Ui.debug("Light turn on animation not initialized yet"):this.turnOnAnimation.init(this.turnOnAnimation.isOver())}}class J_{constructor(e,t){k(this,"parent");k(this,"position");k(this,"initialPosition");k(this,"hiddenPosition");k(this,"childrenMoving");k(this,"childrenStatic");k(this,"childrenAnimatedCenter");k(this,"childrenStaticCenter");this.parent=e,this.position=t,this.initialPosition=t.clone(),this.childrenMoving=[],this.childrenStatic=[],this.childrenAnimatedCenter=new ot,this.childrenAnimatedCenter.position.set(this.position.x,this.position.y,this.position.z),this.parent.add(this.childrenAnimatedCenter),this.childrenStaticCenter=new ot,this.childrenStaticCenter.position.set(this.initialPosition.x,this.initialPosition.y,this.initialPosition.z),this.parent.add(this.childrenStaticCenter),this.hiddenPosition=new C(this.childrenAnimatedCenter.position.x,-20,this.childrenAnimatedCenter.position.z)}addChild(e,t=!1){t?(this.childrenStatic.push(e),this.childrenStaticCenter.add(e)):(this.childrenMoving.push(e),this.childrenAnimatedCenter.add(e))}show(){this.moveTo(this.initialPosition,500,1e3),this.childrenMoving.forEach(e=>{e.load()})}hide(){this.moveTo(this.hiddenPosition),this.childrenMoving.forEach(e=>{e.unload()})}setPosition(e){this.position=e,this.childrenAnimatedCenter.position.set(e.x,e.y,e.z)}moveTo(e,t=2e3,n=0){const s=this.position.clone(),r=e.clone().sub(s),a=new xn(s,e,t,(d,{start:u})=>{const h=r.clone().multiplyScalar(d),p=u.clone().add(h);this.setPosition(p)},({end:d})=>{this.setPosition(d)},void 0);new X_(a,n).init()}}class Q_{constructor(){k(this,"next");k(this,"previous");this.next=null,this.previous=null}setPrevious(e,t=!0){this.removePrevious(),this.previous=e,t&&this.previous.setNext(this.getCurrent(),!1)}setNext(e,t=!0){this.next=e,t&&this.next.setPrevious(this.getCurrent(),!1)}removeNext(e=!0){e&&this.next!=null&&this.next.removePrevious(!1),this.next=null}removePrevious(e=!0){e&&this.previous!=null&&this.previous.removeNext(!1),this.previous=null}}class Qi extends Q_{constructor(t,n,s,r,a){super();k(this,"parent");k(this,"center");k(this,"radius");k(this,"color");k(this,"mesh");k(this,"childrenCenter");k(this,"parentPivot");k(this,"sphereNbSegments");k(this,"capNbSegments");k(this,"jointNbSegments");k(this,"openAngle");k(this,"openAngleEntry");k(this,"openAngleExit");k(this,"lightManager");k(this,"toPivot");k(this,"loaded");k(this,"meshGroup");k(this,"transporter");this.parent=t,this.center=n,this.radius=s,this.color=r,this.sphereNbSegments=40,this.capNbSegments=10,this.jointNbSegments=10,this.openAngle=Math.PI/8,this.openAngleEntry=0,this.openAngleExit=0,this.toPivot=a!=null&&a.toPivot?a.toPivot:!0,this.loaded=!0,a&&(a.hasExit&&this.addExit(),a.hasEntry&&this.addEntry()),this.mesh=new ot,this.parentPivot=new ot,this.parent.add(this.parentPivot),this.parentPivot.add(this.mesh),this.toPivot&&(this.parentPivot.rotateY(Bn),this.mesh.rotateY(Bn)),this.childrenCenter=new ot,this.mesh.add(this.childrenCenter);const o=Math.PI/2-Bn,d=new kn(this.radius,this.sphereNbSegments,this.sphereNbSegments,0,2*Math.PI,this.openAngleEntry,o-this.openAngleEntry),u=new kn(this.radius,this.sphereNbSegments,this.sphereNbSegments,0,2*Math.PI,this.openAngleExit,o-this.openAngleExit),h=Math.PI-2*this.openAngle-.1,p=new kn(this.radius,3,this.jointNbSegments,0,h,0,Math.PI),m=new kn(this.radius,3,this.jointNbSegments,0,h,0,Math.PI),x=Math.PI-o-2*Bn,w=new kn(this.radius,this.capNbSegments,this.capNbSegments,0,2*Math.PI,0,x),g=new dc({side:Ft,color:this.color,clipShadows:!0,clipIntersection:!1}),_=new It(d,g),f=new It(u,g),R=new It(p,g),M=new It(m,g),E=new It(w,g),P=new ot;this.childrenCenter.add(P),P.add(_),P.add(f),P.add(R),P.add(M),P.add(E),d.rotateX(-Bn),u.rotateX(-Math.PI),u.rotateX(Bn),P.rotateZ(Math.PI/2),p.rotateZ(-Math.PI),p.rotateY(h/2),p.rotateX(Math.PI/2),m.rotateY(-h/2),m.rotateX(Math.PI/2),w.rotateX(Math.PI/2),this.lightManager=new Z_(this.childrenCenter,new C(0,0,0)),this.meshGroup=new J_(this.childrenCenter,new C(0,0,0))}getCurrent(){return this}addEntry(){this.openAngleEntry=this.openAngle}addExit(){this.openAngleExit=this.openAngle}addImage(t,n=!1){this.meshGroup.addChild(t,n)}showChidlren(){this.meshGroup.show()}hideChildren(){this.meshGroup.hide()}load(){var t;this.loaded||(this.mesh.add(this.childrenCenter),this.loaded=!0,(t=this.transporter)!=null&&t.mesh&&this.transporter.mesh.turnOnInteraction(),this.lightManager.turnOnLights())}unload(){var t;this.loaded&&(this.mesh.remove(this.childrenCenter),this.loaded=!1,(t=this.transporter)!=null&&t.mesh&&this.transporter.mesh.turnOffInteraction(),this.lightManager.turnOffLights())}setCenter(t){this.center=t,this.mesh.position.x=this.center.x,this.mesh.position.y=this.center.y,this.mesh.position.z=this.center.z}addTransporter(t){this.transporter=t,this.childrenCenter.add(this.transporter.mesh)}}class e0{constructor(e,t=5,n=""){k(this,"action");k(this,"cubeScale");k(this,"backgroundOpacity");k(this,"mesh");k(this,"cube");k(this,"cubeMesh");k(this,"edgesMesh");k(this,"animation");k(this,"position");k(this,"size");k(this,"path");k(this,"logo");this.action=()=>{console.log("button clicked")},this.position=e,this.size=t,this.path=n,this.cubeScale=1.3,this.backgroundOpacity=.3,this.mesh=new mc,this.mesh.position.set(this.position.x,this.position.y,this.position.z),this.mesh.lookAt(0,0,0),this.logo=new go(this.path,new C(0,0,0),this.size),this.logo.mesh.turnOffInteraction(),this.mesh.add(this.logo.mesh);const s=this.size*this.cubeScale,r=new Zn(s,s,s),a=new uc(r);this.edgesMesh=new cc(a,new lc({transparent:!0,opacity:.4})),this.cubeMesh=new mo(this.action,r,new Qs({color:16777215,transparent:!0,opacity:this.backgroundOpacity,side:Rt})),this.cube=new ot,this.cube.add(this.edgesMesh),this.cube.add(this.cubeMesh),this.mesh.add(this.cube),this.cube.rotateZ(Math.PI/4),this.cube.rotateY(Math.PI/4),this.animation=new xn(0,Math.PI*.001,1e3,(o,d)=>{const u=new C(1,1,1);u.normalize(),this.cube.rotateOnAxis(u,d.end)},void 0,void 0),this.animation.setIsLooping(!0),this.animation.init()}setAction(e){this.action=e,this.cubeMesh.onInteraction=this.action}removeBackground(){this.setBackgroundOpacity(0)}setBackgroundOpacity(e){this.backgroundOpacity=e,this.cubeMesh.material.opacity=this.backgroundOpacity,this.cubeMesh.material.needsUpdate=!0}}class _o extends e0{constructor(t,n=5,s="",r="",a){super(t,n,s);k(this,"url");k(this,"text");this.url=r,this.text=a||r;const o=()=>{B_.innerHTML=this.text,H_.href=this.url,V_()};this.setAction(o)}}class yi extends _o{constructor(e,t=5,n="",s="Open the Github repo?"){super(e,t,"images/github.png",n,s)}}class t0 extends _o{constructor(e,t=5,n="",s="Open the live demo?"){super(e,t,"images/redirect.png",n,s)}}class Pl extends _o{constructor(e,t=5,n="",s="Open the likedin profile?"){super(e,t,"images/linkedin.png",n,s)}}class n0{constructor(e,t,n){k(this,"scene");k(this,"camera");k(this,"renderer");k(this,"sphereRadius",15);this.scene=e,this.camera=t,this.renderer=n}async init(e){const t=new C(28,0,0),n=await this.createJustABayetRoom(this.scene);n.setCenter(fc);const s=await this.createHackathonRoom(n.mesh);s.hideChildren(),s.setCenter(t.clone());const r=await this.createCodingOfIsaacRoom(s.mesh);r.hideChildren(),r.setCenter(t.clone());const a=await this.createGesturesHeroRoom(r.mesh);a.hideChildren(),a.setCenter(t.clone());const o=await this.createClashRoom(a.mesh);o.hideChildren(),o.setCenter(t.clone()),n.setNext(s),s.setNext(r),r.setNext(a),a.setNext(o);const d=new I_(4210752,.6);this.scene.add(d),this.renderer.render(this.scene,this.camera),An.setCurrentRoom(n),e()}async createJustABayetRoom(e){const t=new C(0,0,0),n=720916,s=new Qi(e,t,this.sphereRadius,n,{hasExit:!0}),r=new Ji(s,new C(0,0,0),n);s.addTransporter(r),r.setIsDoubleSided(!1),r.init();const a=new lt("images/justabayet/gestureshero.png",new C(-4.5,-3,-8),2);s.addImage(a.mesh);const o=new lt("images/justabayet/whenisnextlolclash.png",new C(-5.5,1.5,-9),3);s.addImage(o.mesh);const d=new lt("images/justabayet/thecodingofisaac.png",new C(5,2.2,-9),5);s.addImage(d.mesh);const u=new lt("images/justabayet/hackathons.png",new C(4.5,-3,-8),2.5);s.addImage(u.mesh);const h=new Zi("images/justabayet/title.png",new C(0,0,-8),7);s.addImage(h.mesh,!0);const p=new yi(new C(0,-6,-6),1,"https://github.com/justabayet/justabayet","justabayet");p.setBackgroundOpacity(.1),s.addImage(p.mesh);const m=new Pl(new C(-10,0,-2.5),2,"https://www.linkedin.com/in/anthony-bayet");m.setBackgroundOpacity(.1),s.addImage(m.mesh);const x=new yi(new C(-10,0,2.5),2,"https://github.com/justabayet");return s.addImage(x.mesh),x.setBackgroundOpacity(.1),s}async createClashRoom(e){const t=new C(0,0,0),n=4544596,s=new Qi(e,t,this.sphereRadius,n,{hasEntry:!0}),r=new Ji(s,new C(0,0,0),n);s.addTransporter(r),r.setIsDoubleSided(!1),r.init();const a=new lt("images/whenisnextlolclash/index.png",new C(-5.5,0,-8),4,1);s.addImage(a.mesh);const o=new Zi("images/whenisnextlolclash/title.png",new C(0,0,-9),8,1);s.addImage(o.mesh,!0);const d=new yi(new C(-1.5,-5,-7),1,"https://github.com/justabayet/whenisnextlolclash","whenisnextlolclash");d.setBackgroundOpacity(.1),s.addImage(d.mesh);const u=new t0(new C(1.5,-5,-7),1,"https://justabayet.github.io/whenisnextlolclash/");u.setBackgroundOpacity(.1),s.addImage(u.mesh);const h=new Pl(new C(10,0,-2.5),2,"https://www.linkedin.com/in/anthony-bayet");s.addImage(h.mesh),h.setBackgroundOpacity(.1);const p=new yi(new C(10,0,2.5),2,"https://github.com/justabayet");return s.addImage(p.mesh),p.setBackgroundOpacity(.1),s}async createHackathonRoom(e){const t=new C(0,0,0),n=16121855,s=new Qi(e,t,this.sphereRadius,n,{hasEntry:!0,hasExit:!0}),r=new Ji(s,new C(0,0,0),n);s.addTransporter(r),r.setIsDoubleSided(!1),r.init();const a=3,o=1.5,d=new lt("images/hackathon/Hope_for_climate_2019.png",new C(0,-6,-11),a*1.2,1);s.addImage(d.mesh);const u=new lt("images/hackathon/COW_2019_logo.png",new C(-7,-.5,-10),a,1);s.addImage(u.mesh);const h=new lt("images/hackathon/COW_2019_award.png",new C(-5.4,-1.9,-9.5),o,1);s.addImage(h.mesh);const p=new lt("images/hackathon/COW_2020_logo.png",new C(-3.5,4.5,-10),a,1);s.addImage(p.mesh);const m=new lt("images/hackathon/COW_2020_award.png",new C(-4.7,3,-9.5),o,1);s.addImage(m.mesh);const x=new lt("images/hackathon/hack_your_city_2020.png",new C(3.5,5,-10),a*1.6,1);s.addImage(x.mesh);const w=new lt("images/hackathon/HYC_2020_award.png",new C(5.7,3.3,-9.5),o,1);s.addImage(w.mesh);const g=new lt("images/hackathon/COW_2021_logo.png",new C(7,-.5,-10),a,1);s.addImage(g.mesh);const _=new lt("images/hackathon/COW_2021_award.png",new C(5.4,-1.9,-9.5),o,1);s.addImage(_.mesh);const f=new Zi("images/hackathon/title.png",new C(0,0,-14),8,1);return s.addImage(f.mesh,!0),s}async createCodingOfIsaacRoom(e){const t=new C(0,0,0),n=3409152,s=new Qi(e,t,this.sphereRadius,n,{hasEntry:!0,hasExit:!0}),r=new Ji(s,new C(0,0,0),n);s.addTransporter(r),r.setIsDoubleSided(!1),r.init();const a=new lt("images/theCodingOfIsaac/character.png",new C(-3,-2,-8),2,1);s.addImage(a.mesh);const o=new lt("images/theCodingOfIsaac/tutorial.png",new C(5,-1,-11.5),8,1);s.addImage(o.mesh);const d=new lt("images/theCodingOfIsaac/room.png",new C(-5,1.5,-10),7,1);s.addImage(d.mesh);const u=new lt("images/theCodingOfIsaac/universities.png",new C(-4.5,-6.5,-10),10,1);s.addImage(u.mesh);const h=new Zi("images/theCodingOfIsaac/title.png",new C(0,0,-9),8,1);s.addImage(h.mesh,!0);const p=new yi(new C(0,-6,-6),1,"https://github.com/snail-unamur/Yo-kai-watch","The Coding of Isaac");return p.setBackgroundOpacity(.1),s.addImage(p.mesh),s}async createGesturesHeroRoom(e){const t=new C(0,0,0),n=3394764,s=new Qi(e,t,this.sphereRadius,n,{hasEntry:!0,hasExit:!0}),r=new Ji(s,new C(0,0,0),n);s.addTransporter(r),r.setIsDoubleSided(!1),r.init();const a=new lt("images/gesturesHero/index.png",new C(4,4.5,-10),8,1);s.addImage(a.mesh);const o=new lt("images/gesturesHero/KIKKfestival.jpg",new C(-6.2,-1.6,-11.5),8,1);s.addImage(o.mesh);const d=new lt("images/gesturesHero/poster.png",new C(-5,4.5,-10),8,1);s.addImage(d.mesh);const u=new lt("images/gesturesHero/logo.png",new C(5,-2,-9.5),2,1);s.addImage(u.mesh);const h=new Zi("images/gesturesHero/title.png",new C(0,0,-9),8,1);s.addImage(h.mesh,!0);const p=new yi(new C(0,-6,-6),1,"https://github.com/GesturesHero/GesturesHero","GesturesHero");return p.setBackgroundOpacity(.1),s.addImage(p.mesh),s}}async function i0(i,e,t,n){await new n0(i,e,t).init(n)}var mn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var _c={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(mn,function(){var t=function(){function n(x){return a.appendChild(x.dom),x}function s(x){for(var w=0;w<a.children.length;w++)a.children[w].style.display=w===x?"block":"none";r=x}var r=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(x){x.preventDefault(),s(++r%a.children.length)},!1);var o=(performance||Date).now(),d=o,u=0,h=n(new t.Panel("FPS","#0ff","#002")),p=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var m=n(new t.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:a,addPanel:n,showPanel:s,begin:function(){o=(performance||Date).now()},end:function(){u++;var x=(performance||Date).now();if(p.update(x-o,200),x>d+1e3&&(h.update(1e3*u/(x-d),100),d=x,u=0,m)){var w=performance.memory;m.update(w.usedJSHeapSize/1048576,w.jsHeapSizeLimit/1048576)}return x},update:function(){o=this.end()},domElement:a,setMode:s}};return t.Panel=function(n,s,r){var a=1/0,o=0,d=Math.round,u=d(window.devicePixelRatio||1),h=80*u,p=48*u,m=3*u,x=2*u,w=3*u,g=15*u,_=74*u,f=30*u,R=document.createElement("canvas");R.width=h,R.height=p,R.style.cssText="width:80px;height:48px";var M=R.getContext("2d");return M.font="bold "+9*u+"px Helvetica,Arial,sans-serif",M.textBaseline="top",M.fillStyle=r,M.fillRect(0,0,h,p),M.fillStyle=s,M.fillText(n,m,x),M.fillRect(w,g,_,f),M.fillStyle=r,M.globalAlpha=.9,M.fillRect(w,g,_,f),{dom:R,update:function(E,P){a=Math.min(a,E),o=Math.max(o,E),M.fillStyle=r,M.globalAlpha=1,M.fillRect(0,0,h,g),M.fillStyle=s,M.fillText(d(E)+" "+n+" ("+d(a)+"-"+d(o)+")",m,x),M.drawImage(R,w+u,g,_-u,f,w,g,_-u,f),M.fillRect(w+_-u,g,u,f),M.fillStyle=r,M.globalAlpha=.9,M.fillRect(w+_-u,g,u,d((1-E/P)*f))}}},t})})(_c);var s0=_c.exports;const r0=gc(s0);class o0 extends Nt{constructor(t,n,s,r){super(t,n,s,r);k(this,"positionOffset");k(this,"angleRadOffset");k(this,"angleDegOffset");this.positionOffset=new C,this.updatePositionOffsetAngle(2*Bn),this.angleRadOffset=Math.atan2(this.positionOffset.x,this.positionOffset.z),this.angleDegOffset=this.angleRadOffset*180/Math.PI}updatePositionOffsetAngle(t){const n=new C(0,0,.001),s=new C(0,1,0);return n.applyAxisAngle(s,t),this.updatePositionOffsetPoint(n)}updatePositionOffsetPoint(t){return this.positionOffset=t,this.angleRadOffset=Math.atan2(this.positionOffset.x,this.positionOffset.z),this.angleDegOffset=this.angleRadOffset*180/Math.PI,this.positionOffset}}class vc{update(){throw new Error('ControlPlugin parent class "update" method should be overwritten')}updateInitialRotation(e){throw new Error('ControlPlugin parent class "updateInitialRotation" method should be overwritten')}getInitialRotation(){throw new Error('ControlPlugin parent class "getInitialRotation" method should be overwritten')}}const Ks=class Ks{static debug(e,t){Ks.isVerbose&&console.log(e,t)}};k(Ks,"isVerbose",!1);let tn=Ks;class a0 extends vc{constructor(t=!1){super();k(this,"plugins",[]);k(this,"currentPluginIndex",0);tn.isVerbose=t}addPlugin(t){this.plugins.push(t),tn.debug("ControlManager: plugin added",t)}containsPlugin(t){return!!this.plugins.find(n=>n.key===t)}switchControl(){if(this.plugins.length===0)throw new Error("ControlManager doesn't have any control plugins setup yet");this.setCurrentControl((this.currentPluginIndex+1)%this.plugins.length)}enableControl(t){const n=this.plugins.findIndex(s=>s.key===t);if(n===-1)throw new Error(`ControlManager doesn't have any control plugins of key ${t} setup yet`);this.setCurrentControl(n)}setCurrentControl(t){this.getCurrentPlugin().setEnabled(!1),this.currentPluginIndex=t,this.getCurrentPlugin().setEnabled(!0)}isControlEnabled(t){const n=this.plugins.find(s=>s.key===t);return n?n.isEnabled():!1}update(){this.getCurrentPlugin().update()}getCurrentPlugin(){return this.plugins[this.currentPluginIndex]}getInitialRotation(){return this.getCurrentPlugin().getInitialRotation()}updateInitialRotation(t){this.getCurrentPlugin().updateInitialRotation(t)}updateOffset(){for(const t of this.plugins)t.updateOffset()}}class xc extends vc{constructor(){super(...arguments);k(this,"enabled",!1);k(this,"enableInertia",!0);k(this,"inertiaFactor",.2);k(this,"key","ControlPlugin")}setEnabled(t){this.enabled=t}isEnabled(){return this.enabled}updateOffset(){}}const vo={firstPersonControls:"firstPersonControls",gyroscopeControls:"gyroscopeControls"};function l0(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(t=>navigator.userAgent.match(t))}class c0 extends xc{constructor(t,n){super();k(this,"key",vo.firstPersonControls);k(this,"object");k(this,"rotationOrigin");k(this,"directionOrigin");k(this,"domElement");k(this,"rotateReverse");k(this,"rotateSpeed");k(this,"directionResult");k(this,"anglesDelta");k(this,"anglesCurrent");k(this,"rotateStart");k(this,"rotateEnd");k(this,"rotateDelta");k(this,"offset");k(this,"quat");k(this,"quatInverse");k(this,"pointersCounter",0);k(this,"onContextMenu");k(this,"onPointerUp");k(this,"onPointerDown");k(this,"onPointerMove");this.object=t,this.rotationOrigin=this.object.getWorldDirection(new C),this.directionOrigin=new Wr().setFromVector3(this.rotationOrigin),this.domElement=n,this.domElement.style.touchAction="none",tn.debug("Touch scroll disabled"),this.enabled=!0,l0()?this.rotateSpeed=.6:this.rotateSpeed=.3,this.rotateReverse=!0,this.directionResult=new Wr;const s=new Wr;s.setFromVector3(this.rotationOrigin),this.anglesCurrent={phi:s.phi,theta:s.theta},this.anglesDelta={phi:0,theta:0},this.rotateStart=new Xe,this.rotateEnd=new Xe,this.rotateDelta=new Xe,this.offset=new C,this.quat=new sn().setFromUnitVectors(this.object.up,new C(0,1,0)),this.quatInverse=this.quat.clone().invert();function r(u){return h=>{u.enabled&&h.preventDefault()}}this.onContextMenu=r(this);function a(u){return h=>{u.removePointer(h),u.pointersCounter===0&&(u.domElement.releasePointerCapture(h.pointerId),u.domElement.removeEventListener("pointermove",u.onPointerMove),u.domElement.removeEventListener("pointerup",u.onPointerUp))}}this.onPointerUp=a(this);function o(u){return h=>{u.enabled&&(u.pointersCounter===0&&(u.domElement.setPointerCapture(h.pointerId),u.domElement.addEventListener("pointermove",u.onPointerMove),u.domElement.addEventListener("pointerup",u.onPointerUp)),u.rotateStart.set(h.clientX,h.clientY),u.addPointer(h))}}this.onPointerDown=o(this);function d(u){return h=>{if(!u.enabled)return;u.rotateEnd.set(h.clientX,h.clientY);const p=u.rotateReverse?-u.rotateSpeed:u.rotateSpeed;u.rotateDelta.subVectors(u.rotateEnd,u.rotateStart).multiplyScalar(p);const m=2*Math.PI/u.domElement.clientHeight;u.rotateLeft(m*u.rotateDelta.x),u.rotateUp(m*u.rotateDelta.y),u.rotateStart.copy(u.rotateEnd)}}this.onPointerMove=d(this),this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointercancel",this.onPointerUp)}update(){this.offset.copy(this.rotationOrigin),this.offset.applyQuaternion(this.quat),this.directionOrigin.setFromVector3(this.offset);const t={theta:this.directionOrigin.theta+this.anglesDelta.theta,phi:this.directionOrigin.phi+this.anglesDelta.phi};this.enableInertia&&(t.theta=this.anglesCurrent.theta+(t.theta-this.anglesCurrent.theta)*this.inertiaFactor,t.phi=this.anglesCurrent.phi+(t.phi-this.anglesCurrent.phi)*this.inertiaFactor),this.anglesCurrent.theta=t.theta,this.anglesCurrent.phi=t.phi,this.directionResult.theta=this.anglesCurrent.theta,this.directionResult.phi=this.anglesCurrent.phi,this.directionResult.makeSafe(),this.offset.setFromSpherical(this.directionResult),this.offset.applyQuaternion(this.quatInverse),this.object.lookAt(this.offset.add(this.object.position))}dispose(){this.domElement.removeEventListener("contextmenu",this.onContextMenu),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointercancel",this.onPointerUp),this.domElement.removeEventListener("pointermove",this.onPointerMove),this.domElement.removeEventListener("pointerup",this.onPointerUp)}rotateLeft(t){this.anglesDelta.theta-=t}rotateUp(t){this.anglesDelta.phi+=t}addPointer(t){this.pointersCounter+=1}removePointer(t){this.pointersCounter-=1}updateInitialRotation(t){this.rotationOrigin.copy(t),this.directionOrigin.setFromVector3(this.rotationOrigin)}getInitialRotation(){return this.rotationOrigin.clone()}}var wc={exports:{}};/*!
* sweetalert2 v11.7.32
* Released under the MIT License.
*/(function(i,e){(function(t,n){i.exports=n()})(mn,function(){function t(l,c){var v=s(l,c,"get");return r(l,v)}function n(l,c,v){var T=s(l,c,"set");return a(l,T,v),v}function s(l,c,v){if(!c.has(l))throw new TypeError("attempted to "+v+" private field on non-instance");return c.get(l)}function r(l,c){return c.get?c.get.call(l):c.value}function a(l,c,v){if(c.set)c.set.call(l,v);else{if(!c.writable)throw new TypeError("attempted to set read only private field");c.value=v}}function o(l,c){if(c.has(l))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(l,c,v){o(l,c),c.set(l,v)}const u=100,h={},p=()=>{h.previousActiveElement instanceof HTMLElement?(h.previousActiveElement.focus(),h.previousActiveElement=null):document.body&&document.body.focus()},m=l=>new Promise(c=>{if(!l)return c();const v=window.scrollX,T=window.scrollY;h.restoreFocusTimeout=setTimeout(()=>{p(),c()},u),window.scrollTo(v,T)}),x="swal2-",g=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((l,c)=>(l[c]=x+c,l),{}),f=["success","warning","info","question","error"].reduce((l,c)=>(l[c]=x+c,l),{}),R="SweetAlert2:",M=l=>l.charAt(0).toUpperCase()+l.slice(1),E=l=>{console.warn("".concat(R," ").concat(typeof l=="object"?l.join(" "):l))},P=l=>{console.error("".concat(R," ").concat(l))},D=[],U=l=>{D.includes(l)||(D.push(l),E(l))},J=(l,c)=>{U('"'.concat(l,'" is deprecated and will be removed in the next major release. Please use "').concat(c,'" instead.'))},b=l=>typeof l=="function"?l():l,L=l=>l&&typeof l.toPromise=="function",te=l=>L(l)?l.toPromise():Promise.resolve(l),se=l=>l&&Promise.resolve(l)===l,B=()=>document.body.querySelector(".".concat(g.container)),X=l=>{const c=B();return c?c.querySelector(l):null},V=l=>X(".".concat(l)),$=()=>V(g.popup),K=()=>V(g.icon),Q=()=>V(g["icon-content"]),oe=()=>V(g.title),ee=()=>V(g["html-container"]),H=()=>V(g.image),q=()=>V(g["progress-steps"]),de=()=>V(g["validation-message"]),le=()=>X(".".concat(g.actions," .").concat(g.confirm)),fe=()=>X(".".concat(g.actions," .").concat(g.cancel)),Me=()=>X(".".concat(g.actions," .").concat(g.deny)),Ne=()=>V(g["input-label"]),be=()=>X(".".concat(g.loader)),We=()=>V(g.actions),xt=()=>V(g.footer),Fe=()=>V(g["timer-progress-bar"]),F=()=>V(g.close),_t=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Te=()=>{const l=$();if(!l)return[];const c=l.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),v=Array.from(c).sort((we,je)=>{const tt=parseInt(we.getAttribute("tabindex")||"0"),rt=parseInt(je.getAttribute("tabindex")||"0");return tt>rt?1:tt<rt?-1:0}),T=l.querySelectorAll(_t),W=Array.from(T).filter(we=>we.getAttribute("tabindex")!=="-1");return[...new Set(v.concat(W))].filter(we=>_e(we))},Oe=()=>Ie(document.body,g.shown)&&!Ie(document.body,g["toast-shown"])&&!Ie(document.body,g["no-backdrop"]),Le=()=>{const l=$();return l?Ie(l,g.toast):!1},Qe=()=>{const l=$();return l?l.hasAttribute("data-loading"):!1},Re=(l,c)=>{if(l.textContent="",c){const T=new DOMParser().parseFromString(c,"text/html"),W=T.querySelector("head");W&&Array.from(W.childNodes).forEach(je=>{l.appendChild(je)});const we=T.querySelector("body");we&&Array.from(we.childNodes).forEach(je=>{je instanceof HTMLVideoElement||je instanceof HTMLAudioElement?l.appendChild(je.cloneNode(!0)):l.appendChild(je)})}},Ie=(l,c)=>{if(!c)return!1;const v=c.split(/\s+/);for(let T=0;T<v.length;T++)if(!l.classList.contains(v[T]))return!1;return!0},Ke=(l,c)=>{Array.from(l.classList).forEach(v=>{!Object.values(g).includes(v)&&!Object.values(f).includes(v)&&!Object.values(c.showClass||{}).includes(v)&&l.classList.remove(v)})},Ye=(l,c,v)=>{if(Ke(l,c),c.customClass&&c.customClass[v]){if(typeof c.customClass[v]!="string"&&!c.customClass[v].forEach){E("Invalid type of customClass.".concat(v,'! Expected string or iterable object, got "').concat(typeof c.customClass[v],'"'));return}N(l,c.customClass[v])}},ct=(l,c)=>{if(!c)return null;switch(c){case"select":case"textarea":case"file":return l.querySelector(".".concat(g.popup," > .").concat(g[c]));case"checkbox":return l.querySelector(".".concat(g.popup," > .").concat(g.checkbox," input"));case"radio":return l.querySelector(".".concat(g.popup," > .").concat(g.radio," input:checked"))||l.querySelector(".".concat(g.popup," > .").concat(g.radio," input:first-child"));case"range":return l.querySelector(".".concat(g.popup," > .").concat(g.range," input"));default:return l.querySelector(".".concat(g.popup," > .").concat(g.input))}},A=l=>{if(l.focus(),l.type!=="file"){const c=l.value;l.value="",l.value=c}},y=(l,c,v)=>{!l||!c||(typeof c=="string"&&(c=c.split(/\s+/).filter(Boolean)),c.forEach(T=>{Array.isArray(l)?l.forEach(W=>{v?W.classList.add(T):W.classList.remove(T)}):v?l.classList.add(T):l.classList.remove(T)}))},N=(l,c)=>{y(l,c,!0)},ne=(l,c)=>{y(l,c,!1)},ie=(l,c)=>{const v=Array.from(l.children);for(let T=0;T<v.length;T++){const W=v[T];if(W instanceof HTMLElement&&Ie(W,c))return W}},ce=(l,c,v)=>{v==="".concat(parseInt(v))&&(v=parseInt(v)),v||parseInt(v)===0?l.style[c]=typeof v=="number"?"".concat(v,"px"):v:l.style.removeProperty(c)},me=function(l){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";l&&(l.style.display=c)},ae=l=>{l&&(l.style.display="none")},Z=(l,c,v,T)=>{const W=l.querySelector(c);W&&(W.style[v]=T)},ye=function(l,c){let v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";c?me(l,v):ae(l)},_e=l=>!!(l&&(l.offsetWidth||l.offsetHeight||l.getClientRects().length)),Ae=()=>!_e(le())&&!_e(Me())&&!_e(fe()),ve=l=>l.scrollHeight>l.clientHeight,xe=l=>{const c=window.getComputedStyle(l),v=parseFloat(c.getPropertyValue("animation-duration")||"0"),T=parseFloat(c.getPropertyValue("transition-duration")||"0");return v>0||T>0},Be=function(l){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const v=Fe();v&&_e(v)&&(c&&(v.style.transition="none",v.style.width="100%"),setTimeout(()=>{v.style.transition="width ".concat(l/1e3,"s linear"),v.style.width="0%"},10))},Ze=()=>{const l=Fe();if(!l)return;const c=parseInt(window.getComputedStyle(l).width);l.style.removeProperty("transition"),l.style.width="100%";const v=parseInt(window.getComputedStyle(l).width),T=c/v*100;l.style.width="".concat(T,"%")},I=()=>typeof window>"u"||typeof document>"u",he=`
 <div aria-labelledby="`.concat(g.title,'" aria-describedby="').concat(g["html-container"],'" class="').concat(g.popup,`" tabindex="-1">
   <button type="button" class="`).concat(g.close,`"></button>
   <ul class="`).concat(g["progress-steps"],`"></ul>
   <div class="`).concat(g.icon,`"></div>
   <img class="`).concat(g.image,`" />
   <h2 class="`).concat(g.title,'" id="').concat(g.title,`"></h2>
   <div class="`).concat(g["html-container"],'" id="').concat(g["html-container"],`"></div>
   <input class="`).concat(g.input,'" id="').concat(g.input,`" />
   <input type="file" class="`).concat(g.file,`" />
   <div class="`).concat(g.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(g.select,'" id="').concat(g.select,`"></select>
   <div class="`).concat(g.radio,`"></div>
   <label class="`).concat(g.checkbox,`">
     <input type="checkbox" id="`).concat(g.checkbox,`" />
     <span class="`).concat(g.label,`"></span>
   </label>
   <textarea class="`).concat(g.textarea,'" id="').concat(g.textarea,`"></textarea>
   <div class="`).concat(g["validation-message"],'" id="').concat(g["validation-message"],`"></div>
   <div class="`).concat(g.actions,`">
     <div class="`).concat(g.loader,`"></div>
     <button type="button" class="`).concat(g.confirm,`"></button>
     <button type="button" class="`).concat(g.deny,`"></button>
     <button type="button" class="`).concat(g.cancel,`"></button>
   </div>
   <div class="`).concat(g.footer,`"></div>
   <div class="`).concat(g["timer-progress-bar-container"],`">
     <div class="`).concat(g["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),G=()=>{const l=B();return l?(l.remove(),ne([document.documentElement,document.body],[g["no-backdrop"],g["toast-shown"],g["has-column"]]),!0):!1},re=()=>{h.currentInstance.resetValidationMessage()},pe=()=>{const l=$(),c=ie(l,g.input),v=ie(l,g.file),T=l.querySelector(".".concat(g.range," input")),W=l.querySelector(".".concat(g.range," output")),we=ie(l,g.select),je=l.querySelector(".".concat(g.checkbox," input")),tt=ie(l,g.textarea);c.oninput=re,v.onchange=re,we.onchange=re,je.onchange=re,tt.oninput=re,T.oninput=()=>{re(),W.value=T.value},T.onchange=()=>{re(),W.value=T.value}},qe=l=>typeof l=="string"?document.querySelector(l):l,et=l=>{const c=$();c.setAttribute("role",l.toast?"alert":"dialog"),c.setAttribute("aria-live",l.toast?"polite":"assertive"),l.toast||c.setAttribute("aria-modal","true")},ft=l=>{window.getComputedStyle(l).direction==="rtl"&&N(B(),g.rtl)},zt=l=>{const c=G();if(I()){P("SweetAlert2 requires document to initialize");return}const v=document.createElement("div");v.className=g.container,c&&N(v,g["no-transition"]),Re(v,he);const T=qe(l.target);T.appendChild(v),et(l),ft(T),pe()},Je=(l,c)=>{l instanceof HTMLElement?c.appendChild(l):typeof l=="object"?kt(l,c):l&&Re(c,l)},kt=(l,c)=>{l.jquery?wt(c,l):Re(c,l.toString())},wt=(l,c)=>{if(l.textContent="",0 in c)for(let v=0;v in c;v++)l.appendChild(c[v].cloneNode(!0));else l.appendChild(c.cloneNode(!0))},Jt=(()=>{if(I())return!1;const l=document.createElement("div");return typeof l.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof l.style.animation<"u"?"animationend":!1})(),hs=(l,c)=>{const v=We(),T=be();!v||!T||(!c.showConfirmButton&&!c.showDenyButton&&!c.showCancelButton?ae(v):me(v),Ye(v,c,"actions"),nr(v,T,c),Re(T,c.loaderHtml||""),Ye(T,c,"loader"))};function nr(l,c,v){const T=le(),W=Me(),we=fe();!T||!W||!we||(Qn(T,"confirm",v),Qn(W,"deny",v),Qn(we,"cancel",v),Jn(T,W,we,v),v.reverseButtons&&(v.toast?(l.insertBefore(we,T),l.insertBefore(W,T)):(l.insertBefore(we,c),l.insertBefore(W,c),l.insertBefore(T,c))))}function Jn(l,c,v,T){if(!T.buttonsStyling){ne([l,c,v],g.styled);return}N([l,c,v],g.styled),T.confirmButtonColor&&(l.style.backgroundColor=T.confirmButtonColor,N(l,g["default-outline"])),T.denyButtonColor&&(c.style.backgroundColor=T.denyButtonColor,N(c,g["default-outline"])),T.cancelButtonColor&&(v.style.backgroundColor=T.cancelButtonColor,N(v,g["default-outline"]))}function Qn(l,c,v){const T=M(c);ye(l,v["show".concat(T,"Button")],"inline-block"),Re(l,v["".concat(c,"ButtonText")]||""),l.setAttribute("aria-label",v["".concat(c,"ButtonAriaLabel")]||""),l.className=g[c],Ye(l,v,"".concat(c,"Button"))}const ei=(l,c)=>{const v=F();v&&(Re(v,c.closeButtonHtml||""),Ye(v,c,"closeButton"),ye(v,c.showCloseButton),v.setAttribute("aria-label",c.closeButtonAriaLabel||""))},fs=(l,c)=>{const v=B();v&&(ir(v,c.backdrop),sr(v,c.position),rr(v,c.grow),Ye(v,c,"container"))};function ir(l,c){typeof c=="string"?l.style.background=c:c||N([document.documentElement,document.body],g["no-backdrop"])}function sr(l,c){c&&(c in g?N(l,g[c]):(E('The "position" parameter is not valid, defaulting to "center"'),N(l,g.center)))}function rr(l,c){c&&N(l,g["grow-".concat(c)])}var S={innerParams:new WeakMap,domCache:new WeakMap};const z=["input","file","range","select","radio","checkbox","textarea"],j=(l,c)=>{const v=$();if(!v)return;const T=S.innerParams.get(l),W=!T||c.input!==T.input;z.forEach(we=>{const je=ie(v,g[we]);je&&(ge(we,c.inputAttributes),je.className=g[we],W&&ae(je))}),c.input&&(W&&O(c),Ee(c))},O=l=>{if(!l.input)return;if(!Se[l.input]){P('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(l.input,'"'));return}const c=ze(l.input),v=Se[l.input](c,l);me(c),l.inputAutoFocus&&setTimeout(()=>{A(v)})},Y=l=>{for(let c=0;c<l.attributes.length;c++){const v=l.attributes[c].name;["id","type","value","style"].includes(v)||l.removeAttribute(v)}},ge=(l,c)=>{const v=ct($(),l);if(v){Y(v);for(const T in c)v.setAttribute(T,c[T])}},Ee=l=>{const c=ze(l.input);typeof l.customClass=="object"&&N(c,l.customClass.input)},Pe=(l,c)=>{(!l.placeholder||c.inputPlaceholder)&&(l.placeholder=c.inputPlaceholder)},Ce=(l,c,v)=>{if(v.inputLabel){const T=document.createElement("label"),W=g["input-label"];T.setAttribute("for",l.id),T.className=W,typeof v.customClass=="object"&&N(T,v.customClass.inputLabel),T.innerText=v.inputLabel,c.insertAdjacentElement("beforebegin",T)}},ze=l=>ie($(),g[l]||g.input),De=(l,c)=>{["string","number"].includes(typeof c)?l.value="".concat(c):se(c)||E('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof c,'"'))},Se={};Se.text=Se.email=Se.password=Se.number=Se.tel=Se.url=(l,c)=>(De(l,c.inputValue),Ce(l,l,c),Pe(l,c),l.type=c.input,l),Se.file=(l,c)=>(Ce(l,l,c),Pe(l,c),l),Se.range=(l,c)=>{const v=l.querySelector("input"),T=l.querySelector("output");return De(v,c.inputValue),v.type=c.input,De(T,c.inputValue),Ce(v,l,c),l},Se.select=(l,c)=>{if(l.textContent="",c.inputPlaceholder){const v=document.createElement("option");Re(v,c.inputPlaceholder),v.value="",v.disabled=!0,v.selected=!0,l.appendChild(v)}return Ce(l,l,c),l},Se.radio=l=>(l.textContent="",l),Se.checkbox=(l,c)=>{const v=ct($(),"checkbox");v.value="1",v.checked=!!c.inputValue;const T=l.querySelector("span");return Re(T,c.inputPlaceholder),v},Se.textarea=(l,c)=>{De(l,c.inputValue),Pe(l,c),Ce(l,l,c);const v=T=>parseInt(window.getComputedStyle(T).marginLeft)+parseInt(window.getComputedStyle(T).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const T=parseInt(window.getComputedStyle($()).width),W=()=>{if(!document.body.contains(l))return;const we=l.offsetWidth+v(l);we>T?$().style.width="".concat(we,"px"):ce($(),"width",c.width)};new MutationObserver(W).observe(l,{attributes:!0,attributeFilter:["style"]})}}),l};const nt=(l,c)=>{const v=ee();v&&(Ye(v,c,"htmlContainer"),c.html?(Je(c.html,v),me(v,"block")):c.text?(v.textContent=c.text,me(v,"block")):ae(v),j(l,c))},st=(l,c)=>{const v=xt();v&&(ye(v,c.footer,"block"),c.footer&&Je(c.footer,v),Ye(v,c,"footer"))},Dt=(l,c)=>{const v=S.innerParams.get(l),T=K();if(T){if(v&&c.icon===v.icon){ut(T,c),Ht(T,c);return}if(!c.icon&&!c.iconHtml){ae(T);return}if(c.icon&&Object.keys(f).indexOf(c.icon)===-1){P('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(c.icon,'"')),ae(T);return}me(T),ut(T,c),Ht(T,c),N(T,c.showClass&&c.showClass.icon)}},Ht=(l,c)=>{for(const[v,T]of Object.entries(f))c.icon!==v&&ne(l,T);N(l,c.icon&&f[c.icon]),on(l,c),at(),Ye(l,c,"icon")},at=()=>{const l=$();if(!l)return;const c=window.getComputedStyle(l).getPropertyValue("background-color"),v=l.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let T=0;T<v.length;T++)v[T].style.backgroundColor=c},Ve=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,zi=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ut=(l,c)=>{if(!c.icon&&!c.iconHtml)return;let v=l.innerHTML,T="";c.iconHtml?T=ki(c.iconHtml):c.icon==="success"?(T=Ve,v=v.replace(/ style=".*?"/g,"")):c.icon==="error"?T=zi:c.icon&&(T=ki({question:"?",warning:"!",info:"i"}[c.icon])),v.trim()!==T.trim()&&Re(l,T)},on=(l,c)=>{if(c.iconColor){l.style.color=c.iconColor,l.style.borderColor=c.iconColor;for(const v of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Z(l,v,"backgroundColor",c.iconColor);Z(l,".swal2-success-ring","borderColor",c.iconColor)}},ki=l=>'<div class="'.concat(g["icon-content"],'">').concat(l,"</div>"),Pn=(l,c)=>{const v=H();if(v){if(!c.imageUrl){ae(v);return}me(v,""),v.setAttribute("src",c.imageUrl),v.setAttribute("alt",c.imageAlt||""),ce(v,"width",c.imageWidth),ce(v,"height",c.imageHeight),v.className=g.image,Ye(v,c,"image")}},Hi=(l,c)=>{const v=B(),T=$();if(!(!v||!T)){if(c.toast){ce(v,"width",c.width),T.style.width="100%";const W=be();W&&T.insertBefore(W,K())}else ce(T,"width",c.width);ce(T,"padding",c.padding),c.color&&(T.style.color=c.color),c.background&&(T.style.background=c.background),ae(de()),Mt(T,c)}},Mt=(l,c)=>{const v=c.showClass||{};l.className="".concat(g.popup," ").concat(_e(l)?v.popup:""),c.toast?(N([document.documentElement,document.body],g["toast-shown"]),N(l,g.toast)):N(l,g.modal),Ye(l,c,"popup"),typeof c.customClass=="string"&&N(l,c.customClass),c.icon&&N(l,g["icon-".concat(c.icon)])},an=(l,c)=>{const v=q();if(!v)return;const{progressSteps:T,currentProgressStep:W}=c;if(!T||T.length===0||W===void 0){ae(v);return}me(v),v.textContent="",W>=T.length&&E("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),T.forEach((we,je)=>{const tt=Gi(we);if(v.appendChild(tt),je===W&&N(tt,g["active-progress-step"]),je!==T.length-1){const rt=Et(c);v.appendChild(rt)}})},Gi=l=>{const c=document.createElement("li");return N(c,g["progress-step"]),Re(c,l),c},Et=l=>{const c=document.createElement("li");return N(c,g["progress-step-line"]),l.progressStepsDistance&&ce(c,"width",l.progressStepsDistance),c},Vi=(l,c)=>{const v=oe();v&&(ye(v,c.title||c.titleText,"block"),c.title&&Je(c.title,v),c.titleText&&(v.innerText=c.titleText),Ye(v,c,"title"))},ps=(l,c)=>{Hi(l,c),fs(l,c),an(l,c),Dt(l,c),Pn(l,c),Vi(l,c),ei(l,c),nt(l,c),hs(l,c),st(l,c);const v=$();typeof c.didRender=="function"&&v&&c.didRender(v)},ms=()=>_e($()),xo=()=>{var l;return(l=le())===null||l===void 0?void 0:l.click()},Mc=()=>{var l;return(l=Me())===null||l===void 0?void 0:l.click()},yc=()=>{var l;return(l=fe())===null||l===void 0?void 0:l.click()},ti=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),wo=l=>{l.keydownTarget&&l.keydownHandlerAdded&&(l.keydownTarget.removeEventListener("keydown",l.keydownHandler,{capture:l.keydownListenerCapture}),l.keydownHandlerAdded=!1)},Sc=(l,c,v)=>{wo(l),c.toast||(l.keydownHandler=T=>Ec(c,T,v),l.keydownTarget=c.keydownListenerCapture?window:$(),l.keydownListenerCapture=c.keydownListenerCapture,l.keydownTarget.addEventListener("keydown",l.keydownHandler,{capture:l.keydownListenerCapture}),l.keydownHandlerAdded=!0)},or=(l,c)=>{var v;const T=Te();if(T.length){l=l+c,l===T.length?l=0:l===-1&&(l=T.length-1),T[l].focus();return}(v=$())===null||v===void 0||v.focus()},Mo=["ArrowRight","ArrowDown"],bc=["ArrowLeft","ArrowUp"],Ec=(l,c,v)=>{l&&(c.isComposing||c.keyCode===229||(l.stopKeydownPropagation&&c.stopPropagation(),c.key==="Enter"?Tc(c,l):c.key==="Tab"?Ac(c):[...Mo,...bc].includes(c.key)?Cc(c.key):c.key==="Escape"&&Rc(c,l,v)))},Tc=(l,c)=>{if(!b(c.allowEnterKey))return;const v=ct($(),c.input);if(l.target&&v&&l.target instanceof HTMLElement&&l.target.outerHTML===v.outerHTML){if(["textarea","file"].includes(c.input))return;xo(),l.preventDefault()}},Ac=l=>{const c=l.target,v=Te();let T=-1;for(let W=0;W<v.length;W++)if(c===v[W]){T=W;break}l.shiftKey?or(T,-1):or(T,1),l.stopPropagation(),l.preventDefault()},Cc=l=>{const c=We(),v=le(),T=Me(),W=fe();if(!c||!v||!T||!W)return;const we=[v,T,W];if(document.activeElement instanceof HTMLElement&&!we.includes(document.activeElement))return;const je=Mo.includes(l)?"nextElementSibling":"previousElementSibling";let tt=document.activeElement;if(tt){for(let rt=0;rt<c.children.length;rt++){if(tt=tt[je],!tt)return;if(tt instanceof HTMLButtonElement&&_e(tt))break}tt instanceof HTMLButtonElement&&tt.focus()}},Rc=(l,c,v)=>{b(c.allowEscapeKey)&&(l.preventDefault(),v(ti.esc))};var Wi={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Pc=()=>{Array.from(document.body.children).forEach(c=>{c===B()||c.contains(B())||(c.hasAttribute("aria-hidden")&&c.setAttribute("data-previous-aria-hidden",c.getAttribute("aria-hidden")||""),c.setAttribute("aria-hidden","true"))})},yo=()=>{Array.from(document.body.children).forEach(c=>{c.hasAttribute("data-previous-aria-hidden")?(c.setAttribute("aria-hidden",c.getAttribute("data-previous-aria-hidden")||""),c.removeAttribute("data-previous-aria-hidden")):c.removeAttribute("aria-hidden")})},So=typeof window<"u"&&!!window.GestureEvent,Lc=()=>{if(So&&!Ie(document.body,g.iosfix)){const l=document.body.scrollTop;document.body.style.top="".concat(l*-1,"px"),N(document.body,g.iosfix),Ic()}},Ic=()=>{const l=B();if(!l)return;let c;l.ontouchstart=v=>{c=Dc(v)},l.ontouchmove=v=>{c&&(v.preventDefault(),v.stopPropagation())}},Dc=l=>{const c=l.target,v=B(),T=ee();return!v||!T||Uc(l)||Oc(l)?!1:c===v||!ve(v)&&c instanceof HTMLElement&&c.tagName!=="INPUT"&&c.tagName!=="TEXTAREA"&&!(ve(T)&&T.contains(c))},Uc=l=>l.touches&&l.touches.length&&l.touches[0].touchType==="stylus",Oc=l=>l.touches&&l.touches.length>1,Nc=()=>{if(Ie(document.body,g.iosfix)){const l=parseInt(document.body.style.top,10);ne(document.body,g.iosfix),document.body.style.top="",document.body.scrollTop=l*-1}},Fc=()=>{const l=document.createElement("div");l.className=g["scrollbar-measure"],document.body.appendChild(l);const c=l.getBoundingClientRect().width-l.clientWidth;return document.body.removeChild(l),c};let ni=null;const Bc=l=>{ni===null&&(document.body.scrollHeight>window.innerHeight||l==="scroll")&&(ni=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(ni+Fc(),"px"))},zc=()=>{ni!==null&&(document.body.style.paddingRight="".concat(ni,"px"),ni=null)};function bo(l,c,v,T){Le()?To(l,T):(m(v).then(()=>To(l,T)),wo(h)),So?(c.setAttribute("style","display:none !important"),c.removeAttribute("class"),c.innerHTML=""):c.remove(),Oe()&&(zc(),Nc(),yo()),kc()}function kc(){ne([document.documentElement,document.body],[g.shown,g["height-auto"],g["no-backdrop"],g["toast-shown"]])}function wn(l){l=Gc(l);const c=Wi.swalPromiseResolve.get(this),v=Hc(this);this.isAwaitingPromise?l.isDismissed||(Xi(this),c(l)):v&&c(l)}const Hc=l=>{const c=$();if(!c)return!1;const v=S.innerParams.get(l);if(!v||Ie(c,v.hideClass.popup))return!1;ne(c,v.showClass.popup),N(c,v.hideClass.popup);const T=B();return ne(T,v.showClass.backdrop),N(T,v.hideClass.backdrop),Vc(l,c,v),!0};function Eo(l){const c=Wi.swalPromiseReject.get(this);Xi(this),c&&c(l)}const Xi=l=>{l.isAwaitingPromise&&(delete l.isAwaitingPromise,S.innerParams.get(l)||l._destroy())},Gc=l=>typeof l>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},l),Vc=(l,c,v)=>{const T=B(),W=Jt&&xe(c);typeof v.willClose=="function"&&v.willClose(c),W?Wc(l,c,T,v.returnFocus,v.didClose):bo(l,T,v.returnFocus,v.didClose)},Wc=(l,c,v,T,W)=>{Jt&&(h.swalCloseEventFinishedCallback=bo.bind(null,l,v,T,W),c.addEventListener(Jt,function(we){we.target===c&&(h.swalCloseEventFinishedCallback(),delete h.swalCloseEventFinishedCallback)}))},To=(l,c)=>{setTimeout(()=>{typeof c=="function"&&c.bind(l.params)(),l._destroy&&l._destroy()})},ii=l=>{let c=$();if(c||new ws,c=$(),!c)return;const v=be();Le()?ae(K()):Xc(c,l),me(v),c.setAttribute("data-loading","true"),c.setAttribute("aria-busy","true"),c.focus()},Xc=(l,c)=>{const v=We(),T=be();!v||!T||(!c&&_e(le())&&(c=le()),me(v),c&&(ae(c),T.setAttribute("data-button-to-replace",c.className),v.insertBefore(T,c)),N([l,v],g.loading))},qc=(l,c)=>{c.input==="select"||c.input==="radio"?Zc(l,c):["text","email","number","tel","textarea"].some(v=>v===c.input)&&(L(c.inputValue)||se(c.inputValue))&&(ii(le()),Jc(l,c))},jc=(l,c)=>{const v=l.getInput();if(!v)return null;switch(c.input){case"checkbox":return Yc(v);case"radio":return $c(v);case"file":return Kc(v);default:return c.inputAutoTrim?v.value.trim():v.value}},Yc=l=>l.checked?1:0,$c=l=>l.checked?l.value:null,Kc=l=>l.files&&l.files.length?l.getAttribute("multiple")!==null?l.files:l.files[0]:null,Zc=(l,c)=>{const v=$();if(!v)return;const T=W=>{c.input==="select"?Qc(v,gs(W),c):c.input==="radio"&&eu(v,gs(W),c)};L(c.inputOptions)||se(c.inputOptions)?(ii(le()),te(c.inputOptions).then(W=>{l.hideLoading(),T(W)})):typeof c.inputOptions=="object"?T(c.inputOptions):P("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof c.inputOptions))},Jc=(l,c)=>{const v=l.getInput();v&&(ae(v),te(c.inputValue).then(T=>{v.value=c.input==="number"?"".concat(parseFloat(T)||0):"".concat(T),me(v),v.focus(),l.hideLoading()}).catch(T=>{P("Error in inputValue promise: ".concat(T)),v.value="",me(v),v.focus(),l.hideLoading()}))};function Qc(l,c,v){const T=ie(l,g.select);if(!T)return;const W=(we,je,tt)=>{const rt=document.createElement("option");rt.value=tt,Re(rt,je),rt.selected=Ao(tt,v.inputValue),we.appendChild(rt)};c.forEach(we=>{const je=we[0],tt=we[1];if(Array.isArray(tt)){const rt=document.createElement("optgroup");rt.label=je,rt.disabled=!1,T.appendChild(rt),tt.forEach(ri=>W(rt,ri[1],ri[0]))}else W(T,tt,je)}),T.focus()}function eu(l,c,v){const T=ie(l,g.radio);if(!T)return;c.forEach(we=>{const je=we[0],tt=we[1],rt=document.createElement("input"),ri=document.createElement("label");rt.type="radio",rt.name=g.radio,rt.value=je,Ao(je,v.inputValue)&&(rt.checked=!0);const dr=document.createElement("span");Re(dr,tt),dr.className=g.label,ri.appendChild(rt),ri.appendChild(dr),T.appendChild(ri)});const W=T.querySelectorAll("input");W.length&&W[0].focus()}const gs=l=>{const c=[];return l instanceof Map?l.forEach((v,T)=>{let W=v;typeof W=="object"&&(W=gs(W)),c.push([T,W])}):Object.keys(l).forEach(v=>{let T=l[v];typeof T=="object"&&(T=gs(T)),c.push([v,T])}),c},Ao=(l,c)=>!!c&&c.toString()===l.toString(),tu=l=>{const c=S.innerParams.get(l);l.disableButtons(),c.input?Co(l,"confirm"):lr(l,!0)},nu=l=>{const c=S.innerParams.get(l);l.disableButtons(),c.returnInputValueOnDeny?Co(l,"deny"):ar(l,!1)},iu=(l,c)=>{l.disableButtons(),c(ti.cancel)},Co=(l,c)=>{const v=S.innerParams.get(l);if(!v.input){P('The "input" parameter is needed to be set when using returnInputValueOn'.concat(M(c)));return}const T=l.getInput(),W=jc(l,v);v.inputValidator?su(l,W,c):T&&!T.checkValidity()?(l.enableButtons(),l.showValidationMessage(v.validationMessage)):c==="deny"?ar(l,W):lr(l,W)},su=(l,c,v)=>{const T=S.innerParams.get(l);l.disableInput(),Promise.resolve().then(()=>te(T.inputValidator(c,T.validationMessage))).then(we=>{l.enableButtons(),l.enableInput(),we?l.showValidationMessage(we):v==="deny"?ar(l,c):lr(l,c)})},ar=(l,c)=>{const v=S.innerParams.get(l||void 0);v.showLoaderOnDeny&&ii(Me()),v.preDeny?(l.isAwaitingPromise=!0,Promise.resolve().then(()=>te(v.preDeny(c,v.validationMessage))).then(W=>{W===!1?(l.hideLoading(),Xi(l)):l.close({isDenied:!0,value:typeof W>"u"?c:W})}).catch(W=>Po(l||void 0,W))):l.close({isDenied:!0,value:c})},Ro=(l,c)=>{l.close({isConfirmed:!0,value:c})},Po=(l,c)=>{l.rejectPromise(c)},lr=(l,c)=>{const v=S.innerParams.get(l||void 0);v.showLoaderOnConfirm&&ii(),v.preConfirm?(l.resetValidationMessage(),l.isAwaitingPromise=!0,Promise.resolve().then(()=>te(v.preConfirm(c,v.validationMessage))).then(W=>{_e(de())||W===!1?(l.hideLoading(),Xi(l)):Ro(l,typeof W>"u"?c:W)}).catch(W=>Po(l||void 0,W))):Ro(l,c)};function _s(){const l=S.innerParams.get(this);if(!l)return;const c=S.domCache.get(this);ae(c.loader),Le()?l.icon&&me(K()):ru(c),ne([c.popup,c.actions],g.loading),c.popup.removeAttribute("aria-busy"),c.popup.removeAttribute("data-loading"),c.confirmButton.disabled=!1,c.denyButton.disabled=!1,c.cancelButton.disabled=!1}const ru=l=>{const c=l.popup.getElementsByClassName(l.loader.getAttribute("data-button-to-replace"));c.length?me(c[0],"inline-block"):Ae()&&ae(l.actions)};function Lo(){const l=S.innerParams.get(this),c=S.domCache.get(this);return c?ct(c.popup,l.input):null}function Io(l,c,v){const T=S.domCache.get(l);c.forEach(W=>{T[W].disabled=v})}function Do(l,c){const v=$();if(!(!v||!l))if(l.type==="radio"){const T=v.querySelectorAll('[name="'.concat(g.radio,'"]'));for(let W=0;W<T.length;W++)T[W].disabled=c}else l.disabled=c}function Uo(){Io(this,["confirmButton","denyButton","cancelButton"],!1)}function Oo(){Io(this,["confirmButton","denyButton","cancelButton"],!0)}function No(){Do(this.getInput(),!1)}function Fo(){Do(this.getInput(),!0)}function Bo(l){const c=S.domCache.get(this),v=S.innerParams.get(this);Re(c.validationMessage,l),c.validationMessage.className=g["validation-message"],v.customClass&&v.customClass.validationMessage&&N(c.validationMessage,v.customClass.validationMessage),me(c.validationMessage);const T=this.getInput();T&&(T.setAttribute("aria-invalid","true"),T.setAttribute("aria-describedby",g["validation-message"]),A(T),N(T,g.inputerror))}function zo(){const l=S.domCache.get(this);l.validationMessage&&ae(l.validationMessage);const c=this.getInput();c&&(c.removeAttribute("aria-invalid"),c.removeAttribute("aria-describedby"),ne(c,g.inputerror))}const si={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},ou=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],au={},lu=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ko=l=>Object.prototype.hasOwnProperty.call(si,l),Ho=l=>ou.indexOf(l)!==-1,Go=l=>au[l],cu=l=>{ko(l)||E('Unknown parameter "'.concat(l,'"'))},uu=l=>{lu.includes(l)&&E('The parameter "'.concat(l,'" is incompatible with toasts'))},du=l=>{const c=Go(l);c&&J(l,c)},hu=l=>{l.backdrop===!1&&l.allowOutsideClick&&E('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const c in l)cu(c),l.toast&&uu(c),du(c)};function Vo(l){const c=$(),v=S.innerParams.get(this);if(!c||Ie(c,v.hideClass.popup)){E("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const T=fu(l),W=Object.assign({},v,T);ps(this,W),S.innerParams.set(this,W),Object.defineProperties(this,{params:{value:Object.assign({},this.params,l),writable:!1,enumerable:!0}})}const fu=l=>{const c={};return Object.keys(l).forEach(v=>{Ho(v)?c[v]=l[v]:E("Invalid parameter to update: ".concat(v))}),c};function Wo(){const l=S.domCache.get(this),c=S.innerParams.get(this);if(!c){Xo(this);return}l.popup&&h.swalCloseEventFinishedCallback&&(h.swalCloseEventFinishedCallback(),delete h.swalCloseEventFinishedCallback),typeof c.didDestroy=="function"&&c.didDestroy(),pu(this)}const pu=l=>{Xo(l),delete l.params,delete h.keydownHandler,delete h.keydownTarget,delete h.currentInstance},Xo=l=>{l.isAwaitingPromise?(cr(S,l),l.isAwaitingPromise=!0):(cr(Wi,l),cr(S,l),delete l.isAwaitingPromise,delete l.disableButtons,delete l.enableButtons,delete l.getInput,delete l.disableInput,delete l.enableInput,delete l.hideLoading,delete l.disableLoading,delete l.showValidationMessage,delete l.resetValidationMessage,delete l.close,delete l.closePopup,delete l.closeModal,delete l.closeToast,delete l.rejectPromise,delete l.update,delete l._destroy)},cr=(l,c)=>{for(const v in l)l[v].delete(c)};var mu=Object.freeze({__proto__:null,_destroy:Wo,close:wn,closeModal:wn,closePopup:wn,closeToast:wn,disableButtons:Oo,disableInput:Fo,disableLoading:_s,enableButtons:Uo,enableInput:No,getInput:Lo,handleAwaitingPromise:Xi,hideLoading:_s,rejectPromise:Eo,resetValidationMessage:zo,showValidationMessage:Bo,update:Vo});const gu=(l,c,v)=>{l.toast?_u(l,c,v):(xu(c),wu(c),Mu(l,c,v))},_u=(l,c,v)=>{c.popup.onclick=()=>{l&&(vu(l)||l.timer||l.input)||v(ti.close)}},vu=l=>!!(l.showConfirmButton||l.showDenyButton||l.showCancelButton||l.showCloseButton);let vs=!1;const xu=l=>{l.popup.onmousedown=()=>{l.container.onmouseup=function(c){l.container.onmouseup=()=>{},c.target===l.container&&(vs=!0)}}},wu=l=>{l.container.onmousedown=()=>{l.popup.onmouseup=function(c){l.popup.onmouseup=()=>{},(c.target===l.popup||c.target instanceof HTMLElement&&l.popup.contains(c.target))&&(vs=!0)}}},Mu=(l,c,v)=>{c.container.onclick=T=>{if(vs){vs=!1;return}T.target===c.container&&b(l.allowOutsideClick)&&v(ti.backdrop)}},yu=l=>typeof l=="object"&&l.jquery,qo=l=>l instanceof Element||yu(l),Su=l=>{const c={};return typeof l[0]=="object"&&!qo(l[0])?Object.assign(c,l[0]):["title","html","icon"].forEach((v,T)=>{const W=l[T];typeof W=="string"||qo(W)?c[v]=W:W!==void 0&&P("Unexpected type of ".concat(v,'! Expected "string" or "Element", got ').concat(typeof W))}),c};function bu(){const l=this;for(var c=arguments.length,v=new Array(c),T=0;T<c;T++)v[T]=arguments[T];return new l(...v)}function Eu(l){class c extends this{_main(T,W){return super._main(T,Object.assign({},l,W))}}return c}const Tu=()=>h.timeout&&h.timeout.getTimerLeft(),jo=()=>{if(h.timeout)return Ze(),h.timeout.stop()},Yo=()=>{if(h.timeout){const l=h.timeout.start();return Be(l),l}},Au=()=>{const l=h.timeout;return l&&(l.running?jo():Yo())},Cu=l=>{if(h.timeout){const c=h.timeout.increase(l);return Be(c,!0),c}},Ru=()=>!!(h.timeout&&h.timeout.isRunning());let $o=!1;const ur={};function Pu(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";ur[l]=this,$o||(document.body.addEventListener("click",Lu),$o=!0)}const Lu=l=>{for(let c=l.target;c&&c!==document;c=c.parentNode)for(const v in ur){const T=c.getAttribute(v);if(T){ur[v].fire({template:T});return}}};var Iu=Object.freeze({__proto__:null,argsToParams:Su,bindClickHandler:Pu,clickCancel:yc,clickConfirm:xo,clickDeny:Mc,enableLoading:ii,fire:bu,getActions:We,getCancelButton:fe,getCloseButton:F,getConfirmButton:le,getContainer:B,getDenyButton:Me,getFocusableElements:Te,getFooter:xt,getHtmlContainer:ee,getIcon:K,getIconContent:Q,getImage:H,getInputLabel:Ne,getLoader:be,getPopup:$,getProgressSteps:q,getTimerLeft:Tu,getTimerProgressBar:Fe,getTitle:oe,getValidationMessage:de,increaseTimer:Cu,isDeprecatedParameter:Go,isLoading:Qe,isTimerRunning:Ru,isUpdatableParameter:Ho,isValidParameter:ko,isVisible:ms,mixin:Eu,resumeTimer:Yo,showLoading:ii,stopTimer:jo,toggleTimer:Au});class Du{constructor(c,v){this.callback=c,this.remaining=v,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(c){const v=this.running;return v&&this.stop(),this.remaining+=c,v&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Ko=["swal-title","swal-html","swal-footer"],Uu=l=>{const c=typeof l.template=="string"?document.querySelector(l.template):l.template;if(!c)return{};const v=c.content;return Gu(v),Object.assign(Ou(v),Nu(v),Fu(v),Bu(v),zu(v),ku(v),Hu(v,Ko))},Ou=l=>{const c={};return Array.from(l.querySelectorAll("swal-param")).forEach(T=>{Ln(T,["name","value"]);const W=T.getAttribute("name"),we=T.getAttribute("value");typeof si[W]=="boolean"?c[W]=we!=="false":typeof si[W]=="object"?c[W]=JSON.parse(we):c[W]=we}),c},Nu=l=>{const c={};return Array.from(l.querySelectorAll("swal-function-param")).forEach(T=>{const W=T.getAttribute("name"),we=T.getAttribute("value");c[W]=new Function("return ".concat(we))()}),c},Fu=l=>{const c={};return Array.from(l.querySelectorAll("swal-button")).forEach(T=>{Ln(T,["type","color","aria-label"]);const W=T.getAttribute("type");c["".concat(W,"ButtonText")]=T.innerHTML,c["show".concat(M(W),"Button")]=!0,T.hasAttribute("color")&&(c["".concat(W,"ButtonColor")]=T.getAttribute("color")),T.hasAttribute("aria-label")&&(c["".concat(W,"ButtonAriaLabel")]=T.getAttribute("aria-label"))}),c},Bu=l=>{const c={},v=l.querySelector("swal-image");return v&&(Ln(v,["src","width","height","alt"]),v.hasAttribute("src")&&(c.imageUrl=v.getAttribute("src")),v.hasAttribute("width")&&(c.imageWidth=v.getAttribute("width")),v.hasAttribute("height")&&(c.imageHeight=v.getAttribute("height")),v.hasAttribute("alt")&&(c.imageAlt=v.getAttribute("alt"))),c},zu=l=>{const c={},v=l.querySelector("swal-icon");return v&&(Ln(v,["type","color"]),v.hasAttribute("type")&&(c.icon=v.getAttribute("type")),v.hasAttribute("color")&&(c.iconColor=v.getAttribute("color")),c.iconHtml=v.innerHTML),c},ku=l=>{const c={},v=l.querySelector("swal-input");v&&(Ln(v,["type","label","placeholder","value"]),c.input=v.getAttribute("type")||"text",v.hasAttribute("label")&&(c.inputLabel=v.getAttribute("label")),v.hasAttribute("placeholder")&&(c.inputPlaceholder=v.getAttribute("placeholder")),v.hasAttribute("value")&&(c.inputValue=v.getAttribute("value")));const T=Array.from(l.querySelectorAll("swal-input-option"));return T.length&&(c.inputOptions={},T.forEach(W=>{Ln(W,["value"]);const we=W.getAttribute("value"),je=W.innerHTML;c.inputOptions[we]=je})),c},Hu=(l,c)=>{const v={};for(const T in c){const W=c[T],we=l.querySelector(W);we&&(Ln(we,[]),v[W.replace(/^swal-/,"")]=we.innerHTML.trim())}return v},Gu=l=>{const c=Ko.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(l.children).forEach(v=>{const T=v.tagName.toLowerCase();c.includes(T)||E("Unrecognized element <".concat(T,">"))})},Ln=(l,c)=>{Array.from(l.attributes).forEach(v=>{c.indexOf(v.name)===-1&&E(['Unrecognized attribute "'.concat(v.name,'" on <').concat(l.tagName.toLowerCase(),">."),"".concat(c.length?"Allowed attributes are: ".concat(c.join(", ")):"To set the value, use HTML within the element.")])})},Zo=10,Vu=l=>{const c=B(),v=$();typeof l.willOpen=="function"&&l.willOpen(v);const W=window.getComputedStyle(document.body).overflowY;qu(c,v,l),setTimeout(()=>{Wu(c,v)},Zo),Oe()&&(Xu(c,l.scrollbarPadding,W),Pc()),!Le()&&!h.previousActiveElement&&(h.previousActiveElement=document.activeElement),typeof l.didOpen=="function"&&setTimeout(()=>l.didOpen(v)),ne(c,g["no-transition"])},Jo=l=>{const c=$();if(l.target!==c||!Jt)return;const v=B();c.removeEventListener(Jt,Jo),v.style.overflowY="auto"},Wu=(l,c)=>{Jt&&xe(c)?(l.style.overflowY="hidden",c.addEventListener(Jt,Jo)):l.style.overflowY="auto"},Xu=(l,c,v)=>{Lc(),c&&v!=="hidden"&&Bc(v),setTimeout(()=>{l.scrollTop=0})},qu=(l,c,v)=>{N(l,v.showClass.backdrop),c.style.setProperty("opacity","0","important"),me(c,"grid"),setTimeout(()=>{N(c,v.showClass.popup),c.style.removeProperty("opacity")},Zo),N([document.documentElement,document.body],g.shown),v.heightAuto&&v.backdrop&&!v.toast&&N([document.documentElement,document.body],g["height-auto"])};var Qo={email:(l,c)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(l)?Promise.resolve():Promise.resolve(c||"Invalid email address"),url:(l,c)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(l)?Promise.resolve():Promise.resolve(c||"Invalid URL")};function ju(l){l.inputValidator||(l.input==="email"&&(l.inputValidator=Qo.email),l.input==="url"&&(l.inputValidator=Qo.url))}function Yu(l){(!l.target||typeof l.target=="string"&&!document.querySelector(l.target)||typeof l.target!="string"&&!l.target.appendChild)&&(E('Target parameter is not valid, defaulting to "body"'),l.target="body")}function $u(l){ju(l),l.showLoaderOnConfirm&&!l.preConfirm&&E(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Yu(l),typeof l.title=="string"&&(l.title=l.title.split(`
`).join("<br />")),zt(l)}let Qt;var xs=new WeakMap;class dt{constructor(){if(d(this,xs,{writable:!0,value:void 0}),typeof window>"u")return;Qt=this;for(var c=arguments.length,v=new Array(c),T=0;T<c;T++)v[T]=arguments[T];const W=Object.freeze(this.constructor.argsToParams(v));this.params=W,this.isAwaitingPromise=!1,n(this,xs,this._main(Qt.params))}_main(c){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};hu(Object.assign({},v,c)),h.currentInstance&&(h.currentInstance._destroy(),Oe()&&yo()),h.currentInstance=Qt;const T=Zu(c,v);$u(T),Object.freeze(T),h.timeout&&(h.timeout.stop(),delete h.timeout),clearTimeout(h.restoreFocusTimeout);const W=Ju(Qt);return ps(Qt,T),S.innerParams.set(Qt,T),Ku(Qt,W,T)}then(c){return t(this,xs).then(c)}finally(c){return t(this,xs).finally(c)}}const Ku=(l,c,v)=>new Promise((T,W)=>{const we=je=>{l.close({isDismissed:!0,dismiss:je})};Wi.swalPromiseResolve.set(l,T),Wi.swalPromiseReject.set(l,W),c.confirmButton.onclick=()=>{tu(l)},c.denyButton.onclick=()=>{nu(l)},c.cancelButton.onclick=()=>{iu(l,we)},c.closeButton.onclick=()=>{we(ti.close)},gu(v,c,we),Sc(h,v,we),qc(l,v),Vu(v),Qu(h,v,we),ed(c,v),setTimeout(()=>{c.container.scrollTop=0})}),Zu=(l,c)=>{const v=Uu(l),T=Object.assign({},si,c,v,l);return T.showClass=Object.assign({},si.showClass,T.showClass),T.hideClass=Object.assign({},si.hideClass,T.hideClass),T},Ju=l=>{const c={popup:$(),container:B(),actions:We(),confirmButton:le(),denyButton:Me(),cancelButton:fe(),loader:be(),closeButton:F(),validationMessage:de(),progressSteps:q()};return S.domCache.set(l,c),c},Qu=(l,c,v)=>{const T=Fe();ae(T),c.timer&&(l.timeout=new Du(()=>{v("timer"),delete l.timeout},c.timer),c.timerProgressBar&&(me(T),Ye(T,c,"timerProgressBar"),setTimeout(()=>{l.timeout&&l.timeout.running&&Be(c.timer)})))},ed=(l,c)=>{if(!c.toast){if(!b(c.allowEnterKey)){nd();return}td(l,c)||or(-1,1)}},td=(l,c)=>c.focusDeny&&_e(l.denyButton)?(l.denyButton.focus(),!0):c.focusCancel&&_e(l.cancelButton)?(l.cancelButton.focus(),!0):c.focusConfirm&&_e(l.confirmButton)?(l.confirmButton.focus(),!0):!1,nd=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const l=new Date,c=localStorage.getItem("swal-initiation");c?(l.getTime()-Date.parse(c))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const v=document.createElement("audio");v.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",v.loop=!0,document.body.appendChild(v),setTimeout(()=>{v.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation","".concat(l))}dt.prototype.disableButtons=Oo,dt.prototype.enableButtons=Uo,dt.prototype.getInput=Lo,dt.prototype.disableInput=Fo,dt.prototype.enableInput=No,dt.prototype.hideLoading=_s,dt.prototype.disableLoading=_s,dt.prototype.showValidationMessage=Bo,dt.prototype.resetValidationMessage=zo,dt.prototype.close=wn,dt.prototype.closePopup=wn,dt.prototype.closeModal=wn,dt.prototype.closeToast=wn,dt.prototype.rejectPromise=Eo,dt.prototype.update=Vo,dt.prototype._destroy=Wo,Object.assign(dt,Iu),Object.keys(mu).forEach(l=>{dt[l]=function(){return Qt&&Qt[l]?Qt[l](...arguments):null}}),dt.DismissReason=ti,dt.version="11.7.32";const ws=dt;return ws.default=ws,ws}),typeof mn<"u"&&mn.Sweetalert2&&(mn.swal=mn.sweetAlert=mn.Swal=mn.SweetAlert=mn.Sweetalert2),typeof document<"u"&&function(t,n){var s=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(s),s.styleSheet)s.styleSheet.disabled||(s.styleSheet.cssText=n);else try{s.innerHTML=n}catch{s.innerText=n}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(wc);var u0=wc.exports;const Ll=gc(u0);async function d0(){try{const i=DeviceOrientationEvent.requestPermission;return typeof i=="function"?await i().then(n=>n).catch(n=>(tn.debug("Could'nt get permission for gyroscope.",n),"unsupported")):(await navigator.permissions.query({name:"gyroscope"})).state!=="granted"?"unsupported":"granted"}catch(i){if(i instanceof ReferenceError)return"granted";throw i}}const h0=function(){const i=new C(0,0,1),e=new ds,t=new sn,n=new sn(-Math.sqrt(.5),0,0,Math.sqrt(.5));return function(s,r,a,o,d){e.set(a,r,-o,"YXZ"),s.setFromEuler(e),s.multiply(n),s.multiply(t.setFromAxisAngle(i,-d))}}(),gn=class gn extends xc{constructor(t,n=()=>{this.setEnabled(!0)},s){super();k(this,"key",vo.gyroscopeControls);k(this,"object");k(this,"deviceOrientation");k(this,"initialObject");k(this,"rotationOrigin");k(this,"initialRotation");k(this,"onBecomingAvailable");k(this,"logUpdateDirection");k(this,"gyroOffset",{alpha:0,beta:0,gamma:0});k(this,"screenOrientation",0);k(this,"targetQuaternion",new sn);this.object=t,this.rotationOrigin=this.object.getWorldDirection(new C),this.initialRotation=new sn().copy(this.object.quaternion),this.initialObject=new ot,this.onBecomingAvailable=n,this.logUpdateDirection=s,gn.isSupported?this.setupSupport():gn.permissionAsked?tn.debug("Gyroscope  not supported"):this.askPermission()}askPermission(){gn.permissionAsked=!0,d0().then(t=>{switch(t){case"granted":this.setupSupport();break;case"denied":Ll.fire({title:"Gyroscope access denied",text:"The experience will be degraded.",confirmButtonText:"I Understand, Proceed Anyway :("});break;default:Ll.fire({title:"Gyroscope blocked",text:"Your experience may be limited. Please consider using a different browser such as Google Chrome, or enable gyroscope access in your current browser settings.",confirmButtonText:"I Understand, Proceed Anyway :("})}}).catch(t=>{tn.debug("Error occured while getting permission for gyroscope",t)})}setupSupport(){tn.debug("Gyroscope controls setup");const t=n=>{this.deviceOrientation=n,!gn.isSupported&&n.alpha!=null&&(this.onBecomingAvailable(),this.updateOffset(),gn.isSupported=!0)};window.addEventListener("deviceorientation",t)}update(){if(!this.enabled)tn.debug("Trying to update gyro controls. But it is not in used.");else{if(this.deviceOrientation==null)return;this.logUpdateDirection&&this.logUpdateDirection(this.deviceOrientation);const t=this.deviceOrientation.alpha!=null?Ms.degToRad(this.deviceOrientation.alpha+this.gyroOffset.alpha):0,n=this.deviceOrientation.beta!=null?Ms.degToRad(this.deviceOrientation.beta+this.gyroOffset.beta):0,s=this.deviceOrientation.gamma!=null?Ms.degToRad(this.deviceOrientation.gamma+this.gyroOffset.gamma):0,r=this.screenOrientation!=null?Ms.degToRad(this.screenOrientation):0;return t===0?void 0:(h0(this.targetQuaternion,t,n,s,r),this.targetQuaternion=this.initialRotation.clone().multiply(this.targetQuaternion),this.enableInertia?this.object.quaternion.slerp(this.targetQuaternion,this.inertiaFactor):this.object.quaternion.copy(this.targetQuaternion),this.deviceOrientation)}}updateOffset(){var t;this.deviceOrientation==null||((t=this.deviceOrientation)==null?void 0:t.alpha)===null||(this.gyroOffset.alpha=-this.deviceOrientation.alpha)}updateInitialRotation(t){this.rotationOrigin.copy(t),this.initialObject.lookAt(new C().sub(t)),this.initialRotation.copy(this.initialObject.quaternion)}getInitialRotation(){return this.rotationOrigin.clone()}};k(gn,"isSupported",!1),k(gn,"permissionAsked",!1);let io=gn;to.enabled=!0;function f0(i,e){const t=new a0,n=new c0(i,e),s=()=>{t.addPlugin(a),t.enableControl(vo.gyroscopeControls),o.style.display="block",setTimeout(()=>{t.updateOffset()},1e3)},r=d=>{const u=h=>h!=null?h.toFixed(3):"?";Ui.screenDebug(`${u(d.alpha)}
${u(d.beta)}
${u(d.gamma)}`)},a=new io(i,s,r),o=document.getElementById("gyro-button");return o.onclick=()=>{t.switchControl()},t.addPlugin(n),t}function p0(){new r0;const i=document.getElementById("canvas3D"),e=new ac({canvas:i,antialias:!0});e.setPixelRatio(window.devicePixelRatio),e.shadowMap.enabled=!0,e.shadowMap.type=Dl,e.localClippingEnabled=!0,Vt.enabled=!1,e.outputColorSpace=Zt;const t=70,n=2,s=.1,r=250,a=new o0(t,n,s,r);window.addEventListener("resize",o,!1);function o(){const p=e.domElement,m=p.clientWidth,x=p.clientHeight;a.aspect=m/x,a.updateProjectionMatrix(),e.setSize(m,x,!1)}o(),a.position.copy(fc),q_(a,i);const d=f0(a,i);An.initiate(a,d);const u=new S_;i0(u,a,e,()=>{var m;if(!((m=An.currentRoom)!=null&&m.mesh)){Ui.error(`TransportManager.currentRoom.mesh null: ${JSON.stringify(An.currentRoom)}`);return}const p=An.currentRoom.mesh.getWorldPosition(new C);a.position.copy(p)});function h(){d.update(),ls.update(),e.render(u,a),requestAnimationFrame(h)}requestAnimationFrame(h)}p0();
