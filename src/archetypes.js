// ═══════════════════════════════════════════════════════════════
// Jungian Archetypes — 12 universal patterns mapped to business
// ═══════════════════════════════════════════════════════════════
//
// Each archetype carries a core desire, fear, strategy, and shadow.
// The shadow is what they won't say. The forge reads both.
// ═══════════════════════════════════════════════════════════════

const ARCHETYPES = {

  ruler: {
    name: 'The Ruler',
    core_desire: 'Control and order',
    fear: 'Chaos and being overthrown',
    strategy: 'Exercise power through systems and structure',
    shadow: 'Tyranny — controlling others to mask their own insecurity about losing grip',
    gift: 'Responsibility and leadership',
    voice: 'Authoritative, decisive, structured. Short sentences. Commands, not suggestions.',
    trigger_words: ['control', 'governance', 'compliance', 'oversight', 'authority', 'standard'],
    repels: ['uncertainty', 'ambiguity', 'experimentation', 'disruption'],
    sells_with: 'Certainty. Show them the system works. Show them they stay in control.',
    content_frame: 'Position as the definitive standard. Use data as authority. Frame competitors as chaotic.',
    roles: ['CEO', 'CFO', 'COO', 'Board Director', 'Managing Partner', 'Head of Compliance'],
  },

  sage: {
    name: 'The Sage',
    core_desire: 'Truth and understanding',
    fear: 'Being misled or ignorant',
    strategy: 'Seek information, knowledge, and reflection',
    shadow: 'Dogmatism — using knowledge as a weapon, analysis paralysis',
    gift: 'Wisdom and intelligence',
    voice: 'Analytical, measured, evidence-based. Citations matter. Nuance over simplification.',
    trigger_words: ['research', 'evidence', 'data', 'methodology', 'framework', 'analysis'],
    repels: ['hype', 'unsubstantiated claims', 'oversimplification', 'buzzwords'],
    sells_with: 'Depth. Give them the methodology. Show the research. Let them conclude.',
    content_frame: 'Lead with evidence. Include methodology sections. Cite sources. Show confidence intervals.',
    roles: ['CTO', 'Data Scientist', 'Research Director', 'Principal Engineer', 'Analyst', 'Academic'],
  },

  hero: {
    name: 'The Hero',
    core_desire: 'Prove worth through mastery and courage',
    fear: 'Weakness and vulnerability',
    strategy: 'Become as strong and competent as possible',
    shadow: 'Arrogance — needing to always be the savior, burnout from never resting',
    gift: 'Competence and courage',
    voice: 'Bold, direct, action-oriented. Challenge them. Respect their competence.',
    trigger_words: ['challenge', 'achieve', 'conquer', 'overcome', 'master', 'win'],
    repels: ['passivity', 'hand-holding', 'basic explanations', 'softness'],
    sells_with: 'The challenge. Frame it as a worthy battle. Show the mountain, then the tools to climb it.',
    content_frame: 'Lead with the problem as a worthy adversary. Position the product as the weapon. Show wins.',
    roles: ['Founder', 'VP Engineering', 'Growth Lead', 'Sales Director', 'Startup CTO'],
  },

  creator: {
    name: 'The Creator',
    core_desire: 'Create something of enduring value',
    fear: 'Mediocrity and inauthenticity',
    strategy: 'Develop artistic control and skill',
    shadow: 'Perfectionism — nothing is ever good enough, paralysis before shipping',
    gift: 'Imagination and innovation',
    voice: 'Inspired, visionary, aesthetic-aware. Appreciate craft. Never generic.',
    trigger_words: ['craft', 'design', 'build', 'create', 'vision', 'elegant', 'beautiful'],
    repels: ['cookie-cutter', 'template', 'one-size-fits-all', 'generic', 'mass-produced'],
    sells_with: 'Possibility. Show what they can build. Give them the canvas, not the paint-by-numbers.',
    content_frame: 'Show the craft. Use visual language. Frame features as creative tools. Show unique outputs.',
    roles: ['Designer', 'Creative Director', 'Brand Strategist', 'Product Designer', 'UX Lead', 'Indie Maker'],
  },

  explorer: {
    name: 'The Explorer',
    core_desire: 'Freedom to discover and experience',
    fear: 'Being trapped, conformity, inner emptiness',
    strategy: 'Journey, seek new experiences, avoid boredom',
    shadow: 'Aimlessness — perpetual wandering without commitment, shiny object syndrome',
    gift: 'Autonomy and ambition',
    voice: 'Energetic, curious, informal. Question assumptions. Celebrate the unconventional.',
    trigger_words: ['discover', 'explore', 'new', 'first', 'frontier', 'freedom', 'pioneer'],
    repels: ['restrictions', 'legacy', 'bureaucracy', 'lock-in', 'contracts'],
    sells_with: 'The frontier. Show them what nobody else has seen yet. Make it feel like discovery.',
    content_frame: 'Lead with novelty. Frame as unexplored territory. Show what others are missing.',
    roles: ['Startup Founder', 'Innovation Lead', 'Product Manager', 'Developer Advocate', 'Indie Hacker'],
  },

  caregiver: {
    name: 'The Caregiver',
    core_desire: 'Protect and care for others',
    fear: 'Selfishness and ingratitude',
    strategy: 'Do things for others, anticipate needs',
    shadow: 'Martyrdom — giving until depleted, enabling dependency, guilt as leverage',
    gift: 'Compassion and generosity',
    voice: 'Warm, supportive, empathetic. Focus on who it helps. People over metrics.',
    trigger_words: ['support', 'help', 'team', 'users', 'community', 'care', 'protect'],
    repels: ['cold metrics', 'pure ROI language', 'impersonal', 'aggressive sales'],
    sells_with: 'Impact. Show the people it helps. Make it about their team, their users, their community.',
    content_frame: 'Lead with human impact. Use testimonials. Show the people behind the numbers.',
    roles: ['People Manager', 'Customer Success', 'HR Director', 'Community Manager', 'Support Lead'],
  },

  magician: {
    name: 'The Magician',
    core_desire: 'Understand the fundamental laws and make transformation happen',
    fear: 'Unintended negative consequences',
    strategy: 'Develop a vision and live it',
    shadow: 'Manipulation — using knowledge of systems to control others for selfish ends',
    gift: 'Finding win-win solutions, catalyzing change',
    voice: 'Transformative, visionary, systemic-thinking. Connect dots others miss.',
    trigger_words: ['transform', 'unlock', 'catalyze', 'leverage', 'paradigm', 'system'],
    repels: ['incremental', 'minor improvement', 'tweak', 'small change'],
    sells_with: 'Transformation. Show the before/after. Make the shift feel inevitable and magical.',
    content_frame: 'Frame as transformation, not feature. Show the paradigm shift. Before/after contrast.',
    roles: ['Transformation Officer', 'Strategy Consultant', 'Solutions Architect', 'VP Strategy'],
  },

  rebel: {
    name: 'The Rebel',
    core_desire: 'Revolution — overturn what isn\'t working',
    fear: 'Being powerless or ineffectual',
    strategy: 'Disrupt, destroy, or shock',
    shadow: 'Self-destruction — rebellion without purpose, chaos for its own sake',
    gift: 'Radical freedom and liberation',
    voice: 'Provocative, unconventional, anti-establishment. Challenge the status quo hard.',
    trigger_words: ['disrupt', 'break', 'rebel', 'against', 'refuse', 'revolution', 'kill'],
    repels: ['conventional', 'traditional', 'industry-standard', 'best practices', 'compliance'],
    sells_with: 'Disruption. Show them what\'s broken. Make them angry about the status quo. Then arm them.',
    content_frame: 'Open with what\'s broken. Name the enemy. Position as the weapon against it.',
    roles: ['Disruptive Founder', 'Growth Hacker', 'Challenger Brand CMO', 'DevRel', 'Indie Builder'],
  },

  lover: {
    name: 'The Lover',
    core_desire: 'Intimacy, experience, connection',
    fear: 'Being alone, unwanted, unlovable',
    strategy: 'Become more attractive — physically, emotionally, experientially',
    shadow: 'Obsession — losing self in pursuit of connection, people-pleasing at cost of truth',
    gift: 'Passion, gratitude, appreciation, commitment',
    voice: 'Passionate, sensory, experiential. Make them feel something. Beauty matters.',
    trigger_words: ['experience', 'beautiful', 'premium', 'exclusive', 'feel', 'delight'],
    repels: ['utilitarian', 'bland', 'functional-only', 'ugly', 'commoditized'],
    sells_with: 'Experience. Make the product feel desirable, not just useful. Appeal to aesthetics.',
    content_frame: 'Lead with experience. Use sensory language. Make it feel premium and desirable.',
    roles: ['Brand Manager', 'Luxury Brand Director', 'Experience Designer', 'Marketing VP'],
  },

  jester: {
    name: 'The Jester',
    core_desire: 'To live in the moment with full enjoyment',
    fear: 'Being bored or boring others',
    strategy: 'Play, make jokes, be funny, lighten up',
    shadow: 'Cruelty — using humor to deflect, avoiding depth, mocking what matters',
    gift: 'Joy and connection through laughter',
    voice: 'Playful, witty, irreverent. Break tension. Surprise them. Make them laugh.',
    trigger_words: ['fun', 'easy', 'play', 'simple', 'enjoy', 'light', 'fast'],
    repels: ['dry', 'corporate-speak', 'heavy', 'complicated', 'formal'],
    sells_with: 'Ease. Make it fun. Show how absurdly easy it is. Use humor to disarm objections.',
    content_frame: 'Lead with a surprising hook. Use conversational tone. Keep it light but land the point.',
    roles: ['Social Media Manager', 'Content Creator', 'Startup Marketer', 'Community Lead'],
  },

  everyperson: {
    name: 'The Everyperson',
    core_desire: 'Belonging and connection',
    fear: 'Being left out or standing out',
    strategy: 'Develop ordinary solid virtues, be real, blend in',
    shadow: 'The mob — losing individual identity, becoming a victim, manipulation through belonging',
    gift: 'Realism, empathy, lack of pretense',
    voice: 'Down-to-earth, honest, relatable. No jargon. Plain language. Real examples.',
    trigger_words: ['simple', 'practical', 'real', 'honest', 'works', 'affordable', 'everyone'],
    repels: ['elitist', 'complex', 'expensive', 'exclusive', 'enterprise-only'],
    sells_with: 'Relatability. Show real people using it. Remove intimidation. Make entry effortless.',
    content_frame: 'Use plain language. Show real use cases. Emphasize accessibility and fairness.',
    roles: ['Small Business Owner', 'Freelancer', 'Junior Developer', 'Operations Manager', 'Team Lead'],
  },

  innocent: {
    name: 'The Innocent',
    core_desire: 'Safety and happiness',
    fear: 'Doing something wrong or bad',
    strategy: 'Do things right, be optimistic, see the good',
    shadow: 'Denial — refusing to see problems, toxic positivity, naivety exploited by others',
    gift: 'Faith, optimism, simplicity',
    voice: 'Optimistic, clear, reassuring. Remove anxiety. Make it feel safe to start.',
    trigger_words: ['safe', 'simple', 'easy', 'trusted', 'proven', 'reliable', 'guarantee'],
    repels: ['risk', 'complexity', 'uncertainty', 'experimental', 'bleeding-edge'],
    sells_with: 'Safety. Guarantee it works. Show social proof. Remove all risk. Free tier. No commitment.',
    content_frame: 'Lead with reassurance. Show testimonials. Emphasize guarantees and proven track record.',
    roles: ['Risk-averse Buyer', 'Compliance Officer', 'Traditional Business Owner', 'Procurement'],
  },
};

