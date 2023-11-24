import Friends from "../Friends/Friends";
import PostCard from "../PostCard/PostCard";
import PostInput from "../PostInput/PostInput";
import Profile from "../Profile/Profile";

const HomeLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* left side */}
      <div className="col-span-3">
        <Profile />
      </div>
      {/* middle side */}
      <div className="col-span-6">
        <PostInput />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      {/* right side */}
      <div className=" col-span-3">
        <Friends />
      </div>
    </div>
  );
};

export default HomeLayout;