import { Button } from '@mantine/core';
import { Prism } from '@mantine/prism';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [response, setResponse] = useState([]);

  const getDatabase = () =>
    axios.get('/api/databases').then((res) => setResponse(res.data));

  const getPage = () =>
    axios.get('/api/pages').then((res) => setResponse(res.data));
  const createPage = () =>
    axios.post('/api/pages').then((res) => setResponse(res.data));
  const updatePage = () =>
    axios.put('/api/pages').then((res) => setResponse(res.data));

  return (
    <div className='p-8'>
      <h1>Lesson Notion API</h1>
      <div className='space-x-2 py-2'>
        <Button onClick={getDatabase}>getDatabase</Button>
      </div>
      <div className='space-x-2 py-1'>
        <Button onClick={getPage}>getPage</Button>
        <Button onClick={createPage}>createPage</Button>
        <Button onClick={updatePage}>updatePage</Button>
      </div>
      <p>他も一緒。削除はBlockのAPI使う。</p>
      <h3>Response</h3>
      <Prism language='json' withLineNumbers>
        {JSON.stringify(response, null, 4)}
      </Prism>
    </div>
  );
}
