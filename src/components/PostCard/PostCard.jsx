import menu from "../../assets/menu.svg";
import dots from "../../assets/3dots.svg";
import cat from '../../assets/cat.jpg'
import likeFilled from '../../assets/icons/like-filled.svg'
import likeOutline from '../../assets/icons/like-outline.svg'
import comment from '../../assets/icons/comment-outline.svg'
import share from '../../assets/icons/share.svg'

const PostCard = () => {
  return (
    <div className="border rounded p-5 mb-8 shadow">
      <div className="flex justify-between items-center">
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
        <img className="h-5 w-5" src={dots} alt="" />
      </div>
      <div className="mt-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae natus fuga fugiat, tempora vitae incidunt placeat asperiores laudantium veniam?</p>
        <img className="mt-5 h-[300px] w-full object-cover rounded" src={cat} alt="" srcset="" />
      </div>
      {/* like and share */}
      <div className="mt-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img className="w-6 h-6" src={likeOutline} alt="" />
          <p className="text-sm text-slate-500">20 likes</p>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-6 h-6" src={comment} alt="" />
          <p className="text-sm text-slate-500">20 comment</p>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-6 h-6" src={share} alt="" />
          <p className="text-sm text-slate-500">20 share</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
