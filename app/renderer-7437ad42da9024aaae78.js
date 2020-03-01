!function(e){function t(t){for(var i,a,o=t[0],l=t[1],c=t[2],d=0,h=[];d<o.length;d++)a=o[d],s[a]&&h.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(p&&p(t);h.length;)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={0:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://songriffer.com/app/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;r.push([233,1]),n()}([,function(e,t,n){"use strict";n.r(t),n.d(t,"mainConsts",function(){return i}),n.d(t,"actionTypes",function(){return s}),n.d(t,"CLOUD_LEVEL",function(){return S}),n.d(t,"colors",function(){return r}),n.d(t,"colorsDarkFont",function(){return a}),n.d(t,"db",function(){return o}),n.d(t,"DEBUG_KEY_SEQUENCE",function(){return l}),n.d(t,"deeplinkTypes",function(){return _}),n.d(t,"email",function(){return c}),n.d(t,"landingUrl",function(){return p}),n.d(t,"facebookUrl",function(){return d}),n.d(t,"instagramUrl",function(){return h}),n.d(t,"messengerUrl",function(){return u}),n.d(t,"modals",function(){return m}),n.d(t,"noop",function(){return g}),n.d(t,"routes",function(){return f}),n.d(t,"saveTypes",function(){return E}),n.d(t,"searchArchived",function(){return v}),n.d(t,"sortRules",function(){return y}),n.d(t,"sources",function(){return b}),n.d(t,"updateUrl",function(){return T}),n.d(t,"updateInterval",function(){return x});const i=n(139),s={ADD_TAG:"ADD_TAG",ADD_FILES:"ADD_FILES",ADD_NOTIFICATION:"ADD_NOTIFICATION",ADVANCED_TRANSITION_DONE:"ADVANCED_TRANSITION_DONE",APP_RESIZE:"APP_RESIZE",AUTH_NOT_LOGGED:"AUTH_NOT_LOGGED",AUTH_SET_USER:"AUTH_SET_USER",AUTH_SIGN_OUT:"AUTH_SIGN_OUT",AUTH_SET_FULL_USER_DATA:"AUTH_SET_FULL_USER_DATA",CHECK_UPDATE:"CHECK_UPDATE",CHECK_UPDATE_FAILED:"CHECK_UPDATE_FAILED",CHECK_UPDATE_NO_UPDATE:"CHECK_UPDATE_NO_UPDATE",CHECK_UPDATE_SUCCESS:"CHECK_UPDATE_SUCCESS",CLEAR_SEARCH:"CLEAR_SEARCH",CLOSE_CONTEXT_MENU:"CLOSE_CONTEXT_MENU",CLOSE_MODAL:"CLOSE_MODAL",CLOSE_PLAYER_IF_PAUSED:"CLOSE_PLAYER_IF_PAUSED",DISABLE_NEW_IMPORTS:"DISABLE_NEW_IMPORTS",DISPLAY_TAG_CONTEXT_MENU:"DISPLAY_TAG_CONTEXT_MENU",EDIT_FILE:"EDIT_FILE",NOTIFY_MISSING_FILE:"NOTIFY_MISSING_FILE",OPEN_MODAL:"OPEN_MODAL",PAUSE_PLAYER:"PAUSE_PLAYER",PLAY_FILE:"PLAY_FILE",RECORDER_FILE_ALREADY_EXISTS:"RECORDER_FILE_ALREADY_EXISTS",RECORDER_RESET:"RECORDER_RESET",RECORDER_SAVE_SUCCESS:"RECORDER_SAVE_SUCCESS",REMOVE_FILE:"REMOVE_FILE",REMOVE_NOTIFICATION:"REMOVE_NOTIFICATION",REMOVE_SEARCH_TAG:"REMOVE_SEARCH_TAG",REMOVE_TAG:"REMOVE_TAG",REPLACE_FILE:"REPLACE_FILE",SET_MIGRATION_DATA:"SET_MIGRATION_DATA",SET_SEARCH:"SET_SEARCH",SEARCH_BASIC:"SEARCH_BASIC",SEARCH_BPM:"SEARCH_BPM",SEARCH_BPM_DELTA:"SEARCH_BPM_DELTA",SEARCH_TAG:"SEARCH_TAG",SET_ALLOW_FILE_DRAGGING:"SET_ALLOW_FILE_DRAGGING",SET_BPM:"SET_BPM",SET_COMMENT:"SET_COMMENT",SET_FILE_ARCHIVE:"SET_FILE_ARCHIVE",SET_FILE_UPLOAD_STATUS:"SET_FILE_UPLOAD_STATUS",SET_MISSING_FILES:"SET_MISSING_FILES",SET_MXML:"SET_MXML",SET_RATING:"SET_RATING",SET_SEARCH_ARCHIVED:"SET_SEARCH_ARCHIVED",SET_SORT_RULE:"SET_SORT_RULE",SET_TIME_SIGNATURE:"SET_TIME_SIGNATURE",TOGGLE_ADVANCED_SEARCH:"TOGGLE_ADVANCED_SEARCH",TOGGLE_PLAY:"TOGGLE_PLAY",TRANSFER_RESET:"TRANSFER_RESET",TRANSFER_SAVE_SUCCESS:"TRANSFER_SAVE_SUCCESS",TRANSFER_SET_FILE_LIST:"TRANSFER_SET_FILE_LIST",TRANSFER_START_TRANFER:"TRANSFER_START_TRANFER",UPDATE_AVAILABLE:"UPDATE_AVAILABLE"},r={_black:"#1f1f1f",_blackDark:"#020202",_blue:"#3B4096",_blueDark:"#141533",blueGreen:"#49d1af",blueLight:"#8086FF",bluePastel:"#A9C1FF",blueSky:"#64C6E8",cream:"#FEE4C3",fuschia:"#d440d6",green:"#4f8e71",greenLight:"#20FFC1",greenPastel:"#BBFFC7",_grey:"#4f4f4f",_greyDark:"#333",mint:"#D2FF50",orange:"#c17443",pink:"#E694FF",purple:"#a389c9",_purpleLight:"#7C5AB0",red:"#963c57",redLight:"#CC3D68",salmon:"#E8A987",_white:"#dedede",yellow:"#FFE400"},a={blueGreen:!0,bluePastel:!0,blueSky:!0,cream:!0,greenLight:!0,greenPastel:!0,mint:!0,salmon:!0,yellow:!0},o={app:"app",files:"files"},l="fish cannot carry guns",c="hello@songriffer.com",p="https://songriffer.com",d="https://www.facebook.com/songrifferapp",h="https://www.instagram.com/songrifferapp",u="http://m.me/songrifferapp",m={comment:"comment",fileMissing:"fileMissing",fileOptions:"fileOptions",invalidFile:"invalidFile",removeFile:"removeFile",tabs:"tabs",tags:"tags",text:"text",updateAvailable:"updateAvailable"},g=()=>{},f={home:"/",project:"/project/:projectId",projects:"/projects",recorder:"/recorder",settings:"/settings",stats:"/stats",transfer:"/transfer"},E={RECORDER:"RECORDER",TRANSFER:"TRANSFER"},v={ALL:"ALL",ARCHIVED:"ARCHIVED",NON_ARCHIVED:"NON_ARCHIVED"},y={BPM_ASC:"BPM_ASC",BPM_DESC:"BPM_DESC",DURATION_ASC:"DURATION_ASC",DURATION_DESC:"DURATION_DESC",NAME_ASC:"NAME_ASC",NAME_DESC:"NAME_DESC",RATING_ASC:"RATING_ASC",RATING_DESC:"RATING_DESC"},b={IMPORT:"IMPORT",RECORD:"RECORD",TRANSFER:"TRANSFER"},T={darwin:"https://songriffer.com/update-mac.json",win32:"https://songriffer.com/update-win.json"},x=18e5,S={LEVEL_1:1,LEVEL_2:2,LEVEL_3:3,LEVEL_4:4},_={LOGIN_FACEBOOK:"LOGIN_FACEBOOK",LOGIN_GOOGLE:"LOGIN_GOOGLE"}},,,,,,function(e,t){const n=window.__songRiffer.tracking;e.exports=n},,function(e,t,n){"use strict";n.r(t),n.d(t,"selectFiles",function(){return d}),n.d(t,"_selectFiles",function(){return l}),n.d(t,"selectSortRule",function(){return p}),n.d(t,"selectFilesCount",function(){return h}),n.d(t,"selectSelectedFile",function(){return u}),n.d(t,"selectFileByHashPath",function(){return m}),n.d(t,"selectTags",function(){return g}),n.d(t,"selectFilesForStorage",function(){return f});var i=n(16),s=n(17),r=n(1);const a=n(42),o=n(33),l=e=>e.files.files,c=a([e=>e],e=>new i.a(e),"selectFile"),p=a([e=>e.files],e=>e.sortRule,"selectSortRule"),d=a([l,o,p],(e,t,n)=>{if(!e)return[];return((e,t)=>e.sort((e,n)=>{switch(t){case r.sortRules.BPM_ASC:return e.bpm-n.bpm;case r.sortRules.BPM_DESC:return n.bpm-e.bpm;case r.sortRules.DURATION_ASC:return e.duration-n.duration;case r.sortRules.DURATION_DESC:return n.duration-e.duration;case r.sortRules.NAME_ASC:return e.name.toLowerCase().localeCompare(n.name.toLowerCase());case r.sortRules.NAME_DESC:return n.name.toLowerCase().localeCompare(e.name.toLowerCase());case r.sortRules.RATING_ASC:return e.getRatingForSort()-n.getRatingForSort();case r.sortRules.RATING_DESC:return n.getRatingForSort()-e.getRatingForSort();default:return n.added-e.added}}))(Object.keys(e).reduce((n,i)=>{const s=c(e[i],null,`file_${i}`);return s.matchSearch(t)&&n.push(s),n},[]),n)},"selectFiles"),h=a([l,o],(e,t)=>t.archived===r.searchArchived.ALL?Object.keys(e).length:Object.values(e).filter(e=>!e.archived).length,"selectFilesCount"),u=a([e=>e,e=>e.files.selectedFile],(e,t)=>m(e,{fileHashPath:t}),"selectSelectedFile"),m=a([(e,t)=>t.fileHashPath,l],(e,t)=>{if(!e)return null;let n;return t[e]&&(n=t[e]),n||(n=Object.values(t).find(t=>Object(s.getFilePathHash)(t.path)===e)),n?c(n,null,`file_${e}`):null},"selectFileByHashPath"),g=a([l],e=>{const t=Object.values(e).reduce((e,t)=>(Object.keys(t.tags).forEach(t=>{e[t.toLowerCase()]=!0}),e),{});return Object.keys(t).sort()},"selectTags"),f=a([l],e=>{const t={};for(let n in e)t[n]=c(e[n],null,`file_${n}`).toJSON();return t},"selectFilesForStorage")},,function(e,t,n){(function(t){const i=t.require("electron"),s=n(7),r=n(1);let a=()=>{},o=()=>{};e.exports.setCallback=e=>{a=e},e.exports.onMissingFiles=e=>{o=e},i.ipcRenderer.on(r.mainConsts.events.CHECK_FILES_DB,(e,t)=>{a(r.mainConsts.events.CHECK_FILES_DB,t)}),i.ipcRenderer.on(r.mainConsts.events.DATA_FETCHED,(e,t)=>{a(r.mainConsts.events.DATA_FETCHED,t)}),i.ipcRenderer.on(r.mainConsts.events.MISSING_FILES,(e,t)=>{o(t)}),i.ipcRenderer.on(r.mainConsts.events.FILE_ALREADY_EXISTS,(e,t)=>{a(r.mainConsts.events.FILE_ALREADY_EXISTS,t)}),i.ipcRenderer.on(r.mainConsts.events.FILE_SYSTEM_ERROR,(e,t)=>{a(r.mainConsts.events.FILE_SYSTEM_ERROR,t)}),i.ipcRenderer.on(r.mainConsts.events.FILE_SAVE_SUCCESS,(e,t)=>{a(r.mainConsts.events.FILE_SAVE_SUCCESS,t)}),i.ipcRenderer.on(r.mainConsts.events.GET_MXLM_SUCCESS,(e,t)=>{a(r.mainConsts.events.GET_MXLM_SUCCESS,t)}),i.ipcRenderer.on(r.mainConsts.events.OPEN_DEEPLINK,(e,t)=>{a(r.mainConsts.events.OPEN_DEEPLINK,t)}),e.exports.checkFilesDBExists=()=>{i.ipcRenderer.send(r.mainConsts.events.CHECK_FILES_DB_EXISTS,{db:r.db.files})},e.exports.clearDB=()=>{i.ipcRenderer.send(r.mainConsts.events.CLEAR_DB)},e.exports.getFiles=()=>{i.ipcRenderer.send(r.mainConsts.events.FETCH_DATA,{db:r.db.files})},e.exports.getAppConfig=()=>{i.ipcRenderer.send(r.mainConsts.events.FETCH_DATA,{db:r.db.app})},e.exports.saveApp=e=>{i.ipcRenderer.send(r.mainConsts.events.SAVE_DATA,{db:"app",value:JSON.stringify(e)})},e.exports.openInFinder=e=>{i.shell.showItemInFolder(e)},e.exports.checkFiles=e=>{i.ipcRenderer.send(r.mainConsts.events.CHECK_FILES,{files:e})},e.exports.openLink=e=>{i.shell.openExternal(e),s.trackEvent("app","open-link",e)},e.exports.reload=()=>{i.ipcRenderer.send(r.mainConsts.events.RELOAD)},e.exports.toggleDevTools=()=>{i.ipcRenderer.send(r.mainConsts.events.TOGGLE_DEVTOOLS)},e.exports.saveMedia=(e,t,n)=>{i.ipcRenderer.send(r.mainConsts.events.SAVE_MEDIA,{saveType:e,fileName:t,wavData:n})},e.exports.checkFileExists=e=>{i.ipcRenderer.send(r.mainConsts.events.CHECK_FILE_EXISTS,{fileName:e})},e.exports.copyToClipboard=e=>{i.clipboard.writeText(e)},e.exports.unlinkFile=e=>{i.ipcRenderer.send(r.mainConsts.events.UNLINK_FILE,{filePath:e})},e.exports.getMXML=e=>{i.ipcRenderer.send(r.mainConsts.events.GET_MXLM,{filePath:e})},e.exports.openFile=e=>{i.shell.openItem(e)}}).call(this,n(10))},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(155);n(156),n(158),n(160),n(234),n(163),n(165);const r=n(52),a=n(7),o=n(29),{hasCorrectCloudLevel:l}=n(56),{CLOUD_LEVEL:c}=n(1),p={libraries:"libraries",projects:"projects",stats:"stats",users:"users"};console.info("%c[SongRiffer] %cUsing prod firebase project","color: blue","color: black"),e.exports=new class{constructor(e){i(this,"sendResetPasswordEmail",e=>(a.trackEvent("auth","password-reset"),this.auth.sendPasswordResetEmail(e))),i(this,"getFullUserRetry",(e,t)=>{this.db.collection(p.users).doc(e).get().then(n=>{const i=n.data();return i?t(i):setTimeout(()=>{console.log("### Error getting full user, retrying"),this.getFullUserRetry(e,t)},300)})}),this.firebase=s.initializeApp(e),this.auth=this.firebase.auth(),this.db=this.firebase.firestore(),this.storage=this.firebase.storage(),s.performance(),this.initRemoteConfig()}initRemoteConfig(){this.remoteConfig=this.firebase.remoteConfig(),this.remoteConfig.settings={minimumFetchIntervalMillis:36e5},this.remoteConfig.defaultConfig={STORAGE_LIMIT_LEVEL_3:3221225472,STORAGE_LIMIT_LEVEL_4:16106127360,FILES_EMPTY_DATA:"[]"},this.fetchRemoteConfig()}async fetchRemoteConfig(){await this.remoteConfig.fetchAndActivate()}async getRemoteConfig(){return await this.fetchRemoteConfig(),{STORAGE_LIMIT_LEVEL_3:this.remoteConfig.getNumber("STORAGE_LIMIT_LEVEL_3"),STORAGE_LIMIT_LEVEL_4:this.remoteConfig.getNumber("STORAGE_LIMIT_LEVEL_4"),FILES_EMPTY_DATA:JSON.parse(this.remoteConfig.getString("FILES_EMPTY_DATA"))}}async getRemoteConfigValue(e,t=null){return(await this.getRemoteConfig())[e]||t}onAuthChange(e){this.auth.onAuthStateChanged(e)}signUpWithEmailPassword(e,t){return new Promise((n,i)=>{a.trackEvent("auth","sign-up"),this.auth.createUserWithEmailAndPassword(e,t).then(e=>{e.user.sendEmailVerification(),n(e)}).catch(t=>{console.error("########### Error with sign up",t),a.exception(`Error in sign up ${t.message}`),o(`*Error* in sign up ${t.message} - email: ${e}`),i(t.message)})})}signInWithEmailPassword(e,t){return new Promise((n,i)=>{a.trackEvent("auth","sign-in"),this.auth.signInWithEmailAndPassword(e,t).then(n).catch(t=>{console.error("########### Error with sign in",t),a.exception(`Error in sign in ${t.message}`),o(`*Error* in sign in ${t.message} - email: ${e}`),i(t)})})}signInWithFacebookToken(e){const t=s.auth.FacebookAuthProvider.credential(e);o("New user sign in with facebook"),a.trackEvent("auth","sign-in-facebook"),this.auth.signInWithCredential(t).catch(e=>{console.error("Error login with facebook access token"),a.exception(`Error in sign in with facebook ${e.message}`),o(`*Error* in sign in with facebook ${e.message}`)})}signInWithGoogleToken(e){const t=s.auth.GoogleAuthProvider.credential(e);o("New user sign in with google"),a.trackEvent("auth","sign-in-google"),this.auth.signInWithCredential(t).catch(e=>{console.error("Error login with google access token"),a.exception(`Error in sign in with google ${e.message}`),o(`*Error* in sign in with google ${e.message}`)})}signOut(){a.trackEvent("auth","sign-out"),this.auth.signOut()}getFullUser(e){return new Promise(t=>{this.getFullUserRetry(e,e=>{t({data:{...e,createdAt:e.createdAt.toDate()}})})})}listenForFullUserUpdate(e,t){return new Promise(n=>{this.getFullUserRetry(e,i=>{const s=this.db.collection(p.users).doc(e).onSnapshot(e=>{try{const n=e.data();t({...n,createdAt:n.createdAt.toDate()})}catch(e){t({})}});n(s)})})}saveFullFilesData(e,t,n=!0){return this.db.collection(p.libraries).doc(e).set({files:t},{merge:n}).then(()=>{console.log("Files data saved to cloud")}).catch(t=>{a.exception(`Error saving files data to cloud ${t}`),o(`*Error* error saving files data to cloud - ${e} - ${t}`),console.error("Error saving files data to cloud"),console.log(t)})}listenForFilesUpdate(e,t){return this.db.collection(p.libraries).doc(e).onSnapshot(n=>{try{const i=r(n.data(),"files",{}),s="string"==typeof i?JSON.parse(i):i;t(s)}catch(i){a.exception(`Error reading files ${i.toString()}`),o(`*Error* reading files for ${e} - ${i.toString()} - raw data: \n ${JSON.stringify(n.data())}`),t({})}})}saveUserStats(e){s.functions().httpsCallable("saveUserStats")({stats:{files:{},tags:{},...e}}).then(e=>{console.log("stats data saved to cloud")}).catch(e=>{console.error("Error saving stats data to cloud"),console.log(e)})}getUserStats(e){return new Promise((t,n)=>{this.db.collection(p.stats).doc(e).get().then(e=>{const i=e.data();i?t(i):n()})})}callCallback(e,t,n={}){"function"==typeof e[t]&&e[t](n)}getAudioFileStoragePath(e,t){return`users/${e.uid}/audio/${t}`}uploadFile(e,t,n,i={}){if(!l(e,c.LEVEL_3))return void console.error("User has invalid cloud level");const r=this.storage.ref(),a=this.getAudioFileStoragePath(e,t);var p={customMetadata:{userUid:e.uid}};const d=r.child(a).put(n,p);console.log("# starting upload for file",a),d.on(s.storage.TaskEvent.STATE_CHANGED,e=>{const t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),this.callCallback(i,"onProgress",t),e.state){case s.storage.TaskState.PAUSED:console.log("Upload is paused"),this.callCallback(i,"onPause");break;case s.storage.TaskState.RUNNING:console.log("Upload is running"),this.callCallback(i,"onRunning")}},t=>{switch(o(`*Error* uploading file for ${e.uid} - error code: ${t.code}`),t.code){case"storage/unauthorized":this.callCallback(i,"onError",{error:"UNAUTHORIZED"});break;case"storage/canceled":console.error("## error upload: canceled"),this.callCallback(i,"onError",{error:"CANCELED"});break;case"storage/unknown":console.error("#error upload, unknown error",t.serverResponse),this.callCallback(i,"onError",{error:"UNKNOWN"})}},()=>{console.log("Success upload"),this.callCallback(i,"onSuccess"),o(`Upload success - ${e.uid}`)})}getFileDownloadUrl(e,t){return new Promise(n=>{const i=this.getAudioFileStoragePath(e,t);this.storage.ref(i).getDownloadURL().then(n).catch(e=>{o(`*Error* cannot get file download url ${e.message}`)})})}deleteFile(e,t){const n=this.storage.ref(),i=this.getAudioFileStoragePath(e,t);return n.child(i).delete()}getUserStorageSize(e){return new Promise((t,n)=>{this.storage.ref().child(`users/${e}/audio`).listAll().then(async e=>{let n=0;for(const t of e.items)n+=(await t.getMetadata()).size;t(n)}).catch(e=>{o(`*Error* cannot get user storage size ${e.message}`),n(e)})})}listenForProjectsUpdate(e,t){const n=this.db.collection(p.users).doc(e);return this.db.collection(p.projects).where("creator","==",n).onSnapshot(e=>{const n=[];e.forEach(function(e){n.push({id:e.id,...e.data()})}),t(n)})}createProject(e,t){const n=this.db.collection(p.users).doc(e);return new Promise((e,i)=>{this.db.collection(p.projects).add({creator:n,createdAt:s.firestore.FieldValue.serverTimestamp(),name:t,updatedAt:s.firestore.FieldValue.serverTimestamp()}).then(n=>{o(`Project created - ${t}`),e(n.id)}).catch(e=>{o(`*Error* Cannot create project - ${e.message}`),i()})})}listenForProjectUpdate(e,t){return this.db.collection(p.projects).doc(e).onSnapshot(e=>{const n=e.data();t({id:e.id,...n,updatedAt:n.updatedAt?n.updatedAt.toDate():new Date})})}addSongToProject(e,t){return this.db.collection(p.projects).doc(e).update({songs:s.firestore.FieldValue.arrayUnion(t),updatedAt:s.firestore.FieldValue.serverTimestamp()})}}({apiKey:"AIzaSyBrkXIQBEvF9qslWeO91XUUUng3zAH9ZEk",databaseURL:"https://songriffer.firebaseio.com",projectId:"songriffer",storageBucket:"songriffer.appspot.com",messagingSenderId:"246769208094",appId:"1:246769208094:web:6a65c6866b23adc4"})},function(e,t,n){const i=n(1),{openModal:s}=n(24),{pausePlayer:r,playFile:a}=n(44),{notifyMissingFile:o}=n(55),{selectFileByHashPath:l,_selectFiles:c}=n(9),{selectUser:p}=n(18),d=n(12),h=n(29),u=n(7),{getFilePathHash:m}=n(17),{clearDB:g,openFile:f}=n(11);e.exports.addFiles=(e,t=!1)=>(n,s)=>{if(t){const n={import:0,recorder:0,transfer:0},s=Object.values(e);s.forEach(e=>{e.source===i.sources.IMPORT&&n.import++,e.source===i.sources.RECORD&&n.recorder++,e.source===i.sources.TRANSFER&&n.transfer++}),t&&h(`${s.length} files added:\n${Object.keys(n).map(e=>`${e}: ${n[e]}`).join("\n")}`),d.saveUserStats({files:n})}n({type:i.actionTypes.ADD_FILES,files:e,newImports:t,__saveToDB__:t,__db:i.db.files})};const E=(e,t,n=!1)=>({type:i.actionTypes.EDIT_FILE,hashPath:e,edit:t,automaticEdit:n,__saveToDB__:!0,__db:i.db.files});e.exports.editFile=E,e.exports.removeFile=(e,t=!1)=>(n,r)=>{const a=r(),o=l(a,{fileHashPath:e}),c=p(a);if(!(o.source!==i.sources.RECORD&&o.source!==i.sources.TRANSFER||t||o.missing))return void n(s(i.modals.removeFile,{fileHashPath:e}));const h=[];o.uploaded&&h.push(d.deleteFile(c,o.name)),Promise.all(h).then(()=>{n({type:i.actionTypes.REMOVE_FILE,hashPath:e,__saveToDB__:!0,__db:i.db.files})})},e.exports.setMissingFiles=e=>(t,n)=>{const s=c(n()),r=e.filter(e=>s[e]);t({type:i.actionTypes.SET_MISSING_FILES,filesHashPath:r})},e.exports.replaceFile=(e,t)=>({type:i.actionTypes.REPLACE_FILE,oldFileHashPath:e,newFile:t,__saveToDB__:!0,__db:i.db.files}),e.exports.addTag=(e,t)=>(n,s)=>{d.saveUserStats({tags:{[t.trim().toLowerCase()]:1}}),n({type:i.actionTypes.ADD_TAG,hashPath:e,tag:t.trim(),__saveToDB__:!0,__db:i.db.files})},e.exports.removeTag=(e,t)=>({type:i.actionTypes.REMOVE_TAG,hashPath:e,tag:t,__saveToDB__:!0,__db:i.db.files}),e.exports.setBPM=(e,t)=>n=>{n(E(e,{bpm:t})),n({type:i.actionTypes.SET_BPM})},e.exports.setTimeSignature=(e,t)=>n=>{n(E(e,{timeSignature:t})),n({type:i.actionTypes.SET_TIME_SIGNATURE})},e.exports.setRating=(e,t)=>n=>{n(E(e,{rating:t})),n({type:i.actionTypes.SET_RATING})},e.exports.setSortRule=e=>({type:i.actionTypes.SET_SORT_RULE,sortRule:e}),e.exports.setFileArchiveStatus=(e,t)=>n=>{n(E(e,{archived:t})),n({type:i.actionTypes.SET_FILE_ARCHIVE,archived:t,hashPath:e})},e.exports.setComment=(e,t)=>n=>{n(E(e,{comment:t.trim()})),n({type:i.actionTypes.SET_COMMENT})},e.exports.disableNewImports=()=>(e,t)=>{const n=c(t()),s=Object.keys(n).filter(e=>n[e].newImport);s.length&&e({type:i.actionTypes.DISABLE_NEW_IMPORTS,files:s})},e.exports.setFileUploadedStatus=(e,t)=>(console.log("# action ",e,t),{type:i.actionTypes.SET_FILE_UPLOAD_STATUS,hashPath:e,uploaded:t,__saveToDB__:!0,__db:i.db.files}),e.exports.migrateLegacyData=(e={},t=!1)=>(n,i)=>{const s=p(i());if(null!==e){h(`Migrating data to cloud ${s.uid} ${t?"(win backup)":""}`),u.trackEvent("app","cloud-migration");const n={};Object.values(e).forEach(e=>{n[m(e.path)]=e}),d.saveFullFilesData(s.uid,n).then(()=>{t&&h(`Migration for win backup successfull ${s.uid}`),g()}).catch(e=>{h(`Error migrating data to cloud ${e.toString()}`),t&&h(`Error migration data to cloud from win backup ${e.toString()}`),console.error(e)})}},e.exports.handleFileOpen=e=>(t,n)=>{if(e.isPlayable())return e.missing&&!e.uploaded?void t(o(e)):void t(a(e.hashPath));t(r());const l=n().application.enableExperimental;return e.isGuitarPro7()&&l?t(s(i.modals.tabs,{file:e})):f(e.path)}},,,function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return c}),n.d(t,"a",function(){return d});var i=n(1),s=n(17);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a=n(28),{escapeFilePath:o}=n(37);var l;!function(e){e.IMPORT="IMPORT",e.RECORD="RECORD",e.TRANSFER="TRANSFER"}(l||(l={}));const c=["m4a","mov","mp3","mp4","wav","webm"];class p{constructor(){r(this,"name",void 0),r(this,"path",void 0),r(this,"size",void 0),r(this,"type",void 0),r(this,"added",void 0),r(this,"archived",void 0),r(this,"bpm",void 0),r(this,"comment",void 0),r(this,"duration",void 0),r(this,"missing",void 0),r(this,"newImport",void 0),r(this,"rating",void 0),r(this,"_sortRating",void 0),r(this,"deviceSource",void 0),r(this,"source",void 0),r(this,"tags",void 0),r(this,"_tagsArray",void 0),r(this,"timeSignature",void 0),r(this,"safePath",void 0),r(this,"uploaded",void 0),r(this,"escapedPath",void 0),r(this,"hashPath",void 0)}}class d extends p{constructor(t){super(),this.name=t.name,this.path=t.path,this.size=t.size||0,this.type=t.type,this.added=t.added||+new Date,this.archived=t.archived||!1,this.bpm=t.bpm||null,this.comment=t.comment||"",this.deviceSource=t.deviceSource||e.__songRiffer.platform,this.duration=t.duration||null,this.missing=t.missing||!1,this.newImport=!0===t.newImport,this.rating=isNaN(parseInt(t.rating,10))?null:parseInt(t.rating,10),this._sortRating=null===this.rating?-1:this.rating,this.source=t.source||i.sources.IMPORT,this.tags=t.tags||{},this._tagsArray=Object.keys(this.tags),this.timeSignature=t.timeSignature||"4/4",this.safePath=this.path.replace(/[\/\s\?\.\(\)\[\]:]/g,"_"),this.escapedPath=o(this.path),this.hashPath=Object(s.getFilePathHash)(this.path),this.uploaded=t.uploaded||!1}getTags(){return this._tagsArray}hasMatchingTags(e,t=!1){return t?e.every(e=>this.hasMatchingTag(e,t)):e.some(e=>this.hasMatchingTag(e,t))}hasMatchingTag(e,t=!1){const n=this.getTags().map(e=>e.toLowerCase());return t?n.includes(e.toLowerCase()):n.some(t=>t.includes(e.toLowerCase()))}matchSearch(e){if(e.archived!==i.searchArchived.ALL){if(e.archived===i.searchArchived.ARCHIVED&&!this.archived)return!1;if(e.archived===i.searchArchived.NON_ARCHIVED&&this.archived)return!1}const t=e.cleanedBasicTerm,n=e.cleanedTerm,s=Object.keys(e.tags);return!(t.length||n.length||s.length||e.bpm)||(t.length?!(!this.name.toLowerCase().includes(t)&&!this.hasMatchingTag(t,!1)):!(n.length&&!this.name.toLowerCase().includes(n))&&(!(s.length&&!this.hasMatchingTags(s,!0))&&(!e.bpm||!(this.bpm<e.bpm-e.bpmDelta||this.bpm>e.bpm+e.bpmDelta))))}getRatingForSort(){return this._sortRating}hasComment(){return!!this.comment.length}isGuitarPro7(){return".gp"===a.extname(this.path)}isPlayable(){if(this.type.includes("audio"))return!0;const e=a.extname(this.name).toLowerCase().replace(".","");return c.includes(e)}toJSON(){return{added:this.added,archived:this.archived,bpm:this.bpm,comment:this.comment,deviceSource:this.deviceSource,duration:this.duration,escapedPath:this.escapedPath,name:this.name,newImport:!1,path:this.path,rating:this.rating,size:this.size,source:this.source,tags:this.tags,timeSignature:this.timeSignature,type:this.type,uploaded:this.uploaded}}}}).call(this,n(10))},function(e,t,n){"use strict";n.r(t),n.d(t,"getFilePathHash",function(){return s});var i=n(121);const s=e=>i.Base64.encode(e)},function(e,t,n){const i=n(42),s=e=>e.auth;e.exports.isAuthenticated=e=>!!e.auth.user,e.exports.selectUser=i([s],e=>e.user?{...e.user,data:e.data}:e.user,"selectUser"),e.exports.isUserFullyLoaded=i([s],e=>e.user&&!!Object.keys(e.data).length,"isUserFullyLoaded")},function(e,t,n){const i=n(0),s=n(2).default,r=n(5),a={xs:5,s:15,md:25},o=s.div`
    margin-top: ${e=>a[e.size]}px;
    margin-bottom: ${e=>a[e.size]}px;
`,l=({children:e,size:t="md"})=>i.createElement(o,{size:t},e);l.propTypes={children:r.node,size:r.oneOf(["md","s","xs"])},e.exports=l},,,,,function(e,t,n){const i=n(1);e.exports.openModal=(e,t)=>({type:i.actionTypes.OPEN_MODAL,name:e,props:t});const s=()=>(e,t)=>{const{modal:n}=t();n.name===i.modals.updateAvailable&&n.props&&n.props.mandatory||e({type:i.actionTypes.CLOSE_MODAL})};e.exports.closeModal=s,e.exports.closeModalEsc=()=>s()},,,,,function(e,t){console.info("%c[SongRiffer] %cApp Notifier is disabled in development environment","color: blue","color: black"),e.exports=e=>{try{const t=`${e} - wrapper version: *v1.2.5* - app version: *1.1.0* - ${window.__songRiffer.platform}`;return void console.log(`%c[App Notifier] %c${t}`,"color: blue","color: black")}catch(e){}}},function(e,t,n){const i=n(0),s=n(2).default,r=s.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`,a=s.div`
    padding-right: 15px;
    flex: 1;
    overflow-y: auto;
    scroll-behavior: smooth;
    ${e=>e.s}
`;e.exports=({children:e,scrollElementRef:t=null,stickyHeader:n=null,wrapperStyle:s=""})=>i.createElement(r,null,n,i.createElement(a,{s:s,ref:t},e))},,function(e,t,n){const i=n(2).default,{colors:s}=n(1),r=i.button`
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
`;e.exports=r},function(e,t,n){const i=n(42);e.exports=i([e=>e.search],e=>({...e,cleanedBasicTerm:e.basicTerm.trim().toLowerCase(),cleanedTerm:e.term.trim().toLowerCase()}),"selectSearch")},function(e,t,n){const i=n(167),s=n(0),r=n(43),{openModal:a}=n(24),{openLink:o}=n(11),l=n(7),c=n(1);e.exports.checkUpdate=(e=!1)=>t=>{t({type:c.actionTypes.CHECK_UPDATE,manual:e});const n=c.updateUrl[window.__songRiffer.platform],l=new Headers;l.append("pragma","no-cache"),l.append("cache-control","no-cache"),fetch(n,{method:"GET",headers:l}).then(e=>e.json()).then(n=>{if(n.version&&i.gt(n.version,window.__songRiffer.version)){const i=6048e5,s=+new Date;if(n.mandatory||n.date+i<s)return void t(d(n.url,n.changelog));t(e?p(n.url,n.changelog):{type:c.actionTypes.UPDATE_AVAILABLE,changelog:n.changelog,url:n.url})}else e&&(t({type:c.actionTypes.CHECK_UPDATE_NO_UPDATE}),t(a(c.modals.text,{title:"No update available",message:s.createElement("div",null,s.createElement("div",null,"Thanks for using SongRiffer!"),s.createElement("div",null,"We hope you're enjoying it and find it helpful."))})))}).catch(i=>{t({type:c.actionTypes.CHECK_UPDATE_FAILED}),e?t(a(c.modals.text,{title:"An error occured",message:s.createElement("div",null,s.createElement("div",null,"Sorry but we were not able to check if a new version is available."),s.createElement("div",null,"Please visit ",s.createElement(r,{onClick:()=>o(c.landingUrl)},c.landingUrl)," to manually check."))})):console.warn("Update endpoint failed, ignoring",n)})};const p=(e,t={})=>n=>{n({type:c.actionTypes.CHECK_UPDATE_SUCCESS}),n(a(c.modals.updateAvailable,{changelog:t,url:e}))};e.exports.displayUpdateAvailableModal=p,e.exports.resize=e=>({type:c.actionTypes.APP_RESIZE,width:e}),e.exports.displayTagContextMenu=(e,t,n,i)=>({type:c.actionTypes.DISPLAY_TAG_CONTEXT_MENU,positionX:n,positionY:i,props:{fileHashPath:e,tag:t}}),e.exports.closeContextMenu=()=>({type:c.actionTypes.CLOSE_CONTEXT_MENU});const d=(e,t)=>(l.trackEvent("app","mandatory-updte",window.__songRiffer.version),a(c.modals.updateAvailable,{changelog:t,mandatory:!0,url:e}));e.exports.setAllowFileDragging=e=>({type:c.actionTypes.SET_ALLOW_FILE_DRAGGING,allowFileDragging:e})},,function(e,t,n){const i=n(2).default,{colors:s}=n(1),r=i.input`
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
`;e.exports=r},function(e,t){const n=e=>`${e}`.length>1?`${e}`:`0${e}`;e.exports.formatDuration=e=>{const t=Math.floor(e/3600),i=Math.floor(e/60)%60,s=e%60,r=n(t);return`${t?`${r}:`:""}${n(i)}:${n(s)}`},e.exports.escapeFilePath=e=>e.replace(/\?/g,escape("?"));const i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"];e.exports.formatFileSize=e=>{const t=Math.floor(Math.log(e)/Math.log(1024));return e?(e/Math.pow(1024,t)).toFixed(2)+" "+i[t]:"0 Bytes"}},function(e,t,n){const i=n(1),s=n(90);e.exports.clearSearch=()=>({type:i.actionTypes.CLEAR_SEARCH}),e.exports.searchBasic=e=>(s.start("search"),{type:i.actionTypes.SEARCH_BASIC,term:e}),e.exports.searchTerm=e=>(s.start("search"),{type:i.actionTypes.SET_SEARCH,term:e}),e.exports.toggleAdvanced=()=>({type:i.actionTypes.TOGGLE_ADVANCED_SEARCH,__saveToDB__:!0,__db:i.db.app}),e.exports.searchTag=e=>(s.start("search"),{type:i.actionTypes.SEARCH_TAG,tag:e.trim()}),e.exports.removeSearchTag=e=>(s.start("search"),{type:i.actionTypes.REMOVE_SEARCH_TAG,tag:e}),e.exports.searchBPM=e=>(s.start("search"),{type:i.actionTypes.SEARCH_BPM,bpm:e}),e.exports.searchBPMDelta=e=>(s.start("search"),{type:i.actionTypes.SEARCH_BPM_DELTA,bpmDelta:e}),e.exports.transitionDone=()=>({type:i.actionTypes.ADVANCED_TRANSITION_DONE}),e.exports.setSearchArchived=e=>({type:i.actionTypes.SET_SEARCH_ARCHIVED,archived:e})},,,function(e,t,n){const i=n(141);e.exports.getTagAutocomplete=(e,t="",n=[])=>{if(!t.length)return null;const i=t.toLowerCase();let s=null;const r=n.reduce((e,t)=>(e[t.toLowerCase()]=!0,e),{});for(let t=0;t<e.length;t++)if(e[t].startsWith(i)&&!r[e[t]]){s=e[t];break}return s};const{colors:s,colorsDarkFont:r}=n(1),a=Object.keys(s).reduce((e,t)=>("_"!==t.substring(0,1)&&(e[t]=s[t]),e),{}),o=Object.keys(s).reduce((e,t)=>(e[s[t]]=t,e),{});e.exports.getFontColorForColor=e=>r[o[e]]?s._black:s._white;const l=i.from(a);const c={};e.exports.getTagColor=e=>{const t=e.toLowerCase();if(!c[t]){const e=function(e){const t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t}(function(e){let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return t}(t));c[t]=l(e).value}return c[t]}},function(e,t,n){const i={};e.exports=function(e,t,n,s){if(!Array.isArray(e))throw new Error("Expected sources to be an array.");if("function"!=typeof t)throw new Error("Expected the outputFunc to be a function.");if(!n)throw new Error("Missing selectorName argument.");let r=null;return(a,o,l,c)=>{const p=s||c;l&&(l=`@${n}_${l}`);const d=l?i[l]:r;let h=!!d;if(d&&!o&&d.previousState===a)return d.result;const u=e.map((e,t)=>{const n=e(a,o,e.__forwardMemoizationKey?l:void 0);return h&&(h=d.sourcesValues[t]===n),n});if(h)return p&&console.log(`%cSame result ${n}`,"color: green"),d.result;{const e=t(...u),s={sourcesValues:u,result:e,previousState:a};return l?i[l]=s:r=s,p&&console.log(`%cNew result ${n}`,"color: red"),e}}}},function(e,t,n){const i=n(2).default,{colors:s}=n(1);e.exports=i.a`
    color: ${s._white};
    text-decoration: underline;
    cursor: pointer;
`},function(e,t,n){const i=n(1);e.exports.playFile=e=>({type:i.actionTypes.PLAY_FILE,hashPath:e}),e.exports.togglePlay=()=>({type:i.actionTypes.TOGGLE_PLAY}),e.exports.pausePlayer=(e=!1)=>({type:i.actionTypes.PAUSE_PLAYER,unsetSelectedFile:!0})},,,,,,,,,,function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),r=n(5),a=n(2).default,{colors:o,noop:l}=n(1),c=n(36),p=a.div`
    display: ${e=>e.isFullWidth?"block":"inline-block"};
    position: relative;
`,d=a.div`
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
`,h=a.span`
    color: transparent;
`;class u extends s.PureComponent{constructor(...e){super(...e),i(this,"inputRef",s.createRef()),i(this,"onFocus",()=>{this.props.onFocus(this.inputRef)})}componentDidMount(){this.props.autoFocus&&this.inputRef.current.focus()}render(){const{autocomplete:e,autocompleteStyle:t,autoFocus:n,isFullWidth:i,onBlur:r,onChange:a,onKeyDown:o,style:l,tabIndex:u,type:m,value:g}=this.props,f=e?g.length:0;return s.createElement(p,{isFullWidth:!0},s.createElement(c,{isFullWidth:i,type:m,name:"tag-input",onFocus:this.onFocus,onBlur:r,onChange:a,onKeyDown:o,value:g,ref:this.inputRef,tabIndex:u,style:l,min:1}),s.createElement(d,{additionalStyle:t},s.createElement(h,null,g),e?`${"".repeat(f)}${e.slice(f,e.length)}`:null))}}i(u,"propTypes",{autocomplete:r.string,autocompleteStyle:r.string,autoFocus:r.bool,isFullWidth:r.bool,onBlur:r.func,onChange:r.func,onContextMenu:r.func,onFocus:r.func,onKeyDown:r.func,style:r.object,tabIndex:r.any,type:r.string,value:r.oneOfType([r.string,r.number])}),i(u,"defaultProps",{autocompleteStyle:"",onFocus:l,type:"text"}),e.exports=u},function(e,t,n){const i=n(1);e.exports.addNotification=(e,t,n="success")=>({type:i.actionTypes.ADD_NOTIFICATION,notification:{title:e,message:t,status:n}}),e.exports.removeNotification=()=>({type:i.actionTypes.REMOVE_NOTIFICATION}),e.exports.notifyMissingFile=e=>({type:i.actionTypes.NOTIFY_MISSING_FILE,file:e})},function(e,t,n){const{CLOUD_LEVEL:i}=n(1),s=(e,t)=>e.data.cloudLevel>=t;e.exports.hasCorrectCloudLevel=s,e.exports.hasUpload=e=>s(e,i.LEVEL_3)},function(e,t,n){const i=n(2).default,{colors:s}=n(1),r=`1px solid ${s._grey}`,a=`\n    padding: 7px;\n    cursor: pointer;\n    background: transparent;\n    transition: background ease 0.1s;\n    color: ${s._white};\n    border-bottom: ${r};\n\n    :hover {\n        background: ${s._blue};\n    }\n`,o=i.div`
    ${a}

    border-top: ${e=>e.first?r:"none"};
`;e.exports=o,e.exports.ModalLink=i.a`
    ${a}
    display: block;
    text-decoration: none;
`},function(e,t,n){"use strict";n.r(t),n.d(t,"getFilesDurationAndBPM",function(){return u}),n.d(t,"importFiles",function(){return g});var i=n(16);n.d(t,"VALID_PLAYABLE_EXTENSIONS",function(){return i.b});var s=n(17);const{extname:r}=n(28),{analyze:a}=n(232),{openModal:o}=n(24),{editFile:l}=n(13),c=n(7),p=n(1),d=new AudioContext,h=["gp","gp5","gpx",...i.b,"pdf"],u=(e,t,n=0)=>{const i=t[n];i&&fetch(i.escapedPath||i.path).then(e=>e.arrayBuffer()).then(r=>{d.decodeAudioData(r,async r=>{const a=await m(r),o=parseInt(r.duration,10);(a&&!i.bpm||o&&!i.duration)&&e(l(Object(s.getFilePathHash)(i.path),{duration:o,bpm:a},!0)),u(e,t,n+1)},i=>{u(e,t,n+1)})})},m=e=>new Promise(t=>{a(e).then(e=>{t(parseInt(e,10))}).catch(()=>{t(!1)})}),g=(e,t,n)=>{const a=t.reduce((t,n)=>{if(n.isDirectory)return alert("no directory support for now"),t;if(!(e=>{if(e.type.includes("audio"))return!0;const t=r(e.name).toLowerCase().replace(".","");return!!h.includes(t)})(n))return e(o(p.modals.invalidFile,{file:n})),t;const a=new i.a(n);return t[Object(s.getFilePathHash)(a.path)]=a.toJSON(),t},{});n(a);const l=Object.values(a);if(l.length){c.trackEvent("file","file-import","import",l.length);try{l.forEach(e=>{c.trackEvent("file","file-name",e.name.replace(r(e.name),""))})}catch(e){}u(e,l)}}},,,,,,,,,,,,,,,,,,,,function(e,t,n){const i=n(0),s=n(2).default,r=n(1),a=s.svg`
    width: 184px;
    animation: open 1s 1;
    animation-timing-function: ease;

    path {
        fill: ${r.colors._white};
    }
`;e.exports=({angle:e,opacity:t})=>i.createElement(a,{viewBox:"0 0 184 184",style:{transform:`rotate(${e})`,opacity:t}},i.createElement("defs",null,i.createElement("clipPath",{id:"logo-b"},i.createElement("path",{d:"M.625.621094h173.222656V172.8125H.625zm0 0"})),i.createElement("clipPath",{id:"logo-a"},i.createElement("path",{d:"M0 0h174v173H0z"})),i.createElement("g",{id:"logo-c",clipPath:"url(#logo-a)"},i.createElement("g",{clipPath:"url(#logo-b)"},i.createElement("path",{d:"M74.582031 172.8125C38.964844 168.527344 2.6875 137.164063.707031 90.839844-1.34375 42.832031 35.828125 2.527344 83.917969.6875c48.1875-1.84375 88.25 35.582031 89.878906 83.511719 1.597656 46.980469-33.316406 82.6875-72.476562 88.398437 19.148437-4.351562 34.371093-14.488281 44.898437-31.125 10.550781-16.671875 13.402344-34.8125 8.863281-53.988281-7.789062-32.925781-38.855468-55.480469-72.910156-52.960937-34.179687 2.53125-60.917969 29.121093-64.277344 62.5-3.667968 36.425781 20.996094 69.035156 56.6875 75.789062"})),i.createElement("path",{d:"M98.648438 43.191406c26.601562 4.265625 50.992187 29.03125 50.578125 61.816407-.425782 33.550781-27.953125 60.859375-61.640625 61.015625-34.027344.15625-61.777344-26.816407-62.382813-60.851563-.589844-33.167969 24.109375-57.722656 50.671875-62-13.480469 3.472656-24.113281 10.925781-31.328125 22.867188-7.238281 11.976562-9.089844 24.894531-5.632812 38.449218C44.835938 127.6875 66.75 143.6875 91.613281 141.742188c23.050782-1.796875 42.597657-20.574219 45.265625-43.804688 2.992188-26.046875-13.941406-49.007812-38.230468-54.746094"}),i.createElement("path",{d:"M77.851563 135.882813c-17.867188-3.527344-34.558594-20.648438-33.675782-43.578125C45.066406 69.074219 63.769531 50.925781 86.75 50.6875c22.921875-.238281 42.078125 17.277344 43.636719 40.015625 1.636719 23.878906-15.492188 41.902344-34.382813 45.359375 9.863282-2.820312 17.382813-8.597656 22.183594-17.707031 3.816406-7.234375 4.894531-14.949219 3.253906-22.9375-3.429687-16.707031-17.59375-27.996094-34.800781-27.90625-16.066406.085937-30.277344 11.945312-33.421875 27.992187-3.675781 18.753907 8.140625 35.945313 24.632813 40.378907"}),i.createElement("path",{d:"M94.582031 74.859375c12.640625 2.765625 24.214844 15.582031 22.679688 32.234375-1.402344 15.253906-14.769531 27.144531-30.539063 26.960938-15.433593-.183594-28.492187-12.589844-29.4375-28.011719-1.03125-16.753906 10.984375-28.699219 22.878907-31.160156-6.007813 2.042968-10.726563 5.691406-13.875 11.230468-3.164063 5.566407-3.996094 11.523438-2.496094 17.730469 2.628906 10.910156 12.324219 18.484375 23.511719 18.488281 11.253906.007813 20.894531-7.589843 23.613281-18.539062 2.628906-10.578125-2.609375-24.527344-16.335938-28.933594"}))),i.createElement("use",{xlinkHref:"#logo-c"}))},,,,,,,,,,function(e,t,n){function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}const s=n(0),r=n(2).default,a=n(89),{getTagColor:o,getFontColorForColor:l}=n(41),{colors:c}=n(1),p=r(a)`
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
`,d=r.div`
    max-width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,h=r.div`
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
`,u=s.forwardRef((e,t)=>{const{additionalStyle:n,children:r,deleteTitle:a,onDelete:l}=e,c=o(r),u={...e};return delete u.onDelete,s.createElement(p,i({},u,{color:c,additionalStyle:n,ref:t}),s.createElement(d,null,r),l?s.createElement(h,{title:a,onClick:l,color:c},"x"):null)});e.exports=u},function(e,t,n){const i=n(2).default.span`
    display: inline-block;
    padding: 2px 8px;
    margin-right: 3px;
    border-radius: 7px;
    cursor: pointer;
    transition: background ease 0.1s;
`;e.exports=i},function(e,t,n){const i=n(7),s=!1;e.exports=new class{constructor(){var e,t,n;n={},(t="eventsRunning")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}start(e){this.eventsRunning[e]=+new Date}end(e){if(!this.eventsRunning[e])return void(s&&console.warn(`[RUM] Event ${e} not started`));const t=+new Date-this.eventsRunning[e];delete this.eventsRunning[e],i.trackTiming("rum",e,t),s&&console.log(`[RUM] Event ${e} ran in ${t}ms`)}}},function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const{extname:o}=n(28),l=n(0),c=n(5),p=n(2).default,{connect:d}=n(6),{Spring:h}=n(15),u=n(149),m=n(150),g=n(92),f=n(151),E=n(152),v=n(93),{formatDuration:y}=n(37),{openModal:b}=n(24),{addTag:T,handleFileOpen:x,setBPM:S,setRating:_,setTimeSignature:C}=n(13),{displayTagContextMenu:w}=n(34),A=n(1),R=p(g)`
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

    .play-button{
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

    box-shadow: ${e=>e.uploading?`inset 2px 0px 0 ${A.colors.bluePastel}`:e.uploaded?`inset 2px 0px 0 ${A.colors.blueGreen}`:"none"}
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
`;let O=d((e,t)=>({playing:t.selected&&e.player.playing}))((r=s=class extends l.PureComponent{constructor(...e){super(...e),a(this,"onDoubleClick",()=>{this.props.dispatch(x(this.props.file))}),a(this,"addTag",e=>{this.props.dispatch(T(this.props.file.hashPath,e))}),a(this,"onTagContextMenu",(e,t,n)=>{this.props.dispatch(w(this.props.file.hashPath,e,t,n))}),a(this,"setRating",e=>{this.props.dispatch(_(this.props.file.hashPath,e))}),a(this,"onTagClick",e=>{this.props.onTagClick(e)}),a(this,"saveBPM",e=>{parseInt(e,10)<0||this.props.dispatch(S(this.props.file.hashPath,e))}),a(this,"saveTimeSignature",e=>{this.props.dispatch(C(this.props.file.hashPath,e))}),a(this,"onTimeSignatureFocus",e=>{const t=e.current.value.split("/");e.current.setSelectionRange(0,t[0].length)}),a(this,"openOptionsModal",()=>{this.props.dispatch(b(A.modals.fileOptions,{file:this.props.file}))}),a(this,"onClickMissing",()=>{this.props.dispatch(b(A.modals.fileMissing,{fileHashPath:this.props.file.hashPath}))}),a(this,"openTagModal",()=>{this.props.dispatch(b(A.modals.tags,{fileHashPath:this.props.file.hashPath}))}),a(this,"openCommentModal",()=>{this.props.dispatch(b(A.modals.comment,{fileHashPath:this.props.file.hashPath}))})}renderFile(e){return this.props.file.newImport?l.createElement(h,{from:{background:"rgba(255, 255, 255, 0.4)"},to:{background:"rgba(255, 255, 255, 0)"},config:{duration:3e3}},({background:t})=>l.createElement("div",{style:{background:t}},e)):e}render(){const{file:e,playing:t,selected:n}=this.props,i=o(e.name),s=e.name.replace(i,"");return this.renderFile(l.createElement(R,{archived:e.archived,hasComment:e.hasComment(),isPlayable:e.isPlayable(),onDoubleClick:this.onDoubleClick,playing:t,selected:n,id:`file-${e.hashPath}`,uploaded:e.uploaded},l.createElement(L,null,l.createElement(k,{className:"play-button",onClick:this.onDoubleClick},l.createElement(f,null)),l.createElement(D,{title:e.name},s,l.createElement(F,null,i)),e.missing&&!e.uploaded?l.createElement(P,{onClick:this.onClickMissing,title:"We could not locate this file - click to replace it or remove it from your library"},"!"):null,!e.missing||e.missing&&e.hasComment()?l.createElement(u,{className:"comment-icon",hasComment:e.hasComment(),onClick:this.openCommentModal}):null),l.createElement(I,null,e.duration?y(e.duration):"--:--"),l.createElement(v,{addTag:this.addTag,limitedLayout:!0,openTagModal:this.openTagModal,onTagClick:this.onTagClick,onTagContextMenu:this.onTagContextMenu,tags:e.getTags()}),l.createElement(I,null,l.createElement(m,{value:e.bpm,placeholder:"+",onSave:this.saveBPM,type:"number"})),l.createElement(I,null,l.createElement(m,{onFocus:this.onTimeSignatureFocus,onSave:this.saveTimeSignature,value:e.timeSignature})),l.createElement(I,null,l.createElement(E,{onChange:this.setRating,rating:e.rating})),l.createElement(M,{title:"Click for more actions on this riff",onClick:this.openOptionsModal},"•••")))}},a(s,"propTypes",{dispatch:c.func,file:c.object.isRequired,onTagClick:c.func,selected:c.bool}),i=r))||i;e.exports=O},function(e,t,n){const i=n(2).default.div`
    display: grid;
    grid-template-columns: 300px 80px 1fr 70px 100px 100px 5px;
    grid-gap: 0;
    padding: 0 5px;
    border-bottom: 1px solid #444;
`;e.exports=i},function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),l=n(2).default,c=n(5),{connect:p}=n(6),d=n(88),h=n(89),u=n(154),m=n(33),{colors:g}=n(1),f=l.div`
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
`;let y=p(e=>({advancedTransitionDone:m(e).advancedTransitionDone,appWidth:e.application.appWidth}))((r=s=class extends o.PureComponent{constructor(...e){super(...e),a(this,"state",{editTag:!1,firstVisibleTag:!1,fitInput:!0,limitedLayout:!1,sliceTags:!1,visibleTags:this.props.tags.length}),a(this,"rootRef",o.createRef()),a(this,"tagsRef",{}),a(this,"startEditTag",()=>{this.setState({editTag:!0},this.calculateVisibleTags)}),a(this,"onTagContextMenu",(e,t)=>{this.props.onTagContextMenu(t,e.clientX,e.clientY)}),a(this,"onTagClick",e=>{this.props.onTagClick(e)}),a(this,"addTag",e=>{this.props.addTag(e)}),a(this,"quitTagEdit",()=>{this.setState({editTag:!1},this.calculateVisibleTags)}),a(this,"calculateVisibleTags",()=>{if(!this.props.limitedLayout||!this.props.tags.length)return;const e=this.rootRef.current.offsetWidth,t=Object.values(this.tagsRef).filter(Boolean),{tagsTotalWidth:n,visibleTags:i}=t.reduce((t,n)=>(t.tagsTotalWidth+=n.offsetWidth+3,t.tagsTotalWidth<e-26&&t.visibleTags++,t),{tagsTotalWidth:0,visibleTags:0});if(i!==t.length&&(this.setState({visibleTags:i-1}),this.state.editTag||this.setState({sliceTags:!0})),this.state.editTag&&n+100>e){const{firstVisibleTag:n}=t.reverse().reduce((n,i,s)=>(n.tagsTotalWidth+=i.offsetWidth+3,n.tagsTotalWidth>e&&!n.firstVisibleTag&&(n.firstVisibleTag=t.length-(s+1)),n),{firstVisibleTag:!1,tagsTotalWidth:100});this.setState({firstVisibleTag:n,fitInput:!1})}else this.setState({fitInput:!0})})}componentDidMount(){this.calculateVisibleTags()}componentDidUpdate(e){(e.tags.length||this.props.tags.length)&&(e.tags!==this.props.tags||e.appWidth!==this.props.appWidth||!e.advancedTransitionDone&&this.props.advancedTransitionDone)&&this.setState({sliceTags:!1,visibleTags:this.props.tags.length},this.calculateVisibleTags)}render(){const{limitedLayout:e,openTagModal:t,tags:n}=this.props,{editTag:i,firstVisibleTag:s,fitInput:r,sliceTags:a,visibleTags:l}=this.state;return o.createElement(f,{ref:this.rootRef,additionalStyle:this.props.rootStyle,limitedLayout:e,editTag:i,moveForInput:!r},n.slice(0,a?l:n.length).map((e,t)=>o.createElement(d,{key:e,onContextMenu:t=>this.onTagContextMenu(t,e),onClick:()=>this.props.onTagClick(e),title:`Click to search all files with the tag "${e}"`,ref:t=>this.tagsRef[e]=t,additionalStyle:i&&!r&&!1!==s&&t===s?"\n    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%);\n":""},e)),a?o.createElement(v,{onClick:t,title:`${n.length-l} tags hidden, click to see them and add more`},n.length-Math.max(0,l),"+"):o.createElement(o.Fragment,null,i?o.createElement(u,{addTag:this.addTag,blacklist:n,inputWidth:100,quitTagEdit:this.quitTagEdit}):o.createElement(E,{className:"add-tag",onClick:this.startEditTag,style:{width:26,height:22}},"+")))}},a(s,"propTypes",{advancedTransitionDone:c.bool,appWidth:c.number,dispatch:c.func,limitedLayout:c.bool,openTagModal:c.func,onTagClick:c.func,onTagContextMenu:c.func,tags:c.array}),a(s,"defaultProps",{onTagContextMenu:()=>{}}),i=r))||i;e.exports=y},,,,,,,,,,,,,,,function(e,t,n){n(0);const i=n(2).default,s=n(36),{colors:r}=n(1),a=i(s)`
    width: 100%;
    min-width: 420px;
    padding: 5px 7px;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid ${r._white};
    transition: border ease 0.1s;
    color: ${r._white};

    :focus {
        border-bottom: 1px solid ${r.blueLight};
        color: ${r.blueLight};
    }
`;e.exports=a},function(e,t,n){const i=n(0),s=n(2).default,{colors:r}=n(1),a=s.svg`
    fill: ${e=>e.color};
`;e.exports=({color:e=r.green,width:t})=>i.createElement(a,{viewBox:"0 0 16 16",width:t,color:e},i.createElement("polygon",{stroke:"none",fillRule:"evenodd",points:"2.6 7.4 1 9.2 5.3 14 15 3.8 13.3 2 5.3 10.4"}))},function(e,t,n){const i=n(0),s=n(2).default,{colors:r}=n(1),a=s.svg`
    fill: ${r._white};
    opacity: 0.7;
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;e.exports=()=>i.createElement(a,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30"},i.createElement("path",{d:"M5 6.005c0-1.107 0.887-2.005 1.998-2.005h4.004c1.104 0 1.998 0.897 1.998 2.005v19.99c0 1.107-0.887 2.005-1.998 2.005h-4.004c-1.104 0-1.998-0.897-1.998-2.005v-19.99zM19 6.005c0-1.107 0.887-2.005 1.998-2.005h4.004c1.104 0 1.998 0.897 1.998 2.005v19.99c0 1.107-0.887 2.005-1.998 2.005h-4.004c-1.104 0-1.998-0.897-1.998-2.005v-19.99z"}))},function(e,t,n){const i=n(0),s=n(2).default,{colors:r}=n(1),a=s.svg`
    fill: ${r._white};
    opacity: 0.7;
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;e.exports=()=>i.createElement(a,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30"},i.createElement("path",{d:"M27.944 14.237c.18.1.316.2.436.314.143.138.267.297.368.48.027.046.05.094.073.142.124.275.18.553.18.828 0 .275-.056.553-.174.817-.092.205-.22.396-.378.563-.148.156-.32.285-.504.383L9.97 27.748c-.964.537-2.182.19-2.718-.777C6.998 26.516 7 25.24 7 25V6c0-1.1.826-1.932 1.87-1.996.107-.007.213-.006.32.005.364.03.7.158.98.352l17.774 9.875z"}))},function(e,t,n){const i=n(1);e.exports.recorderFileAlreadyExists=e=>({type:i.actionTypes.RECORDER_FILE_ALREADY_EXISTS,fileName:e}),e.exports.reset=()=>({type:i.actionTypes.RECORDER_RESET}),e.exports.recorderSaveSuccess=e=>({type:i.actionTypes.RECORDER_SAVE_SUCCESS,filePath:e})},function(e,t,n){const i=n(1),s=n(12),r=n(29);e.exports.signIn=e=>(r(`User sign in - ${e.email}`),{type:i.actionTypes.AUTH_SET_USER,user:e}),e.exports.setFullUserData=e=>({type:i.actionTypes.AUTH_SET_FULL_USER_DATA,data:e}),e.exports.signOut=()=>(s.signOut(),{type:i.actionTypes.AUTH_SIGN_OUT}),e.exports.notLogged=()=>({type:i.actionTypes.AUTH_NOT_LOGGED})},function(e,t,n){function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}const s=n(0),r=n(5),a=n(2).default,{Spring:o}=n(15),{colors:l}=n(1),c=a.svg`
    width: ${e=>e.width}px;
`,p=({animated:e=!1,fullDetail:t=!1,width:n=20})=>{const r={};return t?r.fillOpacity=0:r.fill=l.blueLight,s.createElement(c,{width:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"239.466 189.649 110.527 167.811"},s.createElement("defs",null,s.createElement("path",{d:"M326.99 193.65c11.05 0 20 8.95 20 20v120.81c0 11.05-8.95 20-20 20h-64.52c-11.05 0-20-8.95-20-20V213.65c0-11.05 8.95-20 20-20h64.52z",id:"transfer-a"}),s.createElement("path",{d:"M334.73 281.13L294.77 320l-40.04-38.78 25.36-.03-.05-41.17 29.35-.04.05 41.18 25.29-.03z",id:"transfer-b"}),s.createElement("path",{d:"M302.77 198.69a8.04 8.04 0 11-16.08 0 8.04 8.04 0 0116.08 0z",id:"transfer-c"})),s.createElement("use",i({xlinkHref:"#transfer-a"},r,{stroke:l.blueLight,strokeWidth:"6"})),e?s.createElement(o,{delay:500,from:{opacity:0},to:{opacity:1}},e=>s.createElement("use",{xlinkHref:"#transfer-b",fill:l.blueLight,fillOpacity:e.opacity,stroke:l.blueLight,strokeWidth:"2"})):s.createElement("use",{xlinkHref:"#transfer-b",fill:l.blueLight,stroke:l.blueLight,strokeWidth:"2"}),s.createElement("g",null,s.createElement("use",{xlinkHref:"#transfer-c",fill:l.blueLight})))};p.propTypes={animated:r.bool,fullDetail:r.bool,width:r.number},e.exports=p},function(e,t,n){const i=n(1);e.exports.setFileList=e=>({type:i.actionTypes.TRANSFER_SET_FILE_LIST,files:e}),e.exports.startTansfer=e=>({type:i.actionTypes.TRANSFER_START_TRANFER,fileName:e}),e.exports.transferSaveSuccess=(e,t)=>({type:i.actionTypes.TRANSFER_SAVE_SUCCESS,fileName:e,filePath:t}),e.exports.reset=()=>({type:i.actionTypes.TRANSFER_RESET})},,,,,,,,function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return R});var i,s,r;n(16);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(28);const o=n(0),l=n(2).default,c=n(5),{connect:p}=n(6),d=n(109),h=n(30),u=n(19),m=n(114),{selectUser:g}=n(18),{copyToClipboard:f,saveMedia:E}=n(11),{addFiles:v}=n(13),{reset:y,setFileList:b,startTansfer:T}=n(115),x=n(7),S=n(1),_=l.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`,C=l.div`
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
`,w=l.div`
    margin-bottom: 25px;
`,A=l.div`
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
`;let R=p(e=>({transfer:e.transfer,user:g(e)}))((r=s=class extends o.Component{constructor(...t){super(...t),a(this,"state",{awaitingHello:!0,code:"",ready:!1}),a(this,"_mounted",!1),a(this,"getEmailHash",async e=>{const t=(new TextEncoder).encode(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,"0")).join("")}),a(this,"onReady",async()=>{if(!this._mounted)return;const e=await this.getEmailHash(this.props.user.email),t=await this.generateRandomCode();this.setState({code:t,hash:e,ready:!0}),this.peer=new Peer(`SongRiffer-${e}-${t}`),this.peer.on("connection",e=>{e.on("data",this.onReceiveData)}),this.peer.on("error",this.onPeerError)}),a(this,"onPeerError",e=>{x.exception(`Peer error ${e}`),console.log(e)}),a(this,"onReceiveData",e=>{if(e.type)switch(e.type){case"READY_TO_SEND":x.trackEvent("transfer","ready-to-receive"),e.hash===this.state.hash&&(console.log("### receive hash",e.hash),this.setState({awaitingHello:!1}));break;case"FILE_LIST":console.log("### receive file list",e.files),x.trackEvent("transfer","receive-file-list",e.files.length);const t=e.files.reduce((e,t)=>(e[t]={receiving:!1,transfered:!1,success:!1},e),{});this.props.dispatch(b(t));break;case"FILE_TRANSFER_START":console.log("### file transfer start",e.fileName),x.trackEvent("transfer","start-transfer"),this.props.dispatch(T(e.fileName));break;case"FILE_TRANSFER":e.fileName&&(x.trackEvent("transfer","stop-transfer",e.fileName),console.log("### receive file",e.data),E(S.saveTypes.TRANSFER,e.fileName,new Uint8Array(e.data)))}else console.error("invalid message",e)}),a(this,"importFile",e=>{x.trackEvent("file","file-import","transfer",1);const t=this.props.transfer.files[e],n={name:e,path:t.filePath,source:S.sources.TRANSFER},i=new File(n);this.props.dispatch(v({[t.filePath]:i.toJSON()},!0))}),a(this,"copyCode",()=>{f(this.state.code)}),a(this,"loadPeerSDK",()=>{if(document.querySelector("#peerjs-sdk"))this.onReady();else{const t=e.document.createElement("script");t.src="https://unpkg.com/peerjs@1.0.0/dist/peerjs.min.js",t.onload=this.onReady,t.id="peerjs-sdk",e.document.body.appendChild(t)}})}generateRandomCode(){return Math.random().toString(36).substring(2,6).toUpperCase()}getContent(){const{transfer:e}=this.props;if(!this.state.ready)return o.createElement("div",null,"Loading...");if(this.state.awaitingHello)return o.createElement(_,null,o.createElement(u,null,o.createElement(m,{animated:!0,fullDetail:!0,width:70})),o.createElement("div",null,"Visit https://songriffer.com/transfer on your phone and use this code to start transfering files:"),o.createElement(C,{onClick:this.copyCode,title:"Click to copy to clipboard"},this.state.code));if(Object.keys(e.files).length){const t=Object.keys(e.files).every(t=>e.files[t].transfered);return o.createElement(o.Fragment,null,o.createElement(w,null,t?"All files succesfully transfered":"Transfering files:"),Object.keys(e.files).map(t=>{const n=e.files[t];return o.createElement(A,{key:t,transfered:n.transfered,receiving:n.receiving},o.createElement("div",null,t),n.transfered?o.createElement(d,{width:"18",color:S.colors.greenLight}):null)}))}return o.createElement("div",null,"Waiting for files to transfer...")}componentDidMount(){this._mounted=!0,x.trackScreen("transfer"),this.loadPeerSDK()}componentDidUpdate(e){Object.keys(e.transfer.files).forEach(t=>{!e.transfer.files[t].success&&this.props.transfer.files[t].success&&this.importFile(t)})}componentWillUnmount(){this._mounted=!1,this.peer&&this.peer.destroy(),this.props.dispatch(y())}render(){return o.createElement(h,{wrapperStyle:"\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"},this.getContent())}},a(s,"propTypes",{dispatch:c.func,transfer:c.object}),i=r))||i}).call(this,n(10))},,,,,,,,,,,,,,,function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),{connect:l}=n(6),c=n(2).default,p=n(5),d=n(32),h=n(88),u=n(36),m=n(54),g=n(143),{getTagAutocomplete:f}=n(41),E=n(33),{selectTags:v}=n(9),{clearSearch:y,removeSearchTag:b,searchBPM:T,searchBPMDelta:x,searchTerm:S,searchTag:_,setSearchArchived:C,transitionDone:w}=n(38),A=n(1),R=c.div`
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
`;let N=l(e=>({allTags:v(e),search:E(e),visible:E(e).displayAdvanced}))((r=s=class extends o.Component{constructor(...e){super(...e),a(this,"state",{autocompleteTag:null,newTag:""}),a(this,"rootRef",o.createRef()),a(this,"nameInputRef",o.createRef()),a(this,"searchName",e=>{this.props.dispatch(S(e.target.value))}),a(this,"onBPMChange",e=>{this.props.dispatch(T(e.target.value))}),a(this,"onBPMDeltaChange",e=>{this.props.dispatch(x(e.target.value))}),a(this,"onTagChange",e=>{const t=Object.keys(this.props.search.tags);this.setState({autocompleteTag:f(this.props.allTags,e.target.value,t),newTag:e.target.value})}),a(this,"onTagKeyDown",e=>{if("Tab"===e.key&&this.state.autocompleteTag)return this.props.dispatch(_(this.state.autocompleteTag)),e.preventDefault(),void this.quitTagEdit();"Enter"===e.key&&(this.props.dispatch(_(e.target.value)),this.quitTagEdit())}),a(this,"clearSearch",()=>{this.props.dispatch(y())}),a(this,"removeTag",e=>{this.props.dispatch(b(e))}),a(this,"onTransitionEnd",()=>{this.props.dispatch(w())}),a(this,"onSwitchArchived",e=>{e.target.checked?this.props.dispatch(C(A.searchArchived.ALL)):this.props.dispatch(C(A.searchArchived.NON_ARCHIVED))})}quitTagEdit(){this.setState({autocompleteTag:null,newTag:""})}shouldComponentUpdate(e){return this.props.visible||e.visible}componentDidMount(){this.rootRef.current.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})}componentWillUnmout(){this.rootRef.current.removeEventListener("transitionend",this.onTransitionEnd)}render(){const{search:e,visible:t}=this.props,{autocompleteTag:n,newTag:i}=this.state,s=e.term.length||e.bpm||Object.keys(e.tags).length,r=t?void 0:-1;return o.createElement(R,{visible:t,ref:this.rootRef},o.createElement(k,null,o.createElement(F,null,o.createElement(L,null,"Name"),o.createElement(u,{isFullWidth:!0,type:"text",onChange:this.searchName,value:e.term,tabIndex:r,id:"advanced-search-input",ref:this.nameInputRef})),o.createElement(F,null,o.createElement(L,null,"Tags"),o.createElement(m,{isFullWidth:!0,autocomplete:n,autocompleteStyle:"\n    top: 3px;\n    left: 2px;\n",onChange:this.onTagChange,onKeyDown:this.onTagKeyDown,value:i,tabIndex:r}),Object.keys(e.tags).length?o.createElement(I,null,Object.keys(e.tags).map(e=>o.createElement(h,{key:e,onDelete:()=>this.removeTag(e),deleteTitle:"Remove this tag from the search",additionalStyle:"\n    margin-bottom: 5px;\n"},e))):null),o.createElement(F,null,o.createElement(L,null,"Tempo"),o.createElement(M,null,o.createElement(O,{type:"number",onChange:this.onBPMChange,value:e.bpm,min:1,tabIndex:r}),o.createElement("span",null,"bpm + / - "),o.createElement(O,{type:"number",onChange:this.onBPMDeltaChange,value:e.bpmDelta,title:e.bpm?`Results will include riffs that have a tempo between ${e.bpm-10} and ${e.bpm+10}`:null,min:0,tabIndex:r}))),o.createElement(D,null,o.createElement(P,null,"Show archived files"),o.createElement(g,{onChange:this.onSwitchArchived,checked:e.archived===A.searchArchived.ALL})),s?o.createElement(d,{onClick:this.clearSearch,tabIndex:r},"Clear search"):null))}},a(s,"propTypes",{allTags:p.any,dispatch:p.func,search:p.object,visible:p.bool}),i=r))||i;e.exports=N},function(e,t,n){const i=n(28),s=n(140),r=i.join(s.homedir(),"SongRiffer/Recorder"),a=i.join(s.homedir(),"SongRiffer/Transfer");e.exports={backgroundColor:"#121212",events:{CHECK_FILE_EXISTS:"CHECK_FILE_EXISTS",CHECK_FILES:"CHECK_FILES",CHECK_FILES_DB_EXISTS:"CHECK_FILES_DB_EXISTS",CHECK_FILES_DB:"CHECK_FILES_DB",CLEAR_DB:"CLEAR_DB",DATA_FETCHED:"DATA_FETCHED",FETCH_DATA:"FETCH_DATA",FILE_ALREADY_EXISTS:"FILE_ALREADY_EXISTS",FILE_SAVE_SUCCESS:"FILE_SAVE_SUCCESS",FILE_SYSTEM_ERROR:"FILE_SYSTEM_ERROR",GET_MXLM:"GET_MXLM",GET_MXLM_SUCCESS:"GET_MXLM_SUCCESS",MISSING_FILES:"MISSING_FILES",OPEN_DEEPLINK:"OPEN_DEEPLINK",RELOAD:"RELOAD",SAVE_DATA:"SAVE_DATA",SAVE_MEDIA:"SAVE_MEDIA",TOGGLE_DEVTOOLS:"TOGGLE_DEVTOOLS",UNLINK_FILE:"UNLINK_FILE"},saveTypesFolder:{RECORDER:r,TRANSFER:a},RECORDER_BASE_PATH:r,TRANSFER_BASE_PATH:a,windowStateFileName:"window-state-app-songriffer.json"}},,,,function(e,t,n){const i=n(0),s=n(2).default,{colors:r}=(n(5),n(1)),a=s.label`
    display: block;
    position: relative;
    width: 48px;
    height: 28px;
    margin-right: 1px;
    border-radius: 50px;
    border: 1px solid ${r._blue}
    background: ${e=>e.checked?r._blue:"transparent"};
    cursor: pointer;
    transition: background ease 0.3s;

    :after {
        position: absolute;
        content: '';
        width: 18px;
        height: 18px;
        border-radius: 100%;
        background: ${r._white};
        transform: translateX(${e=>e.checked?"25px":"5px"});
        top: 4px;
        transition: transform 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
`;e.exports=({checked:e,onChange:t})=>i.createElement(i.Fragment,null,i.createElement(a,{checked:e},i.createElement("input",{type:"checkbox",style:{display:"none"},onChange:t,checked:e})))},function(e,t,n){var i;const s=n(0),{connect:r}=n(6),a=n(2).default.div`
    position: absolute;
    width: 100%;
    height: 20px;
    ${e=>e.hasNotification?"":"-webkit-app-region: drag;"}
    top: 0;
    left: 0;
`;let o=r(e=>({notification:e.notifications.notification}))(i=class extends s.Component{render(){const{notification:e}=this.props;return s.createElement(a,{hasNotification:e.active})}})||i;e.exports=o},function(e,t,n){const i=n(0),s=n(2).default,r=n(32),a=n(43),o=n(19),{openLink:l,reload:c}=n(11),p=n(1),d=s.div`
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
`,g=s(r)`
    padding: 5px 10px;
`;e.exports=()=>i.createElement(d,null,i.createElement(h,null,"Woops, something went wrong :("),i.createElement(u,null,"Sorry about that, it seems something is broken."),i.createElement(m,null,i.createElement(g,{onClick:c},"Restart the app")),i.createElement(o,{size:"xs"},"If you think something is not right, feel free to contact us for support:"),i.createElement(o,{size:"xs"},i.createElement(a,{href:`mailto:${p.email}`},"Send us an email")),i.createElement(o,{size:"xs"},i.createElement(a,{onClick:()=>l(p.messengerUrl)},"Write to us on Messenger")))},function(e,t,n){const i=n(0),s=n(2).default,{colors:r}=n(1),a=s.svg`
    width: 15px;
    height: 15px;
    margin-left: 2px;
    transform: rotate(${e=>e.rotate?"180deg":"0deg"});

    fill: ${r.blueLight};
`;e.exports=({rotate:e})=>i.createElement(a,{viewBox:"0 0 10 5",rotate:e},i.createElement("path",{fillRule:"evenodd",d:"M0 0h10L5 6"}))},,,function(e,t,n){const i=n(0),s=n(2).default,r=n(5),{colors:a}=n(1),o=s.svg`
    width: 25px;
    height: 25px;
    margin-top: 6px;
    transition: opacity ease 0.1s;
    opacity: ${e=>e.hasComment?.6:.4};
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;class l extends i.Component{render(){const{className:e,hasComment:t,onClick:n}=this.props;return i.createElement(o,{hasComment:t,onClick:n,className:e,title:t?"Edit this file's comment":"Add a comment for this file"},i.createElement("use",{xlinkHref:"#commentIcon"}))}}var c,p,d;c=l,p="propTypes",d={hasComment:r.bool,onClick:r.func},p in c?Object.defineProperty(c,p,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[p]=d,e.exports=l},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),r=n(5),a=n(2).default,o=n(54),{noop:l}=n(1),c=a.div`
    cursor: pointer;
`;class p extends s.Component{constructor(...e){super(...e),i(this,"state",{edit:!1,_value:this.props.value||""}),i(this,"onClick",()=>{this.setState({edit:!0})}),i(this,"onKeyDown",e=>{"Enter"===e.key&&this.props.onSave(this.state._value),"Enter"!==e.key&&"Escape"!==e.key||this.setState({edit:!1})}),i(this,"onBlur",()=>{this.props.onSave(this.state._value),this.setState({edit:!1})}),i(this,"onChange",e=>{this.setState({_value:e.target.value})})}render(){const{onFocus:e,placeholder:t,type:n,value:i}=this.props,{edit:r,_value:a}=this.state;return r?s.createElement(o,{autoFocus:!0,onBlur:this.onBlur,onChange:this.onChange,onFocus:e,onKeyDown:this.onKeyDown,value:a,style:{width:"100%"},type:n}):s.createElement(c,{onClick:this.onClick,title:"Click to edit"},i||t)}}i(p,"propTypes",{onFocus:r.func,onSave:r.func,placeholder:r.string,type:r.string,value:r.oneOfType([r.string,r.number])}),i(p,"defaultProps",{onFocus:l,type:"text"}),e.exports=p},function(e,t,n){const i=n(0),s=n(2).default,{colors:r}=n(1),a=s.svg`
    width: 12px;
    fill: ${r._white};
    opacity: 0.5;

    :hover {
        opacity: 1;
    }
`;e.exports=()=>i.createElement(a,{viewBox:"0 0 32 32"},i.createElement("use",{xlinkHref:"#playIcon"}))},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),r=n(5),a=n(2).default,o=n(153),l=a.div`
    cursor: pointer;
`;class c extends s.Component{constructor(...e){super(...e),i(this,"state",{starsHover:!1}),i(this,"setRating",e=>{this.props.onChange(e)}),i(this,"onMouseEnter",e=>{this.setState({starsHover:e})}),i(this,"onMouseLeave",()=>{this.setState({starsHover:!1})})}render(){const{rating:e}=this.props,{starsHover:t}=this.state,n=!1!==t?t:e;return s.createElement(l,null,Array(5).fill(0).map((e,t)=>s.createElement(o,{on:null!==n&&n>=t,key:`star-${t}`,onClick:this.setRating,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,value:t})))}}i(c,"propTypes",{onChange:r.func,rating:r.number}),e.exports=c},function(e,t,n){const i=n(0),s=n(2).default,{colors:r}=n(1),a=s.div`
    display: inline-block;
    padding-right: 3px;
`,o=s.svg`
    width: 12px;
    cursor: pointer;

    :hover {
        opacity: ${e=>e.on?.5:1};
    }
`,l=s.g`
    stroke: ${e=>e.on?"none":r._white};

    :hover {
        stroke: none;
    }
`,c=s.g`
    fill: ${e=>e.on?r._white:"transparent"};

    :hover {
        fill: ${r._white};
    }
`,p=i.memo(({on:e,onClick:t,onMouseEnter:n,onMouseLeave:s,value:r})=>i.createElement(a,{onClick:()=>t(r),on:e,onMouseEnter:()=>n(r),onMouseLeave:()=>s(r)},i.createElement(o,{viewBox:"0 0 38 37",xmlns:"http://www.w3.org/2000/svg"},i.createElement(l,{strokeWidth:"1",fill:"none",fillRule:"evenodd",on:e},i.createElement(c,{transform:"translate(-723.000000, -349.000000)",fillRule:"nonzero",on:e},i.createElement("g",{transform:"translate(297.000000, 191.000000)"},i.createElement("g",{transform:"translate(215.000000, 158.000000)"},i.createElement("path",{d:"M231.808476,1.13940625 L236.089018,9.81290625 C236.386684,10.4161563 236.962226,10.8341563 237.628018,10.9307396 L247.200059,12.3216979 C248.876809,12.5655313 249.545768,14.6254479 248.332934,15.8074063 L241.406643,22.5587396 C240.925309,23.0281979 240.705226,23.7050729 240.819226,24.3676979 L242.454018,33.9009479 C242.740601,35.5705729 240.987851,36.8435729 239.488434,36.0558646 L230.927351,31.5552396 C230.332018,31.2425313 229.620309,31.2425313 229.024976,31.5552396 L220.463893,36.0558646 C218.964476,36.8443646 217.211726,35.5705729 217.498309,33.9009479 L219.133101,24.3676979 C219.247101,23.7050729 219.027018,23.0281979 218.545684,22.5587396 L211.619393,15.8074062 C210.406559,14.6246562 211.075518,12.5647396 212.752268,12.3216979 L222.324309,10.9307396 C222.990101,10.8341563 223.565643,10.4161563 223.863309,9.81290625 L228.143851,1.13940625 C228.892768,-0.379802083 231.058768,-0.379802083 231.808476,1.13940625 Z"}))))))));e.exports=p},function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),{connect:l}=n(6),c=n(5),p=n(54),{selectTags:d}=n(9),{getTagAutocomplete:h}=n(41);let u=l(e=>({allTags:d(e)}))((r=s=class extends o.Component{constructor(...e){super(...e),a(this,"state",{autocompleteTag:null,newTag:""}),a(this,"onTagKeyDown",e=>{"Enter"===e.key&&this.state.newTag.length&&(this.resetTagWrite(),this.props.addTag(this.state.newTag)),"Tab"===e.key&&(this.state.autocompleteTag&&(this.resetTagWrite(),this.props.addTag(this.state.autocompleteTag)),e.preventDefault()),"Escape"===e.key&&(this.props.quitTagEdit(),e.preventDefault())}),a(this,"resetTagWrite",()=>{this.setState({autocompleteTag:null,newTag:""},this.calculateVisibleTags)}),a(this,"writeTag",e=>{this.setState({autocompleteTag:h(this.props.allTags,e.target.value,this.props.blacklist),newTag:e.target.value})})}render(){const{autocompleteTag:e,newTag:t}=this.state,{inputWidth:n,quitTagEdit:i}=this.props;return o.createElement(p,{autocomplete:e,autoFocus:!0,onBlur:i,onChange:this.writeTag,onKeyDown:this.onTagKeyDown,value:t,style:{width:n,height:22}})}},a(s,"propTypes",{addTag:c.func,allTags:c.any,blacklist:c.array,quitTagEdit:c.func}),i=r))||i;e.exports=u},,,,,,,,,,,,,,function(e,t,n){const i=n(0),s=n(2).default,{colors:r}=n(1),a=s.path`
    fill: ${r._white};
`;e.exports=()=>i.createElement("div",{style:{display:"none"}},i.createElement("svg",null,i.createElement("symbol",{id:"commentIcon",viewBox:"0 0 720 720"},i.createElement(a,{d:"m552.011719-1.332031h-464.023438c-48.515625 0-87.988281 39.464843-87.988281 87.988281v283.972656c0 48.414063 39.300781 87.816406 87.675781 87.988282v128.863281l185.191407-128.863281h279.144531c48.515625 0 87.988281-39.472657 87.988281-87.988282v-283.972656c0-48.523438-39.472656-87.988281-87.988281-87.988281zm50.488281 371.960937c0 27.835938-22.648438 50.488282-50.488281 50.488282h-290.910157l-135.925781 94.585937v-94.585937h-37.1875c-27.839843 0-50.488281-22.652344-50.488281-50.488282v-283.972656c0-27.84375 22.648438-50.488281 50.488281-50.488281h464.023438c27.839843 0 50.488281 22.644531 50.488281 50.488281zm0 0"}),i.createElement(a,{d:"m171.292969 131.171875h297.414062v37.5h-297.414062zm0 0"}),i.createElement(a,{d:"m171.292969 211.171875h297.414062v37.5h-297.414062zm0 0"}),i.createElement(a,{d:"m171.292969 291.171875h297.414062v37.5h-297.414062zm0 0"}))),i.createElement("svg",null,i.createElement("symbol",{id:"playIcon",viewBox:"0 0 32 32"},i.createElement(a,{d:"M27.944 14.237c.18.1.316.2.436.314.143.138.267.297.368.48.027.046.05.094.073.142.124.275.18.553.18.828 0 .275-.056.553-.174.817-.092.205-.22.396-.378.563-.148.156-.32.285-.504.383L9.97 27.748c-.964.537-2.182.19-2.718-.777C6.998 26.516 7 25.24 7 25V6c0-1.1.826-1.932 1.87-1.996.107-.007.213-.006.32.005.364.03.7.158.98.352l17.774 9.875z"}))))},function(e,t,n){const i=n(0),s=n(2).default,r=n(1),a=s.svg`
    width: 225px;
    height: 41px;
    path {
        fill: ${r.colors._white}
    }
    ${e=>e.s};
`;e.exports=({style:e=""})=>i.createElement(a,{s:e},i.createElement("defs",null,i.createElement("clipPath",{id:"logo-name-b"},i.createElement("path",{d:"M.359375.5625H40v38.066406H.359375zm0 0"})),i.createElement("clipPath",{id:"logo-name-c"},i.createElement("path",{d:"M6 10h29v28.628906H6zm0 0"})),i.createElement("clipPath",{id:"logo-name-d"},i.createElement("path",{d:"M210 11h12.085938v17H210zm0 0"})),i.createElement("clipPath",{id:"logo-name-a"},i.createElement("path",{d:"M0 0h223v39H0z"})),i.createElement("g",{id:"logo-name-e",clipPath:"url(#logo-name-a)"},i.createElement("g",{clipPath:"url(#logo-name-b)"},i.createElement("path",{d:"M26.722656 38.628906c8.09375-4.105468 10.417969-12.238281 8.667969-18.65625-1.835937-6.738281-7.867187-11.53125-14.597656-11.695312-7.203125-.179688-13.453125 4.15625-15.691406 10.558594-2.148438 6.160156-.453125 15.359375 8.351562 19.785156C7.757813 37.242188.132813 30.050781.363281 19.652344.585938 9.710938 8.890625 1.113281 18.882813.589844 29.363281.0429688 38.398438 7.523438 39.617188 18.011719c1.242187 10.710937-6.058594 18.621094-12.894532 20.617187"})),i.createElement("path",{d:"M122.683594 23.71875c1.039062 0 2.078125-.011719 3.117187.003906.507813.007813.820313-.089843.808594-.714843-.035156-1.835938.039063-3.675782-.042969-5.507813-.070312-1.527344-.769531-2.382812-2.167968-2.609375-1.894532-.304687-3.824219-.359375-5.710938.054688-1.671875.363281-2.382812 1.621093-2.445312 4.019531-.066407 2.59375.652343 4.070312 2.273437 4.535156.527344.152344 1.101563.1875 1.65625.210938.835938.035156 1.675781.007812 2.511719.007812m7.292969-.839844c0 2.117188.109375 4.242188-.023438 6.351563-.179687 2.777344-1.578125 4.203125-4.367187 4.496094-3.507813.367187-7.03125.082031-10.546875.152343-.457032.007813-.660157-.207031-.636719-.652343.003906-.039063.003906-.082032 0-.121094-.203125-2.546875-.203125-2.539063 2.324219-2.546875 2.4375-.007813 4.878906.035156 7.3125-.054688 1.808593-.066406 2.554687-1 2.574218-2.777343.007813-.675782-.195312-.910157-.875-.898438-1.800781.035156-3.601562-.042969-5.398437.023438-5.4375.195312-7.65625-2.988282-7.601563-8.058594.007813-.792969.132813-1.597656.308594-2.371094.644531-2.84375 2.421875-4.472656 5.355469-4.878906 2.183594-.300781 4.398437-.261719 6.582031-.058594 2.996094.28125 4.625 2.03125 4.980469 5.046875.246094 2.109375.042969 4.234375.011719 6.347656"}),i.createElement("g",{clipPath:"url(#logo-name-c)"},i.createElement("path",{d:"M15.371094 10.894531c-5.789063 2.964844-7.363281 8.558594-6.386719 12.832032 1.15625 5.058593 5.355469 8.65625 10.398438 8.960937 4.886718.296875 9.613281-2.746094 11.289062-7.296875 1.664063-4.523437.695313-10.261719-4.789062-13.890625 3.527343.164063 8.0625 6.761719 8.28125 12.042969.296875 7.261719-5.09375 13.578125-12.394532 14.527344-6.9375.902343-13.890625-3.855469-15.386718-10.53125-1.640625-7.308594 2.28125-14.597657 8.988281-16.644532"})),i.createElement("path",{d:"M54.777344 27.4375c-1.878906.003906-3.757813-.023437-5.636719.015625-.664062.011719-.890625-.179687-.914062-.867187-.117188-2.945313-.140625-2.945313 2.808593-2.945313 3 0 6 .03125 9-.015625 1.851563-.027344 2.859375-1.511719 2.265625-3.199219-.335937-.953125-1.09375-1.332031-2.011718-1.457031-1.871094-.265625-3.753907-.066406-5.632813-.132812-.71875-.023438-1.449219.007812-2.152344-.125-3.195312-.613282-4.859375-2.957032-4.59375-6.398438.25-3.246094 2.253907-5.230469 5.523438-5.292969 3.476562-.070312 6.957031 0 10.4375-.03125.710937-.007812.847656.261719.863281.90625.070313 2.867188.089844 2.867188-2.761719 2.867188-2.597656 0-5.199218-.027344-7.796875.007812-1.609375.023438-2.425781.789063-2.457031 2.175782-.027344 1.320312.695313 2.183593 2.101563 2.261718 1.875.105469 3.753906.066407 5.632812.121094.796875.023438 1.609375.042969 2.378906.222656 3.203125.730469 4.71875 3.09375 4.367188 6.679688-.308594 3.160156-2.378906 5.09375-5.664063 5.195312-1.917968.0625-3.835937.011719-5.757812.011719M141.667969 7c1.761719 0 3.519531-.019531 5.277344.003906 2.964843.046875 5.21875 1.777344 5.808593 4.421875.726563 3.265625-.484375 6.261719-3.167968 7.546875-.726563.347657-.734375.582032-.363282 1.199219 1.277344 2.121094 2.488282 4.28125 3.753907 6.410156.390625.65625.308593.851563-.496094.875-3.207031.089844-3.207031.109375-4.859375-2.71875-.847656-1.445312-1.730469-2.871093-2.550781-4.335937-.3125-.558594-.679688-.796875-1.328125-.773438-1.195313.042969-2.402344.066407-3.59375-.003906-.9375-.058594-1.152344.324219-1.125 1.183594.054687 1.878906-.015625 3.757812.03125 5.636719.019531.785156-.222657 1.011718-1.015625 1.015625-2.800782.007812-2.800782.039062-2.800782-2.789063 0-1.800781-.007812-3.601562.003907-5.398437.015625-2.324219.941406-3.277344 3.28125-3.304688 2.675781-.03125 5.355468.023438 8.035156-.023437 1.921875-.03125 3.066406-1.839844 2.371094-3.636719-.484375-1.242188-1.484375-1.554688-2.695313-1.550781-3.238281.007812-6.476562-.035157-9.714844.023437-1.023437.019531-1.382812-.21875-1.347656-1.3125C135.25 7.003906 135.191406 7 137.710938 7h3.957031M197.761719 18.359375h2.871094c.117187 0 .238281-.011719.355468-.019531 1.445313-.078125 2.113282-.617188 2.128907-1.71875.015625-1.160156-.722657-1.851563-2.132813-1.886719-1.589844-.039062-3.1875-.03125-4.78125-.011719-2.03125.03125-2.683594.78125-2.617187 2.820313.019531.625.207031.84375.828125.824219 1.113281-.03125 2.230468-.007813 3.347656-.007813m2.039062 9.121094c-1.519531 0-3.035156.023437-4.554687-.007813-2.992188-.066406-4.882813-1.871093-4.988281-4.847656-.074219-2.074219-.066407-4.15625-.003907-6.230469.085938-2.832031 1.605469-4.582031 4.445313-4.867187 2.65625-.269531 5.347656-.316406 8.007812.058594 2.53125.359375 3.875 2.183593 3.808594 4.964843-.0625 2.609375-1.386719 4.226563-3.933594 4.40625-2.464843.179688-4.949218.0625-7.421875.148438-.527343.015625-1.359375-.488281-1.550781.550781-.199219 1.078125.375 2.164063 1.328125 2.375.617188.136719 1.269531.160156 1.90625.164063 2.636719.015625 5.273438.027343 7.910156-.007813.765625-.007812 1.027344.214844 1.027344 1.019531-.007812 2.273438.03125 2.273438-2.261719 2.273438h-3.71875M78.390625 24.226563c.597656-.03125 1.195313-.046875 1.789063-.097657 2.109375-.179687 3.007812-.964843 3.351562-3.039062.203125-1.222656.214844-2.460938-.097656-3.683594-.425781-1.675781-1.265625-2.460937-2.972656-2.625-.949219-.089844-1.914063-.0625-2.871094-.058594-2.980469.015625-4.128906 1.113282-4.28125 4.0625-.222656 4.214844.902344 5.414063 5.082031 5.441407m.007813 3.253906c-.761719 0-1.519532.015625-2.277344-.003906-2.777344-.082032-5.023438-1.710938-5.820313-4.347657-.730468-2.425781-.742187-4.890625.011719-7.316406.757813-2.4375 2.464844-3.851562 4.984375-4.246094 1.945313-.304687 3.910156-.292968 5.847656-.0625 3.207032.378907 5.019532 2.078125 5.710938 5.242188.433594 1.972656.402344 3.96875-.101563 5.933594-.753906 2.953125-3.03125 4.730468-6.082031 4.796875-.757812.015625-1.515625.003906-2.273437.003906M91.519531 20c.003907-2.117187-.023437-4.238281.011719-6.355469.023438-1.519531.601563-2.210937 2.070313-2.214843 2.953125-.011719 5.910156-.210938 8.859375.144531 3.8125.464844 5.957031 2.816406 6.011718 6.640625.039063 2.757812-.019531 5.515625.019532 8.269531.011718.785156-.234375 1.015625-1.019532 1.015625C105 27.503906 105 27.539063 105 25.097656c0-2.195312.007813-4.394531-.003906-6.589843-.011719-2.136719-.921875-3.238282-3.050781-3.609375-2.097657-.371094-4.226563-.109375-6.339844-.175782-.84375-.027343-.679688.609375-.679688 1.097657-.007812 3.476562-.042968 6.953125.019532 10.429687.015625.996094-.25 1.285156-1.253907 1.253906-2.167968-.066406-2.171875-.011718-2.171875-2.230468V20M24.71875 30.238281c4.621094-3.769531 3.785156-9.359375.976563-12.136718-3.175782-3.140625-8.335938-3.050782-11.390625.191406-2.839844 3.015625-3.25 8.71875 1.53125 12.125-2.722657-.691406-5.917969-4.804688-5.539063-9.25.4375-5.128906 4.101563-8.761719 9.234375-9.214844 4.382813-.386719 9.011719 2.96875 10.054688 7.289063 1.09375 4.53125-1.023438 9.375-4.867188 10.996093M165 20.863281c.128906-1.8125-.238281-4.019531.214844-6.199218.40625-1.960938 1.414062-2.960938 3.414062-3.101563 1.832032-.128906 3.675782-.054687 5.515625-.085937.496094-.007813.667969.167968.710938.691406.1875 2.433594.207031 2.425781-2.207031 2.433594-.878907.003906-1.765625-.007813-2.632813.09375-1.21875.136718-2.183594 2.46875-1.457031 3.441406.199219.265625.511719.175781.777344.179687 1.320312.007813 2.640625.027344 3.960937-.007812.597656-.015625.820313.136719.839844.789062.085937 2.542969.113281 2.542969-2.460938 2.542969-.679687 0-1.367187.0625-2.039062-.015625-.996094-.117187-1.214844.328125-1.171875 1.222656.0625 1.277344-.003906 2.5625.019531 3.839844.011719.5625-.183594.738281-.757812.769531C165 27.601563 165 27.621094 165 24.964844zm0 0M177.714844 21.078125c0-1.792969-.074219-3.59375.015625-5.386719.140625-2.886718 1.523437-4.164062 4.417969-4.207031 1.476562-.019531 2.957031.035156 4.429687-.019531.789063-.027344 1.007813.234375 1 1.019531-.015625 2.113281.023438 2.105469-2.160156 2.117188-.914063.007812-1.839844-.007813-2.746094.09375-1.246094.136718-2.210937 2.414062-1.488281 3.429687.191406.273438.503906.191406.769531.191406 1.359375.007813 2.71875.03125 4.074219-.007812.613281-.015625.808594.15625.832031.800781.078125 2.53125.101563 2.5-2.464844 2.542969-1.058593.019531-2.417968-.484375-3.09375.246094-.605468.660156-.164062 1.984375-.171875 3.015625-.023437 2.613281-.007812 2.574218-2.566406 2.546875-.804687-.007813-.90625-.324219-.894531-.992188.035156-1.796875.011719-3.59375.011719-5.390625h.035156"}),i.createElement("g",{clipPath:"url(#logo-name-d)"},i.createElement("path",{d:"M210.878906 20.808594c.09375-1.785156-.167968-3.945313.160157-6.09375.300781-1.976563 1.179687-2.9375 3.148437-3.1875 2.378906-.304688 4.785156-.070313 7.175781-.125.386719-.011719.605469.144531.621094.542969.003906.082031.003906.160156.011719.242187.222656 2.53125.222656 2.53125-2.328125 2.535156-1.15625 0-2.316406-.035156-3.472656.023438-1.269532.066406-1.78125.625-1.789063 1.90625-.015625 3.234375-.039062 6.46875.015625 9.703125.011719.894531-.230469 1.160156-1.136719 1.148437-2.402343-.035156-2.40625.007813-2.40625-2.375zm0 0"})),i.createElement("path",{d:"M23.949219 18.628906c2.273437 1.128907 3.460937 4.273438 2.726562 7.210938-.75 2.984375-3.652343 5.164062-6.757812 5.074219-3.148438-.09375-5.859375-2.359375-6.507813-5.390625-.675781-3.1875 1.074219-6.433594 3.375-7.296875-2.636718 2.839843-2.910156 5.910156-.734375 8.257812 1.90625 2.054688 5.21875 2.324219 7.417969.601563 2.570313-2.011719 2.738281-4.957032.480469-8.457032M160.71875 22.878906c0 1.242188-.019531 2.480469.011719 3.71875.011719.582032-.113281.832032-.78125.859375-2.628906.109375-2.628906.136719-2.628906-2.472656 0-1.878906.027343-3.757812-.011719-5.636719-.019531-.722656.105469-1.054687.957031-1.050781 2.453125.007813 2.453125-.035156 2.453125 2.425781v2.15625M157.320313 14.367188c0-1.808594 0-1.808594 1.824218-1.808594 1.597657.003906 1.621094 0 1.636719 1.539062.027344 2.683594.277344 2.144532-2.074219 2.171875-1.691406.015625-1.351562.195313-1.386718-1.902343"}))),i.createElement("use",{xlinkHref:"#logo-name-e"}))},function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),{connect:l}=n(6),c=n(5),p=n(2).default,{setComment:d}=n(13),{selectFileByHashPath:h}=n(9),{colors:u}=n(1),m=p.div`
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
`;let E=l((e,t)=>({file:h(e,{fileHashPath:t.fileHashPath})}))((r=s=class extends o.Component{constructor(...e){super(...e),a(this,"state",{newComment:this.props.file.comment}),a(this,"textareaRef",o.createRef()),a(this,"saveTimeout",null),a(this,"save",()=>{this.props.dispatch(d(this.props.file.hashPath,this.state.newComment))}),a(this,"onChange",e=>{this.setState({newComment:e.target.value}),clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(this.save,1e3)}),a(this,"onKeyDown",e=>{"Enter"!==e.key||e.shiftKey||(this.props.close(),e.preventDefault())})}componentDidMount(){this.textareaRef.current.focus(),this.textareaRef.current.setSelectionRange(this.state.newComment.length,this.state.newComment.length)}componentWillUnmount(){this.save(),clearTimeout(this.saveTimeout)}render(){const{newComment:e}=this.state;return o.createElement(m,null,o.createElement(f,null,"Comment for: ",this.props.file.name),o.createElement(g,{onChange:this.onChange,onKeyDown:this.onKeyDown,ref:this.textareaRef,value:e,placeholder:"Write a comment about this riff"}))}},a(s,"propTypes",{close:c.func,file:c.object}),i=r))||i;e.exports=E},function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),{connect:l}=n(6),c=n(2).default,p=n(5),d=n(57),{openInFinder:h}=n(11),{removeFile:u,setFileArchiveStatus:m,setFileUploadedStatus:g}=n(13),f=n(7),E=n(12),{hasUpload:v}=n(56),{selectFileByHashPath:y}=n(9),{isAuthenticated:b,selectUser:T}=n(18),{colors:x}=n(1);c.div`
    margin-bottom: 20px;
    font-weight: bold;
`;let S=l((e,t)=>({file:y(e,{fileHashPath:t.file.hashPath}),isAuthenticated:b(e),user:T(e)}))((r=s=class extends o.Component{constructor(...e){super(...e),a(this,"state",{downloadUrl:"",uploadError:!1,uploading:!1,uploadProgress:0,uploadSuccess:!1}),a(this,"openInFinder",()=>{h(this.props.file.path),f.trackEvent("file","open-in-finder"),this.props.close()}),a(this,"toggleFileArchive",()=>{this.props.dispatch(m(this.props.file.hashPath,!this.props.file.archived)),this.props.close()}),a(this,"removeFile",()=>{this.props.close(),this.props.dispatch(u(this.props.file.hashPath))}),a(this,"onUploadProgress",e=>{this.setState({uploadProgress:e})}),a(this,"onUploadError",e=>{console.error("Error uploading",e),this.setState({uploadError:!0,uploading:!1})}),a(this,"onUploadSuccess",()=>{this.setState({uploading:!1,uploadSuccess:!0}),console.log("## success"),this.props.dispatch(g(this.props.file.hashPath,!0)),this.setDownloadUrl()}),a(this,"onUploadRunning",()=>{this.setState({uploading:!0})}),a(this,"handleUploadFile",()=>{this.props.isAuthenticated?this.props.file.uploaded?E.deleteFile(this.props.user,this.props.file.name).then(()=>{console.log("### deleted"),this.props.dispatch(g(this.props.file.hashPath,!1))}).catch(e=>{console.log("#### error deleting"),console.log(e)}):fetch(this.props.file.escapedPath).then(e=>e.blob()).then(e=>{E.uploadFile(this.props.user,this.props.file.name,e,{onError:this.onUploadError,onProgress:this.onUploadProgress,onRunning:this.onUploadRunning,onSuccess:this.onUploadSuccess})}):console.log("# not authenticated")})}setDownloadUrl(){E.getFileDownloadUrl(this.props.user,this.props.file.name).then(e=>this.setState({downloadUrl:e}))}renderUploadButton(){const{uploadError:e,uploading:t,uploadProgress:n}=this.state;return t?o.createElement("span",null,"Uploading... ",n.toFixed(0),"%"):e?o.createElement("span",null,"Error uploading"):this.props.file.uploaded?"Remove file from cloud":"Upload file"}componentDidMount(){f.trackScreen("modalFileOptions"),this.props.file.uploaded&&this.setDownloadUrl()}render(){const{file:e,user:t}=this.props,{downloadUrl:n}=this.state;return o.createElement(o.Fragment,null,v(t)?e.missing&&!e.uploaded?null:o.createElement(d,{onClick:this.handleUploadFile},this.renderUploadButton()):null,e.uploaded?o.createElement(d.ModalLink,{href:n,download:!0},"Download"):null,e.missing?null:o.createElement(d,{onClick:this.openInFinder},"Open in ","darwin"===window.__songRiffer.platform?"Finder":"File Explorer"),o.createElement(d,{onClick:this.toggleFileArchive},e.archived?"Unarchive":"Archive"," file"),o.createElement(d,{onClick:this.removeFile},"Remove from my riff library"))}},a(s,"propTypes",{close:p.func,dispatch:p.func,file:p.object.isRequired}),i=r))||i;e.exports=S},function(e,t,n){const i=n(0),s=n(5),r=n(43),a=n(7),o=n(1);class l extends i.Component{componentDidMount(){a.trackScreen("modalFileMissing"),a.trackEvent("file","invalid-file",this.props.file.type)}render(){const{file:e}=this.props;return i.createElement("div",null,i.createElement("div",null,"Sorry but we could not import the file ",e.name,"."),i.createElement("div",null,"Only audio files are supported."),i.createElement("div",null,"If you think this is a bug, feel free to contact us at ",i.createElement(r,{href:`mailto:${o.email}`},o.email),"."))}}var c,p,d;c=l,p="propTypes",d={dispatch:s.func,file:s.object},p in c?Object.defineProperty(c,p,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[p]=d,e.exports=l},function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),l=n(2).default,{connect:c}=n(6),p=n(5),d=n(32),{removeFile:h}=n(13),{selectFileByHashPath:u}=n(9),{unlinkFile:m}=n(11),g=n(7),f=n(1),E=l.div`
    max-width: 300px;
`,v=l.div`
    margin-bottom: 25px;
    font-size: 16px;
    line-height: 1.4;
`,y=l.span`
    color: ${f.colors.bluePastel};
`,b=l.div`
    display: flex;
    justify-content: space-between;
`,T=l(d)`
    padding: 10px 25px;
`;let x=c((e,t)=>({file:u(e,{fileHashPath:t.fileHashPath})}))((r=s=class extends o.Component{constructor(...e){super(...e),a(this,"removeFile",()=>{this.props.close(),this.props.dispatch(h(this.props.file.hashPath,!0))}),a(this,"deleteFile",()=>{this.props.close(),this.props.dispatch(h(this.props.file.hashPath,!0)),m(this.props.file.path),g.trackEvent("file","delete-file",this.props.file.source)})}componentDidMount(){g.trackScreen("modalRemoveFile")}render(){const{file:e}=this.props;let t;return e.source===f.sources.RECORD&&(t="recorded with the Recorder"),e.source===f.sources.TRANSFER&&(t="transfered from your phone"),o.createElement(E,null,o.createElement(v,null,o.createElement(y,null,e.name)," was ",t,". Do you want to delete the file as well as remove it from your library?"),o.createElement(b,null,o.createElement(T,{onClick:this.removeFile},"No"),o.createElement(T,{onClick:this.deleteFile},"Yes")))}},a(s,"propTypes",{dispatch:p.func,file:p.object}),i=r))||i;e.exports=x},function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),{connect:l}=n(6),c=n(5),p=n(2).default,d=n(175),h=d.VexTab,u=d.Artist,m=d.Flow.Renderer;u.NOLOGO=!0;const g=n(11),f=n(7),{parseGuitarProXML:E}=n(176),v=(n(1),p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    min-width: 890px;
    height: 70vh;
`),y=p.div`
    background: #fff;
    height: 100%;
    width: 890px;
    overflow-y: auto;
`;let b=l((e,t)=>({file:t.file,mxml:e.mxml}))((r=s=class extends o.Component{constructor(...e){super(...e),a(this,"scoreRef",o.createRef())}async displayScore(e){const t=new m(this.scoreRef.current,m.Backends.SVG),n=new u(10,10,600,{scale:.8}),i=new h(n);try{E(e,{options:{width:1100}}).then(e=>{i.parse(e.notation),n.render(t)})}catch(e){console.log(e)}}componentDidMount(){f.trackScreen("modalTabs"),this.props.mxml.mxml&&this.props.mxml.filePath===this.props.file.path||g.getMXML(this.props.file.path),this.props.mxml.filePath===this.props.file.path&&this.props.mxml.mxml&&this.displayScore(this.props.mxml.mxml)}componentDidUpdate(e){e.mxml.mxml!==this.props.mxml.mxml&&this.displayScore(this.props.mxml.mxml)}render(){return o.createElement(v,null,o.createElement(y,{ref:this.scoreRef}))}},a(s,"propTypes",{file:c.object,mxml:c.object}),i=r))||i;e.exports=b},,function(e,t,n){const{parseString:i}=n(177),s=n(52),r={"16th":"16","32th":"32","64th":"64",Eighth:"8",Half:"h",Quarter:"q",Whole:"w"},a={8:1/8,16:1/16,32:1/32,64:1/64,h:.5,q:.25,w:1},o=e=>1/(e/2*3),l={8:o(8),16:o(16),32:o(32),64:o(64),h:o(2),q:o(4),w:o(1)},c=(e,t,n)=>{let i=null;for(const t of e[0].Beat){if(t.Notes.includes(n)){i=t;break}if(t.Notes[0].split(" ").includes(n)){i=t;break}}return((e,t)=>{const n=s(e,"[0].Rhythm",[]),i=s(t,"Rhythm[0]['$'].ref");return n.find(e=>e.$.id===i)})(t,i)},p=e=>[`tabstave notation=true\ntime=${e}\n`],d=e=>{const t=g(e);return[`${p(t)}  notes`]},h=(e,t={})=>{const n=[],{GPIF:{Beats:i,Notes:o,Rhythms:p}}=e,h=o[0].Note,m=h.length;let g=d(e),f=null,E=0,v=0,y=1;return h.forEach((t,o)=>{let h="";const u=t.$.id,b=(e=>{const t=s(e,"Properties[0].Property",[]),n={};return t.forEach(e=>{e.Fret&&(n.fret=e.Fret[0]),e.String&&(n.string=6-e.String[0])}),n})(t),T=c(i,p,u),{noteValue:x,isTuplet:S}=(e=>{const t=r[s(e,"NoteValue[0]")],n=s(e,"PrimaryTuplet[0]");return t||console.log("# undefined note map ",e.NoteValue[0]),{noteValue:t,isTuplet:!!n}})(T);v+=S?l[x]:a[x],x!==f&&(f=x,h+=`:${x} `),h+=`${b.fret}/${b.string} `,S&&3===++E&&(h+="^3^ ",E=0),v>=1&&m-1!==o&&(h+="|",v=0,y+=1,E=0),g.push(h),5===y&&(n.push(g),g=d(e),y=1,f=null)}),n.push(g),`${u(t)}${(e=>e.map(e=>e.join(" ").trim()).join("\n"))(n)}`},u=e=>{const t=Object.keys(e);return t.length?`options ${t.map(t=>`${t}=${e[t]}`).join(" ")}\n`:""};e.exports.convertOptions=u;const m=e=>{const t=e.GPIF.Score[0],n={};return["Album","Artist","Title"].forEach(e=>{n[e.toLowerCase()]=t[e]?t[e][0]:""}),n},g=e=>{return e.GPIF.MasterBars[0].MasterBar[0].Time[0]};e.exports.parseGuitarProXML=(e,t={})=>new Promise((n,s)=>{i(e,(e,i)=>{if(e)return console.error(e),void s(e);n({firstTimeSignature:g(i),infos:m(i),notation:h(i,t.options)})})})},,,,,,,,,,,,,,,,function(e,t){},,function(e,t){},,,,,,,,,function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),l=n(2).default,c=n(5),{connect:p}=n(6),d=n(93),{selectFileByHashPath:h}=n(9),{addTag:u,editFile:m,removeTag:g}=n(13),{displayTagContextMenu:f}=n(34),E=l.div`
    width: 650px;
`,v=l.div`
    font-weight: 600;
    margin-bottom: 25px;
`;let y=p((e,t)=>({file:h(e,{fileHashPath:t.fileHashPath})}))((r=s=class extends o.Component{constructor(...e){super(...e),a(this,"addTag",e=>{this.props.dispatch(u(this.props.file.hashPath,e))}),a(this,"onTagClick",()=>{}),a(this,"onTagContextMenu",(e,t,n)=>{this.props.dispatch(f(this.props.file.hashPath,e,t,n))}),a(this,"removeTag",e=>{this.props.dispatch(g(this.props.file.hashPath,e))})}render(){const{file:e}=this.props;return o.createElement(E,null,o.createElement(v,null,"Tags for ",e.name),o.createElement(d,{addTag:this.addTag,onTagClick:this.onTagClick,onTagContextMenu:this.onTagContextMenu,removeTag:this.removeTag,rootStyle:"\n    display: flex;\n    flex-wrap: wrap;\n\n    > * {\n        margin-bottom: 15px;\n    }\n",tags:e.getTags()}))}},a(s,"propTypes",{dispatch:c.func,file:c.object}),i=r))||i;e.exports=y},function(e,t,n){const i=n(0),s=n(5),r=n(2).default,a=r.div`
    max-width: 600px;
`,o=r.div`
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
`,l=i.memo(({message:e,title:t})=>i.createElement(a,null,i.createElement(o,null,t),i.createElement("div",null,e)));l.propTypes={message:s.node,title:s.string},e.exports=l},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),r=n(5),a=n(2).default,o=n(43),l=n(19),c=n(7),p=n(29),{openLink:d}=n(11),h=n(1),u=a.div`
    max-width: 700px;
`,m=a.div`
    padding: 45px;
    background: radial-gradient(ellipse at top, ${h.colors.blueLight}, transparent),
        radial-gradient(ellipse at left, ${h.colors.red}, transparent),
        radial-gradient(ellipse at right, ${h.colors.purple}, transparent);
`,g=a.div`
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
`,f=a.div`
    text-align: center;
`,E=a(o)`
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
`,v=a.div`
    font-size: 14px;
    opacity: 0.7;
    text-align: center;
`,y=a.div`
    padding: 20px;
    margin-top: 40px;
`,b=a.div`
    margin-bottom: 25px;
    text-align: center;
    font-size: 20px;
    font-weight: lighter;
`,T=a.div`
    padding-bottom: 25px;
    margin-bottom: 25px;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`,x=a.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    :last-child {
        border: none;
    }
