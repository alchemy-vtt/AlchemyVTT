var UM=Object.defineProperty;var KM=(i,A,I)=>A in i?UM(i,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):i[A]=I;var xB=(i,A,I)=>(KM(i,typeof A!="symbol"?A+"":A,I),I);(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))g(B);new MutationObserver(B=>{for(const E of B)if(E.type==="childList")for(const t of E.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&g(t)}).observe(document,{childList:!0,subtree:!0});function I(B){const E={};return B.integrity&&(E.integrity=B.integrity),B.referrerpolicy&&(E.referrerPolicy=B.referrerpolicy),B.crossorigin==="use-credentials"?E.credentials="include":B.crossorigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function g(B){if(B.ep)return;B.ep=!0;const E=I(B);fetch(B.href,E)}})();function jQ(){}function hS(i){return i()}function Un(){return Object.create(null)}function iE(i){i.forEach(hS)}function NM(i){return typeof i=="function"}function Ka(i,A){return i!=i?A==A:i!==A||i&&typeof i=="object"||typeof i=="function"}function JM(i){return Object.keys(i).length===0}function KB(i,A){i.appendChild(A)}function Ai(i,A,I){i.insertBefore(A,I||null)}function oE(i){i.parentNode.removeChild(i)}function FM(i,A){for(let I=0;I<i.length;I+=1)i[I]&&i[I].d(A)}function IB(i){return document.createElement(i)}function SS(i){return document.createTextNode(i)}function Ca(){return SS(" ")}function OE(i,A,I,g){return i.addEventListener(A,I,g),()=>i.removeEventListener(A,I,g)}function RC(i,A,I){I==null?i.removeAttribute(A):i.getAttribute(A)!==I&&i.setAttribute(A,I)}function RM(i){return Array.from(i.childNodes)}function qM(i,A){A=""+A,i.wholeText!==A&&(i.data=A)}function Kn(i,A){i.value=A==null?"":A}let PE;function bE(i){PE=i}function pM(){if(!PE)throw new Error("Function called outside component initialization");return PE}function wS(i){pM().$$.on_mount.push(i)}function Nn(i,A){const I=i.$$.callbacks[A.type];I&&I.slice().forEach(g=>g.call(this,A))}const fE=[],po=[],co=[],Jn=[],dM=Promise.resolve();let Ba=!1;function LM(){Ba||(Ba=!0,dM.then(GS))}function Qa(i){co.push(i)}const we=new Set;let Vi=0;function GS(){const i=PE;do{for(;Vi<fE.length;){const A=fE[Vi];Vi++,bE(A),YM(A.$$)}for(bE(null),fE.length=0,Vi=0;po.length;)po.pop()();for(let A=0;A<co.length;A+=1){const I=co[A];we.has(I)||(we.add(I),I())}co.length=0}while(fE.length);for(;Jn.length;)Jn.pop()();Ba=!1,we.clear(),bE(i)}function YM(i){if(i.fragment!==null){i.update(),iE(i.before_update);const A=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,A),i.after_update.forEach(Qa)}}const ko=new Set;let fM;function Na(i,A){i&&i.i&&(ko.delete(i),i.i(A))}function rS(i,A,I,g){if(i&&i.o){if(ko.has(i))return;ko.add(i),fM.c.push(()=>{ko.delete(i),g&&(I&&i.d(1),g())}),i.o(A)}else g&&g()}function cS(i){i&&i.c()}function Ja(i,A,I,g){const{fragment:B,on_mount:E,on_destroy:t,after_update:o}=i.$$;B&&B.m(A,I),g||Qa(()=>{const D=E.map(hS).filter(NM);t?t.push(...D):iE(D),i.$$.on_mount=[]}),o.forEach(Qa)}function Fa(i,A){const I=i.$$;I.fragment!==null&&(iE(I.on_destroy),I.fragment&&I.fragment.d(A),I.on_destroy=I.fragment=null,I.ctx=[])}function uM(i,A){i.$$.dirty[0]===-1&&(fE.push(i),LM(),i.$$.dirty.fill(0)),i.$$.dirty[A/31|0]|=1<<A%31}function Ra(i,A,I,g,B,E,t,o=[-1]){const D=PE;bE(i);const a=i.$$={fragment:null,ctx:null,props:E,update:jQ,not_equal:B,bound:Un(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(A.context||(D?D.$$.context:[])),callbacks:Un(),dirty:o,skip_bound:!1,root:A.target||D.$$.root};t&&t(a.root);let s=!1;if(a.ctx=I?I(i,A.props||{},(h,S,...c)=>{const l=c.length?c[0]:S;return a.ctx&&B(a.ctx[h],a.ctx[h]=l)&&(!a.skip_bound&&a.bound[h]&&a.bound[h](l),s&&uM(i,h)),S}):[],a.update(),s=!0,iE(a.before_update),a.fragment=g?g(a.ctx):!1,A.target){if(A.hydrate){const h=RM(A.target);a.fragment&&a.fragment.l(h),h.forEach(oE)}else a.fragment&&a.fragment.c();A.intro&&Na(i.$$.fragment),Ja(i,A.target,A.anchor,A.customElement),GS()}bE(D)}class qa{$destroy(){Fa(this,1),this.$destroy=jQ}$on(A,I){const g=this.$$.callbacks[A]||(this.$$.callbacks[A]=[]);return g.push(I),()=>{const B=g.indexOf(I);B!==-1&&g.splice(B,1)}}$set(A){this.$$set&&!JM(A)&&(this.$$.skip_bound=!0,this.$$set(A),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="145",FQ={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},RQ={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},HM=0,Fn=1,mM=2,kS=1,TM=2,uE=3,$Q=0,oC=1,gB=2,CB=0,_Q=1,Rn=2,qn=3,pn=4,xM=5,vQ=100,OM=101,bM=102,dn=103,Ln=104,ZM=200,WM=201,vM=202,PM=203,lS=204,yS=205,VM=206,jM=207,_M=208,zM=209,XM=210,$M=0,AU=1,IU=2,Ea=3,gU=4,CU=5,BU=6,QU=7,da=0,EU=1,iU=2,BB=0,oU=1,tU=2,eU=3,aU=4,DU=5,MS=300,AE=301,IE=302,ia=303,oa=304,Wo=306,ta=1e3,kC=1001,ea=1002,dg=1003,Yn=1004,fn=1005,BC=1006,sU=1007,vo=1008,BQ=1009,nU=1010,hU=1011,US=1012,SU=1013,zB=1014,XB=1015,VE=1016,wU=1017,GU=1018,zQ=1020,rU=1021,cU=1022,dC=1023,kU=1024,lU=1025,gQ=1026,gE=1027,yU=1028,MU=1029,UU=1030,KU=1031,NU=1033,Ge=33776,re=33777,ce=33778,ke=33779,un=35840,Hn=35841,mn=35842,Tn=35843,JU=36196,xn=37492,On=37496,bn=37808,Zn=37809,Wn=37810,vn=37811,Pn=37812,Vn=37813,jn=37814,_n=37815,zn=37816,Xn=37817,$n=37818,Ah=37819,Ih=37820,gh=37821,Ch=36492,QQ=3e3,WI=3001,FU=3200,RU=3201,KS=0,qU=1,$C="srgb",$B="srgb-linear",le=7680,pU=519,Bh=35044,Qh="300 es",aa=1035;class tQ{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const B=this._listeners[A];if(B!==void 0){const E=B.indexOf(I);E!==-1&&B.splice(E,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const B=g.slice(0);for(let E=0,t=B.length;E<t;E++)B[E].call(this,A);A.target=null}}}const cg=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ye=Math.PI/180,Eh=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(cg[i&255]+cg[i>>8&255]+cg[i>>16&255]+cg[i>>24&255]+"-"+cg[A&255]+cg[A>>8&255]+"-"+cg[A>>16&15|64]+cg[A>>24&255]+"-"+cg[I&63|128]+cg[I>>8&255]+"-"+cg[I>>16&255]+cg[I>>24&255]+cg[g&255]+cg[g>>8&255]+cg[g>>16&255]+cg[g>>24&255]).toLowerCase()}function Lg(i,A,I){return Math.max(A,Math.min(I,i))}function dU(i,A){return(i%A+A)%A}function Me(i,A,I){return(1-I)*i+I*A}function ih(i){return(i&i-1)===0&&i!==0}function Da(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ji(i,A){switch(A.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Og(i,A){switch(A.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class EI{constructor(A=0,I=0){EI.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6],this.y=B[1]*I+B[4]*g+B[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),B=Math.sin(I),E=this.x-A.x,t=this.y-A.y;return this.x=E*g-t*B+A.x,this.y=E*B+t*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class iC{constructor(){iC.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,B,E,t,o,D,a){const s=this.elements;return s[0]=A,s[1]=B,s[2]=o,s[3]=I,s[4]=E,s[5]=D,s[6]=g,s[7]=t,s[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,E=this.elements,t=g[0],o=g[3],D=g[6],a=g[1],s=g[4],h=g[7],S=g[2],c=g[5],l=g[8],G=B[0],w=B[3],U=B[6],d=B[1],q=B[4],F=B[7],N=B[2],p=B[5],x=B[8];return E[0]=t*G+o*d+D*N,E[3]=t*w+o*q+D*p,E[6]=t*U+o*F+D*x,E[1]=a*G+s*d+h*N,E[4]=a*w+s*q+h*p,E[7]=a*U+s*F+h*x,E[2]=S*G+c*d+l*N,E[5]=S*w+c*q+l*p,E[8]=S*U+c*F+l*x,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],B=A[2],E=A[3],t=A[4],o=A[5],D=A[6],a=A[7],s=A[8];return I*t*s-I*o*a-g*E*s+g*o*D+B*E*a-B*t*D}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],E=A[3],t=A[4],o=A[5],D=A[6],a=A[7],s=A[8],h=s*t-o*a,S=o*D-s*E,c=a*E-t*D,l=I*h+g*S+B*c;if(l===0)return this.set(0,0,0,0,0,0,0,0,0);const G=1/l;return A[0]=h*G,A[1]=(B*a-s*g)*G,A[2]=(o*g-B*t)*G,A[3]=S*G,A[4]=(s*I-B*D)*G,A[5]=(B*E-o*I)*G,A[6]=c*G,A[7]=(g*D-a*I)*G,A[8]=(t*I-g*E)*G,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,B,E,t,o){const D=Math.cos(E),a=Math.sin(E);return this.set(g*D,g*a,-g*(D*t+a*o)+t+A,-B*a,B*D,-B*(-a*t+D*o)+o+I,0,0,1),this}scale(A,I){const g=this.elements;return g[0]*=A,g[3]*=A,g[6]*=A,g[1]*=I,g[4]*=I,g[7]*=I,this}rotate(A){const I=Math.cos(A),g=Math.sin(A),B=this.elements,E=B[0],t=B[3],o=B[6],D=B[1],a=B[4],s=B[7];return B[0]=I*E+g*D,B[3]=I*t+g*a,B[6]=I*o+g*s,B[1]=-g*E+I*D,B[4]=-g*t+I*a,B[7]=-g*o+I*s,this}translate(A,I){const g=this.elements;return g[0]+=A*g[2],g[3]+=A*g[5],g[6]+=A*g[8],g[1]+=I*g[2],g[4]+=I*g[5],g[7]+=I*g[8],this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<9;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}function NS(i){for(let A=i.length-1;A>=0;--A)if(i[A]>=65535)return!0;return!1}function Lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function CQ(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ue={[$C]:{[$B]:CQ},[$B]:{[$C]:lo}},hC={legacyMode:!0,get workingColorSpace(){return $B},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,A,I){if(this.legacyMode||A===I||!A||!I)return i;if(Ue[A]&&Ue[A][I]!==void 0){const g=Ue[A][I];return i.r=g(i.r),i.g=g(i.g),i.b=g(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,A){return this.convert(i,this.workingColorSpace,A)},toWorkingColorSpace:function(i,A){return this.convert(i,A,this.workingColorSpace)}},JS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bg={r:0,g:0,b:0},SC={h:0,s:0,l:0},_i={h:0,s:0,l:0};function Ke(i,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?i+(A-i)*6*I:I<1/2?A:I<2/3?i+(A-i)*6*(2/3-I):i}function zi(i,A){return A.r=i.r,A.g=i.g,A.b=i.b,A}class wI{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=$C){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,hC.toWorkingColorSpace(this,I),this}setRGB(A,I,g,B=$B){return this.r=A,this.g=I,this.b=g,hC.toWorkingColorSpace(this,B),this}setHSL(A,I,g,B=$B){if(A=dU(A,1),I=Lg(I,0,1),g=Lg(g,0,1),I===0)this.r=this.g=this.b=g;else{const E=g<=.5?g*(1+I):g+I-g*I,t=2*g-E;this.r=Ke(t,E,A+1/3),this.g=Ke(t,E,A),this.b=Ke(t,E,A-1/3)}return hC.toWorkingColorSpace(this,B),this}setStyle(A,I=$C){function g(E){E!==void 0&&parseFloat(E)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let B;if(B=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let E;const t=B[1],o=B[2];switch(t){case"rgb":case"rgba":if(E=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(E[1],10))/255,this.g=Math.min(255,parseInt(E[2],10))/255,this.b=Math.min(255,parseInt(E[3],10))/255,hC.toWorkingColorSpace(this,I),g(E[4]),this;if(E=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(E[1],10))/100,this.g=Math.min(100,parseInt(E[2],10))/100,this.b=Math.min(100,parseInt(E[3],10))/100,hC.toWorkingColorSpace(this,I),g(E[4]),this;break;case"hsl":case"hsla":if(E=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const D=parseFloat(E[1])/360,a=parseFloat(E[2])/100,s=parseFloat(E[3])/100;return g(E[4]),this.setHSL(D,a,s,I)}break}}else if(B=/^\#([A-Fa-f\d]+)$/.exec(A)){const E=B[1],t=E.length;if(t===3)return this.r=parseInt(E.charAt(0)+E.charAt(0),16)/255,this.g=parseInt(E.charAt(1)+E.charAt(1),16)/255,this.b=parseInt(E.charAt(2)+E.charAt(2),16)/255,hC.toWorkingColorSpace(this,I),this;if(t===6)return this.r=parseInt(E.charAt(0)+E.charAt(1),16)/255,this.g=parseInt(E.charAt(2)+E.charAt(3),16)/255,this.b=parseInt(E.charAt(4)+E.charAt(5),16)/255,hC.toWorkingColorSpace(this,I),this}return A&&A.length>0?this.setColorName(A,I):this}setColorName(A,I=$C){const g=JS[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=CQ(A.r),this.g=CQ(A.g),this.b=CQ(A.b),this}copyLinearToSRGB(A){return this.r=lo(A.r),this.g=lo(A.g),this.b=lo(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=$C){return hC.fromWorkingColorSpace(zi(this,Bg),A),Lg(Bg.r*255,0,255)<<16^Lg(Bg.g*255,0,255)<<8^Lg(Bg.b*255,0,255)<<0}getHexString(A=$C){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=$B){hC.fromWorkingColorSpace(zi(this,Bg),I);const g=Bg.r,B=Bg.g,E=Bg.b,t=Math.max(g,B,E),o=Math.min(g,B,E);let D,a;const s=(o+t)/2;if(o===t)D=0,a=0;else{const h=t-o;switch(a=s<=.5?h/(t+o):h/(2-t-o),t){case g:D=(B-E)/h+(B<E?6:0);break;case B:D=(E-g)/h+2;break;case E:D=(g-B)/h+4;break}D/=6}return A.h=D,A.s=a,A.l=s,A}getRGB(A,I=$B){return hC.fromWorkingColorSpace(zi(this,Bg),I),A.r=Bg.r,A.g=Bg.g,A.b=Bg.b,A}getStyle(A=$C){return hC.fromWorkingColorSpace(zi(this,Bg),A),A!==$C?`color(${A} ${Bg.r} ${Bg.g} ${Bg.b})`:`rgb(${Bg.r*255|0},${Bg.g*255|0},${Bg.b*255|0})`}offsetHSL(A,I,g){return this.getHSL(SC),SC.h+=A,SC.s+=I,SC.l+=g,this.setHSL(SC.h,SC.s,SC.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(SC),A.getHSL(_i);const g=Me(SC.h,_i.h,I),B=Me(SC.s,_i.s,I),E=Me(SC.l,_i.l,I);return this.setHSL(g,B,E),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}wI.NAMES=JS;let qQ;class FS{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{qQ===void 0&&(qQ=Lo("canvas")),qQ.width=A.width,qQ.height=A.height;const g=qQ.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=qQ}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=Lo("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const B=g.getImageData(0,0,A.width,A.height),E=B.data;for(let t=0;t<E.length;t++)E[t]=CQ(E[t]/255)*255;return g.putImageData(B,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(CQ(I[g]/255)*255):I[g]=CQ(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class RS{constructor(A=null){this.isSource=!0,this.uuid=Ii(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},B=this.data;if(B!==null){let E;if(Array.isArray(B)){E=[];for(let t=0,o=B.length;t<o;t++)B[t].isDataTexture?E.push(Ne(B[t].image)):E.push(Ne(B[t]))}else E=Ne(B);g.url=E}return I||(A.images[this.uuid]=g),g}}function Ne(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?FS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LU=0;class MC extends tQ{constructor(A=MC.DEFAULT_IMAGE,I=MC.DEFAULT_MAPPING,g=kC,B=kC,E=BC,t=vo,o=dC,D=BQ,a=1,s=QQ){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LU++}),this.uuid=Ii(),this.name="",this.source=new RS(A),this.mipmaps=[],this.mapping=I,this.wrapS=g,this.wrapT=B,this.magFilter=E,this.minFilter=t,this.anisotropy=a,this.format=o,this.internalFormat=null,this.type=D,this.offset=new EI(0,0),this.repeat=new EI(1,1),this.center=new EI(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new iC,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=s,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==MS)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case ta:A.x=A.x-Math.floor(A.x);break;case kC:A.x=A.x<0?0:1;break;case ea:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case ta:A.y=A.y-Math.floor(A.y);break;case kC:A.y=A.y<0?0:1;break;case ea:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}MC.DEFAULT_IMAGE=null;MC.DEFAULT_MAPPING=MS;class ag{constructor(A=0,I=0,g=0,B=1){ag.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=B}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,B){return this.x=A,this.y=I,this.z=g,this.w=B,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,E=this.w,t=A.elements;return this.x=t[0]*I+t[4]*g+t[8]*B+t[12]*E,this.y=t[1]*I+t[5]*g+t[9]*B+t[13]*E,this.z=t[2]*I+t[6]*g+t[10]*B+t[14]*E,this.w=t[3]*I+t[7]*g+t[11]*B+t[15]*E,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,B,E;const D=A.elements,a=D[0],s=D[4],h=D[8],S=D[1],c=D[5],l=D[9],G=D[2],w=D[6],U=D[10];if(Math.abs(s-S)<.01&&Math.abs(h-G)<.01&&Math.abs(l-w)<.01){if(Math.abs(s+S)<.1&&Math.abs(h+G)<.1&&Math.abs(l+w)<.1&&Math.abs(a+c+U-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const q=(a+1)/2,F=(c+1)/2,N=(U+1)/2,p=(s+S)/4,x=(h+G)/4,M=(l+w)/4;return q>F&&q>N?q<.01?(g=0,B=.707106781,E=.707106781):(g=Math.sqrt(q),B=p/g,E=x/g):F>N?F<.01?(g=.707106781,B=0,E=.707106781):(B=Math.sqrt(F),g=p/B,E=M/B):N<.01?(g=.707106781,B=.707106781,E=0):(E=Math.sqrt(N),g=x/E,B=M/E),this.set(g,B,E,I),this}let d=Math.sqrt((w-l)*(w-l)+(h-G)*(h-G)+(S-s)*(S-s));return Math.abs(d)<.001&&(d=1),this.x=(w-l)/d,this.y=(h-G)/d,this.z=(S-s)/d,this.w=Math.acos((a+c+U-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NB extends tQ{constructor(A,I,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new ag(0,0,A,I),this.scissorTest=!1,this.viewport=new ag(0,0,A,I);const B={width:A,height:I,depth:1};this.texture=new MC(B,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:BC,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new RS(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qS extends MC{constructor(A=null,I=1,g=1,B=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=dg,this.minFilter=dg,this.wrapR=kC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class YU extends MC{constructor(A=null,I=1,g=1,B=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=dg,this.minFilter=dg,this.wrapR=kC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class EQ{constructor(A=0,I=0,g=0,B=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=B}static slerpFlat(A,I,g,B,E,t,o){let D=g[B+0],a=g[B+1],s=g[B+2],h=g[B+3];const S=E[t+0],c=E[t+1],l=E[t+2],G=E[t+3];if(o===0){A[I+0]=D,A[I+1]=a,A[I+2]=s,A[I+3]=h;return}if(o===1){A[I+0]=S,A[I+1]=c,A[I+2]=l,A[I+3]=G;return}if(h!==G||D!==S||a!==c||s!==l){let w=1-o;const U=D*S+a*c+s*l+h*G,d=U>=0?1:-1,q=1-U*U;if(q>Number.EPSILON){const N=Math.sqrt(q),p=Math.atan2(N,U*d);w=Math.sin(w*p)/N,o=Math.sin(o*p)/N}const F=o*d;if(D=D*w+S*F,a=a*w+c*F,s=s*w+l*F,h=h*w+G*F,w===1-o){const N=1/Math.sqrt(D*D+a*a+s*s+h*h);D*=N,a*=N,s*=N,h*=N}}A[I]=D,A[I+1]=a,A[I+2]=s,A[I+3]=h}static multiplyQuaternionsFlat(A,I,g,B,E,t){const o=g[B],D=g[B+1],a=g[B+2],s=g[B+3],h=E[t],S=E[t+1],c=E[t+2],l=E[t+3];return A[I]=o*l+s*h+D*c-a*S,A[I+1]=D*l+s*S+a*h-o*c,A[I+2]=a*l+s*c+o*S-D*h,A[I+3]=s*l-o*h-D*S-a*c,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,B){return this._x=A,this._y=I,this._z=g,this._w=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,B=A._y,E=A._z,t=A._order,o=Math.cos,D=Math.sin,a=o(g/2),s=o(B/2),h=o(E/2),S=D(g/2),c=D(B/2),l=D(E/2);switch(t){case"XYZ":this._x=S*s*h+a*c*l,this._y=a*c*h-S*s*l,this._z=a*s*l+S*c*h,this._w=a*s*h-S*c*l;break;case"YXZ":this._x=S*s*h+a*c*l,this._y=a*c*h-S*s*l,this._z=a*s*l-S*c*h,this._w=a*s*h+S*c*l;break;case"ZXY":this._x=S*s*h-a*c*l,this._y=a*c*h+S*s*l,this._z=a*s*l+S*c*h,this._w=a*s*h-S*c*l;break;case"ZYX":this._x=S*s*h-a*c*l,this._y=a*c*h+S*s*l,this._z=a*s*l-S*c*h,this._w=a*s*h+S*c*l;break;case"YZX":this._x=S*s*h+a*c*l,this._y=a*c*h+S*s*l,this._z=a*s*l-S*c*h,this._w=a*s*h-S*c*l;break;case"XZY":this._x=S*s*h-a*c*l,this._y=a*c*h-S*s*l,this._z=a*s*l+S*c*h,this._w=a*s*h+S*c*l;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+t)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,B=Math.sin(g);return this._x=A.x*B,this._y=A.y*B,this._z=A.z*B,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],B=I[4],E=I[8],t=I[1],o=I[5],D=I[9],a=I[2],s=I[6],h=I[10],S=g+o+h;if(S>0){const c=.5/Math.sqrt(S+1);this._w=.25/c,this._x=(s-D)*c,this._y=(E-a)*c,this._z=(t-B)*c}else if(g>o&&g>h){const c=2*Math.sqrt(1+g-o-h);this._w=(s-D)/c,this._x=.25*c,this._y=(B+t)/c,this._z=(E+a)/c}else if(o>h){const c=2*Math.sqrt(1+o-g-h);this._w=(E-a)/c,this._x=(B+t)/c,this._y=.25*c,this._z=(D+s)/c}else{const c=2*Math.sqrt(1+h-g-o);this._w=(t-B)/c,this._x=(E+a)/c,this._y=(D+s)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Lg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const B=Math.min(1,I/g);return this.slerp(A,B),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,B=A._y,E=A._z,t=A._w,o=I._x,D=I._y,a=I._z,s=I._w;return this._x=g*s+t*o+B*a-E*D,this._y=B*s+t*D+E*o-g*a,this._z=E*s+t*a+g*D-B*o,this._w=t*s-g*o-B*D-E*a,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,B=this._y,E=this._z,t=this._w;let o=t*A._w+g*A._x+B*A._y+E*A._z;if(o<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,o=-o):this.copy(A),o>=1)return this._w=t,this._x=g,this._y=B,this._z=E,this;const D=1-o*o;if(D<=Number.EPSILON){const c=1-I;return this._w=c*t+I*this._w,this._x=c*g+I*this._x,this._y=c*B+I*this._y,this._z=c*E+I*this._z,this.normalize(),this._onChangeCallback(),this}const a=Math.sqrt(D),s=Math.atan2(a,o),h=Math.sin((1-I)*s)/a,S=Math.sin(I*s)/a;return this._w=t*h+this._w*S,this._x=g*h+this._x*S,this._y=B*h+this._y*S,this._z=E*h+this._z*S,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),B=2*Math.PI*Math.random(),E=2*Math.PI*Math.random();return this.set(I*Math.cos(B),g*Math.sin(E),g*Math.cos(E),I*Math.sin(B))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(A=0,I=0,g=0){P.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(oh.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(oh.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,B=this.z,E=A.elements;return this.x=E[0]*I+E[3]*g+E[6]*B,this.y=E[1]*I+E[4]*g+E[7]*B,this.z=E[2]*I+E[5]*g+E[8]*B,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,E=A.elements,t=1/(E[3]*I+E[7]*g+E[11]*B+E[15]);return this.x=(E[0]*I+E[4]*g+E[8]*B+E[12])*t,this.y=(E[1]*I+E[5]*g+E[9]*B+E[13])*t,this.z=(E[2]*I+E[6]*g+E[10]*B+E[14])*t,this}applyQuaternion(A){const I=this.x,g=this.y,B=this.z,E=A.x,t=A.y,o=A.z,D=A.w,a=D*I+t*B-o*g,s=D*g+o*I-E*B,h=D*B+E*g-t*I,S=-E*I-t*g-o*B;return this.x=a*D+S*-E+s*-o-h*-t,this.y=s*D+S*-t+h*-E-a*-o,this.z=h*D+S*-o+a*-t-s*-E,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,B=this.z,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*B,this.y=E[1]*I+E[5]*g+E[9]*B,this.z=E[2]*I+E[6]*g+E[10]*B,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,B=A.y,E=A.z,t=I.x,o=I.y,D=I.z;return this.x=B*D-E*o,this.y=E*t-g*D,this.z=g*o-B*t,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Je.copy(this).projectOnVector(A),this.sub(Je)}reflect(A){return this.sub(Je.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Lg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,B=this.z-A.z;return I*I+g*g+B*B}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const B=Math.sin(I)*A;return this.x=B*Math.sin(g),this.y=Math.cos(I)*A,this.z=B*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),B=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=B,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Je=new P,oh=new EQ;class gi{constructor(A=new P(1/0,1/0,1/0),I=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){let I=1/0,g=1/0,B=1/0,E=-1/0,t=-1/0,o=-1/0;for(let D=0,a=A.length;D<a;D+=3){const s=A[D],h=A[D+1],S=A[D+2];s<I&&(I=s),h<g&&(g=h),S<B&&(B=S),s>E&&(E=s),h>t&&(t=h),S>o&&(o=S)}return this.min.set(I,g,B),this.max.set(E,t,o),this}setFromBufferAttribute(A){let I=1/0,g=1/0,B=1/0,E=-1/0,t=-1/0,o=-1/0;for(let D=0,a=A.count;D<a;D++){const s=A.getX(D),h=A.getY(D),S=A.getZ(D);s<I&&(I=s),h<g&&(g=h),S<B&&(B=S),s>E&&(E=s),h>t&&(t=h),S>o&&(o=S)}return this.min.set(I,g,B),this.max.set(E,t,o),this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=OB.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0)if(I&&g.attributes!=null&&g.attributes.position!==void 0){const E=g.attributes.position;for(let t=0,o=E.count;t<o;t++)OB.fromBufferAttribute(E,t).applyMatrix4(A.matrixWorld),this.expandByPoint(OB)}else g.boundingBox===null&&g.computeBoundingBox(),Fe.copy(g.boundingBox),Fe.applyMatrix4(A.matrixWorld),this.union(Fe);const B=A.children;for(let E=0,t=B.length;E<t;E++)this.expandByObject(B[E],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,OB),OB.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(RE),Xi.subVectors(this.max,RE),pQ.subVectors(A.a,RE),dQ.subVectors(A.b,RE),LQ.subVectors(A.c,RE),rB.subVectors(dQ,pQ),cB.subVectors(LQ,dQ),bB.subVectors(pQ,LQ);let I=[0,-rB.z,rB.y,0,-cB.z,cB.y,0,-bB.z,bB.y,rB.z,0,-rB.x,cB.z,0,-cB.x,bB.z,0,-bB.x,-rB.y,rB.x,0,-cB.y,cB.x,0,-bB.y,bB.x,0];return!Re(I,pQ,dQ,LQ,Xi)||(I=[1,0,0,0,1,0,0,0,1],!Re(I,pQ,dQ,LQ,Xi))?!1:($i.crossVectors(rB,cB),I=[$i.x,$i.y,$i.z],Re(I,pQ,dQ,LQ,Xi))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return OB.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(OB).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(VC[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),VC[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),VC[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),VC[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),VC[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),VC[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),VC[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),VC[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(VC),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const VC=[new P,new P,new P,new P,new P,new P,new P,new P],OB=new P,Fe=new gi,pQ=new P,dQ=new P,LQ=new P,rB=new P,cB=new P,bB=new P,RE=new P,Xi=new P,$i=new P,ZB=new P;function Re(i,A,I,g,B){for(let E=0,t=i.length-3;E<=t;E+=3){ZB.fromArray(i,E);const o=B.x*Math.abs(ZB.x)+B.y*Math.abs(ZB.y)+B.z*Math.abs(ZB.z),D=A.dot(ZB),a=I.dot(ZB),s=g.dot(ZB);if(Math.max(-Math.max(D,a,s),Math.min(D,a,s))>o)return!1}return!0}const fU=new gi,th=new P,Ao=new P,qe=new P;class Po{constructor(A=new P,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):fU.setFromPoints(A).getCenter(g);let B=0;for(let E=0,t=A.length;E<t;E++)B=Math.max(B,g.distanceToSquared(A[E]));return this.radius=Math.sqrt(B),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;qe.subVectors(A,this.center);const I=qe.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),B=(g-this.radius)*.5;this.center.add(qe.multiplyScalar(B/g)),this.radius+=B}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?Ao.set(0,0,1).multiplyScalar(A.radius):Ao.subVectors(A.center,this.center).normalize().multiplyScalar(A.radius),this.expandByPoint(th.copy(A.center).add(Ao)),this.expandByPoint(th.copy(A.center).sub(Ao)),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jC=new P,pe=new P,Io=new P,kB=new P,de=new P,go=new P,Le=new P;class pS{constructor(A=new P,I=new P(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,jC)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.direction).multiplyScalar(g).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=jC.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(jC.copy(this.direction).multiplyScalar(I).add(this.origin),jC.distanceToSquared(A))}distanceSqToSegment(A,I,g,B){pe.copy(A).add(I).multiplyScalar(.5),Io.copy(I).sub(A).normalize(),kB.copy(this.origin).sub(pe);const E=A.distanceTo(I)*.5,t=-this.direction.dot(Io),o=kB.dot(this.direction),D=-kB.dot(Io),a=kB.lengthSq(),s=Math.abs(1-t*t);let h,S,c,l;if(s>0)if(h=t*D-o,S=t*o-D,l=E*s,h>=0)if(S>=-l)if(S<=l){const G=1/s;h*=G,S*=G,c=h*(h+t*S+2*o)+S*(t*h+S+2*D)+a}else S=E,h=Math.max(0,-(t*S+o)),c=-h*h+S*(S+2*D)+a;else S=-E,h=Math.max(0,-(t*S+o)),c=-h*h+S*(S+2*D)+a;else S<=-l?(h=Math.max(0,-(-t*E+o)),S=h>0?-E:Math.min(Math.max(-E,-D),E),c=-h*h+S*(S+2*D)+a):S<=l?(h=0,S=Math.min(Math.max(-E,-D),E),c=S*(S+2*D)+a):(h=Math.max(0,-(t*E+o)),S=h>0?E:Math.min(Math.max(-E,-D),E),c=-h*h+S*(S+2*D)+a);else S=t>0?-E:E,h=Math.max(0,-(t*S+o)),c=-h*h+S*(S+2*D)+a;return g&&g.copy(this.direction).multiplyScalar(h).add(this.origin),B&&B.copy(Io).multiplyScalar(S).add(pe),c}intersectSphere(A,I){jC.subVectors(A.center,this.origin);const g=jC.dot(this.direction),B=jC.dot(jC)-g*g,E=A.radius*A.radius;if(B>E)return null;const t=Math.sqrt(E-B),o=g-t,D=g+t;return o<0&&D<0?null:o<0?this.at(D,I):this.at(o,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,B,E,t,o,D;const a=1/this.direction.x,s=1/this.direction.y,h=1/this.direction.z,S=this.origin;return a>=0?(g=(A.min.x-S.x)*a,B=(A.max.x-S.x)*a):(g=(A.max.x-S.x)*a,B=(A.min.x-S.x)*a),s>=0?(E=(A.min.y-S.y)*s,t=(A.max.y-S.y)*s):(E=(A.max.y-S.y)*s,t=(A.min.y-S.y)*s),g>t||E>B||((E>g||g!==g)&&(g=E),(t<B||B!==B)&&(B=t),h>=0?(o=(A.min.z-S.z)*h,D=(A.max.z-S.z)*h):(o=(A.max.z-S.z)*h,D=(A.min.z-S.z)*h),g>D||o>B)||((o>g||g!==g)&&(g=o),(D<B||B!==B)&&(B=D),B<0)?null:this.at(g>=0?g:B,I)}intersectsBox(A){return this.intersectBox(A,jC)!==null}intersectTriangle(A,I,g,B,E){de.subVectors(I,A),go.subVectors(g,A),Le.crossVectors(de,go);let t=this.direction.dot(Le),o;if(t>0){if(B)return null;o=1}else if(t<0)o=-1,t=-t;else return null;kB.subVectors(this.origin,A);const D=o*this.direction.dot(go.crossVectors(kB,go));if(D<0)return null;const a=o*this.direction.dot(de.cross(kB));if(a<0||D+a>t)return null;const s=-o*kB.dot(Le);return s<0?null:this.at(s/t,E)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ig{constructor(){Ig.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,I,g,B,E,t,o,D,a,s,h,S,c,l,G,w){const U=this.elements;return U[0]=A,U[4]=I,U[8]=g,U[12]=B,U[1]=E,U[5]=t,U[9]=o,U[13]=D,U[2]=a,U[6]=s,U[10]=h,U[14]=S,U[3]=c,U[7]=l,U[11]=G,U[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ig().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,B=1/YQ.setFromMatrixColumn(A,0).length(),E=1/YQ.setFromMatrixColumn(A,1).length(),t=1/YQ.setFromMatrixColumn(A,2).length();return I[0]=g[0]*B,I[1]=g[1]*B,I[2]=g[2]*B,I[3]=0,I[4]=g[4]*E,I[5]=g[5]*E,I[6]=g[6]*E,I[7]=0,I[8]=g[8]*t,I[9]=g[9]*t,I[10]=g[10]*t,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,B=A.y,E=A.z,t=Math.cos(g),o=Math.sin(g),D=Math.cos(B),a=Math.sin(B),s=Math.cos(E),h=Math.sin(E);if(A.order==="XYZ"){const S=t*s,c=t*h,l=o*s,G=o*h;I[0]=D*s,I[4]=-D*h,I[8]=a,I[1]=c+l*a,I[5]=S-G*a,I[9]=-o*D,I[2]=G-S*a,I[6]=l+c*a,I[10]=t*D}else if(A.order==="YXZ"){const S=D*s,c=D*h,l=a*s,G=a*h;I[0]=S+G*o,I[4]=l*o-c,I[8]=t*a,I[1]=t*h,I[5]=t*s,I[9]=-o,I[2]=c*o-l,I[6]=G+S*o,I[10]=t*D}else if(A.order==="ZXY"){const S=D*s,c=D*h,l=a*s,G=a*h;I[0]=S-G*o,I[4]=-t*h,I[8]=l+c*o,I[1]=c+l*o,I[5]=t*s,I[9]=G-S*o,I[2]=-t*a,I[6]=o,I[10]=t*D}else if(A.order==="ZYX"){const S=t*s,c=t*h,l=o*s,G=o*h;I[0]=D*s,I[4]=l*a-c,I[8]=S*a+G,I[1]=D*h,I[5]=G*a+S,I[9]=c*a-l,I[2]=-a,I[6]=o*D,I[10]=t*D}else if(A.order==="YZX"){const S=t*D,c=t*a,l=o*D,G=o*a;I[0]=D*s,I[4]=G-S*h,I[8]=l*h+c,I[1]=h,I[5]=t*s,I[9]=-o*s,I[2]=-a*s,I[6]=c*h+l,I[10]=S-G*h}else if(A.order==="XZY"){const S=t*D,c=t*a,l=o*D,G=o*a;I[0]=D*s,I[4]=-h,I[8]=a*s,I[1]=S*h+G,I[5]=t*s,I[9]=c*h-l,I[2]=l*h-c,I[6]=o*s,I[10]=G*h+S}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(uU,A,HU)}lookAt(A,I,g){const B=this.elements;return bg.subVectors(A,I),bg.lengthSq()===0&&(bg.z=1),bg.normalize(),lB.crossVectors(g,bg),lB.lengthSq()===0&&(Math.abs(g.z)===1?bg.x+=1e-4:bg.z+=1e-4,bg.normalize(),lB.crossVectors(g,bg)),lB.normalize(),Co.crossVectors(bg,lB),B[0]=lB.x,B[4]=Co.x,B[8]=bg.x,B[1]=lB.y,B[5]=Co.y,B[9]=bg.y,B[2]=lB.z,B[6]=Co.z,B[10]=bg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,E=this.elements,t=g[0],o=g[4],D=g[8],a=g[12],s=g[1],h=g[5],S=g[9],c=g[13],l=g[2],G=g[6],w=g[10],U=g[14],d=g[3],q=g[7],F=g[11],N=g[15],p=B[0],x=B[4],M=B[8],Y=B[12],u=B[1],$=B[5],SA=B[9],W=B[13],v=B[2],CA=B[6],GA=B[10],DA=B[14],BA=B[3],_=B[7],IA=B[11],wA=B[15];return E[0]=t*p+o*u+D*v+a*BA,E[4]=t*x+o*$+D*CA+a*_,E[8]=t*M+o*SA+D*GA+a*IA,E[12]=t*Y+o*W+D*DA+a*wA,E[1]=s*p+h*u+S*v+c*BA,E[5]=s*x+h*$+S*CA+c*_,E[9]=s*M+h*SA+S*GA+c*IA,E[13]=s*Y+h*W+S*DA+c*wA,E[2]=l*p+G*u+w*v+U*BA,E[6]=l*x+G*$+w*CA+U*_,E[10]=l*M+G*SA+w*GA+U*IA,E[14]=l*Y+G*W+w*DA+U*wA,E[3]=d*p+q*u+F*v+N*BA,E[7]=d*x+q*$+F*CA+N*_,E[11]=d*M+q*SA+F*GA+N*IA,E[15]=d*Y+q*W+F*DA+N*wA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],B=A[8],E=A[12],t=A[1],o=A[5],D=A[9],a=A[13],s=A[2],h=A[6],S=A[10],c=A[14],l=A[3],G=A[7],w=A[11],U=A[15];return l*(+E*D*h-B*a*h-E*o*S+g*a*S+B*o*c-g*D*c)+G*(+I*D*c-I*a*S+E*t*S-B*t*c+B*a*s-E*D*s)+w*(+I*a*h-I*o*c-E*t*h+g*t*c+E*o*s-g*a*s)+U*(-B*o*s-I*D*h+I*o*S+B*t*h-g*t*S+g*D*s)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const B=this.elements;return A.isVector3?(B[12]=A.x,B[13]=A.y,B[14]=A.z):(B[12]=A,B[13]=I,B[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],E=A[3],t=A[4],o=A[5],D=A[6],a=A[7],s=A[8],h=A[9],S=A[10],c=A[11],l=A[12],G=A[13],w=A[14],U=A[15],d=h*w*a-G*S*a+G*D*c-o*w*c-h*D*U+o*S*U,q=l*S*a-s*w*a-l*D*c+t*w*c+s*D*U-t*S*U,F=s*G*a-l*h*a+l*o*c-t*G*c-s*o*U+t*h*U,N=l*h*D-s*G*D-l*o*S+t*G*S+s*o*w-t*h*w,p=I*d+g*q+B*F+E*N;if(p===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/p;return A[0]=d*x,A[1]=(G*S*E-h*w*E-G*B*c+g*w*c+h*B*U-g*S*U)*x,A[2]=(o*w*E-G*D*E+G*B*a-g*w*a-o*B*U+g*D*U)*x,A[3]=(h*D*E-o*S*E-h*B*a+g*S*a+o*B*c-g*D*c)*x,A[4]=q*x,A[5]=(s*w*E-l*S*E+l*B*c-I*w*c-s*B*U+I*S*U)*x,A[6]=(l*D*E-t*w*E-l*B*a+I*w*a+t*B*U-I*D*U)*x,A[7]=(t*S*E-s*D*E+s*B*a-I*S*a-t*B*c+I*D*c)*x,A[8]=F*x,A[9]=(l*h*E-s*G*E-l*g*c+I*G*c+s*g*U-I*h*U)*x,A[10]=(t*G*E-l*o*E+l*g*a-I*G*a-t*g*U+I*o*U)*x,A[11]=(s*o*E-t*h*E-s*g*a+I*h*a+t*g*c-I*o*c)*x,A[12]=N*x,A[13]=(s*G*B-l*h*B+l*g*S-I*G*S-s*g*w+I*h*w)*x,A[14]=(l*o*B-t*G*B-l*g*D+I*G*D+t*g*w-I*o*w)*x,A[15]=(t*h*B-s*o*B+s*g*D-I*h*D-t*g*S+I*o*S)*x,this}scale(A){const I=this.elements,g=A.x,B=A.y,E=A.z;return I[0]*=g,I[4]*=B,I[8]*=E,I[1]*=g,I[5]*=B,I[9]*=E,I[2]*=g,I[6]*=B,I[10]*=E,I[3]*=g,I[7]*=B,I[11]*=E,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],B=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,B))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),B=Math.sin(I),E=1-g,t=A.x,o=A.y,D=A.z,a=E*t,s=E*o;return this.set(a*t+g,a*o-B*D,a*D+B*o,0,a*o+B*D,s*o+g,s*D-B*t,0,a*D-B*o,s*D+B*t,E*D*D+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,B,E,t){return this.set(1,g,E,0,A,1,t,0,I,B,1,0,0,0,0,1),this}compose(A,I,g){const B=this.elements,E=I._x,t=I._y,o=I._z,D=I._w,a=E+E,s=t+t,h=o+o,S=E*a,c=E*s,l=E*h,G=t*s,w=t*h,U=o*h,d=D*a,q=D*s,F=D*h,N=g.x,p=g.y,x=g.z;return B[0]=(1-(G+U))*N,B[1]=(c+F)*N,B[2]=(l-q)*N,B[3]=0,B[4]=(c-F)*p,B[5]=(1-(S+U))*p,B[6]=(w+d)*p,B[7]=0,B[8]=(l+q)*x,B[9]=(w-d)*x,B[10]=(1-(S+G))*x,B[11]=0,B[12]=A.x,B[13]=A.y,B[14]=A.z,B[15]=1,this}decompose(A,I,g){const B=this.elements;let E=YQ.set(B[0],B[1],B[2]).length();const t=YQ.set(B[4],B[5],B[6]).length(),o=YQ.set(B[8],B[9],B[10]).length();this.determinant()<0&&(E=-E),A.x=B[12],A.y=B[13],A.z=B[14],wC.copy(this);const a=1/E,s=1/t,h=1/o;return wC.elements[0]*=a,wC.elements[1]*=a,wC.elements[2]*=a,wC.elements[4]*=s,wC.elements[5]*=s,wC.elements[6]*=s,wC.elements[8]*=h,wC.elements[9]*=h,wC.elements[10]*=h,I.setFromRotationMatrix(wC),g.x=E,g.y=t,g.z=o,this}makePerspective(A,I,g,B,E,t){const o=this.elements,D=2*E/(I-A),a=2*E/(g-B),s=(I+A)/(I-A),h=(g+B)/(g-B),S=-(t+E)/(t-E),c=-2*t*E/(t-E);return o[0]=D,o[4]=0,o[8]=s,o[12]=0,o[1]=0,o[5]=a,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=S,o[14]=c,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,B,E,t){const o=this.elements,D=1/(I-A),a=1/(g-B),s=1/(t-E),h=(I+A)*D,S=(g+B)*a,c=(t+E)*s;return o[0]=2*D,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*a,o[9]=0,o[13]=-S,o[2]=0,o[6]=0,o[10]=-2*s,o[14]=-c,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<16;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const YQ=new P,wC=new Ig,uU=new P(0,0,0),HU=new P(1,1,1),lB=new P,Co=new P,bg=new P,eh=new Ig,ah=new EQ;class Ci{constructor(A=0,I=0,g=0,B=Ci.DefaultOrder){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=B}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,B=this._order){return this._x=A,this._y=I,this._z=g,this._order=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const B=A.elements,E=B[0],t=B[4],o=B[8],D=B[1],a=B[5],s=B[9],h=B[2],S=B[6],c=B[10];switch(I){case"XYZ":this._y=Math.asin(Lg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-s,c),this._z=Math.atan2(-t,E)):(this._x=Math.atan2(S,a),this._z=0);break;case"YXZ":this._x=Math.asin(-Lg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(o,c),this._z=Math.atan2(D,a)):(this._y=Math.atan2(-h,E),this._z=0);break;case"ZXY":this._x=Math.asin(Lg(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-h,c),this._z=Math.atan2(-t,a)):(this._y=0,this._z=Math.atan2(D,E));break;case"ZYX":this._y=Math.asin(-Lg(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,c),this._z=Math.atan2(D,E)):(this._x=0,this._z=Math.atan2(-t,a));break;case"YZX":this._z=Math.asin(Lg(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(-s,a),this._y=Math.atan2(-h,E)):(this._x=0,this._y=Math.atan2(o,c));break;case"XZY":this._z=Math.asin(-Lg(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(S,a),this._y=Math.atan2(o,E)):(this._x=Math.atan2(-s,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return eh.makeRotationFromQuaternion(A),this.setFromRotationMatrix(eh,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return ah.setFromEuler(this),this.setFromQuaternion(ah,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ci.DefaultOrder="XYZ";Ci.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class dS{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let mU=0;const Dh=new P,fQ=new EQ,_C=new Ig,Bo=new P,qE=new P,TU=new P,xU=new EQ,sh=new P(1,0,0),nh=new P(0,1,0),hh=new P(0,0,1),OU={type:"added"},Sh={type:"removed"};class Sg extends tQ{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mU++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sg.DefaultUp.clone();const A=new P,I=new Ci,g=new EQ,B=new P(1,1,1);function E(){g.setFromEuler(I,!1)}function t(){I.setFromQuaternion(g,void 0,!1)}I._onChange(E),g._onChange(t),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:B},modelViewMatrix:{value:new Ig},normalMatrix:{value:new iC}}),this.matrix=new Ig,this.matrixWorld=new Ig,this.matrixAutoUpdate=Sg.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Sg.DefaultMatrixWorldAutoUpdate,this.layers=new dS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return fQ.setFromAxisAngle(A,I),this.quaternion.multiply(fQ),this}rotateOnWorldAxis(A,I){return fQ.setFromAxisAngle(A,I),this.quaternion.premultiply(fQ),this}rotateX(A){return this.rotateOnAxis(sh,A)}rotateY(A){return this.rotateOnAxis(nh,A)}rotateZ(A){return this.rotateOnAxis(hh,A)}translateOnAxis(A,I){return Dh.copy(A).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(sh,A)}translateY(A){return this.translateOnAxis(nh,A)}translateZ(A){return this.translateOnAxis(hh,A)}localToWorld(A){return A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return A.applyMatrix4(_C.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?Bo.copy(A):Bo.set(A,I,g);const B=this.parent;this.updateWorldMatrix(!0,!1),qE.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_C.lookAt(qE,Bo,this.up):_C.lookAt(Bo,qE,this.up),this.quaternion.setFromRotationMatrix(_C),B&&(_C.extractRotation(B.matrixWorld),fQ.setFromRotationMatrix(_C),this.quaternion.premultiply(fQ.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(OU)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(Sh)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(Sh)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),_C.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),_C.multiply(A.parent.matrixWorld)),A.applyMatrix4(_C),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,B=this.children.length;g<B;g++){const t=this.children[g].getObjectByProperty(A,I);if(t!==void 0)return t}}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qE,A,TU),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qE,xU,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,B=I.length;g<B;g++){const E=I[g];(E.matrixWorldAutoUpdate===!0||A===!0)&&E.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const B=this.children;for(let E=0,t=B.length;E<t;E++){const o=B[E];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const B={};B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.castShadow===!0&&(B.castShadow=!0),this.receiveShadow===!0&&(B.receiveShadow=!0),this.visible===!1&&(B.visible=!1),this.frustumCulled===!1&&(B.frustumCulled=!1),this.renderOrder!==0&&(B.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(B.userData=this.userData),B.layers=this.layers.mask,B.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(B.matrixAutoUpdate=!1),this.isInstancedMesh&&(B.type="InstancedMesh",B.count=this.count,B.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(B.instanceColor=this.instanceColor.toJSON()));function E(o,D){return o[D.uuid]===void 0&&(o[D.uuid]=D.toJSON(A)),D.uuid}if(this.isScene)this.background&&(this.background.isColor?B.background=this.background.toJSON():this.background.isTexture&&(B.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(B.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){B.geometry=E(A.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const D=o.shapes;if(Array.isArray(D))for(let a=0,s=D.length;a<s;a++){const h=D[a];E(A.shapes,h)}else E(A.shapes,D)}}if(this.isSkinnedMesh&&(B.bindMode=this.bindMode,B.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(E(A.skeletons,this.skeleton),B.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let D=0,a=this.material.length;D<a;D++)o.push(E(A.materials,this.material[D]));B.material=o}else B.material=E(A.materials,this.material);if(this.children.length>0){B.children=[];for(let o=0;o<this.children.length;o++)B.children.push(this.children[o].toJSON(A).object)}if(this.animations.length>0){B.animations=[];for(let o=0;o<this.animations.length;o++){const D=this.animations[o];B.animations.push(E(A.animations,D))}}if(I){const o=t(A.geometries),D=t(A.materials),a=t(A.textures),s=t(A.images),h=t(A.shapes),S=t(A.skeletons),c=t(A.animations),l=t(A.nodes);o.length>0&&(g.geometries=o),D.length>0&&(g.materials=D),a.length>0&&(g.textures=a),s.length>0&&(g.images=s),h.length>0&&(g.shapes=h),S.length>0&&(g.skeletons=S),c.length>0&&(g.animations=c),l.length>0&&(g.nodes=l)}return g.object=B,g;function t(o){const D=[];for(const a in o){const s=o[a];delete s.metadata,D.push(s)}return D}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const B=A.children[g];this.add(B.clone())}return this}}Sg.DefaultUp=new P(0,1,0);Sg.DefaultMatrixAutoUpdate=!0;Sg.DefaultMatrixWorldAutoUpdate=!0;const GC=new P,zC=new P,Ye=new P,XC=new P,uQ=new P,HQ=new P,wh=new P,fe=new P,ue=new P,He=new P;class AB{constructor(A=new P,I=new P,g=new P){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,B){B.subVectors(g,I),GC.subVectors(A,I),B.cross(GC);const E=B.lengthSq();return E>0?B.multiplyScalar(1/Math.sqrt(E)):B.set(0,0,0)}static getBarycoord(A,I,g,B,E){GC.subVectors(B,I),zC.subVectors(g,I),Ye.subVectors(A,I);const t=GC.dot(GC),o=GC.dot(zC),D=GC.dot(Ye),a=zC.dot(zC),s=zC.dot(Ye),h=t*a-o*o;if(h===0)return E.set(-2,-1,-1);const S=1/h,c=(a*D-o*s)*S,l=(t*s-o*D)*S;return E.set(1-c-l,l,c)}static containsPoint(A,I,g,B){return this.getBarycoord(A,I,g,B,XC),XC.x>=0&&XC.y>=0&&XC.x+XC.y<=1}static getUV(A,I,g,B,E,t,o,D){return this.getBarycoord(A,I,g,B,XC),D.set(0,0),D.addScaledVector(E,XC.x),D.addScaledVector(t,XC.y),D.addScaledVector(o,XC.z),D}static isFrontFacing(A,I,g,B){return GC.subVectors(g,I),zC.subVectors(A,I),GC.cross(zC).dot(B)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,B){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[B]),this}setFromAttributeAndIndices(A,I,g,B){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,B),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return GC.subVectors(this.c,this.b),zC.subVectors(this.a,this.b),GC.cross(zC).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return AB.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return AB.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,B,E){return AB.getUV(A,this.a,this.b,this.c,I,g,B,E)}containsPoint(A){return AB.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return AB.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,B=this.b,E=this.c;let t,o;uQ.subVectors(B,g),HQ.subVectors(E,g),fe.subVectors(A,g);const D=uQ.dot(fe),a=HQ.dot(fe);if(D<=0&&a<=0)return I.copy(g);ue.subVectors(A,B);const s=uQ.dot(ue),h=HQ.dot(ue);if(s>=0&&h<=s)return I.copy(B);const S=D*h-s*a;if(S<=0&&D>=0&&s<=0)return t=D/(D-s),I.copy(g).addScaledVector(uQ,t);He.subVectors(A,E);const c=uQ.dot(He),l=HQ.dot(He);if(l>=0&&c<=l)return I.copy(E);const G=c*a-D*l;if(G<=0&&a>=0&&l<=0)return o=a/(a-l),I.copy(g).addScaledVector(HQ,o);const w=s*l-c*h;if(w<=0&&h-s>=0&&c-l>=0)return wh.subVectors(E,B),o=(h-s)/(h-s+(c-l)),I.copy(B).addScaledVector(wh,o);const U=1/(w+G+S);return t=G*U,o=S*U,I.copy(g).addScaledVector(uQ,t).addScaledVector(HQ,o)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let bU=0;class tE extends tQ{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bU++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=_Q,this.side=$Q,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lS,this.blendDst=yS,this.blendEquation=vQ,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pU,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=le,this.stencilZFail=le,this.stencilZPass=le,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn("THREE.Material: '"+I+"' parameter is undefined.");continue}const B=this[I];if(B===void 0){console.warn("THREE."+this.type+": '"+I+"' is not a property of this material.");continue}B&&B.isColor?B.set(g):B&&B.isVector3&&g&&g.isVector3?B.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==_Q&&(g.blending=this.blending),this.side!==$Q&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),JSON.stringify(this.userData)!=="{}"&&(g.userData=this.userData);function B(E){const t=[];for(const o in E){const D=E[o];delete D.metadata,t.push(D)}return t}if(I){const E=B(A.textures),t=B(A.images);E.length>0&&(g.textures=E),t.length>0&&(g.images=t)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const B=I.length;g=new Array(B);for(let E=0;E!==B;++E)g[E]=I[E].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class Vo extends tE{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const $I=new P,Qo=new EI;class LC{constructor(A,I,g){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g===!0,this.usage=Bh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let B=0,E=this.itemSize;B<E;B++)this.array[A+B]=I.array[g+B];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)Qo.fromBufferAttribute(this,I),Qo.applyMatrix3(A),this.setXY(I,Qo.x,Qo.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)$I.fromBufferAttribute(this,I),$I.applyMatrix3(A),this.setXYZ(I,$I.x,$I.y,$I.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)$I.fromBufferAttribute(this,I),$I.applyMatrix4(A),this.setXYZ(I,$I.x,$I.y,$I.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)$I.fromBufferAttribute(this,I),$I.applyNormalMatrix(A),this.setXYZ(I,$I.x,$I.y,$I.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)$I.fromBufferAttribute(this,I),$I.transformDirection(A),this.setXYZ(I,$I.x,$I.y,$I.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=ji(I,this.array)),I}setX(A,I){return this.normalized&&(I=Og(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=ji(I,this.array)),I}setY(A,I){return this.normalized&&(I=Og(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=ji(I,this.array)),I}setZ(A,I){return this.normalized&&(I=Og(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=ji(I,this.array)),I}setW(A,I){return this.normalized&&(I=Og(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=Og(I,this.array),g=Og(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,B){return A*=this.itemSize,this.normalized&&(I=Og(I,this.array),g=Og(g,this.array),B=Og(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this}setXYZW(A,I,g,B,E){return A*=this.itemSize,this.normalized&&(I=Og(I,this.array),g=Og(g,this.array),B=Og(B,this.array),E=Og(E,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this.array[A+3]=E,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Bh&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class LS extends LC{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class YS extends LC{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class yC extends LC{constructor(A,I,g){super(new Float32Array(A),I,g)}}let ZU=0;const gC=new Ig,me=new Sg,mQ=new P,Zg=new gi,pE=new gi,eg=new P;class EB extends tQ{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZU++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(NS(A)?YS:LS)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const E=new iC().getNormalMatrix(A);g.applyNormalMatrix(E),g.needsUpdate=!0}const B=this.attributes.tangent;return B!==void 0&&(B.transformDirection(A),B.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return gC.makeRotationFromQuaternion(A),this.applyMatrix4(gC),this}rotateX(A){return gC.makeRotationX(A),this.applyMatrix4(gC),this}rotateY(A){return gC.makeRotationY(A),this.applyMatrix4(gC),this}rotateZ(A){return gC.makeRotationZ(A),this.applyMatrix4(gC),this}translate(A,I,g){return gC.makeTranslation(A,I,g),this.applyMatrix4(gC),this}scale(A,I,g){return gC.makeScale(A,I,g),this.applyMatrix4(gC),this}lookAt(A){return me.lookAt(A),me.updateMatrix(),this.applyMatrix4(me.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mQ).negate(),this.translate(mQ.x,mQ.y,mQ.z),this}setFromPoints(A){const I=[];for(let g=0,B=A.length;g<B;g++){const E=A[g];I.push(E.x,E.y,E.z||0)}return this.setAttribute("position",new yC(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,B=I.length;g<B;g++){const E=I[g];Zg.setFromBufferAttribute(E),this.morphTargetsRelative?(eg.addVectors(this.boundingBox.min,Zg.min),this.boundingBox.expandByPoint(eg),eg.addVectors(this.boundingBox.max,Zg.max),this.boundingBox.expandByPoint(eg)):(this.boundingBox.expandByPoint(Zg.min),this.boundingBox.expandByPoint(Zg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(A){const g=this.boundingSphere.center;if(Zg.setFromBufferAttribute(A),I)for(let E=0,t=I.length;E<t;E++){const o=I[E];pE.setFromBufferAttribute(o),this.morphTargetsRelative?(eg.addVectors(Zg.min,pE.min),Zg.expandByPoint(eg),eg.addVectors(Zg.max,pE.max),Zg.expandByPoint(eg)):(Zg.expandByPoint(pE.min),Zg.expandByPoint(pE.max))}Zg.getCenter(g);let B=0;for(let E=0,t=A.count;E<t;E++)eg.fromBufferAttribute(A,E),B=Math.max(B,g.distanceToSquared(eg));if(I)for(let E=0,t=I.length;E<t;E++){const o=I[E],D=this.morphTargetsRelative;for(let a=0,s=o.count;a<s;a++)eg.fromBufferAttribute(o,a),D&&(mQ.fromBufferAttribute(A,a),eg.add(mQ)),B=Math.max(B,g.distanceToSquared(eg))}this.boundingSphere.radius=Math.sqrt(B),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,B=I.position.array,E=I.normal.array,t=I.uv.array,o=B.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new LC(new Float32Array(4*o),4));const D=this.getAttribute("tangent").array,a=[],s=[];for(let u=0;u<o;u++)a[u]=new P,s[u]=new P;const h=new P,S=new P,c=new P,l=new EI,G=new EI,w=new EI,U=new P,d=new P;function q(u,$,SA){h.fromArray(B,u*3),S.fromArray(B,$*3),c.fromArray(B,SA*3),l.fromArray(t,u*2),G.fromArray(t,$*2),w.fromArray(t,SA*2),S.sub(h),c.sub(h),G.sub(l),w.sub(l);const W=1/(G.x*w.y-w.x*G.y);!isFinite(W)||(U.copy(S).multiplyScalar(w.y).addScaledVector(c,-G.y).multiplyScalar(W),d.copy(c).multiplyScalar(G.x).addScaledVector(S,-w.x).multiplyScalar(W),a[u].add(U),a[$].add(U),a[SA].add(U),s[u].add(d),s[$].add(d),s[SA].add(d))}let F=this.groups;F.length===0&&(F=[{start:0,count:g.length}]);for(let u=0,$=F.length;u<$;++u){const SA=F[u],W=SA.start,v=SA.count;for(let CA=W,GA=W+v;CA<GA;CA+=3)q(g[CA+0],g[CA+1],g[CA+2])}const N=new P,p=new P,x=new P,M=new P;function Y(u){x.fromArray(E,u*3),M.copy(x);const $=a[u];N.copy($),N.sub(x.multiplyScalar(x.dot($))).normalize(),p.crossVectors(M,$);const W=p.dot(s[u])<0?-1:1;D[u*4]=N.x,D[u*4+1]=N.y,D[u*4+2]=N.z,D[u*4+3]=W}for(let u=0,$=F.length;u<$;++u){const SA=F[u],W=SA.start,v=SA.count;for(let CA=W,GA=W+v;CA<GA;CA+=3)Y(g[CA+0]),Y(g[CA+1]),Y(g[CA+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new LC(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let S=0,c=g.count;S<c;S++)g.setXYZ(S,0,0,0);const B=new P,E=new P,t=new P,o=new P,D=new P,a=new P,s=new P,h=new P;if(A)for(let S=0,c=A.count;S<c;S+=3){const l=A.getX(S+0),G=A.getX(S+1),w=A.getX(S+2);B.fromBufferAttribute(I,l),E.fromBufferAttribute(I,G),t.fromBufferAttribute(I,w),s.subVectors(t,E),h.subVectors(B,E),s.cross(h),o.fromBufferAttribute(g,l),D.fromBufferAttribute(g,G),a.fromBufferAttribute(g,w),o.add(s),D.add(s),a.add(s),g.setXYZ(l,o.x,o.y,o.z),g.setXYZ(G,D.x,D.y,D.z),g.setXYZ(w,a.x,a.y,a.z)}else for(let S=0,c=I.count;S<c;S+=3)B.fromBufferAttribute(I,S+0),E.fromBufferAttribute(I,S+1),t.fromBufferAttribute(I,S+2),s.subVectors(t,E),h.subVectors(B,E),s.cross(h),g.setXYZ(S+0,s.x,s.y,s.z),g.setXYZ(S+1,s.x,s.y,s.z),g.setXYZ(S+2,s.x,s.y,s.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)eg.fromBufferAttribute(A,I),eg.normalize(),A.setXYZ(I,eg.x,eg.y,eg.z)}toNonIndexed(){function A(o,D){const a=o.array,s=o.itemSize,h=o.normalized,S=new a.constructor(D.length*s);let c=0,l=0;for(let G=0,w=D.length;G<w;G++){o.isInterleavedBufferAttribute?c=D[G]*o.data.stride+o.offset:c=D[G]*s;for(let U=0;U<s;U++)S[l++]=a[c++]}return new LC(S,s,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new EB,g=this.index.array,B=this.attributes;for(const o in B){const D=B[o],a=A(D,g);I.setAttribute(o,a)}const E=this.morphAttributes;for(const o in E){const D=[],a=E[o];for(let s=0,h=a.length;s<h;s++){const S=a[s],c=A(S,g);D.push(c)}I.morphAttributes[o]=D}I.morphTargetsRelative=this.morphTargetsRelative;const t=this.groups;for(let o=0,D=t.length;o<D;o++){const a=t[o];I.addGroup(a.start,a.count,a.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const D=this.parameters;for(const a in D)D[a]!==void 0&&(A[a]=D[a]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const D in g){const a=g[D];A.data.attributes[D]=a.toJSON(A.data)}const B={};let E=!1;for(const D in this.morphAttributes){const a=this.morphAttributes[D],s=[];for(let h=0,S=a.length;h<S;h++){const c=a[h];s.push(c.toJSON(A.data))}s.length>0&&(B[D]=s,E=!0)}E&&(A.data.morphAttributes=B,A.data.morphTargetsRelative=this.morphTargetsRelative);const t=this.groups;t.length>0&&(A.data.groups=JSON.parse(JSON.stringify(t)));const o=this.boundingSphere;return o!==null&&(A.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const B=A.attributes;for(const a in B){const s=B[a];this.setAttribute(a,s.clone(I))}const E=A.morphAttributes;for(const a in E){const s=[],h=E[a];for(let S=0,c=h.length;S<c;S++)s.push(h[S].clone(I));this.morphAttributes[a]=s}this.morphTargetsRelative=A.morphTargetsRelative;const t=A.groups;for(let a=0,s=t.length;a<s;a++){const h=t[a];this.addGroup(h.start,h.count,h.materialIndex)}const o=A.boundingBox;o!==null&&(this.boundingBox=o.clone());const D=A.boundingSphere;return D!==null&&(this.boundingSphere=D.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gh=new Ig,TQ=new pS,Te=new Po,yB=new P,MB=new P,UB=new P,xe=new P,Oe=new P,be=new P,Eo=new P,io=new P,oo=new P,to=new EI,eo=new EI,ao=new EI,Ze=new P,Do=new P;class lC extends Sg{constructor(A=new EB,I=new Vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const B=I[g[0]];if(B!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let E=0,t=B.length;E<t;E++){const o=B[E].name||String(E);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=E}}}}raycast(A,I){const g=this.geometry,B=this.material,E=this.matrixWorld;if(B===void 0||(g.boundingSphere===null&&g.computeBoundingSphere(),Te.copy(g.boundingSphere),Te.applyMatrix4(E),A.ray.intersectsSphere(Te)===!1)||(Gh.copy(E).invert(),TQ.copy(A.ray).applyMatrix4(Gh),g.boundingBox!==null&&TQ.intersectsBox(g.boundingBox)===!1))return;let t;const o=g.index,D=g.attributes.position,a=g.morphAttributes.position,s=g.morphTargetsRelative,h=g.attributes.uv,S=g.attributes.uv2,c=g.groups,l=g.drawRange;if(o!==null)if(Array.isArray(B))for(let G=0,w=c.length;G<w;G++){const U=c[G],d=B[U.materialIndex],q=Math.max(U.start,l.start),F=Math.min(o.count,Math.min(U.start+U.count,l.start+l.count));for(let N=q,p=F;N<p;N+=3){const x=o.getX(N),M=o.getX(N+1),Y=o.getX(N+2);t=so(this,d,A,TQ,D,a,s,h,S,x,M,Y),t&&(t.faceIndex=Math.floor(N/3),t.face.materialIndex=U.materialIndex,I.push(t))}}else{const G=Math.max(0,l.start),w=Math.min(o.count,l.start+l.count);for(let U=G,d=w;U<d;U+=3){const q=o.getX(U),F=o.getX(U+1),N=o.getX(U+2);t=so(this,B,A,TQ,D,a,s,h,S,q,F,N),t&&(t.faceIndex=Math.floor(U/3),I.push(t))}}else if(D!==void 0)if(Array.isArray(B))for(let G=0,w=c.length;G<w;G++){const U=c[G],d=B[U.materialIndex],q=Math.max(U.start,l.start),F=Math.min(D.count,Math.min(U.start+U.count,l.start+l.count));for(let N=q,p=F;N<p;N+=3){const x=N,M=N+1,Y=N+2;t=so(this,d,A,TQ,D,a,s,h,S,x,M,Y),t&&(t.faceIndex=Math.floor(N/3),t.face.materialIndex=U.materialIndex,I.push(t))}}else{const G=Math.max(0,l.start),w=Math.min(D.count,l.start+l.count);for(let U=G,d=w;U<d;U+=3){const q=U,F=U+1,N=U+2;t=so(this,B,A,TQ,D,a,s,h,S,q,F,N),t&&(t.faceIndex=Math.floor(U/3),I.push(t))}}}}function WU(i,A,I,g,B,E,t,o){let D;if(A.side===oC?D=g.intersectTriangle(t,E,B,!0,o):D=g.intersectTriangle(B,E,t,A.side!==gB,o),D===null)return null;Do.copy(o),Do.applyMatrix4(i.matrixWorld);const a=I.ray.origin.distanceTo(Do);return a<I.near||a>I.far?null:{distance:a,point:Do.clone(),object:i}}function so(i,A,I,g,B,E,t,o,D,a,s,h){yB.fromBufferAttribute(B,a),MB.fromBufferAttribute(B,s),UB.fromBufferAttribute(B,h);const S=i.morphTargetInfluences;if(E&&S){Eo.set(0,0,0),io.set(0,0,0),oo.set(0,0,0);for(let l=0,G=E.length;l<G;l++){const w=S[l],U=E[l];w!==0&&(xe.fromBufferAttribute(U,a),Oe.fromBufferAttribute(U,s),be.fromBufferAttribute(U,h),t?(Eo.addScaledVector(xe,w),io.addScaledVector(Oe,w),oo.addScaledVector(be,w)):(Eo.addScaledVector(xe.sub(yB),w),io.addScaledVector(Oe.sub(MB),w),oo.addScaledVector(be.sub(UB),w)))}yB.add(Eo),MB.add(io),UB.add(oo)}i.isSkinnedMesh&&(i.boneTransform(a,yB),i.boneTransform(s,MB),i.boneTransform(h,UB));const c=WU(i,A,I,g,yB,MB,UB,Ze);if(c){o&&(to.fromBufferAttribute(o,a),eo.fromBufferAttribute(o,s),ao.fromBufferAttribute(o,h),c.uv=AB.getUV(Ze,yB,MB,UB,to,eo,ao,new EI)),D&&(to.fromBufferAttribute(D,a),eo.fromBufferAttribute(D,s),ao.fromBufferAttribute(D,h),c.uv2=AB.getUV(Ze,yB,MB,UB,to,eo,ao,new EI));const l={a,b:s,c:h,normal:new P,materialIndex:0};AB.getNormal(yB,MB,UB,l.normal),c.face=l}return c}class eQ extends EB{constructor(A=1,I=1,g=1,B=1,E=1,t=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:B,heightSegments:E,depthSegments:t};const o=this;B=Math.floor(B),E=Math.floor(E),t=Math.floor(t);const D=[],a=[],s=[],h=[];let S=0,c=0;l("z","y","x",-1,-1,g,I,A,t,E,0),l("z","y","x",1,-1,g,I,-A,t,E,1),l("x","z","y",1,1,A,g,I,B,t,2),l("x","z","y",1,-1,A,g,-I,B,t,3),l("x","y","z",1,-1,A,I,g,B,E,4),l("x","y","z",-1,-1,A,I,-g,B,E,5),this.setIndex(D),this.setAttribute("position",new yC(a,3)),this.setAttribute("normal",new yC(s,3)),this.setAttribute("uv",new yC(h,2));function l(G,w,U,d,q,F,N,p,x,M,Y){const u=F/x,$=N/M,SA=F/2,W=N/2,v=p/2,CA=x+1,GA=M+1;let DA=0,BA=0;const _=new P;for(let IA=0;IA<GA;IA++){const wA=IA*$-W;for(let nA=0;nA<CA;nA++){const rA=nA*u-SA;_[G]=rA*d,_[w]=wA*q,_[U]=v,a.push(_.x,_.y,_.z),_[G]=0,_[w]=0,_[U]=p>0?1:-1,s.push(_.x,_.y,_.z),h.push(nA/x),h.push(1-IA/M),DA+=1}}for(let IA=0;IA<M;IA++)for(let wA=0;wA<x;wA++){const nA=S+wA+CA*IA,rA=S+wA+CA*(IA+1),JA=S+(wA+1)+CA*(IA+1),mA=S+(wA+1)+CA*IA;D.push(nA,rA,mA),D.push(rA,JA,mA),BA+=6}o.addGroup(c,BA,Y),c+=BA,S+=DA}}static fromJSON(A){return new eQ(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function CE(i){const A={};for(const I in i){A[I]={};for(const g in i[I]){const B=i[I][g];B&&(B.isColor||B.isMatrix3||B.isMatrix4||B.isVector2||B.isVector3||B.isVector4||B.isTexture||B.isQuaternion)?A[I][g]=B.clone():Array.isArray(B)?A[I][g]=B.slice():A[I][g]=B}}return A}function kg(i){const A={};for(let I=0;I<i.length;I++){const g=CE(i[I]);for(const B in g)A[B]=g[B]}return A}function vU(i){const A=[];for(let I=0;I<i.length;I++)A.push(i[I].clone());return A}const PU={clone:CE,merge:kg};var VU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class iQ extends tE{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VU,this.fragmentShader=jU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=CE(A.uniforms),this.uniformsGroups=vU(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const B in this.uniforms){const t=this.uniforms[B].value;t&&t.isTexture?I.uniforms[B]={type:"t",value:t.toJSON(A).uuid}:t&&t.isColor?I.uniforms[B]={type:"c",value:t.getHex()}:t&&t.isVector2?I.uniforms[B]={type:"v2",value:t.toArray()}:t&&t.isVector3?I.uniforms[B]={type:"v3",value:t.toArray()}:t&&t.isVector4?I.uniforms[B]={type:"v4",value:t.toArray()}:t&&t.isMatrix3?I.uniforms[B]={type:"m3",value:t.toArray()}:t&&t.isMatrix4?I.uniforms[B]={type:"m4",value:t.toArray()}:I.uniforms[B]={value:t}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader;const g={};for(const B in this.extensions)this.extensions[B]===!0&&(g[B]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class fS extends Sg{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ig,this.projectionMatrix=new Ig,this.projectionMatrixInverse=new Ig}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class QC extends fS{constructor(A=50,I=1,g=.1,B=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=B,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=Eh*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(ye*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(ye*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,B,E,t){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=E,this.view.height=t,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(ye*.5*this.fov)/this.zoom,g=2*I,B=this.aspect*g,E=-.5*B;const t=this.view;if(this.view!==null&&this.view.enabled){const D=t.fullWidth,a=t.fullHeight;E+=t.offsetX*B/D,I-=t.offsetY*g/a,B*=t.width/D,g*=t.height/a}const o=this.filmOffset;o!==0&&(E+=A*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(E,E+B,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const xQ=90,OQ=1;class _U extends Sg{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g;const B=new QC(xQ,OQ,A,I);B.layers=this.layers,B.up.set(0,-1,0),B.lookAt(new P(1,0,0)),this.add(B);const E=new QC(xQ,OQ,A,I);E.layers=this.layers,E.up.set(0,-1,0),E.lookAt(new P(-1,0,0)),this.add(E);const t=new QC(xQ,OQ,A,I);t.layers=this.layers,t.up.set(0,0,1),t.lookAt(new P(0,1,0)),this.add(t);const o=new QC(xQ,OQ,A,I);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new P(0,-1,0)),this.add(o);const D=new QC(xQ,OQ,A,I);D.layers=this.layers,D.up.set(0,-1,0),D.lookAt(new P(0,0,1)),this.add(D);const a=new QC(xQ,OQ,A,I);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new P(0,0,-1)),this.add(a)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[B,E,t,o,D,a]=this.children,s=A.getRenderTarget(),h=A.toneMapping,S=A.xr.enabled;A.toneMapping=BB,A.xr.enabled=!1;const c=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,B),A.setRenderTarget(g,1),A.render(I,E),A.setRenderTarget(g,2),A.render(I,t),A.setRenderTarget(g,3),A.render(I,o),A.setRenderTarget(g,4),A.render(I,D),g.texture.generateMipmaps=c,A.setRenderTarget(g,5),A.render(I,a),A.setRenderTarget(s),A.toneMapping=h,A.xr.enabled=S,g.texture.needsPMREMUpdate=!0}}class uS extends MC{constructor(A,I,g,B,E,t,o,D,a,s){A=A!==void 0?A:[],I=I!==void 0?I:AE,super(A,I,g,B,E,t,o,D,a,s),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class zU extends NB{constructor(A,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},B=[g,g,g,g,g,g];this.texture=new uS(B,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:BC}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.encoding=I.encoding,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},B=new eQ(5,5,5),E=new iQ({name:"CubemapFromEquirect",uniforms:CE(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:oC,blending:CB});E.uniforms.tEquirect.value=I;const t=new lC(B,E),o=I.minFilter;return I.minFilter===vo&&(I.minFilter=BC),new _U(1,10,this).update(A,t),I.minFilter=o,t.geometry.dispose(),t.material.dispose(),this}clear(A,I,g,B){const E=A.getRenderTarget();for(let t=0;t<6;t++)A.setRenderTarget(this,t),A.clear(I,g,B);A.setRenderTarget(E)}}const We=new P,XU=new P,$U=new iC;class PB{constructor(A=new P(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,B){return this.normal.set(A,I,g),this.constant=B,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const B=We.subVectors(g,I).cross(XU.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(B,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,I){const g=A.delta(We),B=this.normal.dot(g);if(B===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const E=-(A.start.dot(this.normal)+this.constant)/B;return E<0||E>1?null:I.copy(g).multiplyScalar(E).add(A.start)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||$U.getNormalMatrix(A),B=this.coplanarPoint(We).applyMatrix4(A),E=this.normal.applyMatrix3(g).normalize();return this.constant=-B.dot(E),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bQ=new Po,no=new P;class La{constructor(A=new PB,I=new PB,g=new PB,B=new PB,E=new PB,t=new PB){this.planes=[A,I,g,B,E,t]}set(A,I,g,B,E,t){const o=this.planes;return o[0].copy(A),o[1].copy(I),o[2].copy(g),o[3].copy(B),o[4].copy(E),o[5].copy(t),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,B=g[0],E=g[1],t=g[2],o=g[3],D=g[4],a=g[5],s=g[6],h=g[7],S=g[8],c=g[9],l=g[10],G=g[11],w=g[12],U=g[13],d=g[14],q=g[15];return I[0].setComponents(o-B,h-D,G-S,q-w).normalize(),I[1].setComponents(o+B,h+D,G+S,q+w).normalize(),I[2].setComponents(o+E,h+a,G+c,q+U).normalize(),I[3].setComponents(o-E,h-a,G-c,q-U).normalize(),I[4].setComponents(o-t,h-s,G-l,q-d).normalize(),I[5].setComponents(o+t,h+s,G+l,q+d).normalize(),this}intersectsObject(A){const I=A.geometry;return I.boundingSphere===null&&I.computeBoundingSphere(),bQ.copy(I.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(bQ)}intersectsSprite(A){return bQ.center.set(0,0,0),bQ.radius=.7071067811865476,bQ.applyMatrix4(A.matrixWorld),this.intersectsSphere(bQ)}intersectsSphere(A){const I=this.planes,g=A.center,B=-A.radius;for(let E=0;E<6;E++)if(I[E].distanceToPoint(g)<B)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const B=I[g];if(no.x=B.normal.x>0?A.max.x:A.min.x,no.y=B.normal.y>0?A.max.y:A.min.y,no.z=B.normal.z>0?A.max.z:A.min.z,B.distanceToPoint(no)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function HS(){let i=null,A=!1,I=null,g=null;function B(E,t){I(E,t),g=i.requestAnimationFrame(B)}return{start:function(){A!==!0&&I!==null&&(g=i.requestAnimationFrame(B),A=!0)},stop:function(){i.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(E){I=E},setContext:function(E){i=E}}}function AK(i,A){const I=A.isWebGL2,g=new WeakMap;function B(a,s){const h=a.array,S=a.usage,c=i.createBuffer();i.bindBuffer(s,c),i.bufferData(s,h,S),a.onUploadCallback();let l;if(h instanceof Float32Array)l=5126;else if(h instanceof Uint16Array)if(a.isFloat16BufferAttribute)if(I)l=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else l=5123;else if(h instanceof Int16Array)l=5122;else if(h instanceof Uint32Array)l=5125;else if(h instanceof Int32Array)l=5124;else if(h instanceof Int8Array)l=5120;else if(h instanceof Uint8Array)l=5121;else if(h instanceof Uint8ClampedArray)l=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:l,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version}}function E(a,s,h){const S=s.array,c=s.updateRange;i.bindBuffer(h,a),c.count===-1?i.bufferSubData(h,0,S):(I?i.bufferSubData(h,c.offset*S.BYTES_PER_ELEMENT,S,c.offset,c.count):i.bufferSubData(h,c.offset*S.BYTES_PER_ELEMENT,S.subarray(c.offset,c.offset+c.count)),c.count=-1)}function t(a){return a.isInterleavedBufferAttribute&&(a=a.data),g.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const s=g.get(a);s&&(i.deleteBuffer(s.buffer),g.delete(a))}function D(a,s){if(a.isGLBufferAttribute){const S=g.get(a);(!S||S.version<a.version)&&g.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const h=g.get(a);h===void 0?g.set(a,B(a,s)):h.version<a.version&&(E(h.buffer,a,s),h.version=a.version)}return{get:t,remove:o,update:D}}class Ya extends EB{constructor(A=1,I=1,g=1,B=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:B};const E=A/2,t=I/2,o=Math.floor(g),D=Math.floor(B),a=o+1,s=D+1,h=A/o,S=I/D,c=[],l=[],G=[],w=[];for(let U=0;U<s;U++){const d=U*S-t;for(let q=0;q<a;q++){const F=q*h-E;l.push(F,-d,0),G.push(0,0,1),w.push(q/o),w.push(1-U/D)}}for(let U=0;U<D;U++)for(let d=0;d<o;d++){const q=d+a*U,F=d+a*(U+1),N=d+1+a*(U+1),p=d+1+a*U;c.push(q,F,p),c.push(F,N,p)}this.setIndex(c),this.setAttribute("position",new yC(l,3)),this.setAttribute("normal",new yC(G,3)),this.setAttribute("uv",new yC(w,2))}static fromJSON(A){return new Ya(A.width,A.height,A.widthSegments,A.heightSegments)}}var IK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gK=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CK=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BK=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QK=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iK="vec3 transformed = vec3( position );",oK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tK=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,eK=`#ifdef USE_IRIDESCENCE
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
#endif`,aK=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
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
#endif`,DK=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hK=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SK=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rK=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cK=`#define PI 3.141592653589793
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
}`,kK=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
#endif`,lK=`vec3 transformedNormal = objectNormal;
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
#endif`,yK=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MK=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,UK=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KK=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NK="gl_FragColor = linearToOutputTexel( gl_FragColor );",JK=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FK=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,RK=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qK=`#ifdef USE_ENVMAP
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
#endif`,pK=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dK=`#ifdef USE_ENVMAP
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
#endif`,LK=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YK=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fK=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uK=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HK=`#ifdef USE_GRADIENTMAP
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
}`,mK=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,TK=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xK=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,bK=`uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
#endif`,ZK=`#if defined( USE_ENVMAP )
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
#endif`,WK=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,PK=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,jK=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,_K=`struct PhysicalMaterial {
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
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
}`,zK=`
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,XK=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
#endif`,$K=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,A0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,C0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,B0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
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
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,h0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Y0=`float getShadowMask() {
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
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,T0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
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
#endif`,v0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,P0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,V0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,j0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,z0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AN=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,IN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gN=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CN=`#include <common>
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
}`,BN=`#if DEPTH_PACKING == 3200
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
}`,QN=`#define DISTANCE
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
}`,EN=`#define DISTANCE
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
}`,iN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aN=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
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
}`,DN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
}`,sN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,nN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,hN=`#define MATCAP
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
}`,SN=`#define MATCAP
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
}`,wN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,rN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,cN=`#define PHONG
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
#include <uv2_pars_fragment>
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
}`,kN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,lN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
}`,yN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,MN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,UN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,KN=`uniform vec3 diffuse;
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
}`,NN=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,FN=`uniform float rotation;
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
}`,RN=`uniform vec3 diffuse;
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
}`,oI={alphamap_fragment:IK,alphamap_pars_fragment:gK,alphatest_fragment:CK,alphatest_pars_fragment:BK,aomap_fragment:QK,aomap_pars_fragment:EK,begin_vertex:iK,beginnormal_vertex:oK,bsdfs:tK,iridescence_fragment:eK,bumpmap_pars_fragment:aK,clipping_planes_fragment:DK,clipping_planes_pars_fragment:sK,clipping_planes_pars_vertex:nK,clipping_planes_vertex:hK,color_fragment:SK,color_pars_fragment:wK,color_pars_vertex:GK,color_vertex:rK,common:cK,cube_uv_reflection_fragment:kK,defaultnormal_vertex:lK,displacementmap_pars_vertex:yK,displacementmap_vertex:MK,emissivemap_fragment:UK,emissivemap_pars_fragment:KK,encodings_fragment:NK,encodings_pars_fragment:JK,envmap_fragment:FK,envmap_common_pars_fragment:RK,envmap_pars_fragment:qK,envmap_pars_vertex:pK,envmap_physical_pars_fragment:ZK,envmap_vertex:dK,fog_vertex:LK,fog_pars_vertex:YK,fog_fragment:fK,fog_pars_fragment:uK,gradientmap_pars_fragment:HK,lightmap_fragment:mK,lightmap_pars_fragment:TK,lights_lambert_fragment:xK,lights_lambert_pars_fragment:OK,lights_pars_begin:bK,lights_toon_fragment:WK,lights_toon_pars_fragment:vK,lights_phong_fragment:PK,lights_phong_pars_fragment:VK,lights_physical_fragment:jK,lights_physical_pars_fragment:_K,lights_fragment_begin:zK,lights_fragment_maps:XK,lights_fragment_end:$K,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:I0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:C0,map_fragment:B0,map_pars_fragment:Q0,map_particle_fragment:E0,map_particle_pars_fragment:i0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:t0,morphcolor_vertex:e0,morphnormal_vertex:a0,morphtarget_pars_vertex:D0,morphtarget_vertex:s0,normal_fragment_begin:n0,normal_fragment_maps:h0,normal_pars_fragment:S0,normal_pars_vertex:w0,normal_vertex:G0,normalmap_pars_fragment:r0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:y0,output_fragment:M0,packing:U0,premultiplied_alpha_fragment:K0,project_vertex:N0,dithering_fragment:J0,dithering_pars_fragment:F0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:d0,shadowmap_vertex:L0,shadowmask_pars_fragment:Y0,skinbase_vertex:f0,skinning_pars_vertex:u0,skinning_vertex:H0,skinnormal_vertex:m0,specularmap_fragment:T0,specularmap_pars_fragment:x0,tonemapping_fragment:O0,tonemapping_pars_fragment:b0,transmission_fragment:Z0,transmission_pars_fragment:W0,uv_pars_fragment:v0,uv_pars_vertex:P0,uv_vertex:V0,uv2_pars_fragment:j0,uv2_pars_vertex:_0,uv2_vertex:z0,worldpos_vertex:X0,background_vert:$0,background_frag:AN,cube_vert:IN,cube_frag:gN,depth_vert:CN,depth_frag:BN,distanceRGBA_vert:QN,distanceRGBA_frag:EN,equirect_vert:iN,equirect_frag:oN,linedashed_vert:tN,linedashed_frag:eN,meshbasic_vert:aN,meshbasic_frag:DN,meshlambert_vert:sN,meshlambert_frag:nN,meshmatcap_vert:hN,meshmatcap_frag:SN,meshnormal_vert:wN,meshnormal_frag:GN,meshphong_vert:rN,meshphong_frag:cN,meshphysical_vert:kN,meshphysical_frag:lN,meshtoon_vert:yN,meshtoon_frag:MN,points_vert:UN,points_frag:KN,shadow_vert:NN,shadow_frag:JN,sprite_vert:FN,sprite_frag:RN},MA={common:{diffuse:{value:new wI(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new iC},uv2Transform:{value:new iC},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new EI(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new iC}},sprite:{diffuse:{value:new wI(16777215)},opacity:{value:1},center:{value:new EI(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new iC}}},qC={basic:{uniforms:kg([MA.common,MA.specularmap,MA.envmap,MA.aomap,MA.lightmap,MA.fog]),vertexShader:oI.meshbasic_vert,fragmentShader:oI.meshbasic_frag},lambert:{uniforms:kg([MA.common,MA.specularmap,MA.envmap,MA.aomap,MA.lightmap,MA.emissivemap,MA.bumpmap,MA.normalmap,MA.displacementmap,MA.fog,MA.lights,{emissive:{value:new wI(0)}}]),vertexShader:oI.meshlambert_vert,fragmentShader:oI.meshlambert_frag},phong:{uniforms:kg([MA.common,MA.specularmap,MA.envmap,MA.aomap,MA.lightmap,MA.emissivemap,MA.bumpmap,MA.normalmap,MA.displacementmap,MA.fog,MA.lights,{emissive:{value:new wI(0)},specular:{value:new wI(1118481)},shininess:{value:30}}]),vertexShader:oI.meshphong_vert,fragmentShader:oI.meshphong_frag},standard:{uniforms:kg([MA.common,MA.envmap,MA.aomap,MA.lightmap,MA.emissivemap,MA.bumpmap,MA.normalmap,MA.displacementmap,MA.roughnessmap,MA.metalnessmap,MA.fog,MA.lights,{emissive:{value:new wI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oI.meshphysical_vert,fragmentShader:oI.meshphysical_frag},toon:{uniforms:kg([MA.common,MA.aomap,MA.lightmap,MA.emissivemap,MA.bumpmap,MA.normalmap,MA.displacementmap,MA.gradientmap,MA.fog,MA.lights,{emissive:{value:new wI(0)}}]),vertexShader:oI.meshtoon_vert,fragmentShader:oI.meshtoon_frag},matcap:{uniforms:kg([MA.common,MA.bumpmap,MA.normalmap,MA.displacementmap,MA.fog,{matcap:{value:null}}]),vertexShader:oI.meshmatcap_vert,fragmentShader:oI.meshmatcap_frag},points:{uniforms:kg([MA.points,MA.fog]),vertexShader:oI.points_vert,fragmentShader:oI.points_frag},dashed:{uniforms:kg([MA.common,MA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oI.linedashed_vert,fragmentShader:oI.linedashed_frag},depth:{uniforms:kg([MA.common,MA.displacementmap]),vertexShader:oI.depth_vert,fragmentShader:oI.depth_frag},normal:{uniforms:kg([MA.common,MA.bumpmap,MA.normalmap,MA.displacementmap,{opacity:{value:1}}]),vertexShader:oI.meshnormal_vert,fragmentShader:oI.meshnormal_frag},sprite:{uniforms:kg([MA.sprite,MA.fog]),vertexShader:oI.sprite_vert,fragmentShader:oI.sprite_frag},background:{uniforms:{uvTransform:{value:new iC},t2D:{value:null}},vertexShader:oI.background_vert,fragmentShader:oI.background_frag},cube:{uniforms:kg([MA.envmap,{opacity:{value:1}}]),vertexShader:oI.cube_vert,fragmentShader:oI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oI.equirect_vert,fragmentShader:oI.equirect_frag},distanceRGBA:{uniforms:kg([MA.common,MA.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oI.distanceRGBA_vert,fragmentShader:oI.distanceRGBA_frag},shadow:{uniforms:kg([MA.lights,MA.fog,{color:{value:new wI(0)},opacity:{value:1}}]),vertexShader:oI.shadow_vert,fragmentShader:oI.shadow_frag}};qC.physical={uniforms:kg([qC.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new EI(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new wI(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new EI},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new wI(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new wI(1,1,1)},specularColorMap:{value:null}}]),vertexShader:oI.meshphysical_vert,fragmentShader:oI.meshphysical_frag};function qN(i,A,I,g,B,E){const t=new wI(0);let o=B===!0?0:1,D,a,s=null,h=0,S=null;function c(G,w){let U=!1,d=w.isScene===!0?w.background:null;d&&d.isTexture&&(d=A.get(d));const q=i.xr,F=q.getSession&&q.getSession();F&&F.environmentBlendMode==="additive"&&(d=null),d===null?l(t,o):d&&d.isColor&&(l(d,1),U=!0),(i.autoClear||U)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),d&&(d.isCubeTexture||d.mapping===Wo)?(a===void 0&&(a=new lC(new eQ(1,1,1),new iQ({name:"BackgroundCubeMaterial",uniforms:CE(qC.cube.uniforms),vertexShader:qC.cube.vertexShader,fragmentShader:qC.cube.fragmentShader,side:oC,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(N,p,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),g.update(a)),a.material.uniforms.envMap.value=d,a.material.uniforms.flipEnvMap.value=d.isCubeTexture&&d.isRenderTargetTexture===!1?-1:1,(s!==d||h!==d.version||S!==i.toneMapping)&&(a.material.needsUpdate=!0,s=d,h=d.version,S=i.toneMapping),a.layers.enableAll(),G.unshift(a,a.geometry,a.material,0,0,null)):d&&d.isTexture&&(D===void 0&&(D=new lC(new Ya(2,2),new iQ({name:"BackgroundMaterial",uniforms:CE(qC.background.uniforms),vertexShader:qC.background.vertexShader,fragmentShader:qC.background.fragmentShader,side:$Q,depthTest:!1,depthWrite:!1,fog:!1})),D.geometry.deleteAttribute("normal"),Object.defineProperty(D.material,"map",{get:function(){return this.uniforms.t2D.value}}),g.update(D)),D.material.uniforms.t2D.value=d,d.matrixAutoUpdate===!0&&d.updateMatrix(),D.material.uniforms.uvTransform.value.copy(d.matrix),(s!==d||h!==d.version||S!==i.toneMapping)&&(D.material.needsUpdate=!0,s=d,h=d.version,S=i.toneMapping),D.layers.enableAll(),G.unshift(D,D.geometry,D.material,0,0,null))}function l(G,w){I.buffers.color.setClear(G.r,G.g,G.b,w,E)}return{getClearColor:function(){return t},setClearColor:function(G,w=1){t.set(G),o=w,l(t,o)},getClearAlpha:function(){return o},setClearAlpha:function(G){o=G,l(t,o)},render:c}}function pN(i,A,I,g){const B=i.getParameter(34921),E=g.isWebGL2?null:A.get("OES_vertex_array_object"),t=g.isWebGL2||E!==null,o={},D=w(null);let a=D,s=!1;function h(v,CA,GA,DA,BA){let _=!1;if(t){const IA=G(DA,GA,CA);a!==IA&&(a=IA,c(a.object)),_=U(v,DA,GA,BA),_&&d(v,DA,GA,BA)}else{const IA=CA.wireframe===!0;(a.geometry!==DA.id||a.program!==GA.id||a.wireframe!==IA)&&(a.geometry=DA.id,a.program=GA.id,a.wireframe=IA,_=!0)}BA!==null&&I.update(BA,34963),(_||s)&&(s=!1,M(v,CA,GA,DA),BA!==null&&i.bindBuffer(34963,I.get(BA).buffer))}function S(){return g.isWebGL2?i.createVertexArray():E.createVertexArrayOES()}function c(v){return g.isWebGL2?i.bindVertexArray(v):E.bindVertexArrayOES(v)}function l(v){return g.isWebGL2?i.deleteVertexArray(v):E.deleteVertexArrayOES(v)}function G(v,CA,GA){const DA=GA.wireframe===!0;let BA=o[v.id];BA===void 0&&(BA={},o[v.id]=BA);let _=BA[CA.id];_===void 0&&(_={},BA[CA.id]=_);let IA=_[DA];return IA===void 0&&(IA=w(S()),_[DA]=IA),IA}function w(v){const CA=[],GA=[],DA=[];for(let BA=0;BA<B;BA++)CA[BA]=0,GA[BA]=0,DA[BA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:CA,enabledAttributes:GA,attributeDivisors:DA,object:v,attributes:{},index:null}}function U(v,CA,GA,DA){const BA=a.attributes,_=CA.attributes;let IA=0;const wA=GA.getAttributes();for(const nA in wA)if(wA[nA].location>=0){const JA=BA[nA];let mA=_[nA];if(mA===void 0&&(nA==="instanceMatrix"&&v.instanceMatrix&&(mA=v.instanceMatrix),nA==="instanceColor"&&v.instanceColor&&(mA=v.instanceColor)),JA===void 0||JA.attribute!==mA||mA&&JA.data!==mA.data)return!0;IA++}return a.attributesNum!==IA||a.index!==DA}function d(v,CA,GA,DA){const BA={},_=CA.attributes;let IA=0;const wA=GA.getAttributes();for(const nA in wA)if(wA[nA].location>=0){let JA=_[nA];JA===void 0&&(nA==="instanceMatrix"&&v.instanceMatrix&&(JA=v.instanceMatrix),nA==="instanceColor"&&v.instanceColor&&(JA=v.instanceColor));const mA={};mA.attribute=JA,JA&&JA.data&&(mA.data=JA.data),BA[nA]=mA,IA++}a.attributes=BA,a.attributesNum=IA,a.index=DA}function q(){const v=a.newAttributes;for(let CA=0,GA=v.length;CA<GA;CA++)v[CA]=0}function F(v){N(v,0)}function N(v,CA){const GA=a.newAttributes,DA=a.enabledAttributes,BA=a.attributeDivisors;GA[v]=1,DA[v]===0&&(i.enableVertexAttribArray(v),DA[v]=1),BA[v]!==CA&&((g.isWebGL2?i:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](v,CA),BA[v]=CA)}function p(){const v=a.newAttributes,CA=a.enabledAttributes;for(let GA=0,DA=CA.length;GA<DA;GA++)CA[GA]!==v[GA]&&(i.disableVertexAttribArray(GA),CA[GA]=0)}function x(v,CA,GA,DA,BA,_){g.isWebGL2===!0&&(GA===5124||GA===5125)?i.vertexAttribIPointer(v,CA,GA,BA,_):i.vertexAttribPointer(v,CA,GA,DA,BA,_)}function M(v,CA,GA,DA){if(g.isWebGL2===!1&&(v.isInstancedMesh||DA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;q();const BA=DA.attributes,_=GA.getAttributes(),IA=CA.defaultAttributeValues;for(const wA in _){const nA=_[wA];if(nA.location>=0){let rA=BA[wA];if(rA===void 0&&(wA==="instanceMatrix"&&v.instanceMatrix&&(rA=v.instanceMatrix),wA==="instanceColor"&&v.instanceColor&&(rA=v.instanceColor)),rA!==void 0){const JA=rA.normalized,mA=rA.itemSize,oA=I.get(rA);if(oA===void 0)continue;const $A=oA.buffer,LA=oA.type,fA=oA.bytesPerElement;if(rA.isInterleavedBufferAttribute){const UA=rA.data,eI=UA.stride,jA=rA.offset;if(UA.isInstancedInterleavedBuffer){for(let xA=0;xA<nA.locationSize;xA++)N(nA.location+xA,UA.meshPerAttribute);v.isInstancedMesh!==!0&&DA._maxInstanceCount===void 0&&(DA._maxInstanceCount=UA.meshPerAttribute*UA.count)}else for(let xA=0;xA<nA.locationSize;xA++)F(nA.location+xA);i.bindBuffer(34962,$A);for(let xA=0;xA<nA.locationSize;xA++)x(nA.location+xA,mA/nA.locationSize,LA,JA,eI*fA,(jA+mA/nA.locationSize*xA)*fA)}else{if(rA.isInstancedBufferAttribute){for(let UA=0;UA<nA.locationSize;UA++)N(nA.location+UA,rA.meshPerAttribute);v.isInstancedMesh!==!0&&DA._maxInstanceCount===void 0&&(DA._maxInstanceCount=rA.meshPerAttribute*rA.count)}else for(let UA=0;UA<nA.locationSize;UA++)F(nA.location+UA);i.bindBuffer(34962,$A);for(let UA=0;UA<nA.locationSize;UA++)x(nA.location+UA,mA/nA.locationSize,LA,JA,mA*fA,mA/nA.locationSize*UA*fA)}}else if(IA!==void 0){const JA=IA[wA];if(JA!==void 0)switch(JA.length){case 2:i.vertexAttrib2fv(nA.location,JA);break;case 3:i.vertexAttrib3fv(nA.location,JA);break;case 4:i.vertexAttrib4fv(nA.location,JA);break;default:i.vertexAttrib1fv(nA.location,JA)}}}}p()}function Y(){SA();for(const v in o){const CA=o[v];for(const GA in CA){const DA=CA[GA];for(const BA in DA)l(DA[BA].object),delete DA[BA];delete CA[GA]}delete o[v]}}function u(v){if(o[v.id]===void 0)return;const CA=o[v.id];for(const GA in CA){const DA=CA[GA];for(const BA in DA)l(DA[BA].object),delete DA[BA];delete CA[GA]}delete o[v.id]}function $(v){for(const CA in o){const GA=o[CA];if(GA[v.id]===void 0)continue;const DA=GA[v.id];for(const BA in DA)l(DA[BA].object),delete DA[BA];delete GA[v.id]}}function SA(){W(),s=!0,a!==D&&(a=D,c(a.object))}function W(){D.geometry=null,D.program=null,D.wireframe=!1}return{setup:h,reset:SA,resetDefaultState:W,dispose:Y,releaseStatesOfGeometry:u,releaseStatesOfProgram:$,initAttributes:q,enableAttribute:F,disableUnusedAttributes:p}}function dN(i,A,I,g){const B=g.isWebGL2;let E;function t(a){E=a}function o(a,s){i.drawArrays(E,a,s),I.update(s,E,1)}function D(a,s,h){if(h===0)return;let S,c;if(B)S=i,c="drawArraysInstanced";else if(S=A.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[c](E,a,s,h),I.update(s,E,h)}this.setMode=t,this.render=o,this.renderInstances=D}function LN(i,A,I){let g;function B(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const x=A.get("EXT_texture_filter_anisotropic");g=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function E(x){if(x==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const t=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=I.precision!==void 0?I.precision:"highp";const D=E(o);D!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",D,"instead."),o=D);const a=t||A.has("WEBGL_draw_buffers"),s=I.logarithmicDepthBuffer===!0,h=i.getParameter(34930),S=i.getParameter(35660),c=i.getParameter(3379),l=i.getParameter(34076),G=i.getParameter(34921),w=i.getParameter(36347),U=i.getParameter(36348),d=i.getParameter(36349),q=S>0,F=t||A.has("OES_texture_float"),N=q&&F,p=t?i.getParameter(36183):0;return{isWebGL2:t,drawBuffers:a,getMaxAnisotropy:B,getMaxPrecision:E,precision:o,logarithmicDepthBuffer:s,maxTextures:h,maxVertexTextures:S,maxTextureSize:c,maxCubemapSize:l,maxAttributes:G,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:d,vertexTextures:q,floatFragmentTextures:F,floatVertexTextures:N,maxSamples:p}}function YN(i){const A=this;let I=null,g=0,B=!1,E=!1;const t=new PB,o=new iC,D={value:null,needsUpdate:!1};this.uniform=D,this.numPlanes=0,this.numIntersection=0,this.init=function(h,S,c){const l=h.length!==0||S||g!==0||B;return B=S,I=s(h,c,0),g=h.length,l},this.beginShadows=function(){E=!0,s(null)},this.endShadows=function(){E=!1,a()},this.setState=function(h,S,c){const l=h.clippingPlanes,G=h.clipIntersection,w=h.clipShadows,U=i.get(h);if(!B||l===null||l.length===0||E&&!w)E?s(null):a();else{const d=E?0:g,q=d*4;let F=U.clippingState||null;D.value=F,F=s(l,S,q,c);for(let N=0;N!==q;++N)F[N]=I[N];U.clippingState=F,this.numIntersection=G?this.numPlanes:0,this.numPlanes+=d}};function a(){D.value!==I&&(D.value=I,D.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function s(h,S,c,l){const G=h!==null?h.length:0;let w=null;if(G!==0){if(w=D.value,l!==!0||w===null){const U=c+G*4,d=S.matrixWorldInverse;o.getNormalMatrix(d),(w===null||w.length<U)&&(w=new Float32Array(U));for(let q=0,F=c;q!==G;++q,F+=4)t.copy(h[q]).applyMatrix4(d,o),t.normal.toArray(w,F),w[F+3]=t.constant}D.value=w,D.needsUpdate=!0}return A.numPlanes=G,A.numIntersection=0,w}}function fN(i){let A=new WeakMap;function I(t,o){return o===ia?t.mapping=AE:o===oa&&(t.mapping=IE),t}function g(t){if(t&&t.isTexture&&t.isRenderTargetTexture===!1){const o=t.mapping;if(o===ia||o===oa)if(A.has(t)){const D=A.get(t).texture;return I(D,t.mapping)}else{const D=t.image;if(D&&D.height>0){const a=new zU(D.height/2);return a.fromEquirectangularTexture(i,t),A.set(t,a),t.addEventListener("dispose",B),I(a.texture,t.mapping)}else return null}}return t}function B(t){const o=t.target;o.removeEventListener("dispose",B);const D=A.get(o);D!==void 0&&(A.delete(o),D.dispose())}function E(){A=new WeakMap}return{get:g,dispose:E}}class mS extends fS{constructor(A=-1,I=1,g=1,B=-1,E=.1,t=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=B,this.near=E,this.far=t,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,B,E,t){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=E,this.view.height=t,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,B=(this.top+this.bottom)/2;let E=g-A,t=g+A,o=B+I,D=B-I;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,s=(this.top-this.bottom)/this.view.fullHeight/this.zoom;E+=a*this.view.offsetX,t=E+a*this.view.width,o-=s*this.view.offsetY,D=o-s*this.view.height}this.projectionMatrix.makeOrthographic(E,t,o,D,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const PQ=4,rh=[.125,.215,.35,.446,.526,.582],_B=20,ve=new mS,ch=new wI;let Pe=null;const VB=(1+Math.sqrt(5))/2,ZQ=1/VB,kh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,VB,ZQ),new P(0,VB,-ZQ),new P(ZQ,0,VB),new P(-ZQ,0,VB),new P(VB,ZQ,0),new P(-VB,ZQ,0)];class lh{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,B=100){Pe=this._renderer.getRenderTarget(),this._setSize(256);const E=this._allocateTargets();return E.depthBuffer=!0,this._sceneToCubeUV(A,g,B,E),I>0&&this._blur(E,0,0,I),this._applyPMREM(E),this._cleanup(E),E}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Pe),A.scissorTest=!1,ho(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===AE||A.mapping===IE?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Pe=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:BC,minFilter:BC,generateMipmaps:!1,type:VE,format:dC,encoding:QQ,depthBuffer:!1},B=yh(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(A,I,g);const{_lodMax:E}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uN(E)),this._blurMaterial=HN(E,A,I)}return B}_compileMaterial(A){const I=new lC(this._lodPlanes[0],A);this._renderer.compile(I,ve)}_sceneToCubeUV(A,I,g,B){const o=new QC(90,1,I,g),D=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],s=this._renderer,h=s.autoClear,S=s.toneMapping;s.getClearColor(ch),s.toneMapping=BB,s.autoClear=!1;const c=new Vo({name:"PMREM.Background",side:oC,depthWrite:!1,depthTest:!1}),l=new lC(new eQ,c);let G=!1;const w=A.background;w?w.isColor&&(c.color.copy(w),A.background=null,G=!0):(c.color.copy(ch),G=!0);for(let U=0;U<6;U++){const d=U%3;d===0?(o.up.set(0,D[U],0),o.lookAt(a[U],0,0)):d===1?(o.up.set(0,0,D[U]),o.lookAt(0,a[U],0)):(o.up.set(0,D[U],0),o.lookAt(0,0,a[U]));const q=this._cubeSize;ho(B,d*q,U>2?q:0,q,q),s.setRenderTarget(B),G&&s.render(l,o),s.render(A,o)}l.geometry.dispose(),l.material.dispose(),s.toneMapping=S,s.autoClear=h,A.background=w}_textureToCubeUV(A,I){const g=this._renderer,B=A.mapping===AE||A.mapping===IE;B?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const E=B?this._cubemapMaterial:this._equirectMaterial,t=new lC(this._lodPlanes[0],E),o=E.uniforms;o.envMap.value=A;const D=this._cubeSize;ho(I,0,0,3*D,2*D),g.setRenderTarget(I),g.render(t,ve)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let B=1;B<this._lodPlanes.length;B++){const E=Math.sqrt(this._sigmas[B]*this._sigmas[B]-this._sigmas[B-1]*this._sigmas[B-1]),t=kh[(B-1)%kh.length];this._blur(A,B-1,B,E,t)}I.autoClear=g}_blur(A,I,g,B,E){const t=this._pingPongRenderTarget;this._halfBlur(A,t,I,g,B,"latitudinal",E),this._halfBlur(t,A,g,g,B,"longitudinal",E)}_halfBlur(A,I,g,B,E,t,o){const D=this._renderer,a=this._blurMaterial;t!=="latitudinal"&&t!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const s=3,h=new lC(this._lodPlanes[B],a),S=a.uniforms,c=this._sizeLods[g]-1,l=isFinite(E)?Math.PI/(2*c):2*Math.PI/(2*_B-1),G=E/l,w=isFinite(E)?1+Math.floor(s*G):_B;w>_B&&console.warn(`sigmaRadians, ${E}, is too large and will clip, as it requested ${w} samples when the maximum is set to ${_B}`);const U=[];let d=0;for(let x=0;x<_B;++x){const M=x/G,Y=Math.exp(-M*M/2);U.push(Y),x===0?d+=Y:x<w&&(d+=2*Y)}for(let x=0;x<U.length;x++)U[x]=U[x]/d;S.envMap.value=A.texture,S.samples.value=w,S.weights.value=U,S.latitudinal.value=t==="latitudinal",o&&(S.poleAxis.value=o);const{_lodMax:q}=this;S.dTheta.value=l,S.mipInt.value=q-g;const F=this._sizeLods[B],N=3*F*(B>q-PQ?B-q+PQ:0),p=4*(this._cubeSize-F);ho(I,N,p,3*F,2*F),D.setRenderTarget(I),D.render(h,ve)}}function uN(i){const A=[],I=[],g=[];let B=i;const E=i-PQ+1+rh.length;for(let t=0;t<E;t++){const o=Math.pow(2,B);I.push(o);let D=1/o;t>i-PQ?D=rh[t-i+PQ-1]:t===0&&(D=0),g.push(D);const a=1/(o-2),s=-a,h=1+a,S=[s,s,h,s,h,h,s,s,h,h,s,h],c=6,l=6,G=3,w=2,U=1,d=new Float32Array(G*l*c),q=new Float32Array(w*l*c),F=new Float32Array(U*l*c);for(let p=0;p<c;p++){const x=p%3*2/3-1,M=p>2?0:-1,Y=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];d.set(Y,G*l*p),q.set(S,w*l*p);const u=[p,p,p,p,p,p];F.set(u,U*l*p)}const N=new EB;N.setAttribute("position",new LC(d,G)),N.setAttribute("uv",new LC(q,w)),N.setAttribute("faceIndex",new LC(F,U)),A.push(N),B>PQ&&B--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function yh(i,A,I){const g=new NB(i,A,I);return g.texture.mapping=Wo,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function ho(i,A,I,g,B){i.viewport.set(A,I,g,B),i.scissor.set(A,I,g,B)}function HN(i,A,I){const g=new Float32Array(_B),B=new P(0,1,0);return new iQ({name:"SphericalGaussianBlur",defines:{n:_B,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:B}},vertexShader:fa(),fragmentShader:`

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
		`,blending:CB,depthTest:!1,depthWrite:!1})}function Mh(){return new iQ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:CB,depthTest:!1,depthWrite:!1})}function Uh(){return new iQ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:CB,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function mN(i){let A=new WeakMap,I=null;function g(o){if(o&&o.isTexture){const D=o.mapping,a=D===ia||D===oa,s=D===AE||D===IE;if(a||s)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=A.get(o);return I===null&&(I=new lh(i)),h=a?I.fromEquirectangular(o,h):I.fromCubemap(o,h),A.set(o,h),h.texture}else{if(A.has(o))return A.get(o).texture;{const h=o.image;if(a&&h&&h.height>0||s&&h&&B(h)){I===null&&(I=new lh(i));const S=a?I.fromEquirectangular(o):I.fromCubemap(o);return A.set(o,S),o.addEventListener("dispose",E),S.texture}else return null}}}return o}function B(o){let D=0;const a=6;for(let s=0;s<a;s++)o[s]!==void 0&&D++;return D===a}function E(o){const D=o.target;D.removeEventListener("dispose",E);const a=A.get(D);a!==void 0&&(A.delete(D),a.dispose())}function t(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:t}}function TN(i){const A={};function I(g){if(A[g]!==void 0)return A[g];let B;switch(g){case"WEBGL_depth_texture":B=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":B=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":B=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":B=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:B=i.getExtension(g)}return A[g]=B,B}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const B=I(g);return B===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),B}}}function xN(i,A,I,g){const B={},E=new WeakMap;function t(h){const S=h.target;S.index!==null&&A.remove(S.index);for(const l in S.attributes)A.remove(S.attributes[l]);S.removeEventListener("dispose",t),delete B[S.id];const c=E.get(S);c&&(A.remove(c),E.delete(S)),g.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,I.memory.geometries--}function o(h,S){return B[S.id]===!0||(S.addEventListener("dispose",t),B[S.id]=!0,I.memory.geometries++),S}function D(h){const S=h.attributes;for(const l in S)A.update(S[l],34962);const c=h.morphAttributes;for(const l in c){const G=c[l];for(let w=0,U=G.length;w<U;w++)A.update(G[w],34962)}}function a(h){const S=[],c=h.index,l=h.attributes.position;let G=0;if(c!==null){const d=c.array;G=c.version;for(let q=0,F=d.length;q<F;q+=3){const N=d[q+0],p=d[q+1],x=d[q+2];S.push(N,p,p,x,x,N)}}else{const d=l.array;G=l.version;for(let q=0,F=d.length/3-1;q<F;q+=3){const N=q+0,p=q+1,x=q+2;S.push(N,p,p,x,x,N)}}const w=new(NS(S)?YS:LS)(S,1);w.version=G;const U=E.get(h);U&&A.remove(U),E.set(h,w)}function s(h){const S=E.get(h);if(S){const c=h.index;c!==null&&S.version<c.version&&a(h)}else a(h);return E.get(h)}return{get:o,update:D,getWireframeAttribute:s}}function ON(i,A,I,g){const B=g.isWebGL2;let E;function t(S){E=S}let o,D;function a(S){o=S.type,D=S.bytesPerElement}function s(S,c){i.drawElements(E,c,o,S*D),I.update(c,E,1)}function h(S,c,l){if(l===0)return;let G,w;if(B)G=i,w="drawElementsInstanced";else if(G=A.get("ANGLE_instanced_arrays"),w="drawElementsInstancedANGLE",G===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}G[w](E,c,o,S*D,l),I.update(c,E,l)}this.setMode=t,this.setIndex=a,this.render=s,this.renderInstances=h}function bN(i){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(E,t,o){switch(I.calls++,t){case 4:I.triangles+=o*(E/3);break;case 1:I.lines+=o*(E/2);break;case 3:I.lines+=o*(E-1);break;case 2:I.lines+=o*E;break;case 0:I.points+=o*E;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",t);break}}function B(){I.frame++,I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:B,update:g}}function ZN(i,A){return i[0]-A[0]}function WN(i,A){return Math.abs(A[1])-Math.abs(i[1])}function vN(i,A,I){const g={},B=new Float32Array(8),E=new WeakMap,t=new ag,o=[];for(let a=0;a<8;a++)o[a]=[a,0];function D(a,s,h,S){const c=a.morphTargetInfluences;if(A.isWebGL2===!0){const G=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,w=G!==void 0?G.length:0;let U=E.get(s);if(U===void 0||U.count!==w){let GA=function(){v.dispose(),E.delete(s),s.removeEventListener("dispose",GA)};var l=GA;U!==void 0&&U.texture.dispose();const F=s.morphAttributes.position!==void 0,N=s.morphAttributes.normal!==void 0,p=s.morphAttributes.color!==void 0,x=s.morphAttributes.position||[],M=s.morphAttributes.normal||[],Y=s.morphAttributes.color||[];let u=0;F===!0&&(u=1),N===!0&&(u=2),p===!0&&(u=3);let $=s.attributes.position.count*u,SA=1;$>A.maxTextureSize&&(SA=Math.ceil($/A.maxTextureSize),$=A.maxTextureSize);const W=new Float32Array($*SA*4*w),v=new qS(W,$,SA,w);v.type=XB,v.needsUpdate=!0;const CA=u*4;for(let DA=0;DA<w;DA++){const BA=x[DA],_=M[DA],IA=Y[DA],wA=$*SA*4*DA;for(let nA=0;nA<BA.count;nA++){const rA=nA*CA;F===!0&&(t.fromBufferAttribute(BA,nA),W[wA+rA+0]=t.x,W[wA+rA+1]=t.y,W[wA+rA+2]=t.z,W[wA+rA+3]=0),N===!0&&(t.fromBufferAttribute(_,nA),W[wA+rA+4]=t.x,W[wA+rA+5]=t.y,W[wA+rA+6]=t.z,W[wA+rA+7]=0),p===!0&&(t.fromBufferAttribute(IA,nA),W[wA+rA+8]=t.x,W[wA+rA+9]=t.y,W[wA+rA+10]=t.z,W[wA+rA+11]=IA.itemSize===4?t.w:1)}}U={count:w,texture:v,size:new EI($,SA)},E.set(s,U),s.addEventListener("dispose",GA)}let d=0;for(let F=0;F<c.length;F++)d+=c[F];const q=s.morphTargetsRelative?1:1-d;S.getUniforms().setValue(i,"morphTargetBaseInfluence",q),S.getUniforms().setValue(i,"morphTargetInfluences",c),S.getUniforms().setValue(i,"morphTargetsTexture",U.texture,I),S.getUniforms().setValue(i,"morphTargetsTextureSize",U.size)}else{const G=c===void 0?0:c.length;let w=g[s.id];if(w===void 0||w.length!==G){w=[];for(let N=0;N<G;N++)w[N]=[N,0];g[s.id]=w}for(let N=0;N<G;N++){const p=w[N];p[0]=N,p[1]=c[N]}w.sort(WN);for(let N=0;N<8;N++)N<G&&w[N][1]?(o[N][0]=w[N][0],o[N][1]=w[N][1]):(o[N][0]=Number.MAX_SAFE_INTEGER,o[N][1]=0);o.sort(ZN);const U=s.morphAttributes.position,d=s.morphAttributes.normal;let q=0;for(let N=0;N<8;N++){const p=o[N],x=p[0],M=p[1];x!==Number.MAX_SAFE_INTEGER&&M?(U&&s.getAttribute("morphTarget"+N)!==U[x]&&s.setAttribute("morphTarget"+N,U[x]),d&&s.getAttribute("morphNormal"+N)!==d[x]&&s.setAttribute("morphNormal"+N,d[x]),B[N]=M,q+=M):(U&&s.hasAttribute("morphTarget"+N)===!0&&s.deleteAttribute("morphTarget"+N),d&&s.hasAttribute("morphNormal"+N)===!0&&s.deleteAttribute("morphNormal"+N),B[N]=0)}const F=s.morphTargetsRelative?1:1-q;S.getUniforms().setValue(i,"morphTargetBaseInfluence",F),S.getUniforms().setValue(i,"morphTargetInfluences",B)}}return{update:D}}function PN(i,A,I,g){let B=new WeakMap;function E(D){const a=g.render.frame,s=D.geometry,h=A.get(D,s);return B.get(h)!==a&&(A.update(h),B.set(h,a)),D.isInstancedMesh&&(D.hasEventListener("dispose",o)===!1&&D.addEventListener("dispose",o),I.update(D.instanceMatrix,34962),D.instanceColor!==null&&I.update(D.instanceColor,34962)),h}function t(){B=new WeakMap}function o(D){const a=D.target;a.removeEventListener("dispose",o),I.remove(a.instanceMatrix),a.instanceColor!==null&&I.remove(a.instanceColor)}return{update:E,dispose:t}}const TS=new MC,xS=new qS,OS=new YU,bS=new uS,Kh=[],Nh=[],Jh=new Float32Array(16),Fh=new Float32Array(9),Rh=new Float32Array(4);function eE(i,A,I){const g=i[0];if(g<=0||g>0)return i;const B=A*I;let E=Kh[B];if(E===void 0&&(E=new Float32Array(B),Kh[B]=E),A!==0){g.toArray(E,0);for(let t=1,o=0;t!==A;++t)o+=I,i[t].toArray(E,o)}return E}function Eg(i,A){if(i.length!==A.length)return!1;for(let I=0,g=i.length;I<g;I++)if(i[I]!==A[I])return!1;return!0}function ig(i,A){for(let I=0,g=A.length;I<g;I++)i[I]=A[I]}function jo(i,A){let I=Nh[A];I===void 0&&(I=new Int32Array(A),Nh[A]=I);for(let g=0;g!==A;++g)I[g]=i.allocateTextureUnit();return I}function VN(i,A){const I=this.cache;I[0]!==A&&(i.uniform1f(this.addr,A),I[0]=A)}function jN(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(i.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(Eg(I,A))return;i.uniform2fv(this.addr,A),ig(I,A)}}function _N(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(i.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(i.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(Eg(I,A))return;i.uniform3fv(this.addr,A),ig(I,A)}}function zN(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(i.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(Eg(I,A))return;i.uniform4fv(this.addr,A),ig(I,A)}}function XN(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(Eg(I,A))return;i.uniformMatrix2fv(this.addr,!1,A),ig(I,A)}else{if(Eg(I,g))return;Rh.set(g),i.uniformMatrix2fv(this.addr,!1,Rh),ig(I,g)}}function $N(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(Eg(I,A))return;i.uniformMatrix3fv(this.addr,!1,A),ig(I,A)}else{if(Eg(I,g))return;Fh.set(g),i.uniformMatrix3fv(this.addr,!1,Fh),ig(I,g)}}function AJ(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(Eg(I,A))return;i.uniformMatrix4fv(this.addr,!1,A),ig(I,A)}else{if(Eg(I,g))return;Jh.set(g),i.uniformMatrix4fv(this.addr,!1,Jh),ig(I,g)}}function IJ(i,A){const I=this.cache;I[0]!==A&&(i.uniform1i(this.addr,A),I[0]=A)}function gJ(i,A){const I=this.cache;Eg(I,A)||(i.uniform2iv(this.addr,A),ig(I,A))}function CJ(i,A){const I=this.cache;Eg(I,A)||(i.uniform3iv(this.addr,A),ig(I,A))}function BJ(i,A){const I=this.cache;Eg(I,A)||(i.uniform4iv(this.addr,A),ig(I,A))}function QJ(i,A){const I=this.cache;I[0]!==A&&(i.uniform1ui(this.addr,A),I[0]=A)}function EJ(i,A){const I=this.cache;Eg(I,A)||(i.uniform2uiv(this.addr,A),ig(I,A))}function iJ(i,A){const I=this.cache;Eg(I,A)||(i.uniform3uiv(this.addr,A),ig(I,A))}function oJ(i,A){const I=this.cache;Eg(I,A)||(i.uniform4uiv(this.addr,A),ig(I,A))}function tJ(i,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(i.uniform1i(this.addr,B),g[0]=B),I.setTexture2D(A||TS,B)}function eJ(i,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(i.uniform1i(this.addr,B),g[0]=B),I.setTexture3D(A||OS,B)}function aJ(i,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(i.uniform1i(this.addr,B),g[0]=B),I.setTextureCube(A||bS,B)}function DJ(i,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(i.uniform1i(this.addr,B),g[0]=B),I.setTexture2DArray(A||xS,B)}function sJ(i){switch(i){case 5126:return VN;case 35664:return jN;case 35665:return _N;case 35666:return zN;case 35674:return XN;case 35675:return $N;case 35676:return AJ;case 5124:case 35670:return IJ;case 35667:case 35671:return gJ;case 35668:case 35672:return CJ;case 35669:case 35673:return BJ;case 5125:return QJ;case 36294:return EJ;case 36295:return iJ;case 36296:return oJ;case 35678:case 36198:case 36298:case 36306:case 35682:return tJ;case 35679:case 36299:case 36307:return eJ;case 35680:case 36300:case 36308:case 36293:return aJ;case 36289:case 36303:case 36311:case 36292:return DJ}}function nJ(i,A){i.uniform1fv(this.addr,A)}function hJ(i,A){const I=eE(A,this.size,2);i.uniform2fv(this.addr,I)}function SJ(i,A){const I=eE(A,this.size,3);i.uniform3fv(this.addr,I)}function wJ(i,A){const I=eE(A,this.size,4);i.uniform4fv(this.addr,I)}function GJ(i,A){const I=eE(A,this.size,4);i.uniformMatrix2fv(this.addr,!1,I)}function rJ(i,A){const I=eE(A,this.size,9);i.uniformMatrix3fv(this.addr,!1,I)}function cJ(i,A){const I=eE(A,this.size,16);i.uniformMatrix4fv(this.addr,!1,I)}function kJ(i,A){i.uniform1iv(this.addr,A)}function lJ(i,A){i.uniform2iv(this.addr,A)}function yJ(i,A){i.uniform3iv(this.addr,A)}function MJ(i,A){i.uniform4iv(this.addr,A)}function UJ(i,A){i.uniform1uiv(this.addr,A)}function KJ(i,A){i.uniform2uiv(this.addr,A)}function NJ(i,A){i.uniform3uiv(this.addr,A)}function JJ(i,A){i.uniform4uiv(this.addr,A)}function FJ(i,A,I){const g=this.cache,B=A.length,E=jo(I,B);Eg(g,E)||(i.uniform1iv(this.addr,E),ig(g,E));for(let t=0;t!==B;++t)I.setTexture2D(A[t]||TS,E[t])}function RJ(i,A,I){const g=this.cache,B=A.length,E=jo(I,B);Eg(g,E)||(i.uniform1iv(this.addr,E),ig(g,E));for(let t=0;t!==B;++t)I.setTexture3D(A[t]||OS,E[t])}function qJ(i,A,I){const g=this.cache,B=A.length,E=jo(I,B);Eg(g,E)||(i.uniform1iv(this.addr,E),ig(g,E));for(let t=0;t!==B;++t)I.setTextureCube(A[t]||bS,E[t])}function pJ(i,A,I){const g=this.cache,B=A.length,E=jo(I,B);Eg(g,E)||(i.uniform1iv(this.addr,E),ig(g,E));for(let t=0;t!==B;++t)I.setTexture2DArray(A[t]||xS,E[t])}function dJ(i){switch(i){case 5126:return nJ;case 35664:return hJ;case 35665:return SJ;case 35666:return wJ;case 35674:return GJ;case 35675:return rJ;case 35676:return cJ;case 5124:case 35670:return kJ;case 35667:case 35671:return lJ;case 35668:case 35672:return yJ;case 35669:case 35673:return MJ;case 5125:return UJ;case 36294:return KJ;case 36295:return NJ;case 36296:return JJ;case 35678:case 36198:case 36298:case 36306:case 35682:return FJ;case 35679:case 36299:case 36307:return RJ;case 35680:case 36300:case 36308:case 36293:return qJ;case 36289:case 36303:case 36311:case 36292:return pJ}}class LJ{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.setValue=sJ(I.type)}}class YJ{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.size=I.size,this.setValue=dJ(I.type)}}class fJ{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const B=this.seq;for(let E=0,t=B.length;E!==t;++E){const o=B[E];o.setValue(A,I[o.id],g)}}}const Ve=/(\w+)(\])?(\[|\.)?/g;function qh(i,A){i.seq.push(A),i.map[A.id]=A}function uJ(i,A,I){const g=i.name,B=g.length;for(Ve.lastIndex=0;;){const E=Ve.exec(g),t=Ve.lastIndex;let o=E[1];const D=E[2]==="]",a=E[3];if(D&&(o=o|0),a===void 0||a==="["&&t+2===B){qh(I,a===void 0?new LJ(o,i,A):new YJ(o,i,A));break}else{let h=I.map[o];h===void 0&&(h=new fJ(o),qh(I,h)),I=h}}}class yo{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,35718);for(let B=0;B<g;++B){const E=A.getActiveUniform(I,B),t=A.getUniformLocation(I,E.name);uJ(E,t,this)}}setValue(A,I,g,B){const E=this.map[I];E!==void 0&&E.setValue(A,g,B)}setOptional(A,I,g){const B=I[g];B!==void 0&&this.setValue(A,g,B)}static upload(A,I,g,B){for(let E=0,t=I.length;E!==t;++E){const o=I[E],D=g[o.id];D.needsUpdate!==!1&&o.setValue(A,D.value,B)}}static seqWithValue(A,I){const g=[];for(let B=0,E=A.length;B!==E;++B){const t=A[B];t.id in I&&g.push(t)}return g}}function ph(i,A,I){const g=i.createShader(A);return i.shaderSource(g,I),i.compileShader(g),g}let HJ=0;function mJ(i,A){const I=i.split(`
`),g=[],B=Math.max(A-6,0),E=Math.min(A+6,I.length);for(let t=B;t<E;t++){const o=t+1;g.push(`${o===A?">":" "} ${o}: ${I[t]}`)}return g.join(`
`)}function TJ(i){switch(i){case QQ:return["Linear","( value )"];case WI:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function dh(i,A,I){const g=i.getShaderParameter(A,35713),B=i.getShaderInfoLog(A).trim();if(g&&B==="")return"";const E=/ERROR: 0:(\d+)/.exec(B);if(E){const t=parseInt(E[1]);return I.toUpperCase()+`

`+B+`

`+mJ(i.getShaderSource(A),t)}else return B}function xJ(i,A){const I=TJ(A);return"vec4 "+i+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function OJ(i,A){let I;switch(A){case oU:I="Linear";break;case tU:I="Reinhard";break;case eU:I="OptimizedCineon";break;case aU:I="ACESFilmic";break;case DU:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+i+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function bJ(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(HE).join(`
`)}function ZJ(i){const A=[];for(const I in i){const g=i[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function WJ(i,A){const I={},g=i.getProgramParameter(A,35721);for(let B=0;B<g;B++){const E=i.getActiveAttrib(A,B),t=E.name;let o=1;E.type===35674&&(o=2),E.type===35675&&(o=3),E.type===35676&&(o=4),I[t]={type:E.type,location:i.getAttribLocation(A,t),locationSize:o}}return I}function HE(i){return i!==""}function Lh(i,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Yh(i,A){return i.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const vJ=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(i){return i.replace(vJ,PJ)}function PJ(i,A){const I=oI[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return sa(I)}const VJ=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(VJ,jJ)}function jJ(i,A,I,g){let B="";for(let E=parseInt(A);E<parseInt(I);E++)B+=g.replace(/\[\s*i\s*\]/g,"[ "+E+" ]").replace(/UNROLLED_LOOP_INDEX/g,E);return B}function uh(i){let A="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?A+=`
#define HIGH_PRECISION`:i.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function _J(i){let A="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kS?A="SHADOWMAP_TYPE_PCF":i.shadowMapType===TM?A="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===uE&&(A="SHADOWMAP_TYPE_VSM"),A}function zJ(i){let A="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case AE:case IE:A="ENVMAP_TYPE_CUBE";break;case Wo:A="ENVMAP_TYPE_CUBE_UV";break}return A}function XJ(i){let A="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case IE:A="ENVMAP_MODE_REFRACTION";break}return A}function $J(i){let A="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case da:A="ENVMAP_BLENDING_MULTIPLY";break;case EU:A="ENVMAP_BLENDING_MIX";break;case iU:A="ENVMAP_BLENDING_ADD";break}return A}function AF(i){const A=i.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function IF(i,A,I,g){const B=i.getContext(),E=I.defines;let t=I.vertexShader,o=I.fragmentShader;const D=_J(I),a=zJ(I),s=XJ(I),h=$J(I),S=AF(I),c=I.isWebGL2?"":bJ(I),l=ZJ(E),G=B.createProgram();let w,U,d=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(w=[l].filter(HE).join(`
`),w.length>0&&(w+=`
`),U=[c,l].filter(HE).join(`
`),U.length>0&&(U+=`
`)):(w=[uh(I),"#define SHADER_NAME "+I.shaderName,l,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.supportsVertexTextures?"#define VERTEX_TEXTURES":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+s:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.displacementMap&&I.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+D:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(HE).join(`
`),U=[c,uh(I),"#define SHADER_NAME "+I.shaderName,l,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+a:"",I.envMap?"#define "+s:"",I.envMap?"#define "+h:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+D:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==BB?"#define TONE_MAPPING":"",I.toneMapping!==BB?oI.tonemapping_pars_fragment:"",I.toneMapping!==BB?OJ("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",oI.encodings_pars_fragment,xJ("linearToOutputTexel",I.outputEncoding),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(HE).join(`
`)),t=sa(t),t=Lh(t,I),t=Yh(t,I),o=sa(o),o=Lh(o,I),o=Yh(o,I),t=fh(t),o=fh(o),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,w=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,U=["#define varying in",I.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+U);const q=d+w+t,F=d+U+o,N=ph(B,35633,q),p=ph(B,35632,F);if(B.attachShader(G,N),B.attachShader(G,p),I.index0AttributeName!==void 0?B.bindAttribLocation(G,0,I.index0AttributeName):I.morphTargets===!0&&B.bindAttribLocation(G,0,"position"),B.linkProgram(G),i.debug.checkShaderErrors){const Y=B.getProgramInfoLog(G).trim(),u=B.getShaderInfoLog(N).trim(),$=B.getShaderInfoLog(p).trim();let SA=!0,W=!0;if(B.getProgramParameter(G,35714)===!1){SA=!1;const v=dh(B,N,"vertex"),CA=dh(B,p,"fragment");console.error("THREE.WebGLProgram: Shader Error "+B.getError()+" - VALIDATE_STATUS "+B.getProgramParameter(G,35715)+`

Program Info Log: `+Y+`
`+v+`
`+CA)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(u===""||$==="")&&(W=!1);W&&(this.diagnostics={runnable:SA,programLog:Y,vertexShader:{log:u,prefix:w},fragmentShader:{log:$,prefix:U}})}B.deleteShader(N),B.deleteShader(p);let x;this.getUniforms=function(){return x===void 0&&(x=new yo(B,G)),x};let M;return this.getAttributes=function(){return M===void 0&&(M=WJ(B,G)),M},this.destroy=function(){g.releaseStatesOfProgram(this),B.deleteProgram(G),this.program=void 0},this.name=I.shaderName,this.id=HJ++,this.cacheKey=A,this.usedTimes=1,this.program=G,this.vertexShader=N,this.fragmentShader=p,this}let gF=0;class CF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,B=this._getShaderStage(I),E=this._getShaderStage(g),t=this._getShaderCacheForMaterial(A);return t.has(B)===!1&&(t.add(B),B.usedTimes++),t.has(E)===!1&&(t.add(E),E.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new BF(A),I.set(A,g)),g}}class BF{constructor(A){this.id=gF++,this.code=A,this.usedTimes=0}}function QF(i,A,I,g,B,E,t){const o=new dS,D=new CF,a=[],s=B.isWebGL2,h=B.logarithmicDepthBuffer,S=B.vertexTextures;let c=B.precision;const l={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function G(M,Y,u,$,SA){const W=$.fog,v=SA.geometry,CA=M.isMeshStandardMaterial?$.environment:null,GA=(M.isMeshStandardMaterial?I:A).get(M.envMap||CA),DA=!!GA&&GA.mapping===Wo?GA.image.height:null,BA=l[M.type];M.precision!==null&&(c=B.getMaxPrecision(M.precision),c!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",c,"instead."));const _=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,IA=_!==void 0?_.length:0;let wA=0;v.morphAttributes.position!==void 0&&(wA=1),v.morphAttributes.normal!==void 0&&(wA=2),v.morphAttributes.color!==void 0&&(wA=3);let nA,rA,JA,mA;if(BA){const eI=qC[BA];nA=eI.vertexShader,rA=eI.fragmentShader}else nA=M.vertexShader,rA=M.fragmentShader,D.update(M),JA=D.getVertexShaderID(M),mA=D.getFragmentShaderID(M);const oA=i.getRenderTarget(),$A=M.alphaTest>0,LA=M.clearcoat>0,fA=M.iridescence>0;return{isWebGL2:s,shaderID:BA,shaderName:M.type,vertexShader:nA,fragmentShader:rA,defines:M.defines,customVertexShaderID:JA,customFragmentShaderID:mA,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:c,instancing:SA.isInstancedMesh===!0,instancingColor:SA.isInstancedMesh===!0&&SA.instanceColor!==null,supportsVertexTextures:S,outputEncoding:oA===null?i.outputEncoding:oA.isXRRenderTarget===!0?oA.texture.encoding:QQ,map:!!M.map,matcap:!!M.matcap,envMap:!!GA,envMapMode:GA&&GA.mapping,envMapCubeUVHeight:DA,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===qU,tangentSpaceNormalMap:M.normalMapType===KS,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===WI,clearcoat:LA,clearcoatMap:LA&&!!M.clearcoatMap,clearcoatRoughnessMap:LA&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:LA&&!!M.clearcoatNormalMap,iridescence:fA,iridescenceMap:fA&&!!M.iridescenceMap,iridescenceThicknessMap:fA&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===_Q,alphaMap:!!M.alphaMap,alphaTest:$A,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!v.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!W,useFog:M.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:SA.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:IA,morphTextureStride:wA,numDirLights:Y.directional.length,numPointLights:Y.point.length,numSpotLights:Y.spot.length,numSpotLightMaps:Y.spotLightMap.length,numRectAreaLights:Y.rectArea.length,numHemiLights:Y.hemi.length,numDirLightShadows:Y.directionalShadowMap.length,numPointLightShadows:Y.pointShadowMap.length,numSpotLightShadows:Y.spotShadowMap.length,numSpotLightShadowsWithMaps:Y.numSpotLightShadowsWithMaps,numClippingPlanes:t.numPlanes,numClipIntersection:t.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&u.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:BB,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gB,flipSided:M.side===oC,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:s||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:s||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:s||g.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function w(M){const Y=[];if(M.shaderID?Y.push(M.shaderID):(Y.push(M.customVertexShaderID),Y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const u in M.defines)Y.push(u),Y.push(M.defines[u]);return M.isRawShaderMaterial===!1&&(U(Y,M),d(Y,M),Y.push(i.outputEncoding)),Y.push(M.customProgramCacheKey),Y.join()}function U(M,Y){M.push(Y.precision),M.push(Y.outputEncoding),M.push(Y.envMapMode),M.push(Y.envMapCubeUVHeight),M.push(Y.combine),M.push(Y.vertexUvs),M.push(Y.fogExp2),M.push(Y.sizeAttenuation),M.push(Y.morphTargetsCount),M.push(Y.morphAttributeCount),M.push(Y.numDirLights),M.push(Y.numPointLights),M.push(Y.numSpotLights),M.push(Y.numSpotLightMaps),M.push(Y.numHemiLights),M.push(Y.numRectAreaLights),M.push(Y.numDirLightShadows),M.push(Y.numPointLightShadows),M.push(Y.numSpotLightShadows),M.push(Y.numSpotLightShadowsWithMaps),M.push(Y.shadowMapType),M.push(Y.toneMapping),M.push(Y.numClippingPlanes),M.push(Y.numClipIntersection),M.push(Y.depthPacking)}function d(M,Y){o.disableAll(),Y.isWebGL2&&o.enable(0),Y.supportsVertexTextures&&o.enable(1),Y.instancing&&o.enable(2),Y.instancingColor&&o.enable(3),Y.map&&o.enable(4),Y.matcap&&o.enable(5),Y.envMap&&o.enable(6),Y.lightMap&&o.enable(7),Y.aoMap&&o.enable(8),Y.emissiveMap&&o.enable(9),Y.bumpMap&&o.enable(10),Y.normalMap&&o.enable(11),Y.objectSpaceNormalMap&&o.enable(12),Y.tangentSpaceNormalMap&&o.enable(13),Y.clearcoat&&o.enable(14),Y.clearcoatMap&&o.enable(15),Y.clearcoatRoughnessMap&&o.enable(16),Y.clearcoatNormalMap&&o.enable(17),Y.iridescence&&o.enable(18),Y.iridescenceMap&&o.enable(19),Y.iridescenceThicknessMap&&o.enable(20),Y.displacementMap&&o.enable(21),Y.specularMap&&o.enable(22),Y.roughnessMap&&o.enable(23),Y.metalnessMap&&o.enable(24),Y.gradientMap&&o.enable(25),Y.alphaMap&&o.enable(26),Y.alphaTest&&o.enable(27),Y.vertexColors&&o.enable(28),Y.vertexAlphas&&o.enable(29),Y.vertexUvs&&o.enable(30),Y.vertexTangents&&o.enable(31),Y.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),Y.fog&&o.enable(0),Y.useFog&&o.enable(1),Y.flatShading&&o.enable(2),Y.logarithmicDepthBuffer&&o.enable(3),Y.skinning&&o.enable(4),Y.morphTargets&&o.enable(5),Y.morphNormals&&o.enable(6),Y.morphColors&&o.enable(7),Y.premultipliedAlpha&&o.enable(8),Y.shadowMapEnabled&&o.enable(9),Y.physicallyCorrectLights&&o.enable(10),Y.doubleSided&&o.enable(11),Y.flipSided&&o.enable(12),Y.useDepthPacking&&o.enable(13),Y.dithering&&o.enable(14),Y.specularIntensityMap&&o.enable(15),Y.specularColorMap&&o.enable(16),Y.transmission&&o.enable(17),Y.transmissionMap&&o.enable(18),Y.thicknessMap&&o.enable(19),Y.sheen&&o.enable(20),Y.sheenColorMap&&o.enable(21),Y.sheenRoughnessMap&&o.enable(22),Y.decodeVideoTexture&&o.enable(23),Y.opaque&&o.enable(24),M.push(o.mask)}function q(M){const Y=l[M.type];let u;if(Y){const $=qC[Y];u=PU.clone($.uniforms)}else u=M.uniforms;return u}function F(M,Y){let u;for(let $=0,SA=a.length;$<SA;$++){const W=a[$];if(W.cacheKey===Y){u=W,++u.usedTimes;break}}return u===void 0&&(u=new IF(i,Y,M,E),a.push(u)),u}function N(M){if(--M.usedTimes===0){const Y=a.indexOf(M);a[Y]=a[a.length-1],a.pop(),M.destroy()}}function p(M){D.remove(M)}function x(){D.dispose()}return{getParameters:G,getProgramCacheKey:w,getUniforms:q,acquireProgram:F,releaseProgram:N,releaseShaderCache:p,programs:a,dispose:x}}function EF(){let i=new WeakMap;function A(E){let t=i.get(E);return t===void 0&&(t={},i.set(E,t)),t}function I(E){i.delete(E)}function g(E,t,o){i.get(E)[t]=o}function B(){i=new WeakMap}return{get:A,remove:I,update:g,dispose:B}}function iF(i,A){return i.groupOrder!==A.groupOrder?i.groupOrder-A.groupOrder:i.renderOrder!==A.renderOrder?i.renderOrder-A.renderOrder:i.material.id!==A.material.id?i.material.id-A.material.id:i.z!==A.z?i.z-A.z:i.id-A.id}function Hh(i,A){return i.groupOrder!==A.groupOrder?i.groupOrder-A.groupOrder:i.renderOrder!==A.renderOrder?i.renderOrder-A.renderOrder:i.z!==A.z?A.z-i.z:i.id-A.id}function mh(){const i=[];let A=0;const I=[],g=[],B=[];function E(){A=0,I.length=0,g.length=0,B.length=0}function t(h,S,c,l,G,w){let U=i[A];return U===void 0?(U={id:h.id,object:h,geometry:S,material:c,groupOrder:l,renderOrder:h.renderOrder,z:G,group:w},i[A]=U):(U.id=h.id,U.object=h,U.geometry=S,U.material=c,U.groupOrder=l,U.renderOrder=h.renderOrder,U.z=G,U.group=w),A++,U}function o(h,S,c,l,G,w){const U=t(h,S,c,l,G,w);c.transmission>0?g.push(U):c.transparent===!0?B.push(U):I.push(U)}function D(h,S,c,l,G,w){const U=t(h,S,c,l,G,w);c.transmission>0?g.unshift(U):c.transparent===!0?B.unshift(U):I.unshift(U)}function a(h,S){I.length>1&&I.sort(h||iF),g.length>1&&g.sort(S||Hh),B.length>1&&B.sort(S||Hh)}function s(){for(let h=A,S=i.length;h<S;h++){const c=i[h];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:I,transmissive:g,transparent:B,init:E,push:o,unshift:D,finish:s,sort:a}}function oF(){let i=new WeakMap;function A(g,B){const E=i.get(g);let t;return E===void 0?(t=new mh,i.set(g,[t])):B>=E.length?(t=new mh,E.push(t)):t=E[B],t}function I(){i=new WeakMap}return{get:A,dispose:I}}function tF(){const i={};return{get:function(A){if(i[A.id]!==void 0)return i[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new P,color:new wI};break;case"SpotLight":I={position:new P,direction:new P,color:new wI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new P,color:new wI,distance:0,decay:0};break;case"HemisphereLight":I={direction:new P,skyColor:new wI,groundColor:new wI};break;case"RectAreaLight":I={color:new wI,position:new P,halfWidth:new P,halfHeight:new P};break}return i[A.id]=I,I}}}function eF(){const i={};return{get:function(A){if(i[A.id]!==void 0)return i[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new EI};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new EI};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new EI,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[A.id]=I,I}}}let aF=0;function DF(i,A){return(A.castShadow?2:0)-(i.castShadow?2:0)+(A.map?1:0)-(i.map?1:0)}function sF(i,A){const I=new tF,g=eF(),B={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let s=0;s<9;s++)B.probe.push(new P);const E=new P,t=new Ig,o=new Ig;function D(s,h){let S=0,c=0,l=0;for(let $=0;$<9;$++)B.probe[$].set(0,0,0);let G=0,w=0,U=0,d=0,q=0,F=0,N=0,p=0,x=0,M=0;s.sort(DF);const Y=h!==!0?Math.PI:1;for(let $=0,SA=s.length;$<SA;$++){const W=s[$],v=W.color,CA=W.intensity,GA=W.distance,DA=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)S+=v.r*CA*Y,c+=v.g*CA*Y,l+=v.b*CA*Y;else if(W.isLightProbe)for(let BA=0;BA<9;BA++)B.probe[BA].addScaledVector(W.sh.coefficients[BA],CA);else if(W.isDirectionalLight){const BA=I.get(W);if(BA.color.copy(W.color).multiplyScalar(W.intensity*Y),W.castShadow){const _=W.shadow,IA=g.get(W);IA.shadowBias=_.bias,IA.shadowNormalBias=_.normalBias,IA.shadowRadius=_.radius,IA.shadowMapSize=_.mapSize,B.directionalShadow[G]=IA,B.directionalShadowMap[G]=DA,B.directionalShadowMatrix[G]=W.shadow.matrix,F++}B.directional[G]=BA,G++}else if(W.isSpotLight){const BA=I.get(W);BA.position.setFromMatrixPosition(W.matrixWorld),BA.color.copy(v).multiplyScalar(CA*Y),BA.distance=GA,BA.coneCos=Math.cos(W.angle),BA.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),BA.decay=W.decay,B.spot[U]=BA;const _=W.shadow;if(W.map&&(B.spotLightMap[x]=W.map,x++,_.updateMatrices(W),W.castShadow&&M++),B.spotLightMatrix[U]=_.matrix,W.castShadow){const IA=g.get(W);IA.shadowBias=_.bias,IA.shadowNormalBias=_.normalBias,IA.shadowRadius=_.radius,IA.shadowMapSize=_.mapSize,B.spotShadow[U]=IA,B.spotShadowMap[U]=DA,p++}U++}else if(W.isRectAreaLight){const BA=I.get(W);BA.color.copy(v).multiplyScalar(CA),BA.halfWidth.set(W.width*.5,0,0),BA.halfHeight.set(0,W.height*.5,0),B.rectArea[d]=BA,d++}else if(W.isPointLight){const BA=I.get(W);if(BA.color.copy(W.color).multiplyScalar(W.intensity*Y),BA.distance=W.distance,BA.decay=W.decay,W.castShadow){const _=W.shadow,IA=g.get(W);IA.shadowBias=_.bias,IA.shadowNormalBias=_.normalBias,IA.shadowRadius=_.radius,IA.shadowMapSize=_.mapSize,IA.shadowCameraNear=_.camera.near,IA.shadowCameraFar=_.camera.far,B.pointShadow[w]=IA,B.pointShadowMap[w]=DA,B.pointShadowMatrix[w]=W.shadow.matrix,N++}B.point[w]=BA,w++}else if(W.isHemisphereLight){const BA=I.get(W);BA.skyColor.copy(W.color).multiplyScalar(CA*Y),BA.groundColor.copy(W.groundColor).multiplyScalar(CA*Y),B.hemi[q]=BA,q++}}d>0&&(A.isWebGL2||i.has("OES_texture_float_linear")===!0?(B.rectAreaLTC1=MA.LTC_FLOAT_1,B.rectAreaLTC2=MA.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(B.rectAreaLTC1=MA.LTC_HALF_1,B.rectAreaLTC2=MA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),B.ambient[0]=S,B.ambient[1]=c,B.ambient[2]=l;const u=B.hash;(u.directionalLength!==G||u.pointLength!==w||u.spotLength!==U||u.rectAreaLength!==d||u.hemiLength!==q||u.numDirectionalShadows!==F||u.numPointShadows!==N||u.numSpotShadows!==p||u.numSpotMaps!==x)&&(B.directional.length=G,B.spot.length=U,B.rectArea.length=d,B.point.length=w,B.hemi.length=q,B.directionalShadow.length=F,B.directionalShadowMap.length=F,B.pointShadow.length=N,B.pointShadowMap.length=N,B.spotShadow.length=p,B.spotShadowMap.length=p,B.directionalShadowMatrix.length=F,B.pointShadowMatrix.length=N,B.spotLightMatrix.length=p+x-M,B.spotLightMap.length=x,B.numSpotLightShadowsWithMaps=M,u.directionalLength=G,u.pointLength=w,u.spotLength=U,u.rectAreaLength=d,u.hemiLength=q,u.numDirectionalShadows=F,u.numPointShadows=N,u.numSpotShadows=p,u.numSpotMaps=x,B.version=aF++)}function a(s,h){let S=0,c=0,l=0,G=0,w=0;const U=h.matrixWorldInverse;for(let d=0,q=s.length;d<q;d++){const F=s[d];if(F.isDirectionalLight){const N=B.directional[S];N.direction.setFromMatrixPosition(F.matrixWorld),E.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(E),N.direction.transformDirection(U),S++}else if(F.isSpotLight){const N=B.spot[l];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(U),N.direction.setFromMatrixPosition(F.matrixWorld),E.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(E),N.direction.transformDirection(U),l++}else if(F.isRectAreaLight){const N=B.rectArea[G];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(U),o.identity(),t.copy(F.matrixWorld),t.premultiply(U),o.extractRotation(t),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),G++}else if(F.isPointLight){const N=B.point[c];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(U),c++}else if(F.isHemisphereLight){const N=B.hemi[w];N.direction.setFromMatrixPosition(F.matrixWorld),N.direction.transformDirection(U),w++}}}return{setup:D,setupView:a,state:B}}function Th(i,A){const I=new sF(i,A),g=[],B=[];function E(){g.length=0,B.length=0}function t(h){g.push(h)}function o(h){B.push(h)}function D(h){I.setup(g,h)}function a(h){I.setupView(g,h)}return{init:E,state:{lightsArray:g,shadowsArray:B,lights:I},setupLights:D,setupLightsView:a,pushLight:t,pushShadow:o}}function nF(i,A){let I=new WeakMap;function g(E,t=0){const o=I.get(E);let D;return o===void 0?(D=new Th(i,A),I.set(E,[D])):t>=o.length?(D=new Th(i,A),o.push(D)):D=o[t],D}function B(){I=new WeakMap}return{get:g,dispose:B}}class hF extends tE{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FU,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class SF extends tE{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const wF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GF=`uniform sampler2D shadow_pass;
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
}`;function rF(i,A,I){let g=new La;const B=new EI,E=new EI,t=new ag,o=new hF({depthPacking:RU}),D=new SF,a={},s=I.maxTextureSize,h={0:oC,1:$Q,2:gB},S=new iQ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new EI},radius:{value:4}},vertexShader:wF,fragmentShader:GF}),c=S.clone();c.defines.HORIZONTAL_PASS=1;const l=new EB;l.setAttribute("position",new LC(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const G=new lC(l,S),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kS,this.render=function(F,N,p){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||F.length===0)return;const x=i.getRenderTarget(),M=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),u=i.state;u.setBlending(CB),u.buffers.color.setClear(1,1,1,1),u.buffers.depth.setTest(!0),u.setScissorTest(!1);for(let $=0,SA=F.length;$<SA;$++){const W=F[$],v=W.shadow;if(v===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;B.copy(v.mapSize);const CA=v.getFrameExtents();if(B.multiply(CA),E.copy(v.mapSize),(B.x>s||B.y>s)&&(B.x>s&&(E.x=Math.floor(s/CA.x),B.x=E.x*CA.x,v.mapSize.x=E.x),B.y>s&&(E.y=Math.floor(s/CA.y),B.y=E.y*CA.y,v.mapSize.y=E.y)),v.map===null){const DA=this.type!==uE?{minFilter:dg,magFilter:dg}:{};v.map=new NB(B.x,B.y,DA),v.map.texture.name=W.name+".shadowMap",v.camera.updateProjectionMatrix()}i.setRenderTarget(v.map),i.clear();const GA=v.getViewportCount();for(let DA=0;DA<GA;DA++){const BA=v.getViewport(DA);t.set(E.x*BA.x,E.y*BA.y,E.x*BA.z,E.y*BA.w),u.viewport(t),v.updateMatrices(W,DA),g=v.getFrustum(),q(N,p,v.camera,W,this.type)}v.isPointLightShadow!==!0&&this.type===uE&&U(v,p),v.needsUpdate=!1}w.needsUpdate=!1,i.setRenderTarget(x,M,Y)};function U(F,N){const p=A.update(G);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,c.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,c.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new NB(B.x,B.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(N,null,p,S,G,null),c.uniforms.shadow_pass.value=F.mapPass.texture,c.uniforms.resolution.value=F.mapSize,c.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(N,null,p,c,G,null)}function d(F,N,p,x,M,Y){let u=null;const $=p.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if($!==void 0?u=$:u=p.isPointLight===!0?D:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0){const SA=u.uuid,W=N.uuid;let v=a[SA];v===void 0&&(v={},a[SA]=v);let CA=v[W];CA===void 0&&(CA=u.clone(),v[W]=CA),u=CA}return u.visible=N.visible,u.wireframe=N.wireframe,Y===uE?u.side=N.shadowSide!==null?N.shadowSide:N.side:u.side=N.shadowSide!==null?N.shadowSide:h[N.side],u.alphaMap=N.alphaMap,u.alphaTest=N.alphaTest,u.clipShadows=N.clipShadows,u.clippingPlanes=N.clippingPlanes,u.clipIntersection=N.clipIntersection,u.displacementMap=N.displacementMap,u.displacementScale=N.displacementScale,u.displacementBias=N.displacementBias,u.wireframeLinewidth=N.wireframeLinewidth,u.linewidth=N.linewidth,p.isPointLight===!0&&u.isMeshDistanceMaterial===!0&&(u.referencePosition.setFromMatrixPosition(p.matrixWorld),u.nearDistance=x,u.farDistance=M),u}function q(F,N,p,x,M){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&M===uE)&&(!F.frustumCulled||g.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,F.matrixWorld);const $=A.update(F),SA=F.material;if(Array.isArray(SA)){const W=$.groups;for(let v=0,CA=W.length;v<CA;v++){const GA=W[v],DA=SA[GA.materialIndex];if(DA&&DA.visible){const BA=d(F,DA,x,p.near,p.far,M);i.renderBufferDirect(p,null,$,BA,F,GA)}}}else if(SA.visible){const W=d(F,SA,x,p.near,p.far,M);i.renderBufferDirect(p,null,$,W,F,null)}}const u=F.children;for(let $=0,SA=u.length;$<SA;$++)q(u[$],N,p,x,M)}}function cF(i,A,I){const g=I.isWebGL2;function B(){let O=!1;const RA=new ag;let lA=null;const sA=new ag(0,0,0,0);return{setMask:function(yA){lA!==yA&&!O&&(i.colorMask(yA,yA,yA,yA),lA=yA)},setLocked:function(yA){O=yA},setClear:function(yA,vA,JI,TI,KC){KC===!0&&(yA*=TI,vA*=TI,JI*=TI),RA.set(yA,vA,JI,TI),sA.equals(RA)===!1&&(i.clearColor(yA,vA,JI,TI),sA.copy(RA))},reset:function(){O=!1,lA=null,sA.set(-1,0,0,0)}}}function E(){let O=!1,RA=null,lA=null,sA=null;return{setTest:function(yA){yA?$A(2929):LA(2929)},setMask:function(yA){RA!==yA&&!O&&(i.depthMask(yA),RA=yA)},setFunc:function(yA){if(lA!==yA){switch(yA){case $M:i.depthFunc(512);break;case AU:i.depthFunc(519);break;case IU:i.depthFunc(513);break;case Ea:i.depthFunc(515);break;case gU:i.depthFunc(514);break;case CU:i.depthFunc(518);break;case BU:i.depthFunc(516);break;case QU:i.depthFunc(517);break;default:i.depthFunc(515)}lA=yA}},setLocked:function(yA){O=yA},setClear:function(yA){sA!==yA&&(i.clearDepth(yA),sA=yA)},reset:function(){O=!1,RA=null,lA=null,sA=null}}}function t(){let O=!1,RA=null,lA=null,sA=null,yA=null,vA=null,JI=null,TI=null,KC=null;return{setTest:function(YI){O||(YI?$A(2960):LA(2960))},setMask:function(YI){RA!==YI&&!O&&(i.stencilMask(YI),RA=YI)},setFunc:function(YI,Pg,Ng){(lA!==YI||sA!==Pg||yA!==Ng)&&(i.stencilFunc(YI,Pg,Ng),lA=YI,sA=Pg,yA=Ng)},setOp:function(YI,Pg,Ng){(vA!==YI||JI!==Pg||TI!==Ng)&&(i.stencilOp(YI,Pg,Ng),vA=YI,JI=Pg,TI=Ng)},setLocked:function(YI){O=YI},setClear:function(YI){KC!==YI&&(i.clearStencil(YI),KC=YI)},reset:function(){O=!1,RA=null,lA=null,sA=null,yA=null,vA=null,JI=null,TI=null,KC=null}}}const o=new B,D=new E,a=new t,s=new WeakMap,h=new WeakMap;let S={},c={},l=new WeakMap,G=[],w=null,U=!1,d=null,q=null,F=null,N=null,p=null,x=null,M=null,Y=!1,u=null,$=null,SA=null,W=null,v=null;const CA=i.getParameter(35661);let GA=!1,DA=0;const BA=i.getParameter(7938);BA.indexOf("WebGL")!==-1?(DA=parseFloat(/^WebGL (\d)/.exec(BA)[1]),GA=DA>=1):BA.indexOf("OpenGL ES")!==-1&&(DA=parseFloat(/^OpenGL ES (\d)/.exec(BA)[1]),GA=DA>=2);let _=null,IA={};const wA=i.getParameter(3088),nA=i.getParameter(2978),rA=new ag().fromArray(wA),JA=new ag().fromArray(nA);function mA(O,RA,lA){const sA=new Uint8Array(4),yA=i.createTexture();i.bindTexture(O,yA),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let vA=0;vA<lA;vA++)i.texImage2D(RA+vA,0,6408,1,1,0,6408,5121,sA);return yA}const oA={};oA[3553]=mA(3553,3553,1),oA[34067]=mA(34067,34069,6),o.setClear(0,0,0,1),D.setClear(1),a.setClear(0),$A(2929),D.setFunc(Ea),PI(!1),mI(Fn),$A(2884),rI(CB);function $A(O){S[O]!==!0&&(i.enable(O),S[O]=!0)}function LA(O){S[O]!==!1&&(i.disable(O),S[O]=!1)}function fA(O,RA){return c[O]!==RA?(i.bindFramebuffer(O,RA),c[O]=RA,g&&(O===36009&&(c[36160]=RA),O===36160&&(c[36009]=RA)),!0):!1}function UA(O,RA){let lA=G,sA=!1;if(O)if(lA=l.get(RA),lA===void 0&&(lA=[],l.set(RA,lA)),O.isWebGLMultipleRenderTargets){const yA=O.texture;if(lA.length!==yA.length||lA[0]!==36064){for(let vA=0,JI=yA.length;vA<JI;vA++)lA[vA]=36064+vA;lA.length=yA.length,sA=!0}}else lA[0]!==36064&&(lA[0]=36064,sA=!0);else lA[0]!==1029&&(lA[0]=1029,sA=!0);sA&&(I.isWebGL2?i.drawBuffers(lA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(lA))}function eI(O){return w!==O?(i.useProgram(O),w=O,!0):!1}const jA={[vQ]:32774,[OM]:32778,[bM]:32779};if(g)jA[dn]=32775,jA[Ln]=32776;else{const O=A.get("EXT_blend_minmax");O!==null&&(jA[dn]=O.MIN_EXT,jA[Ln]=O.MAX_EXT)}const xA={[ZM]:0,[WM]:1,[vM]:768,[lS]:770,[XM]:776,[_M]:774,[VM]:772,[PM]:769,[yS]:771,[zM]:775,[jM]:773};function rI(O,RA,lA,sA,yA,vA,JI,TI){if(O===CB){U===!0&&(LA(3042),U=!1);return}if(U===!1&&($A(3042),U=!0),O!==xM){if(O!==d||TI!==Y){if((q!==vQ||p!==vQ)&&(i.blendEquation(32774),q=vQ,p=vQ),TI)switch(O){case _Q:i.blendFuncSeparate(1,771,1,771);break;case Rn:i.blendFunc(1,1);break;case qn:i.blendFuncSeparate(0,769,0,1);break;case pn:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case _Q:i.blendFuncSeparate(770,771,1,771);break;case Rn:i.blendFunc(770,1);break;case qn:i.blendFuncSeparate(0,769,0,1);break;case pn:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}F=null,N=null,x=null,M=null,d=O,Y=TI}return}yA=yA||RA,vA=vA||lA,JI=JI||sA,(RA!==q||yA!==p)&&(i.blendEquationSeparate(jA[RA],jA[yA]),q=RA,p=yA),(lA!==F||sA!==N||vA!==x||JI!==M)&&(i.blendFuncSeparate(xA[lA],xA[sA],xA[vA],xA[JI]),F=lA,N=sA,x=vA,M=JI),d=O,Y=null}function HI(O,RA){O.side===gB?LA(2884):$A(2884);let lA=O.side===oC;RA&&(lA=!lA),PI(lA),O.blending===_Q&&O.transparent===!1?rI(CB):rI(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),D.setFunc(O.depthFunc),D.setTest(O.depthTest),D.setMask(O.depthWrite),o.setMask(O.colorWrite);const sA=O.stencilWrite;a.setTest(sA),sA&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),lI(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?$A(32926):LA(32926)}function PI(O){u!==O&&(O?i.frontFace(2304):i.frontFace(2305),u=O)}function mI(O){O!==HM?($A(2884),O!==$&&(O===Fn?i.cullFace(1029):O===mM?i.cullFace(1028):i.cullFace(1032))):LA(2884),$=O}function OI(O){O!==SA&&(GA&&i.lineWidth(O),SA=O)}function lI(O,RA,lA){O?($A(32823),(W!==RA||v!==lA)&&(i.polygonOffset(RA,lA),W=RA,v=lA)):LA(32823)}function og(O){O?$A(3089):LA(3089)}function LI(O){O===void 0&&(O=33984+CA-1),_!==O&&(i.activeTexture(O),_=O)}function L(O,RA,lA){lA===void 0&&(_===null?lA=33984+CA-1:lA=_);let sA=IA[lA];sA===void 0&&(sA={type:void 0,texture:void 0},IA[lA]=sA),(sA.type!==O||sA.texture!==RA)&&(_!==lA&&(i.activeTexture(lA),_=lA),i.bindTexture(O,RA||oA[O]),sA.type=O,sA.texture=RA)}function J(){const O=IA[_];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function QA(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function cA(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kA(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function KA(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function TA(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function FA(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dA(O){rA.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),rA.copy(O))}function qA(O){JA.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),JA.copy(O))}function uA(O,RA){let lA=h.get(RA);lA===void 0&&(lA=new WeakMap,h.set(RA,lA));let sA=lA.get(O);sA===void 0&&(sA=i.getUniformBlockIndex(RA,O.name),lA.set(O,sA))}function VA(O,RA){const sA=h.get(RA).get(O);s.get(O)!==sA&&(i.uniformBlockBinding(RA,sA,O.__bindingPointIndex),s.set(O,sA))}function DI(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),g===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),S={},_=null,IA={},c={},l=new WeakMap,G=[],w=null,U=!1,d=null,q=null,F=null,N=null,p=null,x=null,M=null,Y=!1,u=null,$=null,SA=null,W=null,v=null,rA.set(0,0,i.canvas.width,i.canvas.height),JA.set(0,0,i.canvas.width,i.canvas.height),o.reset(),D.reset(),a.reset()}return{buffers:{color:o,depth:D,stencil:a},enable:$A,disable:LA,bindFramebuffer:fA,drawBuffers:UA,useProgram:eI,setBlending:rI,setMaterial:HI,setFlipSided:PI,setCullFace:mI,setLineWidth:OI,setPolygonOffset:lI,setScissorTest:og,activeTexture:LI,bindTexture:L,unbindTexture:J,compressedTexImage2D:QA,texImage2D:j,texImage3D:FA,updateUBOMapping:uA,uniformBlockBinding:VA,texStorage2D:TA,texStorage3D:H,texSubImage2D:cA,texSubImage3D:kA,compressedTexSubImage2D:KA,scissor:dA,viewport:qA,reset:DI}}function kF(i,A,I,g,B,E,t){const o=B.isWebGL2,D=B.maxTextures,a=B.maxCubemapSize,s=B.maxTextureSize,h=B.maxSamples,S=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,c=/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap;let G;const w=new WeakMap;let U=!1;try{U=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(L,J){return U?new OffscreenCanvas(L,J):Lo("canvas")}function q(L,J,QA,cA){let kA=1;if((L.width>cA||L.height>cA)&&(kA=cA/Math.max(L.width,L.height)),kA<1||J===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const KA=J?Da:Math.floor,TA=KA(kA*L.width),H=KA(kA*L.height);G===void 0&&(G=d(TA,H));const j=QA?d(TA,H):G;return j.width=TA,j.height=H,j.getContext("2d").drawImage(L,0,0,TA,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+TA+"x"+H+")."),j}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function F(L){return ih(L.width)&&ih(L.height)}function N(L){return o?!1:L.wrapS!==kC||L.wrapT!==kC||L.minFilter!==dg&&L.minFilter!==BC}function p(L,J){return L.generateMipmaps&&J&&L.minFilter!==dg&&L.minFilter!==BC}function x(L){i.generateMipmap(L)}function M(L,J,QA,cA,kA=!1){if(o===!1)return J;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let KA=J;return J===6403&&(QA===5126&&(KA=33326),QA===5131&&(KA=33325),QA===5121&&(KA=33321)),J===33319&&(QA===5126&&(KA=33328),QA===5131&&(KA=33327),QA===5121&&(KA=33323)),J===6408&&(QA===5126&&(KA=34836),QA===5131&&(KA=34842),QA===5121&&(KA=cA===WI&&kA===!1?35907:32856),QA===32819&&(KA=32854),QA===32820&&(KA=32855)),(KA===33325||KA===33326||KA===33327||KA===33328||KA===34842||KA===34836)&&A.get("EXT_color_buffer_float"),KA}function Y(L,J,QA){return p(L,QA)===!0||L.isFramebufferTexture&&L.minFilter!==dg&&L.minFilter!==BC?Math.log2(Math.max(J.width,J.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?J.mipmaps.length:1}function u(L){return L===dg||L===Yn||L===fn?9728:9729}function $(L){const J=L.target;J.removeEventListener("dispose",$),W(J),J.isVideoTexture&&l.delete(J)}function SA(L){const J=L.target;J.removeEventListener("dispose",SA),CA(J)}function W(L){const J=g.get(L);if(J.__webglInit===void 0)return;const QA=L.source,cA=w.get(QA);if(cA){const kA=cA[J.__cacheKey];kA.usedTimes--,kA.usedTimes===0&&v(L),Object.keys(cA).length===0&&w.delete(QA)}g.remove(L)}function v(L){const J=g.get(L);i.deleteTexture(J.__webglTexture);const QA=L.source,cA=w.get(QA);delete cA[J.__cacheKey],t.memory.textures--}function CA(L){const J=L.texture,QA=g.get(L),cA=g.get(J);if(cA.__webglTexture!==void 0&&(i.deleteTexture(cA.__webglTexture),t.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let kA=0;kA<6;kA++)i.deleteFramebuffer(QA.__webglFramebuffer[kA]),QA.__webglDepthbuffer&&i.deleteRenderbuffer(QA.__webglDepthbuffer[kA]);else{if(i.deleteFramebuffer(QA.__webglFramebuffer),QA.__webglDepthbuffer&&i.deleteRenderbuffer(QA.__webglDepthbuffer),QA.__webglMultisampledFramebuffer&&i.deleteFramebuffer(QA.__webglMultisampledFramebuffer),QA.__webglColorRenderbuffer)for(let kA=0;kA<QA.__webglColorRenderbuffer.length;kA++)QA.__webglColorRenderbuffer[kA]&&i.deleteRenderbuffer(QA.__webglColorRenderbuffer[kA]);QA.__webglDepthRenderbuffer&&i.deleteRenderbuffer(QA.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let kA=0,KA=J.length;kA<KA;kA++){const TA=g.get(J[kA]);TA.__webglTexture&&(i.deleteTexture(TA.__webglTexture),t.memory.textures--),g.remove(J[kA])}g.remove(J),g.remove(L)}let GA=0;function DA(){GA=0}function BA(){const L=GA;return L>=D&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+D),GA+=1,L}function _(L){const J=[];return J.push(L.wrapS),J.push(L.wrapT),J.push(L.magFilter),J.push(L.minFilter),J.push(L.anisotropy),J.push(L.internalFormat),J.push(L.format),J.push(L.type),J.push(L.generateMipmaps),J.push(L.premultiplyAlpha),J.push(L.flipY),J.push(L.unpackAlignment),J.push(L.encoding),J.join()}function IA(L,J){const QA=g.get(L);if(L.isVideoTexture&&og(L),L.isRenderTargetTexture===!1&&L.version>0&&QA.__version!==L.version){const cA=L.image;if(cA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(cA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{LA(QA,L,J);return}}I.bindTexture(3553,QA.__webglTexture,33984+J)}function wA(L,J){const QA=g.get(L);if(L.version>0&&QA.__version!==L.version){LA(QA,L,J);return}I.bindTexture(35866,QA.__webglTexture,33984+J)}function nA(L,J){const QA=g.get(L);if(L.version>0&&QA.__version!==L.version){LA(QA,L,J);return}I.bindTexture(32879,QA.__webglTexture,33984+J)}function rA(L,J){const QA=g.get(L);if(L.version>0&&QA.__version!==L.version){fA(QA,L,J);return}I.bindTexture(34067,QA.__webglTexture,33984+J)}const JA={[ta]:10497,[kC]:33071,[ea]:33648},mA={[dg]:9728,[Yn]:9984,[fn]:9986,[BC]:9729,[sU]:9985,[vo]:9987};function oA(L,J,QA){if(QA?(i.texParameteri(L,10242,JA[J.wrapS]),i.texParameteri(L,10243,JA[J.wrapT]),(L===32879||L===35866)&&i.texParameteri(L,32882,JA[J.wrapR]),i.texParameteri(L,10240,mA[J.magFilter]),i.texParameteri(L,10241,mA[J.minFilter])):(i.texParameteri(L,10242,33071),i.texParameteri(L,10243,33071),(L===32879||L===35866)&&i.texParameteri(L,32882,33071),(J.wrapS!==kC||J.wrapT!==kC)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,10240,u(J.magFilter)),i.texParameteri(L,10241,u(J.minFilter)),J.minFilter!==dg&&J.minFilter!==BC&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.has("EXT_texture_filter_anisotropic")===!0){const cA=A.get("EXT_texture_filter_anisotropic");if(J.type===XB&&A.has("OES_texture_float_linear")===!1||o===!1&&J.type===VE&&A.has("OES_texture_half_float_linear")===!1)return;(J.anisotropy>1||g.get(J).__currentAnisotropy)&&(i.texParameterf(L,cA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(J.anisotropy,B.getMaxAnisotropy())),g.get(J).__currentAnisotropy=J.anisotropy)}}function $A(L,J){let QA=!1;L.__webglInit===void 0&&(L.__webglInit=!0,J.addEventListener("dispose",$));const cA=J.source;let kA=w.get(cA);kA===void 0&&(kA={},w.set(cA,kA));const KA=_(J);if(KA!==L.__cacheKey){kA[KA]===void 0&&(kA[KA]={texture:i.createTexture(),usedTimes:0},t.memory.textures++,QA=!0),kA[KA].usedTimes++;const TA=kA[L.__cacheKey];TA!==void 0&&(kA[L.__cacheKey].usedTimes--,TA.usedTimes===0&&v(J)),L.__cacheKey=KA,L.__webglTexture=kA[KA].texture}return QA}function LA(L,J,QA){let cA=3553;J.isDataArrayTexture&&(cA=35866),J.isData3DTexture&&(cA=32879);const kA=$A(L,J),KA=J.source;I.bindTexture(cA,L.__webglTexture,33984+QA);const TA=g.get(KA);if(KA.version!==TA.__version||kA===!0){I.activeTexture(33984+QA),i.pixelStorei(37440,J.flipY),i.pixelStorei(37441,J.premultiplyAlpha),i.pixelStorei(3317,J.unpackAlignment),i.pixelStorei(37443,0);const H=N(J)&&F(J.image)===!1;let j=q(J.image,H,!1,s);j=LI(J,j);const FA=F(j)||o,dA=E.convert(J.format,J.encoding);let qA=E.convert(J.type),uA=M(J.internalFormat,dA,qA,J.encoding,J.isVideoTexture);oA(cA,J,FA);let VA;const DI=J.mipmaps,O=o&&J.isVideoTexture!==!0,RA=TA.__version===void 0||kA===!0,lA=Y(J,j,FA);if(J.isDepthTexture)uA=6402,o?J.type===XB?uA=36012:J.type===zB?uA=33190:J.type===zQ?uA=35056:uA=33189:J.type===XB&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),J.format===gQ&&uA===6402&&J.type!==US&&J.type!==zB&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),J.type=zB,qA=E.convert(J.type)),J.format===gE&&uA===6402&&(uA=34041,J.type!==zQ&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),J.type=zQ,qA=E.convert(J.type))),RA&&(O?I.texStorage2D(3553,1,uA,j.width,j.height):I.texImage2D(3553,0,uA,j.width,j.height,0,dA,qA,null));else if(J.isDataTexture)if(DI.length>0&&FA){O&&RA&&I.texStorage2D(3553,lA,uA,DI[0].width,DI[0].height);for(let sA=0,yA=DI.length;sA<yA;sA++)VA=DI[sA],O?I.texSubImage2D(3553,sA,0,0,VA.width,VA.height,dA,qA,VA.data):I.texImage2D(3553,sA,uA,VA.width,VA.height,0,dA,qA,VA.data);J.generateMipmaps=!1}else O?(RA&&I.texStorage2D(3553,lA,uA,j.width,j.height),I.texSubImage2D(3553,0,0,0,j.width,j.height,dA,qA,j.data)):I.texImage2D(3553,0,uA,j.width,j.height,0,dA,qA,j.data);else if(J.isCompressedTexture){O&&RA&&I.texStorage2D(3553,lA,uA,DI[0].width,DI[0].height);for(let sA=0,yA=DI.length;sA<yA;sA++)VA=DI[sA],J.format!==dC?dA!==null?O?I.compressedTexSubImage2D(3553,sA,0,0,VA.width,VA.height,dA,VA.data):I.compressedTexImage2D(3553,sA,uA,VA.width,VA.height,0,VA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?I.texSubImage2D(3553,sA,0,0,VA.width,VA.height,dA,qA,VA.data):I.texImage2D(3553,sA,uA,VA.width,VA.height,0,dA,qA,VA.data)}else if(J.isDataArrayTexture)O?(RA&&I.texStorage3D(35866,lA,uA,j.width,j.height,j.depth),I.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,dA,qA,j.data)):I.texImage3D(35866,0,uA,j.width,j.height,j.depth,0,dA,qA,j.data);else if(J.isData3DTexture)O?(RA&&I.texStorage3D(32879,lA,uA,j.width,j.height,j.depth),I.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,dA,qA,j.data)):I.texImage3D(32879,0,uA,j.width,j.height,j.depth,0,dA,qA,j.data);else if(J.isFramebufferTexture){if(RA)if(O)I.texStorage2D(3553,lA,uA,j.width,j.height);else{let sA=j.width,yA=j.height;for(let vA=0;vA<lA;vA++)I.texImage2D(3553,vA,uA,sA,yA,0,dA,qA,null),sA>>=1,yA>>=1}}else if(DI.length>0&&FA){O&&RA&&I.texStorage2D(3553,lA,uA,DI[0].width,DI[0].height);for(let sA=0,yA=DI.length;sA<yA;sA++)VA=DI[sA],O?I.texSubImage2D(3553,sA,0,0,dA,qA,VA):I.texImage2D(3553,sA,uA,dA,qA,VA);J.generateMipmaps=!1}else O?(RA&&I.texStorage2D(3553,lA,uA,j.width,j.height),I.texSubImage2D(3553,0,0,0,dA,qA,j)):I.texImage2D(3553,0,uA,dA,qA,j);p(J,FA)&&x(cA),TA.__version=KA.version,J.onUpdate&&J.onUpdate(J)}L.__version=J.version}function fA(L,J,QA){if(J.image.length!==6)return;const cA=$A(L,J),kA=J.source;I.bindTexture(34067,L.__webglTexture,33984+QA);const KA=g.get(kA);if(kA.version!==KA.__version||cA===!0){I.activeTexture(33984+QA),i.pixelStorei(37440,J.flipY),i.pixelStorei(37441,J.premultiplyAlpha),i.pixelStorei(3317,J.unpackAlignment),i.pixelStorei(37443,0);const TA=J.isCompressedTexture||J.image[0].isCompressedTexture,H=J.image[0]&&J.image[0].isDataTexture,j=[];for(let sA=0;sA<6;sA++)!TA&&!H?j[sA]=q(J.image[sA],!1,!0,a):j[sA]=H?J.image[sA].image:J.image[sA],j[sA]=LI(J,j[sA]);const FA=j[0],dA=F(FA)||o,qA=E.convert(J.format,J.encoding),uA=E.convert(J.type),VA=M(J.internalFormat,qA,uA,J.encoding),DI=o&&J.isVideoTexture!==!0,O=KA.__version===void 0||cA===!0;let RA=Y(J,FA,dA);oA(34067,J,dA);let lA;if(TA){DI&&O&&I.texStorage2D(34067,RA,VA,FA.width,FA.height);for(let sA=0;sA<6;sA++){lA=j[sA].mipmaps;for(let yA=0;yA<lA.length;yA++){const vA=lA[yA];J.format!==dC?qA!==null?DI?I.compressedTexSubImage2D(34069+sA,yA,0,0,vA.width,vA.height,qA,vA.data):I.compressedTexImage2D(34069+sA,yA,VA,vA.width,vA.height,0,vA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):DI?I.texSubImage2D(34069+sA,yA,0,0,vA.width,vA.height,qA,uA,vA.data):I.texImage2D(34069+sA,yA,VA,vA.width,vA.height,0,qA,uA,vA.data)}}}else{lA=J.mipmaps,DI&&O&&(lA.length>0&&RA++,I.texStorage2D(34067,RA,VA,j[0].width,j[0].height));for(let sA=0;sA<6;sA++)if(H){DI?I.texSubImage2D(34069+sA,0,0,0,j[sA].width,j[sA].height,qA,uA,j[sA].data):I.texImage2D(34069+sA,0,VA,j[sA].width,j[sA].height,0,qA,uA,j[sA].data);for(let yA=0;yA<lA.length;yA++){const JI=lA[yA].image[sA].image;DI?I.texSubImage2D(34069+sA,yA+1,0,0,JI.width,JI.height,qA,uA,JI.data):I.texImage2D(34069+sA,yA+1,VA,JI.width,JI.height,0,qA,uA,JI.data)}}else{DI?I.texSubImage2D(34069+sA,0,0,0,qA,uA,j[sA]):I.texImage2D(34069+sA,0,VA,qA,uA,j[sA]);for(let yA=0;yA<lA.length;yA++){const vA=lA[yA];DI?I.texSubImage2D(34069+sA,yA+1,0,0,qA,uA,vA.image[sA]):I.texImage2D(34069+sA,yA+1,VA,qA,uA,vA.image[sA])}}}p(J,dA)&&x(34067),KA.__version=kA.version,J.onUpdate&&J.onUpdate(J)}L.__version=J.version}function UA(L,J,QA,cA,kA){const KA=E.convert(QA.format,QA.encoding),TA=E.convert(QA.type),H=M(QA.internalFormat,KA,TA,QA.encoding);g.get(J).__hasExternalTextures||(kA===32879||kA===35866?I.texImage3D(kA,0,H,J.width,J.height,J.depth,0,KA,TA,null):I.texImage2D(kA,0,H,J.width,J.height,0,KA,TA,null)),I.bindFramebuffer(36160,L),lI(J)?S.framebufferTexture2DMultisampleEXT(36160,cA,kA,g.get(QA).__webglTexture,0,OI(J)):i.framebufferTexture2D(36160,cA,kA,g.get(QA).__webglTexture,0),I.bindFramebuffer(36160,null)}function eI(L,J,QA){if(i.bindRenderbuffer(36161,L),J.depthBuffer&&!J.stencilBuffer){let cA=33189;if(QA||lI(J)){const kA=J.depthTexture;kA&&kA.isDepthTexture&&(kA.type===XB?cA=36012:kA.type===zB&&(cA=33190));const KA=OI(J);lI(J)?S.renderbufferStorageMultisampleEXT(36161,KA,cA,J.width,J.height):i.renderbufferStorageMultisample(36161,KA,cA,J.width,J.height)}else i.renderbufferStorage(36161,cA,J.width,J.height);i.framebufferRenderbuffer(36160,36096,36161,L)}else if(J.depthBuffer&&J.stencilBuffer){const cA=OI(J);QA&&lI(J)===!1?i.renderbufferStorageMultisample(36161,cA,35056,J.width,J.height):lI(J)?S.renderbufferStorageMultisampleEXT(36161,cA,35056,J.width,J.height):i.renderbufferStorage(36161,34041,J.width,J.height),i.framebufferRenderbuffer(36160,33306,36161,L)}else{const cA=J.isWebGLMultipleRenderTargets===!0?J.texture:[J.texture];for(let kA=0;kA<cA.length;kA++){const KA=cA[kA],TA=E.convert(KA.format,KA.encoding),H=E.convert(KA.type),j=M(KA.internalFormat,TA,H,KA.encoding),FA=OI(J);QA&&lI(J)===!1?i.renderbufferStorageMultisample(36161,FA,j,J.width,J.height):lI(J)?S.renderbufferStorageMultisampleEXT(36161,FA,j,J.width,J.height):i.renderbufferStorage(36161,j,J.width,J.height)}}i.bindRenderbuffer(36161,null)}function jA(L,J){if(J&&J.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(36160,L),!(J.depthTexture&&J.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(J.depthTexture).__webglTexture||J.depthTexture.image.width!==J.width||J.depthTexture.image.height!==J.height)&&(J.depthTexture.image.width=J.width,J.depthTexture.image.height=J.height,J.depthTexture.needsUpdate=!0),IA(J.depthTexture,0);const cA=g.get(J.depthTexture).__webglTexture,kA=OI(J);if(J.depthTexture.format===gQ)lI(J)?S.framebufferTexture2DMultisampleEXT(36160,36096,3553,cA,0,kA):i.framebufferTexture2D(36160,36096,3553,cA,0);else if(J.depthTexture.format===gE)lI(J)?S.framebufferTexture2DMultisampleEXT(36160,33306,3553,cA,0,kA):i.framebufferTexture2D(36160,33306,3553,cA,0);else throw new Error("Unknown depthTexture format")}function xA(L){const J=g.get(L),QA=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!J.__autoAllocateDepthBuffer){if(QA)throw new Error("target.depthTexture not supported in Cube render targets");jA(J.__webglFramebuffer,L)}else if(QA){J.__webglDepthbuffer=[];for(let cA=0;cA<6;cA++)I.bindFramebuffer(36160,J.__webglFramebuffer[cA]),J.__webglDepthbuffer[cA]=i.createRenderbuffer(),eI(J.__webglDepthbuffer[cA],L,!1)}else I.bindFramebuffer(36160,J.__webglFramebuffer),J.__webglDepthbuffer=i.createRenderbuffer(),eI(J.__webglDepthbuffer,L,!1);I.bindFramebuffer(36160,null)}function rI(L,J,QA){const cA=g.get(L);J!==void 0&&UA(cA.__webglFramebuffer,L,L.texture,36064,3553),QA!==void 0&&xA(L)}function HI(L){const J=L.texture,QA=g.get(L),cA=g.get(J);L.addEventListener("dispose",SA),L.isWebGLMultipleRenderTargets!==!0&&(cA.__webglTexture===void 0&&(cA.__webglTexture=i.createTexture()),cA.__version=J.version,t.memory.textures++);const kA=L.isWebGLCubeRenderTarget===!0,KA=L.isWebGLMultipleRenderTargets===!0,TA=F(L)||o;if(kA){QA.__webglFramebuffer=[];for(let H=0;H<6;H++)QA.__webglFramebuffer[H]=i.createFramebuffer()}else{if(QA.__webglFramebuffer=i.createFramebuffer(),KA)if(B.drawBuffers){const H=L.texture;for(let j=0,FA=H.length;j<FA;j++){const dA=g.get(H[j]);dA.__webglTexture===void 0&&(dA.__webglTexture=i.createTexture(),t.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&lI(L)===!1){const H=KA?J:[J];QA.__webglMultisampledFramebuffer=i.createFramebuffer(),QA.__webglColorRenderbuffer=[],I.bindFramebuffer(36160,QA.__webglMultisampledFramebuffer);for(let j=0;j<H.length;j++){const FA=H[j];QA.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(36161,QA.__webglColorRenderbuffer[j]);const dA=E.convert(FA.format,FA.encoding),qA=E.convert(FA.type),uA=M(FA.internalFormat,dA,qA,FA.encoding,L.isXRRenderTarget===!0),VA=OI(L);i.renderbufferStorageMultisample(36161,VA,uA,L.width,L.height),i.framebufferRenderbuffer(36160,36064+j,36161,QA.__webglColorRenderbuffer[j])}i.bindRenderbuffer(36161,null),L.depthBuffer&&(QA.__webglDepthRenderbuffer=i.createRenderbuffer(),eI(QA.__webglDepthRenderbuffer,L,!0)),I.bindFramebuffer(36160,null)}}if(kA){I.bindTexture(34067,cA.__webglTexture),oA(34067,J,TA);for(let H=0;H<6;H++)UA(QA.__webglFramebuffer[H],L,J,36064,34069+H);p(J,TA)&&x(34067),I.unbindTexture()}else if(KA){const H=L.texture;for(let j=0,FA=H.length;j<FA;j++){const dA=H[j],qA=g.get(dA);I.bindTexture(3553,qA.__webglTexture),oA(3553,dA,TA),UA(QA.__webglFramebuffer,L,dA,36064+j,3553),p(dA,TA)&&x(3553)}I.unbindTexture()}else{let H=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?H=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(H,cA.__webglTexture),oA(H,J,TA),UA(QA.__webglFramebuffer,L,J,36064,H),p(J,TA)&&x(H),I.unbindTexture()}L.depthBuffer&&xA(L)}function PI(L){const J=F(L)||o,QA=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let cA=0,kA=QA.length;cA<kA;cA++){const KA=QA[cA];if(p(KA,J)){const TA=L.isWebGLCubeRenderTarget?34067:3553,H=g.get(KA).__webglTexture;I.bindTexture(TA,H),x(TA),I.unbindTexture()}}}function mI(L){if(o&&L.samples>0&&lI(L)===!1){const J=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],QA=L.width,cA=L.height;let kA=16384;const KA=[],TA=L.stencilBuffer?33306:36096,H=g.get(L),j=L.isWebGLMultipleRenderTargets===!0;if(j)for(let FA=0;FA<J.length;FA++)I.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+FA,36161,null),I.bindFramebuffer(36160,H.__webglFramebuffer),i.framebufferTexture2D(36009,36064+FA,3553,null,0);I.bindFramebuffer(36008,H.__webglMultisampledFramebuffer),I.bindFramebuffer(36009,H.__webglFramebuffer);for(let FA=0;FA<J.length;FA++){KA.push(36064+FA),L.depthBuffer&&KA.push(TA);const dA=H.__ignoreDepthValues!==void 0?H.__ignoreDepthValues:!1;if(dA===!1&&(L.depthBuffer&&(kA|=256),L.stencilBuffer&&(kA|=1024)),j&&i.framebufferRenderbuffer(36008,36064,36161,H.__webglColorRenderbuffer[FA]),dA===!0&&(i.invalidateFramebuffer(36008,[TA]),i.invalidateFramebuffer(36009,[TA])),j){const qA=g.get(J[FA]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,qA,0)}i.blitFramebuffer(0,0,QA,cA,0,0,QA,cA,kA,9728),c&&i.invalidateFramebuffer(36008,KA)}if(I.bindFramebuffer(36008,null),I.bindFramebuffer(36009,null),j)for(let FA=0;FA<J.length;FA++){I.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+FA,36161,H.__webglColorRenderbuffer[FA]);const dA=g.get(J[FA]).__webglTexture;I.bindFramebuffer(36160,H.__webglFramebuffer),i.framebufferTexture2D(36009,36064+FA,3553,dA,0)}I.bindFramebuffer(36009,H.__webglMultisampledFramebuffer)}}function OI(L){return Math.min(h,L.samples)}function lI(L){const J=g.get(L);return o&&L.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&J.__useRenderToTexture!==!1}function og(L){const J=t.render.frame;l.get(L)!==J&&(l.set(L,J),L.update())}function LI(L,J){const QA=L.encoding,cA=L.format,kA=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===aa||QA!==QQ&&(QA===WI?o===!1?A.has("EXT_sRGB")===!0&&cA===dC?(L.format=aa,L.minFilter=BC,L.generateMipmaps=!1):J=FS.sRGBToLinear(J):(cA!==dC||kA!==BQ)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",QA)),J}this.allocateTextureUnit=BA,this.resetTextureUnits=DA,this.setTexture2D=IA,this.setTexture2DArray=wA,this.setTexture3D=nA,this.setTextureCube=rA,this.rebindTextures=rI,this.setupRenderTarget=HI,this.updateRenderTargetMipmap=PI,this.updateMultisampleRenderTarget=mI,this.setupDepthRenderbuffer=xA,this.setupFrameBufferTexture=UA,this.useMultisampledRTT=lI}function lF(i,A,I){const g=I.isWebGL2;function B(E,t=null){let o;if(E===BQ)return 5121;if(E===wU)return 32819;if(E===GU)return 32820;if(E===nU)return 5120;if(E===hU)return 5122;if(E===US)return 5123;if(E===SU)return 5124;if(E===zB)return 5125;if(E===XB)return 5126;if(E===VE)return g?5131:(o=A.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(E===rU)return 6406;if(E===dC)return 6408;if(E===kU)return 6409;if(E===lU)return 6410;if(E===gQ)return 6402;if(E===gE)return 34041;if(E===yU)return 6403;if(E===cU)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(E===aa)return o=A.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(E===MU)return 36244;if(E===UU)return 33319;if(E===KU)return 33320;if(E===NU)return 36249;if(E===Ge||E===re||E===ce||E===ke)if(t===WI)if(o=A.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(E===Ge)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(E===re)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(E===ce)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(E===ke)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=A.get("WEBGL_compressed_texture_s3tc"),o!==null){if(E===Ge)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(E===re)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(E===ce)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(E===ke)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(E===un||E===Hn||E===mn||E===Tn)if(o=A.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(E===un)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(E===Hn)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(E===mn)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(E===Tn)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(E===JU)return o=A.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(E===xn||E===On)if(o=A.get("WEBGL_compressed_texture_etc"),o!==null){if(E===xn)return t===WI?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(E===On)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(E===bn||E===Zn||E===Wn||E===vn||E===Pn||E===Vn||E===jn||E===_n||E===zn||E===Xn||E===$n||E===Ah||E===Ih||E===gh)if(o=A.get("WEBGL_compressed_texture_astc"),o!==null){if(E===bn)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(E===Zn)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(E===Wn)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(E===vn)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(E===Pn)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(E===Vn)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(E===jn)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(E===_n)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(E===zn)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(E===Xn)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(E===$n)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(E===Ah)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(E===Ih)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(E===gh)return t===WI?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(E===Ch)if(o=A.get("EXT_texture_compression_bptc"),o!==null){if(E===Ch)return t===WI?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return E===zQ?g?34042:(o=A.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[E]!==void 0?i[E]:null}return{convert:B}}class yF extends QC{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class So extends Sg{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MF={type:"move"};class je{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new So,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new So,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new So,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let B=null,E=null,t=null;const o=this._targetRay,D=this._grip,a=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(a&&A.hand){t=!0;for(const G of A.hand.values()){const w=I.getJointPose(G,g);if(a.joints[G.jointName]===void 0){const d=new So;d.matrixAutoUpdate=!1,d.visible=!1,a.joints[G.jointName]=d,a.add(d)}const U=a.joints[G.jointName];w!==null&&(U.matrix.fromArray(w.transform.matrix),U.matrix.decompose(U.position,U.rotation,U.scale),U.jointRadius=w.radius),U.visible=w!==null}const s=a.joints["index-finger-tip"],h=a.joints["thumb-tip"],S=s.position.distanceTo(h.position),c=.02,l=.005;a.inputState.pinching&&S>c+l?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!a.inputState.pinching&&S<=c-l&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else D!==null&&A.gripSpace&&(E=I.getPose(A.gripSpace,g),E!==null&&(D.matrix.fromArray(E.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),E.linearVelocity?(D.hasLinearVelocity=!0,D.linearVelocity.copy(E.linearVelocity)):D.hasLinearVelocity=!1,E.angularVelocity?(D.hasAngularVelocity=!0,D.angularVelocity.copy(E.angularVelocity)):D.hasAngularVelocity=!1));o!==null&&(B=I.getPose(A.targetRaySpace,g),B===null&&E!==null&&(B=E),B!==null&&(o.matrix.fromArray(B.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),B.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(B.linearVelocity)):o.hasLinearVelocity=!1,B.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(B.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(MF)))}return o!==null&&(o.visible=B!==null),D!==null&&(D.visible=E!==null),a!==null&&(a.visible=t!==null),this}}class UF extends MC{constructor(A,I,g,B,E,t,o,D,a,s){if(s=s!==void 0?s:gQ,s!==gQ&&s!==gE)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&s===gQ&&(g=zB),g===void 0&&s===gE&&(g=zQ),super(null,B,E,t,o,D,s,g,a),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=o!==void 0?o:dg,this.minFilter=D!==void 0?D:dg,this.flipY=!1,this.generateMipmaps=!1}}class KF extends tQ{constructor(A,I){super();const g=this;let B=null,E=1,t=null,o="local-floor",D=null,a=null,s=null,h=null,S=null,c=null;const l=I.getContextAttributes();let G=null,w=null;const U=[],d=[],q=new QC;q.layers.enable(1),q.viewport=new ag;const F=new QC;F.layers.enable(2),F.viewport=new ag;const N=[q,F],p=new yF;p.layers.enable(1),p.layers.enable(2);let x=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_){let IA=U[_];return IA===void 0&&(IA=new je,U[_]=IA),IA.getTargetRaySpace()},this.getControllerGrip=function(_){let IA=U[_];return IA===void 0&&(IA=new je,U[_]=IA),IA.getGripSpace()},this.getHand=function(_){let IA=U[_];return IA===void 0&&(IA=new je,U[_]=IA),IA.getHandSpace()};function Y(_){const IA=d.indexOf(_.inputSource);if(IA===-1)return;const wA=U[IA];wA!==void 0&&wA.dispatchEvent({type:_.type,data:_.inputSource})}function u(){B.removeEventListener("select",Y),B.removeEventListener("selectstart",Y),B.removeEventListener("selectend",Y),B.removeEventListener("squeeze",Y),B.removeEventListener("squeezestart",Y),B.removeEventListener("squeezeend",Y),B.removeEventListener("end",u),B.removeEventListener("inputsourceschange",$);for(let _=0;_<U.length;_++){const IA=d[_];IA!==null&&(d[_]=null,U[_].disconnect(IA))}x=null,M=null,A.setRenderTarget(G),S=null,h=null,s=null,B=null,w=null,BA.stop(),g.isPresenting=!1,g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_){E=_,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_){o=_,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return D||t},this.setReferenceSpace=function(_){D=_},this.getBaseLayer=function(){return h!==null?h:S},this.getBinding=function(){return s},this.getFrame=function(){return c},this.getSession=function(){return B},this.setSession=async function(_){if(B=_,B!==null){if(G=A.getRenderTarget(),B.addEventListener("select",Y),B.addEventListener("selectstart",Y),B.addEventListener("selectend",Y),B.addEventListener("squeeze",Y),B.addEventListener("squeezestart",Y),B.addEventListener("squeezeend",Y),B.addEventListener("end",u),B.addEventListener("inputsourceschange",$),l.xrCompatible!==!0&&await I.makeXRCompatible(),B.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const IA={antialias:B.renderState.layers===void 0?l.antialias:!0,alpha:l.alpha,depth:l.depth,stencil:l.stencil,framebufferScaleFactor:E};S=new XRWebGLLayer(B,I,IA),B.updateRenderState({baseLayer:S}),w=new NB(S.framebufferWidth,S.framebufferHeight,{format:dC,type:BQ,encoding:A.outputEncoding,stencilBuffer:l.stencil})}else{let IA=null,wA=null,nA=null;l.depth&&(nA=l.stencil?35056:33190,IA=l.stencil?gE:gQ,wA=l.stencil?zQ:zB);const rA={colorFormat:32856,depthFormat:nA,scaleFactor:E};s=new XRWebGLBinding(B,I),h=s.createProjectionLayer(rA),B.updateRenderState({layers:[h]}),w=new NB(h.textureWidth,h.textureHeight,{format:dC,type:BQ,depthTexture:new UF(h.textureWidth,h.textureHeight,wA,void 0,void 0,void 0,void 0,void 0,void 0,IA),stencilBuffer:l.stencil,encoding:A.outputEncoding,samples:l.antialias?4:0});const JA=A.properties.get(w);JA.__ignoreDepthValues=h.ignoreDepthValues}w.isXRRenderTarget=!0,this.setFoveation(1),D=null,t=await B.requestReferenceSpace(o),BA.setContext(B),BA.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}};function $(_){for(let IA=0;IA<_.removed.length;IA++){const wA=_.removed[IA],nA=d.indexOf(wA);nA>=0&&(d[nA]=null,U[nA].dispatchEvent({type:"disconnected",data:wA}))}for(let IA=0;IA<_.added.length;IA++){const wA=_.added[IA];let nA=d.indexOf(wA);if(nA===-1){for(let JA=0;JA<U.length;JA++)if(JA>=d.length){d.push(wA),nA=JA;break}else if(d[JA]===null){d[JA]=wA,nA=JA;break}if(nA===-1)break}const rA=U[nA];rA&&rA.dispatchEvent({type:"connected",data:wA})}}const SA=new P,W=new P;function v(_,IA,wA){SA.setFromMatrixPosition(IA.matrixWorld),W.setFromMatrixPosition(wA.matrixWorld);const nA=SA.distanceTo(W),rA=IA.projectionMatrix.elements,JA=wA.projectionMatrix.elements,mA=rA[14]/(rA[10]-1),oA=rA[14]/(rA[10]+1),$A=(rA[9]+1)/rA[5],LA=(rA[9]-1)/rA[5],fA=(rA[8]-1)/rA[0],UA=(JA[8]+1)/JA[0],eI=mA*fA,jA=mA*UA,xA=nA/(-fA+UA),rI=xA*-fA;IA.matrixWorld.decompose(_.position,_.quaternion,_.scale),_.translateX(rI),_.translateZ(xA),_.matrixWorld.compose(_.position,_.quaternion,_.scale),_.matrixWorldInverse.copy(_.matrixWorld).invert();const HI=mA+xA,PI=oA+xA,mI=eI-rI,OI=jA+(nA-rI),lI=$A*oA/PI*HI,og=LA*oA/PI*HI;_.projectionMatrix.makePerspective(mI,OI,lI,og,HI,PI)}function CA(_,IA){IA===null?_.matrixWorld.copy(_.matrix):_.matrixWorld.multiplyMatrices(IA.matrixWorld,_.matrix),_.matrixWorldInverse.copy(_.matrixWorld).invert()}this.updateCamera=function(_){if(B===null)return;p.near=F.near=q.near=_.near,p.far=F.far=q.far=_.far,(x!==p.near||M!==p.far)&&(B.updateRenderState({depthNear:p.near,depthFar:p.far}),x=p.near,M=p.far);const IA=_.parent,wA=p.cameras;CA(p,IA);for(let rA=0;rA<wA.length;rA++)CA(wA[rA],IA);p.matrixWorld.decompose(p.position,p.quaternion,p.scale),_.matrix.copy(p.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale);const nA=_.children;for(let rA=0,JA=nA.length;rA<JA;rA++)nA[rA].updateMatrixWorld(!0);wA.length===2?v(p,q,F):p.projectionMatrix.copy(q.projectionMatrix)},this.getCamera=function(){return p},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(S!==null)return S.fixedFoveation},this.setFoveation=function(_){h!==null&&(h.fixedFoveation=_),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=_)};let GA=null;function DA(_,IA){if(a=IA.getViewerPose(D||t),c=IA,a!==null){const wA=a.views;S!==null&&(A.setRenderTargetFramebuffer(w,S.framebuffer),A.setRenderTarget(w));let nA=!1;wA.length!==p.cameras.length&&(p.cameras.length=0,nA=!0);for(let rA=0;rA<wA.length;rA++){const JA=wA[rA];let mA=null;if(S!==null)mA=S.getViewport(JA);else{const $A=s.getViewSubImage(h,JA);mA=$A.viewport,rA===0&&(A.setRenderTargetTextures(w,$A.colorTexture,h.ignoreDepthValues?void 0:$A.depthStencilTexture),A.setRenderTarget(w))}let oA=N[rA];oA===void 0&&(oA=new QC,oA.layers.enable(rA),oA.viewport=new ag,N[rA]=oA),oA.matrix.fromArray(JA.transform.matrix),oA.projectionMatrix.fromArray(JA.projectionMatrix),oA.viewport.set(mA.x,mA.y,mA.width,mA.height),rA===0&&p.matrix.copy(oA.matrix),nA===!0&&p.cameras.push(oA)}}for(let wA=0;wA<U.length;wA++){const nA=d[wA],rA=U[wA];nA!==null&&rA!==void 0&&rA.update(nA,IA,D||t)}GA&&GA(_,IA),c=null}const BA=new HS;BA.setAnimationLoop(DA),this.setAnimationLoop=function(_){GA=_},this.dispose=function(){}}}function NF(i,A){function I(G,w){G.fogColor.value.copy(w.color),w.isFog?(G.fogNear.value=w.near,G.fogFar.value=w.far):w.isFogExp2&&(G.fogDensity.value=w.density)}function g(G,w,U,d,q){w.isMeshBasicMaterial||w.isMeshLambertMaterial?B(G,w):w.isMeshToonMaterial?(B(G,w),s(G,w)):w.isMeshPhongMaterial?(B(G,w),a(G,w)):w.isMeshStandardMaterial?(B(G,w),h(G,w),w.isMeshPhysicalMaterial&&S(G,w,q)):w.isMeshMatcapMaterial?(B(G,w),c(G,w)):w.isMeshDepthMaterial?B(G,w):w.isMeshDistanceMaterial?(B(G,w),l(G,w)):w.isMeshNormalMaterial?B(G,w):w.isLineBasicMaterial?(E(G,w),w.isLineDashedMaterial&&t(G,w)):w.isPointsMaterial?o(G,w,U,d):w.isSpriteMaterial?D(G,w):w.isShadowMaterial?(G.color.value.copy(w.color),G.opacity.value=w.opacity):w.isShaderMaterial&&(w.uniformsNeedUpdate=!1)}function B(G,w){G.opacity.value=w.opacity,w.color&&G.diffuse.value.copy(w.color),w.emissive&&G.emissive.value.copy(w.emissive).multiplyScalar(w.emissiveIntensity),w.map&&(G.map.value=w.map),w.alphaMap&&(G.alphaMap.value=w.alphaMap),w.bumpMap&&(G.bumpMap.value=w.bumpMap,G.bumpScale.value=w.bumpScale,w.side===oC&&(G.bumpScale.value*=-1)),w.displacementMap&&(G.displacementMap.value=w.displacementMap,G.displacementScale.value=w.displacementScale,G.displacementBias.value=w.displacementBias),w.emissiveMap&&(G.emissiveMap.value=w.emissiveMap),w.normalMap&&(G.normalMap.value=w.normalMap,G.normalScale.value.copy(w.normalScale),w.side===oC&&G.normalScale.value.negate()),w.specularMap&&(G.specularMap.value=w.specularMap),w.alphaTest>0&&(G.alphaTest.value=w.alphaTest);const U=A.get(w).envMap;if(U&&(G.envMap.value=U,G.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,G.reflectivity.value=w.reflectivity,G.ior.value=w.ior,G.refractionRatio.value=w.refractionRatio),w.lightMap){G.lightMap.value=w.lightMap;const F=i.physicallyCorrectLights!==!0?Math.PI:1;G.lightMapIntensity.value=w.lightMapIntensity*F}w.aoMap&&(G.aoMap.value=w.aoMap,G.aoMapIntensity.value=w.aoMapIntensity);let d;w.map?d=w.map:w.specularMap?d=w.specularMap:w.displacementMap?d=w.displacementMap:w.normalMap?d=w.normalMap:w.bumpMap?d=w.bumpMap:w.roughnessMap?d=w.roughnessMap:w.metalnessMap?d=w.metalnessMap:w.alphaMap?d=w.alphaMap:w.emissiveMap?d=w.emissiveMap:w.clearcoatMap?d=w.clearcoatMap:w.clearcoatNormalMap?d=w.clearcoatNormalMap:w.clearcoatRoughnessMap?d=w.clearcoatRoughnessMap:w.iridescenceMap?d=w.iridescenceMap:w.iridescenceThicknessMap?d=w.iridescenceThicknessMap:w.specularIntensityMap?d=w.specularIntensityMap:w.specularColorMap?d=w.specularColorMap:w.transmissionMap?d=w.transmissionMap:w.thicknessMap?d=w.thicknessMap:w.sheenColorMap?d=w.sheenColorMap:w.sheenRoughnessMap&&(d=w.sheenRoughnessMap),d!==void 0&&(d.isWebGLRenderTarget&&(d=d.texture),d.matrixAutoUpdate===!0&&d.updateMatrix(),G.uvTransform.value.copy(d.matrix));let q;w.aoMap?q=w.aoMap:w.lightMap&&(q=w.lightMap),q!==void 0&&(q.isWebGLRenderTarget&&(q=q.texture),q.matrixAutoUpdate===!0&&q.updateMatrix(),G.uv2Transform.value.copy(q.matrix))}function E(G,w){G.diffuse.value.copy(w.color),G.opacity.value=w.opacity}function t(G,w){G.dashSize.value=w.dashSize,G.totalSize.value=w.dashSize+w.gapSize,G.scale.value=w.scale}function o(G,w,U,d){G.diffuse.value.copy(w.color),G.opacity.value=w.opacity,G.size.value=w.size*U,G.scale.value=d*.5,w.map&&(G.map.value=w.map),w.alphaMap&&(G.alphaMap.value=w.alphaMap),w.alphaTest>0&&(G.alphaTest.value=w.alphaTest);let q;w.map?q=w.map:w.alphaMap&&(q=w.alphaMap),q!==void 0&&(q.matrixAutoUpdate===!0&&q.updateMatrix(),G.uvTransform.value.copy(q.matrix))}function D(G,w){G.diffuse.value.copy(w.color),G.opacity.value=w.opacity,G.rotation.value=w.rotation,w.map&&(G.map.value=w.map),w.alphaMap&&(G.alphaMap.value=w.alphaMap),w.alphaTest>0&&(G.alphaTest.value=w.alphaTest);let U;w.map?U=w.map:w.alphaMap&&(U=w.alphaMap),U!==void 0&&(U.matrixAutoUpdate===!0&&U.updateMatrix(),G.uvTransform.value.copy(U.matrix))}function a(G,w){G.specular.value.copy(w.specular),G.shininess.value=Math.max(w.shininess,1e-4)}function s(G,w){w.gradientMap&&(G.gradientMap.value=w.gradientMap)}function h(G,w){G.roughness.value=w.roughness,G.metalness.value=w.metalness,w.roughnessMap&&(G.roughnessMap.value=w.roughnessMap),w.metalnessMap&&(G.metalnessMap.value=w.metalnessMap),A.get(w).envMap&&(G.envMapIntensity.value=w.envMapIntensity)}function S(G,w,U){G.ior.value=w.ior,w.sheen>0&&(G.sheenColor.value.copy(w.sheenColor).multiplyScalar(w.sheen),G.sheenRoughness.value=w.sheenRoughness,w.sheenColorMap&&(G.sheenColorMap.value=w.sheenColorMap),w.sheenRoughnessMap&&(G.sheenRoughnessMap.value=w.sheenRoughnessMap)),w.clearcoat>0&&(G.clearcoat.value=w.clearcoat,G.clearcoatRoughness.value=w.clearcoatRoughness,w.clearcoatMap&&(G.clearcoatMap.value=w.clearcoatMap),w.clearcoatRoughnessMap&&(G.clearcoatRoughnessMap.value=w.clearcoatRoughnessMap),w.clearcoatNormalMap&&(G.clearcoatNormalScale.value.copy(w.clearcoatNormalScale),G.clearcoatNormalMap.value=w.clearcoatNormalMap,w.side===oC&&G.clearcoatNormalScale.value.negate())),w.iridescence>0&&(G.iridescence.value=w.iridescence,G.iridescenceIOR.value=w.iridescenceIOR,G.iridescenceThicknessMinimum.value=w.iridescenceThicknessRange[0],G.iridescenceThicknessMaximum.value=w.iridescenceThicknessRange[1],w.iridescenceMap&&(G.iridescenceMap.value=w.iridescenceMap),w.iridescenceThicknessMap&&(G.iridescenceThicknessMap.value=w.iridescenceThicknessMap)),w.transmission>0&&(G.transmission.value=w.transmission,G.transmissionSamplerMap.value=U.texture,G.transmissionSamplerSize.value.set(U.width,U.height),w.transmissionMap&&(G.transmissionMap.value=w.transmissionMap),G.thickness.value=w.thickness,w.thicknessMap&&(G.thicknessMap.value=w.thicknessMap),G.attenuationDistance.value=w.attenuationDistance,G.attenuationColor.value.copy(w.attenuationColor)),G.specularIntensity.value=w.specularIntensity,G.specularColor.value.copy(w.specularColor),w.specularIntensityMap&&(G.specularIntensityMap.value=w.specularIntensityMap),w.specularColorMap&&(G.specularColorMap.value=w.specularColorMap)}function c(G,w){w.matcap&&(G.matcap.value=w.matcap)}function l(G,w){G.referencePosition.value.copy(w.referencePosition),G.nearDistance.value=w.nearDistance,G.farDistance.value=w.farDistance}return{refreshFogUniforms:I,refreshMaterialUniforms:g}}function JF(i,A,I,g){let B={},E={},t=[];const o=I.isWebGL2?i.getParameter(35375):0;function D(d,q){const F=q.program;g.uniformBlockBinding(d,F)}function a(d,q){let F=B[d.id];F===void 0&&(l(d),F=s(d),B[d.id]=F,d.addEventListener("dispose",w));const N=q.program;g.updateUBOMapping(d,N);const p=A.render.frame;E[d.id]!==p&&(S(d),E[d.id]=p)}function s(d){const q=h();d.__bindingPointIndex=q;const F=i.createBuffer(),N=d.__size,p=d.usage;return i.bindBuffer(35345,F),i.bufferData(35345,N,p),i.bindBuffer(35345,null),i.bindBufferBase(35345,q,F),F}function h(){for(let d=0;d<o;d++)if(t.indexOf(d)===-1)return t.push(d),d;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(d){const q=B[d.id],F=d.uniforms,N=d.__cache;i.bindBuffer(35345,q);for(let p=0,x=F.length;p<x;p++){const M=F[p];if(c(M,p,N)===!0){const Y=M.value,u=M.__offset;typeof Y=="number"?(M.__data[0]=Y,i.bufferSubData(35345,u,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):Y.toArray(M.__data),i.bufferSubData(35345,u,M.__data))}}i.bindBuffer(35345,null)}function c(d,q,F){const N=d.value;if(F[q]===void 0)return typeof N=="number"?F[q]=N:F[q]=N.clone(),!0;if(typeof N=="number"){if(F[q]!==N)return F[q]=N,!0}else{const p=F[q];if(p.equals(N)===!1)return p.copy(N),!0}return!1}function l(d){const q=d.uniforms;let F=0;const N=16;let p=0;for(let x=0,M=q.length;x<M;x++){const Y=q[x],u=G(Y);if(Y.__data=new Float32Array(u.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=F,x>0){p=F%N;const $=N-p;p!==0&&$-u.boundary<0&&(F+=N-p,Y.__offset=F)}F+=u.storage}return p=F%N,p>0&&(F+=N-p),d.__size=F,d.__cache={},this}function G(d){const q=d.value,F={boundary:0,storage:0};return typeof q=="number"?(F.boundary=4,F.storage=4):q.isVector2?(F.boundary=8,F.storage=8):q.isVector3||q.isColor?(F.boundary=16,F.storage=12):q.isVector4?(F.boundary=16,F.storage=16):q.isMatrix3?(F.boundary=48,F.storage=48):q.isMatrix4?(F.boundary=64,F.storage=64):q.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",q),F}function w(d){const q=d.target;q.removeEventListener("dispose",w);const F=t.indexOf(q.__bindingPointIndex);t.splice(F,1),i.deleteBuffer(B[q.id]),delete B[q.id],delete E[q.id]}function U(){for(const d in B)i.deleteBuffer(B[d]);t=[],B={},E={}}return{bind:D,update:a,dispose:U}}function FF(){const i=Lo("canvas");return i.style.display="block",i}function ZS(i={}){this.isWebGLRenderer=!0;const A=i.canvas!==void 0?i.canvas:FF(),I=i.context!==void 0?i.context:null,g=i.depth!==void 0?i.depth:!0,B=i.stencil!==void 0?i.stencil:!0,E=i.antialias!==void 0?i.antialias:!1,t=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,D=i.powerPreference!==void 0?i.powerPreference:"default",a=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let s;I!==null?s=I.getContextAttributes().alpha:s=i.alpha!==void 0?i.alpha:!1;let h=null,S=null;const c=[],l=[];this.domElement=A,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=QQ,this.physicallyCorrectLights=!1,this.toneMapping=BB,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const G=this;let w=!1,U=0,d=0,q=null,F=-1,N=null;const p=new ag,x=new ag;let M=null,Y=A.width,u=A.height,$=1,SA=null,W=null;const v=new ag(0,0,Y,u),CA=new ag(0,0,Y,u);let GA=!1;const DA=new La;let BA=!1,_=!1,IA=null;const wA=new Ig,nA=new EI,rA=new P,JA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function mA(){return q===null?$:1}let oA=I;function $A(R,X){for(let iA=0;iA<R.length;iA++){const V=R[iA],tA=A.getContext(V,X);if(tA!==null)return tA}return null}try{const R={alpha:!0,depth:g,stencil:B,antialias:E,premultipliedAlpha:t,preserveDrawingBuffer:o,powerPreference:D,failIfMajorPerformanceCaveat:a};if("setAttribute"in A&&A.setAttribute("data-engine",`three.js r${pa}`),A.addEventListener("webglcontextlost",uA,!1),A.addEventListener("webglcontextrestored",VA,!1),A.addEventListener("webglcontextcreationerror",DI,!1),oA===null){const X=["webgl2","webgl","experimental-webgl"];if(G.isWebGL1Renderer===!0&&X.shift(),oA=$A(X,R),oA===null)throw $A(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}oA.getShaderPrecisionFormat===void 0&&(oA.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let LA,fA,UA,eI,jA,xA,rI,HI,PI,mI,OI,lI,og,LI,L,J,QA,cA,kA,KA,TA,H,j,FA;function dA(){LA=new TN(oA),fA=new LN(oA,LA,i),LA.init(fA),H=new lF(oA,LA,fA),UA=new cF(oA,LA,fA),eI=new bN,jA=new EF,xA=new kF(oA,LA,UA,jA,fA,H,eI),rI=new fN(G),HI=new mN(G),PI=new AK(oA,fA),j=new pN(oA,LA,PI,fA),mI=new xN(oA,PI,eI,j),OI=new PN(oA,mI,PI,eI),kA=new vN(oA,fA,xA),J=new YN(jA),lI=new QF(G,rI,HI,LA,fA,j,J),og=new NF(G,jA),LI=new oF,L=new nF(LA,fA),cA=new qN(G,rI,UA,OI,s,t),QA=new rF(G,OI,fA),FA=new JF(oA,eI,fA,UA),KA=new dN(oA,LA,eI,fA),TA=new ON(oA,LA,eI,fA),eI.programs=lI.programs,G.capabilities=fA,G.extensions=LA,G.properties=jA,G.renderLists=LI,G.shadowMap=QA,G.state=UA,G.info=eI}dA();const qA=new KF(G,oA);this.xr=qA,this.getContext=function(){return oA},this.getContextAttributes=function(){return oA.getContextAttributes()},this.forceContextLoss=function(){const R=LA.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=LA.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(Y,u,!1))},this.getSize=function(R){return R.set(Y,u)},this.setSize=function(R,X,iA){if(qA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,u=X,A.width=Math.floor(R*$),A.height=Math.floor(X*$),iA!==!1&&(A.style.width=R+"px",A.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(Y*$,u*$).floor()},this.setDrawingBufferSize=function(R,X,iA){Y=R,u=X,$=iA,A.width=Math.floor(R*iA),A.height=Math.floor(X*iA),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(p)},this.getViewport=function(R){return R.copy(v)},this.setViewport=function(R,X,iA,V){R.isVector4?v.set(R.x,R.y,R.z,R.w):v.set(R,X,iA,V),UA.viewport(p.copy(v).multiplyScalar($).floor())},this.getScissor=function(R){return R.copy(CA)},this.setScissor=function(R,X,iA,V){R.isVector4?CA.set(R.x,R.y,R.z,R.w):CA.set(R,X,iA,V),UA.scissor(x.copy(CA).multiplyScalar($).floor())},this.getScissorTest=function(){return GA},this.setScissorTest=function(R){UA.setScissorTest(GA=R)},this.setOpaqueSort=function(R){SA=R},this.setTransparentSort=function(R){W=R},this.getClearColor=function(R){return R.copy(cA.getClearColor())},this.setClearColor=function(){cA.setClearColor.apply(cA,arguments)},this.getClearAlpha=function(){return cA.getClearAlpha()},this.setClearAlpha=function(){cA.setClearAlpha.apply(cA,arguments)},this.clear=function(R=!0,X=!0,iA=!0){let V=0;R&&(V|=16384),X&&(V|=256),iA&&(V|=1024),oA.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){A.removeEventListener("webglcontextlost",uA,!1),A.removeEventListener("webglcontextrestored",VA,!1),A.removeEventListener("webglcontextcreationerror",DI,!1),LI.dispose(),L.dispose(),jA.dispose(),rI.dispose(),HI.dispose(),OI.dispose(),j.dispose(),FA.dispose(),lI.dispose(),qA.dispose(),qA.removeEventListener("sessionstart",vA),qA.removeEventListener("sessionend",JI),IA&&(IA.dispose(),IA=null),TI.stop()};function uA(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function VA(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=eI.autoReset,X=QA.enabled,iA=QA.autoUpdate,V=QA.needsUpdate,tA=QA.type;dA(),eI.autoReset=R,QA.enabled=X,QA.autoUpdate=iA,QA.needsUpdate=V,QA.type=tA}function DI(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function O(R){const X=R.target;X.removeEventListener("dispose",O),RA(X)}function RA(R){lA(R),jA.remove(R)}function lA(R){const X=jA.get(R).programs;X!==void 0&&(X.forEach(function(iA){lI.releaseProgram(iA)}),R.isShaderMaterial&&lI.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,iA,V,tA,OA){X===null&&(X=JA);const _A=tA.isMesh&&tA.matrixWorld.determinant()<0,II=Et(R,X,iA,V,tA);UA.setMaterial(V,_A);let zA=iA.index;const yI=iA.attributes.position;if(zA===null){if(yI===void 0||yI.count===0)return}else if(zA.count===0)return;let sI=1;V.wireframe===!0&&(zA=mI.getWireframeAttribute(iA),sI=2),j.setup(tA,V,II,iA,zA);let nI,fI=KA;zA!==null&&(nI=PI.get(zA),fI=TA,fI.setIndex(nI));const uC=zA!==null?zA.count:yI.count,tC=iA.drawRange.start*sI,iB=iA.drawRange.count*sI,lg=OA!==null?OA.start*sI:0,cI=OA!==null?OA.count*sI:1/0,oB=Math.max(tC,lg),bI=Math.min(uC,tC+iB,lg+cI)-1,yg=Math.max(0,bI-oB+1);if(yg!==0){if(tA.isMesh)V.wireframe===!0?(UA.setLineWidth(V.wireframeLinewidth*mA()),fI.setMode(1)):fI.setMode(4);else if(tA.isLine){let eC=V.linewidth;eC===void 0&&(eC=1),UA.setLineWidth(eC*mA()),tA.isLineSegments?fI.setMode(1):tA.isLineLoop?fI.setMode(2):fI.setMode(3)}else tA.isPoints?fI.setMode(0):tA.isSprite&&fI.setMode(4);if(tA.isInstancedMesh)fI.renderInstances(oB,yg,tA.count);else if(iA.isInstancedBufferGeometry){const eC=Math.min(iA.instanceCount,iA._maxInstanceCount);fI.renderInstances(oB,yg,eC)}else fI.render(oB,yg)}},this.compile=function(R,X){function iA(V,tA,OA){V.transparent===!0&&V.side===gB?(V.side=oC,V.needsUpdate=!0,aQ(V,tA,OA),V.side=$Q,V.needsUpdate=!0,aQ(V,tA,OA),V.side=gB):aQ(V,tA,OA)}S=L.get(R),S.init(),l.push(S),R.traverseVisible(function(V){V.isLight&&V.layers.test(X.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights(G.physicallyCorrectLights),R.traverse(function(V){const tA=V.material;if(tA)if(Array.isArray(tA))for(let OA=0;OA<tA.length;OA++){const _A=tA[OA];iA(_A,R,V)}else iA(tA,R,V)}),l.pop(),S=null};let sA=null;function yA(R){sA&&sA(R)}function vA(){TI.stop()}function JI(){TI.start()}const TI=new HS;TI.setAnimationLoop(yA),typeof self<"u"&&TI.setContext(self),this.setAnimationLoop=function(R){sA=R,qA.setAnimationLoop(R),R===null?TI.stop():TI.start()},qA.addEventListener("sessionstart",vA),qA.addEventListener("sessionend",JI),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),qA.enabled===!0&&qA.isPresenting===!0&&(qA.cameraAutoUpdate===!0&&qA.updateCamera(X),X=qA.getCamera()),R.isScene===!0&&R.onBeforeRender(G,R,X,q),S=L.get(R,l.length),S.init(),l.push(S),wA.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),DA.setFromProjectionMatrix(wA),_=this.localClippingEnabled,BA=J.init(this.clippingPlanes,_,X),h=LI.get(R,c.length),h.init(),c.push(h),KC(R,X,0,G.sortObjects),h.finish(),G.sortObjects===!0&&h.sort(SA,W),BA===!0&&J.beginShadows();const iA=S.state.shadowsArray;if(QA.render(iA,R,X),BA===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),cA.render(h,R),S.setupLights(G.physicallyCorrectLights),X.isArrayCamera){const V=X.cameras;for(let tA=0,OA=V.length;tA<OA;tA++){const _A=V[tA];YI(h,R,_A,_A.viewport)}}else YI(h,R,X);q!==null&&(xA.updateMultisampleRenderTarget(q),xA.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(G,R,X),j.resetDefaultState(),F=-1,N=null,l.pop(),l.length>0?S=l[l.length-1]:S=null,c.pop(),c.length>0?h=c[c.length-1]:h=null};function KC(R,X,iA,V){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)iA=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||DA.intersectsSprite(R)){V&&rA.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wA);const _A=OI.update(R),II=R.material;II.visible&&h.push(R,_A,II,iA,rA.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==eI.render.frame&&(R.skeleton.update(),R.skeleton.frame=eI.render.frame),!R.frustumCulled||DA.intersectsObject(R))){V&&rA.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wA);const _A=OI.update(R),II=R.material;if(Array.isArray(II)){const zA=_A.groups;for(let yI=0,sI=zA.length;yI<sI;yI++){const nI=zA[yI],fI=II[nI.materialIndex];fI&&fI.visible&&h.push(R,_A,fI,iA,rA.z,nI)}}else II.visible&&h.push(R,_A,II,iA,rA.z,null)}}const OA=R.children;for(let _A=0,II=OA.length;_A<II;_A++)KC(OA[_A],X,iA,V)}function YI(R,X,iA,V){const tA=R.opaque,OA=R.transmissive,_A=R.transparent;S.setupLightsView(iA),OA.length>0&&Pg(tA,X,iA),V&&UA.viewport(p.copy(V)),tA.length>0&&Ng(tA,X,iA),OA.length>0&&Ng(OA,X,iA),_A.length>0&&Ng(_A,X,iA),UA.buffers.depth.setTest(!0),UA.buffers.depth.setMask(!0),UA.buffers.color.setMask(!0),UA.setPolygonOffset(!1)}function Pg(R,X,iA){const V=fA.isWebGL2;IA===null&&(IA=new NB(1,1,{generateMipmaps:!0,type:LA.has("EXT_color_buffer_half_float")?VE:BQ,minFilter:vo,samples:V&&E===!0?4:0})),G.getDrawingBufferSize(nA),V?IA.setSize(nA.x,nA.y):IA.setSize(Da(nA.x),Da(nA.y));const tA=G.getRenderTarget();G.setRenderTarget(IA),G.clear();const OA=G.toneMapping;G.toneMapping=BB,Ng(R,X,iA),G.toneMapping=OA,xA.updateMultisampleRenderTarget(IA),xA.updateRenderTargetMipmap(IA),G.setRenderTarget(tA)}function Ng(R,X,iA){const V=X.isScene===!0?X.overrideMaterial:null;for(let tA=0,OA=R.length;tA<OA;tA++){const _A=R[tA],II=_A.object,zA=_A.geometry,yI=V===null?_A.material:V,sI=_A.group;II.layers.test(iA.layers)&&Qt(II,X,iA,zA,yI,sI)}}function Qt(R,X,iA,V,tA,OA){R.onBeforeRender(G,X,iA,V,tA,OA),R.modelViewMatrix.multiplyMatrices(iA.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tA.onBeforeRender(G,X,iA,V,R,OA),tA.transparent===!0&&tA.side===gB?(tA.side=oC,tA.needsUpdate=!0,G.renderBufferDirect(iA,X,V,tA,R,OA),tA.side=$Q,tA.needsUpdate=!0,G.renderBufferDirect(iA,X,V,tA,R,OA),tA.side=gB):G.renderBufferDirect(iA,X,V,tA,R,OA),R.onAfterRender(G,X,iA,V,tA,OA)}function aQ(R,X,iA){X.isScene!==!0&&(X=JA);const V=jA.get(R),tA=S.state.lights,OA=S.state.shadowsArray,_A=tA.state.version,II=lI.getParameters(R,tA.state,OA,X,iA),zA=lI.getProgramCacheKey(II);let yI=V.programs;V.environment=R.isMeshStandardMaterial?X.environment:null,V.fog=X.fog,V.envMap=(R.isMeshStandardMaterial?HI:rI).get(R.envMap||V.environment),yI===void 0&&(R.addEventListener("dispose",O),yI=new Map,V.programs=yI);let sI=yI.get(zA);if(sI!==void 0){if(V.currentProgram===sI&&V.lightsStateVersion===_A)return DQ(R,II),sI}else II.uniforms=lI.getUniforms(R),R.onBuild(iA,II,G),R.onBeforeCompile(II,G),sI=lI.acquireProgram(II,zA),yI.set(zA,sI),V.uniforms=II.uniforms;const nI=V.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(nI.clippingPlanes=J.uniform),DQ(R,II),V.needsLights=it(R),V.lightsStateVersion=_A,V.needsLights&&(nI.ambientLightColor.value=tA.state.ambient,nI.lightProbe.value=tA.state.probe,nI.directionalLights.value=tA.state.directional,nI.directionalLightShadows.value=tA.state.directionalShadow,nI.spotLights.value=tA.state.spot,nI.spotLightShadows.value=tA.state.spotShadow,nI.rectAreaLights.value=tA.state.rectArea,nI.ltc_1.value=tA.state.rectAreaLTC1,nI.ltc_2.value=tA.state.rectAreaLTC2,nI.pointLights.value=tA.state.point,nI.pointLightShadows.value=tA.state.pointShadow,nI.hemisphereLights.value=tA.state.hemi,nI.directionalShadowMap.value=tA.state.directionalShadowMap,nI.directionalShadowMatrix.value=tA.state.directionalShadowMatrix,nI.spotShadowMap.value=tA.state.spotShadowMap,nI.spotLightMatrix.value=tA.state.spotLightMatrix,nI.spotLightMap.value=tA.state.spotLightMap,nI.pointShadowMap.value=tA.state.pointShadowMap,nI.pointShadowMatrix.value=tA.state.pointShadowMatrix);const fI=sI.getUniforms(),uC=yo.seqWithValue(fI.seq,nI);return V.currentProgram=sI,V.uniformsList=uC,sI}function DQ(R,X){const iA=jA.get(R);iA.outputEncoding=X.outputEncoding,iA.instancing=X.instancing,iA.skinning=X.skinning,iA.morphTargets=X.morphTargets,iA.morphNormals=X.morphNormals,iA.morphColors=X.morphColors,iA.morphTargetsCount=X.morphTargetsCount,iA.numClippingPlanes=X.numClippingPlanes,iA.numIntersection=X.numClipIntersection,iA.vertexAlphas=X.vertexAlphas,iA.vertexTangents=X.vertexTangents,iA.toneMapping=X.toneMapping}function Et(R,X,iA,V,tA){X.isScene!==!0&&(X=JA),xA.resetTextureUnits();const OA=X.fog,_A=V.isMeshStandardMaterial?X.environment:null,II=q===null?G.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:QQ,zA=(V.isMeshStandardMaterial?HI:rI).get(V.envMap||_A),yI=V.vertexColors===!0&&!!iA.attributes.color&&iA.attributes.color.itemSize===4,sI=!!V.normalMap&&!!iA.attributes.tangent,nI=!!iA.morphAttributes.position,fI=!!iA.morphAttributes.normal,uC=!!iA.morphAttributes.color,tC=V.toneMapped?G.toneMapping:BB,iB=iA.morphAttributes.position||iA.morphAttributes.normal||iA.morphAttributes.color,lg=iB!==void 0?iB.length:0,cI=jA.get(V),oB=S.state.lights;if(BA===!0&&(_===!0||R!==N)){const wg=R===N&&V.id===F;J.setState(V,R,wg)}let bI=!1;V.version===cI.__version?(cI.needsLights&&cI.lightsStateVersion!==oB.state.version||cI.outputEncoding!==II||tA.isInstancedMesh&&cI.instancing===!1||!tA.isInstancedMesh&&cI.instancing===!0||tA.isSkinnedMesh&&cI.skinning===!1||!tA.isSkinnedMesh&&cI.skinning===!0||cI.envMap!==zA||V.fog===!0&&cI.fog!==OA||cI.numClippingPlanes!==void 0&&(cI.numClippingPlanes!==J.numPlanes||cI.numIntersection!==J.numIntersection)||cI.vertexAlphas!==yI||cI.vertexTangents!==sI||cI.morphTargets!==nI||cI.morphNormals!==fI||cI.morphColors!==uC||cI.toneMapping!==tC||fA.isWebGL2===!0&&cI.morphTargetsCount!==lg)&&(bI=!0):(bI=!0,cI.__version=V.version);let yg=cI.currentProgram;bI===!0&&(yg=aQ(V,X,tA));let eC=!1,tB=!1,sE=!1;const sg=yg.getUniforms(),HC=cI.uniforms;if(UA.useProgram(yg.program)&&(eC=!0,tB=!0,sE=!0),V.id!==F&&(F=V.id,tB=!0),eC||N!==R){if(sg.setValue(oA,"projectionMatrix",R.projectionMatrix),fA.logarithmicDepthBuffer&&sg.setValue(oA,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),N!==R&&(N=R,tB=!0,sE=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const wg=sg.map.cameraPosition;wg!==void 0&&wg.setValue(oA,rA.setFromMatrixPosition(R.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&sg.setValue(oA,"isOrthographic",R.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||tA.isSkinnedMesh)&&sg.setValue(oA,"viewMatrix",R.matrixWorldInverse)}if(tA.isSkinnedMesh){sg.setOptional(oA,tA,"bindMatrix"),sg.setOptional(oA,tA,"bindMatrixInverse");const wg=tA.skeleton;wg&&(fA.floatVertexTextures?(wg.boneTexture===null&&wg.computeBoneTexture(),sg.setValue(oA,"boneTexture",wg.boneTexture,xA),sg.setValue(oA,"boneTextureSize",wg.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const nE=iA.morphAttributes;if((nE.position!==void 0||nE.normal!==void 0||nE.color!==void 0&&fA.isWebGL2===!0)&&kA.update(tA,iA,V,yg),(tB||cI.receiveShadow!==tA.receiveShadow)&&(cI.receiveShadow=tA.receiveShadow,sg.setValue(oA,"receiveShadow",tA.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(HC.envMap.value=zA,HC.flipEnvMap.value=zA.isCubeTexture&&zA.isRenderTargetTexture===!1?-1:1),tB&&(sg.setValue(oA,"toneMappingExposure",G.toneMappingExposure),cI.needsLights&&DE(HC,sE),OA&&V.fog===!0&&og.refreshFogUniforms(HC,OA),og.refreshMaterialUniforms(HC,V,$,u,IA),yo.upload(oA,cI.uniformsList,HC,xA)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(yo.upload(oA,cI.uniformsList,HC,xA),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&sg.setValue(oA,"center",tA.center),sg.setValue(oA,"modelViewMatrix",tA.modelViewMatrix),sg.setValue(oA,"normalMatrix",tA.normalMatrix),sg.setValue(oA,"modelMatrix",tA.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const wg=V.uniformsGroups;for(let sQ=0,ii=wg.length;sQ<ii;sQ++)if(fA.isWebGL2){const nQ=wg[sQ];FA.update(nQ,yg),FA.bind(nQ,yg)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yg}function DE(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function it(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return d},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,X,iA){jA.get(R.texture).__webglTexture=X,jA.get(R.depthTexture).__webglTexture=iA;const V=jA.get(R);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=iA===void 0,V.__autoAllocateDepthBuffer||LA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){const iA=jA.get(R);iA.__webglFramebuffer=X,iA.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,iA=0){q=R,U=X,d=iA;let V=!0;if(R){const zA=jA.get(R);zA.__useDefaultFramebuffer!==void 0?(UA.bindFramebuffer(36160,null),V=!1):zA.__webglFramebuffer===void 0?xA.setupRenderTarget(R):zA.__hasExternalTextures&&xA.rebindTextures(R,jA.get(R.texture).__webglTexture,jA.get(R.depthTexture).__webglTexture)}let tA=null,OA=!1,_A=!1;if(R){const zA=R.texture;(zA.isData3DTexture||zA.isDataArrayTexture)&&(_A=!0);const yI=jA.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(tA=yI[X],OA=!0):fA.isWebGL2&&R.samples>0&&xA.useMultisampledRTT(R)===!1?tA=jA.get(R).__webglMultisampledFramebuffer:tA=yI,p.copy(R.viewport),x.copy(R.scissor),M=R.scissorTest}else p.copy(v).multiplyScalar($).floor(),x.copy(CA).multiplyScalar($).floor(),M=GA;if(UA.bindFramebuffer(36160,tA)&&fA.drawBuffers&&V&&UA.drawBuffers(R,tA),UA.viewport(p),UA.scissor(x),UA.setScissorTest(M),OA){const zA=jA.get(R.texture);oA.framebufferTexture2D(36160,36064,34069+X,zA.__webglTexture,iA)}else if(_A){const zA=jA.get(R.texture),yI=X||0;oA.framebufferTextureLayer(36160,36064,zA.__webglTexture,iA||0,yI)}F=-1},this.readRenderTargetPixels=function(R,X,iA,V,tA,OA,_A){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let II=jA.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_A!==void 0&&(II=II[_A]),II){UA.bindFramebuffer(36160,II);try{const zA=R.texture,yI=zA.format,sI=zA.type;if(yI!==dC&&H.convert(yI)!==oA.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const nI=sI===VE&&(LA.has("EXT_color_buffer_half_float")||fA.isWebGL2&&LA.has("EXT_color_buffer_float"));if(sI!==BQ&&H.convert(sI)!==oA.getParameter(35738)&&!(sI===XB&&(fA.isWebGL2||LA.has("OES_texture_float")||LA.has("WEBGL_color_buffer_float")))&&!nI){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-V&&iA>=0&&iA<=R.height-tA&&oA.readPixels(X,iA,V,tA,H.convert(yI),H.convert(sI),OA)}finally{const zA=q!==null?jA.get(q).__webglFramebuffer:null;UA.bindFramebuffer(36160,zA)}}},this.copyFramebufferToTexture=function(R,X,iA=0){const V=Math.pow(2,-iA),tA=Math.floor(X.image.width*V),OA=Math.floor(X.image.height*V);xA.setTexture2D(X,0),oA.copyTexSubImage2D(3553,iA,0,0,R.x,R.y,tA,OA),UA.unbindTexture()},this.copyTextureToTexture=function(R,X,iA,V=0){const tA=X.image.width,OA=X.image.height,_A=H.convert(iA.format),II=H.convert(iA.type);xA.setTexture2D(iA,0),oA.pixelStorei(37440,iA.flipY),oA.pixelStorei(37441,iA.premultiplyAlpha),oA.pixelStorei(3317,iA.unpackAlignment),X.isDataTexture?oA.texSubImage2D(3553,V,R.x,R.y,tA,OA,_A,II,X.image.data):X.isCompressedTexture?oA.compressedTexSubImage2D(3553,V,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,_A,X.mipmaps[0].data):oA.texSubImage2D(3553,V,R.x,R.y,_A,II,X.image),V===0&&iA.generateMipmaps&&oA.generateMipmap(3553),UA.unbindTexture()},this.copyTextureToTexture3D=function(R,X,iA,V,tA=0){if(G.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const OA=R.max.x-R.min.x+1,_A=R.max.y-R.min.y+1,II=R.max.z-R.min.z+1,zA=H.convert(V.format),yI=H.convert(V.type);let sI;if(V.isData3DTexture)xA.setTexture3D(V,0),sI=32879;else if(V.isDataArrayTexture)xA.setTexture2DArray(V,0),sI=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}oA.pixelStorei(37440,V.flipY),oA.pixelStorei(37441,V.premultiplyAlpha),oA.pixelStorei(3317,V.unpackAlignment);const nI=oA.getParameter(3314),fI=oA.getParameter(32878),uC=oA.getParameter(3316),tC=oA.getParameter(3315),iB=oA.getParameter(32877),lg=iA.isCompressedTexture?iA.mipmaps[0]:iA.image;oA.pixelStorei(3314,lg.width),oA.pixelStorei(32878,lg.height),oA.pixelStorei(3316,R.min.x),oA.pixelStorei(3315,R.min.y),oA.pixelStorei(32877,R.min.z),iA.isDataTexture||iA.isData3DTexture?oA.texSubImage3D(sI,tA,X.x,X.y,X.z,OA,_A,II,zA,yI,lg.data):iA.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),oA.compressedTexSubImage3D(sI,tA,X.x,X.y,X.z,OA,_A,II,zA,lg.data)):oA.texSubImage3D(sI,tA,X.x,X.y,X.z,OA,_A,II,zA,yI,lg),oA.pixelStorei(3314,nI),oA.pixelStorei(32878,fI),oA.pixelStorei(3316,uC),oA.pixelStorei(3315,tC),oA.pixelStorei(32877,iB),tA===0&&V.generateMipmaps&&oA.generateMipmap(sI),UA.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?xA.setTextureCube(R,0):R.isData3DTexture?xA.setTexture3D(R,0):R.isDataArrayTexture?xA.setTexture2DArray(R,0):xA.setTexture2D(R,0),UA.unbindTexture()},this.resetState=function(){U=0,d=0,q=null,UA.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class RF extends ZS{}RF.prototype.isWebGL1Renderer=!0;class xh extends Sg{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),I}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(A){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=A}}class WS extends tE{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wI(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const Oh=new P,bh=new P,Zh=new Ig,_e=new pS,wo=new Po;class qF extends Sg{constructor(A=new EB,I=new WS){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let B=1,E=I.count;B<E;B++)Oh.fromBufferAttribute(I,B-1),bh.fromBufferAttribute(I,B),g[B]=g[B-1],g[B]+=Oh.distanceTo(bh);A.setAttribute("lineDistance",new yC(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,B=this.matrixWorld,E=A.params.Line.threshold,t=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),wo.copy(g.boundingSphere),wo.applyMatrix4(B),wo.radius+=E,A.ray.intersectsSphere(wo)===!1)return;Zh.copy(B).invert(),_e.copy(A.ray).applyMatrix4(Zh);const o=E/((this.scale.x+this.scale.y+this.scale.z)/3),D=o*o,a=new P,s=new P,h=new P,S=new P,c=this.isLineSegments?2:1,l=g.index,w=g.attributes.position;if(l!==null){const U=Math.max(0,t.start),d=Math.min(l.count,t.start+t.count);for(let q=U,F=d-1;q<F;q+=c){const N=l.getX(q),p=l.getX(q+1);if(a.fromBufferAttribute(w,N),s.fromBufferAttribute(w,p),_e.distanceSqToSegment(a,s,S,h)>D)continue;S.applyMatrix4(this.matrixWorld);const M=A.ray.origin.distanceTo(S);M<A.near||M>A.far||I.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:q,face:null,faceIndex:null,object:this})}}else{const U=Math.max(0,t.start),d=Math.min(w.count,t.start+t.count);for(let q=U,F=d-1;q<F;q+=c){if(a.fromBufferAttribute(w,q),s.fromBufferAttribute(w,q+1),_e.distanceSqToSegment(a,s,S,h)>D)continue;S.applyMatrix4(this.matrixWorld);const p=A.ray.origin.distanceTo(S);p<A.near||p>A.far||I.push({distance:p,point:h.clone().applyMatrix4(this.matrixWorld),index:q,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const B=I[g[0]];if(B!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let E=0,t=B.length;E<t;E++){const o=B[E].name||String(E);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=E}}}}}const Wh=new P,vh=new P;class pF extends qF{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let B=0,E=I.count;B<E;B+=2)Wh.fromBufferAttribute(I,B),vh.fromBufferAttribute(I,B+1),g[B]=B===0?0:g[B-1],g[B+1]=g[B]+Wh.distanceTo(vh);A.setAttribute("lineDistance",new yC(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dF extends tE{constructor(A){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new wI(16777215),this.specular=new wI(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wI(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=KS,this.normalScale=new EI(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.specular.copy(A.specular),this.shininess=A.shininess,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class LF extends Sg{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new wI(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),I}}const ze=new Ig,Ph=new P,Vh=new P;class YF{constructor(A){this.camera=A,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new EI(512,512),this.map=null,this.mapPass=null,this.matrix=new Ig,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new EI(1,1),this._viewportCount=1,this._viewports=[new ag(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;Ph.setFromMatrixPosition(A.matrixWorld),I.position.copy(Ph),Vh.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(Vh),I.updateMatrixWorld(),ze.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ze),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(ze)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class fF extends YF{constructor(){super(new mS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uF extends LF{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sg.DefaultUp),this.updateMatrix(),this.target=new Sg,this.shadow=new fF}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class jh{constructor(A=1,I=0,g=0){return this.radius=A,this.phi=I,this.theta=g,this}set(A,I,g){return this.radius=A,this.phi=I,this.theta=g,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,I,g){return this.radius=Math.sqrt(A*A+I*I+g*g),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,g),this.phi=Math.acos(Lg(I/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class HF extends pF{constructor(A=10,I=10,g=4473924,B=8947848){g=new wI(g),B=new wI(B);const E=I/2,t=A/I,o=A/2,D=[],a=[];for(let S=0,c=0,l=-o;S<=I;S++,l+=t){D.push(-o,0,l,o,0,l),D.push(l,0,-o,l,0,o);const G=S===E?g:B;G.toArray(a,c),c+=3,G.toArray(a,c),c+=3,G.toArray(a,c),c+=3,G.toArray(a,c),c+=3}const s=new EB;s.setAttribute("position",new yC(D,3)),s.setAttribute("color",new yC(a,3));const h=new WS({vertexColors:!0,toneMapped:!1});super(s,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);const _h={type:"change"},Xe={type:"start"},zh={type:"end"};class mF extends tQ{constructor(A,I){super(),this.object=A,this.domElement=I,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:FQ.ROTATE,MIDDLE:FQ.DOLLY,RIGHT:FQ.PAN},this.touches={ONE:RQ.ROTATE,TWO:RQ.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",LI),this._domElementKeyEvents=H},this.saveState=function(){g.target0.copy(g.target),g.position0.copy(g.object.position),g.zoom0=g.object.zoom},this.reset=function(){g.target.copy(g.target0),g.object.position.copy(g.position0),g.object.zoom=g.zoom0,g.object.updateProjectionMatrix(),g.dispatchEvent(_h),g.update(),E=B.NONE},this.update=function(){const H=new P,j=new EQ().setFromUnitVectors(A.up,new P(0,1,0)),FA=j.clone().invert(),dA=new P,qA=new EQ,uA=2*Math.PI;return function(){const DI=g.object.position;H.copy(DI).sub(g.target),H.applyQuaternion(j),o.setFromVector3(H),g.autoRotate&&E===B.NONE&&Y(x()),g.enableDamping?(o.theta+=D.theta*g.dampingFactor,o.phi+=D.phi*g.dampingFactor):(o.theta+=D.theta,o.phi+=D.phi);let O=g.minAzimuthAngle,RA=g.maxAzimuthAngle;return isFinite(O)&&isFinite(RA)&&(O<-Math.PI?O+=uA:O>Math.PI&&(O-=uA),RA<-Math.PI?RA+=uA:RA>Math.PI&&(RA-=uA),O<=RA?o.theta=Math.max(O,Math.min(RA,o.theta)):o.theta=o.theta>(O+RA)/2?Math.max(O,o.theta):Math.min(RA,o.theta)),o.phi=Math.max(g.minPolarAngle,Math.min(g.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=a,o.radius=Math.max(g.minDistance,Math.min(g.maxDistance,o.radius)),g.enableDamping===!0?g.target.addScaledVector(s,g.dampingFactor):g.target.add(s),H.setFromSpherical(o),H.applyQuaternion(FA),DI.copy(g.target).add(H),g.object.lookAt(g.target),g.enableDamping===!0?(D.theta*=1-g.dampingFactor,D.phi*=1-g.dampingFactor,s.multiplyScalar(1-g.dampingFactor)):(D.set(0,0,0),s.set(0,0,0)),a=1,h||dA.distanceToSquared(g.object.position)>t||8*(1-qA.dot(g.object.quaternion))>t?(g.dispatchEvent(_h),dA.copy(g.object.position),qA.copy(g.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){g.domElement.removeEventListener("contextmenu",QA),g.domElement.removeEventListener("pointerdown",rI),g.domElement.removeEventListener("pointercancel",mI),g.domElement.removeEventListener("wheel",og),g.domElement.removeEventListener("pointermove",HI),g.domElement.removeEventListener("pointerup",PI),g._domElementKeyEvents!==null&&g._domElementKeyEvents.removeEventListener("keydown",LI)};const g=this,B={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let E=B.NONE;const t=1e-6,o=new jh,D=new jh;let a=1;const s=new P;let h=!1;const S=new EI,c=new EI,l=new EI,G=new EI,w=new EI,U=new EI,d=new EI,q=new EI,F=new EI,N=[],p={};function x(){return 2*Math.PI/60/60*g.autoRotateSpeed}function M(){return Math.pow(.95,g.zoomSpeed)}function Y(H){D.theta-=H}function u(H){D.phi-=H}const $=function(){const H=new P;return function(FA,dA){H.setFromMatrixColumn(dA,0),H.multiplyScalar(-FA),s.add(H)}}(),SA=function(){const H=new P;return function(FA,dA){g.screenSpacePanning===!0?H.setFromMatrixColumn(dA,1):(H.setFromMatrixColumn(dA,0),H.crossVectors(g.object.up,H)),H.multiplyScalar(FA),s.add(H)}}(),W=function(){const H=new P;return function(FA,dA){const qA=g.domElement;if(g.object.isPerspectiveCamera){const uA=g.object.position;H.copy(uA).sub(g.target);let VA=H.length();VA*=Math.tan(g.object.fov/2*Math.PI/180),$(2*FA*VA/qA.clientHeight,g.object.matrix),SA(2*dA*VA/qA.clientHeight,g.object.matrix)}else g.object.isOrthographicCamera?($(FA*(g.object.right-g.object.left)/g.object.zoom/qA.clientWidth,g.object.matrix),SA(dA*(g.object.top-g.object.bottom)/g.object.zoom/qA.clientHeight,g.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),g.enablePan=!1)}}();function v(H){g.object.isPerspectiveCamera?a/=H:g.object.isOrthographicCamera?(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom*H)),g.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function CA(H){g.object.isPerspectiveCamera?a*=H:g.object.isOrthographicCamera?(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom/H)),g.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function GA(H){S.set(H.clientX,H.clientY)}function DA(H){d.set(H.clientX,H.clientY)}function BA(H){G.set(H.clientX,H.clientY)}function _(H){c.set(H.clientX,H.clientY),l.subVectors(c,S).multiplyScalar(g.rotateSpeed);const j=g.domElement;Y(2*Math.PI*l.x/j.clientHeight),u(2*Math.PI*l.y/j.clientHeight),S.copy(c),g.update()}function IA(H){q.set(H.clientX,H.clientY),F.subVectors(q,d),F.y>0?v(M()):F.y<0&&CA(M()),d.copy(q),g.update()}function wA(H){w.set(H.clientX,H.clientY),U.subVectors(w,G).multiplyScalar(g.panSpeed),W(U.x,U.y),G.copy(w),g.update()}function nA(H){H.deltaY<0?CA(M()):H.deltaY>0&&v(M()),g.update()}function rA(H){let j=!1;switch(H.code){case g.keys.UP:W(0,g.keyPanSpeed),j=!0;break;case g.keys.BOTTOM:W(0,-g.keyPanSpeed),j=!0;break;case g.keys.LEFT:W(g.keyPanSpeed,0),j=!0;break;case g.keys.RIGHT:W(-g.keyPanSpeed,0),j=!0;break}j&&(H.preventDefault(),g.update())}function JA(){if(N.length===1)S.set(N[0].pageX,N[0].pageY);else{const H=.5*(N[0].pageX+N[1].pageX),j=.5*(N[0].pageY+N[1].pageY);S.set(H,j)}}function mA(){if(N.length===1)G.set(N[0].pageX,N[0].pageY);else{const H=.5*(N[0].pageX+N[1].pageX),j=.5*(N[0].pageY+N[1].pageY);G.set(H,j)}}function oA(){const H=N[0].pageX-N[1].pageX,j=N[0].pageY-N[1].pageY,FA=Math.sqrt(H*H+j*j);d.set(0,FA)}function $A(){g.enableZoom&&oA(),g.enablePan&&mA()}function LA(){g.enableZoom&&oA(),g.enableRotate&&JA()}function fA(H){if(N.length==1)c.set(H.pageX,H.pageY);else{const FA=TA(H),dA=.5*(H.pageX+FA.x),qA=.5*(H.pageY+FA.y);c.set(dA,qA)}l.subVectors(c,S).multiplyScalar(g.rotateSpeed);const j=g.domElement;Y(2*Math.PI*l.x/j.clientHeight),u(2*Math.PI*l.y/j.clientHeight),S.copy(c)}function UA(H){if(N.length===1)w.set(H.pageX,H.pageY);else{const j=TA(H),FA=.5*(H.pageX+j.x),dA=.5*(H.pageY+j.y);w.set(FA,dA)}U.subVectors(w,G).multiplyScalar(g.panSpeed),W(U.x,U.y),G.copy(w)}function eI(H){const j=TA(H),FA=H.pageX-j.x,dA=H.pageY-j.y,qA=Math.sqrt(FA*FA+dA*dA);q.set(0,qA),F.set(0,Math.pow(q.y/d.y,g.zoomSpeed)),v(F.y),d.copy(q)}function jA(H){g.enableZoom&&eI(H),g.enablePan&&UA(H)}function xA(H){g.enableZoom&&eI(H),g.enableRotate&&fA(H)}function rI(H){g.enabled!==!1&&(N.length===0&&(g.domElement.setPointerCapture(H.pointerId),g.domElement.addEventListener("pointermove",HI),g.domElement.addEventListener("pointerup",PI)),cA(H),H.pointerType==="touch"?L(H):OI(H))}function HI(H){g.enabled!==!1&&(H.pointerType==="touch"?J(H):lI(H))}function PI(H){kA(H),N.length===0&&(g.domElement.releasePointerCapture(H.pointerId),g.domElement.removeEventListener("pointermove",HI),g.domElement.removeEventListener("pointerup",PI)),g.dispatchEvent(zh),E=B.NONE}function mI(H){kA(H)}function OI(H){let j;switch(H.button){case 0:j=g.mouseButtons.LEFT;break;case 1:j=g.mouseButtons.MIDDLE;break;case 2:j=g.mouseButtons.RIGHT;break;default:j=-1}switch(j){case FQ.DOLLY:if(g.enableZoom===!1)return;DA(H),E=B.DOLLY;break;case FQ.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(g.enablePan===!1)return;BA(H),E=B.PAN}else{if(g.enableRotate===!1)return;GA(H),E=B.ROTATE}break;case FQ.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(g.enableRotate===!1)return;GA(H),E=B.ROTATE}else{if(g.enablePan===!1)return;BA(H),E=B.PAN}break;default:E=B.NONE}E!==B.NONE&&g.dispatchEvent(Xe)}function lI(H){switch(E){case B.ROTATE:if(g.enableRotate===!1)return;_(H);break;case B.DOLLY:if(g.enableZoom===!1)return;IA(H);break;case B.PAN:if(g.enablePan===!1)return;wA(H);break}}function og(H){g.enabled===!1||g.enableZoom===!1||E!==B.NONE||(H.preventDefault(),g.dispatchEvent(Xe),nA(H),g.dispatchEvent(zh))}function LI(H){g.enabled===!1||g.enablePan===!1||rA(H)}function L(H){switch(KA(H),N.length){case 1:switch(g.touches.ONE){case RQ.ROTATE:if(g.enableRotate===!1)return;JA(),E=B.TOUCH_ROTATE;break;case RQ.PAN:if(g.enablePan===!1)return;mA(),E=B.TOUCH_PAN;break;default:E=B.NONE}break;case 2:switch(g.touches.TWO){case RQ.DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;$A(),E=B.TOUCH_DOLLY_PAN;break;case RQ.DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;LA(),E=B.TOUCH_DOLLY_ROTATE;break;default:E=B.NONE}break;default:E=B.NONE}E!==B.NONE&&g.dispatchEvent(Xe)}function J(H){switch(KA(H),E){case B.TOUCH_ROTATE:if(g.enableRotate===!1)return;fA(H),g.update();break;case B.TOUCH_PAN:if(g.enablePan===!1)return;UA(H),g.update();break;case B.TOUCH_DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;jA(H),g.update();break;case B.TOUCH_DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;xA(H),g.update();break;default:E=B.NONE}}function QA(H){g.enabled!==!1&&H.preventDefault()}function cA(H){N.push(H)}function kA(H){delete p[H.pointerId];for(let j=0;j<N.length;j++)if(N[j].pointerId==H.pointerId){N.splice(j,1);return}}function KA(H){let j=p[H.pointerId];j===void 0&&(j=new EI,p[H.pointerId]=j),j.set(H.pageX,H.pageY)}function TA(H){const j=H.pointerId===N[0].pointerId?N[1]:N[0];return p[j.pointerId]}g.domElement.addEventListener("contextmenu",QA),g.domElement.addEventListener("pointerdown",rI),g.domElement.addEventListener("pointercancel",mI),g.domElement.addEventListener("wheel",og,{passive:!1}),this.update()}}let r;const kI=new Array(32).fill(void 0);function KI(i){return kI[i]}kI.push(void 0,null,!0,!1);let Mo,Uo,ZE=kI.length;function Yo(i){const A=KI(i);return function(I){I<36||(kI[I]=ZE,ZE=I)}(i),A}function Ag(i){ZE===kI.length&&kI.push(kI.length+1);const A=ZE;return ZE=kI[A],kI[A]=i,A}function HA(i){return i==null}function fo(){return Mo.byteLength===0&&(Mo=new Float64Array(r.memory.buffer)),Mo}function pI(){return Uo.byteLength===0&&(Uo=new Int32Array(r.memory.buffer)),Uo}const vS=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});let Ko;function PS(i,A){return vS.decode((Ko.byteLength===0&&(Ko=new Uint8Array(r.memory.buffer)),Ko).subarray(i,i+A))}function T(i,A){if(!(i instanceof A))throw new Error(`expected instance of ${A.name}`);return i.ptr}vS.decode();let No,Jo,dI=32;function vI(i){if(dI==1)throw new Error("out of js stack");return kI[--dI]=i,dI}function WE(){return No.byteLength===0&&(No=new Float32Array(r.memory.buffer)),No}function Xh(i,A){return WE().subarray(i/4,i/4+A)}function VS(){return Jo.byteLength===0&&(Jo=new Uint32Array(r.memory.buffer)),Jo}let Wg=0;function WB(i,A){const I=A(4*i.length);return WE().set(i,I/4),Wg=i.length,I}function Go(i,A){const I=A(4*i.length);return VS().set(i,I/4),Wg=i.length,I}function $e(i,A){try{return i.apply(this,A)}catch(I){r.__wbindgen_exn_store(Ag(I))}}Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Spherical:3,3:"Spherical",Generic:4,4:"Generic"}),Object.freeze({AccelerationBased:0,0:"AccelerationBased",ForceBased:1,1:"ForceBased"});const _o=Object.freeze({X:0,0:"X",Y:1,1:"Y",Z:2,2:"Z",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"});Object.freeze({Dynamic:0,0:"Dynamic",Fixed:1,1:"Fixed",KinematicPositionBased:2,2:"KinematicPositionBased",KinematicVelocityBased:3,3:"KinematicVelocityBased"}),Object.freeze({Vertex:0,0:"Vertex",Edge:1,1:"Edge",Face:2,2:"Face",Unknown:3,3:"Unknown"}),Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron"});class JB{static __wrap(A){const I=Object.create(JB.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawbroadphase_free(A)}constructor(){const A=r.rawbroadphase_new();return JB.__wrap(A)}}class BE{static __wrap(A){const I=Object.create(BE.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawccdsolver_free(A)}constructor(){const A=r.rawccdsolver_new();return BE.__wrap(A)}}class zI{static __wrap(A){const I=Object.create(zI.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawcolliderset_free(A)}coTranslation(A){const I=r.rawcolliderset_coTranslation(this.ptr,A);return AA.__wrap(I)}coRotation(A){const I=r.rawcolliderset_coRotation(this.ptr,A);return tI.__wrap(I)}coSetTranslation(A,I,g,B){r.rawcolliderset_coSetTranslation(this.ptr,A,I,g,B)}coSetTranslationWrtParent(A,I,g,B){r.rawcolliderset_coSetTranslationWrtParent(this.ptr,A,I,g,B)}coSetRotation(A,I,g,B,E){r.rawcolliderset_coSetRotation(this.ptr,A,I,g,B,E)}coSetRotationWrtParent(A,I,g,B,E){r.rawcolliderset_coSetRotationWrtParent(this.ptr,A,I,g,B,E)}coIsSensor(A){return r.rawcolliderset_coIsSensor(this.ptr,A)!==0}coShapeType(A){return r.rawcolliderset_coShapeType(this.ptr,A)>>>0}coHalfExtents(A){const I=r.rawcolliderset_coHalfExtents(this.ptr,A);return I===0?void 0:AA.__wrap(I)}coRadius(A){try{const B=r.__wbindgen_add_to_stack_pointer(-16);r.rawcolliderset_coRadius(B,this.ptr,A);var I=pI()[B/4+0],g=WE()[B/4+1];return I===0?void 0:g}finally{r.__wbindgen_add_to_stack_pointer(16)}}coHalfHeight(A){try{const B=r.__wbindgen_add_to_stack_pointer(-16);r.rawcolliderset_coHalfHeight(B,this.ptr,A);var I=pI()[B/4+0],g=WE()[B/4+1];return I===0?void 0:g}finally{r.__wbindgen_add_to_stack_pointer(16)}}coRoundRadius(A){try{const B=r.__wbindgen_add_to_stack_pointer(-16);r.rawcolliderset_coRoundRadius(B,this.ptr,A);var I=pI()[B/4+0],g=WE()[B/4+1];return I===0?void 0:g}finally{r.__wbindgen_add_to_stack_pointer(16)}}coVertices(A){try{const B=r.__wbindgen_add_to_stack_pointer(-16);r.rawcolliderset_coVertices(B,this.ptr,A);var I=pI()[B/4+0],g=pI()[B/4+1];let E;return I!==0&&(E=Xh(I,g).slice(),r.__wbindgen_free(I,4*g)),E}finally{r.__wbindgen_add_to_stack_pointer(16)}}coIndices(A){try{const B=r.__wbindgen_add_to_stack_pointer(-16);r.rawcolliderset_coIndices(B,this.ptr,A);var I=pI()[B/4+0],g=pI()[B/4+1];let E;return I!==0&&(E=function(t,o){return VS().subarray(t/4,t/4+o)}(I,g).slice(),r.__wbindgen_free(I,4*g)),E}finally{r.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldHeights(A){try{const B=r.__wbindgen_add_to_stack_pointer(-16);r.rawcolliderset_coHeightfieldHeights(B,this.ptr,A);var I=pI()[B/4+0],g=pI()[B/4+1];let E;return I!==0&&(E=Xh(I,g).slice(),r.__wbindgen_free(I,4*g)),E}finally{r.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(A){const I=r.rawcolliderset_coHeightfieldScale(this.ptr,A);return I===0?void 0:AA.__wrap(I)}coHeightfieldNRows(A){try{const B=r.__wbindgen_add_to_stack_pointer(-16);r.rawcolliderset_coHeightfieldNRows(B,this.ptr,A);var I=pI()[B/4+0],g=pI()[B/4+1];return I===0?void 0:g>>>0}finally{r.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldNCols(A){try{const B=r.__wbindgen_add_to_stack_pointer(-16);r.rawcolliderset_coHeightfieldNCols(B,this.ptr,A);var I=pI()[B/4+0],g=pI()[B/4+1];return I===0?void 0:g>>>0}finally{r.__wbindgen_add_to_stack_pointer(16)}}coParent(A){try{const B=r.__wbindgen_add_to_stack_pointer(-16);r.rawcolliderset_coParent(B,this.ptr,A);var I=pI()[B/4+0],g=fo()[B/8+1];return I===0?void 0:g}finally{r.__wbindgen_add_to_stack_pointer(16)}}coFriction(A){return r.rawcolliderset_coFriction(this.ptr,A)}coRestitution(A){return r.rawcolliderset_coRestitution(this.ptr,A)}coDensity(A){return r.rawcolliderset_coDensity(this.ptr,A)}coMass(A){return r.rawcolliderset_coMass(this.ptr,A)}coVolume(A){return r.rawcolliderset_coVolume(this.ptr,A)}coCollisionGroups(A){return r.rawcolliderset_coCollisionGroups(this.ptr,A)>>>0}coSolverGroups(A){return r.rawcolliderset_coSolverGroups(this.ptr,A)>>>0}coActiveHooks(A){return r.rawcolliderset_coActiveHooks(this.ptr,A)>>>0}coActiveCollisionTypes(A){return r.rawcolliderset_coActiveCollisionTypes(this.ptr,A)}coActiveEvents(A){return r.rawcolliderset_coActiveEvents(this.ptr,A)>>>0}coContactForceEventThreshold(A){return r.rawcolliderset_coContactForceEventThreshold(this.ptr,A)}coContainsPoint(A,I){return T(I,AA),r.rawcolliderset_coContainsPoint(this.ptr,A,I.ptr)!==0}coCastShape(A,I,g,B,E,t,o){T(I,AA),T(g,PA),T(B,AA),T(E,tI),T(t,AA);const D=r.rawcolliderset_coCastShape(this.ptr,A,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o);return D===0?void 0:It.__wrap(D)}coCastCollider(A,I,g,B,E){T(I,AA),T(B,AA);const t=r.rawcolliderset_coCastCollider(this.ptr,A,I.ptr,g,B.ptr,E);return t===0?void 0:At.__wrap(t)}coIntersectsShape(A,I,g,B){return T(I,PA),T(g,AA),T(B,tI),r.rawcolliderset_coIntersectsShape(this.ptr,A,I.ptr,g.ptr,B.ptr)!==0}coContactShape(A,I,g,B,E){T(I,PA),T(g,AA),T(B,tI);const t=r.rawcolliderset_coContactShape(this.ptr,A,I.ptr,g.ptr,B.ptr,E);return t===0?void 0:_E.__wrap(t)}coContactCollider(A,I,g){const B=r.rawcolliderset_coContactCollider(this.ptr,A,I,g);return B===0?void 0:_E.__wrap(B)}coProjectPoint(A,I,g){T(I,AA);const B=r.rawcolliderset_coProjectPoint(this.ptr,A,I.ptr,g);return zo.__wrap(B)}coIntersectsRay(A,I,g,B){return T(I,AA),T(g,AA),r.rawcolliderset_coIntersectsRay(this.ptr,A,I.ptr,g.ptr,B)!==0}coCastRay(A,I,g,B,E){return T(I,AA),T(g,AA),r.rawcolliderset_coCastRay(this.ptr,A,I.ptr,g.ptr,B,E)}coCastRayAndGetNormal(A,I,g,B,E){T(I,AA),T(g,AA);const t=r.rawcolliderset_coCastRayAndGetNormal(this.ptr,A,I.ptr,g.ptr,B,E);return t===0?void 0:$o.__wrap(t)}coSetSensor(A,I){r.rawcolliderset_coSetSensor(this.ptr,A,I)}coSetRestitution(A,I){r.rawcolliderset_coSetRestitution(this.ptr,A,I)}coSetFriction(A,I){r.rawcolliderset_coSetFriction(this.ptr,A,I)}coFrictionCombineRule(A){return r.rawcolliderset_coFrictionCombineRule(this.ptr,A)>>>0}coSetFrictionCombineRule(A,I){r.rawcolliderset_coSetFrictionCombineRule(this.ptr,A,I)}coRestitutionCombineRule(A){return r.rawcolliderset_coRestitutionCombineRule(this.ptr,A)>>>0}coSetRestitutionCombineRule(A,I){r.rawcolliderset_coSetRestitutionCombineRule(this.ptr,A,I)}coSetCollisionGroups(A,I){r.rawcolliderset_coSetCollisionGroups(this.ptr,A,I)}coSetSolverGroups(A,I){r.rawcolliderset_coSetSolverGroups(this.ptr,A,I)}coSetActiveHooks(A,I){r.rawcolliderset_coSetActiveHooks(this.ptr,A,I)}coSetActiveEvents(A,I){r.rawcolliderset_coSetActiveEvents(this.ptr,A,I)}coSetActiveCollisionTypes(A,I){r.rawcolliderset_coSetActiveCollisionTypes(this.ptr,A,I)}coSetShape(A,I){T(I,PA),r.rawcolliderset_coSetShape(this.ptr,A,I.ptr)}coSetContactForceEventThreshold(A,I){r.rawcolliderset_coSetContactForceEventThreshold(this.ptr,A,I)}coSetDensity(A,I){r.rawcolliderset_coSetDensity(this.ptr,A,I)}coSetMass(A,I){r.rawcolliderset_coSetMass(this.ptr,A,I)}coSetMassProperties(A,I,g,B,E){T(g,AA),T(B,AA),T(E,tI),r.rawcolliderset_coSetMassProperties(this.ptr,A,I,g.ptr,B.ptr,E.ptr)}constructor(){const A=r.rawcolliderset_new();return zI.__wrap(A)}len(){return r.rawcolliderset_len(this.ptr)>>>0}contains(A){return r.rawcolliderset_contains(this.ptr,A)!==0}createCollider(A,I,g,B,E,t,o,D,a,s,h,S,c,l,G,w,U,d,q,F,N,p,x){try{const u=r.__wbindgen_add_to_stack_pointer(-16);T(A,PA),T(I,AA),T(g,tI),T(t,AA),T(o,AA),T(D,tI),T(x,XI),r.rawcolliderset_createCollider(u,this.ptr,A.ptr,I.ptr,g.ptr,B,E,t.ptr,o.ptr,D.ptr,a,s,h,S,c,l,G,w,U,d,q,F,N,p,x.ptr);var M=pI()[u/4+0],Y=fo()[u/8+1];return M===0?void 0:Y}finally{r.__wbindgen_add_to_stack_pointer(16)}}remove(A,I,g,B){T(I,UC),T(g,XI),r.rawcolliderset_remove(this.ptr,A,I.ptr,g.ptr,B)}isHandleValid(A){return r.rawcolliderset_contains(this.ptr,A)!==0}forEachColliderHandle(A){try{r.rawcolliderset_forEachColliderHandle(this.ptr,vI(A))}finally{kI[dI++]=void 0}}}class ua{static __wrap(A){const I=Object.create(ua.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawcontactforceevent_free(A)}collider1(){return r.rawcontactforceevent_collider1(this.ptr)}collider2(){return r.rawcontactforceevent_collider2(this.ptr)}total_force(){const A=r.rawcontactforceevent_total_force(this.ptr);return AA.__wrap(A)}total_force_magnitude(){return r.rawcontactforceevent_total_force_magnitude(this.ptr)}max_force_direction(){const A=r.rawcontactforceevent_max_force_direction(this.ptr);return AA.__wrap(A)}max_force_magnitude(){return r.rawcontactforceevent_max_force_magnitude(this.ptr)}}class Ha{static __wrap(A){const I=Object.create(Ha.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawcontactmanifold_free(A)}normal(){const A=r.rawcontactmanifold_normal(this.ptr);return AA.__wrap(A)}local_n1(){const A=r.rawcontactmanifold_local_n1(this.ptr);return AA.__wrap(A)}local_n2(){const A=r.rawcontactmanifold_local_n2(this.ptr);return AA.__wrap(A)}subshape1(){return r.rawcontactmanifold_subshape1(this.ptr)>>>0}subshape2(){return r.rawcontactmanifold_subshape2(this.ptr)>>>0}num_contacts(){return r.rawcontactmanifold_num_contacts(this.ptr)>>>0}contact_local_p1(A){const I=r.rawcontactmanifold_contact_local_p1(this.ptr,A);return I===0?void 0:AA.__wrap(I)}contact_local_p2(A){const I=r.rawcontactmanifold_contact_local_p2(this.ptr,A);return I===0?void 0:AA.__wrap(I)}contact_dist(A){return r.rawcontactmanifold_contact_dist(this.ptr,A)}contact_fid1(A){return r.rawcontactmanifold_contact_fid1(this.ptr,A)>>>0}contact_fid2(A){return r.rawcontactmanifold_contact_fid2(this.ptr,A)>>>0}contact_impulse(A){return r.rawcontactmanifold_contact_impulse(this.ptr,A)}contact_tangent_impulse_x(A){return r.rawcontactmanifold_contact_tangent_impulse_x(this.ptr,A)}contact_tangent_impulse_y(A){return r.rawcontactmanifold_contact_tangent_impulse_y(this.ptr,A)}num_solver_contacts(){return r.rawcontactmanifold_num_solver_contacts(this.ptr)>>>0}solver_contact_point(A){const I=r.rawcontactmanifold_solver_contact_point(this.ptr,A);return I===0?void 0:AA.__wrap(I)}solver_contact_dist(A){return r.rawcontactmanifold_solver_contact_dist(this.ptr,A)}solver_contact_friction(A){return r.rawcontactmanifold_solver_contact_friction(this.ptr,A)}solver_contact_restitution(A){return r.rawcontactmanifold_solver_contact_restitution(this.ptr,A)}solver_contact_tangent_velocity(A){const I=r.rawcontactmanifold_solver_contact_tangent_velocity(this.ptr,A);return AA.__wrap(I)}}class ma{static __wrap(A){const I=Object.create(ma.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawcontactpair_free(A)}collider1(){return r.rawcontactpair_collider1(this.ptr)}collider2(){return r.rawcontactpair_collider2(this.ptr)}numContactManifolds(){return r.rawcontactpair_numContactManifolds(this.ptr)>>>0}contactManifold(A){const I=r.rawcontactpair_contactManifold(this.ptr,A);return I===0?void 0:Ha.__wrap(I)}}class uo{static __wrap(A){const I=Object.create(uo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawdebugrenderpipeline_free(A)}constructor(){const A=r.rawdebugrenderpipeline_new();return uo.__wrap(A)}vertices(){return Yo(r.rawdebugrenderpipeline_vertices(this.ptr))}colors(){return Yo(r.rawdebugrenderpipeline_colors(this.ptr))}render(A,I,g,B,E){T(A,XI),T(I,zI),T(g,YC),T(B,fC),T(E,QB),r.rawdebugrenderpipeline_render(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr)}}class Ta{static __wrap(A){const I=Object.create(Ta.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawdeserializedworld_free(A)}takeGravity(){const A=r.rawdeserializedworld_takeGravity(this.ptr);return A===0?void 0:AA.__wrap(A)}takeIntegrationParameters(){const A=r.rawdeserializedworld_takeIntegrationParameters(this.ptr);return A===0?void 0:FB.__wrap(A)}takeIslandManager(){const A=r.rawdeserializedworld_takeIslandManager(this.ptr);return A===0?void 0:UC.__wrap(A)}takeBroadPhase(){const A=r.rawdeserializedworld_takeBroadPhase(this.ptr);return A===0?void 0:JB.__wrap(A)}takeNarrowPhase(){const A=r.rawdeserializedworld_takeNarrowPhase(this.ptr);return A===0?void 0:QB.__wrap(A)}takeBodies(){const A=r.rawdeserializedworld_takeBodies(this.ptr);return A===0?void 0:XI.__wrap(A)}takeColliders(){const A=r.rawdeserializedworld_takeColliders(this.ptr);return A===0?void 0:zI.__wrap(A)}takeImpulseJoints(){const A=r.rawdeserializedworld_takeImpulseJoints(this.ptr);return A===0?void 0:YC.__wrap(A)}takeMultibodyJoints(){const A=r.rawdeserializedworld_takeMultibodyJoints(this.ptr);return A===0?void 0:fC.__wrap(A)}}class jE{static __wrap(A){const I=Object.create(jE.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_raweventqueue_free(A)}constructor(A){const I=r.raweventqueue_new(A);return jE.__wrap(I)}drainCollisionEvents(A){try{r.raweventqueue_drainCollisionEvents(this.ptr,vI(A))}finally{kI[dI++]=void 0}}drainContactForceEvents(A){try{r.raweventqueue_drainContactForceEvents(this.ptr,vI(A))}finally{kI[dI++]=void 0}}clear(){r.raweventqueue_clear(this.ptr)}}class EC{static __wrap(A){const I=Object.create(EC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawgenericjoint_free(A)}static spherical(A,I){T(A,AA),T(I,AA);const g=r.rawgenericjoint_spherical(A.ptr,I.ptr);return EC.__wrap(g)}static prismatic(A,I,g,B,E,t){T(A,AA),T(I,AA),T(g,AA);const o=r.rawgenericjoint_prismatic(A.ptr,I.ptr,g.ptr,B,E,t);return o===0?void 0:EC.__wrap(o)}static fixed(A,I,g,B){T(A,AA),T(I,tI),T(g,AA),T(B,tI);const E=r.rawgenericjoint_fixed(A.ptr,I.ptr,g.ptr,B.ptr);return EC.__wrap(E)}static revolute(A,I,g){T(A,AA),T(I,AA),T(g,AA);const B=r.rawgenericjoint_revolute(A.ptr,I.ptr,g.ptr);return B===0?void 0:EC.__wrap(B)}}class YC{static __wrap(A){const I=Object.create(YC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawimpulsejointset_free(A)}jointType(A){return r.rawimpulsejointset_jointType(this.ptr,A)>>>0}jointBodyHandle1(A){return r.rawimpulsejointset_jointBodyHandle1(this.ptr,A)}jointBodyHandle2(A){return r.rawimpulsejointset_jointBodyHandle2(this.ptr,A)}jointFrameX1(A){const I=r.rawimpulsejointset_jointFrameX1(this.ptr,A);return tI.__wrap(I)}jointFrameX2(A){const I=r.rawimpulsejointset_jointFrameX2(this.ptr,A);return tI.__wrap(I)}jointAnchor1(A){const I=r.rawimpulsejointset_jointAnchor1(this.ptr,A);return AA.__wrap(I)}jointAnchor2(A){const I=r.rawimpulsejointset_jointAnchor2(this.ptr,A);return AA.__wrap(I)}jointSetAnchor1(A,I){T(I,AA),r.rawimpulsejointset_jointSetAnchor1(this.ptr,A,I.ptr)}jointSetAnchor2(A,I){T(I,AA),r.rawimpulsejointset_jointSetAnchor2(this.ptr,A,I.ptr)}jointContactsEnabled(A){return r.rawimpulsejointset_jointContactsEnabled(this.ptr,A)!==0}jointSetContactsEnabled(A,I){r.rawimpulsejointset_jointSetContactsEnabled(this.ptr,A,I)}jointLimitsEnabled(A,I){return r.rawimpulsejointset_jointLimitsEnabled(this.ptr,A,I)!==0}jointLimitsMin(A,I){return r.rawimpulsejointset_jointLimitsMin(this.ptr,A,I)}jointLimitsMax(A,I){return r.rawimpulsejointset_jointLimitsMax(this.ptr,A,I)}jointSetLimits(A,I,g,B){r.rawimpulsejointset_jointSetLimits(this.ptr,A,I,g,B)}jointConfigureMotorModel(A,I,g){r.rawimpulsejointset_jointConfigureMotorModel(this.ptr,A,I,g)}jointConfigureMotorVelocity(A,I,g,B){r.rawimpulsejointset_jointConfigureMotorVelocity(this.ptr,A,I,g,B)}jointConfigureMotorPosition(A,I,g,B,E){r.rawimpulsejointset_jointConfigureMotorPosition(this.ptr,A,I,g,B,E)}jointConfigureMotor(A,I,g,B,E,t){r.rawimpulsejointset_jointConfigureMotor(this.ptr,A,I,g,B,E,t)}constructor(){const A=r.rawimpulsejointset_new();return YC.__wrap(A)}createJoint(A,I,g,B){return T(A,EC),r.rawimpulsejointset_createJoint(this.ptr,A.ptr,I,g,B)}remove(A,I){r.rawimpulsejointset_remove(this.ptr,A,I)}len(){return r.rawimpulsejointset_len(this.ptr)>>>0}contains(A){return r.rawimpulsejointset_contains(this.ptr,A)!==0}forEachJointHandle(A){try{r.rawimpulsejointset_forEachJointHandle(this.ptr,vI(A))}finally{kI[dI++]=void 0}}forEachJointAttachedToRigidBody(A,I){try{r.rawimpulsejointset_forEachJointAttachedToRigidBody(this.ptr,A,vI(I))}finally{kI[dI++]=void 0}}}class FB{static __wrap(A){const I=Object.create(FB.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawintegrationparameters_free(A)}constructor(){const A=r.rawintegrationparameters_new();return FB.__wrap(A)}get dt(){return r.rawintegrationparameters_dt(this.ptr)}get erp(){return r.rawintegrationparameters_erp(this.ptr)}get allowedLinearError(){return r.rawintegrationparameters_allowedLinearError(this.ptr)}get predictionDistance(){return r.rawintegrationparameters_predictionDistance(this.ptr)}get maxVelocityIterations(){return r.rawintegrationparameters_maxVelocityIterations(this.ptr)>>>0}get maxVelocityFrictionIterations(){return r.rawintegrationparameters_maxVelocityFrictionIterations(this.ptr)>>>0}get maxStabilizationIterations(){return r.rawintegrationparameters_maxStabilizationIterations(this.ptr)>>>0}get minIslandSize(){return r.rawintegrationparameters_minIslandSize(this.ptr)>>>0}get maxCcdSubsteps(){return r.rawintegrationparameters_maxCcdSubsteps(this.ptr)>>>0}set dt(A){r.rawintegrationparameters_set_dt(this.ptr,A)}set erp(A){r.rawintegrationparameters_set_erp(this.ptr,A)}set allowedLinearError(A){r.rawintegrationparameters_set_allowedLinearError(this.ptr,A)}set predictionDistance(A){r.rawintegrationparameters_set_predictionDistance(this.ptr,A)}set maxVelocityIterations(A){r.rawintegrationparameters_set_maxVelocityIterations(this.ptr,A)}set maxVelocityFrictionIterations(A){r.rawintegrationparameters_set_maxVelocityFrictionIterations(this.ptr,A)}set maxStabilizationIterations(A){r.rawintegrationparameters_set_maxStabilizationIterations(this.ptr,A)}set minIslandSize(A){r.rawintegrationparameters_set_minIslandSize(this.ptr,A)}set maxCcdSubsteps(A){r.rawintegrationparameters_set_maxCcdSubsteps(this.ptr,A)}}class UC{static __wrap(A){const I=Object.create(UC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawislandmanager_free(A)}constructor(){const A=r.rawislandmanager_new();return UC.__wrap(A)}forEachActiveRigidBodyHandle(A){try{r.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr,vI(A))}finally{kI[dI++]=void 0}}}class fC{static __wrap(A){const I=Object.create(fC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawmultibodyjointset_free(A)}jointType(A){return r.rawmultibodyjointset_jointType(this.ptr,A)>>>0}jointFrameX1(A){const I=r.rawmultibodyjointset_jointFrameX1(this.ptr,A);return tI.__wrap(I)}jointFrameX2(A){const I=r.rawmultibodyjointset_jointFrameX2(this.ptr,A);return tI.__wrap(I)}jointAnchor1(A){const I=r.rawmultibodyjointset_jointAnchor1(this.ptr,A);return AA.__wrap(I)}jointAnchor2(A){const I=r.rawmultibodyjointset_jointAnchor2(this.ptr,A);return AA.__wrap(I)}jointContactsEnabled(A){return r.rawmultibodyjointset_jointContactsEnabled(this.ptr,A)!==0}jointSetContactsEnabled(A,I){r.rawmultibodyjointset_jointSetContactsEnabled(this.ptr,A,I)}jointLimitsEnabled(A,I){return r.rawmultibodyjointset_jointLimitsEnabled(this.ptr,A,I)!==0}jointLimitsMin(A,I){return r.rawmultibodyjointset_jointLimitsMin(this.ptr,A,I)}jointLimitsMax(A,I){return r.rawmultibodyjointset_jointLimitsMax(this.ptr,A,I)}constructor(){const A=r.rawmultibodyjointset_new();return fC.__wrap(A)}createJoint(A,I,g,B){return T(A,EC),r.rawmultibodyjointset_createJoint(this.ptr,A.ptr,I,g,B)}remove(A,I){r.rawmultibodyjointset_remove(this.ptr,A,I)}contains(A){return r.rawmultibodyjointset_contains(this.ptr,A)!==0}forEachJointHandle(A){try{r.rawmultibodyjointset_forEachJointHandle(this.ptr,vI(A))}finally{kI[dI++]=void 0}}forEachJointAttachedToRigidBody(A,I){try{r.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.ptr,A,vI(I))}finally{kI[dI++]=void 0}}}class QB{static __wrap(A){const I=Object.create(QB.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawnarrowphase_free(A)}constructor(){const A=r.rawnarrowphase_new();return QB.__wrap(A)}contacts_with(A,I){r.rawnarrowphase_contacts_with(this.ptr,A,Ag(I))}contact_pair(A,I){const g=r.rawnarrowphase_contact_pair(this.ptr,A,I);return g===0?void 0:ma.__wrap(g)}intersections_with(A,I){r.rawnarrowphase_intersections_with(this.ptr,A,Ag(I))}intersection_pair(A,I){return r.rawnarrowphase_intersection_pair(this.ptr,A,I)!==0}}class Ho{static __wrap(A){const I=Object.create(Ho.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawphysicspipeline_free(A)}constructor(){const A=r.rawphysicspipeline_new();return Ho.__wrap(A)}step(A,I,g,B,E,t,o,D,a,s){T(A,AA),T(I,FB),T(g,UC),T(B,JB),T(E,QB),T(t,XI),T(o,zI),T(D,YC),T(a,fC),T(s,BE),r.rawphysicspipeline_step(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o.ptr,D.ptr,a.ptr,s.ptr)}stepWithEvents(A,I,g,B,E,t,o,D,a,s,h,S,c,l){T(A,AA),T(I,FB),T(g,UC),T(B,JB),T(E,QB),T(t,XI),T(o,zI),T(D,YC),T(a,fC),T(s,BE),T(h,jE),r.rawphysicspipeline_stepWithEvents(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o.ptr,D.ptr,a.ptr,s.ptr,h.ptr,Ag(S),Ag(c),Ag(l))}}class mo{static __wrap(A){const I=Object.create(mo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawpointcolliderprojection_free(A)}colliderHandle(){return r.rawcontactforceevent_collider1(this.ptr)}point(){const A=r.rawpointcolliderprojection_point(this.ptr);return AA.__wrap(A)}isInside(){return r.rawpointcolliderprojection_isInside(this.ptr)!==0}featureType(){return r.rawpointcolliderprojection_featureType(this.ptr)>>>0}featureId(){try{const g=r.__wbindgen_add_to_stack_pointer(-16);r.rawpointcolliderprojection_featureId(g,this.ptr);var A=pI()[g/4+0],I=pI()[g/4+1];return A===0?void 0:I>>>0}finally{r.__wbindgen_add_to_stack_pointer(16)}}}class zo{static __wrap(A){const I=Object.create(zo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawpointprojection_free(A)}point(){const A=r.rawpointprojection_point(this.ptr);return AA.__wrap(A)}isInside(){return r.rawpointprojection_isInside(this.ptr)!==0}}class To{static __wrap(A){const I=Object.create(To.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawquerypipeline_free(A)}constructor(){const A=r.rawquerypipeline_new();return To.__wrap(A)}update(A,I,g){T(A,UC),T(I,XI),T(g,zI),r.rawquerypipeline_update(this.ptr,A.ptr,I.ptr,g.ptr)}castRay(A,I,g,B,E,t,o,D,a,s,h){try{T(A,XI),T(I,zI),T(g,AA),T(B,AA);const S=r.rawquerypipeline_castRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E,t,o,!HA(D),HA(D)?0:D,!HA(a),HA(a)?0:a,!HA(s),HA(s)?0:s,vI(h));return S===0?void 0:xa.__wrap(S)}finally{kI[dI++]=void 0}}castRayAndGetNormal(A,I,g,B,E,t,o,D,a,s,h){try{T(A,XI),T(I,zI),T(g,AA),T(B,AA);const S=r.rawquerypipeline_castRayAndGetNormal(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E,t,o,!HA(D),HA(D)?0:D,!HA(a),HA(a)?0:a,!HA(s),HA(s)?0:s,vI(h));return S===0?void 0:Xo.__wrap(S)}finally{kI[dI++]=void 0}}intersectionsWithRay(A,I,g,B,E,t,o,D,a,s,h,S){try{T(A,XI),T(I,zI),T(g,AA),T(B,AA),r.rawquerypipeline_intersectionsWithRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E,t,vI(o),D,!HA(a),HA(a)?0:a,!HA(s),HA(s)?0:s,!HA(h),HA(h)?0:h,vI(S))}finally{kI[dI++]=void 0,kI[dI++]=void 0}}intersectionWithShape(A,I,g,B,E,t,o,D,a,s){try{const c=r.__wbindgen_add_to_stack_pointer(-16);T(A,XI),T(I,zI),T(g,AA),T(B,tI),T(E,PA),r.rawquerypipeline_intersectionWithShape(c,this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t,!HA(o),HA(o)?0:o,!HA(D),HA(D)?0:D,!HA(a),HA(a)?0:a,vI(s));var h=pI()[c/4+0],S=fo()[c/8+1];return h===0?void 0:S}finally{r.__wbindgen_add_to_stack_pointer(16),kI[dI++]=void 0}}projectPoint(A,I,g,B,E,t,o,D,a){try{T(A,XI),T(I,zI),T(g,AA);const s=r.rawquerypipeline_projectPoint(this.ptr,A.ptr,I.ptr,g.ptr,B,E,!HA(t),HA(t)?0:t,!HA(o),HA(o)?0:o,!HA(D),HA(D)?0:D,vI(a));return s===0?void 0:mo.__wrap(s)}finally{kI[dI++]=void 0}}projectPointAndGetFeature(A,I,g,B,E,t,o,D){try{T(A,XI),T(I,zI),T(g,AA);const a=r.rawquerypipeline_projectPointAndGetFeature(this.ptr,A.ptr,I.ptr,g.ptr,B,!HA(E),HA(E)?0:E,!HA(t),HA(t)?0:t,!HA(o),HA(o)?0:o,vI(D));return a===0?void 0:mo.__wrap(a)}finally{kI[dI++]=void 0}}intersectionsWithPoint(A,I,g,B,E,t,o,D,a){try{T(A,XI),T(I,zI),T(g,AA),r.rawquerypipeline_intersectionsWithPoint(this.ptr,A.ptr,I.ptr,g.ptr,vI(B),E,!HA(t),HA(t)?0:t,!HA(o),HA(o)?0:o,!HA(D),HA(D)?0:D,vI(a))}finally{kI[dI++]=void 0,kI[dI++]=void 0}}castShape(A,I,g,B,E,t,o,D,a,s,h,S){try{T(A,XI),T(I,zI),T(g,AA),T(B,tI),T(E,AA),T(t,PA);const c=r.rawquerypipeline_castShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o,D,!HA(a),HA(a)?0:a,!HA(s),HA(s)?0:s,!HA(h),HA(h)?0:h,vI(S));return c===0?void 0:At.__wrap(c)}finally{kI[dI++]=void 0}}intersectionsWithShape(A,I,g,B,E,t,o,D,a,s,h){try{T(A,XI),T(I,zI),T(g,AA),T(B,tI),T(E,PA),r.rawquerypipeline_intersectionsWithShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,vI(t),o,!HA(D),HA(D)?0:D,!HA(a),HA(a)?0:a,!HA(s),HA(s)?0:s,vI(h))}finally{kI[dI++]=void 0,kI[dI++]=void 0}}collidersWithAabbIntersectingAabb(A,I,g){try{T(A,AA),T(I,AA),r.rawquerypipeline_collidersWithAabbIntersectingAabb(this.ptr,A.ptr,I.ptr,vI(g))}finally{kI[dI++]=void 0}}}class Xo{static __wrap(A){const I=Object.create(Xo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawraycolliderintersection_free(A)}colliderHandle(){return r.rawcontactforceevent_collider1(this.ptr)}normal(){const A=r.rawraycolliderintersection_normal(this.ptr);return AA.__wrap(A)}toi(){return r.rawraycolliderintersection_toi(this.ptr)}featureType(){return r.rawpointcolliderprojection_featureType(this.ptr)>>>0}featureId(){try{const g=r.__wbindgen_add_to_stack_pointer(-16);r.rawpointcolliderprojection_featureId(g,this.ptr);var A=pI()[g/4+0],I=pI()[g/4+1];return A===0?void 0:I>>>0}finally{r.__wbindgen_add_to_stack_pointer(16)}}}class xa{static __wrap(A){const I=Object.create(xa.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawraycollidertoi_free(A)}colliderHandle(){return r.rawcontactforceevent_collider1(this.ptr)}toi(){return r.rawraycolliderintersection_toi(this.ptr)}}class $o{static __wrap(A){const I=Object.create($o.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawrayintersection_free(A)}normal(){const A=r.rawrayintersection_normal(this.ptr);return AA.__wrap(A)}toi(){return r.rawintegrationparameters_dt(this.ptr)}featureType(){return r.rawrayintersection_featureType(this.ptr)>>>0}featureId(){try{const g=r.__wbindgen_add_to_stack_pointer(-16);r.rawrayintersection_featureId(g,this.ptr);var A=pI()[g/4+0],I=pI()[g/4+1];return A===0?void 0:I>>>0}finally{r.__wbindgen_add_to_stack_pointer(16)}}}class XI{static __wrap(A){const I=Object.create(XI.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawrigidbodyset_free(A)}rbTranslation(A){const I=r.rawrigidbodyset_rbTranslation(this.ptr,A);return AA.__wrap(I)}rbRotation(A){const I=r.rawrigidbodyset_rbRotation(this.ptr,A);return tI.__wrap(I)}rbSleep(A){r.rawrigidbodyset_rbSleep(this.ptr,A)}rbIsSleeping(A){return r.rawrigidbodyset_rbIsSleeping(this.ptr,A)!==0}rbIsMoving(A){return r.rawrigidbodyset_rbIsMoving(this.ptr,A)!==0}rbNextTranslation(A){const I=r.rawrigidbodyset_rbNextTranslation(this.ptr,A);return AA.__wrap(I)}rbNextRotation(A){const I=r.rawrigidbodyset_rbNextRotation(this.ptr,A);return tI.__wrap(I)}rbSetTranslation(A,I,g,B,E){r.rawrigidbodyset_rbSetTranslation(this.ptr,A,I,g,B,E)}rbSetRotation(A,I,g,B,E,t){r.rawrigidbodyset_rbSetRotation(this.ptr,A,I,g,B,E,t)}rbSetLinvel(A,I,g){T(I,AA),r.rawrigidbodyset_rbSetLinvel(this.ptr,A,I.ptr,g)}rbSetAngvel(A,I,g){T(I,AA),r.rawrigidbodyset_rbSetAngvel(this.ptr,A,I.ptr,g)}rbSetNextKinematicTranslation(A,I,g,B){r.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr,A,I,g,B)}rbSetNextKinematicRotation(A,I,g,B,E){r.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr,A,I,g,B,E)}rbRecomputeMassPropertiesFromColliders(A,I){T(I,zI),r.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.ptr,A,I.ptr)}rbSetAdditionalMass(A,I,g){r.rawrigidbodyset_rbSetAdditionalMass(this.ptr,A,I,g)}rbSetAdditionalMassProperties(A,I,g,B,E,t){T(g,AA),T(B,AA),T(E,tI),r.rawrigidbodyset_rbSetAdditionalMassProperties(this.ptr,A,I,g.ptr,B.ptr,E.ptr,t)}rbLinvel(A){const I=r.rawrigidbodyset_rbLinvel(this.ptr,A);return AA.__wrap(I)}rbAngvel(A){const I=r.rawrigidbodyset_rbAngvel(this.ptr,A);return AA.__wrap(I)}rbLockTranslations(A,I,g){r.rawrigidbodyset_rbLockTranslations(this.ptr,A,I,g)}rbSetEnabledTranslations(A,I,g,B,E){r.rawrigidbodyset_rbSetEnabledTranslations(this.ptr,A,I,g,B,E)}rbLockRotations(A,I,g){r.rawrigidbodyset_rbLockRotations(this.ptr,A,I,g)}rbSetEnabledRotations(A,I,g,B,E){r.rawrigidbodyset_rbSetEnabledRotations(this.ptr,A,I,g,B,E)}rbDominanceGroup(A){return r.rawrigidbodyset_rbDominanceGroup(this.ptr,A)}rbSetDominanceGroup(A,I){r.rawrigidbodyset_rbSetDominanceGroup(this.ptr,A,I)}rbEnableCcd(A,I){r.rawrigidbodyset_rbEnableCcd(this.ptr,A,I)}rbMass(A){return r.rawrigidbodyset_rbMass(this.ptr,A)}rbWakeUp(A){r.rawrigidbodyset_rbWakeUp(this.ptr,A)}rbIsCcdEnabled(A){return r.rawrigidbodyset_rbIsCcdEnabled(this.ptr,A)!==0}rbNumColliders(A){return r.rawrigidbodyset_rbNumColliders(this.ptr,A)>>>0}rbCollider(A,I){return r.rawrigidbodyset_rbCollider(this.ptr,A,I)}rbBodyType(A){return r.rawrigidbodyset_rbBodyType(this.ptr,A)>>>0}rbSetBodyType(A,I){r.rawrigidbodyset_rbSetBodyType(this.ptr,A,I)}rbIsFixed(A){return r.rawrigidbodyset_rbIsFixed(this.ptr,A)!==0}rbIsKinematic(A){return r.rawrigidbodyset_rbIsKinematic(this.ptr,A)!==0}rbIsDynamic(A){return r.rawrigidbodyset_rbIsDynamic(this.ptr,A)!==0}rbLinearDamping(A){return r.rawrigidbodyset_rbLinearDamping(this.ptr,A)}rbAngularDamping(A){return r.rawrigidbodyset_rbAngularDamping(this.ptr,A)}rbSetLinearDamping(A,I){r.rawrigidbodyset_rbSetLinearDamping(this.ptr,A,I)}rbSetAngularDamping(A,I){r.rawrigidbodyset_rbSetAngularDamping(this.ptr,A,I)}rbGravityScale(A){return r.rawrigidbodyset_rbGravityScale(this.ptr,A)}rbSetGravityScale(A,I,g){r.rawrigidbodyset_rbSetGravityScale(this.ptr,A,I,g)}rbResetForces(A,I){r.rawrigidbodyset_rbResetForces(this.ptr,A,I)}rbResetTorques(A,I){r.rawrigidbodyset_rbResetTorques(this.ptr,A,I)}rbAddForce(A,I,g){T(I,AA),r.rawrigidbodyset_rbAddForce(this.ptr,A,I.ptr,g)}rbApplyImpulse(A,I,g){T(I,AA),r.rawrigidbodyset_rbApplyImpulse(this.ptr,A,I.ptr,g)}rbAddTorque(A,I,g){T(I,AA),r.rawrigidbodyset_rbAddTorque(this.ptr,A,I.ptr,g)}rbApplyTorqueImpulse(A,I,g){T(I,AA),r.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr,A,I.ptr,g)}rbAddForceAtPoint(A,I,g,B){T(I,AA),T(g,AA),r.rawrigidbodyset_rbAddForceAtPoint(this.ptr,A,I.ptr,g.ptr,B)}rbApplyImpulseAtPoint(A,I,g,B){T(I,AA),T(g,AA),r.rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr,A,I.ptr,g.ptr,B)}rbUserData(A){return r.rawrigidbodyset_rbUserData(this.ptr,A)>>>0}rbSetUserData(A,I){r.rawrigidbodyset_rbSetUserData(this.ptr,A,I)}constructor(){const A=r.rawrigidbodyset_new();return XI.__wrap(A)}createRigidBody(A,I,g,B,E,t,o,D,a,s,h,S,c,l,G,w,U,d,q,F,N,p,x){return T(A,AA),T(I,tI),T(t,AA),T(o,AA),T(D,AA),T(a,AA),T(s,tI),r.rawrigidbodyset_createRigidBody(this.ptr,A.ptr,I.ptr,g,B,E,t.ptr,o.ptr,D.ptr,a.ptr,s.ptr,h,S,c,l,G,w,U,d,q,F,N,p,x)}remove(A,I,g,B,E){T(I,UC),T(g,zI),T(B,YC),T(E,fC),r.rawrigidbodyset_remove(this.ptr,A,I.ptr,g.ptr,B.ptr,E.ptr)}len(){return r.rawrigidbodyset_len(this.ptr)>>>0}contains(A){return r.rawrigidbodyset_contains(this.ptr,A)!==0}forEachRigidBodyHandle(A){try{r.rawrigidbodyset_forEachRigidBodyHandle(this.ptr,vI(A))}finally{kI[dI++]=void 0}}}class tI{static __wrap(A){const I=Object.create(tI.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawrotation_free(A)}constructor(A,I,g,B){const E=r.rawrotation_new(A,I,g,B);return tI.__wrap(E)}static identity(){const A=r.rawrotation_identity();return tI.__wrap(A)}get x(){return r.rawintegrationparameters_dt(this.ptr)}get y(){return r.rawrotation_y(this.ptr)}get z(){return r.rawintegrationparameters_erp(this.ptr)}get w(){return r.rawrotation_w(this.ptr)}}class xo{static __wrap(A){const I=Object.create(xo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawserializationpipeline_free(A)}constructor(){const A=r.rawserializationpipeline_new();return xo.__wrap(A)}serializeAll(A,I,g,B,E,t,o,D,a){return T(A,AA),T(I,FB),T(g,UC),T(B,JB),T(E,QB),T(t,XI),T(o,zI),T(D,YC),T(a,fC),Yo(r.rawserializationpipeline_serializeAll(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o.ptr,D.ptr,a.ptr))}deserializeAll(A){const I=r.rawserializationpipeline_deserializeAll(this.ptr,Ag(A));return I===0?void 0:Ta.__wrap(I)}}class PA{static __wrap(A){const I=Object.create(PA.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawshape_free(A)}static cuboid(A,I,g){const B=r.rawshape_cuboid(A,I,g);return PA.__wrap(B)}static roundCuboid(A,I,g,B){const E=r.rawshape_roundCuboid(A,I,g,B);return PA.__wrap(E)}static ball(A){const I=r.rawshape_ball(A);return PA.__wrap(I)}static capsule(A,I){const g=r.rawshape_capsule(A,I);return PA.__wrap(g)}static cylinder(A,I){const g=r.rawshape_cylinder(A,I);return PA.__wrap(g)}static roundCylinder(A,I,g){const B=r.rawshape_roundCylinder(A,I,g);return PA.__wrap(B)}static cone(A,I){const g=r.rawshape_cone(A,I);return PA.__wrap(g)}static roundCone(A,I,g){const B=r.rawshape_roundCone(A,I,g);return PA.__wrap(B)}static polyline(A,I){const g=WB(A,r.__wbindgen_malloc),B=Wg,E=Go(I,r.__wbindgen_malloc),t=Wg,o=r.rawshape_polyline(g,B,E,t);return PA.__wrap(o)}static trimesh(A,I){const g=WB(A,r.__wbindgen_malloc),B=Wg,E=Go(I,r.__wbindgen_malloc),t=Wg,o=r.rawshape_trimesh(g,B,E,t);return PA.__wrap(o)}static heightfield(A,I,g,B){const E=WB(g,r.__wbindgen_malloc),t=Wg;T(B,AA);const o=r.rawshape_heightfield(A,I,E,t,B.ptr);return PA.__wrap(o)}static segment(A,I){T(A,AA),T(I,AA);const g=r.rawshape_segment(A.ptr,I.ptr);return PA.__wrap(g)}static triangle(A,I,g){T(A,AA),T(I,AA),T(g,AA);const B=r.rawshape_triangle(A.ptr,I.ptr,g.ptr);return PA.__wrap(B)}static roundTriangle(A,I,g,B){T(A,AA),T(I,AA),T(g,AA);const E=r.rawshape_roundTriangle(A.ptr,I.ptr,g.ptr,B);return PA.__wrap(E)}static convexHull(A){const I=WB(A,r.__wbindgen_malloc),g=Wg,B=r.rawshape_convexHull(I,g);return B===0?void 0:PA.__wrap(B)}static roundConvexHull(A,I){const g=WB(A,r.__wbindgen_malloc),B=Wg,E=r.rawshape_roundConvexHull(g,B,I);return E===0?void 0:PA.__wrap(E)}static convexMesh(A,I){const g=WB(A,r.__wbindgen_malloc),B=Wg,E=Go(I,r.__wbindgen_malloc),t=Wg,o=r.rawshape_convexMesh(g,B,E,t);return o===0?void 0:PA.__wrap(o)}static roundConvexMesh(A,I,g){const B=WB(A,r.__wbindgen_malloc),E=Wg,t=Go(I,r.__wbindgen_malloc),o=Wg,D=r.rawshape_roundConvexMesh(B,E,t,o,g);return D===0?void 0:PA.__wrap(D)}castShape(A,I,g,B,E,t,o,D){T(A,AA),T(I,tI),T(g,AA),T(B,PA),T(E,AA),T(t,tI),T(o,AA);const a=r.rawshape_castShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o.ptr,D);return a===0?void 0:It.__wrap(a)}intersectsShape(A,I,g,B,E){return T(A,AA),T(I,tI),T(g,PA),T(B,AA),T(E,tI),r.rawshape_intersectsShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr)!==0}contactShape(A,I,g,B,E,t){T(A,AA),T(I,tI),T(g,PA),T(B,AA),T(E,tI);const o=r.rawshape_contactShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t);return o===0?void 0:_E.__wrap(o)}containsPoint(A,I,g){return T(A,AA),T(I,tI),T(g,AA),r.rawshape_containsPoint(this.ptr,A.ptr,I.ptr,g.ptr)!==0}projectPoint(A,I,g,B){T(A,AA),T(I,tI),T(g,AA);const E=r.rawshape_projectPoint(this.ptr,A.ptr,I.ptr,g.ptr,B);return zo.__wrap(E)}intersectsRay(A,I,g,B,E){return T(A,AA),T(I,tI),T(g,AA),T(B,AA),r.rawshape_intersectsRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E)!==0}castRay(A,I,g,B,E,t){return T(A,AA),T(I,tI),T(g,AA),T(B,AA),r.rawshape_castRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E,t)}castRayAndGetNormal(A,I,g,B,E,t){T(A,AA),T(I,tI),T(g,AA),T(B,AA);const o=r.rawshape_castRayAndGetNormal(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E,t);return o===0?void 0:$o.__wrap(o)}}class At{static __wrap(A){const I=Object.create(At.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawshapecollidertoi_free(A)}colliderHandle(){return r.rawcontactforceevent_collider1(this.ptr)}toi(){return r.rawraycolliderintersection_toi(this.ptr)}witness1(){const A=r.rawraycolliderintersection_normal(this.ptr);return AA.__wrap(A)}witness2(){const A=r.rawshapecollidertoi_witness2(this.ptr);return AA.__wrap(A)}normal1(){const A=r.rawshapecollidertoi_normal1(this.ptr);return AA.__wrap(A)}normal2(){const A=r.rawshapecollidertoi_normal2(this.ptr);return AA.__wrap(A)}}class _E{static __wrap(A){const I=Object.create(_E.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawshapecontact_free(A)}distance(){return r.rawshapecontact_distance(this.ptr)}point1(){const A=r.rawpointprojection_point(this.ptr);return AA.__wrap(A)}point2(){const A=r.rawshapecontact_point2(this.ptr);return AA.__wrap(A)}normal1(){const A=r.rawshapecontact_normal1(this.ptr);return AA.__wrap(A)}normal2(){const A=r.rawshapecontact_normal2(this.ptr);return AA.__wrap(A)}}class It{static __wrap(A){const I=Object.create(It.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawshapetoi_free(A)}toi(){return r.rawintegrationparameters_dt(this.ptr)}witness1(){const A=r.rawrayintersection_normal(this.ptr);return AA.__wrap(A)}witness2(){const A=r.rawshapetoi_witness2(this.ptr);return AA.__wrap(A)}normal1(){const A=r.rawshapetoi_normal1(this.ptr);return AA.__wrap(A)}normal2(){const A=r.rawshapetoi_normal2(this.ptr);return AA.__wrap(A)}}class AA{static __wrap(A){const I=Object.create(AA.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();r.__wbg_rawvector_free(A)}static zero(){const A=r.rawvector_zero();return AA.__wrap(A)}constructor(A,I,g){const B=r.rawvector_new(A,I,g);return AA.__wrap(B)}get x(){return r.rawintegrationparameters_dt(this.ptr)}set x(A){r.rawintegrationparameters_set_dt(this.ptr,A)}get y(){return r.rawrotation_y(this.ptr)}set y(A){r.rawvector_set_y(this.ptr,A)}get z(){return r.rawintegrationparameters_erp(this.ptr)}set z(A){r.rawintegrationparameters_set_erp(this.ptr,A)}xyz(){const A=r.rawvector_xyz(this.ptr);return AA.__wrap(A)}yxz(){const A=r.rawvector_yxz(this.ptr);return AA.__wrap(A)}zxy(){const A=r.rawvector_zxy(this.ptr);return AA.__wrap(A)}xzy(){const A=r.rawvector_xzy(this.ptr);return AA.__wrap(A)}yzx(){const A=r.rawvector_yzx(this.ptr);return AA.__wrap(A)}zyx(){const A=r.rawvector_zyx(this.ptr);return AA.__wrap(A)}}async function jS(i){i===void 0&&(i=new URL("rapier_wasm3d_bg.wasm","<deleted>"));const A=function(){const B={wbg:{}};return B.wbg.__wbindgen_object_drop_ref=function(E){Yo(E)},B.wbg.__wbindgen_number_new=function(E){return Ag(E)},B.wbg.__wbindgen_number_get=function(E,t){const o=KI(t),D=typeof o=="number"?o:void 0;fo()[E/8+1]=HA(D)?0:D,pI()[E/4+0]=!HA(D)},B.wbg.__wbindgen_boolean_get=function(E){const t=KI(E);return typeof t=="boolean"?t?1:0:2},B.wbg.__wbg_rawraycolliderintersection_new=function(E){return Ag(Xo.__wrap(E))},B.wbg.__wbg_rawcontactforceevent_new=function(E){return Ag(ua.__wrap(E))},B.wbg.__wbindgen_is_function=function(E){return typeof KI(E)=="function"},B.wbg.__wbg_call_9855a4612eb496cb=function(){return $e(function(E,t,o){return Ag(KI(E).call(KI(t),KI(o)))},arguments)},B.wbg.__wbg_call_8e1338b908441bd2=function(){return $e(function(E,t,o,D){return Ag(KI(E).call(KI(t),KI(o),KI(D)))},arguments)},B.wbg.__wbg_call_0a54fa4fb42023f0=function(){return $e(function(E,t,o,D,a){return Ag(KI(E).call(KI(t),KI(o),KI(D),KI(a)))},arguments)},B.wbg.__wbg_bind_2ae44992222e2f45=function(E,t,o,D){return Ag(KI(E).bind(KI(t),KI(o),KI(D)))},B.wbg.__wbg_buffer_de1150f91b23aa89=function(E){return Ag(KI(E).buffer)},B.wbg.__wbg_newwithbyteoffsetandlength_9ca61320599a2c84=function(E,t,o){return Ag(new Uint8Array(KI(E),t>>>0,o>>>0))},B.wbg.__wbg_new_97cf52648830a70d=function(E){return Ag(new Uint8Array(KI(E)))},B.wbg.__wbg_set_a0172b213e2469e9=function(E,t,o){KI(E).set(KI(t),o>>>0)},B.wbg.__wbg_length_e09c0b925ab8de5d=function(E){return KI(E).length},B.wbg.__wbg_newwithbyteoffsetandlength_b0ff18b468a0d3f8=function(E,t,o){return Ag(new Float32Array(KI(E),t>>>0,o>>>0))},B.wbg.__wbg_set_66067e08ab6cefb5=function(E,t,o){KI(E).set(KI(t),o>>>0)},B.wbg.__wbg_length_211080f5c116c01f=function(E){return KI(E).length},B.wbg.__wbg_newwithlength_f28ac7a9191c7e26=function(E){return Ag(new Float32Array(E>>>0))},B.wbg.__wbindgen_throw=function(E,t){throw new Error(PS(E,t))},B.wbg.__wbindgen_memory=function(){return Ag(r.memory)},B}();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:I,module:g}=await async function(B,E){if(typeof Response=="function"&&B instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(B,E)}catch(o){if(B.headers.get("Content-Type")=="application/wasm")throw o;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o)}const t=await B.arrayBuffer();return await WebAssembly.instantiate(t,E)}{const t=await WebAssembly.instantiate(B,E);return t instanceof WebAssembly.Instance?{instance:t,module:B}:t}}(await i,A);return function(B,E){return r=B.exports,jS.__wbindgen_wasm_module=E,No=new Float32Array(r.memory.buffer),Mo=new Float64Array(r.memory.buffer),Uo=new Int32Array(r.memory.buffer),Jo=new Uint32Array(r.memory.buffer),Ko=new Uint8Array(r.memory.buffer),r}(I,g)}class _S{constructor(A,I,g){this.x=A,this.y=I,this.z=g}}class z{static new(A,I,g){return new _S(A,I,g)}static intoRaw(A){return new AA(A.x,A.y,A.z)}static zeros(){return z.new(0,0,0)}static fromRaw(A){if(!A)return null;let I=z.new(A.x,A.y,A.z);return A.free(),I}static copy(A,I){A.x=I.x,A.y=I.y,A.z=I.z}}class na{constructor(A,I,g,B){this.x=A,this.y=I,this.z=g,this.w=B}}class QI{static identity(){return new na(0,0,0,1)}static fromRaw(A){if(!A)return null;let I=new na(A.x,A.y,A.z,A.w);return A.free(),I}static intoRaw(A){return new tI(A.x,A.y,A.z,A.w)}static copy(A,I){A.x=I.x,A.y=I.y,A.z=I.z,A.w=I.w}}var rC,Qg,ha,zE,QE,SI,Oo,AQ,Sa,wa,Ga,ra;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(rC||(rC={}));class ca{constructor(A,I,g){this.rawSet=A,this.colliderSet=I,this.handle=g}finalizeDeserialization(A){this.colliderSet=A}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(A,I){return this.rawSet.rbLockTranslations(this.handle,A,I)}lockRotations(A,I){return this.rawSet.rbLockRotations(this.handle,A,I)}setEnabledTranslations(A,I,g,B){return this.rawSet.rbSetEnabledTranslations(this.handle,A,I,g,B)}restrictTranslations(A,I,g,B){this.setEnabledTranslations(A,I,g,B)}setEnabledRotations(A,I,g,B){return this.rawSet.rbSetEnabledRotations(this.handle,A,I,g,B)}restrictRotations(A,I,g,B){this.setEnabledRotations(A,I,g,B)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(A){this.rawSet.rbSetDominanceGroup(this.handle,A)}enableCcd(A){this.rawSet.rbEnableCcd(this.handle,A)}translation(){let A=this.rawSet.rbTranslation(this.handle);return z.fromRaw(A)}rotation(){let A=this.rawSet.rbRotation(this.handle);return QI.fromRaw(A)}nextTranslation(){let A=this.rawSet.rbNextTranslation(this.handle);return z.fromRaw(A)}nextRotation(){let A=this.rawSet.rbNextRotation(this.handle);return QI.fromRaw(A)}setTranslation(A,I){this.rawSet.rbSetTranslation(this.handle,A.x,A.y,A.z,I)}setLinvel(A,I){let g=z.intoRaw(A);this.rawSet.rbSetLinvel(this.handle,g,I),g.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(A,I){this.rawSet.rbSetGravityScale(this.handle,A,I)}setRotation(A,I){this.rawSet.rbSetRotation(this.handle,A.x,A.y,A.z,A.w,I)}setAngvel(A,I){let g=z.intoRaw(A);this.rawSet.rbSetAngvel(this.handle,g,I),g.free()}setNextKinematicTranslation(A){this.rawSet.rbSetNextKinematicTranslation(this.handle,A.x,A.y,A.z)}setNextKinematicRotation(A){this.rawSet.rbSetNextKinematicRotation(this.handle,A.x,A.y,A.z,A.w)}linvel(){return z.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return z.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(A){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,A))}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(A){return this.rawSet.rbSetBodyType(this.handle,A)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(A){this.rawSet.rbSetLinearDamping(this.handle,A)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(A,I){this.rawSet.rbSetAdditionalMass(this.handle,A,I)}setAdditionalMassProperties(A,I,g,B,E){let t=z.intoRaw(I),o=z.intoRaw(g),D=QI.intoRaw(B);this.rawSet.rbSetAdditionalMassProperties(this.handle,A,t,o,D,E),t.free(),o.free(),D.free()}setAngularDamping(A){this.rawSet.rbSetAngularDamping(this.handle,A)}resetForces(A){this.rawSet.rbResetForces(this.handle,A)}resetTorques(A){this.rawSet.rbResetTorques(this.handle,A)}addForce(A,I){const g=z.intoRaw(A);this.rawSet.rbAddForce(this.handle,g,I),g.free()}applyImpulse(A,I){const g=z.intoRaw(A);this.rawSet.rbApplyImpulse(this.handle,g,I),g.free()}addTorque(A,I){const g=z.intoRaw(A);this.rawSet.rbAddTorque(this.handle,g,I),g.free()}applyTorqueImpulse(A,I){const g=z.intoRaw(A);this.rawSet.rbApplyTorqueImpulse(this.handle,g,I),g.free()}addForceAtPoint(A,I,g){const B=z.intoRaw(A),E=z.intoRaw(I);this.rawSet.rbAddForceAtPoint(this.handle,B,E,g),B.free(),E.free()}applyImpulseAtPoint(A,I,g){const B=z.intoRaw(A),E=z.intoRaw(I);this.rawSet.rbApplyImpulseAtPoint(this.handle,B,E,g),B.free(),E.free()}}class cC{constructor(A){this.status=A,this.translation=z.zeros(),this.rotation=QI.identity(),this.gravityScale=1,this.linvel=z.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=z.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=z.zeros(),this.principalAngularInertia=z.zeros(),this.angularInertiaLocalFrame=QI.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.dominanceGroup=0}static dynamic(){return new cC(rC.Dynamic)}static kinematicPositionBased(){return new cC(rC.KinematicPositionBased)}static kinematicVelocityBased(){return new cC(rC.KinematicVelocityBased)}static fixed(){return new cC(rC.Fixed)}static newDynamic(){return new cC(rC.Dynamic)}static newKinematicPositionBased(){return new cC(rC.KinematicPositionBased)}static newKinematicVelocityBased(){return new cC(rC.KinematicVelocityBased)}static newStatic(){return new cC(rC.Fixed)}setDominanceGroup(A){return this.dominanceGroup=A,this}setTranslation(A,I,g){if(typeof A!="number"||typeof I!="number"||typeof g!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:A,y:I,z:g},this}setRotation(A){return QI.copy(this.rotation,A),this}setGravityScale(A){return this.gravityScale=A,this}setAdditionalMass(A){return this.mass=A,this.massOnly=!0,this}setLinvel(A,I,g){if(typeof A!="number"||typeof I!="number"||typeof g!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:A,y:I,z:g},this}setAngvel(A){return z.copy(this.angvel,A),this}setAdditionalMassProperties(A,I,g,B){return this.mass=A,z.copy(this.centerOfMass,I),z.copy(this.principalAngularInertia,g),QI.copy(this.angularInertiaLocalFrame,B),this.massOnly=!1,this}enabledTranslations(A,I,g){return this.translationsEnabledX=A,this.translationsEnabledY=I,this.translationsEnabledZ=g,this}restrictTranslations(A,I,g){return this.enabledTranslations(A,I,g)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(A,I,g){return this.rotationsEnabledX=A,this.rotationsEnabledY=I,this.rotationsEnabledZ=g,this}restrictRotations(A,I,g){return this.enabledRotations(A,I,g)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(A){return this.linearDamping=A,this}setAngularDamping(A){return this.angularDamping=A,this}setCanSleep(A){return this.canSleep=A,this}setSleeping(A){return this.sleeping=A,this}setCcdEnabled(A){return this.ccdEnabled=A,this}setUserData(A){return this.userData=A,this}}class gt{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(A,I){let g=this.index(A);for(;this.data.length<=g;)this.data.push(null);this.data[g]==null&&(this.size+=1),this.data[g]=I}len(){return this.size}delete(A){let I=this.index(A);I<this.data.length&&(this.data[I]!=null&&(this.size-=1),this.data[I]=null)}clear(){this.data=new Array}get(A){let I=this.index(A);return I<this.data.length?this.data[I]:null}forEach(A){for(const I of this.data)I!=null&&A(I)}getAll(){return this.data.filter(A=>A!=null)}index(A){return this.fconv[0]=A,this.uconv[0]}}class zS{constructor(A){this.raw=A||new XI,this.map=new gt,A&&A.forEachRigidBodyHandle(I=>{this.map.set(I,new ca(A,null,I))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}finalizeDeserialization(A){this.map.forEach(I=>I.finalizeDeserialization(A))}createRigidBody(A,I){let g=z.intoRaw(I.translation),B=QI.intoRaw(I.rotation),E=z.intoRaw(I.linvel),t=z.intoRaw(I.centerOfMass),o=z.intoRaw(I.angvel),D=z.intoRaw(I.principalAngularInertia),a=QI.intoRaw(I.angularInertiaLocalFrame),s=this.raw.createRigidBody(g,B,I.gravityScale,I.mass,I.massOnly,t,E,o,D,a,I.translationsEnabledX,I.translationsEnabledY,I.translationsEnabledZ,I.rotationsEnabledX,I.rotationsEnabledY,I.rotationsEnabledZ,I.linearDamping,I.angularDamping,I.status,I.canSleep,I.sleeping,I.ccdEnabled,I.dominanceGroup);g.free(),B.free(),E.free(),t.free(),o.free(),D.free(),a.free();const h=new ca(this.raw,A,s);return h.userData=I.userData,this.map.set(s,h),h}remove(A,I,g,B,E){for(let t=0;t<this.raw.rbNumColliders(A);t+=1)g.unmap(this.raw.rbCollider(A,t));B.forEachJointHandleAttachedToRigidBody(A,t=>B.unmap(t)),E.forEachJointHandleAttachedToRigidBody(A,t=>E.unmap(t)),this.raw.remove(A,I.raw,g.raw,B.raw,E.raw),this.map.delete(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}get(A){return this.map.get(A)}forEach(A){this.map.forEach(A)}forEachActiveRigidBody(A,I){A.forEachActiveRigidBodyHandle(g=>{I(this.get(g))})}getAll(){return this.map.getAll()}}class XS{constructor(A){this.raw=A||new FB}free(){this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get erp(){return this.raw.erp}get allowedLinearError(){return this.raw.allowedLinearError}get predictionDistance(){return this.raw.predictionDistance}get maxVelocityIterations(){return this.raw.maxVelocityIterations}get maxVelocityFrictionIterations(){return this.raw.maxVelocityFrictionIterations}get maxStabilizationIterations(){return this.raw.maxStabilizationIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(A){this.raw.dt=A}set erp(A){this.raw.erp=A}set allowedLinearError(A){this.raw.allowedLinearError=A}set predictionDistance(A){this.raw.predictionDistance=A}set maxVelocityIterations(A){this.raw.maxVelocityIterations=A}set maxVelocityFrictionIterations(A){this.raw.maxVelocityFrictionIterations=A}set maxStabilizationIterations(A){this.raw.maxStabilizationIterations=A}set minIslandSize(A){this.raw.minIslandSize=A}set maxCcdSubsteps(A){this.raw.maxCcdSubsteps=A}}(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Spherical=3]="Spherical"})(Qg||(Qg={})),function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"}(ha||(ha={}));class RB{constructor(A,I,g){this.rawSet=A,this.bodySet=I,this.handle=g}static newTyped(A,I,g){switch(A.jointType(g)){case Qg.Revolute:return new Iw(A,I,g);case Qg.Prismatic:return new Aw(A,I,g);case Qg.Fixed:return new $S(A,I,g);case Qg.Spherical:return new gw(A,I,g);default:return new RB(A,I,g)}}finalizeDeserialization(A){this.bodySet=A}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return QI.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return QI.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return z.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return z.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(A){const I=z.intoRaw(A);this.rawSet.jointSetAnchor1(this.handle,I),I.free()}setAnchor2(A){const I=z.intoRaw(A);this.rawSet.jointSetAnchor2(this.handle,I),I.free()}setContactsEnabled(A){this.rawSet.jointSetContactsEnabled(this.handle,A)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Oa extends RB{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(A,I){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),A,I)}configureMotorModel(A){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),A)}configureMotorVelocity(A,I){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),A,I)}configureMotorPosition(A,I,g){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),A,I,g)}configureMotor(A,I,g,B){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),A,I,g,B)}}class $S extends RB{}class Aw extends Oa{rawAxis(){return _o.X}}class Iw extends Oa{rawAxis(){return _o.AngX}}class gw extends RB{}class VQ{constructor(){}static fixed(A,I,g,B){let E=new VQ;return E.anchor1=A,E.anchor2=g,E.frame1=I,E.frame2=B,E.jointType=Qg.Fixed,E}static spherical(A,I){let g=new VQ;return g.anchor1=A,g.anchor2=I,g.jointType=Qg.Spherical,g}static prismatic(A,I,g){let B=new VQ;return B.anchor1=A,B.anchor2=I,B.axis=g,B.jointType=Qg.Prismatic,B}static revolute(A,I,g){let B=new VQ;return B.anchor1=A,B.anchor2=I,B.axis=g,B.jointType=Qg.Revolute,B}intoRaw(){let A,I,g=z.intoRaw(this.anchor1),B=z.intoRaw(this.anchor2),E=!1,t=0,o=0;switch(this.jointType){case Qg.Fixed:let D=QI.intoRaw(this.frame1),a=QI.intoRaw(this.frame2);I=EC.fixed(g,D,B,a),D.free(),a.free();break;case Qg.Prismatic:A=z.intoRaw(this.axis),this.limitsEnabled&&(E=!0,t=this.limits[0],o=this.limits[1]),I=EC.prismatic(g,B,A,E,t,o),A.free();break;case Qg.Spherical:I=EC.spherical(g,B);break;case Qg.Revolute:A=z.intoRaw(this.axis),I=EC.revolute(g,B,A),A.free()}return g.free(),B.free(),I}}class Cw{constructor(A){this.raw=A||new YC,this.map=new gt,A&&A.forEachJointHandle(I=>{this.map.set(I,RB.newTyped(A,null,I))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}finalizeDeserialization(A){this.map.forEach(I=>I.finalizeDeserialization(A))}createJoint(A,I,g,B,E){const t=I.intoRaw(),o=this.raw.createJoint(t,g,B,E);t.free();let D=RB.newTyped(this.raw,A,o);return this.map.set(o,D),D}remove(A,I){this.raw.remove(A,I),this.unmap(A)}forEachJointHandleAttachedToRigidBody(A,I){this.raw.forEachJointAttachedToRigidBody(A,I)}unmap(A){this.map.delete(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}get(A){return this.map.get(A)}forEach(A){this.map.forEach(A)}getAll(){return this.map.getAll()}}class qB{constructor(A,I){this.rawSet=A,this.handle=I}static newTyped(A,I){switch(A.jointType(I)){case Qg.Revolute:return new Ew(A,I);case Qg.Prismatic:return new Qw(A,I);case Qg.Fixed:return new Bw(A,I);case Qg.Spherical:return new iw(A,I);default:return new qB(A,I)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(A){this.rawSet.jointSetContactsEnabled(this.handle,A)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class ba extends qB{}class Bw extends qB{}class Qw extends ba{rawAxis(){return _o.X}}class Ew extends ba{rawAxis(){return _o.AngX}}class iw extends qB{}class ow{constructor(A){this.raw=A||new fC,this.map=new gt,A&&A.forEachJointHandle(I=>{this.map.set(I,qB.newTyped(this.raw,I))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}createJoint(A,I,g,B){const E=A.intoRaw(),t=this.raw.createJoint(E,I,g,B);E.free();let o=qB.newTyped(this.raw,t);return this.map.set(t,o),o}remove(A,I){this.raw.remove(A,I),this.map.delete(A)}unmap(A){this.map.delete(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}get(A){return this.map.get(A)}forEach(A){this.map.forEach(A)}forEachJointHandleAttachedToRigidBody(A,I){this.raw.forEachJointAttachedToRigidBody(A,I)}getAll(){return this.map.getAll()}}(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(zE||(zE={}));class tw{constructor(A){this.raw=A||new BE}free(){this.raw.free(),this.raw=void 0}}class ew{constructor(A){this.raw=A||new UC}free(){this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(A){this.raw.forEachActiveRigidBodyHandle(A)}}class aw{constructor(A){this.raw=A||new JB}free(){this.raw.free(),this.raw=void 0}}class Dw{constructor(A){this.raw=A||new QB,this.tempManifold=new sw(null)}free(){this.raw.free(),this.raw=void 0}contactsWith(A,I){this.raw.contacts_with(A,I)}intersectionsWith(A,I){this.raw.intersections_with(A,I)}contactPair(A,I,g){const B=this.raw.contact_pair(A,I);if(B){const E=B.collider1()!=A;let t;for(t=0;t<B.numContactManifolds();++t)this.tempManifold.raw=B.contactManifold(t),this.tempManifold.raw&&g(this.tempManifold,E),this.tempManifold.free();B.free()}}intersectionPair(A,I){return this.raw.intersection_pair(A,I)}}class sw{constructor(A){this.raw=A}free(){this.raw.free(),this.raw=void 0}normal(){return z.fromRaw(this.raw.normal())}localNormal1(){return z.fromRaw(this.raw.local_n1())}localNormal2(){return z.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(A){return z.fromRaw(this.raw.contact_local_p1(A))}localContactPoint2(A){return z.fromRaw(this.raw.contact_local_p2(A))}contactDist(A){return this.raw.contact_dist(A)}contactFid1(A){return this.raw.contact_fid1(A)}contactFid2(A){return this.raw.contact_fid2(A)}contactImpulse(A){return this.raw.contact_impulse(A)}contactTangentImpulseX(A){return this.raw.contact_tangent_impulse_x(A)}contactTangentImpulseY(A){return this.raw.contact_tangent_impulse_y(A)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(A){return z.fromRaw(this.raw.solver_contact_point(A))}solverContactDist(A){return this.raw.solver_contact_dist(A)}solverContactFriction(A){return this.raw.solver_contact_friction(A)}solverContactRestitution(A){return this.raw.solver_contact_restitution(A)}solverContactTangentVelocity(A){return z.fromRaw(this.raw.solver_contact_tangent_velocity(A))}}class EE{constructor(A,I,g,B,E){this.distance=A,this.point1=I,this.point2=g,this.normal1=B,this.normal2=E}static fromRaw(A){if(!A)return null;const I=new EE(A.distance(),z.fromRaw(A.point1()),z.fromRaw(A.point2()),z.fromRaw(A.normal1()),z.fromRaw(A.normal2()));return A.free(),I}}(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(QE||(QE={}));class Bi{constructor(A,I){this.point=A,this.isInside=I}static fromRaw(A){if(!A)return null;const I=new Bi(z.fromRaw(A.point()),A.isInside());return A.free(),I}}class XE{constructor(A,I,g,B,E){this.featureType=QE.Unknown,this.featureId=void 0,this.collider=A,this.point=I,this.isInside=g,E!==void 0&&(this.featureId=E),B!==void 0&&(this.featureType=B)}static fromRaw(A,I){if(!I)return null;const g=new XE(A.get(I.colliderHandle()),z.fromRaw(I.point()),I.isInside(),I.featureType(),I.featureId());return I.free(),g}}class TF{constructor(A,I){this.origin=A,this.dir=I}pointAt(A){return{x:this.origin.x+this.dir.x*A,y:this.origin.y+this.dir.y*A,z:this.origin.z+this.dir.z*A}}}class Qi{constructor(A,I,g,B){this.featureType=QE.Unknown,this.featureId=void 0,this.toi=A,this.normal=I,B!==void 0&&(this.featureId=B),g!==void 0&&(this.featureType=g)}static fromRaw(A){if(!A)return null;const I=new Qi(A.toi(),z.fromRaw(A.normal()),A.featureType(),A.featureId());return A.free(),I}}class $E{constructor(A,I,g,B,E){this.featureType=QE.Unknown,this.featureId=void 0,this.collider=A,this.toi=I,this.normal=g,E!==void 0&&(this.featureId=E),B!==void 0&&(this.featureType=B)}static fromRaw(A,I){if(!I)return null;const g=new $E(A.get(I.colliderHandle()),I.toi(),z.fromRaw(I.normal()),I.featureType(),I.featureId());return I.free(),g}}class Ct{constructor(A,I){this.collider=A,this.toi=I}static fromRaw(A,I){if(!I)return null;const g=new Ct(A.get(I.colliderHandle()),I.toi());return I.free(),g}}class aE{constructor(A,I,g,B,E){this.toi=A,this.witness1=I,this.witness2=g,this.normal1=B,this.normal2=E}static fromRaw(A,I){if(!I)return null;const g=new aE(I.toi(),z.fromRaw(I.witness1()),z.fromRaw(I.witness2()),z.fromRaw(I.normal1()),z.fromRaw(I.normal2()));return I.free(),g}}class Ei extends aE{constructor(A,I,g,B,E,t){super(I,g,B,E,t),this.collider=A}static fromRaw(A,I){if(!I)return null;const g=new Ei(A.get(I.colliderHandle()),I.toi(),z.fromRaw(I.witness1()),z.fromRaw(I.witness2()),z.fromRaw(I.normal1()),z.fromRaw(I.normal2()));return I.free(),g}}class Dg{static fromRaw(A,I){const g=A.coShapeType(I);let B,E,t,o,D,a;switch(g){case SI.Ball:return new Za(A.coRadius(I));case SI.Cuboid:return B=A.coHalfExtents(I),new Wa(B.x,B.y,B.z);case SI.RoundCuboid:return B=A.coHalfExtents(I),E=A.coRoundRadius(I),new va(B.x,B.y,B.z,E);case SI.Capsule:return D=A.coHalfHeight(I),a=A.coRadius(I),new Pa(D,a);case SI.Segment:return t=A.coVertices(I),new Va(z.new(t[0],t[1],t[2]),z.new(t[3],t[4],t[5]));case SI.Polyline:return t=A.coVertices(I),o=A.coIndices(I),new za(t,o);case SI.Triangle:return t=A.coVertices(I),new ja(z.new(t[0],t[1],t[2]),z.new(t[3],t[4],t[5]),z.new(t[6],t[7],t[8]));case SI.RoundTriangle:return t=A.coVertices(I),E=A.coRoundRadius(I),new _a(z.new(t[0],t[1],t[2]),z.new(t[3],t[4],t[5]),z.new(t[6],t[7],t[8]),E);case SI.TriMesh:return t=A.coVertices(I),o=A.coIndices(I),new Xa(t,o);case SI.HeightField:const s=A.coHeightfieldScale(I),h=A.coHeightfieldHeights(I),S=A.coHeightfieldNRows(I),c=A.coHeightfieldNCols(I);return new $a(S,c,h,s);case SI.ConvexPolyhedron:return t=A.coVertices(I),o=A.coIndices(I),new bo(t,o);case SI.RoundConvexPolyhedron:return t=A.coVertices(I),o=A.coIndices(I),E=A.coRoundRadius(I),new Zo(t,o,E);case SI.Cylinder:return D=A.coHalfHeight(I),a=A.coRadius(I),new AD(D,a);case SI.RoundCylinder:return D=A.coHalfHeight(I),a=A.coRadius(I),E=A.coRoundRadius(I),new ID(D,a,E);case SI.Cone:return D=A.coHalfHeight(I),a=A.coRadius(I),new gD(D,a);case SI.RoundCone:return D=A.coHalfHeight(I),a=A.coRadius(I),E=A.coRoundRadius(I),new CD(D,a,E);default:throw new Error("unknown shape type: "+g)}}castShape(A,I,g,B,E,t,o,D){let a=z.intoRaw(A),s=QI.intoRaw(I),h=z.intoRaw(g),S=z.intoRaw(E),c=QI.intoRaw(t),l=z.intoRaw(o),G=this.intoRaw(),w=B.intoRaw(),U=aE.fromRaw(null,G.castShape(a,s,h,w,S,c,l,D));return a.free(),s.free(),h.free(),S.free(),c.free(),l.free(),G.free(),w.free(),U}intersectsShape(A,I,g,B,E){let t=z.intoRaw(A),o=QI.intoRaw(I),D=z.intoRaw(B),a=QI.intoRaw(E),s=this.intoRaw(),h=g.intoRaw(),S=s.intersectsShape(t,o,h,D,a);return t.free(),o.free(),D.free(),a.free(),s.free(),h.free(),S}contactShape(A,I,g,B,E,t){let o=z.intoRaw(A),D=QI.intoRaw(I),a=z.intoRaw(B),s=QI.intoRaw(E),h=this.intoRaw(),S=g.intoRaw(),c=EE.fromRaw(h.contactShape(o,D,S,a,s,t));return o.free(),D.free(),a.free(),s.free(),h.free(),S.free(),c}containsPoint(A,I,g){let B=z.intoRaw(A),E=QI.intoRaw(I),t=z.intoRaw(g),o=this.intoRaw(),D=o.containsPoint(B,E,t);return B.free(),E.free(),t.free(),o.free(),D}projectPoint(A,I,g,B){let E=z.intoRaw(A),t=QI.intoRaw(I),o=z.intoRaw(g),D=this.intoRaw(),a=Bi.fromRaw(D.projectPoint(E,t,o,B));return E.free(),t.free(),o.free(),D.free(),a}intersectsRay(A,I,g,B){let E=z.intoRaw(I),t=QI.intoRaw(g),o=z.intoRaw(A.origin),D=z.intoRaw(A.dir),a=this.intoRaw(),s=a.intersectsRay(E,t,o,D,B);return E.free(),t.free(),o.free(),D.free(),a.free(),s}castRay(A,I,g,B,E){let t=z.intoRaw(I),o=QI.intoRaw(g),D=z.intoRaw(A.origin),a=z.intoRaw(A.dir),s=this.intoRaw(),h=s.castRay(t,o,D,a,B,E);return t.free(),o.free(),D.free(),a.free(),s.free(),h}castRayAndGetNormal(A,I,g,B,E){let t=z.intoRaw(I),o=QI.intoRaw(g),D=z.intoRaw(A.origin),a=z.intoRaw(A.dir),s=this.intoRaw(),h=Qi.fromRaw(s.castRayAndGetNormal(t,o,D,a,B,E));return t.free(),o.free(),D.free(),a.free(),s.free(),h}}(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron"})(SI||(SI={}));class Za extends Dg{constructor(A){super(),this.type=SI.Ball,this.radius=A}intoRaw(){return PA.ball(this.radius)}}class Wa extends Dg{constructor(A,I,g){super(),this.type=SI.Cuboid,this.halfExtents=z.new(A,I,g)}intoRaw(){return PA.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class va extends Dg{constructor(A,I,g,B){super(),this.type=SI.RoundCuboid,this.halfExtents=z.new(A,I,g),this.borderRadius=B}intoRaw(){return PA.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class Pa extends Dg{constructor(A,I){super(),this.type=SI.Capsule,this.halfHeight=A,this.radius=I}intoRaw(){return PA.capsule(this.halfHeight,this.radius)}}class Va extends Dg{constructor(A,I){super(),this.type=SI.Segment,this.a=A,this.b=I}intoRaw(){let A=z.intoRaw(this.a),I=z.intoRaw(this.b),g=PA.segment(A,I);return A.free(),I.free(),g}}class ja extends Dg{constructor(A,I,g){super(),this.type=SI.Triangle,this.a=A,this.b=I,this.c=g}intoRaw(){let A=z.intoRaw(this.a),I=z.intoRaw(this.b),g=z.intoRaw(this.c),B=PA.triangle(A,I,g);return A.free(),I.free(),g.free(),B}}class _a extends Dg{constructor(A,I,g,B){super(),this.type=SI.RoundTriangle,this.a=A,this.b=I,this.c=g,this.borderRadius=B}intoRaw(){let A=z.intoRaw(this.a),I=z.intoRaw(this.b),g=z.intoRaw(this.c),B=PA.roundTriangle(A,I,g,this.borderRadius);return A.free(),I.free(),g.free(),B}}class za extends Dg{constructor(A,I){super(),this.type=SI.Polyline,this.vertices=A,this.indices=I!=null?I:new Uint32Array(0)}intoRaw(){return PA.polyline(this.vertices,this.indices)}}class Xa extends Dg{constructor(A,I){super(),this.type=SI.TriMesh,this.vertices=A,this.indices=I}intoRaw(){return PA.trimesh(this.vertices,this.indices)}}class bo extends Dg{constructor(A,I){super(),this.type=SI.ConvexPolyhedron,this.vertices=A,this.indices=I}intoRaw(){return this.indices?PA.convexMesh(this.vertices,this.indices):PA.convexHull(this.vertices)}}class Zo extends Dg{constructor(A,I,g){super(),this.type=SI.RoundConvexPolyhedron,this.vertices=A,this.indices=I,this.borderRadius=g}intoRaw(){return this.indices?PA.roundConvexMesh(this.vertices,this.indices,this.borderRadius):PA.roundConvexHull(this.vertices,this.borderRadius)}}class $a extends Dg{constructor(A,I,g,B){super(),this.type=SI.HeightField,this.nrows=A,this.ncols=I,this.heights=g,this.scale=B}intoRaw(){let A=z.intoRaw(this.scale),I=PA.heightfield(this.nrows,this.ncols,this.heights,A);return A.free(),I}}class AD extends Dg{constructor(A,I){super(),this.type=SI.Cylinder,this.halfHeight=A,this.radius=I}intoRaw(){return PA.cylinder(this.halfHeight,this.radius)}}class ID extends Dg{constructor(A,I,g){super(),this.type=SI.RoundCylinder,this.borderRadius=g,this.halfHeight=A,this.radius=I}intoRaw(){return PA.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class gD extends Dg{constructor(A,I){super(),this.type=SI.Cone,this.halfHeight=A,this.radius=I}intoRaw(){return PA.cone(this.halfHeight,this.radius)}}class CD extends Dg{constructor(A,I,g){super(),this.type=SI.RoundCone,this.halfHeight=A,this.radius=I,this.borderRadius=g}intoRaw(){return PA.roundCone(this.halfHeight,this.radius,this.borderRadius)}}(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(Oo||(Oo={}));class ka{constructor(A,I,g,B){this.colliderSet=A,this.handle=I,this._parent=g,this._shape=B}finalizeDeserialization(A){this.handle!=null&&(this._parent=A.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=Dg.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return z.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return QI.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(A){this.colliderSet.raw.coSetSensor(this.handle,A)}setShape(A){let I=A.intoRaw();this.colliderSet.raw.coSetShape(this.handle,I),I.free(),this._shape=A}setRestitution(A){this.colliderSet.raw.coSetRestitution(this.handle,A)}setFriction(A){this.colliderSet.raw.coSetFriction(this.handle,A)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(A){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,A)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(A){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,A)}setCollisionGroups(A){this.colliderSet.raw.coSetCollisionGroups(this.handle,A)}setSolverGroups(A){this.colliderSet.raw.coSetSolverGroups(this.handle,A)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(A){this.colliderSet.raw.coSetActiveHooks(this.handle,A)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(A){this.colliderSet.raw.coSetActiveEvents(this.handle,A)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(A){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,A)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(A){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,A)}setDensity(A){this.colliderSet.raw.coSetDensity(this.handle,A)}setMass(A){this.colliderSet.raw.coSetMass(this.handle,A)}setMassProperties(A,I,g,B){let E=z.intoRaw(I),t=z.intoRaw(g),o=QI.intoRaw(B);this.colliderSet.raw.coSetMassProperties(this.handle,A,E,t,o),E.free(),t.free(),o.free()}setTranslation(A){this.colliderSet.raw.coSetTranslation(this.handle,A.x,A.y,A.z)}setTranslationWrtParent(A){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,A.x,A.y,A.z)}setRotation(A){this.colliderSet.raw.coSetRotation(this.handle,A.x,A.y,A.z,A.w)}setRotationWrtParent(A){this.colliderSet.raw.coSetRotationWrtParent(this.handle,A.x,A.y,A.z,A.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return z.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}radius(){return this.colliderSet.raw.coRadius(this.handle)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let A=this.colliderSet.raw.coHeightfieldScale(this.handle);return z.fromRaw(A)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(A){let I=z.intoRaw(A),g=this.colliderSet.raw.coContainsPoint(this.handle,I);return I.free(),g}projectPoint(A,I){let g=z.intoRaw(A),B=Bi.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,g,I));return g.free(),B}intersectsRay(A,I){let g=z.intoRaw(A.origin),B=z.intoRaw(A.dir),E=this.colliderSet.raw.coIntersectsRay(this.handle,g,B,I);return g.free(),B.free(),E}castShape(A,I,g,B,E,t){let o=z.intoRaw(A),D=z.intoRaw(g),a=QI.intoRaw(B),s=z.intoRaw(E),h=I.intoRaw(),S=aE.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,o,h,D,a,s,t));return o.free(),D.free(),a.free(),s.free(),h.free(),S}castCollider(A,I,g,B){let E=z.intoRaw(A),t=z.intoRaw(g),o=Ei.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,E,I.handle,t,B));return E.free(),t.free(),o}intersectsShape(A,I,g){let B=z.intoRaw(I),E=QI.intoRaw(g),t=A.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,t,B,E);return B.free(),E.free(),t.free(),o}contactShape(A,I,g,B){let E=z.intoRaw(I),t=QI.intoRaw(g),o=A.intoRaw(),D=EE.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,E,t,B));return E.free(),t.free(),o.free(),D}contactCollider(A,I){return EE.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,A.handle,I))}castRay(A,I,g){let B=z.intoRaw(A.origin),E=z.intoRaw(A.dir),t=this.colliderSet.raw.coCastRay(this.handle,B,E,I,g);return B.free(),E.free(),t}castRayAndGetNormal(A,I,g){let B=z.intoRaw(A.origin),E=z.intoRaw(A.dir),t=Qi.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,B,E,I,g));return B.free(),E.free(),t}}(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(AQ||(AQ={}));class _I{constructor(A){this.shape=A,this.massPropsMode=AQ.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=QI.identity(),this.translation=z.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=zE.Average,this.restitutionCombineRule=zE.Average,this.activeCollisionTypes=Oo.DEFAULT,this.activeEvents=0,this.activeHooks=0,this.mass=0,this.centerOfMass=z.zeros(),this.contactForceEventThreshold=0,this.principalAngularInertia=z.zeros(),this.angularInertiaLocalFrame=QI.identity()}static ball(A){const I=new Za(A);return new _I(I)}static capsule(A,I){const g=new Pa(A,I);return new _I(g)}static segment(A,I){const g=new Va(A,I);return new _I(g)}static triangle(A,I,g){const B=new ja(A,I,g);return new _I(B)}static roundTriangle(A,I,g,B){const E=new _a(A,I,g,B);return new _I(E)}static polyline(A,I){const g=new za(A,I);return new _I(g)}static trimesh(A,I){const g=new Xa(A,I);return new _I(g)}static cuboid(A,I,g){const B=new Wa(A,I,g);return new _I(B)}static roundCuboid(A,I,g,B){const E=new va(A,I,g,B);return new _I(E)}static heightfield(A,I,g,B){const E=new $a(A,I,g,B);return new _I(E)}static cylinder(A,I){const g=new AD(A,I);return new _I(g)}static roundCylinder(A,I,g){const B=new ID(A,I,g);return new _I(B)}static cone(A,I){const g=new gD(A,I);return new _I(g)}static roundCone(A,I,g){const B=new CD(A,I,g);return new _I(B)}static convexHull(A){const I=new bo(A,null);return new _I(I)}static convexMesh(A,I){const g=new bo(A,I);return new _I(g)}static roundConvexHull(A,I){const g=new Zo(A,null,I);return new _I(g)}static roundConvexMesh(A,I,g){const B=new Zo(A,I,g);return new _I(B)}setTranslation(A,I,g){if(typeof A!="number"||typeof I!="number"||typeof g!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:A,y:I,z:g},this}setRotation(A){return QI.copy(this.rotation,A),this}setSensor(A){return this.isSensor=A,this}setDensity(A){return this.massPropsMode=AQ.Density,this.density=A,this}setMass(A){return this.massPropsMode=AQ.Mass,this.mass=A,this}setMassProperties(A,I,g,B){return this.massPropsMode=AQ.MassProps,this.mass=A,z.copy(this.centerOfMass,I),z.copy(this.principalAngularInertia,g),QI.copy(this.angularInertiaLocalFrame,B),this}setRestitution(A){return this.restitution=A,this}setFriction(A){return this.friction=A,this}setFrictionCombineRule(A){return this.frictionCombineRule=A,this}setRestitutionCombineRule(A){return this.restitutionCombineRule=A,this}setCollisionGroups(A){return this.collisionGroups=A,this}setSolverGroups(A){return this.solverGroups=A,this}setActiveHooks(A){return this.activeHooks=A,this}setActiveEvents(A){return this.activeEvents=A,this}setActiveCollisionTypes(A){return this.activeCollisionTypes=A,this}setContactForceEventThreshold(A){return this.contactForceEventThreshold=A,this}}class nw{constructor(A){this.raw=A||new zI,this.map=new gt,A&&A.forEachColliderHandle(I=>{this.map.set(I,new ka(this,I,null))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}finalizeDeserialization(A){this.map.forEach(I=>I.finalizeDeserialization(A))}createCollider(A,I,g){let B=g!=null&&g!=null;if(B&&isNaN(g))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let E=I.shape.intoRaw(),t=z.intoRaw(I.translation),o=QI.intoRaw(I.rotation),D=z.intoRaw(I.centerOfMass),a=z.intoRaw(I.principalAngularInertia),s=QI.intoRaw(I.angularInertiaLocalFrame),h=this.raw.createCollider(E,t,o,I.massPropsMode,I.mass,D,a,s,I.density,I.friction,I.restitution,I.frictionCombineRule,I.restitutionCombineRule,I.isSensor,I.collisionGroups,I.solverGroups,I.activeCollisionTypes,I.activeHooks,I.activeEvents,I.contactForceEventThreshold,B,B?g:0,A.raw);E.free(),t.free(),o.free(),D.free(),a.free(),s.free();let S=B?A.get(g):null,c=new ka(this,h,S,I.shape);return this.map.set(h,c),c}remove(A,I,g,B){this.raw.remove(A,I.raw,g.raw,B),this.unmap(A)}unmap(A){this.map.delete(A)}get(A){return this.map.get(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}forEach(A){this.map.forEach(A)}getAll(){return this.map.getAll()}}class hw{constructor(A){this.raw=A||new Ho}free(){this.raw.free(),this.raw=void 0}step(A,I,g,B,E,t,o,D,a,s,h,S){let c=z.intoRaw(A);h?this.raw.stepWithEvents(c,I.raw,g.raw,B.raw,E.raw,t.raw,o.raw,D.raw,a.raw,s.raw,h.raw,S,S?S.filterContactPair:null,S?S.filterIntersectionPair:null):this.raw.step(c,I.raw,g.raw,B.raw,E.raw,t.raw,o.raw,D.raw,a.raw,s.raw),c.free()}}(function(i){i[i.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",i[i.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",i[i.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",i[i.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",i[i.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",i[i.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",i[i.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",i[i.ONLY_FIXED=6]="ONLY_FIXED"})(Sa||(Sa={}));class Sw{constructor(A){this.raw=A||new To}free(){this.raw.free(),this.raw=void 0}update(A,I,g){this.raw.update(A.raw,I.raw,g.raw)}castRay(A,I,g,B,E,t,o,D,a,s){let h=z.intoRaw(g.origin),S=z.intoRaw(g.dir),c=Ct.fromRaw(I,this.raw.castRay(A.raw,I.raw,h,S,B,E,t,o,D,a,s));return h.free(),S.free(),c}castRayAndGetNormal(A,I,g,B,E,t,o,D,a,s){let h=z.intoRaw(g.origin),S=z.intoRaw(g.dir),c=$E.fromRaw(I,this.raw.castRayAndGetNormal(A.raw,I.raw,h,S,B,E,t,o,D,a,s));return h.free(),S.free(),c}intersectionsWithRay(A,I,g,B,E,t,o,D,a,s,h){let S=z.intoRaw(g.origin),c=z.intoRaw(g.dir);this.raw.intersectionsWithRay(A.raw,I.raw,S,c,B,E,l=>t($E.fromRaw(I,l)),o,D,a,s,h),S.free(),c.free()}intersectionWithShape(A,I,g,B,E,t,o,D,a,s){let h=z.intoRaw(g),S=QI.intoRaw(B),c=E.intoRaw(),l=this.raw.intersectionWithShape(A.raw,I.raw,h,S,c,t,o,D,a,s);return h.free(),S.free(),c.free(),l}projectPoint(A,I,g,B,E,t,o,D,a){let s=z.intoRaw(g),h=XE.fromRaw(I,this.raw.projectPoint(A.raw,I.raw,s,B,E,t,o,D,a));return s.free(),h}projectPointAndGetFeature(A,I,g,B,E,t,o,D){let a=z.intoRaw(g),s=XE.fromRaw(I,this.raw.projectPointAndGetFeature(A.raw,I.raw,a,B,E,t,o,D));return a.free(),s}intersectionsWithPoint(A,I,g,B,E,t,o,D,a){let s=z.intoRaw(g);this.raw.intersectionsWithPoint(A.raw,I.raw,s,B,E,t,o,D,a),s.free()}castShape(A,I,g,B,E,t,o,D,a,s,h,S){let c=z.intoRaw(g),l=QI.intoRaw(B),G=z.intoRaw(E),w=t.intoRaw(),U=Ei.fromRaw(I,this.raw.castShape(A.raw,I.raw,c,l,G,w,o,D,a,s,h,S));return c.free(),l.free(),G.free(),w.free(),U}intersectionsWithShape(A,I,g,B,E,t,o,D,a,s,h){let S=z.intoRaw(g),c=QI.intoRaw(B),l=E.intoRaw();this.raw.intersectionsWithShape(A.raw,I.raw,S,c,l,t,o,D,a,s,h),S.free(),c.free(),l.free()}collidersWithAabbIntersectingAabb(A,I,g){let B=z.intoRaw(A),E=z.intoRaw(I);this.raw.collidersWithAabbIntersectingAabb(B,E,g),B.free(),E.free()}}class la{constructor(A){this.raw=A||new xo}free(){this.raw.free(),this.raw=void 0}serializeAll(A,I,g,B,E,t,o,D,a){let s=z.intoRaw(A);const h=this.raw.serializeAll(s,I.raw,g.raw,B.raw,E.raw,t.raw,o.raw,D.raw,a.raw);return s.free(),h}deserializeAll(A){return Bt.fromRaw(this.raw.deserializeAll(A))}}class ww{constructor(A,I){this.vertices=A,this.colors=I}}class Gw{constructor(A){this.raw=A||new uo}free(){this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(A,I,g,B,E){this.raw.render(A.raw,I.raw,g.raw,B.raw,E.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class Bt{constructor(A,I,g,B,E,t,o,D,a,s,h,S,c,l){this.gravity=A,this.integrationParameters=new XS(I),this.islands=new ew(g),this.broadPhase=new aw(B),this.narrowPhase=new Dw(E),this.bodies=new zS(t),this.colliders=new nw(o),this.impulseJoints=new Cw(D),this.multibodyJoints=new ow(a),this.ccdSolver=new tw(s),this.queryPipeline=new Sw(h),this.physicsPipeline=new hw(S),this.serializationPipeline=new la(c),this.debugRenderPipeline=new Gw(l),this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0}static fromRaw(A){return A?new Bt(z.fromRaw(A.takeGravity()),A.takeIntegrationParameters(),A.takeIslandManager(),A.takeBroadPhase(),A.takeNarrowPhase(),A.takeBodies(),A.takeColliders(),A.takeImpulseJoints(),A.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(A){return new la().deserializeAll(A)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new ww(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(A,I){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,A,I),this.queryPipeline.update(this.islands,this.bodies,this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(A){this.integrationParameters.dt=A}get maxVelocityIterations(){return this.integrationParameters.maxVelocityIterations}set maxVelocityIterations(A){this.integrationParameters.maxVelocityIterations=A}get maxVelocityFrictionIterations(){return this.integrationParameters.maxVelocityFrictionIterations}set maxVelocityFrictionIterations(A){this.integrationParameters.maxVelocityFrictionIterations=A}get maxStabilizationIterations(){return this.integrationParameters.maxStabilizationIterations}set maxStabilizationIterations(A){this.integrationParameters.maxStabilizationIterations=A}createRigidBody(A){return this.bodies.createRigidBody(this.colliders,A)}createCollider(A,I){let g=I?I.handle:void 0;return this.colliders.createCollider(this.bodies,A,g)}createImpulseJoint(A,I,g,B){return this.impulseJoints.createJoint(this.bodies,A,I.handle,g.handle,B)}createMultibodyJoint(A,I,g,B){return this.multibodyJoints.createJoint(A,I.handle,g.handle,B)}getRigidBody(A){return this.bodies.get(A)}getCollider(A){return this.colliders.get(A)}getImpulseJoint(A){return this.impulseJoints.get(A)}getMultibodyJoint(A){return this.multibodyJoints.get(A)}removeRigidBody(A){this.bodies&&this.bodies.remove(A.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(A,I){this.colliders&&this.colliders.remove(A.handle,this.islands,this.bodies,I)}removeImpulseJoint(A,I){this.impulseJoints&&this.impulseJoints.remove(A.handle,I)}removeMultibodyJoint(A,I){this.impulseJoints&&this.multibodyJoints.remove(A.handle,I)}forEachCollider(A){this.colliders.forEach(A)}forEachRigidBody(A){this.bodies.forEach(A)}forEachActiveRigidBody(A){this.bodies.forEachActiveRigidBody(this.islands,A)}castRay(A,I,g,B,E,t,o,D){return this.queryPipeline.castRay(this.bodies,this.colliders,A,I,g,B,E,t?t.handle:null,o?o.handle:null,pg(this.colliders,D))}castRayAndGetNormal(A,I,g,B,E,t,o,D){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,A,I,g,B,E,t?t.handle:null,o?o.handle:null,pg(this.colliders,D))}intersectionsWithRay(A,I,g,B,E,t,o,D,a){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,A,I,g,B,E,t,o?o.handle:null,D?D.handle:null,pg(this.colliders,a))}intersectionWithShape(A,I,g,B,E,t,o,D){let a=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,A,I,g,B,E,t?t.handle:null,o?o.handle:null,pg(this.colliders,D));return a!=null?this.colliders.get(a):null}projectPoint(A,I,g,B,E,t,o){return this.queryPipeline.projectPoint(this.bodies,this.colliders,A,I,g,B,E?E.handle:null,t?t.handle:null,pg(this.colliders,o))}projectPointAndGetFeature(A,I,g,B,E,t){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,A,I,g,B?B.handle:null,E?E.handle:null,pg(this.colliders,t))}intersectionsWithPoint(A,I,g,B,E,t,o){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,A,pg(this.colliders,I),g,B,E?E.handle:null,t?t.handle:null,pg(this.colliders,o))}castShape(A,I,g,B,E,t,o,D,a,s){return this.queryPipeline.castShape(this.bodies,this.colliders,A,I,g,B,E,t,o,D?D.handle:null,a?a.handle:null,pg(this.colliders,s))}intersectionsWithShape(A,I,g,B,E,t,o,D,a){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,A,I,g,pg(this.colliders,B),E,t,o?o.handle:null,D?D.handle:null,pg(this.colliders,a))}collidersWithAabbIntersectingAabb(A,I,g){this.queryPipeline.collidersWithAabbIntersectingAabb(A,I,pg(this.colliders,g))}contactsWith(A,I){this.narrowPhase.contactsWith(A.handle,pg(this.colliders,I))}intersectionsWith(A,I){this.narrowPhase.intersectionsWith(A.handle,pg(this.colliders,I))}contactPair(A,I,g){this.narrowPhase.contactPair(A.handle,I.handle,g)}intersectionPair(A,I){return this.narrowPhase.intersectionPair(A.handle,I.handle)}}function pg(i,A){return I=>A?A(i.get(I)):void 0}(function(i){i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(wa||(wa={}));class rw{free(){this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return z.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return z.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class xF{constructor(A,I){this.raw=I||new jE(A)}free(){this.raw.free(),this.raw=void 0}drainCollisionEvents(A){this.raw.drainCollisionEvents(A)}drainContactForceEvents(A){let I=new rw;this.raw.drainContactForceEvents(g=>{I.raw=g,A(I),I.free()})}clear(){this.raw.clear()}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(i,A){(function(){var I,g="4.17.21",B=200,E="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",t="Expected a function",o="Invalid `variable` option passed into `_.template`",D="__lodash_hash_undefined__",a=500,s="__lodash_placeholder__",h=1,S=2,c=4,l=1,G=2,w=1,U=2,d=4,q=8,F=16,N=32,p=64,x=128,M=256,Y=512,u=30,$="...",SA=800,W=16,v=1,CA=2,GA=3,DA=1/0,BA=9007199254740991,_=17976931348623157e292,IA=0/0,wA=4294967295,nA=wA-1,rA=wA>>>1,JA=[["ary",x],["bind",w],["bindKey",U],["curry",q],["curryRight",F],["flip",Y],["partial",N],["partialRight",p],["rearg",M]],mA="[object Arguments]",oA="[object Array]",$A="[object AsyncFunction]",LA="[object Boolean]",fA="[object Date]",UA="[object DOMException]",eI="[object Error]",jA="[object Function]",xA="[object GeneratorFunction]",rI="[object Map]",HI="[object Number]",PI="[object Null]",mI="[object Object]",OI="[object Promise]",lI="[object Proxy]",og="[object RegExp]",LI="[object Set]",L="[object String]",J="[object Symbol]",QA="[object Undefined]",cA="[object WeakMap]",kA="[object WeakSet]",KA="[object ArrayBuffer]",TA="[object DataView]",H="[object Float32Array]",j="[object Float64Array]",FA="[object Int8Array]",dA="[object Int16Array]",qA="[object Int32Array]",uA="[object Uint8Array]",VA="[object Uint8ClampedArray]",DI="[object Uint16Array]",O="[object Uint32Array]",RA=/\b__p \+= '';/g,lA=/\b(__p \+=) '' \+/g,sA=/(__e\(.*?\)|\b__t\)) \+\n'';/g,yA=/&(?:amp|lt|gt|quot|#39);/g,vA=/[&<>"']/g,JI=RegExp(yA.source),TI=RegExp(vA.source),KC=/<%-([\s\S]+?)%>/g,YI=/<%([\s\S]+?)%>/g,Pg=/<%=([\s\S]+?)%>/g,Ng=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qt=/^\w*$/,aQ=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,DQ=/[\\^$.*+?()[\]{}|]/g,Et=RegExp(DQ.source),DE=/^\s+/,it=/\s/,R=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,X=/\{\n\/\* \[wrapped with (.+)\] \*/,iA=/,? & /,V=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,tA=/[()=,{}\[\]\/\s]/,OA=/\\(\\)?/g,_A=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,II=/\w*$/,zA=/^[-+]0x[0-9a-f]+$/i,yI=/^0b[01]+$/i,sI=/^\[object .+?Constructor\]$/,nI=/^0o[0-7]+$/i,fI=/^(?:0|[1-9]\d*)$/,uC=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,tC=/($^)/,iB=/['\n\r\u2028\u2029\\]/g,lg="\\ud800-\\udfff",cI="\\u0300-\\u036f",oB="\\ufe20-\\ufe2f",bI="\\u20d0-\\u20ff",yg=cI+oB+bI,eC="\\u2700-\\u27bf",tB="a-z\\xdf-\\xf6\\xf8-\\xff",sE="\\xac\\xb1\\xd7\\xf7",sg="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",HC="\\u2000-\\u206f",nE=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",wg="A-Z\\xc0-\\xd6\\xd8-\\xde",sQ="\\ufe0e\\ufe0f",ii=sE+sg+HC+nE,nQ="['\u2019]",Uw="["+lg+"]",QD="["+ii+"]",oi="["+yg+"]",ED="\\d+",Kw="["+eC+"]",iD="["+tB+"]",oD="[^"+lg+ii+ED+eC+tB+wg+"]",ot="\\ud83c[\\udffb-\\udfff]",Nw="(?:"+oi+"|"+ot+")",tD="[^"+lg+"]",tt="(?:\\ud83c[\\udde6-\\uddff]){2}",et="[\\ud800-\\udbff][\\udc00-\\udfff]",hQ="["+wg+"]",eD="\\u200d",aD="(?:"+iD+"|"+oD+")",Jw="(?:"+hQ+"|"+oD+")",DD="(?:"+nQ+"(?:d|ll|m|re|s|t|ve))?",sD="(?:"+nQ+"(?:D|LL|M|RE|S|T|VE))?",nD=Nw+"?",hD="["+sQ+"]?",Fw="(?:"+eD+"(?:"+[tD,tt,et].join("|")+")"+hD+nD+")*",Rw="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",qw="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",SD=hD+nD+Fw,pw="(?:"+[Kw,tt,et].join("|")+")"+SD,dw="(?:"+[tD+oi+"?",oi,tt,et,Uw].join("|")+")",Lw=RegExp(nQ,"g"),Yw=RegExp(oi,"g"),at=RegExp(ot+"(?="+ot+")|"+dw+SD,"g"),fw=RegExp([hQ+"?"+iD+"+"+DD+"(?="+[QD,hQ,"$"].join("|")+")",Jw+"+"+sD+"(?="+[QD,hQ+aD,"$"].join("|")+")",hQ+"?"+aD+"+"+DD,hQ+"+"+sD,qw,Rw,ED,pw].join("|"),"g"),uw=RegExp("["+eD+lg+yg+sQ+"]"),Hw=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,mw=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Tw=-1,qI={};qI[H]=qI[j]=qI[FA]=qI[dA]=qI[qA]=qI[uA]=qI[VA]=qI[DI]=qI[O]=!0,qI[mA]=qI[oA]=qI[KA]=qI[LA]=qI[TA]=qI[fA]=qI[eI]=qI[jA]=qI[rI]=qI[HI]=qI[mI]=qI[og]=qI[LI]=qI[L]=qI[cA]=!1;var RI={};RI[mA]=RI[oA]=RI[KA]=RI[TA]=RI[LA]=RI[fA]=RI[H]=RI[j]=RI[FA]=RI[dA]=RI[qA]=RI[rI]=RI[HI]=RI[mI]=RI[og]=RI[LI]=RI[L]=RI[J]=RI[uA]=RI[VA]=RI[DI]=RI[O]=!0,RI[eI]=RI[jA]=RI[cA]=!1;var xw={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ow={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bw={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Zw={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ww=parseFloat,vw=parseInt,wD=typeof LE=="object"&&LE&&LE.Object===Object&&LE,Pw=typeof self=="object"&&self&&self.Object===Object&&self,ng=wD||Pw||Function("return this")(),Dt=A&&!A.nodeType&&A,pB=Dt&&!0&&i&&!i.nodeType&&i,GD=pB&&pB.exports===Dt,st=GD&&wD.process,Vg=function(){try{var b=pB&&pB.require&&pB.require("util").types;return b||st&&st.binding&&st.binding("util")}catch{}}(),rD=Vg&&Vg.isArrayBuffer,cD=Vg&&Vg.isDate,kD=Vg&&Vg.isMap,lD=Vg&&Vg.isRegExp,yD=Vg&&Vg.isSet,MD=Vg&&Vg.isTypedArray;function fg(b,EA,gA){switch(gA.length){case 0:return b.call(EA);case 1:return b.call(EA,gA[0]);case 2:return b.call(EA,gA[0],gA[1]);case 3:return b.call(EA,gA[0],gA[1],gA[2])}return b.apply(EA,gA)}function Vw(b,EA,gA,pA){for(var XA=-1,MI=b==null?0:b.length;++XA<MI;){var gg=b[XA];EA(pA,gg,gA(gg),b)}return pA}function jg(b,EA){for(var gA=-1,pA=b==null?0:b.length;++gA<pA&&EA(b[gA],gA,b)!==!1;);return b}function jw(b,EA){for(var gA=b==null?0:b.length;gA--&&EA(b[gA],gA,b)!==!1;);return b}function UD(b,EA){for(var gA=-1,pA=b==null?0:b.length;++gA<pA;)if(!EA(b[gA],gA,b))return!1;return!0}function eB(b,EA){for(var gA=-1,pA=b==null?0:b.length,XA=0,MI=[];++gA<pA;){var gg=b[gA];EA(gg,gA,b)&&(MI[XA++]=gg)}return MI}function ti(b,EA){var gA=b==null?0:b.length;return!!gA&&SQ(b,EA,0)>-1}function nt(b,EA,gA){for(var pA=-1,XA=b==null?0:b.length;++pA<XA;)if(gA(EA,b[pA]))return!0;return!1}function uI(b,EA){for(var gA=-1,pA=b==null?0:b.length,XA=Array(pA);++gA<pA;)XA[gA]=EA(b[gA],gA,b);return XA}function aB(b,EA){for(var gA=-1,pA=EA.length,XA=b.length;++gA<pA;)b[XA+gA]=EA[gA];return b}function ht(b,EA,gA,pA){var XA=-1,MI=b==null?0:b.length;for(pA&&MI&&(gA=b[++XA]);++XA<MI;)gA=EA(gA,b[XA],XA,b);return gA}function _w(b,EA,gA,pA){var XA=b==null?0:b.length;for(pA&&XA&&(gA=b[--XA]);XA--;)gA=EA(gA,b[XA],XA,b);return gA}function St(b,EA){for(var gA=-1,pA=b==null?0:b.length;++gA<pA;)if(EA(b[gA],gA,b))return!0;return!1}var zw=wt("length");function Xw(b){return b.split("")}function $w(b){return b.match(V)||[]}function KD(b,EA,gA){var pA;return gA(b,function(XA,MI,gg){if(EA(XA,MI,gg))return pA=MI,!1}),pA}function ei(b,EA,gA,pA){for(var XA=b.length,MI=gA+(pA?1:-1);pA?MI--:++MI<XA;)if(EA(b[MI],MI,b))return MI;return-1}function SQ(b,EA,gA){return EA===EA?aG(b,EA,gA):ei(b,ND,gA)}function AG(b,EA,gA,pA){for(var XA=gA-1,MI=b.length;++XA<MI;)if(pA(b[XA],EA))return XA;return-1}function ND(b){return b!==b}function JD(b,EA){var gA=b==null?0:b.length;return gA?rt(b,EA)/gA:IA}function wt(b){return function(EA){return EA==null?I:EA[b]}}function Gt(b){return function(EA){return b==null?I:b[EA]}}function FD(b,EA,gA,pA,XA){return XA(b,function(MI,gg,FI){gA=pA?(pA=!1,MI):EA(gA,MI,gg,FI)}),gA}function IG(b,EA){var gA=b.length;for(b.sort(EA);gA--;)b[gA]=b[gA].value;return b}function rt(b,EA){for(var gA,pA=-1,XA=b.length;++pA<XA;){var MI=EA(b[pA]);MI!==I&&(gA=gA===I?MI:gA+MI)}return gA}function ct(b,EA){for(var gA=-1,pA=Array(b);++gA<b;)pA[gA]=EA(gA);return pA}function gG(b,EA){return uI(EA,function(gA){return[gA,b[gA]]})}function RD(b){return b&&b.slice(0,LD(b)+1).replace(DE,"")}function ug(b){return function(EA){return b(EA)}}function kt(b,EA){return uI(EA,function(gA){return b[gA]})}function hE(b,EA){return b.has(EA)}function qD(b,EA){for(var gA=-1,pA=b.length;++gA<pA&&SQ(EA,b[gA],0)>-1;);return gA}function pD(b,EA){for(var gA=b.length;gA--&&SQ(EA,b[gA],0)>-1;);return gA}function CG(b,EA){for(var gA=b.length,pA=0;gA--;)b[gA]===EA&&++pA;return pA}var BG=Gt(xw),QG=Gt(Ow);function EG(b){return"\\"+Zw[b]}function iG(b,EA){return b==null?I:b[EA]}function wQ(b){return uw.test(b)}function oG(b){return Hw.test(b)}function tG(b){for(var EA,gA=[];!(EA=b.next()).done;)gA.push(EA.value);return gA}function lt(b){var EA=-1,gA=Array(b.size);return b.forEach(function(pA,XA){gA[++EA]=[XA,pA]}),gA}function dD(b,EA){return function(gA){return b(EA(gA))}}function DB(b,EA){for(var gA=-1,pA=b.length,XA=0,MI=[];++gA<pA;){var gg=b[gA];(gg===EA||gg===s)&&(b[gA]=s,MI[XA++]=gA)}return MI}function ai(b){var EA=-1,gA=Array(b.size);return b.forEach(function(pA){gA[++EA]=pA}),gA}function eG(b){var EA=-1,gA=Array(b.size);return b.forEach(function(pA){gA[++EA]=[pA,pA]}),gA}function aG(b,EA,gA){for(var pA=gA-1,XA=b.length;++pA<XA;)if(b[pA]===EA)return pA;return-1}function DG(b,EA,gA){for(var pA=gA+1;pA--;)if(b[pA]===EA)return pA;return pA}function GQ(b){return wQ(b)?nG(b):zw(b)}function aC(b){return wQ(b)?hG(b):Xw(b)}function LD(b){for(var EA=b.length;EA--&&it.test(b.charAt(EA)););return EA}var sG=Gt(bw);function nG(b){for(var EA=at.lastIndex=0;at.test(b);)++EA;return EA}function hG(b){return b.match(at)||[]}function SG(b){return b.match(fw)||[]}var wG=function b(EA){EA=EA==null?ng:rQ.defaults(ng.Object(),EA,rQ.pick(ng,mw));var gA=EA.Array,pA=EA.Date,XA=EA.Error,MI=EA.Function,gg=EA.Math,FI=EA.Object,yt=EA.RegExp,GG=EA.String,_g=EA.TypeError,Di=gA.prototype,rG=MI.prototype,cQ=FI.prototype,si=EA["__core-js_shared__"],ni=rG.toString,NI=cQ.hasOwnProperty,cG=0,YD=function(){var C=/[^.]+$/.exec(si&&si.keys&&si.keys.IE_PROTO||"");return C?"Symbol(src)_1."+C:""}(),hi=cQ.toString,kG=ni.call(FI),lG=ng._,yG=yt("^"+ni.call(NI).replace(DQ,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Si=GD?EA.Buffer:I,sB=EA.Symbol,wi=EA.Uint8Array,fD=Si?Si.allocUnsafe:I,Gi=dD(FI.getPrototypeOf,FI),uD=FI.create,HD=cQ.propertyIsEnumerable,ri=Di.splice,mD=sB?sB.isConcatSpreadable:I,SE=sB?sB.iterator:I,dB=sB?sB.toStringTag:I,ci=function(){try{var C=HB(FI,"defineProperty");return C({},"",{}),C}catch{}}(),MG=EA.clearTimeout!==ng.clearTimeout&&EA.clearTimeout,UG=pA&&pA.now!==ng.Date.now&&pA.now,KG=EA.setTimeout!==ng.setTimeout&&EA.setTimeout,ki=gg.ceil,li=gg.floor,Mt=FI.getOwnPropertySymbols,NG=Si?Si.isBuffer:I,TD=EA.isFinite,JG=Di.join,FG=dD(FI.keys,FI),Cg=gg.max,Gg=gg.min,RG=pA.now,qG=EA.parseInt,xD=gg.random,pG=Di.reverse,Ut=HB(EA,"DataView"),wE=HB(EA,"Map"),Kt=HB(EA,"Promise"),kQ=HB(EA,"Set"),GE=HB(EA,"WeakMap"),rE=HB(FI,"create"),yi=GE&&new GE,lQ={},dG=mB(Ut),LG=mB(wE),YG=mB(Kt),fG=mB(kQ),uG=mB(GE),Mi=sB?sB.prototype:I,cE=Mi?Mi.valueOf:I,OD=Mi?Mi.toString:I;function y(C){if(ZI(C)&&!AI(C)&&!(C instanceof aI)){if(C instanceof zg)return C;if(NI.call(C,"__wrapped__"))return bs(C)}return new zg(C)}var yQ=function(){function C(){}return function(Q){if(!xI(Q))return{};if(uD)return uD(Q);C.prototype=Q;var e=new C;return C.prototype=I,e}}();function Ui(){}function zg(C,Q){this.__wrapped__=C,this.__actions__=[],this.__chain__=!!Q,this.__index__=0,this.__values__=I}y.templateSettings={escape:KC,evaluate:YI,interpolate:Pg,variable:"",imports:{_:y}},y.prototype=Ui.prototype,y.prototype.constructor=y,zg.prototype=yQ(Ui.prototype),zg.prototype.constructor=zg;function aI(C){this.__wrapped__=C,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=wA,this.__views__=[]}function HG(){var C=new aI(this.__wrapped__);return C.__actions__=Jg(this.__actions__),C.__dir__=this.__dir__,C.__filtered__=this.__filtered__,C.__iteratees__=Jg(this.__iteratees__),C.__takeCount__=this.__takeCount__,C.__views__=Jg(this.__views__),C}function mG(){if(this.__filtered__){var C=new aI(this);C.__dir__=-1,C.__filtered__=!0}else C=this.clone(),C.__dir__*=-1;return C}function TG(){var C=this.__wrapped__.value(),Q=this.__dir__,e=AI(C),n=Q<0,k=e?C.length:0,K=Xr(0,k,this.__views__),f=K.start,m=K.end,Z=m-f,eA=n?m:f-1,aA=this.__iteratees__,hA=aA.length,NA=0,YA=Gg(Z,this.__takeCount__);if(!e||!n&&k==Z&&YA==Z)return Ds(C,this.__actions__);var ZA=[];A:for(;Z--&&NA<YA;){eA+=Q;for(var CI=-1,WA=C[eA];++CI<hA;){var iI=aA[CI],hI=iI.iteratee,Tg=iI.type,Kg=hI(WA);if(Tg==CA)WA=Kg;else if(!Kg){if(Tg==v)continue A;break A}}ZA[NA++]=WA}return ZA}aI.prototype=yQ(Ui.prototype),aI.prototype.constructor=aI;function LB(C){var Q=-1,e=C==null?0:C.length;for(this.clear();++Q<e;){var n=C[Q];this.set(n[0],n[1])}}function xG(){this.__data__=rE?rE(null):{},this.size=0}function OG(C){var Q=this.has(C)&&delete this.__data__[C];return this.size-=Q?1:0,Q}function bG(C){var Q=this.__data__;if(rE){var e=Q[C];return e===D?I:e}return NI.call(Q,C)?Q[C]:I}function ZG(C){var Q=this.__data__;return rE?Q[C]!==I:NI.call(Q,C)}function WG(C,Q){var e=this.__data__;return this.size+=this.has(C)?0:1,e[C]=rE&&Q===I?D:Q,this}LB.prototype.clear=xG,LB.prototype.delete=OG,LB.prototype.get=bG,LB.prototype.has=ZG,LB.prototype.set=WG;function mC(C){var Q=-1,e=C==null?0:C.length;for(this.clear();++Q<e;){var n=C[Q];this.set(n[0],n[1])}}function vG(){this.__data__=[],this.size=0}function PG(C){var Q=this.__data__,e=Ki(Q,C);if(e<0)return!1;var n=Q.length-1;return e==n?Q.pop():ri.call(Q,e,1),--this.size,!0}function VG(C){var Q=this.__data__,e=Ki(Q,C);return e<0?I:Q[e][1]}function jG(C){return Ki(this.__data__,C)>-1}function _G(C,Q){var e=this.__data__,n=Ki(e,C);return n<0?(++this.size,e.push([C,Q])):e[n][1]=Q,this}mC.prototype.clear=vG,mC.prototype.delete=PG,mC.prototype.get=VG,mC.prototype.has=jG,mC.prototype.set=_G;function TC(C){var Q=-1,e=C==null?0:C.length;for(this.clear();++Q<e;){var n=C[Q];this.set(n[0],n[1])}}function zG(){this.size=0,this.__data__={hash:new LB,map:new(wE||mC),string:new LB}}function XG(C){var Q=Hi(this,C).delete(C);return this.size-=Q?1:0,Q}function $G(C){return Hi(this,C).get(C)}function Ar(C){return Hi(this,C).has(C)}function Ir(C,Q){var e=Hi(this,C),n=e.size;return e.set(C,Q),this.size+=e.size==n?0:1,this}TC.prototype.clear=zG,TC.prototype.delete=XG,TC.prototype.get=$G,TC.prototype.has=Ar,TC.prototype.set=Ir;function YB(C){var Q=-1,e=C==null?0:C.length;for(this.__data__=new TC;++Q<e;)this.add(C[Q])}function gr(C){return this.__data__.set(C,D),this}function Cr(C){return this.__data__.has(C)}YB.prototype.add=YB.prototype.push=gr,YB.prototype.has=Cr;function DC(C){var Q=this.__data__=new mC(C);this.size=Q.size}function Br(){this.__data__=new mC,this.size=0}function Qr(C){var Q=this.__data__,e=Q.delete(C);return this.size=Q.size,e}function Er(C){return this.__data__.get(C)}function ir(C){return this.__data__.has(C)}function or(C,Q){var e=this.__data__;if(e instanceof mC){var n=e.__data__;if(!wE||n.length<B-1)return n.push([C,Q]),this.size=++e.size,this;e=this.__data__=new TC(n)}return e.set(C,Q),this.size=e.size,this}DC.prototype.clear=Br,DC.prototype.delete=Qr,DC.prototype.get=Er,DC.prototype.has=ir,DC.prototype.set=or;function bD(C,Q){var e=AI(C),n=!e&&TB(C),k=!e&&!n&&GB(C),K=!e&&!n&&!k&&NQ(C),f=e||n||k||K,m=f?ct(C.length,GG):[],Z=m.length;for(var eA in C)(Q||NI.call(C,eA))&&!(f&&(eA=="length"||k&&(eA=="offset"||eA=="parent")||K&&(eA=="buffer"||eA=="byteLength"||eA=="byteOffset")||ZC(eA,Z)))&&m.push(eA);return m}function ZD(C){var Q=C.length;return Q?C[ut(0,Q-1)]:I}function tr(C,Q){return mi(Jg(C),fB(Q,0,C.length))}function er(C){return mi(Jg(C))}function Nt(C,Q,e){(e!==I&&!sC(C[Q],e)||e===I&&!(Q in C))&&xC(C,Q,e)}function kE(C,Q,e){var n=C[Q];(!(NI.call(C,Q)&&sC(n,e))||e===I&&!(Q in C))&&xC(C,Q,e)}function Ki(C,Q){for(var e=C.length;e--;)if(sC(C[e][0],Q))return e;return-1}function ar(C,Q,e,n){return nB(C,function(k,K,f){Q(n,k,e(k),f)}),n}function WD(C,Q){return C&&JC(Q,tg(Q),C)}function Dr(C,Q){return C&&JC(Q,Rg(Q),C)}function xC(C,Q,e){Q=="__proto__"&&ci?ci(C,Q,{configurable:!0,enumerable:!0,value:e,writable:!0}):C[Q]=e}function Jt(C,Q){for(var e=-1,n=Q.length,k=gA(n),K=C==null;++e<n;)k[e]=K?I:oe(C,Q[e]);return k}function fB(C,Q,e){return C===C&&(e!==I&&(C=C<=e?C:e),Q!==I&&(C=C>=Q?C:Q)),C}function Xg(C,Q,e,n,k,K){var f,m=Q&h,Z=Q&S,eA=Q&c;if(e&&(f=k?e(C,n,k,K):e(C)),f!==I)return f;if(!xI(C))return C;var aA=AI(C);if(aA){if(f=Ac(C),!m)return Jg(C,f)}else{var hA=rg(C),NA=hA==jA||hA==xA;if(GB(C))return hs(C,m);if(hA==mI||hA==mA||NA&&!k){if(f=Z||NA?{}:Ls(C),!m)return Z?br(C,Dr(f,C)):Or(C,WD(f,C))}else{if(!RI[hA])return k?C:{};f=Ic(C,hA,m)}}K||(K=new DC);var YA=K.get(C);if(YA)return YA;K.set(C,f),en(C)?C.forEach(function(WA){f.add(Xg(WA,Q,e,WA,C,K))}):on(C)&&C.forEach(function(WA,iI){f.set(iI,Xg(WA,Q,e,iI,C,K))});var ZA=eA?Z?Vt:Pt:Z?Rg:tg,CI=aA?I:ZA(C);return jg(CI||C,function(WA,iI){CI&&(iI=WA,WA=C[iI]),kE(f,iI,Xg(WA,Q,e,iI,C,K))}),f}function sr(C){var Q=tg(C);return function(e){return vD(e,C,Q)}}function vD(C,Q,e){var n=e.length;if(C==null)return!n;for(C=FI(C);n--;){var k=e[n],K=Q[k],f=C[k];if(f===I&&!(k in C)||!K(f))return!1}return!0}function PD(C,Q,e){if(typeof C!="function")throw new _g(t);return JE(function(){C.apply(I,e)},Q)}function lE(C,Q,e,n){var k=-1,K=ti,f=!0,m=C.length,Z=[],eA=Q.length;if(!m)return Z;e&&(Q=uI(Q,ug(e))),n?(K=nt,f=!1):Q.length>=B&&(K=hE,f=!1,Q=new YB(Q));A:for(;++k<m;){var aA=C[k],hA=e==null?aA:e(aA);if(aA=n||aA!==0?aA:0,f&&hA===hA){for(var NA=eA;NA--;)if(Q[NA]===hA)continue A;Z.push(aA)}else K(Q,hA,n)||Z.push(aA)}return Z}var nB=cs(NC),VD=cs(Rt,!0);function nr(C,Q){var e=!0;return nB(C,function(n,k,K){return e=!!Q(n,k,K),e}),e}function Ni(C,Q,e){for(var n=-1,k=C.length;++n<k;){var K=C[n],f=Q(K);if(f!=null&&(m===I?f===f&&!mg(f):e(f,m)))var m=f,Z=K}return Z}function hr(C,Q,e,n){var k=C.length;for(e=gI(e),e<0&&(e=-e>k?0:k+e),n=n===I||n>k?k:gI(n),n<0&&(n+=k),n=e>n?0:Dn(n);e<n;)C[e++]=Q;return C}function jD(C,Q){var e=[];return nB(C,function(n,k,K){Q(n,k,K)&&e.push(n)}),e}function hg(C,Q,e,n,k){var K=-1,f=C.length;for(e||(e=Cc),k||(k=[]);++K<f;){var m=C[K];Q>0&&e(m)?Q>1?hg(m,Q-1,e,n,k):aB(k,m):n||(k[k.length]=m)}return k}var Ft=ks(),_D=ks(!0);function NC(C,Q){return C&&Ft(C,Q,tg)}function Rt(C,Q){return C&&_D(C,Q,tg)}function Ji(C,Q){return eB(Q,function(e){return WC(C[e])})}function uB(C,Q){Q=SB(Q,C);for(var e=0,n=Q.length;C!=null&&e<n;)C=C[FC(Q[e++])];return e&&e==n?C:I}function zD(C,Q,e){var n=Q(C);return AI(C)?n:aB(n,e(C))}function Mg(C){return C==null?C===I?QA:PI:dB&&dB in FI(C)?zr(C):ec(C)}function qt(C,Q){return C>Q}function Sr(C,Q){return C!=null&&NI.call(C,Q)}function wr(C,Q){return C!=null&&Q in FI(C)}function Gr(C,Q,e){return C>=Gg(Q,e)&&C<Cg(Q,e)}function pt(C,Q,e){for(var n=e?nt:ti,k=C[0].length,K=C.length,f=K,m=gA(K),Z=1/0,eA=[];f--;){var aA=C[f];f&&Q&&(aA=uI(aA,ug(Q))),Z=Gg(aA.length,Z),m[f]=!e&&(Q||k>=120&&aA.length>=120)?new YB(f&&aA):I}aA=C[0];var hA=-1,NA=m[0];A:for(;++hA<k&&eA.length<Z;){var YA=aA[hA],ZA=Q?Q(YA):YA;if(YA=e||YA!==0?YA:0,!(NA?hE(NA,ZA):n(eA,ZA,e))){for(f=K;--f;){var CI=m[f];if(!(CI?hE(CI,ZA):n(C[f],ZA,e)))continue A}NA&&NA.push(ZA),eA.push(YA)}}return eA}function rr(C,Q,e,n){return NC(C,function(k,K,f){Q(n,e(k),K,f)}),n}function yE(C,Q,e){Q=SB(Q,C),C=Hs(C,Q);var n=C==null?C:C[FC(AC(Q))];return n==null?I:fg(n,C,e)}function XD(C){return ZI(C)&&Mg(C)==mA}function cr(C){return ZI(C)&&Mg(C)==KA}function kr(C){return ZI(C)&&Mg(C)==fA}function ME(C,Q,e,n,k){return C===Q?!0:C==null||Q==null||!ZI(C)&&!ZI(Q)?C!==C&&Q!==Q:lr(C,Q,e,n,ME,k)}function lr(C,Q,e,n,k,K){var f=AI(C),m=AI(Q),Z=f?oA:rg(C),eA=m?oA:rg(Q);Z=Z==mA?mI:Z,eA=eA==mA?mI:eA;var aA=Z==mI,hA=eA==mI,NA=Z==eA;if(NA&&GB(C)){if(!GB(Q))return!1;f=!0,aA=!1}if(NA&&!aA)return K||(K=new DC),f||NQ(C)?qs(C,Q,e,n,k,K):jr(C,Q,Z,e,n,k,K);if(!(e&l)){var YA=aA&&NI.call(C,"__wrapped__"),ZA=hA&&NI.call(Q,"__wrapped__");if(YA||ZA){var CI=YA?C.value():C,WA=ZA?Q.value():Q;return K||(K=new DC),k(CI,WA,e,n,K)}}return NA?(K||(K=new DC),_r(C,Q,e,n,k,K)):!1}function yr(C){return ZI(C)&&rg(C)==rI}function dt(C,Q,e,n){var k=e.length,K=k,f=!n;if(C==null)return!K;for(C=FI(C);k--;){var m=e[k];if(f&&m[2]?m[1]!==C[m[0]]:!(m[0]in C))return!1}for(;++k<K;){m=e[k];var Z=m[0],eA=C[Z],aA=m[1];if(f&&m[2]){if(eA===I&&!(Z in C))return!1}else{var hA=new DC;if(n)var NA=n(eA,aA,Z,C,Q,hA);if(!(NA===I?ME(aA,eA,l|G,n,hA):NA))return!1}}return!0}function $D(C){if(!xI(C)||Qc(C))return!1;var Q=WC(C)?yG:sI;return Q.test(mB(C))}function Mr(C){return ZI(C)&&Mg(C)==og}function Ur(C){return ZI(C)&&rg(C)==LI}function Kr(C){return ZI(C)&&Wi(C.length)&&!!qI[Mg(C)]}function As(C){return typeof C=="function"?C:C==null?qg:typeof C=="object"?AI(C)?Cs(C[0],C[1]):gs(C):yn(C)}function Lt(C){if(!NE(C))return FG(C);var Q=[];for(var e in FI(C))NI.call(C,e)&&e!="constructor"&&Q.push(e);return Q}function Nr(C){if(!xI(C))return tc(C);var Q=NE(C),e=[];for(var n in C)n=="constructor"&&(Q||!NI.call(C,n))||e.push(n);return e}function Yt(C,Q){return C<Q}function Is(C,Q){var e=-1,n=Fg(C)?gA(C.length):[];return nB(C,function(k,K,f){n[++e]=Q(k,K,f)}),n}function gs(C){var Q=_t(C);return Q.length==1&&Q[0][2]?fs(Q[0][0],Q[0][1]):function(e){return e===C||dt(e,C,Q)}}function Cs(C,Q){return Xt(C)&&Ys(Q)?fs(FC(C),Q):function(e){var n=oe(e,C);return n===I&&n===Q?te(e,C):ME(Q,n,l|G)}}function Fi(C,Q,e,n,k){C!==Q&&Ft(Q,function(K,f){if(k||(k=new DC),xI(K))Jr(C,Q,f,e,Fi,n,k);else{var m=n?n(Ae(C,f),K,f+"",C,Q,k):I;m===I&&(m=K),Nt(C,f,m)}},Rg)}function Jr(C,Q,e,n,k,K,f){var m=Ae(C,e),Z=Ae(Q,e),eA=f.get(Z);if(eA){Nt(C,e,eA);return}var aA=K?K(m,Z,e+"",C,Q,f):I,hA=aA===I;if(hA){var NA=AI(Z),YA=!NA&&GB(Z),ZA=!NA&&!YA&&NQ(Z);aA=Z,NA||YA||ZA?AI(m)?aA=m:VI(m)?aA=Jg(m):YA?(hA=!1,aA=hs(Z,!0)):ZA?(hA=!1,aA=Ss(Z,!0)):aA=[]:FE(Z)||TB(Z)?(aA=m,TB(m)?aA=sn(m):(!xI(m)||WC(m))&&(aA=Ls(Z))):hA=!1}hA&&(f.set(Z,aA),k(aA,Z,n,K,f),f.delete(Z)),Nt(C,e,aA)}function Bs(C,Q){var e=C.length;if(!!e)return Q+=Q<0?e:0,ZC(Q,e)?C[Q]:I}function Qs(C,Q,e){Q.length?Q=uI(Q,function(K){return AI(K)?function(f){return uB(f,K.length===1?K[0]:K)}:K}):Q=[qg];var n=-1;Q=uI(Q,ug(bA()));var k=Is(C,function(K,f,m){var Z=uI(Q,function(eA){return eA(K)});return{criteria:Z,index:++n,value:K}});return IG(k,function(K,f){return xr(K,f,e)})}function Fr(C,Q){return Es(C,Q,function(e,n){return te(C,n)})}function Es(C,Q,e){for(var n=-1,k=Q.length,K={};++n<k;){var f=Q[n],m=uB(C,f);e(m,f)&&UE(K,SB(f,C),m)}return K}function Rr(C){return function(Q){return uB(Q,C)}}function ft(C,Q,e,n){var k=n?AG:SQ,K=-1,f=Q.length,m=C;for(C===Q&&(Q=Jg(Q)),e&&(m=uI(C,ug(e)));++K<f;)for(var Z=0,eA=Q[K],aA=e?e(eA):eA;(Z=k(m,aA,Z,n))>-1;)m!==C&&ri.call(m,Z,1),ri.call(C,Z,1);return C}function is(C,Q){for(var e=C?Q.length:0,n=e-1;e--;){var k=Q[e];if(e==n||k!==K){var K=k;ZC(k)?ri.call(C,k,1):Tt(C,k)}}return C}function ut(C,Q){return C+li(xD()*(Q-C+1))}function qr(C,Q,e,n){for(var k=-1,K=Cg(ki((Q-C)/(e||1)),0),f=gA(K);K--;)f[n?K:++k]=C,C+=e;return f}function Ht(C,Q){var e="";if(!C||Q<1||Q>BA)return e;do Q%2&&(e+=C),Q=li(Q/2),Q&&(C+=C);while(Q);return e}function BI(C,Q){return Ie(us(C,Q,qg),C+"")}function pr(C){return ZD(JQ(C))}function dr(C,Q){var e=JQ(C);return mi(e,fB(Q,0,e.length))}function UE(C,Q,e,n){if(!xI(C))return C;Q=SB(Q,C);for(var k=-1,K=Q.length,f=K-1,m=C;m!=null&&++k<K;){var Z=FC(Q[k]),eA=e;if(Z==="__proto__"||Z==="constructor"||Z==="prototype")return C;if(k!=f){var aA=m[Z];eA=n?n(aA,Z,m):I,eA===I&&(eA=xI(aA)?aA:ZC(Q[k+1])?[]:{})}kE(m,Z,eA),m=m[Z]}return C}var os=yi?function(C,Q){return yi.set(C,Q),C}:qg,Lr=ci?function(C,Q){return ci(C,"toString",{configurable:!0,enumerable:!1,value:ae(Q),writable:!0})}:qg;function Yr(C){return mi(JQ(C))}function $g(C,Q,e){var n=-1,k=C.length;Q<0&&(Q=-Q>k?0:k+Q),e=e>k?k:e,e<0&&(e+=k),k=Q>e?0:e-Q>>>0,Q>>>=0;for(var K=gA(k);++n<k;)K[n]=C[n+Q];return K}function fr(C,Q){var e;return nB(C,function(n,k,K){return e=Q(n,k,K),!e}),!!e}function Ri(C,Q,e){var n=0,k=C==null?n:C.length;if(typeof Q=="number"&&Q===Q&&k<=rA){for(;n<k;){var K=n+k>>>1,f=C[K];f!==null&&!mg(f)&&(e?f<=Q:f<Q)?n=K+1:k=K}return k}return mt(C,Q,qg,e)}function mt(C,Q,e,n){var k=0,K=C==null?0:C.length;if(K===0)return 0;Q=e(Q);for(var f=Q!==Q,m=Q===null,Z=mg(Q),eA=Q===I;k<K;){var aA=li((k+K)/2),hA=e(C[aA]),NA=hA!==I,YA=hA===null,ZA=hA===hA,CI=mg(hA);if(f)var WA=n||ZA;else eA?WA=ZA&&(n||NA):m?WA=ZA&&NA&&(n||!YA):Z?WA=ZA&&NA&&!YA&&(n||!CI):YA||CI?WA=!1:WA=n?hA<=Q:hA<Q;WA?k=aA+1:K=aA}return Gg(K,nA)}function ts(C,Q){for(var e=-1,n=C.length,k=0,K=[];++e<n;){var f=C[e],m=Q?Q(f):f;if(!e||!sC(m,Z)){var Z=m;K[k++]=f===0?0:f}}return K}function es(C){return typeof C=="number"?C:mg(C)?IA:+C}function Hg(C){if(typeof C=="string")return C;if(AI(C))return uI(C,Hg)+"";if(mg(C))return OD?OD.call(C):"";var Q=C+"";return Q=="0"&&1/C==-DA?"-0":Q}function hB(C,Q,e){var n=-1,k=ti,K=C.length,f=!0,m=[],Z=m;if(e)f=!1,k=nt;else if(K>=B){var eA=Q?null:Pr(C);if(eA)return ai(eA);f=!1,k=hE,Z=new YB}else Z=Q?[]:m;A:for(;++n<K;){var aA=C[n],hA=Q?Q(aA):aA;if(aA=e||aA!==0?aA:0,f&&hA===hA){for(var NA=Z.length;NA--;)if(Z[NA]===hA)continue A;Q&&Z.push(hA),m.push(aA)}else k(Z,hA,e)||(Z!==m&&Z.push(hA),m.push(aA))}return m}function Tt(C,Q){return Q=SB(Q,C),C=Hs(C,Q),C==null||delete C[FC(AC(Q))]}function as(C,Q,e,n){return UE(C,Q,e(uB(C,Q)),n)}function qi(C,Q,e,n){for(var k=C.length,K=n?k:-1;(n?K--:++K<k)&&Q(C[K],K,C););return e?$g(C,n?0:K,n?K+1:k):$g(C,n?K+1:0,n?k:K)}function Ds(C,Q){var e=C;return e instanceof aI&&(e=e.value()),ht(Q,function(n,k){return k.func.apply(k.thisArg,aB([n],k.args))},e)}function xt(C,Q,e){var n=C.length;if(n<2)return n?hB(C[0]):[];for(var k=-1,K=gA(n);++k<n;)for(var f=C[k],m=-1;++m<n;)m!=k&&(K[k]=lE(K[k]||f,C[m],Q,e));return hB(hg(K,1),Q,e)}function ss(C,Q,e){for(var n=-1,k=C.length,K=Q.length,f={};++n<k;){var m=n<K?Q[n]:I;e(f,C[n],m)}return f}function Ot(C){return VI(C)?C:[]}function bt(C){return typeof C=="function"?C:qg}function SB(C,Q){return AI(C)?C:Xt(C,Q)?[C]:Os(UI(C))}var ur=BI;function wB(C,Q,e){var n=C.length;return e=e===I?n:e,!Q&&e>=n?C:$g(C,Q,e)}var ns=MG||function(C){return ng.clearTimeout(C)};function hs(C,Q){if(Q)return C.slice();var e=C.length,n=fD?fD(e):new C.constructor(e);return C.copy(n),n}function Zt(C){var Q=new C.constructor(C.byteLength);return new wi(Q).set(new wi(C)),Q}function Hr(C,Q){var e=Q?Zt(C.buffer):C.buffer;return new C.constructor(e,C.byteOffset,C.byteLength)}function mr(C){var Q=new C.constructor(C.source,II.exec(C));return Q.lastIndex=C.lastIndex,Q}function Tr(C){return cE?FI(cE.call(C)):{}}function Ss(C,Q){var e=Q?Zt(C.buffer):C.buffer;return new C.constructor(e,C.byteOffset,C.length)}function ws(C,Q){if(C!==Q){var e=C!==I,n=C===null,k=C===C,K=mg(C),f=Q!==I,m=Q===null,Z=Q===Q,eA=mg(Q);if(!m&&!eA&&!K&&C>Q||K&&f&&Z&&!m&&!eA||n&&f&&Z||!e&&Z||!k)return 1;if(!n&&!K&&!eA&&C<Q||eA&&e&&k&&!n&&!K||m&&e&&k||!f&&k||!Z)return-1}return 0}function xr(C,Q,e){for(var n=-1,k=C.criteria,K=Q.criteria,f=k.length,m=e.length;++n<f;){var Z=ws(k[n],K[n]);if(Z){if(n>=m)return Z;var eA=e[n];return Z*(eA=="desc"?-1:1)}}return C.index-Q.index}function Gs(C,Q,e,n){for(var k=-1,K=C.length,f=e.length,m=-1,Z=Q.length,eA=Cg(K-f,0),aA=gA(Z+eA),hA=!n;++m<Z;)aA[m]=Q[m];for(;++k<f;)(hA||k<K)&&(aA[e[k]]=C[k]);for(;eA--;)aA[m++]=C[k++];return aA}function rs(C,Q,e,n){for(var k=-1,K=C.length,f=-1,m=e.length,Z=-1,eA=Q.length,aA=Cg(K-m,0),hA=gA(aA+eA),NA=!n;++k<aA;)hA[k]=C[k];for(var YA=k;++Z<eA;)hA[YA+Z]=Q[Z];for(;++f<m;)(NA||k<K)&&(hA[YA+e[f]]=C[k++]);return hA}function Jg(C,Q){var e=-1,n=C.length;for(Q||(Q=gA(n));++e<n;)Q[e]=C[e];return Q}function JC(C,Q,e,n){var k=!e;e||(e={});for(var K=-1,f=Q.length;++K<f;){var m=Q[K],Z=n?n(e[m],C[m],m,e,C):I;Z===I&&(Z=C[m]),k?xC(e,m,Z):kE(e,m,Z)}return e}function Or(C,Q){return JC(C,zt(C),Q)}function br(C,Q){return JC(C,ps(C),Q)}function pi(C,Q){return function(e,n){var k=AI(e)?Vw:ar,K=Q?Q():{};return k(e,C,bA(n,2),K)}}function MQ(C){return BI(function(Q,e){var n=-1,k=e.length,K=k>1?e[k-1]:I,f=k>2?e[2]:I;for(K=C.length>3&&typeof K=="function"?(k--,K):I,f&&Ug(e[0],e[1],f)&&(K=k<3?I:K,k=1),Q=FI(Q);++n<k;){var m=e[n];m&&C(Q,m,n,K)}return Q})}function cs(C,Q){return function(e,n){if(e==null)return e;if(!Fg(e))return C(e,n);for(var k=e.length,K=Q?k:-1,f=FI(e);(Q?K--:++K<k)&&n(f[K],K,f)!==!1;);return e}}function ks(C){return function(Q,e,n){for(var k=-1,K=FI(Q),f=n(Q),m=f.length;m--;){var Z=f[C?m:++k];if(e(K[Z],Z,K)===!1)break}return Q}}function Zr(C,Q,e){var n=Q&w,k=KE(C);function K(){var f=this&&this!==ng&&this instanceof K?k:C;return f.apply(n?e:this,arguments)}return K}function ls(C){return function(Q){Q=UI(Q);var e=wQ(Q)?aC(Q):I,n=e?e[0]:Q.charAt(0),k=e?wB(e,1).join(""):Q.slice(1);return n[C]()+k}}function UQ(C){return function(Q){return ht(kn(cn(Q).replace(Lw,"")),C,"")}}function KE(C){return function(){var Q=arguments;switch(Q.length){case 0:return new C;case 1:return new C(Q[0]);case 2:return new C(Q[0],Q[1]);case 3:return new C(Q[0],Q[1],Q[2]);case 4:return new C(Q[0],Q[1],Q[2],Q[3]);case 5:return new C(Q[0],Q[1],Q[2],Q[3],Q[4]);case 6:return new C(Q[0],Q[1],Q[2],Q[3],Q[4],Q[5]);case 7:return new C(Q[0],Q[1],Q[2],Q[3],Q[4],Q[5],Q[6])}var e=yQ(C.prototype),n=C.apply(e,Q);return xI(n)?n:e}}function Wr(C,Q,e){var n=KE(C);function k(){for(var K=arguments.length,f=gA(K),m=K,Z=KQ(k);m--;)f[m]=arguments[m];var eA=K<3&&f[0]!==Z&&f[K-1]!==Z?[]:DB(f,Z);if(K-=eA.length,K<e)return Ns(C,Q,di,k.placeholder,I,f,eA,I,I,e-K);var aA=this&&this!==ng&&this instanceof k?n:C;return fg(aA,this,f)}return k}function ys(C){return function(Q,e,n){var k=FI(Q);if(!Fg(Q)){var K=bA(e,3);Q=tg(Q),e=function(m){return K(k[m],m,k)}}var f=C(Q,e,n);return f>-1?k[K?Q[f]:f]:I}}function Ms(C){return bC(function(Q){var e=Q.length,n=e,k=zg.prototype.thru;for(C&&Q.reverse();n--;){var K=Q[n];if(typeof K!="function")throw new _g(t);if(k&&!f&&ui(K)=="wrapper")var f=new zg([],!0)}for(n=f?n:e;++n<e;){K=Q[n];var m=ui(K),Z=m=="wrapper"?jt(K):I;Z&&$t(Z[0])&&Z[1]==(x|q|N|M)&&!Z[4].length&&Z[9]==1?f=f[ui(Z[0])].apply(f,Z[3]):f=K.length==1&&$t(K)?f[m]():f.thru(K)}return function(){var eA=arguments,aA=eA[0];if(f&&eA.length==1&&AI(aA))return f.plant(aA).value();for(var hA=0,NA=e?Q[hA].apply(this,eA):aA;++hA<e;)NA=Q[hA].call(this,NA);return NA}})}function di(C,Q,e,n,k,K,f,m,Z,eA){var aA=Q&x,hA=Q&w,NA=Q&U,YA=Q&(q|F),ZA=Q&Y,CI=NA?I:KE(C);function WA(){for(var iI=arguments.length,hI=gA(iI),Tg=iI;Tg--;)hI[Tg]=arguments[Tg];if(YA)var Kg=KQ(WA),xg=CG(hI,Kg);if(n&&(hI=Gs(hI,n,k,YA)),K&&(hI=rs(hI,K,f,YA)),iI-=xg,YA&&iI<eA){var jI=DB(hI,Kg);return Ns(C,Q,di,WA.placeholder,e,hI,jI,m,Z,eA-iI)}var nC=hA?e:this,PC=NA?nC[C]:C;return iI=hI.length,m?hI=ac(hI,m):ZA&&iI>1&&hI.reverse(),aA&&Z<iI&&(hI.length=Z),this&&this!==ng&&this instanceof WA&&(PC=CI||KE(PC)),PC.apply(nC,hI)}return WA}function Us(C,Q){return function(e,n){return rr(e,C,Q(n),{})}}function Li(C,Q){return function(e,n){var k;if(e===I&&n===I)return Q;if(e!==I&&(k=e),n!==I){if(k===I)return n;typeof e=="string"||typeof n=="string"?(e=Hg(e),n=Hg(n)):(e=es(e),n=es(n)),k=C(e,n)}return k}}function Wt(C){return bC(function(Q){return Q=uI(Q,ug(bA())),BI(function(e){var n=this;return C(Q,function(k){return fg(k,n,e)})})})}function Yi(C,Q){Q=Q===I?" ":Hg(Q);var e=Q.length;if(e<2)return e?Ht(Q,C):Q;var n=Ht(Q,ki(C/GQ(Q)));return wQ(Q)?wB(aC(n),0,C).join(""):n.slice(0,C)}function vr(C,Q,e,n){var k=Q&w,K=KE(C);function f(){for(var m=-1,Z=arguments.length,eA=-1,aA=n.length,hA=gA(aA+Z),NA=this&&this!==ng&&this instanceof f?K:C;++eA<aA;)hA[eA]=n[eA];for(;Z--;)hA[eA++]=arguments[++m];return fg(NA,k?e:this,hA)}return f}function Ks(C){return function(Q,e,n){return n&&typeof n!="number"&&Ug(Q,e,n)&&(e=n=I),Q=vC(Q),e===I?(e=Q,Q=0):e=vC(e),n=n===I?Q<e?1:-1:vC(n),qr(Q,e,n,C)}}function fi(C){return function(Q,e){return typeof Q=="string"&&typeof e=="string"||(Q=IC(Q),e=IC(e)),C(Q,e)}}function Ns(C,Q,e,n,k,K,f,m,Z,eA){var aA=Q&q,hA=aA?f:I,NA=aA?I:f,YA=aA?K:I,ZA=aA?I:K;Q|=aA?N:p,Q&=~(aA?p:N),Q&d||(Q&=~(w|U));var CI=[C,Q,k,YA,hA,ZA,NA,m,Z,eA],WA=e.apply(I,CI);return $t(C)&&ms(WA,CI),WA.placeholder=n,Ts(WA,C,Q)}function vt(C){var Q=gg[C];return function(e,n){if(e=IC(e),n=n==null?0:Gg(gI(n),292),n&&TD(e)){var k=(UI(e)+"e").split("e"),K=Q(k[0]+"e"+(+k[1]+n));return k=(UI(K)+"e").split("e"),+(k[0]+"e"+(+k[1]-n))}return Q(e)}}var Pr=kQ&&1/ai(new kQ([,-0]))[1]==DA?function(C){return new kQ(C)}:ne;function Js(C){return function(Q){var e=rg(Q);return e==rI?lt(Q):e==LI?eG(Q):gG(Q,C(Q))}}function OC(C,Q,e,n,k,K,f,m){var Z=Q&U;if(!Z&&typeof C!="function")throw new _g(t);var eA=n?n.length:0;if(eA||(Q&=~(N|p),n=k=I),f=f===I?f:Cg(gI(f),0),m=m===I?m:gI(m),eA-=k?k.length:0,Q&p){var aA=n,hA=k;n=k=I}var NA=Z?I:jt(C),YA=[C,Q,e,n,k,aA,hA,K,f,m];if(NA&&oc(YA,NA),C=YA[0],Q=YA[1],e=YA[2],n=YA[3],k=YA[4],m=YA[9]=YA[9]===I?Z?0:C.length:Cg(YA[9]-eA,0),!m&&Q&(q|F)&&(Q&=~(q|F)),!Q||Q==w)var ZA=Zr(C,Q,e);else Q==q||Q==F?ZA=Wr(C,Q,m):(Q==N||Q==(w|N))&&!k.length?ZA=vr(C,Q,e,n):ZA=di.apply(I,YA);var CI=NA?os:ms;return Ts(CI(ZA,YA),C,Q)}function Fs(C,Q,e,n){return C===I||sC(C,cQ[e])&&!NI.call(n,e)?Q:C}function Rs(C,Q,e,n,k,K){return xI(C)&&xI(Q)&&(K.set(Q,C),Fi(C,Q,I,Rs,K),K.delete(Q)),C}function Vr(C){return FE(C)?I:C}function qs(C,Q,e,n,k,K){var f=e&l,m=C.length,Z=Q.length;if(m!=Z&&!(f&&Z>m))return!1;var eA=K.get(C),aA=K.get(Q);if(eA&&aA)return eA==Q&&aA==C;var hA=-1,NA=!0,YA=e&G?new YB:I;for(K.set(C,Q),K.set(Q,C);++hA<m;){var ZA=C[hA],CI=Q[hA];if(n)var WA=f?n(CI,ZA,hA,Q,C,K):n(ZA,CI,hA,C,Q,K);if(WA!==I){if(WA)continue;NA=!1;break}if(YA){if(!St(Q,function(iI,hI){if(!hE(YA,hI)&&(ZA===iI||k(ZA,iI,e,n,K)))return YA.push(hI)})){NA=!1;break}}else if(!(ZA===CI||k(ZA,CI,e,n,K))){NA=!1;break}}return K.delete(C),K.delete(Q),NA}function jr(C,Q,e,n,k,K,f){switch(e){case TA:if(C.byteLength!=Q.byteLength||C.byteOffset!=Q.byteOffset)return!1;C=C.buffer,Q=Q.buffer;case KA:return!(C.byteLength!=Q.byteLength||!K(new wi(C),new wi(Q)));case LA:case fA:case HI:return sC(+C,+Q);case eI:return C.name==Q.name&&C.message==Q.message;case og:case L:return C==Q+"";case rI:var m=lt;case LI:var Z=n&l;if(m||(m=ai),C.size!=Q.size&&!Z)return!1;var eA=f.get(C);if(eA)return eA==Q;n|=G,f.set(C,Q);var aA=qs(m(C),m(Q),n,k,K,f);return f.delete(C),aA;case J:if(cE)return cE.call(C)==cE.call(Q)}return!1}function _r(C,Q,e,n,k,K){var f=e&l,m=Pt(C),Z=m.length,eA=Pt(Q),aA=eA.length;if(Z!=aA&&!f)return!1;for(var hA=Z;hA--;){var NA=m[hA];if(!(f?NA in Q:NI.call(Q,NA)))return!1}var YA=K.get(C),ZA=K.get(Q);if(YA&&ZA)return YA==Q&&ZA==C;var CI=!0;K.set(C,Q),K.set(Q,C);for(var WA=f;++hA<Z;){NA=m[hA];var iI=C[NA],hI=Q[NA];if(n)var Tg=f?n(hI,iI,NA,Q,C,K):n(iI,hI,NA,C,Q,K);if(!(Tg===I?iI===hI||k(iI,hI,e,n,K):Tg)){CI=!1;break}WA||(WA=NA=="constructor")}if(CI&&!WA){var Kg=C.constructor,xg=Q.constructor;Kg!=xg&&"constructor"in C&&"constructor"in Q&&!(typeof Kg=="function"&&Kg instanceof Kg&&typeof xg=="function"&&xg instanceof xg)&&(CI=!1)}return K.delete(C),K.delete(Q),CI}function bC(C){return Ie(us(C,I,vs),C+"")}function Pt(C){return zD(C,tg,zt)}function Vt(C){return zD(C,Rg,ps)}var jt=yi?function(C){return yi.get(C)}:ne;function ui(C){for(var Q=C.name+"",e=lQ[Q],n=NI.call(lQ,Q)?e.length:0;n--;){var k=e[n],K=k.func;if(K==null||K==C)return k.name}return Q}function KQ(C){var Q=NI.call(y,"placeholder")?y:C;return Q.placeholder}function bA(){var C=y.iteratee||De;return C=C===De?As:C,arguments.length?C(arguments[0],arguments[1]):C}function Hi(C,Q){var e=C.__data__;return Bc(Q)?e[typeof Q=="string"?"string":"hash"]:e.map}function _t(C){for(var Q=tg(C),e=Q.length;e--;){var n=Q[e],k=C[n];Q[e]=[n,k,Ys(k)]}return Q}function HB(C,Q){var e=iG(C,Q);return $D(e)?e:I}function zr(C){var Q=NI.call(C,dB),e=C[dB];try{C[dB]=I;var n=!0}catch{}var k=hi.call(C);return n&&(Q?C[dB]=e:delete C[dB]),k}var zt=Mt?function(C){return C==null?[]:(C=FI(C),eB(Mt(C),function(Q){return HD.call(C,Q)}))}:he,ps=Mt?function(C){for(var Q=[];C;)aB(Q,zt(C)),C=Gi(C);return Q}:he,rg=Mg;(Ut&&rg(new Ut(new ArrayBuffer(1)))!=TA||wE&&rg(new wE)!=rI||Kt&&rg(Kt.resolve())!=OI||kQ&&rg(new kQ)!=LI||GE&&rg(new GE)!=cA)&&(rg=function(C){var Q=Mg(C),e=Q==mI?C.constructor:I,n=e?mB(e):"";if(n)switch(n){case dG:return TA;case LG:return rI;case YG:return OI;case fG:return LI;case uG:return cA}return Q});function Xr(C,Q,e){for(var n=-1,k=e.length;++n<k;){var K=e[n],f=K.size;switch(K.type){case"drop":C+=f;break;case"dropRight":Q-=f;break;case"take":Q=Gg(Q,C+f);break;case"takeRight":C=Cg(C,Q-f);break}}return{start:C,end:Q}}function $r(C){var Q=C.match(X);return Q?Q[1].split(iA):[]}function ds(C,Q,e){Q=SB(Q,C);for(var n=-1,k=Q.length,K=!1;++n<k;){var f=FC(Q[n]);if(!(K=C!=null&&e(C,f)))break;C=C[f]}return K||++n!=k?K:(k=C==null?0:C.length,!!k&&Wi(k)&&ZC(f,k)&&(AI(C)||TB(C)))}function Ac(C){var Q=C.length,e=new C.constructor(Q);return Q&&typeof C[0]=="string"&&NI.call(C,"index")&&(e.index=C.index,e.input=C.input),e}function Ls(C){return typeof C.constructor=="function"&&!NE(C)?yQ(Gi(C)):{}}function Ic(C,Q,e){var n=C.constructor;switch(Q){case KA:return Zt(C);case LA:case fA:return new n(+C);case TA:return Hr(C,e);case H:case j:case FA:case dA:case qA:case uA:case VA:case DI:case O:return Ss(C,e);case rI:return new n;case HI:case L:return new n(C);case og:return mr(C);case LI:return new n;case J:return Tr(C)}}function gc(C,Q){var e=Q.length;if(!e)return C;var n=e-1;return Q[n]=(e>1?"& ":"")+Q[n],Q=Q.join(e>2?", ":" "),C.replace(R,`{
/* [wrapped with `+Q+`] */
`)}function Cc(C){return AI(C)||TB(C)||!!(mD&&C&&C[mD])}function ZC(C,Q){var e=typeof C;return Q=Q==null?BA:Q,!!Q&&(e=="number"||e!="symbol"&&fI.test(C))&&C>-1&&C%1==0&&C<Q}function Ug(C,Q,e){if(!xI(e))return!1;var n=typeof Q;return(n=="number"?Fg(e)&&ZC(Q,e.length):n=="string"&&Q in e)?sC(e[Q],C):!1}function Xt(C,Q){if(AI(C))return!1;var e=typeof C;return e=="number"||e=="symbol"||e=="boolean"||C==null||mg(C)?!0:Qt.test(C)||!Ng.test(C)||Q!=null&&C in FI(Q)}function Bc(C){var Q=typeof C;return Q=="string"||Q=="number"||Q=="symbol"||Q=="boolean"?C!=="__proto__":C===null}function $t(C){var Q=ui(C),e=y[Q];if(typeof e!="function"||!(Q in aI.prototype))return!1;if(C===e)return!0;var n=jt(e);return!!n&&C===n[0]}function Qc(C){return!!YD&&YD in C}var Ec=si?WC:Se;function NE(C){var Q=C&&C.constructor,e=typeof Q=="function"&&Q.prototype||cQ;return C===e}function Ys(C){return C===C&&!xI(C)}function fs(C,Q){return function(e){return e==null?!1:e[C]===Q&&(Q!==I||C in FI(e))}}function ic(C){var Q=bi(C,function(n){return e.size===a&&e.clear(),n}),e=Q.cache;return Q}function oc(C,Q){var e=C[1],n=Q[1],k=e|n,K=k<(w|U|x),f=n==x&&e==q||n==x&&e==M&&C[7].length<=Q[8]||n==(x|M)&&Q[7].length<=Q[8]&&e==q;if(!(K||f))return C;n&w&&(C[2]=Q[2],k|=e&w?0:d);var m=Q[3];if(m){var Z=C[3];C[3]=Z?Gs(Z,m,Q[4]):m,C[4]=Z?DB(C[3],s):Q[4]}return m=Q[5],m&&(Z=C[5],C[5]=Z?rs(Z,m,Q[6]):m,C[6]=Z?DB(C[5],s):Q[6]),m=Q[7],m&&(C[7]=m),n&x&&(C[8]=C[8]==null?Q[8]:Gg(C[8],Q[8])),C[9]==null&&(C[9]=Q[9]),C[0]=Q[0],C[1]=k,C}function tc(C){var Q=[];if(C!=null)for(var e in FI(C))Q.push(e);return Q}function ec(C){return hi.call(C)}function us(C,Q,e){return Q=Cg(Q===I?C.length-1:Q,0),function(){for(var n=arguments,k=-1,K=Cg(n.length-Q,0),f=gA(K);++k<K;)f[k]=n[Q+k];k=-1;for(var m=gA(Q+1);++k<Q;)m[k]=n[k];return m[Q]=e(f),fg(C,this,m)}}function Hs(C,Q){return Q.length<2?C:uB(C,$g(Q,0,-1))}function ac(C,Q){for(var e=C.length,n=Gg(Q.length,e),k=Jg(C);n--;){var K=Q[n];C[n]=ZC(K,e)?k[K]:I}return C}function Ae(C,Q){if(!(Q==="constructor"&&typeof C[Q]=="function")&&Q!="__proto__")return C[Q]}var ms=xs(os),JE=KG||function(C,Q){return ng.setTimeout(C,Q)},Ie=xs(Lr);function Ts(C,Q,e){var n=Q+"";return Ie(C,gc(n,Dc($r(n),e)))}function xs(C){var Q=0,e=0;return function(){var n=RG(),k=W-(n-e);if(e=n,k>0){if(++Q>=SA)return arguments[0]}else Q=0;return C.apply(I,arguments)}}function mi(C,Q){var e=-1,n=C.length,k=n-1;for(Q=Q===I?n:Q;++e<Q;){var K=ut(e,k),f=C[K];C[K]=C[e],C[e]=f}return C.length=Q,C}var Os=ic(function(C){var Q=[];return C.charCodeAt(0)===46&&Q.push(""),C.replace(aQ,function(e,n,k,K){Q.push(k?K.replace(OA,"$1"):n||e)}),Q});function FC(C){if(typeof C=="string"||mg(C))return C;var Q=C+"";return Q=="0"&&1/C==-DA?"-0":Q}function mB(C){if(C!=null){try{return ni.call(C)}catch{}try{return C+""}catch{}}return""}function Dc(C,Q){return jg(JA,function(e){var n="_."+e[0];Q&e[1]&&!ti(C,n)&&C.push(n)}),C.sort()}function bs(C){if(C instanceof aI)return C.clone();var Q=new zg(C.__wrapped__,C.__chain__);return Q.__actions__=Jg(C.__actions__),Q.__index__=C.__index__,Q.__values__=C.__values__,Q}function sc(C,Q,e){(e?Ug(C,Q,e):Q===I)?Q=1:Q=Cg(gI(Q),0);var n=C==null?0:C.length;if(!n||Q<1)return[];for(var k=0,K=0,f=gA(ki(n/Q));k<n;)f[K++]=$g(C,k,k+=Q);return f}function nc(C){for(var Q=-1,e=C==null?0:C.length,n=0,k=[];++Q<e;){var K=C[Q];K&&(k[n++]=K)}return k}function hc(){var C=arguments.length;if(!C)return[];for(var Q=gA(C-1),e=arguments[0],n=C;n--;)Q[n-1]=arguments[n];return aB(AI(e)?Jg(e):[e],hg(Q,1))}var Sc=BI(function(C,Q){return VI(C)?lE(C,hg(Q,1,VI,!0)):[]}),wc=BI(function(C,Q){var e=AC(Q);return VI(e)&&(e=I),VI(C)?lE(C,hg(Q,1,VI,!0),bA(e,2)):[]}),Gc=BI(function(C,Q){var e=AC(Q);return VI(e)&&(e=I),VI(C)?lE(C,hg(Q,1,VI,!0),I,e):[]});function rc(C,Q,e){var n=C==null?0:C.length;return n?(Q=e||Q===I?1:gI(Q),$g(C,Q<0?0:Q,n)):[]}function cc(C,Q,e){var n=C==null?0:C.length;return n?(Q=e||Q===I?1:gI(Q),Q=n-Q,$g(C,0,Q<0?0:Q)):[]}function kc(C,Q){return C&&C.length?qi(C,bA(Q,3),!0,!0):[]}function lc(C,Q){return C&&C.length?qi(C,bA(Q,3),!0):[]}function yc(C,Q,e,n){var k=C==null?0:C.length;return k?(e&&typeof e!="number"&&Ug(C,Q,e)&&(e=0,n=k),hr(C,Q,e,n)):[]}function Zs(C,Q,e){var n=C==null?0:C.length;if(!n)return-1;var k=e==null?0:gI(e);return k<0&&(k=Cg(n+k,0)),ei(C,bA(Q,3),k)}function Ws(C,Q,e){var n=C==null?0:C.length;if(!n)return-1;var k=n-1;return e!==I&&(k=gI(e),k=e<0?Cg(n+k,0):Gg(k,n-1)),ei(C,bA(Q,3),k,!0)}function vs(C){var Q=C==null?0:C.length;return Q?hg(C,1):[]}function Mc(C){var Q=C==null?0:C.length;return Q?hg(C,DA):[]}function Uc(C,Q){var e=C==null?0:C.length;return e?(Q=Q===I?1:gI(Q),hg(C,Q)):[]}function Kc(C){for(var Q=-1,e=C==null?0:C.length,n={};++Q<e;){var k=C[Q];n[k[0]]=k[1]}return n}function Ps(C){return C&&C.length?C[0]:I}function Nc(C,Q,e){var n=C==null?0:C.length;if(!n)return-1;var k=e==null?0:gI(e);return k<0&&(k=Cg(n+k,0)),SQ(C,Q,k)}function Jc(C){var Q=C==null?0:C.length;return Q?$g(C,0,-1):[]}var Fc=BI(function(C){var Q=uI(C,Ot);return Q.length&&Q[0]===C[0]?pt(Q):[]}),Rc=BI(function(C){var Q=AC(C),e=uI(C,Ot);return Q===AC(e)?Q=I:e.pop(),e.length&&e[0]===C[0]?pt(e,bA(Q,2)):[]}),qc=BI(function(C){var Q=AC(C),e=uI(C,Ot);return Q=typeof Q=="function"?Q:I,Q&&e.pop(),e.length&&e[0]===C[0]?pt(e,I,Q):[]});function pc(C,Q){return C==null?"":JG.call(C,Q)}function AC(C){var Q=C==null?0:C.length;return Q?C[Q-1]:I}function dc(C,Q,e){var n=C==null?0:C.length;if(!n)return-1;var k=n;return e!==I&&(k=gI(e),k=k<0?Cg(n+k,0):Gg(k,n-1)),Q===Q?DG(C,Q,k):ei(C,ND,k,!0)}function Lc(C,Q){return C&&C.length?Bs(C,gI(Q)):I}var Yc=BI(Vs);function Vs(C,Q){return C&&C.length&&Q&&Q.length?ft(C,Q):C}function fc(C,Q,e){return C&&C.length&&Q&&Q.length?ft(C,Q,bA(e,2)):C}function uc(C,Q,e){return C&&C.length&&Q&&Q.length?ft(C,Q,I,e):C}var Hc=bC(function(C,Q){var e=C==null?0:C.length,n=Jt(C,Q);return is(C,uI(Q,function(k){return ZC(k,e)?+k:k}).sort(ws)),n});function mc(C,Q){var e=[];if(!(C&&C.length))return e;var n=-1,k=[],K=C.length;for(Q=bA(Q,3);++n<K;){var f=C[n];Q(f,n,C)&&(e.push(f),k.push(n))}return is(C,k),e}function ge(C){return C==null?C:pG.call(C)}function Tc(C,Q,e){var n=C==null?0:C.length;return n?(e&&typeof e!="number"&&Ug(C,Q,e)?(Q=0,e=n):(Q=Q==null?0:gI(Q),e=e===I?n:gI(e)),$g(C,Q,e)):[]}function xc(C,Q){return Ri(C,Q)}function Oc(C,Q,e){return mt(C,Q,bA(e,2))}function bc(C,Q){var e=C==null?0:C.length;if(e){var n=Ri(C,Q);if(n<e&&sC(C[n],Q))return n}return-1}function Zc(C,Q){return Ri(C,Q,!0)}function Wc(C,Q,e){return mt(C,Q,bA(e,2),!0)}function vc(C,Q){var e=C==null?0:C.length;if(e){var n=Ri(C,Q,!0)-1;if(sC(C[n],Q))return n}return-1}function Pc(C){return C&&C.length?ts(C):[]}function Vc(C,Q){return C&&C.length?ts(C,bA(Q,2)):[]}function jc(C){var Q=C==null?0:C.length;return Q?$g(C,1,Q):[]}function _c(C,Q,e){return C&&C.length?(Q=e||Q===I?1:gI(Q),$g(C,0,Q<0?0:Q)):[]}function zc(C,Q,e){var n=C==null?0:C.length;return n?(Q=e||Q===I?1:gI(Q),Q=n-Q,$g(C,Q<0?0:Q,n)):[]}function Xc(C,Q){return C&&C.length?qi(C,bA(Q,3),!1,!0):[]}function $c(C,Q){return C&&C.length?qi(C,bA(Q,3)):[]}var Ak=BI(function(C){return hB(hg(C,1,VI,!0))}),Ik=BI(function(C){var Q=AC(C);return VI(Q)&&(Q=I),hB(hg(C,1,VI,!0),bA(Q,2))}),gk=BI(function(C){var Q=AC(C);return Q=typeof Q=="function"?Q:I,hB(hg(C,1,VI,!0),I,Q)});function Ck(C){return C&&C.length?hB(C):[]}function Bk(C,Q){return C&&C.length?hB(C,bA(Q,2)):[]}function Qk(C,Q){return Q=typeof Q=="function"?Q:I,C&&C.length?hB(C,I,Q):[]}function Ce(C){if(!(C&&C.length))return[];var Q=0;return C=eB(C,function(e){if(VI(e))return Q=Cg(e.length,Q),!0}),ct(Q,function(e){return uI(C,wt(e))})}function js(C,Q){if(!(C&&C.length))return[];var e=Ce(C);return Q==null?e:uI(e,function(n){return fg(Q,I,n)})}var Ek=BI(function(C,Q){return VI(C)?lE(C,Q):[]}),ik=BI(function(C){return xt(eB(C,VI))}),ok=BI(function(C){var Q=AC(C);return VI(Q)&&(Q=I),xt(eB(C,VI),bA(Q,2))}),tk=BI(function(C){var Q=AC(C);return Q=typeof Q=="function"?Q:I,xt(eB(C,VI),I,Q)}),ek=BI(Ce);function ak(C,Q){return ss(C||[],Q||[],kE)}function Dk(C,Q){return ss(C||[],Q||[],UE)}var sk=BI(function(C){var Q=C.length,e=Q>1?C[Q-1]:I;return e=typeof e=="function"?(C.pop(),e):I,js(C,e)});function _s(C){var Q=y(C);return Q.__chain__=!0,Q}function nk(C,Q){return Q(C),C}function Ti(C,Q){return Q(C)}var hk=bC(function(C){var Q=C.length,e=Q?C[0]:0,n=this.__wrapped__,k=function(K){return Jt(K,C)};return Q>1||this.__actions__.length||!(n instanceof aI)||!ZC(e)?this.thru(k):(n=n.slice(e,+e+(Q?1:0)),n.__actions__.push({func:Ti,args:[k],thisArg:I}),new zg(n,this.__chain__).thru(function(K){return Q&&!K.length&&K.push(I),K}))});function Sk(){return _s(this)}function wk(){return new zg(this.value(),this.__chain__)}function Gk(){this.__values__===I&&(this.__values__=an(this.value()));var C=this.__index__>=this.__values__.length,Q=C?I:this.__values__[this.__index__++];return{done:C,value:Q}}function rk(){return this}function ck(C){for(var Q,e=this;e instanceof Ui;){var n=bs(e);n.__index__=0,n.__values__=I,Q?k.__wrapped__=n:Q=n;var k=n;e=e.__wrapped__}return k.__wrapped__=C,Q}function kk(){var C=this.__wrapped__;if(C instanceof aI){var Q=C;return this.__actions__.length&&(Q=new aI(this)),Q=Q.reverse(),Q.__actions__.push({func:Ti,args:[ge],thisArg:I}),new zg(Q,this.__chain__)}return this.thru(ge)}function lk(){return Ds(this.__wrapped__,this.__actions__)}var yk=pi(function(C,Q,e){NI.call(C,e)?++C[e]:xC(C,e,1)});function Mk(C,Q,e){var n=AI(C)?UD:nr;return e&&Ug(C,Q,e)&&(Q=I),n(C,bA(Q,3))}function Uk(C,Q){var e=AI(C)?eB:jD;return e(C,bA(Q,3))}var Kk=ys(Zs),Nk=ys(Ws);function Jk(C,Q){return hg(xi(C,Q),1)}function Fk(C,Q){return hg(xi(C,Q),DA)}function Rk(C,Q,e){return e=e===I?1:gI(e),hg(xi(C,Q),e)}function zs(C,Q){var e=AI(C)?jg:nB;return e(C,bA(Q,3))}function Xs(C,Q){var e=AI(C)?jw:VD;return e(C,bA(Q,3))}var qk=pi(function(C,Q,e){NI.call(C,e)?C[e].push(Q):xC(C,e,[Q])});function pk(C,Q,e,n){C=Fg(C)?C:JQ(C),e=e&&!n?gI(e):0;var k=C.length;return e<0&&(e=Cg(k+e,0)),vi(C)?e<=k&&C.indexOf(Q,e)>-1:!!k&&SQ(C,Q,e)>-1}var dk=BI(function(C,Q,e){var n=-1,k=typeof Q=="function",K=Fg(C)?gA(C.length):[];return nB(C,function(f){K[++n]=k?fg(Q,f,e):yE(f,Q,e)}),K}),Lk=pi(function(C,Q,e){xC(C,e,Q)});function xi(C,Q){var e=AI(C)?uI:Is;return e(C,bA(Q,3))}function Yk(C,Q,e,n){return C==null?[]:(AI(Q)||(Q=Q==null?[]:[Q]),e=n?I:e,AI(e)||(e=e==null?[]:[e]),Qs(C,Q,e))}var fk=pi(function(C,Q,e){C[e?0:1].push(Q)},function(){return[[],[]]});function uk(C,Q,e){var n=AI(C)?ht:FD,k=arguments.length<3;return n(C,bA(Q,4),e,k,nB)}function Hk(C,Q,e){var n=AI(C)?_w:FD,k=arguments.length<3;return n(C,bA(Q,4),e,k,VD)}function mk(C,Q){var e=AI(C)?eB:jD;return e(C,Zi(bA(Q,3)))}function Tk(C){var Q=AI(C)?ZD:pr;return Q(C)}function xk(C,Q,e){(e?Ug(C,Q,e):Q===I)?Q=1:Q=gI(Q);var n=AI(C)?tr:dr;return n(C,Q)}function Ok(C){var Q=AI(C)?er:Yr;return Q(C)}function bk(C){if(C==null)return 0;if(Fg(C))return vi(C)?GQ(C):C.length;var Q=rg(C);return Q==rI||Q==LI?C.size:Lt(C).length}function Zk(C,Q,e){var n=AI(C)?St:fr;return e&&Ug(C,Q,e)&&(Q=I),n(C,bA(Q,3))}var Wk=BI(function(C,Q){if(C==null)return[];var e=Q.length;return e>1&&Ug(C,Q[0],Q[1])?Q=[]:e>2&&Ug(Q[0],Q[1],Q[2])&&(Q=[Q[0]]),Qs(C,hg(Q,1),[])}),Oi=UG||function(){return ng.Date.now()};function vk(C,Q){if(typeof Q!="function")throw new _g(t);return C=gI(C),function(){if(--C<1)return Q.apply(this,arguments)}}function $s(C,Q,e){return Q=e?I:Q,Q=C&&Q==null?C.length:Q,OC(C,x,I,I,I,I,Q)}function An(C,Q){var e;if(typeof Q!="function")throw new _g(t);return C=gI(C),function(){return--C>0&&(e=Q.apply(this,arguments)),C<=1&&(Q=I),e}}var Be=BI(function(C,Q,e){var n=w;if(e.length){var k=DB(e,KQ(Be));n|=N}return OC(C,n,Q,e,k)}),In=BI(function(C,Q,e){var n=w|U;if(e.length){var k=DB(e,KQ(In));n|=N}return OC(Q,n,C,e,k)});function gn(C,Q,e){Q=e?I:Q;var n=OC(C,q,I,I,I,I,I,Q);return n.placeholder=gn.placeholder,n}function Cn(C,Q,e){Q=e?I:Q;var n=OC(C,F,I,I,I,I,I,Q);return n.placeholder=Cn.placeholder,n}function Bn(C,Q,e){var n,k,K,f,m,Z,eA=0,aA=!1,hA=!1,NA=!0;if(typeof C!="function")throw new _g(t);Q=IC(Q)||0,xI(e)&&(aA=!!e.leading,hA="maxWait"in e,K=hA?Cg(IC(e.maxWait)||0,Q):K,NA="trailing"in e?!!e.trailing:NA);function YA(jI){var nC=n,PC=k;return n=k=I,eA=jI,f=C.apply(PC,nC),f}function ZA(jI){return eA=jI,m=JE(iI,Q),aA?YA(jI):f}function CI(jI){var nC=jI-Z,PC=jI-eA,Mn=Q-nC;return hA?Gg(Mn,K-PC):Mn}function WA(jI){var nC=jI-Z,PC=jI-eA;return Z===I||nC>=Q||nC<0||hA&&PC>=K}function iI(){var jI=Oi();if(WA(jI))return hI(jI);m=JE(iI,CI(jI))}function hI(jI){return m=I,NA&&n?YA(jI):(n=k=I,f)}function Tg(){m!==I&&ns(m),eA=0,n=Z=k=m=I}function Kg(){return m===I?f:hI(Oi())}function xg(){var jI=Oi(),nC=WA(jI);if(n=arguments,k=this,Z=jI,nC){if(m===I)return ZA(Z);if(hA)return ns(m),m=JE(iI,Q),YA(Z)}return m===I&&(m=JE(iI,Q)),f}return xg.cancel=Tg,xg.flush=Kg,xg}var Pk=BI(function(C,Q){return PD(C,1,Q)}),Vk=BI(function(C,Q,e){return PD(C,IC(Q)||0,e)});function jk(C){return OC(C,Y)}function bi(C,Q){if(typeof C!="function"||Q!=null&&typeof Q!="function")throw new _g(t);var e=function(){var n=arguments,k=Q?Q.apply(this,n):n[0],K=e.cache;if(K.has(k))return K.get(k);var f=C.apply(this,n);return e.cache=K.set(k,f)||K,f};return e.cache=new(bi.Cache||TC),e}bi.Cache=TC;function Zi(C){if(typeof C!="function")throw new _g(t);return function(){var Q=arguments;switch(Q.length){case 0:return!C.call(this);case 1:return!C.call(this,Q[0]);case 2:return!C.call(this,Q[0],Q[1]);case 3:return!C.call(this,Q[0],Q[1],Q[2])}return!C.apply(this,Q)}}function _k(C){return An(2,C)}var zk=ur(function(C,Q){Q=Q.length==1&&AI(Q[0])?uI(Q[0],ug(bA())):uI(hg(Q,1),ug(bA()));var e=Q.length;return BI(function(n){for(var k=-1,K=Gg(n.length,e);++k<K;)n[k]=Q[k].call(this,n[k]);return fg(C,this,n)})}),Qe=BI(function(C,Q){var e=DB(Q,KQ(Qe));return OC(C,N,I,Q,e)}),Qn=BI(function(C,Q){var e=DB(Q,KQ(Qn));return OC(C,p,I,Q,e)}),Xk=bC(function(C,Q){return OC(C,M,I,I,I,Q)});function $k(C,Q){if(typeof C!="function")throw new _g(t);return Q=Q===I?Q:gI(Q),BI(C,Q)}function Al(C,Q){if(typeof C!="function")throw new _g(t);return Q=Q==null?0:Cg(gI(Q),0),BI(function(e){var n=e[Q],k=wB(e,0,Q);return n&&aB(k,n),fg(C,this,k)})}function Il(C,Q,e){var n=!0,k=!0;if(typeof C!="function")throw new _g(t);return xI(e)&&(n="leading"in e?!!e.leading:n,k="trailing"in e?!!e.trailing:k),Bn(C,Q,{leading:n,maxWait:Q,trailing:k})}function gl(C){return $s(C,1)}function Cl(C,Q){return Qe(bt(Q),C)}function Bl(){if(!arguments.length)return[];var C=arguments[0];return AI(C)?C:[C]}function Ql(C){return Xg(C,c)}function El(C,Q){return Q=typeof Q=="function"?Q:I,Xg(C,c,Q)}function il(C){return Xg(C,h|c)}function ol(C,Q){return Q=typeof Q=="function"?Q:I,Xg(C,h|c,Q)}function tl(C,Q){return Q==null||vD(C,Q,tg(Q))}function sC(C,Q){return C===Q||C!==C&&Q!==Q}var el=fi(qt),al=fi(function(C,Q){return C>=Q}),TB=XD(function(){return arguments}())?XD:function(C){return ZI(C)&&NI.call(C,"callee")&&!HD.call(C,"callee")},AI=gA.isArray,Dl=rD?ug(rD):cr;function Fg(C){return C!=null&&Wi(C.length)&&!WC(C)}function VI(C){return ZI(C)&&Fg(C)}function sl(C){return C===!0||C===!1||ZI(C)&&Mg(C)==LA}var GB=NG||Se,nl=cD?ug(cD):kr;function hl(C){return ZI(C)&&C.nodeType===1&&!FE(C)}function Sl(C){if(C==null)return!0;if(Fg(C)&&(AI(C)||typeof C=="string"||typeof C.splice=="function"||GB(C)||NQ(C)||TB(C)))return!C.length;var Q=rg(C);if(Q==rI||Q==LI)return!C.size;if(NE(C))return!Lt(C).length;for(var e in C)if(NI.call(C,e))return!1;return!0}function wl(C,Q){return ME(C,Q)}function Gl(C,Q,e){e=typeof e=="function"?e:I;var n=e?e(C,Q):I;return n===I?ME(C,Q,I,e):!!n}function Ee(C){if(!ZI(C))return!1;var Q=Mg(C);return Q==eI||Q==UA||typeof C.message=="string"&&typeof C.name=="string"&&!FE(C)}function rl(C){return typeof C=="number"&&TD(C)}function WC(C){if(!xI(C))return!1;var Q=Mg(C);return Q==jA||Q==xA||Q==$A||Q==lI}function En(C){return typeof C=="number"&&C==gI(C)}function Wi(C){return typeof C=="number"&&C>-1&&C%1==0&&C<=BA}function xI(C){var Q=typeof C;return C!=null&&(Q=="object"||Q=="function")}function ZI(C){return C!=null&&typeof C=="object"}var on=kD?ug(kD):yr;function cl(C,Q){return C===Q||dt(C,Q,_t(Q))}function kl(C,Q,e){return e=typeof e=="function"?e:I,dt(C,Q,_t(Q),e)}function ll(C){return tn(C)&&C!=+C}function yl(C){if(Ec(C))throw new XA(E);return $D(C)}function Ml(C){return C===null}function Ul(C){return C==null}function tn(C){return typeof C=="number"||ZI(C)&&Mg(C)==HI}function FE(C){if(!ZI(C)||Mg(C)!=mI)return!1;var Q=Gi(C);if(Q===null)return!0;var e=NI.call(Q,"constructor")&&Q.constructor;return typeof e=="function"&&e instanceof e&&ni.call(e)==kG}var ie=lD?ug(lD):Mr;function Kl(C){return En(C)&&C>=-BA&&C<=BA}var en=yD?ug(yD):Ur;function vi(C){return typeof C=="string"||!AI(C)&&ZI(C)&&Mg(C)==L}function mg(C){return typeof C=="symbol"||ZI(C)&&Mg(C)==J}var NQ=MD?ug(MD):Kr;function Nl(C){return C===I}function Jl(C){return ZI(C)&&rg(C)==cA}function Fl(C){return ZI(C)&&Mg(C)==kA}var Rl=fi(Yt),ql=fi(function(C,Q){return C<=Q});function an(C){if(!C)return[];if(Fg(C))return vi(C)?aC(C):Jg(C);if(SE&&C[SE])return tG(C[SE]());var Q=rg(C),e=Q==rI?lt:Q==LI?ai:JQ;return e(C)}function vC(C){if(!C)return C===0?C:0;if(C=IC(C),C===DA||C===-DA){var Q=C<0?-1:1;return Q*_}return C===C?C:0}function gI(C){var Q=vC(C),e=Q%1;return Q===Q?e?Q-e:Q:0}function Dn(C){return C?fB(gI(C),0,wA):0}function IC(C){if(typeof C=="number")return C;if(mg(C))return IA;if(xI(C)){var Q=typeof C.valueOf=="function"?C.valueOf():C;C=xI(Q)?Q+"":Q}if(typeof C!="string")return C===0?C:+C;C=RD(C);var e=yI.test(C);return e||nI.test(C)?vw(C.slice(2),e?2:8):zA.test(C)?IA:+C}function sn(C){return JC(C,Rg(C))}function pl(C){return C?fB(gI(C),-BA,BA):C===0?C:0}function UI(C){return C==null?"":Hg(C)}var dl=MQ(function(C,Q){if(NE(Q)||Fg(Q)){JC(Q,tg(Q),C);return}for(var e in Q)NI.call(Q,e)&&kE(C,e,Q[e])}),nn=MQ(function(C,Q){JC(Q,Rg(Q),C)}),Pi=MQ(function(C,Q,e,n){JC(Q,Rg(Q),C,n)}),Ll=MQ(function(C,Q,e,n){JC(Q,tg(Q),C,n)}),Yl=bC(Jt);function fl(C,Q){var e=yQ(C);return Q==null?e:WD(e,Q)}var ul=BI(function(C,Q){C=FI(C);var e=-1,n=Q.length,k=n>2?Q[2]:I;for(k&&Ug(Q[0],Q[1],k)&&(n=1);++e<n;)for(var K=Q[e],f=Rg(K),m=-1,Z=f.length;++m<Z;){var eA=f[m],aA=C[eA];(aA===I||sC(aA,cQ[eA])&&!NI.call(C,eA))&&(C[eA]=K[eA])}return C}),Hl=BI(function(C){return C.push(I,Rs),fg(hn,I,C)});function ml(C,Q){return KD(C,bA(Q,3),NC)}function Tl(C,Q){return KD(C,bA(Q,3),Rt)}function xl(C,Q){return C==null?C:Ft(C,bA(Q,3),Rg)}function Ol(C,Q){return C==null?C:_D(C,bA(Q,3),Rg)}function bl(C,Q){return C&&NC(C,bA(Q,3))}function Zl(C,Q){return C&&Rt(C,bA(Q,3))}function Wl(C){return C==null?[]:Ji(C,tg(C))}function vl(C){return C==null?[]:Ji(C,Rg(C))}function oe(C,Q,e){var n=C==null?I:uB(C,Q);return n===I?e:n}function Pl(C,Q){return C!=null&&ds(C,Q,Sr)}function te(C,Q){return C!=null&&ds(C,Q,wr)}var Vl=Us(function(C,Q,e){Q!=null&&typeof Q.toString!="function"&&(Q=hi.call(Q)),C[Q]=e},ae(qg)),jl=Us(function(C,Q,e){Q!=null&&typeof Q.toString!="function"&&(Q=hi.call(Q)),NI.call(C,Q)?C[Q].push(e):C[Q]=[e]},bA),_l=BI(yE);function tg(C){return Fg(C)?bD(C):Lt(C)}function Rg(C){return Fg(C)?bD(C,!0):Nr(C)}function zl(C,Q){var e={};return Q=bA(Q,3),NC(C,function(n,k,K){xC(e,Q(n,k,K),n)}),e}function Xl(C,Q){var e={};return Q=bA(Q,3),NC(C,function(n,k,K){xC(e,k,Q(n,k,K))}),e}var $l=MQ(function(C,Q,e){Fi(C,Q,e)}),hn=MQ(function(C,Q,e,n){Fi(C,Q,e,n)}),Ay=bC(function(C,Q){var e={};if(C==null)return e;var n=!1;Q=uI(Q,function(K){return K=SB(K,C),n||(n=K.length>1),K}),JC(C,Vt(C),e),n&&(e=Xg(e,h|S|c,Vr));for(var k=Q.length;k--;)Tt(e,Q[k]);return e});function Iy(C,Q){return Sn(C,Zi(bA(Q)))}var gy=bC(function(C,Q){return C==null?{}:Fr(C,Q)});function Sn(C,Q){if(C==null)return{};var e=uI(Vt(C),function(n){return[n]});return Q=bA(Q),Es(C,e,function(n,k){return Q(n,k[0])})}function Cy(C,Q,e){Q=SB(Q,C);var n=-1,k=Q.length;for(k||(k=1,C=I);++n<k;){var K=C==null?I:C[FC(Q[n])];K===I&&(n=k,K=e),C=WC(K)?K.call(C):K}return C}function By(C,Q,e){return C==null?C:UE(C,Q,e)}function Qy(C,Q,e,n){return n=typeof n=="function"?n:I,C==null?C:UE(C,Q,e,n)}var wn=Js(tg),Gn=Js(Rg);function Ey(C,Q,e){var n=AI(C),k=n||GB(C)||NQ(C);if(Q=bA(Q,4),e==null){var K=C&&C.constructor;k?e=n?new K:[]:xI(C)?e=WC(K)?yQ(Gi(C)):{}:e={}}return(k?jg:NC)(C,function(f,m,Z){return Q(e,f,m,Z)}),e}function iy(C,Q){return C==null?!0:Tt(C,Q)}function oy(C,Q,e){return C==null?C:as(C,Q,bt(e))}function ty(C,Q,e,n){return n=typeof n=="function"?n:I,C==null?C:as(C,Q,bt(e),n)}function JQ(C){return C==null?[]:kt(C,tg(C))}function ey(C){return C==null?[]:kt(C,Rg(C))}function ay(C,Q,e){return e===I&&(e=Q,Q=I),e!==I&&(e=IC(e),e=e===e?e:0),Q!==I&&(Q=IC(Q),Q=Q===Q?Q:0),fB(IC(C),Q,e)}function Dy(C,Q,e){return Q=vC(Q),e===I?(e=Q,Q=0):e=vC(e),C=IC(C),Gr(C,Q,e)}function sy(C,Q,e){if(e&&typeof e!="boolean"&&Ug(C,Q,e)&&(Q=e=I),e===I&&(typeof Q=="boolean"?(e=Q,Q=I):typeof C=="boolean"&&(e=C,C=I)),C===I&&Q===I?(C=0,Q=1):(C=vC(C),Q===I?(Q=C,C=0):Q=vC(Q)),C>Q){var n=C;C=Q,Q=n}if(e||C%1||Q%1){var k=xD();return Gg(C+k*(Q-C+Ww("1e-"+((k+"").length-1))),Q)}return ut(C,Q)}var ny=UQ(function(C,Q,e){return Q=Q.toLowerCase(),C+(e?rn(Q):Q)});function rn(C){return ee(UI(C).toLowerCase())}function cn(C){return C=UI(C),C&&C.replace(uC,BG).replace(Yw,"")}function hy(C,Q,e){C=UI(C),Q=Hg(Q);var n=C.length;e=e===I?n:fB(gI(e),0,n);var k=e;return e-=Q.length,e>=0&&C.slice(e,k)==Q}function Sy(C){return C=UI(C),C&&TI.test(C)?C.replace(vA,QG):C}function wy(C){return C=UI(C),C&&Et.test(C)?C.replace(DQ,"\\$&"):C}var Gy=UQ(function(C,Q,e){return C+(e?"-":"")+Q.toLowerCase()}),ry=UQ(function(C,Q,e){return C+(e?" ":"")+Q.toLowerCase()}),cy=ls("toLowerCase");function ky(C,Q,e){C=UI(C),Q=gI(Q);var n=Q?GQ(C):0;if(!Q||n>=Q)return C;var k=(Q-n)/2;return Yi(li(k),e)+C+Yi(ki(k),e)}function ly(C,Q,e){C=UI(C),Q=gI(Q);var n=Q?GQ(C):0;return Q&&n<Q?C+Yi(Q-n,e):C}function yy(C,Q,e){C=UI(C),Q=gI(Q);var n=Q?GQ(C):0;return Q&&n<Q?Yi(Q-n,e)+C:C}function My(C,Q,e){return e||Q==null?Q=0:Q&&(Q=+Q),qG(UI(C).replace(DE,""),Q||0)}function Uy(C,Q,e){return(e?Ug(C,Q,e):Q===I)?Q=1:Q=gI(Q),Ht(UI(C),Q)}function Ky(){var C=arguments,Q=UI(C[0]);return C.length<3?Q:Q.replace(C[1],C[2])}var Ny=UQ(function(C,Q,e){return C+(e?"_":"")+Q.toLowerCase()});function Jy(C,Q,e){return e&&typeof e!="number"&&Ug(C,Q,e)&&(Q=e=I),e=e===I?wA:e>>>0,e?(C=UI(C),C&&(typeof Q=="string"||Q!=null&&!ie(Q))&&(Q=Hg(Q),!Q&&wQ(C))?wB(aC(C),0,e):C.split(Q,e)):[]}var Fy=UQ(function(C,Q,e){return C+(e?" ":"")+ee(Q)});function Ry(C,Q,e){return C=UI(C),e=e==null?0:fB(gI(e),0,C.length),Q=Hg(Q),C.slice(e,e+Q.length)==Q}function qy(C,Q,e){var n=y.templateSettings;e&&Ug(C,Q,e)&&(Q=I),C=UI(C),Q=Pi({},Q,n,Fs);var k=Pi({},Q.imports,n.imports,Fs),K=tg(k),f=kt(k,K),m,Z,eA=0,aA=Q.interpolate||tC,hA="__p += '",NA=yt((Q.escape||tC).source+"|"+aA.source+"|"+(aA===Pg?_A:tC).source+"|"+(Q.evaluate||tC).source+"|$","g"),YA="//# sourceURL="+(NI.call(Q,"sourceURL")?(Q.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Tw+"]")+`
`;C.replace(NA,function(WA,iI,hI,Tg,Kg,xg){return hI||(hI=Tg),hA+=C.slice(eA,xg).replace(iB,EG),iI&&(m=!0,hA+=`' +
__e(`+iI+`) +
'`),Kg&&(Z=!0,hA+=`';
`+Kg+`;
__p += '`),hI&&(hA+=`' +
((__t = (`+hI+`)) == null ? '' : __t) +
'`),eA=xg+WA.length,WA}),hA+=`';
`;var ZA=NI.call(Q,"variable")&&Q.variable;if(!ZA)hA=`with (obj) {
`+hA+`
}
`;else if(tA.test(ZA))throw new XA(o);hA=(Z?hA.replace(RA,""):hA).replace(lA,"$1").replace(sA,"$1;"),hA="function("+(ZA||"obj")+`) {
`+(ZA?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(m?", __e = _.escape":"")+(Z?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+hA+`return __p
}`;var CI=ln(function(){return MI(K,YA+"return "+hA).apply(I,f)});if(CI.source=hA,Ee(CI))throw CI;return CI}function py(C){return UI(C).toLowerCase()}function dy(C){return UI(C).toUpperCase()}function Ly(C,Q,e){if(C=UI(C),C&&(e||Q===I))return RD(C);if(!C||!(Q=Hg(Q)))return C;var n=aC(C),k=aC(Q),K=qD(n,k),f=pD(n,k)+1;return wB(n,K,f).join("")}function Yy(C,Q,e){if(C=UI(C),C&&(e||Q===I))return C.slice(0,LD(C)+1);if(!C||!(Q=Hg(Q)))return C;var n=aC(C),k=pD(n,aC(Q))+1;return wB(n,0,k).join("")}function fy(C,Q,e){if(C=UI(C),C&&(e||Q===I))return C.replace(DE,"");if(!C||!(Q=Hg(Q)))return C;var n=aC(C),k=qD(n,aC(Q));return wB(n,k).join("")}function uy(C,Q){var e=u,n=$;if(xI(Q)){var k="separator"in Q?Q.separator:k;e="length"in Q?gI(Q.length):e,n="omission"in Q?Hg(Q.omission):n}C=UI(C);var K=C.length;if(wQ(C)){var f=aC(C);K=f.length}if(e>=K)return C;var m=e-GQ(n);if(m<1)return n;var Z=f?wB(f,0,m).join(""):C.slice(0,m);if(k===I)return Z+n;if(f&&(m+=Z.length-m),ie(k)){if(C.slice(m).search(k)){var eA,aA=Z;for(k.global||(k=yt(k.source,UI(II.exec(k))+"g")),k.lastIndex=0;eA=k.exec(aA);)var hA=eA.index;Z=Z.slice(0,hA===I?m:hA)}}else if(C.indexOf(Hg(k),m)!=m){var NA=Z.lastIndexOf(k);NA>-1&&(Z=Z.slice(0,NA))}return Z+n}function Hy(C){return C=UI(C),C&&JI.test(C)?C.replace(yA,sG):C}var my=UQ(function(C,Q,e){return C+(e?" ":"")+Q.toUpperCase()}),ee=ls("toUpperCase");function kn(C,Q,e){return C=UI(C),Q=e?I:Q,Q===I?oG(C)?SG(C):$w(C):C.match(Q)||[]}var ln=BI(function(C,Q){try{return fg(C,I,Q)}catch(e){return Ee(e)?e:new XA(e)}}),Ty=bC(function(C,Q){return jg(Q,function(e){e=FC(e),xC(C,e,Be(C[e],C))}),C});function xy(C){var Q=C==null?0:C.length,e=bA();return C=Q?uI(C,function(n){if(typeof n[1]!="function")throw new _g(t);return[e(n[0]),n[1]]}):[],BI(function(n){for(var k=-1;++k<Q;){var K=C[k];if(fg(K[0],this,n))return fg(K[1],this,n)}})}function Oy(C){return sr(Xg(C,h))}function ae(C){return function(){return C}}function by(C,Q){return C==null||C!==C?Q:C}var Zy=Ms(),Wy=Ms(!0);function qg(C){return C}function De(C){return As(typeof C=="function"?C:Xg(C,h))}function vy(C){return gs(Xg(C,h))}function Py(C,Q){return Cs(C,Xg(Q,h))}var Vy=BI(function(C,Q){return function(e){return yE(e,C,Q)}}),jy=BI(function(C,Q){return function(e){return yE(C,e,Q)}});function se(C,Q,e){var n=tg(Q),k=Ji(Q,n);e==null&&!(xI(Q)&&(k.length||!n.length))&&(e=Q,Q=C,C=this,k=Ji(Q,tg(Q)));var K=!(xI(e)&&"chain"in e)||!!e.chain,f=WC(C);return jg(k,function(m){var Z=Q[m];C[m]=Z,f&&(C.prototype[m]=function(){var eA=this.__chain__;if(K||eA){var aA=C(this.__wrapped__),hA=aA.__actions__=Jg(this.__actions__);return hA.push({func:Z,args:arguments,thisArg:C}),aA.__chain__=eA,aA}return Z.apply(C,aB([this.value()],arguments))})}),C}function _y(){return ng._===this&&(ng._=lG),this}function ne(){}function zy(C){return C=gI(C),BI(function(Q){return Bs(Q,C)})}var Xy=Wt(uI),$y=Wt(UD),AM=Wt(St);function yn(C){return Xt(C)?wt(FC(C)):Rr(C)}function IM(C){return function(Q){return C==null?I:uB(C,Q)}}var gM=Ks(),CM=Ks(!0);function he(){return[]}function Se(){return!1}function BM(){return{}}function QM(){return""}function EM(){return!0}function iM(C,Q){if(C=gI(C),C<1||C>BA)return[];var e=wA,n=Gg(C,wA);Q=bA(Q),C-=wA;for(var k=ct(n,Q);++e<C;)Q(e);return k}function oM(C){return AI(C)?uI(C,FC):mg(C)?[C]:Jg(Os(UI(C)))}function tM(C){var Q=++cG;return UI(C)+Q}var eM=Li(function(C,Q){return C+Q},0),aM=vt("ceil"),DM=Li(function(C,Q){return C/Q},1),sM=vt("floor");function nM(C){return C&&C.length?Ni(C,qg,qt):I}function hM(C,Q){return C&&C.length?Ni(C,bA(Q,2),qt):I}function SM(C){return JD(C,qg)}function wM(C,Q){return JD(C,bA(Q,2))}function GM(C){return C&&C.length?Ni(C,qg,Yt):I}function rM(C,Q){return C&&C.length?Ni(C,bA(Q,2),Yt):I}var cM=Li(function(C,Q){return C*Q},1),kM=vt("round"),lM=Li(function(C,Q){return C-Q},0);function yM(C){return C&&C.length?rt(C,qg):0}function MM(C,Q){return C&&C.length?rt(C,bA(Q,2)):0}return y.after=vk,y.ary=$s,y.assign=dl,y.assignIn=nn,y.assignInWith=Pi,y.assignWith=Ll,y.at=Yl,y.before=An,y.bind=Be,y.bindAll=Ty,y.bindKey=In,y.castArray=Bl,y.chain=_s,y.chunk=sc,y.compact=nc,y.concat=hc,y.cond=xy,y.conforms=Oy,y.constant=ae,y.countBy=yk,y.create=fl,y.curry=gn,y.curryRight=Cn,y.debounce=Bn,y.defaults=ul,y.defaultsDeep=Hl,y.defer=Pk,y.delay=Vk,y.difference=Sc,y.differenceBy=wc,y.differenceWith=Gc,y.drop=rc,y.dropRight=cc,y.dropRightWhile=kc,y.dropWhile=lc,y.fill=yc,y.filter=Uk,y.flatMap=Jk,y.flatMapDeep=Fk,y.flatMapDepth=Rk,y.flatten=vs,y.flattenDeep=Mc,y.flattenDepth=Uc,y.flip=jk,y.flow=Zy,y.flowRight=Wy,y.fromPairs=Kc,y.functions=Wl,y.functionsIn=vl,y.groupBy=qk,y.initial=Jc,y.intersection=Fc,y.intersectionBy=Rc,y.intersectionWith=qc,y.invert=Vl,y.invertBy=jl,y.invokeMap=dk,y.iteratee=De,y.keyBy=Lk,y.keys=tg,y.keysIn=Rg,y.map=xi,y.mapKeys=zl,y.mapValues=Xl,y.matches=vy,y.matchesProperty=Py,y.memoize=bi,y.merge=$l,y.mergeWith=hn,y.method=Vy,y.methodOf=jy,y.mixin=se,y.negate=Zi,y.nthArg=zy,y.omit=Ay,y.omitBy=Iy,y.once=_k,y.orderBy=Yk,y.over=Xy,y.overArgs=zk,y.overEvery=$y,y.overSome=AM,y.partial=Qe,y.partialRight=Qn,y.partition=fk,y.pick=gy,y.pickBy=Sn,y.property=yn,y.propertyOf=IM,y.pull=Yc,y.pullAll=Vs,y.pullAllBy=fc,y.pullAllWith=uc,y.pullAt=Hc,y.range=gM,y.rangeRight=CM,y.rearg=Xk,y.reject=mk,y.remove=mc,y.rest=$k,y.reverse=ge,y.sampleSize=xk,y.set=By,y.setWith=Qy,y.shuffle=Ok,y.slice=Tc,y.sortBy=Wk,y.sortedUniq=Pc,y.sortedUniqBy=Vc,y.split=Jy,y.spread=Al,y.tail=jc,y.take=_c,y.takeRight=zc,y.takeRightWhile=Xc,y.takeWhile=$c,y.tap=nk,y.throttle=Il,y.thru=Ti,y.toArray=an,y.toPairs=wn,y.toPairsIn=Gn,y.toPath=oM,y.toPlainObject=sn,y.transform=Ey,y.unary=gl,y.union=Ak,y.unionBy=Ik,y.unionWith=gk,y.uniq=Ck,y.uniqBy=Bk,y.uniqWith=Qk,y.unset=iy,y.unzip=Ce,y.unzipWith=js,y.update=oy,y.updateWith=ty,y.values=JQ,y.valuesIn=ey,y.without=Ek,y.words=kn,y.wrap=Cl,y.xor=ik,y.xorBy=ok,y.xorWith=tk,y.zip=ek,y.zipObject=ak,y.zipObjectDeep=Dk,y.zipWith=sk,y.entries=wn,y.entriesIn=Gn,y.extend=nn,y.extendWith=Pi,se(y,y),y.add=eM,y.attempt=ln,y.camelCase=ny,y.capitalize=rn,y.ceil=aM,y.clamp=ay,y.clone=Ql,y.cloneDeep=il,y.cloneDeepWith=ol,y.cloneWith=El,y.conformsTo=tl,y.deburr=cn,y.defaultTo=by,y.divide=DM,y.endsWith=hy,y.eq=sC,y.escape=Sy,y.escapeRegExp=wy,y.every=Mk,y.find=Kk,y.findIndex=Zs,y.findKey=ml,y.findLast=Nk,y.findLastIndex=Ws,y.findLastKey=Tl,y.floor=sM,y.forEach=zs,y.forEachRight=Xs,y.forIn=xl,y.forInRight=Ol,y.forOwn=bl,y.forOwnRight=Zl,y.get=oe,y.gt=el,y.gte=al,y.has=Pl,y.hasIn=te,y.head=Ps,y.identity=qg,y.includes=pk,y.indexOf=Nc,y.inRange=Dy,y.invoke=_l,y.isArguments=TB,y.isArray=AI,y.isArrayBuffer=Dl,y.isArrayLike=Fg,y.isArrayLikeObject=VI,y.isBoolean=sl,y.isBuffer=GB,y.isDate=nl,y.isElement=hl,y.isEmpty=Sl,y.isEqual=wl,y.isEqualWith=Gl,y.isError=Ee,y.isFinite=rl,y.isFunction=WC,y.isInteger=En,y.isLength=Wi,y.isMap=on,y.isMatch=cl,y.isMatchWith=kl,y.isNaN=ll,y.isNative=yl,y.isNil=Ul,y.isNull=Ml,y.isNumber=tn,y.isObject=xI,y.isObjectLike=ZI,y.isPlainObject=FE,y.isRegExp=ie,y.isSafeInteger=Kl,y.isSet=en,y.isString=vi,y.isSymbol=mg,y.isTypedArray=NQ,y.isUndefined=Nl,y.isWeakMap=Jl,y.isWeakSet=Fl,y.join=pc,y.kebabCase=Gy,y.last=AC,y.lastIndexOf=dc,y.lowerCase=ry,y.lowerFirst=cy,y.lt=Rl,y.lte=ql,y.max=nM,y.maxBy=hM,y.mean=SM,y.meanBy=wM,y.min=GM,y.minBy=rM,y.stubArray=he,y.stubFalse=Se,y.stubObject=BM,y.stubString=QM,y.stubTrue=EM,y.multiply=cM,y.nth=Lc,y.noConflict=_y,y.noop=ne,y.now=Oi,y.pad=ky,y.padEnd=ly,y.padStart=yy,y.parseInt=My,y.random=sy,y.reduce=uk,y.reduceRight=Hk,y.repeat=Uy,y.replace=Ky,y.result=Cy,y.round=kM,y.runInContext=b,y.sample=Tk,y.size=bk,y.snakeCase=Ny,y.some=Zk,y.sortedIndex=xc,y.sortedIndexBy=Oc,y.sortedIndexOf=bc,y.sortedLastIndex=Zc,y.sortedLastIndexBy=Wc,y.sortedLastIndexOf=vc,y.startCase=Fy,y.startsWith=Ry,y.subtract=lM,y.sum=yM,y.sumBy=MM,y.template=qy,y.times=iM,y.toFinite=vC,y.toInteger=gI,y.toLength=Dn,y.toLower=py,y.toNumber=IC,y.toSafeInteger=pl,y.toString=UI,y.toUpper=dy,y.trim=Ly,y.trimEnd=Yy,y.trimStart=fy,y.truncate=uy,y.unescape=Hy,y.uniqueId=tM,y.upperCase=my,y.upperFirst=ee,y.each=zs,y.eachRight=Xs,y.first=Ps,se(y,function(){var C={};return NC(y,function(Q,e){NI.call(y.prototype,e)||(C[e]=Q)}),C}(),{chain:!1}),y.VERSION=g,jg(["bind","bindKey","curry","curryRight","partial","partialRight"],function(C){y[C].placeholder=y}),jg(["drop","take"],function(C,Q){aI.prototype[C]=function(e){e=e===I?1:Cg(gI(e),0);var n=this.__filtered__&&!Q?new aI(this):this.clone();return n.__filtered__?n.__takeCount__=Gg(e,n.__takeCount__):n.__views__.push({size:Gg(e,wA),type:C+(n.__dir__<0?"Right":"")}),n},aI.prototype[C+"Right"]=function(e){return this.reverse()[C](e).reverse()}}),jg(["filter","map","takeWhile"],function(C,Q){var e=Q+1,n=e==v||e==GA;aI.prototype[C]=function(k){var K=this.clone();return K.__iteratees__.push({iteratee:bA(k,3),type:e}),K.__filtered__=K.__filtered__||n,K}}),jg(["head","last"],function(C,Q){var e="take"+(Q?"Right":"");aI.prototype[C]=function(){return this[e](1).value()[0]}}),jg(["initial","tail"],function(C,Q){var e="drop"+(Q?"":"Right");aI.prototype[C]=function(){return this.__filtered__?new aI(this):this[e](1)}}),aI.prototype.compact=function(){return this.filter(qg)},aI.prototype.find=function(C){return this.filter(C).head()},aI.prototype.findLast=function(C){return this.reverse().find(C)},aI.prototype.invokeMap=BI(function(C,Q){return typeof C=="function"?new aI(this):this.map(function(e){return yE(e,C,Q)})}),aI.prototype.reject=function(C){return this.filter(Zi(bA(C)))},aI.prototype.slice=function(C,Q){C=gI(C);var e=this;return e.__filtered__&&(C>0||Q<0)?new aI(e):(C<0?e=e.takeRight(-C):C&&(e=e.drop(C)),Q!==I&&(Q=gI(Q),e=Q<0?e.dropRight(-Q):e.take(Q-C)),e)},aI.prototype.takeRightWhile=function(C){return this.reverse().takeWhile(C).reverse()},aI.prototype.toArray=function(){return this.take(wA)},NC(aI.prototype,function(C,Q){var e=/^(?:filter|find|map|reject)|While$/.test(Q),n=/^(?:head|last)$/.test(Q),k=y[n?"take"+(Q=="last"?"Right":""):Q],K=n||/^find/.test(Q);!k||(y.prototype[Q]=function(){var f=this.__wrapped__,m=n?[1]:arguments,Z=f instanceof aI,eA=m[0],aA=Z||AI(f),hA=function(iI){var hI=k.apply(y,aB([iI],m));return n&&NA?hI[0]:hI};aA&&e&&typeof eA=="function"&&eA.length!=1&&(Z=aA=!1);var NA=this.__chain__,YA=!!this.__actions__.length,ZA=K&&!NA,CI=Z&&!YA;if(!K&&aA){f=CI?f:new aI(this);var WA=C.apply(f,m);return WA.__actions__.push({func:Ti,args:[hA],thisArg:I}),new zg(WA,NA)}return ZA&&CI?C.apply(this,m):(WA=this.thru(hA),ZA?n?WA.value()[0]:WA.value():WA)})}),jg(["pop","push","shift","sort","splice","unshift"],function(C){var Q=Di[C],e=/^(?:push|sort|unshift)$/.test(C)?"tap":"thru",n=/^(?:pop|shift)$/.test(C);y.prototype[C]=function(){var k=arguments;if(n&&!this.__chain__){var K=this.value();return Q.apply(AI(K)?K:[],k)}return this[e](function(f){return Q.apply(AI(f)?f:[],k)})}}),NC(aI.prototype,function(C,Q){var e=y[Q];if(e){var n=e.name+"";NI.call(lQ,n)||(lQ[n]=[]),lQ[n].push({name:Q,func:e})}}),lQ[di(I,U).name]=[{name:"wrapper",func:I}],aI.prototype.clone=HG,aI.prototype.reverse=mG,aI.prototype.value=TG,y.prototype.at=hk,y.prototype.chain=Sk,y.prototype.commit=wk,y.prototype.next=Gk,y.prototype.plant=ck,y.prototype.reverse=kk,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=lk,y.prototype.first=y.prototype.head,SE&&(y.prototype[SE]=rk),y},rQ=wG();pB?((pB.exports=rQ)._=rQ,Dt._=rQ):ng._=rQ}).call(LE)})(ya,ya.exports);function jF(i){let A,I,g;return{c(){A=IB("canvas"),RC(A,"class","svelte-tnvdss")},m(B,E){Ai(B,A,E),i[8](A),I||(g=[OE(A,"mouseup",i[6]),OE(A,"mousedown",i[7])],I=!0)},p:jQ,i:jQ,o:jQ,d(B){B&&oE(A),i[8](null),I=!1,iE(g)}}}function cw(i,...A){}function _F(i,A,I){let g,B;const E=new xh,t=new xh;t.background=new wI(0),wS(()=>{B=new ZS({canvas:g}),B.setSize(window.innerWidth,window.innerHeight)});function o(){return g}let D=!0;function a(F){g&&B&&(B.render(E,F),D=!0)}let s=0,h={};function S(F,...N){E.add(...N),F&&(s=ya.exports.reduce(N,(p,x)=>{const M=x.clone(),Y=p+1;return w(M,Y),h[Y]={_viewable:x,_pickable:M},t.add(M),Y},s))}const c=new NB(1,1),l=new Uint8Array(4);function G(F,N){D&&Object.entries(h).forEach(([M,Y])=>{const u=Y._viewable,$=Y._pickable;$.position.copy(u.position),$.rotation.copy(u.rotation),$.scale.copy(u.scale),D=!1});const p=B.getPixelRatio();N.setViewOffset(B.getContext().drawingBufferWidth,B.getContext().drawingBufferHeight,F.x*p|0,F.y*p|0,1,1),B.setRenderTarget(c),B.render(t,N),B.setRenderTarget(null),N.clearViewOffset(),B.readRenderTargetPixels(c,0,0,1,1,l);const x=l[0]<<16|l[1]<<8|l[2];return h[x]}function w(F,N){F instanceof lC&&(F.material=new dF({emissive:new wI(N),color:new wI(0,0,0),specular:new wI(0,0,0),map:F.material.map,transparent:!0,side:gB,alphaTest:.5,blending:CB})),F.children.forEach(p=>{w(p,N)})}function U(F){Nn.call(this,i,F)}function d(F){Nn.call(this,i,F)}function q(F){po[F?"unshift":"push"](()=>{g=F,I(0,g)})}return[g,o,a,S,cw,G,U,d,q]}class zF extends qa{constructor(A){super(),Ra(this,A,_F,jF,Ka,{canvas:1,render:2,add:3,remove:4,pick:5})}get canvas(){return this.$$.ctx[1]}get render(){return this.$$.ctx[2]}get add(){return this.$$.ctx[3]}get remove(){return cw}get pick(){return this.$$.ctx[5]}}/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */const AS=64*1024,XF=5*1e3,$F=5*1e3;function IS(i){const A=new Uint8Array(i);for(let I=0;I<i;I++)A[I]=Math.random()*256|0;return A}function kw(){if(typeof globalThis>"u")return null;const i={RTCPeerConnection:globalThis.RTCPeerConnection||globalThis.mozRTCPeerConnection||globalThis.webkitRTCPeerConnection,RTCSessionDescription:globalThis.RTCSessionDescription||globalThis.mozRTCSessionDescription||globalThis.webkitRTCSessionDescription,RTCIceCandidate:globalThis.RTCIceCandidate||globalThis.mozRTCIceCandidate||globalThis.webkitRTCIceCandidate};return i.RTCPeerConnection?i:null}function GI(i,A){return Object.defineProperty(i,"code",{value:A,enumerable:!0,configurable:!0}),i}function gS(i){return i.replace(/a=ice-options:trickle\s\n/g,"")}function AR(i){console.warn(i)}class oQ{constructor(A={}){if(this._map=new Map,this._id=IS(4).toString("hex").slice(0,7),this._doDebug=A.debug,this._debug("new peer %o",A),this.channelName=A.initiator?A.channelName||IS(20).toString("hex"):null,this.initiator=A.initiator||!1,this.channelConfig=A.channelConfig||oQ.channelConfig,this.channelNegotiated=this.channelConfig.negotiated,this.config=Object.assign({},oQ.config,A.config),this.offerOptions=A.offerOptions||{},this.answerOptions=A.answerOptions||{},this.sdpTransform=A.sdpTransform||(I=>I),this.streams=A.streams||(A.stream?[A.stream]:[]),this.trickle=A.trickle!==void 0?A.trickle:!0,this.allowHalfTrickle=A.allowHalfTrickle!==void 0?A.allowHalfTrickle:!1,this.iceCompleteTimeout=A.iceCompleteTimeout||XF,this.destroyed=!1,this.destroying=!1,this._connected=!1,this.remoteAddress=void 0,this.remoteFamily=void 0,this.remotePort=void 0,this.localAddress=void 0,this.localFamily=void 0,this.localPort=void 0,this._wrtc=A.wrtc&&typeof A.wrtc=="object"?A.wrtc:kw(),!this._wrtc)throw GI(typeof window>"u"?new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"):new Error("No WebRTC support: Not a supported browser"),"ERR_WEBRTC_SUPPORT");this._pcReady=!1,this._channelReady=!1,this._iceComplete=!1,this._iceCompleteTimer=null,this._channel=null,this._pendingCandidates=[],this._isNegotiating=!1,this._firstNegotiation=!0,this._batchedNegotiation=!1,this._queuedNegotiation=!1,this._sendersAwaitingStable=[],this._senderMap=new Map,this._closingInterval=null,this._remoteTracks=[],this._remoteStreams=[],this._chunk=null,this._cb=null,this._interval=null;try{this._pc=new this._wrtc.RTCPeerConnection(this.config)}catch(I){this.destroy(GI(I,"ERR_PC_CONSTRUCTOR"));return}this._isReactNativeWebrtc=typeof this._pc._peerConnectionId=="number",this._pc.oniceconnectionstatechange=()=>{this._onIceStateChange()},this._pc.onicegatheringstatechange=()=>{this._onIceStateChange()},this._pc.onconnectionstatechange=()=>{this._onConnectionStateChange()},this._pc.onsignalingstatechange=()=>{this._onSignalingStateChange()},this._pc.onicecandidate=I=>{this._onIceCandidate(I)},typeof this._pc.peerIdentity=="object"&&this._pc.peerIdentity.catch(I=>{this.destroy(GI(I,"ERR_PC_PEER_IDENTITY"))}),this.initiator||this.channelNegotiated?this._setupData({channel:this._pc.createDataChannel(this.channelName,this.channelConfig)}):this._pc.ondatachannel=I=>{this._setupData(I)},this.streams&&this.streams.forEach(I=>{this.addStream(I)}),this._pc.ontrack=I=>{this._onTrack(I)},this._debug("initial negotiation"),this._needsNegotiation()}get bufferSize(){return this._channel&&this._channel.bufferedAmount||0}get connected(){return this._connected&&this._channel.readyState==="open"}address(){return{port:this.localPort,family:this.localFamily,address:this.localAddress}}signal(A){if(!this.destroying){if(this.destroyed)throw GI(new Error("cannot signal after peer is destroyed"),"ERR_DESTROYED");if(typeof A=="string")try{A=JSON.parse(A)}catch{A={}}this._debug("signal()"),A.renegotiate&&this.initiator&&(this._debug("got request to renegotiate"),this._needsNegotiation()),A.transceiverRequest&&this.initiator&&(this._debug("got request for transceiver"),this.addTransceiver(A.transceiverRequest.kind,A.transceiverRequest.init)),A.candidate&&(this._pc.remoteDescription&&this._pc.remoteDescription.type?this._addIceCandidate(A.candidate):this._pendingCandidates.push(A.candidate)),A.sdp&&this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(A)).then(()=>{this.destroyed||(this._pendingCandidates.forEach(I=>{this._addIceCandidate(I)}),this._pendingCandidates=[],this._pc.remoteDescription.type==="offer"&&this._createAnswer())}).catch(I=>{this.destroy(GI(I,"ERR_SET_REMOTE_DESCRIPTION"))}),!A.sdp&&!A.candidate&&!A.renegotiate&&!A.transceiverRequest&&this.destroy(GI(new Error("signal() called with invalid signal data"),"ERR_SIGNALING"))}}_addIceCandidate(A){const I=new this._wrtc.RTCIceCandidate(A);this._pc.addIceCandidate(I).catch(g=>{!I.address||I.address.endsWith(".local")?AR("Ignoring unsupported ICE candidate."):this.destroy(GI(g,"ERR_ADD_ICE_CANDIDATE"))})}send(A){if(!this.destroying){if(this.destroyed)throw GI(new Error("cannot send after peer is destroyed"),"ERR_DESTROYED");this._channel.send(A)}}addTransceiver(A,I){if(!this.destroying){if(this.destroyed)throw GI(new Error("cannot addTransceiver after peer is destroyed"),"ERR_DESTROYED");if(this._debug("addTransceiver()"),this.initiator)try{this._pc.addTransceiver(A,I),this._needsNegotiation()}catch(g){this.destroy(GI(g,"ERR_ADD_TRANSCEIVER"))}else this.emit("signal",{type:"transceiverRequest",transceiverRequest:{kind:A,init:I}})}}addStream(A){if(!this.destroying){if(this.destroyed)throw GI(new Error("cannot addStream after peer is destroyed"),"ERR_DESTROYED");this._debug("addStream()"),A.getTracks().forEach(I=>{this.addTrack(I,A)})}}addTrack(A,I){if(this.destroying)return;if(this.destroyed)throw GI(new Error("cannot addTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("addTrack()");const g=this._senderMap.get(A)||new Map;let B=g.get(I);if(!B)B=this._pc.addTrack(A,I),g.set(I,B),this._senderMap.set(A,g),this._needsNegotiation();else throw B.removed?GI(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."),"ERR_SENDER_REMOVED"):GI(new Error("Track has already been added to that stream."),"ERR_SENDER_ALREADY_ADDED")}replaceTrack(A,I,g){if(this.destroying)return;if(this.destroyed)throw GI(new Error("cannot replaceTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("replaceTrack()");const B=this._senderMap.get(A),E=B?B.get(g):null;if(!E)throw GI(new Error("Cannot replace track that was never added."),"ERR_TRACK_NOT_ADDED");I&&this._senderMap.set(I,B),E.replaceTrack!=null?E.replaceTrack(I):this.destroy(GI(new Error("replaceTrack is not supported in this browser"),"ERR_UNSUPPORTED_REPLACETRACK"))}removeTrack(A,I){if(this.destroying)return;if(this.destroyed)throw GI(new Error("cannot removeTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSender()");const g=this._senderMap.get(A),B=g?g.get(I):null;if(!B)throw GI(new Error("Cannot remove track that was never added."),"ERR_TRACK_NOT_ADDED");try{B.removed=!0,this._pc.removeTrack(B)}catch(E){E.name==="NS_ERROR_UNEXPECTED"?this._sendersAwaitingStable.push(B):this.destroy(GI(E,"ERR_REMOVE_TRACK"))}this._needsNegotiation()}removeStream(A){if(!this.destroying){if(this.destroyed)throw GI(new Error("cannot removeStream after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSenders()"),A.getTracks().forEach(I=>{this.removeTrack(I,A)})}}_needsNegotiation(){this._debug("_needsNegotiation"),!this._batchedNegotiation&&(this._batchedNegotiation=!0,queueMicrotask(()=>{this._batchedNegotiation=!1,this.initiator||!this._firstNegotiation?(this._debug("starting batched negotiation"),this.negotiate()):this._debug("non-initiator initial negotiation request discarded"),this._firstNegotiation=!1}))}negotiate(){if(!this.destroying){if(this.destroyed)throw GI(new Error("cannot negotiate after peer is destroyed"),"ERR_DESTROYED");this.initiator?this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("start negotiation"),setTimeout(()=>{this._createOffer()},0)):this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("requesting negotiation from initiator"),this.emit("signal",{type:"renegotiate",renegotiate:!0})),this._isNegotiating=!0}}destroy(A){this.destroyed||this.destroying||(this.destroying=!0,this._debug("destroying (error: %s)",A&&(A.message||A)),queueMicrotask(()=>{if(this.destroyed=!0,this.destroying=!1,this._debug("destroy (error: %s)",A&&(A.message||A)),this._connected=!1,this._pcReady=!1,this._channelReady=!1,this._remoteTracks=null,this._remoteStreams=null,this._senderMap=null,clearInterval(this._closingInterval),this._closingInterval=null,clearInterval(this._interval),this._interval=null,this._chunk=null,this._cb=null,this._channel){try{this._channel.close()}catch{}this._channel.onmessage=null,this._channel.onopen=null,this._channel.onclose=null,this._channel.onerror=null}if(this._pc){try{this._pc.close()}catch{}this._pc.oniceconnectionstatechange=null,this._pc.onicegatheringstatechange=null,this._pc.onsignalingstatechange=null,this._pc.onicecandidate=null,this._pc.ontrack=null,this._pc.ondatachannel=null}this._pc=null,this._channel=null,A&&this.emit("error",A),this.emit("close")}))}_setupData(A){if(!A.channel)return this.destroy(GI(new Error("Data channel event is missing `channel` property"),"ERR_DATA_CHANNEL"));this._channel=A.channel,this._channel.binaryType="arraybuffer",typeof this._channel.bufferedAmountLowThreshold=="number"&&(this._channel.bufferedAmountLowThreshold=AS),this.channelName=this._channel.label,this._channel.onmessage=g=>{this._onChannelMessage(g)},this._channel.onbufferedamountlow=()=>{this._onChannelBufferedAmountLow()},this._channel.onopen=()=>{this._onChannelOpen()},this._channel.onclose=()=>{this._onChannelClose()},this._channel.onerror=g=>{this.destroy(GI(g,"ERR_DATA_CHANNEL"))};let I=!1;this._closingInterval=setInterval(()=>{this._channel&&this._channel.readyState==="closing"?(I&&this._onChannelClose(),I=!0):I=!1},$F)}_startIceCompleteTimeout(){this.destroyed||this._iceCompleteTimer||(this._debug("started iceComplete timeout"),this._iceCompleteTimer=setTimeout(()=>{this._iceComplete||(this._iceComplete=!0,this._debug("iceComplete timeout completed"),this.emit("iceTimeout"),this.emit("_iceComplete"))},this.iceCompleteTimeout))}_createOffer(){this.destroyed||this._pc.createOffer(this.offerOptions).then(A=>{if(this.destroyed)return;!this.trickle&&!this.allowHalfTrickle&&(A.sdp=gS(A.sdp)),A.sdp=this.sdpTransform(A.sdp);const I=()=>{if(this.destroyed)return;const E=this._pc.localDescription||A;this._debug("signal"),this.emit("signal",{type:E.type,sdp:E.sdp})},g=()=>{this._debug("createOffer success"),!this.destroyed&&(this.trickle||this._iceComplete?I():this.once("_iceComplete",I))},B=E=>{this.destroy(GI(E,"ERR_SET_LOCAL_DESCRIPTION"))};this._pc.setLocalDescription(A).then(g).catch(B)}).catch(A=>{this.destroy(GI(A,"ERR_CREATE_OFFER"))})}_requestMissingTransceivers(){this._pc.getTransceivers&&this._pc.getTransceivers().forEach(A=>{!A.mid&&A.sender.track&&!A.requested&&(A.requested=!0,this.addTransceiver(A.sender.track.kind))})}_createAnswer(){this.destroyed||this._pc.createAnswer(this.answerOptions).then(A=>{if(this.destroyed)return;!this.trickle&&!this.allowHalfTrickle&&(A.sdp=gS(A.sdp)),A.sdp=this.sdpTransform(A.sdp);const I=()=>{if(this.destroyed)return;const E=this._pc.localDescription||A;this._debug("signal"),this.emit("signal",{type:E.type,sdp:E.sdp}),this.initiator||this._requestMissingTransceivers()},g=()=>{this.destroyed||(this.trickle||this._iceComplete?I():this.once("_iceComplete",I))},B=E=>{this.destroy(GI(E,"ERR_SET_LOCAL_DESCRIPTION"))};this._pc.setLocalDescription(A).then(g).catch(B)}).catch(A=>{this.destroy(GI(A,"ERR_CREATE_ANSWER"))})}_onConnectionStateChange(){this.destroyed||this._pc.connectionState==="failed"&&this.destroy(GI(new Error("Connection failed."),"ERR_CONNECTION_FAILURE"))}_onIceStateChange(){if(this.destroyed)return;const A=this._pc.iceConnectionState,I=this._pc.iceGatheringState;this._debug("iceStateChange (connection: %s) (gathering: %s)",A,I),this.emit("iceStateChange",A,I),(A==="connected"||A==="completed")&&(this._pcReady=!0,this._maybeReady()),A==="failed"&&this.destroy(GI(new Error("Ice connection failed."),"ERR_ICE_CONNECTION_FAILURE")),A==="closed"&&this.destroy(GI(new Error("Ice connection closed."),"ERR_ICE_CONNECTION_CLOSED"))}getStats(A){const I=g=>(Object.prototype.toString.call(g.values)==="[object Array]"&&g.values.forEach(B=>{Object.assign(g,B)}),g);this._pc.getStats.length===0||this._isReactNativeWebrtc?this._pc.getStats().then(g=>{const B=[];g.forEach(E=>{B.push(I(E))}),A(null,B)},g=>A(g)):this._pc.getStats.length>0?this._pc.getStats(g=>{if(this.destroyed)return;const B=[];g.result().forEach(E=>{const t={};E.names().forEach(o=>{t[o]=E.stat(o)}),t.id=E.id,t.type=E.type,t.timestamp=E.timestamp,B.push(I(t))}),A(null,B)},g=>A(g)):A(null,[])}_maybeReady(){if(this._debug("maybeReady pc %s channel %s",this._pcReady,this._channelReady),this._connected||this._connecting||!this._pcReady||!this._channelReady)return;this._connecting=!0;const A=()=>{this.destroyed||this.getStats((I,g)=>{if(this.destroyed)return;I&&(g=[]);const B={},E={},t={};let o=!1;g.forEach(a=>{(a.type==="remotecandidate"||a.type==="remote-candidate")&&(B[a.id]=a),(a.type==="localcandidate"||a.type==="local-candidate")&&(E[a.id]=a),(a.type==="candidatepair"||a.type==="candidate-pair")&&(t[a.id]=a)});const D=a=>{o=!0;let s=E[a.localCandidateId];s&&(s.ip||s.address)?(this.localAddress=s.ip||s.address,this.localPort=Number(s.port)):s&&s.ipAddress?(this.localAddress=s.ipAddress,this.localPort=Number(s.portNumber)):typeof a.googLocalAddress=="string"&&(s=a.googLocalAddress.split(":"),this.localAddress=s[0],this.localPort=Number(s[1])),this.localAddress&&(this.localFamily=this.localAddress.includes(":")?"IPv6":"IPv4");let h=B[a.remoteCandidateId];h&&(h.ip||h.address)?(this.remoteAddress=h.ip||h.address,this.remotePort=Number(h.port)):h&&h.ipAddress?(this.remoteAddress=h.ipAddress,this.remotePort=Number(h.portNumber)):typeof a.googRemoteAddress=="string"&&(h=a.googRemoteAddress.split(":"),this.remoteAddress=h[0],this.remotePort=Number(h[1])),this.remoteAddress&&(this.remoteFamily=this.remoteAddress.includes(":")?"IPv6":"IPv4"),this._debug("connect local: %s:%s remote: %s:%s",this.localAddress,this.localPort,this.remoteAddress,this.remotePort)};if(g.forEach(a=>{a.type==="transport"&&a.selectedCandidatePairId&&D(t[a.selectedCandidatePairId]),(a.type==="googCandidatePair"&&a.googActiveConnection==="true"||(a.type==="candidatepair"||a.type==="candidate-pair")&&a.selected)&&D(a)}),!o&&(!Object.keys(t).length||Object.keys(E).length)){setTimeout(A,100);return}else this._connecting=!1,this._connected=!0;if(this._chunk){try{this.send(this._chunk)}catch(s){return this.destroy(GI(s,"ERR_DATA_CHANNEL"))}this._chunk=null,this._debug('sent chunk from "write before connect"');const a=this._cb;this._cb=null,a(null)}typeof this._channel.bufferedAmountLowThreshold!="number"&&(this._interval=setInterval(()=>this._onInterval(),150),this._interval.unref&&this._interval.unref()),this._debug("connect"),this.emit("connect")})};A()}_onInterval(){!this._cb||!this._channel||this._channel.bufferedAmount>AS||this._onChannelBufferedAmountLow()}_onSignalingStateChange(){this.destroyed||(this._pc.signalingState==="stable"&&(this._isNegotiating=!1,this._debug("flushing sender queue",this._sendersAwaitingStable),this._sendersAwaitingStable.forEach(A=>{this._pc.removeTrack(A),this._queuedNegotiation=!0}),this._sendersAwaitingStable=[],this._queuedNegotiation?(this._debug("flushing negotiation queue"),this._queuedNegotiation=!1,this._needsNegotiation()):(this._debug("negotiated"),this.emit("negotiated"))),this._debug("signalingStateChange %s",this._pc.signalingState),this.emit("signalingStateChange",this._pc.signalingState))}_onIceCandidate(A){this.destroyed||(A.candidate&&this.trickle?this.emit("signal",{type:"candidate",candidate:{candidate:A.candidate.candidate,sdpMLineIndex:A.candidate.sdpMLineIndex,sdpMid:A.candidate.sdpMid}}):!A.candidate&&!this._iceComplete&&(this._iceComplete=!0,this.emit("_iceComplete")),A.candidate&&this._startIceCompleteTimeout())}_onChannelMessage(A){if(this.destroyed)return;let I=A.data;I instanceof ArrayBuffer&&(I=new Uint8Array(I)),this.emit("data",I)}_onChannelBufferedAmountLow(){if(this.destroyed||!this._cb)return;this._debug("ending backpressure: bufferedAmount %d",this._channel.bufferedAmount);const A=this._cb;this._cb=null,A(null)}_onChannelOpen(){this._connected||this.destroyed||(this._debug("on channel open"),this._channelReady=!0,this._maybeReady())}_onChannelClose(){this.destroyed||(this._debug("on channel close"),this.destroy())}_onTrack(A){this.destroyed||A.streams.forEach(I=>{this._debug("on track"),this.emit("track",A.track,I),this._remoteTracks.push({track:A.track,stream:I}),!this._remoteStreams.some(g=>g.id===I.id)&&(this._remoteStreams.push(I),queueMicrotask(()=>{this._debug("on stream"),this.emit("stream",I)}))})}_debug(...A){!this._doDebug||(A[0]="["+this._id+"] "+A[0],console.log(...A))}on(A,I){const g=this._map;g.has(A)||g.set(A,new Set),g.get(A).add(I)}off(A,I){const g=this._map,B=g.get(A);!B||(B.delete(I),B.size===0&&g.delete(A))}once(A,I){const g=(...B)=>{this.off(A,g),I(...B)};this.on(A,g)}emit(A,...I){const g=this._map;if(!!g.has(A))for(const B of g.get(A))try{B(...I)}catch(E){console.error(E)}}}oQ.WEBRTC_SUPPORT=!!kw();oQ.config={iceServers:[{urls:["stun:stun.l.google.com:19302","stun:global.stun.twilio.com:3478"]}],sdpSemantics:"unified-plan"};oQ.channelConfig={};const CS="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",BS=(i,A,I)=>{const g=new oQ({initiator:i,trickle:A,config:I}),B=E=>g.__earlyDataBuffer.push(E);return g.on(Yg.data,B),g.__earlyDataBuffer=[],g.__drainEarlyData=E=>{g.off(Yg.data,B),g.__earlyDataBuffer.forEach(E),delete g.__earlyDataBuffer,delete g.__drainEarlyData},g},lw=i=>new Array(i).fill().map(()=>CS[Math.floor(Math.random()*CS.length)]).join(""),IR=(i,A)=>(I,g)=>{if(i[g])throw vg(`already joined room ${g}`);if(!I)throw vg("requires a config map as the first argument");if(!I.appId&&!I.firebaseApp)throw vg("config map is missing appId field");if(!g)throw vg("namespace argument required");return A(I,g)},vE="Trystero",IQ=lw(20),{keys:QS,values:gR,entries:Ma,fromEntries:yw}=Object,jB=()=>{},vg=i=>new Error(`${vE}: ${i}`),XQ=i=>new TextEncoder().encode(i),mE=i=>new TextDecoder().decode(i),Yg=yw(["close","connect","data","error","signal","stream","track"].map(i=>[i,i])),CR=i=>{const A=new Uint8Array(i.reduce((I,g)=>I+g.byteLength,0));return i.reduce((I,g)=>(A.set(g,I),I+g.byteLength),0),A},BR=Object.getPrototypeOf(Uint8Array),Fo=12,Mw=0,Ro=Mw+Fo,qo=Ro+1,TE=qo+1,xE=TE+1,vB=16*2**10-xE,ro=255,ES="bufferedamountlow",QR=(i,A)=>{const I={},g={},B={},E={},t={},o={},D=(u,$)=>(u?Array.isArray(u)?u:[u]:QS(I)).flatMap(SA=>{const W=I[SA];return W?$(SA,W):(console.warn(`${vE}: no peer with id ${SA} found`),[])}),a=u=>{!I[u]||(delete I[u],delete B[u],delete E[u],x(u))},s=u=>{if(!u)throw vg("action type argument is required");const $=XQ(u);if($.byteLength>Fo)throw vg(`action type string "${u}" (${$.byteLength}b) exceeds byte limit (${Fo}). Hint: choose a shorter name.`);const SA=new Uint8Array(Fo);SA.set($);const W=mE(SA);if(g[W])throw vg(`action '${u}' already registered`);let v=0;return g[W]={onComplete:jB,onProgress:jB},[async(CA,GA,DA,BA)=>{if(DA&&typeof DA!="object")throw vg("action meta argument must be an object");if(CA===void 0)throw vg("action data cannot be undefined");const _=typeof CA!="string",IA=CA instanceof Blob,wA=IA||CA instanceof ArrayBuffer||CA instanceof BR;if(DA&&!wA)throw vg("action meta argument can only be used with binary data");const nA=wA?new Uint8Array(IA?await CA.arrayBuffer():CA):XQ(_?JSON.stringify(CA):CA),rA=DA?XQ(JSON.stringify(DA)):null,JA=Math.ceil(nA.byteLength/vB)+(DA?1:0),mA=new Array(JA).fill().map((oA,$A)=>{const LA=$A===JA-1,fA=DA&&$A===0,UA=new Uint8Array(xE+(fA?rA.byteLength:LA?nA.byteLength-vB*(JA-(DA?2:1)):vB));return UA.set(SA),UA.set([v],Ro),UA.set([LA|fA<<1|wA<<2|_<<3],qo),UA.set([Math.round(($A+1)/JA*ro)],TE),UA.set(DA?fA?rA:nA.subarray(($A-1)*vB,$A*vB):nA.subarray($A*vB,($A+1)*vB),xE),UA});return v=v+1&ro,Promise.all(D(GA,async(oA,$A)=>{const LA=$A._channel;let fA=0;for(;fA<JA;){const UA=mA[fA];if(LA.bufferedAmount>LA.bufferedAmountLowThreshold&&await new Promise(eI=>{const jA=()=>{LA.removeEventListener(ES,jA),eI()};LA.addEventListener(ES,jA)}),!I[oA])break;$A.send(UA),fA++,BA&&BA(UA[TE]/ro,oA,DA)}}))},CA=>g[W]={...g[W],onComplete:CA},CA=>g[W]={...g[W],onProgress:CA}]},h=(u,$)=>{const SA=new Uint8Array($),W=mE(SA.subarray(Mw,Ro)),[v]=SA.subarray(Ro,qo),[CA]=SA.subarray(qo,TE),[GA]=SA.subarray(TE,xE),DA=SA.subarray(xE),BA=!!(CA&1),_=!!(CA&1<<1),IA=!!(CA&1<<2),wA=!!(CA&1<<3);if(!g[W])throw vg(`received message with unregistered type (${W})`);B[u]||(B[u]={}),B[u][W]||(B[u][W]={});let nA=B[u][W][v];if(nA||(nA=B[u][W][v]={chunks:[]}),_?nA.meta=JSON.parse(mE(DA)):nA.chunks.push(DA),g[W].onProgress(GA/ro,u,nA.meta),!BA)return;const rA=CR(nA.chunks);if(IA)g[W].onComplete(rA,u,nA.meta);else{const JA=mE(rA);g[W].onComplete(wA?JSON.parse(JA):JA,u)}delete B[u][W][v]},[S,c]=s("__91n6__"),[l,G]=s("__90n6__"),[w,U]=s("__516n4L__"),[d,q]=s("__57r34m__"),[F,N]=s("__7r4ck__");let p=jB,x=jB,M=jB,Y=jB;return i((u,$)=>{if(I[$])return;const SA=h.bind(null,$);I[$]=u,u.on(Yg.signal,W=>w(W,$)),u.on(Yg.close,()=>a($)),u.on(Yg.data,SA),u.on(Yg.stream,W=>{M(W,$,t[$]),delete t[$]}),u.on(Yg.track,(W,v)=>{Y(W,v,$,o[$]),delete o[$]}),u.on(Yg.error,W=>{W.code!=="ERR_DATA_CHANNEL"&&console.error(W)}),p($),u.__drainEarlyData(SA)}),c((u,$)=>l(null,$)),G((u,$)=>{E[$]&&(E[$](),delete E[$])}),U((u,$)=>{I[$]&&I[$].signal(u)}),q((u,$)=>t[$]=u),N((u,$)=>o[$]=u),{makeAction:s,ping:async u=>{if(!u)throw vg("ping() must be called with target peer ID");const $=Date.now();return S(null,u),await new Promise(SA=>E[u]=SA),Date.now()-$},leave:()=>{Ma(I).forEach(([u,$])=>{$.destroy(),delete I[u]}),A()},getPeers:()=>QS(I),addStream:(u,$,SA)=>D($,async(W,v)=>{SA&&await d(SA,W),v.addStream(u)}),removeStream:(u,$)=>D($,(SA,W)=>W.removeStream(u)),addTrack:(u,$,SA,W)=>D(SA,async(v,CA)=>{W&&await F(W,v),CA.addTrack(u,$)}),removeTrack:(u,$,SA)=>D(SA,(W,v)=>v.removeTrack(u,$)),replaceTrack:(u,$,SA,W,v)=>D(W,async(CA,GA)=>{v&&await F(v,CA),GA.replaceTrack(u,$,SA)}),onPeerJoin:u=>p=u,onPeerLeave:u=>x=u,onPeerStream:u=>M=u,onPeerTrack:u=>Y=u}},BD="AES-CBC",ER=i=>window.btoa(String.fromCharCode.apply(null,new Uint8Array(i))),iR=i=>{const A=window.atob(i);return new Uint8Array(A.length).map((I,g)=>A.charCodeAt(g)).buffer},oR=async(i,A)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},XQ(`${i}:${A}`)),{name:BD},!1,["encrypt","decrypt"]),iS=async(i,A)=>{const I=crypto.getRandomValues(new Uint8Array(16));return JSON.stringify({c:ER(await crypto.subtle.encrypt({name:BD,iv:I},await i,XQ(A))),iv:[...I]})},oS=async(i,A)=>{const{c:I,iv:g}=JSON.parse(A);return mE(await crypto.subtle.decrypt({name:BD,iv:new Uint8Array(g)},await i,iR(I)))},Ia={},ga={},YE={},tS=20,eS=10,tR=2,eR=33,aR=120,aS="announce",DR=["wss://tracker.openwebtorrent.com","wss://tracker.btorrent.xyz","wss://tracker.files.fm:7073/announce","wss://qot.abiir.top:443/announce","wss://spacetradersapi-chatbox.herokuapp.com:443/announce"],DS=IR(Ia,(i,A)=>{const I={},g=i.password&&oR(i.password,A),B=(i.trackerUrls||DR).slice(0,i.trackerUrls?i.trackerUrls.length:i.trackerRedundancy||tR);if(!B.length)throw vg("trackerUrls is empty");const E=crypto.subtle.digest("SHA-1",XQ(`${vE}:${i.appId}:${A}`)).then(q=>Array.from(new Uint8Array(q)).map(F=>F.toString(36)).join("").slice(0,tS)),t=()=>yw(new Array(eS).fill().map(()=>{const q=BS(!0,!1,i.rtcConfig);return[lw(tS),{peer:q,offerP:new Promise(F=>q.once(Yg.signal,F))}]})),o=async(q,F)=>{const N=await E;let p;try{p=JSON.parse(F.data)}catch{console.error(`${vE}: received malformed SDP JSON`);return}if(p.info_hash!==N||p.peer_id&&p.peer_id===IQ)return;const x=p["failure reason"];if(x){console.warn(`${vE}: torrent tracker failure (${x})`);return}if(p.interval&&p.interval>l&&p.interval<=aR&&(clearInterval(G),l=p.interval,G=setInterval(s,l*1e3)),p.offer&&p.offer_id){if(I[p.peer_id]||U[p.offer_id])return;U[p.offer_id]=!0;const M=BS(!1,!1,i.rtcConfig);M.once(Yg.signal,async Y=>q.send(JSON.stringify({answer:g?{...Y,sdp:await iS(g,Y.sdp)}:Y,action:aS,info_hash:N,peer_id:IQ,to_peer_id:p.peer_id,offer_id:p.offer_id}))),M.on(Yg.connect,()=>S(M,p.peer_id)),M.on(Yg.close,()=>c(p.peer_id)),M.signal(g?{...p.offer,sdp:await oS(g,p.offer.sdp)}:p.offer);return}if(p.answer){if(I[p.peer_id]||U[p.offer_id])return;const M=d[p.offer_id];if(M){const{peer:Y}=M;if(Y.destroyed)return;U[p.offer_id]=!0,Y.on(Yg.connect,()=>S(Y,p.peer_id,p.offer_id)),Y.on(Yg.close,()=>c(p.peer_id)),Y.signal(g?{...p.answer,sdp:await oS(g,p.answer.sdp)}:p.answer)}}},D=async(q,F)=>q.send(JSON.stringify({action:aS,info_hash:F,numwant:eS,peer_id:IQ,offers:await Promise.all(Ma(d).map(async([N,{offerP:p}])=>{const x=await p;return{offer_id:N,offer:g?{...x,sdp:await iS(g,x.sdp)}:x}}))})),a=(q,F,N)=>(N||!ga[q]?(YE[q]={...YE[q],[F]:o},ga[q]=new Promise(p=>{const x=new WebSocket(q);x.onopen=p.bind(null,x),x.onmessage=M=>gR(YE[q]).forEach(Y=>Y(x,M))})):YE[q][F]=o,ga[q]),s=async()=>{const q=await E;d&&h(),d=t(),B.forEach(async F=>{const N=await a(F,q);N.readyState===WebSocket.OPEN?D(N,q):N.readyState!==WebSocket.CONNECTING&&D(await a(F,q,!0),q)})},h=()=>{Ma(d).forEach(([q,{peer:F}])=>{!U[q]&&!I[q]&&F.destroy()}),U={}},S=(q,F,N)=>{w(q,F),I[F]=!0,N&&(I[N]=!0)},c=q=>delete I[q];let l=eR,G=setInterval(s,l*1e3),w=jB,U={},d;return Ia[A]=!0,s(),QR(q=>w=q,async()=>{const q=await E;B.forEach(F=>delete YE[F][q]),delete Ia[A],clearInterval(G),h()})});class sR{constructor(A){xB(this,"_uuid");xB(this,"_r3d_rigidbody");xB(this,"_r3d_collider");xB(this,"_r3d_rigidbody_desc");xB(this,"_r3d_collider_desc");xB(this,"_3js_mesh");this._uuid=A;const I=new eQ(1,1,1),g=new Vo({color:Ua.random()});this._3js_mesh=new lC(I,g),this._r3d_rigidbody_desc=cC.dynamic(),this._r3d_collider_desc=_I.convexHull(new Float32Array(I.getAttribute("position").array))}spawn(A,I){A.add(!0,this._3js_mesh),this._r3d_rigidbody=I.createRigidBody(this._r3d_rigidbody_desc),this._r3d_collider=I.createCollider(this._r3d_collider_desc,this._r3d_rigidbody)}update(){const A=this._r3d_rigidbody.translation();this._3js_mesh.position.x=A.x,this._3js_mesh.position.y=A.y,this._3js_mesh.position.z=A.z;const I=this._r3d_rigidbody.rotation();this._3js_mesh.quaternion.x=I.x,this._3js_mesh.quaternion.y=I.y,this._3js_mesh.quaternion.z=I.z,this._3js_mesh.quaternion.w=I.w}}var Ua;(i=>{function A(){return new wI(Math.floor(Math.random()*127+128)<<16|Math.floor(Math.random()*127)<<8|Math.floor(Math.random()*127+128))}i.random=A})(Ua||(Ua={}));function sS(i,A,I){const g=i.slice();return g[19]=A[I],g}function nR(i){let A,I,g=Object.values(i[4]),B=[];for(let E=0;E<g.length;E+=1)B[E]=nS(sS(i,g,E));return{c(){A=IB("div"),I=IB("ul");for(let E=0;E<B.length;E+=1)B[E].c();RC(A,"class","ui svelte-1k8rycm")},m(E,t){Ai(E,A,t),KB(A,I);for(let o=0;o<B.length;o+=1)B[o].m(I,null)},p(E,t){if(t&16){g=Object.values(E[4]);let o;for(o=0;o<g.length;o+=1){const D=sS(E,g,o);B[o]?B[o].p(D,t):(B[o]=nS(D),B[o].c(),B[o].m(I,null))}for(;o<B.length;o+=1)B[o].d(1);B.length=g.length}},d(E){E&&oE(A),FM(B,E)}}}function hR(i){let A,I,g,B,E,t,o,D;return{c(){A=IB("div"),I=IB("input"),g=Ca(),B=IB("input"),E=Ca(),t=IB("input"),RC(I,"type","button"),I.value="Host",RC(I,"class","svelte-1k8rycm"),RC(B,"type","text"),RC(B,"class","svelte-1k8rycm"),RC(t,"type","button"),t.value="Join",RC(t,"class","svelte-1k8rycm"),RC(A,"class","ui svelte-1k8rycm")},m(a,s){Ai(a,A,s),KB(A,I),KB(A,g),KB(A,B),Kn(B,i[3]),KB(A,E),KB(A,t),o||(D=[OE(I,"click",i[7]),OE(B,"input",i[10]),OE(t,"click",i[8])],o=!0)},p(a,s){s&8&&B.value!==a[3]&&Kn(B,a[3])},d(a){a&&oE(A),o=!1,iE(D)}}}function nS(i){let A,I=`${i[19]}`,g;return{c(){A=IB("li"),g=SS(I)},m(B,E){Ai(B,A,E),KB(A,g)},p(B,E){E&16&&I!==(I=`${B[19]}`)&&qM(g,I)},d(B){B&&oE(A)}}}function SR(i){let A,I,g,B,E={};I=new zF({props:E}),i[9](I),I.$on("mousedown",i[5]),I.$on("mouseup",i[6]);function t(a,s){return!a[0]&&!a[1]?hR:nR}let o=t(i),D=o(i);return{c(){A=IB("div"),cS(I.$$.fragment),g=Ca(),D.c(),RC(A,"class","container svelte-1k8rycm")},m(a,s){Ai(a,A,s),Ja(I,A,null),KB(A,g),D.m(A,null),B=!0},p(a,[s]){const h={};I.$set(h),o===(o=t(a))&&D?D.p(a,s):(D.d(1),D=o(a),D&&(D.c(),D.m(A,null)))},i(a){B||(Na(I.$$.fragment,a),B=!0)},o(a){rS(I.$$.fragment,a),B=!1},d(a){a&&oE(A),i[9](null),Fa(I),D.d()}}}function wR(i,A,I){let g=!1,B=!1,E,t,o,D;wS(async()=>{await dE.init(),D=new dE.World({x:0,y:-9.81,z:0}),t=new QC(75,window.innerWidth/window.innerHeight,.1,1e3),o=new mF(t,E.canvas()),t.position.y=16,t.position.z=-16;const p=new uF;p.castShadow=!0,E.add(!1,p);const x=new HF(32,32);E.add(!1,x),x.position.y=.50125;const M=new eQ(32,1,32),Y=new Vo({color:3092271}),u=new lC(M,Y);E.add(!1,u);const $=dE.RigidBodyDesc.fixed(),SA=dE.ColliderDesc.convexHull(new Float32Array(M.getAttribute("position").array)),W=D.createRigidBody($);D.createCollider(SA,W),a()});function a(){s&&s._r3d_rigidbody.applyImpulse(new dE.Vector3(0,1,0),!0),D.step(),Object.values(c).forEach(p=>{p.update()}),o.update(),E.render(t),requestAnimationFrame(a)}let s;function h(p){const x=E.pick({x:p.clientX,y:p.clientY},t);x&&Object.values(c).forEach(M=>{M._3js_mesh===x._viewable&&(s=M)})}function S(p){s=void 0}let c={};function l(){for(let p=0;p<8;p++)for(let x=0;x<8;x++){const M=`${p}${x}`,Y=new sR(M);Y._r3d_rigidbody_desc.setTranslation(2*p-8,1,2*x-8),c[M]=Y,Y.spawn(E,D)}}let G="hello",w={};function U(){I(1,B=!0),l();const p=DS({appId:"alchemyvtt"},G),[x,M]=p.makeAction("H");I(4,w[IQ]=IQ,w),p.onPeerJoin(Y=>{I(4,w[Y]=Y,w),x({},Y)}),p.onPeerLeave(Y=>{delete w[Y]})}let d;function q(){I(0,g=!0);const p=DS({appId:"alchemyvtt"},G),[x,M]=p.makeAction("H");I(4,w[IQ]=IQ,w),p.onPeerJoin(Y=>{I(4,w[Y]=Y,w)}),p.onPeerLeave(Y=>{delete w[Y]}),M((Y,u)=>{d||(d=u,l())})}function F(p){po[p?"unshift":"push"](()=>{E=p,I(2,E)})}function N(){G=this.value,I(3,G)}return[g,B,E,G,w,h,S,U,q,F,N]}class GR extends qa{constructor(A){super(),Ra(this,A,wR,SR,Ka,{})}}function rR(i){let A,I;return A=new GR({}),{c(){cS(A.$$.fragment)},m(g,B){Ja(A,g,B),I=!0},p:jQ,i(g){I||(Na(A.$$.fragment,g),I=!0)},o(g){rS(A.$$.fragment,g),I=!1},d(g){Fa(A,g)}}}class cR extends qa{constructor(A){super(),Ra(this,A,null,rR,Ka,{})}}new cR({target:document.getElementById("app")});