import request from 'sync-request-curl';
const PORT = Number(process.env.PORT ?? '49155');
const BASE_URL = `http://127.0.0.1:${PORT}`;
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
interface HttpOptions {
    body?: unknown;
    query?: Record<string, string | number | boolean>;
    headers?: Record<string, string>;
}
interface HttpResult {
    statusCode: number;
    body: any;
}
const requestJson = (method: HttpMethod, path: string, options: HttpOptions = {}): HttpResult => {
    const requestOptions: any = { timeout: 5000 };
    if (options.body !== undefined)
        requestOptions.json = options.body;
    if (options.query !== undefined)
        requestOptions.qs = options.query;
    if (options.headers !== undefined)
        requestOptions.headers = options.headers;
    const response = request(method, `${BASE_URL}${path}`, requestOptions);
    return {
        statusCode: response.statusCode,
        body: JSON.parse(response.body.toString('utf8')),
    };
};
// HTTP wrapper functions used by the tests.
const httpClear = (): HttpResult => requestJson('DELETE', '/clear');
const httpCreateAnimal = (name: string, species: string, age: number): HttpResult => requestJson('POST', '/animal/add', { body: { name, species, age } });
const httpListAnimals = (species: string | boolean | number): HttpResult => requestJson('GET', '/animal/search', { query: { species } });
const httpGetAnimal = (animalId: number): HttpResult => requestJson('GET', `/animal/${animalId}`);
const httpUpdateAnimal = (auth: string, animalId: number, adopted: boolean): HttpResult => requestJson('PATCH', `/animal/${animalId}`, { body: { adopted }, headers: { 'staff-token': String(auth) } });
const httpDeleteAnimal = (auth: string, animalId: number, reason: string): HttpResult => requestJson('DELETE', `/animal/${animalId}`, { headers: { 'staff-token': String(auth) }, query: { reason } });
beforeEach(() => {
    expect(httpClear()).toEqual({ statusCode: 200, body: {} });
});
describe('Animal Shelter API', () => {
    test('clear route is available', () => {
        expect(httpClear()).toEqual({ statusCode: 200, body: {} });
    });
    test('create route forwards JSON body and returns the generated id', () => {
        expect(httpCreateAnimal("Milo", "Dog", 4)).toEqual({
            statusCode: 200,
            body: { animalId: 0 },
        });
    });
    test('create route returns a 400 error for a duplicate', () => {
        httpCreateAnimal("Milo", "Dog", 4);
        const result = httpCreateAnimal("Milo", "Dog", 4);
        expect(result.statusCode).toBe(400);
        expect(result.body.error).toBe('ANIMAL_ALREADY_EXISTS');
    });
    test('list route parses its query parameter', () => {
        httpCreateAnimal("Milo", "Dog", 4);
        httpCreateAnimal("Luna", "Cat", 2);
        const result = httpListAnimals("Dog");
        expect(result.statusCode).toBe(200);
        expect(result.body.animals).toHaveLength(1);
        expect(result.body.animals[0].animalId).toBe(0);
    });
    test('list route returns 400 for an invalid query value', () => {
        const result = httpListAnimals("Bird");
        expect(result.statusCode).toBe(400);
        expect(result.body.error).toBe('INVALID_ANIMAL_SPECIES');
    });
    test('get route parses the path parameter', () => {
        httpCreateAnimal("Milo", "Dog", 4);
        const result = httpGetAnimal(0);
        expect(result.statusCode).toBe(200);
        expect(result.body.animal.animalId).toBe(0);
    });
    test('update route rejects an invalid authorization header', () => {
        httpCreateAnimal("Milo", "Dog", 4);
        const result = httpUpdateAnimal("visitor", 0, true);
        expect(result.statusCode).toBe(403);
        expect(result.body.error).toBe('INVALID_STAFF_TOKEN');
    });
    test('update route uses header, path and body inputs', () => {
        httpCreateAnimal("Milo", "Dog", 4);
        expect(httpUpdateAnimal("shelter-staff", 0, true)).toEqual({
            statusCode: 200,
            body: {},
        });
        expect(httpGetAnimal(0).body.animal.adopted).toBe(true);
    });
    test('delete rejects an invalid confirmation query', () => {
        httpCreateAnimal("Milo", "Dog", 4);
        const result = httpDeleteAnimal("shelter-staff", 0, "");
        expect(result.statusCode).toBe(400);
        expect(result.body.error).toBe('INVALID_REMOVAL_REASON');
    });
    test('delete route removes the requested record', () => {
        httpCreateAnimal("Milo", "Dog", 4);
        expect(httpDeleteAnimal("shelter-staff", 0, "transferred")).toEqual({
            statusCode: 200,
            body: {},
        });
        const result = httpGetAnimal(0);
        expect(result.statusCode).toBe(400);
        expect(result.body.error).toBe('INVALID_ANIMAL_ID');
    });
});
