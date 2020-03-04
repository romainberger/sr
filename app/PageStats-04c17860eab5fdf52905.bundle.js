(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{208:function(e,t,n){const l=n(41),{_selectFiles:r,selectTags:a}=n(8);e.exports=l([r,a],(e,t)=>{const n=Object.values(e).filter(e=>!e.archived),l=n.reduce((e,t)=>(e.totalDuration+=t.duration,Object.keys(t.tags).forEach(n=>{const l=n.toLowerCase();e.tags[l]?(e.tags[l].rating+=t.rating+1,e.tags[l].occurence+=1,e.tags[l].average=e.tags[l].rating/e.tags[l].occurence):e.tags[l]={rating:t.rating+1,occurence:1,average:t.rating+1,tag:l}}),e),{totalDuration:0,tags:{}}),r=Object.values(l.tags).sort((e,t)=>t.occurence-e.occurence),a=Object.values(l.tags).sort((e,t)=>t.average-e.average);return{tagsSortedByAverageRating:a,tagsSortedByOccurence:r,topTagAverage:a.length?a[0]:0,topTagOccurence:r.length?r[0]:0,totalDuration:l.totalDuration,totalFiles:n.length,totalTags:t.length}},"selectStats")},236:function(e,t,n){var l,r,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=n(0),i=n(2).default,{connect:s}=n(6),u=n(5),{config:g,Spring:d}=n(14),m=n(32),p=n(28),E=n(208),{selectUser:h}=n(21),{formatDuration:b}=n(33),{getTagColor:f,getFontColorForColor:v}=n(40),x=n(7),w=n(10),y=n(1),S=i(i.div`
    margin-bottom: 15px;
`)`
    display: flex;
    justify-content: space-between;
    text-align: center;
`,T=i.div`
    height: 1px;
    margin-bottom: 25px;
    background: ${y.colors.blueLight};
`,F=i.div`
    width: 33%;
`,k=i.div`
    width: 50%;
`,j=i.div`
    display: flex;
    justify-content: center;
`,O=i.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`,$=i.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    text-align: left;
`,D=i.div`
    flex: 1;
    position: relative;
    padding: 5px;
    margin-left: 10px;
    color: ${e=>e.color};

    span {
        position: relative;
        z-index: 1;
    }
`,C=i.div`
    display: table-cell;
    width: 35px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,z=i.div`
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 3px;
    background: ${e=>e.background};
    z-index: 0;
`,A=i.div`
    font-size: 22px;
    text-align: center;
    font-weight: bold;
`,B=i.div`
    font-size: 32px;
    font-weight: bold;
    color: ${e=>e.color?e.color:y.colors.purple};
`,U=i.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;let J=s(e=>({stats:E(e),user:h(e)}))((a=r=class extends c.Component{constructor(...e){super(...e),o(this,"state",{userStats:null})}renderNoFiles(){return c.createElement(m,null,c.createElement(U,null,c.createElement("div",null,"Your library is empty! Start adding files to your library to see your stats.")))}renderUserStats(){const{userStats:e}=this.state;return null}componentDidMount(){x.trackScreen("stats"),w.getUserStats(this.props.user.uid).then(e=>{this.setState({userStats:e})})}render(){const{stats:e}=this.props;return e.totalFiles?c.createElement(m,null,c.createElement(S,null,c.createElement(F,null,c.createElement(A,null,"Total files"),c.createElement(p,null,c.createElement(B,null,c.createElement(d,{from:{number:0},to:{number:e.totalFiles}},e=>e.number.toFixed(0))))),c.createElement(F,null,c.createElement(A,null,"Total duration"),c.createElement(p,null,c.createElement(B,null,c.createElement(d,{from:{number:0},to:{number:e.totalDuration}},e=>b(e.number.toFixed(0)))))),c.createElement(F,null,c.createElement(A,null,"Total tags"),c.createElement(p,null,c.createElement(B,null,c.createElement(d,{from:{number:0},to:{number:e.totalTags}},e=>e.number.toFixed(0)))))),e.totalTags?c.createElement(c.Fragment,null,c.createElement(T,null),c.createElement(S,null,c.createElement(k,null,c.createElement(A,null,"Top tags"),c.createElement(p,null,c.createElement(j,null,c.createElement(O,null,e.tagsSortedByOccurence.slice(0,5).map(t=>{const n=100*t.occurence/e.topTagOccurence.occurence,l=f(t.tag);return c.createElement($,{key:`top-tag-${t.tag}`},c.createElement(C,null,t.occurence),c.createElement(D,{color:v(l)},c.createElement(d,{from:{width:0},to:{width:n}},e=>c.createElement(z,{style:{width:`${e.width}%`},background:l})),c.createElement("span",null,t.tag)))}))))),c.createElement(k,null,c.createElement(A,null,"Top tags by rating"),c.createElement(p,null,c.createElement(j,null,c.createElement(O,null,e.tagsSortedByAverageRating.slice(0,5).map(t=>{const n=t.average.toFixed(1),l=100*n/e.topTagAverage.average.toFixed(1),r=f(t.tag);return c.createElement($,{key:`top-rated-tag-${t.tag}`},n,c.createElement(D,{color:v(r)},c.createElement(d,{from:{width:0},to:{width:l}},e=>c.createElement(z,{style:{width:`${e.width}%`},background:r})),c.createElement("span",null,t.tag)))}))))))):null,this.renderUserStats()):this.renderNoFiles()}},o(r,"propTypes",{stats:u.object}),l=a))||l;e.exports=J}}]);