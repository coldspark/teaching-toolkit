import{d as l,r as u,M as d,_ as p,J as c,K as m,L as o,N as a,j as s,Q as f,O as x,P as y,R as N,S as Q,U as g}from"./index-CsrCgYJL.js";import{Q as h}from"./QPage-DVNTBset.js";const n=l({emits:[],setup(){const t=u(""),e=d();async function i(){await e.push(`/quizzes/${t.value}`)}return{code:t,gotoQuiz:i}}}),z={extends:n,emits:n.emits,setup:n.setup,components:{}},_={class:"column justify-center items-center",style:{height:"100vh"}},v={class:"q-mt-sm column items-center q-gutter-y-xl"};function w(t,e,i,C,k,q){return c(),m(h,null,{default:o(()=>[a("div",_,[s(g,{style:{width:"96vw","max-width":"600px","border-radius":"20px",transform:"translateY(-100px)"}},{default:o(()=>[s(f,{class:"q-px-md q-py-lg"},{default:o(()=>[e[2]||(e[2]=a("div",{class:"text-h5 text-center"},"Teaching Toolkit Quiz",-1)),s(x,{spaced:""}),a("div",v,[s(y,{autofocus:"",outlined:"",modelValue:t.code,"onUpdate:modelValue":e[0]||(e[0]=r=>t.code=r),mask:"NNNNN-NNNNN","input-style":"font-size: 1.3em;",style:{width:"300px"},onKeyup:N(t.gotoQuiz,["enter"])},{before:o(()=>e[1]||(e[1]=[a("div",{class:"text-h6"},"Input Quiz Code",-1)])),_:1},8,["modelValue","onKeyup"]),s(Q,{label:"Go",size:"lg",color:"primary",style:{width:"180px"},onClick:t.gotoQuiz},null,8,["onClick"])])]),_:1})]),_:1})])]),_:1})}const $=p(z,[["render",w],["__file","IndexPage.vue"]]);export{$ as default};
