function getProperty(obj, key) {
    c=[];
    c=Object.keys(obj);
    console.log(c);
    for(i=0;i<c.length;i++)
    {
    if(key!=c[i])
    {alert(obj[key]);}
    }
}
var obj={"1":"bala","2":"prem"}
var k=Number(prompt("enter a key"));
getProperty(obj,k);