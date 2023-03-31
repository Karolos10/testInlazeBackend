import e, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { user } from '../models/user';
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, resp: Response) => {
  const { name, nickname, email, password } = req.body;

  const users = await user.findOne({
    where: {
        name: name
    }
  });

  if(users){
    return resp.status(400).json({
        msg: `Ya existe un usuario con el nombre ${name}`
    })
  }

  /* console.log('sigo'); */

  console.log(name);
  console.log(nickname);
  console.log(email);
  /* console.log(password); */

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  try {
    await user.create({
        name: name,
        nickname: nickname,
        email: email,
        password: hashedPassword
    })
    resp.json({
      msg: `Usuario ${name} creado exitosamente`,
    });
  } catch (error) {
    resp.status(400).json({
        msg: "Ocurrio un error",
        error
    })
  }
};
export const loginUser = async(req: Request, resp: Response) => {
  const { email, password } = req.body;

  //hacemos la validacion si el usuario existe en la base de datos

  const users: any = await user.findOne({
    where: {
        email: email
    }
  });

  if(!users){
    return resp.status(400).json({
        msg: `No existe un usuario con el nombre ${email} en la base de datos`
    })
  }

  //validamos el password
  const passwordValid = await bcrypt.compare(password, users.password);

  if(!passwordValid){
    return resp.status(400).json({
        msg: `Password incorrecto`
    })
  }

  //generamos el jwt
  const token = jwt.sign({
    email: email
  }, process.env.SECRET_KEY || 'hola123', {
    expiresIn: '10000'
  })

  resp.json({token});

  resp.json({
    msg: "Login user"
  });


};
