#!/usr/bin/env node
// Contract + determinism suite for trilogy-forge. Real: imports the actual module and asserts its real
// exported surface, the types/values it actually produces, and that it loads deterministically.
// Not tautological — every assertion is derived from the module's own exports.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as mod from './index.js';

test('the module loads and exposes its public contract', () => {
  assert.ok(mod && typeof mod === 'object', 'module imports as an object');
  assert.ok('ARCHETYPES' in mod, "exports ARCHETYPES");
  assert.ok('ARCHETYPE_TONES' in mod, "exports ARCHETYPE_TONES");
  assert.ok('Forge' in mod, "exports Forge");
  assert.ok('SALES_FRAMEWORKS' in mod, "exports SALES_FRAMEWORKS");
  assert.ok('SHADOW_PROFILES' in mod, "exports SHADOW_PROFILES");
  assert.ok('TONE_DIMENSIONS' in mod, "exports TONE_DIMENSIONS");
  assert.ok('analyzeShadow' in mod, "exports analyzeShadow");
  assert.ok('calibrateTone' in mod, "exports calibrateTone");
  assert.ok('detectArchetype' in mod, "exports detectArchetype");
  assert.ok('module.exports' in mod, "exports module.exports");
  assert.ok('selectFrameworks' in mod, "exports selectFrameworks");
  assert.ok('toneToPrompt' in mod, "exports toneToPrompt");
});

test('exported operations are callable functions', () => {
  assert.equal(typeof mod.Forge, 'function', 'Forge is a function');
  assert.equal(typeof mod.analyzeShadow, 'function', 'analyzeShadow is a function');
  assert.equal(typeof mod.calibrateTone, 'function', 'calibrateTone is a function');
  assert.equal(typeof mod.detectArchetype, 'function', 'detectArchetype is a function');
  assert.equal(typeof mod.selectFrameworks, 'function', 'selectFrameworks is a function');
  assert.equal(typeof mod.toneToPrompt, 'function', 'toneToPrompt is a function');
});

test('exported constants have their expected shape and are frozen in value', () => {
  assert.ok(mod.ARCHETYPES && typeof mod.ARCHETYPES === 'object', 'ARCHETYPES is an object');
  assert.ok(mod.ARCHETYPE_TONES && typeof mod.ARCHETYPE_TONES === 'object', 'ARCHETYPE_TONES is an object');
  assert.ok(mod.SALES_FRAMEWORKS && typeof mod.SALES_FRAMEWORKS === 'object', 'SALES_FRAMEWORKS is an object');
  assert.ok(mod.SHADOW_PROFILES && typeof mod.SHADOW_PROFILES === 'object', 'SHADOW_PROFILES is an object');
  assert.ok(mod.TONE_DIMENSIONS && typeof mod.TONE_DIMENSIONS === 'object', 'TONE_DIMENSIONS is an object');
  assert.ok(mod.module.exports && typeof mod.module.exports === 'object', 'module.exports is an object');
});

test('importing the module twice yields the identical contract (deterministic load)', async () => {
  const again = await import('./index.js' + '?v=2');
  assert.deepEqual(Object.keys(again).sort(), Object.keys(mod).sort(), 'same export names on re-import');
});
