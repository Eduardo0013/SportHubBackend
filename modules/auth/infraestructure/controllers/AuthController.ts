import { Request,Response } from "express"
import { authenticate, create } from "../services/AuthService"
import jwt from "jsonwebtoken"

export const login = async (req : Request,res : Response) => {
    try {
        const access = await authenticate(req.body.email,req.body.password)
        if(access){
            const SECRET_KEY = process.env.SECRET_KEY || ""
            res.status(200).json({
                token: jwt.sign(req.body.email,SECRET_KEY) 
            })
            return
        }
        res.status(401).json({
            message : "correo o contraseña incorrectos"
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const register = async (req : Request, res : Response) => {
    try {
        const user = await create(req.body)
        res.status(201).json({
            message : "Usuario creado",
            user    
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Internal Server Error"
        })
    }
}