import express from 'express';
import { IRoute } from '../../interfaces';

import SampleRoute from './sample.route';

class ApiRoute implements IRoute {
    public path = '/api';
    public router = express.Router();

    constructor() {
        this.initSubRoutes([new SampleRoute()]);
    }

    public initSubRoutes(routes: { forEach: (arg0: (route: any) => void) => void }) {
        routes.forEach(route => {
            this.router.use(route.path, route.router);
        });
    }
}

export default ApiRoute;
