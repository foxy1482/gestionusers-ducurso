import UserModel from "#Schemas/user.schema.js";
import { compare } from "bcrypt";
import { SignJWT } from "jose";

const userUpdateDataController = async (req,res)=>{
    const { id } = req;
    const { name, surname } = req.body;
    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById) return res.status(401).send("Usuario no autorizado");
    existingUserById.name = name;
    existingUserById.surname = surname;
    await existingUserById.save();
    return res.send("Usuario actualizado");
};
export default userUpdateDataController;