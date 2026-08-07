## Animal Shelter API — Implement the Express Routes (10 marks)

### Context

Manage animals currently registered at a small shelter.

### Task

Complete `server.ts` by implementing the five missing routes described in `swagger.yaml`.
The `DELETE /clear` route is already complete. The backend logic and data store are also complete and must not be modified.

Your routes must:

- call the matching exported function in `logic.ts`;
- obtain values from the JSON body, request headers, path parameters, and query parameters exactly as specified by `swagger.yaml`;
- convert numeric path, header, and query values to numbers before calling the logic layer;
- convert boolean query values from the strings `"true"` and `"false"` where required;
- return successful results with HTTP status `200`;
- return logic errors with HTTP status `400`, except `INVALID_STAFF_TOKEN`, which must use HTTP status `403`.

The list route uses the `species` query parameter. The delete route also consumes the `reason` query parameter.

### Files

- `server.ts` — **the only file students should edit**
- `swagger.yaml` — complete API contract
- `logic.ts` — completed business logic
- `dataStore.ts` — completed in-memory data store
- `server.jest.test.ts` — HTTP tests using `sync-request`
- `config.json` — port and base URL configuration

Marks are divided evenly across the five missing routes.

### Testing

As these tests are using a server, if you wish to test your server routes, remember to do the following:
1. Start your server in one terminal - `npm run start`
2. While the server is running, open another terminal and run `npm run test`

After you have finished, remember to shutdown your server.