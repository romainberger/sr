(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,function(e,t,n){"use strict";n.r(t),n.d(t,"mainConsts",function(){return i}),n.d(t,"actionTypes",function(){return a}),n.d(t,"colors",function(){return s}),n.d(t,"colorsDarkFont",function(){return r}),n.d(t,"db",function(){return o}),n.d(t,"DEBUG_KEY_SEQUENCE",function(){return l}),n.d(t,"deeplinkTypes",function(){return _}),n.d(t,"email",function(){return c}),n.d(t,"landingUrl",function(){return p}),n.d(t,"facebookUrl",function(){return d}),n.d(t,"instagramUrl",function(){return h}),n.d(t,"messengerUrl",function(){return u}),n.d(t,"modals",function(){return m}),n.d(t,"noop",function(){return g}),n.d(t,"routes",function(){return f}),n.d(t,"saveTypes",function(){return E}),n.d(t,"searchArchived",function(){return v}),n.d(t,"sortRules",function(){return b}),n.d(t,"STORAGE_BLOCK_MARGIN",function(){return C}),n.d(t,"STORAGE_LIMITS",function(){return S}),n.d(t,"STORAGE_TIME_LIMIT",function(){return x}),n.d(t,"updateUrl",function(){return y}),n.d(t,"updateInterval",function(){return T}),n.d(t,"VALID_EXTENSIONS",function(){return A}),n.d(t,"VALID_PLAYABLE_EXTENSIONS",function(){return w});const i=n(99),a={ADD_TAG:"ADD_TAG",ADD_FILES:"ADD_FILES",ADD_NOTIFICATION:"ADD_NOTIFICATION",ADVANCED_TRANSITION_DONE:"ADVANCED_TRANSITION_DONE",APP_RESIZE:"APP_RESIZE",AUTH_NOT_LOGGED:"AUTH_NOT_LOGGED",AUTH_SET_USER:"AUTH_SET_USER",AUTH_SIGN_OUT:"AUTH_SIGN_OUT",AUTH_SET_FULL_USER_DATA:"AUTH_SET_FULL_USER_DATA",CHECK_UPDATE:"CHECK_UPDATE",CHECK_UPDATE_FAILED:"CHECK_UPDATE_FAILED",CHECK_UPDATE_NO_UPDATE:"CHECK_UPDATE_NO_UPDATE",CHECK_UPDATE_SUCCESS:"CHECK_UPDATE_SUCCESS",CLEAR_SEARCH:"CLEAR_SEARCH",CLOSE_CONTEXT_MENU:"CLOSE_CONTEXT_MENU",CLOSE_MODAL:"CLOSE_MODAL",CLOSE_PLAYER_IF_PAUSED:"CLOSE_PLAYER_IF_PAUSED",DISABLE_NEW_IMPORTS:"DISABLE_NEW_IMPORTS",DISPLAY_TAG_CONTEXT_MENU:"DISPLAY_TAG_CONTEXT_MENU",EDIT_FILE:"EDIT_FILE",NOTIFY_MISSING_FILE:"NOTIFY_MISSING_FILE",OPEN_MODAL:"OPEN_MODAL",PAUSE_PLAYER:"PAUSE_PLAYER",PLAY_FILE:"PLAY_FILE",RECORDER_FILE_ALREADY_EXISTS:"RECORDER_FILE_ALREADY_EXISTS",RECORDER_RESET:"RECORDER_RESET",RECORDER_SAVE_SUCCESS:"RECORDER_SAVE_SUCCESS",REMOVE_FILE:"REMOVE_FILE",REMOVE_NOTIFICATION:"REMOVE_NOTIFICATION",REMOVE_SEARCH_TAG:"REMOVE_SEARCH_TAG",REMOVE_TAG:"REMOVE_TAG",REPLACE_FILE:"REPLACE_FILE",SET_FILES:"SET_FILES",SET_MIGRATION_DATA:"SET_MIGRATION_DATA",SET_SEARCH:"SET_SEARCH",SEARCH_BASIC:"SEARCH_BASIC",SEARCH_BPM:"SEARCH_BPM",SEARCH_BPM_DELTA:"SEARCH_BPM_DELTA",SEARCH_TAG:"SEARCH_TAG",SET_ALLOW_FILE_DRAGGING:"SET_ALLOW_FILE_DRAGGING",SET_COMMENT:"SET_COMMENT",SET_FILE_UPLOAD_STATUS:"SET_FILE_UPLOAD_STATUS",SET_MISSING_FILES:"SET_MISSING_FILES",SET_MXML:"SET_MXML",SET_RATING:"SET_RATING",SET_SEARCH_ARCHIVED:"SET_SEARCH_ARCHIVED",SET_SORT_RULE:"SET_SORT_RULE",TOGGLE_ADVANCED_SEARCH:"TOGGLE_ADVANCED_SEARCH",TOGGLE_PLAY:"TOGGLE_PLAY",TRANSFER_RESET:"TRANSFER_RESET",TRANSFER_SAVE_SUCCESS:"TRANSFER_SAVE_SUCCESS",TRANSFER_SET_FILE_LIST:"TRANSFER_SET_FILE_LIST",TRANSFER_START_TRANFER:"TRANSFER_START_TRANFER",UPDATE_AVAILABLE:"UPDATE_AVAILABLE"},s={_black:"#1f1f1f",_blackDark:"#020202",_blue:"#3B4096",_blueDark:"#141533",blueGreen:"#49d1af",blueLight:"#8086FF",bluePastel:"#A9C1FF",blueSky:"#64C6E8",cream:"#FEE4C3",fuschia:"#d440d6",green:"#4f8e71",greenLight:"#20FFC1",greenPastel:"#BBFFC7",_grey:"#4f4f4f",_greyDark:"#333",mint:"#D2FF50",orange:"#c17443",pink:"#E694FF",purple:"#a389c9",_purpleLight:"#7C5AB0",red:"#963c57",redLight:"#CC3D68",salmon:"#E8A987",_white:"#dedede",yellow:"#FFE400"},r={blueGreen:!0,bluePastel:!0,blueSky:!0,cream:!0,greenLight:!0,greenPastel:!0,mint:!0,salmon:!0,yellow:!0},o={app:"app",files:"files"},l="fish cannot carry guns",c="hello@songriffer.com",p="https://songriffer.com",d="https://www.facebook.com/songrifferapp",h="https://www.instagram.com/songrifferapp",u="http://m.me/songrifferapp",m={comment:"comment",fileMissing:"fileMissing",fileOptions:"fileOptions",invalidFile:"invalidFile",publicLink:"publicLink",removeFile:"removeFile",tabs:"tabs",tags:"tags",text:"text",updateAvailable:"updateAvailable"},g=()=>{},f={home:"/",project:"/project/:projectId",projects:"/projects",recorder:"/recorder",settings:"/settings",stats:"/stats",transfer:"/transfer"},E={RECORDER:"RECORDER",TRANSFER:"TRANSFER"},v={ALL:"ALL",ARCHIVED:"ARCHIVED",NON_ARCHIVED:"NON_ARCHIVED"},b={BPM_ASC:"BPM_ASC",BPM_DESC:"BPM_DESC",DURATION_ASC:"DURATION_ASC",DURATION_DESC:"DURATION_DESC",NAME_ASC:"NAME_ASC",NAME_DESC:"NAME_DESC",RATING_ASC:"RATING_ASC",RATING_DESC:"RATING_DESC"},y={darwin:"https://songriffer.com/update-mac.json",win32:"https://songriffer.com/update-win.json"},T=18e5,_={LOGIN_FACEBOOK:"LOGIN_FACEBOOK",LOGIN_GOOGLE:"LOGIN_GOOGLE"};var S;!function(e){e[e.CLOUD_LEVEL_3=3221225472]="CLOUD_LEVEL_3",e[e.CLOUD_LEVEL_4=16106127360]="CLOUD_LEVEL_4"}(S||(S={}));const C=104857600,x=1728e5,w=["m4a","mov","mp3","mp4","wav","webm"],A=["gp","gp5","gpx",...w,"pdf"]},,,,function(e,t,n){"use strict";var i=n(16),a=n.n(i),s=(n(115),n(117),n(119),n(151),n(122),n(124),n(33)),r=n.n(s),o=n(41),l=n(50),c=n(1);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=n(9),h=n(24);var u;!function(e){e.libraries="libraries",e.projects="projects",e.stats="stats",e.users="users"}(u||(u={}));console.info("%c[SongRiffer] %cUsing prod firebase project","color: blue","color: black");const m=n(126);t.a=new class{constructor(e){p(this,"firebase",void 0),p(this,"auth",void 0),p(this,"db",void 0),p(this,"storage",void 0),p(this,"remoteConfig",void 0),p(this,"sendResetPasswordEmail",e=>(d.trackEvent("auth","password-reset"),this.auth.sendPasswordResetEmail(e))),p(this,"getFullUserRetry",(e,t)=>{this.db.collection(u.users).doc(e).get().then(n=>{const i=n.data();return i?t(i):setTimeout(()=>{console.log("### Error getting full user, retrying"),this.getFullUserRetry(e,t)},300)})}),this.firebase=a.a.initializeApp(e),this.auth=this.firebase.auth(),this.db=this.firebase.firestore(),this.storage=this.firebase.storage(),a.a.performance(),this.initRemoteConfig()}initRemoteConfig(){this.remoteConfig=this.firebase.remoteConfig(),this.remoteConfig.settings={minimumFetchIntervalMillis:36e5},this.remoteConfig.defaultConfig={STORAGE_LIMIT_LEVEL_3:c.STORAGE_LIMITS.CLOUD_LEVEL_3,STORAGE_LIMIT_LEVEL_4:c.STORAGE_LIMITS.CLOUD_LEVEL_4,FILES_EMPTY_DATA:"[]"},this.fetchRemoteConfig()}async fetchRemoteConfig(){await this.remoteConfig.fetchAndActivate()}async getRemoteConfig(){return await this.fetchRemoteConfig(),{STORAGE_LIMIT_LEVEL_3:this.remoteConfig.getNumber("STORAGE_LIMIT_LEVEL_3"),STORAGE_LIMIT_LEVEL_4:this.remoteConfig.getNumber("STORAGE_LIMIT_LEVEL_4"),FILES_EMPTY_DATA:JSON.parse(this.remoteConfig.getString("FILES_EMPTY_DATA"))}}async getRemoteConfigValue(e,t=null){return(await this.getRemoteConfig())[e]||t}onAuthChange(e){this.auth.onAuthStateChanged(e)}signUpWithEmailPassword(e,t){return new Promise((n,i)=>{d.trackEvent("auth","sign-up"),this.auth.createUserWithEmailAndPassword(e,t).then(e=>{e.user.sendEmailVerification(),n(e)}).catch(t=>{console.error("########### Error with sign up",t),d.exception(`Error in sign up ${t.message}`),h(`*Error* in sign up ${t.message} - email: ${e}`),i(t.message)})})}signInWithEmailPassword(e,t){return new Promise((n,i)=>{d.trackEvent("auth","sign-in"),this.auth.signInWithEmailAndPassword(e,t).then(n).catch(t=>{console.error("########### Error with sign in",t),d.exception(`Error in sign in ${t.message}`),h(`*Error* in sign in ${t.message} - email: ${e}`),i(t)})})}signInWithFacebookToken(e){const t=a.a.auth.FacebookAuthProvider.credential(e);h("New user sign in with facebook"),d.trackEvent("auth","sign-in-facebook"),this.auth.signInWithCredential(t).catch(e=>{console.error("Error login with facebook access token"),d.exception(`Error in sign in with facebook ${e.message}`),h(`*Error* in sign in with facebook ${e.message}`)})}signInWithGoogleToken(e){const t=a.a.auth.GoogleAuthProvider.credential(e);h("New user sign in with google"),d.trackEvent("auth","sign-in-google"),this.auth.signInWithCredential(t).catch(e=>{console.error("Error login with google access token"),d.exception(`Error in sign in with google ${e.message}`),h(`*Error* in sign in with google ${e.message}`)})}signOut(){d.trackEvent("auth","sign-out"),this.auth.signOut()}getFullUser(e){return new Promise(t=>{this.getFullUserRetry(e,e=>{t(this.formatFullUser(e))})})}formatFullUser(e){return{...e,createdAt:e.createdAt.toDate(),updatedAt:e.updatedAt?e.updatedAt.toDate():null}}listenForFullUserUpdate(e,t){return new Promise(n=>{this.getFullUserRetry(e,i=>{const a=this.db.collection(u.users).doc(e).onSnapshot(e=>{try{const n=e.data();t(this.formatFullUser(n))}catch(e){t({})}});n(a)})})}updateFile(e,t,n){return this.db.collection(u.libraries).doc(e.uid).set({files:{[t]:n}},{merge:!0})}saveFullFilesData(e,t,n=!0){return this.db.collection(u.libraries).doc(e).set({files:t},{merge:n}).then(()=>{console.log("Files data saved to cloud")}).catch(t=>{d.exception(`Error saving files data to cloud ${t}`),h(`*Error* error saving files data to cloud - ${e} - ${t}`),console.error("Error saving files data to cloud"),console.log(t)})}listenForFilesUpdate(e,t){return this.db.collection(u.libraries).doc(e).onSnapshot(n=>{try{const i=r()(n.data(),"files",{}),a="string"==typeof i?JSON.parse(i):i;t(a)}catch(i){d.exception(`Error reading files ${i.toString()}`),h(`*Error* reading files for ${e} - ${i.toString()} - raw data: \n ${JSON.stringify(n.data())}`),t({})}})}saveUserStats(e){a.a.functions().httpsCallable("saveUserStats")({stats:{files:{},tags:{},...e}}).then(e=>{console.log("stats data saved to cloud")}).catch(e=>{console.error("Error saving stats data to cloud"),console.log(e)})}getUserStats(e){return new Promise((t,n)=>{this.db.collection(u.stats).doc(e).get().then(e=>{const i=e.data();i?t(i):n()})})}callCallback(e,t,n={}){"function"==typeof e[t]&&e[t](n)}getAudioFileStoragePath(e,t){return`users/${e.uid}/audio/${t}`}uploadFile(e,t,n,i={}){if(!Object(o.hasCorrectCloudLevel)(e,l.a.LEVEL_3))return void console.error("User has invalid cloud level");const s=this.storage.ref(),r=this.getAudioFileStoragePath(e,t);var c={customMetadata:{userUid:e.uid}};const p=s.child(r).put(n,c);console.log("# starting upload for file",r),p.on(a.a.storage.TaskEvent.STATE_CHANGED,e=>{const t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),this.callCallback(i,"onProgress",t),e.state){case a.a.storage.TaskState.PAUSED:console.log("Upload is paused"),this.callCallback(i,"onPause");break;case a.a.storage.TaskState.RUNNING:console.log("Upload is running"),this.callCallback(i,"onRunning")}},t=>{switch(h(`*Error* uploading file for ${e.uid} - error code: ${t.code}`),t.code){case"storage/unauthorized":this.callCallback(i,"onError",{error:"UNAUTHORIZED"});break;case"storage/canceled":console.error("## error upload: canceled"),this.callCallback(i,"onError",{error:"CANCELED"});break;case"storage/unknown":console.error("#error upload, unknown error",t.serverResponse),this.callCallback(i,"onError",{error:"UNKNOWN"})}},()=>{console.log("Success upload"),this.callCallback(i,"onSuccess"),h(`Upload success - ${e.uid}`)})}getFileDownloadUrl(e,t){return new Promise(n=>{const i=this.getAudioFileStoragePath(e,t);this.storage.ref(i).getDownloadURL().then(n).catch(e=>{h(`*Error* cannot get file download url ${e.message}`)})})}deleteFile(e,t){const n=this.storage.ref(),i=this.getAudioFileStoragePath(e,t);return n.child(i).delete()}getUserStorageSize(e){return new Promise((t,n)=>{this.storage.ref().child(`users/${e}/audio`).listAll().then(async e=>{let n=0;for(const t of e.items)n+=(await t.getMetadata()).size;t(n)}).catch(e=>{h(`*Error* cannot get user storage size ${e.message}`),n(e)})})}createFilePublicId(e){return a.a.functions().httpsCallable("createFilePublicId")({fileHashPath:e})}deleteFilePublicId(e){return a.a.functions().httpsCallable("deleteFilePublicId")({fileHashPath:e})}listenForProjectsUpdate(e,t){const n=this.db.collection(u.users).doc(e);return this.db.collection(u.projects).where("creator","==",n).onSnapshot(e=>{const n=[];e.forEach(function(e){n.push({id:e.id,...e.data()})}),t(n)})}createProject(e,t){const n=this.db.collection(u.users).doc(e);return new Promise((e,i)=>{this.db.collection(u.projects).add({creator:n,createdAt:a.a.firestore.FieldValue.serverTimestamp(),name:t,updatedAt:a.a.firestore.FieldValue.serverTimestamp()}).then(n=>{h(`Project created - ${t}`),e(n.id)}).catch(e=>{h(`*Error* Cannot create project - ${e.message}`),i()})})}listenForProjectUpdate(e,t){return this.db.collection(u.projects).doc(e).onSnapshot(e=>{const n=e.data();t({id:e.id,...n,updatedAt:n.updatedAt?n.updatedAt.toDate():new Date})})}addSongToProject(e,t){return this.db.collection(u.projects).doc(e).update({songs:a.a.firestore.FieldValue.arrayUnion(t),updatedAt:a.a.firestore.FieldValue.serverTimestamp()})}}(m)},,,,function(e,t){const n=window.__songRiffer.tracking;e.exports=n},,function(e,t,n){"use strict";n.r(t),n.d(t,"selectFiles",function(){return d}),n.d(t,"_selectFiles",function(){return l}),n.d(t,"selectSortRule",function(){return p}),n.d(t,"selectFilesCount",function(){return h}),n.d(t,"selectSelectedFile",function(){return u}),n.d(t,"selectFileByHashPath",function(){return m}),n.d(t,"selectTags",function(){return g}),n.d(t,"selectFilesForStorage",function(){return f});var i=n(18),a=n(31),s=n(17),r=n(1);const o=n(52),l=e=>e.files.files,c=o([e=>e],e=>new a.a(e),"selectFile"),p=o([e=>e.files],e=>e.sortRule,"selectSortRule"),d=o([l,i.a,p],(e,t,n)=>{if(!e)return[];return((e,t)=>e.sort((e,n)=>{switch(t){case r.sortRules.BPM_ASC:return e.bpm-n.bpm;case r.sortRules.BPM_DESC:return n.bpm-e.bpm;case r.sortRules.DURATION_ASC:return e.duration-n.duration;case r.sortRules.DURATION_DESC:return n.duration-e.duration;case r.sortRules.NAME_ASC:return e.name.toLowerCase().localeCompare(n.name.toLowerCase());case r.sortRules.NAME_DESC:return n.name.toLowerCase().localeCompare(e.name.toLowerCase());case r.sortRules.RATING_ASC:return e.getRatingForSort()-n.getRatingForSort();case r.sortRules.RATING_DESC:return n.getRatingForSort()-e.getRatingForSort();default:return n.added-e.added}}))(Object.keys(e).reduce((n,i)=>{const a=c(e[i],null,`file_${i}`);return a.matchSearch(t)&&n.push(a),n},[]),n)},"selectFiles"),h=o([l,i.a],(e,t)=>t.archived===r.searchArchived.ALL?Object.keys(e).length:Object.values(e).filter(e=>!e.archived).length,"selectFilesCount"),u=o([e=>e,e=>e.files.selectedFile],(e,t)=>m(e,{fileHashPath:t}),"selectSelectedFile"),m=o([(e,t)=>t.fileHashPath,l],(e,t)=>{if(!e)return null;let n;return t[e]&&(n=t[e]),n||(n=Object.values(t).find(t=>Object(s.getFilePathHash)(t.path)===e)),n?c(n,null,`file_${e}`):null},"selectFileByHashPath"),g=o([l],e=>{const t=Object.values(e).reduce((e,t)=>(Object.keys(t.tags).forEach(t=>{e[t.toLowerCase()]=!0}),e),{});return Object.keys(t).sort()},"selectTags"),f=o([l],e=>{const t={};for(let n in e)t[n]=c(e[n],null,`file_${n}`).toJSON();return t},"selectFilesForStorage")},function(e,t,n){"use strict";n.r(t),n.d(t,"setFiles",function(){return v}),n.d(t,"addFiles",function(){return b}),n.d(t,"editFile",function(){return y}),n.d(t,"removeFile",function(){return T}),n.d(t,"setMissingFiles",function(){return _}),n.d(t,"replaceFile",function(){return S}),n.d(t,"addTag",function(){return C}),n.d(t,"removeTag",function(){return x}),n.d(t,"setRating",function(){return w}),n.d(t,"setSortRule",function(){return A}),n.d(t,"setComment",function(){return R}),n.d(t,"disableNewImports",function(){return L}),n.d(t,"setFileUploadedStatus",function(){return k}),n.d(t,"migrateLegacyData",function(){return F}),n.d(t,"handleFileOpen",function(){return D});var i=n(5),a=n(13);const s=n(1),{openModal:r}=n(22),{pausePlayer:o,playFile:l}=n(40),{notifyMissingFile:c}=n(56),{selectFileByHashPath:p,_selectFiles:d}=n(11),{selectUser:h}=n(23),u=n(24),m=n(9),{getFilePathHash:g}=n(17),{clearDB:f,openFile:E}=n(15),v=e=>({type:s.actionTypes.SET_FILES,files:e}),b=(e,t=!1)=>(n,r)=>{if(t){const n={import:0,recorder:0,transfer:0},s=Object.values(e);s.forEach(e=>{e.source===a.b.IMPORT&&n.import++,e.source===a.b.RECORD&&n.recorder++,e.source===a.b.TRANSFER&&n.transfer++}),t&&u(`${s.length} files added:\n${Object.keys(n).map(e=>`${e}: ${n[e]}`).join("\n")}`),i.a.saveUserStats({files:n})}n({type:s.actionTypes.ADD_FILES,files:e,newImports:t,__saveToDB__:t,__db:s.db.files})},y=(e,t,n=!1)=>({type:s.actionTypes.EDIT_FILE,hashPath:e,edit:t,automaticEdit:n,__saveToDB__:!0,__db:s.db.files}),T=(e,t=!1)=>(n,o)=>{const l=o(),c=p(l,{fileHashPath:e}),d=h(l);if(!(c.source!==a.b.RECORD&&c.source!==a.b.TRANSFER||t||c.missing))return void n(r(s.modals.removeFile,{fileHashPath:e}));const u=[];c.uploaded&&u.push(i.a.deleteFile(d,c.name)),Promise.all(u).then(()=>{n({type:s.actionTypes.REMOVE_FILE,hashPath:e,__saveToDB__:!0,__db:s.db.files})})},_=e=>(t,n)=>{const i=d(n()),a=e.filter(e=>i[e]);t({type:s.actionTypes.SET_MISSING_FILES,filesHashPath:a})},S=(e,t)=>({type:s.actionTypes.REPLACE_FILE,oldFileHashPath:e,newFile:t,__saveToDB__:!0,__db:s.db.files}),C=(e,t)=>(n,a)=>{i.a.saveUserStats({tags:{[t.trim().toLowerCase()]:1}}),n({type:s.actionTypes.ADD_TAG,hashPath:e,tag:t.trim(),__saveToDB__:!0,__db:s.db.files})},x=(e,t)=>({type:s.actionTypes.REMOVE_TAG,hashPath:e,tag:t,__saveToDB__:!0,__db:s.db.files}),w=(e,t)=>n=>{n(y(e,{rating:t})),n({type:s.actionTypes.SET_RATING})},A=e=>({type:s.actionTypes.SET_SORT_RULE,sortRule:e}),R=(e,t)=>n=>{n(y(e,{comment:t.trim()})),n({type:s.actionTypes.SET_COMMENT})},L=()=>(e,t)=>{const n=d(t()),i=Object.keys(n).filter(e=>n[e].newImport);i.length&&e({type:s.actionTypes.DISABLE_NEW_IMPORTS,files:i})},k=(e,t)=>(console.log("# action ",e,t),{type:s.actionTypes.SET_FILE_UPLOAD_STATUS,hashPath:e,uploaded:t,__saveToDB__:!0,__db:s.db.files}),F=(e={},t=!1)=>(n,a)=>{const s=h(a());if(null!==e){u(`Migrating data to cloud ${s.uid} ${t?"(win backup)":""}`),m.trackEvent("app","cloud-migration");const n={};Object.values(e).forEach(e=>{n[g(e.path)]=e}),i.a.saveFullFilesData(s.uid,n).then(()=>{t&&u(`Migration for win backup successfull ${s.uid}`),f()}).catch(e=>{u(`Error migrating data to cloud ${e.toString()}`),t&&u(`Error migration data to cloud from win backup ${e.toString()}`),console.error(e)})}},D=e=>(t,n)=>{if(e.isPlayable())return e.missing&&!e.uploaded?void t(c(e)):void t(l(e.hashPath));t(o());const i=n().application.enableExperimental;return e.isGuitarPro7()&&i?t(r(s.modals.tabs,{file:e})):E(e.path)}},function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let a;n.d(t,"b",function(){return a}),n.d(t,"a",function(){return s}),function(e){e.IMPORT="IMPORT",e.RECORD="RECORD",e.TRANSFER="TRANSFER"}(a||(a={}));class s{constructor(){i(this,"name",void 0),i(this,"path",void 0),i(this,"size",void 0),i(this,"type",void 0),i(this,"added",void 0),i(this,"archived",void 0),i(this,"bpm",void 0),i(this,"comment",void 0),i(this,"duration",void 0),i(this,"missing",void 0),i(this,"newImport",void 0),i(this,"rating",void 0),i(this,"_sortRating",void 0),i(this,"deviceSource",void 0),i(this,"public",void 0),i(this,"publicId",void 0),i(this,"source",void 0),i(this,"tags",void 0),i(this,"_tagsArray",void 0),i(this,"timeSignature",void 0),i(this,"safePath",void 0),i(this,"uploaded",void 0),i(this,"escapedPath",void 0),i(this,"hashPath",void 0)}}},,function(e,t,n){(function(t){const i=t.require("electron"),a=n(9),s=n(1);let r=()=>{},o=()=>{};e.exports.setCallback=e=>{r=e},e.exports.onMissingFiles=e=>{o=e},i.ipcRenderer.on(s.mainConsts.events.CHECK_FILES_DB,(e,t)=>{r(s.mainConsts.events.CHECK_FILES_DB,t)}),i.ipcRenderer.on(s.mainConsts.events.DATA_FETCHED,(e,t)=>{r(s.mainConsts.events.DATA_FETCHED,t)}),i.ipcRenderer.on(s.mainConsts.events.MISSING_FILES,(e,t)=>{o(t)}),i.ipcRenderer.on(s.mainConsts.events.FILE_ALREADY_EXISTS,(e,t)=>{r(s.mainConsts.events.FILE_ALREADY_EXISTS,t)}),i.ipcRenderer.on(s.mainConsts.events.FILE_SYSTEM_ERROR,(e,t)=>{r(s.mainConsts.events.FILE_SYSTEM_ERROR,t)}),i.ipcRenderer.on(s.mainConsts.events.FILE_SAVE_SUCCESS,(e,t)=>{r(s.mainConsts.events.FILE_SAVE_SUCCESS,t)}),i.ipcRenderer.on(s.mainConsts.events.GET_MXLM_SUCCESS,(e,t)=>{r(s.mainConsts.events.GET_MXLM_SUCCESS,t)}),i.ipcRenderer.on(s.mainConsts.events.OPEN_DEEPLINK,(e,t)=>{r(s.mainConsts.events.OPEN_DEEPLINK,t)}),e.exports.checkFilesDBExists=()=>{i.ipcRenderer.send(s.mainConsts.events.CHECK_FILES_DB_EXISTS,{db:s.db.files})},e.exports.clearDB=()=>{i.ipcRenderer.send(s.mainConsts.events.CLEAR_DB)},e.exports.getFiles=()=>{i.ipcRenderer.send(s.mainConsts.events.FETCH_DATA,{db:s.db.files})},e.exports.getAppConfig=()=>{i.ipcRenderer.send(s.mainConsts.events.FETCH_DATA,{db:s.db.app})},e.exports.saveApp=e=>{i.ipcRenderer.send(s.mainConsts.events.SAVE_DATA,{db:"app",value:JSON.stringify(e)})},e.exports.openInFinder=e=>{i.shell.showItemInFolder(e)},e.exports.checkFiles=e=>{i.ipcRenderer.send(s.mainConsts.events.CHECK_FILES,{files:e})},e.exports.openLink=e=>{i.shell.openExternal(e),a.trackEvent("app","open-link",e)},e.exports.reload=()=>{i.ipcRenderer.send(s.mainConsts.events.RELOAD)},e.exports.toggleDevTools=()=>{i.ipcRenderer.send(s.mainConsts.events.TOGGLE_DEVTOOLS)},e.exports.saveMedia=(e,t,n)=>{i.ipcRenderer.send(s.mainConsts.events.SAVE_MEDIA,{saveType:e,fileName:t,wavData:n})},e.exports.checkFileExists=e=>{i.ipcRenderer.send(s.mainConsts.events.CHECK_FILE_EXISTS,{fileName:e})},e.exports.copyToClipboard=e=>{i.clipboard.writeText(e)},e.exports.unlinkFile=e=>{i.ipcRenderer.send(s.mainConsts.events.UNLINK_FILE,{filePath:e})},e.exports.getMXML=e=>{i.ipcRenderer.send(s.mainConsts.events.GET_MXLM,{filePath:e})},e.exports.openFile=e=>{i.shell.openItem(e)}}).call(this,n(21))},,function(e,t,n){"use strict";n.r(t),n.d(t,"getFilePathHash",function(){return a}),n.d(t,"escapeFilePath",function(){return s}),n.d(t,"getShareLink",function(){return r});var i=n(79);const a=e=>i.Base64.encode(e),s=e=>e.replace(/[\?#]/g,escape),r=(e,t)=>`https://songriffer.com/s/${e}/${t}`},function(e,t,n){"use strict";const i=n(52);t.a=i([e=>e.search],e=>({...e,cleanedBasicTerm:e.basicTerm.trim().toLowerCase(),cleanedTerm:e.term.trim().toLowerCase()}),"selectSearch")},,,,function(e,t,n){const i=n(1);e.exports.openModal=(e,t)=>({type:i.actionTypes.OPEN_MODAL,name:e,props:t});const a=()=>(e,t)=>{const{modal:n}=t();n.name===i.modals.updateAvailable&&n.props&&n.props.mandatory||e({type:i.actionTypes.CLOSE_MODAL})};e.exports.closeModal=a,e.exports.closeModalEsc=()=>a()},function(e,t,n){const i=n(52),a=e=>e.auth;e.exports.isAuthenticated=e=>!!e.auth.user,e.exports.selectUser=i([a],e=>e.user?{...e.user,data:e.data}:e.user,"selectUser"),e.exports.isUserFullyLoaded=i([a],e=>e.user&&!!Object.keys(e.data).length,"isUserFullyLoaded")},function(e,t){e.exports=e=>{try{const t=`${e} - wrapper version: *v${window.__songRiffer.version}* - app version: *1.5.0* - ${window.__songRiffer.platform}`;0,fetch(atob("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVFJZREY3TkJaL0JTQUw4NTFWNC9xbm1TMXVnYUJiTU80aVkwREtabndFa0U="),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t,type:"mrkdwn"})})}catch(e){}}},,,function(e,t,n){const i=n(0),a=n(2).default,s=n(6),r={xs:5,s:15,md:25},o=a.div`
    margin-top: ${e=>r[e.size]}px;
    margin-bottom: ${e=>r[e.size]}px;
`,l=({children:e,size:t="md"})=>i.createElement(o,{size:t},e);l.propTypes={children:s.node,size:s.oneOf(["md","s","xs"])},e.exports=l},,,,function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});var i=n(1),a=n(17),s=n(13);const r=n(34);class o extends s.a{constructor(t){super(),this.name=t.name,this.path=t.path,this.size=t.size||0,this.type=t.type,this.added=t.added||+new Date,this.archived=t.archived||!1,this.bpm=t.bpm||null,this.comment=t.comment||"",this.deviceSource=t.deviceSource||e.__songRiffer.platform,this.duration=t.duration||null,this.newImport=!0===t.newImport,this.public=!!t.public,this.publicId=t.publicId||null,this.rating=isNaN(parseInt(t.rating,10))?null:parseInt(t.rating,10),this._sortRating=null===this.rating?-1:this.rating,this.source=t.source||s.b.IMPORT,this.tags=t.tags||{},this._tagsArray=Object.keys(this.tags),this.timeSignature=t.timeSignature||"4/4",this.safePath=this.path.replace(/[\/\s\?\.\(\)\[\]:]/g,"_"),this.escapedPath=Object(a.escapeFilePath)(this.path),this.hashPath=Object(a.getFilePathHash)(this.path),this.uploaded=t.uploaded||!1}getTags(){return this._tagsArray}hasMatchingTags(e,t=!1){return t?e.every(e=>this.hasMatchingTag(e,t)):e.some(e=>this.hasMatchingTag(e,t))}hasMatchingTag(e,t=!1){const n=this.getTags().map(e=>e.toLowerCase());return t?n.includes(e.toLowerCase()):n.some(t=>t.includes(e.toLowerCase()))}matchSearch(e){if(e.archived!==i.searchArchived.ALL){if(e.archived===i.searchArchived.ARCHIVED&&!this.archived)return!1;if(e.archived===i.searchArchived.NON_ARCHIVED&&this.archived)return!1}const t=e.cleanedBasicTerm,n=e.cleanedTerm,a=Object.keys(e.tags);return!(t.length||n.length||a.length||e.bpm)||(t.length?!(!this.name.toLowerCase().includes(t)&&!this.hasMatchingTag(t,!1)):!(n.length&&!this.name.toLowerCase().includes(n))&&(!(a.length&&!this.hasMatchingTags(a,!0))&&(!e.bpm||!(this.bpm<e.bpm-e.bpmDelta||this.bpm>e.bpm+e.bpmDelta))))}getRatingForSort(){return this._sortRating}hasComment(){return!!this.comment.length}isGuitarPro7(){return".gp"===r.extname(this.path)}isPlayable(){if(this.type.includes("audio"))return!0;const e=r.extname(this.name).toLowerCase().replace(".","");return i.VALID_PLAYABLE_EXTENSIONS.includes(e)}toJSON(){return{added:this.added,archived:this.archived,bpm:this.bpm,comment:this.comment,deviceSource:this.deviceSource,duration:this.duration,escapedPath:this.escapedPath,name:this.name,newImport:!1,path:this.path,public:this.public,publicId:this.publicId,rating:this.rating,size:this.size,source:this.source,tags:this.tags,timeSignature:this.timeSignature,type:this.type,uploaded:this.uploaded}}}}).call(this,n(21))},,,,function(e,t,n){const i=n(127),a=n(0),s=n(39),{openModal:r}=n(22),{openLink:o}=n(15),l=n(9),c=n(1);e.exports.checkUpdate=(e=!1)=>t=>{t({type:c.actionTypes.CHECK_UPDATE,manual:e});const n=c.updateUrl[window.__songRiffer.platform],l=new Headers;l.append("pragma","no-cache"),l.append("cache-control","no-cache"),fetch(n,{method:"GET",headers:l}).then(e=>e.json()).then(n=>{if(n.version&&i.gt(n.version,window.__songRiffer.version)){const i=6048e5,a=+new Date;if(n.mandatory||n.date+i<a)return void t(d(n.url,n.changelog));t(e?p(n.url,n.changelog):{type:c.actionTypes.UPDATE_AVAILABLE,changelog:n.changelog,url:n.url})}else e&&(t({type:c.actionTypes.CHECK_UPDATE_NO_UPDATE}),t(r(c.modals.text,{title:"No update available",message:a.createElement("div",null,a.createElement("div",null,"Thanks for using SongRiffer!"),a.createElement("div",null,"We hope you're enjoying it and find it helpful."))})))}).catch(i=>{t({type:c.actionTypes.CHECK_UPDATE_FAILED}),e?t(r(c.modals.text,{title:"An error occured",message:a.createElement("div",null,a.createElement("div",null,"Sorry but we were not able to check if a new version is available."),a.createElement("div",null,"Please visit"," ",a.createElement(s,{onClick:()=>o(c.landingUrl)},c.landingUrl)," to manually check."))})):console.warn("Update endpoint failed, ignoring",n)})};const p=(e,t={})=>n=>{n({type:c.actionTypes.CHECK_UPDATE_SUCCESS}),n(r(c.modals.updateAvailable,{changelog:t,url:e}))};e.exports.displayUpdateAvailableModal=p,e.exports.resize=e=>({type:c.actionTypes.APP_RESIZE,width:e}),e.exports.displayTagContextMenu=(e,t,n,i)=>({type:c.actionTypes.DISPLAY_TAG_CONTEXT_MENU,positionX:n,positionY:i,props:{fileHashPath:e,tag:t}}),e.exports.closeContextMenu=()=>({type:c.actionTypes.CLOSE_CONTEXT_MENU});const d=(e,t)=>(l.trackEvent("app","mandatory-updte",window.__songRiffer.version),r(c.modals.updateAvailable,{changelog:t,mandatory:!0,url:e}));e.exports.setAllowFileDragging=e=>({type:c.actionTypes.SET_ALLOW_FILE_DRAGGING,allowFileDragging:e})},,function(e,t,n){const i=n(2).default,{colors:a}=n(1),s=i.button`
    outline: none;
    background: ${a._blue};
    color: ${a._white};
    font-family: inherit;
    font-size: 16px;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    transition: background ease 0.1s;

    :hover {
        background: ${a.purple};
    }
`;e.exports=s},function(e,t,n){const i=n(2).default,{colors:a}=n(1),s=i.input`
    display: inline-block;
    width: ${e=>e.isFullWidth?"100%":"auto"};
    padding: 3px 5px;
    margin-right: 3px;
    border-radius: 7px;
    background: transparent;
    border: 2px solid ${a._white};
    outline: none;
    color: ${a._white};
    font-size: 16px;

    &::placeholder {
        color: ${a._white};
        opacity: 0.4;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        margin: 0;
        appearance: none;
    }
`;e.exports=s},function(e,t,n){const i=n(2).default,{colors:a}=n(1);e.exports=i.a`
    color: ${a._white};
    text-decoration: underline;
    cursor: pointer;
`},function(e,t,n){"use strict";n.r(t),n.d(t,"playFile",function(){return a}),n.d(t,"togglePlay",function(){return s}),n.d(t,"pausePlayer",function(){return r});var i=n(1);const a=e=>({type:i.actionTypes.PLAY_FILE,hashPath:e}),s=()=>({type:i.actionTypes.TOGGLE_PLAY}),r=(e=!1)=>({type:i.actionTypes.PAUSE_PLAYER,unsetSelectedFile:!0})},function(e,t,n){"use strict";n.r(t),n.d(t,"hasCorrectCloudLevel",function(){return c}),n.d(t,"hasUpload",function(){return p}),n.d(t,"canUpload",function(){return d}),n.d(t,"canDownload",function(){return h}),n.d(t,"canRead",function(){return u});var i=n(152),a=n(153),s=n(33),r=n.n(s),o=n(50),l=n(1);const c=(e,t)=>e.data.cloudLevel>=t,p=e=>c(e,o.a.LEVEL_3),d=e=>r()(e.data,"storageSize",0)<l.STORAGE_LIMITS[`CLOUD_LEVEL_${e.data.cloudLevel}`],h=d,u=e=>{const t=l.STORAGE_LIMITS[`CLOUD_LEVEL_${e.data.cloudLevel}`],n=r()(e.data,"storageSize",0);if(n<t)return!0;const s=n>t+l.STORAGE_BLOCK_MARGIN,o=e.data.updatedAt||e.data.createdAt,c=Object(i.a)(new Date,Object(a.a)(o,2));return!s&&!c}},function(e,t,n){"use strict";n.r(t),n.d(t,"signIn",function(){return r}),n.d(t,"setFullUserData",function(){return o}),n.d(t,"signOut",function(){return l}),n.d(t,"notLogged",function(){return c});var i=n(5);const a=n(1),s=n(24),r=e=>(s(`User sign in - ${e.email}`),{type:a.actionTypes.AUTH_SET_USER,user:e}),o=e=>({type:a.actionTypes.AUTH_SET_FULL_USER_DATA,data:e}),l=()=>(i.a.signOut(),{type:a.actionTypes.AUTH_SIGN_OUT}),c=()=>({type:a.actionTypes.AUTH_NOT_LOGGED})},function(e,t,n){const i=n(0),a=n(2).default,s=a.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`,r=a.div`
    padding-right: 15px;
    flex: 1;
    overflow-y: auto;
    scroll-behavior: smooth;
    ${e=>e.s}
`;e.exports=({children:e,scrollElementRef:t=null,stickyHeader:n=null,wrapperStyle:a=""})=>i.createElement(s,null,n,i.createElement(r,{s:a,ref:t},e))},,,function(e,t,n){const i=n(2).default,{colors:a}=n(1),s=`1px solid ${a._grey}`,r=`\n    padding: 7px;\n    cursor: pointer;\n    background: transparent;\n    transition: background ease 0.1s;\n    color: ${a._white};\n    border-bottom: ${s};\n\n    :hover {\n        background: ${a._blue};\n    }\n`,o=i.div`
    ${r}

    border-top: ${e=>e.first?s:"none"};
`;e.exports=o,e.exports.ModalLink=i.a`
    ${r}
    display: block;
    text-decoration: none;
`},,function(e,t,n){"use strict";n.d(t,"a",function(){return p});var i=n(0),a=n.n(i),s=n(14),r=n(2),o=n(59),l=n.n(o);const c=r.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`,p=()=>{const e=s.Keyframes.Spring(async e=>{for(;;)await e({opacity:.2,from:{opacity:0},config:s.config.slow}),await e({opacity:0,from:{opacity:.2},config:s.config.gentle})});return a.a.createElement(c,null,a.a.createElement(e,{native:!0},e=>a.a.createElement(s.animated.div,{style:{opacity:e.opacity}},a.a.createElement(l.a,null))))}},function(e,t,n){"use strict";var i,a,s,r=n(18);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=n(0),c=n(2).default,p=n(6),{connect:d}=n(7),h=n(70),u=n(71),m=n(114),{colors:g}=n(1),f=c.div`
    position: relative;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    ${e=>e.limitedLayout?((e,t)=>`\n    ${e?`\n            flex-direction: row;\n\n            ${t?"\n                    justify-content: flex-end;\n                ":""}\n        `:""}\n`)(e.editTag,e.moveForInput):null}
    ${e=>e.additionalStyle}
`,E=c(u)`
    padding: 0;
    text-align: center;
    border: 2px solid ${g._white};

    :hover {
        background: ${g._white};
        color: ${g._black};
    }
`,v=c(u)`
    border: 2px solid ${g._white};

    :hover {
        background: ${g._white};
        color: ${g._black};
    }
`;let b=d(e=>({advancedTransitionDone:Object(r.a)(e).advancedTransitionDone,appWidth:e.application.appWidth}))((s=a=class extends l.PureComponent{constructor(...e){super(...e),o(this,"state",{editTag:!1,firstVisibleTag:!1,fitInput:!0,limitedLayout:!1,sliceTags:!1,visibleTags:this.props.tags.length}),o(this,"rootRef",l.createRef()),o(this,"tagsRef",{}),o(this,"startEditTag",()=>{this.setState({editTag:!0},this.calculateVisibleTags)}),o(this,"onTagContextMenu",(e,t)=>{this.props.onTagContextMenu(t,e.clientX,e.clientY)}),o(this,"onTagClick",e=>{this.props.onTagClick(e)}),o(this,"addTag",e=>{this.props.addTag(e)}),o(this,"quitTagEdit",()=>{this.setState({editTag:!1},this.calculateVisibleTags)}),o(this,"calculateVisibleTags",()=>{if(!this.props.limitedLayout||!this.props.tags.length)return;const e=this.rootRef.current.offsetWidth,t=Object.values(this.tagsRef).filter(Boolean),{tagsTotalWidth:n,visibleTags:i}=t.reduce((t,n)=>(t.tagsTotalWidth+=n.offsetWidth+3,t.tagsTotalWidth<e-26&&t.visibleTags++,t),{tagsTotalWidth:0,visibleTags:0});if(i!==t.length&&(this.setState({visibleTags:i-1}),this.state.editTag||this.setState({sliceTags:!0})),this.state.editTag&&n+100>e){const{firstVisibleTag:n}=t.reverse().reduce((n,i,a)=>(n.tagsTotalWidth+=i.offsetWidth+3,n.tagsTotalWidth>e&&!n.firstVisibleTag&&(n.firstVisibleTag=t.length-(a+1)),n),{firstVisibleTag:!1,tagsTotalWidth:100});this.setState({firstVisibleTag:n,fitInput:!1})}else this.setState({fitInput:!0})})}componentDidMount(){this.calculateVisibleTags()}componentDidUpdate(e){(e.tags.length||this.props.tags.length)&&(e.tags!==this.props.tags||e.appWidth!==this.props.appWidth||!e.advancedTransitionDone&&this.props.advancedTransitionDone)&&this.setState({sliceTags:!1,visibleTags:this.props.tags.length},this.calculateVisibleTags)}render(){const{limitedLayout:e,openTagModal:t,tags:n}=this.props,{editTag:i,firstVisibleTag:a,fitInput:s,sliceTags:r,visibleTags:o}=this.state;return l.createElement(f,{ref:this.rootRef,additionalStyle:this.props.rootStyle,limitedLayout:e,editTag:i,moveForInput:!s},n.slice(0,r?o:n.length).map((e,t)=>l.createElement(h,{key:e,onContextMenu:t=>this.onTagContextMenu(t,e),onClick:()=>this.props.onTagClick(e),title:`Click to search all files with the tag "${e}"`,ref:t=>this.tagsRef[e]=t,additionalStyle:i&&!s&&!1!==a&&t===a?"\n    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%);\n":""},e)),r?l.createElement(v,{onClick:t,title:`${n.length-o} tags hidden, click to see them and add more`},n.length-Math.max(0,o),"+"):l.createElement(l.Fragment,null,i?l.createElement(m,{addTag:this.addTag,blacklist:n,inputWidth:100,quitTagEdit:this.quitTagEdit}):l.createElement(E,{className:"add-tag",onClick:this.startEditTag,style:{width:26,height:22}},"+")))}},o(a,"propTypes",{advancedTransitionDone:p.bool,appWidth:p.number,dispatch:p.func,limitedLayout:p.bool,openTagModal:p.func,onTagClick:p.func,onTagContextMenu:p.func,tags:p.array}),o(a,"defaultProps",{onTagContextMenu:()=>{}}),i=s))||i;t.a=b},function(e,t,n){"use strict";let i;n.d(t,"a",function(){return i}),function(e){e[e.LEVEL_1=1]="LEVEL_1",e[e.LEVEL_2=2]="LEVEL_2",e[e.LEVEL_3=3]="LEVEL_3",e[e.LEVEL_4=4]="LEVEL_4"}(i||(i={}))},function(e,t,n){const i=n(101);e.exports.getTagAutocomplete=(e,t="",n=[])=>{if(!t.length)return null;const i=t.toLowerCase();let a=null;const s=n.reduce((e,t)=>(e[t.toLowerCase()]=!0,e),{});for(let t=0;t<e.length;t++)if(e[t].startsWith(i)&&!s[e[t]]){a=e[t];break}return a};const{colors:a,colorsDarkFont:s}=n(1),r=Object.keys(a).reduce((e,t)=>("_"!==t.substring(0,1)&&(e[t]=a[t]),e),{}),o=Object.keys(a).reduce((e,t)=>(e[a[t]]=t,e),{});e.exports.getFontColorForColor=e=>s[o[e]]?a._black:a._white;const l=i.from(r);const c={};e.exports.getTagColor=e=>{const t=e.toLowerCase();if(!c[t]){const e=function(e){const t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t}(function(e){let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return t}(t));c[t]=l(e).value}return c[t]}},function(e,t,n){const i={};e.exports=function(e,t,n,a){if(!Array.isArray(e))throw new Error("Expected sources to be an array.");if("function"!=typeof t)throw new Error("Expected the outputFunc to be a function.");if(!n)throw new Error("Missing selectorName argument.");let s=null;return(r,o,l,c)=>{const p=a||c;l&&(l=`@${n}_${l}`);const d=l?i[l]:s;let h=!!d;if(d&&!o&&d.previousState===r)return d.result;const u=e.map((e,t)=>{const n=e(r,o,e.__forwardMemoizationKey?l:void 0);return h&&(h=d.sourcesValues[t]===n),n});if(h)return p&&console.log(`%cSame result ${n}`,"color: green"),d.result;{const e=t(...u),a={sourcesValues:u,result:e,previousState:r};return l?i[l]=a:s=a,p&&console.log(`%cNew result ${n}`,"color: red"),e}}}},function(e,t,n){"use strict";n.r(t),n.d(t,"formatDuration",function(){return a}),n.d(t,"formatFileSize",function(){return r});const i=e=>`${e}`.length>1?`${e}`:`0${e}`,a=e=>{const t=Math.floor(e/3600),n=Math.floor(e/60)%60,a=e%60,s=i(t);return`${t?`${s}:`:""}${i(n)}:${i(a)}`},s=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=e=>{const t=Math.floor(Math.log(e)/Math.log(1024));return e?(e/Math.pow(1024,t)).toFixed(2)+" "+s[t]:"0 Bytes"}},,function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a=n(0),s=n(6),r=n(2).default,{colors:o,noop:l}=n(1),c=n(38),p=r.div`
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
`,h=r.span`
    color: transparent;
`;class u extends a.PureComponent{constructor(...e){super(...e),i(this,"inputRef",a.createRef()),i(this,"onFocus",()=>{this.props.onFocus(this.inputRef)})}componentDidMount(){this.props.autoFocus&&this.inputRef.current.focus()}render(){const{autocomplete:e,autocompleteStyle:t,autoFocus:n,isFullWidth:i,onBlur:s,onChange:r,onKeyDown:o,style:l,tabIndex:u,type:m,value:g}=this.props,f=e?g.length:0;return a.createElement(p,{isFullWidth:!0},a.createElement(c,{isFullWidth:i,type:m,name:"tag-input",onFocus:this.onFocus,onBlur:s,onChange:r,onKeyDown:o,value:g,ref:this.inputRef,tabIndex:u,style:l,min:1}),a.createElement(d,{additionalStyle:t},a.createElement(h,null,g),e?`${"".repeat(f)}${e.slice(f,e.length)}`:null))}}i(u,"propTypes",{autocomplete:s.string,autocompleteStyle:s.string,autoFocus:s.bool,isFullWidth:s.bool,onBlur:s.func,onChange:s.func,onContextMenu:s.func,onFocus:s.func,onKeyDown:s.func,style:s.object,tabIndex:s.any,type:s.string,value:s.oneOfType([s.string,s.number])}),i(u,"defaultProps",{autocompleteStyle:"",onFocus:l,type:"text"}),e.exports=u},function(e,t,n){const i=n(1);e.exports.addNotification=(e,t,n="success")=>({type:i.actionTypes.ADD_NOTIFICATION,notification:{title:e,message:t,status:n}}),e.exports.removeNotification=()=>({type:i.actionTypes.REMOVE_NOTIFICATION}),e.exports.notifyMissingFile=e=>({type:i.actionTypes.NOTIFY_MISSING_FILE,file:e})},function(e,t,n){"use strict";n.r(t),n.d(t,"getFilesDurationAndBPM",function(){return m}),n.d(t,"importFiles",function(){return f}),n.d(t,"VALID_PLAYABLE_EXTENSIONS",function(){return h});var i=n(31),a=n(17);const{extname:s}=n(34),{analyze:r}=n(149),{openModal:o}=n(22),{editFile:l}=n(12),c=n(9),{modals:p,VALID_EXTENSIONS:d,VALID_PLAYABLE_EXTENSIONS:h}=n(1),u=new AudioContext,m=(e,t,n=0)=>{const i=t[n];i&&fetch(i.escapedPath||i.path).then(e=>e.arrayBuffer()).then(s=>{u.decodeAudioData(s,async s=>{const r=await g(s),o=parseInt(s.duration,10);(r&&!i.bpm||o&&!i.duration)&&e(l(Object(a.getFilePathHash)(i.path),{duration:o,bpm:r},!0)),m(e,t,n+1)},i=>{m(e,t,n+1)})})},g=e=>new Promise(t=>{r(e).then(e=>{t(parseInt(e,10))}).catch(()=>{t(!1)})}),f=(e,t,n)=>{const r=t.reduce((t,n)=>{if(n.isDirectory)return alert("no directory support for now"),t;if(!(e=>{if(e.type.includes("audio"))return!0;const t=s(e.name).toLowerCase().replace(".","");return!!d.includes(t)})(n))return e(o(p.invalidFile,{file:n})),t;const r=new i.a(n);return t[Object(a.getFilePathHash)(r.path)]=r.toJSON(),t},{});n(r);const l=Object.values(r);if(l.length){c.trackEvent("file","file-import","import",l.length);try{l.forEach(e=>{c.trackEvent("file","file-name",e.name.replace(s(e.name),""))})}catch(e){}m(e,l)}}},function(e,t,n){"use strict";n.r(t);var i,a,s,r=n(49),o=n(5);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const{extname:c}=n(34),p=n(0),d=n(6),h=n(2).default,{connect:u}=n(7),{Spring:m}=n(14),g=n(109),f=n(110),E=n(73),v=n(111),b=n(112),{formatDuration:y}=n(53),{openModal:T}=n(22),{addTag:_,handleFileOpen:S,setRating:C}=n(12),{displayTagContextMenu:x}=n(35),{selectUser:w}=n(23),A=n(9),R=n(1),L=h(E)`
    border-bottom: 1px solid #444;
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
    }

    :hover .comment-icon {
        display: block;
    }

    box-shadow: ${e=>e.uploading?`inset 2px 0px 0 ${R.colors.bluePastel}`:e.uploaded?`inset 2px 0px 0 ${R.colors.blueGreen}`:"none"};
`,k=h.span`
    cursor: pointer;
`,F=h.span`
    color: #777;
`,D=h.div`
    display: flex;
    align-items: center;
`,P=h.div`
    flex: 1;
    padding: 7px 5px 7px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,I=h.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: ${R.colors.redLight};
    color: #fff;
    cursor: pointer;
    font-size: 18px;
`,O=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,M=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    writing-mode: vertical-rl;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity ease 0.1s;

    :hover {
        opacity: 1;
    }
`;let U=u((e,t)=>({missingFiles:e.files.missingFiles,playing:t.selected&&e.player.playing,user:w(e)}))((s=a=class extends p.PureComponent{constructor(...e){super(...e),l(this,"onDoubleClick",()=>{this.props.dispatch(S(this.props.file))}),l(this,"addTag",e=>{this.props.dispatch(_(this.props.file.hashPath,e))}),l(this,"onTagContextMenu",(e,t,n)=>{this.props.dispatch(x(this.props.file.hashPath,e,t,n))}),l(this,"setRating",e=>{this.props.dispatch(C(this.props.file.hashPath,e))}),l(this,"onTagClick",e=>{this.props.onTagClick(e)}),l(this,"updateFile",e=>{o.a.updateFile(this.props.user,this.props.file.hashPath,e)}),l(this,"saveBPM",e=>{parseInt(e,10)<0||(this.updateFile({bpm:e}),A.trackEvent("file","set-bpm"))}),l(this,"saveTimeSignature",e=>{this.updateFile({timeSignature:e}),A.trackEvent("file","set-time-signature")}),l(this,"onTimeSignatureFocus",e=>{const t=e.current.value.split("/");e.current.setSelectionRange(0,t[0].length)}),l(this,"openOptionsModal",()=>{this.props.dispatch(T(R.modals.fileOptions,{file:this.props.file}))}),l(this,"onClickMissing",()=>{this.props.dispatch(T(R.modals.fileMissing,{fileHashPath:this.props.file.hashPath}))}),l(this,"openTagModal",()=>{this.props.dispatch(T(R.modals.tags,{fileHashPath:this.props.file.hashPath}))}),l(this,"openCommentModal",()=>{this.props.dispatch(T(R.modals.comment,{fileHashPath:this.props.file.hashPath}))})}renderFile(e){return this.props.file.newImport?p.createElement(m,{from:{background:"rgba(255, 255, 255, 0.4)"},to:{background:"rgba(255, 255, 255, 0)"},config:{duration:3e3}},({background:t})=>p.createElement("div",{style:{background:t}},e)):e}render(){const{file:e,missingFiles:t,playing:n,selected:i}=this.props,a=c(e.name),s=e.name.replace(a,""),o=t.includes(e.hashPath);return this.renderFile(p.createElement(L,{archived:e.archived,hasComment:e.hasComment(),isPlayable:e.isPlayable(),onDoubleClick:this.onDoubleClick,playing:n,selected:i,id:`file-${e.hashPath}`,uploaded:e.uploaded},p.createElement(D,null,p.createElement(k,{className:"play-button",onClick:this.onDoubleClick},p.createElement(v,null)),p.createElement(P,{title:e.name},s,p.createElement(F,null,a)),o&&!e.uploaded?p.createElement(I,{onClick:this.onClickMissing,title:"We could not locate this file - click to replace it or remove it from your library"},"!"):null,!o||o&&e.hasComment()?p.createElement(g,{className:"comment-icon",hasComment:e.hasComment(),onClick:this.openCommentModal}):null),p.createElement(O,null,e.duration?y(e.duration):"--:--"),p.createElement(r.a,{addTag:this.addTag,limitedLayout:!0,openTagModal:this.openTagModal,onTagClick:this.onTagClick,onTagContextMenu:this.onTagContextMenu,tags:e.getTags()}),p.createElement(O,null,p.createElement(f,{value:e.bpm,placeholder:"+",onSave:this.saveBPM,type:"number"})),p.createElement(O,null,p.createElement(f,{onFocus:this.onTimeSignatureFocus,onSave:this.saveTimeSignature,value:e.timeSignature})),p.createElement(O,null,p.createElement(b,{onChange:this.setRating,rating:e.rating})),p.createElement(M,{title:"Click for more actions on this riff",onClick:this.openOptionsModal},"•••")))}},l(a,"propTypes",{dispatch:d.func,file:d.object.isRequired,missingFiles:d.array,onTagClick:d.func,selected:d.bool}),i=s))||i;t.default=U},function(e,t,n){const i=n(0),a=n(2).default,s=n(1),r=a.svg`
    width: 184px;
    animation: open 1s 1;
    animation-timing-function: ease;

    path {
        fill: ${s.colors._white};
    }
`;e.exports=({angle:e,opacity:t})=>i.createElement(r,{viewBox:"0 0 184 184",style:{transform:`rotate(${e})`,opacity:t}},i.createElement("defs",null,i.createElement("clipPath",{id:"logo-b"},i.createElement("path",{d:"M.625.621094h173.222656V172.8125H.625zm0 0"})),i.createElement("clipPath",{id:"logo-a"},i.createElement("path",{d:"M0 0h174v173H0z"})),i.createElement("g",{id:"logo-c",clipPath:"url(#logo-a)"},i.createElement("g",{clipPath:"url(#logo-b)"},i.createElement("path",{d:"M74.582031 172.8125C38.964844 168.527344 2.6875 137.164063.707031 90.839844-1.34375 42.832031 35.828125 2.527344 83.917969.6875c48.1875-1.84375 88.25 35.582031 89.878906 83.511719 1.597656 46.980469-33.316406 82.6875-72.476562 88.398437 19.148437-4.351562 34.371093-14.488281 44.898437-31.125 10.550781-16.671875 13.402344-34.8125 8.863281-53.988281-7.789062-32.925781-38.855468-55.480469-72.910156-52.960937-34.179687 2.53125-60.917969 29.121093-64.277344 62.5-3.667968 36.425781 20.996094 69.035156 56.6875 75.789062"})),i.createElement("path",{d:"M98.648438 43.191406c26.601562 4.265625 50.992187 29.03125 50.578125 61.816407-.425782 33.550781-27.953125 60.859375-61.640625 61.015625-34.027344.15625-61.777344-26.816407-62.382813-60.851563-.589844-33.167969 24.109375-57.722656 50.671875-62-13.480469 3.472656-24.113281 10.925781-31.328125 22.867188-7.238281 11.976562-9.089844 24.894531-5.632812 38.449218C44.835938 127.6875 66.75 143.6875 91.613281 141.742188c23.050782-1.796875 42.597657-20.574219 45.265625-43.804688 2.992188-26.046875-13.941406-49.007812-38.230468-54.746094"}),i.createElement("path",{d:"M77.851563 135.882813c-17.867188-3.527344-34.558594-20.648438-33.675782-43.578125C45.066406 69.074219 63.769531 50.925781 86.75 50.6875c22.921875-.238281 42.078125 17.277344 43.636719 40.015625 1.636719 23.878906-15.492188 41.902344-34.382813 45.359375 9.863282-2.820312 17.382813-8.597656 22.183594-17.707031 3.816406-7.234375 4.894531-14.949219 3.253906-22.9375-3.429687-16.707031-17.59375-27.996094-34.800781-27.90625-16.066406.085937-30.277344 11.945312-33.421875 27.992187-3.675781 18.753907 8.140625 35.945313 24.632813 40.378907"}),i.createElement("path",{d:"M94.582031 74.859375c12.640625 2.765625 24.214844 15.582031 22.679688 32.234375-1.402344 15.253906-14.769531 27.144531-30.539063 26.960938-15.433593-.183594-28.492187-12.589844-29.4375-28.011719-1.03125-16.753906 10.984375-28.699219 22.878907-31.160156-6.007813 2.042968-10.726563 5.691406-13.875 11.230468-3.164063 5.566407-3.996094 11.523438-2.496094 17.730469 2.628906 10.910156 12.324219 18.484375 23.511719 18.488281 11.253906.007813 20.894531-7.589843 23.613281-18.539062 2.628906-10.578125-2.609375-24.527344-16.335938-28.933594"}))),i.createElement("use",{xlinkHref:"#logo-c"}))},,,,,,,,function(e,t,n){const i=n(0),a=n(2).default,{colors:s}=n(1),r=a.svg`
    fill: ${e=>e.color};
`;e.exports=({color:e=s.green,width:t})=>i.createElement(r,{viewBox:"0 0 16 16",width:t,color:e},i.createElement("polygon",{stroke:"none",fillRule:"evenodd",points:"2.6 7.4 1 9.2 5.3 14 15 3.8 13.3 2 5.3 10.4"}))},,,function(e,t,n){function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}const a=n(0),s=n(2).default,r=n(71),{getTagColor:o,getFontColorForColor:l}=n(51),{colors:c}=n(1),p=s(r)`
    display: inline-flex;
    height: 22px;
    align-items: center;
    ${e=>e.additionalStyle}
    border: 2px solid ${e=>e.color};
    color: ${e=>e.color};
    font-weight: lighter;

    :hover {
        background: ${e=>e.color};
        color: ${e=>l(e.color)};
    }
`,d=s.div`
    max-width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,h=s.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    cursor: pointer;
    margin-left: 3px;
    background: ${c._white};
    border-radius: 100%;
    color: ${e=>e.color};
    font-size: 12px;
    transition: all ease 0.1s;

    :hover {
        background: ${c._black};
        color: ${c._white};
    }
`,u=a.forwardRef((e,t)=>{const{additionalStyle:n,children:s,deleteTitle:r,onDelete:l}=e,c=o(s),u={...e};return delete u.onDelete,a.createElement(p,i({},u,{color:c,additionalStyle:n,ref:t}),a.createElement(d,null,s),l?a.createElement(h,{title:r,onClick:l,color:c},"x"):null)});e.exports=u},function(e,t,n){const i=n(2).default.span`
    display: inline-block;
    padding: 2px 8px;
    margin-right: 3px;
    border-radius: 7px;
    cursor: pointer;
    transition: background ease 0.1s;
`;e.exports=i},function(e,t,n){const i=n(9),a=!1;e.exports=new class{constructor(){var e,t,n;n={},(t="eventsRunning")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}start(e){this.eventsRunning[e]=+new Date}end(e){if(!this.eventsRunning[e])return void(a&&console.warn(`[RUM] Event ${e} not started`));const t=+new Date-this.eventsRunning[e];delete this.eventsRunning[e],i.trackTiming("rum",e,t),a&&console.log(`[RUM] Event ${e} ran in ${t}ms`)}}},function(e,t,n){const i=n(2).default.div`
    display: grid;
    grid-template-columns: 300px 80px 1fr 70px 100px 100px 5px;
    grid-gap: 0;
    padding: 0 5px;
    border-bottom: 1px solid #444;
`;e.exports=i},,function(e,t,n){"use strict";n.r(t),n.d(t,"recorderFileAlreadyExists",function(){return a}),n.d(t,"reset",function(){return s}),n.d(t,"recorderSaveSuccess",function(){return r});var i=n(1);const a=e=>({type:i.actionTypes.RECORDER_FILE_ALREADY_EXISTS,fileName:e}),s=()=>({type:i.actionTypes.RECORDER_RESET}),r=e=>({type:i.actionTypes.RECORDER_SAVE_SUCCESS,filePath:e})},,,,,,,,,,,function(e,t,n){function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}const a=n(0),s=n(6),r=n(2).default,{Spring:o}=n(14),{colors:l}=n(1),c=r.svg`
    width: ${e=>e.width}px;
`,p=({animated:e=!1,fullDetail:t=!1,width:n=20})=>{const s={};return t?s.fillOpacity=0:s.fill=l.blueLight,a.createElement(c,{width:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"239.466 189.649 110.527 167.811"},a.createElement("defs",null,a.createElement("path",{d:"M326.99 193.65c11.05 0 20 8.95 20 20v120.81c0 11.05-8.95 20-20 20h-64.52c-11.05 0-20-8.95-20-20V213.65c0-11.05 8.95-20 20-20h64.52z",id:"transfer-a"}),a.createElement("path",{d:"M334.73 281.13L294.77 320l-40.04-38.78 25.36-.03-.05-41.17 29.35-.04.05 41.18 25.29-.03z",id:"transfer-b"}),a.createElement("path",{d:"M302.77 198.69a8.04 8.04 0 11-16.08 0 8.04 8.04 0 0116.08 0z",id:"transfer-c"})),a.createElement("use",i({xlinkHref:"#transfer-a"},s,{stroke:l.blueLight,strokeWidth:"6"})),e?a.createElement(o,{delay:500,from:{opacity:0},to:{opacity:1}},e=>a.createElement("use",{xlinkHref:"#transfer-b",fill:l.blueLight,fillOpacity:e.opacity,stroke:l.blueLight,strokeWidth:"2"})):a.createElement("use",{xlinkHref:"#transfer-b",fill:l.blueLight,stroke:l.blueLight,strokeWidth:"2"}),a.createElement("g",null,a.createElement("use",{xlinkHref:"#transfer-c",fill:l.blueLight})))};p.propTypes={animated:s.bool,fullDetail:s.bool,width:s.number},e.exports=p},function(e,t,n){n(0);const i=n(2).default,a=n(38),{colors:s}=n(1),r=i(a)`
    width: 100%;
    min-width: 420px;
    padding: 5px 7px;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid ${s._white};
    transition: border ease 0.1s;
    color: ${s._white};

    :focus {
        border-bottom: 1px solid ${s.blueLight};
        color: ${s.blueLight};
    }
`;e.exports=r},function(e,t,n){const i=n(1);e.exports.setFileList=e=>({type:i.actionTypes.TRANSFER_SET_FILE_LIST,files:e}),e.exports.startTansfer=e=>({type:i.actionTypes.TRANSFER_START_TRANFER,fileName:e}),e.exports.transferSaveSuccess=(e,t)=>({type:i.actionTypes.TRANSFER_SAVE_SUCCESS,fileName:e,filePath:t}),e.exports.reset=()=>({type:i.actionTypes.TRANSFER_RESET})},,,,,,,,,,,function(e,t,n){const i=n(34),a=n(100),s=i.join(a.homedir(),"SongRiffer/Recorder"),r=i.join(a.homedir(),"SongRiffer/Transfer");e.exports={backgroundColor:"#121212",events:{CHECK_FILE_EXISTS:"CHECK_FILE_EXISTS",CHECK_FILES:"CHECK_FILES",CHECK_FILES_DB_EXISTS:"CHECK_FILES_DB_EXISTS",CHECK_FILES_DB:"CHECK_FILES_DB",CLEAR_DB:"CLEAR_DB",DATA_FETCHED:"DATA_FETCHED",FETCH_DATA:"FETCH_DATA",FILE_ALREADY_EXISTS:"FILE_ALREADY_EXISTS",FILE_SAVE_SUCCESS:"FILE_SAVE_SUCCESS",FILE_SYSTEM_ERROR:"FILE_SYSTEM_ERROR",GET_MXLM:"GET_MXLM",GET_MXLM_SUCCESS:"GET_MXLM_SUCCESS",MISSING_FILES:"MISSING_FILES",OPEN_DEEPLINK:"OPEN_DEEPLINK",RELOAD:"RELOAD",SAVE_DATA:"SAVE_DATA",SAVE_MEDIA:"SAVE_MEDIA",TOGGLE_DEVTOOLS:"TOGGLE_DEVTOOLS",UNLINK_FILE:"UNLINK_FILE"},saveTypesFolder:{RECORDER:s,TRANSFER:r},RECORDER_BASE_PATH:s,TRANSFER_BASE_PATH:r,windowStateFileName:"window-state-app-songriffer.json"}},,,,function(e,t,n){const i=n(0),a=n(2).default,{colors:s}=(n(6),n(1)),r=a.label`
    display: block;
    position: relative;
    width: 48px;
    height: 28px;
    margin-right: 1px;
    border-radius: 50px;
    border: 1px solid ${s._blue}
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
`;e.exports=({checked:e,onChange:t})=>i.createElement(i.Fragment,null,i.createElement(r,{checked:e},i.createElement("input",{type:"checkbox",style:{display:"none"},onChange:t,checked:e})))},function(e,t,n){var i;const a=n(0),{connect:s}=n(7),r=n(2).default.div`
    position: absolute;
    width: 100%;
    height: 20px;
    ${e=>e.hasNotification?"":"-webkit-app-region: drag;"}
    top: 0;
    left: 0;
`;let o=s(e=>({notification:e.notifications.notification}))(i=class extends a.Component{render(){const{notification:e}=this.props;return a.createElement(r,{hasNotification:e.active})}})||i;e.exports=o},function(e,t,n){const i=n(0),a=n(2).default,s=n(37),r=n(39),o=n(27),{openLink:l,reload:c}=n(15),p=n(1),d=a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${p.colors._white};
`,h=a.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
`,u=a.div`
    font-size: 18px;
`,m=a.div`
    padding: 30px 0;
`,g=a(s)`
    padding: 5px 10px;
`;e.exports=()=>i.createElement(d,null,i.createElement(h,null,"Woops, something went wrong :("),i.createElement(u,null,"Sorry about that, it seems something is broken."),i.createElement(m,null,i.createElement(g,{onClick:c},"Restart the app")),i.createElement(o,{size:"xs"},"If you think something is not right, feel free to contact us for support:"),i.createElement(o,{size:"xs"},i.createElement(r,{href:`mailto:${p.email}`},"Send us an email")),i.createElement(o,{size:"xs"},i.createElement(r,{onClick:()=>l(p.messengerUrl)},"Write to us on Messenger")))},function(e,t,n){const i=n(0),a=n(2).default,{colors:s}=n(1),r=a.svg`
    width: 15px;
    height: 15px;
    margin-left: 2px;
    transform: rotate(${e=>e.rotate?"180deg":"0deg"});

    fill: ${s.blueLight};
`;e.exports=({rotate:e})=>i.createElement(r,{viewBox:"0 0 10 5",rotate:e},i.createElement("path",{fillRule:"evenodd",d:"M0 0h10L5 6"}))},,,function(e,t,n){const i=n(0),a=n(2).default,s=n(6),{colors:r}=n(1),o=a.svg`
    width: 25px;
    height: 25px;
    margin-top: 6px;
    transition: opacity ease 0.1s;
    opacity: ${e=>e.hasComment?.6:.4};
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;class l extends i.Component{render(){const{className:e,hasComment:t,onClick:n}=this.props;return i.createElement(o,{hasComment:t,onClick:n,className:e,title:t?"Edit this file's comment":"Add a comment for this file"},i.createElement("use",{xlinkHref:"#commentIcon"}))}}var c,p,d;c=l,p="propTypes",d={hasComment:s.bool,onClick:s.func},p in c?Object.defineProperty(c,p,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[p]=d,e.exports=l},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a=n(0),s=n(6),r=n(2).default,o=n(55),{noop:l}=n(1),c=r.div`
    cursor: pointer;
`;class p extends a.Component{constructor(...e){super(...e),i(this,"state",{edit:!1,_value:this.props.value||""}),i(this,"onClick",()=>{this.setState({edit:!0})}),i(this,"onKeyDown",e=>{"Enter"===e.key&&this.props.onSave(this.state._value),"Enter"!==e.key&&"Escape"!==e.key||this.setState({edit:!1})}),i(this,"onBlur",()=>{this.props.onSave(this.state._value),this.setState({edit:!1})}),i(this,"onChange",e=>{this.setState({_value:e.target.value})})}render(){const{onFocus:e,placeholder:t,type:n,value:i}=this.props,{edit:s,_value:r}=this.state;return s?a.createElement(o,{autoFocus:!0,onBlur:this.onBlur,onChange:this.onChange,onFocus:e,onKeyDown:this.onKeyDown,value:r,style:{width:"100%"},type:n}):a.createElement(c,{onClick:this.onClick,title:"Click to edit"},i||t)}}i(p,"propTypes",{onFocus:s.func,onSave:s.func,placeholder:s.string,type:s.string,value:s.oneOfType([s.string,s.number])}),i(p,"defaultProps",{onFocus:l,type:"text"}),e.exports=p},function(e,t,n){const i=n(0),a=n(2).default,{colors:s}=n(1),r=a.svg`
    width: 12px;
    fill: ${s._white};
    opacity: 0.5;

    :hover {
        opacity: 1;
    }
`;e.exports=()=>i.createElement(r,{viewBox:"0 0 32 32"},i.createElement("use",{xlinkHref:"#playIcon"}))},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a=n(0),s=n(6),r=n(2).default,o=n(113),l=r.div`
    cursor: pointer;
`;class c extends a.Component{constructor(...e){super(...e),i(this,"state",{starsHover:!1}),i(this,"setRating",e=>{this.props.onChange(e)}),i(this,"onMouseEnter",e=>{this.setState({starsHover:e})}),i(this,"onMouseLeave",()=>{this.setState({starsHover:!1})})}render(){const{rating:e}=this.props,{starsHover:t}=this.state,n=!1!==t?t:e;return a.createElement(l,null,Array(5).fill(0).map((e,t)=>a.createElement(o,{on:null!==n&&n>=t,key:`star-${t}`,onClick:this.setRating,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,value:t})))}}i(c,"propTypes",{onChange:s.func,rating:s.number}),e.exports=c},function(e,t,n){const i=n(0),a=n(2).default,{colors:s}=n(1),r=a.div`
    display: inline-block;
    padding-right: 3px;
`,o=a.svg`
    width: 12px;
    cursor: pointer;

    :hover {
        opacity: ${e=>e.on?.5:1};
    }
`,l=a.g`
    stroke: ${e=>e.on?"none":s._white};

    :hover {
        stroke: none;
    }
`,c=a.g`
    fill: ${e=>e.on?s._white:"transparent"};

    :hover {
        fill: ${s._white};
    }
`,p=i.memo(({on:e,onClick:t,onMouseEnter:n,onMouseLeave:a,value:s})=>i.createElement(r,{onClick:()=>t(s),on:e,onMouseEnter:()=>n(s),onMouseLeave:()=>a(s)},i.createElement(o,{viewBox:"0 0 38 37",xmlns:"http://www.w3.org/2000/svg"},i.createElement(l,{strokeWidth:"1",fill:"none",fillRule:"evenodd",on:e},i.createElement(c,{transform:"translate(-723.000000, -349.000000)",fillRule:"nonzero",on:e},i.createElement("g",{transform:"translate(297.000000, 191.000000)"},i.createElement("g",{transform:"translate(215.000000, 158.000000)"},i.createElement("path",{d:"M231.808476,1.13940625 L236.089018,9.81290625 C236.386684,10.4161563 236.962226,10.8341563 237.628018,10.9307396 L247.200059,12.3216979 C248.876809,12.5655313 249.545768,14.6254479 248.332934,15.8074063 L241.406643,22.5587396 C240.925309,23.0281979 240.705226,23.7050729 240.819226,24.3676979 L242.454018,33.9009479 C242.740601,35.5705729 240.987851,36.8435729 239.488434,36.0558646 L230.927351,31.5552396 C230.332018,31.2425313 229.620309,31.2425313 229.024976,31.5552396 L220.463893,36.0558646 C218.964476,36.8443646 217.211726,35.5705729 217.498309,33.9009479 L219.133101,24.3676979 C219.247101,23.7050729 219.027018,23.0281979 218.545684,22.5587396 L211.619393,15.8074062 C210.406559,14.6246562 211.075518,12.5647396 212.752268,12.3216979 L222.324309,10.9307396 C222.990101,10.8341563 223.565643,10.4161563 223.863309,9.81290625 L228.143851,1.13940625 C228.892768,-0.379802083 231.058768,-0.379802083 231.808476,1.13940625 Z"}))))))));e.exports=p},function(e,t,n){var i,a,s;function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),{connect:l}=n(7),c=n(6),p=n(55),{selectTags:d}=n(11),{getTagAutocomplete:h}=n(51);let u=l(e=>({allTags:d(e)}))((s=a=class extends o.Component{constructor(...e){super(...e),r(this,"state",{autocompleteTag:null,newTag:""}),r(this,"onTagKeyDown",e=>{"Enter"===e.key&&this.state.newTag.length&&(this.resetTagWrite(),this.props.addTag(this.state.newTag)),"Tab"===e.key&&(this.state.autocompleteTag&&(this.resetTagWrite(),this.props.addTag(this.state.autocompleteTag)),e.preventDefault()),"Escape"===e.key&&(this.props.quitTagEdit(),e.preventDefault())}),r(this,"resetTagWrite",()=>{this.setState({autocompleteTag:null,newTag:""},this.calculateVisibleTags)}),r(this,"writeTag",e=>{this.setState({autocompleteTag:h(this.props.allTags,e.target.value,this.props.blacklist),newTag:e.target.value})})}render(){const{autocompleteTag:e,newTag:t}=this.state,{inputWidth:n,quitTagEdit:i}=this.props;return o.createElement(p,{autocomplete:e,autoFocus:!0,onBlur:i,onChange:this.writeTag,onKeyDown:this.onTagKeyDown,value:t,style:{width:n,height:22}})}},r(a,"propTypes",{addTag:c.func,allTags:c.any,blacklist:c.array,quitTagEdit:c.func}),i=s))||i;e.exports=u},,,,,,,,,,,,function(e){e.exports={apiKey:"AIzaSyBrkXIQBEvF9qslWeO91XUUUng3zAH9ZEk",databaseURL:"https://songriffer.firebaseio.com",projectId:"songriffer",storageBucket:"songriffer.appspot.com",messagingSenderId:"246769208094",appId:"1:246769208094:web:6a65c6866b23adc4"}},,function(e,t,n){const i=n(0),a=n(2).default,{colors:s}=n(1),r=a.path`
    fill: ${s._white};
`;e.exports=()=>i.createElement("div",{style:{display:"none"}},i.createElement("svg",null,i.createElement("symbol",{id:"commentIcon",viewBox:"0 0 720 720"},i.createElement(r,{d:"m552.011719-1.332031h-464.023438c-48.515625 0-87.988281 39.464843-87.988281 87.988281v283.972656c0 48.414063 39.300781 87.816406 87.675781 87.988282v128.863281l185.191407-128.863281h279.144531c48.515625 0 87.988281-39.472657 87.988281-87.988282v-283.972656c0-48.523438-39.472656-87.988281-87.988281-87.988281zm50.488281 371.960937c0 27.835938-22.648438 50.488282-50.488281 50.488282h-290.910157l-135.925781 94.585937v-94.585937h-37.1875c-27.839843 0-50.488281-22.652344-50.488281-50.488282v-283.972656c0-27.84375 22.648438-50.488281 50.488281-50.488281h464.023438c27.839843 0 50.488281 22.644531 50.488281 50.488281zm0 0"}),i.createElement(r,{d:"m171.292969 131.171875h297.414062v37.5h-297.414062zm0 0"}),i.createElement(r,{d:"m171.292969 211.171875h297.414062v37.5h-297.414062zm0 0"}),i.createElement(r,{d:"m171.292969 291.171875h297.414062v37.5h-297.414062zm0 0"}))),i.createElement("svg",null,i.createElement("symbol",{id:"playIcon",viewBox:"0 0 32 32"},i.createElement(r,{d:"M27.944 14.237c.18.1.316.2.436.314.143.138.267.297.368.48.027.046.05.094.073.142.124.275.18.553.18.828 0 .275-.056.553-.174.817-.092.205-.22.396-.378.563-.148.156-.32.285-.504.383L9.97 27.748c-.964.537-2.182.19-2.718-.777C6.998 26.516 7 25.24 7 25V6c0-1.1.826-1.932 1.87-1.996.107-.007.213-.006.32.005.364.03.7.158.98.352l17.774 9.875z"}))))},function(e,t,n){const i=n(0),a=n(2).default,s=n(1),r=a.svg`
    width: 225px;
    height: 41px;
    path {
        fill: ${s.colors._white};
    }
    ${e=>e.s};
`;e.exports=({style:e=""})=>i.createElement(r,{s:e},i.createElement("defs",null,i.createElement("clipPath",{id:"logo-name-b"},i.createElement("path",{d:"M.359375.5625H40v38.066406H.359375zm0 0"})),i.createElement("clipPath",{id:"logo-name-c"},i.createElement("path",{d:"M6 10h29v28.628906H6zm0 0"})),i.createElement("clipPath",{id:"logo-name-d"},i.createElement("path",{d:"M210 11h12.085938v17H210zm0 0"})),i.createElement("clipPath",{id:"logo-name-a"},i.createElement("path",{d:"M0 0h223v39H0z"})),i.createElement("g",{id:"logo-name-e",clipPath:"url(#logo-name-a)"},i.createElement("g",{clipPath:"url(#logo-name-b)"},i.createElement("path",{d:"M26.722656 38.628906c8.09375-4.105468 10.417969-12.238281 8.667969-18.65625-1.835937-6.738281-7.867187-11.53125-14.597656-11.695312-7.203125-.179688-13.453125 4.15625-15.691406 10.558594-2.148438 6.160156-.453125 15.359375 8.351562 19.785156C7.757813 37.242188.132813 30.050781.363281 19.652344.585938 9.710938 8.890625 1.113281 18.882813.589844 29.363281.0429688 38.398438 7.523438 39.617188 18.011719c1.242187 10.710937-6.058594 18.621094-12.894532 20.617187"})),i.createElement("path",{d:"M122.683594 23.71875c1.039062 0 2.078125-.011719 3.117187.003906.507813.007813.820313-.089843.808594-.714843-.035156-1.835938.039063-3.675782-.042969-5.507813-.070312-1.527344-.769531-2.382812-2.167968-2.609375-1.894532-.304687-3.824219-.359375-5.710938.054688-1.671875.363281-2.382812 1.621093-2.445312 4.019531-.066407 2.59375.652343 4.070312 2.273437 4.535156.527344.152344 1.101563.1875 1.65625.210938.835938.035156 1.675781.007812 2.511719.007812m7.292969-.839844c0 2.117188.109375 4.242188-.023438 6.351563-.179687 2.777344-1.578125 4.203125-4.367187 4.496094-3.507813.367187-7.03125.082031-10.546875.152343-.457032.007813-.660157-.207031-.636719-.652343.003906-.039063.003906-.082032 0-.121094-.203125-2.546875-.203125-2.539063 2.324219-2.546875 2.4375-.007813 4.878906.035156 7.3125-.054688 1.808593-.066406 2.554687-1 2.574218-2.777343.007813-.675782-.195312-.910157-.875-.898438-1.800781.035156-3.601562-.042969-5.398437.023438-5.4375.195312-7.65625-2.988282-7.601563-8.058594.007813-.792969.132813-1.597656.308594-2.371094.644531-2.84375 2.421875-4.472656 5.355469-4.878906 2.183594-.300781 4.398437-.261719 6.582031-.058594 2.996094.28125 4.625 2.03125 4.980469 5.046875.246094 2.109375.042969 4.234375.011719 6.347656"}),i.createElement("g",{clipPath:"url(#logo-name-c)"},i.createElement("path",{d:"M15.371094 10.894531c-5.789063 2.964844-7.363281 8.558594-6.386719 12.832032 1.15625 5.058593 5.355469 8.65625 10.398438 8.960937 4.886718.296875 9.613281-2.746094 11.289062-7.296875 1.664063-4.523437.695313-10.261719-4.789062-13.890625 3.527343.164063 8.0625 6.761719 8.28125 12.042969.296875 7.261719-5.09375 13.578125-12.394532 14.527344-6.9375.902343-13.890625-3.855469-15.386718-10.53125-1.640625-7.308594 2.28125-14.597657 8.988281-16.644532"})),i.createElement("path",{d:"M54.777344 27.4375c-1.878906.003906-3.757813-.023437-5.636719.015625-.664062.011719-.890625-.179687-.914062-.867187-.117188-2.945313-.140625-2.945313 2.808593-2.945313 3 0 6 .03125 9-.015625 1.851563-.027344 2.859375-1.511719 2.265625-3.199219-.335937-.953125-1.09375-1.332031-2.011718-1.457031-1.871094-.265625-3.753907-.066406-5.632813-.132812-.71875-.023438-1.449219.007812-2.152344-.125-3.195312-.613282-4.859375-2.957032-4.59375-6.398438.25-3.246094 2.253907-5.230469 5.523438-5.292969 3.476562-.070312 6.957031 0 10.4375-.03125.710937-.007812.847656.261719.863281.90625.070313 2.867188.089844 2.867188-2.761719 2.867188-2.597656 0-5.199218-.027344-7.796875.007812-1.609375.023438-2.425781.789063-2.457031 2.175782-.027344 1.320312.695313 2.183593 2.101563 2.261718 1.875.105469 3.753906.066407 5.632812.121094.796875.023438 1.609375.042969 2.378906.222656 3.203125.730469 4.71875 3.09375 4.367188 6.679688-.308594 3.160156-2.378906 5.09375-5.664063 5.195312-1.917968.0625-3.835937.011719-5.757812.011719M141.667969 7c1.761719 0 3.519531-.019531 5.277344.003906 2.964843.046875 5.21875 1.777344 5.808593 4.421875.726563 3.265625-.484375 6.261719-3.167968 7.546875-.726563.347657-.734375.582032-.363282 1.199219 1.277344 2.121094 2.488282 4.28125 3.753907 6.410156.390625.65625.308593.851563-.496094.875-3.207031.089844-3.207031.109375-4.859375-2.71875-.847656-1.445312-1.730469-2.871093-2.550781-4.335937-.3125-.558594-.679688-.796875-1.328125-.773438-1.195313.042969-2.402344.066407-3.59375-.003906-.9375-.058594-1.152344.324219-1.125 1.183594.054687 1.878906-.015625 3.757812.03125 5.636719.019531.785156-.222657 1.011718-1.015625 1.015625-2.800782.007812-2.800782.039062-2.800782-2.789063 0-1.800781-.007812-3.601562.003907-5.398437.015625-2.324219.941406-3.277344 3.28125-3.304688 2.675781-.03125 5.355468.023438 8.035156-.023437 1.921875-.03125 3.066406-1.839844 2.371094-3.636719-.484375-1.242188-1.484375-1.554688-2.695313-1.550781-3.238281.007812-6.476562-.035157-9.714844.023437-1.023437.019531-1.382812-.21875-1.347656-1.3125C135.25 7.003906 135.191406 7 137.710938 7h3.957031M197.761719 18.359375h2.871094c.117187 0 .238281-.011719.355468-.019531 1.445313-.078125 2.113282-.617188 2.128907-1.71875.015625-1.160156-.722657-1.851563-2.132813-1.886719-1.589844-.039062-3.1875-.03125-4.78125-.011719-2.03125.03125-2.683594.78125-2.617187 2.820313.019531.625.207031.84375.828125.824219 1.113281-.03125 2.230468-.007813 3.347656-.007813m2.039062 9.121094c-1.519531 0-3.035156.023437-4.554687-.007813-2.992188-.066406-4.882813-1.871093-4.988281-4.847656-.074219-2.074219-.066407-4.15625-.003907-6.230469.085938-2.832031 1.605469-4.582031 4.445313-4.867187 2.65625-.269531 5.347656-.316406 8.007812.058594 2.53125.359375 3.875 2.183593 3.808594 4.964843-.0625 2.609375-1.386719 4.226563-3.933594 4.40625-2.464843.179688-4.949218.0625-7.421875.148438-.527343.015625-1.359375-.488281-1.550781.550781-.199219 1.078125.375 2.164063 1.328125 2.375.617188.136719 1.269531.160156 1.90625.164063 2.636719.015625 5.273438.027343 7.910156-.007813.765625-.007812 1.027344.214844 1.027344 1.019531-.007812 2.273438.03125 2.273438-2.261719 2.273438h-3.71875M78.390625 24.226563c.597656-.03125 1.195313-.046875 1.789063-.097657 2.109375-.179687 3.007812-.964843 3.351562-3.039062.203125-1.222656.214844-2.460938-.097656-3.683594-.425781-1.675781-1.265625-2.460937-2.972656-2.625-.949219-.089844-1.914063-.0625-2.871094-.058594-2.980469.015625-4.128906 1.113282-4.28125 4.0625-.222656 4.214844.902344 5.414063 5.082031 5.441407m.007813 3.253906c-.761719 0-1.519532.015625-2.277344-.003906-2.777344-.082032-5.023438-1.710938-5.820313-4.347657-.730468-2.425781-.742187-4.890625.011719-7.316406.757813-2.4375 2.464844-3.851562 4.984375-4.246094 1.945313-.304687 3.910156-.292968 5.847656-.0625 3.207032.378907 5.019532 2.078125 5.710938 5.242188.433594 1.972656.402344 3.96875-.101563 5.933594-.753906 2.953125-3.03125 4.730468-6.082031 4.796875-.757812.015625-1.515625.003906-2.273437.003906M91.519531 20c.003907-2.117187-.023437-4.238281.011719-6.355469.023438-1.519531.601563-2.210937 2.070313-2.214843 2.953125-.011719 5.910156-.210938 8.859375.144531 3.8125.464844 5.957031 2.816406 6.011718 6.640625.039063 2.757812-.019531 5.515625.019532 8.269531.011718.785156-.234375 1.015625-1.019532 1.015625C105 27.503906 105 27.539063 105 25.097656c0-2.195312.007813-4.394531-.003906-6.589843-.011719-2.136719-.921875-3.238282-3.050781-3.609375-2.097657-.371094-4.226563-.109375-6.339844-.175782-.84375-.027343-.679688.609375-.679688 1.097657-.007812 3.476562-.042968 6.953125.019532 10.429687.015625.996094-.25 1.285156-1.253907 1.253906-2.167968-.066406-2.171875-.011718-2.171875-2.230468V20M24.71875 30.238281c4.621094-3.769531 3.785156-9.359375.976563-12.136718-3.175782-3.140625-8.335938-3.050782-11.390625.191406-2.839844 3.015625-3.25 8.71875 1.53125 12.125-2.722657-.691406-5.917969-4.804688-5.539063-9.25.4375-5.128906 4.101563-8.761719 9.234375-9.214844 4.382813-.386719 9.011719 2.96875 10.054688 7.289063 1.09375 4.53125-1.023438 9.375-4.867188 10.996093M165 20.863281c.128906-1.8125-.238281-4.019531.214844-6.199218.40625-1.960938 1.414062-2.960938 3.414062-3.101563 1.832032-.128906 3.675782-.054687 5.515625-.085937.496094-.007813.667969.167968.710938.691406.1875 2.433594.207031 2.425781-2.207031 2.433594-.878907.003906-1.765625-.007813-2.632813.09375-1.21875.136718-2.183594 2.46875-1.457031 3.441406.199219.265625.511719.175781.777344.179687 1.320312.007813 2.640625.027344 3.960937-.007812.597656-.015625.820313.136719.839844.789062.085937 2.542969.113281 2.542969-2.460938 2.542969-.679687 0-1.367187.0625-2.039062-.015625-.996094-.117187-1.214844.328125-1.171875 1.222656.0625 1.277344-.003906 2.5625.019531 3.839844.011719.5625-.183594.738281-.757812.769531C165 27.601563 165 27.621094 165 24.964844zm0 0M177.714844 21.078125c0-1.792969-.074219-3.59375.015625-5.386719.140625-2.886718 1.523437-4.164062 4.417969-4.207031 1.476562-.019531 2.957031.035156 4.429687-.019531.789063-.027344 1.007813.234375 1 1.019531-.015625 2.113281.023438 2.105469-2.160156 2.117188-.914063.007812-1.839844-.007813-2.746094.09375-1.246094.136718-2.210937 2.414062-1.488281 3.429687.191406.273438.503906.191406.769531.191406 1.359375.007813 2.71875.03125 4.074219-.007812.613281-.015625.808594.15625.832031.800781.078125 2.53125.101563 2.5-2.464844 2.542969-1.058593.019531-2.417968-.484375-3.09375.246094-.605468.660156-.164062 1.984375-.171875 3.015625-.023437 2.613281-.007812 2.574218-2.566406 2.546875-.804687-.007813-.90625-.324219-.894531-.992188.035156-1.796875.011719-3.59375.011719-5.390625h.035156"}),i.createElement("g",{clipPath:"url(#logo-name-d)"},i.createElement("path",{d:"M210.878906 20.808594c.09375-1.785156-.167968-3.945313.160157-6.09375.300781-1.976563 1.179687-2.9375 3.148437-3.1875 2.378906-.304688 4.785156-.070313 7.175781-.125.386719-.011719.605469.144531.621094.542969.003906.082031.003906.160156.011719.242187.222656 2.53125.222656 2.53125-2.328125 2.535156-1.15625 0-2.316406-.035156-3.472656.023438-1.269532.066406-1.78125.625-1.789063 1.90625-.015625 3.234375-.039062 6.46875.015625 9.703125.011719.894531-.230469 1.160156-1.136719 1.148437-2.402343-.035156-2.40625.007813-2.40625-2.375zm0 0"})),i.createElement("path",{d:"M23.949219 18.628906c2.273437 1.128907 3.460937 4.273438 2.726562 7.210938-.75 2.984375-3.652343 5.164062-6.757812 5.074219-3.148438-.09375-5.859375-2.359375-6.507813-5.390625-.675781-3.1875 1.074219-6.433594 3.375-7.296875-2.636718 2.839843-2.910156 5.910156-.734375 8.257812 1.90625 2.054688 5.21875 2.324219 7.417969.601563 2.570313-2.011719 2.738281-4.957032.480469-8.457032M160.71875 22.878906c0 1.242188-.019531 2.480469.011719 3.71875.011719.582032-.113281.832032-.78125.859375-2.628906.109375-2.628906.136719-2.628906-2.472656 0-1.878906.027343-3.757812-.011719-5.636719-.019531-.722656.105469-1.054687.957031-1.050781 2.453125.007813 2.453125-.035156 2.453125 2.425781v2.15625M157.320313 14.367188c0-1.808594 0-1.808594 1.824218-1.808594 1.597657.003906 1.621094 0 1.636719 1.539062.027344 2.683594.277344 2.144532-2.074219 2.171875-1.691406.015625-1.351562.195313-1.386718-1.902343"}))),i.createElement("use",{xlinkHref:"#logo-name-e"}))},function(e,t,n){var i,a,s;function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),{connect:l}=n(7),c=n(6),p=n(2).default,{setComment:d}=n(12),{selectFileByHashPath:h}=n(11),{colors:u}=n(1),m=p.div`
    min-width: 650px;
`,g=p.textarea`
    display: block;
    width: 100%;
    min-height: 150px;
    padding: 10px;
    border-radius: 10px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.3);
    outline: none;
    color: ${u._white};
    font-size: 16px;
    line-height: 1.4;
    resize: none;

    &::placeholder {
        color: ${u._white};
        opacity: 0.4;
    }
