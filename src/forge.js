// ═══════════════════════════════════════════════════════════════
// The Forge — builds custom client configs from raw specs
// ═══════════════════════════════════════════════════════════════
//
// Input:  a client spec (role, industry, goals, audience, etc.)
// Output: a fully calibrated build spec with:
//   - Jungian archetype profile
//   - Freudian shadow analysis
//   - 16-dimension tone calibration
//   - Sales framework selection
//   - Custom system prompts
//   - Pipeline configuration
//   - Content strategy
//
// What normal AI can't do:
//   It reads the spec literally. The Forge reads the psychology.
// ═══════════════════════════════════════════════════════════════

const { detectArchetype } = require('./archetypes');
const { analyzeShadow } = require('./shadow');
const { calibrateTone, toneToPrompt } = require('./tone');
const { selectFrameworks } = require('./sales');

class Forge {
  constructor(options = {}) {
    this._defaults = options;
  }

  /**
   * Build a complete client configuration from a spec
   *
   * @param {object} spec - Client specification
   * @param {string} spec.role - Client's role (CEO, CTO, Developer, etc.)
   * @param {string} spec.industry - Client's industry
   * @param {string} spec.company - Company name
   * @param {string} spec.goals - What they want to achieve
   * @param {string} spec.audience - Who they're targeting
   * @param {string} spec.product - Product/service being promoted
   * @param {string} spec.content_type - Type of content (blog, thread, email, ads, landing)
   * @param {string} spec.personality - Additional personality notes
   * @param {string} spec.context - Extra context
   * @param {object} spec.tone_overrides - Manual tone dimension overrides (0-1)
   *
   * @returns {object} Complete build specification
   */
  build(spec = {}) {
    // 1. Detect Jungian archetype
    const archetypeResult = detectArchetype(spec);

    // 2. Analyze Freudian shadow
    const shadowResult = analyzeShadow(spec);

    // 3. Calibrate tone across 16 dimensions
    const toneProfile = calibrateTone(archetypeResult.primary, shadowResult, spec);

    // 4. Select sales frameworks
    const frameworks = selectFrameworks(spec, archetypeResult.primary, shadowResult);

    // 5. Generate system prompt
    const systemPrompt = this._buildSystemPrompt(spec, archetypeResult, shadowResult, toneProfile, frameworks);

    // 6. Generate content strategy
    const contentStrategy = this._buildContentStrategy(spec, archetypeResult, shadowResult, frameworks);

    // 7. Generate pipeline config
    const pipelineConfig = this._buildPipelineConfig(spec, archetypeResult, toneProfile);

    return {
      spec,
      archetype: {
        primary: {
          name: archetypeResult.primary.name,
          core_desire: archetypeResult.primary.core_desire,
          fear: archetypeResult.primary.fear,
          shadow: archetypeResult.primary.shadow,
          voice: archetypeResult.primary.voice,
          sells_with: archetypeResult.primary.sells_with,
        },
        secondary: {
          name: archetypeResult.secondary.name,
          core_desire: archetypeResult.secondary.core_desire,
        },
        scores: archetypeResult.all_ranked.slice(0, 5),
      },
      shadow: {
        role_profile: shadowResult.profile?.role,
        freudian_layers: {
          id: shadowResult.profile?.id,
          ego: shadowResult.profile?.ego,
          superego: shadowResult.profile?.superego,
        },
        shadow_gap: shadowResult.profile?.shadow_gap,
        shadow_read: shadowResult.shadow_read,
      },
      tone: {
        profile: toneProfile,
        description: this._describeTone(toneProfile),
        prompt_instructions: toneToPrompt(toneProfile),
      },
      sales: {
        frameworks: frameworks.map(f => ({
          name: f.name,
          origin: f.origin,
          use_when: f.use_when,
          content_pattern: f.content_pattern,
        })),
        primary_framework: frameworks[0]?.name,
        triggers: frameworks.slice(1).map(f => f.name),
      },
      system_prompt: systemPrompt,
      content_strategy: contentStrategy,
      pipeline_config: pipelineConfig,
    };
  }

  /**
   * Quick build — just the system prompt, ready to paste
   */
  prompt(spec = {}) {
    return this.build(spec).system_prompt;
  }

  /**
   * Build a Trilogy pipeline config from the forge output
   */
  pipelineConfig(spec = {}) {
    return this.build(spec).pipeline_config;
  }

  // ─── INTERNAL BUILDERS ──────────────────────────────────

