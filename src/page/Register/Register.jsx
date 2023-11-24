import { useNavigate } from "react-router-dom";
import img from "../../assets/social.jpg";
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate()

  const handleRegister = e => {
    e.preventDefault()
    const from = e.target
    const userName = from.userName.value
    const email = from.email.value
    const pass = from.password.value
    fetch('http://localhost:5000/signUp',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userName,email,pass})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.status){
          toast.success(data.message)
          navigate('/')
          localStorage.setItem("user", JSON.stringify({userName, email}))
        } else {
          toast.error(data.message)
        }
      })
  }
  
  return (
    <div>
      <div className="grid grid-cols-2 h-screen items-center">
        <img className="h-screen w-full object-cover" src={img} alt="" />
        <form onSubmit={handleRegister} className="p-5">
          <p className="text-3xl font-bold text-center mb-6">
            Register to explore more
          </p>
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
              placeholder="Email"
              name="email"
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
              name="password"
              className="input input-bordered w-full"
            />
            <label className="label hidden">
              <span className="label-text-alt">Bottom Left label</span>
            </label>
          </div>
          <button className="btn w-full">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
