// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Login = db.define(
	"admindesa",
	{
		// Define attributes
		username: DataTypes.STRING,
		password: DataTypes.STRING,
	},
	{
		// Freeze Table Name
		freezeTableName: true,
		tableName: "admindesa",
	}
);

// Export model pendapatanDesa
export default Login;
