var a=function (b){
  for(var i=0;i<b.length;i++)
  {
      for(var j=0;j<b.length;j++)
      {
          if(i!=j)
          {
            if(b[i]==b[j])
            {
                b.splice(j,1);
            }
        }
      }
  } 
  console.log(b);   
}
var o=[1,2,3,4,1,2];
a(o);