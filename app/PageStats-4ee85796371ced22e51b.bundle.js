(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{246:function(e,t,n){const l=n(91),{_selectFiles:r,selectTags:a}=n(16);e.exports=l([r,a],(e,t)=>{const n=Object.values(e).filter(e=>!e.archived),l=n.reduce((e,t)=>(e.totalDuration+=t.duration,Object.keys(t.tags).forEach(n=>{const l=n.toLowerCase();e.tags[l]?(e.tags[l].rating+=t.rating+1,e.tags[l].occurence+=1,e.tags[l].average=e.tags[l].rating/e.tags[l].occurence):e.tags[l]={rating:t.rating+1,occurence:1,average:t.rating+1,tag:l}}),e),{totalDuration:0,tags:{}}),r=Object.values(l.tags).sort((e,t)=>t.occurence-e.occurence),a=Object.values(l.tags).sort((e,t)=>t.average-e.average);return{tagsSortedByAverageRating:a,tagsSortedByOccurence:r,topTagAverage:a.length?a[0]:0,topTagOccurence:r.length?r[0]:0,totalDuration:l.totalDuration,totalFiles:n.length,totalTags:t.length}},"selectStats")},247:function(e,t,n){"use strict";n.r(t);var l,r,a,o=n(6),c=n(57),i=n(12),s=n(47);n(10);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const g=n(0),d=n(4).default,{connect:m}=n(11),p=n(15),{config:E,Spring:b}=n(42),f=n(49),h=n(246),{selectUser:v}=n(31),x=n(14),w=(n(3),d(d.div`
    margin-bottom: 15px;
`)`
    display: flex;
    justify-content: space-between;
    text-align: center;
`),y=d.div`
    height: 1px;
    margin-bottom: 25px;
    background: ${o.colors.blueLight};
`,F=d.div`
    width: 33%;
`,T=d.div`
    width: 50%;
`,j=d.div`
    display: flex;
    justify-content: center;
`,O=d.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`,S=d.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    text-align: left;
`,k=d.div`
    flex: 1;
    position: relative;
    padding: 5px;
    margin-left: 10px;
    color: ${e=>e.color};

    span {
        position: relative;
        z-index: 1;
    }
`,C=d.div`
    display: table-cell;
    width: 35px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$=d.div`
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 3px;
    background: ${e=>e.background};
    z-index: 0;
`,D=d.div`
    font-size: 22px;
    text-align: center;
    font-weight: bold;
`,z=d.div`
    font-size: 32px;
    font-weight: bold;
    color: ${e=>e.color?e.color:o.colors.purple};
`,A=d.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;let B=m(e=>({stats:h(e),user:v(e)}))((a=r=class extends g.Component{constructor(...e){super(...e),u(this,"state",{userStats:null})}renderNoFiles(){return g.createElement(s.a,null,g.createElement(A,null,g.createElement("div",null,"Your library is empty! Start adding files to your library to see your stats.")))}renderUserStats(){const{userStats:e}=this.state;return null}componentDidMount(){x.trackScreen("stats")}render(){const{stats:e}=this.props;return e.totalFiles?g.createElement(s.a,null,g.createElement(w,null,g.createElement(F,null,g.createElement(D,null,"Total files"),g.createElement(f,null,g.createElement(z,null,g.createElement(b,{from:{number:0},to:{number:e.totalFiles}},e=>e.number.toFixed(0))))),g.createElement(F,null,g.createElement(D,null,"Total duration"),g.createElement(f,null,g.createElement(z,null,g.createElement(b,{from:{number:0},to:{number:e.totalDuration}},e=>Object(i.formatDuration)(e.number.toFixed(0)))))),g.createElement(F,null,g.createElement(D,null,"Total tags"),g.createElement(f,null,g.createElement(z,null,g.createElement(b,{from:{number:0},to:{number:e.totalTags}},e=>e.number.toFixed(0)))))),e.totalTags?g.createElement(g.Fragment,null,g.createElement(y,null),g.createElement(w,null,g.createElement(T,null,g.createElement(D,null,"Top tags"),g.createElement(f,null,g.createElement(j,null,g.createElement(O,null,e.tagsSortedByOccurence.slice(0,5).map(t=>{const n=100*t.occurence/e.topTagOccurence.occurence,l=Object(c.getTagColor)(t.tag);return g.createElement(S,{key:`top-tag-${t.tag}`},g.createElement(C,null,t.occurence),g.createElement(k,{color:Object(c.getFontColorForColor)(l)},g.createElement(b,{from:{width:0},to:{width:n}},e=>g.createElement($,{style:{width:`${e.width}%`},background:l})),g.createElement("span",null,t.tag)))}))))),g.createElement(T,null,g.createElement(D,null,"Top tags by rating"),g.createElement(f,null,g.createElement(j,null,g.createElement(O,null,e.tagsSortedByAverageRating.slice(0,5).map(t=>{const n=t.average.toFixed(1),l=100*n/e.topTagAverage.average.toFixed(1),r=Object(c.getTagColor)(t.tag);return g.createElement(S,{key:`top-rated-tag-${t.tag}`},n,g.createElement(k,{color:Object(c.getFontColorForColor)(r)},g.createElement(b,{from:{width:0},to:{width:l}},e=>g.createElement($,{style:{width:`${e.width}%`},background:r})),g.createElement("span",null,t.tag)))}))))))):null,this.renderUserStats()):this.renderNoFiles()}},u(r,"propTypes",{stats:p.object}),l=a))||l;t.default=B}}]);