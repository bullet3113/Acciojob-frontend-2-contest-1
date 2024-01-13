/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((a) => {
    if(a.profession == "developer") console.log(a);
  });

  // let newArray = arr.map((a) => {
  //   if(a.profession == "developer") return a;
  // });

  // console.log(newArray);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((a) => {
    if(a.profession == "developer") console.log(a);
  });
}

function addData() {
  //Write your code here, just console.log
  let obj = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let newArray = arr.filter(a => a.profession != "admin");
  console.log(newArray);
  arr = newArray;
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 4, name: "alex", age: "16", profession: "designer" },
    { id: 5, name: "alicia", age: "21", profession: "hacker" },
    { id: 6, name: "amanda", age: "17", profession: "tester" },
  ];

  let newArray2 = arr.concat(newArray);
  console.log(newArray2);
}
