pragma solidity ^0.7.0;

contract EventTest {
  event Event1 (uint num);
  event Event2 (uint num);
  event Event3 (uint num);
  event Event4 (uint num);
  event Event5 (uint num);
  function test() public {
    emit Event1(block.timestamp);
    for (uint x; x < 1000; x++) {
      keccak256(abi.encodePacked(x));
    }
    emit Event2(block.timestamp);
    for (uint x; x < 1000; x++) {
      keccak256(abi.encodePacked(x**2));
    }
    emit Event3(block.timestamp);
    for (uint x; x < 1000; x++) {
      keccak256(abi.encodePacked(x**5));
    }
    emit Event4(block.timestamp);
    for (uint x; x < 1000; x++) {
      keccak256(abi.encodePacked(x**9));
    }
    emit Event5(block.timestamp);
  }
}
