function getNthElement(a,i){
    alert(a[i]);
    
   }
var a=[];
var n=Number(prompt("Enter a no of element"));
for(i=0;i<n;i++){
a[i]=Number(prompt("enter a number"));
 }
 var t=Number(prompt("enter a index value"));
 getNthElement(a,t);