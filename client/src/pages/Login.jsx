import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";



function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    try {
        const response = await axios.post(
        'http://localhost:9000/login', {formData}
        )

        navigate("/")
        console.log(response);
    
    } catch (error) {
        if (error.response) {
          console.error(error.response.data);
        }
      }
     finally {
        setIsLoading(false); 
      }
  };

  return (
    <div>
        <div className="bg-[#F3F1F1] p-10 shadow-md shadow-gray-500 rounded-[10px]">
          <h3 className="text-center text-[36px] text-[#39447F] font-black">
            Log in
          </h3>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div>
              <label className="my-2" htmlFor="email">
                Add email
              </label>
              <input
                className="w-full p-4 my-2 bg-white"
                type="email"
                placeholder="Email*"
                onChange={handleInputChange}
                name="email"
                value={formData.email}
                required
              />
            </div>
            <div>
              <label className="my-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-4 my-2 bg-white"
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
                name="password"
                value={formData.password}
                required
              />
            </div>
            <button
              className="bg-[#39447F] w-full p-4 text-center my-3 rounded text-white"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
            <p className="text-[#39447F] text-[10px] text-center">
              Don’t have an account?{" "}
              <Link to="/register">
                <span className="font-bold">Create profile</span>
              </Link>
            </p>
          </form>
        </div>
   
    
    </div>
  );
}

export default Login;
