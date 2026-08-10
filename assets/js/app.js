/* ============================================================
   Carlos Rodriguez — Portfolio 2026 — behavior
   ============================================================ */
(function(){
  'use strict';
  var RM = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---------- NAV ---------- */
  var nav = document.getElementById('nav');
  var links = document.getElementById('navLinks');
  var toggle = document.getElementById('navToggle');
  function onScroll(){
    if(nav) nav.classList.toggle('solid', window.scrollY > 40);
    var p = document.getElementById('progress');
    if(p){
      var h = document.documentElement.scrollHeight - window.innerHeight;
      p.style.width = (h>0 ? (window.scrollY/h*100) : 0) + '%';
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
  if(toggle){ toggle.addEventListener('click', function(){ links.classList.toggle('open'); }); }
  if(links){ links.addEventListener('click', function(e){ if(e.target.tagName==='A') links.classList.remove('open'); }); }

  /* ---------- SCROLL REVEAL ---------- */
  var revealEls = document.querySelectorAll('.rv');
  if(RM || !('IntersectionObserver' in window)){
    revealEls.forEach(function(el){ el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);
          var s = en.target.querySelectorAll('[data-count]'); s.forEach(countUp);
        }
      });
    }, {threshold:0.16, rootMargin:'0px 0px -8% 0px'});
    revealEls.forEach(function(el){ io.observe(el); });
  }

  /* ---------- COUNT-UP ---------- */
  function countUp(el){
    if(el.dataset.done) return; el.dataset.done='1';
    var target = parseFloat(el.dataset.count);
    var dec = parseInt(el.dataset.dec||'0',10);
    var prefix = el.dataset.prefix||'';
    var unit = el.dataset.unit||'';
    var suffix = el.dataset.suffix||'';
    function render(v){
      el.innerHTML = prefix + v.toFixed(dec) + (suffix?suffix:'') + (unit?' <span class="u">'+unit+'</span>':'');
    }
    if(RM){ render(target); return; }
    var dur=1000, t0=null;
    function step(ts){ if(!t0)t0=ts; var p=Math.min((ts-t0)/dur,1);
      var e=1-Math.pow(1-p,3); render(target*e);
      if(p<1) requestAnimationFrame(step); else render(target);
    }
    requestAnimationFrame(step);
  }

  /* ---------- SLIDER ---------- */
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
  function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function buildSlider(root){
    var slug = root.dataset.slug;
    var media = (window.MEDIA && window.MEDIA[slug]) ? window.MEDIA[slug].slice() : [];
    var meta = (window.SLIDE_META && window.SLIDE_META[slug]) || {};
    if(!media.length){ root.classList.add('empty'); return; }

    // apply curated order, then append any extras present in the folder
    var files;
    if(meta.order){
      var ordered = meta.order.filter(function(f){ return media.indexOf(f)>-1; });
      var extra = media.filter(function(f){ return ordered.indexOf(f)<0; });
      files = ordered.concat(extra);
    } else { files = media; }

    var caps = meta.caps || {};
    var n = files.length;
    var i = 0;

    var slidesHTML = files.map(function(f){
      var cap = caps[f] || '';
      var alt = esc(cap || (slug + ' media'));
      var media;
      if(/\.mp4$/i.test(f)){
        var poster = 'media/'+slug+'/'+f.replace(/\.mp4$/i,'-poster.jpg');
        media = '<video class="vid" poster="'+poster+'" controls preload="metadata" playsinline '+
                'src="media/'+slug+'/'+f+'"></video>';
      } else {
        media = '<img data-src="media/'+slug+'/'+f+'" alt="'+alt+'" decoding="async">';
      }
      return '<div class="slide">'+media+'<div class="cap">'+esc(cap)+'</div></div>';
    }).join('');

    var dotsHTML = n<=12 ? '<div class="dots">'+files.map(function(_,k){
      return '<button class="dot'+(k===0?' on':'')+'" aria-label="Go to image '+(k+1)+'"></button>';
    }).join('')+'</div>' : '';

    root.setAttribute('tabindex','0');
    root.setAttribute('role','group');
    root.setAttribute('aria-label', slug.replace(/-/g,' ')+' image gallery');
    root.innerHTML =
      '<div class="viewport"><div class="track">'+slidesHTML+'</div>'+
        '<button class="arrow prev" aria-label="Previous image">'+ARROW+'</button>'+
        '<button class="arrow next" aria-label="Next image" style="transform:translateY(-50%) rotate(180deg)">'+ARROW+'</button>'+
      '</div>'+
      '<div class="bar"><div class="counter"><b>'+String(1).padStart(2,'0')+'</b> / '+String(n).padStart(2,'0')+'</div>'+dotsHTML+'</div>';

    var track = root.querySelector('.track');
    var imgs = root.querySelectorAll('.slide img');
    var prev = root.querySelector('.arrow.prev');
    var next = root.querySelector('.arrow.next');
    var counter = root.querySelector('.counter b');
    var dots = root.querySelectorAll('.dot');

    function loadAround(idx){
      [idx-1, idx, idx+1].forEach(function(j){
        if(j>=0 && j<n){ var im=imgs[j]; if(im && !im.src && im.dataset.src){ im.src=im.dataset.src; } }
      });
    }
    function update(){
      track.style.transform = 'translateX(' + (-i*100) + '%)';
      counter.textContent = String(i+1).padStart(2,'0');
      if(prev) prev.disabled = (i===0);
      if(next) next.disabled = (i===n-1);
      dots.forEach(function(d,k){ d.classList.toggle('on', k===i); });
      // pause any video that isn't on the current slide
      var cur = track.children[i];
      root.querySelectorAll('video').forEach(function(v){ if(!cur.contains(v)) v.pause(); });
      loadAround(i);
    }
    function go(to){ i = Math.max(0, Math.min(n-1, to)); update(); }

    if(prev) prev.addEventListener('click', function(){ go(i-1); });
    if(next) next.addEventListener('click', function(){ go(i+1); });
    dots.forEach(function(d,k){ d.addEventListener('click', function(){ go(k); }); });

    root.addEventListener('keydown', function(e){
      if(e.key==='ArrowLeft'){ e.preventDefault(); go(i-1); }
      else if(e.key==='ArrowRight'){ e.preventDefault(); go(i+1); }
    });

    // swipe (pointer)
    var x0=null, dx=0, dragging=false;
    var vp = root.querySelector('.viewport');
    vp.addEventListener('pointerdown', function(e){ x0=e.clientX; dragging=true; dx=0; });
    vp.addEventListener('pointermove', function(e){ if(dragging){ dx=e.clientX-x0; } });
    function end(){ if(!dragging) return; dragging=false;
      if(Math.abs(dx)>44){ go(dx<0 ? i+1 : i-1); } x0=null; dx=0;
    }
    vp.addEventListener('pointerup', end);
    vp.addEventListener('pointercancel', end);
    vp.addEventListener('pointerleave', end);

    update();
  }
  document.querySelectorAll('.slider').forEach(buildSlider);

  /* ---------- RESUME MODAL ---------- */
  var modal = document.getElementById('resumeModal');
  var RESUME = window.RESUME_DATA_URI || 'assets/resume.pdf';
  // When the résumé is inlined (gated build), point the download / open links at it too.
  if(modal && window.RESUME_DATA_URI){
    var dl = modal.querySelector('a.dl'); if(dl) dl.href = window.RESUME_DATA_URI;
    var op = modal.querySelector('a[target="_blank"]'); if(op) op.href = window.RESUME_DATA_URI;
  }
  function openResume(){
    if(!modal) return;
    var holder = modal.querySelector('.holder');
    if(holder && !holder.dataset.loaded){
      holder.dataset.loaded='1';
      holder.innerHTML = '<iframe src="'+RESUME+'#toolbar=1&view=FitH" title="Résumé — Carlos Rodriguez"></iframe>';
    }
    modal.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeResume(){ if(modal){ modal.classList.remove('open'); document.body.style.overflow=''; } }
  document.querySelectorAll('[data-resume]').forEach(function(b){ b.addEventListener('click', function(e){ e.preventDefault(); openResume(); }); });
  if(modal){
    modal.querySelector('.backdrop').addEventListener('click', closeResume);
    var cb = modal.querySelector('.close'); if(cb) cb.addEventListener('click', closeResume);
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeResume(); });
  }

  /* ---------- SCROLLSPY (nav active) ---------- */
  var spy = [].slice.call(document.querySelectorAll('#navLinks a[href^="#"]'));
  var targets = spy.map(function(a){ return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  if('IntersectionObserver' in window && targets.length){
    var so = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          spy.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href')==='#'+en.target.id); });
        }
      });
    }, {rootMargin:'-45% 0px -50% 0px'});
    targets.forEach(function(t){ so.observe(t); });
  }
})();
