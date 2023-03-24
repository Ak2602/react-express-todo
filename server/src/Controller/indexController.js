import { con } from "../database/database.js";
import { users } from "../models/user.model.js";

export const login = async (req, response) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    con.sync().then(async () => {
      let user = await users.findOne({
        where: {
          name: username,
          password: password,
        },
      });
      if (user) {
        response.status(200).json({ value: true, user_id: user.id });
      } else {
        response.status(404).json(false);
      }
    });
  } catch (err) {
    response.status(500).json(err);
  }
};
