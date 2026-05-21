// ═══════════════════════════════════════════════════════════════
// Tone Engine — 16 dimensions of voice modulation
// ═══════════════════════════════════════════════════════════════
//
// Normal AI has one dial: formal ↔ casual.
// The Tone Engine has 16. Each one independently tuned.
// The combination space is 10^16 unique voices.
// ═══════════════════════════════════════════════════════════════

const TONE_DIMENSIONS = {
  // 0.0 = left end, 1.0 = right end, 0.5 = neutral

  formality:     { left: 'Casual / street',        right: 'Formal / boardroom',      default: 0.5 },
  confidence:    { left: 'Tentative / hedging',     right: 'Absolute / commanding',   default: 0.7 },
  warmth:        { left: 'Cold / clinical',         right: 'Warm / personal',         default: 0.5 },
  complexity:    { left: 'Simple / plain',          right: 'Complex / sophisticated', default: 0.5 },
  pace:          { left: 'Slow / deliberate',       right: 'Fast / punchy',           default: 0.6 },
  authority:     { left: 'Peer / equal',            right: 'Expert / authority',      default: 0.6 },
  emotion:       { left: 'Logical / analytical',    right: 'Emotional / passionate',  default: 0.4 },
  directness:    { left: 'Indirect / suggestive',   right: 'Direct / blunt',          default: 0.7 },
  humor:         { left: 'Serious / grave',         right: 'Playful / witty',         default: 0.3 },
  urgency:       { left: 'Relaxed / no pressure',   right: 'Urgent / time-sensitive', default: 0.4 },
  exclusivity:   { left: 'Mass / everyone',         right: 'Elite / exclusive',       default: 0.5 },
  technicality:  { left: 'Non-technical / layperson', right: 'Deeply technical',      default: 0.5 },
  aspiration:    { left: 'Grounded / practical',    right: 'Aspirational / visionary', default: 0.5 },
  vulnerability: { left: 'Guarded / impenetrable',  right: 'Vulnerable / transparent', default: 0.3 },
  provocation:   { left: 'Safe / agreeable',        right: 'Provocative / challenging', default: 0.3 },
  storytelling:  { left: 'Factual / declarative',   right: 'Narrative / story-driven', default: 0.4 },
};

// ─── Pre-calibrated tone profiles per archetype ─────────────

