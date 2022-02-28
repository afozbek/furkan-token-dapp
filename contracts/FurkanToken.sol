//SPDX-License-Identifier: Unlicense
pragma solidity >=0.7.0;

import "hardhat/console.sol";

contract FurkanToken {
    string private name;

    constructor(string memory _name) {
        console.log("Deploying a Greeter with greeting:", _name);
        name = _name;
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function setName(string memory _newName) public {
        console.log("Changing greeting from '%s' to '%s'", name, _newName);
        name = _newName;
    }
}
