import coverPic from "../../assets/cover2.jpg";

const Profile = () => {
  return (
    <div className="rounded shadow overflow-hidden border">
      <div className="relative">
        <img src={coverPic} className="w-full h-[128px] object-cover" alt="" />
        <img
          className="w-24 h-24 rounded-full absolute top-1/2 left-[105px]"
          src="https://i.ibb.co/c18mK23/Fj-U2lkc-WYAg-NG6d.jpg"
          alt=""
        />
      </div>
      <div className="p-10">
        <p className="text-center text-2xl mb-2">Erik Jhonson</p>
        <p className="text-center">Any one can join with but Social network us if you want Any one can join with us if you want</p>
      </div>
    </div>
  );
};

export default Profile;
