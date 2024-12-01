// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const PendapatanDesa = db.define(
	"pendapatanDesa",
	{
		// Define attributes
		kodetransaksi_pendes: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		nama_pendes: DataTypes.STRING,
		anggaran_pendes: DataTypes.INTEGER,
		realisasi_pendes: DataTypes.INTEGER,
		sisa_pendes: DataTypes.INTEGER,
	},
	{
		// Freeze Table Name
		freezeTableName: true,
		tableName: "pendapatandesa",
	}
);

// Export model pendapatanDesa
export default PendapatanDesa;
