"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[712],{8356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(4848),r=t(8453);const s={title:"Codeblocks",sidebar_position:6},o=void 0,a={id:"getting started/codeblocks",title:"Codeblocks",description:"",source:"@site/docs/getting started/codeblocks.md",sourceDirName:"getting started",slug:"/getting started/codeblocks",permalink:"/docs/getting started/codeblocks",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting started/codeblocks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Codeblocks",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Alerts or Admonitions",permalink:"/docs/getting started/alerts"}},c={},l=[];function d(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title="Codeblock"',children:"function Greeting(props) {\n  return <p>Welcome, {props.userName}!</p>;\n}\n\nexport default Greeting;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title="Highlight Lines"',children:"function HighlightText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return 'This text is highlighted!';\n  }\n  return 'Nothing highlighted';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return 'This range is highlighted!';\n  }\n  // highlight-end\n  return 'Nothing highlighted';\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title="Line Numbers" showLineNumbers',children:"import React from 'react';\n\nfunction UserProfile(props) {\n  const { username, email, isAdmin } = props;\n\n  return (\n    <div>\n      <h1>User Profile</h1>\n      <p>Username: {username}</p>\n      <p>Email: {email}</p>\n      {isAdmin && <p>Admin User</p>}\n    </div>\n  );\n}\n\nexport default UserProfile;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title="Line Numbers with Highlight" {4,9-11} showLineNumbers',children:"import React from 'react';\n\nfunction UserProfile(props) {\n  const { username, email, isAdmin } = props;\n\n  return (\n    <div>\n      <h1>User Profile</h1>\n      <p>Username: {username}</p>\n      <p>Email: {email}</p>\n      {isAdmin && <p>Admin User</p>}\n    </div>\n  );\n}\n\nexport default UserProfile;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);