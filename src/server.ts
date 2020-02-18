import App from './app';

import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import env from './configs/environment';

import { loggerMiddleware as httpLoggerMiddleware } from './middlewares';

import { AuthRoute } from './routes/auth';
import { ApiRoutes } from './routes/api';

const app = new App({
    port: env.PORT,
    routes: [
        new ApiRoutes(),
        new AuthRoute(),
    ],
    middleWares: [
        cors(),
        helmet(),
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        httpLoggerMiddleware
    ]
});

app.listen();
