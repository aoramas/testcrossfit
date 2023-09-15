import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import jwt from "jsonwebtoken";

const newUser = async (req: Request, res: Response) => {
  const {
    identificacion,
    nombres,
    apellidos,
    username,
    password,
    email,
    telefono,
    direccion,
    fechaInicio,
    idRol,
    estado,
  } = req.body;

  const user = User.findOne({
    where: {
      username: username,
    },
  });
  if (user) {
    return res.status(400).json({
      msg: `El usuario ${username} ya existe`,
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      identificacion,
      nombres,
      apellidos,
      username,
      password: hashPassword,
      email,
      telefono,
      direccion,
      fechaInicio,
      idRol,
      estado,
    });
    res.json({
      msg: `Usuario ${username} creado exitosamente`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Error al crear el usuario",
      error,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user: any = await User.findOne({
    where: {
      username: username,
    },
  });
  if (!user) {
    return res.status(400).json({ msg: "Usuario incorrecto" });
  }

  const passwordValid = bcrypt.compare(password, user.password);
  if (!(await passwordValid.valueOf())) {
    return res.status(400).json({ msg: "contraseña incorrecto" });
  }

  const token = jwt.sign({ user: user }, "secret");

  return res.json({ userToken: token });
};

export { newUser, loginUser };