`,f=p.div`
    margin-bottom: 15px;
    font-size: 18px;
    text-align: center;
`;let E=l((e,t)=>({file:h(e,{fileHashPath:t.fileHashPath})}))((s=a=class extends o.Component{constructor(...e){super(...e),r(this,"state",{newComment:this.props.file.comment}),r(this,"textareaRef",o.createRef()),r(this,"saveTimeout",null),r(this,"save",()=>{this.props.dispatch(d(this.props.file.hashPath,this.state.newComment))}),r(this,"onChange",e=>{this.setState({newComment:e.target.value}),clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(this.save,1e3)}),r(this,"onKeyDown",e=>{"Enter"!==e.key||e.shiftKey||(this.props.close(),e.preventDefault())})}componentDidMount(){this.textareaRef.current.focus(),this.textareaRef.current.setSelectionRange(this.state.newComment.length,this.state.newComment.length)}componentWillUnmount(){this.save(),clearTimeout(this.saveTimeout)}render(){const{newComment:e}=this.state;return o.createElement(m,null,o.createElement(f,null,"Comment for: ",this.props.file.name),o.createElement(g,{onChange:this.onChange,onKeyDown:this.onKeyDown,ref:this.textareaRef,value:e,placeholder:"Write a comment about this riff"}))}},r(a,"propTypes",{close:c.func,file:c.object}),i=s))||i;e.exports=E},function(e,t,n){const i=n(0),a=n(6),s=n(39),r=n(9),o=n(1);class l extends i.Component{componentDidMount(){r.trackScreen("modalFileMissing"),r.trackEvent("file","invalid-file",this.props.file.type)}render(){const{file:e}=this.props;return i.createElement("div",null,i.createElement("div",null,"Sorry but we could not import the file ",e.name,"."),i.createElement("div",null,"Only audio files are supported."),i.createElement("div",null,"If you think this is a bug, feel free to contact us at"," ",i.createElement(s,{href:`mailto:${o.email}`},o.email),"."))}}var c,p,d;c=l,p="propTypes",d={dispatch:a.func,file:a.object},p in c?Object.defineProperty(c,p,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[p]=d,e.exports=l},,function(e,t,n){const i=n(0),a=n(6),s=n(2).default,r=s.div`
    max-width: 600px;
