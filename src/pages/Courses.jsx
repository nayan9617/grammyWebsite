function Courses(){
    return(
        <div className="w-full">
       <div className="bg-black w-full text-white flex items-start p-8 text-xl font-bold">
        <h1>Pricing</h1>
      </div>
      <div className="bg-[#f5f4f0] text-black w-full">
       <div className="flex flex-col items-start">
        <h2 className="font-bold text-4xl m-5 p-4">Competitive pricing</h2>
        <p className="mt-[-18px] m-9">Listing your product pricing helps potential customers quickly determine if it fits their budget and needs.</p>
        </div>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6">
                <div className="flex flex-col shadow-md rounded-lg bg-white p-3 gap-5 items-start text-black m-3">
                    <h2 className="font-semibold text-xl">Beginner</h2>
                    <div className="flex justify-end items-end-safe">
                        <h2 className="text-3xl font-semibold">$ 15.00</h2>
                        <p className="text-sm">/month</p>
                    </div>
                    <p className="">Ideal for newcomers. Essential features to kickstart sales and marketing. Perfect for small teams.</p>
                    <button className="w-full !text-yellow-500 !bg-[white] hover:!bg-yellow-500 !border-yellow-500 hover:!text-black">Start now</button>
                    <div className="flex flex-col gap-3 items-start p-2 font-medium w-full">
                    <p className="border-b border-gray-300 pb-1 w-full text-left">✅  Sales and marketing for 2</p>
                    <p className="border-b border-gray-300 pb-1 w-full text-left">✅  Account management</p>
                    <p className="border-b border-gray-300 pb-1 w-full text-left">❌  No customization</p>
                    <p className="border-b border-gray-300 pb-5 w-full text-left">❌  No support</p>
                    </div>
                    <div className="bg-[#21252908] mt-[-28px] flex items-center justify-center w-full p-3">
                     <p className="">Instant setup, satisfied or reimbursed.</p>
                    </div>
                </div>
                <div className="flex flex-col shadow-md rounded-lg bg-white p-3 gap-5 items-start text-black m-3">
                    <h2 className="font-semibold text-xl">Professional</h2>
                    <div className="flex justify-end items-end-safe">
                        <h2 className="text-3xl font-semibold">$ 25.00</h2>
                        <p className="text-sm">/month</p>
                    </div>
                    <p className="">Comprehensive tools for growing businesses. Optimize your processes and productivity across your team.</p>
                    <button className="w-full !bg-yellow-500 text-black hover:!bg-yellow-400">Start now</button>
                    <div className="flex flex-col gap-3 items-start p-2 font-medium w-full">
                    <p className="border-b border-gray-300 pb-1 w-full text-left">✅  Complete CRM for any team</p>
                    <p className="border-b border-gray-300 pb-1 w-full text-left">✅  Access all modules</p>
                    <p className="border-b border-gray-300 pb-1 w-full text-left">✅  Limited customization</p>
                    <p className="border-b border-gray-300 pb-5 w-full text-left">✅  Email support</p>
                    </div>
                    <div className="bg-[#21252908] mt-[-28px] flex items-center justify-center w-full p-3">
                     <p className="">Instant setup, satisfied or reimbursed.</p>
                    </div>
                </div>
                <div className="flex flex-col shadow-md rounded-lg bg-white p-3 gap-5 items-start text-black m-3">
                    <h2 className="font-semibold text-xl">Expert</h2>
                    <div className="flex justify-end items-end-safe">
                        <h2 className="text-3xl font-semibold">$ 45.00</h2>
                        <p className="text-sm">/month</p>
                    </div>
                    <p className="">Advanced solution for enterprises. Cutting-edge features and top-tier support for maximum performance.</p>
                    <button className="w-full !text-yellow-500 !bg-[white] hover:!bg-yellow-500 !border-yellow-500 hover:!text-black">Contact Us</button>
                    <div className="flex flex-col gap-3 items-start p-2 font-medium w-full">
                    <p className="border-b border-gray-300 pb-1 w-full text-left">✅  Unlimited CRM support</p>
                    <p className="border-b border-gray-300 pb-1 w-full text-left">✅  All modules & features</p>
                    <p className="border-b border-gray-300 pb-1 w-full text-left">✅  Unlimited customization</p>
                    <p className="border-b border-gray-300 pb-5 w-full text-left">✅  24/7 toll-free support</p>
                    </div>
                    <div className="bg-[#21252908] mt-[-28px] flex items-center justify-center w-full p-3">
                     <p className="">Instant setup, satisfied or reimbursed.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
        </div>
    )
}

export default Courses