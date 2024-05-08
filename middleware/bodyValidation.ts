import { NextRequest } from "next/server";
import z from 'zod';

// endpoints that require a specific body schema
const requestBodySchemas: Record<string, z.ZodObject<any>> = {
  "/api/dbTests/createProduct": z.object({
    productName: z.string().min(1),
    productPrice: z.number()
  })
};

// endpoints to ignore
const ignoredEndpoints: string[] = [
  "/api/ping", 
  "/api/dbTests/getProducts"
];

export default async function bodyValidationMiddleware(req: NextRequest, endpoint: string): Promise<Error|null> {
  if (!Object.keys(requestBodySchemas).includes(endpoint) && !ignoredEndpoints.includes(endpoint)) // if you havent defined a body schema for the endpoint, error
    return new Error("endpoint does not have a defined HTTP body schema");

  if (ignoredEndpoints.includes(endpoint)) // if the schema for the endpoint is null, skip it
    return null;

  let body = await req.json();
  let validBody = requestBodySchemas[endpoint].safeParse(body); // check if the body matches the endpoint's schema
  if (!validBody.success) {
    console.log(validBody.error.message);
    return new Error("bad request");
  }
  return null
}