`,o=s.div`
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
`,l=i.memo(({message:e,title:t})=>i.createElement(r,null,i.createElement(o,null,t),i.createElement("div",null,e)));l.propTypes={message:a.node,title:a.string},e.exports=l},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a=n(0),s=n(6),r=n(2).default,o=n(39),l=n(27),c=n(9),p=n(24),{openLink:d}=n(15),h=n(1),u=r.div`
    max-width: 700px;
`,m=r.div`
    padding: 45px;
    background: radial-gradient(ellipse at top, ${h.colors.blueLight}, transparent),
        radial-gradient(ellipse at left, ${h.colors.red}, transparent),
        radial-gradient(ellipse at right, ${h.colors.purple}, transparent);
`,g=r.div`
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
`,f=r.div`
    text-align: center;
`,E=r(o)`
    display: block;
    padding: 10px;
    margin-bottom: 10px;
    text-decoration: none;
    text-align: center;
    background: ${h.colors._blue};

    :hover {
        background: ${h.colors.blueGreen};
        color: ${h.colors._black};
    }
`,v=r.div`
    font-size: 14px;
    opacity: 0.7;
    text-align: center;
`,b=r.div`
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
`,_=r.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    :last-child {
        border: none;
    }
`,S=r.div`
    width: ${e=>e.hasVideo?"50%":"100%"};
    padding-right: ${e=>e.hasVideo?"15px":"0"};
`,C=r.div`
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
`,x=r.div`
    font-size: 15px;
    opacity: 0.8;
`,w=r.video`
    width: 50%;
`;class A extends a.Component{constructor(...e){super(...e),i(this,"clickUpdate",()=>{c.trackEvent("app","download-update"),p("Download update from app")})}componentDidMount(){c.trackScreen("modalUpdate")}render(){const{changelog:e,mandatory:t,url:n}=this.props,i=t?"Your app is too old!":"Update version available";return a.createElement(u,null,a.createElement(m,null,a.createElement(g,null,i),t?a.createElement(l,null,a.createElement(f,null,"Please download and install the latest version to keep using SongRiffer")):null,a.createElement(E,{href:n,onClick:this.clickUpdate},"Download the update"),a.createElement(v,null,"Or visit ",a.createElement(o,{onClick:()=>d(h.landingUrl)},h.landingUrl)," to download and install the latest version.")),Array.isArray(e.sections)&&e.sections.length?a.createElement(b,null,a.createElement(y,null,e.title?e.title:"What's new in this update:"),e.description?a.createElement(T,null,e.description):null,a.createElement("div",null,e.sections.map(e=>a.createElement(_,{key:e.title},a.createElement(S,null,a.createElement(C,null,e.title),a.createElement(x,{hasVideo:e.video},e.message)),e.video?a.createElement(w,{autoPlay:!0,playsInline:!0,muted:!0,loop:!0,src:e.video}):null)))):null)}}i(A,"propTypes",{changelog:s.object,mandatory:s.bool,url:s.string}),e.exports=A,e.exports.rootStyle="\n    max-height: 90vh;\n    padding: 0;\n    overflow-y: auto;\n"},function(e,t,n){var i;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),r=n(2).default,{connect:o}=n(7),{removeNotification:l}=n(56),{colors:c}=n(1),p=r.div`
    position: fixed;
    padding: 10px 25px;
    top: ${e=>e.active?0:"-100%"};
    left: 50%;
    transform: translateX(-50%);
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    color: #2e2e2e;
    background: ${e=>"success"===e.status?c.greenLight:c.redLight};
    transition: top ease 0.7s;
    text-align: center;
    cursor: ${e=>e.hasClickAction?"pointer":"default"};

    :hover {
        text-decoration: ${e=>e.hasClickAction?"underline":"none"};
    }
`;let d=o(e=>({notification:e.notifications.notification}))(i=class extends s.Component{constructor(...e){super(...e),a(this,"close",()=>{this.props.dispatch(l())}),a(this,"onClick",()=>{"function"==typeof this.props.notification.onClick&&this.props.dispatch(this.props.notification.onClick())}),a(this,"onMouseEnter",()=>{this.props.notification.onClick&&this.clearTimeout()}),a(this,"onMouseLeave",()=>{this.props.notification.onClick&&this.startTimeout()})}startTimeout(){clearTimeout(this.timeout),this.timeout=setTimeout(this.close,this.props.notification.timeout||3e3)}clearTimeout(){clearTimeout(this.timeout)}componentDidMount(){void 0!==this.props.notification.id&&this.startTimeout()}componentDidUpdate(e){e.notification.id!==this.props.notification.id&&this.startTimeout()}componentWillUmount(){this.clearTimeout()}render(){const{notification:e}=this.props;return s.createElement(p,{active:e.active,status:e?e.status:null,hasClickAction:"function"==typeof this.props.notification.onClick,onClick:this.onClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},e?e.title:null)}})||i;e.exports=d},,,function(e,t,n){e.exports=function(){return new Worker(n.p+"9b8ea8abcf2fd171fa20.worker.js")}},function(e,t,n){const i=n(0),a=n(2).default,{colors:s}=n(1),r=a.svg`
    cursor: pointer;

    path {
        fill: ${e=>e.active?s.blueLight:s._white};
    }
`;e.exports=({displayAdvanced:e,onClick:t})=>i.createElement(r,{viewBox:"0 0 96 96",width:"20",height:"20",onClick:t,active:e,title:e?"Close advanced search":"Open advanced search"},i.createElement("path",{d:"M37.4 12.1c-.7 4.4-1 4.7-6.5 8.3-3.5 2.3-3.6 2.3-8.1.5-5.3-2.1-4.7-2.6-10.8 8l-4.3 7.4 4.2 3.4c3.8 3.2 4.1 3.9 4.1 8.3s-.3 5.1-4.1 8.3l-4.2 3.4 4.3 7.4c6.1 10.6 5.5 10.1 10.8 8 4.5-1.8 4.6-1.8 8.1.5 5.5 3.6 5.8 3.9 6.5 8.3L38 88h5.5c3 0 5.5-.2 5.5-.4s-.9-2.5-2.1-5.1c-1.7-3.8-2-6.3-1.7-11.9l.3-7.1-4-2C27.1 54.3 32 33 48.1 33c5.8 0 10.7 3.1 13.4 8.5l2 4h8.2c5.7 0 8.3-.4 8.3-1.2 0-.6 1.9-2.7 4.1-4.6l4.2-3.4-4.3-7.4c-6.1-10.6-5.5-10.1-10.8-8-4.5 1.8-4.6 1.8-8.1-.5-5.5-3.6-5.8-3.9-6.5-8.3L58 8H38l-.6 4.1z"}),i.createElement("path",{d:"M62.5 53.7C55.2 57.5 52 63.1 52 72c0 12.6 7.4 20 19.9 20 3.3 0 7.2-.5 8.6-1.2 2.3-1 2.9-.8 5.8 2 3.9 3.8 4.7 3.9 7.5.9 2.9-3 2.8-3.5-1-7.4-2.8-2.9-3-3.5-2-5.8 2.8-6.2 1-17.5-3.7-22.9-4.7-5.3-17.9-7.5-24.6-3.9zm15.4 8.7c6.8 3.6 6.8 15.6 0 19.2-8.2 4.2-17-.9-16.9-9.8.1-8.7 8.9-13.5 16.9-9.4z"}))},function(e,t,n){var i;const a=n(0),s=n(2).default,{connect:r}=n(7),{Link:o,Route:l}=n(29),c=n(141),p=n(142),d=n(86),h=n(143),u=n(27),m=n(144),{selectSelectedFile:g}=n(11),f=n(1),E=s.div`
    display: flex;
    flex-direction: column;
    width: 75px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: ${e=>e.playerOpen?"50px":0};
    margin-right: 15px;
    font-size: 13px;
    border-right: 1px solid ${f.colors.blueLight};
`,v=s.div`
    flex: 1;
`,b=s.div``,y=s(o)`
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
        background: ${f.colors.blueLight};
        transition: width ease 0.3s;
    }
`,T=s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin-bottom: 15px;
    color: ${f.colors._white};

    :hover {
        color: ${f.colors.blueLight};
    }
`;let _=r(e=>({enableExperimental:e.application.enableExperimental,selectedFile:g(e),updateAvailable:e.application.updateAvailable}))(i=class extends a.Component{renderItem(e,t){return a.createElement(l,{path:e,children:({match:n})=>a.createElement(y,{to:e,isActive:n&&n.isExact},a.createElement(T,null,t))})}render(){const{enableExperimental:e,selectedFile:t,updateAvailable:n}=this.props;return a.createElement(E,{playerOpen:!!t},a.createElement(v,null,this.renderItem(f.routes.home,a.createElement(a.Fragment,null,a.createElement(u,{size:"s"},a.createElement(c,null)),a.createElement("div",null,"Riffs"))),this.renderItem(f.routes.transfer,a.createElement(a.Fragment,null,a.createElement(u,{size:"s"},a.createElement(d,null)),a.createElement("div",null,"Mobile Transfer"))),this.renderItem(f.routes.recorder,a.createElement(a.Fragment,null,a.createElement(u,{size:"s"},a.createElement(h,null)),a.createElement("div",null,"Recorder"))),this.renderItem(f.routes.stats,a.createElement(a.Fragment,null,a.createElement(u,{size:"s"},a.createElement(m,null)),a.createElement("div",null,"Stats"))),e?this.renderItem(f.routes.projects,a.createElement(a.Fragment,null,a.createElement(u,{size:"s"},a.createElement(c,null)),a.createElement("div",null,"Projects"))):null),a.createElement(b,null,this.renderItem(f.routes.settings,a.createElement(a.Fragment,null,a.createElement(u,{size:"s"},a.createElement(p,null)),n?a.createElement("div",null,"Update available"):null))))}})||i;e.exports=_},function(e,t,n){const i=n(0),a=n(6),s=n(2).default,{colors:r}=n(1),o=s.svg`
    width: ${e=>e.width}px;
`,l=({width:e=20})=>i.createElement(o,{width:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"169.575 120.149 37.333 37.253"},i.createElement("defs",null,i.createElement("path",{d:"M170.57 120h33.34v7.75h-33.34v-15.47z",id:"file-list-a"}),i.createElement("path",{d:"M170.57 135h33.34v7.74h-33.34v-15.47z",id:"file-list-b"}),i.createElement("path",{d:"M170.57 150h33.34v7.74h-33.34v-15.47z",id:"file-list-c"})),i.createElement("use",{xlinkHref:"#file-list-a",fill:r.blueLight}),i.createElement("use",{xlinkHref:"#file-list-b",fill:r.blueLight}),i.createElement("use",{xlinkHref:"#file-list-c",fill:r.blueLight}));l.propTypes={width:a.number},e.exports=l},function(e,t,n){const i=n(0),{Spring:a}=(n(2).default,n(14)),{colors:s}=n(1);e.exports=()=>{const[e,t]=i.useState(!1);return i.createElement("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1)},i.createElement(a,{from:{angle:"0deg"},to:{angle:e?"60deg":"0deg"}},e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",viewBox:"0 0 21 20",style:{transform:`rotate(${e.angle})`}},i.createElement("path",{fill:s.blueLight,fillRule:"nonzero",d:"M20.84 8.89c-.032-.282-.36-.493-.643-.493-.917 0-1.73-.538-2.07-1.37a2.227 2.227 0 0 1 .558-2.473.555.555 0 0 0 .061-.754 9.895 9.895 0 0 0-1.584-1.6.557.557 0 0 0-.76.062c-.596.66-1.667.905-2.494.56A2.221 2.221 0 0 1 12.557.65a.555.555 0 0 0-.49-.584A9.984 9.984 0 0 0 9.816.06a.556.556 0 0 0-.496.572 2.225 2.225 0 0 1-1.369 2.133c-.817.334-1.88.091-2.476-.563a.558.558 0 0 0-.754-.064 9.933 9.933 0 0 0-1.618 1.6.556.556 0 0 0 .06.76c.696.63.92 1.633.559 2.495-.345.822-1.199 1.352-2.176 1.352a.544.544 0 0 0-.578.49 10.017 10.017 0 0 0-.004 2.275c.031.282.37.491.656.491.87-.022 1.707.517 2.057 1.37.35.853.125 1.847-.559 2.474a.556.556 0 0 0-.06.753c.464.592.997 1.13 1.581 1.6.23.185.563.16.762-.06.598-.661 1.668-.906 2.493-.56a2.218 2.218 0 0 1 1.353 2.17.555.555 0 0 0 .49.584 9.94 9.94 0 0 0 2.25.006.557.557 0 0 0 .495-.572 2.223 2.223 0 0 1 1.368-2.133c.823-.336 1.882-.09 2.477.563a.559.559 0 0 0 .755.064 9.956 9.956 0 0 0 1.618-1.6.555.555 0 0 0-.06-.76 2.216 2.216 0 0 1-.56-2.495 2.239 2.239 0 0 1 2.045-1.355l.124.003a.557.557 0 0 0 .585-.49c.088-.752.09-1.517.005-2.274zm-9.922 4.467a3.34 3.34 0 0 1-3.335-3.336 3.34 3.34 0 0 1 3.335-3.335 3.34 3.34 0 0 1 3.336 3.335 3.34 3.34 0 0 1-3.336 3.336z"}))))}},function(e,t,n){const i=n(0),a=n(2).default,{colors:s}=n(1),r=a.svg`
    width: ${e=>e.width}px;
`;e.exports=({animated:e=!1,width:t=20})=>i.createElement(r,{xmlns:"http://www.w3.org/2000/svg",viewBox:"229.839 194.175 68.196 68.196",width:t},i.createElement("defs",null,i.createElement("path",{d:"M295.03 227.27c0 17.72-14.38 32.1-32.09 32.1-17.72 0-32.1-14.38-32.1-32.1 0-17.71 14.38-32.1 32.1-32.1 17.71 0 32.09 14.39 32.09 32.1z",id:"recorder-a"})),i.createElement("use",{xlinkHref:"#recorder-a",fill:s.blueLight}))},function(e,t,n){const i=n(0),a=n(2).default,{colors:s}=n(1),r=a.svg`
    width: ${e=>e.width}px;
`;e.exports=({animated:e=!1,width:t=20})=>i.createElement(r,{width:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"159.476 103.524 63.048 56.381"},i.createElement("defs",null,i.createElement("path",{d:"M160.48 130.71h15.47v26.19h-15.47v-26.19z",id:"stats-a"}),i.createElement("path",{d:"M181.67 114.05h15.47v42.85h-15.47v-42.85z",id:"stats-b"}),i.createElement("path",{d:"M204.05 104.52h15.47v52.38h-15.47v-52.38z",id:"stats-c"})),i.createElement("use",{xlinkHref:"#stats-a",fill:s.blueLight}),i.createElement("use",{xlinkHref:"#stats-b",fill:s.blueLight}),i.createElement("use",{xlinkHref:"#stats-c",fill:s.blueLight}))},function(e,t,n){const i=n(1);e.exports.setMXML=(e,t)=>({type:i.actionTypes.SET_MXML,filePath:e,mxml:t})},,function(e,t,n){const i=n(1),a={files:{}};e.exports=(e=a,t)=>{switch(t.type){case i.actionTypes.TRANSFER_SET_FILE_LIST:return{...e,files:t.files};case i.actionTypes.TRANSFER_SAVE_SUCCESS:return{...e,files:{...e.files,[t.fileName]:{...e.files[t.fileName],transfered:!0,success:!0,filePath:t.filePath,receiving:!1}}};case i.actionTypes.TRANSFER_START_TRANFER:return{...e,files:{...e.files,[t.fileName]:{...e.files[t.fileName],receiving:!0}}};case i.actionTypes.TRANSFER_RESET:return a;default:return e}}},function(e,t,n){const i=n(9),a=n(1);let s=null;let r=null;e.exports=()=>e=>t=>{switch(e(t),t.type){case a.actionTypes.ADD_TAG:i.trackEvent("file","add-tag",t.tag);break;case a.actionTypes.CHECK_UPDATE:i.trackEvent("app",`check-update-${t.manual?"manual":"auto"}`,window.__songRiffer.version);break;case a.actionTypes.CHECK_UPDATE_FAILED:i.trackEvent("app","check-update-failed",window.__songRiffer.version);break;case a.actionTypes.CHECK_UPDATE_NO_UPDATE:i.trackEvent("app","check-update-no-update-manual",window.__songRiffer.version);break;case a.actionTypes.UPDATE_AVAILABLE:i.trackEvent("app","check-update-success-auto",window.__songRiffer.version);break;case a.actionTypes.CHECK_UPDATE_SUCCESS:i.trackEvent("app","check-update-success-manual",window.__songRiffer.version);break;case a.actionTypes.CLEAR_SEARCH:i.trackEvent("search","clear-search");break;case a.actionTypes.REMOVE_FILE:i.trackEvent("file","remove-file");break;case a.actionTypes.REMOVE_TAG:i.trackEvent("file","remove-tag",t.tag);break;case a.actionTypes.SEARCH_BASIC:t.term.length&&(e=>{clearTimeout(s),s=setTimeout(()=>{i.trackEvent("search","search-basic",e)},1e3)})(t.term.toLowerCase());break;case a.actionTypes.SEARCH_BPM:i.trackEvent("search","search-bpm",t.bpm);break;case a.actionTypes.SEARCH_TAG:i.trackEvent("search","search-tag",t.tag.toLowerCase());break;case a.actionTypes.SET_COMMENT:i.trackEvent("file","set-comment");break;case a.actionTypes.SET_RATING:i.trackEvent("file","set-rating");break;case a.actionTypes.SET_SEARCH:t.term&&(e=>{clearTimeout(r),r=setTimeout(()=>{i.trackEvent("search","search-term",e)},1e3)})(t.term.toLowerCase());break;case a.actionTypes.SET_SORT_RULE:i.trackEvent("file","sort",t.sortRule);break;case a.actionTypes.TOGGLE_ADVANCED_SEARCH:i.trackEvent("search","toggle-advanced")}}},,function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(32),s=n(18),r=n(1);const o=n(72),l=()=>({type:r.actionTypes.TOGGLE_ADVANCED_SEARCH,__saveToDB__:!0,__db:r.db.app}),c=e=>(o.start("search"),{type:r.actionTypes.SEARCH_TAG,tag:e.trim()}),p=e=>({type:r.actionTypes.SET_SEARCH_ARCHIVED,archived:e});var d,h,u;function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const g=n(0),{connect:f}=n(7),E=n(6),v=n(37),b=n(70),y=n(38),T=n(55),_=n(103),{getTagAutocomplete:S}=n(51),{selectTags:C}=n(11),x=n(1),w=i.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${e=>e.visible?"300px":0};
    border-left: ${e=>e.visible?`1px solid ${x.colors.blueLight}`:0};
    transition: width ease 0.5s;
    transform: translateZ(0);
`,A=i.default.div`
    position: absolute;
    width: ${300}px;
    height: 100%;
    padding-left: 15px;
    top: 0;
    left: 0;
`,R=i.default.div`
    margin-bottom: 15px;
`,L=i.default.div`
    margin-bottom: 5px;
    color: ${x.colors.blueLight};
`,k=i.default.div`
    margin-bottom: 15px;
    display: flex;
`,F=i.default.span`
    display: flex;
    flex: 1;
    align-items: center;
`,D=i.default.div`
    margin-top: 25px;
`,P=i.default.div`
    display: flex;
    align-items: center;

    span {
        margin: 0 5px;
    }
`,I=Object(i.default)(y)`
    width: 70px;

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        margin: 0;
        appearance: none;
    }
`;var O=f(e=>({allTags:C(e),search:Object(s.a)(e),visible:Object(s.a)(e).displayAdvanced}))((u=h=class extends g.Component{constructor(...e){super(...e),m(this,"state",{autocompleteTag:null,newTag:""}),m(this,"rootRef",g.createRef()),m(this,"nameInputRef",g.createRef()),m(this,"searchName",e=>{this.props.dispatch((e=>(o.start("search"),{type:r.actionTypes.SET_SEARCH,term:e}))(e.target.value))}),m(this,"onBPMChange",e=>{this.props.dispatch((e=>(o.start("search"),{type:r.actionTypes.SEARCH_BPM,bpm:e}))(e.target.value))}),m(this,"onBPMDeltaChange",e=>{this.props.dispatch((e=>(o.start("search"),{type:r.actionTypes.SEARCH_BPM_DELTA,bpmDelta:e}))(e.target.value))}),m(this,"onTagChange",e=>{const t=Object.keys(this.props.search.tags);this.setState({autocompleteTag:S(this.props.allTags,e.target.value,t),newTag:e.target.value})}),m(this,"onTagKeyDown",e=>{if("Tab"===e.key&&this.state.autocompleteTag)return this.props.dispatch(c(this.state.autocompleteTag)),e.preventDefault(),void this.quitTagEdit();"Enter"===e.key&&this.state.newTag.length&&(this.props.dispatch(c(this.state.newTag)),this.quitTagEdit())}),m(this,"clearSearch",()=>{this.props.dispatch((()=>({type:r.actionTypes.CLEAR_SEARCH}))())}),m(this,"removeTag",e=>{this.props.dispatch((e=>(o.start("search"),{type:r.actionTypes.REMOVE_SEARCH_TAG,tag:e}))(e))}),m(this,"onTransitionEnd",()=>{this.props.dispatch((()=>({type:r.actionTypes.ADVANCED_TRANSITION_DONE}))())}),m(this,"onSwitchArchived",e=>{e.target.checked?this.props.dispatch(p(x.searchArchived.ALL)):this.props.dispatch(p(x.searchArchived.NON_ARCHIVED))})}quitTagEdit(){this.setState({autocompleteTag:null,newTag:""})}shouldComponentUpdate(e){return this.props.visible||e.visible}componentDidMount(){this.rootRef.current.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})}componentWillUnmout(){this.rootRef.current.removeEventListener("transitionend",this.onTransitionEnd)}render(){const{search:e,visible:t}=this.props,{autocompleteTag:n,newTag:i}=this.state,a=e.term.length||e.bpm||Object.keys(e.tags).length,s=t?void 0:-1;return g.createElement(w,{visible:t,ref:this.rootRef},g.createElement(A,null,g.createElement(R,null,g.createElement(L,null,"Name"),g.createElement(y,{isFullWidth:!0,type:"text",onChange:this.searchName,value:e.term,tabIndex:s,id:"advanced-search-input",ref:this.nameInputRef})),g.createElement(R,null,g.createElement(L,null,"Tags"),g.createElement(T,{isFullWidth:!0,autocomplete:n,autocompleteStyle:"\n    top: 3px;\n    left: 2px;\n",onChange:this.onTagChange,onKeyDown:this.onTagKeyDown,value:i,tabIndex:s}),Object.keys(e.tags).length?g.createElement(D,null,Object.keys(e.tags).map(e=>g.createElement(b,{key:e,onDelete:()=>this.removeTag(e),deleteTitle:"Remove this tag from the search",additionalStyle:"\n    margin-bottom: 5px;\n"},e))):null),g.createElement(R,null,g.createElement(L,null,"Tempo"),g.createElement(P,null,g.createElement(I,{type:"number",onChange:this.onBPMChange,value:e.bpm,min:1,tabIndex:s}),g.createElement("span",null,"bpm + / - "),g.createElement(I,{type:"number",onChange:this.onBPMDeltaChange,value:e.bpmDelta,title:e.bpm?`Results will include riffs that have a tempo between ${e.bpm-10} and ${e.bpm+10}`:null,min:0,tabIndex:s}))),g.createElement(k,null,g.createElement(F,null,"Show archived files"),g.createElement(_,{onChange:this.onSwitchArchived,checked:e.archived===x.searchArchived.ALL})),a?g.createElement(v,{onClick:this.clearSearch,tabIndex:s},"Clear search"):null))}},m(h,"propTypes",{allTags:E.any,dispatch:E.func,search:E.object,visible:E.bool}),d=u))||d,M=n(58),U=n(0),N=n.n(U),$=n(31),j=n(5);const{Trail:H,config:B}=n(14),G=n(58),V=i.default.div`
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`,z=i.default.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
`,W=i.default.div`
    position: relative;
    padding: 50px;
    background: ${r.colors._blackDark};
    border-radius: 3px;
    text-align: center;
    z-index: 2;
    font-size: 25px;
