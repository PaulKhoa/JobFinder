import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initwebRoutes from "./routes/web";
import connectDB from "./config/connectDB";
import { sendJobMail, updateFreeViewCv } from "./utils/schedule";
require("dotenv").config();

let app = express();

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.URL_REACT);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
sendJobMail();
updateFreeViewCv();
viewEngine(app);
initwebRoutes(app);
import { Together } from "together-ai";

const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    const response = await together.chat.completions.create({
      messages,
      model: "deepseek-ai/DeepSeek-V3",
      // model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
      // model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
    });
    res.json(response.choices[0].message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("Backend Nodejs is running on the port : " + port);
});
