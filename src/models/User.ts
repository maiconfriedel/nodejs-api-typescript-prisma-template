import Joi from "joi";

export type UserModel = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar_url?: string;
};

export const UserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email()
    .message("Email must be an valid email"),
  password: Joi.string().required(),
  avatar_url: Joi.string()
    .uri()
    .message("Avatar URL must be a valid URL")
    .optional(),
});

export const AuthSchema = Joi.object({
  email: Joi.string()
    .required()
    .email()
    .message("Email must be an valid email"),
  password: Joi.string().required(),
});

export const AuthRefreshTokenSchema = Joi.object({
  refresh_token: Joi.string().required(),
});

export type CreateUserModel = {
  name: string;
  email: string;
  password: string;
  avatar_url?: string;
};
