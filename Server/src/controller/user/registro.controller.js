const User = require("../../models/user");
const encryptPassword = require("../../utils/encryptPassword");
const { generateToken } = require("../../utils/token");

const registroController = async ({ email, password }) => {
  try {
    const hash = await encryptPassword(password);
    const newUser = await User.create({
      email,
      password: hash,
    });
    const token = await generateToken({ id: newUser.id });
    console.log("token: ", token);
    return newUser;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLADOR: ${error}`);
  }
};
module.exports = registroController;
