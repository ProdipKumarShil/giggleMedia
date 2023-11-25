import { useEffect, useState } from "react";
import Friends from "../Friends/Friends";
import PostCard from "../PostCard/PostCard";
import PostInput from "../PostInput/PostInput";
import Profile from "../Profile/Profile";

const HomeLayout = () => {
  const [posts, setPosts] = useState([])
  const [like, setLike] = useState(0)
  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  console.log(posts)
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* left side */}
      <div className="col-span-3">
        <Profile />
      </div>
      {/* middle side */}
      <div className="col-span-6">
        <PostInput />
        {
          posts.map(post => <PostCard like={like} setLike={setLike} post={post} key={post._id}/>)
        }
      </div>
      {/* right side */}
      <div className=" col-span-3">
        <Friends />
      </div>
    </div>
  );
};

export default HomeLayout;