function Footer() {
  return (
    <footer className="bg-[#1A1423] text-white py-7 min-w-full">
      <div className="flex items-center md:flex-row justify-between gap-6">
        <div className="text-white  flex flex-col justify-between">
          <h2 className="text-4xl font-bold mb-4 pl-4">Designed for companies</h2>
          <br />
          <p className="px-4 pl-7">
            We are a company dedicated to bringing music into everyone's life by
            offering the highest quality musical instruments and expertly
            crafted courses to help you learn any instrument with ease and
            confidence. .
          </p>
          <br />
          <p className="text-[#d0cacadf] mt-auto bottom-0">Copyright &copy; {new Date().getFullYear()}  Grammy</p>
        </div>
        <div className="md:w-1/2 text-[#a9a4a4] text-xl pl-30">
          <p><b>Nalanda Parisar</b> <br />111 ground floor Indore (M.P.)  India</p>
        </div>
        <div className="flex flex-col items-center gap-6 px-40">
           <div className="flex items-center gap-3">
             <img
            style={{
                height: '35px',
                width: '35px',
                backgroundColor: 'white'
            }} 
            className="rounded-full p-2"
            src="call.png" alt="" />
            <p className="text-amber-300">+91&nbsp;   9753556663</p>
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
            <p className="text-amber-300"> grammy@gmail.com</p>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
