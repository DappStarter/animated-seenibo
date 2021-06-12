require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remind hole grace infant flat test'; 
let testAccounts = [
"0xf8a1450a93798610734119b589df316825711ba5964a51f91ccd3e0640cac80c",
"0x4f952e4aba48994a9b12615e090e647eb32886d014200f9bf5e6fdc241b22a65",
"0xea32a2aa7bae9677e942c93913c9dd51b2d0f699fd7a07a7173b1ed671ecd87f",
"0xbf0020fc8fed4d0f8c0846e287531b6128d53b1a02716ea18d41af541c676a76",
"0x5064fe62587f67fbd950cf6c8f543be5b15f81531c45a1ad72d31223f870c7d2",
"0xad2397260f4bd6935a505c33c3b6398ac832c33f2759d0c7317f8ad62a9e892b",
"0x4de0d02ec00779fb5409cda843dabb77754d27b7354727b13ea33f7ef70cd7bf",
"0x5a764e103fee9b48361d701789e024668bc63090ae82283f1be6f7fa58ace626",
"0x612ab988d1496b466a71f722edb8adf133d20e4cb053d913151f802c6a363f28",
"0x4cb932f44014097a0826e1e853ab1d9932c43b81bde937b0347d2a4ee5d3be81"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

