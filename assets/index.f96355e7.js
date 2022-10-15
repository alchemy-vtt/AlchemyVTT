var zU=Object.defineProperty;var $U=(E,A,I)=>A in E?zU(E,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):E[A]=I;var VI=(E,A,I)=>($U(E,typeof A!="symbol"?A+"":A,I),I);(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))g(B);new MutationObserver(B=>{for(const i of B)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&g(o)}).observe(document,{childList:!0,subtree:!0});function I(B){const i={};return B.integrity&&(i.integrity=B.integrity),B.referrerpolicy&&(i.referrerPolicy=B.referrerpolicy),B.crossorigin==="use-credentials"?i.credentials="include":B.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function g(B){if(B.ep)return;B.ep=!0;const i=I(B);fetch(B.href,i)}})();function BQ(){}function HS(E){return E()}function bn(){return Object.create(null)}function DE(E){E.forEach(HS)}function mS(E){return typeof E=="function"}function ma(E,A){return E!=E?A==A:E!==A||E&&typeof E=="object"||typeof E=="function"}function AM(E){return Object.keys(E).length===0}function jE(E,A){E.appendChild(A)}function Vg(E,A,I){E.insertBefore(A,I||null)}function ug(E){E.parentNode.removeChild(E)}function IM(E,A){for(let I=0;I<E.length;I+=1)E[I]&&E[I].d(A)}function mC(E){return document.createElement(E)}function mo(E){return document.createTextNode(E)}function VE(){return mo(" ")}function XQ(E,A,I,g){return E.addEventListener(A,I,g),()=>E.removeEventListener(A,I,g)}function UC(E,A,I){I==null?E.removeAttribute(A):E.getAttribute(A)!==I&&E.setAttribute(A,I)}function gM(E){return Array.from(E.childNodes)}function ha(E,A){A=""+A,E.wholeText!==A&&(E.data=A)}function Zn(E,A){E.value=A==null?"":A}let XE;function vE(E){XE=E}function CM(){if(!XE)throw new Error("Function called outside component initialization");return XE}function TS(E){CM().$$.on_mount.push(E)}function Ke(E,A){const I=E.$$.callbacks[A.type];I&&I.slice().forEach(g=>g.call(this,A))}const mE=[],To=[],Ko=[],vn=[],BM=Promise.resolve();let Sa=!1;function QM(){Sa||(Sa=!0,BM.then(xS))}function Ga(E){Ko.push(E)}const Ne=new Set;let $i=0;function xS(){const E=XE;do{for(;$i<mE.length;){const A=mE[$i];$i++,vE(A),EM(A.$$)}for(vE(null),mE.length=0,$i=0;To.length;)To.pop()();for(let A=0;A<Ko.length;A+=1){const I=Ko[A];Ne.has(I)||(Ne.add(I),I())}Ko.length=0}while(mE.length);for(;vn.length;)vn.pop()();Sa=!1,Ne.clear(),vE(E)}function EM(E){if(E.fragment!==null){E.update(),DE(E.before_update);const A=E.dirty;E.dirty=[-1],E.fragment&&E.fragment.p(E.ctx,A),E.after_update.forEach(Ga)}}const No=new Set;let iM;function Ta(E,A){E&&E.i&&(No.delete(E),E.i(A))}function OS(E,A,I,g){if(E&&E.o){if(No.has(E))return;No.add(E),iM.c.push(()=>{No.delete(E),g&&(I&&E.d(1),g())}),E.o(A)}else g&&g()}function bS(E){E&&E.c()}function xa(E,A,I,g){const{fragment:B,after_update:i}=E.$$;B&&B.m(A,I),g||Ga(()=>{const o=E.$$.on_mount.map(HS).filter(mS);E.$$.on_destroy?E.$$.on_destroy.push(...o):DE(o),E.$$.on_mount=[]}),i.forEach(Ga)}function Oa(E,A){const I=E.$$;I.fragment!==null&&(DE(I.on_destroy),I.fragment&&I.fragment.d(A),I.on_destroy=I.fragment=null,I.ctx=[])}function oM(E,A){E.$$.dirty[0]===-1&&(mE.push(E),QM(),E.$$.dirty.fill(0)),E.$$.dirty[A/31|0]|=1<<A%31}function ba(E,A,I,g,B,i,o,t=[-1]){const D=XE;vE(E);const a=E.$$={fragment:null,ctx:[],props:i,update:BQ,not_equal:B,bound:bn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(A.context||(D?D.$$.context:[])),callbacks:bn(),dirty:t,skip_bound:!1,root:A.target||D.$$.root};o&&o(a.root);let s=!1;if(a.ctx=I?I(E,A.props||{},(n,h,...k)=>{const w=k.length?k[0]:h;return a.ctx&&B(a.ctx[n],a.ctx[n]=w)&&(!a.skip_bound&&a.bound[n]&&a.bound[n](w),s&&oM(E,n)),h}):[],a.update(),s=!0,DE(a.before_update),a.fragment=g?g(a.ctx):!1,A.target){if(A.hydrate){const n=gM(A.target);a.fragment&&a.fragment.l(n),n.forEach(ug)}else a.fragment&&a.fragment.c();A.intro&&Ta(E.$$.fragment),xa(E,A.target,A.anchor,A.customElement),xS()}vE(D)}class Za{$destroy(){Oa(this,1),this.$destroy=BQ}$on(A,I){if(!mS(I))return BQ;const g=this.$$.callbacks[A]||(this.$$.callbacks[A]=[]);return g.push(I),()=>{const B=g.indexOf(I);B!==-1&&g.splice(B,1)}}$set(A){this.$$set&&!AM(A)&&(this.$$.skip_bound=!0,this.$$set(A),this.$$.skip_bound=!1)}}let c;const lI=new Array(32).fill(void 0);function NI(E){return lI[E]}lI.push(void 0,null,!0,!1);let WE=lI.length;function xo(E){const A=NI(E);return function(I){I<36||(lI[I]=WE,WE=I)}(E),A}function Ig(E){WE===lI.length&&lI.push(lI.length+1);const A=WE;return WE=lI[A],lI[A]=E,A}function HA(E){return E==null}let Jo=new Float64Array;function Oo(){return Jo.byteLength===0&&(Jo=new Float64Array(c.memory.buffer)),Jo}let Ro=new Int32Array;function fI(){return Ro.byteLength===0&&(Ro=new Int32Array(c.memory.buffer)),Ro}const ZS=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});ZS.decode();let Fo=new Uint8Array;function vS(E,A){return ZS.decode((Fo.byteLength===0&&(Fo=new Uint8Array(c.memory.buffer)),Fo).subarray(E,E+A))}function V(E,A){if(!(E instanceof A))throw new Error(`expected instance of ${A.name}`);return E.ptr}let YI=32;function WI(E){if(YI==1)throw new Error("out of js stack");return lI[--YI]=E,YI}let qo=new Float32Array;function PE(){return qo.byteLength===0&&(qo=new Float32Array(c.memory.buffer)),qo}function Wn(E,A){return PE().subarray(E/4,E/4+A)}let po=new Uint32Array;function WS(){return po.byteLength===0&&(po=new Uint32Array(c.memory.buffer)),po}let Pg=0;function vB(E,A){const I=A(4*E.length);return PE().set(E,I/4),Pg=E.length,I}function Ao(E,A){const I=A(4*E.length);return WS().set(E,I/4),Pg=E.length,I}function tM(E){return c.acoshf(E)}function eM(E){return c.asinf(E)}function aM(E){return c.asinhf(E)}function DM(E,A){return c.atan2f(E,A)}function sM(E){return c.atanf(E)}function nM(E){return c.atanhf(E)}function hM(E){return c.cbrtf(E)}function SM(E){return c.ceilf(E)}function GM(E){return c.cosf(E)}function rM(E){return c.coshf(E)}function wM(E){return c.exp2f(E)}function cM(E){return c.exp10f(E)}function kM(E){return c.expf(E)}function lM(E){return c.expm1f(E)}function yM(E){return c.fabsf(E)}function UM(E){return c.floorf(E)}function MM(E,A){return c.fmodf(E,A)}function KM(E,A){return c.hypotf(E,A)}function NM(E){return c.log2f(E)}function JM(E){return c.log10f(E)}function RM(E){return c.logf(E)}function FM(E,A){return c.powf(E,A)}function qM(E){return c.sinf(E)}function pM(E){return c.sinhf(E)}function dM(E){return c.sqrtf(E)}function LM(E){return c.tanf(E)}function fM(E){return c.tanhf(E)}function Je(E,A){try{return E.apply(this,A)}catch(I){c.__wbindgen_exn_store(Ig(I))}}Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Spherical:3,3:"Spherical",Generic:4,4:"Generic"}),Object.freeze({AccelerationBased:0,0:"AccelerationBased",ForceBased:1,1:"ForceBased"});const $o=Object.freeze({X:0,0:"X",Y:1,1:"Y",Z:2,2:"Z",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"});Object.freeze({Dynamic:0,0:"Dynamic",Fixed:1,1:"Fixed",KinematicPositionBased:2,2:"KinematicPositionBased",KinematicVelocityBased:3,3:"KinematicVelocityBased"}),Object.freeze({Vertex:0,0:"Vertex",Edge:1,1:"Edge",Face:2,2:"Face",Unknown:3,3:"Unknown"}),Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace"});class qB{static __wrap(A){const I=Object.create(qB.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawbroadphase_free(A)}constructor(){const A=c.rawbroadphase_new();return qB.__wrap(A)}}class BE{static __wrap(A){const I=Object.create(BE.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawccdsolver_free(A)}constructor(){const A=c.rawccdsolver_new();return BE.__wrap(A)}}class XI{static __wrap(A){const I=Object.create(XI.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawcolliderset_free(A)}coTranslation(A){const I=c.rawcolliderset_coTranslation(this.ptr,A);return BA.__wrap(I)}coRotation(A){const I=c.rawcolliderset_coRotation(this.ptr,A);return eI.__wrap(I)}coSetTranslation(A,I,g,B){c.rawcolliderset_coSetTranslation(this.ptr,A,I,g,B)}coSetTranslationWrtParent(A,I,g,B){c.rawcolliderset_coSetTranslationWrtParent(this.ptr,A,I,g,B)}coSetRotation(A,I,g,B,i){c.rawcolliderset_coSetRotation(this.ptr,A,I,g,B,i)}coSetRotationWrtParent(A,I,g,B,i){c.rawcolliderset_coSetRotationWrtParent(this.ptr,A,I,g,B,i)}coIsSensor(A){return c.rawcolliderset_coIsSensor(this.ptr,A)!==0}coShapeType(A){return c.rawcolliderset_coShapeType(this.ptr,A)>>>0}coHalfspaceNormal(A){const I=c.rawcolliderset_coHalfspaceNormal(this.ptr,A);return I===0?void 0:BA.__wrap(I)}coHalfExtents(A){const I=c.rawcolliderset_coHalfExtents(this.ptr,A);return I===0?void 0:BA.__wrap(I)}coRadius(A){try{const B=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coRadius(B,this.ptr,A);var I=fI()[B/4+0],g=PE()[B/4+1];return I===0?void 0:g}finally{c.__wbindgen_add_to_stack_pointer(16)}}coHalfHeight(A){try{const B=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coHalfHeight(B,this.ptr,A);var I=fI()[B/4+0],g=PE()[B/4+1];return I===0?void 0:g}finally{c.__wbindgen_add_to_stack_pointer(16)}}coRoundRadius(A){try{const B=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coRoundRadius(B,this.ptr,A);var I=fI()[B/4+0],g=PE()[B/4+1];return I===0?void 0:g}finally{c.__wbindgen_add_to_stack_pointer(16)}}coVertices(A){try{const B=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coVertices(B,this.ptr,A);var I=fI()[B/4+0],g=fI()[B/4+1];let i;return I!==0&&(i=Wn(I,g).slice(),c.__wbindgen_free(I,4*g)),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}coIndices(A){try{const B=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coIndices(B,this.ptr,A);var I=fI()[B/4+0],g=fI()[B/4+1];let i;return I!==0&&(i=function(o,t){return WS().subarray(o/4,o/4+t)}(I,g).slice(),c.__wbindgen_free(I,4*g)),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldHeights(A){try{const B=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coHeightfieldHeights(B,this.ptr,A);var I=fI()[B/4+0],g=fI()[B/4+1];let i;return I!==0&&(i=Wn(I,g).slice(),c.__wbindgen_free(I,4*g)),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(A){const I=c.rawcolliderset_coHeightfieldScale(this.ptr,A);return I===0?void 0:BA.__wrap(I)}coHeightfieldNRows(A){try{const B=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coHeightfieldNRows(B,this.ptr,A);var I=fI()[B/4+0],g=fI()[B/4+1];return I===0?void 0:g>>>0}finally{c.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldNCols(A){try{const B=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coHeightfieldNCols(B,this.ptr,A);var I=fI()[B/4+0],g=fI()[B/4+1];return I===0?void 0:g>>>0}finally{c.__wbindgen_add_to_stack_pointer(16)}}coParent(A){try{const B=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coParent(B,this.ptr,A);var I=fI()[B/4+0],g=Oo()[B/8+1];return I===0?void 0:g}finally{c.__wbindgen_add_to_stack_pointer(16)}}coFriction(A){return c.rawcolliderset_coFriction(this.ptr,A)}coRestitution(A){return c.rawcolliderset_coRestitution(this.ptr,A)}coDensity(A){return c.rawcolliderset_coDensity(this.ptr,A)}coMass(A){return c.rawcolliderset_coMass(this.ptr,A)}coVolume(A){return c.rawcolliderset_coVolume(this.ptr,A)}coCollisionGroups(A){return c.rawcolliderset_coCollisionGroups(this.ptr,A)>>>0}coSolverGroups(A){return c.rawcolliderset_coSolverGroups(this.ptr,A)>>>0}coActiveHooks(A){return c.rawcolliderset_coActiveHooks(this.ptr,A)>>>0}coActiveCollisionTypes(A){return c.rawcolliderset_coActiveCollisionTypes(this.ptr,A)}coActiveEvents(A){return c.rawcolliderset_coActiveEvents(this.ptr,A)>>>0}coContactForceEventThreshold(A){return c.rawcolliderset_coContactForceEventThreshold(this.ptr,A)}coContainsPoint(A,I){return V(I,BA),c.rawcolliderset_coContainsPoint(this.ptr,A,I.ptr)!==0}coCastShape(A,I,g,B,i,o,t){V(I,BA),V(g,bA),V(B,BA),V(i,eI),V(o,BA);const D=c.rawcolliderset_coCastShape(this.ptr,A,I.ptr,g.ptr,B.ptr,i.ptr,o.ptr,t);return D===0?void 0:Bt.__wrap(D)}coCastCollider(A,I,g,B,i){V(I,BA),V(B,BA);const o=c.rawcolliderset_coCastCollider(this.ptr,A,I.ptr,g,B.ptr,i);return o===0?void 0:Ct.__wrap(o)}coIntersectsShape(A,I,g,B){return V(I,bA),V(g,BA),V(B,eI),c.rawcolliderset_coIntersectsShape(this.ptr,A,I.ptr,g.ptr,B.ptr)!==0}coContactShape(A,I,g,B,i){V(I,bA),V(g,BA),V(B,eI);const o=c.rawcolliderset_coContactShape(this.ptr,A,I.ptr,g.ptr,B.ptr,i);return o===0?void 0:$E.__wrap(o)}coContactCollider(A,I,g){const B=c.rawcolliderset_coContactCollider(this.ptr,A,I,g);return B===0?void 0:$E.__wrap(B)}coProjectPoint(A,I,g){V(I,BA);const B=c.rawcolliderset_coProjectPoint(this.ptr,A,I.ptr,g);return At.__wrap(B)}coIntersectsRay(A,I,g,B){return V(I,BA),V(g,BA),c.rawcolliderset_coIntersectsRay(this.ptr,A,I.ptr,g.ptr,B)!==0}coCastRay(A,I,g,B,i){return V(I,BA),V(g,BA),c.rawcolliderset_coCastRay(this.ptr,A,I.ptr,g.ptr,B,i)}coCastRayAndGetNormal(A,I,g,B,i){V(I,BA),V(g,BA);const o=c.rawcolliderset_coCastRayAndGetNormal(this.ptr,A,I.ptr,g.ptr,B,i);return o===0?void 0:gt.__wrap(o)}coSetSensor(A,I){c.rawcolliderset_coSetSensor(this.ptr,A,I)}coSetRestitution(A,I){c.rawcolliderset_coSetRestitution(this.ptr,A,I)}coSetFriction(A,I){c.rawcolliderset_coSetFriction(this.ptr,A,I)}coFrictionCombineRule(A){return c.rawcolliderset_coFrictionCombineRule(this.ptr,A)>>>0}coSetFrictionCombineRule(A,I){c.rawcolliderset_coSetFrictionCombineRule(this.ptr,A,I)}coRestitutionCombineRule(A){return c.rawcolliderset_coRestitutionCombineRule(this.ptr,A)>>>0}coSetRestitutionCombineRule(A,I){c.rawcolliderset_coSetRestitutionCombineRule(this.ptr,A,I)}coSetCollisionGroups(A,I){c.rawcolliderset_coSetCollisionGroups(this.ptr,A,I)}coSetSolverGroups(A,I){c.rawcolliderset_coSetSolverGroups(this.ptr,A,I)}coSetActiveHooks(A,I){c.rawcolliderset_coSetActiveHooks(this.ptr,A,I)}coSetActiveEvents(A,I){c.rawcolliderset_coSetActiveEvents(this.ptr,A,I)}coSetActiveCollisionTypes(A,I){c.rawcolliderset_coSetActiveCollisionTypes(this.ptr,A,I)}coSetShape(A,I){V(I,bA),c.rawcolliderset_coSetShape(this.ptr,A,I.ptr)}coSetContactForceEventThreshold(A,I){c.rawcolliderset_coSetContactForceEventThreshold(this.ptr,A,I)}coSetDensity(A,I){c.rawcolliderset_coSetDensity(this.ptr,A,I)}coSetMass(A,I){c.rawcolliderset_coSetMass(this.ptr,A,I)}coSetMassProperties(A,I,g,B,i){V(g,BA),V(B,BA),V(i,eI),c.rawcolliderset_coSetMassProperties(this.ptr,A,I,g.ptr,B.ptr,i.ptr)}constructor(){const A=c.rawcolliderset_new();return XI.__wrap(A)}len(){return c.rawcolliderset_len(this.ptr)>>>0}contains(A){return c.rawcolliderset_contains(this.ptr,A)!==0}createCollider(A,I,g,B,i,o,t,D,a,s,n,h,k,w,r,G,l,J,d,p,y,f,Z){try{const K=c.__wbindgen_add_to_stack_pointer(-16);V(A,bA),V(I,BA),V(g,eI),V(o,BA),V(t,BA),V(D,eI),V(Z,zI),c.rawcolliderset_createCollider(K,this.ptr,A.ptr,I.ptr,g.ptr,B,i,o.ptr,t.ptr,D.ptr,a,s,n,h,k,w,r,G,l,J,d,p,y,f,Z.ptr);var N=fI()[K/4+0],x=Oo()[K/8+1];return N===0?void 0:x}finally{c.__wbindgen_add_to_stack_pointer(16)}}remove(A,I,g,B){V(I,JC),V(g,zI),c.rawcolliderset_remove(this.ptr,A,I.ptr,g.ptr,B)}isHandleValid(A){return c.rawcolliderset_contains(this.ptr,A)!==0}forEachColliderHandle(A){try{c.rawcolliderset_forEachColliderHandle(this.ptr,WI(A))}finally{lI[YI++]=void 0}}}class va{static __wrap(A){const I=Object.create(va.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawcontactforceevent_free(A)}collider1(){return c.rawcontactforceevent_collider1(this.ptr)}collider2(){return c.rawcontactforceevent_collider2(this.ptr)}total_force(){const A=c.rawcontactforceevent_total_force(this.ptr);return BA.__wrap(A)}total_force_magnitude(){return c.rawcontactforceevent_total_force_magnitude(this.ptr)}max_force_direction(){const A=c.rawcontactforceevent_max_force_direction(this.ptr);return BA.__wrap(A)}max_force_magnitude(){return c.rawcontactforceevent_max_force_magnitude(this.ptr)}}class Wa{static __wrap(A){const I=Object.create(Wa.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawcontactmanifold_free(A)}normal(){const A=c.rawcontactmanifold_normal(this.ptr);return BA.__wrap(A)}local_n1(){const A=c.rawcontactmanifold_local_n1(this.ptr);return BA.__wrap(A)}local_n2(){const A=c.rawcontactmanifold_local_n2(this.ptr);return BA.__wrap(A)}subshape1(){return c.rawcontactmanifold_subshape1(this.ptr)>>>0}subshape2(){return c.rawcontactmanifold_subshape2(this.ptr)>>>0}num_contacts(){return c.rawcontactmanifold_num_contacts(this.ptr)>>>0}contact_local_p1(A){const I=c.rawcontactmanifold_contact_local_p1(this.ptr,A);return I===0?void 0:BA.__wrap(I)}contact_local_p2(A){const I=c.rawcontactmanifold_contact_local_p2(this.ptr,A);return I===0?void 0:BA.__wrap(I)}contact_dist(A){return c.rawcontactmanifold_contact_dist(this.ptr,A)}contact_fid1(A){return c.rawcontactmanifold_contact_fid1(this.ptr,A)>>>0}contact_fid2(A){return c.rawcontactmanifold_contact_fid2(this.ptr,A)>>>0}contact_impulse(A){return c.rawcontactmanifold_contact_impulse(this.ptr,A)}contact_tangent_impulse_x(A){return c.rawcontactmanifold_contact_tangent_impulse_x(this.ptr,A)}contact_tangent_impulse_y(A){return c.rawcontactmanifold_contact_tangent_impulse_y(this.ptr,A)}num_solver_contacts(){return c.rawcontactmanifold_num_solver_contacts(this.ptr)>>>0}solver_contact_point(A){const I=c.rawcontactmanifold_solver_contact_point(this.ptr,A);return I===0?void 0:BA.__wrap(I)}solver_contact_dist(A){return c.rawcontactmanifold_solver_contact_dist(this.ptr,A)}solver_contact_friction(A){return c.rawcontactmanifold_solver_contact_friction(this.ptr,A)}solver_contact_restitution(A){return c.rawcontactmanifold_solver_contact_restitution(this.ptr,A)}solver_contact_tangent_velocity(A){const I=c.rawcontactmanifold_solver_contact_tangent_velocity(this.ptr,A);return BA.__wrap(I)}}class Pa{static __wrap(A){const I=Object.create(Pa.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawcontactpair_free(A)}collider1(){return c.rawcontactpair_collider1(this.ptr)}collider2(){return c.rawcontactpair_collider2(this.ptr)}numContactManifolds(){return c.rawcontactpair_numContactManifolds(this.ptr)>>>0}contactManifold(A){const I=c.rawcontactpair_contactManifold(this.ptr,A);return I===0?void 0:Wa.__wrap(I)}}class bo{static __wrap(A){const I=Object.create(bo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawdebugrenderpipeline_free(A)}constructor(){const A=c.rawdebugrenderpipeline_new();return bo.__wrap(A)}vertices(){return xo(c.rawdebugrenderpipeline_vertices(this.ptr))}colors(){return xo(c.rawdebugrenderpipeline_colors(this.ptr))}render(A,I,g,B,i){V(A,zI),V(I,XI),V(g,xC),V(B,OC),V(i,eB),c.rawdebugrenderpipeline_render(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i.ptr)}}class _a{static __wrap(A){const I=Object.create(_a.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawdeserializedworld_free(A)}takeGravity(){const A=c.rawdeserializedworld_takeGravity(this.ptr);return A===0?void 0:BA.__wrap(A)}takeIntegrationParameters(){const A=c.rawdeserializedworld_takeIntegrationParameters(this.ptr);return A===0?void 0:pB.__wrap(A)}takeIslandManager(){const A=c.rawdeserializedworld_takeIslandManager(this.ptr);return A===0?void 0:JC.__wrap(A)}takeBroadPhase(){const A=c.rawdeserializedworld_takeBroadPhase(this.ptr);return A===0?void 0:qB.__wrap(A)}takeNarrowPhase(){const A=c.rawdeserializedworld_takeNarrowPhase(this.ptr);return A===0?void 0:eB.__wrap(A)}takeBodies(){const A=c.rawdeserializedworld_takeBodies(this.ptr);return A===0?void 0:zI.__wrap(A)}takeColliders(){const A=c.rawdeserializedworld_takeColliders(this.ptr);return A===0?void 0:XI.__wrap(A)}takeImpulseJoints(){const A=c.rawdeserializedworld_takeImpulseJoints(this.ptr);return A===0?void 0:xC.__wrap(A)}takeMultibodyJoints(){const A=c.rawdeserializedworld_takeMultibodyJoints(this.ptr);return A===0?void 0:OC.__wrap(A)}}class zE{static __wrap(A){const I=Object.create(zE.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_raweventqueue_free(A)}constructor(A){const I=c.raweventqueue_new(A);return zE.__wrap(I)}drainCollisionEvents(A){try{c.raweventqueue_drainCollisionEvents(this.ptr,WI(A))}finally{lI[YI++]=void 0}}drainContactForceEvents(A){try{c.raweventqueue_drainContactForceEvents(this.ptr,WI(A))}finally{lI[YI++]=void 0}}clear(){c.raweventqueue_clear(this.ptr)}}class aC{static __wrap(A){const I=Object.create(aC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawgenericjoint_free(A)}static spherical(A,I){V(A,BA),V(I,BA);const g=c.rawgenericjoint_spherical(A.ptr,I.ptr);return aC.__wrap(g)}static prismatic(A,I,g,B,i,o){V(A,BA),V(I,BA),V(g,BA);const t=c.rawgenericjoint_prismatic(A.ptr,I.ptr,g.ptr,B,i,o);return t===0?void 0:aC.__wrap(t)}static fixed(A,I,g,B){V(A,BA),V(I,eI),V(g,BA),V(B,eI);const i=c.rawgenericjoint_fixed(A.ptr,I.ptr,g.ptr,B.ptr);return aC.__wrap(i)}static revolute(A,I,g){V(A,BA),V(I,BA),V(g,BA);const B=c.rawgenericjoint_revolute(A.ptr,I.ptr,g.ptr);return B===0?void 0:aC.__wrap(B)}}class xC{static __wrap(A){const I=Object.create(xC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawimpulsejointset_free(A)}jointType(A){return c.rawimpulsejointset_jointType(this.ptr,A)>>>0}jointBodyHandle1(A){return c.rawimpulsejointset_jointBodyHandle1(this.ptr,A)}jointBodyHandle2(A){return c.rawimpulsejointset_jointBodyHandle2(this.ptr,A)}jointFrameX1(A){const I=c.rawimpulsejointset_jointFrameX1(this.ptr,A);return eI.__wrap(I)}jointFrameX2(A){const I=c.rawimpulsejointset_jointFrameX2(this.ptr,A);return eI.__wrap(I)}jointAnchor1(A){const I=c.rawimpulsejointset_jointAnchor1(this.ptr,A);return BA.__wrap(I)}jointAnchor2(A){const I=c.rawimpulsejointset_jointAnchor2(this.ptr,A);return BA.__wrap(I)}jointSetAnchor1(A,I){V(I,BA),c.rawimpulsejointset_jointSetAnchor1(this.ptr,A,I.ptr)}jointSetAnchor2(A,I){V(I,BA),c.rawimpulsejointset_jointSetAnchor2(this.ptr,A,I.ptr)}jointContactsEnabled(A){return c.rawimpulsejointset_jointContactsEnabled(this.ptr,A)!==0}jointSetContactsEnabled(A,I){c.rawimpulsejointset_jointSetContactsEnabled(this.ptr,A,I)}jointLimitsEnabled(A,I){return c.rawimpulsejointset_jointLimitsEnabled(this.ptr,A,I)!==0}jointLimitsMin(A,I){return c.rawimpulsejointset_jointLimitsMin(this.ptr,A,I)}jointLimitsMax(A,I){return c.rawimpulsejointset_jointLimitsMax(this.ptr,A,I)}jointSetLimits(A,I,g,B){c.rawimpulsejointset_jointSetLimits(this.ptr,A,I,g,B)}jointConfigureMotorModel(A,I,g){c.rawimpulsejointset_jointConfigureMotorModel(this.ptr,A,I,g)}jointConfigureMotorVelocity(A,I,g,B){c.rawimpulsejointset_jointConfigureMotorVelocity(this.ptr,A,I,g,B)}jointConfigureMotorPosition(A,I,g,B,i){c.rawimpulsejointset_jointConfigureMotorPosition(this.ptr,A,I,g,B,i)}jointConfigureMotor(A,I,g,B,i,o){c.rawimpulsejointset_jointConfigureMotor(this.ptr,A,I,g,B,i,o)}constructor(){const A=c.rawimpulsejointset_new();return xC.__wrap(A)}createJoint(A,I,g,B){return V(A,aC),c.rawimpulsejointset_createJoint(this.ptr,A.ptr,I,g,B)}remove(A,I){c.rawimpulsejointset_remove(this.ptr,A,I)}len(){return c.rawimpulsejointset_len(this.ptr)>>>0}contains(A){return c.rawimpulsejointset_contains(this.ptr,A)!==0}forEachJointHandle(A){try{c.rawimpulsejointset_forEachJointHandle(this.ptr,WI(A))}finally{lI[YI++]=void 0}}forEachJointAttachedToRigidBody(A,I){try{c.rawimpulsejointset_forEachJointAttachedToRigidBody(this.ptr,A,WI(I))}finally{lI[YI++]=void 0}}}class pB{static __wrap(A){const I=Object.create(pB.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawintegrationparameters_free(A)}constructor(){const A=c.rawintegrationparameters_new();return pB.__wrap(A)}get dt(){return c.rawintegrationparameters_dt(this.ptr)}get erp(){return c.rawintegrationparameters_erp(this.ptr)}get allowedLinearError(){return c.rawintegrationparameters_allowedLinearError(this.ptr)}get predictionDistance(){return c.rawintegrationparameters_predictionDistance(this.ptr)}get maxVelocityIterations(){return c.rawintegrationparameters_maxVelocityIterations(this.ptr)>>>0}get maxVelocityFrictionIterations(){return c.rawintegrationparameters_maxVelocityFrictionIterations(this.ptr)>>>0}get maxStabilizationIterations(){return c.rawintegrationparameters_maxStabilizationIterations(this.ptr)>>>0}get minIslandSize(){return c.rawintegrationparameters_minIslandSize(this.ptr)>>>0}get maxCcdSubsteps(){return c.rawintegrationparameters_maxCcdSubsteps(this.ptr)>>>0}set dt(A){c.rawintegrationparameters_set_dt(this.ptr,A)}set erp(A){c.rawintegrationparameters_set_erp(this.ptr,A)}set allowedLinearError(A){c.rawintegrationparameters_set_allowedLinearError(this.ptr,A)}set predictionDistance(A){c.rawintegrationparameters_set_predictionDistance(this.ptr,A)}set maxVelocityIterations(A){c.rawintegrationparameters_set_maxVelocityIterations(this.ptr,A)}set maxVelocityFrictionIterations(A){c.rawintegrationparameters_set_maxVelocityFrictionIterations(this.ptr,A)}set maxStabilizationIterations(A){c.rawintegrationparameters_set_maxStabilizationIterations(this.ptr,A)}set minIslandSize(A){c.rawintegrationparameters_set_minIslandSize(this.ptr,A)}set maxCcdSubsteps(A){c.rawintegrationparameters_set_maxCcdSubsteps(this.ptr,A)}}class JC{static __wrap(A){const I=Object.create(JC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawislandmanager_free(A)}constructor(){const A=c.rawislandmanager_new();return JC.__wrap(A)}forEachActiveRigidBodyHandle(A){try{c.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr,WI(A))}finally{lI[YI++]=void 0}}}class OC{static __wrap(A){const I=Object.create(OC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawmultibodyjointset_free(A)}jointType(A){return c.rawmultibodyjointset_jointType(this.ptr,A)>>>0}jointFrameX1(A){const I=c.rawmultibodyjointset_jointFrameX1(this.ptr,A);return eI.__wrap(I)}jointFrameX2(A){const I=c.rawmultibodyjointset_jointFrameX2(this.ptr,A);return eI.__wrap(I)}jointAnchor1(A){const I=c.rawmultibodyjointset_jointAnchor1(this.ptr,A);return BA.__wrap(I)}jointAnchor2(A){const I=c.rawmultibodyjointset_jointAnchor2(this.ptr,A);return BA.__wrap(I)}jointContactsEnabled(A){return c.rawmultibodyjointset_jointContactsEnabled(this.ptr,A)!==0}jointSetContactsEnabled(A,I){c.rawmultibodyjointset_jointSetContactsEnabled(this.ptr,A,I)}jointLimitsEnabled(A,I){return c.rawmultibodyjointset_jointLimitsEnabled(this.ptr,A,I)!==0}jointLimitsMin(A,I){return c.rawmultibodyjointset_jointLimitsMin(this.ptr,A,I)}jointLimitsMax(A,I){return c.rawmultibodyjointset_jointLimitsMax(this.ptr,A,I)}constructor(){const A=c.rawmultibodyjointset_new();return OC.__wrap(A)}createJoint(A,I,g,B){return V(A,aC),c.rawmultibodyjointset_createJoint(this.ptr,A.ptr,I,g,B)}remove(A,I){c.rawmultibodyjointset_remove(this.ptr,A,I)}contains(A){return c.rawmultibodyjointset_contains(this.ptr,A)!==0}forEachJointHandle(A){try{c.rawmultibodyjointset_forEachJointHandle(this.ptr,WI(A))}finally{lI[YI++]=void 0}}forEachJointAttachedToRigidBody(A,I){try{c.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.ptr,A,WI(I))}finally{lI[YI++]=void 0}}}class eB{static __wrap(A){const I=Object.create(eB.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawnarrowphase_free(A)}constructor(){const A=c.rawnarrowphase_new();return eB.__wrap(A)}contacts_with(A,I){c.rawnarrowphase_contacts_with(this.ptr,A,Ig(I))}contact_pair(A,I){const g=c.rawnarrowphase_contact_pair(this.ptr,A,I);return g===0?void 0:Pa.__wrap(g)}intersections_with(A,I){c.rawnarrowphase_intersections_with(this.ptr,A,Ig(I))}intersection_pair(A,I){return c.rawnarrowphase_intersection_pair(this.ptr,A,I)!==0}}class Zo{static __wrap(A){const I=Object.create(Zo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawphysicspipeline_free(A)}constructor(){const A=c.rawphysicspipeline_new();return Zo.__wrap(A)}step(A,I,g,B,i,o,t,D,a,s){V(A,BA),V(I,pB),V(g,JC),V(B,qB),V(i,eB),V(o,zI),V(t,XI),V(D,xC),V(a,OC),V(s,BE),c.rawphysicspipeline_step(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i.ptr,o.ptr,t.ptr,D.ptr,a.ptr,s.ptr)}stepWithEvents(A,I,g,B,i,o,t,D,a,s,n,h,k,w){V(A,BA),V(I,pB),V(g,JC),V(B,qB),V(i,eB),V(o,zI),V(t,XI),V(D,xC),V(a,OC),V(s,BE),V(n,zE),c.rawphysicspipeline_stepWithEvents(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i.ptr,o.ptr,t.ptr,D.ptr,a.ptr,s.ptr,n.ptr,Ig(h),Ig(k),Ig(w))}}class vo{static __wrap(A){const I=Object.create(vo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawpointcolliderprojection_free(A)}colliderHandle(){return c.rawcontactforceevent_collider1(this.ptr)}point(){const A=c.rawpointcolliderprojection_point(this.ptr);return BA.__wrap(A)}isInside(){return c.rawpointcolliderprojection_isInside(this.ptr)!==0}featureType(){return c.rawpointcolliderprojection_featureType(this.ptr)>>>0}featureId(){try{const g=c.__wbindgen_add_to_stack_pointer(-16);c.rawpointcolliderprojection_featureId(g,this.ptr);var A=fI()[g/4+0],I=fI()[g/4+1];return A===0?void 0:I>>>0}finally{c.__wbindgen_add_to_stack_pointer(16)}}}class At{static __wrap(A){const I=Object.create(At.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawpointprojection_free(A)}point(){const A=c.rawpointprojection_point(this.ptr);return BA.__wrap(A)}isInside(){return c.rawpointprojection_isInside(this.ptr)!==0}}class Wo{static __wrap(A){const I=Object.create(Wo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawquerypipeline_free(A)}constructor(){const A=c.rawquerypipeline_new();return Wo.__wrap(A)}update(A,I,g){V(A,JC),V(I,zI),V(g,XI),c.rawquerypipeline_update(this.ptr,A.ptr,I.ptr,g.ptr)}castRay(A,I,g,B,i,o,t,D,a,s,n){try{V(A,zI),V(I,XI),V(g,BA),V(B,BA);const h=c.rawquerypipeline_castRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i,o,t,!HA(D),HA(D)?0:D,!HA(a),HA(a)?0:a,!HA(s),HA(s)?0:s,WI(n));return h===0?void 0:ja.__wrap(h)}finally{lI[YI++]=void 0}}castRayAndGetNormal(A,I,g,B,i,o,t,D,a,s,n){try{V(A,zI),V(I,XI),V(g,BA),V(B,BA);const h=c.rawquerypipeline_castRayAndGetNormal(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i,o,t,!HA(D),HA(D)?0:D,!HA(a),HA(a)?0:a,!HA(s),HA(s)?0:s,WI(n));return h===0?void 0:It.__wrap(h)}finally{lI[YI++]=void 0}}intersectionsWithRay(A,I,g,B,i,o,t,D,a,s,n,h){try{V(A,zI),V(I,XI),V(g,BA),V(B,BA),c.rawquerypipeline_intersectionsWithRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i,o,WI(t),D,!HA(a),HA(a)?0:a,!HA(s),HA(s)?0:s,!HA(n),HA(n)?0:n,WI(h))}finally{lI[YI++]=void 0,lI[YI++]=void 0}}intersectionWithShape(A,I,g,B,i,o,t,D,a,s){try{const k=c.__wbindgen_add_to_stack_pointer(-16);V(A,zI),V(I,XI),V(g,BA),V(B,eI),V(i,bA),c.rawquerypipeline_intersectionWithShape(k,this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i.ptr,o,!HA(t),HA(t)?0:t,!HA(D),HA(D)?0:D,!HA(a),HA(a)?0:a,WI(s));var n=fI()[k/4+0],h=Oo()[k/8+1];return n===0?void 0:h}finally{c.__wbindgen_add_to_stack_pointer(16),lI[YI++]=void 0}}projectPoint(A,I,g,B,i,o,t,D,a){try{V(A,zI),V(I,XI),V(g,BA);const s=c.rawquerypipeline_projectPoint(this.ptr,A.ptr,I.ptr,g.ptr,B,i,!HA(o),HA(o)?0:o,!HA(t),HA(t)?0:t,!HA(D),HA(D)?0:D,WI(a));return s===0?void 0:vo.__wrap(s)}finally{lI[YI++]=void 0}}projectPointAndGetFeature(A,I,g,B,i,o,t,D){try{V(A,zI),V(I,XI),V(g,BA);const a=c.rawquerypipeline_projectPointAndGetFeature(this.ptr,A.ptr,I.ptr,g.ptr,B,!HA(i),HA(i)?0:i,!HA(o),HA(o)?0:o,!HA(t),HA(t)?0:t,WI(D));return a===0?void 0:vo.__wrap(a)}finally{lI[YI++]=void 0}}intersectionsWithPoint(A,I,g,B,i,o,t,D,a){try{V(A,zI),V(I,XI),V(g,BA),c.rawquerypipeline_intersectionsWithPoint(this.ptr,A.ptr,I.ptr,g.ptr,WI(B),i,!HA(o),HA(o)?0:o,!HA(t),HA(t)?0:t,!HA(D),HA(D)?0:D,WI(a))}finally{lI[YI++]=void 0,lI[YI++]=void 0}}castShape(A,I,g,B,i,o,t,D,a,s,n,h){try{V(A,zI),V(I,XI),V(g,BA),V(B,eI),V(i,BA),V(o,bA);const k=c.rawquerypipeline_castShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i.ptr,o.ptr,t,D,!HA(a),HA(a)?0:a,!HA(s),HA(s)?0:s,!HA(n),HA(n)?0:n,WI(h));return k===0?void 0:Ct.__wrap(k)}finally{lI[YI++]=void 0}}intersectionsWithShape(A,I,g,B,i,o,t,D,a,s,n){try{V(A,zI),V(I,XI),V(g,BA),V(B,eI),V(i,bA),c.rawquerypipeline_intersectionsWithShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i.ptr,WI(o),t,!HA(D),HA(D)?0:D,!HA(a),HA(a)?0:a,!HA(s),HA(s)?0:s,WI(n))}finally{lI[YI++]=void 0,lI[YI++]=void 0}}collidersWithAabbIntersectingAabb(A,I,g){try{V(A,BA),V(I,BA),c.rawquerypipeline_collidersWithAabbIntersectingAabb(this.ptr,A.ptr,I.ptr,WI(g))}finally{lI[YI++]=void 0}}}class It{static __wrap(A){const I=Object.create(It.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawraycolliderintersection_free(A)}colliderHandle(){return c.rawcontactforceevent_collider1(this.ptr)}normal(){const A=c.rawraycolliderintersection_normal(this.ptr);return BA.__wrap(A)}toi(){return c.rawraycolliderintersection_toi(this.ptr)}featureType(){return c.rawpointcolliderprojection_featureType(this.ptr)>>>0}featureId(){try{const g=c.__wbindgen_add_to_stack_pointer(-16);c.rawpointcolliderprojection_featureId(g,this.ptr);var A=fI()[g/4+0],I=fI()[g/4+1];return A===0?void 0:I>>>0}finally{c.__wbindgen_add_to_stack_pointer(16)}}}class ja{static __wrap(A){const I=Object.create(ja.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawraycollidertoi_free(A)}colliderHandle(){return c.rawcontactforceevent_collider1(this.ptr)}toi(){return c.rawraycolliderintersection_toi(this.ptr)}}class gt{static __wrap(A){const I=Object.create(gt.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawrayintersection_free(A)}normal(){const A=c.rawrayintersection_normal(this.ptr);return BA.__wrap(A)}toi(){return c.rawintegrationparameters_dt(this.ptr)}featureType(){return c.rawrayintersection_featureType(this.ptr)>>>0}featureId(){try{const g=c.__wbindgen_add_to_stack_pointer(-16);c.rawrayintersection_featureId(g,this.ptr);var A=fI()[g/4+0],I=fI()[g/4+1];return A===0?void 0:I>>>0}finally{c.__wbindgen_add_to_stack_pointer(16)}}}class zI{static __wrap(A){const I=Object.create(zI.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawrigidbodyset_free(A)}rbTranslation(A){const I=c.rawrigidbodyset_rbTranslation(this.ptr,A);return BA.__wrap(I)}rbRotation(A){const I=c.rawrigidbodyset_rbRotation(this.ptr,A);return eI.__wrap(I)}rbSleep(A){c.rawrigidbodyset_rbSleep(this.ptr,A)}rbIsSleeping(A){return c.rawrigidbodyset_rbIsSleeping(this.ptr,A)!==0}rbIsMoving(A){return c.rawrigidbodyset_rbIsMoving(this.ptr,A)!==0}rbNextTranslation(A){const I=c.rawrigidbodyset_rbNextTranslation(this.ptr,A);return BA.__wrap(I)}rbNextRotation(A){const I=c.rawrigidbodyset_rbNextRotation(this.ptr,A);return eI.__wrap(I)}rbSetTranslation(A,I,g,B,i){c.rawrigidbodyset_rbSetTranslation(this.ptr,A,I,g,B,i)}rbSetRotation(A,I,g,B,i,o){c.rawrigidbodyset_rbSetRotation(this.ptr,A,I,g,B,i,o)}rbSetLinvel(A,I,g){V(I,BA),c.rawrigidbodyset_rbSetLinvel(this.ptr,A,I.ptr,g)}rbSetAngvel(A,I,g){V(I,BA),c.rawrigidbodyset_rbSetAngvel(this.ptr,A,I.ptr,g)}rbSetNextKinematicTranslation(A,I,g,B){c.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr,A,I,g,B)}rbSetNextKinematicRotation(A,I,g,B,i){c.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr,A,I,g,B,i)}rbRecomputeMassPropertiesFromColliders(A,I){V(I,XI),c.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.ptr,A,I.ptr)}rbSetAdditionalMass(A,I,g){c.rawrigidbodyset_rbSetAdditionalMass(this.ptr,A,I,g)}rbSetAdditionalMassProperties(A,I,g,B,i,o){V(g,BA),V(B,BA),V(i,eI),c.rawrigidbodyset_rbSetAdditionalMassProperties(this.ptr,A,I,g.ptr,B.ptr,i.ptr,o)}rbLinvel(A){const I=c.rawrigidbodyset_rbLinvel(this.ptr,A);return BA.__wrap(I)}rbAngvel(A){const I=c.rawrigidbodyset_rbAngvel(this.ptr,A);return BA.__wrap(I)}rbLockTranslations(A,I,g){c.rawrigidbodyset_rbLockTranslations(this.ptr,A,I,g)}rbSetEnabledTranslations(A,I,g,B,i){c.rawrigidbodyset_rbSetEnabledTranslations(this.ptr,A,I,g,B,i)}rbLockRotations(A,I,g){c.rawrigidbodyset_rbLockRotations(this.ptr,A,I,g)}rbSetEnabledRotations(A,I,g,B,i){c.rawrigidbodyset_rbSetEnabledRotations(this.ptr,A,I,g,B,i)}rbDominanceGroup(A){return c.rawrigidbodyset_rbDominanceGroup(this.ptr,A)}rbSetDominanceGroup(A,I){c.rawrigidbodyset_rbSetDominanceGroup(this.ptr,A,I)}rbEnableCcd(A,I){c.rawrigidbodyset_rbEnableCcd(this.ptr,A,I)}rbMass(A){return c.rawrigidbodyset_rbMass(this.ptr,A)}rbWakeUp(A){c.rawrigidbodyset_rbWakeUp(this.ptr,A)}rbIsCcdEnabled(A){return c.rawrigidbodyset_rbIsCcdEnabled(this.ptr,A)!==0}rbNumColliders(A){return c.rawrigidbodyset_rbNumColliders(this.ptr,A)>>>0}rbCollider(A,I){return c.rawrigidbodyset_rbCollider(this.ptr,A,I)}rbBodyType(A){return c.rawrigidbodyset_rbBodyType(this.ptr,A)>>>0}rbSetBodyType(A,I){c.rawrigidbodyset_rbSetBodyType(this.ptr,A,I)}rbIsFixed(A){return c.rawrigidbodyset_rbIsFixed(this.ptr,A)!==0}rbIsKinematic(A){return c.rawrigidbodyset_rbIsKinematic(this.ptr,A)!==0}rbIsDynamic(A){return c.rawrigidbodyset_rbIsDynamic(this.ptr,A)!==0}rbLinearDamping(A){return c.rawrigidbodyset_rbLinearDamping(this.ptr,A)}rbAngularDamping(A){return c.rawrigidbodyset_rbAngularDamping(this.ptr,A)}rbSetLinearDamping(A,I){c.rawrigidbodyset_rbSetLinearDamping(this.ptr,A,I)}rbSetAngularDamping(A,I){c.rawrigidbodyset_rbSetAngularDamping(this.ptr,A,I)}rbGravityScale(A){return c.rawrigidbodyset_rbGravityScale(this.ptr,A)}rbSetGravityScale(A,I,g){c.rawrigidbodyset_rbSetGravityScale(this.ptr,A,I,g)}rbResetForces(A,I){c.rawrigidbodyset_rbResetForces(this.ptr,A,I)}rbResetTorques(A,I){c.rawrigidbodyset_rbResetTorques(this.ptr,A,I)}rbAddForce(A,I,g){V(I,BA),c.rawrigidbodyset_rbAddForce(this.ptr,A,I.ptr,g)}rbApplyImpulse(A,I,g){V(I,BA),c.rawrigidbodyset_rbApplyImpulse(this.ptr,A,I.ptr,g)}rbAddTorque(A,I,g){V(I,BA),c.rawrigidbodyset_rbAddTorque(this.ptr,A,I.ptr,g)}rbApplyTorqueImpulse(A,I,g){V(I,BA),c.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr,A,I.ptr,g)}rbAddForceAtPoint(A,I,g,B){V(I,BA),V(g,BA),c.rawrigidbodyset_rbAddForceAtPoint(this.ptr,A,I.ptr,g.ptr,B)}rbApplyImpulseAtPoint(A,I,g,B){V(I,BA),V(g,BA),c.rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr,A,I.ptr,g.ptr,B)}rbUserData(A){return c.rawrigidbodyset_rbUserData(this.ptr,A)>>>0}rbSetUserData(A,I){c.rawrigidbodyset_rbSetUserData(this.ptr,A,I)}constructor(){const A=c.rawrigidbodyset_new();return zI.__wrap(A)}createRigidBody(A,I,g,B,i,o,t,D,a,s,n,h,k,w,r,G,l,J,d,p,y,f,Z){return V(A,BA),V(I,eI),V(o,BA),V(t,BA),V(D,BA),V(a,BA),V(s,eI),c.rawrigidbodyset_createRigidBody(this.ptr,A.ptr,I.ptr,g,B,i,o.ptr,t.ptr,D.ptr,a.ptr,s.ptr,n,h,k,w,r,G,l,J,d,p,y,f,Z)}remove(A,I,g,B,i){V(I,JC),V(g,XI),V(B,xC),V(i,OC),c.rawrigidbodyset_remove(this.ptr,A,I.ptr,g.ptr,B.ptr,i.ptr)}len(){return c.rawrigidbodyset_len(this.ptr)>>>0}contains(A){return c.rawrigidbodyset_contains(this.ptr,A)!==0}forEachRigidBodyHandle(A){try{c.rawrigidbodyset_forEachRigidBodyHandle(this.ptr,WI(A))}finally{lI[YI++]=void 0}}}class eI{static __wrap(A){const I=Object.create(eI.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawrotation_free(A)}constructor(A,I,g,B){const i=c.rawrotation_new(A,I,g,B);return eI.__wrap(i)}static identity(){const A=c.rawrotation_identity();return eI.__wrap(A)}get x(){return c.rawintegrationparameters_dt(this.ptr)}get y(){return c.rawrotation_y(this.ptr)}get z(){return c.rawintegrationparameters_erp(this.ptr)}get w(){return c.rawrotation_w(this.ptr)}}class Po{static __wrap(A){const I=Object.create(Po.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawserializationpipeline_free(A)}constructor(){const A=c.rawserializationpipeline_new();return Po.__wrap(A)}serializeAll(A,I,g,B,i,o,t,D,a){return V(A,BA),V(I,pB),V(g,JC),V(B,qB),V(i,eB),V(o,zI),V(t,XI),V(D,xC),V(a,OC),xo(c.rawserializationpipeline_serializeAll(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i.ptr,o.ptr,t.ptr,D.ptr,a.ptr))}deserializeAll(A){const I=c.rawserializationpipeline_deserializeAll(this.ptr,Ig(A));return I===0?void 0:_a.__wrap(I)}}class bA{static __wrap(A){const I=Object.create(bA.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawshape_free(A)}static cuboid(A,I,g){const B=c.rawshape_cuboid(A,I,g);return bA.__wrap(B)}static roundCuboid(A,I,g,B){const i=c.rawshape_roundCuboid(A,I,g,B);return bA.__wrap(i)}static ball(A){const I=c.rawshape_ball(A);return bA.__wrap(I)}static halfspace(A){V(A,BA);const I=c.rawshape_halfspace(A.ptr);return bA.__wrap(I)}static capsule(A,I){const g=c.rawshape_capsule(A,I);return bA.__wrap(g)}static cylinder(A,I){const g=c.rawshape_cylinder(A,I);return bA.__wrap(g)}static roundCylinder(A,I,g){const B=c.rawshape_roundCylinder(A,I,g);return bA.__wrap(B)}static cone(A,I){const g=c.rawshape_cone(A,I);return bA.__wrap(g)}static roundCone(A,I,g){const B=c.rawshape_roundCone(A,I,g);return bA.__wrap(B)}static polyline(A,I){const g=vB(A,c.__wbindgen_malloc),B=Pg,i=Ao(I,c.__wbindgen_malloc),o=Pg,t=c.rawshape_polyline(g,B,i,o);return bA.__wrap(t)}static trimesh(A,I){const g=vB(A,c.__wbindgen_malloc),B=Pg,i=Ao(I,c.__wbindgen_malloc),o=Pg,t=c.rawshape_trimesh(g,B,i,o);return bA.__wrap(t)}static heightfield(A,I,g,B){const i=vB(g,c.__wbindgen_malloc),o=Pg;V(B,BA);const t=c.rawshape_heightfield(A,I,i,o,B.ptr);return bA.__wrap(t)}static segment(A,I){V(A,BA),V(I,BA);const g=c.rawshape_segment(A.ptr,I.ptr);return bA.__wrap(g)}static triangle(A,I,g){V(A,BA),V(I,BA),V(g,BA);const B=c.rawshape_triangle(A.ptr,I.ptr,g.ptr);return bA.__wrap(B)}static roundTriangle(A,I,g,B){V(A,BA),V(I,BA),V(g,BA);const i=c.rawshape_roundTriangle(A.ptr,I.ptr,g.ptr,B);return bA.__wrap(i)}static convexHull(A){const I=vB(A,c.__wbindgen_malloc),g=Pg,B=c.rawshape_convexHull(I,g);return B===0?void 0:bA.__wrap(B)}static roundConvexHull(A,I){const g=vB(A,c.__wbindgen_malloc),B=Pg,i=c.rawshape_roundConvexHull(g,B,I);return i===0?void 0:bA.__wrap(i)}static convexMesh(A,I){const g=vB(A,c.__wbindgen_malloc),B=Pg,i=Ao(I,c.__wbindgen_malloc),o=Pg,t=c.rawshape_convexMesh(g,B,i,o);return t===0?void 0:bA.__wrap(t)}static roundConvexMesh(A,I,g){const B=vB(A,c.__wbindgen_malloc),i=Pg,o=Ao(I,c.__wbindgen_malloc),t=Pg,D=c.rawshape_roundConvexMesh(B,i,o,t,g);return D===0?void 0:bA.__wrap(D)}castShape(A,I,g,B,i,o,t,D){V(A,BA),V(I,eI),V(g,BA),V(B,bA),V(i,BA),V(o,eI),V(t,BA);const a=c.rawshape_castShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i.ptr,o.ptr,t.ptr,D);return a===0?void 0:Bt.__wrap(a)}intersectsShape(A,I,g,B,i){return V(A,BA),V(I,eI),V(g,bA),V(B,BA),V(i,eI),c.rawshape_intersectsShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i.ptr)!==0}contactShape(A,I,g,B,i,o){V(A,BA),V(I,eI),V(g,bA),V(B,BA),V(i,eI);const t=c.rawshape_contactShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i.ptr,o);return t===0?void 0:$E.__wrap(t)}containsPoint(A,I,g){return V(A,BA),V(I,eI),V(g,BA),c.rawshape_containsPoint(this.ptr,A.ptr,I.ptr,g.ptr)!==0}projectPoint(A,I,g,B){V(A,BA),V(I,eI),V(g,BA);const i=c.rawshape_projectPoint(this.ptr,A.ptr,I.ptr,g.ptr,B);return At.__wrap(i)}intersectsRay(A,I,g,B,i){return V(A,BA),V(I,eI),V(g,BA),V(B,BA),c.rawshape_intersectsRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i)!==0}castRay(A,I,g,B,i,o){return V(A,BA),V(I,eI),V(g,BA),V(B,BA),c.rawshape_castRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i,o)}castRayAndGetNormal(A,I,g,B,i,o){V(A,BA),V(I,eI),V(g,BA),V(B,BA);const t=c.rawshape_castRayAndGetNormal(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,i,o);return t===0?void 0:gt.__wrap(t)}}class Ct{static __wrap(A){const I=Object.create(Ct.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawshapecollidertoi_free(A)}colliderHandle(){return c.rawcontactforceevent_collider1(this.ptr)}toi(){return c.rawraycolliderintersection_toi(this.ptr)}witness1(){const A=c.rawraycolliderintersection_normal(this.ptr);return BA.__wrap(A)}witness2(){const A=c.rawshapecollidertoi_witness2(this.ptr);return BA.__wrap(A)}normal1(){const A=c.rawshapecollidertoi_normal1(this.ptr);return BA.__wrap(A)}normal2(){const A=c.rawshapecollidertoi_normal2(this.ptr);return BA.__wrap(A)}}class $E{static __wrap(A){const I=Object.create($E.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawshapecontact_free(A)}distance(){return c.rawshapecontact_distance(this.ptr)}point1(){const A=c.rawpointprojection_point(this.ptr);return BA.__wrap(A)}point2(){const A=c.rawshapecontact_point2(this.ptr);return BA.__wrap(A)}normal1(){const A=c.rawshapecontact_normal1(this.ptr);return BA.__wrap(A)}normal2(){const A=c.rawshapecontact_normal2(this.ptr);return BA.__wrap(A)}}class Bt{static __wrap(A){const I=Object.create(Bt.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawshapetoi_free(A)}toi(){return c.rawintegrationparameters_dt(this.ptr)}witness1(){const A=c.rawrayintersection_normal(this.ptr);return BA.__wrap(A)}witness2(){const A=c.rawshapetoi_witness2(this.ptr);return BA.__wrap(A)}normal1(){const A=c.rawshapetoi_normal1(this.ptr);return BA.__wrap(A)}normal2(){const A=c.rawshapetoi_normal2(this.ptr);return BA.__wrap(A)}}class BA{static __wrap(A){const I=Object.create(BA.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();c.__wbg_rawvector_free(A)}static zero(){const A=c.rawvector_zero();return BA.__wrap(A)}constructor(A,I,g){const B=c.rawvector_new(A,I,g);return BA.__wrap(B)}get x(){return c.rawintegrationparameters_dt(this.ptr)}set x(A){c.rawintegrationparameters_set_dt(this.ptr,A)}get y(){return c.rawrotation_y(this.ptr)}set y(A){c.rawvector_set_y(this.ptr,A)}get z(){return c.rawintegrationparameters_erp(this.ptr)}set z(A){c.rawintegrationparameters_set_erp(this.ptr,A)}xyz(){const A=c.rawvector_xyz(this.ptr);return BA.__wrap(A)}yxz(){const A=c.rawvector_yxz(this.ptr);return BA.__wrap(A)}zxy(){const A=c.rawvector_zxy(this.ptr);return BA.__wrap(A)}xzy(){const A=c.rawvector_xzy(this.ptr);return BA.__wrap(A)}yzx(){const A=c.rawvector_yzx(this.ptr);return BA.__wrap(A)}zyx(){const A=c.rawvector_zyx(this.ptr);return BA.__wrap(A)}}async function PS(E){E===void 0&&(E=new URL("rapier_wasm3d_bg.wasm","<deleted>"));const A=function(){const B={wbg:{}};return B.wbg.__wbindgen_object_drop_ref=function(i){xo(i)},B.wbg.__wbindgen_number_new=function(i){return Ig(i)},B.wbg.__wbindgen_number_get=function(i,o){const t=NI(o),D=typeof t=="number"?t:void 0;Oo()[i/8+1]=HA(D)?0:D,fI()[i/4+0]=!HA(D)},B.wbg.__wbindgen_boolean_get=function(i){const o=NI(i);return typeof o=="boolean"?o?1:0:2},B.wbg.__wbg_rawraycolliderintersection_new=function(i){return Ig(It.__wrap(i))},B.wbg.__wbg_rawcontactforceevent_new=function(i){return Ig(va.__wrap(i))},B.wbg.__wbindgen_is_function=function(i){return typeof NI(i)=="function"},B.wbg.__wbg_call_9855a4612eb496cb=function(){return Je(function(i,o,t){return Ig(NI(i).call(NI(o),NI(t)))},arguments)},B.wbg.__wbg_call_8e1338b908441bd2=function(){return Je(function(i,o,t,D){return Ig(NI(i).call(NI(o),NI(t),NI(D)))},arguments)},B.wbg.__wbg_call_0a54fa4fb42023f0=function(){return Je(function(i,o,t,D,a){return Ig(NI(i).call(NI(o),NI(t),NI(D),NI(a)))},arguments)},B.wbg.__wbg_bind_2ae44992222e2f45=function(i,o,t,D){return Ig(NI(i).bind(NI(o),NI(t),NI(D)))},B.wbg.__wbg_buffer_de1150f91b23aa89=function(i){return Ig(NI(i).buffer)},B.wbg.__wbg_newwithbyteoffsetandlength_9ca61320599a2c84=function(i,o,t){return Ig(new Uint8Array(NI(i),o>>>0,t>>>0))},B.wbg.__wbg_new_97cf52648830a70d=function(i){return Ig(new Uint8Array(NI(i)))},B.wbg.__wbg_set_a0172b213e2469e9=function(i,o,t){NI(i).set(NI(o),t>>>0)},B.wbg.__wbg_length_e09c0b925ab8de5d=function(i){return NI(i).length},B.wbg.__wbg_newwithbyteoffsetandlength_b0ff18b468a0d3f8=function(i,o,t){return Ig(new Float32Array(NI(i),o>>>0,t>>>0))},B.wbg.__wbg_set_66067e08ab6cefb5=function(i,o,t){NI(i).set(NI(o),t>>>0)},B.wbg.__wbg_length_211080f5c116c01f=function(i){return NI(i).length},B.wbg.__wbg_newwithlength_f28ac7a9191c7e26=function(i){return Ig(new Float32Array(i>>>0))},B.wbg.__wbindgen_throw=function(i,o){throw new Error(vS(i,o))},B.wbg.__wbindgen_memory=function(){return Ig(c.memory)},B}();(typeof E=="string"||typeof Request=="function"&&E instanceof Request||typeof URL=="function"&&E instanceof URL)&&(E=fetch(E));const{instance:I,module:g}=await async function(B,i){if(typeof Response=="function"&&B instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(B,i)}catch(t){if(B.headers.get("Content-Type")=="application/wasm")throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const o=await B.arrayBuffer();return await WebAssembly.instantiate(o,i)}{const o=await WebAssembly.instantiate(B,i);return o instanceof WebAssembly.Instance?{instance:o,module:B}:o}}(await E,A);return function(B,i){return c=B.exports,PS.__wbindgen_wasm_module=i,qo=new Float32Array,Jo=new Float64Array,Ro=new Int32Array,po=new Uint32Array,Fo=new Uint8Array,c}(I,g)}class PQ{constructor(A,I,g){this.x=A,this.y=I,this.z=g}}class gA{static new(A,I,g){return new PQ(A,I,g)}static intoRaw(A){return new BA(A.x,A.y,A.z)}static zeros(){return gA.new(0,0,0)}static fromRaw(A){if(!A)return null;let I=gA.new(A.x,A.y,A.z);return A.free(),I}static copy(A,I){A.x=I.x,A.y=I.y,A.z=I.z}}class ra{constructor(A,I,g,B){this.x=A,this.y=I,this.z=g,this.w=B}}class EI{static identity(){return new ra(0,0,0,1)}static fromRaw(A){if(!A)return null;let I=new ra(A.x,A.y,A.z,A.w);return A.free(),I}static intoRaw(A){return new eI(A.x,A.y,A.z,A.w)}static copy(A,I){A.x=I.x,A.y=I.y,A.z=I.z,A.w=I.w}}var Lg,Eg,wa,Ai,QE,tI,_o,AQ,ca,ka,la,ya;(function(E){E[E.Dynamic=0]="Dynamic",E[E.Fixed=1]="Fixed",E[E.KinematicPositionBased=2]="KinematicPositionBased",E[E.KinematicVelocityBased=3]="KinematicVelocityBased"})(Lg||(Lg={}));class Ua{constructor(A,I,g){this.rawSet=A,this.colliderSet=I,this.handle=g}finalizeDeserialization(A){this.colliderSet=A}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(A,I){return this.rawSet.rbLockTranslations(this.handle,A,I)}lockRotations(A,I){return this.rawSet.rbLockRotations(this.handle,A,I)}setEnabledTranslations(A,I,g,B){return this.rawSet.rbSetEnabledTranslations(this.handle,A,I,g,B)}restrictTranslations(A,I,g,B){this.setEnabledTranslations(A,I,g,B)}setEnabledRotations(A,I,g,B){return this.rawSet.rbSetEnabledRotations(this.handle,A,I,g,B)}restrictRotations(A,I,g,B){this.setEnabledRotations(A,I,g,B)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(A){this.rawSet.rbSetDominanceGroup(this.handle,A)}enableCcd(A){this.rawSet.rbEnableCcd(this.handle,A)}translation(){let A=this.rawSet.rbTranslation(this.handle);return gA.fromRaw(A)}rotation(){let A=this.rawSet.rbRotation(this.handle);return EI.fromRaw(A)}nextTranslation(){let A=this.rawSet.rbNextTranslation(this.handle);return gA.fromRaw(A)}nextRotation(){let A=this.rawSet.rbNextRotation(this.handle);return EI.fromRaw(A)}setTranslation(A,I){this.rawSet.rbSetTranslation(this.handle,A.x,A.y,A.z,I)}setLinvel(A,I){let g=gA.intoRaw(A);this.rawSet.rbSetLinvel(this.handle,g,I),g.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(A,I){this.rawSet.rbSetGravityScale(this.handle,A,I)}setRotation(A,I){this.rawSet.rbSetRotation(this.handle,A.x,A.y,A.z,A.w,I)}setAngvel(A,I){let g=gA.intoRaw(A);this.rawSet.rbSetAngvel(this.handle,g,I),g.free()}setNextKinematicTranslation(A){this.rawSet.rbSetNextKinematicTranslation(this.handle,A.x,A.y,A.z)}setNextKinematicRotation(A){this.rawSet.rbSetNextKinematicRotation(this.handle,A.x,A.y,A.z,A.w)}linvel(){return gA.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return gA.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(A){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,A))}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(A){return this.rawSet.rbSetBodyType(this.handle,A)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(A){this.rawSet.rbSetLinearDamping(this.handle,A)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(A,I){this.rawSet.rbSetAdditionalMass(this.handle,A,I)}setAdditionalMassProperties(A,I,g,B,i){let o=gA.intoRaw(I),t=gA.intoRaw(g),D=EI.intoRaw(B);this.rawSet.rbSetAdditionalMassProperties(this.handle,A,o,t,D,i),o.free(),t.free(),D.free()}setAngularDamping(A){this.rawSet.rbSetAngularDamping(this.handle,A)}resetForces(A){this.rawSet.rbResetForces(this.handle,A)}resetTorques(A){this.rawSet.rbResetTorques(this.handle,A)}addForce(A,I){const g=gA.intoRaw(A);this.rawSet.rbAddForce(this.handle,g,I),g.free()}applyImpulse(A,I){const g=gA.intoRaw(A);this.rawSet.rbApplyImpulse(this.handle,g,I),g.free()}addTorque(A,I){const g=gA.intoRaw(A);this.rawSet.rbAddTorque(this.handle,g,I),g.free()}applyTorqueImpulse(A,I){const g=gA.intoRaw(A);this.rawSet.rbApplyTorqueImpulse(this.handle,g,I),g.free()}addForceAtPoint(A,I,g){const B=gA.intoRaw(A),i=gA.intoRaw(I);this.rawSet.rbAddForceAtPoint(this.handle,B,i,g),B.free(),i.free()}applyImpulseAtPoint(A,I,g){const B=gA.intoRaw(A),i=gA.intoRaw(I);this.rawSet.rbApplyImpulseAtPoint(this.handle,B,i,g),B.free(),i.free()}}class oC{constructor(A){this.status=A,this.translation=gA.zeros(),this.rotation=EI.identity(),this.gravityScale=1,this.linvel=gA.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=gA.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=gA.zeros(),this.principalAngularInertia=gA.zeros(),this.angularInertiaLocalFrame=EI.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.dominanceGroup=0}static dynamic(){return new oC(Lg.Dynamic)}static kinematicPositionBased(){return new oC(Lg.KinematicPositionBased)}static kinematicVelocityBased(){return new oC(Lg.KinematicVelocityBased)}static fixed(){return new oC(Lg.Fixed)}static newDynamic(){return new oC(Lg.Dynamic)}static newKinematicPositionBased(){return new oC(Lg.KinematicPositionBased)}static newKinematicVelocityBased(){return new oC(Lg.KinematicVelocityBased)}static newStatic(){return new oC(Lg.Fixed)}setDominanceGroup(A){return this.dominanceGroup=A,this}setTranslation(A,I,g){if(typeof A!="number"||typeof I!="number"||typeof g!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:A,y:I,z:g},this}setRotation(A){return EI.copy(this.rotation,A),this}setGravityScale(A){return this.gravityScale=A,this}setAdditionalMass(A){return this.mass=A,this.massOnly=!0,this}setLinvel(A,I,g){if(typeof A!="number"||typeof I!="number"||typeof g!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:A,y:I,z:g},this}setAngvel(A){return gA.copy(this.angvel,A),this}setAdditionalMassProperties(A,I,g,B){return this.mass=A,gA.copy(this.centerOfMass,I),gA.copy(this.principalAngularInertia,g),EI.copy(this.angularInertiaLocalFrame,B),this.massOnly=!1,this}enabledTranslations(A,I,g){return this.translationsEnabledX=A,this.translationsEnabledY=I,this.translationsEnabledZ=g,this}restrictTranslations(A,I,g){return this.enabledTranslations(A,I,g)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(A,I,g){return this.rotationsEnabledX=A,this.rotationsEnabledY=I,this.rotationsEnabledZ=g,this}restrictRotations(A,I,g){return this.enabledRotations(A,I,g)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(A){return this.linearDamping=A,this}setAngularDamping(A){return this.angularDamping=A,this}setCanSleep(A){return this.canSleep=A,this}setSleeping(A){return this.sleeping=A,this}setCcdEnabled(A){return this.ccdEnabled=A,this}setUserData(A){return this.userData=A,this}}class Qt{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(A,I){let g=this.index(A);for(;this.data.length<=g;)this.data.push(null);this.data[g]==null&&(this.size+=1),this.data[g]=I}len(){return this.size}delete(A){let I=this.index(A);I<this.data.length&&(this.data[I]!=null&&(this.size-=1),this.data[I]=null)}clear(){this.data=new Array}get(A){let I=this.index(A);return I<this.data.length?this.data[I]:null}forEach(A){for(const I of this.data)I!=null&&A(I)}getAll(){return this.data.filter(A=>A!=null)}index(A){return this.fconv[0]=A,this.uconv[0]}}class _S{constructor(A){this.raw=A||new zI,this.map=new Qt,A&&A.forEachRigidBodyHandle(I=>{this.map.set(I,new Ua(A,null,I))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}finalizeDeserialization(A){this.map.forEach(I=>I.finalizeDeserialization(A))}createRigidBody(A,I){let g=gA.intoRaw(I.translation),B=EI.intoRaw(I.rotation),i=gA.intoRaw(I.linvel),o=gA.intoRaw(I.centerOfMass),t=gA.intoRaw(I.angvel),D=gA.intoRaw(I.principalAngularInertia),a=EI.intoRaw(I.angularInertiaLocalFrame),s=this.raw.createRigidBody(g,B,I.gravityScale,I.mass,I.massOnly,o,i,t,D,a,I.translationsEnabledX,I.translationsEnabledY,I.translationsEnabledZ,I.rotationsEnabledX,I.rotationsEnabledY,I.rotationsEnabledZ,I.linearDamping,I.angularDamping,I.status,I.canSleep,I.sleeping,I.ccdEnabled,I.dominanceGroup);g.free(),B.free(),i.free(),o.free(),t.free(),D.free(),a.free();const n=new Ua(this.raw,A,s);return n.userData=I.userData,this.map.set(s,n),n}remove(A,I,g,B,i){for(let o=0;o<this.raw.rbNumColliders(A);o+=1)g.unmap(this.raw.rbCollider(A,o));B.forEachJointHandleAttachedToRigidBody(A,o=>B.unmap(o)),i.forEachJointHandleAttachedToRigidBody(A,o=>i.unmap(o)),this.raw.remove(A,I.raw,g.raw,B.raw,i.raw),this.map.delete(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}get(A){return this.map.get(A)}forEach(A){this.map.forEach(A)}forEachActiveRigidBody(A,I){A.forEachActiveRigidBodyHandle(g=>{I(this.get(g))})}getAll(){return this.map.getAll()}}class jS{constructor(A){this.raw=A||new pB}free(){this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get erp(){return this.raw.erp}get allowedLinearError(){return this.raw.allowedLinearError}get predictionDistance(){return this.raw.predictionDistance}get maxVelocityIterations(){return this.raw.maxVelocityIterations}get maxVelocityFrictionIterations(){return this.raw.maxVelocityFrictionIterations}get maxStabilizationIterations(){return this.raw.maxStabilizationIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(A){this.raw.dt=A}set erp(A){this.raw.erp=A}set allowedLinearError(A){this.raw.allowedLinearError=A}set predictionDistance(A){this.raw.predictionDistance=A}set maxVelocityIterations(A){this.raw.maxVelocityIterations=A}set maxVelocityFrictionIterations(A){this.raw.maxVelocityFrictionIterations=A}set maxStabilizationIterations(A){this.raw.maxStabilizationIterations=A}set minIslandSize(A){this.raw.minIslandSize=A}set maxCcdSubsteps(A){this.raw.maxCcdSubsteps=A}}(function(E){E[E.Revolute=0]="Revolute",E[E.Fixed=1]="Fixed",E[E.Prismatic=2]="Prismatic",E[E.Spherical=3]="Spherical"})(Eg||(Eg={})),function(E){E[E.AccelerationBased=0]="AccelerationBased",E[E.ForceBased=1]="ForceBased"}(wa||(wa={}));class dB{constructor(A,I,g){this.rawSet=A,this.bodySet=I,this.handle=g}static newTyped(A,I,g){switch(A.jointType(g)){case Eg.Revolute:return new zS(A,I,g);case Eg.Prismatic:return new XS(A,I,g);case Eg.Fixed:return new VS(A,I,g);case Eg.Spherical:return new $S(A,I,g);default:return new dB(A,I,g)}}finalizeDeserialization(A){this.bodySet=A}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return EI.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return EI.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return gA.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return gA.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(A){const I=gA.intoRaw(A);this.rawSet.jointSetAnchor1(this.handle,I),I.free()}setAnchor2(A){const I=gA.intoRaw(A);this.rawSet.jointSetAnchor2(this.handle,I),I.free()}setContactsEnabled(A){this.rawSet.jointSetContactsEnabled(this.handle,A)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Va extends dB{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(A,I){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),A,I)}configureMotorModel(A){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),A)}configureMotorVelocity(A,I){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),A,I)}configureMotorPosition(A,I,g){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),A,I,g)}configureMotor(A,I,g,B){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),A,I,g,B)}}class VS extends dB{}class XS extends Va{rawAxis(){return $o.X}}class zS extends Va{rawAxis(){return $o.AngX}}class $S extends dB{}class _Q{constructor(){}static fixed(A,I,g,B){let i=new _Q;return i.anchor1=A,i.anchor2=g,i.frame1=I,i.frame2=B,i.jointType=Eg.Fixed,i}static spherical(A,I){let g=new _Q;return g.anchor1=A,g.anchor2=I,g.jointType=Eg.Spherical,g}static prismatic(A,I,g){let B=new _Q;return B.anchor1=A,B.anchor2=I,B.axis=g,B.jointType=Eg.Prismatic,B}static revolute(A,I,g){let B=new _Q;return B.anchor1=A,B.anchor2=I,B.axis=g,B.jointType=Eg.Revolute,B}intoRaw(){let A,I,g=gA.intoRaw(this.anchor1),B=gA.intoRaw(this.anchor2),i=!1,o=0,t=0;switch(this.jointType){case Eg.Fixed:let D=EI.intoRaw(this.frame1),a=EI.intoRaw(this.frame2);I=aC.fixed(g,D,B,a),D.free(),a.free();break;case Eg.Prismatic:A=gA.intoRaw(this.axis),this.limitsEnabled&&(i=!0,o=this.limits[0],t=this.limits[1]),I=aC.prismatic(g,B,A,i,o,t),A.free();break;case Eg.Spherical:I=aC.spherical(g,B);break;case Eg.Revolute:A=gA.intoRaw(this.axis),I=aC.revolute(g,B,A),A.free()}return g.free(),B.free(),I}}class AG{constructor(A){this.raw=A||new xC,this.map=new Qt,A&&A.forEachJointHandle(I=>{this.map.set(I,dB.newTyped(A,null,I))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}finalizeDeserialization(A){this.map.forEach(I=>I.finalizeDeserialization(A))}createJoint(A,I,g,B,i){const o=I.intoRaw(),t=this.raw.createJoint(o,g,B,i);o.free();let D=dB.newTyped(this.raw,A,t);return this.map.set(t,D),D}remove(A,I){this.raw.remove(A,I),this.unmap(A)}forEachJointHandleAttachedToRigidBody(A,I){this.raw.forEachJointAttachedToRigidBody(A,I)}unmap(A){this.map.delete(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}get(A){return this.map.get(A)}forEach(A){this.map.forEach(A)}getAll(){return this.map.getAll()}}class LB{constructor(A,I){this.rawSet=A,this.handle=I}static newTyped(A,I){switch(A.jointType(I)){case Eg.Revolute:return new CG(A,I);case Eg.Prismatic:return new gG(A,I);case Eg.Fixed:return new IG(A,I);case Eg.Spherical:return new BG(A,I);default:return new LB(A,I)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(A){this.rawSet.jointSetContactsEnabled(this.handle,A)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Xa extends LB{}class IG extends LB{}class gG extends Xa{rawAxis(){return $o.X}}class CG extends Xa{rawAxis(){return $o.AngX}}class BG extends LB{}class QG{constructor(A){this.raw=A||new OC,this.map=new Qt,A&&A.forEachJointHandle(I=>{this.map.set(I,LB.newTyped(this.raw,I))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}createJoint(A,I,g,B){const i=A.intoRaw(),o=this.raw.createJoint(i,I,g,B);i.free();let t=LB.newTyped(this.raw,o);return this.map.set(o,t),t}remove(A,I){this.raw.remove(A,I),this.map.delete(A)}unmap(A){this.map.delete(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}get(A){return this.map.get(A)}forEach(A){this.map.forEach(A)}forEachJointHandleAttachedToRigidBody(A,I){this.raw.forEachJointAttachedToRigidBody(A,I)}getAll(){return this.map.getAll()}}(function(E){E[E.Average=0]="Average",E[E.Min=1]="Min",E[E.Multiply=2]="Multiply",E[E.Max=3]="Max"})(Ai||(Ai={}));class EG{constructor(A){this.raw=A||new BE}free(){this.raw.free(),this.raw=void 0}}class iG{constructor(A){this.raw=A||new JC}free(){this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(A){this.raw.forEachActiveRigidBodyHandle(A)}}class oG{constructor(A){this.raw=A||new qB}free(){this.raw.free(),this.raw=void 0}}class tG{constructor(A){this.raw=A||new eB,this.tempManifold=new eG(null)}free(){this.raw.free(),this.raw=void 0}contactsWith(A,I){this.raw.contacts_with(A,I)}intersectionsWith(A,I){this.raw.intersections_with(A,I)}contactPair(A,I,g){const B=this.raw.contact_pair(A,I);if(B){const i=B.collider1()!=A;let o;for(o=0;o<B.numContactManifolds();++o)this.tempManifold.raw=B.contactManifold(o),this.tempManifold.raw&&g(this.tempManifold,i),this.tempManifold.free();B.free()}}intersectionPair(A,I){return this.raw.intersection_pair(A,I)}}class eG{constructor(A){this.raw=A}free(){this.raw.free(),this.raw=void 0}normal(){return gA.fromRaw(this.raw.normal())}localNormal1(){return gA.fromRaw(this.raw.local_n1())}localNormal2(){return gA.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(A){return gA.fromRaw(this.raw.contact_local_p1(A))}localContactPoint2(A){return gA.fromRaw(this.raw.contact_local_p2(A))}contactDist(A){return this.raw.contact_dist(A)}contactFid1(A){return this.raw.contact_fid1(A)}contactFid2(A){return this.raw.contact_fid2(A)}contactImpulse(A){return this.raw.contact_impulse(A)}contactTangentImpulseX(A){return this.raw.contact_tangent_impulse_x(A)}contactTangentImpulseY(A){return this.raw.contact_tangent_impulse_y(A)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(A){return gA.fromRaw(this.raw.solver_contact_point(A))}solverContactDist(A){return this.raw.solver_contact_dist(A)}solverContactFriction(A){return this.raw.solver_contact_friction(A)}solverContactRestitution(A){return this.raw.solver_contact_restitution(A)}solverContactTangentVelocity(A){return gA.fromRaw(this.raw.solver_contact_tangent_velocity(A))}}class EE{constructor(A,I,g,B,i){this.distance=A,this.point1=I,this.point2=g,this.normal1=B,this.normal2=i}static fromRaw(A){if(!A)return null;const I=new EE(A.distance(),gA.fromRaw(A.point1()),gA.fromRaw(A.point2()),gA.fromRaw(A.normal1()),gA.fromRaw(A.normal2()));return A.free(),I}}(function(E){E[E.Vertex=0]="Vertex",E[E.Edge=1]="Edge",E[E.Face=2]="Face",E[E.Unknown=3]="Unknown"})(QE||(QE={}));class Bi{constructor(A,I){this.point=A,this.isInside=I}static fromRaw(A){if(!A)return null;const I=new Bi(gA.fromRaw(A.point()),A.isInside());return A.free(),I}}class Ii{constructor(A,I,g,B,i){this.featureType=QE.Unknown,this.featureId=void 0,this.collider=A,this.point=I,this.isInside=g,i!==void 0&&(this.featureId=i),B!==void 0&&(this.featureType=B)}static fromRaw(A,I){if(!I)return null;const g=new Ii(A.get(I.colliderHandle()),gA.fromRaw(I.point()),I.isInside(),I.featureType(),I.featureId());return I.free(),g}}class YM{constructor(A,I){this.origin=A,this.dir=I}pointAt(A){return{x:this.origin.x+this.dir.x*A,y:this.origin.y+this.dir.y*A,z:this.origin.z+this.dir.z*A}}}class Qi{constructor(A,I,g,B){this.featureType=QE.Unknown,this.featureId=void 0,this.toi=A,this.normal=I,B!==void 0&&(this.featureId=B),g!==void 0&&(this.featureType=g)}static fromRaw(A){if(!A)return null;const I=new Qi(A.toi(),gA.fromRaw(A.normal()),A.featureType(),A.featureId());return A.free(),I}}class gi{constructor(A,I,g,B,i){this.featureType=QE.Unknown,this.featureId=void 0,this.collider=A,this.toi=I,this.normal=g,i!==void 0&&(this.featureId=i),B!==void 0&&(this.featureType=B)}static fromRaw(A,I){if(!I)return null;const g=new gi(A.get(I.colliderHandle()),I.toi(),gA.fromRaw(I.normal()),I.featureType(),I.featureId());return I.free(),g}}class Et{constructor(A,I){this.collider=A,this.toi=I}static fromRaw(A,I){if(!I)return null;const g=new Et(A.get(I.colliderHandle()),I.toi());return I.free(),g}}class sE{constructor(A,I,g,B,i){this.toi=A,this.witness1=I,this.witness2=g,this.normal1=B,this.normal2=i}static fromRaw(A,I){if(!I)return null;const g=new sE(I.toi(),gA.fromRaw(I.witness1()),gA.fromRaw(I.witness2()),gA.fromRaw(I.normal1()),gA.fromRaw(I.normal2()));return I.free(),g}}class Ei extends sE{constructor(A,I,g,B,i,o){super(I,g,B,i,o),this.collider=A}static fromRaw(A,I){if(!I)return null;const g=new Ei(A.get(I.colliderHandle()),I.toi(),gA.fromRaw(I.witness1()),gA.fromRaw(I.witness2()),gA.fromRaw(I.normal1()),gA.fromRaw(I.normal2()));return I.free(),g}}class tg{static fromRaw(A,I){const g=A.coShapeType(I);let B,i,o,t,D,a,s;switch(g){case tI.Ball:return new za(A.coRadius(I));case tI.Cuboid:return B=A.coHalfExtents(I),new AD(B.x,B.y,B.z);case tI.RoundCuboid:return B=A.coHalfExtents(I),i=A.coRoundRadius(I),new ID(B.x,B.y,B.z,i);case tI.Capsule:return D=A.coHalfHeight(I),a=A.coRadius(I),new gD(D,a);case tI.Segment:return o=A.coVertices(I),new CD(gA.new(o[0],o[1],o[2]),gA.new(o[3],o[4],o[5]));case tI.Polyline:return o=A.coVertices(I),t=A.coIndices(I),new ED(o,t);case tI.Triangle:return o=A.coVertices(I),new BD(gA.new(o[0],o[1],o[2]),gA.new(o[3],o[4],o[5]),gA.new(o[6],o[7],o[8]));case tI.RoundTriangle:return o=A.coVertices(I),i=A.coRoundRadius(I),new QD(gA.new(o[0],o[1],o[2]),gA.new(o[3],o[4],o[5]),gA.new(o[6],o[7],o[8]),i);case tI.HalfSpace:return s=gA.fromRaw(A.coHalfspaceNormal(I)),new $a(s);case tI.TriMesh:return o=A.coVertices(I),t=A.coIndices(I),new iD(o,t);case tI.HeightField:const n=A.coHeightfieldScale(I),h=A.coHeightfieldHeights(I),k=A.coHeightfieldNRows(I),w=A.coHeightfieldNCols(I);return new oD(k,w,h,n);case tI.ConvexPolyhedron:return o=A.coVertices(I),t=A.coIndices(I),new jo(o,t);case tI.RoundConvexPolyhedron:return o=A.coVertices(I),t=A.coIndices(I),i=A.coRoundRadius(I),new Vo(o,t,i);case tI.Cylinder:return D=A.coHalfHeight(I),a=A.coRadius(I),new tD(D,a);case tI.RoundCylinder:return D=A.coHalfHeight(I),a=A.coRadius(I),i=A.coRoundRadius(I),new eD(D,a,i);case tI.Cone:return D=A.coHalfHeight(I),a=A.coRadius(I),new aD(D,a);case tI.RoundCone:return D=A.coHalfHeight(I),a=A.coRadius(I),i=A.coRoundRadius(I),new DD(D,a,i);default:throw new Error("unknown shape type: "+g)}}castShape(A,I,g,B,i,o,t,D){let a=gA.intoRaw(A),s=EI.intoRaw(I),n=gA.intoRaw(g),h=gA.intoRaw(i),k=EI.intoRaw(o),w=gA.intoRaw(t),r=this.intoRaw(),G=B.intoRaw(),l=sE.fromRaw(null,r.castShape(a,s,n,G,h,k,w,D));return a.free(),s.free(),n.free(),h.free(),k.free(),w.free(),r.free(),G.free(),l}intersectsShape(A,I,g,B,i){let o=gA.intoRaw(A),t=EI.intoRaw(I),D=gA.intoRaw(B),a=EI.intoRaw(i),s=this.intoRaw(),n=g.intoRaw(),h=s.intersectsShape(o,t,n,D,a);return o.free(),t.free(),D.free(),a.free(),s.free(),n.free(),h}contactShape(A,I,g,B,i,o){let t=gA.intoRaw(A),D=EI.intoRaw(I),a=gA.intoRaw(B),s=EI.intoRaw(i),n=this.intoRaw(),h=g.intoRaw(),k=EE.fromRaw(n.contactShape(t,D,h,a,s,o));return t.free(),D.free(),a.free(),s.free(),n.free(),h.free(),k}containsPoint(A,I,g){let B=gA.intoRaw(A),i=EI.intoRaw(I),o=gA.intoRaw(g),t=this.intoRaw(),D=t.containsPoint(B,i,o);return B.free(),i.free(),o.free(),t.free(),D}projectPoint(A,I,g,B){let i=gA.intoRaw(A),o=EI.intoRaw(I),t=gA.intoRaw(g),D=this.intoRaw(),a=Bi.fromRaw(D.projectPoint(i,o,t,B));return i.free(),o.free(),t.free(),D.free(),a}intersectsRay(A,I,g,B){let i=gA.intoRaw(I),o=EI.intoRaw(g),t=gA.intoRaw(A.origin),D=gA.intoRaw(A.dir),a=this.intoRaw(),s=a.intersectsRay(i,o,t,D,B);return i.free(),o.free(),t.free(),D.free(),a.free(),s}castRay(A,I,g,B,i){let o=gA.intoRaw(I),t=EI.intoRaw(g),D=gA.intoRaw(A.origin),a=gA.intoRaw(A.dir),s=this.intoRaw(),n=s.castRay(o,t,D,a,B,i);return o.free(),t.free(),D.free(),a.free(),s.free(),n}castRayAndGetNormal(A,I,g,B,i){let o=gA.intoRaw(I),t=EI.intoRaw(g),D=gA.intoRaw(A.origin),a=gA.intoRaw(A.dir),s=this.intoRaw(),n=Qi.fromRaw(s.castRayAndGetNormal(o,t,D,a,B,i));return o.free(),t.free(),D.free(),a.free(),s.free(),n}}(function(E){E[E.Ball=0]="Ball",E[E.Cuboid=1]="Cuboid",E[E.Capsule=2]="Capsule",E[E.Segment=3]="Segment",E[E.Polyline=4]="Polyline",E[E.Triangle=5]="Triangle",E[E.TriMesh=6]="TriMesh",E[E.HeightField=7]="HeightField",E[E.ConvexPolyhedron=9]="ConvexPolyhedron",E[E.Cylinder=10]="Cylinder",E[E.Cone=11]="Cone",E[E.RoundCuboid=12]="RoundCuboid",E[E.RoundTriangle=13]="RoundTriangle",E[E.RoundCylinder=14]="RoundCylinder",E[E.RoundCone=15]="RoundCone",E[E.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",E[E.HalfSpace=17]="HalfSpace"})(tI||(tI={}));class za extends tg{constructor(A){super(),this.type=tI.Ball,this.radius=A}intoRaw(){return bA.ball(this.radius)}}class $a extends tg{constructor(A){super(),this.type=tI.HalfSpace,this.normal=A}intoRaw(){let A=gA.intoRaw(this.normal),I=bA.halfspace(A);return A.free(),I}}class AD extends tg{constructor(A,I,g){super(),this.type=tI.Cuboid,this.halfExtents=gA.new(A,I,g)}intoRaw(){return bA.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class ID extends tg{constructor(A,I,g,B){super(),this.type=tI.RoundCuboid,this.halfExtents=gA.new(A,I,g),this.borderRadius=B}intoRaw(){return bA.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class gD extends tg{constructor(A,I){super(),this.type=tI.Capsule,this.halfHeight=A,this.radius=I}intoRaw(){return bA.capsule(this.halfHeight,this.radius)}}class CD extends tg{constructor(A,I){super(),this.type=tI.Segment,this.a=A,this.b=I}intoRaw(){let A=gA.intoRaw(this.a),I=gA.intoRaw(this.b),g=bA.segment(A,I);return A.free(),I.free(),g}}class BD extends tg{constructor(A,I,g){super(),this.type=tI.Triangle,this.a=A,this.b=I,this.c=g}intoRaw(){let A=gA.intoRaw(this.a),I=gA.intoRaw(this.b),g=gA.intoRaw(this.c),B=bA.triangle(A,I,g);return A.free(),I.free(),g.free(),B}}class QD extends tg{constructor(A,I,g,B){super(),this.type=tI.RoundTriangle,this.a=A,this.b=I,this.c=g,this.borderRadius=B}intoRaw(){let A=gA.intoRaw(this.a),I=gA.intoRaw(this.b),g=gA.intoRaw(this.c),B=bA.roundTriangle(A,I,g,this.borderRadius);return A.free(),I.free(),g.free(),B}}class ED extends tg{constructor(A,I){super(),this.type=tI.Polyline,this.vertices=A,this.indices=I!=null?I:new Uint32Array(0)}intoRaw(){return bA.polyline(this.vertices,this.indices)}}class iD extends tg{constructor(A,I){super(),this.type=tI.TriMesh,this.vertices=A,this.indices=I}intoRaw(){return bA.trimesh(this.vertices,this.indices)}}class jo extends tg{constructor(A,I){super(),this.type=tI.ConvexPolyhedron,this.vertices=A,this.indices=I}intoRaw(){return this.indices?bA.convexMesh(this.vertices,this.indices):bA.convexHull(this.vertices)}}class Vo extends tg{constructor(A,I,g){super(),this.type=tI.RoundConvexPolyhedron,this.vertices=A,this.indices=I,this.borderRadius=g}intoRaw(){return this.indices?bA.roundConvexMesh(this.vertices,this.indices,this.borderRadius):bA.roundConvexHull(this.vertices,this.borderRadius)}}class oD extends tg{constructor(A,I,g,B){super(),this.type=tI.HeightField,this.nrows=A,this.ncols=I,this.heights=g,this.scale=B}intoRaw(){let A=gA.intoRaw(this.scale),I=bA.heightfield(this.nrows,this.ncols,this.heights,A);return A.free(),I}}class tD extends tg{constructor(A,I){super(),this.type=tI.Cylinder,this.halfHeight=A,this.radius=I}intoRaw(){return bA.cylinder(this.halfHeight,this.radius)}}class eD extends tg{constructor(A,I,g){super(),this.type=tI.RoundCylinder,this.borderRadius=g,this.halfHeight=A,this.radius=I}intoRaw(){return bA.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class aD extends tg{constructor(A,I){super(),this.type=tI.Cone,this.halfHeight=A,this.radius=I}intoRaw(){return bA.cone(this.halfHeight,this.radius)}}class DD extends tg{constructor(A,I,g){super(),this.type=tI.RoundCone,this.halfHeight=A,this.radius=I,this.borderRadius=g}intoRaw(){return bA.roundCone(this.halfHeight,this.radius,this.borderRadius)}}(function(E){E[E.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",E[E.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",E[E.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",E[E.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",E[E.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",E[E.FIXED_FIXED=32]="FIXED_FIXED",E[E.DEFAULT=15]="DEFAULT",E[E.ALL=60943]="ALL"})(_o||(_o={}));class Ma{constructor(A,I,g,B){this.colliderSet=A,this.handle=I,this._parent=g,this._shape=B}finalizeDeserialization(A){this.handle!=null&&(this._parent=A.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=tg.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return gA.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return EI.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(A){this.colliderSet.raw.coSetSensor(this.handle,A)}setShape(A){let I=A.intoRaw();this.colliderSet.raw.coSetShape(this.handle,I),I.free(),this._shape=A}setRestitution(A){this.colliderSet.raw.coSetRestitution(this.handle,A)}setFriction(A){this.colliderSet.raw.coSetFriction(this.handle,A)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(A){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,A)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(A){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,A)}setCollisionGroups(A){this.colliderSet.raw.coSetCollisionGroups(this.handle,A)}setSolverGroups(A){this.colliderSet.raw.coSetSolverGroups(this.handle,A)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(A){this.colliderSet.raw.coSetActiveHooks(this.handle,A)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(A){this.colliderSet.raw.coSetActiveEvents(this.handle,A)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(A){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,A)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(A){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,A)}setDensity(A){this.colliderSet.raw.coSetDensity(this.handle,A)}setMass(A){this.colliderSet.raw.coSetMass(this.handle,A)}setMassProperties(A,I,g,B){let i=gA.intoRaw(I),o=gA.intoRaw(g),t=EI.intoRaw(B);this.colliderSet.raw.coSetMassProperties(this.handle,A,i,o,t),i.free(),o.free(),t.free()}setTranslation(A){this.colliderSet.raw.coSetTranslation(this.handle,A.x,A.y,A.z)}setTranslationWrtParent(A){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,A.x,A.y,A.z)}setRotation(A){this.colliderSet.raw.coSetRotation(this.handle,A.x,A.y,A.z,A.w)}setRotationWrtParent(A){this.colliderSet.raw.coSetRotationWrtParent(this.handle,A.x,A.y,A.z,A.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return gA.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}radius(){return this.colliderSet.raw.coRadius(this.handle)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let A=this.colliderSet.raw.coHeightfieldScale(this.handle);return gA.fromRaw(A)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(A){let I=gA.intoRaw(A),g=this.colliderSet.raw.coContainsPoint(this.handle,I);return I.free(),g}projectPoint(A,I){let g=gA.intoRaw(A),B=Bi.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,g,I));return g.free(),B}intersectsRay(A,I){let g=gA.intoRaw(A.origin),B=gA.intoRaw(A.dir),i=this.colliderSet.raw.coIntersectsRay(this.handle,g,B,I);return g.free(),B.free(),i}castShape(A,I,g,B,i,o){let t=gA.intoRaw(A),D=gA.intoRaw(g),a=EI.intoRaw(B),s=gA.intoRaw(i),n=I.intoRaw(),h=sE.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,t,n,D,a,s,o));return t.free(),D.free(),a.free(),s.free(),n.free(),h}castCollider(A,I,g,B){let i=gA.intoRaw(A),o=gA.intoRaw(g),t=Ei.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,i,I.handle,o,B));return i.free(),o.free(),t}intersectsShape(A,I,g){let B=gA.intoRaw(I),i=EI.intoRaw(g),o=A.intoRaw(),t=this.colliderSet.raw.coIntersectsShape(this.handle,o,B,i);return B.free(),i.free(),o.free(),t}contactShape(A,I,g,B){let i=gA.intoRaw(I),o=EI.intoRaw(g),t=A.intoRaw(),D=EE.fromRaw(this.colliderSet.raw.coContactShape(this.handle,t,i,o,B));return i.free(),o.free(),t.free(),D}contactCollider(A,I){return EE.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,A.handle,I))}castRay(A,I,g){let B=gA.intoRaw(A.origin),i=gA.intoRaw(A.dir),o=this.colliderSet.raw.coCastRay(this.handle,B,i,I,g);return B.free(),i.free(),o}castRayAndGetNormal(A,I,g){let B=gA.intoRaw(A.origin),i=gA.intoRaw(A.dir),o=Qi.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,B,i,I,g));return B.free(),i.free(),o}}(function(E){E[E.Density=0]="Density",E[E.Mass=1]="Mass",E[E.MassProps=2]="MassProps"})(AQ||(AQ={}));class ZI{constructor(A){this.shape=A,this.massPropsMode=AQ.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=EI.identity(),this.translation=gA.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=Ai.Average,this.restitutionCombineRule=Ai.Average,this.activeCollisionTypes=_o.DEFAULT,this.activeEvents=0,this.activeHooks=0,this.mass=0,this.centerOfMass=gA.zeros(),this.contactForceEventThreshold=0,this.principalAngularInertia=gA.zeros(),this.angularInertiaLocalFrame=EI.identity()}static ball(A){const I=new za(A);return new ZI(I)}static capsule(A,I){const g=new gD(A,I);return new ZI(g)}static segment(A,I){const g=new CD(A,I);return new ZI(g)}static triangle(A,I,g){const B=new BD(A,I,g);return new ZI(B)}static roundTriangle(A,I,g,B){const i=new QD(A,I,g,B);return new ZI(i)}static polyline(A,I){const g=new ED(A,I);return new ZI(g)}static trimesh(A,I){const g=new iD(A,I);return new ZI(g)}static cuboid(A,I,g){const B=new AD(A,I,g);return new ZI(B)}static roundCuboid(A,I,g,B){const i=new ID(A,I,g,B);return new ZI(i)}static heightfield(A,I,g,B){const i=new oD(A,I,g,B);return new ZI(i)}static cylinder(A,I){const g=new tD(A,I);return new ZI(g)}static roundCylinder(A,I,g){const B=new eD(A,I,g);return new ZI(B)}static cone(A,I){const g=new aD(A,I);return new ZI(g)}static roundCone(A,I,g){const B=new DD(A,I,g);return new ZI(B)}static convexHull(A){const I=new jo(A,null);return new ZI(I)}static convexMesh(A,I){const g=new jo(A,I);return new ZI(g)}static roundConvexHull(A,I){const g=new Vo(A,null,I);return new ZI(g)}static roundConvexMesh(A,I,g){const B=new Vo(A,I,g);return new ZI(B)}setTranslation(A,I,g){if(typeof A!="number"||typeof I!="number"||typeof g!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:A,y:I,z:g},this}setRotation(A){return EI.copy(this.rotation,A),this}setSensor(A){return this.isSensor=A,this}setDensity(A){return this.massPropsMode=AQ.Density,this.density=A,this}setMass(A){return this.massPropsMode=AQ.Mass,this.mass=A,this}setMassProperties(A,I,g,B){return this.massPropsMode=AQ.MassProps,this.mass=A,gA.copy(this.centerOfMass,I),gA.copy(this.principalAngularInertia,g),EI.copy(this.angularInertiaLocalFrame,B),this}setRestitution(A){return this.restitution=A,this}setFriction(A){return this.friction=A,this}setFrictionCombineRule(A){return this.frictionCombineRule=A,this}setRestitutionCombineRule(A){return this.restitutionCombineRule=A,this}setCollisionGroups(A){return this.collisionGroups=A,this}setSolverGroups(A){return this.solverGroups=A,this}setActiveHooks(A){return this.activeHooks=A,this}setActiveEvents(A){return this.activeEvents=A,this}setActiveCollisionTypes(A){return this.activeCollisionTypes=A,this}setContactForceEventThreshold(A){return this.contactForceEventThreshold=A,this}}class aG{constructor(A){this.raw=A||new XI,this.map=new Qt,A&&A.forEachColliderHandle(I=>{this.map.set(I,new Ma(this,I,null))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}finalizeDeserialization(A){this.map.forEach(I=>I.finalizeDeserialization(A))}createCollider(A,I,g){let B=g!=null&&g!=null;if(B&&isNaN(g))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let i=I.shape.intoRaw(),o=gA.intoRaw(I.translation),t=EI.intoRaw(I.rotation),D=gA.intoRaw(I.centerOfMass),a=gA.intoRaw(I.principalAngularInertia),s=EI.intoRaw(I.angularInertiaLocalFrame),n=this.raw.createCollider(i,o,t,I.massPropsMode,I.mass,D,a,s,I.density,I.friction,I.restitution,I.frictionCombineRule,I.restitutionCombineRule,I.isSensor,I.collisionGroups,I.solverGroups,I.activeCollisionTypes,I.activeHooks,I.activeEvents,I.contactForceEventThreshold,B,B?g:0,A.raw);i.free(),o.free(),t.free(),D.free(),a.free(),s.free();let h=B?A.get(g):null,k=new Ma(this,n,h,I.shape);return this.map.set(n,k),k}remove(A,I,g,B){this.raw.remove(A,I.raw,g.raw,B),this.unmap(A)}unmap(A){this.map.delete(A)}get(A){return this.map.get(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}forEach(A){this.map.forEach(A)}getAll(){return this.map.getAll()}}class DG{constructor(A){this.raw=A||new Zo}free(){this.raw.free(),this.raw=void 0}step(A,I,g,B,i,o,t,D,a,s,n,h){let k=gA.intoRaw(A);n?this.raw.stepWithEvents(k,I.raw,g.raw,B.raw,i.raw,o.raw,t.raw,D.raw,a.raw,s.raw,n.raw,h,h?h.filterContactPair:null,h?h.filterIntersectionPair:null):this.raw.step(k,I.raw,g.raw,B.raw,i.raw,o.raw,t.raw,D.raw,a.raw,s.raw),k.free()}}(function(E){E[E.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",E[E.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",E[E.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",E[E.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",E[E.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",E[E.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",E[E.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",E[E.ONLY_FIXED=6]="ONLY_FIXED"})(ca||(ca={}));class sG{constructor(A){this.raw=A||new Wo}free(){this.raw.free(),this.raw=void 0}update(A,I,g){this.raw.update(A.raw,I.raw,g.raw)}castRay(A,I,g,B,i,o,t,D,a,s){let n=gA.intoRaw(g.origin),h=gA.intoRaw(g.dir),k=Et.fromRaw(I,this.raw.castRay(A.raw,I.raw,n,h,B,i,o,t,D,a,s));return n.free(),h.free(),k}castRayAndGetNormal(A,I,g,B,i,o,t,D,a,s){let n=gA.intoRaw(g.origin),h=gA.intoRaw(g.dir),k=gi.fromRaw(I,this.raw.castRayAndGetNormal(A.raw,I.raw,n,h,B,i,o,t,D,a,s));return n.free(),h.free(),k}intersectionsWithRay(A,I,g,B,i,o,t,D,a,s,n){let h=gA.intoRaw(g.origin),k=gA.intoRaw(g.dir);this.raw.intersectionsWithRay(A.raw,I.raw,h,k,B,i,w=>o(gi.fromRaw(I,w)),t,D,a,s,n),h.free(),k.free()}intersectionWithShape(A,I,g,B,i,o,t,D,a,s){let n=gA.intoRaw(g),h=EI.intoRaw(B),k=i.intoRaw(),w=this.raw.intersectionWithShape(A.raw,I.raw,n,h,k,o,t,D,a,s);return n.free(),h.free(),k.free(),w}projectPoint(A,I,g,B,i,o,t,D,a){let s=gA.intoRaw(g),n=Ii.fromRaw(I,this.raw.projectPoint(A.raw,I.raw,s,B,i,o,t,D,a));return s.free(),n}projectPointAndGetFeature(A,I,g,B,i,o,t,D){let a=gA.intoRaw(g),s=Ii.fromRaw(I,this.raw.projectPointAndGetFeature(A.raw,I.raw,a,B,i,o,t,D));return a.free(),s}intersectionsWithPoint(A,I,g,B,i,o,t,D,a){let s=gA.intoRaw(g);this.raw.intersectionsWithPoint(A.raw,I.raw,s,B,i,o,t,D,a),s.free()}castShape(A,I,g,B,i,o,t,D,a,s,n,h){let k=gA.intoRaw(g),w=EI.intoRaw(B),r=gA.intoRaw(i),G=o.intoRaw(),l=Ei.fromRaw(I,this.raw.castShape(A.raw,I.raw,k,w,r,G,t,D,a,s,n,h));return k.free(),w.free(),r.free(),G.free(),l}intersectionsWithShape(A,I,g,B,i,o,t,D,a,s,n){let h=gA.intoRaw(g),k=EI.intoRaw(B),w=i.intoRaw();this.raw.intersectionsWithShape(A.raw,I.raw,h,k,w,o,t,D,a,s,n),h.free(),k.free(),w.free()}collidersWithAabbIntersectingAabb(A,I,g){let B=gA.intoRaw(A),i=gA.intoRaw(I);this.raw.collidersWithAabbIntersectingAabb(B,i,g),B.free(),i.free()}}class Ka{constructor(A){this.raw=A||new Po}free(){this.raw.free(),this.raw=void 0}serializeAll(A,I,g,B,i,o,t,D,a){let s=gA.intoRaw(A);const n=this.raw.serializeAll(s,I.raw,g.raw,B.raw,i.raw,o.raw,t.raw,D.raw,a.raw);return s.free(),n}deserializeAll(A){return ii.fromRaw(this.raw.deserializeAll(A))}}class nG{constructor(A,I){this.vertices=A,this.colors=I}}class hG{constructor(A){this.raw=A||new bo}free(){this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(A,I,g,B,i){this.raw.render(A.raw,I.raw,g.raw,B.raw,i.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class ii{constructor(A,I,g,B,i,o,t,D,a,s,n,h,k,w){this.gravity=A,this.integrationParameters=new jS(I),this.islands=new iG(g),this.broadPhase=new oG(B),this.narrowPhase=new tG(i),this.bodies=new _S(o),this.colliders=new aG(t),this.impulseJoints=new AG(D),this.multibodyJoints=new QG(a),this.ccdSolver=new EG(s),this.queryPipeline=new sG(n),this.physicsPipeline=new DG(h),this.serializationPipeline=new Ka(k),this.debugRenderPipeline=new hG(w),this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0}static fromRaw(A){return A?new ii(gA.fromRaw(A.takeGravity()),A.takeIntegrationParameters(),A.takeIslandManager(),A.takeBroadPhase(),A.takeNarrowPhase(),A.takeBodies(),A.takeColliders(),A.takeImpulseJoints(),A.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(A){return new Ka().deserializeAll(A)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new nG(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(A,I){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,A,I),this.queryPipeline.update(this.islands,this.bodies,this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(A){this.integrationParameters.dt=A}get maxVelocityIterations(){return this.integrationParameters.maxVelocityIterations}set maxVelocityIterations(A){this.integrationParameters.maxVelocityIterations=A}get maxVelocityFrictionIterations(){return this.integrationParameters.maxVelocityFrictionIterations}set maxVelocityFrictionIterations(A){this.integrationParameters.maxVelocityFrictionIterations=A}get maxStabilizationIterations(){return this.integrationParameters.maxStabilizationIterations}set maxStabilizationIterations(A){this.integrationParameters.maxStabilizationIterations=A}createRigidBody(A){return this.bodies.createRigidBody(this.colliders,A)}createCollider(A,I){let g=I?I.handle:void 0;return this.colliders.createCollider(this.bodies,A,g)}createImpulseJoint(A,I,g,B){return this.impulseJoints.createJoint(this.bodies,A,I.handle,g.handle,B)}createMultibodyJoint(A,I,g,B){return this.multibodyJoints.createJoint(A,I.handle,g.handle,B)}getRigidBody(A){return this.bodies.get(A)}getCollider(A){return this.colliders.get(A)}getImpulseJoint(A){return this.impulseJoints.get(A)}getMultibodyJoint(A){return this.multibodyJoints.get(A)}removeRigidBody(A){this.bodies&&this.bodies.remove(A.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(A,I){this.colliders&&this.colliders.remove(A.handle,this.islands,this.bodies,I)}removeImpulseJoint(A,I){this.impulseJoints&&this.impulseJoints.remove(A.handle,I)}removeMultibodyJoint(A,I){this.impulseJoints&&this.multibodyJoints.remove(A.handle,I)}forEachCollider(A){this.colliders.forEach(A)}forEachRigidBody(A){this.bodies.forEach(A)}forEachActiveRigidBody(A){this.bodies.forEachActiveRigidBody(this.islands,A)}castRay(A,I,g,B,i,o,t,D){return this.queryPipeline.castRay(this.bodies,this.colliders,A,I,g,B,i,o?o.handle:null,t?t.handle:null,dg(this.colliders,D))}castRayAndGetNormal(A,I,g,B,i,o,t,D){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,A,I,g,B,i,o?o.handle:null,t?t.handle:null,dg(this.colliders,D))}intersectionsWithRay(A,I,g,B,i,o,t,D,a){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,A,I,g,B,i,o,t?t.handle:null,D?D.handle:null,dg(this.colliders,a))}intersectionWithShape(A,I,g,B,i,o,t,D){let a=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,A,I,g,B,i,o?o.handle:null,t?t.handle:null,dg(this.colliders,D));return a!=null?this.colliders.get(a):null}projectPoint(A,I,g,B,i,o,t){return this.queryPipeline.projectPoint(this.bodies,this.colliders,A,I,g,B,i?i.handle:null,o?o.handle:null,dg(this.colliders,t))}projectPointAndGetFeature(A,I,g,B,i,o){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,A,I,g,B?B.handle:null,i?i.handle:null,dg(this.colliders,o))}intersectionsWithPoint(A,I,g,B,i,o,t){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,A,dg(this.colliders,I),g,B,i?i.handle:null,o?o.handle:null,dg(this.colliders,t))}castShape(A,I,g,B,i,o,t,D,a,s){return this.queryPipeline.castShape(this.bodies,this.colliders,A,I,g,B,i,o,t,D?D.handle:null,a?a.handle:null,dg(this.colliders,s))}intersectionsWithShape(A,I,g,B,i,o,t,D,a){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,A,I,g,dg(this.colliders,B),i,o,t?t.handle:null,D?D.handle:null,dg(this.colliders,a))}collidersWithAabbIntersectingAabb(A,I,g){this.queryPipeline.collidersWithAabbIntersectingAabb(A,I,dg(this.colliders,g))}contactsWith(A,I){this.narrowPhase.contactsWith(A.handle,dg(this.colliders,I))}intersectionsWith(A,I){this.narrowPhase.intersectionsWith(A.handle,dg(this.colliders,I))}contactPair(A,I,g){this.narrowPhase.contactPair(A.handle,I.handle,g)}intersectionPair(A,I){return this.narrowPhase.intersectionPair(A.handle,I.handle)}}function dg(E,A){return I=>A?A(E.get(I)):void 0}(function(E){E[E.COLLISION_EVENTS=1]="COLLISION_EVENTS",E[E.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(ka||(ka={}));class SG{free(){this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return gA.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return gA.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class uM{constructor(A,I){this.raw=I||new zE(A)}free(){this.raw.free(),this.raw=void 0}drainCollisionEvents(A){this.raw.drainCollisionEvents(A)}drainContactForceEvents(A){let I=new SG;this.raw.drainContactForceEvents(g=>{I.raw=g,A(I),I.free()})}clear(){this.raw.clear()}}/*! *****************************************************************************
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
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sD="145",ZM=0,_n=1,vM=2,rG=1,WM=2,TE=3,iE=0,sC=1,iB=2,oB=0,zQ=1,jn=2,Vn=3,Xn=4,PM=5,WQ=100,_M=101,jM=102,zn=103,$n=104,VM=200,XM=201,zM=202,$M=203,wG=204,cG=205,A0=206,I0=207,g0=208,C0=209,B0=210,Q0=0,E0=1,i0=2,Na=3,o0=4,t0=5,e0=6,a0=7,nD=0,D0=1,s0=2,tB=0,n0=1,h0=2,S0=3,G0=4,r0=5,kG=300,oE=301,tE=302,Ja=303,Ra=304,it=306,Fa=1e3,MC=1001,qa=1002,fg=1003,Ah=1004,Ih=1005,tC=1006,w0=1007,ot=1008,iQ=1009,c0=1010,k0=1011,lG=1012,l0=1013,IQ=1014,gQ=1015,Ci=1016,y0=1017,U0=1018,$Q=1020,M0=1021,K0=1022,HC=1023,N0=1024,J0=1025,QQ=1026,eE=1027,R0=1028,F0=1029,q0=1030,p0=1031,d0=1033,Fe=33776,qe=33777,pe=33778,de=33779,gh=35840,Ch=35841,Bh=35842,Qh=35843,L0=36196,Eh=37492,ih=37496,oh=37808,th=37809,eh=37810,ah=37811,Dh=37812,sh=37813,nh=37814,hh=37815,Sh=37816,Gh=37817,rh=37818,wh=37819,ch=37820,kh=37821,lh=36492,oQ=3e3,vI=3001,f0=3200,Y0=3201,yG=0,u0=1,QB="srgb",CQ="srgb-linear",Le=7680,H0=519,yh=35044,Uh="300 es",pa=1035;class nE{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const B=this._listeners[A];if(B!==void 0){const i=B.indexOf(I);i!==-1&&B.splice(i,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const B=g.slice(0);for(let i=0,o=B.length;i<o;i++)B[i].call(this,A);A.target=null}}}const cg=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fe=Math.PI/180,Mh=180/Math.PI;function oi(){const E=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(cg[E&255]+cg[E>>8&255]+cg[E>>16&255]+cg[E>>24&255]+"-"+cg[A&255]+cg[A>>8&255]+"-"+cg[A>>16&15|64]+cg[A>>24&255]+"-"+cg[I&63|128]+cg[I>>8&255]+"-"+cg[I>>16&255]+cg[I>>24&255]+cg[g&255]+cg[g>>8&255]+cg[g>>16&255]+cg[g>>24&255]).toLowerCase()}function jg(E,A,I){return Math.max(A,Math.min(I,E))}function m0(E,A){return(E%A+A)%A}function Ye(E,A,I){return(1-I)*E+I*A}function Kh(E){return(E&E-1)===0&&E!==0}function da(E){return Math.pow(2,Math.floor(Math.log(E)/Math.LN2))}function Io(E,A){switch(A.constructor){case Float32Array:return E;case Uint16Array:return E/65535;case Uint8Array:return E/255;case Int16Array:return Math.max(E/32767,-1);case Int8Array:return Math.max(E/127,-1);default:throw new Error("Invalid component type.")}}function Zg(E,A){switch(A.constructor){case Float32Array:return E;case Uint16Array:return Math.round(E*65535);case Uint8Array:return Math.round(E*255);case Int16Array:return Math.round(E*32767);case Int8Array:return Math.round(E*127);default:throw new Error("Invalid component type.")}}class JI{constructor(A=0,I=0){JI.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6],this.y=B[1]*I+B[4]*g+B[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),B=Math.sin(I),i=this.x-A.x,o=this.y-A.y;return this.x=i*g-o*B+A.x,this.y=i*B+o*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class DC{constructor(){DC.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,B,i,o,t,D,a){const s=this.elements;return s[0]=A,s[1]=B,s[2]=t,s[3]=I,s[4]=i,s[5]=D,s[6]=g,s[7]=o,s[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,i=this.elements,o=g[0],t=g[3],D=g[6],a=g[1],s=g[4],n=g[7],h=g[2],k=g[5],w=g[8],r=B[0],G=B[3],l=B[6],J=B[1],d=B[4],p=B[7],y=B[2],f=B[5],Z=B[8];return i[0]=o*r+t*J+D*y,i[3]=o*G+t*d+D*f,i[6]=o*l+t*p+D*Z,i[1]=a*r+s*J+n*y,i[4]=a*G+s*d+n*f,i[7]=a*l+s*p+n*Z,i[2]=h*r+k*J+w*y,i[5]=h*G+k*d+w*f,i[8]=h*l+k*p+w*Z,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],B=A[2],i=A[3],o=A[4],t=A[5],D=A[6],a=A[7],s=A[8];return I*o*s-I*t*a-g*i*s+g*t*D+B*i*a-B*o*D}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],i=A[3],o=A[4],t=A[5],D=A[6],a=A[7],s=A[8],n=s*o-t*a,h=t*D-s*i,k=a*i-o*D,w=I*n+g*h+B*k;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const r=1/w;return A[0]=n*r,A[1]=(B*a-s*g)*r,A[2]=(t*g-B*o)*r,A[3]=h*r,A[4]=(s*I-B*D)*r,A[5]=(B*i-t*I)*r,A[6]=k*r,A[7]=(g*D-a*I)*r,A[8]=(o*I-g*i)*r,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,B,i,o,t){const D=Math.cos(i),a=Math.sin(i);return this.set(g*D,g*a,-g*(D*o+a*t)+o+A,-B*a,B*D,-B*(-a*o+D*t)+t+I,0,0,1),this}scale(A,I){const g=this.elements;return g[0]*=A,g[3]*=A,g[6]*=A,g[1]*=I,g[4]*=I,g[7]*=I,this}rotate(A){const I=Math.cos(A),g=Math.sin(A),B=this.elements,i=B[0],o=B[3],t=B[6],D=B[1],a=B[4],s=B[7];return B[0]=I*i+g*D,B[3]=I*o+g*a,B[6]=I*t+g*s,B[1]=-g*i+I*D,B[4]=-g*o+I*a,B[7]=-g*t+I*s,this}translate(A,I){const g=this.elements;return g[0]+=A*g[2],g[3]+=A*g[5],g[6]+=A*g[8],g[1]+=I*g[2],g[4]+=I*g[5],g[7]+=I*g[8],this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<9;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}function UG(E){for(let A=E.length-1;A>=0;--A)if(E[A]>=65535)return!0;return!1}function Xo(E){return document.createElementNS("http://www.w3.org/1999/xhtml",E)}function EQ(E){return E<.04045?E*.0773993808:Math.pow(E*.9478672986+.0521327014,2.4)}function Lo(E){return E<.0031308?E*12.92:1.055*Math.pow(E,.41666)-.055}const ue={[QB]:{[CQ]:EQ},[CQ]:{[QB]:Lo}},cC={legacyMode:!0,get workingColorSpace(){return CQ},set workingColorSpace(E){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(E,A,I){if(this.legacyMode||A===I||!A||!I)return E;if(ue[A]&&ue[A][I]!==void 0){const g=ue[A][I];return E.r=g(E.r),E.g=g(E.g),E.b=g(E.b),E}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(E,A){return this.convert(E,this.workingColorSpace,A)},toWorkingColorSpace:function(E,A){return this.convert(E,A,this.workingColorSpace)}},MG={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qg={r:0,g:0,b:0},kC={h:0,s:0,l:0},go={h:0,s:0,l:0};function He(E,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?E+(A-E)*6*I:I<1/2?A:I<2/3?E+(A-E)*6*(2/3-I):E}function Co(E,A){return A.r=E.r,A.g=E.g,A.b=E.b,A}class hI{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=QB){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,cC.toWorkingColorSpace(this,I),this}setRGB(A,I,g,B=CQ){return this.r=A,this.g=I,this.b=g,cC.toWorkingColorSpace(this,B),this}setHSL(A,I,g,B=CQ){if(A=m0(A,1),I=jg(I,0,1),g=jg(g,0,1),I===0)this.r=this.g=this.b=g;else{const i=g<=.5?g*(1+I):g+I-g*I,o=2*g-i;this.r=He(o,i,A+1/3),this.g=He(o,i,A),this.b=He(o,i,A-1/3)}return cC.toWorkingColorSpace(this,B),this}setStyle(A,I=QB){function g(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let B;if(B=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let i;const o=B[1],t=B[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(t))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,cC.toWorkingColorSpace(this,I),g(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(t))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,cC.toWorkingColorSpace(this,I),g(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(t)){const D=parseFloat(i[1])/360,a=parseFloat(i[2])/100,s=parseFloat(i[3])/100;return g(i[4]),this.setHSL(D,a,s,I)}break}}else if(B=/^\#([A-Fa-f\d]+)$/.exec(A)){const i=B[1],o=i.length;if(o===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,cC.toWorkingColorSpace(this,I),this;if(o===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,cC.toWorkingColorSpace(this,I),this}return A&&A.length>0?this.setColorName(A,I):this}setColorName(A,I=QB){const g=MG[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=EQ(A.r),this.g=EQ(A.g),this.b=EQ(A.b),this}copyLinearToSRGB(A){return this.r=Lo(A.r),this.g=Lo(A.g),this.b=Lo(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=QB){return cC.fromWorkingColorSpace(Co(this,Qg),A),jg(Qg.r*255,0,255)<<16^jg(Qg.g*255,0,255)<<8^jg(Qg.b*255,0,255)<<0}getHexString(A=QB){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=CQ){cC.fromWorkingColorSpace(Co(this,Qg),I);const g=Qg.r,B=Qg.g,i=Qg.b,o=Math.max(g,B,i),t=Math.min(g,B,i);let D,a;const s=(t+o)/2;if(t===o)D=0,a=0;else{const n=o-t;switch(a=s<=.5?n/(o+t):n/(2-o-t),o){case g:D=(B-i)/n+(B<i?6:0);break;case B:D=(i-g)/n+2;break;case i:D=(g-B)/n+4;break}D/=6}return A.h=D,A.s=a,A.l=s,A}getRGB(A,I=CQ){return cC.fromWorkingColorSpace(Co(this,Qg),I),A.r=Qg.r,A.g=Qg.g,A.b=Qg.b,A}getStyle(A=QB){return cC.fromWorkingColorSpace(Co(this,Qg),A),A!==QB?`color(${A} ${Qg.r} ${Qg.g} ${Qg.b})`:`rgb(${Qg.r*255|0},${Qg.g*255|0},${Qg.b*255|0})`}offsetHSL(A,I,g){return this.getHSL(kC),kC.h+=A,kC.s+=I,kC.l+=g,this.setHSL(kC.h,kC.s,kC.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(kC),A.getHSL(go);const g=Ye(kC.h,go.h,I),B=Ye(kC.s,go.s,I),i=Ye(kC.l,go.l,I);return this.setHSL(g,B,i),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}hI.NAMES=MG;let pQ;class KG{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{pQ===void 0&&(pQ=Xo("canvas")),pQ.width=A.width,pQ.height=A.height;const g=pQ.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=pQ}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=Xo("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const B=g.getImageData(0,0,A.width,A.height),i=B.data;for(let o=0;o<i.length;o++)i[o]=EQ(i[o]/255)*255;return g.putImageData(B,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(EQ(I[g]/255)*255):I[g]=EQ(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class NG{constructor(A=null){this.isSource=!0,this.uuid=oi(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},B=this.data;if(B!==null){let i;if(Array.isArray(B)){i=[];for(let o=0,t=B.length;o<t;o++)B[o].isDataTexture?i.push(me(B[o].image)):i.push(me(B[o]))}else i=me(B);g.url=i}return I||(A.images[this.uuid]=g),g}}function me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap?KG.getDataURL(E):E.data?{data:Array.from(E.data),width:E.width,height:E.height,type:E.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T0=0;class RC extends nE{constructor(A=RC.DEFAULT_IMAGE,I=RC.DEFAULT_MAPPING,g=MC,B=MC,i=tC,o=ot,t=HC,D=iQ,a=1,s=oQ){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=oi(),this.name="",this.source=new NG(A),this.mipmaps=[],this.mapping=I,this.wrapS=g,this.wrapT=B,this.magFilter=i,this.minFilter=o,this.anisotropy=a,this.format=t,this.internalFormat=null,this.type=D,this.offset=new JI(0,0),this.repeat=new JI(1,1),this.center=new JI(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new DC,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=s,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==kG)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Fa:A.x=A.x-Math.floor(A.x);break;case MC:A.x=A.x<0?0:1;break;case qa:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Fa:A.y=A.y-Math.floor(A.y);break;case MC:A.y=A.y<0?0:1;break;case qa:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}RC.DEFAULT_IMAGE=null;RC.DEFAULT_MAPPING=kG;class Dg{constructor(A=0,I=0,g=0,B=1){Dg.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=B}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,B){return this.x=A,this.y=I,this.z=g,this.w=B,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,i=this.w,o=A.elements;return this.x=o[0]*I+o[4]*g+o[8]*B+o[12]*i,this.y=o[1]*I+o[5]*g+o[9]*B+o[13]*i,this.z=o[2]*I+o[6]*g+o[10]*B+o[14]*i,this.w=o[3]*I+o[7]*g+o[11]*B+o[15]*i,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,B,i;const D=A.elements,a=D[0],s=D[4],n=D[8],h=D[1],k=D[5],w=D[9],r=D[2],G=D[6],l=D[10];if(Math.abs(s-h)<.01&&Math.abs(n-r)<.01&&Math.abs(w-G)<.01){if(Math.abs(s+h)<.1&&Math.abs(n+r)<.1&&Math.abs(w+G)<.1&&Math.abs(a+k+l-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const d=(a+1)/2,p=(k+1)/2,y=(l+1)/2,f=(s+h)/4,Z=(n+r)/4,N=(w+G)/4;return d>p&&d>y?d<.01?(g=0,B=.707106781,i=.707106781):(g=Math.sqrt(d),B=f/g,i=Z/g):p>y?p<.01?(g=.707106781,B=0,i=.707106781):(B=Math.sqrt(p),g=f/B,i=N/B):y<.01?(g=.707106781,B=.707106781,i=0):(i=Math.sqrt(y),g=Z/i,B=N/i),this.set(g,B,i,I),this}let J=Math.sqrt((G-w)*(G-w)+(n-r)*(n-r)+(h-s)*(h-s));return Math.abs(J)<.001&&(J=1),this.x=(G-w)/J,this.y=(n-r)/J,this.z=(h-s)/J,this.w=Math.acos((a+k+l-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fB extends nE{constructor(A,I,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new Dg(0,0,A,I),this.scissorTest=!1,this.viewport=new Dg(0,0,A,I);const B={width:A,height:I,depth:1};this.texture=new RC(B,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:tC,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new NG(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class JG extends RC{constructor(A=null,I=1,g=1,B=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=fg,this.minFilter=fg,this.wrapR=MC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class x0 extends RC{constructor(A=null,I=1,g=1,B=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=fg,this.minFilter=fg,this.wrapR=MC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(A=0,I=0,g=0,B=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=B}static slerpFlat(A,I,g,B,i,o,t){let D=g[B+0],a=g[B+1],s=g[B+2],n=g[B+3];const h=i[o+0],k=i[o+1],w=i[o+2],r=i[o+3];if(t===0){A[I+0]=D,A[I+1]=a,A[I+2]=s,A[I+3]=n;return}if(t===1){A[I+0]=h,A[I+1]=k,A[I+2]=w,A[I+3]=r;return}if(n!==r||D!==h||a!==k||s!==w){let G=1-t;const l=D*h+a*k+s*w+n*r,J=l>=0?1:-1,d=1-l*l;if(d>Number.EPSILON){const y=Math.sqrt(d),f=Math.atan2(y,l*J);G=Math.sin(G*f)/y,t=Math.sin(t*f)/y}const p=t*J;if(D=D*G+h*p,a=a*G+k*p,s=s*G+w*p,n=n*G+r*p,G===1-t){const y=1/Math.sqrt(D*D+a*a+s*s+n*n);D*=y,a*=y,s*=y,n*=y}}A[I]=D,A[I+1]=a,A[I+2]=s,A[I+3]=n}static multiplyQuaternionsFlat(A,I,g,B,i,o){const t=g[B],D=g[B+1],a=g[B+2],s=g[B+3],n=i[o],h=i[o+1],k=i[o+2],w=i[o+3];return A[I]=t*w+s*n+D*k-a*h,A[I+1]=D*w+s*h+a*n-t*k,A[I+2]=a*w+s*k+t*h-D*n,A[I+3]=s*w-t*n-D*h-a*k,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,B){return this._x=A,this._y=I,this._z=g,this._w=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,B=A._y,i=A._z,o=A._order,t=Math.cos,D=Math.sin,a=t(g/2),s=t(B/2),n=t(i/2),h=D(g/2),k=D(B/2),w=D(i/2);switch(o){case"XYZ":this._x=h*s*n+a*k*w,this._y=a*k*n-h*s*w,this._z=a*s*w+h*k*n,this._w=a*s*n-h*k*w;break;case"YXZ":this._x=h*s*n+a*k*w,this._y=a*k*n-h*s*w,this._z=a*s*w-h*k*n,this._w=a*s*n+h*k*w;break;case"ZXY":this._x=h*s*n-a*k*w,this._y=a*k*n+h*s*w,this._z=a*s*w+h*k*n,this._w=a*s*n-h*k*w;break;case"ZYX":this._x=h*s*n-a*k*w,this._y=a*k*n+h*s*w,this._z=a*s*w-h*k*n,this._w=a*s*n+h*k*w;break;case"YZX":this._x=h*s*n+a*k*w,this._y=a*k*n+h*s*w,this._z=a*s*w-h*k*n,this._w=a*s*n-h*k*w;break;case"XZY":this._x=h*s*n-a*k*w,this._y=a*k*n-h*s*w,this._z=a*s*w+h*k*n,this._w=a*s*n+h*k*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,B=Math.sin(g);return this._x=A.x*B,this._y=A.y*B,this._z=A.z*B,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],B=I[4],i=I[8],o=I[1],t=I[5],D=I[9],a=I[2],s=I[6],n=I[10],h=g+t+n;if(h>0){const k=.5/Math.sqrt(h+1);this._w=.25/k,this._x=(s-D)*k,this._y=(i-a)*k,this._z=(o-B)*k}else if(g>t&&g>n){const k=2*Math.sqrt(1+g-t-n);this._w=(s-D)/k,this._x=.25*k,this._y=(B+o)/k,this._z=(i+a)/k}else if(t>n){const k=2*Math.sqrt(1+t-g-n);this._w=(i-a)/k,this._x=(B+o)/k,this._y=.25*k,this._z=(D+s)/k}else{const k=2*Math.sqrt(1+n-g-t);this._w=(o-B)/k,this._x=(i+a)/k,this._y=(D+s)/k,this._z=.25*k}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(jg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const B=Math.min(1,I/g);return this.slerp(A,B),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,B=A._y,i=A._z,o=A._w,t=I._x,D=I._y,a=I._z,s=I._w;return this._x=g*s+o*t+B*a-i*D,this._y=B*s+o*D+i*t-g*a,this._z=i*s+o*a+g*D-B*t,this._w=o*s-g*t-B*D-i*a,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,B=this._y,i=this._z,o=this._w;let t=o*A._w+g*A._x+B*A._y+i*A._z;if(t<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,t=-t):this.copy(A),t>=1)return this._w=o,this._x=g,this._y=B,this._z=i,this;const D=1-t*t;if(D<=Number.EPSILON){const k=1-I;return this._w=k*o+I*this._w,this._x=k*g+I*this._x,this._y=k*B+I*this._y,this._z=k*i+I*this._z,this.normalize(),this._onChangeCallback(),this}const a=Math.sqrt(D),s=Math.atan2(a,t),n=Math.sin((1-I)*s)/a,h=Math.sin(I*s)/a;return this._w=o*n+this._w*h,this._x=g*n+this._x*h,this._y=B*n+this._y*h,this._z=i*n+this._z*h,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),B=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(I*Math.cos(B),g*Math.sin(i),g*Math.cos(i),I*Math.sin(B))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class IA{constructor(A=0,I=0,g=0){IA.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Nh.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Nh.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,B=this.z,i=A.elements;return this.x=i[0]*I+i[3]*g+i[6]*B,this.y=i[1]*I+i[4]*g+i[7]*B,this.z=i[2]*I+i[5]*g+i[8]*B,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,i=A.elements,o=1/(i[3]*I+i[7]*g+i[11]*B+i[15]);return this.x=(i[0]*I+i[4]*g+i[8]*B+i[12])*o,this.y=(i[1]*I+i[5]*g+i[9]*B+i[13])*o,this.z=(i[2]*I+i[6]*g+i[10]*B+i[14])*o,this}applyQuaternion(A){const I=this.x,g=this.y,B=this.z,i=A.x,o=A.y,t=A.z,D=A.w,a=D*I+o*B-t*g,s=D*g+t*I-i*B,n=D*B+i*g-o*I,h=-i*I-o*g-t*B;return this.x=a*D+h*-i+s*-t-n*-o,this.y=s*D+h*-o+n*-i-a*-t,this.z=n*D+h*-t+a*-o-s*-i,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,B=this.z,i=A.elements;return this.x=i[0]*I+i[4]*g+i[8]*B,this.y=i[1]*I+i[5]*g+i[9]*B,this.z=i[2]*I+i[6]*g+i[10]*B,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,B=A.y,i=A.z,o=I.x,t=I.y,D=I.z;return this.x=B*D-i*t,this.y=i*o-g*D,this.z=g*t-B*o,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Te.copy(this).projectOnVector(A),this.sub(Te)}reflect(A){return this.sub(Te.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(jg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,B=this.z-A.z;return I*I+g*g+B*B}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const B=Math.sin(I)*A;return this.x=B*Math.sin(g),this.y=Math.cos(I)*A,this.z=B*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),B=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=B,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Te=new IA,Nh=new ti;class ei{constructor(A=new IA(1/0,1/0,1/0),I=new IA(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){let I=1/0,g=1/0,B=1/0,i=-1/0,o=-1/0,t=-1/0;for(let D=0,a=A.length;D<a;D+=3){const s=A[D],n=A[D+1],h=A[D+2];s<I&&(I=s),n<g&&(g=n),h<B&&(B=h),s>i&&(i=s),n>o&&(o=n),h>t&&(t=h)}return this.min.set(I,g,B),this.max.set(i,o,t),this}setFromBufferAttribute(A){let I=1/0,g=1/0,B=1/0,i=-1/0,o=-1/0,t=-1/0;for(let D=0,a=A.count;D<a;D++){const s=A.getX(D),n=A.getY(D),h=A.getZ(D);s<I&&(I=s),n<g&&(g=n),h<B&&(B=h),s>i&&(i=s),n>o&&(o=n),h>t&&(t=h)}return this.min.set(I,g,B),this.max.set(i,o,t),this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=WB.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0)if(I&&g.attributes!=null&&g.attributes.position!==void 0){const i=g.attributes.position;for(let o=0,t=i.count;o<t;o++)WB.fromBufferAttribute(i,o).applyMatrix4(A.matrixWorld),this.expandByPoint(WB)}else g.boundingBox===null&&g.computeBoundingBox(),xe.copy(g.boundingBox),xe.applyMatrix4(A.matrixWorld),this.union(xe);const B=A.children;for(let i=0,o=B.length;i<o;i++)this.expandByObject(B[i],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,WB),WB.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(fE),Bo.subVectors(this.max,fE),dQ.subVectors(A.a,fE),LQ.subVectors(A.b,fE),fQ.subVectors(A.c,fE),UB.subVectors(LQ,dQ),MB.subVectors(fQ,LQ),PB.subVectors(dQ,fQ);let I=[0,-UB.z,UB.y,0,-MB.z,MB.y,0,-PB.z,PB.y,UB.z,0,-UB.x,MB.z,0,-MB.x,PB.z,0,-PB.x,-UB.y,UB.x,0,-MB.y,MB.x,0,-PB.y,PB.x,0];return!Oe(I,dQ,LQ,fQ,Bo)||(I=[1,0,0,0,1,0,0,0,1],!Oe(I,dQ,LQ,fQ,Bo))?!1:(Qo.crossVectors(UB,MB),I=[Qo.x,Qo.y,Qo.z],Oe(I,dQ,LQ,fQ,Bo))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return WB.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(WB).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(AB[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),AB[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),AB[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),AB[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),AB[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),AB[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),AB[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),AB[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(AB),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const AB=[new IA,new IA,new IA,new IA,new IA,new IA,new IA,new IA],WB=new IA,xe=new ei,dQ=new IA,LQ=new IA,fQ=new IA,UB=new IA,MB=new IA,PB=new IA,fE=new IA,Bo=new IA,Qo=new IA,_B=new IA;function Oe(E,A,I,g,B){for(let i=0,o=E.length-3;i<=o;i+=3){_B.fromArray(E,i);const t=B.x*Math.abs(_B.x)+B.y*Math.abs(_B.y)+B.z*Math.abs(_B.z),D=A.dot(_B),a=I.dot(_B),s=g.dot(_B);if(Math.max(-Math.max(D,a,s),Math.min(D,a,s))>t)return!1}return!0}const O0=new ei,Jh=new IA,Eo=new IA,be=new IA;class tt{constructor(A=new IA,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):O0.setFromPoints(A).getCenter(g);let B=0;for(let i=0,o=A.length;i<o;i++)B=Math.max(B,g.distanceToSquared(A[i]));return this.radius=Math.sqrt(B),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;be.subVectors(A,this.center);const I=be.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),B=(g-this.radius)*.5;this.center.add(be.multiplyScalar(B/g)),this.radius+=B}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?Eo.set(0,0,1).multiplyScalar(A.radius):Eo.subVectors(A.center,this.center).normalize().multiplyScalar(A.radius),this.expandByPoint(Jh.copy(A.center).add(Eo)),this.expandByPoint(Jh.copy(A.center).sub(Eo)),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const IB=new IA,Ze=new IA,io=new IA,KB=new IA,ve=new IA,oo=new IA,We=new IA;class hD{constructor(A=new IA,I=new IA(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,IB)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.direction).multiplyScalar(g).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=IB.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(IB.copy(this.direction).multiplyScalar(I).add(this.origin),IB.distanceToSquared(A))}distanceSqToSegment(A,I,g,B){Ze.copy(A).add(I).multiplyScalar(.5),io.copy(I).sub(A).normalize(),KB.copy(this.origin).sub(Ze);const i=A.distanceTo(I)*.5,o=-this.direction.dot(io),t=KB.dot(this.direction),D=-KB.dot(io),a=KB.lengthSq(),s=Math.abs(1-o*o);let n,h,k,w;if(s>0)if(n=o*D-t,h=o*t-D,w=i*s,n>=0)if(h>=-w)if(h<=w){const r=1/s;n*=r,h*=r,k=n*(n+o*h+2*t)+h*(o*n+h+2*D)+a}else h=i,n=Math.max(0,-(o*h+t)),k=-n*n+h*(h+2*D)+a;else h=-i,n=Math.max(0,-(o*h+t)),k=-n*n+h*(h+2*D)+a;else h<=-w?(n=Math.max(0,-(-o*i+t)),h=n>0?-i:Math.min(Math.max(-i,-D),i),k=-n*n+h*(h+2*D)+a):h<=w?(n=0,h=Math.min(Math.max(-i,-D),i),k=h*(h+2*D)+a):(n=Math.max(0,-(o*i+t)),h=n>0?i:Math.min(Math.max(-i,-D),i),k=-n*n+h*(h+2*D)+a);else h=o>0?-i:i,n=Math.max(0,-(o*h+t)),k=-n*n+h*(h+2*D)+a;return g&&g.copy(this.direction).multiplyScalar(n).add(this.origin),B&&B.copy(io).multiplyScalar(h).add(Ze),k}intersectSphere(A,I){IB.subVectors(A.center,this.origin);const g=IB.dot(this.direction),B=IB.dot(IB)-g*g,i=A.radius*A.radius;if(B>i)return null;const o=Math.sqrt(i-B),t=g-o,D=g+o;return t<0&&D<0?null:t<0?this.at(D,I):this.at(t,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,B,i,o,t,D;const a=1/this.direction.x,s=1/this.direction.y,n=1/this.direction.z,h=this.origin;return a>=0?(g=(A.min.x-h.x)*a,B=(A.max.x-h.x)*a):(g=(A.max.x-h.x)*a,B=(A.min.x-h.x)*a),s>=0?(i=(A.min.y-h.y)*s,o=(A.max.y-h.y)*s):(i=(A.max.y-h.y)*s,o=(A.min.y-h.y)*s),g>o||i>B||((i>g||g!==g)&&(g=i),(o<B||B!==B)&&(B=o),n>=0?(t=(A.min.z-h.z)*n,D=(A.max.z-h.z)*n):(t=(A.max.z-h.z)*n,D=(A.min.z-h.z)*n),g>D||t>B)||((t>g||g!==g)&&(g=t),(D<B||B!==B)&&(B=D),B<0)?null:this.at(g>=0?g:B,I)}intersectsBox(A){return this.intersectBox(A,IB)!==null}intersectTriangle(A,I,g,B,i){ve.subVectors(I,A),oo.subVectors(g,A),We.crossVectors(ve,oo);let o=this.direction.dot(We),t;if(o>0){if(B)return null;t=1}else if(o<0)t=-1,o=-o;else return null;KB.subVectors(this.origin,A);const D=t*this.direction.dot(oo.crossVectors(KB,oo));if(D<0)return null;const a=t*this.direction.dot(ve.cross(KB));if(a<0||D+a>o)return null;const s=-t*KB.dot(We);return s<0?null:this.at(s/o,i)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gg{constructor(){gg.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,I,g,B,i,o,t,D,a,s,n,h,k,w,r,G){const l=this.elements;return l[0]=A,l[4]=I,l[8]=g,l[12]=B,l[1]=i,l[5]=o,l[9]=t,l[13]=D,l[2]=a,l[6]=s,l[10]=n,l[14]=h,l[3]=k,l[7]=w,l[11]=r,l[15]=G,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gg().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,B=1/YQ.setFromMatrixColumn(A,0).length(),i=1/YQ.setFromMatrixColumn(A,1).length(),o=1/YQ.setFromMatrixColumn(A,2).length();return I[0]=g[0]*B,I[1]=g[1]*B,I[2]=g[2]*B,I[3]=0,I[4]=g[4]*i,I[5]=g[5]*i,I[6]=g[6]*i,I[7]=0,I[8]=g[8]*o,I[9]=g[9]*o,I[10]=g[10]*o,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,B=A.y,i=A.z,o=Math.cos(g),t=Math.sin(g),D=Math.cos(B),a=Math.sin(B),s=Math.cos(i),n=Math.sin(i);if(A.order==="XYZ"){const h=o*s,k=o*n,w=t*s,r=t*n;I[0]=D*s,I[4]=-D*n,I[8]=a,I[1]=k+w*a,I[5]=h-r*a,I[9]=-t*D,I[2]=r-h*a,I[6]=w+k*a,I[10]=o*D}else if(A.order==="YXZ"){const h=D*s,k=D*n,w=a*s,r=a*n;I[0]=h+r*t,I[4]=w*t-k,I[8]=o*a,I[1]=o*n,I[5]=o*s,I[9]=-t,I[2]=k*t-w,I[6]=r+h*t,I[10]=o*D}else if(A.order==="ZXY"){const h=D*s,k=D*n,w=a*s,r=a*n;I[0]=h-r*t,I[4]=-o*n,I[8]=w+k*t,I[1]=k+w*t,I[5]=o*s,I[9]=r-h*t,I[2]=-o*a,I[6]=t,I[10]=o*D}else if(A.order==="ZYX"){const h=o*s,k=o*n,w=t*s,r=t*n;I[0]=D*s,I[4]=w*a-k,I[8]=h*a+r,I[1]=D*n,I[5]=r*a+h,I[9]=k*a-w,I[2]=-a,I[6]=t*D,I[10]=o*D}else if(A.order==="YZX"){const h=o*D,k=o*a,w=t*D,r=t*a;I[0]=D*s,I[4]=r-h*n,I[8]=w*n+k,I[1]=n,I[5]=o*s,I[9]=-t*s,I[2]=-a*s,I[6]=k*n+w,I[10]=h-r*n}else if(A.order==="XZY"){const h=o*D,k=o*a,w=t*D,r=t*a;I[0]=D*s,I[4]=-n,I[8]=a*s,I[1]=h*n+r,I[5]=o*s,I[9]=k*n-w,I[2]=w*n-k,I[6]=t*s,I[10]=r*n+h}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(b0,A,Z0)}lookAt(A,I,g){const B=this.elements;return vg.subVectors(A,I),vg.lengthSq()===0&&(vg.z=1),vg.normalize(),NB.crossVectors(g,vg),NB.lengthSq()===0&&(Math.abs(g.z)===1?vg.x+=1e-4:vg.z+=1e-4,vg.normalize(),NB.crossVectors(g,vg)),NB.normalize(),to.crossVectors(vg,NB),B[0]=NB.x,B[4]=to.x,B[8]=vg.x,B[1]=NB.y,B[5]=to.y,B[9]=vg.y,B[2]=NB.z,B[6]=to.z,B[10]=vg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,i=this.elements,o=g[0],t=g[4],D=g[8],a=g[12],s=g[1],n=g[5],h=g[9],k=g[13],w=g[2],r=g[6],G=g[10],l=g[14],J=g[3],d=g[7],p=g[11],y=g[15],f=B[0],Z=B[4],N=B[8],x=B[12],K=B[1],j=B[5],R=B[9],M=B[13],F=B[2],Y=B[6],_=B[10],b=B[14],H=B[3],m=B[7],T=B[11],iA=B[15];return i[0]=o*f+t*K+D*F+a*H,i[4]=o*Z+t*j+D*Y+a*m,i[8]=o*N+t*R+D*_+a*T,i[12]=o*x+t*M+D*b+a*iA,i[1]=s*f+n*K+h*F+k*H,i[5]=s*Z+n*j+h*Y+k*m,i[9]=s*N+n*R+h*_+k*T,i[13]=s*x+n*M+h*b+k*iA,i[2]=w*f+r*K+G*F+l*H,i[6]=w*Z+r*j+G*Y+l*m,i[10]=w*N+r*R+G*_+l*T,i[14]=w*x+r*M+G*b+l*iA,i[3]=J*f+d*K+p*F+y*H,i[7]=J*Z+d*j+p*Y+y*m,i[11]=J*N+d*R+p*_+y*T,i[15]=J*x+d*M+p*b+y*iA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],B=A[8],i=A[12],o=A[1],t=A[5],D=A[9],a=A[13],s=A[2],n=A[6],h=A[10],k=A[14],w=A[3],r=A[7],G=A[11],l=A[15];return w*(+i*D*n-B*a*n-i*t*h+g*a*h+B*t*k-g*D*k)+r*(+I*D*k-I*a*h+i*o*h-B*o*k+B*a*s-i*D*s)+G*(+I*a*n-I*t*k-i*o*n+g*o*k+i*t*s-g*a*s)+l*(-B*t*s-I*D*n+I*t*h+B*o*n-g*o*h+g*D*s)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const B=this.elements;return A.isVector3?(B[12]=A.x,B[13]=A.y,B[14]=A.z):(B[12]=A,B[13]=I,B[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],i=A[3],o=A[4],t=A[5],D=A[6],a=A[7],s=A[8],n=A[9],h=A[10],k=A[11],w=A[12],r=A[13],G=A[14],l=A[15],J=n*G*a-r*h*a+r*D*k-t*G*k-n*D*l+t*h*l,d=w*h*a-s*G*a-w*D*k+o*G*k+s*D*l-o*h*l,p=s*r*a-w*n*a+w*t*k-o*r*k-s*t*l+o*n*l,y=w*n*D-s*r*D-w*t*h+o*r*h+s*t*G-o*n*G,f=I*J+g*d+B*p+i*y;if(f===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/f;return A[0]=J*Z,A[1]=(r*h*i-n*G*i-r*B*k+g*G*k+n*B*l-g*h*l)*Z,A[2]=(t*G*i-r*D*i+r*B*a-g*G*a-t*B*l+g*D*l)*Z,A[3]=(n*D*i-t*h*i-n*B*a+g*h*a+t*B*k-g*D*k)*Z,A[4]=d*Z,A[5]=(s*G*i-w*h*i+w*B*k-I*G*k-s*B*l+I*h*l)*Z,A[6]=(w*D*i-o*G*i-w*B*a+I*G*a+o*B*l-I*D*l)*Z,A[7]=(o*h*i-s*D*i+s*B*a-I*h*a-o*B*k+I*D*k)*Z,A[8]=p*Z,A[9]=(w*n*i-s*r*i-w*g*k+I*r*k+s*g*l-I*n*l)*Z,A[10]=(o*r*i-w*t*i+w*g*a-I*r*a-o*g*l+I*t*l)*Z,A[11]=(s*t*i-o*n*i-s*g*a+I*n*a+o*g*k-I*t*k)*Z,A[12]=y*Z,A[13]=(s*r*B-w*n*B+w*g*h-I*r*h-s*g*G+I*n*G)*Z,A[14]=(w*t*B-o*r*B-w*g*D+I*r*D+o*g*G-I*t*G)*Z,A[15]=(o*n*B-s*t*B+s*g*D-I*n*D-o*g*h+I*t*h)*Z,this}scale(A){const I=this.elements,g=A.x,B=A.y,i=A.z;return I[0]*=g,I[4]*=B,I[8]*=i,I[1]*=g,I[5]*=B,I[9]*=i,I[2]*=g,I[6]*=B,I[10]*=i,I[3]*=g,I[7]*=B,I[11]*=i,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],B=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,B))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),B=Math.sin(I),i=1-g,o=A.x,t=A.y,D=A.z,a=i*o,s=i*t;return this.set(a*o+g,a*t-B*D,a*D+B*t,0,a*t+B*D,s*t+g,s*D-B*o,0,a*D-B*t,s*D+B*o,i*D*D+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,B,i,o){return this.set(1,g,i,0,A,1,o,0,I,B,1,0,0,0,0,1),this}compose(A,I,g){const B=this.elements,i=I._x,o=I._y,t=I._z,D=I._w,a=i+i,s=o+o,n=t+t,h=i*a,k=i*s,w=i*n,r=o*s,G=o*n,l=t*n,J=D*a,d=D*s,p=D*n,y=g.x,f=g.y,Z=g.z;return B[0]=(1-(r+l))*y,B[1]=(k+p)*y,B[2]=(w-d)*y,B[3]=0,B[4]=(k-p)*f,B[5]=(1-(h+l))*f,B[6]=(G+J)*f,B[7]=0,B[8]=(w+d)*Z,B[9]=(G-J)*Z,B[10]=(1-(h+r))*Z,B[11]=0,B[12]=A.x,B[13]=A.y,B[14]=A.z,B[15]=1,this}decompose(A,I,g){const B=this.elements;let i=YQ.set(B[0],B[1],B[2]).length();const o=YQ.set(B[4],B[5],B[6]).length(),t=YQ.set(B[8],B[9],B[10]).length();this.determinant()<0&&(i=-i),A.x=B[12],A.y=B[13],A.z=B[14],lC.copy(this);const a=1/i,s=1/o,n=1/t;return lC.elements[0]*=a,lC.elements[1]*=a,lC.elements[2]*=a,lC.elements[4]*=s,lC.elements[5]*=s,lC.elements[6]*=s,lC.elements[8]*=n,lC.elements[9]*=n,lC.elements[10]*=n,I.setFromRotationMatrix(lC),g.x=i,g.y=o,g.z=t,this}makePerspective(A,I,g,B,i,o){const t=this.elements,D=2*i/(I-A),a=2*i/(g-B),s=(I+A)/(I-A),n=(g+B)/(g-B),h=-(o+i)/(o-i),k=-2*o*i/(o-i);return t[0]=D,t[4]=0,t[8]=s,t[12]=0,t[1]=0,t[5]=a,t[9]=n,t[13]=0,t[2]=0,t[6]=0,t[10]=h,t[14]=k,t[3]=0,t[7]=0,t[11]=-1,t[15]=0,this}makeOrthographic(A,I,g,B,i,o){const t=this.elements,D=1/(I-A),a=1/(g-B),s=1/(o-i),n=(I+A)*D,h=(g+B)*a,k=(o+i)*s;return t[0]=2*D,t[4]=0,t[8]=0,t[12]=-n,t[1]=0,t[5]=2*a,t[9]=0,t[13]=-h,t[2]=0,t[6]=0,t[10]=-2*s,t[14]=-k,t[3]=0,t[7]=0,t[11]=0,t[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<16;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const YQ=new IA,lC=new gg,b0=new IA(0,0,0),Z0=new IA(1,1,1),NB=new IA,to=new IA,vg=new IA,Rh=new gg,Fh=new ti;class ai{constructor(A=0,I=0,g=0,B=ai.DefaultOrder){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=B}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,B=this._order){return this._x=A,this._y=I,this._z=g,this._order=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const B=A.elements,i=B[0],o=B[4],t=B[8],D=B[1],a=B[5],s=B[9],n=B[2],h=B[6],k=B[10];switch(I){case"XYZ":this._y=Math.asin(jg(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(-s,k),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(h,a),this._z=0);break;case"YXZ":this._x=Math.asin(-jg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(t,k),this._z=Math.atan2(D,a)):(this._y=Math.atan2(-n,i),this._z=0);break;case"ZXY":this._x=Math.asin(jg(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-n,k),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(D,i));break;case"ZYX":this._y=Math.asin(-jg(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(h,k),this._z=Math.atan2(D,i)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(jg(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(-s,a),this._y=Math.atan2(-n,i)):(this._x=0,this._y=Math.atan2(t,k));break;case"XZY":this._z=Math.asin(-jg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,a),this._y=Math.atan2(t,i)):(this._x=Math.atan2(-s,k),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Rh.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Rh,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ai.DefaultOrder="XYZ";ai.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class SD{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let v0=0;const qh=new IA,uQ=new ti,gB=new gg,eo=new IA,YE=new IA,W0=new IA,P0=new ti,ph=new IA(1,0,0),dh=new IA(0,1,0),Lh=new IA(0,0,1),_0={type:"added"},fh={type:"removed"};class Sg extends nE{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sg.DefaultUp.clone();const A=new IA,I=new ai,g=new ti,B=new IA(1,1,1);function i(){g.setFromEuler(I,!1)}function o(){I.setFromQuaternion(g,void 0,!1)}I._onChange(i),g._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:B},modelViewMatrix:{value:new gg},normalMatrix:{value:new DC}}),this.matrix=new gg,this.matrixWorld=new gg,this.matrixAutoUpdate=Sg.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Sg.DefaultMatrixWorldAutoUpdate,this.layers=new SD,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return uQ.setFromAxisAngle(A,I),this.quaternion.multiply(uQ),this}rotateOnWorldAxis(A,I){return uQ.setFromAxisAngle(A,I),this.quaternion.premultiply(uQ),this}rotateX(A){return this.rotateOnAxis(ph,A)}rotateY(A){return this.rotateOnAxis(dh,A)}rotateZ(A){return this.rotateOnAxis(Lh,A)}translateOnAxis(A,I){return qh.copy(A).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(ph,A)}translateY(A){return this.translateOnAxis(dh,A)}translateZ(A){return this.translateOnAxis(Lh,A)}localToWorld(A){return A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return A.applyMatrix4(gB.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?eo.copy(A):eo.set(A,I,g);const B=this.parent;this.updateWorldMatrix(!0,!1),YE.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gB.lookAt(YE,eo,this.up):gB.lookAt(eo,YE,this.up),this.quaternion.setFromRotationMatrix(gB),B&&(gB.extractRotation(B.matrixWorld),uQ.setFromRotationMatrix(gB),this.quaternion.premultiply(uQ.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(_0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(fh)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(fh)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),gB.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),gB.multiply(A.parent.matrixWorld)),A.applyMatrix4(gB),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,B=this.children.length;g<B;g++){const o=this.children[g].getObjectByProperty(A,I);if(o!==void 0)return o}}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(YE,A,W0),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(YE,P0,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,B=I.length;g<B;g++){const i=I[g];(i.matrixWorldAutoUpdate===!0||A===!0)&&i.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const B=this.children;for(let i=0,o=B.length;i<o;i++){const t=B[i];t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const B={};B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.castShadow===!0&&(B.castShadow=!0),this.receiveShadow===!0&&(B.receiveShadow=!0),this.visible===!1&&(B.visible=!1),this.frustumCulled===!1&&(B.frustumCulled=!1),this.renderOrder!==0&&(B.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(B.userData=this.userData),B.layers=this.layers.mask,B.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(B.matrixAutoUpdate=!1),this.isInstancedMesh&&(B.type="InstancedMesh",B.count=this.count,B.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(B.instanceColor=this.instanceColor.toJSON()));function i(t,D){return t[D.uuid]===void 0&&(t[D.uuid]=D.toJSON(A)),D.uuid}if(this.isScene)this.background&&(this.background.isColor?B.background=this.background.toJSON():this.background.isTexture&&(B.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(B.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){B.geometry=i(A.geometries,this.geometry);const t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){const D=t.shapes;if(Array.isArray(D))for(let a=0,s=D.length;a<s;a++){const n=D[a];i(A.shapes,n)}else i(A.shapes,D)}}if(this.isSkinnedMesh&&(B.bindMode=this.bindMode,B.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(A.skeletons,this.skeleton),B.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const t=[];for(let D=0,a=this.material.length;D<a;D++)t.push(i(A.materials,this.material[D]));B.material=t}else B.material=i(A.materials,this.material);if(this.children.length>0){B.children=[];for(let t=0;t<this.children.length;t++)B.children.push(this.children[t].toJSON(A).object)}if(this.animations.length>0){B.animations=[];for(let t=0;t<this.animations.length;t++){const D=this.animations[t];B.animations.push(i(A.animations,D))}}if(I){const t=o(A.geometries),D=o(A.materials),a=o(A.textures),s=o(A.images),n=o(A.shapes),h=o(A.skeletons),k=o(A.animations),w=o(A.nodes);t.length>0&&(g.geometries=t),D.length>0&&(g.materials=D),a.length>0&&(g.textures=a),s.length>0&&(g.images=s),n.length>0&&(g.shapes=n),h.length>0&&(g.skeletons=h),k.length>0&&(g.animations=k),w.length>0&&(g.nodes=w)}return g.object=B,g;function o(t){const D=[];for(const a in t){const s=t[a];delete s.metadata,D.push(s)}return D}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const B=A.children[g];this.add(B.clone())}return this}}Sg.DefaultUp=new IA(0,1,0);Sg.DefaultMatrixAutoUpdate=!0;Sg.DefaultMatrixWorldAutoUpdate=!0;const yC=new IA,CB=new IA,Pe=new IA,BB=new IA,HQ=new IA,mQ=new IA,Yh=new IA,_e=new IA,je=new IA,Ve=new IA;class EB{constructor(A=new IA,I=new IA,g=new IA){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,B){B.subVectors(g,I),yC.subVectors(A,I),B.cross(yC);const i=B.lengthSq();return i>0?B.multiplyScalar(1/Math.sqrt(i)):B.set(0,0,0)}static getBarycoord(A,I,g,B,i){yC.subVectors(B,I),CB.subVectors(g,I),Pe.subVectors(A,I);const o=yC.dot(yC),t=yC.dot(CB),D=yC.dot(Pe),a=CB.dot(CB),s=CB.dot(Pe),n=o*a-t*t;if(n===0)return i.set(-2,-1,-1);const h=1/n,k=(a*D-t*s)*h,w=(o*s-t*D)*h;return i.set(1-k-w,w,k)}static containsPoint(A,I,g,B){return this.getBarycoord(A,I,g,B,BB),BB.x>=0&&BB.y>=0&&BB.x+BB.y<=1}static getUV(A,I,g,B,i,o,t,D){return this.getBarycoord(A,I,g,B,BB),D.set(0,0),D.addScaledVector(i,BB.x),D.addScaledVector(o,BB.y),D.addScaledVector(t,BB.z),D}static isFrontFacing(A,I,g,B){return yC.subVectors(g,I),CB.subVectors(A,I),yC.cross(CB).dot(B)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,B){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[B]),this}setFromAttributeAndIndices(A,I,g,B){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,B),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return yC.subVectors(this.c,this.b),CB.subVectors(this.a,this.b),yC.cross(CB).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return EB.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return EB.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,B,i){return EB.getUV(A,this.a,this.b,this.c,I,g,B,i)}containsPoint(A){return EB.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return EB.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,B=this.b,i=this.c;let o,t;HQ.subVectors(B,g),mQ.subVectors(i,g),_e.subVectors(A,g);const D=HQ.dot(_e),a=mQ.dot(_e);if(D<=0&&a<=0)return I.copy(g);je.subVectors(A,B);const s=HQ.dot(je),n=mQ.dot(je);if(s>=0&&n<=s)return I.copy(B);const h=D*n-s*a;if(h<=0&&D>=0&&s<=0)return o=D/(D-s),I.copy(g).addScaledVector(HQ,o);Ve.subVectors(A,i);const k=HQ.dot(Ve),w=mQ.dot(Ve);if(w>=0&&k<=w)return I.copy(i);const r=k*a-D*w;if(r<=0&&a>=0&&w<=0)return t=a/(a-w),I.copy(g).addScaledVector(mQ,t);const G=s*w-k*n;if(G<=0&&n-s>=0&&k-w>=0)return Yh.subVectors(i,B),t=(n-s)/(n-s+(k-w)),I.copy(B).addScaledVector(Yh,t);const l=1/(G+r+h);return o=r*l,t=h*l,I.copy(g).addScaledVector(HQ,o).addScaledVector(mQ,t)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let j0=0;class hE extends nE{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=zQ,this.side=iE,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wG,this.blendDst=cG,this.blendEquation=WQ,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Le,this.stencilZFail=Le,this.stencilZPass=Le,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn("THREE.Material: '"+I+"' parameter is undefined.");continue}const B=this[I];if(B===void 0){console.warn("THREE."+this.type+": '"+I+"' is not a property of this material.");continue}B&&B.isColor?B.set(g):B&&B.isVector3&&g&&g.isVector3?B.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==zQ&&(g.blending=this.blending),this.side!==iE&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),JSON.stringify(this.userData)!=="{}"&&(g.userData=this.userData);function B(i){const o=[];for(const t in i){const D=i[t];delete D.metadata,o.push(D)}return o}if(I){const i=B(A.textures),o=B(A.images);i.length>0&&(g.textures=i),o.length>0&&(g.images=o)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const B=I.length;g=new Array(B);for(let i=0;i!==B;++i)g[i]=I[i].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class et extends hE{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new hI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nD,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Ag=new IA,ao=new JI;class TC{constructor(A,I,g){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g===!0,this.usage=yh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let B=0,i=this.itemSize;B<i;B++)this.array[A+B]=I.array[g+B];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)ao.fromBufferAttribute(this,I),ao.applyMatrix3(A),this.setXY(I,ao.x,ao.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)Ag.fromBufferAttribute(this,I),Ag.applyMatrix3(A),this.setXYZ(I,Ag.x,Ag.y,Ag.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)Ag.fromBufferAttribute(this,I),Ag.applyMatrix4(A),this.setXYZ(I,Ag.x,Ag.y,Ag.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)Ag.fromBufferAttribute(this,I),Ag.applyNormalMatrix(A),this.setXYZ(I,Ag.x,Ag.y,Ag.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)Ag.fromBufferAttribute(this,I),Ag.transformDirection(A),this.setXYZ(I,Ag.x,Ag.y,Ag.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=Io(I,this.array)),I}setX(A,I){return this.normalized&&(I=Zg(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=Io(I,this.array)),I}setY(A,I){return this.normalized&&(I=Zg(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=Io(I,this.array)),I}setZ(A,I){return this.normalized&&(I=Zg(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=Io(I,this.array)),I}setW(A,I){return this.normalized&&(I=Zg(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=Zg(I,this.array),g=Zg(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,B){return A*=this.itemSize,this.normalized&&(I=Zg(I,this.array),g=Zg(g,this.array),B=Zg(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this}setXYZW(A,I,g,B,i){return A*=this.itemSize,this.normalized&&(I=Zg(I,this.array),g=Zg(g,this.array),B=Zg(B,this.array),i=Zg(i,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this.array[A+3]=i,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==yh&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class RG extends TC{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class FG extends TC{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class NC extends TC{constructor(A,I,g){super(new Float32Array(A),I,g)}}let V0=0;const EC=new gg,Xe=new Sg,TQ=new IA,Wg=new ei,uE=new ei,ag=new IA;class aB extends nE{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(UG(A)?FG:RG)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const i=new DC().getNormalMatrix(A);g.applyNormalMatrix(i),g.needsUpdate=!0}const B=this.attributes.tangent;return B!==void 0&&(B.transformDirection(A),B.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return EC.makeRotationFromQuaternion(A),this.applyMatrix4(EC),this}rotateX(A){return EC.makeRotationX(A),this.applyMatrix4(EC),this}rotateY(A){return EC.makeRotationY(A),this.applyMatrix4(EC),this}rotateZ(A){return EC.makeRotationZ(A),this.applyMatrix4(EC),this}translate(A,I,g){return EC.makeTranslation(A,I,g),this.applyMatrix4(EC),this}scale(A,I,g){return EC.makeScale(A,I,g),this.applyMatrix4(EC),this}lookAt(A){return Xe.lookAt(A),Xe.updateMatrix(),this.applyMatrix4(Xe.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(TQ).negate(),this.translate(TQ.x,TQ.y,TQ.z),this}setFromPoints(A){const I=[];for(let g=0,B=A.length;g<B;g++){const i=A[g];I.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new NC(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new IA(-1/0,-1/0,-1/0),new IA(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,B=I.length;g<B;g++){const i=I[g];Wg.setFromBufferAttribute(i),this.morphTargetsRelative?(ag.addVectors(this.boundingBox.min,Wg.min),this.boundingBox.expandByPoint(ag),ag.addVectors(this.boundingBox.max,Wg.max),this.boundingBox.expandByPoint(ag)):(this.boundingBox.expandByPoint(Wg.min),this.boundingBox.expandByPoint(Wg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tt);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new IA,1/0);return}if(A){const g=this.boundingSphere.center;if(Wg.setFromBufferAttribute(A),I)for(let i=0,o=I.length;i<o;i++){const t=I[i];uE.setFromBufferAttribute(t),this.morphTargetsRelative?(ag.addVectors(Wg.min,uE.min),Wg.expandByPoint(ag),ag.addVectors(Wg.max,uE.max),Wg.expandByPoint(ag)):(Wg.expandByPoint(uE.min),Wg.expandByPoint(uE.max))}Wg.getCenter(g);let B=0;for(let i=0,o=A.count;i<o;i++)ag.fromBufferAttribute(A,i),B=Math.max(B,g.distanceToSquared(ag));if(I)for(let i=0,o=I.length;i<o;i++){const t=I[i],D=this.morphTargetsRelative;for(let a=0,s=t.count;a<s;a++)ag.fromBufferAttribute(t,a),D&&(TQ.fromBufferAttribute(A,a),ag.add(TQ)),B=Math.max(B,g.distanceToSquared(ag))}this.boundingSphere.radius=Math.sqrt(B),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,B=I.position.array,i=I.normal.array,o=I.uv.array,t=B.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new TC(new Float32Array(4*t),4));const D=this.getAttribute("tangent").array,a=[],s=[];for(let K=0;K<t;K++)a[K]=new IA,s[K]=new IA;const n=new IA,h=new IA,k=new IA,w=new JI,r=new JI,G=new JI,l=new IA,J=new IA;function d(K,j,R){n.fromArray(B,K*3),h.fromArray(B,j*3),k.fromArray(B,R*3),w.fromArray(o,K*2),r.fromArray(o,j*2),G.fromArray(o,R*2),h.sub(n),k.sub(n),r.sub(w),G.sub(w);const M=1/(r.x*G.y-G.x*r.y);!isFinite(M)||(l.copy(h).multiplyScalar(G.y).addScaledVector(k,-r.y).multiplyScalar(M),J.copy(k).multiplyScalar(r.x).addScaledVector(h,-G.x).multiplyScalar(M),a[K].add(l),a[j].add(l),a[R].add(l),s[K].add(J),s[j].add(J),s[R].add(J))}let p=this.groups;p.length===0&&(p=[{start:0,count:g.length}]);for(let K=0,j=p.length;K<j;++K){const R=p[K],M=R.start,F=R.count;for(let Y=M,_=M+F;Y<_;Y+=3)d(g[Y+0],g[Y+1],g[Y+2])}const y=new IA,f=new IA,Z=new IA,N=new IA;function x(K){Z.fromArray(i,K*3),N.copy(Z);const j=a[K];y.copy(j),y.sub(Z.multiplyScalar(Z.dot(j))).normalize(),f.crossVectors(N,j);const M=f.dot(s[K])<0?-1:1;D[K*4]=y.x,D[K*4+1]=y.y,D[K*4+2]=y.z,D[K*4+3]=M}for(let K=0,j=p.length;K<j;++K){const R=p[K],M=R.start,F=R.count;for(let Y=M,_=M+F;Y<_;Y+=3)x(g[Y+0]),x(g[Y+1]),x(g[Y+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new TC(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let h=0,k=g.count;h<k;h++)g.setXYZ(h,0,0,0);const B=new IA,i=new IA,o=new IA,t=new IA,D=new IA,a=new IA,s=new IA,n=new IA;if(A)for(let h=0,k=A.count;h<k;h+=3){const w=A.getX(h+0),r=A.getX(h+1),G=A.getX(h+2);B.fromBufferAttribute(I,w),i.fromBufferAttribute(I,r),o.fromBufferAttribute(I,G),s.subVectors(o,i),n.subVectors(B,i),s.cross(n),t.fromBufferAttribute(g,w),D.fromBufferAttribute(g,r),a.fromBufferAttribute(g,G),t.add(s),D.add(s),a.add(s),g.setXYZ(w,t.x,t.y,t.z),g.setXYZ(r,D.x,D.y,D.z),g.setXYZ(G,a.x,a.y,a.z)}else for(let h=0,k=I.count;h<k;h+=3)B.fromBufferAttribute(I,h+0),i.fromBufferAttribute(I,h+1),o.fromBufferAttribute(I,h+2),s.subVectors(o,i),n.subVectors(B,i),s.cross(n),g.setXYZ(h+0,s.x,s.y,s.z),g.setXYZ(h+1,s.x,s.y,s.z),g.setXYZ(h+2,s.x,s.y,s.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)ag.fromBufferAttribute(A,I),ag.normalize(),A.setXYZ(I,ag.x,ag.y,ag.z)}toNonIndexed(){function A(t,D){const a=t.array,s=t.itemSize,n=t.normalized,h=new a.constructor(D.length*s);let k=0,w=0;for(let r=0,G=D.length;r<G;r++){t.isInterleavedBufferAttribute?k=D[r]*t.data.stride+t.offset:k=D[r]*s;for(let l=0;l<s;l++)h[w++]=a[k++]}return new TC(h,s,n)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new aB,g=this.index.array,B=this.attributes;for(const t in B){const D=B[t],a=A(D,g);I.setAttribute(t,a)}const i=this.morphAttributes;for(const t in i){const D=[],a=i[t];for(let s=0,n=a.length;s<n;s++){const h=a[s],k=A(h,g);D.push(k)}I.morphAttributes[t]=D}I.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let t=0,D=o.length;t<D;t++){const a=o[t];I.addGroup(a.start,a.count,a.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const D=this.parameters;for(const a in D)D[a]!==void 0&&(A[a]=D[a]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const D in g){const a=g[D];A.data.attributes[D]=a.toJSON(A.data)}const B={};let i=!1;for(const D in this.morphAttributes){const a=this.morphAttributes[D],s=[];for(let n=0,h=a.length;n<h;n++){const k=a[n];s.push(k.toJSON(A.data))}s.length>0&&(B[D]=s,i=!0)}i&&(A.data.morphAttributes=B,A.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(A.data.groups=JSON.parse(JSON.stringify(o)));const t=this.boundingSphere;return t!==null&&(A.data.boundingSphere={center:t.center.toArray(),radius:t.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const B=A.attributes;for(const a in B){const s=B[a];this.setAttribute(a,s.clone(I))}const i=A.morphAttributes;for(const a in i){const s=[],n=i[a];for(let h=0,k=n.length;h<k;h++)s.push(n[h].clone(I));this.morphAttributes[a]=s}this.morphTargetsRelative=A.morphTargetsRelative;const o=A.groups;for(let a=0,s=o.length;a<s;a++){const n=o[a];this.addGroup(n.start,n.count,n.materialIndex)}const t=A.boundingBox;t!==null&&(this.boundingBox=t.clone());const D=A.boundingSphere;return D!==null&&(this.boundingSphere=D.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new gg,xQ=new hD,ze=new tt,JB=new IA,RB=new IA,FB=new IA,$e=new IA,Aa=new IA,Ia=new IA,Do=new IA,so=new IA,no=new IA,ho=new JI,So=new JI,Go=new JI,ga=new IA,ro=new IA;class KC extends Sg{constructor(A=new aB,I=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const B=I[g[0]];if(B!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=B.length;i<o;i++){const t=B[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=i}}}}raycast(A,I){const g=this.geometry,B=this.material,i=this.matrixWorld;if(B===void 0||(g.boundingSphere===null&&g.computeBoundingSphere(),ze.copy(g.boundingSphere),ze.applyMatrix4(i),A.ray.intersectsSphere(ze)===!1)||(uh.copy(i).invert(),xQ.copy(A.ray).applyMatrix4(uh),g.boundingBox!==null&&xQ.intersectsBox(g.boundingBox)===!1))return;let o;const t=g.index,D=g.attributes.position,a=g.morphAttributes.position,s=g.morphTargetsRelative,n=g.attributes.uv,h=g.attributes.uv2,k=g.groups,w=g.drawRange;if(t!==null)if(Array.isArray(B))for(let r=0,G=k.length;r<G;r++){const l=k[r],J=B[l.materialIndex],d=Math.max(l.start,w.start),p=Math.min(t.count,Math.min(l.start+l.count,w.start+w.count));for(let y=d,f=p;y<f;y+=3){const Z=t.getX(y),N=t.getX(y+1),x=t.getX(y+2);o=wo(this,J,A,xQ,D,a,s,n,h,Z,N,x),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=l.materialIndex,I.push(o))}}else{const r=Math.max(0,w.start),G=Math.min(t.count,w.start+w.count);for(let l=r,J=G;l<J;l+=3){const d=t.getX(l),p=t.getX(l+1),y=t.getX(l+2);o=wo(this,B,A,xQ,D,a,s,n,h,d,p,y),o&&(o.faceIndex=Math.floor(l/3),I.push(o))}}else if(D!==void 0)if(Array.isArray(B))for(let r=0,G=k.length;r<G;r++){const l=k[r],J=B[l.materialIndex],d=Math.max(l.start,w.start),p=Math.min(D.count,Math.min(l.start+l.count,w.start+w.count));for(let y=d,f=p;y<f;y+=3){const Z=y,N=y+1,x=y+2;o=wo(this,J,A,xQ,D,a,s,n,h,Z,N,x),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=l.materialIndex,I.push(o))}}else{const r=Math.max(0,w.start),G=Math.min(D.count,w.start+w.count);for(let l=r,J=G;l<J;l+=3){const d=l,p=l+1,y=l+2;o=wo(this,B,A,xQ,D,a,s,n,h,d,p,y),o&&(o.faceIndex=Math.floor(l/3),I.push(o))}}}}function X0(E,A,I,g,B,i,o,t){let D;if(A.side===sC?D=g.intersectTriangle(o,i,B,!0,t):D=g.intersectTriangle(B,i,o,A.side!==iB,t),D===null)return null;ro.copy(t),ro.applyMatrix4(E.matrixWorld);const a=I.ray.origin.distanceTo(ro);return a<I.near||a>I.far?null:{distance:a,point:ro.clone(),object:E}}function wo(E,A,I,g,B,i,o,t,D,a,s,n){JB.fromBufferAttribute(B,a),RB.fromBufferAttribute(B,s),FB.fromBufferAttribute(B,n);const h=E.morphTargetInfluences;if(i&&h){Do.set(0,0,0),so.set(0,0,0),no.set(0,0,0);for(let w=0,r=i.length;w<r;w++){const G=h[w],l=i[w];G!==0&&($e.fromBufferAttribute(l,a),Aa.fromBufferAttribute(l,s),Ia.fromBufferAttribute(l,n),o?(Do.addScaledVector($e,G),so.addScaledVector(Aa,G),no.addScaledVector(Ia,G)):(Do.addScaledVector($e.sub(JB),G),so.addScaledVector(Aa.sub(RB),G),no.addScaledVector(Ia.sub(FB),G)))}JB.add(Do),RB.add(so),FB.add(no)}E.isSkinnedMesh&&(E.boneTransform(a,JB),E.boneTransform(s,RB),E.boneTransform(n,FB));const k=X0(E,A,I,g,JB,RB,FB,ga);if(k){t&&(ho.fromBufferAttribute(t,a),So.fromBufferAttribute(t,s),Go.fromBufferAttribute(t,n),k.uv=EB.getUV(ga,JB,RB,FB,ho,So,Go,new JI)),D&&(ho.fromBufferAttribute(D,a),So.fromBufferAttribute(D,s),Go.fromBufferAttribute(D,n),k.uv2=EB.getUV(ga,JB,RB,FB,ho,So,Go,new JI));const w={a,b:s,c:n,normal:new IA,materialIndex:0};EB.getNormal(JB,RB,FB,w.normal),k.face=w}return k}class DQ extends aB{constructor(A=1,I=1,g=1,B=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:B,heightSegments:i,depthSegments:o};const t=this;B=Math.floor(B),i=Math.floor(i),o=Math.floor(o);const D=[],a=[],s=[],n=[];let h=0,k=0;w("z","y","x",-1,-1,g,I,A,o,i,0),w("z","y","x",1,-1,g,I,-A,o,i,1),w("x","z","y",1,1,A,g,I,B,o,2),w("x","z","y",1,-1,A,g,-I,B,o,3),w("x","y","z",1,-1,A,I,g,B,i,4),w("x","y","z",-1,-1,A,I,-g,B,i,5),this.setIndex(D),this.setAttribute("position",new NC(a,3)),this.setAttribute("normal",new NC(s,3)),this.setAttribute("uv",new NC(n,2));function w(r,G,l,J,d,p,y,f,Z,N,x){const K=p/Z,j=y/N,R=p/2,M=y/2,F=f/2,Y=Z+1,_=N+1;let b=0,H=0;const m=new IA;for(let T=0;T<_;T++){const iA=T*j-M;for(let oA=0;oA<Y;oA++){const DA=oA*K-R;m[r]=DA*J,m[G]=iA*d,m[l]=F,a.push(m.x,m.y,m.z),m[r]=0,m[G]=0,m[l]=f>0?1:-1,s.push(m.x,m.y,m.z),n.push(oA/Z),n.push(1-T/N),b+=1}}for(let T=0;T<N;T++)for(let iA=0;iA<Z;iA++){const oA=h+iA+Y*T,DA=h+iA+Y*(T+1),cA=h+(iA+1)+Y*(T+1),RA=h+(iA+1)+Y*T;D.push(oA,DA,RA),D.push(DA,cA,RA),H+=6}t.addGroup(k,H,x),k+=H,h+=b}}static fromJSON(A){return new DQ(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function aE(E){const A={};for(const I in E){A[I]={};for(const g in E[I]){const B=E[I][g];B&&(B.isColor||B.isMatrix3||B.isMatrix4||B.isVector2||B.isVector3||B.isVector4||B.isTexture||B.isQuaternion)?A[I][g]=B.clone():Array.isArray(B)?A[I][g]=B.slice():A[I][g]=B}}return A}function kg(E){const A={};for(let I=0;I<E.length;I++){const g=aE(E[I]);for(const B in g)A[B]=g[B]}return A}function z0(E){const A=[];for(let I=0;I<E.length;I++)A.push(E[I].clone());return A}const $0={clone:aE,merge:kg};var AK=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tQ extends hE{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AK,this.fragmentShader=IK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=aE(A.uniforms),this.uniformsGroups=z0(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const B in this.uniforms){const o=this.uniforms[B].value;o&&o.isTexture?I.uniforms[B]={type:"t",value:o.toJSON(A).uuid}:o&&o.isColor?I.uniforms[B]={type:"c",value:o.getHex()}:o&&o.isVector2?I.uniforms[B]={type:"v2",value:o.toArray()}:o&&o.isVector3?I.uniforms[B]={type:"v3",value:o.toArray()}:o&&o.isVector4?I.uniforms[B]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?I.uniforms[B]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?I.uniforms[B]={type:"m4",value:o.toArray()}:I.uniforms[B]={value:o}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader;const g={};for(const B in this.extensions)this.extensions[B]===!0&&(g[B]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class qG extends Sg{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gg,this.projectionMatrix=new gg,this.projectionMatrixInverse=new gg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class eC extends qG{constructor(A=50,I=1,g=.1,B=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=B,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=Mh*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(fe*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan(fe*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,B,i,o){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(fe*.5*this.fov)/this.zoom,g=2*I,B=this.aspect*g,i=-.5*B;const o=this.view;if(this.view!==null&&this.view.enabled){const D=o.fullWidth,a=o.fullHeight;i+=o.offsetX*B/D,I-=o.offsetY*g/a,B*=o.width/D,g*=o.height/a}const t=this.filmOffset;t!==0&&(i+=A*t/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+B,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const OQ=90,bQ=1;class gK extends Sg{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g;const B=new eC(OQ,bQ,A,I);B.layers=this.layers,B.up.set(0,-1,0),B.lookAt(new IA(1,0,0)),this.add(B);const i=new eC(OQ,bQ,A,I);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new IA(-1,0,0)),this.add(i);const o=new eC(OQ,bQ,A,I);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new IA(0,1,0)),this.add(o);const t=new eC(OQ,bQ,A,I);t.layers=this.layers,t.up.set(0,0,-1),t.lookAt(new IA(0,-1,0)),this.add(t);const D=new eC(OQ,bQ,A,I);D.layers=this.layers,D.up.set(0,-1,0),D.lookAt(new IA(0,0,1)),this.add(D);const a=new eC(OQ,bQ,A,I);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new IA(0,0,-1)),this.add(a)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[B,i,o,t,D,a]=this.children,s=A.getRenderTarget(),n=A.toneMapping,h=A.xr.enabled;A.toneMapping=tB,A.xr.enabled=!1;const k=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,B),A.setRenderTarget(g,1),A.render(I,i),A.setRenderTarget(g,2),A.render(I,o),A.setRenderTarget(g,3),A.render(I,t),A.setRenderTarget(g,4),A.render(I,D),g.texture.generateMipmaps=k,A.setRenderTarget(g,5),A.render(I,a),A.setRenderTarget(s),A.toneMapping=n,A.xr.enabled=h,g.texture.needsPMREMUpdate=!0}}class pG extends RC{constructor(A,I,g,B,i,o,t,D,a,s){A=A!==void 0?A:[],I=I!==void 0?I:oE,super(A,I,g,B,i,o,t,D,a,s),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class CK extends fB{constructor(A,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},B=[g,g,g,g,g,g];this.texture=new pG(B,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:tC}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.encoding=I.encoding,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},B=new DQ(5,5,5),i=new tQ({name:"CubemapFromEquirect",uniforms:aE(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:sC,blending:oB});i.uniforms.tEquirect.value=I;const o=new KC(B,i),t=I.minFilter;return I.minFilter===ot&&(I.minFilter=tC),new gK(1,10,this).update(A,o),I.minFilter=t,o.geometry.dispose(),o.material.dispose(),this}clear(A,I,g,B){const i=A.getRenderTarget();for(let o=0;o<6;o++)A.setRenderTarget(this,o),A.clear(I,g,B);A.setRenderTarget(i)}}const Ca=new IA,BK=new IA,QK=new DC;class VB{constructor(A=new IA(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,B){return this.normal.set(A,I,g),this.constant=B,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const B=Ca.subVectors(g,I).cross(BK.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(B,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,I){const g=A.delta(Ca),B=this.normal.dot(g);if(B===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const i=-(A.start.dot(this.normal)+this.constant)/B;return i<0||i>1?null:I.copy(g).multiplyScalar(i).add(A.start)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||QK.getNormalMatrix(A),B=this.coplanarPoint(Ca).applyMatrix4(A),i=this.normal.applyMatrix3(g).normalize();return this.constant=-B.dot(i),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ZQ=new tt,co=new IA;class GD{constructor(A=new VB,I=new VB,g=new VB,B=new VB,i=new VB,o=new VB){this.planes=[A,I,g,B,i,o]}set(A,I,g,B,i,o){const t=this.planes;return t[0].copy(A),t[1].copy(I),t[2].copy(g),t[3].copy(B),t[4].copy(i),t[5].copy(o),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,B=g[0],i=g[1],o=g[2],t=g[3],D=g[4],a=g[5],s=g[6],n=g[7],h=g[8],k=g[9],w=g[10],r=g[11],G=g[12],l=g[13],J=g[14],d=g[15];return I[0].setComponents(t-B,n-D,r-h,d-G).normalize(),I[1].setComponents(t+B,n+D,r+h,d+G).normalize(),I[2].setComponents(t+i,n+a,r+k,d+l).normalize(),I[3].setComponents(t-i,n-a,r-k,d-l).normalize(),I[4].setComponents(t-o,n-s,r-w,d-J).normalize(),I[5].setComponents(t+o,n+s,r+w,d+J).normalize(),this}intersectsObject(A){const I=A.geometry;return I.boundingSphere===null&&I.computeBoundingSphere(),ZQ.copy(I.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(ZQ)}intersectsSprite(A){return ZQ.center.set(0,0,0),ZQ.radius=.7071067811865476,ZQ.applyMatrix4(A.matrixWorld),this.intersectsSphere(ZQ)}intersectsSphere(A){const I=this.planes,g=A.center,B=-A.radius;for(let i=0;i<6;i++)if(I[i].distanceToPoint(g)<B)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const B=I[g];if(co.x=B.normal.x>0?A.max.x:A.min.x,co.y=B.normal.y>0?A.max.y:A.min.y,co.z=B.normal.z>0?A.max.z:A.min.z,B.distanceToPoint(co)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dG(){let E=null,A=!1,I=null,g=null;function B(i,o){I(i,o),g=E.requestAnimationFrame(B)}return{start:function(){A!==!0&&I!==null&&(g=E.requestAnimationFrame(B),A=!0)},stop:function(){E.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(i){I=i},setContext:function(i){E=i}}}function EK(E,A){const I=A.isWebGL2,g=new WeakMap;function B(a,s){const n=a.array,h=a.usage,k=E.createBuffer();E.bindBuffer(s,k),E.bufferData(s,n,h),a.onUploadCallback();let w;if(n instanceof Float32Array)w=5126;else if(n instanceof Uint16Array)if(a.isFloat16BufferAttribute)if(I)w=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=5123;else if(n instanceof Int16Array)w=5122;else if(n instanceof Uint32Array)w=5125;else if(n instanceof Int32Array)w=5124;else if(n instanceof Int8Array)w=5120;else if(n instanceof Uint8Array)w=5121;else if(n instanceof Uint8ClampedArray)w=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+n);return{buffer:k,type:w,bytesPerElement:n.BYTES_PER_ELEMENT,version:a.version}}function i(a,s,n){const h=s.array,k=s.updateRange;E.bindBuffer(n,a),k.count===-1?E.bufferSubData(n,0,h):(I?E.bufferSubData(n,k.offset*h.BYTES_PER_ELEMENT,h,k.offset,k.count):E.bufferSubData(n,k.offset*h.BYTES_PER_ELEMENT,h.subarray(k.offset,k.offset+k.count)),k.count=-1)}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),g.get(a)}function t(a){a.isInterleavedBufferAttribute&&(a=a.data);const s=g.get(a);s&&(E.deleteBuffer(s.buffer),g.delete(a))}function D(a,s){if(a.isGLBufferAttribute){const h=g.get(a);(!h||h.version<a.version)&&g.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const n=g.get(a);n===void 0?g.set(a,B(a,s)):n.version<a.version&&(i(n.buffer,a,s),n.version=a.version)}return{get:o,remove:t,update:D}}class rD extends aB{constructor(A=1,I=1,g=1,B=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:B};const i=A/2,o=I/2,t=Math.floor(g),D=Math.floor(B),a=t+1,s=D+1,n=A/t,h=I/D,k=[],w=[],r=[],G=[];for(let l=0;l<s;l++){const J=l*h-o;for(let d=0;d<a;d++){const p=d*n-i;w.push(p,-J,0),r.push(0,0,1),G.push(d/t),G.push(1-l/D)}}for(let l=0;l<D;l++)for(let J=0;J<t;J++){const d=J+a*l,p=J+a*(l+1),y=J+1+a*(l+1),f=J+1+a*l;k.push(d,p,f),k.push(p,y,f)}this.setIndex(k),this.setAttribute("position",new NC(w,3)),this.setAttribute("normal",new NC(r,3)),this.setAttribute("uv",new NC(G,2))}static fromJSON(A){return new rD(A.width,A.height,A.widthSegments,A.heightSegments)}}var iK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,oK=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tK=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eK=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aK=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sK="vec3 transformed = vec3( position );",nK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hK=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,SK=`#ifdef USE_IRIDESCENCE
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
#endif`,GK=`#ifdef USE_BUMPMAP
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
#endif`,rK=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kK=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lK=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,MK=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,KK=`#define PI 3.141592653589793
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
}`,NK=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JK=`vec3 transformedNormal = objectNormal;
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
#endif`,RK=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FK=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,qK=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pK=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dK="gl_FragColor = linearToOutputTexel( gl_FragColor );",LK=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fK=`#ifdef USE_ENVMAP
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
#endif`,YK=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uK=`#ifdef USE_ENVMAP
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
#endif`,HK=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mK=`#ifdef USE_ENVMAP
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
#endif`,TK=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xK=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OK=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bK=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZK=`#ifdef USE_GRADIENTMAP
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
}`,vK=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,WK=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PK=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_K=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,jK=`uniform bool receiveShadow;
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
#endif`,VK=`#if defined( USE_ENVMAP )
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
#endif`,XK=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zK=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,$K=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AN=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,IN=`PhysicalMaterial material;
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
#endif`,gN=`struct PhysicalMaterial {
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
}`,CN=`
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
#endif`,BN=`#if defined( RE_IndirectDiffuse )
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
#endif`,QN=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,EN=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iN=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oN=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tN=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SN=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GN=`#ifdef USE_MORPHNORMALS
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
#endif`,rN=`#ifdef USE_MORPHTARGETS
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
#endif`,wN=`#ifdef USE_MORPHTARGETS
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
#endif`,cN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,kN=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,lN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MN=`#ifdef USE_NORMALMAP
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
#endif`,KN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,NN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,JN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,RN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		};
	#endif
