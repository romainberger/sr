(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{228:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(7),s=r(2),c=r(37),l=r.n(c),i=r(48),u=r(29),p=r(1);const m=s.default.div`
    a {
        color: ${p.colors._white};
        text-decoration: none;
    }
`;class d extends n.Component{render(){const{project:e}=this.props;return n.createElement(m,null,n.createElement(u.Link,{to:`/project/${e.id}`},e.name))}}var h,j=r(27),P=r.n(j),f=r(5);function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"default",function(){return N});const E=r(87),v=r(43),g=r(9),{selectUser:y}=r(23),x=s.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`,b=s.default.form`
    display: flex;
    flex-direction: column;
`;let N=Object(o.connect)(e=>({user:y(e)}))(h=class extends a.a.Component{constructor(...e){super(...e),w(this,"removeProjectsListener",void 0),w(this,"state",{newProjectName:"",projects:null}),w(this,"createNewProject",e=>{e.preventDefault(),this.state.newProjectName.length&&f.a.createProject(this.props.user.uid,this.state.newProjectName).then(e=>{this.props.history.push(`/project/${e}`)})})}listenProjectsUpdate(){this.removeProjectsListener=f.a.listenForProjectsUpdate(this.props.user.uid,e=>{this.setState({projects:e})})}renderLoading(){return a.a.createElement(i.a,null)}renderProjets(){const{projects:e}=this.state;return a.a.createElement(a.a.Fragment,null,e.map(e=>a.a.createElement(d,{project:e,key:e.name})))}renderEmptyState(e){return a.a.createElement(x,null,a.a.createElement("div",null,"Create ",e?"a new project:":"your first project:"),a.a.createElement(P.a,null,a.a.createElement(b,{onSubmit:this.createNewProject},a.a.createElement(E,{onChange:e=>this.setState({newProjectName:e.target.value}),type:"text",value:this.state.newProjectName,placeholder:"Project name"}),a.a.createElement(P.a,null,a.a.createElement(l.a,null,"Create")))))}componentDidMount(){g.trackScreen("projects"),this.listenProjectsUpdate()}componentWillUnmount(){this.removeProjectsListener()}render(){const{projects:e}=this.state;return a.a.createElement(v,null,null===e?this.renderLoading():a.a.createElement(a.a.Fragment,null,this.renderProjets(),this.renderEmptyState(e.length)))}})||h}}]);