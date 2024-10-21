import Comp1 from "./Component1";
import Comp2 from "./Component2";
import Comp3 from "./Component3";
import Comp4 from "./Component4";
import Comp5 from "./Component5";
import Comp6 from "./Component6";
import data from "../../data/data.json"

const RightPanel = () => {
  return (
    <div className="flex-1">
      {data.map((data, index) => (
        <Comp1
          key={index}
          image={data.image}
          title={data.title}
          desc={data.desc}
        />
      ))}
      <Comp2 />
      <Comp3 />
      <div className="grid grid-cols-2 gap-2 px-20">
        <Comp4
          image="../public/images/card_img1.png"
          title="Starbucks История"
          desc="Starbucks Истории и новости"
        />
        <Comp4
          image="../public/images/card_img2.png"
          title="О нас"
          desc="Узнать больше о нашей компании и наследии"
        />
        <Comp4
          image="../public/images/card_img3.png"
          title="Доставка Starbucks®"
          desc="Доставка Starbucks®"
        />
      </div>
      <Comp5 />
      <Comp1
        image="../public/images/img_6.png"
        title="Доставка Starbucks®"
        desc="Подарить себе новые впечатления от давно знакомого и любимого кофе Starbucks® проще, чем кажется. Насладитесь любимым кофе из своей любимой чашки."
          />
          <Comp6 />
    </div>
  );
};

export default RightPanel;
