/**
 * The backend implementation below has already been completed for you.
 * DO NOT make any modifications to this file.
 */
import { AnimalDataStore, AnimalDetails, AnimalId, AnimalList, AnimalSpecies, DataStore, EmptyObject, ErrorObject, getData, } from './dataStore.ts';
const VALID_ANIMAL_SPECIESS: AnimalSpecies[] = ["Dog", "Cat", "Rabbit"];
export const clear = (): EmptyObject => {
    const data = getData();
    data.animals = [];
    data.nextAnimalId = 0;
    return {};
};
export const addAnimal = (name: string, species: AnimalSpecies, age: number): AnimalId | ErrorObject => {
    const data: DataStore = getData();
    if (typeof name !== 'string' || name.length < 2 || name.length > 30) {
        return { error: 'INVALID_ANIMAL_NAME', message: 'Animal name must be between 2 and 30 characters' };
    }
    if (!VALID_ANIMAL_SPECIESS.includes(species)) {
        return { error: 'INVALID_ANIMAL_SPECIES', message: 'Animal species is invalid' };
    }
    if (!Number.isFinite(age) || !Number.isInteger(age) || age < 0 || age > 30) {
        return { error: 'INVALID_ANIMAL_AGE', message: 'Animal age must be an integer between 0 and 30' };
    }
    if (data.animals.some(i => i.name === name && i.species === species)) {
        return { error: 'ANIMAL_ALREADY_EXISTS', message: 'An animal with this name and species already exists' };
    }
    const animalId = data.nextAnimalId++;
    const newItem: AnimalDataStore = {
        animalId,
        name,
        species,
        age,
        adopted: false,
    };
    data.animals.push(newItem);
    return { animalId };
};
export const listAnimalsBySpecies = (species: AnimalSpecies): AnimalList | ErrorObject => {
    const data: DataStore = getData();
    if (!VALID_ANIMAL_SPECIESS.includes(species)) {
        return { error: 'INVALID_ANIMAL_SPECIES', message: 'Animal species is invalid' };
    }
    const selected = data.animals.filter(i => i.species === species);
    return { animals: selected };
};
export const getAnimal = (animalId: number): AnimalDetails | ErrorObject => {
    const data: DataStore = getData();
    const item = data.animals.find(i => i.animalId === animalId);
    if (!item) {
        return { error: 'INVALID_ANIMAL_ID', message: 'Invalid animalId' };
    }
    return { animal: item };
};
export const updateAnimalAdoptionStatus = (staff_token: string, animalId: number, adopted: boolean): EmptyObject | ErrorObject => {
    const data: DataStore = getData();
    if (staff_token !== "shelter-staff") {
        return { error: 'INVALID_STAFF_TOKEN', message: 'Invalid shelter staff token' };
    }
    const item = data.animals.find(i => i.animalId === animalId);
    if (!item) {
        return { error: 'INVALID_ANIMAL_ID', message: 'Invalid animalId' };
    }
    if (typeof adopted !== 'boolean') {
        return { error: 'INVALID_ADOPTION_STATUS', message: 'adopted must be a boolean' };
    }
    item.adopted = adopted;
    return {};
};
export const removeAnimal = (staff_token: string, animalId: number, reason: string): EmptyObject | ErrorObject => {
    const data: DataStore = getData();
    if (staff_token !== "shelter-staff") {
        return { error: 'INVALID_STAFF_TOKEN', message: 'Invalid shelter staff token' };
    }
    if (typeof reason !== 'string' || reason.length < 3) {
        return { error: 'INVALID_REMOVAL_REASON', message: 'A removal reason of at least 3 characters is required' };
    }
    const index = data.animals.findIndex(i => i.animalId === animalId);
    if (index === -1) {
        return { error: 'INVALID_ANIMAL_ID', message: 'Invalid animalId' };
    }
    data.animals.splice(index, 1);
    return {};
};
