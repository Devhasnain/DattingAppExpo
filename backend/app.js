import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(cors({origin:"*"}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req,res)=>{
    return res.status(200).json({msg:"Hello"});
});

app.use("/auth",authRouter);

export default app;