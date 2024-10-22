import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState } from 'react';

const Comp6 = () => {

  const [openMenu, setOpenMenu] = useState({
    aboutUs: false,
    contactUs: false,
    socialResponsibility: false,
    loyaltyProgram: false,
  });

  const toggleMenu = (menuName) => {
    setOpenMenu((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };
  
  return (
    <div className="block px-20 mt-10 bg-white">
      <div>
      <ul className="block text-2xl">
        <li className="footer-menu-item">
          <div className="flex justify-between w-[100%] py-8" onClick={() => toggleMenu('aboutUs')}>
            <span className="heading-03">О нас</span>
            <button>
              <ChevronDownIcon
                  aria-hidden="true"
                  className="w-5 h-5 -mr-1 text-gray-400"
              />
            </button>
          </div>
          <div className={`overflow-hidden transition-all transform ${openMenu.aboutUs ? 'max-h-40 duration-1000' : 'max-h-0 duration-500'}`}>
            <ul className="text-sm font-bold bg-white">
              <li>
                <a href="#" className="block py-4 pr-4">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="block py-4 pr-4">
                  Starbucks история и новости
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="footer-menu-item">
          <div className="flex justify-between w-[100%] py-8" onClick={() => toggleMenu('contactUs')}>
            <span className="heading-03">Связаться с нами</span>
            <button>
              <ChevronDownIcon
                  aria-hidden="true"
                  className="w-5 h-5 -mr-1 text-gray-400"
              />
            </button>
          </div>
          <div className={`overflow-hidden transition-all duration-500 transform ${openMenu.contactUs ? 'max-h-20' : 'max-h-0 '}`}>
            <ul className="text-sm font-bold bg-white">
              <li>
                <a href="#" className="block py-4 pr-4">
                  Связаться с нами
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="footer-menu-item">
          <div className="flex justify-between w-[100%] py-8" onClick={() => toggleMenu('socialResponsibility')}>
            <span className="heading-03">Социальная ответственность</span>
            <button>
              <ChevronDownIcon
                  aria-hidden="true"
                  className="w-5 h-5 -mr-1 text-gray-400"
              />
            </button>
          </div>
          <div className={`overflow-hidden transition-all duration-500 transform ${openMenu.socialResponsibility ? 'max-h-20' : 'max-h-0'}`}>
            <ul className="text-sm font-bold bg-white">
              <li>
                <a href="#" className="block py-4 pr-4">
                  Ответственность
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="footer-menu-item">
          <div className="flex justify-between w-[100%] py-8" onClick={() => toggleMenu('loyaltyProgram')}>
            <span className="heading-03">Программа лояльности Starbucks</span>
            <button>
              <ChevronDownIcon
                  aria-hidden="true"
                  className="w-5 h-5 -mr-1 text-gray-400"
              />
            </button>
          </div>
          <div className={`overflow-hidden transition-all duration-500 transform ${openMenu.loyaltyProgram ? 'max-h-20' : 'max-h-0'}`}>
            <ul className="text-sm font-bold bg-white">
              <li>
                <a href="#" className="block py-4 pb-8 pr-4">
                  Программа лояльности Starbucks
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

      <hr className="border-[0.1rem] border-gray-300" />
      <div className="flex gap-4 py-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 25 25"
        >
          <a href="https://youtu.be/zyizoEvtuLI?si=CToOfR0hpbUaN940" className="w-full h-full cursor-default"><path d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm3.404 4.8h-2.626c-1.542 0-2.792 1.161-2.792 2.594v2.055h-1.39c-.108 0-.196.081-.196.181v2.132c0 .1.088.181.195.181h1.391v7.076c0 .1.088.181.196.181h2.782c.108 0 .195-.081.195-.181v-7.076h2.018c.1 0 .186-.072.194-.166l.194-2.132c.01-.105-.08-.196-.195-.196h-2.21V7.936c0-.354.309-.641.69-.641h1.554c.108 0 .196-.082.196-.182V4.981c0-.1-.088-.181-.196-.181z"></path>
        </a>
          </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 25 25"
        >
          <a href="https://youtu.be/dQw4w9WgXcQ?si=bedfC4QFwbnaCIdO" className="w-full h-full cursor-default">
          <path d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm3 5H9a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zm-.235 1.235a3 3 0 0 1 3 3v5.53l-.005.176a3 3 0 0 1-2.995 2.824h-5.53l-.176-.005a3 3 0 0 1-2.824-2.995v-5.53l.005-.176a3 3 0 0 1 2.995-2.824zm-2.97 2.47a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 1.236a2.265 2.265 0 1 1 0 4.53 2.265 2.265 0 0 1 0-4.53zm3.91-2.47a.824.824 0 1 0 0 1.647.824.824 0 0 0 0-1.647z"></path>
          </a>
          
        </svg>
      </div>

      <div className="pb-56">
        <ul className="block text-sm font-bold">
          <li className="py-3 cursor-pointer">
            Положение о конфиденциальности
          </li>
          <li className="py-3 cursor-pointer">Условия использования сайта</li>
          <li className="py-3 cursor-pointer">
            ПОЛИТИКА STARBUCKS В ОТНОШЕНИИ ФАЙЛОВ COOKIE
          </li>
          <li className="py-3 cursor-pointer">Публичная оферта</li>
        </ul>
        <p className="py-3 text-sm font-bold text-green-800 cursor-pointer">
          Выберите свое местоположение
        </p>
      </div>
    </div>
  );
};

export default Comp6;
