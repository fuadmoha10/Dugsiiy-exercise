

let arrOfobj = [
   {user : "Fuad", age : 30, city : "Mogadishu"},
   {user : "Abdi", age : 10, city : "Baidoa"},
   {user : "Zaky", age : 13, city : "Baraawe"},
];

console.log("properties and Values of each person: ");


for(const arr of arrOfobj){

   for(const key in arr ){
       console.log(`${key} ${arr[key]}`);
       
   }
   console.log("---");
   
}