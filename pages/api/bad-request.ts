import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedData } from '../../database';
import { Entry } from '../../models';

type Data = {
  message: string | string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message = 'Bad request' } = req.query;

  res.status(400).json({ message });
}
