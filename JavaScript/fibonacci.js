let fib=(n)=>{
    const arr=[0,1];
    for(let i=2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    console.log(arr[n])
}
fib(5)

let recFib=(n)=>{
    if(n<=1)return n;
    return recFib(n-1)+recFib(n-2);

}

console.log(recFib(3))