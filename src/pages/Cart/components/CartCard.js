import { Link } from "react-router-dom";
export const CartCard = () => {
  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
        <Link to="">
          <img className="w-32 rounded" src="" alt="" />
        </Link>
        <div className="">
          <Link to="">
            <p className="text-lg ml-2 dark:text-slate-200">
              The Complete Guide to Backend Development
            </p>
          </Link>
          <button className="text-base ml-2 text-red-400">Remove</button>
        </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>$29</span>
      </div>
    </div>
  );
};
