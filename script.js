/* ═══════════════════════════════════════════════════════════
   Atelys — Vanilla JS (replaces all React logic)
   ═══════════════════════════════════════════════════════════ */

// ── DATA ──────────────────────────────────────────────────

const projects = [
  {
    title: 'Erfolg Living',
    category: 'Web',
    tag: 'Web Design & Development',
    url: 'https://www.erfolgliving.com',
    image: null,
    description: 'A cinematic web experience for a luxury brand, engineered for high performance and deep user engagement.',
    result: '40% boost in engagement',
    tech: 'React, Three.js'
  },
  {
    title: 'Novellect',
    category: 'Web',
    tag: 'Frontend Development',
    url: 'https://novellect.vercel.app',
    image: null,
    description: 'Dynamic platform for personalized book discovery, focusing on interactive user experiences.',
    result: '3x longer sessions',
    tech: 'Next.js, React'
  },
  {
    title: 'SIAAM Logistics',
    category: 'Web',
    tag: 'Custom Dashboard',
    url: 'https://transport-vehicle-g-sheet-for-siaam.vercel.app/',
    image: 'assets/images/project3.webp',
    description: 'Custom logistics dashboard synchronized with Google Workspace for real-time operational efficiency.',
    result: '20+ hours saved weekly',
    tech: 'React, API Sync'
  },
  {
    title: 'Choudhry Sons Exports',
    category: 'Web',
    tag: 'E-Commerce & Brand',
    url: 'https://chaudharysons.vercel.app/',
    image: 'assets/images/choudhry.webp',
    description: 'Premium showcase website for a heritage metal handicrafts exporter operating since 1974, with a curated multi-category product catalogue reaching 30+ countries.',
    result: 'increase in global reach',
    tech: 'HTML, CSS, JavaScript'
  },
  {
    title: 'Ready to start your journey?',
    category: 'Connect',
    tag: 'Get in Touch',
    url: '#contact',
    image: null,
    isCTA: true,
    description: "Have a vision you want to bring to life? We're ready to engineer your next big business success.",
    result: 'Response in 24h',
    tech: "Let's Talk"
  }
];

const teamMembers = [
  {
    name: "Rushan Haque",
    role: "Founder & Lead Engineer",
    image: "assets/images/rushan.webp",
    bio: "Visionary developer focused on high-performance systems and architectural excellence.",
    links: { portfolio: "https://rushanhaque.online/", github: "#", linkedin: "#" }
  },
  {
    name: "Adeeba Fatima Zaidi",
    role: "UI/UX Strategist",
    image: "assets/images/adeeba.webp",
    bio: "Crafting intuitive digital experiences that balance aesthetics with functional precision.",
    links: { portfolio: "https://adeebazaidiportfolio.vercel.app/", github: "#", linkedin: "#" }
  },
  {
    name: "Saniya Mehdi",
    role: "Creative Director",
    image: "assets/images/saniya.webp",
    bio: "Leading the creative vision to ensure brand consistency and visual innovation.",
    links: { portfolio: "https://portfoliosaniyamehdi.vercel.app/", github: "#", linkedin: "#" }
  },
  {
    name: "Mohammad Adi",
    role: "Backend Architect",
    image: "assets/images/adi.webp",
    bio: "Designing robust, scalable server-side solutions for modern web applications.",
    links: { portfolio: "#", github: "#", linkedin: "#" }
  }
];

const testimonials = [
  { quote: "Atelys transformed our online presence completely. The attention to detail and understanding of our brand was exceptional.", name: "Danish Faiz", role: "CEO, Erfolg Living" },
  { quote: "Working with Atelys was an absolute pleasure. They delivered a fast, scalable app that our team loves. 10/10 would recommend.", name: "Laiba Masood", role: "Manager, SIAAM land transport & co" },
  { quote: "The tool we got built for us is very reliable and efficient. It saved us countless hours of manual work.", name: "MO Saud", role: "MD, AF International" }
];

