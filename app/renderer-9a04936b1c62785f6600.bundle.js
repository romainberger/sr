(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,function(e,t,n){"use strict";n.r(t),n.d(t,"mainConsts",function(){return i}),n.d(t,"actionTypes",function(){return s}),n.d(t,"CLOUD_LEVEL",function(){return S}),n.d(t,"colors",function(){return a}),n.d(t,"colorsDarkFont",function(){return o}),n.d(t,"db",function(){return r}),n.d(t,"DEBUG_KEY_SEQUENCE",function(){return l}),n.d(t,"deeplinkTypes",function(){return x}),n.d(t,"email",function(){return c}),n.d(t,"landingUrl",function(){return p}),n.d(t,"facebookUrl",function(){return d}),n.d(t,"instagramUrl",function(){return h}),n.d(t,"messengerUrl",function(){return u}),n.d(t,"modals",function(){return m}),n.d(t,"noop",function(){return g}),n.d(t,"routes",function(){return f}),n.d(t,"saveTypes",function(){return E}),n.d(t,"searchArchived",function(){return v}),n.d(t,"sortRules",function(){return y}),n.d(t,"sources",function(){return T}),n.d(t,"updateUrl",function(){return b}),n.d(t,"updateInterval",function(){return _});const i=n(96),s={ADD_TAG:"ADD_TAG",ADD_FILES:"ADD_FILES",ADD_NOTIFICATION:"ADD_NOTIFICATION",ADVANCED_TRANSITION_DONE:"ADVANCED_TRANSITION_DONE",APP_RESIZE:"APP_RESIZE",AUTH_NOT_LOGGED:"AUTH_NOT_LOGGED",AUTH_SET_USER:"AUTH_SET_USER",AUTH_SIGN_OUT:"AUTH_SIGN_OUT",AUTH_SET_FULL_USER_DATA:"AUTH_SET_FULL_USER_DATA",CHECK_UPDATE:"CHECK_UPDATE",CHECK_UPDATE_FAILED:"CHECK_UPDATE_FAILED",CHECK_UPDATE_NO_UPDATE:"CHECK_UPDATE_NO_UPDATE",CHECK_UPDATE_SUCCESS:"CHECK_UPDATE_SUCCESS",CLEAR_SEARCH:"CLEAR_SEARCH",CLOSE_CONTEXT_MENU:"CLOSE_CONTEXT_MENU",CLOSE_MODAL:"CLOSE_MODAL",CLOSE_PLAYER_IF_PAUSED:"CLOSE_PLAYER_IF_PAUSED",DISABLE_NEW_IMPORTS:"DISABLE_NEW_IMPORTS",DISPLAY_TAG_CONTEXT_MENU:"DISPLAY_TAG_CONTEXT_MENU",EDIT_FILE:"EDIT_FILE",NOTIFY_MISSING_FILE:"NOTIFY_MISSING_FILE",OPEN_MODAL:"OPEN_MODAL",PAUSE_PLAYER:"PAUSE_PLAYER",PLAY_FILE:"PLAY_FILE",RECORDER_FILE_ALREADY_EXISTS:"RECORDER_FILE_ALREADY_EXISTS",RECORDER_RESET:"RECORDER_RESET",RECORDER_SAVE_SUCCESS:"RECORDER_SAVE_SUCCESS",REMOVE_FILE:"REMOVE_FILE",REMOVE_NOTIFICATION:"REMOVE_NOTIFICATION",REMOVE_SEARCH_TAG:"REMOVE_SEARCH_TAG",REMOVE_TAG:"REMOVE_TAG",REPLACE_FILE:"REPLACE_FILE",SET_MIGRATION_DATA:"SET_MIGRATION_DATA",SET_SEARCH:"SET_SEARCH",SEARCH_BASIC:"SEARCH_BASIC",SEARCH_BPM:"SEARCH_BPM",SEARCH_BPM_DELTA:"SEARCH_BPM_DELTA",SEARCH_TAG:"SEARCH_TAG",SET_ALLOW_FILE_DRAGGING:"SET_ALLOW_FILE_DRAGGING",SET_BPM:"SET_BPM",SET_COMMENT:"SET_COMMENT",SET_FILE_ARCHIVE:"SET_FILE_ARCHIVE",SET_FILE_UPLOAD_STATUS:"SET_FILE_UPLOAD_STATUS",SET_MISSING_FILES:"SET_MISSING_FILES",SET_MXML:"SET_MXML",SET_RATING:"SET_RATING",SET_SEARCH_ARCHIVED:"SET_SEARCH_ARCHIVED",SET_SORT_RULE:"SET_SORT_RULE",SET_TIME_SIGNATURE:"SET_TIME_SIGNATURE",TOGGLE_ADVANCED_SEARCH:"TOGGLE_ADVANCED_SEARCH",TOGGLE_PLAY:"TOGGLE_PLAY",TRANSFER_RESET:"TRANSFER_RESET",TRANSFER_SAVE_SUCCESS:"TRANSFER_SAVE_SUCCESS",TRANSFER_SET_FILE_LIST:"TRANSFER_SET_FILE_LIST",TRANSFER_START_TRANFER:"TRANSFER_START_TRANFER",UPDATE_AVAILABLE:"UPDATE_AVAILABLE"},a={_black:"#1f1f1f",_blackDark:"#020202",_blue:"#3B4096",_blueDark:"#141533",blueGreen:"#49d1af",blueLight:"#8086FF",bluePastel:"#A9C1FF",blueSky:"#64C6E8",cream:"#FEE4C3",fuschia:"#d440d6",green:"#4f8e71",greenLight:"#20FFC1",greenPastel:"#BBFFC7",_grey:"#4f4f4f",_greyDark:"#333",mint:"#D2FF50",orange:"#c17443",pink:"#E694FF",purple:"#a389c9",_purpleLight:"#7C5AB0",red:"#963c57",redLight:"#CC3D68",salmon:"#E8A987",_white:"#dedede",yellow:"#FFE400"},o={blueGreen:!0,bluePastel:!0,blueSky:!0,cream:!0,greenLight:!0,greenPastel:!0,mint:!0,salmon:!0,yellow:!0},r={app:"app",files:"files"},l="fish cannot carry guns",c="hello@songriffer.com",p="https://songriffer.com",d="https://www.facebook.com/songrifferapp",h="https://www.instagram.com/songrifferapp",u="http://m.me/songrifferapp",m={comment:"comment",fileMissing:"fileMissing",fileOptions:"fileOptions",invalidFile:"invalidFile",removeFile:"removeFile",tabs:"tabs",tags:"tags",text:"text",updateAvailable:"updateAvailable"},g=()=>{},f={home:"/",project:"/project/:projectId",projects:"/projects",recorder:"/recorder",settings:"/settings",stats:"/stats",transfer:"/transfer"},E={RECORDER:"RECORDER",TRANSFER:"TRANSFER"},v={ALL:"ALL",ARCHIVED:"ARCHIVED",NON_ARCHIVED:"NON_ARCHIVED"},y={BPM_ASC:"BPM_ASC",BPM_DESC:"BPM_DESC",DURATION_ASC:"DURATION_ASC",DURATION_DESC:"DURATION_DESC",NAME_ASC:"NAME_ASC",NAME_DESC:"NAME_DESC",RATING_ASC:"RATING_ASC",RATING_DESC:"RATING_DESC"},T={IMPORT:"IMPORT",RECORD:"RECORD",TRANSFER:"TRANSFER"},b={darwin:"https://songriffer.com/update-mac.json",win32:"https://songriffer.com/update-win.json"},_=18e5,S={LEVEL_1:1,LEVEL_2:2,LEVEL_3:3,LEVEL_4:4},x={LOGIN_FACEBOOK:"LOGIN_FACEBOOK",LOGIN_GOOGLE:"LOGIN_GOOGLE"}},,,,,,function(e,t){const n=window.__songRiffer.tracking;e.exports=n},function(e,t,n){"use strict";n.r(t),n.d(t,"selectFiles",function(){return d}),n.d(t,"_selectFiles",function(){return l}),n.d(t,"selectSortRule",function(){return p}),n.d(t,"selectFilesCount",function(){return h}),n.d(t,"selectSelectedFile",function(){return u}),n.d(t,"selectFileByHashPath",function(){return m}),n.d(t,"selectTags",function(){return g}),n.d(t,"selectFilesForStorage",function(){return f});var i=n(15),s=n(13),a=n(1);const o=n(41),r=n(24),l=e=>e.files.files,c=o([e=>e],e=>new i.a(e),"selectFile"),p=o([e=>e.files],e=>e.sortRule,"selectSortRule"),d=o([l,r,p],(e,t,n)=>{if(!e)return[];return((e,t)=>e.sort((e,n)=>{switch(t){case a.sortRules.BPM_ASC:return e.bpm-n.bpm;case a.sortRules.BPM_DESC:return n.bpm-e.bpm;case a.sortRules.DURATION_ASC:return e.duration-n.duration;case a.sortRules.DURATION_DESC:return n.duration-e.duration;case a.sortRules.NAME_ASC:return e.name.toLowerCase().localeCompare(n.name.toLowerCase());case a.sortRules.NAME_DESC:return n.name.toLowerCase().localeCompare(e.name.toLowerCase());case a.sortRules.RATING_ASC:return e.getRatingForSort()-n.getRatingForSort();case a.sortRules.RATING_DESC:return n.getRatingForSort()-e.getRatingForSort();default:return n.added-e.added}}))(Object.keys(e).reduce((n,i)=>{const s=c(e[i],null,`file_${i}`);return s.matchSearch(t)&&n.push(s),n},[]),n)},"selectFiles"),h=o([l,r],(e,t)=>t.archived===a.searchArchived.ALL?Object.keys(e).length:Object.values(e).filter(e=>!e.archived).length,"selectFilesCount"),u=o([e=>e,e=>e.files.selectedFile],(e,t)=>m(e,{fileHashPath:t}),"selectSelectedFile"),m=o([(e,t)=>t.fileHashPath,l],(e,t)=>{if(!e)return null;let n;return t[e]&&(n=t[e]),n||(n=Object.values(t).find(t=>Object(s.getFilePathHash)(t.path)===e)),n?c(n,null,`file_${e}`):null},"selectFileByHashPath"),g=o([l],e=>{const t=Object.values(e).reduce((e,t)=>(Object.keys(t.tags).forEach(t=>{e[t.toLowerCase()]=!0}),e),{});return Object.keys(t).sort()},"selectTags"),f=o([l],e=>{const t={};for(let n in e)t[n]=c(e[n],null,`file_${n}`).toJSON();return t},"selectFilesForStorage")},function(e,t,n){(function(t){const i=t.require("electron"),s=n(7),a=n(1);let o=()=>{},r=()=>{};e.exports.setCallback=e=>{o=e},e.exports.onMissingFiles=e=>{r=e},i.ipcRenderer.on(a.mainConsts.events.CHECK_FILES_DB,(e,t)=>{o(a.mainConsts.events.CHECK_FILES_DB,t)}),i.ipcRenderer.on(a.mainConsts.events.DATA_FETCHED,(e,t)=>{o(a.mainConsts.events.DATA_FETCHED,t)}),i.ipcRenderer.on(a.mainConsts.events.MISSING_FILES,(e,t)=>{r(t)}),i.ipcRenderer.on(a.mainConsts.events.FILE_ALREADY_EXISTS,(e,t)=>{o(a.mainConsts.events.FILE_ALREADY_EXISTS,t)}),i.ipcRenderer.on(a.mainConsts.events.FILE_SYSTEM_ERROR,(e,t)=>{o(a.mainConsts.events.FILE_SYSTEM_ERROR,t)}),i.ipcRenderer.on(a.mainConsts.events.FILE_SAVE_SUCCESS,(e,t)=>{o(a.mainConsts.events.FILE_SAVE_SUCCESS,t)}),i.ipcRenderer.on(a.mainConsts.events.GET_MXLM_SUCCESS,(e,t)=>{o(a.mainConsts.events.GET_MXLM_SUCCESS,t)}),i.ipcRenderer.on(a.mainConsts.events.OPEN_DEEPLINK,(e,t)=>{o(a.mainConsts.events.OPEN_DEEPLINK,t)}),e.exports.checkFilesDBExists=()=>{i.ipcRenderer.send(a.mainConsts.events.CHECK_FILES_DB_EXISTS,{db:a.db.files})},e.exports.clearDB=()=>{i.ipcRenderer.send(a.mainConsts.events.CLEAR_DB)},e.exports.getFiles=()=>{i.ipcRenderer.send(a.mainConsts.events.FETCH_DATA,{db:a.db.files})},e.exports.getAppConfig=()=>{i.ipcRenderer.send(a.mainConsts.events.FETCH_DATA,{db:a.db.app})},e.exports.saveApp=e=>{i.ipcRenderer.send(a.mainConsts.events.SAVE_DATA,{db:"app",value:JSON.stringify(e)})},e.exports.openInFinder=e=>{i.shell.showItemInFolder(e)},e.exports.checkFiles=e=>{i.ipcRenderer.send(a.mainConsts.events.CHECK_FILES,{files:e})},e.exports.openLink=e=>{i.shell.openExternal(e),s.trackEvent("app","open-link",e)},e.exports.reload=()=>{i.ipcRenderer.send(a.mainConsts.events.RELOAD)},e.exports.toggleDevTools=()=>{i.ipcRenderer.send(a.mainConsts.events.TOGGLE_DEVTOOLS)},e.exports.saveMedia=(e,t,n)=>{i.ipcRenderer.send(a.mainConsts.events.SAVE_MEDIA,{saveType:e,fileName:t,wavData:n})},e.exports.checkFileExists=e=>{i.ipcRenderer.send(a.mainConsts.events.CHECK_FILE_EXISTS,{fileName:e})},e.exports.copyToClipboard=e=>{i.clipboard.writeText(e)},e.exports.unlinkFile=e=>{i.ipcRenderer.send(a.mainConsts.events.UNLINK_FILE,{filePath:e})},e.exports.getMXML=e=>{i.ipcRenderer.send(a.mainConsts.events.GET_MXLM,{filePath:e})},e.exports.openFile=e=>{i.shell.openItem(e)}}).call(this,n(11))},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(112);n(113),n(115),n(117),n(163),n(120),n(122);const a=n(45),o=n(7),r=n(22),{hasCorrectCloudLevel:l}=n(46),{CLOUD_LEVEL:c}=n(1),p={libraries:"libraries",projects:"projects",stats:"stats",users:"users"};console.info("%c[SongRiffer] %cUsing prod firebase project","color: blue","color: black");const d=n(124);e.exports=new class{constructor(e){i(this,"sendResetPasswordEmail",e=>(o.trackEvent("auth","password-reset"),this.auth.sendPasswordResetEmail(e))),i(this,"getFullUserRetry",(e,t)=>{this.db.collection(p.users).doc(e).get().then(n=>{const i=n.data();return i?t(i):setTimeout(()=>{console.log("### Error getting full user, retrying"),this.getFullUserRetry(e,t)},300)})}),this.firebase=s.initializeApp(e),this.auth=this.firebase.auth(),this.db=this.firebase.firestore(),this.storage=this.firebase.storage(),s.performance(),this.initRemoteConfig()}initRemoteConfig(){this.remoteConfig=this.firebase.remoteConfig(),this.remoteConfig.settings={minimumFetchIntervalMillis:36e5},this.remoteConfig.defaultConfig={STORAGE_LIMIT_LEVEL_3:3221225472,STORAGE_LIMIT_LEVEL_4:16106127360,FILES_EMPTY_DATA:"[]"},this.fetchRemoteConfig()}async fetchRemoteConfig(){await this.remoteConfig.fetchAndActivate()}async getRemoteConfig(){return await this.fetchRemoteConfig(),{STORAGE_LIMIT_LEVEL_3:this.remoteConfig.getNumber("STORAGE_LIMIT_LEVEL_3"),STORAGE_LIMIT_LEVEL_4:this.remoteConfig.getNumber("STORAGE_LIMIT_LEVEL_4"),FILES_EMPTY_DATA:JSON.parse(this.remoteConfig.getString("FILES_EMPTY_DATA"))}}async getRemoteConfigValue(e,t=null){return(await this.getRemoteConfig())[e]||t}onAuthChange(e){this.auth.onAuthStateChanged(e)}signUpWithEmailPassword(e,t){return new Promise((n,i)=>{o.trackEvent("auth","sign-up"),this.auth.createUserWithEmailAndPassword(e,t).then(e=>{e.user.sendEmailVerification(),n(e)}).catch(t=>{console.error("########### Error with sign up",t),o.exception(`Error in sign up ${t.message}`),r(`*Error* in sign up ${t.message} - email: ${e}`),i(t.message)})})}signInWithEmailPassword(e,t){return new Promise((n,i)=>{o.trackEvent("auth","sign-in"),this.auth.signInWithEmailAndPassword(e,t).then(n).catch(t=>{console.error("########### Error with sign in",t),o.exception(`Error in sign in ${t.message}`),r(`*Error* in sign in ${t.message} - email: ${e}`),i(t)})})}signInWithFacebookToken(e){const t=s.auth.FacebookAuthProvider.credential(e);r("New user sign in with facebook"),o.trackEvent("auth","sign-in-facebook"),this.auth.signInWithCredential(t).catch(e=>{console.error("Error login with facebook access token"),o.exception(`Error in sign in with facebook ${e.message}`),r(`*Error* in sign in with facebook ${e.message}`)})}signInWithGoogleToken(e){const t=s.auth.GoogleAuthProvider.credential(e);r("New user sign in with google"),o.trackEvent("auth","sign-in-google"),this.auth.signInWithCredential(t).catch(e=>{console.error("Error login with google access token"),o.exception(`Error in sign in with google ${e.message}`),r(`*Error* in sign in with google ${e.message}`)})}signOut(){o.trackEvent("auth","sign-out"),this.auth.signOut()}getFullUser(e){return new Promise(t=>{this.getFullUserRetry(e,e=>{t({data:{...e,createdAt:e.createdAt.toDate()}})})})}listenForFullUserUpdate(e,t){return new Promise(n=>{this.getFullUserRetry(e,i=>{const s=this.db.collection(p.users).doc(e).onSnapshot(e=>{try{const n=e.data();t({...n,createdAt:n.createdAt.toDate()})}catch(e){t({})}});n(s)})})}saveFullFilesData(e,t,n=!0){return this.db.collection(p.libraries).doc(e).set({files:t},{merge:n}).then(()=>{console.log("Files data saved to cloud")}).catch(t=>{o.exception(`Error saving files data to cloud ${t}`),r(`*Error* error saving files data to cloud - ${e} - ${t}`),console.error("Error saving files data to cloud"),console.log(t)})}listenForFilesUpdate(e,t){return this.db.collection(p.libraries).doc(e).onSnapshot(n=>{try{const i=a(n.data(),"files",{}),s="string"==typeof i?JSON.parse(i):i;t(s)}catch(i){o.exception(`Error reading files ${i.toString()}`),r(`*Error* reading files for ${e} - ${i.toString()} - raw data: \n ${JSON.stringify(n.data())}`),t({})}})}saveUserStats(e){s.functions().httpsCallable("saveUserStats")({stats:{files:{},tags:{},...e}}).then(e=>{console.log("stats data saved to cloud")}).catch(e=>{console.error("Error saving stats data to cloud"),console.log(e)})}getUserStats(e){return new Promise((t,n)=>{this.db.collection(p.stats).doc(e).get().then(e=>{const i=e.data();i?t(i):n()})})}callCallback(e,t,n={}){"function"==typeof e[t]&&e[t](n)}getAudioFileStoragePath(e,t){return`users/${e.uid}/audio/${t}`}uploadFile(e,t,n,i={}){if(!l(e,c.LEVEL_3))return void console.error("User has invalid cloud level");const a=this.storage.ref(),o=this.getAudioFileStoragePath(e,t);var p={customMetadata:{userUid:e.uid}};const d=a.child(o).put(n,p);console.log("# starting upload for file",o),d.on(s.storage.TaskEvent.STATE_CHANGED,e=>{const t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),this.callCallback(i,"onProgress",t),e.state){case s.storage.TaskState.PAUSED:console.log("Upload is paused"),this.callCallback(i,"onPause");break;case s.storage.TaskState.RUNNING:console.log("Upload is running"),this.callCallback(i,"onRunning")}},t=>{switch(r(`*Error* uploading file for ${e.uid} - error code: ${t.code}`),t.code){case"storage/unauthorized":this.callCallback(i,"onError",{error:"UNAUTHORIZED"});break;case"storage/canceled":console.error("## error upload: canceled"),this.callCallback(i,"onError",{error:"CANCELED"});break;case"storage/unknown":console.error("#error upload, unknown error",t.serverResponse),this.callCallback(i,"onError",{error:"UNKNOWN"})}},()=>{console.log("Success upload"),this.callCallback(i,"onSuccess"),r(`Upload success - ${e.uid}`)})}getFileDownloadUrl(e,t){return new Promise(n=>{const i=this.getAudioFileStoragePath(e,t);this.storage.ref(i).getDownloadURL().then(n).catch(e=>{r(`*Error* cannot get file download url ${e.message}`)})})}deleteFile(e,t){const n=this.storage.ref(),i=this.getAudioFileStoragePath(e,t);return n.child(i).delete()}getUserStorageSize(e){return new Promise((t,n)=>{this.storage.ref().child(`users/${e}/audio`).listAll().then(async e=>{let n=0;for(const t of e.items)n+=(await t.getMetadata()).size;t(n)}).catch(e=>{r(`*Error* cannot get user storage size ${e.message}`),n(e)})})}listenForProjectsUpdate(e,t){const n=this.db.collection(p.users).doc(e);return this.db.collection(p.projects).where("creator","==",n).onSnapshot(e=>{const n=[];e.forEach(function(e){n.push({id:e.id,...e.data()})}),t(n)})}createProject(e,t){const n=this.db.collection(p.users).doc(e);return new Promise((e,i)=>{this.db.collection(p.projects).add({creator:n,createdAt:s.firestore.FieldValue.serverTimestamp(),name:t,updatedAt:s.firestore.FieldValue.serverTimestamp()}).then(n=>{r(`Project created - ${t}`),e(n.id)}).catch(e=>{r(`*Error* Cannot create project - ${e.message}`),i()})})}listenForProjectUpdate(e,t){return this.db.collection(p.projects).doc(e).onSnapshot(e=>{const n=e.data();t({id:e.id,...n,updatedAt:n.updatedAt?n.updatedAt.toDate():new Date})})}addSongToProject(e,t){return this.db.collection(p.projects).doc(e).update({songs:s.firestore.FieldValue.arrayUnion(t),updatedAt:s.firestore.FieldValue.serverTimestamp()})}}(d)},,function(e,t,n){const i=n(1),{openModal:s}=n(18),{pausePlayer:a,playFile:o}=n(36),{notifyMissingFile:r}=n(44),{selectFileByHashPath:l,_selectFiles:c}=n(8),{selectUser:p}=n(21),d=n(10),h=n(22),u=n(7),{getFilePathHash:m}=n(13),{clearDB:g,openFile:f}=n(9);e.exports.addFiles=(e,t=!1)=>(n,s)=>{if(t){const n={import:0,recorder:0,transfer:0},s=Object.values(e);s.forEach(e=>{e.source===i.sources.IMPORT&&n.import++,e.source===i.sources.RECORD&&n.recorder++,e.source===i.sources.TRANSFER&&n.transfer++}),t&&h(`${s.length} files added:\n${Object.keys(n).map(e=>`${e}: ${n[e]}`).join("\n")}`),d.saveUserStats({files:n})}n({type:i.actionTypes.ADD_FILES,files:e,newImports:t,__saveToDB__:t,__db:i.db.files})};const E=(e,t,n=!1)=>({type:i.actionTypes.EDIT_FILE,hashPath:e,edit:t,automaticEdit:n,__saveToDB__:!0,__db:i.db.files});e.exports.editFile=E,e.exports.removeFile=(e,t=!1)=>(n,a)=>{const o=a(),r=l(o,{fileHashPath:e}),c=p(o);if(!(r.source!==i.sources.RECORD&&r.source!==i.sources.TRANSFER||t||r.missing))return void n(s(i.modals.removeFile,{fileHashPath:e}));const h=[];r.uploaded&&h.push(d.deleteFile(c,r.name)),Promise.all(h).then(()=>{n({type:i.actionTypes.REMOVE_FILE,hashPath:e,__saveToDB__:!0,__db:i.db.files})})},e.exports.setMissingFiles=e=>(t,n)=>{const s=c(n()),a=e.filter(e=>s[e]);t({type:i.actionTypes.SET_MISSING_FILES,filesHashPath:a})},e.exports.replaceFile=(e,t)=>({type:i.actionTypes.REPLACE_FILE,oldFileHashPath:e,newFile:t,__saveToDB__:!0,__db:i.db.files}),e.exports.addTag=(e,t)=>(n,s)=>{d.saveUserStats({tags:{[t.trim().toLowerCase()]:1}}),n({type:i.actionTypes.ADD_TAG,hashPath:e,tag:t.trim(),__saveToDB__:!0,__db:i.db.files})},e.exports.removeTag=(e,t)=>({type:i.actionTypes.REMOVE_TAG,hashPath:e,tag:t,__saveToDB__:!0,__db:i.db.files}),e.exports.setBPM=(e,t)=>n=>{n(E(e,{bpm:t})),n({type:i.actionTypes.SET_BPM})},e.exports.setTimeSignature=(e,t)=>n=>{n(E(e,{timeSignature:t})),n({type:i.actionTypes.SET_TIME_SIGNATURE})},e.exports.setRating=(e,t)=>n=>{n(E(e,{rating:t})),n({type:i.actionTypes.SET_RATING})},e.exports.setSortRule=e=>({type:i.actionTypes.SET_SORT_RULE,sortRule:e}),e.exports.setFileArchiveStatus=(e,t)=>n=>{n(E(e,{archived:t})),n({type:i.actionTypes.SET_FILE_ARCHIVE,archived:t,hashPath:e})},e.exports.setComment=(e,t)=>n=>{n(E(e,{comment:t.trim()})),n({type:i.actionTypes.SET_COMMENT})},e.exports.disableNewImports=()=>(e,t)=>{const n=c(t()),s=Object.keys(n).filter(e=>n[e].newImport);s.length&&e({type:i.actionTypes.DISABLE_NEW_IMPORTS,files:s})},e.exports.setFileUploadedStatus=(e,t)=>(console.log("# action ",e,t),{type:i.actionTypes.SET_FILE_UPLOAD_STATUS,hashPath:e,uploaded:t,__saveToDB__:!0,__db:i.db.files}),e.exports.migrateLegacyData=(e={},t=!1)=>(n,i)=>{const s=p(i());if(null!==e){h(`Migrating data to cloud ${s.uid} ${t?"(win backup)":""}`),u.trackEvent("app","cloud-migration");const n={};Object.values(e).forEach(e=>{n[m(e.path)]=e}),d.saveFullFilesData(s.uid,n).then(()=>{t&&h(`Migration for win backup successfull ${s.uid}`),g()}).catch(e=>{h(`Error migrating data to cloud ${e.toString()}`),t&&h(`Error migration data to cloud from win backup ${e.toString()}`),console.error(e)})}},e.exports.handleFileOpen=e=>(t,n)=>{if(e.isPlayable())return e.missing&&!e.uploaded?void t(r(e)):void t(o(e.hashPath));t(a());const l=n().application.enableExperimental;return e.isGuitarPro7()&&l?t(s(i.modals.tabs,{file:e})):f(e.path)}},function(e,t,n){"use strict";n.r(t),n.d(t,"getFilePathHash",function(){return s});var i=n(75);const s=e=>i.Base64.encode(e)},,function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return c}),n.d(t,"a",function(){return d});var i=n(1),s=n(13);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(23),{escapeFilePath:r}=n(33);var l;!function(e){e.IMPORT="IMPORT",e.RECORD="RECORD",e.TRANSFER="TRANSFER"}(l||(l={}));const c=["m4a","mov","mp3","mp4","wav","webm"];class p{constructor(){a(this,"name",void 0),a(this,"path",void 0),a(this,"size",void 0),a(this,"type",void 0),a(this,"added",void 0),a(this,"archived",void 0),a(this,"bpm",void 0),a(this,"comment",void 0),a(this,"duration",void 0),a(this,"missing",void 0),a(this,"newImport",void 0),a(this,"rating",void 0),a(this,"_sortRating",void 0),a(this,"deviceSource",void 0),a(this,"source",void 0),a(this,"tags",void 0),a(this,"_tagsArray",void 0),a(this,"timeSignature",void 0),a(this,"safePath",void 0),a(this,"uploaded",void 0),a(this,"escapedPath",void 0),a(this,"hashPath",void 0)}}class d extends p{constructor(t){super(),this.name=t.name,this.path=t.path,this.size=t.size||0,this.type=t.type,this.added=t.added||+new Date,this.archived=t.archived||!1,this.bpm=t.bpm||null,this.comment=t.comment||"",this.deviceSource=t.deviceSource||e.__songRiffer.platform,this.duration=t.duration||null,this.missing=t.missing||!1,this.newImport=!0===t.newImport,this.rating=isNaN(parseInt(t.rating,10))?null:parseInt(t.rating,10),this._sortRating=null===this.rating?-1:this.rating,this.source=t.source||i.sources.IMPORT,this.tags=t.tags||{},this._tagsArray=Object.keys(this.tags),this.timeSignature=t.timeSignature||"4/4",this.safePath=this.path.replace(/[\/\s\?\.\(\)\[\]:]/g,"_"),this.escapedPath=r(this.path),this.hashPath=Object(s.getFilePathHash)(this.path),this.uploaded=t.uploaded||!1}getTags(){return this._tagsArray}hasMatchingTags(e,t=!1){return t?e.every(e=>this.hasMatchingTag(e,t)):e.some(e=>this.hasMatchingTag(e,t))}hasMatchingTag(e,t=!1){const n=this.getTags().map(e=>e.toLowerCase());return t?n.includes(e.toLowerCase()):n.some(t=>t.includes(e.toLowerCase()))}matchSearch(e){if(e.archived!==i.searchArchived.ALL){if(e.archived===i.searchArchived.ARCHIVED&&!this.archived)return!1;if(e.archived===i.searchArchived.NON_ARCHIVED&&this.archived)return!1}const t=e.cleanedBasicTerm,n=e.cleanedTerm,s=Object.keys(e.tags);return!(t.length||n.length||s.length||e.bpm)||(t.length?!(!this.name.toLowerCase().includes(t)&&!this.hasMatchingTag(t,!1)):!(n.length&&!this.name.toLowerCase().includes(n))&&(!(s.length&&!this.hasMatchingTags(s,!0))&&(!e.bpm||!(this.bpm<e.bpm-e.bpmDelta||this.bpm>e.bpm+e.bpmDelta))))}getRatingForSort(){return this._sortRating}hasComment(){return!!this.comment.length}isGuitarPro7(){return".gp"===o.extname(this.path)}isPlayable(){if(this.type.includes("audio"))return!0;const e=o.extname(this.name).toLowerCase().replace(".","");return c.includes(e)}toJSON(){return{added:this.added,archived:this.archived,bpm:this.bpm,comment:this.comment,deviceSource:this.deviceSource,duration:this.duration,escapedPath:this.escapedPath,name:this.name,newImport:!1,path:this.path,rating:this.rating,size:this.size,source:this.source,tags:this.tags,timeSignature:this.timeSignature,type:this.type,uploaded:this.uploaded}}}}).call(this,n(11))},,,function(e,t,n){const i=n(1);e.exports.openModal=(e,t)=>({type:i.actionTypes.OPEN_MODAL,name:e,props:t});const s=()=>(e,t)=>{const{modal:n}=t();n.name===i.modals.updateAvailable&&n.props&&n.props.mandatory||e({type:i.actionTypes.CLOSE_MODAL})};e.exports.closeModal=s,e.exports.closeModalEsc=()=>s()},,,function(e,t,n){const i=n(41),s=e=>e.auth;e.exports.isAuthenticated=e=>!!e.auth.user,e.exports.selectUser=i([s],e=>e.user?{...e.user,data:e.data}:e.user,"selectUser"),e.exports.isUserFullyLoaded=i([s],e=>e.user&&!!Object.keys(e.data).length,"isUserFullyLoaded")},function(e,t){e.exports=e=>{try{const t=`${e} - wrapper version: *v${window.__songRiffer.version}* - app version: *1.2.1* - ${window.__songRiffer.platform}`;0,fetch(atob("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVFJZREY3TkJaL0JTQUw4NTFWNC9xbm1TMXVnYUJiTU80aVkwREtabndFa0U="),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t,type:"mrkdwn"})})}catch(e){}}},,function(e,t,n){const i=n(41);e.exports=i([e=>e.search],e=>({...e,cleanedBasicTerm:e.basicTerm.trim().toLowerCase(),cleanedTerm:e.term.trim().toLowerCase()}),"selectSearch")},function(e,t,n){const i=n(125),s=n(0),a=n(35),{openModal:o}=n(18),{openLink:r}=n(9),l=n(7),c=n(1);e.exports.checkUpdate=(e=!1)=>t=>{t({type:c.actionTypes.CHECK_UPDATE,manual:e});const n=c.updateUrl[window.__songRiffer.platform],l=new Headers;l.append("pragma","no-cache"),l.append("cache-control","no-cache"),fetch(n,{method:"GET",headers:l}).then(e=>e.json()).then(n=>{if(n.version&&i.gt(n.version,window.__songRiffer.version)){const i=6048e5,s=+new Date;if(n.mandatory||n.date+i<s)return void t(d(n.url,n.changelog));t(e?p(n.url,n.changelog):{type:c.actionTypes.UPDATE_AVAILABLE,changelog:n.changelog,url:n.url})}else e&&(t({type:c.actionTypes.CHECK_UPDATE_NO_UPDATE}),t(o(c.modals.text,{title:"No update available",message:s.createElement("div",null,s.createElement("div",null,"Thanks for using SongRiffer!"),s.createElement("div",null,"We hope you're enjoying it and find it helpful."))})))}).catch(i=>{t({type:c.actionTypes.CHECK_UPDATE_FAILED}),e?t(o(c.modals.text,{title:"An error occured",message:s.createElement("div",null,s.createElement("div",null,"Sorry but we were not able to check if a new version is available."),s.createElement("div",null,"Please visit"," ",s.createElement(a,{onClick:()=>r(c.landingUrl)},c.landingUrl)," to manually check."))})):console.warn("Update endpoint failed, ignoring",n)})};const p=(e,t={})=>n=>{n({type:c.actionTypes.CHECK_UPDATE_SUCCESS}),n(o(c.modals.updateAvailable,{changelog:t,url:e}))};e.exports.displayUpdateAvailableModal=p,e.exports.resize=e=>({type:c.actionTypes.APP_RESIZE,width:e}),e.exports.displayTagContextMenu=(e,t,n,i)=>({type:c.actionTypes.DISPLAY_TAG_CONTEXT_MENU,positionX:n,positionY:i,props:{fileHashPath:e,tag:t}}),e.exports.closeContextMenu=()=>({type:c.actionTypes.CLOSE_CONTEXT_MENU});const d=(e,t)=>(l.trackEvent("app","mandatory-updte",window.__songRiffer.version),o(c.modals.updateAvailable,{changelog:t,mandatory:!0,url:e}));e.exports.setAllowFileDragging=e=>({type:c.actionTypes.SET_ALLOW_FILE_DRAGGING,allowFileDragging:e})},,,function(e,t,n){const i=n(0),s=n(2).default,a=n(5),o={xs:5,s:15,md:25},r=s.div`
    margin-top: ${e=>o[e.size]}px;
    margin-bottom: ${e=>o[e.size]}px;
`,l=({children:e,size:t="md"})=>i.createElement(r,{size:t},e);l.propTypes={children:a.node,size:a.oneOf(["md","s","xs"])},e.exports=l},function(e,t,n){const i=n(2).default,{colors:s}=n(1),a=i.button`
    outline: none;
    background: ${s._blue};
    color: ${s._white};
    font-family: inherit;
    font-size: 16px;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    transition: background ease 0.1s;

    :hover {
        background: ${s.purple};
    }
`;e.exports=a},function(e,t,n){const i=n(2).default,{colors:s}=n(1),a=i.input`
    display: inline-block;
    width: ${e=>e.isFullWidth?"100%":"auto"};
    padding: 3px 5px;
    margin-right: 3px;
    border-radius: 7px;
    background: transparent;
    border: 2px solid ${s._white};
    outline: none;
    color: ${s._white};
    font-size: 16px;

    &::placeholder {
        color: ${s._white};
        opacity: 0.4;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        margin: 0;
        appearance: none;
    }
`;e.exports=a},function(e,t,n){const i=n(1),s=n(61);e.exports.clearSearch=()=>({type:i.actionTypes.CLEAR_SEARCH}),e.exports.searchBasic=e=>(s.start("search"),{type:i.actionTypes.SEARCH_BASIC,term:e}),e.exports.searchTerm=e=>(s.start("search"),{type:i.actionTypes.SET_SEARCH,term:e}),e.exports.toggleAdvanced=()=>({type:i.actionTypes.TOGGLE_ADVANCED_SEARCH,__saveToDB__:!0,__db:i.db.app}),e.exports.searchTag=e=>(s.start("search"),{type:i.actionTypes.SEARCH_TAG,tag:e.trim()}),e.exports.removeSearchTag=e=>(s.start("search"),{type:i.actionTypes.REMOVE_SEARCH_TAG,tag:e}),e.exports.searchBPM=e=>(s.start("search"),{type:i.actionTypes.SEARCH_BPM,bpm:e}),e.exports.searchBPMDelta=e=>(s.start("search"),{type:i.actionTypes.SEARCH_BPM_DELTA,bpmDelta:e}),e.exports.transitionDone=()=>({type:i.actionTypes.ADVANCED_TRANSITION_DONE}),e.exports.setSearchArchived=e=>({type:i.actionTypes.SET_SEARCH_ARCHIVED,archived:e})},function(e,t,n){const i=n(0),s=n(2).default,a=s.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`,o=s.div`
    padding-right: 15px;
    flex: 1;
    overflow-y: auto;
    scroll-behavior: smooth;
    ${e=>e.s}
`;e.exports=({children:e,scrollElementRef:t=null,stickyHeader:n=null,wrapperStyle:s=""})=>i.createElement(a,null,n,i.createElement(o,{s:s,ref:t},e))},function(e,t){const n=e=>`${e}`.length>1?`${e}`:`0${e}`;e.exports.formatDuration=e=>{const t=Math.floor(e/3600),i=Math.floor(e/60)%60,s=e%60,a=n(t);return`${t?`${a}:`:""}${n(i)}:${n(s)}`},e.exports.escapeFilePath=e=>e.replace(/\?/g,escape("?"));const i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"];e.exports.formatFileSize=e=>{const t=Math.floor(Math.log(e)/Math.log(1024));return e?(e/Math.pow(1024,t)).toFixed(2)+" "+i[t]:"0 Bytes"}},,function(e,t,n){const i=n(2).default,{colors:s}=n(1);e.exports=i.a`
    color: ${s._white};
    text-decoration: underline;
    cursor: pointer;
`},function(e,t,n){const i=n(1);e.exports.playFile=e=>({type:i.actionTypes.PLAY_FILE,hashPath:e}),e.exports.togglePlay=()=>({type:i.actionTypes.TOGGLE_PLAY}),e.exports.pausePlayer=(e=!1)=>({type:i.actionTypes.PAUSE_PLAYER,unsetSelectedFile:!0})},,,function(e,t,n){"use strict";n.d(t,"a",function(){return p});var i=n(0),s=n.n(i),a=n(14),o=n(2),r=n(49),l=n.n(r);const c=o.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`,p=()=>{const e=a.Keyframes.Spring(async e=>{for(;;)await e({opacity:.2,from:{opacity:0},config:a.config.slow}),await e({opacity:0,from:{opacity:.2},config:a.config.gentle})});return s.a.createElement(c,null,s.a.createElement(e,{native:!0},e=>s.a.createElement(a.animated.div,{style:{opacity:e.opacity}},s.a.createElement(l.a,null))))}},function(e,t,n){const i=n(98);e.exports.getTagAutocomplete=(e,t="",n=[])=>{if(!t.length)return null;const i=t.toLowerCase();let s=null;const a=n.reduce((e,t)=>(e[t.toLowerCase()]=!0,e),{});for(let t=0;t<e.length;t++)if(e[t].startsWith(i)&&!a[e[t]]){s=e[t];break}return s};const{colors:s,colorsDarkFont:a}=n(1),o=Object.keys(s).reduce((e,t)=>("_"!==t.substring(0,1)&&(e[t]=s[t]),e),{}),r=Object.keys(s).reduce((e,t)=>(e[s[t]]=t,e),{});e.exports.getFontColorForColor=e=>a[r[e]]?s._black:s._white;const l=i.from(o);const c={};e.exports.getTagColor=e=>{const t=e.toLowerCase();if(!c[t]){const e=function(e){const t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t}(function(e){let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return t}(t));c[t]=l(e).value}return c[t]}},function(e,t,n){const i={};e.exports=function(e,t,n,s){if(!Array.isArray(e))throw new Error("Expected sources to be an array.");if("function"!=typeof t)throw new Error("Expected the outputFunc to be a function.");if(!n)throw new Error("Missing selectorName argument.");let a=null;return(o,r,l,c)=>{const p=s||c;l&&(l=`@${n}_${l}`);const d=l?i[l]:a;let h=!!d;if(d&&!r&&d.previousState===o)return d.result;const u=e.map((e,t)=>{const n=e(o,r,e.__forwardMemoizationKey?l:void 0);return h&&(h=d.sourcesValues[t]===n),n});if(h)return p&&console.log(`%cSame result ${n}`,"color: green"),d.result;{const e=t(...u),s={sourcesValues:u,result:e,previousState:o};return l?i[l]=s:a=s,p&&console.log(`%cNew result ${n}`,"color: red"),e}}}},,function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),a=n(5),o=n(2).default,{colors:r,noop:l}=n(1),c=n(30),p=o.div`
    display: ${e=>e.isFullWidth?"block":"inline-block"};
    position: relative;
`,d=o.div`
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
`,h=o.span`
    color: transparent;
`;class u extends s.PureComponent{constructor(...e){super(...e),i(this,"inputRef",s.createRef()),i(this,"onFocus",()=>{this.props.onFocus(this.inputRef)})}componentDidMount(){this.props.autoFocus&&this.inputRef.current.focus()}render(){const{autocomplete:e,autocompleteStyle:t,autoFocus:n,isFullWidth:i,onBlur:a,onChange:o,onKeyDown:r,style:l,tabIndex:u,type:m,value:g}=this.props,f=e?g.length:0;return s.createElement(p,{isFullWidth:!0},s.createElement(c,{isFullWidth:i,type:m,name:"tag-input",onFocus:this.onFocus,onBlur:a,onChange:o,onKeyDown:r,value:g,ref:this.inputRef,tabIndex:u,style:l,min:1}),s.createElement(d,{additionalStyle:t},s.createElement(h,null,g),e?`${"".repeat(f)}${e.slice(f,e.length)}`:null))}}i(u,"propTypes",{autocomplete:a.string,autocompleteStyle:a.string,autoFocus:a.bool,isFullWidth:a.bool,onBlur:a.func,onChange:a.func,onContextMenu:a.func,onFocus:a.func,onKeyDown:a.func,style:a.object,tabIndex:a.any,type:a.string,value:a.oneOfType([a.string,a.number])}),i(u,"defaultProps",{autocompleteStyle:"",onFocus:l,type:"text"}),e.exports=u},function(e,t,n){const i=n(1);e.exports.addNotification=(e,t,n="success")=>({type:i.actionTypes.ADD_NOTIFICATION,notification:{title:e,message:t,status:n}}),e.exports.removeNotification=()=>({type:i.actionTypes.REMOVE_NOTIFICATION}),e.exports.notifyMissingFile=e=>({type:i.actionTypes.NOTIFY_MISSING_FILE,file:e})},,function(e,t,n){const{CLOUD_LEVEL:i}=n(1),s=(e,t)=>e.data.cloudLevel>=t;e.exports.hasCorrectCloudLevel=s,e.exports.hasUpload=e=>s(e,i.LEVEL_3)},function(e,t,n){const i=n(2).default,{colors:s}=n(1),a=`1px solid ${s._grey}`,o=`\n    padding: 7px;\n    cursor: pointer;\n    background: transparent;\n    transition: background ease 0.1s;\n    color: ${s._white};\n    border-bottom: ${a};\n\n    :hover {\n        background: ${s._blue};\n    }\n`,r=i.div`
    ${o}

    border-top: ${e=>e.first?a:"none"};
`;e.exports=r,e.exports.ModalLink=i.a`
    ${o}
    display: block;
    text-decoration: none;
`},function(e,t,n){"use strict";n.r(t),n.d(t,"getFilesDurationAndBPM",function(){return u}),n.d(t,"importFiles",function(){return g});var i=n(15);n.d(t,"VALID_PLAYABLE_EXTENSIONS",function(){return i.b});var s=n(13);const{extname:a}=n(23),{analyze:o}=n(161),{openModal:r}=n(18),{editFile:l}=n(12),c=n(7),p=n(1),d=new AudioContext,h=["gp","gp5","gpx",...i.b,"pdf"],u=(e,t,n=0)=>{const i=t[n];i&&fetch(i.escapedPath||i.path).then(e=>e.arrayBuffer()).then(a=>{d.decodeAudioData(a,async a=>{const o=await m(a),r=parseInt(a.duration,10);(o&&!i.bpm||r&&!i.duration)&&e(l(Object(s.getFilePathHash)(i.path),{duration:r,bpm:o},!0)),u(e,t,n+1)},i=>{u(e,t,n+1)})})},m=e=>new Promise(t=>{o(e).then(e=>{t(parseInt(e,10))}).catch(()=>{t(!1)})}),g=(e,t,n)=>{const o=t.reduce((t,n)=>{if(n.isDirectory)return alert("no directory support for now"),t;if(!(e=>{if(e.type.includes("audio"))return!0;const t=a(e.name).toLowerCase().replace(".","");return!!h.includes(t)})(n))return e(r(p.modals.invalidFile,{file:n})),t;const o=new i.a(n);return t[Object(s.getFilePathHash)(o.path)]=o.toJSON(),t},{});n(o);const l=Object.values(o);if(l.length){c.trackEvent("file","file-import","import",l.length);try{l.forEach(e=>{c.trackEvent("file","file-name",e.name.replace(a(e.name),""))})}catch(e){}u(e,l)}}},function(e,t,n){const i=n(0),s=n(2).default,a=n(1),o=s.svg`
    width: 184px;
    animation: open 1s 1;
    animation-timing-function: ease;

    path {
        fill: ${a.colors._white};
    }
`;e.exports=({angle:e,opacity:t})=>i.createElement(o,{viewBox:"0 0 184 184",style:{transform:`rotate(${e})`,opacity:t}},i.createElement("defs",null,i.createElement("clipPath",{id:"logo-b"},i.createElement("path",{d:"M.625.621094h173.222656V172.8125H.625zm0 0"})),i.createElement("clipPath",{id:"logo-a"},i.createElement("path",{d:"M0 0h174v173H0z"})),i.createElement("g",{id:"logo-c",clipPath:"url(#logo-a)"},i.createElement("g",{clipPath:"url(#logo-b)"},i.createElement("path",{d:"M74.582031 172.8125C38.964844 168.527344 2.6875 137.164063.707031 90.839844-1.34375 42.832031 35.828125 2.527344 83.917969.6875c48.1875-1.84375 88.25 35.582031 89.878906 83.511719 1.597656 46.980469-33.316406 82.6875-72.476562 88.398437 19.148437-4.351562 34.371093-14.488281 44.898437-31.125 10.550781-16.671875 13.402344-34.8125 8.863281-53.988281-7.789062-32.925781-38.855468-55.480469-72.910156-52.960937-34.179687 2.53125-60.917969 29.121093-64.277344 62.5-3.667968 36.425781 20.996094 69.035156 56.6875 75.789062"})),i.createElement("path",{d:"M98.648438 43.191406c26.601562 4.265625 50.992187 29.03125 50.578125 61.816407-.425782 33.550781-27.953125 60.859375-61.640625 61.015625-34.027344.15625-61.777344-26.816407-62.382813-60.851563-.589844-33.167969 24.109375-57.722656 50.671875-62-13.480469 3.472656-24.113281 10.925781-31.328125 22.867188-7.238281 11.976562-9.089844 24.894531-5.632812 38.449218C44.835938 127.6875 66.75 143.6875 91.613281 141.742188c23.050782-1.796875 42.597657-20.574219 45.265625-43.804688 2.992188-26.046875-13.941406-49.007812-38.230468-54.746094"}),i.createElement("path",{d:"M77.851563 135.882813c-17.867188-3.527344-34.558594-20.648438-33.675782-43.578125C45.066406 69.074219 63.769531 50.925781 86.75 50.6875c22.921875-.238281 42.078125 17.277344 43.636719 40.015625 1.636719 23.878906-15.492188 41.902344-34.382813 45.359375 9.863282-2.820312 17.382813-8.597656 22.183594-17.707031 3.816406-7.234375 4.894531-14.949219 3.253906-22.9375-3.429687-16.707031-17.59375-27.996094-34.800781-27.90625-16.066406.085937-30.277344 11.945312-33.421875 27.992187-3.675781 18.753907 8.140625 35.945313 24.632813 40.378907"}),i.createElement("path",{d:"M94.582031 74.859375c12.640625 2.765625 24.214844 15.582031 22.679688 32.234375-1.402344 15.253906-14.769531 27.144531-30.539063 26.960938-15.433593-.183594-28.492187-12.589844-29.4375-28.011719-1.03125-16.753906 10.984375-28.699219 22.878907-31.160156-6.007813 2.042968-10.726563 5.691406-13.875 11.230468-3.164063 5.566407-3.996094 11.523438-2.496094 17.730469 2.628906 10.910156 12.324219 18.484375 23.511719 18.488281 11.253906.007813 20.894531-7.589843 23.613281-18.539062 2.628906-10.578125-2.609375-24.527344-16.335938-28.933594"}))),i.createElement("use",{xlinkHref:"#logo-c"}))},,,,,,,,,,function(e,t,n){function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}const s=n(0),a=n(2).default,o=n(60),{getTagColor:r,getFontColorForColor:l}=n(40),{colors:c}=n(1),p=a(o)`
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
`,d=a.div`
    max-width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,h=a.div`
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
`,u=s.forwardRef((e,t)=>{const{additionalStyle:n,children:a,deleteTitle:o,onDelete:l}=e,c=r(a),u={...e};return delete u.onDelete,s.createElement(p,i({},u,{color:c,additionalStyle:n,ref:t}),s.createElement(d,null,a),l?s.createElement(h,{title:o,onClick:l,color:c},"x"):null)});e.exports=u},function(e,t,n){const i=n(2).default.span`
    display: inline-block;
    padding: 2px 8px;
    margin-right: 3px;
    border-radius: 7px;
    cursor: pointer;
    transition: background ease 0.1s;
