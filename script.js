const tabs = Array.from(document.querySelectorAll('.tab'));
const panels = Array.from(document.querySelectorAll('.tab-panel'));

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('aria-controls');

    tabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });

    panels.forEach((panel) => panel.classList.remove('active'));

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const targetPanel = document.getElementById(targetId);
    if (targetPanel) targetPanel.classList.add('active');
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
