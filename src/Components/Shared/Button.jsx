/* eslint-disable react/prop-types */

const Button = ({ text }) => {
  return (
    <div className="btn  btn-sm lg:btn-md btn-outline shadow-md capitalize ">
      {text}
    </div>
  );
};

export default Button;
