// ── Code tabs ────────────────────────────────────────────────
document.querySelectorAll('.code-tab-bar').forEach(bar => {
  const tabs   = bar.querySelectorAll('button');
  const panels = bar.parentElement.querySelectorAll('.code-tab-panel');

  tabs.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      panels.forEach((p, j) => p.classList.toggle('active', j === i));
    });
  });
});


// ── Active nav highlighting ───────────────────────────────────
const navLinks = document.querySelectorAll('.docs-nav a');
const sections = document.querySelectorAll('.doc-section');

if (navLinks.length && sections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    rootMargin: '0px 0px -70% 0px', // trigger when section enters top 30% of viewport
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}
