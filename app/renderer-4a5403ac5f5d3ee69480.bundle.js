(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(e,t,a){"use strict";var n=a(24),i=a.n(n),o=(a(183),a(185),a(187),a(243),a(190),a(27)),s=a.n(o),r=a(33),l=a(12),c=a(70);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const p=a(14),u=a(36);var h;!function(e){e.libraries="libraries",e.projects="projects",e.stats="stats",e.users="users"}(h||(h={}));console.info("%c[SongRiffer] %cUsing prod firebase project","color: blue","color: black");const m=a(193);t.a=new class{constructor(e){d(this,"firebase",void 0),d(this,"auth",void 0),d(this,"db",void 0),d(this,"storage",void 0),d(this,"sendResetPasswordEmail",e=>(p.trackEvent("auth","password-reset"),this.auth.sendPasswordResetEmail(e))),d(this,"getFullUserRetry",(e,t)=>{this.db.collection(h.users).doc(e).get().then(a=>{const n=a.data();return n?t(n):setTimeout(()=>{console.log("### Error getting full user, retrying"),this.getFullUserRetry(e,t)},300)})}),this.firebase=i.a.initializeApp(e),this.auth=this.firebase.auth(),this.db=this.firebase.firestore(),this.storage=this.firebase.storage(),i.a.performance()}onAuthChange(e){this.auth.onAuthStateChanged(e)}signUpWithEmailPassword(e,t){return new Promise((a,n)=>{p.trackEvent("auth","sign-up"),this.auth.createUserWithEmailAndPassword(e,t).then(e=>{e.user.sendEmailVerification(),a(e)}).catch(t=>{console.error("########### Error with sign up",t),p.exception(`Error in sign up ${t.message}`),u(`*Error* in sign up ${t.message} - email: ${e}`),n(t.message)})})}signInWithEmailPassword(e,t){return new Promise((a,n)=>{p.trackEvent("auth","sign-in"),this.auth.signInWithEmailAndPassword(e,t).then(a).catch(t=>{console.error("########### Error with sign in",t),p.exception(`Error in sign in ${t.message}`),u(`*Error* in sign in ${t.message} - email: ${e}`),n(t)})})}signOut(){p.trackEvent("auth","sign-out"),this.auth.signOut()}getFullUser(e){return new Promise(t=>{this.getFullUserRetry(e,e=>{t(this.formatFullUser(e))})})}formatFullUser(e){return{...e,createdAt:e.createdAt.toDate(),updatedAt:e.updatedAt?e.updatedAt.toDate():null}}listenForFullUserUpdate(e,t){return new Promise(a=>{this.getFullUserRetry(e,n=>{const i=this.db.collection(h.users).doc(e).onSnapshot(e=>{try{const a=e.data();t(this.formatFullUser(a))}catch(e){t({})}});a(i)})})}updateFile(e,t,a){return this.db.collection(h.libraries).doc(e.uid).set({files:{[t]:a}},{merge:!0})}saveFullFilesData(e,t,a=!0){return this.db.collection(h.libraries).doc(e).set({files:t},{merge:a}).then(()=>{console.log("Files data saved to cloud")}).catch(t=>{p.exception(`Error saving files data to cloud ${t}`),u(`*Error* error saving files data to cloud - ${e} - ${t}`),console.error("Error saving files data to cloud"),console.log(t)})}listenForFilesUpdate(e,t){return this.db.collection(h.libraries).doc(e).onSnapshot(a=>{try{const n=s()(a.data(),"files",{}),i="string"==typeof n?JSON.parse(n):n;t(i)}catch(n){p.exception(`Error reading files ${n.toString()}`),u(`*Error* reading files for ${e} - ${n.toString()} - raw data: \n ${JSON.stringify(a.data())}`),t({})}})}saveUserStats(e){i.a.functions().httpsCallable("saveUserStats")({stats:{files:{},tags:{},...e}}).then(e=>{console.log("stats data saved to cloud")}).catch(e=>{console.error("Error saving stats data to cloud"),console.log(e)})}getUserStats(e){return new Promise((t,a)=>{this.db.collection(h.stats).doc(e).get().then(e=>{const n=e.data();n?t(n):a()})})}callCallback(e,t,a={}){"function"==typeof e[t]&&e[t](a)}createAudioFileStoragePath(e,t){return`users/${e.uid}/audio/${t}`}getAudioFileStoragePath(e,t){return`users/${e.uid}/audio/${Object(l.getUploadFileName)(t)}`}uploadFile(e,t,a,n={}){if(!Object(r.canUpload)(e))return void console.error("User has invalid cloud level");const o=Object(l.createUploadFileName)(t.name),s=Object(l.extname)(o).toLowerCase().replace(".","");if(!c.VALID_UPLOAD_EXTENSIONS.includes(s))return console.error("Cannot upload file with extension",s),void this.callCallback(n,"onError",{error:"UNAUTHORIZED_EXTENSION"});const d=this.storage.ref(),p=this.createAudioFileStoragePath(e,o);var h={customMetadata:{userUid:e.uid}};const m=d.child(p).put(a,h);console.log("# starting upload for file",p),m.on(i.a.storage.TaskEvent.STATE_CHANGED,e=>{const t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),this.callCallback(n,"onProgress",t),e.state){case i.a.storage.TaskState.PAUSED:console.log("Upload is paused"),this.callCallback(n,"onPause");break;case i.a.storage.TaskState.RUNNING:console.log("Upload is running"),this.callCallback(n,"onRunning")}},t=>{switch(u(`*Error* uploading file for ${e.uid} - error code: ${t.code}`),t.code){case"storage/unauthorized":this.callCallback(n,"onError",{error:"UNAUTHORIZED"});break;case"storage/canceled":console.error("## error upload: canceled"),this.callCallback(n,"onError",{error:"CANCELED"});break;case"storage/unknown":console.error("#error upload, unknown error",t.serverResponse),this.callCallback(n,"onError",{error:"UNKNOWN"})}},()=>{console.log("Success upload"),this.callCallback(n,"onSuccess",{uploadName:o}),u(`Upload success - ${e.uid}`)})}getFileDownloadUrl(e,t){return new Promise(a=>{const n=this.getAudioFileStoragePath(e,t);this.storage.ref(n).getDownloadURL().then(a).catch(e=>{u(`*Error* cannot get file download url ${e.message}`)})})}deleteFile(e,t){const a=this.storage.ref(),n=this.getAudioFileStoragePath(e,t);return a.child(n).delete()}getUserStorageSize(e){return new Promise((t,a)=>{this.storage.ref().child(`users/${e}/audio`).listAll().then(async e=>{let a=0;for(const t of e.items)a+=(await t.getMetadata()).size;t(a)}).catch(e=>{u(`*Error* cannot get user storage size ${e.message}`),a(e)})})}createFilePublicId(e){return i.a.functions().httpsCallable("createFilePublicId")({fileHashPath:e})}deleteFilePublicId(e){return i.a.functions().httpsCallable("deleteFilePublicId")({fileHashPath:e})}formatProject(e,t){return{id:e,...t,createdAt:t.createdAt?t.createdAt.toDate():new Date,updatedAt:t.updatedAt?t.updatedAt.toDate():new Date}}listenForProjectsUpdate(e,t){const a=this.db.collection(h.users).doc(e);return this.db.collection(h.projects).where("creator","==",a).onSnapshot(e=>{const a=[];e.forEach(e=>{const t=e.data();a.push(this.formatProject(e.id,t))}),t(a)})}createProject(e,t,a){const n=this.db.collection(h.users).doc(e);return new Promise((e,o)=>{this.db.collection(h.projects).add({band:a,creator:n,createdAt:i.a.firestore.FieldValue.serverTimestamp(),files:[],name:t,songs:[],updatedAt:i.a.firestore.FieldValue.serverTimestamp()}).then(a=>{u(`Project created - ${t}`),e(a.id)}).catch(e=>{u(`*Error* Cannot create project - ${e.message}`),o()})})}listenForProjectUpdate(e,t){return this.db.collection(h.projects).doc(e).onSnapshot(e=>{const a=e.data();t(this.formatProject(e.id,a))})}updateProject(e,t){return this.db.collection(h.projects).doc(e).update({...t,updatedAt:i.a.firestore.FieldValue.serverTimestamp()})}addSongToProject(e,t){return this.updateProject(e,{songs:i.a.firestore.FieldValue.arrayUnion(t)})}addFilesToProject(e,t){return this.updateProject(e,{files:i.a.firestore.FieldValue.arrayUnion(...t)})}}(m)},124:function(e,t,a){"use strict";a.r(t),a.d(t,"formatFileSize",function(){return i}),a.d(t,"pluralize",function(){return o});const n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=e=>{const t=Math.floor(Math.log(e)/Math.log(1024));return e?(e/Math.pow(1024,t)).toFixed(2)+" "+n[t]:"0 Bytes"},o=(e,t)=>`${e}${1===t?"":"s"}`},126:function(e,t,a){const n=a(14),i=!1;e.exports=new class{constructor(){var e,t,a;a={},(t="eventsRunning")in(e=this)?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}start(e){this.eventsRunning[e]=+new Date}end(e){if(!this.eventsRunning[e])return void(i&&console.warn(`[RUM] Event ${e} not started`));const t=+new Date-this.eventsRunning[e];delete this.eventsRunning[e],n.trackTiming("rum",e,t),i&&console.log(`[RUM] Event ${e} ran in ${t}ms`)}}},127:function(e,t,a){const n=a(0),i=a(4).default,{colors:o}=a(3),s=i.svg`
    fill: ${e=>e.color};
`;e.exports=({color:e=o.green,width:t})=>n.createElement(s,{viewBox:"0 0 16 16",width:t,color:e},n.createElement("polygon",{stroke:"none",fillRule:"evenodd",points:"2.6 7.4 1 9.2 5.3 14 15 3.8 13.3 2 5.3 10.4"}))},14:function(e,t){const a=window.__songRiffer.tracking;e.exports=a},141:function(e,t,a){"use strict";a.r(t),a.d(t,"recorderFileAlreadyExists",function(){return i}),a.d(t,"reset",function(){return o}),a.d(t,"recorderSaveSuccess",function(){return s});var n=a(3);const i=e=>({type:n.actionTypes.RECORDER_FILE_ALREADY_EXISTS,fileName:e}),o=()=>({type:n.actionTypes.RECORDER_RESET}),s=e=>({type:n.actionTypes.RECORDER_SAVE_SUCCESS,filePath:e})},148:function(e,t,a){"use strict";a.d(t,"a",function(){return n});const n=e=>e.replace(/[\?#]/g,escape)},16:function(e,t,a){"use strict";a.r(t),a.d(t,"selectFiles",function(){return u}),a.d(t,"_selectFiles",function(){return c}),a.d(t,"selectSortRule",function(){return p}),a.d(t,"selectFilesCount",function(){return h}),a.d(t,"selectSelectedFile",function(){return m}),a.d(t,"selectFileByHashPath",function(){return g}),a.d(t,"selectTags",function(){return f}),a.d(t,"selectFilesForStorage",function(){return E});var n=a(12),i=a(147),o=a(23),s=a(51),r=a(3);const l=a(91),c=e=>e.files.files,d=l([e=>e],e=>new s.a(e),"selectFile"),p=l([e=>e.files],e=>e.sortRule,"selectSortRule"),u=l([c,o.a,p],(e,t,a)=>{if(!e)return[];return((e,t)=>e.sort((e,a)=>{switch(t){case r.sortRules.BPM_ASC:return e.bpm-a.bpm;case r.sortRules.BPM_DESC:return a.bpm-e.bpm;case r.sortRules.DURATION_ASC:return e.duration-a.duration;case r.sortRules.DURATION_DESC:return a.duration-e.duration;case r.sortRules.NAME_ASC:return e.name.toLowerCase().localeCompare(a.name.toLowerCase());case r.sortRules.NAME_DESC:return a.name.toLowerCase().localeCompare(e.name.toLowerCase());case r.sortRules.RATING_ASC:return e.getRatingForSort()-a.getRatingForSort();case r.sortRules.RATING_DESC:return a.getRatingForSort()-e.getRatingForSort();default:return a.added-e.added}}))(Object.keys(e).reduce((a,n)=>{const o=d(e[n],null,`file_${n}`);return Object(i.matchSearch)(o,t)&&a.push(o),a},[]),a)},"selectFiles"),h=l([c,o.a],(e,t)=>t.archived===r.searchArchived.ALL?Object.keys(e).length:Object.values(e).filter(e=>!e.archived).length,"selectFilesCount"),m=l([e=>e,e=>e.files.selectedFile],(e,t)=>g(e,{fileHashPath:t}),"selectSelectedFile"),g=l([(e,t)=>t.fileHashPath,c],(e,t)=>{if(!e)return null;let a;return t[e]&&(a=t[e]),a||(a=Object.values(t).find(t=>Object(n.getFilePathHash)(t.path)===e)),a?d(a,null,`file_${e}`):null},"selectFileByHashPath"),f=l([c],e=>{const t=Object.values(e).reduce((e,t)=>(Object.keys(t.tags).forEach(t=>{e[t.toLowerCase()]=!0}),e),{});return Object.keys(t).sort()},"selectTags"),E=l([c],e=>{const t={};for(let a in e)t[a]=d(e[a],null,`file_${a}`).toJSON();return t},"selectFilesForStorage")},176:function(e,t,a){const n=a(116),i=a(177),o=n.join(i.homedir(),"SongRiffer/Recorder");e.exports={backgroundColor:"#121212",events:{CHECK_FILE_EXISTS:"CHECK_FILE_EXISTS",CHECK_FILES:"CHECK_FILES",CHECK_FILES_DB_EXISTS:"CHECK_FILES_DB_EXISTS",CHECK_FILES_DB:"CHECK_FILES_DB",CLEAR_DB:"CLEAR_DB",DATA_FETCHED:"DATA_FETCHED",FETCH_DATA:"FETCH_DATA",FILE_ALREADY_EXISTS:"FILE_ALREADY_EXISTS",FILE_SAVE_SUCCESS:"FILE_SAVE_SUCCESS",FILE_SYSTEM_ERROR:"FILE_SYSTEM_ERROR",GET_MXLM:"GET_MXLM",GET_MXLM_SUCCESS:"GET_MXLM_SUCCESS",MISSING_FILES:"MISSING_FILES",OPEN_DEEPLINK:"OPEN_DEEPLINK",RELOAD:"RELOAD",SAVE_DATA:"SAVE_DATA",SAVE_MEDIA:"SAVE_MEDIA",TOGGLE_DEVTOOLS:"TOGGLE_DEVTOOLS",UNLINK_FILE:"UNLINK_FILE"},saveTypesFolder:{RECORDER:o},RECORDER_BASE_PATH:o,windowStateFileName:"window-state-app-songriffer.json"}},181:function(e,t,a){const n=a(0),i=a(4).default,{colors:o}=a(3),s=i.svg`
    width: 15px;
    height: 15px;
    margin-left: 2px;
    transform: rotate(${e=>e.rotate?"180deg":"0deg"});

    fill: ${o.blueLight};
`;e.exports=({rotate:e})=>n.createElement(s,{viewBox:"0 0 10 5",rotate:e},n.createElement("path",{fillRule:"evenodd",d:"M0 0h10L5 6"}))},193:function(e){e.exports={apiKey:"AIzaSyBrkXIQBEvF9qslWeO91XUUUng3zAH9ZEk",databaseURL:"https://songriffer.firebaseio.com",projectId:"songriffer",storageBucket:"songriffer.appspot.com",messagingSenderId:"246769208094",appId:"1:246769208094:web:6a65c6866b23adc4"}},197:function(e,t,a){const n=a(0),i=a(15),o=a(65),s=a(14),r=a(3);class l extends n.Component{componentDidMount(){s.trackScreen("modalFileMissing"),s.trackEvent("file","invalid-file",this.props.file.type)}render(){const{file:e}=this.props;return n.createElement("div",null,n.createElement("div",null,"Sorry but we could not import the file ",e.name,"."),n.createElement("div",null,"Only audio files are supported."),n.createElement("div",null,"If you think this is a bug, feel free to contact us at"," ",n.createElement(o,{href:`mailto:${r.email}`},r.email),"."))}}var c,d,p;c=l,d="propTypes",p={dispatch:i.func,file:i.object},d in c?Object.defineProperty(c,d,{value:p,enumerable:!0,configurable:!0,writable:!0}):c[d]=p,e.exports=l},21:function(e,t,a){(function(t){const n=t.require("electron"),i=a(14),o=a(3);let s=()=>{},r=()=>{};e.exports.setCallback=e=>{s=e},e.exports.onMissingFiles=e=>{r=e},n.ipcRenderer.on(o.mainConsts.events.CHECK_FILES_DB,(e,t)=>{s(o.mainConsts.events.CHECK_FILES_DB,t)}),n.ipcRenderer.on(o.mainConsts.events.DATA_FETCHED,(e,t)=>{s(o.mainConsts.events.DATA_FETCHED,t)}),n.ipcRenderer.on(o.mainConsts.events.MISSING_FILES,(e,t)=>{r(t)}),n.ipcRenderer.on(o.mainConsts.events.FILE_ALREADY_EXISTS,(e,t)=>{s(o.mainConsts.events.FILE_ALREADY_EXISTS,t)}),n.ipcRenderer.on(o.mainConsts.events.FILE_SYSTEM_ERROR,(e,t)=>{s(o.mainConsts.events.FILE_SYSTEM_ERROR,t)}),n.ipcRenderer.on(o.mainConsts.events.FILE_SAVE_SUCCESS,(e,t)=>{s(o.mainConsts.events.FILE_SAVE_SUCCESS,t)}),n.ipcRenderer.on(o.mainConsts.events.GET_MXLM_SUCCESS,(e,t)=>{s(o.mainConsts.events.GET_MXLM_SUCCESS,t)}),n.ipcRenderer.on(o.mainConsts.events.OPEN_DEEPLINK,(e,t)=>{s(o.mainConsts.events.OPEN_DEEPLINK,t)}),e.exports.checkFilesDBExists=()=>{n.ipcRenderer.send(o.mainConsts.events.CHECK_FILES_DB_EXISTS,{db:o.db.files})},e.exports.clearDB=()=>{n.ipcRenderer.send(o.mainConsts.events.CLEAR_DB)},e.exports.getFiles=()=>{n.ipcRenderer.send(o.mainConsts.events.FETCH_DATA,{db:o.db.files})},e.exports.getAppConfig=()=>{n.ipcRenderer.send(o.mainConsts.events.FETCH_DATA,{db:o.db.app})},e.exports.saveApp=e=>{n.ipcRenderer.send(o.mainConsts.events.SAVE_DATA,{db:"app",value:JSON.stringify(e)})},e.exports.openInFinder=e=>{n.shell.showItemInFolder(e)},e.exports.checkFiles=e=>{n.ipcRenderer.send(o.mainConsts.events.CHECK_FILES,{files:e})},e.exports.openLink=e=>{n.shell.openExternal(e),i.trackEvent("app","open-link",e)},e.exports.reload=()=>{n.ipcRenderer.send(o.mainConsts.events.RELOAD)},e.exports.toggleDevTools=()=>{n.ipcRenderer.send(o.mainConsts.events.TOGGLE_DEVTOOLS)},e.exports.saveMedia=(e,t,a)=>{n.ipcRenderer.send(o.mainConsts.events.SAVE_MEDIA,{saveType:e,fileName:t,wavData:a})},e.exports.checkFileExists=e=>{n.ipcRenderer.send(o.mainConsts.events.CHECK_FILE_EXISTS,{fileName:e})},e.exports.copyToClipboard=e=>{n.clipboard.writeText(e)},e.exports.unlinkFile=e=>{n.ipcRenderer.send(o.mainConsts.events.UNLINK_FILE,{filePath:e})},e.exports.getMXML=e=>{n.ipcRenderer.send(o.mainConsts.events.GET_MXLM,{filePath:e})},e.exports.openFile=e=>{n.shell.openItem(e)}}).call(this,a(17))},213:function(e,t){},215:function(e,t){},22:function(e,t,a){"use strict";a.r(t),a.d(t,"setFiles",function(){return y}),a.d(t,"addFiles",function(){return T}),a.d(t,"editFile",function(){return x}),a.d(t,"removeFile",function(){return _}),a.d(t,"setMissingFiles",function(){return C}),a.d(t,"replaceFile",function(){return w}),a.d(t,"addTag",function(){return A}),a.d(t,"removeTag",function(){return k}),a.d(t,"setSortRule",function(){return F}),a.d(t,"disableNewImports",function(){return D}),a.d(t,"migrateLegacyData",function(){return R}),a.d(t,"handleFileOpen",function(){return P});var n=a(12),i=a(26),o=a(33),s=a(3),r=a(10),l=a(61);const{openModal:c}=a(25),{pausePlayer:d,playFile:p}=a(68),{notifyMissingFile:u}=a(94),{selectFileByHashPath:h,_selectFiles:m}=a(16),{selectUser:g}=a(31),f=a(36),E=a(14),{clearDB:v,openFile:b}=a(21),y=e=>({type:s.actionTypes.SET_FILES,files:e}),T=(e,t=!1)=>(a,n)=>{if(t){const a={import:0,recorder:0},n=Object.values(e);n.forEach(e=>{e.source===i.SOURCES.IMPORT&&a.import++,e.source===i.SOURCES.RECORD&&a.recorder++}),t&&f(`${n.length} files added:\n${Object.keys(a).map(e=>`${e}: ${a[e]}`).join("\n")}`),r.a.saveUserStats({files:a})}a({type:s.actionTypes.ADD_FILES,files:e,newImports:t,__saveToDB__:t,__db:s.db.files})},x=(e,t,a=!1)=>({type:s.actionTypes.EDIT_FILE,hashPath:e,edit:t,automaticEdit:a,__saveToDB__:!0,__db:s.db.files}),S=e=>({type:s.actionTypes.REMOVE_FILE,hashPath:e,__saveToDB__:!0,__db:s.db.files}),_=(e,t=!1)=>(a,n)=>{const o=n(),l=h(o,{fileHashPath:e}),d=o.files.missingFiles,p=g(o);if(l.source===i.SOURCES.RECORD&&!t&&!d.includes(l.hashPath))return void a(c(s.modals.removeFile,{fileHashPath:e}));const u=[];l.uploaded&&u.push(r.a.deleteFile(p,l)),Promise.all(u).then(()=>{a(S(e))}).catch(t=>{try{f(`Error deleting file from storage - ${t.message}`)}catch(t){}a(S(e))})},C=e=>(t,a)=>{const n=m(a()),i=e.filter(e=>n[e]);t({type:s.actionTypes.SET_MISSING_FILES,filesHashPath:i})},w=(e,t)=>({type:s.actionTypes.REPLACE_FILE,oldFileHashPath:e,newFile:t,__saveToDB__:!0,__db:s.db.files}),A=(e,t)=>(a,n)=>{r.a.saveUserStats({tags:{[t.trim().toLowerCase()]:1}}),a({type:s.actionTypes.ADD_TAG,hashPath:e,tag:t.trim(),__saveToDB__:!0,__db:s.db.files})},k=(e,t)=>({type:s.actionTypes.REMOVE_TAG,hashPath:e,tag:t,__saveToDB__:!0,__db:s.db.files}),F=e=>({type:s.actionTypes.SET_SORT_RULE,sortRule:e}),D=()=>(e,t)=>{const a=m(t()),n=Object.keys(a).filter(e=>a[e].newImport);n.length&&e({type:s.actionTypes.DISABLE_NEW_IMPORTS,files:n})},R=(e={},t=!1)=>(a,i)=>{const o=g(i());if(null!==e){f(`Migrating data to cloud ${o.uid} ${t?"(win backup)":""}`),E.trackEvent("app","cloud-migration");const a={};Object.values(e).forEach(e=>{a[Object(n.getFilePathHash)(e.path)]=e}),r.a.saveFullFilesData(o.uid,a).then(()=>{t&&f(`Migration for win backup successfull ${o.uid}`),v()}).catch(e=>{f(`Error migrating data to cloud ${e.toString()}`),t&&f(`Error migration data to cloud from win backup ${e.toString()}`),console.error(e)})}},P=e=>(t,a)=>{const i=a(),r=g(i),h=i.files.missingFiles;if(!Object(o.canRead)(r))return void t(c(s.modals.forbiddenAction,{type:l.a.OPEN_FILE}));if(Object(n.isPlayable)(e))return h.includes(e.hashPath)&&!e.uploaded?void t(u(e)):void t(p(e.hashPath));t(d());const m=i.application.enableExperimental;return e.isGuitarPro7()&&m?t(c(s.modals.tabs,{file:e})):b(e.path)}},224:function(e,t,a){const n=a(0),i=a(15),o=a(4).default,s=o.div`
    max-width: 600px;
`,r=o.div`
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
`,l=n.memo(({message:e,title:t})=>n.createElement(s,null,n.createElement(r,null,t),n.createElement("div",null,e)));l.propTypes={message:i.node,title:i.string},e.exports=l},225:function(e,t,a){function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const i=a(0),o=a(15),s=a(4).default,r=a(65),l=a(48),c=a(14),d=a(36),{openLink:p}=a(21),u=a(3),h=s.div`
    max-width: 700px;
`,m=s.div`
    padding: 45px;
    background: radial-gradient(ellipse at top, ${u.colors.blueLight}, transparent),
        radial-gradient(ellipse at left, ${u.colors.red}, transparent),
        radial-gradient(ellipse at right, ${u.colors.purple}, transparent);
`,g=s.div`
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
`,f=s.div`
    text-align: center;
`,E=s(r)`
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
`,v=s.div`
    font-size: 14px;
    opacity: 0.7;
    text-align: center;
`,b=s.div`
    padding: 20px;
    margin-top: 40px;
`,y=s.div`
    margin-bottom: 25px;
    text-align: center;
    font-size: 20px;
    font-weight: lighter;
`,T=s.div`
    padding-bottom: 25px;
    margin-bottom: 25px;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`,x=s.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    :last-child {
        border: none;
    }
`,S=s.div`
    width: ${e=>e.hasVideo?"50%":"100%"};
    padding-right: ${e=>e.hasVideo?"15px":"0"};
`,_=s.div`
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
`,C=s.div`
    font-size: 15px;
    opacity: 0.8;
`,w=s.video`
    width: 50%;
`;class A extends i.Component{constructor(...e){super(...e),n(this,"clickUpdate",()=>{c.trackEvent("app","download-update"),d("Download update from app")})}componentDidMount(){c.trackScreen("modalUpdate")}render(){const{changelog:e,mandatory:t,url:a}=this.props,n=t?"Your app is too old!":"Update version available";return i.createElement(h,null,i.createElement(m,null,i.createElement(g,null,n),t?i.createElement(l,null,i.createElement(f,null,"Please download and install the latest version to keep using SongRiffer")):null,i.createElement(E,{href:a,onClick:this.clickUpdate},"Download the update"),i.createElement(v,null,"Or visit ",i.createElement(r,{onClick:()=>p(u.landingUrl)},u.landingUrl)," to download and install the latest version.")),Array.isArray(e.sections)&&e.sections.length?i.createElement(b,null,i.createElement(y,null,e.title?e.title:"What's new in this update:"),e.description?i.createElement(T,null,e.description):null,i.createElement("div",null,e.sections.map(e=>i.createElement(x,{key:e.title},i.createElement(S,null,i.createElement(_,null,e.title),i.createElement(C,{hasVideo:e.video},e.message)),e.video?i.createElement(w,{autoPlay:!0,playsInline:!0,muted:!0,loop:!0,src:e.video}):null)))):null)}}n(A,"propTypes",{changelog:o.object,mandatory:o.bool,url:o.string}),e.exports=A,e.exports.rootStyle="\n    max-height: 90vh;\n    padding: 0;\n    overflow-y: auto;\n"},23:function(e,t,a){"use strict";const n=a(91);t.a=n([e=>e.search],e=>({...e,cleanedBasicTerm:e.basicTerm.trim().toLowerCase(),cleanedTerm:e.term.trim().toLowerCase()}),"selectSearch")},235:function(e,t,a){e.exports=function(){return new Worker(a.p+"9b8ea8abcf2fd171fa20.worker.js")}},236:function(e,t,a){const n=a(0),i=a(4).default,{colors:o}=a(3),s=i.svg`
    width: ${e=>e.width}px;
`;e.exports=({animated:e=!1,width:t=20})=>n.createElement(s,{width:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"159.476 103.524 63.048 56.381"},n.createElement("defs",null,n.createElement("path",{d:"M160.48 130.71h15.47v26.19h-15.47v-26.19z",id:"stats-a"}),n.createElement("path",{d:"M181.67 114.05h15.47v42.85h-15.47v-42.85z",id:"stats-b"}),n.createElement("path",{d:"M204.05 104.52h15.47v52.38h-15.47v-52.38z",id:"stats-c"})),n.createElement("use",{xlinkHref:"#stats-a",fill:o.blueLight}),n.createElement("use",{xlinkHref:"#stats-b",fill:o.blueLight}),n.createElement("use",{xlinkHref:"#stats-c",fill:o.blueLight}))},237:function(e,t,a){const n=a(0),i=a(4).default,o=a(3),s=i.svg`
    width: 184px;
    animation: open 1s 1;
    animation-timing-function: ease;

    path {
        fill: ${o.colors._white};
    }
`;e.exports=({angle:e,opacity:t})=>n.createElement(s,{viewBox:"0 0 184 184",style:{transform:`rotate(${e})`,opacity:t}},n.createElement("defs",null,n.createElement("clipPath",{id:"logo-b"},n.createElement("path",{d:"M.625.621094h173.222656V172.8125H.625zm0 0"})),n.createElement("clipPath",{id:"logo-a"},n.createElement("path",{d:"M0 0h174v173H0z"})),n.createElement("g",{id:"logo-c",clipPath:"url(#logo-a)"},n.createElement("g",{clipPath:"url(#logo-b)"},n.createElement("path",{d:"M74.582031 172.8125C38.964844 168.527344 2.6875 137.164063.707031 90.839844-1.34375 42.832031 35.828125 2.527344 83.917969.6875c48.1875-1.84375 88.25 35.582031 89.878906 83.511719 1.597656 46.980469-33.316406 82.6875-72.476562 88.398437 19.148437-4.351562 34.371093-14.488281 44.898437-31.125 10.550781-16.671875 13.402344-34.8125 8.863281-53.988281-7.789062-32.925781-38.855468-55.480469-72.910156-52.960937-34.179687 2.53125-60.917969 29.121093-64.277344 62.5-3.667968 36.425781 20.996094 69.035156 56.6875 75.789062"})),n.createElement("path",{d:"M98.648438 43.191406c26.601562 4.265625 50.992187 29.03125 50.578125 61.816407-.425782 33.550781-27.953125 60.859375-61.640625 61.015625-34.027344.15625-61.777344-26.816407-62.382813-60.851563-.589844-33.167969 24.109375-57.722656 50.671875-62-13.480469 3.472656-24.113281 10.925781-31.328125 22.867188-7.238281 11.976562-9.089844 24.894531-5.632812 38.449218C44.835938 127.6875 66.75 143.6875 91.613281 141.742188c23.050782-1.796875 42.597657-20.574219 45.265625-43.804688 2.992188-26.046875-13.941406-49.007812-38.230468-54.746094"}),n.createElement("path",{d:"M77.851563 135.882813c-17.867188-3.527344-34.558594-20.648438-33.675782-43.578125C45.066406 69.074219 63.769531 50.925781 86.75 50.6875c22.921875-.238281 42.078125 17.277344 43.636719 40.015625 1.636719 23.878906-15.492188 41.902344-34.382813 45.359375 9.863282-2.820312 17.382813-8.597656 22.183594-17.707031 3.816406-7.234375 4.894531-14.949219 3.253906-22.9375-3.429687-16.707031-17.59375-27.996094-34.800781-27.90625-16.066406.085937-30.277344 11.945312-33.421875 27.992187-3.675781 18.753907 8.140625 35.945313 24.632813 40.378907"}),n.createElement("path",{d:"M94.582031 74.859375c12.640625 2.765625 24.214844 15.582031 22.679688 32.234375-1.402344 15.253906-14.769531 27.144531-30.539063 26.960938-15.433593-.183594-28.492187-12.589844-29.4375-28.011719-1.03125-16.753906 10.984375-28.699219 22.878907-31.160156-6.007813 2.042968-10.726563 5.691406-13.875 11.230468-3.164063 5.566407-3.996094 11.523438-2.496094 17.730469 2.628906 10.910156 12.324219 18.484375 23.511719 18.488281 11.253906.007813 20.894531-7.589843 23.613281-18.539062 2.628906-10.578125-2.609375-24.527344-16.335938-28.933594"}))),n.createElement("use",{xlinkHref:"#logo-c"}))},238:function(e,t,a){const n=a(3);e.exports.setMXML=(e,t)=>({type:n.actionTypes.SET_MXML,filePath:e,mxml:t})},240:function(e,t,a){const n=a(14),i=a(3);let o=null;let s=null;e.exports=()=>e=>t=>{switch(e(t),t.type){case i.actionTypes.ADD_TAG:n.trackEvent("file","add-tag",t.tag);break;case i.actionTypes.CHECK_UPDATE:n.trackEvent("app",`check-update-${t.manual?"manual":"auto"}`,window.__songRiffer.version);break;case i.actionTypes.CHECK_UPDATE_FAILED:n.trackEvent("app","check-update-failed",window.__songRiffer.version);break;case i.actionTypes.CHECK_UPDATE_NO_UPDATE:n.trackEvent("app","check-update-no-update-manual",window.__songRiffer.version);break;case i.actionTypes.UPDATE_AVAILABLE:n.trackEvent("app","check-update-success-auto",window.__songRiffer.version);break;case i.actionTypes.CHECK_UPDATE_SUCCESS:n.trackEvent("app","check-update-success-manual",window.__songRiffer.version);break;case i.actionTypes.CLEAR_SEARCH:n.trackEvent("search","clear-search");break;case i.actionTypes.REMOVE_FILE:n.trackEvent("file","remove-file");break;case i.actionTypes.REMOVE_TAG:n.trackEvent("file","remove-tag",t.tag);break;case i.actionTypes.SEARCH_BASIC:t.term.length&&(e=>{clearTimeout(o),o=setTimeout(()=>{n.trackEvent("search","search-basic",e)},1e3)})(t.term.toLowerCase());break;case i.actionTypes.SEARCH_BPM:n.trackEvent("search","search-bpm",t.bpm);break;case i.actionTypes.SEARCH_TAG:n.trackEvent("search","search-tag",t.tag.toLowerCase());break;case i.actionTypes.SET_SEARCH:t.term&&(e=>{clearTimeout(s),s=setTimeout(()=>{n.trackEvent("search","search-term",e)},1e3)})(t.term.toLowerCase());break;case i.actionTypes.SET_SORT_RULE:n.trackEvent("file","sort",t.sortRule);break;case i.actionTypes.TOGGLE_ADVANCED_SEARCH:n.trackEvent("search","toggle-advanced")}}},242:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(11),s=a(67),r=a(4),l=a(52),c=a(6),d=a(56);var p=r.default.span`
    display: inline-block;
    padding: 2px 8px;
    margin-right: 3px;
    border-radius: 7px;
    cursor: pointer;
    transition: background ease 0.1s;
`;function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const h=Object(r.default)(p)`
    display: inline-flex;
    height: 22px;
    align-items: center;
    ${e=>e.additionalStyle}
    border: 2px solid ${e=>e.color};
    color: ${e=>e.color};
    font-weight: lighter;

    :hover {
        background: ${e=>e.color};
        color: ${e=>Object(d.getFontColorForColor)(e.color)};
    }
`,m=r.default.div`
    max-width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,g=r.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    cursor: pointer;
    margin-left: 3px;
    background: ${c.colors._white};
    border-radius: 100%;
    color: ${e=>e.color};
    font-size: 12px;
    transition: all ease 0.1s;

    :hover {
        background: ${c.colors._black};
        color: ${c.colors._white};
    }
`;var f=i.a.forwardRef((e,t)=>{const{additionalStyle:a,children:n,deleteTitle:o,onDelete:s}=e,r=Object(d.getTagColor)(n),l={...e};return delete l.onDelete,i.a.createElement(h,u({},l,{color:r,additionalStyle:a,ref:t}),i.a.createElement(m,null,n),s?i.a.createElement(g,{title:o,onClick:s,color:r},"x"):null)});const E=r.default.label`
    display: block;
    position: relative;
    width: 48px;
    height: 28px;
    margin-right: 1px;
    border-radius: 50px;
    border: 1px solid ${c.colors._blue};
    background: ${e=>e.checked?c.colors._blue:"transparent"};
    cursor: pointer;
    transition: background ease 0.3s;

    :after {
        position: absolute;
        content: '';
        width: 18px;
        height: 18px;
        border-radius: 100%;
        background: ${c.colors._white};
        transform: translateX(${e=>e.checked?"25px":"5px"});
        top: 4px;
        transition: transform 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
`;var v=({checked:e,onChange:t})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{checked:e},i.a.createElement("input",{type:"checkbox",style:{display:"none"},onChange:t,checked:e}))),b=a(23),y=a(3);const T=a(126),x=e=>(T.start("search"),{type:y.actionTypes.SEARCH_BASIC,term:e}),S=()=>({type:y.actionTypes.TOGGLE_ADVANCED_SEARCH,__saveToDB__:!0,__db:y.db.app}),_=e=>(T.start("search"),{type:y.actionTypes.SEARCH_TAG,tag:e.trim()}),C=e=>({type:y.actionTypes.SET_SEARCH_ARCHIVED,archived:e});var w,A,k;function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const D=a(0),{connect:R}=a(11),P=a(15),O=a(63),L=a(64),I=a(93),{selectTags:M}=a(16),U=a(3),j=r.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${e=>e.visible?"300px":0};
    border-left: ${e=>e.visible?`1px solid ${U.colors.blueLight}`:0};
    transition: width ease 0.3s;
    transform: translateZ(0);
