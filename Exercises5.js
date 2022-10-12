const Bill1 = [1,2,3,4];
const Bill2 = [4,3,2,1];
var a = 0;
var b = 0;
const Bill3 = [a,b];
for (let i = 0; i < Bill1.length ; i++)
{
    if(Bill1[i]>Bill2[i])
    {
        Bill3[0] += 1
    }
    else if(Bill2[i]>Bill1[i])
    {
        Bill3[1] += 1
    }
}
console.log(Bill3);