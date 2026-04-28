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
