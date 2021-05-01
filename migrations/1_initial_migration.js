const Migrations = artifacts.require("Migrations");
const ThirstMoon = artifacts.require("ThirstMoon");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ThirstMoon);
};
