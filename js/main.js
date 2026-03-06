// Preloader
window.addEventListener('load',()=>{
  setTimeout(()=>{
    const p=document.getElementById('preloader');
    if(p){p.classList.add('hide');setTimeout(()=>p.remove(),600)}
  },2600);
});

// Mobile nav toggle
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.hamburger');
  const links=document.querySelector('.nav-links');
  if(btn&&links){
    btn.addEventListener('click',()=>{
      btn.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      btn.classList.remove('open');
      links.classList.remove('open');
    }));
  }

  // Scroll fade-up
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:0.15});
  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
});

// Copy IP
function copyIP(){
  const ip='play.fablesmp.net';
  navigator.clipboard.writeText(ip).then(()=>{
    const toast=document.querySelector('.copied-toast');
    if(toast){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1500)}
  });
}
