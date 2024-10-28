import { MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-6 border shadow-md text-[0.9rem] bg-white">
        <nav className="flex items-center gap-11">
          <NavLink to="/">
            <img src={"images/logo.png"} alt="Starbucks" className="w-12" />
          </NavLink>
          <ul className="flex gap-4 font-medium uppercase">
            <NavLink to="/menu">
              <li className="cursor-pointer">МЕНЮ</li>
            </NavLink>
            <NavLink to="/delivery">
              <li className="cursor-pointer">ДОСТАВКА</li>
            </NavLink>
            <li className="cursor-pointer">ПРОГРАММА ЛОЯЛЬНОСТИ</li>
            <li className="cursor-pointer">
              О STARBUCKS В РЕГИОНЕ MIDDLE EAST
            </li>
            <li className="cursor-pointer">
              ОФИЦИАЛЬНОЕ ЗАЯВЛЕНИЕ STARBUCKS{" "}
              <a
                className="p-3 cursor-default"
                href="https://youtu.be/zyizoEvtuLI?si=CToOfR0hpbUaN940"
              ></a>
            </li>
          </ul>
        </nav>
        <button className="flex items-center font-bold">
          <MapPin />
          <a
            className="p-3 cursor-default"
            href="https://youtu.be/zyizoEvtuLI?si=CToOfR0hpbUaN940"
          >
            Кофейни рядом
          </a>
        </button>
      </header>
    </>
  );
}

export default Header;
