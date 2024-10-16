const LeftPanel = () => {
  return (
    <div className="w-[38%]">
      <div className="
            h-screen
            sticky
            top-0
						
            bg-[url('/images/LeftPanelBackground.jpg')]
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
            before:opacity-75">
      </div>
      <div className="flex gap-5 fixed text-white bottom-10 left-[9rem] text-sm font-bold">
        <button className="px-4 py-1 border rounded-full">Заказать сейчас</button>
        <button className="px-4 py-1 border rounded-full">Кофейни рядом</button>
      </div>
    </div>
  );
};

export default LeftPanel;
