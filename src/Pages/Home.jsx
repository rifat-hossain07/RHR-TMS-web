import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Home = () => {
  return (
    <div>
      <div
        className="hero h-[500px] bg-base-200 bg-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/ck7bpMF/16078483-low-poly-banner-design-1711.jpg)",
        }}
      >
        <div className="hero-content flex-col-reverse lg:flex-row-reverse ">
          <img
            src="https://i.ibb.co/TcGmDPD/task-banner.jpg"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold ">Manage Your Tasks!</h1>
            <p className="py-6">
              One of the Best website to manage your tasks to improve yourself
              in every stage of Life
            </p>
            <Link className="btn btn-outline" to="/dashboard">
              Let's Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