`,S=a.div`
    width: ${e=>e.hasVideo?"50%":"100%"};
    padding-right: ${e=>e.hasVideo?"15px":"0"};
`,_=a.div`
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
`,C=a.div`
    font-size: 15px;
    opacity: 0.8;
`,w=a.video`
    width: 50%;
`;class A extends s.Component{constructor(...e){super(...e),i(this,"clickUpdate",()=>{c.trackEvent("app","download-update"),p("Download update from app")})}componentDidMount(){c.trackScreen("modalUpdate")}render(){const{changelog:e,mandatory:t,url:n}=this.props,i=t?"Your app is too old!":"Update version available";return s.createElement(u,null,s.createElement(m,null,s.createElement(g,null,i),t?s.createElement(l,null,s.createElement(f,null,"Please download and install the latest version to keep using SongRiffer")):null,s.createElement(E,{href:n,onClick:this.clickUpdate},"Download the update"),s.createElement(v,null,"Or visit ",s.createElement(o,{onClick:()=>d(h.landingUrl)},h.landingUrl)," to download and install the latest version.")),Array.isArray(e.sections)&&e.sections.length?s.createElement(y,null,s.createElement(b,null,e.title?e.title:"What's new in this update:"),e.description?s.createElement(T,null,e.description):null,s.createElement("div",null,e.sections.map(e=>s.createElement(x,{key:e.title},s.createElement(S,null,s.createElement(_,null,e.title),s.createElement(C,{hasVideo:e.video},e.message)),e.video?s.createElement(w,{autoPlay:!0,playsInline:!0,muted:!0,loop:!0,src:e.video}):null)))):null)}}i(A,"propTypes",{changelog:r.object,mandatory:r.bool,url:r.string}),e.exports=A,e.exports.rootStyle="\n    max-height: 90vh;\n    padding: 0;\n    overflow-y: auto;\n"},function(e,t,n){var i;function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=n(0),a=n(2).default,{connect:o}=n(6),{removeNotification:l}=n(55),{colors:c}=n(1),p=a.div`
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
`;let d=o(e=>({notification:e.notifications.notification}))(i=class extends r.Component{constructor(...e){super(...e),s(this,"close",()=>{this.props.dispatch(l())}),s(this,"onClick",()=>{"function"==typeof this.props.notification.onClick&&this.props.dispatch(this.props.notification.onClick())}),s(this,"onMouseEnter",()=>{this.props.notification.onClick&&this.clearTimeout()}),s(this,"onMouseLeave",()=>{this.props.notification.onClick&&this.startTimeout()})}startTimeout(){clearTimeout(this.timeout),this.timeout=setTimeout(this.close,this.props.notification.timeout||3e3)}clearTimeout(){clearTimeout(this.timeout)}componentDidMount(){void 0!==this.props.notification.id&&this.startTimeout()}componentDidUpdate(e){e.notification.id!==this.props.notification.id&&this.startTimeout()}componentWillUmount(){this.clearTimeout()}render(){const{notification:e}=this.props;return r.createElement(p,{active:e.active,status:e?e.status:null,hasClickAction:"function"==typeof this.props.notification.onClick,onClick:this.onClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},e?e.title:null)}})||i;e.exports=d},,function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),{connect:l}=n(6),c=n(2).default,p=n(5),d=n(57),h=n(30),u=n(19),{checkUpdate:m}=n(34),{openModal:g}=n(24),{signOut:f}=n(113),{selectUser:E}=n(18),v=n(7),y=n(12),{hasUpload:b}=n(56),{formatFileSize:T}=n(37),{openLink:x,toggleDevTools:S}=n(11),_=n(1),C=c.div`
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
    color: ${_.colors.redLight};