`;e.exports=i},function(e,t,n){const i=n(7),s=!1;e.exports=new class{constructor(){var e,t,n;n={},(t="eventsRunning")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}start(e){this.eventsRunning[e]=+new Date}end(e){if(!this.eventsRunning[e])return void(s&&console.warn(`[RUM] Event ${e} not started`));const t=+new Date-this.eventsRunning[e];delete this.eventsRunning[e],i.trackTiming("rum",e,t),s&&console.log(`[RUM] Event ${e} ran in ${t}ms`)}}},function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const{extname:r}=n(23),l=n(0),c=n(5),p=n(2).default,{connect:d}=n(6),{Spring:h}=n(14),u=n(106),m=n(107),g=n(63),f=n(108),E=n(109),v=n(64),{formatDuration:y}=n(33),{openModal:T}=n(18),{addTag:b,handleFileOpen:_,setBPM:S,setRating:x,setTimeSignature:C}=n(12),{displayTagContextMenu:w}=n(25),A=n(1),R=p(g)`
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

    box-shadow: ${e=>e.uploading?`inset 2px 0px 0 ${A.colors.bluePastel}`:e.uploaded?`inset 2px 0px 0 ${A.colors.blueGreen}`:"none"};
`,k=p.span`
    cursor: pointer;
`,F=p.span`
    color: #777;
