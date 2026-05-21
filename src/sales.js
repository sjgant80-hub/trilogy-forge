// ═══════════════════════════════════════════════════════════════
// Sales Psychology Engine — frameworks that close
// ═══════════════════════════════════════════════════════════════
//
// Normal AI writes content. This engine writes content that sells.
// Each framework is a proven psychological pattern from decades
// of sales research, reframed for AI content generation.
// ═══════════════════════════════════════════════════════════════

const SALES_FRAMEWORKS = {

  // ─── STRUCTURAL FRAMEWORKS ────────────────────────────────

  spin: {
    name: 'SPIN Selling',
    origin: 'Neil Rackham, 1988',
    use_when: 'Complex B2B sales, high-value deals, consultative selling',
    structure: {
      situation: 'Establish current state. Ask about their setup, tools, workflow.',
      problem: 'Surface the pain. What\'s broken, slow, expensive, risky?',
      implication: 'Amplify the cost of NOT solving it. What happens if this continues?',
      need_payoff: 'Get them to articulate the value of the solution themselves.',
    },
    content_pattern: `Open with relatable situation (we all know X).
Surface the hidden problem (but here's what most people miss).
Amplify implications (this costs companies $X/year in lost Y).
Let the solution emerge naturally (what if you could just...).`,
    system_prompt_addon: `Use the SPIN framework:
1. Open by acknowledging the reader's current situation
2. Surface a specific, relatable problem they face
3. Amplify the implications — what does this problem actually cost?
4. Let the solution emerge as the natural answer to their articulated need
Never pitch directly. Let the reader conclude the product is the answer.`,
  },

  challenger: {
    name: 'Challenger Sale',
    origin: 'Dixon & Adamson, 2011',
    use_when: 'Disrupting status quo, teaching buyers something new',
    structure: {
      teach: 'Share an insight they didn\'t know. Reframe their problem.',
      tailor: 'Connect that insight to their specific situation.',
      take_control: 'Guide them to the solution with confidence.',
    },
    content_pattern: `Lead with a provocative insight (most people think X, but actually Y).
Make it personal (here's what that means for YOUR type of business).
Guide decisively (here's exactly what to do about it).`,
    system_prompt_addon: `Use the Challenger framework:
1. TEACH: Open with a counter-intuitive insight that reframes the reader's understanding
2. TAILOR: Connect that insight to their specific industry/role/situation
3. TAKE CONTROL: Confidently guide them to the solution
Be provocative, not aggressive. Challenge their thinking, not their intelligence.`,
  },

  pas: {
    name: 'PAS (Problem-Agitate-Solve)',
    origin: 'Classic direct response copywriting',
    use_when: 'Short-form content, ads, email subject lines, landing pages',
    structure: {
      problem: 'Name the pain in their language.',
      agitate: 'Twist the knife. Make them feel it.',
      solve: 'Present the relief.',
    },
    content_pattern: `State the problem (tired of X?).
Agitate it (every day you wait, Y gets worse).
Solve it (here's how to fix it in Z minutes).`,
    system_prompt_addon: `Use the PAS framework:
1. PROBLEM: Name the reader's pain in their exact language
2. AGITATE: Intensify the emotion — make the cost of inaction visceral
3. SOLVE: Present the solution as immediate relief
Keep it punchy. Each section should hit harder than the last.`,
  },

  aida: {
    name: 'AIDA',
    origin: 'E. St. Elmo Lewis, 1898',
    use_when: 'General content, blog posts, landing pages, email sequences',
    structure: {
      attention: 'Hook them with something unexpected.',
      interest: 'Build curiosity with relevant details.',
      desire: 'Make them want the outcome.',
      action: 'Tell them exactly what to do next.',
    },
    content_pattern: `Attention: Bold opening statement or surprising statistic.
Interest: Explain why this matters to them specifically.
Desire: Paint the picture of having the solution.
Action: Clear, single call-to-action.`,
    system_prompt_addon: `Use the AIDA framework:
1. ATTENTION: Open with a hook — surprising fact, bold claim, or vivid scenario
2. INTEREST: Build relevance — why should THIS reader care?
3. DESIRE: Paint the after-state — what life looks like with the solution
4. ACTION: One clear call-to-action. Remove friction. Make it easy.`,
  },

  // ─── PSYCHOLOGICAL TRIGGERS ───────────────────────────────

  scarcity: {
    name: 'Scarcity & Urgency',
    origin: 'Cialdini, 1984',
    use_when: 'Launches, limited offers, waitlists',
    trigger: 'People value what\'s scarce. Limited availability increases perceived value.',
    content_pattern: 'Mention limited capacity, waitlist, early-access pricing, or beta slots.',
    system_prompt_addon: 'Subtly incorporate scarcity signals. Mention limited availability, early-access benefits, or time-sensitive opportunities. Never be desperate — scarcity should feel natural, not manufactured.',
  },

  social_proof: {
    name: 'Social Proof',
    origin: 'Cialdini, 1984',
    use_when: 'Building trust, overcoming skepticism',
    trigger: 'People follow what others do, especially similar others.',
    content_pattern: 'Reference other users, companies, statistics. "Join 500+ companies" style.',
    system_prompt_addon: 'Include social proof naturally. Reference how many people/companies use the product, notable customers, industry recognition. Frame as "people like you already trust this."',
  },

  authority: {
    name: 'Authority Principle',
    origin: 'Cialdini + Milgram',
    use_when: 'Technical audiences, skeptical buyers, enterprise deals',
    trigger: 'People defer to perceived experts and credentials.',
    content_pattern: 'Lead with expertise signals. Research backing. Technical depth. Industry recognition.',
    system_prompt_addon: 'Establish authority early. Reference research, benchmarks, technical depth, or industry expertise. Write with the confidence of a recognized expert in the space.',
  },

  reciprocity: {
    name: 'Reciprocity',
    origin: 'Cialdini, 1984',
    use_when: 'Content marketing, free tools, educational content',
    trigger: 'People feel obligated to return favors. Give value first, ask second.',
    content_pattern: 'Lead with genuinely useful information. Teach something real. Then mention the product.',
    system_prompt_addon: 'Lead with genuine value. Teach something actionable the reader can use immediately, regardless of whether they buy the product. The ask comes after the give.',
  },

  loss_aversion: {
    name: 'Loss Aversion',
    origin: 'Kahneman & Tversky, 1979',
    use_when: 'Risk-averse buyers, enterprise deals, compliance-driven purchases',
    trigger: 'Losses feel 2x stronger than equivalent gains. Frame around what they lose by NOT acting.',
    content_pattern: 'Frame costs of inaction, not benefits of action. "Companies lose $X/month by not..."',
    system_prompt_addon: 'Frame around what the reader loses by NOT acting, rather than what they gain by acting. "Every month without X costs you Y" is more powerful than "X saves you Y." Losses feel twice as strong as gains.',
  },

  anchoring: {
    name: 'Anchoring Effect',
    origin: 'Tversky & Kahneman, 1974',
    use_when: 'Pricing discussions, value propositions, ROI arguments',
    trigger: 'First number seen becomes the reference point for all subsequent judgment.',
    content_pattern: 'Lead with a large cost/time number, then show how much smaller the solution cost is.',
    system_prompt_addon: 'Use anchoring: establish a high reference point first (the cost of the problem, the price of alternatives, the time wasted), then present the solution cost as dramatically smaller by comparison.',
  },

  commitment: {
    name: 'Commitment & Consistency',
    origin: 'Cialdini, 1984',
    use_when: 'Free trials, progressive engagement, onboarding',
    trigger: 'Once people take a small step, they\'re more likely to take the next.',
    content_pattern: 'Start with micro-commitments. "Just try the free tier." "Just paste one receipt."',
    system_prompt_addon: 'Guide toward micro-commitments. Make the first step trivially easy. "Try it in 30 seconds" > "Sign up for a free trial." Each small yes makes the big yes inevitable.',
  },
};