`,k=c(d.ModalLink)`
    text-align: center;
`,F=c.div`
    margin-top: 30px;
`;let L=l(e=>({enableExperimental:e.application.enableExperimental,updateAvailable:e.application.updateAvailable,user:E(e)}))((r=s=class extends o.Component{constructor(...e){super(...e),a(this,"state",{storageSize:0,storageSizeLimit:0}),a(this,"signOut",()=>{this.props.dispatch(f())}),a(this,"checkUpdates",()=>{this.props.dispatch(m(!0))})}renderDevMenu(){return o.createElement(F,null,o.createElement(w,null,"Experimental Menu"),o.createElement(A,{onClick:S,first:!0},"Toggle dev tools"))}async fetchStorageSize(){if(b(this.props.user)){const e=await y.getUserStorageSize(this.props.user.uid),t=await y.getRemoteConfigValue(`STORAGE_LIMIT_LEVEL_${this.props.user.data.cloudLevel}`,0);this.setState({storageSize:e,storageSizeLimit:t})}}renderAccount(){if(b(this.props.user)){const{storageSize:e,storageSizeLimit:t}=this.state,n=100*e/t,i=isNaN(n)?0:n.toFixed(2);return o.createElement(u,null,o.createElement("div",null,"Total storage size used: ",T(e)," / ",T(t)," (",i,"%)"))}return null}componentDidMount(){v.trackScreen("settings"),this.fetchStorageSize()}render(){const{enableExperimental:e,updateAvailable:t,user:n}=this.props;return o.createElement(h,{wrapperStyle:"\n    display: flex;\n    height: 100%;\n    justify-content: space-between;\n    align-items: center;\n"},o.createElement(C,null,o.createElement(A,{onClick:this.checkUpdates,first:!0},"Check for updates ",t?o.createElement(R,null,"•"):null),o.createElement(k,{href:`mailto:${_.email}`},"Contact Us"),o.createElement(A,{onClick:()=>x(_.facebookUrl)},"Follow us on Facebook"),o.createElement(A,{onClick:()=>x(_.instagramUrl)},"Follow us on Instagram"),o.createElement(A,{onClick:()=>x(_.landingUrl)},"Visit us songriffer.com"),e&&this.renderDevMenu()),o.createElement(C,null,o.createElement(w,null,"Hello ",n.email,"!"),this.renderAccount(),o.createElement(A,{onClick:this.signOut,first:!0},"Sign out")))}},a(s,"propTypes",{dispatch:p.func,enableExperimental:p.bool,updateAvailable:p.bool,user:p.object}),i=r))||i;e.exports=L},function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),l=n(2).default,{connect:c}=n(6),p=n(5),{config:d,Spring:h}=n(15),u=n(30),m=n(19),g=n(210),{selectUser:f}=n(18),{formatDuration:E}=n(37),{getTagColor:v,getFontColorForColor:y}=n(41),b=n(7),T=n(12),x=n(1),S=l(l.div`
    margin-bottom: 15px;
