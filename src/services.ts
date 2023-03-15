import { CryptoType } from "./types";
const cryptoData: CryptoType[] = [
  {
    name: "Bitcoin (BTC)",
    price: 31812.8,
    percentage: 10.99,
    tvl: 60000,
    popularPairs: ["Solana (SOL)", "Ethereum (ETH)", "Binance USD (BUSD)"],
  },
  {
    name: "Solana (SOL)",
    price: 32.83,
    percentage: -12.32,
    tvl: 60000,
    popularPairs: ["Bitcoin (BTC)", "Ethereum (ETH)", "Binance USD (BUSD)"],
  },
  {
    name: "Ethereum (ETH)",
    price: 1466.45,
    percentage: -11.93,
    tvl: 60000,
    popularPairs: ["Solana (SOL)", "Bitcoin (BTC)", "Binance USD (BUSD)"],
  },
  {
    name: "Binance USD (BUSD)",
    price: 1,
    percentage: 0.26,
    tvl: 60000,
    popularPairs: ["Solana (SOL)", "Ethereum (ETH)", "Binance USD (BUSD)"],
  },
  {
    name: "Shiba Inu (SHIB)",
    price: 0.00000001948,
    percentage: -8.1,
    tvl: 60000,
    popularPairs: ["Solana (SOL)", "Ethereum (ETH)", "Binance USD (BUSD)"],
  },
];

export const getAllAssets = () => {
  return cryptoData;
};
