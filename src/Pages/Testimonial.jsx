import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../Components/Shared/Header";
const Testimonial = () => {
  return (
    <div>
      <div data-aos="fade-down" data-aos-duration="1000">
        <Header text="Testimonials" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="  bg-blue-200 "
      >
        <Carousel
          className="py-16"
          showArrows={true}
          showStatus={true}
          showIndicators={true}
          infiniteLoop={true}
          showThumbs={false}
          useKeyboardArrows={true}
          autoPlay={true}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          autoFocus={true}
          selectedItem={0}
          interval={2000}
          transitionTime={900}
          swipeScrollTolerance={5}
        >
          {/* First */}
          <div className="text-center">
            <div className=" ">
              {/* first person */}
              <div className="  ">
                <div className=" avatar w-36 md:w-48 h-36 md:h-48">
                  <img
                    className="  rounded-full"
                    src="https://i.ibb.co/z8dLwk5/no-bg.png
                "
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="font-medium text-xl">Mr. Rifat</p>
                  <div className="rating flex rating-sm mb-2 justify-center ">
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 bg-blue-400"
                    />
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 bg-blue-400"
                    />
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 bg-blue-400"
                    />
                    <input
                      type="radio"
                      disabled
                      checked
                      className="mask mask-star-2 bg-blue-400"
                    />
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 bg-blue-400"
                    />
                  </div>
                  <p className="w-1/2 mx-auto">
                    RHR-TMS has revolutionized how we handle operations. Its
                    user-friendly interface and robust task tracking
                    capabilities have significantly enhanced our teams
                    efficiency. It is an indispensable tool for managing complex
                    projects seamlessly!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="text-center">
            {/* second person */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48">
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/fYh90D0/3.jpg
              "
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Ms. Sara</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 bg-blue-400"
                  />
                </div>
                <p className="w-1/2 mx-auto">
                  As a software engineer, I rely on efficient task management.
                  RHR-TMS is my go-to solution. Its integration capabilities and
                  customizable features perfectly align with our agile
                  workflows, making collaboration effortless and results-driven.
                </p>
              </div>
            </div>
          </div>
          {/* Third */}
          <div className="text-center">
            {/* third person */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48 ">
                <img
                  className=" rounded-full"
                  src="https://i.ibb.co/CVQbRb1/4.jpg
              "
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Mr. Risam</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                </div>
                <p className="w-1/2 mx-auto">
                  Running a startup demands organization and flexibility.
                  RHR-TMS has been a game-changer! It simplifies task
                  delegation, helps set priorities, and enables efficient team
                  communication. It is a vital asset in our growth journey.
                </p>
              </div>
            </div>
          </div>
          {/* Fourth */}
          <div className="text-center">
            {/* fourth person */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48">
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/ZYn21hY/1.jpg"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Ms. Angela</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-blue-400"
                  />
                </div>
                <p className="w-1/2 mx-auto">
                  Managing creative projects requires precision and
                  collaboration. RHR-TMS delivers just that. Its intuitive
                  design, seamless file sharing, and task visualization have
                  elevated our creative process, resulting in exceptional
                  outcomes!
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
