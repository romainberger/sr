(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(8),s=r(4),c=r(52),l=r.n(c),i=r(73),u=r(38),p=r(3);const m=s.default.div`
    a {
        color: ${p.colors._white};
        text-decoration: none;
    }
`;class d extends n.Component{render(){const{project:e}=this.props;return n.createElement(m,null,n.createElement(u.Link,{to:`/project/${e.id}`},e.name))}}var h=r(35),j=r.n(h),P=r(7);function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f=r(140),E=r(60),v=r(11),{selectUser:g}=r(29),y=s.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`,x=s.default.form`
    display: flex;
    flex-direction: column;
`;t.default=Object(o.connect)(e=>({user:g(e)}))(class extends a.a.Component{constructor(...e){super(...e),w(this,"removeProjectsListener",void 0),w(this,"state",{newProjectName:"",projects:null}),w(this,"createNewProject",e=>{e.preventDefault(),this.state.newProjectName.length&&P.a.createProject(this.props.user.uid,this.state.newProjectName).then(e=>{this.props.history.push(`/project/${e}`)})})}listenProjectsUpdate(){this.removeProjectsListener=P.a.listenForProjectsUpdate(this.props.user.uid,e=>{this.setState({projects:e})})}renderLoading(){return a.a.createElement(i.a,null)}renderProjets(){const{projects:e}=this.state;return a.a.createElement(a.a.Fragment,null,e.map(e=>a.a.createElement(d,{project:e,key:e.name})))}renderEmptyState(e){return a.a.createElement(y,null,a.a.createElement("div",null,"Create ",e?"a new project:":"your first project:"),a.a.createElement(j.a,null,a.a.createElement(x,{onSubmit:this.createNewProject},a.a.createElement(f,{onChange:e=>this.setState({newProjectName:e.target.value}),type:"text",value:this.state.newProjectName,placeholder:"Project name"}),a.a.createElement(j.a,null,a.a.createElement(l.a,null,"Create")))))}componentDidMount(){v.trackScreen("projects"),this.listenProjectsUpdate()}componentWillUnmount(){this.removeProjectsListener()}render(){const{projects:e}=this.state;return a.a.createElement(E,null,null===e?this.renderLoading():a.a.createElement(a.a.Fragment,null,this.renderProjets(),this.renderEmptyState(e.length)))}})}}]);