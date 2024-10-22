import RightPanel from "../components/right_side/RightPanel";
import LeftPanel from "../components/left_side/LeftPanel";

const Main = () => {
  return (
    <>
      <div className="flex">
        <LeftPanel />
        <RightPanel />
      </div>
    </>
  );
};

export default Main;
