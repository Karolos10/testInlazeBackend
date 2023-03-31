"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, nickname, email, password } = req.body;
    const users = yield user_1.user.findOne({
        where: {
            name: name
        }
    });
    if (users) {
        return resp.status(400).json({
            msg: `Ya existe un usuario con el nombre ${name}`
        });
    }
    /* console.log('sigo'); */
    console.log(name);
    console.log(nickname);
    console.log(email);
    /* console.log(password); */
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    console.log(hashedPassword);
    try {
        yield user_1.user.create({
            name: name,
            nickname: nickname,
            email: email,
            password: hashedPassword
        });
        resp.json({
            msg: `Usuario ${name} creado exitosamente`,
        });
    }
    catch (error) {
        resp.status(400).json({
            msg: "Ocurrio un error",
            error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    //hacemos la validacion si el usuario existe en la base de datos
    const users = yield user_1.user.findOne({
        where: {
            email: email
        }
    });
    if (!users) {
        return resp.status(400).json({
            msg: `No existe un usuario con el nombre ${email} en la base de datos`
        });
    }
    //validamos el password
    const passwordValid = yield bcrypt_1.default.compare(password, users.password);
    if (!passwordValid) {
        return resp.status(400).json({
            msg: `Password incorrecto`
        });
    }
    //generamos el jwt
    const token = jsonwebtoken_1.default.sign({
        email: email
    }, process.env.SECRET_KEY || 'hola123', {
        expiresIn: '10000'
    });
    resp.json({ token });
    resp.json({
        msg: "Login user"
    });
});
exports.loginUser = loginUser;