/**
 * Select the best sales frameworks for a given client spec
 */
function selectFrameworks(spec, archetype, shadow) {
  const selected = [];
  const role = (spec.role || '').toLowerCase();
  const goals = (spec.goals || '').toLowerCase();
  const content_type = (spec.content_type || '').toLowerCase();

  // Always include a structural framework
  if (archetype?.name === 'The Sage' || role.match(/cto|engineer|analyst|research/)) {
    selected.push(SALES_FRAMEWORKS.spin);
  } else if (archetype?.name === 'The Rebel' || archetype?.name === 'The Hero') {
    selected.push(SALES_FRAMEWORKS.challenger);
  } else if (content_type.match(/ad|email|landing|short/)) {
    selected.push(SALES_FRAMEWORKS.pas);
  } else {
    selected.push(SALES_FRAMEWORKS.aida);
  }

  // Add psychological triggers based on shadow profile
  if (shadow?.profile?.id?.fear?.match(/replac|irrelevan|miss|behind/i)) {
    selected.push(SALES_FRAMEWORKS.loss_aversion);
  }
  if (shadow?.profile?.superego?.pressure?.match(/board|investor|stakeholder/i)) {
    selected.push(SALES_FRAMEWORKS.social_proof);
  }
  if (shadow?.profile?.ego?.language?.match(/data|evidence|research|methodology/i)) {
    selected.push(SALES_FRAMEWORKS.authority);
  }
  if (role.match(/founder|startup|indie/i)) {
    selected.push(SALES_FRAMEWORKS.commitment);
  }
  if (goals.match(/launch|waitlist|beta|early/i)) {
    selected.push(SALES_FRAMEWORKS.scarcity);
  }

  // If no triggers selected, add reciprocity (always safe)
  if (selected.length < 2) {
    selected.push(SALES_FRAMEWORKS.reciprocity);
  }

  // Add anchoring for any pricing-related content
  if (goals.match(/pricing|cost|roi|value|budget/i) || content_type.match(/landing|ads|email/i)) {
    selected.push(SALES_FRAMEWORKS.anchoring);
  }

  // Deduplicate
  const seen = new Set();
  return selected.filter(f => {
    if (seen.has(f.name)) return false;
    seen.add(f.name);
    return true;
  });
}

module.exports = { SALES_FRAMEWORKS, selectFrameworks };
