import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '@/server/objects'
 
type ResponseData = {
  product: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    let {productName, productPrice} = req.body;

    const newProduct = await Product.create({
      name: productName,
      price: productPrice
    });

    res.status(200).json({ product: newProduct.toJSON() });
  } else {
    res.status(405).end();
  }
}