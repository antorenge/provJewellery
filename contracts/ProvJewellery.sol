pragma solidity ^0.4.18;

contract ProvJewellery {

    struct Record {
        string id;
        string object;
        address createdBy;
        bool exists;
    }

    struct Jewellery {
        string serialNo;
        Record delivery;
        Record[] validations;
        Record valueAddition;
        Record ownership;
        bool exists;
    }

    mapping(string => Record) designs;
    mapping(string => Jewellery) jewelleries;

    function setProductDesign(string _sku, string _signedDesign)
        public returns (string) {
        // Prevent overwriting a product design
        require(designs[_sku].exists != true);

        // Add product design to blockchain
        designs[_sku] = Record({
            id: _sku, object: _signedDesign, createdBy: msg.sender,
            exists: true });

        return _sku;
    }

    function setItemDelivery(string _serialNo, string _signedDelivery)
        public returns (string) {
        // Add an items delivery to jewelleries list
        jewelleries[_serialNo].delivery = Record({
            id: _serialNo, object: _signedDelivery, createdBy: msg.sender,
            exists: true });

        return _serialNo;
    }

    function setItemValidations(string _serialNo, string _signedValidation)
        public returns (string) {
        // Add an items validations to jewelleries list
        jewelleries[_serialNo].validations.push(Record({
            id: _serialNo, object: _signedValidation, createdBy: msg.sender,
            exists: true }));

        return _serialNo;
    }

    function setItemValueAddition(string _serialNo, string _signedWIP)
        public returns (string) {
        // Add an items value addition to jewelleries list
        jewelleries[_serialNo].valueAddition = Record({
            id: _serialNo, object: _signedWIP, createdBy: msg.sender,
            exists: true });

        return _serialNo;
    }

    function setItemOwnership(string _serialNo, string _signedOwnership)
        public returns (string) {
        // Add an items ownership to jewelleries list
        jewelleries[_serialNo].ownership = Record({
            id: _serialNo, object: _signedOwnership, createdBy: msg.sender,
            exists: true });

        return _serialNo;
    }

    function getProductDesign(string _sku) public view returns (string) {
        return designs[_sku].object;
    }

    function getItemDelivery(string _serialNo)
        public view returns (string) {
        return jewelleries[_serialNo].delivery.object;
    }

    function getItemProdValidation(string _serialNo)
        public view returns (string) {
        return jewelleries[_serialNo].validations[0].object;
    }

    function getItemWipValidation(string _serialNo)
        public view returns (string) {
        return jewelleries[_serialNo].validations[1].object;
    }

    function getItemValueAddition(string _serialNo)
        public view returns (string) {
        return jewelleries[_serialNo].valueAddition.object;
    }

    function getItemOwnership(string _serialNo)
        public view returns (string) {
        return jewelleries[_serialNo].ownership.object;
    }

}