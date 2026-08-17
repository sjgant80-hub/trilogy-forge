# SPEC — trilogy-forge

Status: Accepted
Version: matches `package.json` `version` (1.0.0)

A design note for the build engine. It records what the engine is supposed to
do so that a reader can tell whether a given output is correct, and so the test
suite ([`test.mjs`](./test.mjs)) has a written target to pin against.

## 1. Problem

Content-generation prompts are usually hand-written per client and drift in
quality. We want a **deterministic function** that turns a short structured
client spec into a fully-formed system prompt plus a pipeline configuration —
the same spec always producing the same build, so the output is reviewable and
diff-able rather than improvised.

## 2. Inputs and outputs

Input is a plain `spec` object (all fields optional): `role`, `industry`,
`company`, `goals`, `audience`, `product`, `content_type`, `personality`,
`context`, and a `tone_overrides` map of dimension → number.

Output (`Forge.build`, in [`src/forge.js`](./src/forge.js)) is an object with a
fixed key order:

```
spec, archetype, shadow, tone, sales, system_prompt, content_strategy, pipeline_config
```

`Forge.prompt(spec)` is a convenience that returns `build(spec).system_prompt`
unchanged; `Forge.pipelineConfig(spec)` returns `build(spec).pipeline_config`.

## 3. Pipeline stages

The build is a pure composition of five stages, each a stand-alone exported
function so it can be tested in isolation:

1. **Archetype detection** — [`src/archetypes.js`](./src/archetypes.js).
   Twelve Jungian brand archetypes, each with role list, trigger words and
   repel words. `detectArchetype` scores every archetype from the spec text:
   `+50` for a role-list hit, `+10` per trigger word found, `-5` per repel word.
   The top positive score is `primary`, the next is `secondary`. When nothing
   scores positive, it falls back to Hero (primary) / Sage (secondary).

2. **Shadow analysis** — [`src/shadow.js`](./src/shadow.js). A role is matched
   to one of eight Freudian id/ego/superego profiles by direct role-string
   match, then by keyword fuzzy match, then defaulting to the founder profile.
   The returned `shadow_read` is a **projection** of the matched profile, never
   independent data: e.g. `shadow_read.what_they_mean === profile.shadow_gap`.

3. **Tone calibration** — [`src/tone.js`](./src/tone.js). Sixteen independent
   0–1 dials. `calibrateTone` starts from the archetype's pre-set vector, adds
   industry modifiers, then applies manual overrides. **Every write is clamped
   to `[0,1]`** — this is the load-bearing invariant (see §5).

4. **Framework selection** — [`src/sales.js`](./src/sales.js). Picks one
   structural framework (SPIN / Challenger / PAS / AIDA) by archetype and
   content type, then layers psychological triggers keyed off the shadow
   profile, and finally de-duplicates by framework name.

5. **Assembly** — [`src/forge.js`](./src/forge.js) stitches the above into the
   system prompt, content strategy, and a `pipeline_config` whose `tone` label
   is derived from the calibrated vector by a fixed threshold ladder.

## 4. Determinism

There is no randomness, clock, network, or filesystem read in the pipeline.
The same spec yields a byte-identical `JSON.stringify(build(spec))`. This is
what makes the output reviewable and is asserted directly in the suite.

## 5. Invariants (asserted by the suite)

- `ARCHETYPES` has 12 entries; `TONE_DIMENSIONS` has 16; every entry of
  `ARCHETYPE_TONES` is a full 16-dimension vector with all values in `[0,1]`.
- **Clamp invariant:** for any archetype, any industry modifier, and any
  override (including out-of-range values like `9` or `-9`), every dial of the
  calibrated tone stays within `[0,1]`.
- `selectFrameworks` never returns two frameworks with the same `name`.
- `build` key order is fixed and `Forge.prompt(spec) === build(spec).system_prompt`.

## 6. Test surface

[`test.mjs`](./test.mjs) imports the public surface from [`index.js`](./index.js)
and exercises each stage with recorded expected values (for example, a
research-driven CTO spec scores The Sage at exactly 80), plus the invariants in
§5 and two full end-to-end builds. Run with `node test.mjs`.

## 7. Non-goals

The engine does not call any language model, does not fetch or store data, and
makes no claim to measure a real person. The archetype, shadow, tone and sales
tables are editorial content-strategy heuristics drawn from published branding
and sales-psychology literature; they are inputs to prompt text, not a
diagnostic of anyone.
