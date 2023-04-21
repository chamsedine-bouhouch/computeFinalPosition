function computeFinalPosition(
  width,
  height,
  position,
  portailA,
  portailB,
  moves
) {
  console.log('position at start of function:', position);
  const A = portailA;
  const B = portailB;
  let tempPos = false;
  let newPosition = [...position];
  const movesArray = moves.split("");
  if (movesArray.length > 255 || movesArray.length < 0) {
    console.error("Lengh not in range");
    return newPosition;
  }
  for (let i = 0; i < movesArray.length; i++) {
    const element = movesArray[i];
    switch (element) {
      case "U":
        if (newPosition[1] > 0) newPosition[1] -= 1;
        break;
      case "D":
        if (newPosition[1] < height) newPosition[1] += 1;
        break;
      case "R":
        if (newPosition[0] < width) newPosition[0] += 1;
        break;
      case "L":
        if (newPosition[0] > 0) newPosition[0] -= 1;
        break;
      default:
        break;
    }

    // console.log("for", newPosition);
    if (JSON.stringify(newPosition) === JSON.stringify(A) && !tempPos) {
      console.log("teleporte A", newPosition, A);
      newPosition = B;

      tempPos = true;
    } else if (JSON.stringify(newPosition) === JSON.stringify(B) && !tempPos) {
      newPosition = A;
      tempPos = true;
      console.log("teleporte B");
    } else {
      console.log("not teleporte");
      tempPos = false;
    }
  }
  console.log('position before returning from function:', newPosition);
  return newPosition;
}
const position = [0, 0];
console.log(computeFinalPosition(5, 4, position, [1, 1], [2, 3], "DRRLLU"));
