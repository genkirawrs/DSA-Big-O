function TowerOfHanoi(height, srcP, desP, bufferP, moves) {
  let addMove = moves;

  if (height >= 1) {
    addMove = moves + 1;
    // Move a tower of height-1 to the buffer peg, using the destination peg.
    TowerOfHanoi(height - 1, srcP, bufferP, desP, addMove);

    // Move the remaining disk to the destination peg.
    console.log('Move disk from Tower ' + srcP + ' to Tower ' + desP);

    // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
    TowerOfHanoi(height - 1, bufferP, desP, srcP, addMove);
  }
  return addMove;
}

let test = TowerOfHanoi(3, "A", "C", "B",1);
console.log(test);
