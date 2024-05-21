import { lstat } from "fs";
import { NextRequest } from "next/server";
import z from 'zod';

// Define request body schemas
const requestBodySchemas: Record<string, z.ZodObject<any>> = {
  "/api/dbTests/createUserInfo": z.object({
    UserId: z.number(),
    firstName: z.string(),
    lastName: z.string(),
  })
};

// endpoints to ignore
const ignoredEndpoints: string[] = [
  "/api/ping", 
  "/api/dbTests/getUsers"
];

// Middleware function to validate request body
export default async function bodyValidationMiddleware(req: NextRequest, endpoint: string): Promise<Error|null> {
  // Check if endpoint has a defined HTTP body schema
  if (!Object.keys(requestBodySchemas).includes(endpoint)&& !ignoredEndpoints.includes(endpoint)) {
    return new Error("Endpoint does not have a defined HTTP body schema");
  }
  if (ignoredEndpoints.includes(endpoint)) // if the schema for the endpoint is null, skip it
    return null;
  // Get the expected schema for the endpoint
  const schema = requestBodySchemas[endpoint];

  // Parse the request body according to the schema
  try {
    const body = await req.json();
    schema.parse(body); // Throws an error if validation fails
    return null; // Validation successful
  } catch (error) {
    // return validation error
    const err = error as Error;
    return new Error("Bad request: " + err.message);
  }
}