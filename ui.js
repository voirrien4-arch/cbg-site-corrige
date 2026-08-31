import { chain, commitments, locations, metrics, news, operations, projects, resources, timeline } from './content.js';
import { governance, leadership, officialDocuments, officialHistory, officialNews, officialOperations, officialProjects, recruitment, supportFunctions } from './official-data.js';
import { t as translate } from './i18n.js';

export const t = (key, values) => translate(key, values);

const make = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const sourceLink = (url, label = 'common.source') => {
  const link = make('button', 'source-link', t(label));
  link.type = 'button';
  link.title = t('sources.open');
  link.addEventListener('click', () => {
    const body = make('div', 'modal-content source-modal-content');
    body.append(make('p', 'modal-lead', t('sources.caption')));
    const tag = make('span', 'source-badge', t('sources.verified'));
    const code = make('code', 'source-url', url);
    body.append(tag, code, make('p', 'source-note', t('sources.note')));
    openModal(t('sources.title'), body);
  });
  return link;
};

export function renderMetrics(root) {
  if (!root) return;
  root.replaceChildren(...metrics.map((item) => {
    const card = make('article', 'metric-card reveal');
    const value = make('strong', 'metric-value', item.display);
    value.dataset.value = String(item.value);
    value.dataset.display = item.display;
    const unit = make('span', 'metric-unit', t(item.unit));
    const label = make('h3', '', t(item.label));
    const note = make('p', 'metric-note', t(item.note));
    const source = make('div', 'metric-foot');
    source.append(make('span', '', item.year), sourceLink(item.source));
    const number = make('div', 'metric-number');
    number.append(value, unit);
    card.append(number, label, note, source);
    return card;
  }));
}

export function renderChain(root, detailRoot) {
  if (!root || !detailRoot) return;
  root.replaceChildren(...chain.map((item, index) => {
    const button = make('button', `journey-step${index === 0 ? ' active' : ''}`);
    button.type = 'button';
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', String(index === 0));
    button.dataset.step = item.id;
    button.append(make('span', 'journey-step-no', item.number), make('span', 'journey-step-title', t(item.title)), make('span', 'journey-step-label', t(item.label)));
    button.addEventListener('click', () => selectChain(item.id, root, detailRoot));
    return button;
  }));
  selectChain(chain[0].id, root, detailRoot);
}

function selectChain(id, root, detailRoot) {
  const item = chain.find((entry) => entry.id === id) || chain[0];
  const position = Math.max(0, chain.findIndex((entry) => entry.id === item.id));
  root.querySelectorAll('.journey-step').forEach((step) => {
    const active = step.dataset.step === item.id;
    step.classList.toggle('active', active);
    step.setAttribute('aria-selected', String(active));
  });
  const fill = document.getElementById('chainProgress');
  if (fill) fill.style.width = `${(position / Math.max(chain.length - 1, 1)) * 100}%`;
  document.querySelectorAll('.progress-node').forEach((node, index) => node.classList.toggle('active', index === position));
  const figure = make('div', 'journey-image');
  const image = make('img', '', '');
  image.src = item.image;
  image.alt = `${item.title} — CBG`;
  image.loading = 'lazy';
  figure.append(image, make('span', 'image-credit', t('common.imageOnOfficial')));
  const copy = make('div', 'journey-copy');
  copy.append(make('span', 'detail-eyebrow', t(item.label)), make('h3', '', item.title), make('p', '', t(item.description)));
  const fact = make('div', 'journey-fact');
  fact.append(make('span', '', t('journey.publishedFact')), make('strong', '', t(item.fact)));
  const actions = make('div', 'detail-actions');
  actions.append(fact, sourceLink(item.source, 'common.readSource'));
  copy.append(actions);
  detailRoot.replaceChildren(figure, copy);
}

export function renderMap(root) {
  const card = document.getElementById('mapCard');
  if (!root || !card) return;
  const select = (id) => {
    const item = locations[id] || locations.mine;
    root.querySelectorAll('.map-pin').forEach((pin) => pin.classList.toggle('active', pin.dataset.location === id));
    card.replaceChildren(make('span', 'map-card-eyebrow', t('map.location')), make('h3', '', t(item.title)), make('p', '', t(item.copy)), make('strong', '', t(item.fact)), sourceLink(item.source, 'common.discover'));
  };
  root.querySelectorAll('.map-pin').forEach((pin) => pin.addEventListener('click', () => select(pin.dataset.location)));
  select('mine');
}

