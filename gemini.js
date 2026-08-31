// Gemini CBG — client sécurisé côté navigateur.
//
// IMPORTANT : aucune clé API ne doit être placée dans ce fichier.
// Le navigateur appelle uniquement l'endpoint ci-dessous, qui pointe vers un
// petit serveur (Render, Supabase Edge Function, etc.) qui lit GEMINI_API_KEY
// depuis ses propres secrets serveur — jamais depuis ce fichier.
// Cette intégration temporaire est limitée à deux mois maximum.
//
// ↓↓↓ Remplace cette URL par celle de ton service Render une fois déployé,
// ex: 'https://cbg-gemini-proxy.onrender.com/api/ai'
const PROXY_ENDPOINT = 'https://cbg-gemini-proxy.onrender.com/api/ai';

export const GEMINI_CONFIG = Object.freeze({
  provider: 'Google Gemini',
  endpoint: PROXY_ENDPOINT,
  expiresAt: '2026-10-31T23:59:59Z',
  maxLifetimeDays: 60,
  storageTarget: 'Serveur proxy externe (clé jamais exposée au navigateur)',
});

const isExpired = () => Date.now() > Date.parse(GEMINI_CONFIG.expiresAt);

export const requestGeminiAnswer = async ({ question, context, system }) => {
  if (isExpired()) throw new Error('GEMINI_INTEGRATION_EXPIRED');
  if (!question?.trim()) throw new Error('GEMINI_EMPTY_QUESTION');

  let response;
  try {
    response = await fetch(GEMINI_CONFIG.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({
        question: question.trim(),
        context,
        system,
        expiresAt: GEMINI_CONFIG.expiresAt,
        maxLifetimeDays: GEMINI_CONFIG.maxLifetimeDays,
      }),
    });
  } catch (error) {
    throw new Error('GEMINI_PROXY_UNREACHABLE', { cause: error });
  }

  if (!response.ok) throw new Error(`GEMINI_PROXY_${response.status}`);

  let payload;
  try {
    payload = await response.json();
  } catch (error) {
    throw new Error('GEMINI_INVALID_RESPONSE', { cause: error });
  }

  const answer = payload?.answer || payload?.text || payload?.response;
  if (typeof answer !== 'string' || !answer.trim()) throw new Error('GEMINI_EMPTY_RESPONSE');
  return answer.trim();
};
