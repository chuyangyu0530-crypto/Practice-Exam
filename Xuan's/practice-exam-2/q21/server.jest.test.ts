import request from 'sync-request-curl';
const PORT = Number(process.env.PORT ?? '49154');
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
const httpCreateBicycle = (label: string, type: string, hourlyRate: number): HttpResult => requestJson('POST', '/bicycle/register', { body: { label, type, hourlyRate } });
const httpListBicycles = (available: string | boolean | number): HttpResult => requestJson('GET', '/bicycle/list', { query: { available } });
const httpGetBicycle = (bicycleId: number): HttpResult => requestJson('GET', `/bicycle/${bicycleId}`);
const httpUpdateBicycle = (auth: string, bicycleId: number, available: boolean): HttpResult => requestJson('PUT', `/bicycle/${bicycleId}`, { body: { available }, headers: { 'role': String(auth) } });
const httpDeleteBicycle = (auth: string, bicycleId: number, retired: boolean): HttpResult => requestJson('DELETE', `/bicycle/${bicycleId}`, { headers: { 'role': String(auth) }, query: { retired } });
beforeEach(() => {
    expect(httpClear()).toEqual({ statusCode: 200, body: {} });
});
describe('Bicycle Fleet API', () => {
    test('clear route is available', () => {
        expect(httpClear()).toEqual({ statusCode: 200, body: {} });
    });
    test('create route forwards JSON body and returns the generated id', () => {
        expect(httpCreateBicycle("BIKE-14", "Road", 12.5)).toEqual({
            statusCode: 200,
            body: { bicycleId: 0 },
        });
    });
    test('create route returns a 400 error for a duplicate', () => {
        httpCreateBicycle("BIKE-14", "Road", 12.5);
        const result = httpCreateBicycle("BIKE-14", "Road", 12.5);
        expect(result.statusCode).toBe(400);
        expect(result.body.error).toBe('BICYCLE_ALREADY_EXISTS');
    });
    test('list route parses its query parameter', () => {
        httpCreateBicycle("BIKE-14", "Road", 12.5);
        httpCreateBicycle("BIKE-27", "Hybrid", 18);
        httpUpdateBicycle("fleet-manager", 1, false);
        const result = httpListBicycles(false);
        expect(result.statusCode).toBe(200);
        expect(result.body.bicycles).toHaveLength(1);
        expect(result.body.bicycles[0].bicycleId).toBe(1);
    });
    test('list route returns 400 for an invalid query value', () => {
        const result = httpListBicycles("maybe");
        expect(result.statusCode).toBe(400);
        expect(result.body.error).toBe('INVALID_AVAILABILITY');
    });
    test('get route parses the path parameter', () => {
        httpCreateBicycle("BIKE-14", "Road", 12.5);
        const result = httpGetBicycle(0);
        expect(result.statusCode).toBe(200);
        expect(result.body.bicycle.bicycleId).toBe(0);
    });
    test('update route rejects an invalid authorization header', () => {
        httpCreateBicycle("BIKE-14", "Road", 12.5);
        const result = httpUpdateBicycle("rider", 0, false);
        expect(result.statusCode).toBe(403);
        expect(result.body.error).toBe('INVALID_ROLE');
    });
    test('update route uses header, path and body inputs', () => {
        httpCreateBicycle("BIKE-14", "Road", 12.5);
        expect(httpUpdateBicycle("fleet-manager", 0, false)).toEqual({
            statusCode: 200,
            body: {},
        });
        expect(httpGetBicycle(0).body.bicycle.available).toBe(false);
    });
    test('delete rejects an invalid confirmation query', () => {
        httpCreateBicycle("BIKE-14", "Road", 12.5);
        const result = httpDeleteBicycle("fleet-manager", 0, false);
        expect(result.statusCode).toBe(400);
        expect(result.body.error).toBe('RETIREMENT_CONFIRMATION_REQUIRED');
    });
    test('delete route removes the requested record', () => {
        httpCreateBicycle("BIKE-14", "Road", 12.5);
        expect(httpDeleteBicycle("fleet-manager", 0, true)).toEqual({
            statusCode: 200,
            body: {},
        });
        const result = httpGetBicycle(0);
        expect(result.statusCode).toBe(400);
        expect(result.body.error).toBe('INVALID_BICYCLE_ID');
    });
});
