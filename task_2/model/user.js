const config = require("../config/postgre_config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: "postgres",
  operatorsAliases: false
});

const UserModel = sequelize.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: Sequelize.TEXT
  },
  {
    timestamps: false
  }
);

// Testing
// function restart() {
//   sequelize.sync({ force: true }).catch(err => {
//     console.log("Sync Error" + err);
//   });
// }
// restart();
module.exports = UserModel;
