var array1=[[["firstName","Vasanth"],["lastname","Raja"],["age",24],["role",'JSWizard']],[["firstName","Sri"],["lastname","Devi"],["age",28],["role",'Coder']]];
//console.log(array1[0][0]);
function transformEmployeeData(emp){
    var emp1=[];
    var dic={};
    for(var i=0;i<emp.length;i++){
        for(var j=0;j<emp[i].length;j++){
            var temp=emp[i][j];
            key=temp.shift();
            val=temp.pop();
            dic[key]=val;
        }emp1.push(dic);
    }console.log(emp1);
}
transformEmployeeData(array1);