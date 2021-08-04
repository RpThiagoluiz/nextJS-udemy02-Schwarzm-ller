import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-util";

const handler = async (req, res) => {
  const eventId = req.query.eventId; //eventId - vem do slug que foi passado dentro do arquivo.

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed !" });
    return;
  }

  if (req.method === "POST") {
    //add server-side validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalue input." });
      client.close();
      return;
    }

    const newComment = {
      //id: new Date().toISOString(), mongo ja cria
      email,
      name,
      text,
      eventId,
    };

    try {
      const result = await insertDocument(client, "comments", newComment);

      const formatedCommentToSend = {
        id: result.insertedId,
        ...newComment,
      };

      res
        .status(201)
        .json({ message: "Added Comment", comment: formatedCommentToSend });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed !" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        {},
        { _id: -1 }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed." });
    }
  }

  client.close();
};

export default handler;
