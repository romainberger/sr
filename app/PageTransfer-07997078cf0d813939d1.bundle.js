(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{240:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",function(){return P});r(41);var n,s,i,o=r(18);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l=r(0),c=r(4).default,d=r(12),{connect:p}=r(7),f=r(109),h=r(61),u=r(39),m=r(148),{selectUser:g}=r(28),{copyToClipboard:y,saveMedia:b}=r(20),{addFiles:v}=r(19),{reset:E,setFileList:k,startTansfer:x}=r(150),w=r(13),S=r(3),R=c.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`,j=c.div`
    display: inline-block;
    margin: 25px auto;
    padding: 15px 5px 15px 15px;
    background: ${S.colors._grey};
    color: ${S.colors.bluePastel};
    font-size: 17px;
    letter-spacing: 10px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;

    :hover {
        color: ${S.colors.blueSky};
    }
`,T=c.div`
    margin-bottom: 25px;
`,F=c.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 7px;
    margin-bottom: 3px;
    color: ${S.colors._black};

    :after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: ${e=>e.transfered?S.colors.greenPastel:e.receiving?S.colors.bluePastel:S.colors.purple};
        ${e=>e.receiving?`\n            background-image:\n                repeating-linear-gradient(\n                  -45deg,\n                  ${S.colors.bluePastel},\n                  ${S.colors.blueLight} 30px\n                );\n            background-size: 50px 32px;\n            animation: move 0.5s linear infinite;\n        `:""}
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
`;let P=p(e=>({transfer:e.transfer,user:g(e)}))((i=s=class extends l.Component{constructor(...t){super(...t),a(this,"state",{awaitingHello:!0,code:"",ready:!1}),a(this,"_mounted",!1),a(this,"getEmailHash",async e=>{const t=(new TextEncoder).encode(e),r=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(r)).map(e=>e.toString(16).padStart(2,"0")).join("")}),a(this,"onReady",async()=>{if(!this._mounted)return;const e=await this.getEmailHash(this.props.user.email),t=await this.generateRandomCode();this.setState({code:t,hash:e,ready:!0}),this.peer=new Peer(`SongRiffer-${e}-${t}`),this.peer.on("connection",e=>{e.on("data",this.onReceiveData)}),this.peer.on("error",this.onPeerError)}),a(this,"onPeerError",e=>{w.exception(`Peer error ${e}`),console.log(e)}),a(this,"onReceiveData",e=>{if(e.type)switch(e.type){case"READY_TO_SEND":w.trackEvent("transfer","ready-to-receive"),e.hash===this.state.hash&&(console.log("### receive hash",e.hash),this.setState({awaitingHello:!1}));break;case"FILE_LIST":console.log("### receive file list",e.files),w.trackEvent("transfer","receive-file-list",e.files.length);const t=e.files.reduce((e,t)=>(e[t]={receiving:!1,transfered:!1,success:!1},e),{});this.props.dispatch(k(t));break;case"FILE_TRANSFER_START":console.log("### file transfer start",e.fileName),w.trackEvent("transfer","start-transfer"),this.props.dispatch(x(e.fileName));break;case"FILE_TRANSFER":e.fileName&&(w.trackEvent("transfer","stop-transfer",e.fileName),console.log("### receive file",e.data),b(S.saveTypes.TRANSFER,e.fileName,new Uint8Array(e.data)))}else console.error("invalid message",e)}),a(this,"importFile",e=>{w.trackEvent("file","file-import","transfer",1);const t=this.props.transfer.files[e],r={name:e,path:t.filePath,source:o.b.TRANSFER},n=new File(r);this.props.dispatch(v({[t.filePath]:n.toJSON()},!0))}),a(this,"copyCode",()=>{y(this.state.code)}),a(this,"loadPeerSDK",()=>{if(document.querySelector("#peerjs-sdk"))this.onReady();else{const t=e.document.createElement("script");t.src="https://unpkg.com/peerjs@1.0.0/dist/peerjs.min.js",t.onload=this.onReady,t.id="peerjs-sdk",e.document.body.appendChild(t)}})}generateRandomCode(){return Math.random().toString(36).substring(2,6).toUpperCase()}getContent(){const{transfer:e}=this.props;if(!this.state.ready)return l.createElement("div",null,"Loading...");if(this.state.awaitingHello)return l.createElement(R,null,l.createElement(u,null,l.createElement(m,{animated:!0,fullDetail:!0,width:70})),l.createElement("div",null,"Visit https://songriffer.com/transfer on your phone and use this code to start transfering files:"),l.createElement(j,{onClick:this.copyCode,title:"Click to copy to clipboard"},this.state.code));if(Object.keys(e.files).length){const t=Object.keys(e.files).every(t=>e.files[t].transfered);return l.createElement(l.Fragment,null,l.createElement(T,null,t?"All files succesfully transfered":"Transfering files:"),Object.keys(e.files).map(t=>{const r=e.files[t];return l.createElement(F,{key:t,transfered:r.transfered,receiving:r.receiving},l.createElement("div",null,t),r.transfered?l.createElement(f,{width:"18",color:S.colors.greenLight}):null)}))}return l.createElement("div",null,"Waiting for files to transfer...")}componentDidMount(){this._mounted=!0,w.trackScreen("transfer"),this.loadPeerSDK()}componentDidUpdate(e){Object.keys(e.transfer.files).forEach(t=>{!e.transfer.files[t].success&&this.props.transfer.files[t].success&&this.importFile(t)})}componentWillUnmount(){this._mounted=!1,this.peer&&this.peer.destroy(),this.props.dispatch(E())}render(){return l.createElement(h,{wrapperStyle:"\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"},this.getContent())}},a(s,"propTypes",{dispatch:d.func,transfer:d.object}),n=i))||n}.call(this,r(15))}}]);