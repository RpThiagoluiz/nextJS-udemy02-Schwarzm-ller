import fs from "fs";
import path from "path";

export const buildFeedbackPath = () =>
  path.join(process.cwd(), "data", "comment.json");

export const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

const handler = (req, res) => {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    //simples check
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid Input." });
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    //store  thant in a database or in a file - in root
    //Valid data
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newComment);
    fs.writeFileSync(filePath, JSON.stringify(data));

    req
      .status(201)
      .json({ message: "Added comment.", comment: { newComment } });
  }
  if (req.method === "GET") {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    // const dummyList = []

    res.status(200).json({
      message: "All Comments",
      feedback: data,
    }); //success - json data
  }
};

export default handler;
