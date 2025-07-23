import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavbarLinks = [
    { title: "O Restaurante", url: "#restaurante" },
    { title: "Menu", url: "#menu" },
    { title: "Reservas", url: "#reserva" },
  ];

  const restaurantName = "Iron Grill";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-20 flex items-center justify-between px-6 bg-transparent text-white">
      <div>
        <p className="font-bold text-3xl">{restaurantName}</p>
      </div>

      <div className="hidden md:flex flex-row gap-8 mr-10">
        {NavbarLinks.map((item) => (
          <a
            key={item.title}
            href={item.url}
            className="relative font-bold text-white transition-colors duration-300 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
              after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-300 
              hover:after:scale-x-100 hover:text-gray-300"
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="md:hidden z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 text-xl transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {NavbarLinks.map((item) => (
          <a
            key={item.title}
            href={item.url}
            onClick={() => setIsMenuOpen(false)}
            className="font-bold text-white hover:text-gray-300 text-2xl"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
