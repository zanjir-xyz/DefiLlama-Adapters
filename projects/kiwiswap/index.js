const ADDRESSES = require('../helper/coreAssets.json')
const { sumTokens2 } = require("../helper/unwrapLPs");

const pools = {
    AMOU_USDT: "0x5b638dee4c9af8f614363a6cf82ca27eb272e1ba",
};

const tokens = {
    USDT: ADDRESSES.zanjir.USDT,
};


async function tvl(api) {
    return sumTokens2({
        api, tokensAndOwners: [
            [tokens.USDT, pools.AMOU_USDT],
        ],
    });
}

module.exports = {
    zanjir: { tvl, }
}