`,L=p.div`
    display: flex;
    align-items: center;
`,D=p.div`
    flex: 1;
    padding: 7px 5px 7px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,P=p.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: ${A.colors.redLight};
    color: #fff;
    cursor: pointer;
    font-size: 18px;
`,I=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,M=p.div`
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
`;let O=d((e,t)=>({playing:t.selected&&e.player.playing}))((a=s=class extends l.PureComponent{constructor(...e){super(...e),o(this,"onDoubleClick",()=>{this.props.dispatch(_(this.props.file))}),o(this,"addTag",e=>{this.props.dispatch(b(this.props.file.hashPath,e))}),o(this,"onTagContextMenu",(e,t,n)=>{this.props.dispatch(w(this.props.file.hashPath,e,t,n))}),o(this,"setRating",e=>{this.props.dispatch(x(this.props.file.hashPath,e))}),o(this,"onTagClick",e=>{this.props.onTagClick(e)}),o(this,"saveBPM",e=>{parseInt(e,10)<0||this.props.dispatch(S(this.props.file.hashPath,e))}),o(this,"saveTimeSignature",e=>{this.props.dispatch(C(this.props.file.hashPath,e))}),o(this,"onTimeSignatureFocus",e=>{const t=e.current.value.split("/");e.current.setSelectionRange(0,t[0].length)}),o(this,"openOptionsModal",()=>{this.props.dispatch(T(A.modals.fileOptions,{file:this.props.file}))}),o(this,"onClickMissing",()=>{this.props.dispatch(T(A.modals.fileMissing,{fileHashPath:this.props.file.hashPath}))}),o(this,"openTagModal",()=>{this.props.dispatch(T(A.modals.tags,{fileHashPath:this.props.file.hashPath}))}),o(this,"openCommentModal",()=>{this.props.dispatch(T(A.modals.comment,{fileHashPath:this.props.file.hashPath}))})}renderFile(e){return this.props.file.newImport?l.createElement(h,{from:{background:"rgba(255, 255, 255, 0.4)"},to:{background:"rgba(255, 255, 255, 0)"},config:{duration:3e3}},({background:t})=>l.createElement("div",{style:{background:t}},e)):e}render(){const{file:e,playing:t,selected:n}=this.props,i=r(e.name),s=e.name.replace(i,"");return this.renderFile(l.createElement(R,{archived:e.archived,hasComment:e.hasComment(),isPlayable:e.isPlayable(),onDoubleClick:this.onDoubleClick,playing:t,selected:n,id:`file-${e.hashPath}`,uploaded:e.uploaded},l.createElement(L,null,l.createElement(k,{className:"play-button",onClick:this.onDoubleClick},l.createElement(f,null)),l.createElement(D,{title:e.name},s,l.createElement(F,null,i)),e.missing&&!e.uploaded?l.createElement(P,{onClick:this.onClickMissing,title:"We could not locate this file - click to replace it or remove it from your library"},"!"):null,!e.missing||e.missing&&e.hasComment()?l.createElement(u,{className:"comment-icon",hasComment:e.hasComment(),onClick:this.openCommentModal}):null),l.createElement(I,null,e.duration?y(e.duration):"--:--"),l.createElement(v,{addTag:this.addTag,limitedLayout:!0,openTagModal:this.openTagModal,onTagClick:this.onTagClick,onTagContextMenu:this.onTagContextMenu,tags:e.getTags()}),l.createElement(I,null,l.createElement(m,{value:e.bpm,placeholder:"+",onSave:this.saveBPM,type:"number"})),l.createElement(I,null,l.createElement(m,{onFocus:this.onTimeSignatureFocus,onSave:this.saveTimeSignature,value:e.timeSignature})),l.createElement(I,null,l.createElement(E,{onChange:this.setRating,rating:e.rating})),l.createElement(M,{title:"Click for more actions on this riff",onClick:this.openOptionsModal},"•••")))}},o(s,"propTypes",{dispatch:c.func,file:c.object.isRequired,onTagClick:c.func,selected:c.bool}),i=a))||i;e.exports=O},function(e,t,n){const i=n(2).default.div`
    display: grid;
    grid-template-columns: 300px 80px 1fr 70px 100px 100px 5px;
    grid-gap: 0;
    padding: 0 5px;
    border-bottom: 1px solid #444;
`;e.exports=i},function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),l=n(2).default,c=n(5),{connect:p}=n(6),d=n(59),h=n(60),u=n(111),m=n(24),{colors:g}=n(1),f=l.div`
    position: relative;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    ${e=>e.limitedLayout?((e,t)=>`\n    ${e?`\n            flex-direction: row;\n\n            ${t?"\n                    justify-content: flex-end;\n                ":""}\n        `:""}\n`)(e.editTag,e.moveForInput):null}
    ${e=>e.additionalStyle}
`,E=l(h)`
    padding: 0;
    text-align: center;
    border: 2px solid ${g._white};

    :hover {
        background: ${g._white};
        color: ${g._black};
    }
`,v=l(h)`
    border: 2px solid ${g._white};

    :hover {
        background: ${g._white};
        color: ${g._black};
    }
