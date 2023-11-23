import PostCard from "../PostCard/PostCard";
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
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      {/* right side */}
      <div className="bg-yellow-400 col-span-3">d</div>
    </div>
  );
};

export default HomeLayout;