  _buildSystemPrompt(spec, archetype, shadow, tone, frameworks) {
    const sections = [];

    // Identity
    sections.push(`# ROLE & VOICE
You are a ${spec.role ? `content specialist writing for ${spec.role}-level readers` : 'content specialist'} in the ${spec.industry || 'technology'} industry.
${spec.company ? `You are writing for ${spec.company}.` : ''}
${spec.product ? `The product/service is: ${spec.product}` : ''}`);

    // Archetype voice
    sections.push(`# VOICE CHARACTER (${archetype.primary.name})
${archetype.primary.voice}
Core desire of your reader: ${archetype.primary.core_desire}
What they fear: ${archetype.primary.fear}
What sells: ${archetype.primary.sells_with}`);

    // Shadow instructions
    if (shadow.shadow_read) {
      sections.push(`# PSYCHOLOGICAL DEPTH
Hidden objection to address: ${shadow.shadow_read.hidden_objection}
What they actually need to hear: ${shadow.shadow_read.what_they_need_to_hear}
Shadow gap: ${shadow.shadow_read.what_they_mean}

When writing:
- Speak to their desire: ${shadow.shadow_read.speak_to.desire}
- Speak to their logic: ${shadow.shadow_read.speak_to.logic}
- Speak to their sense of duty: ${shadow.shadow_read.speak_to.duty}`);
    }

    // Tone instructions
    sections.push(`# TONE CALIBRATION
${toneToPrompt(tone)}`);

    // Sales framework
    if (frameworks.length > 0) {
      sections.push(`# CONTENT STRUCTURE
${frameworks[0].system_prompt_addon}`);

      if (frameworks.length > 1) {
        sections.push(`# PSYCHOLOGICAL TRIGGERS
${frameworks.slice(1).map(f => f.system_prompt_addon).join('\n\n')}`);
      }
    }

    // Audience
    if (spec.audience) {
      sections.push(`# TARGET AUDIENCE
${spec.audience}`);
    }

    // Goals
    if (spec.goals) {
      sections.push(`# CONTENT GOALS
${spec.goals}`);
    }

    // Anti-patterns
    sections.push(`# RULES
- Never sound like generic AI output. Every sentence must feel deliberately crafted for this specific reader.
- Never use filler phrases like "in today's fast-paced world" or "it's no secret that."
- Never open with a question unless it's genuinely provocative.
- Never list benefits without connecting them to the reader's specific psychology.
- Every paragraph must earn its place. Cut anything that doesn't move the reader toward action.
- Write like a human who deeply understands this reader's world, fears, and ambitions.`);

    return sections.join('\n\n');
  }

  _buildContentStrategy(spec, archetype, shadow, frameworks) {
    return {
      opening_strategy: archetype.primary.content_frame?.split('.')[0] || 'Lead with value',
      content_frame: archetype.primary.content_frame,
      primary_sales_pattern: frameworks[0]?.content_pattern,
      psychological_triggers: frameworks.slice(1).map(f => ({
        trigger: f.name,
        how: f.content_pattern || f.trigger,
      })),
      objection_to_address: shadow.shadow_read?.hidden_objection,
      closing_strategy: shadow.shadow_read?.what_they_need_to_hear,
      words_to_use: archetype.primary.trigger_words,
      words_to_avoid: archetype.primary.repels,
    };
  }

  _buildPipelineConfig(spec, archetype, tone) {
    const config = {
      tone: this._dominantTone(tone),
      audience: spec.audience || spec.role || 'general',
      quality: 'best',
    };

    // Content type recommendations based on archetype
    const contentTypes = [];
    const name = archetype.primary.name;

    if (name === 'The Sage' || name === 'The Ruler') {
      contentTypes.push('blog', 'email');
    }
    if (name === 'The Hero' || name === 'The Rebel' || name === 'The Explorer') {
      contentTypes.push('thread', 'social');
    }
    if (name === 'The Creator' || name === 'The Lover') {
      contentTypes.push('landing', 'product');
    }
    if (name === 'The Jester' || name === 'The Everyperson') {
      contentTypes.push('social', 'thread');
    }
    if (name === 'The Caregiver' || name === 'The Innocent') {
      contentTypes.push('email', 'blog');
    }
    if (name === 'The Magician') {
      contentTypes.push('landing', 'blog', 'thread');
    }

    config.recommended_content_types = [...new Set(contentTypes)];
    config.research_depth = (name === 'The Sage') ? 'deep' : 'standard';

    return config;
  }

  _dominantTone(tone) {
    if (tone.formality > 0.7) return 'professional';
    if (tone.humor > 0.5) return 'witty';
    if (tone.warmth > 0.7) return 'friendly';
    if (tone.provocation > 0.6) return 'provocative';
    if (tone.emotion > 0.7) return 'passionate';
    if (tone.authority > 0.8) return 'authoritative';
    if (tone.pace > 0.7) return 'punchy';
    return 'balanced';
  }

  _describeTone(tone) {
    const traits = [];
    if (tone.formality > 0.6) traits.push('formal');
    else if (tone.formality < 0.35) traits.push('casual');
    if (tone.confidence > 0.7) traits.push('confident');
    if (tone.warmth > 0.6) traits.push('warm');
    if (tone.pace > 0.6) traits.push('punchy');
    if (tone.authority > 0.7) traits.push('authoritative');
    if (tone.humor > 0.4) traits.push('witty');
    if (tone.emotion > 0.6) traits.push('passionate');
    if (tone.provocation > 0.5) traits.push('provocative');
    if (tone.technicality > 0.6) traits.push('technical');
    if (tone.storytelling > 0.5) traits.push('narrative');
    if (tone.aspiration > 0.7) traits.push('visionary');
    return traits.join(', ') || 'balanced';
  }
}

module.exports = { Forge };
