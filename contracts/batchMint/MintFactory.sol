// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IERC721 {

    function totalSupply() external view returns (uint);

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function mint(uint256 amount) external payable;
}

/**
 * 工厂合约
 */
contract MintFactory {
    constructor(address addr,uint frequency, uint count,uint weiNum) payable {
        for (uint i = 0; i < frequency; i++) {
            new CMint{value: weiNum}(addr, count);
        }
        // 自毁
        selfdestruct(payable(msg.sender));
    }
}

/**
 * mint合约
 */
contract CMint {
    constructor(address addr, uint256 amount) payable {
        uint size;
        assembly { size := extcodesize(addr) }
        require(size > 0,"address error");
        //获取总量
        uint t = IERC721(addr).totalSupply();
        IERC721(addr).mint{value: msg.value}(amount);
        // 归集
        for (uint i = 0; i < amount; i++) {
            IERC721(addr).transferFrom(address(this), address(tx.origin), t + i);
        }
        // 自毁
        selfdestruct(payable(tx.origin));
    }
}
