var obj = {name: "ISRO", age: 35, role: "Scientist"};
convertListToObject(obj);
function convertListToObject(obj) {
      // expected output: [[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]
      var result = Object.keys(obj).map(function(key) {
        document.write( [key, obj[key]]);
      });
}