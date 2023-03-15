import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { CryptoType } from "./types";
import { getAllAssets } from "./services";

const App: React.FC = () => {
  const [assets, setAssets] = useState<CryptoType[]>([]);
  useEffect(() => {
    let data = getAllAssets();
    setAssets(data);
  }, []);
  return (
    <div className="container my-16 ml-16 bg-mainbg font-tomorrow">
      <div className="flex">
        <img
          src="../images/activity.png"
          alt="i"
          style={{ height: "20px" }}
          className="my-1"
        />
        <p className="ml-1 text-white">
          {" "}
          <strong>Trending Assets</strong>
        </p>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-4 md:gap-3 sm:grid-cols-2 sm:gap-2 xs:grid-cols-1 gap-y-6 gap-x-4 mr-16 mt-10">
        {assets.map((crypto) => (
          <Card input={crypto} key={crypto.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
