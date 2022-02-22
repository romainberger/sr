(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{248:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(11),o=n(4),s=n(38),c=n(83),i=n(64),u=n.n(i),d=n(63),p=n(49),m=n.n(p),h=n(10);const f=o.default.form`
    display: flex;
    flex-direction: column;
`;var j=({onProjectCreated:e,userId:t})=>{const[n,r]=a.a.useState(""),[l,o]=a.a.useState("");return a.a.createElement(f,{onSubmit:r=>{r.preventDefault(),n.length&&h.a.createProject(t,n,l).then(e)}},a.a.createElement(d.a,{onChange:e=>r(e.target.value),type:"text",value:n,placeholder:"Project name"}),a.a.createElement(m.a,null,a.a.createElement(d.a,{onChange:e=>o(e.target.value),type:"text",value:l,placeholder:"Band (optional)"})),a.a.createElement(u.a,null,"Create"))},g=n(47),E=n(37),x=n(73),b=n(6),v=n(124);const y=o.default.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-bottom: 15px;
    border: 1px solid ${b.colors._white};
    border-radius: 3px;

    a {
        display: block;
        text-decoration: none;
    }
`,P=o.default.div`
    font-size: 16px;
    margin-bottom: 15px;
    color: ${b.colors._white};
`,w=o.default.div`
    font-size: 16px;
    margin-bottom: 15px;
    color: ${b.colors._greyLight};
`,C=o.default.div`
    font-size: 13px;
    color: ${b.colors._greyLight};
`;var L=class extends r.Component{render(){const{project:e}=this.props;return r.createElement(y,null,r.createElement(E.a,{to:`/project/${e.id}`},r.createElement(P,null,e.name),e.band?r.createElement(w,null,e.band):null,e.songs?r.createElement(C,null,e.songs.length," ",Object(v.pluralize)("song",e.songs.length)):null,e.files?r.createElement(C,null,e.files.length," ",Object(v.pluralize)("file",e.files.length)):null,r.createElement(C,null,"Last updated: ",Object(x.a)(e.updatedAt,{addSuffix:!0}))))}};function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const z=n(14),{selectUser:$}=n(31),k=o.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;t.default=Object(l.connect)(e=>({user:$(e)}))(class extends a.a.Component{constructor(...e){super(...e),S(this,"removeProjectsListener",void 0),S(this,"state",{newProjectName:"",projects:null})}listenProjectsUpdate(){this.removeProjectsListener=h.a.listenForProjectsUpdate(this.props.user.uid,e=>{this.setState({projects:e})})}renderLoading(){return a.a.createElement(c.a,null,a.a.createElement(s.a,{size:60}))}renderProjets(){const{projects:e}=this.state;return a.a.createElement(a.a.Fragment,null,e.map(e=>a.a.createElement(L,{project:e,key:e.name})))}renderEmptyState(e){return a.a.createElement(k,null,a.a.createElement("div",null,"Create ",e?"a new project:":"your first project:"),a.a.createElement(m.a,null,a.a.createElement(j,{userId:this.props.user.uid,onProjectCreated:e=>{this.props.history.push(`/project/${e}`)}})))}componentDidMount(){z.trackScreen("projects"),this.listenProjectsUpdate()}componentWillUnmount(){this.removeProjectsListener()}render(){const{projects:e}=this.state;return a.a.createElement(g.a,null,null===e?this.renderLoading():a.a.createElement(a.a.Fragment,null,this.renderProjets(),this.renderEmptyState(e.length)))}})}}]);