export function renderOperations(root) {
  if (!root) return;
  root.replaceChildren(...operations.map((item) => {
    const card = make('article', 'operation-card reveal');
    const image = make('img', '', '');
    image.src = item.image;
    image.alt = t(item.title);
    image.loading = 'lazy';
    const body = make('div', 'operation-body');
    body.append(make('span', 'card-index', item.number), make('h3', '', t(item.title)), make('p', '', t(item.copy)), sourceLink(item.source, 'common.discover'));
    card.append(image, make('div', 'card-shade'), body);
    return card;
  }));
}

export function renderTimeline(root) {
  if (!root) return;
  root.replaceChildren(...timeline.map((item, index) => {
    const row = make('article', `timeline-item reveal${index % 2 ? ' offset' : ''}`);
    row.append(make('div', 'timeline-year', item.year));
    const body = make('div', 'timeline-body');
    body.append(make('h3', '', t(item.title)), make('p', '', t(item.copy)), sourceLink(item.source, 'common.source'));
    row.append(make('span', 'timeline-dot'), body);
    return row;
  }));
}

export function renderProjects(root) {
  if (!root) return;
  root.replaceChildren(...projects.map((item) => {
    const card = make('article', 'project-card reveal');
    const image = make('img', '', '');
    image.src = item.image;
    image.alt = t(item.title);
    image.loading = 'lazy';
    const meta = make('div', 'project-meta');
    meta.append(make('span', '', t(item.status)), make('span', '', item.year));
    const body = make('div', 'project-body');
    body.append(make('h3', '', t(item.title)), make('p', '', t(item.copy)), sourceLink(item.source, 'common.readSource'));
    card.append(image, meta, body);
    return card;
  }));
}

export function renderCommitments(root) {
  if (!root) return;
  root.replaceChildren(...commitments.map((item) => {
    const card = make('article', 'commitment-card reveal');
    const image = make('img', '', '');
    image.src = item.image;
    image.alt = t(item.title);
    image.loading = 'lazy';
    const overlay = make('div', 'commitment-overlay');
    overlay.append(make('span', 'commit-icon', item.icon), make('h3', '', t(item.title)), make('p', '', t(item.copy)), sourceLink(item.source, 'common.readSource'));
    card.append(image, overlay);
    return card;
  }));
}

export function renderNews(root) {
  if (!root) return;
  root.replaceChildren(...news.map((item) => {
    const card = make('article', `news-card${item.featured ? ' featured' : ''} reveal`);
    const image = make('img', '', '');
    image.src = item.image;
    image.alt = t(item.title);
    image.loading = 'lazy';
    const body = make('div', 'news-body');
    const top = make('div', 'news-meta');
    top.append(make('span', '', t(item.category)), make('time', '', item.date));
    body.append(top, make('h3', '', t(item.title)), make('p', '', t(item.copy)), sourceLink(item.source, 'news.read'));
    card.append(image, body);
    return card;
  }));
}

export function renderResources(root) {
  if (!root) return;
  root.replaceChildren(...resources.map((item) => {
    const row = make('article', 'resource-row reveal');
    row.append(make('span', 'resource-type', t(item.type)), make('span', 'resource-year', item.year));
    const body = make('div', 'resource-body');
    body.append(make('h3', '', t(item.title)), make('p', '', t(item.copy)));
    row.append(body, sourceLink(item.source, 'resources.open'));
    return row;
  }));
}

let libraryState = { tab: 'projects', query: '' };
let officialLibraryPanel = null;

const openModal = (title, content) => {
  const modal = document.getElementById('contentModal');
  const body = document.getElementById('contentModalBody');
  if (!modal || !body) return;
  const heading = make('h2', '', title);
  heading.id = 'contentModalTitle';
  body.replaceChildren(heading, content);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.querySelector('.content-modal-close')?.focus();
};