`)`
    display: flex;
    justify-content: space-between;
    text-align: center;
`,_=l.div`
    height: 1px;
    margin-bottom: 25px;
    background: ${x.colors.blueLight};
`,C=l.div`
    width: 33%;
`,w=l.div`
    width: 50%;
`,A=l.div`
    display: flex;
    justify-content: center;
`,R=l.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`,k=l.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    text-align: left;
`,F=l.div`
    flex: 1;
    position: relative;
    padding: 5px;
    margin-left: 10px;
    color: ${e=>e.color};

    span {
        position: relative;
        z-index: 1;
    }
`,L=l.div`
    display: table-cell;
    width: 35px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,D=l.div`
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 3px;
    background: ${e=>e.background};
    z-index: 0;
`,P=l.div`
    font-size: 22px;
    text-align: center;
    font-weight: bold;
`,I=l.div`
    font-size: 32px;
    font-weight: bold;
    color: ${e=>e.color?e.color:x.colors.purple};
`,M=l.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;let O=c(e=>({stats:g(e),user:f(e)}))((r=s=class extends o.Component{constructor(...e){super(...e),a(this,"state",{userStats:null})}renderNoFiles(){return o.createElement(u,null,o.createElement(M,null,o.createElement("div",null,"Your library is empty! Start adding files to your library to see your stats.")))}renderUserStats(){const{userStats:e}=this.state;return null}componentDidMount(){b.trackScreen("stats"),T.getUserStats(this.props.user.uid).then(e=>{this.setState({userStats:e})})}render(){const{stats:e}=this.props;return e.totalFiles?o.createElement(u,null,o.createElement(S,null,o.createElement(C,null,o.createElement(P,null,"Total files"),o.createElement(m,null,o.createElement(I,null,o.createElement(h,{from:{number:0},to:{number:e.totalFiles}},e=>e.number.toFixed(0))))),o.createElement(C,null,o.createElement(P,null,"Total duration"),o.createElement(m,null,o.createElement(I,null,o.createElement(h,{from:{number:0},to:{number:e.totalDuration}},e=>E(e.number.toFixed(0)))))),o.createElement(C,null,o.createElement(P,null,"Total tags"),o.createElement(m,null,o.createElement(I,null,o.createElement(h,{from:{number:0},to:{number:e.totalTags}},e=>e.number.toFixed(0)))))),e.totalTags?o.createElement(o.Fragment,null,o.createElement(_,null),o.createElement(S,null,o.createElement(w,null,o.createElement(P,null,"Top tags"),o.createElement(m,null,o.createElement(A,null,o.createElement(R,null,e.tagsSortedByOccurence.slice(0,5).map(t=>{const n=100*t.occurence/e.topTagOccurence.occurence,i=v(t.tag);return o.createElement(k,{key:`top-tag-${t.tag}`},o.createElement(L,null,t.occurence),o.createElement(F,{color:y(i)},o.createElement(h,{from:{width:0},to:{width:n}},e=>o.createElement(D,{style:{width:`${e.width}%`},background:i})),o.createElement("span",null,t.tag)))}))))),o.createElement(w,null,o.createElement(P,null,"Top tags by rating"),o.createElement(m,null,o.createElement(A,null,o.createElement(R,null,e.tagsSortedByAverageRating.slice(0,5).map(t=>{const n=t.average.toFixed(1),i=100*n/e.topTagAverage.average.toFixed(1),s=v(t.tag);return o.createElement(k,{key:`top-rated-tag-${t.tag}`},n,o.createElement(F,{color:y(s)},o.createElement(h,{from:{width:0},to:{width:i}},e=>o.createElement(D,{style:{width:`${e.width}%`},background:s})),o.createElement("span",null,t.tag)))}))))))):null,this.renderUserStats()):this.renderNoFiles()}},a(s,"propTypes",{stats:p.object}),i=r))||i;e.exports=O},function(e,t,n){const i=n(42),{_selectFiles:s,selectTags:r}=n(9);e.exports=i([s,r],(e,t)=>{const n=Object.values(e).filter(e=>!e.archived),i=n.reduce((e,t)=>(e.totalDuration+=t.duration,Object.keys(t.tags).forEach(n=>{const i=n.toLowerCase();e.tags[i]?(e.tags[i].rating+=t.rating+1,e.tags[i].occurence+=1,e.tags[i].average=e.tags[i].rating/e.tags[i].occurence):e.tags[i]={rating:t.rating+1,occurence:1,average:t.rating+1,tag:i}}),e),{totalDuration:0,tags:{}}),s=Object.values(i.tags).sort((e,t)=>t.occurence-e.occurence),r=Object.values(i.tags).sort((e,t)=>t.average-e.average);return{tagsSortedByAverageRating:r,tagsSortedByOccurence:s,topTagAverage:r.length?r[0]:0,topTagOccurence:s.length?s[0]:0,totalDuration:i.totalDuration,totalFiles:n.length,totalTags:t.length}},"selectStats")},function(e,t,n){var i;function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const{extname:r}=n(28),a=n(0),{connect:o}=n(6),l=n(2).default,{Link:c}=n(26),p=n(111),d=n(110),{selectSelectedFile:h}=n(9),{selectUser:u}=n(18),{togglePlay:m}=n(44),{formatDuration:g}=n(37),f=n(7),E=n(12),v=n(29),y=n(212),b=n(1),T=l.div`
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: ${e=>e.visible?0:"-100%"};
    left: 0;
    background: ${b.colors._blueDark};
    transition: bottom ease 0.4s;
    z-index: 10;
`,x=l.div`
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
    color: ${b.colors._white};
    text-decoration: none;
`,_=l.div`
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
`,R=new AudioContext;let k=o(e=>({file:h(e),playing:e.player.playing,user:u(e)}))(i=class extends a.Component{constructor(...e){super(...e),s(this,"canvas",a.createRef()),s(this,"canvasProgress",a.createRef()),s(this,"player",a.createRef()),s(this,"playerUI",a.createRef()),s(this,"state",{audioBuffer:null,progress:null,progressPercent:0,waveformData:[]}),s(this,"togglePlay",()=>{this.props.dispatch(m())}),s(this,"onWaveformCalculated",e=>{this.setState({waveformData:e.data}),this.canvasCtx.fillStyle=b.colors.purple;const t=this.canvas.current.height/2;e.data.forEach((e,n)=>{const i=1*n,s=(1+e.min)*t,r=Math.max(1,(e.max-e.min)*t);this.canvasCtx.fillRect(i,s,1,r)}),this.canvas.current.style.opacity=1}),s(this,"onCanvasClick",e=>{const t=e.clientX-e.target.offsetParent.offsetLeft,n=Math.round(100*t/e.target.offsetWidth),i=this.props.file.duration*n/100;this.player.current.currentTime=i})}playFile(){const{file:e}=this.props,t=[];e.missing&&e.uploaded&&(f.trackEvent("player","download-file"),v("Playing file from storage"),t.push(E.getFileDownloadUrl(this.props.user,e.name))),Promise.all(t).then(t=>{const n=t[0]||e.escapedPath;this.player.current.src=n,this.player.current.play(),this.eventInit||this.initEvents(),f.trackEvent("player","play-file",r(this.props.file.name)),this.canvasCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),this.canvasProgressCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),this.loadWaveform(n)})}initEvents(){this.eventInit=!0,this.player.current.addEventListener("timeupdate",e=>{let t=0,n=0;this.props.file&&(n=100*(t=parseInt(this.player.current.currentTime,10))/this.props.file.duration),t!==this.state.progress&&this.setState({progress:t,progressPercent:n})}),this.player.current.addEventListener("ended",e=>{this.togglePlay(),this.setState({progress:0,progressPercent:0})})}handlePlayingState(e){e&&this.player.current.paused&&(f.trackEvent("player","play"),this.player.current.play()),e||this.player.current.paused||(f.trackEvent("player","pause"),this.player.current.pause())}loadWaveform(e){fetch(e).then(e=>e.arrayBuffer()).then(e=>{R.decodeAudioData(e,async e=>{this.calculateWaveDataWorker.postMessage({channelData:e.getChannelData(0),width:this.canvas.current.width,pointWidth:1})})})}drawProgressWaveform(){if(!this.props.file)return;const e=this.state.waveformData.slice(0,Math.round(this.state.progressPercent*this.state.waveformData.length/100)),t=this.canvasProgress.current.height/2;this.canvasProgressCtx.fillStyle=b.colors._purpleLight,this.canvasProgressCtx.clearRect(0,0,this.canvas.current.width,this.canvas.current.height),e.forEach((e,n)=>{const i=1*n,s=(1+e.min)*t,r=Math.max(1,(e.max-e.min)*t);this.canvasProgressCtx.fillRect(i,s,1,r)})}componentDidMount(){this.canvasCtx=this.canvas.current.getContext("2d"),this.canvasProgressCtx=this.canvasProgress.current.getContext("2d"),this.calculateWaveDataWorker=new y,this.calculateWaveDataWorker.addEventListener("message",this.onWaveformCalculated)}componentDidUpdate(e,t){(!e.file&&this.props.file||e.file&&this.props.file&&e.file.path!==this.props.file.path)&&this.playFile(),e.playing!==this.props.playing&&this.handlePlayingState(this.props.playing),t.progress!==this.state.progress&&this.drawProgressWaveform()}render(){const{file:e}=this.props,{audioBuffer:t,progress:n,progressPercent:i}=this.state;return a.createElement(a.Fragment,null,a.createElement("audio",{ref:this.player}),a.createElement(T,{visible:e,ref:this.playerUI},a.createElement(x,null,a.createElement("div",{onClick:this.togglePlay},this.props.playing?a.createElement(d,null):a.createElement(p,null)),a.createElement(_,null,a.createElement(C,null,a.createElement(A,{ref:this.canvasProgress}),a.createElement(w,{ref:this.canvas,onClick:this.onCanvasClick})),e?a.createElement("span",null,g(n)," / ",g(e.duration)):null),e?a.createElement(S,{to:`${b.routes.home}#file-${this.props.file.hashPath}`,title:e.name},e.name):null)))}})||i;e.exports=k},function(e,t,n){e.exports=function(){return new Worker(n.p+"9b8ea8abcf2fd171fa20.worker.js")}},function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),{connect:l}=n(6),c=n(5),p=n(2).default,d=n(36),h=n(214),{searchBasic:u,toggleAdvanced:m}=n(38),g=n(33),f=p.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`,E=p(d)`
    margin-right: 7px;
    opacity: ${e=>e.visible?1:0};
    transition: opacity ease 0.3s;
