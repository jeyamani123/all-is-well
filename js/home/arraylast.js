function getLastElement(a){
    b=a.length;
    alert(a[b-1])
   }
var a=[];
var n=Number(prompt("Enter a no of element"));
for(i=0;i<n;i++){
   a[i]=Number(prompt("enter a number"));
}
getLastElement(a);