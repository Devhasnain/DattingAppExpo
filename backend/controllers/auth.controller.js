import User from "../models/user.js";
import { ErrorHandler, getMessage } from "../utlis/ResponseHandlers.js";
import { LoginValidationSchema } from "../validators/auth.validator.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
import JWT from "jsonwebtoken";
config();

const JWT_SECRET = process.env.JWT_SECRET;

const Login = async (req, res) => {
  try {
    let body = await LoginValidationSchema.safeParseAsync(req.body);

    if (body.error) {
      let error = getMessage(body?.error);
      return res.status(401).json(error);
    }

    const { email, password } = body.data;

    let findUser = await User.findOne({ email });

    if (!findUser) {
      return res
        .status(404)
        .json({ msg: `User not found with this email ${email}` });
    }

    let matchPassword = await bcrypt.compare(password, findUser?.password);

    if (!matchPassword) {
      return res.status(401).json({ msg: "Incorrect email or password." });
    }

    let token = JWT.sign({ _id: findUser._id }, JWT_SECRET);

    return res.status(200).json({ msg: "Login successful", token });
  } catch (error) {
    return ErrorHandler(error, req, res);
  }
};

const Register = async (req, res) => {
  try {
    let data = req.body;

    let password = await bcrypt.hash(data.password, 12);

    let user = await User.create({ ...data, password });

    let token = JWT.sign({ _id: user._id }, JWT_SECRET);

    return res.status(200).json({ msg: "Registeration successful", token });
  } catch (error) {
    return ErrorHandler(error, req, res);
  }
};

const RefreshToken = async (req,res)=>{
    try {
        let token = req.headers
    } catch (error) {
        return  ErrorHandler(error,req,res);
    }
}

export { Login, Register };
