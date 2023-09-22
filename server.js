const http = require("http")
const fs = require("fs");

const server = http.createServer((req, res)=>{
    console.log("request mode")

    res.setHeader("Content-Type", "text/plain")
    res.write("Hello there")
    res.end()

})

server.listen(3000, "localhost", ()=>{
    console.log("listening on port 3000")
})


const readStream = fs.createReadStream("mysql_.txt", {encoding:'utf-8'});

// readStream.on('data', (chunk)=>{
//     console.log(" ------ NEW CHUNK -------")
//     console.log(chunk)
// })