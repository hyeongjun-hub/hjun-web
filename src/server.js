import express from "express";

const PORT = 4000;

const app = express();

const handleHome = () => console.log("Somebody is trying to go home.")

//application 설정
// app.get("/", handleHome);


//외부접속 listen
const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT} 💥`)

app.listen(PORT, handleListening)