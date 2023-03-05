import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  avatar_url: z.string().url().optional(),
});

export type UserModel = z.infer<typeof UserSchema>;

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  avatar_url: z.string().url().optional(),
});

export type CreateUserModel = z.infer<typeof CreateUserSchema>;

export const AuthSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const AuthRefreshTokenSchema = z.object({
  refresh_token: z.string(),
});
