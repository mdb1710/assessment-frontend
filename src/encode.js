"use strict"

let name = "Parallel"
let buff = new Buffer(name)

let code = buff.toString("base64")

console.log(code)
