const User = require("../../models/user");
const { comparePassword } = require("../../utils/encryptPassword");
const { verifyToken } = require("../../utils/token");
require("dotenv").config();

const secret = process.env.SECRET;

const iniciarSesionController = async ({ email, password, token }) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("USUARIO NO ENCONTRADO");
    }
    const validatePass = await comparePassword(password, user.password);
    if (!validatePass) {
      throw new Error("CONTRASEÑA INVALIDA");
    }
    const tokens = verifyToken(token, secret);
    return { message: "INICIO DE SESION EXITOSO", tokens };
  } catch (error) {
    console.log(`ERROR: ${error}`);
    throw new Error("ERROR EN EL CONTROLLER");
  }
};

module.exports = iniciarSesionController;
