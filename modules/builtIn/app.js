const os = require('os')
const path = require('path')

//OS module
// const user = os.userInfo()
// console.log(user)


// console.log(`The system uptime is ${os.uptime} seconds`)

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     freeMem: os.freemem(),
//     totalMem: os.totalmem(),
// }
// console.log(currentOS)


//PATH module

// console.log(path.sep)
// const filePath = path.join('.','test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'test.txt')
// console.log(absolute)


//FILE module

// const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/sec.txt','utf8')
// writeFileSync('./content/result-sync.txt', ` second string Here is the result : ${first}, ${second}`, {flag: 'a'})

// console.log("start")
// readFile('./content/first.txt', 'utf8', (err, result) =>{
//     if(err){
//         console.log(err)
//         return
//     }
//    // console.log(result)
//    const first = result
//    readFile('./content/sec.txt', 'utf8',(err,result)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err,result)=>{
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log("done with reading and writing")
//         })
//     })
// })

// console.log("moving to the next task")
 


// HTTP MODULE

// const http = require('http')

// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.write('Welcome to the homepage')
//     }
//     if(req.url === '/about'){
//         res.write('Here is a short history')
//     }

//     res.end(`
//     <h1>Oops!</h1>
//     <p>Can't find the requested page<p>
//     <a href="/"> Home </a>
//     `)
    
// })

// server.listen(5000)










