import { NextFunction, Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { AuthController } from "./auth.controller";
import { UserValidations } from "./auth.validation";
import z from "zod";
import { validateRequest } from "../../middleware/validRequest";

const router = Router();


router.post("/register",validateRequest(UserValidations.PatientRegistrationZodSchema), AuthController.registerPatient);
router.post("/verify-email",validateRequest(UserValidations.PatientEmailVerifyZodSchema), AuthController.verifyPatientEmail);
router.post("/login",validateRequest(UserValidations.LoginZodSchema), AuthController.loginUser);
router.get(
	"/me",
	auth(Role.ADMIN, Role.DOCTOR, Role.PATIENT, Role.SUPER_ADMIN),
	AuthController.getMe,
);
router.post("/refresh-token", AuthController.refreshToken);
router.post("/google", AuthController.googleLogin);

router.post("/forgot-password",validateRequest(UserValidations.ForgotPasswordZodSchema), AuthController.forgotPassword);

router.post("/reset-password",validateRequest(UserValidations.ResetPasswordZodSchema), AuthController.resetPassword);



export const AuthRoutes = router;
