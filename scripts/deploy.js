;(async () => {
  const EventTestFactory = await ethers.getContractFactory('EventTest')
  const eventTest = await EventTestFactory.deploy()
  await eventTest.deployed()

  console.log(`Deployed at ${eventTest.address}`)
})()
