// the codes belongs to the app.ts 

import { NextFunction, Request, Response } from "express";
import app from "../../app";
import z from "zod";
import httpStatus from "http-status";

// zod testing

app.post("/zod", async (req: Request, res: Response, next: NextFunction) => {

	try {
		const UserZodSchema = z.object({
		name: z.string().min(3),
		email: z.email(),
		age: z.number().optional(),
		isVerified: z.boolean().optional(),
		books: z.array(z.string()).optional()
	});

	const payload = req.body;

	const result = UserZodSchema.parse(payload);
	console.log(result);

	res.status(httpStatus.OK).json({
		success: true,
		message: "This is Zod testing",
		data: result
	});

	} catch (error) {
		console.log(error);
		next(error)
	}

	
});