import express, { Request, Response } from 'express';
import { IRoute } from '../../interfaces';

class SampleRoute implements IRoute {
    public path = '/sample';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get('/', (req: Request, res: Response) => {
            res.status(200).json({
                message: 'Hello World'
            });
        });
    }
}

export default SampleRoute;
