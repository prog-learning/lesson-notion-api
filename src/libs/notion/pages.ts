import { notion } from './client';

const parentDatabaseId = process.env.NOTION_DATABASE_ID || '';

/**
 * Pageの取得
 * @param pageId PageまたはBlockのID
 */
export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });

  return response;
};

/**
 * Pageの作成
 */
export const createPage = async (params: any) => {
  const response = await notion.pages.create({
    cover: {
      type: 'external',
      external: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg',
      },
    },
    icon: {
      type: 'emoji',
      emoji: '🥬',
    },
    parent: {
      type: 'database_id',
      database_id: parentDatabaseId,
    },
    properties: {
      /* 保存先に存在しないPropertiesは追加できないので注意 */
      Name: {
        title: [
          {
            text: {
              content: 'Test Page Name',
            },
          },
        ],
      },
      Tags: {
        multi_select: [
          /* 存在しない選択肢を追加するのはOK */
          {
            name: '🥬 Vegetable',
          },
        ],
      },
    },
    /* 内容も追加したければBlockを順に列挙する */
    children: [
      {
        object: 'block',
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
        object: 'block',
        paragraph: {
          rich_text: [
            {
              text: {
                content: 'ケールこのことかな？',
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
 * Pageの編集
 * @param pageId PageまたはBlockのID
 */
export const updatePage = async (pageId: string) => {
  const response = await notion.pages.update({
    page_id: pageId,
    properties: {
      Tags: {
        multi_select: [
          {
            name: '🥬 Vegetable',
          },
        ],
      },
    },
    /* childrenは変更できないかも？ */
  });

  return response;
};

/* 削除はBlockのAPIを使用する */
