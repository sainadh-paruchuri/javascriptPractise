const maxProfit=(prices)=>{
    let profit=0;
    for(let i=0;i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            const current=prices[j]-prices[i];
            if(current>profit)profit=current;
        }
    }
    return profit;

}

console.log(maxProfit([7,1,5,3,6,4]))

// 
const maxPro=(prices)=>{
    let min=prices[0];
    let profit=0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min){
            min=prices[i];
        }
        profit=Math.max(profit,prices[i]-min)
    }
    return profit;

}
console.log(maxPro([7,1,5,3,6,4]))