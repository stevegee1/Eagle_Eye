export const ABI= [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "ReviewerContractAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_vaultContractAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "EAGTokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "notSentTo_vaultContract",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "reportID",
          "type": "uint256"
        }
      ],
      "name": "check_and_pay_Review",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ]