import React, {useState} from 'react'

const Login = (props) => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
      });
      const { username, password } = inputs;
    
      const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      };
    
      const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
          const body = { username, password };
          const response = await fetch("https://realestatebackend-1tat.onrender.com/auth/login", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(body),
          });
          const ParseRes = await response.json();
          console.log(ParseRes);
          localStorage.setItem("token", ParseRes.token);
          props.setAuth(true);
          props.showAlert("Logged In Succesfully", "success");
          if(username === "admin"){
              props.setUser("admin");
          }else{
              props.setUser("supervisor");
          }
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <div style={{height:"60vh"}} class=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8 ">
                <div>
                    <img class="mx-auto h-28 w-auto" src="Metropolitian.png" alt="admin" />
                    <h2 class=" text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only">User-Name</label>
                            <input id="email-address" name="username" onChange={(e) => onChange(e)} type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input  name="password" type="text" onChange={(e) => onChange(e)} autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={(e) => onSubmitForm(e)}>
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">

                                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login