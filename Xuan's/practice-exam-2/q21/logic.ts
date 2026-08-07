/**
 * The backend implementation below has already been completed for you.
 * DO NOT make any modifications to this file.
 */
import { BicycleDataStore, BicycleDetails, BicycleId, BicycleList, BicycleType, DataStore, EmptyObject, ErrorObject, getData, } from './dataStore.ts';
const VALID_BICYCLE_TYPES: BicycleType[] = ["Road", "Mountain", "Hybrid"];
export const clear = (): EmptyObject => {
    const data = getData();
    data.bicycles = [];
    data.nextBicycleId = 0;
    return {};
};
export const registerBicycle = (label: string, type: BicycleType, hourlyRate: number): BicycleId | ErrorObject => {
    const data: DataStore = getData();
    if (typeof label !== 'string' || label.length < 2 || label.length > 20) {
        return { error: 'INVALID_BICYCLE_LABEL', message: 'Bicycle label must be between 2 and 20 characters' };
    }
    if (!VALID_BICYCLE_TYPES.includes(type)) {
        return { error: 'INVALID_BICYCLE_TYPE', message: 'Bicycle type is invalid' };
    }
    if (!Number.isFinite(hourlyRate) || hourlyRate < 1 || hourlyRate > 100) {
        return { error: 'INVALID_HOURLY_RATE', message: 'hourlyRate must be between 1 and 100' };
    }
    if (data.bicycles.some(i => i.label === label)) {
        return { error: 'BICYCLE_ALREADY_EXISTS', message: 'A bicycle with this label already exists' };
    }
    const bicycleId = data.nextBicycleId++;
    const newItem: BicycleDataStore = {
        bicycleId,
        label,
        type,
        hourlyRate,
        available: true,
    };
    data.bicycles.push(newItem);
    return { bicycleId };
};
export const listBicyclesByAvailability = (available: boolean | undefined): BicycleList | ErrorObject => {
    const data: DataStore = getData();
    if (typeof available !== 'boolean') {
        return { error: 'INVALID_AVAILABILITY', message: 'available must be true or false' };
    }
    const selected = data.bicycles.filter(i => i.available === available);
    return { bicycles: selected };
};
export const getBicycle = (bicycleId: number): BicycleDetails | ErrorObject => {
    const data: DataStore = getData();
    const item = data.bicycles.find(i => i.bicycleId === bicycleId);
    if (!item) {
        return { error: 'INVALID_BICYCLE_ID', message: 'Invalid bicycleId' };
    }
    return { bicycle: item };
};
export const updateBicycleAvailability = (role: string, bicycleId: number, available: boolean): EmptyObject | ErrorObject => {
    const data: DataStore = getData();
    if (role !== "fleet-manager") {
        return { error: 'INVALID_ROLE', message: 'Only fleet managers can modify bicycles' };
    }
    const item = data.bicycles.find(i => i.bicycleId === bicycleId);
    if (!item) {
        return { error: 'INVALID_BICYCLE_ID', message: 'Invalid bicycleId' };
    }
    if (typeof available !== 'boolean') {
        return { error: 'INVALID_AVAILABILITY', message: 'available must be a boolean' };
    }
    item.available = available;
    return {};
};
export const retireBicycle = (role: string, bicycleId: number, retired: boolean): EmptyObject | ErrorObject => {
    const data: DataStore = getData();
    if (role !== "fleet-manager") {
        return { error: 'INVALID_ROLE', message: 'Only fleet managers can modify bicycles' };
    }
    if (retired !== true) {
        return { error: 'RETIREMENT_CONFIRMATION_REQUIRED', message: 'retired must be true to remove a bicycle' };
    }
    const index = data.bicycles.findIndex(i => i.bicycleId === bicycleId);
    if (index === -1) {
        return { error: 'INVALID_BICYCLE_ID', message: 'Invalid bicycleId' };
    }
    data.bicycles.splice(index, 1);
    return {};
};