`;class K extends U.Component{constructor(...e){var t,n,i;super(...e),i={fakeFiles:[]},(n="state")in(t=this)?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}async getFakeFiles(){const e=(await j.a.getRemoteConfigValue("FILES_EMPTY_DATA",[])).map(e=>new $.a(e));this.setState({fakeFiles:e})}componentDidMount(){this.getFakeFiles()}render(){return U.createElement(V,null,U.createElement(z,null,U.createElement(H,{items:this.state.fakeFiles,keys:e=>e.path,from:{transform:"translate3d(0, 40px, 0)",opacity:0},to:{transform:"translate3d(0, 0, 0)",opacity:1}},(e,t)=>n=>{const i=Math.max(Math.min(1-t/this.state.fakeFiles.length,n.opacity),0);return U.createElement("div",{key:`fake-${e.path}`,style:{...n,opacity:i}},U.createElement(G,{file:e}))})),U.createElement(W,null,"Drag and drop files to start building your library"))}}var Y,X,q,J=n(48),Z=n(11);function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ee=n(0),{connect:te}=n(7),ne=n(6),ie=n(2).default,ae=n(106),se=n(73),re=n(43),{selectUser:oe}=n(23),{addFiles:le,disableNewImports:ce,migrateLegacyData:pe,setSortRule:de,setFiles:he}=n(12),{setAllowFileDragging:ue}=n(35),me=n(72),ge=n(9),{checkFiles:fe}=n(15),{colors:Ee,sortRules:ve}=n(1),be=ie.div`
    margin-top: 50px;
    color: #555;
