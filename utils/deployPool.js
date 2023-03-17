import { ethers, BigNumber } from "ethers";
import { axios } from "axios";
import Web3Modal from "web3modal";

const bn = require("bignumber.js");
bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });

const UNISWAP_V3_FACTORY_ADDRESS = "0x52173b6ac069619c206b9A0e75609fC92860AB2A";
const NON_FUNGIBLE_MANAGER = "0xd977422c9eE9B646f64A4C4389a6C98ad356d8C4";

const artifacts = {
  UniswapV3Factory: require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
  NonfungiblePositionManager: require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
};

export const fetchFactoryContract = (signerOrProvider) =>
  new ethers.Contract(
    UNISWAP_V3_FACTORY_ADDRESS,
    artifacts.UniswapV3Factory.abi,
    signerOrProvider
  );

export const fetchManagerContract = (signerOrProvider) =>
  new ethers.Contract(
    NON_FUNGIBLE_MANAGER,
    artifacts.NonfungiblePositionManager.abi,
    signerOrProvider
  );

const encodePriceSqrt = (reserve1, reserve0) => {
  return BigNumber.from(
    new bn(reserve1.toString())
      .div(reserve0.toString())
      .sqrt()
      .multipliedBy(new bn(2).pow(96))
      .integerValue(3)
      .toString()
  );
};

export const creatingPoolContract = async (
  address1,
  address2,
  fee,
  tokenAmount1,
  tokenAmount2
) => {
  const web3modal = new Web3Modal();
  const connection = await web3modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();

  const createPoolContract = fetchManagerContract(provider);

  const price = encodePriceSqrt(tokenAmount1, tokenAmount2);

  const transaction = await createPoolContract
    .connect(signer)
    .createAndInitializePoolIfNecessary(address1, address2, fee, price, {
      gasLimit: 30000000,
    });

  await transaction.wait();

  const factory = fetchFactoryContract(provider);
  const poolAddress = await factory.getPool(address1, address2, fee);

  return poolAddress;
};