const ARCHETYPE_TONES = {
  ruler: {
    formality: 0.8, confidence: 0.95, warmth: 0.3, complexity: 0.6,
    pace: 0.5, authority: 0.95, emotion: 0.2, directness: 0.9,
    humor: 0.1, urgency: 0.5, exclusivity: 0.8, technicality: 0.4,
    aspiration: 0.6, vulnerability: 0.05, provocation: 0.2, storytelling: 0.3,
  },
  sage: {
    formality: 0.7, confidence: 0.8, warmth: 0.4, complexity: 0.8,
    pace: 0.3, authority: 0.85, emotion: 0.2, directness: 0.6,
    humor: 0.15, urgency: 0.2, exclusivity: 0.6, technicality: 0.9,
    aspiration: 0.4, vulnerability: 0.2, provocation: 0.3, storytelling: 0.3,
  },
  hero: {
    formality: 0.5, confidence: 0.9, warmth: 0.5, complexity: 0.5,
    pace: 0.8, authority: 0.7, emotion: 0.6, directness: 0.95,
    humor: 0.2, urgency: 0.7, exclusivity: 0.5, technicality: 0.5,
    aspiration: 0.8, vulnerability: 0.15, provocation: 0.6, storytelling: 0.5,
  },
  creator: {
    formality: 0.4, confidence: 0.7, warmth: 0.6, complexity: 0.7,
    pace: 0.5, authority: 0.5, emotion: 0.7, directness: 0.5,
    humor: 0.4, urgency: 0.3, exclusivity: 0.7, technicality: 0.5,
    aspiration: 0.9, vulnerability: 0.5, provocation: 0.4, storytelling: 0.8,
  },
  explorer: {
    formality: 0.3, confidence: 0.7, warmth: 0.6, complexity: 0.4,
    pace: 0.8, authority: 0.4, emotion: 0.6, directness: 0.7,
    humor: 0.5, urgency: 0.5, exclusivity: 0.3, technicality: 0.4,
    aspiration: 0.8, vulnerability: 0.4, provocation: 0.5, storytelling: 0.7,
  },
  caregiver: {
    formality: 0.5, confidence: 0.6, warmth: 0.95, complexity: 0.3,
    pace: 0.4, authority: 0.4, emotion: 0.8, directness: 0.5,
    humor: 0.3, urgency: 0.3, exclusivity: 0.2, technicality: 0.2,
    aspiration: 0.5, vulnerability: 0.6, provocation: 0.1, storytelling: 0.7,
  },
  magician: {
    formality: 0.6, confidence: 0.85, warmth: 0.5, complexity: 0.7,
    pace: 0.6, authority: 0.7, emotion: 0.5, directness: 0.6,
    humor: 0.2, urgency: 0.5, exclusivity: 0.7, technicality: 0.6,
    aspiration: 0.95, vulnerability: 0.2, provocation: 0.5, storytelling: 0.6,
  },
  rebel: {
    formality: 0.15, confidence: 0.9, warmth: 0.4, complexity: 0.4,
    pace: 0.9, authority: 0.6, emotion: 0.7, directness: 0.95,
    humor: 0.5, urgency: 0.7, exclusivity: 0.5, technicality: 0.4,
    aspiration: 0.7, vulnerability: 0.3, provocation: 0.95, storytelling: 0.5,
  },
  lover: {
    formality: 0.5, confidence: 0.7, warmth: 0.9, complexity: 0.5,
    pace: 0.4, authority: 0.4, emotion: 0.9, directness: 0.5,
    humor: 0.3, urgency: 0.4, exclusivity: 0.85, technicality: 0.2,
    aspiration: 0.8, vulnerability: 0.6, provocation: 0.3, storytelling: 0.85,
  },
  jester: {
    formality: 0.1, confidence: 0.7, warmth: 0.7, complexity: 0.3,
    pace: 0.9, authority: 0.3, emotion: 0.6, directness: 0.8,
    humor: 0.95, urgency: 0.3, exclusivity: 0.2, technicality: 0.3,
    aspiration: 0.4, vulnerability: 0.5, provocation: 0.6, storytelling: 0.8,
  },
  everyperson: {
    formality: 0.3, confidence: 0.5, warmth: 0.8, complexity: 0.2,
    pace: 0.5, authority: 0.3, emotion: 0.5, directness: 0.7,
    humor: 0.4, urgency: 0.3, exclusivity: 0.1, technicality: 0.2,
    aspiration: 0.3, vulnerability: 0.5, provocation: 0.1, storytelling: 0.6,
  },
  innocent: {
    formality: 0.5, confidence: 0.6, warmth: 0.8, complexity: 0.2,
    pace: 0.4, authority: 0.5, emotion: 0.5, directness: 0.6,
    humor: 0.3, urgency: 0.2, exclusivity: 0.3, technicality: 0.2,
    aspiration: 0.6, vulnerability: 0.4, provocation: 0.05, storytelling: 0.5,
  },
};

/**
 * Build a tone profile from archetype + role-specific overrides
 */
function calibrateTone(archetype, shadow, spec = {}) {
  const archetypeKey = archetype?.name?.toLowerCase()?.replace(/^the\s+/, '') || 'hero';
  const base = ARCHETYPE_TONES[archetypeKey] || ARCHETYPE_TONES.hero;

  // Clone base
  const tone = { ...base };

  // Apply industry modifiers
  const industry = (spec.industry || '').toLowerCase();
  if (industry.match(/finance|banking|insurance|legal/)) {
    tone.formality = Math.min(1, tone.formality + 0.2);
    tone.humor = Math.max(0, tone.humor - 0.2);
    tone.provocation = Math.max(0, tone.provocation - 0.3);
    tone.vulnerability = Math.max(0, tone.vulnerability - 0.2);
  }
  if (industry.match(/startup|saas|tech/)) {
    tone.pace = Math.min(1, tone.pace + 0.15);
    tone.formality = Math.max(0, tone.formality - 0.15);
    tone.urgency = Math.min(1, tone.urgency + 0.1);
  }
  if (industry.match(/creative|design|fashion|art|media/)) {
    tone.emotion = Math.min(1, tone.emotion + 0.2);
    tone.storytelling = Math.min(1, tone.storytelling + 0.2);
    tone.aspiration = Math.min(1, tone.aspiration + 0.15);
  }
  if (industry.match(/health|medical|pharma/)) {
    tone.authority = Math.min(1, tone.authority + 0.15);
    tone.confidence = Math.min(1, tone.confidence + 0.1);
    tone.humor = Math.max(0, tone.humor - 0.3);
  }
  if (industry.match(/education|academic|university/)) {
    tone.complexity = Math.min(1, tone.complexity + 0.15);
    tone.technicality = Math.min(1, tone.technicality + 0.2);
    tone.storytelling = Math.min(1, tone.storytelling + 0.1);
  }

  // Apply manual overrides from spec
  if (spec.tone_overrides) {
    for (const [key, val] of Object.entries(spec.tone_overrides)) {
      if (key in tone) tone[key] = Math.max(0, Math.min(1, val));
    }
  }

  return tone;
}

