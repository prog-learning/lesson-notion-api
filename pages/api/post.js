const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.INTEGRATION_TOKEN });

export default async () => {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: "new title yeah!!"
              }
            }
          ]
        }
      }
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
