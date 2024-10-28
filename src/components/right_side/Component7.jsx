const Comp7 = () => {
  return (
    <>
      <div className="block pt-10 pl-20">
        <h2 className="pb-5 text-3xl">
          Теперь Starbucks можно заказать у партнера ЯндексЕда
        </h2>

        <button className="px-4 py-1 text-sm font-bold text-green-700 border border-green-700 rounded-full duration-500 hover:bg-[#00cc8f2a] hover:duration-500">
          Заказать
        </button>
        <a
          className="p-3 cursor-default"
          href="https://youtu.be/zyizoEvtuLI?si=CToOfR0hpbUaN940"
        ></a>
        <h2 className="pt-16 pb-4 font-bold uppercase">Аллергены</h2>
        <p className="w-[70%] pb-16">
          Мы не можем гарантировать, что наша продукция не содержит конкретного
          аллергена ввиду использования общего оборудования, посуды и открытой
          обработки продукции в наших кофейнях.
        </p>
        <button className="px-4 py-1 text-sm font-bold text-green-700 border border-green-700 rounded-full duration-500 hover:bg-[#00cc8f2a] hover:duration-500">
          Узнать больше
        </button>
      </div>
    </>
  );
};

export default Comp7;
