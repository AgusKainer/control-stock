const { registroController } = require("../../controller/index.controller");

const registroUserHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await registroController({ email, password });
    res.status(200).json({ auth: true, message: "Registro exitoso", user });
  } catch (error) {
    res.status(500).json({ message: "Usuario no creado" });
  }
};

module.exports = registroUserHandler;
