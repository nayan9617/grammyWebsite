import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navItems = [
    {
      name: "Home",
      pageLink: "/",
    },
    {
      name: "Shop",
      pageLink: "/shop",
    },
    {
      name: "Courses",
      pageLink: "/courses",
    },
    {
      name: "About Us",
      pageLink: "/aboutus",
    },
  ];

  const navigate = useNavigate();

  return (
    <nav className="bg-[#1A1423] w-full p-4 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between">
        <div className="flex items-center gap-5 font-semibold">
          <img
            onClick={() => navigate("/")}
            src="/allPicGrammy/Grammy.svg"
            alt="mainIconOfGrammy"
            style={{
              height: "40px",
              width: "40px",
            }}
          />
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.pageLink}
                className="!text-white hover:!text-amber-300 no-underline"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <div className="bg-[#ddcbf8] p-2 rounded-full opacity-95 border-1 border-white hover:bg-[#cbb8f0]">
            <img src="/checkout.png" alt="Checkout" className="w-5 h-5" />
          </div>
          <div className="bg-[#ddcbf8] p-2 rounded-full opacity-95 border-1 border-white hover:bg-[#cbb8f0]">
            <img src="/search.png" alt="Search" className="w-5 h-5" />
          </div>
          <Link
            to="/login"
            className="!bg-white !text-black border-2 !border-black px-4 py-2 rounded-full font-semibold hover:!bg-yellow-400 transition"
          >
            Sign In
          </Link>
          <Link
            to="/contactus"
            className="!bg-[#FAB803] !text-black !border-2 !border-black px-4 py-2 rounded-full font-semibold hover:!bg-yellow-400 transition"
          >
            ContactUs
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
