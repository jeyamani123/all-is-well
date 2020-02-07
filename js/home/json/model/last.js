var array=["GUVI","I","am","Geek"];

function transformFirstAndLast(array){
    var newObject={};
    key=array.shift();
    val=array.pop();
    newObject[key]=val;
    console.log(newObject);
}
transformFirstAndLast(array);