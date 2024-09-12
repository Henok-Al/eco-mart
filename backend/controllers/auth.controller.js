import User from "../models/user.model.js";

export const Signup = async (req, res) => {
  const { email, password, name } = req.body; //for using this we should add app.use(express.json())
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({ user, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const Login = async (req, res) => {
  res.send("Login route called!");
};

export const Logout = async (req, res) => {
  res.send("logout route called!");
};
