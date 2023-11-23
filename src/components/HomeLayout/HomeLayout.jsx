import Profile from "../Profile/Profile";

const HomeLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* left side */}
      <div className="bg-slate-400 col-span-3">
        <Profile />
      </div>
      {/* middle side */}
      <div className="bg-red-400 col-span-6">f</div>
      {/* right side */}
      <div className="bg-yellow-400 col-span-3">d</div>
    </div>
  );
};

export default HomeLayout;