// ═══════════════════════════════════════════════════════════════
// trilogy-forge — The Psychological Build Engine
// ═══════════════════════════════════════════════════════════════
//
// Client spec in → elite-calibrated AI config out.
//
// What it reads that normal AI can't:
//   - Jungian archetype (which of 12 universal patterns is this buyer?)
//   - Freudian shadow (what they don't say: Id/Ego/Superego layers)
//   - 16-dimension tone (not just formal/casual — 16 independent dials)
//   - Sales psychology (SPIN, Challenger, PAS, AIDA + Cialdini triggers)
//
// ═══════════════════════════════════════════════════════════════

const { Forge } = require('./src/forge');
const { ARCHETYPES, detectArchetype } = require('./src/archetypes');
const { SHADOW_PROFILES, analyzeShadow } = require('./src/shadow');
const { TONE_DIMENSIONS, ARCHETYPE_TONES, calibrateTone, toneToPrompt } = require('./src/tone');
const { SALES_FRAMEWORKS, selectFrameworks } = require('./src/sales');

module.exports = {
  Forge,
  ARCHETYPES,
  SHADOW_PROFILES,
  TONE_DIMENSIONS,
  ARCHETYPE_TONES,
  SALES_FRAMEWORKS,
  detectArchetype,
  analyzeShadow,
  calibrateTone,
  toneToPrompt,
  selectFrameworks,
};
