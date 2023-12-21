import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../Components/Shared/Button";
import useAuth from "../Hooks/useAuth";
import axios from "axios";

const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleAddTask = async (data) => {
    const email = user?.email;
    const title = data.title;
    const description = data.description;
    const deadline = data.deadline;
    const priority = data.priority;
    const status = data.status;
    const tasks = { title, description, deadline, priority, status, email };
    const res = await axios.post("http://localhost:5000/addTask", tasks);
    console.log(res);
    if (res.data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: ` Successfully Registered !`,
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <div className=" hero">
        <div className="">
          <div className="text-center mb-5 ">
            <h1 className="text-3xl md:text-4xl font-bold ">Register Here!</h1>
          </div>
          <div className=" card border-2 border-warning text-black shadow-xl mx-2 md:mx-5">
            <form onSubmit={handleSubmit(handleAddTask)} className="card-body">
              {/* Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Task Title..."
                  className="input input-bordered"
                  {...register("title")}
                />
              </div>

              {/* Description */}
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">description</span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  required
                  className="input input-bordered"
                  {...register("description", { required: true })}
                />
              </div>
              {/* Deadlines */}
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  placeholder="password"
                  required
                  className="input input-bordered"
                  {...register("deadline", { required: true })}
                />
              </div>
              {/* Priority */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Select tasks Priority</span>
                </label>
                <select
                  className="select select-warning w-full "
                  {...register("priority", { required: true })}
                  required
                >
                  <option></option>
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
              {/* Priority */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Select tasks Status</span>
                </label>
                <select
                  className="select select-warning w-full "
                  {...register("status", { required: true })}
                  required
                >
                  <option></option>
                  <option>To-Do</option>
                  <option>On-Going</option>
                  <option>Completed</option>
                </select>
              </div>
              <div className="form-control mt-6 text-center">
                <button>
                  <Button text="add" />
                </button>
                {/* <input type="submit" /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;