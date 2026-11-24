(function(){
var h=document.getElementById('header'),pb=document.getElementById('progress'),bg=document.getElementById('heroBg');
function onScroll(){var y=window.scrollY,max=document.documentElement.scrollHeight-innerHeight;
 h.classList.toggle('solid',y>60);pb.style.width=(max>0?y/max*100:0)+'%';
 if(bg&&y<innerHeight*1.2)bg.style.transform='translate3d(0,'+(y*0.25)+'px,0) scale(1.08)';}
addEventListener('scroll',onScroll,{passive:true});onScroll();
var b=document.getElementById('burger'),m=document.getElementById('menu');
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);h.classList.toggle('menu-open',o)});
m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');h.classList.remove('menu-open')})});
document.getElementById('y').textContent=new Date().getFullYear();
var els=document.querySelectorAll('.rv,.rv-img');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add('in')})}
document.querySelectorAll('.split span').forEach(function(s,i){s.style.transitionDelay=(0.15+i*0.12)+'s'});
requestAnimationFrame(function(){document.body.classList.add('ready')});
var tl=document.querySelector('.tablist');
if(tl){var tabs=[].slice.call(tl.querySelectorAll('[role=tab]'));
function sel(t,f){tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on});if(f)t.focus();if(tl.scrollWidth>tl.clientWidth){tl.scrollTo({left:t.offsetLeft-(tl.clientWidth-t.offsetWidth)/2,behavior:'smooth'})}}
tabs.forEach(function(t,i){t.addEventListener('click',function(){sel(t)});t.addEventListener('keydown',function(e){var n=null;if(e.key==='ArrowDown'||e.key==='ArrowRight')n=tabs[(i+1)%tabs.length];if(e.key==='ArrowUp'||e.key==='ArrowLeft')n=tabs[(i-1+tabs.length)%tabs.length];if(n){e.preventDefault();sel(n,true)}})})}
})();
