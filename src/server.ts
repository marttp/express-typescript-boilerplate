import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const PORT = 8000;

// Setup middlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define endpoints
app.get('/', (req: Request, res: Response) => res.send('Hello World Expressjs in Typescript'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
