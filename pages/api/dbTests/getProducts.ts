import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../../server/objects'
import { Model } from 'sequelize';

type ResponseData = {
  products: Model<string, any>[]
}
 
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'GET') {
    let products = await Product.findAll();
    res.status(200).json({ products: products });
  } else {
    res.status(405).end();
  }
}