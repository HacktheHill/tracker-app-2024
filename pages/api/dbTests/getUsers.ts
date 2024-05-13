import type { NextApiRequest, NextApiResponse } from 'next';
import { UserInfo } from '@/server/models/UserInfo'; // Assuming you have imported both User and UserInfo models
import { User } from '@/server/models/User';
import { Model } from 'sequelize';

type ResponseData = {
  userInstances: Array<Model<string, any>> | null;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'GET') {
    try {
      // Perform a join operation to include UserInfo related to each User
      const users = await User.findAll({
        include: [{ model: UserInfo }],
      });

      res.status(200).json({ userInstances: users });
    } catch (error) {
      console.error('Error fetching users:', error);
      // res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}