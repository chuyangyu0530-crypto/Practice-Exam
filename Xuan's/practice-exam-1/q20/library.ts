let books = [];

/**
 * Find a book with the given title in the library catalogue.
 * @param {string} title - The title of the book.
 * @returns {?} If the book exists, it returns the book object that includes
 * bookId(number), title(string), author(string) and available(boolean).
 */
export function findBook(title: number) {
  return books.find((book) => book.title === title);
}

/**
 * Add a new book to the library catalogue.
 * @param {Book Object} book - The book details object.
 * - The book details object includes title(string) and author(string) values.
 * @returns {bookId Object} Returns the bookId as a number in an object, or an
 * error(string) in an object when the book already exists.
 */
export function addBook(book): string {
  if (findBook(book.title)) {
    return { error: 'Book already exists' };
  }

  const bookId = books.length + 1;
  const newBook = {
    bookId: bookId,
    title: book.title,
    author: book.author,
    available: true
  };
  books.push(newBook);
  return { bookId: bookId };
}

/**
 * Update the availability status of a book.
 * @param {number} bookId - The id of the book.
 * @param {boolean} available - The availability status to be updated.
 * @returns {Object} Returns an empty object, or an object containing an
 * error(string) when the book id is invalid.
 */
export function updateAvailability(bookId, available) {
  const book = books.find((item) => item.bookId === bookId);
  if (!book) {
    return { error: 'Invalid book Id' };
  }
  book.available = available;
  return {};
}

/**
 * Clear the library catalogue.
 * @returns {Object} An empty object.
 */
export function clear() {
  books = [];
  return {};
}
