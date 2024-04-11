import{_ as X}from"./layout-dashboard.vue_vue_type_script_setup_true_lang-1abb338a.js";import{_ as Y}from"./icon-pencil-55afd1ac.js";import{b as ee,r as se,u as te,a as oe,_ as ne}from"./phrase-with-parameters.vue_vue_type_script_setup_true_lang-89bcc67a.js";import{d as C,o as r,h as l,f as e,t as d,b as s,F as N,q as ae,c as M,u as t,T as re,r as u,v as le,y as ie,l as I,n as ce,w as c,p as L,e as de,E as ue,a as pe,Z as _e,i as me}from"./app-54f5516b.js";import{_ as he}from"./base-button.vue_vue_type_script_setup_true_lang-9b4004a2.js";import{_ as fe,a as j}from"./icon-key-b8af4e80.js";import{_ as xe,a as ge}from"./input-label.vue_vue_type_script_setup_true_lang-31ff44fd.js";import{_ as ve}from"./input-native-select.vue_vue_type_script_setup_true_lang-1b4b5ed0.js";import{_ as B}from"./flag.vue_vue_type_script_setup_true_lang-9bd3b03c.js";import{_ as be}from"./icon-arrow-left-295912af.js";import{_ as ye}from"./icon-arrow-right-1868f6fa.js";import{r as we}from"./XCircleIcon-4f66965e.js";import"./icon-publish-ea6e5819.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-cc2c6cac.js";import"./use-auth-19aa8579.js";import"./transition-619ce5c1.js";import"./icon-close-cc1f351d.js";import"./use-input-size-fbcbc48e.js";const Ce={class:"flex w-full flex-row divide-x"},ke={class:"mb-2 flex w-48 items-start px-4 py-3 md:w-80 xl:w-96"},$e={class:"flex w-full max-w-max overflow-hidden truncate rounded-md border"},ze=["textContent"],Ve={class:"flex flex-1 items-center px-3 py-2 text-base"},Se={key:0,class:"flex flex-wrap items-center gap-1"},Pe={key:1,class:"flex text-gray-600"},Ie=["href"],Le=C({__name:"similar-phrases-item",props:{phrase:{}},setup(b){return(o,n)=>{var f,x,g,v;const h=ee,p=Y;return r(),l("div",Ce,[e("div",ke,[e("div",$e,[e("span",{class:"flex cursor-pointer bg-white px-1 py-px text-sm text-gray-700 hover:bg-blue-50",textContent:d(o.phrase.key)},null,8,ze)])]),e("div",Ve,[(f=o.phrase)!=null&&f.value_html.length&&((g=(x=o.phrase)==null?void 0:x.value_html[0])!=null&&g.value)?(r(),l("div",Se,[s(h,{phrase:o.phrase.value_html},null,8,["phrase"])])):(r(),l("div",Pe,d(((v=o.phrase)==null?void 0:v.value)??"Not translated yet..."),1))]),e("a",{href:o.route("ltu.source_translation.edit",o.phrase.uuid),target:"_blank",class:"transition-color relative flex w-14 cursor-pointer items-center justify-center text-gray-400 duration-100 hover:bg-blue-100 hover:text-blue-600"},[s(p,{class:"inline-block size-5"})],8,Ie)])}}}),je={key:0,class:"flex flex-col divide-y"},Be={key:1,class:"relative flex size-full min-h-[250px]"},Ne={class:"absolute left-0 top-0 flex min-h-full w-full flex-col items-center justify-center backdrop-blur-sm"},Me=e("span",{class:"mt-4 text-gray-500"},"No similar phrases found...",-1),Te=C({__name:"similar-phrases",props:{similarPhrases:{}},setup(b){return(o,n)=>{const h=Le;return o.similarPhrases.data.length>0?(r(),l("div",je,[(r(!0),l(N,null,ae(o.similarPhrases.data,p=>(r(),M(h,{key:p.uuid,phrase:p},null,8,["phrase"]))),128))])):(r(),l("div",Be,[e("div",Ne,[s(t(se),{class:"size-12 text-gray-200"}),Me])]))}}}),Fe={class:"w-full bg-white shadow"},He={class:"mx-auto flex w-full max-w-7xl flex-row-reverse items-center justify-between gap-6 px-6 lg:px-8"},Ae={class:"flex w-full items-center"},De={class:"flex w-full items-center gap-3 py-4"},Ee={class:"h-5 shrink-0"},Ue={class:"flex items-center space-x-2"},Ze=["textContent"],We={class:"flex items-center gap-2 overflow-x-hidden rounded-md border border-blue-100 bg-blue-50 px-2 py-1 text-blue-500"},qe=["textContent"],Ge={class:"mx-auto max-w-7xl px-6 py-10 lg:px-8"},Ke={class:"flex w-full flex-col gap-8 lg:flex-row"},Re={class:"relative w-full overflow-hidden rounded-md bg-white shadow ring-2 ring-blue-100 focus-within:ring-blue-400"},Je={class:"flex items-center justify-between border-b px-4"},Oe={class:"flex gap-2 py-2.5"},Qe={class:"h-5 shrink-0"},Xe={class:"flex items-center space-x-2"},Ye=["textContent"],es=["textContent"],ss={key:0,class:"rounded-md border border-red-400 bg-red-50 px-3 py-1"},ts={class:"flex items-center gap-1"},os={class:"shrink-0"},ns={class:"text-sm text-red-700"},as={class:"flex h-[calc(100%-80px)]"},rs={class:"flex w-full items-center justify-center gap-4 border-t border-blue-200 px-4 py-1.5"},ls={class:"flex w-full items-center"},is={class:"text-xs text-gray-400"},cs=["disabled"],ds={class:"w-full overflow-hidden rounded-md bg-white shadow ring-2 ring-blue-100"},us={class:"flex min-h-[231px] flex-col p-4"},ps={class:"w-full space-y-1"},_s={class:"mt-4 w-full space-y-1"},ms={class:"grid grid-cols-2 border-t border-blue-200"},hs=e("span",{class:"flex w-auto"},"Save",-1),fs=e("span",{class:"hidden md:flex"},"Translation",-1),xs=e("div",{class:"relative flex size-full min-h-[250px] w-full items-center justify-center px-4 py-6"},[e("span",{class:"text-sm text-gray-500"},"Coming soon...")],-1),Fs=C({__name:"edit",props:{phrase:{},translation:{},source:{},similarPhrases:{},files:{}},setup(b){const o=b,n=re({note:o.phrase.note||u(""),phrase:o.phrase.value||u(""),file:o.phrase.translation_file_id||u("")}),h=()=>{n.post(route("ltu.source_translation.update",o.phrase.uuid),{onSuccess:()=>{n.reset()}})},p=le(()=>o.files.data.map(a=>({value:a.id,label:a.nameWithExtension}))),{convertLanguageCode:f}=oe(),x=u(1),g=u(1),v=o.phrase.value,_=f(o.translation.language.code),T=_||"en-US",F=u(void 0),y=te(v,{lang:T,pitch:g,rate:x});let k;const $=u([]);return ie(()=>{y.isSupported.value&&setTimeout(()=>{k=window.speechSynthesis,$.value=k.getVoices(),F.value=$.value[0]})}),(a,i)=>{const H=_e,A=B,w=me,D=ye,E=fe,U=be,Z=B,W=j,q=ne,z=xe,G=ve,V=ge,K=j,R=he,J=Te,S=I("tab"),O=I("tabs"),Q=X,P=ce("tooltip");return r(),l(N,null,[s(H,{title:"Translate"}),s(Q,null,{default:c(()=>[e("div",Fe,[e("div",He,[e("div",Ae,[e("div",De,[s(w,{href:a.route("ltu.source_translation"),class:"flex items-center gap-2 rounded-md border border-transparent bg-gray-50 px-2 py-1 hover:border-blue-400 hover:bg-blue-100"},{default:c(()=>[e("div",Ee,[s(A,{"country-code":a.translation.language.code,width:"w-5"},null,8,["country-code"])]),e("div",Ue,[e("div",{class:"text-sm font-semibold text-gray-600",textContent:d(a.translation.language.name)},null,8,Ze)])]),_:1},8,["href"]),e("div",null,[s(D,{class:"size-6 text-gray-400"})]),e("div",We,[s(E,{class:"size-4 hidden md:block"}),e("span",{class:"text-sm truncate",textContent:d(a.phrase.key)},null,8,qe)])])]),L((r(),M(w,{href:a.route("ltu.source_translation"),class:"flex size-8 items-center justify-center rounded-full bg-gray-100 p-1 hover:bg-gray-200"},{default:c(()=>[s(U,{class:"size-6 text-gray-400"})]),_:1},8,["href"])),[[P,"Go back"]])])]),e("div",Ge,[e("div",Ke,[e("div",Re,[e("div",Je,[e("div",Oe,[e("div",Qe,[s(Z,{"country-code":a.translation.language.code},null,8,["country-code"])]),e("div",Xe,[e("div",{class:"text-sm font-semibold text-gray-800",textContent:d(a.translation.language.name)},null,8,Ye),e("div",{class:"rounded-md border px-1.5 py-0.5 text-xs text-gray-500",textContent:d(a.translation.language.code)},null,8,es)])]),t(n).errors.phrase?(r(),l("div",ss,[e("div",ts,[e("div",os,[s(t(we),{class:"size-5 text-red-400","aria-hidden":"true"})]),e("div",ns,d(t(n).errors.phrase),1)])])):de("",!0)]),e("div",as,[s(W,{id:"textArea",modelValue:t(n).phrase,"onUpdate:modelValue":i[0]||(i[0]=m=>t(n).phrase=m),rows:"7",autofocus:"",class:"size-full resize-none rounded-none border-none px-4 py-2.5 shadow-none ring-transparent focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"},null,8,["modelValue"])]),e("div",rs,[e("div",ls,[e("span",is,"Characters Length: "+d(t(n).phrase.length),1)]),L((r(),l("button",{class:ue(["flex size-6 shrink-0 items-center justify-center text-gray-400",{"cursor-not-allowed opacity-50":!t(_),"hover:text-gray-700":t(_)}]),disabled:!t(_)&&!t(y).isPlaying.value,onClick:i[1]||(i[1]=m=>t(_)&&t(y).speak())},[s(q,{class:"size-5"})],10,cs)),[[P,t(_)?"Speak":"Language not supported"]])])]),e("div",ds,[e("div",us,[e("div",ps,[s(z,{for:"file",value:"File"}),s(G,{id:"file",modelValue:t(n).file,"onUpdate:modelValue":i[2]||(i[2]=m=>t(n).file=m),size:"md",error:t(n).errors.file,items:p.value},null,8,["modelValue","error","items"]),s(V,{message:t(n).errors.file},null,8,["message"])]),e("div",_s,[s(z,{for:"note",value:"Translation note"}),s(K,{id:"note",modelValue:t(n).note,"onUpdate:modelValue":i[3]||(i[3]=m=>t(n).note=m),size:"md",rows:"3",class:"resize-none",error:t(n).errors.note,placeholder:"Add a note to this translation"},null,8,["modelValue","error"]),s(V,{message:t(n).errors.note},null,8,["message"])])]),e("div",ms,[s(w,{href:a.route("ltu.source_translation"),class:"flex items-center justify-center bg-blue-50 py-4 text-sm font-medium uppercase text-blue-600 hover:bg-blue-100"},{default:c(()=>[pe(" Cancel ")]),_:1},8,["href"]),s(R,{"is-loading":t(n).processing,variant:"primary",class:"items-center rounded-none py-4 !text-sm !font-medium uppercase",onClick:h},{default:c(()=>[hs,fs]),_:1},8,["is-loading"])])])]),s(O,null,{default:c(()=>[s(S,{prefix:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 3.33334C8.81665 3.33334 5.83331 6.31668 5.83331 10C5.83331 13.6833 8.81665 16.6667 12.5 16.6667C16.1833 16.6667 19.1666 13.6833 19.1666 10C19.1666 6.31668 16.1833 3.33334 12.5 3.33334ZM12.5 15C9.74165 15 7.49998 12.7583 7.49998 10C7.49998 7.24168 9.74165 5.00001 12.5 5.00001C15.2583 5.00001 17.5 7.24168 17.5 10C17.5 12.7583 15.2583 15 12.5 15ZM5.83331 5.29168C3.89165 5.97501 2.49998 7.82501 2.49998 10C2.49998 12.175 3.89165 14.025 5.83331 14.7083V16.45C2.95831 15.7083 0.833313 13.1083 0.833313 10C0.833313 6.89168 2.95831 4.29168 5.83331 3.55001V5.29168Z"></path></svg>',name:"Similar"},{default:c(()=>[s(J,{"similar-phrases":a.similarPhrases},null,8,["similar-phrases"])]),_:1}),s(S,{name:"History",prefix:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"/></svg>'},{default:c(()=>[xs]),_:1})]),_:1})])]),_:1})],64)}}});export{Fs as default};