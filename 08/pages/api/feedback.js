import fs from "fs";
import path from "path";

const buildFeedbackPath = () =>
  path.join(process.cwd(), "data", "feedback.json");

const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

const handler = (req, res) => {
  if (req.method === "POST") {
    //Extract data from body when post.
    const email = req.body.email;
    const text = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text,
    };
    //store  thant in a database or in a file - in root
    //Valid data
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({
      message: "Success!",
      feedback: newFeedback,
    });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({
      message: "All feedbacks",
      feedback: data,
    }); //success - json data
  }
};

export default handler;
