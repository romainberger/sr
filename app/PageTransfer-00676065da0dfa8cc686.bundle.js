(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{234:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",function(){return C});var n,s,i;r(20);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(31);const a=r(0),l=r(2).default,c=r(5),{connect:d}=r(7),p=r(85),f=r(42),h=r(35),u=r(86),{selectUser:m}=r(28),{copyToClipboard:g,saveMedia:y}=r(14),{addFiles:b}=r(12),{reset:v,setFileList:E,startTansfer:k}=r(88),x=r(10),w=r(1),S=l.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`,R=l.div`
    display: inline-block;
    margin: 25px auto;
    padding: 15px 5px 15px 15px;
    background: ${w.colors._grey};
    color: ${w.colors.bluePastel};
    font-size: 17px;
    letter-spacing: 10px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;

    :hover {
        color: ${w.colors.blueSky};
    }
`,j=l.div`
    margin-bottom: 25px;
`,T=l.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 7px;
    margin-bottom: 3px;
    color: ${w.colors._black};

    :after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: ${e=>e.transfered?w.colors.greenPastel:e.receiving?w.colors.bluePastel:w.colors.purple};
        ${e=>e.receiving?`\n            background-image:\n                repeating-linear-gradient(\n                  -45deg,\n                  ${w.colors.bluePastel},\n                  ${w.colors.blueLight} 30px\n                );\n            background-size: 50px 32px;\n            animation: move 0.5s linear infinite;\n        `:""}
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
`;let C=d(e=>({transfer:e.transfer,user:m(e)}))((i=s=class extends a.Component{constructor(...t){super(...t),o(this,"state",{awaitingHello:!0,code:"",ready:!1}),o(this,"_mounted",!1),o(this,"getEmailHash",async e=>{const t=(new TextEncoder).encode(e),r=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(r)).map(e=>e.toString(16).padStart(2,"0")).join("")}),o(this,"onReady",async()=>{if(!this._mounted)return;const e=await this.getEmailHash(this.props.user.email),t=await this.generateRandomCode();this.setState({code:t,hash:e,ready:!0}),this.peer=new Peer(`SongRiffer-${e}-${t}`),this.peer.on("connection",e=>{e.on("data",this.onReceiveData)}),this.peer.on("error",this.onPeerError)}),o(this,"onPeerError",e=>{x.exception(`Peer error ${e}`),console.log(e)}),o(this,"onReceiveData",e=>{if(e.type)switch(e.type){case"READY_TO_SEND":x.trackEvent("transfer","ready-to-receive"),e.hash===this.state.hash&&(console.log("### receive hash",e.hash),this.setState({awaitingHello:!1}));break;case"FILE_LIST":console.log("### receive file list",e.files),x.trackEvent("transfer","receive-file-list",e.files.length);const t=e.files.reduce((e,t)=>(e[t]={receiving:!1,transfered:!1,success:!1},e),{});this.props.dispatch(E(t));break;case"FILE_TRANSFER_START":console.log("### file transfer start",e.fileName),x.trackEvent("transfer","start-transfer"),this.props.dispatch(k(e.fileName));break;case"FILE_TRANSFER":e.fileName&&(x.trackEvent("transfer","stop-transfer",e.fileName),console.log("### receive file",e.data),y(w.saveTypes.TRANSFER,e.fileName,new Uint8Array(e.data)))}else console.error("invalid message",e)}),o(this,"importFile",e=>{x.trackEvent("file","file-import","transfer",1);const t=this.props.transfer.files[e],r={name:e,path:t.filePath,source:w.SOURCES.TRANSFER},n=new File(r);this.props.dispatch(b({[t.filePath]:n.toJSON()},!0))}),o(this,"copyCode",()=>{g(this.state.code)}),o(this,"loadPeerSDK",()=>{if(document.querySelector("#peerjs-sdk"))this.onReady();else{const t=e.document.createElement("script");t.src="https://unpkg.com/peerjs@1.0.0/dist/peerjs.min.js",t.onload=this.onReady,t.id="peerjs-sdk",e.document.body.appendChild(t)}})}generateRandomCode(){return Math.random().toString(36).substring(2,6).toUpperCase()}getContent(){const{transfer:e}=this.props;if(!this.state.ready)return a.createElement("div",null,"Loading...");if(this.state.awaitingHello)return a.createElement(S,null,a.createElement(h,null,a.createElement(u,{animated:!0,fullDetail:!0,width:70})),a.createElement("div",null,"Visit https://songriffer.com/transfer on your phone and use this code to start transfering files:"),a.createElement(R,{onClick:this.copyCode,title:"Click to copy to clipboard"},this.state.code));if(Object.keys(e.files).length){const t=Object.keys(e.files).every(t=>e.files[t].transfered);return a.createElement(a.Fragment,null,a.createElement(j,null,t?"All files succesfully transfered":"Transfering files:"),Object.keys(e.files).map(t=>{const r=e.files[t];return a.createElement(T,{key:t,transfered:r.transfered,receiving:r.receiving},a.createElement("div",null,t),r.transfered?a.createElement(p,{width:"18",color:w.colors.greenLight}):null)}))}return a.createElement("div",null,"Waiting for files to transfer...")}componentDidMount(){this._mounted=!0,x.trackScreen("transfer"),this.loadPeerSDK()}componentDidUpdate(e){Object.keys(e.transfer.files).forEach(t=>{!e.transfer.files[t].success&&this.props.transfer.files[t].success&&this.importFile(t)})}componentWillUnmount(){this._mounted=!1,this.peer&&this.peer.destroy(),this.props.dispatch(v())}render(){return a.createElement(f,{wrapperStyle:"\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"},this.getContent())}},o(s,"propTypes",{dispatch:c.func,transfer:c.object}),n=i))||n}.call(this,r(19))}}]);