import axios from 'axios';

export default function Home() {
  axios.get("/api/hello").then(a => console.log(a.data));
  axios.get("/api/post").then(a => console.log(a));
  return (
    <div>
      <h1>Lesson Notion API</h1>
    </div>
  );
}
