(()=>{"use strict";!function(){const e=document.querySelector("#footer-add-task"),t=document.querySelector("#task-name"),n=document.querySelector("#task-form"),c=document.querySelector("#card-content");document.querySelector(".trash-button");let d=[];function r(e,t){this.title=e,this.index=t}function o(){d.forEach(((e,t)=>{!function(e,t){let n=t;const c=document.querySelector("#card-content"),d=document.createElement("div");d.setAttribute("id","card"),d.setAttribute("class","card"),c.appendChild(d);const r=document.createElement("div");r.setAttribute("id","card-left");const o=document.createElement("div");o.setAttribute("id","card-right");const a=document.createElement("label"),u=document.createElement("input"),l=document.createElement("div"),s=document.createElement("button");d.appendChild(r),d.appendChild(o),a.setAttribute("class","check-control"),r.appendChild(a),u.setAttribute("type","checkbox"),u.setAttribute("id","project-done"),u.setAttribute("name","project-done"),r.appendChild(u),l.setAttribute("class","task-heading"),l.innerText=e.title,r.appendChild(l),s.setAttribute("class","trash-button"),s.setAttribute("type","button"),s.setAttribute("data-index",n),o.appendChild(s)}(e,t)})),document.querySelectorAll(".trash-button").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),function(e){let t=e.currentTarget.dataset.value;const n=document.querySelector("#card");d.splice(t,1),c.removeChild(n),o()}(e)}))}))}e.addEventListener("click",(()=>{n.reset()})),document.addEventListener("click",(function(e){e.target.matches("#add-new-task")&&function(){let e=d.length,c=new r(t.value,e);d.push(c),o(),console.log("Task Added"),n.reset()}()})),function(){const e=document.querySelector(".project-modal"),t=document.querySelector(".new-task-modal"),n=document.querySelector("#new-project-button"),c=document.querySelector("#footer-add-task"),d=(document.querySelector("#project-form"),document.querySelector("#task-form"));function r(){e.style.display="none",t.style.display="none"}document.addEventListener("click",(function(e){e.target.matches("#add-project")&&r(),e.target.matches("#add-new-task")&&(d.reset(),r())})),n.addEventListener("click",(()=>{e.style.display="flex"})),c.addEventListener("click",(()=>{t.style.display="flex"}))}()}()})();