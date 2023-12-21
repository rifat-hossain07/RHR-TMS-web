import { Link } from "react-router-dom";
import Completed from "../Components/Completed";
import OnGoing from "../Components/OnGoing";
import Button from "../Components/Shared/Button";
import ToDo from "../Components/ToDo";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row-reverse items-center text-center lg:text-left justify-center mx-auto">
          <div>
            <img
              className="w-1/3 mx-auto rounded-xl"
              src={user?.photoURL}
              alt="https://i.ibb.co/N1nwWNp/a.png"
            />
          </div>
          <div className="md:text-2xl">
            <h2>
              <span className=" font-medium  underline">Name: </span>
              {user?.displayName}
            </h2>
            <h2>
              <span className=" font-medium underline">E-mail: </span>
              {user?.email}
            </h2>
          </div>
        </div>
        {/* Tasks */}
        <div className="text-center">
          <h1 className="text-center text-3xl font-bold my-5">Tasks:</h1>
          <Link to="/addTask">
            <Button text="Add New Task" />
          </Link>
        </div>
        <div className="flex justify-center w-full gap-5">
          <div className="w-1/3">
            <ToDo />
          </div>
          <div className="w-1/3">
            <OnGoing />
          </div>
          <div className="w-1/3">
            <Completed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
