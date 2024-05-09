import sequelize from "./db";

await sequelize.sync({force: false});
