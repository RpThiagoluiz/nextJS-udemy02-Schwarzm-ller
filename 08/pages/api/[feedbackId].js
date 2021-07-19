import { buildFeedbackPath, extractFeedback } from "./feedback";

const handler = (request, response) => {
  // if (request.method === "DELETE") {
  //   return;
  // }

  const feedbackId = request.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );

  return response.status(200).json({ feedback: selectedFeedback });
};

export default handler;
