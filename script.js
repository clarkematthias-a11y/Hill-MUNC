// HILLMUNC SITE SCRIPT
// Most content lives in data.js. This file fills repeatable sections automatically.

document.addEventListener('DOMContentLoaded', () => {
  const data = window.HILLMUNC;

  // Mobile navigation
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Active navigation link
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === 'index.html' && href === './')) link.classList.add('active');
  });

  const bind = (selector, value) => {
    document.querySelectorAll(selector).forEach(el => { el.textContent = value; });
  };

  bind('[data-conference-name]', data.conferenceName);
  bind('[data-full-name]', data.fullName);
  bind('[data-edition]', data.edition);
  bind('[data-school]', data.school);
  bind('[data-location]', data.location);
  bind('[data-date]', data.date);
  bind('[data-tagline]', data.tagline);
  bind('[data-email]', data.contact.email);
  bind('[data-instagram]', data.contact.instagram);
  bind('[data-address]', data.contact.address);

  document.querySelectorAll('[data-link]').forEach(el => {
    const key = el.getAttribute('data-link');
    if (data.links[key]) el.href = data.links[key];
  });

  const committeeTarget = document.querySelector('[data-committees]');
  if (committeeTarget) {
    committeeTarget.innerHTML = data.committees.map(c => `
      <article class="card committee-card">
        <div class="committee-meta">
          <span class="badge">${escapeHtml(c.type)}</span>
          ${c.crisis ? '<span class="badge">CRISIS</span>' : ''}
        </div>
        <h3>${escapeHtml(c.name)}</h3>
        <p>${escapeHtml(c.description)}</p>
        <div class="committee-info">
          <div><strong>Chair:</strong> ${escapeHtml(c.chair)}</div>
          <div><strong>Co-Chair:</strong> ${escapeHtml(c.coChair)}</div>
          <div><strong>School:</strong> ${escapeHtml(c.school)}</div>
        </div>
      </article>
    `).join('');
  }

  const boardTarget = document.querySelector('[data-board]');
  if (boardTarget) {
    boardTarget.innerHTML = data.board.map(person => `
      <article class="card board-card">
        <img src="${escapeAttr(person.image)}" alt="Photo placeholder for ${escapeAttr(person.name)}">
        <div class="board-body">
          <h3>${escapeHtml(person.name)}</h3>
          <div class="role">${escapeHtml(person.role)}</div>
          <p>${escapeHtml(person.bio)}</p>
        </div>
      </article>
    `).join('');
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  }
  function escapeAttr(value) { return escapeHtml(value); }
});
