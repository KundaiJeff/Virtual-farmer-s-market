/* eslint-disable react/prop-types */
const MarketCardi = ({ market }) => {
  return (
    <div className=" inline-flex gap-x-8 gap-y-4 grid-cols-max mt-9  ml-9 space-x-4">
      <div>
        <img
          className=" h-44 w-36 rounded-xl"
          src={market.image}
          alt="market image"
        />
        <div className="text-2xl text-center">{market.tittle}</div>
        <div>{market.description}</div>
        <div className="italic font-bold text-center">
          Total unit price ${market.price}
        </div>
        <div className="">{market.name}</div>
      </div>
    </div>
  );
};

export default MarketCardi;
