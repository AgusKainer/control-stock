const User = require("../../models/user");

const registroController = async ({ emai, password }) => {
  try {
    const newUser = await User.create({
      emai,
      password,
    });
    return newUser;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLADOR: ${error}`);
  }
};
module.exports = registroController;
