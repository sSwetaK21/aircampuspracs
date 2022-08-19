//  setInterval(function add(){
//     for(let i=0;i<5;i++){
//         console.log(i)
//     }
// },1000)

// clearInterval(setclear)


// function func(){
//     console.log("Run")
//   }
//   setInterval(func,1000)

// const print = (n) => {
//     for (let i = 1; i <= n; i++) {
//       setTimeout(() => {
//         console.log(i)
//       }, i * 1000)
//     }
//   }
//   print(10);

const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";

