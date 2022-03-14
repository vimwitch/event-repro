const { ethers } = require('ethers')
const { abi } = require('./artifacts/contracts/EventTest.sol/EventTest.json')

;(async () => {
  const provider = new ethers.providers.JsonRpcProvider('https://kovan.optimism.io')
  const wallet = new ethers.Wallet('0xe62bab1bbd75f6168900b6118e7498a1a2320c288f72eeea884cc662e21b693b', provider)
  const test = new ethers.Contract('0xf1b4703F96ac5f905C168bE7697915d8dDA06026', abi, provider)
  // start sending transactions
  txloop(test, wallet)
  const filter = {
    address: '0xf1b4703F96ac5f905C168bE7697915d8dDA06026',
    topics: [[
      test.filters.Event1().topics,
      test.filters.Event2().topics,
      test.filters.Event3().topics,
      test.filters.Event4().topics,
      test.filters.Event5().topics,
    ].flat()]
  }

  // now listen for blocks
  provider.on('block', async (b) => {
    const t = await test.queryFilter(filter, b, b)
    if (t.length > 0 && t.length < 5) {
      console.log(`Received ${t.length} events in immediate listener!`)
    } else if (t.length === 5) {
      console.log(`Received 5 events, in immediate listener for block ${b}.`)
    }
  })
  provider.on('block', async (b) => {
    setTimeout(async () => {
      const t = await test.queryFilter(filter, b, b)
      if (t.length > 0 && t.length < 5) {
        console.log(`Received ${t.length} events in delay listener!`)
      } else if (t.length === 5) {
        console.log(`Received 5 events, in delay listener for block ${b}.`)
      }
    }, 10000)
  })
})()

async function txloop(test, wallet) {
  for (;;) {
    const { blockNumber } = await test.connect(wallet).test().then(t => t.wait())
    console.log(`sent tx in block ${blockNumber}`)
    await new Promise(r => setTimeout(r, 5000))
  }
}
