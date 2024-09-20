// import sendEmail from "../lib/sendEmail";
// import Subscriber from "../models/subscriber.model";

import sendEmail from "../lib/sendEmail.js";
import Subscriber from "../models/subscriber.model.js";

export const subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    const subscriber = new Subscriber({ email });
    const savedSubscriber = await subscriber.save();

    // Send confirmation email
    await sendEmail(
      savedSubscriber.email,
      "Welcome to our Newsletter!",
      "Thank you for subscribing to our newsletter. We look forward to keeping you updated!"
    );

    res.status(201).json(savedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
