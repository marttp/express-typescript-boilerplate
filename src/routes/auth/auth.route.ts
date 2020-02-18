import * as express from 'express';
import { Request, Response } from 'express';
import { IRoute } from '../../interfaces';

class AuthRoute implements IRoute {
    public path = '/auth';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.post('/', (req: Request, res: Response) => {
            res.status(200).json({
                message: 'Test data'
            });
        });
    }
}

export default AuthRoute;
