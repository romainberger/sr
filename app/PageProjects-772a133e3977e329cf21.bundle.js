(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(7),s=r(4),l=r(32),c=r(52),i=r.n(c),d=r(71),p=r(37),u=r(61),m=r(9);const h=s.default.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-bottom: 15px;
    border: 1px solid ${m.colors._white};
    border-radius: 3px;

    a {
        display: block;
        text-decoration: none;
    }
`,j=s.default.div`
    font-size: 16px;
    margin-bottom: 15px;
    color: ${m.colors._white};
`,f=s.default.div`
    font-size: 13px;
    color: ${m.colors._greyLight};
`;var x=class extends n.Component{render(){const{project:e}=this.props;return n.createElement(h,null,n.createElement(p.a,{to:`/project/${e.id}`},n.createElement(j,null,e.name),n.createElement(f,null,"Last updated: ",Object(u.a)(e.updatedAt,{addSuffix:!0}))))}},E=r(39),w=r.n(E),P=r(8);function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const v=r(146),b=r(60),y=r(13),{selectUser:L}=r(28),N=s.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`,S=s.default.form`
    display: flex;
    flex-direction: column;
`;t.default=Object(o.connect)(e=>({user:L(e)}))(class extends a.a.Component{constructor(...e){super(...e),g(this,"removeProjectsListener",void 0),g(this,"state",{newProjectName:"",projects:null}),g(this,"createNewProject",e=>{e.preventDefault(),this.state.newProjectName.length&&P.a.createProject(this.props.user.uid,this.state.newProjectName).then(e=>{this.props.history.push(`/project/${e}`)})})}listenProjectsUpdate(){this.removeProjectsListener=P.a.listenForProjectsUpdate(this.props.user.uid,e=>{this.setState({projects:e})})}renderLoading(){return a.a.createElement(d.a,null,a.a.createElement(l.a,{size:60}))}renderProjets(){const{projects:e}=this.state;return a.a.createElement(a.a.Fragment,null,e.map(e=>a.a.createElement(x,{project:e,key:e.name})))}renderEmptyState(e){return a.a.createElement(N,null,a.a.createElement("div",null,"Create ",e?"a new project:":"your first project:"),a.a.createElement(w.a,null,a.a.createElement(S,{onSubmit:this.createNewProject},a.a.createElement(v,{onChange:e=>this.setState({newProjectName:e.target.value}),type:"text",value:this.state.newProjectName,placeholder:"Project name"}),a.a.createElement(w.a,null,a.a.createElement(i.a,null,"Create")))))}componentDidMount(){y.trackScreen("projects"),this.listenProjectsUpdate()}componentWillUnmount(){this.removeProjectsListener()}render(){const{projects:e}=this.state;return a.a.createElement(b,null,null===e?this.renderLoading():a.a.createElement(a.a.Fragment,null,this.renderProjets(),this.renderEmptyState(e.length)))}})}}]);