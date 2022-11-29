import {cutOff} from './fp-assignment-1-cuttoff-values';

describe('cutOffValue test', () => {
  test('check for cutoff value of 79', () => {
    expect(cutOff(79)).toBe(true);
  });
  test('check for cutoff value of 110', () => {
    expect(cutOff(110)).toBe(false);
  });
  test('check for cutoff value of 70', () => {
    expect(cutOff(70)).toBe(true);
  });
  test('check for cutoff value of 1100', () => {
    expect(cutOff(99)).toBe(true);
  });
});
