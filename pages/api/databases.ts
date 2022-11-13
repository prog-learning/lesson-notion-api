import {
  getDatabase,
  getDatabaseContents,
} from '../../src/libs/notion/databases';
import type { NextApiRequest, NextApiResponse } from 'next';

const databaseId = process.env.NOTION_DATABASE_ID || '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      const getResponse = await getDatabase(databaseId);
      res.status(200).json(getResponse);
      break;
    case 'POST':
      const postResponse = await getDatabaseContents(databaseId);
      res.status(200).json(postResponse);
      break;
    default:
      break;
  }

  res.end();
}
