//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * ReviewerContract-  This contract keeps track of reviewers on the forum
 */
contract ReviewerContract {
    //each report is represented as a uniqueID mapped to the reviewer that submitted it
    mapping(uint => address) public mappedReportToAddress;
    uint report;
    error failed_to_send_ether();
    IERC20 EAGToken;

    constructor(address EAGTokenAddress) {
        EAGToken = IERC20(EAGTokenAddress);
    }

    function submitReport() public {
        require(msg.sender != address(0), "invalid address");
        report++;
        mappedReportToAddress[report] = msg.sender;
    }

    function payReviewer(uint reportID) public payable {
        require(reportID != 0, "invalid reportID");
        require(reportID <= report, "invalid reportID");
        (bool sent, ) = payable(mappedReportToAddress[reportID]).call{
            value: msg.value
        }("");
        if (!sent) revert failed_to_send_ether();
        //transfer EAGToken from the contract balance to the reviewer as reward
        require(
            EAGToken.transfer(payable(mappedReportToAddress[reportID]), 10),
            "Transfer of Token failed"
        );
    }

    function getTotalNumberOfReports() public view returns (uint) {
        return report;
    }
}