`;let y=p(e=>({advancedTransitionDone:m(e).advancedTransitionDone,appWidth:e.application.appWidth}))((a=s=class extends r.PureComponent{constructor(...e){super(...e),o(this,"state",{editTag:!1,firstVisibleTag:!1,fitInput:!0,limitedLayout:!1,sliceTags:!1,visibleTags:this.props.tags.length}),o(this,"rootRef",r.createRef()),o(this,"tagsRef",{}),o(this,"startEditTag",()=>{this.setState({editTag:!0},this.calculateVisibleTags)}),o(this,"onTagContextMenu",(e,t)=>{this.props.onTagContextMenu(t,e.clientX,e.clientY)}),o(this,"onTagClick",e=>{this.props.onTagClick(e)}),o(this,"addTag",e=>{this.props.addTag(e)}),o(this,"quitTagEdit",()=>{this.setState({editTag:!1},this.calculateVisibleTags)}),o(this,"calculateVisibleTags",()=>{if(!this.props.limitedLayout||!this.props.tags.length)return;const e=this.rootRef.current.offsetWidth,t=Object.values(this.tagsRef).filter(Boolean),{tagsTotalWidth:n,visibleTags:i}=t.reduce((t,n)=>(t.tagsTotalWidth+=n.offsetWidth+3,t.tagsTotalWidth<e-26&&t.visibleTags++,t),{tagsTotalWidth:0,visibleTags:0});if(i!==t.length&&(this.setState({visibleTags:i-1}),this.state.editTag||this.setState({sliceTags:!0})),this.state.editTag&&n+100>e){const{firstVisibleTag:n}=t.reverse().reduce((n,i,s)=>(n.tagsTotalWidth+=i.offsetWidth+3,n.tagsTotalWidth>e&&!n.firstVisibleTag&&(n.firstVisibleTag=t.length-(s+1)),n),{firstVisibleTag:!1,tagsTotalWidth:100});this.setState({firstVisibleTag:n,fitInput:!1})}else this.setState({fitInput:!0})})}componentDidMount(){this.calculateVisibleTags()}componentDidUpdate(e){(e.tags.length||this.props.tags.length)&&(e.tags!==this.props.tags||e.appWidth!==this.props.appWidth||!e.advancedTransitionDone&&this.props.advancedTransitionDone)&&this.setState({sliceTags:!1,visibleTags:this.props.tags.length},this.calculateVisibleTags)}render(){const{limitedLayout:e,openTagModal:t,tags:n}=this.props,{editTag:i,firstVisibleTag:s,fitInput:a,sliceTags:o,visibleTags:l}=this.state;return r.createElement(f,{ref:this.rootRef,additionalStyle:this.props.rootStyle,limitedLayout:e,editTag:i,moveForInput:!a},n.slice(0,o?l:n.length).map((e,t)=>r.createElement(d,{key:e,onContextMenu:t=>this.onTagContextMenu(t,e),onClick:()=>this.props.onTagClick(e),title:`Click to search all files with the tag "${e}"`,ref:t=>this.tagsRef[e]=t,additionalStyle:i&&!a&&!1!==s&&t===s?"\n    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%);\n":""},e)),o?r.createElement(v,{onClick:t,title:`${n.length-l} tags hidden, click to see them and add more`},n.length-Math.max(0,l),"+"):r.createElement(r.Fragment,null,i?r.createElement(u,{addTag:this.addTag,blacklist:n,inputWidth:100,quitTagEdit:this.quitTagEdit}):r.createElement(E,{className:"add-tag",onClick:this.startEditTag,style:{width:26,height:22}},"+")))}},o(s,"propTypes",{advancedTransitionDone:c.bool,appWidth:c.number,dispatch:c.func,limitedLayout:c.bool,openTagModal:c.func,onTagClick:c.func,onTagContextMenu:c.func,tags:c.array}),o(s,"defaultProps",{onTagContextMenu:()=>{}}),i=a))||i;e.exports=y},,function(e,t,n){const i=n(0),s=n(2).default,{colors:a}=n(1),o=s.svg`
    fill: ${a._white};
    opacity: 0.7;
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;e.exports=()=>i.createElement(o,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30"},i.createElement("path",{d:"M5 6.005c0-1.107 0.887-2.005 1.998-2.005h4.004c1.104 0 1.998 0.897 1.998 2.005v19.99c0 1.107-0.887 2.005-1.998 2.005h-4.004c-1.104 0-1.998-0.897-1.998-2.005v-19.99zM19 6.005c0-1.107 0.887-2.005 1.998-2.005h4.004c1.104 0 1.998 0.897 1.998 2.005v19.99c0 1.107-0.887 2.005-1.998 2.005h-4.004c-1.104 0-1.998-0.897-1.998-2.005v-19.99z"}))},function(e,t,n){const i=n(0),s=n(2).default,{colors:a}=n(1),o=s.svg`
    fill: ${a._white};
    opacity: 0.7;
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;e.exports=()=>i.createElement(o,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30"},i.createElement("path",{d:"M27.944 14.237c.18.1.316.2.436.314.143.138.267.297.368.48.027.046.05.094.073.142.124.275.18.553.18.828 0 .275-.056.553-.174.817-.092.205-.22.396-.378.563-.148.156-.32.285-.504.383L9.97 27.748c-.964.537-2.182.19-2.718-.777C6.998 26.516 7 25.24 7 25V6c0-1.1.826-1.932 1.87-1.996.107-.007.213-.006.32.005.364.03.7.158.98.352l17.774 9.875z"}))},function(e,t,n){const i=n(1);e.exports.recorderFileAlreadyExists=e=>({type:i.actionTypes.RECORDER_FILE_ALREADY_EXISTS,fileName:e}),e.exports.reset=()=>({type:i.actionTypes.RECORDER_RESET}),e.exports.recorderSaveSuccess=e=>({type:i.actionTypes.RECORDER_SAVE_SUCCESS,filePath:e})},function(e,t,n){const i=n(1),s=n(10),a=n(22);e.exports.signIn=e=>(a(`User sign in - ${e.email}`),{type:i.actionTypes.AUTH_SET_USER,user:e}),e.exports.setFullUserData=e=>({type:i.actionTypes.AUTH_SET_FULL_USER_DATA,data:e}),e.exports.signOut=()=>(s.signOut(),{type:i.actionTypes.AUTH_SIGN_OUT}),e.exports.notLogged=()=>({type:i.actionTypes.AUTH_NOT_LOGGED})},,,,,,,,,,,function(e,t,n){const i=n(0),s=n(2).default,{colors:a}=n(1),o=s.svg`
    fill: ${e=>e.color};
`;e.exports=({color:e=a.green,width:t})=>i.createElement(o,{viewBox:"0 0 16 16",width:t,color:e},i.createElement("polygon",{stroke:"none",fillRule:"evenodd",points:"2.6 7.4 1 9.2 5.3 14 15 3.8 13.3 2 5.3 10.4"}))},function(e,t,n){function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}const s=n(0),a=n(5),o=n(2).default,{Spring:r}=n(14),{colors:l}=n(1),c=o.svg`
    width: ${e=>e.width}px;
`,p=({animated:e=!1,fullDetail:t=!1,width:n=20})=>{const a={};return t?a.fillOpacity=0:a.fill=l.blueLight,s.createElement(c,{width:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"239.466 189.649 110.527 167.811"},s.createElement("defs",null,s.createElement("path",{d:"M326.99 193.65c11.05 0 20 8.95 20 20v120.81c0 11.05-8.95 20-20 20h-64.52c-11.05 0-20-8.95-20-20V213.65c0-11.05 8.95-20 20-20h64.52z",id:"transfer-a"}),s.createElement("path",{d:"M334.73 281.13L294.77 320l-40.04-38.78 25.36-.03-.05-41.17 29.35-.04.05 41.18 25.29-.03z",id:"transfer-b"}),s.createElement("path",{d:"M302.77 198.69a8.04 8.04 0 11-16.08 0 8.04 8.04 0 0116.08 0z",id:"transfer-c"})),s.createElement("use",i({xlinkHref:"#transfer-a"},a,{stroke:l.blueLight,strokeWidth:"6"})),e?s.createElement(r,{delay:500,from:{opacity:0},to:{opacity:1}},e=>s.createElement("use",{xlinkHref:"#transfer-b",fill:l.blueLight,fillOpacity:e.opacity,stroke:l.blueLight,strokeWidth:"2"})):s.createElement("use",{xlinkHref:"#transfer-b",fill:l.blueLight,stroke:l.blueLight,strokeWidth:"2"}),s.createElement("g",null,s.createElement("use",{xlinkHref:"#transfer-c",fill:l.blueLight})))};p.propTypes={animated:a.bool,fullDetail:a.bool,width:a.number},e.exports=p},function(e,t,n){n(0);const i=n(2).default,s=n(30),{colors:a}=n(1),o=i(s)`
    width: 100%;
    min-width: 420px;
    padding: 5px 7px;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid ${a._white};
    transition: border ease 0.1s;
    color: ${a._white};

    :focus {
        border-bottom: 1px solid ${a.blueLight};
        color: ${a.blueLight};
    }
`;e.exports=o},function(e,t,n){const i=n(1);e.exports.setFileList=e=>({type:i.actionTypes.TRANSFER_SET_FILE_LIST,files:e}),e.exports.startTansfer=e=>({type:i.actionTypes.TRANSFER_START_TRANFER,fileName:e}),e.exports.transferSaveSuccess=(e,t)=>({type:i.actionTypes.TRANSFER_SAVE_SUCCESS,fileName:e,filePath:t}),e.exports.reset=()=>({type:i.actionTypes.TRANSFER_RESET})},,,,,,,,,,,,function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),{connect:l}=n(6),c=n(2).default,p=n(5),d=n(29),h=n(59),u=n(30),m=n(43),g=n(100),{getTagAutocomplete:f}=n(40),E=n(24),{selectTags:v}=n(8),{clearSearch:y,removeSearchTag:T,searchBPM:b,searchBPMDelta:_,searchTerm:S,searchTag:x,setSearchArchived:C,transitionDone:w}=n(31),A=n(1),R=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${e=>e.visible?"300px":0};
    border-left: ${e=>e.visible?`1px solid ${A.colors.blueLight}`:0};
    transition: width ease 0.5s;
    transform: translateZ(0);
`,k=c.div`
    position: absolute;
    width: ${300}px;
    height: 100%;
    padding-left: 15px;
    top: 0;
    left: 0;
`,F=c.div`
    margin-bottom: 15px;
`,L=c.div`
    margin-bottom: 5px;
    color: ${A.colors.blueLight};
`,D=c.div`
    margin-bottom: 15px;
    display: flex;
`,P=c.span`
    display: flex;
    flex: 1;
    align-items: center;
`,I=c.div`
    margin-top: 25px;
`,M=c.div`
    display: flex;
    align-items: center;

    span {
        margin: 0 5px;
    }
`,O=c(u)`
    width: 70px;

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        margin: 0;
        appearance: none;
    }
`;let U=l(e=>({allTags:v(e),search:E(e),visible:E(e).displayAdvanced}))((a=s=class extends r.Component{constructor(...e){super(...e),o(this,"state",{autocompleteTag:null,newTag:""}),o(this,"rootRef",r.createRef()),o(this,"nameInputRef",r.createRef()),o(this,"searchName",e=>{this.props.dispatch(S(e.target.value))}),o(this,"onBPMChange",e=>{this.props.dispatch(b(e.target.value))}),o(this,"onBPMDeltaChange",e=>{this.props.dispatch(_(e.target.value))}),o(this,"onTagChange",e=>{const t=Object.keys(this.props.search.tags);this.setState({autocompleteTag:f(this.props.allTags,e.target.value,t),newTag:e.target.value})}),o(this,"onTagKeyDown",e=>{if("Tab"===e.key&&this.state.autocompleteTag)return this.props.dispatch(x(this.state.autocompleteTag)),e.preventDefault(),void this.quitTagEdit();"Enter"===e.key&&(this.props.dispatch(x(e.target.value)),this.quitTagEdit())}),o(this,"clearSearch",()=>{this.props.dispatch(y())}),o(this,"removeTag",e=>{this.props.dispatch(T(e))}),o(this,"onTransitionEnd",()=>{this.props.dispatch(w())}),o(this,"onSwitchArchived",e=>{e.target.checked?this.props.dispatch(C(A.searchArchived.ALL)):this.props.dispatch(C(A.searchArchived.NON_ARCHIVED))})}quitTagEdit(){this.setState({autocompleteTag:null,newTag:""})}shouldComponentUpdate(e){return this.props.visible||e.visible}componentDidMount(){this.rootRef.current.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})}componentWillUnmout(){this.rootRef.current.removeEventListener("transitionend",this.onTransitionEnd)}render(){const{search:e,visible:t}=this.props,{autocompleteTag:n,newTag:i}=this.state,s=e.term.length||e.bpm||Object.keys(e.tags).length,a=t?void 0:-1;return r.createElement(R,{visible:t,ref:this.rootRef},r.createElement(k,null,r.createElement(F,null,r.createElement(L,null,"Name"),r.createElement(u,{isFullWidth:!0,type:"text",onChange:this.searchName,value:e.term,tabIndex:a,id:"advanced-search-input",ref:this.nameInputRef})),r.createElement(F,null,r.createElement(L,null,"Tags"),r.createElement(m,{isFullWidth:!0,autocomplete:n,autocompleteStyle:"\n    top: 3px;\n    left: 2px;\n",onChange:this.onTagChange,onKeyDown:this.onTagKeyDown,value:i,tabIndex:a}),Object.keys(e.tags).length?r.createElement(I,null,Object.keys(e.tags).map(e=>r.createElement(h,{key:e,onDelete:()=>this.removeTag(e),deleteTitle:"Remove this tag from the search",additionalStyle:"\n    margin-bottom: 5px;\n"},e))):null),r.createElement(F,null,r.createElement(L,null,"Tempo"),r.createElement(M,null,r.createElement(O,{type:"number",onChange:this.onBPMChange,value:e.bpm,min:1,tabIndex:a}),r.createElement("span",null,"bpm + / - "),r.createElement(O,{type:"number",onChange:this.onBPMDeltaChange,value:e.bpmDelta,title:e.bpm?`Results will include riffs that have a tempo between ${e.bpm-10} and ${e.bpm+10}`:null,min:0,tabIndex:a}))),r.createElement(D,null,r.createElement(P,null,"Show archived files"),r.createElement(g,{onChange:this.onSwitchArchived,checked:e.archived===A.searchArchived.ALL})),s?r.createElement(d,{onClick:this.clearSearch,tabIndex:a},"Clear search"):null))}},o(s,"propTypes",{allTags:p.any,dispatch:p.func,search:p.object,visible:p.bool}),i=a))||i;e.exports=U},function(e,t,n){const i=n(23),s=n(97),a=i.join(s.homedir(),"SongRiffer/Recorder"),o=i.join(s.homedir(),"SongRiffer/Transfer");e.exports={backgroundColor:"#121212",events:{CHECK_FILE_EXISTS:"CHECK_FILE_EXISTS",CHECK_FILES:"CHECK_FILES",CHECK_FILES_DB_EXISTS:"CHECK_FILES_DB_EXISTS",CHECK_FILES_DB:"CHECK_FILES_DB",CLEAR_DB:"CLEAR_DB",DATA_FETCHED:"DATA_FETCHED",FETCH_DATA:"FETCH_DATA",FILE_ALREADY_EXISTS:"FILE_ALREADY_EXISTS",FILE_SAVE_SUCCESS:"FILE_SAVE_SUCCESS",FILE_SYSTEM_ERROR:"FILE_SYSTEM_ERROR",GET_MXLM:"GET_MXLM",GET_MXLM_SUCCESS:"GET_MXLM_SUCCESS",MISSING_FILES:"MISSING_FILES",OPEN_DEEPLINK:"OPEN_DEEPLINK",RELOAD:"RELOAD",SAVE_DATA:"SAVE_DATA",SAVE_MEDIA:"SAVE_MEDIA",TOGGLE_DEVTOOLS:"TOGGLE_DEVTOOLS",UNLINK_FILE:"UNLINK_FILE"},saveTypesFolder:{RECORDER:a,TRANSFER:o},RECORDER_BASE_PATH:a,TRANSFER_BASE_PATH:o,windowStateFileName:"window-state-app-songriffer.json"}},,,,function(e,t,n){const i=n(0),s=n(2).default,{colors:a}=(n(5),n(1)),o=s.label`
    display: block;
    position: relative;
    width: 48px;
    height: 28px;
    margin-right: 1px;
    border-radius: 50px;
    border: 1px solid ${a._blue}
    background: ${e=>e.checked?a._blue:"transparent"};
    cursor: pointer;
    transition: background ease 0.3s;

    :after {
        position: absolute;
        content: '';
        width: 18px;
        height: 18px;
        border-radius: 100%;
        background: ${a._white};
        transform: translateX(${e=>e.checked?"25px":"5px"});
        top: 4px;
        transition: transform 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
`;e.exports=({checked:e,onChange:t})=>i.createElement(i.Fragment,null,i.createElement(o,{checked:e},i.createElement("input",{type:"checkbox",style:{display:"none"},onChange:t,checked:e})))},function(e,t,n){var i;const s=n(0),{connect:a}=n(6),o=n(2).default.div`
    position: absolute;
    width: 100%;
    height: 20px;
    ${e=>e.hasNotification?"":"-webkit-app-region: drag;"}
    top: 0;
    left: 0;
`;let r=a(e=>({notification:e.notifications.notification}))(i=class extends s.Component{render(){const{notification:e}=this.props;return s.createElement(o,{hasNotification:e.active})}})||i;e.exports=r},function(e,t,n){const i=n(0),s=n(2).default,a=n(29),o=n(35),r=n(28),{openLink:l,reload:c}=n(9),p=n(1),d=s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${p.colors._white};
`,h=s.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
`,u=s.div`
    font-size: 18px;
`,m=s.div`
    padding: 30px 0;
`,g=s(a)`
    padding: 5px 10px;
`;e.exports=()=>i.createElement(d,null,i.createElement(h,null,"Woops, something went wrong :("),i.createElement(u,null,"Sorry about that, it seems something is broken."),i.createElement(m,null,i.createElement(g,{onClick:c},"Restart the app")),i.createElement(r,{size:"xs"},"If you think something is not right, feel free to contact us for support:"),i.createElement(r,{size:"xs"},i.createElement(o,{href:`mailto:${p.email}`},"Send us an email")),i.createElement(r,{size:"xs"},i.createElement(o,{onClick:()=>l(p.messengerUrl)},"Write to us on Messenger")))},function(e,t,n){const i=n(0),s=n(2).default,{colors:a}=n(1),o=s.svg`
    width: 15px;
    height: 15px;
    margin-left: 2px;
    transform: rotate(${e=>e.rotate?"180deg":"0deg"});

    fill: ${a.blueLight};
`;e.exports=({rotate:e})=>i.createElement(o,{viewBox:"0 0 10 5",rotate:e},i.createElement("path",{fillRule:"evenodd",d:"M0 0h10L5 6"}))},,,function(e,t,n){const i=n(0),s=n(2).default,a=n(5),{colors:o}=n(1),r=s.svg`
    width: 25px;
    height: 25px;
    margin-top: 6px;
    transition: opacity ease 0.1s;
    opacity: ${e=>e.hasComment?.6:.4};
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;class l extends i.Component{render(){const{className:e,hasComment:t,onClick:n}=this.props;return i.createElement(r,{hasComment:t,onClick:n,className:e,title:t?"Edit this file's comment":"Add a comment for this file"},i.createElement("use",{xlinkHref:"#commentIcon"}))}}var c,p,d;c=l,p="propTypes",d={hasComment:a.bool,onClick:a.func},p in c?Object.defineProperty(c,p,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[p]=d,e.exports=l},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),a=n(5),o=n(2).default,r=n(43),{noop:l}=n(1),c=o.div`
    cursor: pointer;
`;class p extends s.Component{constructor(...e){super(...e),i(this,"state",{edit:!1,_value:this.props.value||""}),i(this,"onClick",()=>{this.setState({edit:!0})}),i(this,"onKeyDown",e=>{"Enter"===e.key&&this.props.onSave(this.state._value),"Enter"!==e.key&&"Escape"!==e.key||this.setState({edit:!1})}),i(this,"onBlur",()=>{this.props.onSave(this.state._value),this.setState({edit:!1})}),i(this,"onChange",e=>{this.setState({_value:e.target.value})})}render(){const{onFocus:e,placeholder:t,type:n,value:i}=this.props,{edit:a,_value:o}=this.state;return a?s.createElement(r,{autoFocus:!0,onBlur:this.onBlur,onChange:this.onChange,onFocus:e,onKeyDown:this.onKeyDown,value:o,style:{width:"100%"},type:n}):s.createElement(c,{onClick:this.onClick,title:"Click to edit"},i||t)}}i(p,"propTypes",{onFocus:a.func,onSave:a.func,placeholder:a.string,type:a.string,value:a.oneOfType([a.string,a.number])}),i(p,"defaultProps",{onFocus:l,type:"text"}),e.exports=p},function(e,t,n){const i=n(0),s=n(2).default,{colors:a}=n(1),o=s.svg`
    width: 12px;
    fill: ${a._white};
    opacity: 0.5;

    :hover {
        opacity: 1;
    }
`;e.exports=()=>i.createElement(o,{viewBox:"0 0 32 32"},i.createElement("use",{xlinkHref:"#playIcon"}))},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),a=n(5),o=n(2).default,r=n(110),l=o.div`
    cursor: pointer;
`;class c extends s.Component{constructor(...e){super(...e),i(this,"state",{starsHover:!1}),i(this,"setRating",e=>{this.props.onChange(e)}),i(this,"onMouseEnter",e=>{this.setState({starsHover:e})}),i(this,"onMouseLeave",()=>{this.setState({starsHover:!1})})}render(){const{rating:e}=this.props,{starsHover:t}=this.state,n=!1!==t?t:e;return s.createElement(l,null,Array(5).fill(0).map((e,t)=>s.createElement(r,{on:null!==n&&n>=t,key:`star-${t}`,onClick:this.setRating,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,value:t})))}}i(c,"propTypes",{onChange:a.func,rating:a.number}),e.exports=c},function(e,t,n){const i=n(0),s=n(2).default,{colors:a}=n(1),o=s.div`
    display: inline-block;
    padding-right: 3px;
`,r=s.svg`
    width: 12px;
    cursor: pointer;

    :hover {
        opacity: ${e=>e.on?.5:1};
    }
`,l=s.g`
    stroke: ${e=>e.on?"none":a._white};

    :hover {
        stroke: none;
    }
`,c=s.g`
    fill: ${e=>e.on?a._white:"transparent"};

    :hover {
        fill: ${a._white};
    }
`,p=i.memo(({on:e,onClick:t,onMouseEnter:n,onMouseLeave:s,value:a})=>i.createElement(o,{onClick:()=>t(a),on:e,onMouseEnter:()=>n(a),onMouseLeave:()=>s(a)},i.createElement(r,{viewBox:"0 0 38 37",xmlns:"http://www.w3.org/2000/svg"},i.createElement(l,{strokeWidth:"1",fill:"none",fillRule:"evenodd",on:e},i.createElement(c,{transform:"translate(-723.000000, -349.000000)",fillRule:"nonzero",on:e},i.createElement("g",{transform:"translate(297.000000, 191.000000)"},i.createElement("g",{transform:"translate(215.000000, 158.000000)"},i.createElement("path",{d:"M231.808476,1.13940625 L236.089018,9.81290625 C236.386684,10.4161563 236.962226,10.8341563 237.628018,10.9307396 L247.200059,12.3216979 C248.876809,12.5655313 249.545768,14.6254479 248.332934,15.8074063 L241.406643,22.5587396 C240.925309,23.0281979 240.705226,23.7050729 240.819226,24.3676979 L242.454018,33.9009479 C242.740601,35.5705729 240.987851,36.8435729 239.488434,36.0558646 L230.927351,31.5552396 C230.332018,31.2425313 229.620309,31.2425313 229.024976,31.5552396 L220.463893,36.0558646 C218.964476,36.8443646 217.211726,35.5705729 217.498309,33.9009479 L219.133101,24.3676979 C219.247101,23.7050729 219.027018,23.0281979 218.545684,22.5587396 L211.619393,15.8074062 C210.406559,14.6246562 211.075518,12.5647396 212.752268,12.3216979 L222.324309,10.9307396 C222.990101,10.8341563 223.565643,10.4161563 223.863309,9.81290625 L228.143851,1.13940625 C228.892768,-0.379802083 231.058768,-0.379802083 231.808476,1.13940625 Z"}))))))));e.exports=p},function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),{connect:l}=n(6),c=n(5),p=n(43),{selectTags:d}=n(8),{getTagAutocomplete:h}=n(40);let u=l(e=>({allTags:d(e)}))((a=s=class extends r.Component{constructor(...e){super(...e),o(this,"state",{autocompleteTag:null,newTag:""}),o(this,"onTagKeyDown",e=>{"Enter"===e.key&&this.state.newTag.length&&(this.resetTagWrite(),this.props.addTag(this.state.newTag)),"Tab"===e.key&&(this.state.autocompleteTag&&(this.resetTagWrite(),this.props.addTag(this.state.autocompleteTag)),e.preventDefault()),"Escape"===e.key&&(this.props.quitTagEdit(),e.preventDefault())}),o(this,"resetTagWrite",()=>{this.setState({autocompleteTag:null,newTag:""},this.calculateVisibleTags)}),o(this,"writeTag",e=>{this.setState({autocompleteTag:h(this.props.allTags,e.target.value,this.props.blacklist),newTag:e.target.value})})}render(){const{autocompleteTag:e,newTag:t}=this.state,{inputWidth:n,quitTagEdit:i}=this.props;return r.createElement(p,{autocomplete:e,autoFocus:!0,onBlur:i,onChange:this.writeTag,onKeyDown:this.onTagKeyDown,value:t,style:{width:n,height:22}})}},o(s,"propTypes",{addTag:c.func,allTags:c.any,blacklist:c.array,quitTagEdit:c.func}),i=a))||i;e.exports=u},,,,,,,,,,,,,function(e){e.exports={apiKey:"AIzaSyBrkXIQBEvF9qslWeO91XUUUng3zAH9ZEk",databaseURL:"https://songriffer.firebaseio.com",projectId:"songriffer",storageBucket:"songriffer.appspot.com",messagingSenderId:"246769208094",appId:"1:246769208094:web:6a65c6866b23adc4"}},,function(e,t,n){const i=n(0),s=n(2).default,{colors:a}=n(1),o=s.path`
    fill: ${a._white};
`;e.exports=()=>i.createElement("div",{style:{display:"none"}},i.createElement("svg",null,i.createElement("symbol",{id:"commentIcon",viewBox:"0 0 720 720"},i.createElement(o,{d:"m552.011719-1.332031h-464.023438c-48.515625 0-87.988281 39.464843-87.988281 87.988281v283.972656c0 48.414063 39.300781 87.816406 87.675781 87.988282v128.863281l185.191407-128.863281h279.144531c48.515625 0 87.988281-39.472657 87.988281-87.988282v-283.972656c0-48.523438-39.472656-87.988281-87.988281-87.988281zm50.488281 371.960937c0 27.835938-22.648438 50.488282-50.488281 50.488282h-290.910157l-135.925781 94.585937v-94.585937h-37.1875c-27.839843 0-50.488281-22.652344-50.488281-50.488282v-283.972656c0-27.84375 22.648438-50.488281 50.488281-50.488281h464.023438c27.839843 0 50.488281 22.644531 50.488281 50.488281zm0 0"}),i.createElement(o,{d:"m171.292969 131.171875h297.414062v37.5h-297.414062zm0 0"}),i.createElement(o,{d:"m171.292969 211.171875h297.414062v37.5h-297.414062zm0 0"}),i.createElement(o,{d:"m171.292969 291.171875h297.414062v37.5h-297.414062zm0 0"}))),i.createElement("svg",null,i.createElement("symbol",{id:"playIcon",viewBox:"0 0 32 32"},i.createElement(o,{d:"M27.944 14.237c.18.1.316.2.436.314.143.138.267.297.368.48.027.046.05.094.073.142.124.275.18.553.18.828 0 .275-.056.553-.174.817-.092.205-.22.396-.378.563-.148.156-.32.285-.504.383L9.97 27.748c-.964.537-2.182.19-2.718-.777C6.998 26.516 7 25.24 7 25V6c0-1.1.826-1.932 1.87-1.996.107-.007.213-.006.32.005.364.03.7.158.98.352l17.774 9.875z"}))))},function(e,t,n){const i=n(0),s=n(2).default,a=n(1),o=s.svg`
    width: 225px;
    height: 41px;
    path {
        fill: ${a.colors._white};
    }
    ${e=>e.s};
`;e.exports=({style:e=""})=>i.createElement(o,{s:e},i.createElement("defs",null,i.createElement("clipPath",{id:"logo-name-b"},i.createElement("path",{d:"M.359375.5625H40v38.066406H.359375zm0 0"})),i.createElement("clipPath",{id:"logo-name-c"},i.createElement("path",{d:"M6 10h29v28.628906H6zm0 0"})),i.createElement("clipPath",{id:"logo-name-d"},i.createElement("path",{d:"M210 11h12.085938v17H210zm0 0"})),i.createElement("clipPath",{id:"logo-name-a"},i.createElement("path",{d:"M0 0h223v39H0z"})),i.createElement("g",{id:"logo-name-e",clipPath:"url(#logo-name-a)"},i.createElement("g",{clipPath:"url(#logo-name-b)"},i.createElement("path",{d:"M26.722656 38.628906c8.09375-4.105468 10.417969-12.238281 8.667969-18.65625-1.835937-6.738281-7.867187-11.53125-14.597656-11.695312-7.203125-.179688-13.453125 4.15625-15.691406 10.558594-2.148438 6.160156-.453125 15.359375 8.351562 19.785156C7.757813 37.242188.132813 30.050781.363281 19.652344.585938 9.710938 8.890625 1.113281 18.882813.589844 29.363281.0429688 38.398438 7.523438 39.617188 18.011719c1.242187 10.710937-6.058594 18.621094-12.894532 20.617187"})),i.createElement("path",{d:"M122.683594 23.71875c1.039062 0 2.078125-.011719 3.117187.003906.507813.007813.820313-.089843.808594-.714843-.035156-1.835938.039063-3.675782-.042969-5.507813-.070312-1.527344-.769531-2.382812-2.167968-2.609375-1.894532-.304687-3.824219-.359375-5.710938.054688-1.671875.363281-2.382812 1.621093-2.445312 4.019531-.066407 2.59375.652343 4.070312 2.273437 4.535156.527344.152344 1.101563.1875 1.65625.210938.835938.035156 1.675781.007812 2.511719.007812m7.292969-.839844c0 2.117188.109375 4.242188-.023438 6.351563-.179687 2.777344-1.578125 4.203125-4.367187 4.496094-3.507813.367187-7.03125.082031-10.546875.152343-.457032.007813-.660157-.207031-.636719-.652343.003906-.039063.003906-.082032 0-.121094-.203125-2.546875-.203125-2.539063 2.324219-2.546875 2.4375-.007813 4.878906.035156 7.3125-.054688 1.808593-.066406 2.554687-1 2.574218-2.777343.007813-.675782-.195312-.910157-.875-.898438-1.800781.035156-3.601562-.042969-5.398437.023438-5.4375.195312-7.65625-2.988282-7.601563-8.058594.007813-.792969.132813-1.597656.308594-2.371094.644531-2.84375 2.421875-4.472656 5.355469-4.878906 2.183594-.300781 4.398437-.261719 6.582031-.058594 2.996094.28125 4.625 2.03125 4.980469 5.046875.246094 2.109375.042969 4.234375.011719 6.347656"}),i.createElement("g",{clipPath:"url(#logo-name-c)"},i.createElement("path",{d:"M15.371094 10.894531c-5.789063 2.964844-7.363281 8.558594-6.386719 12.832032 1.15625 5.058593 5.355469 8.65625 10.398438 8.960937 4.886718.296875 9.613281-2.746094 11.289062-7.296875 1.664063-4.523437.695313-10.261719-4.789062-13.890625 3.527343.164063 8.0625 6.761719 8.28125 12.042969.296875 7.261719-5.09375 13.578125-12.394532 14.527344-6.9375.902343-13.890625-3.855469-15.386718-10.53125-1.640625-7.308594 2.28125-14.597657 8.988281-16.644532"})),i.createElement("path",{d:"M54.777344 27.4375c-1.878906.003906-3.757813-.023437-5.636719.015625-.664062.011719-.890625-.179687-.914062-.867187-.117188-2.945313-.140625-2.945313 2.808593-2.945313 3 0 6 .03125 9-.015625 1.851563-.027344 2.859375-1.511719 2.265625-3.199219-.335937-.953125-1.09375-1.332031-2.011718-1.457031-1.871094-.265625-3.753907-.066406-5.632813-.132812-.71875-.023438-1.449219.007812-2.152344-.125-3.195312-.613282-4.859375-2.957032-4.59375-6.398438.25-3.246094 2.253907-5.230469 5.523438-5.292969 3.476562-.070312 6.957031 0 10.4375-.03125.710937-.007812.847656.261719.863281.90625.070313 2.867188.089844 2.867188-2.761719 2.867188-2.597656 0-5.199218-.027344-7.796875.007812-1.609375.023438-2.425781.789063-2.457031 2.175782-.027344 1.320312.695313 2.183593 2.101563 2.261718 1.875.105469 3.753906.066407 5.632812.121094.796875.023438 1.609375.042969 2.378906.222656 3.203125.730469 4.71875 3.09375 4.367188 6.679688-.308594 3.160156-2.378906 5.09375-5.664063 5.195312-1.917968.0625-3.835937.011719-5.757812.011719M141.667969 7c1.761719 0 3.519531-.019531 5.277344.003906 2.964843.046875 5.21875 1.777344 5.808593 4.421875.726563 3.265625-.484375 6.261719-3.167968 7.546875-.726563.347657-.734375.582032-.363282 1.199219 1.277344 2.121094 2.488282 4.28125 3.753907 6.410156.390625.65625.308593.851563-.496094.875-3.207031.089844-3.207031.109375-4.859375-2.71875-.847656-1.445312-1.730469-2.871093-2.550781-4.335937-.3125-.558594-.679688-.796875-1.328125-.773438-1.195313.042969-2.402344.066407-3.59375-.003906-.9375-.058594-1.152344.324219-1.125 1.183594.054687 1.878906-.015625 3.757812.03125 5.636719.019531.785156-.222657 1.011718-1.015625 1.015625-2.800782.007812-2.800782.039062-2.800782-2.789063 0-1.800781-.007812-3.601562.003907-5.398437.015625-2.324219.941406-3.277344 3.28125-3.304688 2.675781-.03125 5.355468.023438 8.035156-.023437 1.921875-.03125 3.066406-1.839844 2.371094-3.636719-.484375-1.242188-1.484375-1.554688-2.695313-1.550781-3.238281.007812-6.476562-.035157-9.714844.023437-1.023437.019531-1.382812-.21875-1.347656-1.3125C135.25 7.003906 135.191406 7 137.710938 7h3.957031M197.761719 18.359375h2.871094c.117187 0 .238281-.011719.355468-.019531 1.445313-.078125 2.113282-.617188 2.128907-1.71875.015625-1.160156-.722657-1.851563-2.132813-1.886719-1.589844-.039062-3.1875-.03125-4.78125-.011719-2.03125.03125-2.683594.78125-2.617187 2.820313.019531.625.207031.84375.828125.824219 1.113281-.03125 2.230468-.007813 3.347656-.007813m2.039062 9.121094c-1.519531 0-3.035156.023437-4.554687-.007813-2.992188-.066406-4.882813-1.871093-4.988281-4.847656-.074219-2.074219-.066407-4.15625-.003907-6.230469.085938-2.832031 1.605469-4.582031 4.445313-4.867187 2.65625-.269531 5.347656-.316406 8.007812.058594 2.53125.359375 3.875 2.183593 3.808594 4.964843-.0625 2.609375-1.386719 4.226563-3.933594 4.40625-2.464843.179688-4.949218.0625-7.421875.148438-.527343.015625-1.359375-.488281-1.550781.550781-.199219 1.078125.375 2.164063 1.328125 2.375.617188.136719 1.269531.160156 1.90625.164063 2.636719.015625 5.273438.027343 7.910156-.007813.765625-.007812 1.027344.214844 1.027344 1.019531-.007812 2.273438.03125 2.273438-2.261719 2.273438h-3.71875M78.390625 24.226563c.597656-.03125 1.195313-.046875 1.789063-.097657 2.109375-.179687 3.007812-.964843 3.351562-3.039062.203125-1.222656.214844-2.460938-.097656-3.683594-.425781-1.675781-1.265625-2.460937-2.972656-2.625-.949219-.089844-1.914063-.0625-2.871094-.058594-2.980469.015625-4.128906 1.113282-4.28125 4.0625-.222656 4.214844.902344 5.414063 5.082031 5.441407m.007813 3.253906c-.761719 0-1.519532.015625-2.277344-.003906-2.777344-.082032-5.023438-1.710938-5.820313-4.347657-.730468-2.425781-.742187-4.890625.011719-7.316406.757813-2.4375 2.464844-3.851562 4.984375-4.246094 1.945313-.304687 3.910156-.292968 5.847656-.0625 3.207032.378907 5.019532 2.078125 5.710938 5.242188.433594 1.972656.402344 3.96875-.101563 5.933594-.753906 2.953125-3.03125 4.730468-6.082031 4.796875-.757812.015625-1.515625.003906-2.273437.003906M91.519531 20c.003907-2.117187-.023437-4.238281.011719-6.355469.023438-1.519531.601563-2.210937 2.070313-2.214843 2.953125-.011719 5.910156-.210938 8.859375.144531 3.8125.464844 5.957031 2.816406 6.011718 6.640625.039063 2.757812-.019531 5.515625.019532 8.269531.011718.785156-.234375 1.015625-1.019532 1.015625C105 27.503906 105 27.539063 105 25.097656c0-2.195312.007813-4.394531-.003906-6.589843-.011719-2.136719-.921875-3.238282-3.050781-3.609375-2.097657-.371094-4.226563-.109375-6.339844-.175782-.84375-.027343-.679688.609375-.679688 1.097657-.007812 3.476562-.042968 6.953125.019532 10.429687.015625.996094-.25 1.285156-1.253907 1.253906-2.167968-.066406-2.171875-.011718-2.171875-2.230468V20M24.71875 30.238281c4.621094-3.769531 3.785156-9.359375.976563-12.136718-3.175782-3.140625-8.335938-3.050782-11.390625.191406-2.839844 3.015625-3.25 8.71875 1.53125 12.125-2.722657-.691406-5.917969-4.804688-5.539063-9.25.4375-5.128906 4.101563-8.761719 9.234375-9.214844 4.382813-.386719 9.011719 2.96875 10.054688 7.289063 1.09375 4.53125-1.023438 9.375-4.867188 10.996093M165 20.863281c.128906-1.8125-.238281-4.019531.214844-6.199218.40625-1.960938 1.414062-2.960938 3.414062-3.101563 1.832032-.128906 3.675782-.054687 5.515625-.085937.496094-.007813.667969.167968.710938.691406.1875 2.433594.207031 2.425781-2.207031 2.433594-.878907.003906-1.765625-.007813-2.632813.09375-1.21875.136718-2.183594 2.46875-1.457031 3.441406.199219.265625.511719.175781.777344.179687 1.320312.007813 2.640625.027344 3.960937-.007812.597656-.015625.820313.136719.839844.789062.085937 2.542969.113281 2.542969-2.460938 2.542969-.679687 0-1.367187.0625-2.039062-.015625-.996094-.117187-1.214844.328125-1.171875 1.222656.0625 1.277344-.003906 2.5625.019531 3.839844.011719.5625-.183594.738281-.757812.769531C165 27.601563 165 27.621094 165 24.964844zm0 0M177.714844 21.078125c0-1.792969-.074219-3.59375.015625-5.386719.140625-2.886718 1.523437-4.164062 4.417969-4.207031 1.476562-.019531 2.957031.035156 4.429687-.019531.789063-.027344 1.007813.234375 1 1.019531-.015625 2.113281.023438 2.105469-2.160156 2.117188-.914063.007812-1.839844-.007813-2.746094.09375-1.246094.136718-2.210937 2.414062-1.488281 3.429687.191406.273438.503906.191406.769531.191406 1.359375.007813 2.71875.03125 4.074219-.007812.613281-.015625.808594.15625.832031.800781.078125 2.53125.101563 2.5-2.464844 2.542969-1.058593.019531-2.417968-.484375-3.09375.246094-.605468.660156-.164062 1.984375-.171875 3.015625-.023437 2.613281-.007812 2.574218-2.566406 2.546875-.804687-.007813-.90625-.324219-.894531-.992188.035156-1.796875.011719-3.59375.011719-5.390625h.035156"}),i.createElement("g",{clipPath:"url(#logo-name-d)"},i.createElement("path",{d:"M210.878906 20.808594c.09375-1.785156-.167968-3.945313.160157-6.09375.300781-1.976563 1.179687-2.9375 3.148437-3.1875 2.378906-.304688 4.785156-.070313 7.175781-.125.386719-.011719.605469.144531.621094.542969.003906.082031.003906.160156.011719.242187.222656 2.53125.222656 2.53125-2.328125 2.535156-1.15625 0-2.316406-.035156-3.472656.023438-1.269532.066406-1.78125.625-1.789063 1.90625-.015625 3.234375-.039062 6.46875.015625 9.703125.011719.894531-.230469 1.160156-1.136719 1.148437-2.402343-.035156-2.40625.007813-2.40625-2.375zm0 0"})),i.createElement("path",{d:"M23.949219 18.628906c2.273437 1.128907 3.460937 4.273438 2.726562 7.210938-.75 2.984375-3.652343 5.164062-6.757812 5.074219-3.148438-.09375-5.859375-2.359375-6.507813-5.390625-.675781-3.1875 1.074219-6.433594 3.375-7.296875-2.636718 2.839843-2.910156 5.910156-.734375 8.257812 1.90625 2.054688 5.21875 2.324219 7.417969.601563 2.570313-2.011719 2.738281-4.957032.480469-8.457032M160.71875 22.878906c0 1.242188-.019531 2.480469.011719 3.71875.011719.582032-.113281.832032-.78125.859375-2.628906.109375-2.628906.136719-2.628906-2.472656 0-1.878906.027343-3.757812-.011719-5.636719-.019531-.722656.105469-1.054687.957031-1.050781 2.453125.007813 2.453125-.035156 2.453125 2.425781v2.15625M157.320313 14.367188c0-1.808594 0-1.808594 1.824218-1.808594 1.597657.003906 1.621094 0 1.636719 1.539062.027344 2.683594.277344 2.144532-2.074219 2.171875-1.691406.015625-1.351562.195313-1.386718-1.902343"}))),i.createElement("use",{xlinkHref:"#logo-name-e"}))},function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),{connect:l}=n(6),c=n(5),p=n(2).default,{setComment:d}=n(12),{selectFileByHashPath:h}=n(8),{colors:u}=n(1),m=p.div`
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
`;let E=l((e,t)=>({file:h(e,{fileHashPath:t.fileHashPath})}))((a=s=class extends r.Component{constructor(...e){super(...e),o(this,"state",{newComment:this.props.file.comment}),o(this,"textareaRef",r.createRef()),o(this,"saveTimeout",null),o(this,"save",()=>{this.props.dispatch(d(this.props.file.hashPath,this.state.newComment))}),o(this,"onChange",e=>{this.setState({newComment:e.target.value}),clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(this.save,1e3)}),o(this,"onKeyDown",e=>{"Enter"!==e.key||e.shiftKey||(this.props.close(),e.preventDefault())})}componentDidMount(){this.textareaRef.current.focus(),this.textareaRef.current.setSelectionRange(this.state.newComment.length,this.state.newComment.length)}componentWillUnmount(){this.save(),clearTimeout(this.saveTimeout)}render(){const{newComment:e}=this.state;return r.createElement(m,null,r.createElement(f,null,"Comment for: ",this.props.file.name),r.createElement(g,{onChange:this.onChange,onKeyDown:this.onKeyDown,ref:this.textareaRef,value:e,placeholder:"Write a comment about this riff"}))}},o(s,"propTypes",{close:c.func,file:c.object}),i=a))||i;e.exports=E},function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),{connect:l}=n(6),c=n(2).default,p=n(5),d=n(47),{openInFinder:h}=n(9),{removeFile:u,setFileArchiveStatus:m,setFileUploadedStatus:g}=n(12),f=n(7),E=n(10),{hasUpload:v}=n(46),{selectFileByHashPath:y}=n(8),{isAuthenticated:T,selectUser:b}=n(21),{colors:_}=n(1);c.div`
    margin-bottom: 20px;
    font-weight: bold;
`;let S=l((e,t)=>({file:y(e,{fileHashPath:t.file.hashPath}),isAuthenticated:T(e),user:b(e)}))((a=s=class extends r.Component{constructor(...e){super(...e),o(this,"state",{downloadUrl:"",uploadError:!1,uploading:!1,uploadProgress:0,uploadSuccess:!1}),o(this,"openInFinder",()=>{h(this.props.file.path),f.trackEvent("file","open-in-finder"),this.props.close()}),o(this,"toggleFileArchive",()=>{this.props.dispatch(m(this.props.file.hashPath,!this.props.file.archived)),this.props.close()}),o(this,"removeFile",()=>{this.props.close(),this.props.dispatch(u(this.props.file.hashPath))}),o(this,"onUploadProgress",e=>{this.setState({uploadProgress:e})}),o(this,"onUploadError",e=>{console.error("Error uploading",e),this.setState({uploadError:!0,uploading:!1})}),o(this,"onUploadSuccess",()=>{this.setState({uploading:!1,uploadSuccess:!0}),console.log("## success"),this.props.dispatch(g(this.props.file.hashPath,!0)),this.setDownloadUrl()}),o(this,"onUploadRunning",()=>{this.setState({uploading:!0})}),o(this,"handleUploadFile",()=>{this.props.isAuthenticated?this.props.file.uploaded?E.deleteFile(this.props.user,this.props.file.name).then(()=>{console.log("### deleted"),this.props.dispatch(g(this.props.file.hashPath,!1))}).catch(e=>{console.log("#### error deleting"),console.log(e)}):fetch(this.props.file.escapedPath).then(e=>e.blob()).then(e=>{E.uploadFile(this.props.user,this.props.file.name,e,{onError:this.onUploadError,onProgress:this.onUploadProgress,onRunning:this.onUploadRunning,onSuccess:this.onUploadSuccess})}):console.log("# not authenticated")})}setDownloadUrl(){E.getFileDownloadUrl(this.props.user,this.props.file.name).then(e=>this.setState({downloadUrl:e}))}renderUploadButton(){const{uploadError:e,uploading:t,uploadProgress:n}=this.state;return t?r.createElement("span",null,"Uploading... ",n.toFixed(0),"%"):e?r.createElement("span",null,"Error uploading"):this.props.file.uploaded?"Remove file from cloud":"Upload file"}componentDidMount(){f.trackScreen("modalFileOptions"),this.props.file.uploaded&&this.setDownloadUrl()}render(){const{file:e,user:t}=this.props,{downloadUrl:n}=this.state;return r.createElement(r.Fragment,null,v(t)?e.missing&&!e.uploaded?null:r.createElement(d,{onClick:this.handleUploadFile},this.renderUploadButton()):null,e.uploaded?r.createElement(d.ModalLink,{href:n,download:!0},"Download"):null,e.missing?null:r.createElement(d,{onClick:this.openInFinder},"Open in ","darwin"===window.__songRiffer.platform?"Finder":"File Explorer"),r.createElement(d,{onClick:this.toggleFileArchive},e.archived?"Unarchive":"Archive"," file"),r.createElement(d,{onClick:this.removeFile},"Remove from my riff library"))}},o(s,"propTypes",{close:p.func,dispatch:p.func,file:p.object.isRequired}),i=a))||i;e.exports=S},function(e,t,n){const i=n(0),s=n(5),a=n(35),o=n(7),r=n(1);class l extends i.Component{componentDidMount(){o.trackScreen("modalFileMissing"),o.trackEvent("file","invalid-file",this.props.file.type)}render(){const{file:e}=this.props;return i.createElement("div",null,i.createElement("div",null,"Sorry but we could not import the file ",e.name,"."),i.createElement("div",null,"Only audio files are supported."),i.createElement("div",null,"If you think this is a bug, feel free to contact us at"," ",i.createElement(a,{href:`mailto:${r.email}`},r.email),"."))}}var c,p,d;c=l,p="propTypes",d={dispatch:s.func,file:s.object},p in c?Object.defineProperty(c,p,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[p]=d,e.exports=l},function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),l=n(2).default,{connect:c}=n(6),p=n(5),d=n(29),{removeFile:h}=n(12),{selectFileByHashPath:u}=n(8),{unlinkFile:m}=n(9),g=n(7),f=n(1),E=l.div`
    max-width: 300px;
`,v=l.div`
    margin-bottom: 25px;
    font-size: 16px;
    line-height: 1.4;
`,y=l.span`
    color: ${f.colors.bluePastel};
`,T=l.div`
    display: flex;
    justify-content: space-between;
`,b=l(d)`
    padding: 10px 25px;
`;let _=c((e,t)=>({file:u(e,{fileHashPath:t.fileHashPath})}))((a=s=class extends r.Component{constructor(...e){super(...e),o(this,"removeFile",()=>{this.props.close(),this.props.dispatch(h(this.props.file.hashPath,!0))}),o(this,"deleteFile",()=>{this.props.close(),this.props.dispatch(h(this.props.file.hashPath,!0)),m(this.props.file.path),g.trackEvent("file","delete-file",this.props.file.source)})}componentDidMount(){g.trackScreen("modalRemoveFile")}render(){const{file:e}=this.props;let t;return e.source===f.sources.RECORD&&(t="recorded with the Recorder"),e.source===f.sources.TRANSFER&&(t="transfered from your phone"),r.createElement(E,null,r.createElement(v,null,r.createElement(y,null,e.name)," was ",t,". Do you want to delete the file as well as remove it from your library?"),r.createElement(T,null,r.createElement(b,{onClick:this.removeFile},"No"),r.createElement(b,{onClick:this.deleteFile},"Yes")))}},o(s,"propTypes",{dispatch:p.func,file:p.object}),i=a))||i;e.exports=_},function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),{connect:l}=n(6),c=n(5),p=n(2).default,d=n(133),h=d.VexTab,u=d.Artist,m=d.Flow.Renderer;u.NOLOGO=!0;const g=n(9),f=n(7),E=(n(1),p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    min-width: 890px;
    height: 70vh;
`),v=p.div`
    background: #fff;
    height: 100%;
    width: 890px;
    overflow-y: auto;
`;let y=l((e,t)=>({file:t.file,mxml:e.mxml}))((a=s=class extends r.Component{constructor(...e){super(...e),o(this,"scoreRef",r.createRef())}async displayScore(e){const t=new m(this.scoreRef.current,m.Backends.SVG),i=new u(10,10,600,{scale:.8}),s=new h(i);Promise.all([n.e(6),n.e(7)]).then(n.t.bind(null,164,7)).then(({parseGuitarProXML:n})=>{console.log("loaded");try{n(e,{options:{width:1100}}).then(e=>{s.parse(e.notation),i.render(t)})}catch(e){console.log(e)}})}componentDidMount(){f.trackScreen("modalTabs"),this.props.mxml.mxml&&this.props.mxml.filePath===this.props.file.path||g.getMXML(this.props.file.path),this.props.mxml.filePath===this.props.file.path&&this.props.mxml.mxml&&this.displayScore(this.props.mxml.mxml)}componentDidUpdate(e){e.mxml.mxml!==this.props.mxml.mxml&&this.displayScore(this.props.mxml.mxml)}render(){return r.createElement(E,null,r.createElement(v,{ref:this.scoreRef}))}},o(s,"propTypes",{file:c.object,mxml:c.object}),i=a))||i;e.exports=y},,function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),l=n(2).default,c=n(5),{connect:p}=n(6),d=n(64),{selectFileByHashPath:h}=n(8),{addTag:u,editFile:m,removeTag:g}=n(12),{displayTagContextMenu:f}=n(25),E=l.div`
    width: 650px;
`,v=l.div`
    font-weight: 600;
    margin-bottom: 25px;
`;let y=p((e,t)=>({file:h(e,{fileHashPath:t.fileHashPath})}))((a=s=class extends r.Component{constructor(...e){super(...e),o(this,"addTag",e=>{this.props.dispatch(u(this.props.file.hashPath,e))}),o(this,"onTagClick",()=>{}),o(this,"onTagContextMenu",(e,t,n)=>{this.props.dispatch(f(this.props.file.hashPath,e,t,n))}),o(this,"removeTag",e=>{this.props.dispatch(g(this.props.file.hashPath,e))})}render(){const{file:e}=this.props;return r.createElement(E,null,r.createElement(v,null,"Tags for ",e.name),r.createElement(d,{addTag:this.addTag,onTagClick:this.onTagClick,onTagContextMenu:this.onTagContextMenu,removeTag:this.removeTag,rootStyle:"\n    display: flex;\n    flex-wrap: wrap;\n\n    > * {\n        margin-bottom: 15px;\n    }\n",tags:e.getTags()}))}},o(s,"propTypes",{dispatch:c.func,file:c.object}),i=a))||i;e.exports=y},function(e,t,n){const i=n(0),s=n(5),a=n(2).default,o=a.div`
    max-width: 600px;
`,r=a.div`
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
`,l=i.memo(({message:e,title:t})=>i.createElement(o,null,i.createElement(r,null,t),i.createElement("div",null,e)));l.propTypes={message:s.node,title:s.string},e.exports=l},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),a=n(5),o=n(2).default,r=n(35),l=n(28),c=n(7),p=n(22),{openLink:d}=n(9),h=n(1),u=o.div`
    max-width: 700px;
`,m=o.div`
    padding: 45px;
    background: radial-gradient(ellipse at top, ${h.colors.blueLight}, transparent),
        radial-gradient(ellipse at left, ${h.colors.red}, transparent),
        radial-gradient(ellipse at right, ${h.colors.purple}, transparent);
`,g=o.div`
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
`,f=o.div`
    text-align: center;
`,E=o(r)`
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
`,v=o.div`
    font-size: 14px;
    opacity: 0.7;
    text-align: center;
`,y=o.div`
    padding: 20px;
    margin-top: 40px;
`,T=o.div`
    margin-bottom: 25px;
    text-align: center;
    font-size: 20px;
    font-weight: lighter;
`,b=o.div`
    padding-bottom: 25px;
    margin-bottom: 25px;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`,_=o.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    :last-child {
        border: none;
    }
