require('@nomiclabs/hardhat-waffle')
// require('solidity-coverage')
// require('@atixlabs/hardhat-time-n-mine')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.7.6',
  },
  networks: {
    optimism: {
      url: 'https://kovan.optimism.io',
      accounts: [
        '0xe62bab1bbd75f6168900b6118e7498a1a2320c288f72eeea884cc662e21b693b',
      ],
    },
  },
  mocha: {
    timeout: 300000,
  },
}
