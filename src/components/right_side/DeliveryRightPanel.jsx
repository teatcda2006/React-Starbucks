import data from "../../data/deliveryData.json";
import Comp4 from "./Component4";
import Footer from "../footer/Footer";

const DeliveryRightPanel = () => {
  return (
    <>
      <div className="flex-1">
        <img
          src={"../public/images/delivery/_2.png"}
          alt=""
          className="px-20"
        />

        <div className="px-20 py-8">
          <h1 className="pb-4 text-2xl">Starbucks® стал еще ближе</h1>
          <p className="text-sm">
            Заказывайте любимые кофе с доставкой домой! Узнайте, есть ли
            доставка рядом с вами, добавите в заказ любимую продукцию
            Starbucks®, и мы доставим вам домой вместе партнерами Wolt или
            ЯндексЕда.{" "}
          </p>
        </div>
        <img
          src={"../public/images/delivery/_2.png"}
          alt=""
          className="px-20"
              />
              
              <div className="px-20 py-8">
                  <h1 className="text-sm font-bold uppercase">Выбирай свой любимый напиток</h1>
                  <h1 className="py-4 text-2xl">Эспрессо Шейк с доставкой</h1>
                  <p className="text-sm">Эспрессо Овсяный Шейк – нежное сочетание охлажденного эспрессо светлой обжарки с сиропом из тростникового сахара с овсяной основой. Бодрящий и питательный напиток!</p>
                  <p className="text-sm">Эспрессо Шейк Пряная Ваниль – ароматный ванильный вкус с мягким эспрессо светлой обжарки на овсяной основе. Вкууусный и освежающий:)</p>
                  <p className="text-sm">Эспрессо Шейк Белая Мокка – идеальное сочетание светлого эспрессо с соусом Белая Мокка и овсяной основы. Насыщенный питательный вкус!</p>
                  <button className="my-8 px-4 py-1 text-sm font-bold text-green-700 border border-green-700 rounded-full duration-500 hover:bg-[#00cc8f2a] hover:duration-500">
          Хочу!
                  </button>
                  <h1 className="text-lg font-medium uppercase">НАШИ ПАРТНЕРЫ ПО ДОСТАВКЕ</h1>
              </div>
        
        <div className="grid grid-cols-2 gap-2 px-20">
          {data.map((data, index) => (
            <Comp4
              key={index}
              image={data.image}
              title={data.title}
              desc={data.desc}
            />
          ))}
              </div>
              <div className="px-20 pt-4">
                  <h1 className="pb-4 text-lg font-medium uppercase">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
                  <p>Часто задаваемые вопросы о Доставке Starbucks® FAQs.</p>
              </div>
              <Footer />
      </div>
    </>
  );
};

export default DeliveryRightPanel;
