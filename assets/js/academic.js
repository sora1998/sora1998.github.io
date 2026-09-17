(() => {
  'use strict';
  const archive = document.querySelector('#publication-archive');
  if (!archive) return;
  const papers = [...archive.querySelectorAll('.paper')];
  const groups = [...archive.querySelectorAll('.publication-year')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const search = document.querySelector('#paper-search');
  const count = document.querySelector('#paper-count');
  const empty = document.querySelector('#no-papers');
  let filter = 'all';
  const paperText = new Map(papers.map(paper => [paper, `${paper.textContent} ${paper.dataset.topic || ''}`.toLowerCase()]));
  function update() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    papers.forEach(paper => {
      const matches = (filter === 'all' || paper.dataset.category === filter) && paperText.get(paper).includes(query);
      paper.hidden = !matches;
      if (matches) visible += 1;
    });
    groups.forEach(group => { group.hidden = ![...group.querySelectorAll('.paper')].some(paper => !paper.hidden); });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    count.textContent = `${visible} ${visible === 1 ? 'paper' : 'papers'}`;
    empty.hidden = visible !== 0;
  }
  buttons.forEach(button => button.addEventListener('click', () => { filter = button.dataset.filter; update(); }));
  search.addEventListener('input', update);
  document.querySelectorAll('[data-enhancement]').forEach(element => { element.hidden = false; });
  update();
})();
