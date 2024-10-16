const Comp4 = ({ image, title, desc }) => {
  return (
    <div className="block max-h-[30rem] w-fit border shadow-md mb-8 bg-white">
      <img src={image} alt="img_1" className="w-[32rem]" />
      <div className="block w-[29rem] p-5">
        <h3 className="text-xl ">{title}</h3>
        <p className="pb-5 text-sm">{desc}</p>
        <button className="px-4 py-1 text-sm font-bold text-green-700 border border-green-700 rounded-full">
          Узнать больше
        </button>
      </div>
    </div>
  );
};

export default Comp4;
