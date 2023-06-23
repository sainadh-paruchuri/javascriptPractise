function remove(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            arr.splice(i+1,1)
            i--;
        }
    }
    return arr;
}

console.log(remove([1,1,2,2,3]))

function removeWithoutinBuilt(arr){
    if(arr.length===0)return 0;
    let len=0;
    for (let i = 1; i < arr.length; i++) {
        if(arr[len]!==arr[i]){
            len++;
            arr[len]=arr[i];
        }


    }
    return len+1;

}
console.log(removeWithoutinBuilt([1, 1, 2, 2, 3]));
