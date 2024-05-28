import type { NextApiRequest, NextApiResponse } from 'next'
import User from '@/server/models/User';
 
type ResponseData = {
  success?: boolean;
  error?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    try {
      await User.create(req.body);

      res.status(200).json({ success: true });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end();
  }  
}