`,S=o.div`
    width: ${e=>e.hasVideo?"50%":"100%"};
    padding-right: ${e=>e.hasVideo?"15px":"0"};
`,x=o.div`
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
`,C=o.div`
    font-size: 15px;
    opacity: 0.8;
`,w=o.video`
    width: 50%;
`;class A extends s.Component{constructor(...e){super(...e),i(this,"clickUpdate",()=>{c.trackEvent("app","download-update"),p("Download update from app")})}componentDidMount(){c.trackScreen("modalUpdate")}render(){const{changelog:e,mandatory:t,url:n}=this.props,i=t?"Your app is too old!":"Update version available";return s.createElement(u,null,s.createElement(m,null,s.createElement(g,null,i),t?s.createElement(l,null,s.createElement(f,null,"Please download and install the latest version to keep using SongRiffer")):null,s.createElement(E,{href:n,onClick:this.clickUpdate},"Download the update"),s.createElement(v,null,"Or visit ",s.createElement(r,{onClick:()=>d(h.landingUrl)},h.landingUrl)," to download and install the latest version.")),Array.isArray(e.sections)&&e.sections.length?s.createElement(y,null,s.createElement(T,null,e.title?e.title:"What's new in this update:"),e.description?s.createElement(b,null,e.description):null,s.createElement("div",null,e.sections.map(e=>s.createElement(_,{key:e.title},s.createElement(S,null,s.createElement(x,null,e.title),s.createElement(C,{hasVideo:e.video},e.message)),e.video?s.createElement(w,{autoPlay:!0,playsInline:!0,muted:!0,loop:!0,src:e.video}):null)))):null)}}i(A,"propTypes",{changelog:a.object,mandatory:a.bool,url:a.string}),e.exports=A,e.exports.rootStyle="\n    max-height: 90vh;\n    padding: 0;\n    overflow-y: auto;\n"},function(e,t,n){var i;function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a=n(0),o=n(2).default,{connect:r}=n(6),{removeNotification:l}=n(44),{colors:c}=n(1),p=o.div`
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
`;let d=r(e=>({notification:e.notifications.notification}))(i=class extends a.Component{constructor(...e){super(...e),s(this,"close",()=>{this.props.dispatch(l())}),s(this,"onClick",()=>{"function"==typeof this.props.notification.onClick&&this.props.dispatch(this.props.notification.onClick())}),s(this,"onMouseEnter",()=>{this.props.notification.onClick&&this.clearTimeout()}),s(this,"onMouseLeave",()=>{this.props.notification.onClick&&this.startTimeout()})}startTimeout(){clearTimeout(this.timeout),this.timeout=setTimeout(this.close,this.props.notification.timeout||3e3)}clearTimeout(){clearTimeout(this.timeout)}componentDidMount(){void 0!==this.props.notification.id&&this.startTimeout()}componentDidUpdate(e){e.notification.id!==this.props.notification.id&&this.startTimeout()}componentWillUmount(){this.clearTimeout()}render(){const{notification:e}=this.props;return a.createElement(p,{active:e.active,status:e?e.status:null,hasClickAction:"function"==typeof this.props.notification.onClick,onClick:this.onClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},e?e.title:null)}})||i;e.exports=d},,function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),{connect:l}=n(6),c=n(2).default,p=n(5),d=n(47),h=n(32),u=n(28),{checkUpdate:m}=n(25),{openModal:g}=n(18),{signOut:f}=n(69),{selectUser:E}=n(21),v=n(7),y=n(10),{hasUpload:T}=n(46),{formatFileSize:b}=n(33),{openLink:_,toggleDevTools:S}=n(9),x=n(1),C=c.div`
    width: 50%;
    padding: 0 40px;
`,w=c.div`
    margin-bottom: 25px;
    font-weight: 600;
    text-align: center;
    font-size: 18px;
`,A=c(d)`
    text-align: center;
`,R=c.span`
    color: ${x.colors.redLight};
`,k=c(d.ModalLink)`
    text-align: center;
`,F=c.div`
    margin-top: 30px;
`;let L=l(e=>({enableExperimental:e.application.enableExperimental,updateAvailable:e.application.updateAvailable,user:E(e)}))((a=s=class extends r.Component{constructor(...e){super(...e),o(this,"state",{storageSize:0,storageSizeLimit:0}),o(this,"signOut",()=>{this.props.dispatch(f())}),o(this,"checkUpdates",()=>{this.props.dispatch(m(!0))})}renderDevMenu(){return r.createElement(F,null,r.createElement(w,null,"Experimental Menu"),r.createElement(A,{onClick:S,first:!0},"Toggle dev tools"))}async fetchStorageSize(){if(T(this.props.user)){const e=await y.getUserStorageSize(this.props.user.uid),t=await y.getRemoteConfigValue(`STORAGE_LIMIT_LEVEL_${this.props.user.data.cloudLevel}`,0);this.setState({storageSize:e,storageSizeLimit:t})}}renderAccount(){if(T(this.props.user)){const{storageSize:e,storageSizeLimit:t}=this.state,n=100*e/t,i=isNaN(n)?0:n.toFixed(2);return r.createElement(u,null,r.createElement("div",null,"Total storage size used: ",b(e)," / ",b(t)," (",i,"%)"))}return null}componentDidMount(){v.trackScreen("settings"),this.fetchStorageSize()}render(){const{enableExperimental:e,updateAvailable:t,user:n}=this.props;return r.createElement(h,{wrapperStyle:"\n    display: flex;\n    height: 100%;\n    justify-content: space-between;\n    align-items: center;\n"},r.createElement(C,null,r.createElement(A,{onClick:this.checkUpdates,first:!0},"Check for updates ",t?r.createElement(R,null,"•"):null),r.createElement(k,{href:`mailto:${x.email}`},"Contact Us"),r.createElement(A,{onClick:()=>_(x.facebookUrl)},"Follow us on Facebook"),r.createElement(A,{onClick:()=>_(x.instagramUrl)},"Follow us on Instagram"),r.createElement(A,{onClick:()=>_(x.landingUrl)},"Visit us songriffer.com"),e&&this.renderDevMenu()),r.createElement(C,null,r.createElement(w,null,"Hello ",n.email,"!"),this.renderAccount(),r.createElement(A,{onClick:this.signOut,first:!0},"Sign out")))}},o(s,"propTypes",{dispatch:p.func,enableExperimental:p.bool,updateAvailable:p.bool,user:p.object}),i=a))||i;e.exports=L},function(e,t,n){var i;function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const{extname:a}=n(23),o=n(0),{connect:r}=n(6),l=n(2).default,{Link:c}=n(26),p=n(67),d=n(66),{selectSelectedFile:h}=n(8),{selectUser:u}=n(21),{togglePlay:m}=n(36),{formatDuration:g}=n(33),f=n(7),E=n(10),v=n(22),y=n(141),T=n(1),b=l.div`
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: ${e=>e.visible?0:"-100%"};
    left: 0;
    background: ${T.colors._blueDark};
    transition: bottom ease 0.4s;
    z-index: 10;
