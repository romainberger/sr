(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{222:function(e,t,n){const l=n(76),{_selectFiles:r,selectTags:a}=n(14);e.exports=l([r,a],(e,t)=>{const n=Object.values(e).filter(e=>!e.archived),l=n.reduce((e,t)=>(e.totalDuration+=t.duration,Object.keys(t.tags).forEach(n=>{const l=n.toLowerCase();e.tags[l]?(e.tags[l].rating+=t.rating+1,e.tags[l].occurence+=1,e.tags[l].average=e.tags[l].rating/e.tags[l].occurence):e.tags[l]={rating:t.rating+1,occurence:1,average:t.rating+1,tag:l}}),e),{totalDuration:0,tags:{}}),r=Object.values(l.tags).sort((e,t)=>t.occurence-e.occurence),a=Object.values(l.tags).sort((e,t)=>t.average-e.average);return{tagsSortedByAverageRating:a,tagsSortedByOccurence:r,topTagAverage:a.length?a[0]:0,topTagOccurence:r.length?r[0]:0,totalDuration:l.totalDuration,totalFiles:n.length,totalTags:t.length}},"selectStats")},224:function(e,t,n){"use strict";n.r(t);var l,r,a,o=n(44),c=n(7);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=n(0),u=n(4).default,{connect:g}=n(8),d=n(9),{config:m,Spring:p}=n(16),E=n(59),b=n(36),h=n(222),{selectUser:f}=n(29),{formatDuration:v}=n(77),x=n(12),w=n(3),y=u(u.div`
    margin-bottom: 15px;
`)`
    display: flex;
    justify-content: space-between;
    text-align: center;
`,F=u.div`
    height: 1px;
    margin-bottom: 25px;
    background: ${w.colors.blueLight};
`,T=u.div`
    width: 33%;
`,S=u.div`
    width: 50%;
`,j=u.div`
    display: flex;
    justify-content: center;
`,O=u.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`,k=u.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    text-align: left;
`,C=u.div`
    flex: 1;
    position: relative;
    padding: 5px;
    margin-left: 10px;
    color: ${e=>e.color};

    span {
        position: relative;
        z-index: 1;
    }
`,$=u.div`
    display: table-cell;
    width: 35px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,D=u.div`
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 3px;
    background: ${e=>e.background};
    z-index: 0;
`,z=u.div`
    font-size: 22px;
    text-align: center;
    font-weight: bold;
`,A=u.div`
    font-size: 32px;
    font-weight: bold;
    color: ${e=>e.color?e.color:w.colors.purple};
`,B=u.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;let U=g(e=>({stats:h(e),user:f(e)}))((a=r=class extends s.Component{constructor(...e){super(...e),i(this,"state",{userStats:null})}renderNoFiles(){return s.createElement(E,null,s.createElement(B,null,s.createElement("div",null,"Your library is empty! Start adding files to your library to see your stats.")))}renderUserStats(){const{userStats:e}=this.state;return null}componentDidMount(){x.trackScreen("stats"),c.a.getUserStats(this.props.user.uid).then(e=>{this._mounted&&this.setState({userStats:e})})}render(){const{stats:e}=this.props;return e.totalFiles?s.createElement(E,null,s.createElement(y,null,s.createElement(T,null,s.createElement(z,null,"Total files"),s.createElement(b,null,s.createElement(A,null,s.createElement(p,{from:{number:0},to:{number:e.totalFiles}},e=>e.number.toFixed(0))))),s.createElement(T,null,s.createElement(z,null,"Total duration"),s.createElement(b,null,s.createElement(A,null,s.createElement(p,{from:{number:0},to:{number:e.totalDuration}},e=>v(e.number.toFixed(0)))))),s.createElement(T,null,s.createElement(z,null,"Total tags"),s.createElement(b,null,s.createElement(A,null,s.createElement(p,{from:{number:0},to:{number:e.totalTags}},e=>e.number.toFixed(0)))))),e.totalTags?s.createElement(s.Fragment,null,s.createElement(F,null),s.createElement(y,null,s.createElement(S,null,s.createElement(z,null,"Top tags"),s.createElement(b,null,s.createElement(j,null,s.createElement(O,null,e.tagsSortedByOccurence.slice(0,5).map(t=>{const n=100*t.occurence/e.topTagOccurence.occurence,l=Object(o.getTagColor)(t.tag);return s.createElement(k,{key:`top-tag-${t.tag}`},s.createElement($,null,t.occurence),s.createElement(C,{color:Object(o.getFontColorForColor)(l)},s.createElement(p,{from:{width:0},to:{width:n}},e=>s.createElement(D,{style:{width:`${e.width}%`},background:l})),s.createElement("span",null,t.tag)))}))))),s.createElement(S,null,s.createElement(z,null,"Top tags by rating"),s.createElement(b,null,s.createElement(j,null,s.createElement(O,null,e.tagsSortedByAverageRating.slice(0,5).map(t=>{const n=t.average.toFixed(1),l=100*n/e.topTagAverage.average.toFixed(1),r=Object(o.getTagColor)(t.tag);return s.createElement(k,{key:`top-rated-tag-${t.tag}`},n,s.createElement(C,{color:Object(o.getFontColorForColor)(r)},s.createElement(p,{from:{width:0},to:{width:l}},e=>s.createElement(D,{style:{width:`${e.width}%`},background:r})),s.createElement("span",null,t.tag)))}))))))):null,this.renderUserStats()):this.renderNoFiles()}},i(r,"propTypes",{stats:d.object}),l=a))||l;t.default=U}}]);