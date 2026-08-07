import {
  intersection,
  flattenOneLevel,
  pick,
  reverseWords,
} from './basic.js';

describe('intersection', () => {
  test('preserves the order and duplicates from the first array', () => {
    expect(intersection([3, 1, 2, 1, 4, 2], [1, 2])).toEqual([1, 2, 1, 2]);
  });

  test('returns an empty array when there are no matches', () => {
    expect(intersection([1, 2, 3], [4, 5])).toEqual([]);
  });

  test('does not coerce values when matching', () => {
    expect(intersection([1, '1', false, 0], ['1', 0])).toEqual(['1', 0]);
  });
});

describe('flattenOneLevel', () => {
  test('flattens exactly one array level', () => {
    expect(flattenOneLevel([[1, [2]], 3, [[4]], []])).toEqual([1, [2], 3, [4]]);
  });

  test('leaves non-array values unchanged', () => {
    expect(flattenOneLevel(['a', 0, null, { value: 1 }])).toEqual([
      'a',
      0,
      null,
      { value: 1 },
    ]);
  });

  test('handles an empty array', () => {
    expect(flattenOneLevel([])).toEqual([]);
  });
});

describe('pick', () => {
  test('copies only requested existing keys', () => {
    const source = { a: 1, b: 2, c: undefined };
    const result = pick(source, ['c', 'a', 'missing']);

    expect(result).toEqual({ c: undefined, a: 1 });
    expect(result).not.toBe(source);
    expect(source).toEqual({ a: 1, b: 2, c: undefined });
  });

  test('returns an empty object when no requested keys exist', () => {
    expect(pick({ a: 1 }, ['x', 'y'])).toEqual({});
  });
});

describe('reverseWords', () => {
  test('reverses words and normalizes whitespace', () => {
    expect(reverseWords('  learn\tJavaScript\n today  ')).toBe(
      'today JavaScript learn',
    );
  });

  test('preserves characters within each word', () => {
    expect(reverseWords('one two, three!')).toBe('three! two, one');
  });

  test('returns an empty string for whitespace-only input', () => {
    expect(reverseWords(' \t\n ')).toBe('');
  });
});
