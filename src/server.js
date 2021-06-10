import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const handleHome = (req, res) => {
    return res.send("<h1>I still love you</h1>");
};


//application 설정
app.use(logger);
app.get("/", handleHome);


//외부접속 listen
const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT} 💥`)

app.listen(PORT, handleListening)