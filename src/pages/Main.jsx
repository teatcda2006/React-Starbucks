import RightPanel from "../components/right_side/MainRightPanel";
import LeftPanel from "../components/left_side/LeftPanel";

const Main = () => {
  return (
    <>
      <div className="flex">
        <LeftPanel
          bg="/images/main/LeftPanelBackground.jpg"
        />
        <div className="flex gap-5 fixed text-white bottom-10 left-[9rem] text-sm font-bold">
        <button className="px-4 py-1 border rounded-full duration-500 hover:bg-[#fff2] hover:duration-500">
        Заказать сейчас
        </button>
        <button className="px-4 py-1 border rounded-full duration-500 hover:bg-[#fff2] hover:duration-500">
          Кофейни рядом
        </button>
        <a
          className="p-3 cursor-default"
          href="https://youtu.be/zyizoEvtuLI?si=CToOfR0hpbUaN940"
        ></a>
      </div>
        <RightPanel />
      </div>
    </>
  );
};

export default Main;