`;let v=l(e=>{const t=g(e);return{advancedSearchVisible:t.displayAdvanced,search:t}})((r=s=class extends o.PureComponent{constructor(...e){super(...e),a(this,"search",e=>{this.props.dispatch(u(e.target.value))}),a(this,"toggleAdvanced",()=>{this.props.dispatch(m())})}componentWillUnmount(){this.props.advancedSearchVisible&&this.props.dispatch(m())}render(){const{advancedSearchVisible:e,search:t}=this.props;return o.createElement(f,null,o.createElement(E,{type:"text",onChange:this.search,value:t.basicTerm,name:"search",placeholder:"Search",visible:!e,id:"basic-search-input"}),o.createElement(h,{displayAdvanced:e,onClick:this.toggleAdvanced}))}},a(s,"propTypes",{advancedSearchVisible:c.bool,dispatch:c.func,search:c.object}),i=r))||i;e.exports=v},function(e,t,n){const i=n(0),s=n(2).default,{colors:r}=n(1),a=s.svg`
    cursor: pointer;

    path {
        fill: ${e=>e.active?r.blueLight:r._white};
    }
`;e.exports=({displayAdvanced:e,onClick:t})=>i.createElement(a,{viewBox:"0 0 96 96",width:"20",height:"20",onClick:t,active:e,title:e?"Close advanced search":"Open advanced search"},i.createElement("path",{d:"M37.4 12.1c-.7 4.4-1 4.7-6.5 8.3-3.5 2.3-3.6 2.3-8.1.5-5.3-2.1-4.7-2.6-10.8 8l-4.3 7.4 4.2 3.4c3.8 3.2 4.1 3.9 4.1 8.3s-.3 5.1-4.1 8.3l-4.2 3.4 4.3 7.4c6.1 10.6 5.5 10.1 10.8 8 4.5-1.8 4.6-1.8 8.1.5 5.5 3.6 5.8 3.9 6.5 8.3L38 88h5.5c3 0 5.5-.2 5.5-.4s-.9-2.5-2.1-5.1c-1.7-3.8-2-6.3-1.7-11.9l.3-7.1-4-2C27.1 54.3 32 33 48.1 33c5.8 0 10.7 3.1 13.4 8.5l2 4h8.2c5.7 0 8.3-.4 8.3-1.2 0-.6 1.9-2.7 4.1-4.6l4.2-3.4-4.3-7.4c-6.1-10.6-5.5-10.1-10.8-8-4.5 1.8-4.6 1.8-8.1-.5-5.5-3.6-5.8-3.9-6.5-8.3L58 8H38l-.6 4.1z"}),i.createElement("path",{d:"M62.5 53.7C55.2 57.5 52 63.1 52 72c0 12.6 7.4 20 19.9 20 3.3 0 7.2-.5 8.6-1.2 2.3-1 2.9-.8 5.8 2 3.9 3.8 4.7 3.9 7.5.9 2.9-3 2.8-3.5-1-7.4-2.8-2.9-3-3.5-2-5.8 2.8-6.2 1-17.5-3.7-22.9-4.7-5.3-17.9-7.5-24.6-3.9zm15.4 8.7c6.8 3.6 6.8 15.6 0 19.2-8.2 4.2-17-.9-16.9-9.8.1-8.7 8.9-13.5 16.9-9.4z"}))},function(e,t,n){var i;const s=n(0),r=n(2).default,{connect:a}=n(6),{Link:o,Route:l}=n(26),c=n(216),p=n(217),d=n(114),h=n(218),u=n(19),m=n(219),{selectSelectedFile:g}=n(9),f=n(1),E=r.div`
    display: flex;
    flex-direction: column;
    width: 75px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: ${e=>e.playerOpen?"50px":0};
    margin-right: 15px;
    font-size: 13px;
    border-right: 1px solid ${f.colors.blueLight};
