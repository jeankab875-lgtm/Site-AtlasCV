(function(){var d=document.querySelector("details.toc");if(d&&window.matchMedia&&matchMedia("(max-width:860px)").matches)d.open=false})();
(function(){var t=document.querySelectorAll('.toc a');if(!t.length||!('IntersectionObserver'in window))return;
var m={};t.forEach(function(a){m[a.getAttribute('href').slice(1)]=a});
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){t.forEach(function(a){a.classList.remove('on')});var a=m[e.target.id];if(a)a.classList.add('on')}})},{rootMargin:'-20% 0px -70% 0px'});
document.querySelectorAll('article h2[id]').forEach(function(h){o.observe(h)})})();
