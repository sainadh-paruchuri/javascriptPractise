function rotateArray(arr,k){
    let size=arr.length;
    if(size>k){
        k=k%size;
    }
    const rotated=arr.splice(size-k,size);
    arr.unshift(...rotated);
    console.log(rotated)
    return arr;
}
console.log(rotateArray([1,2,3,4,5],2))

