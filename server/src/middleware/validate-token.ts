import { Request, RequestHandler } from "express";
import { authService } from "../services/auth-service";
import pizzaError from "../errors/pizzaError";

const extractToken = (req: Request) => {
    const authHeader = req.header('Authorization');
    if (authHeader && authHeader.length > 0) {
        return authHeader;
    }
    throw new pizzaError(401, 'Authorization header is missing');
};

const validateToken: RequestHandler = (req, _, next) => {
    try {
        const token = extractToken(req);
        const payload = authService.validateJWT(token);
        req.payload = payload
        next();
    } catch (e) {
        next(e);
    }
}
export { validateToken, extractToken }