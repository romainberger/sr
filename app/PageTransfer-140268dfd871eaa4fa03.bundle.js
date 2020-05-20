(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{238:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",function(){return P});var n,s,i,o=r(5),a=r(18);r(41);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=r(0),d=r(4).default,p=r(12),{connect:f}=r(9),h=r(110),u=r(62),m=r(39),g=r(149),{selectUser:y}=r(28),{copyToClipboard:b,saveMedia:v}=r(20),{addFiles:E}=r(19),{reset:k,setFileList:x,startTansfer:w}=r(150),S=r(13),R=r(3),j=d.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`,T=d.div`
    display: inline-block;
    margin: 25px auto;
    padding: 15px 5px 15px 15px;
    background: ${o.colors._grey};
    color: ${o.colors.bluePastel};
    font-size: 17px;
    letter-spacing: 10px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;

    :hover {
        color: ${o.colors.blueSky};
    }
`,C=d.div`
    margin-bottom: 25px;
`,F=d.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 7px;
    margin-bottom: 3px;
    color: ${o.colors._black};

    :after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: ${e=>e.transfered?o.colors.greenPastel:e.receiving?o.colors.bluePastel:o.colors.purple};
        ${e=>e.receiving?`\n            background-image:\n                repeating-linear-gradient(\n                  -45deg,\n                  ${o.colors.bluePastel},\n                  ${o.colors.blueLight} 30px\n                );\n            background-size: 50px 32px;\n            animation: move 0.5s linear infinite;\n        `:""}
        transition: background ease 0.2s;
        opacity: 0.4;
        z-index: 0;
    }

    @keyframes move {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 50px 0;
        }
    }

    div {
        position: relative;
        z-index: 2;
    }
`;let P=f(e=>({transfer:e.transfer,user:y(e)}))((i=s=class extends c.Component{constructor(...t){super(...t),l(this,"state",{awaitingHello:!0,code:"",ready:!1}),l(this,"_mounted",!1),l(this,"getEmailHash",async e=>{const t=(new TextEncoder).encode(e),r=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(r)).map(e=>e.toString(16).padStart(2,"0")).join("")}),l(this,"onReady",async()=>{if(!this._mounted)return;const e=await this.getEmailHash(this.props.user.email),t=await this.generateRandomCode();this.setState({code:t,hash:e,ready:!0}),this.peer=new Peer(`SongRiffer-${e}-${t}`),this.peer.on("connection",e=>{e.on("data",this.onReceiveData)}),this.peer.on("error",this.onPeerError)}),l(this,"onPeerError",e=>{S.exception(`Peer error ${e}`),console.log(e)}),l(this,"onReceiveData",e=>{if(e.type)switch(e.type){case"READY_TO_SEND":S.trackEvent("transfer","ready-to-receive"),e.hash===this.state.hash&&(console.log("### receive hash",e.hash),this.setState({awaitingHello:!1}));break;case"FILE_LIST":console.log("### receive file list",e.files),S.trackEvent("transfer","receive-file-list",e.files.length);const t=e.files.reduce((e,t)=>(e[t]={receiving:!1,transfered:!1,success:!1},e),{});this.props.dispatch(x(t));break;case"FILE_TRANSFER_START":console.log("### file transfer start",e.fileName),S.trackEvent("transfer","start-transfer"),this.props.dispatch(w(e.fileName));break;case"FILE_TRANSFER":e.fileName&&(S.trackEvent("transfer","stop-transfer",e.fileName),console.log("### receive file",e.data),v(R.saveTypes.TRANSFER,e.fileName,new Uint8Array(e.data)))}else console.error("invalid message",e)}),l(this,"importFile",e=>{S.trackEvent("file","file-import","transfer",1);const t=this.props.transfer.files[e],r={name:e,path:t.filePath,source:a.SOURCES.TRANSFER},n=new File(r);this.props.dispatch(E({[t.filePath]:n.toJSON()},!0))}),l(this,"copyCode",()=>{b(this.state.code)}),l(this,"loadPeerSDK",()=>{if(document.querySelector("#peerjs-sdk"))this.onReady();else{const t=e.document.createElement("script");t.src="https://unpkg.com/peerjs@1.0.0/dist/peerjs.min.js",t.onload=this.onReady,t.id="peerjs-sdk",e.document.body.appendChild(t)}})}generateRandomCode(){return Math.random().toString(36).substring(2,6).toUpperCase()}getContent(){const{transfer:e}=this.props;if(!this.state.ready)return c.createElement("div",null,"Loading...");if(this.state.awaitingHello)return c.createElement(j,null,c.createElement(m,null,c.createElement(g,{animated:!0,fullDetail:!0,width:70})),c.createElement("div",null,"Visit https://songriffer.com/transfer on your phone and use this code to start transfering files:"),c.createElement(T,{onClick:this.copyCode,title:"Click to copy to clipboard"},this.state.code));if(Object.keys(e.files).length){const t=Object.keys(e.files).every(t=>e.files[t].transfered);return c.createElement(c.Fragment,null,c.createElement(C,null,t?"All files succesfully transfered":"Transfering files:"),Object.keys(e.files).map(t=>{const r=e.files[t];return c.createElement(F,{key:t,transfered:r.transfered,receiving:r.receiving},c.createElement("div",null,t),r.transfered?c.createElement(h,{width:"18",color:o.colors.greenLight}):null)}))}return c.createElement("div",null,"Waiting for files to transfer...")}componentDidMount(){this._mounted=!0,S.trackScreen("transfer"),this.loadPeerSDK()}componentDidUpdate(e){Object.keys(e.transfer.files).forEach(t=>{!e.transfer.files[t].success&&this.props.transfer.files[t].success&&this.importFile(t)})}componentWillUnmount(){this._mounted=!1,this.peer&&this.peer.destroy(),this.props.dispatch(k())}render(){return c.createElement(u,{wrapperStyle:"\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"},this.getContent())}},l(s,"propTypes",{dispatch:p.func,transfer:p.object}),n=i))||n}.call(this,r(15))}}]);