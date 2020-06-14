(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{249:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(11),o=n(4),s=n(38),c=n(83),i=n(63),u=n.n(i),d=n(62),p=n(48),m=n.n(p),h=n(10);const f=o.default.form`
    display: flex;
    flex-direction: column;
`;var j=({onProjectCreated:e,userId:t})=>{const[n,r]=a.a.useState(""),[l,o]=a.a.useState("");return a.a.createElement(f,{onSubmit:r=>{r.preventDefault(),n.length&&h.a.createProject(t,n,l).then(e)}},a.a.createElement(d.a,{onChange:e=>r(e.target.value),type:"text",value:n,placeholder:"Project name"}),a.a.createElement(m.a,null,a.a.createElement(d.a,{onChange:e=>o(e.target.value),type:"text",value:l,placeholder:"Band (optional)"})),a.a.createElement(u.a,null,"Create"))},g=n(37),E=n(73),x=n(6),b=n(124);const v=o.default.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-bottom: 15px;
    border: 1px solid ${x.colors._white};
    border-radius: 3px;

    a {
        display: block;
        text-decoration: none;
    }
`,y=o.default.div`
    font-size: 16px;
    margin-bottom: 15px;
    color: ${x.colors._white};
`,P=o.default.div`
    font-size: 16px;
    margin-bottom: 15px;
    color: ${x.colors._greyLight};
`,w=o.default.div`
    font-size: 13px;
    color: ${x.colors._greyLight};
`;var C=class extends r.Component{render(){const{project:e}=this.props;return r.createElement(v,null,r.createElement(g.a,{to:`/project/${e.id}`},r.createElement(y,null,e.name),e.band?r.createElement(P,null,e.band):null,e.songs?r.createElement(w,null,e.songs.length," ",Object(b.pluralize)("song",e.songs.length)):null,e.files?r.createElement(w,null,e.files.length," ",Object(b.pluralize)("file",e.files.length)):null,r.createElement(w,null,"Last updated: ",Object(E.a)(e.updatedAt,{addSuffix:!0}))))}};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const S=n(72),z=n(14),{selectUser:$}=n(31),k=o.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;t.default=Object(l.connect)(e=>({user:$(e)}))(class extends a.a.Component{constructor(...e){super(...e),L(this,"removeProjectsListener",void 0),L(this,"state",{newProjectName:"",projects:null})}listenProjectsUpdate(){this.removeProjectsListener=h.a.listenForProjectsUpdate(this.props.user.uid,e=>{this.setState({projects:e})})}renderLoading(){return a.a.createElement(c.a,null,a.a.createElement(s.a,{size:60}))}renderProjets(){const{projects:e}=this.state;return a.a.createElement(a.a.Fragment,null,e.map(e=>a.a.createElement(C,{project:e,key:e.name})))}renderEmptyState(e){return a.a.createElement(k,null,a.a.createElement("div",null,"Create ",e?"a new project:":"your first project:"),a.a.createElement(m.a,null,a.a.createElement(j,{userId:this.props.user.uid,onProjectCreated:e=>{this.props.history.push(`/project/${e}`)}})))}componentDidMount(){z.trackScreen("projects"),this.listenProjectsUpdate()}componentWillUnmount(){this.removeProjectsListener()}render(){const{projects:e}=this.state;return a.a.createElement(S,null,null===e?this.renderLoading():a.a.createElement(a.a.Fragment,null,this.renderProjets(),this.renderEmptyState(e.length)))}})}}]);