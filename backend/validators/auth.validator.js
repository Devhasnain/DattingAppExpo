import {z} from "zod";

const LoginValidationSchema = z.object({
    email:z.string().email({message:"please enter a valid email"}),
    password:z.string().min(8)
});

export {LoginValidationSchema}