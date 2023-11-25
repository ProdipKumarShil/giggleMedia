import menu from "../../assets/menu.svg";
import dots from "../../assets/3dots.svg";
import cat from "../../assets/cat.jpg";
import likeFilled from "../../assets/icons/like-filled.svg";
import likeOutline from "../../assets/icons/like-outline.svg";
import comment from "../../assets/icons/comment-outline.svg";
import share from "../../assets/icons/share.svg";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <div className="border rounded p-5 mb-8 shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* <img
            className="w-12 h-12 object-cover rounded-full"
            src="https://i.ibb.co/c18mK23/Fj-U2lkc-WYAg-NG6d.jpg"
            alt=""
          /> */}
          <div
            className="w-12 h-12 flex justify-center items-center text-xl font-bold bg-pink-300 rounded-full active:scale-95">
            {post?.userName?.split("")[0].toUpperCase()}
          </div>
          <div className="">
            <p className="text-lg font-bold">{post.userName.toUpperCase()}</p>
            <p className="text-slate-500 text-sm">
              {moment(post.date).format("hh:mm a, MMM Do YY")}
            </p>
          </div>
        </div>
        <img className="h-5 w-5" src={dots} alt="" />
      </div>
      <div className="mt-3">
        <p>{post.content}</p>
        <img
          className="mt-5 h-[300px] w-full object-cover rounded"
          src={post.imgUrl}
          alt=""
          srcset=""
        />
      </div>
      {/* like and share */}
      <div className="mt-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img className="w-6 h-6" src={likeOutline} alt="" />
          <p className="text-sm text-slate-500">{post.likes} likes</p>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-6 h-6" src={comment} alt="" />
          <p className="text-sm text-slate-500">{post.comment.length} comment</p>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-6 h-6" src={share} alt="" />
          <p className="text-sm text-slate-500">0 share</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
