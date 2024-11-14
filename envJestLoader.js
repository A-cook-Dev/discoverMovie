let fs = require('fs')
let envFile = fs.readFileSync("./.env").toString()
let envFileLines = envFile.split("\n")

for (let line of envFileLines) {
    let [key, value] = line.split("=");
    process.env[key] = value
}