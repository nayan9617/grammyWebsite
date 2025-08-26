import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [openQuestion, setOpenQuestion] = useState(null);

  const contents = [
    {
      img: "/GiftCard.png",
      name: "Gift Card",
      price: "50.00/-",
    },
    {
      img: "/Guitar1.jpg",
      name: "Guitar 1",
      price: "10,000.00/-",
    },
    {
      img: "/Guitar2.jpg",
      name: "Guitar 2",
      price: "11,000.00/-",
    },
    {
      img: "/Guitar3.jpg",
      name: "Guitar 3",
      price: "12,000.00/-",
    },
  ];

  const tours = [
    {
        img: "show1.jpg",
        place: "Indore Tour",
        date: "1st April",
        special: "Discover the new album live."
    },
    {
        img: "show2.jpg",
        place: "Mumbai Tour",
        date: "27th August",
        special: "Get up close with the artists."
    },
    {
        img: "show3.jpg",
        place: "Amsterdam Tour",
        date: "9th September",
        special: "Tour Grand Final."
    }
  ]

  return (
    <>
      <div className="w-full relative">
        <div className="w-full">
          <img
            style={{
              height: "550px",
              width: "1500px",
            }}
            src="mainPicGrammy.webp"
            alt=""
          />
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 text-white font-semibold text-6xl leading-tight space-y-2">
            <p>Unleash</p>
            <p>your</p>
            <p>potential</p>
            <button className="!bg-[#FAB803] !p-2 !px-6 !text-2xl !font-bold hover:!bg-[#fbc329] hover:!text-[#1f2937]">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-10">
        <div className="flex flex-col gap-3 justify-start items-start px-7">
          <h2 className="text-black font-black text-2xl">Our latest Content</h2>
          <p className="text-gray-700 text-lg font-medium">
            Check out what's new in our company !
          </p>
        </div>
        <div 
        onClick={() => (
            navigate("/shop")
        )}
        className="flex items-center gap-2 cursor-pointer px-5">
          <p className="text-black font-semibold hover:text-amber-500">
            See all
          </p>
          <img
            style={{
              height: "15px",
            }}
            src="/right-arrow.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center gap-3.5 py-5 justify-center">
        {contents.map((content) => (
          <div className="flex flex-col items-start cursor-pointer">
            <img
              className="h-73 w-76 transition-transform duration-300 ease-in-out hover:scale-105 outline-none hover:shadow-lg rounded-2xl"
              src={content.img}
              alt="Guitar 1"
            />
            <h2 className="text-black font-black py-3 px-4">{content.name}</h2>
            <p className="text-black font-semibold px-4">{content.price}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#cec9b6] opacity-65 p-14 rounded-2xl w-full my-10">
        <div className="bg-white text-gray-700 p-3 rounded-4xl inline-flex flex-wrap justify-center items-center mx-auto">
          <h2 className="flex items-center gap-2">
            <FaInfoCircle className="text-black" /> Got Questions? We're Here to
            Chat!
          </h2>{" "}
        </div>
        <div className="p-3">
          <h1 className="text-black font-semibold">
            Unlock the Best Solutions for You
          </h1>
          <p className="text-gray-600 py-8 font-medium">
            ​ Have a question about our products or services? Our friendly
            support team is just a chat away. Get instant answers and
            personalized assistance right here.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => navigate("/shop")}
            className="!bg-white !text-black !font-black hover:!bg-yellow-400 cursor-pointer"
          >
            Our store
          </button>
          <button
            onClick={() => navigate("/contactus")}
            className="!bg-black cursor-pointer !font-semibold"
          >
            Contact us
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 my-25">
        <h2 className="text-xl font-bold relative before:content-['*'] before:mr-2 before:text-yellow-700 text-black">
          What We Offer
        </h2>{" "}
        <p className="text-black text-6xl my-2">Discover our</p>
        <p className="text-black text-6xl underline decoration-yellow-500 decoration-4">
          {" "}
          three main benefits
        </p>
        <div className="flex justify-center items-center w-full gap-3 my-20">
          <div className="max-w-1/3 flex flex-col items-center justify-start gap-4 text-black">
            <div className="w-full ">
              <h1 className="font-bold">1</h1>
              <div className="w-full border-b-2 p-1 border-gray-500" />
            </div>
            <h2 className="text-2xl font-bold">Premium-Quality Instruments</h2>
            <p>
              Experience unmatched sound and craftsmanship with our carefully
              curated collection of the finest musical instruments, designed to
              inspire every note.{" "}
            </p>
          </div>
          <div className="max-w-1/3 flex flex-col items-center justify-start gap-4 text-black">
            <div className="w-full">
              {" "}
              <h1 className="font-bold">2</h1>
              <div className="w-full border-b-2 p-1 border-gray-500" />
            </div>
            <h2 className="text-2xl font-bold">
              Access Best Courses to Learn{" "}
            </h2>
            <p>
              Explore top-rated, curated courses across domains to upskill, stay
              competitive, and fuel your personal and professional development.{" "}
            </p>
          </div>
          <div className="max-w-1/3 flex flex-col items-center justify-start gap-4 text-black">
            <div className="w-full">
              <h1 className="font-bold">3</h1>
              <div className="w-full border-b-2 p-1 border-gray-500" />
            </div>
            <h2 className="text-2xl font-bold">24/7 Expert Support </h2>
            <p>
              EGet instant help anytime with our round-the-clock chat and call
              support to clear your doubts and stay on track with your learning.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <div className="text-black flex flex-col items-start gap-3 m-4 w-1/2">
          <h2 className="text-3xl font-bold">Top questions answered</h2>
          <p className="text-xl">
            In this section, you can address common questions efficiently.
          </p>

          <div className="text-xl font-semibold flex flex-col gap-8 items-start justify-center mt-8 w-full">
            {/* Question 1 */}
            <div className="w-full">
              <div className="flex gap-43 items-center">
                <p>What service does your company offer?</p>
                <p
                  onClick={() => setOpenQuestion(openQuestion === 1 ? null : 1)}
                  className="!text-black !font-bold cursor-pointer"
                >
                  {openQuestion === 1 ? "-" : "+"}
                </p>
              </div>
              <div className="w-1/2 border-b-2 border-yellow-500 mt-2" />
              {openQuestion === 1 && (
                <div
                  className={`transition-all duration-500 ease-in-out transform ${
                    openQuestion === 1
                      ? "scale-y-100 opacity-100"
                      : "scale-y-0 opacity-0"
                  } origin-top w-full`}
                >
                  <p className="text-black text-sm p-5">
                    Our company offers top-quality musical instruments along
                    with expertly designed courses to help you master them. We
                    also provide 24/7 doubt-clearing chat support.
                  </p>
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="w-full">
              <div className="flex gap-50 items-center">
                <p>How can I contact customer service?</p>
                <p
                  onClick={() => setOpenQuestion(openQuestion === 2 ? null : 2)}
                  className="!text-black !font-bold cursor-pointer"
                >
                  {openQuestion === 2 ? "-" : "+"}
                </p>
              </div>
              <div className="w-1/2 border-b-2 border-yellow-500 mt-2" />
              {openQuestion === 2 && (
                <div
                  className={`transition-all duration-500 ease-in-out transform ${
                    openQuestion === 2
                      ? "scale-y-100 opacity-100"
                      : "scale-y-0 opacity-0"
                  } origin-top w-full`}
                >
                  <p className="text-black text-sm p-5">
                    You can easily contact our customer support by clicking on
                    the "Contact Us" button and filling out the form. Our team,
                    along with our music experts, will get in touch with you
                    shortly to assist with your queries.
                  </p>
                </div>
              )}
            </div>

            {/* Question 3 */}
            <div className="w-full">
              <div className="flex gap-73 items-center">
                <p>What is your return policy?</p>
                <p
                  onClick={() => setOpenQuestion(openQuestion === 3 ? null : 3)}
                  className="!text-black !font-bold cursor-pointer"
                >
                  {openQuestion === 3 ? "-" : "+"}
                </p>
              </div>
              <div className="w-1/2 border-b-2 border-yellow-500 mt-2" />
              {openQuestion === 3 && (
                <div
                  className={`transition-all duration-500 ease-in-out transform ${
                    openQuestion === 3
                      ? "scale-y-100 opacity-100"
                      : "scale-y-0 opacity-0"
                  } origin-top w-full`}
                >
                  <p className="text-black text-sm p-5">
                    We offer a 7-day return policy for all products. Items must
                    be in their original condition, unused, and include the
                    receipt or proof of purchase. Refunds are processed within
                    5-7 business days of receiving the returned item.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <img
            src="s_accordion_image.svg"
            alt="some image"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center bg-[#FAB803] w-full">
        <div className="my-15">
        <h2 className="text-black font-bold text-4xl">Upcoming Shows</h2>
        <div className="border-b-4 border-white" />
        </div>
        <div className="w-full flex items-center justify-center gap-3 rounded-2xl m-2">
               {
                tours.map((tour) => (
                    <div className="max-w-1/3 flex flex-col items-start gap-5 bg-white text-black mx-3 rounded">
                         <img 
                         className="h-55 w-90 rounded"
                         src={tour.img} alt={tour.place} />
                         <h2 className="mx-3 text-2xl font-bold">{tour.place}</h2>
                         <p className="mx-3 ">{tour.date}</p>
                         <p className="mx-3 font-medium">{tour.special}</p>
                         <button className="text-white m-6">Get your tickets</button>
                    </div>
                ))
               }
        </div>
      </div>
    </>
  );
}

export default Home;
