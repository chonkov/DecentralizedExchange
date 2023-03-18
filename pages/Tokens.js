import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

import Style from "../styles/Tokens.module.css";
import images from "../assets";
import { AllTokens } from "../components/index";
import { SwapTokenContext } from "../context/swapContext";

const Tokens = () => {
  const { topTokensList } = useContext(SwapTokenContext);

  const [allTokenList, setAllTokenList] = useState(topTokensList);
  const [copyAllTokenList, setCopyAllTokenList] = useState(allTokenList);
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  const onHandleSearch = (value) => {
    const filteredTokens = allTokenList.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredTokens.length === 0) {
      setAllTokenList(copyAllTokenList);
    } else {
      setAllTokenList(filteredTokens);
    }
  };

  const onClearSearch = () => {
    if (allTokenList.length && copyAllTokenList.length) {
      setAllTokenList(copyAllTokenList);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  return (
    <div className={Style.Tokens}>
      <div className={Style.TokensBox}>
        <h2>Top Tokens on Uniswap</h2>
        <div className={Style.TokensBoxHeader}>
          <div className={Style.TokensBoxEthereum}>
            <p>
              <Image
                src={images.etherlogo}
                alt="ether"
                width={20}
                height={20}
              />
            </p>
            <p>Ethereum</p>
          </div>
          <div className={Style.TokensBoxSearch}>
            <p>
              <Image src={images.search} alt="image" width={20} height={20} />
            </p>
            <input
              type="text"
              placeholder="Filter tokens"
              onChange={(e) => setSearchItem(e.target.value)}
              value={searchItem}
            />
          </div>
        </div>

        <AllTokens allTokenList={topTokensList} />
      </div>
    </div>
  );
};

export default Tokens;
