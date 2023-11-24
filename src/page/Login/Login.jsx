import toast from "react-hot-toast";
import img from "../../assets/social.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  
  const handleLogin = e => {
    e.preventDefault()
    const from = e.target
    const userName = from.userName.value
    const pass = from.pass.value
    fetch('http://localhost:5000/signIn',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userName ,pass})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.status){
          toast.success(data.message)
          navigate('/')
          localStorage.setItem("user", JSON.stringify({userName}))
        } else {
          toast.error(data.message)
        }
      })
  }
  
  return (
    <div className="grid grid-cols-2 h-screen items-center">
      <img className="h-screen object-cover" src={img} alt="" />
      <form onSubmit={handleLogin} className="p-5"> 
        <p className="text-3xl font-bold text-center mb-6">Login to explore more</p>
        <div className="form-control w-full mb-5">
          <input
            type="text"
            placeholder="User name"
            name="userName"
            className="input input-bordered w-full"
          />
          <label className="label hidden">
            <span className="label-text-alt">Bottom Left label</span>
          </label>
        </div>
        <div className="form-control w-full mb-5">
          <input
            type="text"
            placeholder="Password"
            name="pass"
            className="input input-bordered w-full"
          />
          <label className="label hidden">
            <span className="label-text-alt">Bottom Left label</span>
          </label>
        </div>
        <button className="btn w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