`,ye=ie.div`
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${Ee.blueLight};
    z-index: 2;
`,Te=ie(se)`
    color: ${Ee.blueLight};
`,_e=ie.div`
    padding: 20px 0;
    text-align: center;
`,Se=ie.div`
    display: flex;
    align-items: center;
    cursor: ${e=>e.onClick?"pointer":"default"};
`,Ce=ie(Se)`
    justify-content: center;
`;let xe=te((e,t)=>({_dataToMigrate:e.files._dataToMigrate,_winBackup:e.files._winBackup,files:Object(Z.selectFiles)(e),filesCount:Object(Z.selectFilesCount)(e),location:t.location,pending:e.files.pending,selectedFile:Object(Z.selectSelectedFile)(e),sortRule:Object(Z.selectSortRule)(e),user:oe(e)}))((q=X=class extends ee.PureComponent{constructor(...e){super(...e),Q(this,"listRef",ee.createRef()),Q(this,"onTagClick",e=>{this.props.dispatch(c(e))}),Q(this,"sortByName",()=>{this._sort(ve.NAME_ASC,ve.NAME_DESC)}),Q(this,"sortByDuration",()=>{this._sort(ve.DURATION_ASC,ve.DURATION_DESC)}),Q(this,"sortByBPM",()=>{this._sort(ve.BPM_ASC,ve.BPM_DESC)}),Q(this,"sortByRating",()=>{this._sort(ve.RATING_DESC,ve.RATING_ASC)})}_sort(e,t){return this.props.sortRule!==e&&this.props.sortRule!==t?this.props.dispatch(de(e)):this.props.sortRule===e?this.props.dispatch(de(t)):void this.props.dispatch(de(null))}scrollToFile(e){if(this.listRef.current)try{const t=document.querySelector(e);t&&(this.listRef.current.scrollTop=t.offsetTop-75)}catch(e){}}listenFilesUpdate(){this.removeFileListener=j.a.listenForFilesUpdate(this.props.user.uid,e=>{this.props.dispatch(he(e)),fe(e)})}renderStickyHeader(){const{files:e,filesCount:t,sortRule:n}=this.props;return ee.createElement(ye,null,t?ee.createElement("div",null,"Showing ",e.length," of ",t," riffs"):ee.createElement("div",null," "),ee.createElement(Te,null,ee.createElement(Se,{onClick:this.sortByName},"Name",n===ve.NAME_ASC?ee.createElement(ae,{rotate:!0}):null,n===ve.NAME_DESC?ee.createElement(ae,null):null),ee.createElement(Ce,{onClick:this.sortByDuration},"Duration",n===ve.DURATION_ASC?ee.createElement(ae,{rotate:!0}):null,n===ve.DURATION_DESC?ee.createElement(ae,null):null),ee.createElement(Se,null,"Tags"),ee.createElement(Ce,{onClick:this.sortByBPM},"BPM",n===ve.BPM_ASC?ee.createElement(ae,{rotate:!0}):null,n===ve.BPM_DESC?ee.createElement(ae,null):null),ee.createElement(Ce,null,"Time Signature"),ee.createElement(Se,{onClick:this.sortByRating},"Rating",n===ve.RATING_ASC?ee.createElement(ae,{rotate:!0}):null,n===ve.RATING_DESC?ee.createElement(ae,null):null),ee.createElement(Se,null)))}componentDidMount(){ge.trackScreen("home"),null!==this.props._dataToMigrate&&this.props.dispatch(pe(this.props._dataToMigrate,this.props._winBackup)),this.listenFilesUpdate(),this.props.dispatch(ue(!0)),this.props.location.hash&&this.scrollToFile(this.props.location.hash)}componentDidUpdate(e){e.files!==this.props.files&&me.end("search"),e.location.hash!==this.props.location.hash&&this.scrollToFile(this.props.location.hash)}componentWillUnmount(){this.props.dispatch(ue(!1)),this.props.dispatch(ce()),this.removeFileListener()}render(){const{files:e,filesCount:t,pending:n,selectedFile:i}=this.props,a=`\n            padding-bottom: ${i?"70px":0};\n        `;return ee.createElement(re,{stickyHeader:this.renderStickyHeader(),wrapperStyle:a,scrollElementRef:this.listRef},n?ee.createElement(J.a,null):ee.createElement(ee.Fragment,null,t?ee.createElement(ee.Fragment,null,e.length?e.map(e=>ee.createElement(M.default,{file:e,key:e.hashPath,onTagClick:this.onTagClick,selected:i&&i.hashPath===e.hashPath})):ee.createElement(_e,null,"No files are matching your search"),ee.createElement(be,null,"+ Drag and drop a file to add it to your library")):ee.createElement(K,null)))}},Q(X,"propTypes",{_dataToMigrate:ne.object,dispatch:ne.func,files:ne.array,filesCount:ne.number,selectedFile:ne.any,sortRule:ne.string}),Y=q))||Y;var we;function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Re=n(0),{connect:Le}=n(7),ke=n(2).default,Fe=n(69),De=n(46),{removeFile:Pe,replaceFile:Ie}=n(12),{addNotification:Oe}=n(56),{importFiles:Me}=n(57),Ue=n(9),{checkFiles:Ne}=n(15),$e=n(1),je=ke.div`
    margin-top: 20px;
    padding: 50px;
    text-align: center;
    border: 5px dashed ${e=>e.dragging?$e.colors.blueLight:$e.colors._blue};
    transition: border-color ease 0.2s;
