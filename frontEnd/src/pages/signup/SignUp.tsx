import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox"
import useSignup from "../../hooks/useSignup";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading,signup} = useSignup()

  const handleCheckboxChange = (gender: "male" | "female") => {
    setInputs({...inputs, gender});
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    signup(inputs)    
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="p-6 rounded-lg w-full bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        
        <form onSubmit={handleSubmitForm}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">Full Name</span>
            </label>
            <input type='text' className="w-full input input-bordered h-10" placeholder="John Doe" 
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">Username</span>
            </label>
            <input type='text' className="w-full input input-bordered h-10" placeholder="johndoe"
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">Password</span>
            </label>
            <input type='password' className="w-full input input-bordered h-10" placeholder="Enter password" 
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">Confirm Password</span>
            </label>
            <input type='password' className="w-full input input-bordered h-10" placeholder="Confirm password"
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckbox
            selectedGender={inputs.gender}
            onCheckboxChange={handleCheckboxChange}
          />

          <Link to="/login" className="text-gray-700 mt-2 text-sm hover:underline hover:text-blue-700 inline-block">Already have an account?</Link>
          
          <button className="btn btn-sm mt-2 btn-block" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
