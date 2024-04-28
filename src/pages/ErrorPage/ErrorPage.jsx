import { Link } from "react-router-dom";
import errorImage from "../../assets/ErrorPage.jpg";

const ErrorPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="space-y-4 flex flex-col justify-center items-center">
        <div>
          <img className="w-full lg:w-[500px] h-auto" src={errorImage} alt="" />
        </div>
        <div>
          <Link to="/">
            <button className="text-white cursor-pointer bg-primary rounded-lg px-7 py-4 font-semibold border-none">
              Return Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
