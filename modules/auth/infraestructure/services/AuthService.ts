import { v4 } from "uuid";
import prisma from "../../../../config/prisma"
import User from "../../../core/domain/models/Usuario"
import UserDto from "../dto/UserDto";

/**
 * 
 * @param email 
 * @param password 
 * @returns
 */
export const authenticate = async (email: string, password: string) => {
    const user = await prisma.user.findFirst({
        where: {
            password,
            email
        }
    })

    return user !== null;
}

export const create = async (userDto: UserDto) => {
    const user: User = {
        id: v4(),
        nombre: userDto.nombre,
        apellido: userDto.apellido,
        fechaNacimiento: userDto.fechaNacimiento,
        email: userDto.email,
        password: userDto.password,
        status: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    return await prisma.user.create({
        data: {
            ...user
        }
    })
}