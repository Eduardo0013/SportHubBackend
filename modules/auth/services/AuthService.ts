import prisma from "../../../config/prisma"
import User from "../../core/domain/models/Usuario"

/**
 * 
 * @param email 
 * @param password 
 * @returns
 */
export const authenticate = async (email : String, password : String) => {
    const user : User = await prisma.user.findFirst({
        where : {
            password,
            email
        }
    })

    return user !== null;
}