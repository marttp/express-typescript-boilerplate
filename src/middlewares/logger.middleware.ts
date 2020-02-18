import { Request, Response, NextFunction } from 'express'

export default function (req: Request, resp: Response, next: NextFunction) {
    console.log('Request logged:', req.method, req.path)
    next()
}