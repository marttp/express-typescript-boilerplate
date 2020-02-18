import express from 'express';
import { Application } from 'express';

class App {
    public app: Application;
    public port: number;

    constructor(appInit: { port: number; middleWares: any; routes: any }) {
        this.app = express();
        this.port = appInit.port;
        this.middlewares(appInit.middleWares);
        this.routes(appInit.routes);
        // this.assets()
        // this.template()
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }

    private routes(routes: { forEach: (arg0: (route: any) => void) => void }) {
        routes.forEach(route => {
            this.app.use(route.path, route.router);
        });
    }

    // private assets() {
    //     this.app.use(express.static('public'))
    //     this.app.use(express.static('views'))
    // }

    // private template() {
    //     this.app.set('view engine', 'pug')
    // }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

export default App;
