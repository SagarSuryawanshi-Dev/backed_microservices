import { type ZodSchema, ZodError } from "zod/v3";
import type { Request, Response, NextFunction } from "express";

export enum validationSource {
  BODY = "body",
  QUERY = "query",
  HEADER = "headers",
  PARAMS = "params",
}
const validateRequest = (schema: ZodSchema, source: validationSource) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = schema.parse(req[source]);
      Object.assign(req[source],data);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const messages = err.errors.map((e) => e.message).join(",");
        return next(new BadRequestError(messages));
      }
      next(err);
    }
  };
};

export default validateRequest;
