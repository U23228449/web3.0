//https://eth-sepolia.g.alchemy.com/v2/MY_BugSoM3oTT7Rn27ppzpWGEDu2bUvn

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.27',
  networks: { // Cambiar 'network' por 'networks'
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/MY_BugSoM3oTT7Rn27ppzpWGEDu2bUvn',
      accounts: ['5d534969c21c674376b2f349a679e0c2812490a1c57137536499585aa5c2e157']
    }
  }
};
