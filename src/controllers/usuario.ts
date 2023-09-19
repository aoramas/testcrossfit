import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Usuario } from "../models/Usuario";
import jwt from "jsonwebtoken";

const newUsuario = async (req: Request, res: Response) => {
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

  const usuario = Usuario.findOne({
    where: {
      username: username,
    },
  });
  if (!usuario) {
    return res.status(400).json({
      msg: `El usuario ${username} ya existe`,
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    await Usuario.create({
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

const loginUsuario = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const usuario: any = await Usuario.findOne({
    where: {
      username: username,
    },
  });
  if (!usuario) {
    return res.status(400).json({ msg: "El usuario ingresado no existe" });
  }

  const passwordValid = bcrypt.compare(password, usuario.password);
  if (!(await passwordValid.valueOf())) {
    return res.status(400).json({ msg: "contraseña incorrecto" });
  }

  const token = jwt.sign({ user: usuario }, "secret");

  return res.json({ userToken: token });
};

export { newUsuario, loginUsuario };
