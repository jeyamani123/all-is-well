fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then((out)=>{
          document.getElementById("img0").setAttribute("src",out[0]["flag"]);
          document.getElementById("img1").setAttribute("src",out[1]["flag"]);
          document.getElementById("img2").setAttribute("src",out[2]["flag"]);
          document.getElementById("img3").setAttribute("src",out[3]["flag"]);
          document.getElementById("img4").setAttribute("src",out[4]["flag"]);
          document.getElementById("img5").setAttribute("src",out[5]["flag"]);
          document.getElementById("img6").setAttribute("src",out[6]["flag"]);
          document.getElementById("img7").setAttribute("src",out[7]["flag"]);
          document.getElementById("img8").setAttribute("src",out[8]["flag"]);
          document.getElementById("img9").setAttribute("src",out[9]["flag"]);
          document.getElementById("img10").setAttribute("src",out[10]["flag"]);
          document.getElementById("img11").setAttribute("src",out[11]["flag"]);
          document.getElementById("img12").setAttribute("src",out[12]["flag"]);
          document.getElementById("img13").setAttribute("src",out[13]["flag"]);
          document.getElementById("img14").setAttribute("src",out[14]["flag"]);
          document.getElementById("img15").setAttribute("src",out[15]["flag"]);
          document.getElementById("img16").setAttribute("src",out[16]["flag"]);
          document.getElementById("img17").setAttribute("src",out[17]["flag"]);
          document.getElementById("img18").setAttribute("src",out[18]["flag"]);
          document.getElementById("img19").setAttribute("src",out[19]["flag"]);
        }
    ).catch(err=>console.error(err));
function button(n)
{ fetch('https://restcountries.eu/rest/v2/all')
     .then(res=>res.json())
      .then((out)=>{

           document.write("Name:"+out[n]["name"]+"<br /> Alpha2code:"+out[n]["alpha2Code"] +"<br /> Region:"+out[n]["region"] +" <br /> capital:"+out[n]["capital"]+"<br /> Borders:"+out[n]["borders"]);}
      
).catch(err=>console.error(err));
  
}