`,N=r.default.div`
    position: absolute;
    width: ${300}px;
    height: 100%;
    padding-left: 15px;
    top: 0;
    left: 0;
`,$=r.default.div`
    margin-bottom: 15px;
`,H=r.default.div`
    margin-bottom: 5px;
    color: ${U.colors.blueLight};
`,B=r.default.div`
    margin-bottom: 15px;
    display: flex;
`,z=r.default.span`
    display: flex;
    flex: 1;
    align-items: center;
`,G=r.default.div`
    margin-top: 25px;
`,V=r.default.div`
    display: flex;
    align-items: center;

    span {
        margin: 0 5px;
    }
`,W=Object(r.default)(L)`
    width: 70px;

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        margin: 0;
        appearance: none;
    }
`;var K=R(e=>({allTags:M(e),search:Object(b.a)(e),visible:Object(b.a)(e).displayAdvanced}))((k=A=class extends D.Component{constructor(...e){super(...e),F(this,"state",{autocompleteTag:null,newTag:""}),F(this,"rootRef",D.createRef()),F(this,"nameInputRef",D.createRef()),F(this,"searchName",e=>{this.props.dispatch((e=>(T.start("search"),{type:y.actionTypes.SET_SEARCH,term:e}))(e.target.value))}),F(this,"onBPMChange",e=>{this.props.dispatch((e=>(T.start("search"),{type:y.actionTypes.SEARCH_BPM,bpm:e}))(e.target.value))}),F(this,"onBPMDeltaChange",e=>{this.props.dispatch((e=>(T.start("search"),{type:y.actionTypes.SEARCH_BPM_DELTA,bpmDelta:e}))(e.target.value))}),F(this,"onTagChange",e=>{const t=Object.keys(this.props.search.tags);this.setState({autocompleteTag:Object(d.getTagAutocomplete)(this.props.allTags,e.target.value,t),newTag:e.target.value})}),F(this,"onTagKeyDown",e=>{if("Tab"===e.key&&this.state.autocompleteTag)return this.props.dispatch(_(this.state.autocompleteTag)),e.preventDefault(),void this.quitTagEdit();"Enter"===e.key&&this.state.newTag.length&&(this.props.dispatch(_(this.state.newTag)),this.quitTagEdit())}),F(this,"clearSearch",()=>{this.props.dispatch((()=>({type:y.actionTypes.CLEAR_SEARCH}))())}),F(this,"removeTag",e=>{this.props.dispatch((e=>(T.start("search"),{type:y.actionTypes.REMOVE_SEARCH_TAG,tag:e}))(e))}),F(this,"onTransitionEnd",()=>{this.props.dispatch((()=>({type:y.actionTypes.ADVANCED_TRANSITION_DONE}))())}),F(this,"onSwitchArchived",e=>{e.target.checked?this.props.dispatch(C(U.searchArchived.ALL)):this.props.dispatch(C(U.searchArchived.NON_ARCHIVED))})}quitTagEdit(){this.setState({autocompleteTag:null,newTag:""})}shouldComponentUpdate(e){return this.props.visible||e.visible}componentDidMount(){this.rootRef.current.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})}componentWillUnmout(){this.rootRef.current.removeEventListener("transitionend",this.onTransitionEnd)}render(){const{search:e,visible:t}=this.props,{autocompleteTag:a,newTag:n}=this.state,i=e.term.length||e.bpm||Object.keys(e.tags).length,o=t?void 0:-1;return D.createElement(j,{visible:t,ref:this.rootRef},D.createElement(N,null,D.createElement($,null,D.createElement(H,null,"Name"),D.createElement(L,{isFullWidth:!0,type:"text",onChange:this.searchName,value:e.term,tabIndex:o,id:"advanced-search-input",ref:this.nameInputRef})),D.createElement($,null,D.createElement(H,null,"Tags"),D.createElement(I,{isFullWidth:!0,autocomplete:a,autocompleteStyle:"\n    top: 3px;\n    left: 2px;\n",onChange:this.onTagChange,onKeyDown:this.onTagKeyDown,value:n,tabIndex:o}),Object.keys(e.tags).length?D.createElement(G,null,Object.keys(e.tags).map(e=>D.createElement(f,{key:e,onDelete:()=>this.removeTag(e),deleteTitle:"Remove this tag from the search",additionalStyle:"\n    margin-bottom: 5px;\n"},e))):null),D.createElement($,null,D.createElement(H,null,"Tempo"),D.createElement(V,null,D.createElement(W,{type:"number",onChange:this.onBPMChange,value:e.bpm,min:1,tabIndex:o}),D.createElement("span",null,"bpm + / - "),D.createElement(W,{type:"number",onChange:this.onBPMDeltaChange,value:e.bpmDelta,title:e.bpm?`Results will include riffs that have a tempo between ${e.bpm-10} and ${e.bpm+10}`:null,min:0,tabIndex:o}))),D.createElement(B,null,D.createElement(z,null,"Show archived files"),D.createElement(v,{onChange:this.onSwitchArchived,checked:e.archived===U.searchArchived.ALL})),i?D.createElement(O,{onClick:this.clearSearch,tabIndex:o},"Clear search"):null))}},F(A,"propTypes",{allTags:P.any,dispatch:P.func,search:P.object,visible:P.bool}),w=k))||w;const Y=r.default.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: ${c.colors.blueLight};
    border: 20px dashed ${c.colors.blueLight};
    font-size: 200px;
    justify-content: center;
    align-items: center;
    z-index: 100;
    opacity: ${e=>e.dragging?1:0};
    transition: opacity ease 0.7s;
`;var X=({dragging:e})=>i.a.createElement(Y,{dragging:e},"+");const q=r.default.div`
    position: absolute;
    width: 100%;
    height: 20px;
    ${e=>e.hasNotification?"":"-webkit-app-region: drag;"}
    top: 0;
    left: 0;
`;var J=Object(o.connect)(e=>({notification:e.notifications.notification}))(({notification:e})=>i.a.createElement(q,{hasNotification:e.active}));const Z=a(63),Q=a(65),ee=a(48),{openLink:te,reload:ae}=a(21),ne=a(36),ie=r.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${y.colors._white};
`,oe=r.default.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
`,se=r.default.div`
    font-size: 18px;
`,re=r.default.div`
    padding: 30px 0;
`,le=Object(r.default)(Z)`
    padding: 5px 10px;
`;var ce=()=>(i.a.useEffect(()=>{ne("Error screen displayed")},[]),i.a.createElement(ie,null,i.a.createElement(oe,null,"Woops, something went wrong :("),i.a.createElement(se,null,"Sorry about that, it seems something is broken."),i.a.createElement(re,null,i.a.createElement(le,{onClick:ae},"Restart the app")),i.a.createElement(ee,{size:"xs"},"If you think something is not right, feel free to contact us for support:"),i.a.createElement(ee,{size:"xs"},i.a.createElement(Q,{href:`mailto:${y.email}`},"Send us an email")),i.a.createElement(ee,{size:"xs"},i.a.createElement(Q,{onClick:()=>te(y.messengerUrl)},"Write to us on Messenger"))));const de=r.default.svg`
    width: 225px;
    height: 41px;
    path {
        fill: ${y.colors._white};
    }
    ${e=>e.s};
`;var pe=({style:e=""})=>i.a.createElement(de,{s:e},i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"logo-name-b"},i.a.createElement("path",{d:"M.359375.5625H40v38.066406H.359375zm0 0"})),i.a.createElement("clipPath",{id:"logo-name-c"},i.a.createElement("path",{d:"M6 10h29v28.628906H6zm0 0"})),i.a.createElement("clipPath",{id:"logo-name-d"},i.a.createElement("path",{d:"M210 11h12.085938v17H210zm0 0"})),i.a.createElement("clipPath",{id:"logo-name-a"},i.a.createElement("path",{d:"M0 0h223v39H0z"})),i.a.createElement("g",{id:"logo-name-e",clipPath:"url(#logo-name-a)"},i.a.createElement("g",{clipPath:"url(#logo-name-b)"},i.a.createElement("path",{d:"M26.722656 38.628906c8.09375-4.105468 10.417969-12.238281 8.667969-18.65625-1.835937-6.738281-7.867187-11.53125-14.597656-11.695312-7.203125-.179688-13.453125 4.15625-15.691406 10.558594-2.148438 6.160156-.453125 15.359375 8.351562 19.785156C7.757813 37.242188.132813 30.050781.363281 19.652344.585938 9.710938 8.890625 1.113281 18.882813.589844 29.363281.0429688 38.398438 7.523438 39.617188 18.011719c1.242187 10.710937-6.058594 18.621094-12.894532 20.617187"})),i.a.createElement("path",{d:"M122.683594 23.71875c1.039062 0 2.078125-.011719 3.117187.003906.507813.007813.820313-.089843.808594-.714843-.035156-1.835938.039063-3.675782-.042969-5.507813-.070312-1.527344-.769531-2.382812-2.167968-2.609375-1.894532-.304687-3.824219-.359375-5.710938.054688-1.671875.363281-2.382812 1.621093-2.445312 4.019531-.066407 2.59375.652343 4.070312 2.273437 4.535156.527344.152344 1.101563.1875 1.65625.210938.835938.035156 1.675781.007812 2.511719.007812m7.292969-.839844c0 2.117188.109375 4.242188-.023438 6.351563-.179687 2.777344-1.578125 4.203125-4.367187 4.496094-3.507813.367187-7.03125.082031-10.546875.152343-.457032.007813-.660157-.207031-.636719-.652343.003906-.039063.003906-.082032 0-.121094-.203125-2.546875-.203125-2.539063 2.324219-2.546875 2.4375-.007813 4.878906.035156 7.3125-.054688 1.808593-.066406 2.554687-1 2.574218-2.777343.007813-.675782-.195312-.910157-.875-.898438-1.800781.035156-3.601562-.042969-5.398437.023438-5.4375.195312-7.65625-2.988282-7.601563-8.058594.007813-.792969.132813-1.597656.308594-2.371094.644531-2.84375 2.421875-4.472656 5.355469-4.878906 2.183594-.300781 4.398437-.261719 6.582031-.058594 2.996094.28125 4.625 2.03125 4.980469 5.046875.246094 2.109375.042969 4.234375.011719 6.347656"}),i.a.createElement("g",{clipPath:"url(#logo-name-c)"},i.a.createElement("path",{d:"M15.371094 10.894531c-5.789063 2.964844-7.363281 8.558594-6.386719 12.832032 1.15625 5.058593 5.355469 8.65625 10.398438 8.960937 4.886718.296875 9.613281-2.746094 11.289062-7.296875 1.664063-4.523437.695313-10.261719-4.789062-13.890625 3.527343.164063 8.0625 6.761719 8.28125 12.042969.296875 7.261719-5.09375 13.578125-12.394532 14.527344-6.9375.902343-13.890625-3.855469-15.386718-10.53125-1.640625-7.308594 2.28125-14.597657 8.988281-16.644532"})),i.a.createElement("path",{d:"M54.777344 27.4375c-1.878906.003906-3.757813-.023437-5.636719.015625-.664062.011719-.890625-.179687-.914062-.867187-.117188-2.945313-.140625-2.945313 2.808593-2.945313 3 0 6 .03125 9-.015625 1.851563-.027344 2.859375-1.511719 2.265625-3.199219-.335937-.953125-1.09375-1.332031-2.011718-1.457031-1.871094-.265625-3.753907-.066406-5.632813-.132812-.71875-.023438-1.449219.007812-2.152344-.125-3.195312-.613282-4.859375-2.957032-4.59375-6.398438.25-3.246094 2.253907-5.230469 5.523438-5.292969 3.476562-.070312 6.957031 0 10.4375-.03125.710937-.007812.847656.261719.863281.90625.070313 2.867188.089844 2.867188-2.761719 2.867188-2.597656 0-5.199218-.027344-7.796875.007812-1.609375.023438-2.425781.789063-2.457031 2.175782-.027344 1.320312.695313 2.183593 2.101563 2.261718 1.875.105469 3.753906.066407 5.632812.121094.796875.023438 1.609375.042969 2.378906.222656 3.203125.730469 4.71875 3.09375 4.367188 6.679688-.308594 3.160156-2.378906 5.09375-5.664063 5.195312-1.917968.0625-3.835937.011719-5.757812.011719M141.667969 7c1.761719 0 3.519531-.019531 5.277344.003906 2.964843.046875 5.21875 1.777344 5.808593 4.421875.726563 3.265625-.484375 6.261719-3.167968 7.546875-.726563.347657-.734375.582032-.363282 1.199219 1.277344 2.121094 2.488282 4.28125 3.753907 6.410156.390625.65625.308593.851563-.496094.875-3.207031.089844-3.207031.109375-4.859375-2.71875-.847656-1.445312-1.730469-2.871093-2.550781-4.335937-.3125-.558594-.679688-.796875-1.328125-.773438-1.195313.042969-2.402344.066407-3.59375-.003906-.9375-.058594-1.152344.324219-1.125 1.183594.054687 1.878906-.015625 3.757812.03125 5.636719.019531.785156-.222657 1.011718-1.015625 1.015625-2.800782.007812-2.800782.039062-2.800782-2.789063 0-1.800781-.007812-3.601562.003907-5.398437.015625-2.324219.941406-3.277344 3.28125-3.304688 2.675781-.03125 5.355468.023438 8.035156-.023437 1.921875-.03125 3.066406-1.839844 2.371094-3.636719-.484375-1.242188-1.484375-1.554688-2.695313-1.550781-3.238281.007812-6.476562-.035157-9.714844.023437-1.023437.019531-1.382812-.21875-1.347656-1.3125C135.25 7.003906 135.191406 7 137.710938 7h3.957031M197.761719 18.359375h2.871094c.117187 0 .238281-.011719.355468-.019531 1.445313-.078125 2.113282-.617188 2.128907-1.71875.015625-1.160156-.722657-1.851563-2.132813-1.886719-1.589844-.039062-3.1875-.03125-4.78125-.011719-2.03125.03125-2.683594.78125-2.617187 2.820313.019531.625.207031.84375.828125.824219 1.113281-.03125 2.230468-.007813 3.347656-.007813m2.039062 9.121094c-1.519531 0-3.035156.023437-4.554687-.007813-2.992188-.066406-4.882813-1.871093-4.988281-4.847656-.074219-2.074219-.066407-4.15625-.003907-6.230469.085938-2.832031 1.605469-4.582031 4.445313-4.867187 2.65625-.269531 5.347656-.316406 8.007812.058594 2.53125.359375 3.875 2.183593 3.808594 4.964843-.0625 2.609375-1.386719 4.226563-3.933594 4.40625-2.464843.179688-4.949218.0625-7.421875.148438-.527343.015625-1.359375-.488281-1.550781.550781-.199219 1.078125.375 2.164063 1.328125 2.375.617188.136719 1.269531.160156 1.90625.164063 2.636719.015625 5.273438.027343 7.910156-.007813.765625-.007812 1.027344.214844 1.027344 1.019531-.007812 2.273438.03125 2.273438-2.261719 2.273438h-3.71875M78.390625 24.226563c.597656-.03125 1.195313-.046875 1.789063-.097657 2.109375-.179687 3.007812-.964843 3.351562-3.039062.203125-1.222656.214844-2.460938-.097656-3.683594-.425781-1.675781-1.265625-2.460937-2.972656-2.625-.949219-.089844-1.914063-.0625-2.871094-.058594-2.980469.015625-4.128906 1.113282-4.28125 4.0625-.222656 4.214844.902344 5.414063 5.082031 5.441407m.007813 3.253906c-.761719 0-1.519532.015625-2.277344-.003906-2.777344-.082032-5.023438-1.710938-5.820313-4.347657-.730468-2.425781-.742187-4.890625.011719-7.316406.757813-2.4375 2.464844-3.851562 4.984375-4.246094 1.945313-.304687 3.910156-.292968 5.847656-.0625 3.207032.378907 5.019532 2.078125 5.710938 5.242188.433594 1.972656.402344 3.96875-.101563 5.933594-.753906 2.953125-3.03125 4.730468-6.082031 4.796875-.757812.015625-1.515625.003906-2.273437.003906M91.519531 20c.003907-2.117187-.023437-4.238281.011719-6.355469.023438-1.519531.601563-2.210937 2.070313-2.214843 2.953125-.011719 5.910156-.210938 8.859375.144531 3.8125.464844 5.957031 2.816406 6.011718 6.640625.039063 2.757812-.019531 5.515625.019532 8.269531.011718.785156-.234375 1.015625-1.019532 1.015625C105 27.503906 105 27.539063 105 25.097656c0-2.195312.007813-4.394531-.003906-6.589843-.011719-2.136719-.921875-3.238282-3.050781-3.609375-2.097657-.371094-4.226563-.109375-6.339844-.175782-.84375-.027343-.679688.609375-.679688 1.097657-.007812 3.476562-.042968 6.953125.019532 10.429687.015625.996094-.25 1.285156-1.253907 1.253906-2.167968-.066406-2.171875-.011718-2.171875-2.230468V20M24.71875 30.238281c4.621094-3.769531 3.785156-9.359375.976563-12.136718-3.175782-3.140625-8.335938-3.050782-11.390625.191406-2.839844 3.015625-3.25 8.71875 1.53125 12.125-2.722657-.691406-5.917969-4.804688-5.539063-9.25.4375-5.128906 4.101563-8.761719 9.234375-9.214844 4.382813-.386719 9.011719 2.96875 10.054688 7.289063 1.09375 4.53125-1.023438 9.375-4.867188 10.996093M165 20.863281c.128906-1.8125-.238281-4.019531.214844-6.199218.40625-1.960938 1.414062-2.960938 3.414062-3.101563 1.832032-.128906 3.675782-.054687 5.515625-.085937.496094-.007813.667969.167968.710938.691406.1875 2.433594.207031 2.425781-2.207031 2.433594-.878907.003906-1.765625-.007813-2.632813.09375-1.21875.136718-2.183594 2.46875-1.457031 3.441406.199219.265625.511719.175781.777344.179687 1.320312.007813 2.640625.027344 3.960937-.007812.597656-.015625.820313.136719.839844.789062.085937 2.542969.113281 2.542969-2.460938 2.542969-.679687 0-1.367187.0625-2.039062-.015625-.996094-.117187-1.214844.328125-1.171875 1.222656.0625 1.277344-.003906 2.5625.019531 3.839844.011719.5625-.183594.738281-.757812.769531C165 27.601563 165 27.621094 165 24.964844zm0 0M177.714844 21.078125c0-1.792969-.074219-3.59375.015625-5.386719.140625-2.886718 1.523437-4.164062 4.417969-4.207031 1.476562-.019531 2.957031.035156 4.429687-.019531.789063-.027344 1.007813.234375 1 1.019531-.015625 2.113281.023438 2.105469-2.160156 2.117188-.914063.007812-1.839844-.007813-2.746094.09375-1.246094.136718-2.210937 2.414062-1.488281 3.429687.191406.273438.503906.191406.769531.191406 1.359375.007813 2.71875.03125 4.074219-.007812.613281-.015625.808594.15625.832031.800781.078125 2.53125.101563 2.5-2.464844 2.542969-1.058593.019531-2.417968-.484375-3.09375.246094-.605468.660156-.164062 1.984375-.171875 3.015625-.023437 2.613281-.007812 2.574218-2.566406 2.546875-.804687-.007813-.90625-.324219-.894531-.992188.035156-1.796875.011719-3.59375.011719-5.390625h.035156"}),i.a.createElement("g",{clipPath:"url(#logo-name-d)"},i.a.createElement("path",{d:"M210.878906 20.808594c.09375-1.785156-.167968-3.945313.160157-6.09375.300781-1.976563 1.179687-2.9375 3.148437-3.1875 2.378906-.304688 4.785156-.070313 7.175781-.125.386719-.011719.605469.144531.621094.542969.003906.082031.003906.160156.011719.242187.222656 2.53125.222656 2.53125-2.328125 2.535156-1.15625 0-2.316406-.035156-3.472656.023438-1.269532.066406-1.78125.625-1.789063 1.90625-.015625 3.234375-.039062 6.46875.015625 9.703125.011719.894531-.230469 1.160156-1.136719 1.148437-2.402343-.035156-2.40625.007813-2.40625-2.375zm0 0"})),i.a.createElement("path",{d:"M23.949219 18.628906c2.273437 1.128907 3.460937 4.273438 2.726562 7.210938-.75 2.984375-3.652343 5.164062-6.757812 5.074219-3.148438-.09375-5.859375-2.359375-6.507813-5.390625-.675781-3.1875 1.074219-6.433594 3.375-7.296875-2.636718 2.839843-2.910156 5.910156-.734375 8.257812 1.90625 2.054688 5.21875 2.324219 7.417969.601563 2.570313-2.011719 2.738281-4.957032.480469-8.457032M160.71875 22.878906c0 1.242188-.019531 2.480469.011719 3.71875.011719.582032-.113281.832032-.78125.859375-2.628906.109375-2.628906.136719-2.628906-2.472656 0-1.878906.027343-3.757812-.011719-5.636719-.019531-.722656.105469-1.054687.957031-1.050781 2.453125.007813 2.453125-.035156 2.453125 2.425781v2.15625M157.320313 14.367188c0-1.808594 0-1.808594 1.824218-1.808594 1.597657.003906 1.621094 0 1.636719 1.539062.027344 2.683594.277344 2.144532-2.074219 2.171875-1.691406.015625-1.351562.195313-1.386718-1.902343"}))),i.a.createElement("use",{xlinkHref:"#logo-name-e"})),ue=a(149),he=a(150),me=a(151),ge=a(152);function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let Ee;!function(e){e.FontAwesome="FontAwesome",e.Foundation="Foundation",e.Ionicons="Ionicons",e.MaterialCommunityIcons="MaterialCommunityIcons"}(Ee||(Ee={}));const ve={[Ee.FontAwesome]:ue,[Ee.Foundation]:he,[Ee.Ionicons]:me,[Ee.MaterialCommunityIcons]:ge};var be=({className:e,font:t,onClick:a,onMouseEnter:n,onMouseLeave:o,name:s,style:r={}})=>{let l=s?ve[t][s]||"?":"";"number"==typeof l&&(l=String.fromCharCode(l));const d={fontSize:18,color:c.colors._white,fontFamily:t,fontWeight:400,fontStyle:"normal",...r},p={};return"function"==typeof a&&(p.onClick=a,d.cursor="pointer"),"function"==typeof n&&(p.onMouseEnter=n),"function"==typeof o&&(p.onMouseLeave=o),i.a.createElement("span",fe({className:e,style:d},p),l)};function ye(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Te=a(64),xe=r.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`,Se=Object(r.default)(Te)`
    margin-right: 7px;
    opacity: ${e=>e.visible?1:0};
    transition: opacity ease 0.3s;
`;var _e=Object(o.connect)(e=>{const t=Object(b.a)(e);return{advancedSearchVisible:t.displayAdvanced,search:t}})(class extends i.a.PureComponent{constructor(...e){super(...e),ye(this,"search",e=>{this.props.dispatch(x(e.target.value))}),ye(this,"toggleAdvanced",()=>{this.props.dispatch(S())})}componentWillUnmount(){this.props.advancedSearchVisible&&this.props.dispatch(S())}render(){const{advancedSearchVisible:e,search:t}=this.props;return i.a.createElement(xe,null,i.a.createElement(Se,{type:"text",onChange:this.search,value:t.basicTerm,name:"search",placeholder:"Search",visible:!e,id:"basic-search-input"}),i.a.createElement(be,{font:Ee.FontAwesome,name:"search-plus",onClick:this.toggleAdvanced,style:{fontSize:20,color:e?c.colors.blueLight:c.colors._white}}))}});const{openLink:Ce}=a(21),we=r.default.div`
    display: flex;
    padding: 20px 0 20px 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,Ae=r.default.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`,ke=r.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,Fe=r.default.div`
    display: flex;
    align-items: center;
    border: 1px solid ${c.colors._grey};
    border-radius: 3px;
    padding: 4px 8px;
    cursor: pointer;
    margin-left: 12px;

    :hover {
        background: ${c.colors._grey};
    }
`,De=r.default.span`
    margin-right: 8px;
`,Re=r.default.div`
    height: 20px;
    width: 3px;
    margin-right: 10px;
    border-radius: 3px;
    background: ${c.colors.blueLight};
`;var Pe=()=>i.a.createElement(we,null,i.a.createElement(Ae,null,i.a.createElement(ke,null,i.a.createElement(pe,{style:"margin-left: 3px;"})),i.a.createElement(Fe,{onClick:()=>Ce("https://songriffer.com/mobile")},i.a.createElement(Re,null),i.a.createElement(De,null,"News: SongRiffer on your mobile"),i.a.createElement(be,{font:Ee.Ionicons,name:"ios-phone-portrait"}))),i.a.createElement(l.d,null,i.a.createElement(l.b,{exact:!0,path:y.routes.home,component:_e}))),Oe=a(38),Le=a(42),Ie=a(12);function Me(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Ue=a(93),je=r.default.div`
    cursor: pointer;
`;class Ne extends i.a.Component{constructor(...e){super(...e),Me(this,"state",{edit:!1,_value:this.props.value||""}),Me(this,"onClick",()=>{this.setState({edit:!0})}),Me(this,"onKeyDown",e=>{"Enter"===e.key&&this.props.onSave(this.state._value),"Enter"!==e.key&&"Escape"!==e.key||this.setState({edit:!1})}),Me(this,"onBlur",()=>{this.props.onSave(this.state._value),this.setState({edit:!1})}),Me(this,"onChange",e=>{this.setState({_value:e.target.value})})}render(){const{onFocus:e,placeholder:t,type:a,value:n}=this.props,{edit:o,_value:s}=this.state;return o?i.a.createElement(Ue,{autoFocus:!0,onBlur:this.onBlur,onChange:this.onChange,onFocus:e,onKeyDown:this.onKeyDown,value:s,style:{width:"100%"},type:a}):i.a.createElement(je,{onClick:this.onClick,title:"Click to edit"},n||t)}}Me(Ne,"defaultProps",{onFocus:y.noop,type:"text"});var $e=Ne;var He=r.default.div`
    display: grid;
    grid-template-columns: 300px 80px 1fr 70px 100px 100px 5px;
    grid-gap: 0;
    padding: 0 5px;
    border-bottom: 1px solid #444;
`;const Be=r.default.div`
    flex: 1;
    padding: 7px 5px 7px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,ze=r.default.span`
    color: #777;
`;var Ge=({name:e})=>{const t=Object(Ie.extname)(e),a=e.replace(t,"");return i.a.createElement(Be,{title:e},a,i.a.createElement(ze,null,t))};const Ve=r.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;

    :hover {
        opacity: 1;
    }
`;var We=({onClick:e})=>i.a.createElement(Ve,null,i.a.createElement(be,{font:Ee.MaterialCommunityIcons,name:"dots-vertical",onClick:e,style:{fontSize:25}}));var Ke=i.a.memo(({on:e,onClick:t,onMouseEnter:a,onMouseLeave:n,value:o})=>{const s=e?"ios-star":"ios-star-outline";return i.a.createElement(be,{font:Ee.Ionicons,name:s,onClick:()=>t(o),onMouseEnter:()=>a(o),onMouseLeave:()=>n(o),style:{fontSize:17,paddingRight:3,opacity:e?1:.2}})});function Ye(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Xe=r.default.div`
    cursor: pointer;
`;var qe,Je,Ze,Qe=class extends i.a.Component{constructor(...e){super(...e),Ye(this,"state",{starsHover:!1}),Ye(this,"setRating",e=>{this.props.onChange(e)}),Ye(this,"onMouseEnter",e=>{this.setState({starsHover:e})}),Ye(this,"onMouseLeave",()=>{this.setState({starsHover:!1})})}render(){const{rating:e}=this.props,{starsHover:t}=this.state,a=!1!==t?t:e;return i.a.createElement(Xe,null,Array(5).fill(0).map((e,t)=>i.a.createElement(Ke,{on:null===a?void 0:a>=t,key:`star-${t}`,onClick:this.setRating,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,value:t})))}};function et(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const tt=a(0),{connect:at}=a(11),nt=a(15),it=a(93),{selectTags:ot}=a(16);var st,rt,lt,ct=at(e=>({allTags:ot(e)}))((Ze=Je=class extends tt.Component{constructor(...e){super(...e),et(this,"state",{autocompleteTag:null,newTag:""}),et(this,"onTagKeyDown",e=>{"Enter"===e.key&&this.state.newTag.length&&(this.resetTagWrite(),this.props.addTag(this.state.newTag)),"Tab"===e.key&&(this.state.autocompleteTag&&(this.resetTagWrite(),this.props.addTag(this.state.autocompleteTag)),e.preventDefault()),"Escape"===e.key&&(this.props.quitTagEdit(),e.preventDefault())}),et(this,"resetTagWrite",()=>{this.setState({autocompleteTag:null,newTag:""},this.calculateVisibleTags)}),et(this,"writeTag",e=>{this.setState({autocompleteTag:Object(d.getTagAutocomplete)(this.props.allTags,e.target.value,this.props.blacklist),newTag:e.target.value})})}render(){const{autocompleteTag:e,newTag:t}=this.state,{inputWidth:a,quitTagEdit:n}=this.props;return tt.createElement(it,{autocomplete:e,autoFocus:!0,onBlur:n,onChange:this.writeTag,onKeyDown:this.onTagKeyDown,value:t,style:{width:a,height:22}})}},et(Je,"propTypes",{addTag:nt.func,allTags:nt.any,blacklist:nt.array,quitTagEdit:nt.func}),qe=Ze))||qe;function dt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const pt=a(0),ut=a(4).default,ht=a(15),{connect:mt}=a(11),gt=ut.div`
    position: relative;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    ${e=>e.limitedLayout?((e,t)=>`\n    ${e?`\n            flex-direction: row;\n\n            ${t?"\n                    justify-content: flex-end;\n                ":""}\n        `:""}\n`)(e.editTag,e.moveForInput):null}
    ${e=>e.additionalStyle}
`,ft=ut(p)`
    padding: 0;
    text-align: center;
    border: 2px solid ${c.colors._white};

    :hover {
        background: ${c.colors._white};
        color: ${c.colors._black};
    }
`,Et=ut(p)`
    border: 2px solid ${c.colors._white};

    :hover {
        background: ${c.colors._white};
        color: ${c.colors._black};
    }
`;var vt=mt(e=>({advancedTransitionDone:Object(b.a)(e).advancedTransitionDone,appWidth:e.application.appWidth}))((lt=rt=class extends pt.PureComponent{constructor(...e){super(...e),dt(this,"state",{editTag:!1,firstVisibleTag:!1,fitInput:!0,limitedLayout:!1,sliceTags:!1,visibleTags:this.props.tags.length}),dt(this,"rootRef",pt.createRef()),dt(this,"tagsRef",{}),dt(this,"startEditTag",()=>{this.setState({editTag:!0},this.calculateVisibleTags)}),dt(this,"onTagContextMenu",(e,t)=>{this.props.onTagContextMenu(t,e.clientX,e.clientY)}),dt(this,"onTagClick",e=>{this.props.onTagClick(e)}),dt(this,"addTag",e=>{this.props.addTag(e)}),dt(this,"quitTagEdit",()=>{this.setState({editTag:!1},this.calculateVisibleTags)}),dt(this,"calculateVisibleTags",()=>{if(!this.props.limitedLayout||!this.props.tags.length)return;const e=this.rootRef.current.offsetWidth,t=Object.values(this.tagsRef).filter(Boolean),{tagsTotalWidth:a,visibleTags:n}=t.reduce((t,a)=>(t.tagsTotalWidth+=a.offsetWidth+3,t.tagsTotalWidth<e-26&&t.visibleTags++,t),{tagsTotalWidth:0,visibleTags:0});if(n!==t.length&&(this.setState({visibleTags:n-1}),this.state.editTag||this.setState({sliceTags:!0})),this.state.editTag&&a+100>e){const{firstVisibleTag:a}=t.reverse().reduce((a,n,i)=>(a.tagsTotalWidth+=n.offsetWidth+3,a.tagsTotalWidth>e&&!a.firstVisibleTag&&(a.firstVisibleTag=t.length-(i+1)),a),{firstVisibleTag:!1,tagsTotalWidth:100});this.setState({firstVisibleTag:a,fitInput:!1})}else this.setState({fitInput:!0})})}componentDidMount(){this.calculateVisibleTags()}componentDidUpdate(e){(e.tags.length||this.props.tags.length)&&(e.tags!==this.props.tags||e.appWidth!==this.props.appWidth||!e.advancedTransitionDone&&this.props.advancedTransitionDone)&&this.setState({sliceTags:!1,visibleTags:this.props.tags.length},this.calculateVisibleTags)}render(){const{limitedLayout:e,openTagModal:t,tags:a}=this.props,{editTag:n,firstVisibleTag:i,fitInput:o,sliceTags:s,visibleTags:r}=this.state;return pt.createElement(gt,{ref:this.rootRef,additionalStyle:this.props.rootStyle,limitedLayout:e,editTag:n,moveForInput:!o},a.slice(0,s?r:a.length).map((e,t)=>pt.createElement(f,{key:e,onContextMenu:t=>this.onTagContextMenu(t,e),onClick:()=>this.props.onTagClick(e),title:`Click to search all files with the tag "${e}"`,ref:t=>this.tagsRef[e]=t,additionalStyle:n&&!o&&!1!==i&&t===i?"\n    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%);\n":""},e)),s?pt.createElement(Et,{onClick:t,title:`${a.length-r} tags hidden, click to see them and add more`},a.length-Math.max(0,r),"+"):pt.createElement(pt.Fragment,null,n?pt.createElement(ct,{addTag:this.addTag,blacklist:a,inputWidth:100,quitTagEdit:this.quitTagEdit}):pt.createElement(ft,{className:"add-tag",onClick:this.startEditTag,style:{width:26,height:22}},"+")))}},dt(rt,"propTypes",{advancedTransitionDone:ht.bool,appWidth:ht.number,dispatch:ht.func,limitedLayout:ht.bool,openTagModal:ht.func,onTagClick:ht.func,onTagContextMenu:ht.func,tags:ht.array}),dt(rt,"defaultProps",{onTagContextMenu:()=>{}}),st=lt))||st,bt=a(246);const yt=r.default.div`
    padding: 9px;
    background: #222222FF;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
    z-index: 20;
    border-radius: 3px;
    border: 1px solid ${c.colors._grey};
    opacity: ${e=>e.isVisible?1:0};
    transition: opacity 0.2s ease;
    pointer-events: ${e=>e.isVisible?"auto":"none"};
    ${e=>e.isText?"\n        max-width: 250px;\n        font-size: 14px;\n    ":""}

    ${e=>{switch(e.placement){case"top":return"margin-bottom: 10px;";case"bottom":case"bottom-start":case"bottom-end":return"margin-top: 10px;";default:return""}}}
`,Tt=r.default.div`
    width: 100%;

    ${e=>{switch(e.placement){case"top":return"bottom: 0;";case"bottom":case"bottom-start":case"bottom-end":return"top: 0;";default:return""}}}
`,xt=r.default.div`
    position: absolute;
    box-sizing: content-box;
    width: 12px;
    height: 12px;
    background: #222222FF;
    border: ${c.colors._grey} 1px solid;
    border-left-color: ${c.colors._grey};
    border-top-color: ${c.colors._grey};
    border-right-width: 0;
    border-bottom-width: 0;

    ${e=>{switch(e.placement){case"top":return"\n                    transform: rotate(225deg);\n                    bottom: -7px;\n                    left: calc(50% - 16px);\n                ";case"bottom":return"\n                    transform: rotate(45deg);\n                    top: -7px;\n                    left: -9px;\n                ";case"bottom-start":return"\n                    transform: rotate(45deg);\n                    top: -7px;\n                    left: 5px;\n                ";case"bottom-end":return"\n                    transform: rotate(45deg);\n                    top: -7px;\n                    right: 20px;\n                ";default:return""}}}
`;function St(){return(St=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const _t=r.default.div`
    cursor: pointer;
`;var Ct=({children:e,handler:t,isText:a=!1})=>{const[o,s]=Object(n.useState)(!1),[r,l]=Object(n.useState)(null),[c,d]=Object(n.useState)(null),[p,u]=Object(n.useState)(null),{styles:h,attributes:m}=Object(bt.a)(r,c,{placement:"top",modifiers:[{name:"arrow",options:{element:p}}]}),g=m.popper?m.popper["data-popper-placement"]:"";return i.a.createElement(i.a.Fragment,null,i.a.createElement(_t,{ref:l,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1)},t),i.a.createElement(yt,St({ref:d,style:h.popper},m.popper,{isVisible:o,isText:a,placement:g}),i.a.createElement(Tt,{ref:u,style:h.arrow,placement:g},i.a.createElement(xt,{placement:g})),e))},wt=a(10);function At(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const{openModal:kt}=a(25),{addTag:Ft,handleFileOpen:Dt}=a(22),{displayTagContextMenu:Rt}=a(54),{selectUser:Pt}=a(31),Ot=a(14),Lt=a(3),It=Object(r.default)(He)`
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

    box-shadow: ${e=>e.uploaded?`inset 2px 0px 0 ${c.colors.blueGreen}`:"none"};
`,Mt=r.default.span`
    cursor: pointer;
`,Ut=r.default.div`
    display: flex;
    align-items: center;
`,jt=r.default.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: ${c.colors.redLight};
    color: #fff;
    cursor: pointer;
    font-size: 18px;
`,Nt=r.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;var $t=Object(o.connect)((e,t)=>({missingFiles:e.files.missingFiles,playing:t.selected&&e.player.playing,user:Pt(e)}))(class extends i.a.PureComponent{constructor(...e){super(...e),At(this,"onDoubleClick",()=>{this.props.dispatch(Dt(this.props.file))}),At(this,"addTag",e=>{this.props.dispatch(Ft(this.props.file.hashPath,e))}),At(this,"onTagContextMenu",(e,t,a)=>{this.props.dispatch(Rt(this.props.file.hashPath,e,t,a))}),At(this,"setRating",e=>{this.updateFile({rating:e}),Ot.trackEvent("file","set-rating")}),At(this,"onTagClick",e=>{this.props.onTagClick(e)}),At(this,"updateFile",e=>{wt.a.updateFile(this.props.user,this.props.file.hashPath,e)}),At(this,"saveBPM",e=>{parseInt(e,10)<0||(this.updateFile({bpm:e}),Ot.trackEvent("file","set-bpm"))}),At(this,"saveTimeSignature",e=>{this.updateFile({timeSignature:e}),Ot.trackEvent("file","set-time-signature")}),At(this,"onTimeSignatureFocus",e=>{const t=e.current.value.split("/");e.current.setSelectionRange(0,t[0].length)}),At(this,"openOptionsModal",()=>{this.props.dispatch(kt(Lt.modals.fileOptions,{file:this.props.file}))}),At(this,"onClickMissing",()=>{this.props.dispatch(kt(Lt.modals.fileMissing,{fileHashPath:this.props.file.hashPath}))}),At(this,"openTagModal",()=>{this.props.dispatch(kt(Lt.modals.tags,{fileHashPath:this.props.file.hashPath}))}),At(this,"openCommentModal",()=>{this.props.dispatch(kt(Lt.modals.comment,{fileHashPath:this.props.file.hashPath}))})}renderFile(e){return this.props.file.newImport?i.a.createElement(Le.Spring,{from:{background:"rgba(255, 255, 255, 0.4)"},to:{background:"rgba(255, 255, 255, 0)"},config:{duration:3e3}},({background:t})=>i.a.createElement("div",{style:{background:t}},e)):e}render(){const{file:e,missingFiles:t,playing:a,selected:n}=this.props,o=t.includes(e.hashPath),s=!o||o&&(e.hasComment()||e.uploaded);return this.renderFile(i.a.createElement(It,{archived:e.archived,hasComment:e.hasComment(),isPlayable:Object(Ie.isPlayable)(e),onDoubleClick:this.onDoubleClick,selected:n,id:`file-${e.hashPath}`,uploaded:e.uploaded},i.a.createElement(Ut,null,i.a.createElement(Mt,{className:"play-button",onClick:this.onDoubleClick},i.a.createElement(be,{font:Ee.Ionicons,name:"ios-play",style:{fontSize:15}})),i.a.createElement(Ge,{name:e.name}),o&&!e.uploaded?i.a.createElement(Ct,{handler:i.a.createElement(jt,{onClick:this.onClickMissing},"!"),isText:!0},"We could not locate this file - click to replace it or remove it from your library"):null,s?i.a.createElement(be,{className:"comment-icon",font:Ee.MaterialCommunityIcons,name:"comment-text-outline",onClick:this.openCommentModal}):null),i.a.createElement(Nt,null,e.duration?Object(Ie.formatDuration)(e.duration):"--:--"),i.a.createElement(vt,{addTag:this.addTag,limitedLayout:!0,openTagModal:this.openTagModal,onTagClick:this.onTagClick,onTagContextMenu:this.onTagContextMenu,tags:e.getTags()}),i.a.createElement(Nt,null,i.a.createElement($e,{value:e.bpm,placeholder:"+",onSave:this.saveBPM,type:"number"})),i.a.createElement(Nt,null,i.a.createElement($e,{onFocus:this.onTimeSignatureFocus,onSave:this.saveTimeSignature,value:e.timeSignature})),i.a.createElement(Nt,null,i.a.createElement(Qe,{onChange:this.setRating,rating:e.rating})),i.a.createElement(We,{onClick:this.openOptionsModal})))}}),Ht=a(157),Bt=a.n(Ht),zt=a(51);const{Trail:Gt,config:Vt}=a(42),Wt=r.default.div`
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`,Kt=r.default.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
`,Yt=r.default.div`
    position: relative;
    padding: 50px;
    background: ${y.colors._blackDark};
    border-radius: 3px;
    text-align: center;
    z-index: 2;
    font-size: 25px;
`;class Xt extends n.Component{render(){const e=Bt.a.map(e=>new zt.a(e));return n.createElement(Wt,null,n.createElement(Kt,null,n.createElement(Gt,{items:e,keys:e=>e.path,from:{transform:"translate3d(0, 40px, 0)",opacity:0},to:{transform:"translate3d(0, 0, 0)",opacity:1}},(t,a)=>i=>{const o=Math.max(Math.min(1-a/e.length,i.opacity),0);return n.createElement("div",{key:`fake-${t.path}`,style:{...i,opacity:o}},n.createElement($t,{file:t}))})),n.createElement(Yt,null,"Drag and drop files to start building your library"))}}var qt,Jt,Zt,Qt=a(83),ea=a(16);function ta(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const aa=a(0),{connect:na}=a(11),ia=a(15),oa=a(4).default,sa=a(181),ra=a(72),{selectUser:la}=a(31),{addFiles:ca,disableNewImports:da,migrateLegacyData:pa,setSortRule:ua,setFiles:ha}=a(22),{setAllowFileDragging:ma}=a(54),ga=a(126),fa=a(14),{checkFiles:Ea}=a(21),{colors:va,sortRules:ba}=a(3),ya=oa.div`
    margin-top: 50px;
    color: #555;
`,Ta=oa.div`
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${va.blueLight};
    z-index: 2;
`,xa=oa(He)`
    color: ${va.blueLight};
`,Sa=oa.div`
    padding: 20px 0;
    text-align: center;
`,_a=oa.div`
    display: flex;
    align-items: center;
    cursor: ${e=>e.onClick?"pointer":"default"};
`,Ca=oa(_a)`
    justify-content: center;
`;let wa=na((e,t)=>({_dataToMigrate:e.files._dataToMigrate,_winBackup:e.files._winBackup,files:Object(ea.selectFiles)(e),filesCount:Object(ea.selectFilesCount)(e),location:t.location,pending:e.files.pending,selectedFile:Object(ea.selectSelectedFile)(e),sortRule:Object(ea.selectSortRule)(e),user:la(e)}))((Zt=Jt=class extends aa.PureComponent{constructor(...e){super(...e),ta(this,"listRef",aa.createRef()),ta(this,"onTagClick",e=>{this.props.dispatch(_(e))}),ta(this,"sortByName",()=>{this._sort(ba.NAME_ASC,ba.NAME_DESC)}),ta(this,"sortByDuration",()=>{this._sort(ba.DURATION_ASC,ba.DURATION_DESC)}),ta(this,"sortByBPM",()=>{this._sort(ba.BPM_ASC,ba.BPM_DESC)}),ta(this,"sortByRating",()=>{this._sort(ba.RATING_DESC,ba.RATING_ASC)})}_sort(e,t){return this.props.sortRule!==e&&this.props.sortRule!==t?this.props.dispatch(ua(e)):this.props.sortRule===e?this.props.dispatch(ua(t)):void this.props.dispatch(ua(null))}scrollToFile(e){if(this.listRef.current)try{const t=document.querySelector(e);t&&(this.listRef.current.scrollTop=t.offsetTop-75)}catch(e){}}listenFilesUpdate(){this.removeFileListener=wt.a.listenForFilesUpdate(this.props.user.uid,e=>{this.props.dispatch(ha(e)),Ea(e)})}renderStickyHeader(){const{files:e,filesCount:t,sortRule:a}=this.props;return aa.createElement(Ta,null,t?aa.createElement("div",null,"Showing ",e.length," of ",t," riffs"):aa.createElement("div",null," "),aa.createElement(xa,null,aa.createElement(_a,{onClick:this.sortByName},"Name",a===ba.NAME_ASC?aa.createElement(sa,{rotate:!0}):null,a===ba.NAME_DESC?aa.createElement(sa,null):null),aa.createElement(Ca,{onClick:this.sortByDuration},"Duration",a===ba.DURATION_ASC?aa.createElement(sa,{rotate:!0}):null,a===ba.DURATION_DESC?aa.createElement(sa,null):null),aa.createElement(_a,null,"Tags"),aa.createElement(Ca,{onClick:this.sortByBPM},"BPM",a===ba.BPM_ASC?aa.createElement(sa,{rotate:!0}):null,a===ba.BPM_DESC?aa.createElement(sa,null):null),aa.createElement(Ca,null,"Time Signature"),aa.createElement(_a,{onClick:this.sortByRating},"Rating",a===ba.RATING_ASC?aa.createElement(sa,{rotate:!0}):null,a===ba.RATING_DESC?aa.createElement(sa,null):null),aa.createElement(_a,null)))}componentDidMount(){fa.trackScreen("home"),null!==this.props._dataToMigrate&&this.props.dispatch(pa(this.props._dataToMigrate,this.props._winBackup)),this.listenFilesUpdate(),this.props.dispatch(ma(!0)),this.props.location.hash&&this.scrollToFile(this.props.location.hash)}componentDidUpdate(e){e.files!==this.props.files&&ga.end("search"),e.location.hash!==this.props.location.hash&&this.scrollToFile(this.props.location.hash)}componentWillUnmount(){this.props.dispatch(ma(!1)),this.props.dispatch(da()),this.removeFileListener()}render(){const{files:e,filesCount:t,pending:a,selectedFile:n}=this.props,i=`\n            padding-bottom: ${n?"70px":0};\n        `;return aa.createElement(ra,{stickyHeader:this.renderStickyHeader(),wrapperStyle:i,scrollElementRef:this.listRef},a?aa.createElement(Qt.a,null,aa.createElement(Oe.a,{size:60})):aa.createElement(aa.Fragment,null,t?aa.createElement(aa.Fragment,null,e.length?e.map(e=>aa.createElement($t,{file:e,key:e.hashPath,onTagClick:this.onTagClick,selected:n&&n.hashPath===e.hashPath})):aa.createElement(Sa,null,"No files are matching your search"),aa.createElement(ya,null,"+ Drag and drop a file to add it to your library")):aa.createElement(Xt,null)))}},ta(Jt,"propTypes",{_dataToMigrate:ia.object,dispatch:ia.func,files:ia.array,filesCount:ia.number,selectedFile:ia.any,sortRule:ia.string}),qt=Zt))||qt;const Aa=r.default.div`
    padding: 0 10px 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${c.colors._grey};
`;var ka=({children:e})=>i.a.createElement(Aa,null,e);function Fa(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const{selectFileByHashPath:Da}=a(16),{selectUser:Ra}=a(31),Pa=a(14),Oa=r.default.div`
    min-width: 650px;
`,La=r.default.textarea`
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
`;var Ia=Object(o.connect)((e,t)=>({file:Da(e,{fileHashPath:t.fileHashPath}),user:Ra(e)}))(class extends i.a.Component{constructor(...e){super(...e),Fa(this,"state",{newComment:this.props.file.comment}),Fa(this,"textareaRef",i.a.createRef()),Fa(this,"saveTimeout",null),Fa(this,"save",()=>{wt.a.updateFile(this.props.user,this.props.file.hashPath,{comment:this.state.newComment.trim()}),Pa.trackEvent("file","set-comment")}),Fa(this,"onChange",e=>{this.setState({newComment:e.target.value}),clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(this.save,1e3)}),Fa(this,"onKeyDown",e=>{"Enter"!==e.key||e.shiftKey||(this.props.close(),e.preventDefault())})}componentDidMount(){this.textareaRef.current.focus(),this.textareaRef.current.setSelectionRange(this.state.newComment.length,this.state.newComment.length)}componentWillUnmount(){this.save(),clearTimeout(this.saveTimeout)}render(){const{newComment:e}=this.state;return i.a.createElement(Oa,null,i.a.createElement(ka,null,"Comment for: ",this.props.file.name),i.a.createElement(La,{onChange:this.onChange,onKeyDown:this.onKeyDown,ref:this.textareaRef,value:e,placeholder:"Write a comment about this riff"}))}});function Ma(){return(Ma=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Ua=`1px solid ${c.colors._grey}`;let ja;!function(e){e.DEFAULT="DEFAULT",e.DANGER="DANGER"}(ja||(ja={}));const Na={[ja.DEFAULT]:c.colors._white,[ja.DANGER]:c.colors.red},$a=e=>`\n    padding: 7px;\n    cursor: pointer;\n    background: transparent;\n    transition: background ease 0.1s;\n    color: ${Na[e]};\n    border-bottom: ${Ua};\n\n    :hover {\n        background: ${c.colors._blue};\n    }\n`,Ha=r.default.div`
    ${e=>$a(e.level)}

    ${e=>e.centered?"text-align: center;":""}
    border-top: ${e=>e.first?Ua:"none"};

    ${e=>e.isNaked?"border: none;":""}
`,Ba=r.default.div`
    display: inline-flex;
    width: 25px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
`;var za=({centered:e,children:t,first:a=!1,icon:n,isNaked:o,level:s=ja.DEFAULT,onClick:r})=>i.a.createElement(Ha,{onClick:r,first:a,centered:!!e,level:s,isNaked:!!o},n?i.a.createElement(Ba,null,n):null,t);const Ga=r.default.a`
    ${e=>$a(e.level)}
    ${e=>e.centered?"text-align: center;":""}
    display: block;
    text-decoration: none;

    ${e=>e.isNaked?"border: none;":""}
`,Va=({centered:e,icon:t,isNaked:a,level:n=ja.DEFAULT,text:o,...s})=>i.a.createElement(Ga,Ma({},s,{centered:!!e,isNaked:!!a,level:n}),t?i.a.createElement(Ba,null,t):null,o);function Wa(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Ka=a(80),{removeFile:Ya,replaceFile:Xa}=a(22),{addNotification:qa}=a(94),{importFiles:Ja}=a(69),Za=a(14),{checkFiles:Qa}=a(21),en=a(3),tn=r.default.div`
    margin-top: 20px;
    padding: 50px;
    text-align: center;
    border: 5px dashed ${e=>e.dragging?en.colors.blueLight:en.colors._blue};
    transition: border-color ease 0.2s;
`,an=r.default.div`
    margin-bottom: 20px;
    font-weight: 600;
`;var nn=Object(o.connect)((e,t)=>({file:Object(ea.selectFileByHashPath)(e,{fileHashPath:t.fileHashPath}),files:Object(ea._selectFiles)(e),missingFiles:e.files.missingFiles}))(class extends i.a.Component{constructor(...e){super(...e),Wa(this,"dropRef",i.a.createRef()),Wa(this,"removeDrag",void 0),Wa(this,"state",{dragging:!1,replace:!1}),Wa(this,"checkFileAccess",()=>{Qa(this.props.files)}),Wa(this,"onClickReplace",()=>{this.setState({replace:!0})}),Wa(this,"removeFile",()=>{this.props.close(),this.props.dispatch(Ya(this.props.file.hashPath))}),Wa(this,"replaceFile",e=>{Ja(this.props.dispatch,e.slice(0,1),e=>{const t=e[Object.keys(e)[0]];t&&(this.props.close(),this.props.dispatch(Xa(this.props.file.hashPath,t)))})})}componentDidMount(){Za.trackScreen("modalFileMissing")}componentDidUpdate(e,t){!t.replace&&this.state.replace&&(this.removeDrag=Ka(this.dropRef.current,{onDrop:this.replaceFile,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})),e.missingFiles.includes(e.file.hashPath)&&!this.props.missingFiles.includes(this.props.file.hashPath)&&(this.props.dispatch(qa("File successfully located")),this.props.close())}componentWillUmount(){this.removeDrag&&this.removeDrag()}render(){const{file:e}=this.props,{dragging:t,replace:a}=this.state;return i.a.createElement("div",null,i.a.createElement(an,null,"We could not locate the file ",e.name),a?i.a.createElement(tn,{ref:this.dropRef,dragging:t},"Drag and drop the file here to replace it"):i.a.createElement("div",null,i.a.createElement(za,{onClick:this.checkFileAccess},"Check again"),i.a.createElement(za,{onClick:this.onClickReplace},"Replace it"),i.a.createElement(za,{onClick:this.removeFile},"Remove it from my riff library")))}}),on=a(33),sn=a(84);const rn=r.default.div`
    display: flex;
    flex-direction: ${e=>e.direction};
    justify-content: ${e=>e.justify};
    align-items: ${e=>e.align};
`;var ln=({align:e="center",children:t,direction:a="row",justify:n="space-between"})=>i.a.createElement(rn,{align:e,direction:a,justify:n},t);const cn=r.default.div`
    padding: 0 10px 20px;
    margin-bottom: 20px;
    font-size: 13px;
    border-bottom: 1px solid ${c.colors._grey};
`;var dn,pn=({children:e})=>i.a.createElement(cn,null,e),un=a(22),hn=a(25),mn=a(61);function gn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const{openInFinder:fn}=a(21),En=a(14),{selectFileByHashPath:vn}=a(16),{selectUser:bn}=a(31),{modals:yn}=a(3),{formatFileSize:Tn}=a(124),xn=r.default.div`
    width: 360px;
`;var Sn,_n=Object(o.connect)((e,t)=>({file:vn(e,{fileHashPath:t.file.hashPath}),missingFiles:e.files.missingFiles,user:bn(e)}))(dn=class extends i.a.Component{constructor(...e){super(...e),gn(this,"state",{downloadUrl:"",uploadError:!1,uploading:!1,uploadProgress:0,uploadSuccess:!1}),gn(this,"openInFinder",()=>{fn(this.props.file.path),En.trackEvent("file","open-in-finder"),this.props.close()}),gn(this,"toggleFileArchive",()=>{wt.a.updateFile(this.props.user,this.props.file.hashPath,{archived:!this.props.file.archived}),En.trackEvent("file",this.props.file.archived?"unarchive":"archive"),this.props.close()}),gn(this,"removeFile",()=>{this.props.close(),this.props.dispatch(Object(un.removeFile)(this.props.file.hashPath))}),gn(this,"onUploadProgress",e=>{this.setState({uploadProgress:e})}),gn(this,"onUploadError",e=>{console.error("Error uploading",e),this.setState({uploadError:!0,uploading:!1})}),gn(this,"onUploadSuccess",({uploadName:e})=>{this.setState({uploading:!1,uploadSuccess:!0}),console.log("## success"),wt.a.updateFile(this.props.user,this.props.file.hashPath,{uploaded:!0,uploadName:e})}),gn(this,"onUploadRunning",()=>{this.setState({uploading:!0})}),gn(this,"handleUploadFile",()=>{if(this.props.file.uploaded)wt.a.deleteFile(this.props.user,this.props.file).then(()=>{console.log("### deleted"),wt.a.updateFile(this.props.user,this.props.file.hashPath,{uploaded:!1,uploadName:null})}).catch(e=>{console.log("#### error deleting"),console.log(e)});else{if(!Object(on.canUpload)(this.props.user))return void this.props.dispatch(Object(hn.openModal)(yn.forbiddenAction,{type:mn.a.UPLOAD_FILE}));fetch(this.props.file.escapedPath).then(e=>e.blob()).then(e=>{wt.a.uploadFile(this.props.user,this.props.file,e,{onError:this.onUploadError,onProgress:this.onUploadProgress,onRunning:this.onUploadRunning,onSuccess:this.onUploadSuccess})})}}),gn(this,"openPublicLinkModal",()=>{this.props.dispatch(Object(hn.openModal)(yn.publicLink,{file:this.props.file}))})}setDownloadUrl(){wt.a.getFileDownloadUrl(this.props.user,this.props.file).then(e=>this.setState({downloadUrl:e}))}renderUploadButton(){const{uploadError:e,uploading:t,uploadProgress:a}=this.state;return t?i.a.createElement("span",null,"Uploading... ",a.toFixed(0),"%"):e?i.a.createElement("span",null,"Error uploading"):this.props.file.uploaded?"Remove file from cloud":"Upload file"}componentDidMount(){En.trackScreen("modalFileOptions"),this.props.file.uploaded&&this.setDownloadUrl()}componentDidUpdate(e){!e.file.uploaded&&this.props.file.uploaded&&this.setDownloadUrl()}render(){const{file:e,missingFiles:t,user:a}=this.props,{downloadUrl:n}=this.state,o=t.includes(e.hashPath),s=window.__songRiffer.platform;return i.a.createElement(xn,null,i.a.createElement(ka,null,e.name),i.a.createElement(pn,null,i.a.createElement(ln,null,i.a.createElement("div",null,"Added ",Object(sn.a)(e.added,"MMM do yyyy")),i.a.createElement("div",null,Tn(e.size)))),Object(on.hasUpload)(a)?o&&!e.uploaded?null:i.a.createElement(za,{icon:i.a.createElement(be,{font:Ee.Ionicons,name:"md-cloud-upload"}),onClick:this.handleUploadFile,first:!0,isNaked:!0},this.renderUploadButton()):null,e.uploaded?i.a.createElement(za,{icon:i.a.createElement(be,{font:Ee.Ionicons,name:"md-share"}),onClick:this.openPublicLinkModal,isNaked:!0},"Share"):null,e.uploaded?i.a.createElement(Va,{icon:i.a.createElement(be,{font:Ee.Ionicons,name:"md-cloud-download"}),href:n,download:"download",text:"Download",isNaked:!0}):null,o?null:i.a.createElement(za,{icon:i.a.createElement(be,{font:Ee.Ionicons,name:"ios-folder-open"}),onClick:this.openInFinder,isNaked:!0},"Open in ","darwin"===s?"Finder":"File Explorer"),i.a.createElement(za,{icon:i.a.createElement(be,{font:Ee.Ionicons,name:"ios-archive"}),onClick:this.toggleFileArchive,isNaked:!0},e.archived?"Unarchive":"Archive"," file"),i.a.createElement(za,{icon:i.a.createElement(be,{font:Ee.Ionicons,name:"md-trash",style:{color:c.colors.red}}),onClick:this.removeFile,isNaked:!0,level:ja.DANGER},"Remove from my riff library"))}})||dn,Cn=a(48),wn=a.n(Cn),An=a(21);function kn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Fn=a(127),{selectFileByHashPath:Dn}=a(16),{selectUser:Rn}=a(31),Pn=a(14),On=a(36),Ln=r.default.div`
    width: 360px;
`;var In=Object(o.connect)((e,t)=>({file:Dn(e,{fileHashPath:t.file.hashPath}),user:Rn(e)}))(Sn=class extends i.a.Component{constructor(...e){super(...e),kn(this,"state",{copied:!1,loading:!1}),kn(this,"createPublicLink",()=>{this.setState({loading:!0}),Pn.trackEvent("share","create-link"),On("Share link created"),wt.a.createFilePublicId(this.props.file.hashPath).then(e=>{this.setState({loading:!1})}).catch(e=>{console.error(e),this.setState({loading:!1})})}),kn(this,"copyLink",()=>{Pn.trackEvent("share","copy-link"),On("Share link copied");const e=Object(Ie.getShareLink)(this.props.user.uid,this.props.file.publicId);Object(An.copyToClipboard)(e),this.setState({copied:!0})}),kn(this,"disableLink",()=>{Pn.trackEvent("share","disable-link"),this.setState({loading:!0}),wt.a.deleteFilePublicId(this.props.file.hashPath).then(e=>{this.setState({loading:!1}),console.log(e)}).catch(e=>{this.setState({loading:!1}),console.error(e)})})}componentDidMount(){Pn.trackScreen("modalPublicLink")}render(){const{file:e}=this.props,{copied:t,loading:a}=this.state;return i.a.createElement(Ln,null,i.a.createElement(ka,null,"Share a link to this file"),i.a.createElement(wn.a,{size:"md"},"Everyone who will have the link created will be able to listen to your file but won't be able to edit it."),a?i.a.createElement(Oe.a,{size:50}):e.public&&e.publicId?i.a.createElement(i.a.Fragment,null,i.a.createElement(za,{first:!0,icon:i.a.createElement(be,{font:Ee.MaterialCommunityIcons,name:"content-copy"}),isNaked:!0,onClick:this.copyLink},t?i.a.createElement(i.a.Fragment,null,"Copied to clipboard ",i.a.createElement(Fn,{width:"15"})):i.a.createElement(i.a.Fragment,null,"Copy Link")),i.a.createElement(za,{icon:i.a.createElement(be,{font:Ee.Ionicons,name:"md-trash"}),isNaked:!0,onClick:this.disableLink},"Disable link")):i.a.createElement(za,{onClick:this.createPublicLink,first:!0,isNaked:!0},"Create public link"))}})||Sn,Mn=a(26);function Un(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const jn=a(63),{removeFile:Nn}=a(22),{selectFileByHashPath:$n}=a(16),{unlinkFile:Hn}=a(21),Bn=a(14),zn=r.default.div`
    max-width: 300px;
`,Gn=r.default.div`
    margin-bottom: 25px;
    font-size: 16px;
    line-height: 1.4;
`,Vn=r.default.span`
    color: ${c.colors.bluePastel};
`,Wn=r.default.div`
    display: flex;
    justify-content: space-between;
`,Kn=Object(r.default)(jn)`
    padding: 10px 25px;
`;var Yn=Object(o.connect)((e,t)=>({file:$n(e,{fileHashPath:t.fileHashPath})}))(class extends i.a.Component{constructor(...e){super(...e),Un(this,"removeFile",()=>{this.props.close(),this.props.dispatch(Nn(this.props.file.hashPath,!0))}),Un(this,"deleteFile",()=>{this.props.close(),this.props.dispatch(Nn(this.props.file.hashPath,!0)),Hn(this.props.file.path),Bn.trackEvent("file","delete-file",this.props.file.source)})}componentDidMount(){Bn.trackScreen("modalRemoveFile")}render(){const{file:e}=this.props;let t;return e.source===Mn.SOURCES.RECORD&&(t="recorded with the Recorder"),i.a.createElement(zn,null,i.a.createElement(Gn,null,i.a.createElement(Vn,null,e.name)," was ",t,". Do you want to delete the file as well as remove it from your library?"),i.a.createElement(Wn,null,i.a.createElement(Kn,{onClick:this.removeFile},"No"),i.a.createElement(Kn,{onClick:this.deleteFile},"Yes")))}}),Xn=a(158),qn=a(27),Jn=a.n(qn);var Zn;!function(e){e["16th"]="16",e["32nd"]="32",e["64th"]="64",e.Eighth="8",e.Half="h",e.Quarter="q",e.Whole="w"}(Zn||(Zn={}));const Qn={8:1/8,16:1/16,32:1/32,64:1/64,h:.5,q:.25,w:1},ei=e=>1/(e/2*3),ti={8:ei(8),16:ei(16),32:ei(32),64:ei(64),h:ei(2),q:ei(4),w:ei(1)},ai=(e,t,a)=>{let n=null;for(const t of e[0].Beat){if(t.Notes.includes(a)){n=t;break}if(t.Notes[0].split(" ").includes(a)){n=t;break}}return((e,t)=>{const a=Jn()(e,"[0].Rhythm",[]),n=Jn()(t,"Rhythm[0]['$'].ref");return a.find(e=>e.$.id===n)})(t,n)},ni=e=>[`tabstave notation=true\ntime=${e}\n`],ii=e=>{const t=di(e);return[`${ni(t)}  notes`]},oi=e=>{const t=[],{GPIF:{Beats:a,Notes:n,Rhythms:i}}=e,o=n[0].Note,s=o.length;let r=ii(e),l=null,c=0,d=0,p=1;return o.forEach((n,o)=>{let u="";const h=n.$.id,m=(e=>{const t=Jn()(e,"Properties[0].Property",[]),a={};return t.forEach(e=>{e.Fret&&(a.fret=e.Fret[0]),e.String&&(a.string=6-e.String[0])}),a})(n),g=ai(a,i,h),{noteValue:f,isTuplet:E}=(e=>{const t=Jn()(e,"NoteValue[0]"),a=Zn[t],n=Jn()(e,"PrimaryTuplet[0]");return a||console.log("# undefined note map ",t),{noteValue:a,isTuplet:!!n}})(g);d+=E?ti[f]:Qn[f],f!==l&&(l=f,u+=`:${f} `),u+=`${m.fret}/${m.string} `,E&&3===++c&&(u+="^3^ ",c=0),d>=1&&s-1!==o&&(u+="|",d=0,p+=1,c=0),r.push(u),5===p&&(t.push(si(r)),r=ii(e),p=1,l=null)}),t.push(si(r)),t},si=e=>e.join(" "),ri=e=>{const t=Object.keys(e);return t.length?`options ${t.map(t=>`${t}=${e[t]}`).join(" ")}\n`:""},li=e=>{const t=e.GPIF.Score[0],a={album:"",artist:"",title:""};return["Album","Artist","Title"].forEach(e=>{a[e.toLowerCase()]=t[e]?t[e][0]:""}),a},ci=e=>{return e.GPIF.Tracks[0].Track.map(e=>({name:Jn()(e,"Name[0]","").trim(),tuning:Jn()(e,"Staves[0].Staff[0].Properties[0].Name[0]","").trim()}))},di=e=>{return e.GPIF.MasterBars[0].MasterBar[0].Time[0]};var pi;function ui(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const hi=a(198),mi=hi.VexTab,gi=hi.Artist,fi=hi.Flow.Renderer;gi.NOLOGO=!0;const Ei=a(65),vi=(a(48),a(21)),bi=a(14),yi=a(36),Ti=r.default.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    min-width: 890px;
    height: 70vh;
`,xi=r.default.div`
    margin-bottom: 15px;
`,Si=r.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${c.colors._white};
    margin-bottom: 25px;
    font-size: 18px;
    font-family: serif;
`,_i=r.default.div`
    font-size: 35px;
`,Ci=r.default.div`
    font-weight: 600;
    font-size: 20px;
`,wi=r.default.div`
    width: 890px;
    margin-top: 25px;
    padding: 15px 0 0 10px;
    background: #fff;
    color: #000;
    font-size: 14px;
    font-family: serif;
`,Ai=r.default.div`
    background: #fff;
    height: 100%;
    width: 890px;
    padding: 25px 0 40px;
    overflow-y: auto;
    display: ${e=>e.loading?"none":"block"};
`;var ki=Object(o.connect)((e,t)=>({file:t.file,mxml:e.mxml}))(pi=class extends i.a.Component{constructor(...e){super(...e),ui(this,"state",{error:!1,infos:{album:"",artist:"",title:""},loading:!0,tracks:[]}),ui(this,"scoreRef",i.a.createRef())}async displayScore(e){const t=new fi(this.scoreRef.current,fi.Backends.SVG),a=new gi(10,10,600,{scale:.8}),n=new mi(a);try{((e,t={options:{}})=>new Promise((a,n)=>{Object(Xn.parseString)(e,(e,i)=>{if(e)return console.error(e),void n(e);const o=oi(i);a({firstTimeSignature:di(i),getFullNotation:()=>o.join("\n").trim(),infos:li(i),options:ri(t.options),notations:o,tracks:ci(i)})})}))(e,{options:{width:1100}}).then(e=>{this.setState({loading:!1,infos:e.infos,tracks:e.tracks}),n.parse(e.getFullNotation()),a.render(t)})}catch(e){yi(`Error parsing guitar pro file - ${e.toString()}`),this.setState({error:!0})}}componentDidMount(){bi.trackScreen("modalTabs"),this.props.mxml.mxml&&this.props.mxml.filePath===this.props.file.path||vi.getMXML(this.props.file.path),this.props.mxml.filePath===this.props.file.path&&this.props.mxml.mxml&&setTimeout(()=>{this.displayScore(this.props.mxml.mxml)},0)}componentDidUpdate(e){e.mxml.mxml!==this.props.mxml.mxml&&this.displayScore(this.props.mxml.mxml)}render(){const{error:e,infos:t,loading:a,tracks:n}=this.state;return e?i.a.createElement(Ti,null,i.a.createElement(xi,null,"It looks like something went wrong, sorry about that!"),i.a.createElement(xi,null,"Support for Guitar Pro files is in beta so it may break anytime (like right now)."),i.a.createElement(xi,null,"Feel free to contact us at ",i.a.createElement(Ei,{href:`mailto:${y.email}`},y.email)," so we can see how we can improve it.")):i.a.createElement(Ti,null,a?i.a.createElement(Oe.a,{size:50}):i.a.createElement(i.a.Fragment,null,i.a.createElement(Si,null,i.a.createElement(_i,null,t.title),i.a.createElement(Ci,null,t.artist),i.a.createElement("div",null,t.album)),n.length?i.a.createElement(wi,null,i.a.createElement("div",null,n[0].name),i.a.createElement("div",null,n[0].tuning)):null),i.a.createElement(Ai,{ref:this.scoreRef,loading:a}))}})||pi,Fi=a(54);function Di(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Ri=r.default.div`
    width: 650px;
`,Pi="\n    display: flex;\n    flex-wrap: wrap;\n\n    > * {\n        margin-bottom: 15px;\n    }\n";var Oi=Object(o.connect)((e,t)=>({file:Object(ea.selectFileByHashPath)(e,{fileHashPath:t.fileHashPath})}))(class extends i.a.Component{constructor(...e){super(...e),Di(this,"addTag",e=>{this.props.dispatch(Object(un.addTag)(this.props.file.hashPath,e))}),Di(this,"onTagClick",()=>{}),Di(this,"onTagContextMenu",(e,t,a)=>{this.props.dispatch(Object(Fi.displayTagContextMenu)(this.props.file.hashPath,e,t,a))}),Di(this,"removeTag",e=>{this.props.dispatch(Object(un.removeTag)(this.props.file.hashPath,e))})}render(){const{file:e}=this.props;return i.a.createElement(Ri,null,i.a.createElement(ka,null,"Tags for ",e.name),i.a.createElement(vt,{addTag:this.addTag,onTagClick:this.onTagClick,onTagContextMenu:this.onTagContextMenu,removeTag:this.removeTag,rootStyle:Pi,tags:e.getTags()}))}});function Li(){return(Li=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ii(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Mi=a(197),Ui=a(224),ji=a(225),Ni=r.default.div`
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
`,$i=r.default.div`
    position: relative;
    padding: 35px 20px 20px;
    background: #222;
    border-radius: 3px;

    ${e=>e.additionalStyle}
`,Hi=r.default.div`
    position: absolute;
    top: 10px;
    right: 15px;
    opacity: 0.5;

    :hover {
        opacity: 1;
    }
`;var Bi=Object(o.connect)(e=>({modal:e.modal}))(class extends i.a.Component{constructor(...e){super(...e),Ii(this,"dimmerRef",i.a.createRef()),Ii(this,"onDimmerClick",e=>{e.target===this.dimmerRef.current&&this.props.dispatch(Object(hn.closeModal)())}),Ii(this,"close",()=>{this.props.dispatch(Object(hn.closeModal)())})}getModal(){const{name:e}=this.props.modal,t={[y.modals.comment]:Ia,[y.modals.fileMissing]:nn,[y.modals.fileOptions]:_n,[y.modals.forbiddenAction]:mn.b,[y.modals.invalidFile]:Mi,[y.modals.publicLink]:In,[y.modals.removeFile]:Yn,[y.modals.tabs]:ki,[y.modals.tags]:Oi,[y.modals.text]:Ui,[y.modals.updateAvailable]:ji};if(!t[e])return null;const a=t[e];return i.a.createElement(a,Li({},this.props.modal.props,{close:this.close}))}getRootStyle(){const{name:e}=this.props.modal;switch(e){case y.modals.updateAvailable:return ji.rootStyle;default:return""}}render(){const{modal:e}=this.props;if(!e.name)return null;const t=e.name===y.modals.updateAvailable&&e.props.mandatory;return i.a.createElement(Ni,{onClick:this.onDimmerClick,ref:this.dimmerRef,darker:t},i.a.createElement($i,{additionalStyle:this.getRootStyle()},this.getModal(),t?null:i.a.createElement(Hi,null,i.a.createElement(be,{font:Ee.Ionicons,name:"md-close",onClick:this.close}))))}});function zi(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const{removeNotification:Gi}=a(94),Vi=r.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    padding: 10px 25px 10px 15px;
    top: ${e=>e.active?"18px":"-100%"};
    left: 50%;
    transform: translateX(-50%);
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    color: ${c.colors._white};
    background: #222222ff;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid ${c.colors._grey};
    transition: top ease 0.7s;
    text-align: center;
    cursor: ${e=>e.hasClickAction?"pointer":"default"};
    border-radius: 3px;

    :hover {
        text-decoration: ${e=>e.hasClickAction?"underline":"none"};
    }
`,Wi=r.default.div`
    height: 18px;
    width: 3px;
    margin-right: 10px;
    border-radius: 3px;
    background: ${e=>"success"===e.status?c.colors.greenLight:c.colors.redLight};
`;var Ki=Object(o.connect)(e=>({notification:e.notifications.notification}))(class extends i.a.Component{constructor(...e){super(...e),zi(this,"timeout",void 0),zi(this,"close",()=>{this.props.dispatch(Gi())}),zi(this,"onClick",()=>{"function"==typeof this.props.notification.onClick&&this.props.dispatch(this.props.notification.onClick())}),zi(this,"onMouseEnter",()=>{this.props.notification.onClick&&this.clearTimeout()}),zi(this,"onMouseLeave",()=>{this.props.notification.onClick&&this.startTimeout()})}startTimeout(){clearTimeout(this.timeout),this.timeout=setTimeout(this.close,this.props.notification.timeout||3e3)}clearTimeout(){clearTimeout(this.timeout)}componentDidMount(){void 0!==this.props.notification.id&&this.startTimeout()}componentDidUpdate(e){e.notification.id!==this.props.notification.id&&this.startTimeout()}componentWillUmount(){this.clearTimeout()}render(){const{notification:e}=this.props;return i.a.createElement(Vi,{active:e.active,hasClickAction:"function"==typeof this.props.notification.onClick,onClick:this.onClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},i.a.createElement(Wi,{status:e?e.status:null}),i.a.createElement("div",null,e?e.title:null))}}),Yi=a(37),Xi=a(73),qi=a(80),Ji=a.n(qi),Zi=a(159),Qi=a.n(Zi),eo=a(62);function to(){return(to=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const ao=r.default.div`
    cursor: pointer;
`;var no=({children:e,isText:t=!1,placement:a="bottom-end"})=>{const o=i.a.useRef(null),[s,r]=Object(n.useState)(!1),[l,c]=Object(n.useState)(null),[d,p]=Object(n.useState)(null),[u,h]=Object(n.useState)(null),{styles:m,attributes:g}=Object(bt.a)(l,d,{placement:a,modifiers:[{name:"arrow",options:{element:u}}]}),f=g.popper?g.popper["data-popper-placement"]:"",E=e=>{s&&!o.current.contains(e.target)&&r(!1)};return i.a.useEffect(()=>(window.addEventListener("click",E),()=>{window.removeEventListener("click",E)}),[s]),i.a.createElement("div",{ref:o},i.a.createElement(ao,{ref:c},i.a.createElement(We,{onClick:()=>r(!s)})),i.a.createElement(yt,to({ref:p,style:m.popper},g.popper,{isVisible:s,isText:t,placement:f}),i.a.createElement(Tt,{ref:h,style:m.arrow,placement:f},i.a.createElement(xt,{placement:f})),e))};const io=r.default.div`
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
`,oo=r.default.div`
    flex: 1;
    padding: 7px;
`;var so=({onRemove:e,song:t})=>n.createElement(io,{"data-position":t.position},n.createElement("div",{className:"drag-icon"},n.createElement(be,{font:Ee.MaterialCommunityIcons,name:"drag",style:{cursor:"grab",marginRight:10,fontSize:22}})),t.position+1," • ",n.createElement(oo,null,t.name),n.createElement(no,null,n.createElement(za,{icon:n.createElement(be,{font:Ee.Ionicons,name:"md-trash",style:{color:c.colors.red}}),onClick:e,first:!0,isNaked:!0,level:ja.DANGER},"Remove song")));const ro=e=>e.map((e,t)=>({...e,position:t})),lo=(e,t)=>{const a=e.filter(e=>e.position!==t);return ro(a)};var co=({addNewSong:e,projectId:t,songs:a})=>{const[n,o]=i.a.useState("");let s=null;return i.a.useEffect(()=>()=>{null!==s&&s.destroy()},[]),i.a.createElement(i.a.Fragment,null,a&&a.length?i.a.createElement("div",{ref:e=>{if(e){const n={revertOnSpill:!0};(s=Qi()([e],n)).on("drop",(e,n,i,o)=>{if(!e)return;const s=parseInt(e.dataset.position,10),r=o?parseInt(o.dataset.position,10):a.length,l=((e,t,a)=>{const n=e.find(e=>e.position===t),i=e.filter(e=>e.position!==t);return i.splice(a,0,n),ro(i)})(a,s,r>s?r-1:r);wt.a.updateProject(t,{songs:l})})}}},a.map(e=>i.a.createElement(so,{key:`song-${e.position}`,onRemove:()=>(e=>{wt.a.updateProject(t,{songs:lo(a,e)})})(e.position),song:e}))):i.a.createElement("div",null,"Add the first song to your project:"),i.a.createElement("form",{onSubmit:t=>{t.preventDefault(),n.length&&e(n)}},i.a.createElement(eo.a,{placeholder:"+ Add a song",onChange:e=>o(e.target.value),value:n})))};const po=r.default.div`
    display: grid;
    grid-template-columns: 1fr 5px;
    grid-gap: 0;
    padding: 0 5px;
    border-bottom: 1px solid #444;
    transition: background ease 0.2s;

    :hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;var uo=({files:e,projectId:t,songs:a})=>{const[n,o]=i.a.useState(!1);if(i.a.useEffect(()=>()=>{o(!1)},[]),!e||!e.length)return i.a.createElement("div",null,"Drag and drop a file to add it to this project");return i.a.createElement("div",null,e.map((s,r)=>i.a.createElement(po,{key:`file-${r}-${s.name}`},i.a.createElement(Ge,{name:s.name}),i.a.createElement(no,null,n?i.a.createElement(i.a.Fragment,null,a.map(e=>i.a.createElement("div",{key:`song-selector-${e.name}`},e.position," ",e.name))):i.a.createElement(i.a.Fragment,null,i.a.createElement(za,{icon:i.a.createElement(be,{font:Ee.Ionicons,name:"md-add"}),onClick:()=>o(!0),isNaked:!0},"Add to song"),i.a.createElement(za,{icon:i.a.createElement(be,{font:Ee.Ionicons,name:"md-trash",style:{color:c.colors.red}}),onClick:()=>(a=>{wt.a.updateProject(t,{files:e.filter(e=>e.path!==a)})})(s.path),level:ja.DANGER,isNaked:!0},"Remove from the project"))))))},ho=a(69);function mo(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const go=a(72),fo=r.default.div`
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${c.colors.blueLight};
    z-index: 2;
`,Eo=r.default.div`
    margin-bottom: 10px;

    a {
        display: flex;
        align-items: center;
        color: ${c.colors._white};
        text-decoration: none;
        font-size: 14px;
    }
`,vo=r.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,bo=r.default.div`
    font-size: 14px;
`,yo=r.default.div`
    padding-bottom: 15px;
    flex: 1;
    font-size: 25px;
`,To=r.default.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding-top: 25px;
`,xo=r.default.div`
    width: 50%;
    height: 100%;
    padding: 0 10px;
`;var So,_o=Object(o.connect)()(class extends n.Component{constructor(...e){super(...e),mo(this,"removeDragDrop",void 0),mo(this,"removeListener",void 0),mo(this,"state",{dragging:!1,project:null}),mo(this,"addNewSong",e=>{const t=Jn()(this.state.project,"songs",[]).length;wt.a.addSongToProject(this.state.project.id,{position:t,name:e,files:[]})}),mo(this,"importFiles",e=>{Object(ho.importFiles)(this.props.dispatch,e,e=>{wt.a.addFilesToProject(this.state.project.id,Object.values(e))},!0)})}listenProjectUpdate(){this.removeListener=wt.a.listenForProjectUpdate(this.props.match.params.projectId,e=>{this.setState({project:e})})}componentDidMount(){this.listenProjectUpdate(),this.removeDragDrop=Ji()(document.body,{onDrop:this.importFiles,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})}componentWillUnmount(){"function"==typeof this.removeListener&&this.removeListener(),"function"==typeof this.removeDragDrop&&this.removeDragDrop()}renderHeader(){const{project:e}=this.state;return n.createElement(fo,null,n.createElement(Eo,null,n.createElement(Yi.a,{to:y.routes.projects},n.createElement(be,{font:Ee.Ionicons,name:"ios-arrow-back",style:{marginRight:10}}),"Projects")),n.createElement(vo,null,n.createElement(yo,null,e.name),n.createElement(bo,null,"Last updated: ",Object(Xi.a)(e.updatedAt,{addSuffix:!0}))))}render(){const{dragging:e,project:t}=this.state;return t?n.createElement(go,{stickyHeader:this.renderHeader()},n.createElement(X,{dragging:e}),n.createElement(To,null,n.createElement(xo,null,n.createElement(yo,null,"Songs"),n.createElement(co,{addNewSong:this.addNewSong,projectId:t.id,songs:t.songs,key:t.songs.map(e=>e.name).join("-")})),n.createElement(xo,null,n.createElement(yo,null,"Files"),n.createElement(uo,{files:t.files,projectId:t.id,songs:t.songs})))):n.createElement(go,null,n.createElement(Qt.a,null,n.createElement(Oe.a,{size:60})))}}),Co=a(116);function wo(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Ao=a(234),ko=a(63),Fo=a(127),Do=a(64),Ro=a(72),{addFiles:Po}=(a(48),a(22)),{reset:Oo}=a(141),{pausePlayer:Lo}=a(68),Io=a(14),{getFilesDurationAndBPM:Mo}=a(69),{checkFileExists:Uo,saveMedia:jo}=a(21),No=r.default.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: ${e=>e.recording?0:"-100%"};
    left: 0;
    transition: top 0.3s ease;
`,$o=r.default.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`,Ho=r.default.div`
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
`,Bo=r.default.div`
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
`,zo=Object(r.default)(Bo)`
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
`,Go=r.default.div`
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
`,Vo=r.default.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`,Wo=r.default.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`,Ko=Object(r.default)(Do)`
    width: 70%;
    margin-bottom: 15px;
    text-align: center;
    border: 0;
    border-bottom: 1px solid ${e=>e.error?y.colors.red:"rgba(255, 255, 255, 0.3)"};
    border-radius: 0;
`,Yo=r.default.div`
    margin-bottom: 15px;
    color: ${y.colors.red};
    text-align: center;
`,Xo=Object(r.default)(ko)`
    padding: 5px 15px;
    ${e=>e.background?`background: ${e.background};`:""}
    ${e=>e.disabled?"\n        cursor: not-allowed;\n        opacity: 0.5;\n    ":""}
`,qo=r.default.div`
    text-align: center;
`,Jo=r.default.div`
    margin-bottom: 15px;
`,Zo=r.default.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;var Qo=Object(o.connect)(e=>({recorder:e.recorder}))(So=class extends i.a.Component{constructor(...e){super(...e),wo(this,"chunks",void 0),wo(this,"stream",void 0),wo(this,"state",{audio:null,fileDuration:0,fileSize:0,name:"",playing:!1,recording:!1}),wo(this,"recorder",null),wo(this,"inputRef",i.a.createRef()),wo(this,"player",i.a.createRef()),wo(this,"recordButton",i.a.createRef()),wo(this,"toggleRecording",()=>{this.state.recording?this.stopRecording():this.startRecording()}),wo(this,"startRecording",()=>{this.props.dispatch(Lo(!0)),Io.trackEvent("recorder","start-recording"),this.setState({recording:!0}),this.getAudio()}),wo(this,"pad",e=>1===`${e}`.length?`0${e}`:`${e}`),wo(this,"stopRecording",()=>{Io.trackEvent("recorder","stop-recording");const{day:e,hours:t,minutes:a,month:n,seconds:i,year:o}=this.getDate();this.setState({name:`SongRiffer-idea-${o}-${n}-${e}-${t}${a}${i}`}),null!==this.recorder&&this.recorder.stop()}),wo(this,"onDataAvailable",e=>{this.chunks.push(e.data)}),wo(this,"onRecorderStop",()=>{const e=new Blob(this.chunks,{type:"audio/webm;codecs=opus"});this.setState({audio:URL.createObjectURL(e),recording:!1}),this.inputRef.current.focus()}),wo(this,"recordAudio",e=>{this.recorder=new MediaRecorder(e),this.chunks=[],this.recorder.ondataavailable=this.onDataAvailable,this.recorder.onstop=this.onRecorderStop,this.recorder.start()}),wo(this,"onNameChange",e=>{this.setState({name:e.target.value}),Uo(`${e.target.value}.wav`)}),wo(this,"onNameKeyDown",e=>{"Enter"===e.key&&this.save()}),wo(this,"save",()=>{const e=new AudioContext,t=new Blob(this.chunks,{type:"audio/webm"}),a=new FileReader;this.state.name;a.onload=()=>{e.decodeAudioData(a.result,e=>{const t=Ao(e);this.setState({fileDuration:parseInt(e.duration,10),fileSize:t.byteLength}),jo(y.saveTypes.RECORDER,`${this.state.name}.wav`,new Uint8Array(t))})},a.readAsArrayBuffer(t)}),wo(this,"importFile",()=>{Io.trackEvent("recorder","save",this.state.name),Io.trackEvent("file","file-import","recorder",1);const e=`${this.state.name}.wav`,t=this.props.recorder.filePath,a={duration:this.state.fileDuration,name:e,path:t,size:this.state.fileSize,source:Mn.SOURCES.RECORD,type:"audio/wav"},n=new zt.a(a);this.props.dispatch(Po({[Object(Ie.getFilePathHash)(t)]:n.toJSON()},!0)),Mo(this.props.dispatch,[n])}),wo(this,"reset",()=>{this.chunks=[],this.setState({audio:null,playing:!1}),this.pausePlayer(),Io.trackEvent("recorder","discard")}),wo(this,"togglePlay",()=>{this.setState({playing:!this.state.playing},()=>{this.state.playing?this.playPlayer():this.pausePlayer()})})}getDate(){const e=new Date;return{day:this.pad(e.getDate()),hours:e.getHours(),minutes:e.getMinutes(),month:this.pad(e.getMonth()+1),seconds:e.getSeconds(),year:e.getFullYear()}}getAudio(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.recordAudio)}playPlayer(){this.player.current.play()}pausePlayer(){this.player.current.pause()}componentDidMount(){Io.trackScreen("record")}componentDidUpdate(e){!e.recorder.saveSuccess&&this.props.recorder.saveSuccess&&this.importFile()}componentWillUnmount(){this.props.dispatch(Oo())}render(){const{recorder:e}=this.props,{audio:t,name:a,playing:n,recording:o}=this.state,s=!!e.fileAlreadyExists&&Object(Co.basename)(e.fileAlreadyExists,Object(Ie.extname)(e.fileAlreadyExists))===a;return i.a.createElement(Ro,{wrapperStyle:"\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    padding: 50px;\n    overflow: hidden;\n"},i.a.createElement(No,{recording:o||!t},i.a.createElement($o,null,i.a.createElement(Ho,{onClick:this.toggleRecording,recording:o,ref:this.recordButton},o?"Stop":"Record"),o?i.a.createElement(i.a.Fragment,null,i.a.createElement(Bo,null),i.a.createElement(zo,null)):null)),i.a.createElement(Go,{recording:o||!t},e.saveSuccess?i.a.createElement(qo,null,i.a.createElement(Fo,{width:"50"}),i.a.createElement(Jo,null,a," was successfully added to your library!"),i.a.createElement(Zo,null,i.a.createElement(Yi.a,{to:y.routes.home},i.a.createElement(Xo,null,"Go back to your file list")))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("audio",{src:t,ref:this.player}),i.a.createElement(be,{font:Ee.Ionicons,name:n?"ios-pause":"ios-play",onClick:this.togglePlay,style:{fontSize:30}})),i.a.createElement(Vo,null,i.a.createElement(Ko,{onChange:this.onNameChange,onKeyDown:this.onNameKeyDown,ref:this.inputRef,type:"text",value:a,error:s}),i.a.createElement(Yo,null,s?"This file already exists, please choose another name":i.a.createElement("span",null," ")),i.a.createElement(Wo,null,i.a.createElement(Xo,{onClick:this.reset,background:y.colors._grey},"Discard"),i.a.createElement(Xo,{onClick:this.save,disabled:s},"Save"))))))}})||So;const es=r.default.div`
    height: 10px;
    border-radius: 10px;
    background: ${y.colors._grey};
    overflow: hidden;
`,ts=r.default.div`
    width: ${e=>e.width}%;
    height: 10px;
`,as=({percentage:e})=>i.a.createElement(es,null,i.a.createElement(ts,{width:e,style:{background:e>=90?y.colors.redLight:y.colors.bluePastel}}));function ns(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const is=a(72),os=a(48),{checkUpdate:ss}=a(54),{openModal:rs}=a(25),{signOut:ls}=a(71),{selectUser:cs}=a(31),ds=a(14),{formatFileSize:ps}=a(124),{openLink:us,toggleDevTools:hs}=a(21),ms=a(3),gs="\n    display: flex;\n    height: 100%;\n    justify-content: space-between;\n    align-items: center;\n",fs=r.default.div`
    width: 50%;
    padding: 0 40px;
`,Es=r.default.div`
    margin-bottom: 25px;
    font-weight: 600;
    text-align: center;
    font-size: 18px;
`,vs=r.default.span`
    color: ${ms.colors.redLight};
`,bs=r.default.div`
    margin-top: 30px;
`;var ys=Object(o.connect)(e=>({enableExperimental:e.application.enableExperimental,updateAvailable:e.application.updateAvailable,user:cs(e)}))(class extends i.a.Component{constructor(...e){super(...e),ns(this,"state",{storageSize:0,storageSizeLimit:0,storageSizeLoaded:!1}),ns(this,"signOut",()=>{this.props.dispatch(ls())}),ns(this,"checkUpdates",()=>{this.props.dispatch(ss(!0))})}renderDevMenu(){return i.a.createElement(bs,null,i.a.createElement(Es,null,"Experimental Menu"),i.a.createElement(za,{onClick:hs,first:!0,centered:!0},"Toggle dev tools"))}getUserStorageSize(){return new Promise(async e=>{const{user:t}=this.props;if(void 0!==t.data.storageSize)return e(t.data.storageSize);e(await wt.a.getUserStorageSize(t.uid))})}async fetchStorageSize(){const{user:e}=this.props;if(Object(on.hasUpload)(e)){const t=await this.getUserStorageSize(),a=Object(on.getUserStorageLimit)(e);this.setState({storageSizeLoaded:!0,storageSize:t,storageSizeLimit:a})}}renderAccount(){if(Object(on.hasUpload)(this.props.user)){const{storageSize:e,storageSizeLimit:t,storageSizeLoaded:a}=this.state;if(!a)return i.a.createElement(os,null,i.a.createElement(Oe.a,{size:40}));const n=100*e/t,o=isNaN(n)?0:parseFloat(n.toFixed(2));return i.a.createElement(os,null,i.a.createElement(os,{size:"xs"},"Total storage size used:"),i.a.createElement(os,{size:"xs"},ps(e)," / ",ps(t)," (",o,"%)"),i.a.createElement(os,{size:"s"},i.a.createElement(as,{percentage:o})),this.renderStorageFullMessage(o))}return null}renderStorageFullMessage(e){if(e<90)return null;const t=e>=100?"Your storage space is full!":"Your storage space is almost full!";return i.a.createElement(os,null,t," Visit ",i.a.createElement("a",{href:"https://songriffer.com"},"to increase your plan and be able to add more files"))}componentDidMount(){ds.trackScreen("settings"),this.fetchStorageSize()}render(){const{enableExperimental:e,updateAvailable:t,user:a}=this.props;return i.a.createElement(is,{wrapperStyle:gs},i.a.createElement(fs,null,i.a.createElement(za,{onClick:this.checkUpdates,first:!0,centered:!0},"Check for updates ",t?i.a.createElement(vs,null,"•"):null),i.a.createElement(Va,{href:`mailto:${ms.email}`,centered:!0,text:"Contact Us"}),i.a.createElement(za,{onClick:()=>us(ms.facebookUrl),centered:!0},"Follow us on Facebook"),i.a.createElement(za,{onClick:()=>us(ms.instagramUrl),centered:!0},"Follow us on Instagram"),i.a.createElement(za,{onClick:()=>us(ms.landingUrl),centered:!0},"Visit us songriffer.com"),e&&this.renderDevMenu()),i.a.createElement(fs,null,i.a.createElement(Es,null,"Hello ",a.email,"!"),this.renderAccount(),i.a.createElement(za,{icon:i.a.createElement(be,{font:Ee.Ionicons,name:"ios-log-out"}),onClick:this.signOut,first:!0,centered:!0},"Sign out")))}}),Ts=a(68);function xs(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const{selectSelectedFile:Ss}=a(16),{selectUser:_s}=a(31),Cs=a(14),ws=a(36),As=a(235),ks=r.default.div`
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: ${e=>e.visible?0:"-100%"};
    left: 0;
    background: ${c.colors._blueDark};
    transition: bottom ease 0.4s;
    z-index: 10;
`,Fs=r.default.div`
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
`,Ds=Object(r.default)(Yi.a)`
    display: block;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${c.colors._white};
    text-decoration: none;
`,Rs=r.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
    text-align: center;
`,Ps=r.default.div`
    position: relative;
    padding-right: 10px;
    flex: 1;
    height: 30px;
`,Os=r.default.canvas`
    opacity: 0;
    transition: opacity ease 1s;
    height: 100%;
    width: 100%;
    cursor: pointer;
`,Ls=Object(r.default)(Os)`
    position: absolute;
    width: calc(100% - 10px);
    top: 0;
    left: 0;
    opacity: 1;
    pointer-events: none;
`,Is=new AudioContext;var Ms=Object(o.connect)(e=>({file:Ss(e),missingFiles:e.files.missingFiles,playing:e.player.playing,user:_s(e)}))(class extends i.a.Component{constructor(...e){super(...e),xs(this,"canvas",i.a.createRef()),xs(this,"canvasProgress",i.a.createRef()),xs(this,"player",i.a.createRef()),xs(this,"calculateWaveDataWorker",new As),xs(this,"eventInit",!1),xs(this,"canvasCtx",void 0),xs(this,"canvasProgressCtx",void 0),xs(this,"state",{audioBuffer:null,progress:null,progressPercent:0,waveformData:[]}),xs(this,"togglePlay",()=>{this.props.dispatch(Object(Ts.togglePlay)())}),xs(this,"onWaveformCalculated",e=>{this.setState({waveformData:e.data}),this.canvasCtx.fillStyle=c.colors.purple;const t=this.canvas.current.height/2;e.data.forEach((e,a)=>{const n=1*a,i=(1+e.min)*t,o=Math.max(1,(e.max-e.min)*t);this.canvasCtx.fillRect(n,i,1,o)}),this.canvas.current.style.opacity="1"}),xs(this,"onCanvasClick",e=>{const t=e.clientX-e.target.offsetParent.offsetLeft,a=Math.round(100*t/e.target.offsetWidth),n=this.props.file.duration*a/100;this.player.current.currentTime=n})}playFile(){const{file:e,missingFiles:t}=this.props,a=[];t.includes(e.hashPath)&&e.uploaded&&(Cs.trackEvent("player","download-file"),ws("Playing file from storage"),a.push(wt.a.getFileDownloadUrl(this.props.user,e))),Promise.all(a).then(t=>{const a=t[0]||e.escapedPath;this.player.current.src=a,this.player.current.play(),this.eventInit||this.initEvents(),Cs.trackEvent("player","play-file",Object(Ie.extname)(this.props.file.name)),this.canvasCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),this.canvasProgressCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),this.loadWaveform(a)})}initEvents(){this.eventInit=!0,this.player.current.addEventListener("timeupdate",e=>{let t=0,a=0;this.props.file&&(a=100*(t=~~this.player.current.currentTime)/this.props.file.duration),t!==this.state.progress&&this.setState({progress:t,progressPercent:a})}),this.player.current.addEventListener("ended",e=>{this.togglePlay(),this.setState({progress:0,progressPercent:0})})}handlePlayingState(e){e&&this.player.current.paused&&(Cs.trackEvent("player","play"),this.player.current.play()),e||this.player.current.paused||(Cs.trackEvent("player","pause"),this.player.current.pause())}loadWaveform(e){fetch(e).then(e=>e.arrayBuffer()).then(e=>{Is.decodeAudioData(e,async e=>{this.calculateWaveDataWorker.postMessage({channelData:e.getChannelData(0),width:this.canvas.current.width,pointWidth:1})})})}drawProgressWaveform(){if(!this.props.file)return;const e=this.state.waveformData.slice(0,Math.round(this.state.progressPercent*this.state.waveformData.length/100)),t=this.canvasProgress.current.height/2;this.canvasProgressCtx.fillStyle=c.colors._purpleLight,this.canvasProgressCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),e.forEach((e,a)=>{const n=1*a,i=(1+e.min)*t,o=Math.max(1,(e.max-e.min)*t);this.canvasProgressCtx.fillRect(n,i,1,o)})}componentDidMount(){this.canvasCtx=this.canvas.current.getContext("2d"),this.canvasProgressCtx=this.canvasProgress.current.getContext("2d"),this.calculateWaveDataWorker.addEventListener("message",this.onWaveformCalculated)}componentDidUpdate(e,t){(!e.file&&this.props.file||e.file&&this.props.file&&e.file.path!==this.props.file.path)&&this.playFile(),e.playing!==this.props.playing&&this.handlePlayingState(this.props.playing),t.progress!==this.state.progress&&this.drawProgressWaveform()}render(){const{file:e,playing:t}=this.props,{audioBuffer:a,progress:n,progressPercent:o}=this.state;return i.a.createElement(i.a.Fragment,null,i.a.createElement("audio",{ref:this.player}),i.a.createElement(ks,{visible:!!e},i.a.createElement(Fs,null,i.a.createElement(be,{font:Ee.Ionicons,name:t?"ios-pause":"ios-play",onClick:this.togglePlay,style:{fontSize:30}}),i.a.createElement(Rs,null,i.a.createElement(Ps,null,i.a.createElement(Ls,{ref:this.canvasProgress}),i.a.createElement(Os,{ref:this.canvas,onClick:this.onCanvasClick})),e?i.a.createElement("span",null,Object(Ie.formatDuration)(n)," / ",Object(Ie.formatDuration)(e.duration)):null),e?i.a.createElement(Ds,{to:`${y.routes.home}#file-${this.props.file.hashPath}`,title:e.name},e.name):null)))}});const Us=a(48),js=a(236),{selectUser:Ns}=a(31),$s=r.default.div`
    display: flex;
    flex-direction: column;
    width: 75px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: ${e=>e.playerOpen?"50px":0};
    margin-right: 15px;
    font-size: 13px;
    border-right: 1px solid ${c.colors.blueLight};
`,Hs=r.default.div`
    flex: 1;
`,Bs=r.default.div``,zs=Object(r.default)(Yi.a)`
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
        background: ${c.colors.blueLight};
        transition: width ease 0.3s;
    }
`,Gs=r.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin-bottom: 15px;
    color: ${c.colors._white};

    :hover {
        color: ${c.colors.blueLight};
    }
`;var Vs=Object(o.connect)(e=>({selectedFile:Object(ea.selectSelectedFile)(e),updateAvailable:e.application.updateAvailable,user:Ns(e)}))(class extends i.a.Component{renderItem(e,t){return i.a.createElement(l.b,{path:e,children:({match:a})=>i.a.createElement(zs,{to:e,isActive:a&&a.isExact},i.a.createElement(Gs,null,t))})}render(){const{selectedFile:e,updateAvailable:t,user:a}=this.props,n={fontSize:28,color:c.colors.blueLight};return i.a.createElement($s,{playerOpen:!!e},i.a.createElement(Hs,null,this.renderItem(y.routes.home,i.a.createElement(i.a.Fragment,null,i.a.createElement(Us,{size:"s"},i.a.createElement(be,{font:Ee.Foundation,name:"list",style:n})),i.a.createElement("div",null,"Files"))),this.renderItem(y.routes.recorder,i.a.createElement(i.a.Fragment,null,i.a.createElement(Us,{size:"s"},i.a.createElement(be,{font:Ee.FontAwesome,name:"circle-thin",style:n})),i.a.createElement("div",null,"Recorder"))),this.renderItem(y.routes.stats,i.a.createElement(i.a.Fragment,null,i.a.createElement(Us,{size:"s"},i.a.createElement(js,null)),i.a.createElement("div",null,"Stats"))),a.data.hasProject?this.renderItem(y.routes.projects,i.a.createElement(i.a.Fragment,null,i.a.createElement(Us,{size:"s"},i.a.createElement(be,{font:Ee.MaterialCommunityIcons,name:"album",style:n})),i.a.createElement("div",null,"Projects"))):null),i.a.createElement(Bs,null,this.renderItem(y.routes.account,i.a.createElement(i.a.Fragment,null,i.a.createElement(Us,{size:"s"},i.a.createElement(be,{font:Ee.Ionicons,name:"md-person",style:n})),t?i.a.createElement("div",null,"Update available"):null))))}});function Ws(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Ks=a(63),Ys=a(36),Xs=a(3),qs=r.default.div`
    margin-bottom: 25px;
    color: ${Xs.colors._white};
`,Js=r.default.form`
    width: 100%;
    max-width: 480px;
    margin-bottom: 50px;
    text-align: center;
`,Zs=r.default.div`
    cursor: pointer;
    color: ${Xs.colors._white};

    :hover {
        text-decoration: underline;
    }
`,Qs=r.default.div`
    cursor: pointer;
    color: ${Xs.colors._white};
    margin-top: 40px;
    opacity: 0.6;
    font-size: 13px;

    :hover {
        text-decoration: underline;
        opacity: 1;
    }
`,er=Object(r.default)(Ks)`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 25px;

    opacity: ${e=>e.pending?.5:1};
`,tr=r.default.div`
    margin: 5px 0 25px;
    color: ${Xs.colors.redLight};
`;var ar;!function(e){e["auth/user-not-found"]="We could not find your account, please check your information or create a new account.",e["auth/wrong-password"]="Invalid password.",e["sr/password-mismatch"]="Your confirmation and your password must match"}(ar||(ar={}));var nr=class extends i.a.Component{constructor(...e){super(...e),Ws(this,"state",{authForm:"signin",confirmPassword:"",email:"",error:null,password:"",pending:!1,renderPasswordForgotten:!1,resetEmailSent:!1}),Ws(this,"_mounted",!0),Ws(this,"emailInputRef",i.a.createRef()),Ws(this,"signIn",e=>{e.preventDefault(),this.setState({pending:!0}),wt.a.signInWithEmailPassword(this.state.email,this.state.password).then(()=>{this._mounted&&this.setState({email:"",password:"",pending:!1})}).catch(e=>{this.setState({error:ar[e.code]?ar[e.code]:e.message,pending:!1})})}),Ws(this,"signUp",e=>{e.preventDefault(),this.setState({pending:!0});const{confirmPassword:t,email:a,password:n}=this.state;n===t?wt.a.signUpWithEmailPassword(a,n).then(e=>{Ys(`New user sign up - ${e.user.email}`),this._mounted&&this.setState({email:"",password:"",pending:!1})}).catch(e=>{this.setState({error:e,pending:!1})}):this.setState({error:ar["sr/password-mismatch"]})}),Ws(this,"switchForm",()=>{this.setState({authForm:"signin"===this.state.authForm?"signup":"signin",error:null}),this.focusInput()}),Ws(this,"onChangeEmail",e=>{this.setState({email:e.target.value,error:null})}),Ws(this,"onChangePassword",e=>{this.setState({password:e.target.value,error:null})}),Ws(this,"onChangeConfirmPassword",e=>{this.setState({confirmPassword:e.target.value,error:null})}),Ws(this,"sendResetPassword",e=>{e.preventDefault(),this.state.email.length&&wt.a.sendResetPasswordEmail(this.state.email).then(()=>{this.setState({resetEmailSent:!0})})}),Ws(this,"switchPasswordForgotten",()=>{this.setState({renderPasswordForgotten:!this.state.renderPasswordForgotten,resetEmailSent:!1})})}focusInput(){this.emailInputRef.current.focus()}renderPasswordForgotten(){return i.a.createElement(Js,{onSubmit:this.sendResetPassword},this.state.resetEmailSent?i.a.createElement(qs,null,"An email has been sent to reset your password."):null,this.renderEmailInput(),i.a.createElement(er,null,"Send email to reset your password"),i.a.createElement(Zs,{onClick:this.switchPasswordForgotten},"Return to login"))}renderEmailInput(){return i.a.createElement(qs,null,i.a.createElement(eo.a,{type:"email",placeholder:"Email",onChange:this.onChangeEmail,value:this.state.email,ref:this.emailInputRef}))}componentDidMount(){this.focusInput()}componentWillUnmount(){this._mounted=!1}render(){const{authForm:e,error:t,pending:a,renderPasswordForgotten:n}=this.state;return n?this.renderPasswordForgotten():i.a.createElement(Js,{onSubmit:"signin"===e?this.signIn:this.signUp},this.renderEmailInput(),i.a.createElement(qs,null,i.a.createElement(eo.a,{type:"password",placeholder:"Password",onChange:this.onChangePassword,value:this.state.password})),"signup"===e?i.a.createElement(qs,null,i.a.createElement(eo.a,{type:"password",placeholder:"Confirm Password",onChange:this.onChangeConfirmPassword,value:this.state.confirmPassword})):null,i.a.createElement(er,{pending:a},"Sign ","signin"===e?"in":"up"),t?i.a.createElement(tr,null,t):null,i.a.createElement(Zs,{onClick:this.switchForm},"signin"===e?"Create an account":"I already have an account"),i.a.createElement(Qs,{onClick:this.switchPasswordForgotten},"Forgot your password?"))}};function ir(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const or=a(237),sr=a(14),rr=r.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;var lr,cr,dr,pr=class extends i.a.Component{constructor(...e){super(...e),ir(this,"state",{animationDone:!1}),ir(this,"onAnimationDone",()=>{this.setState({animationDone:!0}),this.props.onAnimationDone()})}componentDidMount(){const e=Math.round(performance.now());sr.trackTiming("app","app-ready",e)}render(){const{authLoading:e,isAuthenticated:t}=this.props,{animationDone:a}=this.state,n=!e&&!t,o=[{component:i.a.createElement(Le.Spring,{from:{angle:"-70deg",opacity:0},to:{angle:"0deg",opacity:1},config:Le.config.slow},e=>i.a.createElement(or,{opacity:e.opacity,angle:e.angle})),key:"logo"},{component:i.a.createElement(Le.Spring,{from:{opacity:0},to:{opacity:n?1:0},config:Le.config.slow},e=>i.a.createElement("div",{style:{opacity:e.opacity}},i.a.createElement(nr,null))),key:"authform"}];return i.a.createElement(rr,null,i.a.createElement(Le.Trail,{items:o,keys:e=>e.key,from:{transform:"translate3d(0, 40px, 0)"},to:{transform:"translate3d(0, 0, 0)"},config:Le.config.slow,onRest:this.onAnimationDone},e=>t=>i.a.createElement("div",{style:t},e.component)))}};function ur(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const hr=a(0),mr=a(4).default,gr=a(15),{connect:fr}=a(11),{removeTag:Er}=a(22),vr=a(3),br=mr.div`
    position: absolute;
    padding: 5px 0;
    top: ${e=>e.top-10}px;
    left: ${e=>e.left-10}px;
    background: rgba(0, 0, 0, 0.8);
    color: ${vr.colors._white};
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
`,yr=mr.div`
    padding: 5px 7px;
    cursor: pointer;

    :hover {
        background: ${vr.colors.blueLight};
        color: ${vr.colors._white};
    }
`;var Tr,xr=fr()((dr=cr=class extends hr.Component{constructor(...e){super(...e),ur(this,"rootRef",hr.createRef()),ur(this,"onDocumentClick",e=>{this.rootRef.current.contains(e.target)||this.props.close()}),ur(this,"removeTag",()=>{this.props.dispatch(Er(this.props.props.fileHashPath,this.props.props.tag)),this.props.close()}),ur(this,"searchTag",()=>{this.props.dispatch(_(this.props.props.tag)),this.props.close()})}componentDidMount(){document.addEventListener("click",this.onDocumentClick,{passive:!0})}componentWillUnmount(){document.removeEventListener("click",this.onDocumentClick)}render(){const{positionX:e,positionY:t}=this.props;return hr.createElement(br,{top:t,left:e,ref:this.rootRef},hr.createElement(yr,{onClick:this.removeTag},"Remove Tag"),hr.createElement(yr,{onClick:this.searchTag},"Search all files with this tag"))}},ur(cr,"propTypes",{close:gr.func,dispatch:gr.func,positionX:gr.number,positionY:gr.number,props:gr.object}),lr=dr))||lr,Sr=a(71);function _r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Cr=a(80),{closeModalEsc:wr}=a(25),{checkUpdate:Ar,closeContextMenu:kr,resize:Fr}=a(54),{togglePlay:Dr}=a(68),{recorderFileAlreadyExists:Rr,recorderSaveSuccess:Pr}=a(141),{setMXML:Or}=a(238),{getFilesDurationAndBPM:Lr,importFiles:Ir}=a(69),Mr=a(14),Ur=a(36),{isAuthenticated:jr,isUserFullyLoaded:Nr,selectUser:$r}=a(31),{checkFilesDBExists:Hr,getAppConfig:Br,onMissingFiles:zr,setCallback:Gr}=a(21),Vr=a(3),Wr=(r.default.div`
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${c.colors._white};
`,r.default.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
`),Kr=r.default.div`
    flex: 1;
    opacity: ${e=>e.dragging?.3:1};
    transition: opacity ease 0.4s;
`,Yr=r.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    // left padding is added in sidebar and header
    // so the sidebar active link stuff is on the side
    padding: 15px 15px 15px 0;
    color: ${c.colors._white};
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
`,Xr=i.a.lazy(()=>a.e(1).then(a.bind(null,248))),qr=()=>i.a.createElement(i.a.Suspense,{fallback:null},i.a.createElement(Xr,null)),Jr=i.a.lazy(()=>a.e(0).then(a.bind(null,249))),Zr=()=>i.a.createElement(i.a.Suspense,{fallback:null},i.a.createElement(Jr,null));var Qr=Object(o.connect)(e=>({advancedSearchVisible:Object(b.a)(e).displayAdvanced,allowFileDragging:e.application.allowFileDragging,appReady:Nr(e),appWidth:e.application.appWidth,authLoading:e.auth.authLoading,contextMenu:e.application.contextMenu,isAuthenticated:jr(e),modalOpen:!!e.modal.name,user:$r(e)}))(Tr=class extends i.a.Component{constructor(...e){super(...e),_r(this,"dragDropActivated",!1),_r(this,"updateTimeout",void 0),_r(this,"fullUserListener",void 0),_r(this,"removeDragDrop",void 0),_r(this,"state",{dragging:!1,hasError:!1,splashAnimationDone:!1}),_r(this,"onSplashAnimationDone",()=>{this.setState({splashAnimationDone:!0})}),_r(this,"importFiles",e=>{Ir(this.props.dispatch,e,e=>{for(let t in e)e[t].newImport=!0;this.props.dispatch(Object(un.addFiles)(e,!0))})}),_r(this,"getDataFromMain",(e,t)=>{switch(e){case Vr.mainConsts.events.CHECK_FILES_DB:t.exists&&this.props.dispatch({type:Vr.actionTypes.SET_MIGRATION_DATA,data:t.data,_winBackup:t._winBackup});break;case Vr.mainConsts.events.DATA_FETCHED:if(t.db===Vr.db.files){this.props.dispatch(Object(un.addFiles)(t.data));const e=[];return Object.values(t.data).forEach(t=>{t.bpm&&t.duration||e.push(t)}),void(e.length&&Lr(this.props.dispatch,e))}t.db===Vr.db.app&&t.data.displayAdvanced&&this.props.dispatch(S());break;case Vr.mainConsts.events.FILE_ALREADY_EXISTS:this.props.dispatch(Rr(t));break;case Vr.mainConsts.events.FILE_SYSTEM_ERROR:console.log(t);break;case Vr.mainConsts.events.FILE_SAVE_SUCCESS:t.saveType===Vr.saveTypes.RECORDER&&this.props.dispatch(Pr(t.filePath));break;case Vr.mainConsts.events.GET_MXLM_SUCCESS:this.props.dispatch(Or(t.filePath,t.mxml));break;case Vr.mainConsts.events.OPEN_DEEPLINK:this.handleDeeplink(t.url)}}),_r(this,"handleDeeplink",e=>{try{const t=e.replace("songriffer://songriffer.com?deeplink=",""),a=JSON.parse(decodeURIComponent(t));a.type,Ur(`Unsupported deeplink type ${a.type} - raw deeplink: ${t}`)}catch(t){const a=`Could not parse deeplink args: ${e}`;console.error(a),Mr.exception(a),Ur(`*Error* ${a}`)}}),_r(this,"onMissingFiles",e=>{this.props.dispatch(Object(un.setMissingFiles)(e.files))}),_r(this,"onKeyDown",e=>{if("Escape"===e.key&&this.props.dispatch(wr()),32===e.keyCode&&e.target===document.body&&(this.props.dispatch(Dr()),e.preventDefault()),!this.props.modalOpen&&e.target&&"INPUT"!==e.target.tagName&&"f"===e.key&&(e.ctrlKey||e.metaKey)){let e=null;e=this.props.advancedSearchVisible?"#advanced-search-input":"#basic-search-input";const t=document.querySelector(e);t&&t.focus()}}),_r(this,"onResize",()=>{window.innerWidth!==this.props.appWidth&&this.props.dispatch(Fr(window.innerWidth))}),_r(this,"setFullUser",e=>{this.props.dispatch(Object(Sr.setFullUserData)(e))}),_r(this,"onAuthChange",e=>{e?(this.props.dispatch(Object(Sr.signIn)(e)),wt.a.getFullUser(e.uid).then(this.setFullUser)):this.props.dispatch(Object(Sr.notLogged)())}),_r(this,"closeContextMenu",()=>{this.props.dispatch(kr())}),_r(this,"catchError",e=>{this.setState({hasError:!0});try{const t=`${e.message} \n \`\`\`${e.error.stack}\`\`\``;Mr.exception(e.message),Ur(`*Error* ${t}`)}catch(e){Ur("*Error* unavailable message"),Mr.exception("Error - unavailable message")}})}detectDragDrop(){this.dragDropActivated=!0,this.removeDragDrop=Cr(document.body,{onDrop:this.importFiles,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})}listenForFullUserUpdate(){wt.a.listenForFullUserUpdate(this.props.user.uid,this.setFullUser).then(e=>{this.fullUserListener=e})}removeFullUserListener(){"function"==typeof this.fullUserListener&&this.fullUserListener()}checkUpdate(){clearTimeout(this.updateTimeout),this.props.dispatch(Ar(!1)),this.updateTimeout=setTimeout(()=>{this.checkUpdate()},Vr.updateInterval)}componentDidCatch(e,t){this.setState({hasError:!0});try{const a=`${e.message} \n \`\`\`${t.componentStack}\`\`\``;Ur(`*Error* ${a}`)}catch(e){Ur("*Did catch error* could not stringify error")}}componentDidMount(){Hr(),window.addEventListener("error",this.catchError,{passive:!0}),this.detectDragDrop(),zr(this.onMissingFiles),Gr(this.getDataFromMain),wt.a.onAuthChange(this.onAuthChange),Mr.trackEvent("app","app-start",window.__songRiffer.platform),Mr.trackEvent("app",`platform-${window.__songRiffer.platform}`,window.__songRiffer.release),Mr.trackEvent("app","appVersion","1.18.0"),document.addEventListener("keydown",this.onKeyDown),window.addEventListener("resize",this.onResize,{passive:!0}),this.onResize(),this.updateTimeout=setTimeout(()=>{this.checkUpdate()},3e3)}componentDidUpdate(e){!this.props.modalOpen&&this.props.allowFileDragging||!this.dragDropActivated||(this.removeDragDrop(),this.dragDropActivated=!1),this.props.modalOpen||!this.props.allowFileDragging||this.dragDropActivated||this.detectDragDrop(),!e.appReady&&this.props.appReady&&Br(),!e.isAuthenticated&&this.props.isAuthenticated?this.listenForFullUserUpdate():e.isAuthenticated&&!this.props.isAuthenticated&&this.removeFullUserListener()}componentWillUnmount(){clearTimeout(this.updateTimeout),this.removeFullUserListener()}render(){const{appReady:e,authLoading:t,contextMenu:a,isAuthenticated:n}=this.props,{dragging:o,hasError:s,splashAnimationDone:r}=this.state;return e&&r?s?i.a.createElement(ce,null):i.a.createElement(l.a,null,i.a.createElement(Yr,null,i.a.createElement(J,null),i.a.createElement(Pe,null),i.a.createElement(Wr,null,i.a.createElement(Vs,null),i.a.createElement(X,{dragging:o}),i.a.createElement(Kr,{dragging:o},i.a.createElement(l.d,null,i.a.createElement(l.b,{path:Vr.routes.project,component:_o}),i.a.createElement(l.b,{path:Vr.routes.projects,component:Zr}),i.a.createElement(l.b,{path:Vr.routes.recorder,component:Qo}),i.a.createElement(l.b,{path:Vr.routes.account,component:ys}),i.a.createElement(l.b,{path:Vr.routes.stats,component:qr}),i.a.createElement(l.b,{exact:!0,path:Vr.routes.home,component:wa}))),i.a.createElement(K,null),i.a.createElement(Bi,null),i.a.createElement(Ki,null),i.a.createElement(Ms,null)),a.active?i.a.createElement(xr,{close:this.closeContextMenu,positionX:a.positionX,positionY:a.positionY,props:a.props}):null)):i.a.createElement(pr,{authLoading:t,isAuthenticated:n,onAnimationDone:this.onSplashAnimationDone})}})||Tr;const el={allowFileDragging:!1,appWidth:0,contextMenu:{},dbLoaded:!1,enableExperimental:!1,updateAvailable:!1},tl={authLoading:!0,data:{createdAt:null,cloudLevel:0,updatedAt:null},user:null},al=e=>({email:e.email,emailVerified:e.emailVerified,uid:e.uid}),nl={_dataToMigrate:null,_winBackup:!1,files:{},missingFiles:[],pending:!0,sortRule:null,selectedFile:null},il=(e,t)=>{const a={...e};for(let e in t)a[e]?a[e]={...a[e],added:t[e].added,size:t[e].size}:a[e]=t[e];return a},ol=(e,t,a)=>{const n={...e};return delete n[t],n[Object(Ie.getFilePathHash)(a.path)]=a,n},sl=(e,t,a)=>{if(!e[t])return e;const n=e[t];return Object.keys(n.tags).map(e=>e.toLowerCase()).includes(a.toLowerCase())?e:{...e,[t]:{...n,tags:{...e[t].tags,[a]:!0}}}},rl={name:null,props:null},ll={filePath:null,mxml:null},{displayUpdateAvailableModal:cl}=a(54),{openModal:dl}=a(25),pl={notification:{active:!1}};let ul=0;const hl=()=>ul++,ml={fileHashPath:void 0,playing:!1},gl={fileAlreadyExists:"",filePath:null,saveSuccess:!1},fl={advancedTransitionDone:!0,archived:y.searchArchived.NON_ARCHIVED,basicTerm:"",bpm:"",bpmDelta:10,displayAdvanced:!1,tags:{},term:""},{combineReducers:El}=a(79),vl=El({application:(e=el,t)=>{switch(t.type){case y.actionTypes.ADD_FILES:return{...e,dbLoaded:!0};case y.actionTypes.UPDATE_AVAILABLE:return{...e,updateAvailable:!0};case y.actionTypes.APP_RESIZE:return{...e,appWidth:t.width};case y.actionTypes.DISPLAY_TAG_CONTEXT_MENU:return{...e,contextMenu:{active:!0,positionX:t.positionX,positionY:t.positionY,props:t.props}};case y.actionTypes.CLOSE_CONTEXT_MENU:return{...e,contextMenu:el.contextMenu};case y.actionTypes.SEARCH_BASIC:return t.term.toLowerCase()===y.DEBUG_KEY_SEQUENCE?{...e,enableExperimental:!0}:e;case y.actionTypes.SET_ALLOW_FILE_DRAGGING:return{...e,allowFileDragging:t.allowFileDragging};default:return e}},auth:(e=tl,t)=>{switch(t.type){case y.actionTypes.AUTH_SET_USER:return{...e,authLoading:!1,user:al(t.user)};case y.actionTypes.AUTH_SIGN_OUT:return tl;case y.actionTypes.AUTH_SET_FULL_USER_DATA:return{...e,data:t.data};case y.actionTypes.AUTH_NOT_LOGGED:return{...e,authLoading:!1};default:return e}},files:(e=nl,t)=>{switch(t.type){case y.actionTypes.SET_FILES:return{...e,files:t.files,pending:!1};case y.actionTypes.SET_MIGRATION_DATA:return{...e,_dataToMigrate:t.data,_winBackup:t._winBackup};case y.actionTypes.ADD_TAG:return{...e,files:sl(e.files,t.hashPath,t.tag)};case y.actionTypes.REMOVE_TAG:const a=e.files[t.hashPath],n={...a.tags};return delete n[t.tag],{...e,files:{...e.files,[t.hashPath]:{...a,tags:n}}};case y.actionTypes.EDIT_FILE:let i;return i=!t.automaticEdit&&t.edit.bpm||t.automaticEdit&&t.edit.bpm&&!e.files[t.hashPath].bpm?t.edit.bpm:e.files[t.hashPath].bpm,{...e,files:{...e.files,[t.hashPath]:{...e.files[t.hashPath],...t.edit,bpm:i}}};case y.actionTypes.ADD_FILES:return{...e,_dataToMigrate:null,files:il(e.files,t.files),pending:!1};case y.actionTypes.REMOVE_FILE:const o={...e.files};return delete o[t.hashPath],{...e,files:o,selectedFile:e.selectedFile===t.hashPath?null:e.selectedFile};case y.actionTypes.PLAY_FILE:return{...e,selectedFile:t.hashPath};case y.actionTypes.REPLACE_FILE:return{...e,files:ol(e.files,t.oldFileHashPath,t.newFile)};case y.actionTypes.SET_MISSING_FILES:return{...e,missingFiles:t.filesHashPath};case y.actionTypes.SET_SORT_RULE:return{...e,sortRule:t.sortRule};case y.actionTypes.PAUSE_PLAYER:return t.unsetSelectedFile?{...e,selectedFile:null}:e;case y.actionTypes.DISABLE_NEW_IMPORTS:const s={...e.files};for(const e of t.files)s[e]={...s[e],newImport:!1};return{...e,files:s};case y.actionTypes.AUTH_SIGN_OUT:return nl;default:return e}},modal:(e=rl,t)=>{switch(t.type){case y.actionTypes.OPEN_MODAL:return{name:t.name,props:t.props};case y.actionTypes.CLOSE_MODAL:return rl;default:return e}},mxml:(e=ll,t)=>{switch(t.type){case y.actionTypes.SET_MXML:return{...e,filePath:t.filePath,mxml:t.mxml};default:return e}},notifications:(e=pl,t)=>{switch(t.type){case y.actionTypes.ADD_NOTIFICATION:return{notification:{...t.notification,active:!0,id:hl()}};case y.actionTypes.REMOVE_NOTIFICATION:return{notification:{...e.notification,active:!1}};case y.actionTypes.ADD_FILES:if(!t.newImports)return e;const a=Object.values(t.files).filter(e=>e.source!==Mn.SOURCES.RECORD).length;return a?{notification:{title:`Imported ${a} file${a>1?"s":""}`,status:"success",active:!0,id:hl()}}:e;case y.actionTypes.REMOVE_FILE:return{notification:{title:"File removed",status:"success",active:!0,id:hl()}};case y.actionTypes.REPLACE_FILE:return{notification:{title:"File successfully replaced",status:"success",active:!0,id:hl()}};case y.actionTypes.NOTIFY_MISSING_FILE:return{notification:{title:`We could not locate the file ${t.file.name}. Click here to fix this`,status:"error",active:!0,id:hl(),onClick:()=>dl(y.modals.fileMissing,{fileHashPath:t.file.hashPath}),timeout:5e3}};case y.actionTypes.UPDATE_AVAILABLE:return{notification:{title:"New version available!",status:"success",active:!0,id:hl(),onClick:()=>e=>{e(cl(t.url,t.changelog))},timeout:5e3}};case y.actionTypes.SEARCH_BASIC:return t.term.toLowerCase()===y.DEBUG_KEY_SEQUENCE?{notification:{title:"Experimental mode activated",status:"success",active:!0,id:hl()}}:e;default:return e}},player:(e=ml,t)=>{switch(t.type){case y.actionTypes.PLAY_FILE:return{...e,fileHashPath:t.hashPath,playing:!0};case y.actionTypes.TOGGLE_PLAY:return{...e,playing:!e.playing};case y.actionTypes.PAUSE_PLAYER:return{...e,playing:!1};case y.actionTypes.REMOVE_FILE:return t.hashPath===e.fileHashPath?ml:e;default:return e}},recorder:(e=gl,t)=>{switch(t.type){case y.actionTypes.RECORDER_FILE_ALREADY_EXISTS:return{...e,fileAlreadyExists:t.fileName};case y.actionTypes.RECORDER_SAVE_SUCCESS:return{...e,filePath:t.filePath,saveSuccess:!0};case y.actionTypes.RECORDER_RESET:return gl;default:return e}},search:(e=fl,t)=>{switch(t.type){case y.actionTypes.SEARCH_BASIC:return{...e,basicTerm:t.term};case y.actionTypes.SET_SEARCH:return{...e,term:t.term,basicTerm:""};case y.actionTypes.TOGGLE_ADVANCED_SEARCH:return{...fl,displayAdvanced:!e.displayAdvanced,advancedTransitionDone:!1};case y.actionTypes.ADVANCED_TRANSITION_DONE:return{...e,advancedTransitionDone:!0};case y.actionTypes.SEARCH_TAG:return{...e,advancedTransitionDone:!1,displayAdvanced:!0,basicTerm:"",tags:{...e.tags,[t.tag]:!0}};case y.actionTypes.REMOVE_SEARCH_TAG:const a={...e.tags};return delete a[t.tag],{...e,basicTerm:"",tags:a};case y.actionTypes.SEARCH_BPM:return{...e,basicTerm:"",bpm:isNaN(parseInt(t.bpm,10))?"":parseInt(t.bpm,10)};case y.actionTypes.SEARCH_BPM_DELTA:return{...e,bpmDelta:isNaN(parseInt(t.bpmDelta,10))?10:parseInt(t.bpmDelta,10)};case y.actionTypes.CLEAR_SEARCH:return{...fl,displayAdvanced:e.displayAdvanced};case y.actionTypes.SET_SEARCH_ARCHIVED:return{...e,archived:t.archived};default:return e}}}),bl=a(3),{saveApp:yl}=a(21),{selectFilesForStorage:Tl}=a(16),{selectUser:xl}=a(31);var Sl=e=>t=>a=>{if(t(a),a.__saveToDB__){const t=e.getState();switch(a.__db){case bl.db.files:const e=!{[bl.actionTypes.REMOVE_FILE]:!0,[bl.actionTypes.REPLACE_FILE]:!0}[a.type],n=Tl(t),i=xl(t);wt.a.saveFullFilesData(i.uid,n,e);break;case bl.db.app:yl({displayAdvanced:Object(b.a)(t).displayAdvanced});break;default:throw new Error("Error trying to save data, unknow db",a.__db)}}};const{createStore:_l,applyMiddleware:Cl}=a(79),wl=_l(vl,Cl(a(239).default,Sl,a(240)));var Al=a(160),kl=a(161),Fl=a(162),Dl=a(163);const Rl=(e,t)=>{const a=`@font-face {\n        src: url(${t});\n        font-family: ${e};\n    }`,n=document.createElement("style");n.type="text/css",n.appendChild(document.createTextNode(a)),document.head.appendChild(n)};Rl("FontAwesome",Al.a),Rl("Foundation",kl.a),Rl("Ionicons",Fl.a),Rl("MaterialCommunityIcons",Dl.a),Object(s.render)(i.a.createElement(o.Provider,{store:wl},i.a.createElement(Qr,null)),document.querySelector("#root"))},25:function(e,t,a){const n=a(3);e.exports.openModal=(e,t)=>({type:n.actionTypes.OPEN_MODAL,name:e,props:t});const i=()=>(e,t)=>{const{modal:a}=t();a.name===n.modals.updateAvailable&&a.props&&a.props.mandatory||e({type:n.actionTypes.CLOSE_MODAL})};e.exports.closeModal=i,e.exports.closeModalEsc=()=>i()},3:function(e,t,a){"use strict";a.r(t),a.d(t,"mainConsts",function(){return i}),a.d(t,"actionTypes",function(){return o}),a.d(t,"db",function(){return s}),a.d(t,"DEBUG_KEY_SEQUENCE",function(){return r}),a.d(t,"email",function(){return l}),a.d(t,"landingUrl",function(){return c}),a.d(t,"facebookUrl",function(){return d}),a.d(t,"instagramUrl",function(){return p}),a.d(t,"messengerUrl",function(){return u}),a.d(t,"modals",function(){return h}),a.d(t,"noop",function(){return m}),a.d(t,"routes",function(){return g}),a.d(t,"saveTypes",function(){return f}),a.d(t,"searchArchived",function(){return E}),a.d(t,"sortRules",function(){return v}),a.d(t,"updateUrl",function(){return b}),a.d(t,"updateInterval",function(){return y});var n=a(6);a.d(t,"colors",function(){return n.colors}),a.d(t,"colorsDarkFont",function(){return n.colorsDarkFont});const i=a(176),o={ADD_TAG:"ADD_TAG",ADD_FILES:"ADD_FILES",ADD_NOTIFICATION:"ADD_NOTIFICATION",ADVANCED_TRANSITION_DONE:"ADVANCED_TRANSITION_DONE",APP_RESIZE:"APP_RESIZE",AUTH_NOT_LOGGED:"AUTH_NOT_LOGGED",AUTH_SET_USER:"AUTH_SET_USER",AUTH_SIGN_OUT:"AUTH_SIGN_OUT",AUTH_SET_FULL_USER_DATA:"AUTH_SET_FULL_USER_DATA",CHECK_UPDATE:"CHECK_UPDATE",CHECK_UPDATE_FAILED:"CHECK_UPDATE_FAILED",CHECK_UPDATE_NO_UPDATE:"CHECK_UPDATE_NO_UPDATE",CHECK_UPDATE_SUCCESS:"CHECK_UPDATE_SUCCESS",CLEAR_SEARCH:"CLEAR_SEARCH",CLOSE_CONTEXT_MENU:"CLOSE_CONTEXT_MENU",CLOSE_MODAL:"CLOSE_MODAL",CLOSE_PLAYER_IF_PAUSED:"CLOSE_PLAYER_IF_PAUSED",DISABLE_NEW_IMPORTS:"DISABLE_NEW_IMPORTS",DISPLAY_TAG_CONTEXT_MENU:"DISPLAY_TAG_CONTEXT_MENU",EDIT_FILE:"EDIT_FILE",NOTIFY_MISSING_FILE:"NOTIFY_MISSING_FILE",OPEN_MODAL:"OPEN_MODAL",PAUSE_PLAYER:"PAUSE_PLAYER",PLAY_FILE:"PLAY_FILE",RECORDER_FILE_ALREADY_EXISTS:"RECORDER_FILE_ALREADY_EXISTS",RECORDER_RESET:"RECORDER_RESET",RECORDER_SAVE_SUCCESS:"RECORDER_SAVE_SUCCESS",REMOVE_FILE:"REMOVE_FILE",REMOVE_NOTIFICATION:"REMOVE_NOTIFICATION",REMOVE_SEARCH_TAG:"REMOVE_SEARCH_TAG",REMOVE_TAG:"REMOVE_TAG",REPLACE_FILE:"REPLACE_FILE",SET_FILES:"SET_FILES",SET_MIGRATION_DATA:"SET_MIGRATION_DATA",SET_SEARCH:"SET_SEARCH",SEARCH_BASIC:"SEARCH_BASIC",SEARCH_BPM:"SEARCH_BPM",SEARCH_BPM_DELTA:"SEARCH_BPM_DELTA",SEARCH_TAG:"SEARCH_TAG",SET_ALLOW_FILE_DRAGGING:"SET_ALLOW_FILE_DRAGGING",SET_MISSING_FILES:"SET_MISSING_FILES",SET_MXML:"SET_MXML",SET_SEARCH_ARCHIVED:"SET_SEARCH_ARCHIVED",SET_SORT_RULE:"SET_SORT_RULE",TOGGLE_ADVANCED_SEARCH:"TOGGLE_ADVANCED_SEARCH",TOGGLE_PLAY:"TOGGLE_PLAY",UPDATE_AVAILABLE:"UPDATE_AVAILABLE"},s={app:"app",files:"files"},r="fish cannot carry guns",l="hello@songriffer.com",c="https://songriffer.com",d="https://www.facebook.com/songrifferapp",p="https://www.instagram.com/songrifferapp",u="http://m.me/songrifferapp",h={comment:"comment",fileMissing:"fileMissing",fileOptions:"fileOptions",forbiddenAction:"forbiddenAction",invalidFile:"invalidFile",publicLink:"publicLink",removeFile:"removeFile",tabs:"tabs",tags:"tags",text:"text",updateAvailable:"updateAvailable"},m=()=>{},g={account:"/account",home:"/",project:"/project/:projectId",projects:"/projects",recorder:"/recorder",stats:"/stats"},f={RECORDER:"RECORDER",TRANSFER:"TRANSFER"},E={ALL:"ALL",ARCHIVED:"ARCHIVED",NON_ARCHIVED:"NON_ARCHIVED"},v={BPM_ASC:"BPM_ASC",BPM_DESC:"BPM_DESC",DURATION_ASC:"DURATION_ASC",DURATION_DESC:"DURATION_DESC",NAME_ASC:"NAME_ASC",NAME_DESC:"NAME_DESC",RATING_ASC:"RATING_ASC",RATING_DESC:"RATING_DESC"},b={darwin:"https://songriffer.com/update-mac.json",win32:"https://songriffer.com/update-win.json"},y=18e5},31:function(e,t,a){const n=a(91),i=e=>e.auth;e.exports.isAuthenticated=e=>!!e.auth.user,e.exports.selectUser=n([i],e=>e.user?{...e.user,data:e.data}:e.user,"selectUser"),e.exports.isUserFullyLoaded=n([i],e=>e.user&&!!Object.keys(e.data).length,"isUserFullyLoaded")},36:function(e,t){e.exports=e=>{try{const t=`${e} - wrapper version: *v${window.__songRiffer.version}* - app version: *1.18.0* - ${window.__songRiffer.platform}`;0,fetch(atob("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVFJZREY3TkJaL0JTQUw4NTFWNC9xbm1TMXVnYUJiTU80aVkwREtabndFa0U="),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t,type:"mrkdwn"})})}catch(e){}}},38:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(3);const s={margin:"auto",background:"none",display:"block"};t.a=({size:e=100})=>i.a.createElement("svg",{style:s,width:`${e}px`,height:`${e}px`,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},i.a.createElement("circle",{cx:"50",cy:"50",fill:"none",stroke:o.colors.blueLight,strokeWidth:"3",r:"29",strokeDasharray:"136.659280431156 47.553093477052",transform:"rotate(194.885 50 50)"},i.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1.1235955056179776s",values:"0 50 50;360 50 50",keyTimes:"0;1"})))},48:function(e,t,a){const n=a(0),i=a(4).default,o=a(15),s={xs:5,s:15,md:25},r=i.div`
    margin-top: ${e=>s[e.size]}px;
    margin-bottom: ${e=>s[e.size]}px;
`,l=({children:e,size:t="md"})=>n.createElement(r,{size:t},e);l.propTypes={children:o.node,size:o.oneOf(["md","s","xs"])},e.exports=l},51:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return r});var n=a(12),i=a(26),o=a(148);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class r{constructor(t){s(this,"added",void 0),s(this,"archived",void 0),s(this,"bpm",void 0),s(this,"comment",void 0),s(this,"deviceSource",void 0),s(this,"duration",void 0),s(this,"escapedPath",void 0),s(this,"name",void 0),s(this,"newImport",void 0),s(this,"path",void 0),s(this,"public",void 0),s(this,"publicId",void 0),s(this,"rating",void 0),s(this,"safePath",void 0),s(this,"size",void 0),s(this,"source",void 0),s(this,"tags",void 0),s(this,"timeSignature",void 0),s(this,"type",void 0),s(this,"uploaded",void 0),s(this,"uploadName",void 0),s(this,"hashPath",void 0),s(this,"_sortRating",void 0),s(this,"_tagsArray",void 0),this.name=t.name,this.path=t.path,this.size=t.size||0,this.type=t.type,this.added=t.added||+new Date,this.archived=t.archived||!1,this.bpm=t.bpm||null,this.comment=t.comment||"",this.deviceSource=t.deviceSource||e.__songRiffer.platform,this.duration=t.duration||null,this.newImport=!0===t.newImport,this.public=!!t.public,this.publicId=t.publicId||null,this.rating=isNaN(parseInt(t.rating,10))?null:parseInt(t.rating,10),this._sortRating=null===this.rating?-1:this.rating,this.source=t.source||i.SOURCES.IMPORT,this.tags=t.tags||{},this._tagsArray=Object.keys(this.tags),this.timeSignature=t.timeSignature||"4/4",this.safePath=this.path.replace(/[\/\s\?\.\(\)\[\]:]/g,"_"),this.escapedPath=Object(o.a)(this.path),this.hashPath=Object(n.getFilePathHash)(this.path),this.uploaded=t.uploaded||!1,this.uploadName=t.uploadName||null}getTags(){return this._tagsArray}getRatingForSort(){return this._sortRating}hasComment(){return!!this.comment.length}isGuitarPro7(){return".gp"===Object(n.extname)(this.path)}toJSON(){return{added:this.added,archived:this.archived,bpm:this.bpm,comment:this.comment,deviceSource:this.deviceSource,duration:this.duration,escapedPath:this.escapedPath,name:this.name,newImport:!1,path:this.path,public:this.public,publicId:this.publicId,rating:this.rating,size:this.size,source:this.source,tags:this.tags,timeSignature:this.timeSignature,type:this.type,uploaded:this.uploaded,uploadName:this.uploadName}}}}).call(this,a(17))},54:function(e,t,a){const n=a(194),i=a(0),o=a(65),{openModal:s}=a(25),{openLink:r}=a(21),l=a(14),c=a(3);e.exports.checkUpdate=(e=!1)=>t=>{t({type:c.actionTypes.CHECK_UPDATE,manual:e});const a=c.updateUrl[window.__songRiffer.platform],l=new Headers;l.append("pragma","no-cache"),l.append("cache-control","no-cache"),fetch(a,{method:"GET",headers:l}).then(e=>e.json()).then(a=>{if(a.version&&n.gt(a.version,window.__songRiffer.version)){const n=6048e5,i=+new Date;if(a.mandatory||a.date+n<i)return void t(p(a.url,a.changelog));t(e?d(a.url,a.changelog):{type:c.actionTypes.UPDATE_AVAILABLE,changelog:a.changelog,url:a.url})}else e&&(t({type:c.actionTypes.CHECK_UPDATE_NO_UPDATE}),t(s(c.modals.text,{title:"No update available",message:i.createElement("div",null,i.createElement("div",null,"Thanks for using SongRiffer!"),i.createElement("div",null,"We hope you're enjoying it and find it helpful."))})))}).catch(n=>{t({type:c.actionTypes.CHECK_UPDATE_FAILED}),e?t(s(c.modals.text,{title:"An error occured",message:i.createElement("div",null,i.createElement("div",null,"Sorry but we were not able to check if a new version is available."),i.createElement("div",null,"Please visit"," ",i.createElement(o,{onClick:()=>r(c.landingUrl)},c.landingUrl)," to manually check."))})):console.warn("Update endpoint failed, ignoring",a)})};const d=(e,t={})=>a=>{a({type:c.actionTypes.CHECK_UPDATE_SUCCESS}),a(s(c.modals.updateAvailable,{changelog:t,url:e}))};e.exports.displayUpdateAvailableModal=d,e.exports.resize=e=>({type:c.actionTypes.APP_RESIZE,width:e}),e.exports.displayTagContextMenu=(e,t,a,n)=>({type:c.actionTypes.DISPLAY_TAG_CONTEXT_MENU,positionX:a,positionY:n,props:{fileHashPath:e,tag:t}}),e.exports.closeContextMenu=()=>({type:c.actionTypes.CLOSE_CONTEXT_MENU});const p=(e,t)=>(l.trackEvent("app","mandatory-updte",window.__songRiffer.version),s(c.modals.updateAvailable,{changelog:t,mandatory:!0,url:e}));e.exports.setAllowFileDragging=e=>({type:c.actionTypes.SET_ALLOW_FILE_DRAGGING,allowFileDragging:e})},61:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return r});var n=a(0),i=a.n(n);let o;!function(e){e.OPEN_FILE="OPEN_FILE",e.UPLOAD_FILE="UPLOAD_FILE"}(o||(o={}));const s={[o.OPEN_FILE]:"You cannot read this file",[o.UPLOAD_FILE]:"You cannot upload this file"},r=({type:e})=>i.a.createElement("div",null,i.a.createElement("div",null,s[e]),i.a.createElement("div",null,"It seems you've reached the maximum storage space with your current plan."),i.a.createElement("div",null,"Please upgrade to another plan or remove some files."))},62:function(e,t,a){"use strict";var n=a(4),i=a(6);const o=a(64),s=Object(n.default)(o)`
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
`;t.a=s},63:function(e,t,a){const n=a(4).default,{colors:i}=a(3),o=n.button`
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
`;e.exports=o},64:function(e,t,a){const n=a(4).default,{colors:i}=a(3),o=n.input`
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
`;e.exports=o},65:function(e,t,a){const n=a(4).default,{colors:i}=a(3);e.exports=n.a`
    color: ${i._white};
    text-decoration: underline;
    cursor: pointer;
`},68:function(e,t,a){"use strict";a.r(t),a.d(t,"playFile",function(){return i}),a.d(t,"togglePlay",function(){return o}),a.d(t,"pausePlayer",function(){return s});var n=a(3);const i=e=>({type:n.actionTypes.PLAY_FILE,hashPath:e}),o=()=>({type:n.actionTypes.TOGGLE_PLAY}),s=(e=!1)=>({type:n.actionTypes.PAUSE_PLAYER,unsetSelectedFile:!0})},69:function(e,t,a){"use strict";a.r(t),a.d(t,"getFilesDurationAndBPM",function(){return u}),a.d(t,"importFiles",function(){return m});var n=a(12),i=a(70),o=a(51);const{analyze:s}=a(241),{openModal:r}=a(25),{editFile:l}=a(22),c=a(14),{modals:d}=a(3),p=new AudioContext,u=(e,t,a=0)=>{const i=t[a];i&&fetch(i.escapedPath||i.path).then(e=>e.arrayBuffer()).then(o=>{p.decodeAudioData(o,async o=>{const s=await h(o),r=parseInt(o.duration,10);(s&&!i.bpm||r&&!i.duration)&&e(l(Object(n.getFilePathHash)(i.path),{duration:r,bpm:s},!0)),u(e,t,a+1)},n=>{u(e,t,a+1)})})},h=e=>new Promise(t=>{s(e).then(e=>{t(parseInt(e,10))}).catch(()=>{t(!1)})}),m=(e,t,a,s=!1)=>{const l=t.reduce((t,a)=>{if(a.isDirectory)return alert("no directory support for now"),t;if(!(e=>{if(e.type.includes("audio"))return!0;const t=Object(n.extname)(e.name).toLowerCase().replace(".","");return!!i.VALID_EXTENSIONS.includes(t)})(a))return e(r(d.invalidFile,{file:a})),t;const s=new o.a(a);return t[Object(n.getFilePathHash)(s.path)]=s.toJSON(),t},{});if(a(l),s)return;const p=Object.values(l);if(p.length){c.trackEvent("file","file-import","import",p.length);try{p.forEach(e=>{c.trackEvent("file","file-name",e.name.replace(Object(n.extname)(e.name),""))})}catch(e){}u(e,p)}}},71:function(e,t,a){"use strict";a.r(t),a.d(t,"signIn",function(){return s}),a.d(t,"setFullUserData",function(){return r}),a.d(t,"signOut",function(){return l}),a.d(t,"notLogged",function(){return c});var n=a(10);const i=a(3),o=a(36),s=e=>(o(`User sign in - ${e.email}`),{type:i.actionTypes.AUTH_SET_USER,user:e}),r=e=>({type:i.actionTypes.AUTH_SET_FULL_USER_DATA,data:e}),l=()=>(n.a.signOut(),{type:i.actionTypes.AUTH_SIGN_OUT}),c=()=>({type:i.actionTypes.AUTH_NOT_LOGGED})},72:function(e,t,a){const n=a(0),i=a(4).default,o=i.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`,s=i.div`
    padding-right: 15px;
    flex: 1;
    overflow-y: auto;
    scroll-behavior: smooth;
    ${e=>e.s}
`;e.exports=({children:e,scrollElementRef:t=null,stickyHeader:a=null,wrapperStyle:i=""})=>n.createElement(o,null,a,n.createElement(s,{s:i,ref:t},e))},83:function(e,t,a){"use strict";var n=a(0),i=a.n(n);const o=a(4).default.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;t.a=({children:e})=>i.a.createElement(o,null,e)},91:function(e,t,a){const n={};e.exports=function(e,t,a,i){if(!Array.isArray(e))throw new Error("Expected sources to be an array.");if("function"!=typeof t)throw new Error("Expected the outputFunc to be a function.");if(!a)throw new Error("Missing selectorName argument.");let o=null;return(s,r,l,c)=>{const d=i||c;l&&(l=`@${a}_${l}`);const p=l?n[l]:o;let u=!!p;if(p&&!r&&p.previousState===s)return p.result;const h=e.map((e,t)=>{const a=e(s,r,e.__forwardMemoizationKey?l:void 0);return u&&(u=p.sourcesValues[t]===a),a});if(u)return d&&console.log(`%cSame result ${a}`,"color: green"),p.result;{const e=t(...h),i={sourcesValues:h,result:e,previousState:s};return l?n[l]=i:o=i,d&&console.log(`%cNew result ${a}`,"color: red"),e}}}},93:function(e,t,a){function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const i=a(0),o=a(15),s=a(4).default,{colors:r,noop:l}=a(3),c=a(64),d=s.div`
    display: ${e=>e.isFullWidth?"block":"inline-block"};
    position: relative;
`,p=s.div`
    position: absolute;
    width: calc(100% - 5px);
    height: 100%;
    padding: 3px 5px;
    border-radius: 10px;
    top: 0;
    left: 1px;
    color: ${r._white};
    pointer-events: none;
    font-size: 16px;
    opacity: 0.4;
    overflow: hidden;
    ${e=>e.additionalStyle}
`,u=s.span`
    color: transparent;
`;class h extends i.PureComponent{constructor(...e){super(...e),n(this,"inputRef",i.createRef()),n(this,"onFocus",()=>{this.props.onFocus(this.inputRef)})}componentDidMount(){this.props.autoFocus&&this.inputRef.current.focus()}render(){const{autocomplete:e,autocompleteStyle:t,autoFocus:a,isFullWidth:n,onBlur:o,onChange:s,onKeyDown:r,style:l,tabIndex:h,type:m,value:g}=this.props,f=e?g.length:0;return i.createElement(d,{isFullWidth:!0},i.createElement(c,{isFullWidth:n,type:m,name:"tag-input",onFocus:this.onFocus,onBlur:o,onChange:s,onKeyDown:r,value:g,ref:this.inputRef,tabIndex:h,style:l,min:1}),i.createElement(p,{additionalStyle:t},i.createElement(u,null,g),e?`${"".repeat(f)}${e.slice(f,e.length)}`:null))}}n(h,"propTypes",{autocomplete:o.string,autocompleteStyle:o.string,autoFocus:o.bool,isFullWidth:o.bool,onBlur:o.func,onChange:o.func,onContextMenu:o.func,onFocus:o.func,onKeyDown:o.func,style:o.object,tabIndex:o.any,type:o.string,value:o.oneOfType([o.string,o.number])}),n(h,"defaultProps",{autocompleteStyle:"",onFocus:l,type:"text"}),e.exports=h},94:function(e,t,a){"use strict";a.r(t),a.d(t,"addNotification",function(){return i}),a.d(t,"removeNotification",function(){return o}),a.d(t,"notifyMissingFile",function(){return s});var n=a(3);const i=(e,t,a="success")=>({type:n.actionTypes.ADD_NOTIFICATION,notification:{title:e,message:t,status:a}}),o=()=>({type:n.actionTypes.REMOVE_NOTIFICATION}),s=e=>({type:n.actionTypes.NOTIFY_MISSING_FILE,file:e})}},[[242,2,4]]]);