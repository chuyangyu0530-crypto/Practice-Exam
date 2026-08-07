import express, { json, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './config.json' with { type: 'json' };
import { clear, registerBicycle, listBicyclesByAvailability, getBicycle, updateBicycleAvailability, retireBicycle } from './logic.ts';
const PORT: number = Number(process.env.PORT ?? config.port);
const HOST: string = process.env.IP ?? '127.0.0.1';
const app = express();
app.use(cors());
app.use(json());
app.use(morgan('dev'));
// ========================================================================= //
// YOUR ROUTES SHOULD BE DEFINED BELOW THIS DIVIDER
// ========================================================================= //
app.delete('/clear', (req: Request, res: Response) => {
    res.json(clear());
});
// TODO: implement FIVE remaining routes given in swagger.yaml
// ========================================================================= //
// YOUR ROUTES SHOULD BE DEFINED ABOVE THIS DIVIDER
// ========================================================================= //
app.use((req: Request, res: Response) => {
    const error = `
            404 Not found - This could be because:
              0. You have defined routes below (not above) this middleware in server.ts
              1. You have not implemented the route ${req.method} ${req.path}
              2. There is a typo in either your test or server
              3. You have not restarted the server after changing server.ts
              4. You have forgotten a leading slash in a route
          `;
    res.status(404).json({ error });
});
const server = app.listen(PORT, HOST, () => {
    console.log(`Express Server started and awaiting requests at '${config.url}:${PORT}'`);
});
process.on('SIGINT', () => {
    server.close(() => {
        console.log('Shutting down server gracefully.');
        process.exit();
    });
});
