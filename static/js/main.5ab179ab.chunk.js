(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={Form:"Form_Form__1323r",Form__wrap:"Form_Form__wrap__1TW08",Form__button:"Form_Form__button__2A_lJ"}},function(e,t,a){e.exports={Button:"SortingButtons_Button__3oduL",Sorting:"SortingButtons_Sorting__1slQw"}},function(e,t,a){e.exports={Header:"Header_Header__2pVY1",Header__title:"Header_Header__title__2yduh"}},,,function(e,t,a){e.exports={Table:"Table_Table__3IVu9"}},function(e,t,a){e.exports={Container:"Search_Container__1J4DJ"}},function(e,t,a){e.exports={Loader:"Spinner_Loader__3CCOZ",load2:"Spinner_load2__1xnmy"}},function(e,t,a){e.exports={Container:"Container_Container__2jiH8"}},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),c=(a(22),a(23),a(5)),i=a(1),s=a(2),u=a(4),m=a(3),p=a(13),d=a.n(p),h=function(e){var t=e.employee,a=e.deleted;return r.a.createElement("tr",null,r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job_title),r.a.createElement("td",null,t.department),r.a.createElement("td",null,t.monthly_salary),r.a.createElement("td",null,r.a.createElement("button",{type:"button",onClick:a},"\u2715")))},f="https://database-dc5a8.firebaseio.com",y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).deleteRow=function(t){var a=e.props,n=a.initialData,r=a.employees,o=a.onDeleteClick,l=Object(c.a)(r),i=Object(c.a)(n),s=l.filter((function(e){return e.name!==t.name})),u=i.filter((function(e){return e.name===t.name}));o(s);try{fetch("".concat(f,"/employees/").concat(Object.keys(u)[0],".json"),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(u)})}catch(m){console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",m)}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.fields,n=t.employees,o=Object.entries(a).map((function(e){return r.a.createElement("th",{key:"headcell".concat(e[0])},"monthly_salary"===e[0]?"".concat(e[1],", $"):e[1])})),l="";return n.length>0&&(l=n.map((function(t){return r.a.createElement(h,{key:t.id,employee:t,deleted:function(){return e.deleteRow(t)}})}))),r.a.createElement("table",{className:d.a.Table},r.a.createElement("thead",null,r.a.createElement("tr",null,o,r.a.createElement("th",null))),r.a.createElement("tbody",null,l))}}]),a}(n.Component),b=a(14),_=a.n(b),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:""},e.searchTable=function(t){var a=e.props,n=a.initialData,r=a.onSearchChange,o=Object.values(Object(c.a)(n)).filter((function(e){return e.name.toLowerCase().includes(t.target.value.toLowerCase())||e.job_title.toLowerCase().includes(t.target.value.toLowerCase())||e.department.toLowerCase().includes(t.target.value.toLowerCase())||e.monthly_salary.toString().includes(t.target.value.toLowerCase())}));e.setState({searchTerm:t.target.value}),r(o)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.searchTerm;return r.a.createElement("div",{className:_.a.Container},r.a.createElement("label",{htmlFor:"search"},"Search"),r.a.createElement("input",{id:"search",type:"search",placeholder:"Search...",value:t,onChange:function(t){return e.searchTable(t)},autoComplete:"off"}))}}]),a}(n.Component),j=a(7),E=a(6),g=function(e){var t=e.field,a=e.changed,n=e.value;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:t[0]},t[1],"monthly_salary"===t[0]?r.a.createElement("span",{style:{textTransform:"lowercase"}}," (numbers only)"):""),r.a.createElement("input",{id:t[0],placeholder:"Add ".concat(t[1]),value:n,onChange:a,type:"monthly_salary"===t[0]?"number":"text",required:!0}))},O=a(8),S=a.n(O),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={employee:{name:"",job_title:"",department:"",ly_salary:""}},e.generateId=function(){return Date.now().toString(36)+Math.random().toString(36).substr(2)},e.addEmployee=function(t){t.preventDefault();var a=e.state.employee,n=e.props.onFormSubmit,r=Object(E.a)(Object(E.a)({},a),{},{id:e.generateId()});n(r),e.setState({employee:{id:"",name:"",job_title:"",department:"",monthly_salary:""}});try{fetch("".concat(f,"/employees.json"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)})}catch(o){console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",o)}},e.setValue=function(t){var a=e.state.employee;e.setState({employee:Object(E.a)(Object(E.a)({},a),{},Object(j.a)({},t.target.id,t.target.value))})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.employee,a=this.props.fields,n=Object.entries(a).map((function(a){return r.a.createElement(g,{key:a[0],field:a,value:t[a[0]],employee:t,changed:function(t){return e.setValue(t)}})}));return r.a.createElement("form",{className:S.a.Form,onSubmit:this.addEmployee,autoComplete:"off"},r.a.createElement("div",{className:S.a.Form__wrap},n),r.a.createElement("button",{className:S.a.Form__button,type:"submit"},"Add Row"))}}]),a}(n.Component),w=a(15),k=a.n(w),F=function(){return r.a.createElement("div",{className:k.a.Loader},"Loading...")},D=a(9),L=a.n(D),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).sortArr=function(t){var a=e.props,n=a.employees,r=a.sorting,o=a.onFilterClick,l=Object(c.a)(n),i=r.direction,s=isNaN(+l[0][t]);i=r.value===t&&"up"===r.direction?"down":"up",s?l.sort((function(e,a){return e[t].toUpperCase()<a[t].toUpperCase()?"up"===i?-1:1:e[t].toUpperCase()>a[t].toUpperCase()?"up"===i?1:-1:0})):l.sort((function(e,a){return+e[t]<+a[t]?"up"===i?-1:1:+e[t]>+a[t]?"up"===i?1:-1:0})),o(l,t,i)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.fields,a=Object.entries(t).map((function(t){return r.a.createElement("button",{type:"button",key:"sort".concat(t[0]),className:L.a.Button,onClick:function(){return e.sortArr(t[0])}},t[1])}));return r.a.createElement("div",{className:L.a.Sorting},r.a.createElement("p",null,"Sort by"),a)}}]),a}(n.Component),T=a(16),A=a.n(T),x=function(e){var t=e.children;return r.a.createElement("div",{className:A.a.Container},t)},H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={initialData:[],employees:[],fields:{name:"name",job_title:"job title",department:"department",monthly_salary:"monthly salary"},error:!1,isLoaded:!1,sorting:{value:"",direction:""}},e.handleSearch=function(t){e.setState({employees:t})},e.handleSubmit=function(t){var a=e.state,n=a.initialData,r=a.employees;e.setState({initialData:[].concat(Object(c.a)(n),[t]),employees:[].concat(Object(c.a)(r),[t])})},e.handleFilter=function(t,a,n){e.setState({employees:t,sorting:{value:a,direction:n}})},e.handleDelete=function(t){e.setState({employees:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("employees"));t?this.setState({isLoaded:!0,initialData:t,employees:t}):(localStorage.clear(),fetch("".concat(f,"/employees.json")).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,initialData:t,employees:Object.values(t)}),localStorage.setItem("employees",JSON.stringify(Object.values(t)))}),(function(t){e.setState({isLoaded:!0,error:t})})))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.initialData,o=e.employees,l=e.fields,c=e.sorting,i="";return i=t?r.a.createElement("p",null,"\u041e\u0448\u0438\u0431\u043a\u0430: ",t.message):a?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{onSearchChange:this.handleSearch,initialData:n}),r.a.createElement(N,{employees:o,onFilterClick:this.handleFilter,sorting:c,fields:l}),r.a.createElement(y,{initialData:n,employees:o,fields:l,onDeleteClick:this.handleDelete}),r.a.createElement(C,{fields:l,onFormSubmit:this.handleSubmit})):r.a.createElement(F,null),r.a.createElement(x,null,i)}}]),a}(n.Component),J=a(10),B=a.n(J),I=function(){return r.a.createElement("header",{className:B.a.Header},r.a.createElement(x,null,r.a.createElement("h1",{className:B.a.Header__title},"Data Table")))};var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.5ab179ab.chunk.js.map