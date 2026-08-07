import { arraysEqual, interleave, indexBy, runLengthEncode } from './basic.js';

describe('arraysEqual', () => {
  test('returns true for equal arrays and false for different order or length', () => {
    expect(arraysEqual([1, '2', true], [1, '2', true])).toBe(true);
    expect(arraysEqual([1, 2], [2, 1])).toBe(false);
    expect(arraysEqual([1, 2], [1, 2, 3])).toBe(false);
  });

  test('uses strict equality', () => {
    expect(arraysEqual([1], ['1'])).toBe(false);
    expect(arraysEqual([Number.NaN], [Number.NaN])).toBe(false);
  });

  test('performs a shallow comparison of object references', () => {
    const shared = { id: 1 };
    expect(arraysEqual([shared], [shared])).toBe(true);
    expect(arraysEqual([{ id: 1 }], [{ id: 1 }])).toBe(false);
  });
});

describe('interleave', () => {
  test('alternates values and appends the first array remainder', () => {
    expect(interleave([1, 2, 3], ['a', 'b'])).toEqual([1, 'a', 2, 'b', 3]);
  });

  test('appends the second array remainder', () => {
    expect(interleave([1], ['a', 'b', 'c'])).toEqual([1, 'a', 'b', 'c']);
  });

  test('does not modify either input array', () => {
    const first = [1, 2];
    const second = ['a', 'b'];

    expect(interleave(first, second)).toEqual([1, 'a', 2, 'b']);
    expect(first).toEqual([1, 2]);
    expect(second).toEqual(['a', 'b']);
    expect(interleave([], [])).toEqual([]);
  });
});

describe('indexBy', () => {
  test('indexes objects by the selected property', () => {
    const first = { id: 'a', score: 7 };
    const second = { id: 'b', score: 9 };
    const result = indexBy([first, second], 'id');

    expect(result).toEqual({ a: first, b: second });
    expect(result.a).toBe(first);
    expect(result.b).toBe(second);
  });

  test('supports numeric property values as keys', () => {
    const item = { code: 42, label: 'answer' };
    expect(indexBy([item], 'code')).toEqual({ 42: item });
  });

  test('returns an empty object for an empty array', () => {
    expect(indexBy([], 'id')).toEqual({});
  });
});

describe('runLengthEncode', () => {
  test('encodes each consecutive character run including runs of one', () => {
    expect(runLengthEncode('aaabbcaaaa')).toBe('a3b2c1a4');
  });

  test('is case-sensitive and supports multi-digit run lengths', () => {
    expect(runLengthEncode('AAAAAAAAAAAAb!')).toBe('A12b1!1');
    expect(runLengthEncode('aA')).toBe('a1A1');
  });

  test('handles an empty string', () => {
    expect(runLengthEncode('')).toBe('');
  });
});
