const User = require("../../models/user");
const { encryptPassword } = require("../../utils/encryptPassword");
const { generateToken } = require("../../utils/token");

const registroController = async ({ email, password }) => {
  try {
    const hash = await encryptPassword(password);
    const token = await generateToken({ email });
    const newUser = await User.create({
      email,
      password: hash,
      token,
    });
    return newUser;
  } catch (error) {
    console.log("ERROR: ", error);
    console.log(`ERROR EN EL CONTROLADOR: ${error}`);
  }
};
module.exports = registroController;
/* 
{
  "auth": true,
  "message": "Registro exitoso",
  "user": {
    "id": "8e7cba7b-ecaf-4ed0-8637-1cc6e692a106",
    "email": "juli@gmail.com",
    "password": "$2a$05$kVP86hYJKRvBcPsifLMLGOsxEZVLRPu/1EVBUB4fMwvw4i0RN4sS6",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1bGlAZ21haWwuY29tIiwiaWF0IjoxNzIwMzc4NTEwfQ.9Sn_zWPHkhVWWBP9wEENn4jE8bd-0tY8oMLG3Y_Fppg",
    "updatedAt": "2024-07-07T18:55:10.757Z",
    "createdAt": "2024-07-07T18:55:10.757Z"
  }
}
{
  "auth": true,
  "message": "Registro exitoso",
  "user": {
    "id": "d2c1a016-c966-4635-84f2-9b9690170fc9",
    "email": "agus@gmail.com",
    "password": "$2a$05$DuxHVNq/pZnG67OSZB4NK.eLo0JZuMB.JRhtaSmm6rJ2sbbIwXyO6",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFndXNAZ21haWwuY29tIiwiaWF0IjoxNzIyMzQwMTg2fQ.GIcdvl5gBiIOOc95o1WsHgwiFVwtV7_MJyxSA89QHAU",
    "updatedAt": "2024-07-30T11:49:46.695Z",
    "createdAt": "2024-07-30T11:49:46.695Z"
  }
}
  */
