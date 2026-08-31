import { knowledgeBase } from './content.js';
import { requestGeminiAnswer } from './gemini.js';
import { t } from './ui.js';

const FALLBACK = 'Je ne dispose actuellement d\'aucune information officielle vérifiée sur ce sujet.';
const BASE_RULES = `Tu es CBG AI, un assistant IA documentaire. Tu ne prétends jamais être humain et tu ne représentes pas officiellement la CBG. Réponds dans la langue active de l'interface, de façon claire et concise. Utilise uniquement le CONTEXTE VÉRIFIÉ fourni. N'invente jamais un chiffre, un nom, une fonction, une date, une adresse, un statut de projet ou une offre d'emploi. Si la réponse n'est pas explicitement dans le contexte, réponds exactement : "${FALLBACK}". Cite la source URL ou le titre de la source lorsque le contexte en fournit une. Pour toute information susceptible d'évoluer, rappelle l'année ou la date de la source.`;

const normalize = (value) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const relevantKnowledge = (question) => {
  const words = normalize(question).split(/\W+/).filter((word) => word.length > 3);
  return knowledgeBase.filter((item) => item.verified).map((item) => {
    const haystack = normalize(`${item.title} ${item.content} ${item.category}`);
    const score = words.reduce((total, word) => total + (haystack.includes(word) ? 1 : 0), 0);
    return { item, score };
  }).sort((a, b) => b.score - a.score).slice(0, 4).map(({ item }) => item);
};

let updateAssistantLanguage = () => {};
export const refreshAssistant = () => updateAssistantLanguage();

const requestAnswer = async (question, contextText) => requestGeminiAnswer({
  question,
  context: contextText,
  system: `${BASE_RULES}\nLangue active : ${document.documentElement.lang || 'fr'}.`,
});

export function initAssistant() {
  const open = document.getElementById('aiOpen');
  const close = document.getElementById('aiClose');
  const panel = document.getElementById('aiPanel');
  const form = document.getElementById('aiForm');
  const input = document.getElementById('aiInput');
  const messages = document.getElementById('aiMessages');
  const suggestions = document.getElementById('aiSuggestions');
  if (!open || !close || !panel || !form || !input || !messages) return;

  const setOpen = (value) => {
    panel.classList.toggle('open', value);
    panel.setAttribute('aria-hidden', String(!value));
    open.setAttribute('aria-expanded', String(value));
    document.body.classList.toggle('ai-open', value);
    if (value) window.setTimeout(() => input.focus(), 80);
  };
  const addMessage = (text, role) => {
    const bubble = document.createElement('div');
    bubble.className = `message ${role}`;
    bubble.textContent = text;
    messages.append(bubble);
    messages.scrollTop = messages.scrollHeight;
    return bubble;
  };
  const ask = async (question) => {
    if (!question) return;
    addMessage(question, 'user');
    const pending = addMessage(t('assistant.thinking'), 'assistant');
    const context = relevantKnowledge(question);
    const contextText = context.length ? context.map((item) => `- ${item.title}: ${item.content} Source: ${item.source}`).join('\n') : 'Aucun élément vérifié pertinent trouvé.';
    try {
      pending.textContent = await requestAnswer(question, contextText);
    } catch (error) {
      pending.textContent = t('assistant.error');
    }
    messages.scrollTop = messages.scrollHeight;
  };

  const welcome = addMessage(t('assistant.welcome'), 'assistant');
  updateAssistantLanguage = () => { welcome.textContent = t('assistant.welcome'); };
  open.addEventListener('click', () => setOpen(true));
  close.addEventListener('click', () => setOpen(false));
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const question = input.value.trim();
    input.value = '';
    await ask(question);
  });
  suggestions?.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => ask(button.dataset.question || '')));
}
