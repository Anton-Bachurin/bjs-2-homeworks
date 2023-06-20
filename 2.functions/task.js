function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for (let i=0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
    	max = arr[i];
    }
    
    if (arr[i] < min) {
    	min = arr[i];
    }
  }
  
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams(-99, 99, 10));
console.log(getArrayParams(1, 2, 3, -100, 10));
console.log(getArrayParams(5));

function summElementsWorker(...arr) {
  if (arr.length === 0) {
  	return 0;
  }
  
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
  	sum += arr[i];
  }
  return sum;
}

console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
  	return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let difference = max - min;
  return difference;
}

console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
  	return 0;
  }
  
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
  	if ((arr[i] % 2) === 0) {
  		sumEvenElement += arr[i];
  	} else {
  		sumOddElement += arr[i];
  	}
  }
  return sumEvenElement - sumOddElement;
}

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
  	return 0;
  }
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
  	if ((arr[i] % 2) === 0) {
  		sumEvenElement += arr[i];
  		countEvenElement++;
  	}
  }
  return sumEvenElement / countEvenElement;
}

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

function makeWork (arrOfArr, func) {

}
