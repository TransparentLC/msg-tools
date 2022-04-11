var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o={}.hasOwnProperty,r={}.propertyIsEnumerable,s=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,n=(e,t)=>{for(var l in t||(t={}))o.call(t,l)&&s(e,l,t[l]);if(a)for(var l of a(t))r.call(t,l)&&s(e,l,t[l]);return e};import{r as c,a as u,b as i,o as d,c as m,w as p,V as f,m as y,d as v,e as h,f as b,g,h as _,i as k,K as w,j as x,k as C,l as P,n as U,p as A,q as V,u as B,F as O,s as R,t as E,v as L,x as S,y as $,z as j,A as T,B as I,L as K,C as M,D,E as z,G as F,H as X,I as Z,J as G,M as N,N as q,O as H,P as W,Q as J,R as Q,S as Y,T as ee,U as te,W as le,X as ae,Y as oe,Z as re,_ as se,$ as ne,a0 as ce,a1 as ue,a2 as ie,a3 as de,a4 as me,a5 as pe,a6 as fe,a7 as ye,a8 as ve,a9 as he,aa as be,ab as ge}from"./vendor.a384cb2b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const _e=E("聊天消息处理工具"),ke={setup(e){const t=c([{icon:y,text:"文本处理",to:"/text"},{icon:v,text:"图片处理",to:"/image"},{icon:h,text:"　关于　",to:"/about"}]),l=matchMedia("(prefers-color-scheme: dark)"),a=u(l.matches?"dark":"light");return l.addListener((e=>a.value=e.matches?"dark":"light")),(e,l)=>{const o=i("router-view");return d(),m(f,{theme:a.value,style:{"min-height":"100vh"}},{default:p((()=>[b(g,{color:"primary"},{default:p((()=>[b(_,null,{default:p((()=>[_e])),_:1})])),_:1}),b(k,{style:{"padding-bottom":"72px"}},{default:p((()=>[b(P,{style:{"max-width":"1024px"}},{default:p((()=>[b(o,null,{default:p((({Component:t})=>[(d(),m(w,null,[e.$route.meta.keepAlive?(d(),m(x(t),{key:e.$route.fullPath})):C("",!0)],1024)),e.$route.meta.keepAlive?C("",!0):(d(),m(x(t),{key:0}))])),_:1})])),_:1})])),_:1}),b(U,{app:"",fixed:"",bottom:"",left:"",right:"",class:"pa-0"},{default:p((()=>[b(R,{"background-color":"primary",centered:"",stacked:"","fixed-tabs":"",style:{width:"100%"},"model-value":B(t).findIndex((t=>t.to===e.$route.path))},{default:p((()=>[(d(!0),A(O,null,V(B(t),(e=>(d(),m(L,{key:e.to,to:e.to},{default:p((()=>[b(S,{icon:e.icon,size:"x-large"},null,8,["icon"]),E($(e.text),1)])),_:2},1032,["to"])))),128))])),_:1},8,["model-value"])])),_:1})])),_:1},8,["theme"])}}};var we=j({theme:{variations:{colors:["primary","secondary"],lighten:2,darken:2},themes:{light:{colors:{primary:"#0288d1",secondary:"#00b0ff"}},dark:{dark:!0,colors:{primary:"#0288d1",secondary:"#00b0ff"}}}},icons:{defaultSet:"mdi",aliases:T,sets:{mdi:I}}});const xe=new TextEncoder,Ce=new TextDecoder,Pe="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~",Ue=Pe.split("").reduce(((e,t,l)=>(e[t]=l,e)),{}),Ae={A:"ΑА",B:"ΒⲂВ",C:"ϹⲤС",E:"ΕЕ",H:"ΗНН",I:"ӀΙӏ",J:"Ϳ",K:"ΚⲔК",M:"ΜϺМ",N:"ΝⲚ",O:"ΟО",P:"ΡⲢР",Q:"Ԛ",T:"ΤТ",V:"Ѵ",W:"Ԝ",X:"ΧⲬХ",Y:"ΥⲨҮ",Z:"Ζ",a:"а",c:"ϲс",d:"ԁ",e:"е",i:"і",j:"ϳј",o:"οо",p:"р",q:"ԛ",s:"ѕ",v:"νѵ",w:"ԝ",x:"х",y:"у"},Ve=Object.entries(Ae).reduce(((e,[t,l])=>{for(const a of l)e[a]=t;return e}),{}),Be="滅苦婆娑耶陀跋多漫都殿悉夜爍帝吉利阿無南那怛喝羯勝摩伽謹波者穆僧室藝尼瑟地彌菩提蘇醯盧呼舍佛參沙伊隸麼遮闍度蒙孕薩夷迦他姪豆特逝朋輸楞栗寫數曳諦羅曰咒即密若般故不實真訶切一除能等是上明大神知三藐耨得依諸世槃涅竟究想夢倒顛離遠怖恐有礙心所以亦智道。集盡死老至",Oe=Be.split("").reduce(((e,t,l)=>(e[t]=l,e)),{}),Re=new K(xe.encode("XDXDtudou@KeyFansClub^_^Encode!!"),xe.encode("Potato@Key@_@=_=")),Ee=e=>e[Math.floor(Math.random()*e.length)],Le=e=>btoa(String.fromCharCode.apply(null,e)),Se=e=>new Uint8Array(atob(e).split("").map((e=>e.charCodeAt()))),$e=e=>{const t=4-(e.length%4||4),l=new Uint8Array(e.length+t);l.set(e);let a="";for(let o=0;o<l.length;o+=4){let e=0;for(let a=0;a<4;a++)e|=l[o+a]<<(3-a<<3),e>>>=0;let t="";for(let l=0;l<5;l++){let l=e%85;e=(e-l)/85,t=Pe[l]+t}a+=t}return a.substring(0,a.length-t)},je=e=>{const t=5-(e.length%5||5);e+="~".repeat(t);const l=new Uint8Array(e.length/5*4-t);for(let a=0,o=0;a<e.length;a+=5,o+=4){let t=0,r=52200625;for(let l=0;l<5;l++)t+=r*Ue[e[a+l]],r/=85;for(let e=0;e<4;e++)l[o+e]=t>>(3-e<<3)}return l},Te=e=>{let t="";for(let l=0;l<e.length;l++)t+=e[l].toString(16).padStart(2,0);return t},Ie=e=>{const t=e.match(/[\da-f]{2}/gi),l=t.length,a=new Uint8Array(l);for(let o=0;o<l;o++)a[o]=parseInt(t[o],16);return a},Ke=e=>{for(const[t,l]of Object.entries(Ae))e=e.replace(new RegExp(t,"g"),Ee(l));return e},Me=e=>{for(const[t,l]of Object.entries(Ve))e=e.replace(new RegExp(t,"g"),l);return e},De=e=>{let t="";for(let l=0;l<e.length;l++)l&&(t+=Ee("​‌‍‎‪‬‭\ufeff")),t+=e[l];return t},ze=e=>{let t="";for(let l=0;l<e.length;l++){if(l){const e=Math.floor(4*Math.random());for(let l=0;l<e;l++)t+=Ee("​‌‍‎‪‬‭\ufeff")}t+=e[l]}return t},Fe=e=>e.replace(new RegExp("[​‌‍‎‪‬‭\ufeff]","g"),""),Xe=document.createElement("canvas"),Ze=Xe.getContext("2d"),Ge=N("div",{class:"text-h5 text-primary mb-2"},"文本处理",-1),Ne=E("从剪贴板粘贴 "),qe=E("复制到剪贴板 "),He=E("Base 编码"),We=E("文本混淆"),Je=E("与佛论禅"),Qe=E("消息加密"),Ye=E("Base64 编码"),et=E("Base64 解码"),tt=E("Base85 编码"),lt=E("Base85 解码"),at=N("div",{class:"text-body-1"},[N("p",{class:"my-2"},"Base 系列编码使用可打印字符来表示二进制数据，普遍应用于在处理文本数据的环境下存储和传输二进制数据的场景。"),N("p",{class:"my-2"},"Base64 是最常用的编码方式之一，使用了大小写英文字母、数字及符号 + 和 / 共 64 种字符，每 4 个字符表示 3 个字节的数据。Base85 则是另一种更紧凑的编码方式，使用了更多的符号，每 5 个字符表示 4 个字节的数据。")],-1),ot=E("英文字母替换"),rt=E("英文字母恢复"),st=E("插入不可见字符（分隔连接）"),nt=E("插入不可见字符（随机添加）"),ct=E("清除不可见字符"),ut=N("div",{class:"text-body-1"},[N("p",{class:"my-2"},"文本混淆的目标是在不影响阅读的情况下，避免通过查找字符串的方式直接搜索到敏感词。"),N("p",{class:"my-2"},[E("对于英文字母，可以用形状相同的希腊字母和西里尔字母替代。另一个更通用的方法则是随机在文本中插入 "),N("code",null,"U+200B"),E(" 等 Unicode 中的不可见字符。")])],-1),it=E("听佛说宇宙的真谛（编码）"),dt=E("参悟佛所言的真意（解码）"),mt=N("div",{class:"text-body-1"},[N("p",{class:"my-2"},[E("“与佛论禅”是 "),N("a",{class:"text-secondary",href:"https://www.keyfc.net/",target:"_blank",rel:"noopener noreferrer"},"KeyFansClub"),E(" 论坛的用户创造的编码方式，原版工具在"),N("a",{class:"text-secondary",href:"https://www.keyfc.net/bbs/tools/tudoucode.aspx",target:"_blank",rel:"noopener noreferrer"},"这里"),E("。")]),N("p",{class:"my-2"},[E("编码方式参考自"),N("a",{class:"text-secondary",href:"https://github.com/lersh/TudouCode/blob/master/TudouSharp/Tudou.cs",target:"_blank",rel:"noopener noreferrer"},"这里"),E("，简单的介绍如下：")]),N("ol",{class:"my-2 pl-6"},[N("li",null,"预定义两个数组，数组 A 包含 128 个汉字，数组 B 包含 12 个汉字。"),N("li",null,[E("对文本的 UTF-16 LE 编码使用 "),N("abbr",{title:"Mode: CBC, Key: XDXDtudou@KeyFansClub^_^Encode!! IV: Potato@Key@_@=_= Padding: PKCS #7"},"AES 算法"),E("加密。")]),N("li",null,[E("将加密后的每个字节"),N("abbr",{title:"记这个字节为 x，伪代码：((x & 0x80) ? B[random] : '') + A[x & 0x7F]"},"映射"),E("到对应的汉字。")])]),N("p",{class:"my-2"},"这里只支持“佛曰”开头的原版与佛论禅，不支持“如是我闻”开头的压缩版或其它的各种“重制版”“新版”等等。")],-1),pt=E("生成密钥对"),ft=E("消息加密"),yt=E("消息解密"),vt=N("div",{class:"text-body-1"},[N("p",{class:"my-2"},[E("一种简单的聊天消息文本端对端加密体制。双方生成密钥对后，将自己的公钥发给对方，并在这里填入对方的公钥，即可开始以加密的方式交换信息。密钥对格式均为 "),N("code",null,"/^[\\da-f]{64}$/"),E("。")]),N("ol",{class:"my-2 pl-6"},[N("li",null,"使用 X25519 椭圆曲线算法进行密钥交换，得到 32 字节的共享密钥。考虑到我们可以相信聊天时对方为本人且消息不会被篡改，因此对公钥进行的签名验证被省略了。"),N("li",null,[E("对共享密钥使用 "),N("abbr",{title:"Salt: akarin.dev, Iteration: 65536"},"PBKDF2-SHA256 算法"),E("扩展为 64 字节。")]),N("li",null,"使用 ChaCha20-Poly1305 算法对消息进行加密。扩展后密钥的前 32 字节作为密钥，后 32 字节作为验证用的附加数据。每次加密时另外生成 12 字节的随机数。"),N("li",null,"加密后的消息按照顺序由 12 字节的随机数、16 字节的认证码和加密后的消息正文组成，最后使用 Base85 进行编码。")]),N("p",{class:"my-2"},[E("这套体制尝试实现前向保密，因此"),N("strong",null,"密钥对需要随用随弃"),E("。只要不泄露临时使用的私钥，即使将加密后的聊天记录公开（无论是主动或被动），他人也无法获得消息的明文内容。"),N("strong",null,"加密操作全部在前端完成，本工具不会保存或上传你的密钥对及消息内容。")]),N("p",{class:"my-2"},[E("如果你需要一个更加安全的加密方案，可以考虑使用 "),N("a",{class:"text-secondary",href:"https://zh.wikipedia.org/wiki/PGP",target:"_blank",rel:"noopener noreferrer"},"PGP"),E("。但是 PGP 不支持前向保密，私钥将被长期使用且需要小心保护，否则被截获的所有通信内容都可以使用泄漏的私钥解密。另一个缺点是，一条带有签名的 PGP 加密消息实在是太长了……即使是最短的消息也会占据你的大半个手机屏幕。")])],-1),ht={setup(e){const{$toast:t}=M().appContext.config.globalProperties,l=u(null),a=u(""),o=()=>navigator.clipboard.readText?navigator.clipboard.readText().then((e=>a.value=e)):t.error("你的浏览器不支持读取剪贴板数据，请手动在文本框中粘贴"),r=()=>navigator.clipboard.writeText(a.value).then((()=>t.success("已复制到剪贴板"))),s=["命由己造，相由心生","心不动，万物皆不动","心不变，万物皆不变","坐亦禅，行亦禅","一花一世界，一叶一如来","春来花自青，秋至叶飘零","无穷般若心自在，语默动静体自然","悠然，随心，随性，随缘","刹那便是永恒","无悲无喜无梦无幻，无爱无恨四大皆空","不能了，不能悟，不能舍，不能弃","参不透，舍不得","不可说，不可说，一说即是错","一念愚即般若绝，一念智即般若生","菩提本无树，明镜亦非台","本来无一物，何处惹尘埃","一即一切，一切即一","刹那便是永恒","种如是因，收如是果，一切唯心造","人无善恶，善恶存乎尔心"],n=()=>{a.value=(e=>{let t="佛曰：";const l=Re.encrypt(K.MODE_CBC,K.utils.pkcs7Pad((e=>{const t=new Uint8Array(2*e.length);for(let l=0;l<e.length;l++){const a=e.charCodeAt(l);t[l<<1]=a,t[1+(l<<1)]=a>>8}return t})(e)));for(let a=0;a<l.length;a++){const e=l[a];t+=e>>7?Ee("冥奢梵呐俱哆怯諳罰侄缽皤")+Be[127&e]:Be[e]}return t})(a.value),t.success(Ee(s)+"（编码成功）")},c=()=>{try{a.value=(e=>{if(!e.match(new RegExp(`^佛曰：(([冥奢梵呐俱哆怯諳罰侄缽皤]?[${Be}]){16})*$`)))throw new Error;e=e.substring(3);const t=[];for(let l=0;l<e.length;l++){const a=e[l];"冥奢梵呐俱哆怯諳罰侄缽皤".includes(a)?(l++,t.push(128|Oe[e[l]])):t.push(Oe[a])}return(e=>{let t="";for(let l=0;l<e.length;l+=2)t+=String.fromCharCode(e[l]|e[l+1]<<8);return t})(K.utils.pkcs7Strip(Re.decrypt(K.MODE_CBC,new Uint8Array(t))))})(a.value),t.success(Ee(s)+"（解码成功）")}catch(e){t.error("太深奥了，参悟不出佛经的真意……（请检查文本是否正确）"),console.log(e)}},i=e=>!!e.match(/^[\da-f]{64}$/)||"密钥格式错误",m=u(null),f=u(""),y=u(null),v=u(!0);D(f,(e=>oe((()=>y.value.validate().then((t=>t.length||(m.value=Ie(e))))))));const h=z((()=>m.value?Te(F.getPublic(m.value)):null)),g=u(null),_=u(""),k=u(null);D(_,(e=>oe((()=>k.value.validate().then((t=>t.length||(g.value=Ie(e))))))));const w=z((()=>m.value&&g.value?F.getShared(m.value,g.value):null)),x=xe.encode("akarin.dev"),C=()=>f.value=Te(m.value=crypto.getRandomValues(new Uint8Array(32))),P=()=>{if(!w.value)return t.warning("请输入有效的密钥");const e=performance.now(),l=re(w.value,x,65536,64),o=crypto.getRandomValues(new Uint8Array(12)),r=new se(l.subarray(0,32),o,l.subarray(32,64)),s=r.encrypt(xe.encode(a.value)),n=new Uint8Array(s.length+12+16);n.set(o),n.set(r.mac(),12),n.set(s,28),a.value=$e(n),t.success(`加密成功，耗时：${Math.round(100*(performance.now()-e))/100}ms`)},U=()=>{if(!w.value)return t.warning("请输入有效的密钥");const e=performance.now(),l=je(a.value),o=l.subarray(0,12),r=l.subarray(12,28),s=l.subarray(28),n=re(w.value,x,65536,64),c=new se(n.subarray(0,32),o,n.subarray(32,64)),u=c.decrypt(s);if(!c.verify(r))return t.error("解密失败，请检查密钥及密文是否正确且保持完整未被篡改");a.value=Ce.decode(u),t.success(`解密成功，耗时：${Math.round(100*(performance.now()-e))/100}ms`)},V=()=>h.value&&navigator.clipboard.writeText(h.value).then((()=>t.info("已将公钥复制到剪贴板")));return(e,s)=>(d(),A(O,null,[Ge,b(X,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=e=>a.value=e),label:"需要处理的文本",row:"6",counter:"","no-resize":"","hide-details":"",color:"primary",class:"my-4"},null,8,["modelValue"]),b(Z,{dense:"",class:"my-2"},{default:p((()=>[b(q,{cols:"6"},{default:p((()=>[b(Q,{top:"",text:"请允许读取剪贴板，某些浏览器可能不支持"},{activator:p((({props:e})=>[b(H,W({color:"primary",block:""},e,{onClick:o}),{default:p((()=>[b(S,{icon:B(J)},null,8,["icon"]),Ne])),_:2},1040)])),_:1})])),_:1}),b(q,{cols:"6"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:r},{default:p((()=>[b(S,{icon:B(Y)},null,8,["icon"]),qe])),_:1})])),_:1})])),_:1}),b(R,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=e=>l.value=e),color:"primary","show-arrows":"","center-active":"",class:"my-2"},{default:p((()=>[b(L,null,{default:p((()=>[He])),_:1}),b(L,null,{default:p((()=>[We])),_:1}),b(L,null,{default:p((()=>[Je])),_:1}),b(L,null,{default:p((()=>[Qe])),_:1})])),_:1},8,["modelValue"]),b(G,{modelValue:l.value,"onUpdate:modelValue":s[16]||(s[16]=e=>l.value=e),class:"my-2"},{default:p((()=>[b(ee,null,{default:p((()=>[b(Z,{dense:""},{default:p((()=>[b(q,{cols:"6",sm:"3"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:s[2]||(s[2]=e=>a.value=B(Le)(B(xe).encode(a.value)))},{default:p((()=>[Ye])),_:1})])),_:1}),b(q,{cols:"6",sm:"3"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:s[3]||(s[3]=e=>a.value.match(/^(?:[A-Za-z\d+/])*(?:[A-Za-z\d+/]{2}==|[A-Za-z\d+/]{3}=)?$/)?a.value=B(Ce).decode(B(Se)(a.value)):B(t).warning("不是有效的 Base64 数据"))},{default:p((()=>[et])),_:1})])),_:1}),b(q,{cols:"6",sm:"3"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:s[4]||(s[4]=e=>a.value=B($e)(B(xe).encode(a.value)))},{default:p((()=>[tt])),_:1})])),_:1}),b(q,{cols:"6",sm:"3"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:s[5]||(s[5]=e=>{a.value.match(/^[\dA-Za-z!#$%&()*+-;<=>?@^_`{|}~]*$/)?a.value=B(Ce).decode(B(je)(a.value)):B(t).warning("不是有效的 Base85 数据")})},{default:p((()=>[lt])),_:1})])),_:1})])),_:1}),b(te,{class:"my-4"}),at])),_:1}),b(ee,null,{default:p((()=>[b(Z,{dense:""},{default:p((()=>[b(q,{cols:"6"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:s[6]||(s[6]=e=>(a.value=B(Ke)(a.value))&&B(t).success("替换成功"))},{default:p((()=>[ot])),_:1})])),_:1}),b(q,{cols:"6"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:s[7]||(s[7]=e=>(a.value=B(Me)(a.value))&&B(t).success("恢复成功"))},{default:p((()=>[rt])),_:1})])),_:1}),b(q,{cols:"12",sm:"4"},{default:p((()=>[b(Q,{top:"",text:"每两个字符中间固定添加一个"},{activator:p((({props:e})=>[b(H,W({color:"primary",block:""},e,{onClick:s[8]||(s[8]=e=>(a.value=B(De)(a.value))&&B(t).success("添加成功"))}),{default:p((()=>[st])),_:2},1040)])),_:1})])),_:1}),b(q,{cols:"12",sm:"4"},{default:p((()=>[b(Q,{top:"",text:"每两个字符中间随机添加 0-3 个"},{activator:p((({props:e})=>[b(H,W({color:"primary",block:""},e,{onClick:s[9]||(s[9]=e=>(a.value=B(ze)(a.value))&&B(t).success("添加成功"))}),{default:p((()=>[nt])),_:2},1040)])),_:1})])),_:1}),b(q,{cols:"12",sm:"4"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:s[10]||(s[10]=e=>(a.value=B(Fe)(a.value))&&B(t).success("清除成功"))},{default:p((()=>[ct])),_:1})])),_:1})])),_:1}),b(te,{class:"my-4"}),ut])),_:1}),b(ee,null,{default:p((()=>[b(Z,{dense:""},{default:p((()=>[b(q,{cols:"12",sm:"6"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:n},{default:p((()=>[it])),_:1})])),_:1}),b(q,{cols:"12",sm:"6"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:c},{default:p((()=>[dt])),_:1})])),_:1})])),_:1}),b(te,{class:"my-4"}),mt])),_:1}),b(ee,null,{default:p((()=>[b(Z,{dense:""},{default:p((()=>[b(q,{cols:"12",sm:"4"},{default:p((()=>[b(le,{label:"自己的私钥",color:"primary",density:"comfortable",ref_key:"privateKeyElement",ref:y,type:v.value?"password":"text",onFocus:s[11]||(s[11]=e=>v.value=!1),onBlur:s[12]||(s[12]=e=>v.value=!0),modelValue:f.value,"onUpdate:modelValue":s[13]||(s[13]=e=>f.value=e),rules:[i]},null,8,["type","modelValue","rules"])])),_:1}),b(q,{cols:"12",sm:"4"},{default:p((()=>[b(le,{label:"自己的公钥（点击复制）",hint:"根据私钥自动计算",color:"primary",density:"comfortable",readonly:"",modelValue:B(h),"onUpdate:modelValue":s[14]||(s[14]=e=>ae(h)?h.value=e:null),onClick:V},null,8,["modelValue"])])),_:1}),b(q,{cols:"12",sm:"4"},{default:p((()=>[b(le,{label:"对方的公钥",color:"primary",density:"comfortable",ref_key:"otherKeyElement",ref:k,modelValue:_.value,"onUpdate:modelValue":s[15]||(s[15]=e=>_.value=e),rules:[i]},null,8,["modelValue","rules"])])),_:1}),b(q,{cols:"12",sm:"4"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:C},{default:p((()=>[pt])),_:1})])),_:1}),b(q,{cols:"6",sm:"4"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:P},{default:p((()=>[ft])),_:1})])),_:1}),b(q,{cols:"6",sm:"4"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:U},{default:p((()=>[yt])),_:1})])),_:1})])),_:1}),b(te,{class:"my-4"}),vt])),_:1})])),_:1},8,["modelValue"])],64))}},bt=N("div",{class:"text-h5 text-primary mb-2"},"图片处理",-1),gt=E("打开图片 "),_t=E("打乱图片 "),kt=E("还原图片 "),wt=E("保存处理后的图片 "),xt=ue('<div class="text-body-1"><p class="my-2">使用<abbr title="xoshiro128**">伪随机数生成算法</abbr>，将图片以 16x16 的小块为单位打乱或还原。</p><p class="my-2">打乱图片前会随机生成种子，和图片的尺寸一起记录为<abbr title="s=&lt;seed&gt;&amp;w=&lt;width&gt;&amp;=&lt;height&gt;">处理参数</abbr>，请将处理参数和打乱后的图片一起发送。反之，输入打乱时使用的处理参数就可以将图片还原了。</p><p class="my-2">在处理前会对图片进行缩放，使其长度和宽度均为 16 的倍数（向下取整）。图片尺寸越大，则混淆/还原需要的时间也会越长。</p><p class="my-2">如果需要还原的图片经过了缩放或压缩，还原后的图片会有格子形状的痕迹，这是正常现象。</p></div>',1),Ct=["href","download"],Pt={setup(e){const{$toast:t}=M().appContext.config.globalProperties,l=u(""),a=u(null),o=u(""),r=u(null),s=u(null),n=u("");D(o,((e,t)=>URL.revokeObjectURL(t)||(n.value=Date.now()))),ne((()=>r.value.onchange=async e=>{const t=URL.createObjectURL(e.target.files[0]),l=await new Promise(((e,l)=>{const a=new Image;a.src=t,a.onload=()=>e(a),a.reject=l}));o.value=(a.value=l).src,URL.revokeObjectURL(t)}));const c=document.createElement("canvas"),i=c.getContext("2d"),m=async e=>{let r,s,n;if(e){const e=new URLSearchParams(l.value);if(!(["s","w","h"].every((t=>e.has(t)))&&e.get("w").match(/^\d+$/)&&e.get("h").match(/^\d+$/)&&e.get("s").match(/^[\da-f]{32}$/)))return t.warning("请输入有效的处理参数");r=parseInt(e.get("w")),s=parseInt(e.get("h")),n=["a","b","c","d"].reduce(((t,l,a)=>(t[l]=parseInt(e.get("s").substring(a<<3,a+1<<3),16),t)),{})}else{r=-16&a.value.width,s=-16&a.value.height;const e=crypto.getRandomValues(new Uint32Array(4));n=["a","b","c","d"].reduce(((t,l,a)=>(t[l]=e[a],t)),{}),l.value=new URLSearchParams([["s",Array.from(e).map((e=>e.toString(16).padStart(8,0))).join("")],["w",r],["h",s]]).toString()}const u=await(async(e,t,l)=>{Xe.width=t,Xe.height=l,Ze.clearRect(0,0,t,l),Ze.drawImage(e,0,0,t,l);const a=await new Promise((e=>Xe.toBlob(e)));return await new Promise(((e,t)=>{const l=new Image;l.src=URL.createObjectURL(a),l.onload=()=>e(l),l.onerror=t}))})(a.value,r,s),d=r>>4,m=s>>4;c.width=r,c.height=s,i.clearRect(0,0,r,s);const p=((e,t)=>{const l=new Array(e);for(let a=0;a<e;a++)l[a]=a;for(let a=e-1;a>=0;a--){const e=t()%(a+1);[l[a],l[e]]=[l[e],l[a]]}return l})(d*m,(f=n,()=>{let e=f.b<<9,t=5*f.a;return t=9*(t<<7|t>>>25),f.c^=f.a,f.d^=f.b,f.b^=f.c,f.a^=f.d,f.c^=e,f.d=f.d<<11|f.d>>>21,(t>>>0)%4294967296}));var f;e&&(e=>{const t=e.length;for(let l=0;l<t;l++){let t=!1;for(let r=e[l];r!==l;r=e[r])if(r<=l){t=!0;break}if(t)continue;let a=l,o=e[l];do{[e[o],a,o]=[a,o,e[o]]}while(a!==l)}})(p);for(let t=0;t<p.length;t++){const e=p[t];i.drawImage(u,t%d<<4,(t/d|0)<<4,16,16,e%d<<4,(e/d|0)<<4,16,16)}const y=await new Promise((e=>c.toBlob(e))),v=URL.createObjectURL(y),h=await new Promise(((e,t)=>{const l=new Image;l.src=v,l.onload=()=>e(l),l.onerror=t}));a.value=h,o.value=v},f=()=>l.value&&navigator.clipboard.writeText(l.value).then((()=>t.info("已将处理参数复制到剪贴板")));return(e,t)=>(d(),A(O,null,[bt,b(H,{color:"primary",block:"",onClick:t[0]||(t[0]=e=>r.value.click())},{default:p((()=>[b(S,{icon:B(ie)},null,8,["icon"]),gt])),_:1}),o.value?(d(),A(O,{key:0},[b(ce,{class:"my-2","max-height":"360",src:o.value,transition:null},null,8,["src"]),b(Z,{dense:"",class:"my-2"},{default:p((()=>[b(q,{cols:"6"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:t[1]||(t[1]=e=>m(!1))},{default:p((()=>[b(S,{icon:B(de)},null,8,["icon"]),_t])),_:1})])),_:1}),b(q,{cols:"6"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:t[2]||(t[2]=e=>m(!0))},{default:p((()=>[b(S,{icon:B(me)},null,8,["icon"]),kt])),_:1})])),_:1}),b(q,{cols:"12"},{default:p((()=>[b(H,{color:"primary",block:"",onClick:t[3]||(t[3]=e=>s.value.click())},{default:p((()=>[b(S,{icon:B(pe)},null,8,["icon"]),wt])),_:1})])),_:1}),b(q,{cols:"12"},{default:p((()=>[b(le,{label:"处理参数",color:"primary",density:"comfortable",modelValue:l.value,"onUpdate:modelValue":t[4]||(t[4]=e=>l.value=e),"hide-details":"",onClick:f},null,8,["modelValue"])])),_:1})])),_:1})],64)):C("",!0),b(te,{class:"my-4"}),xt,N("input",{type:"file",ref_key:"imageInput",ref:r,style:{display:"none"}},null,512),N("a",{href:o.value,ref_key:"imageSave",ref:s,download:n.value,style:{display:"none"}},null,8,Ct)],64))}};var Ut=(e,t)=>{const l=e.__vccOpts||e;for(const[a,o]of t)l[a]=o;return l};const At={},Vt=ue('<div class="text-h5 text-primary">关于</div><div class="text-body-1"><p class="my-2">对聊天中的文本和图片消息进行处理的在线工具。</p><p class="my-2">如果你使用的浏览器支持，可以通过安装 PWA 应用的方式离线使用。</p><p class="my-2">提供这个工具是因为它可能会有用，但本工具不提供任何类型的担保。在使用前，你有责任保证使用本工具处理的内容符合相关的法律法规，本工具不对处理内容的合法性负责。<strong>如果你无法确认这一点，请不要使用这个工具。</strong></p><p class="my-2">这个工具使用了一些安全性被广泛认可（截止至编写时）的密码学算法，但本工具对这些算法的应用仍然可能存在安全缺陷。</p><p class="my-2">前端界面使用 <a class="text-secondary" href="https://next.vuetifyjs.com" target="_blank" rel="noopener noreferrer">Vuetify 3</a> 编写，由于这个框架仍处于 Beta 状态，因此可能会出现一些缺陷。</p></div><div class="text-h5 text-primary">隐私声明</div><div class="text-body-1"><p class="my-2">本工具不会将处理的消息内容保存或发送给第三方。</p><p class="my-2">除了打开页面时需要加载的静态资源，在使用本工具期间不会发出任何网络请求。</p></div><div class="text-h5 text-primary">开发者</div>',5),Bt={class:"text-body-1"},Ot=N("div",{class:"d-flex flex-column"},[N("div",null,"✨小透明・宸✨"),N("div",{class:"text-caption text-medium-emphasis"},[N("a",{class:"text-secondary",href:" https://github.com/TransparentLC",target:"_blank",rel:"noopener noreferrer"},"https://github.com/TransparentLC")])],-1),Rt=N("p",{class:"my-2"},[E("你可以在"),N("a",{class:"text-secondary",href:"https://github.com/TransparentLC/msg-tools",target:"_blank",rel:"noopener noreferrer"},"这里"),E("查看源代码。")],-1);var Et=Ut(At,[["render",function(e,t){return d(),A(O,null,[Vt,N("div",Bt,[b(fe,{class:"d-flex align-center my-2 pa-2"},{default:p((()=>[b(ye,{size:"large",class:"mr-2"},{default:p((()=>[b(ce,{src:"https://avatars.githubusercontent.com/u/47057319?s=128"})])),_:1}),Ot])),_:1}),Rt])],64)}]]),Lt=ve({history:he(),routes:[{path:"/text",component:ht,meta:{keepAlive:!0}},{path:"/image",component:Pt,meta:{keepAlive:!0}},{path:"/about",component:Et,meta:{keepAlive:!0}},{path:"/:p(.*)*",redirect:"/text"}]});const St={setup(e,{expose:t}){const l=u(!1),a=u(!1),o=u(!1),r=u(!1),s=u(!1),n=u(0),c=u(""),i=u(""),y=u(""),v=u(""),h=u((()=>{})),g=u((()=>{}));return t({active:l,bottom:a,top:o,left:r,right:s,timeout:n,color:c,buttonColor:i,content:y,buttonText:v,onClickButton:h,onClose:g}),(e,t)=>(d(),m(f,null,{default:p((()=>[b(be,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),color:c.value,bottom:a.value,top:o.value,left:r.value,right:s.value,timeout:n.value},{actions:p((()=>[v.value?(d(),m(H,{key:0,color:i.value,text:"",onClick:t[0]||(t[0]=e=>{l.value=!1,h.value()})},{default:p((()=>[E($(v.value),1)])),_:1},8,["color"])):C("",!0)])),default:p((()=>[E($(y.value)+" ",1)])),_:1},8,["modelValue","color","bottom","top","left","right","timeout"])])),_:1}))}};var $t={install(e,a){const o=document.createElement("div");document.body.appendChild(o);const r=ge(St).use(a.vuetify).mount(o),s={bottom:!0,top:!1,left:!1,right:!1,timeout:5e3,color:null,buttonColor:"primary-lighten-2",content:null,buttonText:"OK",onClickButton(){},onClose(){}},c=[],u=()=>{c.length&&!r.active&&(Object.assign(r,c.shift()),r.active=!0)};r.$watch("active",(e=>{e||(r.onClose(),setTimeout(u,150))}));const i=(e,a={})=>{var o;c.push((o=n(n({},s),a),t(o,l({content:e})))),u()};for(const t of["success","info","error","warning"])i[t]=(e,l={})=>i(e,n({color:t,buttonColor:"white"},l));e.config.globalProperties.$toast=i}};ge(ke).use(Lt).use(we).use($t,{vuetify:we}).mount("#app");