`,_=l.div`
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
`,S=l(c)`
    display: block;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${T.colors._white};
    text-decoration: none;
`,x=l.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
    text-align: center;
`,C=l.div`
    position: relative
    padding-right: 10px;
    flex: 1;
    height: 30px;
`,w=l.canvas`
    opacity: 0;
    transition: opacity ease 1s;
    height: 100%;
    width: 100%;
    cursor: pointer;
`,A=l(w)`
    position: absolute;
    width: calc(100% - 10px);
    top: 0;
    left: 0;
    opacity: 1;
    pointer-events: none;
`,R=new AudioContext;let k=r(e=>({file:h(e),playing:e.player.playing,user:u(e)}))(i=class extends o.Component{constructor(...e){super(...e),s(this,"canvas",o.createRef()),s(this,"canvasProgress",o.createRef()),s(this,"player",o.createRef()),s(this,"playerUI",o.createRef()),s(this,"state",{audioBuffer:null,progress:null,progressPercent:0,waveformData:[]}),s(this,"togglePlay",()=>{this.props.dispatch(m())}),s(this,"onWaveformCalculated",e=>{this.setState({waveformData:e.data}),this.canvasCtx.fillStyle=T.colors.purple;const t=this.canvas.current.height/2;e.data.forEach((e,n)=>{const i=1*n,s=(1+e.min)*t,a=Math.max(1,(e.max-e.min)*t);this.canvasCtx.fillRect(i,s,1,a)}),this.canvas.current.style.opacity=1}),s(this,"onCanvasClick",e=>{const t=e.clientX-e.target.offsetParent.offsetLeft,n=Math.round(100*t/e.target.offsetWidth),i=this.props.file.duration*n/100;this.player.current.currentTime=i})}playFile(){const{file:e}=this.props,t=[];e.missing&&e.uploaded&&(f.trackEvent("player","download-file"),v("Playing file from storage"),t.push(E.getFileDownloadUrl(this.props.user,e.name))),Promise.all(t).then(t=>{const n=t[0]||e.escapedPath;this.player.current.src=n,this.player.current.play(),this.eventInit||this.initEvents(),f.trackEvent("player","play-file",a(this.props.file.name)),this.canvasCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),this.canvasProgressCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),this.loadWaveform(n)})}initEvents(){this.eventInit=!0,this.player.current.addEventListener("timeupdate",e=>{let t=0,n=0;this.props.file&&(n=100*(t=parseInt(this.player.current.currentTime,10))/this.props.file.duration),t!==this.state.progress&&this.setState({progress:t,progressPercent:n})}),this.player.current.addEventListener("ended",e=>{this.togglePlay(),this.setState({progress:0,progressPercent:0})})}handlePlayingState(e){e&&this.player.current.paused&&(f.trackEvent("player","play"),this.player.current.play()),e||this.player.current.paused||(f.trackEvent("player","pause"),this.player.current.pause())}loadWaveform(e){fetch(e).then(e=>e.arrayBuffer()).then(e=>{R.decodeAudioData(e,async e=>{this.calculateWaveDataWorker.postMessage({channelData:e.getChannelData(0),width:this.canvas.current.width,pointWidth:1})})})}drawProgressWaveform(){if(!this.props.file)return;const e=this.state.waveformData.slice(0,Math.round(this.state.progressPercent*this.state.waveformData.length/100)),t=this.canvasProgress.current.height/2;this.canvasProgressCtx.fillStyle=T.colors._purpleLight,this.canvasProgressCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),e.forEach((e,n)=>{const i=1*n,s=(1+e.min)*t,a=Math.max(1,(e.max-e.min)*t);this.canvasProgressCtx.fillRect(i,s,1,a)})}componentDidMount(){this.canvasCtx=this.canvas.current.getContext("2d"),this.canvasProgressCtx=this.canvasProgress.current.getContext("2d"),this.calculateWaveDataWorker=new y,this.calculateWaveDataWorker.addEventListener("message",this.onWaveformCalculated)}componentDidUpdate(e,t){(!e.file&&this.props.file||e.file&&this.props.file&&e.file.path!==this.props.file.path)&&this.playFile(),e.playing!==this.props.playing&&this.handlePlayingState(this.props.playing),t.progress!==this.state.progress&&this.drawProgressWaveform()}render(){const{file:e}=this.props,{audioBuffer:t,progress:n,progressPercent:i}=this.state;return o.createElement(o.Fragment,null,o.createElement("audio",{ref:this.player}),o.createElement(b,{visible:e,ref:this.playerUI},o.createElement(_,null,o.createElement("div",{onClick:this.togglePlay},this.props.playing?o.createElement(d,null):o.createElement(p,null)),o.createElement(x,null,o.createElement(C,null,o.createElement(A,{ref:this.canvasProgress}),o.createElement(w,{ref:this.canvas,onClick:this.onCanvasClick})),e?o.createElement("span",null,g(n)," / ",g(e.duration)):null),e?o.createElement(S,{to:`${T.routes.home}#file-${this.props.file.hashPath}`,title:e.name},e.name):null)))}})||i;e.exports=k},function(e,t,n){e.exports=function(){return new Worker(n.p+"9b8ea8abcf2fd171fa20.worker.js")}},function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),{connect:l}=n(6),c=n(5),p=n(2).default,d=n(30),h=n(143),{searchBasic:u,toggleAdvanced:m}=n(31),g=n(24),f=p.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`,E=p(d)`
    margin-right: 7px;
    opacity: ${e=>e.visible?1:0};
    transition: opacity ease 0.3s;
`;let v=l(e=>{const t=g(e);return{advancedSearchVisible:t.displayAdvanced,search:t}})((a=s=class extends r.PureComponent{constructor(...e){super(...e),o(this,"search",e=>{this.props.dispatch(u(e.target.value))}),o(this,"toggleAdvanced",()=>{this.props.dispatch(m())})}componentWillUnmount(){this.props.advancedSearchVisible&&this.props.dispatch(m())}render(){const{advancedSearchVisible:e,search:t}=this.props;return r.createElement(f,null,r.createElement(E,{type:"text",onChange:this.search,value:t.basicTerm,name:"search",placeholder:"Search",visible:!e,id:"basic-search-input"}),r.createElement(h,{displayAdvanced:e,onClick:this.toggleAdvanced}))}},o(s,"propTypes",{advancedSearchVisible:c.bool,dispatch:c.func,search:c.object}),i=a))||i;e.exports=v},function(e,t,n){const i=n(0),s=n(2).default,{colors:a}=n(1),o=s.svg`
    cursor: pointer;

    path {
        fill: ${e=>e.active?a.blueLight:a._white};
    }
`;e.exports=({displayAdvanced:e,onClick:t})=>i.createElement(o,{viewBox:"0 0 96 96",width:"20",height:"20",onClick:t,active:e,title:e?"Close advanced search":"Open advanced search"},i.createElement("path",{d:"M37.4 12.1c-.7 4.4-1 4.7-6.5 8.3-3.5 2.3-3.6 2.3-8.1.5-5.3-2.1-4.7-2.6-10.8 8l-4.3 7.4 4.2 3.4c3.8 3.2 4.1 3.9 4.1 8.3s-.3 5.1-4.1 8.3l-4.2 3.4 4.3 7.4c6.1 10.6 5.5 10.1 10.8 8 4.5-1.8 4.6-1.8 8.1.5 5.5 3.6 5.8 3.9 6.5 8.3L38 88h5.5c3 0 5.5-.2 5.5-.4s-.9-2.5-2.1-5.1c-1.7-3.8-2-6.3-1.7-11.9l.3-7.1-4-2C27.1 54.3 32 33 48.1 33c5.8 0 10.7 3.1 13.4 8.5l2 4h8.2c5.7 0 8.3-.4 8.3-1.2 0-.6 1.9-2.7 4.1-4.6l4.2-3.4-4.3-7.4c-6.1-10.6-5.5-10.1-10.8-8-4.5 1.8-4.6 1.8-8.1-.5-5.5-3.6-5.8-3.9-6.5-8.3L58 8H38l-.6 4.1z"}),i.createElement("path",{d:"M62.5 53.7C55.2 57.5 52 63.1 52 72c0 12.6 7.4 20 19.9 20 3.3 0 7.2-.5 8.6-1.2 2.3-1 2.9-.8 5.8 2 3.9 3.8 4.7 3.9 7.5.9 2.9-3 2.8-3.5-1-7.4-2.8-2.9-3-3.5-2-5.8 2.8-6.2 1-17.5-3.7-22.9-4.7-5.3-17.9-7.5-24.6-3.9zm15.4 8.7c6.8 3.6 6.8 15.6 0 19.2-8.2 4.2-17-.9-16.9-9.8.1-8.7 8.9-13.5 16.9-9.4z"}))},function(e,t,n){var i;const s=n(0),a=n(2).default,{connect:o}=n(6),{Link:r,Route:l}=n(26),c=n(145),p=n(146),d=n(81),h=n(147),u=n(28),m=n(148),{selectSelectedFile:g}=n(8),f=n(1),E=a.div`
    display: flex;
    flex-direction: column;
    width: 75px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: ${e=>e.playerOpen?"50px":0};
    margin-right: 15px;
    font-size: 13px;
    border-right: 1px solid ${f.colors.blueLight};
`,v=a.div`
    flex: 1;
`,y=a.div``,T=a(r)`
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
`,b=a.div`
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
`;let _=o(e=>({enableExperimental:e.application.enableExperimental,selectedFile:g(e),updateAvailable:e.application.updateAvailable}))(i=class extends s.Component{renderItem(e,t){return s.createElement(l,{path:e,children:({match:n})=>s.createElement(T,{to:e,isActive:n&&n.isExact},s.createElement(b,null,t))})}render(){const{enableExperimental:e,selectedFile:t,updateAvailable:n}=this.props;return s.createElement(E,{playerOpen:!!t},s.createElement(v,null,this.renderItem(f.routes.home,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(c,null)),s.createElement("div",null,"Riffs"))),this.renderItem(f.routes.transfer,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(d,null)),s.createElement("div",null,"Mobile Transfer"))),this.renderItem(f.routes.recorder,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(h,null)),s.createElement("div",null,"Recorder"))),this.renderItem(f.routes.stats,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(m,null)),s.createElement("div",null,"Stats"))),e?this.renderItem(f.routes.projects,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(c,null)),s.createElement("div",null,"Projects"))):null),s.createElement(y,null,this.renderItem(f.routes.settings,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(p,null)),n?s.createElement("div",null,"Update available"):null))))}})||i;e.exports=_},function(e,t,n){const i=n(0),s=n(5),a=n(2).default,{colors:o}=n(1),r=a.svg`
    width: ${e=>e.width}px;
`,l=({width:e=20})=>i.createElement(r,{width:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"169.575 120.149 37.333 37.253"},i.createElement("defs",null,i.createElement("path",{d:"M170.57 120h33.34v7.75h-33.34v-15.47z",id:"file-list-a"}),i.createElement("path",{d:"M170.57 135h33.34v7.74h-33.34v-15.47z",id:"file-list-b"}),i.createElement("path",{d:"M170.57 150h33.34v7.74h-33.34v-15.47z",id:"file-list-c"})),i.createElement("use",{xlinkHref:"#file-list-a",fill:o.blueLight}),i.createElement("use",{xlinkHref:"#file-list-b",fill:o.blueLight}),i.createElement("use",{xlinkHref:"#file-list-c",fill:o.blueLight}));l.propTypes={width:s.number},e.exports=l},function(e,t,n){const i=n(0),{Spring:s}=(n(2).default,n(14)),{colors:a}=n(1);e.exports=()=>{const[e,t]=i.useState(!1);return i.createElement("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1)},i.createElement(s,{from:{angle:"0deg"},to:{angle:e?"60deg":"0deg"}},e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",viewBox:"0 0 21 20",style:{transform:`rotate(${e.angle})`}},i.createElement("path",{fill:a.blueLight,fillRule:"nonzero",d:"M20.84 8.89c-.032-.282-.36-.493-.643-.493-.917 0-1.73-.538-2.07-1.37a2.227 2.227 0 0 1 .558-2.473.555.555 0 0 0 .061-.754 9.895 9.895 0 0 0-1.584-1.6.557.557 0 0 0-.76.062c-.596.66-1.667.905-2.494.56A2.221 2.221 0 0 1 12.557.65a.555.555 0 0 0-.49-.584A9.984 9.984 0 0 0 9.816.06a.556.556 0 0 0-.496.572 2.225 2.225 0 0 1-1.369 2.133c-.817.334-1.88.091-2.476-.563a.558.558 0 0 0-.754-.064 9.933 9.933 0 0 0-1.618 1.6.556.556 0 0 0 .06.76c.696.63.92 1.633.559 2.495-.345.822-1.199 1.352-2.176 1.352a.544.544 0 0 0-.578.49 10.017 10.017 0 0 0-.004 2.275c.031.282.37.491.656.491.87-.022 1.707.517 2.057 1.37.35.853.125 1.847-.559 2.474a.556.556 0 0 0-.06.753c.464.592.997 1.13 1.581 1.6.23.185.563.16.762-.06.598-.661 1.668-.906 2.493-.56a2.218 2.218 0 0 1 1.353 2.17.555.555 0 0 0 .49.584 9.94 9.94 0 0 0 2.25.006.557.557 0 0 0 .495-.572 2.223 2.223 0 0 1 1.368-2.133c.823-.336 1.882-.09 2.477.563a.559.559 0 0 0 .755.064 9.956 9.956 0 0 0 1.618-1.6.555.555 0 0 0-.06-.76 2.216 2.216 0 0 1-.56-2.495 2.239 2.239 0 0 1 2.045-1.355l.124.003a.557.557 0 0 0 .585-.49c.088-.752.09-1.517.005-2.274zm-9.922 4.467a3.34 3.34 0 0 1-3.335-3.336 3.34 3.34 0 0 1 3.335-3.335 3.34 3.34 0 0 1 3.336 3.335 3.34 3.34 0 0 1-3.336 3.336z"}))))}},function(e,t,n){const i=n(0),s=n(2).default,{colors:a}=n(1),o=s.svg`
    width: ${e=>e.width}px;
`;e.exports=({animated:e=!1,width:t=20})=>i.createElement(o,{xmlns:"http://www.w3.org/2000/svg",viewBox:"229.839 194.175 68.196 68.196",width:t},i.createElement("defs",null,i.createElement("path",{d:"M295.03 227.27c0 17.72-14.38 32.1-32.09 32.1-17.72 0-32.1-14.38-32.1-32.1 0-17.71 14.38-32.1 32.1-32.1 17.71 0 32.09 14.39 32.09 32.1z",id:"recorder-a"})),i.createElement("use",{xlinkHref:"#recorder-a",fill:a.blueLight}))},function(e,t,n){const i=n(0),s=n(2).default,{colors:a}=n(1),o=s.svg`
    width: ${e=>e.width}px;
`;e.exports=({animated:e=!1,width:t=20})=>i.createElement(o,{width:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"159.476 103.524 63.048 56.381"},i.createElement("defs",null,i.createElement("path",{d:"M160.48 130.71h15.47v26.19h-15.47v-26.19z",id:"stats-a"}),i.createElement("path",{d:"M181.67 114.05h15.47v42.85h-15.47v-42.85z",id:"stats-b"}),i.createElement("path",{d:"M204.05 104.52h15.47v52.38h-15.47v-52.38z",id:"stats-c"})),i.createElement("use",{xlinkHref:"#stats-a",fill:a.blueLight}),i.createElement("use",{xlinkHref:"#stats-b",fill:a.blueLight}),i.createElement("use",{xlinkHref:"#stats-c",fill:a.blueLight}))},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),a=n(2).default,{Spring:o,Trail:r,config:l}=n(14),{colors:c}=n(1),p=n(150),d=n(49),h=n(7),u=a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;e.exports=class extends s.Component{constructor(...e){super(...e),i(this,"state",{animationDone:!1}),i(this,"onAnimationDone",()=>{this.setState({animationDone:!0}),this.props.onAnimationDone()})}componentDidMount(){const e=Math.round(performance.now());h.trackTiming("app","app-ready",e)}render(){const{authLoading:e,isAuthenticated:t}=this.props,{animationDone:n}=this.state,i=!e&&!t,a=[{component:s.createElement(o,{from:{angle:"-70deg",opacity:0},to:{angle:"0deg",opacity:1},config:l.slow},e=>s.createElement(d,{opacity:e.opacity,angle:e.angle})),key:"logo"},{component:s.createElement(o,{from:{opacity:0},to:{opacity:i?1:0},config:l.slow},e=>s.createElement("div",{style:{opacity:e.opacity}},s.createElement(p,null))),key:"authform"}];return s.createElement(u,null,s.createElement(r,{items:a,keys:e=>e.key,from:{transform:"translate3d(0, 40px, 0)"},to:{transform:"translate3d(0, 0, 0)"},config:l.slow,onRest:this.onAnimationDone},e=>t=>s.createElement("div",{style:t},e.component)))}}},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),a=(n(5),n(2).default),o=n(29),r=n(82),l=n(10),c=n(22),p=n(1),d=a.div`
    margin-bottom: 25px;
    color: ${p.colors._white};
`,h=a.form`
    width: 100%;
    max-width: 480px;
    margin-bottom: 50px;
    text-align: center;
`,u=a.div`
    cursor: pointer;
    color: ${p.colors._white};

    :hover {
        text-decoration: underline;
    }
`,m=a.div`
    cursor: pointer;
    color: ${p.colors._white};
    margin-top: 40px;
    opacity: 0.6;
    font-size: 13px;

    :hover {
        text-decoration: underline;
        opacity: 1;
    }
`,g=a(o)`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 25px;

    opacity: ${e=>e.pending?.5:1};
`,f=a.div`
    margin: 5px 0 25px;
    color: ${p.colors.redLight};
`,E={"auth/user-not-found":"We could not find your account, please check your information or create a new account.","auth/wrong-password":"Invalid password."};e.exports=class extends s.Component{constructor(...e){super(...e),i(this,"state",{authForm:"signin",confirmPassword:"",email:"",error:null,password:"",pending:!1,renderPasswordForgotten:!1,resetEmailSent:!1}),i(this,"_mounted",!0),i(this,"emailInputRef",s.createRef()),i(this,"signIn",e=>{e.preventDefault(),this.setState({pending:!0}),l.signInWithEmailPassword(this.state.email,this.state.password).then(()=>{this._mounted&&this.setState({email:"",password:"",pending:!1})}).catch(e=>{this.setState({error:E[e.code]?E[e.code]:e.message,pending:!1})})}),i(this,"signUp",e=>{e.preventDefault(),this.setState({pending:!0});const{confirmPassword:t,email:n,password:i}=this.state;i===t?l.signUpWithEmailPassword(n,i).then(e=>{c(`New user sign up - ${e.user.email}`),this._mounted&&this.setState({email:"",password:"",pending:!1})}).catch(e=>{this.setState({error:e,pending:!1})}):this.setState({error:"Your confirmation and your password must match"})}),i(this,"switchForm",()=>{this.setState({authForm:"signin"===this.state.authForm?"signup":"signin",error:null}),this.focusInput()}),i(this,"onChangeEmail",e=>{this.setState({email:e.target.value,error:null})}),i(this,"onChangePassword",e=>{this.setState({password:e.target.value,error:null})}),i(this,"onChangeConfirmPassword",e=>{this.setState({confirmPassword:e.target.value,error:null})}),i(this,"sendResetPassword",e=>{e.preventDefault(),this.state.email.length&&l.sendResetPasswordEmail(this.state.email).then(()=>{this.setState({resetEmailSent:!0})})}),i(this,"switchPasswordForgotten",()=>{this.setState({renderPasswordForgotten:!this.state.renderPasswordForgotten,resetEmailSent:!1})})}focusInput(){this.emailInputRef.current.focus()}renderPasswordForgotten(){return s.createElement(h,{onSubmit:this.sendResetPassword},this.state.resetEmailSent?s.createElement(d,null,"An email has been sent to reset your password."):null,this.renderEmailInput(),s.createElement(g,null,"Send email to reset your password"),s.createElement(u,{onClick:this.switchPasswordForgotten},"Return to login"))}renderEmailInput(){return s.createElement(d,null,s.createElement(r,{type:"email",placeholder:"Email",onChange:this.onChangeEmail,value:this.state.email,ref:this.emailInputRef}))}componentDidMount(){this.focusInput()}componentWillUnmount(){this._mounted=!1}render(){const{authForm:e,error:t,pending:n,renderPasswordForgotten:i}=this.state;return i?this.renderPasswordForgotten():s.createElement(h,{onSubmit:"signin"===e?this.signIn:this.signUp},this.renderEmailInput(),s.createElement(d,null,s.createElement(r,{type:"password",placeholder:"Password",onChange:this.onChangePassword,value:this.state.password})),"signup"===e?s.createElement(d,null,s.createElement(r,{type:"password",placeholder:"Confirm Password",onChange:this.onChangeConfirmPassword,value:this.state.confirmPassword})):null,s.createElement(g,{pending:n},"Sign ","signin"===e?"in":"up"),t?s.createElement(f,null,t):null,s.createElement(u,{onClick:this.switchForm},"signin"===e?"Create an account":"I already have an account"),s.createElement(m,{onClick:this.switchPasswordForgotten},"Forgot your password?"))}}},function(e,t,n){var i,s,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),l=n(2).default,c=n(5),{connect:p}=n(6),{removeTag:d}=n(12),{searchTag:h}=n(31),u=n(1),m=l.div`
    position: absolute;
    padding: 5px 0;
    top: ${e=>e.top-10}px;
    left: ${e=>e.left-10}px;
    background: rgba(255, 255, 255, 0.7);
    color: ${u.colors._black};
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
`,g=l.div`
    padding: 5px 7px;
    cursor: pointer;

    :hover {
        background: ${u.colors.blueLight};
        color: ${u.colors._white};
    }
