import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZoon1 from "../../../assets/qZone1.png";
import qZoon2 from "../../../assets/qZone2.png";
import qZoon3 from "../../../assets/qZone3.png";
function RightSideNav() {
  return (
    <div>
      {/* Login with */}
      <div className="p-4 ">
        <h1 className="text-2xl mb-3">Login with</h1>
        <button className="btn btn-outline w-full mb-3">
          <FaGoogle size={24} />
          Login with google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub size={24} />
          Login with github
        </button>
      </div>
      {/* Find on us */}
      <div className="p-4">
        <h1 className="text-2xl mb-3">Find us on</h1>
        <a
          className="flex gap-2 border p-4 rounded-t-lg"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
          <p>Facebook</p>
        </a>
        <a
          className="flex gap-2 p-4 border-x"
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
          <p>Twitter</p>
        </a>
        <a
          className="flex gap-2 border p-4 rounded-b-lg"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
          <p>Instagram</p>
        </a>
      </div>
      {/* Q zoon */}
      <div className="p-4">
        <h1 className="text-2xl">Q Zone</h1>
        <img src={qZoon1} alt="Q Zoon image not available" />
        <img src={qZoon2} alt="Q Zoon image not available" />
        <img src={qZoon3} alt="Q Zoon image not available" />
      </div>
    </div>
  );
}

export default RightSideNav;
