const LeftPanel = ({ bg }) => {
  return (
    <div className="w-[38%]">
      <div
        className="
            h-screen
            sticky
            top-0
						
            bg-cover
            bg-no-repeat
            bg-center

            before:absolute
            before:inset-0
            before:bg-gradient-to-b
            before:from-transparent
            before:from-30%
            before:via-[#00000097]
            before:via-95%
            before:to-[#000000a9]
            before:opacity-75"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
    </div>
  );
};

export default LeftPanel;