`;let f=p()((a=s=class extends r.Component{constructor(...e){super(...e),o(this,"rootRef",r.createRef()),o(this,"onDocumentClick",e=>{this.rootRef.current.contains(e.target)||this.props.close()}),o(this,"removeTag",()=>{this.props.dispatch(d(this.props.props.fileHashPath,this.props.props.tag)),this.props.close()}),o(this,"searchTag",()=>{this.props.dispatch(h(this.props.props.tag)),this.props.close()})}componentDidMount(){document.addEventListener("click",this.onDocumentClick,{passive:!0})}componentWillUnmount(){document.removeEventListener("click",this.onDocumentClick)}render(){const{positionX:e,positionY:t}=this.props;return r.createElement(m,{top:t,left:e,ref:this.rootRef},r.createElement(g,{onClick:this.removeTag},"Remove Tag"),r.createElement(g,{onClick:this.searchTag},"Search all files with this tag"))}},o(s,"propTypes",{close:c.func,dispatch:c.func,positionX:c.number,positionY:c.number,props:c.object}),i=a))||i;e.exports=f},function(e,t,n){const i=n(1);e.exports.setMXML=(e,t)=>({type:i.actionTypes.SET_MXML,filePath:e,mxml:t})},,function(e,t,n){const i=n(1),s={authLoading:!0,data:{},user:null};e.exports=(e=s,t)=>{switch(t.type){case i.actionTypes.AUTH_SET_USER:return{...e,authLoading:!1,user:a(t.user)};case i.actionTypes.AUTH_SIGN_OUT:return s;case i.actionTypes.AUTH_SET_FULL_USER_DATA:return{...e,...t.data};case i.actionTypes.AUTH_NOT_LOGGED:return{...e,authLoading:!1};default:return e}};const a=e=>({email:e.email,emailVerified:e.emailVerified,uid:e.uid})},function(e,t,n){const i=n(1),s={name:null,props:null};e.exports=(e=s,t)=>{switch(t.type){case i.actionTypes.OPEN_MODAL:return{name:t.name,props:t.props};case i.actionTypes.CLOSE_MODAL:return s;default:return e}}},function(e,t,n){const i=n(1),{displayUpdateAvailableModal:s}=n(25),{openModal:a}=n(18),o={notification:{active:!1}};let r=0;const l=()=>r++;e.exports=(e=o,t)=>{switch(t.type){case i.actionTypes.ADD_NOTIFICATION:return{notification:{...t.notification,active:!0,id:l()}};case i.actionTypes.REMOVE_NOTIFICATION:return{notification:{...e.notification,active:!1}};case i.actionTypes.ADD_FILES:if(!t.newImports)return e;const n=Object.values(t.files).filter(e=>e.source!==i.sources.RECORD&&e.source!==i.sources.TRANSFER).length;return n?{notification:{title:`Imported ${n} file${n>1?"s":""}`,status:"success",active:!0,id:l()}}:e;case i.actionTypes.REMOVE_FILE:return{notification:{title:"File removed",status:"success",active:!0,id:l()}};case i.actionTypes.REPLACE_FILE:return{notification:{title:"File successfully replaced",status:"success",active:!0,id:l()}};case i.actionTypes.NOTIFY_MISSING_FILE:return{notification:{title:`We could not locate the file ${t.file.name}. Click here to fix this`,status:"error",active:!0,id:l(),onClick:()=>a(i.modals.fileMissing,{fileHashPath:t.file.hashPath}),timeout:5e3}};case i.actionTypes.UPDATE_AVAILABLE:return{notification:{title:"New version available!",status:"success",active:!0,id:l(),onClick:()=>e=>{e(s(t.url,t.changelog))},timeout:5e3}};case i.actionTypes.SEARCH_BASIC:return t.term.toLowerCase()===i.DEBUG_KEY_SEQUENCE?{notification:{title:"Experimental mode activated",status:"success",active:!0,id:l()}}:e;default:return e}}},function(e,t,n){const i=n(1),s={fileHashPath:void 0,playing:!1};e.exports=(e=s,t)=>{switch(t.type){case i.actionTypes.PLAY_FILE:return{...e,fileHashPath:t.hashPath,playing:!0};case i.actionTypes.TOGGLE_PLAY:return{...e,playing:!e.playing};case i.actionTypes.PAUSE_PLAYER:return{...e,playing:!1};case i.actionTypes.REMOVE_FILE:return t.hashPath===e.fileHashPath?s:e;case i.actionTypes.SET_FILE_ARCHIVE:return t.archived&&t.hashPath===e.fileHashPath?s:e;default:return e}}},function(e,t,n){const i=n(1),s={files:{}};e.exports=(e=s,t)=>{switch(t.type){case i.actionTypes.TRANSFER_SET_FILE_LIST:return{...e,files:t.files};case i.actionTypes.TRANSFER_SAVE_SUCCESS:return{...e,files:{...e.files,[t.fileName]:{...e.files[t.fileName],transfered:!0,success:!0,filePath:t.filePath,receiving:!1}}};case i.actionTypes.TRANSFER_START_TRANFER:return{...e,files:{...e.files,[t.fileName]:{...e.files[t.fileName],receiving:!0}}};case i.actionTypes.TRANSFER_RESET:return s;default:return e}}},function(e,t,n){const i=n(1),{saveApp:s}=n(9),{selectFilesForStorage:a}=n(8),o=n(24),{selectUser:r}=n(21),l=n(10);e.exports=e=>t=>n=>{if(t(n),n.__saveToDB__){const t=e.getState();switch(n.__db){case i.db.files:const e=!{[i.actionTypes.REMOVE_FILE]:!0,[i.actionTypes.REPLACE_FILE]:!0}[n.type],c=a(t),p=r(t);l.saveFullFilesData(p.uid,c,e);break;case i.db.app:s({displayAdvanced:o(t).displayAdvanced});break;default:throw new Error("Error trying to save data, unknow db",n.__db)}}}},function(e,t,n){const i=n(7),s=n(1);let a=null;let o=null;e.exports=()=>e=>t=>{switch(e(t),t.type){case s.actionTypes.ADD_TAG:i.trackEvent("file","add-tag",t.tag);break;case s.actionTypes.CHECK_UPDATE:i.trackEvent("app",`check-update-${t.manual?"manual":"auto"}`,window.__songRiffer.version);break;case s.actionTypes.CHECK_UPDATE_FAILED:i.trackEvent("app","check-update-failed",window.__songRiffer.version);break;case s.actionTypes.CHECK_UPDATE_NO_UPDATE:i.trackEvent("app","check-update-no-update-manual",window.__songRiffer.version);break;case s.actionTypes.UPDATE_AVAILABLE:i.trackEvent("app","check-update-success-auto",window.__songRiffer.version);break;case s.actionTypes.CHECK_UPDATE_SUCCESS:i.trackEvent("app","check-update-success-manual",window.__songRiffer.version);break;case s.actionTypes.CLEAR_SEARCH:i.trackEvent("search","clear-search");break;case s.actionTypes.REMOVE_FILE:i.trackEvent("file","remove-file");break;case s.actionTypes.REMOVE_TAG:i.trackEvent("file","remove-tag",t.tag);break;case s.actionTypes.SEARCH_BASIC:t.term.length&&(e=>{clearTimeout(a),a=setTimeout(()=>{i.trackEvent("search","search-basic",e)},1e3)})(t.term.toLowerCase());break;case s.actionTypes.SEARCH_BPM:i.trackEvent("search","search-bpm",t.bpm);break;case s.actionTypes.SEARCH_TAG:i.trackEvent("search","search-tag",t.tag.toLowerCase());break;case s.actionTypes.SET_BPM:i.trackEvent("file","set-bpm");break;case s.actionTypes.SET_COMMENT:i.trackEvent("file","set-comment");break;case s.actionTypes.SET_FILE_ARCHIVE:i.trackEvent("file",t.archived?"archive":"unarchive");break;case s.actionTypes.SET_RATING:i.trackEvent("file","set-rating");break;case s.actionTypes.SET_SEARCH:t.term&&(e=>{clearTimeout(o),o=setTimeout(()=>{i.trackEvent("search","search-term",e)},1e3)})(t.term.toLowerCase());break;case s.actionTypes.SET_SORT_RULE:i.trackEvent("file","sort",t.sortRule);break;case s.actionTypes.SET_TIME_SIGNATURE:i.trackEvent("file","set-time-signature");break;case s.actionTypes.TOGGLE_ADVANCED_SEARCH:i.trackEvent("search","toggle-advanced")}}},,function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(2),a=n(15),o=n(10),r=n.n(o),l=n(1);const{Trail:c,config:p}=n(14),d=n(62),h=s.default.div`
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`,u=s.default.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
`,m=s.default.div`
    position: relative;
    padding: 50px;
    background: ${l.colors._blackDark};
    border-radius: 3px;
    text-align: center;
    z-index: 2;
    font-size: 25px;
`;class g extends i.Component{constructor(...e){var t,n,i;super(...e),i={fakeFiles:[]},(n="state")in(t=this)?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}async getFakeFiles(){const e=(await r.a.getRemoteConfigValue("FILES_EMPTY_DATA",[])).map(e=>new a.a(e));this.setState({fakeFiles:e})}componentDidMount(){this.getFakeFiles()}render(){return i.createElement(h,null,i.createElement(u,null,i.createElement(c,{items:this.state.fakeFiles,keys:e=>e.path,from:{transform:"translate3d(0, 40px, 0)",opacity:0},to:{transform:"translate3d(0, 0, 0)",opacity:1}},(e,t)=>n=>{const s=Math.max(Math.min(1-t/this.state.fakeFiles.length,n.opacity),0);return i.createElement("div",{key:`fake-${e.path}`,style:{...n,opacity:s}},i.createElement(d,{file:e}))})),i.createElement(m,null,"Drag and drop files to start building your library"))}}var f,E,v,y=n(39),T=n(8);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const _=n(0),{connect:S}=n(6),x=n(5),C=n(2).default,w=n(103),A=n(62),R=n(63),k=n(32),{selectUser:F}=n(21),{addFiles:L,disableNewImports:D,migrateLegacyData:P,setSortRule:I}=n(12),{searchTag:M}=n(31),{setAllowFileDragging:O}=n(25),U=n(61),N=n(7),$=n(10),{checkFiles:H}=n(9),{colors:B,sortRules:j}=n(1),G=C.div`
    margin-top: 50px;
    color: #555;
`,V=C.div`
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${B.blueLight};
    z-index: 2;
`,z=C(R)`
    color: ${B.blueLight};
`,W=C.div`
    padding: 20px 0;
    text-align: center;
`,K=C.div`
    display: flex;
    align-items: center;
    cursor: ${e=>e.onClick?"pointer":"default"};
`,Y=C(K)`
    justify-content: center;
`;let X=S((e,t)=>({_dataToMigrate:e.files._dataToMigrate,_winBackup:e.files._winBackup,files:Object(T.selectFiles)(e),filesCount:Object(T.selectFilesCount)(e),location:t.location,pending:e.files.pending,selectedFile:Object(T.selectSelectedFile)(e),sortRule:Object(T.selectSortRule)(e),user:F(e)}))((v=E=class extends _.PureComponent{constructor(...e){super(...e),b(this,"listRef",_.createRef()),b(this,"onTagClick",e=>{this.props.dispatch(M(e))}),b(this,"sortByName",()=>{this._sort(j.NAME_ASC,j.NAME_DESC)}),b(this,"sortByDuration",()=>{this._sort(j.DURATION_ASC,j.DURATION_DESC)}),b(this,"sortByBPM",()=>{this._sort(j.BPM_ASC,j.BPM_DESC)}),b(this,"sortByRating",()=>{this._sort(j.RATING_DESC,j.RATING_ASC)})}_sort(e,t){return this.props.sortRule!==e&&this.props.sortRule!==t?this.props.dispatch(I(e)):this.props.sortRule===e?this.props.dispatch(I(t)):void this.props.dispatch(I(null))}scrollToFile(e){if(this.listRef.current)try{const t=document.querySelector(e);t&&(this.listRef.current.scrollTop=t.offsetTop-75)}catch(e){}}listenFilesUpdate(){this.removeFileListener=$.listenForFilesUpdate(this.props.user.uid,e=>{this.props.dispatch(L(e)),H(e)})}renderStickyHeader(){const{files:e,filesCount:t,sortRule:n}=this.props;return _.createElement(V,null,t?_.createElement("div",null,"Showing ",e.length," of ",t," riffs"):_.createElement("div",null," "),_.createElement(z,null,_.createElement(K,{onClick:this.sortByName},"Name",n===j.NAME_ASC?_.createElement(w,{rotate:!0}):null,n===j.NAME_DESC?_.createElement(w,null):null),_.createElement(Y,{onClick:this.sortByDuration},"Duration",n===j.DURATION_ASC?_.createElement(w,{rotate:!0}):null,n===j.DURATION_DESC?_.createElement(w,null):null),_.createElement(K,null,"Tags"),_.createElement(Y,{onClick:this.sortByBPM},"BPM",n===j.BPM_ASC?_.createElement(w,{rotate:!0}):null,n===j.BPM_DESC?_.createElement(w,null):null),_.createElement(Y,null,"Time Signature"),_.createElement(K,{onClick:this.sortByRating},"Rating",n===j.RATING_ASC?_.createElement(w,{rotate:!0}):null,n===j.RATING_DESC?_.createElement(w,null):null),_.createElement(K,null)))}componentDidMount(){N.trackScreen("home"),null!==this.props._dataToMigrate&&this.props.dispatch(P(this.props._dataToMigrate,this.props._winBackup)),this.listenFilesUpdate(),this.props.dispatch(O(!0)),this.props.location.hash&&this.scrollToFile(this.props.location.hash)}componentDidUpdate(e){e.files!==this.props.files&&U.end("search"),e.location.hash!==this.props.location.hash&&this.scrollToFile(this.props.location.hash)}componentWillUnmount(){this.props.dispatch(O(!1)),this.props.dispatch(D()),this.removeFileListener()}render(){const{files:e,filesCount:t,pending:n,selectedFile:i}=this.props,s=`\n            padding-bottom: ${i?"70px":0};\n        `;return _.createElement(k,{stickyHeader:this.renderStickyHeader(),wrapperStyle:s,scrollElementRef:this.listRef},n?_.createElement(y.a,null):_.createElement(_.Fragment,null,t?_.createElement(_.Fragment,null,e.length?e.map(e=>_.createElement(A,{file:e,key:e.hashPath,onTagClick:this.onTagClick,selected:i&&i.hashPath===e.hashPath})):_.createElement(W,null,"No files are matching your search"),_.createElement(G,null,"+ Drag and drop a file to add it to your library")):_.createElement(g,null)))}},b(E,"propTypes",{_dataToMigrate:x.object,dispatch:x.func,files:x.array,filesCount:x.number,selectedFile:x.any,sortRule:x.string}),f=v))||f;var q;function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Z=n(0),{connect:Q}=n(6),ee=n(2).default,te=n(58),ne=n(47),{removeFile:ie,replaceFile:se}=n(12),{addNotification:ae}=n(44),{importFiles:oe}=n(48),re=n(7),{checkFiles:le}=n(9),ce=n(1),pe=ee.div`
    margin-top: 20px;
    padding: 50px;
    text-align: center;
    border: 5px dashed ${e=>e.dragging?ce.colors.blueLight:ce.colors._blue};
    transition: border-color ease 0.2s;
`,de=ee.div`
    margin-bottom: 20px;
    font-weight: 600;
`;let he=Q((e,t)=>({file:Object(T.selectFileByHashPath)(e,{fileHashPath:t.fileHashPath}),files:Object(T._selectFiles)(e)}))(q=class extends Z.Component{constructor(...e){super(...e),J(this,"dropRef",Z.createRef()),J(this,"state",{dragging:!1,replace:!1}),J(this,"checkFileAccess",()=>{le(this.props.files)}),J(this,"onClickReplace",()=>{this.setState({replace:!0})}),J(this,"removeFile",()=>{this.props.close(),this.props.dispatch(ie(this.props.file.hashPath))}),J(this,"replaceFile",e=>{oe(this.props.dispatch,e.slice(0,1),e=>{const t=e[Object.keys(e)[0]];t&&(this.props.close(),this.props.dispatch(se(this.props.file.hashPath,t)))})})}componentDidMount(){re.trackScreen("modalFileMissing")}componentDidUpdate(e,t){!t.replace&&this.state.replace&&(this.removeDrag=te(this.dropRef.current,{onDrop:this.replaceFile,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})),e.file.missing&&!this.props.file.missing&&(this.props.dispatch(ae("File successfully located")),this.props.close())}componentWillUmount(){this.removeDrag&&this.removeDrag()}render(){const{file:e}=this.props,{dragging:t,replace:n}=this.state;return Z.createElement("div",null,Z.createElement(de,null,"We could not locate the file ",e.name),n?Z.createElement(pe,{ref:this.dropRef,dragging:t},"Drag and drop the file here to replace it"):Z.createElement("div",null,Z.createElement(ne,{onClick:this.checkFileAccess},"Check again"),Z.createElement(ne,{onClick:this.onClickReplace},"Replace it"),Z.createElement(ne,{onClick:this.removeFile,last:!0},"Remove it from my riff library")))}})||q;var ue;function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const fe=n(0),Ee=n(2).default,{connect:ve}=n(6),ye=n(128),Te=n(129),be=n(130),_e=n(131),Se=n(132),xe=n(134),Ce=n(135),we=n(136),{closeModal:Ae}=n(18),Re=n(1),ke=Ee.div`
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
`,Fe=Ee.div`
    position: relative;
    padding: 35px 20px 20px;
    background: ${Re.colors._greyDark};
    border-radius: 3px;

    ${e=>e.additionalStyle}
`,Le=Ee.div`
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
`;let De=ve(e=>({modal:e.modal}))(ue=class extends fe.Component{constructor(...e){super(...e),ge(this,"dimmerRef",fe.createRef()),ge(this,"onDimmerClick",e=>{e.target===this.dimmerRef.current&&this.props.dispatch(Ae())}),ge(this,"close",()=>{this.props.dispatch(Ae())})}getModal(){const{name:e}=this.props.modal,t={[Re.modals.comment]:ye,[Re.modals.fileMissing]:he,[Re.modals.fileOptions]:Te,[Re.modals.invalidFile]:be,[Re.modals.removeFile]:_e,[Re.modals.tabs]:Se,[Re.modals.tags]:xe,[Re.modals.text]:Ce,[Re.modals.updateAvailable]:we};if(!t[e])return null;const n=t[e];return fe.createElement(n,me({},this.props.modal.props,{close:this.close}))}getRootStyle(){const{name:e}=this.props.modal;switch(e){case Re.modals.updateAvailable:return we.rootStyle;default:return""}}render(){const{modal:e}=this.props;if(!e.name)return null;const t=e.name===Re.modals.updateAvailable&&e.props.mandatory;return fe.createElement(ke,{onClick:this.onDimmerClick,ref:this.dimmerRef,darker:t},fe.createElement(Fe,{additionalStyle:this.getRootStyle()},this.getModal(),t?null:fe.createElement(Le,{onClick:this.close},"X")))}})||ue;var Pe=n(26),Ie=n(45),Me=n.n(Ie),Oe=n(77);const Ue=s.default.div`
    display: flex;
    align-items: center;
    height: 35px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: rgba(255, 255, 255, 0.2);
    margin-bottom: 7px;
`,Ne=s.default.div`
    width: 35px;
    height: 35px
    padding: 7px;
    font-size: 15px;
    background: ${l.colors._white};
    color: ${l.colors._blackDark};
    border-radius: 100%;
    text-align: center;
    line-height: 35px;
`,$e=s.default.div`
    flex: 1;
    margin-left: 10px;
    padding: 7px;
`;class He extends i.Component{render(){const{song:e}=this.props;return i.createElement(Ue,null,i.createElement(Ne,null,e.position),i.createElement($e,null,e.name))}}function Be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const je=n(32),Ge=n(10),Ve=s.default.div`
    display: flex;
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${l.colors.blueLight};
    z-index: 2;
`,ze=s.default.div`
    flex: 1;
    text-align: center;
    font-size: 25px;
`,We=s.default.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
`,Ke=s.default.div`
    width: 50%;
    height: 100%;
