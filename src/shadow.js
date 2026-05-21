// ═══════════════════════════════════════════════════════════════
// Shadow Engine — Freudian depth psychology for client builds
// ═══════════════════════════════════════════════════════════════
//
// Normal AI reads what the client says.
// The Shadow Engine reads what they DON'T say.
//
// Three Freudian layers:
//   Id      — what they secretly want (desire, fear, primal)
//   Ego     — what they say they want (rational, stated needs)
//   Superego — what they think they should want (duty, image)
//
// The shadow is the gap between these three.
// Elite content speaks to all three simultaneously.
// ═══════════════════════════════════════════════════════════════

const SHADOW_PROFILES = {

  // ─── C-SUITE ─────────────────────────────────────────────

  ceo: {
    role: 'CEO / Founder',
    id: {
      desire: 'Legacy. To be remembered as the one who built something that mattered.',
      fear: 'Irrelevance. Being replaced. The company outgrowing them.',
      primal: 'Control — they started this thing and need to feel it\'s still theirs.',
    },
    ego: {
      stated: 'Growth, market share, revenue targets, strategic positioning.',
      rational: 'They want metrics they can present to the board.',
      language: 'ROI, TAM, competitive moat, scalability, market position.',
    },
    superego: {
      duty: 'Responsible stewardship. Protecting employees, shareholders, customers.',
      image: 'Visionary leader who makes bold but calculated moves.',
      pressure: 'Board expectations, investor relations, public perception.',
    },
    shadow_gap: 'They say they want data-driven decisions, but they actually want validation that their instinct is right.',
    content_strategy: {
      speak_to_id: 'Frame as legacy-building. "This is how the companies that last are built."',
      speak_to_ego: 'Show clear ROI metrics, competitive advantage data, market positioning.',
      speak_to_superego: 'Frame as responsible innovation. Show risk mitigation alongside opportunity.',
      hidden_objection: '"Will this make me look smart or foolish to my board?"',
      overcome_with: 'Show peer adoption. Other CEOs already use this. Social proof at their level.',
    },
  },

  cto: {
    role: 'CTO / VP Engineering',
    id: {
      desire: 'Elegance. Building systems so clean they feel like art.',
      fear: 'Technical debt they can\'t escape. Being stuck with bad architecture forever.',
      primal: 'Craft — they need to feel the technology is genuinely good, not just marketed well.',
    },
    ego: {
      stated: 'Reliability, scalability, developer experience, integration simplicity.',
      rational: 'Will this work at scale? Is the API well-designed? What\'s the failure mode?',
      language: 'Architecture, latency, throughput, DX, type safety, documentation.',
    },
    superego: {
      duty: 'Protecting the team from bad tooling decisions. Being the technical gatekeeper.',
      image: 'The one who makes sound technical judgments that the team trusts.',
      pressure: 'Engineering team opinions, tech debt backlog, CEO pushing for speed.',
    },
    shadow_gap: 'They say they want enterprise reliability, but they secretly want something that excites their engineering soul.',
    content_strategy: {
      speak_to_id: 'Show beautiful API design. Clean code examples. Elegant abstractions.',
      speak_to_ego: 'Architecture diagrams, benchmarks, uptime guarantees, TypeScript support.',
      speak_to_superego: 'Show it will make their team more productive. They look good for choosing it.',
      hidden_objection: '"Is this actually good engineering or just good marketing?"',
      overcome_with: 'Open source the core. Show the internals. Let them read the code. Transparency.',
    },
  },

  cmo: {
    role: 'CMO / Marketing VP',
    id: {
      desire: 'To create something people actually talk about. Virality. Cultural relevance.',
      fear: 'Being boring. Running campaigns nobody remembers. Becoming background noise.',
      primal: 'Recognition — they need the creative wins, not just the metrics.',
    },
    ego: {
      stated: 'Brand awareness, lead generation, conversion rates, content velocity.',
      rational: 'Show me the funnel impact. Attribution. Pipeline contribution.',
      language: 'Brand, engagement, CAC, LTV, pipeline, attribution, content velocity.',
    },
    superego: {
      duty: 'Protecting brand integrity. Maintaining consistent voice. Not selling out.',
      image: 'Strategic thinker who blends creativity with commercial results.',
      pressure: 'CEO wants leads, creative team wants freedom, brand needs consistency.',
    },
    shadow_gap: 'They say they want measurable ROI, but they secretly crave creative recognition from peers.',
    content_strategy: {
      speak_to_id: 'Show remarkable creative output. Make them imagine their competitors being jealous.',
      speak_to_ego: 'Attribution data, conversion lift, content performance metrics.',
      speak_to_superego: 'Show brand consistency controls. Tone engine. Voice guidelines enforcement.',
      hidden_objection: '"Will this make our brand sound generic or remarkable?"',
      overcome_with: 'Show brand voice cloning. Show it sounds like THEM, not like AI.',
    },
  },

  cfo: {
    role: 'CFO / Finance Director',
    id: {
      desire: 'Certainty. Knowing the numbers are right and the risk is managed.',
      fear: 'A financial mistake that costs their reputation. Fraud they didn\'t catch.',
      primal: 'Safety — they need to feel the ground is solid beneath them.',
    },
    ego: {
      stated: 'Cost reduction, efficiency gains, compliance, audit trail.',
      rational: 'Total cost of ownership. Time to ROI. Compliance certification.',
      language: 'TCO, ROI, compliance, audit, risk, margin, efficiency, OPEX vs CAPEX.',
    },
    superego: {
      duty: 'Fiduciary responsibility. Protecting shareholder value. Regulatory compliance.',
      image: 'The responsible guardian of the company\'s financial health.',
      pressure: 'Board scrutiny, regulatory requirements, CEO wanting faster spend.',
    },
    shadow_gap: 'They say they want innovation, but they actually want to avoid blame if something goes wrong.',
    content_strategy: {
      speak_to_id: 'Show risk reduction first, opportunity second. Make them feel safe.',
      speak_to_ego: 'Clear pricing, TCO calculator, ROI timeline, comparison with current costs.',
      speak_to_superego: 'Compliance certifications. Audit logs. Data residency. SOC 2.',
      hidden_objection: '"If this fails, will I be the one who signed off on it?"',
      overcome_with: 'Free tier to prove value before commitment. No-risk pilot. Cancel anytime.',
    },
  },

  // ─── BUILDERS ────────────────────────────────────────────

  developer: {
    role: 'Developer / Engineer',
    id: {
      desire: 'Flow state. Building something that actually works and feels good.',
      fear: 'Wasting time on bad tools. Getting stuck debugging someone else\'s broken API.',
      primal: 'Craft — they want tools that respect their intelligence.',
    },
    ego: {
      stated: 'Good docs, clean API, fast integration, strong typing, few dependencies.',
      rational: 'How fast can I get this working? What\'s the error handling like?',
      language: 'API, SDK, types, docs, examples, latency, rate limits, errors.',
    },
    superego: {
      duty: 'Writing good code. Not introducing technical debt. Making the right tool choice.',
      image: 'The developer who picks the right tools and ships fast.',
      pressure: 'Deadlines, code review standards, team conventions.',
    },
    shadow_gap: 'They say they want comprehensive docs, but they actually want to copy-paste one example and have it work.',
    content_strategy: {
      speak_to_id: 'Show the 5-line integration. Make them feel the flow.',
      speak_to_ego: 'TypeScript types, error handling patterns, rate limit docs.',
      speak_to_superego: 'Show it\'s well-maintained. Active GitHub. Semantic versioning.',
      hidden_objection: '"Will this break at 3am and page me?"',
      overcome_with: 'Show uptime stats. Error handling built in. Retries automatic.',
    },
  },

  founder: {
    role: 'Startup Founder',
    id: {
      desire: 'Proving everyone wrong. Building the thing nobody thought would work.',
      fear: 'Running out of runway. Being another failed startup statistic.',
      primal: 'Survival — every dollar and every hour matters.',
    },
    ego: {
      stated: 'Speed to market, cost efficiency, competitive differentiation.',
      rational: 'Can I ship this week? How much does it cost? Does it scale?',
      language: 'Ship, MVP, iterate, runway, burn rate, traction, PMF.',
    },
    superego: {
      duty: 'Building something valuable. Not wasting investor money. Treating users right.',
      image: 'The scrappy founder who outsmarts bigger competitors with better tools.',
      pressure: 'Investor expectations, competitor moves, user demands, personal doubt.',
    },
    shadow_gap: 'They say they want enterprise features, but they actually need to ship something that works by Friday.',
    content_strategy: {
      speak_to_id: 'Show speed. "Ship in 5 minutes." Make them feel like they have an unfair advantage.',
      speak_to_ego: 'Free tier, simple pricing, scales with them, no lock-in.',
      speak_to_superego: 'Show other startups using it. Y Combinator-style social proof.',
      hidden_objection: '"Can I actually afford this and will it still work when I 10x?"',
      overcome_with: 'Free tier + usage-based pricing. Show the growth path.',
    },
  },

  sales_rep: {
    role: 'Sales / Account Executive',
    id: {
      desire: 'Winning. Closing the deal. Being the top performer.',
      fear: 'Losing the deal to a competitor. Missing quota. Being average.',
      primal: 'Competition — they need to feel like they have an edge others don\'t.',
    },
    ego: {
      stated: 'Better content for prospects, faster follow-ups, personalized outreach.',
      rational: 'Will this help me close more deals? Can I use it right now?',
      language: 'Pipeline, close rate, demo, follow-up, prospect, qualification, objection handling.',
    },
    superego: {
      duty: 'Serving the customer\'s actual needs. Not being pushy. Building real relationships.',
      image: 'The trusted advisor who wins because they genuinely help.',
      pressure: 'Quota pressure, manager expectations, competitor threats, deal timelines.',
    },
    shadow_gap: 'They say they want to build relationships, but they actually want the shortcut that gets them to President\'s Club.',
    content_strategy: {
      speak_to_id: 'Show competitive advantage. "Your competitors are sending generic emails. You won\'t."',
      speak_to_ego: 'Show close rate improvements. Before/after metrics.',
      speak_to_superego: 'Frame as serving the prospect better. Personalized = more helpful.',
      hidden_objection: '"Will this make me look like I\'m using AI and lose credibility?"',
      overcome_with: 'Show the output is indistinguishable from hand-crafted. Brand voice cloning.',
    },
  },

  marketer: {
    role: 'Content Marketer / Content Lead',
    id: {
      desire: 'Creating content that moves people. Writing that matters.',
      fear: 'Being replaced by AI. Their craft becoming commoditized.',
      primal: 'Identity — their self-worth is tied to their creative output.',
    },
    ego: {
      stated: 'Content velocity, quality at scale, SEO performance, engagement metrics.',
      rational: 'Can this produce content I\'d be proud to put my name on?',
      language: 'Content calendar, SEO, engagement, voice, brand, editorial, quality.',
    },
    superego: {
      duty: 'Maintaining editorial quality. Protecting the brand voice. Not publishing garbage.',
      image: 'The content strategist who uses AI as a force multiplier, not a replacement.',
      pressure: 'Volume demands, quality expectations, brand guidelines, team morale.',
    },
    shadow_gap: 'They say they want AI assistance, but they\'re terrified it means they\'re replaceable.',
    content_strategy: {
      speak_to_id: 'Frame as creative amplifier, not replacement. "This handles the 80%, you craft the 20% that matters."',
      speak_to_ego: 'Show quality metrics. Before/after scores. SEO improvements.',
      speak_to_superego: 'Show editorial control. They approve everything. AI as first draft, not final word.',
      hidden_objection: '"If AI writes the content, what\'s my job?"',
      overcome_with: 'Position as strategy tool. They become the editor/curator, not the typist.',
    },
  },
};

