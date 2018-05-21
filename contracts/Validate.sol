pragma solidity ^0.4.18;

contract Validate {

    // Verify signed data
    function verify(address _addr, bytes32 hash, uint8 v, bytes32 r, bytes32 s)
        public view returns(bool) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHash = keccak256(prefix, hash);
        return ecrecover(prefixedHash, v, r, s) == _addr;
    }
}