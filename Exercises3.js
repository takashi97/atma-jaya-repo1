var word1 = "turtle";
var tinggi1= "178";
var word2 = word1.length;
var tinggi2 = tinggi1.length;
var titik1 = 30;
var jarak = titik1 - (word2 + tinggi2);
var titik2 = "";
if (jarak <30)
{
for (let i = 0; i < titik1 ; i++)
{
    titik2 = titik2 + ".";
    // titik2 += ".";
}
}
console.log(word1+titik2+tinggi1);