`,He=ke.div`
    margin-bottom: 20px;
    font-weight: 600;
`;let Be=Le((e,t)=>({file:Object(Z.selectFileByHashPath)(e,{fileHashPath:t.fileHashPath}),files:Object(Z._selectFiles)(e),missingFiles:e.files.missingFiles}))(we=class extends Re.Component{constructor(...e){super(...e),Ae(this,"dropRef",Re.createRef()),Ae(this,"state",{dragging:!1,replace:!1}),Ae(this,"checkFileAccess",()=>{Ne(this.props.files)}),Ae(this,"onClickReplace",()=>{this.setState({replace:!0})}),Ae(this,"removeFile",()=>{this.props.close(),this.props.dispatch(Pe(this.props.file.hashPath))}),Ae(this,"replaceFile",e=>{Me(this.props.dispatch,e.slice(0,1),e=>{const t=e[Object.keys(e)[0]];t&&(this.props.close(),this.props.dispatch(Ie(this.props.file.hashPath,t)))})})}componentDidMount(){Ue.trackScreen("modalFileMissing")}componentDidUpdate(e,t){!t.replace&&this.state.replace&&(this.removeDrag=Fe(this.dropRef.current,{onDrop:this.replaceFile,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})),e.missingFiles.includes(e.file.hashPath)&&!this.props.missingFiles.includes(this.props.file.hashPath)&&(this.props.dispatch(Oe("File successfully located")),this.props.close())}componentWillUmount(){this.removeDrag&&this.removeDrag()}render(){const{file:e}=this.props,{dragging:t,replace:n}=this.state;return Re.createElement("div",null,Re.createElement(He,null,"We could not locate the file ",e.name),n?Re.createElement(je,{ref:this.dropRef,dragging:t},"Drag and drop the file here to replace it"):Re.createElement("div",null,Re.createElement(De,{onClick:this.checkFileAccess},"Check again"),Re.createElement(De,{onClick:this.onClickReplace},"Replace it"),Re.createElement(De,{onClick:this.removeFile,last:!0},"Remove it from my riff library")))}})||we;var Ge,Ve,ze,We=n(12),Ke=n(22),Ye=n(41);function Xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const qe=n(0),{connect:Je}=n(7),Ze=n(6),Qe=n(46),{openInFinder:et}=n(15),tt=n(9),{selectFileByHashPath:nt}=n(11),{selectUser:it}=n(23),{colors:at,modals:st}=n(1);i.default.div`
    margin-bottom: 20px;
    font-weight: bold;
`;var rt=Je((e,t)=>({file:nt(e,{fileHashPath:t.file.hashPath}),user:it(e)}))((ze=Ve=class extends qe.Component{constructor(...e){super(...e),Xe(this,"state",{downloadUrl:"",uploadError:!1,uploading:!1,uploadProgress:0,uploadSuccess:!1}),Xe(this,"openInFinder",()=>{et(this.props.file.path),tt.trackEvent("file","open-in-finder"),this.props.close()}),Xe(this,"toggleFileArchive",()=>{j.a.updateFile(this.props.user,this.props.file.hashPath,{archived:!this.props.file.archived}),tt.trackEvent("file",this.props.file.archived?"unarchive":"archive"),this.props.close()}),Xe(this,"removeFile",()=>{this.props.close(),this.props.dispatch(Object(We.removeFile)(this.props.file.hashPath))}),Xe(this,"onUploadProgress",e=>{this.setState({uploadProgress:e})}),Xe(this,"onUploadError",e=>{console.error("Error uploading",e),this.setState({uploadError:!0,uploading:!1})}),Xe(this,"onUploadSuccess",()=>{this.setState({uploading:!1,uploadSuccess:!0}),console.log("## success"),this.props.dispatch(Object(We.setFileUploadedStatus)(this.props.file.hashPath,!0)),this.setDownloadUrl()}),Xe(this,"onUploadRunning",()=>{this.setState({uploading:!0})}),Xe(this,"handleUploadFile",()=>{this.props.file.uploaded?j.a.deleteFile(this.props.user,this.props.file.name).then(()=>{console.log("### deleted"),this.props.dispatch(Object(We.setFileUploadedStatus)(this.props.file.hashPath,!1))}).catch(e=>{console.log("#### error deleting"),console.log(e)}):fetch(this.props.file.escapedPath).then(e=>e.blob()).then(e=>{j.a.uploadFile(this.props.user,this.props.file.name,e,{onError:this.onUploadError,onProgress:this.onUploadProgress,onRunning:this.onUploadRunning,onSuccess:this.onUploadSuccess})})}),Xe(this,"openPublicLinkModal",()=>{this.props.dispatch(Object(Ke.openModal)(st.publicLink,{file:this.props.file}))})}setDownloadUrl(){j.a.getFileDownloadUrl(this.props.user,this.props.file.name).then(e=>this.setState({downloadUrl:e}))}renderUploadButton(){const{uploadError:e,uploading:t,uploadProgress:n}=this.state;return t?qe.createElement("span",null,"Uploading... ",n.toFixed(0),"%"):e?qe.createElement("span",null,"Error uploading"):this.props.file.uploaded?"Remove file from cloud":"Upload file"}componentDidMount(){tt.trackScreen("modalFileOptions"),this.props.file.uploaded&&this.setDownloadUrl()}render(){const{file:e,user:t}=this.props,{downloadUrl:n}=this.state;return qe.createElement(qe.Fragment,null,Object(Ye.hasUpload)(t)?e.missing&&!e.uploaded?null:qe.createElement(Qe,{onClick:this.handleUploadFile,first:!0},this.renderUploadButton()):null,e.uploaded?qe.createElement(Qe,{onClick:this.openPublicLinkModal},"Share"):null,e.uploaded?qe.createElement(Qe.ModalLink,{href:n,download:!0},"Download"):null,e.missing?null:qe.createElement(Qe,{onClick:this.openInFinder},"Open in ","darwin"===window.__songRiffer.platform?"Finder":"File Explorer"),qe.createElement(Qe,{onClick:this.toggleFileArchive},e.archived?"Unarchive":"Archive"," file"),qe.createElement(Qe,{onClick:this.removeFile},"Remove from my riff library"))}},Xe(Ve,"propTypes",{close:Ze.func,dispatch:Ze.func,file:Ze.object.isRequired}),Ge=ze))||Ge,ot=n(7);const lt={margin:"auto",background:"none",display:"block"};var ct,pt=({size:e=100})=>N.a.createElement("svg",{style:lt,width:`${e}px`,height:`${e}px`,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},N.a.createElement("circle",{cx:"50",cy:"50",fill:"none",stroke:r.colors.blueLight,strokeWidth:"3",r:"29",strokeDasharray:"136.659280431156 47.553093477052",transform:"rotate(194.885 50 50)"},N.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1.1235955056179776s",values:"0 50 50;360 50 50",keyTimes:"0;1"}))),dt=n(27),ht=n.n(dt),ut=n(15),mt=n(17);function gt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ft=n(67),Et=n(46),{selectFileByHashPath:vt}=n(11),{selectUser:bt}=n(23),yt=n(9),Tt=n(24),_t=i.default.div`
    max-width: 340px;
`,St=i.default.div`
    font-size: 18px;
`;var Ct,xt,wt,At=Object(ot.connect)((e,t)=>({file:vt(e,{fileHashPath:t.file.hashPath}),user:bt(e)}))(ct=class extends N.a.Component{constructor(...e){super(...e),gt(this,"state",{copied:!1,loading:!1}),gt(this,"createPublicLink",()=>{this.setState({loading:!0}),yt.trackEvent("share","create-link"),Tt("Share link created"),j.a.createFilePublicId(this.props.file.hashPath).then(e=>{this.setState({loading:!1})}).catch(e=>{console.error(e),this.setState({loading:!1})})}),gt(this,"copyLink",()=>{yt.trackEvent("share","copy-link"),Tt("Share link copied");const e=Object(mt.getShareLink)(this.props.user.uid,this.props.file.publicId);Object(ut.copyToClipboard)(e),this.setState({copied:!0})}),gt(this,"disableLink",()=>{yt.trackEvent("share","disable-link"),this.setState({loading:!0}),j.a.deleteFilePublicId(this.props.file.hashPath).then(e=>{this.setState({loading:!1}),console.log(e)}).catch(e=>{this.setState({loading:!1}),console.error(e)})})}componentDidMount(){yt.trackScreen("modalPublicLink")}render(){const{file:e}=this.props,{copied:t,loading:n}=this.state;return N.a.createElement(_t,null,N.a.createElement(St,null,"Share a link to this file"),N.a.createElement(ht.a,{size:"md"},"Everyone who will have the link created will be able to listen to your file but won't be able to edit it."),n?N.a.createElement(pt,{size:50}):e.public&&e.publicId?N.a.createElement(N.a.Fragment,null,N.a.createElement(Et,{onClick:this.copyLink,first:!0},t?N.a.createElement(N.a.Fragment,null,"Copied to clipboard ",N.a.createElement(ft,{width:"15"})):N.a.createElement(N.a.Fragment,null,"Copy Link")),N.a.createElement(Et,{onClick:this.disableLink},"Disable link")):N.a.createElement(Et,{onClick:this.createPublicLink,first:!0},"Create public link"))}})||ct,Rt=n(13);function Lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const kt=n(0),Ft=n(2).default,{connect:Dt}=n(7),Pt=n(6),It=n(37),{removeFile:Ot}=n(12),{selectFileByHashPath:Mt}=n(11),{unlinkFile:Ut}=n(15),Nt=n(9),$t=n(1),jt=Ft.div`
    max-width: 300px;
`,Ht=Ft.div`
    margin-bottom: 25px;
    font-size: 16px;
    line-height: 1.4;
`,Bt=Ft.span`
    color: ${$t.colors.bluePastel};
`,Gt=Ft.div`
    display: flex;
    justify-content: space-between;
`,Vt=Ft(It)`
    padding: 10px 25px;
`;var zt,Wt=Dt((e,t)=>({file:Mt(e,{fileHashPath:t.fileHashPath})}))((wt=xt=class extends kt.Component{constructor(...e){super(...e),Lt(this,"removeFile",()=>{this.props.close(),this.props.dispatch(Ot(this.props.file.hashPath,!0))}),Lt(this,"deleteFile",()=>{this.props.close(),this.props.dispatch(Ot(this.props.file.hashPath,!0)),Ut(this.props.file.path),Nt.trackEvent("file","delete-file",this.props.file.source)})}componentDidMount(){Nt.trackScreen("modalRemoveFile")}render(){const{file:e}=this.props;let t;return e.source===Rt.b.RECORD&&(t="recorded with the Recorder"),e.source===Rt.b.TRANSFER&&(t="transfered from your phone"),kt.createElement(jt,null,kt.createElement(Ht,null,kt.createElement(Bt,null,e.name)," was ",t,". Do you want to delete the file as well as remove it from your library?"),kt.createElement(Gt,null,kt.createElement(Vt,{onClick:this.removeFile},"No"),kt.createElement(Vt,{onClick:this.deleteFile},"Yes")))}},Lt(xt,"propTypes",{dispatch:Pt.func,file:Pt.object}),Ct=wt))||Ct;function Kt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Yt=n(132),Xt=Yt.VexTab,qt=Yt.Artist,Jt=Yt.Flow.Renderer;qt.NOLOGO=!0;const Zt=n(39),Qt=(n(27),n(15)),en=n(9),tn=n(24),nn=i.default.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    min-width: 890px;
    height: 70vh;
`,an=i.default.div`
    margin-bottom: 15px;
`,sn=i.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${r.colors._white};
    margin-bottom: 25px;
    font-size: 18px;
    font-family: serif;
`,rn=i.default.div`
    font-size: 35px;
`,on=i.default.div`
    font-weight: 600;
    font-size: 20px;
`,ln=i.default.div`
    width: 890px;
    margin-top: 25px;
    padding: 15px 0 0 10px;
    background: #fff;
    color: #000;
    font-size: 14px;
    font-family: serif;
`,cn=i.default.div`
    background: #fff;
    height: 100%;
    width: 890px;
    padding: 25px 0 40px;
    overflow-y: auto;
    display: ${e=>e.loading?"none":"block"};
`;var pn,dn,hn,un=Object(ot.connect)((e,t)=>({file:t.file,mxml:e.mxml}))(zt=class extends N.a.Component{constructor(...e){super(...e),Kt(this,"state",{error:!1,infos:{album:"",artist:"",title:""},loading:!0,tracks:[]}),Kt(this,"scoreRef",N.a.createRef())}async displayScore(e){const t=new Jt(this.scoreRef.current,Jt.Backends.SVG),i=new qt(10,10,600,{scale:.8}),a=new Xt(i);Promise.all([n.e(6),n.e(7)]).then(n.t.bind(null,227,7)).then(({parseGuitarProXML:n})=>{try{n(e,{options:{width:1100}}).then(e=>{this.setState({loading:!1,infos:e.infos,tracks:e.tracks}),a.parse(e.notation),i.render(t)})}catch(e){tn(`Error parsing guitar pro file - ${e.toString()}`),this.setState({error:!0})}})}componentDidMount(){en.trackScreen("modalTabs"),this.props.mxml.mxml&&this.props.mxml.filePath===this.props.file.path||Qt.getMXML(this.props.file.path),this.props.mxml.filePath===this.props.file.path&&this.props.mxml.mxml&&setTimeout(()=>{this.displayScore(this.props.mxml.mxml)},0)}componentDidUpdate(e){e.mxml.mxml!==this.props.mxml.mxml&&this.displayScore(this.props.mxml.mxml)}render(){const{error:e,infos:t,loading:n,tracks:i}=this.state;return e?N.a.createElement(nn,null,N.a.createElement(an,null,"It looks like something went wrong, sorry about that!"),N.a.createElement(an,null,"Support for Guitar Pro files is in beta so it may break anytime (like right now)."),N.a.createElement(an,null,"Feel free to contact us at ",N.a.createElement(Zt,{href:`mailto:${r.email}`},r.email)," so we can see how we can improve it.")):N.a.createElement(nn,null,n?N.a.createElement(pt,{size:50}):N.a.createElement(N.a.Fragment,null,N.a.createElement(sn,null,N.a.createElement(rn,null,t.title),N.a.createElement(on,null,t.artist),N.a.createElement("div",null,t.album)),i.length?N.a.createElement(ln,null,N.a.createElement("div",null,i[0].name),N.a.createElement("div",null,i[0].tuning)):null),N.a.createElement(cn,{ref:this.scoreRef,loading:n}))}})||zt,mn=n(49);function gn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const fn=n(0),En=n(2).default,vn=n(6),{connect:bn}=n(7),{selectFileByHashPath:yn}=n(11),{addTag:Tn,editFile:_n,removeTag:Sn}=n(12),{displayTagContextMenu:Cn}=n(35),xn=En.div`
    width: 650px;
`,wn=En.div`
    font-weight: 600;
    margin-bottom: 25px;
`;var An,Rn=bn((e,t)=>({file:yn(e,{fileHashPath:t.fileHashPath})}))((hn=dn=class extends fn.Component{constructor(...e){super(...e),gn(this,"addTag",e=>{this.props.dispatch(Tn(this.props.file.hashPath,e))}),gn(this,"onTagClick",()=>{}),gn(this,"onTagContextMenu",(e,t,n)=>{this.props.dispatch(Cn(this.props.file.hashPath,e,t,n))}),gn(this,"removeTag",e=>{this.props.dispatch(Sn(this.props.file.hashPath,e))})}render(){const{file:e}=this.props;return fn.createElement(xn,null,fn.createElement(wn,null,"Tags for ",e.name),fn.createElement(mn.a,{addTag:this.addTag,onTagClick:this.onTagClick,onTagContextMenu:this.onTagContextMenu,removeTag:this.removeTag,rootStyle:"\n    display: flex;\n    flex-wrap: wrap;\n\n    > * {\n        margin-bottom: 15px;\n    }\n",tags:e.getTags()}))}},gn(dn,"propTypes",{dispatch:vn.func,file:vn.object}),pn=hn))||pn;function Ln(){return(Ln=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function kn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Fn=n(0),Dn=n(2).default,{connect:Pn}=n(7),In=n(130),On=n(131),Mn=n(133),Un=n(134),{closeModal:Nn}=n(22),$n=n(1),jn=Dn.div`
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
`,Hn=Dn.div`
    position: relative;
    padding: 35px 20px 20px;
    background: ${$n.colors._greyDark};
    border-radius: 3px;

    ${e=>e.additionalStyle}
`,Bn=Dn.div`
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    opacity: 0.5;

    :hover {
        opacity: 1;
    }
`;let Gn=Pn(e=>({modal:e.modal}))(An=class extends Fn.Component{constructor(...e){super(...e),kn(this,"dimmerRef",Fn.createRef()),kn(this,"onDimmerClick",e=>{e.target===this.dimmerRef.current&&this.props.dispatch(Nn())}),kn(this,"close",()=>{this.props.dispatch(Nn())})}getModal(){const{name:e}=this.props.modal,t={[$n.modals.comment]:In,[$n.modals.fileMissing]:Be,[$n.modals.fileOptions]:rt,[$n.modals.invalidFile]:On,[$n.modals.publicLink]:At,[$n.modals.removeFile]:Wt,[$n.modals.tabs]:un,[$n.modals.tags]:Rn,[$n.modals.text]:Mn,[$n.modals.updateAvailable]:Un};if(!t[e])return null;const n=t[e];return Fn.createElement(n,Ln({},this.props.modal.props,{close:this.close}))}getRootStyle(){const{name:e}=this.props.modal;switch(e){case $n.modals.updateAvailable:return Un.rootStyle;default:return""}}render(){const{modal:e}=this.props;if(!e.name)return null;const t=e.name===$n.modals.updateAvailable&&e.props.mandatory;return Fn.createElement(jn,{onClick:this.onDimmerClick,ref:this.dimmerRef,darker:t},Fn.createElement(Hn,{additionalStyle:this.getRootStyle()},this.getModal(),t?null:Fn.createElement(Bn,{onClick:this.close},"X")))}})||An;var Vn=n(29),zn=n(33),Wn=n.n(zn),Kn=n(83);const Yn=i.default.div`
    display: flex;
    align-items: center;
    height: 35px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: rgba(255, 255, 255, 0.2);
    margin-bottom: 7px;
`,Xn=i.default.div`
    width: 35px;
    height: 35px
    padding: 7px;
    font-size: 15px;
    background: ${r.colors._white};
    color: ${r.colors._blackDark};
    border-radius: 100%;
    text-align: center;
    line-height: 35px;
`,qn=i.default.div`
    flex: 1;
    margin-left: 10px;
    padding: 7px;
`;class Jn extends U.Component{render(){const{song:e}=this.props;return U.createElement(Yn,null,U.createElement(Xn,null,e.position),U.createElement(qn,null,e.name))}}function Zn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Qn=n(43),ei=i.default.div`
    display: flex;
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${r.colors.blueLight};
    z-index: 2;
`,ti=i.default.div`
    flex: 1;
    text-align: center;
    font-size: 25px;
