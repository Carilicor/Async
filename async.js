import fs from "fs"

//call back
fs.readFile("file.txt","utf8",function (err,data) {
    console.log(data);

})
//promise (then)
fs.promises.readFile("file.txt","utf8").then((data) => {
    console.log(data);

})

//async
//const showText = async() => { //same as line 16
async function showText() {
    const data = await fs.promises.readFile("file.txt","utf8");
    return data
}
console.log(await showText())
