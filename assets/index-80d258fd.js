import{u as h,a as d,r,j as t}from"./index-9ffc07b6.js";import{a as u,M as m,L as x}from"./axios-0d6c854a.js";import{E as l}from"./index-de2161a2.js";import f from"./index-52eca773.js";const y=async()=>{try{const e={method:"GET",url:"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"};return(await u.request(e)).data.USD}catch(e){return console.log(e),"/"}},g=async()=>{try{const e={method:"GET",url:"https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD"};return(await u.request(e)).data.USD}catch(e){return console.log(e),"/"}},j=()=>{const[e,n]=r.useState(null),[s,a]=r.useState(null);return r.useEffect(()=>{const c=async()=>{const i=await y();n(i);const p=await g();a(p)};c();const o=setInterval(c,1e4);return()=>clearInterval(o)},[]),e===null&&s===null?t.jsx("div",{children:"Loading ETH & BTC Price..."}):e===null?t.jsx("div",{children:"Loading ETH Price..."}):s===null?t.jsx("div",{children:"Loading BTC Price..."}):t.jsxs("div",{children:["ETH Price: $",e,"     BTC Price: $",s]})},b=()=>{const e=[{label:"LANCET Balance Checker V1.0:   ",key:"check"},{label:"ETH",key:"eth"},{label:"BTC",key:"btc"},{label:t.jsx(j,{}),key:"ethPrice,btcPrice"}],n=h(),s=d(),[a,c]=r.useState(s.pathname.replace("/","")||"eth"),o=i=>{c(i.key)};return r.useEffect(()=>{c(s.pathname.replace("/","")||"eth")},[s.pathname]),r.useEffect(()=>{n(`/${a}`)},[a]),t.jsx(m,{onClick:o,selectedKeys:[a],mode:"horizontal",style:{display:"flex",justifyContent:"left"},className:"custom-menu",items:e})};function C(){const e=d();return t.jsx("div",{style:{backgroundColor:"#f0f2f5",minHeight:"100vh"},children:t.jsxs(x,{children:[t.jsx("div",{style:{position:"fixed",top:0,width:"100%",zIndex:1},children:t.jsx(b,{style:{backgroundColor:"#f0f2f5",borderBottom:"1px solid #e8e8e8",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.06)"}})}),t.jsx("div",{style:{minHeight:"85vh",backgroundColor:"#fff",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.06)",borderRadius:"4px",marginTop:"45px"},children:t.jsxs("div",{children:[e.pathname==="/"&&t.jsx(l,{}),e.pathname==="/eth"&&t.jsx(l,{}),e.pathname==="/btc"&&t.jsx(f,{})]})})]})})}export{C as default};