/**
 * Convert tone profile to natural language system prompt instructions
 */
function toneToPrompt(tone) {
  const instructions = [];

  // Formality
  if (tone.formality > 0.7) instructions.push('Use formal, professional language. Full sentences. Proper grammar.');
  else if (tone.formality < 0.3) instructions.push('Use casual, conversational language. Contractions are fine. Write like talking to a friend.');
  else instructions.push('Use a balanced professional-but-approachable tone.');

  // Confidence
  if (tone.confidence > 0.8) instructions.push('Be assertive and definitive. Avoid hedging words like "maybe", "perhaps", "might". State things with conviction.');
  else if (tone.confidence < 0.3) instructions.push('Use measured, careful language. Acknowledge uncertainty where appropriate.');

  // Warmth
  if (tone.warmth > 0.7) instructions.push('Be warm and personable. Use "you" and "your" frequently. Show genuine care for the reader.');
  else if (tone.warmth < 0.3) instructions.push('Maintain professional distance. Focus on facts and analysis over personal connection.');

  // Pace
  if (tone.pace > 0.7) instructions.push('Write punchy, short sentences. One idea per sentence. Cut ruthlessly. No filler.');
  else if (tone.pace < 0.3) instructions.push('Allow sentences to breathe. Use longer, more considered phrasing. Build arguments carefully.');

  // Directness
  if (tone.directness > 0.8) instructions.push('Get to the point immediately. Lead with the conclusion. No burying the lede.');
  else if (tone.directness < 0.3) instructions.push('Build up to your point. Set context before conclusions. Guide the reader.');

  // Emotion
  if (tone.emotion > 0.7) instructions.push('Appeal to emotions. Use vivid language. Make the reader feel something.');
  else if (tone.emotion < 0.3) instructions.push('Keep it analytical and evidence-based. Logic over emotion. Data over anecdotes.');

  // Authority
  if (tone.authority > 0.8) instructions.push('Write as a recognized expert. State findings, don\'t suggest. Use definitive framing.');
  else if (tone.authority < 0.3) instructions.push('Write as a peer sharing discoveries. Use collaborative language like "we" and "let\'s explore".');

  // Humor
  if (tone.humor > 0.6) instructions.push('Include wit and humor where appropriate. Surprise the reader. Be clever, not cheesy.');
  else if (tone.humor < 0.15) instructions.push('Keep it serious and focused. No jokes or levity.');

  // Technicality
  if (tone.technicality > 0.7) instructions.push('Use technical terminology freely. Assume the reader has domain expertise. Include implementation details.');
  else if (tone.technicality < 0.3) instructions.push('Avoid jargon. Explain concepts in plain language. Use analogies for complex ideas.');

  // Urgency
  if (tone.urgency > 0.6) instructions.push('Create a sense of urgency. Emphasize why acting now matters. Time-sensitive framing.');
  else if (tone.urgency < 0.2) instructions.push('No pressure. Let the reader decide at their own pace.');

  // Exclusivity
  if (tone.exclusivity > 0.7) instructions.push('Frame as premium and exclusive. Not for everyone. For those who demand the best.');
  else if (tone.exclusivity < 0.3) instructions.push('Frame as accessible and inclusive. For everyone. Lower the barrier.');

  // Aspiration
  if (tone.aspiration > 0.7) instructions.push('Paint a vision of what\'s possible. Show the future state. Inspire ambition.');
  else if (tone.aspiration < 0.3) instructions.push('Stay grounded and practical. Focus on immediate, concrete benefits.');

  // Provocation
  if (tone.provocation > 0.6) instructions.push('Challenge assumptions. Be willing to be controversial. Make bold claims backed by evidence.');
  else if (tone.provocation < 0.15) instructions.push('Stay safe and agreeable. Validate existing thinking. Build on consensus.');

  // Storytelling
  if (tone.storytelling > 0.6) instructions.push('Use narrative structure. Open with a hook. Include examples as mini-stories. Build tension and resolution.');
  else if (tone.storytelling < 0.2) instructions.push('Use declarative structure. Facts, analysis, conclusions. Skip narrative framing.');

  // Vulnerability
  if (tone.vulnerability > 0.5) instructions.push('Be transparent about limitations. Acknowledge trade-offs. Show honesty builds trust.');

  return instructions.join('\n');
}

module.exports = { TONE_DIMENSIONS, ARCHETYPE_TONES, calibrateTone, toneToPrompt };