// ── NAVBAR — scroll class + mobile menu ──────────────────

(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger.addEventListener('click', function () {
    const isActive = mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active', isActive);
    hamburger.setAttribute('aria-expanded', isActive);
    hamburger.setAttribute('aria-label', isActive ? 'Close navigation' : 'Open navigation');
    mobileMenu.setAttribute('aria-hidden', !isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.getElementById('mobileMenuClose').addEventListener('click', closeMobileMenu);

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });
})();

// ── REVEAL ON SCROLL (IntersectionObserver) ──────────────

(function initReveal() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();

// ── PORTFOLIO ────────────────────────────────────────────

(function renderPortfolio() {
  var grid = document.getElementById('portfolioGrid');
  var html = '';

  projects.forEach(function (project, idx) {
    var imageContent;
    if (project.isCTA) {
      imageContent = '<div class="project-cta-bg"><i class="fas fa-paper-plane"></i></div>';
    } else if (project.image) {
      imageContent = '<img src="' + project.image + '" alt="' + project.title + ' project preview" class="project-preview-img" loading="lazy" width="800" height="500" />';
    } else {
      imageContent = '<iframe src="' + project.url + '" class="project-iframe" title="' + project.title + ' website preview" loading="lazy" sandbox="allow-scripts allow-same-origin"></iframe>';
    }

    var impactHtml = project.isCTA ? '' : '<div class="port-impact"><strong>Impact:</strong> ' + project.result + '</div>';
    var btnHtml = project.isCTA 
      ? '<a href="#contact" class="port-btn-cta">Get in touch →</a>'
      : '<a href="' + project.url + '" target="_blank" rel="noopener" class="Btn port-btn">'
      + '<div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>'
      + '<div class="btn-text">Visit Site</div></a>';
 
    html += '<div class="port-card service-item' + (project.isCTA ? ' cta-card' : '') + '">'
      + '<div class="project-image-wrap">' + imageContent + '</div>'
      + '<div class="service-content-box">'
      + '<h4 class="h4 service-item-title">' + project.title + '</h4>'
      + '<p class="service-item-text">' + project.description + '</p>'
      + '<div class="port-footer-wrap">' + impactHtml + btnHtml + '</div>'
      + '</div></div>';
  });

  grid.innerHTML = html;
})();

// ── TEAM ─────────────────────────────────────────────────

(function renderTeam() {
  var grid = document.getElementById('teamGrid');
  var html = '';

  teamMembers.forEach(function (member, idx) {
    var bgStyle = member.image ? 'background-image: url(' + member.image + '); background-size: cover; background-position: center;' : '';
    html += '<div class="team-card" data-team-idx="' + idx + '" role="button" tabindex="0" aria-label="View profile for ' + member.name + '" style="' + bgStyle + '">'
      + '<div class="card-overlay"></div>'
      + '<div class="card-front">'
      + '<p class="title">' + member.name + '</p>'
      + '</div>'
      + '<div class="card-back">'
      + '<span class="view-profile-btn">View Profile</span>'
      + '</div>'
      + '</div>';
  });

  grid.innerHTML = html;

  // Attach click handlers to open portfolio directly
  grid.querySelectorAll('[data-team-idx]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      window.open(teamMembers[parseInt(card.dataset.teamIdx)].links.portfolio, '_blank');
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') window.open(teamMembers[parseInt(card.dataset.teamIdx)].links.portfolio, '_blank');
    });
  });
})();

// ── TEAM MODAL ───────────────────────────────────────────

