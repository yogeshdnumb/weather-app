(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u="8abcc05e965105a7df55aa272c5030bf";async function p(n){let e=await(await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${n}&appid=${u}`,{mode:"cors"})).json();return{lat:e[0].lat,lon:e[0].lon}}async function m(n){return l(!0),await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n.lat}&lon=${n.lon}&units=metric&appid=${u}`,{mode:"cors"})).json()}const f=document.querySelector("#search button"),i=document.querySelector("#search input"),d=document.querySelector("#container"),y=document.querySelector("#temperature span"),h=document.querySelector("#humidity span"),w=document.querySelector("#wind span"),g=document.querySelector("#icon"),S=document.querySelector("#info"),q=document.querySelector("#place"),L=document.querySelector("#time"),b=document.querySelector("#date");document.addEventListener("DOMContentLoaded",()=>{a("new york")});i.addEventListener("keydown",n=>{n.key=="Enter"&&a(i.value)});f.addEventListener("click",()=>{a(i.value)});async function a(n){const o=await p(n),e=await m(o);y.innerHTML=Math.round(+e.main.temp)+"&deg;C",h.innerText=e.main.humidity+"%",w.innerText=Math.round(e.wind.speed*3.6)+"km/h",S.innerText=e.weather[0].description,b.innerText=new Date(e.dt*1e3).toLocaleDateString("en-us",{month:"short",day:"numeric"}),L.innerText=new Date(e.dt*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),q.innerText=e.name+", "+e.sys.country,g.src="/openweathermap/"+e.weather[0].icon+".svg",l(!1)}function l(n){n&&(d.style.opacity="0.4"),n||(d.style.opacity="1")}
