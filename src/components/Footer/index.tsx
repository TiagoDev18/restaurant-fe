import { FaMapMarkedAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="f w-full h-20 flex items-center justify-center bg-[#1e1e1e] font-display text-white ">
      <div className="flex items-center gap-2">
        <FaMapMarkedAlt />
        <p>
          Iron Grill · Rua do Sabor 123, Porto · +351 912 345 678 Instagram ·
          Facebook · TripAdvisor
        </p>
      </div>
    </div>
  );
};

export default Footer;
