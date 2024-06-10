import React, { useEffect, useState } from "react";
import NotesBox from './NotesBox';
import './css/Feed.css';
import Post from './Post';
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (!hasFetched) {
      axios
        .get("http://localhost:80/api/questions")
        .then((res) => {
          console.log(res.data.reverse());
          setPosts(res.data);
          setHasFetched(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [hasFetched]);

  return (
    <div className="feed">
      <NotesBox />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
}

export default Feed;
