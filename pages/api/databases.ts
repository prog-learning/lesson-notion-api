import { getDatabase } from '../../src/libs/notion/databases';
import type { NextApiRequest, NextApiResponse } from 'next';

const databaseId = process.env.NOTION_DATABASE_ID || '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const response = await getDatabase(databaseId);

  res.status(200).json(response);
}
