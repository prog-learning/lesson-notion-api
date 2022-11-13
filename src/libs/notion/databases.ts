import { notion } from './client';

/**
 * Databaseの情報のみを取得
 */
export const getDatabaseInfo = async (databaseId: string) => {
  const response = await notion.databases.retrieve({ database_id: databaseId });

  return response;
};

/**
 * Databaseの中身を取得
 */
export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,

    /* Queryを使って条件で絞り込める */
    // filter: {
    //   or: [
    //     {
    //       property: 'In stock',
    //       checkbox: {
    //         equals: true,
    //       },
    //     },
    //     {
    //       property: 'Cost of next trip',
    //       number: {
    //         greater_than_or_equal_to: 2,
    //       },
    //     },
    //   ],
    // },

    /* 並び替えも可能 */
    // sorts: [
    //   {
    //     property: 'Last ordered',
    //     direction: 'ascending',
    //   },
    // ],
  });

  return response;
  // return response.results;
};

/* DBの作成と編集はSDKには存在しない（APIはある） */
