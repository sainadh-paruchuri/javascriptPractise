function maxsubArray(arr) {
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      if (currentSum > maxSum) maxSum = currentSum;
    }
  }

  return maxSum;
}
console.log(maxsubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function kadnaesAlgorithm(arr) {
  let maxSum = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum=sum;
    }
    if(sum<0){
        sum=0;
    }
  }
  return maxSum;
}

console.log(kadnaesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

