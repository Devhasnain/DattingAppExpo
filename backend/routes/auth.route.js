import {Router} from "express";
import { Login } from "../controllers/auth.controller.js";

const route = Router();

route.get("/auth", (req,res)=>{
    return res.send({msg:"auth route"});
})

route.post("/login", Login);

export default route