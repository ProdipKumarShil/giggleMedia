import dots from "../../assets/icons/friend.svg";

const Friends = () => {
  return (
    <div className="border rounded shadow ">
      <p className="text-xl font-bold  p-4">Suggested Friends</p>
      <SingleFriend />
      <SingleFriend />
      <SingleFriend />
      <SingleFriend />
    </div>
  );
};

export default Friends;

const SingleFriend = () => {
  return (
    <div className="flex justify-between items-center  p-4 hover:bg-slate-200">
      <div className="flex items-center gap-4">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="https://i.ibb.co/c18mK23/Fj-U2lkc-WYAg-NG6d.jpg"
          alt=""
        />
        <div className="">
          <p className="text-lg font-bold">Erik Jhonson</p>
          <p className="text-slate-500 text-sm">20 min ago</p>
        </div>
      </div>
      <img className="h-5 w-5 cursor-pointer" src={dots} alt="" />
    </div>
  );
};
