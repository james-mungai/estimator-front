(this["webpackJsonpestimator-front-end"]=this["webpackJsonpestimator-front-end"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(2),s=t.n(o),r=(t(13),t(14),t(3)),i=t(4),d=t(6),p=t(5),c=(t(15),t(7)),m=(t(16),function(e){var a=e.label,t=e.handleChange,l=e.id,o=Object(c.a)(e,["label","handleChange","id"]);return n.a.createElement("div",{className:"group"},n.a.createElement("input",Object.assign({},o,{onChange:t,className:"form-input"})),a?n.a.createElement("label",{className:"".concat(o.value.length?"shrink":""," form-input-label"),htmlFor:l},a):null)}),u=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(r.a)(this,t),(e=a.call(this)).handleChange=function(a){var t=a.target,l=t.name,n=t.value;switch(l){case"data-population":e.setState({population:n});break;case"data-time-to-elapse":e.setState({timeToElapse:n});break;case"data-period-type":e.setState({periodType:n});break;case"data-total-hospital-beds":e.setState({totalHospitalBeds:n});break;case"data-reported-cases":e.setState({reportedCases:n})}},e.handleClick=function(){console.log(e.state),e.setState({population:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:"",periodType:"days"})},e.state={population:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:"",periodType:"days"},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.periodType,t=e.timeToElapse,l=e.reportedCases,o=e.population,s=e.totalHospitalBeds;return n.a.createElement("div",{className:"form-container"},n.a.createElement("form",null,n.a.createElement("h1",{className:"heading"},"My Covid Estimator"),n.a.createElement(m,{handleChange:this.handleChange,name:"data-population",value:o,label:"Poulation","aria-label":"data-population",required:!0,type:"number",min:"0"}),n.a.createElement(m,{handleChange:this.handleChange,name:"data-time-to-elapse",value:t,label:"Time To Elapse","aria-label":" data-time-to-elapse",required:!0,type:"number",min:"0"}),n.a.createElement(m,{handleChange:this.handleChange,name:"data-reported-cases",value:l,label:"Reported Cases","aria-label":"data-reported-cases",required:!0,type:"number",min:"0"}),n.a.createElement(m,{handleChange:this.handleChange,name:"data-total-hospital-beds",value:s,label:"Total Hospital Beds","aria-label":"data-total-hospital-beds",required:!0,type:"number",min:"0"}),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"periodType",className:"select-label"},"Period Type"),n.a.createElement("select",{onChange:this.handleChange,value:a,name:"data-period-type",className:"form-select","aria-label":"select data period type"},n.a.createElement("option",{value:"days","aria-label":"days"},"Days"),n.a.createElement("option",{value:"weeks","aria-label":"weeks"},"Weeks"),n.a.createElement("option",{value:"months","aria-label":"months"},"Months"))),n.a.createElement("input",{onClick:this.handleClick,label:"Button go Submit",type:"button",name:"button-go-submit",className:"button-go-submit",value:"Submit"})))}}]),t}(n.a.Component);var h=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,{className:"form"}))};s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.cee57381.chunk.js.map