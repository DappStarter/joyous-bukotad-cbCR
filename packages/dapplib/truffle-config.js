require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy raise stick hospital inner arctic army gesture'; 
let testAccounts = [
"0xe0f965accffaa63d11baedea015155eb51eb00f6fe0dc7fa1a7051582e634fb5",
"0xdcbbece70e9b20597f09ecaa54a941e99e3383b22769776d033bb03e61d68711",
"0xea85faadc8f35c579e8ab93ad53cc38ca8abc298120483c7a92ad74b6c8df0d4",
"0xee250309a6d32596013e535de3a884ee2610ef4dcaa7134f698c45ff3a80ba87",
"0x86cf13131e28754dd83ebd836a5ae29d7280252c58148a37d954888c925feef3",
"0xa493442bc85354ed636bbcabbdba0bafcbf1fe597432652b5c14c907f89220bb",
"0x49921e5f1ad4d8400626e7472fe60d5b9a58821dffb3f0887176093ef2ec1ed8",
"0x699d8963eedcef8883db32bd2491660f083865f3a5f1c07b8ef064cdbcbe9127",
"0xe1d9558f45f5ec67d3dfe3122df09785cf1055e65fbb92b4b0f39ab22f811f0e",
"0xe2867d92efa2efc7ba88c1a1ded50de6b848d836e81bde412df9d619702945ec"
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

