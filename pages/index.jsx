import axios from 'axios';
// import fetch from 'node-fetch';

export default function Home() {
  // axios.get("/api/hello").then(a => console.log(a.data));

  const testPost = () => {
    // axios.post("/api/post").then(a => console.log(a));
    fetch("/api/post").then(a => console.log("testpost", a));
  };
  const testGet = () => {
    // axios.post("/api/post").then(a => console.log(a));
    fetch("/api/post", {
      method: "POST",
    }).then(a => console.log(a));
  };
  return (
    <div>
      <h1>Lesson Notion API</h1>
      <button onClick={testPost}>post</button>
      {/* <button onClick={post}>get</button> */}
    </div>
  );
}
