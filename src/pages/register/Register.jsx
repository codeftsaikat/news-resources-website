import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";
const Register = () => {
  const {createUser} = useContext(Context)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo_url");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // implement createUser
    createUser(email,password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Register Now
          </h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                placeholder=" Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="photo_url"
              >
                Photo URL
              </label>
              <input
                name="photo_url"
                type="text"
                id="photo_url"
                placeholder="Photo URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Your Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Your Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className="text-black text-center mt-4">
            If you have an account? Please{" "}
            <Link to="/login" className="text-blue-500 font-semibold">
              login
            </Link>{" "}
            now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
