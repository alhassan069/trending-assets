import React from "react";
import { CryptoType } from "../types";

const toSt = (x: any) => {
  if (Math.abs(x) < 1.0) {
    let e = parseInt(x.toString().split("e-")[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = "0." + new Array(e).join("0") + x.toString().substring(2);
    }
  } else {
    let e = parseInt(x.toString().split("+")[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += new Array(e + 1).join("0");
    }
  }
  return x;
};

const Card: React.FC<{ input: CryptoType }> = ({ input }) => {
  const currencyFormat = (num: number) => {
    if (Number.isInteger(num) || num.toString().split(".")[1].length <= 2)
      return "$" + num.toFixed(2);
    else return "$" + toSt(num);
  };
  return (
    <div className="bg-mainbg border-solid border-green-600 rounded h-96">
      <div className="circle bg-cardbg">
        <img
          src={"../images/" + input.name + ".png"}
          className="mx-auto my-auto"
          alt=""
        />
      </div>
      <div className="flex flex-row">
        <div className="curv1 basis-1/3"></div>
        <div className="curvMid basis-1/3"></div>
        <div className="curv2 basis-1/3"></div>
      </div>
      <div className="contentsbox h-80 flex flex-col">
        <div className="text-center text-textcolor mt-3">
          <p className="text-sm">{input.name}</p>
        </div>
        <div className="h-10 rounded-full bg-mainbg w-48 mt-4 mb-2 mx-auto flex flex-row justify-center">
          <div className="text-textcolor2 text-sm text-center mt-2">
            {currencyFormat(input.price)}
          </div>
          {input.percentage < 0 ? (
            <div className="text-red-400  text-xs ml-1 mt-2">
              {input.percentage + "%"}
            </div>
          ) : (
            <div className="text-green-400 ml-1 text-xs mt-2">
              {"+" + input.percentage + "%"}
            </div>
          )}
        </div>
        <div className="text-center text-textcolor">
          <p className="text-sm">Price</p>
        </div>
        <div className="h-10 rounded-full bg-mainbg w-40 mt-4 mb-2 mx-auto">
          <div className="text-textcolor2 text-sm text-center mx-auto mt-3">
            {input.tvl}
          </div>
        </div>
        <div className="text-center text-textcolor">
          <p className="text-sm">TVL</p>
        </div>
        <div className="h-10 rounded-full bg-mainbg w-28 mt-4 mb-2 mx-auto flex flex-row">
          <img
            src={"../images/" + input.popularPairs[0] + ".png"}
            alt=""
            className="h-7 m-auto"
          />
          <img
            src={"../images/" + input.popularPairs[1] + ".png"}
            alt=""
            className="h-7 m-auto"
          />
          <img
            src={"../images/" + input.popularPairs[2] + ".png"}
            alt=""
            className="h-7 m-auto"
          />
        </div>
        <div className="text-center text-textcolor">
          <p className="text-xs">Popular pairs</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
