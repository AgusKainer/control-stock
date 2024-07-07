const user = require("./user");
const stock = require("./stock");

user.belongsToMany(stock, { through: "user-stock" });
stock.belongsToMany(user, { through: "user-stock" });

module.exports = {
  user,
  stock,
};
