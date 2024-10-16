import { MapPin } from 'lucide-react';

function Header() {

  return (
    <>
      <header className='flex items-center justify-between p-6 border shadow-md text-[0.9rem] bg-white'>
        <nav className='flex items-center gap-11'>
        <img src={"images/logo.png"} alt="Starbucks" className="w-12" />
          <ul className='flex gap-4 font-medium uppercase'>
            <li className='cursor-pointer'>МЕНЮ</li>
            <li className='cursor-pointer'>ДОСТАВКА</li>
            <li className='cursor-pointer'>ПРОГРАММА ЛОЯЛЬНОСТИ</li>
            <li className='cursor-pointer'>О STARBUCKS В РЕГИОНЕ MIDDLE EAST</li>
            <li className='cursor-pointer'>ОФИЦИАЛЬНОЕ ЗАЯВЛЕНИЕ STARBUCKS</li>
          </ul>
        </nav>
        <button className='flex items-center font-bold'>
          <MapPin/>
          <span className='p-3'>Кофейни рядом</span>
        </button>
      </header>
    </>
  );
}

export default Header;
