const nav=document.getElementById("nav");
addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>30));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelector(".menu").addEventListener("click",()=>{
  const links=document.querySelector(".navlinks");
  const open=links.style.display==="flex";
  links.style.display=open?"none":"flex";
  links.style.position="absolute";
  links.style.top="64px";
  links.style.left="0";
  links.style.right="0";
  links.style.padding="22px 6vw";
  links.style.flexDirection="column";
  links.style.background="rgba(3,5,7,.97)";
  links.style.gap="20px";
});