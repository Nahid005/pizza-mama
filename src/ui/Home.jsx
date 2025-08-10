import { Link } from "react-router";
import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-8 bg-stone-100 gap-8">
      <h1 className="font-bold text-4xl text-center text-stone-700 leading-10 ">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
