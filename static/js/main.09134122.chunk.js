(this["webpackJsonpestimator-front-end"]=this["webpackJsonpestimator-front-end"]||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(3),r=t.n(o),i=(t(14),t(15),t(4)),s=t(5),c=t(6),d=t(8),m=t(7),p=(t(16),t(1)),u=(t(17),function(e){var a=e.label,t=e.handleChange,l=e.id,o=Object(p.a)(e,["label","handleChange","id"]);return n.a.createElement("div",{className:"group"},n.a.createElement("input",Object.assign({},o,{onChange:t,className:"form-input"})),a?n.a.createElement("label",{className:"".concat(o.value.length?"shrink":""," form-input-label"),htmlFor:l},a):null)}),h=(t(18),function(e){var a=e.label,t=e.handleClick,l=Object(p.a)(e,["label","handleClick"]);return n.a.createElement("button",Object.assign({onClick:t},l,{className:"btn"}),a," ")}),b=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).handleChange=function(a){var t=a.target,l=t.name,n=t.value;e.setState(Object(i.a)({},l,n))},e.handleClick=function(){console.log(e.state),e.setState({population:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:"",periodType:"days"})},e.state={population:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:"",periodType:"days"},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state,a=e.periodType,t=e.timeToElapse,l=e.reportedCases,o=e.population,r=e.totalHospitalBeds;return n.a.createElement("div",{className:"form-container"},n.a.createElement("form",null,n.a.createElement("h1",{className:"heading"},"My Covid Estimator"),n.a.createElement(u,{handleChange:this.handleChange,name:"population",id:"data-population",value:o,label:"Poulation","aria-label":"data-population",required:!0,type:"number",min:"0"}),n.a.createElement(u,{handleChange:this.handleChange,name:"timeToElapse",id:"data-time-to-elapse",value:t,label:"Time To Elapse","aria-label":" data-time-to-elapse",required:!0,type:"number",min:"0"}),n.a.createElement(u,{handleChange:this.handleChange,name:"reportedCases",id:"data-reported-cases",value:l,label:"Reported Cases","aria-label":"data-reported-cases",required:!0,type:"number",min:"0"}),n.a.createElement(u,{handleChange:this.handleChange,name:"totalHospitalBeds",id:"data-total-hospital-beds",value:r,label:"Total Hospital Beds","aria-label":"data-total-hospital-beds",required:!0,type:"number",min:"0"}),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"periodType",className:"select-label"},"Period Type"),n.a.createElement("select",{onChange:this.handleChange,value:a,name:"periodType",className:"form-select","aria-label":"select data period type"},n.a.createElement("option",{value:"days","aria-label":"days"},"Days"),n.a.createElement("option",{value:"weeks","aria-label":"weeks"},"Weeks"),n.a.createElement("option",{value:"months","aria-label":"months"},"Months"))),n.a.createElement("div",{className:"form-button"},n.a.createElement(h,{handleClick:this.handleClick,label:"Button go Submit",type:"button"}))))}}]),t}(n.a.Component);var E=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(b,{className:"form"}))};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.09134122.chunk.js.map