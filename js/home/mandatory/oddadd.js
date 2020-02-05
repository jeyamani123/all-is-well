var a=function (b){
    var temp=0;
    for(var i=0;i<b.length;i++)
    {
    temp=b[i]+temp;
    }
    return temp;
}
var o=[1,2,3,4,5];
document.write(a(o));