import {
  findPet,
  registerPet,
  updateVaccination,
  clear,
} from './pets';


describe('pets types and behaviour', () => {
  beforeEach(() => {
    clear();
  });
  
  test('adds the first item and returns id 1', () => {
    expect(registerPet({ name: 'Luna', species: 'Cat' })).toEqual({ petId: 1 });
  });

  test('finds an added item with its generated fields', () => {
    registerPet({ name: 'Luna', species: 'Cat' });
    expect(findPet('Luna')).toEqual({ petId: 1, name: 'Luna', species: 'Cat', vaccinated: false });
  });

  test('returns undefined when the item does not exist', () => {
    expect(findPet('Luna')).toBeUndefined();
  });

  test('increments ids for later items', () => {
    expect(registerPet({ name: 'Luna', species: 'Cat' })).toEqual({ petId: 1 });
    expect(registerPet({ name: 'Milo', species: 'Dog' })).toEqual({ petId: 2 });
  });

  test('rejects a duplicate item without consuming an id', () => {
    registerPet({ name: 'Luna', species: 'Cat' });
    expect(registerPet({ name: 'Luna', species: 'Cat' })).toEqual({
      error: 'Pet already registered',
    });
    expect(registerPet({ name: 'Milo', species: 'Dog' })).toEqual({ petId: 2 });
  });

  test('updates an existing item', () => {
    registerPet({ name: 'Luna', species: 'Cat' });
    expect(updateVaccination(1, true)).toEqual({});
    expect(findPet('Luna')).toEqual({ petId: 1, name: 'Luna', species: 'Cat', vaccinated: true });
  });

  test('returns the required error for an invalid id', () => {
    expect(updateVaccination(999, true)).toEqual({
      error: 'Invalid pet Id',
    });
  });

  test('clear removes all items and resets id generation', () => {
    registerPet({ name: 'Luna', species: 'Cat' });
    expect(clear()).toEqual({});
    expect(findPet('Luna')).toBeUndefined();
    expect(registerPet({ name: 'Milo', species: 'Dog' })).toEqual({ petId: 1 });
    expect(findPet('Milo')).toBeDefined();
  });
});