/**
 * Detect archetype from role/context
 * Returns primary + secondary archetype
 */
function detectArchetype(spec) {
  const scores = {};
  const text = `${spec.role || ''} ${spec.industry || ''} ${spec.goals || ''} ${spec.personality || ''} ${spec.context || ''}`.toLowerCase();

  for (const [key, arch] of Object.entries(ARCHETYPES)) {
    let score = 0;

    // Role match
    if (spec.role && arch.roles.some(r => spec.role.toLowerCase().includes(r.toLowerCase()))) {
      score += 50;
    }

    // Trigger word match
    for (const trigger of arch.trigger_words) {
      if (text.includes(trigger)) score += 10;
    }

    // Repels match (negative — if spec mentions these, this archetype is less likely)
    for (const repel of arch.repels) {
      if (text.includes(repel)) score -= 5;
    }

    scores[key] = score;
  }

  // Sort by score
  const ranked = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .filter(([, score]) => score > 0);

  return {
    primary: ranked[0] ? ARCHETYPES[ranked[0][0]] : ARCHETYPES.hero,
    secondary: ranked[1] ? ARCHETYPES[ranked[1][0]] : ARCHETYPES.sage,
    scores,
    all_ranked: ranked.map(([k, s]) => ({ archetype: k, score: s })),
  };
}

module.exports = { ARCHETYPES, detectArchetype };
