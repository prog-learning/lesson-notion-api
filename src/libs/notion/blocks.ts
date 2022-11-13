import { notion } from './client';

/**
 * Blockの取得
 */
export const getBlock = async (blockId: string) => {
  const response = await notion.blocks.retrieve({
    block_id: blockId,
  });

  return response;
};

/**
 * Blockの編集
 */
export const updateBlock = async (blockId: string) => {
  const response = await notion.blocks.update({
    block_id: blockId,
    heading_2: {
      rich_text: [
        {
          text: {
            content: 'Lacinato kale',
          },
          annotations: {
            color: 'green',
          },
        },
      ],
    },
  });

  return response;
};

/**
 * Blockの中のchildrenを取得
 */
export const getNestedBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });

  return response;
};

/**
 * childrenにBlockを追加
 */
export const appendBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.append({
    block_id: blockId,
    /* 複数追加可能 */
    children: [
      {
        heading_2: {
          rich_text: [
            {
              text: {
                content: 'Lacinato kale',
              },
            },
          ],
        },
      },
      {
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
                link: {
                  url: 'https://en.wikipedia.org/wiki/Lacinato_kale',
                },
              },
            },
          ],
        },
      },
    ],
  });

  return response;
};

/**
 * Blockを削除
 */
export const deleteBlock = async (blockId: string) => {
  const response = await notion.blocks.delete({
    block_id: blockId,
  });

  return response;
};
