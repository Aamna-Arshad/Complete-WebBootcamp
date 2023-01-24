import express from "express"
import path from "path"
import {fileURLToPath} from 'url';
import bodyParser from "body-parser";

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended: true}))


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);
console.log(__filename)

const myFile = path.join(__dirname + "/index.html")

app.get("/", (req, res)=>{
    res.sendFile(myFile)
})

app.post("/formData", (req, res)=>{

    const num1 = req.body.firstNumber
    console.log(num1)
    const num2 = req.body.secondNumber
    console.log(num2)
    var result = num1 * num2

    res.send(`Multiplication of ${num1} and ${num2} is : ${result}`)
})

app.get("/bmiCalculator", (req, res)=>{
    res.sendFile(path.join(__dirname + "/bmiCalculator.html")
    )
})

app.post("/bmiCalculator", (req, res)=>{
    const weight = parseFloat(req.body.weight)
    const height = parseFloat(req.body.height)
    var bmi = weight/(height * height)

    res.send(`Body Mass Index of ${weight} and ${height} is : ${bmi}`)
    
})





app.listen(port, ( )=>{
    console.log("serever is running on port 3000")
})