`,v=r.div`
    flex: 1;
`,y=r.div``,b=r(o)`
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
`,T=r.div`
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
`;let x=a(e=>({enableExperimental:e.application.enableExperimental,selectedFile:g(e),updateAvailable:e.application.updateAvailable}))(i=class extends s.Component{renderItem(e,t){return s.createElement(l,{path:e,children:({match:n})=>s.createElement(b,{to:e,isActive:n&&n.isExact},s.createElement(T,null,t))})}render(){const{enableExperimental:e,selectedFile:t,updateAvailable:n}=this.props;return s.createElement(E,{playerOpen:!!t},s.createElement(v,null,this.renderItem(f.routes.home,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(c,null)),s.createElement("div",null,"Riffs"))),this.renderItem(f.routes.transfer,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(d,null)),s.createElement("div",null,"Mobile Transfer"))),this.renderItem(f.routes.recorder,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(h,null)),s.createElement("div",null,"Recorder"))),this.renderItem(f.routes.stats,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(m,null)),s.createElement("div",null,"Stats"))),e?this.renderItem(f.routes.projects,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(c,null)),s.createElement("div",null,"Projects"))):null),s.createElement(y,null,this.renderItem(f.routes.settings,s.createElement(s.Fragment,null,s.createElement(u,{size:"s"},s.createElement(p,null)),n?s.createElement("div",null,"Update available"):null))))}})||i;e.exports=x},function(e,t,n){const i=n(0),s=n(5),r=n(2).default,{colors:a}=n(1),o=r.svg`
    width: ${e=>e.width}px;
`,l=({width:e=20})=>i.createElement(o,{width:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"169.575 120.149 37.333 37.253"},i.createElement("defs",null,i.createElement("path",{d:"M170.57 120h33.34v7.75h-33.34v-15.47z",id:"file-list-a"}),i.createElement("path",{d:"M170.57 135h33.34v7.74h-33.34v-15.47z",id:"file-list-b"}),i.createElement("path",{d:"M170.57 150h33.34v7.74h-33.34v-15.47z",id:"file-list-c"})),i.createElement("use",{xlinkHref:"#file-list-a",fill:a.blueLight}),i.createElement("use",{xlinkHref:"#file-list-b",fill:a.blueLight}),i.createElement("use",{xlinkHref:"#file-list-c",fill:a.blueLight}));l.propTypes={width:s.number},e.exports=l},function(e,t,n){const i=n(0),{Spring:s}=(n(2).default,n(15)),{colors:r}=n(1);e.exports=()=>{const[e,t]=i.useState(!1);return i.createElement("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1)},i.createElement(s,{from:{angle:"0deg"},to:{angle:e?"60deg":"0deg"}},e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",viewBox:"0 0 21 20",style:{transform:`rotate(${e.angle})`}},i.createElement("path",{fill:r.blueLight,fillRule:"nonzero",d:"M20.84 8.89c-.032-.282-.36-.493-.643-.493-.917 0-1.73-.538-2.07-1.37a2.227 2.227 0 0 1 .558-2.473.555.555 0 0 0 .061-.754 9.895 9.895 0 0 0-1.584-1.6.557.557 0 0 0-.76.062c-.596.66-1.667.905-2.494.56A2.221 2.221 0 0 1 12.557.65a.555.555 0 0 0-.49-.584A9.984 9.984 0 0 0 9.816.06a.556.556 0 0 0-.496.572 2.225 2.225 0 0 1-1.369 2.133c-.817.334-1.88.091-2.476-.563a.558.558 0 0 0-.754-.064 9.933 9.933 0 0 0-1.618 1.6.556.556 0 0 0 .06.76c.696.63.92 1.633.559 2.495-.345.822-1.199 1.352-2.176 1.352a.544.544 0 0 0-.578.49 10.017 10.017 0 0 0-.004 2.275c.031.282.37.491.656.491.87-.022 1.707.517 2.057 1.37.35.853.125 1.847-.559 2.474a.556.556 0 0 0-.06.753c.464.592.997 1.13 1.581 1.6.23.185.563.16.762-.06.598-.661 1.668-.906 2.493-.56a2.218 2.218 0 0 1 1.353 2.17.555.555 0 0 0 .49.584 9.94 9.94 0 0 0 2.25.006.557.557 0 0 0 .495-.572 2.223 2.223 0 0 1 1.368-2.133c.823-.336 1.882-.09 2.477.563a.559.559 0 0 0 .755.064 9.956 9.956 0 0 0 1.618-1.6.555.555 0 0 0-.06-.76 2.216 2.216 0 0 1-.56-2.495 2.239 2.239 0 0 1 2.045-1.355l.124.003a.557.557 0 0 0 .585-.49c.088-.752.09-1.517.005-2.274zm-9.922 4.467a3.34 3.34 0 0 1-3.335-3.336 3.34 3.34 0 0 1 3.335-3.335 3.34 3.34 0 0 1 3.336 3.335 3.34 3.34 0 0 1-3.336 3.336z"}))))}},function(e,t,n){const i=n(0),s=n(2).default,{colors:r}=n(1),a=s.svg`
    width: ${e=>e.width}px;
`;e.exports=({animated:e=!1,width:t=20})=>i.createElement(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"229.839 194.175 68.196 68.196",width:t},i.createElement("defs",null,i.createElement("path",{d:"M295.03 227.27c0 17.72-14.38 32.1-32.09 32.1-17.72 0-32.1-14.38-32.1-32.1 0-17.71 14.38-32.1 32.1-32.1 17.71 0 32.09 14.39 32.09 32.1z",id:"recorder-a"})),i.createElement("use",{xlinkHref:"#recorder-a",fill:r.blueLight}))},function(e,t,n){const i=n(0),s=n(2).default,{colors:r}=n(1),a=s.svg`
    width: ${e=>e.width}px;
`;e.exports=({animated:e=!1,width:t=20})=>i.createElement(a,{width:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"159.476 103.524 63.048 56.381"},i.createElement("defs",null,i.createElement("path",{d:"M160.48 130.71h15.47v26.19h-15.47v-26.19z",id:"stats-a"}),i.createElement("path",{d:"M181.67 114.05h15.47v42.85h-15.47v-42.85z",id:"stats-b"}),i.createElement("path",{d:"M204.05 104.52h15.47v52.38h-15.47v-52.38z",id:"stats-c"})),i.createElement("use",{xlinkHref:"#stats-a",fill:r.blueLight}),i.createElement("use",{xlinkHref:"#stats-b",fill:r.blueLight}),i.createElement("use",{xlinkHref:"#stats-c",fill:r.blueLight}))},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),r=n(2).default,{Spring:a,Trail:o,config:l}=n(15),{colors:c}=n(1),p=n(221),d=n(78),h=n(7),u=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;e.exports=class extends s.Component{constructor(...e){super(...e),i(this,"state",{animationDone:!1}),i(this,"onAnimationDone",()=>{this.setState({animationDone:!0}),this.props.onAnimationDone()})}componentDidMount(){const e=Math.round(performance.now());h.trackTiming("app","app-ready",e)}render(){const{authLoading:e,isAuthenticated:t}=this.props,{animationDone:n}=this.state,i=!e&&!t,r=[{component:s.createElement(a,{from:{angle:"-70deg",opacity:0},to:{angle:"0deg",opacity:1},config:l.slow},e=>s.createElement(d,{opacity:e.opacity,angle:e.angle})),key:"logo"},{component:s.createElement(a,{from:{opacity:0},to:{opacity:i?1:0},config:l.slow},e=>s.createElement("div",{style:{opacity:e.opacity}},s.createElement(p,null))),key:"authform"}];return s.createElement(u,null,s.createElement(o,{items:r,keys:e=>e.key,from:{transform:"translate3d(0, 40px, 0)"},to:{transform:"translate3d(0, 0, 0)"},config:l.slow,onRest:this.onAnimationDone},e=>t=>s.createElement("div",{style:t},e.component)))}}},function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),r=(n(5),n(2).default),a=n(32),o=n(108),l=n(12),c=n(29),p=n(1),d=r.div`
    margin-bottom: 25px;
    color: ${p.colors._white};
`,h=r.form`
    width: 100%;
    max-width: 480px;
    margin-bottom: 50px;
    text-align: center;
`,u=r.div`
    cursor: pointer;
    color: ${p.colors._white};

    :hover {
        text-decoration: underline;
    }
`,m=r.div`
    cursor: pointer;
    color: ${p.colors._white};
    margin-top: 40px;
    opacity: 0.6;
    font-size: 13px;

    :hover {
        text-decoration: underline;
        opacity: 1;
    }
`,g=r(a)`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 25px;

    opacity: ${e=>e.pending?.5:1};
`,f=r.div`
    margin: 5px 0 25px;
    color: ${p.colors.redLight};
