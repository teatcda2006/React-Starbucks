const Comp6 = () => {
  return (
    <div className="block px-20 mt-10 bg-white">
      <div>
        <ul className="block text-2xl">
          <li className="py-8 cursor-pointer">О нас</li>
          <li className="py-8 cursor-pointer">Связаться с нами</li>
          <li className="py-8 cursor-pointer">Социальная ответственность</li>
          <li className="py-8 cursor-pointer">
            Программа Лояльности Starbucks
          </li>
        </ul>
      </div>
      <hr className="border-[0.1rem] border-gray-300" />
      <div className="flex py-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 25 25"
        >
          <path d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm3.404 4.8h-2.626c-1.542 0-2.792 1.161-2.792 2.594v2.055h-1.39c-.108 0-.196.081-.196.181v2.132c0 .1.088.181.195.181h1.391v7.076c0 .1.088.181.196.181h2.782c.108 0 .195-.081.195-.181v-7.076h2.018c.1 0 .186-.072.194-.166l.194-2.132c.01-.105-.08-.196-.195-.196h-2.21V7.936c0-.354.309-.641.69-.641h1.554c.108 0 .196-.082.196-.182V4.981c0-.1-.088-.181-.196-.181z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
        >
          <path d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm3 5H9a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zm-.235 1.235a3 3 0 0 1 3 3v5.53l-.005.176a3 3 0 0 1-2.995 2.824h-5.53l-.176-.005a3 3 0 0 1-2.824-2.995v-5.53l.005-.176a3 3 0 0 1 2.995-2.824zm-2.97 2.47a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 1.236a2.265 2.265 0 1 1 0 4.53 2.265 2.265 0 0 1 0-4.53zm3.91-2.47a.824.824 0 1 0 0 1.647.824.824 0 0 0 0-1.647z"></path>
        </svg>
      </div>
      <div>
        <ul className="block text-sm font-bold">
          <li className="py-3 cursor-pointer">Положение о конфиденциальности</li>
          <li className="py-3 cursor-pointer">Условия использования сайта</li>
          <li className="py-3 cursor-pointer">ПОЛИТИКА STARBUCKS В ОТНОШЕНИИ ФАЙЛОВ COOKIE</li>
          <li className="py-3 cursor-pointer">Публичная оферта</li>
        </ul>
      </div>
    </div>
  );
};

export default Comp6;
