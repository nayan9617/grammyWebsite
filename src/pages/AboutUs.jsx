function AboutUs() {

const teamMembers = [
    {
        avatar: "https://grammy.odoo.com/web/image/1599-492e7086/website.s_company_team_image_2",
        name: "Shubham Patidar",
        designation: "CEO, grammy music",
        about: "Founder and chief visionary, Shubham is the driving force behind the company. He loves to keep his hands full by participating in the Music and its instruments, marketing, and customer experience strategies."
    },
    {
        avatar: "https://grammy.odoo.com/web/image/1599-492e7086/website.s_company_team_image_2",
        name: "Mich Stark",
        designation: "Chief Commercial Officer",
        about: "Mich loves taking on challenges. With his multi-year experience as Commercial Director in the software industry, Mich has helped the company to get where it is today. Mich is among the best minds."
    },
    {
        avatar: "https://grammy.odoo.com/web/image/website.s_company_team_image_3",
        name: "Aline Turner",
        designation: "Chief Technical Officer",
        about: "Aline is one of the iconic people in life who can say they love what they do. She mentors 100+ in-house developers and looks after the community of thousands of developers."
    },
    {
        avatar: "https://grammy.odoo.com/web/image/website.s_company_team_image_4",
        name: "Iris Joe",
        designation: "Chief Financial Officer",
        about: "Iris, with her international experience, helps us easily understand the numbers and improves them. She is determined to drive success and delivers her professional acumen to bring the company to the next level."
    },
]

  return (
    <div className="w-full">
      <div className="bg-black w-full text-white flex items-start p-5 text-xl font-bold">
        <h1>About Us</h1>
      </div>
      <div className="max-w-full flex items-center my-30 justify-between">
        <div className="flex flex-col gap-8 items-center max-w-1/3">
          <h2 className="font-bold text-black text-3xl">
            Improve your efficiency
          </h2>
          <p className="text-black">
            {" "}
            At Grammy, we are passionate about bringing music to life. As a
            trusted brand, we offer top-quality musical instruments under our
            own label — Grammy — crafted to deliver exceptional sound and
            performance. Whether you're a beginner or a seasoned musician, our
            instruments are designed to meet your needs with style and
            reliability.
          </p>
          <button className="">Learn more</button>
        </div>
        <div className="max-w-1/2">
          <img
            className="h-200 w-150"
            src="https://grammy.odoo.com/unsplash/yf7dahfXLkw/sell%20music.jpg?unique=5c3e04c7"
            alt=""
          />
        </div>
      </div>

      <div className="max-w-full flex items-center my-20 justify-between">
        <div className="max-w-1/2">
          <img
            className="h-90 w-140"
            src="https://grammy.odoo.com/unsplash/3pCRW_JRKM8/music%20notes.jpg?unique=d5af8d10"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-8 items-center max-w-1/3">
          <h2 className="font-bold text-black text-3xl">A new open world</h2>
          <p className="text-black">
            we also provide expertly curated music courses created by
            professional musicians with deep expertise in instruments like
            piano, guitar, harmonium, and many more. Our goal is to help you not
            only own the best instruments but also master them through
            comprehensive learning experiences.
          </p>
          <button className="">Learn more</button>
        </div>
      </div>

      <div className="my-30 bg-yellow-500 opacity-90">
        <h1 className="text-3xl text-black font-black p-30">Increase your productivity</h1>
      </div>

      <div className="bg-[#f5f4f0] text-black mt-[-120px] w-full">
        <div className="flex flex-col items-start">
        <h2 className="font-bold text-3xl m-6">Meet our team</h2>
        <p className="font-medium mt-[-18px] m-5">Dedicated professionals driving our success</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 m-3 p-6">
            {
                teamMembers.map((member) => (
                   <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
                     <img 
                     className="h-24 w-24 rounded-full object-cover"
                     src={member.avatar} alt="" />
                     <div className="flex flex-col gap-3 text-black">
                        <h2 className="text-2xl font-bold">{member.name}</h2>
                        <p>{member.designation}</p>
                        <p>{member.about}</p>
                     </div>
                   </div>
                ))
            }
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
