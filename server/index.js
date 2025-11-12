import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express(express.json());

app.get("/", (req, res) => {
    res.send({
        message: "Application is running fine"
    })
})



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})