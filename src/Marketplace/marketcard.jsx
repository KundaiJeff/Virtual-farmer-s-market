import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useEffect } from "react";
import MarketCardi from "./Card";
import Home from "../Home";
import Navbar from "../HomePage/Navbar";

const Marketcard = () => {
  const [fetchError, setFetchError] = useState(null);
  const [market, setMarket] = useState([]);

  const fetchMarket = async () => {
    const { data, error } = await supabase.from("market").select("*");
    if (error) {
      setFetchError("could not fetch the marketplace info");
      setMarket(null);
      console.log(error);
    }
    console.log(data);
    if (data) {
      setMarket(data);
      setFetchError(null);
    }
  };

  useEffect(() => {
    fetchMarket();
  }, []);

  return (
    <div className="">
      <Navbar />
      <h1
        className="h-16  text-center font-extrabold text-green text-6xl  pt-5 "
      >
        Virtual Market Place
      </h1>
      <div className="  ">
        {fetchError && <p>{fetchError}</p>}
        {market && (
          <div>
            {market.map((market) => (
              <MarketCardi key={market.id} market={market} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketcard;