const closeModal = () => {
  const modal = document.getElementById('contentModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

const addDetail = (container, label, value) => {
  const row = make('div', 'official-detail');
  row.append(make('span', '', label), make('strong', '', value));
  container.append(row);
};

const showProject = (item) => {
  const body = make('div', 'modal-content');
  addDetail(body, t('library.status'), item.status);
  addDetail(body, t('library.period'), item.year);
  const image = make('img', 'modal-image', '');
  image.src = item.image;
  image.alt = item.title;
  body.append(image, make('p', 'modal-lead', item.description));
  const list = make('ul', 'official-facts');
  item.facts.forEach((fact) => list.append(make('li', '', fact)));
  body.append(list, sourceLink(item.source, 'common.readSource'));
  openModal(item.title, body);
};

const showOperation = (item) => {
  const body = make('div', 'modal-content');
  addDetail(body, t('library.scope'), item.label);
  const image = make('img', 'modal-image', '');
  image.src = item.image;
  image.alt = item.title;
  body.append(image, make('p', 'modal-lead', item.description));
  const list = make('ul', 'official-facts');
  item.facts.forEach((fact) => list.append(make('li', '', fact)));
  body.append(list, sourceLink(item.source, 'common.readSource'));
  openModal(item.title, body);
};

const renderLibraryProjects = (panel, query) => {
  const items = officialProjects.filter((item) => `${item.title} ${item.status} ${item.description}`.toLowerCase().includes(query));
  panel.append(make('div', 'library-grid', ''));
  const grid = panel.lastElementChild;
  items.forEach((item) => {
    const card = make('article', 'official-card');
    const image = make('img', '', '');
    image.src = item.image;
    image.alt = item.title;
    image.loading = 'lazy';
    const content = make('div', 'official-card-body');
    content.append(make('span', 'official-card-meta', `${item.year} · ${item.status}`), make('h3', '', item.title), make('p', '', item.description));
    const button = make('button', 'text-button', t('library.openDetails'));
    button.type = 'button';
    button.addEventListener('click', () => showProject(item));
    content.append(button);
    card.append(image, content);
    grid.append(card);
  });
};

const renderLibraryOperations = (panel, query) => {
  const items = officialOperations.filter((item) => `${item.title} ${item.label} ${item.description}`.toLowerCase().includes(query));
  panel.append(make('div', 'library-grid operations-library'));
  const grid = panel.lastElementChild;
  items.forEach((item) => {
    const card = make('article', 'official-card operation-library-card');
    const image = make('img', '', '');
    image.src = item.image;
    image.alt = item.title;
    image.loading = 'lazy';
    const content = make('div', 'official-card-body');
    content.append(make('span', 'official-card-number', item.number), make('span', 'official-card-meta', item.label), make('h3', '', item.title), make('p', '', item.description));
    const button = make('button', 'text-button', t('library.openDetails'));
    button.type = 'button';
    button.addEventListener('click', () => showOperation(item));
    content.append(button);
    card.append(image, content);
    grid.append(card);
  });
  panel.append(make('h3', 'subsection-title', t('library.supportFunctions')));
  const supportGrid = make('div', 'support-grid');
  supportFunctions.filter((item) => `${item.title} ${item.items.join(' ')}`.toLowerCase().includes(query)).forEach((item) => {
    const card = make('article', 'support-card');
    card.append(make('span', 'official-card-meta', item.source), make('h3', '', item.title));
    const list = make('ul', 'support-list');
    item.items.forEach((entry) => list.append(make('li', '', entry)));
    card.append(list);
    supportGrid.append(card);
  });
  panel.append(supportGrid, sourceLink('https://cbg-guinee.com/no-operations/services-supports', 'common.readSource'));
};

const renderLibraryGovernance = (panel, query) => {
  const wrapper = make('div', 'governance-library');
  wrapper.append(make('p', 'ownership-copy', governance.ownership));
  const bodies = governance.bodies.filter(([title, copy]) => `${title} ${copy}`.toLowerCase().includes(query));
  const grid = make('div', 'governance-grid');
  bodies.forEach(([title, copy]) => {
    const card = make('article', 'governance-card');
    card.append(make('span', 'official-card-meta', 'Gouvernance CBG'), make('h3', '', title), make('p', '', copy));
    grid.append(card);
  });
  wrapper.append(grid, make('h3', 'subsection-title', t('library.managementTeam')));
  const team = make('div', 'leadership-grid');
  leadership.filter((person) => `${person.name} ${person.position}`.toLowerCase().includes(query)).forEach((person) => {
    const card = make('article', 'leader-card');
    card.append(make('strong', '', person.name), make('span', '', person.position));
    team.append(card);
  });
  wrapper.append(team, sourceLink(governance.source + 'notre-compagnie/gouvernance-actionnariat', 'common.readSource'));
  panel.append(wrapper);
};

const renderLibraryCareers = (panel, query) => {
  const wrapper = make('div', 'careers-library');
  wrapper.append(make('p', 'ownership-copy', recruitment.note));
  const steps = make('div', 'recruitment-steps');
  recruitment.steps.filter((step) => step.toLowerCase().includes(query)).forEach((step, index) => {
    const card = make('article', 'recruitment-step');
    card.append(make('span', '', String(index + 1).padStart(2, '0')), make('h3', '', step));
    steps.append(card);
  });
  wrapper.append(steps, make('h3', 'subsection-title', t('library.careerAreas')));
  const areas = make('div', 'career-area-list');
  recruitment.areas.filter((area) => area.toLowerCase().includes(query)).forEach((area) => areas.append(make('span', '', area)));
  wrapper.append(areas, sourceLink(recruitment.source, 'common.readSource'));
  panel.append(wrapper);
};

const renderLibraryDocuments = (panel, query) => {
  const items = officialDocuments.filter((item) => `${item.title} ${item.category} ${item.year}`.toLowerCase().includes(query));
  const groups = [...new Set(items.map((item) => item.category))];
  groups.forEach((group) => {
    const section = make('section', 'document-group');
    section.append(make('h3', '', group), make('span', 'document-group-count', t('library.documentsCount', { count: items.filter((item) => item.category === group).length })));
    const list = make('div', 'document-list');
    items.filter((item) => item.category === group).forEach((item) => {
      const row = make('article', 'document-row');
      const copy = make('div', 'document-copy');
      copy.append(make('span', 'official-card-meta', item.year), make('h4', '', item.title));
      const actions = make('div', 'document-actions');
      actions.append(sourceLink(item.page, 'library.view'), sourceLink(item.file, 'library.download'));
      row.append(copy, actions);
      list.append(row);
    });
    section.append(list);
    panel.append(section);
  });
};

const renderLibraryHistory = (panel, query) => {
  const list = make('div', 'official-history-list');
  officialHistory.filter((item) => `${item.date} ${item.title} ${item.copy}`.toLowerCase().includes(query)).forEach((item) => {
    const row = make('article', 'official-history-row');
    row.append(make('span', 'history-date', item.date));
    const copy = make('div', 'history-copy');
    copy.append(make('h3', '', item.title), make('p', '', item.copy), sourceLink(item.source, 'common.readSource'));
    row.append(copy);
    list.append(row);
  });
  panel.append(list);
};

const renderLibraryNews = (panel, query) => {
  const grid = make('div', 'library-grid news-library');
  officialNews.filter((item) => `${item.date} ${item.category} ${item.title}`.toLowerCase().includes(query)).forEach((item) => {
    const card = make('article', 'official-card news-library-card');
    const image = make('img', '', '');
    image.src = item.image;
    image.alt = item.title;
    image.loading = 'lazy';
    const body = make('div', 'official-card-body');
    body.append(make('span', 'official-card-meta', `${item.date} · ${item.category}`), make('h3', '', item.title), sourceLink(item.source, 'library.readArticle'));
    card.append(image, body);
    grid.append(card);
  });
  panel.append(grid);
};

const renderLibrary = (panel) => {
  if (!panel) return;
  panel.replaceChildren();
  const query = libraryState.query.trim().toLowerCase();
  if (libraryState.tab === 'projects') renderLibraryProjects(panel, query);
  if (libraryState.tab === 'operations') renderLibraryOperations(panel, query);
  if (libraryState.tab === 'governance') renderLibraryGovernance(panel, query);
  if (libraryState.tab === 'careers') renderLibraryCareers(panel, query);
  if (libraryState.tab === 'history') renderLibraryHistory(panel, query);
  if (libraryState.tab === 'news') renderLibraryNews(panel, query);
  if (libraryState.tab === 'documents') renderLibraryDocuments(panel, query);
  const count = panel.querySelectorAll('.official-card, .governance-card, .leader-card, .recruitment-step, .document-row').length;
  const countNode = document.getElementById('libraryCount');
  if (countNode) countNode.textContent = t('library.resultsCount', { count });
};

export const refreshOfficialLibrary = () => {
  if (officialLibraryPanel) renderLibrary(officialLibraryPanel);
};

export function initOfficialLibrary() {
  const panel = document.getElementById('officialLibraryPanel');
  const search = document.getElementById('librarySearch');
  if (!panel) return;
  officialLibraryPanel = panel;
  document.querySelectorAll('[data-library-tab]').forEach((button) => button.addEventListener('click', () => {
    libraryState.tab = button.dataset.libraryTab || 'projects';
    document.querySelectorAll('[data-library-tab]').forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    renderLibrary(panel);
  }));
  search?.addEventListener('input', () => {
    libraryState.query = search.value || '';
    renderLibrary(panel);
  });
  document.querySelectorAll('[data-modal-close]').forEach((node) => node.addEventListener('click', closeModal));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
  renderLibrary(panel);
}
