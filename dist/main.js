(()=>{"use strict";alert("Javascript loaded!"),function(){const e=document.querySelector("#new-project-button"),t=document.querySelector("#add-project"),o=document.querySelector("#project-form"),c=document.querySelector(".project-modal"),n=document.querySelector("#project-tabs"),r=document.querySelector("#project-name");let l=[];function d(e,t){this.title=e,this.index=t}document.addEventListener("click",(function(e){e.target.matches("#add-project")&&(o.reset(),c.style.display="none")})),t.addEventListener("click",(()=>{let e=l.length,t=new d(r.value,e);l.push(t),console.log(l),l.forEach(((e,t)=>{!function(e,t){const o=document.createElement("button");o.setAttribute("id",`${e.title}-button`),o.innerHTML=`${e.title}`,n.appendChild(o),console.log(o.value)}(e)}))})),e.addEventListener("click",(()=>{c.style.display="flex"}))}()})();