/**
 * Build shadow profile from client spec
 */
function analyzeShadow(spec) {
  const roleKey = (spec.role || '').toLowerCase();
  let profile = null;

  // Direct match
  for (const [key, p] of Object.entries(SHADOW_PROFILES)) {
    if (roleKey.includes(key) || p.role.toLowerCase().split(/[\/\s,]+/).some(r => roleKey.includes(r.toLowerCase()))) {
      profile = p;
      break;
    }
  }

  // Fuzzy match by keywords
  if (!profile) {
    const text = `${spec.role || ''} ${spec.context || ''} ${spec.goals || ''}`.toLowerCase();
    if (text.match(/ceo|chief exec|managing director/)) profile = SHADOW_PROFILES.ceo;
    else if (text.match(/cto|chief tech|vp eng/)) profile = SHADOW_PROFILES.cto;
    else if (text.match(/cmo|marketing|brand/)) profile = SHADOW_PROFILES.cmo;
    else if (text.match(/cfo|finance|accounting/)) profile = SHADOW_PROFILES.cfo;
    else if (text.match(/develop|engineer|program/)) profile = SHADOW_PROFILES.developer;
    else if (text.match(/founder|startup|entrepreneur/)) profile = SHADOW_PROFILES.founder;
    else if (text.match(/sales|account exec|ae|bdr|sdr/)) profile = SHADOW_PROFILES.sales_rep;
    else if (text.match(/content|writer|editor|copywrite/)) profile = SHADOW_PROFILES.marketer;
    else profile = SHADOW_PROFILES.founder; // default
  }

  // Compute the shadow read — the unspoken narrative
  const shadow_read = {
    what_they_say: profile.ego.stated,
    what_they_mean: profile.shadow_gap,
    what_they_fear: profile.id.fear,
    what_they_need_to_hear: profile.content_strategy.overcome_with,
    hidden_objection: profile.content_strategy.hidden_objection,
    speak_to: {
      desire: profile.content_strategy.speak_to_id,
      logic: profile.content_strategy.speak_to_ego,
      duty: profile.content_strategy.speak_to_superego,
    },
  };

  return { profile, shadow_read };
}

module.exports = { SHADOW_PROFILES, analyzeShadow };
