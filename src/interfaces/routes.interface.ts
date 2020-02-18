export interface IRoute {
    initRoutes?(): any;
    initSubRoutes?(routes: { forEach: (arg0: (route: any) => void) => void }): any;
}