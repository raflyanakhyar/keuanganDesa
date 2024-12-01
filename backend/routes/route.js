// Import express
import express from "express";
// Import Controller pendapatan desa
import {
	createPendapatan,
	deletePendapatan,
	getPendapatan,
	getPendapatanId,
	updatePendapatan,
} from "../controllers/pendapatanDesa.js";
// Import Controller belanja desa
import {
	createBelanja,
	deleteBelanja,
	getBelanja,
	getBelanjaId,
	updateBelanja,
} from "../controllers/belanjaDesa.js";
import {
	LoginAdmin,
	createAdmin,
	getAdmin,
} from "../controllers/loginAdmin.js";
// Init express router
const router = express.Router();

// Router get semua admin desa
router.get("/admindesa", getAdmin);
// Router create admin desa
router.post("/admindesa", createAdmin);
// Router untuk login admin desa
router.post("/loginadmin", LoginAdmin);

// Router get semua pendapatan desa
router.get("/pendapatanDesa", getPendapatan);
// Router get pendapatan desa berdasarkan id
router.get("/pendapatanDesa/:id", getPendapatanId);
// Router post pendapatan desa
router.post("/pendapatanDesa", createPendapatan);
// Router delete pendapatan desa
router.delete("/pendapatanDesa/:id", deletePendapatan);
// Router update pendapatan desa
router.put("/pendapatanDesa/:id", updatePendapatan);

// Router get semua belanja desa
router.get("/belanjaDesa", getBelanja);
// Router get pendapatan desa berdasarkan id
router.get("/belanjaDesa/:id", getBelanjaId);
// Router post belanja desa
router.post("/belanjaDesa", createBelanja);
// Router delete belanja desa
router.delete("/belanjaDesa/:id", deleteBelanja);
// Router update belanja desa
router.put("/belanjaDesa/:id", updateBelanja);

// export router
export default router;
