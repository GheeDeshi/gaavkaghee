import { z } from "zod";

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const SignUpSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(1, { message: "Email is required" }).email().trim(),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .regex(passwordRegex, {
      message:
        "Password must be at least eight characters, at least one letter, one number and one special character",
    })
    .trim(),
});

export const LoginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email().trim(),
  password: z.string().min(1, { message: "Password is required" }).trim(),
});


export const AddCategorySchema = z.object({
    title: z.string().min(1, { message: "Title is required" }).email().trim(),
    description: z.string().min(1, { message: "Description is required" }).trim(),
  });
