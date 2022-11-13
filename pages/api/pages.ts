import { createPage, updatePage } from './../../src/libs/notion/pages';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getPage } from '../../src/libs/notion/pages';

const pageId = '15cfc82e9fed492aa87ba9e47570f4c3';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      const getResponse = await getPage(pageId);
      res.status(200).json(getResponse);
      break;
    case 'POST':
      const postResponse = await createPage(pageId);
      res.status(200).json(postResponse);
      break;
    case 'PUT':
      const putResponse = await updatePage(pageId);
      res.status(200).json(putResponse);
      break;

    default:
      break;
  }

  res.status(400).json({ message: 'Bad Request' });
}
