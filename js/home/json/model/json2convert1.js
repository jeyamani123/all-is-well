var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
fromListToObject(arr);
function fromListToObject(arr) {
 var newObject={};
 var a;
 var b=[];
 var c=arr.length;
// var g=c-1;
 for(var i=0;i<c;i++)
 {      var f=arr[i].length;
        a= arr[i][0];
        newObject[a]=arr[i][f-1];
 }
 console.log(newObject);
}