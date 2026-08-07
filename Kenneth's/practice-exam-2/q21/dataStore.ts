export type EmptyObject = Record<string, never>;
export interface ErrorObject {
    error: string;
    message: string;
}
export type AnimalSpecies = "Dog" | "Cat" | "Rabbit";
export interface AnimalId {
    animalId: number;
}
export interface Animal {
    name: string;
    species: AnimalSpecies;
    age: number;
    adopted: boolean;
}
export interface AnimalDataStore extends AnimalId, Animal {
}
export interface AnimalList {
    animals: AnimalDataStore[];
}
export interface AnimalDetails {
    animal: AnimalDataStore;
}
export interface DataStore {
    animals: AnimalDataStore[];
    nextAnimalId: number;
}
const dataStore: DataStore = {
    animals: [],
    nextAnimalId: 0,
};
export const getData = (): DataStore => dataStore;