`,E={"auth/user-not-found":"We could not find your account, please check your information or create a new account.","auth/wrong-password":"Invalid password."};e.exports=class extends s.Component{constructor(...e){super(...e),i(this,"state",{authForm:"signin",confirmPassword:"",email:"",error:null,password:"",pending:!1,renderPasswordForgotten:!1,resetEmailSent:!1}),i(this,"_mounted",!0),i(this,"emailInputRef",s.createRef()),i(this,"signIn",e=>{e.preventDefault(),this.setState({pending:!0}),l.signInWithEmailPassword(this.state.email,this.state.password).then(()=>{this._mounted&&this.setState({email:"",password:"",pending:!1})}).catch(e=>{this.setState({error:E[e.code]?E[e.code]:e.message,pending:!1})})}),i(this,"signUp",e=>{e.preventDefault(),this.setState({pending:!0});const{confirmPassword:t,email:n,password:i}=this.state;i===t?l.signUpWithEmailPassword(n,i).then(e=>{c(`New user sign up - ${e.user.email}`),this._mounted&&this.setState({email:"",password:"",pending:!1})}).catch(e=>{this.setState({error:e,pending:!1})}):this.setState({error:"Your confirmation and your password must match"})}),i(this,"switchForm",()=>{this.setState({authForm:"signin"===this.state.authForm?"signup":"signin",error:null}),this.focusInput()}),i(this,"onChangeEmail",e=>{this.setState({email:e.target.value,error:null})}),i(this,"onChangePassword",e=>{this.setState({password:e.target.value,error:null})}),i(this,"onChangeConfirmPassword",e=>{this.setState({confirmPassword:e.target.value,error:null})}),i(this,"sendResetPassword",e=>{e.preventDefault(),this.state.email.length&&l.sendResetPasswordEmail(this.state.email).then(()=>{this.setState({resetEmailSent:!0})})}),i(this,"switchPasswordForgotten",()=>{this.setState({renderPasswordForgotten:!this.state.renderPasswordForgotten,resetEmailSent:!1})})}focusInput(){this.emailInputRef.current.focus()}renderPasswordForgotten(){return s.createElement(h,{onSubmit:this.sendResetPassword},this.state.resetEmailSent?s.createElement(d,null,"An email has been sent to reset your password."):null,this.renderEmailInput(),s.createElement(g,null,"Send email to reset your password"),s.createElement(u,{onClick:this.switchPasswordForgotten},"Return to login"))}renderEmailInput(){return s.createElement(d,null,s.createElement(o,{type:"email",placeholder:"Email",onChange:this.onChangeEmail,value:this.state.email,ref:this.emailInputRef}))}componentDidMount(){this.focusInput()}componentWillUnmount(){this._mounted=!1}render(){const{authForm:e,error:t,pending:n,renderPasswordForgotten:i}=this.state;return i?this.renderPasswordForgotten():s.createElement(h,{onSubmit:"signin"===e?this.signIn:this.signUp},this.renderEmailInput(),s.createElement(d,null,s.createElement(o,{type:"password",placeholder:"Password",onChange:this.onChangePassword,value:this.state.password})),"signup"===e?s.createElement(d,null,s.createElement(o,{type:"password",placeholder:"Confirm Password",onChange:this.onChangeConfirmPassword,value:this.state.confirmPassword})):null,s.createElement(g,{pending:n},"Sign ","signin"===e?"in":"up"),t?s.createElement(f,null,t):null,s.createElement(u,{onClick:this.switchForm},"signin"===e?"Create an account":"I already have an account"),s.createElement(m,{onClick:this.switchPasswordForgotten},"Forgot your password?"))}}},function(e,t,n){var i,s,r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(0),l=n(2).default,c=n(5),{connect:p}=n(6),{removeTag:d}=n(13),{searchTag:h}=n(38),u=n(1),m=l.div`
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
`;let f=p()((r=s=class extends o.Component{constructor(...e){super(...e),a(this,"rootRef",o.createRef()),a(this,"onDocumentClick",e=>{this.rootRef.current.contains(e.target)||this.props.close()}),a(this,"removeTag",()=>{this.props.dispatch(d(this.props.props.fileHashPath,this.props.props.tag)),this.props.close()}),a(this,"searchTag",()=>{this.props.dispatch(h(this.props.props.tag)),this.props.close()})}componentDidMount(){document.addEventListener("click",this.onDocumentClick,{passive:!0})}componentWillUnmount(){document.removeEventListener("click",this.onDocumentClick)}render(){const{positionX:e,positionY:t}=this.props;return o.createElement(m,{top:t,left:e,ref:this.rootRef},o.createElement(g,{onClick:this.removeTag},"Remove Tag"),o.createElement(g,{onClick:this.searchTag},"Search all files with this tag"))}},a(s,"propTypes",{close:c.func,dispatch:c.func,positionX:c.number,positionY:c.number,props:c.object}),i=r))||i;e.exports=f},function(e,t,n){const i=n(1);e.exports.setMXML=(e,t)=>({type:i.actionTypes.SET_MXML,filePath:e,mxml:t})},,function(e,t,n){const i=n(1),s={authLoading:!0,data:{},user:null};e.exports=(e=s,t)=>{switch(t.type){case i.actionTypes.AUTH_SET_USER:return{...e,authLoading:!1,user:r(t.user)};case i.actionTypes.AUTH_SIGN_OUT:return s;case i.actionTypes.AUTH_SET_FULL_USER_DATA:return{...e,...t.data};case i.actionTypes.AUTH_NOT_LOGGED:return{...e,authLoading:!1};default:return e}};const r=e=>({email:e.email,emailVerified:e.emailVerified,uid:e.uid})},function(e,t,n){const i=n(1),s={name:null,props:null};e.exports=(e=s,t)=>{switch(t.type){case i.actionTypes.OPEN_MODAL:return{name:t.name,props:t.props};case i.actionTypes.CLOSE_MODAL:return s;default:return e}}},function(e,t,n){const i=n(1),{displayUpdateAvailableModal:s}=n(34),{openModal:r}=n(24),a={notification:{active:!1}};let o=0;const l=()=>o++;e.exports=(e=a,t)=>{switch(t.type){case i.actionTypes.ADD_NOTIFICATION:return{notification:{...t.notification,active:!0,id:l()}};case i.actionTypes.REMOVE_NOTIFICATION:return{notification:{...e.notification,active:!1}};case i.actionTypes.ADD_FILES:if(!t.newImports)return e;const n=Object.values(t.files).filter(e=>e.source!==i.sources.RECORD&&e.source!==i.sources.TRANSFER).length;return n?{notification:{title:`Imported ${n} file${n>1?"s":""}`,status:"success",active:!0,id:l()}}:e;case i.actionTypes.REMOVE_FILE:return{notification:{title:"File removed",status:"success",active:!0,id:l()}};case i.actionTypes.REPLACE_FILE:return{notification:{title:"File successfully replaced",status:"success",active:!0,id:l()}};case i.actionTypes.NOTIFY_MISSING_FILE:return{notification:{title:`We could not locate the file ${t.file.name}. Click here to fix this`,status:"error",active:!0,id:l(),onClick:()=>r(i.modals.fileMissing,{fileHashPath:t.file.hashPath}),timeout:5e3}};case i.actionTypes.UPDATE_AVAILABLE:return{notification:{title:"New version available!",status:"success",active:!0,id:l(),onClick:()=>e=>{e(s(t.url,t.changelog))},timeout:5e3}};case i.actionTypes.SEARCH_BASIC:return t.term.toLowerCase()===i.DEBUG_KEY_SEQUENCE?{notification:{title:"Experimental mode activated",status:"success",active:!0,id:l()}}:e;default:return e}}},function(e,t,n){const i=n(1),s={fileHashPath:void 0,playing:!1};e.exports=(e=s,t)=>{switch(t.type){case i.actionTypes.PLAY_FILE:return{...e,fileHashPath:t.hashPath,playing:!0};case i.actionTypes.TOGGLE_PLAY:return{...e,playing:!e.playing};case i.actionTypes.PAUSE_PLAYER:return{...e,playing:!1};case i.actionTypes.REMOVE_FILE:return t.hashPath===e.fileHashPath?s:e;case i.actionTypes.SET_FILE_ARCHIVE:return t.archived&&t.hashPath===e.fileHashPath?s:e;default:return e}}},function(e,t,n){const i=n(1),s={files:{}};e.exports=(e=s,t)=>{switch(t.type){case i.actionTypes.TRANSFER_SET_FILE_LIST:return{...e,files:t.files};case i.actionTypes.TRANSFER_SAVE_SUCCESS:return{...e,files:{...e.files,[t.fileName]:{...e.files[t.fileName],transfered:!0,success:!0,filePath:t.filePath,receiving:!1}}};case i.actionTypes.TRANSFER_START_TRANFER:return{...e,files:{...e.files,[t.fileName]:{...e.files[t.fileName],receiving:!0}}};case i.actionTypes.TRANSFER_RESET:return s;default:return e}}},function(e,t,n){const i=n(1),{saveApp:s}=n(11),{selectFilesForStorage:r}=n(9),a=n(33),{selectUser:o}=n(18),l=n(12);e.exports=e=>t=>n=>{if(t(n),n.__saveToDB__){const t=e.getState();switch(n.__db){case i.db.files:const e=!{[i.actionTypes.REMOVE_FILE]:!0,[i.actionTypes.REPLACE_FILE]:!0}[n.type],c=r(t),p=o(t);l.saveFullFilesData(p.uid,c,e);break;case i.db.app:s({displayAdvanced:a(t).displayAdvanced});break;default:throw new Error("Error trying to save data, unknow db",n.__db)}}}},function(e,t,n){const i=n(7),s=n(1);let r=null;let a=null;e.exports=()=>e=>t=>{switch(e(t),t.type){case s.actionTypes.ADD_TAG:i.trackEvent("file","add-tag",t.tag);break;case s.actionTypes.CHECK_UPDATE:i.trackEvent("app",`check-update-${t.manual?"manual":"auto"}`,window.__songRiffer.version);break;case s.actionTypes.CHECK_UPDATE_FAILED:i.trackEvent("app","check-update-failed",window.__songRiffer.version);break;case s.actionTypes.CHECK_UPDATE_NO_UPDATE:i.trackEvent("app","check-update-no-update-manual",window.__songRiffer.version);break;case s.actionTypes.UPDATE_AVAILABLE:i.trackEvent("app","check-update-success-auto",window.__songRiffer.version);break;case s.actionTypes.CHECK_UPDATE_SUCCESS:i.trackEvent("app","check-update-success-manual",window.__songRiffer.version);break;case s.actionTypes.CLEAR_SEARCH:i.trackEvent("search","clear-search");break;case s.actionTypes.REMOVE_FILE:i.trackEvent("file","remove-file");break;case s.actionTypes.REMOVE_TAG:i.trackEvent("file","remove-tag",t.tag);break;case s.actionTypes.SEARCH_BASIC:t.term.length&&(e=>{clearTimeout(r),r=setTimeout(()=>{i.trackEvent("search","search-basic",e)},1e3)})(t.term.toLowerCase());break;case s.actionTypes.SEARCH_BPM:i.trackEvent("search","search-bpm",t.bpm);break;case s.actionTypes.SEARCH_TAG:i.trackEvent("search","search-tag",t.tag.toLowerCase());break;case s.actionTypes.SET_BPM:i.trackEvent("file","set-bpm");break;case s.actionTypes.SET_COMMENT:i.trackEvent("file","set-comment");break;case s.actionTypes.SET_FILE_ARCHIVE:i.trackEvent("file",t.archived?"archive":"unarchive");break;case s.actionTypes.SET_RATING:i.trackEvent("file","set-rating");break;case s.actionTypes.SET_SEARCH:t.term&&(e=>{clearTimeout(a),a=setTimeout(()=>{i.trackEvent("search","search-term",e)},1e3)})(t.term.toLowerCase());break;case s.actionTypes.SET_SORT_RULE:i.trackEvent("file","sort",t.sortRule);break;case s.actionTypes.SET_TIME_SIGNATURE:i.trackEvent("file","set-time-signature");break;case s.actionTypes.TOGGLE_ADVANCED_SEARCH:i.trackEvent("search","toggle-advanced")}}},,function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),r=n(2),a=n(16),o=n(12),l=n.n(o),c=n(1);const{Trail:p,config:d}=n(15),h=n(91),u=r.default.div`
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`,m=r.default.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
`,g=r.default.div`
    position: relative;
    padding: 50px;
    background: ${c.colors._blackDark};
    border-radius: 3px;
    text-align: center;
    z-index: 2;
    font-size: 25px;
`;class f extends i.Component{constructor(...e){var t,n,i;super(...e),i={fakeFiles:[]},(n="state")in(t=this)?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}async getFakeFiles(){const e=(await l.a.getRemoteConfigValue("FILES_EMPTY_DATA",[])).map(e=>new a.a(e));this.setState({fakeFiles:e})}componentDidMount(){this.getFakeFiles()}render(){return i.createElement(u,null,i.createElement(m,null,i.createElement(p,{items:this.state.fakeFiles,keys:e=>e.path,from:{transform:"translate3d(0, 40px, 0)",opacity:0},to:{transform:"translate3d(0, 0, 0)",opacity:1}},(e,t)=>n=>{const s=Math.max(Math.min(1-t/this.state.fakeFiles.length,n.opacity),0);return i.createElement("div",{key:`fake-${e.path}`,style:{...n,opacity:s}},i.createElement(h,{file:e}))})),i.createElement(g,null,"Drag and drop files to start building your library"))}}var E=n(15),v=n(78),y=n.n(v);const b=r.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`,T=()=>{const e=E.Keyframes.Spring(async e=>{for(;;)await e({opacity:.2,from:{opacity:0},config:E.config.slow}),await e({opacity:0,from:{opacity:.2},config:E.config.gentle})});return s.a.createElement(b,null,s.a.createElement(e,{native:!0},e=>s.a.createElement(E.animated.div,{style:{opacity:e.opacity}},s.a.createElement(y.a,null))))};var x,S,_,C=n(9);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const A=n(0),{connect:R}=n(6),k=n(5),F=n(2).default,L=n(146),D=n(91),P=n(92),I=n(30),{selectUser:M}=n(18),{addFiles:O,disableNewImports:N,migrateLegacyData:U,setSortRule:$}=n(13),{searchTag:j}=n(38),{setAllowFileDragging:H}=n(34),B=n(90),G=n(7),V=n(12),{checkFiles:z}=n(11),{colors:W,sortRules:K}=n(1),Y=F.div`
    margin-top: 50px;
    color: #555;
`,X=F.div`
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${W.blueLight};
    z-index: 2;
`,q=F(P)`
    color: ${W.blueLight};
`,J=F.div`
    padding: 20px 0;
    text-align: center;
`,Z=F.div`
    display: flex;
    align-items: center;
    cursor: ${e=>e.onClick?"pointer":"default"};
`,Q=F(Z)`
    justify-content: center;
`;let ee=R((e,t)=>({_dataToMigrate:e.files._dataToMigrate,_winBackup:e.files._winBackup,files:Object(C.selectFiles)(e),filesCount:Object(C.selectFilesCount)(e),location:t.location,pending:e.files.pending,selectedFile:Object(C.selectSelectedFile)(e),sortRule:Object(C.selectSortRule)(e),user:M(e)}))((_=S=class extends A.PureComponent{constructor(...e){super(...e),w(this,"listRef",A.createRef()),w(this,"onTagClick",e=>{this.props.dispatch(j(e))}),w(this,"sortByName",()=>{this._sort(K.NAME_ASC,K.NAME_DESC)}),w(this,"sortByDuration",()=>{this._sort(K.DURATION_ASC,K.DURATION_DESC)}),w(this,"sortByBPM",()=>{this._sort(K.BPM_ASC,K.BPM_DESC)}),w(this,"sortByRating",()=>{this._sort(K.RATING_DESC,K.RATING_ASC)})}_sort(e,t){return this.props.sortRule!==e&&this.props.sortRule!==t?this.props.dispatch($(e)):this.props.sortRule===e?this.props.dispatch($(t)):void this.props.dispatch($(null))}scrollToFile(e){if(this.listRef.current)try{const t=document.querySelector(e);t&&(this.listRef.current.scrollTop=t.offsetTop-75)}catch(e){}}listenFilesUpdate(){this.removeFileListener=V.listenForFilesUpdate(this.props.user.uid,e=>{this.props.dispatch(O(e)),z(e)})}renderStickyHeader(){const{files:e,filesCount:t,sortRule:n}=this.props;return A.createElement(X,null,t?A.createElement("div",null,"Showing ",e.length," of ",t," riffs"):A.createElement("div",null," "),A.createElement(q,null,A.createElement(Z,{onClick:this.sortByName},"Name",n===K.NAME_ASC?A.createElement(L,{rotate:!0}):null,n===K.NAME_DESC?A.createElement(L,null):null),A.createElement(Q,{onClick:this.sortByDuration},"Duration",n===K.DURATION_ASC?A.createElement(L,{rotate:!0}):null,n===K.DURATION_DESC?A.createElement(L,null):null),A.createElement(Z,null,"Tags"),A.createElement(Q,{onClick:this.sortByBPM},"BPM",n===K.BPM_ASC?A.createElement(L,{rotate:!0}):null,n===K.BPM_DESC?A.createElement(L,null):null),A.createElement(Q,null,"Time Signature"),A.createElement(Z,{onClick:this.sortByRating},"Rating",n===K.RATING_ASC?A.createElement(L,{rotate:!0}):null,n===K.RATING_DESC?A.createElement(L,null):null),A.createElement(Z,null)))}componentDidMount(){G.trackScreen("home"),null!==this.props._dataToMigrate&&this.props.dispatch(U(this.props._dataToMigrate,this.props._winBackup)),this.listenFilesUpdate(),this.props.dispatch(H(!0)),this.props.location.hash&&this.scrollToFile(this.props.location.hash)}componentDidUpdate(e){e.files!==this.props.files&&B.end("search"),e.location.hash!==this.props.location.hash&&this.scrollToFile(this.props.location.hash)}componentWillUnmount(){this.props.dispatch(H(!1)),this.props.dispatch(N()),this.removeFileListener()}render(){const{files:e,filesCount:t,pending:n,selectedFile:i}=this.props,s=`\n            padding-bottom: ${i?"70px":0};\n        `;return A.createElement(I,{stickyHeader:this.renderStickyHeader(),wrapperStyle:s,scrollElementRef:this.listRef},n?A.createElement(T,null):A.createElement(A.Fragment,null,t?A.createElement(A.Fragment,null,e.length?e.map(e=>A.createElement(D,{file:e,key:e.hashPath,onTagClick:this.onTagClick,selected:i&&i.hashPath===e.hashPath})):A.createElement(J,null,"No files are matching your search"),A.createElement(Y,null,"+ Drag and drop a file to add it to your library")):A.createElement(f,null)))}},w(S,"propTypes",{_dataToMigrate:k.object,dispatch:k.func,files:k.array,filesCount:k.number,selectedFile:k.any,sortRule:k.string}),x=_))||x;var te;function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ie=n(0),{connect:se}=n(6),re=n(2).default,ae=n(87),oe=n(57),{removeFile:le,replaceFile:ce}=n(13),{addNotification:pe}=n(55),{importFiles:de}=n(58),he=n(7),{checkFiles:ue}=n(11),me=n(1),ge=re.div`
    margin-top: 20px;
    padding: 50px;
    text-align: center;
    border: 5px dashed ${e=>e.dragging?me.colors.blueLight:me.colors._blue};
    transition: border-color ease 0.2s;
`,fe=re.div`
    margin-bottom: 20px;
    font-weight: 600;
`;let Ee=se((e,t)=>({file:Object(C.selectFileByHashPath)(e,{fileHashPath:t.fileHashPath}),files:Object(C._selectFiles)(e)}))(te=class extends ie.Component{constructor(...e){super(...e),ne(this,"dropRef",ie.createRef()),ne(this,"state",{dragging:!1,replace:!1}),ne(this,"checkFileAccess",()=>{ue(this.props.files)}),ne(this,"onClickReplace",()=>{this.setState({replace:!0})}),ne(this,"removeFile",()=>{this.props.close(),this.props.dispatch(le(this.props.file.hashPath))}),ne(this,"replaceFile",e=>{de(this.props.dispatch,e.slice(0,1),e=>{const t=e[Object.keys(e)[0]];t&&(this.props.close(),this.props.dispatch(ce(this.props.file.hashPath,t)))})})}componentDidMount(){he.trackScreen("modalFileMissing")}componentDidUpdate(e,t){!t.replace&&this.state.replace&&(this.removeDrag=ae(this.dropRef.current,{onDrop:this.replaceFile,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})),e.file.missing&&!this.props.file.missing&&(this.props.dispatch(pe("File successfully located")),this.props.close())}componentWillUmount(){this.removeDrag&&this.removeDrag()}render(){const{file:e}=this.props,{dragging:t,replace:n}=this.state;return ie.createElement("div",null,ie.createElement(fe,null,"We could not locate the file ",e.name),n?ie.createElement(ge,{ref:this.dropRef,dragging:t},"Drag and drop the file here to replace it"):ie.createElement("div",null,ie.createElement(oe,{onClick:this.checkFileAccess},"Check again"),ie.createElement(oe,{onClick:this.onClickReplace},"Replace it"),ie.createElement(oe,{onClick:this.removeFile,last:!0},"Remove it from my riff library")))}})||te;var ve;function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Te=n(0),xe=n(2).default,{connect:Se}=n(6),_e=n(170),Ce=n(171),we=n(172),Ae=n(173),Re=n(174),ke=n(203),Fe=n(204),Le=n(205),{closeModal:De}=n(24),Pe=n(1),Ie=xe.div`
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
`,Me=xe.div`
    position: relative;
    padding: 35px 20px 20px;
    background: ${Pe.colors._greyDark};
    border-radius: 3px;

    ${e=>e.additionalStyle}
`,Oe=xe.div`
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
`;let Ne=Se(e=>({modal:e.modal}))(ve=class extends Te.Component{constructor(...e){super(...e),be(this,"dimmerRef",Te.createRef()),be(this,"onDimmerClick",e=>{e.target===this.dimmerRef.current&&this.props.dispatch(De())}),be(this,"close",()=>{this.props.dispatch(De())})}getModal(){const{name:e}=this.props.modal,t={[Pe.modals.comment]:_e,[Pe.modals.fileMissing]:Ee,[Pe.modals.fileOptions]:Ce,[Pe.modals.invalidFile]:we,[Pe.modals.removeFile]:Ae,[Pe.modals.tabs]:Re,[Pe.modals.tags]:ke,[Pe.modals.text]:Fe,[Pe.modals.updateAvailable]:Le};if(!t[e])return null;const n=t[e];return Te.createElement(n,ye({},this.props.modal.props,{close:this.close}))}getRootStyle(){const{name:e}=this.props.modal;switch(e){case Pe.modals.updateAvailable:return Le.rootStyle;default:return""}}render(){const{modal:e}=this.props;if(!e.name)return null;const t=e.name===Pe.modals.updateAvailable&&e.props.mandatory;return Te.createElement(Ie,{onClick:this.onDimmerClick,ref:this.dimmerRef,darker:t},Te.createElement(Me,{additionalStyle:this.getRootStyle()},this.getModal(),t?null:Te.createElement(Oe,{onClick:this.close},"X")))}})||ve;var Ue=n(26),$e=n(52),je=n.n($e),He=n(124);const Be=r.default.div`
    display: flex;
    align-items: center;
    height: 35px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: rgba(255, 255, 255, 0.2);
    margin-bottom: 7px;
`,Ge=r.default.div`
    width: 35px;
    height: 35px
    padding: 7px;
    font-size: 15px;
    background: ${c.colors._white};
    color: ${c.colors._blackDark};
    border-radius: 100%;
    text-align: center;
    line-height: 35px;
`,Ve=r.default.div`
    flex: 1;
    margin-left: 10px;
    padding: 7px;
`;class ze extends i.Component{render(){const{song:e}=this.props;return i.createElement(Be,null,i.createElement(Ge,null,e.position),i.createElement(Ve,null,e.name))}}function We(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Ke=n(30),Ye=n(12),Xe=r.default.div`
    display: flex;
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${c.colors.blueLight};
    z-index: 2;
`,qe=r.default.div`
    flex: 1;
    text-align: center;
    font-size: 25px;
