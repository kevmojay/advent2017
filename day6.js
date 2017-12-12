function blockShift(data) {
  const dataArrStr = data.split(" ");
  let dataArr = dataArrStr.map(num => Number(num));
  let seenArr = [];
  let finalCount = 0;
  let again = "";
  while (seenArr.indexOf(dataArr.slice().join(" ")) < 0) {
    console.log(dataArr);
    seenArr.push(dataArr.slice().join(" "));
    finalCount++;
    let max = getMax(dataArr);
    let indexOfMax = dataArr.indexOf(max);
    let count = 0;
    dataArr[indexOfMax] = 0;
    if (indexOfMax === dataArr.length - 1) indexOfMax = 0;
    else indexOfMax++;
    while (count < max) {
      if (indexOfMax === dataArr.length) indexOfMax = 0;
      dataArr[indexOfMax] += 1;
      indexOfMax++;
      count++;
    }
  }

  again = dataArr.slice().join(" ");
  seenArr = [];
  finalCount = 0;
  while (seenArr.indexOf(again) < 0) {
    console.log(dataArr);
    finalCount++;
    let max = getMax(dataArr);
    let indexOfMax = dataArr.indexOf(max);
    let count = 0;
    dataArr[indexOfMax] = 0;
    if (indexOfMax === dataArr.length - 1) indexOfMax = 0;
    else indexOfMax++;
    while (count < max) {
      if (indexOfMax === dataArr.length) indexOfMax = 0;
      dataArr[indexOfMax] += 1;
      indexOfMax++;
      count++;
    }

    seenArr.push(dataArr.slice().join(" "));
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
