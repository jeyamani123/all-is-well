function addProperty(obj, key){
    obj[key]=true;
    console.log(obj);
   }
var obj={"balaproperty":"bala","premproperty":"prem"}
var k=prompt("enter a property name:");
addProperty(obj,k);