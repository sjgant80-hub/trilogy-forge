# Trilogy Forge

**The Psychological Build Engine**

Client spec in. Psychologically calibrated AI configuration out.

Trilogy Forge reads what normal AI cannot: the Jungian archetype behind the buyer, the Freudian shadow beneath the stated need, the 16-dimension tonal fingerprint of effective voice, and the sales psychology that actually closes. It auto-generates elite AI configurations calibrated to each client's archetype, shadow profile, and role psychology.

This is the profiling backbone that powers FallScout's sniper DM system.

**Live:** [sjgant80-hub.github.io/trilogy-forge](https://sjgant80-hub.github.io/trilogy-forge/)
**Repository:** [github.com/sjgant80-hub/trilogy-forge](https://github.com/sjgant80-hub/trilogy-forge)
**Part of:** [AI Native Solutions](https://sjgant80-hub.github.io/ai-nativesolutions/)

---

## What It Does

Normal AI reads the brief. The Forge reads the buyer.

Given a client specification (role, industry, company, product, goals, audience), the Forge produces a complete build containing:

- A primary and secondary Jungian archetype with scored rankings
- A Freudian shadow analysis across Id, Ego, and Superego layers
- A 16-dimension tone profile with natural language prompt instructions
- Sales framework selection with psychological triggers
- A ready-to-deploy system prompt for any LLM
- A content strategy with opening moves, words to use, and words to avoid
- A Trilogy pipeline configuration for downstream content generation

---

## Psychological Layers

### Jungian Archetypes

Twelve universal archetypes mapped to business roles. Each archetype carries a core desire, fear, strategy, shadow, gift, voice profile, trigger words, repulsion patterns, selling strategy, and content framing instructions.

| Archetype | Core Desire | Shadow |
|---|---|---|
| The Ruler | Control and order | Controlling others to mask insecurity |
| The Sage | Truth and understanding | Knowledge as weapon, analysis paralysis |
| The Hero | Prove worth through mastery | Needing to always be the savior |
| The Creator | Enduring value | Perfectionism, paralysis before shipping |
| The Explorer | Freedom to discover | Perpetual wandering without commitment |
| The Caregiver | Protect others | Giving until depleted |
| The Magician | Transformation | Using system knowledge to manipulate |
| The Rebel | Revolution | Rebellion without purpose |
| The Lover | Intimacy and connection | People-pleasing at cost of truth |
| The Jester | Live in the moment | Using humor to deflect depth |
| The Everyperson | Belonging | Losing individual identity |
| The Innocent | Safety and happiness | Refusing to see problems |

Detection is scored across role matching, trigger word analysis, and repulsion signals. The Forge returns both primary and secondary archetypes with full confidence rankings.

### Freudian Shadow Engine

The Shadow Engine reads what the client does not say. Three layers, derived from Freudian depth psychology, are analyzed for each role profile:

- **Id** -- What they secretly want. The primal desire, the hidden fear, the drive they will not articulate.
- **Ego** -- What they say they want. The stated needs, rational language, and surface-level requirements.
- **Superego** -- What they think they should want. Duty, image, external pressure, and professional obligation.

The critical output is the **shadow gap**: the distance between what they say and what they mean. Pre-built profiles cover CEO, CTO, CMO, CFO, Developer, Startup Founder, Sales/AE, and Content Marketer archetypes. Each profile includes a complete content strategy with instructions for speaking to desire, logic, and duty simultaneously.

### ToneEngine (16-Dimension Voice Fingerprinting)

Normal AI has one dial. The ToneEngine has sixteen, each independently calibrated on a 0.0 to 1.0 scale:

| Dimension | Left End | Right End |
|---|---|---|
| Formality | Casual / street | Formal / boardroom |
| Confidence | Tentative / hedging | Absolute / commanding |
| Warmth | Cold / clinical | Warm / personal |
| Complexity | Simple / plain | Complex / sophisticated |
| Pace | Slow / deliberate | Fast / punchy |
| Authority | Peer / equal | Expert / authority |
| Emotion | Logical / analytical | Emotional / passionate |
| Directness | Indirect / suggestive | Direct / blunt |
| Humor | Serious / grave | Playful / witty |
| Urgency | Relaxed / no pressure | Urgent / time-sensitive |
| Exclusivity | Mass / everyone | Elite / exclusive |
| Technicality | Non-technical / layperson | Deeply technical |
| Aspiration | Grounded / practical | Aspirational / visionary |
| Vulnerability | Guarded / impenetrable | Vulnerable / transparent |
| Provocation | Safe / agreeable | Provocative / challenging |
| Storytelling | Factual / declarative | Narrative / story-driven |

Each archetype has a pre-calibrated tone profile. Industry modifiers (finance, startup, creative, healthcare, education) automatically adjust relevant dimensions. Manual overrides are supported for any dimension.

The ToneEngine converts the numeric profile into natural language system prompt instructions that any LLM can follow.

### Sales 101 (Framework Selection Engine)

Proven sales frameworks auto-selected based on client psychology and content type.

**Structural Frameworks:**

- **SPIN Selling** (Rackham, 1988) -- Situation, Problem, Implication, Need-Payoff. Consultative. Let them conclude the product is the answer.
- **Challenger Sale** (Dixon & Adamson, 2011) -- Teach, Tailor, Take Control. Lead with an insight they did not know.
- **PAS** (Classic direct response) -- Problem, Agitate, Solve. Name the pain, amplify it, present relief.
- **AIDA** (Lewis, 1898) -- Attention, Interest, Desire, Action. General-purpose conversion structure.

**Psychological Triggers:**

- Scarcity and Urgency (Cialdini)
- Social Proof (Cialdini)
- Authority Principle (Cialdini + Milgram)
- Reciprocity (Cialdini)
- Loss Aversion (Kahneman & Tversky)
- Anchoring Effect (Tversky & Kahneman)
- Commitment and Consistency (Cialdini)

Framework selection is driven by archetype, role, shadow profile, content type, and stated goals. The engine always selects at least one structural framework and layers relevant psychological triggers on top.

---

## How It Works

1. **Input** -- A client specification object containing role, industry, company, product, goals, audience, and optional tone overrides.
2. **Archetype Detection** -- Role and context are scored against all twelve Jungian archetypes. Primary and secondary archetypes are returned with confidence rankings.
3. **Shadow Analysis** -- The client's role is matched against Freudian shadow profiles. The shadow gap, hidden objection, and three-layer content strategy are computed.
4. **Tone Calibration** -- The archetype's pre-calibrated tone profile is loaded, then modified by industry signals and any manual overrides. The result is a 16-dimension numeric profile plus natural language prompt instructions.
5. **Framework Selection** -- Sales frameworks are selected based on archetype, shadow profile, role, content type, and goals. Structural frameworks and psychological triggers are assembled.
6. **System Prompt Generation** -- All layers are compiled into a single system prompt covering role, voice character, psychological depth, tone calibration, content structure, triggers, and anti-pattern rules.
7. **Output** -- The complete build: archetype profile, shadow analysis, tone profile, sales frameworks, system prompt, content strategy, and pipeline configuration.

---

## Installation

```
npm install trilogy-forge
```

Requires Node.js 18.0.0 or later.

---

## Usage

```javascript
const { Forge } = require('trilogy-forge');
const forge = new Forge();

const build = forge.build({
  role:     'CTO',
  industry: 'fintech',
  company:  'Revolut',
  product:  'Document parsing API',
  goals:    'Developer adoption, technical credibility',
  audience: 'Senior engineers evaluating API tools',
});

// Jungian archetype
build.archetype.primary.name        // "The Sage"
build.archetype.primary.core_desire // "Truth and understanding"
build.archetype.secondary.name      // "The Ruler"

// Freudian shadow
build.shadow.shadow_gap             // "They say they want enterprise reliability,
                                    //  but they secretly want something that
                                    //  excites their engineering soul."
build.shadow.shadow_read.hidden_objection
                                    // "Is this actually good engineering
                                    //  or just good marketing?"

// 16-dimension tone
build.tone.profile                  // { formality: 0.9, technicality: 0.9, ... }
build.tone.description              // "formal, confident, authoritative, technical"

// Sales psychology
build.sales.primary_framework       // "SPIN Selling"
build.sales.triggers                // ["Authority Principle", "Loss Aversion"]

// Ready-to-deploy outputs
build.system_prompt                 // Full system prompt for any LLM
build.content_strategy              // Opening strategy, words to use/avoid
build.pipeline_config               // Trilogy pipeline configuration
```

### Quick Prompt

For cases where only the system prompt is needed:

```javascript
const prompt = forge.prompt({
  role: 'Startup Founder',
  industry: 'SaaS',
  product: 'Analytics dashboard',
});
// Returns the full system prompt string, ready to paste
```

---

## API

### `new Forge(options)`

Create a new Forge instance. Options are reserved for future configuration.

### `forge.build(spec)`

Full build. Accepts a client specification object and returns the complete build output.

**Spec fields:**

| Field | Type | Description |
|---|---|---|
| `role` | string | Client's role (CEO, CTO, Developer, etc.) |
| `industry` | string | Client's industry |
| `company` | string | Company name |
| `product` | string | Product or service being promoted |
| `goals` | string | What they want to achieve |
| `audience` | string | Who they are targeting |
| `content_type` | string | Content format (blog, thread, email, ads, landing) |
| `personality` | string | Additional personality notes |
| `context` | string | Extra context for detection |
| `tone_overrides` | object | Manual tone dimension overrides (0.0 to 1.0) |

**Returns:** Object containing `archetype`, `shadow`, `tone`, `sales`, `system_prompt`, `content_strategy`, and `pipeline_config`.

### `forge.prompt(spec)`

Quick build. Same input as `build()`, returns only the system prompt string.

### `forge.pipelineConfig(spec)`

Pipeline build. Same input as `build()`, returns only the Trilogy pipeline configuration.

### Standalone Functions

```javascript
const {
  detectArchetype,   // (spec) => { primary, secondary, scores, all_ranked }
  analyzeShadow,     // (spec) => { profile, shadow_read }
  calibrateTone,     // (archetype, shadow, spec) => tone profile object
  toneToPrompt,      // (tone) => natural language instructions string
  selectFrameworks,  // (spec, archetype, shadow) => framework array
} = require('trilogy-forge');
```

---

## Trilogy Ecosystem

Trilogy Forge is one component in the Trilogy pipeline:

| Component | Purpose |
|---|---|
| [DocMind](https://sjgant80-hub.github.io/docmind-api/) | Document intelligence and parsing |
| [Deep](https://sjgant80-hub.github.io/deep-api/) | Deep research and analysis |
| [Flux](https://sjgant80-hub.github.io/flux-api/) | Content generation and delivery |
| [Trilogy SDK](https://sjgant80-hub.github.io/trilogy-sdk/) | Client SDK for Trilogy services |
| [Trilogy Framework](https://sjgant80-hub.github.io/trilogy-framework/) | Orchestration framework |
| **Trilogy Forge** | Psychological profiling and configuration |
| [FallCube](https://sjgant80-hub.github.io/fallcube-api/) | Data cube and analytics |
| [FallMesh](https://sjgant80-hub.github.io/fallmesh/) | Service mesh |

Pipeline flow: **Input (DocMind) -> Intelligence (Deep + Forge) -> Output (Flux)**

---

## Project Structure

```
trilogy-forge/
  index.js            # Public API and module exports
  index.html          # Documentation site (GitHub Pages)
  package.json        # Package metadata
  LICENSE             # MIT License
  src/
    archetypes.js     # 12 Jungian archetypes with detection engine
    shadow.js         # Freudian shadow profiles and analysis
    tone.js           # 16-dimension ToneEngine with calibration
    sales.js          # Sales frameworks and trigger selection
    forge.js          # Core Forge class — orchestrates all layers
```

---

## License

MIT License. Copyright (c) 2026 Simon Gant / AI Native Solutions.

See [LICENSE](LICENSE) for full text.

---

<p align="center">
Powered by Konomi Architecture<br>
Member of the <a href="https://aicraftspeopleguild.github.io/">AI Craftspeople Guild</a>
</p>
