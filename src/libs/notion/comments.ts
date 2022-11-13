import { notion } from './client';

/**
 * BlockのCommentsを取得
 */
export const getComments = async (blockId: string) => {
  const response = await notion.comments.list({ block_id: blockId });

  return response;
};

/**
 * BlockにCommentsを追加
 */
export const createComment = async (pageId: string) => {
  const response = await notion.comments.create({
    parent: {
      page_id: pageId, // 親の id
    },
    // discussion_id: 'hoge', // もしくは、discussion_id
    rich_text: [
      {
        text: {
          content: 'Hello world',
        },
      },
    ],
  });

  return response;
};
