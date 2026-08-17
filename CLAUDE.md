# CLAUDE.md — working notes for agents in this repo

Guidance for any AI assistant (or human) making changes to `trilogy-forge`.

## What this is

A zero-dependency, pure-function build engine: a client `spec` object goes in,
a calibrated system prompt plus a pipeline config comes out. The design is
written down in `SPEC.md` — read it before changing behaviour.

## Layout

- `index.js` — the public surface; re-exports everything from `src/`.
- `src/archetypes.js` — 12-archetype table + `detectArchetype`.
- `src/shadow.js` — id/ego/superego profiles + `analyzeShadow`.
- `src/tone.js` — 16 tone dials + `calibrateTone` + `toneToPrompt`.
- `src/sales.js` — sales frameworks + `selectFrameworks`.
- `src/forge.js` — the `Forge` class that composes the five stages.
- `test.mjs` — the behavioural suite (run: `npm test`).

## Ground rules

- **Determinism is the contract.** No randomness, clocks, network, or disk
  reads in the pipeline. The same spec must produce a byte-identical build.
  If you add a stage, keep it pure.
- **Clamp every tone write** into `[0,1]`. This invariant is asserted; do not
  weaken it.
- **The shadow read is a projection**, not new data. Keep
  `shadow_read.*` fields derived from the matched profile.
- **Keep it dependency-free.** The value of this package is that it runs on
  vanilla Node with no install step. Do not add runtime dependencies.

## Changing behaviour

If you intentionally change an engine output, update `SPEC.md` and update the
matching recorded value in `test.mjs` in the same change — the suite pins real
observed outputs (for example, the Sage score of 80 for a research-driven CTO),
so an intended change should move the expectation, never delete the assertion.

## Verifying

```
npm test        # runs node test.mjs; exits non-zero on any failure
```

The suite imports the project's own source and asserts observed behaviour. A
green run means the recorded outputs still hold.
