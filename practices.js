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

const print = (n) => {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        console.log(i)
      }, i * 1000)
    }
  }
  print(10);