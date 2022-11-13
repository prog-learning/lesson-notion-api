import { createComment, getComments } from './../../src/libs/notion/comments';
import { createPage, updatePage } from '../../src/libs/notion/pages';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getPage } from '../../src/libs/notion/pages';

const pageId = '15cfc82e9fed492aa87ba9e47570f4c3';
const blockId = 'e23a63fc8ffa407daf5fbb96cf27926a';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      const getResponse = await getComments(blockId);
      res.status(200).json(getResponse);
      break;
    case 'POST':
      const postResponse = await createComment(pageId);
      res.status(200).json(postResponse);
      break;

    default:
      break;
  }

  res.end();
}
