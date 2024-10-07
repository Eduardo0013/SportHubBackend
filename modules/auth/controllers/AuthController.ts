import { Response,Request } from "express"
import { authenticate } from "../services/AuthService"
import jwt from "jsonwebtoken"

export const login = async (req : Request,res : Response) => {
    try {
        const access = await authenticate(req.params.email,req.params.password)
        if(access){
            const SECRET_KEY = process.env.SECRET_KEY || ""
            return res.status(200).json({
                token: jwt.sign(req.params.email,SECRET_KEY) 
            })
        }
        res.status(401).json({
            message : "correo o contraseña incorrectos"
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Serverl Error"
        })
    }
}