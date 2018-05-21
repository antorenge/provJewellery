var ProvJewellery = artifacts.require("./ProvJewellery.sol");
var Validate = artifacts.require("./Validate.sol");

module.exports = function (deployer) {
  deployer.deploy(ProvJewellery);
  deployer.deploy(Validate);
};
