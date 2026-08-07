export type EmptyObject = Record<string, never>;
export interface ErrorObject {
    error: string;
    message: string;
}
export type BicycleType = "Road" | "Mountain" | "Hybrid";
export interface BicycleId {
    bicycleId: number;
}
export interface Bicycle {
    label: string;
    type: BicycleType;
    hourlyRate: number;
    available: boolean;
}
export interface BicycleDataStore extends BicycleId, Bicycle {
}
export interface BicycleList {
    bicycles: BicycleDataStore[];
}
export interface BicycleDetails {
    bicycle: BicycleDataStore;
}
export interface DataStore {
    bicycles: BicycleDataStore[];
    nextBicycleId: number;
}
const dataStore: DataStore = {
    bicycles: [],
    nextBicycleId: 0,
};
export const getData = (): DataStore => dataStore;
