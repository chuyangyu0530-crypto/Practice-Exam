import express, { json, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { port, url } from './config.json';
import { shouldIWatchMovie } from './movie';

///////////////////////////////////////////////////////////////////////////////

const PORT: number = parseInt(process.env.PORT || port);
const HOST: string = process.env.IP || '127.0.0.1';

const app = express();

app.use(cors());
app.use(json());
app.use(morgan('dev'));

///////////////////////////////////////////////////////////////////////////////

app.post('/movie/decide', (req: Request, res: Response) => {
    const { decisionFactors } = req.body;
    const result = shouldIWatchMovie(decisionFactors);

    res.json(result);
});

///////////////////////////////////////////////////////////////////////////////

const server = app.listen(PORT, HOST, () => {
    console.log(`Express Server started and awaiting requests at the URL: '${url}:${PORT}'`);
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Shutting down server gracefully.');
        process.exit();
    });
});
