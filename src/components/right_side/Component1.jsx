const Comp1 = ({ image, title, desc }) => {
  return (
    <div className="flex max-h-[30rem] pl-20 pt-10">
      <img src={image} alt="img_1" className="pr-20 w-[37rem]" />
      <div className="block w-[29rem]">
        <h3 className="pb-5 text-xl font-bold">{title}</h3>
        <p className="pb-5 text-sm">{desc}</p>
        <button className="px-4 py-1 text-sm font-bold text-green-700 border border-green-700 rounded-full">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default Comp1;
