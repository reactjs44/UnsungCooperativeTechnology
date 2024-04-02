import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server is running");
});

app.post("/api/email", async (req, res) => {
  try {
    const { email } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "durgamabhilash44@gmail.com",
        pass: "fpts czwi xzxa wwte",
      },
    });

    const mailOptions = {
      from: "durgamabhilash44@gmail.com",
      to: email,
      subject: "this is testing purpose",
      text: "this is a test mail",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ message: "error occured while sending mail" });
      } else {
        res.status(200).json({ message: "email send successfully" });
      }
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "error occured at backend while sending email" });
  }
});
app.listen(3000, () => {
  console.log("Express server initialized");
});
