(()=>{function e(e,t,n,a,r,c,o){try{var i=e[c](o),m=i.value}catch(e){return void n(e)}i.done?t(m):Promise.resolve(m).then(a,r)}function t(t){return function(){var n=this,a=arguments;return new Promise((function(r,c){var o=t.apply(n,a);function i(t){e(o,r,c,i,m,"next",t)}function m(t){e(o,r,c,i,m,"throw",t)}i(void 0)}))}}var n=document.getElementById("videoContainer"),a=document.getElementById("commentForm"),r=document.querySelector(".video__comments ul"),c=(r.querySelectorAll("#comment-text"),r.querySelectorAll("#delete-comment")),o=function(e,t,n,a){var c=document.createElement("li");c.className="video__comment",c.dataset.id=t;var o=document.createElement("div");if(o.className="video__comment-icon",a){var i=document.createElement("img");i.src=a,i.className="smaller__avatar",o.appendChild(i)}else{var d=document.createElement("span");d.className="smaller__imoticon",d.innerText="😀",o.appendChild(d)}var s=document.createElement("div");s.className="video__comment-box";var l=document.createElement("div");l.className="ownerName",l.innerText=n,s.appendChild(l);var u=document.createElement("div");u.className="video__comment-text";var v=document.createElement("span");v.id="comment-text",v.innerText=" ".concat(e);var p=document.createElement("i");p.className="far fa-trash-alt",p.id="delete-comment",p.addEventListener("click",m),u.appendChild(v),u.appendChild(p),s.appendChild(u),c.appendChild(o),c.appendChild(s),r.prepend(c)},i=function(){var e=t(regeneratorRuntime.mark((function e(t){var r,c,i,m,d,s,l,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=a.querySelector("textarea"),c=r.value,i=n.dataset.id,""!==c){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,fetch("/api/videos/".concat(i,"/comment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:c})});case 8:if(201!==(m=e.sent).status){e.next=18;break}return r.value="",e.next=13,m.json();case 13:d=e.sent,s=d.newCommentId,l=d.name,u=d.avatarUrl,o(c,s,l,u);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();a&&a.addEventListener("submit",i);var m=function(){var e=t(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.parentElement.parentElement.parentElement,a=n.dataset.id,e.next=4,fetch("/api/videos/".concat(a,"/comment"),{method:"delete"});case 4:200===e.sent.status&&r.removeChild(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();c&&c.forEach((function(e){e.addEventListener("click",m)}))})();