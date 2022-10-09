import{r as e,a as t,o as a,c as l,w as o,b as r,V as s,d as n,e as c,f as u,K as i,g as d,h as m,i as p,j as f,k as v,l as y,m as h,n as g,t as b,F as _,p as x,q as k,s as w,u as C,v as T,x as A,y as E,z as U,A as R,L as P,B as V,C as B,D as S,E as L,G as $,H as D,I,J as F,M,N as X,O,P as j,Q as G,R as K,S as W,T as N,U as z,W as Z,X as H,Y,Z as q,_ as J,$ as Q,a0 as ee,a1 as te,a2 as ae,a3 as le,a4 as oe,a5 as re,a6 as se,a7 as ne,a8 as ce,a9 as ue,aa as ie,ab as de,ac as me,ad as pe,ae as fe,af as ve,ag as ye}from"./vendor.87ffc0c1.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const he={__name:"app",setup(E){const U=e([{icon:w,text:"文本处理",to:"/text"},{icon:C,text:"图片处理",to:"/image"},{icon:T,text:"　关于　",to:"/about"}]),R=matchMedia("(prefers-color-scheme: dark)"),P=t(R.matches?"dark":"light");return R.addListener((e=>P.value=e.matches?"dark":"light")),(e,t)=>{const w=A("router-view");return a(),l(k,{theme:P.value,style:{"min-height":"100vh"}},{default:o((()=>[r(c,{color:"primary"},{default:o((()=>[r(s,null,{default:o((()=>[n("聊天消息处理工具")])),_:1})])),_:1}),r(p,{style:{"padding-bottom":"72px"}},{default:o((()=>[r(u,{style:{"max-width":"1024px"}},{default:o((()=>[r(w,null,{default:o((({Component:t})=>[(a(),l(i,null,[e.$route.meta.keepAlive?(a(),l(d(t),{key:e.$route.fullPath})):m("",!0)],1024)),e.$route.meta.keepAlive?m("",!0):(a(),l(d(t),{key:0}))])),_:1})])),_:1})])),_:1}),r(x,{app:"",fixed:"",bottom:"",left:"",right:"",class:"pa-0"},{default:o((()=>[r(f,{"bg-color":"primary",centered:"",stacked:"","fixed-tabs":"",style:{width:"100%"},"model-value":U.findIndex((t=>t.to===e.$route.path))},{default:o((()=>[(a(!0),v(_,null,y(U,(e=>(a(),l(h,{key:e.to,to:e.to},{default:o((()=>[r(g,{icon:e.icon,size:"x-large"},null,8,["icon"]),n(b(e.text),1)])),_:2},1032,["to"])))),128))])),_:1},8,["model-value"])])),_:1})])),_:1},8,["theme"])}}},ge=E({theme:{variations:{colors:["primary","secondary"],lighten:2,darken:2},themes:{light:{colors:{primary:"#0288d1",secondary:"#00b0ff"}},dark:{dark:!0,colors:{primary:"#0288d1",secondary:"#00b0ff"}}}},icons:{defaultSet:"mdi",aliases:U,sets:{mdi:R}}}),be=new TextEncoder,_e=new TextDecoder,xe="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~",ke=xe.split("").reduce(((e,t,a)=>(e[t]=a,e)),{}),we={A:"ΑА",B:"ΒⲂВ",C:"ϹⲤС",E:"ΕЕ",H:"ΗНН",I:"ӀΙӏ",J:"Ϳ",K:"ΚⲔК",M:"ΜϺМ",N:"ΝⲚ",O:"ΟО",P:"ΡⲢР",Q:"Ԛ",T:"ΤТ",V:"Ѵ",W:"Ԝ",X:"ΧⲬХ",Y:"ΥⲨҮ",Z:"Ζ",a:"а",c:"ϲс",d:"ԁ",e:"е",i:"і",j:"ϳј",o:"οо",p:"р",q:"ԛ",s:"ѕ",v:"νѵ",w:"ԝ",x:"х",y:"у"},Ce=Object.entries(we).reduce(((e,[t,a])=>{for(const l of a)e[l]=t;return e}),{}),Te="滅苦婆娑耶陀跋多漫都殿悉夜爍帝吉利阿無南那怛喝羯勝摩伽謹波者穆僧室藝尼瑟地彌菩提蘇醯盧呼舍佛參沙伊隸麼遮闍度蒙孕薩夷迦他姪豆特逝朋輸楞栗寫數曳諦羅曰咒即密若般故不實真訶切一除能等是上明大神知三藐耨得依諸世槃涅竟究想夢倒顛離遠怖恐有礙心所以亦智道。集盡死老至",Ae=Te.split("").reduce(((e,t,a)=>(e[t]=a,e)),{}),Ee=new P(be.encode("XDXDtudou@KeyFansClub^_^Encode!!"),be.encode("Potato@Key@_@=_=")),Ue=e=>e[Math.floor(Math.random()*e.length)],Re=e=>btoa(String.fromCharCode.apply(null,e)),Pe=e=>new Uint8Array(atob(e).split("").map((e=>e.charCodeAt()))),Ve=e=>{const t=4-(e.length%4||4),a=new Uint8Array(e.length+t);a.set(e);let l="";for(let o=0;o<a.length;o+=4){let e=0;for(let l=0;l<4;l++)e|=a[o+l]<<(3-l<<3),e>>>=0;let t="";for(let a=0;a<5;a++){let a=e%85;e=(e-a)/85,t=xe[a]+t}l+=t}return l.substring(0,l.length-t)},Be=e=>{const t=5-(e.length%5||5);e+="~".repeat(t);const a=new Uint8Array(e.length/5*4-t);for(let l=0,o=0;l<e.length;l+=5,o+=4){let t=0,r=52200625;for(let a=0;a<5;a++)t+=r*ke[e[l+a]],r/=85;for(let e=0;e<4;e++)a[o+e]=t>>(3-e<<3)}return a},Se=e=>{let t="";for(let a=0;a<e.length;a++)t+=e[a].toString(16).padStart(2,0);return t},Le=e=>{const t=e.match(/[\da-f]{2}/gi),a=t.length,l=new Uint8Array(a);for(let o=0;o<a;o++)l[o]=parseInt(t[o],16);return l},$e=e=>{for(const[t,a]of Object.entries(we))e=e.replace(new RegExp(t,"g"),Ue(a));return e},De=e=>{for(const[t,a]of Object.entries(Ce))e=e.replace(new RegExp(t,"g"),a);return e},Ie=e=>{let t="";for(let a=0;a<e.length;a++)a&&(t+=Ue("​‌‍‎‪‬‭\ufeff")),t+=e[a];return t},Fe=e=>{let t="";for(let a=0;a<e.length;a++){if(a){const e=Math.floor(4*Math.random());for(let a=0;a<e;a++)t+=Ue("​‌‍‎‪‬‭\ufeff")}t+=e[a]}return t},Me=e=>e.replace(new RegExp("[​‌‍‎‪‬‭\ufeff]","g"),""),Xe=V,Oe=B,je=S,Ge=X("div",{class:"text-h5 text-primary mb-2"},"文本处理",-1),Ke=X("div",{class:"text-body-1"},[X("p",{class:"my-2"},"Base 系列编码使用可打印字符来表示二进制数据，普遍应用于在处理文本数据的环境下存储和传输二进制数据的场景。"),X("p",{class:"my-2"},"Base64 是最常用的编码方式之一，使用了大小写英文字母、数字及符号 + 和 / 共 64 种字符，每 4 个字符表示 3 个字节的数据。Base85 则是另一种更紧凑的编码方式，使用了更多的符号，每 5 个字符表示 4 个字节的数据。")],-1),We=X("div",{class:"text-body-1"},[X("p",{class:"my-2"},"文本混淆的目标是在不影响阅读的情况下，避免通过查找字符串的方式直接搜索到敏感词。"),X("p",{class:"my-2"},[n("对于英文字母，可以用形状相同的希腊字母和西里尔字母替代。另一个更通用的方法则是随机在文本中插入 "),X("code",null,"U+200B"),n(" 等 Unicode 中的不可见字符。")])],-1),Ne=X("div",{class:"text-body-1"},[X("p",{class:"my-2"},[n("“与佛论禅”是 "),X("a",{class:"text-secondary",href:"https://www.keyfc.net/",target:"_blank",rel:"noopener noreferrer"},"KeyFansClub"),n(" 论坛的用户创造的编码方式，原版工具在"),X("a",{class:"text-secondary",href:"https://www.keyfc.net/bbs/tools/tudoucode.aspx",target:"_blank",rel:"noopener noreferrer"},"这里"),n("。")]),X("p",{class:"my-2"},[n("编码方式参考自"),X("a",{class:"text-secondary",href:"https://github.com/lersh/TudouCode/blob/master/TudouSharp/Tudou.cs",target:"_blank",rel:"noopener noreferrer"},"这里"),n("，简单的介绍如下：")]),X("ol",{class:"my-2 pl-6"},[X("li",null,"预定义两个数组，数组 A 包含 128 个汉字，数组 B 包含 12 个汉字。"),X("li",null,[n("对文本的 UTF-16 LE 编码使用 "),X("abbr",{title:"Mode: CBC, Key: XDXDtudou@KeyFansClub^_^Encode!! IV: Potato@Key@_@=_= Padding: PKCS #7"},"AES 算法"),n("加密。")]),X("li",null,[n("将加密后的每个字节"),X("abbr",{title:"记这个字节为 x，伪代码：((x & 0x80) ? B[random] : '') + A[x & 0x7F]"},"映射"),n("到对应的汉字。")])]),X("p",{class:"my-2"},"这里只支持“佛曰”开头的原版与佛论禅，不支持“如是我闻”开头的压缩版或其它的各种“重制版”“新版”等等。")],-1),ze=X("div",{class:"text-body-1"},[X("p",{class:"my-2"},[n("一种简单的聊天消息文本端对端加密体制。双方生成密钥对后，将自己的公钥发给对方，并在这里填入对方的公钥，即可开始以加密的方式交换信息。密钥对格式均为 "),X("code",null,"/^[\\da-f]{64}$/"),n("。")]),X("ol",{class:"my-2 pl-6"},[X("li",null,"使用 X25519 椭圆曲线算法进行密钥交换，得到 32 字节的共享密钥。考虑到我们可以相信聊天时对方为本人且消息不会被篡改，因此对公钥进行的签名验证被省略了。"),X("li",null,[n("对共享密钥使用 "),X("abbr",{title:"Salt: akarin.dev, Iteration: 65536"},"PBKDF2-SHA256 算法"),n("扩展为 64 字节。")]),X("li",null,"使用 ChaCha20-Poly1305 算法对消息进行加密。扩展后密钥的前 32 字节作为密钥，后 32 字节作为验证用的附加数据。每次加密时另外生成 12 字节的随机数。"),X("li",null,"加密后的消息按照顺序由 12 字节的随机数、16 字节的认证码和加密后的消息正文组成，最后使用 Base85 进行编码。")]),X("p",{class:"my-2"},[n("这套体制尝试实现前向保密，因此"),X("strong",null,"密钥对需要随用随弃"),n("。只要不泄露临时使用的私钥，即使将加密后的聊天记录公开（无论是主动或被动），他人也无法获得消息的明文内容。"),X("strong",null,"加密操作全部在前端完成，本工具不会保存或上传你的密钥对及消息内容。")]),X("p",{class:"my-2"},[n("如果你需要一个更加安全的加密方案，可以考虑使用 "),X("a",{class:"text-secondary",href:"https://zh.wikipedia.org/wiki/PGP",target:"_blank",rel:"noopener noreferrer"},"PGP"),n("。但是 PGP 不支持前向保密，私钥将被长期使用且需要小心保护，否则被截获的所有通信内容都可以使用泄漏的私钥解密。另一个缺点是，一条带有签名的 PGP 加密消息实在是太长了……即使是最短的消息也会占据你的大半个手机屏幕。")])],-1),Ze={__name:"text",setup(e){const{$toast:l}=L().appContext.config.globalProperties,s=t(null),c=t(""),u=()=>navigator.clipboard.readText?navigator.clipboard.readText().then((e=>c.value=e)):l.error("你的浏览器不支持读取剪贴板数据，请手动在文本框中粘贴"),i=()=>navigator.clipboard.writeText(c.value).then((()=>l.success("已复制到剪贴板"))),d=["命由己造，相由心生","心不动，万物皆不动","心不变，万物皆不变","坐亦禅，行亦禅","一花一世界，一叶一如来","春来花自青，秋至叶飘零","无穷般若心自在，语默动静体自然","悠然，随心，随性，随缘","刹那便是永恒","无悲无喜无梦无幻，无爱无恨四大皆空","不能了，不能悟，不能舍，不能弃","参不透，舍不得","不可说，不可说，一说即是错","一念愚即般若绝，一念智即般若生","菩提本无树，明镜亦非台","本来无一物，何处惹尘埃","一即一切，一切即一","刹那便是永恒","种如是因，收如是果，一切唯心造","人无善恶，善恶存乎尔心"],m=()=>{c.value=(e=>{let t="佛曰：";const a=Ee.encrypt(P.MODE_CBC,P.utils.pkcs7Pad((e=>{const t=new Uint8Array(2*e.length);for(let a=0;a<e.length;a++){const l=e.charCodeAt(a);t[a<<1]=l,t[1+(a<<1)]=l>>8}return t})(e)));for(let l=0;l<a.length;l++){const e=a[l];t+=e>>7?Ue("冥奢梵呐俱哆怯諳罰侄缽皤")+Te[127&e]:Te[e]}return t})(c.value),l.success(Ue(d)+"（编码成功）")},p=()=>{try{c.value=(e=>{if(!e.match(new RegExp(`^佛曰：(([冥奢梵呐俱哆怯諳罰侄缽皤]?[${Te}]){16})*$`)))throw new Error;e=e.substring(3);const t=[];for(let a=0;a<e.length;a++){const l=e[a];"冥奢梵呐俱哆怯諳罰侄缽皤".includes(l)?(a++,t.push(128|Ae[e[a]])):t.push(Ae[l])}return(e=>{let t="";for(let a=0;a<e.length;a+=2)t+=String.fromCharCode(e[a]|e[a+1]<<8);return t})(P.utils.pkcs7Strip(Ee.decrypt(P.MODE_CBC,new Uint8Array(t))))})(c.value),l.success(Ue(d)+"（解码成功）")}catch(e){l.error("太深奥了，参悟不出佛经的真意……（请检查文本是否正确）"),console.log(e)}},y=e=>!!e.match(/^[\da-f]{64}$/),b=t(null),x=t(""),k=t(!0);$(x,(e=>Y((()=>y(e)&&(b.value=Le(e))))));const w=D((()=>b.value?Se(q.getPublic(b.value)):null)),C=t(null),T=t("");let A;$(T,(e=>Y((()=>y(e)&&(C.value=Le(e))))));const E=D((()=>b.value&&C.value?(y(x.value)||(x.value=Se(b.value)),y(T.value)||(T.value=Se(C.value)),A=null,q.getShared(b.value,C.value)):null)),U=be.encode("akarin.dev"),R=()=>x.value=Se(b.value=crypto.getRandomValues(new Uint8Array(32))),V=()=>{if(!E.value)return l.warning("请输入有效的密钥");const e=performance.now();A||(A=J(E.value,U,65536,64));const t=crypto.getRandomValues(new Uint8Array(12)),a=new Q(A.subarray(0,32),t,A.subarray(32,64)),o=a.encrypt(be.encode(c.value)),r=new Uint8Array(o.length+12+16);r.set(t),r.set(a.mac(),12),r.set(o,28),c.value=Ve(r),l.success(`加密成功，耗时：${Math.round(100*(performance.now()-e))/100}ms`)},B=()=>{if(!E.value)return l.warning("请输入有效的密钥");const e=performance.now();A||(A=J(E.value,U,65536,64));const t=Be(c.value),a=t.subarray(0,12),o=t.subarray(12,28),r=t.subarray(28),s=new Q(A.subarray(0,32),a,A.subarray(32,64)),n=s.decrypt(r);if(!s.verify(o))return l.error("解密失败，请检查密钥及密文是否正确且保持完整未被篡改");c.value=_e.decode(n),l.success(`解密成功，耗时：${Math.round(100*(performance.now()-e))/100}ms`)},S=()=>w.value&&navigator.clipboard.writeText(w.value).then((()=>l.info("已将公钥复制到剪贴板")));return(e,t)=>(a(),v(_,null,[Ge,r(I,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=e=>c.value=e),label:"需要处理的文本",row:"6",variant:"solo",counter:"","no-resize":"","hide-details":"",color:"primary",class:"my-4"},null,8,["modelValue"]),r(F,{dense:"",class:"my-2"},{default:o((()=>[r(O,{cols:"6"},{default:o((()=>[r(j,{top:"",text:"请允许读取剪贴板，某些浏览器可能不支持"},{activator:o((({props:e})=>[r(G,K({color:"primary",block:""},e,{onClick:u}),{default:o((()=>[r(g,{icon:W(ee)},null,8,["icon"]),n("从剪贴板粘贴 ")])),_:2},1040)])),_:1})])),_:1}),r(O,{cols:"6"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:i},{default:o((()=>[r(g,{icon:W(te)},null,8,["icon"]),n("复制到剪贴板 ")])),_:1})])),_:1})])),_:1}),r(f,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),color:"primary","show-arrows":"","center-active":"",class:"my-2"},{default:o((()=>[r(h,null,{default:o((()=>[n("Base 编码")])),_:1}),r(h,null,{default:o((()=>[n("文本混淆")])),_:1}),r(h,null,{default:o((()=>[n("与佛论禅")])),_:1}),r(h,null,{default:o((()=>[n("消息加密")])),_:1})])),_:1},8,["modelValue"]),r(M,{modelValue:s.value,"onUpdate:modelValue":t[16]||(t[16]=e=>s.value=e),class:"my-2"},{default:o((()=>[r(N,null,{default:o((()=>[r(F,{dense:""},{default:o((()=>[r(O,{cols:"6",sm:"3"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:t[2]||(t[2]=e=>c.value=W(Re)(W(be).encode(c.value)))},{default:o((()=>[n("Base64 编码")])),_:1})])),_:1}),r(O,{cols:"6",sm:"3"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:t[3]||(t[3]=e=>c.value.match(/^(?:[A-Za-z\d+/])*(?:[A-Za-z\d+/]{2}==|[A-Za-z\d+/]{3}=)?$/)?c.value=W(_e).decode(W(Pe)(c.value)):W(l).warning("不是有效的 Base64 数据"))},{default:o((()=>[n("Base64 解码")])),_:1})])),_:1}),r(O,{cols:"6",sm:"3"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:t[4]||(t[4]=e=>c.value=W(Ve)(W(be).encode(c.value)))},{default:o((()=>[n("Base85 编码")])),_:1})])),_:1}),r(O,{cols:"6",sm:"3"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:t[5]||(t[5]=e=>{c.value.match(/^[\dA-Za-z!#$%&()*+-;<=>?@^_`{|}~]*$/)?c.value=W(_e).decode(W(Be)(c.value)):W(l).warning("不是有效的 Base85 数据")})},{default:o((()=>[n("Base85 解码")])),_:1})])),_:1})])),_:1}),r(z,{class:"my-4"}),Ke])),_:1}),r(N,null,{default:o((()=>[r(F,{dense:""},{default:o((()=>[r(O,{cols:"6"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:t[6]||(t[6]=e=>(c.value=W($e)(c.value))&&W(l).success("替换成功"))},{default:o((()=>[n("英文字母替换")])),_:1})])),_:1}),r(O,{cols:"6"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:t[7]||(t[7]=e=>(c.value=W(De)(c.value))&&W(l).success("恢复成功"))},{default:o((()=>[n("英文字母恢复")])),_:1})])),_:1}),r(O,{cols:"12",sm:"4"},{default:o((()=>[r(j,{top:"",text:"每两个字符中间固定添加一个"},{activator:o((({props:e})=>[r(G,K({color:"primary",block:""},e,{onClick:t[8]||(t[8]=e=>(c.value=W(Ie)(c.value))&&W(l).success("添加成功"))}),{default:o((()=>[n("插入不可见字符（分隔连接）")])),_:2},1040)])),_:1})])),_:1}),r(O,{cols:"12",sm:"4"},{default:o((()=>[r(j,{top:"",text:"每两个字符中间随机添加 0-3 个"},{activator:o((({props:e})=>[r(G,K({color:"primary",block:""},e,{onClick:t[9]||(t[9]=e=>(c.value=W(Fe)(c.value))&&W(l).success("添加成功"))}),{default:o((()=>[n("插入不可见字符（随机添加）")])),_:2},1040)])),_:1})])),_:1}),r(O,{cols:"12",sm:"4"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:t[10]||(t[10]=e=>(c.value=W(Me)(c.value))&&W(l).success("清除成功"))},{default:o((()=>[n("清除不可见字符")])),_:1})])),_:1})])),_:1}),r(z,{class:"my-4"}),We])),_:1}),r(N,null,{default:o((()=>[r(F,{dense:""},{default:o((()=>[r(O,{cols:"12",sm:"6"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:m},{default:o((()=>[n("听佛说宇宙的真谛（编码）")])),_:1})])),_:1}),r(O,{cols:"12",sm:"6"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:p},{default:o((()=>[n("参悟佛所言的真意（解码）")])),_:1})])),_:1})])),_:1}),r(z,{class:"my-4"}),Ne])),_:1}),r(N,null,{default:o((()=>[r(F,{dense:""},{default:o((()=>[r(O,{cols:"6"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:V},{default:o((()=>[n("消息加密")])),_:1})])),_:1}),r(O,{cols:"6"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:B},{default:o((()=>[n("消息解密")])),_:1})])),_:1}),r(O,{cols:"12"},{default:o((()=>[r(Z,{label:"自己的私钥",color:"primary",density:"comfortable",ref:"privateKeyElement",type:k.value?"password":"text",onFocus:t[11]||(t[11]=e=>k.value=!1),onBlur:t[12]||(t[12]=e=>k.value=!0),modelValue:x.value,"onUpdate:modelValue":t[13]||(t[13]=e=>x.value=e),"hide-details":""},{append:o((()=>[r(G,{color:"primary",variant:"text",onClick:R},{default:o((()=>[n("生成")])),_:1})])),_:1},8,["type","modelValue"])])),_:1}),r(O,{cols:"12",sm:"6"},{default:o((()=>[r(Z,{label:"自己的公钥",hint:"根据私钥自动计算",color:"primary",density:"comfortable",readonly:"",modelValue:W(w),"onUpdate:modelValue":t[14]||(t[14]=e=>H(w)?w.value=e:null),"hide-details":""},{append:o((()=>[r(G,{color:"primary",variant:"text",onClick:S},{default:o((()=>[n("复制")])),_:1})])),_:1},8,["modelValue"])])),_:1}),r(O,{cols:"12",sm:"6"},{default:o((()=>[r(Z,{label:"对方的公钥",color:"primary",density:"comfortable",ref:"otherKeyElement",modelValue:T.value,"onUpdate:modelValue":t[15]||(t[15]=e=>T.value=e),"hide-details":""},null,8,["modelValue"])])),_:1})])),_:1}),r(z,{class:"my-4"}),ze])),_:1})])),_:1},8,["modelValue"])],64))}},He=X("div",{class:"text-h5 text-primary mb-2"},"图片处理",-1),Ye={class:"d-flex justify-center align-center"},qe=X("span",{class:"text-medium-emphasis"},"处理中……",-1),Je=oe('<div class="text-body-1"><p class="my-2">使用<abbr title="xoshiro128**">伪随机数生成算法</abbr>，将图片以 16x16 的小块为单位打乱或还原。</p><p class="my-2">打乱图片前会随机生成种子，和图片的尺寸（向下取整为 16 的倍数）一起记录为<abbr title="s=&lt;seed&gt;&amp;w=&lt;width&gt;&amp;=&lt;height&gt;">处理参数</abbr>，请将处理参数和打乱后的图片一起发送。反之，输入打乱时使用的处理参数就可以将图片还原了。</p><p class="my-2">为了保证处理速度，混淆/还原操作是使用 WebAssembly 和 WebGL 实现的。在桌面端处理一张 2560x1920 的图片的耗时为 500ms 左右。</p><p class="my-2">如果对打乱后的图片进行了额外的缩放或压缩，还原后的图片会有格子形状的痕迹，这是正常现象。</p></div>',1),Qe=["href","download"],et={__name:"image",setup(e){const{$toast:s}=L().appContext.config.globalProperties,c=t(""),u=t(!1),i=t(null),d=t(""),p=t(null),f=t(null),y=t("");$(d,((e,t)=>URL.revokeObjectURL(t)||(y.value=Date.now()))),ae((()=>p.value.onchange=async e=>{URL.revokeObjectURL(d.value);const t=URL.createObjectURL(e.target.files[0]),a=await new Promise(((e,a)=>{const l=new Image;l.src=t,l.onload=()=>e(l),l.reject=a}));d.value=(i.value=a).src}));const h=document.createElement("canvas"),b=h.getContext("webgl"),x=b.createShader(b.VERTEX_SHADER),k=b.createShader(b.FRAGMENT_SHADER),w=b.createProgram();b.shaderSource(x,"precision mediump float;attribute vec2 a_Position;attribute vec2 a_Uv;varying vec2 v_Uv;void main(){gl_Position=vec4(a_Position,0,1);v_Uv=a_Uv;}"),b.compileShader(x),b.shaderSource(k,"precision mediump float;uniform sampler2D u_Texture;varying vec2 v_Uv;void main(){gl_FragColor=texture2D(u_Texture,v_Uv);gl_FragColor.rgb*=gl_FragColor.a;}"),b.compileShader(k),b.attachShader(w,x),b.attachShader(w,k),b.linkProgram(w),b.useProgram(w);const C=b.getUniformLocation(w,"u_Texture"),T=b.getAttribLocation(w,"a_Position"),A=b.getAttribLocation(w,"a_Uv");b.enableVertexAttribArray(T),b.enableVertexAttribArray(A);const E=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,E),b.vertexAttribPointer(T,2,b.FLOAT,!1,16,0),b.vertexAttribPointer(A,2,b.FLOAT,!1,16,8);const U=b.createTexture();b.activeTexture(b.TEXTURE0),b.bindTexture(b.TEXTURE_2D,U),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE),b.uniform1i(C,0);const R=async e=>{const t=performance.now();let a,l,o;if(e){const e=new URLSearchParams(c.value);if(!(["s","w","h"].every((t=>e.has(t)))&&e.get("w").match(/^\d+$/)&&e.get("h").match(/^\d+$/)&&e.get("s").match(/^[\da-f]{32}$/)))return s.warning("请输入有效的处理参数");a=parseInt(e.get("w")),l=parseInt(e.get("h")),o=new Uint32Array([0,1,2,3].map((t=>parseInt(e.get("s").substring(t<<3,t+1<<3),16))))}else a=-16&i.value.width,l=-16&i.value.height,o=crypto.getRandomValues(new Uint32Array(4)),c.value=new URLSearchParams([["s",Array.from(o).map((e=>e.toString(16).padStart(8,0))).join("")],["w",a],["h",l]]).toString();u.value=!0;let r=Xe(o,(a>>4)*(l>>4));console.log([...r]),e&&(r=Oe(r),console.log([...r]));const n=i.value,m=je(n.width,n.height,a,l,r);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,n),b.bufferData(b.ARRAY_BUFFER,m,b.STATIC_DRAW),h.width=a,h.height=l,b.viewport(0,0,h.width,h.height),b.drawArrays(b.TRIANGLES,0,m.length>>2);const p=await new Promise((e=>h.toBlob(e))),f=URL.createObjectURL(p);i.value=await new Promise(((e,t)=>{const a=new Image;a.src=f,a.onload=()=>e(a),a.onerror=t})),d.value=f,u.value=!1,s.success(`处理成功，耗时：${Math.round(100*(performance.now()-t))/100}ms`)},P=()=>c.value&&navigator.clipboard.writeText(c.value).then((()=>s.info("已将处理参数复制到剪贴板")));return(e,t)=>(a(),v(_,null,[He,r(G,{color:"primary",block:"",onClick:t[0]||(t[0]=e=>p.value.click())},{default:o((()=>[r(g,{icon:W(se)},null,8,["icon"]),n("打开图片 ")])),_:1}),d.value?(a(),v(_,{key:0},[r(le,{class:"my-2","max-height":"360",src:d.value,transition:null},null,8,["src"]),r(F,{dense:"",class:"my-2"},{default:o((()=>[u.value?(a(),l(O,{key:0,cols:"12"},{default:o((()=>[X("div",Ye,[r(re,{indeterminate:"",color:"primary",class:"mr-2"}),qe])])),_:1})):(a(),v(_,{key:1},[r(O,{cols:"6"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:t[1]||(t[1]=e=>R(!1))},{default:o((()=>[r(g,{icon:W(ne)},null,8,["icon"]),n("打乱图片 ")])),_:1})])),_:1}),r(O,{cols:"6"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:t[2]||(t[2]=e=>R(!0))},{default:o((()=>[r(g,{icon:W(ce)},null,8,["icon"]),n("还原图片 ")])),_:1})])),_:1}),r(O,{cols:"12"},{default:o((()=>[r(G,{color:"primary",block:"",onClick:t[3]||(t[3]=e=>f.value.click())},{default:o((()=>[r(g,{icon:W(ue)},null,8,["icon"]),n("保存处理后的图片 ")])),_:1})])),_:1}),r(O,{cols:"12"},{default:o((()=>[r(Z,{label:"处理参数",color:"primary",density:"comfortable",modelValue:c.value,"onUpdate:modelValue":t[4]||(t[4]=e=>c.value=e),"hide-details":"",class:"flex-grow mr-2"},{append:o((()=>[r(G,{color:"primary",variant:"text",onClick:P},{default:o((()=>[n("复制")])),_:1})])),_:1},8,["modelValue"])])),_:1})],64))])),_:1})],64)):m("",!0),r(z,{class:"my-4"}),Je,X("input",{type:"file",ref_key:"imageInput",ref:p,style:{display:"none"}},null,512),X("a",{href:d.value,ref_key:"imageSave",ref:f,download:y.value,style:{display:"none"}},null,8,Qe)],64))}},tt=oe('<div class="text-h5 text-primary">关于</div><div class="text-body-1"><p class="my-2">对聊天中的文本和图片消息进行处理的在线工具。</p><p class="my-2">如果你使用的浏览器支持，可以通过安装 PWA 应用的方式离线使用。</p><p class="my-2">提供这个工具是因为它可能会有用，但本工具不提供任何类型的担保。在使用前，你有责任保证使用本工具处理的内容符合相关的法律法规，本工具不对处理内容的合法性负责。<strong>如果你无法确认这一点，请不要使用这个工具。</strong></p><p class="my-2">这个工具使用了一些安全性被广泛认可（截止至编写时）的密码学算法，但本工具对这些算法的应用仍然可能存在安全缺陷。</p></div><div class="text-h5 text-primary">隐私声明</div><div class="text-body-1"><p class="my-2">本工具不会将处理的消息内容保存或发送给第三方。</p><p class="my-2">除了打开页面时需要加载的静态资源，在使用本工具期间不会发出任何网络请求。</p></div><div class="text-h5 text-primary">开发者</div>',5),at={class:"text-body-1"},lt=X("div",{class:"d-flex flex-column"},[X("div",null,"✨小透明・宸✨"),X("div",{class:"text-caption text-medium-emphasis"},[X("a",{class:"text-secondary",href:" https://github.com/TransparentLC",target:"_blank",rel:"noopener noreferrer"},"https://github.com/TransparentLC")])],-1),ot=X("p",{class:"my-2"},[n("你可以在"),X("a",{class:"text-secondary",href:"https://github.com/TransparentLC/msg-tools",target:"_blank",rel:"noopener noreferrer"},"这里"),n("查看源代码。")],-1),rt={class:"py-1 px-2",style:{color:"#fff","border-radius":"3px 0 0 3px","background-color":"#555"}},st={__name:"about",setup(e){const t=[{label:"Build Time",content:(()=>{const e=new Date("2022-10-09T12:52:22.330Z"),t=e=>`${e}`.padStart(2,0);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`})(),color:"#f48"},{label:"Build With",content:"Vue 3.2.40 + Vite 3.1.6",color:"#4b8"},{label:"Build With",content:"Vuetify 3.0.0-beta.13",color:"#16b"}];return(e,l)=>(a(),v(_,null,[tt,X("div",at,[r(ie,{class:"d-flex align-center my-2 pa-2"},{default:o((()=>[r(de,{size:"large",class:"mr-2"},{default:o((()=>[r(le,{src:"https://avatars.githubusercontent.com/u/47057319?s=128"})])),_:1}),lt])),_:1}),ot,(a(),v(_,null,y(t,((e,t)=>X("p",{class:"my-2",key:t},[X("small",rt,b(e.label),1),X("small",{class:"py-1 px-2",style:me([{color:"#fff","border-radius":"0 3px 3px 0"},{"background-color":e.color}])},b(e.content),5)]))),64))])],64))}},nt=pe({history:fe(),routes:[{path:"/text",component:Ze,meta:{keepAlive:!0}},{path:"/image",component:et,meta:{keepAlive:!0}},{path:"/about",component:st,meta:{keepAlive:!0}},{path:"/:p(.*)*",redirect:"/text"}]}),ct={__name:"snackbar",setup(e,{expose:s}){const c=t(!1),u=t(!1),i=t(!1),d=t(!1),p=t(!1),f=t(0),v=t(""),y=t(""),h=t(""),g=t(""),_=t((()=>{})),x=t((()=>{}));return s({active:c,bottom:u,top:i,left:d,right:p,timeout:f,color:v,buttonColor:y,content:h,buttonText:g,onClickButton:_,onClose:x}),(e,t)=>(a(),l(k,null,{default:o((()=>[r(ve,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=e=>c.value=e),color:v.value,bottom:u.value,top:i.value,left:d.value,right:p.value,timeout:f.value},{actions:o((()=>[g.value?(a(),l(G,{key:0,color:y.value,text:"",onClick:t[0]||(t[0]=e=>{c.value=!1,_.value()})},{default:o((()=>[n(b(g.value),1)])),_:1},8,["color"])):m("",!0)])),default:o((()=>[n(b(h.value)+" ",1)])),_:1},8,["modelValue","color","bottom","top","left","right","timeout"])])),_:1}))}},ut={install(e,t){const a=document.createElement("div");a.style.position="absolute",document.body.appendChild(a);const l=ye(ct).use(t.vuetify).mount(a),o={bottom:!0,top:!1,left:!1,right:!1,timeout:5e3,color:null,buttonColor:"primary-lighten-2",content:null,buttonText:"OK",onClickButton(){},onClose(){}},r=[],s=()=>{r.length&&!l.active&&(Object.assign(l,r.shift()),l.active=!0)};l.$watch("active",(e=>{e||(l.onClose(),setTimeout(s,150))}));const n=(e,t={})=>{r.push({...o,...t,content:e}),s()};for(const c of["success","info","error","warning"])n[c]=(e,t={})=>n(e,{color:c,buttonColor:"white",...t});e.config.globalProperties.$toast=n}},it=ye(he).use(nt).use(ge).use(ut,{vuetify:ge}).mount("#app"),dt=(e,t,a)=>console.log(`%c ${e} %c ${t} `,"color:#fff;background-color:#555;border-radius:3px 0 0 3px",`color:#fff;background-color:${a};border-radius:0 3px 3px 0`);dt("Project","msg-tools","#07c"),dt("Author","TransparentLC","#f84"),dt("Build Time","2022-10-09T12:52:22.330Z","#f48"),dt("Build With","Vue 3.2.40 + Vite 3.1.6","#4b8"),dt("Build With","Vuetify 3.0.0-beta.13","#16b"),navigator.serviceWorker&&navigator.serviceWorker.register("sw.js").then((e=>e.addEventListener("updatefound",(()=>it.$toast("检测到更新，刷新以应用更改",{buttonText:"刷新",onClickButton:()=>location.reload()})))));
