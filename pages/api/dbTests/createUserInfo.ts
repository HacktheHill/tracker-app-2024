import type { NextApiRequest, NextApiResponse } from 'next';
import { UserInfo } from '@/server/models/UserInfo';
import { User } from '@/server/models/User';

type ResponseData = {
  UserInfo?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    try {

      // Assuming you're sending user data in the request body
      const userData = req.body;

      //create the UserInfo instance
      const newUserInfo = await UserInfo.create(userData);

      // Send back the created UserInfo
      res.status(200).json({ UserInfo: newUserInfo.toJSON() });
    } catch (error) {
      // Handle errors appropriately
      console.error('Error creating UserInfo:', error); // Log the error for debugging
      res.status(500).json({ error: 'Internal Server Error' }); // Send a generic error response
    }
  } else {
    // Method not allowed
    res.status(405).end();
  }
}
