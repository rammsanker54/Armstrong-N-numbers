const x = 1634;  
let y=x.toString().length;
let sum=0;
let temp=x;
while(temp!=0){
    let rem= temp%10;
    sum=sum+rem**y;
    temp=Math.floor(temp/10)
}
if (x==sum){
    console.log("armstrong")
}
else{
    console.log("not armstrong")
}