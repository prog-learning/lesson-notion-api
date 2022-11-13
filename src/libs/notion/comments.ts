import { notion } from './client';

/**
 * BlockのCommentsを取得
 * リアクションの絵文字は取得できない
 */
export const getComments = async (blockId: string) => {
  const response = await notion.comments.list({ block_id: blockId });

  return response;
};

/**
 * BlockにCommentsを追加
 */
export const createComment = async (pageId: string) => {
  const discussionId = '567bc771-d63c-4ba3-8539-d69d76a198e6';
  const response = await notion.comments.create({
    parent: {
      page_id: pageId, // 親のpageもしくはblockのid
    },
    // discussion_id: 'discussionId', // もしくは、コメント箇所ごとに割り振られるdiscussion_id
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
