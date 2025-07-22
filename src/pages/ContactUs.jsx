function ContactUs(){
    return(
    <div className="w-full">
    <div className="bg-black w-full text-white flex items-start p-8 text-xl font-bold">
        <h1>Contact Us</h1>
    </div>
    <div className="flex justify-between w-full text-black items-start m-6 p-5">
      <div className="w-3/4 text-xl">
          <p className="mb-6">
            Contact us about anything related to our company or services. <br />
            We'll do our best to get back to you as soon as possible.
          </p>

           <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="name" className="font-medium text-left p-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-400 p-1 rounded-xl"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="phone" className="font-medium text-left p-1">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91"
                  className="border border-gray-400 p-1 rounded-xl"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="email" className="font-medium text-left p-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-400 p-1 rounded-xl"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="company" className="font-medium text-left p-1">Company</label>
                <input
                  type="text"
                  id="company"
                  className="border border-gray-400 p-1 rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="font-medium text-left p-1">Subject *</label>
              <input
                type="text"
                id="subject"
                className="border border-gray-400 p-1 rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="question" className="font-medium text-left p-1">Question *</label>
              <textarea
                id="question"
                rows="5"
                className="border border-gray-400 p-1 rounded-xl"
              ></textarea>
            </div>

            <button
              type="submit"
              className="!bg-amber-400 hover:!bg-yellow-400 text-black !py-2 !px-1 rounded transition w-1/8"
            >
              Submit
            </button>
          </form>
        </div>
      <div className="flex flex-col gap-2 items-center">
     <h2 className="font-black text-xl">My Company</h2>
     <p className="font-medium"> Nalanda Parisar, 111, ground floor,<br /> Indore (M.P.) India</p>
            <div className="flex items-center justify-start gap-3">
             <img
            style={{
                height: '35px',
                width: '35px',
                backgroundColor: 'white'
            }} 
            className="rounded-full p-2"
            src="call.png" alt="" />
            <p className="text-black">+91&nbsp;   9753556663</p>
           </div>
            <div className="flex items-center gap-3">
                <img 
            style={{
                height: '35px',
                width: '35px',
                backgroundColor: 'white'
            }} 
            className="rounded-full p-2"
            src="email.png" alt="" />
            <p className="text-black"> grammy@gmail.com</p>
            </div>
      </div>
    </div>
    </div>
    )
}

export default ContactUs