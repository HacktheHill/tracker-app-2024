import type { NextApiRequest, NextApiResponse } from 'next'
import { User as UserModel } from '@/server/models/User'
 
type ResponseData = {
  User?: Record<string, any>;
  error?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    try {
      // Assuming you're sending user data in the request body
      const userData = req.body;

      // Create a new user with the provided data
      const newUser = await UserModel.create(userData);

      // Send back the created user
      res.status(200).json({ User: newUser.toJSON() });
    } catch (error) {
      // Handle errors appropriately
      console.error('Error creating user:', error); // Log the error for debugging
      res.status(500).json({ error: 'Internal Server Error' }); // Send a generic error response
    }
  } else {
    // Method not allowed
    res.status(405).end();
  }  
}