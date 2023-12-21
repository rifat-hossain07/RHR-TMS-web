import axios from "axios";
import { Draggable } from "react-beautiful-dnd";
import Swal from "sweetalert2";
import Modal from "react-modal";
import { useState } from "react";
import Button from "./Shared/Button";
import { useForm } from "react-hook-form";

/* eslint-disable react/prop-types */
const TasksSection = ({ task, index, refetch }) => {
  const { register, handleSubmit } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      content: "center",
      height: "70%",
      width: "95%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const updateTask = async (data) => {
    const title = data.title;
    const description = data.description;
    const deadline = data.deadline;
    const priority = data.priority;
    const status = data.status;
    const tasks = { title, description, deadline, priority, status };
    const res = await axios.put(
      `http://localhost:5000/tasks/update/${task?._id}`,
      tasks
    );
    if (res.data) {
      Swal.fire({
        title: "Updated!",
        text: "Your task has been updated.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
      setIsOpen(false);
    }
  };
  const deleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`http://localhost:5000/delete/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      }
    });
  };
  return (
    <>
      <Draggable key={task._id} draggableId={task._id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>{task?.title}</p>
                <p>{task?.description}</p>
                {task?.status === "Completed" ? (
                  <p className="text-center font-semibold text-green-400">
                    Completed !
                  </p>
                ) : (
                  <>
                    <div className="card-actions justify-between">
                      <div>
                        <span className="font-bold">Deadline: </span>
                        {task?.deadline}
                      </div>
                      <div>
                        <span className="font-bold">Priority: </span>
                        {task?.priority}
                      </div>
                    </div>
                    <div className="card-actions justify-between">
                      <button onClick={openModal} className="btn btn-outline">
                        Update
                      </button>
                      <button
                        onClick={() => deleteTask(task?._id)}
                        className="btn btn-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </Draggable>
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=" Modal"
      >
        <div className="mx-10">
          <form onSubmit={handleSubmit(updateTask)} className="">
            {/* Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                defaultValue={task?.title}
                placeholder="Task Title..."
                className="input input-bordered"
                {...register("title")}
              />
            </div>

            {/* Description */}
            <div className="form-control  ">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                defaultValue={task.description}
                placeholder="description"
                className="textarea textarea-bordered textarea-lg w-full "
                {...register("description")}
              />
            </div>
            {/* Deadlines */}
            <div className="form-control w-1/2 mx-auto ">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                defaultValue={task?.deadline}
                placeholder="password"
                className="input input-bordered"
                {...register("deadline")}
              />
            </div>
            <div className="flex gap-8">
              {/* Priority */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Select tasks Priority</span>
                </label>
                <select
                  defaultValue={task?.priority}
                  className="select select-bordered w-full "
                  {...register("priority")}
                >
                  <option></option>
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
              {/* Status */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Select tasks Status</span>
                </label>
                <select
                  defaultValue={task?.status}
                  className="select select-bordered w-full "
                  {...register("status")}
                >
                  <option></option>
                  <option>To-Do</option>
                  <option>On-Going</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
            <div className="form-control mt-6 text-center flex-row justify-evenly">
              <button>
                <Button text="add" />
              </button>
              <button onClick={closeModal}>
                <Button text="Close" />
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default TasksSection;
