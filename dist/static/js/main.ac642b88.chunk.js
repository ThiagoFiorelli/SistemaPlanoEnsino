(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(e,t,a){e.exports=a(526)},278:function(e,t,a){},526:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),l=a.n(c),o=(a(278),a(8)),i=a(9),s=a(11),m=a(10),u=a(12),d=a(2),h=a(53),E=a(3),p=Object(E.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"LOGOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/cadastroplanoensino"},"Cadastrar Planos de Ensino")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/cadastroturma"},"Cadastrar Turma")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/cadastromateria"},"Cadastrar Materia")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/cadastrocurso"},"Cadastrar Curso")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},r.a.createElement("i",{className:"material-icons"},"power_settings_new"))),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/",className:"btn btn-floating green darken-3"},e.profile.iniciais)))}),b=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signup"},"Cadastrar")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signin"},"Entrar")))},f=Object(E.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(p,{profile:a}):r.a.createElement(b,null);return r.a.createElement("nav",{className:"nav-wrapper indigo darken-4"},r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{to:"/",className:"brand-logo"},"Facens"),n))}),g=a(15),v=a.n(g),N=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifica\xe7\xf5es"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},v()(e.time.toDate()).fromNow()))})))))},O=a(19),C=(a(84),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(e){a.props.deleteCurso(a.props.curso.id)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.curso;return t.uid?r.a.createElement("div",{className:"card z-depth-0 curso-summary"},r.a.createElement(d.b,{to:"/curso/"+a.id,key:a.id},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title "},a.nome),r.a.createElement("p",null,"Criado por ",a.authorFirstName),r.a.createElement("p",{className:"grey-text"},v()(a.createdAt.toDate()).calendar()))),r.a.createElement("button",{onClick:this.handleDelete,className:"btn waves-effect waves-light",name:"action"},r.a.createElement("i",{className:"tiny material-icons"},"cancel"))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component)),j=Object(E.b)(function(e){return{auth:e.firebase.auth}},function(e){return{deleteCurso:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("cursos").doc(e).delete().then(function(){t({type:"DELETE_CURSO",curso:e})}).catch(function(e){t({type:"DELETE_CURSO_ERROR",err:e})})}}(t))}}})(C),y=function(e){var t=e.cursos;return r.a.createElement("div",{className:"curso-list section"},t&&t.map(function(e){return r.a.createElement(j,{curso:e,key:e.id})}))},R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(e){a.props.deleteTurma(a.props.turma.id)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.turma;return t.uid?r.a.createElement("div",{className:"card z-depth-0 turma-summary"},r.a.createElement(d.b,{to:"/turma/"+a.id,key:a.id},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title "},a.codigoTurma),r.a.createElement("p",null,"Criado por ",a.authorFirstName),r.a.createElement("p",{className:"grey-text"},v()(a.createdAt.toDate()).calendar()))),r.a.createElement("button",{onClick:this.handleDelete,className:"btn waves-effect waves-light",name:"action"},r.a.createElement("i",{className:"tiny material-icons"},"cancel"))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),A=Object(E.b)(function(e){return{auth:e.firebase.auth}},function(e){return{deleteTurma:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("turmas").doc(e).delete().then(function(){t({type:"DELETE_TURMA",turma:e})}).catch(function(e){t({type:"DELETE_TURMA_ERROR",err:e})})}}(t))}}})(R),S=function(e){var t=e.turmas;return r.a.createElement("div",{className:"turma-list section"},t&&t.map(function(e){return r.a.createElement(A,{turma:e,key:e.id})}))},_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(e){a.props.deletePlanoEnsino(a.props.planoensino.id)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.planoensino;return t.uid?r.a.createElement("div",{className:"card z-depth-0 planoensino-summary"},r.a.createElement(d.b,{to:"/planoensino/"+a.id,key:a.id},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title "},a.nome),r.a.createElement("p",null,"Criado por ",a.authorFirstName),r.a.createElement("p",{className:"grey-text"},v()(a.createdAt.toDate()).calendar()))),r.a.createElement("button",{onClick:this.handleDelete,className:"btn waves-effect waves-light",name:"action"},r.a.createElement("i",{className:"tiny material-icons"},"cancel"))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),w=Object(E.b)(function(e){return{auth:e.firebase.auth}},function(e){return{deletePlanoEnsino:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("planosensino").doc(e).delete().then(function(){t({type:"DELETE_PLANO_ENSINO",planoensino:e})}).catch(function(e){t({type:"DELETE_PLANO_ENSINO_ERROR",err:e})})}}(t))}}})(_),T=function(e){var t=e.planosensino;return r.a.createElement("div",{className:"planoensino-list section"},t&&t.map(function(e){return r.a.createElement(w,{planoensino:e,key:e.id})}))},F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(e){a.props.deleteMateria(a.props.materia.id)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.materia;return t.uid?r.a.createElement("div",{className:"card z-depth-0 materia-summary"},r.a.createElement(d.b,{to:"/materia/"+a.id,key:a.id},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title "},a.nome),r.a.createElement("p",null,"Criado por ",a.authorFirstName),r.a.createElement("p",{className:"grey-text"},v()(a.createdAt.toDate()).calendar()))),r.a.createElement("button",{onClick:this.handleDelete,className:"btn waves-effect waves-light",name:"action"},r.a.createElement("i",{className:"tiny material-icons"},"cancel"))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),x=Object(E.b)(function(e){return{auth:e.firebase.auth}},function(e){return{deleteMateria:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("materias").doc(e).delete().then(function(){t({type:"DELETE_MATERIA",materia:e})}).catch(function(e){t({type:"DELETE_MATERIA_ERROR",err:e})})}}(t))}}})(F),P=function(e){var t=e.materias;return r.a.createElement("div",{className:"materia-list section"},t&&t.map(function(e){return r.a.createElement(x,{materia:e,key:e.id})}))},k=a(5),D=a(13),L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.projects,e.cursos),a=e.materias,n=e.planosensino,c=e.turmas,l=e.auth,o=e.notifications;return l.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("h2",{className:"center"},r.a.createElement("i",{className:"material-icons"},"group")," Turmas"),r.a.createElement(S,{turmas:c})),r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("h2",{className:"center"},r.a.createElement("i",{className:"material-icons"},"library_books")," Mat\xe9rias"),r.a.createElement(P,{materias:a})),r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("h2",{className:"center"},r.a.createElement("i",{className:"material-icons"},"local_library")," Cursos"),r.a.createElement(y,{cursos:t})),r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("h2",{className:"center"},r.a.createElement("i",{className:"material-icons"},"book")," P. E."),r.a.createElement(T,{planosensino:n})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(N,{notifications:o})))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),I=Object(D.d)(Object(E.b)(function(e){return{projects:e.firestore.ordered.projects,cursos:e.firestore.ordered.cursos,turmas:e.firestore.ordered.turmas,materias:e.firestore.ordered.materias,planosensino:e.firestore.ordered.planosensino,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(k.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]}]),Object(k.firestoreConnect)([{collection:"cursos",orderBy:["createdAt","desc"]}]),Object(k.firestoreConnect)([{collection:"materias",orderBy:["createdAt","desc"]}]),Object(k.firestoreConnect)([{collection:"planosensino",orderBy:["createdAt","desc"]}]),Object(k.firestoreConnect)([{collection:"notifications",limit:5,orderBy:["time","desc"]}]),Object(k.firestoreConnect)([{collection:"turmas",orderBy:["createdAt","desc"]}]))(L),M=Object(D.d)(Object(E.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(k.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.auth,a=e.project;return t.uid?a?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},a.title),r.a.createElement("p",null,a.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Postado por ",a.authorFirstName," ",a.authorLastName),r.a.createElement("div",null,"Uma data aqui")))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Carregando projeto...")):r.a.createElement(h.a,{to:"/signin"})}),U=Object(D.d)(Object(E.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.cursos;return{curso:n?n[a]:null,auth:e.firebase.auth}}),Object(k.firestoreConnect)([{collection:"cursos"}]))(function(e){var t=e.curso;return e.auth.uid?t?r.a.createElement("div",{className:"container section curso-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.nome),r.a.createElement("p",null,t.descricao)),r.a.createElement("div",{className:"card-content"},r.a.createElement("label",null,"Coordenador:"),r.a.createElement("p",null,t.coordenador)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Postado por ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,v()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Carregando curso...")):r.a.createElement(h.a,{to:"/signin"})}),z=a(37),B=a(18),G=a(34),q=[],J=!1,W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={nome:"",descricao:"",coordenador:""},a.handleChangeOptions=function(e){a.setState({coordenador:e.label})},a.handleChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createCurso(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.coordenadores;return a&&!J&&(a.forEach(function(e){"Coordenador"==e.cargo&&(q=[].concat(Object(z.a)(q),[{value:e.id,label:e.nome}]))}),J=!0),t.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Cadastro de Curso"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"nome",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"nome"},"Nome")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"descricao",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"descricao"},"Descri\xe7\xe3o")),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"cargo"},"Coordenador"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(G.a,{options:q,onChange:this.handleChangeOptions})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1"},"Criar")))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),V=Object(D.d)(Object(E.b)(function(e){return{coordenadores:e.firestore.ordered.usuarios,auth:e.firebase.auth}},function(e){return{createCurso:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("cursos").add(Object(O.a)({},e,{authorFirstName:c.nome,authorLastName:c.sobrenome,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_CURSO",curso:e})}).catch(function(e){t({type:"CREATE_CURSO_ERROR",err:e})})}}(t))}}}),Object(k.firestoreConnect)([{collection:"usuarios"}]))(W),H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.planoensino;return t.uid?a?r.a.createElement("div",{className:"container section planoensino-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},a.nome),r.a.createElement("p",null,a.descricao)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Postado por ",a.authorFirstName," ",a.authorLastName),r.a.createElement("div",null,v()(a.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Carregando plano de ensino...")):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),K=Object(D.d)(Object(E.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.planosensino;return{planoensino:n?n[a]:null,auth:e.firebase.auth}}),Object(k.firestoreConnect)([{collection:"planosensino"}]))(H),X=[],Z=!1,$=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={nome:"",descricao:"",materias:""},a.handleChangeOptions=function(e){a.setState({materias:e.label})},a.handleChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){console.log(a.state),e.preventDefault(),a.props.createPlanoEnsino(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.materias;return a&&!Z&&(a.forEach(function(e){X=[].concat(Object(z.a)(X),[{value:e.id,label:e.nome}])}),Z=!0),t.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Cadastro de Plano de Ensino"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"nome",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"nome"},"Nome")),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"cargo"},"Mat\xe9rias"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(G.a,{options:X,onChange:this.handleChangeOptions})),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"descricao",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"descricao"},"Descri\xe7\xe3o")),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"waves-effect waves-light btn blue-grey lighten-4"},"Criar")))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),Q=Object(D.d)(Object(E.b)(function(e,t){return{materias:e.firestore.ordered.materias,auth:e.firebase.auth}},function(e){return{createPlanoEnsino:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("planosensino").add(Object(O.a)({},e,{authorFirstName:c.nome,authorLastName:c.sobrenome,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_PLANO_ENSINO",planoensino:e})}).catch(function(e){t({type:"CREATE_PLANO_ENSINO_ERROR",err:e})})}}(t))}}}),Object(k.firestoreConnect)([{collection:"materias"}]))($),Y=Object(D.d)(Object(E.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.materias;return{materia:n?n[a]:null,auth:e.firebase.auth}}),Object(k.firestoreConnect)([{collection:"materias"}]))(function(e){var t=e.auth,a=e.materia;return t.uid?a?r.a.createElement("div",{className:"container section materia-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},a.nome)),r.a.createElement("div",{className:"card-content"},r.a.createElement("label",null,"Peso:"),r.a.createElement("p",null,a.peso)),r.a.createElement("div",{className:"card-content"},r.a.createElement("label",null,"Semestre:"),r.a.createElement("p",null,a.semestre)),r.a.createElement("div",{className:"card-content"},r.a.createElement("label",null,"Cursos:"),r.a.createElement("p",null,a.cursos)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Postado por ",a.authorFirstName," ",a.authorLastName),r.a.createElement("div",null,v()(a.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Carregando materia...")):r.a.createElement(h.a,{to:"/signin"})}),ee=[],te=!1,ae=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={nome:"",semestre:"",peso:"",cursos:""},a.handleChangeOptions=function(e){a.setState({cursos:e.label})},a.handleChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createMateria(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.cursos;return a&&!te&&(a.forEach(function(e){ee=[].concat(Object(z.a)(ee),[{value:e.id,label:e.nome}])}),te=!0),t.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Cadastro de Mat\xe9ria"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"nome",onChange:this.handleChange,required:!0}),r.a.createElement("label",{htmlFor:"nome"},"Nome")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"semestre",onChange:this.handleChange,required:!0}),r.a.createElement("label",{htmlFor:"peso"},"Semestre")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"number",id:"peso",className:"materialize-number",min:"0",max:"10",onChange:this.handleChange,required:!0}),r.a.createElement("label",{htmlFor:"peso"},"Peso")),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"cargo"},"Cursos"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(G.a,{options:ee,onChange:this.handleChangeOptions})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1"},"Criar")))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),ne=Object(D.d)(Object(E.b)(function(e){return{cursos:e.firestore.ordered.cursos,auth:e.firebase.auth}},function(e){return{createMateria:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("materias").add(Object(O.a)({},e,{authorFirstName:c.nome,authorLastName:c.sobrenome,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_MATERIA",materia:e})}).catch(function(e){t({type:"CREATE_MATERIA_ERROR",err:e})})}}(t))}}}),Object(k.firestoreConnect)([{collection:"cursos"}]))(ae),re=Object(D.d)(Object(E.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.turmas;return{turma:n?n[a]:null,auth:e.firebase.auth}}),Object(k.firestoreConnect)([{collection:"turmas"}]))(function(e){var t=e.turma;return e.auth.uid?t?r.a.createElement("div",{className:"container section turma-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.codigoTurma)),r.a.createElement("div",{className:"card-content"},r.a.createElement("label",null,"Professor:"),r.a.createElement("p",null,t.professor)),r.a.createElement("div",{className:"card-content"},r.a.createElement("label",null,"Periodo:"),r.a.createElement("p",null,t.periodo)),r.a.createElement("div",{className:"card-content"},r.a.createElement("label",null,"Mat\xe9ria:"),r.a.createElement("p",null,t.materia)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Postado por ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,v()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Carregando turma...")):r.a.createElement(h.a,{to:"/signin"})}),ce=(a(442),a(162),[{value:"Matutino",label:"Matutino"},{value:"Vespertino",label:"Vespertino"},{value:"Noturno",label:"Noturno"}]),le=!1,oe=!1,ie=[],se=[],me=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={codigoTurma:"",professor:"",periodo:"",materia:""},a.handleChangeOptionsM=function(e){a.setState({materia:e.label})},a.handleChangeOptionsPro=function(e){a.setState({professor:e.label})},a.handleChangeOptionsPe=function(e){a.setState({periodo:e.label})},a.handleChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createTurma(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.materias,n=e.professores;return a&&!le&&(a.forEach(function(e){ie=[].concat(Object(z.a)(ie),[{value:e.id,label:e.nome}])}),le=!0),n&&!oe&&(n.forEach(function(e){"Professor"==e.cargo&&(se=[].concat(Object(z.a)(se),[{value:e.id,label:e.nome}]))}),oe=!0),t.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Cadastro de Turma"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"codigoTurma",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"codigoTurma"},"C\xf3digo da Turma")),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"cargo"},"Professor"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(G.a,{options:se,onChange:this.handleChangeOptionsPro})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"cargo"},"Per\xedodo"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(G.a,{options:ce,onChange:this.handleChangeOptionsPe})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"cargo"},"Mat\xe9ria"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(G.a,{options:ie,onChange:this.handleChangeOptionsM})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1"},"Criar")))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),ue=Object(D.d)(Object(E.b)(function(e){return console.log(e),{auth:e.firebase.auth,materias:e.firestore.ordered.materias,professores:e.firestore.ordered.usuarios}},function(e){return{createTurma:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("turmas").add(Object(O.a)({},e,{authorFirstName:"Net",authorLastName:"Ninja",authorId:12345,createdAt:new Date})).then(function(){t({type:"CREATE_TURMA",turma:e})}).catch(function(e){t({type:"CREATE_TURMA_ERROR",err:e})})}}(t))}}}),Object(k.firestoreConnect)([{collection:"materias"}]),Object(k.firestoreConnect)([{collection:"usuarios"}]))(me),de=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Entrar"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Senha"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"waves-effect waves-light btn blue-grey lighten-4"},"Entrar"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),he=Object(E.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(de),Ee=(a(444),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:"",cpf:"",cargo:""},a.handleChangeOptions=function(e){console.log(e.target.value),a.setState({cargo:e.target.value})},a.handleChange=function(e){console.log(e.target.id),a.setState(Object(B.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Cadastrar"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Senha"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"Nome"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Sobrenome"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"cpf"},"CPF"),r.a.createElement("input",{type:"text",id:"cpf",onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"cargo"},"Cargo"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field col-md-12"},r.a.createElement("div",{id:"cargo",className:"radio-buttons",onChange:this.handleChangeOptions},r.a.createElement("label",{className:"input-field col-md-4"},r.a.createElement("input",{type:"radio",value:"Administrador",name:"cargo"}),r.a.createElement("span",null,"Administrador")),r.a.createElement("label",{className:"input-field col-md-4"},r.a.createElement("input",{type:"radio",value:"Coordenador",name:"cargo"}),r.a.createElement("span",null,"Coordenador")),r.a.createElement("label",{className:"input-field col-md-4"},r.a.createElement("input",{type:"radio",value:"Professor",name:"cargo"}),r.a.createElement("span",null,"Professor"))))),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"waves-effect waves-light btn blue-grey lighten-4"},"Cadastrar"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component)),pe=Object(E.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),o=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return o.collection("usuarios").doc(t.user.uid).set({nome:e.firstName,sobrenome:e.lastName,iniciais:e.firstName[0]+e.lastName[0],cpf:e.cpf,cargo:e.cargo})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(Ee),be=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create a New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"title"},"Project Title")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"content"},"Project Content")),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1"},"Create")))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),fe=Object(E.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("projects").add(Object(O.a)({},e,{authorFirstName:c.nome,authorLastName:c.sobrenome,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}})(be),ge=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:I}),r.a.createElement(h.b,{path:"/planoensino/:id",component:K}),r.a.createElement(h.b,{path:"/materia/:id",component:Y}),r.a.createElement(h.b,{path:"/curso/:id",component:U}),r.a.createElement(h.b,{path:"/project/:id",component:M}),r.a.createElement(h.b,{path:"/turma/:id",component:re}),r.a.createElement(h.b,{path:"/signin",component:he}),r.a.createElement(h.b,{path:"/signup",component:pe}),r.a.createElement(h.b,{path:"/cadastroplanoensino",component:Q}),r.a.createElement(h.b,{path:"/cadastromateria",component:ne}),r.a.createElement(h.b,{path:"/cadastrocurso",component:V}),r.a.createElement(h.b,{path:"/cadastroturma",component:ue}),r.a.createElement(h.b,{path:"/create",component:fe}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve={authError:null},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return Object(O.a)({},e,{authError:null});case"LOGIN_ERROR":return Object(O.a)({},e,{authError:"Erro ao entrar"});case"LOGOUT_SUCCESS":case"SIGNUP_SUCCESS":return Object(O.a)({},e,{authError:null});case"SIGNUP_ERROR":return Object(O.a)({},e,{authError:t.err.message});default:return e}},Oe={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("create project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},je={planoensino:[{id:"1",nome:"PE1",curso:"curso1",materia:"materia1",descricao:"blah blah blah"},{id:"2",nome:"PE2",curso:"curso2",materia:"materia2",descricao:"blah blah blah2"},{id:"3",nome:"PE3",curso:"curso3",materia:"materia3",descricao:"blah blah blah3"}]},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PLANO_ENSINO":return console.log("create planoensino",t.planoensino),e;case"CREATE_PLANO_ENSINO_ERROR":return console.log("create planoensino error",t.err),e;case"DELETE_PLANO_ENSINO":return console.log("delete planoensino",t.planoensino),e;case"DELETE_PLANO_ENSINO_ERROR":return console.log("delete planoensino error",t.err),e;default:return e}},Re={cursos:[{id:"1",nome:"Curso1",descricao:"blah blah blah"},{id:"2",nome:"Curso2",descricao:"blah blah blah2"},{id:"3",nome:"Curso3",descricao:"blah blah blah3"}]},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CURSO":return console.log("create curso",t.curso),e;case"CREATE_CURSO_ERROR":return console.log("create project error",t.err),e;case"DELETE_CURSO":return console.log("delete curso",t.curso),e;case"DELETE_CURSO_ERROR":return console.log("delete curso error",t.err),e;default:return e}},Se={cursos:[{id:"1",nome:"Curso1",descricao:"blah blah blah"},{id:"2",nome:"Curso2",descricao:"blah blah blah2"},{id:"3",nome:"Curso3",descricao:"blah blah blah3"}]},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TURMA":return console.log("create turma",t.turma),e;case"CREATE_TURMA_ERROR":return console.log("create project error",t.err),e;case"DELETE_TURMA":return console.log("delete turma",t.turma),e;case"DELETE_TURMA_ERROR":return console.log("delete turma error",t.err),e;default:return e}},we={materias:[{id:"1",nome:"Materia1",peso:"blah blah blah"},{id:"2",nome:"Materia2",peso:"blah blah blah2"},{id:"3",nome:"Materia3",peso:"blah blah blah3"}]},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_MATERIA":return console.log("create materia",t.materia),e;case"CREATE_MATERIA_ERROR":return console.log("create materia error",t.err),e;case"DELETE_MATERIA":return console.log("delete materia",t.materia),e;case"DELETE_MATERIA_ERROR":return console.log("delete materia error",t.err),e;default:return e}},Fe=a(82),xe=Object(D.c)({auth:Ne,planoensino:ye,project:Ce,curso:Ae,turma:_e,materia:Te,firebase:k.firebaseReducer,firestore:Fe.firestoreReducer}),Pe=a(271),ke=a(119),De=a.n(ke);a(520),a(524);De.a.initializeApp({apiKey:"AIzaSyDcfj7kr2_iH2BhMPtb5v8XU0Pha0Z2cmc",authDomain:"sistemaplanoensino.firebaseapp.com",databaseURL:"https://sistemaplanoensino.firebaseio.com",projectId:"sistemaplanoensino",storageBucket:"sistemaplanoensino.appspot.com",messagingSenderId:"133803901326"}),De.a.firestore().settings({timestampsInSnapshots:!0});var Le=De.a,Ie=Object(D.e)(xe,Object(D.d)(Object(D.a)(Pe.a.withExtraArgument({getFirebase:k.getFirebase,getFirestore:Fe.getFirestore})),Object(Fe.reduxFirestore)(Le),Object(k.reactReduxFirebase)(Le,{useFirestoreForProfile:!0,userProfile:"usuarios",attachAuthIsReady:!0})));Ie.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(E.a,{store:Ie},r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[273,1,2]]]);
//# sourceMappingURL=main.ac642b88.chunk.js.map