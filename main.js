
const os = require("os")
const fs = require("fs")
// setTimeout(()=>{
//     console.log("In the timeout")
//     clearInterval(inte)
// }, 3000)

// const inte = setInterval(()=>{
//     console.log("In the interval")
// }, 1000)

// console.log(os.platform())

fs.readFile("./README.md", (error, data)=>{
    if(error){
        console.log(error)
    }
    console.log(data.toString())
})


fs.writeFile("./docs/test.txt", "hello world", ()=>{
    console.log("written successfully")
})