import { removeAt, groupByLength, countValue, toCamelCase } from './basic.js';

describe('removeAt', () => {
  test('removes the element at a valid index without modifying the input', () => {
    const input = ['a', 'b', 'c'];
    const result = removeAt(input, 1);

    expect(result).toEqual(['a', 'c']);
    expect(result).not.toBe(input);
    expect(input).toEqual(['a', 'b', 'c']);
  });

  test.each([-1, 3, 1.5])(
    'returns a shallow copy for invalid index %s',
    (index) => {
      const input = ['a', 'b', 'c'];
      const result = removeAt(input, index);

      expect(result).toEqual(input);
      expect(result).not.toBe(input);
    },
  );

  test('handles an empty array', () => {
    const input = [];
    const result = removeAt(input, 0);

    expect(result).toEqual([]);
    expect(result).not.toBe(input);
  });
});

describe('groupByLength', () => {
  test('groups words by length while preserving their input order', () => {
    expect(groupByLength(['cat', 'a', 'dog', 'to', 'ox'])).toEqual({
      1: ['a'],
      2: ['to', 'ox'],
      3: ['cat', 'dog'],
    });
  });

  test('supports empty strings and an empty input array', () => {
    expect(groupByLength(['', 'a', ''])).toEqual({ 0: ['', ''], 1: ['a'] });
    expect(groupByLength([])).toEqual({});
  });
});

describe('countValue', () => {
  test('counts own properties using strict equality', () => {
    const prototype = { inherited: 1 };
    const object = Object.create(prototype);
    Object.assign(object, { a: 1, b: '1', c: 1 });

    expect(countValue(object, 1)).toBe(2);
    expect(countValue(object, '1')).toBe(1);
  });

  test('counts own properties with undefined values', () => {
    expect(countValue({ a: undefined, b: 0, c: undefined }, undefined)).toBe(2);
  });

  test('follows strict-equality behaviour for NaN', () => {
    expect(countValue({ a: Number.NaN }, Number.NaN)).toBe(0);
  });
});

describe('toCamelCase', () => {
  test('converts words separated by spaces, hyphens, or underscores', () => {
    expect(toCamelCase('  HELLO--world_example phrase ')).toBe(
      'helloWorldExamplePhrase',
    );
  });

  test('lowercases a single word', () => {
    expect(toCamelCase('JavaScript')).toBe('javascript');
  });

  test('returns an empty string when there are no words', () => {
    expect(toCamelCase(' --__  ')).toBe('');
  });
});