`,Je=r.default.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
`,Ze=r.default.div`
    width: 50%;
    height: 100%;
`;class Qe extends i.Component{constructor(...e){super(...e),We(this,"removeListener",void 0),We(this,"state",{newSongName:"",project:null}),We(this,"onChangeNewSongName",e=>{this.setState({newSongName:e.target.value})}),We(this,"addNewSong",e=>{if(e.preventDefault(),!this.state.newSongName.length)return;const t=je()(this.state.project,"songs",[]).length;Ye.addSongToProject(this.state.project.id,{position:t,name:this.state.newSongName}),this.setState({newSongName:""})})}listenProjectUpdate(){this.removeListener=Ye.listenForProjectUpdate(this.props.match.params.projectId,e=>{this.setState({project:e})})}componentDidMount(){this.listenProjectUpdate()}componentWillUnmount(){"function"==typeof this.removeListener&&this.removeListener()}renderHeader(){const{project:e}=this.state;return i.createElement(Xe,null,i.createElement("div",null,i.createElement(Ue.Link,{to:c.routes.projects},"List of projects")),i.createElement(qe,null,e.name))}render(){const{project:e}=this.state;return e?(console.log(e),i.createElement(Ke,{stickyHeader:this.renderHeader()},i.createElement(Je,null,i.createElement(Ze,null,i.createElement("div",null,"image here"),i.createElement("div",null,"Last updated: ",Object(He.a)(e.updatedAt,{addSuffix:!0}))),i.createElement(Ze,null,i.createElement(qe,null,"Songs"),e.songs&&e.songs.length?i.createElement("div",null,e.songs.map(e=>i.createElement(ze,{song:e,key:`song-${e.position}`}))):i.createElement("div",null,"Add the first song to your project:"),i.createElement("form",{onSubmit:this.addNewSong},i.createElement("input",{type:"text",value:this.state.newSongName,onChange:this.onChangeNewSongName})))))):i.createElement(Ke,null,i.createElement(T,null))}}var et=n(6),tt=n(32),nt=n.n(tt);class it extends i.Component{render(){const{project:e}=this.props;return i.createElement("div",null,i.createElement(Ue.Link,{to:`/project/${e.id}`},e.name))}}var st,rt=n(19),at=n.n(rt);function ot(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const lt=n(108),ct=n(30),pt=n(12),dt=n(7),{selectUser:ht}=n(18),ut=r.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`,mt=r.default.form`
    display: flex;
    flex-direction: column;
`;let gt=Object(et.connect)(e=>({user:ht(e)}))(st=class extends s.a.Component{constructor(...e){super(...e),ot(this,"removeProjectsListener",void 0),ot(this,"state",{newProjectName:"",projects:null}),ot(this,"createNewProject",e=>{e.preventDefault(),this.state.newProjectName.length&&pt.createProject(this.props.user.uid,this.state.newProjectName).then(e=>{this.props.history.push(`/project/${e}`)})})}listenProjectsUpdate(){this.removeProjectsListener=pt.listenForProjectsUpdate(this.props.user.uid,e=>{this.setState({projects:e})})}renderLoading(){return s.a.createElement(T,null)}renderProjets(){const{projects:e}=this.state;return s.a.createElement(s.a.Fragment,null,e.map(e=>s.a.createElement(it,{project:e,key:e.name})))}renderEmptyState(e){return s.a.createElement(ut,null,s.a.createElement("div",null,"Create ",e?"a new project:":"your first project:"),s.a.createElement(at.a,null,s.a.createElement(mt,{onSubmit:this.createNewProject},s.a.createElement(lt,{onChange:e=>this.setState({newProjectName:e.target.value}),type:"text",value:this.state.newProjectName,placeholder:"Project name"}),s.a.createElement(at.a,null,s.a.createElement(nt.a,null,"Create")))))}componentDidMount(){dt.trackScreen("projects"),this.listenProjectsUpdate()}componentWillUnmount(){this.removeProjectsListener()}render(){const{projects:e}=this.state;return s.a.createElement(ct,null,null===e?this.renderLoading():s.a.createElement(s.a.Fragment,null,this.renderProjets(),this.renderEmptyState(e.length)))}})||st;var ft,Et,vt,yt=n(17);function bt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Tt=n(28),xt=n(0),St=n(2).default,{connect:_t}=n(6),Ct=n(5),wt=n(207),{Link:At}=n(26),Rt=n(32),kt=n(109),Ft=n(36),Lt=n(30),Dt=n(110),Pt=n(111),{addFiles:It}=(n(19),n(13)),{reset:Mt}=n(112),{pausePlayer:Ot}=n(44),Nt=n(7),{getFilesDurationAndBPM:Ut}=n(58),{checkFileExists:$t,saveMedia:jt}=n(11),Ht=n(1),Bt=St.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: ${e=>e.recording?0:"-100%"};
    left: 0;
    transition: top 0.3s ease;
`,Gt=St.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`,Vt=St.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 200px;
    height: 200px;
    background: ${e=>e.recording?Ht.colors.redLight:Ht.colors.red};
    border-radius: 100%;
    transition: background ease 0.2s;
    cursor: pointer;
    text-align: center;
`,zt=St.div`
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
`,Wt=St.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`,Kt=St.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`,Yt=St(Ft)`
    width: 70%;
    margin-bottom: 15px;
    text-align: center;
    border: 0;
    border-bottom: 1px solid ${e=>e.error?Ht.colors.red:"rgba(255, 255, 255, 0.3)"};
    border-radius: 0;
`,Xt=St.div`
    margin-bottom: 15px;
    color: ${Ht.colors.red};
    text-align: center;
`,qt=St(Rt)`
    padding: 5px 15px;
    ${e=>e.background?`background: ${e.background};`:""}
    ${e=>e.disabled?"\n        cursor: not-allowed;\n        opacity: 0.5;\n    ":""}
`,Jt=St.div`
    text-align: center;
`,Zt=St.div`
    margin-bottom: 15px;
`,Qt=St.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;function en(e){for(var t,n=e.inputBuffer.getChannelData(0),i=n.length,s=0,r=0;r<i;r++)t=n[r],Math.abs(t)>=this.clipLevel&&(this.clipping=!0,this.lastClip=window.performance.now()),s+=t*t;var a=Math.sqrt(s/i);this.volume=Math.max(a,this.volume*this.averaging)}let tn=_t(e=>({recorder:e.recorder}))((vt=Et=class extends xt.Component{constructor(...e){super(...e),bt(this,"state",{audio:null,name:"",playing:!1,recording:!1}),bt(this,"inputRef",xt.createRef()),bt(this,"player",xt.createRef()),bt(this,"recordButton",xt.createRef()),bt(this,"toggleRecording",()=>{this.state.recording?this.stopRecording():this.startRecording()}),bt(this,"startRecording",()=>{this.props.dispatch(Ot(!0)),Nt.trackEvent("recorder","start-recording"),this.setState({recording:!0}),this.getAudio()}),bt(this,"pad",e=>1===`${e}`.length?`0${e}`:`${e}`),bt(this,"stopRecording",()=>{Nt.trackEvent("recorder","stop-recording");const{day:e,hours:t,minutes:n,month:i,seconds:s,year:r}=this.getDate();this.setState({name:`SongRiffer-idea-${r}-${i}-${e}-${t}${n}${s}`}),this.recorder.stop()}),bt(this,"onDataAvailable",e=>{this.chunks.push(e.data)}),bt(this,"onRecorderStop",()=>{const e=new Blob(this.chunks,{type:"audio/webm;codecs=opus"});this.setState({audio:URL.createObjectURL(e),recording:!1}),this.inputRef.current.focus(),cancelAnimationFrame(this.raf),this.recordButton.current.style.boxShadow=""}),bt(this,"drawVolume",()=>{const e=Math.max(0,1e3*this.volumeMeter.volume);this.recordButton.current.style.boxShadow=`\n            10px 10px ${e+40}px 3px ${Ht.colors.bluePastel},\n            -10px -10px ${e+40}px 3px ${Ht.colors._purpleLight}\n        `,this.raf=requestAnimationFrame(this.drawVolume)}),bt(this,"onNameChange",e=>{this.setState({name:e.target.value}),$t(`${e.target.value}.wav`)}),bt(this,"onNameKeyDown",e=>{"Enter"===e.key&&this.save()}),bt(this,"save",()=>{const e=new AudioContext,t=new Blob(this.chunks,{type:"audio/webm"}),n=new FileReader;this.state.name;n.onload=()=>{e.decodeAudioData(n.result,e=>{const t=wt(e);jt(Ht.saveTypes.RECORDER,`${this.state.name}.wav`,new Uint8Array(t))})},n.readAsArrayBuffer(t)}),bt(this,"importFile",()=>{Nt.trackEvent("recorder","save",this.state.name),Nt.trackEvent("file","file-import","recorder",1);const e=`${this.state.name}.wav`,t=this.props.recorder.filePath,n={name:e,path:t,source:Ht.sources.RECORD,type:"audio/wav"},i=new a.a(n);this.props.dispatch(It({[Object(yt.getFilePathHash)(t)]:i.toJSON()},!0)),Ut(this.props.dispatch,[i])}),bt(this,"reset",()=>{this.chunks=[],this.setState({audio:null,playing:!1}),this.pausePlayer(),Nt.trackEvent("recorder","discard")}),bt(this,"togglePlay",()=>{this.setState({playing:!this.state.playing},()=>{this.state.playing?this.playPlayer():this.pausePlayer()})})}getDate(){const e=new Date;return{day:this.pad(e.getDate()),hours:e.getHours(),minutes:e.getMinutes(),month:this.pad(e.getMonth()+1),seconds:e.getSeconds(),year:e.getFullYear()}}getAudio(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(e=>{this.watchVolume(e),this.recordAudio(e)})}watchVolume(e){if(null===e)return;this.stream=e;const t=new AudioContext,n=t.createMediaStreamSource(this.stream);var i,s,r,a,o;this.volumeMeter=((o=(i=t).createScriptProcessor(512)).onaudioprocess=en,o.clipping=!1,o.lastClip=0,o.volume=0,o.clipLevel=s||.98,o.averaging=r||.95,o.clipLag=a||750,o.connect(i.destination),o.checkClipping=function(){return!!this.clipping&&(this.lastClip+this.clipLag<window.performance.now()&&(this.clipping=!1),this.clipping)},o.shutdown=function(){this.disconnect(),this.onaudioprocess=null},o),n.connect(this.volumeMeter),this.drawVolume()}recordAudio(e){this.recorder=new MediaRecorder(e),this.chunks=[],this.recorder.ondataavailable=this.onDataAvailable,this.recorder.onstop=this.onRecorderStop,this.recorder.start()}playPlayer(){this.player.current.play()}pausePlayer(){this.player.current.pause()}componentDidMount(){Nt.trackScreen("record")}componentDidUpdate(e){!e.recorder.saveSuccess&&this.props.recorder.saveSuccess&&this.importFile()}componentWillUnmount(){cancelAnimationFrame(this.raf),this.props.dispatch(Mt())}render(){const{recorder:e}=this.props,{audio:t,name:n,playing:i,recording:s}=this.state,r=!!e.fileAlreadyExists&&Tt.basename(e.fileAlreadyExists,Tt.extname(e.fileAlreadyExists))===n;return xt.createElement(Lt,{wrapperStyle:"\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    padding: 50px;\n    overflow: hidden;\n"},xt.createElement(Bt,{recording:s||!t},xt.createElement(Gt,null,xt.createElement(Vt,{onClick:this.toggleRecording,recording:s,ref:this.recordButton},s?"STOP":"START"))),xt.createElement(zt,{recording:s||!t},e.saveSuccess?xt.createElement(Jt,null,xt.createElement(kt,{width:"50"}),xt.createElement(Zt,null,n," was successfully added to your library!"),xt.createElement(Qt,null,xt.createElement(At,{to:Ht.routes.home},xt.createElement(qt,null,"Go back to your file list")))):xt.createElement(xt.Fragment,null,xt.createElement("div",null,xt.createElement("audio",{src:t,ref:this.player}),xt.createElement("div",{onClick:this.togglePlay},i?xt.createElement(Dt,null):xt.createElement(Pt,null))),xt.createElement(Wt,null,xt.createElement(Yt,{onChange:this.onNameChange,onKeyDown:this.onNameKeyDown,ref:this.inputRef,type:"text",value:n,error:r}),xt.createElement(Xt,null,r?"This file already exists, please choose another name":xt.createElement("span",null," ")),xt.createElement(Kt,null,xt.createElement(qt,{onClick:this.reset,background:Ht.colors._grey},"Discard"),xt.createElement(qt,{onClick:this.save,disabled:r},"Save"))))))}},bt(Et,"propTypes",{dispatch:Ct.func,recorder:Ct.object}),ft=vt))||ft;var nn,sn,rn,an=n(123);function on(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ln=n(0),{connect:cn}=n(6),pn=n(5),dn=n(87),hn=n(2).default,{MemoryRouter:un,Route:mn,Switch:gn}=n(26),fn=n(138),En=n(144),vn=n(145),yn=n(168),bn=n(169),Tn=n(206),xn=n(208),Sn=n(209),_n=n(211),Cn=n(213),wn=n(215),An=n(220),Rn=n(222),{addFiles:kn,setMissingFiles:Fn}=n(13),{toggleAdvanced:Ln}=n(38),{closeModalEsc:Dn}=n(24),{notLogged:Pn,setFullUserData:In,signIn:Mn}=n(113),{checkUpdate:On,closeContextMenu:Nn,resize:Un}=n(34),{togglePlay:$n}=n(44),{recorderFileAlreadyExists:jn,recorderSaveSuccess:Hn}=n(112),{transferSaveSuccess:Bn}=n(115),{setMXML:Gn}=n(223),{getFilesDurationAndBPM:Vn,importFiles:zn}=n(58),Wn=n(12),Kn=n(7),Yn=n(29),Xn=n(33),{isAuthenticated:qn,isUserFullyLoaded:Jn,selectUser:Zn}=n(18),{checkFilesDBExists:Qn,getAppConfig:ei,onMissingFiles:ti,setCallback:ni}=n(11),ii=n(1),si=(hn.div`
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${ii.colors._white};
`,hn.div`
    display: flex;
    padding: 20px 0 20px 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`),ri=hn.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
`,ai=hn.div`
    flex: 1;
    opacity: ${e=>e.dragging?.3:1};
    transition: opacity ease 0.4s;
`,oi=hn.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: ${ii.colors.blueLight};
    border: 20px dashed ${ii.colors.blueLight};
    font-size: 200px;
    justify-content: center;
    align-items: center;
    z-index: 100;
    opacity: ${e=>e.dragging?1:0};
    transition: opacity ease 0.7s;
`,li=hn.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    // left padding is added in sidebar and header
    // so the sidebar active link stuff is on the side
    padding: 15px 15px 15px 0;
    color: ${ii.colors._white};
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
`,ci=hn.div`
    position: relative;
    display: flex;
    align-items: center;
`;let pi=cn(e=>({advancedSearchVisible:Xn(e).displayAdvanced,allowFileDragging:e.application.allowFileDragging,appReady:Jn(e),appWidth:e.application.appWidth,authLoading:e.auth.authLoading,contextMenu:e.application.contextMenu,enableExperimental:e.application.enableExperimental,isAuthenticated:qn(e),modalOpen:!!e.modal.name,user:Zn(e)}))((rn=sn=class extends ln.Component{constructor(...e){super(...e),on(this,"state",{dragging:!1,hasError:!1,splashAnimationDone:!1}),on(this,"onSplashAnimationDone",()=>{this.setState({splashAnimationDone:!0})}),on(this,"importFiles",e=>{this.props.isAuthenticated&&zn(this.props.dispatch,e,e=>{for(let t in e)e[t].newImport=!0;this.props.dispatch(kn(e,!0))})}),on(this,"getDataFromMain",(e,t)=>{switch(e){case ii.mainConsts.events.CHECK_FILES_DB:t.exists&&this.props.dispatch({type:ii.actionTypes.SET_MIGRATION_DATA,data:t.data,_winBackup:t._winBackup});break;case ii.mainConsts.events.DATA_FETCHED:if(t.db===ii.db.files){this.props.dispatch(kn(t.data));const e=Object.values(t.data).reduce((e,t)=>(t.bpm&&t.duration||e.push(t),e),[]);return void(e.length&&Vn(this.props.dispatch,e))}t.db===ii.db.app&&t.data.displayAdvanced&&this.props.dispatch(Ln());break;case ii.mainConsts.events.FILE_ALREADY_EXISTS:this.props.dispatch(jn(t));break;case ii.mainConsts.events.FILE_SYSTEM_ERROR:console.log(t);break;case ii.mainConsts.events.FILE_SAVE_SUCCESS:t.saveType===ii.saveTypes.RECORDER?this.props.dispatch(Hn(t.filePath)):t.saveType===ii.saveTypes.TRANSFER&&this.props.dispatch(Bn(t.fileName,t.filePath));break;case ii.mainConsts.events.GET_MXLM_SUCCESS:this.props.dispatch(Gn(t.filePath,t.mxml));break;case ii.mainConsts.events.OPEN_DEEPLINK:this.handleDeeplink(t.url)}}),on(this,"handleDeeplink",e=>{try{const t=e.replace("songriffer://songriffer.com?deeplink=",""),n=JSON.parse(decodeURIComponent(t));switch(n.type){case ii.deeplinkTypes.LOGIN_FACEBOOK:Wn.signInWithFacebookToken(n.params.token);break;case ii.deeplinkTypes.LOGIN_GOOGLE:Wn.signInWithGoogleToken(n.params.token);break;default:Yn(`Unsupported deeplink type ${n.type} - raw deeplink: ${t}`)}}catch(t){const n=`Could not parse deeplink args: ${e}`;console.error(n),Kn.exception(n),Yn(`*Error* ${n}`)}}),on(this,"onMissingFiles",e=>{this.props.dispatch(Fn(e.files))}),on(this,"onKeyDown",e=>{if("Escape"===e.key&&this.props.dispatch(Dn()),32===e.keyCode&&e.target===document.body&&(this.props.dispatch($n()),e.preventDefault()),!this.props.modalOpen&&e.target&&"INPUT"!==e.target.tagName&&/^[a-zA-Z]{1}$/.test(e.key)){let e=null;e=this.props.advancedSearchVisible?"#advanced-search-input":"#basic-search-input";const t=document.querySelector(e);t&&t.focus()}}),on(this,"onResize",()=>{window.innerWidth!==this.props.appWidth&&this.props.dispatch(Un(window.innerWidth))}),on(this,"setFullUser",e=>{this.props.dispatch(In(e))}),on(this,"onAuthChange",e=>{e?(this.props.dispatch(Mn(e)),Wn.getFullUser(e.uid).then(this.setFullUser)):this.props.dispatch(Pn())}),on(this,"closeContextMenu",()=>{this.props.dispatch(Nn())}),on(this,"catchError",e=>{this.setState({hasError:!0});try{const t=`${e.message} \n \`\`\`${e.error.stack}\`\`\``;Kn.exception(e.message),Yn(`*Error* ${t}`)}catch(e){Yn("*Error* unavailable message"),Kn.exception("Error - unavailable message")}})}detectDragDrop(){this.dragDropActivated=!0,this.removeDragDrop=dn(document.body,{onDrop:this.importFiles,onDragOver:()=>{this.setState({dragging:!0})},onDragLeave:()=>{this.setState({dragging:!1})}})}listenForFullUserUpdate(){Wn.listenForFullUserUpdate(this.props.user.uid,this.setFullUser).then(e=>{this.fullUserListener=e})}removeFullUserListener(){"function"==typeof this.fullUserListener&&this.fullUserListener()}checkUpdate(){clearTimeout(this.updateTimeout),this.props.dispatch(On(!1)),this.updateTimeout=setTimeout(()=>{this.checkUpdate()},ii.updateInterval)}componentDidCatch(){this.setState({hasError:!0})}componentDidMount(){Qn(),window.addEventListener("error",this.catchError,{passive:!0}),this.detectDragDrop(),ti(this.onMissingFiles),ni(this.getDataFromMain),Wn.onAuthChange(this.onAuthChange),Kn.trackEvent("app","app-start",window.__songRiffer.platform),Kn.trackEvent("app",`platform-${window.__songRiffer.platform}`,window.__songRiffer.release),document.addEventListener("keydown",this.onKeyDown),window.addEventListener("resize",this.onResize,{passive:!0}),this.onResize(),this.updateTimeout=setTimeout(()=>{this.checkUpdate()},3e3)}componentDidUpdate(e){!this.props.modalOpen&&this.props.allowFileDragging||!this.dragDropActivated||(this.removeDragDrop(),this.dragDropActivated=!1),this.props.modalOpen||!this.props.allowFileDragging||this.dragDropActivated||this.detectDragDrop(),!e.appReady&&this.props.appReady&&ei(),!e.isAuthenticated&&this.props.isAuthenticated?this.listenForFullUserUpdate():e.isAuthenticated&&!this.props.isAuthenticated&&this.removeFullUserListener()}componentWillUnmount(){clearTimeout(this.updateTimeout),this.removeFullUserListener()}render(){const{appReady:e,authLoading:t,contextMenu:n,enableExperimental:i,isAuthenticated:s}=this.props,{dragging:r,hasError:a,splashAnimationDone:o}=this.state;return e&&o?a?ln.createElement(vn,null):ln.createElement(un,null,ln.createElement(li,null,ln.createElement(En,null),ln.createElement(yn,null),ln.createElement(si,null,ln.createElement(ci,null,ln.createElement(bn,{style:"margin-left: 3px;"})),ln.createElement(gn,null,ln.createElement(mn,{exact:!0,path:ii.routes.home,component:Cn}))),ln.createElement(ri,null,ln.createElement(wn,null),ln.createElement(oi,{dragging:r},"+"),ln.createElement(ai,{dragging:r},ln.createElement(gn,null,ln.createElement(mn,{path:ii.routes.project,component:Qe}),ln.createElement(mn,{path:ii.routes.projects,component:gt}),ln.createElement(mn,{path:ii.routes.recorder,component:tn}),ln.createElement(mn,{path:ii.routes.settings,component:xn}),ln.createElement(mn,{path:ii.routes.stats,component:Sn}),ln.createElement(mn,{path:ii.routes.transfer,component:an.a}),ln.createElement(mn,{exact:!0,path:ii.routes.home,component:ee}))),ln.createElement(fn,null),ln.createElement(Ne,null),ln.createElement(Tn,null),ln.createElement(_n,null)),n.active?ln.createElement(Rn,{close:this.closeContextMenu,positionX:n.positionX,positionY:n.positionY,props:n.props}):null)):ln.createElement(An,{authLoading:t,isAuthenticated:s,onAnimationDone:this.onSplashAnimationDone})}},on(sn,"propTypes",{advancedSearchVisible:pn.bool,allowFileDragging:pn.bool,appReady:pn.bool,appStartTime:pn.number,appWidth:pn.number,authLoading:pn.bool,contextMenu:pn.object,dispatch:pn.func,isAuthenticated:pn.bool,modalOpen:pn.bool}),nn=rn))||nn;const di={allowFileDragging:!1,appWidth:0,contextMenu:{},dbLoaded:!1,enableExperimental:!1,updateAvailable:!1},{getFilePathHash:hi}=n(17),ui={_dataToMigrate:null,_winBackup:!1,files:{},pending:!0,sortRule:null,selectedFile:null},mi=(e,t)=>{const n={...e};for(let e in t)n[e]?n[e]={...n[e],added:t[e].added,size:t[e].size}:n[e]=t[e];return n},gi=(e,t)=>{if(!t.length)return e;const n={...e};return Object.keys(n).forEach(e=>{t.includes(e)?n[e]={...n[e],missing:!0}:n[e].missing&&(n[e]={...n[e],missing:!1})}),n},fi=(e,t,n)=>{const i={...e};return delete i[t],i[hi(n.path)]=n,i},Ei=(e,t,n)=>{if(!e[t])return e;const i=e[t];return Object.keys(i.tags).map(e=>e.toLowerCase()).includes(n.toLowerCase())?e:{...e,[t]:{...i,tags:{...e[t].tags,[n]:!0}}}},vi={filePath:null,mxml:null},yi={fileAlreadyExists:"",filePath:null,saveSuccess:!1},bi={advancedTransitionDone:!0,archived:c.searchArchived.NON_ARCHIVED,basicTerm:"",bpm:"",bpmDelta:10,displayAdvanced:!1,tags:{},term:""},{combineReducers:Ti}=n(51),xi=Ti({application:(e=di,t)=>{switch(t.type){case c.actionTypes.ADD_FILES:return{...e,dbLoaded:!0};case c.actionTypes.UPDATE_AVAILABLE:return{...e,updateAvailable:!0};case c.actionTypes.APP_RESIZE:return{...e,appWidth:t.width};case c.actionTypes.DISPLAY_TAG_CONTEXT_MENU:return{...e,contextMenu:{active:!0,positionX:t.positionX,positionY:t.positionY,props:t.props}};case c.actionTypes.CLOSE_CONTEXT_MENU:return{...e,contextMenu:di.contextMenu};case c.actionTypes.SEARCH_BASIC:return t.term.toLowerCase()===c.DEBUG_KEY_SEQUENCE?{...e,enableExperimental:!0}:e;case c.actionTypes.SET_ALLOW_FILE_DRAGGING:return{...e,allowFileDragging:t.allowFileDragging};default:return e}},auth:n(225),files:(e=ui,t)=>{switch(t.type){case c.actionTypes.SET_MIGRATION_DATA:return{...e,_dataToMigrate:t.data,_winBackup:t._winBackup};case c.actionTypes.ADD_TAG:return{...e,files:Ei(e.files,t.hashPath,t.tag)};case c.actionTypes.REMOVE_TAG:const n=e.files[t.hashPath],i={...n.tags};return delete i[t.tag],{...e,files:{...e.files,[t.hashPath]:{...n,tags:i}}};case c.actionTypes.EDIT_FILE:let s;return s=!t.automaticEdit&&t.edit.bpm||t.automaticEdit&&t.edit.bpm&&!e.files[t.hashPath].bpm?t.edit.bpm:e.files[t.hashPath].bpm,{...e,files:{...e.files,[t.hashPath]:{...e.files[t.hashPath],...t.edit,bpm:s}}};case c.actionTypes.ADD_FILES:return{...e,_dataToMigrate:null,files:mi(e.files,t.files),pending:!1};case c.actionTypes.REMOVE_FILE:const r={...e.files};return delete r[t.hashPath],{...e,files:r,selectedFile:e.selectedFile===t.hashPath?null:e.selectedFile};case c.actionTypes.SET_FILE_ARCHIVE:return t.hashPath===e.selectedFile?{...e,selectedFile:null}:e;case c.actionTypes.PLAY_FILE:return{...e,selectedFile:t.hashPath};case c.actionTypes.REPLACE_FILE:return{...e,files:fi(e.files,t.oldFileHashPath,t.newFile)};case c.actionTypes.SET_MISSING_FILES:return{...e,files:gi(e.files,t.filesHashPath)};case c.actionTypes.SET_SORT_RULE:return{...e,sortRule:t.sortRule};case c.actionTypes.PAUSE_PLAYER:return t.unsetSelectedFile?{...e,selectedFile:null}:e;case c.actionTypes.DISABLE_NEW_IMPORTS:const a={...e.files};for(const e of t.files)a[e]={...a[e],newImport:!1};return{...e,files:a};case c.actionTypes.SET_FILE_UPLOAD_STATUS:return{...e,files:{...e.files,[t.hashPath]:{...e.files[t.hashPath],uploaded:t.uploaded}}};case c.actionTypes.AUTH_SIGN_OUT:return ui;default:return e}},modal:n(226),mxml:(e=vi,t)=>{switch(t.type){case c.actionTypes.SET_MXML:return{...e,filePath:t.filePath,mxml:t.mxml};default:return e}},notifications:n(227),player:n(228),recorder:(e=yi,t)=>{switch(t.type){case c.actionTypes.RECORDER_FILE_ALREADY_EXISTS:return{...e,fileAlreadyExists:t.fileName};case c.actionTypes.RECORDER_SAVE_SUCCESS:return{...e,filePath:t.filePath,saveSuccess:!0};case c.actionTypes.RECORDER_RESET:return yi;default:return e}},search:(e=bi,t)=>{switch(t.type){case c.actionTypes.SEARCH_BASIC:return{...e,basicTerm:t.term};case c.actionTypes.SET_SEARCH:return{...e,term:t.term,basicTerm:""};case c.actionTypes.TOGGLE_ADVANCED_SEARCH:return{...bi,displayAdvanced:!e.displayAdvanced,advancedTransitionDone:!1};case c.actionTypes.ADVANCED_TRANSITION_DONE:return{...e,advancedTransitionDone:!0};case c.actionTypes.SEARCH_TAG:return{...e,advancedTransitionDone:!1,displayAdvanced:!0,basicTerm:"",tags:{...e.tags,[t.tag]:!0}};case c.actionTypes.REMOVE_SEARCH_TAG:const n={...e.tags};return delete n[t.tag],{...e,basicTerm:"",tags:n};case c.actionTypes.SEARCH_BPM:return{...e,basicTerm:"",bpm:isNaN(parseInt(t.bpm,10))?"":parseInt(t.bpm,10)};case c.actionTypes.SEARCH_BPM_DELTA:return{...e,bpmDelta:isNaN(parseInt(t.bpmDelta,10))?10:parseInt(t.bpmDelta,10)};case c.actionTypes.CLEAR_SEARCH:return{...bi,displayAdvanced:e.displayAdvanced};case c.actionTypes.SET_SEARCH_ARCHIVED:return{...e,archived:t.archived};default:return e}},transfer:n(229)}),{createStore:Si,applyMiddleware:_i}=n(51),Ci=Si(xi,_i(n(224).default,n(230),n(231))),wi=n(0),{Provider:Ai}=n(6),{render:Ri}=n(40);Ri(wi.createElement(Ai,{store:Ci},wi.createElement(pi,null)),document.querySelector("#root"))}]);