import PendapatanDesa from "../models/pendapatanDesa.js";

// Get All pendapatan
export const getPendapatan = async (req, res) => {
	try {
		const pendapatanDesa = await PendapatanDesa.findAll();
		if (!pendapatanDesa) {
			return res.status(404).json({
				status: false,
				message: "data not found!",
				data: null,
			});
		}
		return res.json({
			pendapatanDesa,
		});
	} catch (err) {
		console.log(err);
	}
};

// Get pendapatan berdasarkan id

export const getPendapatanId = async (req, res) => {
	try {
		const { id } = req.params;
		const pendapatanDesa = await PendapatanDesa.findOne({
			where: {
				id: id,
			},
		});

		if (!pendapatanDesa) {
			return res.status(404).json({
				status: 404,
				success: false,
				message: "Pendapatan desa not found",
				data: null,
				error: "Pendapatan desa Not Found",
			});
		}

		return res.status(200).json({
			status: 200,
			pendapatanDesa,
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

// Delete Pendapatan

export const deletePendapatan = async (req, res) => {
	try {
		const { id } = req.params;

		const destroyed = await PendapatanDesa.destroy({
			where: {
				id: id,
			},
		});

		if (!destroyed) {
			return res.status(200).json({
				status: 200,
				success: false,
				message: "gagal menghapus pendapatan",
				data: null,
				error: "gagal menghapus pendapatan",
			});
		}

		return res.status(200).json({
			status: 200,
			success: true,
			message: "Pendapatan deleted",
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

// Update Pendapatan

export const updatePendapatan = async (req, res) => {
	try {
		const { id } = req.params;

		const updated = await PendapatanDesa.update(req.body, {
			where: {
				id: id,
			},
		});

		if (!updated[0]) {
			return res.status(200).json({
				status: 200,
				success: false,
				message: "Gagal mengedit pendapatan desa",
				data: null,
				error: "Gagal mengedit pendapatan desa",
			});
		}

		return res.status(200).json({
			status: 200,
			success: true,
			message: "Pendapatan desa telah updated",
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

// Create Pendapatan

export const createPendapatan = async (req, res) => {
	try {
		const {
			kodetransaksi_pendes,
			nama_pendes,
			anggaran_pendes,
			realisasi_pendes,
			sisa_pendes,
		} = req.body;

		const pendapatan = await PendapatanDesa.findOne({
			where: { kodetransaksi_pendes },
		});
		if (pendapatan) {
			res.status(409).json({
				status: false,
				mesaage: "Data sudah ada",
				data: null,
			});
		}
		const created = await PendapatanDesa.create({
			kodetransaksi_pendes,
			nama_pendes,
			anggaran_pendes,
			realisasi_pendes,
			sisa_pendes,
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
