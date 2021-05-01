const ThirstMoon = artifacts.require("ThirstMoon");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("token", function (accounts) {
  it("should assert true", async function () {
    let instance = await ThirstMoon.new({ from: accounts[0] });
    let donation = await instance._donationAddress();
    console.log("Donation:", donation);
    let balance = await instance.balanceOf(accounts[0]);
    console.log(balance.toString());
    await instance.transfer(accounts[1], 10000);
    let balanceDonation = await instance.balanceOf(
      "0x5B2FC1DA707a47657138c2D71D4369800e02476f"
    );
    console.log("Donation account: ", balanceDonation.toString());
    balance = await instance.balanceOf(accounts[1]);
    console.log(balance.toString());
    let tx = await instance.transfer(accounts[2], 10000, { from: accounts[1] });
    console.log("Event 0: ", tx.logs[0].args);
    console.log("Event 0: ", tx.logs[0].args.value.toString());
    // console.log("Event 1: ", tx.logs[1].args.value.toString());
    // console.log("Event: ", tx.logs);
    balance = await instance.balanceOf(accounts[2]);
    console.log(balance.toString());
    balance = await instance.balanceOf(accounts[0]);
    console.log(balance.toString());

    balanceDonation = await instance.balanceOf(
      "0x5B2FC1DA707a47657138c2D71D4369800e02476f"
    );
    console.log("Donation account: ", balanceDonation.toString());
  });
});
