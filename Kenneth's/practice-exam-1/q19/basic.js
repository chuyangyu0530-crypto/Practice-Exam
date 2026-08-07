// BASIC JAVASCRIPT QUESTION 5 (10 marks)
// Suggested weighting: 2 + 3 + 2 + 3 marks
// DO NOT MODIFY THE FUNCTION DEFINITIONS

/**
 * Returns a copy of an array without the element at the specified index.
 * For an invalid index, return a shallow copy of the original array.
 *
 * @param {any[]} arr - Input array.
 * @param {number} index - Zero-based index to remove.
 * @returns {any[]} - New array without the selected element.
 *
 * @example
 * removeAt(['a', 'b', 'c'], 1) // => ['a', 'c']
 */
export function removeAt(arr, index) {
  // TODO: complete me
  return [];
}

/**
 * Groups strings by their length.
 * Object keys should be string lengths and each array should preserve the input
 * order of its words.
 *
 * @param {string[]} words - Array of strings.
 * @returns {Object.<string, string[]>} - Words grouped by length.
 *
 * @example
 * groupByLength(['cat', 'a', 'dog', 'to'])
 * // => { 1: ['a'], 2: ['to'], 3: ['cat', 'dog'] }
 */
export function groupByLength(words) {
  // TODO: complete me
  return {};
}

/**
 * Counts how many own properties in an object have a value strictly equal to
 * the target value.
 *
 * @param {Object} obj - Object whose values will be checked.
 * @param {any} value - Target value.
 * @returns {number} - Number of matching property values.
 *
 * @example
 * countValue({ a: 1, b: 2, c: 1 }, 1) // => 2
 */
export function countValue(obj, value) {
  // TODO: complete me
  return 0;
}

/**
 * Converts a phrase to camel case.
 * Words may be separated by spaces, hyphens, or underscores. Convert every word
 * to lowercase first, then capitalize every word after the first.
 *
 * @param {string} str - Input phrase.
 * @returns {string} - Camel-case string.
 *
 * @example
 * toCamelCase('HELLO-world_example') // => 'helloWorldExample'
 */
export function toCamelCase(str) {
  // TODO: complete me
  return "";
}
