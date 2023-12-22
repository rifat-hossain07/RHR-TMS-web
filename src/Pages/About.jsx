import Header from "../Components/Shared/Header";

const About = () => {
  return (
    <div>
      {/* About Us */}
      <div>
        <Header text="About Us" />
        <div className="mx-5 lg:mx-20 mb-5 text-clip gap-20 grid grid-flow-row md:grid-flow-col  justify-between">
          <p className="indent-2">
            <span className="text-blue-400 text-3xl border-l-2 border-l-blue-400 pl-2">
              R
            </span>
            HR-TMS is dedicated to enhancing the user experience, ensuring our
            products are intuitive, affordable, and aligned with the latest
            advancements in task management technology. We are devoted to
            sustainability, employing eco-friendly packaging and responsible
            sourcing to minimize our environmental impact. Our core values are
            rooted in innovation, customer-centricity, and quality service. We
            are committed to delivering reliable, high-performance task
            management solutions that meet the dynamic needs of our users.
            Quality remains the cornerstone of our approach we ensure every
            product meets stringent standards for reliability and performance.
            In our pursuit of excellence, we hve fostered partnerships with
            industry leaders to provide you with cutting-edge task management
            tools. Our commitment extends beyond innovation;
          </p>
          <div className="my-auto">
            <img
              className="w-full h-[320px]"
              src="https://i.ibb.co/VY7XqMr/download-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
