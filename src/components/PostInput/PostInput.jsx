import { useForm } from "react-hook-form";
import {useState} from "react";

const PostInput = () => {
  console.log(import.meta.env.VITE_IMG)
  const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG}`
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (data) => {
    const formData = new FormData()
    console.log(data)
    formData.append('image', data.img[0])

    fetch(imgUploadUrl, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imgRes => {
        if(imgRes.success){
          fetch('http://localhost:5000/createPost', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({content: data.content, imgUrl: imgRes.data.url})
          })
            .then(res => res.json())
            .then(iData => console.log(iData))
        }
      })
  }
   
  return (
    <div>
      <div
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="flex items-center gap-4 p-4 shadow rounded mb-8 border">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="https://i.ibb.co/c18mK23/Fj-U2lkc-WYAg-NG6d.jpg"
          alt=""
        />
        <input
          className="w-full  bg-slate-200 rounded-full p-2 pl-4"
          placeholder="what's your mind"
          type="text"
        />
        <button className="btn rounded-full">Post</button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className=" p-4 shadow rounded mb-8 border bg-base-100 w-[800px]">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full" >
            <div className="flex items-center gap-4 mb-5">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src="https://i.ibb.co/c18mK23/Fj-U2lkc-WYAg-NG6d.jpg"
                alt=""
              />
              <input
                className="w-full  bg-slate-200 rounded-full p-2 pl-4"
                placeholder="what's your mind"
                type="text"
                {...register("content")}
              />
            </div>

            <div className="flex items-center justify-center w-full mb-5">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input {...register("img")} name="img" id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <button onClick={() => document.getElementById('my_modal_1').close()} className="btn rounded-full w-full">Post</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default PostInput;
