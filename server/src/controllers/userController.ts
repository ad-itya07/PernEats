import { Request, Response } from "express";
import { createNewUser, userExists } from "../models/userModel";

class UserController {
  async createUser(req: Request, res: Response): Promise<any> {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
            message: "NO USER-DATA PASSED!",
            success: false
        })
      }

      const existingUser = await userExists(email);

      if (existingUser) {
        return res.status(300).json({
          message: "User already exists!",
        });
      }

      const newUser = await createNewUser(req.body);

      return res.status(201).json({
        message: "User created successfully!",
        success: true,
        newUser
      })
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Error creating user",
        success: false,
        err,
      });
    }
  }
}

export default new UserController();