function openTeamModal(member) {
  var modal = document.getElementById('teamModal');
  var avatar = document.getElementById('modalAvatar');
  var nameEl = document.getElementById('modalName');
  var bioEl = document.getElementById('modalBio');
  var skillsEl = document.getElementById('modalSkills');
  var linksEl = document.getElementById('modalLinks');

  // Avatar
  if (member.image) {
    avatar.innerHTML = '<img src="' + member.image + '" alt="' + member.name + '" loading="lazy" width="80" height="80" style="width:100%;height:100%;object-fit:cover" />';
  } else {
    avatar.textContent = member.imagePlaceholder;
  }

  nameEl.textContent = member.name;
  bioEl.textContent = member.bio;

  // Skills
  skillsEl.innerHTML = member.skills.map(function (skill) {
    return '<span style="background:var(--bg2);border:1px solid var(--border);padding:0.4rem 1rem;border-radius:100px;font-size:0.85rem;color:var(--text-l);font-weight:500">' + skill + '</span>';
  }).join('');

  // Links
  var linksHtml = '';
  if (member.links.portfolio) {
    linksHtml += '<a href="' + member.links.portfolio + '" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:0.6rem 1.2rem;font-size:0.85rem"><i class="fas fa-globe"></i> Portfolio</a>';
  }
  if (member.links.linkedin) {
    linksHtml += '<a href="' + member.links.linkedin + '" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:0.6rem 1.2rem;font-size:0.85rem"><i class="fab fa-linkedin-in"></i> LinkedIn</a>';
  }
  if (member.links.github) {
    linksHtml += '<a href="' + member.links.github + '" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:0.6rem 1.2rem;font-size:0.85rem"><i class="fab fa-github"></i> GitHub</a>';
  }
  linksEl.innerHTML = linksHtml;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeTeamModal() {
  document.getElementById('teamModal').style.display = 'none';
  document.body.style.overflow = '';
}

document.getElementById('modalCloseBtn').addEventListener('click', closeTeamModal);
document.getElementById('teamModal').addEventListener('click', function (e) {
  if (e.target === this) closeTeamModal();
});

// ── TESTIMONIALS CAROUSEL ────────────────────────────────

(function initTestimonials() {
  var track = document.getElementById('testimonialTrack');
  var dotsContainer = document.getElementById('carouselDots');
  var current = 0;
  var isDragging = false;
  var startX = 0;
  var touchEnd = null;
  var minSwipeDistance = 50;
  var autoTimer;

  // Render slides
  var slidesHtml = '';
  testimonials.forEach(function (t) {
    slidesHtml += '<div class="testimonial-slide"><div class="testimonial-card">'
      + '<div class="testimonial-quote">"</div>'
      + '<blockquote>' + t.quote + '</blockquote>'
      + '<div class="testimonial-stars">★ ★ ★ ★ ★</div>'
      + '<div class="testimonial-author"><h4>' + t.name + '</h4><p>' + t.role + '</p></div>'
      + '</div></div>';
  });
  track.innerHTML = slidesHtml;

  // Render dots
  var dotsHtml = '';
  testimonials.forEach(function (_, idx) {
    dotsHtml += '<button class="carousel-dot' + (idx === 0 ? ' active' : '') + '" data-dot="' + idx + '" aria-label="Go to slide ' + (idx + 1) + '"></button>';
  });
  dotsContainer.innerHTML = dotsHtml;

  function goTo(index) {
    current = index;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dotsContainer.querySelectorAll('.carousel-dot').forEach(function (dot, i) {
      dot.classList.toggle('active', i === current);
    });
    resetAutoPlay();
  }

  // Dot clicks
  dotsContainer.addEventListener('click', function (e) {
    var dot = e.target.closest('[data-dot]');
    if (dot) goTo(parseInt(dot.dataset.dot));
  });

  // Swipe / drag
  function handleStart(clientX) { touchEnd = null; startX = clientX; isDragging = true; }
  function handleMove(clientX) { if (isDragging) touchEnd = clientX; }
  function handleEnd() {
    if (!isDragging || !startX || !touchEnd) { isDragging = false; return; }
    var distance = startX - touchEnd;
    if (distance > minSwipeDistance) goTo((current + 1) % testimonials.length);
    else if (distance < -minSwipeDistance) goTo((current - 1 + testimonials.length) % testimonials.length);
    isDragging = false; startX = 0; touchEnd = null;
  }

  track.addEventListener('touchstart', function (e) { handleStart(e.targetTouches[0].clientX); }, { passive: true });
  track.addEventListener('touchmove', function (e) { handleMove(e.targetTouches[0].clientX); }, { passive: true });
  track.addEventListener('touchend', handleEnd);
  track.addEventListener('mousedown', function (e) { handleStart(e.clientX); track.style.cursor = 'grabbing'; });
  track.addEventListener('mousemove', function (e) { handleMove(e.clientX); });
  track.addEventListener('mouseup', function () { handleEnd(); track.style.cursor = 'grab'; });
  track.addEventListener('mouseleave', function () { if (isDragging) handleEnd(); track.style.cursor = 'grab'; });
  track.style.cursor = 'grab';

  // Auto-play
  function resetAutoPlay() {
    clearInterval(autoTimer);
    autoTimer = setInterval(function () {
      goTo((current + 1) % testimonials.length);
    }, 6000);
  }
  resetAutoPlay();
})();

// ── CONTACT FORM ─────────────────────────────────────────

(function initContactForm() {
  var form = document.getElementById('contactForm');
  var btn = document.getElementById('submitBtn');
  var errorDiv = document.getElementById('formError');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    errorDiv.style.display = 'none';

    var formData = new FormData(form);
    var name = (formData.get('name') || '').trim();
    var email = (formData.get('email') || '').trim();
    var message = (formData.get('message') || '').trim();

    // Validation
    if (name.length < 2) { showError('Please enter a valid name.'); return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { showError('Please enter a valid email address.'); return; }
    if (message.length < 10) { showError('Message must be at least 10 characters long.'); return; }

    btn.textContent = 'Sending Request...';
    btn.disabled = true;

    try {
      var res = await fetch('https://formspree.io/f/mzdokjqe', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      var data = await res.json();

      if (res.ok) {
        btn.textContent = 'Message Sent ✓';
        btn.style.background = 'var(--accent)';
        btn.style.color = '#fff';
        form.reset();
        setTimeout(function () {
          btn.textContent = 'Send Message';
          btn.disabled = false;
          btn.style.background = '';
          btn.style.color = '';
        }, 4000);
      } else {
        throw new Error(data.error || 'Submission failed. Please try again.');
      }
    } catch (err) {
      showError(err.message || 'Something went wrong. Please try again.');
      btn.textContent = 'Try Again';
      btn.style.background = '#991B1B';
      btn.style.color = '#fff';
      btn.disabled = false;
    }
  });

  function showError(msg) {
    errorDiv.innerHTML = '<i class="fas fa-exclamation-circle" style="margin-right:0.5rem"></i> ' + msg;
    errorDiv.style.display = 'block';
    btn.textContent = 'Try Again';
    btn.style.background = '#991B1B';
    btn.style.color = '#fff';
    btn.disabled = false;
  }
})();

// ── SCROLL PROGRESS BAR ─────────────────────────────────

(function initScrollProgress() {
  var bar = document.getElementById('scrollProgress');
  if (!bar) return;

  window.addEventListener('scroll', function () {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  }, { passive: true });
})();

// ── ANIMATED STAT COUNTERS ──────────────────────────────

(function initCounters() {
  var counters = document.querySelectorAll('.about-stat .number');
  if (!counters.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting || entry.target.dataset.counted) return;
      entry.target.dataset.counted = '1';

      var raw = entry.target.textContent.trim();
      var suffix = raw.replace(/[0-9.]/g, '');
      var end = parseFloat(raw);
      var dur = 1000;
      var t0 = null;

      (function tick(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var v = Math.round(end * (1 - Math.pow(1 - p, 3)));
        entry.target.textContent = v + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(performance.now());
    });
  }, { threshold: 0.5 });

  counters.forEach(function (c) { io.observe(c); });
})();
