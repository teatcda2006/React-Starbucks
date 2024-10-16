import Comp1 from "./Component1";
import Comp2 from "./Component2";
import Comp3 from "./Component3";
import Comp4 from "./Component4";
import Comp5 from "./Component5";
import Comp6 from "./Component6";

const RightPanel = () => {
  return (
    <div className="flex-1">
      <Comp1
        image="../public/images/img_2.png"
        title="Официальное Заявление Starbucks"
        desc="В Starbucks правда и прозрачность процессов необходимы для выполнения
                нашей миссии, выполнения наших обещаний и соблюдения наших ценностей.
                Поэтому, когда дезинформация о нашей компании распространяется с
                молниеносной скоростью во все более полярном мире, мы считаем крайне
                важным реагировать фактами и подтверждать нашу позицию по ключевым
                вопросам."
      />
      <Comp1
        image="../public/images/img_1.jpg"
        title="Факты о Starbucks в регионе Middle East"
        desc="Starbucks представлен в регионе Middle East с 1999 года на основании
                лицензионного соглашения с торговым партнером и лицензиатом MH
                Alshaya Co., частным кувейтским семейным бизнесом. Чтобы узнать больше о Starbucks в регионе Middle East, нажмите на
                кнопку ниже."
      />
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
