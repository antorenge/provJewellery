pragma solidity ^0.4.18;

contract ProductDesign {

    struct Design {
        string sku;
        string design;
        bool exists;
    }

    address createdBy;

    mapping(string => Design) designs;

    function createDesign(string _sku, string _signedDesign) public returns (string) {
        // Prevent duplicate sku's
        require(designs[_sku].exists != true);

        // Add product design to blockchain
        createdBy = msg.sender;
        designs[_sku] = Design({ sku: _sku, design: _signedDesign, exists: true });

        return _sku;
    }

    function getDesign(string sku) public view returns (string) {
        return designs[sku].design;
    }


}