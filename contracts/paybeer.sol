// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract paybeer {
    struct Memo {
        string name;
        string message;
        uint256 timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner;
    bool private locked;

    modifier noReentrancy() {
        require(!locked, "Reentrant call");
        locked = true;
        _;
        locked = false;
    }

    constructor() {
        owner = payable(msg.sender);
    }

    function paybeermarket(string memory name, string memory message) public payable noReentrancy {
         require(msg.value > 0, "Price for a Beer is 1 ether or 2 depends of you");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}