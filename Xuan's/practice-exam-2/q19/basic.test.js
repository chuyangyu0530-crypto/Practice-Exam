import {
  findLastIndex,
  transpose,
  fromPairs,
  isPalindromePhrase,
} from './basic.js';

describe('findLastIndex', () => {
  test('returns the final strict-equality match', () => {
    expect(findLastIndex([1, '1', 1, 2, 1], 1)).toBe(4);
    expect(findLastIndex([1, '1', 1], '1')).toBe(1);
  });

  test('returns -1 when the value is absent', () => {
    expect(findLastIndex(['a', 'b'], 'c')).toBe(-1);
    expect(findLastIndex([], 1)).toBe(-1);
  });

  test('compares object values by reference', () => {
    const target = { id: 1 };
    expect(findLastIndex([target, { id: 1 }, target], target)).toBe(2);
  });
});

describe('transpose', () => {
  test('turns rows into columns without modifying the matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const result = transpose(matrix);

    expect(result).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
    expect(matrix).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  test('handles a single row and a single column', () => {
    expect(transpose([['a', 'b', 'c']])).toEqual([['a'], ['b'], ['c']]);
    expect(transpose([[1], [2], [3]])).toEqual([[1, 2, 3]]);
  });

  test('handles an empty matrix or rows with no columns', () => {
    expect(transpose([])).toEqual([]);
    expect(transpose([[]])).toEqual([]);
  });
});

describe('fromPairs', () => {
  test('creates an object from key-value pairs', () => {
    expect(fromPairs([['name', 'Ari'], ['score', 8], ['active', false]])).toEqual({
      name: 'Ari',
      score: 8,
      active: false,
    });
  });

  test('uses the value from the final pair when a key repeats', () => {
    expect(fromPairs([['a', 1], ['b', 2], ['a', 3]])).toEqual({ a: 3, b: 2 });
  });

  test('returns an empty object for an empty pair array', () => {
    expect(fromPairs([])).toEqual({});
  });
});

describe('isPalindromePhrase', () => {
  test('ignores case, punctuation, and whitespace', () => {
    expect(isPalindromePhrase('A man, a plan, a canal: Panama!')).toBe(true);
  });

  test('supports digits and rejects a non-palindrome', () => {
    expect(isPalindromePhrase('1a2B2a1')).toBe(true);
    expect(isPalindromePhrase('This is not one')).toBe(false);
  });

  test('treats an empty normalized string as a palindrome', () => {
    expect(isPalindromePhrase('... --- !!!')).toBe(true);
    expect(isPalindromePhrase('')).toBe(true);
  });
});
