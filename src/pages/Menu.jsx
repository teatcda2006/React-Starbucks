import LeftPanel from "../components/left_side/LeftPanel";
import MenuRightPanel from "../components/right_side/MenuRightPanel";

const Menu = () => {
  return (
    <>
      <div className="flex">
        <LeftPanel bg="/images/menu/MenuImg2.jpg" />
        <h1 className="flex gap-5 fixed text-white bottom-24 left-[9rem] text-3xl">
          Меню
        </h1>
        <div className="flex gap-5 fixed text-white bottom-10 left-[9rem] text-sm font-bold">
          <button className="px-4 py-1 border rounded-full duration-500 hover:bg-[#fff2] hover:duration-500">
            Заказать доставку
          </button>
          <button className="px-4 py-1 border rounded-full duration-500 hover:bg-[#fff2] hover:duration-500">
            Кофейни рядом
          </button>
          <a
            className="p-3 cursor-default"
            href="https://youtu.be/zyizoEvtuLI?si=CToOfR0hpbUaN940"
          ></a>
        </div>
        <MenuRightPanel />
      </div>
    </>
  );
};

export default Menu;
