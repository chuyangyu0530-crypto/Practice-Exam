// ============================================================================ //
// Implement HTTP Tests for the '/icecream/decide' route for 100% statement coverage.
// ============================================================================ //

import request from 'sync-request-curl';
import { port, url } from './config.json';

const SERVER_URL = `${url}:${port}`;

// You may want to write a helper function to manage route input and output

describe('shouldIGetIceCream tests', () => {
    test.todo('Write at most 5 tests to get full server route coverage and statement logic coverage');
});
