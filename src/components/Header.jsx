import "../App.css";
import Typed from "react-typed";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex bg-indigo-700 h-24 items-center justify-center">
      <div className="flex absolute left-10 opacity-70">
        <a href="https://github.com/kyohei-horikawa">
          <AiFillGithub size={50} color="white" />
        </a>
        <a href="https://twitter.com/kyohei12555" className="ml-2">
          <AiFillTwitterCircle size={50} color="white" />
        </a>
      </div>
      <div>
        <Typed
          className="pt-4 pl-4 text-white text-4xl font-extrabold text-opacity-70"
          strings={["Kyohei Horikawa"]}
          typeSpeed={60}
        />
      </div>
    </div>
  );
};

export default Header;
