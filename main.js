// LINGARAJA — shared site behaviour
document.addEventListener('DOMContentLoaded', () => {

  // mobile nav toggle
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
  }
  // mobile mega-menu toggle (tap to expand on small screens)
  document.querySelectorAll('.has-mega > a').forEach(a => {
    a.addEventListener('click', (e) => {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });

  // scroll reveal (re-usable: exposed globally so dynamically injected
  // product cards from products.js can be observed too)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: .12 });
  window.__lgObserveReveal = () => {
    document.querySelectorAll('[data-reveal]:not(.in)').forEach(el => io.observe(el));
  };
  window.__lgObserveReveal();

  // scroll-to-top button
  const stBtn = document.querySelector('.scroll-top');
  if (stBtn) {
    window.addEventListener('scroll', () => {
      stBtn.classList.toggle('show', window.scrollY > 500);
    });
    stBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // animated counters
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    let started = false;
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting && !started) {
          started = true;
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 60));
          const t = setInterval(() => {
            cur += step;
            if (cur >= target) { cur = target; clearInterval(t); }
            el.textContent = cur.toLocaleString();
          }, 22);
        }
      });
    }, { threshold: .4 });
    counterIO.observe(el);
  });

  // hero brand carousel (auto-rotating, with dots + arrow controls)
  const hc = document.querySelector('.hcarousel');
  if (hc) {
    const slides = Array.from(hc.querySelectorAll('.hcarousel-slide'));
    const dotsWrap = hc.querySelector('.hcarousel-dots');
    let i = slides.findIndex(s => s.classList.contains('active'));
    if (i < 0) i = 0;
    let timer;

    const go = (n) => {
      slides[i].classList.remove('active');
      dotsWrap?.children[i]?.classList.remove('active');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('active');
      dotsWrap?.children[i]?.classList.add('active');
    };
    const next = () => go(i + 1);
    const prev = () => go(i - 1);
    const restart = () => { clearInterval(timer); timer = setInterval(next, 4200); };

    if (dotsWrap) {
      slides.forEach((_, idx) => {
        const b = document.createElement('button');
        if (idx === i) b.classList.add('active');
        b.addEventListener('click', () => { go(idx); restart(); });
        dotsWrap.appendChild(b);
      });
    }
    hc.querySelector('.hcarousel-nav.next')?.addEventListener('click', () => { next(); restart(); });
    hc.querySelector('.hcarousel-nav.prev')?.addEventListener('click', () => { prev(); restart(); });
    hc.addEventListener('mouseenter', () => clearInterval(timer));
    hc.addEventListener('mouseleave', restart);
    restart();
  }

  // clickable category filter pills (brand pages)
  const pillsWrap = document.querySelector('.filter-pills');
  const grid = document.querySelector('#brand-products');
  if (pillsWrap && grid) {
    const pills = Array.from(pillsWrap.querySelectorAll('.pill'));
    const applyFilter = (pill) => {
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = (pill.getAttribute('data-filter') || '').toLowerCase();
      const cards = Array.from(grid.querySelectorAll('.pcard'));
      let visible = 0;
      cards.forEach((card) => {
        const type = (card.getAttribute('data-type') || '').toLowerCase();
        const show =
          !filter ||
          filter === 'all' ||
          filter.split('|').some((f) => type.includes(f.trim()));
        card.style.display = show ? '' : 'none';
        if (show) visible += 1;
      });
      const countEl = document.querySelector('.result-count');
      if (countEl && countEl.dataset.base === undefined) {
        countEl.dataset.base = countEl.textContent;
      }
      if (countEl) {
        countEl.textContent =
          filter && filter !== 'all'
            ? `Showing ${visible} of ${cards.length} products in "${pill.textContent.trim()}"`
            : countEl.dataset.base;
      }
    };
    pills.forEach((pill) => {
      pill.setAttribute('type', 'button');
      pill.addEventListener('click', () => applyFilter(pill));
    });
  }

  // simple live product search (index page quick search box)
  const searchInput = document.querySelector('#site-search');
  const searchResults = document.querySelector('#site-search-results');
  if (searchInput && searchResults && typeof LINGARAJA_PRODUCTS !== 'undefined') {
    const all = [];
    Object.entries(LINGARAJA_PRODUCTS).forEach(([brand, items]) => {
      items.forEach(p => all.push({ brand, ...p }));
    });
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      searchResults.innerHTML = '';
      if (!q) { searchResults.style.display = 'none'; return; }
      const matches = all.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q)
      ).slice(0, 8);
      if (!matches.length) {
        searchResults.innerHTML = '<div class="sr-empty">No matches. Try a brand, SKU or product type.</div>';
      } else {
        matches.forEach(m => {
          const a = document.createElement('a');
          a.href = `brand-${m.brand.toLowerCase()}.html`;
          a.className = 'sr-item';
          a.innerHTML = `<span class="sr-brand">${m.brand}</span><span>${m.name}</span><small>SKU ${m.sku}</small>`;
          searchResults.appendChild(a);
        });
      }
      searchResults.style.display = 'block';
    });
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });
  }
});
