// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const BelanjaDesa = db.define(
	"belanjadesa",
	{
		// Define attributes
		kodetransaksi_beldes: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		nama_beldes: DataTypes.STRING,
		anggaran_beldes: DataTypes.INTEGER,
		realisasi_beldes: DataTypes.INTEGER,
		sisa_beldes: DataTypes.INTEGER,
	},
	{
		// Freeze Table Name
		freezeTableName: true,
		tableName: "belanjadesa",
	}
);

// Export model belanja desa
export default BelanjaDesa;