`,ni=i.default.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
`,ii=i.default.div`
    width: 50%;
    height: 100%;
`;class ai extends U.Component{constructor(...e){super(...e),Zn(this,"removeListener",void 0),Zn(this,"state",{newSongName:"",project:null}),Zn(this,"onChangeNewSongName",e=>{this.setState({newSongName:e.target.value})}),Zn(this,"addNewSong",e=>{if(e.preventDefault(),!this.state.newSongName.length)return;const t=Wn()(this.state.project,"songs",[]).length;j.a.addSongToProject(this.state.project.id,{position:t,name:this.state.newSongName}),this.setState({newSongName:""})})}listenProjectUpdate(){console.log(this.props),this.removeListener=j.a.listenForProjectUpdate(this.props.match.params.projectId,e=>{this.setState({project:e})})}componentDidMount(){this.listenProjectUpdate()}componentWillUnmount(){"function"==typeof this.removeListener&&this.removeListener()}renderHeader(){const{project:e}=this.state;return U.createElement(ei,null,U.createElement("div",null,U.createElement(Vn.Link,{to:r.routes.projects},"List of projects")),U.createElement(ti,null,e.name))}render(){const{project:e}=this.state;return e?(console.log(e),U.createElement(Qn,{stickyHeader:this.renderHeader()},U.createElement(ni,null,U.createElement(ii,null,U.createElement("div",null,"image here"),U.createElement("div",null,"Last updated: ",Object(Kn.a)(e.updatedAt,{addSuffix:!0}))),U.createElement(ii,null,U.createElement(ti,null,"Songs"),e.songs&&e.songs.length?U.createElement("div",null,e.songs.map(e=>U.createElement(Jn,{song:e,key:`song-${e.position}`}))):U.createElement("div",null,"Add the first song to your project:"),U.createElement("form",{onSubmit:this.addNewSong},U.createElement("input",{type:"text",value:this.state.newSongName,onChange:this.onChangeNewSongName})))))):U.createElement(Qn,null,U.createElement(J.a,null))}}const si=n(0),ri=n(2).default,{colors:oi}=n(1),li=ri.svg`
    fill: ${oi._white};
    opacity: 0.7;
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;var ci=()=>si.createElement(li,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30"},si.createElement("path",{d:"M5 6.005c0-1.107 0.887-2.005 1.998-2.005h4.004c1.104 0 1.998 0.897 1.998 2.005v19.99c0 1.107-0.887 2.005-1.998 2.005h-4.004c-1.104 0-1.998-0.897-1.998-2.005v-19.99zM19 6.005c0-1.107 0.887-2.005 1.998-2.005h4.004c1.104 0 1.998 0.897 1.998 2.005v19.99c0 1.107-0.887 2.005-1.998 2.005h-4.004c-1.104 0-1.998-0.897-1.998-2.005v-19.99z"}));const pi=n(0),di=n(2).default,{colors:hi}=n(1),ui=di.svg`
    fill: ${hi._white};
    opacity: 0.7;
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;var mi,gi,fi,Ei=()=>pi.createElement(ui,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30"},pi.createElement("path",{d:"M27.944 14.237c.18.1.316.2.436.314.143.138.267.297.368.48.027.046.05.094.073.142.124.275.18.553.18.828 0 .275-.056.553-.174.817-.092.205-.22.396-.378.563-.148.156-.32.285-.504.383L9.97 27.748c-.964.537-2.182.19-2.718-.777C6.998 26.516 7 25.24 7 25V6c0-1.1.826-1.932 1.87-1.996.107-.007.213-.006.32.005.364.03.7.158.98.352l17.774 9.875z"}));function vi(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const bi=n(34),{connect:yi}=n(7),Ti=n(6),_i=n(137),Si=n(37),Ci=n(67),xi=n(38),wi=n(43),{addFiles:Ai}=(n(27),n(12)),{reset:Ri}=n(75),{pausePlayer:Li}=n(40),ki=n(9),{getFilesDurationAndBPM:Fi}=n(57),{checkFileExists:Di,saveMedia:Pi}=n(15),Ii=i.default.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: ${e=>e.recording?0:"-100%"};
    left: 0;
    transition: top 0.3s ease;
`,Oi=i.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`,Mi=i.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 200px;
    height: 200px;
    background: ${e=>e.recording?r.colors.redLight:r.colors.red};
    border-radius: 100%;
    transition: background ease 0.2s;
    cursor: pointer;
    text-align: center;
`,Ui=i.default.div`
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
`,Ni=i.default.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`,$i=i.default.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`,ji=Object(i.default)(xi)`
    width: 70%;
    margin-bottom: 15px;
    text-align: center;
    border: 0;
    border-bottom: 1px solid ${e=>e.error?r.colors.red:"rgba(255, 255, 255, 0.3)"};
    border-radius: 0;
`,Hi=i.default.div`
    margin-bottom: 15px;
    color: ${r.colors.red};
    text-align: center;
`,Bi=Object(i.default)(Si)`
    padding: 5px 15px;
    ${e=>e.background?`background: ${e.background};`:""}
    ${e=>e.disabled?"\n        cursor: not-allowed;\n        opacity: 0.5;\n    ":""}
`,Gi=i.default.div`
    text-align: center;
`,Vi=i.default.div`
    margin-bottom: 15px;
`,zi=i.default.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;function Wi(e){for(var t,n=e.inputBuffer.getChannelData(0),i=n.length,a=0,s=0;s<i;s++)t=n[s],Math.abs(t)>=this.clipLevel&&(this.clipping=!0,this.lastClip=window.performance.now()),a+=t*t;var r=Math.sqrt(a/i);this.volume=Math.max(r,this.volume*this.averaging)}var Ki=yi(e=>({recorder:e.recorder}))((fi=gi=class extends N.a.Component{constructor(...e){super(...e),vi(this,"chunks",void 0),vi(this,"volumeMeter",void 0),vi(this,"stream",void 0),vi(this,"state",{audio:null,fileDuration:0,fileSize:0,name:"",playing:!1,recording:!1}),vi(this,"recorder",null),vi(this,"inputRef",N.a.createRef()),vi(this,"player",N.a.createRef()),vi(this,"recordButton",N.a.createRef()),vi(this,"toggleRecording",()=>{this.state.recording?this.stopRecording():this.startRecording()}),vi(this,"startRecording",()=>{this.props.dispatch(Li(!0)),ki.trackEvent("recorder","start-recording"),this.setState({recording:!0}),this.getAudio()}),vi(this,"pad",e=>1===`${e}`.length?`0${e}`:`${e}`),vi(this,"stopRecording",()=>{ki.trackEvent("recorder","stop-recording");const{day:e,hours:t,minutes:n,month:i,seconds:a,year:s}=this.getDate();this.setState({name:`SongRiffer-idea-${s}-${i}-${e}-${t}${n}${a}`}),null!==this.recorder&&this.recorder.stop()}),vi(this,"onDataAvailable",e=>{this.chunks.push(e.data)}),vi(this,"onRecorderStop",()=>{const e=new Blob(this.chunks,{type:"audio/webm;codecs=opus"});this.setState({audio:URL.createObjectURL(e),recording:!1}),this.inputRef.current.focus(),cancelAnimationFrame(this.raf),this.recordButton.current.style.boxShadow=""}),vi(this,"drawVolume",()=>{const e=Math.max(0,1e3*this.volumeMeter.volume);this.recordButton.current.style.boxShadow=`\n            10px 10px ${e+40}px 3px ${r.colors.bluePastel},\n            -10px -10px ${e+40}px 3px ${r.colors._purpleLight}\n        `,this.raf=requestAnimationFrame(this.drawVolume)}),vi(this,"onNameChange",e=>{this.setState({name:e.target.value}),Di(`${e.target.value}.wav`)}),vi(this,"onNameKeyDown",e=>{"Enter"===e.key&&this.save()}),vi(this,"save",()=>{const e=new AudioContext,t=new Blob(this.chunks,{type:"audio/webm"}),n=new FileReader;this.state.name;n.onload=()=>{e.decodeAudioData(n.result,e=>{const t=_i(e);this.setState({fileDuration:parseInt(e.duration,10),fileSize:t.byteLength}),Pi(r.saveTypes.RECORDER,`${this.state.name}.wav`,new Uint8Array(t))})},n.readAsArrayBuffer(t)}),vi(this,"importFile",()=>{ki.trackEvent("recorder","save",this.state.name),ki.trackEvent("file","file-import","recorder",1);const e=`${this.state.name}.wav`,t=this.props.recorder.filePath,n={duration:this.state.fileDuration,name:e,path:t,size:this.state.fileSize,source:Rt.b.RECORD,type:"audio/wav"},i=new $.a(n);this.props.dispatch(Ai({[Object(mt.getFilePathHash)(t)]:i.toJSON()},!0)),Fi(this.props.dispatch,[i])}),vi(this,"reset",()=>{this.chunks=[],this.setState({audio:null,playing:!1}),this.pausePlayer(),ki.trackEvent("recorder","discard")}),vi(this,"togglePlay",()=>{this.setState({playing:!this.state.playing},()=>{this.state.playing?this.playPlayer():this.pausePlayer()})})}getDate(){const e=new Date;return{day:this.pad(e.getDate()),hours:e.getHours(),minutes:e.getMinutes(),month:this.pad(e.getMonth()+1),seconds:e.getSeconds(),year:e.getFullYear()}}getAudio(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(e=>{this.watchVolume(e),this.recordAudio(e)})}watchVolume(e){if(null===e)return;this.stream=e;const t=new AudioContext,n=t.createMediaStreamSource(this.stream);this.volumeMeter=function(e,t=.98,n=.95,i=750){var a=e.createScriptProcessor(512);return a.onaudioprocess=Wi,a.clipping=!1,a.lastClip=0,a.volume=0,a.clipLevel=t,a.averaging=n,a.clipLag=i,a.connect(e.destination),a.checkClipping=function(){return!!this.clipping&&(this.lastClip+this.clipLag<window.performance.now()&&(this.clipping=!1),this.clipping)},a.shutdown=function(){this.disconnect(),this.onaudioprocess=null},a}(t),n.connect(this.volumeMeter),this.drawVolume()}recordAudio(e){this.recorder=new MediaRecorder(e),this.chunks=[],this.recorder.ondataavailable=this.onDataAvailable,this.recorder.onstop=this.onRecorderStop,this.recorder.start()}playPlayer(){this.player.current.play()}pausePlayer(){this.player.current.pause()}componentDidMount(){ki.trackScreen("record")}componentDidUpdate(e){!e.recorder.saveSuccess&&this.props.recorder.saveSuccess&&this.importFile()}componentWillUnmount(){cancelAnimationFrame(this.raf),this.props.dispatch(Ri())}render(){const{recorder:e}=this.props,{audio:t,name:n,playing:i,recording:a}=this.state,s=!!e.fileAlreadyExists&&bi.basename(e.fileAlreadyExists,bi.extname(e.fileAlreadyExists))===n;return N.a.createElement(wi,{wrapperStyle:"\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    padding: 50px;\n    overflow: hidden;\n"},N.a.createElement(Ii,{recording:a||!t},N.a.createElement(Oi,null,N.a.createElement(Mi,{onClick:this.toggleRecording,recording:a,ref:this.recordButton},a?"STOP":"START"))),N.a.createElement(Ui,{recording:a||!t},e.saveSuccess?N.a.createElement(Gi,null,N.a.createElement(Ci,{width:"50"}),N.a.createElement(Vi,null,n," was successfully added to your library!"),N.a.createElement(zi,null,N.a.createElement(Vn.Link,{to:r.routes.home},N.a.createElement(Bi,null,"Go back to your file list")))):N.a.createElement(N.a.Fragment,null,N.a.createElement("div",null,N.a.createElement("audio",{src:t,ref:this.player}),N.a.createElement("div",{onClick:this.togglePlay},i?N.a.createElement(ci,null):N.a.createElement(Ei,null))),N.a.createElement(Ni,null,N.a.createElement(ji,{onChange:this.onNameChange,onKeyDown:this.onNameKeyDown,ref:this.inputRef,type:"text",value:n,error:s}),N.a.createElement(Hi,null,s?"This file already exists, please choose another name":N.a.createElement("span",null," ")),N.a.createElement($i,null,N.a.createElement(Bi,{onClick:this.reset,background:r.colors._grey},"Discard"),N.a.createElement(Bi,{onClick:this.save,disabled:s},"Save"))))))}},vi(gi,"propTypes",{dispatch:Ti.func,recorder:Ti.object}),mi=fi))||mi;const Yi=i.default.div`
    height: 10px;
    border-radius: 10px;
    background: ${r.colors._grey};
    overflow: hidden;
`,Xi=i.default.div`
    width: ${e=>e.width}%;
    height: 10px;
`,qi=({percentage:e})=>N.a.createElement(Yi,null,N.a.createElement(Xi,{width:e,style:{background:e>=90?r.colors.redLight:r.colors.bluePastel}}));var Ji,Zi,Qi;function ea(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ta=n(0),{connect:na}=n(7),ia=n(2).default,aa=n(6),sa=n(46),ra=n(43),oa=n(27),{checkUpdate:la}=n(35),{openModal:ca}=n(22),{signOut:pa}=n(42),{selectUser:da}=n(23),ha=n(9),{hasUpload:ua}=n(41),{formatFileSize:ma}=n(53),{openLink:ga,toggleDevTools:fa}=n(15),Ea=n(1),va=ia.div`
    width: 50%;
    padding: 0 40px;
`,ba=ia.div`
    margin-bottom: 25px;
    font-weight: 600;
    text-align: center;
    font-size: 18px;
`,ya=ia(sa)`
    text-align: center;
`,Ta=ia.span`
    color: ${Ea.colors.redLight};
`,_a=ia(sa.ModalLink)`
    text-align: center;
`,Sa=ia.div`
    margin-top: 30px;
`;var Ca,xa=na(e=>({enableExperimental:e.application.enableExperimental,updateAvailable:e.application.updateAvailable,user:da(e)}))((Qi=Zi=class extends ta.Component{constructor(...e){super(...e),ea(this,"state",{storageSize:0,storageSizeLimit:0,storageSizeLoaded:!1}),ea(this,"signOut",()=>{this.props.dispatch(pa())}),ea(this,"checkUpdates",()=>{this.props.dispatch(la(!0))})}renderDevMenu(){return ta.createElement(Sa,null,ta.createElement(ba,null,"Experimental Menu"),ta.createElement(ya,{onClick:fa,first:!0},"Toggle dev tools"))}getCloudStorageLimit(){return new Promise(async e=>{const{user:t}=this.props;if(void 0!==t.data.cloudStorageLimit)return e(t.data.cloudStorageLimit);e(await j.a.getRemoteConfigValue(`STORAGE_LIMIT_LEVEL_${t.data.cloudLevel}`,0))})}getUserStorageSize(){return new Promise(async e=>{const{user:t}=this.props;if(void 0!==t.data.storageSize)return e(t.data.storageSize);e(await j.a.getUserStorageSize(t.uid))})}async fetchStorageSize(){const{user:e}=this.props;if(ua(e)){const e=await this.getUserStorageSize(),t=await this.getCloudStorageLimit();this.setState({storageSizeLoaded:!0,storageSize:e,storageSizeLimit:t})}}renderAccount(){if(ua(this.props.user)){const{storageSize:e,storageSizeLimit:t,storageSizeLoaded:n}=this.state;if(!n)return ta.createElement(oa,null,ta.createElement(pt,{size:40}));const i=100*e/t,a=isNaN(i)?0:i.toFixed(2);return ta.createElement(oa,null,ta.createElement(oa,{size:"xs"},"Total storage size used:"),ta.createElement(oa,{size:"xs"},ma(e)," / ",ma(t)," (",a,"%)"),ta.createElement(oa,{size:"s"},ta.createElement(qi,{percentage:a})),this.renderStorageFullMessage(a))}return null}renderStorageFullMessage(e){if(e<90)return null;const t=e>=100?"Your storage space is full!":"Your storage space is almost full!";return ta.createElement(oa,null,t," Visit ",ta.createElement("a",{href:"https://songriffer.com"},"to increase your plan and be able to add more files"))}componentDidMount(){ha.trackScreen("settings"),this.fetchStorageSize()}render(){const{enableExperimental:e,updateAvailable:t,user:n}=this.props;return ta.createElement(ra,{wrapperStyle:"\n    display: flex;\n    height: 100%;\n    justify-content: space-between;\n    align-items: center;\n"},ta.createElement(va,null,ta.createElement(ya,{onClick:this.checkUpdates,first:!0},"Check for updates ",t?ta.createElement(Ta,null,"•"):null),ta.createElement(_a,{href:`mailto:${Ea.email}`},"Contact Us"),ta.createElement(ya,{onClick:()=>ga(Ea.facebookUrl)},"Follow us on Facebook"),ta.createElement(ya,{onClick:()=>ga(Ea.instagramUrl)},"Follow us on Instagram"),ta.createElement(ya,{onClick:()=>ga(Ea.landingUrl)},"Visit us songriffer.com"),e&&this.renderDevMenu()),ta.createElement(va,null,ta.createElement(ba,null,"Hello ",n.email,"!"),this.renderAccount(),ta.createElement(ya,{onClick:this.signOut,first:!0},"Sign out")))}},ea(Zi,"propTypes",{dispatch:aa.func,enableExperimental:aa.bool,updateAvailable:aa.bool,user:aa.object}),Ji=Qi))||Ji,wa=n(40);function Aa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const{extname:Ra}=n(34),La=n(0),{connect:ka}=n(7),{selectSelectedFile:Fa}=n(11),{selectUser:Da}=n(23),{formatDuration:Pa}=n(53),Ia=n(9),Oa=n(24),Ma=n(138),Ua=i.default.div`
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: ${e=>e.visible?0:"-100%"};
    left: 0;
    background: ${r.colors._blueDark};
    transition: bottom ease 0.4s;
    z-index: 10;
`,Na=i.default.div`
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
`,$a=Object(i.default)(Vn.Link)`
    display: block;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${r.colors._white};
    text-decoration: none;
`,ja=i.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
    text-align: center;
`,Ha=i.default.div`
    position: relative
    padding-right: 10px;
    flex: 1;
    height: 30px;
`,Ba=i.default.canvas`
    opacity: 0;
    transition: opacity ease 1s;
    height: 100%;
    width: 100%;
    cursor: pointer;
`,Ga=Object(i.default)(Ba)`
    position: absolute;
    width: calc(100% - 10px);
    top: 0;
    left: 0;
    opacity: 1;
    pointer-events: none;
`,Va=new AudioContext;var za,Wa,Ka,Ya=ka(e=>({file:Fa(e),playing:e.player.playing,user:Da(e)}))(Ca=class extends La.Component{constructor(...e){super(...e),Aa(this,"canvas",La.createRef()),Aa(this,"canvasProgress",La.createRef()),Aa(this,"player",La.createRef()),Aa(this,"playerUI",La.createRef()),Aa(this,"state",{audioBuffer:null,progress:null,progressPercent:0,waveformData:[]}),Aa(this,"togglePlay",()=>{this.props.dispatch(Object(wa.togglePlay)())}),Aa(this,"onWaveformCalculated",e=>{this.setState({waveformData:e.data}),this.canvasCtx.fillStyle=r.colors.purple;const t=this.canvas.current.height/2;e.data.forEach((e,n)=>{const i=1*n,a=(1+e.min)*t,s=Math.max(1,(e.max-e.min)*t);this.canvasCtx.fillRect(i,a,1,s)}),this.canvas.current.style.opacity=1}),Aa(this,"onCanvasClick",e=>{const t=e.clientX-e.target.offsetParent.offsetLeft,n=Math.round(100*t/e.target.offsetWidth),i=this.props.file.duration*n/100;this.player.current.currentTime=i})}playFile(){const{file:e}=this.props,t=[];e.missing&&e.uploaded&&(Ia.trackEvent("player","download-file"),Oa("Playing file from storage"),t.push(j.a.getFileDownloadUrl(this.props.user,e.name))),Promise.all(t).then(t=>{const n=t[0]||e.escapedPath;this.player.current.src=n,this.player.current.play(),this.eventInit||this.initEvents(),Ia.trackEvent("player","play-file",Ra(this.props.file.name)),this.canvasCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),this.canvasProgressCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),this.loadWaveform(n)})}initEvents(){this.eventInit=!0,this.player.current.addEventListener("timeupdate",e=>{let t=0,n=0;this.props.file&&(n=100*(t=parseInt(this.player.current.currentTime,10))/this.props.file.duration),t!==this.state.progress&&this.setState({progress:t,progressPercent:n})}),this.player.current.addEventListener("ended",e=>{this.togglePlay(),this.setState({progress:0,progressPercent:0})})}handlePlayingState(e){e&&this.player.current.paused&&(Ia.trackEvent("player","play"),this.player.current.play()),e||this.player.current.paused||(Ia.trackEvent("player","pause"),this.player.current.pause())}loadWaveform(e){fetch(e).then(e=>e.arrayBuffer()).then(e=>{Va.decodeAudioData(e,async e=>{this.calculateWaveDataWorker.postMessage({channelData:e.getChannelData(0),width:this.canvas.current.width,pointWidth:1})})})}drawProgressWaveform(){if(!this.props.file)return;const e=this.state.waveformData.slice(0,Math.round(this.state.progressPercent*this.state.waveformData.length/100)),t=this.canvasProgress.current.height/2;this.canvasProgressCtx.fillStyle=r.colors._purpleLight,this.canvasProgressCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),e.forEach((e,n)=>{const i=1*n,a=(1+e.min)*t,s=Math.max(1,(e.max-e.min)*t);this.canvasProgressCtx.fillRect(i,a,1,s)})}componentDidMount(){this.canvasCtx=this.canvas.current.getContext("2d"),this.canvasProgressCtx=this.canvasProgress.current.getContext("2d"),this.calculateWaveDataWorker=new Ma,this.calculateWaveDataWorker.addEventListener("message",this.onWaveformCalculated)}componentDidUpdate(e,t){(!e.file&&this.props.file||e.file&&this.props.file&&e.file.path!==this.props.file.path)&&this.playFile(),e.playing!==this.props.playing&&this.handlePlayingState(this.props.playing),t.progress!==this.state.progress&&this.drawProgressWaveform()}render(){const{file:e}=this.props,{audioBuffer:t,progress:n,progressPercent:i}=this.state;return La.createElement(La.Fragment,null,La.createElement("audio",{ref:this.player}),La.createElement(Ua,{visible:e,ref:this.playerUI},La.createElement(Na,null,La.createElement("div",{onClick:this.togglePlay},this.props.playing?La.createElement(ci,null):La.createElement(Ei,null)),La.createElement(ja,null,La.createElement(Ha,null,La.createElement(Ga,{ref:this.canvasProgress}),La.createElement(Ba,{ref:this.canvas,onClick:this.onCanvasClick})),e?La.createElement("span",null,Pa(n)," / ",Pa(e.duration)):null),e?La.createElement($a,{to:`${r.routes.home}#file-${this.props.file.hashPath}`,title:e.name},e.name):null)))}})||Ca;function Xa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const qa=n(0),{connect:Ja}=n(7),Za=n(6),Qa=n(2).default,es=n(38),ts=n(139),ns=Qa.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`,is=Qa(es)`
    margin-right: 7px;
    opacity: ${e=>e.visible?1:0};
    transition: opacity ease 0.3s;
`;var as=Ja(e=>{const t=Object(s.a)(e);return{advancedSearchVisible:t.displayAdvanced,search:t}})((Ka=Wa=class extends qa.PureComponent{constructor(...e){super(...e),Xa(this,"search",e=>{this.props.dispatch((e=>(o.start("search"),{type:r.actionTypes.SEARCH_BASIC,term:e}))(e.target.value))}),Xa(this,"toggleAdvanced",()=>{this.props.dispatch(l())})}componentWillUnmount(){this.props.advancedSearchVisible&&this.props.dispatch(l())}render(){const{advancedSearchVisible:e,search:t}=this.props;return qa.createElement(ns,null,qa.createElement(is,{type:"text",onChange:this.search,value:t.basicTerm,name:"search",placeholder:"Search",visible:!e,id:"basic-search-input"}),qa.createElement(ts,{displayAdvanced:e,onClick:this.toggleAdvanced}))}},Xa(Wa,"propTypes",{advancedSearchVisible:Za.bool,dispatch:Za.func,search:Za.object}),za=Ka))||za,ss=n(14);function rs(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const os=n(0),ls=(n(6),n(37)),cs=n(87),ps=n(24),ds=n(1),hs=i.default.div`
    margin-bottom: 25px;
    color: ${ds.colors._white};
`,us=i.default.form`
    width: 100%;
    max-width: 480px;
    margin-bottom: 50px;
    text-align: center;
`,ms=i.default.div`
    cursor: pointer;
    color: ${ds.colors._white};

    :hover {
        text-decoration: underline;
    }
`,gs=i.default.div`
    cursor: pointer;
    color: ${ds.colors._white};
    margin-top: 40px;
    opacity: 0.6;
    font-size: 13px;

    :hover {
        text-decoration: underline;
        opacity: 1;
    }
`,fs=Object(i.default)(ls)`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 25px;

    opacity: ${e=>e.pending?.5:1};
`,Es=i.default.div`
    margin: 5px 0 25px;
    color: ${ds.colors.redLight};
