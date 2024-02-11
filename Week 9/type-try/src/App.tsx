

// type Employee = {
//   name: string;
//   startDate: Date;
// }

// // What is the difference between the interface and type

// // interface are extension of classes wherease the types are union and or etc...

// interface Manager {
//   name: string;
//   department: string;
// }

// type TechLead = Employee & Manager; 

// // or                                                 both are same 
    
// // type TechLead = {
// //   name: string;
// //   department: string;       
// //   startDate: Date;
// // }

// const t: TechLead = {
//   name: "Yash",
//   startDate: new Date(),
//   department: "Engineering"
// }






// type numberArr = number[]

// function maxValue(arr: numberArr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(maxValue([11, 12,23]));








interface User {
  firstname: string;
  lastname: string;
  age: number;
}
  
function filterUser(arr: number[]){
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

















