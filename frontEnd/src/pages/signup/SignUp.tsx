import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="p-6 rounded-lg w-full bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">Full Name</span>
            </label>
            <input type='text' className="w-full input input-bordered h-10" placeholder="John Doe"></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">Username</span>
            </label>
            <input type='text' className="w-full input input-bordered h-10" placeholder="johndoe"></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">Password</span>
            </label>
            <input type='password' className="w-full input input-bordered h-10" placeholder="Enter password"></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">Confirm Password</span>
            </label>
            <input type='password' className="w-full input input-bordered h-10" placeholder="Confirm password"></input>
          </div>

          <GenderCheckbox />

          <a href="#" className="text-gray-700 mt-2 text-sm hover:underline hover:text-blue-700 inline-block">Already have an account?</a>
          
          <button className="btn btn-sm mt-2 btn-block">SignUp</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
