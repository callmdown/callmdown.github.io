"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[609],{5026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(4848),a=r(8453),o=r(1470),s=r(9365);const i={slug:"first-blog-post",title:"First Blog Post",authors:{name:"Gao Wei",title:"Docusaurus Core Team",url:"https://github.com/wgao19",image_url:"https://github.com/wgao19.png"},tags:["hola","docusaurus"]},l=void 0,u={permalink:"/blog/first-blog-post",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md",source:"@site/blog/2019-05-28-first-blog-post.md",title:"First Blog Post",description:"Dive into the world of knowledge with a captivating book \ud83d\udcda",date:"2019-05-28T00:00:00.000Z",tags:[{inline:!1,label:"Hola",permalink:"/blog/tags/hola",description:"Hola tag description"},{inline:!1,label:"Docusaurus",permalink:"/blog/tags/docusaurus",description:"Docusaurus tag description"}],readingTime:.765,hasTruncateMarker:!1,authors:[{name:"Gao Wei",title:"Docusaurus Core Team",url:"https://github.com/wgao19",image_url:"https://github.com/wgao19.png",imageURL:"https://github.com/wgao19.png"}],frontMatter:{slug:"first-blog-post",title:"First Blog Post",authors:{name:"Gao Wei",title:"Docusaurus Core Team",url:"https://github.com/wgao19",image_url:"https://github.com/wgao19.png",imageURL:"https://github.com/wgao19.png"},tags:["hola","docusaurus"]},unlisted:!1,prevItem:{title:"Long Blog Post",permalink:"/blog/long-blog-post"}},c={authorsImageUrls:[void 0]},d=[];function m(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.A,{children:[(0,n.jsx)(s.A,{value:"book",label:"Book",default:!0,children:(0,n.jsx)(t.p,{children:"Dive into the world of knowledge with a captivating book \ud83d\udcda"})}),(0,n.jsx)(s.A,{value:"painting",label:"Painting",children:(0,n.jsx)(t.p,{children:"Admire the strokes of artistry on a beautiful painting \ud83d\uddbc\ufe0f"})}),(0,n.jsx)(s.A,{value:"music",label:"Music",children:(0,n.jsx)(t.p,{children:"Let the soothing melodies of music transport you \ud83c\udfb6"})})]}),"\n",(0,n.jsx)(t.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="Line Numbers with Highlight" {4,9-11} showLineNumbers',children:"import React from 'react';\n\nfunction UserProfile(props) {\n  const { username, email, isAdmin } = props;\n\n  return (\n    <div>\n      <h1>User Profile</h1>\n      <p>Username: {username}</p>\n      <p>Email: {email}</p>\n      {isAdmin && <p>Admin User</p>}\n    </div>\n  );\n}\n\nexport default UserProfile;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Please take ",(0,n.jsx)(t.strong,{children:"extra caution"})," with this important note."]})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var o=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(6540),a=r(4164),o=r(3104),s=r(6347),i=r(205),l=r(7485),u=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:r,groupId:a}),[g,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=u??g;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function w(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function k(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(6540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);