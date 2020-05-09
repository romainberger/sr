(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{242:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(7),l=r(4),s=r(32),c=r(72),i=r(52),d=r.n(i),u=r(39),p=r.n(u),m=r(8);const h=r(149),j=l.default.form`
    display: flex;
    flex-direction: column;
`;var f=({onProjectCreated:e,userId:t})=>{const[r,n]=a.a.useState(""),[o,l]=a.a.useState("");return a.a.createElement(j,{onSubmit:n=>{n.preventDefault(),r.length&&m.a.createProject(t,r,o).then(e)}},a.a.createElement(h,{onChange:e=>n(e.target.value),type:"text",value:r,placeholder:"Project name"}),a.a.createElement(p.a,null,a.a.createElement(h,{onChange:e=>l(e.target.value),type:"text",value:o,placeholder:"Band (optional)"})),a.a.createElement(d.a,null,"Create"))},x=r(37),E=r(62),g=r(9);const v=l.default.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-bottom: 15px;
    border: 1px solid ${g.colors._white};
    border-radius: 3px;

    a {
        display: block;
        text-decoration: none;
    }
`,b=l.default.div`
    font-size: 16px;
    margin-bottom: 15px;
    color: ${g.colors._white};
`,y=l.default.div`
    font-size: 16px;
    margin-bottom: 15px;
    color: ${g.colors._greyLight};
`,P=l.default.div`
    font-size: 13px;
    color: ${g.colors._greyLight};
`;var w=class extends n.Component{render(){const{project:e}=this.props;return n.createElement(v,null,n.createElement(x.a,{to:`/project/${e.id}`},n.createElement(b,null,e.name),e.band?n.createElement(y,null,e.band):null,n.createElement(P,null,"Last updated: ",Object(E.a)(e.updatedAt,{addSuffix:!0}))))}};function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const L=r(61),S=r(13),{selectUser:$}=r(28),k=l.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;t.default=Object(o.connect)(e=>({user:$(e)}))(class extends a.a.Component{constructor(...e){super(...e),C(this,"removeProjectsListener",void 0),C(this,"state",{newProjectName:"",projects:null})}listenProjectsUpdate(){this.removeProjectsListener=m.a.listenForProjectsUpdate(this.props.user.uid,e=>{this.setState({projects:e})})}renderLoading(){return a.a.createElement(c.a,null,a.a.createElement(s.a,{size:60}))}renderProjets(){const{projects:e}=this.state;return a.a.createElement(a.a.Fragment,null,e.map(e=>a.a.createElement(w,{project:e,key:e.name})))}renderEmptyState(e){return a.a.createElement(k,null,a.a.createElement("div",null,"Create ",e?"a new project:":"your first project:"),a.a.createElement(p.a,null,a.a.createElement(f,{userId:this.props.user.uid,onProjectCreated:e=>{this.props.history.push(`/project/${e}`)}})))}componentDidMount(){S.trackScreen("projects"),this.listenProjectsUpdate()}componentWillUnmount(){this.removeProjectsListener()}render(){const{projects:e}=this.state;return a.a.createElement(L,null,null===e?this.renderLoading():a.a.createElement(a.a.Fragment,null,this.renderProjets(),this.renderEmptyState(e.length)))}})}}]);