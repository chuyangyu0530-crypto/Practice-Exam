let pets = [];

/**
 * Find a pet with the given name in the pet register.
 * @param {string} petName - The name of the pet.
 * @returns {?} If the pet exists, it returns the pet object that includes
 * petId(number), name(string), species(string) and vaccinated(boolean).
 */
export function findPet(petName: number) {
  return pets.find((pet) => pet.name === petName);
}

/**
 * Register a new pet in the pet register.
 * @param {Pet Object} pet - The pet details object.
 * - The pet details object includes name(string) and species(string) values.
 * @returns {petId Object} Returns the petId as a number in an object, or an
 * error(string) in an object when the pet is already registered.
 */
export function registerPet(pet): boolean {
  if (findPet(pet.name)) {
    return { error: 'Pet already registered' };
  }

  const petId = pets.length + 1;
  const newPet = {
    petId: petId,
    name: pet.name,
    species: pet.species,
    vaccinated: false
  };
  pets.push(newPet);
  return { petId: petId };
}

/**
 * Update the vaccination status of a pet.
 * @param {number} petId - The id of the pet.
 * @param {boolean} vaccinated - The vaccination status to be updated.
 * @returns {Object} Returns an empty object, or an object containing an
 * error(string) when the pet id is invalid.
 */
export function updateVaccination(petId, vaccinated) {
  const pet = pets.find((item) => item.petId === petId);
  if (!pet) {
    return { error: 'Invalid pet Id' };
  }
  pet.vaccinated = vaccinated;
  return {};
}

/**
 * Clear the pet register.
 * @returns {Object} An empty object.
 */
export function clear() {
  pets = [];
  return {};
}
