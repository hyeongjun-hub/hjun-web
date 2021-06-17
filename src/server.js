import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

// const loggermid = (req, res, next) => {
//     console.log(`METHOD ${req.method} ${req.path}`);
//     next();
// };

const handleHome = (req, res) => {
    return res.send("<h1>I still love you</h1>");
};


//application 설정
app.use(logger);
// app.use(loggermid);
app.get("/", handleHome);


//외부접속 listen
const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT} 💥`)

app.listen(PORT, handleListening)