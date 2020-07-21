var array = [];
n = prompt("Enter how many numbers you want to enter");
for (i=0;i<n;i++)
{
    array[i]=prompt("Enter array elements");
}
console.log(array);

let odd = array.filter(el=>el%2==1);
console.log(odd);

let Squares = array.filter(el=>el%2==1).map(el=>el**2);
console.log(Squares);