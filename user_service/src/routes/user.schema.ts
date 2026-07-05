import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address " }),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters long" }),
});



// router.route("login").post(validateRequest(userLoginSchema, validationSource.BODY), loginUserHandler);