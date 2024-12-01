import BelanjaDesa from "../models/belanjaDesa.js";

// Get All Belanja
export const getBelanja = async (req, res) => {
	try {
		const belanjaDesa = await BelanjaDesa.findAll();
		if (!belanjaDesa) {
			return res.status(404).json({
				status: false,
				message: "data not found!",
				data: null,
			});
		}
		return res.json({
			message: "Semua data Pendapatan Desa",
			belanjaDesa,
		});
	} catch (err) {
		console.log(err);
	}
};

// Get belanja berdasarkan id
export const getBelanjaId = async (req, res) => {
	try {
		const { id } = req.params;
		const belanjaDesa = await BelanjaDesa.findOne({
			where: {
				id: id,
			},
		});

		if (!belanjaDesa) {
			return res.status(404).json({
				status: 404,
				success: false,
				message: "Belanja desa not found",
				data: null,
				error: "Belanja desa Not Found",
			});
		}

		return res.status(200).json({
			status: 200,
			belanjaDesa,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			status: 500,
			success: false,
			message: "internal server error",
			data: null,
			error: "Internal Server Error",
		});
	}
};

// Create Belanja Desa
export const createBelanja = async (req, res) => {
	try {
		const {
			kodetransaksi_beldes,
			nama_beldes,
			anggaran_beldes,
			realisasi_beldes,
			sisa_beldes,
		} = req.body;

		const belanja = await BelanjaDesa.findOne({
			where: { kodetransaksi_beldes },
		});
		if (belanja) {
			res.status(409).json({
				status: false,
				mesaage: "Data sudah ada",
				data: null,
			});
		}
		const created = await BelanjaDesa.create({
			kodetransaksi_beldes,
			nama_beldes,
			anggaran_beldes,
			realisasi_beldes,
			sisa_beldes,
		});
		return res.status(201).json({
			status: true,
			message: "Data Berhasil Dimasukan!",
			data: created,
		});
	} catch (err) {
		console.log(err);
	}
};

// Delete Belanja Desa
export const deleteBelanja = async (req, res) => {
	try {
		const { id } = req.params;

		const destroyed = await BelanjaDesa.destroy({
			where: {
				id: id,
			},
		});

		if (!destroyed) {
			return res.status(200).json({
				status: 200,
				success: false,
				message: "failed to delete belanja",
				data: null,
				error: "Failed To Delete belanja",
			});
		}

		return res.status(200).json({
			status: 200,
			success: true,
			message: "belanja deleted",
			data: null,
			error: null,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			status: 500,
			success: false,
			message: "internal server error",
			data: null,
			error: "Internal Server Error",
		});
	}
};

export const updateBelanja = async (req, res) => {
	try {
		const { id } = req.params;

		const updated = await BelanjaDesa.update(req.body, {
			where: {
				id: id,
			},
		});

		if (!updated[0]) {
			return res.status(200).json({
				status: 200,
				success: false,
				message: "Gagal mengedit belanja desa",
				data: null,
				error: "Gagal mengedit belanja desa",
			});
		}

		return res.status(200).json({
			status: 200,
			success: true,
			message: "Belanja desa telah updated",
			data: null,
			error: null,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			status: 500,
			success: false,
			message: "internal server error",
			data: null,
			error: "Internal Server Error",
		});
	}
};
