import coverPic from "../../assets/cover2.jpg";
import { getUser } from "../../getUser/utilities";

const Profile = () => {
  const user = getUser();
  return (
    <div className="rounded shadow overflow-hidden border">
      <div className="relative">
        <img src={coverPic} className="w-full h-[128px] object-cover" alt="" />
        <div className="absolute top-1/2 left-[105px] w-24 h-24 flex justify-center items-center text-5xl font-bold bg-pink-300 rounded-full active:scale-95">
          {user?.userName?.split("")[0].toUpperCase()}
        </div>
      </div>
      <div className="p-10">
        <p className="text-center text-2xl mb-2">
          {user?.userName.toUpperCase()}
        </p>
        <p className="text-center">
          Any one can join with but Social network us if you want Any one can
          join with us if you want
        </p>
      </div>
    </div>
  );
};

export default Profile;
