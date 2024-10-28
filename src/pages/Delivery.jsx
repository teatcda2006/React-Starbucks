import LeftPanel from "../components/left_side/LeftPanel";
import DeliveryRightPanel from "../components/right_side/DeliveryRightPanel";

const Delivery = () => {
  return (
    <>
      <div className="flex">
              <LeftPanel bg="/images/delivery/_1.jpg" />
              <h1 className="flex gap-5 fixed text-white bottom-36 left-[9rem] text-sm">
              ЗАКАЖИТЕ ЛЮБИМЫЙ STARBUCKS® С ДОСТАВКОЙ
        </h1>
        <h1 className="flex gap-5 fixed text-white bottom-24 left-[9rem] text-2xl">
        Доставка Starbucks®
        </h1>
        <div className="flex gap-5 fixed text-white bottom-10 left-[9rem] text-sm font-bold">
          <button className="px-4 py-1 border rounded-full duration-500 hover:bg-[#fff2] hover:duration-500">
          Заказать сейчас
          </button>
          <a
            className="p-3 cursor-default"
            href="https://youtu.be/zyizoEvtuLI?si=CToOfR0hpbUaN940"
          ></a>
        </div>
        <DeliveryRightPanel />
      </div>
    </>
  );
};

export default Delivery;
