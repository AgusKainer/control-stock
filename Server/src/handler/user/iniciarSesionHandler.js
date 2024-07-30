const {
  iniciarSesionController,
} = require("../../controller/index.controller");

const iniciarSesionHandler = async (req, res) => {
  try {
    const { email, password, token } = req.body;
    const user = await iniciarSesionController({ email, password, token });
    res.status(200).json({ auth: true, user });
  } catch (error) {
    console.log(`ERROR EN EL HANDLER: ${error}`);
    res.status(500).json({ message: "NO SE PUEDE INICIAR SESION" });
  }
};

module.exports = iniciarSesionHandler;
