(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{207:function(e,t,n){const l=n(50),{_selectFiles:r,selectTags:a}=n(11);e.exports=l([r,a],(e,t)=>{const n=Object.values(e).filter(e=>!e.archived),l=n.reduce((e,t)=>(e.totalDuration+=t.duration,Object.keys(t.tags).forEach(n=>{const l=n.toLowerCase();e.tags[l]?(e.tags[l].rating+=t.rating+1,e.tags[l].occurence+=1,e.tags[l].average=e.tags[l].rating/e.tags[l].occurence):e.tags[l]={rating:t.rating+1,occurence:1,average:t.rating+1,tag:l}}),e),{totalDuration:0,tags:{}}),r=Object.values(l.tags).sort((e,t)=>t.occurence-e.occurence),a=Object.values(l.tags).sort((e,t)=>t.average-e.average);return{tagsSortedByAverageRating:a,tagsSortedByOccurence:r,topTagAverage:a.length?a[0]:0,topTagOccurence:r.length?r[0]:0,totalDuration:l.totalDuration,totalFiles:n.length,totalTags:t.length}},"selectStats")},235:function(e,t,n){"use strict";n.r(t);var l,r,a,o=n(6);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=n(0),s=n(2).default,{connect:u}=n(7),g=n(5),{config:d,Spring:m}=n(13),p=n(42),E=n(35),h=n(207),{selectUser:b}=n(28),{formatDuration:f}=n(51),{getTagColor:v,getFontColorForColor:x}=n(49),w=n(10),y=n(1),S=s(s.div`
    margin-bottom: 15px;
`)`
    display: flex;
    justify-content: space-between;
    text-align: center;
`,T=s.div`
    height: 1px;
    margin-bottom: 25px;
    background: ${y.colors.blueLight};
`,F=s.div`
    width: 33%;
`,k=s.div`
    width: 50%;
`,j=s.div`
    display: flex;
    justify-content: center;
`,O=s.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`,$=s.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    text-align: left;
`,D=s.div`
    flex: 1;
    position: relative;
    padding: 5px;
    margin-left: 10px;
    color: ${e=>e.color};

    span {
        position: relative;
        z-index: 1;
    }
`,C=s.div`
    display: table-cell;
    width: 35px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,z=s.div`
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 3px;
    background: ${e=>e.background};
    z-index: 0;
`,A=s.div`
    font-size: 22px;
    text-align: center;
    font-weight: bold;
`,B=s.div`
    font-size: 32px;
    font-weight: bold;
    color: ${e=>e.color?e.color:y.colors.purple};
`,U=s.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;let J=u(e=>({stats:h(e),user:b(e)}))((a=r=class extends i.Component{constructor(...e){super(...e),c(this,"state",{userStats:null})}renderNoFiles(){return i.createElement(p,null,i.createElement(U,null,i.createElement("div",null,"Your library is empty! Start adding files to your library to see your stats.")))}renderUserStats(){const{userStats:e}=this.state;return null}componentDidMount(){w.trackScreen("stats"),o.a.getUserStats(this.props.user.uid).then(e=>{this.setState({userStats:e})})}render(){const{stats:e}=this.props;return e.totalFiles?i.createElement(p,null,i.createElement(S,null,i.createElement(F,null,i.createElement(A,null,"Total files"),i.createElement(E,null,i.createElement(B,null,i.createElement(m,{from:{number:0},to:{number:e.totalFiles}},e=>e.number.toFixed(0))))),i.createElement(F,null,i.createElement(A,null,"Total duration"),i.createElement(E,null,i.createElement(B,null,i.createElement(m,{from:{number:0},to:{number:e.totalDuration}},e=>f(e.number.toFixed(0)))))),i.createElement(F,null,i.createElement(A,null,"Total tags"),i.createElement(E,null,i.createElement(B,null,i.createElement(m,{from:{number:0},to:{number:e.totalTags}},e=>e.number.toFixed(0)))))),e.totalTags?i.createElement(i.Fragment,null,i.createElement(T,null),i.createElement(S,null,i.createElement(k,null,i.createElement(A,null,"Top tags"),i.createElement(E,null,i.createElement(j,null,i.createElement(O,null,e.tagsSortedByOccurence.slice(0,5).map(t=>{const n=100*t.occurence/e.topTagOccurence.occurence,l=v(t.tag);return i.createElement($,{key:`top-tag-${t.tag}`},i.createElement(C,null,t.occurence),i.createElement(D,{color:x(l)},i.createElement(m,{from:{width:0},to:{width:n}},e=>i.createElement(z,{style:{width:`${e.width}%`},background:l})),i.createElement("span",null,t.tag)))}))))),i.createElement(k,null,i.createElement(A,null,"Top tags by rating"),i.createElement(E,null,i.createElement(j,null,i.createElement(O,null,e.tagsSortedByAverageRating.slice(0,5).map(t=>{const n=t.average.toFixed(1),l=100*n/e.topTagAverage.average.toFixed(1),r=v(t.tag);return i.createElement($,{key:`top-rated-tag-${t.tag}`},n,i.createElement(D,{color:x(r)},i.createElement(m,{from:{width:0},to:{width:l}},e=>i.createElement(z,{style:{width:`${e.width}%`},background:r})),i.createElement("span",null,t.tag)))}))))))):null,this.renderUserStats()):this.renderNoFiles()}},c(r,"propTypes",{stats:g.object}),l=a))||l;t.default=J}}]);