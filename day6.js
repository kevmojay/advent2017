function blockShift(data) {
  const dataArrStr = data.split(" ");
  let dataArr = dataArrStr.map(num => Number(num));
  let seenArr = [];
  let finalCount = 0;
  while (seenArr.indexOf(dataArr) < 0) {
    seenArr.push(dataArr.slice());
    finalCount++;
    let max = getMax(dataArr);
    let indexOfMax = dataArr.indexOf(max) + 1;
    let count = 0;
    dataArr[dataArr.indexOf(max)] = 0;
    while (count <= max) {
      if (indexOfMax === dataArr.length - 1) indexOfMax = 0;
      dataArr[indexOfMax] += 1;
      ++indexOfMax;
      count++;
    }
  }
  return finalCount;
}

function getMax(dataArr) {
  return dataArr.reduce((num, max) => {
    if (num > max) return num;
    return max;
  }, 0);
}

console.log(blockShift(`2 8 8 5 4 2 3 1 5 5 1 2 15 13 5 14`));
