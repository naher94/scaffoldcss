document.querySelectorAll('.code-tab-bar').forEach(bar => {
  const tabs = bar.querySelectorAll('button');
  const pres = bar.parentElement.querySelectorAll('pre');
  tabs.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      pres.forEach((p, j) => p.style.display = j === i ? '' : 'none');
    });
  });
});
