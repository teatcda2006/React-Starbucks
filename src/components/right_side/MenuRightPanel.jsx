import data from "../../data/menuData.json";
import Comp4 from "./Component4";
import Comp2 from "./Component2";
import Comp6 from "./Component6";
import Comp7 from "./Component7";
import Footer from "../footer/Footer";

const MenuRightPanel = () => {
  return (
    <>
      <div className="flex-1">
        <Comp6 />
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
              <Comp2
                  bg="/images/menu/BigPic.jpg"
              />
              <Comp7 />
              <Footer />
      </div>
    </>
  );
};

export default MenuRightPanel;
