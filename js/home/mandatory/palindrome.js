var a=function (b){
    
    
    for(var i=0;i<b.length;i++)
    { var c=""; 
        for(var j=(b[i].length-1);j>=0;j--)
        {
            c+=b[i][j];
        }
        
        if(c==b[i])
        {
            document.write(b[i]);
        }
    } 
}
var o=["101","202","305","404","709"];
a(o);