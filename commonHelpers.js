import{a as L,S as w,i as n}from"./assets/vendor-ee72e1a4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}})();const f=async(i,e,d)=>(await L.get("https://pixabay.com/api/",{params:{key:"44362034-5d7ab655544c2caf430070a80",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:d}})).data;function y(i){return i.hits.map(e=>`<li class="gallery-item">
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
</li>`).join("")}const b="/goit-js-hw-12/assets/errorSvg-843d4981.svg",S="/goit-js-hw-12/assets/cautionSvg-75a3a476.svg",q="/goit-js-hw-12/assets/informSvg-2485fc96.svg",a=document.querySelector(".form"),r=document.querySelector(".loader"),c=document.querySelector(".gallery"),l=document.querySelector(".btn-load");let o=1;const m=15;let h=0,p="",v=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.addEventListener("submit",async i=>{if(i.preventDefault(),!a.input.value.trim()){a.reset();return}try{o=1,p="",l.classList.add("visually-hidden"),c.innerHTML="",l.classList.remove("visually-hidden");const e=await f(a.input.value.trim(),o,m);e.total||n.error({iconUrl:b,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),r.classList.add("visually-hidden"),c.insertAdjacentHTML("beforeend",y(e)),v.refresh(),h=Math.ceil(e.totalHits/m),p=a.input.value.trim(),o<h&&l.classList.remove("visually-hidden")}catch(e){r.classList.add("visually-hidden"),n.warning({iconUrl:S,position:"topRight",message:`${e}`})}a.reset()});l.addEventListener("click",async i=>{o+=1,o===h&&(n.info({iconUrl:q,position:"topRight",backgroundColor:"#09f",message:"We're sorry, but you've reached the end of search results."}),l.classList.add("visually-hidden"),r.classList.add("visually-hidden"));try{r.classList.remove("visually-hidden");const e=await f(p,o,m);r.classList.add("visually-hidden"),c.insertAdjacentHTML("beforeend",y(e)),v.refresh(),window.scrollBy({top:c.firstChild.getBoundingClientRect().height*2,behavior:"smooth"})}catch{r.classList.add("visually-hidden"),n.warning({iconUrl:warningSvg,position:"topRight",message:"Whoops, something went wrong! We gonna fix it soon."})}});
//# sourceMappingURL=commonHelpers.js.map
