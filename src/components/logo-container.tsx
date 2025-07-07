import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"} className="flex items-center justify-center">
      <img
        src='./src/assets/svg/logo.png'
        alt=""
        className="max-w-10 max-h-10 object-contain mr-4"
      />
      <h1 className="font-bold">EmpowerMe</h1>
    </Link>
  );
};
