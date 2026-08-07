import {
  findBook,
  addBook,
  updateAvailability,
  clear,
} from './library';

describe('library types and behaviour', () => {
  beforeEach(() => {
    clear();
  });

  test('adds the first item and returns id 1', () => {
    expect(addBook({ title: 'Dune', author: 'Frank Herbert' })).toEqual({ bookId: 1 });
  });

  test('finds an added item with its generated fields', () => {
    addBook({ title: 'Dune', author: 'Frank Herbert' });
    expect(findBook('Dune')).toEqual({ bookId: 1, title: 'Dune', author: 'Frank Herbert', available: true });
  });

  test('returns undefined when the item does not exist', () => {
    expect(findBook('Dune')).toBeUndefined();
  });

  test('increments ids for later items', () => {
    expect(addBook({ title: 'Dune', author: 'Frank Herbert' })).toEqual({ bookId: 1 });
    expect(addBook({ title: 'Neuromancer', author: 'William Gibson' })).toEqual({ bookId: 2 });
  });

  test('rejects a duplicate item without consuming an id', () => {
    addBook({ title: 'Dune', author: 'Frank Herbert' });
    expect(addBook({ title: 'Dune', author: 'Frank Herbert' })).toEqual({
      error: 'Book already exists',
    });
    expect(addBook({ title: 'Neuromancer', author: 'William Gibson' })).toEqual({ bookId: 2 });
  });

  test('updates an existing item', () => {
    addBook({ title: 'Dune', author: 'Frank Herbert' });
    expect(updateAvailability(1, false)).toEqual({});
    expect(findBook('Dune')).toEqual({ bookId: 1, title: 'Dune', author: 'Frank Herbert', available: false });
  });

  test('returns the required error for an invalid id', () => {
    expect(updateAvailability(999, false)).toEqual({
      error: 'Invalid book Id',
    });
  });

  test('clear removes all items and resets id generation', () => {
    addBook({ title: 'Dune', author: 'Frank Herbert' });
    expect(clear()).toEqual({});
    expect(findBook('Dune')).toBeUndefined();
    expect(addBook({ title: 'Neuromancer', author: 'William Gibson' })).toEqual({ bookId: 1 });
    expect(findBook('Neuromancer')).toBeDefined();
  });
});
