import coverPic from "../../assets/cover2.jpg";

const Profile = () => {
  return (
    <div>
      <div className="relative">
        <img src={coverPic} className="w-full h-[128px] object-cover" alt="" />
        <img className="w-24 h-24 rounded-full absolute top-1/2 left-[105px]" src="https://i.ibb.co/c18mK23/Fj-U2lkc-WYAg-NG6d.jpg" alt="" />
      </div>
    </div>
  );
};

export default Profile;
