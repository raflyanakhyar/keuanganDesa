import Login from "../models/loginAdmin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Get All Admin
export const getAdmin = async (req, res) => {
	try {
		const admindesa = await Login.findAll();
		if (!admindesa) {
			return res.status(404).json({
				status: false,
				message: "data not found!",
				data: null,
			});
		}
		return res.json({
			message: "Semua Admin Desa",
			admindesa,
		});
	} catch (err) {
		console.log(err);
	}
};

// Create Admin

export const createAdmin = async (req, res) => {
	try {
		const { username } = req.body;

		const admindesa = await Login.findOne({ where: { username } });
		if (admindesa) {
			res.status(409).json({
				status: false,
				mesaage: "Username sudah ada",
				data: null,
			});
		}
		const created = await Login.create({
			username,
			password: bcrypt.hashSync(req.body.password, 8),
		});
		if (created) {
			let token = jwt.sign({ id: created.id }, process.env.secretKey, {
				expiresIn: 1 * 24 * 60 * 60 * 1000,
			});

			res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
			console.log("admin", JSON.stringify(created, null, 2));
			console.log(token);
			//send users details
			return res.status(201).send(created);
		} else {
			return res.status(409).send("Details are not correct");
		}
	} catch (err) {
		console.log(err);
	}
};

export const LoginAdmin = async (req, res) => {
	try {
		const { username, password } = req.body;
		const admin = await Login.findOne({
			where: {
				username: username,
			},
		});

		if (admin) {
			const isSame = await bcrypt.compare(password, admin.password);

			//if password is the same
			//generate token with the user's id and the secretKey in the env file

			if (isSame) {
				let token = jwt.sign({ id: admin.id }, process.env.secretKey, {
					expiresIn: 1 * 24 * 60 * 60 * 1000,
				});

				//if password matches wit the one in the database
				//go ahead and generate a cookie for the user
				res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
				console.log("admin", JSON.stringify(admin, null, 2));
				console.log(token);
				//send user data
				return res.status(201).send(admin);
			} else {
				return res.status(401).send("Authentication failed");
			}
		} else {
			return res.status(401).send("Authentication failed");
		}
	} catch (error) {
		console.log(error);
	}
};
