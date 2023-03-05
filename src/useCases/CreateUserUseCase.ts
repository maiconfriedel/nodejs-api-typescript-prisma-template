import { hash } from "bcrypt";
import { ValidationException } from "../models/exceptions/ValidationException";
import { CreateUserModel, CreateUserSchema } from "../models/User";
import { prismaClient } from "../prisma/prismaClient";

class CreateUserUseCase {
  async execute({ name, email, password, avatar_url }: CreateUserModel) {
    try {
      CreateUserSchema.parse({
        name,
        email,
        password,
        avatar_url,
      });
    } catch (err) {
      throw new ValidationException({
        message: "Failed to create user",
        errors: err,
      });
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new ValidationException({
        message: "Failed to create user",
        errors: [`User with email ${email} already exists`],
      });
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: await hash(password, 8),
        avatar_url,
      },
    });

    return user;
  }
}

export { CreateUserUseCase };