`;class Ye extends i.Component{constructor(...e){super(...e),Be(this,"removeListener",void 0),Be(this,"state",{newSongName:"",project:null}),Be(this,"onChangeNewSongName",e=>{this.setState({newSongName:e.target.value})}),Be(this,"addNewSong",e=>{if(e.preventDefault(),!this.state.newSongName.length)return;const t=Me()(this.state.project,"songs",[]).length;Ge.addSongToProject(this.state.project.id,{position:t,name:this.state.newSongName}),this.setState({newSongName:""})})}listenProjectUpdate(){console.log(this.props),this.removeListener=Ge.listenForProjectUpdate(this.props.match.params.projectId,e=>{this.setState({project:e})})}componentDidMount(){this.listenProjectUpdate()}componentWillUnmount(){"function"==typeof this.removeListener&&this.removeListener()}renderHeader(){const{project:e}=this.state;return i.createElement(Ve,null,i.createElement("div",null,i.createElement(Pe.Link,{to:l.routes.projects},"List of projects")),i.createElement(ze,null,e.name))}render(){const{project:e}=this.state;return e?(console.log(e),i.createElement(je,{stickyHeader:this.renderHeader()},i.createElement(We,null,i.createElement(Ke,null,i.createElement("div",null,"image here"),i.createElement("div",null,"Last updated: ",Object(Oe.a)(e.updatedAt,{addSuffix:!0}))),i.createElement(Ke,null,i.createElement(ze,null,"Songs"),e.songs&&e.songs.length?i.createElement("div",null,e.songs.map(e=>i.createElement(He,{song:e,key:`song-${e.position}`}))):i.createElement("div",null,"Add the first song to your project:"),i.createElement("form",{onSubmit:this.addNewSong},i.createElement("input",{type:"text",value:this.state.newSongName,onChange:this.onChangeNewSongName})))))):i.createElement(je,null,i.createElement(y.a,null))}}var Xe,qe,Je,Ze=n(13);function Qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const et=n(23),tt=n(0),nt=n(2).default,{connect:it}=n(6),st=n(5),at=n(138),{Link:ot}=n(26),rt=n(29),lt=n(80),ct=n(30),pt=n(32),dt=n(66),ht=n(67),{addFiles:ut}=(n(28),n(12)),{reset:mt}=n(68),{pausePlayer:gt}=n(36),ft=n(7),{getFilesDurationAndBPM:Et}=n(48),{checkFileExists:vt,saveMedia:yt}=n(9),Tt=n(1),bt=nt.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: ${e=>e.recording?0:"-100%"};
    left: 0;
    transition: top 0.3s ease;
`,_t=nt.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`,St=nt.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 200px;
    height: 200px;
    background: ${e=>e.recording?Tt.colors.redLight:Tt.colors.red};
    border-radius: 100%;
    transition: background ease 0.2s;
    cursor: pointer;
    text-align: center;
`,xt=nt.div`
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
`,Ct=nt.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`,wt=nt.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`,At=nt(ct)`
    width: 70%;
    margin-bottom: 15px;
    text-align: center;
    border: 0;
    border-bottom: 1px solid ${e=>e.error?Tt.colors.red:"rgba(255, 255, 255, 0.3)"};
    border-radius: 0;
`,Rt=nt.div`
    margin-bottom: 15px;
    color: ${Tt.colors.red};
    text-align: center;
`,kt=nt(rt)`
    padding: 5px 15px;
    ${e=>e.background?`background: ${e.background};`:""}
    ${e=>e.disabled?"\n        cursor: not-allowed;\n        opacity: 0.5;\n    ":""}
`,Ft=nt.div`
    text-align: center;
`,Lt=nt.div`
    margin-bottom: 15px;
`,Dt=nt.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;function Pt(e){for(var t,n=e.inputBuffer.getChannelData(0),i=n.length,s=0,a=0;a<i;a++)t=n[a],Math.abs(t)>=this.clipLevel&&(this.clipping=!0,this.lastClip=window.performance.now()),s+=t*t;var o=Math.sqrt(s/i);this.volume=Math.max(o,this.volume*this.averaging)}let It=it(e=>({recorder:e.recorder}))((Je=qe=class extends tt.Component{constructor(...e){super(...e),Qe(this,"state",{audio:null,name:"",playing:!1,recording:!1}),Qe(this,"recorder",null),Qe(this,"inputRef",tt.createRef()),Qe(this,"player",tt.createRef()),Qe(this,"recordButton",tt.createRef()),Qe(this,"toggleRecording",()=>{this.state.recording?this.stopRecording():this.startRecording()}),Qe(this,"startRecording",()=>{this.props.dispatch(gt(!0)),ft.trackEvent("recorder","start-recording"),this.setState({recording:!0}),this.getAudio()}),Qe(this,"pad",e=>1===`${e}`.length?`0${e}`:`${e}`),Qe(this,"stopRecording",()=>{ft.trackEvent("recorder","stop-recording");const{day:e,hours:t,minutes:n,month:i,seconds:s,year:a}=this.getDate();this.setState({name:`SongRiffer-idea-${a}-${i}-${e}-${t}${n}${s}`}),null!==this.recorder&&this.recorder.stop()}),Qe(this,"onDataAvailable",e=>{this.chunks.push(e.data)}),Qe(this,"onRecorderStop",()=>{const e=new Blob(this.chunks,{type:"audio/webm;codecs=opus"});this.setState({audio:URL.createObjectURL(e),recording:!1}),this.inputRef.current.focus(),cancelAnimationFrame(this.raf),this.recordButton.current.style.boxShadow=""}),Qe(this,"drawVolume",()=>{const e=Math.max(0,1e3*this.volumeMeter.volume);this.recordButton.current.style.boxShadow=`\n            10px 10px ${e+40}px 3px ${Tt.colors.bluePastel},\n            -10px -10px ${e+40}px 3px ${Tt.colors._purpleLight}\n        `,this.raf=requestAnimationFrame(this.drawVolume)}),Qe(this,"onNameChange",e=>{this.setState({name:e.target.value}),vt(`${e.target.value}.wav`)}),Qe(this,"onNameKeyDown",e=>{"Enter"===e.key&&this.save()}),Qe(this,"save",()=>{const e=new AudioContext,t=new Blob(this.chunks,{type:"audio/webm"}),n=new FileReader;this.state.name;n.onload=()=>{e.decodeAudioData(n.result,e=>{const t=at(e);yt(Tt.saveTypes.RECORDER,`${this.state.name}.wav`,new Uint8Array(t))})},n.readAsArrayBuffer(t)}),Qe(this,"importFile",()=>{ft.trackEvent("recorder","save",this.state.name),ft.trackEvent("file","file-import","recorder",1);const e=`${this.state.name}.wav`,t=this.props.recorder.filePath,n={name:e,path:t,source:Tt.sources.RECORD,type:"audio/wav"},i=new a.a(n);this.props.dispatch(ut({[Object(Ze.getFilePathHash)(t)]:i.toJSON()},!0)),Et(this.props.dispatch,[i])}),Qe(this,"reset",()=>{this.chunks=[],this.setState({audio:null,playing:!1}),this.pausePlayer(),ft.trackEvent("recorder","discard")}),Qe(this,"togglePlay",()=>{this.setState({playing:!this.state.playing},()=>{this.state.playing?this.playPlayer():this.pausePlayer()})})}getDate(){const e=new Date;return{day:this.pad(e.getDate()),hours:e.getHours(),minutes:e.getMinutes(),month:this.pad(e.getMonth()+1),seconds:e.getSeconds(),year:e.getFullYear()}}getAudio(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(e=>{this.watchVolume(e),this.recordAudio(e)})}watchVolume(e){if(null===e)return;this.stream=e;const t=new AudioContext,n=t.createMediaStreamSource(this.stream);var i,s,a,o,r;this.volumeMeter=((r=(i=t).createScriptProcessor(512)).onaudioprocess=Pt,r.clipping=!1,r.lastClip=0,r.volume=0,r.clipLevel=s||.98,r.averaging=a||.95,r.clipLag=o||750,r.connect(i.destination),r.checkClipping=function(){return!!this.clipping&&(this.lastClip+this.clipLag<window.performance.now()&&(this.clipping=!1),this.clipping)},r.shutdown=function(){this.disconnect(),this.onaudioprocess=null},r),n.connect(this.volumeMeter),this.drawVolume()}recordAudio(e){this.recorder=new MediaRecorder(e),this.chunks=[],this.recorder.ondataavailable=this.onDataAvailable,this.recorder.onstop=this.onRecorderStop,this.recorder.start()}playPlayer(){this.player.current.play()}pausePlayer(){this.player.current.pause()}componentDidMount(){ft.trackScreen("record")}componentDidUpdate(e){!e.recorder.saveSuccess&&this.props.recorder.saveSuccess&&this.importFile()}componentWillUnmount(){cancelAnimationFrame(this.raf),this.props.dispatch(mt())}render(){const{recorder:e}=this.props,{audio:t,name:n,playing:i,recording:s}=this.state,a=!!e.fileAlreadyExists&&et.basename(e.fileAlreadyExists,et.extname(e.fileAlreadyExists))===n;return tt.createElement(pt,{wrapperStyle:"\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    padding: 50px;\n    overflow: hidden;\n"},tt.createElement(bt,{recording:s||!t},tt.createElement(_t,null,tt.createElement(St,{onClick:this.toggleRecording,recording:s,ref:this.recordButton},s?"STOP":"START"))),tt.createElement(xt,{recording:s||!t},e.saveSuccess?tt.createElement(Ft,null,tt.createElement(lt,{width:"50"}),tt.createElement(Lt,null,n," was successfully added to your library!"),tt.createElement(Dt,null,tt.createElement(ot,{to:Tt.routes.home},tt.createElement(kt,null,"Go back to your file list")))):tt.createElement(tt.Fragment,null,tt.createElement("div",null,tt.createElement("audio",{src:t,ref:this.player}),tt.createElement("div",{onClick:this.togglePlay},i?tt.createElement(dt,null):tt.createElement(ht,null))),tt.createElement(Ct,null,tt.createElement(At,{onChange:this.onNameChange,onKeyDown:this.onNameKeyDown,ref:this.inputRef,type:"text",value:n,error:a}),tt.createElement(Rt,null,a?"This file already exists, please choose another name":tt.createElement("span",null," ")),tt.createElement(wt,null,tt.createElement(kt,{onClick:this.reset,background:Tt.colors._grey},"Discard"),tt.createElement(kt,{onClick:this.save,disabled:a},"Save"))))))}},Qe(qe,"propTypes",{dispatch:st.func,recorder:st.object}),Xe=Je))||Xe;var Mt,Ot,Ut;function Nt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const $t=n(0),{connect:Ht}=n(6),Bt=n(5),jt=n(58),Gt=n(2).default,{MemoryRouter:Vt,Route:zt,Switch:Wt}=n(26),Kt=n(95),Yt=n(101),Xt=n(102),qt=n(126),Jt=n(127),Zt=n(137),Qt=n(139),en=n(140),tn=n(142),nn=n(144),sn=n(149),an=n(151),{addFiles:on,setMissingFiles:rn}=n(12),{toggleAdvanced:ln}=n(31),{closeModalEsc:cn}=n(18),{notLogged:pn,setFullUserData:dn,signIn:hn}=n(69),{checkUpdate:un,closeContextMenu:mn,resize:gn}=n(25),{togglePlay:fn}=n(36),{recorderFileAlreadyExists:En,recorderSaveSuccess:vn}=n(68),{transferSaveSuccess:yn}=n(83),{setMXML:Tn}=n(152),{getFilesDurationAndBPM:bn,importFiles:_n}=n(48),Sn=n(10),xn=n(7),Cn=n(22),wn=n(24),{isAuthenticated:An,isUserFullyLoaded:Rn,selectUser:kn}=n(21),{checkFilesDBExists:Fn,getAppConfig:Ln,onMissingFiles:Dn,setCallback:Pn}=n(9),In=n(1),Mn=(Gt.div`
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${In.colors._white};
`,Gt.div`
    display: flex;
    padding: 20px 0 20px 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`),On=Gt.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
`,Un=Gt.div`
    flex: 1;
    opacity: ${e=>e.dragging?.3:1};
    transition: opacity ease 0.4s;
`,Nn=Gt.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: ${In.colors.blueLight};
    border: 20px dashed ${In.colors.blueLight};
    font-size: 200px;
    justify-content: center;
    align-items: center;
    z-index: 100;
    opacity: ${e=>e.dragging?1:0};
    transition: opacity ease 0.7s;
`,$n=Gt.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    // left padding is added in sidebar and header
    // so the sidebar active link stuff is on the side
    padding: 15px 15px 15px 0;
    color: ${In.colors._white};
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
`,Hn=Gt.div`
    position: relative;
    display: flex;
    align-items: center;
`,Bn=$t.lazy(()=>n.e(2).then(n.bind(null,235))),jn=()=>$t.createElement($t.Suspense,{fallback:null},$t.createElement(Bn,null)),Gn=$t.lazy(()=>n.e(1).then(n.t.bind(null,236,7))),Vn=()=>$t.createElement($t.Suspense,{fallback:null},$t.createElement(Gn,null)),zn=$t.lazy(()=>n.e(0).then(n.bind(null,237))),Wn=()=>$t.createElement($t.Suspense,{fallback:null},$t.createElement(zn,null));let Kn=Ht(e=>({advancedSearchVisible:wn(e).displayAdvanced,allowFileDragging:e.application.allowFileDragging,appReady:Rn(e),appWidth:e.application.appWidth,authLoading:e.auth.authLoading,contextMenu:e.application.contextMenu,enableExperimental:e.application.enableExperimental,isAuthenticated:An(e),modalOpen:!!e.modal.name,user:kn(e)}))((Ut=Ot=class extends $t.Component{constructor(...e){super(...e),Nt(this,"state",{dragging:!1,hasError:!1,splashAnimationDone:!1}),Nt(this,"onSplashAnimationDone",()=>{this.setState({splashAnimationDone:!0})}),Nt(this,"importFiles",e=>{this.props.isAuthenticated&&_n(this.props.dispatch,e,e=>{for(let t in e)e[t].newImport=!0;this.props.dispatch(on(e,!0))})}),Nt(this,"getDataFromMain",(e,t)=>{switch(e){case In.mainConsts.events.CHECK_FILES_DB:t.exists&&this.props.dispatch({type:In.actionTypes.SET_MIGRATION_DATA,data:t.data,_winBackup:t._winBackup});break;case In.mainConsts.events.DATA_FETCHED:if(t.db===In.db.files){this.props.dispatch(on(t.data));const e=Object.values(t.data).reduce((e,t)=>(t.bpm&&t.duration||e.push(t),e),[]);return void(e.length&&bn(this.props.dispatch,e))}t.db===In.db.app&&t.data.displayAdvanced&&this.props.dispatch(ln());break;case In.mainConsts.events.FILE_ALREADY_EXISTS:this.props.dispatch(En(t));break;case In.mainConsts.events.FILE_SYSTEM_ERROR:console.log(t);break;case In.mainConsts.events.FILE_SAVE_SUCCESS:t.saveType===In.saveTypes.RECORDER?this.props.dispatch(vn(t.filePath)):t.saveType===In.saveTypes.TRANSFER&&this.props.dispatch(yn(t.fileName,t.filePath));break;case In.mainConsts.events.GET_MXLM_SUCCESS:this.props.dispatch(Tn(t.filePath,t.mxml));break;case In.mainConsts.events.OPEN_DEEPLINK:this.handleDeeplink(t.url)}}),Nt(this,"handleDeeplink",e=>{try{const t=e.replace("songriffer://songriffer.com?deeplink=",""),n=JSON.parse(decodeURIComponent(t));switch(n.type){case In.deeplinkTypes.LOGIN_FACEBOOK:Sn.signInWithFacebookToken(n.params.token);break;case In.deeplinkTypes.LOGIN_GOOGLE:Sn.signInWithGoogleToken(n.params.token);break;default:Cn(`Unsupported deeplink type ${n.type} - raw deeplink: ${t}`)}}catch(t){const n=`Could not parse deeplink args: ${e}`;console.error(n),xn.exception(n),Cn(`*Error* ${n}`)}}),Nt(this,"onMissingFiles",e=>{this.props.dispatch(rn(e.files))}),Nt(this,"onKeyDown",e=>{if("Escape"===e.key&&this.props.dispatch(cn()),32===e.keyCode&&e.target===document.body&&(this.props.dispatch(fn()),e.preventDefault()),!this.props.modalOpen&&e.target&&"INPUT"!==e.target.tagName&&/^[a-zA-Z]{1}$/.test(e.key)){let e=null;e=this.props.advancedSearchVisible?"#advanced-search-input":"#basic-search-input";const t=document.querySelector(e);t&&t.focus()}}),Nt(this,"onResize",()=>{window.innerWidth!==this.props.appWidth&&this.props.dispatch(gn(window.innerWidth))}),Nt(this,"setFullUser",e=>{this.props.dispatch(dn(e))}),Nt(this,"onAuthChange",e=>{e?(this.props.dispatch(hn(e)),Sn.getFullUser(e.uid).then(this.setFullUser)):this.props.dispatch(pn())}),Nt(this,"closeContextMenu",()=>{this.props.dispatch(mn())}),Nt(this,"catchError",e=>{this.setState({hasError:!0});try{const t=`${e.message} \n \`\`\`${e.error.stack}\`\`\``;xn.exception(e.message),Cn(`*Error* ${t}`)}catch(e){Cn("*Error* unavailable message"),xn.exception("Error - unavailable message")}})}detectDragDrop(){this.dragDropActivated=!0,this.removeDragDrop=jt(document.body,{onDrop:this.importFiles,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})}listenForFullUserUpdate(){Sn.listenForFullUserUpdate(this.props.user.uid,this.setFullUser).then(e=>{this.fullUserListener=e})}removeFullUserListener(){"function"==typeof this.fullUserListener&&this.fullUserListener()}checkUpdate(){clearTimeout(this.updateTimeout),this.props.dispatch(un(!1)),this.updateTimeout=setTimeout(()=>{this.checkUpdate()},In.updateInterval)}componentDidCatch(){this.setState({hasError:!0})}componentDidMount(){Fn(),window.addEventListener("error",this.catchError,{passive:!0}),this.detectDragDrop(),Dn(this.onMissingFiles),Pn(this.getDataFromMain),Sn.onAuthChange(this.onAuthChange),xn.trackEvent("app","app-start",window.__songRiffer.platform),xn.trackEvent("app",`platform-${window.__songRiffer.platform}`,window.__songRiffer.release),xn.trackEvent("app","appVersion","1.2.1"),document.addEventListener("keydown",this.onKeyDown),window.addEventListener("resize",this.onResize,{passive:!0}),this.onResize(),this.updateTimeout=setTimeout(()=>{this.checkUpdate()},3e3)}componentDidUpdate(e){!this.props.modalOpen&&this.props.allowFileDragging||!this.dragDropActivated||(this.removeDragDrop(),this.dragDropActivated=!1),this.props.modalOpen||!this.props.allowFileDragging||this.dragDropActivated||this.detectDragDrop(),!e.appReady&&this.props.appReady&&Ln(),!e.isAuthenticated&&this.props.isAuthenticated?this.listenForFullUserUpdate():e.isAuthenticated&&!this.props.isAuthenticated&&this.removeFullUserListener()}componentWillUnmount(){clearTimeout(this.updateTimeout),this.removeFullUserListener()}render(){const{appReady:e,authLoading:t,contextMenu:n,enableExperimental:i,isAuthenticated:s}=this.props,{dragging:a,hasError:o,splashAnimationDone:r}=this.state;return e&&r?o?$t.createElement(Xt,null):$t.createElement(Vt,null,$t.createElement($n,null,$t.createElement(Yt,null),$t.createElement(qt,null),$t.createElement(Mn,null,$t.createElement(Hn,null,$t.createElement(Jt,{style:"margin-left: 3px;"})),$t.createElement(Wt,null,$t.createElement(zt,{exact:!0,path:In.routes.home,component:tn}))),$t.createElement(On,null,$t.createElement(nn,null),$t.createElement(Nn,{dragging:a},"+"),$t.createElement(Un,{dragging:a},$t.createElement(Wt,null,$t.createElement(zt,{path:In.routes.project,component:Ye}),$t.createElement(zt,{path:In.routes.projects,component:Wn}),$t.createElement(zt,{path:In.routes.recorder,component:It}),$t.createElement(zt,{path:In.routes.settings,component:Qt}),$t.createElement(zt,{path:In.routes.stats,component:Vn}),$t.createElement(zt,{path:In.routes.transfer,component:jn}),$t.createElement(zt,{exact:!0,path:In.routes.home,component:X}))),$t.createElement(Kt,null),$t.createElement(De,null),$t.createElement(Zt,null),$t.createElement(en,null)),n.active?$t.createElement(an,{close:this.closeContextMenu,positionX:n.positionX,positionY:n.positionY,props:n.props}):null)):$t.createElement(sn,{authLoading:t,isAuthenticated:s,onAnimationDone:this.onSplashAnimationDone})}},Nt(Ot,"propTypes",{advancedSearchVisible:Bt.bool,allowFileDragging:Bt.bool,appReady:Bt.bool,appStartTime:Bt.number,appWidth:Bt.number,authLoading:Bt.bool,contextMenu:Bt.object,dispatch:Bt.func,isAuthenticated:Bt.bool,modalOpen:Bt.bool}),Mt=Ut))||Mt;const Yn={allowFileDragging:!1,appWidth:0,contextMenu:{},dbLoaded:!1,enableExperimental:!1,updateAvailable:!1},{getFilePathHash:Xn}=n(13),qn={_dataToMigrate:null,_winBackup:!1,files:{},pending:!0,sortRule:null,selectedFile:null},Jn=(e,t)=>{const n={...e};for(let e in t)n[e]?n[e]={...n[e],added:t[e].added,size:t[e].size}:n[e]=t[e];return n},Zn=(e,t)=>{if(!t.length)return e;const n={...e};return Object.keys(n).forEach(e=>{t.includes(e)?n[e]={...n[e],missing:!0}:n[e].missing&&(n[e]={...n[e],missing:!1})}),n},Qn=(e,t,n)=>{const i={...e};return delete i[t],i[Xn(n.path)]=n,i},ei=(e,t,n)=>{if(!e[t])return e;const i=e[t];return Object.keys(i.tags).map(e=>e.toLowerCase()).includes(n.toLowerCase())?e:{...e,[t]:{...i,tags:{...e[t].tags,[n]:!0}}}},ti={filePath:null,mxml:null},ni={fileAlreadyExists:"",filePath:null,saveSuccess:!1},ii={advancedTransitionDone:!0,archived:l.searchArchived.NON_ARCHIVED,basicTerm:"",bpm:"",bpmDelta:10,displayAdvanced:!1,tags:{},term:""},{combineReducers:si}=n(38),ai=si({application:(e=Yn,t)=>{switch(t.type){case l.actionTypes.ADD_FILES:return{...e,dbLoaded:!0};case l.actionTypes.UPDATE_AVAILABLE:return{...e,updateAvailable:!0};case l.actionTypes.APP_RESIZE:return{...e,appWidth:t.width};case l.actionTypes.DISPLAY_TAG_CONTEXT_MENU:return{...e,contextMenu:{active:!0,positionX:t.positionX,positionY:t.positionY,props:t.props}};case l.actionTypes.CLOSE_CONTEXT_MENU:return{...e,contextMenu:Yn.contextMenu};case l.actionTypes.SEARCH_BASIC:return t.term.toLowerCase()===l.DEBUG_KEY_SEQUENCE?{...e,enableExperimental:!0}:e;case l.actionTypes.SET_ALLOW_FILE_DRAGGING:return{...e,allowFileDragging:t.allowFileDragging};default:return e}},auth:n(154),files:(e=qn,t)=>{switch(t.type){case l.actionTypes.SET_MIGRATION_DATA:return{...e,_dataToMigrate:t.data,_winBackup:t._winBackup};case l.actionTypes.ADD_TAG:return{...e,files:ei(e.files,t.hashPath,t.tag)};case l.actionTypes.REMOVE_TAG:const n=e.files[t.hashPath],i={...n.tags};return delete i[t.tag],{...e,files:{...e.files,[t.hashPath]:{...n,tags:i}}};case l.actionTypes.EDIT_FILE:let s;return s=!t.automaticEdit&&t.edit.bpm||t.automaticEdit&&t.edit.bpm&&!e.files[t.hashPath].bpm?t.edit.bpm:e.files[t.hashPath].bpm,{...e,files:{...e.files,[t.hashPath]:{...e.files[t.hashPath],...t.edit,bpm:s}}};case l.actionTypes.ADD_FILES:return{...e,_dataToMigrate:null,files:Jn(e.files,t.files),pending:!1};case l.actionTypes.REMOVE_FILE:const a={...e.files};return delete a[t.hashPath],{...e,files:a,selectedFile:e.selectedFile===t.hashPath?null:e.selectedFile};case l.actionTypes.SET_FILE_ARCHIVE:return t.hashPath===e.selectedFile?{...e,selectedFile:null}:e;case l.actionTypes.PLAY_FILE:return{...e,selectedFile:t.hashPath};case l.actionTypes.REPLACE_FILE:return{...e,files:Qn(e.files,t.oldFileHashPath,t.newFile)};case l.actionTypes.SET_MISSING_FILES:return{...e,files:Zn(e.files,t.filesHashPath)};case l.actionTypes.SET_SORT_RULE:return{...e,sortRule:t.sortRule};case l.actionTypes.PAUSE_PLAYER:return t.unsetSelectedFile?{...e,selectedFile:null}:e;case l.actionTypes.DISABLE_NEW_IMPORTS:const o={...e.files};for(const e of t.files)o[e]={...o[e],newImport:!1};return{...e,files:o};case l.actionTypes.SET_FILE_UPLOAD_STATUS:return{...e,files:{...e.files,[t.hashPath]:{...e.files[t.hashPath],uploaded:t.uploaded}}};case l.actionTypes.AUTH_SIGN_OUT:return qn;default:return e}},modal:n(155),mxml:(e=ti,t)=>{switch(t.type){case l.actionTypes.SET_MXML:return{...e,filePath:t.filePath,mxml:t.mxml};default:return e}},notifications:n(156),player:n(157),recorder:(e=ni,t)=>{switch(t.type){case l.actionTypes.RECORDER_FILE_ALREADY_EXISTS:return{...e,fileAlreadyExists:t.fileName};case l.actionTypes.RECORDER_SAVE_SUCCESS:return{...e,filePath:t.filePath,saveSuccess:!0};case l.actionTypes.RECORDER_RESET:return ni;default:return e}},search:(e=ii,t)=>{switch(t.type){case l.actionTypes.SEARCH_BASIC:return{...e,basicTerm:t.term};case l.actionTypes.SET_SEARCH:return{...e,term:t.term,basicTerm:""};case l.actionTypes.TOGGLE_ADVANCED_SEARCH:return{...ii,displayAdvanced:!e.displayAdvanced,advancedTransitionDone:!1};case l.actionTypes.ADVANCED_TRANSITION_DONE:return{...e,advancedTransitionDone:!0};case l.actionTypes.SEARCH_TAG:return{...e,advancedTransitionDone:!1,displayAdvanced:!0,basicTerm:"",tags:{...e.tags,[t.tag]:!0}};case l.actionTypes.REMOVE_SEARCH_TAG:const n={...e.tags};return delete n[t.tag],{...e,basicTerm:"",tags:n};case l.actionTypes.SEARCH_BPM:return{...e,basicTerm:"",bpm:isNaN(parseInt(t.bpm,10))?"":parseInt(t.bpm,10)};case l.actionTypes.SEARCH_BPM_DELTA:return{...e,bpmDelta:isNaN(parseInt(t.bpmDelta,10))?10:parseInt(t.bpmDelta,10)};case l.actionTypes.CLEAR_SEARCH:return{...ii,displayAdvanced:e.displayAdvanced};case l.actionTypes.SET_SEARCH_ARCHIVED:return{...e,archived:t.archived};default:return e}},transfer:n(158)}),{createStore:oi,applyMiddleware:ri}=n(38),li=oi(ai,ri(n(153).default,n(159),n(160))),ci=n(0),{Provider:pi}=n(6),{render:di}=n(34);di(ci.createElement(pi,{store:li},ci.createElement(Kn,null)),document.querySelector("#root"))}],[[162,3,5]]]);