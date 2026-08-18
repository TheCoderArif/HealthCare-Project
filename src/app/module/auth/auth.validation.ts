import z from "zod";

const PatientRegistrationZodSchema = z.object({
  name: z
    .string("Name must be a string")
    .min(3, "Name must be atleast 3 charecter")
    .max(25, "Name can contain maximum 25 charecter"),
  email: z.email("Please check the email"),
  password: z
    .string("Please enter Password")
    .min(8, "Password length must be 8")
    .regex(/[A-Z]/, "Password must contain atleast one upper letter")
    .regex(/[a-z]/, "Password must contain atleast one lower letter")
    .regex(/[0-9]/, "Password must contain atleast one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 special charecter"),
  patient: z
    .object({
      contactNumber: z.string().optional(),
    })
    .optional(),
});

const LoginZodSchema = z.object({
    email: z.email(),
    password: z
    .string("Please enter Password")
    .min(8, "Password length must be 8")
    .regex(/[A-Z]/, "Password must contain atleast one upper letter")
    .regex(/[a-z]/, "Password must contain atleast one lower letter")
    .regex(/[0-9]/, "Password must contain atleast one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 special charecter"),

});

export const UserValidations = {
  PatientRegistrationZodSchema,
  LoginZodSchema
};
