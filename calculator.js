const myCalc = require("express");
const bodyParser = require("body-parser");
const app = myCalc();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var ans = n1+n2;
    res.send("Answer is " + ans);
})

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var sq = height*height;
    var bmi = weight/sq;
    res.send("Your BMI is " + bmi);
})

app.listen(process.env.PORT || 3000, function(req, res) {
    console.log("Server started on port 3000");
})

//error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly: CANCEL(err 8)