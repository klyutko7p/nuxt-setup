import { User } from "~~/server/models/User";

interface IRequestBody {
  name: string;
  email: string;
  password: string;
}

export default defineEventHandler(async (event) => {
  const { email, password, name } = await readBody<IRequestBody>(event);

  try {
    const userData = await User.findOne({
      email,
    });

    if (userData) {
      console.log(`User with email ${email} already exists`);
      event.res.statusCode = 409;
      return {
        code: "USER_EXISTS",
        message: "User with given email already exists.",
      };
    } else {
      console.log("Create user");
      const newUserData = await User.create({
        email,
        password,
        name,
      });
      return {
        id: newUserData._id,
        name: newUserData.name,
      };
    }
  } catch (err) {
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something wrong.",
    };
  }
});
