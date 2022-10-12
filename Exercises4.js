const Num1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var a = "CS";
var b = "ID";
let Hur1 = "";
for (let i = 0; i < Num1.length ; i++)
{
    if (Num1[i] % 4 !== 0 && Num1[i] % 3 == 0 )
    {
        Hur1+=  a; 
    }else if (Num1[i] % 4 == 0 && Num1[i] % 3 !== 0)
    {
        Hur1+=  b; 
    }else if (Num1[i] % 4 == 0 && Num1[i] % 3 == 0)
    {
        Hur1+=  a + b; 
    }else 
    {
        Hur1+= Num1[i];
    }
    if (Num1.length > Num1[i])
    {
        Hur1+= ", "
    }
}
console.log(Hur1);
