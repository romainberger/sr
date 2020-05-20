(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{237:function(e,t,n){const l=n(76),{_selectFiles:r,selectTags:a}=n(14);e.exports=l([r,a],(e,t)=>{const n=Object.values(e).filter(e=>!e.archived),l=n.reduce((e,t)=>(e.totalDuration+=t.duration,Object.keys(t.tags).forEach(n=>{const l=n.toLowerCase();e.tags[l]?(e.tags[l].rating+=t.rating+1,e.tags[l].occurence+=1,e.tags[l].average=e.tags[l].rating/e.tags[l].occurence):e.tags[l]={rating:t.rating+1,occurence:1,average:t.rating+1,tag:l}}),e),{totalDuration:0,tags:{}}),r=Object.values(l.tags).sort((e,t)=>t.occurence-e.occurence),a=Object.values(l.tags).sort((e,t)=>t.average-e.average);return{tagsSortedByAverageRating:a,tagsSortedByOccurence:r,topTagAverage:a.length?a[0]:0,topTagOccurence:r.length?r[0]:0,totalDuration:l.totalDuration,totalFiles:n.length,totalTags:t.length}},"selectStats")},239:function(e,t,n){"use strict";n.r(t);var l,r,a,o=n(5),c=n(47),i=n(10);n(8);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=n(0),g=n(4).default,{connect:d}=n(9),m=n(12),{config:p,Spring:E}=n(29),b=n(62),f=n(39),h=n(237),{selectUser:v}=n(28),x=n(13),w=(n(3),g(g.div`
    margin-bottom: 15px;
`)`
    display: flex;
    justify-content: space-between;
    text-align: center;
`),y=g.div`
    height: 1px;
    margin-bottom: 25px;
    background: ${o.colors.blueLight};
`,F=g.div`
    width: 33%;
`,T=g.div`
    width: 50%;
`,j=g.div`
    display: flex;
    justify-content: center;
`,O=g.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`,S=g.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    text-align: left;
`,k=g.div`
    flex: 1;
    position: relative;
    padding: 5px;
    margin-left: 10px;
    color: ${e=>e.color};

    span {
        position: relative;
        z-index: 1;
    }
`,C=g.div`
    display: table-cell;
    width: 35px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$=g.div`
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 3px;
    background: ${e=>e.background};
    z-index: 0;
`,D=g.div`
    font-size: 22px;
    text-align: center;
    font-weight: bold;
`,z=g.div`
    font-size: 32px;
    font-weight: bold;
    color: ${e=>e.color?e.color:o.colors.purple};
`,A=g.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;let B=d(e=>({stats:h(e),user:v(e)}))((a=r=class extends u.Component{constructor(...e){super(...e),s(this,"state",{userStats:null})}renderNoFiles(){return u.createElement(b,null,u.createElement(A,null,u.createElement("div",null,"Your library is empty! Start adding files to your library to see your stats.")))}renderUserStats(){const{userStats:e}=this.state;return null}componentDidMount(){x.trackScreen("stats")}render(){const{stats:e}=this.props;return e.totalFiles?u.createElement(b,null,u.createElement(w,null,u.createElement(F,null,u.createElement(D,null,"Total files"),u.createElement(f,null,u.createElement(z,null,u.createElement(E,{from:{number:0},to:{number:e.totalFiles}},e=>e.number.toFixed(0))))),u.createElement(F,null,u.createElement(D,null,"Total duration"),u.createElement(f,null,u.createElement(z,null,u.createElement(E,{from:{number:0},to:{number:e.totalDuration}},e=>Object(i.formatDuration)(e.number.toFixed(0)))))),u.createElement(F,null,u.createElement(D,null,"Total tags"),u.createElement(f,null,u.createElement(z,null,u.createElement(E,{from:{number:0},to:{number:e.totalTags}},e=>e.number.toFixed(0)))))),e.totalTags?u.createElement(u.Fragment,null,u.createElement(y,null),u.createElement(w,null,u.createElement(T,null,u.createElement(D,null,"Top tags"),u.createElement(f,null,u.createElement(j,null,u.createElement(O,null,e.tagsSortedByOccurence.slice(0,5).map(t=>{const n=100*t.occurence/e.topTagOccurence.occurence,l=Object(c.getTagColor)(t.tag);return u.createElement(S,{key:`top-tag-${t.tag}`},u.createElement(C,null,t.occurence),u.createElement(k,{color:Object(c.getFontColorForColor)(l)},u.createElement(E,{from:{width:0},to:{width:n}},e=>u.createElement($,{style:{width:`${e.width}%`},background:l})),u.createElement("span",null,t.tag)))}))))),u.createElement(T,null,u.createElement(D,null,"Top tags by rating"),u.createElement(f,null,u.createElement(j,null,u.createElement(O,null,e.tagsSortedByAverageRating.slice(0,5).map(t=>{const n=t.average.toFixed(1),l=100*n/e.topTagAverage.average.toFixed(1),r=Object(c.getTagColor)(t.tag);return u.createElement(S,{key:`top-rated-tag-${t.tag}`},n,u.createElement(k,{color:Object(c.getFontColorForColor)(r)},u.createElement(E,{from:{width:0},to:{width:l}},e=>u.createElement($,{style:{width:`${e.width}%`},background:r})),u.createElement("span",null,t.tag)))}))))))):null,this.renderUserStats()):this.renderNoFiles()}},s(r,"propTypes",{stats:m.object}),l=a))||l;t.default=B}}]);