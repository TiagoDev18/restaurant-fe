const Navbar = () => {
  const NavbarLinks = [
    {
      title: "O Restaurante",
      url: "#restaurante",
    },
    {
      title: "Menu",
      url: "#menu",
    },
    {
      title: "Reservas",
      url: "#reserva",
    },
  ];

  const navElements = NavbarLinks.map((item) => (
    <ul className="p-4">
      <li>
        <a
          href={item.url}
          className="relative font-bold text-white transition-colors duration-300 
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
    after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-gray-300"
        >
          {item.title}
        </a>
      </li>
    </ul>
  ));

  const restaurantName = "Iron Grill";
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-20  flex items-center justify-between text-white">
      <div>
        <p className="flex font-bold text-3xl ml-10 ">{restaurantName}</p>
      </div>
      <div className="flex flex-row mr-10">{navElements}</div>
    </div>
  );
};
export default Navbar;
