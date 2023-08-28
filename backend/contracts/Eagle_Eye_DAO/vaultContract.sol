// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * vaultContract - Eagle-Eye platform safe
 * percentage of Reviewers' earnings is locked here, to be decided on by the EagleEye Governance forum
 */

contract vaultContract is Ownable {
    event proposalUsed(address);

    function transferFund(address payable proposalUse) public onlyOwner {
        (bool sent,)= proposalUse.call{value:address(this).balance}("");
        require(sent, "Transfer failed");
        emit proposalUsed(proposalUse);
    }
    receive() external payable{}

    fallback() external payable {}
}
