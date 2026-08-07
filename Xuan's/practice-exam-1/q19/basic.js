// BASIC JAVASCRIPT QUESTION 9 (10 marks)
// Suggested weighting: 2 + 3 + 2 + 3 marks
// DO NOT MODIFY THE FUNCTION DEFINITIONS

/**
 * Checks whether two arrays contain the same values in the same order.
 * Compare elements using strict equality. This is a shallow comparison.
 *
 * @param {any[]} a - First array.
 * @param {any[]} b - Second array.
 * @returns {boolean} - Whether the arrays are shallowly equal.
 *
 * @example
 * arraysEqual([1, '2', true], [1, '2', true]) // => true
 */
export function arraysEqual(a, b) {
  // TODO: complete me
  return false;
}

/**
 * Alternates elements from two arrays, beginning with the first array.
 * When one array runs out of elements, append all remaining elements from the
 * other array. Neither input array should be modified.
 *
 * @param {any[]} a - First array.
 * @param {any[]} b - Second array.
 * @returns {any[]} - Interleaved array.
 *
 * @example
 * interleave([1, 2, 3], ['a', 'b']) // => [1, 'a', 2, 'b', 3]
 */
export function interleave(a, b) {
  // TODO: complete me
  return [];
}

/**
 * Creates an object that indexes an array of objects by a selected property.
 * Assume every item has the property and every selected value is a unique
 * string or number suitable for use as an object key.
 *
 * @param {Object[]} items - Objects to index.
 * @param {string} key - Property whose value becomes the object key.
 * @returns {Object} - Object mapping selected values to their source objects.
 *
 * @example
 * indexBy([{ id: 'a', score: 7 }, { id: 'b', score: 9 }], 'id')
 * // => { a: { id: 'a', score: 7 }, b: { id: 'b', score: 9 } }
 */
export function indexBy(items, key) {
  // TODO: complete me
  return {};
}

/**
 * Encodes consecutive repeated characters using the character followed by its
 * run length. Runs of length one must also include the number 1. Return an
 * empty string for an empty input string.
 *
 * @param {string} str - String to encode.
 * @returns {string} - Run-length encoded string.
 *
 * @example
 * runLengthEncode('aaabbcaaaa') // => 'a3b2c1a4'
 */
export function runLengthEncode(str) {
  // TODO: complete me
  return "";
}
