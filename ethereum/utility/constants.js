const BN = require('bn.js');
const { web3 } = require('@openzeppelin/test-environment');

exports.FET_ERC20 = {
    _name : "Fetch.AI",
    _symbol : "FET",
    // source codes seems to require initial supply to already be multiplied by _decimals
    _initialSupply : new BN("1152997575000000000000000000"),
    _decimals : 18,
    //_mintable : false,
    multiplier: new BN('1000000000000000000')  // according to decimals, to convert FET into the smallest unit of FET
};

exports.Contract = {Status: {
                     LOCK_PERIOD_FOR_UNBOUND_STAKE: 185142, // = 30*24*60*60[s] / (14[s/block]);
                     DEFAULT_ADMIN_ROLE: '0x0000000000000000000000000000000000000000000000000000000000000000',
                     DELEGATE_ROLE: web3.utils.soliditySha3('DELEGATE_ROLE')
                 }};
