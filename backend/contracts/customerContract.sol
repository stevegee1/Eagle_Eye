//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;
import "./ReviewerContract.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract customerContract {
    ReviewerContract reviewerContract;
    address payable vaultContractAddress; //DAO vaultContract
    error notSentTo_vaultContract(address, uint);
    IERC20 EAGToken;
    constructor(
        address ReviewerContractAddress,
        address payable _vaultContractAddress,
        address EAGTokenAddress
    ) {
        reviewerContract = ReviewerContract(ReviewerContractAddress);
        vaultContractAddress = _vaultContractAddress;
        EAGToken= IERC20(EAGTokenAddress);
    }

    // 1 AVAX = 10usd
    // 1 Arbitrum = 0.92usd
    function check_and_pay_Review(uint reportID) public payable {
        require(
            msg.value >= 1 ether,
            "You must have at least 1 eth to view full report"
        );

        //send some percentage of message.value to the DAO vault contract
        //10 percent of the earning goes to the vaultContract
        uint vaultFund = (msg.value / 10);
        (bool sent, ) = vaultContractAddress.call{value: vaultFund}("");
        if (!sent) revert notSentTo_vaultContract(msg.sender, vaultFund);

        //send other percentage of message.value to the Reviewer with the reportID
        uint reviewerFund = msg.value - vaultFund;
        reviewerContract.payReviewer{value: reviewerFund}(reportID);

        //claimReward_EAG, Customer are rewarded 10 EAGToken for everychecked review
        require(EAGToken.transfer(msg.sender, 10), "Transfer of Token failed");
    }
 
}
