import{a as L,S as w,i as l}from"./assets/vendor-ee72e1a4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&g(m)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function g(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}})();const f=async(i,e,d)=>(await L.get("https://pixabay.com/api/",{params:{key:"44362034-5d7ab655544c2caf430070a80",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:d}})).data;function y(i){return i.hits.map(e=>`<li class="gallery-item">
  <a class="img-link" href="${e.largeImageURL}">
    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
  </a>
  <ul class="img-list">
    <li class="img-item">
      <h3 class="img-title">Likes</h3>
      <p class="img-text">${e.likes}</p>
    </li>
    <li class="img-item">
      <h3 class="img-title">Views</h3>
      <p class="img-text">${e.views}</p>
    </li>
    <li class="img-item">
      <h3 class="img-title">Comments</h3>
      <p class="img-text">${e.comments}</p>
    </li>
    <li class="img-item">
      <h3 class="img-title">Downloads</h3>
      <p class="img-text">${e.downloads}</p>
    </li>
  </ul>
</li>`).join("")}const b="/goit-js-hw-12/assets/errorSvg-843d4981.svg",S="/goit-js-hw-12/assets/cautionSvg-75a3a476.svg",x="/goit-js-hw-12/assets/informSvg-2485fc96.svg",r=document.querySelector(".form"),a=document.querySelector(".loader"),n=document.querySelector(".gallery"),c=document.querySelector(".btn-load");let o=1;const u=15;let h=0,p="",v=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});r.addEventListener("submit",async i=>{if(i.preventDefault(),!r.input.value.trim()){r.reset();return}try{o=1,p="",c.classList.add("visually-hidden"),n.innerHTML="",a.classList.remove("visually-hidden");const e=await f(r.input.value.trim(),o,u);e.total||l.error({iconUrl:b,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.classList.add("visually-hidden"),n.insertAdjacentHTML("beforeend",y(e)),v.refresh(),h=Math.ceil(e.totalHits/u),p=r.input.value.trim(),o<h&&c.classList.remove("visually-hidden")}catch{a.classList.add("visually-hidden"),l.warning({iconUrl:S,position:"topRight",message:"Whoops, something went wrong! We gonna fix it soon."})}r.reset()});c.addEventListener("click",async i=>{o+=1,o===h&&(l.info({iconUrl:x,position:"topRight",backgroundColor:"#09f",message:"We're sorry, but you've reached the end of search results."}),c.classList.add("visually-hidden"),a.classList.add("visually-hidden"));try{a.classList.remove("visually-hidden");const e=await f(p,o,u);a.classList.add("visually-hidden"),n.insertAdjacentHTML("beforeend",y(e)),v.refresh(),window.scrollBy({top:n.firstChild.getBoundingClientRect().height*2,behavior:"smooth"})}catch{a.classList.add("visually-hidden"),l.warning({iconUrl:warningSvg,position:"topRight",message:"Whoops, something went wrong! We gonna fix it soon."})}});
//# sourceMappingURL=commonHelpers.js.map