`;var vs;!function(e){e["auth/user-not-found"]="We could not find your account, please check your information or create a new account.",e["auth/wrong-password"]="Invalid password."}(vs||(vs={}));var bs=class extends os.Component{constructor(...e){super(...e),rs(this,"state",{authForm:"signin",confirmPassword:"",email:"",error:null,password:"",pending:!1,renderPasswordForgotten:!1,resetEmailSent:!1}),rs(this,"_mounted",!0),rs(this,"emailInputRef",os.createRef()),rs(this,"signIn",e=>{e.preventDefault(),this.setState({pending:!0}),j.a.signInWithEmailPassword(this.state.email,this.state.password).then(()=>{this._mounted&&this.setState({email:"",password:"",pending:!1})}).catch(e=>{this.setState({error:vs[e.code]?vs[e.code]:e.message,pending:!1})})}),rs(this,"signUp",e=>{e.preventDefault(),this.setState({pending:!0});const{confirmPassword:t,email:n,password:i}=this.state;i===t?j.a.signUpWithEmailPassword(n,i).then(e=>{ps(`New user sign up - ${e.user.email}`),this._mounted&&this.setState({email:"",password:"",pending:!1})}).catch(e=>{this.setState({error:e,pending:!1})}):this.setState({error:"Your confirmation and your password must match"})}),rs(this,"switchForm",()=>{this.setState({authForm:"signin"===this.state.authForm?"signup":"signin",error:null}),this.focusInput()}),rs(this,"onChangeEmail",e=>{this.setState({email:e.target.value,error:null})}),rs(this,"onChangePassword",e=>{this.setState({password:e.target.value,error:null})}),rs(this,"onChangeConfirmPassword",e=>{this.setState({confirmPassword:e.target.value,error:null})}),rs(this,"sendResetPassword",e=>{e.preventDefault(),this.state.email.length&&j.a.sendResetPasswordEmail(this.state.email).then(()=>{this.setState({resetEmailSent:!0})})}),rs(this,"switchPasswordForgotten",()=>{this.setState({renderPasswordForgotten:!this.state.renderPasswordForgotten,resetEmailSent:!1})})}focusInput(){this.emailInputRef.current.focus()}renderPasswordForgotten(){return os.createElement(us,{onSubmit:this.sendResetPassword},this.state.resetEmailSent?os.createElement(hs,null,"An email has been sent to reset your password."):null,this.renderEmailInput(),os.createElement(fs,null,"Send email to reset your password"),os.createElement(ms,{onClick:this.switchPasswordForgotten},"Return to login"))}renderEmailInput(){return os.createElement(hs,null,os.createElement(cs,{type:"email",placeholder:"Email",onChange:this.onChangeEmail,value:this.state.email,ref:this.emailInputRef}))}componentDidMount(){this.focusInput()}componentWillUnmount(){this._mounted=!1}render(){const{authForm:e,error:t,pending:n,renderPasswordForgotten:i}=this.state;return i?this.renderPasswordForgotten():os.createElement(us,{onSubmit:"signin"===e?this.signIn:this.signUp},this.renderEmailInput(),os.createElement(hs,null,os.createElement(cs,{type:"password",placeholder:"Password",onChange:this.onChangePassword,value:this.state.password})),"signup"===e?os.createElement(hs,null,os.createElement(cs,{type:"password",placeholder:"Confirm Password",onChange:this.onChangeConfirmPassword,value:this.state.confirmPassword})):null,os.createElement(fs,{pending:n},"Sign ","signin"===e?"in":"up"),t?os.createElement(Es,null,t):null,os.createElement(ms,{onClick:this.switchForm},"signin"===e?"Create an account":"I already have an account"),os.createElement(gs,{onClick:this.switchPasswordForgotten},"Forgot your password?"))}};function ys(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Ts=n(0),_s=n(59),Ss=n(9),Cs=i.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;var xs,ws,As,Rs=class extends Ts.Component{constructor(...e){super(...e),ys(this,"state",{animationDone:!1}),ys(this,"onAnimationDone",()=>{this.setState({animationDone:!0}),this.props.onAnimationDone()})}componentDidMount(){const e=Math.round(performance.now());Ss.trackTiming("app","app-ready",e)}render(){const{authLoading:e,isAuthenticated:t}=this.props,{animationDone:n}=this.state,i=!e&&!t,a=[{component:Ts.createElement(ss.Spring,{from:{angle:"-70deg",opacity:0},to:{angle:"0deg",opacity:1},config:ss.config.slow},e=>Ts.createElement(_s,{opacity:e.opacity,angle:e.angle})),key:"logo"},{component:Ts.createElement(ss.Spring,{from:{opacity:0},to:{opacity:i?1:0},config:ss.config.slow},e=>Ts.createElement("div",{style:{opacity:e.opacity}},Ts.createElement(bs,null))),key:"authform"}];return Ts.createElement(Cs,null,Ts.createElement(ss.Trail,{items:a,keys:e=>e.key,from:{transform:"translate3d(0, 40px, 0)"},to:{transform:"translate3d(0, 0, 0)"},config:ss.config.slow,onRest:this.onAnimationDone},e=>t=>Ts.createElement("div",{style:t},e.component)))}};function Ls(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ks=n(0),Fs=n(2).default,Ds=n(6),{connect:Ps}=n(7),{removeTag:Is}=n(12),Os=n(1),Ms=Fs.div`
    position: absolute;
    padding: 5px 0;
    top: ${e=>e.top-10}px;
    left: ${e=>e.left-10}px;
    background: rgba(0, 0, 0, 0.8);
    color: ${Os.colors._white};
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
`,Us=Fs.div`
    padding: 5px 7px;
    cursor: pointer;

    :hover {
        background: ${Os.colors.blueLight};
        color: ${Os.colors._white};
    }
`;var Ns,$s,js,Hs=Ps()((As=ws=class extends ks.Component{constructor(...e){super(...e),Ls(this,"rootRef",ks.createRef()),Ls(this,"onDocumentClick",e=>{this.rootRef.current.contains(e.target)||this.props.close()}),Ls(this,"removeTag",()=>{this.props.dispatch(Is(this.props.props.fileHashPath,this.props.props.tag)),this.props.close()}),Ls(this,"searchTag",()=>{this.props.dispatch(c(this.props.props.tag)),this.props.close()})}componentDidMount(){document.addEventListener("click",this.onDocumentClick,{passive:!0})}componentWillUnmount(){document.removeEventListener("click",this.onDocumentClick)}render(){const{positionX:e,positionY:t}=this.props;return ks.createElement(Ms,{top:t,left:e,ref:this.rootRef},ks.createElement(Us,{onClick:this.removeTag},"Remove Tag"),ks.createElement(Us,{onClick:this.searchTag},"Search all files with this tag"))}},Ls(ws,"propTypes",{close:Ds.func,dispatch:Ds.func,positionX:Ds.number,positionY:Ds.number,props:Ds.object}),xs=As))||xs,Bs=n(42);function Gs(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Vs=n(0),{connect:zs}=n(7),Ws=n(6),Ks=n(69),Ys=n(104),Xs=n(105),qs=n(128),Js=n(129),Zs=n(135),Qs=n(140),{closeModalEsc:er}=n(22),{checkUpdate:tr,closeContextMenu:nr,resize:ir}=n(35),{togglePlay:ar}=n(40),{recorderFileAlreadyExists:sr,recorderSaveSuccess:rr}=n(75),{transferSaveSuccess:or}=n(88),{setMXML:lr}=n(145),{getFilesDurationAndBPM:cr,importFiles:pr}=n(57),dr=n(9),hr=n(24),{isAuthenticated:ur,isUserFullyLoaded:mr,selectUser:gr}=n(23),{checkFilesDBExists:fr,getAppConfig:Er,onMissingFiles:vr,setCallback:br}=n(15),yr=n(1),Tr=(i.default.div`
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${yr.colors._white};
`,i.default.div`
    display: flex;
    padding: 20px 0 20px 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`),_r=i.default.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
`,Sr=i.default.div`
    flex: 1;
    opacity: ${e=>e.dragging?.3:1};
    transition: opacity ease 0.4s;
`,Cr=i.default.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: ${yr.colors.blueLight};
    border: 20px dashed ${yr.colors.blueLight};
    font-size: 200px;
    justify-content: center;
    align-items: center;
    z-index: 100;
    opacity: ${e=>e.dragging?1:0};
    transition: opacity ease 0.7s;
`,xr=i.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    // left padding is added in sidebar and header
    // so the sidebar active link stuff is on the side
    padding: 15px 15px 15px 0;
    color: ${yr.colors._white};
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
`,wr=i.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,Ar=Vs.lazy(()=>n.e(2).then(n.bind(null,225))),Rr=()=>Vs.createElement(Vs.Suspense,{fallback:null},Vs.createElement(Ar,null)),Lr=Vs.lazy(()=>n.e(1).then(n.bind(null,226))),kr=()=>Vs.createElement(Vs.Suspense,{fallback:null},Vs.createElement(Lr,null)),Fr=Vs.lazy(()=>n.e(0).then(n.bind(null,228))),Dr=()=>Vs.createElement(Vs.Suspense,{fallback:null},Vs.createElement(Fr,null));var Pr=zs(e=>({advancedSearchVisible:Object(s.a)(e).displayAdvanced,allowFileDragging:e.application.allowFileDragging,appReady:mr(e),appWidth:e.application.appWidth,authLoading:e.auth.authLoading,contextMenu:e.application.contextMenu,enableExperimental:e.application.enableExperimental,isAuthenticated:ur(e),modalOpen:!!e.modal.name,user:gr(e)}))((js=$s=class extends Vs.Component{constructor(...e){super(...e),Gs(this,"state",{dragging:!1,hasError:!1,splashAnimationDone:!1}),Gs(this,"onSplashAnimationDone",()=>{this.setState({splashAnimationDone:!0})}),Gs(this,"importFiles",e=>{this.props.isAuthenticated&&pr(this.props.dispatch,e,e=>{for(let t in e)e[t].newImport=!0;this.props.dispatch(Object(We.addFiles)(e,!0))})}),Gs(this,"getDataFromMain",(e,t)=>{switch(e){case yr.mainConsts.events.CHECK_FILES_DB:t.exists&&this.props.dispatch({type:yr.actionTypes.SET_MIGRATION_DATA,data:t.data,_winBackup:t._winBackup});break;case yr.mainConsts.events.DATA_FETCHED:if(t.db===yr.db.files){this.props.dispatch(Object(We.addFiles)(t.data));const e=[];return Object.values(t.data).forEach(t=>{t.bpm&&t.duration||e.push(t)}),void(e.length&&cr(this.props.dispatch,e))}t.db===yr.db.app&&t.data.displayAdvanced&&this.props.dispatch(l());break;case yr.mainConsts.events.FILE_ALREADY_EXISTS:this.props.dispatch(sr(t));break;case yr.mainConsts.events.FILE_SYSTEM_ERROR:console.log(t);break;case yr.mainConsts.events.FILE_SAVE_SUCCESS:t.saveType===yr.saveTypes.RECORDER?this.props.dispatch(rr(t.filePath)):t.saveType===yr.saveTypes.TRANSFER&&this.props.dispatch(or(t.fileName,t.filePath));break;case yr.mainConsts.events.GET_MXLM_SUCCESS:this.props.dispatch(lr(t.filePath,t.mxml));break;case yr.mainConsts.events.OPEN_DEEPLINK:this.handleDeeplink(t.url)}}),Gs(this,"handleDeeplink",e=>{try{const t=e.replace("songriffer://songriffer.com?deeplink=",""),n=JSON.parse(decodeURIComponent(t));switch(n.type){case yr.deeplinkTypes.LOGIN_FACEBOOK:j.a.signInWithFacebookToken(n.params.token);break;case yr.deeplinkTypes.LOGIN_GOOGLE:j.a.signInWithGoogleToken(n.params.token);break;default:hr(`Unsupported deeplink type ${n.type} - raw deeplink: ${t}`)}}catch(t){const n=`Could not parse deeplink args: ${e}`;console.error(n),dr.exception(n),hr(`*Error* ${n}`)}}),Gs(this,"onMissingFiles",e=>{this.props.dispatch(Object(We.setMissingFiles)(e.files))}),Gs(this,"onKeyDown",e=>{if("Escape"===e.key&&this.props.dispatch(er()),32===e.keyCode&&e.target===document.body&&(this.props.dispatch(ar()),e.preventDefault()),!this.props.modalOpen&&e.target&&"INPUT"!==e.target.tagName&&/^[a-zA-Z]{1}$/.test(e.key)){let e=null;e=this.props.advancedSearchVisible?"#advanced-search-input":"#basic-search-input";const t=document.querySelector(e);t&&t.focus()}}),Gs(this,"onResize",()=>{window.innerWidth!==this.props.appWidth&&this.props.dispatch(ir(window.innerWidth))}),Gs(this,"setFullUser",e=>{this.props.dispatch(Object(Bs.setFullUserData)(e))}),Gs(this,"onAuthChange",e=>{e?(this.props.dispatch(Object(Bs.signIn)(e)),j.a.getFullUser(e.uid).then(this.setFullUser)):this.props.dispatch(Object(Bs.notLogged)())}),Gs(this,"closeContextMenu",()=>{this.props.dispatch(nr())}),Gs(this,"catchError",e=>{this.setState({hasError:!0});try{const t=`${e.message} \n \`\`\`${e.error.stack}\`\`\``;dr.exception(e.message),hr(`*Error* ${t}`)}catch(e){hr("*Error* unavailable message"),dr.exception("Error - unavailable message")}})}detectDragDrop(){this.dragDropActivated=!0,this.removeDragDrop=Ks(document.body,{onDrop:this.importFiles,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})}listenForFullUserUpdate(){j.a.listenForFullUserUpdate(this.props.user.uid,this.setFullUser).then(e=>{this.fullUserListener=e})}removeFullUserListener(){"function"==typeof this.fullUserListener&&this.fullUserListener()}checkUpdate(){clearTimeout(this.updateTimeout),this.props.dispatch(tr(!1)),this.updateTimeout=setTimeout(()=>{this.checkUpdate()},yr.updateInterval)}componentDidCatch(){this.setState({hasError:!0})}componentDidMount(){fr(),window.addEventListener("error",this.catchError,{passive:!0}),this.detectDragDrop(),vr(this.onMissingFiles),br(this.getDataFromMain),j.a.onAuthChange(this.onAuthChange),dr.trackEvent("app","app-start",window.__songRiffer.platform),dr.trackEvent("app",`platform-${window.__songRiffer.platform}`,window.__songRiffer.release),dr.trackEvent("app","appVersion","1.5.0"),document.addEventListener("keydown",this.onKeyDown),window.addEventListener("resize",this.onResize,{passive:!0}),this.onResize(),this.updateTimeout=setTimeout(()=>{this.checkUpdate()},3e3)}componentDidUpdate(e){!this.props.modalOpen&&this.props.allowFileDragging||!this.dragDropActivated||(this.removeDragDrop(),this.dragDropActivated=!1),this.props.modalOpen||!this.props.allowFileDragging||this.dragDropActivated||this.detectDragDrop(),!e.appReady&&this.props.appReady&&Er(),!e.isAuthenticated&&this.props.isAuthenticated?this.listenForFullUserUpdate():e.isAuthenticated&&!this.props.isAuthenticated&&this.removeFullUserListener()}componentWillUnmount(){clearTimeout(this.updateTimeout),this.removeFullUserListener()}render(){const{appReady:e,authLoading:t,contextMenu:n,enableExperimental:i,isAuthenticated:s}=this.props,{dragging:r,hasError:o,splashAnimationDone:l}=this.state;return e&&l?o?Vs.createElement(Xs,null):Vs.createElement(a.a,null,Vs.createElement(xr,null,Vs.createElement(Ys,null),Vs.createElement(qs,null),Vs.createElement(Tr,null,Vs.createElement(wr,null,Vs.createElement(Js,{style:"margin-left: 3px;"})),Vs.createElement(a.g,null,Vs.createElement(a.d,{exact:!0,path:yr.routes.home,component:as}))),Vs.createElement(_r,null,Vs.createElement(Qs,null),Vs.createElement(Cr,{dragging:r},"+"),Vs.createElement(Sr,{dragging:r},Vs.createElement(a.g,null,Vs.createElement(a.d,{path:yr.routes.project,component:ai}),Vs.createElement(a.d,{path:yr.routes.projects,component:Dr}),Vs.createElement(a.d,{path:yr.routes.recorder,component:Ki}),Vs.createElement(a.d,{path:yr.routes.settings,component:xa}),Vs.createElement(a.d,{path:yr.routes.stats,component:kr}),Vs.createElement(a.d,{path:yr.routes.transfer,component:Rr}),Vs.createElement(a.d,{exact:!0,path:yr.routes.home,component:xe}))),Vs.createElement(O,null),Vs.createElement(Gn,null),Vs.createElement(Zs,null),Vs.createElement(Ya,null)),n.active?Vs.createElement(Hs,{close:this.closeContextMenu,positionX:n.positionX,positionY:n.positionY,props:n.props}):null)):Vs.createElement(Rs,{authLoading:t,isAuthenticated:s,onAnimationDone:this.onSplashAnimationDone})}},Gs($s,"propTypes",{advancedSearchVisible:Ws.bool,allowFileDragging:Ws.bool,appReady:Ws.bool,appStartTime:Ws.number,appWidth:Ws.number,authLoading:Ws.bool,contextMenu:Ws.object,dispatch:Ws.func,isAuthenticated:Ws.bool,modalOpen:Ws.bool}),Ns=js))||Ns;const Ir={allowFileDragging:!1,appWidth:0,contextMenu:{},dbLoaded:!1,enableExperimental:!1,updateAvailable:!1},Or={authLoading:!0,data:{createdAt:null,cloudLevel:0,updatedAt:null},user:null},Mr=e=>({email:e.email,emailVerified:e.emailVerified,uid:e.uid}),{getFilePathHash:Ur}=n(17),Nr={_dataToMigrate:null,_winBackup:!1,files:{},missingFiles:[],pending:!0,sortRule:null,selectedFile:null},$r=(e,t)=>{const n={...e};for(let e in t)n[e]?n[e]={...n[e],added:t[e].added,size:t[e].size}:n[e]=t[e];return n},jr=(e,t,n)=>{const i={...e};return delete i[t],i[Ur(n.path)]=n,i},Hr=(e,t,n)=>{if(!e[t])return e;const i=e[t];return Object.keys(i.tags).map(e=>e.toLowerCase()).includes(n.toLowerCase())?e:{...e,[t]:{...i,tags:{...e[t].tags,[n]:!0}}}},Br={name:null,props:null},Gr={filePath:null,mxml:null},Vr=n(1),{displayUpdateAvailableModal:zr}=n(35),{openModal:Wr}=n(22),Kr={notification:{active:!1}};let Yr=0;const Xr=()=>Yr++,qr={fileHashPath:void 0,playing:!1},Jr={fileAlreadyExists:"",filePath:null,saveSuccess:!1},Zr={advancedTransitionDone:!0,archived:r.searchArchived.NON_ARCHIVED,basicTerm:"",bpm:"",bpmDelta:10,displayAdvanced:!1,tags:{},term:""},{combineReducers:Qr}=n(47),eo=Qr({application:(e=Ir,t)=>{switch(t.type){case r.actionTypes.ADD_FILES:return{...e,dbLoaded:!0};case r.actionTypes.UPDATE_AVAILABLE:return{...e,updateAvailable:!0};case r.actionTypes.APP_RESIZE:return{...e,appWidth:t.width};case r.actionTypes.DISPLAY_TAG_CONTEXT_MENU:return{...e,contextMenu:{active:!0,positionX:t.positionX,positionY:t.positionY,props:t.props}};case r.actionTypes.CLOSE_CONTEXT_MENU:return{...e,contextMenu:Ir.contextMenu};case r.actionTypes.SEARCH_BASIC:return t.term.toLowerCase()===r.DEBUG_KEY_SEQUENCE?{...e,enableExperimental:!0}:e;case r.actionTypes.SET_ALLOW_FILE_DRAGGING:return{...e,allowFileDragging:t.allowFileDragging};default:return e}},auth:(e=Or,t)=>{switch(t.type){case r.actionTypes.AUTH_SET_USER:return{...e,authLoading:!1,user:Mr(t.user)};case r.actionTypes.AUTH_SIGN_OUT:return Or;case r.actionTypes.AUTH_SET_FULL_USER_DATA:return{...e,data:t.data};case r.actionTypes.AUTH_NOT_LOGGED:return{...e,authLoading:!1};default:return e}},files:(e=Nr,t)=>{switch(t.type){case r.actionTypes.SET_FILES:return{...e,files:t.files,pending:!1};case r.actionTypes.SET_MIGRATION_DATA:return{...e,_dataToMigrate:t.data,_winBackup:t._winBackup};case r.actionTypes.ADD_TAG:return{...e,files:Hr(e.files,t.hashPath,t.tag)};case r.actionTypes.REMOVE_TAG:const n=e.files[t.hashPath],i={...n.tags};return delete i[t.tag],{...e,files:{...e.files,[t.hashPath]:{...n,tags:i}}};case r.actionTypes.EDIT_FILE:let a;return a=!t.automaticEdit&&t.edit.bpm||t.automaticEdit&&t.edit.bpm&&!e.files[t.hashPath].bpm?t.edit.bpm:e.files[t.hashPath].bpm,{...e,files:{...e.files,[t.hashPath]:{...e.files[t.hashPath],...t.edit,bpm:a}}};case r.actionTypes.ADD_FILES:return{...e,_dataToMigrate:null,files:$r(e.files,t.files),pending:!1};case r.actionTypes.REMOVE_FILE:const s={...e.files};return delete s[t.hashPath],{...e,files:s,selectedFile:e.selectedFile===t.hashPath?null:e.selectedFile};case r.actionTypes.PLAY_FILE:return{...e,selectedFile:t.hashPath};case r.actionTypes.REPLACE_FILE:return{...e,files:jr(e.files,t.oldFileHashPath,t.newFile)};case r.actionTypes.SET_MISSING_FILES:return{...e,missingFiles:t.filesHashPath};case r.actionTypes.SET_SORT_RULE:return{...e,sortRule:t.sortRule};case r.actionTypes.PAUSE_PLAYER:return t.unsetSelectedFile?{...e,selectedFile:null}:e;case r.actionTypes.DISABLE_NEW_IMPORTS:const o={...e.files};for(const e of t.files)o[e]={...o[e],newImport:!1};return{...e,files:o};case r.actionTypes.SET_FILE_UPLOAD_STATUS:return{...e,files:{...e.files,[t.hashPath]:{...e.files[t.hashPath],uploaded:t.uploaded}}};case r.actionTypes.AUTH_SIGN_OUT:return Nr;default:return e}},modal:(e=Br,t)=>{switch(t.type){case r.actionTypes.OPEN_MODAL:return{name:t.name,props:t.props};case r.actionTypes.CLOSE_MODAL:return Br;default:return e}},mxml:(e=Gr,t)=>{switch(t.type){case r.actionTypes.SET_MXML:return{...e,filePath:t.filePath,mxml:t.mxml};default:return e}},notifications:(e=Kr,t)=>{switch(t.type){case Vr.actionTypes.ADD_NOTIFICATION:return{notification:{...t.notification,active:!0,id:Xr()}};case Vr.actionTypes.REMOVE_NOTIFICATION:return{notification:{...e.notification,active:!1}};case Vr.actionTypes.ADD_FILES:if(!t.newImports)return e;const n=Object.values(t.files).filter(e=>e.source!==Rt.b.RECORD&&e.source!==Rt.b.TRANSFER).length;return n?{notification:{title:`Imported ${n} file${n>1?"s":""}`,status:"success",active:!0,id:Xr()}}:e;case Vr.actionTypes.REMOVE_FILE:return{notification:{title:"File removed",status:"success",active:!0,id:Xr()}};case Vr.actionTypes.REPLACE_FILE:return{notification:{title:"File successfully replaced",status:"success",active:!0,id:Xr()}};case Vr.actionTypes.NOTIFY_MISSING_FILE:return{notification:{title:`We could not locate the file ${t.file.name}. Click here to fix this`,status:"error",active:!0,id:Xr(),onClick:()=>Wr(Vr.modals.fileMissing,{fileHashPath:t.file.hashPath}),timeout:5e3}};case Vr.actionTypes.UPDATE_AVAILABLE:return{notification:{title:"New version available!",status:"success",active:!0,id:Xr(),onClick:()=>e=>{e(zr(t.url,t.changelog))},timeout:5e3}};case Vr.actionTypes.SEARCH_BASIC:return t.term.toLowerCase()===Vr.DEBUG_KEY_SEQUENCE?{notification:{title:"Experimental mode activated",status:"success",active:!0,id:Xr()}}:e;default:return e}},player:(e=qr,t)=>{switch(t.type){case r.actionTypes.PLAY_FILE:return{...e,fileHashPath:t.hashPath,playing:!0};case r.actionTypes.TOGGLE_PLAY:return{...e,playing:!e.playing};case r.actionTypes.PAUSE_PLAYER:return{...e,playing:!1};case r.actionTypes.REMOVE_FILE:return t.hashPath===e.fileHashPath?qr:e;default:return e}},recorder:(e=Jr,t)=>{switch(t.type){case r.actionTypes.RECORDER_FILE_ALREADY_EXISTS:return{...e,fileAlreadyExists:t.fileName};case r.actionTypes.RECORDER_SAVE_SUCCESS:return{...e,filePath:t.filePath,saveSuccess:!0};case r.actionTypes.RECORDER_RESET:return Jr;default:return e}},search:(e=Zr,t)=>{switch(t.type){case r.actionTypes.SEARCH_BASIC:return{...e,basicTerm:t.term};case r.actionTypes.SET_SEARCH:return{...e,term:t.term,basicTerm:""};case r.actionTypes.TOGGLE_ADVANCED_SEARCH:return{...Zr,displayAdvanced:!e.displayAdvanced,advancedTransitionDone:!1};case r.actionTypes.ADVANCED_TRANSITION_DONE:return{...e,advancedTransitionDone:!0};case r.actionTypes.SEARCH_TAG:return{...e,advancedTransitionDone:!1,displayAdvanced:!0,basicTerm:"",tags:{...e.tags,[t.tag]:!0}};case r.actionTypes.REMOVE_SEARCH_TAG:const n={...e.tags};return delete n[t.tag],{...e,basicTerm:"",tags:n};case r.actionTypes.SEARCH_BPM:return{...e,basicTerm:"",bpm:isNaN(parseInt(t.bpm,10))?"":parseInt(t.bpm,10)};case r.actionTypes.SEARCH_BPM_DELTA:return{...e,bpmDelta:isNaN(parseInt(t.bpmDelta,10))?10:parseInt(t.bpmDelta,10)};case r.actionTypes.CLEAR_SEARCH:return{...Zr,displayAdvanced:e.displayAdvanced};case r.actionTypes.SET_SEARCH_ARCHIVED:return{...e,archived:t.archived};default:return e}},transfer:n(147)}),to=n(1),{saveApp:no}=n(15),{selectFilesForStorage:io}=n(11),{selectUser:ao}=n(23);var so=e=>t=>n=>{if(t(n),n.__saveToDB__){const t=e.getState();switch(n.__db){case to.db.files:const e=!{[to.actionTypes.REMOVE_FILE]:!0,[to.actionTypes.REPLACE_FILE]:!0}[n.type],i=io(t),a=ao(t);j.a.saveFullFilesData(a.uid,i,e);break;case to.db.app:no({displayAdvanced:Object(s.a)(t).displayAdvanced});break;default:throw new Error("Error trying to save data, unknow db",n.__db)}}};const{createStore:ro,applyMiddleware:oo}=n(47),lo=ro(eo,oo(n(146).default,so,n(148))),co=n(0),{Provider:po}=n(7),{render:ho}=n(44);ho(co.createElement(po,{store:lo},co.createElement(Pr,null)),document.querySelector("#root"))}],[[150,3,5]]]);