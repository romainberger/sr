(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{109:function(e,t,a){const n=a(0),i=a(4).default,{colors:s}=a(3),r=i.svg`
    fill: ${e=>e.color};
`;e.exports=({color:e=s.green,width:t})=>n.createElement(r,{viewBox:"0 0 16 16",width:t,color:e},n.createElement("polygon",{stroke:"none",fillRule:"evenodd",points:"2.6 7.4 1 9.2 5.3 14 15 3.8 13.3 2 5.3 10.4"}))},111:function(e,t,a){const n=a(4).default.span`
    display: inline-block;
    padding: 2px 8px;
    margin-right: 3px;
    border-radius: 7px;
    cursor: pointer;
    transition: background ease 0.1s;
`;e.exports=n},112:function(e,t,a){const n=a(13),i=!1;e.exports=new class{constructor(){var e,t,a;a={},(t="eventsRunning")in(e=this)?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}start(e){this.eventsRunning[e]=+new Date}end(e){if(!this.eventsRunning[e])return void(i&&console.warn(`[RUM] Event ${e} not started`));const t=+new Date-this.eventsRunning[e];delete this.eventsRunning[e],n.trackTiming("rum",e,t),i&&console.log(`[RUM] Event ${e} ran in ${t}ms`)}}},126:function(e,t,a){"use strict";a.r(t),a.d(t,"recorderFileAlreadyExists",function(){return i}),a.d(t,"reset",function(){return s}),a.d(t,"recorderSaveSuccess",function(){return r});var n=a(3);const i=e=>({type:n.actionTypes.RECORDER_FILE_ALREADY_EXISTS,fileName:e}),s=()=>({type:n.actionTypes.RECORDER_RESET}),r=e=>({type:n.actionTypes.RECORDER_SAVE_SUCCESS,filePath:e})},13:function(e,t){const a=window.__songRiffer.tracking;e.exports=a},132:function(e,t,a){"use strict";a.d(t,"a",function(){return n});const n=e=>e.replace(/[\?#]/g,escape)},14:function(e,t,a){"use strict";a.r(t),a.d(t,"selectFiles",function(){return u}),a.d(t,"_selectFiles",function(){return c}),a.d(t,"selectSortRule",function(){return d}),a.d(t,"selectFilesCount",function(){return h}),a.d(t,"selectSelectedFile",function(){return m}),a.d(t,"selectFileByHashPath",function(){return f}),a.d(t,"selectTags",function(){return g}),a.d(t,"selectFilesForStorage",function(){return E});var n=a(10),i=a(131),s=a(21),r=a(41),o=a(3);const l=a(76),c=e=>e.files.files,p=l([e=>e],e=>new r.a(e),"selectFile"),d=l([e=>e.files],e=>e.sortRule,"selectSortRule"),u=l([c,s.a,d],(e,t,a)=>{if(!e)return[];return((e,t)=>e.sort((e,a)=>{switch(t){case o.sortRules.BPM_ASC:return e.bpm-a.bpm;case o.sortRules.BPM_DESC:return a.bpm-e.bpm;case o.sortRules.DURATION_ASC:return e.duration-a.duration;case o.sortRules.DURATION_DESC:return a.duration-e.duration;case o.sortRules.NAME_ASC:return e.name.toLowerCase().localeCompare(a.name.toLowerCase());case o.sortRules.NAME_DESC:return a.name.toLowerCase().localeCompare(e.name.toLowerCase());case o.sortRules.RATING_ASC:return e.getRatingForSort()-a.getRatingForSort();case o.sortRules.RATING_DESC:return a.getRatingForSort()-e.getRatingForSort();default:return a.added-e.added}}))(Object.keys(e).reduce((a,n)=>{const s=p(e[n],null,`file_${n}`);return Object(i.matchSearch)(s,t)&&a.push(s),a},[]),a)},"selectFiles"),h=l([c,s.a],(e,t)=>t.archived===o.searchArchived.ALL?Object.keys(e).length:Object.values(e).filter(e=>!e.archived).length,"selectFilesCount"),m=l([e=>e,e=>e.files.selectedFile],(e,t)=>f(e,{fileHashPath:t}),"selectSelectedFile"),f=l([(e,t)=>t.fileHashPath,c],(e,t)=>{if(!e)return null;let a;return t[e]&&(a=t[e]),a||(a=Object.values(t).find(t=>Object(n.getFilePathHash)(t.path)===e)),a?p(a,null,`file_${e}`):null},"selectFileByHashPath"),g=l([c],e=>{const t=Object.values(e).reduce((e,t)=>(Object.keys(t.tags).forEach(t=>{e[t.toLowerCase()]=!0}),e),{});return Object.keys(t).sort()},"selectTags"),E=l([c],e=>{const t={};for(let a in e)t[a]=p(e[a],null,`file_${a}`).toJSON();return t},"selectFilesForStorage")},148:function(e,t,a){"use strict";a.r(t),a.d(t,"formatFileSize",function(){return i}),a.d(t,"pluralize",function(){return s});const n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=e=>{const t=Math.floor(Math.log(e)/Math.log(1024));return e?(e/Math.pow(1024,t)).toFixed(2)+" "+n[t]:"0 Bytes"},s=(e,t)=>`${e}${1===t?"":"s"}`},149:function(e,t,a){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const i=a(0),s=a(12),r=a(4).default,{Spring:o}=a(29),{colors:l}=a(3),c=r.svg`
    width: ${e=>e.width}px;
`,p=({animated:e=!1,fullDetail:t=!1,width:a=20})=>{const s={};return t?s.fillOpacity=0:s.fill=l.blueLight,i.createElement(c,{width:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"239.466 189.649 110.527 167.811"},i.createElement("defs",null,i.createElement("path",{d:"M326.99 193.65c11.05 0 20 8.95 20 20v120.81c0 11.05-8.95 20-20 20h-64.52c-11.05 0-20-8.95-20-20V213.65c0-11.05 8.95-20 20-20h64.52z",id:"transfer-a"}),i.createElement("path",{d:"M334.73 281.13L294.77 320l-40.04-38.78 25.36-.03-.05-41.17 29.35-.04.05 41.18 25.29-.03z",id:"transfer-b"}),i.createElement("path",{d:"M302.77 198.69a8.04 8.04 0 11-16.08 0 8.04 8.04 0 0116.08 0z",id:"transfer-c"})),i.createElement("use",n({xlinkHref:"#transfer-a"},s,{stroke:l.blueLight,strokeWidth:"6"})),e?i.createElement(o,{delay:500,from:{opacity:0},to:{opacity:1}},e=>i.createElement("use",{xlinkHref:"#transfer-b",fill:l.blueLight,fillOpacity:e.opacity,stroke:l.blueLight,strokeWidth:"2"})):i.createElement("use",{xlinkHref:"#transfer-b",fill:l.blueLight,stroke:l.blueLight,strokeWidth:"2"}),i.createElement("g",null,i.createElement("use",{xlinkHref:"#transfer-c",fill:l.blueLight})))};p.propTypes={animated:s.bool,fullDetail:s.bool,width:s.number},e.exports=p},150:function(e,t,a){const n=a(3);e.exports.setFileList=e=>({type:n.actionTypes.TRANSFER_SET_FILE_LIST,files:e}),e.exports.startTansfer=e=>({type:n.actionTypes.TRANSFER_START_TRANFER,fileName:e}),e.exports.transferSaveSuccess=(e,t)=>({type:n.actionTypes.TRANSFER_SAVE_SUCCESS,fileName:e,filePath:t}),e.exports.reset=()=>({type:n.actionTypes.TRANSFER_RESET})},163:function(e,t,a){const n=a(101),i=a(164),s=n.join(i.homedir(),"SongRiffer/Recorder"),r=n.join(i.homedir(),"SongRiffer/Transfer");e.exports={backgroundColor:"#121212",events:{CHECK_FILE_EXISTS:"CHECK_FILE_EXISTS",CHECK_FILES:"CHECK_FILES",CHECK_FILES_DB_EXISTS:"CHECK_FILES_DB_EXISTS",CHECK_FILES_DB:"CHECK_FILES_DB",CLEAR_DB:"CLEAR_DB",DATA_FETCHED:"DATA_FETCHED",FETCH_DATA:"FETCH_DATA",FILE_ALREADY_EXISTS:"FILE_ALREADY_EXISTS",FILE_SAVE_SUCCESS:"FILE_SAVE_SUCCESS",FILE_SYSTEM_ERROR:"FILE_SYSTEM_ERROR",GET_MXLM:"GET_MXLM",GET_MXLM_SUCCESS:"GET_MXLM_SUCCESS",MISSING_FILES:"MISSING_FILES",OPEN_DEEPLINK:"OPEN_DEEPLINK",RELOAD:"RELOAD",SAVE_DATA:"SAVE_DATA",SAVE_MEDIA:"SAVE_MEDIA",TOGGLE_DEVTOOLS:"TOGGLE_DEVTOOLS",UNLINK_FILE:"UNLINK_FILE"},saveTypesFolder:{RECORDER:s,TRANSFER:r},RECORDER_BASE_PATH:s,TRANSFER_BASE_PATH:r,windowStateFileName:"window-state-app-songriffer.json"}},165:function(e,t,a){const n=a(0),i=a(4).default,{colors:s}=(a(12),a(3)),r=i.label`
    display: block;
    position: relative;
    width: 48px;
    height: 28px;
    margin-right: 1px;
    border-radius: 50px;
    border: 1px solid ${s._blue};
    background: ${e=>e.checked?s._blue:"transparent"};
    cursor: pointer;
    transition: background ease 0.3s;

    :after {
        position: absolute;
        content: '';
        width: 18px;
        height: 18px;
        border-radius: 100%;
        background: ${s._white};
        transform: translateX(${e=>e.checked?"25px":"5px"});
        top: 4px;
        transition: transform 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
`;e.exports=({checked:e,onChange:t})=>n.createElement(n.Fragment,null,n.createElement(r,{checked:e},n.createElement("input",{type:"checkbox",style:{display:"none"},onChange:t,checked:e})))},168:function(e,t,a){const n=a(0),i=a(4).default,{colors:s}=a(3),r=i.svg`
    width: 15px;
    height: 15px;
    margin-left: 2px;
    transform: rotate(${e=>e.rotate?"180deg":"0deg"});

    fill: ${s.blueLight};
`;e.exports=({rotate:e})=>n.createElement(r,{viewBox:"0 0 10 5",rotate:e},n.createElement("path",{fillRule:"evenodd",d:"M0 0h10L5 6"}))},18:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let i;a.d(t,"b",function(){return i}),a.d(t,"a",function(){return s}),function(e){e.IMPORT="IMPORT",e.RECORD="RECORD",e.TRANSFER="TRANSFER"}(i||(i={}));class s{constructor(){n(this,"name",void 0),n(this,"path",void 0),n(this,"size",void 0),n(this,"type",void 0),n(this,"added",void 0),n(this,"archived",void 0),n(this,"bpm",void 0),n(this,"comment",void 0),n(this,"duration",void 0),n(this,"newImport",void 0),n(this,"rating",void 0),n(this,"_sortRating",void 0),n(this,"deviceSource",void 0),n(this,"public",void 0),n(this,"publicId",void 0),n(this,"source",void 0),n(this,"tags",void 0),n(this,"_tagsArray",void 0),n(this,"timeSignature",void 0),n(this,"safePath",void 0),n(this,"uploaded",void 0),n(this,"uploadName",void 0),n(this,"escapedPath",void 0),n(this,"hashPath",void 0)}}},180:function(e){e.exports={apiKey:"AIzaSyBrkXIQBEvF9qslWeO91XUUUng3zAH9ZEk",databaseURL:"https://songriffer.firebaseio.com",projectId:"songriffer",storageBucket:"songriffer.appspot.com",messagingSenderId:"246769208094",appId:"1:246769208094:web:6a65c6866b23adc4"}},185:function(e,t,a){const n=a(0),i=a(12),s=a(55),r=a(13),o=a(3);class l extends n.Component{componentDidMount(){r.trackScreen("modalFileMissing"),r.trackEvent("file","invalid-file",this.props.file.type)}render(){const{file:e}=this.props;return n.createElement("div",null,n.createElement("div",null,"Sorry but we could not import the file ",e.name,"."),n.createElement("div",null,"Only audio files are supported."),n.createElement("div",null,"If you think this is a bug, feel free to contact us at"," ",n.createElement(s,{href:`mailto:${o.email}`},o.email),"."))}}var c,p,d;c=l,p="propTypes",d={dispatch:i.func,file:i.object},p in c?Object.defineProperty(c,p,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[p]=d,e.exports=l},19:function(e,t,a){"use strict";a.r(t),a.d(t,"setFiles",function(){return y}),a.d(t,"addFiles",function(){return T}),a.d(t,"editFile",function(){return S}),a.d(t,"removeFile",function(){return _}),a.d(t,"setMissingFiles",function(){return x}),a.d(t,"replaceFile",function(){return C}),a.d(t,"addTag",function(){return w}),a.d(t,"removeTag",function(){return A}),a.d(t,"setSortRule",function(){return R}),a.d(t,"disableNewImports",function(){return F}),a.d(t,"migrateLegacyData",function(){return k}),a.d(t,"handleFileOpen",function(){return D});var n=a(10),i=a(30),s=a(3),r=a(8),o=a(18),l=a(51);const{openModal:c}=a(23),{pausePlayer:p,playFile:d}=a(58),{notifyMissingFile:u}=a(79),{selectFileByHashPath:h,_selectFiles:m}=a(14),{selectUser:f}=a(28),g=a(31),E=a(13),{clearDB:b,openFile:v}=a(20),y=e=>({type:s.actionTypes.SET_FILES,files:e}),T=(e,t=!1)=>(a,n)=>{if(t){const a={import:0,recorder:0,transfer:0},n=Object.values(e);n.forEach(e=>{e.source===o.b.IMPORT&&a.import++,e.source===o.b.RECORD&&a.recorder++,e.source===o.b.TRANSFER&&a.transfer++}),t&&g(`${n.length} files added:\n${Object.keys(a).map(e=>`${e}: ${a[e]}`).join("\n")}`),r.a.saveUserStats({files:a})}a({type:s.actionTypes.ADD_FILES,files:e,newImports:t,__saveToDB__:t,__db:s.db.files})},S=(e,t,a=!1)=>({type:s.actionTypes.EDIT_FILE,hashPath:e,edit:t,automaticEdit:a,__saveToDB__:!0,__db:s.db.files}),_=(e,t=!1)=>(a,n)=>{const i=n(),l=h(i,{fileHashPath:e}),p=i.files.missingFiles,d=f(i);if(!(l.source!==o.b.RECORD&&l.source!==o.b.TRANSFER||t||p.includes(l.hashPath)))return void a(c(s.modals.removeFile,{fileHashPath:e}));const u=[];l.uploaded&&u.push(r.a.deleteFile(d,l)),Promise.all(u).then(()=>{a({type:s.actionTypes.REMOVE_FILE,hashPath:e,__saveToDB__:!0,__db:s.db.files})})},x=e=>(t,a)=>{const n=m(a()),i=e.filter(e=>n[e]);t({type:s.actionTypes.SET_MISSING_FILES,filesHashPath:i})},C=(e,t)=>({type:s.actionTypes.REPLACE_FILE,oldFileHashPath:e,newFile:t,__saveToDB__:!0,__db:s.db.files}),w=(e,t)=>(a,n)=>{r.a.saveUserStats({tags:{[t.trim().toLowerCase()]:1}}),a({type:s.actionTypes.ADD_TAG,hashPath:e,tag:t.trim(),__saveToDB__:!0,__db:s.db.files})},A=(e,t)=>({type:s.actionTypes.REMOVE_TAG,hashPath:e,tag:t,__saveToDB__:!0,__db:s.db.files}),R=e=>({type:s.actionTypes.SET_SORT_RULE,sortRule:e}),F=()=>(e,t)=>{const a=m(t()),n=Object.keys(a).filter(e=>a[e].newImport);n.length&&e({type:s.actionTypes.DISABLE_NEW_IMPORTS,files:n})},k=(e={},t=!1)=>(a,i)=>{const s=f(i());if(null!==e){g(`Migrating data to cloud ${s.uid} ${t?"(win backup)":""}`),E.trackEvent("app","cloud-migration");const a={};Object.values(e).forEach(e=>{a[Object(n.getFilePathHash)(e.path)]=e}),r.a.saveFullFilesData(s.uid,a).then(()=>{t&&g(`Migration for win backup successfull ${s.uid}`),b()}).catch(e=>{g(`Error migrating data to cloud ${e.toString()}`),t&&g(`Error migration data to cloud from win backup ${e.toString()}`),console.error(e)})}},D=e=>(t,a)=>{const r=a(),o=f(r),h=r.files.missingFiles;if(!Object(i.canRead)(o))return void t(c(s.modals.forbiddenAction,{type:l.a.OPEN_FILE}));if(Object(n.isPlayable)(e))return h.includes(e.hashPath)&&!e.uploaded?void t(u(e)):void t(d(e.hashPath));t(p());const m=r.application.enableExperimental;return e.isGuitarPro7()&&m?t(c(s.modals.tabs,{file:e})):v(e.path)}},20:function(e,t,a){(function(t){const n=t.require("electron"),i=a(13),s=a(3);let r=()=>{},o=()=>{};e.exports.setCallback=e=>{r=e},e.exports.onMissingFiles=e=>{o=e},n.ipcRenderer.on(s.mainConsts.events.CHECK_FILES_DB,(e,t)=>{r(s.mainConsts.events.CHECK_FILES_DB,t)}),n.ipcRenderer.on(s.mainConsts.events.DATA_FETCHED,(e,t)=>{r(s.mainConsts.events.DATA_FETCHED,t)}),n.ipcRenderer.on(s.mainConsts.events.MISSING_FILES,(e,t)=>{o(t)}),n.ipcRenderer.on(s.mainConsts.events.FILE_ALREADY_EXISTS,(e,t)=>{r(s.mainConsts.events.FILE_ALREADY_EXISTS,t)}),n.ipcRenderer.on(s.mainConsts.events.FILE_SYSTEM_ERROR,(e,t)=>{r(s.mainConsts.events.FILE_SYSTEM_ERROR,t)}),n.ipcRenderer.on(s.mainConsts.events.FILE_SAVE_SUCCESS,(e,t)=>{r(s.mainConsts.events.FILE_SAVE_SUCCESS,t)}),n.ipcRenderer.on(s.mainConsts.events.GET_MXLM_SUCCESS,(e,t)=>{r(s.mainConsts.events.GET_MXLM_SUCCESS,t)}),n.ipcRenderer.on(s.mainConsts.events.OPEN_DEEPLINK,(e,t)=>{r(s.mainConsts.events.OPEN_DEEPLINK,t)}),e.exports.checkFilesDBExists=()=>{n.ipcRenderer.send(s.mainConsts.events.CHECK_FILES_DB_EXISTS,{db:s.db.files})},e.exports.clearDB=()=>{n.ipcRenderer.send(s.mainConsts.events.CLEAR_DB)},e.exports.getFiles=()=>{n.ipcRenderer.send(s.mainConsts.events.FETCH_DATA,{db:s.db.files})},e.exports.getAppConfig=()=>{n.ipcRenderer.send(s.mainConsts.events.FETCH_DATA,{db:s.db.app})},e.exports.saveApp=e=>{n.ipcRenderer.send(s.mainConsts.events.SAVE_DATA,{db:"app",value:JSON.stringify(e)})},e.exports.openInFinder=e=>{n.shell.showItemInFolder(e)},e.exports.checkFiles=e=>{n.ipcRenderer.send(s.mainConsts.events.CHECK_FILES,{files:e})},e.exports.openLink=e=>{n.shell.openExternal(e),i.trackEvent("app","open-link",e)},e.exports.reload=()=>{n.ipcRenderer.send(s.mainConsts.events.RELOAD)},e.exports.toggleDevTools=()=>{n.ipcRenderer.send(s.mainConsts.events.TOGGLE_DEVTOOLS)},e.exports.saveMedia=(e,t,a)=>{n.ipcRenderer.send(s.mainConsts.events.SAVE_MEDIA,{saveType:e,fileName:t,wavData:a})},e.exports.checkFileExists=e=>{n.ipcRenderer.send(s.mainConsts.events.CHECK_FILE_EXISTS,{fileName:e})},e.exports.copyToClipboard=e=>{n.clipboard.writeText(e)},e.exports.unlinkFile=e=>{n.ipcRenderer.send(s.mainConsts.events.UNLINK_FILE,{filePath:e})},e.exports.getMXML=e=>{n.ipcRenderer.send(s.mainConsts.events.GET_MXLM,{filePath:e})},e.exports.openFile=e=>{n.shell.openItem(e)}}).call(this,a(15))},201:function(e,t){},203:function(e,t){},21:function(e,t,a){"use strict";const n=a(76);t.a=n([e=>e.search],e=>({...e,cleanedBasicTerm:e.basicTerm.trim().toLowerCase(),cleanedTerm:e.term.trim().toLowerCase()}),"selectSearch")},212:function(e,t,a){const n=a(0),i=a(12),s=a(4).default,r=s.div`
    max-width: 600px;
`,o=s.div`
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
`,l=n.memo(({message:e,title:t})=>n.createElement(r,null,n.createElement(o,null,t),n.createElement("div",null,e)));l.propTypes={message:i.node,title:i.string},e.exports=l},213:function(e,t,a){function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const i=a(0),s=a(12),r=a(4).default,o=a(55),l=a(39),c=a(13),p=a(31),{openLink:d}=a(20),u=a(3),h=r.div`
    max-width: 700px;
`,m=r.div`
    padding: 45px;
    background: radial-gradient(ellipse at top, ${u.colors.blueLight}, transparent),
        radial-gradient(ellipse at left, ${u.colors.red}, transparent),
        radial-gradient(ellipse at right, ${u.colors.purple}, transparent);
`,f=r.div`
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
`,g=r.div`
    text-align: center;
`,E=r(o)`
    display: block;
    padding: 10px;
    margin-bottom: 10px;
    text-decoration: none;
    text-align: center;
    background: ${u.colors._blue};

    :hover {
        background: ${u.colors.blueGreen};
        color: ${u.colors._black};
    }
`,b=r.div`
    font-size: 14px;
    opacity: 0.7;
    text-align: center;
`,v=r.div`
    padding: 20px;
    margin-top: 40px;
`,y=r.div`
    margin-bottom: 25px;
    text-align: center;
    font-size: 20px;
    font-weight: lighter;
`,T=r.div`
    padding-bottom: 25px;
    margin-bottom: 25px;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`,S=r.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    :last-child {
        border: none;
    }
`,_=r.div`
    width: ${e=>e.hasVideo?"50%":"100%"};
    padding-right: ${e=>e.hasVideo?"15px":"0"};
`,x=r.div`
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
`,C=r.div`
    font-size: 15px;
    opacity: 0.8;
`,w=r.video`
    width: 50%;
`;class A extends i.Component{constructor(...e){super(...e),n(this,"clickUpdate",()=>{c.trackEvent("app","download-update"),p("Download update from app")})}componentDidMount(){c.trackScreen("modalUpdate")}render(){const{changelog:e,mandatory:t,url:a}=this.props,n=t?"Your app is too old!":"Update version available";return i.createElement(h,null,i.createElement(m,null,i.createElement(f,null,n),t?i.createElement(l,null,i.createElement(g,null,"Please download and install the latest version to keep using SongRiffer")):null,i.createElement(E,{href:a,onClick:this.clickUpdate},"Download the update"),i.createElement(b,null,"Or visit ",i.createElement(o,{onClick:()=>d(u.landingUrl)},u.landingUrl)," to download and install the latest version.")),Array.isArray(e.sections)&&e.sections.length?i.createElement(v,null,i.createElement(y,null,e.title?e.title:"What's new in this update:"),e.description?i.createElement(T,null,e.description):null,i.createElement("div",null,e.sections.map(e=>i.createElement(S,{key:e.title},i.createElement(_,null,i.createElement(x,null,e.title),i.createElement(C,{hasVideo:e.video},e.message)),e.video?i.createElement(w,{autoPlay:!0,playsInline:!0,muted:!0,loop:!0,src:e.video}):null)))):null)}}n(A,"propTypes",{changelog:s.object,mandatory:s.bool,url:s.string}),e.exports=A,e.exports.rootStyle="\n    max-height: 90vh;\n    padding: 0;\n    overflow-y: auto;\n"},224:function(e,t,a){e.exports=function(){return new Worker(a.p+"9b8ea8abcf2fd171fa20.worker.js")}},225:function(e,t,a){const n=a(0),i=a(4).default,{colors:s}=a(3),r=i.svg`
    width: ${e=>e.width}px;
`;e.exports=({animated:e=!1,width:t=20})=>n.createElement(r,{width:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"159.476 103.524 63.048 56.381"},n.createElement("defs",null,n.createElement("path",{d:"M160.48 130.71h15.47v26.19h-15.47v-26.19z",id:"stats-a"}),n.createElement("path",{d:"M181.67 114.05h15.47v42.85h-15.47v-42.85z",id:"stats-b"}),n.createElement("path",{d:"M204.05 104.52h15.47v52.38h-15.47v-52.38z",id:"stats-c"})),n.createElement("use",{xlinkHref:"#stats-a",fill:s.blueLight}),n.createElement("use",{xlinkHref:"#stats-b",fill:s.blueLight}),n.createElement("use",{xlinkHref:"#stats-c",fill:s.blueLight}))},226:function(e,t,a){const n=a(0),i=a(4).default,s=a(3),r=i.svg`
    width: 184px;
    animation: open 1s 1;
    animation-timing-function: ease;

    path {
        fill: ${s.colors._white};
    }
`;e.exports=({angle:e,opacity:t})=>n.createElement(r,{viewBox:"0 0 184 184",style:{transform:`rotate(${e})`,opacity:t}},n.createElement("defs",null,n.createElement("clipPath",{id:"logo-b"},n.createElement("path",{d:"M.625.621094h173.222656V172.8125H.625zm0 0"})),n.createElement("clipPath",{id:"logo-a"},n.createElement("path",{d:"M0 0h174v173H0z"})),n.createElement("g",{id:"logo-c",clipPath:"url(#logo-a)"},n.createElement("g",{clipPath:"url(#logo-b)"},n.createElement("path",{d:"M74.582031 172.8125C38.964844 168.527344 2.6875 137.164063.707031 90.839844-1.34375 42.832031 35.828125 2.527344 83.917969.6875c48.1875-1.84375 88.25 35.582031 89.878906 83.511719 1.597656 46.980469-33.316406 82.6875-72.476562 88.398437 19.148437-4.351562 34.371093-14.488281 44.898437-31.125 10.550781-16.671875 13.402344-34.8125 8.863281-53.988281-7.789062-32.925781-38.855468-55.480469-72.910156-52.960937-34.179687 2.53125-60.917969 29.121093-64.277344 62.5-3.667968 36.425781 20.996094 69.035156 56.6875 75.789062"})),n.createElement("path",{d:"M98.648438 43.191406c26.601562 4.265625 50.992187 29.03125 50.578125 61.816407-.425782 33.550781-27.953125 60.859375-61.640625 61.015625-34.027344.15625-61.777344-26.816407-62.382813-60.851563-.589844-33.167969 24.109375-57.722656 50.671875-62-13.480469 3.472656-24.113281 10.925781-31.328125 22.867188-7.238281 11.976562-9.089844 24.894531-5.632812 38.449218C44.835938 127.6875 66.75 143.6875 91.613281 141.742188c23.050782-1.796875 42.597657-20.574219 45.265625-43.804688 2.992188-26.046875-13.941406-49.007812-38.230468-54.746094"}),n.createElement("path",{d:"M77.851563 135.882813c-17.867188-3.527344-34.558594-20.648438-33.675782-43.578125C45.066406 69.074219 63.769531 50.925781 86.75 50.6875c22.921875-.238281 42.078125 17.277344 43.636719 40.015625 1.636719 23.878906-15.492188 41.902344-34.382813 45.359375 9.863282-2.820312 17.382813-8.597656 22.183594-17.707031 3.816406-7.234375 4.894531-14.949219 3.253906-22.9375-3.429687-16.707031-17.59375-27.996094-34.800781-27.90625-16.066406.085937-30.277344 11.945312-33.421875 27.992187-3.675781 18.753907 8.140625 35.945313 24.632813 40.378907"}),n.createElement("path",{d:"M94.582031 74.859375c12.640625 2.765625 24.214844 15.582031 22.679688 32.234375-1.402344 15.253906-14.769531 27.144531-30.539063 26.960938-15.433593-.183594-28.492187-12.589844-29.4375-28.011719-1.03125-16.753906 10.984375-28.699219 22.878907-31.160156-6.007813 2.042968-10.726563 5.691406-13.875 11.230468-3.164063 5.566407-3.996094 11.523438-2.496094 17.730469 2.628906 10.910156 12.324219 18.484375 23.511719 18.488281 11.253906.007813 20.894531-7.589843 23.613281-18.539062 2.628906-10.578125-2.609375-24.527344-16.335938-28.933594"}))),n.createElement("use",{xlinkHref:"#logo-c"}))},227:function(e,t,a){const n=a(3);e.exports.setMXML=(e,t)=>({type:n.actionTypes.SET_MXML,filePath:e,mxml:t})},229:function(e,t,a){const n=a(3),i={files:{}};e.exports=(e=i,t)=>{switch(t.type){case n.actionTypes.TRANSFER_SET_FILE_LIST:return{...e,files:t.files};case n.actionTypes.TRANSFER_SAVE_SUCCESS:return{...e,files:{...e.files,[t.fileName]:{...e.files[t.fileName],transfered:!0,success:!0,filePath:t.filePath,receiving:!1}}};case n.actionTypes.TRANSFER_START_TRANFER:return{...e,files:{...e.files,[t.fileName]:{...e.files[t.fileName],receiving:!0}}};case n.actionTypes.TRANSFER_RESET:return i;default:return e}}},23:function(e,t,a){const n=a(3);e.exports.openModal=(e,t)=>({type:n.actionTypes.OPEN_MODAL,name:e,props:t});const i=()=>(e,t)=>{const{modal:a}=t();a.name===n.modals.updateAvailable&&a.props&&a.props.mandatory||e({type:n.actionTypes.CLOSE_MODAL})};e.exports.closeModal=i,e.exports.closeModalEsc=()=>i()},230:function(e,t,a){const n=a(13),i=a(3);let s=null;let r=null;e.exports=()=>e=>t=>{switch(e(t),t.type){case i.actionTypes.ADD_TAG:n.trackEvent("file","add-tag",t.tag);break;case i.actionTypes.CHECK_UPDATE:n.trackEvent("app",`check-update-${t.manual?"manual":"auto"}`,window.__songRiffer.version);break;case i.actionTypes.CHECK_UPDATE_FAILED:n.trackEvent("app","check-update-failed",window.__songRiffer.version);break;case i.actionTypes.CHECK_UPDATE_NO_UPDATE:n.trackEvent("app","check-update-no-update-manual",window.__songRiffer.version);break;case i.actionTypes.UPDATE_AVAILABLE:n.trackEvent("app","check-update-success-auto",window.__songRiffer.version);break;case i.actionTypes.CHECK_UPDATE_SUCCESS:n.trackEvent("app","check-update-success-manual",window.__songRiffer.version);break;case i.actionTypes.CLEAR_SEARCH:n.trackEvent("search","clear-search");break;case i.actionTypes.REMOVE_FILE:n.trackEvent("file","remove-file");break;case i.actionTypes.REMOVE_TAG:n.trackEvent("file","remove-tag",t.tag);break;case i.actionTypes.SEARCH_BASIC:t.term.length&&(e=>{clearTimeout(s),s=setTimeout(()=>{n.trackEvent("search","search-basic",e)},1e3)})(t.term.toLowerCase());break;case i.actionTypes.SEARCH_BPM:n.trackEvent("search","search-bpm",t.bpm);break;case i.actionTypes.SEARCH_TAG:n.trackEvent("search","search-tag",t.tag.toLowerCase());break;case i.actionTypes.SET_SEARCH:t.term&&(e=>{clearTimeout(r),r=setTimeout(()=>{n.trackEvent("search","search-term",e)},1e3)})(t.term.toLowerCase());break;case i.actionTypes.SET_SORT_RULE:n.trackEvent("file","sort",t.sortRule);break;case i.actionTypes.TOGGLE_ADVANCED_SEARCH:n.trackEvent("search","toggle-advanced")}}},233:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(9),r=a(57),o=a(4),l=a(43),c=a(47);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const d=a(0),u=a(4).default,h=a(111),{colors:m}=a(3),f=u(h)`
    display: inline-flex;
    height: 22px;
    align-items: center;
    ${e=>e.additionalStyle}
    border: 2px solid ${e=>e.color};
    color: ${e=>e.color};
    font-weight: lighter;

    :hover {
        background: ${e=>e.color};
        color: ${e=>Object(c.getFontColorForColor)(e.color)};
    }
`,g=u.div`
    max-width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,E=u.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    cursor: pointer;
    margin-left: 3px;
    background: ${m._white};
    border-radius: 100%;
    color: ${e=>e.color};
    font-size: 12px;
    transition: all ease 0.1s;

    :hover {
        background: ${m._black};
        color: ${m._white};
    }
`;var b=d.forwardRef((e,t)=>{const{additionalStyle:a,children:n,deleteTitle:i,onDelete:s}=e,r=Object(c.getTagColor)(n),o={...e};return delete o.onDelete,d.createElement(f,p({},o,{color:r,additionalStyle:a,ref:t}),d.createElement(g,null,n),s?d.createElement(E,{title:i,onClick:s,color:r},"x"):null)}),v=a(21),y=a(3);const T=a(112),S=e=>(T.start("search"),{type:y.actionTypes.SEARCH_BASIC,term:e}),_=()=>({type:y.actionTypes.TOGGLE_ADVANCED_SEARCH,__saveToDB__:!0,__db:y.db.app}),x=e=>(T.start("search"),{type:y.actionTypes.SEARCH_TAG,tag:e.trim()}),C=e=>({type:y.actionTypes.SET_SEARCH_ARCHIVED,archived:e});var w,A,R;function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const k=a(0),{connect:D}=a(9),P=a(12),O=a(53),L=a(54),I=a(78),M=a(165),{selectTags:N}=a(14),U=a(3),j=o.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${e=>e.visible?"300px":0};
    border-left: ${e=>e.visible?`1px solid ${U.colors.blueLight}`:0};
    transition: width ease 0.3s;
    transform: translateZ(0);
`,$=o.default.div`
    position: absolute;
    width: ${300}px;
    height: 100%;
    padding-left: 15px;
    top: 0;
    left: 0;
`,H=o.default.div`
    margin-bottom: 15px;
`,B=o.default.div`
    margin-bottom: 5px;
    color: ${U.colors.blueLight};
`,z=o.default.div`
    margin-bottom: 15px;
    display: flex;
`,G=o.default.span`
    display: flex;
    flex: 1;
    align-items: center;
`,V=o.default.div`
    margin-top: 25px;
`,W=o.default.div`
    display: flex;
    align-items: center;

    span {
        margin: 0 5px;
    }
`,K=Object(o.default)(L)`
    width: 70px;

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        margin: 0;
        appearance: none;
    }
`;var Y=D(e=>({allTags:N(e),search:Object(v.a)(e),visible:Object(v.a)(e).displayAdvanced}))((R=A=class extends k.Component{constructor(...e){super(...e),F(this,"state",{autocompleteTag:null,newTag:""}),F(this,"rootRef",k.createRef()),F(this,"nameInputRef",k.createRef()),F(this,"searchName",e=>{this.props.dispatch((e=>(T.start("search"),{type:y.actionTypes.SET_SEARCH,term:e}))(e.target.value))}),F(this,"onBPMChange",e=>{this.props.dispatch((e=>(T.start("search"),{type:y.actionTypes.SEARCH_BPM,bpm:e}))(e.target.value))}),F(this,"onBPMDeltaChange",e=>{this.props.dispatch((e=>(T.start("search"),{type:y.actionTypes.SEARCH_BPM_DELTA,bpmDelta:e}))(e.target.value))}),F(this,"onTagChange",e=>{const t=Object.keys(this.props.search.tags);this.setState({autocompleteTag:Object(c.getTagAutocomplete)(this.props.allTags,e.target.value,t),newTag:e.target.value})}),F(this,"onTagKeyDown",e=>{if("Tab"===e.key&&this.state.autocompleteTag)return this.props.dispatch(x(this.state.autocompleteTag)),e.preventDefault(),void this.quitTagEdit();"Enter"===e.key&&this.state.newTag.length&&(this.props.dispatch(x(this.state.newTag)),this.quitTagEdit())}),F(this,"clearSearch",()=>{this.props.dispatch((()=>({type:y.actionTypes.CLEAR_SEARCH}))())}),F(this,"removeTag",e=>{this.props.dispatch((e=>(T.start("search"),{type:y.actionTypes.REMOVE_SEARCH_TAG,tag:e}))(e))}),F(this,"onTransitionEnd",()=>{this.props.dispatch((()=>({type:y.actionTypes.ADVANCED_TRANSITION_DONE}))())}),F(this,"onSwitchArchived",e=>{e.target.checked?this.props.dispatch(C(U.searchArchived.ALL)):this.props.dispatch(C(U.searchArchived.NON_ARCHIVED))})}quitTagEdit(){this.setState({autocompleteTag:null,newTag:""})}shouldComponentUpdate(e){return this.props.visible||e.visible}componentDidMount(){this.rootRef.current.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})}componentWillUnmout(){this.rootRef.current.removeEventListener("transitionend",this.onTransitionEnd)}render(){const{search:e,visible:t}=this.props,{autocompleteTag:a,newTag:n}=this.state,i=e.term.length||e.bpm||Object.keys(e.tags).length,s=t?void 0:-1;return k.createElement(j,{visible:t,ref:this.rootRef},k.createElement($,null,k.createElement(H,null,k.createElement(B,null,"Name"),k.createElement(L,{isFullWidth:!0,type:"text",onChange:this.searchName,value:e.term,tabIndex:s,id:"advanced-search-input",ref:this.nameInputRef})),k.createElement(H,null,k.createElement(B,null,"Tags"),k.createElement(I,{isFullWidth:!0,autocomplete:a,autocompleteStyle:"\n    top: 3px;\n    left: 2px;\n",onChange:this.onTagChange,onKeyDown:this.onTagKeyDown,value:n,tabIndex:s}),Object.keys(e.tags).length?k.createElement(V,null,Object.keys(e.tags).map(e=>k.createElement(b,{key:e,onDelete:()=>this.removeTag(e),deleteTitle:"Remove this tag from the search",additionalStyle:"\n    margin-bottom: 5px;\n"},e))):null),k.createElement(H,null,k.createElement(B,null,"Tempo"),k.createElement(W,null,k.createElement(K,{type:"number",onChange:this.onBPMChange,value:e.bpm,min:1,tabIndex:s}),k.createElement("span",null,"bpm + / - "),k.createElement(K,{type:"number",onChange:this.onBPMDeltaChange,value:e.bpmDelta,title:e.bpm?`Results will include riffs that have a tempo between ${e.bpm-10} and ${e.bpm+10}`:null,min:0,tabIndex:s}))),k.createElement(z,null,k.createElement(G,null,"Show archived files"),k.createElement(M,{onChange:this.onSwitchArchived,checked:e.archived===U.searchArchived.ALL})),i?k.createElement(O,{onClick:this.clearSearch,tabIndex:s},"Clear search"):null))}},F(A,"propTypes",{allTags:P.any,dispatch:P.func,search:P.object,visible:P.bool}),w=R))||w,X=a(6);const q=o.default.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: ${X.colors.blueLight};
    border: 20px dashed ${X.colors.blueLight};
    font-size: 200px;
    justify-content: center;
    align-items: center;
    z-index: 100;
    opacity: ${e=>e.dragging?1:0};
    transition: opacity ease 0.7s;
`;var J=({dragging:e})=>i.a.createElement(q,{dragging:e},"+");const Z=o.default.div`
    position: absolute;
    width: 100%;
    height: 20px;
    ${e=>e.hasNotification?"":"-webkit-app-region: drag;"}
    top: 0;
    left: 0;
`;var Q=Object(s.connect)(e=>({notification:e.notifications.notification}))(({notification:e})=>i.a.createElement(Z,{hasNotification:e.active}));const ee=a(53),te=a(55),ae=a(39),{openLink:ne,reload:ie}=a(20),se=a(31),re=o.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${y.colors._white};
`,oe=o.default.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
`,le=o.default.div`
    font-size: 18px;
`,ce=o.default.div`
    padding: 30px 0;
`,pe=Object(o.default)(ee)`
    padding: 5px 10px;
`;var de=()=>(i.a.useEffect(()=>{se("Error screen displayed")},[]),i.a.createElement(re,null,i.a.createElement(oe,null,"Woops, something went wrong :("),i.a.createElement(le,null,"Sorry about that, it seems something is broken."),i.a.createElement(ce,null,i.a.createElement(pe,{onClick:ie},"Restart the app")),i.a.createElement(ae,{size:"xs"},"If you think something is not right, feel free to contact us for support:"),i.a.createElement(ae,{size:"xs"},i.a.createElement(te,{href:`mailto:${y.email}`},"Send us an email")),i.a.createElement(ae,{size:"xs"},i.a.createElement(te,{onClick:()=>ne(y.messengerUrl)},"Write to us on Messenger")))),ue=a(32),he=a(29),me=a(10);function fe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const ge=a(78),Ee=o.default.div`
    cursor: pointer;
`;class be extends i.a.Component{constructor(...e){super(...e),fe(this,"state",{edit:!1,_value:this.props.value||""}),fe(this,"onClick",()=>{this.setState({edit:!0})}),fe(this,"onKeyDown",e=>{"Enter"===e.key&&this.props.onSave(this.state._value),"Enter"!==e.key&&"Escape"!==e.key||this.setState({edit:!1})}),fe(this,"onBlur",()=>{this.props.onSave(this.state._value),this.setState({edit:!1})}),fe(this,"onChange",e=>{this.setState({_value:e.target.value})})}render(){const{onFocus:e,placeholder:t,type:a,value:n}=this.props,{edit:s,_value:r}=this.state;return s?i.a.createElement(ge,{autoFocus:!0,onBlur:this.onBlur,onChange:this.onChange,onFocus:e,onKeyDown:this.onKeyDown,value:r,style:{width:"100%"},type:a}):i.a.createElement(Ee,{onClick:this.onClick,title:"Click to edit"},n||t)}}fe(be,"defaultProps",{onFocus:y.noop,type:"text"});var ve=be;var ye=o.default.div`
    display: grid;
    grid-template-columns: 300px 80px 1fr 70px 100px 100px 5px;
    grid-gap: 0;
    padding: 0 5px;
    border-bottom: 1px solid #444;
`;const Te=o.default.div`
    flex: 1;
    padding: 7px 5px 7px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,Se=o.default.span`
    color: #777;
`;var _e=({name:e})=>{const t=Object(me.extname)(e),a=e.replace(t,"");return i.a.createElement(Te,{title:e},a,i.a.createElement(Se,null,t))},xe=a(133),Ce=a(134),we=a(135),Ae=a(136);function Re(){return(Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let Fe;!function(e){e.FontAwesome="FontAwesome",e.Foundation="Foundation",e.Ionicons="Ionicons",e.MaterialCommunityIcons="MaterialCommunityIcons"}(Fe||(Fe={}));const ke={[Fe.FontAwesome]:xe,[Fe.Foundation]:Ce,[Fe.Ionicons]:we,[Fe.MaterialCommunityIcons]:Ae};var De=({className:e,font:t,onClick:a,onMouseEnter:n,onMouseLeave:s,name:r,style:o={}})=>{let l=r?ke[t][r]||"?":"";"number"==typeof l&&(l=String.fromCharCode(l));const c={fontSize:18,color:X.colors._white,fontFamily:t,fontWeight:400,fontStyle:"normal",...o},p={};return"function"==typeof a&&(p.onClick=a,c.cursor="pointer"),"function"==typeof n&&(p.onMouseEnter=n),"function"==typeof s&&(p.onMouseLeave=s),i.a.createElement("span",Re({className:e,style:c},p),l)};const Pe=o.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;

    :hover {
        opacity: 1;
    }
`;var Oe=({onClick:e})=>i.a.createElement(Pe,null,i.a.createElement(De,{font:Fe.MaterialCommunityIcons,name:"dots-vertical",onClick:e,style:{fontSize:25}}));var Le=i.a.memo(({on:e,onClick:t,onMouseEnter:a,onMouseLeave:n,value:s})=>{const r=e?"ios-star":"ios-star-outline";return i.a.createElement(De,{font:Fe.Ionicons,name:r,onClick:()=>t(s),onMouseEnter:()=>a(s),onMouseLeave:()=>n(s),style:{fontSize:17,paddingRight:3,opacity:e?1:.2}})});function Ie(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Me=o.default.div`
    cursor: pointer;
`;var Ne,Ue,je,$e=class extends i.a.Component{constructor(...e){super(...e),Ie(this,"state",{starsHover:!1}),Ie(this,"setRating",e=>{this.props.onChange(e)}),Ie(this,"onMouseEnter",e=>{this.setState({starsHover:e})}),Ie(this,"onMouseLeave",()=>{this.setState({starsHover:!1})})}render(){const{rating:e}=this.props,{starsHover:t}=this.state,a=!1!==t?t:e;return i.a.createElement(Me,null,Array(5).fill(0).map((e,t)=>i.a.createElement(Le,{on:null===a?void 0:a>=t,key:`star-${t}`,onClick:this.setRating,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,value:t})))}};function He(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Be=a(0),{connect:ze}=a(9),Ge=a(12),Ve=a(78),{selectTags:We}=a(14);var Ke,Ye,Xe,qe=ze(e=>({allTags:We(e)}))((je=Ue=class extends Be.Component{constructor(...e){super(...e),He(this,"state",{autocompleteTag:null,newTag:""}),He(this,"onTagKeyDown",e=>{"Enter"===e.key&&this.state.newTag.length&&(this.resetTagWrite(),this.props.addTag(this.state.newTag)),"Tab"===e.key&&(this.state.autocompleteTag&&(this.resetTagWrite(),this.props.addTag(this.state.autocompleteTag)),e.preventDefault()),"Escape"===e.key&&(this.props.quitTagEdit(),e.preventDefault())}),He(this,"resetTagWrite",()=>{this.setState({autocompleteTag:null,newTag:""},this.calculateVisibleTags)}),He(this,"writeTag",e=>{this.setState({autocompleteTag:Object(c.getTagAutocomplete)(this.props.allTags,e.target.value,this.props.blacklist),newTag:e.target.value})})}render(){const{autocompleteTag:e,newTag:t}=this.state,{inputWidth:a,quitTagEdit:n}=this.props;return Be.createElement(Ve,{autocomplete:e,autoFocus:!0,onBlur:n,onChange:this.writeTag,onKeyDown:this.onTagKeyDown,value:t,style:{width:a,height:22}})}},He(Ue,"propTypes",{addTag:Ge.func,allTags:Ge.any,blacklist:Ge.array,quitTagEdit:Ge.func}),Ne=je))||Ne;function Je(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Ze=a(0),Qe=a(4).default,et=a(12),{connect:tt}=a(9),at=a(111),{colors:nt}=a(3),it=Qe.div`
    position: relative;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    ${e=>e.limitedLayout?((e,t)=>`\n    ${e?`\n            flex-direction: row;\n\n            ${t?"\n                    justify-content: flex-end;\n                ":""}\n        `:""}\n`)(e.editTag,e.moveForInput):null}
    ${e=>e.additionalStyle}
`,st=Qe(at)`
    padding: 0;
    text-align: center;
    border: 2px solid ${nt._white};

    :hover {
        background: ${nt._white};
        color: ${nt._black};
    }
`,rt=Qe(at)`
    border: 2px solid ${nt._white};

    :hover {
        background: ${nt._white};
        color: ${nt._black};
    }
`;var ot=tt(e=>({advancedTransitionDone:Object(v.a)(e).advancedTransitionDone,appWidth:e.application.appWidth}))((Xe=Ye=class extends Ze.PureComponent{constructor(...e){super(...e),Je(this,"state",{editTag:!1,firstVisibleTag:!1,fitInput:!0,limitedLayout:!1,sliceTags:!1,visibleTags:this.props.tags.length}),Je(this,"rootRef",Ze.createRef()),Je(this,"tagsRef",{}),Je(this,"startEditTag",()=>{this.setState({editTag:!0},this.calculateVisibleTags)}),Je(this,"onTagContextMenu",(e,t)=>{this.props.onTagContextMenu(t,e.clientX,e.clientY)}),Je(this,"onTagClick",e=>{this.props.onTagClick(e)}),Je(this,"addTag",e=>{this.props.addTag(e)}),Je(this,"quitTagEdit",()=>{this.setState({editTag:!1},this.calculateVisibleTags)}),Je(this,"calculateVisibleTags",()=>{if(!this.props.limitedLayout||!this.props.tags.length)return;const e=this.rootRef.current.offsetWidth,t=Object.values(this.tagsRef).filter(Boolean),{tagsTotalWidth:a,visibleTags:n}=t.reduce((t,a)=>(t.tagsTotalWidth+=a.offsetWidth+3,t.tagsTotalWidth<e-26&&t.visibleTags++,t),{tagsTotalWidth:0,visibleTags:0});if(n!==t.length&&(this.setState({visibleTags:n-1}),this.state.editTag||this.setState({sliceTags:!0})),this.state.editTag&&a+100>e){const{firstVisibleTag:a}=t.reverse().reduce((a,n,i)=>(a.tagsTotalWidth+=n.offsetWidth+3,a.tagsTotalWidth>e&&!a.firstVisibleTag&&(a.firstVisibleTag=t.length-(i+1)),a),{firstVisibleTag:!1,tagsTotalWidth:100});this.setState({firstVisibleTag:a,fitInput:!1})}else this.setState({fitInput:!0})})}componentDidMount(){this.calculateVisibleTags()}componentDidUpdate(e){(e.tags.length||this.props.tags.length)&&(e.tags!==this.props.tags||e.appWidth!==this.props.appWidth||!e.advancedTransitionDone&&this.props.advancedTransitionDone)&&this.setState({sliceTags:!1,visibleTags:this.props.tags.length},this.calculateVisibleTags)}render(){const{limitedLayout:e,openTagModal:t,tags:a}=this.props,{editTag:n,firstVisibleTag:i,fitInput:s,sliceTags:r,visibleTags:o}=this.state;return Ze.createElement(it,{ref:this.rootRef,additionalStyle:this.props.rootStyle,limitedLayout:e,editTag:n,moveForInput:!s},a.slice(0,r?o:a.length).map((e,t)=>Ze.createElement(b,{key:e,onContextMenu:t=>this.onTagContextMenu(t,e),onClick:()=>this.props.onTagClick(e),title:`Click to search all files with the tag "${e}"`,ref:t=>this.tagsRef[e]=t,additionalStyle:n&&!s&&!1!==i&&t===i?"\n    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%);\n":""},e)),r?Ze.createElement(rt,{onClick:t,title:`${a.length-o} tags hidden, click to see them and add more`},a.length-Math.max(0,o),"+"):Ze.createElement(Ze.Fragment,null,n?Ze.createElement(qe,{addTag:this.addTag,blacklist:a,inputWidth:100,quitTagEdit:this.quitTagEdit}):Ze.createElement(st,{className:"add-tag",onClick:this.startEditTag,style:{width:26,height:22}},"+")))}},Je(Ye,"propTypes",{advancedTransitionDone:et.bool,appWidth:et.number,dispatch:et.func,limitedLayout:et.bool,openTagModal:et.func,onTagClick:et.func,onTagContextMenu:et.func,tags:et.array}),Je(Ye,"defaultProps",{onTagContextMenu:()=>{}}),Ke=Xe))||Ke,lt=a(237);const ct=o.default.div`
    padding: 9px;
    background: red;
    background: #222222FF;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
    z-index: 20;
    border-radius: 3px;
    border: 1px solid ${X.colors._grey};
    opacity: ${e=>e.isVisible?1:0};
    transition: opacity 0.2s ease;
    pointer-events: ${e=>e.isVisible?"auto":"none"};
    ${e=>e.isText?"\n        max-width: 250px;\n        font-size: 14px;\n    ":""}

    ${e=>{switch(e.placement){case"top":return"margin-bottom: 10px;";case"bottom":case"bottom-start":case"bottom-end":return"margin-top: 10px;";default:return""}}}
`,pt=o.default.div`
    width: 100%;

    ${e=>{switch(e.placement){case"top":return"bottom: 0;";case"bottom":case"bottom-start":case"bottom-end":return"top: 0;";default:return""}}}
`,dt=o.default.div`
    position: absolute;
    box-sizing: content-box;
    width: 12px;
    height: 12px;
    background: #222222FF;
    border: ${X.colors._grey} 1px solid;
    border-left-color: ${X.colors._grey};
    border-top-color: ${X.colors._grey};
    border-right-width: 0;
    border-bottom-width: 0;

    ${e=>{switch(e.placement){case"top":return"\n                    transform: rotate(225deg);\n                    bottom: -7px;\n                    left: calc(50% - 16px);\n                ";case"bottom":return"\n                    transform: rotate(45deg);\n                    top: -7px;\n                    left: -9px;\n                ";case"bottom-start":return"\n                    transform: rotate(45deg);\n                    top: -7px;\n                    left: 5px;\n                ";case"bottom-end":return"\n                    transform: rotate(45deg);\n                    top: -7px;\n                    right: 20px;\n                ";default:return""}}}
`;function ut(){return(ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const ht=o.default.div`
    cursor: pointer;
`;var mt=({children:e,handler:t,isText:a=!1})=>{const[s,r]=Object(n.useState)(!1),[o,l]=Object(n.useState)(null),[c,p]=Object(n.useState)(null),[d,u]=Object(n.useState)(null),{styles:h,attributes:m}=Object(lt.a)(o,c,{placement:"top",modifiers:[{name:"arrow",options:{element:d}}]}),f=m.popper?m.popper["data-popper-placement"]:"";return i.a.createElement(i.a.Fragment,null,i.a.createElement(ht,{ref:l,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1)},t),i.a.createElement(ct,ut({ref:p,style:h.popper},m.popper,{isVisible:s,isText:a,placement:f}),i.a.createElement(pt,{ref:u,style:h.arrow,placement:f},i.a.createElement(dt,{placement:f})),e))},ft=a(8);function gt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const{openModal:Et}=a(23),{addTag:bt,handleFileOpen:vt}=a(19),{displayTagContextMenu:yt}=a(45),{selectUser:Tt}=a(28),St=a(13),_t=a(3),xt=Object(o.default)(ye)`
    background: ${e=>e.selected?"rgba(255, 255, 255, 0.1)":"transparent"};
    transition: background ease 0.2s;
    opacity: ${e=>e.archived?.7:1};

    .add-tag {
        display: none;
    }

    :hover .add-tag {
        display: inline-block;
    }

    .play-button {
        margin-right: 5px;
        opacity: ${e=>e.isPlayable&&e.selected?1:0};
    }

    ${e=>e.isPlayable?":hover .play-button {\n            opacity: 1;\n        }":""}

    :hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .comment-icon {
        display: ${e=>e.hasComment?"block":"none"};
        opacity: ${e=>e.hasComment?.6:.4};
    }

    .comment-icon:hover {
        opacity: 1;
    }

    :hover .comment-icon {
        display: block;
    }

    box-shadow: ${e=>e.uploaded?`inset 2px 0px 0 ${X.colors.blueGreen}`:"none"};
`,Ct=o.default.span`
    cursor: pointer;
`,wt=o.default.div`
    display: flex;
    align-items: center;
`,At=o.default.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: ${X.colors.redLight};
    color: #fff;
    cursor: pointer;
    font-size: 18px;
`,Rt=o.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;var Ft=Object(s.connect)((e,t)=>({missingFiles:e.files.missingFiles,playing:t.selected&&e.player.playing,user:Tt(e)}))(class extends i.a.PureComponent{constructor(...e){super(...e),gt(this,"onDoubleClick",()=>{this.props.dispatch(vt(this.props.file))}),gt(this,"addTag",e=>{this.props.dispatch(bt(this.props.file.hashPath,e))}),gt(this,"onTagContextMenu",(e,t,a)=>{this.props.dispatch(yt(this.props.file.hashPath,e,t,a))}),gt(this,"setRating",e=>{this.updateFile({rating:e}),St.trackEvent("file","set-rating")}),gt(this,"onTagClick",e=>{this.props.onTagClick(e)}),gt(this,"updateFile",e=>{ft.a.updateFile(this.props.user,this.props.file.hashPath,e)}),gt(this,"saveBPM",e=>{parseInt(e,10)<0||(this.updateFile({bpm:e}),St.trackEvent("file","set-bpm"))}),gt(this,"saveTimeSignature",e=>{this.updateFile({timeSignature:e}),St.trackEvent("file","set-time-signature")}),gt(this,"onTimeSignatureFocus",e=>{const t=e.current.value.split("/");e.current.setSelectionRange(0,t[0].length)}),gt(this,"openOptionsModal",()=>{this.props.dispatch(Et(_t.modals.fileOptions,{file:this.props.file}))}),gt(this,"onClickMissing",()=>{this.props.dispatch(Et(_t.modals.fileMissing,{fileHashPath:this.props.file.hashPath}))}),gt(this,"openTagModal",()=>{this.props.dispatch(Et(_t.modals.tags,{fileHashPath:this.props.file.hashPath}))}),gt(this,"openCommentModal",()=>{this.props.dispatch(Et(_t.modals.comment,{fileHashPath:this.props.file.hashPath}))})}renderFile(e){return this.props.file.newImport?i.a.createElement(he.Spring,{from:{background:"rgba(255, 255, 255, 0.4)"},to:{background:"rgba(255, 255, 255, 0)"},config:{duration:3e3}},({background:t})=>i.a.createElement("div",{style:{background:t}},e)):e}render(){const{file:e,missingFiles:t,playing:a,selected:n}=this.props,s=t.includes(e.hashPath),r=!s||s&&(e.hasComment()||e.uploaded);return this.renderFile(i.a.createElement(xt,{archived:e.archived,hasComment:e.hasComment(),isPlayable:Object(me.isPlayable)(e),onDoubleClick:this.onDoubleClick,selected:n,id:`file-${e.hashPath}`,uploaded:e.uploaded},i.a.createElement(wt,null,i.a.createElement(Ct,{className:"play-button",onClick:this.onDoubleClick},i.a.createElement(De,{font:Fe.Ionicons,name:"ios-play",style:{fontSize:15}})),i.a.createElement(_e,{name:e.name}),s&&!e.uploaded?i.a.createElement(mt,{handler:i.a.createElement(At,{onClick:this.onClickMissing},"!"),isText:!0},"We could not locate this file - click to replace it or remove it from your library"):null,r?i.a.createElement(De,{className:"comment-icon",font:Fe.MaterialCommunityIcons,name:"comment-text-outline",onClick:this.openCommentModal}):null),i.a.createElement(Rt,null,e.duration?Object(me.formatDuration)(e.duration):"--:--"),i.a.createElement(ot,{addTag:this.addTag,limitedLayout:!0,openTagModal:this.openTagModal,onTagClick:this.onTagClick,onTagContextMenu:this.onTagContextMenu,tags:e.getTags()}),i.a.createElement(Rt,null,i.a.createElement(ve,{value:e.bpm,placeholder:"+",onSave:this.saveBPM,type:"number"})),i.a.createElement(Rt,null,i.a.createElement(ve,{onFocus:this.onTimeSignatureFocus,onSave:this.saveTimeSignature,value:e.timeSignature})),i.a.createElement(Rt,null,i.a.createElement($e,{onChange:this.setRating,rating:e.rating})),i.a.createElement(Oe,{onClick:this.openOptionsModal})))}}),kt=a(139),Dt=a.n(kt),Pt=a(41);const{Trail:Ot,config:Lt}=a(29),It=o.default.div`
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`,Mt=o.default.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
`,Nt=o.default.div`
    position: relative;
    padding: 50px;
    background: ${y.colors._blackDark};
    border-radius: 3px;
    text-align: center;
    z-index: 2;
    font-size: 25px;
`;class Ut extends n.Component{render(){const e=Dt.a.map(e=>new Pt.a(e));return n.createElement(It,null,n.createElement(Mt,null,n.createElement(Ot,{items:e,keys:e=>e.path,from:{transform:"translate3d(0, 40px, 0)",opacity:0},to:{transform:"translate3d(0, 0, 0)",opacity:1}},(t,a)=>i=>{const s=Math.max(Math.min(1-a/e.length,i.opacity),0);return n.createElement("div",{key:`fake-${t.path}`,style:{...i,opacity:s}},n.createElement(Ft,{file:t}))})),n.createElement(Nt,null,"Drag and drop files to start building your library"))}}var jt,$t,Ht,Bt=a(73),zt=a(14);function Gt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Vt=a(0),{connect:Wt}=a(9),Kt=a(12),Yt=a(4).default,Xt=a(168),qt=a(62),{selectUser:Jt}=a(28),{addFiles:Zt,disableNewImports:Qt,migrateLegacyData:ea,setSortRule:ta,setFiles:aa}=a(19),{setAllowFileDragging:na}=a(45),ia=a(112),sa=a(13),{checkFiles:ra}=a(20),{colors:oa,sortRules:la}=a(3),ca=Yt.div`
    margin-top: 50px;
    color: #555;
`,pa=Yt.div`
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${oa.blueLight};
    z-index: 2;
`,da=Yt(ye)`
    color: ${oa.blueLight};
`,ua=Yt.div`
    padding: 20px 0;
    text-align: center;
`,ha=Yt.div`
    display: flex;
    align-items: center;
    cursor: ${e=>e.onClick?"pointer":"default"};
`,ma=Yt(ha)`
    justify-content: center;
`;let fa=Wt((e,t)=>({_dataToMigrate:e.files._dataToMigrate,_winBackup:e.files._winBackup,files:Object(zt.selectFiles)(e),filesCount:Object(zt.selectFilesCount)(e),location:t.location,pending:e.files.pending,selectedFile:Object(zt.selectSelectedFile)(e),sortRule:Object(zt.selectSortRule)(e),user:Jt(e)}))((Ht=$t=class extends Vt.PureComponent{constructor(...e){super(...e),Gt(this,"listRef",Vt.createRef()),Gt(this,"onTagClick",e=>{this.props.dispatch(x(e))}),Gt(this,"sortByName",()=>{this._sort(la.NAME_ASC,la.NAME_DESC)}),Gt(this,"sortByDuration",()=>{this._sort(la.DURATION_ASC,la.DURATION_DESC)}),Gt(this,"sortByBPM",()=>{this._sort(la.BPM_ASC,la.BPM_DESC)}),Gt(this,"sortByRating",()=>{this._sort(la.RATING_DESC,la.RATING_ASC)})}_sort(e,t){return this.props.sortRule!==e&&this.props.sortRule!==t?this.props.dispatch(ta(e)):this.props.sortRule===e?this.props.dispatch(ta(t)):void this.props.dispatch(ta(null))}scrollToFile(e){if(this.listRef.current)try{const t=document.querySelector(e);t&&(this.listRef.current.scrollTop=t.offsetTop-75)}catch(e){}}listenFilesUpdate(){this.removeFileListener=ft.a.listenForFilesUpdate(this.props.user.uid,e=>{this.props.dispatch(aa(e)),ra(e)})}renderStickyHeader(){const{files:e,filesCount:t,sortRule:a}=this.props;return Vt.createElement(pa,null,t?Vt.createElement("div",null,"Showing ",e.length," of ",t," riffs"):Vt.createElement("div",null," "),Vt.createElement(da,null,Vt.createElement(ha,{onClick:this.sortByName},"Name",a===la.NAME_ASC?Vt.createElement(Xt,{rotate:!0}):null,a===la.NAME_DESC?Vt.createElement(Xt,null):null),Vt.createElement(ma,{onClick:this.sortByDuration},"Duration",a===la.DURATION_ASC?Vt.createElement(Xt,{rotate:!0}):null,a===la.DURATION_DESC?Vt.createElement(Xt,null):null),Vt.createElement(ha,null,"Tags"),Vt.createElement(ma,{onClick:this.sortByBPM},"BPM",a===la.BPM_ASC?Vt.createElement(Xt,{rotate:!0}):null,a===la.BPM_DESC?Vt.createElement(Xt,null):null),Vt.createElement(ma,null,"Time Signature"),Vt.createElement(ha,{onClick:this.sortByRating},"Rating",a===la.RATING_ASC?Vt.createElement(Xt,{rotate:!0}):null,a===la.RATING_DESC?Vt.createElement(Xt,null):null),Vt.createElement(ha,null)))}componentDidMount(){sa.trackScreen("home"),null!==this.props._dataToMigrate&&this.props.dispatch(ea(this.props._dataToMigrate,this.props._winBackup)),this.listenFilesUpdate(),this.props.dispatch(na(!0)),this.props.location.hash&&this.scrollToFile(this.props.location.hash)}componentDidUpdate(e){e.files!==this.props.files&&ia.end("search"),e.location.hash!==this.props.location.hash&&this.scrollToFile(this.props.location.hash)}componentWillUnmount(){this.props.dispatch(na(!1)),this.props.dispatch(Qt()),this.removeFileListener()}render(){const{files:e,filesCount:t,pending:a,selectedFile:n}=this.props,i=`\n            padding-bottom: ${n?"70px":0};\n        `;return Vt.createElement(qt,{stickyHeader:this.renderStickyHeader(),wrapperStyle:i,scrollElementRef:this.listRef},a?Vt.createElement(Bt.a,null,Vt.createElement(ue.a,{size:60})):Vt.createElement(Vt.Fragment,null,t?Vt.createElement(Vt.Fragment,null,e.length?e.map(e=>Vt.createElement(Ft,{file:e,key:e.hashPath,onTagClick:this.onTagClick,selected:n&&n.hashPath===e.hashPath})):Vt.createElement(ua,null,"No files are matching your search"),Vt.createElement(ca,null,"+ Drag and drop a file to add it to your library")):Vt.createElement(Ut,null)))}},Gt($t,"propTypes",{_dataToMigrate:Kt.object,dispatch:Kt.func,files:Kt.array,filesCount:Kt.number,selectedFile:Kt.any,sortRule:Kt.string}),jt=Ht))||jt;const ga=o.default.svg`
    width: 225px;
    height: 41px;
    path {
        fill: ${y.colors._white};
    }
    ${e=>e.s};
`;var Ea=({style:e=""})=>i.a.createElement(ga,{s:e},i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"logo-name-b"},i.a.createElement("path",{d:"M.359375.5625H40v38.066406H.359375zm0 0"})),i.a.createElement("clipPath",{id:"logo-name-c"},i.a.createElement("path",{d:"M6 10h29v28.628906H6zm0 0"})),i.a.createElement("clipPath",{id:"logo-name-d"},i.a.createElement("path",{d:"M210 11h12.085938v17H210zm0 0"})),i.a.createElement("clipPath",{id:"logo-name-a"},i.a.createElement("path",{d:"M0 0h223v39H0z"})),i.a.createElement("g",{id:"logo-name-e",clipPath:"url(#logo-name-a)"},i.a.createElement("g",{clipPath:"url(#logo-name-b)"},i.a.createElement("path",{d:"M26.722656 38.628906c8.09375-4.105468 10.417969-12.238281 8.667969-18.65625-1.835937-6.738281-7.867187-11.53125-14.597656-11.695312-7.203125-.179688-13.453125 4.15625-15.691406 10.558594-2.148438 6.160156-.453125 15.359375 8.351562 19.785156C7.757813 37.242188.132813 30.050781.363281 19.652344.585938 9.710938 8.890625 1.113281 18.882813.589844 29.363281.0429688 38.398438 7.523438 39.617188 18.011719c1.242187 10.710937-6.058594 18.621094-12.894532 20.617187"})),i.a.createElement("path",{d:"M122.683594 23.71875c1.039062 0 2.078125-.011719 3.117187.003906.507813.007813.820313-.089843.808594-.714843-.035156-1.835938.039063-3.675782-.042969-5.507813-.070312-1.527344-.769531-2.382812-2.167968-2.609375-1.894532-.304687-3.824219-.359375-5.710938.054688-1.671875.363281-2.382812 1.621093-2.445312 4.019531-.066407 2.59375.652343 4.070312 2.273437 4.535156.527344.152344 1.101563.1875 1.65625.210938.835938.035156 1.675781.007812 2.511719.007812m7.292969-.839844c0 2.117188.109375 4.242188-.023438 6.351563-.179687 2.777344-1.578125 4.203125-4.367187 4.496094-3.507813.367187-7.03125.082031-10.546875.152343-.457032.007813-.660157-.207031-.636719-.652343.003906-.039063.003906-.082032 0-.121094-.203125-2.546875-.203125-2.539063 2.324219-2.546875 2.4375-.007813 4.878906.035156 7.3125-.054688 1.808593-.066406 2.554687-1 2.574218-2.777343.007813-.675782-.195312-.910157-.875-.898438-1.800781.035156-3.601562-.042969-5.398437.023438-5.4375.195312-7.65625-2.988282-7.601563-8.058594.007813-.792969.132813-1.597656.308594-2.371094.644531-2.84375 2.421875-4.472656 5.355469-4.878906 2.183594-.300781 4.398437-.261719 6.582031-.058594 2.996094.28125 4.625 2.03125 4.980469 5.046875.246094 2.109375.042969 4.234375.011719 6.347656"}),i.a.createElement("g",{clipPath:"url(#logo-name-c)"},i.a.createElement("path",{d:"M15.371094 10.894531c-5.789063 2.964844-7.363281 8.558594-6.386719 12.832032 1.15625 5.058593 5.355469 8.65625 10.398438 8.960937 4.886718.296875 9.613281-2.746094 11.289062-7.296875 1.664063-4.523437.695313-10.261719-4.789062-13.890625 3.527343.164063 8.0625 6.761719 8.28125 12.042969.296875 7.261719-5.09375 13.578125-12.394532 14.527344-6.9375.902343-13.890625-3.855469-15.386718-10.53125-1.640625-7.308594 2.28125-14.597657 8.988281-16.644532"})),i.a.createElement("path",{d:"M54.777344 27.4375c-1.878906.003906-3.757813-.023437-5.636719.015625-.664062.011719-.890625-.179687-.914062-.867187-.117188-2.945313-.140625-2.945313 2.808593-2.945313 3 0 6 .03125 9-.015625 1.851563-.027344 2.859375-1.511719 2.265625-3.199219-.335937-.953125-1.09375-1.332031-2.011718-1.457031-1.871094-.265625-3.753907-.066406-5.632813-.132812-.71875-.023438-1.449219.007812-2.152344-.125-3.195312-.613282-4.859375-2.957032-4.59375-6.398438.25-3.246094 2.253907-5.230469 5.523438-5.292969 3.476562-.070312 6.957031 0 10.4375-.03125.710937-.007812.847656.261719.863281.90625.070313 2.867188.089844 2.867188-2.761719 2.867188-2.597656 0-5.199218-.027344-7.796875.007812-1.609375.023438-2.425781.789063-2.457031 2.175782-.027344 1.320312.695313 2.183593 2.101563 2.261718 1.875.105469 3.753906.066407 5.632812.121094.796875.023438 1.609375.042969 2.378906.222656 3.203125.730469 4.71875 3.09375 4.367188 6.679688-.308594 3.160156-2.378906 5.09375-5.664063 5.195312-1.917968.0625-3.835937.011719-5.757812.011719M141.667969 7c1.761719 0 3.519531-.019531 5.277344.003906 2.964843.046875 5.21875 1.777344 5.808593 4.421875.726563 3.265625-.484375 6.261719-3.167968 7.546875-.726563.347657-.734375.582032-.363282 1.199219 1.277344 2.121094 2.488282 4.28125 3.753907 6.410156.390625.65625.308593.851563-.496094.875-3.207031.089844-3.207031.109375-4.859375-2.71875-.847656-1.445312-1.730469-2.871093-2.550781-4.335937-.3125-.558594-.679688-.796875-1.328125-.773438-1.195313.042969-2.402344.066407-3.59375-.003906-.9375-.058594-1.152344.324219-1.125 1.183594.054687 1.878906-.015625 3.757812.03125 5.636719.019531.785156-.222657 1.011718-1.015625 1.015625-2.800782.007812-2.800782.039062-2.800782-2.789063 0-1.800781-.007812-3.601562.003907-5.398437.015625-2.324219.941406-3.277344 3.28125-3.304688 2.675781-.03125 5.355468.023438 8.035156-.023437 1.921875-.03125 3.066406-1.839844 2.371094-3.636719-.484375-1.242188-1.484375-1.554688-2.695313-1.550781-3.238281.007812-6.476562-.035157-9.714844.023437-1.023437.019531-1.382812-.21875-1.347656-1.3125C135.25 7.003906 135.191406 7 137.710938 7h3.957031M197.761719 18.359375h2.871094c.117187 0 .238281-.011719.355468-.019531 1.445313-.078125 2.113282-.617188 2.128907-1.71875.015625-1.160156-.722657-1.851563-2.132813-1.886719-1.589844-.039062-3.1875-.03125-4.78125-.011719-2.03125.03125-2.683594.78125-2.617187 2.820313.019531.625.207031.84375.828125.824219 1.113281-.03125 2.230468-.007813 3.347656-.007813m2.039062 9.121094c-1.519531 0-3.035156.023437-4.554687-.007813-2.992188-.066406-4.882813-1.871093-4.988281-4.847656-.074219-2.074219-.066407-4.15625-.003907-6.230469.085938-2.832031 1.605469-4.582031 4.445313-4.867187 2.65625-.269531 5.347656-.316406 8.007812.058594 2.53125.359375 3.875 2.183593 3.808594 4.964843-.0625 2.609375-1.386719 4.226563-3.933594 4.40625-2.464843.179688-4.949218.0625-7.421875.148438-.527343.015625-1.359375-.488281-1.550781.550781-.199219 1.078125.375 2.164063 1.328125 2.375.617188.136719 1.269531.160156 1.90625.164063 2.636719.015625 5.273438.027343 7.910156-.007813.765625-.007812 1.027344.214844 1.027344 1.019531-.007812 2.273438.03125 2.273438-2.261719 2.273438h-3.71875M78.390625 24.226563c.597656-.03125 1.195313-.046875 1.789063-.097657 2.109375-.179687 3.007812-.964843 3.351562-3.039062.203125-1.222656.214844-2.460938-.097656-3.683594-.425781-1.675781-1.265625-2.460937-2.972656-2.625-.949219-.089844-1.914063-.0625-2.871094-.058594-2.980469.015625-4.128906 1.113282-4.28125 4.0625-.222656 4.214844.902344 5.414063 5.082031 5.441407m.007813 3.253906c-.761719 0-1.519532.015625-2.277344-.003906-2.777344-.082032-5.023438-1.710938-5.820313-4.347657-.730468-2.425781-.742187-4.890625.011719-7.316406.757813-2.4375 2.464844-3.851562 4.984375-4.246094 1.945313-.304687 3.910156-.292968 5.847656-.0625 3.207032.378907 5.019532 2.078125 5.710938 5.242188.433594 1.972656.402344 3.96875-.101563 5.933594-.753906 2.953125-3.03125 4.730468-6.082031 4.796875-.757812.015625-1.515625.003906-2.273437.003906M91.519531 20c.003907-2.117187-.023437-4.238281.011719-6.355469.023438-1.519531.601563-2.210937 2.070313-2.214843 2.953125-.011719 5.910156-.210938 8.859375.144531 3.8125.464844 5.957031 2.816406 6.011718 6.640625.039063 2.757812-.019531 5.515625.019532 8.269531.011718.785156-.234375 1.015625-1.019532 1.015625C105 27.503906 105 27.539063 105 25.097656c0-2.195312.007813-4.394531-.003906-6.589843-.011719-2.136719-.921875-3.238282-3.050781-3.609375-2.097657-.371094-4.226563-.109375-6.339844-.175782-.84375-.027343-.679688.609375-.679688 1.097657-.007812 3.476562-.042968 6.953125.019532 10.429687.015625.996094-.25 1.285156-1.253907 1.253906-2.167968-.066406-2.171875-.011718-2.171875-2.230468V20M24.71875 30.238281c4.621094-3.769531 3.785156-9.359375.976563-12.136718-3.175782-3.140625-8.335938-3.050782-11.390625.191406-2.839844 3.015625-3.25 8.71875 1.53125 12.125-2.722657-.691406-5.917969-4.804688-5.539063-9.25.4375-5.128906 4.101563-8.761719 9.234375-9.214844 4.382813-.386719 9.011719 2.96875 10.054688 7.289063 1.09375 4.53125-1.023438 9.375-4.867188 10.996093M165 20.863281c.128906-1.8125-.238281-4.019531.214844-6.199218.40625-1.960938 1.414062-2.960938 3.414062-3.101563 1.832032-.128906 3.675782-.054687 5.515625-.085937.496094-.007813.667969.167968.710938.691406.1875 2.433594.207031 2.425781-2.207031 2.433594-.878907.003906-1.765625-.007813-2.632813.09375-1.21875.136718-2.183594 2.46875-1.457031 3.441406.199219.265625.511719.175781.777344.179687 1.320312.007813 2.640625.027344 3.960937-.007812.597656-.015625.820313.136719.839844.789062.085937 2.542969.113281 2.542969-2.460938 2.542969-.679687 0-1.367187.0625-2.039062-.015625-.996094-.117187-1.214844.328125-1.171875 1.222656.0625 1.277344-.003906 2.5625.019531 3.839844.011719.5625-.183594.738281-.757812.769531C165 27.601563 165 27.621094 165 24.964844zm0 0M177.714844 21.078125c0-1.792969-.074219-3.59375.015625-5.386719.140625-2.886718 1.523437-4.164062 4.417969-4.207031 1.476562-.019531 2.957031.035156 4.429687-.019531.789063-.027344 1.007813.234375 1 1.019531-.015625 2.113281.023438 2.105469-2.160156 2.117188-.914063.007812-1.839844-.007813-2.746094.09375-1.246094.136718-2.210937 2.414062-1.488281 3.429687.191406.273438.503906.191406.769531.191406 1.359375.007813 2.71875.03125 4.074219-.007812.613281-.015625.808594.15625.832031.800781.078125 2.53125.101563 2.5-2.464844 2.542969-1.058593.019531-2.417968-.484375-3.09375.246094-.605468.660156-.164062 1.984375-.171875 3.015625-.023437 2.613281-.007812 2.574218-2.566406 2.546875-.804687-.007813-.90625-.324219-.894531-.992188.035156-1.796875.011719-3.59375.011719-5.390625h.035156"}),i.a.createElement("g",{clipPath:"url(#logo-name-d)"},i.a.createElement("path",{d:"M210.878906 20.808594c.09375-1.785156-.167968-3.945313.160157-6.09375.300781-1.976563 1.179687-2.9375 3.148437-3.1875 2.378906-.304688 4.785156-.070313 7.175781-.125.386719-.011719.605469.144531.621094.542969.003906.082031.003906.160156.011719.242187.222656 2.53125.222656 2.53125-2.328125 2.535156-1.15625 0-2.316406-.035156-3.472656.023438-1.269532.066406-1.78125.625-1.789063 1.90625-.015625 3.234375-.039062 6.46875.015625 9.703125.011719.894531-.230469 1.160156-1.136719 1.148437-2.402343-.035156-2.40625.007813-2.40625-2.375zm0 0"})),i.a.createElement("path",{d:"M23.949219 18.628906c2.273437 1.128907 3.460937 4.273438 2.726562 7.210938-.75 2.984375-3.652343 5.164062-6.757812 5.074219-3.148438-.09375-5.859375-2.359375-6.507813-5.390625-.675781-3.1875 1.074219-6.433594 3.375-7.296875-2.636718 2.839843-2.910156 5.910156-.734375 8.257812 1.90625 2.054688 5.21875 2.324219 7.417969.601563 2.570313-2.011719 2.738281-4.957032.480469-8.457032M160.71875 22.878906c0 1.242188-.019531 2.480469.011719 3.71875.011719.582032-.113281.832032-.78125.859375-2.628906.109375-2.628906.136719-2.628906-2.472656 0-1.878906.027343-3.757812-.011719-5.636719-.019531-.722656.105469-1.054687.957031-1.050781 2.453125.007813 2.453125-.035156 2.453125 2.425781v2.15625M157.320313 14.367188c0-1.808594 0-1.808594 1.824218-1.808594 1.597657.003906 1.621094 0 1.636719 1.539062.027344 2.683594.277344 2.144532-2.074219 2.171875-1.691406.015625-1.351562.195313-1.386718-1.902343"}))),i.a.createElement("use",{xlinkHref:"#logo-name-e"}));const ba=o.default.div`
    padding: 0 10px 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${X.colors._grey};
`;var va=({children:e})=>i.a.createElement(ba,null,e);function ya(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const{selectFileByHashPath:Ta}=a(14),{selectUser:Sa}=a(28),_a=a(13),xa=o.default.div`
    min-width: 650px;
`,Ca=o.default.textarea`
    display: block;
    width: 100%;
    min-height: 150px;
    padding: 10px;
    border-radius: 10px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.3);
    outline: none;
    color: ${y.colors._white};
    font-size: 16px;
    line-height: 1.4;
    resize: none;

    &::placeholder {
        color: ${y.colors._white};
        opacity: 0.4;
    }
`;var wa=Object(s.connect)((e,t)=>({file:Ta(e,{fileHashPath:t.fileHashPath}),user:Sa(e)}))(class extends i.a.Component{constructor(...e){super(...e),ya(this,"state",{newComment:this.props.file.comment}),ya(this,"textareaRef",i.a.createRef()),ya(this,"saveTimeout",null),ya(this,"save",()=>{ft.a.updateFile(this.props.user,this.props.file.hashPath,{comment:this.state.newComment.trim()}),_a.trackEvent("file","set-comment")}),ya(this,"onChange",e=>{this.setState({newComment:e.target.value}),clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(this.save,1e3)}),ya(this,"onKeyDown",e=>{"Enter"!==e.key||e.shiftKey||(this.props.close(),e.preventDefault())})}componentDidMount(){this.textareaRef.current.focus(),this.textareaRef.current.setSelectionRange(this.state.newComment.length,this.state.newComment.length)}componentWillUnmount(){this.save(),clearTimeout(this.saveTimeout)}render(){const{newComment:e}=this.state;return i.a.createElement(xa,null,i.a.createElement(va,null,"Comment for: ",this.props.file.name),i.a.createElement(Ca,{onChange:this.onChange,onKeyDown:this.onKeyDown,ref:this.textareaRef,value:e,placeholder:"Write a comment about this riff"}))}});function Aa(){return(Aa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Ra=`1px solid ${X.colors._grey}`;let Fa;!function(e){e.DEFAULT="DEFAULT",e.DANGER="DANGER"}(Fa||(Fa={}));const ka={[Fa.DEFAULT]:X.colors._white,[Fa.DANGER]:X.colors.red},Da=e=>`\n    padding: 7px;\n    cursor: pointer;\n    background: transparent;\n    transition: background ease 0.1s;\n    color: ${ka[e]};\n    border-bottom: ${Ra};\n\n    :hover {\n        background: ${X.colors._blue};\n    }\n`,Pa=o.default.div`
    ${e=>Da(e.level)}

    ${e=>e.centered?"text-align: center;":""}
    border-top: ${e=>e.first?Ra:"none"};

    ${e=>e.isNaked?"border: none;":""}
`,Oa=o.default.div`
    display: inline-flex;
    width: 25px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
`;var La=({centered:e,children:t,first:a=!1,icon:n,isNaked:s,level:r=Fa.DEFAULT,onClick:o})=>i.a.createElement(Pa,{onClick:o,first:a,centered:!!e,level:r,isNaked:!!s},n?i.a.createElement(Oa,null,n):null,t);const Ia=o.default.a`
    ${e=>Da(e.level)}
    ${e=>e.centered?"text-align: center;":""}
    display: block;
    text-decoration: none;

    ${e=>e.isNaked?"border: none;":""}
`,Ma=({centered:e,icon:t,isNaked:a,level:n=Fa.DEFAULT,text:s,...r})=>i.a.createElement(Ia,Aa({},r,{centered:!!e,isNaked:!!a,level:n}),t?i.a.createElement(Oa,null,t):null,s);function Na(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Ua=a(70),{removeFile:ja,replaceFile:$a}=a(19),{addNotification:Ha}=a(79),{importFiles:Ba}=a(59),za=a(13),{checkFiles:Ga}=a(20),Va=a(3),Wa=o.default.div`
    margin-top: 20px;
    padding: 50px;
    text-align: center;
    border: 5px dashed ${e=>e.dragging?Va.colors.blueLight:Va.colors._blue};
    transition: border-color ease 0.2s;
`,Ka=o.default.div`
    margin-bottom: 20px;
    font-weight: 600;
`;var Ya,Xa=Object(s.connect)((e,t)=>({file:Object(zt.selectFileByHashPath)(e,{fileHashPath:t.fileHashPath}),files:Object(zt._selectFiles)(e),missingFiles:e.files.missingFiles}))(class extends i.a.Component{constructor(...e){super(...e),Na(this,"dropRef",i.a.createRef()),Na(this,"removeDrag",void 0),Na(this,"state",{dragging:!1,replace:!1}),Na(this,"checkFileAccess",()=>{Ga(this.props.files)}),Na(this,"onClickReplace",()=>{this.setState({replace:!0})}),Na(this,"removeFile",()=>{this.props.close(),this.props.dispatch(ja(this.props.file.hashPath))}),Na(this,"replaceFile",e=>{Ba(this.props.dispatch,e.slice(0,1),e=>{const t=e[Object.keys(e)[0]];t&&(this.props.close(),this.props.dispatch($a(this.props.file.hashPath,t)))})})}componentDidMount(){za.trackScreen("modalFileMissing")}componentDidUpdate(e,t){!t.replace&&this.state.replace&&(this.removeDrag=Ua(this.dropRef.current,{onDrop:this.replaceFile,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})),e.missingFiles.includes(e.file.hashPath)&&!this.props.missingFiles.includes(this.props.file.hashPath)&&(this.props.dispatch(Ha("File successfully located")),this.props.close())}componentWillUmount(){this.removeDrag&&this.removeDrag()}render(){const{file:e}=this.props,{dragging:t,replace:a}=this.state;return i.a.createElement("div",null,i.a.createElement(Ka,null,"We could not locate the file ",e.name),a?i.a.createElement(Wa,{ref:this.dropRef,dragging:t},"Drag and drop the file here to replace it"):i.a.createElement("div",null,i.a.createElement(La,{onClick:this.checkFileAccess},"Check again"),i.a.createElement(La,{onClick:this.onClickReplace},"Replace it"),i.a.createElement(La,{onClick:this.removeFile},"Remove it from my riff library")))}}),qa=a(30),Ja=a(19),Za=a(23),Qa=a(51);function en(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const{openInFinder:tn}=a(20),an=a(13),{selectFileByHashPath:nn}=a(14),{selectUser:sn}=a(28),{modals:rn}=a(3),on=o.default.div`
    width: 360px;
`;var ln,cn=Object(s.connect)((e,t)=>({file:nn(e,{fileHashPath:t.file.hashPath}),missingFiles:e.files.missingFiles,user:sn(e)}))(Ya=class extends i.a.Component{constructor(...e){super(...e),en(this,"state",{downloadUrl:"",uploadError:!1,uploading:!1,uploadProgress:0,uploadSuccess:!1}),en(this,"openInFinder",()=>{tn(this.props.file.path),an.trackEvent("file","open-in-finder"),this.props.close()}),en(this,"toggleFileArchive",()=>{ft.a.updateFile(this.props.user,this.props.file.hashPath,{archived:!this.props.file.archived}),an.trackEvent("file",this.props.file.archived?"unarchive":"archive"),this.props.close()}),en(this,"removeFile",()=>{this.props.close(),this.props.dispatch(Object(Ja.removeFile)(this.props.file.hashPath))}),en(this,"onUploadProgress",e=>{this.setState({uploadProgress:e})}),en(this,"onUploadError",e=>{console.error("Error uploading",e),this.setState({uploadError:!0,uploading:!1})}),en(this,"onUploadSuccess",({uploadName:e})=>{this.setState({uploading:!1,uploadSuccess:!0}),console.log("## success"),ft.a.updateFile(this.props.user,this.props.file.hashPath,{uploaded:!0,uploadName:e}),this.setDownloadUrl()}),en(this,"onUploadRunning",()=>{this.setState({uploading:!0})}),en(this,"handleUploadFile",()=>{if(this.props.file.uploaded)ft.a.deleteFile(this.props.user,this.props.file).then(()=>{console.log("### deleted"),ft.a.updateFile(this.props.user,this.props.file.hashPath,{uploaded:!1,uploadName:null})}).catch(e=>{console.log("#### error deleting"),console.log(e)});else{if(!Object(qa.canUpload)(this.props.user))return void this.props.dispatch(Object(Za.openModal)(rn.forbiddenAction,{type:Qa.a.UPLOAD_FILE}));fetch(this.props.file.escapedPath).then(e=>e.blob()).then(e=>{ft.a.uploadFile(this.props.user,this.props.file,e,{onError:this.onUploadError,onProgress:this.onUploadProgress,onRunning:this.onUploadRunning,onSuccess:this.onUploadSuccess})})}}),en(this,"openPublicLinkModal",()=>{this.props.dispatch(Object(Za.openModal)(rn.publicLink,{file:this.props.file}))})}setDownloadUrl(){ft.a.getFileDownloadUrl(this.props.user,this.props.file).then(e=>this.setState({downloadUrl:e}))}renderUploadButton(){const{uploadError:e,uploading:t,uploadProgress:a}=this.state;return t?i.a.createElement("span",null,"Uploading... ",a.toFixed(0),"%"):e?i.a.createElement("span",null,"Error uploading"):this.props.file.uploaded?"Remove file from cloud":"Upload file"}componentDidMount(){an.trackScreen("modalFileOptions"),this.props.file.uploaded&&this.setDownloadUrl()}render(){const{file:e,missingFiles:t,user:a}=this.props,{downloadUrl:n}=this.state,s=t.includes(e.hashPath),r=window.__songRiffer.platform;return i.a.createElement(on,null,i.a.createElement(va,null,e.name),Object(qa.hasUpload)(a)?s&&!e.uploaded?null:i.a.createElement(La,{icon:i.a.createElement(De,{font:Fe.Ionicons,name:"md-cloud-upload"}),onClick:this.handleUploadFile,first:!0,isNaked:!0},this.renderUploadButton()):null,e.uploaded?i.a.createElement(La,{icon:i.a.createElement(De,{font:Fe.Ionicons,name:"md-share"}),onClick:this.openPublicLinkModal,isNaked:!0},"Share"):null,e.uploaded?i.a.createElement(Ma,{icon:i.a.createElement(De,{font:Fe.Ionicons,name:"md-cloud-download"}),href:n,download:"download",text:"Download",isNaked:!0}):null,s?null:i.a.createElement(La,{icon:i.a.createElement(De,{font:Fe.Ionicons,name:"ios-folder-open"}),onClick:this.openInFinder,isNaked:!0},"Open in ","darwin"===r?"Finder":"File Explorer"),i.a.createElement(La,{icon:i.a.createElement(De,{font:Fe.Ionicons,name:"ios-archive"}),onClick:this.toggleFileArchive,isNaked:!0},e.archived?"Unarchive":"Archive"," file"),i.a.createElement(La,{icon:i.a.createElement(De,{font:Fe.Ionicons,name:"md-trash",style:{color:X.colors.red}}),onClick:this.removeFile,isNaked:!0,level:Fa.DANGER},"Remove from my riff library"))}})||Ya,pn=a(39),dn=a.n(pn),un=a(20);function hn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const mn=a(109),{selectFileByHashPath:fn}=a(14),{selectUser:gn}=a(28),En=a(13),bn=a(31),vn=o.default.div`
    width: 360px;
`;var yn=Object(s.connect)((e,t)=>({file:fn(e,{fileHashPath:t.file.hashPath}),user:gn(e)}))(ln=class extends i.a.Component{constructor(...e){super(...e),hn(this,"state",{copied:!1,loading:!1}),hn(this,"createPublicLink",()=>{this.setState({loading:!0}),En.trackEvent("share","create-link"),bn("Share link created"),ft.a.createFilePublicId(this.props.file.hashPath).then(e=>{this.setState({loading:!1})}).catch(e=>{console.error(e),this.setState({loading:!1})})}),hn(this,"copyLink",()=>{En.trackEvent("share","copy-link"),bn("Share link copied");const e=Object(me.getShareLink)(this.props.user.uid,this.props.file.publicId);Object(un.copyToClipboard)(e),this.setState({copied:!0})}),hn(this,"disableLink",()=>{En.trackEvent("share","disable-link"),this.setState({loading:!0}),ft.a.deleteFilePublicId(this.props.file.hashPath).then(e=>{this.setState({loading:!1}),console.log(e)}).catch(e=>{this.setState({loading:!1}),console.error(e)})})}componentDidMount(){En.trackScreen("modalPublicLink")}render(){const{file:e}=this.props,{copied:t,loading:a}=this.state;return i.a.createElement(vn,null,i.a.createElement(va,null,"Share a link to this file"),i.a.createElement(dn.a,{size:"md"},"Everyone who will have the link created will be able to listen to your file but won't be able to edit it."),a?i.a.createElement(ue.a,{size:50}):e.public&&e.publicId?i.a.createElement(i.a.Fragment,null,i.a.createElement(La,{first:!0,icon:i.a.createElement(De,{font:Fe.MaterialCommunityIcons,name:"content-copy"}),isNaked:!0,onClick:this.copyLink},t?i.a.createElement(i.a.Fragment,null,"Copied to clipboard ",i.a.createElement(mn,{width:"15"})):i.a.createElement(i.a.Fragment,null,"Copy Link")),i.a.createElement(La,{icon:i.a.createElement(De,{font:Fe.Ionicons,name:"md-trash"}),isNaked:!0,onClick:this.disableLink},"Disable link")):i.a.createElement(La,{onClick:this.createPublicLink,first:!0,isNaked:!0},"Create public link"))}})||ln,Tn=a(18);function Sn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const _n=a(53),{removeFile:xn}=a(19),{selectFileByHashPath:Cn}=a(14),{unlinkFile:wn}=a(20),An=a(13),Rn=a(3),Fn=o.default.div`
    max-width: 300px;
`,kn=o.default.div`
    margin-bottom: 25px;
    font-size: 16px;
    line-height: 1.4;
`,Dn=o.default.span`
    color: ${Rn.colors.bluePastel};
`,Pn=o.default.div`
    display: flex;
    justify-content: space-between;
`,On=Object(o.default)(_n)`
    padding: 10px 25px;
`;var Ln=Object(s.connect)((e,t)=>({file:Cn(e,{fileHashPath:t.fileHashPath})}))(class extends i.a.Component{constructor(...e){super(...e),Sn(this,"removeFile",()=>{this.props.close(),this.props.dispatch(xn(this.props.file.hashPath,!0))}),Sn(this,"deleteFile",()=>{this.props.close(),this.props.dispatch(xn(this.props.file.hashPath,!0)),wn(this.props.file.path),An.trackEvent("file","delete-file",this.props.file.source)})}componentDidMount(){An.trackScreen("modalRemoveFile")}render(){const{file:e}=this.props;let t;return e.source===Tn.b.RECORD&&(t="recorded with the Recorder"),e.source===Tn.b.TRANSFER&&(t="transfered from your phone"),i.a.createElement(Fn,null,i.a.createElement(kn,null,i.a.createElement(Dn,null,e.name)," was ",t,". Do you want to delete the file as well as remove it from your library?"),i.a.createElement(Pn,null,i.a.createElement(On,{onClick:this.removeFile},"No"),i.a.createElement(On,{onClick:this.deleteFile},"Yes")))}}),In=a(140),Mn=a(24),Nn=a.n(Mn);var Un;!function(e){e["16th"]="16",e["32nd"]="32",e["64th"]="64",e.Eighth="8",e.Half="h",e.Quarter="q",e.Whole="w"}(Un||(Un={}));const jn={8:1/8,16:1/16,32:1/32,64:1/64,h:.5,q:.25,w:1},$n=e=>1/(e/2*3),Hn={8:$n(8),16:$n(16),32:$n(32),64:$n(64),h:$n(2),q:$n(4),w:$n(1)},Bn=(e,t,a)=>{let n=null;for(const t of e[0].Beat){if(t.Notes.includes(a)){n=t;break}if(t.Notes[0].split(" ").includes(a)){n=t;break}}return((e,t)=>{const a=Nn()(e,"[0].Rhythm",[]),n=Nn()(t,"Rhythm[0]['$'].ref");return a.find(e=>e.$.id===n)})(t,n)},zn=e=>[`tabstave notation=true\ntime=${e}\n`],Gn=e=>{const t=qn(e);return[`${zn(t)}  notes`]},Vn=e=>{const t=[],{GPIF:{Beats:a,Notes:n,Rhythms:i}}=e,s=n[0].Note,r=s.length;let o=Gn(e),l=null,c=0,p=0,d=1;return s.forEach((n,s)=>{let u="";const h=n.$.id,m=(e=>{const t=Nn()(e,"Properties[0].Property",[]),a={};return t.forEach(e=>{e.Fret&&(a.fret=e.Fret[0]),e.String&&(a.string=6-e.String[0])}),a})(n),f=Bn(a,i,h),{noteValue:g,isTuplet:E}=(e=>{const t=Nn()(e,"NoteValue[0]"),a=Un[t],n=Nn()(e,"PrimaryTuplet[0]");return a||console.log("# undefined note map ",t),{noteValue:a,isTuplet:!!n}})(f);p+=E?Hn[g]:jn[g],g!==l&&(l=g,u+=`:${g} `),u+=`${m.fret}/${m.string} `,E&&3===++c&&(u+="^3^ ",c=0),p>=1&&r-1!==s&&(u+="|",p=0,d+=1,c=0),o.push(u),5===d&&(t.push(Wn(o)),o=Gn(e),d=1,l=null)}),t.push(Wn(o)),t},Wn=e=>e.join(" "),Kn=e=>{const t=Object.keys(e);return t.length?`options ${t.map(t=>`${t}=${e[t]}`).join(" ")}\n`:""},Yn=e=>{const t=e.GPIF.Score[0],a={album:"",artist:"",title:""};return["Album","Artist","Title"].forEach(e=>{a[e.toLowerCase()]=t[e]?t[e][0]:""}),a},Xn=e=>{return e.GPIF.Tracks[0].Track.map(e=>({name:Nn()(e,"Name[0]","").trim(),tuning:Nn()(e,"Staves[0].Staff[0].Properties[0].Name[0]","").trim()}))},qn=e=>{return e.GPIF.MasterBars[0].MasterBar[0].Time[0]};var Jn;function Zn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Qn=a(186),ei=Qn.VexTab,ti=Qn.Artist,ai=Qn.Flow.Renderer;ti.NOLOGO=!0;const ni=a(55),ii=(a(39),a(20)),si=a(13),ri=a(31),oi=o.default.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    min-width: 890px;
    height: 70vh;
`,li=o.default.div`
    margin-bottom: 15px;
`,ci=o.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${y.colors._white};
    margin-bottom: 25px;
    font-size: 18px;
    font-family: serif;
`,pi=o.default.div`
    font-size: 35px;
`,di=o.default.div`
    font-weight: 600;
    font-size: 20px;
`,ui=o.default.div`
    width: 890px;
    margin-top: 25px;
    padding: 15px 0 0 10px;
    background: #fff;
    color: #000;
    font-size: 14px;
    font-family: serif;
`,hi=o.default.div`
    background: #fff;
    height: 100%;
    width: 890px;
    padding: 25px 0 40px;
    overflow-y: auto;
    display: ${e=>e.loading?"none":"block"};
`;var mi=Object(s.connect)((e,t)=>({file:t.file,mxml:e.mxml}))(Jn=class extends i.a.Component{constructor(...e){super(...e),Zn(this,"state",{error:!1,infos:{album:"",artist:"",title:""},loading:!0,tracks:[]}),Zn(this,"scoreRef",i.a.createRef())}async displayScore(e){const t=new ai(this.scoreRef.current,ai.Backends.SVG),a=new ti(10,10,600,{scale:.8}),n=new ei(a);try{((e,t={options:{}})=>new Promise((a,n)=>{Object(In.parseString)(e,(e,i)=>{if(e)return console.error(e),void n(e);const s=Vn(i);a({firstTimeSignature:qn(i),getFullNotation:()=>s.join("\n").trim(),infos:Yn(i),options:Kn(t.options),notations:s,tracks:Xn(i)})})}))(e,{options:{width:1100}}).then(e=>{this.setState({loading:!1,infos:e.infos,tracks:e.tracks}),n.parse(e.getFullNotation()),a.render(t)})}catch(e){ri(`Error parsing guitar pro file - ${e.toString()}`),this.setState({error:!0})}}componentDidMount(){si.trackScreen("modalTabs"),this.props.mxml.mxml&&this.props.mxml.filePath===this.props.file.path||ii.getMXML(this.props.file.path),this.props.mxml.filePath===this.props.file.path&&this.props.mxml.mxml&&setTimeout(()=>{this.displayScore(this.props.mxml.mxml)},0)}componentDidUpdate(e){e.mxml.mxml!==this.props.mxml.mxml&&this.displayScore(this.props.mxml.mxml)}render(){const{error:e,infos:t,loading:a,tracks:n}=this.state;return e?i.a.createElement(oi,null,i.a.createElement(li,null,"It looks like something went wrong, sorry about that!"),i.a.createElement(li,null,"Support for Guitar Pro files is in beta so it may break anytime (like right now)."),i.a.createElement(li,null,"Feel free to contact us at ",i.a.createElement(ni,{href:`mailto:${y.email}`},y.email)," so we can see how we can improve it.")):i.a.createElement(oi,null,a?i.a.createElement(ue.a,{size:50}):i.a.createElement(i.a.Fragment,null,i.a.createElement(ci,null,i.a.createElement(pi,null,t.title),i.a.createElement(di,null,t.artist),i.a.createElement("div",null,t.album)),n.length?i.a.createElement(ui,null,i.a.createElement("div",null,n[0].name),i.a.createElement("div",null,n[0].tuning)):null),i.a.createElement(hi,{ref:this.scoreRef,loading:a}))}})||Jn,fi=a(45);function gi(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Ei=o.default.div`
    width: 650px;
`,bi="\n    display: flex;\n    flex-wrap: wrap;\n\n    > * {\n        margin-bottom: 15px;\n    }\n";var vi=Object(s.connect)((e,t)=>({file:Object(zt.selectFileByHashPath)(e,{fileHashPath:t.fileHashPath})}))(class extends i.a.Component{constructor(...e){super(...e),gi(this,"addTag",e=>{this.props.dispatch(Object(Ja.addTag)(this.props.file.hashPath,e))}),gi(this,"onTagClick",()=>{}),gi(this,"onTagContextMenu",(e,t,a)=>{this.props.dispatch(Object(fi.displayTagContextMenu)(this.props.file.hashPath,e,t,a))}),gi(this,"removeTag",e=>{this.props.dispatch(Object(Ja.removeTag)(this.props.file.hashPath,e))})}render(){const{file:e}=this.props;return i.a.createElement(Ei,null,i.a.createElement(va,null,"Tags for ",e.name),i.a.createElement(ot,{addTag:this.addTag,onTagClick:this.onTagClick,onTagContextMenu:this.onTagContextMenu,removeTag:this.removeTag,rootStyle:bi,tags:e.getTags()}))}});function yi(){return(yi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ti(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Si=a(185),_i=a(212),xi=a(213),Ci=o.default.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, ${e=>e.darker?.9:.5});
    z-index: 10;
`,wi=o.default.div`
    position: relative;
    padding: 35px 20px 20px;
    background: #222;
    border-radius: 3px;

    ${e=>e.additionalStyle}
`,Ai=o.default.div`
    position: absolute;
    top: 10px;
    right: 15px;
    opacity: 0.5;

    :hover {
        opacity: 1;
    }
`;var Ri=Object(s.connect)(e=>({modal:e.modal}))(class extends i.a.Component{constructor(...e){super(...e),Ti(this,"dimmerRef",i.a.createRef()),Ti(this,"onDimmerClick",e=>{e.target===this.dimmerRef.current&&this.props.dispatch(Object(Za.closeModal)())}),Ti(this,"close",()=>{this.props.dispatch(Object(Za.closeModal)())})}getModal(){const{name:e}=this.props.modal,t={[y.modals.comment]:wa,[y.modals.fileMissing]:Xa,[y.modals.fileOptions]:cn,[y.modals.forbiddenAction]:Qa.b,[y.modals.invalidFile]:Si,[y.modals.publicLink]:yn,[y.modals.removeFile]:Ln,[y.modals.tabs]:mi,[y.modals.tags]:vi,[y.modals.text]:_i,[y.modals.updateAvailable]:xi};if(!t[e])return null;const a=t[e];return i.a.createElement(a,yi({},this.props.modal.props,{close:this.close}))}getRootStyle(){const{name:e}=this.props.modal;switch(e){case y.modals.updateAvailable:return xi.rootStyle;default:return""}}render(){const{modal:e}=this.props;if(!e.name)return null;const t=e.name===y.modals.updateAvailable&&e.props.mandatory;return i.a.createElement(Ci,{onClick:this.onDimmerClick,ref:this.dimmerRef,darker:t},i.a.createElement(wi,{additionalStyle:this.getRootStyle()},this.getModal(),t?null:i.a.createElement(Ai,null,i.a.createElement(De,{font:Fe.Ionicons,name:"md-close",onClick:this.close}))))}});function Fi(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const{removeNotification:ki}=a(79),Di=o.default.div`
    position: fixed;
    padding: 10px 25px;
    top: ${e=>e.active?0:"-100%"};
    left: 50%;
    transform: translateX(-50%);
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    color: #2e2e2e;
    background: ${e=>"success"===e.status?y.colors.greenLight:y.colors.redLight};
    transition: top ease 0.7s;
    text-align: center;
    cursor: ${e=>e.hasClickAction?"pointer":"default"};

    :hover {
        text-decoration: ${e=>e.hasClickAction?"underline":"none"};
    }
`;var Pi=Object(s.connect)(e=>({notification:e.notifications.notification}))(class extends i.a.Component{constructor(...e){super(...e),Fi(this,"timeout",void 0),Fi(this,"close",()=>{this.props.dispatch(ki())}),Fi(this,"onClick",()=>{"function"==typeof this.props.notification.onClick&&this.props.dispatch(this.props.notification.onClick())}),Fi(this,"onMouseEnter",()=>{this.props.notification.onClick&&this.clearTimeout()}),Fi(this,"onMouseLeave",()=>{this.props.notification.onClick&&this.startTimeout()})}startTimeout(){clearTimeout(this.timeout),this.timeout=setTimeout(this.close,this.props.notification.timeout||3e3)}clearTimeout(){clearTimeout(this.timeout)}componentDidMount(){void 0!==this.props.notification.id&&this.startTimeout()}componentDidUpdate(e){e.notification.id!==this.props.notification.id&&this.startTimeout()}componentWillUmount(){this.clearTimeout()}render(){const{notification:e}=this.props;return i.a.createElement(Di,{active:e.active,status:e?e.status:null,hasClickAction:"function"==typeof this.props.notification.onClick,onClick:this.onClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},e?e.title:null)}}),Oi=a(37),Li=a(63),Ii=a(70),Mi=a.n(Ii),Ni=a(141),Ui=a.n(Ni),ji=a(52);function $i(){return($i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Hi=o.default.div`
    cursor: pointer;
`;var Bi=({children:e,isText:t=!1,placement:a="bottom-end"})=>{const s=i.a.useRef(null),[r,o]=Object(n.useState)(!1),[l,c]=Object(n.useState)(null),[p,d]=Object(n.useState)(null),[u,h]=Object(n.useState)(null),{styles:m,attributes:f}=Object(lt.a)(l,p,{placement:a,modifiers:[{name:"arrow",options:{element:u}}]}),g=f.popper?f.popper["data-popper-placement"]:"",E=e=>{r&&!s.current.contains(e.target)&&o(!1)};return i.a.useEffect(()=>(window.addEventListener("click",E),()=>{window.removeEventListener("click",E)}),[r]),i.a.createElement("div",{ref:s},i.a.createElement(Hi,{ref:c},i.a.createElement(Oe,{onClick:()=>o(!r)})),i.a.createElement(ct,$i({ref:d,style:m.popper},f.popper,{isVisible:r,isText:t,placement:g}),i.a.createElement(pt,{ref:h,style:m.arrow,placement:g},i.a.createElement(dt,{placement:g})),e))};const zi=o.default.div`
    display: flex;
    align-items: center;
    height: 35px;
    margin-bottom: 7px;
    border-bottom: 1px solid #444;

    .drag-icon {
        opacity: 0.4;
        transition: opacity ease 0.1s;
    }

    .drag-icon:hover {
        opacity: 1;
    }
`,Gi=o.default.div`
    flex: 1;
    padding: 7px;
`;var Vi=({onRemove:e,song:t})=>n.createElement(zi,{"data-position":t.position},n.createElement("div",{className:"drag-icon"},n.createElement(De,{font:Fe.MaterialCommunityIcons,name:"drag",style:{cursor:"grab",marginRight:10,fontSize:22}})),t.position+1," • ",n.createElement(Gi,null,t.name),n.createElement(Bi,null,n.createElement(La,{icon:n.createElement(De,{font:Fe.Ionicons,name:"md-trash",style:{color:X.colors.red}}),onClick:e,first:!0,isNaked:!0,level:Fa.DANGER},"Remove song")));const Wi=e=>e.map((e,t)=>({...e,position:t})),Ki=(e,t)=>{const a=e.filter(e=>e.position!==t);return Wi(a)};var Yi=({addNewSong:e,projectId:t,songs:a})=>{const[n,s]=i.a.useState("");let r=null;return i.a.useEffect(()=>()=>{null!==r&&r.destroy()},[]),i.a.createElement(i.a.Fragment,null,a&&a.length?i.a.createElement("div",{ref:e=>{if(e){const n={revertOnSpill:!0};(r=Ui()([e],n)).on("drop",(e,n,i,s)=>{if(!e)return;const r=parseInt(e.dataset.position,10),o=s?parseInt(s.dataset.position,10):a.length,l=((e,t,a)=>{const n=e.find(e=>e.position===t),i=e.filter(e=>e.position!==t);return i.splice(a,0,n),Wi(i)})(a,r,o>r?o-1:o);ft.a.updateProject(t,{songs:l})})}}},a.map(e=>i.a.createElement(Vi,{key:`song-${e.position}`,onRemove:()=>(e=>{ft.a.updateProject(t,{songs:Ki(a,e)})})(e.position),song:e}))):i.a.createElement("div",null,"Add the first song to your project:"),i.a.createElement("form",{onSubmit:t=>{t.preventDefault(),n.length&&e(n)}},i.a.createElement(ji.a,{placeholder:"+ Add a song",onChange:e=>s(e.target.value),value:n})))};const Xi=o.default.div`
    display: grid;
    grid-template-columns: 1fr 5px;
    grid-gap: 0;
    padding: 0 5px;
    border-bottom: 1px solid #444;
    transition: background ease 0.2s;

    :hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;var qi=({files:e,projectId:t,songs:a})=>{const[n,s]=i.a.useState(!1);if(i.a.useEffect(()=>()=>{s(!1)},[]),!e||!e.length)return i.a.createElement("div",null,"Drag and drop a file to add it to this project");return i.a.createElement("div",null,e.map((r,o)=>i.a.createElement(Xi,{key:`file-${o}-${r.name}`},i.a.createElement(_e,{name:r.name}),i.a.createElement(Bi,null,n?i.a.createElement(i.a.Fragment,null,a.map(e=>i.a.createElement("div",{key:`song-selector-${e.name}`},e.position," ",e.name))):i.a.createElement(i.a.Fragment,null,i.a.createElement(La,{icon:i.a.createElement(De,{font:Fe.Ionicons,name:"md-add"}),onClick:()=>s(!0),isNaked:!0},"Add to song"),i.a.createElement(La,{icon:i.a.createElement(De,{font:Fe.Ionicons,name:"md-trash",style:{color:X.colors.red}}),onClick:()=>(a=>{ft.a.updateProject(t,{files:e.filter(e=>e.path!==a)})})(r.path),level:Fa.DANGER,isNaked:!0},"Remove from the project"))))))},Ji=a(59);function Zi(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Qi=a(62),es=o.default.div`
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${y.colors.blueLight};
    z-index: 2;
`,ts=o.default.div`
    margin-bottom: 10px;

    a {
        display: flex;
        align-items: center;
        color: ${y.colors._white};
        text-decoration: none;
        font-size: 14px;
    }
`,as=o.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,ns=o.default.div`
    font-size: 14px;
`,is=o.default.div`
    padding-bottom: 15px;
    flex: 1;
    font-size: 25px;
`,ss=o.default.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding-top: 25px;
`,rs=o.default.div`
    width: 50%;
    height: 100%;
    padding: 0 10px;
`;var os,ls=Object(s.connect)()(class extends n.Component{constructor(...e){super(...e),Zi(this,"removeDragDrop",void 0),Zi(this,"removeListener",void 0),Zi(this,"state",{dragging:!1,project:null}),Zi(this,"addNewSong",e=>{const t=Nn()(this.state.project,"songs",[]).length;ft.a.addSongToProject(this.state.project.id,{position:t,name:e,files:[]})}),Zi(this,"importFiles",e=>{Object(Ji.importFiles)(this.props.dispatch,e,e=>{ft.a.addFilesToProject(this.state.project.id,Object.values(e))},!0)})}listenProjectUpdate(){this.removeListener=ft.a.listenForProjectUpdate(this.props.match.params.projectId,e=>{this.setState({project:e})})}componentDidMount(){this.listenProjectUpdate(),this.removeDragDrop=Mi()(document.body,{onDrop:this.importFiles,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})}componentWillUnmount(){"function"==typeof this.removeListener&&this.removeListener(),"function"==typeof this.removeDragDrop&&this.removeDragDrop()}renderHeader(){const{project:e}=this.state;return n.createElement(es,null,n.createElement(ts,null,n.createElement(Oi.a,{to:y.routes.projects},n.createElement(De,{font:Fe.Ionicons,name:"ios-arrow-back",style:{marginRight:10}}),"Projects")),n.createElement(as,null,n.createElement(is,null,e.name),n.createElement(ns,null,"Last updated: ",Object(Li.a)(e.updatedAt,{addSuffix:!0}))))}render(){const{dragging:e,project:t}=this.state;return t?n.createElement(Qi,{stickyHeader:this.renderHeader()},n.createElement(J,{dragging:e}),n.createElement(ss,null,n.createElement(rs,null,n.createElement(is,null,"Songs"),n.createElement(Yi,{addNewSong:this.addNewSong,projectId:t.id,songs:t.songs,key:t.songs.map(e=>e.name).join("-")})),n.createElement(rs,null,n.createElement(is,null,"Files"),n.createElement(qi,{files:t.files,projectId:t.id,songs:t.songs})))):n.createElement(Qi,null,n.createElement(Bt.a,null,n.createElement(ue.a,{size:60})))}}),cs=a(101);function ps(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const ds=a(223),us=a(53),hs=a(109),ms=a(54),fs=a(62),{addFiles:gs}=(a(39),a(19)),{reset:Es}=a(126),{pausePlayer:bs}=a(58),vs=a(13),{getFilesDurationAndBPM:ys}=a(59),{checkFileExists:Ts,saveMedia:Ss}=a(20),_s=o.default.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: ${e=>e.recording?0:"-100%"};
    left: 0;
    transition: top 0.3s ease;
`,xs=o.default.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`,Cs=o.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 200px;
    height: 200px;
    background: ${e=>e.recording?y.colors.blueLight:y.colors._blue};
    border-radius: 100%;
    transition: background ease 0.2s;
    cursor: pointer;
    text-align: center;
`,ws=o.default.div`
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 100%;
    border: 1px solid ${y.colors._blue};
    background: ${y.colors._blue}24;
    pointer-events: none;

    animation: record 2.5s cubic-bezier(0.13, 1.18, 0.98, 0.95) infinite, opacity 2.5s infinite;

    @keyframes record {
        0% {
            width: 200px;
            height: 200px;
        }

        100% {
            width: 600px;
            height: 600px;
        }
    }

    @keyframes opacity {
        0% {
            opacity: 1;
        }

        75% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
`,As=Object(o.default)(ws)`
    background: transparent;
    animation: record-slow 2.5s cubic-bezier(0.06, 0.57, 0.93, 0.85) infinite, opacity 2.5s infinite;

    @keyframes record-slow {
        0% {
            width: 200px;
            height: 200px;
        }

        20% {
            width: 200px;
            height: 200px;
        }

        100% {
            width: 600px;
            height: 600px;
        }
    }
`,Rs=o.default.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    height: 100%;
    top: ${e=>e.recording?"100%":0};
    left: 0;
    transition: top 0.3s ease;
`,Fs=o.default.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`,ks=o.default.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`,Ds=Object(o.default)(ms)`
    width: 70%;
    margin-bottom: 15px;
    text-align: center;
    border: 0;
    border-bottom: 1px solid ${e=>e.error?y.colors.red:"rgba(255, 255, 255, 0.3)"};
    border-radius: 0;
`,Ps=o.default.div`
    margin-bottom: 15px;
    color: ${y.colors.red};
    text-align: center;
`,Os=Object(o.default)(us)`
    padding: 5px 15px;
    ${e=>e.background?`background: ${e.background};`:""}
    ${e=>e.disabled?"\n        cursor: not-allowed;\n        opacity: 0.5;\n    ":""}
`,Ls=o.default.div`
    text-align: center;
`,Is=o.default.div`
    margin-bottom: 15px;
`,Ms=o.default.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;var Ns=Object(s.connect)(e=>({recorder:e.recorder}))(os=class extends i.a.Component{constructor(...e){super(...e),ps(this,"chunks",void 0),ps(this,"stream",void 0),ps(this,"state",{audio:null,fileDuration:0,fileSize:0,name:"",playing:!1,recording:!1}),ps(this,"recorder",null),ps(this,"inputRef",i.a.createRef()),ps(this,"player",i.a.createRef()),ps(this,"recordButton",i.a.createRef()),ps(this,"toggleRecording",()=>{this.state.recording?this.stopRecording():this.startRecording()}),ps(this,"startRecording",()=>{this.props.dispatch(bs(!0)),vs.trackEvent("recorder","start-recording"),this.setState({recording:!0}),this.getAudio()}),ps(this,"pad",e=>1===`${e}`.length?`0${e}`:`${e}`),ps(this,"stopRecording",()=>{vs.trackEvent("recorder","stop-recording");const{day:e,hours:t,minutes:a,month:n,seconds:i,year:s}=this.getDate();this.setState({name:`SongRiffer-idea-${s}-${n}-${e}-${t}${a}${i}`}),null!==this.recorder&&this.recorder.stop()}),ps(this,"onDataAvailable",e=>{this.chunks.push(e.data)}),ps(this,"onRecorderStop",()=>{const e=new Blob(this.chunks,{type:"audio/webm;codecs=opus"});this.setState({audio:URL.createObjectURL(e),recording:!1}),this.inputRef.current.focus()}),ps(this,"recordAudio",e=>{this.recorder=new MediaRecorder(e),this.chunks=[],this.recorder.ondataavailable=this.onDataAvailable,this.recorder.onstop=this.onRecorderStop,this.recorder.start()}),ps(this,"onNameChange",e=>{this.setState({name:e.target.value}),Ts(`${e.target.value}.wav`)}),ps(this,"onNameKeyDown",e=>{"Enter"===e.key&&this.save()}),ps(this,"save",()=>{const e=new AudioContext,t=new Blob(this.chunks,{type:"audio/webm"}),a=new FileReader;this.state.name;a.onload=()=>{e.decodeAudioData(a.result,e=>{const t=ds(e);this.setState({fileDuration:parseInt(e.duration,10),fileSize:t.byteLength}),Ss(y.saveTypes.RECORDER,`${this.state.name}.wav`,new Uint8Array(t))})},a.readAsArrayBuffer(t)}),ps(this,"importFile",()=>{vs.trackEvent("recorder","save",this.state.name),vs.trackEvent("file","file-import","recorder",1);const e=`${this.state.name}.wav`,t=this.props.recorder.filePath,a={duration:this.state.fileDuration,name:e,path:t,size:this.state.fileSize,source:Tn.b.RECORD,type:"audio/wav"},n=new Pt.a(a);this.props.dispatch(gs({[Object(me.getFilePathHash)(t)]:n.toJSON()},!0)),ys(this.props.dispatch,[n])}),ps(this,"reset",()=>{this.chunks=[],this.setState({audio:null,playing:!1}),this.pausePlayer(),vs.trackEvent("recorder","discard")}),ps(this,"togglePlay",()=>{this.setState({playing:!this.state.playing},()=>{this.state.playing?this.playPlayer():this.pausePlayer()})})}getDate(){const e=new Date;return{day:this.pad(e.getDate()),hours:e.getHours(),minutes:e.getMinutes(),month:this.pad(e.getMonth()+1),seconds:e.getSeconds(),year:e.getFullYear()}}getAudio(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.recordAudio)}playPlayer(){this.player.current.play()}pausePlayer(){this.player.current.pause()}componentDidMount(){vs.trackScreen("record")}componentDidUpdate(e){!e.recorder.saveSuccess&&this.props.recorder.saveSuccess&&this.importFile()}componentWillUnmount(){this.props.dispatch(Es())}render(){const{recorder:e}=this.props,{audio:t,name:a,playing:n,recording:s}=this.state,r=!!e.fileAlreadyExists&&Object(cs.basename)(e.fileAlreadyExists,Object(me.extname)(e.fileAlreadyExists))===a;return i.a.createElement(fs,{wrapperStyle:"\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    padding: 50px;\n    overflow: hidden;\n"},i.a.createElement(_s,{recording:s||!t},i.a.createElement(xs,null,i.a.createElement(Cs,{onClick:this.toggleRecording,recording:s,ref:this.recordButton},s?"Stop":"Record"),s?i.a.createElement(i.a.Fragment,null,i.a.createElement(ws,null),i.a.createElement(As,null)):null)),i.a.createElement(Rs,{recording:s||!t},e.saveSuccess?i.a.createElement(Ls,null,i.a.createElement(hs,{width:"50"}),i.a.createElement(Is,null,a," was successfully added to your library!"),i.a.createElement(Ms,null,i.a.createElement(Oi.a,{to:y.routes.home},i.a.createElement(Os,null,"Go back to your file list")))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("audio",{src:t,ref:this.player}),i.a.createElement(De,{font:Fe.Ionicons,name:n?"ios-pause":"ios-play",onClick:this.togglePlay,style:{fontSize:30}})),i.a.createElement(Fs,null,i.a.createElement(Ds,{onChange:this.onNameChange,onKeyDown:this.onNameKeyDown,ref:this.inputRef,type:"text",value:a,error:r}),i.a.createElement(Ps,null,r?"This file already exists, please choose another name":i.a.createElement("span",null," ")),i.a.createElement(ks,null,i.a.createElement(Os,{onClick:this.reset,background:y.colors._grey},"Discard"),i.a.createElement(Os,{onClick:this.save,disabled:r},"Save"))))))}})||os;const Us=o.default.div`
    height: 10px;
    border-radius: 10px;
    background: ${y.colors._grey};
    overflow: hidden;
`,js=o.default.div`
    width: ${e=>e.width}%;
    height: 10px;
`,$s=({percentage:e})=>i.a.createElement(Us,null,i.a.createElement(js,{width:e,style:{background:e>=90?y.colors.redLight:y.colors.bluePastel}}));function Hs(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Bs=a(62),zs=a(39),{checkUpdate:Gs}=a(45),{openModal:Vs}=a(23),{signOut:Ws}=a(61),{selectUser:Ks}=a(28),Ys=a(13),{formatFileSize:Xs}=a(148),{openLink:qs,toggleDevTools:Js}=a(20),Zs=a(3),Qs="\n    display: flex;\n    height: 100%;\n    justify-content: space-between;\n    align-items: center;\n",er=o.default.div`
    width: 50%;
    padding: 0 40px;
`,tr=o.default.div`
    margin-bottom: 25px;
    font-weight: 600;
    text-align: center;
    font-size: 18px;
`,ar=o.default.span`
    color: ${Zs.colors.redLight};
`,nr=o.default.div`
    margin-top: 30px;
`;var ir=Object(s.connect)(e=>({enableExperimental:e.application.enableExperimental,updateAvailable:e.application.updateAvailable,user:Ks(e)}))(class extends i.a.Component{constructor(...e){super(...e),Hs(this,"state",{storageSize:0,storageSizeLimit:0,storageSizeLoaded:!1}),Hs(this,"signOut",()=>{this.props.dispatch(Ws())}),Hs(this,"checkUpdates",()=>{this.props.dispatch(Gs(!0))})}renderDevMenu(){return i.a.createElement(nr,null,i.a.createElement(tr,null,"Experimental Menu"),i.a.createElement(La,{onClick:Js,first:!0,centered:!0},"Toggle dev tools"))}getUserStorageSize(){return new Promise(async e=>{const{user:t}=this.props;if(void 0!==t.data.storageSize)return e(t.data.storageSize);e(await ft.a.getUserStorageSize(t.uid))})}async fetchStorageSize(){const{user:e}=this.props;if(Object(qa.hasUpload)(e)){const t=await this.getUserStorageSize(),a=Object(qa.getUserStorageLimit)(e);this.setState({storageSizeLoaded:!0,storageSize:t,storageSizeLimit:a})}}renderAccount(){if(Object(qa.hasUpload)(this.props.user)){const{storageSize:e,storageSizeLimit:t,storageSizeLoaded:a}=this.state;if(!a)return i.a.createElement(zs,null,i.a.createElement(ue.a,{size:40}));const n=100*e/t,s=isNaN(n)?0:parseFloat(n.toFixed(2));return i.a.createElement(zs,null,i.a.createElement(zs,{size:"xs"},"Total storage size used:"),i.a.createElement(zs,{size:"xs"},Xs(e)," / ",Xs(t)," (",s,"%)"),i.a.createElement(zs,{size:"s"},i.a.createElement($s,{percentage:s})),this.renderStorageFullMessage(s))}return null}renderStorageFullMessage(e){if(e<90)return null;const t=e>=100?"Your storage space is full!":"Your storage space is almost full!";return i.a.createElement(zs,null,t," Visit ",i.a.createElement("a",{href:"https://songriffer.com"},"to increase your plan and be able to add more files"))}componentDidMount(){Ys.trackScreen("settings"),this.fetchStorageSize()}render(){const{enableExperimental:e,updateAvailable:t,user:a}=this.props;return i.a.createElement(Bs,{wrapperStyle:Qs},i.a.createElement(er,null,i.a.createElement(La,{onClick:this.checkUpdates,first:!0,centered:!0},"Check for updates ",t?i.a.createElement(ar,null,"•"):null),i.a.createElement(Ma,{href:`mailto:${Zs.email}`,centered:!0,text:"Contact Us"}),i.a.createElement(La,{onClick:()=>qs(Zs.facebookUrl),centered:!0},"Follow us on Facebook"),i.a.createElement(La,{onClick:()=>qs(Zs.instagramUrl),centered:!0},"Follow us on Instagram"),i.a.createElement(La,{onClick:()=>qs(Zs.landingUrl),centered:!0},"Visit us songriffer.com"),e&&this.renderDevMenu()),i.a.createElement(er,null,i.a.createElement(tr,null,"Hello ",a.email,"!"),this.renderAccount(),i.a.createElement(La,{icon:i.a.createElement(De,{font:Fe.Ionicons,name:"ios-log-out"}),onClick:this.signOut,first:!0,centered:!0},"Sign out")))}}),sr=a(58);function rr(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const{selectSelectedFile:or}=a(14),{selectUser:lr}=a(28),cr=a(13),pr=a(31),dr=a(224),ur=o.default.div`
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: ${e=>e.visible?0:"-100%"};
    left: 0;
    background: ${X.colors._blueDark};
    transition: bottom ease 0.4s;
    z-index: 10;
`,hr=o.default.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`,mr=Object(o.default)(Oi.a)`
    display: block;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${X.colors._white};
    text-decoration: none;
`,fr=o.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
    text-align: center;
`,gr=o.default.div`
    position: relative;
    padding-right: 10px;
    flex: 1;
    height: 30px;
`,Er=o.default.canvas`
    opacity: 0;
    transition: opacity ease 1s;
    height: 100%;
    width: 100%;
    cursor: pointer;
`,br=Object(o.default)(Er)`
    position: absolute;
    width: calc(100% - 10px);
    top: 0;
    left: 0;
    opacity: 1;
    pointer-events: none;
`,vr=new AudioContext;var yr=Object(s.connect)(e=>({file:or(e),missingFiles:e.files.missingFiles,playing:e.player.playing,user:lr(e)}))(class extends i.a.Component{constructor(...e){super(...e),rr(this,"canvas",i.a.createRef()),rr(this,"canvasProgress",i.a.createRef()),rr(this,"player",i.a.createRef()),rr(this,"calculateWaveDataWorker",new dr),rr(this,"eventInit",!1),rr(this,"canvasCtx",void 0),rr(this,"canvasProgressCtx",void 0),rr(this,"state",{audioBuffer:null,progress:null,progressPercent:0,waveformData:[]}),rr(this,"togglePlay",()=>{this.props.dispatch(Object(sr.togglePlay)())}),rr(this,"onWaveformCalculated",e=>{this.setState({waveformData:e.data}),this.canvasCtx.fillStyle=X.colors.purple;const t=this.canvas.current.height/2;e.data.forEach((e,a)=>{const n=1*a,i=(1+e.min)*t,s=Math.max(1,(e.max-e.min)*t);this.canvasCtx.fillRect(n,i,1,s)}),this.canvas.current.style.opacity="1"}),rr(this,"onCanvasClick",e=>{const t=e.clientX-e.target.offsetParent.offsetLeft,a=Math.round(100*t/e.target.offsetWidth),n=this.props.file.duration*a/100;this.player.current.currentTime=n})}playFile(){const{file:e,missingFiles:t}=this.props,a=[];t.includes(e.hashPath)&&e.uploaded&&(cr.trackEvent("player","download-file"),pr("Playing file from storage"),a.push(ft.a.getFileDownloadUrl(this.props.user,e))),Promise.all(a).then(t=>{const a=t[0]||e.escapedPath;this.player.current.src=a,this.player.current.play(),this.eventInit||this.initEvents(),cr.trackEvent("player","play-file",Object(me.extname)(this.props.file.name)),this.canvasCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),this.canvasProgressCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),this.loadWaveform(a)})}initEvents(){this.eventInit=!0,this.player.current.addEventListener("timeupdate",e=>{let t=0,a=0;this.props.file&&(a=100*(t=~~this.player.current.currentTime)/this.props.file.duration),t!==this.state.progress&&this.setState({progress:t,progressPercent:a})}),this.player.current.addEventListener("ended",e=>{this.togglePlay(),this.setState({progress:0,progressPercent:0})})}handlePlayingState(e){e&&this.player.current.paused&&(cr.trackEvent("player","play"),this.player.current.play()),e||this.player.current.paused||(cr.trackEvent("player","pause"),this.player.current.pause())}loadWaveform(e){fetch(e).then(e=>e.arrayBuffer()).then(e=>{vr.decodeAudioData(e,async e=>{this.calculateWaveDataWorker.postMessage({channelData:e.getChannelData(0),width:this.canvas.current.width,pointWidth:1})})})}drawProgressWaveform(){if(!this.props.file)return;const e=this.state.waveformData.slice(0,Math.round(this.state.progressPercent*this.state.waveformData.length/100)),t=this.canvasProgress.current.height/2;this.canvasProgressCtx.fillStyle=X.colors._purpleLight,this.canvasProgressCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),e.forEach((e,a)=>{const n=1*a,i=(1+e.min)*t,s=Math.max(1,(e.max-e.min)*t);this.canvasProgressCtx.fillRect(n,i,1,s)})}componentDidMount(){this.canvasCtx=this.canvas.current.getContext("2d"),this.canvasProgressCtx=this.canvasProgress.current.getContext("2d"),this.calculateWaveDataWorker.addEventListener("message",this.onWaveformCalculated)}componentDidUpdate(e,t){(!e.file&&this.props.file||e.file&&this.props.file&&e.file.path!==this.props.file.path)&&this.playFile(),e.playing!==this.props.playing&&this.handlePlayingState(this.props.playing),t.progress!==this.state.progress&&this.drawProgressWaveform()}render(){const{file:e,playing:t}=this.props,{audioBuffer:a,progress:n,progressPercent:s}=this.state;return i.a.createElement(i.a.Fragment,null,i.a.createElement("audio",{ref:this.player}),i.a.createElement(ur,{visible:!!e},i.a.createElement(hr,null,i.a.createElement(De,{font:Fe.Ionicons,name:t?"ios-pause":"ios-play",onClick:this.togglePlay,style:{fontSize:30}}),i.a.createElement(fr,null,i.a.createElement(gr,null,i.a.createElement(br,{ref:this.canvasProgress}),i.a.createElement(Er,{ref:this.canvas,onClick:this.onCanvasClick})),e?i.a.createElement("span",null,Object(me.formatDuration)(n)," / ",Object(me.formatDuration)(e.duration)):null),e?i.a.createElement(mr,{to:`${y.routes.home}#file-${this.props.file.hashPath}`,title:e.name},e.name):null)))}});function Tr(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Sr=a(54),_r=o.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`,xr=Object(o.default)(Sr)`
    margin-right: 7px;
    opacity: ${e=>e.visible?1:0};
    transition: opacity ease 0.3s;
`;var Cr=Object(s.connect)(e=>{const t=Object(v.a)(e);return{advancedSearchVisible:t.displayAdvanced,search:t}})(class extends i.a.PureComponent{constructor(...e){super(...e),Tr(this,"search",e=>{this.props.dispatch(S(e.target.value))}),Tr(this,"toggleAdvanced",()=>{this.props.dispatch(_())})}componentWillUnmount(){this.props.advancedSearchVisible&&this.props.dispatch(_())}render(){const{advancedSearchVisible:e,search:t}=this.props;return i.a.createElement(_r,null,i.a.createElement(xr,{type:"text",onChange:this.search,value:t.basicTerm,name:"search",placeholder:"Search",visible:!e,id:"basic-search-input"}),i.a.createElement(De,{font:Fe.FontAwesome,name:"search-plus",onClick:this.toggleAdvanced,style:{fontSize:20,color:e?X.colors.blueLight:X.colors._white}}))}});const wr=a(149),Ar=a(39),Rr=a(225),{selectUser:Fr}=a(28),kr=o.default.div`
    display: flex;
    flex-direction: column;
    width: 75px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: ${e=>e.playerOpen?"50px":0};
    margin-right: 15px;
    font-size: 13px;
    border-right: 1px solid ${X.colors.blueLight};
`,Dr=o.default.div`
    flex: 1;
`,Pr=o.default.div``,Or=Object(o.default)(Oi.a)`
    display: block;
    position: relative;
    text-decoration: none;

    :after {
        position: absolute;
        content: '';
        height: 100%;
        width: ${e=>e.isActive?"2px":0};
        top: 0;
        left: -15px;
        background: ${X.colors.blueLight};
        transition: width ease 0.3s;
    }
`,Lr=o.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin-bottom: 15px;
    color: ${X.colors._white};

    :hover {
        color: ${X.colors.blueLight};
    }
`;var Ir=Object(s.connect)(e=>({selectedFile:Object(zt.selectSelectedFile)(e),updateAvailable:e.application.updateAvailable,user:Fr(e)}))(class extends i.a.Component{renderItem(e,t){return i.a.createElement(l.b,{path:e,children:({match:a})=>i.a.createElement(Or,{to:e,isActive:a&&a.isExact},i.a.createElement(Lr,null,t))})}render(){const{selectedFile:e,updateAvailable:t,user:a}=this.props;return i.a.createElement(kr,{playerOpen:!!e},i.a.createElement(Dr,null,this.renderItem(y.routes.home,i.a.createElement(i.a.Fragment,null,i.a.createElement(Ar,{size:"s"},i.a.createElement(De,{font:Fe.Foundation,name:"list",style:{fontSize:28,color:X.colors.blueLight}})),i.a.createElement("div",null,"Files"))),this.renderItem(y.routes.transfer,i.a.createElement(i.a.Fragment,null,i.a.createElement(Ar,{size:"s"},i.a.createElement(wr,null)),i.a.createElement("div",null,"Mobile Transfer"))),this.renderItem(y.routes.recorder,i.a.createElement(i.a.Fragment,null,i.a.createElement(Ar,{size:"s"},i.a.createElement(De,{font:Fe.FontAwesome,name:"circle-thin",style:{fontSize:28,color:X.colors.blueLight}})),i.a.createElement("div",null,"Recorder"))),this.renderItem(y.routes.stats,i.a.createElement(i.a.Fragment,null,i.a.createElement(Ar,{size:"s"},i.a.createElement(Rr,null)),i.a.createElement("div",null,"Stats"))),a.data.hasProject?this.renderItem(y.routes.projects,i.a.createElement(i.a.Fragment,null,i.a.createElement(Ar,{size:"s"},i.a.createElement(De,{font:Fe.MaterialCommunityIcons,name:"album",style:{fontSize:28,color:X.colors.blueLight}})),i.a.createElement("div",null,"Projects"))):null),i.a.createElement(Pr,null,this.renderItem(y.routes.account,i.a.createElement(i.a.Fragment,null,i.a.createElement(Ar,{size:"s"},i.a.createElement(De,{font:Fe.Ionicons,name:"md-person",style:{fontSize:28,color:X.colors.blueLight}})),t?i.a.createElement("div",null,"Update available"):null))))}});function Mr(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Nr=a(53),Ur=a(31),jr=a(3),$r=o.default.div`
    margin-bottom: 25px;
    color: ${jr.colors._white};
`,Hr=o.default.form`
    width: 100%;
    max-width: 480px;
    margin-bottom: 50px;
    text-align: center;
`,Br=o.default.div`
    cursor: pointer;
    color: ${jr.colors._white};

    :hover {
        text-decoration: underline;
    }
`,zr=o.default.div`
    cursor: pointer;
    color: ${jr.colors._white};
    margin-top: 40px;
    opacity: 0.6;
    font-size: 13px;

    :hover {
        text-decoration: underline;
        opacity: 1;
    }
`,Gr=Object(o.default)(Nr)`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 25px;

    opacity: ${e=>e.pending?.5:1};
`,Vr=o.default.div`
    margin: 5px 0 25px;
    color: ${jr.colors.redLight};
`;var Wr;!function(e){e["auth/user-not-found"]="We could not find your account, please check your information or create a new account.",e["auth/wrong-password"]="Invalid password.",e["sr/password-mismatch"]="Your confirmation and your password must match"}(Wr||(Wr={}));var Kr=class extends i.a.Component{constructor(...e){super(...e),Mr(this,"state",{authForm:"signin",confirmPassword:"",email:"",error:null,password:"",pending:!1,renderPasswordForgotten:!1,resetEmailSent:!1}),Mr(this,"_mounted",!0),Mr(this,"emailInputRef",i.a.createRef()),Mr(this,"signIn",e=>{e.preventDefault(),this.setState({pending:!0}),ft.a.signInWithEmailPassword(this.state.email,this.state.password).then(()=>{this._mounted&&this.setState({email:"",password:"",pending:!1})}).catch(e=>{this.setState({error:Wr[e.code]?Wr[e.code]:e.message,pending:!1})})}),Mr(this,"signUp",e=>{e.preventDefault(),this.setState({pending:!0});const{confirmPassword:t,email:a,password:n}=this.state;n===t?ft.a.signUpWithEmailPassword(a,n).then(e=>{Ur(`New user sign up - ${e.user.email}`),this._mounted&&this.setState({email:"",password:"",pending:!1})}).catch(e=>{this.setState({error:e,pending:!1})}):this.setState({error:Wr["sr/password-mismatch"]})}),Mr(this,"switchForm",()=>{this.setState({authForm:"signin"===this.state.authForm?"signup":"signin",error:null}),this.focusInput()}),Mr(this,"onChangeEmail",e=>{this.setState({email:e.target.value,error:null})}),Mr(this,"onChangePassword",e=>{this.setState({password:e.target.value,error:null})}),Mr(this,"onChangeConfirmPassword",e=>{this.setState({confirmPassword:e.target.value,error:null})}),Mr(this,"sendResetPassword",e=>{e.preventDefault(),this.state.email.length&&ft.a.sendResetPasswordEmail(this.state.email).then(()=>{this.setState({resetEmailSent:!0})})}),Mr(this,"switchPasswordForgotten",()=>{this.setState({renderPasswordForgotten:!this.state.renderPasswordForgotten,resetEmailSent:!1})})}focusInput(){this.emailInputRef.current.focus()}renderPasswordForgotten(){return i.a.createElement(Hr,{onSubmit:this.sendResetPassword},this.state.resetEmailSent?i.a.createElement($r,null,"An email has been sent to reset your password."):null,this.renderEmailInput(),i.a.createElement(Gr,null,"Send email to reset your password"),i.a.createElement(Br,{onClick:this.switchPasswordForgotten},"Return to login"))}renderEmailInput(){return i.a.createElement($r,null,i.a.createElement(ji.a,{type:"email",placeholder:"Email",onChange:this.onChangeEmail,value:this.state.email,ref:this.emailInputRef}))}componentDidMount(){this.focusInput()}componentWillUnmount(){this._mounted=!1}render(){const{authForm:e,error:t,pending:a,renderPasswordForgotten:n}=this.state;return n?this.renderPasswordForgotten():i.a.createElement(Hr,{onSubmit:"signin"===e?this.signIn:this.signUp},this.renderEmailInput(),i.a.createElement($r,null,i.a.createElement(ji.a,{type:"password",placeholder:"Password",onChange:this.onChangePassword,value:this.state.password})),"signup"===e?i.a.createElement($r,null,i.a.createElement(ji.a,{type:"password",placeholder:"Confirm Password",onChange:this.onChangeConfirmPassword,value:this.state.confirmPassword})):null,i.a.createElement(Gr,{pending:a},"Sign ","signin"===e?"in":"up"),t?i.a.createElement(Vr,null,t):null,i.a.createElement(Br,{onClick:this.switchForm},"signin"===e?"Create an account":"I already have an account"),i.a.createElement(zr,{onClick:this.switchPasswordForgotten},"Forgot your password?"))}};function Yr(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Xr=a(226),qr=a(13),Jr=o.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;var Zr,Qr,eo,to=class extends i.a.Component{constructor(...e){super(...e),Yr(this,"state",{animationDone:!1}),Yr(this,"onAnimationDone",()=>{this.setState({animationDone:!0}),this.props.onAnimationDone()})}componentDidMount(){const e=Math.round(performance.now());qr.trackTiming("app","app-ready",e)}render(){const{authLoading:e,isAuthenticated:t}=this.props,{animationDone:a}=this.state,n=!e&&!t,s=[{component:i.a.createElement(he.Spring,{from:{angle:"-70deg",opacity:0},to:{angle:"0deg",opacity:1},config:he.config.slow},e=>i.a.createElement(Xr,{opacity:e.opacity,angle:e.angle})),key:"logo"},{component:i.a.createElement(he.Spring,{from:{opacity:0},to:{opacity:n?1:0},config:he.config.slow},e=>i.a.createElement("div",{style:{opacity:e.opacity}},i.a.createElement(Kr,null))),key:"authform"}];return i.a.createElement(Jr,null,i.a.createElement(he.Trail,{items:s,keys:e=>e.key,from:{transform:"translate3d(0, 40px, 0)"},to:{transform:"translate3d(0, 0, 0)"},config:he.config.slow,onRest:this.onAnimationDone},e=>t=>i.a.createElement("div",{style:t},e.component)))}};function ao(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const no=a(0),io=a(4).default,so=a(12),{connect:ro}=a(9),{removeTag:oo}=a(19),lo=a(3),co=io.div`
    position: absolute;
    padding: 5px 0;
    top: ${e=>e.top-10}px;
    left: ${e=>e.left-10}px;
    background: rgba(0, 0, 0, 0.8);
    color: ${lo.colors._white};
    border-radius: 3px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    z-index: 10;
    animation: open 0.2s 1;
    animation-timing-function: ease;

    @keyframes open {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`,po=io.div`
    padding: 5px 7px;
    cursor: pointer;

    :hover {
        background: ${lo.colors.blueLight};
        color: ${lo.colors._white};
    }
`;var uo,ho=ro()((eo=Qr=class extends no.Component{constructor(...e){super(...e),ao(this,"rootRef",no.createRef()),ao(this,"onDocumentClick",e=>{this.rootRef.current.contains(e.target)||this.props.close()}),ao(this,"removeTag",()=>{this.props.dispatch(oo(this.props.props.fileHashPath,this.props.props.tag)),this.props.close()}),ao(this,"searchTag",()=>{this.props.dispatch(x(this.props.props.tag)),this.props.close()})}componentDidMount(){document.addEventListener("click",this.onDocumentClick,{passive:!0})}componentWillUnmount(){document.removeEventListener("click",this.onDocumentClick)}render(){const{positionX:e,positionY:t}=this.props;return no.createElement(co,{top:t,left:e,ref:this.rootRef},no.createElement(po,{onClick:this.removeTag},"Remove Tag"),no.createElement(po,{onClick:this.searchTag},"Search all files with this tag"))}},ao(Qr,"propTypes",{close:so.func,dispatch:so.func,positionX:so.number,positionY:so.number,props:so.object}),Zr=eo))||Zr,mo=a(61);function fo(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const go=a(70),{closeModalEsc:Eo}=a(23),{checkUpdate:bo,closeContextMenu:vo,resize:yo}=a(45),{togglePlay:To}=a(58),{recorderFileAlreadyExists:So,recorderSaveSuccess:_o}=a(126),{transferSaveSuccess:xo}=a(150),{setMXML:Co}=a(227),{getFilesDurationAndBPM:wo,importFiles:Ao}=a(59),Ro=a(13),Fo=a(31),{isAuthenticated:ko,isUserFullyLoaded:Do,selectUser:Po}=a(28),{checkFilesDBExists:Oo,getAppConfig:Lo,onMissingFiles:Io,setCallback:Mo}=a(20),No=a(3),Uo=(o.default.div`
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${No.colors._white};
`,o.default.div`
    display: flex;
    padding: 20px 0 20px 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`),jo=o.default.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
`,$o=o.default.div`
    flex: 1;
    opacity: ${e=>e.dragging?.3:1};
    transition: opacity ease 0.4s;
`,Ho=o.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    // left padding is added in sidebar and header
    // so the sidebar active link stuff is on the side
    padding: 15px 15px 15px 0;
    color: ${No.colors._white};
    user-select: none;

    animation: open 0.5s 1;
    animation-timing-function: ease;

    @keyframes open {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`,Bo=o.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,zo=i.a.lazy(()=>a.e(2).then(a.bind(null,239))),Go=()=>i.a.createElement(i.a.Suspense,{fallback:null},i.a.createElement(zo,null)),Vo=i.a.lazy(()=>a.e(1).then(a.bind(null,240))),Wo=()=>i.a.createElement(i.a.Suspense,{fallback:null},i.a.createElement(Vo,null)),Ko=i.a.lazy(()=>a.e(0).then(a.bind(null,241))),Yo=()=>i.a.createElement(i.a.Suspense,{fallback:null},i.a.createElement(Ko,null));var Xo=Object(s.connect)(e=>({advancedSearchVisible:Object(v.a)(e).displayAdvanced,allowFileDragging:e.application.allowFileDragging,appReady:Do(e),appWidth:e.application.appWidth,authLoading:e.auth.authLoading,contextMenu:e.application.contextMenu,isAuthenticated:ko(e),modalOpen:!!e.modal.name,user:Po(e)}))(uo=class extends i.a.Component{constructor(...e){super(...e),fo(this,"dragDropActivated",!1),fo(this,"updateTimeout",void 0),fo(this,"fullUserListener",void 0),fo(this,"removeDragDrop",void 0),fo(this,"state",{dragging:!1,hasError:!1,splashAnimationDone:!1}),fo(this,"onSplashAnimationDone",()=>{this.setState({splashAnimationDone:!0})}),fo(this,"importFiles",e=>{Ao(this.props.dispatch,e,e=>{for(let t in e)e[t].newImport=!0;this.props.dispatch(Object(Ja.addFiles)(e,!0))})}),fo(this,"getDataFromMain",(e,t)=>{switch(e){case No.mainConsts.events.CHECK_FILES_DB:t.exists&&this.props.dispatch({type:No.actionTypes.SET_MIGRATION_DATA,data:t.data,_winBackup:t._winBackup});break;case No.mainConsts.events.DATA_FETCHED:if(t.db===No.db.files){this.props.dispatch(Object(Ja.addFiles)(t.data));const e=[];return Object.values(t.data).forEach(t=>{t.bpm&&t.duration||e.push(t)}),void(e.length&&wo(this.props.dispatch,e))}t.db===No.db.app&&t.data.displayAdvanced&&this.props.dispatch(_());break;case No.mainConsts.events.FILE_ALREADY_EXISTS:this.props.dispatch(So(t));break;case No.mainConsts.events.FILE_SYSTEM_ERROR:console.log(t);break;case No.mainConsts.events.FILE_SAVE_SUCCESS:t.saveType===No.saveTypes.RECORDER?this.props.dispatch(_o(t.filePath)):t.saveType===No.saveTypes.TRANSFER&&this.props.dispatch(xo(t.fileName,t.filePath));break;case No.mainConsts.events.GET_MXLM_SUCCESS:this.props.dispatch(Co(t.filePath,t.mxml));break;case No.mainConsts.events.OPEN_DEEPLINK:this.handleDeeplink(t.url)}}),fo(this,"handleDeeplink",e=>{try{const t=e.replace("songriffer://songriffer.com?deeplink=",""),a=JSON.parse(decodeURIComponent(t));a.type,Fo(`Unsupported deeplink type ${a.type} - raw deeplink: ${t}`)}catch(t){const a=`Could not parse deeplink args: ${e}`;console.error(a),Ro.exception(a),Fo(`*Error* ${a}`)}}),fo(this,"onMissingFiles",e=>{this.props.dispatch(Object(Ja.setMissingFiles)(e.files))}),fo(this,"onKeyDown",e=>{if("Escape"===e.key&&this.props.dispatch(Eo()),32===e.keyCode&&e.target===document.body&&(this.props.dispatch(To()),e.preventDefault()),!this.props.modalOpen&&e.target&&"INPUT"!==e.target.tagName&&"f"===e.key&&(e.ctrlKey||e.metaKey)){let e=null;e=this.props.advancedSearchVisible?"#advanced-search-input":"#basic-search-input";const t=document.querySelector(e);t&&t.focus()}}),fo(this,"onResize",()=>{window.innerWidth!==this.props.appWidth&&this.props.dispatch(yo(window.innerWidth))}),fo(this,"setFullUser",e=>{this.props.dispatch(Object(mo.setFullUserData)(e))}),fo(this,"onAuthChange",e=>{e?(this.props.dispatch(Object(mo.signIn)(e)),ft.a.getFullUser(e.uid).then(this.setFullUser)):this.props.dispatch(Object(mo.notLogged)())}),fo(this,"closeContextMenu",()=>{this.props.dispatch(vo())}),fo(this,"catchError",e=>{this.setState({hasError:!0});try{const t=`${e.message} \n \`\`\`${e.error.stack}\`\`\``;Ro.exception(e.message),Fo(`*Error* ${t}`)}catch(e){Fo("*Error* unavailable message"),Ro.exception("Error - unavailable message")}})}detectDragDrop(){this.dragDropActivated=!0,this.removeDragDrop=go(document.body,{onDrop:this.importFiles,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})}listenForFullUserUpdate(){ft.a.listenForFullUserUpdate(this.props.user.uid,this.setFullUser).then(e=>{this.fullUserListener=e})}removeFullUserListener(){"function"==typeof this.fullUserListener&&this.fullUserListener()}checkUpdate(){clearTimeout(this.updateTimeout),this.props.dispatch(bo(!1)),this.updateTimeout=setTimeout(()=>{this.checkUpdate()},No.updateInterval)}componentDidCatch(e,t){this.setState({hasError:!0});try{const a=`${e.message} \n \`\`\`${t.componentStack}\`\`\``;Fo(`*Error* ${a}`)}catch(e){Fo("*Did catch error* could not stringify error")}}componentDidMount(){Oo(),window.addEventListener("error",this.catchError,{passive:!0}),this.detectDragDrop(),Io(this.onMissingFiles),Mo(this.getDataFromMain),ft.a.onAuthChange(this.onAuthChange),Ro.trackEvent("app","app-start",window.__songRiffer.platform),Ro.trackEvent("app",`platform-${window.__songRiffer.platform}`,window.__songRiffer.release),Ro.trackEvent("app","appVersion","1.15.0"),document.addEventListener("keydown",this.onKeyDown),window.addEventListener("resize",this.onResize,{passive:!0}),this.onResize(),this.updateTimeout=setTimeout(()=>{this.checkUpdate()},3e3)}componentDidUpdate(e){!this.props.modalOpen&&this.props.allowFileDragging||!this.dragDropActivated||(this.removeDragDrop(),this.dragDropActivated=!1),this.props.modalOpen||!this.props.allowFileDragging||this.dragDropActivated||this.detectDragDrop(),!e.appReady&&this.props.appReady&&Lo(),!e.isAuthenticated&&this.props.isAuthenticated?this.listenForFullUserUpdate():e.isAuthenticated&&!this.props.isAuthenticated&&this.removeFullUserListener()}componentWillUnmount(){clearTimeout(this.updateTimeout),this.removeFullUserListener()}render(){const{appReady:e,authLoading:t,contextMenu:a,isAuthenticated:n}=this.props,{dragging:s,hasError:r,splashAnimationDone:o}=this.state;return e&&o?r?i.a.createElement(de,null):i.a.createElement(l.a,null,i.a.createElement(Ho,null,i.a.createElement(Q,null),i.a.createElement(Uo,null,i.a.createElement(Bo,null,i.a.createElement(Ea,{style:"margin-left: 3px;"})),i.a.createElement(l.d,null,i.a.createElement(l.b,{exact:!0,path:No.routes.home,component:Cr}))),i.a.createElement(jo,null,i.a.createElement(Ir,null),i.a.createElement(J,{dragging:s}),i.a.createElement($o,{dragging:s},i.a.createElement(l.d,null,i.a.createElement(l.b,{path:No.routes.project,component:ls}),i.a.createElement(l.b,{path:No.routes.projects,component:Yo}),i.a.createElement(l.b,{path:No.routes.recorder,component:Ns}),i.a.createElement(l.b,{path:No.routes.account,component:ir}),i.a.createElement(l.b,{path:No.routes.stats,component:Wo}),i.a.createElement(l.b,{path:No.routes.transfer,component:Go}),i.a.createElement(l.b,{exact:!0,path:No.routes.home,component:fa}))),i.a.createElement(Y,null),i.a.createElement(Ri,null),i.a.createElement(Pi,null),i.a.createElement(yr,null)),a.active?i.a.createElement(ho,{close:this.closeContextMenu,positionX:a.positionX,positionY:a.positionY,props:a.props}):null)):i.a.createElement(to,{authLoading:t,isAuthenticated:n,onAnimationDone:this.onSplashAnimationDone})}})||uo;const qo={allowFileDragging:!1,appWidth:0,contextMenu:{},dbLoaded:!1,enableExperimental:!1,updateAvailable:!1},Jo={authLoading:!0,data:{createdAt:null,cloudLevel:0,updatedAt:null},user:null},Zo=e=>({email:e.email,emailVerified:e.emailVerified,uid:e.uid}),Qo={_dataToMigrate:null,_winBackup:!1,files:{},missingFiles:[],pending:!0,sortRule:null,selectedFile:null},el=(e,t)=>{const a={...e};for(let e in t)a[e]?a[e]={...a[e],added:t[e].added,size:t[e].size}:a[e]=t[e];return a},tl=(e,t,a)=>{const n={...e};return delete n[t],n[Object(me.getFilePathHash)(a.path)]=a,n},al=(e,t,a)=>{if(!e[t])return e;const n=e[t];return Object.keys(n.tags).map(e=>e.toLowerCase()).includes(a.toLowerCase())?e:{...e,[t]:{...n,tags:{...e[t].tags,[a]:!0}}}},nl={name:null,props:null},il={filePath:null,mxml:null},{displayUpdateAvailableModal:sl}=a(45),{openModal:rl}=a(23),ol={notification:{active:!1}};let ll=0;const cl=()=>ll++,pl={fileHashPath:void 0,playing:!1},dl={fileAlreadyExists:"",filePath:null,saveSuccess:!1},ul={advancedTransitionDone:!0,archived:y.searchArchived.NON_ARCHIVED,basicTerm:"",bpm:"",bpmDelta:10,displayAdvanced:!1,tags:{},term:""},{combineReducers:hl}=a(69),ml=hl({application:(e=qo,t)=>{switch(t.type){case y.actionTypes.ADD_FILES:return{...e,dbLoaded:!0};case y.actionTypes.UPDATE_AVAILABLE:return{...e,updateAvailable:!0};case y.actionTypes.APP_RESIZE:return{...e,appWidth:t.width};case y.actionTypes.DISPLAY_TAG_CONTEXT_MENU:return{...e,contextMenu:{active:!0,positionX:t.positionX,positionY:t.positionY,props:t.props}};case y.actionTypes.CLOSE_CONTEXT_MENU:return{...e,contextMenu:qo.contextMenu};case y.actionTypes.SEARCH_BASIC:return t.term.toLowerCase()===y.DEBUG_KEY_SEQUENCE?{...e,enableExperimental:!0}:e;case y.actionTypes.SET_ALLOW_FILE_DRAGGING:return{...e,allowFileDragging:t.allowFileDragging};default:return e}},auth:(e=Jo,t)=>{switch(t.type){case y.actionTypes.AUTH_SET_USER:return{...e,authLoading:!1,user:Zo(t.user)};case y.actionTypes.AUTH_SIGN_OUT:return Jo;case y.actionTypes.AUTH_SET_FULL_USER_DATA:return{...e,data:t.data};case y.actionTypes.AUTH_NOT_LOGGED:return{...e,authLoading:!1};default:return e}},files:(e=Qo,t)=>{switch(t.type){case y.actionTypes.SET_FILES:return{...e,files:t.files,pending:!1};case y.actionTypes.SET_MIGRATION_DATA:return{...e,_dataToMigrate:t.data,_winBackup:t._winBackup};case y.actionTypes.ADD_TAG:return{...e,files:al(e.files,t.hashPath,t.tag)};case y.actionTypes.REMOVE_TAG:const a=e.files[t.hashPath],n={...a.tags};return delete n[t.tag],{...e,files:{...e.files,[t.hashPath]:{...a,tags:n}}};case y.actionTypes.EDIT_FILE:let i;return i=!t.automaticEdit&&t.edit.bpm||t.automaticEdit&&t.edit.bpm&&!e.files[t.hashPath].bpm?t.edit.bpm:e.files[t.hashPath].bpm,{...e,files:{...e.files,[t.hashPath]:{...e.files[t.hashPath],...t.edit,bpm:i}}};case y.actionTypes.ADD_FILES:return{...e,_dataToMigrate:null,files:el(e.files,t.files),pending:!1};case y.actionTypes.REMOVE_FILE:const s={...e.files};return delete s[t.hashPath],{...e,files:s,selectedFile:e.selectedFile===t.hashPath?null:e.selectedFile};case y.actionTypes.PLAY_FILE:return{...e,selectedFile:t.hashPath};case y.actionTypes.REPLACE_FILE:return{...e,files:tl(e.files,t.oldFileHashPath,t.newFile)};case y.actionTypes.SET_MISSING_FILES:return{...e,missingFiles:t.filesHashPath};case y.actionTypes.SET_SORT_RULE:return{...e,sortRule:t.sortRule};case y.actionTypes.PAUSE_PLAYER:return t.unsetSelectedFile?{...e,selectedFile:null}:e;case y.actionTypes.DISABLE_NEW_IMPORTS:const r={...e.files};for(const e of t.files)r[e]={...r[e],newImport:!1};return{...e,files:r};case y.actionTypes.AUTH_SIGN_OUT:return Qo;default:return e}},modal:(e=nl,t)=>{switch(t.type){case y.actionTypes.OPEN_MODAL:return{name:t.name,props:t.props};case y.actionTypes.CLOSE_MODAL:return nl;default:return e}},mxml:(e=il,t)=>{switch(t.type){case y.actionTypes.SET_MXML:return{...e,filePath:t.filePath,mxml:t.mxml};default:return e}},notifications:(e=ol,t)=>{switch(t.type){case y.actionTypes.ADD_NOTIFICATION:return{notification:{...t.notification,active:!0,id:cl()}};case y.actionTypes.REMOVE_NOTIFICATION:return{notification:{...e.notification,active:!1}};case y.actionTypes.ADD_FILES:if(!t.newImports)return e;const a=Object.values(t.files).filter(e=>e.source!==Tn.b.RECORD&&e.source!==Tn.b.TRANSFER).length;return a?{notification:{title:`Imported ${a} file${a>1?"s":""}`,status:"success",active:!0,id:cl()}}:e;case y.actionTypes.REMOVE_FILE:return{notification:{title:"File removed",status:"success",active:!0,id:cl()}};case y.actionTypes.REPLACE_FILE:return{notification:{title:"File successfully replaced",status:"success",active:!0,id:cl()}};case y.actionTypes.NOTIFY_MISSING_FILE:return{notification:{title:`We could not locate the file ${t.file.name}. Click here to fix this`,status:"error",active:!0,id:cl(),onClick:()=>rl(y.modals.fileMissing,{fileHashPath:t.file.hashPath}),timeout:5e3}};case y.actionTypes.UPDATE_AVAILABLE:return{notification:{title:"New version available!",status:"success",active:!0,id:cl(),onClick:()=>e=>{e(sl(t.url,t.changelog))},timeout:5e3}};case y.actionTypes.SEARCH_BASIC:return t.term.toLowerCase()===y.DEBUG_KEY_SEQUENCE?{notification:{title:"Experimental mode activated",status:"success",active:!0,id:cl()}}:e;default:return e}},player:(e=pl,t)=>{switch(t.type){case y.actionTypes.PLAY_FILE:return{...e,fileHashPath:t.hashPath,playing:!0};case y.actionTypes.TOGGLE_PLAY:return{...e,playing:!e.playing};case y.actionTypes.PAUSE_PLAYER:return{...e,playing:!1};case y.actionTypes.REMOVE_FILE:return t.hashPath===e.fileHashPath?pl:e;default:return e}},recorder:(e=dl,t)=>{switch(t.type){case y.actionTypes.RECORDER_FILE_ALREADY_EXISTS:return{...e,fileAlreadyExists:t.fileName};case y.actionTypes.RECORDER_SAVE_SUCCESS:return{...e,filePath:t.filePath,saveSuccess:!0};case y.actionTypes.RECORDER_RESET:return dl;default:return e}},search:(e=ul,t)=>{switch(t.type){case y.actionTypes.SEARCH_BASIC:return{...e,basicTerm:t.term};case y.actionTypes.SET_SEARCH:return{...e,term:t.term,basicTerm:""};case y.actionTypes.TOGGLE_ADVANCED_SEARCH:return{...ul,displayAdvanced:!e.displayAdvanced,advancedTransitionDone:!1};case y.actionTypes.ADVANCED_TRANSITION_DONE:return{...e,advancedTransitionDone:!0};case y.actionTypes.SEARCH_TAG:return{...e,advancedTransitionDone:!1,displayAdvanced:!0,basicTerm:"",tags:{...e.tags,[t.tag]:!0}};case y.actionTypes.REMOVE_SEARCH_TAG:const a={...e.tags};return delete a[t.tag],{...e,basicTerm:"",tags:a};case y.actionTypes.SEARCH_BPM:return{...e,basicTerm:"",bpm:isNaN(parseInt(t.bpm,10))?"":parseInt(t.bpm,10)};case y.actionTypes.SEARCH_BPM_DELTA:return{...e,bpmDelta:isNaN(parseInt(t.bpmDelta,10))?10:parseInt(t.bpmDelta,10)};case y.actionTypes.CLEAR_SEARCH:return{...ul,displayAdvanced:e.displayAdvanced};case y.actionTypes.SET_SEARCH_ARCHIVED:return{...e,archived:t.archived};default:return e}},transfer:a(229)}),fl=a(3),{saveApp:gl}=a(20),{selectFilesForStorage:El}=a(14),{selectUser:bl}=a(28);var vl=e=>t=>a=>{if(t(a),a.__saveToDB__){const t=e.getState();switch(a.__db){case fl.db.files:const e=!{[fl.actionTypes.REMOVE_FILE]:!0,[fl.actionTypes.REPLACE_FILE]:!0}[a.type],n=El(t),i=bl(t);ft.a.saveFullFilesData(i.uid,n,e);break;case fl.db.app:gl({displayAdvanced:Object(v.a)(t).displayAdvanced});break;default:throw new Error("Error trying to save data, unknow db",a.__db)}}};const{createStore:yl,applyMiddleware:Tl}=a(69),Sl=yl(ml,Tl(a(228).default,vl,a(230)));var _l=a(144),xl=a(145),Cl=a(146),wl=a(147);const Al=(e,t)=>{const a=`@font-face {\n        src: url(${t});\n        font-family: ${e};\n    }`,n=document.createElement("style");n.type="text/css",n.appendChild(document.createTextNode(a)),document.head.appendChild(n)};Al("FontAwesome",_l.a),Al("Foundation",xl.a),Al("Ionicons",Cl.a),Al("MaterialCommunityIcons",wl.a),Object(r.render)(i.a.createElement(s.Provider,{store:Sl},i.a.createElement(Xo,null)),document.querySelector("#root"))},28:function(e,t,a){const n=a(76),i=e=>e.auth;e.exports.isAuthenticated=e=>!!e.auth.user,e.exports.selectUser=n([i],e=>e.user?{...e.user,data:e.data}:e.user,"selectUser"),e.exports.isUserFullyLoaded=n([i],e=>e.user&&!!Object.keys(e.data).length,"isUserFullyLoaded")},3:function(e,t,a){"use strict";a.r(t),a.d(t,"mainConsts",function(){return i}),a.d(t,"actionTypes",function(){return s}),a.d(t,"db",function(){return r}),a.d(t,"DEBUG_KEY_SEQUENCE",function(){return o}),a.d(t,"email",function(){return l}),a.d(t,"landingUrl",function(){return c}),a.d(t,"facebookUrl",function(){return p}),a.d(t,"instagramUrl",function(){return d}),a.d(t,"messengerUrl",function(){return u}),a.d(t,"modals",function(){return h}),a.d(t,"noop",function(){return m}),a.d(t,"routes",function(){return f}),a.d(t,"saveTypes",function(){return g}),a.d(t,"searchArchived",function(){return E}),a.d(t,"sortRules",function(){return b}),a.d(t,"updateUrl",function(){return v}),a.d(t,"updateInterval",function(){return y});var n=a(6);a.d(t,"colors",function(){return n.colors}),a.d(t,"colorsDarkFont",function(){return n.colorsDarkFont});const i=a(163),s={ADD_TAG:"ADD_TAG",ADD_FILES:"ADD_FILES",ADD_NOTIFICATION:"ADD_NOTIFICATION",ADVANCED_TRANSITION_DONE:"ADVANCED_TRANSITION_DONE",APP_RESIZE:"APP_RESIZE",AUTH_NOT_LOGGED:"AUTH_NOT_LOGGED",AUTH_SET_USER:"AUTH_SET_USER",AUTH_SIGN_OUT:"AUTH_SIGN_OUT",AUTH_SET_FULL_USER_DATA:"AUTH_SET_FULL_USER_DATA",CHECK_UPDATE:"CHECK_UPDATE",CHECK_UPDATE_FAILED:"CHECK_UPDATE_FAILED",CHECK_UPDATE_NO_UPDATE:"CHECK_UPDATE_NO_UPDATE",CHECK_UPDATE_SUCCESS:"CHECK_UPDATE_SUCCESS",CLEAR_SEARCH:"CLEAR_SEARCH",CLOSE_CONTEXT_MENU:"CLOSE_CONTEXT_MENU",CLOSE_MODAL:"CLOSE_MODAL",CLOSE_PLAYER_IF_PAUSED:"CLOSE_PLAYER_IF_PAUSED",DISABLE_NEW_IMPORTS:"DISABLE_NEW_IMPORTS",DISPLAY_TAG_CONTEXT_MENU:"DISPLAY_TAG_CONTEXT_MENU",EDIT_FILE:"EDIT_FILE",NOTIFY_MISSING_FILE:"NOTIFY_MISSING_FILE",OPEN_MODAL:"OPEN_MODAL",PAUSE_PLAYER:"PAUSE_PLAYER",PLAY_FILE:"PLAY_FILE",RECORDER_FILE_ALREADY_EXISTS:"RECORDER_FILE_ALREADY_EXISTS",RECORDER_RESET:"RECORDER_RESET",RECORDER_SAVE_SUCCESS:"RECORDER_SAVE_SUCCESS",REMOVE_FILE:"REMOVE_FILE",REMOVE_NOTIFICATION:"REMOVE_NOTIFICATION",REMOVE_SEARCH_TAG:"REMOVE_SEARCH_TAG",REMOVE_TAG:"REMOVE_TAG",REPLACE_FILE:"REPLACE_FILE",SET_FILES:"SET_FILES",SET_MIGRATION_DATA:"SET_MIGRATION_DATA",SET_SEARCH:"SET_SEARCH",SEARCH_BASIC:"SEARCH_BASIC",SEARCH_BPM:"SEARCH_BPM",SEARCH_BPM_DELTA:"SEARCH_BPM_DELTA",SEARCH_TAG:"SEARCH_TAG",SET_ALLOW_FILE_DRAGGING:"SET_ALLOW_FILE_DRAGGING",SET_MISSING_FILES:"SET_MISSING_FILES",SET_MXML:"SET_MXML",SET_SEARCH_ARCHIVED:"SET_SEARCH_ARCHIVED",SET_SORT_RULE:"SET_SORT_RULE",TOGGLE_ADVANCED_SEARCH:"TOGGLE_ADVANCED_SEARCH",TOGGLE_PLAY:"TOGGLE_PLAY",TRANSFER_RESET:"TRANSFER_RESET",TRANSFER_SAVE_SUCCESS:"TRANSFER_SAVE_SUCCESS",TRANSFER_SET_FILE_LIST:"TRANSFER_SET_FILE_LIST",TRANSFER_START_TRANFER:"TRANSFER_START_TRANFER",UPDATE_AVAILABLE:"UPDATE_AVAILABLE"},r={app:"app",files:"files"},o="fish cannot carry guns",l="hello@songriffer.com",c="https://songriffer.com",p="https://www.facebook.com/songrifferapp",d="https://www.instagram.com/songrifferapp",u="http://m.me/songrifferapp",h={comment:"comment",fileMissing:"fileMissing",fileOptions:"fileOptions",forbiddenAction:"forbiddenAction",invalidFile:"invalidFile",publicLink:"publicLink",removeFile:"removeFile",tabs:"tabs",tags:"tags",text:"text",updateAvailable:"updateAvailable"},m=()=>{},f={account:"/account",home:"/",project:"/project/:projectId",projects:"/projects",recorder:"/recorder",stats:"/stats",transfer:"/transfer"},g={RECORDER:"RECORDER",TRANSFER:"TRANSFER"},E={ALL:"ALL",ARCHIVED:"ARCHIVED",NON_ARCHIVED:"NON_ARCHIVED"},b={BPM_ASC:"BPM_ASC",BPM_DESC:"BPM_DESC",DURATION_ASC:"DURATION_ASC",DURATION_DESC:"DURATION_DESC",NAME_ASC:"NAME_ASC",NAME_DESC:"NAME_DESC",RATING_ASC:"RATING_ASC",RATING_DESC:"RATING_DESC"},v={darwin:"https://songriffer.com/update-mac.json",win32:"https://songriffer.com/update-win.json"},y=18e5},31:function(e,t){e.exports=e=>{try{const t=`${e} - wrapper version: *v${window.__songRiffer.version}* - app version: *1.15.0* - ${window.__songRiffer.platform}`;0,fetch(atob("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVFJZREY3TkJaL0JTQUw4NTFWNC9xbm1TMXVnYUJiTU80aVkwREtabndFa0U="),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t,type:"mrkdwn"})})}catch(e){}}},32:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(3);const r={margin:"auto",background:"none",display:"block"};t.a=({size:e=100})=>i.a.createElement("svg",{style:r,width:`${e}px`,height:`${e}px`,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},i.a.createElement("circle",{cx:"50",cy:"50",fill:"none",stroke:s.colors.blueLight,strokeWidth:"3",r:"29",strokeDasharray:"136.659280431156 47.553093477052",transform:"rotate(194.885 50 50)"},i.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1.1235955056179776s",values:"0 50 50;360 50 50",keyTimes:"0;1"})))},39:function(e,t,a){const n=a(0),i=a(4).default,s=a(12),r={xs:5,s:15,md:25},o=i.div`
    margin-top: ${e=>r[e.size]}px;
    margin-bottom: ${e=>r[e.size]}px;
`,l=({children:e,size:t="md"})=>n.createElement(o,{size:t},e);l.propTypes={children:s.node,size:s.oneOf(["md","s","xs"])},e.exports=l},41:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return r});var n=a(10),i=a(132),s=a(18);class r extends s.a{constructor(t){var a,r,o;super(),o=void 0,(r="hashPath")in(a=this)?Object.defineProperty(a,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[r]=o,this.name=t.name,this.path=t.path,this.size=t.size||0,this.type=t.type,this.added=t.added||+new Date,this.archived=t.archived||!1,this.bpm=t.bpm||null,this.comment=t.comment||"",this.deviceSource=t.deviceSource||e.__songRiffer.platform,this.duration=t.duration||null,this.newImport=!0===t.newImport,this.public=!!t.public,this.publicId=t.publicId||null,this.rating=isNaN(parseInt(t.rating,10))?null:parseInt(t.rating,10),this._sortRating=null===this.rating?-1:this.rating,this.source=t.source||s.b.IMPORT,this.tags=t.tags||{},this._tagsArray=Object.keys(this.tags),this.timeSignature=t.timeSignature||"4/4",this.safePath=this.path.replace(/[\/\s\?\.\(\)\[\]:]/g,"_"),this.escapedPath=Object(i.a)(this.path),this.hashPath=Object(n.getFilePathHash)(this.path),this.uploaded=t.uploaded||!1,this.uploadName=t.uploadName||null}getTags(){return this._tagsArray}getRatingForSort(){return this._sortRating}hasComment(){return!!this.comment.length}isGuitarPro7(){return".gp"===Object(n.extname)(this.path)}toJSON(){return{added:this.added,archived:this.archived,bpm:this.bpm,comment:this.comment,deviceSource:this.deviceSource,duration:this.duration,escapedPath:this.escapedPath,name:this.name,newImport:!1,path:this.path,public:this.public,publicId:this.publicId,rating:this.rating,size:this.size,source:this.source,tags:this.tags,timeSignature:this.timeSignature,type:this.type,uploaded:this.uploaded,uploadName:this.uploadName}}}}).call(this,a(15))},45:function(e,t,a){const n=a(181),i=a(0),s=a(55),{openModal:r}=a(23),{openLink:o}=a(20),l=a(13),c=a(3);e.exports.checkUpdate=(e=!1)=>t=>{t({type:c.actionTypes.CHECK_UPDATE,manual:e});const a=c.updateUrl[window.__songRiffer.platform],l=new Headers;l.append("pragma","no-cache"),l.append("cache-control","no-cache"),fetch(a,{method:"GET",headers:l}).then(e=>e.json()).then(a=>{if(a.version&&n.gt(a.version,window.__songRiffer.version)){const n=6048e5,i=+new Date;if(a.mandatory||a.date+n<i)return void t(d(a.url,a.changelog));t(e?p(a.url,a.changelog):{type:c.actionTypes.UPDATE_AVAILABLE,changelog:a.changelog,url:a.url})}else e&&(t({type:c.actionTypes.CHECK_UPDATE_NO_UPDATE}),t(r(c.modals.text,{title:"No update available",message:i.createElement("div",null,i.createElement("div",null,"Thanks for using SongRiffer!"),i.createElement("div",null,"We hope you're enjoying it and find it helpful."))})))}).catch(n=>{t({type:c.actionTypes.CHECK_UPDATE_FAILED}),e?t(r(c.modals.text,{title:"An error occured",message:i.createElement("div",null,i.createElement("div",null,"Sorry but we were not able to check if a new version is available."),i.createElement("div",null,"Please visit"," ",i.createElement(s,{onClick:()=>o(c.landingUrl)},c.landingUrl)," to manually check."))})):console.warn("Update endpoint failed, ignoring",a)})};const p=(e,t={})=>a=>{a({type:c.actionTypes.CHECK_UPDATE_SUCCESS}),a(r(c.modals.updateAvailable,{changelog:t,url:e}))};e.exports.displayUpdateAvailableModal=p,e.exports.resize=e=>({type:c.actionTypes.APP_RESIZE,width:e}),e.exports.displayTagContextMenu=(e,t,a,n)=>({type:c.actionTypes.DISPLAY_TAG_CONTEXT_MENU,positionX:a,positionY:n,props:{fileHashPath:e,tag:t}}),e.exports.closeContextMenu=()=>({type:c.actionTypes.CLOSE_CONTEXT_MENU});const d=(e,t)=>(l.trackEvent("app","mandatory-updte",window.__songRiffer.version),r(c.modals.updateAvailable,{changelog:t,mandatory:!0,url:e}));e.exports.setAllowFileDragging=e=>({type:c.actionTypes.SET_ALLOW_FILE_DRAGGING,allowFileDragging:e})},51:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return o});var n=a(0),i=a.n(n);let s;!function(e){e.OPEN_FILE="OPEN_FILE",e.UPLOAD_FILE="UPLOAD_FILE"}(s||(s={}));const r={[s.OPEN_FILE]:"You cannot read this file",[s.UPLOAD_FILE]:"You cannot upload this file"},o=({type:e})=>i.a.createElement("div",null,i.a.createElement("div",null,r[e]),i.a.createElement("div",null,"It seems you've reached the maximum storage space with your current plan."),i.a.createElement("div",null,"Please upgrade to another plan or remove some files."))},52:function(e,t,a){"use strict";var n=a(4),i=a(6);const s=a(54),r=Object(n.default)(s)`
    width: 100%;
    min-width: 420px;
    padding: 5px 7px;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid ${i.colors._white};
    transition: border ease 0.1s;
    color: ${i.colors._white};

    :focus {
        border-bottom: 1px solid ${i.colors.blueLight};
        color: ${i.colors.blueLight};
    }
`;t.a=r},53:function(e,t,a){const n=a(4).default,{colors:i}=a(3),s=n.button`
    outline: none;
    background: ${i._blue};
    color: ${i._white};
    font-family: inherit;
    font-size: 16px;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    transition: background ease 0.1s;

    :hover {
        background: ${i.purple};
    }
`;e.exports=s},54:function(e,t,a){const n=a(4).default,{colors:i}=a(3),s=n.input`
    display: inline-block;
    width: ${e=>e.isFullWidth?"100%":"auto"};
    padding: 3px 5px;
    margin-right: 3px;
    border-radius: 7px;
    background: transparent;
    border: 2px solid ${i._white};
    outline: none;
    color: ${i._white};
    font-size: 16px;

    &::placeholder {
        color: ${i._white};
        opacity: 0.4;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        margin: 0;
        appearance: none;
    }
`;e.exports=s},55:function(e,t,a){const n=a(4).default,{colors:i}=a(3);e.exports=n.a`
    color: ${i._white};
    text-decoration: underline;
    cursor: pointer;
`},58:function(e,t,a){"use strict";a.r(t),a.d(t,"playFile",function(){return i}),a.d(t,"togglePlay",function(){return s}),a.d(t,"pausePlayer",function(){return r});var n=a(3);const i=e=>({type:n.actionTypes.PLAY_FILE,hashPath:e}),s=()=>({type:n.actionTypes.TOGGLE_PLAY}),r=(e=!1)=>({type:n.actionTypes.PAUSE_PLAYER,unsetSelectedFile:!0})},59:function(e,t,a){"use strict";a.r(t),a.d(t,"getFilesDurationAndBPM",function(){return u}),a.d(t,"importFiles",function(){return m});var n=a(10),i=a(60),s=a(41);const{analyze:r}=a(232),{openModal:o}=a(23),{editFile:l}=a(19),c=a(13),{modals:p}=a(3),d=new AudioContext,u=(e,t,a=0)=>{const i=t[a];i&&fetch(i.escapedPath||i.path).then(e=>e.arrayBuffer()).then(s=>{d.decodeAudioData(s,async s=>{const r=await h(s),o=parseInt(s.duration,10);(r&&!i.bpm||o&&!i.duration)&&e(l(Object(n.getFilePathHash)(i.path),{duration:o,bpm:r},!0)),u(e,t,a+1)},n=>{u(e,t,a+1)})})},h=e=>new Promise(t=>{r(e).then(e=>{t(parseInt(e,10))}).catch(()=>{t(!1)})}),m=(e,t,a,r=!1)=>{const l=t.reduce((t,a)=>{if(a.isDirectory)return alert("no directory support for now"),t;if(!(e=>{if(e.type.includes("audio"))return!0;const t=Object(n.extname)(e.name).toLowerCase().replace(".","");return!!i.VALID_EXTENSIONS.includes(t)})(a))return e(o(p.invalidFile,{file:a})),t;const r=new s.a(a);return t[Object(n.getFilePathHash)(r.path)]=r.toJSON(),t},{});if(a(l),r)return;const d=Object.values(l);if(d.length){c.trackEvent("file","file-import","import",d.length);try{d.forEach(e=>{c.trackEvent("file","file-name",e.name.replace(Object(n.extname)(e.name),""))})}catch(e){}u(e,d)}}},61:function(e,t,a){"use strict";a.r(t),a.d(t,"signIn",function(){return r}),a.d(t,"setFullUserData",function(){return o}),a.d(t,"signOut",function(){return l}),a.d(t,"notLogged",function(){return c});var n=a(8);const i=a(3),s=a(31),r=e=>(s(`User sign in - ${e.email}`),{type:i.actionTypes.AUTH_SET_USER,user:e}),o=e=>({type:i.actionTypes.AUTH_SET_FULL_USER_DATA,data:e}),l=()=>(n.a.signOut(),{type:i.actionTypes.AUTH_SIGN_OUT}),c=()=>({type:i.actionTypes.AUTH_NOT_LOGGED})},62:function(e,t,a){const n=a(0),i=a(4).default,s=i.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`,r=i.div`
    padding-right: 15px;
    flex: 1;
    overflow-y: auto;
    scroll-behavior: smooth;
    ${e=>e.s}
`;e.exports=({children:e,scrollElementRef:t=null,stickyHeader:a=null,wrapperStyle:i=""})=>n.createElement(s,null,a,n.createElement(r,{s:i,ref:t},e))},73:function(e,t,a){"use strict";var n=a(0),i=a.n(n);const s=a(4).default.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;t.a=({children:e})=>i.a.createElement(s,null,e)},76:function(e,t,a){const n={};e.exports=function(e,t,a,i){if(!Array.isArray(e))throw new Error("Expected sources to be an array.");if("function"!=typeof t)throw new Error("Expected the outputFunc to be a function.");if(!a)throw new Error("Missing selectorName argument.");let s=null;return(r,o,l,c)=>{const p=i||c;l&&(l=`@${a}_${l}`);const d=l?n[l]:s;let u=!!d;if(d&&!o&&d.previousState===r)return d.result;const h=e.map((e,t)=>{const a=e(r,o,e.__forwardMemoizationKey?l:void 0);return u&&(u=d.sourcesValues[t]===a),a});if(u)return p&&console.log(`%cSame result ${a}`,"color: green"),d.result;{const e=t(...h),i={sourcesValues:h,result:e,previousState:r};return l?n[l]=i:s=i,p&&console.log(`%cNew result ${a}`,"color: red"),e}}}},78:function(e,t,a){function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const i=a(0),s=a(12),r=a(4).default,{colors:o,noop:l}=a(3),c=a(54),p=r.div`
    display: ${e=>e.isFullWidth?"block":"inline-block"};
    position: relative;
`,d=r.div`
    position: absolute;
    width: calc(100% - 5px);
    height: 100%;
    padding: 3px 5px;
    border-radius: 10px;
    top: 0;
    left: 1px;
    color: ${o._white};
    pointer-events: none;
    font-size: 16px;
    opacity: 0.4;
    overflow: hidden;
    ${e=>e.additionalStyle}
`,u=r.span`
    color: transparent;
`;class h extends i.PureComponent{constructor(...e){super(...e),n(this,"inputRef",i.createRef()),n(this,"onFocus",()=>{this.props.onFocus(this.inputRef)})}componentDidMount(){this.props.autoFocus&&this.inputRef.current.focus()}render(){const{autocomplete:e,autocompleteStyle:t,autoFocus:a,isFullWidth:n,onBlur:s,onChange:r,onKeyDown:o,style:l,tabIndex:h,type:m,value:f}=this.props,g=e?f.length:0;return i.createElement(p,{isFullWidth:!0},i.createElement(c,{isFullWidth:n,type:m,name:"tag-input",onFocus:this.onFocus,onBlur:s,onChange:r,onKeyDown:o,value:f,ref:this.inputRef,tabIndex:h,style:l,min:1}),i.createElement(d,{additionalStyle:t},i.createElement(u,null,f),e?`${"".repeat(g)}${e.slice(g,e.length)}`:null))}}n(h,"propTypes",{autocomplete:s.string,autocompleteStyle:s.string,autoFocus:s.bool,isFullWidth:s.bool,onBlur:s.func,onChange:s.func,onContextMenu:s.func,onFocus:s.func,onKeyDown:s.func,style:s.object,tabIndex:s.any,type:s.string,value:s.oneOfType([s.string,s.number])}),n(h,"defaultProps",{autocompleteStyle:"",onFocus:l,type:"text"}),e.exports=h},79:function(e,t,a){"use strict";a.r(t),a.d(t,"addNotification",function(){return i}),a.d(t,"removeNotification",function(){return s}),a.d(t,"notifyMissingFile",function(){return r});var n=a(3);const i=(e,t,a="success")=>({type:n.actionTypes.ADD_NOTIFICATION,notification:{title:e,message:t,status:a}}),s=()=>({type:n.actionTypes.REMOVE_NOTIFICATION}),r=e=>({type:n.actionTypes.NOTIFY_MISSING_FILE,file:e})},8:function(e,t,a){"use strict";var n=a(22),i=a.n(n),s=(a(170),a(172),a(174),a(234),a(177),a(24)),r=a.n(s),o=a(30),l=a(10),c=a(60);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const d=a(13),u=a(31);var h;!function(e){e.libraries="libraries",e.projects="projects",e.stats="stats",e.users="users"}(h||(h={}));console.info("%c[SongRiffer] %cUsing prod firebase project","color: blue","color: black");const m=a(180);t.a=new class{constructor(e){p(this,"firebase",void 0),p(this,"auth",void 0),p(this,"db",void 0),p(this,"storage",void 0),p(this,"sendResetPasswordEmail",e=>(d.trackEvent("auth","password-reset"),this.auth.sendPasswordResetEmail(e))),p(this,"getFullUserRetry",(e,t)=>{this.db.collection(h.users).doc(e).get().then(a=>{const n=a.data();return n?t(n):setTimeout(()=>{console.log("### Error getting full user, retrying"),this.getFullUserRetry(e,t)},300)})}),this.firebase=i.a.initializeApp(e),this.auth=this.firebase.auth(),this.db=this.firebase.firestore(),this.storage=this.firebase.storage(),i.a.performance()}onAuthChange(e){this.auth.onAuthStateChanged(e)}signUpWithEmailPassword(e,t){return new Promise((a,n)=>{d.trackEvent("auth","sign-up"),this.auth.createUserWithEmailAndPassword(e,t).then(e=>{e.user.sendEmailVerification(),a(e)}).catch(t=>{console.error("########### Error with sign up",t),d.exception(`Error in sign up ${t.message}`),u(`*Error* in sign up ${t.message} - email: ${e}`),n(t.message)})})}signInWithEmailPassword(e,t){return new Promise((a,n)=>{d.trackEvent("auth","sign-in"),this.auth.signInWithEmailAndPassword(e,t).then(a).catch(t=>{console.error("########### Error with sign in",t),d.exception(`Error in sign in ${t.message}`),u(`*Error* in sign in ${t.message} - email: ${e}`),n(t)})})}signOut(){d.trackEvent("auth","sign-out"),this.auth.signOut()}getFullUser(e){return new Promise(t=>{this.getFullUserRetry(e,e=>{t(this.formatFullUser(e))})})}formatFullUser(e){return{...e,createdAt:e.createdAt.toDate(),updatedAt:e.updatedAt?e.updatedAt.toDate():null}}listenForFullUserUpdate(e,t){return new Promise(a=>{this.getFullUserRetry(e,n=>{const i=this.db.collection(h.users).doc(e).onSnapshot(e=>{try{const a=e.data();t(this.formatFullUser(a))}catch(e){t({})}});a(i)})})}updateFile(e,t,a){return this.db.collection(h.libraries).doc(e.uid).set({files:{[t]:a}},{merge:!0})}saveFullFilesData(e,t,a=!0){return this.db.collection(h.libraries).doc(e).set({files:t},{merge:a}).then(()=>{console.log("Files data saved to cloud")}).catch(t=>{d.exception(`Error saving files data to cloud ${t}`),u(`*Error* error saving files data to cloud - ${e} - ${t}`),console.error("Error saving files data to cloud"),console.log(t)})}listenForFilesUpdate(e,t){return this.db.collection(h.libraries).doc(e).onSnapshot(a=>{try{const n=r()(a.data(),"files",{}),i="string"==typeof n?JSON.parse(n):n;t(i)}catch(n){d.exception(`Error reading files ${n.toString()}`),u(`*Error* reading files for ${e} - ${n.toString()} - raw data: \n ${JSON.stringify(a.data())}`),t({})}})}saveUserStats(e){i.a.functions().httpsCallable("saveUserStats")({stats:{files:{},tags:{},...e}}).then(e=>{console.log("stats data saved to cloud")}).catch(e=>{console.error("Error saving stats data to cloud"),console.log(e)})}getUserStats(e){return new Promise((t,a)=>{this.db.collection(h.stats).doc(e).get().then(e=>{const n=e.data();n?t(n):a()})})}callCallback(e,t,a={}){"function"==typeof e[t]&&e[t](a)}createAudioFileStoragePath(e,t){return`users/${e.uid}/audio/${t}`}getAudioFileStoragePath(e,t){return`users/${e.uid}/audio/${Object(l.getUploadFileName)(t)}`}uploadFile(e,t,a,n={}){if(!Object(o.canUpload)(e))return void console.error("User has invalid cloud level");const s=Object(l.createUploadFileName)(t.name),r=Object(l.extname)(s).toLowerCase().replace(".","");if(!c.VALID_UPLOAD_EXTENSIONS.includes(r))return console.error("Cannot upload file with extension",r),void this.callCallback(n,"onError",{error:"UNAUTHORIZED_EXTENSION"});const p=this.storage.ref(),d=this.createAudioFileStoragePath(e,s);var h={customMetadata:{userUid:e.uid}};const m=p.child(d).put(a,h);console.log("# starting upload for file",d),m.on(i.a.storage.TaskEvent.STATE_CHANGED,e=>{const t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),this.callCallback(n,"onProgress",t),e.state){case i.a.storage.TaskState.PAUSED:console.log("Upload is paused"),this.callCallback(n,"onPause");break;case i.a.storage.TaskState.RUNNING:console.log("Upload is running"),this.callCallback(n,"onRunning")}},t=>{switch(u(`*Error* uploading file for ${e.uid} - error code: ${t.code}`),t.code){case"storage/unauthorized":this.callCallback(n,"onError",{error:"UNAUTHORIZED"});break;case"storage/canceled":console.error("## error upload: canceled"),this.callCallback(n,"onError",{error:"CANCELED"});break;case"storage/unknown":console.error("#error upload, unknown error",t.serverResponse),this.callCallback(n,"onError",{error:"UNKNOWN"})}},()=>{console.log("Success upload"),this.callCallback(n,"onSuccess",{uploadName:s}),u(`Upload success - ${e.uid}`)})}getFileDownloadUrl(e,t){return new Promise(a=>{const n=this.getAudioFileStoragePath(e,t);this.storage.ref(n).getDownloadURL().then(a).catch(e=>{u(`*Error* cannot get file download url ${e.message}`)})})}deleteFile(e,t){const a=this.storage.ref(),n=this.getAudioFileStoragePath(e,t);return a.child(n).delete()}getUserStorageSize(e){return new Promise((t,a)=>{this.storage.ref().child(`users/${e}/audio`).listAll().then(async e=>{let a=0;for(const t of e.items)a+=(await t.getMetadata()).size;t(a)}).catch(e=>{u(`*Error* cannot get user storage size ${e.message}`),a(e)})})}createFilePublicId(e){return i.a.functions().httpsCallable("createFilePublicId")({fileHashPath:e})}deleteFilePublicId(e){return i.a.functions().httpsCallable("deleteFilePublicId")({fileHashPath:e})}formatProject(e,t){return{id:e,...t,createdAt:t.createdAt?t.createdAt.toDate():new Date,updatedAt:t.updatedAt?t.updatedAt.toDate():new Date}}listenForProjectsUpdate(e,t){const a=this.db.collection(h.users).doc(e);return this.db.collection(h.projects).where("creator","==",a).onSnapshot(e=>{const a=[];e.forEach(e=>{const t=e.data();a.push(this.formatProject(e.id,t))}),t(a)})}createProject(e,t,a){const n=this.db.collection(h.users).doc(e);return new Promise((e,s)=>{this.db.collection(h.projects).add({band:a,creator:n,createdAt:i.a.firestore.FieldValue.serverTimestamp(),files:[],name:t,songs:[],updatedAt:i.a.firestore.FieldValue.serverTimestamp()}).then(a=>{u(`Project created - ${t}`),e(a.id)}).catch(e=>{u(`*Error* Cannot create project - ${e.message}`),s()})})}listenForProjectUpdate(e,t){return this.db.collection(h.projects).doc(e).onSnapshot(e=>{const a=e.data();t(this.formatProject(e.id,a))})}updateProject(e,t){return this.db.collection(h.projects).doc(e).update({...t,updatedAt:i.a.firestore.FieldValue.serverTimestamp()})}addSongToProject(e,t){return this.updateProject(e,{songs:i.a.firestore.FieldValue.arrayUnion(t)})}addFilesToProject(e,t){return this.updateProject(e,{files:i.a.firestore.FieldValue.arrayUnion(...t)})}}(m)}},[[233,3,5]]]);