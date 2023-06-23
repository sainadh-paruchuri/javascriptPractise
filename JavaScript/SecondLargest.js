function secondLargest(arr){
    let largest=-Infinity;
    let second=-Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
        second = largest;
        largest=arr[i]
        }
        else if(arr[i]!=largest && second<arr[i]){
            second=arr[i];
        }
    }
    return second;
}

console.log(secondLargest([2,34,5,33,1]))