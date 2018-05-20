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
        Record design;
        Record order;
        Record orderProduct;
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

    function setItemDesign(string _serialNo, string _signedDesign)
        public returns (string) {
        // Add an items design to jewelleries list
        jewelleries[_serialNo].design = Record({
            id: _serialNo, object: _signedDesign, createdBy: msg.sender,
            exists: true });

        return _serialNo;
    }

    function setItemOrder(string _serialNo, string _signedOrder)
        public returns (string) {
        // Add an items order to jewelleries list
        jewelleries[_serialNo].order = Record({
            id: _serialNo, object: _signedOrder, createdBy: msg.sender,
            exists: true });

        return _serialNo;
    }

    function setItemOrderProduct(string _serialNo, string _signedOrderProduct)
        public returns (string) {
        // Add an items order product to jewelleries list
        jewelleries[_serialNo].orderProduct = Record({
            id: _serialNo, object: _signedOrderProduct, createdBy: msg.sender,
            exists: true });

        return _serialNo;
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

    function getItemDesign(string _serialNo) public view returns (string) {
        return jewelleries[_serialNo].design.object;
    }

    function getItemOrder(string _serialNo) public view returns (string) {
        return jewelleries[_serialNo].order.object;
    }

    function getItemOrderProduct(string _serialNo)
        public view returns (string) {
        return jewelleries[_serialNo].orderProduct.object;
    }

    function getItemDelivery(string _serialNo)
        public view returns (string) {
        return jewelleries[_serialNo].delivery.object;
    }

    function getItemValidations(string _serialNo)
        public view returns (string prod, string wip) {
        return (jewelleries[_serialNo].validations[0].object,
            jewelleries[_serialNo].validations[1].object);
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