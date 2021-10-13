// VAR LET CONST
var nums = [10, -40, 0, 666, 5050, -41, 653, 123, 5932, -43, -1010];
var sum = 0;
var min = nums[0];
var max = nums[0];
var parzyste = 0;
var nieparzyste = 0;


for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (nums[i] < min)  {min=nums[i];}
    if (nums[i] > max)  {max=nums[i];}
    if (Math.abs(nums[i] % 2) == 0) {parzyste++;}
    else {nieparzyste++;}
}
var mean = sum/nums.length;
var rysunek = 5;
liniafull = ""
console.log(min);
console.log(max);
console.log(mean);
console.log(sum);
console.log(parzyste);
console.log(nieparzyste);
var minstr = min.toString();
var linia = ""
console.log(minstr);
document.getElementById("wynik1").innerHTML = min;
document.getElementById("wynik2").innerHTML = max;
document.getElementById("wynik3").innerHTML = mean;
document.getElementById("wynik4").innerHTML = sum;
document.getElementById("wynik5").innerHTML = parzyste;
document.getElementById("wynik6").innerHTML = nieparzyste;
document.getElementById("rysuj").onclick = function() {
    rysunek = prompt("Podaj wartość n", "");
    liniafull = "";
    //document.getElementById("rysunek").innerHTML = "";
    if (isNaN(rysunek)){
    document.getElementById("rysunek").innerHTML = "Niepoprawna wartość n";}
    else 
    {
    for (var i2 = 1; i2 <= rysunek; i2++) {
        linia = "*";
        linia = linia.repeat(i2);
        console.log(linia);
        liniafull = liniafull + linia + "<br>";
        linia = "";
    };
    document.getElementById("rysunek").innerHTML = liniafull;
}
};