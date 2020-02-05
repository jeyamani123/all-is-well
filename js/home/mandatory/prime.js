var a=function (b){
    
    var f=[];
    for(var i=0;i<=b.length;i++)
    {var temp=0;
        for(var j=1;j<=b[i];j++)
        {
            if(b[i]%j==0)
            {
                temp=temp+1;
            }
        }
    if(temp==2)
    {  f.push(b[i]);
     }
    
    }
    console.log(f);
}
var o=[1,2,3,4,7];
a(o);